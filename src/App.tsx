import { theme } from './theme'
import { Box, ThemeProvider, Avatar } from '@mui/material';
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Header />
        <SideNav></SideNav>
      </Box>
    </ThemeProvider>
  );
}

export default App;