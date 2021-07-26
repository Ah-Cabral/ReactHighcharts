import React, { useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

import { Card, Chart } from '../../../Styles/chartStyles';

HighchartsMore(Highcharts);

export default function WaterfallChart() {

  useEffect(() => {
    Highcharts.chart('WaterfallChart', {
      chart: {
        type: "waterfall",
        width: 300,
        height: 250
      },
      title: {
        text: "Business Transactions Analysis"
      },
      xAxis: {
        type: "category"
      },
      credits:{
        enabled: false
      },
      yAxis: {
        title: {
          text: ""
        }
      },
      legend: {
        enabled: false
      },
      series: [
        {
          upColor: '#FF8700',
          color: '#E53124',
          data: [
            {
              name: "Start Value",
              y: 1000
            },
            {
              name:  "Product Revenue",
              y: 3000
            },
            {
              name:  'Service Revenue',
              y: 1500
            },
            {
              name:  'Passive Revenue',
              y: 500
            },
            {
              name: "Positive Balance",
              isIntermediateSum: true,
              color: '#191816'
            },
            {
              name: "Fixed Costs",
              y: -500
            },
            {
              name: "Variable Costs",
              y: -1200
            },
            {
              name: "Final Balance",
              isSum: true,
              color: '#191816'
            }
          ],
          dataLabels: {
            enabled: true,
            formatter: function () {
              return Highcharts.numberFormat(this.y);
            },
            style: {
              fontWeight: "bold"
            }
          },
          pointPadding: 0
        }
      ]
    });
  }, []);
  

  return (
    <Card>
        <Chart id='WaterfallChart'/>
    </Card>
  );
}
