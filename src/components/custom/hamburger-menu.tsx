import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GetAllProducts } from "@/hooks/read-excel";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const productArray = GetAllProducts();
  const menuItems = {
    title: "Browse Products",
    items: productArray,
  };
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
        <SheetContent className="py-10" side={"left"}>
          <Accordion type="single">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="underline text-sm font-medium">
                {menuItems.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  {menuItems.items.map((component, index: number) => (
                    <li className="text-start my-1" key={index}>
                      <Link
                        key={index}
                        to={component.href}
                        className="text-xs underline text-slate-900"
                      >
                        {component.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            to={"/list-of-clients"}
            className="text-sm font-medium underline"
          >
            List of Clients
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
}
