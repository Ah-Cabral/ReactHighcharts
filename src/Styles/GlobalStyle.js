import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
    --primary-font: 'Montserrat', sans-serif;
    --main-dark: #191816;
    --main-white: #FFFFFF;
    --secondary-white: #F6F6F6;
    --orange-primary: #FB8B24;
    }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    font-family: var(--primary-font);
  }

  html {
    min-height: 100%;
    background: var(--secondary-white);
    overflow-x: hidden;
  }

  body{
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: var(--primary-font);
    color: var(---main-dark);
    transition: color .2s ease-out;
  }

  ul {
    list-style: none;
  }

  .lineDiv{
    max-width: 1150px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    margin: 1rem auto;
  }

  .preloaderDivBackground{
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    background-color: #F6F6F6;
  }

  .preloaderDiv{
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
  }

  .animationLoad{
    animation: hello-animation 1s;
  }

  @keyframes hello-animation {
    0% { opacity: 0 }
    100% {  opacity: 1 }
  }


`