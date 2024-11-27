import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Layout } from "@/components/Layout";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import { RecentActivity } from "@/components/RecentActivity";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 animate-in">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-4xl font-bold text-primary">Dashboard</h1>
            <p className="text-muted-foreground mt-2">Welcome back to your workspace</p>
          </div>
          <Button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                toast({
                  title: "Project created",
                  description: "Your new project has been created successfully.",
                });
                setIsLoading(false);
              }, 1000);
            }}
            className="bg-primary text-white hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "New Project"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardMetrics />
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </Layout>
  );
};

export default Index;