"use client";

import { Textarea } from "@/components/ui/textarea";
import FormInfo from "./form-info";
import { faker } from "@faker-js/faker";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CompanyInfo = () => {
  const router = useRouter();
  faker.seed(111);
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

  const onSave = () => {
    toast.success("Saved! This is for demonstration purposes only.");
    router.refresh();
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {infos.map((info) => (
          <FormInfo key={info.label} label={info.label} data={info.data} />
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h1 className="font-semibold">About</h1>
        <Textarea
          className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white h-40 md:h-56 overflow-hidden pt-2"
          placeholder={faker.lorem.paragraphs()}
        />
      </div>
      <Button
        onClick={onSave}
        className="bg-blue-500 px-12 py-6 rounded-lg w-max hover:bg-blue-700"
      >
        Save
      </Button>
    </>
  );
};

export default CompanyInfo;
