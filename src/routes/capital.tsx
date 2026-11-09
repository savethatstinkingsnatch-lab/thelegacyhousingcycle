import { BalanceChart } from "@/components/charts";
import { Field } from "@/components/field";
import { Callout, PageTitle, Shell } from "@/components/shell";
import { money } from "@/lib/format";
import { INITIAL_FORM, normalizeForm, toInputs, type UnderwriteForm } from "@/lib/form";
import { DEFAULT_PORTFOLIO, DEFAULT_STAFF, projectHome, projectPortfolio, staffAnnual, type PortfolioInputs, type StaffLine } from "@/lib/model";
import { useLocalState } from "@/lib/use-local-state";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/capital")({
  head: () => ({ meta: [{ title: "Capital · Legacy Housing Cycle" }] }),
  component: CapitalPage,
});

type PortForm = {
  homes: number;
  enrollYears: number;
  benefitsPct: number;
  overhead: number;
  openingCapital: number;
  staff: StaffLine[];
};

const INITIAL_PORT: PortForm = {
  homes: DEFAULT_PORTFOLIO.homes,
  enrollYears: DEFAULT_PORTFOLIO.enrollYears,
  benefitsPct: DEFAULT_PORTFOLIO.benefitsLoad * 100,
  overhead: DEFAULT_PORTFOLIO.overhead,
  openingCapital: DEFAULT_PORTFOLIO.openingCapital,
  staff: DEFAULT_STAFF,
};

