import React from "react";
import { render } from "react-dom";
import Chart from "./Chart";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Chart />
  </div>
);

render(<App />, document.getElementById("root"));