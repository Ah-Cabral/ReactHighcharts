import React, { useEffect } from "react";
import Highcharts from "highcharts";

import { Card, Chart } from '../../../Styles/chartStyles';

export default function PieChart() {
  useEffect(() => {
    Highcharts.chart('PieChart', {
      chart: {
        type: "pie",
        width: 300,
        height: 250
      },
      title: {
        text: "Criptocurrency PieChart"
      },
      subtitle: {
        text: ""
      },
      credits:{
        enabled: false
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}%</b></td></tr>'
      }, 
      series: [
        {
          name: "",
          colorByPoint: true,
          data: [
            {
              name: "Bitcoin",
              y: 60,
              sliced: true,
              color: '#FB8B24'
            },
            {
              name: "Ethereum",
              y: 30,
              sliced: true,
            },
            {
              name: "Theter",
              y: 10,
              sliced: true,
              color: '#191816'
            },
          ]
        }
      ]
    });
  }, []);

  return (
  <Card>
    <Chart id='PieChart' />
  </Card>
  );
}
