"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEmployerSidebar } from "@/store/use-employer-sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
}

const NavItem = ({ label, href, icon: Icon, isActive }: NavItemProps) => {
  const { collapsed } = useEmployerSidebar((state) => state);
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "py-8 rounded-lg w-full cursor-pointer hover:bg-blue-200/40 group justify-start",
        isActive && "bg-blue-200/40"
      )}
    >
      <Link
        href={href}
        className={cn(
          "flex gap-3 group-hover:text-blue-600 items-center justify-center",
          isActive && "text-blue-600"
        )}
      >
        {!collapsed ? (
          <div className="flex justify-start items-center w-full gap-4">
            <Icon className="w-5 h-5 group-hover:text-blue-600" />
            <span
              className={cn(
                "font-semibold text-muted-foreground group-hover:text-blue-600",
                isActive && "text-blue-600"
              )}
            >
              {label}
            </span>
          </div>
        ) : (
          <div>
            <Icon className="w-5 h-5 group-hover:text-blue-600" />
          </div>
        )}
      </Link>
    </Button>
  );
};

export default NavItem;
