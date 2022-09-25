import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import { Account } from './Account'

export const Header = () => {
    return (
        <AppBar position='relative'>
            <Toolbar sx={{
                backgroundColor: 'primary.dark',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1rem',
                borderBottom: '8px solid #2A496A'
            }}>
                <Typography variant='h3'>PROJECTS TIME MANAGER</Typography>
                <Account name='Alexandre Cloutier-Lemay' />
            </Toolbar>
        </AppBar>
    )
}