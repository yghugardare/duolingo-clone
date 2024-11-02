import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-2 hidden h-20 lg:block border-t-2 border-slate-200 w-full">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src="/in.svg"
            alt="india-flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Hindi
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src="/es.svg"
            alt="spain-flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src="/it.svg"
            alt="italy-flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src="/jp.svg"
            alt="japan-flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src="/fr.svg"
            alt="japan-flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
      </div>
    </footer>
  );
};
export default Footer;
