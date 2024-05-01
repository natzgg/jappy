import { Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";

const BlogInfo = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium mt-2 mb-4">
      <div className="flex items-center gap-2">
        <div className="relative h-8 w-8 ">
          <Image
            src="/charlie.jpg"
            fill
            objectFit="cover"
            alt="user-img"
            className="rounded-full border"
          />
        </div>
        <span className="text-muted-foreground">Charlie Simpsons</span>
      </div>

      <div className="flex items-center gap-1 text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>August 27, 2024</span>
      </div>

      <div className="flex items-center gap-1 text-muted-foreground">
        <MessageCircle className="h-4 w-4" />
        <span>12 comments</span>
      </div>
    </div>
  );
};

export default BlogInfo;
