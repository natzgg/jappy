import CompanyCard from "./company-card";

const TopCompanies = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <h1 className="font-semibold text-xl text-center">
          Top Company Registered
        </h1>
        <p className="text-muted-foreground/80 leading-6 text-center text-sm">
          Some of the companies we he have helped recruit excellent talents over
          the years.
        </p>
      </div>
      <CompanyCard />
    </div>
  );
};

export default TopCompanies;
