import LogoUpload from "./logo-upload";
import CompanyInfo from "./company-info";

const EmployerProfileCard = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="font-semibold text-lg">Edit Profile</h1>
      <div className="flex flex-col p-4 gap-4">
        <LogoUpload />
        <CompanyInfo />
      </div>
    </div>
  );
};

export default EmployerProfileCard;
