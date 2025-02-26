import { cn } from "@/lib/utils";
import NavBar from "./navbar";
import Footer from "./footer";
import AppSidebar from "./sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  productTitle?: string;
  hasNavbar?: boolean;
  hasSidebar?: boolean;
}
export default function PageLayout({
  children,
  className,
  productTitle,
  hasNavbar,
  hasSidebar,
}: PageLayoutProps) {
  return (
    <>
      {hasSidebar && (
        <SidebarProvider>
          <AppSidebar productTitle={productTitle} />
          <main className={cn(className, "w-screen mx-auto")}>
            {children}
            <Footer />
          </main>
        </SidebarProvider>
      )}
      {hasNavbar && (
        <>
          <main className={cn(className, "2xl: container mx-auto")}>
            <NavBar />
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
