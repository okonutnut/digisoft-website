import { cn } from "@/lib/utils";
import NavBar from "./navbar";
import Footer from "./footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  hasNavbar?: boolean;
  hasSidebar?: boolean;
}
export default function PageLayout({
  children,
  className,
  hasNavbar,
  hasSidebar,
}: PageLayoutProps) {
  return (
    <>
      <main className={cn(className, "2xl: container mx-auto")}>
        {hasNavbar && <NavBar />}
        {children}
      </main>
      <Footer />
    </>
  );
}
