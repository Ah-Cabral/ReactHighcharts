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
          text: 'Currency Analysis'
        },
        xAxis: {
          categories: ['Currency Type I', 'Currency Type II', 'Currency Type I', 'Currency Type II'],
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
          name: 'Dollar',
          data: [814, 841, 3714, 727, 31],
          color: "#FB8B24"
        }, {
          name: 'Real (BRL)',
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