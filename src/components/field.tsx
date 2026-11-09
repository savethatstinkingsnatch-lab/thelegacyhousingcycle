export function Field({
  label,
  hint,
  value,
  onChange,
  suffix,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (n: number) => void;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      {hint ? <span className="mt-0.5 block text-xs leading-snug text-muted">{hint}</span> : null}
      <span className="mt-1 flex min-h-11 items-center border border-line bg-surface">
        <input
          className="nums w-full min-w-0 bg-transparent px-3 py-2.5 text-ink outline-none"
          inputMode="decimal"
          value={Number.isFinite(value) ? String(value) : "0"}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^0-9.-]/g, "");
            if (raw === "" || raw === "-" || raw === ".") {
              onChange(0);
              return;
            }
            const n = Number(raw);
            onChange(Number.isFinite(n) ? n : 0);
          }}
        />
        {suffix ? <span className="shrink-0 pr-3 text-sm text-muted">{suffix}</span> : null}
      </span>
    </label>
  );
}
