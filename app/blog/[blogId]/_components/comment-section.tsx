import CommentCard from "./comment-card";
import WriteComment from "./write-comment";

const CommentSection = () => {
  return (
    <div>
      <h1 className="font-semibold md:text-lg">Comment</h1>
      <CommentCard />
      <WriteComment />
    </div>
  );
};

export default CommentSection;
