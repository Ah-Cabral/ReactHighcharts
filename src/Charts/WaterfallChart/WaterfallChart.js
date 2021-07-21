import React, { useEffect, useState } from "react";
/* import axios from 'axios'; */

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

import {Title, Card, Chart, InfoDiv, PrimaryButton, ParagraphInfo, Container} from '../../Styles/chartStyles';

HighchartsMore(Highcharts);

export default function WaterfallChart() {

/*   useEffect(() =>{
    axios.get('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=iwjKPAF3SirbZupYMyX2huKg_jfuv_ji')
    .then((res) => console.log(res))
  }) */

  const [language, setLanguage] = useState('EN');

  function handleLanguageClick(){
    setLanguage(language === 'EN' ? 'PT-BR' : 'EN')
  }

  useEffect(() => {
    Highcharts.chart('WaterfallChart', {
      chart: {
        type: "waterfall",
        style: {
          borderRadius: '10px',
          padding: '1rem 0'
        }
      },
      title: {
        text: ""
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
          upColor: '#80ED99',
          color: '#E53124',
          data: [
            {
              name: language === 'PT-BR' ? 'Valor Inicial' : "Start Value",
              y: 1000
            },
            {
              name: language === 'PT-BR' ? "Receita Do Produto" : "Product Revenue",
              y: 3000
            },
            {
              name: language === 'PT-BR' ? "Receita de serviço" : 'Service Revenue',
              y: 1500
            },
            {
              name: language === 'PT-BR' ? "Receita Passiva" : 'Passive Revenue',
              y: 500
            },
            {
              name: language === 'PT-BR' ? "Saldo Positivo" : "Positive Balance",
              isIntermediateSum: true,
              color: '#14213D'
            },
            {
              name: language === 'PT-BR' ? "Custos Fixos" : "Fixed Costs",
              y: -500
            },
            {
              name: language === 'PT-BR' ? "Custos Variáveis" : "Variable Costs",
              y: -1200
            },
            {
              name: language === 'PT-BR' ? "Saldo Final" : "Final Balance",
              isSum: true,
              color: '#14213D'
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
  }, [language]);
  

  return (
    <>
      <Container>
        <Card>
          <Title>{language === 'PT-BR' ? 'Gráfico De Cachoeira' : 'WatterFall Highchart'} </Title>
            <Chart id='WaterfallChart'/>
            <InfoDiv>
              <ParagraphInfo>
                  {
                  language === 'PT-BR' ? 'Gráficos de cachoeiras são usados para visualizar valores cumulativos, onde cada ponto de dados contribui para um total. Neste exemplo, pontos que mostram somas intermediárias são utilizados para indicar a progressão do total.' 
                  : 'Waterfall charts are used to visualize cumulative values, where each data point contributes to a total. In this example, points showing intermediate sums are used to indicate the progression of the total.'
                  }
              </ParagraphInfo>
              <PrimaryButton onClick={handleLanguageClick} className='buttonPrimary'>
                  {
                  language === 'PT-BR' ? 'Change To English' : 'Mudar Para Português'
                  }
              </PrimaryButton>
          </InfoDiv>
        </Card>
      </Container>
    </>
  );
}
