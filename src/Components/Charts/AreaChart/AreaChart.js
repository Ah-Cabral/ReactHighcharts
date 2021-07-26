import React, { useEffect } from "react";
import Highcharts from "highcharts";

import { Card, Chart } from '../../../Styles/chartStyles';

export default function AreaChart() {

  useEffect(() => {
    Highcharts.chart('AreaChart', {
      chart: {
        type: "area",
        width: 300,
        height: 250
      },
      title: {
        text: "USA And Canada Areas"
      },
      credits:{
        enabled: false
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return this.value; // clean, unformatted number for year
          }
        }
      },
      yAxis: {
        title: {
          text: ""
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },
      series: [
        {
          name: "USA",
          data: [4, 5, 6],
          color: '#191816'
        },
        {
          name: "Canada",
          data: [1, 2, 3],
          color: '#FF8700'
        }
      ]
    });
  });

  return (
    <Card>
      <Chart id='AreaChart' />
    </Card>
  );
}
