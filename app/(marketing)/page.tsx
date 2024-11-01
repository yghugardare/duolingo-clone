import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Sign } from "crypto";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[998px] mx-auto flex-1 flex w-full p-4 flex-col lg:flex-row items-center gap-2  justify-center ">
      {/* image container */}
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8">
        {/* hero.svg image */}
        <Image src="/hero.svg" fill alt="hero" />
      </div>
      {/* title */}
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold  text-neutral-600 max-w-[480px] text-center">
          Learn, Practice, and Master new languages with Lingo.
        </h1>
        <div className="flex flex-col gap-y-3 items-center max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
