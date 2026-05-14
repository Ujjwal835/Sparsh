"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ExternalLinkIcon,
  HeartHandshake,
  LayoutGrid,
  LayoutList,
  LogOut,
  NotepadText,
  ScanSearch,
  Settings,
  TicketSlash,
  Tractor,
  Truck,
  User,
  Users2,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Sales",
      icon: Truck,
      href: "/dashboard/sales",
    },
    {
      title: "Our Staff",
      icon: Users2,
      href: "/dashboard/staffs",
    },
    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-sidebar-accent">
                  Select Workspace
                  <ChevronDown className="ml-auto h-4 w-4" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Acme Inc</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="space-y-3">
        {sidebarLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <SidebarMenuItem key={index}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 px-6 py-2"
              >
                <Icon />
                <span>{item.title}</span>
              </Link>{" "}
            </SidebarMenuItem>
          );
        })}
        <SidebarMenuItem></SidebarMenuItem>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
