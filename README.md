# StrataCSS Sample (PostCSS)

StrataCSSの概念実証サンプル（PostCSS / postcss-import 版）です。

`@layer` を前提にした **ディレクトリとレイヤーの構成**を、PostCSS（`@import "..." layer()`）で実装しています。

* デモページ： [https://web-qraft.github.io/stratacss-postcss/](https://web-qraft.github.io/stratacss-postcss/)
* Sass版： [https://github.com/web-qraft/stratacss-sass](https://github.com/web-qraft/stratacss-sass)
* ドキュメント： [https://stratacss.com/](https://stratacss.com/)


## 特徴

- 最大として定義したレイヤー構成を `@layer` で宣言
- 各サブディレクトリは個別ファイルを `index.css` から `@import` で接続し、`global.css` の `@import "..." layer()` で目的のレイヤーに所属させる
- 外部CSSを各レイヤーに所属させる実例
  - Generic: npm の **kiso.css**
  - Library: **animate.css** を必要分だけ取り込み（上位レイヤーから上書き可能）
- Resources 層で **Inter 可変フォント**をセルフホスト（`@font-face`）
- Tokens 層でネイティブCSSの `color-mix()` によりカラーを算出する実例（Sass 版の Settings 算出に対応）


## セットアップ

```bash
npm install
npm run dev        # 開発用（ビルド + ウォッチ + ローカルサーバー起動）
npm run build      # ビルド用
```

ビルド結果は `dist/` に出力されます（動作確認用に dist もコミット済み）。


## 確認方法

`npm run dev` を実行すると browser-sync のローカルサーバーが起動し、変更が自動反映されます。  
HTMLと静的アセットは簡易的にファイルコピーしているので、タイミングがずれる可能性があります。

`dist/index.html` を直接ブラウザで開いても確認できます。  
DevTools の Styles → Layers パネルで `@layer` の順序を確認してください。

### CSS上書きサンプル

- `.c-linkbtn`（Components 層）に `.u-fill-accent`（Utilities 層）を付けると、詳細度が同じでも **utilities が優先される**（レイヤー順による上書き）
- `--animate-duration` は library（animate.css）の既定値 1s を、tokens 層から 0.6s に上書き（**上位レイヤーが下位を上書きできる**）


## ディレクトリ構造

```
src/
├─ html/              → dist/（コピー）
│  ├─ index.html
│  └─ about/index.html
├─ assets/            → dist/assets/（コピー）
│  ├─ fonts/
│  └─ images/
└─ styles/            → dist/assets/css/（PostCSS コンパイル）
   ├─ global.css      # @layer 宣言 + 各レイヤーの取り込み（エントリ）
   ├─ global/         # Globalスコープ用のCSS
   │  ├─ base/
   │  ├─ layout/
   │  ├─ components/
   │  ├─ utilities/
   │  └─ print/
   └─ pages/          # Pagesスコープ用のCSS（各ファイルがエントリ）
      ├─ home.css
      └─ about.css
```


## License

MIT
