import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#001E3C', //SideNav
            main: '#002953', //Projects Bars
            dark: '#071A2E', //Header
            contrastText: '#fff', //Text
        },
        secondary: {
            light: '#003972', //Project more details
            main: '#FF0000', //End Project --> RED
            dark: '#0A1929', //Page Background
            contrastText: '#2A496A', //Borders Separators
        },
    },
});