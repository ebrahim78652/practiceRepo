import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type BasicMenuProps = {
    open: boolean, 
    handleClose:()=>void, 
    anchorEl: null | HTMLElement, 
    menuItems: {id: number, label:string}[]
}
function BasicMenu({open, handleClose, anchorEl, menuItems}: BasicMenuProps) {

  return (
    <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    {
        menuItems.map((item)=>
        <MenuItem key={item.id} onClick = {handleClose}>
            {item.label}
        </MenuItem>)
    }
  </Menu>

  )
}

export default BasicMenu