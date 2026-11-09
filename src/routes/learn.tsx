import { PageTitle, Shell } from "@/components/shell";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learn")({
  head: () => ({ meta: [{ title: "Education · Legacy Housing Cycle" }] }),
  component: LearnPage,
});

const LADDER = [
  {
    step: "Helper, paid",
    text: "Site safety, tools, and showing up. A wage from the first day. This is the on-ramp the Education Revolution cares about: a person who was not going to a four-year program still gets a paycheck and a foreman who will explain the work.",
  },
  {
    step: "Registered apprentice",
    text: "Indentured through a program recognized by the U.S. Department of Labor and the State of Illinois, not a homemade certificate. Classroom time at a partner such as Joliet Junior College. Hours count. The Workforce Investment Board of Will County is the public table where this gets scheduled, not an afterthought.",
  },
  {
    step: "Journeyman on our houses",
    text: "The pilot’s houses are a steady book of small, real scopes: roofs, panels, water heaters, baths. That is better training than one showcase renovation. Insurance and licenses stay with the employing firm. We do not invent a license by calling someone a fellow.",
  },
  {
    step: "Their own firm",
    text: "The point of the Education Revolution link is ownership, not a permanent labor pool for the charity. A journeyman who wants a company gets introduced to bonding, estimating, and a CDFI or bank that already lends to small contractors. The charity is a customer, not the owner of their future.",
  },
];

const CURRICULUM = [
  ["The bill", "How a Will County tax bill is built, what the homestead and senior freeze actually do, and what deferral costs the estate later."],
  ["The systems", "What a 20-year roof, a panel, a furnace, and a water heater should cost to replace, and the month you start saving for each."],
  ["Who to call", "Licensed trades versus handyman work. Permits. The Home Repair and Remodeling Act. Why the cheapest bid on a sewer line is often the second bill."],
  ["Insurance and water", "What a policy does not cover. Why a slow leak is a six-month problem and a storm is a weekend problem."],
  ["The next owner’s budget", "A one-page reserve: taxes, insurance, and one percent of value a year toward systems. The house the cycle sells should arrive with this page, not only with new paint."],
  ["When to ask for help early", "The redemption clock, the freeze deadline, and the Community Care Program. Asking in March is a different life than asking in November."],
];

function LearnPage() {
  return (
    <Shell>
      <PageTitle
        kicker="Education Revolution"
        title="The house is also a school, and the students are paid."
        lede="Housing, employment, and education fail separately when each one is someone else’s grant. On these houses they are the same book of work: an older person kept safe, a crew paid, an apprentice’s hours logged, and a later buyer who is taught how not to hand the house back to the cycle in twenty years."
      />

      <ol className="space-y-4">
        {LADDER.map((item, index) => (
          <li key={item.step} className="grid gap-3 border border-line bg-surface p-4 md:grid-cols-[8rem_minmax(0,1fr)]">
            <p className="nums text-sm font-semibold uppercase tracking-widest text-copper">0{index + 1}</p>
            <div>
              <h2 className="font-serif text-xl">{item.step}</h2>
              <p className="mt-2 text-ink-soft">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">What the next family is taught before closing</h2>
        <p className="mt-2 max-w-3xl text-ink-soft">
          A restored house sold “affordably” into the same ignorance recreates the problem. Resale is paired with
          counseling — a HUD-approved agency if one will take the partnership — and a short course the organization
          can run itself if no one will. It is practical, local, and required, not a pamphlet in a folder.
        </p>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {CURRICULUM.map(([title, text]) => (
            <li key={title} className="grid gap-1 py-4 md:grid-cols-[12rem_minmax(0,1fr)]">
              <h3 className="font-medium">{title}</h3>
              <p className="text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 max-w-3xl space-y-3 text-ink-soft">
        <h2 className="font-serif text-2xl text-ink">The yard, and the cash box</h2>
        <p>
          A person who cannot kneel can still be the host. The beds are high enough to work from a standing or seated
          position. If the owner wants neighbors to come pick and buy, they allow it. The organization does not. The
          money stays with the owner. A few Saturdays of tomatoes will not carry a tax bill, and the model does not
          pretend they will.
        </p>
        <p>
          Growing and sharing are protected in Illinois by the Garden Act, 505 ILCS 87/, which is aimed at personal use
          and non-commercial sharing. Selling is not the same thing. Before a sign is painted, the municipality and the
          Will County Health Department have to say in writing whether whole produce needs anything, and they will
          almost certainly say that cut food and jars need cottage-food registration under 410 ILCS 625/. The next
          owners inherit the beds and the choice. They do not inherit a market they must keep open.
        </p>
      </section>

      <section className="mt-10 max-w-3xl space-y-3 text-ink-soft">
        <h2 className="font-serif text-2xl text-ink">What is not claimed</h2>
        <p>
          Joliet Junior College, the Workforce Investment Board of Will County, trade unions, and AgeGuide are named
          because they are the competent local institutions. None of them has agreed to this project. The first
          educational act of the pilot is to ask them, with a funded wage line in the budget, not with a request that
          they donate instructors.
        </p>
        <p>
          Unpaid service hours do not count as training. If the books cannot pay the apprentice, the organization does
          not enroll the house that needed that apprentice to make the rehab “pencil.”
        </p>
      </section>
    </Shell>
  );
}
