import React from "react";
import AreaChart from "./Charts/AreaChart/AreaChart";
import WaterfallChart from "./Charts/WaterfallChart/WaterfallChart";
import StockChart from "./Charts/StockChart/StockChart";


import { GlobalStyle } from './Styles/GlobalStyle'

export default function App() {

  return (
    <>
      <GlobalStyle />
      <WaterfallChart />
      <AreaChart />
      <StockChart />
    </>
  );
}
