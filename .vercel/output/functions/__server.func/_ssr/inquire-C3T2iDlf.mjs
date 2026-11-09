import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageTitle, r as Shell, t as Callout } from "./shell-DV_HPsti.mjs";
import { t as useLocalState } from "./use-local-state-cfAgHGfp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquire-C3T2iDlf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ROLES = [
	{
		id: "Homeowner",
		prompt: "Tell us the town, whether the tax bill or the house itself is the urgent part, and whether you have already talked with a lawyer. Do not include a Social Security number, a full date of birth, a medical diagnosis, or a bank account.",
		extra: "What have you already tried? Freeze, deferral, a repair program, family help."
	},
	{
		id: "Family",
		prompt: "You can describe worry. You cannot enroll someone else. The homeowner would have to ask, with their own lawyer.",
		extra: "Does the homeowner know you are writing this down?"
	},
	{
		id: "Contractor",
		prompt: "Trade, license, insurance, and whether you will bid rather than be handed work. Apprenticeship interest belongs here.",
		extra: "License category and whether you carry workers’ compensation."
	},
	{
		id: "Funder or official",
		prompt: "What you would need to see in a pilot before a dollar or a letter of support. Skepticism is useful.",
		extra: "Institution, and the question you would not want us to dodge."
	}
];
function InquirePage() {
	const [items, setItems] = useLocalState("lhc-inquiries-v1", []);
	const [role, setRole] = (0, import_react.useState)("Homeowner");
	const [name, setName] = (0, import_react.useState)("");
	const [contact, setContact] = (0, import_react.useState)("");
	const [place, setPlace] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [extra, setExtra] = (0, import_react.useState)("");
	const [agreed, setAgreed] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
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
		const next = {
			id: `${Date.now()}`,
			role,
			name: name.trim(),
			contact: contact.trim(),
			place: place.trim(),
			note: note.trim(),
			extra: extra.trim(),
			created: (/* @__PURE__ */ new Date()).toISOString()
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Rehearsal, not enrollment",
			title: "Practice the first conversation. Do not send a life story to a server.",
			lede: "There is no organization yet to receive this. The card stays on this device so a working group can see what an intake form feels like, and so a homeowner is not asked to give away more than a town and a problem. If a real pilot opens, it will use a different door, with a lawyer on the other side of it."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			tone: "stop",
			title: "Do not type secrets",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No Social Security numbers, account numbers, Medicare numbers, diagnoses, or full street addresses of a person who is struggling. This rehearsal is not a secure vault. It is a notebook in the browser." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: (event) => {
					event.preventDefault();
					save();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-medium",
							children: "Who is speaking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 grid gap-2 sm:grid-cols-2",
							children: ROLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: `block min-h-11 border px-3 py-2 ${role === item.id ? "border-pine bg-gain-bg" : "border-line bg-surface"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "role",
									className: "mr-2",
									checked: role === item.id,
									onChange: () => setRole(item.id)
								}), item.id]
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: spec.prompt
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Name, if you want it on the card", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "mt-1 min-h-11 w-full border border-line bg-surface px-3",
								value: name,
								onChange: (e) => setName(e.target.value),
								autoComplete: "name"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Town or agency, not a street", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "mt-1 min-h-11 w-full border border-line bg-surface px-3",
								value: place,
								onChange: (e) => setPlace(e.target.value)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: ["How to reach you, optional", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-1 min-h-11 w-full border border-line bg-surface px-3",
							value: contact,
							onChange: (e) => setContact(e.target.value),
							autoComplete: "email"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: ["The situation, in ordinary language", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-1 min-h-32 w-full border border-line bg-surface px-3 py-2",
							value: note,
							onChange: (e) => setNote(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: [spec.extra, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-1 min-h-24 w-full border border-line bg-surface px-3 py-2",
							value: extra,
							onChange: (e) => setExtra(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-start gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "mt-1",
							checked: agreed,
							onChange: (e) => setAgreed(e.target.checked)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I understand this is a local rehearsal. It is not an application, it creates no duty of care, and it is not sent to the county or to any funder." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "min-h-11 bg-pine px-4 font-semibold text-surface",
						children: "Save on this device"
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink-soft",
						children: message
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border border-line bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl",
						children: "Cards on this device"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: items.length === 0 ? "None yet." : `${items.length} saved.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 border border-line px-3 text-sm",
							onClick: download,
							disabled: items.length === 0,
							children: "Download JSON"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 border border-line px-3 text-sm",
							onClick: () => setItems([]),
							disabled: items.length === 0,
							children: "Clear"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border border-line p-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold",
									children: [item.role, item.place ? ` · ${item.place}` : ""]
								}),
								item.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.name }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-ink-soft",
									children: item.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "mt-2 min-h-11 text-sm font-semibold text-loss",
									onClick: () => setItems(items.filter((row) => row.id !== item.id)),
									children: "Remove"
								})
							]
						}, item.id))
					})
				]
			})]
		})
	] });
}
//#endregion
export { InquirePage as component };
