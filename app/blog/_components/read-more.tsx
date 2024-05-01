import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ReadMoreButton = () => {
  return (
    <Button
      className="text-blue-500 hover:bg-transparent group hover:text-blue-500"
      variant="ghost"
      asChild
    >
      <Link href="/blog/1">
        <span>Read more</span>
        <ChevronRight className="w-4 h-4 group-hover:transition-opacity group-hover:opacity-0 group-hover:duration-500 group-hover:ease-in group-hover:translate-x-1" />
      </Link>
    </Button>
  );
};

export default ReadMoreButton;
