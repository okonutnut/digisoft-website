import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";

interface AppSidebarProps {
  pageName?: string;
  menuItems?: { title: string; id: string }[];
}
export default function AppSidebar({ pageName, menuItems }: AppSidebarProps) {
  function scrollIntoElement(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return (
    <Sidebar>
      <SidebarHeader className="bg-[#4996C9] dark:bg-[#004580] py-5">
        <div className="flex justify-between items-center my-3 text-current">
          <Link to="/" className="text-md uppercase font-bold">
            DIGITAL SOFTWARE
          </Link>
          <Separator orientation="vertical" />
          <h3 className="uppercase text-sm cursor-default">{pageName}</h3>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
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
