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

export default function NavBar() {
  const menuItems = [
    {
      title: "Products",
      items: [
        {
          title: "Product 1",
          description: "Product 1 description",
          href: "/product-1",
        },
        {
          title: "Product 2",
          description: "Product 2 description",
          href: "/product-2",
        },
        {
          title: "Product 3",
          description: "Product 3 description",
          href: "/product-3",
        },
      ],
    },
    {
      title: "Showcase",
      items: [
        {
          title: "List of Clients",
          description: "List of clients",
          href: "/product-1",
        },
      ],
    },
  ];
  return (
    <nav className="w-full text-slate-900 bg-white/30 backdrop-blur-sm py-6 sticky top-0 z-50">
      <div className="px-2 mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-slate-900">
          DIGITAL SOFTWARE
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  key={item.title}
                  className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] 2xl:w-[500px]">
                    {item.items.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link to={"/brochure"}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
                  )}
                >
                  Brochure
                </NavigationMenuLink>
              </Link>
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
