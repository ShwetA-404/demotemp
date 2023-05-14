import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineGraph = () => {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/TD/index.php?request=getGraph&uuid=uuid1")
      .then((response) => {
        setTemperatureData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = {
    labels: temperatureData.map((data) => data.timestamp),
    datasets: [
      {
        label: "Temperature",
        data: temperatureData.map((data) => data.temperature),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            displayFormats: {
              hour: "MMM D hA",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} height={300} options={options} />
    </div>
  );
};

export default LineGraph;
