import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTitle, r as Shell } from "./shell-DV_HPsti.mjs";
import { t as money } from "./format-BVQsaY8W.mjs";
import { t as useLocalState } from "./use-local-state-cfAgHGfp.mjs";
import { a as SEED_DUTIES, i as SAMPLE_FUNDS, n as NEXT_DUTY, o as SEED_ORDERS, r as NEXT_STATUS, t as HOMES } from "./desk-C8Jc2p8v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-BHWGxglG.js
var import_jsx_runtime = require_jsx_runtime();
var SEED = {
	orders: SEED_ORDERS,
	duties: SEED_DUTIES
};
function WorkPage() {
	const [saved, setSaved] = useLocalState("lhc-desk-v1", SEED);
	const desk = {
		orders: saved?.orders?.length ? saved.orders : SEED_ORDERS,
		duties: saved?.duties?.length ? saved.duties : SEED_DUTIES
	};
	const setOrder = (id) => {
		setSaved({
			...desk,
			orders: desk.orders.map((order) => order.id === id ? {
				...order,
				status: NEXT_STATUS[order.status]
			} : order)
		});
	};
	const setDuty = (id) => {
		setSaved({
			...desk,
			duties: desk.duties.map((duty) => duty.id === id ? {
				...duty,
				state: NEXT_DUTY[duty.state]
			} : duty)
		});
	};
	const committed = desk.orders.reduce((sum, order) => sum + order.amount, 0);
	const finished = desk.orders.filter((order) => order.status === "complete").reduce((sum, order) => sum + order.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Sample book · not real people",
			title: "Six composite files, so the desk can be argued with.",
			lede: "Names, streets, and medical details are deliberately absent. These are Joliet-area composites for testing workflow: phase, a paid trade, a duty that can be missed. Advance a work order or a duty to see the impact report change. It stays in this browser."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-center justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted",
				children: [
					"Trade commitments ",
					money(committed),
					". Completed ",
					money(finished),
					"."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 border border-line bg-surface px-3",
				onClick: () => setSaved(SEED),
				children: "Reset sample book"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: HOMES.map((home) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border border-line bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-copper",
						children: ["File ", home.id]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-1 font-serif text-xl",
						children: [
							home.place,
							" · ",
							home.built
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium",
						children: home.phase
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: home.story
					})
				]
			}, home.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-serif text-2xl",
			children: "Work orders"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Press the status to advance it. Held means stopped for a reason, not forgotten."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 overflow-x-auto border border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "data",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "File" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Trade" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Contractor" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Scope" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "num",
						children: "Amount"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: desk.orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "nums",
						children: order.homeId
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [order.trade, order.apprentice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs text-pine",
						children: "Paid apprentice on the crew"
					}) : null] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: order.contractor }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-sm",
						children: order.scope
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "num",
						children: money(order.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 border border-line px-2 text-sm",
						onClick: () => setOrder(order.id),
						children: order.status
					}) })
				] }, order.id)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-serif text-2xl",
			children: "Duties owed to people, not to buildings"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 divide-y divide-line border-y border-line",
			children: desk.duties.map((duty) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-wrap items-center justify-between gap-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-medium",
					children: [
						"File ",
						duty.homeId,
						" · ",
						duty.what
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: duty.when
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 border px-3 text-sm font-semibold ${duty.state === "overdue" ? "border-loss bg-loss-bg text-loss" : duty.state === "met" ? "border-pine bg-gain-bg text-pine" : "border-line bg-surface"}`,
					onClick: () => setDuty(duty.id),
					children: duty.state
				})]
			}, duty.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-serif text-2xl",
			children: "Sample funding ledger"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 max-w-3xl text-sm text-muted",
			children: "Invented balances for this desk, so a board can see restricted versus repayable money. They are not a campaign result and they are not the pilot recommendation on the capital page."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 overflow-x-auto border border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "data",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Source" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Character" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "num",
						children: "Amount"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Rule" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: SAMPLE_FUNDS.map((fund) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-medium",
						children: fund.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-sm",
						children: fund.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "num",
						children: money(fund.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-sm text-ink-soft",
						children: fund.note
					})
				] }, fund.name)) })]
			})
		})
	] });
}
//#endregion
export { WorkPage as component };
