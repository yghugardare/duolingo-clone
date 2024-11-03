import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  imageSrc: string;
  active?: boolean;
  disabled?: boolean;
  onClick: (id: number) => void;
};

export const Card = ({
  id,
  title,
  imageSrc,
  active,
  disabled,
  onClick,
}: Props) => {
  return <div
  onClick={() => onClick(id)}
  className={cn("h-full border-2 border-b-4 cursor-pointer rounded-xl hover:bg-black/5 active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[270px] min-w-[200px]",disabled && "pointer-events-none opacity-50")}
  >
    <div className="flex min-h-[24px] w-full items-center justify-end  ">
    {
        active && <div className="rounded-md bg-green-500 p-1.5 flex items-center justify-center">
            <CheckIcon className="text-white stroke-[4] h-4 w-4 "/>
        </div>
    }
    </div>
    <Image src={imageSrc} alt={title} width={93.33} height={70} className="rounded-md drop-shadow-md border  object-cover"/>
    <p className="text-neutral-700 text-center font-bold mt-3">{title}</p>
  </div>;
};
