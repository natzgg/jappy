"use client";

import { Button } from "@/components/ui/button";
import { useEmployerSidebar } from "@/store/use-employer-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

const MenuToggle = () => {
  const { collapsed, onCollapse, onExpand } = useEmployerSidebar(
    (state) => state
  );

  const onClick = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };

  return (
    <Button
      onClick={() => onClick()}
      variant="ghost"
      className="hidden hover:bg-transparent px-0 sm:block"
    >
      <div className="rounded-lg bg-blue-200/30 p-2">
        <div className="flex items-center justify-center gap-1">
          {!collapsed ? (
            <ArrowLeftFromLine className="w-4 h-4 text-blue-500" />
          ) : (
            <ArrowRightFromLine className="w-4 h-4 text-blue-500" />
          )}
        </div>
      </div>
    </Button>
  );
};

export default MenuToggle;
