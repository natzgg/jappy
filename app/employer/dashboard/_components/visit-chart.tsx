import LineChart from "@/components/charts/line-chart";
import { faker } from "@faker-js/faker";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Profile Views",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels,
  datasets: [
    {
      label: "Views",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function VisitChart() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center rounded-lg bg-white md:p-6">
        <LineChart options={options} data={data} />
      </div>
    </div>
  );
}
