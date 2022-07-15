import CommonButton from '../Button/CommonButton'
import React from 'react'
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

/*  */
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
/*  */

function NotificationBell({badgeContent}:{badgeContent:number}) {
    const newNotifications=`You have ${badgeContent} new Notifications`;
    const noNotifications=`You have no new Notifications`;

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

    {/*  */}

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

    {/*  */}
    </>     
  )
}

export default NotificationBell