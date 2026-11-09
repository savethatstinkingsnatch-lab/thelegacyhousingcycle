import { money } from "@/lib/format";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function moneyTick(v: number): string {
  const abs = Math.abs(v);
  const sign = v < 0 ? "−" : "";
  if (abs >= 1_000_000) return `${sign}$${(abs / 1_000_000).toFixed(1)}m`;
  return `${sign}$${Math.round(abs / 1000)}k`;
}

function yDomain(min: number, max: number): [number, number] {
  const lo = min < 0 ? min * 1.12 : Math.min(0, min);
  const hi = max > 0 ? max * 1.18 : 0;
  return [lo, hi];
}

const tipStyle = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-line)",
  color: "var(--color-ink)",
};

export function CashChart({ rows }: { rows: { year: number; net: number }[] }) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  if (!on) return <div className="h-72 border border-line bg-surface" aria-hidden />;
  const nets = rows.map((row) => row.net);
  const domain = yDomain(Math.min(...nets, 0), Math.max(...nets, 0));
  return (
    <div className="h-72 w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rows} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-line)" vertical={false} />
          <XAxis dataKey="year" tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
          <YAxis width={56} domain={domain} tickFormatter={moneyTick} tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
          <Tooltip
            formatter={(value) => money(Number(value))}
            labelFormatter={(year) => (Number(year) === 0 ? "Closing" : `Year ${year}`)}
            contentStyle={tipStyle}
          />
          <Bar dataKey="net" name="Net cash">
            {rows.map((row) => (
              <Cell key={row.year} fill={row.net < 0 ? "var(--color-loss)" : "var(--color-pine)"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BalanceChart({ rows }: { rows: { year: number; cash: number }[] }) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  if (!on) return <div className="h-72 border border-line bg-surface" aria-hidden />;
  const values = rows.map((row) => row.cash);
  const domain = yDomain(Math.min(...values, 0), Math.max(...values, 0));
  return (
    <div className="h-72 w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={rows} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-line)" vertical={false} />
          <XAxis dataKey="year" tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
          <YAxis width={56} domain={domain} tickFormatter={moneyTick} tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
          <Tooltip
            formatter={(value) => money(Number(value))}
            labelFormatter={(year) => `Year ${year}`}
            contentStyle={tipStyle}
          />
          <Line type="monotone" dataKey="cash" name="Cash" stroke="var(--color-pine)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
