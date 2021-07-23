import React, { useEffect } from "react";
import Highcharts from "highcharts";

import {Card, Chart, Container} from '../../../Styles/chartStyles';

export default function PieChart() {
  useEffect(() => {
    Highcharts.chart('PieChart', {
      chart: {
        type: "pie",
        width: 350,
        height: 300
      },
      title: {
        text: ""
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
              name: "Piece 1",
              y: 60,
              sliced: true,
              color: '#FB8B24'
            },
            {
              name: "Piece 2",
              y: 30,
              sliced: true,
            },
            {
              name: "Piece 3",
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
    <Container>
      <Card>
        <Chart id='PieChart' />
      </Card>
    </Container>
  );
}
