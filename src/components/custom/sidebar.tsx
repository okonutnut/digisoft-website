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

export default function AppSidebar() {
  const menuItems = [
    {
      title: "Overview",
    },
    {
      title: "Downloads",
    },
    {
      title: "Release Notes",
    },
    {
      title: "Brochures",
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-between items-center my-3">
          <Link to={"/"} className="text-md uppercase font-bold text-slate-900">
            Digital Software
          </Link>
          <Separator orientation="vertical" />
          <h3 className="uppercase text-sm text-slate-900">Product</h3>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md font-semibold text-slate-900">
            SIAS-LMS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton>{item.title}</SidebarMenuButton>
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
