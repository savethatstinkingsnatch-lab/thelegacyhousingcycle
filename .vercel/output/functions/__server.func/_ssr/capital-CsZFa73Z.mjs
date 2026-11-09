import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTitle, r as Shell, t as Callout } from "./shell-DV_HPsti.mjs";
import { t as money } from "./format-BVQsaY8W.mjs";
import { i as DEFAULT_STAFF, l as staffAnnual, o as projectHome, r as DEFAULT_PORTFOLIO, s as projectPortfolio } from "./model-D2KbIBJW.mjs";
import { i as INITIAL_FORM, o as normalizeForm, r as Field, s as toInputs, t as BalanceChart } from "./form-C--t8vFD.mjs";
import { t as useLocalState } from "./use-local-state-cfAgHGfp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capital-CsZFa73Z.js
var import_jsx_runtime = require_jsx_runtime();
var INITIAL_PORT = {
	homes: DEFAULT_PORTFOLIO.homes,
	enrollYears: DEFAULT_PORTFOLIO.enrollYears,
	benefitsPct: DEFAULT_PORTFOLIO.benefitsLoad * 100,
	overhead: DEFAULT_PORTFOLIO.overhead,
	openingCapital: DEFAULT_PORTFOLIO.openingCapital,
	staff: DEFAULT_STAFF
};
function CapitalPage() {
	const [savedHome] = useLocalState("lhc-form-v1", INITIAL_FORM);
	const homeInputs = toInputs(normalizeForm(savedHome));
	const home = projectHome(homeInputs);
	const [saved, setSaved] = useLocalState("lhc-port-v1", INITIAL_PORT);
	const form = {
		...INITIAL_PORT,
		...saved,
		staff: saved?.staff?.length ? saved.staff : DEFAULT_STAFF
	};
	const set = (patch) => setSaved({
		...form,
		...patch
	});
	const portfolio = {
		homes: form.homes,
		enrollYears: form.enrollYears,
		staff: form.staff,
		benefitsLoad: form.benefitsPct / 100,
		overhead: form.overhead,
		openingCapital: form.openingCapital
	};
	const book = projectPortfolio(homeInputs, portfolio);
	const staff = staffAnnual(portfolio);
	const short = book.minCash < book.reserveFloor;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Portfolio liquidity",
			title: "Staff is the expensive part. The houses do not arrive pre-paid.",
			lede: "Every home is assumed to live exactly the blended life expectancy and then sell. That is conservative on cash: nobody dies early and refills the account. It is not a mortality forecast. The house-level assumptions are whatever you last saved in underwriting."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			tone: short ? "subsidy" : "proceed",
			title: short ? "This opening balance runs through the reserve" : "The reserve holds on this opening balance",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Lowest cash is ",
				money(book.minCash),
				" in year ",
				book.minCashYear,
				". The policy floor — one year of today’s staff plus one year of carrying costs on the full book — is ",
				money(book.reserveFloor),
				". Recommended opening capital is ",
				money(book.recommendedCapital),
				"."
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted",
			children: [
				"Using the saved house: age ",
				home.inputs.age,
				", living support ",
				money(home.inputs.annualServices),
				" a year, rehab",
				" ",
				money(home.inputs.initialRehab),
				", nominal result ",
				money(home.base.nominalNet),
				", present value ",
				money(home.base.npv),
				".",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/model",
					className: "font-semibold text-pine",
					children: "Change the house"
				}),
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "@container mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-8 @3xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Houses in the pilot",
							value: form.homes,
							onChange: (homes) => set({ homes })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Years to enroll them",
							value: form.enrollYears,
							onChange: (enrollYears) => set({ enrollYears })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Opening capital",
							value: form.openingCapital,
							onChange: (openingCapital) => set({ openingCapital }),
							suffix: "$"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 w-full bg-pine px-3 text-sm font-semibold text-surface",
							onClick: () => set({ openingCapital: Math.round(book.recommendedCapital) }),
							children: "Use recommended opening capital"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Benefits and payroll load",
							value: form.benefitsPct,
							onChange: (benefitsPct) => set({ benefitsPct }),
							suffix: "%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Audit, insurance, counsel, occupancy",
							value: form.overhead,
							onChange: (overhead) => set({ overhead }),
							suffix: "$ / yr"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "space-y-3 border border-line bg-surface p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "px-1 font-serif text-lg",
									children: "Salaries, before load"
								}),
								form.staff.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: line.role,
									value: line.pay,
									suffix: "$",
									onChange: (pay) => {
										const staffLines = form.staff.map((item, i) => i === index ? {
											...item,
											pay
										} : item);
										set({ staff: staffLines });
									}
								}, line.role)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-ink-soft",
									children: [
										"Loaded staff and overhead this year: ",
										money(staff),
										"."
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-line bg-surface p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-xl",
								children: "Cash balance if nobody dies early"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalanceChart, { rows: book.years.map((row) => ({
								year: row.year,
								cash: Math.round(row.cash)
							})) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3",
							children: [
								["Nominal result, whole book", money(book.nominalNet)],
								["Staff over the whole run", money(book.staffBill)],
								["Sale proceeds", money(book.totalIn)],
								["Houses modeled", String(book.homes)],
								["Years each is held", String(book.holding)],
								["Surplus per house per year", money(book.perHomeAnnualSurplus)]
							].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-surface p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wide text-muted",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "nums mt-1 font-serif text-xl",
									children: value
								})]
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
							tone: "note",
							title: "Can more houses pay the staff?",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: book.homesToCarryStaff == null ? "No. Each house in this case loses money in nominal dollars. A larger identical book loses more. Philanthropy has to fund the gap, or the promise has to get narrower, before expansion is responsible." : `In a nominal steady state, about ${book.homesToCarryStaff} houses with this exact surplus would cover today’s staff bill. Read that carefully. It ignores the discount rate. If present value per house is still negative, even that larger book slowly consumes patient capital. It also assumes every future house looks like this one, which they will not.` })
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 max-w-3xl space-y-4 text-ink-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-ink",
						children: "Where the money is allowed to come from"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pilot form: an Illinois not-for-profit corporation seeking 501(c)(3) status, with a title-holding subsidiary so a lawsuit about one house does not automatically reach the others. The Illinois Charitable Trust Act gives the Attorney General a real oversight hook that a for-profit remainder buyer does not have. No equity investors in the pilot. A company that acquires seniors’ remainders in order to pay shareholders is the shape this project exists to avoid." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Repayable capital, if any, is a program-related investment or a CDFI loan subordinated to a funded service reserve. The loan agreement has to say, in language a judge can enforce, that the lender cannot cure a default by cutting groceries, rides, or tax payments promised to someone in a life estate. True bankruptcy-remoteness is a legal question, not a slogan. The life estate protects occupancy even if the organization fails. It does not protect the service contract. That is why the reserve and a named successor charity exist." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Grants worth pursuing, without pretending any are awarded: operating support from foundations that already fund aging, housing, and workforce in the Chicago region; Illinois Housing Development Authority home-repair programs when the household is income-eligible and the grantor allows a remainder to be recorded (do not assume they do — the October 2025 Home Repair and Accessibility Program round offered up to $50,000 a house for owners at or below 80 percent of area median income, through approved local administrators); Community Development Block Grant housing rehabilitation through a municipality or Will County, via the Department of Commerce and Economic Opportunity, again only if stacking with a remainder is permitted; Federal Home Loan Bank of Chicago programs sponsored by a member bank; a CDFI such as IFF or a similar regional lender for the recoverable rehab slice." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "USDA Section 504 repair loans and the small grant for owners 62 and older are real, and they are limited to rural-eligible areas and very low incomes. Most of Joliet, Bolingbrook, and Plainfield will not qualify. Check the parcel. Do not underwrite the pilot as if USDA were a countywide source. Low-Income Housing Tax Credits are the wrong tool; they are a rental production program." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "What a for-profit or “hybrid” adds: speed, and the temptation to price the remainder for a return. If a later book needs more than PRI capital can supply, the safeguard is a charitable owner of the remainder and a capped, subordinated loan — not a sale of the charity’s purpose. Benefit-corporation status is not a substitute for a board that can be sued for abandoning the elders." })
				]
			})]
		})
	] });
}
//#endregion
export { CapitalPage as component };
