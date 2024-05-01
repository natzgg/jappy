import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const DemoAlert = () => {
  return (
    <div className="p-4 mt-20">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This app is just for demonstration purposes only. This app has a
          responsive design that you can view on any device. If you have any
          questions or want to hire me. Please contact me at{" "}
          <span className="italic font-semibold">natzjapan2022@gmail.com</span>
          <p className="italic font-semibold mt-4">Made by Nathaniel Cunanan</p>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default DemoAlert;
