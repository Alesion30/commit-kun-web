const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

// 本番環境
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/style")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // 本番環境のみ、consoleを非表示
    config.optimization.minimize = isProduction;
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: isProduction,
          },
        },
        extractComments: "all",
      }),
    ];

    return config;
  },
};
