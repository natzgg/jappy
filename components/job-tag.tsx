import { cn } from "@/lib/utils";

const JobTag = ({ className, tag }: { className: string; tag: string }) => {
  return (
    <div className={cn("rounded-lg w-max", className)}>
      <span className="text-xs p-4 text-white">{tag}</span>
    </div>
  );
};

export default JobTag;
