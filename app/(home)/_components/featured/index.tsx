import { faker } from "@faker-js/faker";
import JobCard from "../../../../components/job-card";

const Featured = () => {
  faker.seed(111);
  return (
    <div className="p-4">
      <div className="p-4 space-y-2 mb-5">
        <h1 className="text-center text-xl font-semibold">Featured Jobs</h1>
        <p className="text-center text-xs text-muted-foreground text-nowrap">
          Know your worth and find the perfect job for you!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <JobCard
            key={i}
            job_title={faker.person.jobTitle()}
            location={faker.location.city()}
            employment_type="Full Time"
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
