import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Outlet} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Header from './Components/Common/Header/Header';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';


function App() {

  let location = useLocation();


  return (
   <> 
   <Box sx ={{
    display: 'flex',
   }
   }>
   <NavBar />
    <Header title={location.pathname.replace("/", "")}></Header>
   </Box>

    
    <Outlet />
   </>

 
  );
}

export default App;
