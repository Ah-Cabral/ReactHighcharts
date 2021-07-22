import React from "react";

import AreaChart from "./Components/Charts/AreaChart/AreaChart";
import WaterfallChart from "./Components/Charts/WaterfallChart/WaterfallChart";
import StockChart from "./Components/Charts/StockChart/StockChart";
import ColumnChart from "./Components/Charts/ColumnChart/ColumnChart";
import Header from "./Components/Header/Header";

import { GlobalStyle } from './Styles/GlobalStyle'

export default function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <div className='lineDiv'>
        <WaterfallChart />
        <AreaChart />
        <StockChart />
        <ColumnChart />
      </div>
    </>
  );
}
