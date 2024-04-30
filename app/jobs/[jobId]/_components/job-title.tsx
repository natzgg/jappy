import JobTag from "@/components/job-tag";
import { Button } from "@/components/ui/button";
import { Bookmark, CircleDollarSign, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const JobTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 lg:flex-row lg:justify-start">
      <div className="w-10 h-10 relative lg:w-16 lg:h-16">
        <Image
          src="/facebook.svg"
          layout="fill"
          objectFit="contain"
          alt="logo"
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:w-full">
        <div className="flex flex-col justify-center items-center ml-4 lg:p-4">
          <h1 className="font-semibold text-xl lg:text-2xl lg:self-start">
            Product Designer
          </h1>
          <div className="flex gap-x-4 text-muted-foreground lg:self-start">
            <div className="flex gap-x-1 items-center">
              <MapPin className="w-4 h-4" />
              <span>London, UK</span>
            </div>
            <div className="flex gap-x-1 items-center">
              <Clock className="w-4 h-4" />
              <span>11 hours ago</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1 text-muted-foreground lg:self-start">
            <CircleDollarSign className="w-4 h-4" />
            <span>35,000 - 45,000</span>
          </div>
          <div className="flex mt-3 gap-x-2 flex-wrap gap-y-2 lg:self-start">
            <JobTag className="bg-blue-500" tag="Full Time" />
            <JobTag className="bg-yellow-500" tag="Urgent" />
          </div>
        </div>
        <div className="flex gap-4 mt-4 items-center">
          <Button className="p-6 bg-blue-600">Apply For Job</Button>
          <Button className="p-6 bg-muted-foreground/10">
            <Bookmark className="w-5 h-5 text-blue-400" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
