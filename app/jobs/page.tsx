import { BriefcaseBusiness, Home } from "lucide-react";
import Filter from "./_components/filter";
import Sort from "./_components/sort";
import Page from "./_components/number-page";
import JobCard from "../../components/job-card";
import Pagination from "./_components/pagination";
import RecruitmentCard from "./_components/recruitment";
import { faker } from "@faker-js/faker";

const Jobs = () => {
  faker.seed(111);
  return (
    <div className="mb-10">
      <div className="bg-graycolor flex items-center justify-center flex-col p-16 gap-y-3">
        <h1 className="font-semibold text-3xl">Find Jobs</h1>
        <div className="flex items-center gap-x-4">
          <Home className="w-4 h-4" />
          /
          <BriefcaseBusiness className="w-4 h-4" />
        </div>
      </div>
      <div className="p-6 pt-8 space-y-4 md:space-y-0 md:flex">
        <Filter />
        <div className="space-y-4 md:space-y-0 md:flex md:w-max md:gap-x-4 md:ml-auto">
          <Sort />
          <Page />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, i) => (
            <JobCard
              key={i}
              job_title={faker.person.jobTitle()}
              location={faker.location.city()}
              employment_type="Full Time"
            />
          ))}
        </div>
        <Pagination />
        <RecruitmentCard />
      </div>
    </div>
  );
};

export default Jobs;
