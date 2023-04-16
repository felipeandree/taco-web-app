import React from 'react';
import './App.css';
// Reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './Assets/styles/globalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Outlet/>
    
    </div>
  );
}

export default App;
