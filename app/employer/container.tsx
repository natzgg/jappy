"use client";

import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { useEmployerSidebar } from "@/store/use-employer-sidebar";
import { useIsClient } from "usehooks-ts";

const Container = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  const { collapsed } = useEmployerSidebar((state) => state);
  const isClient = useIsClient();

  if (isClient) {
    return (
      <div
        className={cn(
          "px-2",
          collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60",
          classname
        )}
      >
        {children}
        <Footer />
      </div>
    );
  }
};

export default Container;
