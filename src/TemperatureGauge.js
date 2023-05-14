import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TemperatureGauge() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://65.0.30.173/api/index.php?request=get&uuid=uuid1")
        .then((response) => {
          //   console.log("reached here");
          const datae = response.data;
          //const myArray = data.myArray;
          console.log(datae.map((obj) => obj.temprature));
          setTemperature(datae.map((obj) => obj.temprature));
          //const tdata = response.data;
          //console.log(temperature.map((data) => data.temperature));
          //setTemperature(response.data.temperature);
        })
        .catch((error) => console.log(error));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    //{myData && myData.map((value, index) => <p key={index}>{value}</p>)}
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={temperature}
        minValue={0}
        maxValue={500}
        text={`${temperature}°C`}
        styles={buildStyles({
          pathColor: "#4CA1AF",
          textColor: "#4CA1AF",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
    //<div>{temperature && <div>Current temperature: {temperature}°C</div>}</div>
  );
}

export default TemperatureGauge;
