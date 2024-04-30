import Image from "next/image";
import SearchBox from "./search-box";

const Banner = () => {
  return (
    <div className="p-4 mt-20 md:w-max md:mx-auto lg:mx-0 lg:pt-36 lg:w-full lg:relative lg:overflow-hidden">
      <div className="hidden lg:block lg:w-[885px] lg:h-[575px] lg:absolute lg:-right-28 lg:top-0 lg:-z-10">
        <Image
          src="/banner-img-3.webp"
          width={800}
          height={800}
          alt="banner-img-3"
        />
      </div>
      <div className="lg:space-y-4 lg:w-1/2">
        <h1 className="font-semibold text-xl lg:text-4xl">
          Join us & Explore Thousand of Jobs
        </h1>
        <h2 className="text-sm font-medium text-gray-500/70">
          Find Jobs, Employment, & Career Opportunities
        </h2>
      </div>
      <SearchBox />
      <div className="mt-10 mb-10">
        <span className="font-semibold">Popular Searches:</span>
        <p className="text-sm text-muted-foreground">
          Web Designer, Front End Developer, Full Stack Developer, Factory
          Worker,
        </p>
      </div>
    </div>
  );
};

export default Banner;
