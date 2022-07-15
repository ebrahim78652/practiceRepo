import React from 'react'
import Avatar from '@mui/material/Avatar';
import NotificationBell from '../NotificationBell/NotificationBell';
import CommonButton from '../Button/CommonButton';
import Typography from '@mui/material/Typography';

function Header({title}: {title:string}) {
  return (
    <div>
    <NotificationBell></NotificationBell>    
    <CommonButton variant = "text">Docs</CommonButton>
    <Avatar alt="Remy Sharp" src="../../../public/logo512.png" />
    
  {/*   //second row */}
    <Typography variant="h1" component="div" gutterBottom>
    {title}
    </Typography>
    <CommonButton>Help</CommonButton>
    <CommonButton>Web setup</CommonButton>
    </div>
  )


}

export default Header