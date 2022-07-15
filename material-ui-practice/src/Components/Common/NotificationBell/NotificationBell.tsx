import CommonButton from '../CommonButton'
import React from 'react'
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

function NotificationBell({badgeContent}:{badgeContent:number}) {
    const newNotifications=`You have ${badgeContent} new Notifications`;
    const noNotifications=`You have no new Notifications`;
    return (
    <>
      
    <Tooltip title = {badgeContent?newNotifications:noNotifications} >     
        <Badge badgeContent={badgeContent?badgeContent:0} color="primary">
        <CommonButton variant = "outlined">
            Notifications
        </CommonButton>
    </Badge>
    </Tooltip>
    </>     
  )
}

export default NotificationBell