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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router";
import { adminSidebarRoutes } from "@/routes/adminRoutes";
import { teams } from "@/db/team.mock";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Team } from "@/types/team";

const LabelGr = ({ label }: { label: string }) => {
  return (
    <SidebarGroupLabel className="text-[12px] font-semibold text-[#a3a3a3] ">
      {label}
    </SidebarGroupLabel>
  );
};
export function Side() {
  // states
  const [selectedWorkspace, setSelectedWorkspace] = useState<Team>(teams[0]);


  const here = useLocation().pathname;
  console.log(here);
  return (
    <Sidebar className="text-[18px] w-[240px]" collapsible="icon">
      <SidebarHeader className="py-4 hover:bg-gray-100">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <SidebarMenuItem className="flex items-center gap-2">
                    {selectedWorkspace.icon && (
                      <div className="flex items-center justify-center w-7 h-7 rounded-lg text-white bg-[#4f46e5]">
                        <selectedWorkspace.icon className="h-4 w-4" />
                      </div>
                    )}
                    <div className="flex flex-col justify-center gap-0.5">
                      <span className="font-semibold">{selectedWorkspace.name}</span>
                      <span className="text-xs text-gray-500">
                        {selectedWorkspace.description}
                      </span>
                    </div>
                  </SidebarMenuItem>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width] py-2 ">
                {teams.map((team) => (
                  <DropdownMenuItem key={team.id} className="cursor-pointer"
                    onClick={() => setSelectedWorkspace(team)}
                    asChild
                  >
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 bg-gray-100">
                          {team.icon && <team.icon className="h-4 w-4" />}
                        </div>
                        <div className="flex flex-col justify-center gap-0.5">
                          <span>{team.name}</span>
                          <span className="text-xs text-gray-500">
                            {team.description}
                          </span>
                        </div>
                      </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Group for management */}
        <SidebarGroup>
          <LabelGr label="Mangement" />
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
