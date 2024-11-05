import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database...");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.challengeOptions);
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Hindi",
        imageSrc: "./in.svg",
      },
      {
        id: 2,
        title: "Spanish",
        imageSrc: "./es.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "./fr.svg",
      },
      {
        id: 4,
        title: "Italian",
        imageSrc: "./it.svg",
      },
    ]);
    await db.insert(schema.units).values([
      {
        id: 1,
        title: "Unit 1",
        description: "Learn the basics of the Hindi",
        courseId: 1, //hindi
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        title: "Nouns",
        unitId: 1, //learn the basics of the hindi
        order: 1,
      },
      //   {
      //     id: 2,
      //     title: "Verbs",
      //     unitId: 1, //learn the basics of the hindi
      //     order: 2,
      //   }
    ]);
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, //Nouns
        type: "SELECT",
        question: "Which one of these is the 'the man'?",
        order: 1,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1, //Which one of these is the 'the man'?
        imageSrc: "/man.svg",
        correct: true,
        text: "मनुष्य",
        audioSrc: "/in_man.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "औरत",
        audioSrc: "/in_woman.mp3",
      },{
        id: 3,
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "रोबोट",
        audioSrc: "/in_robot.mp3",
      },
    ]);
    console.log("Seeding Database Complete");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};
main();
