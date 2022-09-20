import { Box, Typography } from '@mui/material';

type AccountProps = {
    name: string
}

export const Account = (props: AccountProps) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>{props.name}</Typography>
            <Box
                component='img'
                sx={{
                    height: 70,
                    width: 70,
                    borderRadius: 25,
                    marginLeft: 3,
                }}
                alt='Profile picture'
                src='https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g='
            />
        </Box>
    )
}