import React, { useState, useEffect } from "react";
import axios from "axios";

import "react-circular-progressbar/dist/styles.css";
import Thermometer from "react-thermometer-component";

const styles = {
  dial: {
    display: "inline-block",
    width: `auto`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "20px",
  },
  title: {
    fontSize: "1em",
    color: "#000",
    marginTop: "15px",
  },
};

function Temp() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          "http://65.0.30.173/api/index.php?request=get&uuid=987654321012345"
        )
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
    <div className="wrapper">
      <div className="thermo-container" style={styles.dial}>
        <Thermometer
          theme="light"
          value={temperature}
          max="500"
          steps="1"
          format="°C"
          size="normal"
          height="250"
        />
      </div>
      <div className="tempstyle">Current Temperature: {temperature}°C</div>
    </div>
  );
}

export default Temp;
