import React, { useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

import { Card, Chart, Container} from '../../../Styles/chartStyles';

HighchartsMore(Highcharts);

export default function StockChart(){

    useEffect(() =>{
        Highcharts.chart('StockChart',{
        chart:{
            type: 'line',
            width: 280,
            height: 250
        },
        title: {
            text: ""
        },
        credits:{
            enabled: false
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
            pointFormat: "Stock Value: <b>{point.y:,.0f}</b>"
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
                name: "Stock Example",
                data: [1, 2, 3],
                color: '#FF8700'
            }
        ]
        })
    }, [])

    return (
    <Container>
        <Card>
            <Chart id='StockChart' />
        </Card>
    </Container>
    );

}