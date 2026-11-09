import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTitle, r as Shell } from "./shell-DV_HPsti.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-DvNmM1bn.js
var import_jsx_runtime = require_jsx_runtime();
var LADDER = [
	{
		step: "Helper, paid",
		text: "Site safety, tools, and showing up. A wage from the first day. This is the on-ramp the Education Revolution cares about: a person who was not going to a four-year program still gets a paycheck and a foreman who will explain the work."
	},
	{
		step: "Registered apprentice",
		text: "Indentured through a program recognized by the U.S. Department of Labor and the State of Illinois, not a homemade certificate. Classroom time at a partner such as Joliet Junior College. Hours count. The Workforce Investment Board of Will County is the public table where this gets scheduled, not an afterthought."
	},
	{
		step: "Journeyman on our houses",
		text: "The pilot’s houses are a steady book of small, real scopes: roofs, panels, water heaters, baths. That is better training than one showcase renovation. Insurance and licenses stay with the employing firm. We do not invent a license by calling someone a fellow."
	},
	{
		step: "Their own firm",
		text: "The point of the Education Revolution link is ownership, not a permanent labor pool for the charity. A journeyman who wants a company gets introduced to bonding, estimating, and a CDFI or bank that already lends to small contractors. The charity is a customer, not the owner of their future."
	}
];
var CURRICULUM = [
	["The bill", "How a Will County tax bill is built, what the homestead and senior freeze actually do, and what deferral costs the estate later."],
	["The systems", "What a 20-year roof, a panel, a furnace, and a water heater should cost to replace, and the month you start saving for each."],
	["Who to call", "Licensed trades versus handyman work. Permits. The Home Repair and Remodeling Act. Why the cheapest bid on a sewer line is often the second bill."],
	["Insurance and water", "What a policy does not cover. Why a slow leak is a six-month problem and a storm is a weekend problem."],
	["The next owner’s budget", "A one-page reserve: taxes, insurance, and one percent of value a year toward systems. The house the cycle sells should arrive with this page, not only with new paint."],
	["When to ask for help early", "The redemption clock, the freeze deadline, and the Community Care Program. Asking in March is a different life than asking in November."]
];
function LearnPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Education Revolution",
			title: "The house is also a school, and the students are paid.",
			lede: "Housing, employment, and education fail separately when each one is someone else’s grant. On these houses they are the same book of work: an older person kept safe, a crew paid, an apprentice’s hours logged, and a later buyer who is taught how not to hand the house back to the cycle in twenty years."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-4",
			children: LADDER.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-3 border border-line bg-surface p-4 md:grid-cols-[8rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "nums text-sm font-semibold uppercase tracking-widest text-copper",
					children: ["0", index + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-xl",
					children: item.step
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-ink-soft",
					children: item.text
				})] })]
			}, item.step))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "What the next family is taught before closing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-3xl text-ink-soft",
					children: "A restored house sold “affordably” into the same ignorance recreates the problem. Resale is paired with counseling — a HUD-approved agency if one will take the partnership — and a short course the organization can run itself if no one will. It is practical, local, and required, not a pamphlet in a folder."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: CURRICULUM.map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-1 py-4 md:grid-cols-[12rem_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-ink-soft",
							children: text
						})]
					}, title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 max-w-3xl space-y-3 text-ink-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "What is not claimed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Joliet Junior College, the Workforce Investment Board of Will County, trade unions, and AgeGuide are named because they are the competent local institutions. None of them has agreed to this project. The first educational act of the pilot is to ask them, with a funded wage line in the budget, not with a request that they donate instructors." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unpaid service hours do not count as training. If the books cannot pay the apprentice, the organization does not enroll the house that needed that apprentice to make the rehab “pencil.”" })
			]
		})
	] });
}
//#endregion
export { LearnPage as component };
