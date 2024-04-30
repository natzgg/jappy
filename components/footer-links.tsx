const FooterLinks = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <h1 className="font-semibold mb-2">For Candidates</h1>
          <ul className="flex flex-col text-xs gap-y-3 font-semibold">
            <li className="text-muted-foreground">Browse Jobs</li>
            <li className="text-muted-foreground">Candidate Dashboard</li>
            <li className="text-muted-foreground">Job Alerts</li>
            <li className="text-muted-foreground">My bookmarks</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-2">For Employers</h1>
          <ul className="flex flex-col text-xs gap-y-3 font-semibold">
            <li className="text-muted-foreground">Browse Candidates</li>
            <li className="text-muted-foreground">Employer Dashboard</li>
            <li className="text-muted-foreground">Add Job</li>
            <li className="text-muted-foreground">Job Packages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
