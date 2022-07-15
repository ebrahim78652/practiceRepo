import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';

  

export const dashboardTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
            contained: {
                fontSize: '3rem'
            },
        },
      },
    },
    palette: {
      primary: blue
 
      },
  });

