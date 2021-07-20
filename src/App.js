import React from "react";
import WaterfallChart from "./Charts/WaterfallChart";

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default function App() {

    const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600;1,700&display=swap');

        :root{
        --primary-font: 'Montserrat', sans-serif;
        --main-dark: #023047;
        }

        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        list-style: none;
        font-family: var(--primary-font);
        }
    `

  const App = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 2rem;
    `

  const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    `
  return (
    <>
    <GlobalStyle />
    <App>
        <Container>
            <WaterfallChart />
        </Container>
    </App>
    </>
  );
}
