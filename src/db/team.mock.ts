import { Team } from "@/types/team";
import { AppWindow, Database, ServerCog } from "lucide-react";

export const teams: Team[] = [
  {
    id: "1",
    name: "Dev ",
    description: "Coding",
    icon: Database
  },
  {
    id: "2",
    name: "Design ",
    description: "Architecture ",
    icon: AppWindow
  },
  {
    id: "3",
    name: "DevOps",
    description: "Infrastructure",
    icon: ServerCog
  }
];