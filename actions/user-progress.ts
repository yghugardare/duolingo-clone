"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs";
import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();
  if (!user || !userId) {
    throw new Error("Unauthorized");
  }
  const course = await getCourseById(courseId);
  if (!course) {
    throw new Error("Course not found");
  }
  // throw new Error("test");
  // TODO:
  // if(!course.units.length || !course.units[0].lessons.length){
  //     throw new Error("Course is Empty!");
  // }
  const existingUserProgress = await getUserProgress();
  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      username: user.firstName || "User",
      userImgSrc: user.imageUrl || "./mascot.svg",
    });
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  } else {
    await db.insert(userProgress).values({
      userId,
      username: user.firstName || "User",
      userImgSrc: user.imageUrl || "./mascot.svg",
      activeCourseId: courseId,
    });
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }
};
