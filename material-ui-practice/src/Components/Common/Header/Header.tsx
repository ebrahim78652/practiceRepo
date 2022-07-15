import React from 'react'
import Avatar from '@mui/material/Avatar';
import NotificationBell from '../NotificationBell/NotificationBell';
import CommonButton from '../Button/CommonButton';

function Header() {
  return (
    <div>
    <NotificationBell></NotificationBell>    
    <CommonButton variant = "text">Docs</CommonButton>
    <Avatar alt="Remy Sharp" src="../../../public/logo512.png" /></div>
  )
}

export default Header