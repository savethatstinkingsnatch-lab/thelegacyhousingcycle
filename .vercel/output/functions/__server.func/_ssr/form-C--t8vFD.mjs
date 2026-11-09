import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as money } from "./format-BVQsaY8W.mjs";
import { n as DEFAULT_HOME } from "./model-D2KbIBJW.mjs";
import { a as Line, c as Cell, i as XAxis, l as ResponsiveContainer, n as LineChart, o as CartesianGrid, r as YAxis, s as Bar, t as BarChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/form-C--t8vFD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function moneyTick(v) {
	const abs = Math.abs(v);
	const sign = v < 0 ? "−" : "";
	if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(1)}m`;
	return `${sign}$${Math.round(abs / 1e3)}k`;
}
function yDomain(min, max) {
	return [min < 0 ? min * 1.12 : Math.min(0, min), max > 0 ? max * 1.18 : 0];
}
var tipStyle = {
	background: "var(--color-surface)",
	border: "1px solid var(--color-line)",
	color: "var(--color-ink)"
};
function CashChart({ rows }) {
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setOn(true), []);
	if (!on) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 border border-line bg-surface",
		"aria-hidden": true
	});
	const nets = rows.map((row) => row.net);
	const domain = yDomain(Math.min(...nets, 0), Math.max(...nets, 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 w-full min-w-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: rows,
				margin: {
					top: 12,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "var(--color-line)",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "year",
						tick: {
							fill: "var(--color-muted)",
							fontSize: 12
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						width: 56,
						domain,
						tickFormatter: moneyTick,
						tick: {
							fill: "var(--color-muted)",
							fontSize: 12
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						formatter: (value) => money(Number(value)),
						labelFormatter: (year) => Number(year) === 0 ? "Closing" : `Year ${year}`,
						contentStyle: tipStyle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "net",
						name: "Net cash",
						children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: row.net < 0 ? "var(--color-loss)" : "var(--color-pine)" }, row.year))
					})
				]
			})
		})
	});
}
function BalanceChart({ rows }) {
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setOn(true), []);
	if (!on) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 border border-line bg-surface",
		"aria-hidden": true
	});
	const values = rows.map((row) => row.cash);
	const domain = yDomain(Math.min(...values, 0), Math.max(...values, 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 w-full min-w-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: rows,
				margin: {
					top: 12,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "var(--color-line)",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "year",
						tick: {
							fill: "var(--color-muted)",
							fontSize: 12
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						width: 56,
						domain,
						tickFormatter: moneyTick,
						tick: {
							fill: "var(--color-muted)",
							fontSize: 12
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						formatter: (value) => money(Number(value)),
						labelFormatter: (year) => `Year ${year}`,
						contentStyle: tipStyle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "cash",
						name: "Cash",
						stroke: "var(--color-pine)",
						strokeWidth: 2,
						dot: false
					})
				]
			})
		})
	});
}
function Field({ label, hint, value, onChange, suffix }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium text-ink",
				children: label
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-xs leading-snug text-muted",
				children: hint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-1 flex min-h-11 items-center border border-line bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "nums w-full min-w-0 bg-transparent px-3 py-2.5 text-ink outline-none",
					inputMode: "decimal",
					value: Number.isFinite(value) ? String(value) : "0",
					onChange: (e) => {
						const raw = e.target.value.replace(/[^0-9.-]/g, "");
						if (raw === "" || raw === "-" || raw === ".") {
							onChange(0);
							return;
						}
						const n = Number(raw);
						onChange(Number.isFinite(n) ? n : 0);
					}
				}), suffix ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 pr-3 text-sm text-muted",
					children: suffix
				}) : null]
			})
		]
	});
}
var INITIAL_FORM = {
	age: DEFAULT_HOME.age,
	asIsValue: DEFAULT_HOME.asIsValue,
	postRehabValue: DEFAULT_HOME.postRehabValue,
	taxArrears: DEFAULT_HOME.taxArrears,
	annualTax: DEFAULT_HOME.annualTax,
	initialRehab: DEFAULT_HOME.initialRehab,
	accessibility: DEFAULT_HOME.accessibility,
	legalCost: DEFAULT_HOME.legalCost,
	annualServices: DEFAULT_HOME.annualServices,
	annualMaintenance: DEFAULT_HOME.annualMaintenance,
	annualInsurance: DEFAULT_HOME.annualInsurance,
	annualAdmin: DEFAULT_HOME.annualAdmin,
	midlifeCapex: DEFAULT_HOME.midlifeCapex,
	costInflationPct: DEFAULT_HOME.costInflation * 100,
	appreciationPct: DEFAULT_HOME.appreciation * 100,
	affordableDiscountPct: DEFAULT_HOME.affordableDiscount * 100,
	sellingCostPct: DEFAULT_HOME.sellingCost * 100,
	discountRatePct: DEFAULT_HOME.discountRate * 100,
	deferralRatePct: DEFAULT_HOME.deferralRate * 100,
	primaryNeed: DEFAULT_HOME.primaryNeed,
	holdingOverride: 0
};
function normalizeForm(partial) {
	return {
		...INITIAL_FORM,
		...partial ?? {}
	};
}
function toInputs(form) {
	return {
		age: form.age,
		asIsValue: form.asIsValue,
		postRehabValue: form.postRehabValue,
		taxArrears: form.taxArrears,
		annualTax: form.annualTax,
		initialRehab: form.initialRehab,
		accessibility: form.accessibility,
		legalCost: form.legalCost,
		annualServices: form.annualServices,
		annualMaintenance: form.annualMaintenance,
		annualInsurance: form.annualInsurance,
		annualAdmin: form.annualAdmin,
		midlifeCapex: form.midlifeCapex,
		costInflation: form.costInflationPct / 100,
		appreciation: form.appreciationPct / 100,
		affordableDiscount: form.affordableDiscountPct / 100,
		sellingCost: form.sellingCostPct / 100,
		discountRate: form.discountRatePct / 100,
		deferralRate: form.deferralRatePct / 100,
		primaryNeed: form.primaryNeed,
		holdingOverride: form.holdingOverride > 0 ? form.holdingOverride : null
	};
}
var PRESETS = [
	{
		id: "full",
		label: "Full promise",
		detail: "Taxes, moderate rehab, and $600 a month of living support.",
		form: INITIAL_FORM
	},
	{
		id: "shelter",
		label: "Shelter only",
		detail: "Taxes, repairs, maintenance, insurance. Care stays with existing public programs.",
		form: {
			...INITIAL_FORM,
			annualServices: 0,
			primaryNeed: "repairs"
		}
	},
	{
		id: "taxes",
		label: "Taxes only",
		detail: "Sound house. Tests whether a transfer is the wrong tool.",
		form: {
			...INITIAL_FORM,
			primaryNeed: "taxes",
			initialRehab: 2500,
			accessibility: 0,
			annualServices: 0,
			annualMaintenance: 1500,
			annualAdmin: 1200
		}
	},
	{
		id: "heavy",
		label: "Heavy distress",
		detail: "Foundation-level rehab against a Joliet-area resale.",
		form: {
			...INITIAL_FORM,
			asIsValue: 14e4,
			postRehabValue: 23e4,
			initialRehab: 14e4,
			taxArrears: 14e3,
			primaryNeed: "repairs"
		}
	},
	{
		id: "older",
		label: "Age 88, narrower help",
		detail: "Shorter expected occupancy and a smaller service stipend.",
		form: {
			...INITIAL_FORM,
			age: 88,
			initialRehab: 4e4,
			annualServices: 3600
		}
	}
];
//#endregion
export { PRESETS as a, INITIAL_FORM as i, CashChart as n, normalizeForm as o, Field as r, toInputs as s, BalanceChart as t };
