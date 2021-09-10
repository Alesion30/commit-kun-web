import { VFC } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "~/providers/auth";
import { LoadingProvider } from "~/providers/loading";
import { BasicProvider } from "~/providers/basic";
import { MissionProvider } from "~/providers/mission";
import { ActivityProvider } from "~/providers/activity";
import "~/assets/style/bg-color.scss";
import "~/assets/style/loading.scss";

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <BasicProvider>
          <MissionProvider>
            <ActivityProvider>
              <Component {...pageProps} />
            </ActivityProvider>
          </MissionProvider>
        </BasicProvider>
      </LoadingProvider>
    </AuthProvider>
  );
};

export default MyApp;
