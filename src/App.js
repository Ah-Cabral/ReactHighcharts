import React from "react";
import AreaChart from "./Components/Charts/AreaChart/AreaChart";
import WaterfallChart from "./Components/Charts/WaterfallChart/WaterfallChart";
import StockChart from "./Components/Charts/StockChart/StockChart";

import { GlobalStyle } from './Styles/GlobalStyle'

export default function App() {

  return (
    <>
      <GlobalStyle />
      <div className='lineDiv'>
        <WaterfallChart />
        <AreaChart />
        <StockChart />
      </div>
    </>
  );
}
