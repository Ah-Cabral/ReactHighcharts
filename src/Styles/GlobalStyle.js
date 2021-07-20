import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
    --primary-font: 'Montserrat', sans-serif;
    --main-dark: #14213D;
    --main-white: #FFFFFF;
    --light-gray: #E5E5E5;
    --orange-primary: #FCA311;
    --green-primary: #80ED99;
    --red-primary: #E53124;
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
    background: var(--primary-font);
  }

  body{
    display: flex;
    flex-direction: column;
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

`