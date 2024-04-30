"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/jobs");
      }}
    >
      <div className="px-4 py-6 bg-white border z-50 shadow-md mt-5 lg:shadow-none lg:w-max">
        <div className="flex flex-col w-full gap-y-4 lg:flex-row lg:gap-x-4 lg:items-center">
          <div className="space-y-2 lg:border-r-2">
            <span className="font-semibold">What</span>
            <div className="flex items-center md:space-x-2 lg:mr-4">
              <Input
                className="border-none shadow-none focus-visible:ring-0 p-0 lg:w-[250px]"
                placeholder="Job title, keywords or company"
              ></Input>
              <MagnifyingGlassIcon className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <span className="font-semibold">Where</span>
            <div className="flex items-center md:space-x-2">
              <Input
                className="border-none shadow-none focus-visible:ring-0 p-0"
                placeholder="City"
              ></Input>
              <MapPin className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
          <Button type="submit" className="bg-blue-600 p-8 text-white/90">
            Find Jobs
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
