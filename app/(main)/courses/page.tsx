import { getCourses } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
    const courses = await getCourses();
    return (
        <main className="h-full max-w-[912px] mx-auto px-3">
            <h1
            className="text-2xl font-bold text-neutral-700 "
            >Language Courses</h1>
            <List courses={courses} activeCourseId={1} />
        </main>
    );
}

export default CoursesPage