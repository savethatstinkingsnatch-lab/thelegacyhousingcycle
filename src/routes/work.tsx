import { PageTitle, Shell } from "@/components/shell";
import { HOMES, NEXT_DUTY, NEXT_STATUS, SAMPLE_FUNDS, SEED_DUTIES, SEED_ORDERS, type Duty, type WorkOrder } from "@/lib/desk";
import { money } from "@/lib/format";
import { useLocalState } from "@/lib/use-local-state";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [{ title: "Operations · Legacy Housing Cycle" }] }),
  component: WorkPage,
});

type Desk = { orders: WorkOrder[]; duties: Duty[] };

const SEED: Desk = { orders: SEED_ORDERS, duties: SEED_DUTIES };

function WorkPage() {
  const [saved, setSaved] = useLocalState<Desk>("lhc-desk-v1", SEED);
  const desk: Desk = {
    orders: saved?.orders?.length ? saved.orders : SEED_ORDERS,
    duties: saved?.duties?.length ? saved.duties : SEED_DUTIES,
  };

  const setOrder = (id: string) => {
    setSaved({
      ...desk,
      orders: desk.orders.map((order) => (order.id === id ? { ...order, status: NEXT_STATUS[order.status] } : order)),
    });
  };
  const setDuty = (id: string) => {
    setSaved({
      ...desk,
      duties: desk.duties.map((duty) => (duty.id === id ? { ...duty, state: NEXT_DUTY[duty.state] } : duty)),
    });
  };

  const committed = desk.orders.reduce((sum, order) => sum + order.amount, 0);
  const finished = desk.orders.filter((order) => order.status === "complete").reduce((sum, order) => sum + order.amount, 0);

  return (
    <Shell>
      <PageTitle
        kicker="Sample book · not real people"
        title="Six composite files, so the desk can be argued with."
        lede="Names, streets, and medical details are deliberately absent. These are Joliet-area composites for testing workflow: phase, a paid trade, a duty that can be missed. Advance a work order or a duty to see the impact report change. It stays in this browser."
      />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm">
        <p className="text-muted">
          Trade commitments {money(committed)}. Completed {money(finished)}.
        </p>
        <button type="button" className="min-h-11 border border-line bg-surface px-3" onClick={() => setSaved(SEED)}>
          Reset sample book
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {HOMES.map((home) => (
          <article key={home.id} className="border border-line bg-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-copper">File {home.id}</p>
            <h2 className="mt-1 font-serif text-xl">
              {home.place} · {home.built}
            </h2>
            <p className="mt-1 text-sm font-medium">{home.phase}</p>
            <p className="mt-2 text-sm text-ink-soft">{home.story}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-10 font-serif text-2xl">Work orders</h2>
      <p className="mt-1 text-sm text-muted">Press the status to advance it. Held means stopped for a reason, not forgotten.</p>
      <div className="mt-3 overflow-x-auto border border-line bg-surface">
        <table className="data">
          <thead>
            <tr>
              <th>File</th>
              <th>Trade</th>
              <th>Contractor</th>
              <th>Scope</th>
              <th className="num">Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {desk.orders.map((order) => (
              <tr key={order.id}>
                <td className="nums">{order.homeId}</td>
                <td>
                  {order.trade}
                  {order.apprentice ? <span className="mt-1 block text-xs text-pine">Paid apprentice on the crew</span> : null}
                </td>
                <td>{order.contractor}</td>
                <td className="text-sm">{order.scope}</td>
                <td className="num">{money(order.amount)}</td>
                <td>
                  <button type="button" className="min-h-11 border border-line px-2 text-sm" onClick={() => setOrder(order.id)}>
                    {order.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 font-serif text-2xl">Duties owed to people, not to buildings</h2>
      <ul className="mt-3 divide-y divide-line border-y border-line">
        {desk.duties.map((duty) => (
          <li key={duty.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
            <div>
              <p className="font-medium">
                File {duty.homeId} · {duty.what}
              </p>
              <p className="text-sm text-muted">{duty.when}</p>
            </div>
            <button
              type="button"
              className={`min-h-11 border px-3 text-sm font-semibold ${duty.state === "overdue" ? "border-loss bg-loss-bg text-loss" : duty.state === "met" ? "border-pine bg-gain-bg text-pine" : "border-line bg-surface"}`}
              onClick={() => setDuty(duty.id)}
            >
              {duty.state}
            </button>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-serif text-2xl">Sample funding ledger</h2>
      <p className="mt-1 max-w-3xl text-sm text-muted">
        Invented balances for this desk, so a board can see restricted versus repayable money. They are not a
        campaign result and they are not the pilot recommendation on the capital page.
      </p>
      <div className="mt-3 overflow-x-auto border border-line bg-surface">
        <table className="data">
          <thead>
            <tr>
              <th>Source</th>
              <th>Character</th>
              <th className="num">Amount</th>
              <th>Rule</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_FUNDS.map((fund) => (
              <tr key={fund.name}>
                <td className="font-medium">{fund.name}</td>
                <td className="text-sm">{fund.kind}</td>
                <td className="num">{money(fund.amount)}</td>
                <td className="text-sm text-ink-soft">{fund.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
