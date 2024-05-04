"use client";

import {
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  Home,
  Lock,
  Mails,
  SendHorizonal,
} from "lucide-react";
import { usePathname } from "next/navigation";
import NavItem from "./nav-item";
import { Separator } from "@/components/ui/separator";
import MenuToggle from "../_components/menu-toggle";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { useEmployerSidebar } from "@/store/use-employer-sidebar";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();
  const { collapsed } = useEmployerSidebar((state) => state);

  const routes = [
    {
      label: "Dashboard",
      href: "/employer/dashboard",
      icon: Home,
    },
    {
      label: "Company Profile",
      href: "/employer/profile",
      icon: Building2,
    },
    {
      label: "Post A Job",
      href: "/employer/create-job",
      icon: SendHorizonal,
    },
    {
      label: "Manage Jobs",
      href: "/employer/jobs",
      icon: BriefcaseBusiness,
    },
    {
      label: "All applicants",
      href: "/employer/applicants",
      icon: ClipboardList,
    },
    {
      label: "Messages",
      href: "/employer/messages",
      icon: Mails,
    },
    {
      label: "Change password",
      href: "/employer/password",
      icon: Lock,
    },
  ];

  return (
    <div className="p-5 space-y-5">
      <div
        className={cn(
          "flex items-center justify-between",
          collapsed && "justify-center"
        )}
      >
        <h1
          className={cn(
            "text-2xl font-semibold text-blue-600 text-center",
            collapsed && "hidden"
          )}
        >
          Menu
        </h1>
        <MenuToggle />
      </div>
      <Separator className="hidden sm:block" />
      <ul className="space-y-2 flex flex-col justify-center items-center">
        {routes.map((route) => (
          <NavItem
            key={route.href}
            label={route.label}
            href={route.href}
            icon={route.icon}
            isActive={pathname === route.href}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
