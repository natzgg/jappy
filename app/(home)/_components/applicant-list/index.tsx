import { cn } from "@/lib/utils";
import { Jost } from "next/font/google";
import ApplicantCard from "./applicant-card";
import Image from "next/image";

const jost = Jost({
  weight: "500",
  subsets: ["latin"],
});

const ApplicantList = () => {
  return (
    <div className="lg:relative lg:w-1/2">
      <div className="w-full mx-auto">
        <Image
          alt="hire-image"
          src="/hire.webp"
          className="object-cover mx-auto"
          width={660}
          height={540}
        />
      </div>
      <div className="p-8 max-w-sm w-full mx-auto lg:absolute lg:h-64 lg:w-max lg:right-0 lg:-bottom-2">
        <div
          className={cn(
            "bg-[#1967d2] rounded-lg rounded-b-none text-center py-4 lg:w-auto",
            jost.className
          )}
        >
          <span className="text-white">Applicant List</span>
        </div>
        <div className="border">
          <ApplicantCard
            imageSrc="/charlie.jpg"
            name="Charlie Simpsons"
            position="Software Developer"
          />
          <ApplicantCard
            imageSrc="/jennie.jpg"
            name="Jennie Bartny"
            position="Project Manager"
          />
          <ApplicantCard
            imageSrc="/jonas.jpg"
            name="Jonas Stinson"
            position="Senior Developer"
          />
          <ApplicantCard
            imageSrc="/janko.jpg"
            name="Janko Frelilo"
            position="Technical Engineer"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicantList;
