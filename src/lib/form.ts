import { DEFAULT_HOME, type HomeInputs, type PrimaryNeed } from "@/lib/model";

export type UnderwriteForm = {
  age: number;
  asIsValue: number;
  postRehabValue: number;
  taxArrears: number;
  annualTax: number;
  initialRehab: number;
  accessibility: number;
  gardenCost: number;
  legalCost: number;
  annualServices: number;
  annualMaintenance: number;
  annualInsurance: number;
  annualAdmin: number;
  midlifeCapex: number;
  costInflationPct: number;
  appreciationPct: number;
  affordableDiscountPct: number;
  sellingCostPct: number;
  discountRatePct: number;
  deferralRatePct: number;
  primaryNeed: PrimaryNeed;
  /** 0 means "use blended life expectancy". */
  holdingOverride: number;
};

export const INITIAL_FORM: UnderwriteForm = {
  age: DEFAULT_HOME.age,
  asIsValue: DEFAULT_HOME.asIsValue,
  postRehabValue: DEFAULT_HOME.postRehabValue,
  taxArrears: DEFAULT_HOME.taxArrears,
  annualTax: DEFAULT_HOME.annualTax,
  initialRehab: DEFAULT_HOME.initialRehab,
  accessibility: DEFAULT_HOME.accessibility,
  gardenCost: DEFAULT_HOME.gardenCost,
  legalCost: DEFAULT_HOME.legalCost,
  annualServices: DEFAULT_HOME.annualServices,
  annualMaintenance: DEFAULT_HOME.annualMaintenance,
  annualInsurance: DEFAULT_HOME.annualInsurance,
  annualAdmin: DEFAULT_HOME.annualAdmin,
  midlifeCapex: DEFAULT_HOME.midlifeCapex,
  costInflationPct: DEFAULT_HOME.costInflation * 100,
  appreciationPct: DEFAULT_HOME.appreciation * 100,
  affordableDiscountPct: DEFAULT_HOME.affordableDiscount * 100,
  sellingCostPct: DEFAULT_HOME.sellingCost * 100,
  discountRatePct: DEFAULT_HOME.discountRate * 100,
  deferralRatePct: DEFAULT_HOME.deferralRate * 100,
  primaryNeed: DEFAULT_HOME.primaryNeed,
  holdingOverride: 0,
};

export function normalizeForm(partial: Partial<UnderwriteForm> | null | undefined): UnderwriteForm {
  return { ...INITIAL_FORM, ...(partial ?? {}) };
}

export function toInputs(form: UnderwriteForm): HomeInputs {
  return {
    age: form.age,
    asIsValue: form.asIsValue,
    postRehabValue: form.postRehabValue,
    taxArrears: form.taxArrears,
    annualTax: form.annualTax,
    initialRehab: form.initialRehab,
    accessibility: form.accessibility,
    gardenCost: form.gardenCost,
    legalCost: form.legalCost,
    annualServices: form.annualServices,
    annualMaintenance: form.annualMaintenance,
    annualInsurance: form.annualInsurance,
    annualAdmin: form.annualAdmin,
    midlifeCapex: form.midlifeCapex,
    costInflation: form.costInflationPct / 100,
    appreciation: form.appreciationPct / 100,
    affordableDiscount: form.affordableDiscountPct / 100,
    sellingCost: form.sellingCostPct / 100,
    discountRate: form.discountRatePct / 100,
    deferralRate: form.deferralRatePct / 100,
    primaryNeed: form.primaryNeed,
    holdingOverride: form.holdingOverride > 0 ? form.holdingOverride : null,
  };
}

export const PRESETS: { id: string; label: string; detail: string; form: UnderwriteForm }[] = [
  {
    id: "full",
    label: "Full promise",
    detail: "Taxes, moderate rehab, and $600 a month of living support.",
    form: INITIAL_FORM,
  },
  {
    id: "shelter",
    label: "Shelter only",
    detail: "Taxes, repairs, maintenance, insurance. Care stays with existing public programs.",
    form: { ...INITIAL_FORM, annualServices: 0, primaryNeed: "repairs" },
  },
  {
    id: "taxes",
    label: "Taxes only",
    detail: "Sound house. Tests whether a transfer is the wrong tool.",
    form: {
      ...INITIAL_FORM,
      primaryNeed: "taxes",
      initialRehab: 2_500,
      accessibility: 0,
      gardenCost: 0,
      annualServices: 0,
      annualMaintenance: 1_500,
      annualAdmin: 1_200,
    },
  },
  {
    id: "heavy",
    label: "Heavy distress",
    detail: "Foundation-level rehab against a Joliet-area resale.",
    form: {
      ...INITIAL_FORM,
      asIsValue: 140_000,
      postRehabValue: 230_000,
      initialRehab: 140_000,
      taxArrears: 14_000,
      primaryNeed: "repairs",
    },
  },
  {
    id: "older",
    label: "Age 88, narrower help",
    detail: "Shorter expected occupancy and a smaller service stipend.",
    form: { ...INITIAL_FORM, age: 88, initialRehab: 40_000, annualServices: 3_600 },
  },
];
