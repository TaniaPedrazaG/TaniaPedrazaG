import Image from 'next/image'
import { HomeLayout } from '@/components/layouts/HomeLayout'
import { Box, Typography } from '@mui/material'
import NotFound from '../assets/images/404.svg'

const Custom404 = () => {
    return (
        <HomeLayout title={'Page not found'} pageDescription={'Page not found'}>
            <Box
                display={'flex'}
                justifyContent='flex-start'
                alignItems={'flex-end'}
                height='calc(100vh - 124px)'
                padding={{xs: '0px 50% 25%', sm: '0px 10% 25%'}}
                sx={{ flexDirection: { xs: 'column', sm: 'row' }}}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    <Typography variant='h1' component={'h1'} fontSize={80} fontWeight={200}>404</Typography>
                    <Typography marginLeft={ 2 }>LOST IN SPACE</Typography>
                </Box>
                <Box
                    sx={{
                        position: 'fixed',
                        top: {xs: '-50px', sm: '0px'},
                        right: {xs: '-400px', sm: '0px'}
                    }}
                >
                    <Image
                        alt='not-found'
                        src={NotFound}
                        width={1240}
                        height={780}
                    />
                </Box>
            </Box>
        </HomeLayout>
    )
}

export default Custom404