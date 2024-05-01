import Image from "next/image";

const CommentCard = () => {
  return (
    <div className="flex flex-col p-2 gap-2 md:flex-row md:items-center md:gap-4">
      <div className="relative h-16 w-16 flex-shrink-0">
        <Image
          src="/jonas.jpg"
          fill
          objectFit="cover"
          alt="user-img"
          className="rounded-full border"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-semibold">Jonas Brothers</div>
        <p className="text-muted-foreground text-sm">
          This blog is a goldmine of practical advice! From mastering the
          elevator pitch to acing the follow-up, every tip resonates with my own
          job hunting experiences. It's like having a seasoned mentor guiding
          you through the intricacies of the interview process. Can't wait to
          put these insights into action!
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
