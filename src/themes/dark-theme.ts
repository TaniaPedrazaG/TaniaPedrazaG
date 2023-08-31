import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#212121'
        },
        secondary: {
            main: '#F8F8F8'
        },
        info: {
            main: '#9E9E9E'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'fixed',
                color: 'secondary',
            },
            styleOverrides: {
                root: {
                    background: '#212121',
                    height: 60
                },
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: ['SpaceMono-Regular', 'monospace'],
                },
                h1: {
                    fontSize: 30,
                    fontWeight: 400,
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400
                },
                body1: {
                    fontSize: 15,
                    fontWeight: 400
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                },
                caption: {
                    fontSize: 12,
                    color: '#9E9E9E'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'large',
                disableElevation: true,
                color: 'secondary',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: 1,
                    color: '#F8F8F8',
                    border: '1px solid #F8F8F8',
                    backgroundColor: 'transparent',
                    fontWeight: '600',
                    fontSize: 16,
                    ':hover': {
                        backgroundColor: '#F8F8F8',
                        color: '#212121',
                        border: '1px solid #212121',
                        transition: 'all .7s ease'
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    backgroundImage: 'linear-gradient(rgba(33, 33, 33, 1), rgba(33, 33, 33, 1));'
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    margin: 0,
                    padding: 0
                }
            }
        },
    }
});
