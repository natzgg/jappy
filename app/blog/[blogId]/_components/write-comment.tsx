import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const WriteComment = () => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <Textarea placeholder="Write a comment here.."></Textarea>
      <Button className="bg-blue-500 p-4 self-end">Comment</Button>
    </div>
  );
};

export default WriteComment;
