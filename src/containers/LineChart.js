import React from "react";
import { Line } from "react-chartjs-2";
import { options, data, styles } from "../chartsOptions/lineChartOptions";

export const LineChart = () => {
  return (
    <div className="lineChart">
      <Line options={options} data={data} style={styles} />
    </div>
  );
};
