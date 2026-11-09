import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTitle, r as Shell } from "./shell-DV_HPsti.mjs";
import { t as useLocalState } from "./use-local-state-cfAgHGfp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pilot-DDaEN9OQ.js
var import_jsx_runtime = require_jsx_runtime();
var FACTS = [
	[
		"Population",
		"712,253",
		"Census Bureau estimate, July 1, 2025."
	],
	[
		"Age 65 and over",
		"16.7%",
		"Census QuickFacts. Applied to that population, on the order of 119,000 people — an estimate, not a count of homeowners."
	],
	[
		"Owner-occupied units",
		"82.8%",
		"Share of housing units, 2020–2024. This is not the senior homeownership rate."
	],
	[
		"Median owner-occupied value",
		"$319,600",
		"Census QuickFacts, 2020–2024. Pulled up by newer suburbs."
	],
	[
		"Owner costs, no mortgage",
		"$971 / month",
		"Median selected monthly owner costs without a mortgage, 2020–2024. Taxes and insurance do not end when the loan does."
	],
	[
		"Effective property tax",
		"About 2.2%",
		"County compilations of Census data put the median bill near $7,173 and the effective rate near 2.24% — more than double the national rate near 0.9%. Confirm the parcel."
	],
	[
		"Joliet market, late 2025",
		"About $256,000",
		"A private compilation of recorded sales (Will County Gazette / BlockShopper), median tax about $5,500. Not an assessor statistic. The model’s $250,000 restored value sits here on purpose."
	]
];
var MARKETS = [
	{
		id: "will",
		name: "Will County",
		note: "Pilot. Older stock in Joliet, Crest Hill, Lockport, University Park, Wilmington, and unincorporated areas — not new subdivision belts."
	},
	{
		id: "kendall",
		name: "Kendall County",
		note: "Adjacent. Do not enter until Will County has a closed audit and counsel memo."
	},
	{
		id: "grundy",
		name: "Grundy County",
		note: "More rural parcels. USDA repair aid may actually apply. Different price levels."
	},
	{
		id: "kankakee",
		name: "Kankakee County",
		note: "Same rule: local tax sale practice and a local elder-law panel before any deed."
	},
	{
		id: "cook",
		name: "Southern Cook County",
		note: "Higher complexity, different assessment system. A later phase, if ever. Not a shortcut."
	}
];
var STATUSES = [
	"Not started",
	"Studying",
	"Counsel review",
	"Not a fit"
];
function PilotPage() {
	const [status, setStatus] = useLocalState("lhc-markets-v1", {
		will: "Studying",
		kendall: "Not started",
		grundy: "Not started",
		kankakee: "Not started",
		cook: "Not started"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Pilot geography",
			title: "Start in Will County, where the tax bill outlives the mortgage.",
			lede: "Illinois sells unpaid property taxes. The owner can still lose the house after a redemption period measured in years, and the penalties for waiting are severe. Will County is a fair first test: high ownership, high taxes, a large older population, and housing stock that actually needs roofs — not a national rollout drawn on a map."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto border border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "data",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Fact" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Figure" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "How to read it" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: FACTS.map(([fact, figure, how]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-medium",
						children: fact
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "nums whitespace-nowrap",
						children: figure
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-sm text-ink-soft",
						children: how
					})
				] }, fact)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 max-w-3xl space-y-4 text-ink-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "How a house is actually lost here"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Will County mails real-estate tax bills in the spring. In the 2025 collection cycle, bills went out around May 1, the first installment was due June 2, and the treasurer’s calendar set the annual tax sale for December 2. Dates move. The rhythm does not: two installments, then publication, then a sale of the unpaid tax to an investor." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The buyer receives a tax certificate, not a deed. The owner redeems through the Will County Clerk, in full, in certified funds — the clerk does not take a partial payment. For certificates issued on or after July 10, 2026, the standard redemption period is three years; certificates issued from January 1, 2024 through July 9, 2026 generally ran 30 months. Vacant non-farm property, commercial property, and buildings with seven or more residential units are shorter. Penalty bids are charged per six-month period, so waiting is much more expensive than the original bill." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"After ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink",
						children: "Tyler v. Hennepin County"
					}),
					" (2023), Illinois changed the end of the process. Public Act 104-0553 points a finished redemption toward a judicial tax-deed auction, with surplus above the tax debt returned to the former owner. That reform matters. It does not keep a person housed, and it does not repair a failed roof."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "Exemptions to use before any deed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A general homestead exemption and an additional senior homestead exemption reduce equalized assessed value, commonly discussed at $8,000 of EAV each. Confirm the current maximum with the Will County Supervisor of Assessments; the statute is amended more often than brochures are." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The Low-Income Senior Citizens Assessment Freeze (35 ILCS 200/15-172), as amended by Public Act 104-0452 (signed December 12, 2025), phases the household income limit from $65,000 (tax year 2025, payable 2026, using 2024 income) to $75,000, $77,000, and then $79,000. The freeze holds the assessed value. It does not pay a bill that is already delinquent." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The Senior Citizens Real Estate Tax Deferral Act (320 ILCS 30/) lets a qualifying owner 65 or older defer taxes, within the money the state revolving fund actually has, and repay later with statutory interest. The income schedule matches the freeze’s step-up. A lien comes back from the estate or a sale. The owner keeps the equity. For a sound house whose only problem is the bill, deferral is the ethical default. The underwriting screen is built to say so." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "Pilot shape"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fifteen houses over three enrollment years. Five years of audited operation before any second county. One homeowner advocate, one construction coordinator, finance and compliance, and an executive who can be fired by the board. No enrollment from a purchased list of delinquent taxpayers. Referrals from township assessors, the clerk’s redemption window, AgeGuide and its providers, pastors, and clinics — and only when the owner asks." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Success for the pilot is not “fifteen deeds.” It is: every enrolled person still housed, every tax bill paid, every promised visit done, zero Adult Protective Services findings of financial exploitation, an independent audit, and a published decision on whether unit economics justified a second cohort." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Expansion board"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-3xl text-sm text-muted",
					children: "Saved only in this browser. Mark a county when someone has actually started the work. “Not a fit” is a successful outcome."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: MARKETS.map((market) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-3 py-4 md:grid-cols-[minmax(0,1fr)_12rem] md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: market.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-soft",
							children: market.note
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "sr-only",
								children: ["Status for ", market.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "min-h-11 w-full border border-line bg-surface px-2",
								value: status[market.id] ?? "Not started",
								onChange: (e) => setStatus({
									...status,
									[market.id]: e.target.value
								}),
								children: STATUSES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
							})]
						})]
					}, market.id))
				})
			]
		})
	] });
}
//#endregion
export { PilotPage as component };
