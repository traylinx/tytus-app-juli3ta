import { jsx as t, jsxs as s, Fragment as he } from "react/jsx-runtime";
import { createContext as Yi, useContext as Xi, forwardRef as Qi, createElement as so, useState as S, useEffect as B, useMemo as ge, useRef as te, useCallback as M, Fragment as ol } from "react";
import { createPortal as Pa } from "react-dom";
const Zi = Yi(null), il = Zi.Provider;
function la() {
  const e = Xi(Zi);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sl = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), vi = (e) => {
  const a = sl(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, en = (...e) => e.filter((a, r, o) => !!a && a.trim() !== "" && o.indexOf(a) === r).join(" ").trim(), ll = (e) => {
  for (const a in e)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cl = {
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
const dl = Qi(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: n = "",
    children: l,
    iconNode: d,
    ...g
  }, m) => so(
    "svg",
    {
      ref: m,
      ...cl,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(a) : r,
      className: en("lucide", n),
      ...!l && !ll(g) && { "aria-hidden": "true" },
      ...g
    },
    [
      ...d.map(([h, b]) => so(h, b)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = (e, a) => {
  const r = Qi(
    ({ className: o, ...n }, l) => so(dl, {
      ref: l,
      iconNode: a,
      className: en(
        `lucide-${nl(vi(e))}`,
        `lucide-${e}`,
        o
      ),
      ...n
    })
  );
  return r.displayName = vi(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], pl = $("album", ul);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], oa = $("check", ml);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], tn = $("chevron-down", hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gl = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], xi = $("chevron-left", gl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], fl = $("chevron-right", yl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], vl = $("chevron-up", bl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Ia = $("circle-alert", xl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], kl = $("circle-question-mark", wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], an = $("copy", Sl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], jt = $("disc-3", Tl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], rn = $("download", _l);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], fo = $("ellipsis-vertical", Nl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], on = $("external-link", Cl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = [
  [
    "path",
    {
      d: "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35",
      key: "5ad7z2"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 20v-7l3 1.474", key: "1ggyb9" }],
  ["circle", { cx: "6", cy: "20", r: "2", key: "j7wjp0" }]
], Dt = $("file-music", El);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], Ll = $("folder-open", Al);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], ur = $("heart", Ml);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Ra = $("image", zl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], lo = $("layers", Il);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Pl = $("list-music", Rl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], re = $("loader-circle", jl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], st = $("mic", Dl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], wi = $("monitor-speaker", Ul);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], ki = $("monitor", Ol);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hl = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], $l = $("moon", Hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], ja = $("music-2", Fl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], pr = $("notebook-text", Bl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], Tt = $("pause", Wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], nn = $("pencil", ql);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Se = $("play", Jl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], co = $("plus", Gl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Kl = $("radio", Vl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Xl = $("refresh-cw", Yl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], sn = $("repeat-1", Ql);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], ec = $("repeat", Zl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], vt = $("search", tc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], ln = $("settings-2", ac);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], bo = $("shuffle", rc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
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
], lt = $("sparkles", oc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], cn = $("square-check-big", ic);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], dn = $("square", nc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ut = $("trash-2", sc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], vo = $("upload", lc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], dc = $("user-round", cc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], pc = $("volume-2", uc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], hc = $("volume-x", mc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = [
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
], Ot = $("wand-sparkles", gc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], we = $("x", yc), fc = {
  "appLauncher.aria": "Application launcher",
  "appLauncher.searchPlaceholder": "Type to search applications...",
  "appLauncher.frequentlyUsed": "Frequently Used",
  "appLauncher.noAppsFound": "No applications found",
  "appLauncher.scrollUp": "Scroll up",
  "appLauncher.scrollDown": "Scroll down",
  "commandPalette.aria": "Command palette",
  "commandPalette.placeholder": "Type a command…",
  "commandPalette.noMatch": "No commands match.",
  "command.section.apps": "Apps",
  "command.section.pods": "Pods",
  "command.section.system": "System",
  "command.openSettings": "Open Settings",
  "command.openPodInspector": "Open Pod Inspector",
  "command.openHelp": "Open Help",
  "command.openChat": "Open Chat",
  "command.openFiles": "Open Files",
  "command.openChannels": "Open Channels",
  "command.openPod": "Open Pod {podId} ({agentType})",
  "command.refreshDaemon": "Refresh daemon state",
  "command.signOut": "Sign out",
  "category.Favorites": "Favorites",
  "category.All": "All",
  "category.System": "System",
  "category.Internet": "Internet",
  "category.Productivity": "Productivity",
  "category.Media": "Media",
  "category.DevTools": "DevTools",
  "category.Creative": "Creative",
  "category.Games": "Games",
  "settings.section.tytus": "TYTUS",
  "settings.section.system": "SYSTEM",
  "settings.searchPlaceholder": "Search settings...",
  "settings.category.account": "Account",
  "settings.category.plan": "Plan & Units",
  "settings.category.pods": "Pods",
  "settings.category.agents": "Agents",
  "settings.category.daemon": "Daemon",
  "settings.category.sharing": "Sharing",
  "settings.category.background": "Background",
  "settings.category.appearance": "Appearance",
  "settings.category.language": "Languages",
  "settings.category.notifications": "Notifications",
  "settings.category.privacy": "Privacy",
  "settings.category.about": "About",
  "settings.background.title": "Background",
  "settings.background.section.presets": "Tytus presets",
  "settings.background.section.custom": "Personalize",
  "settings.background.custom.label": "Custom image",
  "settings.background.custom.uploadCta": "Upload image",
  "settings.background.custom.uploadHint": "JPEG, PNG, or WebP",
  "settings.background.custom.previewAlt": "Custom background preview",
  "settings.background.custom.remove": "Remove",
  "settings.background.custom.footer": "Your image stays on this machine — never uploaded. Max {maxMb} MB.",
  "settings.background.color.label": "Solid color",
  "settings.background.color.cta": "Pick a color",
  "settings.languages.title": "Languages",
  "settings.languages.defaultTitle": "Default language",
  "settings.languages.defaultDescription": "Pick the system display language. Community packs can add more languages without an app rebuild.",
  "settings.appearance.language.title": "Language",
  "settings.appearance.language.description": "Choose the display language for Tytus OS.",
  "settings.appearance.language.system": "System language",
  "settings.appearance.language.current": "Current language",
  "settings.appearance.language.bundled": "Bundled",
  "settings.appearance.language.community": "Community",
  "settings.appearance.language.import": "Import language pack",
  "settings.appearance.language.importHint": "Import a community JSON pack. Missing keys fall back to English.",
  "settings.appearance.language.importSuccess": "Installed {name}.",
  "settings.appearance.language.importError": "Could not import language pack: {message}",
  "settings.appearance.language.remove": "Remove",
  "settings.appearance.language.format": "Language pack format",
  "settings.appearance.language.downloadRoadmap": "Downloadable packs are local JSON first; signed catalog download can plug into this later without changing app strings.",
  // ── Phase 1.1 Custom accent ──
  "settings.appearance.accent.title": "Accent color",
  "settings.appearance.accent.description": "Picks the primary highlight color used across the OS shell and supported apps.",
  "settings.appearance.accent.custom": "Custom",
  "settings.appearance.accent.customHint": "Pick any hex color. Buttons, focus rings, and selection states follow.",
  // ── Phase 1.3 Font scale ──
  "settings.appearance.fontScale.title": "Text size",
  "settings.appearance.fontScale.description": "Scales every text element across Tytus OS. 100% is the default.",
  "settings.appearance.fontScale.reset": "Reset to 100%",
  // ── Phase 1.4 Mode schedule ──
  "settings.appearance.schedule.title": "Light/dark schedule",
  "settings.appearance.schedule.description": "Choose how Tytus OS picks light or dark mode.",
  "settings.appearance.schedule.manual": "Manual (use the toggle above)",
  "settings.appearance.schedule.alwaysLight": "Always light",
  "settings.appearance.schedule.alwaysDark": "Always dark",
  "settings.appearance.schedule.auto": "Auto (light 06:00–18:00 local)",
  // ── Phase 1.5 Lock-screen wallpaper ──
  "settings.background.lockMatch.title": "Match lock screen to desktop",
  "settings.background.lockMatch.description": "When on, the lock and login screens show your desktop wallpaper. Off uses the bundled Tytus default.",
  // ── Phase 1.2 Dock customization ──
  "settings.category.dock": "Dock",
  "settings.dock.title": "Dock",
  "settings.dock.position.title": "Position",
  "settings.dock.position.bottom": "Bottom",
  "settings.dock.position.left": "Left",
  "settings.dock.position.right": "Right",
  "settings.dock.size.title": "Size",
  "settings.dock.size.small": "Small",
  "settings.dock.size.medium": "Medium",
  "settings.dock.size.large": "Large",
  "settings.dock.autoHide.title": "Auto-hide",
  "settings.dock.autoHide.description": "Hide the Dock until you point at the screen edge.",
  "settings.dock.order.reset": "Reset Dock order",
  "settings.dock.order.resetHint": "Restores the default app order. The Trash icon stays last.",
  // ── Sprint B Phase 7 system sounds ──
  "settings.sounds.title": "System sounds",
  "settings.sounds.description": "Play a short chime for notifications, errors, and trash actions.",
  // ── Sprint B Phase 6.4 reduce motion ──
  "settings.appearance.reduceMotion.title": "Reduce motion",
  "settings.appearance.reduceMotion.description": "Disable open/close, minimize, and snap animations. Tytus OS still respects your system reduced-motion preference.",
  // ── Sprint B Phase 5.4 host clipboard ──
  "clipboard.permission.deniedToast": "Clipboard access denied — enable it in {browser} settings.",
  "clipboard.permission.deniedToast.help": "Help",
  "clipboard.paste.success.image": "Pasted image to {target}",
  "clipboard.paste.success.text": "Pasted text to {target}",
  "clipboard.paste.success.files": "Pasted {count} file(s) to {target}",
  "clipboard.paste.empty": "Nothing to paste from clipboard",
  "settings.privacy.clipboard.title": "Clipboard permission",
  "settings.privacy.clipboard.description": "Tytus asks once per session before reading from the host clipboard. Reset to ask again.",
  "settings.privacy.clipboard.reset": "Reset clipboard permission",
  "settings.privacy.clipboard.statusGranted": "Granted",
  "settings.privacy.clipboard.statusDenied": "Denied",
  "settings.privacy.clipboard.statusPrompt": "Will ask",
  // ── Sprint B Phase 6 window management ──
  "menu.window.maximize": "Maximize",
  "menu.window.unmaximize": "Restore",
  "menu.window.snapLeft": "Snap left",
  "menu.window.snapRight": "Snap right",
  "shell.Window": "Window",
  "shell.Minimize Window": "Minimize Window",
  "shell.Close Window": "Close Window",
  "shell.Help": "Help",
  "shell.Tytus Help": "Tytus Help",
  "shell.Apps": "Apps",
  "shell.Open App Launcher": "Open App Launcher",
  "shell.Pods": "Pods",
  "shell.Open Pod Inspector": "Open Pod Inspector",
  "shell.Install Agent…": "Install Agent…",
  "shell.Channels": "Channels",
  "shell.Open Channels": "Open Channels",
  "shell.Files": "Files",
  "shell.Open Files": "Open Files",
  "shell.Settings": "Settings",
  "shell.System Settings…": "System Settings…",
  "shell.Daemon Settings": "Daemon Settings",
  "shell.Account": "Account",
  "shell.Plan & Units": "Plan & Units",
  "shell.Tytus": "Tytus",
  "shell.Agents": "Agents",
  "shell.Daemon": "Daemon",
  "shell.View": "View",
  "shell.Background": "Background",
  "shell.Appearance": "Appearance",
  "shell.Notifications": "Notifications",
  "shell.Privacy": "Privacy",
  "shell.About": "About",
  "shell.Pod": "Pod",
  "shell.Refresh Daemon State": "Refresh Daemon State",
  "shell.Pods Settings": "Pods Settings",
  "shell.Install Channel Agent…": "Install Channel Agent…",
  "shell.File": "File",
  "shell.New Files Window": "New Files Window",
  "shell.Shell": "Shell",
  "shell.New Terminal Window": "New Terminal Window",
  "shell.Chat": "Chat",
  "shell.Song": "Song",
  "shell.New Song": "New Song",
  "shell.Surprise me…": "Surprise me…",
  "shell.Cover Mode": "Cover Mode",
  "shell.Lyrics Only Mode": "Lyrics Only Mode",
  "shell.How it works…": "How it works…",
  "shell.Music Creator Settings…": "JULI3TA Settings…",
  "shell.JULI3TA Settings…": "JULI3TA Settings…",
  "shell.JULI3TA Help…": "JULI3TA Help…",
  "app.app-store.name": "App Store",
  "app.app-store.description": "Browse and discover recommended apps. Check install status on your machine.",
  "app.pod-inspector.name": "Pod Inspector",
  "app.pod-inspector.description": "Inspect, restart, uninstall, revoke pods. Live job logs.",
  "app.channels.name": "Channels",
  "app.channels.description": "Telegram, Slack, iMessage, Matrix bindings per pod.",
  "app.help.name": "Help",
  "app.help.description": "Doctor, daemon lifecycle, log tail, troubleshooting.",
  "app.settings.name": "System Settings",
  "app.settings.description": "Account, plan, pods, agents, daemon, appearance, notifications, privacy.",
  "app.filemanager.name": "Files",
  "app.filemanager.description": "Browse local, pod inbox, downloads, garage shared folders.",
  "app.terminal.name": "Terminal",
  "app.terminal.description": "Local shell + tytus exec into pod containers.",
  "app.systemmonitor.name": "System Monitor",
  "app.systemmonitor.description": "CPU, memory, disk, network — host + pods.",
  "app.archivemanager.name": "Archive Manager",
  "app.archivemanager.description": "Create and extract ZIP, TAR, 7Z archives.",
  "app.chat.name": "Chat",
  "app.chat.description": "Talk to your pod AI.",
  "app.browser.name": "Browser",
  "app.browser.description": "Open Tytus pod URLs, agent docs, GitHub.",
  "app.weather.name": "Weather",
  "app.weather.description": "Weather forecast with locations.",
  "app.rssreader.name": "RSS Reader",
  "app.rssreader.description": "Feed reader for news subscriptions.",
  "app.notes.name": "Notes",
  "app.notes.description": "Quick notes with folders.",
  "app.todo.name": "Todo",
  "app.todo.description": "Task list with priorities and projects.",
  "app.reminders.name": "Reminders",
  "app.reminders.description": "Time-based reminders.",
  "app.calendar.name": "Calendar",
  "app.calendar.description": "Monthly view with events.",
  "app.calculator.name": "Calculator",
  "app.calculator.description": "Standard calculator with history.",
  "app.clock.name": "Clock",
  "app.clock.description": "World clock, alarms, timer, stopwatch.",
  "app.spreadsheet.name": "Spreadsheet",
  "app.spreadsheet.description": "Basic spreadsheet with formulas.",
  "app.texteditor.name": "Text Editor",
  "app.texteditor.description": "Edit plain text files.",
  "app.documentviewer.name": "Document Viewer",
  "app.documentviewer.description": "PDF and document viewer.",
  "app.markdownpreview.name": "Markdown Preview",
  "app.markdownpreview.description": "Live markdown with GitHub styling.",
  "app.imageviewer.name": "Image Viewer",
  "app.imageviewer.description": "View images with zoom and slideshow.",
  "app.imagegallery.name": "Image Gallery",
  "app.imagegallery.description": "Browse and organize image collections.",
  "app.photoeditor.name": "Photo Editor",
  "app.photoeditor.description": "Basic photo editing with filters.",
  "app.musicplayer.name": "Music Player",
  "app.musicplayer.description": "Audio player with playlist.",
  "app.musiccreator.name": "JULI3TA",
  "app.musiccreator.description": "Generate full songs with AI lyrics + music. Powered by your pod.",
  "app.videoplayer.name": "Video Player",
  "app.videoplayer.description": "Video player with controls.",
  "app.voicerecorder.name": "Voice Recorder",
  "app.voicerecorder.description": "Record audio from your microphone.",
  "app.screenrecorder.name": "Screen Recorder",
  "app.screenrecorder.description": "Capture and record your screen.",
  "app.mediaconverter.name": "Media Converter",
  "app.mediaconverter.description": "Convert between media formats.",
  "app.codeeditor.name": "Code Editor",
  "app.codeeditor.description": "Syntax-highlighted code editor with tabs.",
  "app.apitester.name": "API Tester",
  "app.apitester.description": "Postman-style HTTP request builder. Real fetch.",
  "app.jsonformatter.name": "JSON Formatter",
  "app.jsonformatter.description": "Format, validate, and beautify JSON.",
  "app.regextester.name": "Regex Tester",
  "app.regextester.description": "Test and debug regular expressions.",
  "app.base64tool.name": "Base64 Tool",
  "app.base64tool.description": "Encode/decode Base64 and URL strings.",
  "app.colorpalette.name": "Color Palette",
  "app.colorpalette.description": "Color schemes and palette generation.",
  "app.drawing.name": "Drawing",
  "app.drawing.description": "Canvas-based drawing with brushes.",
  "app.whiteboard.name": "Whiteboard",
  "app.whiteboard.description": "Infinite canvas for sketches.",
  "app.colorpicker.name": "Color Picker",
  "app.colorpicker.description": "Pick colors, generate palettes.",
  "app.asciiart.name": "ASCII Art",
  "app.asciiart.description": "Create ASCII text art and diagrams.",
  "app.matrixrain.name": "Matrix Rain",
  "app.matrixrain.description": "Animated falling characters.",
  "app.minesweeper.name": "Minesweeper",
  "app.minesweeper.description": "Classic minesweeper with 3 difficulty levels.",
  "app.snake.name": "Snake",
  "app.snake.description": "Classic snake game with increasing speed.",
  "app.tetris.name": "Tetris",
  "app.tetris.description": "Block-stacking puzzle game.",
  "app.tictactoe.name": "Tic-Tac-Toe",
  "app.tictactoe.description": "2-player and AI tic-tac-toe.",
  "app.game2048.name": "2048",
  "app.game2048.description": "Number sliding puzzle.",
  "app.sudoku.name": "Sudoku",
  "app.sudoku.description": "9×9 number puzzle with 4 difficulties.",
  "app.chess.name": "Chess",
  "app.chess.description": "Chess with AI opponent.",
  "app.memory.name": "Memory Game",
  "app.memory.description": "Card matching memory game.",
  "app.pong.name": "Pong",
  "app.pong.description": "Classic paddle ball game.",
  "app.solitaire.name": "Solitaire",
  "app.solitaire.description": "Classic card solitaire.",
  "app.flappybird.name": "Flappy Bird",
  "app.flappybird.description": "Side-scrolling arcade game.",
  "shell.Languages": "Languages",
  "top.aboutTytusOS": "About Tytus OS",
  "top.systemSettings": "System Settings…",
  "top.openApps": "Open Apps",
  "top.lockScreen": "Lock Screen",
  "top.signingOut": "Signing out…",
  "top.logOutUser": "Log Out {user}…",
  "top.confirmLogoutTitle": "Log out of Tytus?",
  "top.confirmLogoutBody": "This revokes live pods and clears local credentials. Lock Screen is safer if you only want to hide the desktop.",
  "top.cancel": "Cancel",
  "top.logOut": "Log out",
  "desktop.podLabel": "Pod {podId}",
  "desktop.unpin": "Unpin",
  "desktop.notify.dropTitle": "Added to Desktop",
  "desktop.notify.dropBody": "{name}",
  "context.open": "Open",
  "context.cut": "Cut",
  "context.copy": "Copy",
  "context.rename": "Rename",
  "context.moveToTrash": "Move to Trash",
  "dock.trash": "Trash",
  "dock.aria": "Application dock",
  "dock.showApplications": "Show applications",
  "status.Checking": "Checking",
  "status.Offline": "Offline",
  "status.No state": "No state",
  "status.Stopped": "Stopped",
  "status.Degraded": "Degraded",
  "status.Connected": "Connected",
  "status.Session expired": "Session expired",
  "status.daemonTitle": "Daemon {label}: {detail}",
  "plan.unitsFootnote": "Units are consumed by allocated agents (OpenClaw = 1 unit, Hermes = 2 units). Included AIL pods don't count against your unit budget.",
  "status.unitsUsed": "{used}/{limit} units",
  "status.unitsUnknown": "units unknown",
  "status.podSingular": "{count} pod",
  "status.podPlural": "{count} pods",
  "status.noPodsYet": "No agent pods yet — click to allocate. (AIL is always included for free.)",
  "status.podsDetail": "{count} allocated · {jobs} active jobs · {units}",
  "settings.languages.officialTitle": "Add from official Tytus OS GitHub",
  "settings.languages.officialHint": "Only packs listed in the official Tytus OS GitHub catalog can be downloaded here. Arbitrary URLs are blocked.",
  "settings.languages.officialRefresh": "Check official packs",
  "settings.languages.officialLoadError": "Could not load official language catalog: {message}",
  "settings.languages.officialInstallError": "Could not install official language pack: {message}",
  "settings.languages.officialPackMeta": "{locale} · v{version} · GitHub official",
  "settings.languages.installed": "installed",
  "settings.languages.catalogLink": "Official language catalog",
  "settings.languages.spanishRepoLink": "Spanish pack repo",
  "settings.languages.helpFooter": "Tytus speaks English and Spanish now. Help teach the little OS more languages before it starts inventing Klingon error messages.",
  "settings.languages.contributeTitle": "Want to manage a new language?",
  "settings.languages.contributeBody": "Open the catalog repo, copy the Spanish pack structure, and send a PR. Tytus needs humans for nuance, jokes, and not sounding like a toaster with Google Translate.",
  "settings.languages.createPackLink": "Create a new language pack",
  // Agents panel (Settings → Agents)
  "agents.panel.title": "Agents",
  "agents.panel.subtitle": "Install an agent into a pod. Each install consumes the agent's unit cost.",
  "agents.panel.loading": "Loading catalog…",
  "agents.panel.loadError": "Couldn't load catalog: {message}",
  "agents.panel.retry": "Retry",
  "agents.panel.install": "Install",
  "agents.panel.website": "Website",
  "agents.panel.github": "GitHub",
  "agents.panel.unitSingular": "unit",
  "agents.panel.unitPlural": "units",
  "agents.panel.runningOnSingular": "{count} running on pod {pods}",
  "agents.panel.runningOnPlural": "{count} running on pods {pods}",
  "agents.panel.reasonPlan": "Requires {plan} plan or higher",
  "agents.panel.reasonUnits": "Needs {needed} {unit}, only {available} available",
  // Agent display copy (shared by Settings → Agents and Chat → per-pod landing)
  "agents.openclaw.name": "OpenClaw",
  "agents.openclaw.tagline": "Your personal AI on every channel you already use",
  "agents.openclaw.description": "Chat with your assistant from Telegram, WhatsApp, Signal, Discord, Slack, iMessage, Matrix and 20+ more — all from one always-on brain. Voice in, voice out. Live Canvas you can point at and steer.",
  "agents.openclaw.highlight.0": "25+ messaging channels — one assistant, every app",
  "agents.openclaw.highlight.1": "Voice + Canvas — speak, listen, and watch it draw",
  "agents.openclaw.highlight.2": "Hardened by an NVIDIA secure-agent sandbox for extra safety",
  "agents.openclaw.highlight.3": "Always-on — ready whenever you need it",
  "agents.hermes.name": "Hermes",
  "agents.hermes.tagline": "The self-improving AI agent that gets smarter as you use it",
  "agents.hermes.description": "Learns from every task. Creates its own skills, remembers every past conversation, runs scheduled jobs, and splits complex work across parallel subagents. Talk to it from your terminal, Telegram, Discord, or Slack.",
  "agents.hermes.highlight.0": "Self-improving skills — sharper every time you use them",
  "agents.hermes.highlight.1": "Total recall — searches every past conversation",
  "agents.hermes.highlight.2": "Scheduled automations — daily reports, nightly audits",
  "agents.hermes.highlight.3": "Parallel subagents — splits big jobs into concurrent work",
  // Chat app
  "chat.sidebar.podsHeader": "Pods",
  "chat.sidebar.includedHeader": "Included",
  "chat.sidebar.podLabel": "Pod {podId}",
  "chat.sidebar.empty": "No pods allocated.",
  "chat.sidebar.loading": "Loading…",
  "chat.empty.title": "No pods to chat with",
  "chat.empty.body": "Allocate a pod first — once it's running, you'll be able to open it right here.",
  "chat.empty.cta": "Allocate a pod →",
  "chat.picker.hint": "Select a pod from the left to start chatting.",
  "chat.agent.podLabel": "Pod {podId}",
  "chat.agent.openInBrowser": "Open Pod {podId} in browser →",
  "chat.agent.openError": "Couldn't open pod {podId} in your browser. Check tunnel. ({message})",
  "chat.agent.dismissError": "Dismiss",
  "chat.agent.docs": "Docs",
  "chat.agent.connectedApps": "Connected apps",
  "chat.agent.manageChannels": "Manage channels",
  "chat.agent.loadingChannels": "Checking connected apps…",
  "chat.agent.channelsError": "Couldn't load channels: {message}",
  "chat.agent.noChannels": "No connected apps yet — open Channels to wire up Telegram, Discord, Slack, and more.",
  "chat.ail.tooltip": "AIL — one endpoint, every model. Free with your Tytus account.",
  "chat.ail.title": "AIL",
  "chat.ail.tagline": "One endpoint. Every AI provider.",
  "chat.ail.body": "AIL is your private LLM gateway: a single endpoint that routes across MiniMax, Kimi, DeepSeek, Qwen, OpenAI, Anthropic, Gemini and your local CLI tools — with automatic failover when a provider goes down. It speaks both OpenAI and Anthropic protocols, so anything you already use just works.",
  "chat.ail.feature.0": "Speaks OpenAI and Anthropic — paste into Cursor, Claude Code, OpenCode, the Anthropic SDK",
  "chat.ail.feature.1": "Routes across multiple frontier providers with automatic failover",
  "chat.ail.feature.2": "Use your own subscriptions (Gemini CLI, Claude Code, Codex) without extra keys",
  "chat.ail.feature.3": "Included free with every Tytus account — no unit cost, no rate-limit surprise",
  "chat.ail.cta.docs": "Open the docs",
  "chat.ail.cta.podInspector": "Copy URL & key",
  // Music Creator ─────────────────────────────────────────
  "musiccreator.empty.title": "No pod connected",
  "musiccreator.empty.body": "JULI3TA routes through your Tytus pod's AI gateway. Allocate a pod from Pod Inspector to start composing.",
  "musiccreator.header.title": "Music Creation",
  "musiccreator.header.subtitle": "Pod {podId} · ail-music",
  "musiccreator.header.surprise": "Surprise",
  "musiccreator.header.surpriseTitle": "Random theme",
  "musiccreator.header.surpriseFromPlayerTitle": "Remix this track with a random theme",
  "musiccreator.theme.label": "Theme",
  "musiccreator.theme.placeholder": "Describe the song: vibe, mood, story, era…",
  "musiccreator.theme.hint": "We'll write structured lyrics from this. Or paste your own below.",
  "musiccreator.lyrics.label": "Lyrics (optional)",
  "musiccreator.lyrics.placeholder": `[Verse]
Add your own lyrics…
[Chorus]
…`,
  "musiccreator.lyrics.instrumental": "Instrumental",
  "musiccreator.lyrics.template": "Template {n}",
  "musiccreator.lyrics.templateTitle": "Insert structure template",
  "musiccreator.style.label": "Style",
  "musiccreator.style.placeholder": "Genre, mood, tempo, instruments, vocal type…",
  "musiccreator.songName.label": "Song name (optional)",
  "musiccreator.songName.placeholder": "Auto-generated from theme if empty",
  "musiccreator.button.create": "Create Song",
  "musiccreator.button.cancel": "Cancel",
  "musiccreator.phase.lyrics": "Writing lyrics…",
  "musiccreator.phase.song": "Generating music… (~30–90 s)",
  "musiccreator.error.noPod": "No Tytus pod available. Allocate one via Pod Inspector.",
  "musiccreator.error.noInput": "Add a theme/prompt or paste your own lyrics.",
  "musiccreator.error.lyricsTooLong": "Lyrics too long: {count} > {max} chars.",
  "musiccreator.gallery.title": "My Work",
  "musiccreator.gallery.count.one": "{n} track",
  "musiccreator.gallery.count.other": "{n} tracks",
  "musiccreator.error.dismiss": "Dismiss",
  "musiccreator.gallery.searchPlaceholder": "Search My Work…",
  "musiccreator.gallery.searchEmpty": "No tracks match “{q}”.",
  "musiccreator.gallery.empty.title": "Nothing here yet",
  "musiccreator.gallery.empty.body": "Describe a song on the left and hit Create Song. Your tracks will land here with playback and download.",
  "musiccreator.gallery.empty.footer": "100 songs/day · ail-music · MiniMax 2.6",
  "musiccreator.track.untitled": "Untitled",
  "musiccreator.track.download": "Download MP3",
  "musiccreator.track.delete": "Delete",
  "musiccreator.track.lyricsOnly": "Lyrics only",
  "musiccreator.track.openInEditor": "Open lyrics",
  "musiccreator.track.saveToDesktop": "Save to Desktop",
  "musiccreator.track.saveSongToDesktop": "Save song to Desktop",
  "musiccreator.track.saveLyricsToDesktop": "Save lyrics to Desktop",
  "musiccreator.track.playInPlayer": "Play in Music Player",
  "musiccreator.track.loadIntoForm": "Load into form",
  "musiccreator.track.section.song": "Song",
  "musiccreator.track.section.lyrics": "Lyrics",
  "musiccreator.notify.savedToDesktopTitle": "Saved to Desktop",
  "musiccreator.notify.savedToDesktopBody": "{name} is on your Desktop.",
  "musiccreator.notify.songReadyTitle": "Song ready",
  "musiccreator.notify.songReadyBody": '"{title}" is in My Work and Music folder.',
  "musiccreator.notify.noLyricsTitle": "No lyrics to open",
  "musiccreator.notify.noLyricsBody": "This track has no lyrics yet — generate or paste some first.",
  // View tabs (Creator / Player) and Player view ──────────────
  "musiccreator.view.creator": "Creator",
  "musiccreator.view.player": "Player",
  "musiccreator.view.creator.tip": "Compose new songs and edit drafts",
  "musiccreator.view.player.tip": "Listen to saved tracks with full metadata",
  "musiccreator.player.eyebrow.track": "JULI3TA Track",
  "musiccreator.player.eyebrow.lyricSheet": "JULI3TA Lyric Sheet",
  "musiccreator.player.empty.title": "Nothing playing yet",
  "musiccreator.player.empty.body": "Pick a track from the sidebar to open it here, or switch to the Creator tab to compose a new one.",
  "musiccreator.player.empty.openCreator": "Open Creator",
  "musiccreator.player.play": "Play",
  "musiccreator.player.pause": "Pause",
  "musiccreator.player.remixInRestyle": "Remix in Restyle",
  "musiccreator.player.remixInRestyle.tip": "Open this track in Restyle so you can remix it with new style + lyrics",
  "musiccreator.player.lyrics": "Lyrics",
  "musiccreator.player.lyrics.empty": "No lyrics saved with this track.",
  "musiccreator.player.theme": "Theme",
  "musiccreator.player.lyricsDirection": "Lyrics Direction",
  "musiccreator.player.about": "About this track",
  "musiccreator.player.about.created": "Created",
  "musiccreator.player.about.duration": "Duration",
  "musiccreator.player.about.bitrate": "Bitrate",
  "musiccreator.player.about.sampleRate": "Sample rate",
  "musiccreator.player.about.size": "Size",
  "musiccreator.player.about.style": "Style",
  "musiccreator.player.about.format": "Format",
  "musiccreator.player.about.format.mp3": "MP3 audio",
  "musiccreator.player.about.format.lyricSheet": "Lyric sheet",
  // Restyle reference-audio pickers ───────────────────────────
  "musiccreator.restyle.songsPicker.title": "Pick a song from your library",
  "musiccreator.restyle.songsPicker.empty.title": "No songs in your library yet",
  "musiccreator.restyle.songsPicker.empty.body": "Switch to the Song tab and create a track first — it’ll show up here for restyling.",
  "musiccreator.restyle.songsPicker.tooShort": "too short for cover (need ≥6 s)",
  "musiccreator.restyle.button.mySongs": "My songs",
  "musiccreator.restyle.button.mySongs.count": "{count} in library",
  "musiccreator.restyle.button.voiceClips": "Voice clips",
  "musiccreator.restyle.button.voiceClips.count": "{count} saved",
  // JULI3TA in-app help ─────────────────────────────────────
  "julietaHelp.title": "JULI3TA — How it works",
  "julietaHelp.subtitle": "Music creator manual",
  "julietaHelp.tab.start": "Start",
  "julietaHelp.tab.recipes": "Recipes",
  "julietaHelp.tab.help": "Help",
  // Start tab
  "julietaHelp.start.workflow.title": "Make your first song",
  "julietaHelp.start.s1.title": "Describe the vibe",
  "julietaHelp.start.s1.body": "Type a theme — what the song is about, the mood, the era. One or two sentences is plenty. Hit “Surprise” for a random one.",
  "julietaHelp.start.s2.title": "Pick a style (optional)",
  "julietaHelp.start.s2.body": "Add genre, instruments, tempo, vocal type. Or just tap chips like Lo-fi, Jazz, Synthwave to build it up.",
  "julietaHelp.start.s3.title": "Tap Create Song",
  "julietaHelp.start.s3.body": "JULI3TA writes the lyrics first (~3 s), then renders the music (~30–90 s). A real MP3 lands in My Work on the right.",
  "julietaHelp.start.s4.title": "Listen, download, share",
  "julietaHelp.start.s4.body": "Press play to listen inline, the download icon for the MP3, or open Music Player to enjoy the whole library together.",
  "julietaHelp.start.modes.title": "Three modes",
  "julietaHelp.start.mode.song.name": "Song — full track",
  "julietaHelp.start.mode.song.body": "Theme → AI lyrics → music. The default. Best for fresh original songs.",
  "julietaHelp.start.mode.cover.name": "Cover — restyle audio",
  "julietaHelp.start.mode.cover.body": "Drop in a reference clip (a recording, an MP3) and JULI3TA restyles it to match your prompt. The vibe of the source carries over; the genre changes.",
  "julietaHelp.start.mode.lyrics.name": "Lyrics — words only",
  "julietaHelp.start.mode.lyrics.body": "Generate just the lyric sheet without rendering audio. Fast and free of the music quota.",
  "julietaHelp.start.recorder.title": "Voice Recorder integration",
  "julietaHelp.start.recorder.body": 'Open the Voice Recorder app, capture audio (humming, music in the room, an instrument), then come back to JULI3TA → Cover → "From recordings". JULI3TA auto-picks the best 30 s of a long recording, so you can record several minutes and let it find the magic.',
  "julietaHelp.start.tip.title": "✨ Pro tip",
  "julietaHelp.start.tip.body": "For covers, longer recordings often work better — JULI3TA has more material to find a strong 30-second window. Aim for 1–3 minutes of clean audio (avoid lots of silence at the start or end).",
  // Recipes tab
  "julietaHelp.recipes.intro": "Tap “Use” to drop a recipe straight into the form, or “Copy” to paste it elsewhere. These are starting points — change anything before hitting Create Song.",
  "julietaHelp.recipe.use": "Use",
  "julietaHelp.recipe.copy": "Copy",
  // Help tab
  "julietaHelp.help.connection.title": "Connection",
  "julietaHelp.help.usage.title": "Usage",
  "julietaHelp.help.troubleshoot.title": "Troubleshooting",
  "julietaHelp.help.q.failed.title": 'Why am I seeing "Failed to fetch"?',
  "julietaHelp.help.q.failed.body": 'JULI3TA tries three places in order: your Tytus pod (cloud), local switchAILocal, and the upsell screen. "Failed to fetch" means the first two are unreachable. Hit "Try again" — JULI3TA will re-probe each candidate. If your pod went to sleep, restart it from Pod Inspector.',
  "julietaHelp.help.q.nopod.title": "I don't have a Tytus pod",
  "julietaHelp.help.q.nopod.body": "No problem — JULI3TA also works with switchAILocal running on this machine (free, local). If neither is available, the upsell screen has a link to Tytus where you can claim a free Explorer pod.",
  "julietaHelp.help.q.local.title": "How does the local fallback work?",
  "julietaHelp.help.q.local.body": "If the Tytus pod is unreachable, JULI3TA tries http://localhost:18080/v1 with the dev key sk-test-123. That's where switchAILocal binds by default. The amber dot in the header means JULI3TA is using local AIL.",
  "julietaHelp.help.q.howlong.title": "How long does a song take?",
  "julietaHelp.help.q.howlong.body": `Lyrics: 2–5 seconds. Music: 30–90 seconds for a 1–2 minute song. The progress bar curves toward 95% so you'll never see a fake "100%" before the audio actually lands.`,
  "julietaHelp.help.q.quota.title": "How many songs can I make?",
  "julietaHelp.help.q.quota.body": "On the MiniMax Plus plan: 100 songs/day for music, 100/day for covers, 100/day for lyrics. Each bucket counts independently. The dashboard shows live usage.",
  "julietaHelp.help.q.length.title": "How long are the songs?",
  "julietaHelp.help.q.length.body": "JULI3TA picks the duration from the shape of your lyrics — more verses and choruses → longer song. Typical range is 1–3 minutes. There's no manual length control yet.",
  "julietaHelp.help.q.coverlen.title": "What audio works for covers?",
  "julietaHelp.help.q.coverlen.body": "mp3, wav, or flac. 6 seconds minimum, 6 minutes maximum, 50 MB max file size. If your clip is longer than 30 s, JULI3TA automatically picks the loudest sustained section to use as the reference.",
  "julietaHelp.help.q.silentmic.title": "My recording came out silent",
  "julietaHelp.help.q.silentmic.body": "Check the live waveform while recording — if the bars don't dance, the mic input is empty. Try: 1) Approve mic permission in the browser. 2) Pick the right input device in macOS System Settings → Sound. 3) Move closer to the mic.",
  "julietaHelp.help.q.shortrec.title": '"Recording too short" when picking it for cover',
  "julietaHelp.help.q.shortrec.body": "Cover mode needs at least 6 seconds of audio. Record a longer clip and try again — sustained playback (music, an instrument, humming for a verse) works much better than short bursts.",
  "julietaHelp.help.q.privacy.title": "Where does my audio go?",
  "julietaHelp.help.q.privacy.body": "Recordings live in your browser's localStorage — they never leave your machine until you choose to use one for a cover. When you do, JULI3TA auto-extracts a 30 s slice and sends only that slice to your Tytus pod (or local AIL). Original recordings stay local."
}, bc = {
  "appLauncher.aria": "Lanzador de aplicaciones",
  "appLauncher.searchPlaceholder": "Escribe para buscar aplicaciones...",
  "appLauncher.frequentlyUsed": "Usadas con frecuencia",
  "appLauncher.noAppsFound": "No se encontraron aplicaciones",
  "appLauncher.scrollUp": "Desplazar hacia arriba",
  "appLauncher.scrollDown": "Desplazar hacia abajo",
  "commandPalette.aria": "Paleta de comandos",
  "commandPalette.placeholder": "Escribe un comando…",
  "commandPalette.noMatch": "Ningún comando coincide.",
  "command.section.apps": "Aplicaciones",
  "command.section.pods": "Pods",
  "command.section.system": "Sistema",
  "command.openSettings": "Abrir Configuración",
  "command.openPodInspector": "Abrir Inspector de pods",
  "command.openHelp": "Abrir Ayuda",
  "command.openChat": "Abrir Chat",
  "command.openFiles": "Abrir Archivos",
  "command.openChannels": "Abrir Canales",
  "command.openPod": "Abrir pod {podId} ({agentType})",
  "command.refreshDaemon": "Actualizar estado del daemon",
  "command.signOut": "Cerrar sesión",
  "category.Favorites": "Favoritos",
  "category.All": "Todo",
  "category.System": "Sistema",
  "category.Internet": "Internet",
  "category.Productivity": "Productividad",
  "category.Media": "Medios",
  "category.DevTools": "Herramientas dev",
  "category.Creative": "Creatividad",
  "category.Games": "Juegos",
  "settings.section.tytus": "TYTUS",
  "settings.section.system": "SISTEMA",
  "settings.searchPlaceholder": "Buscar ajustes...",
  "settings.category.account": "Cuenta",
  "settings.category.plan": "Plan y unidades",
  "settings.category.pods": "Pods",
  "settings.category.agents": "Agentes",
  "settings.category.daemon": "Daemon",
  "settings.category.sharing": "Compartir",
  "settings.category.background": "Fondo",
  "settings.category.appearance": "Apariencia",
  "settings.category.language": "Idiomas",
  "settings.category.notifications": "Notificaciones",
  "settings.category.privacy": "Privacidad",
  "settings.category.about": "Acerca de",
  "settings.background.title": "Fondo",
  "settings.background.section.presets": "Predeterminados de Tytus",
  "settings.background.section.custom": "Personaliza",
  "settings.background.custom.label": "Imagen propia",
  "settings.background.custom.uploadCta": "Subir imagen",
  "settings.background.custom.uploadHint": "JPEG, PNG o WebP",
  "settings.background.custom.previewAlt": "Vista previa del fondo personalizado",
  "settings.background.custom.remove": "Quitar",
  "settings.background.custom.footer": "Tu imagen se queda en esta máquina — nunca se sube a ningún servidor. Máx. {maxMb} MB.",
  "settings.background.color.label": "Color sólido",
  "settings.background.color.cta": "Elige un color",
  "settings.languages.title": "Idiomas",
  "settings.languages.defaultTitle": "Idioma predeterminado",
  "settings.languages.defaultDescription": "Elige el idioma de visualización del sistema. Los paquetes comunitarios pueden añadir más idiomas sin reconstruir la app.",
  "settings.appearance.language.title": "Idioma",
  "settings.appearance.language.description": "Elige el idioma de visualización de Tytus OS.",
  "settings.appearance.language.system": "Idioma del sistema",
  "settings.appearance.language.current": "Idioma actual",
  "settings.appearance.language.bundled": "Incluido",
  "settings.appearance.language.community": "Comunidad",
  "settings.appearance.language.import": "Importar paquete de idioma",
  "settings.appearance.language.importHint": "Importa un paquete JSON de la comunidad. Las claves faltantes usan inglés.",
  "settings.appearance.language.importSuccess": "{name} instalado.",
  "settings.appearance.language.importError": "No se pudo importar el paquete de idioma: {message}",
  "settings.appearance.language.remove": "Eliminar",
  "settings.appearance.language.format": "Formato del paquete de idioma",
  "settings.appearance.language.downloadRoadmap": "Los paquetes descargables empiezan como JSON local; luego se puede conectar un catálogo firmado sin cambiar los textos de la app.",
  // ── Phase 1.1 Custom accent ──
  "settings.appearance.accent.title": "Color de acento",
  "settings.appearance.accent.description": "Define el color de resalte principal del shell del SO y las apps compatibles.",
  "settings.appearance.accent.custom": "Personalizado",
  "settings.appearance.accent.customHint": "Elige cualquier color hex. Botones, anillos de foco y selecciones lo siguen.",
  // ── Phase 1.3 Font scale ──
  "settings.appearance.fontScale.title": "Tamaño de texto",
  "settings.appearance.fontScale.description": "Escala todos los textos de Tytus OS. 100% es el valor por defecto.",
  "settings.appearance.fontScale.reset": "Restablecer al 100%",
  // ── Phase 1.4 Mode schedule ──
  "settings.appearance.schedule.title": "Programación claro/oscuro",
  "settings.appearance.schedule.description": "Elige cómo Tytus OS decide el modo claro u oscuro.",
  "settings.appearance.schedule.manual": "Manual (usa el interruptor arriba)",
  "settings.appearance.schedule.alwaysLight": "Siempre claro",
  "settings.appearance.schedule.alwaysDark": "Siempre oscuro",
  "settings.appearance.schedule.auto": "Auto (claro 06:00–18:00 local)",
  // ── Phase 1.5 Lock-screen wallpaper ──
  "settings.background.lockMatch.title": "Sincronizar pantalla de bloqueo con el escritorio",
  "settings.background.lockMatch.description": "Si está activo, las pantallas de bloqueo y de inicio muestran tu fondo. Si no, usa el fondo Tytus por defecto.",
  // ── Phase 1.2 Dock customization ──
  "settings.category.dock": "Dock",
  "settings.dock.title": "Dock",
  "settings.dock.position.title": "Posición",
  "settings.dock.position.bottom": "Abajo",
  "settings.dock.position.left": "Izquierda",
  "settings.dock.position.right": "Derecha",
  "settings.dock.size.title": "Tamaño",
  "settings.dock.size.small": "Pequeño",
  "settings.dock.size.medium": "Mediano",
  "settings.dock.size.large": "Grande",
  "settings.dock.autoHide.title": "Ocultar automáticamente",
  "settings.dock.autoHide.description": "Oculta el Dock hasta que apuntes al borde de la pantalla.",
  "settings.dock.order.reset": "Restablecer orden del Dock",
  "settings.dock.order.resetHint": "Restaura el orden por defecto. La Papelera siempre queda al final.",
  // ── Sprint B Fase 7 sonidos del sistema ──
  "settings.sounds.title": "Sonidos del sistema",
  "settings.sounds.description": "Reproduce un breve sonido para notificaciones, errores y acciones de papelera.",
  // ── Sprint B Fase 6.4 reducir movimiento ──
  "settings.appearance.reduceMotion.title": "Reducir movimiento",
  "settings.appearance.reduceMotion.description": "Desactiva las animaciones de abrir/cerrar, minimizar y ajustar. Tytus OS sigue respetando la preferencia del sistema.",
  // ── Sprint B Fase 5.4 portapapeles del navegador ──
  "clipboard.permission.deniedToast": "Acceso al portapapeles denegado — actívalo en la configuración de {browser}.",
  "clipboard.permission.deniedToast.help": "Ayuda",
  "clipboard.paste.success.image": "Imagen pegada en {target}",
  "clipboard.paste.success.text": "Texto pegado en {target}",
  "clipboard.paste.success.files": "{count} archivo(s) pegado(s) en {target}",
  "clipboard.paste.empty": "No hay nada que pegar desde el portapapeles",
  "settings.privacy.clipboard.title": "Permiso del portapapeles",
  "settings.privacy.clipboard.description": "Tytus pregunta una vez por sesión antes de leer del portapapeles del navegador. Restablece para volver a preguntar.",
  "settings.privacy.clipboard.reset": "Restablecer permiso del portapapeles",
  "settings.privacy.clipboard.statusGranted": "Concedido",
  "settings.privacy.clipboard.statusDenied": "Denegado",
  "settings.privacy.clipboard.statusPrompt": "Se preguntará",
  // ── Sprint B Fase 6 gestión de ventanas ──
  "menu.window.maximize": "Maximizar",
  "menu.window.unmaximize": "Restaurar",
  "menu.window.snapLeft": "Ajustar a la izquierda",
  "menu.window.snapRight": "Ajustar a la derecha",
  "shell.Window": "Ventana",
  "shell.Minimize Window": "Minimizar ventana",
  "shell.Close Window": "Cerrar ventana",
  "shell.Help": "Ayuda",
  "shell.Tytus Help": "Ayuda de Tytus",
  "shell.Apps": "Aplicaciones",
  "shell.Open App Launcher": "Abrir lanzador de aplicaciones",
  "shell.Pods": "Pods",
  "shell.Open Pod Inspector": "Abrir Inspector de pods",
  "shell.Install Agent…": "Instalar agente…",
  "shell.Channels": "Canales",
  "shell.Open Channels": "Abrir Canales",
  "shell.Files": "Archivos",
  "shell.Open Files": "Abrir Archivos",
  "shell.Settings": "Configuración",
  "shell.System Settings…": "Configuración del sistema…",
  "shell.Daemon Settings": "Ajustes del daemon",
  "shell.Account": "Cuenta",
  "shell.Plan & Units": "Plan y unidades",
  "shell.Tytus": "Tytus",
  "shell.Agents": "Agentes",
  "shell.Daemon": "Daemon",
  "shell.View": "Vista",
  "shell.Background": "Fondo",
  "shell.Appearance": "Apariencia",
  "shell.Notifications": "Notificaciones",
  "shell.Privacy": "Privacidad",
  "shell.About": "Acerca de",
  "shell.Pod": "Pod",
  "shell.Refresh Daemon State": "Actualizar estado del daemon",
  "shell.Pods Settings": "Ajustes de pods",
  "shell.Install Channel Agent…": "Instalar agente de canal…",
  "shell.File": "Archivo",
  "shell.New Files Window": "Nueva ventana de Archivos",
  "shell.Shell": "Shell",
  "shell.New Terminal Window": "Nueva ventana de Terminal",
  "shell.Chat": "Chat",
  "shell.Song": "Canción",
  "shell.New Song": "Nueva canción",
  "shell.Surprise me…": "Sorpréndeme…",
  "shell.Cover Mode": "Modo cover",
  "shell.Lyrics Only Mode": "Solo letra",
  "shell.How it works…": "Cómo funciona…",
  "shell.Music Creator Settings…": "Ajustes de JULI3TA…",
  "shell.JULI3TA Settings…": "Ajustes de JULI3TA…",
  "shell.JULI3TA Help…": "Ayuda de JULI3TA…",
  "app.app-store.name": "Tienda de aplicaciones",
  "app.app-store.description": "Explora y descubre apps recomendadas. Consulta el estado de instalación en tu máquina.",
  "app.pod-inspector.name": "Inspector de pods",
  "app.pod-inspector.description": "Inspecciona, reinicia, desinstala y revoca pods. Registros de trabajos en vivo.",
  "app.channels.name": "Canales",
  "app.channels.description": "Conexiones de Telegram, Slack, iMessage y Matrix por pod.",
  "app.help.name": "Ayuda",
  "app.help.description": "Doctor, ciclo de vida del daemon, cola de logs y solución de problemas.",
  "app.settings.name": "Configuración del sistema",
  "app.settings.description": "Cuenta, plan, pods, agentes, daemon, apariencia, notificaciones y privacidad.",
  "app.filemanager.name": "Archivos",
  "app.filemanager.description": "Explora archivos locales, bandeja del pod, descargas y carpetas compartidas de Garage.",
  "app.terminal.name": "Terminal",
  "app.terminal.description": "Shell local y tytus exec dentro de contenedores de pods.",
  "app.systemmonitor.name": "Monitor del sistema",
  "app.systemmonitor.description": "CPU, memoria, disco y red — host + pods.",
  "app.archivemanager.name": "Gestor de archivos comprimidos",
  "app.archivemanager.description": "Crea y extrae archivos ZIP, TAR y 7Z.",
  "app.chat.name": "Chat",
  "app.chat.description": "Habla con la IA de tu pod.",
  "app.browser.name": "Navegador",
  "app.browser.description": "Abre URLs de pods Tytus, documentación de agentes y GitHub.",
  "app.weather.name": "Clima",
  "app.weather.description": "Pronóstico del tiempo por ubicación.",
  "app.rssreader.name": "Lector RSS",
  "app.rssreader.description": "Lector de feeds para suscripciones de noticias.",
  "app.notes.name": "Notas",
  "app.notes.description": "Notas rápidas con carpetas.",
  "app.todo.name": "Tareas",
  "app.todo.description": "Lista de tareas con prioridades y proyectos.",
  "app.reminders.name": "Recordatorios",
  "app.reminders.description": "Recordatorios basados en hora.",
  "app.calendar.name": "Calendario",
  "app.calendar.description": "Vista mensual con eventos.",
  "app.calculator.name": "Calculadora",
  "app.calculator.description": "Calculadora estándar con historial.",
  "app.clock.name": "Reloj",
  "app.clock.description": "Reloj mundial, alarmas, temporizador y cronómetro.",
  "app.spreadsheet.name": "Hoja de cálculo",
  "app.spreadsheet.description": "Hoja de cálculo básica con fórmulas.",
  "app.texteditor.name": "Editor de texto",
  "app.texteditor.description": "Edita archivos de texto plano.",
  "app.documentviewer.name": "Visor de documentos",
  "app.documentviewer.description": "Visor de PDF y documentos.",
  "app.markdownpreview.name": "Vista previa Markdown",
  "app.markdownpreview.description": "Markdown en vivo con estilo de GitHub.",
  "app.imageviewer.name": "Visor de imágenes",
  "app.imageviewer.description": "Visualiza imágenes con zoom y presentación.",
  "app.imagegallery.name": "Galería de imágenes",
  "app.imagegallery.description": "Explora y organiza colecciones de imágenes.",
  "app.photoeditor.name": "Editor de fotos",
  "app.photoeditor.description": "Edición básica de fotos con filtros.",
  "app.musicplayer.name": "Reproductor de música",
  "app.musicplayer.description": "Reproductor de audio con lista de reproducción.",
  "app.musiccreator.name": "JULI3TA",
  "app.musiccreator.description": "Genera canciones completas con letras y música por IA. Funciona con tu pod.",
  "app.videoplayer.name": "Reproductor de vídeo",
  "app.videoplayer.description": "Reproductor de vídeo con controles.",
  "app.voicerecorder.name": "Grabadora de voz",
  "app.voicerecorder.description": "Graba audio desde tu micrófono.",
  "app.screenrecorder.name": "Grabador de pantalla",
  "app.screenrecorder.description": "Captura y graba tu pantalla.",
  "app.mediaconverter.name": "Conversor multimedia",
  "app.mediaconverter.description": "Convierte entre formatos multimedia.",
  "app.codeeditor.name": "Editor de código",
  "app.codeeditor.description": "Editor de código con resaltado de sintaxis y pestañas.",
  "app.apitester.name": "Probador de API",
  "app.apitester.description": "Constructor de solicitudes HTTP estilo Postman. Fetch real.",
  "app.jsonformatter.name": "Formateador JSON",
  "app.jsonformatter.description": "Formatea, valida y embellece JSON.",
  "app.regextester.name": "Probador Regex",
  "app.regextester.description": "Prueba y depura expresiones regulares.",
  "app.base64tool.name": "Herramienta Base64",
  "app.base64tool.description": "Codifica/decodifica Base64 y cadenas URL.",
  "app.colorpalette.name": "Paleta de colores",
  "app.colorpalette.description": "Esquemas de color y generación de paletas.",
  "app.drawing.name": "Dibujo",
  "app.drawing.description": "Dibujo en lienzo con pinceles.",
  "app.whiteboard.name": "Pizarra",
  "app.whiteboard.description": "Lienzo infinito para bocetos.",
  "app.colorpicker.name": "Selector de color",
  "app.colorpicker.description": "Elige colores y genera paletas.",
  "app.asciiart.name": "Arte ASCII",
  "app.asciiart.description": "Crea arte de texto ASCII y diagramas.",
  "app.matrixrain.name": "Lluvia Matrix",
  "app.matrixrain.description": "Caracteres animados en caída.",
  "app.minesweeper.name": "Buscaminas",
  "app.minesweeper.description": "Buscaminas clásico con 3 niveles de dificultad.",
  "app.snake.name": "Snake",
  "app.snake.description": "Juego clásico de serpiente con velocidad creciente.",
  "app.tetris.name": "Tetris",
  "app.tetris.description": "Juego de rompecabezas de bloques apilables.",
  "app.tictactoe.name": "Tres en raya",
  "app.tictactoe.description": "Tres en raya para 2 jugadores y contra IA.",
  "app.game2048.name": "2048",
  "app.game2048.description": "Rompecabezas de números deslizantes.",
  "app.sudoku.name": "Sudoku",
  "app.sudoku.description": "Rompecabezas numérico 9×9 con 4 dificultades.",
  "app.chess.name": "Ajedrez",
  "app.chess.description": "Ajedrez con oponente de IA.",
  "app.memory.name": "Juego de memoria",
  "app.memory.description": "Juego de memoria para emparejar cartas.",
  "app.pong.name": "Pong",
  "app.pong.description": "Juego clásico de paletas y pelota.",
  "app.solitaire.name": "Solitario",
  "app.solitaire.description": "Solitario clásico de cartas.",
  "app.flappybird.name": "Flappy Bird",
  "app.flappybird.description": "Juego arcade de desplazamiento lateral.",
  "shell.Languages": "Idiomas",
  "top.aboutTytusOS": "Acerca de Tytus OS",
  "top.systemSettings": "Configuración del sistema…",
  "top.openApps": "Abrir aplicaciones",
  "top.lockScreen": "Bloquear pantalla",
  "top.signingOut": "Cerrando sesión…",
  "top.logOutUser": "Cerrar sesión de {user}…",
  "top.confirmLogoutTitle": "¿Cerrar sesión en Tytus?",
  "top.confirmLogoutBody": "Esto revoca los pods activos y borra las credenciales locales. Bloquear pantalla es más seguro si solo quieres ocultar el escritorio.",
  "top.cancel": "Cancelar",
  "top.logOut": "Cerrar sesión",
  "desktop.podLabel": "Pod {podId}",
  "desktop.unpin": "Desanclar",
  "desktop.notify.dropTitle": "Añadido al escritorio",
  "desktop.notify.dropBody": "{name}",
  "context.open": "Abrir",
  "context.cut": "Cortar",
  "context.copy": "Copiar",
  "context.rename": "Renombrar",
  "context.moveToTrash": "Mover a la papelera",
  "dock.trash": "Papelera",
  "dock.aria": "Dock de aplicaciones",
  "dock.showApplications": "Mostrar aplicaciones",
  "status.Checking": "Comprobando",
  "status.Offline": "Sin conexión",
  "status.No state": "Sin estado",
  "status.Stopped": "Detenido",
  "status.Degraded": "Degradado",
  "status.Connected": "Conectado",
  "status.Session expired": "Sesión caducada",
  "status.daemonTitle": "Daemon {label}: {detail}",
  "plan.unitsFootnote": "Los agentes asignados consumen unidades (OpenClaw = 1 unidad, Hermes = 2 unidades). Los pods de AIL incluidos no cuentan en tu presupuesto.",
  "status.unitsUsed": "{used}/{limit} unidades",
  "status.unitsUnknown": "unidades desconocidas",
  "status.podSingular": "{count} pod",
  "status.podPlural": "{count} pods",
  "status.noPodsYet": "Aún no hay pods de agente — haz clic para asignar. (AIL siempre está incluido gratis.)",
  "status.podsDetail": "{count} asignados · {jobs} trabajos activos · {units}",
  "settings.languages.officialTitle": "Añadir desde GitHub oficial de Tytus OS",
  "settings.languages.officialHint": "Aquí solo se pueden descargar paquetes listados en el catálogo oficial de GitHub de Tytus OS. Las URL arbitrarias están bloqueadas.",
  "settings.languages.officialRefresh": "Buscar paquetes oficiales",
  "settings.languages.officialLoadError": "No se pudo cargar el catálogo oficial de idiomas: {message}",
  "settings.languages.officialInstallError": "No se pudo instalar el paquete oficial de idioma: {message}",
  "settings.languages.officialPackMeta": "{locale} · v{version} · GitHub oficial",
  "settings.languages.installed": "instalado",
  "settings.languages.catalogLink": "Catálogo oficial de idiomas",
  "settings.languages.spanishRepoLink": "Repo del paquete español",
  "settings.languages.helpFooter": "Tytus ya habla inglés y español. Ayúdanos a enseñarle más idiomas antes de que empiece a inventar mensajes de error en klingon.",
  "settings.languages.contributeTitle": "¿Quieres mantener un nuevo idioma?",
  "settings.languages.contributeBody": "Abre el catálogo, copia la estructura del paquete español y envía un PR. Tytus necesita humanos para los matices, los chistes y para no sonar como una tostadora con Google Translate.",
  "settings.languages.createPackLink": "Crear un nuevo paquete de idioma",
  // Panel de agentes (Configuración → Agentes)
  "agents.panel.title": "Agentes",
  "agents.panel.subtitle": "Instala un agente en un pod. Cada instalación consume las unidades del agente.",
  "agents.panel.loading": "Cargando catálogo…",
  "agents.panel.loadError": "No se pudo cargar el catálogo: {message}",
  "agents.panel.retry": "Reintentar",
  "agents.panel.install": "Instalar",
  "agents.panel.website": "Sitio web",
  "agents.panel.github": "GitHub",
  "agents.panel.unitSingular": "unidad",
  "agents.panel.unitPlural": "unidades",
  "agents.panel.runningOnSingular": "{count} en ejecución en el pod {pods}",
  "agents.panel.runningOnPlural": "{count} en ejecución en los pods {pods}",
  "agents.panel.reasonPlan": "Requiere el plan {plan} o superior",
  "agents.panel.reasonUnits": "Necesita {needed} {unit}, solo hay {available} disponibles",
  // Textos de presentación de cada agente (Configuración + Chat)
  "agents.openclaw.name": "OpenClaw",
  "agents.openclaw.tagline": "Tu IA personal en cada canal que ya usas",
  "agents.openclaw.description": "Habla con tu asistente desde Telegram, WhatsApp, Signal, Discord, Slack, iMessage, Matrix y más de 20 canales — todo desde un único cerebro siempre activo. Voz de entrada y de salida. Canvas en vivo al que puedes señalar y dirigir.",
  "agents.openclaw.highlight.0": "Más de 25 canales de mensajería — un asistente, todas las apps",
  "agents.openclaw.highlight.1": "Voz + Canvas — habla, escucha y míralo dibujar",
  "agents.openclaw.highlight.2": "Reforzado con un sandbox seguro de agentes de NVIDIA para mayor protección",
  "agents.openclaw.highlight.3": "Siempre activo — listo cuando lo necesites",
  "agents.hermes.name": "Hermes",
  "agents.hermes.tagline": "El agente IA que se mejora a sí mismo cuanto más lo usas",
  "agents.hermes.description": "Aprende de cada tarea. Crea sus propias habilidades, recuerda cada conversación pasada, ejecuta tareas programadas y reparte trabajos complejos en subagentes paralelos. Háblale desde tu terminal, Telegram, Discord o Slack.",
  "agents.hermes.highlight.0": "Habilidades que se autoperfeccionan — más afiladas con cada uso",
  "agents.hermes.highlight.1": "Memoria total — busca en cada conversación pasada",
  "agents.hermes.highlight.2": "Automatizaciones programadas — informes diarios, auditorías nocturnas",
  "agents.hermes.highlight.3": "Subagentes en paralelo — divide trabajos grandes en tareas concurrentes",
  // App Chat
  "chat.sidebar.podsHeader": "Pods",
  "chat.sidebar.includedHeader": "Incluido",
  "chat.sidebar.podLabel": "Pod {podId}",
  "chat.sidebar.empty": "No hay pods asignados.",
  "chat.sidebar.loading": "Cargando…",
  "chat.empty.title": "No hay pods con los que chatear",
  "chat.empty.body": "Asigna primero un pod — en cuanto esté en marcha, podrás abrirlo aquí mismo.",
  "chat.empty.cta": "Asignar un pod →",
  "chat.picker.hint": "Selecciona un pod a la izquierda para empezar.",
  "chat.agent.podLabel": "Pod {podId}",
  "chat.agent.openInBrowser": "Abrir el pod {podId} en el navegador →",
  "chat.agent.openError": "No se pudo abrir el pod {podId} en tu navegador. Revisa el túnel. ({message})",
  "chat.agent.dismissError": "Descartar",
  "chat.agent.docs": "Documentación",
  "chat.agent.connectedApps": "Apps conectadas",
  "chat.agent.manageChannels": "Gestionar canales",
  "chat.agent.loadingChannels": "Comprobando apps conectadas…",
  "chat.agent.channelsError": "No se pudieron cargar los canales: {message}",
  "chat.agent.noChannels": "Aún no hay apps conectadas — abre Canales para conectar Telegram, Discord, Slack y más.",
  "chat.ail.tooltip": "AIL — un endpoint, todos los modelos. Gratis con tu cuenta Tytus.",
  "chat.ail.title": "AIL",
  "chat.ail.tagline": "Un endpoint. Todos los proveedores de IA.",
  "chat.ail.body": "AIL es tu pasarela LLM privada: un único endpoint que enruta sobre MiniMax, Kimi, DeepSeek, Qwen, OpenAI, Anthropic, Gemini y tus herramientas CLI locales — con failover automático cuando un proveedor falla. Habla los protocolos OpenAI y Anthropic, así que lo que ya usas funciona directamente.",
  "chat.ail.feature.0": "Habla OpenAI y Anthropic — funciona en Cursor, Claude Code, OpenCode, el SDK de Anthropic",
  "chat.ail.feature.1": "Enruta entre varios proveedores de frontera con failover automático",
  "chat.ail.feature.2": "Reutiliza tus suscripciones (Gemini CLI, Claude Code, Codex) sin claves extra",
  "chat.ail.feature.3": "Incluido gratis con cada cuenta Tytus — sin coste de unidades ni sorpresas de límite",
  "chat.ail.cta.docs": "Abrir la documentación",
  "chat.ail.cta.podInspector": "Copiar URL y clave",
  // Music Creator ─────────────────────────────────────────
  "musiccreator.empty.title": "No hay pod conectado",
  "musiccreator.empty.body": "Creador de música usa la pasarela de IA de tu pod Tytus. Asigna un pod desde Pod Inspector para empezar a componer.",
  "musiccreator.header.title": "Creación de música",
  "musiccreator.header.subtitle": "Pod {podId} · ail-music",
  "musiccreator.header.surprise": "Sorpréndeme",
  "musiccreator.header.surpriseTitle": "Tema aleatorio",
  "musiccreator.header.surpriseFromPlayerTitle": "Remezcla esta canción con un tema aleatorio",
  "musiccreator.theme.label": "Tema",
  "musiccreator.theme.placeholder": "Describe la canción: vibra, mood, historia, época…",
  "musiccreator.theme.hint": "Escribiremos letras estructuradas a partir de esto. O pega las tuyas abajo.",
  "musiccreator.lyrics.label": "Letra (opcional)",
  "musiccreator.lyrics.placeholder": `[Verso]
Añade tu propia letra…
[Estribillo]
…`,
  "musiccreator.lyrics.instrumental": "Instrumental",
  "musiccreator.lyrics.template": "Plantilla {n}",
  "musiccreator.lyrics.templateTitle": "Insertar plantilla de estructura",
  "musiccreator.style.label": "Estilo",
  "musiccreator.style.placeholder": "Género, mood, tempo, instrumentos, tipo de voz…",
  "musiccreator.songName.label": "Nombre de la canción (opcional)",
  "musiccreator.songName.placeholder": "Se generará desde el tema si lo dejas vacío",
  "musiccreator.button.create": "Crear canción",
  "musiccreator.button.cancel": "Cancelar",
  "musiccreator.phase.lyrics": "Escribiendo la letra…",
  "musiccreator.phase.song": "Generando música… (~30–90 s)",
  "musiccreator.error.noPod": "No hay un pod Tytus disponible. Asigna uno desde Pod Inspector.",
  "musiccreator.error.noInput": "Añade un tema/prompt o pega tu propia letra.",
  "musiccreator.error.lyricsTooLong": "Letra demasiado larga: {count} > {max} caracteres.",
  "musiccreator.gallery.title": "Mis creaciones",
  "musiccreator.gallery.count.one": "{n} canción",
  "musiccreator.gallery.count.other": "{n} canciones",
  "musiccreator.error.dismiss": "Descartar",
  "musiccreator.gallery.searchPlaceholder": "Buscar en Mi obra…",
  "musiccreator.gallery.searchEmpty": "Ningún tema coincide con “{q}”.",
  "musiccreator.gallery.empty.title": "Aún no hay nada",
  "musiccreator.gallery.empty.body": "Describe una canción a la izquierda y pulsa Crear canción. Tus pistas aparecerán aquí con reproducción y descarga.",
  "musiccreator.gallery.empty.footer": "100 canciones/día · ail-music · MiniMax 2.6",
  "musiccreator.track.untitled": "Sin título",
  "musiccreator.track.download": "Descargar MP3",
  "musiccreator.track.delete": "Eliminar",
  "musiccreator.track.lyricsOnly": "Solo letras",
  "musiccreator.track.openInEditor": "Abrir letra",
  "musiccreator.track.saveToDesktop": "Guardar en Escritorio",
  "musiccreator.track.saveSongToDesktop": "Guardar canción en Escritorio",
  "musiccreator.track.saveLyricsToDesktop": "Guardar letra en Escritorio",
  "musiccreator.track.playInPlayer": "Reproducir en Music Player",
  "musiccreator.track.loadIntoForm": "Cargar en el formulario",
  "musiccreator.track.section.song": "Canción",
  "musiccreator.track.section.lyrics": "Letra",
  "musiccreator.notify.savedToDesktopTitle": "Guardado en Escritorio",
  "musiccreator.notify.savedToDesktopBody": "{name} está en tu Escritorio.",
  "musiccreator.notify.songReadyTitle": "Canción lista",
  "musiccreator.notify.songReadyBody": '"{title}" está en Mi obra y en la carpeta Música.',
  "musiccreator.notify.noLyricsTitle": "No hay letra para abrir",
  "musiccreator.notify.noLyricsBody": "Este tema aún no tiene letra — genera o pega una primero.",
  // View tabs (Creator / Player) and Player view ──────────────
  "musiccreator.view.creator": "Creador",
  "musiccreator.view.player": "Reproductor",
  "musiccreator.view.creator.tip": "Compón canciones nuevas y edita borradores",
  "musiccreator.view.player.tip": "Escucha tus pistas guardadas con todos sus metadatos",
  "musiccreator.player.eyebrow.track": "Pista de JULI3TA",
  "musiccreator.player.eyebrow.lyricSheet": "Letra de JULI3TA",
  "musiccreator.player.empty.title": "No hay nada sonando",
  "musiccreator.player.empty.body": "Elige una pista de la barra lateral para abrirla aquí, o cambia a la pestaña Creador para componer una nueva.",
  "musiccreator.player.empty.openCreator": "Abrir Creador",
  "musiccreator.player.play": "Reproducir",
  "musiccreator.player.pause": "Pausa",
  "musiccreator.player.remixInRestyle": "Remezclar en Restyle",
  "musiccreator.player.remixInRestyle.tip": "Abre esta pista en Restyle para remezclarla con un nuevo estilo y letra",
  "musiccreator.player.lyrics": "Letra",
  "musiccreator.player.lyrics.empty": "Esta pista no tiene letra guardada.",
  "musiccreator.player.theme": "Tema",
  "musiccreator.player.lyricsDirection": "Dirección de la letra",
  "musiccreator.player.about": "Sobre esta pista",
  "musiccreator.player.about.created": "Creada",
  "musiccreator.player.about.duration": "Duración",
  "musiccreator.player.about.bitrate": "Bitrate",
  "musiccreator.player.about.sampleRate": "Frecuencia",
  "musiccreator.player.about.size": "Tamaño",
  "musiccreator.player.about.style": "Estilo",
  "musiccreator.player.about.format": "Formato",
  "musiccreator.player.about.format.mp3": "Audio MP3",
  "musiccreator.player.about.format.lyricSheet": "Hoja de letra",
  // Restyle reference-audio pickers ───────────────────────────
  "musiccreator.restyle.songsPicker.title": "Elige una canción de tu biblioteca",
  "musiccreator.restyle.songsPicker.empty.title": "Aún no hay canciones en tu biblioteca",
  "musiccreator.restyle.songsPicker.empty.body": "Cambia a la pestaña Canción y crea una pista primero — aparecerá aquí para remezclarla.",
  "musiccreator.restyle.songsPicker.tooShort": "demasiado corta para una versión (mín. 6 s)",
  "musiccreator.restyle.button.mySongs": "Mis canciones",
  "musiccreator.restyle.button.mySongs.count": "{count} en biblioteca",
  "musiccreator.restyle.button.voiceClips": "Notas de voz",
  "musiccreator.restyle.button.voiceClips.count": "{count} guardadas",
  // JULI3TA in-app help ─────────────────────────────────────
  "julietaHelp.title": "JULI3TA — Cómo funciona",
  "julietaHelp.subtitle": "Manual del creador de música",
  "julietaHelp.tab.start": "Empezar",
  "julietaHelp.tab.recipes": "Recetas",
  "julietaHelp.tab.help": "Ayuda",
  // Start tab
  "julietaHelp.start.workflow.title": "Crea tu primera canción",
  "julietaHelp.start.s1.title": "Describe la vibra",
  "julietaHelp.start.s1.body": 'Escribe un tema — de qué va la canción, el mood, la época. Una o dos frases bastan. Pulsa "Sorpréndeme" para una al azar.',
  "julietaHelp.start.s2.title": "Elige un estilo (opcional)",
  "julietaHelp.start.s2.body": "Añade género, instrumentos, tempo, tipo de voz. O simplemente toca chips como Lo-fi, Jazz, Synthwave para construirlo.",
  "julietaHelp.start.s3.title": "Pulsa Crear canción",
  "julietaHelp.start.s3.body": "JULI3TA escribe la letra primero (~3 s) y luego renderiza la música (~30–90 s). Un MP3 real aparece en Mis creaciones a la derecha.",
  "julietaHelp.start.s4.title": "Escucha, descarga, comparte",
  "julietaHelp.start.s4.body": "Pulsa play para escuchar inline, el icono de descarga para el MP3, o abre Reproductor de música para disfrutar toda la biblioteca junta.",
  "julietaHelp.start.modes.title": "Tres modos",
  "julietaHelp.start.mode.song.name": "Canción — pista completa",
  "julietaHelp.start.mode.song.body": "Tema → letra IA → música. Por defecto. Lo mejor para canciones originales nuevas.",
  "julietaHelp.start.mode.cover.name": "Cover — reestilizar audio",
  "julietaHelp.start.mode.cover.body": "Suelta un clip de referencia (una grabación, un MP3) y JULI3TA lo reestiliza según tu prompt. La vibra de la fuente se mantiene; el género cambia.",
  "julietaHelp.start.mode.lyrics.name": "Letra — solo palabras",
  "julietaHelp.start.mode.lyrics.body": "Genera solo la letra sin renderizar audio. Rápido y sin gastar la cuota de música.",
  "julietaHelp.start.recorder.title": "Integración con Grabadora",
  "julietaHelp.start.recorder.body": 'Abre Grabadora de voz, captura audio (tarareo, música en la habitación, un instrumento), luego vuelve a JULI3TA → Cover → "Desde grabaciones". JULI3TA auto-elige los mejores 30 s de una grabación larga, así que puedes grabar varios minutos y dejar que encuentre la magia.',
  "julietaHelp.start.tip.title": "✨ Truco pro",
  "julietaHelp.start.tip.body": "Para covers, las grabaciones largas suelen funcionar mejor — JULI3TA tiene más material para encontrar una buena ventana de 30 segundos. Apunta a 1–3 minutos de audio limpio (evita silencios largos al principio o al final).",
  // Recipes tab
  "julietaHelp.recipes.intro": 'Pulsa "Usar" para meter una receta directo en el formulario, o "Copiar" para pegarla en otro sitio. Son puntos de partida — cambia lo que quieras antes de Crear canción.',
  "julietaHelp.recipe.use": "Usar",
  "julietaHelp.recipe.copy": "Copiar",
  // Help tab
  "julietaHelp.help.connection.title": "Conexión",
  "julietaHelp.help.usage.title": "Uso",
  "julietaHelp.help.troubleshoot.title": "Solución de problemas",
  "julietaHelp.help.q.failed.title": '¿Por qué veo "Failed to fetch"?',
  "julietaHelp.help.q.failed.body": 'JULI3TA intenta tres lugares en orden: tu pod Tytus (cloud), switchAILocal local, y la pantalla de suscripción. "Failed to fetch" significa que los dos primeros no están alcanzables. Pulsa "Try again" — JULI3TA volverá a probar cada candidato. Si tu pod se durmió, reinícialo desde Pod Inspector.',
  "julietaHelp.help.q.nopod.title": "No tengo un pod Tytus",
  "julietaHelp.help.q.nopod.body": "No hay problema — JULI3TA también funciona con switchAILocal corriendo en esta máquina (gratis, local). Si ninguno está disponible, la pantalla de suscripción tiene un enlace a Tytus donde puedes reclamar un pod Explorer gratis.",
  "julietaHelp.help.q.local.title": "¿Cómo funciona el fallback local?",
  "julietaHelp.help.q.local.body": "Si el pod Tytus no está alcanzable, JULI3TA prueba http://localhost:18080/v1 con la clave de dev sk-test-123. Ahí es donde switchAILocal escucha por defecto. El punto ámbar en el header significa que JULI3TA está usando AIL local.",
  "julietaHelp.help.q.howlong.title": "¿Cuánto tarda una canción?",
  "julietaHelp.help.q.howlong.body": 'Letra: 2–5 segundos. Música: 30–90 segundos para una canción de 1–2 minutos. La barra de progreso curva hacia 95% para que nunca veas un "100%" falso antes de que el audio aparezca.',
  "julietaHelp.help.q.quota.title": "¿Cuántas canciones puedo hacer?",
  "julietaHelp.help.q.quota.body": "En el plan Plus de MiniMax: 100 canciones/día para música, 100/día para covers, 100/día para letras. Cada bucket cuenta de forma independiente. El dashboard muestra el uso en vivo.",
  "julietaHelp.help.q.length.title": "¿Qué longitud tienen las canciones?",
  "julietaHelp.help.q.length.body": "JULI3TA elige la duración según la forma de tu letra — más versos y estribillos → canción más larga. Rango típico: 1–3 minutos. Aún no hay control manual de longitud.",
  "julietaHelp.help.q.coverlen.title": "¿Qué audio sirve para covers?",
  "julietaHelp.help.q.coverlen.body": "mp3, wav o flac. Mínimo 6 segundos, máximo 6 minutos, 50 MB de tamaño máx. Si tu clip dura más de 30 s, JULI3TA elige automáticamente la sección sostenida más fuerte como referencia.",
  "julietaHelp.help.q.silentmic.title": "Mi grabación salió en silencio",
  "julietaHelp.help.q.silentmic.body": "Mira la onda en vivo mientras grabas — si las barras no bailan, la entrada del micro está vacía. Prueba: 1) Aprueba el permiso de micrófono en el navegador. 2) Elige la entrada correcta en Ajustes del Sistema → Sonido. 3) Acércate al micro.",
  "julietaHelp.help.q.shortrec.title": '"Grabación demasiado corta" al elegirla para cover',
  "julietaHelp.help.q.shortrec.body": "El modo Cover necesita al menos 6 segundos de audio. Graba un clip más largo e inténtalo de nuevo — la reproducción sostenida (música, un instrumento, tarareando un verso) funciona mucho mejor que ráfagas cortas.",
  "julietaHelp.help.q.privacy.title": "¿Dónde va mi audio?",
  "julietaHelp.help.q.privacy.body": "Las grabaciones viven en el localStorage del navegador — nunca salen de tu máquina hasta que decides usar una para un cover. Cuando lo haces, JULI3TA auto-extrae un trozo de 30 s y solo envía ese trozo a tu pod Tytus (o al AIL local). Las grabaciones originales se quedan locales."
}, Si = { en: fc, es: bc }, rr = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", vc = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, o) => String(a[o] ?? `{${o}}`)) : e;
function Ht() {
  const { host: e } = la(), [a, r] = S(() => rr(e.i18n?.locale));
  B(() => e.i18n?.onLocaleChange?.((n) => r(rr(n))), [e]);
  const o = ge(() => (n, l) => {
    const d = e.i18n?.t?.(n, l);
    if (d && d !== n) return d;
    const g = rr(a), m = Si[g]?.[n] ?? Si.en[n] ?? n;
    return vc(m, l);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (n) => r(rr(n)),
    installLanguagePack: (n) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (n) => {
    }
  };
}
const xc = [
  {
    id: "birthday",
    emoji: "🎂",
    title: "Birthday song for someone special",
    theme: "Happy birthday song for Julieta — celebrating her sparkle, her laugh, and another year of adventures. Warm, joyful, family-album feel.",
    style: "pop, upbeat, acoustic guitar, hand claps, joyful, family-friendly"
  },
  {
    id: "lullaby",
    emoji: "🌙",
    title: "Lullaby to fall asleep",
    theme: "A gentle lullaby about stars watching over a sleepy child, soft dreams floating on a quiet night.",
    style: "lullaby, soft piano, music box, slow tempo, calm, dreamy"
  },
  {
    id: "roadtrip",
    emoji: "🚗",
    title: "Road-trip anthem",
    theme: "An anthem about driving down the coast with the windows open, friends in the back, sun setting over the ocean.",
    style: "indie pop, driving rhythm, electric guitar, summer, optimistic"
  },
  {
    id: "study",
    emoji: "📚",
    title: "Study / focus background",
    theme: "Calm music for focusing on homework. No distractions, just a steady warm vibe.",
    style: "lo-fi, instrumental, soft piano, light beat, ambient, relaxed"
  },
  {
    id: "silly",
    emoji: "🤪",
    title: "Silly song about pets",
    theme: "A funny song about a cat who thinks he's the boss of the house, knocks things off tables, and demands snacks at 3am.",
    style: "comedic, ukulele, jaunty, kids-friendly, lighthearted"
  },
  {
    id: "cumbia",
    emoji: "💃",
    title: "Cumbia para bailar",
    theme: "Una cumbia alegre sobre una fiesta familiar al atardecer, primos bailando en el patio, risas que no paran.",
    style: "cumbia, accordion, percussion, festive, danceable, latin"
  }
], wc = [
  {
    id: "birthday",
    emoji: "🎂",
    title: "Canción de cumpleaños",
    theme: "Canción de cumpleaños para Julieta — celebrando su brillo, su risa y un nuevo año de aventuras. Cálida, alegre, ambiente familiar.",
    style: "pop, alegre, guitarra acústica, palmas, ambiente familiar"
  },
  {
    id: "lullaby",
    emoji: "🌙",
    title: "Canción de cuna",
    theme: "Una canción de cuna suave sobre estrellas que cuidan a una niña dormida, sueños que flotan en una noche tranquila.",
    style: "canción de cuna, piano suave, caja musical, tempo lento, calma"
  },
  {
    id: "roadtrip",
    emoji: "🚗",
    title: "Himno de viaje en coche",
    theme: "Un himno sobre un viaje por la costa con las ventanas abiertas, amigos atrás, atardecer sobre el océano.",
    style: "indie pop, ritmo conductor, guitarra eléctrica, verano, optimista"
  },
  {
    id: "study",
    emoji: "📚",
    title: "Música para estudiar",
    theme: "Música calmada para concentrarse en los deberes. Sin distracciones, solo una vibra cálida y constante.",
    style: "lo-fi, instrumental, piano suave, ritmo ligero, ambiente"
  },
  {
    id: "silly",
    emoji: "🤪",
    title: "Canción graciosa de mascotas",
    theme: "Una canción divertida sobre un gato que cree ser el jefe de la casa, tira cosas de la mesa y pide premios a las 3 AM.",
    style: "cómica, ukelele, alegre, infantil, ligera"
  },
  {
    id: "cumbia",
    emoji: "💃",
    title: "Cumbia para bailar",
    theme: "Una cumbia alegre sobre una fiesta familiar al atardecer, primos bailando en el patio, risas que no paran.",
    style: "cumbia, acordeón, percusión, festiva, bailable, latina"
  }
];
function kc({ recipe: e, onUse: a }) {
  const { t: r } = Ht(), [o, n] = S(!1), l = async () => {
    try {
      await navigator.clipboard.writeText(`${e.theme}

Style: ${e.style}`), n(!0), setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: "rounded-lg p-3 transition-all",
      style: {
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)"
      },
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-start gap-2 mb-2", children: [
          /* @__PURE__ */ t("span", { style: { fontSize: 22 }, children: e.emoji }),
          /* @__PURE__ */ s("div", { className: "flex-1", children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: e.title }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.45 }, children: e.theme }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, fontStyle: "italic" }, children: e.style })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ s(
            "button",
            {
              onClick: () => a(e),
              className: "flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all hover:scale-[1.02]",
              style: {
                fontSize: 11,
                fontWeight: 600,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                /* @__PURE__ */ t(Ot, { size: 12 }),
                r("julietaHelp.recipe.use")
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: l,
              className: "flex items-center justify-center gap-1 px-2 py-1.5 rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                fontSize: 11,
                color: "var(--text-secondary)",
                border: "1px solid var(--border-subtle)"
              },
              title: r("julietaHelp.recipe.copy"),
              children: o ? /* @__PURE__ */ t(oa, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(an, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function Sc({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: o, language: n } = Ht(), [l, d] = S("start");
  if (!e) return null;
  const g = n === "es" ? wc : xc;
  return /* @__PURE__ */ t(
    "div",
    {
      className: "absolute inset-0 z-40 flex",
      style: { background: "rgba(0,0,0,0.5)" },
      onClick: a,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: "ml-auto h-full flex flex-col",
          onClick: (m) => m.stopPropagation(),
          style: {
            width: 420,
            maxWidth: "95%",
            background: "var(--bg-window)",
            borderLeft: "1px solid var(--border-subtle)",
            boxShadow: "-4px 0 24px rgba(0,0,0,0.4)"
          },
          children: [
            /* @__PURE__ */ s(
              "div",
              {
                className: "flex items-center justify-between px-5 py-4 flex-shrink-0",
                style: { borderBottom: "1px solid var(--border-subtle)" },
                children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ t(
                      "div",
                      {
                        className: "flex items-center justify-center rounded-lg flex-shrink-0",
                        style: {
                          width: 32,
                          height: 32,
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                        },
                        children: /* @__PURE__ */ t(jt, { size: 18, style: { color: "white" } })
                      }
                    ),
                    /* @__PURE__ */ s("div", { children: [
                      /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }, children: o("julietaHelp.title") }),
                      /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: o("julietaHelp.subtitle") })
                    ] })
                  ] }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: a,
                      className: "p-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                      style: { color: "var(--text-secondary)" },
                      children: /* @__PURE__ */ t(we, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1 px-5 pt-3 flex-shrink-0", children: ["start", "recipes", "help"].map((m) => {
              const h = l === m;
              return /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => d(m),
                  className: "px-3 py-1.5 rounded-lg transition-all",
                  style: {
                    fontSize: 11,
                    fontWeight: h ? 600 : 500,
                    color: h ? "var(--text-primary)" : "var(--text-secondary)",
                    background: h ? "var(--bg-titlebar)" : "transparent",
                    border: h ? "1px solid var(--border-subtle)" : "1px solid transparent"
                  },
                  children: o(`julietaHelp.tab.${m}`)
                },
                m
              );
            }) }),
            /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", style: { paddingBottom: 96 }, children: [
              l === "start" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(Zt, { icon: /* @__PURE__ */ t(lt, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(or, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(or, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(or, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(or, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(Zt, { icon: /* @__PURE__ */ t(Ot, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(Jr, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(Jr, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(Jr, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(Zt, { icon: /* @__PURE__ */ t(st, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(Tc, { body: o("julietaHelp.start.recorder.body") }),
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: "p-3 rounded-lg",
                    style: {
                      background: "linear-gradient(135deg, rgba(124,77,255,0.1), rgba(255,152,0,0.1))",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: [
                      /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }, children: o("julietaHelp.start.tip.title") }),
                      /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: o("julietaHelp.start.tip.body") })
                    ]
                  }
                )
              ] }),
              l === "recipes" && /* @__PURE__ */ s("div", { className: "space-y-3", children: [
                /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: o("julietaHelp.recipes.intro") }),
                g.map((m) => /* @__PURE__ */ t(
                  kc,
                  {
                    recipe: m,
                    onUse: (h) => {
                      r(h.theme, h.style), a();
                    }
                  },
                  m.id
                ))
              ] }),
              l === "help" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(Zt, { icon: /* @__PURE__ */ t(Ia, { size: 14 }), text: o("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.failed.title"), a: o("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.nopod.title"), a: o("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.local.title"), a: o("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t(Zt, { icon: /* @__PURE__ */ t(Ot, { size: 14 }), text: o("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.howlong.title"), a: o("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.quota.title"), a: o("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.length.title"), a: o("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.coverlen.title"), a: o("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t(Zt, { icon: /* @__PURE__ */ t(st, { size: 14 }), text: o("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.silentmic.title"), a: o("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.shortrec.title"), a: o("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t(it, { q: o("julietaHelp.help.q.privacy.title"), a: o("julietaHelp.help.q.privacy.body") })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function Zt({ icon: e, text: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: a })
  ] });
}
function or({ n: e, title: a, body: r }) {
  return /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "flex items-center justify-center rounded-full flex-shrink-0",
        style: {
          width: 22,
          height: 22,
          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
          color: "white",
          fontSize: 11,
          fontWeight: 700
        },
        children: e
      }
    ),
    /* @__PURE__ */ s("div", { children: [
      /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: a }),
      /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.5 }, children: r })
    ] })
  ] });
}
function Jr({ emoji: e, name: a, body: r }) {
  return /* @__PURE__ */ s(
    "div",
    {
      className: "flex gap-3 p-3 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 22, lineHeight: 1 }, children: e }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: a }),
          /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.5 }, children: r })
        ] })
      ]
    }
  );
}
function Tc({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function it({ q: e, a }) {
  const [r, o] = S(!1);
  return /* @__PURE__ */ s(
    "div",
    {
      className: "rounded-lg overflow-hidden",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            onClick: () => o((n) => !n),
            className: "w-full flex items-center gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            children: [
              /* @__PURE__ */ t(
                fl,
                {
                  size: 12,
                  style: {
                    color: "var(--text-secondary)",
                    transform: r ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.15s"
                  }
                }
              ),
              /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 500, color: "var(--text-primary)", flex: 1 }, children: e })
            ]
          }
        ),
        r && /* @__PURE__ */ t("div", { className: "px-3 pb-3", style: { paddingLeft: 28 }, children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.55, whiteSpace: "pre-line" }, children: a }) })
      ]
    }
  );
}
const Gr = (e) => {
  const a = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(a.agents) ? a.agents : [],
    included: Array.isArray(a.included) ? a.included : [],
    tiers: [],
    ...a
  };
}, _c = () => {
  const { host: e } = la(), [a, r] = S(0), [o, n] = S(() => Gr(e.daemon?.state));
  return B(() => (n(Gr(e.daemon?.state)), e.daemon?.onStateChange?.((l) => n(Gr(l)))), [e, a]), ge(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((l) => l + 1)
  }), [o]);
}, Nc = (e, a) => {
  const { host: r } = la();
  B(() => {
    if (!(!a || !r.shellMenu?.register))
      return r.shellMenu.register({
        appId: r.appId,
        groups: a.groups.map((o) => ({
          label: o.label,
          items: o.items.map((n) => ({
            id: n.id,
            label: n.label,
            disabled: n.disabled,
            onClick: n.onSelect
          }))
        }))
      });
  }, [r, a]);
};
function Cc() {
  return la().host.windows.current;
}
const un = "juli3ta_standalone_vfs_v1", pn = () => Math.random().toString(36).slice(2) + Date.now().toString(36), Rt = (e, a) => ({
  id: pn(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), Ec = () => {
  const e = Rt("/", null), a = Rt("home", e.id), r = Rt("user", a.id), o = Rt("Desktop", r.id), n = Rt("Music", r.id), l = Rt("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, o, n, l].map((d) => [d.id, d])) };
}, ir = () => {
  try {
    const a = localStorage.getItem(un);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = Ec();
  return cr(e), e;
}, cr = (e) => {
  try {
    localStorage.setItem(un, JSON.stringify(e));
  } catch {
  }
}, Ac = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), Lc = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function Mc() {
  return {
    ensureUserFolder(a) {
      const r = ir(), o = Ac(a);
      let n = Object.values(r.nodes).find((l) => l.type === "folder" && l.name === o);
      if (!n) {
        const l = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        n = Rt(o, l?.id ?? null), r.nodes[n.id] = n, cr(r);
      }
      return n.id;
    },
    findChildByName(a, r) {
      const o = ir();
      return Object.values(o.nodes).find((n) => n.parentId === a && n.name === r);
    },
    createFile(a, r, o = "", n = {}) {
      const l = ir(), d = { id: pn(), name: r, type: "file", parentId: a, content: o, mimeType: n.mimeType, refTrackId: n.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return l.nodes[d.id] = d, cr(l), d.id;
    },
    writeFile(a, r) {
      const o = ir();
      o.nodes[a] && (o.nodes[a].content = r, o.nodes[a].modifiedAt = Date.now(), cr(o));
    }
  };
}
const zc = { theme: { mode: "dark" } }, Ic = Yi(null);
function mn() {
  const e = Xi(Ic), { host: a } = la();
  return ge(() => e || {
    state: zc,
    dispatch: (r) => {
      if (r.type === "OPEN_OR_FOCUS_WINDOW" && typeof r.appId == "string" && a.windows.openOrFocus(r.appId, r.args), r.type === "ADD_DESKTOP_ICON") {
        const o = r.icon;
        a.windows.addDesktopIcon?.({
          label: o.name,
          iconUrl: o.icon,
          onClick: () => {
          }
        });
      }
    }
  }, [e, a]);
}
function Rc() {
  const { host: e } = la();
  return {
    addNotification: (a) => e.notifications.notify({
      appId: a.appId,
      title: a.title,
      body: a.message,
      level: "info",
      unread: a.isRead !== !1
    })
  };
}
const Pc = {
  // The mark PNGs ship with ~30% transparent padding on each side
  // (the rendered silhouette fills only ~70% of its bounding box).
  // Scaling 2.0 makes the silhouette match Lucide outline weight at
  // the same caller-passed `size`. Layout box stays at `size` — only
  // the rendered pixels grow via CSS transform — so neighbouring
  // chrome doesn't shift.
  "mark-cream": { src: "/brand/juli3ta/mark-cream-256.png", scale: 2 },
  "mark-ink": { src: "/brand/juli3ta/mark-ink-256.png", scale: 2 },
  "mark-white": { src: "/brand/juli3ta/mark-white-256.png", scale: 2 },
  // App-icon tile — the rounded gradient square. Reserved for big-logo
  // surfaces (loading splash, large empty states). NEVER used in dock /
  // launcher / titlebar — those use the bare silhouette so the brand
  // doesn't fight the chrome. No scale: the tile is already padded
  // to the corner radius the brand kit specifies (22%).
  icon: { src: "/brand/juli3ta/icon-gradient-256.png" }
}, jc = {
  juli3ta: Pc
};
function xo({ name: e, size: a = 24, className: r, style: o, alt: n, scale: l }) {
  const [d, g = "mark"] = e.split(":"), m = jc[d], { state: h } = mn();
  let b;
  if (g === "mark" ? b = h.theme.mode === "light" ? m?.["mark-ink"] : m?.["mark-white"] : b = m?.[g], !b) return null;
  const u = n ?? d.charAt(0).toUpperCase() + d.slice(1), f = l ?? b.scale ?? 1;
  return /* @__PURE__ */ t(
    "img",
    {
      src: b.src,
      alt: u,
      width: a,
      height: a,
      style: {
        width: a,
        height: a,
        objectFit: "contain",
        display: "inline-block",
        verticalAlign: "middle",
        userSelect: "none",
        pointerEvents: "none",
        ...f !== 1 ? { transform: `scale(${f})`, transformOrigin: "center" } : null,
        ...b.filter ? { filter: b.filter } : null,
        ...o
      },
      className: r,
      draggable: !1
    }
  );
}
let hn = null, Ti = null;
const Vr = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), Dc = [
  `CREATE TABLE IF NOT EXISTS app_juli3ta_music_creator_tracks (
    id TEXT PRIMARY KEY, title TEXT NOT NULL, style_tags TEXT NOT NULL DEFAULT '', lyrics_preview TEXT NOT NULL DEFAULT '',
    duration_ms INTEGER NOT NULL DEFAULT 0, bitrate INTEGER NOT NULL DEFAULT 0, sample_rate INTEGER NOT NULL DEFAULT 0,
    size_bytes INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL, audio_data_url TEXT NOT NULL DEFAULT '',
    specs_json TEXT NOT NULL DEFAULT '', cover_data_url TEXT NOT NULL DEFAULT '', theme TEXT NOT NULL DEFAULT '',
    source TEXT NOT NULL DEFAULT 'juli3ta', audio_kind TEXT NOT NULL DEFAULT 'data_url', external_id TEXT NOT NULL DEFAULT '',
    external_url TEXT NOT NULL DEFAULT '', thumbnail_url TEXT NOT NULL DEFAULT '', artist TEXT NOT NULL DEFAULT '', album TEXT NOT NULL DEFAULT ''
  )`,
  "CREATE INDEX IF NOT EXISTS idx_app_juli3ta_music_creator_tracks_created ON app_juli3ta_music_creator_tracks(created_at DESC)",
  "CREATE TABLE IF NOT EXISTS app_juli3ta_music_creator_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL)",
  "CREATE TABLE IF NOT EXISTS app_juli3ta_voice_recordings (id TEXT PRIMARY KEY, name TEXT NOT NULL, duration_ms INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL, mime_type TEXT NOT NULL DEFAULT 'audio/webm', audio_data_url TEXT NOT NULL DEFAULT '')",
  "CREATE INDEX IF NOT EXISTS idx_app_juli3ta_voice_recordings_created ON app_juli3ta_voice_recordings(created_at DESC)",
  "CREATE TABLE IF NOT EXISTS app_juli3ta_music_library_tracks (id TEXT PRIMARY KEY, provider TEXT NOT NULL, external_id TEXT NOT NULL, title TEXT NOT NULL, artist TEXT NOT NULL DEFAULT '', album TEXT NOT NULL DEFAULT '', duration_ms INTEGER NOT NULL DEFAULT 0, thumbnail_url TEXT NOT NULL DEFAULT '', external_url TEXT NOT NULL DEFAULT '', added_at INTEGER NOT NULL, last_played_at INTEGER NOT NULL DEFAULT 0)",
  "CREATE TABLE IF NOT EXISTS app_juli3ta_music_library_artists (id TEXT PRIMARY KEY, provider TEXT NOT NULL, name TEXT NOT NULL, artwork_url TEXT NOT NULL DEFAULT '', bio TEXT NOT NULL DEFAULT '', updated_at INTEGER NOT NULL)",
  "CREATE TABLE IF NOT EXISTS app_juli3ta_music_library_albums (id TEXT PRIMARY KEY, provider TEXT NOT NULL, title TEXT NOT NULL, artist TEXT NOT NULL DEFAULT '', artwork_url TEXT NOT NULL DEFAULT '', year INTEGER, updated_at INTEGER NOT NULL)",
  "CREATE TABLE IF NOT EXISTS app_juli3ta_music_playlists (id TEXT PRIMARY KEY, name TEXT NOT NULL, created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL)",
  "CREATE TABLE IF NOT EXISTS app_juli3ta_music_playlist_items (playlist_id TEXT NOT NULL, track_id TEXT NOT NULL, pos INTEGER NOT NULL DEFAULT 0, added_at INTEGER NOT NULL, PRIMARY KEY (playlist_id, track_id))",
  "CREATE TABLE IF NOT EXISTS app_juli3ta_music_favorites (kind TEXT NOT NULL, entity_id TEXT NOT NULL, provider TEXT NOT NULL DEFAULT '', title TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL, PRIMARY KEY (kind, entity_id))"
];
function Uc(e) {
  Ti = (async () => {
    for (const r of Dc) await e.run(r);
  })();
  const a = async () => Ti;
  hn = {
    exec: async (r) => {
      await a();
      for (const o of Vr(r).split(";").map((n) => n.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (r, o = []) => (await a(), e.query(Vr(r), o)),
    run: async (r, o = []) => {
      await a(), await e.run(Vr(r), o);
    },
    tx: async (r) => (await a(), r())
  };
}
const oe = () => hn, mr = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: e.style_tags,
  lyricsPreview: e.lyrics_preview,
  durationMs: e.duration_ms,
  bitrate: e.bitrate,
  sampleRate: e.sample_rate,
  sizeBytes: e.size_bytes,
  createdAt: e.created_at,
  audioDataUrl: e.audio_data_url,
  specsJson: e.specs_json ?? "",
  coverDataUrl: e.cover_data_url ?? "",
  theme: e.theme ?? "",
  source: e.source || "juli3ta",
  audioKind: e.audio_kind || (e.audio_data_url ? "data_url" : "lyrics_only"),
  externalId: e.external_id ?? "",
  externalUrl: e.external_url ?? "",
  thumbnailUrl: e.thumbnail_url ?? "",
  artist: e.artist ?? "",
  album: e.album ?? ""
}), V = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), wo = (e) => V(e, "specs_json") || V(e, "cover_data_url") || V(e, "theme") || V(e, "source") || V(e, "audio_kind") || V(e, "external_id") || V(e, "external_url") || V(e, "thumbnail_url") || V(e, "artist") || V(e, "album"), _i = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, Ni = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, Kr = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, zt = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), gn = async (e, a, r, o) => {
  if (V(o, "source") || V(o, "audio_kind") || V(o, "external_id") || V(o, "external_url") || V(o, "thumbnail_url") || V(o, "artist") || V(o, "album"))
    try {
      return (await e.query(
        `SELECT ${_i}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(zt);
    } catch (n) {
      o = n;
    }
  if (V(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${_i} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => zt({ ...l, theme: "" }));
    } catch (n) {
      if (!V(n, "cover_data_url")) throw n;
      try {
        return (await e.query(
          `SELECT ${Ni} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => zt({ ...d, cover_data_url: "", theme: "" }));
      } catch (l) {
        if (!V(l, "specs_json")) throw l;
        return (await e.query(
          `SELECT ${Kr} FROM music_creator_tracks ${a}`,
          r
        )).map((g) => zt({ ...g, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (V(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${Ni} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => zt({ ...l, cover_data_url: "", theme: "" }));
    } catch (n) {
      if (!V(n, "specs_json")) throw n;
      return (await e.query(
        `SELECT ${Kr} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => zt({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (V(o, "specs_json"))
    return (await e.query(
      `SELECT ${Kr} FROM music_creator_tracks ${a}`,
      r
    )).map((l) => zt({ ...l, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, yn = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, Oc = async () => {
  const e = oe();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${yn} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(mr);
  } catch (a) {
    if (!wo(a)) throw a;
    return (await gn(e, "ORDER BY created_at DESC", [], a)).map(mr);
  }
}, Hc = async (e) => {
  const a = oe();
  if (!a) return null;
  try {
    const r = await a.query(
      `SELECT ${yn} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return r.length === 0 ? null : mr(r[0]);
  } catch (r) {
    if (!wo(r)) throw r;
    const o = await gn(a, "WHERE id = ? LIMIT 1", [e], r);
    return o.length === 0 ? null : mr(o[0]);
  }
}, hr = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = [
    e.id,
    e.title,
    e.styleTags,
    e.lyricsPreview,
    e.durationMs,
    e.bitrate,
    e.sampleRate,
    e.sizeBytes,
    e.createdAt,
    e.audioDataUrl
  ];
  try {
    await a.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
          source, audio_kind, external_id, external_url, thumbnail_url, artist, album)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        ...r,
        e.specsJson,
        e.coverDataUrl,
        e.theme,
        e.source ?? "juli3ta",
        e.audioKind ?? (e.audioDataUrl ? "data_url" : "lyrics_only"),
        e.externalId ?? "",
        e.externalUrl ?? "",
        e.thumbnailUrl ?? "",
        e.artist ?? "",
        e.album ?? ""
      ]
    );
  } catch (o) {
    if (!wo(o)) throw o;
    if (V(o, "source") || V(o, "audio_kind") || V(o, "external_id") || V(o, "external_url") || V(o, "thumbnail_url") || V(o, "artist") || V(o, "album"))
      try {
        await a.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...r, e.specsJson, e.coverDataUrl, e.theme]
        );
        return;
      } catch (n) {
        o = n;
      }
    if (V(o, "theme"))
      try {
        await a.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...r, e.specsJson, e.coverDataUrl]
        );
        return;
      } catch (n) {
        if (!V(n, "cover_data_url")) throw n;
      }
    if (V(o, "cover_data_url"))
      try {
        await a.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...r, e.specsJson]
        );
        return;
      } catch (n) {
        if (!V(n, "specs_json")) throw n;
      }
    await a.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      r
    );
  }
}, $c = async (e) => {
  const a = oe();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Fc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  const o = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, Bc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, Wc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, qc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, Jc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, Gc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, Vc = async (e, a) => {
  const r = oe();
  if (!r) return a;
  const o = await r.query(
    "SELECT value FROM music_creator_settings WHERE key = ? LIMIT 1",
    [e]
  );
  if (o.length === 0) return a;
  try {
    return JSON.parse(o[0].value);
  } catch {
    return a;
  }
}, Kc = async (e, a) => {
  const r = oe();
  r && await r.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(a)]
  );
}, fn = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, bn = "music_creator_settings", Yc = () => Vc(bn, fn), Xc = (e) => Kc(bn, e), dt = () => Date.now(), vn = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: e.provider === "youtube" ? "YouTube" : e.provider,
  lyricsPreview: "",
  durationMs: e.duration_ms ?? 0,
  bitrate: 0,
  sampleRate: 0,
  sizeBytes: 0,
  createdAt: e.added_at ?? dt(),
  audioDataUrl: "",
  specsJson: "",
  coverDataUrl: "",
  theme: "",
  source: e.provider === "juli3ta" ? "juli3ta" : "youtube",
  audioKind: "remote_stream",
  externalId: e.external_id ?? "",
  externalUrl: e.external_url ?? "",
  thumbnailUrl: e.thumbnail_url ?? "",
  artist: e.artist ?? "",
  album: e.album ?? ""
}), uo = (e) => ({
  id: e.id,
  provider: e.source || "youtube",
  external_id: e.externalId || e.id.replace(/^.+?:/, ""),
  title: e.title || "Untitled",
  artist: e.artist || "",
  album: e.album || "",
  duration_ms: e.durationMs || 0,
  thumbnail_url: e.thumbnailUrl || "",
  external_url: e.externalUrl || "",
  added_at: e.createdAt || dt(),
  last_played_at: 0
}), xn = [
  "id",
  "provider",
  "external_id",
  "title",
  "artist",
  "album",
  "duration_ms",
  "thumbnail_url",
  "external_url",
  "added_at",
  "last_played_at"
], Qc = xn.join(", "), Zc = xn.map((e) => `t.${e}`).join(", "), ed = async () => {
  const e = oe();
  return e ? (await e.query(
    `SELECT ${Qc} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(vn) : [];
}, wn = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = uo(e);
  await a.tx(async () => {
    await a.run(
      `INSERT OR IGNORE INTO music_library_tracks
         (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [r.id, r.provider, r.external_id, r.title, r.artist, r.album, r.duration_ms, r.thumbnail_url, r.external_url, r.added_at, r.last_played_at]
    ), await a.run(
      `UPDATE music_library_tracks
         SET title = ?, artist = ?, album = ?, duration_ms = ?, thumbnail_url = ?, external_url = ?
       WHERE id = ?`,
      [r.title, r.artist, r.album, r.duration_ms, r.thumbnail_url, r.external_url, r.id]
    );
  });
}, td = async (e) => {
  const a = oe();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, ad = async () => {
  const e = oe();
  if (!e) return 0;
  const a = await e.query(
    `SELECT id, title, duration_ms, created_at, external_id, external_url, thumbnail_url, artist, album
       FROM music_creator_tracks
      WHERE source = 'youtube' AND external_id <> ''`
  );
  for (const r of a)
    await e.run(
      `INSERT OR IGNORE INTO music_library_tracks
         (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
       VALUES (?, 'youtube', ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
      [r.id, r.external_id, r.title, r.artist, r.album, r.duration_ms, r.thumbnail_url, r.external_url, r.created_at]
    );
  return a.length;
}, rd = async (e) => {
  const a = oe();
  return a ? (await a.query(
    "SELECT kind, entity_id, provider, title, created_at FROM music_favorites WHERE kind = ? ORDER BY created_at DESC",
    [e]
  )).map((n) => ({
    kind: n.kind,
    entityId: n.entity_id,
    provider: n.provider,
    title: n.title,
    createdAt: n.created_at
  })) : [];
}, od = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = await a.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(r[0]?.n ?? 0) > 0 ? (await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await a.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", dt()]
  ), !0);
}, Ta = async () => {
  const e = oe();
  if (!e) return [];
  const a = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), r = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${Zc}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return r.forEach((n) => {
    o.set(n.playlist_id, [...o.get(n.playlist_id) ?? [], vn(n)]);
  }), a.map((n) => ({
    id: n.id,
    name: n.name,
    createdAt: n.created_at,
    updatedAt: n.updated_at,
    items: o.get(n.id) ?? []
  }));
}, id = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", o = dt(), n = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: o, updatedAt: o, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [n.id, n.name, n.createdAt, n.updatedAt]
  ), n;
}, nd = async (e) => {
  const a = oe();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, sd = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await wn(a);
    const o = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), n = Number(o[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, n, dt()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [dt(), e]);
  });
}, ld = async (e, a) => {
  const r = oe();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [dt(), e]));
}, cd = async (e) => {
  const a = oe();
  a && await a.tx(async () => {
    for (const r of e.tracks) {
      const o = uo(r);
      await a.run(
        `INSERT OR IGNORE INTO music_library_tracks
           (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
        [o.id, o.provider, o.external_id, o.title, o.artist, o.album, o.duration_ms, o.thumbnail_url, o.external_url, o.added_at]
      ), await a.run(
        `UPDATE music_library_tracks
           SET provider = ?, external_id = ?, title = ?, artist = ?, album = ?, duration_ms = ?, thumbnail_url = ?, external_url = ?
         WHERE id = ?`,
        [o.provider, o.external_id, o.title, o.artist, o.album, o.duration_ms, o.thumbnail_url, o.external_url, o.id]
      );
    }
    for (const r of e.favorites)
      await a.run(
        `INSERT OR IGNORE INTO music_favorites (kind, entity_id, provider, title, created_at)
         VALUES (?, ?, ?, ?, ?)`,
        [r.kind, r.entityId, r.provider, r.title ?? "", r.createdAt ?? dt()]
      ), await a.run(
        "UPDATE music_favorites SET provider = ?, title = ? WHERE kind = ? AND entity_id = ?",
        [r.provider, r.title ?? "", r.kind, r.entityId]
      );
    for (const r of e.playlists) {
      const o = r.createdAt || dt(), n = r.updatedAt || o;
      await a.run(
        "INSERT OR IGNORE INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
        [r.id, r.name || "Playlist", o, n]
      ), await a.run(
        "UPDATE music_playlists SET name = ?, updated_at = ? WHERE id = ?",
        [r.name || "Playlist", n, r.id]
      ), await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [r.id]);
      let l = 0;
      for (const d of r.items) {
        const g = uo(d);
        await a.run(
          `INSERT OR IGNORE INTO music_library_tracks
             (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
          [g.id, g.provider, g.external_id, g.title, g.artist, g.album, g.duration_ms, g.thumbnail_url, g.external_url, g.added_at]
        ), await a.run(
          `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
           VALUES (?, ?, ?, ?)`,
          [r.id, d.id, l++, dt()]
        );
      }
    }
  });
}, kn = "/api/juli3ta/music-state", Sn = "juli3ta:musicLibrarySnapshot:v1", Xe = () => Date.now(), dd = () => ({
  version: 1,
  updatedAt: 0,
  tracks: [],
  favorites: [],
  playlists: []
}), ko = (e) => !!e && typeof e == "object" && !Array.isArray(e), So = (e) => {
  if (!ko(e)) return null;
  const a = String(e.id ?? "").trim();
  if (!a) return null;
  const r = e.source === "juli3ta" ? "juli3ta" : "youtube", o = e.audioKind === "data_url" || e.audioKind === "lyrics_only" ? e.audioKind : "remote_stream";
  return {
    id: a,
    title: String(e.title ?? "Untitled"),
    styleTags: String(e.styleTags ?? (r === "youtube" ? "YouTube" : r)),
    lyricsPreview: String(e.lyricsPreview ?? ""),
    durationMs: Number(e.durationMs ?? 0) || 0,
    bitrate: Number(e.bitrate ?? 0) || 0,
    sampleRate: Number(e.sampleRate ?? 0) || 0,
    sizeBytes: Number(e.sizeBytes ?? 0) || 0,
    createdAt: Number(e.createdAt ?? Xe()) || Xe(),
    audioDataUrl: String(e.audioDataUrl ?? ""),
    specsJson: String(e.specsJson ?? ""),
    coverDataUrl: String(e.coverDataUrl ?? ""),
    theme: String(e.theme ?? ""),
    source: r,
    audioKind: o,
    externalId: String(e.externalId ?? ""),
    externalUrl: String(e.externalUrl ?? ""),
    thumbnailUrl: String(e.thumbnailUrl ?? ""),
    artist: String(e.artist ?? ""),
    album: String(e.album ?? "")
  };
}, ud = (e) => {
  if (!ko(e)) return null;
  const a = e.kind;
  if (a !== "track" && a !== "artist" && a !== "album" && a !== "playlist") return null;
  const r = String(e.entityId ?? "").trim();
  return r ? {
    kind: a,
    entityId: r,
    provider: String(e.provider ?? ""),
    title: String(e.title ?? ""),
    createdAt: Number(e.createdAt ?? Xe()) || Xe()
  } : null;
}, Tn = (e) => {
  if (!ko(e)) return null;
  const a = String(e.id ?? "").trim();
  return a ? {
    id: a,
    name: String(e.name ?? "Playlist"),
    createdAt: Number(e.createdAt ?? Xe()) || Xe(),
    updatedAt: Number(e.updatedAt ?? e.createdAt ?? Xe()) || Xe(),
    items: Array.isArray(e.items) ? e.items.map(So).filter((r) => !!r) : []
  } : null;
}, ia = (e) => e ? {
  version: 1,
  updatedAt: Number(e.updatedAt ?? 0) || 0,
  tracks: Array.isArray(e.tracks) ? e.tracks.map(So).filter((a) => !!a) : [],
  favorites: Array.isArray(e.favorites) ? e.favorites.map(ud).filter((a) => !!a) : [],
  playlists: Array.isArray(e.playlists) ? e.playlists.map(Tn).filter((a) => !!a) : []
} : dd(), Ci = (e, a) => {
  const r = /* @__PURE__ */ new Map();
  for (const o of [...e, ...a]) {
    const n = r.get(o.id);
    if (!n) {
      r.set(o.id, o);
      continue;
    }
    const l = o.updatedAt ?? o.createdAt ?? 0, d = n.updatedAt ?? n.createdAt ?? 0;
    l >= d && r.set(o.id, o);
  }
  return [...r.values()].sort((o, n) => (n.updatedAt ?? n.createdAt ?? 0) - (o.updatedAt ?? o.createdAt ?? 0));
}, pd = (e, a) => {
  const r = /* @__PURE__ */ new Map();
  for (const o of [...e, ...a]) {
    const n = `${o.kind}:${o.entityId}`, l = r.get(n);
    (!l || (o.createdAt ?? 0) >= (l.createdAt ?? 0)) && r.set(n, o);
  }
  return [...r.values()].sort((o, n) => (n.createdAt ?? 0) - (o.createdAt ?? 0));
}, Ei = (e, a) => {
  const r = ia(e), o = ia(a);
  return {
    version: 1,
    updatedAt: Math.max(r.updatedAt, o.updatedAt, Xe()),
    tracks: Ci(o.tracks, r.tracks),
    favorites: pd(o.favorites, r.favorites),
    playlists: Ci(o.playlists, r.playlists)
  };
}, md = (e, a, r) => {
  const o = new Map(e.map((n) => [n.id, n]));
  return {
    version: 1,
    updatedAt: Xe(),
    tracks: e.map((n) => So(n)).filter((n) => !!n),
    favorites: [...a].map((n) => {
      const l = o.get(n);
      return {
        kind: "track",
        entityId: n,
        provider: l?.source ?? "youtube",
        title: l?.title ?? "",
        createdAt: Xe()
      };
    }),
    playlists: r.map((n) => Tn(n)).filter((n) => !!n)
  };
}, hd = () => {
  try {
    const e = localStorage.getItem(Sn);
    return e ? ia(JSON.parse(e)) : null;
  } catch {
    return null;
  }
}, gd = (e) => {
  try {
    localStorage.setItem(Sn, JSON.stringify(ia(e)));
  } catch {
  }
}, yd = async () => {
  try {
    const e = await fetch(kn, {
      method: "GET",
      headers: { Accept: "application/json" }
    });
    if (!e.ok) return null;
    const a = await e.json();
    return ia(a.state);
  } catch {
    return null;
  }
}, Ai = async (e) => {
  const a = ia(e);
  gd(a);
  try {
    await fetch(kn, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": `juli3ta-music-state-${a.updatedAt}-${a.tracks.length}-${a.favorites.length}`
      },
      body: JSON.stringify({ state: a })
    });
  } catch {
  }
}, fd = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), Li = async () => {
  const e = oe();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(fd) : [];
}, _n = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, Yr = "tytus.voice-recorder.recordings", bd = async () => {
  try {
    const e = localStorage.getItem(Yr);
    if (!e) return;
    const a = JSON.parse(e);
    if (!Array.isArray(a)) {
      localStorage.removeItem(Yr);
      return;
    }
    for (const r of a)
      if (!(!r?.id || typeof r.audioDataUrl != "string"))
        try {
          await _n({
            id: r.id,
            name: r.name ?? "Untitled recording",
            durationMs: r.durationMs ?? 0,
            createdAt: r.createdAt ?? Date.now(),
            mimeType: r.mimeType ?? "audio/webm",
            audioDataUrl: r.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(Yr);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, vd = (e, a) => e._value, xd = "http://localhost:18080/v1", wd = "sk-test-123", kd = (e) => /\/v1\/?$/i.test(e), Nn = (e) => typeof e == "object" && e !== null, Sd = (e) => typeof e == "string" ? e : Nn(e) && typeof e._value == "string" ? vd(e) : "", Xr = (...e) => {
  for (const a of e)
    if (typeof a == "string" && a.trim()) return a;
  return null;
}, Mi = (e) => {
  const a = e?.trim();
  if (!a) return null;
  const r = a.replace(/\/+$/, "");
  return kd(r) ? r : `${r}/v1`;
}, Qr = (e, a, r) => {
  a.has(r.url) || (a.add(r.url), e.push(r));
}, Td = (e) => {
  const a = [], r = /* @__PURE__ */ new Set();
  for (const o of e) {
    const n = o, l = Nn(n.meta) ? n.meta : {}, d = Sd(
      n.user_key ?? n.userKey ?? n.api_key ?? n.apiKey ?? l.userKey ?? l.gatewayKey ?? l.apiKey ?? l.api_key
    );
    if (!d) continue;
    const g = Xr(n.pod_id, n.podId, n.id) || "included", m = Mi(
      Xr(n.public_url, n.publicUrl, n.gatewayUrl, l.gatewayUrl, l.publicUrl)
    );
    m && Qr(a, r, {
      url: m,
      apiKey: d,
      podId: `${g}:remote`,
      source: "included",
      label: `AIL gateway ${g} (remote)`,
      proxyPodId: g
    });
    const h = Mi(
      Xr(n.endpoint, n.private_url, n.privateUrl, l.endpoint, l.privateUrl)
    );
    h && Qr(a, r, {
      url: h,
      apiKey: d,
      podId: `${g}:tunnel`,
      source: "included",
      label: `AIL gateway ${g} (tunnel)`,
      proxyPodId: g
    });
  }
  return Qr(a, r, {
    url: xd,
    apiKey: wd,
    podId: "local",
    source: "local",
    label: "Local AIL"
  }), a;
}, To = 100, fr = 14, ra = 6, Cn = fr, _d = 24e3, Nd = 0.92, Cd = 3, Ed = 0.05, zi = 5, Ad = 3, Ld = 0.35, Md = 0.55, zd = (e) => typeof e == "number" ? { targetSec: e, fastRemote: !1 } : {
  targetSec: e?.targetSec ?? fr,
  fastRemote: e?.fastRemote ?? !1,
  signal: e?.signal,
  onProgress: e?.onProgress
}, ye = (e, a, r, o) => {
  e?.onProgress?.({
    stage: a,
    progress: Math.max(0, Math.min(1, r)),
    message: o
  });
}, Id = (e) => /^https?:\/\//i.test(e), Rd = (e) => {
  const a = [e];
  try {
    const r = e.split("/api/music/proxy/")[1];
    r && a.push(decodeURIComponent(r));
  } catch {
  }
  for (const r of a)
    try {
      const o = new URL(r), n = Number(o.searchParams.get("dur") || o.searchParams.get("duration"));
      if (Number.isFinite(n) && n > 0) return { durationSec: n };
    } catch {
    }
  return {};
}, Pd = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((d) => MediaRecorder.isTypeSupported(d));
  if (!o)
    throw new Error("No supported recorder mime type for fallback.");
  const n = URL.createObjectURL(e), l = new Audio();
  l.src = n, l.muted = !0, l.crossOrigin = "anonymous", l.preload = "auto";
  try {
    await new Promise((w, C) => {
      const T = () => w(), P = () => C(new Error("Audio element rejected the source format too — browser cannot play it."));
      l.addEventListener("canplay", T, { once: !0 }), l.addEventListener("error", P, { once: !0 }), l.load();
    });
    const d = a.createMediaElementSource(l), g = a.createMediaStreamDestination();
    d.connect(g);
    const m = new MediaRecorder(g.stream, { mimeType: o }), h = [];
    m.ondataavailable = (w) => {
      w.data.size > 0 && h.push(w.data);
    };
    const b = Math.max(
      6e3,
      Math.min(r, l.duration || r) * 1e3
    ), u = new Promise((w) => {
      m.onstop = () => w();
    });
    m.start(250), l.currentTime = 0, await l.play(), await new Promise((w) => setTimeout(w, b)), m.stop(), l.pause(), await u;
    const f = new Blob(h, { type: o });
    if (f.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const v = await f.arrayBuffer();
    return await a.decodeAudioData(v);
  } finally {
    URL.revokeObjectURL(n);
  }
}, En = async (e, a = 35, r = !0, o) => {
  const n = window.AudioContext || window.webkitAudioContext, l = new n();
  try {
    const d = await e.arrayBuffer();
    try {
      return await l.decodeAudioData(d.slice(0));
    } catch (g) {
      if (!r) throw g;
      try {
        return ye(o, "capturing", 0.32, "Browser decoder needs compatibility capture…"), await Pd(e, l, a);
      } catch (m) {
        const h = g.message || "decodeAudioData failed", b = m.message || "fallback failed";
        throw new Error(
          `Audio format isn't supported by this browser (${h}). Compatibility-mode capture also failed: ${b}`
        );
      }
    }
  } finally {
    l.close().catch(() => {
    });
  }
}, An = async (e, a) => {
  const r = await fetch(e, { signal: a?.signal });
  if (!r.ok) throw new Error(`Could not load audio (${r.status}).`);
  return r.blob();
}, Zr = (e, a, r, o = 12e3) => new Promise((n, l) => {
  let d = null;
  const g = () => {
    e.removeEventListener(a, m), e.removeEventListener("error", h), r?.removeEventListener("abort", b), d && clearTimeout(d);
  }, m = () => {
    g(), n();
  }, h = () => {
    g(), l(new Error("Browser media element rejected the streamed audio."));
  }, b = () => {
    g(), l(new DOMException("Reference extraction was cancelled.", "AbortError"));
  };
  e.addEventListener(a, m, { once: !0 }), e.addEventListener("error", h, { once: !0 }), r?.addEventListener("abort", b, { once: !0 }), d = setTimeout(() => {
    g(), l(new Error(`Timed out waiting for audio ${String(a)}.`));
  }, o);
}), jd = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable for fast streamed reference capture.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((f) => MediaRecorder.isTypeSupported(f));
  if (!o) throw new Error("No supported recorder mime type for fast streamed reference capture.");
  const n = Rd(e), l = Math.max(ra, Math.min(18, a + 2)), d = n.durationSec, g = d ? Math.max(0, Math.min(d - l, d * Md - l / 2)) : 0;
  ye(r, "loading", 0.08, "Opening streamed audio without downloading the full song…");
  const m = window.AudioContext || window.webkitAudioContext, h = new m(), b = new Audio();
  b.crossOrigin = "anonymous", b.preload = "auto", b.src = e;
  let u = null;
  try {
    await Zr(b, "canplay", r.signal, 15e3), g > 0 && Number.isFinite(b.duration) ? (ye(r, "loading", 0.15, `Seeking to ${Math.floor(g / 60)}:${Math.floor(g % 60).toString().padStart(2, "0")}…`), b.currentTime = g, await Zr(b, "seeked", r.signal, 12e3)) : g > 0 && (b.currentTime = g, await Promise.race([
      Zr(b, "seeked", r.signal, 12e3),
      new Promise((R) => setTimeout(R, 1200))
    ]));
    const f = h.createMediaElementSource(b), v = h.createMediaStreamDestination();
    f.connect(v);
    const w = new MediaRecorder(v.stream, { mimeType: o }), C = [];
    w.ondataavailable = (R) => {
      R.data.size > 0 && C.push(R.data);
    };
    const T = new Promise((R) => {
      w.onstop = () => R();
    }), P = performance.now();
    u = setInterval(() => {
      const R = (performance.now() - P) / 1e3;
      ye(
        r,
        "capturing",
        0.18 + 0.52 * Math.min(1, R / l),
        `Capturing compact ${l.toFixed(0)} s reference slice…`
      );
    }, 250), ye(r, "capturing", 0.18, `Capturing compact ${l.toFixed(0)} s reference slice…`), w.start(250), await h.resume().catch(() => {
    }), await b.play(), await new Promise((R, k) => {
      const A = setTimeout(R, l * 1e3), L = () => {
        clearTimeout(A), k(new DOMException("Reference extraction was cancelled.", "AbortError"));
      };
      r.signal?.addEventListener("abort", L, { once: !0 });
    }), w.stop(), b.pause(), await T, u && clearInterval(u), u = null;
    const _ = new Blob(C, { type: o });
    if (_.size === 0) throw new Error("Fast streamed capture produced no audio.");
    ye(r, "decoding", 0.75, "Decoding compact reference slice…");
    const N = await _.arrayBuffer();
    return {
      buffer: await h.decodeAudioData(N),
      sourceOffsetSec: g,
      sourceDurationSec: d || (Number.isFinite(b.duration) ? b.duration : void 0)
    };
  } finally {
    u && clearInterval(u), b.pause(), b.removeAttribute("src"), b.load(), h.close().catch(() => {
    });
  }
}, po = (e) => new Promise((a, r) => {
  const o = new FileReader();
  o.onload = () => {
    const n = typeof o.result == "string" ? o.result : "", l = n.indexOf("base64,");
    a(l >= 0 ? n.slice(l + 7) : "");
  }, o.onerror = () => r(o.error), o.readAsDataURL(e);
}), Dd = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * To / 1e3)), o = Math.floor(e.length / r), n = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const g = d * r;
    let m = 0;
    for (let h = 0; h < r; h++) {
      let b = 0;
      for (let u = 0; u < l.length; u++) b += l[u][g + h];
      b /= l.length, m += b * b;
    }
    n[d] = Math.sqrt(m / r);
  }
  return n;
}, Ud = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * To / 1e3)), o = Math.floor(e.length / r), n = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const g = d * r;
    let m = 0, h = 0;
    for (let b = 0; b < l.length; b++) h += l[b][g];
    h /= l.length;
    for (let b = 1; b < r; b++) {
      let u = 0;
      for (let f = 0; f < l.length; f++) u += l[f][g + b];
      u /= l.length, (h > 1e-3 && u < -1e-3 || h < -1e-3 && u > 1e-3) && m++, h = u;
    }
    n[d] = m / (r / 2);
  }
  return n;
}, Ln = (e) => {
  const a = Dd(e), r = Ud(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / To };
}, Od = (e, a = 4) => {
  let r = 0;
  for (let m = 0; m < e.length; m++) r += e[m];
  const o = r / e.length;
  let n = 0;
  for (let m = 0; m < e.length; m++) n += (e[m] - o) ** 2;
  const l = Math.sqrt(n / e.length) || 1, d = Math.floor(e.length / a), g = new Float32Array(d);
  for (let m = 0; m < d; m++) {
    let h = 0;
    for (let b = 0; b < a; b++) h += e[m * a + b];
    g[m] = (h / a - o) / l;
  }
  return g;
}, Hd = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const o = Math.max(1, Math.floor(r / 4));
  let n = -1 / 0, l = 0;
  for (let m = 0; m + r < e.length; m += o) {
    if (Math.abs(m - a) < r) continue;
    let h = 0;
    for (let b = 0; b < r; b++)
      h += e[a + b] * e[m + b];
    h /= r, h > n && (n = h), h > 0.5 && l++;
  }
  const d = Math.max(0, Math.min(1, (n + 1) / 2)), g = Math.min(1, l / 6);
  return 0.6 * d + 0.4 * g;
}, Mn = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const o = Od(e.rms, 4), n = e.rms.length / o.length, l = Math.max(1, Math.floor(r / n));
  let d = 0, g = 0, m = 0;
  for (let f = 0; f < r; f++)
    d += e.rms[f], g += e.rms[f] * e.rms[f], m += e.centroid[f];
  const h = [], b = Math.max(1, Math.floor(e.framesPerSec)), u = (f) => {
    const v = d / r, w = Math.max(0, g / r - v * v), C = Math.sqrt(w), T = m / r, P = Math.floor(f / n), _ = Hd(o, P, l), N = 0.45 * Math.min(1, v * 4) + 0.2 * T + 0.25 * _ - 0.1 * Math.min(1, C * 6);
    h.push({
      startFrame: f,
      lenFrames: r,
      score: N,
      meanRms: v,
      stdRms: C,
      meanBright: T,
      selfSim: _
    });
  };
  u(0);
  for (let f = r; f < e.rms.length; f += b) {
    for (let v = 0; v < b && f - b + v < e.rms.length; v++) {
      const w = f - r - b + v + 1, C = f - b + v + 1;
      if (C >= e.rms.length) break;
      w >= 0 && (d -= e.rms[w], g -= e.rms[w] * e.rms[w], m -= e.centroid[w]), d += e.rms[C], g += e.rms[C] * e.rms[C], m += e.centroid[C];
    }
    u(f - r + b);
  }
  return h;
}, mo = (e, a, r) => {
  const o = new Float32Array(r), n = [];
  for (let l = 0; l < e.numberOfChannels; l++) n.push(e.getChannelData(l));
  for (let l = 0; l < r; l++) {
    let d = 0;
    for (let g = 0; g < n.length; g++) d += n[g][a + l] || 0;
    o[l] = d / n.length;
  }
  return o;
}, $d = (e, a, r) => {
  if (r >= a) return e;
  const o = a / r, n = Math.max(1, Math.floor(e.length / o)), l = new Float32Array(n);
  for (let d = 0; d < n; d++) {
    const g = d * o, m = Math.floor(g), h = Math.min(e.length - 1, m + 1), b = g - m;
    l[d] = e[m] * (1 - b) + e[h] * b;
  }
  return l;
}, Fd = (e, a) => {
  const n = a * 1 * 2, l = 1 * (16 / 8), d = e.length * 2, g = new ArrayBuffer(44 + d), m = new DataView(g);
  let h = 0;
  const b = (v) => {
    for (let w = 0; w < v.length; w++) m.setUint8(h++, v.charCodeAt(w));
  }, u = (v) => {
    m.setUint32(h, v, !0), h += 4;
  }, f = (v) => {
    m.setUint16(h, v, !0), h += 2;
  };
  b("RIFF"), u(36 + d), b("WAVE"), b("fmt "), u(16), f(1), f(1), u(a), u(n), f(l), f(16), b("data"), u(d);
  for (let v = 0; v < e.length; v++) {
    const w = Math.max(-1, Math.min(1, e[v]));
    m.setInt16(h, w < 0 ? w * 32768 : w * 32767, !0), h += 2;
  }
  return new Blob([g], { type: "audio/wav" });
}, Bd = (e, a) => {
  const r = new Float32Array(e);
  let o = 0;
  for (let l = 0; l < r.length; l++) o = Math.max(o, Math.abs(r[l]));
  if (o > 1e-4) {
    const l = Math.min(Nd / o, Cd);
    for (let d = 0; d < r.length; d++) r[d] *= l;
  }
  const n = Math.min(Math.floor(a * Ed), Math.floor(r.length / 2));
  for (let l = 0; l < n; l++) {
    const d = l / Math.max(1, n);
    r[l] *= d, r[r.length - 1 - l] *= d;
  }
  return r;
}, ho = (e, a) => {
  const r = Math.min(a, _d), o = Bd(e, a), n = $d(o, a, r);
  return Fd(n, r);
}, Ii = async (e, a, r, o = 0, n) => {
  const l = e.length / e.sampleRate, d = n ?? l;
  if (l < ra)
    throw new Error(`Source is too short (${l.toFixed(1)} s). Need at least ${ra} s.`);
  const g = Math.min(Cn, Math.max(ra, a));
  if (l <= g) {
    ye(r, "encoding", 0.88, "Encoding compact gateway-safe reference…");
    const T = mo(e, 0, e.length), P = ho(T, e.sampleRate), _ = await po(P);
    return ye(r, "done", 1, "Reference sample ready."), { base64: _, durationSec: l, startSec: o, sourceDurationSec: d, score: 1 };
  }
  ye(r, "analyzing", 0.78, "Analyzing loudness and musical shape…");
  const m = Ln(e), h = Mn(m, g);
  if (h.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  h.sort((T, P) => P.score - T.score);
  const b = h[0], u = Math.floor(b.startFrame / m.framesPerSec * e.sampleRate), f = Math.floor(b.lenFrames / m.framesPerSec * e.sampleRate);
  ye(r, "encoding", 0.9, "Encoding compact gateway-safe reference…");
  const v = mo(e, u, f), w = ho(v, e.sampleRate), C = await po(w);
  return ye(r, "done", 1, "Reference sample ready."), {
    base64: C,
    durationSec: f / e.sampleRate,
    startSec: o + u / e.sampleRate,
    sourceDurationSec: d,
    score: Math.max(0, Math.min(1, b.score))
  };
}, zn = async (e, a = fr) => {
  const r = zd(a), o = Math.min(Cn, Math.max(ra, r.targetSec));
  if (typeof e == "string" && r.fastRemote && Id(e))
    try {
      const d = await jd(e, o, r);
      return await Ii(
        d.buffer,
        o,
        r,
        d.sourceOffsetSec,
        d.sourceDurationSec
      );
    } catch (d) {
      if (d.name === "AbortError") throw d;
      ye(r, "loading", 0.08, "Fast streamed capture failed — falling back to full decode…");
    }
  ye(r, "loading", 0.08, "Loading reference audio…");
  const n = typeof e == "string" ? await An(e, r) : e;
  ye(r, "decoding", 0.28, "Decoding reference audio…");
  const l = await En(n, 35, !0, r);
  return await Ii(l, o, r);
}, Wd = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(r * a);
  let n = 0;
  for (const g of e) n += g.length;
  n -= o * (e.length - 1);
  const l = new Float32Array(n);
  let d = 0;
  l.set(e[0], 0), d = e[0].length - o;
  for (let g = 1; g < e.length; g++) {
    const m = e[g];
    for (let h = 0; h < o; h++) {
      const b = h / o;
      l[d + h] = l[d + h] * (1 - b) + m[h] * b;
    }
    for (let h = o; h < m.length; h++)
      l[d + h] = m[h];
    d += m.length - o;
  }
  return l;
}, qd = (e, a, r) => {
  const o = [...e].sort((l, d) => d.score - l.score), n = [];
  for (const l of o)
    if (n.some(
      (g) => Math.abs(g.startFrame - l.startFrame) < Math.max(g.lenFrames, l.lenFrames) + r
    ) || n.push(l), n.length >= a) break;
  return n.sort((l, d) => l.startFrame - d.startFrame), n;
}, Jd = async (e, a = {}) => {
  ye(a, "loading", 0.08, "Loading reference audio…");
  const r = typeof e == "string" ? await An(e, a) : e;
  ye(a, "decoding", 0.28, "Decoding reference audio…");
  const o = await En(r, 35, !0, a), n = o.length / o.sampleRate;
  if (n < ra * 2) {
    const w = await zn(r, { ...a, targetSec: fr });
    return {
      base64: w.base64,
      durationSec: w.durationSec,
      segments: [{ startSec: w.startSec, endSec: w.startSec + w.durationSec, score: w.score }],
      sourceDurationSec: n
    };
  }
  ye(a, "analyzing", 0.68, "Finding iconic moments…");
  const l = Ln(o), d = Mn(l, zi);
  if (d.length === 0)
    throw new Error("Could not analyze the audio.");
  const g = Math.max(
    Math.floor(zi * l.framesPerSec * 0.5),
    Math.floor(l.rms.length / 4)
  ), m = qd(d, Ad, g), h = m.map((w) => {
    const C = Math.floor(w.startFrame / l.framesPerSec * o.sampleRate), T = Math.floor(w.lenFrames / l.framesPerSec * o.sampleRate);
    return mo(o, C, T);
  }), b = Wd(h, o.sampleRate, Ld);
  ye(a, "encoding", 0.9, "Encoding compact gateway-safe reference mix…");
  const u = ho(b, o.sampleRate), f = await po(u);
  ye(a, "done", 1, "Reference sample ready.");
  const v = m.map((w) => ({
    startSec: w.startFrame / l.framesPerSec,
    endSec: (w.startFrame + w.lenFrames) / l.framesPerSec,
    score: Math.max(0, Math.min(1, w.score))
  }));
  return {
    base64: f,
    durationSec: b.length / o.sampleRate,
    segments: v,
    sourceDurationSec: n
  };
};
class In extends Error {
  status;
  code;
  constructor(a, r, o) {
    super(o), this.name = "MusicDaemonError", this.status = a, this.code = r;
  }
}
const ca = async (e, a) => {
  const r = await fetch(e, {
    method: "GET",
    headers: { Accept: "application/json" },
    credentials: "same-origin",
    signal: a
  });
  let o = null;
  try {
    o = await r.json();
  } catch {
    o = null;
  }
  if (!r.ok) {
    const n = o, l = typeof n?.error == "string" ? n.error : `http_${r.status}`;
    throw new In(r.status, l, l === "music_unavailable" ? "Music search is still starting up." : l);
  }
  return o;
}, Rn = async (e, a, r) => {
  const o = await fetch(e, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json", "Sec-Fetch-Site": "same-origin" },
    credentials: "same-origin",
    body: JSON.stringify(a),
    signal: r
  });
  let n = null;
  try {
    n = await o.json();
  } catch {
    n = null;
  }
  if (!o.ok) {
    const l = n, d = typeof l?.error == "string" ? l.error : `http_${o.status}`;
    throw new In(o.status, d, d);
  }
  return n;
}, Gd = (e) => ca("/api/music/status", e), Ri = async (e) => (await ca("/api/music/providers", e)).providers ?? [], Pi = async (e) => (await ca("/api/music/connectors", e)).connectors ?? [], Vd = (e, a, r) => Rn("/api/music/connectors/configure", { provider: e, credentials: a }, r), Kd = (e, a) => Rn("/api/music/connectors/disconnect", { provider: e }, a), Yd = async (e, a = 20, r) => {
  const o = new URLSearchParams({ q: e, limit: String(a) });
  return (await ca(`/api/music/search?${o.toString()}`, r)).results ?? [];
}, Xd = (e, a = "tracks,albums,artists,playlists", r = 20, o) => {
  const n = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return ca(`/api/music/search2?${n.toString()}`, o);
}, ji = (e, a) => {
  const r = new URLSearchParams({ videoId: e });
  return ca(`/api/music/stream?${r.toString()}`, a);
}, br = async (e, a) => {
  const r = await fetch(e, {
    ...a,
    headers: {
      ...a?.body ? { "Content-Type": "application/json" } : {},
      ...a?.headers ?? {}
    }
  }), o = await r.text();
  let n = null;
  try {
    n = o ? JSON.parse(o) : null;
  } catch {
    n = o;
  }
  if (!r.ok) {
    const l = typeof n == "object" && n && "error" in n ? String(n.error) : o || r.statusText;
    throw new Error(l);
  }
  return n;
}, eo = async () => br("/api/juli3ta/library/tracks"), Di = async (e) => (await br(
  "/api/juli3ta/library/tracks",
  {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-save-${e.id}-${e.createdAt}` },
    body: JSON.stringify({
      ...e,
      source: e.source ?? "juli3ta",
      audioKind: e.audioKind ?? (e.audioDataUrl ? "data_url" : "lyrics_only")
    })
  }
)).track, Qd = async (e) => {
  await br("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, Zd = async () => (await br("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, go = "0.3.16", za = "application/x-juli3ta-track", nr = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", Pn = (e) => e.source !== "youtube", _a = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const o of r)
      a.has(o.id) || a.set(o.id, o);
  return Array.from(a.values()).sort((r, o) => o.createdAt - r.createdAt);
}, eu = (e) => Pn(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), Pt = [
  {
    label: "Pop & Mainstream",
    chips: [
      "Pop",
      "Dance pop",
      "Electropop",
      "Synth-pop",
      "Teen pop",
      "K-pop",
      "J-pop",
      "Indie pop",
      "Hyperpop",
      "Adult contemporary"
    ]
  },
  {
    label: "Rock & Alternative",
    chips: [
      "Rock",
      "Classic rock",
      "Hard rock",
      "Alternative rock",
      "Indie rock",
      "Garage rock",
      "Psychedelic rock",
      "Progressive rock",
      "Post-rock",
      "Grunge",
      "Britpop",
      "Shoegaze"
    ]
  },
  {
    label: "Metal",
    chips: [
      "Heavy metal",
      "Hard rock / Metal",
      "Thrash metal",
      "Power metal",
      "Progressive metal",
      "Death metal",
      "Black metal",
      "Metalcore",
      "Nu metal",
      "Symphonic metal"
    ]
  },
  {
    label: "Punk & Hardcore",
    chips: [
      "Punk",
      "Pop punk",
      "Hardcore punk",
      "Post-punk",
      "Emo / emocore",
      "Skate punk",
      "Crust punk",
      "Post-hardcore"
    ]
  },
  {
    label: "Indie, Lo-Fi & Singer-Songwriter",
    chips: [
      "Indie",
      "Lo-fi",
      "Lo-fi hip-hop",
      "Bedroom pop",
      "Singer-songwriter",
      "Acoustic",
      "Folk rock",
      "Dream pop"
    ]
  },
  {
    label: "Hip-Hop & Rap",
    chips: [
      "Hip-hop / Rap",
      "Boom bap",
      "Trap",
      "Drill",
      "Gangsta rap",
      "Conscious rap",
      "Cloud rap",
      "Emo rap",
      "Latin trap",
      "Old-school hip-hop",
      "Alternative hip-hop",
      "Underground hip-hop"
    ]
  },
  {
    label: "R&B, Soul & Funk",
    chips: [
      "R&B",
      "Contemporary R&B",
      "Soul",
      "Neo-soul",
      "Motown / Classic soul",
      "Funk",
      "Disco",
      "Quiet storm",
      "New jack swing",
      "Urban contemporary"
    ]
  },
  {
    label: "Electronic & Dance",
    chips: [
      "Electronic",
      "EDM",
      "House",
      "Deep house",
      "Tech house",
      "Progressive house",
      "Electro house",
      "Techno",
      "Minimal techno",
      "Trance",
      "Progressive trance",
      "Psytrance",
      "Drum and bass",
      "Jungle",
      "Breakbeat",
      "UK garage",
      "Future bass",
      "Dubstep",
      "Brostep",
      "Chillout",
      "Ambient",
      "Downtempo",
      "Synthwave / Retrowave"
    ]
  },
  {
    label: "Latin & Caribbean",
    chips: [
      "Latin",
      "Latin pop",
      "Reggaeton",
      "Latin trap",
      "Regional Mexican",
      "Corridos tumbados",
      "Banda",
      "Salsa",
      "Bachata",
      "Merengue",
      "Cumbia",
      "Latin rock"
    ]
  },
  {
    label: "Flamenco",
    chips: [
      "Flamenco",
      "Bulerías",
      "Soleá",
      "Alegrías",
      "Seguiriyas",
      "Tangos (flamenco)",
      "Tientos",
      "Fandangos (flamenco)",
      "Sevillanas",
      "Tarantas",
      "Malagueñas",
      "Granaínas"
    ]
  },
  {
    label: "Reggae, Dub & Dancehall",
    chips: [
      "Reggae",
      "Roots reggae",
      "Dancehall",
      "Dub",
      "Reggae fusion"
    ]
  },
  {
    label: "African & Global Fusion",
    chips: [
      "Afrobeats",
      "Afrobeat",
      "Amapiano",
      "Afro-house",
      "Highlife",
      "Afro-pop",
      "World / Global fusion",
      "Afro-Latin fusion"
    ]
  },
  {
    label: "Country, Folk & Americana",
    chips: [
      "Country",
      "Classic country",
      "Contemporary country",
      "Country pop",
      "Outlaw country",
      "Americana",
      "Bluegrass",
      "Folk",
      "Contemporary folk",
      "Celtic folk",
      "Country rock"
    ]
  },
  {
    label: "Jazz",
    chips: [
      "Jazz",
      "Smooth jazz",
      "Swing / Big band",
      "Bebop",
      "Cool jazz",
      "Latin jazz",
      "Jazz fusion",
      "Acid jazz",
      "Nu jazz",
      "Lounge / Jazz lounge"
    ]
  },
  {
    label: "Blues & Roots",
    chips: [
      "Blues",
      "Electric blues",
      "Delta blues",
      "Blues rock",
      "Roots rock"
    ]
  },
  {
    label: "Reggaeton-Adjacent Urban Latin",
    chips: [
      "Urbano Latino",
      "Dembow",
      "Perreo",
      "Moombahton",
      "Latin drill"
    ]
  },
  {
    label: "Classical & Cinematic",
    chips: [
      "Classical",
      "Orchestral",
      "Chamber music",
      "Symphonic",
      "Solo piano",
      "Film score / Soundtrack",
      "Trailer music / Epic orchestral",
      "Contemporary classical / Minimalism"
    ]
  },
  {
    label: "Religious & Inspirational",
    chips: [
      "Gospel",
      "Contemporary Christian",
      "Worship",
      "Christian rock",
      "Inspirational"
    ]
  },
  {
    label: "Experimental & Avant-Garde",
    chips: [
      "Experimental",
      "Avant-garde",
      "Musique concrète",
      "Electroacoustic music",
      "Minimalism",
      "Drone music",
      "Noise music",
      "Harsh noise",
      "Free improvisation",
      "Free jazz",
      "Industrial",
      "Power electronics",
      "IDM (Intelligent dance music)",
      "Math rock",
      "No wave",
      "Experimental rock",
      "Avant-pop",
      "Experimental pop",
      "Vaporwave",
      "Deconstructed club",
      "Glitch",
      "Sound art",
      "Tape music",
      "Soundscape composition"
    ]
  },
  {
    label: "Mood & Vibe",
    chips: [
      "Driving",
      "Sentimental",
      "Energetic",
      "Dreamy",
      "Dark",
      "Uplifting",
      "Melancholic",
      "Heroic",
      "Romantic",
      "Epic",
      "Chill",
      "Aggressive",
      "Nostalgic",
      "Mysterious",
      "Playful"
    ]
  },
  {
    label: "Kids & Holiday",
    chips: [
      "Lullaby",
      "Children's",
      "Birthday",
      "Christmas",
      "Carnival",
      "Marching band"
    ]
  }
], tu = Pt.flatMap((e) => e.chips), au = ["very_slow", "slow", "medium", "fast", "very_fast"], ru = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], ou = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], iu = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], nu = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], su = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], lu = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], cu = ["narrow", "medium", "wide"], du = ["none", "gradual", "sudden"], uu = ["low", "medium", "high"], pu = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], mu = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], hu = ["male", "female", "mixed", "other", "none"], gu = [
  "drums_acoustic",
  "drum_machine",
  "percussion",
  "bass_electric",
  "bass_synth",
  "bass_upright",
  "electric_guitar",
  "acoustic_guitar",
  "piano",
  "keys_synth",
  "organ",
  "strings",
  "brass",
  "woodwinds",
  "synth_pad",
  "synth_lead",
  "pluck_synth",
  "fx",
  "lead_vocal",
  "choir"
], yu = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], fu = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], bu = [
  "happy",
  "uplifting",
  "dark",
  "melancholic",
  "dreamy",
  "chill",
  "epic",
  "romantic",
  "energetic",
  "aggressive"
], vu = [
  "party",
  "club",
  "study",
  "sleep",
  "workout",
  "background",
  "focus",
  "film_trailer",
  "game",
  "kids",
  "holiday_christmas"
], xu = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], ae = (e) => e.replace(/_/g, " "), wu = (e, a, r) => {
  const o = (l) => l.trim().replace(/^[-••\d.)(]+\s*/, "").trim(), n = (l, d) => o(l).split(/\s+/).slice(0, d).join(" ");
  if (e) {
    const l = e.split(`
`).map((d) => d.trim()).find((d) => d && !d.startsWith("[") && !d.startsWith("(") && d.split(/\s+/).length >= 3);
    if (l) {
      const d = n(l, 6).replace(/[,.!?;:—-]+$/, "").trim();
      if (d.length >= 3) return d;
    }
  }
  if (a.trim()) {
    const l = n(a, 6).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  if (r.trim()) {
    const l = n(r, 4).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  return "Untitled";
}, ku = (e) => {
  if (!e) return "";
  const a = e.replace(/\.[a-z0-9]{2,5}$/i, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return a.length >= 3 ? a : "";
}, Su = (e) => {
  let r = e.replace(/\s+/g, " ").trim() || "Polished modern cover, clear vocals, tight rhythm, high-quality mix";
  if (r.length < 10 && (r = `${r}, style cover, polished music production`.replace(/^,\s*/, "")), r.length <= 300) return r;
  const o = r.slice(0, 300).replace(/\s+\S*$/, "").trim();
  return o.length >= 10 ? o : r.slice(0, 300);
}, _o = (e) => {
  const a = [], r = [];
  if (e.structure?.tempo_bpm ? r.push(`${e.structure.tempo_bpm} BPM`) : e.structure?.tempo_class && r.push(`${ae(e.structure.tempo_class)} tempo`), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push(`${e.structure.time_signature} time`), e.structure?.rhythm_feel && r.push(`${e.structure.rhythm_feel} feel`), e.structure?.groove_pattern && r.push(`${ae(e.structure.groove_pattern)} groove`), e.structure?.song_form && r.push(`${ae(e.structure.song_form)} form`), e.structure?.length_seconds && r.push(`~${e.structure.length_seconds}s`), r.length && a.push(r.join(", ")), e.tonal?.key) {
    const l = e.tonal.mode ? `${e.tonal.key} ${e.tonal.mode}` : e.tonal.key;
    a.push(`Key: ${l}`);
  }
  if (e.instrumentation?.primary_instruments?.length && a.push(`Instruments: ${e.instrumentation.primary_instruments.map(ae).join(", ")}`), e.instrumentation?.has_vocals === !1)
    a.push("Instrumental, no vocals");
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const l = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && l.push(e.instrumentation.vocal_gender), e.instrumentation.vocal_style?.length ? l.push(e.instrumentation.vocal_style.map(ae).join("/")) : l.length === 0 && l.push("vocals");
    let d = l.join(" ");
    e.instrumentation.vocal_processing?.length && (d += ` with ${e.instrumentation.vocal_processing.map(ae).join(" + ")}`), a.push(d);
  }
  e.instrumentation?.language_iso639_1 && a.push(`Language: ${e.instrumentation.language_iso639_1}`);
  const o = [];
  e.dynamics?.overall_dynamic_range && o.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && o.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && o.push("big drops"), o.length && a.push(o.join(", ")), e.mood?.primary_moods?.length && a.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && a.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && a.push(`For: ${e.mood.occasion_tags.map(ae).join(", ")}`);
  const n = [];
  return e.context?.era_reference && n.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && n.push(`${ae(e.context.cultural_region)} scene`), e.context?.intended_use?.length && n.push(`use: ${e.context.intended_use.map(ae).join("/")}`), e.context?.explicit_lyrics && n.push("explicit lyrics"), n.length && a.push(n.join(", ")), a.join(". ");
}, Tu = [
  {
    id: "verse_chorus",
    label: "Verse-Chorus",
    description: "Pop / rock standard — radio-friendly, repeating chorus.",
    skeleton: `[Verse 1]


[Chorus]


[Verse 2]


[Chorus]


[Bridge]


[Chorus]


[Outro]
`,
    prompt: "Use the standard verse-chorus form: [Verse 1] (4 lines, set up the story), [Chorus] (4 lines, the hook with the song title or central image, repeated identically each time), [Verse 2] (4 lines, deepen or twist the story), [Chorus] (same as before), [Bridge] (2-4 lines, contrast — new perspective or emotional turn), [Chorus] (final repeat), [Outro] (1-2 lines, resolution)."
  },
  {
    id: "aaba",
    label: "AABA Ballad",
    description: "Storytelling / jazz — three matching verses with a contrasting bridge.",
    skeleton: `[Verse A]


[Verse A2]


[Bridge B]


[Verse A3]
`,
    prompt: "Use the AABA form (Tin Pan Alley / classic ballad): [Verse A] 8 lines establishing scene + mood, [Verse A2] 8 lines same melody-shape, advances the story, [Bridge B] 8 lines contrasting key/melody/perspective — the emotional climb, [Verse A3] 8 lines returning to the original feel for resolution. Maintain consistent rhyme scheme across the A sections (typically AABB or ABAB)."
  },
  {
    id: "drop",
    label: "Drop / EDM",
    description: "Build-up → drop → repeat — for dance, EDM, pop dance.",
    skeleton: `[Intro]


[Verse]


[Pre-Chorus / Build]


[Drop / Hook]


[Verse 2]


[Pre-Chorus / Build]


[Drop / Hook]


[Outro]
`,
    prompt: "Use the drop-based EDM form: [Intro] 1-2 atmospheric lines, [Verse] 4 lines low energy, [Pre-Chorus / Build] 2-4 lines ramping up tension with shorter phrases, [Drop / Hook] 2-4 short repeating lines (the chant — designed to be screamed at a festival), [Verse 2] same shape as Verse 1 with story progression, [Pre-Chorus / Build] same, [Drop / Hook] (identical repeat), [Outro] 1-2 lines fading. Keep the Drop simple, percussive, easy to repeat."
  },
  {
    id: "narrative",
    label: "Narrative",
    description: "Story-first — folk, country, rap, story-rap, country.",
    skeleton: `[Verse 1 — setup]


[Verse 2 — rising action]


[Hook / Refrain]


[Verse 3 — climax]


[Hook / Refrain]


[Verse 4 — resolution]


[Final Hook]
`,
    prompt: "Use a narrative arc form: each verse advances the story (setup → rising action → climax → resolution). [Verse 1 — setup] 4-6 lines introducing characters and stakes, [Verse 2 — rising action] 4-6 lines escalating, [Hook / Refrain] 2-4 lines stating the song's core truth or feeling, [Verse 3 — climax] 4-6 lines at maximum tension, [Hook / Refrain] (repeat), [Verse 4 — resolution] 4-6 lines after the climax — what changed, what was learned, [Final Hook]. The hook should feel different in meaning each time it returns even though the words repeat."
  },
  {
    id: "hook_loop",
    label: "Hook-Loop",
    description: "Trap / hip-hop / rap — short hook, two verses, post-hook.",
    skeleton: `[Hook]


[Verse 1]


[Hook]


[Verse 2]


[Hook]


[Post-Hook / Outro]
`,
    prompt: "Use the hook-loop trap form: [Hook] 4 short, repeatable lines (this is the heart — written FIRST, designed to loop), [Verse 1] 12-16 lines with internal rhyme and triplet flow, [Hook] (identical repeat), [Verse 2] 12-16 lines escalating energy or content, [Hook] (identical repeat), [Post-Hook / Outro] 2-4 lines — sometimes ad-libs or a tag. Verses should rhyme densely (multisyllabic, internal). Keep the Hook 4 lines max — repetition is the engine."
  }
], Ui = "tytus.music-creator.gallery", Oi = "tytus.music-creator", to = "gallery", ea = 3500, Hi = 1e3, _u = 2e3, Oe = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), o = a % 60;
  return `${r}:${o.toString().padStart(2, "0")}`;
}, Nu = (e) => {
  if (!e) return null;
  const a = "base64,", r = e.indexOf(a);
  return r >= 0 ? e.slice(r + a.length) : null;
}, Cu = (e, a = "audio/wav") => {
  const r = e.replace(/\s+/g, ""), o = atob(r), n = new Uint8Array(o.length);
  for (let l = 0; l < o.length; l++) n[l] = o.charCodeAt(l);
  return new Blob([n], { type: a });
}, Eu = (e) => {
  try {
    const a = e.replace(/\s+/g, ""), r = atob(a.slice(0, Math.min(a.length, 4096)));
    if (r.length < 44 || r.slice(0, 4) !== "RIFF" || r.slice(8, 12) !== "WAVE") return null;
    const o = new Uint8Array(r.length);
    for (let h = 0; h < r.length; h++) o[h] = r.charCodeAt(h);
    const n = new DataView(o.buffer);
    let l = 12, d = 0, g = 0, m = 0;
    for (; l + 8 <= o.length; ) {
      const h = String.fromCharCode(o[l], o[l + 1], o[l + 2], o[l + 3]), b = n.getUint32(l + 4, !0), u = l + 8;
      if (h === "fmt " && u + 16 <= o.length)
        d = n.getUint32(u + 4, !0), g = n.getUint16(u + 12, !0);
      else if (h === "data") {
        m = b;
        break;
      }
      l = u + b + b % 2;
    }
    return !d || !g || !m ? null : m / (d * g) * 1e3;
  } catch {
    return null;
  }
}, No = (e) => e.source === "youtube" && !!e.externalId, _e = (e) => !!e.audioDataUrl || No(e), vr = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? gr(e.externalId) : ""), gr = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", jn = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, Na = (e) => `youtube:${e}`, Au = async () => {
  const e = (a) => ({
    id: a.id ?? `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    title: a.title ?? "Untitled",
    styleTags: a.styleTags ?? "",
    lyricsPreview: a.lyricsPreview ?? "",
    durationMs: a.durationMs ?? 0,
    bitrate: a.bitrate ?? 0,
    sampleRate: a.sampleRate ?? 0,
    sizeBytes: a.sizeBytes ?? 0,
    createdAt: a.createdAt ?? Date.now(),
    audioDataUrl: a.audioDataUrl ?? "",
    specsJson: a.specsJson ?? "",
    coverDataUrl: a.coverDataUrl ?? "",
    theme: a.theme ?? "",
    source: a.source ?? "juli3ta",
    audioKind: a.audioKind ?? (a.audioDataUrl ? "data_url" : "lyrics_only"),
    externalId: a.externalId ?? "",
    externalUrl: a.externalUrl ?? "",
    thumbnailUrl: a.thumbnailUrl ?? "",
    artist: a.artist ?? "",
    album: a.album ?? ""
  });
  try {
    const a = localStorage.getItem(Ui);
    if (a) {
      const r = JSON.parse(a);
      if (Array.isArray(r))
        for (const o of r)
          try {
            await hr(e(o));
          } catch {
          }
      localStorage.removeItem(Ui);
    }
  } catch (a) {
    console.warn("Legacy localStorage gallery migration failed:", a);
  }
  try {
    const a = await new Promise((r) => {
      const o = indexedDB.open(Oi);
      o.onsuccess = () => {
        const n = o.result;
        if (!n.objectStoreNames.contains(to)) {
          n.close(), r([]);
          return;
        }
        const d = n.transaction(to, "readonly").objectStore(to).getAll();
        d.onsuccess = () => {
          n.close(), r(d.result ?? []);
        }, d.onerror = () => {
          n.close(), r([]);
        };
      }, o.onerror = () => r([]);
    });
    for (const r of a)
      try {
        await hr(e(r));
      } catch {
      }
    a.length > 0 && indexedDB.deleteDatabase(Oi);
  } catch (a) {
    console.warn("Legacy IDB gallery migration failed:", a);
  }
}, Ma = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, Lu = (e, a) => Td(a).map((r) => ({
  ...r,
  models: Ma
})), Mu = (e) => {
  const a = (u, f) => {
    const v = u.map((w) => w.toLowerCase());
    for (const w of f) {
      const C = v.findIndex((T) => w.test(T));
      if (C >= 0) return u[C];
    }
    return null;
  }, r = a(e, [
    /(^|[/:])minimax:music-cover$/,
    /(^|[/:])ail-music-cover$/,
    /music[-_:]cover/,
    /cover.*music/
  ]), o = a(e, [
    /(^|[/:])minimax:music-lyrics$/,
    /(^|[/:])ail-music-lyrics$/,
    /music[-_:]lyrics/,
    /lyrics[-_:]?generat/,
    // minimax lyrics_generation alias if exposed
    /lyrics.*music/,
    /(^|[/:])lyrics$/,
    /lyric/i
    // last-resort: anything containing "lyric"
  ]), n = new Set([r, o].filter((u) => !!u)), l = e.filter((u) => !n.has(u)), d = a(l, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), g = (u) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(u), m = e.filter((u) => !g(u)), h = a(m, [
    /(^|[/:])ail-compound$/,
    /(^|[/:])ail-fast$/,
    /(^|[/:])ail-search$/,
    /(^|[/:])ail-kimi$/,
    /(^|[/:])minimax:m2\.7$/,
    /(^|[/:])gpt-/i,
    /(^|[/:])claude/i,
    /chat/i,
    /./
    // last-resort: any non-music id at all
  ]), b = a(e, [
    /(^|[/:])minimax:image-01$/,
    // local switchAILocal canonical
    /(^|[/:])image-01$/,
    // bare alias (no provider prefix)
    /(^|[/:])minimax:image$/,
    /(^|[/:])minimax:cover-art$/,
    /(^|[/:])ail-image$/,
    // remote AIL pod alias
    /(^|[/:])dall-?e/i,
    /(^|[/:])flux/i,
    /(^|[/:])sdxl/i,
    /image[-_:]?(gen|01)/i,
    /image/i,
    /diffusion/i
  ]);
  return { music: d, cover: r, lyrics: o, lyricsBackup: h, image: b, allIds: e };
}, zu = 6e4, ao = /* @__PURE__ */ new Map(), na = (e, a, r) => {
  const o = new Headers(r.headers ?? {}), n = a.startsWith("/") ? a : `/${a}`;
  if (e.proxyPodId) {
    o.delete("Authorization");
    const l = `/api/pods/${encodeURIComponent(e.proxyPodId)}/proxy/v1${n}`;
    return fetch(l, { ...r, headers: o });
  }
  return e.apiKey && o.set("Authorization", `Bearer ${e.apiKey}`), fetch(`${e.url}${n}`, { ...r, headers: o });
}, Iu = async (e, a) => {
  const r = ao.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: Ma };
    ao.delete(e.url);
  }
  const o = sa(a, Pu);
  try {
    const n = await na(e, "/models", {
      method: "GET",
      signal: o.signal,
      headers: { Accept: "application/json" }
    });
    if (n.status >= 500) return { ok: !1, models: Ma };
    if (!n.ok) return { ok: !0, models: Ma };
    const d = ((await n.json()).data ?? []).map((g) => g?.id).filter((g) => typeof g == "string" && g.length > 0);
    return { ok: !0, models: Mu(d) };
  } catch (n) {
    return (n?.name ?? "") === "TypeError" && ao.set(e.url, Date.now() + zu), { ok: !1, models: Ma };
  } finally {
    o.dispose();
  }
}, Ru = async (e, a) => (await Promise.all(
  e.map(async (o) => {
    if (a.aborted) return null;
    const { ok: n, models: l } = await Iu(o, a);
    return n ? { ...o, models: l } : null;
  })
)).filter((o) => o !== null), sr = 6e4, $i = 3e5, Pu = 8e3, sa = (e, a) => {
  const r = AbortSignal.any, o = AbortSignal.timeout;
  if (r && o) {
    const d = o(a);
    return { signal: e ? r([e, d]) : d, dispose: () => {
    } };
  }
  const n = new AbortController(), l = setTimeout(() => {
    n.signal.aborted || n.abort(new DOMException("Timeout", "TimeoutError"));
  }, a);
  return e && (e.aborted ? n.abort(e.reason) : e.addEventListener("abort", () => n.abort(e.reason), { once: !0 })), { signal: n.signal, dispose: () => clearTimeout(l) };
}, ju = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]);
class Te extends Error {
  status;
  body;
  constructor(a, r, o) {
    super(o ?? `HTTP ${a}: ${r.slice(0, 200)}`), this.name = "GatewayError", this.status = a, this.body = r;
  }
}
function Dn(e) {
  const a = e.indexOf("{");
  if (a === -1) return null;
  let r = 0, o = !1, n = !1;
  for (let l = a; l < e.length; l++) {
    const d = e[l];
    if (o) {
      if (n) {
        n = !1;
        continue;
      }
      if (d === "\\") {
        n = !0;
        continue;
      }
      d === '"' && (o = !1);
      continue;
    }
    if (d === '"') {
      o = !0;
      continue;
    }
    if (d === "{") r++;
    else if (d === "}" && (r--, r === 0))
      return e.slice(a, l + 1);
  }
  return null;
}
const xr = async (e, a, r) => {
  if (e.length === 0)
    throw new Error(`No ${r}-capable models available on this endpoint.`);
  let o = null;
  for (const l of e)
    try {
      return await a(l);
    } catch (d) {
      if (d.name === "AbortError" || d.name === "TimeoutError")
        throw d;
      if (d instanceof TypeError) {
        o = d;
        continue;
      }
      if (d instanceof Te && ju.has(d.status)) {
        o = d;
        continue;
      }
      throw d;
    }
  const n = o?.message ?? "unknown";
  throw new Error(`All ${r} models exhausted. Last error: ${n}. Wait for the rate limit to reset, or pick a different endpoint in Settings.`);
}, Du = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), Uu = async (e, a, r) => {
  let o = 0, n = "";
  const l = sa(r, sr);
  try {
    const f = { prompt: a, mode: "write_full_song" };
    e.models.lyrics && (f.model = e.models.lyrics);
    const v = await na(e, "/music/lyrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(f),
      signal: l.signal
    });
    if (v.ok) {
      const w = await v.json();
      if (!w || typeof w.lyrics != "string" || w.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...w, usedFallback: !1 };
    }
    o = v.status, n = await v.text().catch(() => "");
  } catch (f) {
    const v = f.name;
    if (v === "AbortError" && r?.aborted) throw f;
    if (v === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${sr / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", f);
  } finally {
    l.dispose();
  }
  if (o !== 0 && !Du.has(o)) {
    const f = n.length > 300 ? `${n.slice(0, 300)}…` : n;
    throw new Error(`Lyrics HTTP ${o}: ${f || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, n);
  const d = (f) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(f), g = /* @__PURE__ */ new Set(), m = [], h = (f) => {
    f && !g.has(f) && (g.add(f), m.push(f));
  };
  if (h(e.models.lyricsBackup), e.models.allIds.filter(d).forEach(h), m.length === 0)
    throw new Error(
      `Lyrics endpoint failed and no chat backup model is available for ${e.label}. Pick one in JULI3TA Settings.`
    );
  const b = `You are a songwriter. Given a theme, write a complete singable song.
Respond with VALID JSON ONLY in exactly this shape, nothing else:
{
  "song_title": "Short catchy title",
  "style_tags": "comma, separated, style, hints",
  "lyrics": "[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Bridge]\\nTwo lines\\n\\n[Outro]\\nTwo lines"
}`, u = await xr(m, async (f) => {
    const v = {
      model: f,
      messages: [
        { role: "system", content: b },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, w = async (C) => {
      const T = sa(r, sr);
      let P;
      try {
        P = await na(e, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            C ? { ...v, response_format: { type: "json_object" } } : v
          ),
          signal: T.signal
        });
      } catch (A) {
        throw A.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${sr / 1e3}s.`) : A;
      } finally {
        T.dispose();
      }
      if (!P.ok) {
        const A = await P.text().catch(() => "");
        throw new Te(P.status, A, `Lyrics fallback HTTP ${P.status}: ${A.slice(0, 300)}`);
      }
      const N = (await P.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!N)
        throw new Te(502, "", "Lyrics fallback returned empty content");
      const W = N.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), R = Dn(W) ?? W;
      let k;
      try {
        k = JSON.parse(R);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", N.slice(0, 400)), new Te(502, N.slice(0, 200), `Lyrics fallback returned non-JSON content: ${N.slice(0, 200)}`);
      }
      if (!k.lyrics)
        throw new Te(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return k;
    };
    try {
      return await w(!0);
    } catch (C) {
      if (C instanceof Te && C.status === 400 && /response_format|json_object/i.test(C.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", f), await w(!1);
      throw C;
    }
  }, "chat-lyrics");
  return {
    song_title: u.song_title || "Untitled",
    style_tags: u.style_tags || "",
    lyrics: u.lyrics,
    usedFallback: !0
  };
}, Ou = async (e, a, r) => {
  const o = !!a.refAudioBase64, n = (h) => /music/i.test(h) && !/cover/i.test(h), l = (h) => /cover/i.test(h), d = /* @__PURE__ */ new Set(), g = (h, b) => {
    b && !d.has(b) && (d.add(b), h.push(b));
  }, m = [];
  if (o ? (g(m, e.models.cover), e.models.allIds.filter(l).forEach((h) => g(m, h)), g(m, e.models.music)) : (g(m, e.models.music), e.models.allIds.filter(n).forEach((h) => g(m, h))), m.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return xr(m, async (h) => {
    const b = {
      model: h
    }, u = a.lyrics?.trim() ?? "";
    (!o || u) && (b.lyrics = u), a.prompt && (b.prompt = a.prompt), a.instrumental && (b.instrumental = !0), o && (b.audio_base64 = a.refAudioBase64);
    const f = sa(r, $i);
    let v;
    try {
      v = await na(e, "/music/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(b),
        signal: f.signal
      });
    } catch (C) {
      throw C.name === "TimeoutError" ? new Error(`Music generation timed out after ${$i / 1e3}s. Try a shorter lyric or a different endpoint.`) : C;
    } finally {
      f.dispose();
    }
    if (!v.ok) {
      const C = await v.text().catch(() => "");
      throw o && v.status === 413 ? new Te(
        v.status,
        C,
        "Reference audio was too large for the gateway. JULI3TA now makes compact gateway-safe reference samples; clear and re-pick the reference audio, then retry Restyle."
      ) : new Te(v.status, C, `Music HTTP ${v.status}: ${C.slice(0, 300)}`);
    }
    const w = await v.json();
    if (!w?.data?.audio || typeof w.data.audio != "string" || w.data.audio.length < 100)
      throw new Te(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return w;
  }, o ? "music-cover" : "music");
}, Fi = 6e4, dr = (e, a, r) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", n = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), l = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${o}".`
  ];
  return n && d.push(`Genre: ${n}.`), l && d.push(`Mood: ${l}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, yo = async (e, a, r) => {
  const o = (g) => /image|diffusion|dall-?e|flux|sdxl/i.test(g), n = /* @__PURE__ */ new Set(), l = [], d = (g) => {
    g && !n.has(g) && (n.add(g), l.push(g));
  };
  if (d(e.models.image), e.models.allIds.filter(o).forEach(d), l.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return xr(l, async (g) => {
    const m = sa(r, Fi), b = /minimax|ail-image|image-01/i.test(g) ? {
      model: g,
      prompt: a,
      aspect_ratio: "1:1",
      response_format: "base64"
    } : {
      model: g,
      prompt: a,
      size: "1024x1024",
      n: 1,
      response_format: "b64_json"
    };
    let u;
    try {
      u = await na(e, "/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(b),
        signal: m.signal
      });
    } catch (N) {
      throw N.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${Fi / 1e3}s.`) : N;
    } finally {
      m.dispose();
    }
    if (!u.ok) {
      const N = await u.text().catch(() => "");
      throw new Te(u.status, N, `Cover-art HTTP ${u.status}: ${N.slice(0, 200)}`);
    }
    const f = await u.json(), v = f.base_resp;
    if (v && typeof v.status_code == "number" && v.status_code !== 0)
      throw new Te(502, v.status_msg ?? "", `Cover-art ${g} rejected: ${v.status_msg ?? "status_code=" + v.status_code}`);
    const w = (N) => typeof N != "string" || !N.length ? null : N.startsWith("data:") ? N : `data:image/png;base64,${N}`, C = (N) => typeof N == "string" && /^https?:\/\//i.test(N) ? N : null, T = f.data;
    if (T && typeof T == "object" && !Array.isArray(T)) {
      const N = T, W = N.image_base64;
      if (Array.isArray(W) && W[0]) {
        const A = w(W[0]);
        if (A) return A;
      }
      const R = w(N.image) ?? w(N.b64_json) ?? C(N.url);
      if (R) return R;
      const k = N.image_url ?? N.image_urls;
      if (Array.isArray(k) && k[0]) {
        const A = C(k[0]);
        if (A) return A;
      }
    }
    if (Array.isArray(T) && T[0]) {
      const N = T[0], W = w(N.b64_json) ?? w(N.image_base64) ?? C(N.url);
      if (W) return W;
      throw new Te(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const P = w(f.image) ?? w(f.b64_json);
    if (P) return P;
    const _ = f.images;
    if (Array.isArray(_) && _[0]) {
      const N = _[0], W = w(N.b64_json) ?? w(N.image) ?? C(N.url);
      if (W) return W;
    }
    throw new Te(502, "", `Cover-art response shape not recognised: ${JSON.stringify(f).slice(0, 200)}`);
  }, "image");
}, Bi = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], Wi = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
], ro = (e) => No(e) ? "metadata" : "auto";
function Hu(e, a, r) {
  const [o, n] = S(() => {
    let k = "off";
    try {
      const G = localStorage.getItem("juli3ta:repeatMode");
      (G === "off" || G === "all" || G === "one") && (k = G);
    } catch {
    }
    let A = !1;
    try {
      A = localStorage.getItem("juli3ta:shuffle") === "1";
    } catch {
    }
    let L = 1;
    try {
      const G = localStorage.getItem("juli3ta:volume");
      if (G !== null) {
        const Z = Number.parseFloat(G);
        Number.isFinite(Z) && (L = Math.max(0, Math.min(1, Z)));
      }
    } catch {
    }
    let z = 1;
    try {
      const G = localStorage.getItem("juli3ta:playbackRate");
      if (G !== null) {
        const Z = Number.parseFloat(G);
        Number.isFinite(Z) && (z = Math.max(0.25, Math.min(4, Z)));
      }
    } catch {
    }
    return { trackId: null, playing: !1, loadingTrackId: null, positionMs: 0, durationMs: 0, volume: L, repeatMode: k, shuffle: A, playbackRate: z, sleepTimerEndsAt: null };
  }), l = te(null), d = te([]), g = te(!1), m = M((k) => {
    n((A) => ({ ...A, repeatMode: k }));
    try {
      localStorage.setItem("juli3ta:repeatMode", k);
    } catch {
    }
  }, []), h = M((k) => {
    n((A) => ({ ...A, shuffle: k }));
    try {
      localStorage.setItem("juli3ta:shuffle", k ? "1" : "0");
    } catch {
    }
  }, []), b = M((k) => {
    const A = Math.max(0.25, Math.min(4, k));
    a.current && (a.current.playbackRate = A), n((L) => ({ ...L, playbackRate: A }));
    try {
      localStorage.setItem("juli3ta:playbackRate", String(A));
    } catch {
    }
  }, [a]), u = M((k) => {
    if (k === null || k <= 0) {
      n((z) => ({ ...z, sleepTimerEndsAt: null }));
      return;
    }
    const A = Math.min(k, 1440), L = Date.now() + A * 6e4;
    n((z) => ({ ...z, sleepTimerEndsAt: L }));
  }, []), f = M((k) => {
    (async () => {
      n((z) => ({
        ...z,
        trackId: k.id,
        playing: !1,
        loadingTrackId: _e(k) ? k.id : null,
        positionMs: 0,
        durationMs: k.durationMs || 0
      }));
      const A = k.audioDataUrl || await r?.(k);
      if (!A) {
        n((z) => ({ ...z, loadingTrackId: null }));
        return;
      }
      const L = a.current;
      if (!L) {
        n((z) => ({ ...z, loadingTrackId: null }));
        return;
      }
      o.trackId !== k.id || L.src !== A ? (L.src = A, L.preload = ro(k), L.load(), L.pause(), n((z) => ({
        ...z,
        trackId: k.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: k.durationMs || 0
      }))) : n((z) => ({ ...z, loadingTrackId: null }));
    })();
  }, [o.trackId, a, r]), v = M((k) => {
    (async () => {
      if (l.current = null, o.trackId && o.trackId !== k.id && !g.current) {
        const z = d.current;
        z[z.length - 1] !== o.trackId && (z.push(o.trackId), z.length > 50 && z.splice(0, z.length - 50));
      }
      g.current = !1, n((z) => ({
        ...z,
        trackId: k.id,
        loadingTrackId: k.id,
        durationMs: k.durationMs || z.durationMs
      }));
      const A = k.audioDataUrl || await r?.(k);
      if (!A) {
        n((z) => ({ ...z, loadingTrackId: null, playing: !1 }));
        return;
      }
      const L = a.current;
      if (!L) {
        n((z) => ({ ...z, loadingTrackId: null, playing: !1 }));
        return;
      }
      (o.trackId !== k.id || L.src !== A) && (L.src = A, L.preload = ro(k), n((z) => ({ ...z, trackId: k.id, positionMs: 0, durationMs: k.durationMs || 0 }))), L.play().then(() => n((z) => ({ ...z, loadingTrackId: null, playing: !0 }))).catch(() => n((z) => ({ ...z, loadingTrackId: null, playing: !1 })));
    })();
  }, [o.trackId, a, r]), w = M(() => {
    a.current?.pause(), n((k) => ({ ...k, playing: !1, loadingTrackId: null }));
  }, [a]), C = M((k) => {
    if (o.loadingTrackId) return;
    if (k) {
      o.trackId === k.id && o.playing ? w() : v(k);
      return;
    }
    if (o.playing) {
      w();
      return;
    }
    const A = o.trackId ? e.find((L) => L.id === o.trackId) : null;
    A ? v(A) : a.current?.src && a.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, v, w, a]), T = M((k) => {
    const A = a.current;
    A && (A.currentTime = Math.max(0, k / 1e3));
  }, [a]), P = M((k) => {
    const A = Math.max(0, Math.min(1, k));
    a.current && (a.current.volume = A), n((L) => ({ ...L, volume: A }));
    try {
      localStorage.setItem("juli3ta:volume", String(A));
    } catch {
    }
  }, [a]);
  B(() => {
    a.current && (a.current.volume = o.volume);
  }, []), B(() => {
    a.current && (a.current.playbackRate = o.playbackRate);
  }, [o.playbackRate, o.trackId, a]), B(() => {
    if (o.sleepTimerEndsAt === null) return;
    const k = o.sleepTimerEndsAt - Date.now();
    if (k <= 0) {
      a.current?.pause(), n((L) => ({ ...L, sleepTimerEndsAt: null, playing: !1 }));
      return;
    }
    const A = window.setTimeout(() => {
      a.current?.pause(), n((L) => ({ ...L, sleepTimerEndsAt: null, playing: !1 }));
    }, k);
    return () => window.clearTimeout(A);
  }, [o.sleepTimerEndsAt, a]);
  const _ = ge(() => e.filter(_e), [e]), N = M(() => {
    if (_.length === 0) return null;
    if (_.length === 1) return _[0];
    const k = _.filter((A) => A.id !== o.trackId);
    return k[Math.floor(Math.random() * k.length)];
  }, [_, o.trackId]), W = M(() => {
    if (!o.trackId || _.length === 0) return;
    if (o.shuffle) {
      const L = N();
      L && v(L);
      return;
    }
    const k = _.findIndex((L) => L.id === o.trackId);
    if (k < 0) return;
    const A = _[(k + 1) % _.length];
    A && v(A);
  }, [o.trackId, o.shuffle, _, v, N]), R = M(() => {
    if (!o.trackId || _.length === 0) return;
    if (o.shuffle) {
      const L = d.current;
      for (; L.length > 0; ) {
        const G = L.pop();
        if (!G || G === o.trackId) continue;
        const Z = _.find((fe) => fe.id === G);
        if (Z) {
          g.current = !0, v(Z);
          return;
        }
      }
      const z = N();
      z && v(z);
      return;
    }
    const k = _.findIndex((L) => L.id === o.trackId);
    if (k < 0) return;
    const A = _[(k - 1 + _.length) % _.length];
    A && v(A);
  }, [o.trackId, o.shuffle, _, v, N]);
  return B(() => {
    const k = a.current;
    if (!k) return;
    const A = () => n((O) => ({ ...O, positionMs: k.currentTime * 1e3 })), L = () => n((O) => ({
      ...O,
      durationMs: Number.isFinite(k.duration) ? k.duration * 1e3 : O.durationMs
    })), z = () => n((O) => ({ ...O, playing: !0, loadingTrackId: null })), G = () => n((O) => ({ ...O, playing: !1, loadingTrackId: null })), Z = () => n((O) => ({ ...O, loadingTrackId: null })), fe = () => {
      const O = o.trackId ? _.find((ee) => ee.id === o.trackId) : null;
      if (!O || O.audioDataUrl || !r || l.current === O.id) {
        n((ee) => ({ ...ee, playing: !1, loadingTrackId: null }));
        return;
      }
      l.current = O.id, n((ee) => ({ ...ee, loadingTrackId: O.id, playing: !1 })), r(O, { force: !0 }).then((ee) => {
        if (!ee) throw new Error("No refreshed stream URL");
        return k.src = ee, k.preload = ro(O), k.play();
      }).then(() => n((ee) => ({ ...ee, playing: !0, loadingTrackId: null }))).catch(() => n((ee) => ({ ...ee, playing: !1, loadingTrackId: null })));
    }, F = () => {
      if (o.repeatMode === "one" && o.trackId) {
        const O = _.find((ee) => ee.id === o.trackId);
        if (O) {
          v(O);
          return;
        }
      }
      if (o.shuffle && _.length >= 1)
        if (_.length === 1) {
          if (o.repeatMode === "all") {
            v(_[0]);
            return;
          }
        } else {
          const O = _.filter((Ae) => Ae.id !== o.trackId), ee = O[Math.floor(Math.random() * O.length)];
          if (ee) {
            v(ee);
            return;
          }
        }
      if (_.length >= 2) {
        const O = _.findIndex((ee) => ee.id === o.trackId);
        if (O >= 0 && O + 1 < _.length) {
          v(_[O + 1]);
          return;
        }
        if (O >= 0 && o.repeatMode === "all") {
          v(_[0]);
          return;
        }
      }
      n((O) => ({ ...O, playing: !1, positionMs: 0 }));
    };
    return k.addEventListener("timeupdate", A), k.addEventListener("loadedmetadata", L), k.addEventListener("play", z), k.addEventListener("pause", G), k.addEventListener("canplay", Z), k.addEventListener("error", fe), k.addEventListener("ended", F), () => {
      k.removeEventListener("timeupdate", A), k.removeEventListener("loadedmetadata", L), k.removeEventListener("play", z), k.removeEventListener("pause", G), k.removeEventListener("canplay", Z), k.removeEventListener("error", fe), k.removeEventListener("ended", F);
    };
  }, [_, o.trackId, o.repeatMode, o.shuffle, v, a, r]), { state: o, queue: e, play: v, pause: w, toggle: C, select: f, seek: T, setVolume: P, setRepeatMode: m, setShuffle: h, setPlaybackRate: b, setSleepTimer: u, next: W, prev: R };
}
function qi({
  checked: e,
  onChange: a,
  disabled: r,
  id: o
}) {
  return /* @__PURE__ */ t(
    "button",
    {
      id: o,
      type: "button",
      role: "switch",
      "aria-checked": e,
      onClick: () => !r && a(!e),
      disabled: r,
      className: "relative shrink-0 rounded-full transition-all disabled:opacity-40",
      style: {
        width: 30,
        height: 16,
        background: e ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-hover)",
        border: "1px solid var(--border-subtle)",
        cursor: r ? "not-allowed" : "pointer"
      },
      children: /* @__PURE__ */ t(
        "span",
        {
          className: "absolute rounded-full transition-transform",
          style: {
            top: 1,
            left: 1,
            width: 12,
            height: 12,
            background: "white",
            transform: e ? "translateX(14px)" : "translateX(0)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.4)"
          }
        }
      )
    }
  );
}
function oo({
  label: e,
  tooltip: a,
  onClick: r,
  busy: o,
  disabled: n
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      onClick: r,
      disabled: n,
      className: "flex items-center gap-1 px-2 py-0.5 rounded-md transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100",
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: "white",
        background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
        border: "1px solid transparent"
      },
      title: a,
      children: [
        o ? /* @__PURE__ */ t(re, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(lt, { size: 10 }),
        o ? "…" : e
      ]
    }
  );
}
function ct({
  track: e,
  size: a,
  iconSize: r,
  radius: o
}) {
  const n = vr(e);
  return n ? /* @__PURE__ */ t(
    "img",
    {
      src: n,
      alt: "",
      className: "flex-shrink-0",
      style: {
        width: a,
        height: a,
        borderRadius: o <= 6 ? "var(--radius-md)" : "var(--radius-xl)",
        objectFit: "cover"
      }
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      className: "flex items-center justify-center flex-shrink-0 overflow-hidden",
      style: {
        width: a,
        height: a,
        borderRadius: o <= 6 ? "var(--radius-md)" : "var(--radius-xl)",
        background: "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)"
      },
      children: /* @__PURE__ */ t(
        "img",
        {
          src: "/brand/juli3ta/mark-cream-128.png",
          alt: "",
          width: r,
          height: r,
          draggable: !1,
          style: {
            width: r,
            height: r,
            opacity: 0.92,
            userSelect: "none",
            pointerEvents: "none"
          }
        }
      )
    }
  );
}
function $u({ player: e, allTracks: a }) {
  const { state: r, toggle: o, next: n, prev: l, seek: d, setVolume: g, setPlaybackRate: m, setSleepTimer: h, queue: b } = e, u = b.find((P) => P.id === r.trackId) ?? a.find((P) => P.id === r.trackId) ?? null;
  if (!u) return null;
  const f = r.durationMs > 0 ? r.durationMs : u.durationMs, v = Math.min(r.positionMs, f || 0), w = f > 0 ? v / f * 100 : 0, C = r.loadingTrackId === u.id, T = (P) => {
    if (!f) return;
    const _ = P.currentTarget.getBoundingClientRect(), N = (P.clientX - _.left) / _.width;
    d(Math.max(0, Math.min(1, N)) * f);
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: "flex-shrink-0 flex items-center gap-3 px-4",
      style: {
        height: 64,
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-titlebar)"
      },
      children: [
        /* @__PURE__ */ t(ct, { track: u, size: 40, iconSize: 18, radius: 6 }),
        /* @__PURE__ */ s("div", { className: "flex flex-col min-w-0", style: { width: 180 }, children: [
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: u.title }),
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: u.styleTags && u.styleTags !== "—" ? u.styleTags : "—" })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => e.setShuffle(!r.shuffle),
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: r.shuffle ? "var(--accent-primary)" : "var(--text-secondary)"
              },
              title: r.shuffle ? "Shuffle on" : "Shuffle off",
              children: /* @__PURE__ */ t(bo, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: l,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(Se, { size: 12, style: { transform: "rotate(180deg)" } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => o(),
              className: "flex items-center justify-center rounded-full transition-transform hover:scale-105",
              style: {
                width: 32,
                height: 32,
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              title: r.playing ? "Pause" : "Play",
              children: C ? /* @__PURE__ */ t(re, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(Tt, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(Se, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: n,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(Se, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                const P = r.repeatMode, _ = P === "off" ? "all" : P === "all" ? "one" : "off";
                e.setRepeatMode(_);
              },
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: r.repeatMode === "off" ? "var(--text-secondary)" : "var(--accent-primary)"
              },
              title: r.repeatMode === "off" ? "Repeat off" : r.repeatMode === "all" ? "Repeating queue" : "Repeating this track",
              children: r.repeatMode === "one" ? /* @__PURE__ */ t(sn, { size: 12 }) : /* @__PURE__ */ t(ec, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: Oe(v)
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            onClick: T,
            className: "flex-1 rounded-full overflow-hidden cursor-pointer",
            style: { height: 4, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${w}%`,
                  height: "100%",
                  background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                  transition: "width 0.15s linear"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36 },
            children: Oe(f)
          }
        ),
        /* @__PURE__ */ t(Bu, { rate: r.playbackRate, setRate: m }),
        /* @__PURE__ */ t(Fu, { endsAt: r.sleepTimerEndsAt, setSleepTimer: h }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(Wu, { volume: r.volume, setVolume: g }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
              value: r.volume,
              onChange: (P) => g(Number(P.target.value)),
              style: { width: "100%", accentColor: "var(--accent-primary)" }
            }
          )
        ] })
      ]
    }
  );
}
const Ji = [null, 5, 15, 30, 45, 60];
function Fu({
  endsAt: e,
  setSleepTimer: a
}) {
  const [, r] = S(() => Date.now());
  B(() => {
    if (e === null) return;
    const h = window.setInterval(() => r(Date.now()), 1e3);
    return () => window.clearInterval(h);
  }, [e]);
  const o = e !== null, n = o ? Math.max(0, Math.ceil((e - Date.now()) / 6e4)) : 0, l = () => {
    if (!o) {
      a(Ji[1]);
      return;
    }
    const h = Ji.find(
      (b) => b !== null && b > n
    ) ?? null;
    a(h);
  }, d = (h) => {
    h.preventDefault(), o && a(null);
  }, g = o ? n > 0 ? `${n}m` : "<1m" : "", m = o ? `Sleep timer: pauses in ~${n}m. Click to extend, right-click to cancel.` : "Sleep timer (click to start, off by default)";
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: l,
      onContextMenu: d,
      className: "flex items-center justify-center flex-shrink-0 transition-all hover:bg-[var(--bg-hover)] rounded-md tabular-nums",
      style: {
        height: 22,
        minWidth: o ? 48 : 26,
        padding: o ? "0 6px" : "0 4px",
        gap: 4,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 0.3,
        color: o ? "var(--accent-primary)" : "var(--text-disabled)",
        border: `1px solid ${o ? "var(--accent-primary)" : "var(--border-subtle)"}`,
        background: o ? "var(--bg-hover)" : "transparent"
      },
      title: m,
      children: [
        /* @__PURE__ */ t($l, { size: 11 }),
        g && /* @__PURE__ */ t("span", { children: g })
      ]
    }
  );
}
const io = [1, 1.25, 1.5, 2, 0.5, 0.75];
function Bu({
  rate: e,
  setRate: a
}) {
  const r = Math.abs(e - 1) < 1e-3, o = () => {
    const d = io.findIndex((m) => Math.abs(m - e) < 1e-3), g = io[(d + 1) % io.length];
    a(g);
  }, n = (d) => {
    d.preventDefault(), r || a(1);
  }, l = `${Number.isInteger(e) ? e.toString() : e.toString().replace(/\.?0+$/, "")}×`;
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: o,
      onContextMenu: n,
      className: "flex items-center justify-center flex-shrink-0 transition-all hover:bg-[var(--bg-hover)] rounded-md tabular-nums",
      style: {
        height: 22,
        minWidth: 36,
        padding: "0 6px",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 0.3,
        color: r ? "var(--text-disabled)" : "var(--accent-primary)",
        border: `1px solid ${r ? "var(--border-subtle)" : "var(--accent-primary)"}`,
        background: r ? "transparent" : "var(--bg-hover)"
      },
      title: r ? "Playback speed (click to change)" : `Playback speed ${l} — click to cycle, right-click to reset`,
      children: l
    }
  );
}
function Wu({
  volume: e,
  setVolume: a
}) {
  const r = te(e > 0 ? e : 1);
  B(() => {
    e > 0 && (r.current = e);
  }, [e]);
  const o = e === 0;
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: () => {
        a(o ? r.current || 1 : 0);
      },
      className: "flex items-center justify-center flex-shrink-0 transition-all hover:bg-[var(--bg-hover)] rounded-md",
      style: {
        width: 18,
        height: 18,
        color: o ? "var(--accent-primary)" : "var(--text-disabled)"
      },
      title: o ? "Unmute" : "Mute",
      children: o ? /* @__PURE__ */ t(hc, { size: 12 }) : /* @__PURE__ */ t(pc, { size: 12 })
    }
  );
}
const Gi = [
  { scope: "global", combo: "?", action: "Show this help" },
  { scope: "global", combo: "Esc", action: "Close modal / dismiss overlay" },
  { scope: "player", combo: "Space", action: "Play / Pause" },
  { scope: "player", combo: "←", action: "Seek back 5s" },
  { scope: "player", combo: "→", action: "Seek forward 5s" },
  { scope: "player", combo: "↑", action: "Volume up (10%)" },
  { scope: "player", combo: "↓", action: "Volume down (10%)" }
];
function qu({
  open: e,
  onClose: a
}) {
  if (!e) return null;
  const r = [
    { label: "Global", rows: Gi.filter((o) => o.scope === "global") },
    { label: "Player view", rows: Gi.filter((o) => o.scope === "player") }
  ];
  return Pa(
    /* @__PURE__ */ t(
      "div",
      {
        onClick: a,
        className: "fixed inset-0 flex items-center justify-center",
        style: {
          background: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(6px)",
          zIndex: 1e4,
          padding: 24
        },
        children: /* @__PURE__ */ s(
          "div",
          {
            onClick: (o) => o.stopPropagation(),
            className: "rounded-2xl overflow-hidden flex flex-col",
            style: {
              background: "var(--bg-window)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-lg)",
              width: "100%",
              maxWidth: 520,
              maxHeight: "80vh"
            },
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center justify-between px-5",
                  style: {
                    height: 48,
                    borderBottom: "1px solid var(--border-subtle)",
                    background: "var(--bg-titlebar)"
                  },
                  children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ t(xo, { name: "juli3ta:mark", size: 18 }),
                      /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: "Keyboard shortcuts" })
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: a,
                        className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                        style: { width: 28, height: 28, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(we, { size: 14 })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", children: r.map((o) => /* @__PURE__ */ s("div", { className: "mb-4 last:mb-0", children: [
                /* @__PURE__ */ t(
                  "div",
                  {
                    style: {
                      fontSize: 10,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                      color: "var(--text-disabled)",
                      marginBottom: 8
                    },
                    children: o.label
                  }
                ),
                /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: o.rows.map((n) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: "flex items-center justify-between rounded-lg px-3",
                    style: {
                      height: 36,
                      background: "var(--bg-titlebar)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: [
                      /* @__PURE__ */ t("span", { style: { fontSize: 12, color: "var(--text-primary)" }, children: n.action }),
                      /* @__PURE__ */ t(
                        "kbd",
                        {
                          className: "tabular-nums",
                          style: {
                            fontSize: 11,
                            fontWeight: 700,
                            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                            color: "var(--accent-primary)",
                            background: "var(--bg-window)",
                            border: "1px solid var(--accent-primary)",
                            padding: "3px 8px",
                            borderRadius: "var(--radius-md)",
                            minWidth: 28,
                            textAlign: "center"
                          },
                          children: n.combo
                        }
                      )
                    ]
                  },
                  n.combo
                )) })
              ] }, o.label)) }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex-shrink-0 px-5 py-3 flex items-center",
                  style: {
                    background: "var(--bg-titlebar)",
                    borderTop: "1px solid var(--border-subtle)",
                    fontSize: 11,
                    color: "var(--text-disabled)",
                    justifyContent: "space-between"
                  },
                  children: [
                    /* @__PURE__ */ t("span", { children: "Bindings skip when typing in inputs." }),
                    /* @__PURE__ */ s("span", { children: [
                      "Press ",
                      /* @__PURE__ */ t("kbd", { style: { fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", color: "var(--text-secondary)" }, children: "?" }),
                      " again to close."
                    ] })
                  ]
                }
              )
            ]
          }
        )
      }
    ),
    document.body
  );
}
function Ju({ retrying: e, onRetry: a }) {
  const { t: r } = Ht();
  return /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center h-full px-8 text-center", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ t(
      "img",
      {
        src: "/brand/juli3ta/icon-gradient-512.png",
        alt: "JULI3TA",
        width: 96,
        height: 96,
        draggable: !1,
        style: {
          width: 96,
          height: 96,
          borderRadius: "var(--radius-2xl)",
          marginBottom: 20,
          boxShadow: "0 8px 32px rgba(200, 55, 126, 0.4)",
          animation: "pulse 2s infinite",
          userSelect: "none",
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        },
        children: "JULI3TA needs a stage"
      }
    ),
    /* @__PURE__ */ t("p", { style: { fontSize: 13, color: "var(--text-secondary)", marginTop: 12, maxWidth: 380, lineHeight: 1.5 }, children: r("musiccreator.empty.body") }),
    /* @__PURE__ */ s("div", { className: "flex items-center gap-2 mt-6", children: [
      /* @__PURE__ */ s(
        "button",
        {
          onClick: a,
          disabled: e,
          className: "flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-[1.02] disabled:opacity-60",
          style: {
            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            color: "white",
            fontSize: 13,
            fontWeight: 600,
            boxShadow: "0 4px 16px rgba(124, 77, 255, 0.3)"
          },
          children: [
            e ? /* @__PURE__ */ t(re, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(lt, { size: 14 }),
            e ? "Looking for a stage…" : "Try again"
          ]
        }
      ),
      /* @__PURE__ */ t(
        "a",
        {
          href: "https://tytus.traylinx.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
          style: {
            fontSize: 13,
            color: "var(--text-secondary)",
            border: "1px solid var(--border-subtle)"
          },
          children: "Get Tytus →"
        }
      )
    ] }),
    /* @__PURE__ */ s(
      "div",
      {
        className: "mt-6 px-3 py-2 rounded-lg text-left",
        style: {
          fontSize: 11,
          color: "var(--text-disabled)",
          background: "var(--bg-titlebar)",
          border: "1px solid var(--border-subtle)",
          maxWidth: 380
        },
        children: [
          /* @__PURE__ */ t("div", { style: { fontWeight: 600, color: "var(--text-secondary)", marginBottom: 4 }, children: "JULI3TA tries, in order:" }),
          /* @__PURE__ */ t("div", { children: "1. Your remote Tytus pod (best — runs in the cloud)" }),
          /* @__PURE__ */ s("div", { children: [
            "2. Local ",
            /* @__PURE__ */ t("code", { children: "switchAILocal" }),
            " on this machine"
          ] }),
          /* @__PURE__ */ t("div", { children: "3. This screen — when neither is reachable" })
        ]
      }
    )
  ] });
}
function Ca({ label: e, hint: a, counter: r, counterDanger: o, className: n, headerExtra: l, children: d }) {
  return /* @__PURE__ */ s("div", { className: n, children: [
    /* @__PURE__ */ s("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ t(
        "label",
        {
          style: {
            fontSize: 10,
            fontWeight: 600,
            color: "var(--text-disabled)",
            textTransform: "uppercase",
            letterSpacing: 0.5
          },
          children: e
        }
      ),
      (l || r) && /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
        l,
        r && /* @__PURE__ */ t(
          "span",
          {
            style: {
              fontSize: 10,
              color: o ? "#ff5252" : "var(--text-disabled)",
              fontVariantNumeric: "tabular-nums"
            },
            children: r
          }
        )
      ] })
    ] }),
    d,
    a && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 8 }, children: a })
  ] });
}
function Gu({ onPick: e, disabled: a }) {
  const [r, o] = S(!1), [n, l] = S(Pt[0].label), [d, g] = S(""), m = d.trim().toLowerCase(), h = m.length > 0, b = ge(() => {
    if (!h) return [];
    const u = [];
    for (const f of Pt)
      for (const v of f.chips)
        v.toLowerCase().includes(m) && u.push({ family: f.label, chip: v });
    return u;
  }, [h, m]);
  return /* @__PURE__ */ s(
    "div",
    {
      className: "rounded-xl p-3 mb-4",
      style: {
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)"
      },
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-2 mb-3 flex-wrap", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t(
              "label",
              {
                style: {
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: 0.5
                },
                children: "Genre palette"
              }
            ),
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: h ? `${b.length} match${b.length === 1 ? "" : "es"}` : `${tu.length} chips · click to add` })
          ] }),
          /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ s(
              "div",
              {
                className: "flex items-center gap-1 px-2 rounded-md",
                style: {
                  height: 24,
                  background: "var(--bg-window)",
                  border: `1px solid ${h ? "var(--accent-primary)" : "var(--border-subtle)"}`
                },
                children: [
                  /* @__PURE__ */ t(vt, { size: 11, style: { color: "var(--text-disabled)" } }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: d,
                      onChange: (u) => g(u.target.value),
                      placeholder: "Search genres…",
                      className: "rounded-input bg-transparent outline-none",
                      style: { fontSize: 11, color: "var(--text-primary)", width: 140 }
                    }
                  ),
                  d && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => g(""),
                      className: "opacity-60 hover:opacity-100",
                      title: "Clear search",
                      children: /* @__PURE__ */ t(we, { size: 11 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: () => o((u) => !u),
                className: "px-2 rounded-md transition-all hover:bg-[var(--bg-hover)]",
                style: {
                  height: 24,
                  fontSize: 10,
                  color: "var(--text-secondary)",
                  background: "var(--bg-window)",
                  border: "1px solid var(--border-subtle)"
                },
                children: r ? "Collapse" : "Browse all"
              }
            )
          ] })
        ] }),
        h ? b.length === 0 ? /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: b.map(({ family: u, chip: f }) => /* @__PURE__ */ t(
          no,
          {
            chip: f,
            family: u,
            onPick: e,
            disabled: a
          },
          `${u}::${f}`
        )) }) : /* @__PURE__ */ s(he, { children: [
          !r && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: Pt.map((u) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => l(u.label),
              className: "px-2 rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                height: 24,
                fontSize: 10,
                fontWeight: n === u.label ? 600 : 500,
                color: n === u.label ? "var(--text-primary)" : "var(--text-secondary)",
                background: n === u.label ? "var(--bg-selected)" : "var(--bg-window)",
                border: `1px solid ${n === u.label ? "var(--accent-primary)" : "var(--border-subtle)"}`
              },
              children: u.label
            },
            u.label
          )) }),
          r ? /* @__PURE__ */ t(
            "div",
            {
              className: "grid gap-3",
              style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" },
              children: Pt.map((u) => /* @__PURE__ */ s("div", { children: [
                /* @__PURE__ */ t(
                  "div",
                  {
                    style: {
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: 0.5,
                      color: "var(--text-disabled)",
                      textTransform: "uppercase",
                      marginBottom: 4
                    },
                    children: u.label
                  }
                ),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: u.chips.map((f) => /* @__PURE__ */ t(no, { chip: f, onPick: e, disabled: a }, f)) })
              ] }, u.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (Pt.find((u) => u.label === n) ?? Pt[0]).chips.map((u) => /* @__PURE__ */ t(no, { chip: u, onPick: e, disabled: a }, u)) })
        ] })
      ]
    }
  );
}
function no({
  chip: e,
  family: a,
  onPick: r,
  disabled: o
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: () => r(e),
      disabled: o,
      className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] disabled:opacity-40",
      style: {
        fontSize: 10,
        color: "var(--text-secondary)",
        background: "var(--bg-window)",
        border: "1px solid var(--border-subtle)"
      },
      title: a,
      children: [
        /* @__PURE__ */ t(co, { size: 10 }),
        e,
        a && /* @__PURE__ */ s("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function Vu({ specs: e, onChange: a, disabled: r, onOptimize: o, optimizing: n }) {
  const [l, d] = S(!1), g = ge(() => _o(e), [e]), m = g.length > 0, h = M(
    (u, f) => {
      const v = { ...e };
      f === null ? delete v[u] : v[u] = f, a(v);
    },
    [e, a]
  ), b = () => a({});
  return /* @__PURE__ */ s(
    "div",
    {
      className: "rounded-xl",
      style: {
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)"
      },
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center justify-between p-3", children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => d((u) => !u),
              className: "flex items-center gap-2 flex-1 hover:opacity-90 text-left",
              style: { background: "transparent", border: "none", cursor: "pointer" },
              children: [
                /* @__PURE__ */ t(lo, { size: 14, style: { color: "var(--text-secondary)" } }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    style: {
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: 0.5
                    },
                    children: "Track Specs"
                  }
                ),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: m ? "compiled into Style on generate" : "optional structured controls" })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
            o && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: (u) => {
                  u.stopPropagation(), o(), l || d(!0);
                },
                disabled: r || n,
                className: "flex items-center gap-1 px-2 py-1 rounded-md transition-all disabled:opacity-40 hover:scale-105",
                style: {
                  fontSize: 10,
                  fontWeight: 600,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  border: "1px solid transparent"
                },
                title: "Use AI to fill optimal specs from your theme + style + lyrics",
                children: [
                  n ? /* @__PURE__ */ t(re, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(lt, { size: 11 }),
                  n ? "Optimizing…" : "AI Optimize"
                ]
              }
            ),
            m && !l && /* @__PURE__ */ s(
              "span",
              {
                className: "px-2 py-0.5 rounded-full",
                style: {
                  fontSize: 9,
                  background: "var(--accent-primary)",
                  color: "white",
                  fontWeight: 600
                },
                children: [
                  aa(e),
                  " set"
                ]
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => d((u) => !u),
                className: "flex items-center justify-center",
                style: { background: "transparent", border: "none", cursor: "pointer", width: 18, height: 18 },
                children: /* @__PURE__ */ t(
                  tn,
                  {
                    size: 14,
                    style: {
                      color: "var(--text-secondary)",
                      transform: l ? "rotate(180deg)" : "none",
                      transition: "transform 0.15s"
                    }
                  }
                )
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ s(
          "div",
          {
            className: "px-3 pb-3 pt-0",
            style: { borderTop: "1px solid var(--border-subtle)" },
            children: [
              m && /* @__PURE__ */ s(
                "div",
                {
                  className: "rounded-lg p-2 mt-3 mb-3",
                  style: {
                    background: "var(--bg-window)",
                    border: "1px dashed var(--border-subtle)",
                    fontSize: 10,
                    color: "var(--text-secondary)",
                    lineHeight: 1.5
                  },
                  children: [
                    /* @__PURE__ */ t("span", { style: { color: "var(--text-disabled)", fontWeight: 600 }, children: "preview · " }),
                    g
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                /* @__PURE__ */ s(Ea, { label: "Structure", children: [
                  /* @__PURE__ */ t(me, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    Vi,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (u) => h("structure", { ...e.structure, tempo_bpm: u }),
                      min: 40,
                      max: 260,
                      placeholder: "120",
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Tempo class", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.structure?.tempo_class,
                      options: au,
                      onChange: (u) => h("structure", { ...e.structure, tempo_class: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Time signature", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.structure?.time_signature,
                      options: ru,
                      onChange: (u) => h("structure", { ...e.structure, time_signature: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.structure?.rhythm_feel,
                      options: ou,
                      onChange: (u) => h("structure", { ...e.structure, rhythm_feel: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Groove", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.structure?.groove_pattern,
                      options: iu,
                      onChange: (u) => h("structure", { ...e.structure, groove_pattern: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Form", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.structure?.song_form,
                      options: nu,
                      onChange: (u) => h("structure", { ...e.structure, song_form: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Length (s)", children: /* @__PURE__ */ t(
                    Vi,
                    {
                      value: e.structure?.length_seconds,
                      onChange: (u) => h("structure", { ...e.structure, length_seconds: u }),
                      min: 10,
                      max: 600,
                      placeholder: "180",
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Ea, { label: "Key", children: [
                  /* @__PURE__ */ t(me, { label: "Pitch", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.tonal?.key,
                      options: su,
                      onChange: (u) => h("tonal", { ...e.tonal, key: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Mode", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.tonal?.mode,
                      options: lu,
                      onChange: (u) => h("tonal", { ...e.tonal, mode: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Ea, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(me, { label: "Range", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: cu,
                      onChange: (u) => h("dynamics", { ...e.dynamics, overall_dynamic_range: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: du,
                      onChange: (u) => h("dynamics", { ...e.dynamics, crescendo_shape: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Big drops", children: /* @__PURE__ */ t(
                    Ki,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (u) => h("dynamics", { ...e.dynamics, has_big_drops: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Ea, { label: "Context", children: [
                  /* @__PURE__ */ t(me, { label: "Era", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.context?.era_reference,
                      options: pu,
                      onChange: (u) => h("context", { ...e.context, era_reference: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Region", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.context?.cultural_region,
                      options: mu,
                      onChange: (u) => h("context", { ...e.context, cultural_region: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Intensity", children: /* @__PURE__ */ t(
                    Ue,
                    {
                      value: e.mood?.emotional_intensity,
                      options: uu,
                      onChange: (u) => h("mood", { ...e.mood, emotional_intensity: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(me, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    Ki,
                    {
                      value: e.context?.explicit_lyrics,
                      onChange: (u) => h("context", { ...e.context, explicit_lyrics: u }),
                      disabled: r
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "mt-4 flex flex-col gap-3", children: [
                /* @__PURE__ */ t(
                  ta,
                  {
                    label: "Primary instruments",
                    options: gu,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (u) => h("instrumentation", { ...e.instrumentation, primary_instruments: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ s(Ea, { label: "Vocals", children: [
                    /* @__PURE__ */ t(me, { label: "Has vocals", children: /* @__PURE__ */ t(
                      Yu,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (u) => h("instrumentation", { ...e.instrumentation, has_vocals: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(me, { label: "Gender", children: /* @__PURE__ */ t(
                      Ue,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: hu,
                        onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_gender: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(me, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      Ku,
                      {
                        value: e.instrumentation?.language_iso639_1 ?? "",
                        onChange: (u) => h("instrumentation", { ...e.instrumentation, language_iso639_1: u.trim() || void 0 }),
                        placeholder: "en, es, ja…",
                        maxLength: 5,
                        disabled: r
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ t(
                    ta,
                    {
                      label: "Vocal style",
                      options: yu,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_style: u.length ? u : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    ta,
                    {
                      label: "Vocal processing",
                      options: fu,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_processing: u.length ? u : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  ta,
                  {
                    label: "Primary moods",
                    options: bu,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (u) => h("mood", { ...e.mood, primary_moods: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  ta,
                  {
                    label: "Occasion tags",
                    options: vu,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (u) => h("mood", { ...e.mood, occasion_tags: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  ta,
                  {
                    label: "Intended use",
                    options: xu,
                    selected: e.context?.intended_use ?? [],
                    onChange: (u) => h("context", { ...e.context, intended_use: u.length ? u : void 0 }),
                    disabled: r
                  }
                )
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-end mt-3", children: /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: b,
                  disabled: r || !m,
                  className: "px-2 py-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-30",
                  style: { fontSize: 10, color: "var(--text-disabled)", background: "transparent", border: "none" },
                  children: "Clear all specs"
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
function Ea({ label: e, children: a }) {
  return /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          fontSize: 9,
          fontWeight: 600,
          color: "var(--text-disabled)",
          textTransform: "uppercase",
          letterSpacing: 0.5
        },
        children: e
      }
    ),
    a
  ] });
}
function me({ label: e, children: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-secondary)", flexShrink: 0, minWidth: 90 }, children: e }),
    /* @__PURE__ */ t("div", { style: { flex: 1, minWidth: 0 }, children: a })
  ] });
}
function Ue({
  value: e,
  options: a,
  onChange: r,
  disabled: o
}) {
  return /* @__PURE__ */ s(
    "select",
    {
      value: e ?? "",
      onChange: (n) => r(n.target.value === "" ? void 0 : n.target.value),
      disabled: o,
      className: "w-full px-2 py-1 rounded-md focus:outline-none disabled:opacity-50",
      style: {
        fontSize: 10,
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-primary)"
      },
      children: [
        /* @__PURE__ */ t("option", { value: "", children: "—" }),
        a.map((n) => /* @__PURE__ */ t("option", { value: n, children: ae(n) }, n))
      ]
    }
  );
}
function Vi({
  value: e,
  onChange: a,
  min: r,
  max: o,
  placeholder: n,
  disabled: l
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "number",
      value: e ?? "",
      min: r,
      max: o,
      placeholder: n,
      className: "w-full px-2 py-1 rounded-md focus:outline-none disabled:opacity-50",
      onChange: (d) => {
        const g = d.target.value;
        if (g === "") {
          a(void 0);
          return;
        }
        const m = Number(g);
        Number.isFinite(m) && a(m);
      },
      disabled: l,
      style: {
        fontSize: 10,
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-primary)"
      }
    }
  );
}
function Ku({
  value: e,
  onChange: a,
  placeholder: r,
  maxLength: o,
  disabled: n
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "text",
      value: e,
      placeholder: r,
      maxLength: o,
      onChange: (l) => a(l.target.value),
      disabled: n,
      className: "w-full px-2 py-1 rounded-md focus:outline-none disabled:opacity-50",
      style: {
        fontSize: 10,
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-primary)"
      }
    }
  );
}
function Ki({
  value: e,
  onChange: a,
  disabled: r
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "checkbox",
      checked: !!e,
      onChange: (o) => a(o.target.checked ? !0 : void 0),
      disabled: r,
      style: { cursor: r ? "not-allowed" : "pointer" }
    }
  );
}
function Yu({
  value: e,
  onChange: a,
  disabled: r
}) {
  const o = e === void 0 ? !0 : e === !0 ? !1 : void 0;
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: () => a(o),
      disabled: r,
      className: "px-2 py-0.5 rounded-full",
      style: {
        fontSize: 10,
        background: e === !0 ? "var(--accent-primary)" : e === !1 ? "#555" : "var(--bg-titlebar)",
        color: e === void 0 ? "var(--text-secondary)" : "white",
        border: "1px solid var(--border-subtle)",
        cursor: r ? "not-allowed" : "pointer"
      },
      children: e === void 0 ? "auto" : e ? "yes" : "no"
    }
  );
}
function ta({
  label: e,
  options: a,
  selected: r,
  onChange: o,
  disabled: n
}) {
  const l = (d) => {
    r.includes(d) ? o(r.filter((g) => g !== d)) : o([...r, d]);
  };
  return /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ s(
      "div",
      {
        style: {
          fontSize: 9,
          fontWeight: 600,
          color: "var(--text-disabled)",
          textTransform: "uppercase",
          letterSpacing: 0.5
        },
        children: [
          e,
          r.length > 0 && /* @__PURE__ */ s("span", { style: { marginLeft: 6, color: "var(--accent-primary)" }, children: [
            "· ",
            r.length
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: a.map((d) => {
      const g = r.includes(d);
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => l(d),
          disabled: n,
          className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-90 disabled:opacity-40",
          style: {
            fontSize: 10,
            background: g ? "var(--accent-primary)" : "var(--bg-titlebar)",
            color: g ? "white" : "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            cursor: n ? "not-allowed" : "pointer"
          },
          children: [
            g && /* @__PURE__ */ t(oa, { size: 10 }),
            ae(d)
          ]
        },
        d
      );
    }) })
  ] });
}
function aa(e) {
  const { intent: a, ...r } = e;
  let o = 0;
  const n = (l) => {
    if (!(!l || typeof l != "object")) {
      for (const d of Object.values(l))
        if (d != null) {
          if (Array.isArray(d)) {
            d.length && (o += 1);
            continue;
          }
          if (typeof d == "object") {
            n(d);
            continue;
          }
          d === "" || d === !1 || (o += 1);
        }
    }
  };
  return n(r), o;
}
const Xu = "#4ade80", Qu = "#fbbf24", yr = (e) => e.models.music || e.models.cover ? Xu : Qu;
function Zu({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [o, n] = S(!1), l = te(null), d = a.length > 1;
  B(() => {
    if (!o) return;
    const m = (h) => {
      l.current && !l.current.contains(h.target) && n(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [o]);
  const g = (m) => /* @__PURE__ */ t(
    "span",
    {
      className: "rounded-full",
      style: {
        width: 6,
        height: 6,
        background: m,
        flexShrink: 0,
        boxShadow: `0 0 6px ${m}`
      }
    }
  );
  return /* @__PURE__ */ s("div", { ref: l, className: "relative inline-flex", children: [
    /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        onClick: () => d && n((m) => !m),
        className: "inline-flex items-center gap-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
        style: {
          height: 32,
          padding: "0 10px",
          background: "var(--bg-window)",
          border: "1px solid var(--border-subtle)",
          cursor: d ? "pointer" : "default"
        },
        title: `${e.url}${e.models.music ? ` · music: ${e.models.music}` : ""}`,
        children: [
          g(yr(e)),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap" }, children: e.label }),
          d && /* @__PURE__ */ t(
            tn,
            {
              size: 12,
              style: { color: "var(--text-secondary)", transform: o ? "rotate(180deg)" : "none", transition: "transform 0.15s" }
            }
          )
        ]
      }
    ),
    d && o && /* @__PURE__ */ t(
      "div",
      {
        className: "absolute right-0 top-full mt-1 rounded-lg overflow-hidden z-50",
        style: {
          minWidth: 260,
          background: "var(--bg-window)",
          border: "1px solid var(--border-subtle)",
          boxShadow: "var(--shadow-lg)"
        },
        children: a.map((m) => {
          const h = m.podId === e.podId;
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => {
                r(m.podId), n(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: h ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: g(yr(m)) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: m.label }),
                    h && /* @__PURE__ */ t(oa, { size: 11, style: { color: "var(--accent-primary)" } })
                  ] }),
                  /* @__PURE__ */ s("div", { style: { fontSize: 9, color: "var(--text-disabled)", marginTop: 2 }, children: [
                    "music: ",
                    m.models.music ?? "—",
                    " · cover: ",
                    m.models.cover ?? "—"
                  ] })
                ] })
              ]
            },
            m.podId
          );
        })
      }
    )
  ] });
}
const Ee = ({ icon: e, label: a, onClick: r, danger: o }) => /* @__PURE__ */ s(
  "button",
  {
    type: "button",
    onClick: r,
    className: "w-full flex items-center gap-2.5 px-3 h-8 text-sm transition-colors",
    style: {
      color: o ? "var(--accent-error, #ff6b6b)" : "var(--text-primary)",
      borderRadius: "var(--radius-sm)",
      margin: "0 4px",
      width: "calc(100% - 8px)",
      cursor: "pointer",
      background: "transparent"
    },
    onMouseEnter: (n) => {
      n.currentTarget.style.background = "var(--bg-hover)";
    },
    onMouseLeave: (n) => {
      n.currentTarget.style.background = "transparent";
    },
    children: [
      /* @__PURE__ */ t("span", { className: "shrink-0 opacity-80", children: e }),
      /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", style: { fontSize: 12 }, children: a })
    ]
  }
);
function ep({ tracks: e, player: a, onLoad: r, onOpenLyrics: o, onDelete: n, onRename: l }) {
  const { t: d } = Ht();
  return /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: "grid items-center gap-2 px-2 sticky top-0 z-10",
        style: {
          gridTemplateColumns: "20px 1fr 60px 56px 18px",
          height: 22,
          fontSize: 9,
          fontWeight: 600,
          color: "var(--text-disabled)",
          textTransform: "uppercase",
          letterSpacing: 0.5,
          background: "var(--bg-titlebar)",
          borderBottom: "1px solid var(--border-subtle)"
        },
        children: [
          /* @__PURE__ */ t("span", {}),
          /* @__PURE__ */ t("span", { children: "Title" }),
          /* @__PURE__ */ t("span", { style: { textAlign: "right" }, children: "Time" }),
          /* @__PURE__ */ t("span", { style: { textAlign: "right" }, children: "Added" }),
          /* @__PURE__ */ t("span", {})
        ]
      }
    ),
    e.map((g) => /* @__PURE__ */ t(
      tp,
      {
        track: g,
        player: a,
        onLoad: r,
        onOpenLyrics: o,
        onDelete: n,
        onRename: l,
        translate: d
      },
      g.id
    ))
  ] });
}
function tp({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: o,
  onDelete: n,
  onRename: l,
  translate: d
}) {
  const [g, m] = S(!1), [h, b] = S(null), u = a.state.trackId === e.id, f = u && a.state.playing, v = () => {
    if (h === null) return;
    const T = h.trim();
    b(null), T && T !== e.title && l(e.id, T);
  }, w = new Date(e.createdAt).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      draggable: !0,
      onDragStart: (T) => {
        const P = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: _e(e)
        };
        T.dataTransfer.setData(za, JSON.stringify(P)), e.lyricsPreview && T.dataTransfer.setData("text/plain", e.lyricsPreview), T.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => _e(e) ? a.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: u ? "var(--bg-selected)" : g ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: _e(e) ? f ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: u ? "var(--accent-primary)" : "var(--text-disabled)" }, children: _e(e) ? f ? /* @__PURE__ */ t(Tt, { size: 11 }) : g ? /* @__PURE__ */ t(Se, { size: 11 }) : /* @__PURE__ */ t(ja, { size: 11 }) : /* @__PURE__ */ t(pr, { size: 11 }) }),
        /* @__PURE__ */ t("div", { className: "min-w-0", children: h !== null ? (
          // Inline rename editor — Enter commits, Escape cancels, blur
          // also commits so the user can click anywhere else and not
          // lose the edit. autoFocus + onClick.stopPropagation so the
          // row's own click handler (play/toggle) doesn't fire.
          /* @__PURE__ */ t(
            "input",
            {
              autoFocus: !0,
              value: h,
              onChange: (T) => b(T.target.value),
              onClick: (T) => T.stopPropagation(),
              onKeyDown: (T) => {
                T.stopPropagation(), T.key === "Enter" ? v() : T.key === "Escape" && b(null);
              },
              onBlur: v,
              maxLength: 200,
              className: "w-full px-1 py-0 rounded-md focus:outline-none focus:ring-1",
              style: {
                fontSize: 11,
                fontWeight: u ? 600 : 500,
                background: "var(--bg-window)",
                border: "1px solid var(--accent-primary)",
                color: "var(--text-primary)"
              }
            }
          )
        ) : /* @__PURE__ */ s(he, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "truncate",
              style: { fontWeight: u ? 600 : 500 },
              onClick: (T) => T.stopPropagation(),
              onDoubleClick: (T) => {
                T.stopPropagation(), b(e.title);
              },
              title: "Double-click to rename",
              children: e.title || d("musiccreator.track.untitled")
            }
          ),
          e.styleTags && e.styleTags !== "—" && /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 9, color: "var(--text-disabled)" }, children: e.styleTags })
        ] }) }),
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? Oe(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: w }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (T) => {
              T.stopPropagation(), T.shiftKey ? o(e) : T.altKey ? n(e.id) : r(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(fo, { size: 11 })
          }
        )
      ]
    }
  );
}
function ap({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: o,
  onSaveSongToDesktop: n,
  onSaveLyricsToDesktop: l,
  onPlayInPlayer: d,
  onRename: g,
  onEditCover: m,
  onSelect: h,
  selected: b,
  player: u
}) {
  const { t: f } = Ht(), v = te(null), [w, C] = S(!1), [T, P] = S(null), [_, N] = S(null), W = () => {
    if (_ === null) return;
    const F = _.trim();
    N(null), F && F !== e.title && g(e.id, F);
  }, R = u.state.trackId === e.id, k = R && u.state.playing, A = R && u.state.durationMs > 0 ? u.state.positionMs / u.state.durationMs : 0;
  B(() => {
    if (!T) return;
    const F = (ee) => {
      const Ae = ee.target;
      v.current && Ae && v.current.contains(Ae) || Ae && Ae.closest?.("[data-track-menu]") || P(null);
    }, O = () => P(null);
    return setTimeout(() => window.addEventListener("mousedown", F), 0), window.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      window.removeEventListener("mousedown", F), window.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O);
    };
  }, [T]);
  const L = () => {
    const F = v.current?.getBoundingClientRect();
    if (!F) return;
    const O = 220, ee = Math.min(F.right - O, window.innerWidth - O - 8), Ae = F.bottom + 4;
    P({ x: Math.max(8, ee), y: Ae });
  }, z = (F) => () => {
    P(null), F();
  }, G = () => u.toggle(e), Z = () => {
    const F = document.createElement("a");
    F.href = e.audioDataUrl, F.download = `${e.title || "track"}.mp3`, F.click();
  };
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => C(!0),
      onMouseLeave: () => C(!1),
      draggable: !0,
      onDragStart: (F) => {
        const O = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: _e(e)
        };
        F.dataTransfer.setData(za, JSON.stringify(O)), e.lyricsPreview && F.dataTransfer.setData("text/plain", e.lyricsPreview), F.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => h?.(e),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: b ? "var(--bg-selected)" : w ? "var(--bg-hover)" : "transparent",
        border: b ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: h ? "pointer" : "grab"
      },
      title: h ? "Click to open in player · drag to other fields" : "Drag to Desktop, Cover field, Text Editor, or any text field",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          _e(e) ? /* @__PURE__ */ s(
            "button",
            {
              onClick: G,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: k ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(ct, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: vr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: k ? /* @__PURE__ */ t(Tt, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(Se, { size: 14, style: { color: "white", marginLeft: 1 } })
                  }
                )
              ]
            }
          ) : (
            // Lyrics-only — no audio to play. Show the lyric-sheet glyph
            // so the row reads as "this is text, not music" at a glance.
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-md flex-shrink-0",
                style: {
                  width: 36,
                  height: 36,
                  background: "linear-gradient(135deg, rgba(124,77,255,0.35), rgba(56,189,248,0.30))",
                  border: "1px solid var(--border-subtle)"
                },
                title: f("musiccreator.track.lyricsOnly"),
                children: /* @__PURE__ */ t(pr, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
            _ !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: _,
                onChange: (F) => N(F.target.value),
                onClick: (F) => F.stopPropagation(),
                onKeyDown: (F) => {
                  F.stopPropagation(), F.key === "Enter" ? W() : F.key === "Escape" && N(null);
                },
                onBlur: W,
                maxLength: 200,
                className: "w-full px-1.5 py-0.5 rounded-md focus:outline-none focus:ring-1",
                style: {
                  fontSize: 12,
                  fontWeight: 600,
                  background: "var(--bg-window)",
                  border: "1px solid var(--accent-primary)",
                  color: "var(--text-primary)"
                }
              }
            ) : /* @__PURE__ */ t(
              "div",
              {
                className: "truncate",
                style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" },
                onDoubleClick: (F) => {
                  F.stopPropagation(), N(e.title);
                },
                title: "Double-click to rename",
                children: e.title || f("musiccreator.track.untitled")
              }
            ),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.durationMs > 0 ? Oe(e.durationMs) : f("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: v,
              onClick: (F) => {
                F.stopPropagation(), T ? P(null) : L();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: w || T ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(fo, { size: 14 })
            }
          )
        ] }),
        T && Pa(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: T.x,
                top: T.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                _e(e) && /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: f("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(Ee, { icon: /* @__PURE__ */ t(ja, { size: 14 }), label: f("musiccreator.track.playInPlayer"), onClick: z(() => d(e)) }),
                  /* @__PURE__ */ t(Ee, { icon: /* @__PURE__ */ t(ki, { size: 14 }), label: f("musiccreator.track.saveSongToDesktop"), onClick: z(() => n(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(Ee, { icon: /* @__PURE__ */ t(rn, { size: 14 }), label: f("musiccreator.track.download"), onClick: z(Z) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ s(he, { children: [
                  _e(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: f("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(Ee, { icon: /* @__PURE__ */ t(pr, { size: 14 }), label: f("musiccreator.track.openInEditor"), onClick: z(() => o(e)) }),
                  /* @__PURE__ */ t(Ee, { icon: /* @__PURE__ */ t(ki, { size: 14 }), label: f("musiccreator.track.saveLyricsToDesktop"), onClick: z(() => l(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(Ee, { icon: /* @__PURE__ */ t(nn, { size: 14 }), label: "Rename", onClick: z(() => N(e.title)) }),
                /* @__PURE__ */ t(Ee, { icon: /* @__PURE__ */ t(Ra, { size: 14 }), label: "Edit cover art", onClick: z(() => m(e)) }),
                /* @__PURE__ */ t(Ee, { icon: /* @__PURE__ */ t(Dt, { size: 14 }), label: f("musiccreator.track.loadIntoForm"), onClick: z(() => r(e)) }),
                /* @__PURE__ */ t(Ee, { icon: /* @__PURE__ */ t(Ut, { size: 14 }), label: f("musiccreator.track.delete"), onClick: z(() => a(e.id)), danger: !0 })
              ]
            }
          ),
          document.body
        ),
        k && /* @__PURE__ */ t(
          "div",
          {
            className: "mt-1.5 rounded-full overflow-hidden",
            style: { height: 2, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${A * 100}%`,
                  height: "100%",
                  background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                  transition: "width 0.25s linear"
                }
              }
            )
          }
        )
      ]
    }
  );
}
function rp({
  trackIds: e,
  allTracks: a,
  player: r,
  onSelect: o
}) {
  const n = e.map((l) => a.find((d) => d.id === l)).filter((l) => !!l).slice(0, 6);
  return n.length === 0 ? null : /* @__PURE__ */ s("div", { className: "mb-2", children: [
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          fontSize: 9,
          fontWeight: 800,
          color: "var(--text-disabled)",
          textTransform: "uppercase",
          letterSpacing: 0.7,
          padding: "2px 4px 6px"
        },
        children: "Recent"
      }
    ),
    /* @__PURE__ */ t("div", { className: "flex gap-1.5 overflow-x-auto invisible-scrollbar pb-1", children: n.map((l) => {
      const d = r.state.trackId === l.id;
      return /* @__PURE__ */ s(
        "button",
        {
          onClick: () => o(l),
          className: "flex flex-col items-start flex-shrink-0 rounded-lg p-1.5 transition-all hover:bg-[var(--bg-hover)]",
          style: {
            width: 84,
            background: d ? "var(--bg-selected)" : "var(--bg-titlebar)",
            border: d ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)"
          },
          title: l.title || "Untitled",
          children: [
            /* @__PURE__ */ t(ct, { track: l, size: 68, iconSize: 20, radius: 6 }),
            /* @__PURE__ */ t(
              "div",
              {
                className: "truncate w-full text-left",
                style: { fontSize: 10, fontWeight: 700, color: "var(--text-primary)", marginTop: 4 },
                children: l.title || "Untitled"
              }
            )
          ]
        },
        l.id
      );
    }) })
  ] });
}
function op({
  track: e,
  player: a,
  selected: r,
  isFavorite: o,
  onOpenInPlayer: n,
  onRemix: l,
  onToggleFavorite: d,
  onRemove: g,
  selectMode: m = !1,
  checked: h = !1,
  onToggleCheck: b
}) {
  const u = te(null), [f, v] = S(!1), [w, C] = S(null), T = a.state.trackId === e.id, P = T && a.state.loadingTrackId === e.id, _ = T && a.state.playing, N = T && a.state.durationMs > 0 ? a.state.positionMs / a.state.durationMs : 0;
  B(() => {
    if (!w) return;
    const L = (G) => {
      const Z = G.target;
      u.current && Z && u.current.contains(Z) || Z && Z.closest?.("[data-track-menu]") || C(null);
    }, z = () => C(null);
    return setTimeout(() => window.addEventListener("mousedown", L), 0), window.addEventListener("scroll", z, !0), window.addEventListener("resize", z), () => {
      window.removeEventListener("mousedown", L), window.removeEventListener("scroll", z, !0), window.removeEventListener("resize", z);
    };
  }, [w]);
  const W = () => {
    const L = u.current?.getBoundingClientRect();
    if (!L) return;
    const z = 220, G = Math.min(L.right - z, window.innerWidth - z - 8), Z = L.bottom + 4;
    C({ x: G, y: Z });
  }, R = (L) => () => {
    C(null), L();
  }, k = e.externalUrl;
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => v(!0),
      onMouseLeave: () => v(!1),
      onClick: m ? () => {
        b && b(e);
      } : void 0,
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: m && h || r ? "var(--bg-selected)" : f ? "var(--bg-hover)" : "transparent",
        border: m && h || r ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: "pointer"
      },
      title: m ? h ? "Deselect" : "Select" : "Click to open in player",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          m ? /* @__PURE__ */ t(
            "span",
            {
              className: "flex items-center justify-center flex-shrink-0",
              style: {
                width: 36,
                height: 36,
                color: h ? "var(--accent-primary)" : "var(--text-disabled)"
              },
              "aria-hidden": !0,
              children: h ? /* @__PURE__ */ t(cn, { size: 20 }) : /* @__PURE__ */ t(dn, { size: 20 })
            }
          ) : /* @__PURE__ */ s(
            "button",
            {
              onClick: (L) => {
                L.stopPropagation(), a.toggle(e);
              },
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105",
              style: { width: 36, height: 36 },
              title: _ ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(ct, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: vr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: P ? /* @__PURE__ */ t(re, { size: 14, className: "animate-spin", style: { color: "white" } }) : _ ? /* @__PURE__ */ t(Tt, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(Se, { size: 14, style: { color: "white", marginLeft: 1 } })
                  }
                )
              ]
            }
          ),
          m ? /* @__PURE__ */ s("div", { className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "truncate",
                style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" },
                children: e.title || "Untitled"
              }
            ),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.artist || "Unknown",
              e.durationMs > 0 ? ` · ${Oe(e.durationMs)}` : ""
            ] })
          ] }) : /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => n(e),
              className: "flex-1 min-w-0 text-left",
              children: [
                /* @__PURE__ */ t(
                  "div",
                  {
                    className: "truncate",
                    style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" },
                    children: e.title || "Untitled"
                  }
                ),
                /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  e.artist || "Unknown",
                  e.durationMs > 0 ? ` · ${Oe(e.durationMs)}` : ""
                ] })
              ]
            }
          ),
          !m && /* @__PURE__ */ t(
            "button",
            {
              ref: u,
              onClick: (L) => {
                L.stopPropagation(), w ? C(null) : W();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: f || w ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(fo, { size: 14 })
            }
          )
        ] }),
        w && Pa(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: w.x,
                top: w.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                /* @__PURE__ */ t(
                  Ee,
                  {
                    icon: _ ? /* @__PURE__ */ t(Tt, { size: 14 }) : /* @__PURE__ */ t(Se, { size: 14 }),
                    label: _ ? "Pause" : "Play",
                    onClick: R(() => a.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Ee,
                  {
                    icon: /* @__PURE__ */ t(ja, { size: 14 }),
                    label: "Open in player",
                    onClick: R(() => n(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Ee,
                  {
                    icon: /* @__PURE__ */ t(Ot, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: R(() => l(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Ee,
                  {
                    icon: /* @__PURE__ */ t(ur, { size: 14, fill: o ? "currentColor" : "none" }),
                    label: o ? "Remove favorite" : "Add to favorites",
                    onClick: R(() => d(e))
                  }
                ),
                k && /* @__PURE__ */ t(
                  Ee,
                  {
                    icon: /* @__PURE__ */ t(on, { size: 14 }),
                    label: "Open source",
                    onClick: R(() => window.open(k, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Ee,
                  {
                    icon: /* @__PURE__ */ t(Ut, { size: 14 }),
                    label: "Remove from Library",
                    onClick: R(() => g(e)),
                    danger: !0
                  }
                )
              ]
            }
          ),
          document.body
        ),
        _ && /* @__PURE__ */ t(
          "div",
          {
            className: "mt-1.5 rounded-full overflow-hidden",
            style: { height: 2, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${N * 100}%`,
                  height: "100%",
                  background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                  transition: "width 0.25s linear"
                }
              }
            )
          }
        )
      ]
    }
  );
}
function ip({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: o
}) {
  const [n, l] = S(e.coverDataUrl), [d, g] = S(""), [m, h] = S(!1), [b, u] = S(null), f = te(null), v = te(null), w = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), C = dr(w, "", e.styleTags || "");
  B(() => {
    const _ = (N) => {
      N.key === "Escape" && (N.stopPropagation(), o());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [o]), B(() => () => v.current?.abort(), []);
  const T = async () => {
    if (!a) {
      u("Connect to a pod to generate cover art.");
      return;
    }
    if (!a.models.image) {
      u(`This endpoint (${a.label}) has no image model. Pick one in JULI3TA Settings → Cover art.`);
      return;
    }
    if (m) return;
    v.current?.abort(), v.current = new AbortController();
    const _ = v.current.signal;
    h(!0), u(null);
    try {
      const N = (d.trim() || C).slice(0, 1500), W = await yo(a, N, _);
      if (_.aborted) return;
      l(W);
    } catch (N) {
      if (N.name === "AbortError") return;
      u(N.message || "Cover-art generation failed.");
    } finally {
      h(!1);
    }
  }, P = (_) => {
    if (u(null), !_.type.startsWith("image/")) {
      u("That file is not an image.");
      return;
    }
    if (_.size > 4 * 1024 * 1024) {
      u("Image is too big (limit 4 MB).");
      return;
    }
    const N = new FileReader();
    N.onerror = () => u("Could not read that image."), N.onload = () => {
      const W = N.result;
      typeof W == "string" && l(W);
    }, N.readAsDataURL(_);
  };
  return Pa(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.55)" },
        onClick: o,
        children: /* @__PURE__ */ s(
          "div",
          {
            className: "rounded-xl shadow-2xl",
            style: {
              width: 480,
              maxWidth: "calc(100vw - 48px)",
              background: "var(--bg-window)",
              border: "1px solid var(--border-default)"
            },
            onClick: (_) => _.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(Ra, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ s("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: [
                      "Cover Art — ",
                      w || "Untitled"
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: o,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close",
                        children: /* @__PURE__ */ t(we, { size: 14 })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { className: "p-4 flex flex-col gap-3", children: [
                /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ s(
                    "div",
                    {
                      className: "rounded-lg overflow-hidden flex-shrink-0 relative",
                      style: {
                        width: 140,
                        height: 140,
                        background: n ? `url(${n}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)"
                      },
                      children: [
                        !n && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Ra, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
                        m && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(re, { size: 24, className: "animate-spin", style: { color: "white" } }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col gap-2 min-w-0", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: T,
                        disabled: m || !a?.models.image,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 12,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent",
                          cursor: m || !a?.models.image ? "not-allowed" : "pointer"
                        },
                        children: [
                          m ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Xl, { size: 12 }),
                          n ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => f.current?.click(),
                        disabled: m,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(vo, { size: 12 }),
                          "Upload"
                        ]
                      }
                    ),
                    n && /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => l(""),
                        disabled: m,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(we, { size: 12 }),
                          "Clear"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ s("div", { children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }, children: "Prompt" }),
                  /* @__PURE__ */ t(
                    "textarea",
                    {
                      value: d,
                      onChange: (_) => g(_.target.value),
                      placeholder: C,
                      disabled: m,
                      rows: 3,
                      className: "w-full px-3 py-2 rounded-lg resize-none focus:outline-none disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        background: "var(--bg-window)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)"
                      }
                    }
                  )
                ] }),
                b && /* @__PURE__ */ s(
                  "div",
                  {
                    className: "flex items-center gap-2 px-3 py-2 rounded-lg",
                    style: {
                      fontSize: 11,
                      color: "#ff8a80",
                      background: "rgba(255,82,82,0.06)",
                      border: "1px solid rgba(255,82,82,0.18)"
                    },
                    children: [
                      /* @__PURE__ */ t(Ia, { size: 12, style: { flexShrink: 0 } }),
                      b
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3",
                  style: { borderTop: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: o,
                        disabled: m,
                        className: "px-3 py-1.5 rounded-lg ml-auto disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: () => {
                          r(e.id, n), o();
                        },
                        disabled: m,
                        className: "px-3 py-1.5 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 12,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent"
                        },
                        children: "Save"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: f,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (_) => {
                    const N = _.target.files?.[0];
                    N && P(N), _.target.value = "";
                  }
                }
              )
            ]
          }
        )
      }
    ),
    document.body
  );
}
function lr({ label: e, children: a }) {
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          fontSize: 10,
          fontWeight: 600,
          color: "var(--text-disabled)",
          textTransform: "uppercase",
          letterSpacing: 0.5,
          marginBottom: 4
        },
        children: e
      }
    ),
    /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap" }, children: a })
  ] });
}
function np({
  songName: e,
  mode: a,
  theme: r,
  style: o,
  intent: n,
  lyrics: l,
  specs: d,
  coverDataUrl: g,
  endpoint: m,
  busy: h,
  onRegenerate: b,
  onUpload: u,
  onClear: f,
  onClose: v
}) {
  const w = te(null), C = ge(() => _o(d), [d]), T = ge(() => aa(d), [d]);
  B(() => {
    const N = (W) => {
      W.key === "Escape" && (W.stopPropagation(), v());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [v]);
  const P = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", _ = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Pa(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.6)" },
        onClick: v,
        children: /* @__PURE__ */ s(
          "div",
          {
            className: "rounded-xl shadow-2xl flex flex-col",
            style: {
              width: 720,
              maxWidth: "calc(100vw - 48px)",
              maxHeight: "calc(100vh - 48px)",
              background: "var(--bg-window)",
              border: "1px solid var(--border-default)"
            },
            onClick: (N) => N.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3 flex-shrink-0",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(jt, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Song Card" }),
                    /* @__PURE__ */ t(
                      "span",
                      {
                        className: "px-2 py-0.5 rounded-full",
                        style: {
                          fontSize: 10,
                          color: "var(--accent-secondary)",
                          background: "rgba(168, 85, 247, 0.12)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: P
                      }
                    ),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: v,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(we, { size: 14 })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-5 flex gap-5", children: [
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: "rounded-lg overflow-hidden flex-shrink-0 relative",
                    style: {
                      width: 320,
                      height: 320,
                      background: g ? `url(${g}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "var(--shadow-md)"
                    },
                    children: [
                      !g && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Ra, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
                      h && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(re, { size: 28, className: "animate-spin", style: { color: "white" } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
                  /* @__PURE__ */ s("div", { children: [
                    /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }, children: _ }),
                    o.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: o.trim() })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: b,
                        disabled: h || !m?.models.image,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 11,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent",
                          cursor: h || !m?.models.image ? "not-allowed" : "pointer"
                        },
                        title: m?.models.image ? "Generate cover art" : "No image model available",
                        children: [
                          h ? /* @__PURE__ */ t(re, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(lt, { size: 11 }),
                          g ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: () => w.current?.click(),
                        disabled: h,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(vo, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    g && /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: f,
                        disabled: h,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(we, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  r.trim() && /* @__PURE__ */ t(lr, { label: "Theme", children: r.trim() }),
                  n.trim() && /* @__PURE__ */ t(lr, { label: "Lyrics Direction", children: n.trim() }),
                  T > 0 && C && /* @__PURE__ */ t(lr, { label: `Track Specs (${T} set)`, children: C }),
                  l.trim() && /* @__PURE__ */ t(lr, { label: "Lyrics", children: /* @__PURE__ */ t(
                    "div",
                    {
                      className: "rounded-md px-3 py-2 invisible-scrollbar",
                      style: {
                        maxHeight: 220,
                        overflowY: "auto",
                        background: "var(--bg-titlebar)",
                        border: "1px solid var(--border-subtle)",
                        fontSize: 12,
                        lineHeight: 1.5,
                        whiteSpace: "pre-wrap",
                        fontFamily: "inherit"
                      },
                      children: l
                    }
                  ) }),
                  !r.trim() && !n.trim() && T === 0 && !l.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: w,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (N) => {
                    const W = N.target.files?.[0];
                    W && u(W), N.target.value = "";
                  }
                }
              )
            ]
          }
        )
      }
    ),
    document.body
  );
}
function sp(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function lp(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function cp(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function dp(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function up(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: ae(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: ae(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: ae(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: ae(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: ae(e.tonal.mode) }), o.length && a.push({ label: "Tonal", rows: o });
  const n = [];
  if (e.instrumentation?.primary_instruments?.length && n.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(ae).join(", ") }), e.instrumentation?.has_vocals === !1)
    n.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const m = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && m.push(ae(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && m.push(e.instrumentation.vocal_style.map(ae).join("/")), n.push({ label: "Vocals", value: m.length ? m.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && n.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(ae).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && n.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), n.length && a.push({ label: "Instrumentation", rows: n });
  const l = [];
  e.dynamics?.overall_dynamic_range && l.push({ label: "Range", value: ae(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && l.push({ label: "Crescendo", value: ae(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && l.push({ label: "Big drops", value: "Yes" }), l.length && a.push({ label: "Dynamics", rows: l });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: ae(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(ae).join(", ") }), d.length && a.push({ label: "Mood", rows: d });
  const g = [];
  return e.context?.era_reference && g.push({ label: "Era", value: ae(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && g.push({ label: "Region", value: ae(e.context.cultural_region) }), e.context?.intended_use?.length && g.push({ label: "Use", value: e.context.intended_use.map(ae).join("/") }), e.context?.explicit_lyrics && g.push({ label: "Explicit", value: "Yes" }), g.length && a.push({ label: "Context", rows: g }), a;
}
function nt({ label: e, value: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-baseline", style: { fontSize: 13, gap: 14 }, children: [
    /* @__PURE__ */ t("span", { style: {
      color: "var(--text-disabled)",
      flexShrink: 0,
      minWidth: 84,
      fontSize: 12
    }, children: e }),
    /* @__PURE__ */ t("span", { style: { color: "var(--text-primary)", lineHeight: 1.5 }, children: a })
  ] });
}
function It({ label: e, children: a }) {
  return /* @__PURE__ */ s(
    "div",
    {
      className: "rounded-xl px-5 py-5",
      style: {
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)"
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            style: {
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-disabled)",
              textTransform: "uppercase",
              letterSpacing: 0.8,
              marginBottom: 14
            },
            children: e
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex flex-col", style: { gap: 10 }, children: a })
      ]
    }
  );
}
function Un({
  base64: e,
  src: a,
  onPlay: r,
  title: o = "Preview reference audio",
  height: n = 30,
  style: l
}) {
  const d = ge(() => e || Nu(a), [e, a]), g = ge(
    () => d ? Eu(d) : null,
    [d]
  ), [m, h] = S(null), [b, u] = S(null);
  B(() => {
    if (u(null), !d) {
      h(null);
      return;
    }
    let C = null;
    try {
      C = URL.createObjectURL(Cu(d)), h(C);
    } catch {
      h(null);
    }
    return () => {
      C && URL.revokeObjectURL(C);
    };
  }, [d]);
  const f = (C) => {
    Number.isFinite(C.duration) && C.duration > 0.1 && u(C.duration * 1e3);
  }, v = b ?? g;
  return /* @__PURE__ */ s("div", { style: l, children: [
    /* @__PURE__ */ t(
      "audio",
      {
        controls: !0,
        preload: "metadata",
        src: m || a || "",
        onLoadedMetadata: (C) => f(C.currentTarget),
        onDurationChange: (C) => f(C.currentTarget),
        onPlay: r,
        style: { width: "100%", height: n },
        title: o
      }
    ),
    v && v > 0 && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: [
      "Reference preview · ",
      Oe(v)
    ] })
  ] });
}
function pp({
  audioSrc: e,
  sourceLabel: a,
  onUserPlay: r
}) {
  return /* @__PURE__ */ s(
    "div",
    {
      className: "rounded-xl px-5 py-5",
      style: {
        background: "linear-gradient(135deg, rgba(123,67,201,0.10), rgba(200,55,126,0.06))",
        border: "1px solid var(--border-subtle)"
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            style: {
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-disabled)",
              textTransform: "uppercase",
              letterSpacing: 0.8,
              marginBottom: 6
            },
            children: "Reference audio"
          }
        ),
        /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginBottom: 12 }, children: "Compare your restyle with the original you fed in." }),
        /* @__PURE__ */ t(
          "div",
          {
            className: "truncate",
            style: {
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: 10
            },
            title: a,
            children: a
          }
        ),
        /* @__PURE__ */ t(
          Un,
          {
            src: e,
            onPlay: r,
            title: "Preview the exact compact reference sample sent to MiniMax cover mode",
            height: 32
          }
        )
      ]
    }
  );
}
function mp(e, a, r, o) {
  if (!e || a.length === 0) return null;
  if (o === "one") return { kind: "repeating" };
  const n = a.filter(_e);
  if (n.length === 0) return null;
  if (r) return { kind: "random" };
  const l = n.findIndex((d) => d.id === e);
  return l < 0 ? null : l + 1 < n.length ? { kind: "track", track: n[l + 1] } : o === "all" ? { kind: "track", track: n[0] } : { kind: "end" };
}
function hp({ text: e }) {
  const [a, r] = S(!1);
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(e), r(!0), setTimeout(() => r(!1), 1500);
        } catch {
        }
      },
      className: "flex items-center gap-1 rounded-md transition-all hover:bg-[var(--bg-hover)]",
      style: {
        height: 22,
        padding: "0 8px",
        fontSize: 10,
        fontWeight: 700,
        color: a ? "var(--accent-primary)" : "var(--text-secondary)",
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)",
        textTransform: "none",
        letterSpacing: 0
      },
      title: a ? "Copied to clipboard" : "Copy lyrics to clipboard",
      children: [
        a ? /* @__PURE__ */ t(oa, { size: 11 }) : /* @__PURE__ */ t(an, { size: 11 }),
        a ? "Copied" : "Copy"
      ]
    }
  );
}
const gp = /^\s*\[([^\]]+)\]\s*$/;
function yp({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, o) => {
    const n = r.match(gp);
    return n ? /* @__PURE__ */ t(
      "div",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          marginTop: o === 0 ? 0 : 18,
          marginBottom: 6,
          padding: "4px 10px",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: "var(--text-secondary)",
          background: "var(--bg-titlebar)",
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border-subtle)"
        },
        children: n[1].trim()
      },
      o
    ) : r.trim() === "" ? /* @__PURE__ */ t("div", { style: { height: 8 } }, o) : /* @__PURE__ */ t("div", { style: { whiteSpace: "pre-wrap" }, children: r }, o);
  }) });
}
function fp({ track: e, player: a, restyleOriginal: r, onEditInCreator: o, onSwitchToCreator: n, onSearchMusic: l }) {
  const { t: d } = Ht(), g = e?.specsJson ?? "", m = ge(() => {
    if (!g) return {};
    try {
      return JSON.parse(g);
    } catch {
      return {};
    }
  }, [g]), h = (m.intent ?? "").trim(), b = ge(() => up(m), [m]);
  if (!e)
    return /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-8", style: { background: "var(--bg-window)" }, children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: "/brand/juli3ta/icon-gradient-256.png",
          alt: "JULI3TA",
          width: 120,
          height: 120,
          draggable: !1,
          style: {
            width: 120,
            height: 120,
            borderRadius: "var(--radius-2xl)",
            marginBottom: 20,
            boxShadow: "var(--shadow-md)",
            userSelect: "none",
            pointerEvents: "none"
          }
        }
      ),
      /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }, children: d("musiccreator.player.empty.title") }),
      /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", textAlign: "center", maxWidth: 360 }, children: d("musiccreator.player.empty.body") }),
      /* @__PURE__ */ s(
        "button",
        {
          onClick: n,
          className: "mt-5 flex items-center gap-1.5 px-4 rounded-lg transition-all hover:scale-[1.02]",
          style: {
            height: 32,
            fontSize: 12,
            fontWeight: 600,
            color: "white",
            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            boxShadow: "var(--shadow-md)"
          },
          children: [
            /* @__PURE__ */ t(lt, { size: 13 }),
            d("musiccreator.player.empty.openCreator")
          ]
        }
      ),
      l && /* @__PURE__ */ s(
        "button",
        {
          onClick: l,
          className: "mt-2 flex items-center gap-1.5 px-4 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
          style: {
            height: 32,
            fontSize: 12,
            fontWeight: 600,
            color: "var(--text-secondary)",
            background: "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)"
          },
          children: [
            /* @__PURE__ */ t(vt, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const u = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", f = _e(e), v = vr(e), w = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", C = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", T = a.state.trackId === e.id, P = T && a.state.playing, _ = T && a.state.loadingTrackId === e.id, N = e.source === "youtube", W = a.queue.filter((R) => R.id !== e.id && (R.artist || "").trim() && R.artist === e.artist).slice(0, 4);
  return /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden relative", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ s("div", { className: "flex-shrink-0 relative overflow-hidden", children: [
      /* @__PURE__ */ t(
        "div",
        {
          "aria-hidden": !0,
          className: "absolute inset-0",
          style: {
            background: v ? `url(${v}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
            filter: "blur(48px) saturate(1.4)",
            transform: "scale(1.4)",
            opacity: 0.55
          }
        }
      ),
      /* @__PURE__ */ t(
        "div",
        {
          "aria-hidden": !0,
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 60%, var(--bg-window) 100%)"
          }
        }
      ),
      /* @__PURE__ */ s("div", { className: "relative px-7 pt-8 pb-7 flex flex-wrap gap-7 items-end", children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => {
              f && a.toggle(e);
            },
            disabled: !f,
            className: "rounded-lg overflow-hidden flex-shrink-0 relative group disabled:cursor-not-allowed",
            style: {
              width: 220,
              height: 220,
              background: v ? `url(${v}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              cursor: f ? "pointer" : "default"
            },
            title: f ? T && P ? "Pause" : "Play" : "Lyric sheet — no audio",
            children: [
              !v && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(
                "img",
                {
                  src: "/brand/juli3ta/mark-cream-256.png",
                  alt: "",
                  width: 104,
                  height: 104,
                  draggable: !1,
                  style: { width: 104, height: 104, opacity: 0.9, userSelect: "none", pointerEvents: "none" }
                }
              ) }),
              f && /* @__PURE__ */ t(
                "div",
                {
                  className: "absolute inset-0 flex items-center justify-center transition-opacity",
                  style: {
                    background: "rgba(0,0,0,0.35)",
                    opacity: T && P ? 0 : 1
                  },
                  children: /* @__PURE__ */ t(
                    "div",
                    {
                      className: "flex items-center justify-center rounded-full transition-transform group-hover:scale-110",
                      style: {
                        width: 72,
                        height: 72,
                        background: "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
                        boxShadow: "0 12px 32px rgba(200, 55, 126, 0.55)"
                      },
                      children: T && P ? /* @__PURE__ */ t(Tt, { size: 30, style: { color: "white" } }) : _ ? /* @__PURE__ */ t(re, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(Se, { size: 30, style: { color: "white", marginLeft: 3 } })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s("div", { className: "flex-1 min-w-0 flex flex-col", style: { minWidth: 280 }, children: [
          /* @__PURE__ */ s(
            "div",
            {
              style: {
                display: "inline-flex",
                alignItems: "center",
                alignSelf: "flex-start",
                gap: 5,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1.2,
                color: "rgba(255,255,255,0.92)",
                textTransform: "uppercase",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                padding: "4px 10px",
                borderRadius: "var(--radius-full)",
                marginBottom: 12,
                border: "1px solid rgba(255,255,255,0.10)"
              },
              children: [
                f ? /* @__PURE__ */ t(Se, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(Dt, { size: 10 }),
                N ? "YouTube track" : d(f ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
              ]
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "leading-none",
              style: {
                fontSize: u.length > 24 ? 38 : u.length > 14 ? 52 : 64,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.035em",
                wordBreak: "break-word",
                marginBottom: 16,
                textShadow: "0 2px 16px rgba(0,0,0,0.4)"
              },
              children: u
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center flex-wrap",
              style: { fontSize: 13, color: "rgba(255,255,255,0.85)", gap: 8 },
              children: [
                /* @__PURE__ */ t(xo, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: w }),
                e.source === "youtube" && e.album && e.album !== w && /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                C && /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: C })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: Oe(e.durationMs) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "mt-5 flex items-center gap-3 flex-wrap", children: [
            f && /* @__PURE__ */ t(
              "button",
              {
                onClick: () => a.toggle(e),
                className: "flex items-center gap-2 px-6 rounded-full transition-all hover:scale-[1.04] active:scale-[0.98]",
                style: {
                  height: 44,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "white",
                  background: "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
                  boxShadow: "0 10px 28px rgba(200, 55, 126, 0.5), inset 0 1px 0 rgba(255,255,255,0.18)",
                  border: "none",
                  letterSpacing: 0.2
                },
                title: T && P ? "Pause" : "Play",
                children: _ ? /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t(re, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : T && P ? /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t(Tt, { size: 16 }),
                  " ",
                  d("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t(Se, { size: 16, style: { marginLeft: 2 } }),
                  " ",
                  d("musiccreator.player.play")
                ] })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => o(e),
                className: "flex items-center gap-1.5 px-4 rounded-full transition-all",
                style: {
                  height: 38,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.95)",
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.18)"
                },
                title: d("musiccreator.player.remixInRestyle.tip"),
                children: [
                  /* @__PURE__ */ t(Ot, { size: 13 }),
                  d("musiccreator.player.remixInRestyle")
                ]
              }
            ),
            e.audioDataUrl && f && /* @__PURE__ */ s(
              "button",
              {
                onClick: () => {
                  const R = document.createElement("a");
                  R.href = e.audioDataUrl, R.download = `${(e.title || "track").replace(/[\\/:*?"<>|]/g, "_")}.mp3`, document.body.appendChild(R), R.click(), document.body.removeChild(R);
                },
                className: "flex items-center gap-1.5 px-4 rounded-full transition-all",
                style: {
                  height: 38,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.95)",
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.18)"
                },
                title: "Download MP3 to your computer",
                children: [
                  /* @__PURE__ */ t(rn, { size: 13 }),
                  "Download"
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-7", children: /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-6 items-start", children: [
      /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", style: { minWidth: 320, maxWidth: 720 }, children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: "flex items-center justify-between",
            style: {
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-disabled)",
              textTransform: "uppercase",
              letterSpacing: 0.8,
              marginBottom: 16
            },
            children: [
              /* @__PURE__ */ t("span", { children: d("musiccreator.player.lyrics") }),
              e.lyricsPreview && /* @__PURE__ */ t(hp, { text: e.lyricsPreview })
            ]
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(yp, { text: e.lyricsPreview }) : N ? /* @__PURE__ */ s(
          "div",
          {
            className: "rounded-2xl",
            style: {
              background: "var(--bg-titlebar)",
              border: "1px solid var(--border-subtle)",
              padding: "20px",
              color: "var(--text-secondary)"
            },
            children: [
              /* @__PURE__ */ s("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Kl, { size: 18 }) }),
                /* @__PURE__ */ s("div", { children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: "Streamed track" }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: "No lyrics stored. This area is now a live track dashboard instead of an empty lyrics box." })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }, children: [
                /* @__PURE__ */ s("div", { className: "rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, textTransform: "uppercase", letterSpacing: 0.8, color: "var(--text-disabled)", fontWeight: 800 }, children: "Artist" }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.artist || "Unknown artist" })
                ] }),
                /* @__PURE__ */ s("div", { className: "rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, textTransform: "uppercase", letterSpacing: 0.8, color: "var(--text-disabled)", fontWeight: 800 }, children: "Channel / Album" }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.album || e.artist || "Unknown" })
                ] }),
                /* @__PURE__ */ s("div", { className: "rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, textTransform: "uppercase", letterSpacing: 0.8, color: "var(--text-disabled)", fontWeight: 800 }, children: "Duration" }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.durationMs ? Oe(e.durationMs) : "Unknown" })
                ] })
              ] }),
              e.externalUrl && /* @__PURE__ */ s(
                "a",
                {
                  href: e.externalUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "mt-4 inline-flex items-center gap-1.5 rounded-lg px-3",
                  style: { height: 32, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(on, { size: 13 }),
                    " Open source"
                  ]
                }
              )
            ]
          }
        ) : /* @__PURE__ */ s(
          "div",
          {
            className: "rounded-xl flex flex-col items-center justify-center text-center",
            style: {
              background: "var(--bg-titlebar)",
              border: "1px dashed var(--border-subtle)",
              padding: "40px 24px",
              color: "var(--text-disabled)"
            },
            children: [
              /* @__PURE__ */ t(Dt, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: d("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        r && r.trackId === e.id && /* @__PURE__ */ t(
          pp,
          {
            audioSrc: r.audioSrc,
            sourceLabel: r.sourceLabel,
            onUserPlay: () => {
              a.state.playing && a.pause();
            }
          }
        ),
        e.id === a.state.trackId && (() => {
          const R = mp(
            a.state.trackId,
            a.queue,
            a.state.shuffle,
            a.state.repeatMode
          );
          return R ? /* @__PURE__ */ s(It, { label: "Up next", children: [
            R.kind === "track" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ t(ct, { track: R.track, size: 32, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: R.track.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: R.track.artist || (R.track.styleTags && R.track.styleTags !== "—" ? R.track.styleTags : "JULI3TA") })
              ] })
            ] }),
            R.kind === "random" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(bo, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Random next track from your queue." })
            ] }),
            R.kind === "repeating" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(sn, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Repeating this track." })
            ] }),
            R.kind === "end" && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-disabled)" }, children: "End of queue." })
          ] }) : null;
        })(),
        e.theme.trim() && /* @__PURE__ */ t(It, { label: d("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        h && /* @__PURE__ */ t(It, { label: d("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: h }) }),
        b.map((R) => /* @__PURE__ */ t(It, { label: R.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: R.rows.map((k) => /* @__PURE__ */ t(nt, { label: k.label, value: k.value }, `${R.label}-${k.label}`)) }) }, R.label)),
        N && /* @__PURE__ */ t(It, { label: "Artist / Source", children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(dc, { size: 20 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        W.length > 0 && /* @__PURE__ */ t(It, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: W.map((R) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => a.select(R),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(ct, { track: R, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: R.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: R.durationMs ? Oe(R.durationMs) : "Streamed" })
              ] })
            ]
          },
          R.id
        )) }) }),
        /* @__PURE__ */ t(It, { label: d("musiccreator.player.about"), children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(nt, { label: d("musiccreator.player.about.created"), value: dp(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(nt, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(nt, { label: "Channel", value: e.album }),
          f && e.durationMs > 0 && /* @__PURE__ */ t(nt, { label: d("musiccreator.player.about.duration"), value: Oe(e.durationMs) }),
          e.source !== "youtube" && f && e.bitrate > 0 && /* @__PURE__ */ t(nt, { label: d("musiccreator.player.about.bitrate"), value: lp(e.bitrate) }),
          e.source !== "youtube" && f && e.sampleRate > 0 && /* @__PURE__ */ t(nt, { label: d("musiccreator.player.about.sampleRate"), value: cp(e.sampleRate) }),
          e.source !== "youtube" && f && e.sizeBytes > 0 && /* @__PURE__ */ t(nt, { label: d("musiccreator.player.about.size"), value: sp(e.sizeBytes) }),
          C && /* @__PURE__ */ t(nt, { label: d("musiccreator.player.about.style"), value: C }),
          /* @__PURE__ */ t(nt, { label: d("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : d(f ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function bp({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: o,
  searchHistory: n,
  onClearSearchHistory: l,
  resultType: d,
  onResultTypeChange: g,
  results: m,
  busy: h,
  error: b,
  status: u,
  providers: f,
  connectors: v,
  libraryTracks: w,
  playlists: C,
  playlistNameDraft: T,
  playlistBusy: P,
  favoriteIds: _,
  warmupIds: N,
  previewBusyId: W,
  addBusyId: R,
  savedYoutubeIds: k,
  player: A,
  onWarmResult: L,
  onPreview: z,
  onAdd: G,
  onOpenTrack: Z,
  onToggleFavorite: fe,
  onRemoveLibraryTrack: F,
  onPlaylistNameDraftChange: O,
  onCreatePlaylist: ee,
  onAddTrackToPlaylist: Ae,
  onRemoveTrackFromPlaylist: wr,
  onPlayPlaylist: He,
  onDeletePlaylist: $t,
  onConfigureConnector: Ne,
  onDisconnectConnector: Da,
  onClose: le
}) {
  const [ke, ut] = S(null), [_t, Ve] = S({}), [Nt, Qe] = S(!1), [$e, Ze] = S(null), [Le, Me] = S(null), [xt, et] = S(null);
  B(() => {
    Me(null), et(null);
  }, [e]);
  const pt = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(w.map((y) => y.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(w.map((y) => y.album || y.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: C.length },
    { id: "sources", label: "Sources", count: f.length || 4 }
  ], Fe = (y) => {
    const j = A.state.trackId === y.id, q = j && A.state.loadingTrackId === y.id, de = j && A.state.playing;
    return /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(ct, { track: y, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ s("button", { type: "button", onClick: () => Z(y), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: y.title }),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              y.artist || "Unknown",
              y.album ? ` · ${y.album}` : "",
              y.durationMs ? ` · ${Oe(y.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => fe(y),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: _.has(y.id) ? "white" : "var(--text-secondary)",
                background: _.has(y.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: _.has(y.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(ur, { size: 13, fill: _.has(y.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => A.toggle(y),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                q ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : de ? /* @__PURE__ */ t(Tt, { size: 12 }) : /* @__PURE__ */ t(Se, { size: 12 }),
                q ? "Loading" : de ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => F(y),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t(Ut, { size: 13 })
            }
          )
        ]
      },
      y.id
    );
  }, Ie = Array.from(
    w.reduce((y, j) => {
      const q = (j.artist || "Unknown artist").trim();
      return y.set(q, [...y.get(q) ?? [], j]), y;
    }, /* @__PURE__ */ new Map())
  ).sort((y, j) => y[0].localeCompare(j[0])), Ft = Array.from(
    w.reduce((y, j) => {
      const q = (j.album || j.artist || "YouTube collection").trim();
      return y.set(q, [...y.get(q) ?? [], j]), y;
    }, /* @__PURE__ */ new Map())
  ).sort((y, j) => y[0].localeCompare(j[0])), Be = f.length > 0 ? f.map((y) => {
    const j = v.find((Ct) => Ct.provider === y.id), q = j?.connected ?? y.configured, de = j?.oauthRequired ?? y.state === "oauth_required";
    return {
      id: y.id,
      name: y.name,
      state: q ? "Connected" : de ? "OAuth required" : y.state.replace(/_/g, " "),
      body: j?.message ?? y.message,
      action: q ? "Manage" : de ? "Coming soon" : "Configure",
      enabled: q,
      needs: y.needs,
      kind: y.kind,
      connector: j,
      oauthRequired: de,
      configurable: j?.configurable ?? !de
    };
  }) : [
    {
      id: "youtube",
      name: "YouTube",
      state: u?.ready ? "Connected" : "Starting",
      body: "Streaming source. Search, stream resolving and local proxy playback are enabled.",
      action: "Active",
      enabled: !0,
      needs: [],
      kind: "streaming",
      connector: void 0,
      oauthRequired: !1,
      configurable: !1
    },
    {
      id: "spotify",
      name: "Spotify",
      state: "OAuth required",
      body: "Nuclear uses Spotify for rich album/artist metadata. JULI3TA needs a Spotify app client ID before real account linking can be enabled.",
      action: "Configure",
      enabled: !1,
      needs: ["SPOTIFY_OAUTH_PKCE"],
      kind: "metadata",
      connector: v.find((y) => y.provider === "spotify"),
      oauthRequired: !0,
      configurable: !1
    },
    {
      id: "lastfm",
      name: "Last.fm",
      state: v.find((y) => y.provider === "lastfm")?.connected ? "Connected" : "Metadata connector",
      body: "Artist bios, tags and now-playing style metadata. API key required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["apiKey"],
      kind: "metadata",
      connector: v.find((y) => y.provider === "lastfm"),
      oauthRequired: !1,
      configurable: !0
    },
    {
      id: "discogs",
      name: "Discogs",
      state: v.find((y) => y.provider === "discogs")?.connected ? "Connected" : "Metadata connector",
      body: "Release/catalog metadata and album artwork. Token required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["token"],
      kind: "catalog",
      connector: v.find((y) => y.provider === "discogs"),
      oauthRequired: !1,
      configurable: !0
    }
  ];
  return /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ s("div", { className: "flex-shrink-0 px-7 pt-6 pb-4", style: { borderBottom: "1px solid var(--border-subtle)" }, children: [
      /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ t("div", { style: { fontSize: 24, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.03em" }, children: "Music" }),
          /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Discover new music, browse by artist or album, manage playlists and sources." })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          u && /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center gap-2 rounded-full px-3",
              style: {
                height: 30,
                fontSize: 11,
                color: u.ready ? "var(--status-success)" : "var(--text-secondary)",
                background: "var(--bg-titlebar)",
                border: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("span", { style: { width: 7, height: 7, borderRadius: "var(--radius-full)", background: u.ready ? "var(--status-success)" : "var(--accent-secondary)" } }),
                u.ready ? "Music engine ready" : u.installing ? "Installing engine…" : "Music engine offline"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: le,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(we, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: pt.map((y) => /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => a(y.id),
          className: "rounded-lg px-3 transition-all",
          style: {
            height: 30,
            fontSize: 12,
            fontWeight: e === y.id ? 800 : 600,
            color: e === y.id ? "white" : "var(--text-secondary)",
            background: e === y.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)"
          },
          children: [
            y.label,
            typeof y.count == "number" ? ` · ${y.count}` : ""
          ]
        },
        y.id
      )) }),
      e === "search" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-xl px-4", style: { height: 44, background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
        /* @__PURE__ */ t(vt, { size: 16, style: { color: "var(--text-disabled)" } }),
        /* @__PURE__ */ t(
          "input",
          {
            value: r,
            onChange: (y) => o(y.target.value),
            placeholder: "Search music, artists, albums…",
            className: "flex-1 bg-transparent outline-none",
            style: { color: "var(--text-primary)", fontSize: 14, fontWeight: 600 },
            autoFocus: !0
          }
        ),
        h && /* @__PURE__ */ t(re, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(we, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((y) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => g(y),
          className: "rounded-lg px-3 transition-all",
          style: {
            height: 28,
            fontSize: 11,
            fontWeight: d === y ? 900 : 700,
            color: d === y ? "white" : "var(--text-secondary)",
            background: d === y ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)",
            textTransform: "capitalize"
          },
          children: y
        },
        y
      )) }) }),
      e === "search" && r.trim().length < 2 && n.length > 0 && /* @__PURE__ */ s("div", { className: "mt-3 flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.7, fontWeight: 800 }, children: "Recent" }),
        n.map((y) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => o(y),
            className: "rounded-lg px-3 transition-all hover:bg-[var(--bg-hover)]",
            style: {
              height: 26,
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-secondary)",
              background: "var(--bg-titlebar)",
              border: "1px solid var(--border-subtle)"
            },
            title: `Search for "${y}"`,
            children: y
          },
          y
        )),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: l,
            className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
            style: {
              width: 26,
              height: 26,
              color: "var(--text-disabled)",
              background: "var(--bg-titlebar)",
              border: "1px solid var(--border-subtle)"
            },
            title: "Clear recent searches",
            children: /* @__PURE__ */ t(we, { size: 11 })
          }
        )
      ] }),
      b && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: b })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
        r.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        r.trim().length >= 2 && !h && m.length === 0 && !b && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        h && m.length === 0 && Array.from({ length: 5 }).map((y, j) => /* @__PURE__ */ s(
          "div",
          {
            className: "flex items-center gap-3 rounded-xl px-3 py-2",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", opacity: 0.78 },
            children: [
              /* @__PURE__ */ t("div", { className: "animate-pulse", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "var(--bg-hover)" } }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 12, width: `${70 - j * 6}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)" } }),
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 10, width: `${45 - j * 4}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)", marginTop: 8 } })
              ] }),
              /* @__PURE__ */ t(re, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${j}`
        )),
        m.map((y) => {
          const j = jn(y.title, y.channel), q = k.has(y.id), de = W === y.id, Ct = R === y.id, Et = N.has(y.id);
          return /* @__PURE__ */ s(
            "div",
            {
              onMouseEnter: () => L(y),
              onFocus: () => L(y),
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                y.thumbnailUrl || gr(y.id) ? /* @__PURE__ */ t("img", { src: y.thumbnailUrl || gr(y.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(ja, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: j.song }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    j.artist || y.channel || "Music",
                    y.durationMs ? ` · ${Oe(y.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: y.title })
                ] }),
                Et && !de && /* @__PURE__ */ s("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(re, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => z(y),
                    disabled: de,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      de ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Se, { size: 12 }),
                      de ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => G(y),
                    disabled: q || Ct,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: q ? "var(--text-disabled)" : "white", background: q ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      Ct ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : q ? /* @__PURE__ */ t(oa, { size: 12 }) : /* @__PURE__ */ t(co, { size: 12 }),
                      Ct ? "Adding" : q ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            y.id
          );
        })
      ] }),
      e === "artists" && (Le !== null ? (() => {
        const y = Ie.find(([j]) => j === Le)?.[1] ?? [];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Me(null),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  background: "var(--bg-titlebar)",
                  border: "1px solid var(--border-subtle)"
                },
                title: "Back to all artists",
                children: [
                  /* @__PURE__ */ t(xi, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Le }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                y.length,
                " track",
                y.length === 1 ? "" : "s",
                " in your Library"
              ] })
            ] }),
            y[0] && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Z(y[0]),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(Se, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: y.map(Fe) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Ie.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Ie.map(([y, j]) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => Me(y),
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            title: `Open ${y}`,
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: y }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                j.length,
                " track",
                j.length === 1 ? "" : "s"
              ] })
            ]
          },
          y
        ))
      ] })),
      e === "albums" && (xt !== null ? (() => {
        const j = Ft.find(([de]) => de === xt)?.[1] ?? [], q = j[0];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => et(null),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  background: "var(--bg-titlebar)",
                  border: "1px solid var(--border-subtle)"
                },
                title: "Back to all albums",
                children: [
                  /* @__PURE__ */ t(xi, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            q && /* @__PURE__ */ t(ct, { track: q, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: xt }),
              /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                q?.artist || "Mixed artists",
                " · ",
                j.length,
                " track",
                j.length === 1 ? "" : "s"
              ] })
            ] }),
            q && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Z(q),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(Se, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: j.map(Fe) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        Ft.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        Ft.map(([y, j]) => {
          const q = j[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => et(y),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${y}`,
              children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                q && /* @__PURE__ */ t(ct, { track: q, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ s("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: y }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    q?.artist || "Mixed artists",
                    " · ",
                    j.length,
                    " track",
                    j.length === 1 ? "" : "s"
                  ] })
                ] })
              ] })
            },
            y
          );
        })
      ] })),
      e === "playlists" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ t("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Pl, { size: 22 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: T,
              onChange: (y) => O(y.target.value),
              onKeyDown: (y) => {
                y.key === "Enter" && ee();
              },
              placeholder: "New playlist name…",
              className: "rounded-lg bg-transparent outline-none px-3",
              style: { height: 34, minWidth: 180, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)", fontSize: 12, fontWeight: 700 }
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: ee,
              disabled: P,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                P ? /* @__PURE__ */ t(re, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(co, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        C.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : C.map((y) => /* @__PURE__ */ s("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-3 mb-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: y.name }),
              /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 3 }, children: [
                y.items.length,
                " track",
                y.items.length === 1 ? "" : "s"
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => He(y),
                  disabled: y.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(Se, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => $t(y.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(Ut, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: y.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : y.items.map((j) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(ct, { track: j, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ s("button", { type: "button", onClick: () => Z(j), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: j.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: j.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => wr(y.id, j.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(we, { size: 13 })
              }
            )
          ] }, `${y.id}-${j.id}`)) }),
          w.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: w.slice(0, 8).filter((j) => !y.items.some((q) => q.id === j.id)).map((j) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => Ae(y.id, j),
              className: "rounded-full px-3",
              style: { height: 28, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              children: [
                "+ ",
                j.title.slice(0, 28)
              ]
            },
            `${y.id}-add-${j.id}`
          )) })
        ] }, y.id))
      ] }),
      e === "sources" && /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        Be.map((y) => /* @__PURE__ */ s(
          "div",
          {
            className: "rounded-2xl p-4",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ t(
                  "div",
                  {
                    className: "flex items-center justify-center rounded-xl flex-shrink-0",
                    style: { width: 46, height: 46, color: "white", background: y.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: y.name === "Spotify" ? "♬" : y.name === "YouTube" ? /* @__PURE__ */ t(Se, { size: 18 }) : y.kind === "catalog" ? /* @__PURE__ */ t(pl, { size: 18 }) : /* @__PURE__ */ t(jt, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: y.name }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 11, color: y.enabled ? "var(--status-success)" : "var(--text-secondary)", marginTop: 2 }, children: y.state }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.45, marginTop: 10 }, children: y.body })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const j = y.connector?.credentialSpecs ?? y.needs.map((q) => ({ name: q, label: q, secret: !0, required: !0 }));
                      Ve({}), Ze(null), ut({
                        id: y.id,
                        name: y.name,
                        body: y.body,
                        specs: j,
                        oauthRequired: y.oauthRequired,
                        configurable: y.configurable,
                        connected: y.enabled
                      });
                    },
                    className: "rounded-lg px-3 disabled:opacity-50",
                    style: { height: 30, fontSize: 11, fontWeight: 800, color: y.enabled ? "white" : "var(--text-secondary)", background: y.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: y.action
                  }
                ),
                y.connector?.account && /* @__PURE__ */ s("span", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                  "@",
                  y.connector.account
                ] })
              ] })
            ]
          },
          y.name
        )),
        ke && /* @__PURE__ */ s("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                ke.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: ke.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => ut(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(we, { size: 16 }) })
          ] }),
          ke.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ s(he, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: ke.specs.map((y) => /* @__PURE__ */ s("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: y.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: y.label || y.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: _t[y.name] ?? "",
                  type: y.secret ? "password" : "text",
                  onChange: (j) => Ve((q) => ({ ...q, [y.name]: j.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: y.name
                }
              )
            ] }, y.name)) }),
            $e && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: $e }),
            /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  disabled: Nt || !ke.configurable,
                  onClick: () => {
                    Qe(!0), Ze(null), Ne(ke.id, _t).then(() => {
                      Ve({}), ut(null);
                    }).catch((y) => Ze(y.message || "Connector setup failed.")).finally(() => Qe(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Nt ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(oa, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              ke.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Nt,
                  onClick: () => {
                    Qe(!0), Ze(null), Da(ke.id).then(() => ut(null)).catch((y) => Ze(y.message || "Disconnect failed.")).finally(() => Qe(!1));
                  },
                  className: "rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  children: "Disconnect"
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Secrets are posted once to the local tray API, verified live, stored in the OS keychain, and never persisted in browser localStorage." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Aa = {
  theme: !1,
  style: !1,
  lyrics: !1,
  specs: !1,
  cover: !1
}, vp = {
  theme: null,
  style: null,
  lyrics: null,
  specs: null,
  cover: null
}, La = (e) => e?.name === "AbortError";
function xp() {
  const e = _c(), { t: a } = Ht(), r = Cc(), o = Mc(), { state: n, dispatch: l } = mn(), { addNotification: d } = Rc(), g = n.theme.mode, [m, h] = S("compose"), [b, u] = S(!1), [f, v] = S("creator"), [w, C] = S(() => {
    try {
      const i = localStorage.getItem("juli3ta:selectedPlayerTrackId");
      return i && i.length > 0 ? i : null;
    } catch {
      return null;
    }
  });
  B(() => {
    try {
      w ? localStorage.setItem("juli3ta:selectedPlayerTrackId", w) : localStorage.removeItem("juli3ta:selectedPlayerTrackId");
    } catch {
    }
  }, [w]);
  const [T, P] = S(""), [_, N] = S(""), [W, R] = S(null), [k, A] = S(""), [L, z] = S(""), [G, Z] = S(!1), [fe, F] = S(""), [O, ee] = S(""), [Ae, wr] = S(!0), [He, $t] = S(!1), [Ne, Da] = S(null), [le, ke] = S({}), [ut, _t] = S(!1), [Ve, Nt] = S(() => ({ ...Aa })), Qe = te({ ...Aa }), $e = te({ ...vp }), Ze = M((i, c) => {
    Qe.current = { ...Qe.current, [i]: c }, Nt((p) => p[i] === c ? p : { ...p, [i]: c });
  }, []), Le = M((i) => {
    if (Qe.current[i]) return null;
    $e.current[i]?.abort();
    const c = new AbortController();
    return $e.current[i] = c, Ze(i, !0), c;
  }, [Ze]), Me = M((i, c) => {
    $e.current[i] === c && ($e.current[i] = null), Ze(i, !1);
  }, [Ze]), xt = M(() => {
    Object.keys($e.current).forEach((i) => {
      $e.current[i]?.abort(), $e.current[i] = null;
    }), Qe.current = { ...Aa }, Nt({ ...Aa }), $t(!1), _t(!1);
  }, []), [et, pt] = S(null), [Fe, Ie] = S(null), [Ft, Be] = S(null), [y, j] = S(!1), [q, de] = S(null), [Ct, Et] = S(!1), [On, Ua] = S(!1), [kr, Sr] = S([]), Co = te(null), Eo = te(null), [Tr, Ao] = S(!1), [tt, Lo] = S("best"), [Hn, $n] = S(null), [Fn, Oa] = S(!1), [mt, Mo] = S("mic"), [at, _r] = S(!1), [zo, Io] = S(0), [Ro, da] = S(null), Po = te(null), Ha = te([]), Bt = te(null), Nr = te(0), ua = te(null), [Wt, Ke] = S("idle"), [pa, K] = S(null), [Bn, qt] = S(0), [jo, Do] = S(0), [At, We] = S([]), [Jt, ne] = S(null), [Re, Uo] = S(""), [ma, Oo] = S("cards"), [be, Ho] = S(() => {
    try {
      return localStorage.getItem("juli3ta:sidebarTab") === "library" ? "library" : "mywork";
    } catch {
      return "mywork";
    }
  }), [qe, Wn] = S(() => {
    try {
      const i = localStorage.getItem("juli3ta:myWorkChip");
      if (i === "all" || i === "songs" || i === "restyles" || i === "lyrics") return i;
    } catch {
    }
    return "all";
  }), [ht, $o] = S(() => {
    try {
      return localStorage.getItem("juli3ta:libraryChip") === "favorites" ? "favorites" : "all";
    } catch {
      return "all";
    }
  });
  B(() => {
    try {
      localStorage.setItem("juli3ta:sidebarTab", be);
    } catch {
    }
  }, [be]), B(() => {
    try {
      localStorage.setItem("juli3ta:myWorkChip", qe);
    } catch {
    }
  }, [qe]), B(() => {
    try {
      localStorage.setItem("juli3ta:libraryChip", ht);
    } catch {
    }
  }, [ht]);
  const [$a, qn] = S(() => {
    try {
      const i = localStorage.getItem("juli3ta:recentlyPlayedIds"), c = i ? JSON.parse(i) : null;
      return Array.isArray(c) ? c.filter((p) => typeof p == "string").slice(0, 8) : [];
    } catch {
      return [];
    }
  });
  B(() => {
    try {
      localStorage.setItem("juli3ta:recentlyPlayedIds", JSON.stringify($a));
    } catch {
    }
  }, [$a]);
  const [Lt, Cr] = S(!1), [gt, Fa] = S(() => /* @__PURE__ */ new Set()), [Er, Ar] = S(!1), [yt, Pe] = S(!1), [Jn, ha] = S("search"), [Lr, Gn] = S(""), [Vn, Fo] = S(() => {
    try {
      const i = localStorage.getItem("juli3ta:searchHistory"), c = i ? JSON.parse(i) : null;
      return Array.isArray(c) ? c.filter((p) => typeof p == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), Bo = M((i) => {
    const c = i.trim();
    c.length < 2 || Fo((p) => {
      const x = [c, ...p.filter((E) => E.toLowerCase() !== c.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(x));
      } catch {
      }
      return x;
    });
  }, []), [ga, Kn] = S("tracks"), [Yn, Mr] = S([]), [Xn, Ba] = S(!1), [Qn, ft] = S(null), [Zn, Wo] = S(null), [es, qo] = S([]), [ts, Jo] = S([]), [ya, as] = S({}), [rs, Go] = S(() => /* @__PURE__ */ new Set()), [os, Vo] = S(null), [is, Ko] = S(null), [Yo, Xo] = S([]), [ve, zr] = S([]), [Gt, Ir] = S(() => /* @__PURE__ */ new Set()), [fa, Vt] = S([]), [Qo, ns] = S(!1), [Rr, Zo] = S(""), [ss, ei] = S(!1), ti = te(/* @__PURE__ */ new Map()), Pr = te(/* @__PURE__ */ new Map()), Kt = te(ya), jr = te(/* @__PURE__ */ new Map()), [Wa, ba] = S(null), [qa, ai] = S(!1), [Dr, ri] = S(fn), [ls, Ja] = S(!1);
  B(() => {
    Kt.current = ya;
  }, [ya]), B(() => {
    let i = !1;
    return (async () => {
      try {
        await Promise.all([
          Au(),
          bd()
        ]);
      } catch (J) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", J);
      }
      await ad().catch((J) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", J);
      });
      const [c, p, x, E, I, D, U, ue] = await Promise.allSettled([
        Oc(),
        eo(),
        Yc(),
        Li(),
        ed(),
        rd("track"),
        Ta(),
        yd()
      ]);
      if (i) return;
      const ze = c.status === "fulfilled" ? c.value : [], Ce = p.status === "fulfilled" ? p.value.tracks.map((J) => ({ ...J, source: "juli3ta" })) : [];
      p.status === "fulfilled" && (ba(p.value.rootPath), ne((J) => J?.startsWith("Real file library unavailable") ? null : J)), c.status === "fulfilled" ? We(_a(Ce, ze)) : (console.error("[Juli3ta] listTracks failed:", c.reason), We(_a(Ce)), ne("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), p.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", p.reason), ne("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const Je = new Set(Ce.map((J) => J.id)), Ye = new Set(ze.map((J) => J.id)), De = ze.filter((J) => !Je.has(J.id) && eu(J)), Ge = Ce.filter((J) => !Ye.has(J.id));
      (De.length > 0 || Ge.length > 0) && (async () => {
        const J = [];
        for (const ce of De)
          try {
            const Mt = await Di({ ...ce, source: "juli3ta" });
            J.push({ ...ce, ...Mt, source: "juli3ta" });
          } catch (Mt) {
            console.warn("[Juli3ta] host file backfill failed:", ce.id, Mt);
          }
        for (const ce of Ge)
          try {
            await hr({ ...ce, source: "juli3ta" });
          } catch (Mt) {
            console.warn("[Juli3ta] standalone cache backfill failed:", ce.id, Mt);
          }
        !i && (J.length > 0 || Ge.length > 0) && (We((ce) => _a(J, Ge, ce)), eo().then((ce) => ba(ce.rootPath)).catch(() => {
        }));
      })(), x.status === "fulfilled" && ri(x.value), E.status === "fulfilled" && Sr(E.value);
      const Q = {
        version: 1,
        updatedAt: Date.now(),
        tracks: I.status === "fulfilled" ? I.value : [],
        favorites: D.status === "fulfilled" ? D.value : [],
        playlists: U.status === "fulfilled" ? U.value : []
      }, ie = ue.status === "fulfilled" ? ue.value : null, xe = hd(), se = Ei(
        Ei(Q, xe),
        ie
      );
      await cd(se).catch((J) => {
        console.warn("[Juli3ta] music library durable import failed:", J);
      }), !i && (zr(se.tracks), Ir(new Set(se.favorites.filter((J) => J.kind === "track").map((J) => J.entityId))), Vt(se.playlists), ns(!0), Ai(se).catch((J) => {
        console.warn("[Juli3ta] music library durable save failed:", J);
      }));
    })(), () => {
      i = !0;
    };
  }, []), B(() => {
    if (!Qo) return;
    const i = md(ve, Gt, fa), c = window.setTimeout(() => {
      Ai(i).catch((p) => {
        console.warn("[Juli3ta] music library durable save failed:", p);
      });
    }, 450);
    return () => window.clearTimeout(c);
  }, [Qo, ve, Gt, fa]), B(() => {
    if (!Jt?.startsWith("Real file library unavailable")) return;
    let i = !1;
    const c = async () => {
      try {
        const x = await eo();
        if (i) return;
        ba(x.rootPath), We((E) => _a(x.tracks.map((I) => ({ ...I, source: "juli3ta" })), E)), ne((E) => E?.startsWith("Real file library unavailable") ? null : E);
      } catch {
      }
    }, p = window.setInterval(c, 4e3);
    return c(), () => {
      i = !0, window.clearInterval(p);
    };
  }, [Jt]);
  const Ur = M(async (i) => {
    try {
      const c = await Di({ ...i, source: "juli3ta" }), p = { ...i, ...c, source: "juli3ta" };
      return await hr(p), ba(c.folderPath?.split("/").slice(0, -1).join("/") || Wa), ne(null), We((x) => _a([p], x)), !0;
    } catch (c) {
      const p = c.message || "Real file save failed";
      return ne(`Couldn't save "${i.title}" as a real file — ${p}.`), !1;
    }
  }, [Wa]), cs = M(async (i) => {
    ri(i);
    try {
      await Xc(i);
    } catch (c) {
      console.warn("Settings save failed:", c);
    }
  }, []), Ga = ge(
    () => e.state ? Lu(e.state.agents, e.state.included) : [],
    [e.state]
  ), [Va, ds] = S([]), [us, ps] = S(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [ms, oi] = S(!0), X = Va.find((i) => i.podId === us) ?? Va[0] ?? null, Or = M(async () => {
    oi(!0);
    const i = new AbortController(), c = await Ru(Ga, i.signal);
    ds(c), oi(!1);
  }, [Ga]);
  B(() => {
    Ga.length !== 0 && queueMicrotask(() => void Or());
  }, [Ga, Or]);
  const hs = M((i) => {
    ps(i);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", i);
    } catch {
    }
  }, []), va = te(null), xa = te(null), Ka = te(!1);
  B(() => () => {
    va.current?.abort(), Object.keys($e.current).forEach((i) => {
      $e.current[i]?.abort();
    });
  }, []), B(() => {
    if (Wt === "idle") {
      queueMicrotask(() => {
        qt(0), Do(0);
      });
      return;
    }
    const i = Date.now(), c = () => {
      const E = (Date.now() - i) / 1e3, I = Wt === "lyrics" ? Math.min(0.95, E / 5) : Math.min(0.95, 1 - Math.exp(-E / 35));
      qt(I);
    };
    c();
    const p = setInterval(c, 250), x = setInterval(() => Do((E) => E + 1), 4500);
    return () => {
      clearInterval(p), clearInterval(x);
    };
  }, [Wt]);
  const wa = M((i) => {
    if (!i.lyricsPreview) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const p = `${nr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, x = o.findChildByName(c, p);
    return x ? (o.writeFile(x.id, i.lyricsPreview), x.id) : o.createFile(c, p, i.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [o]), ii = M((i) => {
    if (!i.audioDataUrl) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const p = `${nr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, x = o.findChildByName(c, p);
    return x ? x.id : o.createFile(c, p, "", {
      mimeType: "audio/mpeg",
      refTrackId: i.id
    });
  }, [o]), gs = M(async () => {
    if (!X) {
      K(a("musiccreator.error.noPod"));
      return;
    }
    if (Object.values(Qe.current).some(Boolean) || He || ut) {
      K("Finish the active AI helper before generating.");
      return;
    }
    if (m === "restyle" && !Fe) {
      K(y ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (Ka.current) return;
    Ka.current = !0, K(null), xt(), va.current?.abort();
    const i = new AbortController();
    va.current = i;
    try {
      const c = Dr.overridesByEndpoint[X.url] ?? {}, p = {
        ...X,
        models: {
          music: c.music || X.models.music,
          cover: c.cover || X.models.cover,
          lyrics: c.lyrics || X.models.lyrics,
          lyricsBackup: c.lyricsBackup || X.models.lyricsBackup,
          image: c.image || X.models.image,
          allIds: X.models.allIds
        }
      }, x = _o(le);
      let E = _.trim(), I = L.trim(), D = k.trim(), U = null;
      if (!E && !G && !(m === "restyle" && !E)) {
        if (!T.trim() && !(le.intent ?? "").trim()) {
          K(a("musiccreator.error.noInput"));
          return;
        }
        Ke("lyrics");
        const pe = [];
        T.trim() && pe.push(T.trim());
        const qr = (le.intent ?? "").trim();
        qr && pe.push(`User intent (must respect): ${qr}`), x && pe.push(`Musical context: ${x}`), W && pe.push(`Structure: ${W.prompt}`);
        const rl = pe.join(`

`);
        U = await Uu(p, rl, i.signal), E = U.lyrics, I || (I = U.song_title), D || (D = U.style_tags);
      } else !E && G && m !== "restyle" && (E = `[Intro]
[Instrumental]
[Outro]`);
      if (U && (N(U.lyrics), I === "Untitled" && (I = ""), I && !L.trim() && z(I), D && !k.trim() && A(D), U.usedFallback && ne(
        `Primary lyrics model errored — used backup chat model "${p.models.lyricsBackup ?? "unknown"}" instead.`
      )), E.length > ea) {
        K(a("musiccreator.error.lyricsTooLong", { count: E.length, max: ea })), Ke("idle");
        return;
      }
      if (m === "restyle" && E.trim() && E.trim().length > Hi) {
        K(`Restyle lyrics must be ${Hi} characters or fewer for MiniMax cover mode. Shorten them or clear the Lyrics box to let MiniMax extract the original lyrics from the reference audio.`), Ke("idle");
        return;
      }
      if (!I.trim() && m === "restyle" && (I = ku(et), I && !L.trim() && z(I)), I.trim() || (I = wu(E, T, D || k), I && I !== "Untitled" && !L.trim() && z(I)), m === "lyricsOnly") {
        const pe = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (I || a("musiccreator.track.untitled")) + " (lyrics)",
          styleTags: D || "—",
          lyricsPreview: E,
          // store the full text — used by Load
          durationMs: 0,
          bitrate: 0,
          sampleRate: 0,
          sizeBytes: 0,
          createdAt: Date.now(),
          audioDataUrl: "",
          // no audio
          specsJson: aa(le) > 0 ? JSON.stringify(le) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: fe,
          theme: T
        };
        await Ur(pe) && (wa(pe), C(pe.id), Pe(!1), v("player")), Ke("idle"), qt(0);
        return;
      }
      if (m === "restyle" && !Fe) {
        K(y ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), Ke("idle");
        return;
      }
      Ke("song");
      const ze = [
        D,
        x,
        m === "restyle" && G ? "instrumental cover, no lead vocal" : ""
      ].filter((pe) => pe && pe.length > 0).join(". "), Ce = m === "restyle" ? Su(ze) : ze, Je = Ou(
        p,
        {
          lyrics: E,
          prompt: Ce || void 0,
          instrumental: G,
          refAudioBase64: m === "restyle" ? Fe ?? void 0 : void 0
        },
        i.signal
      ), Ye = Ae && !fe && !!p.models.image, De = fe, Ge = Ye ? yo(
        p,
        (O.trim() || dr(I, T, D || k)).slice(0, 1500),
        i.signal
      ).catch((pe) => {
        if (pe.name === "AbortError") throw pe;
        return console.warn("[Juli3ta] Cover-art generation failed:", pe), ne(`Cover-art skipped: ${pe.message}`), De;
      }) : Promise.resolve(De), Q = await Promise.allSettled([Je, Ge]), ie = Q[0], xe = Q[1];
      if (ie.status === "rejected")
        throw i.abort(), ie.reason;
      const se = ie.value, J = xe.status === "fulfilled" ? xe.value : De;
      if (!se?.data?.audio || typeof se.data.audio != "string" || se.data.audio.length < 100) {
        const pe = se?.trace_id ? ` (trace ${se.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${pe}. Try again or pick a different model in Settings.`);
      }
      const ce = `data:audio/mpeg;base64,${se.data.audio}`, Mt = m === "restyle" ? " (restyle)" : "", ot = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (I || a("musiccreator.track.untitled")) + Mt,
        styleTags: D || "—",
        lyricsPreview: E,
        // store the full text — used by Load
        durationMs: se.data.duration_ms ?? 0,
        bitrate: se.data.bitrate ?? 0,
        sampleRate: se.data.sample_rate ?? 0,
        sizeBytes: se.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: ce,
        specsJson: aa(le) > 0 ? JSON.stringify(le) : "",
        coverDataUrl: J,
        theme: T
      };
      F(J), console.info("[Juli3ta] Saving generated song:", { id: ot.id, title: ot.title, durationMs: ot.durationMs, sizeBytes: ot.sizeBytes }), await Ur(ot) && (C(ot.id), Pe(!1), v("player"), ii(ot), wa(ot), m === "restyle" && Fe && $n({
        trackId: ot.id,
        audioSrc: `data:audio/wav;base64,${Fe}`,
        sourceLabel: et || "Original"
      }), d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: ot.title }),
        isRead: !1
      })), Ke("idle"), qt(0);
    } catch (c) {
      if (c.name === "AbortError") {
        Ke("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", c), K(c.message || "Generation failed — check the console for details."), Ke("idle"), qt(0);
    } finally {
      Ka.current = !1;
    }
  }, [
    X,
    T,
    _,
    L,
    k,
    le,
    W,
    G,
    m,
    Fe,
    et,
    y,
    a,
    Ur,
    Dr,
    ii,
    wa,
    d,
    xt,
    Ae,
    fe,
    O,
    He,
    ut
  ]), ys = () => Co.current?.click(), Ya = te(0), wt = M(async (i, c, p = {}) => {
    const x = ++Ya.current, E = () => Ya.current === x;
    K(null), j(!0), de({
      stage: "loading",
      progress: 0.04,
      message: "Preparing compact reference sample…"
    }), Ie(null), pt(c), Be(null);
    const I = typeof i == "string" && /^https?:\/\//i.test(i), D = (U) => {
      E() && de(U);
    };
    try {
      if (tt === "mix") {
        const U = await Jd(i, { onProgress: D });
        if (!E()) return;
        Ie(U.base64);
        const ue = U.sourceDurationSec / 60;
        if (U.segments.length > 1) {
          const ze = U.segments.map((Ce) => `${Math.floor(Ce.startSec / 60)}:${Math.floor(Ce.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          Be(
            `Mixed ${U.segments.length} iconic moments (${U.durationSec.toFixed(0)} s) from ${ue.toFixed(1)} min — at ${ze}`
          );
        } else
          Be(`Using whole clip (${U.durationSec.toFixed(0)} s)`);
      } else {
        if (p.videoId)
          try {
            D({
              stage: "loading",
              progress: 0.12,
              message: "Creating fast server-side reference cut…"
            });
            const Je = await fetch(
              `/api/music/reference-sample?videoId=${encodeURIComponent(p.videoId)}&durationSec=14`
            );
            if (!Je.ok) throw new Error(`reference sample HTTP ${Je.status}`);
            const Ye = await Je.json();
            if (!Ye.base64) throw new Error("reference sample response missing audio");
            if (!E()) return;
            D({
              stage: "done",
              progress: 1,
              message: "Reference sample ready."
            }), Ie(Ye.base64);
            const De = Ye.durationSec ?? 14, Ge = Ye.sourceDurationSec ?? De, Q = Ye.startSec ?? 0, ie = Ge / 60, xe = Q / 60, se = Q < 60 ? `${Q.toFixed(1)} s` : `${Math.floor(xe)}:${Math.floor(Q % 60).toString().padStart(2, "0")}`;
            Be(
              Ge <= De + 0.5 ? `Using whole clip (${De.toFixed(0)} s)` : `Fast-cut compact ${De.toFixed(0)} s starting at ${se} of ${ie.toFixed(1)} min`
            );
            return;
          } catch {
            D({
              stage: "loading",
              progress: 0.08,
              message: "Fast server cut unavailable — using browser fallback…"
            });
          }
        const U = await zn(i, {
          fastRemote: I,
          onProgress: D
        });
        if (!E()) return;
        Ie(U.base64);
        const ue = U.sourceDurationSec / 60, ze = U.startSec / 60, Ce = U.startSec < 60 ? `${U.startSec.toFixed(1)} s` : `${Math.floor(ze)}:${Math.floor(U.startSec % 60).toString().padStart(2, "0")}`;
        Be(
          U.sourceDurationSec <= U.durationSec + 0.5 ? `Using whole clip (${U.durationSec.toFixed(0)} s)` : `Auto-picked compact ${U.durationSec.toFixed(0)} s starting at ${Ce} of ${ue.toFixed(1)} min`
        );
      }
    } catch (U) {
      if (!E()) return;
      K(U.message || "Could not analyze that audio."), pt(null);
    } finally {
      E() && (j(!1), de(null));
    }
  }, [tt]), fs = async () => {
    da(null);
    try {
      let i;
      if (mt === "tab") {
        const E = navigator.mediaDevices;
        if (!E.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        i = await E.getDisplayMedia({ video: !0, audio: !0 });
        for (const I of i.getVideoTracks())
          I.stop(), i.removeTrack(I);
        if (i.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        i = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Bt.current = i;
      const p = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((E) => MediaRecorder.isTypeSupported(E)) || "", x = new MediaRecorder(i, p ? { mimeType: p } : void 0);
      Ha.current = [], x.ondataavailable = (E) => {
        E.data && E.data.size > 0 && Ha.current.push(E.data);
      }, x.onstop = async () => {
        try {
          const E = new Blob(Ha.current, {
            type: Ha.current[0]?.type || p || "audio/webm"
          });
          if (E.size === 0) {
            da("Recording was empty.");
            return;
          }
          const I = new FileReader();
          I.onerror = () => da("Could not read the recording."), I.onload = () => {
            const D = typeof I.result == "string" ? I.result : "", U = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${mt === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - Nr.current,
              mimeType: E.type || p || "audio/webm",
              audioDataUrl: D,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await _n(U), Sr((ue) => [U, ...ue]);
              } catch (ue) {
                console.warn("Recording save failed", ue), da("Could not save the recording. Try again.");
              }
            })(), Oa(!1), wt(E, U.name);
          }, I.readAsDataURL(E);
        } finally {
          Bt.current?.getTracks().forEach((E) => E.stop()), Bt.current = null;
        }
      }, x.start(250), Po.current = x, Nr.current = Date.now(), Io(0), _r(!0), ua.current = setInterval(() => {
        Io(Date.now() - Nr.current);
      }, 100);
    } catch (i) {
      da(i.message || "Could not start recording."), Bt.current?.getTracks().forEach((c) => c.stop()), Bt.current = null, _r(!1);
    }
  }, bs = () => {
    const i = Po.current;
    i && i.state !== "inactive" && i.stop(), ua.current && clearInterval(ua.current), _r(!1);
  };
  B(() => () => {
    Bt.current?.getTracks().forEach((i) => i.stop()), ua.current && clearInterval(ua.current);
  }, []);
  const vs = (i) => {
    const c = i.target.files?.[0];
    if (i.target.value = "", !!c) {
      if (c.size > 50 * 1024 * 1024) {
        K("Reference audio is too big. Max 50 MB.");
        return;
      }
      wt(c, c.name);
    }
  }, xs = (i) => {
    Et(!1), wt(i.audioDataUrl, i.name);
  }, ws = () => {
    Et(!0), Li().then((i) => Sr(i)).catch(() => {
    });
  }, ks = () => Ua(!0), Ss = (i) => {
    if (Ua(!1), !i.audioDataUrl) return;
    const c = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    wt(i.audioDataUrl, `${c}.mp3`);
  }, Ts = () => {
    Ya.current += 1, j(!1), Ie(null), pt(null), Be(null), de(null);
  }, _s = () => {
    va.current?.abort(), Ke("idle");
  }, kt = M(async (i, c, p) => {
    if (!X) throw new Error("No endpoint connected");
    const x = (Q) => {
      const ie = Q, xe = ie.choices?.[0], se = [
        xe?.message?.content,
        xe?.delta?.content,
        xe?.text,
        ie.output_text
      ];
      for (const J of se)
        if (typeof J == "string" && J.trim().length > 0) return J.trim();
      return "";
    }, E = (Q) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(Q), I = /* @__PURE__ */ new Set(), D = [], U = (Q) => {
      Q && !I.has(Q) && (I.add(Q), D.push(Q));
    };
    if (U(X.models.lyricsBackup), X.models.allIds.filter(E).forEach(U), D.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const ue = typeof c == "string" ? c : JSON.stringify(c), ze = p?.temperature ?? 0.5, Ce = Math.max(p?.maxTokens ?? 800, 400), Je = (Q) => {
      const ie = Q.toLowerCase();
      return /^(deepseek\/)?ail-fast$/.test(ie) ? 10 : /^(deepseek\/)?ail-balanced$/.test(ie) ? 20 : /^(ail-compound-minimax|minimax\/ail-compound-minimax)$/.test(ie) ? 30 : /^minimax\/ail-balanced$/.test(ie) ? 40 : /^minimax\/ail-kimi$/.test(ie) ? 50 : /^moonshot\/ail-balanced$/.test(ie) ? 60 : /^moonshot\/ail-compound$/.test(ie) ? 70 : /^(ail-compound|moonshot\/ail-kimi|ail-kimi|ail-kimi-strict|moonshot\/ail-kimi-strict)$/.test(ie) ? 90 : /search/.test(ie) ? 100 : 80;
    }, Ye = (Q) => /^minimax\/ail-compound$/i.test(Q);
    D.sort((Q, ie) => Je(Q) - Je(ie));
    const De = D.filter((Q) => !Ye(Q)), Ge = 45e3;
    return xr(De, async (Q) => {
      const ie = sa(p?.signal, Ge);
      let xe;
      try {
        xe = await na(X, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: Q,
            messages: [
              { role: "system", content: i },
              { role: "user", content: ue }
            ],
            temperature: ze,
            max_tokens: Ce
          }),
          signal: ie.signal
        });
      } catch (ce) {
        throw ce.name === "TimeoutError" ? new Error(`AI assist timed out after ${Ge / 1e3}s.`) : ce;
      } finally {
        ie.dispose();
      }
      if (!xe.ok) {
        const ce = await xe.text().catch(() => "");
        throw xe.status === 400 && /web_search|not support|unsupported|invalid params/i.test(ce) ? new Te(502, ce, `AI assist model ${Q} rejected provider params: ${ce.slice(0, 200)}`) : new Te(xe.status, ce, `AI assist HTTP ${xe.status}: ${ce.slice(0, 200)}`);
      }
      const se = await xe.json(), J = x(se);
      if (!J)
        throw console.warn("[Juli3ta] empty AI assist content from", Q, se), new Te(502, "", `Model "${Q}" returned empty content`);
      return J.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [X]), Ns = M(async () => {
    if (!X) return;
    const i = Le("specs");
    if (i) {
      _t(!0), K(null);
      try {
        const p = await kt(`You are a music-production assistant. Given a theme, style, and (optionally) lyrics, return ONE JSON object that fills in optimal Track Specs for the song.

Output schema (every field optional, OMIT fields you can't infer confidently):
{
  "structure": {
    "tempo_bpm": 40-260,
    "tempo_class": "very_slow"|"slow"|"medium"|"fast"|"very_fast",
    "time_signature": "3/4"|"4/4"|"6/8"|"7/8"|"5/4"|"other",
    "rhythm_feel": "straight"|"swing"|"shuffled"|"syncopated"|"polyrhythmic"|"free",
    "groove_pattern": "four_on_the_floor"|"halftime"|"doubletime"|"broken_beat"|"backbeat"|"free",
    "song_form": "verse_chorus"|"aaba"|"drop_based"|"loop_based"|"through_composed"|"strophic",
    "length_seconds": 10-600
  },
  "tonal": { "key": "C"|"Db"|...|"B", "mode": "major"|"minor"|"dorian"|"mixolydian"|"phrygian"|"lydian"|"locrian" },
  "instrumentation": {
    "primary_instruments": ["drums_acoustic","drum_machine","percussion","bass_electric","bass_synth","bass_upright","electric_guitar","acoustic_guitar","piano","keys_synth","organ","strings","brass","woodwinds","synth_pad","synth_lead","pluck_synth","fx","lead_vocal","choir"],
    "has_vocals": true|false,
    "vocal_style": ["sung"|"rap"|"spoken_word"|"chant"|"choir"|"vocoder"],
    "vocal_gender": "male"|"female"|"mixed"|"other"|"none",
    "vocal_processing": ["dry"|"reverb"|"delay"|"autotune_light"|"autotune_heavy"|"distortion"|"chorus"|"double_tracked"],
    "language_iso639_1": "en"|"es"|...
  },
  "dynamics": {
    "overall_dynamic_range": "narrow"|"medium"|"wide",
    "has_big_drops": true|false,
    "crescendo_shape": "none"|"gradual"|"sudden"
  },
  "mood": {
    "primary_moods": ["happy"|"uplifting"|"dark"|"melancholic"|"dreamy"|"chill"|"epic"|"romantic"|"energetic"|"aggressive"],
    "emotional_intensity": "low"|"medium"|"high",
    "occasion_tags": ["party"|"club"|"study"|"sleep"|"workout"|"background"|"focus"|"film_trailer"|"game"|"kids"|"holiday_christmas"]
  },
  "context": {
    "era_reference": "60s"|"70s"|"80s"|"90s"|"2000s"|"2010s"|"2020s"|"timeless",
    "cultural_region": "global"|"us_uk"|"latin"|"afrobeats_scene"|"kpop_scene"|"jpop_scene"|"caribbean"|"middle_east"|"asia_other"|"europe_other",
    "explicit_lyrics": true|false,
    "intended_use": ["background"|"featured_listen"|"sync_film"|"sync_ad"|"game"|"live_show_intro"]
  }
}

Return ONLY the JSON. No markdown, no explanation, no code fences.`, {
          theme: T || null,
          style: k || null,
          lyrics: _ ? _.slice(0, 1500) : null,
          existing_specs: aa(le) > 0 ? le : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: i.signal
        }), x = Dn(p) ?? p;
        let E;
        try {
          E = JSON.parse(x);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${p.slice(0, 160)}`);
        }
        if (i.signal.aborted) return;
        ke((I) => ({ ...E, intent: I.intent }));
      } catch (c) {
        if (La(c)) return;
        K(c.message || "Optimize failed.");
      } finally {
        Me("specs", i), _t(!1);
      }
    }
  }, [X, T, k, _, le, kt, Le, Me]), ni = M(async () => {
    if (!X) return;
    if (!X.models.image) {
      K(`This endpoint (${X.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (He) return;
    const i = Le("cover");
    if (!i) return;
    const c = i.signal;
    $t(!0), K(null);
    try {
      const p = (O.trim() || dr(L, T, k)).slice(0, 1500), x = await yo(X, p, c);
      if (c.aborted) return;
      F(x), Ne && xa.current?.(Ne, x);
    } catch (p) {
      if (La(p)) return;
      K(p.message || "Cover-art generation failed.");
    } finally {
      Me("cover", i), $t(!1);
    }
  }, [X, O, L, T, k, He, Ne, Le, Me]), si = M((i) => {
    if (!i.type.startsWith("image/")) {
      K("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (i.size > 4 * 1024 * 1024) {
      K("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const c = new FileReader();
    c.onerror = () => K("Could not read that image file."), c.onload = () => {
      const p = c.result;
      typeof p == "string" && p.startsWith("data:image/") && (F(p), Ne && xa.current?.(Ne, p));
    }, c.readAsDataURL(i);
  }, [Ne]), Cs = M(async () => {
    const i = Le("theme");
    if (i) {
      K(null);
      try {
        const p = await kt("You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.", {
          style: k || "pop",
          existing_theme: T || null
        }, { temperature: 0.85, maxTokens: 200, signal: i.signal });
        if (i.signal.aborted) return;
        P(p);
      } catch (c) {
        if (La(c)) return;
        K(c.message || "Theme inspiration failed.");
      } finally {
        Me("theme", i);
      }
    }
  }, [Le, Me, kt, k, T]), Es = M(async () => {
    const i = Le("style");
    if (i) {
      K(null);
      try {
        const p = await kt('You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".', {
          theme: T || "a quiet evening",
          existing_style: k || null
        }, { temperature: 0.7, maxTokens: 120, signal: i.signal });
        if (i.signal.aborted) return;
        A(p.replace(/^["']|["']$/g, ""));
      } catch (c) {
        if (La(c)) return;
        K(c.message || "Style suggestion failed.");
      } finally {
        Me("style", i);
      }
    }
  }, [Le, Me, kt, T, k]), As = M(async () => {
    if (!_.trim()) {
      K("Nothing to polish — write some lyrics first.");
      return;
    }
    const i = Le("lyrics");
    if (i) {
      K(null);
      try {
        const p = await kt("You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.", {
          style: k || null,
          lyrics: _
        }, { temperature: 0.6, maxTokens: 1200, signal: i.signal });
        if (i.signal.aborted) return;
        if (p.length > ea) {
          K(`Polished lyrics exceeded ${ea} chars (${p.length}). Trimming the original first might help.`);
          return;
        }
        N(p);
      } catch (c) {
        if (La(c)) return;
        K(c.message || "Lyrics polish failed.");
      } finally {
        Me("lyrics", i);
      }
    }
  }, [Le, Me, kt, k, _]), Ls = (i) => {
    A((c) => c ? `${c}, ${i.toLowerCase()}` : i.toLowerCase());
  }, Hr = () => {
    const i = [
      "Late-night coding session, neon city skyline, focus and flow.",
      "Sunday-morning coffee, soft rain, lo-fi piano.",
      "Synthwave anthem about shipping on Friday evening.",
      "Jazz ballad about a forgotten train station at 3am.",
      "Acoustic folk song about a long road trip with old friends.",
      "Cinematic orchestral piece for a heroic underdog scene.",
      "Upbeat pop anthem about finishing a hard project."
    ];
    P(i[Math.floor(Math.random() * i.length)]);
  }, Ms = () => {
    const i = w ?? H.state.trackId ?? St[0]?.id ?? ve[0]?.id ?? null, c = i ? je.find((p) => p.id === i) ?? null : null;
    c && Yt(c), v("creator"), Hr();
  }, li = M((i) => {
    We((c) => c.filter((p) => p.id !== i)), $c(i).catch((c) => console.warn("Track cache delete failed:", c)), Qd(i).catch((c) => console.warn("Track file delete failed:", c));
  }, []), zs = M(async () => {
    if (!qa) {
      ai(!0);
      try {
        const i = await Zd();
        ba(i), d({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: i,
          isRead: !1
        });
      } catch (i) {
        ne(`Could not open JULI3TA folder — ${i.message || i}`);
      } finally {
        ai(!1);
      }
    }
  }, [d, qa]), Xa = M(async (i, c) => {
    const p = c.trim().slice(0, 200) || "Untitled";
    We((x) => x.map((E) => E.id === i ? { ...E, title: p } : E));
    try {
      await Fc(i, p), ne(null);
    } catch (x) {
      const E = x.message || "Database write failed";
      ne(`Couldn't rename track — ${E}.`);
    }
  }, []), $r = M(async (i, c) => {
    We((p) => p.map((x) => x.id === i ? { ...x, coverDataUrl: c } : x));
    try {
      await Bc(i, c), ne(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      ne(`Couldn't save cover art — ${x}.`);
    }
  }, []);
  B(() => {
    xa.current = $r;
  }, [$r]);
  const ci = M(async (i, c) => {
    We((p) => p.map((x) => x.id === i ? { ...x, styleTags: c || "—" } : x));
    try {
      await Wc(i, c), ne(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      ne(`Couldn't save style — ${x}.`);
    }
  }, []), di = M(async (i, c) => {
    We((p) => p.map((x) => x.id === i ? { ...x, lyricsPreview: c } : x));
    try {
      await qc(i, c), ne(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      ne(`Couldn't save lyrics — ${x}.`);
    }
  }, []), ui = M(async (i, c) => {
    We((p) => p.map((x) => x.id === i ? { ...x, specsJson: c } : x));
    try {
      await Jc(i, c), ne(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      ne(`Couldn't save specs — ${x}.`);
    }
  }, []), pi = M(async (i, c) => {
    We((p) => p.map((x) => x.id === i ? { ...x, theme: c } : x));
    try {
      await Gc(i, c), ne(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      ne(`Couldn't save theme — ${x}.`);
    }
  }, []);
  B(() => {
    if (!Ne) return;
    const i = Ne, c = setTimeout(() => {
      const p = At.find((ue) => ue.id === i);
      if (!p) return;
      const x = L.trim() || p.title, E = k.trim(), I = T, D = aa(le) > 0 ? JSON.stringify(le) : "", U = p.styleTags === "—" ? "" : p.styleTags || "";
      p.title !== x && Xa(i, x), U !== E && ci(i, E), (p.lyricsPreview || "") !== _ && di(i, _), (p.specsJson || "") !== D && ui(i, D), (p.theme || "") !== I && pi(i, I);
    }, 600);
    return () => clearTimeout(c);
  }, [Ne, L, k, T, _, le, At, Xa, ci, di, ui, pi]);
  const [mi, hi] = S(null), [Is, gi] = S(!1), Yt = M((i) => {
    N(i.lyricsPreview ?? ""), A(i.styleTags && i.styleTags !== "—" ? i.styleTags : ""), P(i.theme ?? "");
    const c = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (z(c), Z(!1), i.specsJson)
      try {
        ke(JSON.parse(i.specsJson));
      } catch {
        ke({});
      }
    else
      ke({});
    F(i.coverDataUrl ?? ""), ee(""), Da(i.id), K(null), R(null), Z(!1), _e(i) ? i.source === "youtube" ? (h("restyle"), Ie(null), pt(`${c}.mp3`), Be("Resolving streamed audio…"), j(!0), (async () => {
      try {
        const x = i.externalId || "";
        if (!x) throw new Error("Missing source identifier.");
        const E = Na(x), I = ya[E], D = I && Date.now() - I.resolvedAt < 5400 * 1e3 ? I.src : (await ji(x)).proxyUrl;
        await wt(D, `${c}.mp3`, { videoId: x });
      } catch (x) {
        j(!1), Ie(null), pt(null), Be(null), K(`Could not load streamed track for restyle: ${x.message || "unknown error"}`);
      }
    })()) : (h("restyle"), wt(i.audioDataUrl, `${c}.mp3`)) : (Ie(null), pt(null), Be(null), h("lyricsOnly"));
  }, [wt, ya]), yi = M((i) => {
    const c = wa(i);
    if (!c) {
      d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "AlertCircle",
        title: a("musiccreator.notify.noLyricsTitle"),
        message: a("musiccreator.notify.noLyricsBody"),
        isRead: !1
      });
      return;
    }
    l({
      type: "OPEN_OR_FOCUS_WINDOW",
      appId: "texteditor",
      args: { editor: { nodeId: c } }
    });
  }, [wa, l, d, a]), Qa = M((i, c, p, x) => {
    const E = o.ensureUserFolder("Desktop");
    if (!E) return;
    const I = o.findChildByName(E, i);
    let D;
    if (I)
      p.refTrackId || o.writeFile(I.id, c), D = I.id;
    else {
      D = o.createFile(E, i, c, p);
      const U = Array.from(x).reduce((Ce, Je) => Ce + Je.charCodeAt(0), 0), ue = U % 6 + 1, ze = Math.floor(U / 6) % 4;
      l({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: i,
          icon: Lc(i),
          fileSystemNodeId: D,
          position: { x: 16 + ue * 80, y: 16 + ze * 90 },
          isSelected: !1
        }
      });
    }
    d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Sparkles",
      title: a("musiccreator.notify.savedToDesktopTitle"),
      message: a("musiccreator.notify.savedToDesktopBody", { name: i }),
      isRead: !1
    });
  }, [o, l, d, a]), Rs = M((i) => {
    if (!i.audioDataUrl) return;
    const c = nr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Qa(`${c}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: i.id }, i.id);
  }, [Qa]), Ps = M((i) => {
    if (!i.lyricsPreview) return;
    const c = nr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Qa(`${c}.lyrics.txt`, i.lyricsPreview, { mimeType: "text/plain" }, `${i.id}-lyrics`);
  }, [Qa]), js = M((i) => {
    Pe(!1), v("player"), C(i.id);
  }, []), bt = M((i) => {
    const c = i.dataTransfer.getData(za);
    if (!c) return null;
    try {
      return JSON.parse(c);
    } catch {
      return null;
    }
  }, []), Ds = M((i) => {
    const c = bt(i);
    if (c && c.lyricsPreview) {
      i.preventDefault(), N(c.lyricsPreview);
      const p = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !L.trim() && p && z(p), !k.trim() && c.styleTags && c.styleTags !== "—" && A(c.styleTags);
      return;
    }
  }, [bt, L, k]), Us = M((i) => {
    const c = bt(i);
    c && c.styleTags && c.styleTags !== "—" && (i.preventDefault(), A((p) => p ? `${p}, ${c.styleTags}` : c.styleTags));
  }, [bt]), Os = M((i) => {
    const c = bt(i);
    if (c) {
      i.preventDefault();
      const p = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), x = c.styleTags && c.styleTags !== "—" ? `Inspired by "${p}" — ${c.styleTags}` : `Inspired by "${p}"`;
      P(x);
    }
  }, [bt]), Hs = M((i) => {
    const c = bt(i);
    c && (i.preventDefault(), z(c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [bt]), Za = (i) => {
    i.dataTransfer.types.includes(za) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
  }, fi = _.length, $s = k.length, Y = Wt !== "idle", er = Object.values(Ve).some(Boolean) || He || ut, Fs = ge(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            va.current?.abort(), xt(), Ya.current += 1, Ka.current = !1, h("compose"), P(""), N(""), A(""), z(""), ke({}), R(null), Z(!1), F(""), ee(""), Ao(!1), Ie(null), pt(null), Be(null), K(null), ne(null), Ke("idle"), qt(0), Nt({ ...Aa }), $t(!1), _t(!1), Da(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => Hr() },
          { id: "mode-restyle", label: "Restyle Mode", onSelect: () => h("restyle") },
          { id: "mode-lyrics", label: "Lyrics Only Mode", onSelect: () => h("lyricsOnly") }
        ]
      },
      {
        id: "view",
        label: "View",
        items: [
          { id: "view-creator", label: "Creator", onSelect: () => v("creator") },
          { id: "view-player", label: "Player", onSelect: () => v("player") },
          { id: "open-help", label: "How it works…", onSelect: () => u(!0) },
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => Ja(!0) }
        ]
      },
      {
        id: "window",
        label: "Window",
        items: [
          { id: "minimize", label: "Minimize Window", actionId: "minimize-window", disabled: !r },
          { id: "close", label: "Close Window", actionId: "close-window", disabled: !r }
        ]
      },
      {
        id: "help",
        label: "Help",
        items: [
          { id: "juli3ta-help", label: "JULI3TA Help…", onSelect: () => u(!0) },
          { id: "tytus-help", label: "Tytus Help", actionId: "open-help" },
          { id: "juli3ta-about", label: `About JULI3TA v${go}`, onSelect: () => Ja(!0) }
        ]
      }
    ]
  }), [r, xt]);
  Nc(r?.id ?? null, Fs);
  const rt = ge(
    () => At.filter(Pn),
    [At]
  ), St = ge(() => {
    let i = rt;
    qe === "songs" ? i = i.filter((p) => _e(p) && !/\(restyle\)\s*$/i.test(p.title) && !/\(lyrics\)\s*$/i.test(p.title)) : qe === "restyles" ? i = i.filter((p) => /\(restyle\)\s*$/i.test(p.title)) : qe === "lyrics" && (i = i.filter((p) => !_e(p) || /\(lyrics\)\s*$/i.test(p.title)));
    const c = Re.trim().toLowerCase();
    return c ? i.filter((p) => p.title.toLowerCase().includes(c) || p.styleTags.toLowerCase().includes(c)) : i;
  }, [rt, Re, qe]), Xt = ge(() => {
    let i = ve;
    ht === "favorites" && (i = i.filter((p) => Gt.has(p.id)));
    const c = Re.trim().toLowerCase();
    return c ? i.filter((p) => p.title.toLowerCase().includes(c) || (p.artist || "").toLowerCase().includes(c) || (p.album || "").toLowerCase().includes(c)) : i;
  }, [ve, ht, Re, Gt]), Qt = M((i, c) => {
    const p = Na(i), x = Kt.current[p];
    if (!c?.force && x && Date.now() - x.resolvedAt < 5400 * 1e3)
      return Promise.resolve(x.src);
    const E = jr.current.get(i);
    if (!c?.force && E) return E;
    Go((D) => new Set(D).add(i));
    const I = ji(i).then((D) => {
      const U = { src: D.proxyUrl, resolvedAt: Date.now() };
      return Kt.current = { ...Kt.current, [p]: U }, as((ue) => ({ ...ue, [p]: U })), D.proxyUrl;
    }).finally(() => {
      jr.current.delete(i), Go((D) => {
        const U = new Set(D);
        return U.delete(i), U;
      });
    });
    return jr.current.set(i, I), I;
  }, []), ka = M((i) => {
    i.slice(0, 3).forEach((c) => {
      Qt(c.id).catch(() => {
      });
    });
  }, [Qt]);
  B(() => {
    if (!yt) return;
    const i = new AbortController();
    return Promise.allSettled([
      Gd(i.signal),
      Ri(i.signal),
      Pi(i.signal)
    ]).then(([c, p, x]) => {
      c.status === "fulfilled" ? Wo(c.value) : Wo(null), p.status === "fulfilled" && qo(p.value), x.status === "fulfilled" && Jo(x.value);
    }), () => i.abort();
  }, [yt]), B(() => {
    if (!yt) return;
    const i = (c) => {
      c.key === "Escape" && Pe(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [yt]), B(() => {
    if (!yt) return;
    const i = Lr.trim();
    if (i.length < 2) {
      const I = window.setTimeout(() => {
        Mr([]), ft(null), Ba(!1);
      }, 0);
      return () => window.clearTimeout(I);
    }
    const c = `${ga}:${i.toLowerCase()}`, p = ti.current.get(c);
    if (p) {
      Mr(p), Ba(!1), ft(null), ka(p);
      return;
    }
    const x = new AbortController(), E = setTimeout(() => {
      Ba(!0), ft(null);
      let I = Pr.current.get(c);
      I || (I = Xd(i, ga, 20, x.signal).then((D) => ga === "playlists" ? D.results.playlists : D.results.tracks).catch(() => Yd(i, 20, x.signal)).finally(() => {
        Pr.current.delete(c);
      }), Pr.current.set(c, I)), I.then((D) => {
        ti.current.set(c, D), Mr(D), ka(D), D.length > 0 && Bo(i);
      }).catch((D) => {
        x.signal.aborted || ft(D.message || "Music search failed.");
      }).finally(() => {
        x.signal.aborted || Ba(!1);
      });
    }, 120);
    return () => {
      x.abort(), clearTimeout(E);
    };
  }, [Lr, ga, yt, ka, Bo]);
  const tr = M(async () => {
    const [i, c] = await Promise.allSettled([
      Ri(),
      Pi()
    ]);
    i.status === "fulfilled" && qo(i.value), c.status === "fulfilled" && Jo(c.value);
  }, []), Bs = M(async (i, c) => {
    await Vd(i, c), await tr(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${i} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, tr]), Ws = M(async (i) => {
    await Kd(i), await tr(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${i} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [d, tr]), qs = ge(
    () => new Set(ve.filter((i) => i.externalId).map((i) => i.externalId)),
    [ve]
  ), ar = M((i, c) => {
    const p = jn(i.title, i.channel);
    return {
      id: c?.id ?? Na(i.id),
      title: p.song || i.title || "Untitled",
      styleTags: "",
      lyricsPreview: "",
      durationMs: i.durationMs ?? 0,
      bitrate: 0,
      sampleRate: 0,
      sizeBytes: 0,
      createdAt: Date.now(),
      audioDataUrl: c?.audioDataUrl ?? "",
      specsJson: "",
      coverDataUrl: "",
      theme: "",
      source: "youtube",
      audioKind: "remote_stream",
      externalId: i.id,
      externalUrl: `https://www.youtube.com/watch?v=${i.id}`,
      thumbnailUrl: i.thumbnailUrl || gr(i.id),
      artist: p.artist || i.channel || "Unknown",
      album: i.channel ?? ""
    };
  }, []), Js = M(async (i, c) => {
    if (i.audioDataUrl && !c?.force) return i.audioDataUrl;
    if (!No(i) || !i.externalId) return i.audioDataUrl || null;
    const p = Na(i.externalId), x = Kt.current[p] ?? Kt.current[i.id];
    return !c?.force && x && Date.now() - x.resolvedAt < 5400 * 1e3 ? x.src : Qt(i.externalId, c);
  }, [Qt]), je = ge(
    () => [...Yo, ...ve, ...St],
    [Yo, ve, St]
  );
  B(() => {
    if (!w || je.length === 0) return;
    je.some((c) => c.id === w) || C(null);
  }, [w, je]);
  const bi = te(null), H = Hu(je, bi, Js);
  B(() => {
    const i = H.state.trackId;
    i && qn((c) => c[0] === i ? c : [i, ...c.filter((x) => x !== i)].slice(0, 8));
  }, [H.state.trackId]), B(() => {
    if (typeof navigator > "u" || !("mediaSession" in navigator)) return;
    const i = navigator.mediaSession, c = H.state.trackId, p = c ? je.find((x) => x.id === c) : null;
    if (!p) {
      i.metadata = null, i.playbackState = "none";
      return;
    }
    return i.metadata = new MediaMetadata({
      title: p.title || "Untitled",
      artist: p.artist || "JULI3TA",
      album: p.album || (p.styleTags && p.styleTags !== "—" ? p.styleTags : ""),
      artwork: p.coverDataUrl ? [{ src: p.coverDataUrl, sizes: "512x512", type: p.coverDataUrl.startsWith("data:image/png") ? "image/png" : "image/jpeg" }] : p.thumbnailUrl ? [{ src: p.thumbnailUrl, sizes: "256x256", type: "image/jpeg" }] : []
    }), i.playbackState = H.state.playing ? "playing" : "paused", i.setActionHandler("play", () => H.toggle(p)), i.setActionHandler("pause", () => H.pause()), i.setActionHandler("previoustrack", () => H.prev()), i.setActionHandler("nexttrack", () => H.next()), i.setActionHandler("seekbackward", (x) => {
      H.seek(Math.max(0, H.state.positionMs - (x.seekOffset ?? 10) * 1e3));
    }), i.setActionHandler("seekforward", (x) => {
      H.seek(Math.min(H.state.durationMs || 0, H.state.positionMs + (x.seekOffset ?? 10) * 1e3));
    }), () => {
      i.setActionHandler("play", null), i.setActionHandler("pause", null), i.setActionHandler("previoustrack", null), i.setActionHandler("nexttrack", null), i.setActionHandler("seekbackward", null), i.setActionHandler("seekforward", null);
    };
  }, [H, H.state.trackId, H.state.playing, je]), B(() => {
    const i = H.state.trackId;
    if (!i) return;
    const c = je.find((I) => I.id === i);
    if (!c) return;
    const p = H.state.playing ? "▶" : "⏸", x = (c.title || "Untitled").replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), E = document.title;
    return document.title = `${p} ${x} — JULI3TA`, () => {
      document.title = E;
    };
  }, [H.state.trackId, H.state.playing, je]), B(() => {
    if (f !== "player") return;
    const i = (c) => {
      const p = c.target;
      if (p) {
        const I = p.tagName;
        if (I === "INPUT" || I === "TEXTAREA" || I === "SELECT" || p.isContentEditable) return;
      }
      const x = H.state.trackId;
      if (!x) return;
      const E = je.find((I) => I.id === x);
      if (E)
        switch (c.key) {
          case " ":
            c.preventDefault(), H.toggle(E);
            break;
          case "ArrowLeft":
            c.preventDefault(), H.seek(Math.max(0, H.state.positionMs - 5e3));
            break;
          case "ArrowRight":
            c.preventDefault(), H.seek(Math.min(H.state.durationMs || 0, H.state.positionMs + 5e3));
            break;
          case "ArrowUp":
            c.preventDefault(), H.setVolume(Math.min(1, H.state.volume + 0.1));
            break;
          case "ArrowDown":
            c.preventDefault(), H.setVolume(Math.max(0, H.state.volume - 0.1));
            break;
        }
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [f, H, je]), B(() => {
    const i = (c) => {
      const p = c.target;
      if (p) {
        const x = p.tagName;
        if (x === "INPUT" || x === "TEXTAREA" || x === "SELECT" || p.isContentEditable) return;
      }
      c.key === "?" || c.key === "/" && c.shiftKey ? (c.preventDefault(), Ar((x) => !x)) : c.key === "Escape" && Er && Ar(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [Er]);
  const Gs = M((i) => {
    const c = i.items.find(_e);
    c && (Xo((p) => [
      ...i.items.filter((x) => !p.some((E) => E.id === x.id)),
      ...p
    ]), C(c.id), Pe(!1), v("player"), H.play(c));
  }, [H]), Vs = M(async (i) => {
    await nd(i), Vt(await Ta());
  }, []), Ks = M((i) => {
    ft(null), Vo(i.id);
    const c = Na(i.id), p = ar(i, { id: c });
    Xo((x) => [p, ...x.filter((E) => E.id !== p.id)]), C(p.id), v("player"), H.play(p), Vo(null);
  }, [H, ar]), Ys = M((i) => {
    Qt(i.id).catch(() => {
    });
  }, [Qt]), Xs = M(async (i) => {
    Ko(i.id);
    const c = ar(i);
    try {
      await wn(c), zr((p) => [c, ...p.filter((x) => x.id !== c.id)]), C(c.id), Ho("library"), $o("all"), ka([i]), fa.length > 0;
    } catch (p) {
      ft(p.message || "Could not save track.");
    } finally {
      Ko(null);
    }
  }, [ar, ka, fa.length]), Fr = M((i) => {
    Ir((c) => {
      const p = new Set(c);
      return p.has(i.id) ? p.delete(i.id) : p.add(i.id), p;
    }), od({
      kind: "track",
      entityId: i.id,
      provider: i.source ?? "youtube",
      title: i.title
    }).catch((c) => console.warn("Favorite toggle failed:", c));
  }, []), Qs = M(async () => {
    const i = Rr.trim() || "New Playlist";
    ei(!0);
    try {
      const c = await id(i);
      Vt((p) => [c, ...p]), Zo("");
    } catch (c) {
      ft(c.message || "Could not create playlist.");
    } finally {
      ei(!1);
    }
  }, [Rr]), Zs = M(async (i, c) => {
    try {
      await sd(i, c);
      const p = await Ta();
      Vt(p);
    } catch (p) {
      ft(p.message || "Could not add to playlist.");
    }
  }, []), el = M(async (i, c) => {
    try {
      await ld(i, c);
      const p = await Ta();
      Vt(p);
    } catch (p) {
      ft(p.message || "Could not remove from playlist.");
    }
  }, []), Br = M((i) => {
    zr((c) => c.filter((p) => p.id !== i.id)), Ir((c) => {
      const p = new Set(c);
      return p.delete(i.id), p;
    }), td(i.id).then(() => Ta().then(Vt)).catch((c) => console.warn("Library track delete failed:", c));
  }, []), tl = M((i) => {
    Fa((c) => {
      const p = new Set(c);
      return p.has(i.id) ? p.delete(i.id) : p.add(i.id), p;
    });
  }, []), Sa = M(() => {
    Cr(!1), Fa(/* @__PURE__ */ new Set());
  }, []);
  B(() => {
    if (!Lt) return;
    const i = (c) => {
      c.key === "Escape" && Sa();
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [Lt, Sa]), B(() => {
    be !== "library" && (Lt || gt.size > 0) && (Cr(!1), Fa(/* @__PURE__ */ new Set()));
  }, [be, Lt, gt.size]);
  const Wr = M((i) => {
    C(i.id), Pe(!1), v("player");
  }, []), al = M((i) => {
    Yt(i), Pe(!1), v("creator");
  }, [Yt]);
  return X ? /* @__PURE__ */ s("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ s(
      "aside",
      {
        className: "flex flex-col flex-shrink-0",
        style: {
          width: 260,
          borderRight: "1px solid var(--border-subtle)",
          background: "var(--bg-titlebar)"
        },
        children: [
          /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center gap-2 px-3 flex-shrink-0",
              style: {
                height: 38,
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t(
                  "div",
                  {
                    style: {
                      fontSize: 10,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                      color: "var(--text-disabled)"
                    },
                    children: be === "mywork" ? "My Work" : "Library"
                  }
                ),
                /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: be === "mywork" ? Re.trim() || qe !== "all" ? `${St.length} / ${rt.length}` : a(
                    rt.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: rt.length }
                  ) : Re.trim() || ht !== "all" ? `${Xt.length} / ${ve.length}` : `${ve.length} saved` }),
                  be === "mywork" && /* @__PURE__ */ s(he, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: zs,
                        disabled: qa,
                        className: "flex items-center justify-center transition-all",
                        style: {
                          width: 22,
                          height: 22,
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-window)",
                          color: "var(--text-secondary)",
                          opacity: qa ? 0.5 : 1
                        },
                        title: Wa ? `Open real folder: ${Wa}` : "Open real JULI3TA folder",
                        children: /* @__PURE__ */ t(Ll, { size: 11 })
                      }
                    ),
                    /* @__PURE__ */ s(
                      "div",
                      {
                        className: "flex rounded-md overflow-hidden flex-shrink-0",
                        style: { border: "1px solid var(--border-subtle)" },
                        children: [
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => Oo("cards"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: ma === "cards" ? "var(--bg-hover)" : "transparent",
                                color: ma === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "Cards",
                              children: /* @__PURE__ */ t(lo, { size: 11 })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => Oo("list"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: ma === "list" ? "var(--bg-hover)" : "transparent",
                                color: ma === "list" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "List",
                              children: /* @__PURE__ */ t(Dt, { size: 11 })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  be === "library" && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        Pe(!0), ha("search");
                      },
                      className: "flex items-center justify-center transition-all",
                      style: {
                        width: 22,
                        height: 22,
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-window)",
                        color: "var(--text-secondary)"
                      },
                      title: "Search streamed music",
                      children: /* @__PURE__ */ t(vt, { size: 11 })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "flex flex-shrink-0 p-1 gap-1",
              style: {
                background: "var(--bg-window)",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                { id: "mywork", label: "My Work", count: rt.length },
                { id: "library", label: "Library", count: ve.length }
              ].map((i) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => Ho(i.id),
                  className: "flex-1 rounded-md transition-all",
                  style: {
                    height: 26,
                    fontSize: 11,
                    fontWeight: be === i.id ? 700 : 600,
                    color: be === i.id ? "white" : "var(--text-secondary)",
                    background: be === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
                    border: "none"
                  },
                  children: [
                    i.label,
                    i.count > 0 && /* @__PURE__ */ t(
                      "span",
                      {
                        style: {
                          marginLeft: 6,
                          fontSize: 10,
                          fontWeight: 700,
                          opacity: be === i.id ? 0.85 : 0.55
                        },
                        children: i.count
                      }
                    )
                  ]
                },
                i.id
              ))
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center gap-1 px-2 flex-shrink-0",
              style: {
                height: 32,
                borderBottom: "1px solid var(--border-subtle)",
                background: "var(--bg-window)",
                opacity: be === "mywork" ? rt.length === 0 ? 0.4 : 1 : ve.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(vt, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: Re,
                    onChange: (i) => Uo(i.target.value),
                    placeholder: be === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: be === "mywork" ? rt.length === 0 : ve.length === 0
                  }
                ),
                Re && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Uo(""),
                    className: "opacity-60 hover:opacity-100 px-1",
                    title: "Clear search",
                    children: /* @__PURE__ */ t(we, { size: 11 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "flex items-center gap-1 px-2 flex-shrink-0 overflow-x-auto invisible-scrollbar",
              style: {
                height: 30,
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: be === "mywork" ? [
                { id: "all", label: "All" },
                { id: "songs", label: "Songs" },
                { id: "restyles", label: "Restyles" },
                { id: "lyrics", label: "Lyrics" }
              ].map((i) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Wn(i.id),
                  className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                  style: {
                    height: 22,
                    fontSize: 10,
                    fontWeight: qe === i.id ? 800 : 600,
                    color: qe === i.id ? "white" : "var(--text-secondary)",
                    background: qe === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: i.label
                },
                i.id
              )) : Lt ? /* @__PURE__ */ s(he, { children: [
                /* @__PURE__ */ s("span", { style: { fontSize: 10, fontWeight: 800, color: "var(--text-primary)", flexShrink: 0 }, children: [
                  gt.size,
                  " selected"
                ] }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Fa(new Set(Xt.map((i) => i.id))),
                    className: "rounded-full px-2.5 flex-shrink-0 transition-all hover:bg-[var(--bg-hover)]",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: 700,
                      color: "var(--text-secondary)",
                      background: "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: "Select all"
                  }
                ),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: Sa,
                    className: "ml-auto rounded-full px-2.5 flex-shrink-0 transition-all hover:bg-[var(--bg-hover)]",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: 700,
                      color: "var(--text-secondary)",
                      background: "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    title: "Exit select mode (ESC)",
                    children: "Done"
                  }
                )
              ] }) : /* @__PURE__ */ s(he, { children: [
                [
                  { id: "all", label: "All" },
                  { id: "favorites", label: "Favorites" }
                ].map((i) => /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => $o(i.id),
                    className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: ht === i.id ? 800 : 600,
                      color: ht === i.id ? "white" : "var(--text-secondary)",
                      background: ht === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: i.label
                  },
                  i.id
                )),
                ve.length > 0 && /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => Cr(!0),
                    className: "ml-auto flex items-center gap-1 rounded-full px-2.5 flex-shrink-0 transition-all hover:bg-[var(--bg-hover)]",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: 700,
                      color: "var(--text-secondary)",
                      background: "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    title: "Multi-select for batch actions",
                    children: [
                      /* @__PURE__ */ t(cn, { size: 11 }),
                      " Select"
                    ]
                  }
                )
              ] })
            }
          ),
          be === "mywork" ? rt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t(Dt, { size: 18, style: { color: "var(--text-disabled)" } })
              }
            ),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: a("musiccreator.gallery.empty.title") }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: a("musiccreator.gallery.empty.body") }),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => v("creator"),
                className: "mt-3 flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 28,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(lt, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(st, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : St.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(vt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Re ? a("musiccreator.gallery.searchEmpty", { q: Re }) : `No ${qe} yet.` })
          ] }) : /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: [
            $a.length > 0 && qe === "all" && !Re.trim() && /* @__PURE__ */ t(
              rp,
              {
                trackIds: $a,
                allTracks: rt,
                player: H,
                onSelect: Wr
              }
            ),
            ma === "list" ? /* @__PURE__ */ t(
              ep,
              {
                tracks: St,
                player: H,
                onLoad: Yt,
                onOpenLyrics: yi,
                onDelete: li,
                onRename: Xa
              }
            ) : St.map((i) => /* @__PURE__ */ t(
              ap,
              {
                track: i,
                onDelete: li,
                onLoad: Yt,
                onOpenLyrics: yi,
                onSaveSongToDesktop: Rs,
                onSaveLyricsToDesktop: Ps,
                onPlayInPlayer: js,
                onRename: Xa,
                onEditCover: hi,
                onSelect: Wr,
                selected: f === "player" && w === i.id,
                player: H
              },
              i.id
            ))
          ] }) : (
            /* Library tab — flat slim list of saved streamed tracks. The
               rich Artists/Albums/Playlists views still live in the main
               Music pane (reachable via the search button in the header
               above) since they need more horizontal room than 260px. */
            ve.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(
                "div",
                {
                  className: "flex items-center justify-center rounded-2xl mb-2",
                  style: { width: 44, height: 44, background: "var(--bg-hover)" },
                  children: /* @__PURE__ */ t(ur, { size: 18, style: { color: "var(--text-disabled)" } })
                }
              ),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: "Your saved music lives here" }),
              /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: "Click the magnifier above to search, then add tracks you want to keep." }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Pe(!0), ha("search");
                  },
                  className: "mt-3 flex items-center gap-1.5 rounded-lg px-3",
                  style: {
                    height: 28,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "white",
                    background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                  },
                  children: [
                    /* @__PURE__ */ t(vt, { size: 11 }),
                    " Search music"
                  ]
                }
              )
            ] }) : Xt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(vt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Re ? `No matches for "${Re}"` : `No ${ht} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Xt.map((i) => /* @__PURE__ */ t(
              op,
              {
                track: i,
                player: H,
                selected: f === "player" && w === i.id,
                isFavorite: Gt.has(i.id),
                onOpenInPlayer: Wr,
                onRemix: al,
                onToggleFavorite: Fr,
                onRemove: Br,
                selectMode: Lt,
                checked: gt.has(i.id),
                onToggleCheck: tl
              },
              i.id
            )) })
          ),
          be === "library" && Lt && gt.size > 0 && /* @__PURE__ */ s(
            "div",
            {
              className: "flex-shrink-0 flex items-center gap-1.5 px-2",
              style: {
                height: 44,
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--bg-titlebar)"
              },
              children: [
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => {
                      const i = Xt.filter((c) => gt.has(c.id));
                      for (const c of i) Fr(c);
                      Sa();
                    },
                    className: "flex items-center gap-1 rounded-lg px-2.5 transition-all hover:bg-[var(--bg-hover)]",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--text-secondary)",
                      background: "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    title: `Toggle favorite on ${gt.size} track(s)`,
                    children: [
                      /* @__PURE__ */ t(ur, { size: 11 }),
                      " Toggle favorite"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => {
                      const i = Xt.filter((c) => gt.has(c.id));
                      for (const c of i) Br(c);
                      Sa();
                    },
                    className: "flex items-center gap-1 rounded-lg px-2.5 transition-all hover:bg-[var(--bg-hover)]",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: 700,
                      color: "white",
                      background: "var(--status-danger)",
                      border: "1px solid var(--status-danger)"
                    },
                    title: `Remove ${gt.size} track(s) from Library`,
                    children: [
                      /* @__PURE__ */ t(Ut, { size: 11 }),
                      " Remove"
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-w-0 overflow-hidden relative", children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: "flex items-center px-5 flex-shrink-0",
          style: {
            height: 56,
            gap: 12,
            borderBottom: "1px solid var(--border-subtle)",
            background: "var(--bg-titlebar)"
          },
          children: [
            /* @__PURE__ */ s("div", { className: "flex items-center", style: { gap: 2, flexShrink: 0 }, children: [
              /* @__PURE__ */ t(xo, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
              /* @__PURE__ */ t(
                "img",
                {
                  src: g === "light" ? "/brand/juli3ta/wordmark-ink-transparent.png" : "/brand/juli3ta/wordmark-cream-transparent.png",
                  alt: "JULI3TA",
                  draggable: !1,
                  style: {
                    height: 24,
                    width: "auto",
                    display: "block",
                    marginLeft: -6,
                    userSelect: "none",
                    pointerEvents: "none"
                  }
                }
              )
            ] }),
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center gap-0.5 ml-4 rounded-lg p-0.5 flex-shrink-0",
                style: {
                  background: "var(--bg-window)",
                  border: "1px solid var(--border-subtle)"
                },
                children: [
                  { id: "creator", icon: /* @__PURE__ */ t(lt, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(Se, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
                ].map((i) => /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => v(i.id),
                    title: i.tip,
                    className: "flex items-center gap-1.5 px-3 rounded-md transition-all",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: f === i.id ? 600 : 500,
                      color: f === i.id ? "white" : "var(--text-secondary)",
                      background: f === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
                      border: "none"
                    },
                    children: [
                      i.icon,
                      i.label
                    ]
                  },
                  i.id
                ))
              }
            ),
            /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-1.5 flex-shrink-0", children: [
              f === "player" && /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Pe((i) => !i), ha("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: yt ? "white" : "var(--text-secondary)",
                    background: yt ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(vt, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(Zu, { endpoint: X, endpoints: Va, onSwitch: hs }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: f === "player" ? Ms : Hr,
                  disabled: Y,
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a(f === "player" ? "musiccreator.header.surpriseFromPlayerTitle" : "musiccreator.header.surpriseTitle"),
                  children: [
                    /* @__PURE__ */ t(bo, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Ja(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(ln, { size: 14 })
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => u(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a("julietaHelp.title"),
                  children: /* @__PURE__ */ t(kl, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      f === "player" && (yt ? /* @__PURE__ */ t(
        bp,
        {
          tab: Jn,
          onTabChange: ha,
          query: Lr,
          onQueryChange: Gn,
          searchHistory: Vn,
          onClearSearchHistory: () => {
            Fo([]);
            try {
              localStorage.removeItem("juli3ta:searchHistory");
            } catch {
            }
          },
          resultType: ga,
          onResultTypeChange: Kn,
          results: Yn,
          busy: Xn,
          error: Qn,
          status: Zn,
          providers: es,
          connectors: ts,
          libraryTracks: ve,
          playlists: fa,
          playlistNameDraft: Rr,
          playlistBusy: ss,
          favoriteIds: Gt,
          warmupIds: rs,
          previewBusyId: os,
          addBusyId: is,
          savedYoutubeIds: qs,
          player: H,
          onWarmResult: Ys,
          onPreview: Ks,
          onAdd: Xs,
          onOpenTrack: (i) => {
            C(i.id), Pe(!1), v("player");
          },
          onToggleFavorite: Fr,
          onRemoveLibraryTrack: Br,
          onPlaylistNameDraftChange: Zo,
          onCreatePlaylist: Qs,
          onAddTrackToPlaylist: Zs,
          onRemoveTrackFromPlaylist: el,
          onPlayPlaylist: Gs,
          onDeletePlaylist: Vs,
          onConfigureConnector: Bs,
          onDisconnectConnector: Ws,
          onClose: () => Pe(!1)
        }
      ) : /* @__PURE__ */ t(
        fp,
        {
          track: (() => {
            const i = w ?? H.state.trackId ?? St[0]?.id ?? ve[0]?.id ?? null;
            return i ? je.find((c) => c.id === i) ?? null : null;
          })(),
          player: H,
          restyleOriginal: Hn,
          onSwitchToCreator: () => v("creator"),
          onSearchMusic: () => {
            v("player"), Pe(!0), ha("search");
          },
          onEditInCreator: (i) => {
            Yt(i), v("creator");
          }
        }
      )),
      f === "creator" && /* @__PURE__ */ s(he, { children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: "flex items-center gap-2 px-5 flex-shrink-0",
            style: {
              height: 48,
              borderBottom: "1px solid var(--border-subtle)"
            },
            children: [
              [
                { id: "compose", icon: /* @__PURE__ */ t(ja, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(Ot, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t(pr, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((i) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => h(i.id),
                  disabled: Y,
                  title: i.tip,
                  className: "flex items-center gap-1.5 px-4 rounded-lg transition-all disabled:opacity-50",
                  style: {
                    height: 32,
                    fontSize: 12,
                    fontWeight: m === i.id ? 600 : 500,
                    color: m === i.id ? "white" : "var(--text-secondary)",
                    background: m === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                    border: m === i.id ? "1px solid transparent" : "1px solid var(--border-subtle)"
                  },
                  children: [
                    i.icon,
                    i.label
                  ]
                },
                i.id
              )),
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: Y ? /* @__PURE__ */ s(
                "button",
                {
                  onClick: _s,
                  className: "flex items-center gap-1.5 px-4 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 12,
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    background: "var(--bg-titlebar)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: [
                    /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }),
                    a("musiccreator.button.cancel")
                  ]
                }
              ) : (() => {
                const i = m === "restyle" && (y || !Fe);
                return /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: gs,
                    disabled: i || er,
                    className: "flex items-center gap-1.5 px-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    style: {
                      height: 32,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "white",
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      boxShadow: "var(--shadow-md)"
                    },
                    title: er ? "An AI helper is still working — wait for it to finish before generating." : i ? y ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      i && y || er ? /* @__PURE__ */ t(re, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Ot, { size: 13 }),
                      er ? "Waiting for AI…" : m === "restyle" ? y ? "Analyzing audio…" : "Restyle Song" : m === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
                    ]
                  }
                );
              })() })
            ]
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            className: "flex items-center gap-3 px-5 flex-shrink-0",
            style: {
              height: 40,
              borderBottom: "1px solid var(--border-subtle)",
              background: "var(--bg-window)"
            },
            children: [
              /* @__PURE__ */ t(
                "label",
                {
                  htmlFor: "juli3ta-song-name",
                  style: {
                    fontSize: 10,
                    fontWeight: 600,
                    color: "var(--text-disabled)",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    flexShrink: 0
                  },
                  children: a("musiccreator.songName.label")
                }
              ),
              /* @__PURE__ */ t(
                "input",
                {
                  id: "juli3ta-song-name",
                  value: L,
                  onChange: (i) => z(i.target.value),
                  onDragOver: Za,
                  onDrop: Hs,
                  placeholder: a("musiccreator.songName.placeholder"),
                  disabled: Y,
                  className: "flex-1 px-2.5 py-1 rounded-md focus:outline-none focus:ring-1 disabled:opacity-50",
                  style: {
                    fontSize: 12,
                    background: "var(--bg-titlebar)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    minWidth: 0
                  }
                }
              ),
              m !== "lyricsOnly" && /* @__PURE__ */ s(
                "label",
                {
                  htmlFor: "juli3ta-instrumental",
                  className: "flex items-center gap-2 cursor-pointer select-none flex-shrink-0",
                  style: { fontSize: 11, color: "var(--text-secondary)" },
                  children: [
                    a("musiccreator.lyrics.instrumental"),
                    /* @__PURE__ */ t(
                      qi,
                      {
                        id: "juli3ta-instrumental",
                        checked: G,
                        onChange: Z,
                        disabled: Y
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (Y || y || pa || Jt) && /* @__PURE__ */ s(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: pa ? "rgba(255, 82, 82, 0.06)" : Jt ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              (Y || y) && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${(Y ? Bn : q?.progress ?? 0.08) * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: pa ? /* @__PURE__ */ s(he, { children: [
                /* @__PURE__ */ t(Ia, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: pa, children: pa }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => K(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(we, { size: 11 })
                  }
                )
              ] }) : Y ? /* @__PURE__ */ s(he, { children: [
                /* @__PURE__ */ t(re, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: Wt === "lyrics" ? Bi[jo % Bi.length] : Wi[jo % Wi.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: Wt === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : y ? /* @__PURE__ */ s(he, { children: [
                /* @__PURE__ */ t(re, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, title: q?.message ?? "", children: q?.message ?? "Preparing reference audio…" }),
                /* @__PURE__ */ s("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: [
                  "Reference · ",
                  Math.round((q?.progress ?? 0.08) * 100),
                  "%"
                ] })
              ] }) : /* @__PURE__ */ s(he, { children: [
                /* @__PURE__ */ t(Ia, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: Jt ?? "", children: Jt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => ne(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: "Dismiss",
                    children: /* @__PURE__ */ t(we, { size: 11 })
                  }
                )
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: /* @__PURE__ */ s("div", { className: "px-6 py-5", children: [
          m === "restyle" && /* @__PURE__ */ s(
            "div",
            {
              className: "mb-5",
              onDragOver: (i) => {
                i.dataTransfer.types.includes(za) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
              },
              onDrop: (i) => {
                const c = bt(i);
                c && c.hasAudio && (i.preventDefault(), (async () => {
                  const p = await Hc(c.id);
                  if (!p?.audioDataUrl) {
                    K("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  wt(p.audioDataUrl, `${c.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                et ? /* @__PURE__ */ s(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${y ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                        y ? /* @__PURE__ */ t(re, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(Dt, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: et }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: Ts,
                            disabled: Y || y,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t(Ut, { size: 14 })
                          }
                        )
                      ] }),
                      (y || Ft) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: y ? `🔍  ${q?.message ?? "Preparing compact reference sample…"}` : `✨  ${Ft}` }),
                      y && /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-full", style: { height: 3, background: "var(--bg-hover)", marginTop: 7 }, children: /* @__PURE__ */ t(
                        "div",
                        {
                          style: {
                            width: `${(q?.progress ?? 0.08) * 100}%`,
                            height: "100%",
                            background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                            transition: "width 0.25s ease"
                          }
                        }
                      ) }),
                      Fe && !y && /* @__PURE__ */ t(
                        Un,
                        {
                          base64: Fe,
                          onPlay: () => {
                            H.state.playing && H.pause();
                          },
                          title: "Preview the exact compact reference sample sent to MiniMax cover mode",
                          height: 30,
                          style: { marginTop: 8 }
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ s("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: () => Oa(!0),
                      disabled: Y,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Record new audio (mic or tab)",
                      children: [
                        /* @__PURE__ */ t(st, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: ys,
                      disabled: Y,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t(Dt, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: ks,
                      disabled: Y || At.filter((i) => i.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(jt, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: At.filter((i) => i.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: ws,
                      disabled: Y,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50 relative",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      title: "Pick a Voice Recorder clip",
                      children: [
                        /* @__PURE__ */ t(st, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: kr.length }) })
                      ]
                    }
                  )
                ] }),
                !et && /* @__PURE__ */ s("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Lo("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: tt === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${tt === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: tt === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(lt, { size: 13, style: { color: tt === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Best compact" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "gateway-safe chorus-like window" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Lo("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: tt === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${tt === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: tt === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(lo, { size: 13, style: { color: tt === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 compact parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                Fn && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !at && Oa(!1),
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        onClick: (i) => i.stopPropagation(),
                        className: "rounded-xl flex flex-col",
                        style: {
                          width: 380,
                          background: "var(--bg-window)",
                          border: "1px solid var(--border-subtle)",
                          boxShadow: "var(--shadow-lg)"
                        },
                        children: [
                          /* @__PURE__ */ s("div", { className: "px-5 py-4", style: { borderBottom: "1px solid var(--border-subtle)" }, children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }, children: "Record audio for cover" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.4 }, children: "Capture 1–3 minutes of music for best results. JULI3TA extracts one clean compact reference for MiniMax cover mode." })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "px-5 pt-3", children: [
                            /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                              /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !at && Mo("mic"),
                                  disabled: at,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: mt === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${mt === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(st, { size: 14 }),
                                    /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Microphone" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "laptop or USB mic" })
                                    ] })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !at && Mo("tab"),
                                  disabled: at,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: mt === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${mt === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(wi, { size: 14 }),
                                    /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            mt === "tab" && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                              "💡 In the share dialog, pick a tab playing music and tick ",
                              /* @__PURE__ */ t("strong", { children: '"Share tab audio"' }),
                              "."
                            ] })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "px-5 py-6 flex flex-col items-center", children: [
                            /* @__PURE__ */ s(
                              "div",
                              {
                                style: {
                                  fontSize: 32,
                                  fontWeight: 300,
                                  color: "var(--text-primary)",
                                  fontVariantNumeric: "tabular-nums",
                                  marginBottom: 16
                                },
                                children: [
                                  Math.floor(zo / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor(zo / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            at ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: bs,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(dn, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: fs,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: mt === "tab" ? /* @__PURE__ */ t(wi, { size: 28 }) : /* @__PURE__ */ t(st, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: at ? mt === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            Ro && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: Ro })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s(
                            "div",
                            {
                              className: "px-5 py-3 flex items-center justify-between",
                              style: { borderTop: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)" },
                              children: [
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: at ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !at && Oa(!1),
                                    disabled: at,
                                    className: "px-3 py-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                                    style: { fontSize: 11, color: "var(--text-secondary)" },
                                    children: "Close"
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: Co,
                    type: "file",
                    accept: "audio/*",
                    onChange: vs,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick a compact gateway-safe sample" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed and downsampled before Restyle so the request stays small."
                ] }),
                Ct && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => Et(!1),
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        onClick: (i) => i.stopPropagation(),
                        className: "rounded-xl overflow-hidden flex flex-col",
                        style: {
                          width: 380,
                          maxHeight: 480,
                          background: "var(--bg-window)",
                          border: "1px solid var(--border-subtle)",
                          boxShadow: "var(--shadow-lg)"
                        },
                        children: [
                          /* @__PURE__ */ s(
                            "div",
                            {
                              className: "px-4 py-3 flex items-center justify-between",
                              style: { borderBottom: "1px solid var(--border-subtle)" },
                              children: [
                                /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ t(st, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ s(
                                  "button",
                                  {
                                    onClick: () => Et(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    children: [
                                      /* @__PURE__ */ t(Ut, { size: 14, style: { visibility: "hidden" } }),
                                      /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600 }, children: "×" })
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: kr.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(st, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : kr.map((i) => {
                            const c = i.durationMs / 1e3, p = c < 6;
                            return /* @__PURE__ */ s(
                              "button",
                              {
                                onClick: () => !p && xs(i),
                                disabled: p,
                                className: "w-full flex items-center gap-3 px-4 py-3 transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40 disabled:cursor-not-allowed text-left",
                                style: { borderBottom: "1px solid var(--border-subtle)" },
                                children: [
                                  /* @__PURE__ */ t(
                                    "div",
                                    {
                                      className: "flex items-center justify-center rounded-lg flex-shrink-0",
                                      style: {
                                        width: 36,
                                        height: 36,
                                        background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                                      },
                                      children: /* @__PURE__ */ t(st, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: i.name }),
                                    /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(c / 60),
                                      ":",
                                      Math.floor(c % 60).toString().padStart(2, "0"),
                                      p && " · too short for cover (need ≥6 s)"
                                    ] })
                                  ] })
                                ]
                              },
                              i.id
                            );
                          }) }),
                          /* @__PURE__ */ t(
                            "a",
                            {
                              href: "#",
                              onClick: (i) => {
                                i.preventDefault(), Et(!1);
                              },
                              className: "px-4 py-2 text-center",
                              style: {
                                fontSize: 11,
                                color: "var(--text-disabled)",
                                borderTop: "1px solid var(--border-subtle)",
                                background: "var(--bg-titlebar)"
                              },
                              children: "Tip: open Voice Recorder to capture more"
                            }
                          )
                        ]
                      }
                    )
                  }
                ),
                On && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => Ua(!1),
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        onClick: (i) => i.stopPropagation(),
                        className: "rounded-xl overflow-hidden flex flex-col",
                        style: {
                          width: 420,
                          maxHeight: 520,
                          background: "var(--bg-window)",
                          border: "1px solid var(--border-subtle)",
                          boxShadow: "var(--shadow-lg)"
                        },
                        children: [
                          /* @__PURE__ */ s(
                            "div",
                            {
                              className: "px-4 py-3 flex items-center justify-between",
                              style: { borderBottom: "1px solid var(--border-subtle)" },
                              children: [
                                /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ t(jt, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => Ua(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    title: "Close",
                                    children: /* @__PURE__ */ t(we, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const i = At.filter((c) => c.audioDataUrl);
                            return i.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(jt, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : i.map((c) => {
                              const p = c.durationMs / 1e3, x = p > 0 && p < 6, E = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !x && Ss(c),
                                  disabled: x,
                                  className: "w-full flex items-center gap-3 px-4 py-3 transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40 disabled:cursor-not-allowed text-left",
                                  style: { borderBottom: "1px solid var(--border-subtle)" },
                                  children: [
                                    /* @__PURE__ */ t(
                                      "div",
                                      {
                                        className: "rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center",
                                        style: {
                                          width: 40,
                                          height: 40,
                                          background: c.coverDataUrl ? `url(${c.coverDataUrl}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                                          border: "1px solid var(--border-subtle)"
                                        },
                                        children: !c.coverDataUrl && /* @__PURE__ */ t(jt, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: E }),
                                      /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        p > 0 ? `${Math.floor(p / 60)}:${Math.floor(p % 60).toString().padStart(2, "0")}` : "—",
                                        c.styleTags && c.styleTags !== "—" && ` · ${c.styleTags}`,
                                        x && " · too short for cover (need ≥6 s)"
                                      ] })
                                    ] })
                                  ]
                                },
                                c.id
                              );
                            });
                          })() })
                        ]
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "grid gap-5 mb-5",
              style: { gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" },
              children: [
                /* @__PURE__ */ t(
                  Ca,
                  {
                    label: a("musiccreator.theme.label"),
                    hint: a("musiccreator.theme.hint"),
                    headerExtra: /* @__PURE__ */ t(
                      oo,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: Cs,
                        busy: Ve.theme,
                        disabled: Y || Ve.theme
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: T,
                        onChange: (i) => P(i.target.value),
                        onDragOver: Za,
                        onDrop: Os,
                        placeholder: a("musiccreator.theme.placeholder"),
                        disabled: Y,
                        rows: 4,
                        className: "w-full px-3 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 disabled:opacity-50",
                        style: {
                          fontSize: 12,
                          background: "var(--bg-window)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-primary)"
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(
                  Ca,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${$s} / ${_u}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      oo,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: Es,
                        busy: Ve.style,
                        disabled: Y || Ve.style
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: k,
                        onChange: (i) => A(i.target.value),
                        onDragOver: Za,
                        onDrop: Us,
                        placeholder: a("musiccreator.style.placeholder"),
                        disabled: Y,
                        rows: 4,
                        className: "w-full px-3 py-2 rounded-lg resize-none focus:outline-none disabled:opacity-50",
                        style: {
                          fontSize: 12,
                          background: "var(--bg-window)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-primary)"
                        }
                      }
                    )
                  }
                )
              ]
            }
          ),
          m !== "lyricsOnly" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-4 mb-5", children: [
            /* @__PURE__ */ t(Gu, { onPick: Ls, disabled: Y }),
            /* @__PURE__ */ t(
              Vu,
              {
                specs: le,
                onChange: ke,
                disabled: Y,
                onOptimize: Ns,
                optimizing: ut
              }
            )
          ] }),
          /* @__PURE__ */ s(
            Ca,
            {
              label: "Cover Art",
              hint: X?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ s("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  qi,
                  {
                    checked: Ae,
                    onChange: wr,
                    disabled: Y || !X?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      onClick: () => gi(!0),
                      disabled: Y,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: fe ? `url(${fe}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: Y ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !fe && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Ra, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        He && /* @__PURE__ */ t(
                          "div",
                          {
                            className: "absolute inset-0 flex items-center justify-center",
                            style: { background: "rgba(0,0,0,0.5)" },
                            children: /* @__PURE__ */ t(re, { size: 20, className: "animate-spin", style: { color: "white" } })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ s("div", { className: "flex-1 min-w-0 flex flex-col gap-2", children: [
                    /* @__PURE__ */ s("div", { className: "flex flex-wrap items-center gap-2", children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: ni,
                          disabled: Y || He || !X?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: Y || He || !X?.models.image ? "not-allowed" : "pointer"
                          },
                          title: X?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            He ? /* @__PURE__ */ t(re, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(lt, { size: 11 }),
                            fe ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => Eo.current?.click(),
                          disabled: Y,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-secondary)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Upload your own image (PNG/JPG/WebP, max 4 MB)",
                          children: [
                            /* @__PURE__ */ t(vo, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      fe && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            F(""), Ne && xa.current?.(Ne, "");
                          },
                          disabled: Y,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-disabled)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Remove the cover and fall back to the gradient placeholder",
                          children: [
                            /* @__PURE__ */ t(we, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => Ao((i) => !i),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            Tr ? /* @__PURE__ */ t(vl, { size: 11 }) : /* @__PURE__ */ t(nn, { size: 11 }),
                            Tr ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    Tr && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: O,
                        onChange: (i) => ee(i.target.value),
                        placeholder: dr(L, T, k),
                        disabled: Y,
                        rows: 3,
                        className: "w-full px-3 py-2 rounded-lg resize-none focus:outline-none disabled:opacity-50",
                        style: {
                          fontSize: 11,
                          background: "var(--bg-window)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-primary)"
                        }
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: Eo,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (i) => {
                      const c = i.target.files?.[0];
                      c && si(c), i.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          m !== "restyle" && !G && /* @__PURE__ */ t(
            Ca,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (le.intent ?? "").length > 0 ? `${(le.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: le.intent ?? "",
                  onChange: (i) => ke((c) => ({ ...c, intent: i.target.value })),
                  placeholder: 'e.g. "first-person, mostly Spanish with one English chorus, mention rain, no clichés"',
                  disabled: Y,
                  rows: 2,
                  className: "w-full px-3 py-2 rounded-lg resize-none focus:outline-none disabled:opacity-50",
                  style: {
                    fontSize: 11,
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ s(
            Ca,
            {
              label: a("musiccreator.lyrics.label"),
              counter: G ? "instrumental — no vocals" : `${fi} / ${ea}`,
              counterDanger: !G && fi > ea,
              className: "mb-5",
              headerExtra: G ? void 0 : /* @__PURE__ */ t(
                oo,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: As,
                  busy: Ve.lyrics,
                  disabled: Y || Ve.lyrics || !_.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: _,
                    onChange: (i) => N(i.target.value),
                    onDragOver: Za,
                    onDrop: Ds,
                    placeholder: G ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: Y || G,
                    rows: 8,
                    className: "w-full px-3 py-2 rounded-lg resize-none focus:outline-none disabled:opacity-50 font-mono",
                    style: {
                      fontSize: 11,
                      background: "var(--bg-window)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)"
                    }
                  }
                ),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-2 flex-wrap", children: [
                  /* @__PURE__ */ t(
                    "span",
                    {
                      style: {
                        fontSize: 9,
                        fontWeight: 600,
                        color: "var(--text-disabled)",
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                        marginRight: 4
                      },
                      children: "Song form"
                    }
                  ),
                  Tu.map((i) => {
                    const c = W?.id === i.id;
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => {
                          c ? R(null) : (R(i), _.trim() || N(i.skeleton));
                        },
                        disabled: Y,
                        className: "px-2 py-0.5 rounded-full transition-all disabled:opacity-40",
                        style: {
                          fontSize: 10,
                          fontWeight: c ? 600 : 500,
                          color: c ? "white" : "var(--text-secondary)",
                          background: c ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        title: i.description + (c ? " · click to clear" : " · click to use this form"),
                        children: [
                          c ? "✓ " : "",
                          i.label
                        ]
                      },
                      i.id
                    );
                  }),
                  W && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t($u, { player: H, allTracks: je }),
      /* @__PURE__ */ t("audio", { ref: bi, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      Sc,
      {
        open: b,
        onClose: () => u(!1),
        onUseRecipe: (i, c) => {
          h("compose"), P(i), A(c);
        }
      }
    ),
    /* @__PURE__ */ t(qu, { open: Er, onClose: () => Ar(!1) }),
    ls && /* @__PURE__ */ t(
      wp,
      {
        settings: Dr,
        endpoints: Va,
        onChange: cs,
        onClose: () => Ja(!1)
      }
    ),
    mi && /* @__PURE__ */ t(
      ip,
      {
        track: mi,
        endpoint: X,
        onSave: $r,
        onClose: () => hi(null)
      }
    ),
    Is && /* @__PURE__ */ t(
      np,
      {
        songName: L,
        mode: m,
        theme: T,
        style: k,
        intent: le.intent ?? "",
        lyrics: _,
        specs: le,
        coverDataUrl: fe,
        endpoint: X,
        busy: He,
        onRegenerate: ni,
        onUpload: si,
        onClear: () => {
          F(""), Ne && xa.current?.(Ne, "");
        },
        onClose: () => gi(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(Ju, { retrying: ms, onRetry: Or });
}
function wp({ settings: e, endpoints: a, onChange: r, onClose: o }) {
  const n = (l, d, g) => {
    const m = g.trim(), b = { ...e.overridesByEndpoint[l] ?? {} };
    m ? b[d] = m : delete b[d];
    const u = {
      ...e,
      overridesByEndpoint: {
        ...e.overridesByEndpoint,
        [l]: b
      }
    };
    r(u);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: "absolute inset-0 z-40 flex items-center justify-center",
      style: { background: "rgba(0,0,0,0.55)" },
      onClick: o,
      children: /* @__PURE__ */ s(
        "div",
        {
          onClick: (l) => l.stopPropagation(),
          className: "rounded-xl flex flex-col overflow-hidden",
          style: {
            width: 560,
            maxWidth: "90%",
            maxHeight: "85%",
            background: "var(--bg-window)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-lg)"
          },
          children: [
            /* @__PURE__ */ s(
              "div",
              {
                className: "flex items-center gap-2 px-5 flex-shrink-0",
                style: {
                  height: 48,
                  borderBottom: "1px solid var(--border-subtle)",
                  background: "var(--bg-titlebar)"
                },
                children: [
                  /* @__PURE__ */ t(ln, { size: 14, style: { color: "var(--accent-primary)" } }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA Settings" }),
                  /* @__PURE__ */ s(
                    "span",
                    {
                      className: "tabular-nums",
                      style: {
                        fontSize: 10,
                        fontWeight: 700,
                        color: "var(--accent-primary)",
                        border: "1px solid var(--accent-primary)",
                        background: "var(--bg-hover)",
                        padding: "2px 6px",
                        borderRadius: "var(--radius-full)",
                        letterSpacing: 0.4
                      },
                      title: `JULI3TA v${go}`,
                      children: [
                        "v",
                        go
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: o,
                      className: "ml-auto flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                      style: { width: 24, height: 24, color: "var(--text-secondary)" },
                      title: "Close",
                      children: /* @__PURE__ */ t(we, { size: 14 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: /* @__PURE__ */ s("div", { className: "px-5 py-4", children: [
              /* @__PURE__ */ s("div", { className: "mb-4", children: [
                /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }, children: "Model mapping" }),
                /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: [
                  "Pick a model id per endpoint. Each dropdown lists every id the gateway exposes via ",
                  /* @__PURE__ */ t("code", { style: { margin: "0 4px", color: "var(--accent-primary)" }, children: "/v1/models" }),
                  ", filtered to the right shape for that slot."
                ] }),
                /* @__PURE__ */ s(
                  "ul",
                  {
                    style: {
                      fontSize: 10,
                      color: "var(--text-disabled)",
                      lineHeight: 1.5,
                      marginTop: 6,
                      paddingLeft: 16,
                      listStyle: "disc"
                    },
                    children: [
                      /* @__PURE__ */ s("li", { children: [
                        /* @__PURE__ */ t("strong", { style: { color: "var(--text-secondary)" }, children: "Music / Cover" }),
                        " — sent in the",
                        /* @__PURE__ */ t("code", { style: { margin: "0 4px" }, children: "/music/generations" }),
                        " body."
                      ] }),
                      /* @__PURE__ */ s("li", { children: [
                        /* @__PURE__ */ t("strong", { style: { color: "var(--text-secondary)" }, children: "Lyrics" }),
                        " — usually leave on Auto. The ",
                        /* @__PURE__ */ t("code", { style: { margin: "0 4px" }, children: "/music/lyrics" }),
                        " endpoint runs minimax's internal lyrics generator server-side (no enumerable id). Only override if your gateway exposes a separate ",
                        /* @__PURE__ */ t("code", { children: "lyrics_generation" }),
                        " alias."
                      ] }),
                      /* @__PURE__ */ s("li", { children: [
                        /* @__PURE__ */ t("strong", { style: { color: "var(--text-secondary)" }, children: "Lyrics fallback" }),
                        " — chat model used when ",
                        /* @__PURE__ */ t("code", { style: { margin: "0 4px" }, children: "/music/lyrics" }),
                        " errors (quota, upstream 502)."
                      ] })
                    ]
                  }
                )
              ] }),
              a.length === 0 ? /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-3 py-3 rounded-lg",
                  style: {
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    background: "var(--bg-titlebar)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: [
                    /* @__PURE__ */ t(Ia, { size: 14, style: { color: "#fbbf24" } }),
                    "No reachable endpoints yet — connect a Tytus pod or start local switchAILocal, then come back."
                  ]
                }
              ) : /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", children: a.map((l) => {
                const d = e.overridesByEndpoint[l.url] ?? {}, g = [
                  { key: "music", label: "Music", discovered: l.models.music, kind: "music" },
                  { key: "cover", label: "Restyle", discovered: l.models.cover, kind: "cover" },
                  { key: "lyrics", label: "Lyrics", discovered: l.models.lyrics, kind: "lyrics" },
                  { key: "lyricsBackup", label: "Lyrics fallback", discovered: l.models.lyricsBackup, kind: "chat" },
                  { key: "image", label: "Cover art", discovered: l.models.image, kind: "image" }
                ], m = (u) => /music|cover/i.test(u), h = (u) => /image|diffusion|dall-?e|flux|sdxl/i.test(u), b = (u) => u === "chat" ? l.models.allIds.filter((f) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(f)) : u === "image" ? l.models.allIds.filter(h) : l.models.allIds.filter(m);
                return /* @__PURE__ */ s(
                  "div",
                  {
                    className: "rounded-lg p-3",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2 mb-2", children: [
                        /* @__PURE__ */ t(
                          "span",
                          {
                            className: "rounded-full",
                            style: {
                              width: 6,
                              height: 6,
                              background: yr(l),
                              boxShadow: `0 0 6px ${yr(l)}`
                            }
                          }
                        ),
                        /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: l.label }),
                        /* @__PURE__ */ s("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                          l.url,
                          " · ",
                          l.models.allIds.length,
                          " models"
                        ] })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: g.map((u) => {
                        const f = b(u.kind), v = d[u.key] ?? "";
                        return /* @__PURE__ */ s(ol, { children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "flex items-center",
                              style: { fontSize: 11, color: "var(--text-secondary)" },
                              children: u.label
                            }
                          ),
                          /* @__PURE__ */ s(
                            "select",
                            {
                              value: v,
                              onChange: (w) => n(l.url, u.key, w.target.value),
                              className: "w-full px-2 py-1 rounded-md focus:outline-none",
                              style: {
                                height: 28,
                                fontSize: 11,
                                fontFamily: "monospace",
                                background: "var(--bg-window)",
                                border: "1px solid var(--border-subtle)",
                                color: "var(--text-primary)",
                                appearance: "auto"
                              },
                              children: [
                                /* @__PURE__ */ t("option", { value: "", children: u.discovered ? `Auto · ${u.discovered}` : u.kind === "lyrics" ? "Auto · server-side (no model param)" : f.length === 0 ? "(no models match)" : "Auto · (no preferred match — pick one)" }),
                                f.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: f.map((w) => /* @__PURE__ */ t("option", { value: w, children: w }, w)) })
                              ]
                            }
                          )
                        ] }, u.key);
                      }) })
                    ]
                  },
                  l.podId
                );
              }) })
            ] }) }),
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-end gap-2 px-5 flex-shrink-0",
                style: {
                  height: 48,
                  borderTop: "1px solid var(--border-subtle)",
                  background: "var(--bg-titlebar)"
                },
                children: /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: o,
                    className: "px-4 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                    style: {
                      height: 30,
                      fontSize: 12,
                      color: "var(--text-secondary)",
                      background: "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: "Done"
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
}
function Np(e) {
  const a = e.host.storage.current();
  return Uc(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(il, { value: e, children: /* @__PURE__ */ t(xp, {}) });
  };
}
export {
  Np as default
};
//# sourceMappingURL=index.js.map
