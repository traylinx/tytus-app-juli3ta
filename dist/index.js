import { jsxs as d, jsx as n, Fragment as ve } from "react/jsx-runtime";
import { forwardRef as ue, createElement as G, useState as u, useRef as ie, useCallback as P, useEffect as A, useMemo as xe } from "react";
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _e = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, a) => a ? a.toUpperCase() : r.toLowerCase()
), ne = (e) => {
  const t = _e(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, pe = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim(), we = (e) => {
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
var Ce = {
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
const Ie = ue(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: s = "",
    children: o,
    iconNode: g,
    ...w
  }, F) => G(
    "svg",
    {
      ref: F,
      ...Ce,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: a ? Number(r) * 24 / Number(t) : r,
      className: pe("lucide", s),
      ...!o && !we(w) && { "aria-hidden": "true" },
      ...w
    },
    [
      ...g.map(([L, N]) => G(L, N)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f = (e, t) => {
  const r = ue(
    ({ className: a, ...s }, o) => G(Ie, {
      ref: o,
      iconNode: t,
      className: pe(
        `lucide-${Se(ne(e))}`,
        `lucide-${e}`,
        a
      ),
      ...s
    })
  );
  return r.displayName = ne(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], Te = f("disc-3", Me);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], Ee = f("folder-open", Ae);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], Ne = f("heart", Le);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], re = f("loader-circle", ze);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = [
  [
    "path",
    {
      d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
      key: "80a601"
    }
  ],
  [
    "path",
    {
      d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
      key: "j0ngtp"
    }
  ],
  ["circle", { cx: "16", cy: "7", r: "5", key: "d08jfb" }]
], Pe = f("mic-vocal", $e);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], Fe = f("pause", je);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Ue = f("play", Re);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
], We = f("refresh-ccw", De);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], Ge = f("save", Oe);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Je = f("settings", He);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = [
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
], ae = f("sparkles", Be);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], qe = f("trash-2", Ve);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
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
], Ze = f("wand-sparkles", Ke), fe = "id, title, prompt, lyrics, created_at, updated_at, audio_file_node_id, cover_file_node_id, model_id, bpm, key, duration_seconds, favourited";
function ge(e) {
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
const Qe = (e = "trk") => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
async function Ye(e) {
  return (await e.query(
    `SELECT ${fe} FROM tracks ORDER BY favourited DESC, created_at DESC`
  )).map(ge);
}
async function oe(e, t) {
  const r = await e.query(
    `SELECT ${fe} FROM tracks WHERE id = ?`,
    [t]
  );
  return r[0] ? ge(r[0]) : null;
}
async function le(e, t) {
  const r = (/* @__PURE__ */ new Date()).toISOString(), a = t.id ?? Qe(), s = await oe(e, a);
  s ? await e.run(
    `UPDATE tracks
       SET title = ?, prompt = ?, lyrics = ?, updated_at = ?, audio_file_node_id = ?, cover_file_node_id = ?, model_id = ?, bpm = ?, key = ?, duration_seconds = ?, favourited = ?
       WHERE id = ?`,
    [
      t.title,
      t.prompt,
      t.lyrics ?? "",
      r,
      t.audioFileNodeId ?? s.audioFileNodeId,
      t.coverFileNodeId ?? s.coverFileNodeId,
      t.modelId ?? s.modelId,
      t.bpm ?? s.bpm,
      t.key ?? s.key,
      t.durationSeconds ?? s.durationSeconds,
      t.favourited ?? s.favourited ? 1 : 0,
      a
    ]
  ) : await e.run(
    `INSERT INTO tracks (id, title, prompt, lyrics, created_at, updated_at, audio_file_node_id, cover_file_node_id, model_id, bpm, key, duration_seconds, favourited)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      a,
      t.title,
      t.prompt,
      t.lyrics ?? "",
      r,
      r,
      t.audioFileNodeId ?? null,
      t.coverFileNodeId ?? null,
      t.modelId ?? null,
      t.bpm ?? null,
      t.key ?? null,
      t.durationSeconds ?? null,
      t.favourited ? 1 : 0
    ]
  );
  const o = await oe(e, a);
  if (!o) throw new Error("upsertTrack: write succeeded but row missing");
  return o;
}
async function Xe(e, t) {
  await e.run("DELETE FROM tracks WHERE id = ?", [t]);
}
async function et(e, t, r) {
  const a = (/* @__PURE__ */ new Date()).toISOString();
  await e.run(
    "UPDATE tracks SET favourited = ?, updated_at = ? WHERE id = ?",
    [r ? 1 : 0, a, t]
  );
}
function tt(e) {
  return (e.daemon?.state?.included ?? []).filter((r) => {
    const a = String(r.status ?? "").toLowerCase();
    return ["running", "ready", "idle", "connected"].some((s) => a.includes(s)) || !!r.publicUrl;
  });
}
async function it(e, t, r) {
  const a = await e.daemon.callPodEndpoint(t, "/v1/models", { method: "GET", signal: r });
  if (!a.ok) throw new Error(`Models HTTP ${a.status}: ${(await a.text()).slice(0, 240)}`);
  return ((await a.json()).data ?? []).map((o) => o.id).filter((o) => typeof o == "string" && o.length > 0).map((o) => ({ id: o }));
}
function nt(e) {
  return e.startsWith("data:") ? e : `data:audio/mpeg;base64,${e}`;
}
function rt(e) {
  const t = e;
  if (!t || typeof t != "object") return null;
  const r = t.data;
  if (r && !Array.isArray(r) && typeof r == "object") {
    const s = r.audio ?? r.audio_base64 ?? r.b64_json ?? r.url;
    if (typeof s == "string" && s.length > 0) return s;
  }
  if (Array.isArray(r))
    for (const s of r) {
      const o = s, g = o.audio ?? o.audio_base64 ?? o.b64_json ?? o.url;
      if (typeof g == "string" && g.length > 0) return g;
    }
  const a = t.audio ?? t.audio_base64 ?? t.b64_json ?? t.url;
  return typeof a == "string" && a.length > 0 ? a : null;
}
function at(e) {
  const t = e, r = t?.data, a = r?.duration_seconds ?? r?.durationSeconds ?? t?.duration_seconds ?? t?.durationSeconds;
  return typeof a == "number" && Number.isFinite(a) ? a : null;
}
async function ot(e, t) {
  const r = {
    model: t.model,
    lyrics: t.lyrics || `[Intro]
[Instrumental]
[Outro]`,
    prompt: t.prompt
  };
  t.instrumental && (r.instrumental = !0);
  const a = await e.daemon.callPodEndpoint(t.podId, "/v1/music/generations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r),
    signal: t.signal
  }), s = await a.text();
  let o = s;
  try {
    o = s ? JSON.parse(s) : {};
  } catch {
  }
  if (!a.ok) throw new Error(`Music HTTP ${a.status}: ${typeof o == "string" ? o.slice(0, 300) : JSON.stringify(o).slice(0, 300)}`);
  const g = rt(o);
  if (!g) throw new Error("Music generation returned no audio payload");
  return {
    audioDataUrl: nt(g),
    modelId: t.model,
    durationSeconds: at(o),
    raw: o
  };
}
const lt = `[Verse 1]
City lights are blinking like a signal in the rain
I hear the future humming through the wire again

[Chorus]
We build a little thunder, we teach the dark to sing
JULI3TA, wake the machine`, E = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: 12,
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  padding: "12px 14px",
  outline: "none",
  font: "inherit"
}, j = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 20,
  boxShadow: "0 24px 80px rgba(0,0,0,0.25)"
}, k = {
  border: 0,
  borderRadius: 12,
  color: "#fff",
  padding: "10px 14px",
  fontWeight: 800,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8
};
function de(e) {
  return e.replace(/[&<>]/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[t] ?? t);
}
function se(e, t) {
  const r = Math.abs([...e].reduce((g, w) => g + w.charCodeAt(0), 0)) % 360, a = de(e || "JULI3TA"), s = de((t || "AI music").slice(0, 72)), o = `<svg xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${r},88%,62%)"/><stop offset="0.52" stop-color="hsl(${(r + 62) % 360},86%,44%)"/><stop offset="1" stop-color="#140622"/></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="26"/></filter></defs><rect width="768" height="768" fill="url(#g)"/><circle cx="196" cy="188" r="142" fill="rgba(255,255,255,.22)" filter="url(#blur)"/><circle cx="584" cy="536" r="190" fill="rgba(0,0,0,.30)" filter="url(#blur)"/><path d="M162 515c96-144 202-144 318 0 35 44 76 62 124 54" stroke="rgba(255,255,255,.55)" stroke-width="28" fill="none" stroke-linecap="round"/><text x="64" y="650" fill="white" font-family="Inter,Arial" font-size="54" font-weight="900">${a}</text><text x="66" y="696" fill="rgba(255,255,255,.76)" font-family="Inter,Arial" font-size="24">${s}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(o)))}`;
}
function ce(e, t) {
  return t.find((a) => a.id === e.id)?.audioDataUrl ?? "";
}
function dt(e, t, r) {
  return {
    id: e.id,
    title: e.title,
    styleTags: e.prompt,
    lyricsPreview: e.lyrics,
    durationMs: Math.round((e.durationSeconds ?? 0) * 1e3),
    bitrate: 32e4,
    sampleRate: 44100,
    sizeBytes: t.length,
    createdAt: new Date(e.createdAt).getTime(),
    audioDataUrl: t,
    specsJson: JSON.stringify({ modelId: e.modelId, prompt: e.prompt }),
    coverDataUrl: r,
    theme: e.prompt,
    source: "juli3ta",
    audioKind: t ? "data_url" : "lyrics_only"
  };
}
function st(e) {
  return e.find((t) => /music/i.test(t) && !/cover/i.test(t)) ?? e[0] ?? "";
}
function ct({ host: e, db: t, migrationReady: r }) {
  const [a, s] = u([]), [o, g] = u([]), [w, F] = u(""), [L, N] = u(!0), [v, H] = u(!1), [J, R] = u(null), [z, m] = u(null), [B, M] = u(null), [T, ye] = u(() => tt(e)), [p, U] = u(""), [V, q] = u([]), [y, D] = u(""), [me, W] = u(!1), [h, K] = u("Neon Ghosts"), [x, Z] = u("cinematic synthwave, 124 bpm, melancholic but powerful, female vocal"), [S, Q] = u(lt), [$, he] = u(!1), I = ie(null), Y = ie(null), b = P(async () => {
    N(!0);
    try {
      await r;
      const [i, l] = await Promise.allSettled([
        Ye(t),
        e.daemon.juli3taLibrary?.listGeneratedTracks?.()
      ]);
      i.status === "fulfilled" && s(i.value), l.status === "fulfilled" && l.value && (F(l.value.rootPath), g(l.value.tracks ?? []));
    } catch (i) {
      m(i instanceof Error ? i.message : String(i));
    } finally {
      N(!1);
    }
  }, [t, e, r]);
  A(() => {
    b();
  }, [b]), A(() => e.daemon.onStateChange?.((l) => {
    const c = (l.included ?? []).filter((_) => !!_.publicUrl || /running|ready|idle|connected/i.test(String(_.status)));
    ye(c), !p && c[0] && U(c[0].id);
  }), [e, p]), A(() => {
    if (!p) {
      const i = T[0]?.id;
      i && U(i);
    }
  }, [T, p]), A(() => {
    if (!p) return;
    const i = new AbortController();
    return it(e, p, i.signal).then((l) => {
      const c = l.map((_) => _.id);
      q(c), D((_) => _ || st(c));
    }).catch((l) => {
      console.warn("[juli3ta] model discovery failed", l), q([]);
    }), () => i.abort();
  }, [e, p]), A(() => e.shellMenu?.register?.({
    appId: "juli3ta",
    groups: [
      { label: "File", items: [
        { id: "new-track", label: "New track", shortcut: "⌘N", onClick: () => {
          K(""), Z(""), Q("");
        } },
        { id: "save-draft", label: "Save draft", shortcut: "⌘S", onClick: () => void X() },
        { id: "open-folder", label: "Open JULI3TA folder", onClick: () => void te() }
      ] },
      { label: "Track", items: [
        { id: "generate", label: "Generate", shortcut: "⌘↩", disabled: v, onClick: () => void ee() }
      ] }
    ]
  }), [e, v, h, x, S, p, y]);
  const X = P(async () => {
    if (!h.trim()) return;
    const i = await le(t, {
      title: h.trim(),
      prompt: x.trim(),
      lyrics: S.trim(),
      modelId: y || null
    });
    M(`Draft saved: ${i.title}`), e.notifications.notify({ title: "JULI3TA draft saved", body: i.title, level: "success", unread: !1 }), await b();
  }, [t, e, S, y, x, b, h]), ee = P(async () => {
    if (!h.trim()) {
      m("Track title required.");
      return;
    }
    if (!x.trim()) {
      m("Prompt/style required.");
      return;
    }
    if (!$ && !S.trim()) {
      m("Lyrics required unless instrumental is enabled.");
      return;
    }
    if (!p || !y) {
      m("No runnable music pod/model available. Save a draft or start a pod.");
      return;
    }
    Y.current?.abort();
    const i = new AbortController();
    Y.current = i, H(!0), m(null), M("Generating audio…");
    try {
      const l = await ot(e, {
        podId: p,
        model: y,
        title: h.trim(),
        prompt: x.trim(),
        lyrics: S.trim(),
        instrumental: $,
        signal: i.signal
      }), c = await le(t, {
        title: h.trim(),
        prompt: x.trim(),
        lyrics: S.trim(),
        modelId: l.modelId,
        durationSeconds: l.durationSeconds
      }), _ = se(c.title, c.prompt);
      try {
        const C = await e.daemon.juli3taLibrary.saveGeneratedTrack(dt(c, l.audioDataUrl, _));
        M(C.audioPath ? `Generated + mirrored: ${C.audioPath}` : `Generated: ${c.title}`);
      } catch (C) {
        console.warn("[juli3ta] daemon file mirror failed", C), M(`Generated locally. File mirror pending: ${C instanceof Error ? C.message : String(C)}`);
      }
      e.notifications.notify({ title: "JULI3TA track generated", body: c.title, level: "success", unread: !0 }), await b();
    } catch (l) {
      l.name !== "AbortError" && (m(l instanceof Error ? l.message : String(l)), e.notifications.notify({ title: "JULI3TA generation failed", body: l instanceof Error ? l.message : String(l), level: "error" }));
    } finally {
      H(!1);
    }
  }, [t, e, $, S, y, p, x, b, h]), te = P(async () => {
    try {
      const i = await e.daemon.juli3taLibrary.openGeneratedTracksFolder();
      M(`Opened ${i}`);
    } catch (i) {
      m(`Could not open JULI3TA folder: ${i instanceof Error ? i.message : String(i)}`);
    }
  }, [e]), O = xe(() => a, [a]), be = T.find((i) => i.id === p), ke = (i) => {
    const l = ce(i, o);
    if (l) {
      if (I.current || (I.current = new Audio()), J === i.id) {
        I.current.pause(), R(null);
        return;
      }
      I.current.src = l, I.current.play().then(() => R(i.id)).catch((c) => m(String(c))), I.current.onended = () => R(null);
    }
  };
  return /* @__PURE__ */ d("div", { style: { minHeight: "100%", overflow: "auto", background: "radial-gradient(circle at 10% 0%, rgba(236,72,153,.38), transparent 28%), radial-gradient(circle at 86% 12%, rgba(168,85,247,.32), transparent 32%), linear-gradient(180deg, #12051f, #1f0b35 54%, #0d0614)", color: "#fff", fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif' }, children: [
    /* @__PURE__ */ d("div", { style: { maxWidth: 1280, margin: "0 auto", padding: 28 }, children: [
      /* @__PURE__ */ d("header", { style: { display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", marginBottom: 22 }, children: [
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ d("div", { style: { display: "inline-flex", gap: 8, alignItems: "center", color: "#d8b4fe", fontSize: 12, fontWeight: 900, letterSpacing: 1 }, children: [
            /* @__PURE__ */ n(ae, { size: 14 }),
            " JULI3TA v0.1.0"
          ] }),
          /* @__PURE__ */ n("h1", { style: { fontSize: 54, margin: "4px 0 0", lineHeight: 1, letterSpacing: "-0.06em" }, children: "AI Music Creator" }),
          /* @__PURE__ */ n("p", { style: { color: "#c4b5fd", margin: "8px 0 0" }, children: "Generate tracks through your pod, keep a local SQLite index, mirror audio to the daemon JULI3TA library when available." })
        ] }),
        /* @__PURE__ */ d("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ d("button", { style: { ...k, background: "rgba(255,255,255,.10)" }, onClick: () => void b(), children: [
            /* @__PURE__ */ n(We, { size: 16 }),
            " Refresh"
          ] }),
          /* @__PURE__ */ d("button", { style: { ...k, background: "rgba(255,255,255,.10)" }, onClick: () => W(!0), children: [
            /* @__PURE__ */ n(Je, { size: 16 }),
            " Settings"
          ] }),
          /* @__PURE__ */ d("button", { style: { ...k, background: "linear-gradient(90deg,#a855f7,#ec4899)" }, onClick: () => void te(), children: [
            /* @__PURE__ */ n(Ee, { size: 16 }),
            " Open folder"
          ] })
        ] })
      ] }),
      (z || B) && /* @__PURE__ */ n("div", { style: { ...j, padding: 14, marginBottom: 16, borderColor: z ? "rgba(248,113,113,.45)" : "rgba(52,211,153,.35)", color: z ? "#fecaca" : "#bbf7d0" }, children: z ?? B }),
      /* @__PURE__ */ d("main", { style: { display: "grid", gridTemplateColumns: "minmax(360px, 0.9fr) minmax(460px, 1.1fr)", gap: 18 }, children: [
        /* @__PURE__ */ d("section", { style: { ...j, padding: 18 }, children: [
          /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
            /* @__PURE__ */ n(Ze, {}),
            " ",
            /* @__PURE__ */ n("h2", { style: { margin: 0 }, children: "Creator Panel" })
          ] }),
          /* @__PURE__ */ n("label", { style: { fontSize: 12, color: "#c4b5fd", fontWeight: 800 }, children: "Title" }),
          /* @__PURE__ */ n("input", { value: h, onChange: (i) => K(i.target.value), style: { ...E, margin: "6px 0 14px" }, placeholder: "Song title" }),
          /* @__PURE__ */ n("label", { style: { fontSize: 12, color: "#c4b5fd", fontWeight: 800 }, children: "Prompt / style" }),
          /* @__PURE__ */ n("textarea", { value: x, onChange: (i) => Z(i.target.value), rows: 4, style: { ...E, resize: "vertical", margin: "6px 0 14px" }, placeholder: "genre, mood, bpm, instruments, vocal direction…" }),
          /* @__PURE__ */ n("label", { style: { fontSize: 12, color: "#c4b5fd", fontWeight: 800 }, children: "Lyrics" }),
          /* @__PURE__ */ n("textarea", { value: S, onChange: (i) => Q(i.target.value), rows: 12, style: { ...E, resize: "vertical", margin: "6px 0 12px", fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: 13 }, placeholder: "Paste or write lyrics…" }),
          /* @__PURE__ */ d("label", { style: { display: "flex", alignItems: "center", gap: 8, color: "#ddd6fe", fontSize: 13, marginBottom: 14 }, children: [
            /* @__PURE__ */ n("input", { type: "checkbox", checked: $, onChange: (i) => he(i.target.checked) }),
            " Instrumental mode"
          ] }),
          /* @__PURE__ */ d("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }, children: [
            /* @__PURE__ */ d("button", { disabled: v, style: { ...k, background: "rgba(255,255,255,.12)", opacity: v ? 0.55 : 1 }, onClick: () => void X(), children: [
              /* @__PURE__ */ n(Ge, { size: 16 }),
              " Save draft"
            ] }),
            /* @__PURE__ */ d("button", { disabled: v || !p || !y, style: { ...k, background: "linear-gradient(90deg,#a855f7,#ec4899)", opacity: v || !p || !y ? 0.55 : 1 }, onClick: () => void ee(), children: [
              v ? /* @__PURE__ */ n(re, { size: 16, className: "spin" }) : /* @__PURE__ */ n(ae, { size: 16 }),
              " ",
              v ? "Generating…" : "Generate"
            ] })
          ] }),
          /* @__PURE__ */ d("div", { style: { marginTop: 14, color: "#a78bfa", fontSize: 12 }, children: [
            "Pod: ",
            /* @__PURE__ */ n("b", { children: be?.id ?? "none" }),
            " · Model: ",
            /* @__PURE__ */ n("b", { children: y || "none discovered" }),
            w ? /* @__PURE__ */ d(ve, { children: [
              " · Mirror: ",
              /* @__PURE__ */ n("b", { children: w })
            ] }) : null
          ] })
        ] }),
        /* @__PURE__ */ d("section", { style: { ...j, padding: 18 }, children: [
          /* @__PURE__ */ d("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }, children: [
            /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ n(Te, {}),
              /* @__PURE__ */ n("h2", { style: { margin: 0 }, children: "Library Gallery" })
            ] }),
            /* @__PURE__ */ d("span", { style: { color: "#c4b5fd", fontSize: 12, fontWeight: 800 }, children: [
              O.length,
              " tracks"
            ] })
          ] }),
          L ? /* @__PURE__ */ d("div", { style: { color: "#c4b5fd", padding: 24 }, children: [
            /* @__PURE__ */ n(re, { size: 18, className: "spin" }),
            " Loading…"
          ] }) : null,
          !L && O.length === 0 ? /* @__PURE__ */ d("div", { style: { border: "1px dashed rgba(255,255,255,.18)", borderRadius: 16, padding: 32, textAlign: "center", color: "#c4b5fd" }, children: [
            /* @__PURE__ */ n(Pe, { size: 36 }),
            /* @__PURE__ */ n("p", { children: "No tracks yet. Generate one or save a draft." })
          ] }) : null,
          /* @__PURE__ */ n("div", { style: { display: "grid", gap: 12 }, children: O.map((i) => {
            const l = ce(i, o), c = i.favourited;
            return /* @__PURE__ */ d("article", { style: { display: "grid", gridTemplateColumns: "92px 1fr auto", gap: 14, alignItems: "center", padding: 12, borderRadius: 16, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)" }, children: [
              /* @__PURE__ */ n("img", { alt: "cover", src: se(i.title, i.prompt), style: { width: 92, height: 92, borderRadius: 14, objectFit: "cover" } }),
              /* @__PURE__ */ d("div", { style: { minWidth: 0 }, children: [
                /* @__PURE__ */ n("div", { style: { fontWeight: 900, fontSize: 18, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: i.title }),
                /* @__PURE__ */ d("div", { style: { color: "#c4b5fd", fontSize: 12, margin: "4px 0 8px" }, children: [
                  i.modelId ?? "draft",
                  " · ",
                  i.durationSeconds ? `${Math.round(i.durationSeconds)}s` : l ? "audio mirrored" : "lyrics/draft"
                ] }),
                /* @__PURE__ */ n("div", { style: { color: "#ddd6fe", fontSize: 13, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }, children: i.prompt || i.lyrics || "No prompt" })
              ] }),
              /* @__PURE__ */ d("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ n("button", { title: "Play", disabled: !l, style: { ...k, padding: 10, background: l ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.05)", opacity: l ? 1 : 0.4 }, onClick: () => ke(i), children: J === i.id ? /* @__PURE__ */ n(Fe, { size: 16 }) : /* @__PURE__ */ n(Ue, { size: 16 }) }),
                /* @__PURE__ */ n("button", { title: "Favorite", style: { ...k, padding: 10, background: c ? "#ec4899" : "rgba(255,255,255,.12)" }, onClick: () => void et(t, i.id, !c).then(b), children: /* @__PURE__ */ n(Ne, { size: 16, fill: c ? "currentColor" : "none" }) }),
                /* @__PURE__ */ n("button", { title: "Delete", style: { ...k, padding: 10, background: "rgba(248,113,113,.16)" }, onClick: () => void Xe(t, i.id).then(b), children: /* @__PURE__ */ n(qe, { size: 16 }) })
              ] })
            ] }, i.id);
          }) })
        ] })
      ] })
    ] }),
    me && /* @__PURE__ */ n("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.58)", display: "grid", placeItems: "center", padding: 24 }, onClick: () => W(!1), children: /* @__PURE__ */ d("div", { style: { ...j, width: "min(680px, 100%)", padding: 20 }, onClick: (i) => i.stopPropagation(), children: [
      /* @__PURE__ */ n("h2", { style: { marginTop: 0 }, children: "JULI3TA Settings" }),
      /* @__PURE__ */ n("label", { style: { fontSize: 12, color: "#c4b5fd", fontWeight: 800 }, children: "Pod" }),
      /* @__PURE__ */ n("select", { value: p, onChange: (i) => {
        U(i.target.value), D("");
      }, style: { ...E, margin: "6px 0 14px" }, children: T.length === 0 ? /* @__PURE__ */ n("option", { value: "", children: "No runnable pods" }) : T.map((i) => /* @__PURE__ */ d("option", { value: i.id, children: [
        i.id,
        " · ",
        i.status
      ] }, i.id)) }),
      /* @__PURE__ */ n("label", { style: { fontSize: 12, color: "#c4b5fd", fontWeight: 800 }, children: "Music model" }),
      /* @__PURE__ */ n("select", { value: y, onChange: (i) => D(i.target.value), style: { ...E, margin: "6px 0 14px" }, children: V.length === 0 ? /* @__PURE__ */ n("option", { value: "", children: "No models discovered" }) : V.map((i) => /* @__PURE__ */ n("option", { value: i, children: i }, i)) }),
      /* @__PURE__ */ n("p", { style: { color: "#c4b5fd", fontSize: 13 }, children: "Technical note: v0.1 uses host.daemon.callPodEndpoint for `/v1/models` and `/v1/music/generations`. It mirrors generated data through `host.daemon.juli3taLibrary` when available; real Finder file implementation remains daemon-owned." }),
      /* @__PURE__ */ n("button", { style: { ...k, background: "linear-gradient(90deg,#a855f7,#ec4899)" }, onClick: () => W(!1), children: "Done" })
    ] }) }),
    /* @__PURE__ */ n("style", { children: ".spin{animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}} select option{background:#1f0b35;color:white}" })
  ] });
}
function ft(e) {
  const t = e.host.storage.current(), r = t.migrate?.("migrations/") ?? Promise.resolve();
  return function() {
    return /* @__PURE__ */ n(
      ct,
      {
        host: e.host,
        db: t,
        migrationReady: r
      }
    );
  };
}
export {
  ft as default
};
//# sourceMappingURL=index.js.map
