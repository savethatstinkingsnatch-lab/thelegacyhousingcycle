import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTitle, r as Shell, t as Callout } from "./shell-DV_HPsti.mjs";
import { t as money } from "./format-BVQsaY8W.mjs";
import { l as staffAnnual, n as DEFAULT_HOME, o as projectHome, r as DEFAULT_PORTFOLIO, s as projectPortfolio } from "./model-D2KbIBJW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CaNDnquQ.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		n: "01",
		title: "Protect",
		text: "An older owner stays home for life, with taxes and the unsafe conditions handled."
	},
	{
		n: "02",
		title: "Restore",
		text: "Licensed local trades are paid to make the house code-worthy while the owner lives there."
	},
	{
		n: "03",
		title: "Support",
		text: "Promised help is delivered, audited, and capped in writing. Public benefits are used first."
	},
	{
		n: "04",
		title: "Renew",
		text: "After death, belongings follow the owner's wishes. The restored house is sold below a windfall price."
	},
	{
		n: "05",
		title: "Reinvest",
		text: "What the sale returns funds the next house. What it cannot return is raised honestly as subsidy."
	}
];
function Brief() {
	const home = projectHome(DEFAULT_HOME);
	const book = projectPortfolio(DEFAULT_HOME, DEFAULT_PORTFOLIO);
	const staff = staffAnnual(DEFAULT_PORTFOLIO);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Will County pilot · feasibility",
			title: "Keep the elder. Restore the house. Pay the worker. House the next family.",
			lede: "The Legacy Housing Cycle is a proposed social enterprise: voluntary help for older homeowners who are at risk of losing, or living unsafely in, a house they already paid for — and a restored, attainable house for a later family. This briefing says where that idea holds, and where it loses money."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			tone: "subsidy",
			title: "The default illustration is not self-funding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"A Joliet-area house restored to about ",
				money(DEFAULT_HOME.postRehabValue),
				", with moderate repairs and $600 a month of living support, loses about ",
				money(Math.abs(home.base.nominalNet)),
				" in nominal dollars over a blended life expectancy of ",
				home.baseYears,
				" years, and about ",
				money(Math.abs(home.base.npv)),
				" in present value. A staffed pilot of ",
				book.homes,
				" such houses needs on the order of ",
				money(book.recommendedCapital),
				" in opening capital so the reserve never runs dry. Most of that is people and time, not lumber."
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Mission"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "measure mt-3 text-ink-soft",
				children: "Save the older homeowner from a tax sale or an unsafe house. Employ American trades at real wages. Leave the next family a code-compliant house priced to be lived in for another half century, not flipped for the maximum. Repeat only when the books can carry the promise."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-10 divide-y divide-line border-y border-line",
			children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-2 py-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nums font-serif text-xl text-copper",
					children: step.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl",
					children: step.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-ink-soft",
					children: step.text
				})] })]
			}, step.n))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted",
							children: "Per house, default case"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "nums mt-2 font-serif text-3xl text-loss",
							children: money(home.base.nominalNet)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: [
								"Nominal result after an attainable resale. Cash tied up until then: ",
								money(Math.abs(home.base.cashTrough)),
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted",
							children: [
								"Pilot reserve, ",
								book.homes,
								" homes"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "nums mt-2 font-serif text-3xl",
							children: money(book.recommendedCapital)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: [
								"Opening capital that keeps one year of staff and carrying costs (",
								money(book.reserveFloor),
								") above zero. Central staff alone starts near ",
								money(staff),
								" a year."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted",
							children: "What scale does not fix"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif text-3xl",
							children: "Losses add"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: "Identical losing houses do not become a surplus when you own more of them. Growth is allowed only after the single-house test clears or a grant is named for the gap."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Who this is for"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg",
								children: "Homeowners and families"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: "What would be promised, what would be given up, and which easier remedies come first."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/safeguards",
								className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-pine",
								children: "Open safeguards"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg",
								children: "Trades and apprentices"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: "Paid work, licenses, and a path into the Education Revolution — not unpaid labor."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/learn",
								className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-pine",
								children: "Open education"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg",
								children: "Funders and officials"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: "A Will County pilot with a capital number, a loss map, and an oversight design."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/capital",
								className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-pine",
								children: "Open capital"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg",
								children: "The operating desk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: "A sample book of files, work orders, and duties. Composite, not real people."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/work",
								className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-pine",
								children: "Open operations"
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-10 text-sm text-muted",
			children: [
				"Read the full argument in the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blueprint",
					className: "font-semibold text-pine",
					children: "blueprint"
				}),
				", or change the assumptions in ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/model",
					className: "font-semibold text-pine",
					children: "underwriting"
				}),
				". The numbers on this page are the default Joliet-area case, age ",
				DEFAULT_HOME.age,
				", blended Social Security life expectancy."
			]
		})
	] });
}
//#endregion
export { Brief as component };
