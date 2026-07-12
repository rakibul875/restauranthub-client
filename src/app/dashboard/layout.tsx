import SideBare from "@/components/dashboard/Sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-5">
        <SideBare/>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
