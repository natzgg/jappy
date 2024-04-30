const JobDescription = () => {
  return (
    <div className="p-4 space-y-8 lg:w-2/3">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Job Description</h1>
        <p className="text-muted-foreground text-sm">
          As a Product Designer, you will work within a Product Delivery Team
          fused with UX, engineering, product and data talent. You will help the
          team design beautiful interfaces that solve business challenges for
          our clients. We work with a number of Tier 1 banks on building
          web-based applications for AML, KYC and Sanctions List management
          workflows. This role is ideal if you are looking to segue your career
          into the FinTech or Big Data arenas.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Key Responsibilities</h1>
        <ul className="list-disc px-2 text-sm text-muted-foreground space-y-4">
          <li>
            Be involved in every step of the product design cycle from discovery
            to developer handoff and user acceptance testing.
          </li>
          <li>
            Work with BAs, product managers and tech teams to lead the Product
            Design
          </li>
          <li>
            Maintain quality of the design process and ensure that when designs
            are translated into code they accurately reflect the design
            specifications.
          </li>
          <li>Accurately estimate design tickets during planning sessions.</li>
          <li>
            Contribute to sketching sessions involving non-designersCreate,
            iterate and maintain UI deliverables including sketch files, style
            guides, high fidelity prototypes, micro interaction specifications
            and pattern libraries.
          </li>
          <li>
            Ensure design choices are data led by identifying assumptions to
            test each sprint, and work with the analysts in your team to plan
            moderated usability test sessions.
          </li>
          <li>
            Design pixel perfect responsive UI&apos;s and understand that
            adopting common interface patterns is better for UX than reinventing
            the wheel
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Skill & Experience</h1>
        <ul className="list-disc px-2 text-sm text-muted-foreground space-y-4">
          <li>
            You have at least 3 years’ experience working as a Product Designer.
          </li>
          <li>You have experience using Sketch and InVision or Framer X.</li>
          <li>
            You have some previous experience working in an agile environment.
          </li>
          <li>You are familiar using Jira and Confluence in your workflow.</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
