import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";

interface AppSidebarProps {
  productTitle?: string;
  pageName?: string;
  menuItems?: { title: string; id: string }[];
}
export default function AppSidebar({
  productTitle,
  pageName,
  menuItems,
}: AppSidebarProps) {
  const scrollIntoElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-between items-center my-3">
          <Link to={"/"} className="text-md uppercase font-bold text-slate-900">
            Digital Software
          </Link>
          <Separator orientation="vertical" />
          <h3 className="uppercase text-sm text-slate-900">{pageName}</h3>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {productTitle && (
            <SidebarGroupLabel className="text-primary text-md uppercase cursor-default">
              {productTitle}
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems?.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton onClick={() => scrollIntoElement(item.id)}>
                    {item.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
