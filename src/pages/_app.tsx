import { VFC } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