function CapitalPage() {
  const [savedHome] = useLocalState<UnderwriteForm>("lhc-form-v1", INITIAL_FORM);
  const homeInputs = toInputs(normalizeForm(savedHome));
  const home = projectHome(homeInputs);
  const [saved, setSaved] = useLocalState<PortForm>("lhc-port-v1", INITIAL_PORT);
  const form: PortForm = {
    ...INITIAL_PORT,
    ...saved,
    staff: saved?.staff?.length ? saved.staff : DEFAULT_STAFF,
  };
  const set = (patch: Partial<PortForm>) => setSaved({ ...form, ...patch });

  const portfolio: PortfolioInputs = {
    homes: form.homes,
    enrollYears: form.enrollYears,
    staff: form.staff,
    benefitsLoad: form.benefitsPct / 100,
    overhead: form.overhead,
    openingCapital: form.openingCapital,
  };
  const book = projectPortfolio(homeInputs, portfolio);
  const staff = staffAnnual(portfolio);
  const short = book.minCash < book.reserveFloor;

  return (
    <Shell>
      <PageTitle
        kicker="Portfolio liquidity"
        title="Staff is the expensive part. The houses do not arrive pre-paid."
        lede="Every home is assumed to live exactly the blended life expectancy and then sell. That is conservative on cash: nobody dies early and refills the account. It is not a mortality forecast. The house-level assumptions are whatever you last saved in underwriting."
      />

      <Callout tone={short ? "subsidy" : "proceed"} title={short ? "This opening balance runs through the reserve" : "The reserve holds on this opening balance"}>
        <p>
          Lowest cash is {money(book.minCash)} in year {book.minCashYear}. The policy floor — one year of today’s staff
          plus one year of carrying costs on the full book — is {money(book.reserveFloor)}. Recommended opening capital
          is {money(book.recommendedCapital)}.
        </p>
      </Callout>

      <p className="mt-4 text-sm text-muted">
        Using the saved house: age {home.inputs.age}, living support {money(home.inputs.annualServices)} a year, rehab{" "}
        {money(home.inputs.initialRehab)}, nominal result {money(home.base.nominalNet)}, present value {money(home.base.npv)}.{" "}
        <Link to="/model" className="font-semibold text-pine">
          Change the house
        </Link>
        .
      </p>

      <div className="@container mt-8">
      <div className="grid items-start gap-8 @3xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Field label="Houses in the pilot" value={form.homes} onChange={(homes) => set({ homes })} />
          <Field label="Years to enroll them" value={form.enrollYears} onChange={(enrollYears) => set({ enrollYears })} />
          <Field label="Opening capital" value={form.openingCapital} onChange={(openingCapital) => set({ openingCapital })} suffix="$" />
          <button
            type="button"
            className="min-h-11 w-full bg-pine px-3 text-sm font-semibold text-surface"
            onClick={() => set({ openingCapital: Math.round(book.recommendedCapital) })}
          >
            Use recommended opening capital
          </button>
          <Field label="Benefits and payroll load" value={form.benefitsPct} onChange={(benefitsPct) => set({ benefitsPct })} suffix="%" />
          <Field label="Audit, insurance, counsel, occupancy" value={form.overhead} onChange={(overhead) => set({ overhead })} suffix="$ / yr" />
          <fieldset className="space-y-3 border border-line bg-surface p-3">
            <legend className="px-1 font-serif text-lg">Salaries, before load</legend>
            {form.staff.map((line, index) => (
              <Field
                key={line.role}
                label={line.role}
                value={line.pay}
                suffix="$"
                onChange={(pay) => {
                  const staffLines = form.staff.map((item, i) => (i === index ? { ...item, pay } : item));
                  set({ staff: staffLines });
                }}
              />
            ))}
            <p className="text-sm text-ink-soft">Loaded staff and overhead this year: {money(staff)}.</p>
          </fieldset>
        </div>

        <div className="space-y-4">
          <div className="border border-line bg-surface p-3">
            <h2 className="font-serif text-xl">Cash balance if nobody dies early</h2>
            <BalanceChart rows={book.years.map((row) => ({ year: row.year, cash: Math.round(row.cash) }))} />
          </div>
          <dl className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
            {[
              ["Nominal result, whole book", money(book.nominalNet)],
              ["Staff over the whole run", money(book.staffBill)],
              ["Sale proceeds", money(book.totalIn)],
              ["Houses modeled", String(book.homes)],
              ["Years each is held", String(book.holding)],
              ["Surplus per house per year", money(book.perHomeAnnualSurplus)],
            ].map(([label, value]) => (
              <div key={label} className="bg-surface p-3">
                <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
                <dd className="nums mt-1 font-serif text-xl">{value}</dd>
              </div>
            ))}
          </dl>
          <Callout tone="note" title="Can more houses pay the staff?">
            <p>
              {book.homesToCarryStaff == null
                ? "No. Each house in this case loses money in nominal dollars. A larger identical book loses more. Philanthropy has to fund the gap, or the promise has to get narrower, before expansion is responsible."
                : `In a nominal steady state, about ${book.homesToCarryStaff} houses with this exact surplus would cover today’s staff bill. Read that carefully. It ignores the discount rate. If present value per house is still negative, even that larger book slowly consumes patient capital. It also assumes every future house looks like this one, which they will not.`}
            </p>
          </Callout>
        </div>
      </div>

      <section className="mt-12 max-w-3xl space-y-4 text-ink-soft">
        <h2 className="font-serif text-2xl text-ink">Where the money is allowed to come from</h2>
        <p>
          Pilot form: an Illinois not-for-profit corporation seeking 501(c)(3) status, with a title-holding subsidiary
          so a lawsuit about one house does not automatically reach the others. The Illinois Charitable Trust Act gives
          the Attorney General a real oversight hook that a for-profit remainder buyer does not have. No equity
          investors in the pilot. A company that acquires seniors’ remainders in order to pay shareholders is the
          shape this project exists to avoid.
        </p>
        <p>
          Repayable capital, if any, is a program-related investment or a CDFI loan subordinated to a funded service
          reserve. The loan agreement has to say, in language a judge can enforce, that the lender cannot cure a
          default by cutting groceries, rides, or tax payments promised to someone in a life estate. True
          bankruptcy-remoteness is a legal question, not a slogan. The life estate protects occupancy even if the
          organization fails. It does not protect the service contract. That is why the reserve and a named successor
          charity exist.
        </p>
        <p>
          Grants worth pursuing, without pretending any are awarded: operating support from foundations that already
          fund aging, housing, and workforce in the Chicago region; Illinois Housing Development Authority home-repair
          programs when the household is income-eligible and the grantor allows a remainder to be recorded (do not
          assume they do — the October 2025 Home Repair and Accessibility Program round offered up to $50,000 a house
          for owners at or below 80 percent of area median income, through approved local administrators); Community
          Development Block Grant housing rehabilitation through a municipality or Will County, via the Department of
          Commerce and Economic Opportunity, again only if stacking with a remainder is permitted; Federal Home Loan
          Bank of Chicago programs sponsored by a member bank; a CDFI such as IFF or a similar regional lender for the
          recoverable rehab slice.
        </p>
        <p>
          USDA Section 504 repair loans and the small grant for owners 62 and older are real, and they are limited to
          rural-eligible areas and very low incomes. Most of Joliet, Bolingbrook, and Plainfield will not qualify.
          Check the parcel. Do not underwrite the pilot as if USDA were a countywide source. Low-Income Housing Tax
          Credits are the wrong tool; they are a rental production program.
        </p>
        <p>
          What a for-profit or “hybrid” adds: speed, and the temptation to price the remainder for a return. If a
          later book needs more than PRI capital can supply, the safeguard is a charitable owner of the remainder and
          a capped, subordinated loan — not a sale of the charity’s purpose. Benefit-corporation status is not a
          substitute for a board that can be sued for abandoning the elders.
        </p>
      </section>
      </div>
    </Shell>
  );
}
