import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }
}
export const dashboardTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: 8.5,
                    textTransform: 'none',
                    '&.MuiButton-contained': {
                        backgroundColor: '#009be5',
                        '&:hover': {
                            backgroundColor: '#006db3'
                        },
                    },
                    '&.MuiButton-outlined': {
                        color: "#fff",
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                        },
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '1.7rem',
                },
            },
        },
        MuiTypography:{
          styleOverrides :{
            root: {
              "&.MuiTypography-h1":{
                fontSize: '1.6rem',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '0.5px',
                textTransform: 'capitalize',
              }
            }
          }
        }
    },
    palette: {
        white: {
            main: '#fff',
        },
    },

  });