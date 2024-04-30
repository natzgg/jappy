import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="p-4 space-y-8 lg:w-1/2">
      <div className="space-y-4">
        <h1 className="font-semibold text-2xl text-black/80 lg:text-6xl">
          Get applications from the world best talents.
        </h1>
        <p className="text-sm font-medium text-muted-foreground/80 leading-6">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 600,000 companies worldwide.
        </p>
      </div>
      <div className="flex flex-col gap-y-4 lg:gap-y-8">
        <div className="flex items-center space-x-4">
          <Check className="h-5 w-5" />
          <p className="text-sm">Bring to the table win-win survival</p>
        </div>
        <div className="flex items-center space-x-4">
          <Check className="h-5 w-5" />
          <p className="text-sm">Capitalize on low hanging fruit to identity</p>
        </div>
        <div className="flex items-center space-x-4">
          <Check className="h-5 w-5" />
          <p className="text-sm">Everyone would be acceptable</p>
        </div>
      </div>
      {/* Will seperate this button, if I continue working in backend */}
      <Button className="bg-blue-600 text-center p-6 w-full lg:w-auto">
        Post a Job
      </Button>
    </div>
  );
};

export default AboutSection;
