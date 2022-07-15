import CommonButton from '../Button/CommonButton'
import React from 'react'
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';
/*  */
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
/*  */

function NotificationBell({badgeContent}:{badgeContent:number}) {
    const newNotifications=`You have ${badgeContent} new Notifications`;
    const noNotifications=`You have no new Notifications`;

    //methods for the basic menu
    /*  */
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    /*  */
    return (
    <>
      
    <div>
        <Tooltip title = {badgeContent?newNotifications:noNotifications} >
            <Badge badgeContent={badgeContent?badgeContent:0} color="primary">
            <CommonButton onClick={handleClick} variant = "outlined" size="small">
                Notifications
            </CommonButton>
        </Badge>
        </Tooltip>
    </div>

    {/*Basic Menu that opens when clicked on the notifications button  */}
     <BasicMenu open={open} handleClose={handleClose} anchorEl = {anchorEl} ></BasicMenu>       
    {/*  */}
    </>     
  )
}

export default NotificationBell