import Application from "../_cards/application";
import Messages from "../_cards/messages";
import PostedJobs from "../_cards/posted-jobs";
import Shortlist from "../_cards/shortlist";

const DashboardCards = () => {
  return (
    <div className="p-6 grid place-items-center gap-7 sm:grid-cols-1 md:grid-cols-2 lg:flex">
      <PostedJobs />
      <Application />
      <Messages />
      <Shortlist />
    </div>
  );
};

export default DashboardCards;
