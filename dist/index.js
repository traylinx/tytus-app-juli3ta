import { jsx as t, jsxs as s, Fragment as ge } from "react/jsx-runtime";
import { createContext as ci, useContext as di, forwardRef as ui, createElement as xo, useState as k, useEffect as W, useMemo as ye, useRef as ae, useCallback as z, Fragment as hl } from "react";
import { createPortal as Ba } from "react-dom";
const pi = ci(null), gl = pi.Provider;
function Ft() {
  const e = di(pi);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fl = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, a, o) => o ? o.toUpperCase() : a.toLowerCase()
), Ln = (e) => {
  const r = fl(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, mi = (...e) => e.filter((r, a, o) => !!r && r.trim() !== "" && o.indexOf(r) === a).join(" ").trim(), bl = (e) => {
  for (const r in e)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vl = {
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
const xl = ui(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: o,
    className: i = "",
    children: l,
    iconNode: d,
    ...h
  }, g) => xo(
    "svg",
    {
      ref: g,
      ...vl,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: o ? Number(a) * 24 / Number(r) : a,
      className: mi("lucide", i),
      ...!l && !bl(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...d.map(([p, b]) => xo(p, b)),
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
const F = (e, r) => {
  const a = ui(
    ({ className: o, ...i }, l) => xo(xl, {
      ref: l,
      iconNode: r,
      className: mi(
        `lucide-${yl(Ln(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return a.displayName = Ln(e), a;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], kl = F("album", wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], sa = F("check", Sl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tl = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], hi = F("chevron-down", Tl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], zn = F("chevron-left", _l);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Cl = F("chevron-right", Nl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Al = F("chevron-up", El);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Oa = F("circle-alert", Ml);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ll = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], zl = F("circle-question-mark", Ll);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], gi = F("copy", Il);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], Ut = F("disc-3", Rl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], yi = F("download", Pl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], Ao = F("ellipsis-vertical", jl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], fi = F("external-link", Dl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = [
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
], Ot = F("file-music", Ul);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], $l = F("folder-open", Ol);
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
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], Sr = F("heart", Hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], $a = F("image", Fl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = [
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
], wo = F("layers", Bl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], ql = F("list-music", Wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], oe = F("loader-circle", Jl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], ct = F("mic", Gl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], In = F("monitor-speaker", Vl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], Rn = F("monitor", Yl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], Xl = F("moon", Kl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], Wa = F("music-2", Ql);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], Tr = F("notebook-text", Zl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], At = F("pause", ec);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], bi = F("pencil", tc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Te = F("play", ac);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ko = F("plus", rc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], nc = F("radio", oc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], vi = F("refresh-cw", ic);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], xi = F("repeat-1", sc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], cc = F("repeat", lc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], vt = F("search", dc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], wi = F("settings-2", uc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], Mo = F("shuffle", pc);
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
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], dt = F("sparkles", mc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ki = F("square-check-big", hc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], Si = F("square", gc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], $t = F("trash-2", yc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Lo = F("upload", fc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], vc = F("user-round", bc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], wc = F("volume-2", xc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kc = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], Sc = F("volume-x", kc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = [
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
], Ht = F("wand-sparkles", Tc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _c = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], xe = F("x", _c), Nc = {
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
  "musiccreator.restyle.songsPicker.tooShort": "too short for Restyle (need ≥30 s)",
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
}, Cc = {
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
}, Pn = { en: Nc, es: Cc }, hr = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", Ec = (e, r) => r ? e.replace(/\{(\w+)\}/g, (a, o) => String(r[o] ?? `{${o}}`)) : e;
function Bt() {
  const { host: e } = Ft(), [r, a] = k(() => hr(e.i18n?.locale));
  W(() => e.i18n?.onLocaleChange?.((i) => a(hr(i))), [e]);
  const o = ye(() => (i, l) => {
    const d = e.i18n?.t?.(i, l);
    if (d && d !== i) return d;
    const h = hr(r), g = Pn[h]?.[i] ?? Pn.en[i] ?? i;
    return Ec(g, l);
  }, [e, r]);
  return {
    language: r,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (i) => a(hr(i)),
    installLanguagePack: (i) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (i) => {
    }
  };
}
const Ac = [
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
], Mc = [
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
function Lc({ recipe: e, onUse: r }) {
  const { t: a } = Bt(), [o, i] = k(!1), l = async () => {
    try {
      await navigator.clipboard.writeText(`${e.theme}

Style: ${e.style}`), i(!0), setTimeout(() => i(!1), 1500);
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
              onClick: () => r(e),
              className: "flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all hover:scale-[1.02]",
              style: {
                fontSize: 11,
                fontWeight: 600,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                /* @__PURE__ */ t(Ht, { size: 12 }),
                a("julietaHelp.recipe.use")
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
              title: a("julietaHelp.recipe.copy"),
              children: o ? /* @__PURE__ */ t(sa, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(gi, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function zc({ open: e, onClose: r, onUseRecipe: a }) {
  const { t: o, language: i } = Bt(), [l, d] = k("start");
  if (!e) return null;
  const h = i === "es" ? Mc : Ac;
  return /* @__PURE__ */ t(
    "div",
    {
      className: "absolute inset-0 z-40 flex",
      style: { background: "rgba(0,0,0,0.5)" },
      onClick: r,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: "ml-auto h-full flex flex-col",
          onClick: (g) => g.stopPropagation(),
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
                        children: /* @__PURE__ */ t(Ut, { size: 18, style: { color: "white" } })
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
                      onClick: r,
                      className: "p-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                      style: { color: "var(--text-secondary)" },
                      children: /* @__PURE__ */ t(xe, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1 px-5 pt-3 flex-shrink-0", children: ["start", "recipes", "help"].map((g) => {
              const p = l === g;
              return /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => d(g),
                  className: "px-3 py-1.5 rounded-lg transition-all",
                  style: {
                    fontSize: 11,
                    fontWeight: p ? 600 : 500,
                    color: p ? "var(--text-primary)" : "var(--text-secondary)",
                    background: p ? "var(--bg-titlebar)" : "transparent",
                    border: p ? "1px solid var(--border-subtle)" : "1px solid transparent"
                  },
                  children: o(`julietaHelp.tab.${g}`)
                },
                g
              );
            }) }),
            /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", style: { paddingBottom: 96 }, children: [
              l === "start" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(dt, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(gr, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(gr, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(gr, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(gr, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(Ht, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(oo, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(oo, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(oo, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(ct, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(Ic, { body: o("julietaHelp.start.recorder.body") }),
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
                h.map((g) => /* @__PURE__ */ t(
                  Lc,
                  {
                    recipe: g,
                    onUse: (p) => {
                      a(p.theme, p.style), r();
                    }
                  },
                  g.id
                ))
              ] }),
              l === "help" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(Oa, { size: 14 }), text: o("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.failed.title"), a: o("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.nopod.title"), a: o("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.local.title"), a: o("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(Ht, { size: 14 }), text: o("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.howlong.title"), a: o("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.quota.title"), a: o("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.length.title"), a: o("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.coverlen.title"), a: o("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(ct, { size: 14 }), text: o("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.silentmic.title"), a: o("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.shortrec.title"), a: o("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.privacy.title"), a: o("julietaHelp.help.q.privacy.body") })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function aa({ icon: e, text: r }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: r })
  ] });
}
function gr({ n: e, title: r, body: a }) {
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
      /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: r }),
      /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.5 }, children: a })
    ] })
  ] });
}
function oo({ emoji: e, name: r, body: a }) {
  return /* @__PURE__ */ s(
    "div",
    {
      className: "flex gap-3 p-3 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 22, lineHeight: 1 }, children: e }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: r }),
          /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.5 }, children: a })
        ] })
      ]
    }
  );
}
function Ic({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function st({ q: e, a: r }) {
  const [a, o] = k(!1);
  return /* @__PURE__ */ s(
    "div",
    {
      className: "rounded-lg overflow-hidden",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            onClick: () => o((i) => !i),
            className: "w-full flex items-center gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            children: [
              /* @__PURE__ */ t(
                Cl,
                {
                  size: 12,
                  style: {
                    color: "var(--text-secondary)",
                    transform: a ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.15s"
                  }
                }
              ),
              /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 500, color: "var(--text-primary)", flex: 1 }, children: e })
            ]
          }
        ),
        a && /* @__PURE__ */ t("div", { className: "px-3 pb-3", style: { paddingLeft: 28 }, children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.55, whiteSpace: "pre-line" }, children: r }) })
      ]
    }
  );
}
const no = (e) => {
  const r = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(r.agents) ? r.agents : [],
    included: Array.isArray(r.included) ? r.included : [],
    tiers: [],
    ...r
  };
}, Rc = () => {
  const { host: e } = Ft(), [r, a] = k(0), [o, i] = k(() => no(e.daemon?.state));
  return W(() => (i(no(e.daemon?.state)), e.daemon?.onStateChange?.((l) => i(no(l)))), [e, r]), ye(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => a((l) => l + 1)
  }), [o]);
}, Pc = (e, r) => {
  const { host: a } = Ft();
  W(() => {
    if (!(!r || !a.shellMenu?.register))
      return a.shellMenu.register({
        appId: a.appId,
        groups: r.groups.map((o) => ({
          label: o.label,
          items: o.items.map((i) => ({
            id: i.id,
            label: i.label,
            disabled: i.disabled,
            onClick: i.onSelect
          }))
        }))
      });
  }, [a, r]);
};
function jc() {
  return Ft().host.windows.current;
}
const Ti = "juli3ta_standalone_vfs_v1", _i = () => Math.random().toString(36).slice(2) + Date.now().toString(36), jt = (e, r) => ({
  id: _i(),
  name: e,
  type: "folder",
  parentId: r,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), Dc = () => {
  const e = jt("/", null), r = jt("home", e.id), a = jt("user", r.id), o = jt("Desktop", a.id), i = jt("Music", a.id), l = jt("Documents", a.id);
  return { nodes: Object.fromEntries([e, r, a, o, i, l].map((d) => [d.id, d])) };
}, yr = () => {
  try {
    const r = localStorage.getItem(Ti);
    if (r) return JSON.parse(r);
  } catch {
  }
  const e = Dc();
  return xr(e), e;
}, xr = (e) => {
  try {
    localStorage.setItem(Ti, JSON.stringify(e));
  } catch {
  }
}, Uc = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), Oc = (e) => {
  const r = e.toLowerCase();
  return r.endsWith(".lyrics.txt") ? "NotebookText" : r.endsWith(".mp3") || r.endsWith(".wav") || r.endsWith(".m4a") ? "FileAudio" : r.endsWith(".json") ? "FileJson" : r.endsWith(".txt") || r.endsWith(".md") ? "FileText" : "File";
};
function $c() {
  return {
    ensureUserFolder(r) {
      const a = yr(), o = Uc(r);
      let i = Object.values(a.nodes).find((l) => l.type === "folder" && l.name === o);
      if (!i) {
        const l = Object.values(a.nodes).find((d) => d.type === "folder" && d.name === "user");
        i = jt(o, l?.id ?? null), a.nodes[i.id] = i, xr(a);
      }
      return i.id;
    },
    findChildByName(r, a) {
      const o = yr();
      return Object.values(o.nodes).find((i) => i.parentId === r && i.name === a);
    },
    createFile(r, a, o = "", i = {}) {
      const l = yr(), d = { id: _i(), name: a, type: "file", parentId: r, content: o, mimeType: i.mimeType, refTrackId: i.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return l.nodes[d.id] = d, xr(l), d.id;
    },
    writeFile(r, a) {
      const o = yr();
      o.nodes[r] && (o.nodes[r].content = a, o.nodes[r].modifiedAt = Date.now(), xr(o));
    }
  };
}
const Hc = { theme: { mode: "dark" } }, Fc = ci(null);
function Ni() {
  const e = di(Fc), { host: r } = Ft();
  return ye(() => e || {
    state: Hc,
    dispatch: (a) => {
      if (a.type === "OPEN_OR_FOCUS_WINDOW" && typeof a.appId == "string" && r.windows.openOrFocus(a.appId, a.args), a.type === "ADD_DESKTOP_ICON") {
        const o = a.icon;
        r.windows.addDesktopIcon?.({
          label: o.name,
          iconUrl: o.icon,
          onClick: () => {
          }
        });
      }
    }
  }, [e, r]);
}
function Bc() {
  const { host: e } = Ft();
  return {
    addNotification: (r) => e.notifications.notify({
      appId: r.appId,
      title: r.title,
      body: r.message,
      level: "info",
      unread: r.isRead !== !1
    })
  };
}
const Wc = {
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
}, qc = {
  juli3ta: Wc
};
function zo({ name: e, size: r = 24, className: a, style: o, alt: i, scale: l }) {
  const [d, h = "mark"] = e.split(":"), g = qc[d], { state: p } = Ni();
  let b;
  if (h === "mark" ? b = p.theme.mode === "light" ? g?.["mark-ink"] : g?.["mark-white"] : b = g?.[h], !b) return null;
  const m = i ?? d.charAt(0).toUpperCase() + d.slice(1), f = l ?? b.scale ?? 1;
  return /* @__PURE__ */ t(
    "img",
    {
      src: b.src,
      alt: m,
      width: r,
      height: r,
      style: {
        width: r,
        height: r,
        objectFit: "contain",
        display: "inline-block",
        verticalAlign: "middle",
        userSelect: "none",
        pointerEvents: "none",
        ...f !== 1 ? { transform: `scale(${f})`, transformOrigin: "center" } : null,
        ...b.filter ? { filter: b.filter } : null,
        ...o
      },
      className: a,
      draggable: !1
    }
  );
}
let Ci = null, jn = null;
const io = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), Jc = [
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
function Gc(e) {
  jn = (async () => {
    for (const a of Jc) await e.run(a);
  })();
  const r = async () => jn;
  Ci = {
    exec: async (a) => {
      await r();
      for (const o of io(a).split(";").map((i) => i.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (a, o = []) => (await r(), e.query(io(a), o)),
    run: async (a, o = []) => {
      await r(), await e.run(io(a), o);
    },
    tx: async (a) => (await r(), a())
  };
}
const ne = () => Ci, _r = (e) => ({
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
}), K = (e, r) => new RegExp(`no such column:\\s*${r}`, "i").test(String(e)), Io = (e) => K(e, "specs_json") || K(e, "cover_data_url") || K(e, "theme") || K(e, "source") || K(e, "audio_kind") || K(e, "external_id") || K(e, "external_url") || K(e, "thumbnail_url") || K(e, "artist") || K(e, "album"), Dn = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, Un = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, so = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, Rt = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), Ei = async (e, r, a, o) => {
  if (K(o, "source") || K(o, "audio_kind") || K(o, "external_id") || K(o, "external_url") || K(o, "thumbnail_url") || K(o, "artist") || K(o, "album"))
    try {
      return (await e.query(
        `SELECT ${Dn}, theme FROM music_creator_tracks ${r}`,
        a
      )).map(Rt);
    } catch (i) {
      o = i;
    }
  if (K(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${Dn} FROM music_creator_tracks ${r}`,
        a
      )).map((l) => Rt({ ...l, theme: "" }));
    } catch (i) {
      if (!K(i, "cover_data_url")) throw i;
      try {
        return (await e.query(
          `SELECT ${Un} FROM music_creator_tracks ${r}`,
          a
        )).map((d) => Rt({ ...d, cover_data_url: "", theme: "" }));
      } catch (l) {
        if (!K(l, "specs_json")) throw l;
        return (await e.query(
          `SELECT ${so} FROM music_creator_tracks ${r}`,
          a
        )).map((h) => Rt({ ...h, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (K(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${Un} FROM music_creator_tracks ${r}`,
        a
      )).map((l) => Rt({ ...l, cover_data_url: "", theme: "" }));
    } catch (i) {
      if (!K(i, "specs_json")) throw i;
      return (await e.query(
        `SELECT ${so} FROM music_creator_tracks ${r}`,
        a
      )).map((d) => Rt({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (K(o, "specs_json"))
    return (await e.query(
      `SELECT ${so} FROM music_creator_tracks ${r}`,
      a
    )).map((l) => Rt({ ...l, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, Ai = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, Vc = async () => {
  const e = ne();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${Ai} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(_r);
  } catch (r) {
    if (!Io(r)) throw r;
    return (await Ei(e, "ORDER BY created_at DESC", [], r)).map(_r);
  }
}, Yc = async (e) => {
  const r = ne();
  if (!r) return null;
  try {
    const a = await r.query(
      `SELECT ${Ai} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return a.length === 0 ? null : _r(a[0]);
  } catch (a) {
    if (!Io(a)) throw a;
    const o = await Ei(r, "WHERE id = ? LIMIT 1", [e], a);
    return o.length === 0 ? null : _r(o[0]);
  }
}, Nr = async (e) => {
  const r = ne();
  if (!r) throw new Error("Database not ready");
  const a = [
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
    await r.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
          source, audio_kind, external_id, external_url, thumbnail_url, artist, album)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        ...a,
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
    if (!Io(o)) throw o;
    if (K(o, "source") || K(o, "audio_kind") || K(o, "external_id") || K(o, "external_url") || K(o, "thumbnail_url") || K(o, "artist") || K(o, "album"))
      try {
        await r.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...a, e.specsJson, e.coverDataUrl, e.theme]
        );
        return;
      } catch (i) {
        o = i;
      }
    if (K(o, "theme"))
      try {
        await r.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...a, e.specsJson, e.coverDataUrl]
        );
        return;
      } catch (i) {
        if (!K(i, "cover_data_url")) throw i;
      }
    if (K(o, "cover_data_url"))
      try {
        await r.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...a, e.specsJson]
        );
        return;
      } catch (i) {
        if (!K(i, "specs_json")) throw i;
      }
    await r.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      a
    );
  }
}, Kc = async (e) => {
  const r = ne();
  r && await r.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Xc = async (e, r) => {
  const a = ne();
  if (!a) throw new Error("Database not ready");
  const o = r.trim().slice(0, 200) || "Untitled";
  return await a.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, Qc = async (e, r) => {
  const a = ne();
  if (!a) throw new Error("Database not ready");
  try {
    await a.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [r, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, Zc = async (e, r) => {
  const a = ne();
  if (!a) throw new Error("Database not ready");
  await a.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [r, e]);
}, ed = async (e, r) => {
  const a = ne();
  if (!a) throw new Error("Database not ready");
  await a.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [r, e]);
}, td = async (e, r) => {
  const a = ne();
  if (!a) throw new Error("Database not ready");
  try {
    await a.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [r, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, ad = async (e, r) => {
  const a = ne();
  if (!a) throw new Error("Database not ready");
  try {
    await a.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [r, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, rd = async (e, r) => {
  const a = ne();
  if (!a) return r;
  const o = await a.query(
    "SELECT value FROM music_creator_settings WHERE key = ? LIMIT 1",
    [e]
  );
  if (o.length === 0) return r;
  try {
    return JSON.parse(o[0].value);
  } catch {
    return r;
  }
}, od = async (e, r) => {
  const a = ne();
  a && await a.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(r)]
  );
}, Mi = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, Li = "music_creator_settings", nd = () => rd(Li, Mi), id = (e) => od(Li, e), pt = () => Date.now(), zi = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: e.provider === "youtube" ? "YouTube" : e.provider,
  lyricsPreview: "",
  durationMs: e.duration_ms ?? 0,
  bitrate: 0,
  sampleRate: 0,
  sizeBytes: 0,
  createdAt: e.added_at ?? pt(),
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
}), So = (e) => ({
  id: e.id,
  provider: e.source || "youtube",
  external_id: e.externalId || e.id.replace(/^.+?:/, ""),
  title: e.title || "Untitled",
  artist: e.artist || "",
  album: e.album || "",
  duration_ms: e.durationMs || 0,
  thumbnail_url: e.thumbnailUrl || "",
  external_url: e.externalUrl || "",
  added_at: e.createdAt || pt(),
  last_played_at: 0
}), Ii = [
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
], sd = Ii.join(", "), ld = Ii.map((e) => `t.${e}`).join(", "), cd = async () => {
  const e = ne();
  return e ? (await e.query(
    `SELECT ${sd} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(zi) : [];
}, Ri = async (e) => {
  const r = ne();
  if (!r) throw new Error("Database not ready");
  const a = So(e);
  await r.tx(async () => {
    await r.run(
      `INSERT OR IGNORE INTO music_library_tracks
         (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [a.id, a.provider, a.external_id, a.title, a.artist, a.album, a.duration_ms, a.thumbnail_url, a.external_url, a.added_at, a.last_played_at]
    ), await r.run(
      `UPDATE music_library_tracks
         SET title = ?, artist = ?, album = ?, duration_ms = ?, thumbnail_url = ?, external_url = ?
       WHERE id = ?`,
      [a.title, a.artist, a.album, a.duration_ms, a.thumbnail_url, a.external_url, a.id]
    );
  });
}, dd = async (e) => {
  const r = ne();
  r && await r.tx(async () => {
    await r.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await r.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await r.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, ud = async () => {
  const e = ne();
  if (!e) return 0;
  const r = await e.query(
    `SELECT id, title, duration_ms, created_at, external_id, external_url, thumbnail_url, artist, album
       FROM music_creator_tracks
      WHERE source = 'youtube' AND external_id <> ''`
  );
  for (const a of r)
    await e.run(
      `INSERT OR IGNORE INTO music_library_tracks
         (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
       VALUES (?, 'youtube', ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
      [a.id, a.external_id, a.title, a.artist, a.album, a.duration_ms, a.thumbnail_url, a.external_url, a.created_at]
    );
  return r.length;
}, pd = async (e) => {
  const r = ne();
  return r ? (await r.query(
    "SELECT kind, entity_id, provider, title, created_at FROM music_favorites WHERE kind = ? ORDER BY created_at DESC",
    [e]
  )).map((i) => ({
    kind: i.kind,
    entityId: i.entity_id,
    provider: i.provider,
    title: i.title,
    createdAt: i.created_at
  })) : [];
}, md = async (e) => {
  const r = ne();
  if (!r) throw new Error("Database not ready");
  const a = await r.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(a[0]?.n ?? 0) > 0 ? (await r.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await r.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", pt()]
  ), !0);
}, Ma = async () => {
  const e = ne();
  if (!e) return [];
  const r = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), a = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${ld}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return a.forEach((i) => {
    o.set(i.playlist_id, [...o.get(i.playlist_id) ?? [], zi(i)]);
  }), r.map((i) => ({
    id: i.id,
    name: i.name,
    createdAt: i.created_at,
    updatedAt: i.updated_at,
    items: o.get(i.id) ?? []
  }));
}, hd = async (e) => {
  const r = ne();
  if (!r) throw new Error("Database not ready");
  const a = e.trim().slice(0, 80) || "New Playlist", o = pt(), i = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: a, createdAt: o, updatedAt: o, items: [] };
  return await r.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [i.id, i.name, i.createdAt, i.updatedAt]
  ), i;
}, gd = async (e) => {
  const r = ne();
  r && await r.tx(async () => {
    await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await r.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await r.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, yd = async (e, r) => {
  const a = ne();
  if (!a) throw new Error("Database not ready");
  await a.tx(async () => {
    await Ri(r);
    const o = await a.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), i = Number(o[0]?.n ?? 0);
    await a.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, r.id, i, pt()]
    ), await a.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [pt(), e]);
  });
}, fd = async (e, r) => {
  const a = ne();
  a && (await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, r]), await a.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [pt(), e]));
}, bd = async (e) => {
  const r = ne();
  r && await r.tx(async () => {
    for (const a of e.tracks) {
      const o = So(a);
      await r.run(
        `INSERT OR IGNORE INTO music_library_tracks
           (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
        [o.id, o.provider, o.external_id, o.title, o.artist, o.album, o.duration_ms, o.thumbnail_url, o.external_url, o.added_at]
      ), await r.run(
        `UPDATE music_library_tracks
           SET provider = ?, external_id = ?, title = ?, artist = ?, album = ?, duration_ms = ?, thumbnail_url = ?, external_url = ?
         WHERE id = ?`,
        [o.provider, o.external_id, o.title, o.artist, o.album, o.duration_ms, o.thumbnail_url, o.external_url, o.id]
      );
    }
    for (const a of e.favorites)
      await r.run(
        `INSERT OR IGNORE INTO music_favorites (kind, entity_id, provider, title, created_at)
         VALUES (?, ?, ?, ?, ?)`,
        [a.kind, a.entityId, a.provider, a.title ?? "", a.createdAt ?? pt()]
      ), await r.run(
        "UPDATE music_favorites SET provider = ?, title = ? WHERE kind = ? AND entity_id = ?",
        [a.provider, a.title ?? "", a.kind, a.entityId]
      );
    for (const a of e.playlists) {
      const o = a.createdAt || pt(), i = a.updatedAt || o;
      await r.run(
        "INSERT OR IGNORE INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
        [a.id, a.name || "Playlist", o, i]
      ), await r.run(
        "UPDATE music_playlists SET name = ?, updated_at = ? WHERE id = ?",
        [a.name || "Playlist", i, a.id]
      ), await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [a.id]);
      let l = 0;
      for (const d of a.items) {
        const h = So(d);
        await r.run(
          `INSERT OR IGNORE INTO music_library_tracks
             (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
          [h.id, h.provider, h.external_id, h.title, h.artist, h.album, h.duration_ms, h.thumbnail_url, h.external_url, h.added_at]
        ), await r.run(
          `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
           VALUES (?, ?, ?, ?)`,
          [a.id, d.id, l++, pt()]
        );
      }
    }
  });
}, Pi = "/api/juli3ta/music-state", ji = "juli3ta:musicLibrarySnapshot:v1", et = () => Date.now(), vd = () => ({
  version: 1,
  updatedAt: 0,
  tracks: [],
  favorites: [],
  playlists: []
}), Ro = (e) => !!e && typeof e == "object" && !Array.isArray(e), Po = (e) => {
  if (!Ro(e)) return null;
  const r = String(e.id ?? "").trim();
  if (!r) return null;
  const a = e.source === "juli3ta" ? "juli3ta" : "youtube", o = e.audioKind === "data_url" || e.audioKind === "lyrics_only" ? e.audioKind : "remote_stream";
  return {
    id: r,
    title: String(e.title ?? "Untitled"),
    styleTags: String(e.styleTags ?? (a === "youtube" ? "YouTube" : a)),
    lyricsPreview: String(e.lyricsPreview ?? ""),
    durationMs: Number(e.durationMs ?? 0) || 0,
    bitrate: Number(e.bitrate ?? 0) || 0,
    sampleRate: Number(e.sampleRate ?? 0) || 0,
    sizeBytes: Number(e.sizeBytes ?? 0) || 0,
    createdAt: Number(e.createdAt ?? et()) || et(),
    audioDataUrl: String(e.audioDataUrl ?? ""),
    specsJson: String(e.specsJson ?? ""),
    coverDataUrl: String(e.coverDataUrl ?? ""),
    theme: String(e.theme ?? ""),
    source: a,
    audioKind: o,
    externalId: String(e.externalId ?? ""),
    externalUrl: String(e.externalUrl ?? ""),
    thumbnailUrl: String(e.thumbnailUrl ?? ""),
    artist: String(e.artist ?? ""),
    album: String(e.album ?? "")
  };
}, xd = (e) => {
  if (!Ro(e)) return null;
  const r = e.kind;
  if (r !== "track" && r !== "artist" && r !== "album" && r !== "playlist") return null;
  const a = String(e.entityId ?? "").trim();
  return a ? {
    kind: r,
    entityId: a,
    provider: String(e.provider ?? ""),
    title: String(e.title ?? ""),
    createdAt: Number(e.createdAt ?? et()) || et()
  } : null;
}, Di = (e) => {
  if (!Ro(e)) return null;
  const r = String(e.id ?? "").trim();
  return r ? {
    id: r,
    name: String(e.name ?? "Playlist"),
    createdAt: Number(e.createdAt ?? et()) || et(),
    updatedAt: Number(e.updatedAt ?? e.createdAt ?? et()) || et(),
    items: Array.isArray(e.items) ? e.items.map(Po).filter((a) => !!a) : []
  } : null;
}, la = (e) => e ? {
  version: 1,
  updatedAt: Number(e.updatedAt ?? 0) || 0,
  tracks: Array.isArray(e.tracks) ? e.tracks.map(Po).filter((r) => !!r) : [],
  favorites: Array.isArray(e.favorites) ? e.favorites.map(xd).filter((r) => !!r) : [],
  playlists: Array.isArray(e.playlists) ? e.playlists.map(Di).filter((r) => !!r) : []
} : vd(), On = (e, r) => {
  const a = /* @__PURE__ */ new Map();
  for (const o of [...e, ...r]) {
    const i = a.get(o.id);
    if (!i) {
      a.set(o.id, o);
      continue;
    }
    const l = o.updatedAt ?? o.createdAt ?? 0, d = i.updatedAt ?? i.createdAt ?? 0;
    l >= d && a.set(o.id, o);
  }
  return [...a.values()].sort((o, i) => (i.updatedAt ?? i.createdAt ?? 0) - (o.updatedAt ?? o.createdAt ?? 0));
}, wd = (e, r) => {
  const a = /* @__PURE__ */ new Map();
  for (const o of [...e, ...r]) {
    const i = `${o.kind}:${o.entityId}`, l = a.get(i);
    (!l || (o.createdAt ?? 0) >= (l.createdAt ?? 0)) && a.set(i, o);
  }
  return [...a.values()].sort((o, i) => (i.createdAt ?? 0) - (o.createdAt ?? 0));
}, $n = (e, r) => {
  const a = la(e), o = la(r);
  return {
    version: 1,
    updatedAt: Math.max(a.updatedAt, o.updatedAt, et()),
    tracks: On(o.tracks, a.tracks),
    favorites: wd(o.favorites, a.favorites),
    playlists: On(o.playlists, a.playlists)
  };
}, kd = (e, r, a) => {
  const o = new Map(e.map((i) => [i.id, i]));
  return {
    version: 1,
    updatedAt: et(),
    tracks: e.map((i) => Po(i)).filter((i) => !!i),
    favorites: [...r].map((i) => {
      const l = o.get(i);
      return {
        kind: "track",
        entityId: i,
        provider: l?.source ?? "youtube",
        title: l?.title ?? "",
        createdAt: et()
      };
    }),
    playlists: a.map((i) => Di(i)).filter((i) => !!i)
  };
}, Sd = () => {
  try {
    const e = localStorage.getItem(ji);
    return e ? la(JSON.parse(e)) : null;
  } catch {
    return null;
  }
}, Td = (e) => {
  try {
    localStorage.setItem(ji, JSON.stringify(la(e)));
  } catch {
  }
}, _d = async () => {
  try {
    const e = await fetch(Pi, {
      method: "GET",
      headers: { Accept: "application/json" }
    });
    if (!e.ok) return null;
    const r = await e.json();
    return la(r.state);
  } catch {
    return null;
  }
}, Hn = async (e) => {
  const r = la(e);
  Td(r);
  try {
    await fetch(Pi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": `juli3ta-music-state-${r.updatedAt}-${r.tracks.length}-${r.favorites.length}`
      },
      body: JSON.stringify({ state: r })
    });
  } catch {
  }
}, Nd = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), Fn = async () => {
  const e = ne();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(Nd) : [];
}, Ui = async (e) => {
  const r = ne();
  if (!r) throw new Error("Database not ready");
  await r.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, lo = "tytus.voice-recorder.recordings", Cd = async () => {
  try {
    const e = localStorage.getItem(lo);
    if (!e) return;
    const r = JSON.parse(e);
    if (!Array.isArray(r)) {
      localStorage.removeItem(lo);
      return;
    }
    for (const a of r)
      if (!(!a?.id || typeof a.audioDataUrl != "string"))
        try {
          await Ui({
            id: a.id,
            name: a.name ?? "Untitled recording",
            durationMs: a.durationMs ?? 0,
            createdAt: a.createdAt ?? Date.now(),
            mimeType: a.mimeType ?? "audio/webm",
            audioDataUrl: a.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(lo);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, Ed = (e, r) => e._value, Ad = "http://localhost:18080/v1", Md = "sk-test-123", Ld = (e) => /\/v1\/?$/i.test(e), Oi = (e) => typeof e == "object" && e !== null, zd = (e) => typeof e == "string" ? e : Oi(e) && typeof e._value == "string" ? Ed(e) : "", co = (...e) => {
  for (const r of e)
    if (typeof r == "string" && r.trim()) return r;
  return null;
}, Bn = (e) => {
  const r = e?.trim();
  if (!r) return null;
  const a = r.replace(/\/+$/, "");
  return Ld(a) ? a : `${a}/v1`;
}, uo = (e, r, a) => {
  r.has(a.url) || (r.add(a.url), e.push(a));
}, Id = (e) => {
  const r = [], a = /* @__PURE__ */ new Set();
  for (const o of e) {
    const i = o, l = Oi(i.meta) ? i.meta : {}, d = zd(
      i.user_key ?? i.userKey ?? i.api_key ?? i.apiKey ?? l.userKey ?? l.gatewayKey ?? l.apiKey ?? l.api_key
    );
    if (!d) continue;
    const h = co(i.pod_id, i.podId, i.id) || "included", g = Bn(
      co(i.public_url, i.publicUrl, i.gatewayUrl, l.gatewayUrl, l.publicUrl)
    );
    g && uo(r, a, {
      url: g,
      apiKey: d,
      podId: `${h}:remote`,
      source: "included",
      label: `AIL gateway ${h} (remote)`,
      proxyPodId: h
    });
    const p = Bn(
      co(i.endpoint, i.private_url, i.privateUrl, l.endpoint, l.privateUrl)
    );
    p && uo(r, a, {
      url: p,
      apiKey: d,
      podId: `${h}:tunnel`,
      source: "included",
      label: `AIL gateway ${h} (tunnel)`,
      proxyPodId: h
    });
  }
  return uo(r, a, {
    url: Ad,
    apiKey: Md,
    podId: "local",
    source: "local",
    label: "Local AIL"
  }), r;
}, jo = 100, Do = 60, ia = 6, Ha = 90, Rd = 24e3, Pd = 0.92, jd = 3, Dd = 0.05, Wn = 20, Ud = 3, Od = 0.35, $d = 0.55, Hd = (e) => typeof e == "number" ? { targetSec: e, fastRemote: !1 } : {
  targetSec: e?.targetSec ?? Do,
  fastRemote: e?.fastRemote ?? !1,
  signal: e?.signal,
  onProgress: e?.onProgress
}, fe = (e, r, a, o) => {
  e?.onProgress?.({
    stage: r,
    progress: Math.max(0, Math.min(1, a)),
    message: o
  });
}, Fd = (e) => /^https?:\/\//i.test(e), Bd = (e) => {
  const r = [e];
  try {
    const a = e.split("/api/music/proxy/")[1];
    a && r.push(decodeURIComponent(a));
  } catch {
  }
  for (const a of r)
    try {
      const o = new URL(a), i = Number(o.searchParams.get("dur") || o.searchParams.get("duration"));
      if (Number.isFinite(i) && i > 0) return { durationSec: i };
    } catch {
    }
  return {};
}, Wd = async (e, r, a) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((d) => MediaRecorder.isTypeSupported(d));
  if (!o)
    throw new Error("No supported recorder mime type for fallback.");
  const i = URL.createObjectURL(e), l = new Audio();
  l.src = i, l.muted = !0, l.crossOrigin = "anonymous", l.preload = "auto";
  try {
    await new Promise((x, N) => {
      const _ = () => x(), E = () => N(new Error("Audio element rejected the source format too — browser cannot play it."));
      l.addEventListener("canplay", _, { once: !0 }), l.addEventListener("error", E, { once: !0 }), l.load();
    });
    const d = r.createMediaElementSource(l), h = r.createMediaStreamDestination();
    d.connect(h);
    const g = new MediaRecorder(h.stream, { mimeType: o }), p = [];
    g.ondataavailable = (x) => {
      x.data.size > 0 && p.push(x.data);
    };
    const b = Math.max(
      6e3,
      Math.min(a, l.duration || a) * 1e3
    ), m = new Promise((x) => {
      g.onstop = () => x();
    });
    g.start(250), l.currentTime = 0, await l.play(), await new Promise((x) => setTimeout(x, b)), g.stop(), l.pause(), await m;
    const f = new Blob(p, { type: o });
    if (f.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const v = await f.arrayBuffer();
    return await r.decodeAudioData(v);
  } finally {
    URL.revokeObjectURL(i);
  }
}, $i = async (e, r = 35, a = !0, o) => {
  const i = window.AudioContext || window.webkitAudioContext, l = new i();
  try {
    const d = await e.arrayBuffer();
    try {
      return await l.decodeAudioData(d.slice(0));
    } catch (h) {
      if (!a) throw h;
      try {
        return fe(o, "capturing", 0.32, "Browser decoder needs compatibility capture…"), await Wd(e, l, r);
      } catch (g) {
        const p = h.message || "decodeAudioData failed", b = g.message || "fallback failed";
        throw new Error(
          `Audio format isn't supported by this browser (${p}). Compatibility-mode capture also failed: ${b}`
        );
      }
    }
  } finally {
    l.close().catch(() => {
    });
  }
}, Hi = async (e, r) => {
  const a = await fetch(e, { signal: r?.signal });
  if (!a.ok) throw new Error(`Could not load audio (${a.status}).`);
  return a.blob();
}, po = (e, r, a, o = 12e3) => new Promise((i, l) => {
  let d = null;
  const h = () => {
    e.removeEventListener(r, g), e.removeEventListener("error", p), a?.removeEventListener("abort", b), d && clearTimeout(d);
  }, g = () => {
    h(), i();
  }, p = () => {
    h(), l(new Error("Browser media element rejected the streamed audio."));
  }, b = () => {
    h(), l(new DOMException("Reference extraction was cancelled.", "AbortError"));
  };
  e.addEventListener(r, g, { once: !0 }), e.addEventListener("error", p, { once: !0 }), a?.addEventListener("abort", b, { once: !0 }), d = setTimeout(() => {
    h(), l(new Error(`Timed out waiting for audio ${String(r)}.`));
  }, o);
}), qd = async (e, r, a) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable for fast streamed reference capture.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((f) => MediaRecorder.isTypeSupported(f));
  if (!o) throw new Error("No supported recorder mime type for fast streamed reference capture.");
  const i = Bd(e), l = Math.max(ia, Math.min(Ha, r + 2)), d = i.durationSec, h = d ? Math.max(0, Math.min(d - l, d * $d - l / 2)) : 0;
  fe(a, "loading", 0.08, "Opening streamed audio without downloading the full song…");
  const g = window.AudioContext || window.webkitAudioContext, p = new g(), b = new Audio();
  b.crossOrigin = "anonymous", b.preload = "auto", b.src = e;
  let m = null;
  try {
    await po(b, "canplay", a.signal, 15e3), h > 0 && Number.isFinite(b.duration) ? (fe(a, "loading", 0.15, `Seeking to ${Math.floor(h / 60)}:${Math.floor(h % 60).toString().padStart(2, "0")}…`), b.currentTime = h, await po(b, "seeked", a.signal, 12e3)) : h > 0 && (b.currentTime = h, await Promise.race([
      po(b, "seeked", a.signal, 12e3),
      new Promise((P) => setTimeout(P, 1200))
    ]));
    const f = p.createMediaElementSource(b), v = p.createMediaStreamDestination();
    f.connect(v);
    const x = new MediaRecorder(v.stream, { mimeType: o }), N = [];
    x.ondataavailable = (P) => {
      P.data.size > 0 && N.push(P.data);
    };
    const _ = new Promise((P) => {
      x.onstop = () => P();
    }), E = performance.now();
    m = setInterval(() => {
      const P = (performance.now() - E) / 1e3;
      fe(
        a,
        "capturing",
        0.18 + 0.52 * Math.min(1, P / l),
        `Capturing ${l.toFixed(0)} s cover reference…`
      );
    }, 250), fe(a, "capturing", 0.18, `Capturing ${l.toFixed(0)} s cover reference…`), x.start(250), await p.resume().catch(() => {
    }), await b.play(), await new Promise((P, T) => {
      const A = setTimeout(P, l * 1e3), I = () => {
        clearTimeout(A), T(new DOMException("Reference extraction was cancelled.", "AbortError"));
      };
      a.signal?.addEventListener("abort", I, { once: !0 });
    }), x.stop(), b.pause(), await _, m && clearInterval(m), m = null;
    const C = new Blob(N, { type: o });
    if (C.size === 0) throw new Error("Fast streamed capture produced no audio.");
    fe(a, "decoding", 0.75, "Decoding cover reference…");
    const S = await C.arrayBuffer();
    return {
      buffer: await p.decodeAudioData(S),
      sourceOffsetSec: h,
      sourceDurationSec: d || (Number.isFinite(b.duration) ? b.duration : void 0)
    };
  } finally {
    m && clearInterval(m), b.pause(), b.removeAttribute("src"), b.load(), p.close().catch(() => {
    });
  }
}, To = (e) => new Promise((r, a) => {
  const o = new FileReader();
  o.onload = () => {
    const i = typeof o.result == "string" ? o.result : "", l = i.indexOf("base64,");
    r(l >= 0 ? i.slice(l + 7) : "");
  }, o.onerror = () => a(o.error), o.readAsDataURL(e);
}), Jd = (e) => {
  const r = e.sampleRate, a = Math.max(1, Math.floor(r * jo / 1e3)), o = Math.floor(e.length / a), i = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const h = d * a;
    let g = 0;
    for (let p = 0; p < a; p++) {
      let b = 0;
      for (let m = 0; m < l.length; m++) b += l[m][h + p];
      b /= l.length, g += b * b;
    }
    i[d] = Math.sqrt(g / a);
  }
  return i;
}, Gd = (e) => {
  const r = e.sampleRate, a = Math.max(1, Math.floor(r * jo / 1e3)), o = Math.floor(e.length / a), i = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const h = d * a;
    let g = 0, p = 0;
    for (let b = 0; b < l.length; b++) p += l[b][h];
    p /= l.length;
    for (let b = 1; b < a; b++) {
      let m = 0;
      for (let f = 0; f < l.length; f++) m += l[f][h + b];
      m /= l.length, (p > 1e-3 && m < -1e-3 || p < -1e-3 && m > 1e-3) && g++, p = m;
    }
    i[d] = g / (a / 2);
  }
  return i;
}, Fi = (e) => {
  const r = Jd(e), a = Gd(e);
  return { rms: r, centroid: a, framesPerSec: 1e3 / jo };
}, Vd = (e, r = 4) => {
  let a = 0;
  for (let g = 0; g < e.length; g++) a += e[g];
  const o = a / e.length;
  let i = 0;
  for (let g = 0; g < e.length; g++) i += (e[g] - o) ** 2;
  const l = Math.sqrt(i / e.length) || 1, d = Math.floor(e.length / r), h = new Float32Array(d);
  for (let g = 0; g < d; g++) {
    let p = 0;
    for (let b = 0; b < r; b++) p += e[g * r + b];
    h[g] = (p / r - o) / l;
  }
  return h;
}, Yd = (e, r, a) => {
  if (r + a >= e.length) return 0;
  const o = Math.max(1, Math.floor(a / 4));
  let i = -1 / 0, l = 0;
  for (let g = 0; g + a < e.length; g += o) {
    if (Math.abs(g - r) < a) continue;
    let p = 0;
    for (let b = 0; b < a; b++)
      p += e[r + b] * e[g + b];
    p /= a, p > i && (i = p), p > 0.5 && l++;
  }
  const d = Math.max(0, Math.min(1, (i + 1) / 2)), h = Math.min(1, l / 6);
  return 0.6 * d + 0.4 * h;
}, Bi = (e, r) => {
  const a = Math.max(1, Math.floor(r * e.framesPerSec));
  if (e.rms.length <= a) return [];
  const o = Vd(e.rms, 4), i = e.rms.length / o.length, l = Math.max(1, Math.floor(a / i));
  let d = 0, h = 0, g = 0;
  for (let f = 0; f < a; f++)
    d += e.rms[f], h += e.rms[f] * e.rms[f], g += e.centroid[f];
  const p = [], b = Math.max(1, Math.floor(e.framesPerSec)), m = (f) => {
    const v = d / a, x = Math.max(0, h / a - v * v), N = Math.sqrt(x), _ = g / a, E = Math.floor(f / i), C = Yd(o, E, l), S = 0.45 * Math.min(1, v * 4) + 0.2 * _ + 0.25 * C - 0.1 * Math.min(1, N * 6);
    p.push({
      startFrame: f,
      lenFrames: a,
      score: S,
      meanRms: v,
      stdRms: N,
      meanBright: _,
      selfSim: C
    });
  };
  m(0);
  for (let f = a; f < e.rms.length; f += b) {
    for (let v = 0; v < b && f - b + v < e.rms.length; v++) {
      const x = f - a - b + v + 1, N = f - b + v + 1;
      if (N >= e.rms.length) break;
      x >= 0 && (d -= e.rms[x], h -= e.rms[x] * e.rms[x], g -= e.centroid[x]), d += e.rms[N], h += e.rms[N] * e.rms[N], g += e.centroid[N];
    }
    m(f - a + b);
  }
  return p;
}, _o = (e, r, a) => {
  const o = new Float32Array(a), i = [];
  for (let l = 0; l < e.numberOfChannels; l++) i.push(e.getChannelData(l));
  for (let l = 0; l < a; l++) {
    let d = 0;
    for (let h = 0; h < i.length; h++) d += i[h][r + l] || 0;
    o[l] = d / i.length;
  }
  return o;
}, Kd = (e, r, a) => {
  if (a >= r) return e;
  const o = r / a, i = Math.max(1, Math.floor(e.length / o)), l = new Float32Array(i);
  for (let d = 0; d < i; d++) {
    const h = d * o, g = Math.floor(h), p = Math.min(e.length - 1, g + 1), b = h - g;
    l[d] = e[g] * (1 - b) + e[p] * b;
  }
  return l;
}, Xd = (e, r) => {
  const i = r * 1 * 2, l = 1 * (16 / 8), d = e.length * 2, h = new ArrayBuffer(44 + d), g = new DataView(h);
  let p = 0;
  const b = (v) => {
    for (let x = 0; x < v.length; x++) g.setUint8(p++, v.charCodeAt(x));
  }, m = (v) => {
    g.setUint32(p, v, !0), p += 4;
  }, f = (v) => {
    g.setUint16(p, v, !0), p += 2;
  };
  b("RIFF"), m(36 + d), b("WAVE"), b("fmt "), m(16), f(1), f(1), m(r), m(i), f(l), f(16), b("data"), m(d);
  for (let v = 0; v < e.length; v++) {
    const x = Math.max(-1, Math.min(1, e[v]));
    g.setInt16(p, x < 0 ? x * 32768 : x * 32767, !0), p += 2;
  }
  return new Blob([h], { type: "audio/wav" });
}, Qd = (e, r) => {
  const a = new Float32Array(e);
  let o = 0;
  for (let l = 0; l < a.length; l++) o = Math.max(o, Math.abs(a[l]));
  if (o > 1e-4) {
    const l = Math.min(Pd / o, jd);
    for (let d = 0; d < a.length; d++) a[d] *= l;
  }
  const i = Math.min(Math.floor(r * Dd), Math.floor(a.length / 2));
  for (let l = 0; l < i; l++) {
    const d = l / Math.max(1, i);
    a[l] *= d, a[a.length - 1 - l] *= d;
  }
  return a;
}, No = (e, r) => {
  const a = Math.min(r, Rd), o = Qd(e, r), i = Kd(o, r, a);
  return Xd(i, a);
}, qn = async (e, r, a, o = 0, i) => {
  const l = e.length / e.sampleRate, d = i ?? l;
  if (l < ia)
    throw new Error(`Source is too short (${l.toFixed(1)} s). Need at least ${ia} s.`);
  const h = Math.min(Ha, Math.max(ia, r));
  if (l <= h) {
    fe(a, "encoding", 0.88, "Encoding cover-ready reference…");
    const _ = _o(e, 0, e.length), E = No(_, e.sampleRate), C = await To(E);
    return fe(a, "done", 1, "Reference sample ready."), { base64: C, durationSec: l, startSec: o, sourceDurationSec: d, score: 1 };
  }
  fe(a, "analyzing", 0.78, "Analyzing loudness and musical shape…");
  const g = Fi(e), p = Bi(g, h);
  if (p.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  p.sort((_, E) => E.score - _.score);
  const b = p[0], m = Math.floor(b.startFrame / g.framesPerSec * e.sampleRate), f = Math.floor(b.lenFrames / g.framesPerSec * e.sampleRate);
  fe(a, "encoding", 0.9, "Encoding cover-ready reference…");
  const v = _o(e, m, f), x = No(v, e.sampleRate), N = await To(x);
  return fe(a, "done", 1, "Reference sample ready."), {
    base64: N,
    durationSec: f / e.sampleRate,
    startSec: o + m / e.sampleRate,
    sourceDurationSec: d,
    score: Math.max(0, Math.min(1, b.score))
  };
}, Wi = async (e, r = Do) => {
  const a = Hd(r), o = Math.min(Ha, Math.max(ia, a.targetSec));
  if (typeof e == "string" && a.fastRemote && Fd(e))
    try {
      const d = await qd(e, o, a);
      return await qn(
        d.buffer,
        o,
        a,
        d.sourceOffsetSec,
        d.sourceDurationSec
      );
    } catch (d) {
      if (d.name === "AbortError") throw d;
      fe(a, "loading", 0.08, "Fast streamed capture failed — falling back to full decode…");
    }
  fe(a, "loading", 0.08, "Loading reference audio…");
  const i = typeof e == "string" ? await Hi(e, a) : e;
  fe(a, "decoding", 0.28, "Decoding reference audio…");
  const l = await $i(i, Ha + 5, !0, a);
  return await qn(l, o, a);
}, Zd = (e, r, a) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(a * r);
  let i = 0;
  for (const h of e) i += h.length;
  i -= o * (e.length - 1);
  const l = new Float32Array(i);
  let d = 0;
  l.set(e[0], 0), d = e[0].length - o;
  for (let h = 1; h < e.length; h++) {
    const g = e[h];
    for (let p = 0; p < o; p++) {
      const b = p / o;
      l[d + p] = l[d + p] * (1 - b) + g[p] * b;
    }
    for (let p = o; p < g.length; p++)
      l[d + p] = g[p];
    d += g.length - o;
  }
  return l;
}, eu = (e, r, a) => {
  const o = [...e].sort((l, d) => d.score - l.score), i = [];
  for (const l of o)
    if (i.some(
      (h) => Math.abs(h.startFrame - l.startFrame) < Math.max(h.lenFrames, l.lenFrames) + a
    ) || i.push(l), i.length >= r) break;
  return i.sort((l, d) => l.startFrame - d.startFrame), i;
}, tu = async (e, r = {}) => {
  fe(r, "loading", 0.08, "Loading reference audio…");
  const a = typeof e == "string" ? await Hi(e, r) : e;
  fe(r, "decoding", 0.28, "Decoding reference audio…");
  const o = await $i(a, Ha + 5, !0, r), i = o.length / o.sampleRate;
  if (i < ia * 2) {
    const x = await Wi(a, { ...r, targetSec: Do });
    return {
      base64: x.base64,
      durationSec: x.durationSec,
      segments: [{ startSec: x.startSec, endSec: x.startSec + x.durationSec, score: x.score }],
      sourceDurationSec: i
    };
  }
  fe(r, "analyzing", 0.68, "Finding iconic moments…");
  const l = Fi(o), d = Bi(l, Wn);
  if (d.length === 0)
    throw new Error("Could not analyze the audio.");
  const h = Math.max(
    Math.floor(Wn * l.framesPerSec * 0.5),
    Math.floor(l.rms.length / 4)
  ), g = eu(d, Ud, h), p = g.map((x) => {
    const N = Math.floor(x.startFrame / l.framesPerSec * o.sampleRate), _ = Math.floor(x.lenFrames / l.framesPerSec * o.sampleRate);
    return _o(o, N, _);
  }), b = Zd(p, o.sampleRate, Od);
  fe(r, "encoding", 0.9, "Encoding cover-ready reference mix…");
  const m = No(b, o.sampleRate), f = await To(m);
  fe(r, "done", 1, "Reference sample ready.");
  const v = g.map((x) => ({
    startSec: x.startFrame / l.framesPerSec,
    endSec: (x.startFrame + x.lenFrames) / l.framesPerSec,
    score: Math.max(0, Math.min(1, x.score))
  }));
  return {
    base64: f,
    durationSec: b.length / o.sampleRate,
    segments: v,
    sourceDurationSec: i
  };
};
class qi extends Error {
  status;
  code;
  constructor(r, a, o) {
    super(o), this.name = "MusicDaemonError", this.status = r, this.code = a;
  }
}
const ua = async (e, r) => {
  const a = await fetch(e, {
    method: "GET",
    headers: { Accept: "application/json" },
    credentials: "same-origin",
    signal: r
  });
  let o = null;
  try {
    o = await a.json();
  } catch {
    o = null;
  }
  if (!a.ok) {
    const i = o, l = typeof i?.error == "string" ? i.error : `http_${a.status}`;
    throw new qi(a.status, l, l === "music_unavailable" ? "Music search is still starting up." : l);
  }
  return o;
}, Ji = async (e, r, a) => {
  const o = await fetch(e, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json", "Sec-Fetch-Site": "same-origin" },
    credentials: "same-origin",
    body: JSON.stringify(r),
    signal: a
  });
  let i = null;
  try {
    i = await o.json();
  } catch {
    i = null;
  }
  if (!o.ok) {
    const l = i, d = typeof l?.error == "string" ? l.error : `http_${o.status}`;
    throw new qi(o.status, d, d);
  }
  return i;
}, au = (e) => ua("/api/music/status", e), Jn = async (e) => (await ua("/api/music/providers", e)).providers ?? [], Gn = async (e) => (await ua("/api/music/connectors", e)).connectors ?? [], ru = (e, r, a) => Ji("/api/music/connectors/configure", { provider: e, credentials: r }, a), ou = (e, r) => Ji("/api/music/connectors/disconnect", { provider: e }, r), nu = async (e, r = 20, a) => {
  const o = new URLSearchParams({ q: e, limit: String(r) });
  return (await ua(`/api/music/search?${o.toString()}`, a)).results ?? [];
}, iu = (e, r = "tracks,albums,artists,playlists", a = 20, o) => {
  const i = new URLSearchParams({ q: e, types: r, provider: "auto", limit: String(a) });
  return ua(`/api/music/search2?${i.toString()}`, o);
}, Vn = (e, r) => {
  const a = new URLSearchParams({ videoId: e });
  return ua(`/api/music/stream?${a.toString()}`, r);
}, Mr = async (e, r) => {
  const a = await fetch(e, {
    ...r,
    headers: {
      ...r?.body ? { "Content-Type": "application/json" } : {},
      ...r?.headers ?? {}
    }
  }), o = await a.text();
  let i = null;
  try {
    i = o ? JSON.parse(o) : null;
  } catch {
    i = o;
  }
  if (!a.ok) {
    const l = typeof i == "object" && i && "error" in i ? String(i.error) : o || a.statusText;
    throw new Error(l);
  }
  return i;
}, mo = async () => Mr("/api/juli3ta/library/tracks"), Yn = async (e) => (await Mr(
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
)).track, su = async (e) => {
  await Mr("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, lu = async () => (await Mr("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, wr = "0.3.22", Ua = "application/x-juli3ta-track", fr = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", Co = (e) => e.source !== "youtube", La = (...e) => {
  const r = /* @__PURE__ */ new Map();
  for (const a of e)
    for (const o of a)
      r.has(o.id) || r.set(o.id, o);
  return Array.from(r.values()).sort((a, o) => o.createdAt - a.createdAt);
}, cu = (e) => Co(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), Dt = [
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
], du = Dt.flatMap((e) => e.chips), uu = ["very_slow", "slow", "medium", "fast", "very_fast"], pu = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], mu = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], hu = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], gu = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], yu = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], fu = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], bu = ["narrow", "medium", "wide"], vu = ["none", "gradual", "sudden"], xu = ["low", "medium", "high"], wu = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], ku = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], Su = ["male", "female", "mixed", "other", "none"], Tu = [
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
], _u = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], Nu = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], Cu = [
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
], Eu = [
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
], Au = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], re = (e) => e.replace(/_/g, " "), Mu = (e, r, a) => {
  const o = (l) => l.trim().replace(/^[-••\d.)(]+\s*/, "").trim(), i = (l, d) => o(l).split(/\s+/).slice(0, d).join(" ");
  if (e) {
    const l = e.split(`
`).map((d) => d.trim()).find((d) => d && !d.startsWith("[") && !d.startsWith("(") && d.split(/\s+/).length >= 3);
    if (l) {
      const d = i(l, 6).replace(/[,.!?;:—-]+$/, "").trim();
      if (d.length >= 3) return d;
    }
  }
  if (r.trim()) {
    const l = i(r, 6).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  if (a.trim()) {
    const l = i(a, 4).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  return "Untitled";
}, Lu = (e) => {
  if (!e) return "";
  const r = e.replace(/\.[a-z0-9]{2,5}$/i, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return r.length >= 3 ? r : "";
}, zu = (e) => {
  let a = e.replace(/\s+/g, " ").trim() || "Polished modern cover, clear vocals, tight rhythm, high-quality mix";
  if (a.length < 10 && (a = `${a}, style cover, polished music production`.replace(/^,\s*/, "")), a.length <= 300) return a;
  const o = a.slice(0, 300).replace(/\s+\S*$/, "").trim();
  return o.length >= 10 ? o : a.slice(0, 300);
}, Uo = (e) => {
  const r = [], a = [];
  if (e.structure?.tempo_bpm ? a.push(`${e.structure.tempo_bpm} BPM`) : e.structure?.tempo_class && a.push(`${re(e.structure.tempo_class)} tempo`), e.structure?.time_signature && e.structure.time_signature !== "other" && a.push(`${e.structure.time_signature} time`), e.structure?.rhythm_feel && a.push(`${e.structure.rhythm_feel} feel`), e.structure?.groove_pattern && a.push(`${re(e.structure.groove_pattern)} groove`), e.structure?.song_form && a.push(`${re(e.structure.song_form)} form`), e.structure?.length_seconds && a.push(`~${e.structure.length_seconds}s`), a.length && r.push(a.join(", ")), e.tonal?.key) {
    const l = e.tonal.mode ? `${e.tonal.key} ${e.tonal.mode}` : e.tonal.key;
    r.push(`Key: ${l}`);
  }
  if (e.instrumentation?.primary_instruments?.length && r.push(`Instruments: ${e.instrumentation.primary_instruments.map(re).join(", ")}`), e.instrumentation?.has_vocals === !1)
    r.push("Instrumental, no vocals");
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const l = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && l.push(e.instrumentation.vocal_gender), e.instrumentation.vocal_style?.length ? l.push(e.instrumentation.vocal_style.map(re).join("/")) : l.length === 0 && l.push("vocals");
    let d = l.join(" ");
    e.instrumentation.vocal_processing?.length && (d += ` with ${e.instrumentation.vocal_processing.map(re).join(" + ")}`), r.push(d);
  }
  e.instrumentation?.language_iso639_1 && r.push(`Language: ${e.instrumentation.language_iso639_1}`);
  const o = [];
  e.dynamics?.overall_dynamic_range && o.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && o.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && o.push("big drops"), o.length && r.push(o.join(", ")), e.mood?.primary_moods?.length && r.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && r.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && r.push(`For: ${e.mood.occasion_tags.map(re).join(", ")}`);
  const i = [];
  return e.context?.era_reference && i.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && i.push(`${re(e.context.cultural_region)} scene`), e.context?.intended_use?.length && i.push(`use: ${e.context.intended_use.map(re).join("/")}`), e.context?.explicit_lyrics && i.push("explicit lyrics"), i.length && r.push(i.join(", ")), r.join(". ");
}, Iu = [
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
], Kn = "tytus.music-creator.gallery", Xn = "tytus.music-creator", ho = "gallery", ra = 3500, Qn = 1e3, Ru = 2e3, bt = 30, Zn = 45, We = (e) => {
  const r = Math.floor(e / 1e3), a = Math.floor(r / 60), o = r % 60;
  return `${a}:${o.toString().padStart(2, "0")}`;
}, Fa = (e) => {
  if (!e) return "";
  const r = "base64,", a = e.indexOf(r);
  return (a >= 0 ? e.slice(a + r.length) : e).replace(/\s+/g, "");
}, Pu = (e) => {
  if (!e) return null;
  const r = "base64,", a = e.indexOf(r);
  if (a >= 0) return Fa(e.slice(a + r.length)) || null;
  const o = Fa(e);
  return /^[A-Za-z0-9+/=]+$/.test(o) ? o : null;
}, ju = (e, r = "audio/wav") => {
  const a = Fa(e), o = atob(a), i = new Uint8Array(o.length);
  for (let l = 0; l < o.length; l++) i[l] = o.charCodeAt(l);
  return new Blob([i], { type: r });
}, Du = (e) => {
  const r = new Uint8Array(e), a = 32768;
  let o = "";
  for (let i = 0; i < r.length; i += a) {
    const l = r.subarray(i, i + a);
    o += String.fromCharCode(...l);
  }
  return btoa(o);
}, Cr = (e) => {
  try {
    const r = Fa(e), a = r.endsWith("==") ? 2 : r.endsWith("=") ? 1 : 0, o = Math.max(0, Math.floor(r.length * 3 / 4) - a), i = atob(r.slice(0, Math.min(r.length, 4096)));
    if (i.length < 44 || i.slice(0, 4) !== "RIFF" || i.slice(8, 12) !== "WAVE") return null;
    const l = new Uint8Array(i.length);
    for (let m = 0; m < i.length; m++) l[m] = i.charCodeAt(m);
    const d = new DataView(l.buffer);
    let h = 12, g = 0, p = 0, b = 0;
    for (; h + 8 <= l.length; ) {
      const m = String.fromCharCode(l[h], l[h + 1], l[h + 2], l[h + 3]), f = d.getUint32(h + 4, !0), v = h + 8;
      if (m === "fmt " && v + 16 <= l.length)
        g = d.getUint32(v + 4, !0), p = d.getUint16(v + 12, !0);
      else if (m === "data") {
        b = f === 4294967295 || v + f > o ? Math.max(0, o - v) : f;
        break;
      }
      h = v + f + f % 2;
    }
    return !g || !p || !b ? null : b / (g * p) * 1e3;
  } catch {
    return null;
  }
}, Oo = (e) => e.source === "youtube" && !!e.externalId, Ce = (e) => !!e.audioDataUrl || Oo(e), Lr = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? Er(e.externalId) : ""), Er = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", Gi = (e, r) => {
  const a = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = a.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (r || "").trim(), song: a || "Untitled" };
}, za = (e) => `youtube:${e}`, Uu = async () => {
  const e = (r) => ({
    id: r.id ?? `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    title: r.title ?? "Untitled",
    styleTags: r.styleTags ?? "",
    lyricsPreview: r.lyricsPreview ?? "",
    durationMs: r.durationMs ?? 0,
    bitrate: r.bitrate ?? 0,
    sampleRate: r.sampleRate ?? 0,
    sizeBytes: r.sizeBytes ?? 0,
    createdAt: r.createdAt ?? Date.now(),
    audioDataUrl: r.audioDataUrl ?? "",
    specsJson: r.specsJson ?? "",
    coverDataUrl: r.coverDataUrl ?? "",
    theme: r.theme ?? "",
    source: r.source ?? "juli3ta",
    audioKind: r.audioKind ?? (r.audioDataUrl ? "data_url" : "lyrics_only"),
    externalId: r.externalId ?? "",
    externalUrl: r.externalUrl ?? "",
    thumbnailUrl: r.thumbnailUrl ?? "",
    artist: r.artist ?? "",
    album: r.album ?? ""
  });
  try {
    const r = localStorage.getItem(Kn);
    if (r) {
      const a = JSON.parse(r);
      if (Array.isArray(a))
        for (const o of a)
          try {
            await Nr(e(o));
          } catch {
          }
      localStorage.removeItem(Kn);
    }
  } catch (r) {
    console.warn("Legacy localStorage gallery migration failed:", r);
  }
  try {
    const r = await new Promise((a) => {
      const o = indexedDB.open(Xn);
      o.onsuccess = () => {
        const i = o.result;
        if (!i.objectStoreNames.contains(ho)) {
          i.close(), a([]);
          return;
        }
        const d = i.transaction(ho, "readonly").objectStore(ho).getAll();
        d.onsuccess = () => {
          i.close(), a(d.result ?? []);
        }, d.onerror = () => {
          i.close(), a([]);
        };
      }, o.onerror = () => a([]);
    });
    for (const a of r)
      try {
        await Nr(e(a));
      } catch {
      }
    r.length > 0 && indexedDB.deleteDatabase(Xn);
  } catch (r) {
    console.warn("Legacy IDB gallery migration failed:", r);
  }
}, Da = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, Ou = (e, r) => Id(r).map((a) => ({
  ...a,
  models: Da
})), $u = (e) => {
  const r = (m, f) => {
    const v = m.map((x) => x.toLowerCase());
    for (const x of f) {
      const N = v.findIndex((_) => x.test(_));
      if (N >= 0) return m[N];
    }
    return null;
  }, a = r(e, [
    /(^|[/:])minimax:music-cover$/,
    /(^|[/:])ail-music-cover$/,
    /music[-_:]cover/,
    /cover.*music/
  ]), o = r(e, [
    /(^|[/:])minimax:music-lyrics$/,
    /(^|[/:])ail-music-lyrics$/,
    /music[-_:]lyrics/,
    /lyrics[-_:]?generat/,
    // minimax lyrics_generation alias if exposed
    /lyrics.*music/,
    /(^|[/:])lyrics$/,
    /lyric/i
    // last-resort: anything containing "lyric"
  ]), i = new Set([a, o].filter((m) => !!m)), l = e.filter((m) => !i.has(m)), d = r(l, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), h = (m) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(m), g = e.filter((m) => !h(m)), p = r(g, [
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
  ]), b = r(e, [
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
  return { music: d, cover: a, lyrics: o, lyricsBackup: p, image: b, allIds: e };
}, Hu = 6e4, go = /* @__PURE__ */ new Map(), ca = (e, r, a) => {
  const o = new Headers(a.headers ?? {}), i = r.startsWith("/") ? r : `/${r}`;
  if (e.proxyPodId) {
    o.delete("Authorization");
    const l = `/api/pods/${encodeURIComponent(e.proxyPodId)}/proxy/v1${i}`;
    return fetch(l, { ...a, headers: o });
  }
  return e.apiKey && o.set("Authorization", `Bearer ${e.apiKey}`), fetch(`${e.url}${i}`, { ...a, headers: o });
}, Fu = async (e, r) => {
  const a = go.get(e.url);
  if (a !== void 0) {
    if (Date.now() < a)
      return { ok: !1, models: Da };
    go.delete(e.url);
  }
  const o = da(r, Wu);
  try {
    const i = await ca(e, "/models", {
      method: "GET",
      signal: o.signal,
      headers: { Accept: "application/json" }
    });
    if (i.status >= 500) return { ok: !1, models: Da };
    if (!i.ok) return { ok: !0, models: Da };
    const d = ((await i.json()).data ?? []).map((h) => h?.id).filter((h) => typeof h == "string" && h.length > 0);
    return { ok: !0, models: $u(d) };
  } catch (i) {
    return (i?.name ?? "") === "TypeError" && go.set(e.url, Date.now() + Hu), { ok: !1, models: Da };
  } finally {
    o.dispose();
  }
}, Bu = async (e, r) => (await Promise.all(
  e.map(async (o) => {
    if (r.aborted) return null;
    const { ok: i, models: l } = await Fu(o, r);
    return i ? { ...o, models: l } : null;
  })
)).filter((o) => o !== null), br = 6e4, ei = 42e4, Wu = 8e3, da = (e, r) => {
  const a = AbortSignal.any, o = AbortSignal.timeout;
  if (a && o) {
    const d = o(r);
    return { signal: e ? a([e, d]) : d, dispose: () => {
    } };
  }
  const i = new AbortController(), l = setTimeout(() => {
    i.signal.aborted || i.abort(new DOMException("Timeout", "TimeoutError"));
  }, r);
  return e && (e.aborted ? i.abort(e.reason) : e.addEventListener("abort", () => i.abort(e.reason), { once: !0 })), { signal: i.signal, dispose: () => clearTimeout(l) };
}, qu = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]), Ju = /* @__PURE__ */ new Set([402, 425, 429]);
class we extends Error {
  status;
  body;
  constructor(r, a, o) {
    super(o ?? `HTTP ${r}: ${a.slice(0, 200)}`), this.name = "GatewayError", this.status = r, this.body = a;
  }
}
function Vi(e) {
  const r = e.indexOf("{");
  if (r === -1) return null;
  let a = 0, o = !1, i = !1;
  for (let l = r; l < e.length; l++) {
    const d = e[l];
    if (o) {
      if (i) {
        i = !1;
        continue;
      }
      if (d === "\\") {
        i = !0;
        continue;
      }
      d === '"' && (o = !1);
      continue;
    }
    if (d === '"') {
      o = !0;
      continue;
    }
    if (d === "{") a++;
    else if (d === "}" && (a--, a === 0))
      return e.slice(r, l + 1);
  }
  return null;
}
const zr = async (e, r, a, o = qu) => {
  if (e.length === 0)
    throw new Error(`No ${a}-capable models available on this endpoint.`);
  let i = null;
  for (const h of e)
    try {
      return await r(h);
    } catch (g) {
      if (g.name === "AbortError" || g.name === "TimeoutError")
        throw g;
      if (g instanceof TypeError) {
        i = g;
        continue;
      }
      if (g instanceof we && o.has(g.status)) {
        i = g;
        continue;
      }
      throw g;
    }
  const l = i?.message ?? "unknown", d = i instanceof we ? i.status === 429 ? "Wait for the rate limit to reset, or pick a different endpoint in Settings." : [408, 500, 502, 503, 504].includes(i.status) ? "Remote AIL/provider timed out or returned an empty gateway response. Retry once, then switch endpoint in Settings if it repeats." : i.status === 402 ? "That provider/model is out of credits; pick a different endpoint in Settings." : "Pick a different endpoint in Settings or check the provider configuration." : i instanceof TypeError ? "Network/CORS failed before the gateway answered; check the selected endpoint in Settings." : "Pick a different endpoint in Settings.";
  throw new Error(`All ${a} models exhausted. Last error: ${l}. ${d}`);
}, Gu = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), Vu = async (e, r, a) => {
  let o = 0, i = "";
  const l = da(a, br);
  try {
    const f = { prompt: r, mode: "write_full_song" };
    e.models.lyrics && (f.model = e.models.lyrics);
    const v = await ca(e, "/music/lyrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(f),
      signal: l.signal
    });
    if (v.ok) {
      const x = await v.json();
      if (!x || typeof x.lyrics != "string" || x.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...x, usedFallback: !1 };
    }
    o = v.status, i = await v.text().catch(() => "");
  } catch (f) {
    const v = f.name;
    if (v === "AbortError" && a?.aborted) throw f;
    if (v === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${br / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", f);
  } finally {
    l.dispose();
  }
  if (o !== 0 && !Gu.has(o)) {
    const f = i.length > 300 ? `${i.slice(0, 300)}…` : i;
    throw new Error(`Lyrics HTTP ${o}: ${f || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, i);
  const d = (f) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(f), h = /* @__PURE__ */ new Set(), g = [], p = (f) => {
    f && !h.has(f) && (h.add(f), g.push(f));
  };
  if (p(e.models.lyricsBackup), e.models.allIds.filter(d).forEach(p), g.length === 0)
    throw new Error(
      `Lyrics endpoint failed and no chat backup model is available for ${e.label}. Pick one in JULI3TA Settings.`
    );
  const b = `You are a songwriter. Given a theme, write a complete singable song.
Respond with VALID JSON ONLY in exactly this shape, nothing else:
{
  "song_title": "Short catchy title",
  "style_tags": "comma, separated, style, hints",
  "lyrics": "[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Bridge]\\nTwo lines\\n\\n[Outro]\\nTwo lines"
}`, m = await zr(g, async (f) => {
    const v = {
      model: f,
      messages: [
        { role: "system", content: b },
        { role: "user", content: `Theme: ${r}` }
      ],
      temperature: 0.85
    }, x = async (N) => {
      const _ = da(a, br);
      let E;
      try {
        E = await ca(e, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            N ? { ...v, response_format: { type: "json_object" } } : v
          ),
          signal: _.signal
        });
      } catch (A) {
        throw A.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${br / 1e3}s.`) : A;
      } finally {
        _.dispose();
      }
      if (!E.ok) {
        const A = await E.text().catch(() => "");
        throw new we(E.status, A, `Lyrics fallback HTTP ${E.status}: ${A.slice(0, 300)}`);
      }
      const S = (await E.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!S)
        throw new we(502, "", "Lyrics fallback returned empty content");
      const q = S.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), P = Vi(q) ?? q;
      let T;
      try {
        T = JSON.parse(P);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", S.slice(0, 400)), new we(502, S.slice(0, 200), `Lyrics fallback returned non-JSON content: ${S.slice(0, 200)}`);
      }
      if (!T.lyrics)
        throw new we(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return T;
    };
    try {
      return await x(!0);
    } catch (N) {
      if (N instanceof we && N.status === 400 && /response_format|json_object/i.test(N.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", f), await x(!1);
      throw N;
    }
  }, "chat-lyrics");
  return {
    song_title: m.song_title || "Untitled",
    style_tags: m.style_tags || "",
    lyrics: m.lyrics,
    usedFallback: !0
  };
}, Yu = async (e, r, a) => {
  const o = !!r.refAudioBase64, i = (p) => /music/i.test(p) && !/cover|lyric/i.test(p), l = (p) => /cover/i.test(p), d = /* @__PURE__ */ new Set(), h = (p, b) => {
    b && !d.has(b) && (d.add(b), p.push(b));
  }, g = [];
  if (o ? (h(g, e.models.cover), e.models.allIds.filter(l).forEach((p) => h(g, p))) : (h(g, e.models.music), e.models.allIds.filter(i).forEach((p) => h(g, p))), g.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return zr(g, async (p) => {
    const b = {
      model: p
    }, m = r.lyrics?.trim() ?? "";
    (!o || m) && (b.lyrics = m), r.prompt && (b.prompt = r.prompt), r.instrumental && (b.instrumental = !0);
    const f = !o;
    if (f && (b.stream = !0), o) {
      const E = Fa(r.refAudioBase64 ?? "");
      b.audio_base64 = E;
      const C = Cr(E), S = C !== null ? C / 1e3 : r.refAudioDurationSec ?? null;
      if (S !== null && S < bt)
        throw new Error(`Reference sample is only ${S.toFixed(1)} s. MiniMax cover rejects short song references; pick a longer song or re-load a full ~60 s source sample before Restyle.`);
      console.info("[Juli3ta] Sending music-cover reference:", {
        modelId: p,
        refDurationSec: S !== null ? Number(S.toFixed(2)) : null,
        refBytesApprox: Math.max(0, Math.floor(E.length * 3 / 4)),
        prompt: r.prompt ?? "",
        lyricsProvided: !!m
      });
    }
    const v = da(a, ei);
    let x;
    try {
      x = await ca(e, "/music/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(b),
        signal: v.signal
      });
    } catch (E) {
      throw E.name === "TimeoutError" ? new Error(`Music generation timed out after ${ei / 1e3}s. Remote music can take several minutes; retry once or switch endpoint in Settings.`) : E;
    } finally {
      v.dispose();
    }
    if (!x.ok) {
      const E = await x.text().catch(() => "");
      throw o && x.status === 413 ? new we(
        x.status,
        E,
        "Reference audio was too large for the gateway. JULI3TA now makes compact cover-ready reference samples; clear and re-pick the reference audio, then retry Restyle."
      ) : new we(x.status, E, `Music HTTP ${x.status}: ${E.slice(0, 300)}`);
    }
    const N = x.headers.get("content-type")?.toLowerCase() ?? "";
    if (f && (N.includes("audio/") || N.includes("application/octet-stream"))) {
      const E = await x.arrayBuffer();
      if (E.byteLength < 100)
        throw new we(502, "", "Music stream returned no audio data — gateway accepted the call but upstream returned nothing.");
      return {
        data: {
          audio: Du(E),
          duration_ms: 0,
          bitrate: 0,
          sample_rate: 0,
          channels: 0,
          format: "mp3",
          size_bytes: E.byteLength
        },
        model: p,
        trace_id: ""
      };
    }
    const _ = await x.json();
    if (!_?.data?.audio || typeof _.data.audio != "string" || _.data.audio.length < 100)
      throw new we(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return _;
  }, o ? "music-cover" : "music", Ju);
}, ti = 6e4, kr = (e, r, a) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", i = a.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), l = r.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${o}".`
  ];
  return i && d.push(`Genre: ${i}.`), l && d.push(`Mood: ${l}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, Eo = async (e, r, a) => {
  const o = (h) => /image|diffusion|dall-?e|flux|sdxl/i.test(h), i = /* @__PURE__ */ new Set(), l = [], d = (h) => {
    h && !i.has(h) && (i.add(h), l.push(h));
  };
  if (d(e.models.image), e.models.allIds.filter(o).forEach(d), l.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return zr(l, async (h) => {
    const g = da(a, ti), b = /minimax|ail-image|image-01/i.test(h) ? {
      model: h,
      prompt: r,
      aspect_ratio: "1:1",
      response_format: "base64"
    } : {
      model: h,
      prompt: r,
      size: "1024x1024",
      n: 1,
      response_format: "b64_json"
    };
    let m;
    try {
      m = await ca(e, "/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(b),
        signal: g.signal
      });
    } catch (S) {
      throw S.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${ti / 1e3}s.`) : S;
    } finally {
      g.dispose();
    }
    if (!m.ok) {
      const S = await m.text().catch(() => "");
      throw new we(m.status, S, `Cover-art HTTP ${m.status}: ${S.slice(0, 200)}`);
    }
    const f = await m.json(), v = f.base_resp;
    if (v && typeof v.status_code == "number" && v.status_code !== 0)
      throw new we(502, v.status_msg ?? "", `Cover-art ${h} rejected: ${v.status_msg ?? "status_code=" + v.status_code}`);
    const x = (S) => typeof S != "string" || !S.length ? null : S.startsWith("data:") ? S : `data:image/png;base64,${S}`, N = (S) => typeof S == "string" && /^https?:\/\//i.test(S) ? S : null, _ = f.data;
    if (_ && typeof _ == "object" && !Array.isArray(_)) {
      const S = _, q = S.image_base64;
      if (Array.isArray(q) && q[0]) {
        const A = x(q[0]);
        if (A) return A;
      }
      const P = x(S.image) ?? x(S.b64_json) ?? N(S.url);
      if (P) return P;
      const T = S.image_url ?? S.image_urls;
      if (Array.isArray(T) && T[0]) {
        const A = N(T[0]);
        if (A) return A;
      }
    }
    if (Array.isArray(_) && _[0]) {
      const S = _[0], q = x(S.b64_json) ?? x(S.image_base64) ?? N(S.url);
      if (q) return q;
      throw new we(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const E = x(f.image) ?? x(f.b64_json);
    if (E) return E;
    const C = f.images;
    if (Array.isArray(C) && C[0]) {
      const S = C[0], q = x(S.b64_json) ?? x(S.image) ?? N(S.url);
      if (q) return q;
    }
    throw new we(502, "", `Cover-art response shape not recognised: ${JSON.stringify(f).slice(0, 200)}`);
  }, "image");
}, ai = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], ri = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
], yo = (e) => Oo(e) ? "metadata" : "auto";
function Ku(e, r, a) {
  const [o, i] = k(() => {
    let T = "off";
    try {
      const Y = localStorage.getItem("juli3ta:repeatMode");
      (Y === "off" || Y === "all" || Y === "one") && (T = Y);
    } catch {
    }
    let A = !1;
    try {
      A = localStorage.getItem("juli3ta:shuffle") === "1";
    } catch {
    }
    let I = 1;
    try {
      const Y = localStorage.getItem("juli3ta:volume");
      if (Y !== null) {
        const G = Number.parseFloat(Y);
        Number.isFinite(G) && (I = Math.max(0, Math.min(1, G)));
      }
    } catch {
    }
    let L = 1;
    try {
      const Y = localStorage.getItem("juli3ta:playbackRate");
      if (Y !== null) {
        const G = Number.parseFloat(Y);
        Number.isFinite(G) && (L = Math.max(0.25, Math.min(4, G)));
      }
    } catch {
    }
    return { trackId: null, playing: !1, loadingTrackId: null, positionMs: 0, durationMs: 0, volume: I, repeatMode: T, shuffle: A, playbackRate: L, sleepTimerEndsAt: null };
  }), l = ae(null), d = ae([]), h = ae(!1), g = z((T) => {
    i((A) => ({ ...A, repeatMode: T }));
    try {
      localStorage.setItem("juli3ta:repeatMode", T);
    } catch {
    }
  }, []), p = z((T) => {
    i((A) => ({ ...A, shuffle: T }));
    try {
      localStorage.setItem("juli3ta:shuffle", T ? "1" : "0");
    } catch {
    }
  }, []), b = z((T) => {
    const A = Math.max(0.25, Math.min(4, T));
    r.current && (r.current.playbackRate = A), i((I) => ({ ...I, playbackRate: A }));
    try {
      localStorage.setItem("juli3ta:playbackRate", String(A));
    } catch {
    }
  }, [r]), m = z((T) => {
    if (T === null || T <= 0) {
      i((L) => ({ ...L, sleepTimerEndsAt: null }));
      return;
    }
    const A = Math.min(T, 1440), I = Date.now() + A * 6e4;
    i((L) => ({ ...L, sleepTimerEndsAt: I }));
  }, []), f = z((T) => {
    (async () => {
      i((L) => ({
        ...L,
        trackId: T.id,
        playing: !1,
        loadingTrackId: Ce(T) ? T.id : null,
        positionMs: 0,
        durationMs: T.durationMs || 0
      }));
      const A = T.audioDataUrl || await a?.(T);
      if (!A) {
        i((L) => ({ ...L, loadingTrackId: null }));
        return;
      }
      const I = r.current;
      if (!I) {
        i((L) => ({ ...L, loadingTrackId: null }));
        return;
      }
      o.trackId !== T.id || I.src !== A ? (I.src = A, I.preload = yo(T), I.load(), I.pause(), i((L) => ({
        ...L,
        trackId: T.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: T.durationMs || 0
      }))) : i((L) => ({ ...L, loadingTrackId: null }));
    })();
  }, [o.trackId, r, a]), v = z((T) => {
    (async () => {
      if (l.current = null, o.trackId && o.trackId !== T.id && !h.current) {
        const L = d.current;
        L[L.length - 1] !== o.trackId && (L.push(o.trackId), L.length > 50 && L.splice(0, L.length - 50));
      }
      h.current = !1, i((L) => ({
        ...L,
        trackId: T.id,
        loadingTrackId: T.id,
        durationMs: T.durationMs || L.durationMs
      }));
      const A = T.audioDataUrl || await a?.(T);
      if (!A) {
        i((L) => ({ ...L, loadingTrackId: null, playing: !1 }));
        return;
      }
      const I = r.current;
      if (!I) {
        i((L) => ({ ...L, loadingTrackId: null, playing: !1 }));
        return;
      }
      (o.trackId !== T.id || I.src !== A) && (I.src = A, I.preload = yo(T), i((L) => ({ ...L, trackId: T.id, positionMs: 0, durationMs: T.durationMs || 0 }))), I.play().then(() => i((L) => ({ ...L, loadingTrackId: null, playing: !0 }))).catch(() => i((L) => ({ ...L, loadingTrackId: null, playing: !1 })));
    })();
  }, [o.trackId, r, a]), x = z(() => {
    r.current?.pause(), i((T) => ({ ...T, playing: !1, loadingTrackId: null }));
  }, [r]), N = z((T) => {
    if (o.loadingTrackId) return;
    if (T) {
      o.trackId === T.id && o.playing ? x() : v(T);
      return;
    }
    if (o.playing) {
      x();
      return;
    }
    const A = o.trackId ? e.find((I) => I.id === o.trackId) : null;
    A ? v(A) : r.current?.src && r.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, v, x, r]), _ = z((T) => {
    const A = r.current;
    A && (A.currentTime = Math.max(0, T / 1e3));
  }, [r]), E = z((T) => {
    const A = Math.max(0, Math.min(1, T));
    r.current && (r.current.volume = A), i((I) => ({ ...I, volume: A }));
    try {
      localStorage.setItem("juli3ta:volume", String(A));
    } catch {
    }
  }, [r]);
  W(() => {
    r.current && (r.current.volume = o.volume);
  }, []), W(() => {
    r.current && (r.current.playbackRate = o.playbackRate);
  }, [o.playbackRate, o.trackId, r]), W(() => {
    if (o.sleepTimerEndsAt === null) return;
    const T = o.sleepTimerEndsAt - Date.now();
    if (T <= 0) {
      r.current?.pause(), i((I) => ({ ...I, sleepTimerEndsAt: null, playing: !1 }));
      return;
    }
    const A = window.setTimeout(() => {
      r.current?.pause(), i((I) => ({ ...I, sleepTimerEndsAt: null, playing: !1 }));
    }, T);
    return () => window.clearTimeout(A);
  }, [o.sleepTimerEndsAt, r]);
  const C = ye(() => e.filter(Ce), [e]), S = z(() => {
    if (C.length === 0) return null;
    if (C.length === 1) return C[0];
    const T = C.filter((A) => A.id !== o.trackId);
    return T[Math.floor(Math.random() * T.length)];
  }, [C, o.trackId]), q = z(() => {
    if (!o.trackId || C.length === 0) return;
    if (o.shuffle) {
      const I = S();
      I && v(I);
      return;
    }
    const T = C.findIndex((I) => I.id === o.trackId);
    if (T < 0) return;
    const A = C[(T + 1) % C.length];
    A && v(A);
  }, [o.trackId, o.shuffle, C, v, S]), P = z(() => {
    if (!o.trackId || C.length === 0) return;
    if (o.shuffle) {
      const I = d.current;
      for (; I.length > 0; ) {
        const Y = I.pop();
        if (!Y || Y === o.trackId) continue;
        const G = C.find((qe) => qe.id === Y);
        if (G) {
          h.current = !0, v(G);
          return;
        }
      }
      const L = S();
      L && v(L);
      return;
    }
    const T = C.findIndex((I) => I.id === o.trackId);
    if (T < 0) return;
    const A = C[(T - 1 + C.length) % C.length];
    A && v(A);
  }, [o.trackId, o.shuffle, C, v, S]);
  return W(() => {
    const T = r.current;
    if (!T) return;
    const A = () => i((U) => ({ ...U, positionMs: T.currentTime * 1e3 })), I = () => i((U) => ({
      ...U,
      durationMs: Number.isFinite(T.duration) ? T.duration * 1e3 : U.durationMs
    })), L = () => i((U) => ({ ...U, playing: !0, loadingTrackId: null })), Y = () => i((U) => ({ ...U, playing: !1, loadingTrackId: null })), G = () => i((U) => ({ ...U, loadingTrackId: null })), qe = () => {
      const U = o.trackId ? C.find((X) => X.id === o.trackId) : null;
      if (!U || U.audioDataUrl || !a || l.current === U.id) {
        i((X) => ({ ...X, playing: !1, loadingTrackId: null }));
        return;
      }
      l.current = U.id, i((X) => ({ ...X, loadingTrackId: U.id, playing: !1 })), a(U, { force: !0 }).then((X) => {
        if (!X) throw new Error("No refreshed stream URL");
        return T.src = X, T.preload = yo(U), T.play();
      }).then(() => i((X) => ({ ...X, playing: !0, loadingTrackId: null }))).catch(() => i((X) => ({ ...X, playing: !1, loadingTrackId: null })));
    }, H = () => {
      if (o.repeatMode === "one" && o.trackId) {
        const U = C.find((X) => X.id === o.trackId);
        if (U) {
          v(U);
          return;
        }
      }
      if (o.shuffle && C.length >= 1)
        if (C.length === 1) {
          if (o.repeatMode === "all") {
            v(C[0]);
            return;
          }
        } else {
          const U = C.filter((Ie) => Ie.id !== o.trackId), X = U[Math.floor(Math.random() * U.length)];
          if (X) {
            v(X);
            return;
          }
        }
      if (C.length >= 2) {
        const U = C.findIndex((X) => X.id === o.trackId);
        if (U >= 0 && U + 1 < C.length) {
          v(C[U + 1]);
          return;
        }
        if (U >= 0 && o.repeatMode === "all") {
          v(C[0]);
          return;
        }
      }
      i((U) => ({ ...U, playing: !1, positionMs: 0 }));
    };
    return T.addEventListener("timeupdate", A), T.addEventListener("loadedmetadata", I), T.addEventListener("play", L), T.addEventListener("pause", Y), T.addEventListener("canplay", G), T.addEventListener("error", qe), T.addEventListener("ended", H), () => {
      T.removeEventListener("timeupdate", A), T.removeEventListener("loadedmetadata", I), T.removeEventListener("play", L), T.removeEventListener("pause", Y), T.removeEventListener("canplay", G), T.removeEventListener("error", qe), T.removeEventListener("ended", H);
    };
  }, [C, o.trackId, o.repeatMode, o.shuffle, v, r, a]), { state: o, queue: e, play: v, pause: x, toggle: N, select: f, seek: _, setVolume: E, setRepeatMode: g, setShuffle: p, setPlaybackRate: b, setSleepTimer: m, next: q, prev: P };
}
function oi({
  checked: e,
  onChange: r,
  disabled: a,
  id: o
}) {
  return /* @__PURE__ */ t(
    "button",
    {
      id: o,
      type: "button",
      role: "switch",
      "aria-checked": e,
      onClick: () => !a && r(!e),
      disabled: a,
      className: "relative shrink-0 rounded-full transition-all disabled:opacity-40",
      style: {
        width: 30,
        height: 16,
        background: e ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-hover)",
        border: "1px solid var(--border-subtle)",
        cursor: a ? "not-allowed" : "pointer"
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
function fo({
  label: e,
  tooltip: r,
  onClick: a,
  busy: o,
  disabled: i
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      onClick: a,
      disabled: i,
      className: "flex items-center gap-1 px-2 py-0.5 rounded-md transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100",
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: "white",
        background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
        border: "1px solid transparent"
      },
      title: r,
      children: [
        o ? /* @__PURE__ */ t(oe, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 10 }),
        o ? "…" : e
      ]
    }
  );
}
function ut({
  track: e,
  size: r,
  iconSize: a,
  radius: o
}) {
  const i = Lr(e);
  return i ? /* @__PURE__ */ t(
    "img",
    {
      src: i,
      alt: "",
      className: "flex-shrink-0",
      style: {
        width: r,
        height: r,
        borderRadius: o <= 6 ? "var(--radius-md)" : "var(--radius-xl)",
        objectFit: "cover"
      }
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      className: "flex items-center justify-center flex-shrink-0 overflow-hidden",
      style: {
        width: r,
        height: r,
        borderRadius: o <= 6 ? "var(--radius-md)" : "var(--radius-xl)",
        background: "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)"
      },
      children: /* @__PURE__ */ t(
        "img",
        {
          src: "/brand/juli3ta/mark-cream-128.png",
          alt: "",
          width: a,
          height: a,
          draggable: !1,
          style: {
            width: a,
            height: a,
            opacity: 0.92,
            userSelect: "none",
            pointerEvents: "none"
          }
        }
      )
    }
  );
}
function Xu({ player: e, allTracks: r }) {
  const { state: a, toggle: o, next: i, prev: l, seek: d, setVolume: h, setPlaybackRate: g, setSleepTimer: p, queue: b } = e, m = b.find((E) => E.id === a.trackId) ?? r.find((E) => E.id === a.trackId) ?? null;
  if (!m) return null;
  const f = a.durationMs > 0 ? a.durationMs : m.durationMs, v = Math.min(a.positionMs, f || 0), x = f > 0 ? v / f * 100 : 0, N = a.loadingTrackId === m.id, _ = (E) => {
    if (!f) return;
    const C = E.currentTarget.getBoundingClientRect(), S = (E.clientX - C.left) / C.width;
    d(Math.max(0, Math.min(1, S)) * f);
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
        /* @__PURE__ */ t(ut, { track: m, size: 40, iconSize: 18, radius: 6 }),
        /* @__PURE__ */ s("div", { className: "flex flex-col min-w-0", style: { width: 180 }, children: [
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: m.title }),
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: m.styleTags && m.styleTags !== "—" ? m.styleTags : "—" })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => e.setShuffle(!a.shuffle),
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: a.shuffle ? "var(--accent-primary)" : "var(--text-secondary)"
              },
              title: a.shuffle ? "Shuffle on" : "Shuffle off",
              children: /* @__PURE__ */ t(Mo, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: l,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(Te, { size: 12, style: { transform: "rotate(180deg)" } })
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
              title: a.playing ? "Pause" : "Play",
              children: N ? /* @__PURE__ */ t(oe, { size: 13, className: "animate-spin", style: { color: "white" } }) : a.playing ? /* @__PURE__ */ t(At, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(Te, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: i,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(Te, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                const E = a.repeatMode, C = E === "off" ? "all" : E === "all" ? "one" : "off";
                e.setRepeatMode(C);
              },
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: a.repeatMode === "off" ? "var(--text-secondary)" : "var(--accent-primary)"
              },
              title: a.repeatMode === "off" ? "Repeat off" : a.repeatMode === "all" ? "Repeating queue" : "Repeating this track",
              children: a.repeatMode === "one" ? /* @__PURE__ */ t(xi, { size: 12 }) : /* @__PURE__ */ t(cc, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: We(v)
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            onClick: _,
            className: "flex-1 rounded-full overflow-hidden cursor-pointer",
            style: { height: 4, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${x}%`,
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
            children: We(f)
          }
        ),
        /* @__PURE__ */ t(Zu, { rate: a.playbackRate, setRate: g }),
        /* @__PURE__ */ t(Qu, { endsAt: a.sleepTimerEndsAt, setSleepTimer: p }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(ep, { volume: a.volume, setVolume: h }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
              value: a.volume,
              onChange: (E) => h(Number(E.target.value)),
              style: { width: "100%", accentColor: "var(--accent-primary)" }
            }
          )
        ] })
      ]
    }
  );
}
const ni = [null, 5, 15, 30, 45, 60];
function Qu({
  endsAt: e,
  setSleepTimer: r
}) {
  const [, a] = k(() => Date.now());
  W(() => {
    if (e === null) return;
    const p = window.setInterval(() => a(Date.now()), 1e3);
    return () => window.clearInterval(p);
  }, [e]);
  const o = e !== null, i = o ? Math.max(0, Math.ceil((e - Date.now()) / 6e4)) : 0, l = () => {
    if (!o) {
      r(ni[1]);
      return;
    }
    const p = ni.find(
      (b) => b !== null && b > i
    ) ?? null;
    r(p);
  }, d = (p) => {
    p.preventDefault(), o && r(null);
  }, h = o ? i > 0 ? `${i}m` : "<1m" : "", g = o ? `Sleep timer: pauses in ~${i}m. Click to extend, right-click to cancel.` : "Sleep timer (click to start, off by default)";
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
      title: g,
      children: [
        /* @__PURE__ */ t(Xl, { size: 11 }),
        h && /* @__PURE__ */ t("span", { children: h })
      ]
    }
  );
}
const bo = [1, 1.25, 1.5, 2, 0.5, 0.75];
function Zu({
  rate: e,
  setRate: r
}) {
  const a = Math.abs(e - 1) < 1e-3, o = () => {
    const d = bo.findIndex((g) => Math.abs(g - e) < 1e-3), h = bo[(d + 1) % bo.length];
    r(h);
  }, i = (d) => {
    d.preventDefault(), a || r(1);
  }, l = `${Number.isInteger(e) ? e.toString() : e.toString().replace(/\.?0+$/, "")}×`;
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: o,
      onContextMenu: i,
      className: "flex items-center justify-center flex-shrink-0 transition-all hover:bg-[var(--bg-hover)] rounded-md tabular-nums",
      style: {
        height: 22,
        minWidth: 36,
        padding: "0 6px",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 0.3,
        color: a ? "var(--text-disabled)" : "var(--accent-primary)",
        border: `1px solid ${a ? "var(--border-subtle)" : "var(--accent-primary)"}`,
        background: a ? "transparent" : "var(--bg-hover)"
      },
      title: a ? "Playback speed (click to change)" : `Playback speed ${l} — click to cycle, right-click to reset`,
      children: l
    }
  );
}
function ep({
  volume: e,
  setVolume: r
}) {
  const a = ae(e > 0 ? e : 1);
  W(() => {
    e > 0 && (a.current = e);
  }, [e]);
  const o = e === 0;
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: () => {
        r(o ? a.current || 1 : 0);
      },
      className: "flex items-center justify-center flex-shrink-0 transition-all hover:bg-[var(--bg-hover)] rounded-md",
      style: {
        width: 18,
        height: 18,
        color: o ? "var(--accent-primary)" : "var(--text-disabled)"
      },
      title: o ? "Unmute" : "Mute",
      children: o ? /* @__PURE__ */ t(Sc, { size: 12 }) : /* @__PURE__ */ t(wc, { size: 12 })
    }
  );
}
const ii = [
  { scope: "global", combo: "?", action: "Show this help" },
  { scope: "global", combo: "Esc", action: "Close modal / dismiss overlay" },
  { scope: "player", combo: "Space", action: "Play / Pause" },
  { scope: "player", combo: "←", action: "Seek back 5s" },
  { scope: "player", combo: "→", action: "Seek forward 5s" },
  { scope: "player", combo: "↑", action: "Volume up (10%)" },
  { scope: "player", combo: "↓", action: "Volume down (10%)" }
];
function tp({
  open: e,
  onClose: r
}) {
  if (!e) return null;
  const a = [
    { label: "Global", rows: ii.filter((o) => o.scope === "global") },
    { label: "Player view", rows: ii.filter((o) => o.scope === "player") }
  ];
  return Ba(
    /* @__PURE__ */ t(
      "div",
      {
        onClick: r,
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
                      /* @__PURE__ */ t(zo, { name: "juli3ta:mark", size: 18 }),
                      /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: "Keyboard shortcuts" })
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: r,
                        className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                        style: { width: 28, height: 28, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(xe, { size: 14 })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", children: a.map((o) => /* @__PURE__ */ s("div", { className: "mb-4 last:mb-0", children: [
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
                /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: o.rows.map((i) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: "flex items-center justify-between rounded-lg px-3",
                    style: {
                      height: 36,
                      background: "var(--bg-titlebar)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: [
                      /* @__PURE__ */ t("span", { style: { fontSize: 12, color: "var(--text-primary)" }, children: i.action }),
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
                          children: i.combo
                        }
                      )
                    ]
                  },
                  i.combo
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
function ap({ retrying: e, onRetry: r }) {
  const { t: a } = Bt();
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
    /* @__PURE__ */ t("p", { style: { fontSize: 13, color: "var(--text-secondary)", marginTop: 12, maxWidth: 380, lineHeight: 1.5 }, children: a("musiccreator.empty.body") }),
    /* @__PURE__ */ s("div", { className: "flex items-center gap-2 mt-6", children: [
      /* @__PURE__ */ s(
        "button",
        {
          onClick: r,
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
            e ? /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 14 }),
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
function Ia({ label: e, hint: r, counter: a, counterDanger: o, className: i, headerExtra: l, children: d }) {
  return /* @__PURE__ */ s("div", { className: i, children: [
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
      (l || a) && /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
        l,
        a && /* @__PURE__ */ t(
          "span",
          {
            style: {
              fontSize: 10,
              color: o ? "#ff5252" : "var(--text-disabled)",
              fontVariantNumeric: "tabular-nums"
            },
            children: a
          }
        )
      ] })
    ] }),
    d,
    r && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 8 }, children: r })
  ] });
}
function rp({ onPick: e, disabled: r }) {
  const [a, o] = k(!1), [i, l] = k(Dt[0].label), [d, h] = k(""), g = d.trim().toLowerCase(), p = g.length > 0, b = ye(() => {
    if (!p) return [];
    const m = [];
    for (const f of Dt)
      for (const v of f.chips)
        v.toLowerCase().includes(g) && m.push({ family: f.label, chip: v });
    return m;
  }, [p, g]);
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: p ? `${b.length} match${b.length === 1 ? "" : "es"}` : `${du.length} chips · click to add` })
          ] }),
          /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ s(
              "div",
              {
                className: "flex items-center gap-1 px-2 rounded-md",
                style: {
                  height: 24,
                  background: "var(--bg-window)",
                  border: `1px solid ${p ? "var(--accent-primary)" : "var(--border-subtle)"}`
                },
                children: [
                  /* @__PURE__ */ t(vt, { size: 11, style: { color: "var(--text-disabled)" } }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: d,
                      onChange: (m) => h(m.target.value),
                      placeholder: "Search genres…",
                      className: "rounded-input bg-transparent outline-none",
                      style: { fontSize: 11, color: "var(--text-primary)", width: 140 }
                    }
                  ),
                  d && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => h(""),
                      className: "opacity-60 hover:opacity-100",
                      title: "Clear search",
                      children: /* @__PURE__ */ t(xe, { size: 11 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: () => o((m) => !m),
                className: "px-2 rounded-md transition-all hover:bg-[var(--bg-hover)]",
                style: {
                  height: 24,
                  fontSize: 10,
                  color: "var(--text-secondary)",
                  background: "var(--bg-window)",
                  border: "1px solid var(--border-subtle)"
                },
                children: a ? "Collapse" : "Browse all"
              }
            )
          ] })
        ] }),
        p ? b.length === 0 ? /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: b.map(({ family: m, chip: f }) => /* @__PURE__ */ t(
          vo,
          {
            chip: f,
            family: m,
            onPick: e,
            disabled: r
          },
          `${m}::${f}`
        )) }) : /* @__PURE__ */ s(ge, { children: [
          !a && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: Dt.map((m) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => l(m.label),
              className: "px-2 rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                height: 24,
                fontSize: 10,
                fontWeight: i === m.label ? 600 : 500,
                color: i === m.label ? "var(--text-primary)" : "var(--text-secondary)",
                background: i === m.label ? "var(--bg-selected)" : "var(--bg-window)",
                border: `1px solid ${i === m.label ? "var(--accent-primary)" : "var(--border-subtle)"}`
              },
              children: m.label
            },
            m.label
          )) }),
          a ? /* @__PURE__ */ t(
            "div",
            {
              className: "grid gap-3",
              style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" },
              children: Dt.map((m) => /* @__PURE__ */ s("div", { children: [
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
                    children: m.label
                  }
                ),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: m.chips.map((f) => /* @__PURE__ */ t(vo, { chip: f, onPick: e, disabled: r }, f)) })
              ] }, m.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (Dt.find((m) => m.label === i) ?? Dt[0]).chips.map((m) => /* @__PURE__ */ t(vo, { chip: m, onPick: e, disabled: r }, m)) })
        ] })
      ]
    }
  );
}
function vo({
  chip: e,
  family: r,
  onPick: a,
  disabled: o
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: () => a(e),
      disabled: o,
      className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] disabled:opacity-40",
      style: {
        fontSize: 10,
        color: "var(--text-secondary)",
        background: "var(--bg-window)",
        border: "1px solid var(--border-subtle)"
      },
      title: r,
      children: [
        /* @__PURE__ */ t(ko, { size: 10 }),
        e,
        r && /* @__PURE__ */ s("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          r
        ] })
      ]
    }
  );
}
function op({ specs: e, onChange: r, disabled: a, onOptimize: o, optimizing: i }) {
  const [l, d] = k(!1), h = ye(() => Uo(e), [e]), g = h.length > 0, p = z(
    (m, f) => {
      const v = { ...e };
      f === null ? delete v[m] : v[m] = f, r(v);
    },
    [e, r]
  ), b = () => r({});
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
              onClick: () => d((m) => !m),
              className: "flex items-center gap-2 flex-1 hover:opacity-90 text-left",
              style: { background: "transparent", border: "none", cursor: "pointer" },
              children: [
                /* @__PURE__ */ t(wo, { size: 14, style: { color: "var(--text-secondary)" } }),
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
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: g ? "compiled into Style on generate" : "optional structured controls" })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
            o && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: (m) => {
                  m.stopPropagation(), o(), l || d(!0);
                },
                disabled: a || i,
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
                  i ? /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 11 }),
                  i ? "Optimizing…" : "AI Optimize"
                ]
              }
            ),
            g && !l && /* @__PURE__ */ s(
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
                  na(e),
                  " set"
                ]
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => d((m) => !m),
                className: "flex items-center justify-center",
                style: { background: "transparent", border: "none", cursor: "pointer", width: 18, height: 18 },
                children: /* @__PURE__ */ t(
                  hi,
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
              g && /* @__PURE__ */ s(
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
                    h
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                /* @__PURE__ */ s(Ra, { label: "Structure", children: [
                  /* @__PURE__ */ t(he, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    si,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (m) => p("structure", { ...e.structure, tempo_bpm: m }),
                      min: 40,
                      max: 260,
                      placeholder: "120",
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Tempo class", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.tempo_class,
                      options: uu,
                      onChange: (m) => p("structure", { ...e.structure, tempo_class: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Time signature", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.time_signature,
                      options: pu,
                      onChange: (m) => p("structure", { ...e.structure, time_signature: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.rhythm_feel,
                      options: mu,
                      onChange: (m) => p("structure", { ...e.structure, rhythm_feel: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Groove", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.groove_pattern,
                      options: hu,
                      onChange: (m) => p("structure", { ...e.structure, groove_pattern: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Form", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.song_form,
                      options: gu,
                      onChange: (m) => p("structure", { ...e.structure, song_form: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Length (s)", children: /* @__PURE__ */ t(
                    si,
                    {
                      value: e.structure?.length_seconds,
                      onChange: (m) => p("structure", { ...e.structure, length_seconds: m }),
                      min: 10,
                      max: 600,
                      placeholder: "180",
                      disabled: a
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Ra, { label: "Key", children: [
                  /* @__PURE__ */ t(he, { label: "Pitch", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.tonal?.key,
                      options: yu,
                      onChange: (m) => p("tonal", { ...e.tonal, key: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Mode", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.tonal?.mode,
                      options: fu,
                      onChange: (m) => p("tonal", { ...e.tonal, mode: m }),
                      disabled: a
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Ra, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(he, { label: "Range", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: bu,
                      onChange: (m) => p("dynamics", { ...e.dynamics, overall_dynamic_range: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: vu,
                      onChange: (m) => p("dynamics", { ...e.dynamics, crescendo_shape: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Big drops", children: /* @__PURE__ */ t(
                    li,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (m) => p("dynamics", { ...e.dynamics, has_big_drops: m }),
                      disabled: a
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Ra, { label: "Context", children: [
                  /* @__PURE__ */ t(he, { label: "Era", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.context?.era_reference,
                      options: wu,
                      onChange: (m) => p("context", { ...e.context, era_reference: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Region", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.context?.cultural_region,
                      options: ku,
                      onChange: (m) => p("context", { ...e.context, cultural_region: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Intensity", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.mood?.emotional_intensity,
                      options: xu,
                      onChange: (m) => p("mood", { ...e.mood, emotional_intensity: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    li,
                    {
                      value: e.context?.explicit_lyrics,
                      onChange: (m) => p("context", { ...e.context, explicit_lyrics: m }),
                      disabled: a
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "mt-4 flex flex-col gap-3", children: [
                /* @__PURE__ */ t(
                  oa,
                  {
                    label: "Primary instruments",
                    options: Tu,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (m) => p("instrumentation", { ...e.instrumentation, primary_instruments: m.length ? m : void 0 }),
                    disabled: a
                  }
                ),
                /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ s(Ra, { label: "Vocals", children: [
                    /* @__PURE__ */ t(he, { label: "Has vocals", children: /* @__PURE__ */ t(
                      ip,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (m) => p("instrumentation", { ...e.instrumentation, has_vocals: m }),
                        disabled: a
                      }
                    ) }),
                    /* @__PURE__ */ t(he, { label: "Gender", children: /* @__PURE__ */ t(
                      Be,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: Su,
                        onChange: (m) => p("instrumentation", { ...e.instrumentation, vocal_gender: m }),
                        disabled: a
                      }
                    ) }),
                    /* @__PURE__ */ t(he, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      np,
                      {
                        value: e.instrumentation?.language_iso639_1 ?? "",
                        onChange: (m) => p("instrumentation", { ...e.instrumentation, language_iso639_1: m.trim() || void 0 }),
                        placeholder: "en, es, ja…",
                        maxLength: 5,
                        disabled: a
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ t(
                    oa,
                    {
                      label: "Vocal style",
                      options: _u,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (m) => p("instrumentation", { ...e.instrumentation, vocal_style: m.length ? m : void 0 }),
                      disabled: a
                    }
                  ),
                  /* @__PURE__ */ t(
                    oa,
                    {
                      label: "Vocal processing",
                      options: Nu,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (m) => p("instrumentation", { ...e.instrumentation, vocal_processing: m.length ? m : void 0 }),
                      disabled: a
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  oa,
                  {
                    label: "Primary moods",
                    options: Cu,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (m) => p("mood", { ...e.mood, primary_moods: m.length ? m : void 0 }),
                    disabled: a
                  }
                ),
                /* @__PURE__ */ t(
                  oa,
                  {
                    label: "Occasion tags",
                    options: Eu,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (m) => p("mood", { ...e.mood, occasion_tags: m.length ? m : void 0 }),
                    disabled: a
                  }
                ),
                /* @__PURE__ */ t(
                  oa,
                  {
                    label: "Intended use",
                    options: Au,
                    selected: e.context?.intended_use ?? [],
                    onChange: (m) => p("context", { ...e.context, intended_use: m.length ? m : void 0 }),
                    disabled: a
                  }
                )
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-end mt-3", children: /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: b,
                  disabled: a || !g,
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
function Ra({ label: e, children: r }) {
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
    r
  ] });
}
function he({ label: e, children: r }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-secondary)", flexShrink: 0, minWidth: 90 }, children: e }),
    /* @__PURE__ */ t("div", { style: { flex: 1, minWidth: 0 }, children: r })
  ] });
}
function Be({
  value: e,
  options: r,
  onChange: a,
  disabled: o
}) {
  return /* @__PURE__ */ s(
    "select",
    {
      value: e ?? "",
      onChange: (i) => a(i.target.value === "" ? void 0 : i.target.value),
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
        r.map((i) => /* @__PURE__ */ t("option", { value: i, children: re(i) }, i))
      ]
    }
  );
}
function si({
  value: e,
  onChange: r,
  min: a,
  max: o,
  placeholder: i,
  disabled: l
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "number",
      value: e ?? "",
      min: a,
      max: o,
      placeholder: i,
      className: "w-full px-2 py-1 rounded-md focus:outline-none disabled:opacity-50",
      onChange: (d) => {
        const h = d.target.value;
        if (h === "") {
          r(void 0);
          return;
        }
        const g = Number(h);
        Number.isFinite(g) && r(g);
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
function np({
  value: e,
  onChange: r,
  placeholder: a,
  maxLength: o,
  disabled: i
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "text",
      value: e,
      placeholder: a,
      maxLength: o,
      onChange: (l) => r(l.target.value),
      disabled: i,
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
function li({
  value: e,
  onChange: r,
  disabled: a
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "checkbox",
      checked: !!e,
      onChange: (o) => r(o.target.checked ? !0 : void 0),
      disabled: a,
      style: { cursor: a ? "not-allowed" : "pointer" }
    }
  );
}
function ip({
  value: e,
  onChange: r,
  disabled: a
}) {
  const o = e === void 0 ? !0 : e === !0 ? !1 : void 0;
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: () => r(o),
      disabled: a,
      className: "px-2 py-0.5 rounded-full",
      style: {
        fontSize: 10,
        background: e === !0 ? "var(--accent-primary)" : e === !1 ? "#555" : "var(--bg-titlebar)",
        color: e === void 0 ? "var(--text-secondary)" : "white",
        border: "1px solid var(--border-subtle)",
        cursor: a ? "not-allowed" : "pointer"
      },
      children: e === void 0 ? "auto" : e ? "yes" : "no"
    }
  );
}
function oa({
  label: e,
  options: r,
  selected: a,
  onChange: o,
  disabled: i
}) {
  const l = (d) => {
    a.includes(d) ? o(a.filter((h) => h !== d)) : o([...a, d]);
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
          a.length > 0 && /* @__PURE__ */ s("span", { style: { marginLeft: 6, color: "var(--accent-primary)" }, children: [
            "· ",
            a.length
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: r.map((d) => {
      const h = a.includes(d);
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => l(d),
          disabled: i,
          className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-90 disabled:opacity-40",
          style: {
            fontSize: 10,
            background: h ? "var(--accent-primary)" : "var(--bg-titlebar)",
            color: h ? "white" : "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            cursor: i ? "not-allowed" : "pointer"
          },
          children: [
            h && /* @__PURE__ */ t(sa, { size: 10 }),
            re(d)
          ]
        },
        d
      );
    }) })
  ] });
}
function na(e) {
  const { intent: r, ...a } = e;
  let o = 0;
  const i = (l) => {
    if (!(!l || typeof l != "object")) {
      for (const d of Object.values(l))
        if (d != null) {
          if (Array.isArray(d)) {
            d.length && (o += 1);
            continue;
          }
          if (typeof d == "object") {
            i(d);
            continue;
          }
          d === "" || d === !1 || (o += 1);
        }
    }
  };
  return i(a), o;
}
const sp = "#4ade80", lp = "#fbbf24", Ar = (e) => e.models.music || e.models.cover ? sp : lp;
function cp({ endpoint: e, endpoints: r, onSwitch: a }) {
  const [o, i] = k(!1), l = ae(null), d = r.length > 1;
  W(() => {
    if (!o) return;
    const g = (p) => {
      l.current && !l.current.contains(p.target) && i(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [o]);
  const h = (g) => /* @__PURE__ */ t(
    "span",
    {
      className: "rounded-full",
      style: {
        width: 6,
        height: 6,
        background: g,
        flexShrink: 0,
        boxShadow: `0 0 6px ${g}`
      }
    }
  );
  return /* @__PURE__ */ s("div", { ref: l, className: "relative inline-flex", children: [
    /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        onClick: () => d && i((g) => !g),
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
          h(Ar(e)),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap" }, children: e.label }),
          d && /* @__PURE__ */ t(
            hi,
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
        children: r.map((g) => {
          const p = g.podId === e.podId;
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => {
                a(g.podId), i(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: p ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: h(Ar(g)) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: g.label }),
                    p && /* @__PURE__ */ t(sa, { size: 11, style: { color: "var(--accent-primary)" } })
                  ] }),
                  /* @__PURE__ */ s("div", { style: { fontSize: 9, color: "var(--text-disabled)", marginTop: 2 }, children: [
                    "music: ",
                    g.models.music ?? "—",
                    " · cover: ",
                    g.models.cover ?? "—"
                  ] })
                ] })
              ]
            },
            g.podId
          );
        })
      }
    )
  ] });
}
const ze = ({ icon: e, label: r, onClick: a, danger: o }) => /* @__PURE__ */ s(
  "button",
  {
    type: "button",
    onClick: a,
    className: "w-full flex items-center gap-2.5 px-3 h-8 text-sm transition-colors",
    style: {
      color: o ? "var(--accent-error, #ff6b6b)" : "var(--text-primary)",
      borderRadius: "var(--radius-sm)",
      margin: "0 4px",
      width: "calc(100% - 8px)",
      cursor: "pointer",
      background: "transparent"
    },
    onMouseEnter: (i) => {
      i.currentTarget.style.background = "var(--bg-hover)";
    },
    onMouseLeave: (i) => {
      i.currentTarget.style.background = "transparent";
    },
    children: [
      /* @__PURE__ */ t("span", { className: "shrink-0 opacity-80", children: e }),
      /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", style: { fontSize: 12 }, children: r })
    ]
  }
);
function dp({ tracks: e, player: r, onLoad: a, onOpenLyrics: o, onDelete: i, onRename: l }) {
  const { t: d } = Bt();
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
    e.map((h) => /* @__PURE__ */ t(
      up,
      {
        track: h,
        player: r,
        onLoad: a,
        onOpenLyrics: o,
        onDelete: i,
        onRename: l,
        translate: d
      },
      h.id
    ))
  ] });
}
function up({
  track: e,
  player: r,
  onLoad: a,
  onOpenLyrics: o,
  onDelete: i,
  onRename: l,
  translate: d
}) {
  const [h, g] = k(!1), [p, b] = k(null), m = r.state.trackId === e.id, f = m && r.state.playing, v = () => {
    if (p === null) return;
    const _ = p.trim();
    b(null), _ && _ !== e.title && l(e.id, _);
  }, x = new Date(e.createdAt).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => g(!0),
      onMouseLeave: () => g(!1),
      draggable: !0,
      onDragStart: (_) => {
        const E = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: Ce(e)
        };
        _.dataTransfer.setData(Ua, JSON.stringify(E)), e.lyricsPreview && _.dataTransfer.setData("text/plain", e.lyricsPreview), _.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => Ce(e) ? r.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: m ? "var(--bg-selected)" : h ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: Ce(e) ? f ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: m ? "var(--accent-primary)" : "var(--text-disabled)" }, children: Ce(e) ? f ? /* @__PURE__ */ t(At, { size: 11 }) : h ? /* @__PURE__ */ t(Te, { size: 11 }) : /* @__PURE__ */ t(Wa, { size: 11 }) : /* @__PURE__ */ t(Tr, { size: 11 }) }),
        /* @__PURE__ */ t("div", { className: "min-w-0", children: p !== null ? (
          // Inline rename editor — Enter commits, Escape cancels, blur
          // also commits so the user can click anywhere else and not
          // lose the edit. autoFocus + onClick.stopPropagation so the
          // row's own click handler (play/toggle) doesn't fire.
          /* @__PURE__ */ t(
            "input",
            {
              autoFocus: !0,
              value: p,
              onChange: (_) => b(_.target.value),
              onClick: (_) => _.stopPropagation(),
              onKeyDown: (_) => {
                _.stopPropagation(), _.key === "Enter" ? v() : _.key === "Escape" && b(null);
              },
              onBlur: v,
              maxLength: 200,
              className: "w-full px-1 py-0 rounded-md focus:outline-none focus:ring-1",
              style: {
                fontSize: 11,
                fontWeight: m ? 600 : 500,
                background: "var(--bg-window)",
                border: "1px solid var(--accent-primary)",
                color: "var(--text-primary)"
              }
            }
          )
        ) : /* @__PURE__ */ s(ge, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "truncate",
              style: { fontWeight: m ? 600 : 500 },
              onClick: (_) => _.stopPropagation(),
              onDoubleClick: (_) => {
                _.stopPropagation(), b(e.title);
              },
              title: "Double-click to rename",
              children: e.title || d("musiccreator.track.untitled")
            }
          ),
          e.styleTags && e.styleTags !== "—" && /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 9, color: "var(--text-disabled)" }, children: e.styleTags })
        ] }) }),
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? We(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: x }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (_) => {
              _.stopPropagation(), _.shiftKey ? o(e) : _.altKey ? i(e.id) : a(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(Ao, { size: 11 })
          }
        )
      ]
    }
  );
}
function pp({
  track: e,
  onDelete: r,
  onLoad: a,
  onOpenLyrics: o,
  onSaveSongToDesktop: i,
  onSaveLyricsToDesktop: l,
  onPlayInPlayer: d,
  onRename: h,
  onEditCover: g,
  onSelect: p,
  selected: b,
  player: m
}) {
  const { t: f } = Bt(), v = ae(null), [x, N] = k(!1), [_, E] = k(null), [C, S] = k(null), q = () => {
    if (C === null) return;
    const H = C.trim();
    S(null), H && H !== e.title && h(e.id, H);
  }, P = m.state.trackId === e.id, T = P && m.state.playing, A = P && m.state.durationMs > 0 ? m.state.positionMs / m.state.durationMs : 0;
  W(() => {
    if (!_) return;
    const H = (X) => {
      const Ie = X.target;
      v.current && Ie && v.current.contains(Ie) || Ie && Ie.closest?.("[data-track-menu]") || E(null);
    }, U = () => E(null);
    return setTimeout(() => window.addEventListener("mousedown", H), 0), window.addEventListener("scroll", U, !0), window.addEventListener("resize", U), () => {
      window.removeEventListener("mousedown", H), window.removeEventListener("scroll", U, !0), window.removeEventListener("resize", U);
    };
  }, [_]);
  const I = () => {
    const H = v.current?.getBoundingClientRect();
    if (!H) return;
    const U = 220, X = Math.min(H.right - U, window.innerWidth - U - 8), Ie = H.bottom + 4;
    E({ x: Math.max(8, X), y: Ie });
  }, L = (H) => () => {
    E(null), H();
  }, Y = () => m.toggle(e), G = () => {
    const H = document.createElement("a");
    H.href = e.audioDataUrl, H.download = `${e.title || "track"}.mp3`, H.click();
  };
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => N(!0),
      onMouseLeave: () => N(!1),
      draggable: !0,
      onDragStart: (H) => {
        const U = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: Ce(e)
        };
        H.dataTransfer.setData(Ua, JSON.stringify(U)), e.lyricsPreview && H.dataTransfer.setData("text/plain", e.lyricsPreview), H.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => p?.(e),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: b ? "var(--bg-selected)" : x ? "var(--bg-hover)" : "transparent",
        border: b ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: p ? "pointer" : "grab"
      },
      title: p ? "Click to open in player · drag to other fields" : "Drag to Desktop, Cover field, Text Editor, or any text field",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          Ce(e) ? /* @__PURE__ */ s(
            "button",
            {
              onClick: Y,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: T ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(ut, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Lr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: T ? /* @__PURE__ */ t(At, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(Te, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                children: /* @__PURE__ */ t(Tr, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
            C !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: C,
                onChange: (H) => S(H.target.value),
                onClick: (H) => H.stopPropagation(),
                onKeyDown: (H) => {
                  H.stopPropagation(), H.key === "Enter" ? q() : H.key === "Escape" && S(null);
                },
                onBlur: q,
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
                onDoubleClick: (H) => {
                  H.stopPropagation(), S(e.title);
                },
                title: "Double-click to rename",
                children: e.title || f("musiccreator.track.untitled")
              }
            ),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.durationMs > 0 ? We(e.durationMs) : f("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: v,
              onClick: (H) => {
                H.stopPropagation(), _ ? E(null) : I();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: x || _ ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(Ao, { size: 14 })
            }
          )
        ] }),
        _ && Ba(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: _.x,
                top: _.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                Ce(e) && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: f("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(ze, { icon: /* @__PURE__ */ t(Wa, { size: 14 }), label: f("musiccreator.track.playInPlayer"), onClick: L(() => d(e)) }),
                  /* @__PURE__ */ t(ze, { icon: /* @__PURE__ */ t(Rn, { size: 14 }), label: f("musiccreator.track.saveSongToDesktop"), onClick: L(() => i(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(ze, { icon: /* @__PURE__ */ t(yi, { size: 14 }), label: f("musiccreator.track.download"), onClick: L(G) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ s(ge, { children: [
                  Ce(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: f("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(ze, { icon: /* @__PURE__ */ t(Tr, { size: 14 }), label: f("musiccreator.track.openInEditor"), onClick: L(() => o(e)) }),
                  /* @__PURE__ */ t(ze, { icon: /* @__PURE__ */ t(Rn, { size: 14 }), label: f("musiccreator.track.saveLyricsToDesktop"), onClick: L(() => l(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(ze, { icon: /* @__PURE__ */ t(bi, { size: 14 }), label: "Rename", onClick: L(() => S(e.title)) }),
                /* @__PURE__ */ t(ze, { icon: /* @__PURE__ */ t($a, { size: 14 }), label: "Edit cover art", onClick: L(() => g(e)) }),
                /* @__PURE__ */ t(ze, { icon: /* @__PURE__ */ t(Ot, { size: 14 }), label: f("musiccreator.track.loadIntoForm"), onClick: L(() => a(e)) }),
                /* @__PURE__ */ t(ze, { icon: /* @__PURE__ */ t($t, { size: 14 }), label: f("musiccreator.track.delete"), onClick: L(() => r(e.id)), danger: !0 })
              ]
            }
          ),
          document.body
        ),
        T && /* @__PURE__ */ t(
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
function mp({
  trackIds: e,
  allTracks: r,
  player: a,
  onSelect: o
}) {
  const i = e.map((l) => r.find((d) => d.id === l)).filter((l) => !!l).slice(0, 6);
  return i.length === 0 ? null : /* @__PURE__ */ s("div", { className: "mb-2", children: [
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
    /* @__PURE__ */ t("div", { className: "flex gap-1.5 overflow-x-auto invisible-scrollbar pb-1", children: i.map((l) => {
      const d = a.state.trackId === l.id;
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
            /* @__PURE__ */ t(ut, { track: l, size: 68, iconSize: 20, radius: 6 }),
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
function hp({
  track: e,
  player: r,
  selected: a,
  isFavorite: o,
  onOpenInPlayer: i,
  onRemix: l,
  onToggleFavorite: d,
  onRemove: h,
  selectMode: g = !1,
  checked: p = !1,
  onToggleCheck: b
}) {
  const m = ae(null), [f, v] = k(!1), [x, N] = k(null), _ = r.state.trackId === e.id, E = _ && r.state.loadingTrackId === e.id, C = _ && r.state.playing, S = _ && r.state.durationMs > 0 ? r.state.positionMs / r.state.durationMs : 0;
  W(() => {
    if (!x) return;
    const I = (Y) => {
      const G = Y.target;
      m.current && G && m.current.contains(G) || G && G.closest?.("[data-track-menu]") || N(null);
    }, L = () => N(null);
    return setTimeout(() => window.addEventListener("mousedown", I), 0), window.addEventListener("scroll", L, !0), window.addEventListener("resize", L), () => {
      window.removeEventListener("mousedown", I), window.removeEventListener("scroll", L, !0), window.removeEventListener("resize", L);
    };
  }, [x]);
  const q = () => {
    const I = m.current?.getBoundingClientRect();
    if (!I) return;
    const L = 220, Y = Math.min(I.right - L, window.innerWidth - L - 8), G = I.bottom + 4;
    N({ x: Y, y: G });
  }, P = (I) => () => {
    N(null), I();
  }, T = e.externalUrl;
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => v(!0),
      onMouseLeave: () => v(!1),
      onClick: g ? () => {
        b && b(e);
      } : void 0,
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: g && p || a ? "var(--bg-selected)" : f ? "var(--bg-hover)" : "transparent",
        border: g && p || a ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: "pointer"
      },
      title: g ? p ? "Deselect" : "Select" : "Click to open in player",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          g ? /* @__PURE__ */ t(
            "span",
            {
              className: "flex items-center justify-center flex-shrink-0",
              style: {
                width: 36,
                height: 36,
                color: p ? "var(--accent-primary)" : "var(--text-disabled)"
              },
              "aria-hidden": !0,
              children: p ? /* @__PURE__ */ t(ki, { size: 20 }) : /* @__PURE__ */ t(Si, { size: 20 })
            }
          ) : /* @__PURE__ */ s(
            "button",
            {
              onClick: (I) => {
                I.stopPropagation(), r.toggle(e);
              },
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105",
              style: { width: 36, height: 36 },
              title: C ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(ut, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Lr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: E ? /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin", style: { color: "white" } }) : C ? /* @__PURE__ */ t(At, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(Te, { size: 14, style: { color: "white", marginLeft: 1 } })
                  }
                )
              ]
            }
          ),
          g ? /* @__PURE__ */ s("div", { className: "flex-1 min-w-0 text-left", children: [
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
              e.durationMs > 0 ? ` · ${We(e.durationMs)}` : ""
            ] })
          ] }) : /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => i(e),
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
                  e.durationMs > 0 ? ` · ${We(e.durationMs)}` : ""
                ] })
              ]
            }
          ),
          !g && /* @__PURE__ */ t(
            "button",
            {
              ref: m,
              onClick: (I) => {
                I.stopPropagation(), x ? N(null) : q();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: f || x ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(Ao, { size: 14 })
            }
          )
        ] }),
        x && Ba(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: x.x,
                top: x.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                /* @__PURE__ */ t(
                  ze,
                  {
                    icon: C ? /* @__PURE__ */ t(At, { size: 14 }) : /* @__PURE__ */ t(Te, { size: 14 }),
                    label: C ? "Pause" : "Play",
                    onClick: P(() => r.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  ze,
                  {
                    icon: /* @__PURE__ */ t(Wa, { size: 14 }),
                    label: "Open in player",
                    onClick: P(() => i(e))
                  }
                ),
                /* @__PURE__ */ t(
                  ze,
                  {
                    icon: /* @__PURE__ */ t(Ht, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: P(() => l(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  ze,
                  {
                    icon: /* @__PURE__ */ t(Sr, { size: 14, fill: o ? "currentColor" : "none" }),
                    label: o ? "Remove favorite" : "Add to favorites",
                    onClick: P(() => d(e))
                  }
                ),
                T && /* @__PURE__ */ t(
                  ze,
                  {
                    icon: /* @__PURE__ */ t(fi, { size: 14 }),
                    label: "Open source",
                    onClick: P(() => window.open(T, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  ze,
                  {
                    icon: /* @__PURE__ */ t($t, { size: 14 }),
                    label: "Remove from Library",
                    onClick: P(() => h(e)),
                    danger: !0
                  }
                )
              ]
            }
          ),
          document.body
        ),
        C && /* @__PURE__ */ t(
          "div",
          {
            className: "mt-1.5 rounded-full overflow-hidden",
            style: { height: 2, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${S * 100}%`,
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
function gp({
  track: e,
  endpoint: r,
  onSave: a,
  onClose: o
}) {
  const [i, l] = k(e.coverDataUrl), [d, h] = k(""), [g, p] = k(!1), [b, m] = k(null), f = ae(null), v = ae(null), x = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), N = kr(x, "", e.styleTags || "");
  W(() => {
    const C = (S) => {
      S.key === "Escape" && (S.stopPropagation(), o());
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [o]), W(() => () => v.current?.abort(), []);
  const _ = async () => {
    if (!r) {
      m("Connect to a pod to generate cover art.");
      return;
    }
    if (!r.models.image) {
      m(`This endpoint (${r.label}) has no image model. Pick one in JULI3TA Settings → Cover art.`);
      return;
    }
    if (g) return;
    v.current?.abort(), v.current = new AbortController();
    const C = v.current.signal;
    p(!0), m(null);
    try {
      const S = (d.trim() || N).slice(0, 1500), q = await Eo(r, S, C);
      if (C.aborted) return;
      l(q);
    } catch (S) {
      if (S.name === "AbortError") return;
      m(S.message || "Cover-art generation failed.");
    } finally {
      p(!1);
    }
  }, E = (C) => {
    if (m(null), !C.type.startsWith("image/")) {
      m("That file is not an image.");
      return;
    }
    if (C.size > 4 * 1024 * 1024) {
      m("Image is too big (limit 4 MB).");
      return;
    }
    const S = new FileReader();
    S.onerror = () => m("Could not read that image."), S.onload = () => {
      const q = S.result;
      typeof q == "string" && l(q);
    }, S.readAsDataURL(C);
  };
  return Ba(
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
            onClick: (C) => C.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t($a, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ s("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: [
                      "Cover Art — ",
                      x || "Untitled"
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: o,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close",
                        children: /* @__PURE__ */ t(xe, { size: 14 })
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
                        background: i ? `url(${i}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)"
                      },
                      children: [
                        !i && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t($a, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
                        g && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(oe, { size: 24, className: "animate-spin", style: { color: "white" } }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col gap-2 min-w-0", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: _,
                        disabled: g || !r?.models.image,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 12,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent",
                          cursor: g || !r?.models.image ? "not-allowed" : "pointer"
                        },
                        children: [
                          g ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(vi, { size: 12 }),
                          i ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => f.current?.click(),
                        disabled: g,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(Lo, { size: 12 }),
                          "Upload"
                        ]
                      }
                    ),
                    i && /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => l(""),
                        disabled: g,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(xe, { size: 12 }),
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
                      onChange: (C) => h(C.target.value),
                      placeholder: N,
                      disabled: g,
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
                      /* @__PURE__ */ t(Oa, { size: 12, style: { flexShrink: 0 } }),
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
                        disabled: g,
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
                          a(e.id, i), o();
                        },
                        disabled: g,
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
                  onChange: (C) => {
                    const S = C.target.files?.[0];
                    S && E(S), C.target.value = "";
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
function vr({ label: e, children: r }) {
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
    /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap" }, children: r })
  ] });
}
function yp({
  songName: e,
  mode: r,
  theme: a,
  style: o,
  intent: i,
  lyrics: l,
  specs: d,
  coverDataUrl: h,
  endpoint: g,
  busy: p,
  onRegenerate: b,
  onUpload: m,
  onClear: f,
  onClose: v
}) {
  const x = ae(null), N = ye(() => Uo(d), [d]), _ = ye(() => na(d), [d]);
  W(() => {
    const S = (q) => {
      q.key === "Escape" && (q.stopPropagation(), v());
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [v]);
  const E = r === "restyle" ? "Restyle" : r === "lyricsOnly" ? "Lyrics only" : "Song", C = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Ba(
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
            onClick: (S) => S.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3 flex-shrink-0",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(Ut, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                        children: E
                      }
                    ),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: v,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(xe, { size: 14 })
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
                      background: h ? `url(${h}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "var(--shadow-md)"
                    },
                    children: [
                      !h && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t($a, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
                      p && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(oe, { size: 28, className: "animate-spin", style: { color: "white" } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
                  /* @__PURE__ */ s("div", { children: [
                    /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }, children: C }),
                    o.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: o.trim() })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: b,
                        disabled: p || !g?.models.image,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 11,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent",
                          cursor: p || !g?.models.image ? "not-allowed" : "pointer"
                        },
                        title: g?.models.image ? "Generate cover art" : "No image model available",
                        children: [
                          p ? /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 11 }),
                          h ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: () => x.current?.click(),
                        disabled: p,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(Lo, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    h && /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: f,
                        disabled: p,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(xe, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  a.trim() && /* @__PURE__ */ t(vr, { label: "Theme", children: a.trim() }),
                  i.trim() && /* @__PURE__ */ t(vr, { label: "Lyrics Direction", children: i.trim() }),
                  _ > 0 && N && /* @__PURE__ */ t(vr, { label: `Track Specs (${_} set)`, children: N }),
                  l.trim() && /* @__PURE__ */ t(vr, { label: "Lyrics", children: /* @__PURE__ */ t(
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
                  !a.trim() && !i.trim() && _ === 0 && !l.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: x,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (S) => {
                    const q = S.target.files?.[0];
                    q && m(q), S.target.value = "";
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
function fp(e) {
  if (!e || e <= 0) return "—";
  const r = e / 1024;
  return r < 1024 ? `${r.toFixed(1)} KB` : `${(r / 1024).toFixed(2)} MB`;
}
function bp(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function vp(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function xp(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function wp(e) {
  const r = [], a = [];
  e.structure?.tempo_bpm ? a.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && a.push({ label: "Tempo", value: re(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && a.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && a.push({ label: "Feel", value: re(e.structure.rhythm_feel) }), e.structure?.groove_pattern && a.push({ label: "Groove", value: re(e.structure.groove_pattern) }), e.structure?.song_form && a.push({ label: "Form", value: re(e.structure.song_form) }), e.structure?.length_seconds && a.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), a.length && r.push({ label: "Structure", rows: a });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: re(e.tonal.mode) }), o.length && r.push({ label: "Tonal", rows: o });
  const i = [];
  if (e.instrumentation?.primary_instruments?.length && i.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(re).join(", ") }), e.instrumentation?.has_vocals === !1)
    i.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const g = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && g.push(re(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && g.push(e.instrumentation.vocal_style.map(re).join("/")), i.push({ label: "Vocals", value: g.length ? g.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && i.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(re).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && i.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), i.length && r.push({ label: "Instrumentation", rows: i });
  const l = [];
  e.dynamics?.overall_dynamic_range && l.push({ label: "Range", value: re(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && l.push({ label: "Crescendo", value: re(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && l.push({ label: "Big drops", value: "Yes" }), l.length && r.push({ label: "Dynamics", rows: l });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: re(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(re).join(", ") }), d.length && r.push({ label: "Mood", rows: d });
  const h = [];
  return e.context?.era_reference && h.push({ label: "Era", value: re(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && h.push({ label: "Region", value: re(e.context.cultural_region) }), e.context?.intended_use?.length && h.push({ label: "Use", value: e.context.intended_use.map(re).join("/") }), e.context?.explicit_lyrics && h.push({ label: "Explicit", value: "Yes" }), h.length && r.push({ label: "Context", rows: h }), r;
}
function lt({ label: e, value: r }) {
  return /* @__PURE__ */ s("div", { className: "flex items-baseline", style: { fontSize: 13, gap: 14 }, children: [
    /* @__PURE__ */ t("span", { style: {
      color: "var(--text-disabled)",
      flexShrink: 0,
      minWidth: 84,
      fontSize: 12
    }, children: e }),
    /* @__PURE__ */ t("span", { style: { color: "var(--text-primary)", lineHeight: 1.5 }, children: r })
  ] });
}
function Pt({ label: e, children: r }) {
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
        /* @__PURE__ */ t("div", { className: "flex flex-col", style: { gap: 10 }, children: r })
      ]
    }
  );
}
function Yi({
  base64: e,
  src: r,
  onPlay: a,
  title: o = "Preview reference audio",
  height: i = 30,
  style: l
}) {
  const d = ye(() => e || Pu(r), [e, r]), h = ye(
    () => d ? Cr(d) : null,
    [d]
  ), [g, p] = k(null), [b, m] = k(null);
  W(() => {
    if (m(null), !d) {
      p(null);
      return;
    }
    let N = null;
    try {
      N = URL.createObjectURL(ju(d)), p(N);
    } catch {
      p(null);
    }
    return () => {
      N && URL.revokeObjectURL(N);
    };
  }, [d]);
  const f = (N) => {
    Number.isFinite(N.duration) && N.duration > 0.1 && m(N.duration * 1e3);
  }, v = b ?? h;
  return /* @__PURE__ */ s("div", { style: l, children: [
    /* @__PURE__ */ t(
      "audio",
      {
        controls: !0,
        preload: "metadata",
        src: g || r || "",
        onLoadedMetadata: (N) => f(N.currentTarget),
        onDurationChange: (N) => f(N.currentTarget),
        onPlay: a,
        style: { width: "100%", height: i },
        title: o
      }
    ),
    v && v > 0 && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: [
      "Reference preview · ",
      We(v)
    ] })
  ] });
}
function kp({
  audioSrc: e,
  sourceLabel: r,
  onUserPlay: a
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
            title: r,
            children: r
          }
        ),
        /* @__PURE__ */ t(
          Yi,
          {
            src: e,
            onPlay: a,
            title: "Preview the exact compact reference sample sent to MiniMax cover mode",
            height: 32
          }
        )
      ]
    }
  );
}
function Sp(e, r, a, o) {
  if (!e || r.length === 0) return null;
  if (o === "one") return { kind: "repeating" };
  const i = r.filter(Ce);
  if (i.length === 0) return null;
  if (a) return { kind: "random" };
  const l = i.findIndex((d) => d.id === e);
  return l < 0 ? null : l + 1 < i.length ? { kind: "track", track: i[l + 1] } : o === "all" ? { kind: "track", track: i[0] } : { kind: "end" };
}
function Tp({ text: e }) {
  const [r, a] = k(!1);
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(e), a(!0), setTimeout(() => a(!1), 1500);
        } catch {
        }
      },
      className: "flex items-center gap-1 rounded-md transition-all hover:bg-[var(--bg-hover)]",
      style: {
        height: 22,
        padding: "0 8px",
        fontSize: 10,
        fontWeight: 700,
        color: r ? "var(--accent-primary)" : "var(--text-secondary)",
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)",
        textTransform: "none",
        letterSpacing: 0
      },
      title: r ? "Copied to clipboard" : "Copy lyrics to clipboard",
      children: [
        r ? /* @__PURE__ */ t(sa, { size: 11 }) : /* @__PURE__ */ t(gi, { size: 11 }),
        r ? "Copied" : "Copy"
      ]
    }
  );
}
const _p = /^\s*\[([^\]]+)\]\s*$/;
function Np({ text: e }) {
  const r = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: r.map((a, o) => {
    const i = a.match(_p);
    return i ? /* @__PURE__ */ t(
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
        children: i[1].trim()
      },
      o
    ) : a.trim() === "" ? /* @__PURE__ */ t("div", { style: { height: 8 } }, o) : /* @__PURE__ */ t("div", { style: { whiteSpace: "pre-wrap" }, children: a }, o);
  }) });
}
function Cp({ track: e, player: r, restyleOriginal: a, onEditInCreator: o, onSwitchToCreator: i, onSearchMusic: l }) {
  const { t: d } = Bt(), h = e?.specsJson ?? "", g = ye(() => {
    if (!h) return {};
    try {
      return JSON.parse(h);
    } catch {
      return {};
    }
  }, [h]), p = (g.intent ?? "").trim(), b = ye(() => wp(g), [g]);
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
          onClick: i,
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
            /* @__PURE__ */ t(dt, { size: 13 }),
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
  const m = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", f = Ce(e), v = Lr(e), x = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", N = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", _ = r.state.trackId === e.id, E = _ && r.state.playing, C = _ && r.state.loadingTrackId === e.id, S = e.source === "youtube", q = r.queue.filter((P) => P.id !== e.id && (P.artist || "").trim() && P.artist === e.artist).slice(0, 4);
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
              f && r.toggle(e);
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
            title: f ? _ && E ? "Pause" : "Play" : "Lyric sheet — no audio",
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
                    opacity: _ && E ? 0 : 1
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
                      children: _ && E ? /* @__PURE__ */ t(At, { size: 30, style: { color: "white" } }) : C ? /* @__PURE__ */ t(oe, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(Te, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                f ? /* @__PURE__ */ t(Te, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(Ot, { size: 10 }),
                S ? "YouTube track" : d(f ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
              ]
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "leading-none",
              style: {
                fontSize: m.length > 24 ? 38 : m.length > 14 ? 52 : 64,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.035em",
                wordBreak: "break-word",
                marginBottom: 16,
                textShadow: "0 2px 16px rgba(0,0,0,0.4)"
              },
              children: m
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center flex-wrap",
              style: { fontSize: 13, color: "rgba(255,255,255,0.85)", gap: 8 },
              children: [
                /* @__PURE__ */ t(zo, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: x }),
                e.source === "youtube" && e.album && e.album !== x && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                N && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: N })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: We(e.durationMs) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "mt-5 flex items-center gap-3 flex-wrap", children: [
            f && /* @__PURE__ */ t(
              "button",
              {
                onClick: () => r.toggle(e),
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
                title: _ && E ? "Pause" : "Play",
                children: C ? /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t(oe, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : _ && E ? /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t(At, { size: 16 }),
                  " ",
                  d("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t(Te, { size: 16, style: { marginLeft: 2 } }),
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
                  /* @__PURE__ */ t(Ht, { size: 13 }),
                  d("musiccreator.player.remixInRestyle")
                ]
              }
            ),
            e.audioDataUrl && f && /* @__PURE__ */ s(
              "button",
              {
                onClick: () => {
                  const P = document.createElement("a");
                  P.href = e.audioDataUrl, P.download = `${(e.title || "track").replace(/[\\/:*?"<>|]/g, "_")}.mp3`, document.body.appendChild(P), P.click(), document.body.removeChild(P);
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
                  /* @__PURE__ */ t(yi, { size: 13 }),
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
              e.lyricsPreview && /* @__PURE__ */ t(Tp, { text: e.lyricsPreview })
            ]
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(Np, { text: e.lyricsPreview }) : S ? /* @__PURE__ */ s(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(nc, { size: 18 }) }),
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
                  /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.durationMs ? We(e.durationMs) : "Unknown" })
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
                    /* @__PURE__ */ t(fi, { size: 13 }),
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
              /* @__PURE__ */ t(Ot, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: d("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        a && a.trackId === e.id && /* @__PURE__ */ t(
          kp,
          {
            audioSrc: a.audioSrc,
            sourceLabel: a.sourceLabel,
            onUserPlay: () => {
              r.state.playing && r.pause();
            }
          }
        ),
        e.id === r.state.trackId && (() => {
          const P = Sp(
            r.state.trackId,
            r.queue,
            r.state.shuffle,
            r.state.repeatMode
          );
          return P ? /* @__PURE__ */ s(Pt, { label: "Up next", children: [
            P.kind === "track" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ t(ut, { track: P.track, size: 32, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: P.track.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: P.track.artist || (P.track.styleTags && P.track.styleTags !== "—" ? P.track.styleTags : "JULI3TA") })
              ] })
            ] }),
            P.kind === "random" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(Mo, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Random next track from your queue." })
            ] }),
            P.kind === "repeating" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(xi, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Repeating this track." })
            ] }),
            P.kind === "end" && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-disabled)" }, children: "End of queue." })
          ] }) : null;
        })(),
        e.theme.trim() && /* @__PURE__ */ t(Pt, { label: d("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        p && /* @__PURE__ */ t(Pt, { label: d("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: p }) }),
        b.map((P) => /* @__PURE__ */ t(Pt, { label: P.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: P.rows.map((T) => /* @__PURE__ */ t(lt, { label: T.label, value: T.value }, `${P.label}-${T.label}`)) }) }, P.label)),
        S && /* @__PURE__ */ t(Pt, { label: "Artist / Source", children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(vc, { size: 20 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        q.length > 0 && /* @__PURE__ */ t(Pt, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: q.map((P) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => r.select(P),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(ut, { track: P, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: P.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: P.durationMs ? We(P.durationMs) : "Streamed" })
              ] })
            ]
          },
          P.id
        )) }) }),
        /* @__PURE__ */ t(Pt, { label: d("musiccreator.player.about"), children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.created"), value: xp(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(lt, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(lt, { label: "Channel", value: e.album }),
          f && e.durationMs > 0 && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.duration"), value: We(e.durationMs) }),
          e.source !== "youtube" && f && e.bitrate > 0 && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.bitrate"), value: bp(e.bitrate) }),
          e.source !== "youtube" && f && e.sampleRate > 0 && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.sampleRate"), value: vp(e.sampleRate) }),
          e.source !== "youtube" && f && e.sizeBytes > 0 && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.size"), value: fp(e.sizeBytes) }),
          N && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.style"), value: N }),
          /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : d(f ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Ep({
  tab: e,
  onTabChange: r,
  query: a,
  onQueryChange: o,
  searchHistory: i,
  onClearSearchHistory: l,
  resultType: d,
  onResultTypeChange: h,
  results: g,
  busy: p,
  error: b,
  status: m,
  providers: f,
  connectors: v,
  libraryTracks: x,
  playlists: N,
  playlistNameDraft: _,
  playlistBusy: E,
  favoriteIds: C,
  warmupIds: S,
  previewBusyId: q,
  addBusyId: P,
  savedYoutubeIds: T,
  player: A,
  onWarmResult: I,
  onPreview: L,
  onAdd: Y,
  onOpenTrack: G,
  onToggleFavorite: qe,
  onRemoveLibraryTrack: H,
  onPlaylistNameDraftChange: U,
  onCreatePlaylist: X,
  onAddTrackToPlaylist: Ie,
  onRemoveTrackFromPlaylist: pa,
  onPlayPlaylist: Ir,
  onDeletePlaylist: Je,
  onConfigureConnector: Wt,
  onDisconnectConnector: Ee,
  onClose: qa
}) {
  const [te, Ge] = k(null), [Mt, xt] = k({}), [Ke, wt] = k(!1), [kt, Ae] = k(null), [St, Re] = k(null), [Pe, Tt] = k(null);
  W(() => {
    Re(null), Tt(null);
  }, [e]);
  const _t = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(x.map((y) => y.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(x.map((y) => y.album || y.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: N.length },
    { id: "sources", label: "Sources", count: f.length || 4 }
  ], tt = (y) => {
    const j = A.state.trackId === y.id, B = j && A.state.loadingTrackId === y.id, Se = j && A.state.playing;
    return /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(ut, { track: y, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ s("button", { type: "button", onClick: () => G(y), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: y.title }),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              y.artist || "Unknown",
              y.album ? ` · ${y.album}` : "",
              y.durationMs ? ` · ${We(y.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => qe(y),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: C.has(y.id) ? "white" : "var(--text-secondary)",
                background: C.has(y.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: C.has(y.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(Sr, { size: 13, fill: C.has(y.id) ? "currentColor" : "none" })
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
                B ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : Se ? /* @__PURE__ */ t(At, { size: 12 }) : /* @__PURE__ */ t(Te, { size: 12 }),
                B ? "Loading" : Se ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => H(y),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t($t, { size: 13 })
            }
          )
        ]
      },
      y.id
    );
  }, ke = Array.from(
    x.reduce((y, j) => {
      const B = (j.artist || "Unknown artist").trim();
      return y.set(B, [...y.get(B) ?? [], j]), y;
    }, /* @__PURE__ */ new Map())
  ).sort((y, j) => y[0].localeCompare(j[0])), je = Array.from(
    x.reduce((y, j) => {
      const B = (j.album || j.artist || "YouTube collection").trim();
      return y.set(B, [...y.get(B) ?? [], j]), y;
    }, /* @__PURE__ */ new Map())
  ).sort((y, j) => y[0].localeCompare(j[0])), qt = f.length > 0 ? f.map((y) => {
    const j = v.find((_e) => _e.provider === y.id), B = j?.connected ?? y.configured, Se = j?.oauthRequired ?? y.state === "oauth_required";
    return {
      id: y.id,
      name: y.name,
      state: B ? "Connected" : Se ? "OAuth required" : y.state.replace(/_/g, " "),
      body: j?.message ?? y.message,
      action: B ? "Manage" : Se ? "Coming soon" : "Configure",
      enabled: B,
      needs: y.needs,
      kind: y.kind,
      connector: j,
      oauthRequired: Se,
      configurable: j?.configurable ?? !Se
    };
  }) : [
    {
      id: "youtube",
      name: "YouTube",
      state: m?.ready ? "Connected" : "Starting",
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
          m && /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center gap-2 rounded-full px-3",
              style: {
                height: 30,
                fontSize: 11,
                color: m.ready ? "var(--status-success)" : "var(--text-secondary)",
                background: "var(--bg-titlebar)",
                border: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("span", { style: { width: 7, height: 7, borderRadius: "var(--radius-full)", background: m.ready ? "var(--status-success)" : "var(--accent-secondary)" } }),
                m.ready ? "Music engine ready" : m.installing ? "Installing engine…" : "Music engine offline"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: qa,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(xe, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: _t.map((y) => /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => r(y.id),
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
            value: a,
            onChange: (y) => o(y.target.value),
            placeholder: "Search music, artists, albums…",
            className: "flex-1 bg-transparent outline-none",
            style: { color: "var(--text-primary)", fontSize: 14, fontWeight: 600 },
            autoFocus: !0
          }
        ),
        p && /* @__PURE__ */ t(oe, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        a && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(xe, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((y) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => h(y),
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
      e === "search" && a.trim().length < 2 && i.length > 0 && /* @__PURE__ */ s("div", { className: "mt-3 flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.7, fontWeight: 800 }, children: "Recent" }),
        i.map((y) => /* @__PURE__ */ t(
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
            children: /* @__PURE__ */ t(xe, { size: 11 })
          }
        )
      ] }),
      b && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: b })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
        a.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        a.trim().length >= 2 && !p && g.length === 0 && !b && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        p && g.length === 0 && Array.from({ length: 5 }).map((y, j) => /* @__PURE__ */ s(
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
              /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${j}`
        )),
        g.map((y) => {
          const j = Gi(y.title, y.channel), B = T.has(y.id), Se = q === y.id, _e = P === y.id, pe = S.has(y.id);
          return /* @__PURE__ */ s(
            "div",
            {
              onMouseEnter: () => I(y),
              onFocus: () => I(y),
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                y.thumbnailUrl || Er(y.id) ? /* @__PURE__ */ t("img", { src: y.thumbnailUrl || Er(y.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Wa, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: j.song }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    j.artist || y.channel || "Music",
                    y.durationMs ? ` · ${We(y.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: y.title })
                ] }),
                pe && !Se && /* @__PURE__ */ s("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(oe, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => L(y),
                    disabled: Se,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      Se ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Te, { size: 12 }),
                      Se ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => Y(y),
                    disabled: B || _e,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: B ? "var(--text-disabled)" : "white", background: B ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      _e ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : B ? /* @__PURE__ */ t(sa, { size: 12 }) : /* @__PURE__ */ t(ko, { size: 12 }),
                      _e ? "Adding" : B ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            y.id
          );
        })
      ] }),
      e === "artists" && (St !== null ? (() => {
        const y = ke.find(([j]) => j === St)?.[1] ?? [];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Re(null),
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
                  /* @__PURE__ */ t(zn, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: St }),
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
                onClick: () => G(y[0]),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(Te, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: y.map(tt) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        ke.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        ke.map(([y, j]) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => Re(y),
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
      e === "albums" && (Pe !== null ? (() => {
        const j = je.find(([Se]) => Se === Pe)?.[1] ?? [], B = j[0];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Tt(null),
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
                  /* @__PURE__ */ t(zn, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            B && /* @__PURE__ */ t(ut, { track: B, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Pe }),
              /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                B?.artist || "Mixed artists",
                " · ",
                j.length,
                " track",
                j.length === 1 ? "" : "s"
              ] })
            ] }),
            B && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => G(B),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(Te, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: j.map(tt) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        je.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        je.map(([y, j]) => {
          const B = j[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => Tt(y),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${y}`,
              children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                B && /* @__PURE__ */ t(ut, { track: B, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ s("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: y }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    B?.artist || "Mixed artists",
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
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(ql, { size: 22 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: _,
              onChange: (y) => U(y.target.value),
              onKeyDown: (y) => {
                y.key === "Enter" && X();
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
              onClick: X,
              disabled: E,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                E ? /* @__PURE__ */ t(oe, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(ko, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        N.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : N.map((y) => /* @__PURE__ */ s("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
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
                  onClick: () => Ir(y),
                  disabled: y.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(Te, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => Je(y.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t($t, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: y.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : y.items.map((j) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(ut, { track: j, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ s("button", { type: "button", onClick: () => G(j), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: j.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: j.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => pa(y.id, j.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(xe, { size: 13 })
              }
            )
          ] }, `${y.id}-${j.id}`)) }),
          x.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: x.slice(0, 8).filter((j) => !y.items.some((B) => B.id === j.id)).map((j) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => Ie(y.id, j),
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
        qt.map((y) => /* @__PURE__ */ s(
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
                    children: y.name === "Spotify" ? "♬" : y.name === "YouTube" ? /* @__PURE__ */ t(Te, { size: 18 }) : y.kind === "catalog" ? /* @__PURE__ */ t(kl, { size: 18 }) : /* @__PURE__ */ t(Ut, { size: 18 })
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
                      const j = y.connector?.credentialSpecs ?? y.needs.map((B) => ({ name: B, label: B, secret: !0, required: !0 }));
                      xt({}), Ae(null), Ge({
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
        te && /* @__PURE__ */ s("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                te.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: te.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => Ge(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(xe, { size: 16 }) })
          ] }),
          te.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ s(ge, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: te.specs.map((y) => /* @__PURE__ */ s("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: y.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: y.label || y.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: Mt[y.name] ?? "",
                  type: y.secret ? "password" : "text",
                  onChange: (j) => xt((B) => ({ ...B, [y.name]: j.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: y.name
                }
              )
            ] }, y.name)) }),
            kt && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: kt }),
            /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  disabled: Ke || !te.configurable,
                  onClick: () => {
                    wt(!0), Ae(null), Wt(te.id, Mt).then(() => {
                      xt({}), Ge(null);
                    }).catch((y) => Ae(y.message || "Connector setup failed.")).finally(() => wt(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Ke ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(sa, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              te.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Ke,
                  onClick: () => {
                    wt(!0), Ae(null), Ee(te.id).then(() => Ge(null)).catch((y) => Ae(y.message || "Disconnect failed.")).finally(() => wt(!1));
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
const Pa = {
  theme: !1,
  style: !1,
  lyrics: !1,
  specs: !1,
  cover: !1
}, Ap = {
  theme: null,
  style: null,
  lyrics: null,
  specs: null,
  cover: null
}, ja = (e) => e?.name === "AbortError";
function Mp() {
  const { host: e } = Ft(), r = Rc(), { t: a } = Bt(), o = jc(), i = $c(), { state: l, dispatch: d } = Ni(), { addNotification: h } = Bc(), g = l.theme.mode, [p, b] = k("compose"), [m, f] = k(!1), [v, x] = k("creator"), [N, _] = k(() => {
    try {
      const n = localStorage.getItem("juli3ta:selectedPlayerTrackId");
      return n && n.length > 0 ? n : null;
    } catch {
      return null;
    }
  });
  W(() => {
    try {
      N ? localStorage.setItem("juli3ta:selectedPlayerTrackId", N) : localStorage.removeItem("juli3ta:selectedPlayerTrackId");
    } catch {
    }
  }, [N]);
  const [E, C] = k(""), [S, q] = k(""), [P, T] = k(null), [A, I] = k(""), [L, Y] = k(""), [G, qe] = k(!1), [H, U] = k(""), [X, Ie] = k(""), [pa, Ir] = k(!0), [Je, Wt] = k(!1), [Ee, qa] = k(null), [te, Ge] = k({}), [Mt, xt] = k(!1), [Ke, wt] = k(() => ({ ...Pa })), kt = ae({ ...Pa }), Ae = ae({ ...Ap }), St = z((n, c) => {
    kt.current = { ...kt.current, [n]: c }, wt((u) => u[n] === c ? u : { ...u, [n]: c });
  }, []), Re = z((n) => {
    if (kt.current[n]) return null;
    Ae.current[n]?.abort();
    const c = new AbortController();
    return Ae.current[n] = c, St(n, !0), c;
  }, [St]), Pe = z((n, c) => {
    Ae.current[n] === c && (Ae.current[n] = null), St(n, !1);
  }, [St]), Tt = z(() => {
    Object.keys(Ae.current).forEach((n) => {
      Ae.current[n]?.abort(), Ae.current[n] = null;
    }), kt.current = { ...Pa }, wt({ ...Pa }), Wt(!1), xt(!1);
  }, []), [_t, tt] = k(null), [ke, je] = k(null), [qt, y] = k(null), [j, B] = k(null), [Se, _e] = k(null), [pe, ma] = k(!1), [Jt, Ja] = k(null), [Ki, ha] = k(!1), [Xi, Ga] = k(!1), [Rr, Pr] = k([]), $o = ae(null), Ho = ae(null), [jr, Fo] = k(!1), [at, Bo] = k("best"), [Qi, Zi] = k(null), [es, Va] = k(!1), [mt, Wo] = k("mic"), [rt, Dr] = k(!1), [qo, Jo] = k(0), [Go, ga] = k(null), Vo = ae(null), Ya = ae([]), Gt = ae(null), Ur = ae(0), ya = ae(null), [Vt, $e] = k("idle"), [fa, V] = k(null), [ts, Yt] = k(0), [Yo, Ko] = k(0), [Lt, Ve] = k([]), [Kt, se] = k(null), [Ne, Ka] = k(""), [ba, Xo] = k("cards"), [de, Xa] = k(() => {
    try {
      return localStorage.getItem("juli3ta:sidebarTab") === "library" ? "library" : "mywork";
    } catch {
      return "mywork";
    }
  }), [De, Qo] = k(() => {
    try {
      const n = localStorage.getItem("juli3ta:myWorkChip");
      if (n === "all" || n === "songs" || n === "restyles" || n === "lyrics") return n;
    } catch {
    }
    return "all";
  }), [Xe, Or] = k(() => {
    try {
      return localStorage.getItem("juli3ta:libraryChip") === "favorites" ? "favorites" : "all";
    } catch {
      return "all";
    }
  });
  W(() => {
    try {
      localStorage.setItem("juli3ta:sidebarTab", de);
    } catch {
    }
  }, [de]), W(() => {
    try {
      localStorage.setItem("juli3ta:myWorkChip", De);
    } catch {
    }
  }, [De]), W(() => {
    try {
      localStorage.setItem("juli3ta:libraryChip", Xe);
    } catch {
    }
  }, [Xe]);
  const [Qa, as] = k(() => {
    try {
      const n = localStorage.getItem("juli3ta:recentlyPlayedIds"), c = n ? JSON.parse(n) : null;
      return Array.isArray(c) ? c.filter((u) => typeof u == "string").slice(0, 8) : [];
    } catch {
      return [];
    }
  });
  W(() => {
    try {
      localStorage.setItem("juli3ta:recentlyPlayedIds", JSON.stringify(Qa));
    } catch {
    }
  }, [Qa]);
  const [zt, $r] = k(!1), [ht, Za] = k(() => /* @__PURE__ */ new Set()), [Hr, Fr] = k(!1), [gt, He] = k(!1), [rs, va] = k("search"), [Br, os] = k(""), [ns, Zo] = k(() => {
    try {
      const n = localStorage.getItem("juli3ta:searchHistory"), c = n ? JSON.parse(n) : null;
      return Array.isArray(c) ? c.filter((u) => typeof u == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), en = z((n) => {
    const c = n.trim();
    c.length < 2 || Zo((u) => {
      const w = [c, ...u.filter((M) => M.toLowerCase() !== c.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(w));
      } catch {
      }
      return w;
    });
  }, []), [xa, is] = k("tracks"), [ss, Wr] = k([]), [ls, er] = k(!1), [cs, yt] = k(null), [ds, tn] = k(null), [us, an] = k([]), [ps, rn] = k([]), [wa, ms] = k({}), [hs, on] = k(() => /* @__PURE__ */ new Set()), [gs, nn] = k(null), [ys, sn] = k(null), [ln, cn] = k([]), [be, qr] = k([]), [Xt, Jr] = k(() => /* @__PURE__ */ new Set()), [ka, Qt] = k([]), [dn, fs] = k(!1), [Gr, un] = k(""), [bs, pn] = k(!1), mn = ae(/* @__PURE__ */ new Map()), Vr = ae(/* @__PURE__ */ new Map()), Zt = ae(wa), Yr = ae(/* @__PURE__ */ new Map()), [tr, Sa] = k(null), [ar, hn] = k(!1), [Kr, gn] = k(Mi), [vs, rr] = k(!1);
  W(() => {
    Zt.current = wa;
  }, [wa]), W(() => {
    let n = !1;
    return (async () => {
      try {
        await Promise.all([
          Uu(),
          Cd()
        ]);
      } catch (J) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", J);
      }
      await ud().catch((J) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", J);
      });
      const [c, u, w, M, R, O, D, me] = await Promise.allSettled([
        Vc(),
        mo(),
        nd(),
        Fn(),
        cd(),
        pd("track"),
        Ma(),
        _d()
      ]);
      if (n) return;
      const Ue = c.status === "fulfilled" ? c.value : [], Le = u.status === "fulfilled" ? u.value.tracks.map((J) => ({ ...J, source: "juli3ta" })) : [];
      u.status === "fulfilled" && (Sa(u.value.rootPath), se((J) => J?.startsWith("Real file library unavailable") ? null : J)), c.status === "fulfilled" ? Ve(La(Le, Ue)) : (console.error("[Juli3ta] listTracks failed:", c.reason), Ve(La(Le)), se("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), u.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", u.reason), se("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const Ye = new Set(Le.map((J) => J.id)), Qe = new Set(Ue.map((J) => J.id)), Oe = Ue.filter((J) => !Ye.has(J.id) && cu(J)), Fe = Le.filter((J) => !Qe.has(J.id));
      (Oe.length > 0 || Fe.length > 0) && (async () => {
        const J = [];
        for (const ue of Oe)
          try {
            const It = await Yn({ ...ue, source: "juli3ta" });
            J.push({ ...ue, ...It, source: "juli3ta" });
          } catch (It) {
            console.warn("[Juli3ta] host file backfill failed:", ue.id, It);
          }
        for (const ue of Fe)
          try {
            await Nr({ ...ue, source: "juli3ta" });
          } catch (It) {
            console.warn("[Juli3ta] standalone cache backfill failed:", ue.id, It);
          }
        !n && (J.length > 0 || Fe.length > 0) && (Ve((ue) => La(J, Fe, ue)), mo().then((ue) => Sa(ue.rootPath)).catch(() => {
        }));
      })(), w.status === "fulfilled" && gn(w.value), M.status === "fulfilled" && Pr(M.value);
      const Z = {
        version: 1,
        updatedAt: Date.now(),
        tracks: R.status === "fulfilled" ? R.value : [],
        favorites: O.status === "fulfilled" ? O.value : [],
        playlists: D.status === "fulfilled" ? D.value : []
      }, ie = me.status === "fulfilled" ? me.value : null, ve = Sd(), le = $n(
        $n(Z, ve),
        ie
      );
      await bd(le).catch((J) => {
        console.warn("[Juli3ta] music library durable import failed:", J);
      }), !n && (qr(le.tracks), Jr(new Set(le.favorites.filter((J) => J.kind === "track").map((J) => J.entityId))), Qt(le.playlists), fs(!0), Hn(le).catch((J) => {
        console.warn("[Juli3ta] music library durable save failed:", J);
      }));
    })(), () => {
      n = !0;
    };
  }, []), W(() => {
    if (!dn) return;
    const n = kd(be, Xt, ka), c = window.setTimeout(() => {
      Hn(n).catch((u) => {
        console.warn("[Juli3ta] music library durable save failed:", u);
      });
    }, 450);
    return () => window.clearTimeout(c);
  }, [dn, be, Xt, ka]), W(() => {
    if (!Kt?.startsWith("Real file library unavailable")) return;
    let n = !1;
    const c = async () => {
      try {
        const w = await mo();
        if (n) return;
        Sa(w.rootPath), Ve((M) => La(w.tracks.map((R) => ({ ...R, source: "juli3ta" })), M)), se((M) => M?.startsWith("Real file library unavailable") ? null : M);
      } catch {
      }
    }, u = window.setInterval(c, 4e3);
    return c(), () => {
      n = !0, window.clearInterval(u);
    };
  }, [Kt]);
  const Xr = z(async (n) => {
    try {
      const c = await Yn({ ...n, source: "juli3ta" }), u = { ...n, ...c, source: "juli3ta" };
      return await Nr(u), Sa(c.folderPath?.split("/").slice(0, -1).join("/") || tr), se(null), Ve((w) => La([u], w)), !0;
    } catch (c) {
      const u = c.message || "Real file save failed";
      return se(`Couldn't save "${n.title}" as a real file — ${u}.`), !1;
    }
  }, [tr]), xs = z(async (n) => {
    gn(n);
    try {
      await id(n);
    } catch (c) {
      console.warn("Settings save failed:", c);
    }
  }, []), or = ye(
    () => r.state ? Ou(r.state.agents, r.state.included) : [],
    [r.state]
  ), [nr, ws] = k([]), [ks, Ss] = k(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [Ts, yn] = k(!0), ee = nr.find((n) => n.podId === ks) ?? nr[0] ?? null, Qr = z(async () => {
    yn(!0);
    const n = new AbortController(), c = await Bu(or, n.signal);
    ws(c), yn(!1);
  }, [or]);
  W(() => {
    or.length !== 0 && queueMicrotask(() => void Qr());
  }, [or, Qr]);
  const _s = z((n) => {
    Ss(n);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", n);
    } catch {
    }
  }, []), Ta = ae(null), _a = ae(null), ir = ae(!1);
  W(() => () => {
    Ta.current?.abort(), Object.keys(Ae.current).forEach((n) => {
      Ae.current[n]?.abort();
    });
  }, []), W(() => {
    if (Vt === "idle") {
      queueMicrotask(() => {
        Yt(0), Ko(0);
      });
      return;
    }
    const n = Date.now(), c = () => {
      const M = (Date.now() - n) / 1e3, R = Vt === "lyrics" ? Math.min(0.95, M / 5) : Math.min(0.95, 1 - Math.exp(-M / 35));
      Yt(R);
    };
    c();
    const u = setInterval(c, 250), w = setInterval(() => Ko((M) => M + 1), 4500);
    return () => {
      clearInterval(u), clearInterval(w);
    };
  }, [Vt]);
  const Na = z((n) => {
    if (!n.lyricsPreview) return null;
    const c = i.ensureUserFolder("Music");
    if (!c) return null;
    const u = `${fr(n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, w = i.findChildByName(c, u);
    return w ? (i.writeFile(w.id, n.lyricsPreview), w.id) : i.createFile(c, u, n.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [i]), fn = z((n) => {
    if (!n.audioDataUrl) return null;
    const c = i.ensureUserFolder("Music");
    if (!c) return null;
    const u = `${fr(n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, w = i.findChildByName(c, u);
    return w ? w.id : i.createFile(c, u, "", {
      mimeType: "audio/mpeg",
      refTrackId: n.id
    });
  }, [i]), Ns = z(async () => {
    if (!ee) {
      V(a("musiccreator.error.noPod"));
      return;
    }
    if (Object.values(kt.current).some(Boolean) || Je || Mt) {
      V("Finish the active AI helper before generating.");
      return;
    }
    if (p === "restyle" && !ke) {
      V(pe ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (p === "restyle" && ke) {
      const c = Cr(ke), u = qt ?? (c !== null ? c / 1e3 : null), w = j ?? u;
      if (u !== null && u < bt) {
        V(`Reference sample is only ${u.toFixed(1)} s. MiniMax Restyle needs at least ${bt} s of real source audio; choose a longer song or a full YouTube/library source.`);
        return;
      }
      if (u !== null && w !== null && w > 60 && u < Zn) {
        V(`Reference sample is only ${u.toFixed(1)} s from a ${Math.round(w)} s source. Clear it and re-pick; Restyle needs a representative ~60 s window to preserve the song.`);
        return;
      }
    }
    if (ir.current) return;
    ir.current = !0, V(null), Tt(), Ta.current?.abort();
    const n = new AbortController();
    Ta.current = n;
    try {
      const c = Kr.overridesByEndpoint[ee.url] ?? {}, u = {
        ...ee,
        models: {
          music: c.music || ee.models.music,
          cover: c.cover || ee.models.cover,
          lyrics: c.lyrics || ee.models.lyrics,
          lyricsBackup: c.lyricsBackup || ee.models.lyricsBackup,
          image: c.image || ee.models.image,
          allIds: ee.models.allIds
        }
      }, w = Uo(te);
      let M = S.trim(), R = L.trim(), O = A.trim(), D = null;
      if (!M && !G && !(p === "restyle" && !M)) {
        if (!E.trim() && !(te.intent ?? "").trim()) {
          V(a("musiccreator.error.noInput"));
          return;
        }
        $e("lyrics");
        const ce = [];
        E.trim() && ce.push(E.trim());
        const Ze = (te.intent ?? "").trim();
        Ze && ce.push(`User intent (must respect): ${Ze}`), w && ce.push(`Musical context: ${w}`), P && ce.push(`Structure: ${P.prompt}`);
        const Aa = ce.join(`

`);
        D = await Vu(u, Aa, n.signal), M = D.lyrics, R || (R = D.song_title), O || (O = D.style_tags);
      } else !M && G && p !== "restyle" && (M = `[Intro]
[Instrumental]
[Outro]`);
      if (D && (q(D.lyrics), R === "Untitled" && (R = ""), R && !L.trim() && Y(R), O && !A.trim() && I(O), D.usedFallback && se(
        `Primary lyrics model errored — used backup chat model "${u.models.lyricsBackup ?? "unknown"}" instead.`
      )), M.length > ra) {
        V(a("musiccreator.error.lyricsTooLong", { count: M.length, max: ra })), $e("idle");
        return;
      }
      if (p === "restyle" && M.trim() && M.trim().length > Qn) {
        V(`Restyle lyrics must be ${Qn} characters or fewer for MiniMax cover mode. Shorten them or clear the Lyrics box to let MiniMax extract the original lyrics from the reference audio.`), $e("idle");
        return;
      }
      if (!R.trim() && p === "restyle" && (R = Lu(_t), R && !L.trim() && Y(R)), R.trim() || (R = Mu(M, E, O || A), R && R !== "Untitled" && !L.trim() && Y(R)), p === "lyricsOnly") {
        const ce = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (R || a("musiccreator.track.untitled")) + " (lyrics)",
          styleTags: O || "—",
          lyricsPreview: M,
          // store the full text — used by Load
          durationMs: 0,
          bitrate: 0,
          sampleRate: 0,
          sizeBytes: 0,
          createdAt: Date.now(),
          audioDataUrl: "",
          // no audio
          specsJson: na(te) > 0 ? JSON.stringify(te) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: H,
          theme: E
        };
        await Xr(ce) && (Na(ce), _(ce.id), He(!1), x("player")), $e("idle"), Yt(0);
        return;
      }
      if (p === "restyle" && !ke) {
        V(pe ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), $e("idle");
        return;
      }
      if (p === "restyle" && ke) {
        const ce = Cr(ke), Ze = qt ?? (ce !== null ? ce / 1e3 : null), Aa = j ?? Ze;
        if (Ze !== null && Ze < bt) {
          V(`Reference sample is only ${Ze.toFixed(1)} s. MiniMax Restyle needs at least ${bt} s of real source audio; choose a longer song or a full YouTube/library source.`), $e("idle");
          return;
        }
        if (Ze !== null && Aa !== null && Aa > 60 && Ze < Zn) {
          V(`Reference sample is only ${Ze.toFixed(1)} s from a ${Math.round(Aa)} s source. Clear it and re-pick; Restyle needs a representative ~60 s window to preserve the song.`), $e("idle");
          return;
        }
      }
      $e("song");
      const Ue = [
        O,
        w,
        p === "restyle" && G ? "instrumental cover, no lead vocal" : ""
      ].filter((ce) => ce && ce.length > 0).join(". "), Le = p === "restyle" ? zu(Ue) : Ue, Ye = Yu(
        u,
        {
          lyrics: M,
          prompt: Le || void 0,
          instrumental: G,
          refAudioBase64: p === "restyle" ? ke ?? void 0 : void 0,
          refAudioDurationSec: p === "restyle" ? qt : null
        },
        n.signal
      ), Qe = pa && !H && !!u.models.image, Oe = H, Fe = Qe ? Eo(
        u,
        (X.trim() || kr(R, E, O || A)).slice(0, 1500),
        n.signal
      ).catch((ce) => {
        if (ce.name === "AbortError") throw ce;
        return console.warn("[Juli3ta] Cover-art generation failed:", ce), se(`Cover-art skipped: ${ce.message}`), Oe;
      }) : Promise.resolve(Oe), Z = await Promise.allSettled([Ye, Fe]), ie = Z[0], ve = Z[1];
      if (ie.status === "rejected")
        throw n.abort(), ie.reason;
      const le = ie.value, J = ve.status === "fulfilled" ? ve.value : Oe;
      if (!le?.data?.audio || typeof le.data.audio != "string" || le.data.audio.length < 100) {
        const ce = le?.trace_id ? ` (trace ${le.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${ce}. Try again or pick a different model in Settings.`);
      }
      const ue = `data:audio/mpeg;base64,${le.data.audio}`, It = p === "restyle" ? " (restyle)" : "", it = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (R || a("musiccreator.track.untitled")) + It,
        styleTags: O || "—",
        lyricsPreview: M,
        // store the full text — used by Load
        durationMs: le.data.duration_ms ?? 0,
        bitrate: le.data.bitrate ?? 0,
        sampleRate: le.data.sample_rate ?? 0,
        sizeBytes: le.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: ue,
        specsJson: na(te) > 0 ? JSON.stringify(te) : "",
        coverDataUrl: J,
        theme: E
      };
      U(J), console.info("[Juli3ta] Saving generated song:", { id: it.id, title: it.title, durationMs: it.durationMs, sizeBytes: it.sizeBytes }), await Xr(it) && (_(it.id), He(!1), x("player"), fn(it), Na(it), p === "restyle" && ke && Zi({
        trackId: it.id,
        audioSrc: `data:audio/wav;base64,${ke}`,
        sourceLabel: _t || "Original"
      }), h({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: it.title }),
        isRead: !1
      })), $e("idle"), Yt(0);
    } catch (c) {
      if (c.name === "AbortError") {
        $e("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", c), V(c.message || "Generation failed — check the console for details."), $e("idle"), Yt(0);
    } finally {
      ir.current = !1;
    }
  }, [
    ee,
    E,
    S,
    L,
    A,
    te,
    P,
    G,
    p,
    ke,
    _t,
    qt,
    j,
    pe,
    a,
    Xr,
    Kr,
    fn,
    Na,
    h,
    Tt,
    pa,
    H,
    X,
    Je,
    Mt
  ]), Cs = () => $o.current?.click(), sr = ae(0), Nt = z(async (n, c, u = {}) => {
    const w = ++sr.current, M = () => sr.current === w;
    V(null), ma(!0), Ja({
      stage: "loading",
      progress: 0.04,
      message: "Preparing cover reference from the song…"
    }), je(null), y(null), B(null), tt(c), _e(null);
    const R = typeof n == "string" && /^https?:\/\//i.test(n), O = (D) => {
      M() && Ja(D);
    };
    try {
      if (at === "mix") {
        const D = await tu(n, { onProgress: O });
        if (!M()) return;
        je(D.base64), y(D.durationSec), B(D.sourceDurationSec);
        const me = D.sourceDurationSec / 60;
        if (D.segments.length > 1) {
          const Ue = D.segments.map((Le) => `${Math.floor(Le.startSec / 60)}:${Math.floor(Le.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          _e(
            `Mixed ${D.segments.length} iconic moments (${D.durationSec.toFixed(0)} s) from ${me.toFixed(1)} min — at ${Ue}`
          );
        } else
          _e(`Using whole clip (${D.durationSec.toFixed(0)} s)`);
      } else {
        if (u.videoId)
          try {
            O({
              stage: "loading",
              progress: 0.12,
              message: "Creating fast server-side reference cut…"
            });
            const Ye = await fetch(
              `/api/music/reference-sample?videoId=${encodeURIComponent(u.videoId)}&durationSec=60`
            );
            if (!Ye.ok) throw new Error(`reference sample HTTP ${Ye.status}`);
            const Qe = await Ye.json();
            if (!Qe.base64) throw new Error("reference sample response missing audio");
            if (!M()) return;
            O({
              stage: "done",
              progress: 1,
              message: "Reference sample ready."
            });
            const Oe = Qe.durationSec ?? 60, Fe = Qe.sourceDurationSec ?? Oe;
            je(Qe.base64), y(Oe), B(Fe);
            const Z = Qe.startSec ?? 0, ie = Fe / 60, ve = Z / 60, le = Z < 60 ? `${Z.toFixed(1)} s` : `${Math.floor(ve)}:${Math.floor(Z % 60).toString().padStart(2, "0")}`;
            _e(
              Fe <= Oe + 0.5 ? `Using whole clip (${Oe.toFixed(0)} s)` : `Fast-cut cover reference ${Oe.toFixed(0)} s starting at ${le} of ${ie.toFixed(1)} min`
            );
            return;
          } catch {
            O({
              stage: "loading",
              progress: 0.08,
              message: "Fast server cut unavailable — using browser fallback…"
            });
          }
        const D = await Wi(n, {
          fastRemote: R,
          onProgress: O
        });
        if (!M()) return;
        je(D.base64), y(D.durationSec), B(D.sourceDurationSec);
        const me = D.sourceDurationSec / 60, Ue = D.startSec / 60, Le = D.startSec < 60 ? `${D.startSec.toFixed(1)} s` : `${Math.floor(Ue)}:${Math.floor(D.startSec % 60).toString().padStart(2, "0")}`;
        _e(
          D.sourceDurationSec <= D.durationSec + 0.5 ? `Using whole clip (${D.durationSec.toFixed(0)} s)` : `Auto-picked cover reference ${D.durationSec.toFixed(0)} s starting at ${Le} of ${me.toFixed(1)} min`
        );
      }
    } catch (D) {
      if (!M()) return;
      V(D.message || "Could not analyze that audio."), je(null), y(null), B(null), tt(null);
    } finally {
      M() && (ma(!1), Ja(null));
    }
  }, [at]), Es = async () => {
    ga(null);
    try {
      let n;
      if (mt === "tab") {
        const M = navigator.mediaDevices;
        if (!M.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        n = await M.getDisplayMedia({ video: !0, audio: !0 });
        for (const R of n.getVideoTracks())
          R.stop(), n.removeTrack(R);
        if (n.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        n = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Gt.current = n;
      const u = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((M) => MediaRecorder.isTypeSupported(M)) || "", w = new MediaRecorder(n, u ? { mimeType: u } : void 0);
      Ya.current = [], w.ondataavailable = (M) => {
        M.data && M.data.size > 0 && Ya.current.push(M.data);
      }, w.onstop = async () => {
        try {
          const M = new Blob(Ya.current, {
            type: Ya.current[0]?.type || u || "audio/webm"
          });
          if (M.size === 0) {
            ga("Recording was empty.");
            return;
          }
          const R = new FileReader();
          R.onerror = () => ga("Could not read the recording."), R.onload = () => {
            const O = typeof R.result == "string" ? R.result : "", D = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${mt === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - Ur.current,
              mimeType: M.type || u || "audio/webm",
              audioDataUrl: O,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await Ui(D), Pr((me) => [D, ...me]);
              } catch (me) {
                console.warn("Recording save failed", me), ga("Could not save the recording. Try again.");
              }
            })(), Va(!1), Nt(M, D.name);
          }, R.readAsDataURL(M);
        } finally {
          Gt.current?.getTracks().forEach((M) => M.stop()), Gt.current = null;
        }
      }, w.start(250), Vo.current = w, Ur.current = Date.now(), Jo(0), Dr(!0), ya.current = setInterval(() => {
        Jo(Date.now() - Ur.current);
      }, 100);
    } catch (n) {
      ga(n.message || "Could not start recording."), Gt.current?.getTracks().forEach((c) => c.stop()), Gt.current = null, Dr(!1);
    }
  }, As = () => {
    const n = Vo.current;
    n && n.state !== "inactive" && n.stop(), ya.current && clearInterval(ya.current), Dr(!1);
  };
  W(() => () => {
    Gt.current?.getTracks().forEach((n) => n.stop()), ya.current && clearInterval(ya.current);
  }, []);
  const Ms = (n) => {
    const c = n.target.files?.[0];
    if (n.target.value = "", !!c) {
      if (c.size > 50 * 1024 * 1024) {
        V("Reference audio is too big. Max 50 MB.");
        return;
      }
      Nt(c, c.name);
    }
  }, Ls = (n) => {
    ha(!1), Nt(n.audioDataUrl, n.name);
  }, zs = () => {
    ha(!0), Fn().then((n) => Pr(n)).catch(() => {
    });
  }, Is = () => Ga(!0), Rs = (n) => {
    if (Ga(!1), !n.audioDataUrl) return;
    const c = n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    if (n.durationMs > 0 && n.durationMs / 1e3 < bt) {
      V(`"${c}" is only ${(n.durationMs / 1e3).toFixed(1)} s. MiniMax Restyle needs at least ${bt} s of real song audio; choose a longer track or a YouTube/library source.`);
      return;
    }
    Nt(n.audioDataUrl, `${c}.mp3`);
  }, Ps = () => {
    sr.current += 1, ma(!1), je(null), y(null), B(null), tt(null), _e(null), Ja(null);
  }, js = () => {
    Ta.current?.abort(), $e("idle");
  }, Ct = z(async (n, c, u) => {
    if (!ee) throw new Error("No endpoint connected");
    const w = (Z) => {
      const ie = Z, ve = ie.choices?.[0], le = [
        ve?.message?.content,
        ve?.delta?.content,
        ve?.text,
        ie.output_text
      ];
      for (const J of le)
        if (typeof J == "string" && J.trim().length > 0) return J.trim();
      return "";
    }, M = (Z) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(Z), R = /* @__PURE__ */ new Set(), O = [], D = (Z) => {
      Z && !R.has(Z) && (R.add(Z), O.push(Z));
    };
    if (D(ee.models.lyricsBackup), ee.models.allIds.filter(M).forEach(D), O.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const me = typeof c == "string" ? c : JSON.stringify(c), Ue = u?.temperature ?? 0.5, Le = Math.max(u?.maxTokens ?? 800, 400), Ye = (Z) => {
      const ie = Z.toLowerCase();
      return /^minimax\/ail-compound-minimax$/.test(ie) ? 10 : /^minimax\/ail-balanced$/.test(ie) ? 20 : /^minimax\/ail-kimi$/.test(ie) ? 30 : /^moonshot\/ail-balanced$/.test(ie) ? 60 : /^moonshot\/ail-compound$/.test(ie) ? 70 : /^(deepseek\/)?ail-fast$/.test(ie) ? 85 : /^(deepseek\/)?ail-balanced$/.test(ie) ? 86 : /^(ail-compound|moonshot\/ail-kimi|ail-kimi|ail-kimi-strict|moonshot\/ail-kimi-strict)$/.test(ie) ? 90 : /search/.test(ie) ? 100 : 80;
    }, Qe = (Z) => /^minimax\/ail-compound$/i.test(Z) || /^ail-compound-minimax$/i.test(Z);
    O.sort((Z, ie) => Ye(Z) - Ye(ie));
    const Oe = O.filter((Z) => !Qe(Z)), Fe = 45e3;
    return zr(Oe, async (Z) => {
      const ie = da(u?.signal, Fe);
      let ve;
      try {
        ve = await ca(ee, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: Z,
            messages: [
              { role: "system", content: n },
              { role: "user", content: me }
            ],
            temperature: Ue,
            max_tokens: Le
          }),
          signal: ie.signal
        });
      } catch (ue) {
        throw ue.name === "TimeoutError" ? new Error(`AI assist timed out after ${Fe / 1e3}s.`) : ue;
      } finally {
        ie.dispose();
      }
      if (!ve.ok) {
        const ue = await ve.text().catch(() => "");
        throw ve.status === 400 && /web_search|not support|unsupported|invalid params/i.test(ue) ? new we(502, ue, `AI assist model ${Z} rejected provider params: ${ue.slice(0, 200)}`) : new we(ve.status, ue, `AI assist HTTP ${ve.status}: ${ue.slice(0, 200)}`);
      }
      const le = await ve.json(), J = w(le);
      if (!J)
        throw console.warn("[Juli3ta] empty AI assist content from", Z, le), new we(502, "", `Model "${Z}" returned empty content`);
      return J.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [ee]), Ds = z(async () => {
    if (!ee) return;
    const n = Re("specs");
    if (n) {
      xt(!0), V(null);
      try {
        const u = await Ct(`You are a music-production assistant. Given a theme, style, and (optionally) lyrics, return ONE JSON object that fills in optimal Track Specs for the song.

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
          theme: E || null,
          style: A || null,
          lyrics: S ? S.slice(0, 1500) : null,
          existing_specs: na(te) > 0 ? te : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: n.signal
        }), w = Vi(u) ?? u;
        let M;
        try {
          M = JSON.parse(w);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${u.slice(0, 160)}`);
        }
        if (n.signal.aborted) return;
        Ge((R) => ({ ...M, intent: R.intent }));
      } catch (c) {
        if (ja(c)) return;
        V(c.message || "Optimize failed.");
      } finally {
        Pe("specs", n), xt(!1);
      }
    }
  }, [ee, E, A, S, te, Ct, Re, Pe]), bn = z(async () => {
    if (!ee) return;
    if (!ee.models.image) {
      V(`This endpoint (${ee.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (Je) return;
    const n = Re("cover");
    if (!n) return;
    const c = n.signal;
    Wt(!0), V(null);
    try {
      const u = (X.trim() || kr(L, E, A)).slice(0, 1500), w = await Eo(ee, u, c);
      if (c.aborted) return;
      U(w), Ee && _a.current?.(Ee, w);
    } catch (u) {
      if (ja(u)) return;
      V(u.message || "Cover-art generation failed.");
    } finally {
      Pe("cover", n), Wt(!1);
    }
  }, [ee, X, L, E, A, Je, Ee, Re, Pe]), vn = z((n) => {
    if (!n.type.startsWith("image/")) {
      V("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (n.size > 4 * 1024 * 1024) {
      V("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const c = new FileReader();
    c.onerror = () => V("Could not read that image file."), c.onload = () => {
      const u = c.result;
      typeof u == "string" && u.startsWith("data:image/") && (U(u), Ee && _a.current?.(Ee, u));
    }, c.readAsDataURL(n);
  }, [Ee]), Us = z(async () => {
    const n = Re("theme");
    if (n) {
      V(null);
      try {
        const u = await Ct("You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.", {
          style: A || "pop",
          existing_theme: E || null
        }, { temperature: 0.85, maxTokens: 200, signal: n.signal });
        if (n.signal.aborted) return;
        C(u);
      } catch (c) {
        if (ja(c)) return;
        V(c.message || "Theme inspiration failed.");
      } finally {
        Pe("theme", n);
      }
    }
  }, [Re, Pe, Ct, A, E]), Os = z(async () => {
    const n = Re("style");
    if (n) {
      V(null);
      try {
        const u = await Ct('You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".', {
          theme: E || "a quiet evening",
          existing_style: A || null
        }, { temperature: 0.7, maxTokens: 120, signal: n.signal });
        if (n.signal.aborted) return;
        I(u.replace(/^["']|["']$/g, ""));
      } catch (c) {
        if (ja(c)) return;
        V(c.message || "Style suggestion failed.");
      } finally {
        Pe("style", n);
      }
    }
  }, [Re, Pe, Ct, E, A]), $s = z(async () => {
    if (!S.trim()) {
      V("Nothing to polish — write some lyrics first.");
      return;
    }
    const n = Re("lyrics");
    if (n) {
      V(null);
      try {
        const u = await Ct("You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.", {
          style: A || null,
          lyrics: S
        }, { temperature: 0.6, maxTokens: 1200, signal: n.signal });
        if (n.signal.aborted) return;
        if (u.length > ra) {
          V(`Polished lyrics exceeded ${ra} chars (${u.length}). Trimming the original first might help.`);
          return;
        }
        q(u);
      } catch (c) {
        if (ja(c)) return;
        V(c.message || "Lyrics polish failed.");
      } finally {
        Pe("lyrics", n);
      }
    }
  }, [Re, Pe, Ct, A, S]), Hs = (n) => {
    I((c) => c ? `${c}, ${n.toLowerCase()}` : n.toLowerCase());
  }, Zr = () => {
    const n = [
      "Late-night coding session, neon city skyline, focus and flow.",
      "Sunday-morning coffee, soft rain, lo-fi piano.",
      "Synthwave anthem about shipping on Friday evening.",
      "Jazz ballad about a forgotten train station at 3am.",
      "Acoustic folk song about a long road trip with old friends.",
      "Cinematic orchestral piece for a heroic underdog scene.",
      "Upbeat pop anthem about finishing a hard project."
    ];
    C(n[Math.floor(Math.random() * n.length)]);
  }, Fs = () => {
    const n = N ?? $.state.trackId ?? nt[0]?.id ?? be[0]?.id ?? null, c = n ? Me.find((u) => u.id === n) ?? null : null;
    c && ea(c), x("creator"), Zr();
  }, xn = z((n) => {
    Ve((c) => c.filter((u) => u.id !== n)), Kc(n).catch((c) => console.warn("Track cache delete failed:", c)), su(n).catch((c) => console.warn("Track file delete failed:", c));
  }, []), Bs = z(async () => {
    if (!ar) {
      hn(!0);
      try {
        const n = await lu();
        Sa(n), h({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: n,
          isRead: !1
        });
      } catch (n) {
        se(`Could not open JULI3TA folder — ${n.message || n}`);
      } finally {
        hn(!1);
      }
    }
  }, [h, ar]), lr = z(async (n, c) => {
    const u = c.trim().slice(0, 200) || "Untitled";
    Ve((w) => w.map((M) => M.id === n ? { ...M, title: u } : M));
    try {
      await Xc(n, u), se(null);
    } catch (w) {
      const M = w.message || "Database write failed";
      se(`Couldn't rename track — ${M}.`);
    }
  }, []), eo = z(async (n, c) => {
    Ve((u) => u.map((w) => w.id === n ? { ...w, coverDataUrl: c } : w));
    try {
      await Qc(n, c), se(null);
    } catch (u) {
      const w = u.message || "Database write failed";
      se(`Couldn't save cover art — ${w}.`);
    }
  }, []);
  W(() => {
    _a.current = eo;
  }, [eo]);
  const wn = z(async (n, c) => {
    Ve((u) => u.map((w) => w.id === n ? { ...w, styleTags: c || "—" } : w));
    try {
      await Zc(n, c), se(null);
    } catch (u) {
      const w = u.message || "Database write failed";
      se(`Couldn't save style — ${w}.`);
    }
  }, []), kn = z(async (n, c) => {
    Ve((u) => u.map((w) => w.id === n ? { ...w, lyricsPreview: c } : w));
    try {
      await ed(n, c), se(null);
    } catch (u) {
      const w = u.message || "Database write failed";
      se(`Couldn't save lyrics — ${w}.`);
    }
  }, []), Sn = z(async (n, c) => {
    Ve((u) => u.map((w) => w.id === n ? { ...w, specsJson: c } : w));
    try {
      await td(n, c), se(null);
    } catch (u) {
      const w = u.message || "Database write failed";
      se(`Couldn't save specs — ${w}.`);
    }
  }, []), Tn = z(async (n, c) => {
    Ve((u) => u.map((w) => w.id === n ? { ...w, theme: c } : w));
    try {
      await ad(n, c), se(null);
    } catch (u) {
      const w = u.message || "Database write failed";
      se(`Couldn't save theme — ${w}.`);
    }
  }, []);
  W(() => {
    if (!Ee) return;
    const n = Ee, c = setTimeout(() => {
      const u = Lt.find((me) => me.id === n);
      if (!u) return;
      const w = L.trim() || u.title, M = A.trim(), R = E, O = na(te) > 0 ? JSON.stringify(te) : "", D = u.styleTags === "—" ? "" : u.styleTags || "";
      u.title !== w && lr(n, w), D !== M && wn(n, M), (u.lyricsPreview || "") !== S && kn(n, S), (u.specsJson || "") !== O && Sn(n, O), (u.theme || "") !== R && Tn(n, R);
    }, 600);
    return () => clearTimeout(c);
  }, [Ee, L, A, E, S, te, Lt, lr, wn, kn, Sn, Tn]);
  const [_n, Nn] = k(null), [Ws, Cn] = k(!1), ea = z((n) => {
    q(n.lyricsPreview ?? ""), I(n.styleTags && n.styleTags !== "—" ? n.styleTags : ""), C(n.theme ?? "");
    const c = n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (Y(c), qe(!1), n.specsJson)
      try {
        Ge(JSON.parse(n.specsJson));
      } catch {
        Ge({});
      }
    else
      Ge({});
    U(n.coverDataUrl ?? ""), Ie(""), qa(n.id), V(null), T(null), qe(!1), Ce(n) ? n.source === "youtube" ? (b("restyle"), je(null), y(null), B(null), tt(`${c}.mp3`), _e("Resolving streamed audio…"), ma(!0), (async () => {
      try {
        const w = n.externalId || "";
        if (!w) throw new Error("Missing source identifier.");
        const M = za(w), R = wa[M], O = R && Date.now() - R.resolvedAt < 5400 * 1e3 ? R.src : (await Vn(w)).proxyUrl;
        await Nt(O, `${c}.mp3`, { videoId: w });
      } catch (w) {
        ma(!1), je(null), y(null), B(null), tt(null), _e(null), V(`Could not load streamed track for restyle: ${w.message || "unknown error"}`);
      }
    })()) : (b("restyle"), Nt(n.audioDataUrl, `${c}.mp3`)) : (je(null), y(null), B(null), tt(null), _e(null), b("lyricsOnly"));
  }, [Nt, wa]), En = z((n) => {
    const c = Na(n);
    if (!c) {
      h({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "AlertCircle",
        title: a("musiccreator.notify.noLyricsTitle"),
        message: a("musiccreator.notify.noLyricsBody"),
        isRead: !1
      });
      return;
    }
    d({
      type: "OPEN_OR_FOCUS_WINDOW",
      appId: "texteditor",
      args: { editor: { nodeId: c } }
    });
  }, [Na, d, h, a]), cr = z((n, c, u, w) => {
    const M = i.ensureUserFolder("Desktop");
    if (!M) return;
    const R = i.findChildByName(M, n);
    let O;
    if (R)
      u.refTrackId || i.writeFile(R.id, c), O = R.id;
    else {
      O = i.createFile(M, n, c, u);
      const D = Array.from(w).reduce((Le, Ye) => Le + Ye.charCodeAt(0), 0), me = D % 6 + 1, Ue = Math.floor(D / 6) % 4;
      d({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: n,
          icon: Oc(n),
          fileSystemNodeId: O,
          position: { x: 16 + me * 80, y: 16 + Ue * 90 },
          isSelected: !1
        }
      });
    }
    h({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Sparkles",
      title: a("musiccreator.notify.savedToDesktopTitle"),
      message: a("musiccreator.notify.savedToDesktopBody", { name: n }),
      isRead: !1
    });
  }, [i, d, h, a]), qs = z((n) => {
    if (!n.audioDataUrl) return;
    const c = fr(n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    cr(`${c}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: n.id }, n.id);
  }, [cr]), Js = z((n) => {
    if (!n.lyricsPreview) return;
    const c = fr(n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    cr(`${c}.lyrics.txt`, n.lyricsPreview, { mimeType: "text/plain" }, `${n.id}-lyrics`);
  }, [cr]), Gs = z((n) => {
    He(!1), x("player"), _(n.id);
  }, []), ft = z((n) => {
    const c = n.dataTransfer.getData(Ua);
    if (!c) return null;
    try {
      return JSON.parse(c);
    } catch {
      return null;
    }
  }, []), Vs = z((n) => {
    const c = ft(n);
    if (c && c.lyricsPreview) {
      n.preventDefault(), q(c.lyricsPreview);
      const u = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !L.trim() && u && Y(u), !A.trim() && c.styleTags && c.styleTags !== "—" && I(c.styleTags);
      return;
    }
  }, [ft, L, A]), Ys = z((n) => {
    const c = ft(n);
    c && c.styleTags && c.styleTags !== "—" && (n.preventDefault(), I((u) => u ? `${u}, ${c.styleTags}` : c.styleTags));
  }, [ft]), Ks = z((n) => {
    const c = ft(n);
    if (c) {
      n.preventDefault();
      const u = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), w = c.styleTags && c.styleTags !== "—" ? `Inspired by "${u}" — ${c.styleTags}` : `Inspired by "${u}"`;
      C(w);
    }
  }, [ft]), Xs = z((n) => {
    const c = ft(n);
    c && (n.preventDefault(), Y(c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [ft]), dr = (n) => {
    n.dataTransfer.types.includes(Ua) && (n.preventDefault(), n.dataTransfer.dropEffect = "copy");
  }, An = S.length, Qs = A.length, Q = Vt !== "idle", ur = Object.values(Ke).some(Boolean) || Je || Mt, Zs = ye(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            Ta.current?.abort(), Tt(), sr.current += 1, ir.current = !1, b("compose"), C(""), q(""), I(""), Y(""), Ge({}), T(null), qe(!1), U(""), Ie(""), Fo(!1), je(null), y(null), B(null), tt(null), _e(null), V(null), se(null), $e("idle"), Yt(0), wt({ ...Pa }), Wt(!1), xt(!1), qa(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => Zr() },
          { id: "mode-restyle", label: "Restyle Mode", onSelect: () => b("restyle") },
          { id: "mode-lyrics", label: "Lyrics Only Mode", onSelect: () => b("lyricsOnly") }
        ]
      },
      {
        id: "view",
        label: "View",
        items: [
          { id: "view-creator", label: "Creator", onSelect: () => x("creator") },
          { id: "view-player", label: "Player", onSelect: () => x("player") },
          { id: "open-help", label: "How it works…", onSelect: () => f(!0) },
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => rr(!0) }
        ]
      },
      {
        id: "window",
        label: "Window",
        items: [
          { id: "minimize", label: "Minimize Window", actionId: "minimize-window", disabled: !o },
          { id: "close", label: "Close Window", actionId: "close-window", disabled: !o }
        ]
      },
      {
        id: "help",
        label: "Help",
        items: [
          { id: "juli3ta-help", label: "JULI3TA Help…", onSelect: () => f(!0) },
          { id: "tytus-help", label: "Tytus Help", actionId: "open-help" },
          { id: "juli3ta-about", label: `About JULI3TA v${wr}`, onSelect: () => rr(!0) }
        ]
      }
    ]
  }), [o, Tt]);
  Pc(o?.id ?? null, Zs);
  const ot = ye(
    () => Lt.filter(Co),
    [Lt]
  ), nt = ye(() => {
    let n = ot;
    De === "songs" ? n = n.filter((u) => Ce(u) && !/\(restyle\)\s*$/i.test(u.title) && !/\(lyrics\)\s*$/i.test(u.title)) : De === "restyles" ? n = n.filter((u) => /\(restyle\)\s*$/i.test(u.title)) : De === "lyrics" && (n = n.filter((u) => !Ce(u) || /\(lyrics\)\s*$/i.test(u.title)));
    const c = Ne.trim().toLowerCase();
    return c ? n.filter((u) => u.title.toLowerCase().includes(c) || u.styleTags.toLowerCase().includes(c)) : n;
  }, [ot, Ne, De]), Et = ye(() => {
    let n = be;
    Xe === "favorites" && (n = n.filter((u) => Xt.has(u.id)));
    const c = Ne.trim().toLowerCase();
    return c ? n.filter((u) => u.title.toLowerCase().includes(c) || (u.artist || "").toLowerCase().includes(c) || (u.album || "").toLowerCase().includes(c)) : n;
  }, [be, Xe, Ne, Xt]), ta = z((n, c) => {
    const u = za(n), w = Zt.current[u];
    if (!c?.force && w && Date.now() - w.resolvedAt < 5400 * 1e3)
      return Promise.resolve(w.src);
    const M = Yr.current.get(n);
    if (!c?.force && M) return M;
    on((O) => new Set(O).add(n));
    const R = Vn(n).then((O) => {
      const D = { src: O.proxyUrl, resolvedAt: Date.now() };
      return Zt.current = { ...Zt.current, [u]: D }, ms((me) => ({ ...me, [u]: D })), O.proxyUrl;
    }).finally(() => {
      Yr.current.delete(n), on((O) => {
        const D = new Set(O);
        return D.delete(n), D;
      });
    });
    return Yr.current.set(n, R), R;
  }, []), Ca = z((n) => {
    n.slice(0, 3).forEach((c) => {
      ta(c.id).catch(() => {
      });
    });
  }, [ta]);
  W(() => {
    if (!gt) return;
    const n = new AbortController();
    return Promise.allSettled([
      au(n.signal),
      Jn(n.signal),
      Gn(n.signal)
    ]).then(([c, u, w]) => {
      c.status === "fulfilled" ? tn(c.value) : tn(null), u.status === "fulfilled" && an(u.value), w.status === "fulfilled" && rn(w.value);
    }), () => n.abort();
  }, [gt]), W(() => {
    if (!gt) return;
    const n = (c) => {
      c.key === "Escape" && He(!1);
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [gt]), W(() => {
    if (!gt) return;
    const n = Br.trim();
    if (n.length < 2) {
      const R = window.setTimeout(() => {
        Wr([]), yt(null), er(!1);
      }, 0);
      return () => window.clearTimeout(R);
    }
    const c = `${xa}:${n.toLowerCase()}`, u = mn.current.get(c);
    if (u) {
      Wr(u), er(!1), yt(null), Ca(u);
      return;
    }
    const w = new AbortController(), M = setTimeout(() => {
      er(!0), yt(null);
      let R = Vr.current.get(c);
      R || (R = iu(n, xa, 20, w.signal).then((O) => xa === "playlists" ? O.results.playlists : O.results.tracks).catch(() => nu(n, 20, w.signal)).finally(() => {
        Vr.current.delete(c);
      }), Vr.current.set(c, R)), R.then((O) => {
        mn.current.set(c, O), Wr(O), Ca(O), O.length > 0 && en(n);
      }).catch((O) => {
        w.signal.aborted || yt(O.message || "Music search failed.");
      }).finally(() => {
        w.signal.aborted || er(!1);
      });
    }, 120);
    return () => {
      w.abort(), clearTimeout(M);
    };
  }, [Br, xa, gt, Ca, en]);
  const pr = z(async () => {
    const [n, c] = await Promise.allSettled([
      Jn(),
      Gn()
    ]);
    n.status === "fulfilled" && an(n.value), c.status === "fulfilled" && rn(c.value);
  }, []), el = z(async (n, c) => {
    await ru(n, c), await pr(), h({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${n} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [h, pr]), tl = z(async (n) => {
    await ou(n), await pr(), h({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${n} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [h, pr]), al = ye(
    () => new Set(be.filter((n) => n.externalId).map((n) => n.externalId)),
    [be]
  ), mr = z((n, c) => {
    const u = Gi(n.title, n.channel);
    return {
      id: c?.id ?? za(n.id),
      title: u.song || n.title || "Untitled",
      styleTags: "",
      lyricsPreview: "",
      durationMs: n.durationMs ?? 0,
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
      externalId: n.id,
      externalUrl: `https://www.youtube.com/watch?v=${n.id}`,
      thumbnailUrl: n.thumbnailUrl || Er(n.id),
      artist: u.artist || n.channel || "Unknown",
      album: n.channel ?? ""
    };
  }, []), rl = z(async (n, c) => {
    if (n.audioDataUrl && !c?.force) return n.audioDataUrl;
    if (!Oo(n) || !n.externalId) return n.audioDataUrl || null;
    const u = za(n.externalId), w = Zt.current[u] ?? Zt.current[n.id];
    return !c?.force && w && Date.now() - w.resolvedAt < 5400 * 1e3 ? w.src : ta(n.externalId, c);
  }, [ta]), Me = ye(
    () => [...ln, ...be, ...nt],
    [ln, be, nt]
  );
  W(() => {
    if (!N || Me.length === 0) return;
    Me.some((c) => c.id === N) || _(null);
  }, [N, Me]);
  const Mn = ae(null), $ = Ku(Me, Mn, rl);
  W(() => {
    const n = $.state.trackId;
    n && as((c) => c[0] === n ? c : [n, ...c.filter((w) => w !== n)].slice(0, 8));
  }, [$.state.trackId]), W(() => {
    const n = $.state.trackId;
    if (!n || v !== "player") return;
    N !== n && _(n);
    const c = Me.find((u) => u.id === n);
    if (c) {
      if (Co(c)) {
        de !== "mywork" && Xa("mywork"), nt.some((u) => u.id === n) || (De !== "all" && Qo("all"), Ne.trim() && Ka(""));
        return;
      }
      de !== "library" && Xa("library"), Et.some((u) => u.id === n) || (Xe !== "all" && Or("all"), Ne.trim() && Ka(""));
    }
  }, [
    $.state.trackId,
    v,
    N,
    Me,
    de,
    nt,
    Et,
    De,
    Xe,
    Ne
  ]), W(() => {
    if (typeof navigator > "u" || !("mediaSession" in navigator)) return;
    const n = navigator.mediaSession, c = $.state.trackId, u = c ? Me.find((w) => w.id === c) : null;
    if (!u) {
      n.metadata = null, n.playbackState = "none";
      return;
    }
    return n.metadata = new MediaMetadata({
      title: u.title || "Untitled",
      artist: u.artist || "JULI3TA",
      album: u.album || (u.styleTags && u.styleTags !== "—" ? u.styleTags : ""),
      artwork: u.coverDataUrl ? [{ src: u.coverDataUrl, sizes: "512x512", type: u.coverDataUrl.startsWith("data:image/png") ? "image/png" : "image/jpeg" }] : u.thumbnailUrl ? [{ src: u.thumbnailUrl, sizes: "256x256", type: "image/jpeg" }] : []
    }), n.playbackState = $.state.playing ? "playing" : "paused", n.setActionHandler("play", () => $.toggle(u)), n.setActionHandler("pause", () => $.pause()), n.setActionHandler("previoustrack", () => $.prev()), n.setActionHandler("nexttrack", () => $.next()), n.setActionHandler("seekbackward", (w) => {
      $.seek(Math.max(0, $.state.positionMs - (w.seekOffset ?? 10) * 1e3));
    }), n.setActionHandler("seekforward", (w) => {
      $.seek(Math.min($.state.durationMs || 0, $.state.positionMs + (w.seekOffset ?? 10) * 1e3));
    }), () => {
      n.setActionHandler("play", null), n.setActionHandler("pause", null), n.setActionHandler("previoustrack", null), n.setActionHandler("nexttrack", null), n.setActionHandler("seekbackward", null), n.setActionHandler("seekforward", null);
    };
  }, [$, $.state.trackId, $.state.playing, Me]), W(() => {
    const n = $.state.trackId;
    if (!n) return;
    const c = Me.find((R) => R.id === n);
    if (!c) return;
    const u = $.state.playing ? "▶" : "⏸", w = (c.title || "Untitled").replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), M = document.title;
    return document.title = `${u} ${w} — JULI3TA`, () => {
      document.title = M;
    };
  }, [$.state.trackId, $.state.playing, Me]), W(() => {
    if (v !== "player") return;
    const n = (c) => {
      const u = c.target;
      if (u) {
        const R = u.tagName;
        if (R === "INPUT" || R === "TEXTAREA" || R === "SELECT" || u.isContentEditable) return;
      }
      const w = $.state.trackId;
      if (!w) return;
      const M = Me.find((R) => R.id === w);
      if (M)
        switch (c.key) {
          case " ":
            c.preventDefault(), $.toggle(M);
            break;
          case "ArrowLeft":
            c.preventDefault(), $.seek(Math.max(0, $.state.positionMs - 5e3));
            break;
          case "ArrowRight":
            c.preventDefault(), $.seek(Math.min($.state.durationMs || 0, $.state.positionMs + 5e3));
            break;
          case "ArrowUp":
            c.preventDefault(), $.setVolume(Math.min(1, $.state.volume + 0.1));
            break;
          case "ArrowDown":
            c.preventDefault(), $.setVolume(Math.max(0, $.state.volume - 0.1));
            break;
        }
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [v, $, Me]), W(() => {
    const n = (c) => {
      const u = c.target;
      if (u) {
        const w = u.tagName;
        if (w === "INPUT" || w === "TEXTAREA" || w === "SELECT" || u.isContentEditable) return;
      }
      c.key === "?" || c.key === "/" && c.shiftKey ? (c.preventDefault(), Fr((w) => !w)) : c.key === "Escape" && Hr && Fr(!1);
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [Hr]);
  const ol = z((n) => {
    const c = n.items.find(Ce);
    c && (cn((u) => [
      ...n.items.filter((w) => !u.some((M) => M.id === w.id)),
      ...u
    ]), _(c.id), He(!1), x("player"), $.play(c));
  }, [$]), nl = z(async (n) => {
    await gd(n), Qt(await Ma());
  }, []), il = z((n) => {
    yt(null), nn(n.id);
    const c = za(n.id), u = mr(n, { id: c });
    cn((w) => [u, ...w.filter((M) => M.id !== u.id)]), _(u.id), x("player"), $.play(u), nn(null);
  }, [$, mr]), sl = z((n) => {
    ta(n.id).catch(() => {
    });
  }, [ta]), ll = z(async (n) => {
    sn(n.id);
    const c = mr(n);
    try {
      await Ri(c), qr((u) => [c, ...u.filter((w) => w.id !== c.id)]), _(c.id), Xa("library"), Or("all"), Ca([n]), ka.length > 0;
    } catch (u) {
      yt(u.message || "Could not save track.");
    } finally {
      sn(null);
    }
  }, [mr, Ca, ka.length]), to = z((n) => {
    Jr((c) => {
      const u = new Set(c);
      return u.has(n.id) ? u.delete(n.id) : u.add(n.id), u;
    }), md({
      kind: "track",
      entityId: n.id,
      provider: n.source ?? "youtube",
      title: n.title
    }).catch((c) => console.warn("Favorite toggle failed:", c));
  }, []), cl = z(async () => {
    const n = Gr.trim() || "New Playlist";
    pn(!0);
    try {
      const c = await hd(n);
      Qt((u) => [c, ...u]), un("");
    } catch (c) {
      yt(c.message || "Could not create playlist.");
    } finally {
      pn(!1);
    }
  }, [Gr]), dl = z(async (n, c) => {
    try {
      await yd(n, c);
      const u = await Ma();
      Qt(u);
    } catch (u) {
      yt(u.message || "Could not add to playlist.");
    }
  }, []), ul = z(async (n, c) => {
    try {
      await fd(n, c);
      const u = await Ma();
      Qt(u);
    } catch (u) {
      yt(u.message || "Could not remove from playlist.");
    }
  }, []), ao = z((n) => {
    qr((c) => c.filter((u) => u.id !== n.id)), Jr((c) => {
      const u = new Set(c);
      return u.delete(n.id), u;
    }), dd(n.id).then(() => Ma().then(Qt)).catch((c) => console.warn("Library track delete failed:", c));
  }, []), pl = z((n) => {
    Za((c) => {
      const u = new Set(c);
      return u.has(n.id) ? u.delete(n.id) : u.add(n.id), u;
    });
  }, []), Ea = z(() => {
    $r(!1), Za(/* @__PURE__ */ new Set());
  }, []);
  W(() => {
    if (!zt) return;
    const n = (c) => {
      c.key === "Escape" && Ea();
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [zt, Ea]), W(() => {
    de !== "library" && (zt || ht.size > 0) && ($r(!1), Za(/* @__PURE__ */ new Set()));
  }, [de, zt, ht.size]);
  const ro = z((n) => {
    _(n.id), He(!1), x("player");
  }, []), ml = z((n) => {
    ea(n), He(!1), x("creator");
  }, [ea]);
  return ee ? /* @__PURE__ */ s("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
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
                    children: de === "mywork" ? "My Work" : "Library"
                  }
                ),
                /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: de === "mywork" ? Ne.trim() || De !== "all" ? `${nt.length} / ${ot.length}` : a(
                    ot.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: ot.length }
                  ) : Ne.trim() || Xe !== "all" ? `${Et.length} / ${be.length}` : `${be.length} saved` }),
                  de === "mywork" && /* @__PURE__ */ s(ge, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: Bs,
                        disabled: ar,
                        className: "flex items-center justify-center transition-all",
                        style: {
                          width: 22,
                          height: 22,
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-window)",
                          color: "var(--text-secondary)",
                          opacity: ar ? 0.5 : 1
                        },
                        title: tr ? `Open real folder: ${tr}` : "Open real JULI3TA folder",
                        children: /* @__PURE__ */ t($l, { size: 11 })
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
                              onClick: () => Xo("cards"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: ba === "cards" ? "var(--bg-hover)" : "transparent",
                                color: ba === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "Cards",
                              children: /* @__PURE__ */ t(wo, { size: 11 })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => Xo("list"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: ba === "list" ? "var(--bg-hover)" : "transparent",
                                color: ba === "list" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "List",
                              children: /* @__PURE__ */ t(Ot, { size: 11 })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  de === "library" && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        He(!0), va("search");
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
                { id: "mywork", label: "My Work", count: ot.length },
                { id: "library", label: "Library", count: be.length }
              ].map((n) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => Xa(n.id),
                  className: "flex-1 rounded-md transition-all",
                  style: {
                    height: 26,
                    fontSize: 11,
                    fontWeight: de === n.id ? 700 : 600,
                    color: de === n.id ? "white" : "var(--text-secondary)",
                    background: de === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
                    border: "none"
                  },
                  children: [
                    n.label,
                    n.count > 0 && /* @__PURE__ */ t(
                      "span",
                      {
                        style: {
                          marginLeft: 6,
                          fontSize: 10,
                          fontWeight: 700,
                          opacity: de === n.id ? 0.85 : 0.55
                        },
                        children: n.count
                      }
                    )
                  ]
                },
                n.id
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
                opacity: de === "mywork" ? ot.length === 0 ? 0.4 : 1 : be.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(vt, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: Ne,
                    onChange: (n) => Ka(n.target.value),
                    placeholder: de === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: de === "mywork" ? ot.length === 0 : be.length === 0
                  }
                ),
                Ne && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Ka(""),
                    className: "opacity-60 hover:opacity-100 px-1",
                    title: "Clear search",
                    children: /* @__PURE__ */ t(xe, { size: 11 })
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
              children: de === "mywork" ? [
                { id: "all", label: "All" },
                { id: "songs", label: "Songs" },
                { id: "restyles", label: "Restyles" },
                { id: "lyrics", label: "Lyrics" }
              ].map((n) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Qo(n.id),
                  className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                  style: {
                    height: 22,
                    fontSize: 10,
                    fontWeight: De === n.id ? 800 : 600,
                    color: De === n.id ? "white" : "var(--text-secondary)",
                    background: De === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: n.label
                },
                n.id
              )) : zt ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ s("span", { style: { fontSize: 10, fontWeight: 800, color: "var(--text-primary)", flexShrink: 0 }, children: [
                  ht.size,
                  " selected"
                ] }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Za(new Set(Et.map((n) => n.id))),
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
                    onClick: Ea,
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
              ] }) : /* @__PURE__ */ s(ge, { children: [
                [
                  { id: "all", label: "All" },
                  { id: "favorites", label: "Favorites" }
                ].map((n) => /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Or(n.id),
                    className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: Xe === n.id ? 800 : 600,
                      color: Xe === n.id ? "white" : "var(--text-secondary)",
                      background: Xe === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: n.label
                  },
                  n.id
                )),
                be.length > 0 && /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => $r(!0),
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
                      /* @__PURE__ */ t(ki, { size: 11 }),
                      " Select"
                    ]
                  }
                )
              ] })
            }
          ),
          de === "mywork" ? ot.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t(Ot, { size: 18, style: { color: "var(--text-disabled)" } })
              }
            ),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: a("musiccreator.gallery.empty.title") }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: a("musiccreator.gallery.empty.body") }),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => x("creator"),
                className: "mt-3 flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 28,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(dt, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(ct, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : nt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(vt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ne ? a("musiccreator.gallery.searchEmpty", { q: Ne }) : `No ${De} yet.` })
          ] }) : /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: [
            Qa.length > 0 && De === "all" && !Ne.trim() && /* @__PURE__ */ t(
              mp,
              {
                trackIds: Qa,
                allTracks: ot,
                player: $,
                onSelect: ro
              }
            ),
            ba === "list" ? /* @__PURE__ */ t(
              dp,
              {
                tracks: nt,
                player: $,
                onLoad: ea,
                onOpenLyrics: En,
                onDelete: xn,
                onRename: lr
              }
            ) : nt.map((n) => /* @__PURE__ */ t(
              pp,
              {
                track: n,
                onDelete: xn,
                onLoad: ea,
                onOpenLyrics: En,
                onSaveSongToDesktop: qs,
                onSaveLyricsToDesktop: Js,
                onPlayInPlayer: Gs,
                onRename: lr,
                onEditCover: Nn,
                onSelect: ro,
                selected: v === "player" && N === n.id,
                player: $
              },
              n.id
            ))
          ] }) : (
            /* Library tab — flat slim list of saved streamed tracks. The
               rich Artists/Albums/Playlists views still live in the main
               Music pane (reachable via the search button in the header
               above) since they need more horizontal room than 260px. */
            be.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(
                "div",
                {
                  className: "flex items-center justify-center rounded-2xl mb-2",
                  style: { width: 44, height: 44, background: "var(--bg-hover)" },
                  children: /* @__PURE__ */ t(Sr, { size: 18, style: { color: "var(--text-disabled)" } })
                }
              ),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: "Your saved music lives here" }),
              /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: "Click the magnifier above to search, then add tracks you want to keep." }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    He(!0), va("search");
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
            ] }) : Et.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(vt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ne ? `No matches for "${Ne}"` : `No ${Xe} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Et.map((n) => /* @__PURE__ */ t(
              hp,
              {
                track: n,
                player: $,
                selected: v === "player" && N === n.id,
                isFavorite: Xt.has(n.id),
                onOpenInPlayer: ro,
                onRemix: ml,
                onToggleFavorite: to,
                onRemove: ao,
                selectMode: zt,
                checked: ht.has(n.id),
                onToggleCheck: pl
              },
              n.id
            )) })
          ),
          de === "library" && zt && ht.size > 0 && /* @__PURE__ */ s(
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
                      const n = Et.filter((c) => ht.has(c.id));
                      for (const c of n) to(c);
                      Ea();
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
                    title: `Toggle favorite on ${ht.size} track(s)`,
                    children: [
                      /* @__PURE__ */ t(Sr, { size: 11 }),
                      " Toggle favorite"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => {
                      const n = Et.filter((c) => ht.has(c.id));
                      for (const c of n) ao(c);
                      Ea();
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
                    title: `Remove ${ht.size} track(s) from Library`,
                    children: [
                      /* @__PURE__ */ t($t, { size: 11 }),
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
              /* @__PURE__ */ t(zo, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
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
                  { id: "creator", icon: /* @__PURE__ */ t(dt, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(Te, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
                ].map((n) => /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => x(n.id),
                    title: n.tip,
                    className: "flex items-center gap-1.5 px-3 rounded-md transition-all",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: v === n.id ? 600 : 500,
                      color: v === n.id ? "white" : "var(--text-secondary)",
                      background: v === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
                      border: "none"
                    },
                    children: [
                      n.icon,
                      n.label
                    ]
                  },
                  n.id
                ))
              }
            ),
            /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-1.5 flex-shrink-0", children: [
              v === "player" && /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    He((n) => !n), va("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: gt ? "white" : "var(--text-secondary)",
                    background: gt ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(vt, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(cp, { endpoint: ee, endpoints: nr, onSwitch: _s }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: v === "player" ? Fs : Zr,
                  disabled: Q,
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a(v === "player" ? "musiccreator.header.surpriseFromPlayerTitle" : "musiccreator.header.surpriseTitle"),
                  children: [
                    /* @__PURE__ */ t(Mo, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => rr(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(wi, { size: 14 })
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => f(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a("julietaHelp.title"),
                  children: /* @__PURE__ */ t(zl, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      v === "player" && (gt ? /* @__PURE__ */ t(
        Ep,
        {
          tab: rs,
          onTabChange: va,
          query: Br,
          onQueryChange: os,
          searchHistory: ns,
          onClearSearchHistory: () => {
            Zo([]);
            try {
              localStorage.removeItem("juli3ta:searchHistory");
            } catch {
            }
          },
          resultType: xa,
          onResultTypeChange: is,
          results: ss,
          busy: ls,
          error: cs,
          status: ds,
          providers: us,
          connectors: ps,
          libraryTracks: be,
          playlists: ka,
          playlistNameDraft: Gr,
          playlistBusy: bs,
          favoriteIds: Xt,
          warmupIds: hs,
          previewBusyId: gs,
          addBusyId: ys,
          savedYoutubeIds: al,
          player: $,
          onWarmResult: sl,
          onPreview: il,
          onAdd: ll,
          onOpenTrack: (n) => {
            _(n.id), He(!1), x("player");
          },
          onToggleFavorite: to,
          onRemoveLibraryTrack: ao,
          onPlaylistNameDraftChange: un,
          onCreatePlaylist: cl,
          onAddTrackToPlaylist: dl,
          onRemoveTrackFromPlaylist: ul,
          onPlayPlaylist: ol,
          onDeletePlaylist: nl,
          onConfigureConnector: el,
          onDisconnectConnector: tl,
          onClose: () => He(!1)
        }
      ) : /* @__PURE__ */ t(
        Cp,
        {
          track: (() => {
            const n = N ?? $.state.trackId ?? nt[0]?.id ?? be[0]?.id ?? null;
            return n ? Me.find((c) => c.id === n) ?? null : null;
          })(),
          player: $,
          restyleOriginal: Qi,
          onSwitchToCreator: () => x("creator"),
          onSearchMusic: () => {
            x("player"), He(!0), va("search");
          },
          onEditInCreator: (n) => {
            ea(n), x("creator");
          }
        }
      )),
      v === "creator" && /* @__PURE__ */ s(ge, { children: [
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
                { id: "compose", icon: /* @__PURE__ */ t(Wa, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(Ht, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t(Tr, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((n) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => b(n.id),
                  disabled: Q,
                  title: n.tip,
                  className: "flex items-center gap-1.5 px-4 rounded-lg transition-all disabled:opacity-50",
                  style: {
                    height: 32,
                    fontSize: 12,
                    fontWeight: p === n.id ? 600 : 500,
                    color: p === n.id ? "white" : "var(--text-secondary)",
                    background: p === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                    border: p === n.id ? "1px solid transparent" : "1px solid var(--border-subtle)"
                  },
                  children: [
                    n.icon,
                    n.label
                  ]
                },
                n.id
              )),
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: Q ? /* @__PURE__ */ s(
                "button",
                {
                  onClick: js,
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
                    /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }),
                    a("musiccreator.button.cancel")
                  ]
                }
              ) : (() => {
                const n = p === "restyle" && (pe || !ke);
                return /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: Ns,
                    disabled: n || ur,
                    className: "flex items-center gap-1.5 px-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    style: {
                      height: 32,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "white",
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      boxShadow: "var(--shadow-md)"
                    },
                    title: ur ? "An AI helper is still working — wait for it to finish before generating." : n ? pe ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      n && pe || ur ? /* @__PURE__ */ t(oe, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Ht, { size: 13 }),
                      ur ? "Waiting for AI…" : p === "restyle" ? pe ? "Analyzing audio…" : "Restyle Song" : p === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
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
                  onChange: (n) => Y(n.target.value),
                  onDragOver: dr,
                  onDrop: Xs,
                  placeholder: a("musiccreator.songName.placeholder"),
                  disabled: Q,
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
              p !== "lyricsOnly" && /* @__PURE__ */ s(
                "label",
                {
                  htmlFor: "juli3ta-instrumental",
                  className: "flex items-center gap-2 cursor-pointer select-none flex-shrink-0",
                  style: { fontSize: 11, color: "var(--text-secondary)" },
                  children: [
                    a("musiccreator.lyrics.instrumental"),
                    /* @__PURE__ */ t(
                      oi,
                      {
                        id: "juli3ta-instrumental",
                        checked: G,
                        onChange: qe,
                        disabled: Q
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (Q || pe || fa || Kt) && /* @__PURE__ */ s(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: fa ? "rgba(255, 82, 82, 0.06)" : Kt ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              (Q || pe) && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${(Q ? ts : Jt?.progress ?? 0.08) * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: fa ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(Oa, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: fa, children: fa }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => V(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(xe, { size: 11 })
                  }
                )
              ] }) : Q ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: Vt === "lyrics" ? ai[Yo % ai.length] : ri[Yo % ri.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: Vt === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : pe ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, title: Jt?.message ?? "", children: Jt?.message ?? "Preparing reference audio…" }),
                /* @__PURE__ */ s("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: [
                  "Reference · ",
                  Math.round((Jt?.progress ?? 0.08) * 100),
                  "%"
                ] })
              ] }) : /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(Oa, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: Kt ?? "", children: Kt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => se(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: "Dismiss",
                    children: /* @__PURE__ */ t(xe, { size: 11 })
                  }
                )
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: /* @__PURE__ */ s("div", { className: "px-6 py-5", children: [
          p === "restyle" && /* @__PURE__ */ s(
            "div",
            {
              className: "mb-5",
              onDragOver: (n) => {
                n.dataTransfer.types.includes(Ua) && (n.preventDefault(), n.dataTransfer.dropEffect = "copy");
              },
              onDrop: (n) => {
                const c = ft(n);
                c && c.hasAudio && (n.preventDefault(), (async () => {
                  const u = await Yc(c.id);
                  if (!u?.audioDataUrl) {
                    V("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  Nt(u.audioDataUrl, `${c.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                _t ? /* @__PURE__ */ s(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${pe ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                        pe ? /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(Ot, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: _t }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: Ps,
                            disabled: Q || pe,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t($t, { size: 14 })
                          }
                        )
                      ] }),
                      (pe || Se) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: pe ? `🔍  ${Jt?.message ?? "Preparing cover reference from the song…"}` : `✨  ${Se}` }),
                      pe && /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-full", style: { height: 3, background: "var(--bg-hover)", marginTop: 7 }, children: /* @__PURE__ */ t(
                        "div",
                        {
                          style: {
                            width: `${(Jt?.progress ?? 0.08) * 100}%`,
                            height: "100%",
                            background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                            transition: "width 0.25s ease"
                          }
                        }
                      ) }),
                      ke && !pe && /* @__PURE__ */ t(
                        Yi,
                        {
                          base64: ke,
                          onPlay: () => {
                            $.state.playing && $.pause();
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
                      onClick: () => Va(!0),
                      disabled: Q,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Record new audio (mic or tab)",
                      children: [
                        /* @__PURE__ */ t(ct, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: Cs,
                      disabled: Q,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t(Ot, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: Is,
                      disabled: Q || Lt.filter((n) => n.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(Ut, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: Lt.filter((n) => n.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: zs,
                      disabled: Q,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50 relative",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      title: "Pick a Voice Recorder clip",
                      children: [
                        /* @__PURE__ */ t(ct, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: Rr.length }) })
                      ]
                    }
                  )
                ] }),
                !_t && /* @__PURE__ */ s("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Bo("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: at === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${at === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: at === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(dt, { size: 13, style: { color: at === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Best compact" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "cover-ready song window" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Bo("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: at === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${at === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: at === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(wo, { size: 13, style: { color: at === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 compact parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                es && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !rt && Va(!1),
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        onClick: (n) => n.stopPropagation(),
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
                                  onClick: () => !rt && Wo("mic"),
                                  disabled: rt,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: mt === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${mt === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(ct, { size: 14 }),
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
                                  onClick: () => !rt && Wo("tab"),
                                  disabled: rt,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: mt === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${mt === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(In, { size: 14 }),
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
                                  Math.floor(qo / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor(qo / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            rt ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: As,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(Si, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: Es,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: mt === "tab" ? /* @__PURE__ */ t(In, { size: 28 }) : /* @__PURE__ */ t(ct, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: rt ? mt === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            Go && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: Go })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s(
                            "div",
                            {
                              className: "px-5 py-3 flex items-center justify-between",
                              style: { borderTop: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)" },
                              children: [
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: rt ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !rt && Va(!1),
                                    disabled: rt,
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
                    ref: $o,
                    type: "file",
                    accept: "audio/*",
                    onChange: Ms,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick a cover-ready ~60 s sample" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed and downsampled before Restyle so the request stays small."
                ] }),
                Ki && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => ha(!1),
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        onClick: (n) => n.stopPropagation(),
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
                                  /* @__PURE__ */ t(ct, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ s(
                                  "button",
                                  {
                                    onClick: () => ha(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    children: [
                                      /* @__PURE__ */ t($t, { size: 14, style: { visibility: "hidden" } }),
                                      /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600 }, children: "×" })
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: Rr.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(ct, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : Rr.map((n) => {
                            const c = n.durationMs / 1e3, u = c > 0 && c < bt;
                            return /* @__PURE__ */ s(
                              "button",
                              {
                                onClick: () => !u && Ls(n),
                                disabled: u,
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
                                      children: /* @__PURE__ */ t(ct, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: n.name }),
                                    /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(c / 60),
                                      ":",
                                      Math.floor(c % 60).toString().padStart(2, "0"),
                                      u && " · too short for Restyle (need ≥30 s)"
                                    ] })
                                  ] })
                                ]
                              },
                              n.id
                            );
                          }) }),
                          /* @__PURE__ */ t(
                            "a",
                            {
                              href: "#",
                              onClick: (n) => {
                                n.preventDefault(), ha(!1);
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
                Xi && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => Ga(!1),
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        onClick: (n) => n.stopPropagation(),
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
                                  /* @__PURE__ */ t(Ut, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => Ga(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    title: "Close",
                                    children: /* @__PURE__ */ t(xe, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const n = Lt.filter((c) => c.audioDataUrl);
                            return n.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(Ut, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : n.map((c) => {
                              const u = c.durationMs / 1e3, w = u > 0 && u < bt, M = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !w && Rs(c),
                                  disabled: w,
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
                                        children: !c.coverDataUrl && /* @__PURE__ */ t(Ut, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: M }),
                                      /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        u > 0 ? `${Math.floor(u / 60)}:${Math.floor(u % 60).toString().padStart(2, "0")}` : "—",
                                        c.styleTags && c.styleTags !== "—" && ` · ${c.styleTags}`,
                                        w && " · too short for Restyle (need ≥30 s)"
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
                  Ia,
                  {
                    label: a("musiccreator.theme.label"),
                    hint: a("musiccreator.theme.hint"),
                    headerExtra: /* @__PURE__ */ t(
                      fo,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: Us,
                        busy: Ke.theme,
                        disabled: Q || Ke.theme
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: E,
                        onChange: (n) => C(n.target.value),
                        onDragOver: dr,
                        onDrop: Ks,
                        placeholder: a("musiccreator.theme.placeholder"),
                        disabled: Q,
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
                  Ia,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${Qs} / ${Ru}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      fo,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: Os,
                        busy: Ke.style,
                        disabled: Q || Ke.style
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: A,
                        onChange: (n) => I(n.target.value),
                        onDragOver: dr,
                        onDrop: Ys,
                        placeholder: a("musiccreator.style.placeholder"),
                        disabled: Q,
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
          p !== "lyricsOnly" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-4 mb-5", children: [
            /* @__PURE__ */ t(rp, { onPick: Hs, disabled: Q }),
            /* @__PURE__ */ t(
              op,
              {
                specs: te,
                onChange: Ge,
                disabled: Q,
                onOptimize: Ds,
                optimizing: Mt
              }
            )
          ] }),
          /* @__PURE__ */ s(
            Ia,
            {
              label: "Cover Art",
              hint: ee?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ s("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  oi,
                  {
                    checked: pa,
                    onChange: Ir,
                    disabled: Q || !ee?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      onClick: () => Cn(!0),
                      disabled: Q,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: H ? `url(${H}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: Q ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !H && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t($a, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        Je && /* @__PURE__ */ t(
                          "div",
                          {
                            className: "absolute inset-0 flex items-center justify-center",
                            style: { background: "rgba(0,0,0,0.5)" },
                            children: /* @__PURE__ */ t(oe, { size: 20, className: "animate-spin", style: { color: "white" } })
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
                          onClick: bn,
                          disabled: Q || Je || !ee?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: Q || Je || !ee?.models.image ? "not-allowed" : "pointer"
                          },
                          title: ee?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            Je ? /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 11 }),
                            H ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => Ho.current?.click(),
                          disabled: Q,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-secondary)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Upload your own image (PNG/JPG/WebP, max 4 MB)",
                          children: [
                            /* @__PURE__ */ t(Lo, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      H && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            U(""), Ee && _a.current?.(Ee, "");
                          },
                          disabled: Q,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-disabled)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Remove the cover and fall back to the gradient placeholder",
                          children: [
                            /* @__PURE__ */ t(xe, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => Fo((n) => !n),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            jr ? /* @__PURE__ */ t(Al, { size: 11 }) : /* @__PURE__ */ t(bi, { size: 11 }),
                            jr ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    jr && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: X,
                        onChange: (n) => Ie(n.target.value),
                        placeholder: kr(L, E, A),
                        disabled: Q,
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
                    ref: Ho,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (n) => {
                      const c = n.target.files?.[0];
                      c && vn(c), n.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          p !== "restyle" && !G && /* @__PURE__ */ t(
            Ia,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (te.intent ?? "").length > 0 ? `${(te.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: te.intent ?? "",
                  onChange: (n) => Ge((c) => ({ ...c, intent: n.target.value })),
                  placeholder: 'e.g. "first-person, mostly Spanish with one English chorus, mention rain, no clichés"',
                  disabled: Q,
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
            Ia,
            {
              label: a("musiccreator.lyrics.label"),
              counter: G ? "instrumental — no vocals" : `${An} / ${ra}`,
              counterDanger: !G && An > ra,
              className: "mb-5",
              headerExtra: G ? void 0 : /* @__PURE__ */ t(
                fo,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: $s,
                  busy: Ke.lyrics,
                  disabled: Q || Ke.lyrics || !S.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: S,
                    onChange: (n) => q(n.target.value),
                    onDragOver: dr,
                    onDrop: Vs,
                    placeholder: G ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: Q || G,
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
                  Iu.map((n) => {
                    const c = P?.id === n.id;
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => {
                          c ? T(null) : (T(n), S.trim() || q(n.skeleton));
                        },
                        disabled: Q,
                        className: "px-2 py-0.5 rounded-full transition-all disabled:opacity-40",
                        style: {
                          fontSize: 10,
                          fontWeight: c ? 600 : 500,
                          color: c ? "white" : "var(--text-secondary)",
                          background: c ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        title: n.description + (c ? " · click to clear" : " · click to use this form"),
                        children: [
                          c ? "✓ " : "",
                          n.label
                        ]
                      },
                      n.id
                    );
                  }),
                  P && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(Xu, { player: $, allTracks: Me }),
      /* @__PURE__ */ t("audio", { ref: Mn, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      zc,
      {
        open: m,
        onClose: () => f(!1),
        onUseRecipe: (n, c) => {
          b("compose"), C(n), I(c);
        }
      }
    ),
    /* @__PURE__ */ t(tp, { open: Hr, onClose: () => Fr(!1) }),
    vs && /* @__PURE__ */ t(
      zp,
      {
        host: e,
        settings: Kr,
        endpoints: nr,
        onChange: xs,
        onClose: () => rr(!1)
      }
    ),
    _n && /* @__PURE__ */ t(
      gp,
      {
        track: _n,
        endpoint: ee,
        onSave: eo,
        onClose: () => Nn(null)
      }
    ),
    Ws && /* @__PURE__ */ t(
      yp,
      {
        songName: L,
        mode: p,
        theme: E,
        style: A,
        intent: te.intent ?? "",
        lyrics: S,
        specs: te,
        coverDataUrl: H,
        endpoint: ee,
        busy: Je,
        onRegenerate: bn,
        onUpload: vn,
        onClear: () => {
          U(""), Ee && _a.current?.(Ee, "");
        },
        onClose: () => Cn(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(ap, { retrying: Ts, onRetry: Qr });
}
function Lp({ host: e, appName: r, currentVersion: a }) {
  const o = e.apps, [i, l] = k(null), [d, h] = k(!1), [g, p] = k(null), b = z(async () => {
    if (!o?.checkUpdate) {
      p("Update checks need a newer Tytus OS build.");
      return;
    }
    h(!0), p(null);
    try {
      const x = await o.checkUpdate();
      l(x), x.error && p(x.error);
    } catch (x) {
      p(x instanceof Error ? x.message : String(x));
    } finally {
      h(!1);
    }
  }, [o]);
  W(() => {
    b();
  }, [b]);
  const m = z(async () => {
    if (!o?.updateSelf) {
      p("Update needs a newer Tytus OS build.");
      return;
    }
    h(!0), p(null);
    try {
      const x = await o.updateSelf();
      l(x), p(x.error ?? `${r} updated. Close and reopen the app to load the new bundle.`);
    } catch (x) {
      p(x instanceof Error ? x.message : String(x));
    } finally {
      h(!1);
    }
  }, [o, r]), f = i?.latestVersion ?? a, v = !!i?.updateAvailable;
  return /* @__PURE__ */ s(
    "div",
    {
      className: "mb-4 rounded-lg",
      style: {
        border: "1px solid var(--border-subtle)",
        background: "var(--bg-panel)",
        padding: 12
      },
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { marginBottom: 8 }, children: [
          /* @__PURE__ */ t(vi, { size: 14, style: { color: "var(--accent-primary)" } }),
          /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }, children: "App version" }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => void b(),
              disabled: d,
              className: "ml-auto rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { fontSize: 10, color: "var(--text-secondary)", padding: "4px 8px", opacity: d ? 0.6 : 1 },
              children: d ? "Checking…" : "Check"
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }, children: [
          /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
            "Installed",
            /* @__PURE__ */ t("br", {}),
            /* @__PURE__ */ s("strong", { style: { color: "var(--text-primary)" }, children: [
              "v",
              i?.currentVersion ?? a
            ] })
          ] }),
          /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
            "Latest",
            /* @__PURE__ */ t("br", {}),
            /* @__PURE__ */ s("strong", { style: { color: v ? "var(--accent-primary)" : "var(--text-primary)" }, children: [
              "v",
              f
            ] })
          ] })
        ] }),
        v ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => void m(),
            disabled: d,
            className: "w-full rounded-md",
            style: { height: 30, background: "var(--accent-primary)", color: "#080808", fontSize: 11, fontWeight: 800, opacity: d ? 0.7 : 1 },
            children: d ? "Updating…" : `Update ${r}`
          }
        ) : /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: i ? "You are running the latest available version." : "Checking latest version…" }),
        g && /* @__PURE__ */ t("div", { style: { marginTop: 8, fontSize: 11, color: v ? "var(--text-secondary)" : "var(--text-tertiary)" }, children: g })
      ]
    }
  );
}
function zp({ host: e, settings: r, endpoints: a, onChange: o, onClose: i }) {
  const l = (d, h, g) => {
    const p = g.trim(), m = { ...r.overridesByEndpoint[d] ?? {} };
    p ? m[h] = p : delete m[h];
    const f = {
      ...r,
      overridesByEndpoint: {
        ...r.overridesByEndpoint,
        [d]: m
      }
    };
    o(f);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: "absolute inset-0 z-40 flex items-center justify-center",
      style: { background: "rgba(0,0,0,0.55)" },
      onClick: i,
      children: /* @__PURE__ */ s(
        "div",
        {
          onClick: (d) => d.stopPropagation(),
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
                  /* @__PURE__ */ t(wi, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                      title: `JULI3TA v${wr}`,
                      children: [
                        "v",
                        wr
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: i,
                      className: "ml-auto flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                      style: { width: 24, height: 24, color: "var(--text-secondary)" },
                      title: "Close",
                      children: /* @__PURE__ */ t(xe, { size: 14 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: /* @__PURE__ */ s("div", { className: "px-5 py-4", children: [
              /* @__PURE__ */ t(Lp, { host: e, appName: "JULI3TA", currentVersion: wr }),
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
                    /* @__PURE__ */ t(Oa, { size: 14, style: { color: "#fbbf24" } }),
                    "No reachable endpoints yet — connect a Tytus pod or start local switchAILocal, then come back."
                  ]
                }
              ) : /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", children: a.map((d) => {
                const h = r.overridesByEndpoint[d.url] ?? {}, g = [
                  { key: "music", label: "Music", discovered: d.models.music, kind: "music" },
                  { key: "cover", label: "Restyle", discovered: d.models.cover, kind: "cover" },
                  { key: "lyrics", label: "Lyrics", discovered: d.models.lyrics, kind: "lyrics" },
                  { key: "lyricsBackup", label: "Lyrics fallback", discovered: d.models.lyricsBackup, kind: "chat" },
                  { key: "image", label: "Cover art", discovered: d.models.image, kind: "image" }
                ], p = (f) => /music|cover/i.test(f), b = (f) => /image|diffusion|dall-?e|flux|sdxl/i.test(f), m = (f) => f === "chat" ? d.models.allIds.filter((v) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(v)) : f === "image" ? d.models.allIds.filter(b) : d.models.allIds.filter(p);
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
                              background: Ar(d),
                              boxShadow: `0 0 6px ${Ar(d)}`
                            }
                          }
                        ),
                        /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: d.label }),
                        /* @__PURE__ */ s("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                          d.url,
                          " · ",
                          d.models.allIds.length,
                          " models"
                        ] })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: g.map((f) => {
                        const v = m(f.kind), x = h[f.key] ?? "";
                        return /* @__PURE__ */ s(hl, { children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "flex items-center",
                              style: { fontSize: 11, color: "var(--text-secondary)" },
                              children: f.label
                            }
                          ),
                          /* @__PURE__ */ s(
                            "select",
                            {
                              value: x,
                              onChange: (N) => l(d.url, f.key, N.target.value),
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
                                /* @__PURE__ */ t("option", { value: "", children: f.discovered ? `Auto · ${f.discovered}` : f.kind === "lyrics" ? "Auto · server-side (no model param)" : v.length === 0 ? "(no models match)" : "Auto · (no preferred match — pick one)" }),
                                v.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: v.map((N) => /* @__PURE__ */ t("option", { value: N, children: N }, N)) })
                              ]
                            }
                          )
                        ] }, f.key);
                      }) })
                    ]
                  },
                  d.podId
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
                    onClick: i,
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
function Dp(e) {
  const r = e.host.storage.current();
  return Gc(r), r.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(gl, { value: e, children: /* @__PURE__ */ t(Mp, {}) });
  };
}
export {
  Dp as default
};
//# sourceMappingURL=index.js.map
