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
import { useState } from "react";

const Sort = () => {
  const [sort, setSort] = useState("newest");

  return (
    <div className="md:w-max md:mx-auto">
      <Select onValueChange={(value) => setSort(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sort by (default)" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sort;
