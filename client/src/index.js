import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import History from './components/History/History';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/PokerClubApp",
    element: <App />  
    
  },

  {
    path:'/PokerClubApp/history',
    element:<History></History>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <div className='menu-bar' >
      <a href='/PokerClubApp/history'>History</a>      
      <a href='/PokerClubApp/'>Game</a>
      </div>
    <RouterProvider router={router} />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
