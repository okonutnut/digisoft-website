import React from "react";
import { cn } from "@/lib/utils";
const NavBar = React.lazy(() => import("./navbar"));
const Footer = React.lazy(() => import("./footer"));
const AppSidebar = React.lazy(() => import("./sidebar"));
import { SidebarProvider } from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";
import { ThemeProvider } from "../theme-provider";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  hasNavbar?: boolean;
  hasSidebar?: boolean;
  productTitle?: string;
  pageName?: string;
  menuItems?: { title: string; id: string }[];
}
export default function PageLayout({
  children,
  className,
  hasNavbar,
  hasSidebar,
  productTitle,
  pageName,
  menuItems,
}: PageLayoutProps) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {hasSidebar && (
        <SidebarProvider>
          <AppSidebar
            productTitle={productTitle}
            pageName={pageName}
            menuItems={menuItems}
          />
          <main className={cn(className, "w-screen mx-auto")}>
            {children}
            <Separator />
            <Footer />
          </main>
        </SidebarProvider>
      )}
      {hasNavbar && (
        <>
          <main className={cn(className, "w-screen mx-auto")}>
            <NavBar />
            {children}
          </main>
          <Separator />
          <Footer className="2xl:container" />
        </>
      )}
    </ThemeProvider>
  );
}
