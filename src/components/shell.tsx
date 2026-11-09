import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const NAV = [
  { to: "/", label: "Brief" },
  { to: "/cycle", label: "The cycle" },
  { to: "/pilot", label: "Will County" },
  { to: "/model", label: "Underwriting" },
  { to: "/capital", label: "Capital" },
  { to: "/safeguards", label: "Safeguards" },
  { to: "/work", label: "Operations" },
  { to: "/impact", label: "Impact" },
  { to: "/learn", label: "Education" },
  { to: "/blueprint", label: "Blueprint" },
  { to: "/inquire", label: "Inquiry desk" },
] as const;

function active(path: string, to: string): boolean {
  if (to === "/") return path === "/";
  return path === to || path.startsWith(`${to}/`);
}

export function Shell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="no-print border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-widest text-copper">
              Education Revolution
            </span>
            <span className="font-serif text-lg leading-tight text-ink md:text-xl">The Legacy Housing Cycle</span>
          </Link>
          <button
            type="button"
            className="min-h-11 border border-line bg-surface px-3 text-sm font-semibold md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <p className="border-t border-line px-4 py-2 text-center text-xs text-muted md:px-6">
          Feasibility blueprint. Not a law firm, lender, or open enrollment. Nothing here is an offer to buy a house.
        </p>
      </header>

      {open && (
        <nav className="no-print border-b border-line bg-surface md:hidden" aria-label="Sections">
          <ul className="mx-auto max-w-6xl px-2 py-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block min-h-11 px-3 py-3 text-sm ${active(path, item.to) ? "bg-pine font-semibold text-surface" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="mx-auto grid max-w-6xl md:grid-cols-[13.5rem_minmax(0,1fr)]">
        <nav className="no-print hidden border-r border-line md:block" aria-label="Sections">
          <ul className="sticky top-0 max-h-screen overflow-y-auto px-3 py-6">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block px-3 py-2 text-sm ${active(path, item.to) ? "bg-pine font-semibold text-surface" : "text-ink-soft hover:text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main id="content" className="min-w-0 px-4 py-8 md:px-8 md:py-10">
          {children}
          <footer className="mt-16 border-t border-line pt-6 text-sm text-muted">
            <p>
              An Awesome Dudes / Education Revolution initiative. The idea matters more than credit. Figures are a
              planning model using public sources listed in the blueprint. Illinois counsel, a tax professional, and
              a benefits planner must review any real household before a paper is signed.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-widest text-copper">{children}</p>;
}

export function PageTitle({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="mb-8 max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-ink-soft">{lede}</p>
    </header>
  );
}

export function Callout({
  tone,
  title,
  children,
}: {
  tone: "stop" | "subsidy" | "proceed" | "note";
  title: string;
  children: React.ReactNode;
}) {
  const toneClass = {
    stop: "border-loss bg-loss-bg text-loss",
    subsidy: "border-warn bg-warn-bg text-warn",
    proceed: "border-pine bg-gain-bg text-pine-deep",
    note: "border-line bg-surface text-ink-soft",
  }[tone];
  return (
    <aside className={`border px-4 py-3 ${toneClass}`}>
      <p className="font-semibold text-inherit">{title}</p>
      <div className="mt-1 text-sm text-inherit">{children}</div>
    </aside>
  );
}
