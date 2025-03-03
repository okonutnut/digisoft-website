import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { GetAllProducts } from "@/hooks/read-excel";
import { ModeToggle } from "../mode-toggle";
const HamburgerMenu = React.lazy(() => import("./hamburger-menu"));

export default function NavBar() {
  const productArray = GetAllProducts();
  const menuItems = React.useMemo(
    () => [
      {
        title: "Products",
        items: productArray,
      },
    ],
    [productArray]
  );
  return (
    <nav className="w-full text-current bg-current/30 backdrop-blur-sm 2xl:py-6 xs:py-3 fixed top-0 z-50">
      <div className="px-2 mx-auto flex justify-between items-center">
        <span className="w-full flex items-center xs:justify-between space-x-1">
          <HamburgerMenu />
          <Link
            to="/"
            className="xl:text-2xl xs:text-xl font-bold text-current"
          >
            DIGITAL SOFTWARE
          </Link>
          <span className="items-center hidden xs:flex sm:flex md:hidden 2xl:hidden lx:hidden lg:hidden">
            <ModeToggle />
          </span>
        </span>
        <NavigationMenu className="hidden md:block lg:block xl:block 2xl:block">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] 2xl:w-[500px]">
                    {item.items.map((component) => (
                      <ListItem
                        className="text-primary col-span-full"
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.short_des}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/list-of-clients"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
                )}
              >
                List of Clients
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
