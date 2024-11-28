import { DashboardMetrics } from "@/components/DashboardMetrics";
import { RecentActivity } from "@/components/RecentActivity";
import { QuickActions } from "@/components/QuickActions";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 animate-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-4xl font-bold text-primary">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back to your workspace</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardMetrics />
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
}