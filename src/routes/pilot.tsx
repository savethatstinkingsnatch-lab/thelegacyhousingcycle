import { PageTitle, Shell } from "@/components/shell";
import { useLocalState } from "@/lib/use-local-state";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pilot")({
  head: () => ({ meta: [{ title: "Will County pilot · Legacy Housing Cycle" }] }),
  component: PilotPage,
});

const FACTS = [
  ["Population", "712,253", "Census Bureau estimate, July 1, 2025."],
  ["Age 65 and over", "16.7%", "Census QuickFacts. Applied to that population, on the order of 119,000 people — an estimate, not a count of homeowners."],
  ["Owner-occupied units", "82.8%", "Share of housing units, 2020–2024. This is not the senior homeownership rate."],
  ["Median owner-occupied value", "$319,600", "Census QuickFacts, 2020–2024. Pulled up by newer suburbs."],
  ["Owner costs, no mortgage", "$971 / month", "Median selected monthly owner costs without a mortgage, 2020–2024. Taxes and insurance do not end when the loan does."],
  ["Effective property tax", "About 2.2%", "County compilations of Census data put the median bill near $7,173 and the effective rate near 2.24% — more than double the national rate near 0.9%. Confirm the parcel."],
  ["Joliet market, late 2025", "About $256,000", "A private compilation of recorded sales (Will County Gazette / BlockShopper), median tax about $5,500. Not an assessor statistic. The model’s $250,000 restored value sits here on purpose."],
];

const MARKETS = [
  { id: "will", name: "Will County", note: "Pilot. Older stock in Joliet, Crest Hill, Lockport, University Park, Wilmington, and unincorporated areas — not new subdivision belts." },
  { id: "kendall", name: "Kendall County", note: "Adjacent. Do not enter until Will County has a closed audit and counsel memo." },
  { id: "grundy", name: "Grundy County", note: "More rural parcels. USDA repair aid may actually apply. Different price levels." },
  { id: "kankakee", name: "Kankakee County", note: "Same rule: local tax sale practice and a local elder-law panel before any deed." },
  { id: "cook", name: "Southern Cook County", note: "Higher complexity, different assessment system. A later phase, if ever. Not a shortcut." },
];

const STATUSES = ["Not started", "Studying", "Counsel review", "Not a fit"] as const;

function PilotPage() {
  const [status, setStatus] = useLocalState<Record<string, string>>("lhc-markets-v1", {
    will: "Studying",
    kendall: "Not started",
    grundy: "Not started",
    kankakee: "Not started",
    cook: "Not started",
  });

  return (
    <Shell>
      <PageTitle
        kicker="Pilot geography"
        title="Start in Will County, where the tax bill outlives the mortgage."
        lede="Illinois sells unpaid property taxes. The owner can still lose the house after a redemption period measured in years, and the penalties for waiting are severe. Will County is a fair first test: high ownership, high taxes, a large older population, and housing stock that actually needs roofs — not a national rollout drawn on a map."
      />

      <div className="overflow-x-auto border border-line bg-surface">
        <table className="data">
          <thead>
            <tr>
              <th>Fact</th>
              <th>Figure</th>
              <th>How to read it</th>
            </tr>
          </thead>
          <tbody>
            {FACTS.map(([fact, figure, how]) => (
              <tr key={fact}>
                <td className="font-medium">{fact}</td>
                <td className="nums whitespace-nowrap">{figure}</td>
                <td className="text-sm text-ink-soft">{how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-10 max-w-3xl space-y-4 text-ink-soft">
        <h2 className="font-serif text-2xl text-ink">How a house is actually lost here</h2>
        <p>
          Will County mails real-estate tax bills in the spring. In the 2025 collection cycle, bills went out around
          May 1, the first installment was due June 2, and the treasurer’s calendar set the annual tax sale for
          December 2. Dates move. The rhythm does not: two installments, then publication, then a sale of the unpaid
          tax to an investor.
        </p>
        <p>
          The buyer receives a tax certificate, not a deed. The owner redeems through the Will County Clerk, in full,
          in certified funds — the clerk does not take a partial payment. For certificates issued on or after July 10,
          2026, the standard redemption period is three years; certificates issued from January 1, 2024 through July 9,
          2026 generally ran 30 months. Vacant non-farm property, commercial property, and buildings with seven or more
          residential units are shorter. Penalty bids are charged per six-month period, so waiting is much more
          expensive than the original bill.
        </p>
        <p>
          After <span className="text-ink">Tyler v. Hennepin County</span> (2023), Illinois changed the end of the
          process. Public Act 104-0553 points a finished redemption toward a judicial tax-deed auction, with surplus
          above the tax debt returned to the former owner. That reform matters. It does not keep a person housed, and
          it does not repair a failed roof.
        </p>
        <h2 className="font-serif text-2xl text-ink">Exemptions to use before any deed</h2>
        <p>
          A general homestead exemption and an additional senior homestead exemption reduce equalized assessed value,
          commonly discussed at $8,000 of EAV each. Confirm the current maximum with the Will County Supervisor of
          Assessments; the statute is amended more often than brochures are.
        </p>
        <p>
          The Low-Income Senior Citizens Assessment Freeze (35 ILCS 200/15-172), as amended by Public Act 104-0452
          (signed December 12, 2025), phases the household income limit from $65,000 (tax year 2025, payable 2026,
          using 2024 income) to $75,000, $77,000, and then $79,000. The freeze holds the assessed value. It does not
          pay a bill that is already delinquent.
        </p>
        <p>
          The Senior Citizens Real Estate Tax Deferral Act (320 ILCS 30/) lets a qualifying owner 65 or older defer
          taxes, within the money the state revolving fund actually has, and repay later with statutory interest. The
          income schedule matches the freeze’s step-up. A lien comes back from the estate or a sale. The owner keeps
          the equity. For a sound house whose only problem is the bill, deferral is the ethical default. The
          underwriting screen is built to say so.
        </p>
        <h2 className="font-serif text-2xl text-ink">Pilot shape</h2>
        <p>
          Fifteen houses over three enrollment years. Five years of audited operation before any second county. One
          homeowner advocate, one construction coordinator, finance and compliance, and an executive who can be fired
          by the board. No enrollment from a purchased list of delinquent taxpayers. Referrals from township
          assessors, the clerk’s redemption window, AgeGuide and its providers, pastors, and clinics — and only when
          the owner asks.
        </p>
        <p>
          Success for the pilot is not “fifteen deeds.” It is: every enrolled person still housed, every tax bill
          paid, every promised visit done, zero Adult Protective Services findings of financial exploitation, an
          independent audit, and a published decision on whether unit economics justified a second cohort.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Expansion board</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          Saved only in this browser. Mark a county when someone has actually started the work. “Not a fit” is a
          successful outcome.
        </p>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {MARKETS.map((market) => (
            <li key={market.id} className="grid gap-3 py-4 md:grid-cols-[minmax(0,1fr)_12rem] md:items-center">
              <div>
                <h3 className="font-medium">{market.name}</h3>
                <p className="text-sm text-ink-soft">{market.note}</p>
              </div>
              <label className="block text-sm">
                <span className="sr-only">Status for {market.name}</span>
                <select
                  className="min-h-11 w-full border border-line bg-surface px-2"
                  value={status[market.id] ?? "Not started"}
                  onChange={(e) => setStatus({ ...status, [market.id]: e.target.value })}
                >
                  {STATUSES.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </li>
          ))}
        </ul>
      </section>
    </Shell>
  );
}
