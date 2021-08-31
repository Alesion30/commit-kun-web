interface App {
  title: string;
  description: string;
  url: string;
  siteName: string;
  image: string;
  type: string;
  themeColor: string;
}

const appConfig: App = {
  title: "コミットくん",
  description: "hackU用アプリ",
  url: "https://commit-kun-web.vercel.app",
  siteName: "コミットくん",
  image: "",
  type: "website",
  themeColor: "#008CD6",
};

export default appConfig;
