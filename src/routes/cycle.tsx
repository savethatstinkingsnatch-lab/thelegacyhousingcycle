import { PageTitle, Shell } from "@/components/shell";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cycle")({
  head: () => ({ meta: [{ title: "The cycle · Legacy Housing Cycle" }] }),
  component: CyclePage,
});

const PHASES = [
  {
    name: "Rescue",
    intent: "Find people who ask for help, and exhaust the cheaper public remedies before offering a property deal.",
    does: [
      "Take inquiries only from the homeowner or someone they invite. No door-knocking lists of delinquent seniors.",
      "Screen the senior homestead exemption, the assessment freeze, the Senior Citizens Real Estate Tax Deferral Act, IHDA home repair if eligible, the Community Care Program, LIHEAP, and weatherization.",
      "If a tax certificate is already sold, get a written redemption figure from the Will County Clerk and pay it only inside a signed agreement — certified funds, in full, before the deadline.",
      "Order a real inspection. Lead and asbestos on pre-1978 houses are priced before anyone promises a finished scope.",
    ],
    keeps: "The owner keeps title during this phase. Nothing is recorded yet.",
  },
  {
    name: "Protect",
    intent: "Trade a clearly priced set of promises for a remainder interest, with the owner holding a life estate — a property right, not a lease the organization can cancel.",
    does: [
      "Independent counsel, paid by the organization, whose only client is the homeowner. A certificate that advice was given, and a minimum 14-day wait after that meeting.",
      "A side-by-side in dollars: actuarial value of taxes, repairs, and services versus the value of the remainder. If the remainder is worth more, half of any expected surplus is written back to the estate or a person the owner names.",
      "Spouse or civil-union partner joins. A power of attorney does not create this deal. A guardian needs a court order; the pilot does not seek one.",
      "The deed is a retained life estate and a remainder. Personal property, accounts, and heirlooms are excluded in capital letters.",
      "Occupancy survives the organization's bankruptcy because the life estate is the owner's. Services do not. Services sit in a reserve with a named successor (Area Agency on Aging or another charity) if the organization fails.",
    ],
    keeps: "The owner keeps possession for life, the contents, and the right to enforce the service covenant.",
  },
  {
    name: "Restore",
    intent: "Bring the house and the yard to a safe, clean condition while the owner is living in it, using paid local trades.",
    does: [
      "Licensed and insured contractors where the trade requires it. Written scopes. The Illinois Home Repair and Remodeling Act applies.",
      "Priority order: roof and water, heat, electrical hazards, plumbing, means of egress, then accessibility, then a raised garden if the owner wants one, then efficiency.",
      "The garden is for a person who may not kneel or walk far. Beds at standing or seated height, a firm path wide enough for a walker, a bench, and drip or a nearby hose. Soil is brought in after a test. Old lots can hold lead. Food is not grown in that soil.",
      "Apprentices are employees or registered apprentices earning a wage. They are not the savings strategy. Building the beds is paid carpentry, not a volunteer Saturday.",
      "Change orders above a set dollar amount go back to the homeowner advocate and the construction coordinator. The owner is not surprised by a gutted kitchen.",
    ],
    keeps: "The owner approves the living-in-place plan: which rooms, what hours, where they stay if a system must be shut off, and whether they want a garden at all.",
  },
  {
    name: "Support",
    intent: "Do the ongoing things the contract names, and stop there. Do not become an unlicensed care facility.",
    does: [
      "Pay the taxes on time. Keep insurance. A maintenance visit on a schedule the owner can see. The house and the yard stay clean enough to live in: leaks, pests, and trip hazards are work orders, not character judgments.",
      "If the owner still wants the garden and can no longer tend it, watering and a seasonal reset are a duty with a dollar cap. The food is theirs.",
      "The owner may invite neighbors to pick and pay. That is hospitality and a little cash in their own hands, not a store the charity runs. The organization takes no cut, does not publish the address, and does not book the sales. The owner can stop it any week. If they cannot walk to the gate and still want a helper there for one short hour, that hour is a capped duty and the cash box stays with them.",
      "If living support is in the contract — groceries, rides, housework — it has a dollar cap, an inflation index, and a way to add a year of help from the reserve rather than an open promise.",
      "Clinical care, medication, and overnight care stay with the Community Care Program, Medicare, Medicaid waiver services, or family. The organization coordinates; it does not quietly replace them in exchange for the house.",
      "Missed duties are visible on the operations desk and reportable to an ombudsman who does not run construction.",
    ],
    keeps: "The owner can complain to Adult Protective Services and to the ombudsman without losing the life estate.",
  },
  {
    name: "Renew and reinvest",
    intent: "After a death, give the family time. Leave the house clean. Pass the garden on. Sell below a maximized price to a household that will live there.",
    does: [
      "Death is handled as a household event, not a listing event. No lock change during the retrieval period named in the agreement. Belongings, papers, and plants the family wants are packed with them, not dumped to make a photo.",
      "The raised beds stay. They are fixtures, with a one-page record of the soil test, what was planted, and how the drip works. The next owners are shown the garden before closing. They inherit the beds, not a duty to keep selling to the neighbors.",
      "Final inspections, remaining life-safety items, a clean yard, then a sale. Default illustration prices the house 8 percent under the then-appraised market and subtracts ordinary selling costs.",
      "The price is meant for a younger household or a veteran who will occupy the house, on rules a fair-housing lawyer writes. A separate veteran program is not described here and is not assumed to exist in this pilot.",
      "Recoveries pay reserves, subordinated program-related debt, and the next enrollment. They do not pay dividends.",
      "If the sale beats the underwriting, the estate reconciliation in the original agreement is paid before the cycle keeps the rest.",
    ],
    keeps: "Heirs keep everything the agreement said they keep, including time. The next household inherits a clean, known house and a working garden, not a bargain full of surprises.",
  },
];

function CyclePage() {
  return (
    <Shell>
      <PageTitle
        kicker="Operating model"
        title="Five phases, one rule: occupancy is a property right."
        lede="The cycle only works if the older person cannot be removed when the budget gets tight. Services can fail if the organization fails. The right to stay cannot. That is why the design is a life estate, not a sale-leaseback and not a license."
      />

      <ol className="space-y-8">
        {PHASES.map((phase, index) => (
          <li key={phase.name} className="border border-line bg-surface">
            <div className="border-b border-line px-4 py-4 md:px-5">
              <p className="nums text-xs font-semibold uppercase tracking-widest text-copper">Phase {index + 1}</p>
              <h2 className="mt-1 font-serif text-2xl">{phase.name}</h2>
              <p className="mt-2 max-w-3xl text-ink-soft">{phase.intent}</p>
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="px-4 py-4 md:px-5">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">The organization does</h3>
                <ul className="mt-3 space-y-3 text-sm text-ink-soft">
                  {phase.does.map((item) => (
                    <li key={item} className="border-l-2 border-pine pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-line px-4 py-4 md:border-l md:border-t-0 md:px-5">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">What is not taken</h3>
                <p className="mt-3 text-sm text-ink-soft">{phase.keeps}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Shell>
  );
}
