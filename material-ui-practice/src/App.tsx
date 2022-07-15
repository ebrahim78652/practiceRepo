import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Outlet} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Header from './Components/Common/Header/Header';

import Box from '@mui/material/Box';

function App() {
  return (
   <> 
   <Box sx ={{
    display: 'flex',
   }
   }>
   <NavBar />
    <Header title="Authentication"></Header>
   </Box>

    
    <Outlet />
   </>

 
  );
}

export default App;
