"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const PasswordForm = () => {
  const router = useRouter();

  const onPasswordChange = () => {
    toast.success("Successfully changed password!");
    router.refresh();
  };
  return (
    <div className="bg-white p-6 space-y-7 rounded-lg">
      <h1 className="font-semibold text-lg">Edit Password</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <h2 className="font-semibold">Old Password</h2>
          <Input
            type="password"
            className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <h2 className="font-semibold">New Password</h2>
          <Input
            type="password"
            className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <h2 className="font-semibold">Confirm Password</h2>
          <Input
            type="password"
            className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white"
          />
        </div>
      </div>

      <Button
        onClick={onPasswordChange}
        className="bg-blue-500 px-12 py-6 hover:bg-blue-600"
      >
        Save
      </Button>
    </div>
  );
};

export default PasswordForm;
