import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SearchBar from '../SearchBar/SearchBar';

const BasicCard = () => {

  const styles={
    container: {
      width: "80vw",
      display: 'flex' ,
      justifyContent: 'center',
      margin: "10vh auto", 
      border: "1px solid #0000003d" ,
      borderRadius: "8px",
      padding: "0.5rem"
    },

    card:{
      width: "800%"

    },

    topRow:{
      display: 'flex',
      backgroundColor: "#f5f5f5",
     
    }


    
}
  
    return (
      <Box sx={styles.container}>
        <Card sx ={styles.card}>
        
            <SearchBar placeholder="please enter some information here" onChange={(e)=>{console.log(e.target.value)}}></SearchBar>
          
    
          <Typography sx={{textAlign: "center", color: "#00000082", margin: "2rem"}} variant = "body1">
            No Users For this Project yet
          </Typography>
        </Card>
      </Box>

    );
  }
  


export default BasicCard                                