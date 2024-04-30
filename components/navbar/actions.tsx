import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

const Actions = () => {
  return (
    <div className="space-x-4">
      <div className="hidden lg:flex">
        <Button
          variant={"secondary"}
          className="text-blue-600 hover:bg-blue-600 hover:text-white"
        >
          Login / Register
        </Button>
        <Button
          variant={"secondary"}
          className="text-white bg-blue-600 hover:bg-blue-800"
        >
          Job Post
        </Button>
      </div>
    </div>
  );
};

export default Actions;
