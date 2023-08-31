import type { NextPage } from 'next';
import Image from 'next/image';
import { HomeLayout } from '@/components/layouts/HomeLayout';
import { Box, Button, Typography } from '@mui/material';
import Profile from "../assets/images/profile.svg";

const HomePage: NextPage = () => {
    return (
        <HomeLayout title='Tania Pedraza' pageDescription={'Software Developer'}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    padding: { xs: '0px 30px', md: '0px 130px' },
                    height: 'calc(100vh - 124px)'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                    >
                    <Typography variant='caption' color={'#E9E9E9'}>
                        {`<Hello, world/>`}
                    </Typography>
                    <Typography
                        variant='h1'
                        sx={{
                            mt: {xs: 0, sm: 3},
                            mb: {xs: 1, sm: 4},
                            lineHeight: '2',
                            textAlign: { xs: 'justify', sm: 'start'}
                        }}
                        >
                        My name is Tania. I&apos;m a software developer from Colombia
                    </Typography>
                    <Button>
                        CONTACT ME
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: {xs: 'flex-start', sm: 'center'}
                    }}
                    >
                     <Image
                        alt='profile'
                        src={Profile}
                        width={380}
                        height={380}
                    />
                </Box>
            </Box>
        </HomeLayout>
    )
}

export default HomePage