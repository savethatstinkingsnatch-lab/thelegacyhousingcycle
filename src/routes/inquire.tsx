import { Callout, PageTitle, Shell } from "@/components/shell";
import { useLocalState } from "@/lib/use-local-state";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/inquire")({
  head: () => ({ meta: [{ title: "Inquiry desk · Legacy Housing Cycle" }] }),
  component: InquirePage,
});

type Role = "Homeowner" | "Family" | "Contractor" | "Funder or official";

type Inquiry = {
  id: string;
  role: Role;
  name: string;
  contact: string;
  place: string;
  note: string;
  extra: string;
  created: string;
};

const ROLES: { id: Role; prompt: string; extra: string }[] = [
  {
    id: "Homeowner",
    prompt: "Tell us the town, whether the tax bill or the house itself is the urgent part, and whether you have already talked with a lawyer. Do not include a Social Security number, a full date of birth, a medical diagnosis, or a bank account.",
    extra: "What have you already tried? Freeze, deferral, a repair program, family help.",
  },
  {
    id: "Family",
    prompt: "You can describe worry. You cannot enroll someone else. The homeowner would have to ask, with their own lawyer.",
    extra: "Does the homeowner know you are writing this down?",
  },
  {
    id: "Contractor",
    prompt: "Trade, license, insurance, and whether you will bid rather than be handed work. Apprenticeship interest belongs here.",
    extra: "License category and whether you carry workers’ compensation.",
  },
  {
    id: "Funder or official",
    prompt: "What you would need to see in a pilot before a dollar or a letter of support. Skepticism is useful.",
    extra: "Institution, and the question you would not want us to dodge.",
  },
];

function InquirePage() {
  const [items, setItems] = useLocalState<Inquiry[]>("lhc-inquiries-v1", []);
  const [role, setRole] = useState<Role>("Homeowner");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [place, setPlace] = useState("");
  const [note, setNote] = useState("");
  const [extra, setExtra] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");
  const spec = ROLES.find((item) => item.id === role) ?? ROLES[0];

  const save = () => {
    if (!agreed) {
      setMessage("The rehearsal only saves after you confirm it stays on this device.");
      return;
    }
    if (!note.trim()) {
      setMessage("Write the substance first. A blank card is not an inquiry.");
      return;
    }
    const next: Inquiry = {
      id: `${Date.now()}`,
      role,
      name: name.trim(),
      contact: contact.trim(),
      place: place.trim(),
      note: note.trim(),
      extra: extra.trim(),
      created: new Date().toISOString(),
    };
    setItems([next, ...items]);
    setNote("");
    setExtra("");
    setAgreed(false);
    setMessage("Saved in this browser only. Nothing was transmitted.");
  };

  const download = () => {
    const blob = new Blob([JSON.stringify(items, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "legacy-housing-cycle-rehearsal.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Shell>
      <PageTitle
        kicker="Rehearsal, not enrollment"
        title="Practice the first conversation. Do not send a life story to a server."
        lede="There is no organization yet to receive this. The card stays on this device so a working group can see what an intake form feels like, and so a homeowner is not asked to give away more than a town and a problem. If a real pilot opens, it will use a different door, with a lawyer on the other side of it."
      />

      <Callout tone="stop" title="Do not type secrets">
        <p>
          No Social Security numbers, account numbers, Medicare numbers, diagnoses, or full street addresses of a
          person who is struggling. This rehearsal is not a secure vault. It is a notebook in the browser.
        </p>
      </Callout>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)]">
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            save();
          }}
        >
          <fieldset>
            <legend className="text-sm font-medium">Who is speaking</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {ROLES.map((item) => (
                <label key={item.id} className={`block min-h-11 border px-3 py-2 ${role === item.id ? "border-pine bg-gain-bg" : "border-line bg-surface"}`}>
                  <input
                    type="radio"
                    name="role"
                    className="mr-2"
                    checked={role === item.id}
                    onChange={() => setRole(item.id)}
                  />
                  {item.id}
                </label>
              ))}
            </div>
            <p className="mt-2 text-sm text-ink-soft">{spec.prompt}</p>
          </fieldset>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Name, if you want it on the card
              <input className="mt-1 min-h-11 w-full border border-line bg-surface px-3" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
            <label className="block text-sm font-medium">
              Town or agency, not a street
              <input className="mt-1 min-h-11 w-full border border-line bg-surface px-3" value={place} onChange={(e) => setPlace(e.target.value)} />
            </label>
          </div>
          <label className="block text-sm font-medium">
            How to reach you, optional
            <input className="mt-1 min-h-11 w-full border border-line bg-surface px-3" value={contact} onChange={(e) => setContact(e.target.value)} autoComplete="email" />
          </label>
          <label className="block text-sm font-medium">
            The situation, in ordinary language
            <textarea className="mt-1 min-h-32 w-full border border-line bg-surface px-3 py-2" value={note} onChange={(e) => setNote(e.target.value)} />
          </label>
          <label className="block text-sm font-medium">
            {spec.extra}
            <textarea className="mt-1 min-h-24 w-full border border-line bg-surface px-3 py-2" value={extra} onChange={(e) => setExtra(e.target.value)} />
          </label>
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" className="mt-1" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <span>I understand this is a local rehearsal. It is not an application, it creates no duty of care, and it is not sent to the county or to any funder.</span>
          </label>
          <button type="submit" className="min-h-11 bg-pine px-4 font-semibold text-surface">
            Save on this device
          </button>
          {message ? <p className="text-sm text-ink-soft">{message}</p> : null}
        </form>

        <aside className="border border-line bg-surface p-4">
          <h2 className="font-serif text-xl">Cards on this device</h2>
          <p className="mt-1 text-sm text-muted">{items.length === 0 ? "None yet." : `${items.length} saved.`}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" className="min-h-11 border border-line px-3 text-sm" onClick={download} disabled={items.length === 0}>
              Download JSON
            </button>
            <button type="button" className="min-h-11 border border-line px-3 text-sm" onClick={() => setItems([])} disabled={items.length === 0}>
              Clear
            </button>
          </div>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li key={item.id} className="border border-line p-3 text-sm">
                <p className="font-semibold">{item.role}{item.place ? ` · ${item.place}` : ""}</p>
                {item.name ? <p>{item.name}</p> : null}
                <p className="mt-1 text-ink-soft">{item.note}</p>
                <button
                  type="button"
                  className="mt-2 min-h-11 text-sm font-semibold text-loss"
                  onClick={() => setItems(items.filter((row) => row.id !== item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Shell>
  );
}
