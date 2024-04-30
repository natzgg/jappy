import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="border p-4 w-max rounded-lg">
      <div className="relative rounded-lg border h-[250px] w-[250px] mx-auto">
        <Image src="/recruitment.png" fill objectFit="contain" alt="img" />
      </div>
    </div>
  );
};

export default BlogCard;
