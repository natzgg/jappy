import { Book, Home } from "lucide-react";
import BlogCard from "./_components/blog-card";

const Blog = () => {
  return (
    <div>
      <div className="bg-graycolor">
        <div className="p-16 flex flex-col gap-y-3 items-center justify-center">
          <h1 className="font-semibold text-3xl">Blog</h1>
          <div className="flex items-center gap-x-4">
            <Home className="w-4 h-4" />
            /
            <Book className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-wrap gap-4 justify-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
