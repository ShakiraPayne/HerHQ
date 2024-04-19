import "/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import { Analytics } from "@vercel/analytics/react"
import { MyContextProvider } from "/context/createContext";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  const [progress, setProgress] = useState(0)
  const router = useRouter();

  useEffect(()=>{
    router.events.on('routeChangeStart', () => {
      setProgress(75)
    });
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    });
  });

  return <>
    <Toaster />
    <Head>
      <title>Clothing Brand</title>
    </Head>
    <LoadingBar
        height={4}
        color='#FF0075'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
    <SpeedInsights />
    <Analytics />
  </>

}