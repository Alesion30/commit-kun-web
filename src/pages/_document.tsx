import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import appConfig from "~/config/app";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={appConfig.description} />
          <meta name="theme-color" content={appConfig.themeColor} />
          <link rel="manifest" href="/manifest.json" />

          {/* OGP */}
          <meta property="og:type" content={appConfig.type} />
          <meta property="og:url" content={appConfig.url} />
          <meta property="og:site_name" content={appConfig.siteName} />

          {/* 検索結果に表示されないようにする */}
          <meta name="robots" content="noindex" />

          {/* Fonts */}
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
            integrity="sha256-UzFD2WYH2U1dQpKDjjZK72VtPeWP50NoJjd26rnAdUI="
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
