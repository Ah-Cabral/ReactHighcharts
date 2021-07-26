import React, { useEffect, useState } from "react";

import Header from "./Components/Header/Header";
import AreaChart from "./Components/Charts/AreaChart/AreaChart";
import WaterfallChart from "./Components/Charts/WaterfallChart/WaterfallChart";
import StockChart from "./Components/Charts/StockChart/StockChart";
import ColumnChart from "./Components/Charts/ColumnChart/ColumnChart";
import PieChart from "./Components/Charts/PieChart/PieChart";
import BarChart from "./Components/Charts/BarChart/BarChart";
import Loader from "./Components/Loader/Loader";

import RevenueBadge from "./Components/Badges/RevenueBadge";
import ProfitBadge from "./Components/Badges/ProfitBadge";
import CostBadge from "./Components/Badges/CostBadge";


import { GlobalStyle } from './Styles/GlobalStyle'


export default function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <GlobalStyle />
      {
        loading ? (
          <Loader />
        ) : (
        <div className='animationLoad'>
          <Header />

          <div className='lineDiv'>
            <CostBadge />
            <ProfitBadge />
            <RevenueBadge />
          </div>

          <div className='lineDiv'>
            <AreaChart />
            <StockChart />
            <WaterfallChart />
          </div>

          <div className='lineDiv'>
            <PieChart />
            <BarChart />
            <ColumnChart />
          </div>
        
        </div>)
      }
    </>
  );
}
