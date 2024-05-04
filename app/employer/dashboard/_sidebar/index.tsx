"use client";

import { cn } from "@/lib/utils";
import Navigation from "./navigation";
import { useEmployerSidebar } from "@/store/use-employer-sidebar";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SidebarEmployer = () => {
  const { collapsed, onCollapse, onExpand } = useEmployerSidebar(
    (state) => state
  );
  const matches = useMediaQuery("(max-width:1024px)");
  const isClient = useIsClient();

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  if (!isClient) {
    return (
      <div className="w-screen h-screen">
        <SidebarEmployerSkeleton />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "fixed top-20 left-0 h-full bg-white ease-in-out duration-300 transition-opacity",
        collapsed ? "w-[70px]" : "w-60"
      )}
    >
      <Navigation />
    </div>
  );
};

export const SidebarEmployerSkeleton = () => {
  return (
    <div className="fixed top-20 left-0 h-full bg-white w-[70px] lg:w-60 shadow-lg">
      <div className="space-y-2 flex flex-col justify-center items-center pt-10 gap-5">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="w-[20px] h-[20px] rounded-full p-4" />
        ))}
      </div>
    </div>
  );
};

export default SidebarEmployer;
