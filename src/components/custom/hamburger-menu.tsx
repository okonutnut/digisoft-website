import { AlignJustify, Boxes, ListOrdered } from "lucide-react";
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
            <AlignJustify className=" h-10 w-10" />
          </Button>
        </SheetTrigger>
        <SheetContent className="py-10" side={"left"}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <Boxes className="h-4 w-4" />
                  {menuItems.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-2">
                <ul>
                  {menuItems.items.map((component, index: number) => (
                    <li className="my-1" key={index}>
                      <Link
                        key={index}
                        to={component.href}
                        className="text-xs underline"
                      >
                        {component.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <span className="flex items-center gap-2">
            <ListOrdered className="h-4 w-4" />
            <Link to={"/list-of-clients"} className="text-sm font-medium">
              List of Clients
            </Link>
          </span>
        </SheetContent>
      </Sheet>
    </>
  );
}
