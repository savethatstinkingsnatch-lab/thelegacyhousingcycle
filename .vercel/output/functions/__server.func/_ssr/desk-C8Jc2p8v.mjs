//#region node_modules/.nitro/vite/services/ssr/assets/desk-C8Jc2p8v.js
/** Composite files for the operations prototype. Not real households. */
var HOMES = [
	{
		id: "014",
		place: "Joliet",
		built: 1948,
		phase: "Enrolled",
		story: "Life estate recorded after independent counsel and a 14-day wait. Taxes redeemed. Roof and panel underway."
	},
	{
		id: "015",
		place: "Crest Hill",
		built: 1956,
		phase: "Counsel",
		story: "Counsel is reviewing a possible Medicaid look-back. No deed has been drafted. Community Care Program screening is open."
	},
	{
		id: "016",
		place: "Lockport",
		built: 1924,
		phase: "Inquiry",
		story: "Family called about a sold tax. A redemption quote is the next step. This file is not enrolled."
	},
	{
		id: "017",
		place: "University Park",
		built: 1972,
		phase: "Maintaining",
		story: "Enrolled earlier in the illustration. Accessible bath is done. The quarterly homeowner visit is due."
	},
	{
		id: "018",
		place: "Joliet",
		built: 1961,
		phase: "Inquiry",
		story: "The house is sound and the stress is taxes. The desk recommendation is the senior freeze and deferral, not a transfer."
	},
	{
		id: "019",
		place: "Wilmington",
		built: 1938,
		phase: "Enrolled",
		story: "Edge of the county. Rehab is held until someone checks whether the parcel is USDA-rural eligible."
	}
];
var SEED_ORDERS = [
	{
		id: "w1",
		homeId: "014",
		trade: "Roofing",
		contractor: "Rock Run Roofing",
		scope: "Tear-off, ice barrier, architectural shingles",
		amount: 16800,
		status: "complete",
		apprentice: true
	},
	{
		id: "w2",
		homeId: "014",
		trade: "Electrical",
		contractor: "Laraway Electric",
		scope: "Panel, smoke alarms, open-splice repair",
		amount: 7400,
		status: "in progress",
		apprentice: false
	},
	{
		id: "w3",
		homeId: "017",
		trade: "Accessibility",
		contractor: "Jackson Creek Builders",
		scope: "Curbless shower and grab bars",
		amount: 11200,
		status: "complete",
		apprentice: true
	},
	{
		id: "w4",
		homeId: "017",
		trade: "HVAC",
		contractor: "DuPage River Mechanical",
		scope: "Furnace replacement, permit, inspection",
		amount: 9600,
		status: "complete",
		apprentice: false
	},
	{
		id: "w5",
		homeId: "019",
		trade: "Environmental",
		contractor: "Hickory Creek Environmental",
		scope: "Lead and asbestos survey before any disturbance",
		amount: 2200,
		status: "held",
		apprentice: false
	},
	{
		id: "w6",
		homeId: "014",
		trade: "Plumbing",
		contractor: "Lockport Plumbing",
		scope: "Water heater and two supply leaks",
		amount: 4850,
		status: "assigned",
		apprentice: false
	}
];
var SEED_DUTIES = [
	{
		id: "d1",
		homeId: "014",
		what: "Property tax installment",
		when: "County due date",
		state: "met"
	},
	{
		id: "d2",
		homeId: "014",
		what: "Homeowner visit",
		when: "This month",
		state: "due"
	},
	{
		id: "d3",
		homeId: "017",
		what: "Homeowner visit",
		when: "Overdue 12 days",
		state: "overdue"
	},
	{
		id: "d4",
		homeId: "017",
		what: "Furnace filter and detector test",
		when: "Quarterly",
		state: "due"
	},
	{
		id: "d5",
		homeId: "019",
		what: "Insurance renewal",
		when: "45 days",
		state: "due"
	},
	{
		id: "d6",
		homeId: "015",
		what: "Counsel status check",
		when: "This week",
		state: "due"
	}
];
var SAMPLE_FUNDS = [
	{
		name: "Operating grant",
		kind: "Philanthropic, restricted to services and staff",
		amount: 15e5,
		note: "Does not buy the remainder. Pays people and the care the house will not repay."
	},
	{
		name: "Program-related loan",
		kind: "Repayable, subordinated to the service reserve",
		amount: 3e6,
		note: "Rehab, redemption, and legal costs only. Cannot accelerate by cutting a senior's services."
	},
	{
		name: "Neighbor gifts",
		kind: "Board-restricted until the reserve policy is met",
		amount: 25e4,
		note: "Unrestricted in form, restricted by board resolution in practice."
	}
];
var NEXT_STATUS = {
	assigned: "in progress",
	"in progress": "complete",
	complete: "held",
	held: "assigned"
};
var NEXT_DUTY = {
	overdue: "due",
	due: "met",
	met: "overdue"
};
//#endregion
export { SEED_DUTIES as a, SAMPLE_FUNDS as i, NEXT_DUTY as n, SEED_ORDERS as o, NEXT_STATUS as r, HOMES as t };
