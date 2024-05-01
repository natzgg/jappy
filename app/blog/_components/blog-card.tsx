import Image from "next/image";
import ReadMoreButton from "./read-more";
import { MessageSquare } from "lucide-react";

const BlogCard = () => {
  return (
    <div className="border p-4 w-max rounded-lg hover:shadow-lg ">
      <div className="group">
        <div className="relative rounded-lg border h-[200px] w-[250px] md:h-[250px] md:w-[350px] mx-auto overflow-hidden">
          <Image
            src="/job_interview.jpg"
            fill
            objectFit="cover"
            alt="img"
            className="group-hover:transition-transform group-hover:scale-110 group-hover:duration-500"
          />
        </div>

        <div className="p-4 space-y-4">
          <div className="flex gap-x-4 text-muted-foreground text-sm">
            <span>August 31, 2024</span>
            <div className="flex gap-1 items-center">
              <MessageSquare className="w-3 h-3" />
              <span>12 comments</span>
            </div>
          </div>

          <h1 className="font-semibold text-lg">
            5 Tips for your Job Interview
          </h1>
          <p className="max-w-sm text-xs">
            Are you gearing up for a job interview? Nervous about making a
            lasting impression? Don't fret! With the right preparation and
            mindset...
          </p>
        </div>
      </div>

      <ReadMoreButton />
    </div>
  );
};

export default BlogCard;
