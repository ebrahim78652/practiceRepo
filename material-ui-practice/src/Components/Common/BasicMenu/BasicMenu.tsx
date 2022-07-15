import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type BasicMenuProps = {
    open: boolean, 
    handleClose:()=>void, 
    anchorEl: null | HTMLElement, 

}
function BasicMenu({open, handleClose, anchorEl}: BasicMenuProps) {

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
    <MenuItem onClick={handleClose}>Profile</MenuItem>
    <MenuItem onClick={handleClose}>My account</MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
  </Menu>

  )
}

export default BasicMenu