import { Button } from "@/components/ui/button";
import { ArrowUpFromLine } from "lucide-react";

const CoverUpload = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 w-full">
      <Button
        variant="ghost"
        className="p-12 rounded-lg border border-dashed bg-white lg:p-24"
      >
        <div className="flex flex-col items-center gap-2">
          <ArrowUpFromLine className="w-5 h-5 text-muted-foreground" />
          <span>Browse Cover</span>
        </div>
      </Button>
      <p className="text-xs text-muted-foreground">
        Max file is 1 MB, Minimum dimension: 300x300 and compatible file format
        is .jpg & .png
      </p>
    </div>
  );
};

export default CoverUpload;
