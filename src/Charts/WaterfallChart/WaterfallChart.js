import React, { useEffect, useRef, useState } from "react";

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

import {Title, Card, Chart, InfoDiv, PrimaryButton, ParagraphInfo, Container} from './Styles';

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
              y: 120000
            },
            {
              name: language === 'PT-BR' ? "Receita Do Produto" : "Product Revenue",
              y: 569000
            },
            {
              name: language === 'PT-BR' ? "Receita de serviço" : 'Service Revenue',
              y: 231000
            },
            {
              name: language === 'PT-BR' ? "Saldo Positivo" : "Positive Balance",
              isIntermediateSum: true,
              color: '#14213D'
            },
            {
              name: language === 'PT-BR' ? "Custos Fixos" : "Fixed Costs",
              y: -342000
            },
            {
              name: language === 'PT-BR' ? "Custos Variáveis" : "Variable Costs",
              y: -233000
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
  


  return (
    <>
      <Container>
        <Card>
          <Title>{language === 'PT-BR' ? 'Gráfico De Cachoeira' : 'WatterFall Highchart'} </Title>
            <Chart ref={refContainer}/>
            <InfoDiv>
              <ParagraphInfo>
                  {
                  language === 'PT-BR' ? 'Gráficos de cachoeiras são usados para visualizar valores cumulativos, onde cada ponto de dados contribui para um total. Neste exemplo, pontos que mostram somas intermediárias são utilizados para indicar a progressão do total.' 
                  : 'Waterfall charts are used to visualize cumulative values, where each data point contributes to a total. In this example, points showing intermediate sums are used to indicate the progression of the total.'
                  }
              </ParagraphInfo>
              <PrimaryButton onClick={handleLanguageClick} className='buttonPrimary'>
                  {language === 'PT-BR' ? 'Change To English' : 'Mudar Para Português'}
              </PrimaryButton>
          </InfoDiv>
        </Card>
      </Container>
    </>
  );
}
