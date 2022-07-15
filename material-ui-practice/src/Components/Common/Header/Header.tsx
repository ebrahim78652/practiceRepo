import React from 'react'
import Avatar from '@mui/material/Avatar';
import NotificationBell from '../NotificationBell/NotificationBell';
import CommonButton from '../Button/CommonButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { headerStyles } from './styles';

const Header = ({ title }: {title:string}) => {

    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography
                    sx={headerStyles.link}
                >
                    Go to docs
                </Typography>
                <NotificationBell></NotificationBell>    
                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                >
                    {title}
                </Typography>
                <Box>
                    <CommonButton
                        sx={headerStyles.webButton}
                        variant="outlined"
                    >
                        Web setup
                    </CommonButton>
                    <Tooltip
                        title="Help"
                    >           
                        <CommonButton  color="white">Help</CommonButton>
                    </Tooltip>
                    <CommonButton  color="white">Web setup</CommonButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Header