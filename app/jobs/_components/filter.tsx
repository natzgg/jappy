import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";

const Filter = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="rounded-lg bg-graycolor text-blue-500 py-1 px-5">
        <Button variant="ghost" className="text-sm flex gap-x-2">
          <ListFilter className="h-4 w-4" />
          Filter
        </Button>
      </div>
      <div className="space-x-1">
        <span className="font-semibold">16</span>
        <span className="text-muted-foreground">jobs</span>
      </div>
    </div>
  );
};

export default Filter;
