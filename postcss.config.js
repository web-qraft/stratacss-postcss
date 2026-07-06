// postcss-import が @import を解決し、読み込んだファイルをインライン展開する。
// パッケージ名のみの指定（例: "kiso.css/kiso.css"）は node_modules から解決される。
module.exports = {
	plugins: [
		require("postcss-import")(),
	],
};
