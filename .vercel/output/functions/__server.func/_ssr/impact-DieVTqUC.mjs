import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTitle, r as Shell } from "./shell-DV_HPsti.mjs";
import { t as money } from "./format-BVQsaY8W.mjs";
import { t as useLocalState } from "./use-local-state-cfAgHGfp.mjs";
import { a as SEED_DUTIES, i as SAMPLE_FUNDS, o as SEED_ORDERS, t as HOMES } from "./desk-C8Jc2p8v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/impact-DieVTqUC.js
var import_jsx_runtime = require_jsx_runtime();
function ImpactPage() {
	const [saved] = useLocalState("lhc-desk-v1", {
		orders: SEED_ORDERS,
		duties: SEED_DUTIES
	});
	const orders = saved?.orders?.length ? saved.orders : SEED_ORDERS;
	const duties = saved?.duties?.length ? saved.duties : SEED_DUTIES;
	const enrolled = HOMES.filter((home) => home.phase === "Enrolled" || home.phase === "Maintaining").length;
	const inCounsel = HOMES.filter((home) => home.phase === "Counsel" || home.phase === "Inquiry").length;
	const completeDollars = orders.filter((order) => order.status === "complete").reduce((sum, order) => sum + order.amount, 0);
	const openDollars = orders.filter((order) => order.status !== "complete").reduce((sum, order) => sum + order.amount, 0);
	const contractors = new Set(orders.map((order) => order.contractor)).size;
	const apprentices = orders.filter((order) => order.apprentice).length;
	const overdue = duties.filter((duty) => duty.state === "overdue").length;
	const met = duties.filter((duty) => duty.state === "met").length;
	const funds = SAMPLE_FUNDS.reduce((sum, fund) => sum + fund.amount, 0);
	const stats = [
		[
			"People housed in the illustration",
			String(enrolled),
			"Enrolled or maintaining. Inquiry and counsel are not counted as saved."
		],
		[
			"Files not yet a deed",
			String(inCounsel),
			"Still able to be referred to deferral, a repair grant, or a decline."
		],
		[
			"Resales completed",
			"0",
			"Correct. Nobody has died in this sample. Do not report future buyers as families helped."
		],
		[
			"Paid trade contracts",
			String(orders.length),
			`${contractors} firms. Dollars completed ${money(completeDollars)}. Still open ${money(openDollars)}.`
		],
		[
			"Crews with a paid apprentice",
			String(apprentices),
			"A headcount of seats, not full-time jobs created. Do not multiply by a fake jobs formula."
		],
		[
			"Duties met / overdue",
			`${met} met · ${overdue} overdue`,
			"Overdue is a failure even when the renovation looks good."
		],
		[
			"Sample ledger",
			money(funds),
			"Illustrative restricted and subordinated funds. Not raised. Not the capital-page recommendation."
		]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Report you could hand a board",
			title: "Count what happened. Do not count the hope.",
			lede: "This report reads the sample operations book on this device. If you advanced a work order or cleared a duty, it is already in the figures. Print it. Label it illustrative if it ever leaves the room."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "no-print mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 bg-pine px-4 font-semibold text-surface",
				onClick: () => window.print(),
				children: "Print this report"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto border border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "data",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Measure" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Figure" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "What it is not" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: stats.map(([measure, figure, note]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-medium",
						children: measure
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "nums whitespace-nowrap font-semibold",
						children: figure
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-sm text-ink-soft",
						children: note
					})
				] }, measure)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 max-w-3xl space-y-3 text-ink-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "How a real annual report should read"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Homes in which an owner slept, taxes paid on time, redemption dollars paid, visits kept and visits missed, complaints opened and closed, Adult Protective Services referrals, dollars to licensed firms in the county, apprentice hours paid, subsidy per house against the underwriting gap, and resales only after a closing. A national map with pins is not a substitute for the missed-visit line." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Economic impact is the contract dollars and the wages, which circulate locally because the firms are local. It is not a multiplier pulled from a brochure. If the board wants a multiplier, an economist can build one later from actual invoices. Until then the invoice total is the number." })
			]
		})
	] });
}
//#endregion
export { ImpactPage as component };
