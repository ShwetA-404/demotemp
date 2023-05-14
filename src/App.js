import "./App.css";
import Temp from "./temp";
import ExportButton from "./exportButton";
// import chart from "./chart";
import LineGraph from "./LineGraph";
// import chart_horizontal from "./chart_horizontal";

function App() {
  return (
    <div className="App">
      <h1>Temperature Data Logger</h1>

      <Temp />
      {/* <chart_Horizontal /> */}
      <ExportButton />

      {/* <chart />
      <LineGraph /> */}
    </div>
  );
}

export default App;
