import { Callout, PageTitle, Shell } from "@/components/shell";
import { money } from "@/lib/format";
import { DEFAULT_HOME, DEFAULT_PORTFOLIO, projectHome, projectPortfolio, staffAnnual } from "@/lib/model";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "The Legacy Housing Cycle" }] }),
  component: Brief,
});

const STEPS = [
  { n: "01", title: "Protect", text: "An older owner stays home for life, with taxes and the unsafe conditions handled." },
  { n: "02", title: "Restore", text: "Paid local trades make the house safe and the yard clean, including a raised garden if the owner wants one and can no longer work the ground." },
  { n: "03", title: "Support", text: "Promised help is capped in writing. If the owner invites neighbors to pick and pay, that money stays in the owner's hands. It is not a program receipt." },
  { n: "04", title: "Renew", text: "After death, the family is given time. Belongings go with them. The garden stays with the house." },
  { n: "05", title: "Reinvest", text: "A younger household or a veteran buys a clean house below a windfall price. What the sale cannot return is raised as subsidy." },
];

function Brief() {
  const home = projectHome(DEFAULT_HOME);
  const book = projectPortfolio(DEFAULT_HOME, DEFAULT_PORTFOLIO);
  const staff = staffAnnual(DEFAULT_PORTFOLIO);

  return (
    <Shell>
      <PageTitle
        kicker="Will County pilot · feasibility"
        title="Keep the elder. Restore the house. Pay the worker. House the next owner."
        lede="The Legacy Housing Cycle is a proposed charity: voluntary help so an older homeowner can stay in a safe, clean house they already paid for, and later an attainable house — garden included — for a younger household or a veteran. This briefing says where that idea holds, and where it loses money."
      />

      <Callout tone="subsidy" title="The default illustration is not self-funding">
        <p>
          A Joliet-area house restored to about {money(DEFAULT_HOME.postRehabValue)}, with moderate repairs and $600 a
          month of living support, loses about {money(Math.abs(home.base.nominalNet))} in nominal dollars over a blended
          life expectancy of {home.baseYears} years, and about {money(Math.abs(home.base.npv))} in present value. A
          staffed pilot of {book.homes} such houses needs on the order of {money(book.recommendedCapital)} in opening
          capital so the reserve never runs dry. Most of that is people and time, not lumber.
        </p>
      </Callout>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Mission</h2>
        <p className="measure mt-3 text-ink-soft">
          Save the older homeowner from a tax sale or an unsafe, unclean house. People who spent a working life paying for a home have earned the right to stay in it, and to have a yard they can still use when their knees and their balance are gone. Employ American trades at real wages. Leave the next owner — a younger household, or a veteran — that same clean house, priced to be lived in, not flipped. Repeat only when the books can carry the promise. A wider Education Revolution may someday earn in order to give. This housing work is one of the expensive gifts, not the mint.
        </p>
      </section>

      <ol className="mt-10 divide-y divide-line border-y border-line">
        {STEPS.map((step) => (
          <li key={step.n} className="grid gap-2 py-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-4">
            <span className="nums font-serif text-xl text-copper">{step.n}</span>
            <div>
              <h3 className="font-serif text-xl">{step.title}</h3>
              <p className="mt-1 text-ink-soft">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="border border-line bg-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Per house, default case</p>
          <p className="nums mt-2 font-serif text-3xl text-loss">{money(home.base.nominalNet)}</p>
          <p className="mt-2 text-sm text-ink-soft">
            Nominal result after an attainable resale. Cash tied up until then: {money(Math.abs(home.base.cashTrough))}.
          </p>
        </article>
        <article className="border border-line bg-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Pilot reserve, {book.homes} homes</p>
          <p className="nums mt-2 font-serif text-3xl">{money(book.recommendedCapital)}</p>
          <p className="mt-2 text-sm text-ink-soft">
            Opening capital that keeps one year of staff and carrying costs ({money(book.reserveFloor)}) above zero.
            Central staff alone starts near {money(staff)} a year.
          </p>
        </article>
        <article className="border border-line bg-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">What scale does not fix</p>
          <p className="mt-2 font-serif text-3xl">Losses add</p>
          <p className="mt-2 text-sm text-ink-soft">
            Identical losing houses do not become a surplus when you own more of them. Growth is allowed only after the
            single-house test clears or a grant is named for the gap.
          </p>
        </article>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="font-serif text-2xl">Who this is for</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li className="border border-line bg-surface p-4">
            <h3 className="font-serif text-lg">Homeowners and families</h3>
            <p className="mt-1 text-sm text-ink-soft">
              What would be promised, what would be given up, and which easier remedies come first.
            </p>
            <Link to="/safeguards" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-pine">
              Open safeguards
            </Link>
          </li>
          <li className="border border-line bg-surface p-4">
            <h3 className="font-serif text-lg">Trades and apprentices</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Paid work, licenses, and a path into the Education Revolution — not unpaid labor.
            </p>
            <Link to="/learn" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-pine">
              Open education
            </Link>
          </li>
          <li className="border border-line bg-surface p-4">
            <h3 className="font-serif text-lg">Funders and officials</h3>
            <p className="mt-1 text-sm text-ink-soft">
              A Will County pilot with a capital number, a loss map, and an oversight design.
            </p>
            <Link to="/capital" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-pine">
              Open capital
            </Link>
          </li>
          <li className="border border-line bg-surface p-4">
            <h3 className="font-serif text-lg">The operating desk</h3>
            <p className="mt-1 text-sm text-ink-soft">
              A sample book of files, work orders, and duties. Composite, not real people.
            </p>
            <Link to="/work" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-pine">
              Open operations
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-sm text-muted">
        Read the full argument in the <Link to="/blueprint" className="font-semibold text-pine">blueprint</Link>, or change
        the assumptions in <Link to="/model" className="font-semibold text-pine">underwriting</Link>. The numbers on this
        page are the default Joliet-area case, age {DEFAULT_HOME.age}, blended Social Security life expectancy.
      </p>
    </Shell>
  );
}
