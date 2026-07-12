import { getUserSession } from "@/lib/api/getuser";
import { Bars } from "@gravity-ui/icons";
import { Avatar, Button, Drawer } from "@heroui/react";
import {
  Calendar,
  CreditCard,
  HeartPulse,
  LayoutGrid,
  Star,
  Users,
  LucideIcon,
} from "lucide-react"; 
import Link from "next/link";
import { IoBagAdd } from "react-icons/io5";


interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

interface UserSession {
  name: string;
  email: string;
  role: string; 
  image?: string;
}

const SideBare = async () => {
  
  const user = (await getUserSession()) as UserSession | null;



  const roleNavItems: Record<string, NavItem[]> = {
    customer: [
      {
        icon: LayoutGrid,
        label: "Dashboard Overview",
        path: "/dashboard/customer",
      },
      {
        icon: Calendar,
        label: "My Orders",
        path: "/dashboard/customer/my-orders",
      },
      {
        icon: CreditCard,
        label: "Payment History",
        path: "/dashboard/customer/payments",
      },
      {
        icon: Star,
        label: "My Reviews",
        path: "/dashboard/customer/reviews",
      },
    ],
    admin: [
      {
        icon: LayoutGrid,
        label: "Dashboard Overview",
        path: "/dashboard/admin",
      },
      { icon: Users, label: "Manage Users", path: "/dashboard/admin/users" },
      {
        icon: HeartPulse,
        label: "Manage Doctors",
        path: "/dashboard/admin/doctors",
      },
      {
        icon: Calendar,
        label: "Manage Appointments",
        path: "/dashboard/admin/appointments",
      },
      {
        icon: CreditCard,
        label: "Payment Management",
        path: "/dashboard/admin/payments",
      },
    ],
  };


  const navItems: NavItem[] = user?.role ? roleNavItems[user.role] || [] : [];

  const neviCationItems = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            href={item.path}
            key={item.label}
            className="flex items-center gap-3 rounded-2xl px-3 py-4 text-sm text-foreground transition-colors hover:bg-cyan-100"
          >
            <IconComponent className="size-5 text-muted" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border border-default p-4 lg:block">
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[#006694]"
          >
            <path d="M19 6h-3V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-9-2h4v2h-4V4zm5 11h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z" />
          </svg>
          <span className="text-lg sm:text-xl font-bold text-[#006694] tracking-tight">
            MediCare Connect
          </span>
        </Link>

        <div className="flex items-center gap-3 my-5">
          <div>
            <Avatar>
           
              <Avatar.Image
                alt={user?.name || "User"}
                src={user?.image || ""}
              />
              <Avatar.Fallback delayMs={600}>
                {user?.name.charAt(0)}
              </Avatar.Fallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-xl font-bold">{user?.name || ""}</h1>
            <p className="text-sm">{user?.email || ""}</p>
          </div>
        </div>
        {neviCationItems}
      </aside>

      <div className="lg:hidden shadow p-3">
        <Drawer>
          <div className="flex justify-between mx-3 items-center">
            <div className="flex items-center gap-3">
              <IoBagAdd className="text-2xl font-bold text-[#006694]" />
              <h1 className="text-2xl font-bold text-[#006694]">
                MediCare Connect
              </h1>
            </div>
           
            <Button variant="outline">
              <Bars />
            </Button>
          </div>
          <Drawer.Backdrop>
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading>Navigation</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>{neviCationItems}</Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
};

export default SideBare;
