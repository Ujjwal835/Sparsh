"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  BadgePercent,
  Box,
  CircleDollarSign,
  Database,
  Handbag,
  LogOut,
  Sparkles,
  TicketSlash,
  Truck,
  User,
  Users2,
} from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
      gradient: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Staff",
      icon: User,
      href: "/dashboard/staffs",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Coupons",
      icon: BadgePercent,
      href: "/dashboard/coupons",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      title: "Inventory",
      icon: Database,
      href: "/dashboard/inventory",
      gradient: "from-sky-500 to-indigo-500",
    },
    {
      title: "Category",
      icon: Handbag,
      href: "/dashboard/category",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Products",
      icon: Box,
      href: "/dashboard/products",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "Product Variant",
      icon: TicketSlash,
      href: "/dashboard/productVariant",
      gradient: "from-red-500 to-orange-500",
    },
  ];

  async function handleLogout() {
    await signOut({ redirect: false });
    router.push("/");
  }

  return (
    <Sidebar className="border-r border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#050816]" />
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-600/20 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <SidebarHeader className="border-b border-white/10 px-5 py-6">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:bg-white/10">
            <div className="absolute inset-0 bg-linear-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-fuchsia-500 via-violet-500 to-cyan-500 shadow-2xl shadow-fuchsia-500/30">
                <Sparkles className="h-7 w-7 text-white" />
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-wide text-white">
                  SPARSH
                </h1>
                <p className="text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase">
                  Admin Control
                </p>
              </div>
            </div>
          </div>
        </SidebarHeader>

        {/* Navigation */}
        <SidebarContent className="flex-1 px-4 py-6">
          <SidebarMenu className="space-y-3">
            {sidebarLinks.map((item, index) => {
              const Icon = item.icon;

              const isActive = pathname === item.href;

              return (
                <SidebarMenuItem key={index}>
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300 ${
                      isActive
                        ? "border-white/20 bg-white/10 shadow-2xl shadow-fuchsia-500/10"
                        : "border-transparent hover:border-white/10 hover:bg-white/5"
                    }`}
                  >
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${item.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20 ${
                        isActive ? "opacity-20" : ""
                      }`}
                    />

                    {/* Active Bar */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-full bg-linear-to-b from-fuchsia-500 to-cyan-500" />
                    )}

                    {/* Icon */}
                    <div
                      className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${item.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* Text */}
                    <div className="relative flex flex-col">
                      <span className="text-sm font-semibold tracking-wide text-white">
                        {item.title}
                      </span>

                      <span className="text-xs text-zinc-400">
                        Manage {item.title.toLowerCase()}
                      </span>
                    </div>
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter className="border-t border-white/10 p-4">
          <button
            onClick={handleLogout}
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-red-500/20"
          >
            <div className="absolute inset-0 bg-linear-to-r from-red-500/20 to-orange-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <LogOut className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />

            <span className="relative tracking-wide">Logout</span>
          </button>
        </SidebarFooter>
      </div>

      <SidebarRail />
    </Sidebar>
  );
}
