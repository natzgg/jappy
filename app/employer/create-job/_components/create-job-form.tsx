import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faker } from "@faker-js/faker";

const CreateJobForm = () => {
  faker.seed(111);

  return (
    <div className="p-6 bg-white rounded-lg space-y-7">
      <h1 className="font-semibold text-lg">Post a Job</h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Job Title</h2>
          <Input
            className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white"
            placeholder="Title"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Job Description</h2>
          <Textarea
            className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white h-40 md:h-56 overflow-hidden pt-2"
            placeholder={faker.lorem.paragraphs()}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Salary</h2>
          <Input
            className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white"
            placeholder="30,000"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Location</h2>
          <Input
            className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white"
            placeholder="London, UK"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Hours</h2>
          <Input
            className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white"
            placeholder="40h/week"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Application Deadline Date</h2>
          <Input
            className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white"
            placeholder="June 1, 2024"
          />
        </div>
      </div>

      <Button className="bg-blue-500 px-12 py-6">Add Job</Button>
    </div>
  );
};

export default CreateJobForm;
