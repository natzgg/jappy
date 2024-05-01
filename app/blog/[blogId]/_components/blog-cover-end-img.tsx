import Image from "next/image";

const BlogCoverEndImg = () => {
  return (
    <div className="flex justify-center md:mt-4">
      <div className="h-full w-full lg:2/3 lg:w-2/3">
        <Image
          src="/job_interview_2.jpg"
          width={0}
          height={0}
          sizes="100vw"
          objectFit="cover"
          alt="blog-img"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default BlogCoverEndImg;
