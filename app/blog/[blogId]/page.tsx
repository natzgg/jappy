import BlogInfo from "./_components/blog-info";
import BlogCoverImage from "./_components/blog-cover-img";
import BlogDescription from "./_components/blog-description";
import BlogQuote from "./_components/blog-quote";
import BlogCoverEndImg from "./_components/blog-cover-end-img";
import { Separator } from "@/components/ui/separator";
import Share from "./_components/share";
import CommentSection from "./_components/comment-section";

const BlogPage = () => {
  return (
    <div>
      <div className="p-6 bg-graycolor text-center">
        <h1 className="font-semibold text-2xl">
          5 Tips for your Job Interview
        </h1>
        <BlogInfo />
      </div>

      <BlogCoverImage />

      <div className="p-4 mt-5 space-y-6 lg:px-40">
        <BlogDescription />
        <BlogQuote />
        <BlogCoverEndImg />
        <Separator className="mt-5" />
        <Share />
        <Separator />
        <CommentSection />
      </div>
    </div>
  );
};

export default BlogPage;
