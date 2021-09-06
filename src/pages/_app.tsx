import { VFC } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "~/providers/auth";
import { LoadingProvider } from "~/providers/loading";
import { MissionProvider } from "~/providers/mission";

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <MissionProvider>
          <Component {...pageProps} />
        </MissionProvider>
      </LoadingProvider>
    </AuthProvider>
  );
};

export default MyApp;
