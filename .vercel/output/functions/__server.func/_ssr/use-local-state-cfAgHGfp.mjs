import { i as __toESM } from "../_runtime.mjs";
import { J as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-local-state-cfAgHGfp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/** localStorage after mount so server and first client render match. */
function useLocalState(key, initial) {
	const [value, setValue] = (0, import_react.useState)(initial);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(key);
			if (raw) setValue(JSON.parse(raw));
		} catch {}
		setReady(true);
	}, [key]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch {}
	}, [
		key,
		value,
		ready
	]);
	return [
		value,
		setValue,
		ready
	];
}
//#endregion
export { useLocalState as t };
