import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const RecruitmentCard = () => {
  return (
    <div className="p-4">
      <div className="bg-graycolor p-8 relative overflow-hidden">
        <div className="w-full h-full absolute -right-[200px] top-10 overflow-hidden sm:-right-[400px]">
          <Image src="/recruitment.png" fill alt="recruitment-img" />
        </div>
        <div className="flex flex-col space-y-4 w-2/3">
          <h1 className="text-2xl font-semibold">Recruiting?</h1>
          <p className="text-sm text-muted-foreground">
            Advertise your jobs to millions of monthly users and search 16.8
            million CVs in our database
          </p>
          <Button className="px-4 py-6 text-center bg-blue-500" asChild>
            <Link href={"/jobs"}>Start recruiting now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCard;
