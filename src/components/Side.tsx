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
import { Contact, Home, FileClock, Settings } from "lucide-react";
import logo from "../assets/logo.jfif";
import { Link, useLocation } from "react-router";

const sidebarItem = [
  {
    icon: Home,
    label: "Dashboard",
    href: "/dashboard",

  },
  {
    icon: Contact,
    label: "Customer",
    href: "/dashboard/customer",
  },
  {
    icon: FileClock,
    label: "History",
    href: "/dashboard/history",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
  },
];

const LabelGr = ({ label }: { label: string }) => {
  return (
    <SidebarGroupLabel className="text-sm font-semibold text-[#2a3547]">
      {label}
    </SidebarGroupLabel>
  );
};
export function Side() {
  const here = useLocation().pathname;
  console.log(here);
  return (
    <Sidebar className="pl-4">
      <SidebarHeader>
        <div className="flex items-center h-10 my-4">
          <img src={logo} alt="" className="h-10 " />
          <div className="text-2xl font-bold font-mono w-[80%] h-full flex items-end  pl-4 text-[#00913e]">
            RICSE
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="pl-2 pr-2 text-[#2a472f]">
        <SidebarGroup>
          <LabelGr label="MANAGER" />
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItem.map((item) => (
                <SidebarMenuItem key={item.label} className="h-12">
                  <SidebarMenuButton
                    asChild
                    className="  h-full transition-colors delay-0 duration-0 "
                  >
                    <Link
                      to={item.href}
                      className={`text-neutral-700  font-normal ${here == item.href ? "bg-[#00913e] text-white hover:bg-[#00913e] hover:text-white" : "hover:bg-[#c7f7d0] hover:text-[#00913e]"} `}
                    >
                      <div className="flex items-center h-full pl-1">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
