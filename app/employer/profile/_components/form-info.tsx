import { Input } from "@/components/ui/input";

interface FormInfoProps {
  label: string;
  data: string;
}

const FormInfo = ({ label, data }: FormInfoProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <h1 className="font-semibold">{label}</h1>
      <Input
        placeholder={data}
        className="bg-graycolor py-6 focus-visible:ring-blue-500 focus-visible:bg-white"
      />
    </div>
  );
};

export default FormInfo;
