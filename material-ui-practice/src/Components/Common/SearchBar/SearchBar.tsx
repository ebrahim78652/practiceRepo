import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CommonButton from '../Button/CommonButton';
import { KeyboardEvent } from "react";

const styles={
    container: {
        padding: "1rem",
        display: 'flex',
          backgroundColor: "#f5f5f5",
          justifyContent: "space-between"
    }, 

    topRow:{
        flexGrow: 1,
    }
}

const SearchBar = ({placeholder, onChange}: {placeholder:string, onChange:(e: KeyboardEvent<HTMLInputElement>)=>void }) => {
  return (
    <>
    <Box sx={styles.container}>
     <Box sx = {styles.topRow}>
    <CommonButton  variant ="text">search</CommonButton>
    <TextField 
        placeholder={placeholder} sx ={{width: "90%"}}  onChange={onChange} id="standard-basic" variant="standard"
    />  
    </Box>   
    <CommonButton variant ="text">Add User</CommonButton>
    </Box>                    
    </>
  
    
  )
}
export default SearchBar