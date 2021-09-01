# こみっとくん

## 環境構築
```bash
git clone https://github.com/Alesion30/commit-kun-web.git
cd commit-kun-web
cp .env.example .env
```

.envの中身は、firebaseのコンソールにアクセスし、`設定 -> プロジェクトを設定 -> マイアプリ -> commit-kun-web`を参照してください。

```bash
yarn install
yarn dev
```

http://localhost:3000 にアクセスする。


## プロジェクト構成

- `src`
  - `components` コンポーネント・テンプレート
  - `config` 変数・定数
  - `hocs` High-Orderコンポーネント
  - `hooks` カスタムフック
  - `pages` ページ
  - `plugins` プラグイン
  - `providers` コンテキストとプロバイダー
  - `utils` 便利関数

- `.env` 環境変数

- `.eslintrc.json` ESLintの設定

- `.huskyrc.json` huskyの設定

- `.lintstagedrc.json` lint-stagedの設定

- `next.config.js` NextJSの設定

- `tailwind.config.js` TailwindCSSの設定

- `tsconfig.json` TypeScriptの設定

