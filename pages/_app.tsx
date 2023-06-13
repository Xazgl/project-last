
import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../mui/theme';
import createEmotionCache from '../mui/createEmotionCache';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { Provider, } from 'react-redux';
import storeRedux, { setAdmin } from '../src/services/storeRedux';
// import { useDispatch } from 'react-redux';


interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const queryClient = new QueryClient()
const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   async function start() {
  //     const res = await fetch('/api/getSession', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Cache-Control': 'no-cache'
  //       },
  //     })
  //     if (res.ok) {
  //       const answer = await res.json();
  //       dispatch(setAdmin(answer.login));
  //     } else {
  //       dispatch(setAdmin(null));
  //       //   const host = process.env.NODE_ENV === 'production' ? process.env.HOST : 'http://localhost:3000'
  //       //   router.push(`${host}/admin/login`); // Здесь указываем URL страницы, на которую нужно выполнить редирект
  //       // }
  //     }
  //   }
  //   start()
  // }, [])


  return (
    // <Provider store={storeRedux}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    // </Provider>
  );
};



export default MyApp;

