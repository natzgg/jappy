import FormInfo from "./form-info";

const CompanyInfo = () => {
  const infos = [
    {
      label: "Company Name",
      data: "Facebook",
    },
    {
      label: "Email address",
      data: "facebook@facebook.com",
    },
    {
      label: "Phone",
      data: "090 7777 9999",
    },
    {
      label: "Website",
      data: "www.facebook.com",
    },
    {
      label: "Est. since",
      data: "June 2008",
    },
    {
      label: "Company Size",
      data: "10",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {infos.map((info) => (
        <FormInfo key={info.label} label={info.label} data={info.data} />
      ))}
    </div>
  );
};

export default CompanyInfo;
