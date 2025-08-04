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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ChevronDown,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import { adminSidebarRoutes } from "@/routes/adminRoutes";
import { teams } from "@/db/team.mock";

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
    <Sidebar className="" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Group for management */}
        <SidebarGroup>
          <LabelGr label="MANAGEMENT" />
          <SidebarGroupContent>
            <SidebarMenu>
              {adminSidebarRoutes.map(({ path, title, icon: Icon }) => (
                <SidebarMenuItem
                  key={path}
                  className="hover:bg-gray-200 py-2 rounded"
                >
                  <SidebarMenuButton asChild>
                    <Link to={path}>
                      <div className="flex items-center gap-2">
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{title}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Group for config */}
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
