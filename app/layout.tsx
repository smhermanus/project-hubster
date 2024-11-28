import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import "@/styles/globals.css";

export const metadata = {
  title: 'Project Management Dashboard',
  description: 'A full-stack web development agency dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            <Header />
            <div className="flex">
              <Sidebar />
              <main className="flex-1">{children}</main>
            </div>
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}