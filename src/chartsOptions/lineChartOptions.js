import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        font: {
          size: 0,
        },
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,

  datasets: [
    {
      label: "Expenses",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#48AAD7",
      backgroundColor: "#48AAD7",
      color: "#48AAD7",
      borderWidth: 3.5,
      pointStyle: "circle",
      pointRadius: 13,
      pointBorderColor: "#fff",
      pointBorderWidth: 4,
      title: {
        display: false,
      },
    },
  ],
};

export const styles = {
  width: "100%",
  height: "80%",
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
