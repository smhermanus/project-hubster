import { Bell, Search, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-8 bg-muted/50 border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] text-white flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="rounded-full w-8 h-8 aspect-square bg-primary"
          >
            <span className="sr-only">Profile</span>
            <span className="text-primary-foreground text-sm">JD</span>
          </Button>
        </div>
      </div>
    </header>
  );
};