import React, { useEffect } from "react";
import Highcharts from "highcharts";

import { Card, Chart } from '../../../Styles/chartStyles';

export default function BarChart() {
  useEffect(() => {

    Highcharts.chart('BarChart', {
        chart: {
          type: 'bar',
          width: 300,
          height: 250
        },
        title: {
          text: 'Number Examples'
        },
        xAxis: {
          categories: ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' * 1000'
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Numbers 1',
          data: [814, 841, 3714, 727, 31],
          color: "#FB8B24"
        }, {
          name: 'Numbers 2',
          data: [1216, 1001, 4436, 738, 40],
          color: "#191816"
        }]
      });

    }, []);

  return (
    <Card>
        <Chart id='BarChart' />
    </Card>
  );
}