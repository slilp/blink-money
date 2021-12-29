import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { NavBar, Footer } from "../component/template";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
