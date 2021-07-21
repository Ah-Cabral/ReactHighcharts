import React, { useEffect, useState } from "react";
/* import axios from 'axios'; */

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

import {Title, Card, Chart, InfoDiv, PrimaryButton, ParagraphInfo, Container} from '../../Styles/chartStyles';

HighchartsMore(Highcharts);

export default function StockChart(){

    const [language, setLanguage] = useState('EN');

    function handleLanguageClick(){
      setLanguage(language === 'EN' ? 'PT-BR' : 'EN')
    }

    useEffect(() =>{
        Highcharts.chart('StockChart',{
        chart:{
            type: 'line'
        },
        title: {
            text: ""
        },
        xAxis: {
            allowDecimals: false,
            labels: {
            formatter: function () {
                return this.value;
            }
            }
        },
        yAxis: {
            title: '',
            labels: {
            formatter: function () {
                return this.value;
            }
            }
        },
        tooltip: {
            pointFormat: language === 'PT-BR' ? "Valor da Ação: <b>{point.y:,.0f}</b>" : "Stock Value: <b>{point.y:,.0f}</b>"
        },
        plotOptions: {
            area: {
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
            name: language === 'PT-BR' ? "Exemplo De Ação" : "Stock Example",
            data: [
                1, 2, 3
            ]
            }
        ]
        })
    })

    return (
    <Container>
        <Card>
        <Title>
            {language === 'PT-BR' ? 'Gráfico De Ações' : 'Stock Chart'}
        </Title>
        <Chart id='StockChart' />
        <InfoDiv>
            <ParagraphInfo>
            {
                language === 'PT-BR' ? 'Um gráfico ou tabela de ações é um conjunto de informações sobre as ações de uma determinada empresa que geralmente mostram informações sobre mudanças de preço, preço de negociação atual, altas e baixas históricas, dividendos, volume de negociação e outras informações financeiras da empresa.' 
                : "A stock chart or table is a set of information on a particular company's stock that generally shows information about price changes, current trading price, historical highs and lows, dividends, trading volume and other company financial information."
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