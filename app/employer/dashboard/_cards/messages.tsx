import InfoCard from "@/components/info-card";
import { MessageSquareText } from "lucide-react";

const Messages = () => {
  return <InfoCard label="Messages" count={2} Icon={MessageSquareText} />;
};

export default Messages;
