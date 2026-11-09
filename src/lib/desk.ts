export type DeskHome = {
  id: string;
  place: string;
  built: number;
  phase: "Inquiry" | "Counsel" | "Enrolled" | "Maintaining";
  story: string;
};

/** Composite files for the operations prototype. Not real households. */
export const HOMES: DeskHome[] = [
  {
    id: "014",
    place: "Joliet",
    built: 1948,
    phase: "Enrolled",
    story: "Life estate recorded after independent counsel and a 14-day wait. Taxes redeemed. Roof and panel underway.",
  },
  {
    id: "015",
    place: "Crest Hill",
    built: 1956,
    phase: "Counsel",
    story: "Counsel is reviewing a possible Medicaid look-back. No deed has been drafted. Community Care Program screening is open.",
  },
  {
    id: "016",
    place: "Lockport",
    built: 1924,
    phase: "Inquiry",
    story: "Family called about a sold tax. A redemption quote is the next step. This file is not enrolled.",
  },
  {
    id: "017",
    place: "University Park",
    built: 1972,
    phase: "Maintaining",
    story: "Enrolled earlier in the illustration. Accessible bath and raised beds are done, on tested soil. Neighbors are not invited unless the owner says so. The quarterly visit is due.",
  },
  {
    id: "018",
    place: "Joliet",
    built: 1961,
    phase: "Inquiry",
    story: "The house is sound and the stress is taxes. The desk recommendation is the senior freeze and deferral, not a transfer.",
  },
  {
    id: "019",
    place: "Wilmington",
    built: 1938,
    phase: "Enrolled",
    story: "Edge of the county. Rehab is held until someone checks whether the parcel is USDA-rural eligible.",
  },
];

export type OrderStatus = "assigned" | "in progress" | "complete" | "held";

export type WorkOrder = {
  id: string;
  homeId: string;
  trade: string;
  contractor: string;
  scope: string;
  amount: number;
  status: OrderStatus;
  apprentice: boolean;
};

export const SEED_ORDERS: WorkOrder[] = [
  {
    id: "w1",
    homeId: "014",
    trade: "Roofing",
    contractor: "Rock Run Roofing",
    scope: "Tear-off, ice barrier, architectural shingles",
    amount: 16_800,
    status: "complete",
    apprentice: true,
  },
  {
    id: "w2",
    homeId: "014",
    trade: "Electrical",
    contractor: "Laraway Electric",
    scope: "Panel, smoke alarms, open-splice repair",
    amount: 7_400,
    status: "in progress",
    apprentice: false,
  },
  {
    id: "w3",
    homeId: "017",
    trade: "Accessibility",
    contractor: "Jackson Creek Builders",
    scope: "Curbless shower and grab bars",
    amount: 11_200,
    status: "complete",
    apprentice: true,
  },
  {
    id: "w4",
    homeId: "017",
    trade: "HVAC",
    contractor: "DuPage River Mechanical",
    scope: "Furnace replacement, permit, inspection",
    amount: 9_600,
    status: "complete",
    apprentice: false,
  },
  {
    id: "w5",
    homeId: "019",
    trade: "Environmental",
    contractor: "Hickory Creek Environmental",
    scope: "Lead and asbestos survey before any disturbance",
    amount: 2_200,
    status: "held",
    apprentice: false,
  },
  {
    id: "w6",
    homeId: "014",
    trade: "Plumbing",
    contractor: "Lockport Plumbing",
    scope: "Water heater and two supply leaks",
    amount: 4_850,
    status: "assigned",
    apprentice: false,
  },
  {
    id: "w7",
    homeId: "017",
    trade: "Garden",
    contractor: "Prairie Path Carpentry",
    scope: "Three waist-high beds, clean soil, drip, path, bench",
    amount: 4_800,
    status: "complete",
    apprentice: true,
  },
];

export type DutyState = "met" | "due" | "overdue";

export type Duty = {
  id: string;
  homeId: string;
  what: string;
  when: string;
  state: DutyState;
};

export const SEED_DUTIES: Duty[] = [
  { id: "d1", homeId: "014", what: "Property tax installment", when: "County due date", state: "met" },
  { id: "d2", homeId: "014", what: "Homeowner visit", when: "This month", state: "due" },
  { id: "d3", homeId: "017", what: "Homeowner visit", when: "Overdue 12 days", state: "overdue" },
  { id: "d4", homeId: "017", what: "Furnace filter and detector test", when: "Quarterly", state: "due" },
  { id: "d7", homeId: "017", what: "Garden reset if the owner cannot tend it", when: "This season", state: "due" },
  { id: "d5", homeId: "019", what: "Insurance renewal", when: "45 days", state: "due" },
  { id: "d6", homeId: "015", what: "Counsel status check", when: "This week", state: "due" },
];

export const SAMPLE_FUNDS = [
  {
    name: "Operating grant",
    kind: "Philanthropic, restricted to services and staff",
    amount: 1_500_000,
    note: "Does not buy the remainder. Pays people and the care the house will not repay.",
  },
  {
    name: "Program-related loan",
    kind: "Repayable, subordinated to the service reserve",
    amount: 3_000_000,
    note: "Rehab, redemption, and legal costs only. Cannot accelerate by cutting a senior's services.",
  },
  {
    name: "Neighbor gifts",
    kind: "Board-restricted until the reserve policy is met",
    amount: 250_000,
    note: "Unrestricted in form, restricted by board resolution in practice.",
  },
];

export const NEXT_STATUS = {
  assigned: "in progress",
  "in progress": "complete",
  complete: "held",
  held: "assigned",
} as const;

export const NEXT_DUTY = {
  overdue: "due",
  due: "met",
  met: "overdue",
} as const;
