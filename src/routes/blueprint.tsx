import { PageTitle, Shell } from "@/components/shell";
import { money, num, pct } from "@/lib/format";
import { DEFAULT_HOME, DEFAULT_PORTFOLIO, projectHome, projectPortfolio, staffAnnual } from "@/lib/model";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blueprint")({
  head: () => ({ meta: [{ title: "Blueprint · Legacy Housing Cycle" }] }),
  component: BlueprintPage,
});

const TOC = [
  ["summary", "Executive summary"],
  ["mission", "Mission"],
  ["problem", "The problem, locally"],
  ["model", "Operating model"],
  ["economy", "Work and the Education Revolution"],
  ["numbers", "Financial feasibility"],
  ["losses", "Where it loses money"],
  ["law", "Legal and ethical safeguards"],
  ["money", "Form, funding, partners"],
  ["pilot", "Will County pilot"],
  ["nation", "National expansion"],
  ["tool", "What this application is"],
  ["sources", "Sources and assumptions"],
];

function BlueprintPage() {
  const home = projectHome(DEFAULT_HOME);
  const book = projectPortfolio(DEFAULT_HOME, DEFAULT_PORTFOLIO);
  const shelter = projectHome({ ...DEFAULT_HOME, annualServices: 0, primaryNeed: "repairs" });
  const staff = staffAnnual(DEFAULT_PORTFOLIO);
  const base = home.base;

  return (
    <Shell>
      <PageTitle
        kicker="Project blueprint"
        title="A repeating cycle, on the condition that the books are honest."
        lede="Protect an older homeowner, restore the house, pay skilled workers, keep the promises, transfer only what was agreed, sell a sound house at an attainable price, and reinvest. This document is the argument for trying that in Will County, Illinois, and the argument for refusing to scale it if the first books fail."
      />

      <nav className="no-print mb-10 border border-line bg-surface p-4" aria-label="On this page">
        <ol className="grid gap-1 sm:grid-cols-2">
          {TOC.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="inline-flex min-h-11 items-center text-sm text-pine">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="max-w-3xl space-y-10 text-ink-soft">
        <section id="summary" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Executive summary</h2>
          <p>
            Across the country, people who finished paying for a house still lose it, or live in it unsafely, because
            taxes, a roof, and a body do not retire on the same day. Younger households cannot find a sound house at a
            price that matches local wages. Trades need a book of work that is not a single boom. The Legacy Housing
            Cycle is a proposed charitable response: voluntary enrollment, a retained life estate, paid restoration,
            a written service covenant, and a later sale priced below a maximized number, with the proceeds going back
            into the cycle.
          </p>
          <p>
            It is not, on the default facts, a perpetual-motion machine. The default illustration is an 80-year-old
            owner of a Joliet-area house restored to {money(DEFAULT_HOME.postRehabValue)} in today’s dollars. Blended
            Social Security period life expectancy is {num(home.leBlend, 1)} years, modeled as a {home.baseYears}-year
            hold. Upfront cash — arrears, rehab, accessibility, counsel — is {money(base.upfront)}. Lifetime nominal
            cost is about {money(base.totalCost)}. An 8 percent below-market sale, after selling costs, nets about{" "}
            {money(base.netProceeds)}. The house loses about {money(Math.abs(base.nominalNet))} nominally and about{" "}
            {money(Math.abs(base.npv))} in present value at a 4 percent discount rate. Cash of about{" "}
            {money(Math.abs(base.cashTrough))} is tied up until the sale. A long life, modeled at {home.longYears}{" "}
            years, loses about {money(Math.abs(home.scenarios[2].nominalNet))}.
          </p>
          <p>
            Drop the $600-a-month living stipend and the same house shows a nominal surplus of about{" "}
            {money(shelter.base.nominalNet)} and a present value that is still negative, about{" "}
            {money(shelter.base.npv)}. The real estate can nearly carry taxes and a moderate rehab in nominal dollars.
            It does not carry a generous care promise, and it does not carry a professional staff. A 15-house pilot
            with a four-person core and ordinary overhead starts near {money(staff)} a year. Keeping a one-year reserve
            under the default full promise requires opening capital on the order of {money(book.recommendedCapital)}.
            Staff over the life of that book is about {money(book.staffBill)}. Adding identical losing houses makes a
            larger loss.
          </p>
          <p>
            The recommendation is to proceed to legal design and a Will County feasibility review, not to enroll
            anyone, and to split the promise in two: a recoverable shelter cycle (taxes, life-safety rehab,
            maintenance, insurance) and a philanthropic care layer that is never quietly cross-subsidized by the next
            elder’s house. Less extractive public tools — homestead exemptions, the senior assessment freeze, tax
            deferral, repair grants, the Community Care Program — are used first. A transfer is the last structure,
            not the first offer.
          </p>
        </section>

        <section id="mission" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Mission</h2>
          <p>
            Keep older homeowners in the houses they already own, in safe condition, for as long as they live. Pay
            American workers to do that work. Leave the next household a code-compliant house that can last another
            fifty or sixty years if it is maintained. Fund the next house with what the sale honestly returns, and fund
            the rest with money that was given for that purpose. Do not build a reputation on a founder. The
            institution, if it earns one, should be boring, local, and auditable.
          </p>
        </section>

        <section id="problem" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">The problem, stated with Will County facts</h2>
          <p>
            Will County’s population was estimated at 712,253 on July 1, 2025. QuickFacts reports 16.7 percent of
            residents at age 65 or older — on the order of 119,000 people if that share is applied to the estimate,
            which is not the same thing as a count. Owner-occupancy is high: 82.8 percent of housing units in
            2020–2024. The median value of those owner-occupied units was $319,600. Median monthly owner costs for
            units without a mortgage were still $971. The loan can end. The bill does not.
          </p>
          <p>
            Effective property taxes in the county sit near 2.2 percent, with published compilations of Census data
            putting the median bill around $7,173. That is more than double a national effective rate near 0.9
            percent. Joliet, where much of the older stock actually is, trades lower than the county median. A private
            compilation of late-2025 recorded sales put Joliet’s median near $256,000 and the median tax near $5,500.
            The default model uses a $250,000 restored value and a $5,600 tax bill so it describes that city, not
            Frankfort or New Lenox.
          </p>
          <p>
            Illinois collects the unpaid tax by selling it. In the 2025 cycle, Will County mailed bills around May 1,
            set the first installment due June 2, and scheduled the tax sale for December 2. The buyer gets a
            certificate. The owner redeems through the County Clerk, in certified funds, in full. Redemption for
            ordinary residential property runs 30 months on certificates issued from the start of 2024 through July 9,
            2026, and three years on certificates issued on or after July 10, 2026, under Public Act 104-0553. Some
            property types are shorter. The penalty is bid per six-month period, so delay compounds in a way a
            household budget does not survive. After Tyler v. Hennepin County, surplus above the tax debt is supposed
            to return to the former owner. Surplus is not a place to live.
          </p>
          <p>
            None of these public figures count how many older owners are inside a redemption period or under a failing
            roof. That count is the first empirical task of the pilot, done with the Treasurer, the Clerk, and the
            Supervisor of Assessments, without building a marketing list of vulnerable people.
          </p>
        </section>

        <section id="model" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Operating model</h2>
          <p>
            The cycle has five movements, specified on the cycle page. Rescue is intake and the exhaustion of cheaper
            help. Protect is the legal exchange: the owner keeps a life estate, the organization receives the
            remainder, and the services are a covenant with a dollar schedule. Restore is paid construction while the
            person is in the house. Support is taxes, insurance, maintenance, and only the living help that was
            written down, including a raised garden the owner can still reach. If the owner invites neighbors to pick
            and pay, that money is theirs. It is not revenue of the cycle, and it is not in the model. Renew is the
            death process, done slowly: belongings go where the owner directed, the house is left clean, the beds stay
            for the next household, and the house is sold at a published discount to then-market value. Reinvest is a
            rule about cash, not a slogan. Recoverable costs and subordinated debt are paid. Subsidies are not “repaid”
            by squeezing the next enrollment.
          </p>
          <p>
            The life estate is the load-bearing choice. A sale-leaseback can be cancelled in a dispute or a
            bankruptcy in ways a property interest cannot. Personal property is excluded. A spouse joins. An agent
            under a power of attorney cannot create the deal. There is a waiting period after independent counsel.
            If the modeled remainder is worth more than the modeled promises, half of the nominal surplus is payable
            to the estate or a person the owner names. In the default full-promise case that payment is zero, because
            there is no surplus. The rule still has to be in the form, for the houses that do produce one.
          </p>
        </section>

        <section id="economy" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Work, wages, and the Education Revolution</h2>
          <p>
            Each enrolled house is a package of licensed scopes: roof, electrical, plumbing, heating, sometimes
            structure, sometimes a bath that a person can use after a stroke. Those are local invoices. They are not
            automatically “jobs created” in the full-time sense, and this blueprint does not apply a multiplier. The
            honest report is dollars under contract, firms hired, hours paid, and apprentice hours that a state or
            federal program will recognize.
          </p>
          <p>
            The Education Revolution connection is a wage ladder: paid helper, registered apprentice, journeyman,
            and eventually that person’s own bonded firm. Joliet Junior College and the Workforce Investment Board of
            Will County are the institutions to ask. They have not been asked by this document, and they are not
            claimed as partners. Volunteers can bake a casserole. They are not the electrical plan. The next buyer
            gets a short course on taxes, systems, and reserves, so the attainable price is not the start of the same
            deterioration.
          </p>
        </section>

        <section id="numbers" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Financial feasibility</h2>
          <p>
            The model is a deterministic cash-flow sketch. It is inside this application and can be changed. Default
            assumptions, all editable: age 80; as-is value {money(DEFAULT_HOME.asIsValue)}; restored value{" "}
            {money(DEFAULT_HOME.postRehabValue)}; arrears {money(DEFAULT_HOME.taxArrears)}; rehab{" "}
            {money(DEFAULT_HOME.initialRehab)}; accessibility {money(DEFAULT_HOME.accessibility)}; raised garden{" "}
            {money(DEFAULT_HOME.gardenCost)}; legal {money(DEFAULT_HOME.legalCost)}; annual tax{" "}
            {money(DEFAULT_HOME.annualTax)}; living support {money(DEFAULT_HOME.annualServices)}; maintenance {money(DEFAULT_HOME.annualMaintenance)}; insurance {money(DEFAULT_HOME.annualInsurance)}; admin {money(DEFAULT_HOME.annualAdmin)}; cost inflation{" "}
            {pct(DEFAULT_HOME.costInflation, 0)}; appreciation {pct(DEFAULT_HOME.appreciation, 1)}; sale discount{" "}
            {pct(DEFAULT_HOME.affordableDiscount, 0)}; selling costs {pct(DEFAULT_HOME.sellingCost, 0)}; discount rate{" "}
            {pct(DEFAULT_HOME.discountRate, 0)}.
          </p>
          <p>
            Life expectancy is the Social Security Administration period life table for 2023, as used in the 2026
            Trustees Report. At 80 that is 8.50 years for men and 9.82 for women. The base case averages them so the
            tool does not charge women a higher price of admission. The long-life case takes the longer figure and
            stretches it (here, {home.longYears} years) as a reserve test. Individual health is not priced. Race is
            not an input. Cash neighbors pay the owner for produce is omitted on purpose. It is not a program receipt,
            and a garden does not retire the subsidy.
          </p>
          <p>
            Portfolio logic enrolls the houses evenly, inflates rehab and staff from today, charges each house the
            same operating cost path the single-house model uses, and sells at the end of the hold. Opening capital
            of {money(book.recommendedCapital)} is the amount that keeps cash from falling below one year of staff
            plus one year of carrying costs ({money(book.reserveFloor)}) on the default full promise. With zero
            opening capital the trough is {money(book.minCash)}. Change staff, the stipend, or the hold on the capital
            and underwriting pages; do not memorize this paragraph.
          </p>
          <p>
            A shelter-only version of the same house — living support set to zero — is the closest the default market
            comes to a recoverable cycle, and even that fails a 4 percent present-value test by a few thousand
            dollars. Call it “nearly carries the building, does not carry the people.” That is a fundable design if
            the people are funded as people.
          </p>
        </section>

        <section id="losses" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Where the organization loses money</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>The owner lives past the table. The long case on the default house is a six-figure nominal loss.</li>
            <li>The stipend is real. Food, rides, and housework for a decade exceed what a Joliet resale can refund.</li>
            <li>Rehab is a second house. Above roughly half the restored value, the screen says stop. Heavy distress is a grant, or a smaller scope, not a clever acquisition.</li>
            <li>Appreciation disappoints, or the affordable discount and selling costs are honest. Both are features. They are also how a “profitable” pro forma dies.</li>
            <li>Lead, asbestos, or a foundation appears after enrollment. The contingency belongs in the bid, not in hope.</li>
            <li>Central staff is fixed. Fifteen houses do not spread a half-million-dollar operating core into insignificance.</li>
            <li>A tax-sale redemption is discovered late and the penalty has already run for several six-month periods.</li>
            <li>The organization enrolled a sound house that only needed deferral, paid for a remainder it did not need to take, and created a Medicaid problem it then has to unwind.</li>
            <li>A lender’s remedy, or a cash crisis, is allowed to interrupt services. That is not only a loss. It is the harm the reserve exists to prevent.</li>
          </ul>
          <p>
            Safeguard against those losses reaching the elder: do not enroll a failing underwriting without a named
            grant; cap services in the contract and prefund the cap; keep occupancy in a life estate so a cash crisis
            cannot become an eviction; subordinate every lender to the service reserve; name a successor charity;
            review each file annually against the original model; and stop enrollment the quarter the reserve policy
            is breached. Scale is not a safeguard. Scale is an amplifier.
          </p>
        </section>

        <section id="law" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Legal and ethical safeguards</h2>
          <p>
            Participation is voluntary, informed, and slow. Independent counsel for the owner is a condition of
            recording, paid by the organization, with a duty that runs only one direction. The owner receives the
            dollar comparison, the service schedule, and a decline path. Complaints go to an ombudsman who does not
            run construction, and to Adult Protective Services under the Elder Abuse and Neglect Act, 320 ILCS 20/.
            Financial exploitation remains a criminal matter under 720 ILCS 5/17-56 no matter how charitable the
            letterhead. The Consumer Fraud Act and the Home Repair and Remodeling Act apply. The Illinois Attorney
            General’s charitable-trust oversight applies if the organization is a charity, which is the point of that
            form. An annual audit is public in summary: taxes, visits, complaints, trade dollars, subsidy per house.
          </p>
          <p>
            Medicaid is the sharp edge. A transfer for less than fair value during the 60-month look-back can delay
            payment for nursing care. Illinois estate recovery is aimed primarily at the probate estate, which is why
            life estates are sometimes marketed as a planning device. That marketing is exactly the trap. If the
            services and taxes are not defensible compensation for the remainder, the owner may be trading a house for
            a penalty at the moment they need a nursing home. HFS policy, not this blueprint, decides what
            compensation counts. If elder-law counsel cannot write a memo the board is willing to put its name on,
            the pilot does not record deeds. It pays taxes and repairs as grants and forgivable loans, which help
            fewer houses and hurt fewer people.
          </p>
          <p>
            Other open questions, each of them capable of stopping a deed: whether the senior freeze and homestead
            exemptions survive the split of the estate; how title insurance will treat the remainder; joinder of a
            spouse; enforcement of the service covenant by a later guardian; behavior of the successor designation in
            a nonprofit insolvency; whether IHDA or CDBG funds may be spent on a house whose remainder is being
            conveyed; lead-safe work practices on pre-1978 houses; and a resale process that is affordable without
            violating the Fair Housing Act or the Illinois Human Rights Act. None of these are “to be handled by
            operations.” They are preconditions.
          </p>
        </section>

        <section id="money" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Organizational form, funding, and partners</h2>
          <p>
            Form an Illinois not-for-profit, seek 501(c)(3) recognition, and hold title in a subsidiary so one bad
            house is not the whole charity. Do not use a for-profit, an L3C, or a benefit corporation as the owner of
            the remainder during the pilot. Those forms can say the right words and still owe a return. Repayable
            money, if needed for rehab and redemptions, should be a program-related investment or a CDFI loan, capped,
            and contractually junior to services. Foundations in the Chicago region that already fund aging, housing,
            and workforce are the right operating-grant conversation. No foundation is committed, and none should be
            told that resale will retire their grant.
          </p>
          <p>
            Public programs to coordinate, not to raid: senior exemptions and the freeze (35 ILCS 200/), the Senior
            Citizens Real Estate Tax Deferral Act (320 ILCS 30/), IHDA’s Home Repair and Accessibility Program (a
            $15 million announcement in October 2025, awards through local administrators, owners generally at or
            below 80 percent of area median income, repairs up to $50,000 in that round), state CDBG housing
            rehabilitation through a unit of local government, Federal Home Loan Bank of Chicago programs via a member
            bank, the Illinois Community Care Program and AgeGuide for in-home services, weatherization and LIHEAP
            through the local community action network, and USDA Section 504 only on parcels the rural map actually
            includes. Low-income housing tax credits are for rental projects and do not belong in this pro forma.
          </p>
          <p>
            Partners to approach, without implying consent: Will County Treasurer and Clerk, the Supervisor of
            Assessments, township assessors, AgeGuide, senior-service providers already trusted in Joliet, legal aid
            and a private elder-law panel willing to take the independent-counsel role, Joliet Junior College, the
            Workforce Investment Board of Will County, and two or three licensed firms per trade who will bid rather
            than be anointed.
          </p>
        </section>

        <section id="pilot" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Will County pilot</h2>
          <p>
            Geography: older houses in Joliet, Crest Hill, Lockport, University Park, Wilmington, and unincorporated
            pockets with pre-1978 stock. Not the newest subdivisions, where this problem is rarer and the values tell
            a different affordability story. Size: fifteen houses, enrolled over three years, and no sixteenth until
            an independent audit and a counsel memo are in the board book. Referrals come from people and institutions
            the owner already trusts, and only when the owner asks. The first year can legitimately end with zero
            deeds and a stack of deferral referrals. That year is a success if the declines are documented.
          </p>
          <p>
            Capital planning starts from the model’s recommended opening figure and then stress-tests it, rather than
            from a round number chosen because it sounds raisable. A smaller pilot — five houses — lowers the trough
            and does not fix a negative house. It may still be the right legal pilot if counsel wants fewer live
            deeds while the Medicaid question is open. In that case the staff plan has to shrink with it. A full core
            team around five houses is a counseling agency that happens to own remainders, and the grants should be
            raised on those terms.
          </p>
          <p>
            Kill criteria, adopted before fundraising language hardens: any substantiated exploitation finding; a
            quarter in which the service reserve cannot cover contracted stipends; discovery that the Medicaid
            analysis cannot be made defensible; or a second year in which actual rehab costs exceed underwriting by
            more than the contingency and the board cannot say why. Closing the pilot is an acceptable outcome. It is
            preferable to a quiet expansion.
          </p>
        </section>

        <section id="nation" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">National expansion</h2>
          <p>
            Do not nationalize a Will County deed. Tax-sale law, homestead exemptions, Medicaid recovery, and the
            price of a roof are state and local facts. The thing that could travel, after a clean audit, is a
            standard: life estate rather than lease, independent counsel, a public dollar comparison, a service
            reserve senior to debt, paid apprentices, an attainable-price rule, and a decline when deferral or a grant
            will do. The next counties, if the pilot earns them, are neighbors with their own counsel — Kendall,
            Grundy, Kankakee — not a coastal city chosen for a headline.
          </p>
          <p>
            A national organization, if it ever exists, should be a support desk for local charities: underwriting
            tools, model documents, training, and a refusal to own houses three states away. Distant ownership is how
            this idea becomes a portfolio trade. Local ownership is how a missed visit is still a scandal.
          </p>
        </section>

        <section id="tool" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">What this application is</h2>
          <p>
            A briefing and a calculator. The underwriting page tests one house. The capital page tests a book and a
            staff. The operations page is a sample desk of composite files, work orders, and duties, stored in the
            browser, so a board can see what “missed visit” looks like next to a finished roof. The inquiry desk does
            not transmit anything. It is a rehearsal of intake, not intake. There is no enrollment, no account, and no
            claim that a foundation, a county, or a college has joined.
          </p>
          <p>
            Use the <Link to="/model" className="font-semibold text-pine">underwriting screen</Link> before believing
            a sentence in this document. The sentences were generated from the same formulas. They will be wrong in
            the ways the formulas are wrong: no full mortality curve, no parcel-level tax, no contractor bid, no
            ruling from HFS. They are the right kind of wrong for a first conversation, and the wrong kind of wrong
            for a closing.
          </p>
        </section>

        <section id="sources" className="space-y-3 scroll-mt-6">
          <h2 className="font-serif text-3xl text-ink">Sources and assumptions</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>U.S. Census Bureau, QuickFacts, Will County, Illinois: July 1, 2025 population 712,253; 16.7 percent age 65 and over; 2020–2024 owner-occupied rate 82.8 percent; median owner-occupied value $319,600; median selected monthly owner costs without a mortgage $971.</li>
            <li>Social Security Administration, Period Life Table 2023, as used in the 2026 Trustees Report, table 4c6. Male and female life expectancy at exact ages, including age 80 at 8.50 and 9.82 years.</li>
            <li>Will County Treasurer, 2024 tax levy calendar of events in 2025: bill mailing, installment due date, and December 2, 2025 tax sale. Rhythms, not a promise about next year’s calendar.</li>
            <li>Will County Clerk, redemption instructions: full payment, certified funds, no partial payments.</li>
            <li>Illinois Legal Aid and practitioner summaries of tax-sale redemption, including the move from 30 months to three years for certificates issued on or after July 10, 2026. Confirm against 35 ILCS 200/ and Public Act 104-0553 before relying on a deadline.</li>
            <li>Tyler v. Hennepin County, 598 U.S. 631 (2023), and Public Act 104-0553, on surplus after a tax deed process.</li>
            <li>35 ILCS 200/15-172 and Public Act 104-0452 (signed December 12, 2025): senior assessment freeze income limits stepping from $65,000 toward $79,000. 320 ILCS 30/, Senior Citizens Real Estate Tax Deferral Act, including the matching income schedule. Interest method should be confirmed in the current statutory text and collector practice; the model’s 6 percent compounded path is illustrative.</li>
            <li>General and senior homestead exemptions are described at the commonly cited $8,000 EAV reductions. Confirm the current cap locally.</li>
            <li>Illinois Department of Healthcare and Family Services practice, 42 U.S.C. § 1396p, and 305 ILCS 5/: 60-month look-back; probate-centered estate recovery with exceptions, including a broader estate definition when a long-term-care partnership disregard applied. Secondary explanations were used to interpret scope. They are not a determination.</li>
            <li>720 ILCS 5/17-56; 320 ILCS 20/; 815 ILCS 505/; 815 ILCS 513/; 760 ILCS 55/ (Charitable Trust Act).</li>
            <li>IHDA, October 30, 2025 announcement: $15 million for the Home Repair and Accessibility Program, repairs described up to $50,000, owners at or below 80 percent of area median income, delivered through approved local groups. Eligibility of a remainder transfer was not addressed and is not assumed.</li>
            <li>USDA single-family repair loans and grants (Section 504): rural eligibility, very low income, a modest loan at a subsidized rate and a smaller grant for owners 62 and older who cannot repay. Limits and the rural map change. Most urbanized Will County will not qualify.</li>
            <li>Effective-tax compilations citing the Census American Community Survey (county median bill near $7,173, rate near 2.24 percent; Joliet lower). The late-2025 Joliet sales median is from a private sales compilation reported by the Will County Gazette, not from the assessor, and is used only as market color.</li>
            <li>Repair ranges are planning judgments for a small pre-1978 house in the southern Chicago suburbs, not RSMeans extracts and not bids. They are labeled as such on the underwriting page.</li>
            <li>Staff salaries are planning assumptions for a four-person core plus a 30 percent benefits load and $80,000 of overhead. They are not a compensation study.</li>
          </ul>
          <p className="text-sm">
            Primary desks to reopen before a real pilot: census.gov QuickFacts for Will County, ssa.gov actuarial life
            tables, the Will County Treasurer and Clerk, ilga.gov for the statutes named above, IHDA, USDA Rural
            Development, and an elder-law lawyer admitted in Illinois.
          </p>
        </section>
      </article>
    </Shell>
  );
}
