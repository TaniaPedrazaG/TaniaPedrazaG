import { HomeLayout } from '@/components/layouts/HomeLayout'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
    return (
        <HomeLayout title='Projects' pageDescription={'Projects'}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    padding: { xs: '0px 30px', md: '0px 130px' },
                    height: 'calc(100vh - 124px)'
                }}
            >
                <Typography variant='caption' color={'#E9E9E9'}>
                    {`<Projects/>`}
                </Typography>
            </Box>
        </HomeLayout>
    )
}

export default Projects