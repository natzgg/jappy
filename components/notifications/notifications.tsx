"use client";

import { faker } from "@faker-js/faker";
import NotificationItem from "./notification-item";

const Notifications = () => {
  // Faker seed to avoid hydration error
  faker.seed(111);
  return (
    <div className="p-4">
      <div className="p-5 bg-white rounded-lg space-y-4 w-full h-full">
        <h1 className="font-semibold text-xl">Notifications</h1>
        <div className="flex flex-col gap-2">
          {[...Array(6)].map((_, i) => (
            <NotificationItem
              key={i}
              name={faker.person.fullName()}
              job_role={faker.person.jobTitle()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
