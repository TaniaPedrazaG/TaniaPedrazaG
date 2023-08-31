import { Box, Typography, IconButton } from '@mui/material'
import { Email, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material'

export const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <IconButton>
                        <Email/>
                    </IconButton>
                    <Typography variant='caption'>
                        Email me
                    </Typography>
                
            </Box>
            <Box flex={1}/>
            <Box sx={{ display: {xs: 'none', sm: 'block'} }}>
                <IconButton>
                    <GitHub/>
                </IconButton>
                <IconButton>
                    <LinkedIn/>
                </IconButton>
                <IconButton>
                    <WhatsApp/>
                </IconButton>
            </Box>
        </Box>
    )
}