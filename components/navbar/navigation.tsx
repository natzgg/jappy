"use client";

import Link from "next/link";
import { useIsClient } from "usehooks-ts";

import { AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavbar } from "@/store/use-navbar";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const isClient = useIsClient();
  const { collapsed, onExpand, onCollapse } = useNavbar((state) => state);

  const routes = [
    {
      label: "Home",
      href: "/#",
    },
    {
      label: "Find Jobs",
      href: "/jobs",
    },
    {
      label: "Employer Dashboard",
      href: "/employer/dashboard",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];

  const onButtonClick = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };
  return (
    <div className="flex flex-col relative h-20 justify-center">
      <Button
        onClick={onButtonClick}
        variant="ghost"
        className="lg:hidden mr-4"
        size="sm"
      >
        <AlignRight />
      </Button>
      <ul className="hidden lg:flex gap-x-4">
        {routes.map((route, index) => (
          <Link
            key={index}
            className="font-semibold hover:bg-gray-400 p-4 rounded-lg"
            href={route.href}
          >
            {route.label}
          </Link>
        ))}
      </ul>
      <div
        className={cn(
          "absolute right-0 top-20 w-screen opacity-100 transition ease-in",
          !collapsed && "opacity-0 hidden"
        )}
      >
        <div className="bg-white flex flex-col border-t-2">
          {routes.map((route, i) => (
            <Link
              key={i}
              href={route.href}
              className="hover:bg-muted p-2 rounded-sm w-full text-center font-semibold"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
