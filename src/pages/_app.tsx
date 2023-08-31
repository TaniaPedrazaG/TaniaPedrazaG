import type { AppProps } from 'next/app';
import { darkTheme } from '@/themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '../styles/globals.css';
import { UiProvider } from '@/contexts/ui';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UiProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </UiProvider>
    )
}

export default MyApp