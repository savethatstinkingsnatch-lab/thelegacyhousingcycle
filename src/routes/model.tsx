import { CashChart } from "@/components/charts";
import { Field } from "@/components/field";
import { Callout, PageTitle, Shell } from "@/components/shell";
import { money, num, pct } from "@/lib/format";
import { INITIAL_FORM, PRESETS, normalizeForm, toInputs, type UnderwriteForm } from "@/lib/form";
import { ACCESS_PRESETS, REPAIR_LINES, projectHome, repairTotal, type PrimaryNeed, type RepairPick } from "@/lib/model";
import { useLocalState } from "@/lib/use-local-state";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/model")({
  head: () => ({ meta: [{ title: "Underwriting · Legacy Housing Cycle" }] }),
  component: ModelPage,
});

const NEEDS: { id: PrimaryNeed; label: string }[] = [
  { id: "taxes", label: "Taxes are the main problem" },
  { id: "repairs", label: "Repairs and taxes" },
  { id: "repairs-and-support", label: "Repairs, taxes, and living support" },
];

function ModelPage() {
  const [saved, setSaved] = useLocalState<UnderwriteForm>("lhc-form-v1", INITIAL_FORM);
  const form = normalizeForm(saved);
  const set = (patch: Partial<UnderwriteForm>) => setSaved({ ...form, ...patch });
  const result = projectHome(toInputs(form));
  const base = result.base;

  const [picks, setPicks] = useState<Record<string, RepairPick>>(() =>
    Object.fromEntries(REPAIR_LINES.map((line) => [line.id, "none" as RepairPick])),
  );

  const tone = result.decision === "stop" ? "stop" : result.decision === "subsidy" ? "subsidy" : "proceed";
  const decisionTitle =
    result.decision === "stop"
      ? "Do not enroll on these facts"
      : result.decision === "subsidy"
        ? "Only with a named subsidy"
        : "Plausible on paper — still not a legal opinion";

  return (
    <Shell>
      <PageTitle
        kicker="Single-house test"
        title="Underwrite the promise before anyone is grateful."
        lede="Sex is not an input. The base case blends the Social Security male and female period life expectancies so this tool does not price women out. The long-life case uses the longer expectancy, stretched further, as a reserve test — a reason to fund a reserve, not a reason to turn someone away."
      />

      <div className="@container">
      <div className="grid items-start gap-8 @3xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        <form
          className="order-2 space-y-6 @3xl:order-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className="min-h-11 border border-line bg-surface px-3 text-left text-sm hover:border-pine"
                onClick={() => setSaved(preset.form)}
              >
                <span className="block font-semibold">{preset.label}</span>
                <span className="block text-xs text-muted">{preset.detail}</span>
              </button>
            ))}
          </div>

          <fieldset className="space-y-3">
            <legend className="font-serif text-xl">The house and the person</legend>
            <Field label="Age" value={form.age} onChange={(age) => set({ age })} />
            <label className="block">
              <span className="text-sm font-medium">Primary gap</span>
              <select
                className="mt-1 min-h-11 w-full border border-line bg-surface px-3"
                value={form.primaryNeed}
                onChange={(e) => set({ primaryNeed: e.target.value as PrimaryNeed })}
              >
                {NEEDS.map((need) => (
                  <option key={need.id} value={need.id}>
                    {need.label}
                  </option>
                ))}
              </select>
            </label>
            <Field label="Value as it sits" hint="Distressed, not the renovated comparable." value={form.asIsValue} onChange={(asIsValue) => set({ asIsValue })} suffix="$" />
            <Field label="Value after a finished restoration, today's dollars" value={form.postRehabValue} onChange={(postRehabValue) => set({ postRehabValue })} suffix="$" />
            <Field label="Hold for this many years" hint="0 uses the blended life expectancy." value={form.holdingOverride} onChange={(holdingOverride) => set({ holdingOverride })} />
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-serif text-xl">Cash at the start</legend>
            <Field label="Tax arrears and redemption" value={form.taxArrears} onChange={(taxArrears) => set({ taxArrears })} suffix="$" />
            <Field label="Initial rehab" value={form.initialRehab} onChange={(initialRehab) => set({ initialRehab })} suffix="$" />
            <Field label="Accessibility" value={form.accessibility} onChange={(accessibility) => set({ accessibility })} suffix="$" />
            <Field
              label="Raised garden"
              hint="Waist-high beds, tested clean soil, a path, and a seat. Anything neighbors pay the owner is not entered here."
              value={form.gardenCost}
              onChange={(gardenCost) => set({ gardenCost })}
              suffix="$"
            />
            <Field label="Counsel, title, recording" value={form.legalCost} onChange={(legalCost) => set({ legalCost })} suffix="$" />
          </fieldset>

          <details className="border border-line bg-surface p-3">
            <summary className="min-h-11 cursor-pointer font-medium">Repair range builder</summary>
            <p className="mt-2 text-xs text-muted">
              Chicago-south-suburban planning ranges for a small pre-1978 house, in 2026 dollars. Not bids. Foundation
              and hazards stay at “none” until an inspection says otherwise.
            </p>
            <ul className="mt-3 space-y-3">
              {REPAIR_LINES.map((line) => (
                <li key={line.id}>
                  <span className="text-sm font-medium">{line.label}</span>
                  <span className="block text-xs text-muted">{line.note}</span>
                  <select
                    className="mt-1 min-h-11 w-full border border-line bg-paper px-2 text-sm"
                    value={picks[line.id] ?? "none"}
                    onChange={(e) => setPicks({ ...picks, [line.id]: e.target.value as RepairPick })}
                  >
                    <option value="none">Not in scope</option>
                    <option value="low">Low · {money(line.low)}</option>
                    <option value="mid">Mid · {money(line.mid)}</option>
                    <option value="high">High · {money(line.high)}</option>
                  </select>
                </li>
              ))}
            </ul>
            <p className="nums mt-3 text-sm">Selected scope {money(repairTotal(picks))}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                className="min-h-11 bg-pine px-3 text-sm font-semibold text-surface"
                onClick={() => set({ initialRehab: repairTotal(picks) })}
              >
                Use as rehab cost
              </button>
              {(
                [
                  ["Light access", ACCESS_PRESETS.light],
                  ["Accessible bath", ACCESS_PRESETS.bath],
                  ["Broader access", ACCESS_PRESETS.full],
                ] as const
              ).map(([label, amount]) => (
                <button
                  key={label}
                  type="button"
                  className="min-h-11 border border-line px-3 text-sm"
                  onClick={() => set({ accessibility: amount })}
                >
                  {label}
                </button>
              ))}
            </div>
          </details>

          <fieldset className="space-y-3">
            <legend className="font-serif text-xl">Every year the owner is alive</legend>
            <Field label="Property tax" value={form.annualTax} onChange={(annualTax) => set({ annualTax })} suffix="$" />
            <Field label="Living support" hint="Groceries, rides, housework. Not nursing care." value={form.annualServices} onChange={(annualServices) => set({ annualServices })} suffix="$ / yr" />
            <Field label="Maintenance" value={form.annualMaintenance} onChange={(annualMaintenance) => set({ annualMaintenance })} suffix="$" />
            <Field label="Insurance" value={form.annualInsurance} onChange={(annualInsurance) => set({ annualInsurance })} suffix="$" />
            <Field label="Admin charged to this house" value={form.annualAdmin} onChange={(annualAdmin) => set({ annualAdmin })} suffix="$" />
            <Field label="One mid-stay capital repair" hint="Charged halfway through, inflated. 0 if you already priced it up front." value={form.midlifeCapex} onChange={(midlifeCapex) => set({ midlifeCapex })} suffix="$" />
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-serif text-xl">Rates</legend>
            <Field label="Cost inflation" value={form.costInflationPct} onChange={(costInflationPct) => set({ costInflationPct })} suffix="%" />
            <Field label="Home appreciation" value={form.appreciationPct} onChange={(appreciationPct) => set({ appreciationPct })} suffix="%" />
            <Field label="Affordable-price discount" hint="Sold this far under the then-market value." value={form.affordableDiscountPct} onChange={(affordableDiscountPct) => set({ affordableDiscountPct })} suffix="%" />
            <Field label="Selling costs" value={form.sellingCostPct} onChange={(sellingCostPct) => set({ sellingCostPct })} suffix="%" />
            <Field label="Discount rate" hint="Patient capital. Not a venture return." value={form.discountRatePct} onChange={(discountRatePct) => set({ discountRatePct })} suffix="%" />
            <Field label="Deferral interest, illustrative" hint="Compared with the Senior Citizens tax deferral. Confirm the statute." value={form.deferralRatePct} onChange={(deferralRatePct) => set({ deferralRatePct })} suffix="%" />
          </fieldset>
        </form>

        <div className="order-1 space-y-4 @3xl:order-2">
          <Callout tone={tone} title={decisionTitle}>
            <p>
              Blended expectancy {num(result.leBlend, 1)} years (male {num(result.leMale, 1)}, female{" "}
              {num(result.leFemale, 1)}). Base hold {result.baseYears} years. Short case {result.shortYears}. Long-life
              reserve {result.longYears}.
            </p>
          </Callout>

          <dl className="grid grid-cols-2 gap-px border border-line bg-line">
            {[
              ["Nominal result", money(base.nominalNet), base.nominalNet < 0],
              ["Present value", money(base.npv), base.npv < 0],
              ["Cash tied up", money(Math.abs(base.cashTrough)), false],
              ["Net at sale", money(base.netProceeds), false],
              ["All-in cost", money(base.totalCost), false],
              ["Given to next buyer", money(base.affordabilityGift), false],
            ].map(([label, value, bad]) => (
              <div key={String(label)} className="bg-surface p-3">
                <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
                <dd className={`nums mt-1 font-serif text-2xl ${bad ? "text-loss" : "text-ink"}`}>{value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <h2 className="font-serif text-xl">Cash, year by year</h2>
            <p className="text-sm text-muted">Red leaves. Green is the sale year, net of that year’s costs.</p>
            <div className="mt-2 border border-line bg-surface p-2">
              <CashChart rows={base.yearly.map((row) => ({ year: row.year, net: Math.round(row.net) }))} />
            </div>
          </div>

          <div className="overflow-x-auto border border-line bg-surface">
            <table className="data">
              <thead>
                <tr>
                  <th>Case</th>
                  <th className="num">Years</th>
                  <th className="num">Nominal</th>
                  <th className="num">Present value</th>
                </tr>
              </thead>
              <tbody>
                {result.scenarios.map((scenario) => (
                  <tr key={scenario.id}>
                    <td>{scenario.label}</td>
                    <td className="num">{scenario.years}</td>
                    <td className={`num ${scenario.nominalNet < 0 ? "text-loss" : ""}`}>{money(scenario.nominalNet)}</td>
                    <td className={`num ${scenario.npv < 0 ? "text-loss" : ""}`}>{money(scenario.npv)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border border-line bg-surface p-4 text-sm">
            <h2 className="font-serif text-lg">Estate reconciliation</h2>
            <p className="mt-2 text-ink-soft">
              {base.estateReconciliation > 0
                ? `Expected nominal surplus is ${money(base.nominalNet)}. The design pays half, ${money(base.estateReconciliation)}, to the estate or a person the owner names, so the organization does not keep a windfall. The other half stays in the reserve. The affordable-price discount, ${money(base.affordabilityGift)}, is a gift to the next family and has to be described that way — it is not a benefit to the elder.`
                : "There is no nominal surplus, so there is nothing to reconcile back to the estate. The honest sentence is that this house needs subsidy, not that the heirs are being enriched."}
            </p>
            <h2 className="mt-4 font-serif text-lg">Tax deferral instead</h2>
            <p className="mt-2 text-ink-soft">
              Deferring the tax bill at {pct(result.inputs.deferralRate, 0)} compounded, illustratively, builds a
              balance of about {money(result.deferralBalance)} over {result.baseYears} years. The house as it sits is
              valued at {money(result.inputs.asIsValue)}. If those two numbers are far apart and the building is sound,
              do not trade the remainder for help with the bill.
            </p>
          </div>

          <ul className="space-y-2">
            {result.gates.map((gate) => (
              <li key={gate.text}>
                <Callout
                  tone={gate.level === "pass" ? "note" : gate.level === "caution" ? "note" : gate.level}
                  title={gate.level === "pass" ? "Always" : gate.level === "caution" ? "Caution" : gate.level === "stop" ? "Stop" : "Subsidy"}
                >
                  {gate.text}
                </Callout>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </Shell>
  );
}
