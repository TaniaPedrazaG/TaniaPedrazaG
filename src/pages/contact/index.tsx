import { HomeLayout } from '@/components/layouts/HomeLayout'
import { Box, Button, FormControl, Grid, TextField, Typography } from '@mui/material'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <HomeLayout title='Skills' pageDescription={'Software Developer Skills'}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: { xs: '0px 30px', md: '0px 120px' },
                    height: 'calc(100vh - 124px)'
                }}
            >
                <Grid
                    container
                    spacing={4}
                >
                    <Grid
                        item xs={ 12 } sm={ 6 }
                        className={styles['item-container']}
                    >
                        <Typography variant='caption' color={'#E9E9E9'}>
                            {`<Contact/>`}
                        </Typography>
                        <Typography variant='body1' color={'secondary'} mt={2}>
                            Just give me a message whenever and however you want and we will start our cooperation
                        </Typography>
                        <Typography variant='body1' color={'secondary'} mt={2}>
                            MY PHONE:
                        </Typography>
                        <Typography variant='body2' color={'secondary'}>
                            +57 314 400 7826
                        </Typography>
                        <Typography variant='body1' color={'secondary'} mt={2}>
                            EMAIL:
                        </Typography>
                        <Typography variant='body2' color={'secondary'}>
                            tania.l_pedraza@hotmail.com
                        </Typography>
                    </Grid>
                    <Grid
                        item xs={12} sm={6}
                        className={styles['item-container']}
                    >
                        <FormControl sx={{ width: '100%' }}>
                            <TextField
                                fullWidth
                                label={'NAME'}
                                variant='standard'
                                size='small'
                            />
                            <TextField
                                fullWidth
                                label={'EMAIL'}
                                variant='standard'
                                size='small'
                            />
                            <TextField
                                fullWidth
                                label={'Your message'}
                                variant='standard'
                                size='small'
                                multiline
                                rows={3}
                                sx={{ mb: 2 }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end'
                                }}
                            >
                                <Button size='small' sx={{ width: '50%' }}>
                                    SEND
                                </Button>
                            </Box>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </HomeLayout>
    )
}

export default Contact