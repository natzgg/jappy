import JobCard from "../../../../components/job-card";

const Featured = () => {
  return (
    <div className="p-4">
      <div className="p-4 space-y-2 mb-5">
        <h1 className="text-center text-xl font-semibold">Featured Jobs</h1>
        <p className="text-center text-xs text-muted-foreground text-nowrap">
          Know your worth and find the perfect job for you!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default Featured;
