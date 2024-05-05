import Container from "../container";
import EmployerProfileCard from "./_components/profile-card";
import Profile from "./_components/profile-page";

const EmployerProfile = () => {
  return (
    <div className="bg-graycolor">
      <Container>
        <Profile />
        <EmployerProfileCard />
      </Container>
    </div>
  );
};

export default EmployerProfile;
