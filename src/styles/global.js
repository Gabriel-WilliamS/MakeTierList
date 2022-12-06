import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{ 
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea,a{
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;

  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }

`;
