import React, { useEffect, useRef, useState } from "react";

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

import styled from 'styled-components'

HighchartsMore(Highcharts);

export default function WaterfallChart() {

  const [language, setLanguage] = useState('EN');
  console.log('Bernardinho Teste', language)

  function handleLanguageClick(){
    setLanguage(language === 'EN' ? 'PT-BR' : 'EN')
  }

  const refContainer = useRef(null);

  useEffect(() => {
    Highcharts.chart(refContainer.current, {
      chart: {
        type: "waterfall"
      },
      title: {
        text: "Highcharts Waterfall"
      },
      xAxis: {
        type: "category"
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
          upColor: '#219EBC',
          color: '#FB8500',
          data: [
            {
              name: "Start",
              y: 120000
            },
            {
              name: "Product Revenue",
              y: 569000
            },
            {
              name: "Service Revenue",
              y: 231000
            },
            {
              name: "Positive Balance",
              isIntermediateSum: true,
              color: Highcharts.getOptions().colors[1]
            },
            {
              name: "Fixed Costs",
              y: -342000
            },
            {
              name: "Variable Costs",
              y: -233000
            },
            {
              name: "Balance",
              isSum: true,
              color: Highcharts.getOptions().colors[1]
            }
          ],
          dataLabels: {
            enabled: true,
            formatter: function () {
              return Highcharts.numberFormat(this.y / 1000, 0, ",") + "k";
            },
            style: {
              fontWeight: "bold"
            }
          },
          pointPadding: 0
        }
      ]
    });
  }, [language]);
  
  /*Styled Components*/
  const Title = styled.h1`
    text-align: center;
    color: var(--main-dark);
    font-family: var(--primary-font);
    padding: 2rem;
  `;

  const Card = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    border: 1px solid red;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.056);
    backdrop-filter: blur( 0.0px );
    -webkit-backdrop-filter: blur( 0.0px );
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.145);
  `;

  const Chart = styled.div`
    font-family: var(--primary-font);
    width: 100%;
  `;

  const InfoDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem auto;
  `;


  const PrimaryButton = styled.button`
    padding: 2rem;
  `;

  const ParagraphInfo = styled.p``

  return (
    <>
      <Title>WatterFall Highchart</Title>
      <Card>
          <Chart ref={refContainer}/>
          <InfoDiv>
            <ParagraphInfo>
                {
                language === 'PT-BR' ? 'Gráficos de cachoeiras são usados para visualizar valores cumulativos, onde cada ponto de dados contribui para um total. Neste exemplo, pontos que mostram somas intermediárias são utilizados para indicar a progressão do total.' 
                : 'Waterfall charts are used to visualize cumulative values, where each data point contributes to a total. In this example, points showing intermediate sums are used to indicate the progression of the total.'
                }
            </ParagraphInfo>
            <PrimaryButton onClick={handleLanguageClick} className='buttonPrimary'>
                {language === 'EN' ? 'PT-BR' : 'EN'}
            </PrimaryButton>
        </InfoDiv>
      </Card>
    </>
  );
}
