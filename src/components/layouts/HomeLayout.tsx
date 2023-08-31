import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Box } from '@mui/material'
import { Footer, Navbar, SideMenu } from '../ui';

interface Props extends PropsWithChildren {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const HomeLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={pageDescription} />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={pageDescription} />
                {imageFullUrl && (
                    <meta name='og:image' content={imageFullUrl} />
                )}
            </Head>
            <nav>
                <Navbar/>
            </nav>
            <SideMenu/>
            <main
                style={{
                    margin: '64px 0px',
                    height: 'calc(100vh - 188px)',
                }}
            >
                {children}
            </main>
            <footer
                style={{
                    padding: '10px 20px'
                }}
            >
                <Footer/>
            </footer>
        </Box>
    )
}