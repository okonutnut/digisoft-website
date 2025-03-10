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
        title: "Browse Products",
        items: productArray,
      },
    ],
    [productArray]
  );
  return (
    <nav className="w-full text-current bg-current/30 backdrop-blur-sm 2xl:py-6 xs:py-3 fixed top-0 z-50">
      <div className="w-full px-2 mx-auto flex justify-between items-center">
        {/* HEADER */}
        <span className="w-screen flex items-center xs:justify-between space-x-1">
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

        {/* MENU ITEMS */}
        <NavigationMenu className="hidden md:block lg:block xl:block 2xl:block">
          <NavigationMenuList className="w-full flex justify-between space-x-4">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title} className="">
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {item.items.map((component) => (
                      <ListItem
                        className="text-primary col-span-full"
                        key={component.title}
                        title={component.title}
                        to={component.href}
                      >
                        {component.short_des}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link
                to="/release-notes"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
                )}
              >
                <NavigationMenuLink>Release Notes</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/list-of-clients"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
                )}
              >
                <NavigationMenuLink>List of Clients</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* DARK MODE FB */}
        <NavigationMenu className="hidden md:block lg:block xl:block 2xl:block">
          <NavigationMenuList className="w-full flex justify-between">
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
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
