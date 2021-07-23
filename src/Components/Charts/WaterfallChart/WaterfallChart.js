import React, { useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

import {Card, Chart, Container} from '../../../Styles/chartStyles';

HighchartsMore(Highcharts);

export default function WaterfallChart() {

  useEffect(() => {
    Highcharts.chart('WaterfallChart', {
      chart: {
        type: "waterfall",
        style: {
          borderRadius: '10px',
          padding: '1rem 0'
        },
        width: 450,
        height: 215
      },
      title: {
        text: ""
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
      style:{
        width: '960px'
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
    <>
      <Container>
        <Card>
            <Chart id='WaterfallChart'/>
        </Card>
      </Container>
    </>
  );
}
