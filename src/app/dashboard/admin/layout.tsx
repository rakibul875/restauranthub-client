
import {  roleBaseSession } from "@/lib/api/getuser";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = async ({
  children,
}: AdminLayoutProps): Promise<React.ReactNode> => {
  await roleBaseSession("admin");

  return <>{children}</>;
};

export default AdminLayout;