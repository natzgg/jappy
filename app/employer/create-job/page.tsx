import Container from "../container";
import CreateJobForm from "./_components/create-job-form";

const CreateJob = () => {
  return (
    <div className="bg-graycolor">
      <Container>
        <div className="text-center p-14">
          <h1 className="font-semibold text-2xl text-center">Create a Job</h1>
          <p className="text-sm">Add new job</p>
        </div>
        <CreateJobForm />
      </Container>
    </div>
  );
};

export default CreateJob;
