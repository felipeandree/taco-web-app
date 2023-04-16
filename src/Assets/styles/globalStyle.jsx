import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fff0;
    text-decoration: none;
    a, a:visited {
    color: inherit;
    }
   
     :focus {
    			outline: none;
		} 
  }
  
  body {
    box-sizing: border-box;
    font-size: 1.6rem;
  }
`;