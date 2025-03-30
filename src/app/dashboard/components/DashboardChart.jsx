"use client";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const DashboardChart = () => {
  const [chartData, setChartData] = useState(null);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    const data = {
      labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
      datasets: [
        {
          label: "Транзакции",
          data: Array(6)
            .fill()
            .map(() => faker.number.int({ min: 10, max: 100 })),
          backgroundColor: "rgba(59, 130, 246, 0.6)",
          borderColor: "rgba(59, 130, 246, 1)",
          borderWidth: 1,
        },
        {
          label: "Платежи",
          data: Array(6)
            .fill()
            .map(() => faker.number.int({ min: 5, max: 80 })),
          backgroundColor: "rgba(16, 185, 129, 0.6)",
          borderColor: "rgba(16, 185, 129, 1)",
          borderWidth: 1,
        },
      ],
    };
    setChartData(data);
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Активность за последние 6 месяцев",
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        График активности
      </h2>
      <div className="h-50 sm:h-80 md:h-100">
        {chartData && <Bar options={chartOptions} data={chartData} />}
      </div>
    </div>
  );
};

export default DashboardChart;
