import { theme } from './theme'
import { Box, ThemeProvider, Avatar } from '@mui/material';
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import toast, { Toaster } from 'react-hot-toast'

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
      <Toaster position="bottom-right"/>
    </ThemeProvider>
  );
}

export default App;