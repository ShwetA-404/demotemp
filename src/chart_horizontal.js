import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function chart_horizontal() {
  return <div>chart-horizontal</div>;
}

export default chart_horizontal;
