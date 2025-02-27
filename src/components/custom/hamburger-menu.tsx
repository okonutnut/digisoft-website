import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function HamburgerMenu() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"ghost"}
            className="block md:hidden lg:hidden xl:hidden 2xl:hidden"
          >
            <AlignJustify className="text-black h-10 w-10" />
          </Button>
        </SheetTrigger>
        <SheetContent>Navigation Menu</SheetContent>
      </Sheet>
    </>
  );
}
