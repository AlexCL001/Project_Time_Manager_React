import { theme } from './theme'
import { Box, ThemeProvider } from '@mui/material';
import { Header } from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
      </Box>
    </ThemeProvider>
  );
}

export default App;