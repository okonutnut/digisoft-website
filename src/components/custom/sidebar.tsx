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
      <SidebarHeader className="text-white py-5 bg-[url('/images/hero.svg')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-around items-center my-3 text-current">
          <Link to="/" className="text-sm uppercase font-bold">
            DIGITAL SOFTWARE
          </Link>
          <p className="m-0 p-0">|</p>
          <h3 className="uppercase text-xs cursor-default">{pageName}</h3>
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
