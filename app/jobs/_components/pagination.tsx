import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex gap-x-4 items-center">
      <CircleChevronLeft className="h-5 w-5" />
      <ul className="flex gap-x-4 items-center justify-center">
        <li className="rounded-full bg-blue-500">
          <span className="p-2">1</span>
        </li>
        <li>2</li>
        <li>3</li>
      </ul>
      <CircleChevronRight className="h-5 w-5" />
    </div>
  );
};

export default Pagination;
