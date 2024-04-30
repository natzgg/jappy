import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ApplicantCard = ({
  imageSrc,
  name,
  position,
}: {
  imageSrc: string;
  name: string;
  position: string;
}) => {
  return (
    <div className="flex px-8 py-4 lg:bg-white lg:w-auto">
      <div className="flex space-x-2 items-center">
        <Avatar className="h-14 w-14 border border-background lg:h-10 lg:w-10">
          <AvatarImage src={imageSrc} className="object-cover" />
          <AvatarFallback className="uppercase">
            {name[0]}
            {name[name.length - 1]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold lg:text-xs">{name}</span>
          <span className="font-light text-sm lg:text-xs">{position}</span>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
