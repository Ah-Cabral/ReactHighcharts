import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";

import {Title, Card, Chart, InfoDiv, PrimaryButton, ParagraphInfo, Container} from '../../Styles/chartStyles';

export default function AreaChart() {

  const [language, setLanguage] = useState('EN');

  function handleLanguageClick(){
    setLanguage(language === 'EN' ? 'PT-BR' : 'EN')
  }

  useEffect(() => {
    Highcharts.chart('AreaChart', {
      chart: {
        type: "area"
      },
      accessibility: {
        description:
          "Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500."
      },
      title: {
        text: "US and USSR nuclear stockpiles"
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return this.value; // clean, unformatted number for year
          }
        },
        accessibility: {
          rangeDescription: "Range: 1940 to 2017."
        }
      },
      yAxis: {
        title: {
          text: "Nuclear weapon states"
        },
        labels: {
          formatter: function () {
            return this.value / 1000 + "k";
          }
        }
      },
      tooltip: {
        pointFormat:
          "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}"
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [
        {
          name: "USA",
          data: [
            4, 5, 6
          ]
        },
        {
          name: "USSR/Russia",
          data: [
            1, 2, 3
          ]
        }
      ]
    });
  });

  return (
    <Container>
      <Card>
        <Title>
          {language === 'PT-BR' ? 'Gráfico De Área' : 'Area Highchart'}
        </Title>
        <Chart id='AreaChart' />
        <InfoDiv>
          <ParagraphInfo>
            {
              language === 'PT-BR' ? 'Um gráfico de área é um gráfico de linhas, onde a área entre a linha e o eixo é sombreada com uma cor. Estes gráficos normalmente são utilizados para representar os totais acumulados ao longo do tempo e são a forma convencional de exibir as linhas empilhadas.' 
              : 'An area chart is a line chart, where the area between the line and the axis is shaded with a color. These charts are typically used to represent the accumulated totals over time and are the conventional way of displaying stacked rows.'
            }
          </ParagraphInfo>
          <PrimaryButton onClick={handleLanguageClick}>
            {
              language === 'PT-BR' ? 'Mudar Para português' : 'Change To English'
            }
          </PrimaryButton>
        </InfoDiv>
      </Card>
    </Container>
  );
}
