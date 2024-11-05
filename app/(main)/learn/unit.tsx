import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";
import { LessonsButton } from "./lesson-button";

type Props = {
  id: number;
  title: string;
  description: string;
  // as we are normalizing the data we need to add the type here
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[];
  order: number;
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({ id, title, description, lessons, order ,activeLesson,activeLessonPercentage}: Props) => {
  return (
    <>
      <UnitBanner title={title} decription={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson) => {
            const isCurrent = lesson.id === activeLesson?.id;
            const isLocked = !lesson.completed && !isCurrent;
            return (
                <LessonsButton key={lesson.id} id={lesson.id} index={order} totalCount={lessons.length-1} locked={isLocked} current={isCurrent} percentage={activeLessonPercentage} />
            )
        })}
      </div>
    </>
  );
};
