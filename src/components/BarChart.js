import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  animation: true,
};
export const styles = {
  width: "80%",
  height: "50%",
  borderRadius: "25px",
  padding: "15px",
  background: `-moz-linear-gradient(
        126deg,
        rgba(5, 42, 75, 1) 0%,
        rgba(13, 58, 100, 1) 100%
      )`,
  background: `-webkit-linear-gradient(
        126deg,
        rgba(5, 42, 75, 1) 0%,
        rgba(13, 58, 100, 1) 100%
      )`,
  background: `linear-gradient(
        126deg,
        rgba(5, 42, 75, 1) 0%,
        rgba(13, 58, 100, 1) 100%
      )`,
  filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="#052a4b",endColorstr="#0d3a64",GradientType=1)`,
};

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const BarChart = () => {
  return (
    <div className="barChart">
      <Doughnut style={styles} data={data} options={options} />
    </div>
  );
};
