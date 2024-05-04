import { cn } from "@/lib/utils";
import { BriefcaseBusiness } from "lucide-react";
import { LucideIcon } from "lucide-react";

type Label = "Posted Jobs" | "Application" | "Messages" | "Shortlist";

const cardColor = [
  {
    "Posted Jobs": {
      text: "text-blue-500",
      bg: "bg-blue-200/30",
    },
    Application: {
      text: "text-red-500",
      bg: "bg-red-200/40",
    },
    Messages: {
      text: "text-yellow-500",
      bg: "bg-yellow-200/30",
    },
    Shortlist: {
      text: "text-green-500",
      bg: "bg-green-200/30",
    },
  },
];

interface InfoCardProps {
  label: Label;
  count: number;
  Icon: LucideIcon;
}

const InfoCard = ({ label, count, Icon }: InfoCardProps) => {
  return (
    <div className="bg-white p-6 flex items-center justify-between gap-4 rounded-lg shadow-md w-full">
      <div
        className={cn(
          "p-4 rounded-md w-25 h-25",
          cardColor[0][label]?.bg,
          cardColor[0][label]?.text
        )}
      >
        <Icon className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <span
          className={cn(
            "font-semibold text-3xl ml-auto",
            cardColor[0][label]?.text
          )}
        >
          {count}
        </span>
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
};

export default InfoCard;
