import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTitle, r as Shell } from "./shell-DV_HPsti.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cycle-Bdf9Rr3p.js
var import_jsx_runtime = require_jsx_runtime();
var PHASES = [
	{
		name: "Rescue",
		intent: "Find people who ask for help, and exhaust the cheaper public remedies before offering a property deal.",
		does: [
			"Take inquiries only from the homeowner or someone they invite. No door-knocking lists of delinquent seniors.",
			"Screen the senior homestead exemption, the assessment freeze, the Senior Citizens Real Estate Tax Deferral Act, IHDA home repair if eligible, the Community Care Program, LIHEAP, and weatherization.",
			"If a tax certificate is already sold, get a written redemption figure from the Will County Clerk and pay it only inside a signed agreement — certified funds, in full, before the deadline.",
			"Order a real inspection. Lead and asbestos on pre-1978 houses are priced before anyone promises a finished scope."
		],
		keeps: "The owner keeps title during this phase. Nothing is recorded yet."
	},
	{
		name: "Protect",
		intent: "Trade a clearly priced set of promises for a remainder interest, with the owner holding a life estate — a property right, not a lease the organization can cancel.",
		does: [
			"Independent counsel, paid by the organization, whose only client is the homeowner. A certificate that advice was given, and a minimum 14-day wait after that meeting.",
			"A side-by-side in dollars: actuarial value of taxes, repairs, and services versus the value of the remainder. If the remainder is worth more, half of any expected surplus is written back to the estate or a person the owner names.",
			"Spouse or civil-union partner joins. A power of attorney does not create this deal. A guardian needs a court order; the pilot does not seek one.",
			"The deed is a retained life estate and a remainder. Personal property, accounts, and heirlooms are excluded in capital letters.",
			"Occupancy survives the organization's bankruptcy because the life estate is the owner's. Services do not. Services sit in a reserve with a named successor (Area Agency on Aging or another charity) if the organization fails."
		],
		keeps: "The owner keeps possession for life, the contents, and the right to enforce the service covenant."
	},
	{
		name: "Restore",
		intent: "Bring the house to a safe, code-compliant condition while the owner is living in it, using paid local trades.",
		does: [
			"Licensed and insured contractors where the trade requires it. Written scopes. The Illinois Home Repair and Remodeling Act applies.",
			"Priority order: roof and water, heat, electrical hazards, plumbing, means of egress, then accessibility, then efficiency.",
			"Apprentices are employees or registered apprentices earning a wage. They are not the savings strategy.",
			"Change orders above a set dollar amount go back to the homeowner advocate and the construction coordinator. The owner is not surprised by a gutted kitchen."
		],
		keeps: "The owner approves the living-in-place plan: which rooms, what hours, where they stay if a system must be shut off."
	},
	{
		name: "Support",
		intent: "Do the ongoing things the contract names, and stop there. Do not become an unlicensed care facility.",
		does: [
			"Pay the taxes on time. Keep insurance. A maintenance visit on a schedule the owner can see.",
			"If living support is in the contract — groceries, rides, housework — it has a dollar cap, an inflation index, and a way to add a year of help from the reserve rather than an open promise.",
			"Clinical care, medication, and overnight care stay with the Community Care Program, Medicare, Medicaid waiver services, or family. The organization coordinates; it does not quietly replace them in exchange for the house.",
			"Missed duties are visible on the operations desk and reportable to an ombudsman who does not run construction."
		],
		keeps: "The owner can complain to Adult Protective Services and to the ombudsman without losing the life estate."
	},
	{
		name: "Renew and reinvest",
		intent: "After death, follow the owner's instructions about belongings, finish only what the next family needs, and sell below a maximized price.",
		does: [
			"No lockout of family during a reasonable retrieval period named in the agreement.",
			"Final inspections, remaining life-safety items, then a sale. Default illustration prices the house 8 percent under the then-appraised market and subtracts ordinary selling costs.",
			"Recoveries pay reserves, subordinated program-related debt, and the next enrollment. They do not pay dividends.",
			"If the sale beats the underwriting, the estate reconciliation in the original agreement is paid before the cycle keeps the rest."
		],
		keeps: "Heirs keep everything the agreement said they keep. The next family gets a house with known systems, not a project priced as a bargain and full of surprises."
	}
];
function CyclePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		kicker: "Operating model",
		title: "Five phases, one rule: occupancy is a property right.",
		lede: "The cycle only works if the older person cannot be removed when the budget gets tight. Services can fail if the organization fails. The right to stay cannot. That is why the design is a life estate, not a sale-leaseback and not a license."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-8",
		children: PHASES.map((phase, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "border border-line bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-line px-4 py-4 md:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "nums text-xs font-semibold uppercase tracking-widest text-copper",
						children: ["Phase ", index + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-serif text-2xl",
						children: phase.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-3xl text-ink-soft",
						children: phase.intent
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-4 md:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted",
						children: "The organization does"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-3 text-sm text-ink-soft",
						children: phase.does.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-pine pl-3",
							children: item
						}, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line px-4 py-4 md:border-l md:border-t-0 md:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted",
						children: "What is not taken"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-ink-soft",
						children: phase.keeps
					})]
				})]
			})]
		}, phase.name))
	})] });
}
//#endregion
export { CyclePage as component };
