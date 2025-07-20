import Preloader from "@/src/components/Preloader";
import Head from "next/head";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Webia Solutionz – Modern Digital Agency Website</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      {loader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
}
