import Container from "../container";
import PasswordForm from "./_components/password-form";

const ChangePassword = () => {
  return (
    <div className="bg-graycolor">
      <Container>
        <div className="text-center p-14">
          <h1 className="font-semibold text-2xl text-center">
            Change Password
          </h1>
          <p className="text-sm">Edit your password</p>
        </div>
        <PasswordForm />
      </Container>
    </div>
  );
};

export default ChangePassword;
