import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTitle, r as Shell, t as Callout } from "./shell-DV_HPsti.mjs";
import { n as num, r as pct, t as money } from "./format-BVQsaY8W.mjs";
import { a as REPAIR_LINES, c as repairTotal, o as projectHome, t as ACCESS_PRESETS } from "./model-D2KbIBJW.mjs";
import { a as PRESETS, i as INITIAL_FORM, n as CashChart, o as normalizeForm, r as Field, s as toInputs } from "./form-C--t8vFD.mjs";
import { t as useLocalState } from "./use-local-state-cfAgHGfp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/model-BDSXx9My.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NEEDS = [
	{
		id: "taxes",
		label: "Taxes are the main problem"
	},
	{
		id: "repairs",
		label: "Repairs and taxes"
	},
	{
		id: "repairs-and-support",
		label: "Repairs, taxes, and living support"
	}
];
function ModelPage() {
	const [saved, setSaved] = useLocalState("lhc-form-v1", INITIAL_FORM);
	const form = normalizeForm(saved);
	const set = (patch) => setSaved({
		...form,
		...patch
	});
	const result = projectHome(toInputs(form));
	const base = result.base;
	const [picks, setPicks] = (0, import_react.useState)(() => Object.fromEntries(REPAIR_LINES.map((line) => [line.id, "none"])));
	const tone = result.decision === "stop" ? "stop" : result.decision === "subsidy" ? "subsidy" : "proceed";
	const decisionTitle = result.decision === "stop" ? "Do not enroll on these facts" : result.decision === "subsidy" ? "Only with a named subsidy" : "Plausible on paper — still not a legal opinion";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		kicker: "Single-house test",
		title: "Underwrite the promise before anyone is grateful.",
		lede: "Sex is not an input. The base case blends the Social Security male and female period life expectancies so this tool does not price women out. The long-life case uses the longer expectancy, stretched further, as a reserve test — a reason to fund a reserve, not a reason to turn someone away."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "@container",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-8 @3xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "order-2 space-y-6 @3xl:order-1",
				onSubmit: (e) => e.preventDefault(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "min-h-11 border border-line bg-surface px-3 text-left text-sm hover:border-pine",
							onClick: () => setSaved(preset.form),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: preset.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: preset.detail
							})]
						}, preset.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "font-serif text-xl",
								children: "The house and the person"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Age",
								value: form.age,
								onChange: (age) => set({ age })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "Primary gap"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "mt-1 min-h-11 w-full border border-line bg-surface px-3",
									value: form.primaryNeed,
									onChange: (e) => set({ primaryNeed: e.target.value }),
									children: NEEDS.map((need) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: need.id,
										children: need.label
									}, need.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Value as it sits",
								hint: "Distressed, not the renovated comparable.",
								value: form.asIsValue,
								onChange: (asIsValue) => set({ asIsValue }),
								suffix: "$"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Value after a finished restoration, today's dollars",
								value: form.postRehabValue,
								onChange: (postRehabValue) => set({ postRehabValue }),
								suffix: "$"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Hold for this many years",
								hint: "0 uses the blended life expectancy.",
								value: form.holdingOverride,
								onChange: (holdingOverride) => set({ holdingOverride })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "font-serif text-xl",
								children: "Cash at the start"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Tax arrears and redemption",
								value: form.taxArrears,
								onChange: (taxArrears) => set({ taxArrears }),
								suffix: "$"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Initial rehab",
								value: form.initialRehab,
								onChange: (initialRehab) => set({ initialRehab }),
								suffix: "$"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Accessibility",
								value: form.accessibility,
								onChange: (accessibility) => set({ accessibility }),
								suffix: "$"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Counsel, title, recording",
								value: form.legalCost,
								onChange: (legalCost) => set({ legalCost }),
								suffix: "$"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "border border-line bg-surface p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
								className: "min-h-11 cursor-pointer font-medium",
								children: "Repair range builder"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted",
								children: "Chicago-south-suburban planning ranges for a small pre-1978 house, in 2026 dollars. Not bids. Foundation and hazards stay at “none” until an inspection says otherwise."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-3",
								children: REPAIR_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: line.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted",
										children: line.note
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "mt-1 min-h-11 w-full border border-line bg-paper px-2 text-sm",
										value: picks[line.id] ?? "none",
										onChange: (e) => setPicks({
											...picks,
											[line.id]: e.target.value
										}),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "none",
												children: "Not in scope"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: "low",
												children: ["Low · ", money(line.low)]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: "mid",
												children: ["Mid · ", money(line.mid)]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: "high",
												children: ["High · ", money(line.high)]
											})
										]
									})
								] }, line.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "nums mt-3 text-sm",
								children: ["Selected scope ", money(repairTotal(picks))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-11 bg-pine px-3 text-sm font-semibold text-surface",
									onClick: () => set({ initialRehab: repairTotal(picks) }),
									children: "Use as rehab cost"
								}), [
									["Light access", ACCESS_PRESETS.light],
									["Accessible bath", ACCESS_PRESETS.bath],
									["Broader access", ACCESS_PRESETS.full]
								].map(([label, amount]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-11 border border-line px-3 text-sm",
									onClick: () => set({ accessibility: amount }),
									children: label
								}, label))]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "font-serif text-xl",
								children: "Every year the owner is alive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Property tax",
								value: form.annualTax,
								onChange: (annualTax) => set({ annualTax }),
								suffix: "$"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Living support",
								hint: "Groceries, rides, housework. Not nursing care.",
								value: form.annualServices,
								onChange: (annualServices) => set({ annualServices }),
								suffix: "$ / yr"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Maintenance",
								value: form.annualMaintenance,
								onChange: (annualMaintenance) => set({ annualMaintenance }),
								suffix: "$"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Insurance",
								value: form.annualInsurance,
								onChange: (annualInsurance) => set({ annualInsurance }),
								suffix: "$"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Admin charged to this house",
								value: form.annualAdmin,
								onChange: (annualAdmin) => set({ annualAdmin }),
								suffix: "$"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "One mid-stay capital repair",
								hint: "Charged halfway through, inflated. 0 if you already priced it up front.",
								value: form.midlifeCapex,
								onChange: (midlifeCapex) => set({ midlifeCapex }),
								suffix: "$"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "font-serif text-xl",
								children: "Rates"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Cost inflation",
								value: form.costInflationPct,
								onChange: (costInflationPct) => set({ costInflationPct }),
								suffix: "%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Home appreciation",
								value: form.appreciationPct,
								onChange: (appreciationPct) => set({ appreciationPct }),
								suffix: "%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Affordable-price discount",
								hint: "Sold this far under the then-market value.",
								value: form.affordableDiscountPct,
								onChange: (affordableDiscountPct) => set({ affordableDiscountPct }),
								suffix: "%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Selling costs",
								value: form.sellingCostPct,
								onChange: (sellingCostPct) => set({ sellingCostPct }),
								suffix: "%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Discount rate",
								hint: "Patient capital. Not a venture return.",
								value: form.discountRatePct,
								onChange: (discountRatePct) => set({ discountRatePct }),
								suffix: "%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Deferral interest, illustrative",
								hint: "Compared with the Senior Citizens tax deferral. Confirm the statute.",
								value: form.deferralRatePct,
								onChange: (deferralRatePct) => set({ deferralRatePct }),
								suffix: "%"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-1 space-y-4 @3xl:order-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
						tone,
						title: decisionTitle,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Blended expectancy ",
							num(result.leBlend, 1),
							" years (male ",
							num(result.leMale, 1),
							", female",
							" ",
							num(result.leFemale, 1),
							"). Base hold ",
							result.baseYears,
							" years. Short case ",
							result.shortYears,
							". Long-life reserve ",
							result.longYears,
							"."
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "grid grid-cols-2 gap-px border border-line bg-line",
						children: [
							[
								"Nominal result",
								money(base.nominalNet),
								base.nominalNet < 0
							],
							[
								"Present value",
								money(base.npv),
								base.npv < 0
							],
							[
								"Cash tied up",
								money(Math.abs(base.cashTrough)),
								false
							],
							[
								"Net at sale",
								money(base.netProceeds),
								false
							],
							[
								"All-in cost",
								money(base.totalCost),
								false
							],
							[
								"Given to next buyer",
								money(base.affordabilityGift),
								false
							]
						].map(([label, value, bad]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-surface p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-wide text-muted",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: `nums mt-1 font-serif text-2xl ${bad ? "text-loss" : "text-ink"}`,
								children: value
							})]
						}, String(label)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-xl",
							children: "Cash, year by year"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Red leaves. Green is the sale year, net of that year’s costs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 border border-line bg-surface p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CashChart, { rows: base.yearly.map((row) => ({
								year: row.year,
								net: Math.round(row.net)
							})) })
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto border border-line bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "data",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Case" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "num",
									children: "Years"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "num",
									children: "Nominal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "num",
									children: "Present value"
								})
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: result.scenarios.map((scenario) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: scenario.label }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "num",
									children: scenario.years
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: `num ${scenario.nominalNet < 0 ? "text-loss" : ""}`,
									children: money(scenario.nominalNet)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: `num ${scenario.npv < 0 ? "text-loss" : ""}`,
									children: money(scenario.npv)
								})
							] }, scenario.id)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-line bg-surface p-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-lg",
								children: "Estate reconciliation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-ink-soft",
								children: base.estateReconciliation > 0 ? `Expected nominal surplus is ${money(base.nominalNet)}. The design pays half, ${money(base.estateReconciliation)}, to the estate or a person the owner names, so the organization does not keep a windfall. The other half stays in the reserve. The affordable-price discount, ${money(base.affordabilityGift)}, is a gift to the next family and has to be described that way — it is not a benefit to the elder.` : "There is no nominal surplus, so there is nothing to reconcile back to the estate. The honest sentence is that this house needs subsidy, not that the heirs are being enriched."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-serif text-lg",
								children: "Tax deferral instead"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-ink-soft",
								children: [
									"Deferring the tax bill at ",
									pct(result.inputs.deferralRate, 0),
									" compounded, illustratively, builds a balance of about ",
									money(result.deferralBalance),
									" over ",
									result.baseYears,
									" years. The house as it sits is valued at ",
									money(result.inputs.asIsValue),
									". If those two numbers are far apart and the building is sound, do not trade the remainder for help with the bill."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: result.gates.map((gate) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
							tone: gate.level === "pass" ? "note" : gate.level === "caution" ? "note" : gate.level,
							title: gate.level === "pass" ? "Always" : gate.level === "caution" ? "Caution" : gate.level === "stop" ? "Stop" : "Subsidy",
							children: gate.text
						}) }, gate.text))
					})
				]
			})]
		})
	})] });
}
//#endregion
export { ModelPage as component };
