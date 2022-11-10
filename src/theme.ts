import { createTheme } from '@mui/material/styles';
import { border } from '@mui/system';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#001E3C', //SideNav
            main: '#002953', //Projects Bars
            dark: '#071A2E', //Header
            contrastText: '#fff', //Text
        },
        secondary: {
            light: '#0057AE', //info bar
            main: '#006FDD', //Project more details
            dark: '#0A1929', //Page Background
            contrastText: '#2A496A', //Borders Separators
        },
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: '#fff',
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    '.MuiTabs-vertical &': {
                        '.&Mui-selected': {
                            color: '#fff',
                            backgroundColor: '#fff',
                        }
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: "#fff",
                    fontSize: "22px",
                    padding: '5px 16px 5px 16px',
                    backgroundColor: '#002953',
                },
                head: {
                    padding: '20px 16px 20px 16px',
                    backgroundColor: '#0057AE',
                }
            },
            defaultProps: {
                sx: {
                    '&:first-child tr, &:last-child tr': {
                        borderRadius: '100px',
                    }
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    '&:hover': {
                        //backgroundColor: '#FF6262',
                    },
                }
            }
        },

    },

});