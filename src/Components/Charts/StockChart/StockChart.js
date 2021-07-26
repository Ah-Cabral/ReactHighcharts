import React, { useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

import { Card, Chart } from '../../../Styles/chartStyles';

HighchartsMore(Highcharts);

export default function StockChart(){

    useEffect(() =>{
        Highcharts.chart('StockChart',{
        chart:{
            type: 'line',
            width: 300,
            height: 250,
        },
        title: {
            text: "Facebook Stock Analysis"
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
            pointFormat: "Stock Value: <b>{point.y}</b>"
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
                name: "Stock",
                data: [1, 2, 3, 10, 8.5, 8.7, 8.9, 8.1, 11.2, 11.35, 11.4, 11.43, 11.9],
                color: '#FF8700'
            }
        ]
        })
    }, [])

    return (
    <Card>
        <Chart id='StockChart' />
    </Card>
    );

}