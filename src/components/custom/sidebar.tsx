import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
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
      <SidebarHeader className="text-[#16294a] dark:text-white dark:bg-[#004580] pt-5 bg-[url('/images/overlay/top.svg')] bg-cover bg-top bg-no-repeat border-b">
        <div className="flex justify-around items-center my-5 text-current">
          <Link to="/" className="text-md uppercase font-bold">
            DIGITAL SOFTWARE
          </Link>
          <p className="m-0 p-0">|</p>
          <h3 className="uppercase text-xs cursor-default">{pageName}</h3>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-white dark:bg-[#004580] text-black dark:text-white">
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
    </Sidebar>
  );
}
