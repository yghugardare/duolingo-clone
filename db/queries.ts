import { cache } from "react";
import db from "@/db/drizzle";

export const getCourses = cache(async () => {
    return await db.query.courses.findMany();
})
