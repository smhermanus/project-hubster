import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Plus, FileText, Users, MessageSquare } from "lucide-react";

export const QuickActions = () => {
  const actions = [
    {
      label: "Create Task",
      icon: Plus,
      onClick: () => console.log("Create task"),
    },
    {
      label: "New Document",
      icon: FileText,
      onClick: () => console.log("New document"),
    },
    {
      label: "Invite Team",
      icon: Users,
      onClick: () => console.log("Invite team"),
    },
    {
      label: "Start Chat",
      icon: MessageSquare,
      onClick: () => console.log("Start chat"),
    },
  ];

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-2 card-hover"
              onClick={action.onClick}
            >
              <action.icon className="h-6 w-6" />
              <span className="text-sm">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};