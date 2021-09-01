import { VFC } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "~/providers/auth";
import { LoadingProvider } from "~/providers/loading";

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
    </AuthProvider>
  );
};

export default MyApp;
