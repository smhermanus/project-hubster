import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "completed task",
      target: "Update homepage design",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "commented on",
      target: "API Integration",
      time: "4 hours ago",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "created",
      target: "New feature request",
      time: "6 hours ago",
    },
  ];

  return (
    <Card className="col-span-2">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <ScrollArea className="h-[400px] mt-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg bg-muted/50"
              >
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  {activity.user.charAt(0)}
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}{" "}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
};