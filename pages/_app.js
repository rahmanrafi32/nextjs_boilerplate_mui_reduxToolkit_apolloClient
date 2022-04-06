import * as React from 'react';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../utils/createEmotionCache';
import {Provider} from "react-redux";
import {store} from "../lib/redux/store";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ApolloProvider>
            </Provider>
        </CacheProvider>
    );
};