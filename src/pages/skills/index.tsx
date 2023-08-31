import { HomeLayout } from "@/components/layouts/HomeLayout"
import { Box, Grid, List, ListItem, Typography } from "@mui/material"

const Skills = () => {
    return (
        <HomeLayout title='Skills' pageDescription={'Software Developer Skills'}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    padding: { xs: '0px 30px', md: '0px 130px' },
                    height: 'calc(100vh - 124px)'
                }}
            >
                <Typography variant='caption' color={'#E9E9E9'}>
                    {`<Skills/>`}
                </Typography>
                <Grid container>
                    <Grid item>
                        <Typography variant='caption' color={'#E9E9E9'}>
                            Skills I possess as a software developer
                        </Typography>
                        <List>
                            <ListItem>
                                Website development
                            </ListItem>
                            <ListItem>
                                Database development
                            </ListItem>
                            <ListItem>
                                Python development
                            </ListItem>
                            <ListItem>
                                Website parsing, automatization, data filling
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item>
                        imagenes
                    </Grid>
                </Grid>
                <Typography variant='caption' color={'#E9E9E9'}>
                    {`<Advantages/>`}
                </Typography>
                <Grid container>
                    <Grid item>
                        listado
                    </Grid>
                    <Grid item>
                        imagenes
                    </Grid>
                    <Grid item>
                        imagenes
                    </Grid>
                </Grid>
                <Typography variant='caption' color={'#E9E9E9'}>
                    {`<Advantages/>`}
                </Typography>
            </Box>
        </HomeLayout>
    )
}

export default Skills