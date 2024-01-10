import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Setasena Randata Ramadanie</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/android-chrome-512x512.png" />
        <meta name="description" content="Currently Backend Engineer at Traveloka. Still an undergraduate student of computer science at University of Indonesia." />
        <meta name="author" content="Setasena Randata Ramadanie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="setasena, sena, setasena randata ramadanie, setasenarr, setasena93" />
      </Head>
      <body>
        <Component {...pageProps} />
        <Analytics />
      </body>
    </>
  )
};

export default api.withTRPC(MyApp);
