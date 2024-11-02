import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { User } from "@clerk/nextjs/server";
type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      {/* logo */}
      <Link href={"/learn"}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 ">
          <Image src="/mascot.svg" alt="logo" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      {/* sidebar items */}
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem iconSrc="/learn.svg" label="Learn" href="/learn" />
        {/* leaderboard */}
        <SidebarItem
          iconSrc="/leaderboard.svg"
          label="Leaderboard"
          href="/leaderboard"
        />
        {/* quests */}
        <SidebarItem iconSrc="/quests.svg" label="Quests" href="/quests" />
        {/* shop */}
        <SidebarItem iconSrc="/shop.svg" label="Shop" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/"/>
        </ClerkLoaded>
      </div>
    </div>
  );
};
