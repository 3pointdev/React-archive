import "../styles/globals.css";
import "../styles/template.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import reducer from "../Store";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script";

const store = createStore(reducer);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/brands/favicons_white.png" />
        <title>Petly</title>
      </Head>

      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
