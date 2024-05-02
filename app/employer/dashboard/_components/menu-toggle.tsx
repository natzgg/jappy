import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";

const MenuToggle = () => {
  return (
    <Button
      variant="ghost"
      className="hover:bg-blue-200/60 py-2 px-6 bg-blue-200/40 md:p-8"
    >
      <div className="rounded-lg">
        <div className="flex items-center justify-center gap-1">
          <AlignJustify className="w-4 h-4 text-blue-500" />
          <span className="text-blue-500">Menu</span>
        </div>
      </div>
    </Button>
  );
};

export default MenuToggle;
