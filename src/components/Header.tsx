import { Typography, AppBar, Toolbar } from '@mui/material';
import { Account } from './Account'

const monNom = 'Alexandre Cloutier-Lemay';

export const Header = () => {
    return (
        <AppBar position='relative' sx={{ height: '12vh'}}>
            <Toolbar sx={{
                backgroundColor: 'primary.dark',
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '8px solid #2A496A',
                height: '12vh',
            }}>
                <Typography variant='h3'>PROJECTS TIME MANAGER</Typography>
                <Account name={monNom} />
            </Toolbar>
        </AppBar>
    )
}