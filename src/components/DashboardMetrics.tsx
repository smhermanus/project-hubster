import { Card } from "./ui/card";
import { ArrowUp, ArrowDown, Clock, CheckCircle2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export const DashboardMetrics = () => {
  const metrics = [
    {
      label: "Active Projects",
      value: "12",
      change: "+2",
      trend: "up",
      icon: Clock,
    },
    {
      label: "Completed Tasks",
      value: "128",
      change: "+12",
      trend: "up",
      icon: CheckCircle2,
    },
    {
      label: "Team Members",
      value: "24",
      change: "-1",
      trend: "down",
      icon: Users,
    },
  ];

  return (
    <div className="space-y-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6 card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </p>
              <p className="text-2xl font-bold mt-1">{metric.value}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <metric.icon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {metric.trend === "up" ? (
              <ArrowUp className="h-4 w-4 text-success" />
            ) : (
              <ArrowDown className="h-4 w-4 text-destructive" />
            )}
            <span
              className={cn(
                "text-sm ml-1",
                metric.trend === "up" ? "text-success" : "text-destructive"
              )}
            >
              {metric.change} from last month
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};