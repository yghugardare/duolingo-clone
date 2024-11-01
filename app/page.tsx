import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex w-full p-5 flex-col space-y-4 justify-center ">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary Outline</Button>
      {/* danger and danger outline */}
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger Outline</Button>
      {/* super and super outline */}
      <Button variant="super">Super</Button>
      <Button variant="superOutline">Super Outline</Button>

      <Button variant="ghost">Ghost</Button>
      {/* sidebar and sidebar outline */}
      <Button variant="sidebar">Sidebar</Button>
      <Button variant="sidebarOutline">Sidebar Outline</Button>
    </div>
  );
}
