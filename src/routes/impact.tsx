import { PageTitle, Shell } from "@/components/shell";
import { HOMES, SAMPLE_FUNDS, SEED_DUTIES, SEED_ORDERS, type Duty, type WorkOrder } from "@/lib/desk";
import { money } from "@/lib/format";
import { useLocalState } from "@/lib/use-local-state";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impact")({
  head: () => ({ meta: [{ title: "Impact · Legacy Housing Cycle" }] }),
  component: ImpactPage,
});

function ImpactPage() {
  const [saved] = useLocalState<{ orders: WorkOrder[]; duties: Duty[] }>("lhc-desk-v1", {
    orders: SEED_ORDERS,
    duties: SEED_DUTIES,
  });
  const orders = saved?.orders?.length ? saved.orders : SEED_ORDERS;
  const duties = saved?.duties?.length ? saved.duties : SEED_DUTIES;

  const enrolled = HOMES.filter((home) => home.phase === "Enrolled" || home.phase === "Maintaining").length;
  const inCounsel = HOMES.filter((home) => home.phase === "Counsel" || home.phase === "Inquiry").length;
  const complete = orders.filter((order) => order.status === "complete");
  const completeDollars = complete.reduce((sum, order) => sum + order.amount, 0);
  const openDollars = orders.filter((order) => order.status !== "complete").reduce((sum, order) => sum + order.amount, 0);
  const contractors = new Set(orders.map((order) => order.contractor)).size;
  const apprentices = orders.filter((order) => order.apprentice).length;
  const overdue = duties.filter((duty) => duty.state === "overdue").length;
  const met = duties.filter((duty) => duty.state === "met").length;
  const funds = SAMPLE_FUNDS.reduce((sum, fund) => sum + fund.amount, 0);

  const stats = [
    ["People housed in the illustration", String(enrolled), "Enrolled or maintaining. Inquiry and counsel are not counted as saved."],
    ["Files not yet a deed", String(inCounsel), "Still able to be referred to deferral, a repair grant, or a decline."],
    ["Resales completed", "0", "Correct. Nobody has died in this sample. Do not report future buyers as families helped."],
    ["Paid trade contracts", String(orders.length), `${contractors} firms. Dollars completed ${money(completeDollars)}. Still open ${money(openDollars)}.`],
    ["Crews with a paid apprentice", String(apprentices), "A headcount of seats, not full-time jobs created. Do not multiply by a fake jobs formula."],
    ["Duties met / overdue", `${met} met · ${overdue} overdue`, "Overdue is a failure even when the renovation looks good."],
    ["Sample ledger", money(funds), "Illustrative restricted and subordinated funds. Not raised. Not the capital-page recommendation."],
  ];

  return (
    <Shell>
      <PageTitle
        kicker="Report you could hand a board"
        title="Count what happened. Do not count the hope."
        lede="This report reads the sample operations book on this device. If you advanced a work order or cleared a duty, it is already in the figures. Print it. Label it illustrative if it ever leaves the room."
      />
      <div className="no-print mb-6">
        <button type="button" className="min-h-11 bg-pine px-4 font-semibold text-surface" onClick={() => window.print()}>
          Print this report
        </button>
      </div>
      <div className="overflow-x-auto border border-line bg-surface">
        <table className="data">
          <thead>
            <tr>
              <th>Measure</th>
              <th>Figure</th>
              <th>What it is not</th>
            </tr>
          </thead>
          <tbody>
            {stats.map(([measure, figure, note]) => (
              <tr key={measure}>
                <td className="font-medium">{measure}</td>
                <td className="nums whitespace-nowrap font-semibold">{figure}</td>
                <td className="text-sm text-ink-soft">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="mt-8 max-w-3xl space-y-3 text-ink-soft">
        <h2 className="font-serif text-2xl text-ink">How a real annual report should read</h2>
        <p>
          Homes in which an owner slept, taxes paid on time, redemption dollars paid, visits kept and visits missed,
          complaints opened and closed, Adult Protective Services referrals, dollars to licensed firms in the county,
          apprentice hours paid, subsidy per house against the underwriting gap, and resales only after a closing.
          A national map with pins is not a substitute for the missed-visit line.
        </p>
        <p>
          Economic impact is the contract dollars and the wages, which circulate locally because the firms are local.
          It is not a multiplier pulled from a brochure. If the board wants a multiplier, an economist can build one
          later from actual invoices. Until then the invoice total is the number.
        </p>
      </section>
    </Shell>
  );
}
