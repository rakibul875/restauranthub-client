
import {  roleBaseSession } from "@/lib/api/getuser";
import React from "react";

interface CustomerLayoutProps {
  children: React.ReactNode;
}

const CustomerLayout = async ({
  children,
}: CustomerLayoutProps): Promise<React.ReactNode> => {
  await roleBaseSession("customer");

  return <>{children}</>;
};

export default CustomerLayout;