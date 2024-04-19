import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Clothing Brand" />
        <meta name="keywords" content="Clothing, Brand, Fashion, Style" />
        <meta name="author" content="Clothing Brand" />
        <link rel="apple-touch-icon" href="/icons/favicon.jpg" />
        <link rel="icon" href="/icons/favicon.jpg" className="bg-white"/>
        <link rel="shortcut icon" href="/icons/logo.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}