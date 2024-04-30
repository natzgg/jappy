import {
  Banknote,
  Calendar,
  Clock,
  HandCoins,
  Hourglass,
  MapPin,
  UserRound,
} from "lucide-react";

const JobOverview = () => {
  return (
    <div className="p-4 rounded-lg lg:w-1/3">
      <div className="bg-graycolor p-4">
        <h1 className="text-lg font-semibold mb-4">Job Overview</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4 p-3">
            <Calendar className="h-7 w-7 text-blue-500" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm">Date Posted:</h2>
              <span className="text-muted-foreground text-xs">
                Posted 1 hour ago
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3">
            <Hourglass className="h-7 w-7 text-blue-500" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm">Expiration Date:</h2>
              <span className="text-muted-foreground text-xs">
                April 03, 2027
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3">
            <MapPin className="h-7 w-7 text-blue-500" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm">Location:</h2>
              <span className="text-muted-foreground text-xs">London, UK</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3">
            <UserRound className="h-7 w-7 text-blue-500" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm">Job Title:</h2>
              <span className="text-muted-foreground text-xs">
                Product Designer
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3">
            <Clock className="h-7 w-7 text-blue-500" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm">Hours:</h2>
              <span className="text-muted-foreground text-xs">40h / week</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3">
            <Banknote className="h-7 w-7 text-blue-500" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm">Rate:</h2>
              <span className="text-muted-foreground text-xs">
                $15 - $25 / hour
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3">
            <HandCoins className="h-7 w-7 text-blue-500" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm">Salary:</h2>
              <span className="text-muted-foreground text-xs">$35 - $45k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOverview;
