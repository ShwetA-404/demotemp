import React from "react";
import axios from "axios";

function ExportButton() {
  const handleExport = () => {
    axios
      .get(
        "http://65.0.30.173/api/index.php?request=export&uuid=987654321012345"
      )
      .then((response) => {
        const data = response.data;
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "temperature-data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error exporting CSV file", error));
  };

  return (
    <button className="expbutton" onClick={handleExport}>
      Export CSV
    </button>
  );
}

export default ExportButton;
