import { BriefcaseBusiness } from "lucide-react";

interface NotificationItemProps {
  name: string;
  job_role: string;
}

const NotificationItem = ({ name, job_role }: NotificationItemProps) => {
  return (
    <div className="p-2">
      <div className="flex gap-4 items-center">
        <div className="w-auto h-auto p-2.5 rounded-full bg-blue-200">
          <BriefcaseBusiness className="w-5 h-5" />
        </div>
        <div className="space-x-1 text-sm">
          <span className="font-semibold">{name}</span>
          <span className="text-muted-foreground">apply for a job</span>
          <span className="text-blue-600">{job_role}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
