import { Avatar, Box, Typography } from '@mui/material';
import Alex from '../img/alex.jpg';

type AccountProps = {
    name: string
}

export const Account = (props: AccountProps) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>{props.name}</Typography>
            <Avatar
                alt="Profile picture"
                src={Alex}
                sx={{ width: 70, height: 70, ml: 3 }}
            />
        </Box>
    )
}