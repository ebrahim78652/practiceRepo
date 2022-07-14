import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { mainItems } from './Components/NavBar/consts/navBarMainItems';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {mainItems.map((item, index)=>{
          return (<Route key ={item.id} path= {item.route} element ={item.component}></Route>)
        })}
      </Route>
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
);


