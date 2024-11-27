import { Home, KanbanSquare, Calendar, CheckSquare, Users, Folder } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useLocation, Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Kanban", href: "/kanban", icon: KanbanSquare },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Team", href: "/team", icon: Users },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-y-4 h-[calc(100vh-4rem)] w-64 border-r bg-white/80 backdrop-blur-sm p-4">
      <div className="flex h-12 items-center border-b px-4">
        <span className="font-display text-xl font-bold">Workspace</span>
      </div>
      <nav className="flex-1 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="border-t pt-4">
        <Button variant="outline" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  );
};