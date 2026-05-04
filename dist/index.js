import { jsx as r, jsxs as a } from "react/jsx-runtime";
import { forwardRef as u, createElement as p, useState as g } from "react";
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), v = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, i, o) => o ? o.toUpperCase() : i.toLowerCase()
), h = (t) => {
  const e = v(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, f = (...t) => t.filter((e, i, o) => !!e && e.trim() !== "" && o.indexOf(e) === i).join(" ").trim(), w = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var S = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: o,
    className: c = "",
    children: d,
    iconNode: l,
    ...s
  }, m) => p(
    "svg",
    {
      ref: m,
      ...S,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(i) * 24 / Number(e) : i,
      className: f("lucide", c),
      ...!d && !w(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...l.map(([b, k]) => p(b, k)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n = (t, e) => {
  const i = u(
    ({ className: o, ...c }, d) => p(M, {
      ref: d,
      iconNode: e,
      className: f(
        `lucide-${x(h(t))}`,
        `lucide-${t}`,
        o
      ),
      ...c
    })
  );
  return i.displayName = h(t), i;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], A = n("chevron-right", C);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], T = n("disc-3", z);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _ = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], I = n("external-link", _);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
], L = n("github", R);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], B = n("loader-circle", W);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], j = n("mic", N);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], P = n("music", $);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], U = n("sparkles", q);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
], y = n("wand-sparkles", O), D = [
  { icon: y, title: "AI lyrics + song generation", sub: "Prompt → full track via the host's daemon-routed music endpoints." },
  { icon: P, title: "Multi-track sequencer", sub: "Drums, bass, lead, pad — AI-generated or hand-arranged." },
  { icon: j, title: "Voice + sample import", sub: "Drop in voice memos from Voice Recorder or upload a stem." },
  { icon: T, title: "Project workspace", sub: "~/Music/JULI3TA Projects — every track is a real file you own." }
];
function H({ onOpenStudio: t }) {
  const [e, i] = g(!1), [o, c] = g("");
  return /* @__PURE__ */ r(
    "div",
    {
      style: {
        height: "100%",
        overflow: "auto",
        background: "linear-gradient(180deg, #1a0b2e 0%, #2d1245 50%, #1a0b2e 100%)",
        color: "#f4f0ff",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      },
      children: /* @__PURE__ */ a("div", { style: { maxWidth: 920, margin: "0 auto", padding: "48px 32px" }, children: [
        /* @__PURE__ */ a("div", { style: { textAlign: "center", marginBottom: 56 }, children: [
          /* @__PURE__ */ a(
            "div",
            {
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 12px",
                borderRadius: 999,
                background: "rgba(168, 85, 247, 0.2)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.5,
                color: "#d8b4fe",
                marginBottom: 24,
                border: "1px solid rgba(168, 85, 247, 0.3)"
              },
              children: [
                /* @__PURE__ */ r(U, { size: 12 }),
                " ALPHA · v0.0.1"
              ]
            }
          ),
          /* @__PURE__ */ r(
            "h1",
            {
              style: {
                fontSize: 64,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                margin: 0,
                marginBottom: 16,
                background: "linear-gradient(180deg, #fff 0%, #d8b4fe 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
              },
              children: "JULI3TA"
            }
          ),
          /* @__PURE__ */ r("div", { style: { fontSize: 20, color: "#c4b5fd", marginBottom: 8 }, children: "AI-native music creator for Tytus OS" }),
          /* @__PURE__ */ r("div", { style: { fontSize: 14, color: "#a78bfa" }, children: "Coming as a real installable app — this is the placeholder." })
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            style: {
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(168, 85, 247, 0.25)",
              borderRadius: 16,
              padding: 24,
              marginBottom: 48,
              backdropFilter: "blur(8px)"
            },
            children: [
              /* @__PURE__ */ r("div", { style: { fontSize: 13, color: "#c4b5fd", marginBottom: 12 }, children: "Try the prompt experience (alpha — generates a teaser only)" }),
              /* @__PURE__ */ r(
                "textarea",
                {
                  value: o,
                  onChange: (l) => c(l.target.value),
                  placeholder: "Describe a song… ('80s synthwave, melancholy, 124 bpm, female vocal'…)",
                  rows: 3,
                  style: {
                    width: "100%",
                    background: "rgba(0,0,0,0.3)",
                    color: "#f4f0ff",
                    border: "1px solid rgba(168, 85, 247, 0.2)",
                    borderRadius: 8,
                    padding: 12,
                    fontSize: 14,
                    fontFamily: "inherit",
                    resize: "vertical",
                    boxSizing: "border-box"
                  }
                }
              ),
              /* @__PURE__ */ a(
                "button",
                {
                  onClick: async () => {
                    i(!0), setTimeout(() => i(!1), 1800);
                  },
                  disabled: e || !o.trim(),
                  style: {
                    marginTop: 12,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    background: e ? "rgba(168,85,247,0.4)" : "linear-gradient(90deg, #a855f7, #ec4899)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: e ? "wait" : o.trim() ? "pointer" : "not-allowed",
                    opacity: o.trim() ? 1 : 0.5
                  },
                  children: [
                    e ? /* @__PURE__ */ r(B, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ r(y, { size: 14 }),
                    e ? "Cooking…" : "Generate teaser"
                  ]
                }
              ),
              e && /* @__PURE__ */ a("div", { style: { fontSize: 12, color: "#c4b5fd", marginTop: 12 }, children: [
                "Real generation requires the music daemon (full lift, post-alpha). Once shipped, this hits ",
                /* @__PURE__ */ r("code", { style: { background: "rgba(0,0,0,0.3)", padding: "2px 6px", borderRadius: 4 }, children: "host.daemon.network" }),
                " → pod's `/v1/music/generations` endpoint."
              ] })
            ]
          }
        ),
        /* @__PURE__ */ a("div", { style: { marginBottom: 48 }, children: [
          /* @__PURE__ */ r("div", { style: { fontSize: 14, fontWeight: 600, color: "#a78bfa", marginBottom: 16, letterSpacing: 0.5 }, children: "WHAT'S COMING" }),
          /* @__PURE__ */ r("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 16 }, children: D.map((l) => {
            const s = l.icon;
            return /* @__PURE__ */ a(
              "div",
              {
                style: {
                  display: "flex",
                  gap: 12,
                  padding: 16,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(168, 85, 247, 0.15)",
                  borderRadius: 12
                },
                children: [
                  /* @__PURE__ */ r(s, { size: 22, style: { color: "#d8b4fe", flexShrink: 0, marginTop: 2 } }),
                  /* @__PURE__ */ a("div", { children: [
                    /* @__PURE__ */ r("div", { style: { fontSize: 14, fontWeight: 600, color: "#f4f0ff", marginBottom: 4 }, children: l.title }),
                    /* @__PURE__ */ r("div", { style: { fontSize: 13, color: "#a78bfa", lineHeight: 1.5 }, children: l.sub })
                  ] })
                ]
              },
              l.title
            );
          }) })
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            style: {
              paddingTop: 24,
              borderTop: "1px solid rgba(168, 85, 247, 0.2)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16
            },
            children: [
              /* @__PURE__ */ a("div", { style: { fontSize: 12, color: "#a78bfa" }, children: [
                "Today the legacy MusicCreator app inside Tytus OS is the live UI. JULI3TA's lift is tracked in ",
                /* @__PURE__ */ r("code", { style: { background: "rgba(0,0,0,0.3)", padding: "2px 6px", borderRadius: 4 }, children: "SPRINT-TYTUS-APP-JULI3TA-V1" }),
                "."
              ] }),
              /* @__PURE__ */ a("div", { style: { display: "flex", gap: 12 }, children: [
                t && /* @__PURE__ */ a(
                  "button",
                  {
                    onClick: t,
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 14px",
                      background: "rgba(255,255,255,0.08)",
                      color: "#f4f0ff",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer"
                    },
                    children: [
                      "Open Music Creator ",
                      /* @__PURE__ */ r(A, { size: 13 })
                    ]
                  }
                ),
                /* @__PURE__ */ a(
                  "a",
                  {
                    href: "https://github.com/traylinx/tytus-app-juli3ta",
                    target: "_blank",
                    rel: "noreferrer",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 14px",
                      background: "transparent",
                      color: "#c4b5fd",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 500,
                      textDecoration: "none"
                    },
                    children: [
                      /* @__PURE__ */ r(L, { size: 13 }),
                      " Repo ",
                      /* @__PURE__ */ r(I, { size: 11 })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] })
    }
  );
}
function V(t) {
  return function() {
    return /* @__PURE__ */ r(H, { onOpenStudio: () => {
      try {
        t.host.windows?.open?.("musiccreator", void 0);
      } catch (o) {
        console.warn("[juli3ta] failed to open music-creator window", o);
      }
    } });
  };
}
export {
  V as default
};
//# sourceMappingURL=index.js.map
