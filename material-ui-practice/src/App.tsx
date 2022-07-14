import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Outlet} from 'react-router-dom'
import Grid from '@mui/material/Grid';
function App() {
  return (
    <Grid container>
    <NavBar />
    <Outlet />
  </Grid>
  );
}

export default App;
