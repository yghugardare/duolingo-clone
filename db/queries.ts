import { cache } from "react";
import db from "@/db/drizzle";
import { auth } from "@clerk/nextjs";
import { courses, units, userProgress,challengeProgress } from "./schema";
import { eq } from "drizzle-orm";

export const getCourses = cache(async () => {
  return await db.query.courses.findMany();
});

export const getUserProgress = cache(async () => {
  const { userId } = await auth();
  if (!userId) return null;
  return await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });
});

export const getCourseById = cache(async (courseId: number) => {
  return await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    // TODO: Populate units aand lessons
  });
});
export const getUnits = cache(async () => {
  const {userId} = await auth();
  const userProgress = await getUserProgress();
  if (!userId || !userProgress?.activeCourseId) {
    return [];
  }
  // TODO: Confirm whether order is needed
  const data = await db.query.units.findMany({
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        with: {
          challenges: {
            with: {
              challengeProgress: {
                where : eq(challengeProgress.userId, userId),
              },
            },
          },
        },
      },
    },
  });
  const normalizedData = data.map((unit) => {
    const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
      const allCompletedChallenges = lesson.challenges.every((challenge) => {
        return (
          challenge.challengeProgress &&
          challenge.challengeProgress.length > 0 &&
          challenge.challengeProgress.every((progress) => progress.completed)
        );
      });
      return {
        ...lesson,
        completed: allCompletedChallenges,
      };
    });
    return {
      ...unit,
      lessons: lessonsWithCompletedStatus,
    }
  });

  return normalizedData;
});
