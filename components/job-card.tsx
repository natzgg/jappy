import { MapPin } from "lucide-react";
import Image from "next/image";

const JobCard = () => {
  return (
    <div className="flex justify-center">
      <div className="p-4 rounded bg-primary-foreground max-w-lg flex">
        <div className="p-4 flex gap-x-4">
          <div className="h-auto">
            <Image src="/first-logo.webp" width={50} height={50} alt="logo" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Software Engineer</span>
            <div className="flex space-x-1 items-center">
              <MapPin className="h-5 w-5" />
              <span>London, Uk</span>
            </div>
            <div className="flex items-center gap-x-4 mt-2">
              <div className="bg-blue-400 rounded-lg">
                <span className="text-xs p-4 text-white">Full Time</span>
              </div>
              <div className="bg-yellow-300 rounded-lg">
                <span className="text-xs p-4 text-white">Full Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
