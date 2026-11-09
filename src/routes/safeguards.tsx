import { PageTitle, Shell } from "@/components/shell";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/safeguards")({
  head: () => ({ meta: [{ title: "Safeguards · Legacy Housing Cycle" }] }),
  component: SafeguardsPage,
});

const ROWS = [
  [
    "Life estate vs. lease",
    "The owner retains a life estate. The organization takes only the remainder. Occupancy is not a license.",
    "Illinois recording practice, spouse and homestead joinder, title insurance over a remainder, and whether local exemptions survive the split estate. Counsel has to answer before the first deed.",
  ],
  [
    "Medicaid look-back",
    "Transferring a remainder for less than fair value inside 60 months can delay long-term-care Medicaid. Illinois generally recovers from the probate estate; a life estate often passes outside probate. Recovery can reach further when a long-term-care partnership disregard was used, and a transfer-on-death instrument or revocable trust is not a magic exit.",
    "Whether a package of taxed-paid repairs and capped services counts as fair-market-value compensation under current HFS policy. This is the central open question. If counsel cannot get to a defensible answer, the pilot does not use a deed. It uses grants and deferral.",
  ],
  [
    "Estate recovery and heirs",
    "Half of any modeled nominal surplus is written back to the estate or a named person. Contents are excluded. A retrieval period is contractual.",
    "Creditor claims, a surviving spouse’s rights, and a will that contradicts the deed. The deed wins on the real estate; the family still needs that explained twice.",
  ],
  [
    "Tax sale timing",
    "Redemption is a full certified-funds payment to the Will County Clerk before the statutory deadline. The organization does not “buy the house at the tax sale” out from under an owner who never asked.",
    "Public Act 104-0553 changed the path after redemption expires, including surplus return after Tyler v. Hennepin County. Local clerks implement details. Get the estimate of redemption in writing every time.",
  ],
  [
    "Care and exploitation",
    "Financial exploitation of an older person is a crime (720 ILCS 5/17-56). The Elder Abuse and Neglect Act (320 ILCS 20/) runs through Adult Protective Services. Consumer Fraud Act and the Home Repair and Remodeling Act still apply to a charity.",
    "Where the line sits between housework the contract may include and personal care that requires a licensed provider. The pilot stays on the housework side and refers the rest.",
  ],
  [
    "Incapacity",
    "The deal is signed while the owner has capacity, or it is not signed. A power of attorney is not the way in. Later incapacity does not revoke the life estate. A guardian enforces; the guardian does not renegotiate the house away.",
    "How the contract’s service covenant is enforced by a guardian or a court if the organization underperforms. Fee-shifting in favor of the owner should be drafted, and arbitration should not be the only forum.",
  ],
  [
    "Organizational failure",
    "Service reserve, subordinated lenders, and a successor charity named in the recorded covenant. Board-restricted funds. Annual audit. Charitable Trust Act registration.",
    "Whether a court in a nonprofit bankruptcy will honor the successor designation. Do not tell an owner this is solved.",
  ],
  [
    "The garden and the cash box",
    "Beds are optional, at a height a person can use without kneeling, on tested clean soil. Growing and giving food away is the owner's. If they invite neighbors to pick and pay, the cash is theirs. The organization takes no percentage and does not require a single sale.",
    "The Illinois Garden Act, 505 ILCS 87/, protects cultivation and is written for personal use and non-commercial sharing. Charging money is a different question: municipal rules, sales tax, and whether whole produce, cut produce, or jars need cottage-food registration under 410 ILCS 625/ with the local health department. Get that answer in writing before anyone paints a sign. Do not treat a porch sale as already legal.",
  ],
  [
    "Fair housing at resale",
    "The eventual buyer is chosen without discrimination under the Fair Housing Act and the Illinois Human Rights Act. Affordability is a price rule, not a stereotype about who “deserves” the house.",
    "How to run a quiet, legal preference for first-time or workforce buyers without creating a disparate-impact problem. A HUD-approved counseling partner should design the sale, not the construction desk.",
  ],
  [
    "Conflicts",
    "The construction coordinator does not pick their own company. Board members do not buy the resale. Counsel for the owner is never counsel for the organization.",
    "A workable procurement policy at fifteen houses: three bids above a threshold, one bid allowed only for emergency water or heat, documented.",
  ],
];

const OVERSIGHT = [
  ["Homeowner counsel", "Independent. Paid by the organization. Duty runs only to the owner. Certificate required before recording."],
  ["Ombudsman", "Not an employee of operations. Receives complaints, can inspect a house on 48 hours’ notice, reports to the board in public session."],
  ["Board", "At least one elder-law lawyer, one geriatric social worker, one person who has lived the problem or their family caregiver, one builder who is not a vendor, one finance person. The executive is not the chair."],
  ["Adult Protective Services", "Posted in the house, not only in a PDF. Calling APS cannot be treated as a breach of contract."],
  ["Audit and public report", "Annual independent audit. A short public report: houses enrolled, taxes paid, visits missed, complaints, dollars to trades, dollars of subsidy per house. Missed visits are not rounded away."],
  ["Underwriting committee", "Separate from fundraising. A house that fails the single-house test is declined in writing, with the cheaper referral attached. Fundraising pressure is not a reason to enroll."],
];

function SafeguardsPage() {
  return (
    <Shell>
      <PageTitle
        kicker="Law, ethics, and the things still open"
        title="If it can be done more gently, do that instead."
        lede="This is a map for counsel, not counsel. Anything in the right-hand column is unresolved on purpose. A pilot that pretends those cells are settled is the predatory version of this idea."
      />

      <div className="overflow-x-auto border border-line bg-surface">
        <table className="data">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Design choice</th>
              <th>Still unresolved</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([topic, choice, open]) => (
              <tr key={topic}>
                <td className="font-medium">{topic}</td>
                <td className="text-sm">{choice}</td>
                <td className="text-sm text-ink-soft">{open}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Oversight that does not report to construction</h2>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {OVERSIGHT.map(([title, text]) => (
            <li key={title} className="grid gap-1 py-4 md:grid-cols-[14rem_minmax(0,1fr)]">
              <h3 className="font-medium">{title}</h3>
              <p className="text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="border border-line bg-surface p-4">
          <h2 className="font-serif text-xl">Will not do</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-soft">
            <li>Buy tax certificates in order to meet the owner later as the investor.</li>
            <li>Same-day signings. Doorstep “we already paid your tax” pressure.</li>
            <li>Take furnishings, vehicles, or accounts.</li>
            <li>Ask an adult child who is the agent under a power of attorney to convey the house to a program the agent favors.</li>
            <li>Enroll someone who has not sat with their own lawyer.</li>
            <li>Hide a negative underwriting behind a story about community.</li>
            <li>Use volunteers as the workforce plan.</li>
            <li>Promise lifetime care that is really a nursing-home substitute.</li>
          </ul>
        </article>
        <article className="border border-line bg-surface p-4">
          <h2 className="font-serif text-xl">Will do, in writing</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-soft">
            <li>A dollar comparison the owner takes home before the waiting period starts.</li>
            <li>A service schedule with dates, not adjectives.</li>
            <li>Fee-shifting if the owner has to go to court to get what was promised.</li>
            <li>Mediation first, circuit court available. No forced arbitration clause as the only door.</li>
            <li>A recorded life estate that does not mention a license, a lease, or “at our discretion.”</li>
            <li>An annual letter, plain language, showing taxes paid and visits completed.</li>
            <li>A decline letter that points to freeze, deferral, repair grants, and the Community Care Program.</li>
          </ul>
        </article>
      </section>
    </Shell>
  );
}
