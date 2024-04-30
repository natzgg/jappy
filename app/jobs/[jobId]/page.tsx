import CompanyProfile from "./_components/company-profile";
import JobDescription from "./_components/job-description";
import JobOverview from "./_components/job-overview";
import JobTitle from "./_components/job-title";

const JobPage = () => {
  return (
    <>
      <div className="bg-graycolor">
        <div className="p-4">
          <JobTitle />
        </div>
      </div>
      <div className="lg:flex">
        <JobDescription />
        <JobOverview />
      </div>
      <CompanyProfile />
    </>
  );
};

export default JobPage;
