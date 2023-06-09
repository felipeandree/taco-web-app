import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import App from './App';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <SplashScreen/>
      },
      {
        path: 'home', 
        element: <Home />
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);


