//#region node_modules/.nitro/vite/services/ssr/assets/format-BVQsaY8W.js
function money(n, digits = 0) {
	if (!Number.isFinite(n)) return "—";
	return (n < 0 ? "−" : "") + Math.abs(n).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	});
}
function pct(n, digits = 1) {
	if (!Number.isFinite(n)) return "—";
	return `${(n * 100).toFixed(digits)}%`;
}
function num(n, digits = 0) {
	if (!Number.isFinite(n)) return "—";
	return n.toLocaleString("en-US", {
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	});
}
//#endregion
export { num as n, pct as r, money as t };
