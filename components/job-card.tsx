import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface JobCardProps {
  job_title: string;
  location: string;
  employment_type: string;
}

const JobCard = ({ job_title, location, employment_type }: JobCardProps) => {
  return (
    <Link href="/jobs/1">
      <div className="flex justify-center p-2 md:p-0">
        <div className="p-4 rounded-lg bg-primary-foreground w-full flex">
          <div className="p-4 flex gap-x-4">
            <div className="h-auto">
              <Image src="/first-logo.webp" width={50} height={50} alt="logo" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">{job_title}</span>
              <div className="flex space-x-1 items-center">
                <MapPin className="h-5 w-5" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-x-4 mt-2">
                <div className="bg-blue-400 rounded-lg">
                  <span className="text-xs p-4 text-white">
                    {employment_type}
                  </span>
                </div>
                <div className="bg-yellow-300 rounded-lg">
                  <span className="text-xs p-4 text-white">
                    {employment_type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
