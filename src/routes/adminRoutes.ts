import { IdCard, FileUser, FolderOpenDot, RemoveFormatting } from "lucide-react";

export const adminSidebarRoutes = [
  { path: "/admin/dashboard", title: "Dashboard", icon: IdCard },
  { path: "/admin/staff", title: "Staff", icon: FileUser },
  { path: "/admin/projects", title: "Projects", icon: FolderOpenDot },
  { path: "/admin/tasks", title: "Tasks", icon: RemoveFormatting },
];