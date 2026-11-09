//#region node_modules/.nitro/vite/services/ssr/assets/model-D2KbIBJW.js
/**
* Planning model for The Legacy Housing Cycle.
* Dollars are nominal unless a field says "npv".
* Life expectancy is the SSA 2023 period table (2026 Trustees Report),
* not a forecast for any person.
*/
var SSA_AGES = [
	65,
	68,
	70,
	72,
	75,
	78,
	80,
	82,
	85,
	88,
	90,
	92,
	95
];
/** Male period life expectancy, exact age. Source: ssa.gov/oact/STATS/table4c6.html */
var SSA_MALE = [
	18.12,
	16.02,
	14.66,
	13.34,
	11.42,
	9.61,
	8.5,
	7.46,
	6.04,
	4.81,
	4.11,
	3.5,
	2.77
];
/** Female period life expectancy, exact age. */
var SSA_FEMALE = [
	20.66,
	18.3,
	16.76,
	15.26,
	13.1,
	11.08,
	9.82,
	8.64,
	7.02,
	5.61,
	4.8,
	4.1,
	3.23
];
var DEFAULT_HOME = {
	age: 80,
	asIsValue: 185e3,
	postRehabValue: 25e4,
	taxArrears: 9e3,
	annualTax: 5600,
	initialRehab: 62e3,
	accessibility: 8e3,
	legalCost: 7500,
	annualServices: 7200,
	annualMaintenance: 2800,
	annualInsurance: 1900,
	annualAdmin: 2400,
	midlifeCapex: 0,
	costInflation: .03,
	appreciation: .025,
	affordableDiscount: .08,
	sellingCost: .07,
	discountRate: .04,
	deferralRate: .06,
	primaryNeed: "repairs-and-support",
	holdingOverride: null
};
/** Planning ranges for a small pre-1978 Will County house. Not contractor bids. */
var REPAIR_LINES = [
	{
		id: "roof",
		label: "Roof",
		note: "Tear-off and architectural shingles, typical bungalow",
		low: 8e3,
		mid: 16e3,
		high: 28e3
	},
	{
		id: "electric",
		label: "Electrical",
		note: "Panel, hazards, partial rewire",
		low: 4e3,
		mid: 12e3,
		high: 22e3
	},
	{
		id: "plumb",
		label: "Plumbing",
		note: "Supply leaks, water heater, drain repairs",
		low: 3e3,
		mid: 1e4,
		high: 18e3
	},
	{
		id: "hvac",
		label: "Heating and cooling",
		note: "Furnace or heat pump replacement",
		low: 5e3,
		mid: 11e3,
		high: 16e3
	},
	{
		id: "foundation",
		label: "Foundation and structure",
		note: "Leave at none unless an engineer has flagged it",
		low: 0,
		mid: 12e3,
		high: 35e3
	},
	{
		id: "envelope",
		label: "Windows and envelope",
		note: "Selective replacement, not the whole house",
		low: 2e3,
		mid: 8e3,
		high: 15e3
	},
	{
		id: "interior",
		label: "Interior safety",
		note: "Floors, stairs, kitchen and bath hazards",
		low: 3e3,
		mid: 9e3,
		high: 18e3
	},
	{
		id: "hazards",
		label: "Lead and asbestos contingency",
		note: "Pre-1978 houses. Testing before promises.",
		low: 0,
		mid: 6e3,
		high: 2e4
	}
];
var ACCESS_PRESETS = {
	light: 3500,
	bath: 12e3,
	full: 22e3
};
function repairTotal(picks) {
	return REPAIR_LINES.reduce((sum, line) => {
		const pick = picks[line.id] ?? "none";
		if (pick === "none") return sum;
		return sum + line[pick];
	}, 0);
}
function clamp(n, min, max, fallback) {
	if (!Number.isFinite(n)) return fallback;
	return Math.min(max, Math.max(min, n));
}
function sanitize(raw) {
	return {
		age: Math.round(clamp(raw.age, 55, 100, 80)),
		asIsValue: clamp(raw.asIsValue, 0, 5e6, 0),
		postRehabValue: clamp(raw.postRehabValue, 0, 5e6, 0),
		taxArrears: clamp(raw.taxArrears, 0, 5e5, 0),
		annualTax: clamp(raw.annualTax, 0, 1e5, 0),
		initialRehab: clamp(raw.initialRehab, 0, 15e5, 0),
		accessibility: clamp(raw.accessibility, 0, 2e5, 0),
		legalCost: clamp(raw.legalCost, 0, 1e5, 0),
		annualServices: clamp(raw.annualServices, 0, 8e4, 0),
		annualMaintenance: clamp(raw.annualMaintenance, 0, 5e4, 0),
		annualInsurance: clamp(raw.annualInsurance, 0, 3e4, 0),
		annualAdmin: clamp(raw.annualAdmin, 0, 4e4, 0),
		midlifeCapex: clamp(raw.midlifeCapex, 0, 4e5, 0),
		costInflation: clamp(raw.costInflation, 0, .12, .03),
		appreciation: clamp(raw.appreciation, -.05, .12, .025),
		affordableDiscount: clamp(raw.affordableDiscount, 0, .4, .08),
		sellingCost: clamp(raw.sellingCost, 0, .15, .07),
		discountRate: clamp(raw.discountRate, 0, .15, .04),
		deferralRate: clamp(raw.deferralRate, 0, .12, .06),
		primaryNeed: raw.primaryNeed ?? "repairs-and-support",
		holdingOverride: raw.holdingOverride == null ? null : Math.round(clamp(raw.holdingOverride, 1, 40, 10))
	};
}
function lookup(age, table) {
	const a = clamp(age, 50, 100, 80);
	const first = SSA_AGES[0];
	if (a <= first) {
		const perYear = (table[0] - table[1]) / (SSA_AGES[1] - SSA_AGES[0]);
		return table[0] + (first - a) * perYear;
	}
	const last = SSA_AGES.length - 1;
	if (a >= SSA_AGES[last]) return table[last];
	let i = 0;
	while (SSA_AGES[i + 1] < a) i += 1;
	const span = SSA_AGES[i + 1] - SSA_AGES[i];
	const t = (a - SSA_AGES[i]) / span;
	return table[i] * (1 - t) + table[i + 1] * t;
}
function lifeExpectancy(age, sex) {
	return lookup(age, sex === "male" ? SSA_MALE : SSA_FEMALE);
}
function dollars(n) {
	return `${n < 0 ? "-" : ""}$${Math.abs(Math.round(n)).toLocaleString("en-US")}`;
}
function pow(base, exp) {
	return Math.pow(base, exp);
}
function projectYears(input, years, id, label) {
	const upfront = input.taxArrears + input.initialRehab + input.accessibility + input.legalCost;
	const annualBase = input.annualTax + input.annualServices + input.annualMaintenance + input.annualInsurance + input.annualAdmin;
	const midYear = Math.max(1, Math.round(years / 2));
	const yearly = [];
	let operating = 0;
	let totalCost = upfront;
	let trough = -upfront;
	let running = -upfront;
	let npv = -upfront;
	yearly.push({
		year: 0,
		outflow: upfront,
		inflow: 0,
		net: -upfront
	});
	for (let t = 1; t <= years; t += 1) {
		const outflow = annualBase * pow(1 + input.costInflation, t - 1) + (t === midYear ? input.midlifeCapex * pow(1 + input.costInflation, t - 1) : 0);
		operating += outflow;
		totalCost += outflow;
		running -= outflow;
		trough = Math.min(trough, running);
		npv -= outflow / pow(1 + input.discountRate, t);
		yearly.push({
			year: t,
			outflow,
			inflow: 0,
			net: -outflow
		});
	}
	const marketAtSale = input.postRehabValue * pow(1 + input.appreciation, years);
	const salePrice = marketAtSale * (1 - input.affordableDiscount);
	const netProceeds = salePrice * (1 - input.sellingCost);
	const last = yearly[yearly.length - 1];
	last.inflow = netProceeds;
	last.net += netProceeds;
	running += netProceeds;
	trough = Math.min(trough, running);
	npv += netProceeds / pow(1 + input.discountRate, years);
	const nominalNet = netProceeds - totalCost;
	return {
		id,
		label,
		years,
		upfront,
		operating,
		totalCost,
		marketAtSale,
		salePrice,
		netProceeds,
		nominalNet,
		npv,
		cashTrough: trough,
		affordabilityGift: marketAtSale - salePrice,
		estateReconciliation: nominalNet > 0 ? nominalNet * .5 : 0,
		yearly
	};
}
/** Compounded deferral balance of annual taxes. Illustrative, not a payoff quote. */
function deferralBalance(annualTax, inflation, years, rate) {
	let balance = 0;
	for (let t = 1; t <= years; t += 1) balance = balance * (1 + rate) + annualTax * pow(1 + inflation, t - 1);
	return balance;
}
function projectHome(raw) {
	const inputs = sanitize(raw);
	const leMale = lifeExpectancy(inputs.age, "male");
	const leFemale = lifeExpectancy(inputs.age, "female");
	const leBlend = (leMale + leFemale) / 2;
	const baseYears = inputs.holdingOverride ?? Math.max(1, Math.round(leBlend));
	const longer = Math.max(leMale, leFemale);
	const shorter = Math.min(leMale, leFemale);
	const longYears = Math.min(40, Math.max(baseYears + 3, Math.round(longer * 1.35)));
	const shortYears = Math.max(3, Math.min(baseYears - 1, Math.round(shorter * .7)));
	const short = projectYears(inputs, shortYears, "short", "Shorter life");
	const base = projectYears(inputs, baseYears, "base", "Blended life expectancy");
	const long = projectYears(inputs, longYears, "long", "Long-life reserve");
	const scenarios = [
		short,
		base,
		long
	];
	const deferral = deferralBalance(inputs.annualTax, inputs.costInflation, baseYears, inputs.deferralRate);
	const gates = [];
	if (inputs.age < 62) gates.push({
		level: "stop",
		text: "This design is for older homeowners. Someone under 62 is a different program — a repair loan or grant, not a remainder transfer. A long remaining life makes the cash promise open-ended."
	});
	else if (inputs.age < 65) gates.push({
		level: "caution",
		text: "Illinois senior homestead, assessment freeze, and tax deferral generally require age 65. Do not skip those programs, and do not treat ages 62–64 as the core pilot."
	});
	if (inputs.postRehabValue < 4e4 || inputs.asIsValue < 2e4) gates.push({
		level: "stop",
		text: "The value entered is too low to model a restoration-and-resale cycle. It may be a lot, a different legal problem, or bad data."
	});
	const rehab = inputs.initialRehab + inputs.accessibility;
	if (inputs.postRehabValue > 0 && rehab > inputs.postRehabValue * .55) gates.push({
		level: "stop",
		text: "Repairs would consume more than half of the restored value. That is over-improvement. Reduce scope to life safety, or fund the excess as a pure grant with no expectation of recovery."
	});
	if (inputs.primaryNeed === "taxes" && rehab < 15e3 && inputs.asIsValue > deferral * 2.2 && inputs.asIsValue > 1e5) gates.push({
		level: "stop",
		text: "The illustrated problem is mainly taxes, and the house still holds far more equity than a tax-deferral balance would. Refer to the senior assessment freeze, homestead exemptions, and the Senior Citizens Real Estate Tax Deferral Act before anyone discusses a transfer."
	});
	if (base.npv < 0) {
		const gap = dollars(base.npv);
		gates.push({
			level: "subsidy",
			text: base.nominalNet >= 0 ? `Nominal cash eventually comes out ahead by ${dollars(base.nominalNet)}, but at a ${Math.round(inputs.discountRate * 1e3) / 10}% discount rate the present value is still negative by ${gap}. Time is not free. Cover that gap with philanthropic capital or narrow the promise. Do not call it self-sustaining.` : `This illustration loses ${dollars(Math.abs(base.nominalNet))} in nominal dollars and ${dollars(Math.abs(base.npv))} in present value. Enroll only with a named grant or reserve that covers the gap. A later house cannot be asked to pay for this one.`
		});
	}
	if (long.npv < -25e3) gates.push({
		level: "caution",
		text: "If this homeowner lives well past average, the loss deepens. Price a service reserve for the long-life case, or cap annual services in the contract with a funded way to extend them."
	});
	if (inputs.annualServices > 0) gates.push({
		level: "caution",
		text: "Groceries, transport, housework, and care-adjacent help can collide with the Community Care Program and with Medicaid rules. Screen those benefits first. Do not trade the house for help the State of Illinois may already provide."
	});
	gates.push({
		level: "pass",
		text: "Independent counsel for the homeowner, a waiting period, and a written comparison of dollars in versus the remainder out are mandatory before any recording. This screen is not that advice."
	});
	const stopped = gates.some((g) => g.level === "stop");
	const needsSubsidy = gates.some((g) => g.level === "subsidy");
	const decision = stopped ? "stop" : needsSubsidy ? "subsidy" : "proceed";
	return {
		inputs,
		leMale,
		leFemale,
		leBlend,
		baseYears,
		shortYears,
		longYears,
		annualBase: inputs.annualTax + inputs.annualServices + inputs.annualMaintenance + inputs.annualInsurance + inputs.annualAdmin,
		scenarios,
		base,
		gates,
		decision,
		deferralBalance: deferral
	};
}
var DEFAULT_STAFF = [
	{
		role: "Executive director",
		pay: 115e3
	},
	{
		role: "Homeowner advocate",
		pay: 72e3
	},
	{
		role: "Construction coordinator",
		pay: 88e3
	},
	{
		role: "Finance and compliance",
		pay: 52e3
	}
];
var DEFAULT_PORTFOLIO = {
	homes: 15,
	enrollYears: 3,
	staff: DEFAULT_STAFF,
	benefitsLoad: .3,
	overhead: 8e4,
	openingCapital: 0
};
function staffAnnual(p) {
	const salaries = p.staff.reduce((s, line) => s + clamp(line.pay, 0, 4e5, 0), 0);
	const load = clamp(p.benefitsLoad, 0, .6, .3);
	const overhead = clamp(p.overhead, 0, 1e6, 0);
	return salaries * (1 + load) + overhead;
}
function spread(homes, years) {
	const n = Math.max(1, Math.round(homes));
	const y = Math.max(1, Math.round(years));
	const base = Math.floor(n / y);
	let extra = n % y;
	return Array.from({ length: y }, () => {
		const add = extra > 0 ? 1 : 0;
		extra -= add;
		return base + add;
	});
}
function projectPortfolio(homeRaw, portRaw) {
	const home = projectHome(homeRaw);
	const inputs = home.inputs;
	const holding = home.baseYears;
	const homes = Math.round(clamp(portRaw.homes, 1, 500, 15));
	const enrollYears = Math.round(clamp(portRaw.enrollYears, 1, 15, 3));
	const staff0 = staffAnnual({
		...portRaw,
		homes,
		enrollYears
	});
	const cohorts = spread(homes, enrollYears);
	const last = enrollYears - 1 + holding;
	const reserveFloor = staff0 + home.annualBase * homes;
	const opening = clamp(portRaw.openingCapital, 0, 2e8, 0);
	const inflatingUpfront = inputs.initialRehab + inputs.accessibility + inputs.legalCost;
	const rows = [];
	let cash = opening;
	let minCash = cash;
	let minCashYear = 0;
	let totalIn = 0;
	let totalOut = 0;
	let staffBill = 0;
	const midYear = Math.max(1, Math.round(holding / 2));
	for (let y = 0; y <= last; y += 1) {
		const newHomes = y < cohorts.length ? cohorts[y] : 0;
		const sellIndex = y - holding;
		const selling = sellIndex >= 0 && sellIndex < cohorts.length ? cohorts[sellIndex] : 0;
		let occupied = 0;
		let midCount = 0;
		for (let e = 0; e < cohorts.length; e += 1) {
			const t = y - e;
			if (t >= 1 && t <= holding) occupied += cohorts[e];
			if (t === midYear) midCount += cohorts[e];
		}
		const upfront = newHomes * inputs.taxArrears + newHomes * inflatingUpfront * pow(1 + inputs.costInflation, y);
		const capex = midCount * inputs.midlifeCapex * pow(1 + inputs.costInflation, y - 1);
		const operating = occupied * home.annualBase * pow(1 + inputs.costInflation, Math.max(0, y - 1));
		const inflow = selling * (inputs.postRehabValue * pow(1 + inputs.appreciation, y) * (1 - inputs.affordableDiscount) * (1 - inputs.sellingCost));
		const staff = staff0 * pow(1 + inputs.costInflation, y);
		const outflow = upfront + operating + capex + staff;
		cash = cash - outflow + inflow;
		totalIn += inflow;
		totalOut += outflow;
		staffBill += staff;
		if (cash < minCash) {
			minCash = cash;
			minCashYear = y;
		}
		rows.push({
			year: y + 1,
			enrolled: newHomes,
			occupied,
			sales: selling,
			outflow,
			inflow,
			staff,
			cash
		});
	}
	const recommendedCapital = Math.max(0, reserveFloor - (minCash - opening));
	const perHomeAnnualSurplus = holding > 0 ? home.base.nominalNet / holding : 0;
	const homesToCarryStaff = perHomeAnnualSurplus > 1e3 ? Math.ceil(staff0 / perHomeAnnualSurplus) : null;
	return {
		years: rows,
		minCash,
		minCashYear: minCashYear + 1,
		recommendedCapital,
		reserveFloor,
		totalIn,
		totalOut,
		nominalNet: totalIn - totalOut,
		staffBill,
		homes,
		holding,
		homesToCarryStaff,
		perHomeAnnualSurplus
	};
}
//#endregion
export { REPAIR_LINES as a, repairTotal as c, DEFAULT_STAFF as i, staffAnnual as l, DEFAULT_HOME as n, projectHome as o, DEFAULT_PORTFOLIO as r, projectPortfolio as s, ACCESS_PRESETS as t };
