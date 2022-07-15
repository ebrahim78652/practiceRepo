import CommonButton from '../Button/CommonButton'
import React from 'react'
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';
/*  */
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
/*  */

function NotificationBell() {
 

    //methods for the basic menu
    /*  */
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if(!menuItems.length){
        return
      }
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    /*  */
    const menuItems = [{
        id: 1, 
        label: "first Item"
    }, 
    {
        id:2, 
        label: "secodn Item"
    }]
    /*  */

    const newNotifications=`You have ${menuItems.length} new Notifications`;
    const noNotifications=`You have no new Notifications`;

    return (
    <>
      
    <div>
        <Tooltip title = {menuItems.length?newNotifications:noNotifications} >
            <Badge badgeContent={menuItems.length?menuItems.length:0} color="primary">
            <CommonButton onClick={handleClick} variant = "outlined" size="small">
                Notifications
            </CommonButton>
        </Badge>
        </Tooltip>
    </div>

    {/*Basic Menu that opens when clicked on the notifications button  */}
     <BasicMenu open={open} handleClose={handleClose} anchorEl = {anchorEl} menuItems ={menuItems}  ></BasicMenu>       
    {/*  */}
    </>     
  )
}

export default NotificationBell