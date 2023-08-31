import { useRouter } from 'next/router';
import { useContext } from 'react';
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { UiContext } from '@/contexts/ui';
import { GitHub, LinkedIn, WhatsApp} from '@mui/icons-material';
import styles from './SideMenu.module.css'

export const SideMenu = () => {
    const { isMenuOpen, toogleSideMenu } = useContext(UiContext);
    const router = useRouter();

    const navigateTo = ( url: string ) => {
        toogleSideMenu();
        router.push(url)
    }

    return (
        <Drawer
            open={isMenuOpen}
            anchor='left'
            sx={{
                margin: '60px 0px',
                backdropFilter: 'blur(4px)',
                transition: 'all 0.5s ease-out',
                height: 'calc(100vh - 124px)',
            }}
            onClose={toogleSideMenu}
        >
            <Box sx={{ width: '100vw' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        height: 'calc(100vh - 124px)',
                    }}
                >
                    <List
                        sx={{
                            maxWidth: 250
                        }}
                    >
                        <ListItem
                            className={styles['menu-option']}
                            onClick={() => navigateTo('/')}
                            sx={{ mb: 2 }}
                        >
                            <ListItemText
                                primary={'HOME'}
                                sx={{ textAlign: 'center' }}
                                primaryTypographyProps={{ fontSize: 30 }}
                            />
                        </ListItem>
                        <ListItem
                            className={styles['menu-option']}
                            onClick={() => navigateTo('/skills')}
                            sx={{ mb: 2 }}
                        >
                            <ListItemText
                                primary={'SKILLS'}
                                sx={{ textAlign: 'center' }}
                                primaryTypographyProps={{ fontSize: 30 }}
                            />
                        </ListItem>
                        <ListItem
                            className={styles['menu-option']}
                            onClick={() => navigateTo('/projects')}
                            sx={{ mb: 2 }}
                        >
                            <ListItemText
                                primary={'PROJECTS'}
                                sx={{ textAlign: 'center' }}
                                primaryTypographyProps={{ fontSize: 30 }}
                            />
                        </ListItem>
                        <ListItem
                            className={styles['menu-option']}
                            onClick={() => navigateTo('/contact')}
                            sx={{ mb: 2 }}
                        >
                            <ListItemText
                                primary={'CONTACT'}
                                sx={{ textAlign: 'center' }}
                                primaryTypographyProps={{ fontSize: 30 }}
                            />
                        </ListItem>
                        <Box
                            sx={{
                                display: {xs: 'flex', sm: 'none'},
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly'
                            }}
                        >
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
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
};