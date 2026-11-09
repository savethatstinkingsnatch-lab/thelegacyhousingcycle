import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-DV_HPsti.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Brief"
	},
	{
		to: "/cycle",
		label: "The cycle"
	},
	{
		to: "/pilot",
		label: "Will County"
	},
	{
		to: "/model",
		label: "Underwriting"
	},
	{
		to: "/capital",
		label: "Capital"
	},
	{
		to: "/safeguards",
		label: "Safeguards"
	},
	{
		to: "/work",
		label: "Operations"
	},
	{
		to: "/impact",
		label: "Impact"
	},
	{
		to: "/learn",
		label: "Education"
	},
	{
		to: "/blueprint",
		label: "Blueprint"
	},
	{
		to: "/inquire",
		label: "Inquiry desk"
	}
];
function active(path, to) {
	if (to === "/") return path === "/";
	return path === to || path.startsWith(`${to}/`);
}
function Shell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print border-b border-line bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-semibold uppercase tracking-widest text-copper",
							children: "Education Revolution"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-lg leading-tight text-ink md:text-xl",
							children: "The Legacy Housing Cycle"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 border border-line bg-surface px-3 text-sm font-semibold md:hidden",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? "Close" : "Menu"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "border-t border-line px-4 py-2 text-center text-xs text-muted md:px-6",
					children: "Feasibility blueprint. Not a law firm, lender, or open enrollment. Nothing here is an offer to buy a house."
				})]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "no-print border-b border-line bg-surface md:hidden",
				"aria-label": "Sections",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto max-w-6xl px-2 py-2",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: `block min-h-11 px-3 py-3 text-sm ${active(path, item.to) ? "bg-pine font-semibold text-surface" : "text-ink"}`,
						children: item.label
					}) }, item.to))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl md:grid-cols-[13.5rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "no-print hidden border-r border-line md:block",
					"aria-label": "Sections",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "sticky top-0 max-h-screen overflow-y-auto px-3 py-6",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: `block px-3 py-2 text-sm ${active(path, item.to) ? "bg-pine font-semibold text-surface" : "text-ink-soft hover:text-ink"}`,
							children: item.label
						}) }, item.to))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					id: "content",
					className: "min-w-0 px-4 py-8 md:px-8 md:py-10",
					children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-16 border-t border-line pt-6 text-sm text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "An Awesome Dudes / Education Revolution initiative. The idea matters more than credit. Figures are a planning model using public sources listed in the blueprint. Illinois counsel, a tax professional, and a benefits planner must review any real household before a paper is signed." })
					})]
				})]
			})
		]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-semibold uppercase tracking-widest text-copper",
		children
	});
}
function PageTitle({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-8 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: kicker }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-serif text-4xl text-ink md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-ink-soft",
				children: lede
			})
		]
	});
}
function Callout({ tone, title, children }) {
	const toneClass = {
		stop: "border-loss bg-loss-bg text-loss",
		subsidy: "border-warn bg-warn-bg text-warn",
		proceed: "border-pine bg-gain-bg text-pine-deep",
		note: "border-line bg-surface text-ink-soft"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `border px-4 py-3 ${toneClass}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold text-inherit",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-sm text-inherit",
			children
		})]
	});
}
//#endregion
export { PageTitle as n, Shell as r, Callout as t };
