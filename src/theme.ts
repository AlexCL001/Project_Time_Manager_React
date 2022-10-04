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
                root:{
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
                    //border: '30px solid white'
                },
                head:  {
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
        MuiTableRow: {
            styleOverrides: {
                root: {
                    //marginTop: '30px',
                    //width: "100%",
                    //border: '30px solid white'
                    
                },
                head: {
                    //borderSpacing: '10px 0',
                    //borderCollapse: 'collapse',
                   // border: 0,
                },
            }
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    //borderSpacing: '0 30px',
                    //borderCollapse: 'separate',
                    //borderRadius: '20px',
                    //border: '20px solid white',
                },
                stickyHeader: {
                    //borderSpacing: '0 30px',
                    //display: 'table-caption',
                    //borderSpacing: '0 0px',

                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    // display: 'table-row-group',
                    // borderSpacing: '0 30px',
                    // borderCollapse: 'separate',
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    //display: 'table-header-group',
                    //borderCollapse: 'separate',
                    //borderSpacing: '0 0px',
                    //width: '100%'
                }
            }
        }
    }
});