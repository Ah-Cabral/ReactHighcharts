import React, { useEffect } from "react";
import Highcharts from "highcharts";

import {Card, Chart, Container} from '../../../Styles/chartStyles';

export default function AreaChart() {

  useEffect(() => {
    Highcharts.chart('AreaChart', {
      chart: {
        type: "area",
        width: 280,
        height: 250
      },
      title: {
        text: ""
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
          name: "Area 01",
          data: [4, 5, 6],
          color: '#191816'
        },
        {
          name: "Area 02",
          data: [1, 2, 3],
          color: '#FF8700'
        }
      ]
    });
  });

  return (
    <Container>
      <Card>
        <Chart id='AreaChart' />
      </Card>
    </Container>
  );
}
