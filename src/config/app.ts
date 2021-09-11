type App = {
  title: string;
  description: string;
  url: string;
  siteName: string;
  image: string;
  type: string;
  themeColor: string;
};

const appConfig: App = {
  title: "積み重ねが楽しくなる | コミットくん",
  description:
    "コミットくんは、Visual Studio Code・GitHubと連携して、さまざまな指標（コードを書いている時間・コミット数 etc..）から経験値を算出し、自身のプログラマーとしてのがんばりをレベルとして可視化してくれるサービスです。本サービスでは、GitHubアカウントが必要になります。",
  url: "https://commit-kun-web.vercel.app",
  siteName: "コミットくん",
  image: "",
  type: "website",
  themeColor: "#008CD6",
};

export default appConfig;
