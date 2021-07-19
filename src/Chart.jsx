import React, { PureComponent } from "react";
import Highcharts from "highcharts";

export default class Chart extends PureComponent {
  instance;

  options = {
    chart: {
      type: "column"
    },
    title: {
      text: "Column Chart"
    },
    series: [
      {
        data: [1, 3, 4, 10, 9, 15, 81, 6, 7]
      }
    ]
  };

  componentDidMount() {
    this.instance = Highcharts.chart("columnChart", this.options);
  }

  render() {
    return (
      <div>
        <div id="columnChart" />
      </div>
    );
  }
}
