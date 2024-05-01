import { Button } from "@/components/ui/button";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Facebook } from "lucide-react";
import Link from "next/link";

const Share = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="font-semibold text-sm md:text-normal">Share this post</p>
      <div className="flex gap-4">
        <Button
          className="space-x-1 bg-blue-800 py-6 hover:bg-blue-800/80"
          asChild
        >
          <Link href={"https://www.facebook.com"} target="_blank">
            <div className="bg-blue-900 rounded-full p-1">
              <Facebook className="w-4 h-4 text-white" />
            </div>
            <span className="font-normal">Facebook</span>
          </Link>
        </Button>

        <Button
          className="space-x-1 bg-blue-400 py-6 hover:bg-blue-300/80"
          asChild
        >
          <Link href={"https://www.twitter.com"} target="_blank">
            <TwitterLogoIcon className="w-4 h-4 text-white" />
            <span className="font-normal">Twitter</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Share;
