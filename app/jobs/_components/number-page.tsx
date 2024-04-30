"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  return (
    <div className="md:w-max md:mx-auto">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={"all"}>All</SelectItem>
            <SelectItem value={"20"}>20 per page</SelectItem>
            <SelectItem value={"30"}>30 per page</SelectItem>
            <SelectItem value={"40"}>40 per page</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Page;
