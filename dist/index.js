import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { forwardRef as A, createElement as x, useState as p, useCallback as j, useEffect as $ } from "react";
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), O = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), M = (e) => {
  const t = O(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, E = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), F = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var H = {
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
const P = A(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: l = "",
    children: d,
    iconNode: v,
    ...f
  }, m) => x(
    "svg",
    {
      ref: m,
      ...H,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: E("lucide", l),
      ...!d && !F(f) && { "aria-hidden": "true" },
      ...f
    },
    [
      ...v.map(([s, b]) => x(s, b)),
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
const c = (e, t) => {
  const o = A(
    ({ className: n, ...l }, d) => x(P, {
      ref: d,
      iconNode: t,
      className: E(
        `lucide-${B(M(e))}`,
        `lucide-${e}`,
        n
      ),
      ...l
    })
  );
  return o.displayName = M(e), o;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], U = c("chevron-right", q);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], G = c("disc-3", V);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], Y = c("external-link", J);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
], K = c("github", Z);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], X = c("heart", Q);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ee = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], te = c("loader-circle", ee);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], re = c("mic", ae);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oe = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], I = c("music", oe);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ne = c("plus", ie);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], le = c("save", ce);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = [
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
], se = c("sparkles", de);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], fe = c("trash-2", pe);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ue = [
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
], he = c("wand-sparkles", ue), L = "id, title, prompt, lyrics, created_at, updated_at, audio_file_node_id, cover_file_node_id, model_id, bpm, key, duration_seconds, favourited";
function R(e) {
  return {
    id: e.id,
    title: e.title,
    prompt: e.prompt,
    lyrics: e.lyrics,
    createdAt: e.created_at,
    updatedAt: e.updated_at,
    audioFileNodeId: e.audio_file_node_id,
    coverFileNodeId: e.cover_file_node_id,
    modelId: e.model_id,
    bpm: e.bpm,
    key: e.key,
    durationSeconds: e.duration_seconds,
    favourited: !!e.favourited
  };
}
const ge = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
async function ye(e) {
  return (await e.query(
    `SELECT ${L} FROM tracks ORDER BY favourited DESC, created_at DESC`
  )).map(R);
}
async function me(e, t) {
  const o = await e.query(
    `SELECT ${L} FROM tracks WHERE id = ?`,
    [t]
  );
  return o[0] ? R(o[0]) : null;
}
async function be(e, t) {
  const o = (/* @__PURE__ */ new Date()).toISOString(), n = ge();
  await e.run(
    `INSERT INTO tracks (id, title, prompt, lyrics, created_at, updated_at, favourited)
     VALUES (?, ?, ?, ?, ?, ?, 0)`,
    [n, t.title, t.prompt, t.lyrics ?? "", o, o]
  );
  const l = await me(e, n);
  if (!l) throw new Error("createDraftTrack: insert succeeded but row missing");
  return l;
}
async function ve(e, t) {
  await e.run("DELETE FROM tracks WHERE id = ?", [t]);
}
async function ke(e, t, o) {
  const n = (/* @__PURE__ */ new Date()).toISOString();
  await e.run(
    "UPDATE tracks SET favourited = ?, updated_at = ? WHERE id = ?",
    [o ? 1 : 0, n, t]
  );
}
const xe = [
  { icon: he, title: "AI lyrics + song generation", sub: "Coming v0.1.0 — pod gateway POST /v1/music/generations." },
  { icon: I, title: "Multi-track sequencer", sub: "Drums, bass, lead, pad — AI-generated or hand-arranged." },
  { icon: re, title: "Voice + sample import", sub: "Drop in voice memos from Voice Recorder or upload a stem." },
  { icon: G, title: "Project workspace", sub: "~/Music/JULI3TA Projects — every track is a real file you own." }
];
function Se({ db: e, migrationReady: t, onOpenStudio: o }) {
  const [n, l] = p([]), [d, v] = p(!0), [f, m] = p(!1), [s, b] = p(""), [u, S] = p(""), [w, _] = p(""), [h, C] = p(!1), g = j(async () => {
    try {
      await t;
      const a = await ye(e);
      l(a);
    } catch (a) {
      console.warn("[juli3ta] listTracks failed", a), l([]);
    } finally {
      v(!1);
    }
  }, [e, t]);
  $(() => {
    g();
  }, [g]);
  const N = async () => {
    if (!(!s.trim() || !u.trim())) {
      C(!0);
      try {
        await be(e, {
          title: s.trim(),
          prompt: u.trim(),
          lyrics: w.trim()
        }), b(""), S(""), _(""), m(!1), await g();
      } catch (a) {
        console.error("[juli3ta] save draft failed", a);
      } finally {
        C(!1);
      }
    }
  }, D = async (a) => {
    try {
      await ve(e, a), await g();
    } catch (y) {
      console.error("[juli3ta] delete failed", y);
    }
  }, W = async (a) => {
    try {
      await ke(e, a.id, !a.favourited), await g();
    } catch (y) {
      console.error("[juli3ta] toggle fav failed", y);
    }
  };
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
      children: /* @__PURE__ */ i("div", { style: { maxWidth: 920, margin: "0 auto", padding: "40px 32px" }, children: [
        /* @__PURE__ */ i("div", { style: { textAlign: "center", marginBottom: 40 }, children: [
          /* @__PURE__ */ i(
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
                marginBottom: 16,
                border: "1px solid rgba(168, 85, 247, 0.3)"
              },
              children: [
                /* @__PURE__ */ r(se, { size: 12 }),
                " ALPHA · v0.0.2"
              ]
            }
          ),
          /* @__PURE__ */ r(
            "h1",
            {
              style: {
                fontSize: 56,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                margin: 0,
                marginBottom: 12,
                background: "linear-gradient(180deg, #fff 0%, #d8b4fe 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
              },
              children: "JULI3TA"
            }
          ),
          /* @__PURE__ */ r("div", { style: { fontSize: 16, color: "#c4b5fd" }, children: "AI-native music creator for Tytus OS" })
        ] }),
        /* @__PURE__ */ i("div", { style: { marginBottom: 40 }, children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }, children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ r("div", { style: { fontSize: 14, fontWeight: 600, color: "#a78bfa", letterSpacing: 0.5 }, children: "MY DRAFTS" }),
              /* @__PURE__ */ r("div", { style: { fontSize: 12, color: "#a78bfa", marginTop: 2 }, children: "Saved prompts + lyrics. Generation arrives in v0.1.0." })
            ] }),
            /* @__PURE__ */ i(
              "button",
              {
                onClick: () => m((a) => !a),
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 14px",
                  background: f ? "rgba(255,255,255,0.08)" : "linear-gradient(90deg, #a855f7, #ec4899)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer"
                },
                children: [
                  /* @__PURE__ */ r(ne, { size: 13 }),
                  " ",
                  f ? "Cancel" : "New draft"
                ]
              }
            )
          ] }),
          f && /* @__PURE__ */ i(
            "div",
            {
              style: {
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(168, 85, 247, 0.25)",
                borderRadius: 12,
                padding: 16,
                marginBottom: 16
              },
              children: [
                /* @__PURE__ */ r(
                  "input",
                  {
                    value: s,
                    onChange: (a) => b(a.target.value),
                    placeholder: "Track title…",
                    style: k
                  }
                ),
                /* @__PURE__ */ r(
                  "textarea",
                  {
                    value: u,
                    onChange: (a) => S(a.target.value),
                    placeholder: "Prompt — describe the song. ('80s synthwave, melancholy, 124 bpm, female vocal'…)",
                    rows: 3,
                    style: { ...k, resize: "vertical", marginTop: 10 }
                  }
                ),
                /* @__PURE__ */ r(
                  "textarea",
                  {
                    value: w,
                    onChange: (a) => _(a.target.value),
                    placeholder: "Lyrics (optional) — paste or type the verse / chorus / bridge…",
                    rows: 5,
                    style: { ...k, resize: "vertical", marginTop: 10 }
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: N,
                    disabled: h || !s.trim() || !u.trim(),
                    style: {
                      marginTop: 12,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 16px",
                      background: h ? "rgba(168,85,247,0.4)" : "#a855f7",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: h || !s.trim() || !u.trim() ? "not-allowed" : "pointer",
                      opacity: !s.trim() || !u.trim() ? 0.5 : 1
                    },
                    children: [
                      h ? /* @__PURE__ */ r(te, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ r(le, { size: 13 }),
                      h ? "Saving…" : "Save draft"
                    ]
                  }
                )
              ]
            }
          ),
          d ? /* @__PURE__ */ r("div", { style: { padding: 20, color: "#a78bfa", fontSize: 13 }, children: "Loading drafts…" }) : n.length === 0 ? /* @__PURE__ */ r(
            "div",
            {
              style: {
                padding: 24,
                textAlign: "center",
                border: "1px dashed rgba(168, 85, 247, 0.3)",
                borderRadius: 12,
                color: "#a78bfa",
                fontSize: 13
              },
              children: 'No drafts yet. Click "New draft" to save your first prompt + lyrics.'
            }
          ) : /* @__PURE__ */ r("div", { style: { display: "grid", gap: 8 }, children: n.map((a) => /* @__PURE__ */ i(
            "div",
            {
              style: {
                display: "flex",
                gap: 12,
                padding: 14,
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${a.favourited ? "rgba(236, 72, 153, 0.3)" : "rgba(168, 85, 247, 0.15)"}`,
                borderRadius: 12
              },
              children: [
                /* @__PURE__ */ r(I, { size: 20, style: { color: "#d8b4fe", flexShrink: 0, marginTop: 2 } }),
                /* @__PURE__ */ i("div", { style: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ r("div", { style: { fontSize: 14, fontWeight: 600, color: "#f4f0ff", marginBottom: 2 }, children: a.title }),
                  /* @__PURE__ */ r(
                    "div",
                    {
                      style: {
                        fontSize: 12,
                        color: "#a78bfa",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      },
                      children: a.prompt
                    }
                  ),
                  /* @__PURE__ */ i("div", { style: { fontSize: 10, color: "#9b87d6", marginTop: 4 }, children: [
                    "Created ",
                    new Date(a.createdAt).toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => W(a),
                    style: T,
                    title: a.favourited ? "Unfavourite" : "Favourite",
                    children: /* @__PURE__ */ r(X, { size: 14, fill: a.favourited ? "#ec4899" : "none", color: a.favourited ? "#ec4899" : "#c4b5fd" })
                  }
                ),
                /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => D(a.id),
                    style: T,
                    title: "Delete",
                    children: /* @__PURE__ */ r(fe, { size: 14, color: "#c4b5fd" })
                  }
                )
              ]
            },
            a.id
          )) })
        ] }),
        /* @__PURE__ */ i("div", { style: { marginBottom: 32 }, children: [
          /* @__PURE__ */ r("div", { style: { fontSize: 14, fontWeight: 600, color: "#a78bfa", marginBottom: 12, letterSpacing: 0.5 }, children: "WHAT'S COMING IN v0.1.0" }),
          /* @__PURE__ */ r("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 12 }, children: xe.map((a) => {
            const y = a.icon;
            return /* @__PURE__ */ i(
              "div",
              {
                style: {
                  display: "flex",
                  gap: 12,
                  padding: 14,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(168, 85, 247, 0.15)",
                  borderRadius: 12
                },
                children: [
                  /* @__PURE__ */ r(y, { size: 20, style: { color: "#d8b4fe", flexShrink: 0, marginTop: 2 } }),
                  /* @__PURE__ */ i("div", { children: [
                    /* @__PURE__ */ r("div", { style: { fontSize: 13, fontWeight: 600, color: "#f4f0ff", marginBottom: 2 }, children: a.title }),
                    /* @__PURE__ */ r("div", { style: { fontSize: 12, color: "#a78bfa", lineHeight: 1.5 }, children: a.sub })
                  ] })
                ]
              },
              a.title
            );
          }) })
        ] }),
        /* @__PURE__ */ i(
          "div",
          {
            style: {
              paddingTop: 20,
              borderTop: "1px solid rgba(168, 85, 247, 0.2)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12
            },
            children: [
              /* @__PURE__ */ r("div", { style: { fontSize: 11, color: "#a78bfa" }, children: "Drafts saved to per-app SQLite (`app_juli3ta_tracks`). Generation comes online with the full Music Creator UI lift." }),
              /* @__PURE__ */ i("div", { style: { display: "flex", gap: 8 }, children: [
                o && /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: o,
                    style: z,
                    children: [
                      "Open Music Creator ",
                      /* @__PURE__ */ r(U, { size: 12 })
                    ]
                  }
                ),
                /* @__PURE__ */ i(
                  "a",
                  {
                    href: "https://github.com/traylinx/tytus-app-juli3ta",
                    target: "_blank",
                    rel: "noreferrer",
                    style: { ...z, textDecoration: "none", color: "#c4b5fd" },
                    children: [
                      /* @__PURE__ */ r(K, { size: 12 }),
                      " Repo ",
                      /* @__PURE__ */ r(Y, { size: 10 })
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
const k = {
  width: "100%",
  background: "rgba(0,0,0,0.3)",
  color: "#f4f0ff",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: 6,
  padding: "8px 10px",
  fontSize: 13,
  fontFamily: "inherit",
  boxSizing: "border-box",
  outline: "none"
}, T = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 30,
  height: 30,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: 6,
  cursor: "pointer",
  flexShrink: 0
}, z = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "6px 12px",
  background: "rgba(255,255,255,0.05)",
  color: "#f4f0ff",
  border: "1px solid rgba(168, 85, 247, 0.3)",
  borderRadius: 6,
  fontSize: 12,
  fontWeight: 500,
  cursor: "pointer"
};
function Ce(e) {
  const t = e.host.storage.current();
  let o = t.migrate?.("migrations/") ?? Promise.resolve();
  return function() {
    return /* @__PURE__ */ r(
      Se,
      {
        db: t,
        migrationReady: o,
        onOpenStudio: () => {
          try {
            e.host.windows?.open?.("musiccreator", void 0);
          } catch (d) {
            console.warn("[juli3ta] failed to open music-creator window", d);
          }
        }
      }
    );
  };
}
export {
  Ce as default
};
//# sourceMappingURL=index.js.map
