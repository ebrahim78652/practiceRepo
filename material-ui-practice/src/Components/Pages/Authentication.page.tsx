import React from 'react'
import Grid from '@mui/material/Grid';
import Header from '../Common/Header/Header';

function Authentication() {

  const buttonStyles = {

    //below styles are the common ones that both the buttons are going to have
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,

    //below styles only in the button that has the variant = contained
    '&.MuiButton-contained': {
        /* backgroundColor: '#009be5', */
        '&:hover': {
            backgroundColor: '#006db3'
        },
    },

    //below styles only in the button that has the variant = outlined
    '&.MuiButton-outlined': {
        color: "#fff",
        borderColor: '#fff',
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },
};
  return (



    //make the 2 buttons here
    <Grid item xs = {8}>
        <Header></Header>
    </Grid>
  )
}

export default Authentication