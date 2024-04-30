import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon, Instagram } from "lucide-react";

const Socials = () => {
  return (
    <div className="p-4 mt-4">
      <div className="flex gap-x-6 justify-center items-center">
        <FacebookIcon />
        <Instagram />
        <LinkedInLogoIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Socials;
