import "/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'
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
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#FF0075" />
      <meta name="description" content="Clothing Brand" />
      <meta name="keywords" content="Clothing, Brand, Fashion, Style" />
      <meta name="author" content="Clothing Brand" />
      <link rel="apple-touch-icon" href="/icons/logo.png" />
      
      <link rel="icon" href="/icons/favicon.jpg" className="bg-white"/>
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
  </>

}