import { jsx as t, jsxs as s, Fragment as fe } from "react/jsx-runtime";
import { createContext as hn, useContext as gn, forwardRef as yn, createElement as _o, useState as T, useEffect as W, useMemo as be, useRef as te, useCallback as A, Fragment as xl } from "react";
import { createPortal as Wa } from "react-dom";
const fn = hn(null), wl = fn.Provider;
function Gt() {
  const e = gn(fn);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sl = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, a, o) => o ? o.toUpperCase() : a.toLowerCase()
), Ri = (e) => {
  const r = Sl(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, bn = (...e) => e.filter((r, a, o) => !!r && r.trim() !== "" && o.indexOf(r) === a).join(" ").trim(), Tl = (e) => {
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
var _l = {
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
const Nl = yn(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: o,
    className: n = "",
    children: l,
    iconNode: c,
    ...h
  }, g) => _o(
    "svg",
    {
      ref: g,
      ..._l,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: o ? Number(a) * 24 / Number(r) : a,
      className: bn("lucide", n),
      ...!l && !Tl(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...c.map(([p, x]) => _o(p, x)),
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
  const a = yn(
    ({ className: o, ...n }, l) => _o(Nl, {
      ref: l,
      iconNode: r,
      className: bn(
        `lucide-${kl(Ri(e))}`,
        `lucide-${e}`,
        o
      ),
      ...n
    })
  );
  return a.displayName = Ri(e), a;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], El = F("album", Cl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ua = F("check", Al);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], vn = F("chevron-down", Ml);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ll = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Pi = F("chevron-left", Ll);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Il = F("chevron-right", zl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Pl = F("chevron-up", Rl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], $a = F("circle-alert", jl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ul = F("circle-question-mark", Dl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], xn = F("copy", Ol);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], Bt = F("disc-3", $l);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hl = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], wn = F("download", Hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], Ro = F("ellipsis-vertical", Fl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], kn = F("external-link", Bl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = [
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
], Wt = F("file-music", Wl);
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
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], Jl = F("folder-open", ql);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], Ar = F("heart", Gl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Ha = F("image", Vl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = [
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
], No = F("layers", Yl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Xl = F("list-music", Kl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], oe = F("loader-circle", Ql);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], dt = F("mic", Zl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], ji = F("monitor-speaker", ec);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], Di = F("monitor", tc);
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
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], rc = F("moon", ac);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], qa = F("music-2", oc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], Mr = F("notebook-text", ic);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], _t = F("pause", nc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], Sn = F("pencil", sc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Ne = F("play", lc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Co = F("plus", cc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], uc = F("radio", dc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Tn = F("refresh-cw", pc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], _n = F("repeat-1", mc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], gc = F("repeat", hc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Tt = F("search", yc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], Nn = F("settings-2", fc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], Po = F("shuffle", bc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = [
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
], ut = F("sparkles", vc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Cn = F("square-check-big", xc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], En = F("square", wc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kc = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], qt = F("trash-2", kc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], jo = F("upload", Sc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], _c = F("user-round", Tc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], Cc = F("volume-2", Nc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], Ac = F("volume-x", Ec);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mc = [
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
], Jt = F("wand-sparkles", Mc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Se = F("x", Lc), zc = {
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
  "musiccreator.lyricsDirection.label": "Lyrics Direction",
  "musiccreator.lyricsDirection.hint": "Describe what lyrics you want. Generate fills the Lyrics box only; Create song still renders the audio.",
  "musiccreator.lyricsDirection.placeholder": 'e.g. "first-person, mostly Spanish with one English chorus, mention rain, no clichés"',
  "musiccreator.lyricsDirection.generate": "Generate Lyrics",
  "musiccreator.lyricsDirection.generateTooltip": "Generate lyrics from Theme, Lyrics Direction, and the selected song form",
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
  "musiccreator.restyle.metadataTheme.withArtist": 'Inspired by "{title}" by {artist}. Use the loaded reference audio for feel, groove, instrumentation, and mood, but make a new original direction.',
  "musiccreator.restyle.metadataTheme.noArtist": 'Inspired by "{title}". Use the loaded reference audio for feel, groove, instrumentation, and mood, but make a new original direction.',
  "musiccreator.restyle.metadataStyle.withArtist": "reference-inspired, {artist} influence, streamed reference",
  "musiccreator.restyle.metadataStyle.noArtist": "reference-inspired, streamed reference",
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
}, Ic = {
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
  "musiccreator.lyricsDirection.label": "Dirección de letra",
  "musiccreator.lyricsDirection.hint": "Describe qué letra quieres. Generar rellena solo el campo Letra; Crear canción sigue renderizando el audio.",
  "musiccreator.lyricsDirection.placeholder": 'p. ej. "primera persona, casi todo en español con un estribillo en inglés, mencionar lluvia, sin clichés"',
  "musiccreator.lyricsDirection.generate": "Generar letra",
  "musiccreator.lyricsDirection.generateTooltip": "Generar letra desde Tema, Dirección de letra y la forma de canción seleccionada",
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
  "musiccreator.restyle.metadataTheme.withArtist": 'Inspirada en "{title}" de {artist}. Usa el audio de referencia cargado para capturar sensación, groove, instrumentación y mood, pero crea una dirección original nueva.',
  "musiccreator.restyle.metadataTheme.noArtist": 'Inspirada en "{title}". Usa el audio de referencia cargado para capturar sensación, groove, instrumentación y mood, pero crea una dirección original nueva.',
  "musiccreator.restyle.metadataStyle.withArtist": "inspirado en la referencia, influencia de {artist}, referencia en streaming",
  "musiccreator.restyle.metadataStyle.noArtist": "inspirado en la referencia, referencia en streaming",
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
}, Ui = { en: zc, es: Ic }, br = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", Rc = (e, r) => r ? e.replace(/\{(\w+)\}/g, (a, o) => String(r[o] ?? `{${o}}`)) : e;
function Vt() {
  const { host: e } = Gt(), [r, a] = T(() => br(e.i18n?.locale));
  W(() => e.i18n?.onLocaleChange?.((n) => a(br(n))), [e]);
  const o = be(() => (n, l) => {
    const c = e.i18n?.t?.(n, l);
    if (c && c !== n) return c;
    const h = br(r), g = Ui[h]?.[n] ?? Ui.en[n] ?? n;
    return Rc(g, l);
  }, [e, r]);
  return {
    language: r,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (n) => a(br(n)),
    installLanguagePack: (n) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (n) => {
    }
  };
}
const Pc = [
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
], jc = [
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
function Dc({ recipe: e, onUse: r }) {
  const { t: a } = Vt(), [o, n] = T(!1), l = async () => {
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
              onClick: () => r(e),
              className: "flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all hover:scale-[1.02]",
              style: {
                fontSize: 11,
                fontWeight: 600,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                /* @__PURE__ */ t(Jt, { size: 12 }),
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
              children: o ? /* @__PURE__ */ t(ua, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(xn, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function Uc({ open: e, onClose: r, onUseRecipe: a }) {
  const { t: o, language: n } = Vt(), [l, c] = T("start");
  if (!e) return null;
  const h = n === "es" ? jc : Pc;
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
                        children: /* @__PURE__ */ t(Bt, { size: 18, style: { color: "white" } })
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
                      children: /* @__PURE__ */ t(Se, { size: 16 })
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
                  onClick: () => c(g),
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
                /* @__PURE__ */ t(na, { icon: /* @__PURE__ */ t(ut, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(vr, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(vr, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(vr, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(vr, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(na, { icon: /* @__PURE__ */ t(Jt, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(uo, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(uo, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(uo, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(na, { icon: /* @__PURE__ */ t(dt, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(Oc, { body: o("julietaHelp.start.recorder.body") }),
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
                  Dc,
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
                /* @__PURE__ */ t(na, { icon: /* @__PURE__ */ t($a, { size: 14 }), text: o("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.failed.title"), a: o("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.nopod.title"), a: o("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.local.title"), a: o("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t(na, { icon: /* @__PURE__ */ t(Jt, { size: 14 }), text: o("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.howlong.title"), a: o("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.quota.title"), a: o("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.length.title"), a: o("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.coverlen.title"), a: o("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t(na, { icon: /* @__PURE__ */ t(dt, { size: 14 }), text: o("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.silentmic.title"), a: o("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.shortrec.title"), a: o("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t(lt, { q: o("julietaHelp.help.q.privacy.title"), a: o("julietaHelp.help.q.privacy.body") })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function na({ icon: e, text: r }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: r })
  ] });
}
function vr({ n: e, title: r, body: a }) {
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
function uo({ emoji: e, name: r, body: a }) {
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
function Oc({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function lt({ q: e, a: r }) {
  const [a, o] = T(!1);
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
                Il,
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
const po = (e) => {
  const r = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(r.agents) ? r.agents : [],
    included: Array.isArray(r.included) ? r.included : [],
    tiers: [],
    ...r
  };
}, $c = () => {
  const { host: e } = Gt(), [r, a] = T(0), [o, n] = T(() => po(e.daemon?.state));
  return W(() => (n(po(e.daemon?.state)), e.daemon?.onStateChange?.((l) => n(po(l)))), [e, r]), be(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => a((l) => l + 1)
  }), [o]);
}, Hc = (e, r) => {
  const { host: a } = Gt();
  W(() => {
    if (!(!r || !a.shellMenu?.register))
      return a.shellMenu.register({
        appId: a.appId,
        groups: r.groups.map((o) => ({
          label: o.label,
          items: o.items.map((n) => ({
            id: n.id,
            label: n.label,
            disabled: n.disabled,
            onClick: n.onSelect
          }))
        }))
      });
  }, [a, r]);
};
function Fc() {
  return Gt().host.windows.current;
}
const An = "juli3ta_standalone_vfs_v1", Mn = () => Math.random().toString(36).slice(2) + Date.now().toString(36), $t = (e, r) => ({
  id: Mn(),
  name: e,
  type: "folder",
  parentId: r,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), Bc = () => {
  const e = $t("/", null), r = $t("home", e.id), a = $t("user", r.id), o = $t("Desktop", a.id), n = $t("Music", a.id), l = $t("Documents", a.id);
  return { nodes: Object.fromEntries([e, r, a, o, n, l].map((c) => [c.id, c])) };
}, xr = () => {
  try {
    const r = localStorage.getItem(An);
    if (r) return JSON.parse(r);
  } catch {
  }
  const e = Bc();
  return _r(e), e;
}, _r = (e) => {
  try {
    localStorage.setItem(An, JSON.stringify(e));
  } catch {
  }
}, Wc = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), qc = (e) => {
  const r = e.toLowerCase();
  return r.endsWith(".lyrics.txt") ? "NotebookText" : r.endsWith(".mp3") || r.endsWith(".wav") || r.endsWith(".m4a") ? "FileAudio" : r.endsWith(".json") ? "FileJson" : r.endsWith(".txt") || r.endsWith(".md") ? "FileText" : "File";
};
function Jc() {
  return {
    ensureUserFolder(r) {
      const a = xr(), o = Wc(r);
      let n = Object.values(a.nodes).find((l) => l.type === "folder" && l.name === o);
      if (!n) {
        const l = Object.values(a.nodes).find((c) => c.type === "folder" && c.name === "user");
        n = $t(o, l?.id ?? null), a.nodes[n.id] = n, _r(a);
      }
      return n.id;
    },
    findChildByName(r, a) {
      const o = xr();
      return Object.values(o.nodes).find((n) => n.parentId === r && n.name === a);
    },
    createFile(r, a, o = "", n = {}) {
      const l = xr(), c = { id: Mn(), name: a, type: "file", parentId: r, content: o, mimeType: n.mimeType, refTrackId: n.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return l.nodes[c.id] = c, _r(l), c.id;
    },
    writeFile(r, a) {
      const o = xr();
      o.nodes[r] && (o.nodes[r].content = a, o.nodes[r].modifiedAt = Date.now(), _r(o));
    }
  };
}
const Gc = { theme: { mode: "dark" } }, Vc = hn(null);
function Ln() {
  const e = gn(Vc), { host: r } = Gt();
  return be(() => e || {
    state: Gc,
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
function Yc() {
  const { host: e } = Gt();
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
const Kc = {
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
}, Xc = {
  juli3ta: Kc
};
function Do({ name: e, size: r = 24, className: a, style: o, alt: n, scale: l }) {
  const [c, h = "mark"] = e.split(":"), g = Xc[c], { state: p } = Ln();
  let x;
  if (h === "mark" ? x = p.theme.mode === "light" ? g?.["mark-ink"] : g?.["mark-white"] : x = g?.[h], !x) return null;
  const m = n ?? c.charAt(0).toUpperCase() + c.slice(1), y = l ?? x.scale ?? 1;
  return /* @__PURE__ */ t(
    "img",
    {
      src: x.src,
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
        ...y !== 1 ? { transform: `scale(${y})`, transformOrigin: "center" } : null,
        ...x.filter ? { filter: x.filter } : null,
        ...o
      },
      className: a,
      draggable: !1
    }
  );
}
let zn = null, Oi = null;
const mo = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), Qc = [
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
function Zc(e) {
  Oi = (async () => {
    for (const a of Qc) await e.run(a);
  })();
  const r = async () => Oi;
  zn = {
    exec: async (a) => {
      await r();
      for (const o of mo(a).split(";").map((n) => n.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (a, o = []) => (await r(), e.query(mo(a), o)),
    run: async (a, o = []) => {
      await r(), await e.run(mo(a), o);
    },
    tx: async (a) => (await r(), a())
  };
}
const ie = () => zn, Lr = (e) => ({
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
}), X = (e, r) => new RegExp(`no such column:\\s*${r}`, "i").test(String(e)), Uo = (e) => X(e, "specs_json") || X(e, "cover_data_url") || X(e, "theme") || X(e, "source") || X(e, "audio_kind") || X(e, "external_id") || X(e, "external_url") || X(e, "thumbnail_url") || X(e, "artist") || X(e, "album"), $i = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, Hi = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, ho = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, Ut = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), In = async (e, r, a, o) => {
  if (X(o, "source") || X(o, "audio_kind") || X(o, "external_id") || X(o, "external_url") || X(o, "thumbnail_url") || X(o, "artist") || X(o, "album"))
    try {
      return (await e.query(
        `SELECT ${$i}, theme FROM music_creator_tracks ${r}`,
        a
      )).map(Ut);
    } catch (n) {
      o = n;
    }
  if (X(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${$i} FROM music_creator_tracks ${r}`,
        a
      )).map((l) => Ut({ ...l, theme: "" }));
    } catch (n) {
      if (!X(n, "cover_data_url")) throw n;
      try {
        return (await e.query(
          `SELECT ${Hi} FROM music_creator_tracks ${r}`,
          a
        )).map((c) => Ut({ ...c, cover_data_url: "", theme: "" }));
      } catch (l) {
        if (!X(l, "specs_json")) throw l;
        return (await e.query(
          `SELECT ${ho} FROM music_creator_tracks ${r}`,
          a
        )).map((h) => Ut({ ...h, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (X(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${Hi} FROM music_creator_tracks ${r}`,
        a
      )).map((l) => Ut({ ...l, cover_data_url: "", theme: "" }));
    } catch (n) {
      if (!X(n, "specs_json")) throw n;
      return (await e.query(
        `SELECT ${ho} FROM music_creator_tracks ${r}`,
        a
      )).map((c) => Ut({ ...c, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (X(o, "specs_json"))
    return (await e.query(
      `SELECT ${ho} FROM music_creator_tracks ${r}`,
      a
    )).map((l) => Ut({ ...l, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, Rn = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, ed = async () => {
  const e = ie();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${Rn} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(Lr);
  } catch (r) {
    if (!Uo(r)) throw r;
    return (await In(e, "ORDER BY created_at DESC", [], r)).map(Lr);
  }
}, td = async (e) => {
  const r = ie();
  if (!r) return null;
  try {
    const a = await r.query(
      `SELECT ${Rn} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return a.length === 0 ? null : Lr(a[0]);
  } catch (a) {
    if (!Uo(a)) throw a;
    const o = await In(r, "WHERE id = ? LIMIT 1", [e], a);
    return o.length === 0 ? null : Lr(o[0]);
  }
}, zr = async (e) => {
  const r = ie();
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
    if (!Uo(o)) throw o;
    if (X(o, "source") || X(o, "audio_kind") || X(o, "external_id") || X(o, "external_url") || X(o, "thumbnail_url") || X(o, "artist") || X(o, "album"))
      try {
        await r.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...a, e.specsJson, e.coverDataUrl, e.theme]
        );
        return;
      } catch (n) {
        o = n;
      }
    if (X(o, "theme"))
      try {
        await r.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...a, e.specsJson, e.coverDataUrl]
        );
        return;
      } catch (n) {
        if (!X(n, "cover_data_url")) throw n;
      }
    if (X(o, "cover_data_url"))
      try {
        await r.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...a, e.specsJson]
        );
        return;
      } catch (n) {
        if (!X(n, "specs_json")) throw n;
      }
    await r.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      a
    );
  }
}, ad = async (e) => {
  const r = ie();
  r && await r.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, rd = async (e, r) => {
  const a = ie();
  if (!a) throw new Error("Database not ready");
  const o = r.trim().slice(0, 200) || "Untitled";
  return await a.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, od = async (e, r) => {
  const a = ie();
  if (!a) throw new Error("Database not ready");
  try {
    await a.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [r, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, id = async (e, r) => {
  const a = ie();
  if (!a) throw new Error("Database not ready");
  await a.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [r, e]);
}, nd = async (e, r) => {
  const a = ie();
  if (!a) throw new Error("Database not ready");
  await a.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [r, e]);
}, sd = async (e, r) => {
  const a = ie();
  if (!a) throw new Error("Database not ready");
  try {
    await a.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [r, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, ld = async (e, r) => {
  const a = ie();
  if (!a) throw new Error("Database not ready");
  try {
    await a.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [r, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, cd = async (e, r) => {
  const a = ie();
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
}, dd = async (e, r) => {
  const a = ie();
  a && await a.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(r)]
  );
}, Pn = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, jn = "music_creator_settings", ud = () => cd(jn, Pn), pd = (e) => dd(jn, e), mt = () => Date.now(), Dn = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: "",
  lyricsPreview: "",
  durationMs: e.duration_ms ?? 0,
  bitrate: 0,
  sampleRate: 0,
  sizeBytes: 0,
  createdAt: e.added_at ?? mt(),
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
}), Eo = (e) => ({
  id: e.id,
  provider: e.source || "youtube",
  external_id: e.externalId || e.id.replace(/^.+?:/, ""),
  title: e.title || "Untitled",
  artist: e.artist || "",
  album: e.album || "",
  duration_ms: e.durationMs || 0,
  thumbnail_url: e.thumbnailUrl || "",
  external_url: e.externalUrl || "",
  added_at: e.createdAt || mt(),
  last_played_at: 0
}), Un = [
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
], md = Un.join(", "), hd = Un.map((e) => `t.${e}`).join(", "), gd = async () => {
  const e = ie();
  return e ? (await e.query(
    `SELECT ${md} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(Dn) : [];
}, On = async (e) => {
  const r = ie();
  if (!r) throw new Error("Database not ready");
  const a = Eo(e);
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
}, yd = async (e) => {
  const r = ie();
  r && await r.tx(async () => {
    await r.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await r.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await r.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, fd = async () => {
  const e = ie();
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
}, bd = async (e) => {
  const r = ie();
  return r ? (await r.query(
    "SELECT kind, entity_id, provider, title, created_at FROM music_favorites WHERE kind = ? ORDER BY created_at DESC",
    [e]
  )).map((n) => ({
    kind: n.kind,
    entityId: n.entity_id,
    provider: n.provider,
    title: n.title,
    createdAt: n.created_at
  })) : [];
}, vd = async (e) => {
  const r = ie();
  if (!r) throw new Error("Database not ready");
  const a = await r.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(a[0]?.n ?? 0) > 0 ? (await r.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await r.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", mt()]
  ), !0);
}, Ia = async () => {
  const e = ie();
  if (!e) return [];
  const r = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), a = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${hd}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return a.forEach((n) => {
    o.set(n.playlist_id, [...o.get(n.playlist_id) ?? [], Dn(n)]);
  }), r.map((n) => ({
    id: n.id,
    name: n.name,
    createdAt: n.created_at,
    updatedAt: n.updated_at,
    items: o.get(n.id) ?? []
  }));
}, xd = async (e) => {
  const r = ie();
  if (!r) throw new Error("Database not ready");
  const a = e.trim().slice(0, 80) || "New Playlist", o = mt(), n = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: a, createdAt: o, updatedAt: o, items: [] };
  return await r.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [n.id, n.name, n.createdAt, n.updatedAt]
  ), n;
}, wd = async (e) => {
  const r = ie();
  r && await r.tx(async () => {
    await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await r.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await r.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, kd = async (e, r) => {
  const a = ie();
  if (!a) throw new Error("Database not ready");
  await a.tx(async () => {
    await On(r);
    const o = await a.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), n = Number(o[0]?.n ?? 0);
    await a.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, r.id, n, mt()]
    ), await a.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [mt(), e]);
  });
}, Sd = async (e, r) => {
  const a = ie();
  a && (await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, r]), await a.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [mt(), e]));
}, Td = async (e) => {
  const r = ie();
  r && await r.tx(async () => {
    for (const a of e.tracks) {
      const o = Eo(a);
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
        [a.kind, a.entityId, a.provider, a.title ?? "", a.createdAt ?? mt()]
      ), await r.run(
        "UPDATE music_favorites SET provider = ?, title = ? WHERE kind = ? AND entity_id = ?",
        [a.provider, a.title ?? "", a.kind, a.entityId]
      );
    for (const a of e.playlists) {
      const o = a.createdAt || mt(), n = a.updatedAt || o;
      await r.run(
        "INSERT OR IGNORE INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
        [a.id, a.name || "Playlist", o, n]
      ), await r.run(
        "UPDATE music_playlists SET name = ?, updated_at = ? WHERE id = ?",
        [a.name || "Playlist", n, a.id]
      ), await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [a.id]);
      let l = 0;
      for (const c of a.items) {
        const h = Eo(c);
        await r.run(
          `INSERT OR IGNORE INTO music_library_tracks
             (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
          [h.id, h.provider, h.external_id, h.title, h.artist, h.album, h.duration_ms, h.thumbnail_url, h.external_url, h.added_at]
        ), await r.run(
          `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
           VALUES (?, ?, ?, ?)`,
          [a.id, c.id, l++, mt()]
        );
      }
    }
  });
}, $n = "/api/juli3ta/music-state", Hn = "juli3ta:musicLibrarySnapshot:v1", tt = () => Date.now(), _d = () => ({
  version: 1,
  updatedAt: 0,
  tracks: [],
  favorites: [],
  playlists: []
}), Oo = (e) => !!e && typeof e == "object" && !Array.isArray(e), Nd = /* @__PURE__ */ new Set([
  "",
  "-",
  "—",
  "youtube",
  "you tube",
  "youtube music",
  "streamed audio",
  "streamed reference",
  "remote stream",
  "remote_stream",
  "juli3ta"
]), Cd = (e) => {
  const r = String(e ?? "").trim();
  return r ? r.split(/[,;\n]/).map((a) => a.trim()).filter((a) => !Nd.has(a.toLowerCase().replace(/\s+/g, " "))).join(", ") : "";
}, $o = (e) => {
  if (!Oo(e)) return null;
  const r = String(e.id ?? "").trim();
  if (!r) return null;
  const a = e.source === "juli3ta" ? "juli3ta" : "youtube", o = e.audioKind === "data_url" || e.audioKind === "lyrics_only" ? e.audioKind : "remote_stream";
  return {
    id: r,
    title: String(e.title ?? "Untitled"),
    styleTags: Cd(e.styleTags),
    lyricsPreview: String(e.lyricsPreview ?? ""),
    durationMs: Number(e.durationMs ?? 0) || 0,
    bitrate: Number(e.bitrate ?? 0) || 0,
    sampleRate: Number(e.sampleRate ?? 0) || 0,
    sizeBytes: Number(e.sizeBytes ?? 0) || 0,
    createdAt: Number(e.createdAt ?? tt()) || tt(),
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
}, Ed = (e) => {
  if (!Oo(e)) return null;
  const r = e.kind;
  if (r !== "track" && r !== "artist" && r !== "album" && r !== "playlist") return null;
  const a = String(e.entityId ?? "").trim();
  return a ? {
    kind: r,
    entityId: a,
    provider: String(e.provider ?? ""),
    title: String(e.title ?? ""),
    createdAt: Number(e.createdAt ?? tt()) || tt()
  } : null;
}, Fn = (e) => {
  if (!Oo(e)) return null;
  const r = String(e.id ?? "").trim();
  return r ? {
    id: r,
    name: String(e.name ?? "Playlist"),
    createdAt: Number(e.createdAt ?? tt()) || tt(),
    updatedAt: Number(e.updatedAt ?? e.createdAt ?? tt()) || tt(),
    items: Array.isArray(e.items) ? e.items.map($o).filter((a) => !!a) : []
  } : null;
}, pa = (e) => e ? {
  version: 1,
  updatedAt: Number(e.updatedAt ?? 0) || 0,
  tracks: Array.isArray(e.tracks) ? e.tracks.map($o).filter((r) => !!r) : [],
  favorites: Array.isArray(e.favorites) ? e.favorites.map(Ed).filter((r) => !!r) : [],
  playlists: Array.isArray(e.playlists) ? e.playlists.map(Fn).filter((r) => !!r) : []
} : _d(), Fi = (e, r) => {
  const a = /* @__PURE__ */ new Map();
  for (const o of [...e, ...r]) {
    const n = a.get(o.id);
    if (!n) {
      a.set(o.id, o);
      continue;
    }
    const l = o.updatedAt ?? o.createdAt ?? 0, c = n.updatedAt ?? n.createdAt ?? 0;
    l >= c && a.set(o.id, o);
  }
  return [...a.values()].sort((o, n) => (n.updatedAt ?? n.createdAt ?? 0) - (o.updatedAt ?? o.createdAt ?? 0));
}, Ad = (e, r) => {
  const a = /* @__PURE__ */ new Map();
  for (const o of [...e, ...r]) {
    const n = `${o.kind}:${o.entityId}`, l = a.get(n);
    (!l || (o.createdAt ?? 0) >= (l.createdAt ?? 0)) && a.set(n, o);
  }
  return [...a.values()].sort((o, n) => (n.createdAt ?? 0) - (o.createdAt ?? 0));
}, Bi = (e, r) => {
  const a = pa(e), o = pa(r);
  return {
    version: 1,
    updatedAt: Math.max(a.updatedAt, o.updatedAt, tt()),
    tracks: Fi(o.tracks, a.tracks),
    favorites: Ad(o.favorites, a.favorites),
    playlists: Fi(o.playlists, a.playlists)
  };
}, Md = (e, r, a) => {
  const o = new Map(e.map((n) => [n.id, n]));
  return {
    version: 1,
    updatedAt: tt(),
    tracks: e.map((n) => $o(n)).filter((n) => !!n),
    favorites: [...r].map((n) => {
      const l = o.get(n);
      return {
        kind: "track",
        entityId: n,
        provider: l?.source ?? "youtube",
        title: l?.title ?? "",
        createdAt: tt()
      };
    }),
    playlists: a.map((n) => Fn(n)).filter((n) => !!n)
  };
}, Ld = () => {
  try {
    const e = localStorage.getItem(Hn);
    return e ? pa(JSON.parse(e)) : null;
  } catch {
    return null;
  }
}, zd = (e) => {
  try {
    localStorage.setItem(Hn, JSON.stringify(pa(e)));
  } catch {
  }
}, Id = async () => {
  try {
    const e = await fetch($n, {
      method: "GET",
      headers: { Accept: "application/json" }
    });
    if (!e.ok) return null;
    const r = await e.json();
    return pa(r.state);
  } catch {
    return null;
  }
}, Wi = async (e) => {
  const r = pa(e);
  zd(r);
  try {
    await fetch($n, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": `juli3ta-music-state-${r.updatedAt}-${r.tracks.length}-${r.favorites.length}`
      },
      body: JSON.stringify({ state: r })
    });
  } catch {
  }
}, Rd = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), qi = async () => {
  const e = ie();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(Rd) : [];
}, Bn = async (e) => {
  const r = ie();
  if (!r) throw new Error("Database not ready");
  await r.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, go = "tytus.voice-recorder.recordings", Pd = async () => {
  try {
    const e = localStorage.getItem(go);
    if (!e) return;
    const r = JSON.parse(e);
    if (!Array.isArray(r)) {
      localStorage.removeItem(go);
      return;
    }
    for (const a of r)
      if (!(!a?.id || typeof a.audioDataUrl != "string"))
        try {
          await Bn({
            id: a.id,
            name: a.name ?? "Untitled recording",
            durationMs: a.durationMs ?? 0,
            createdAt: a.createdAt ?? Date.now(),
            mimeType: a.mimeType ?? "audio/webm",
            audioDataUrl: a.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(go);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, jd = (e, r) => e._value, Dd = "http://localhost:18080/v1", Ud = "sk-test-123", Od = (e) => /\/v1\/?$/i.test(e), Wn = (e) => typeof e == "object" && e !== null, $d = (e) => typeof e == "string" ? e : Wn(e) && typeof e._value == "string" ? jd(e) : "", yo = (...e) => {
  for (const r of e)
    if (typeof r == "string" && r.trim()) return r;
  return null;
}, Ji = (e) => {
  const r = e?.trim();
  if (!r) return null;
  const a = r.replace(/\/+$/, "");
  return Od(a) ? a : `${a}/v1`;
}, fo = (e, r, a) => {
  r.has(a.url) || (r.add(a.url), e.push(a));
}, Hd = (e) => {
  const r = [], a = /* @__PURE__ */ new Set();
  for (const o of e) {
    const n = o, l = Wn(n.meta) ? n.meta : {}, c = $d(
      n.user_key ?? n.userKey ?? n.api_key ?? n.apiKey ?? l.userKey ?? l.gatewayKey ?? l.apiKey ?? l.api_key
    );
    if (!c) continue;
    const h = yo(n.pod_id, n.podId, n.id) || "included", g = Ji(
      yo(n.public_url, n.publicUrl, n.gatewayUrl, l.gatewayUrl, l.publicUrl)
    );
    g && fo(r, a, {
      url: g,
      apiKey: c,
      podId: `${h}:remote`,
      source: "included",
      label: `AIL gateway ${h} (remote)`,
      proxyPodId: h
    });
    const p = Ji(
      yo(n.endpoint, n.private_url, n.privateUrl, l.endpoint, l.privateUrl)
    );
    p && fo(r, a, {
      url: p,
      apiKey: c,
      podId: `${h}:tunnel`,
      source: "included",
      label: `AIL gateway ${h} (tunnel)`,
      proxyPodId: h
    });
  }
  return fo(r, a, {
    url: Dd,
    apiKey: Ud,
    podId: "local",
    source: "local",
    label: "Local AIL"
  }), r;
}, Ho = 100, Fo = 60, da = 6, Fa = 90, Fd = 24e3, Bd = 0.92, Wd = 3, qd = 0.05, Gi = 20, Jd = 3, Gd = 0.35, Vd = 0.55, Yd = (e) => typeof e == "number" ? { targetSec: e, fastRemote: !1 } : {
  targetSec: e?.targetSec ?? Fo,
  fastRemote: e?.fastRemote ?? !1,
  signal: e?.signal,
  onProgress: e?.onProgress
}, ve = (e, r, a, o) => {
  e?.onProgress?.({
    stage: r,
    progress: Math.max(0, Math.min(1, a)),
    message: o
  });
}, Kd = (e) => /^https?:\/\//i.test(e), Xd = (e) => {
  const r = [e];
  try {
    const a = e.split("/api/music/proxy/")[1];
    a && r.push(decodeURIComponent(a));
  } catch {
  }
  for (const a of r)
    try {
      const o = new URL(a), n = Number(o.searchParams.get("dur") || o.searchParams.get("duration"));
      if (Number.isFinite(n) && n > 0) return { durationSec: n };
    } catch {
    }
  return {};
}, Qd = async (e, r, a) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((c) => MediaRecorder.isTypeSupported(c));
  if (!o)
    throw new Error("No supported recorder mime type for fallback.");
  const n = URL.createObjectURL(e), l = new Audio();
  l.src = n, l.muted = !0, l.crossOrigin = "anonymous", l.preload = "auto";
  try {
    await new Promise((v, _) => {
      const C = () => v(), N = () => _(new Error("Audio element rejected the source format too — browser cannot play it."));
      l.addEventListener("canplay", C, { once: !0 }), l.addEventListener("error", N, { once: !0 }), l.load();
    });
    const c = r.createMediaElementSource(l), h = r.createMediaStreamDestination();
    c.connect(h);
    const g = new MediaRecorder(h.stream, { mimeType: o }), p = [];
    g.ondataavailable = (v) => {
      v.data.size > 0 && p.push(v.data);
    };
    const x = Math.max(
      6e3,
      Math.min(a, l.duration || a) * 1e3
    ), m = new Promise((v) => {
      g.onstop = () => v();
    });
    g.start(250), l.currentTime = 0, await l.play(), await new Promise((v) => setTimeout(v, x)), g.stop(), l.pause(), await m;
    const y = new Blob(p, { type: o });
    if (y.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const w = await y.arrayBuffer();
    return await r.decodeAudioData(w);
  } finally {
    URL.revokeObjectURL(n);
  }
}, qn = async (e, r = 35, a = !0, o) => {
  const n = window.AudioContext || window.webkitAudioContext, l = new n();
  try {
    const c = await e.arrayBuffer();
    try {
      return await l.decodeAudioData(c.slice(0));
    } catch (h) {
      if (!a) throw h;
      try {
        return ve(o, "capturing", 0.32, "Browser decoder needs compatibility capture…"), await Qd(e, l, r);
      } catch (g) {
        const p = h.message || "decodeAudioData failed", x = g.message || "fallback failed";
        throw new Error(
          `Audio format isn't supported by this browser (${p}). Compatibility-mode capture also failed: ${x}`
        );
      }
    }
  } finally {
    l.close().catch(() => {
    });
  }
}, Jn = async (e, r) => {
  const a = await fetch(e, { signal: r?.signal });
  if (!a.ok) throw new Error(`Could not load audio (${a.status}).`);
  return a.blob();
}, bo = (e, r, a, o = 12e3) => new Promise((n, l) => {
  let c = null;
  const h = () => {
    e.removeEventListener(r, g), e.removeEventListener("error", p), a?.removeEventListener("abort", x), c && clearTimeout(c);
  }, g = () => {
    h(), n();
  }, p = () => {
    h(), l(new Error("Browser media element rejected the streamed audio."));
  }, x = () => {
    h(), l(new DOMException("Reference extraction was cancelled.", "AbortError"));
  };
  e.addEventListener(r, g, { once: !0 }), e.addEventListener("error", p, { once: !0 }), a?.addEventListener("abort", x, { once: !0 }), c = setTimeout(() => {
    h(), l(new Error(`Timed out waiting for audio ${String(r)}.`));
  }, o);
}), Zd = async (e, r, a) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable for fast streamed reference capture.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((y) => MediaRecorder.isTypeSupported(y));
  if (!o) throw new Error("No supported recorder mime type for fast streamed reference capture.");
  const n = Xd(e), l = Math.max(da, Math.min(Fa, r + 2)), c = n.durationSec, h = c ? Math.max(0, Math.min(c - l, c * Vd - l / 2)) : 0;
  ve(a, "loading", 0.08, "Opening streamed audio without downloading the full song…");
  const g = window.AudioContext || window.webkitAudioContext, p = new g(), x = new Audio();
  x.crossOrigin = "anonymous", x.preload = "auto", x.src = e;
  let m = null;
  try {
    await bo(x, "canplay", a.signal, 15e3), h > 0 && Number.isFinite(x.duration) ? (ve(a, "loading", 0.15, `Seeking to ${Math.floor(h / 60)}:${Math.floor(h % 60).toString().padStart(2, "0")}…`), x.currentTime = h, await bo(x, "seeked", a.signal, 12e3)) : h > 0 && (x.currentTime = h, await Promise.race([
      bo(x, "seeked", a.signal, 12e3),
      new Promise((I) => setTimeout(I, 1200))
    ]));
    const y = p.createMediaElementSource(x), w = p.createMediaStreamDestination();
    y.connect(w);
    const v = new MediaRecorder(w.stream, { mimeType: o }), _ = [];
    v.ondataavailable = (I) => {
      I.data.size > 0 && _.push(I.data);
    };
    const C = new Promise((I) => {
      v.onstop = () => I();
    }), N = performance.now();
    m = setInterval(() => {
      const I = (performance.now() - N) / 1e3;
      ve(
        a,
        "capturing",
        0.18 + 0.52 * Math.min(1, I / l),
        `Capturing ${l.toFixed(0)} s cover reference…`
      );
    }, 250), ve(a, "capturing", 0.18, `Capturing ${l.toFixed(0)} s cover reference…`), v.start(250), await p.resume().catch(() => {
    }), await x.play(), await new Promise((I, K) => {
      const S = setTimeout(I, l * 1e3), L = () => {
        clearTimeout(S), K(new DOMException("Reference extraction was cancelled.", "AbortError"));
      };
      a.signal?.addEventListener("abort", L, { once: !0 });
    }), v.stop(), x.pause(), await C, m && clearInterval(m), m = null;
    const P = new Blob(_, { type: o });
    if (P.size === 0) throw new Error("Fast streamed capture produced no audio.");
    ve(a, "decoding", 0.75, "Decoding cover reference…");
    const k = await P.arrayBuffer();
    return {
      buffer: await p.decodeAudioData(k),
      sourceOffsetSec: h,
      sourceDurationSec: c || (Number.isFinite(x.duration) ? x.duration : void 0)
    };
  } finally {
    m && clearInterval(m), x.pause(), x.removeAttribute("src"), x.load(), p.close().catch(() => {
    });
  }
}, Ao = (e) => new Promise((r, a) => {
  const o = new FileReader();
  o.onload = () => {
    const n = typeof o.result == "string" ? o.result : "", l = n.indexOf("base64,");
    r(l >= 0 ? n.slice(l + 7) : "");
  }, o.onerror = () => a(o.error), o.readAsDataURL(e);
}), eu = (e) => {
  const r = e.sampleRate, a = Math.max(1, Math.floor(r * Ho / 1e3)), o = Math.floor(e.length / a), n = new Float32Array(o), l = [];
  for (let c = 0; c < e.numberOfChannels; c++) l.push(e.getChannelData(c));
  for (let c = 0; c < o; c++) {
    const h = c * a;
    let g = 0;
    for (let p = 0; p < a; p++) {
      let x = 0;
      for (let m = 0; m < l.length; m++) x += l[m][h + p];
      x /= l.length, g += x * x;
    }
    n[c] = Math.sqrt(g / a);
  }
  return n;
}, tu = (e) => {
  const r = e.sampleRate, a = Math.max(1, Math.floor(r * Ho / 1e3)), o = Math.floor(e.length / a), n = new Float32Array(o), l = [];
  for (let c = 0; c < e.numberOfChannels; c++) l.push(e.getChannelData(c));
  for (let c = 0; c < o; c++) {
    const h = c * a;
    let g = 0, p = 0;
    for (let x = 0; x < l.length; x++) p += l[x][h];
    p /= l.length;
    for (let x = 1; x < a; x++) {
      let m = 0;
      for (let y = 0; y < l.length; y++) m += l[y][h + x];
      m /= l.length, (p > 1e-3 && m < -1e-3 || p < -1e-3 && m > 1e-3) && g++, p = m;
    }
    n[c] = g / (a / 2);
  }
  return n;
}, Gn = (e) => {
  const r = eu(e), a = tu(e);
  return { rms: r, centroid: a, framesPerSec: 1e3 / Ho };
}, au = (e, r = 4) => {
  let a = 0;
  for (let g = 0; g < e.length; g++) a += e[g];
  const o = a / e.length;
  let n = 0;
  for (let g = 0; g < e.length; g++) n += (e[g] - o) ** 2;
  const l = Math.sqrt(n / e.length) || 1, c = Math.floor(e.length / r), h = new Float32Array(c);
  for (let g = 0; g < c; g++) {
    let p = 0;
    for (let x = 0; x < r; x++) p += e[g * r + x];
    h[g] = (p / r - o) / l;
  }
  return h;
}, ru = (e, r, a) => {
  if (r + a >= e.length) return 0;
  const o = Math.max(1, Math.floor(a / 4));
  let n = -1 / 0, l = 0;
  for (let g = 0; g + a < e.length; g += o) {
    if (Math.abs(g - r) < a) continue;
    let p = 0;
    for (let x = 0; x < a; x++)
      p += e[r + x] * e[g + x];
    p /= a, p > n && (n = p), p > 0.5 && l++;
  }
  const c = Math.max(0, Math.min(1, (n + 1) / 2)), h = Math.min(1, l / 6);
  return 0.6 * c + 0.4 * h;
}, Vn = (e, r) => {
  const a = Math.max(1, Math.floor(r * e.framesPerSec));
  if (e.rms.length <= a) return [];
  const o = au(e.rms, 4), n = e.rms.length / o.length, l = Math.max(1, Math.floor(a / n));
  let c = 0, h = 0, g = 0;
  for (let y = 0; y < a; y++)
    c += e.rms[y], h += e.rms[y] * e.rms[y], g += e.centroid[y];
  const p = [], x = Math.max(1, Math.floor(e.framesPerSec)), m = (y) => {
    const w = c / a, v = Math.max(0, h / a - w * w), _ = Math.sqrt(v), C = g / a, N = Math.floor(y / n), P = ru(o, N, l), k = 0.45 * Math.min(1, w * 4) + 0.2 * C + 0.25 * P - 0.1 * Math.min(1, _ * 6);
    p.push({
      startFrame: y,
      lenFrames: a,
      score: k,
      meanRms: w,
      stdRms: _,
      meanBright: C,
      selfSim: P
    });
  };
  m(0);
  for (let y = a; y < e.rms.length; y += x) {
    for (let w = 0; w < x && y - x + w < e.rms.length; w++) {
      const v = y - a - x + w + 1, _ = y - x + w + 1;
      if (_ >= e.rms.length) break;
      v >= 0 && (c -= e.rms[v], h -= e.rms[v] * e.rms[v], g -= e.centroid[v]), c += e.rms[_], h += e.rms[_] * e.rms[_], g += e.centroid[_];
    }
    m(y - a + x);
  }
  return p;
}, Mo = (e, r, a) => {
  const o = new Float32Array(a), n = [];
  for (let l = 0; l < e.numberOfChannels; l++) n.push(e.getChannelData(l));
  for (let l = 0; l < a; l++) {
    let c = 0;
    for (let h = 0; h < n.length; h++) c += n[h][r + l] || 0;
    o[l] = c / n.length;
  }
  return o;
}, ou = (e, r, a) => {
  if (a >= r) return e;
  const o = r / a, n = Math.max(1, Math.floor(e.length / o)), l = new Float32Array(n);
  for (let c = 0; c < n; c++) {
    const h = c * o, g = Math.floor(h), p = Math.min(e.length - 1, g + 1), x = h - g;
    l[c] = e[g] * (1 - x) + e[p] * x;
  }
  return l;
}, iu = (e, r) => {
  const n = r * 1 * 2, l = 1 * (16 / 8), c = e.length * 2, h = new ArrayBuffer(44 + c), g = new DataView(h);
  let p = 0;
  const x = (w) => {
    for (let v = 0; v < w.length; v++) g.setUint8(p++, w.charCodeAt(v));
  }, m = (w) => {
    g.setUint32(p, w, !0), p += 4;
  }, y = (w) => {
    g.setUint16(p, w, !0), p += 2;
  };
  x("RIFF"), m(36 + c), x("WAVE"), x("fmt "), m(16), y(1), y(1), m(r), m(n), y(l), y(16), x("data"), m(c);
  for (let w = 0; w < e.length; w++) {
    const v = Math.max(-1, Math.min(1, e[w]));
    g.setInt16(p, v < 0 ? v * 32768 : v * 32767, !0), p += 2;
  }
  return new Blob([h], { type: "audio/wav" });
}, nu = (e, r) => {
  const a = new Float32Array(e);
  let o = 0;
  for (let l = 0; l < a.length; l++) o = Math.max(o, Math.abs(a[l]));
  if (o > 1e-4) {
    const l = Math.min(Bd / o, Wd);
    for (let c = 0; c < a.length; c++) a[c] *= l;
  }
  const n = Math.min(Math.floor(r * qd), Math.floor(a.length / 2));
  for (let l = 0; l < n; l++) {
    const c = l / Math.max(1, n);
    a[l] *= c, a[a.length - 1 - l] *= c;
  }
  return a;
}, Lo = (e, r) => {
  const a = Math.min(r, Fd), o = nu(e, r), n = ou(o, r, a);
  return iu(n, a);
}, Vi = async (e, r, a, o = 0, n) => {
  const l = e.length / e.sampleRate, c = n ?? l;
  if (l < da)
    throw new Error(`Source is too short (${l.toFixed(1)} s). Need at least ${da} s.`);
  const h = Math.min(Fa, Math.max(da, r));
  if (l <= h) {
    ve(a, "encoding", 0.88, "Encoding cover-ready reference…");
    const C = Mo(e, 0, e.length), N = Lo(C, e.sampleRate), P = await Ao(N);
    return ve(a, "done", 1, "Reference sample ready."), { base64: P, durationSec: l, startSec: o, sourceDurationSec: c, score: 1 };
  }
  ve(a, "analyzing", 0.78, "Analyzing loudness and musical shape…");
  const g = Gn(e), p = Vn(g, h);
  if (p.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  p.sort((C, N) => N.score - C.score);
  const x = p[0], m = Math.floor(x.startFrame / g.framesPerSec * e.sampleRate), y = Math.floor(x.lenFrames / g.framesPerSec * e.sampleRate);
  ve(a, "encoding", 0.9, "Encoding cover-ready reference…");
  const w = Mo(e, m, y), v = Lo(w, e.sampleRate), _ = await Ao(v);
  return ve(a, "done", 1, "Reference sample ready."), {
    base64: _,
    durationSec: y / e.sampleRate,
    startSec: o + m / e.sampleRate,
    sourceDurationSec: c,
    score: Math.max(0, Math.min(1, x.score))
  };
}, Yn = async (e, r = Fo) => {
  const a = Yd(r), o = Math.min(Fa, Math.max(da, a.targetSec));
  if (typeof e == "string" && a.fastRemote && Kd(e))
    try {
      const c = await Zd(e, o, a);
      return await Vi(
        c.buffer,
        o,
        a,
        c.sourceOffsetSec,
        c.sourceDurationSec
      );
    } catch (c) {
      if (c.name === "AbortError") throw c;
      ve(a, "loading", 0.08, "Fast streamed capture failed — falling back to full decode…");
    }
  ve(a, "loading", 0.08, "Loading reference audio…");
  const n = typeof e == "string" ? await Jn(e, a) : e;
  ve(a, "decoding", 0.28, "Decoding reference audio…");
  const l = await qn(n, Fa + 5, !0, a);
  return await Vi(l, o, a);
}, su = (e, r, a) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(a * r);
  let n = 0;
  for (const h of e) n += h.length;
  n -= o * (e.length - 1);
  const l = new Float32Array(n);
  let c = 0;
  l.set(e[0], 0), c = e[0].length - o;
  for (let h = 1; h < e.length; h++) {
    const g = e[h];
    for (let p = 0; p < o; p++) {
      const x = p / o;
      l[c + p] = l[c + p] * (1 - x) + g[p] * x;
    }
    for (let p = o; p < g.length; p++)
      l[c + p] = g[p];
    c += g.length - o;
  }
  return l;
}, lu = (e, r, a) => {
  const o = [...e].sort((l, c) => c.score - l.score), n = [];
  for (const l of o)
    if (n.some(
      (h) => Math.abs(h.startFrame - l.startFrame) < Math.max(h.lenFrames, l.lenFrames) + a
    ) || n.push(l), n.length >= r) break;
  return n.sort((l, c) => l.startFrame - c.startFrame), n;
}, cu = async (e, r = {}) => {
  ve(r, "loading", 0.08, "Loading reference audio…");
  const a = typeof e == "string" ? await Jn(e, r) : e;
  ve(r, "decoding", 0.28, "Decoding reference audio…");
  const o = await qn(a, Fa + 5, !0, r), n = o.length / o.sampleRate;
  if (n < da * 2) {
    const v = await Yn(a, { ...r, targetSec: Fo });
    return {
      base64: v.base64,
      durationSec: v.durationSec,
      segments: [{ startSec: v.startSec, endSec: v.startSec + v.durationSec, score: v.score }],
      sourceDurationSec: n
    };
  }
  ve(r, "analyzing", 0.68, "Finding iconic moments…");
  const l = Gn(o), c = Vn(l, Gi);
  if (c.length === 0)
    throw new Error("Could not analyze the audio.");
  const h = Math.max(
    Math.floor(Gi * l.framesPerSec * 0.5),
    Math.floor(l.rms.length / 4)
  ), g = lu(c, Jd, h), p = g.map((v) => {
    const _ = Math.floor(v.startFrame / l.framesPerSec * o.sampleRate), C = Math.floor(v.lenFrames / l.framesPerSec * o.sampleRate);
    return Mo(o, _, C);
  }), x = su(p, o.sampleRate, Gd);
  ve(r, "encoding", 0.9, "Encoding cover-ready reference mix…");
  const m = Lo(x, o.sampleRate), y = await Ao(m);
  ve(r, "done", 1, "Reference sample ready.");
  const w = g.map((v) => ({
    startSec: v.startFrame / l.framesPerSec,
    endSec: (v.startFrame + v.lenFrames) / l.framesPerSec,
    score: Math.max(0, Math.min(1, v.score))
  }));
  return {
    base64: y,
    durationSec: x.length / o.sampleRate,
    segments: w,
    sourceDurationSec: n
  };
};
class Kn extends Error {
  status;
  code;
  constructor(r, a, o) {
    super(o), this.name = "MusicDaemonError", this.status = r, this.code = a;
  }
}
const ga = async (e, r) => {
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
    const n = o, l = typeof n?.error == "string" ? n.error : `http_${a.status}`;
    throw new Kn(a.status, l, l === "music_unavailable" ? "Music search is still starting up." : l);
  }
  return o;
}, Xn = async (e, r, a) => {
  const o = await fetch(e, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json", "Sec-Fetch-Site": "same-origin" },
    credentials: "same-origin",
    body: JSON.stringify(r),
    signal: a
  });
  let n = null;
  try {
    n = await o.json();
  } catch {
    n = null;
  }
  if (!o.ok) {
    const l = n, c = typeof l?.error == "string" ? l.error : `http_${o.status}`;
    throw new Kn(o.status, c, c);
  }
  return n;
}, du = (e) => ga("/api/music/status", e), Yi = async (e) => (await ga("/api/music/providers", e)).providers ?? [], Ki = async (e) => (await ga("/api/music/connectors", e)).connectors ?? [], uu = (e, r, a) => Xn("/api/music/connectors/configure", { provider: e, credentials: r }, a), pu = (e, r) => Xn("/api/music/connectors/disconnect", { provider: e }, r), mu = async (e, r = 20, a) => {
  const o = new URLSearchParams({ q: e, limit: String(r) });
  return (await ga(`/api/music/search?${o.toString()}`, a)).results ?? [];
}, hu = (e, r = "tracks,albums,artists,playlists", a = 20, o) => {
  const n = new URLSearchParams({ q: e, types: r, provider: "auto", limit: String(a) });
  return ga(`/api/music/search2?${n.toString()}`, o);
}, Xi = (e, r) => {
  const a = new URLSearchParams({ videoId: e });
  return ga(`/api/music/stream?${a.toString()}`, r);
}, Dr = async (e, r) => {
  const a = await fetch(e, {
    ...r,
    headers: {
      ...r?.body ? { "Content-Type": "application/json" } : {},
      ...r?.headers ?? {}
    }
  }), o = await a.text();
  let n = null;
  try {
    n = o ? JSON.parse(o) : null;
  } catch {
    n = o;
  }
  if (!a.ok) {
    const l = typeof n == "object" && n && "error" in n ? String(n.error) : o || a.statusText;
    throw new Error(l);
  }
  return n;
}, vo = async () => Dr("/api/juli3ta/library/tracks"), Qi = async (e) => (await Dr(
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
)).track, gu = async (e) => {
  await Dr("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, yu = async () => (await Dr("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, Nr = "0.3.24", Oa = "application/x-juli3ta-track", wr = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", zo = (e) => e.source !== "youtube", Ra = (...e) => {
  const r = /* @__PURE__ */ new Map();
  for (const a of e)
    for (const o of a)
      r.has(o.id) || r.set(o.id, o);
  return Array.from(r.values()).sort((a, o) => o.createdAt - a.createdAt);
}, fu = (e) => zo(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), Ht = [
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
], bu = Ht.flatMap((e) => e.chips), vu = ["very_slow", "slow", "medium", "fast", "very_fast"], xu = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], wu = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], ku = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], Su = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], Tu = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], _u = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], Nu = ["narrow", "medium", "wide"], Cu = ["none", "gradual", "sudden"], Eu = ["low", "medium", "high"], Au = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], Mu = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], Lu = ["male", "female", "mixed", "other", "none"], zu = [
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
], Iu = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], Ru = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], Pu = [
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
], ju = [
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
], Du = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], re = (e) => e.replace(/_/g, " "), Uu = (e, r, a) => {
  const o = (l) => l.trim().replace(/^[-••\d.)(]+\s*/, "").trim(), n = (l, c) => o(l).split(/\s+/).slice(0, c).join(" ");
  if (e) {
    const l = e.split(`
`).map((c) => c.trim()).find((c) => c && !c.startsWith("[") && !c.startsWith("(") && c.split(/\s+/).length >= 3);
    if (l) {
      const c = n(l, 6).replace(/[,.!?;:—-]+$/, "").trim();
      if (c.length >= 3) return c;
    }
  }
  if (r.trim()) {
    const l = n(r, 6).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  if (a.trim()) {
    const l = n(a, 4).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  return "Untitled";
}, Ou = (e) => {
  if (!e) return "";
  const r = e.replace(/\.[a-z0-9]{2,5}$/i, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return r.length >= 3 ? r : "";
}, $u = (e) => {
  let a = e.replace(/\s+/g, " ").trim() || "Polished modern cover, clear vocals, tight rhythm, high-quality mix";
  if (a.length < 10 && (a = `${a}, style cover, polished music production`.replace(/^,\s*/, "")), a.length <= 300) return a;
  const o = a.slice(0, 300).replace(/\s+\S*$/, "").trim();
  return o.length >= 10 ? o : a.slice(0, 300);
}, Ir = (e) => {
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
    let c = l.join(" ");
    e.instrumentation.vocal_processing?.length && (c += ` with ${e.instrumentation.vocal_processing.map(re).join(" + ")}`), r.push(c);
  }
  e.instrumentation?.language_iso639_1 && r.push(`Language: ${e.instrumentation.language_iso639_1}`);
  const o = [];
  e.dynamics?.overall_dynamic_range && o.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && o.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && o.push("big drops"), o.length && r.push(o.join(", ")), e.mood?.primary_moods?.length && r.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && r.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && r.push(`For: ${e.mood.occasion_tags.map(re).join(", ")}`);
  const n = [];
  return e.context?.era_reference && n.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && n.push(`${re(e.context.cultural_region)} scene`), e.context?.intended_use?.length && n.push(`use: ${e.context.intended_use.map(re).join("/")}`), e.context?.explicit_lyrics && n.push("explicit lyrics"), n.length && r.push(n.join(", ")), r.join(". ");
}, Hu = [
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
], Zi = "tytus.music-creator.gallery", en = "tytus.music-creator", xo = "gallery", zt = 3500, tn = 1e3, Fu = 2e3, St = 30, an = 45, Bu = 1, Wu = 1, We = (e) => {
  const r = Math.floor(e / 1e3), a = Math.floor(r / 60), o = r % 60;
  return `${a}:${o.toString().padStart(2, "0")}`;
}, Ba = (e) => {
  if (!e) return "";
  const r = "base64,", a = e.indexOf(r);
  return (a >= 0 ? e.slice(a + r.length) : e).replace(/\s+/g, "");
}, qu = (e) => {
  if (!e) return null;
  const r = "base64,", a = e.indexOf(r);
  if (a >= 0) return Ba(e.slice(a + r.length)) || null;
  const o = Ba(e);
  return /^[A-Za-z0-9+/=]+$/.test(o) ? o : null;
}, Ju = (e, r = "audio/wav") => {
  const a = Ba(e), o = atob(a), n = new Uint8Array(o.length);
  for (let l = 0; l < o.length; l++) n[l] = o.charCodeAt(l);
  return new Blob([n], { type: r });
}, Gu = (e) => {
  const r = new Uint8Array(e), a = 32768;
  let o = "";
  for (let n = 0; n < r.length; n += a) {
    const l = r.subarray(n, n + a);
    o += String.fromCharCode(...l);
  }
  return btoa(o);
}, Rr = (e) => {
  try {
    const r = Ba(e), a = r.endsWith("==") ? 2 : r.endsWith("=") ? 1 : 0, o = Math.max(0, Math.floor(r.length * 3 / 4) - a), n = atob(r.slice(0, Math.min(r.length, 4096)));
    if (n.length < 44 || n.slice(0, 4) !== "RIFF" || n.slice(8, 12) !== "WAVE") return null;
    const l = new Uint8Array(n.length);
    for (let m = 0; m < n.length; m++) l[m] = n.charCodeAt(m);
    const c = new DataView(l.buffer);
    let h = 12, g = 0, p = 0, x = 0;
    for (; h + 8 <= l.length; ) {
      const m = String.fromCharCode(l[h], l[h + 1], l[h + 2], l[h + 3]), y = c.getUint32(h + 4, !0), w = h + 8;
      if (m === "fmt " && w + 16 <= l.length)
        g = c.getUint32(w + 4, !0), p = c.getUint16(w + 12, !0);
      else if (m === "data") {
        x = y === 4294967295 || w + y > o ? Math.max(0, o - w) : y;
        break;
      }
      h = w + y + y % 2;
    }
    return !g || !p || !x ? null : x / (g * p) * 1e3;
  } catch {
    return null;
  }
}, Bo = (e) => e.source === "youtube" && !!e.externalId, Ae = (e) => !!e.audioDataUrl || Bo(e), Ur = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? Pr(e.externalId) : ""), Pr = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", Qn = (e, r) => {
  const a = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = a.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (r || "").trim(), song: a || "Untitled" };
}, Vu = /* @__PURE__ */ new Set([
  "",
  "-",
  "—",
  "youtube",
  "you tube",
  "youtube music",
  "streamed audio",
  "streamed reference",
  "remote stream",
  "remote_stream",
  "juli3ta"
]), Cr = (e) => {
  const r = (e ?? "").trim();
  return r ? r.split(/[,;\n]/).map((o) => o.trim()).filter((o) => !Vu.has(o.toLowerCase().replace(/\s+/g, " "))).join(", ") : "";
}, Yu = (e) => Cr(e.styleTags), Ku = (e) => {
  const r = (e ?? "").replace(/\s*-\s*Topic\s*$/i, "").replace(/\s+VEVO\s*$/i, "").replace(/\s+(official|music|records|recordings|channel)\s*$/i, "").replace(/\s+/g, " ").trim();
  if (!r) return "";
  const a = r.toLowerCase();
  return a === "unknown" || a === "music" || a === "youtube" || a.includes("playlist") || a.includes("collection") || a.includes("mixes") ? "" : r;
}, Xu = (e, r) => {
  const a = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/), o = r.match(/^(.{2,80}?)\s+(?:greatest hits|best of|full album|playlist|discography|collection)\b/i), n = r.match(/^best of\s+(.{2,80}?)(?:\s+(?:greatest hits|full album|playlist|collection)\b|$)/i), l = [
    a?.[1],
    o?.[1],
    n?.[1],
    e.artist,
    e.album
  ];
  for (const c of l) {
    const h = Ku(c);
    if (h && h.toLowerCase() !== r.toLowerCase()) return h;
  }
  return "";
}, Qu = (e, r, a) => {
  if (e.source !== "youtube") return null;
  const o = r.trim() || e.title.trim() || "this song", n = Xu(e, o);
  return {
    theme: n ? a("musiccreator.restyle.metadataTheme.withArtist", { title: o, artist: n }) : a("musiccreator.restyle.metadataTheme.noArtist", { title: o }),
    style: n ? a("musiccreator.restyle.metadataStyle.withArtist", { artist: n }) : a("musiccreator.restyle.metadataStyle.noArtist")
  };
}, Ft = (e) => `youtube:${e}`, Zu = async () => {
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
    const r = localStorage.getItem(Zi);
    if (r) {
      const a = JSON.parse(r);
      if (Array.isArray(a))
        for (const o of a)
          try {
            await zr(e(o));
          } catch {
          }
      localStorage.removeItem(Zi);
    }
  } catch (r) {
    console.warn("Legacy localStorage gallery migration failed:", r);
  }
  try {
    const r = await new Promise((a) => {
      const o = indexedDB.open(en);
      o.onsuccess = () => {
        const n = o.result;
        if (!n.objectStoreNames.contains(xo)) {
          n.close(), a([]);
          return;
        }
        const c = n.transaction(xo, "readonly").objectStore(xo).getAll();
        c.onsuccess = () => {
          n.close(), a(c.result ?? []);
        }, c.onerror = () => {
          n.close(), a([]);
        };
      }, o.onerror = () => a([]);
    });
    for (const a of r)
      try {
        await zr(e(a));
      } catch {
      }
    r.length > 0 && indexedDB.deleteDatabase(en);
  } catch (r) {
    console.warn("Legacy IDB gallery migration failed:", r);
  }
}, Ua = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, ep = (e, r) => Hd(r).map((a) => ({
  ...a,
  models: Ua
})), tp = (e) => {
  const r = (y, w) => {
    const v = y.map((_) => _.toLowerCase());
    for (const _ of w) {
      const C = v.findIndex((N) => _.test(N));
      if (C >= 0) return y[C];
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
  ]), n = new Set([a, o].filter((y) => !!y)), l = e.filter((y) => !n.has(y)), c = r(l, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), g = (y) => /music|cover|tts|speech|audio|stt|transcribe|whisper|embed|image|vision|diffusion|dall-?e|flux|sdxl|rerank/i.test(y), p = e.filter((y) => !g(y)), x = r(p, [
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
  ]), m = r(e, [
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
  return { music: c, cover: a, lyrics: o, lyricsBackup: x, image: m, allIds: e };
}, ap = 6e4, wo = /* @__PURE__ */ new Map(), ma = (e, r, a) => {
  const o = new Headers(a.headers ?? {}), n = r.startsWith("/") ? r : `/${r}`;
  if (e.proxyPodId) {
    o.delete("Authorization");
    const l = `/api/pods/${encodeURIComponent(e.proxyPodId)}/proxy/v1${n}`;
    return fetch(l, { ...a, headers: o });
  }
  return e.apiKey && o.set("Authorization", `Bearer ${e.apiKey}`), fetch(`${e.url}${n}`, { ...a, headers: o });
}, rp = async (e, r) => {
  const a = wo.get(e.url);
  if (a !== void 0) {
    if (Date.now() < a)
      return { ok: !1, models: Ua };
    wo.delete(e.url);
  }
  const o = ha(r, ip);
  try {
    const n = await ma(e, "/models", {
      method: "GET",
      signal: o.signal,
      headers: { Accept: "application/json" }
    });
    if (n.status >= 500) return { ok: !1, models: Ua };
    if (!n.ok) return { ok: !0, models: Ua };
    const c = ((await n.json()).data ?? []).map((h) => h?.id).filter((h) => typeof h == "string" && h.length > 0);
    return { ok: !0, models: tp(c) };
  } catch (n) {
    return (n?.name ?? "") === "TypeError" && wo.set(e.url, Date.now() + ap), { ok: !1, models: Ua };
  } finally {
    o.dispose();
  }
}, op = async (e, r) => (await Promise.all(
  e.map(async (o) => {
    if (r.aborted) return null;
    const { ok: n, models: l } = await rp(o, r);
    return n ? { ...o, models: l } : null;
  })
)).filter((o) => o !== null), kr = 6e4, rn = 42e4, ip = 8e3, ha = (e, r) => {
  const a = AbortSignal.any, o = AbortSignal.timeout;
  if (a && o) {
    const c = o(r);
    return { signal: e ? a([e, c]) : c, dispose: () => {
    } };
  }
  const n = new AbortController(), l = setTimeout(() => {
    n.signal.aborted || n.abort(new DOMException("Timeout", "TimeoutError"));
  }, r);
  return e && (e.aborted ? n.abort(e.reason) : e.addEventListener("abort", () => n.abort(e.reason), { once: !0 })), { signal: n.signal, dispose: () => clearTimeout(l) };
}, np = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]), sp = /* @__PURE__ */ new Set([402, 425, 429]);
class Te extends Error {
  status;
  body;
  constructor(r, a, o) {
    super(o ?? `HTTP ${r}: ${a.slice(0, 200)}`), this.name = "GatewayError", this.status = r, this.body = a;
  }
}
function Zn(e) {
  const r = e.indexOf("{");
  if (r === -1) return null;
  let a = 0, o = !1, n = !1;
  for (let l = r; l < e.length; l++) {
    const c = e[l];
    if (o) {
      if (n) {
        n = !1;
        continue;
      }
      if (c === "\\") {
        n = !0;
        continue;
      }
      c === '"' && (o = !1);
      continue;
    }
    if (c === '"') {
      o = !0;
      continue;
    }
    if (c === "{") a++;
    else if (c === "}" && (a--, a === 0))
      return e.slice(r, l + 1);
  }
  return null;
}
const Or = async (e, r, a, o = np) => {
  if (e.length === 0)
    throw new Error(`No ${a}-capable models available on this endpoint.`);
  let n = null;
  for (const h of e)
    try {
      return await r(h);
    } catch (g) {
      if (g.name === "AbortError" || g.name === "TimeoutError")
        throw g;
      if (g instanceof TypeError) {
        n = g;
        continue;
      }
      if (g instanceof Te && o.has(g.status)) {
        n = g;
        continue;
      }
      throw g;
    }
  const l = n?.message ?? "unknown", c = n instanceof Te ? n.status === 429 ? "Wait for the rate limit to reset, or pick a different endpoint in Settings." : [408, 500, 502, 503, 504].includes(n.status) ? "Remote AIL/provider timed out or returned an empty gateway response. Retry once, then switch endpoint in Settings if it repeats." : n.status === 402 ? "That provider/model is out of credits; pick a different endpoint in Settings." : "Pick a different endpoint in Settings or check the provider configuration." : n instanceof TypeError ? "Network/CORS failed before the gateway answered; check the selected endpoint in Settings." : "Pick a different endpoint in Settings.";
  throw new Error(`All ${a} models exhausted. Last error: ${l}. ${c}`);
}, lp = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), on = async (e, r, a) => {
  let o = 0, n = "";
  const l = ha(a, kr);
  try {
    const y = { prompt: r, mode: "write_full_song" };
    e.models.lyrics && (y.model = e.models.lyrics);
    const w = await ma(e, "/music/lyrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(y),
      signal: l.signal
    });
    if (w.ok) {
      const v = await w.json();
      if (!v || typeof v.lyrics != "string" || v.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...v, usedFallback: !1 };
    }
    o = w.status, n = await w.text().catch(() => "");
  } catch (y) {
    const w = y.name;
    if (w === "AbortError" && a?.aborted) throw y;
    if (w === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${kr / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", y);
  } finally {
    l.dispose();
  }
  if (o !== 0 && !lp.has(o)) {
    const y = n.length > 300 ? `${n.slice(0, 300)}…` : n;
    throw new Error(`Lyrics HTTP ${o}: ${y || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, n);
  const c = (y) => !/music|cover|tts|speech|audio|stt|transcribe|whisper|embed|image|vision|diffusion|dall-?e|flux|sdxl|rerank/i.test(y), h = /* @__PURE__ */ new Set(), g = [], p = (y) => {
    y && c(y) && !h.has(y) && (h.add(y), g.push(y));
  };
  if (p(e.models.lyricsBackup), e.models.allIds.filter(c).forEach(p), g.length === 0)
    throw new Error(
      `Lyrics endpoint failed and no chat backup model is available for ${e.label}. Pick one in JULI3TA Settings.`
    );
  const x = `You are a songwriter. Given a theme, write a complete singable song.
Respond with VALID JSON ONLY in exactly this shape, nothing else:
{
  "song_title": "Short catchy title",
  "style_tags": "comma, separated, style, hints",
  "lyrics": "[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Bridge]\\nTwo lines\\n\\n[Outro]\\nTwo lines"
}`, m = await Or(g, async (y) => {
    const w = {
      model: y,
      messages: [
        { role: "system", content: x },
        { role: "user", content: `Theme: ${r}` }
      ],
      temperature: 0.85
    }, v = async (_) => {
      const C = ha(a, kr);
      let N;
      try {
        N = await ma(e, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            _ ? { ...w, response_format: { type: "json_object" } } : w
          ),
          signal: C.signal
        });
      } catch (S) {
        throw S.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${kr / 1e3}s.`) : S;
      } finally {
        C.dispose();
      }
      if (!N.ok) {
        const S = await N.text().catch(() => "");
        throw new Te(N.status, S, `Lyrics fallback HTTP ${N.status}: ${S.slice(0, 300)}`);
      }
      const k = (await N.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!k)
        throw new Te(502, "", "Lyrics fallback returned empty content");
      const H = k.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), I = Zn(H) ?? H;
      let K;
      try {
        K = JSON.parse(I);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", k.slice(0, 400)), new Te(502, k.slice(0, 200), `Lyrics fallback returned non-JSON content: ${k.slice(0, 200)}`);
      }
      if (!K.lyrics)
        throw new Te(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return K;
    };
    try {
      return await v(!0);
    } catch (_) {
      if (_ instanceof Te && _.status === 400 && /response_format|json_object/i.test(_.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", y), await v(!1);
      throw _;
    }
  }, "chat-lyrics");
  return {
    song_title: m.song_title || "Untitled",
    style_tags: m.style_tags || "",
    lyrics: m.lyrics,
    usedFallback: !0
  };
}, cp = async (e, r, a) => {
  const o = !!r.refAudioBase64, n = (p) => /music/i.test(p) && !/cover|lyric/i.test(p), l = (p) => /cover/i.test(p), c = /* @__PURE__ */ new Set(), h = (p, x) => {
    x && !c.has(x) && (c.add(x), p.push(x));
  }, g = [];
  if (o ? (h(g, e.models.cover), e.models.allIds.filter(l).forEach((p) => h(g, p))) : (h(g, e.models.music), e.models.allIds.filter(n).forEach((p) => h(g, p))), g.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return Or(g, async (p) => {
    const x = {
      model: p
    }, m = r.lyrics?.trim() ?? "";
    (!o || m) && (x.lyrics = m), r.prompt && (x.prompt = r.prompt), r.instrumental && (x.instrumental = !0);
    const y = !o;
    if (y && (x.stream = !0), o) {
      const N = Ba(r.refAudioBase64 ?? "");
      x.audio_base64 = N;
      const P = Rr(N), k = P !== null ? P / 1e3 : r.refAudioDurationSec ?? null;
      if (k !== null && k < St)
        throw new Error(`Reference sample is only ${k.toFixed(1)} s. MiniMax cover rejects short song references; pick a longer song or re-load a full ~60 s source sample before Restyle.`);
      console.info("[Juli3ta] Sending music-cover reference:", {
        modelId: p,
        refDurationSec: k !== null ? Number(k.toFixed(2)) : null,
        refBytesApprox: Math.max(0, Math.floor(N.length * 3 / 4)),
        prompt: r.prompt ?? "",
        lyricsProvided: !!m
      });
    }
    const w = ha(a, rn);
    let v;
    try {
      v = await ma(e, "/music/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(x),
        signal: w.signal
      });
    } catch (N) {
      throw N.name === "TimeoutError" ? new Error(`Music generation timed out after ${rn / 1e3}s. Remote music can take several minutes; retry once or switch endpoint in Settings.`) : N;
    } finally {
      w.dispose();
    }
    if (!v.ok) {
      const N = await v.text().catch(() => "");
      throw o && v.status === 413 ? new Te(
        v.status,
        N,
        "Reference audio was too large for the gateway. JULI3TA now makes compact cover-ready reference samples; clear and re-pick the reference audio, then retry Restyle."
      ) : new Te(v.status, N, `Music HTTP ${v.status}: ${N.slice(0, 300)}`);
    }
    const _ = v.headers.get("content-type")?.toLowerCase() ?? "";
    if (y && (_.includes("audio/") || _.includes("application/octet-stream"))) {
      const N = await v.arrayBuffer();
      if (N.byteLength < 100)
        throw new Te(502, "", "Music stream returned no audio data — gateway accepted the call but upstream returned nothing.");
      return {
        data: {
          audio: Gu(N),
          duration_ms: 0,
          bitrate: 0,
          sample_rate: 0,
          channels: 0,
          format: "mp3",
          size_bytes: N.byteLength
        },
        model: p,
        trace_id: ""
      };
    }
    const C = await v.json();
    if (!C?.data?.audio || typeof C.data.audio != "string" || C.data.audio.length < 100)
      throw new Te(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return C;
  }, o ? "music-cover" : "music", sp);
}, nn = 6e4, Er = (e, r, a) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", n = a.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), l = r.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", c = [
    `Square album cover art for a song titled "${o}".`
  ];
  return n && c.push(`Genre: ${n}.`), l && c.push(`Mood: ${l}.`), c.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), c.join(" ");
}, Io = async (e, r, a) => {
  const o = (h) => /image|diffusion|dall-?e|flux|sdxl/i.test(h), n = /* @__PURE__ */ new Set(), l = [], c = (h) => {
    h && !n.has(h) && (n.add(h), l.push(h));
  };
  if (c(e.models.image), e.models.allIds.filter(o).forEach(c), l.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return Or(l, async (h) => {
    const g = ha(a, nn), x = /minimax|ail-image|image-01/i.test(h) ? {
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
      m = await ma(e, "/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(x),
        signal: g.signal
      });
    } catch (k) {
      throw k.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${nn / 1e3}s.`) : k;
    } finally {
      g.dispose();
    }
    if (!m.ok) {
      const k = await m.text().catch(() => "");
      throw new Te(m.status, k, `Cover-art HTTP ${m.status}: ${k.slice(0, 200)}`);
    }
    const y = await m.json(), w = y.base_resp;
    if (w && typeof w.status_code == "number" && w.status_code !== 0)
      throw new Te(502, w.status_msg ?? "", `Cover-art ${h} rejected: ${w.status_msg ?? "status_code=" + w.status_code}`);
    const v = (k) => typeof k != "string" || !k.length ? null : k.startsWith("data:") ? k : `data:image/png;base64,${k}`, _ = (k) => typeof k == "string" && /^https?:\/\//i.test(k) ? k : null, C = y.data;
    if (C && typeof C == "object" && !Array.isArray(C)) {
      const k = C, H = k.image_base64;
      if (Array.isArray(H) && H[0]) {
        const S = v(H[0]);
        if (S) return S;
      }
      const I = v(k.image) ?? v(k.b64_json) ?? _(k.url);
      if (I) return I;
      const K = k.image_url ?? k.image_urls;
      if (Array.isArray(K) && K[0]) {
        const S = _(K[0]);
        if (S) return S;
      }
    }
    if (Array.isArray(C) && C[0]) {
      const k = C[0], H = v(k.b64_json) ?? v(k.image_base64) ?? _(k.url);
      if (H) return H;
      throw new Te(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const N = v(y.image) ?? v(y.b64_json);
    if (N) return N;
    const P = y.images;
    if (Array.isArray(P) && P[0]) {
      const k = P[0], H = v(k.b64_json) ?? v(k.image) ?? _(k.url);
      if (H) return H;
    }
    throw new Te(502, "", `Cover-art response shape not recognised: ${JSON.stringify(y).slice(0, 200)}`);
  }, "image");
}, sn = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], ln = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
], ko = (e) => Bo(e) ? "metadata" : "auto";
function dp(e, r, a) {
  const [o, n] = T(() => {
    let S = "off";
    try {
      const z = localStorage.getItem("juli3ta:repeatMode");
      (z === "off" || z === "all" || z === "one") && (S = z);
    } catch {
    }
    let L = !1;
    try {
      L = localStorage.getItem("juli3ta:shuffle") === "1";
    } catch {
    }
    let R = 1;
    try {
      const z = localStorage.getItem("juli3ta:volume");
      if (z !== null) {
        const he = Number.parseFloat(z);
        Number.isFinite(he) && (R = Math.max(0, Math.min(1, he)));
      }
    } catch {
    }
    let B = 1;
    try {
      const z = localStorage.getItem("juli3ta:playbackRate");
      if (z !== null) {
        const he = Number.parseFloat(z);
        Number.isFinite(he) && (B = Math.max(0.25, Math.min(4, he)));
      }
    } catch {
    }
    return { trackId: null, playing: !1, loadingTrackId: null, positionMs: 0, durationMs: 0, volume: R, repeatMode: S, shuffle: L, playbackRate: B, sleepTimerEndsAt: null };
  }), l = te(null), c = te(0), h = te([]), g = te(!1), p = A((S) => {
    n((L) => ({ ...L, repeatMode: S }));
    try {
      localStorage.setItem("juli3ta:repeatMode", S);
    } catch {
    }
  }, []), x = A((S) => {
    n((L) => ({ ...L, shuffle: S }));
    try {
      localStorage.setItem("juli3ta:shuffle", S ? "1" : "0");
    } catch {
    }
  }, []), m = A((S) => {
    const L = Math.max(0.25, Math.min(4, S));
    r.current && (r.current.playbackRate = L), n((R) => ({ ...R, playbackRate: L }));
    try {
      localStorage.setItem("juli3ta:playbackRate", String(L));
    } catch {
    }
  }, [r]), y = A((S) => {
    if (S === null || S <= 0) {
      n((B) => ({ ...B, sleepTimerEndsAt: null }));
      return;
    }
    const L = Math.min(S, 1440), R = Date.now() + L * 6e4;
    n((B) => ({ ...B, sleepTimerEndsAt: R }));
  }, []), w = A((S) => {
    (async () => {
      const L = ++c.current;
      n((z) => ({
        ...z,
        trackId: S.id,
        playing: !1,
        loadingTrackId: Ae(S) ? S.id : null,
        positionMs: 0,
        durationMs: S.durationMs || 0
      }));
      const R = S.audioDataUrl || await a?.(S);
      if (L !== c.current) return;
      if (!R) {
        n((z) => ({ ...z, loadingTrackId: null }));
        return;
      }
      const B = r.current;
      if (L === c.current) {
        if (!B) {
          n((z) => ({ ...z, loadingTrackId: null }));
          return;
        }
        o.trackId !== S.id || B.src !== R ? (B.src = R, B.preload = ko(S), B.load(), B.pause(), n((z) => ({
          ...z,
          trackId: S.id,
          playing: !1,
          loadingTrackId: null,
          positionMs: 0,
          durationMs: S.durationMs || 0
        }))) : n((z) => ({ ...z, loadingTrackId: null }));
      }
    })();
  }, [o.trackId, r, a]), v = A((S) => {
    (async () => {
      const L = ++c.current;
      if (l.current = null, o.trackId && o.trackId !== S.id && !g.current) {
        const z = h.current;
        z[z.length - 1] !== o.trackId && (z.push(o.trackId), z.length > 50 && z.splice(0, z.length - 50));
      }
      g.current = !1, n((z) => ({
        ...z,
        trackId: S.id,
        loadingTrackId: S.id,
        durationMs: S.durationMs || z.durationMs
      }));
      const R = S.audioDataUrl || await a?.(S);
      if (L !== c.current) return;
      if (!R) {
        n((z) => ({ ...z, loadingTrackId: null, playing: !1 }));
        return;
      }
      const B = r.current;
      if (L === c.current) {
        if (!B) {
          n((z) => ({ ...z, loadingTrackId: null, playing: !1 }));
          return;
        }
        (o.trackId !== S.id || B.src !== R) && (B.src = R, B.preload = ko(S), n((z) => ({ ...z, trackId: S.id, positionMs: 0, durationMs: S.durationMs || 0 }))), B.play().then(() => {
          L === c.current && n((z) => ({ ...z, loadingTrackId: null, playing: !0 }));
        }).catch(() => {
          L === c.current && n((z) => ({ ...z, loadingTrackId: null, playing: !1 }));
        });
      }
    })();
  }, [o.trackId, r, a]), _ = A(() => {
    c.current += 1, r.current?.pause(), n((S) => ({ ...S, playing: !1, loadingTrackId: null }));
  }, [r]), C = A((S) => {
    if (S) {
      if (o.loadingTrackId === S.id) return;
      o.trackId === S.id && o.playing ? _() : v(S);
      return;
    }
    if (o.loadingTrackId) return;
    if (o.playing) {
      _();
      return;
    }
    const L = o.trackId ? e.find((R) => R.id === o.trackId) : null;
    L ? v(L) : r.current?.src && r.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, v, _, r]), N = A((S) => {
    const L = r.current;
    L && (L.currentTime = Math.max(0, S / 1e3));
  }, [r]), P = A((S) => {
    const L = Math.max(0, Math.min(1, S));
    r.current && (r.current.volume = L), n((R) => ({ ...R, volume: L }));
    try {
      localStorage.setItem("juli3ta:volume", String(L));
    } catch {
    }
  }, [r]);
  W(() => {
    r.current && (r.current.volume = o.volume);
  }, []), W(() => {
    r.current && (r.current.playbackRate = o.playbackRate);
  }, [o.playbackRate, o.trackId, r]), W(() => {
    if (o.sleepTimerEndsAt === null) return;
    const S = o.sleepTimerEndsAt - Date.now();
    if (S <= 0) {
      r.current?.pause(), n((R) => ({ ...R, sleepTimerEndsAt: null, playing: !1 }));
      return;
    }
    const L = window.setTimeout(() => {
      r.current?.pause(), n((R) => ({ ...R, sleepTimerEndsAt: null, playing: !1 }));
    }, S);
    return () => window.clearTimeout(L);
  }, [o.sleepTimerEndsAt, r]);
  const k = be(() => e.filter(Ae), [e]), H = A(() => {
    if (k.length === 0) return null;
    if (k.length === 1) return k[0];
    const S = k.filter((L) => L.id !== o.trackId);
    return S[Math.floor(Math.random() * S.length)];
  }, [k, o.trackId]), I = A(() => {
    if (!o.trackId || k.length === 0) return;
    if (o.shuffle) {
      const R = H();
      R && v(R);
      return;
    }
    const S = k.findIndex((R) => R.id === o.trackId);
    if (S < 0) return;
    const L = k[(S + 1) % k.length];
    L && v(L);
  }, [o.trackId, o.shuffle, k, v, H]), K = A(() => {
    if (!o.trackId || k.length === 0) return;
    if (o.shuffle) {
      const R = h.current;
      for (; R.length > 0; ) {
        const z = R.pop();
        if (!z || z === o.trackId) continue;
        const he = k.find((O) => O.id === z);
        if (he) {
          g.current = !0, v(he);
          return;
        }
      }
      const B = H();
      B && v(B);
      return;
    }
    const S = k.findIndex((R) => R.id === o.trackId);
    if (S < 0) return;
    const L = k[(S - 1 + k.length) % k.length];
    L && v(L);
  }, [o.trackId, o.shuffle, k, v, H]);
  return W(() => {
    const S = r.current;
    if (!S) return;
    const L = () => n((q) => ({ ...q, positionMs: S.currentTime * 1e3 })), R = () => n((q) => ({
      ...q,
      durationMs: Number.isFinite(S.duration) ? S.duration * 1e3 : q.durationMs
    })), B = () => n((q) => ({ ...q, playing: !0, loadingTrackId: null })), z = () => n((q) => ({ ...q, playing: !1, loadingTrackId: null })), he = () => n((q) => ({ ...q, loadingTrackId: null })), O = () => {
      const q = o.trackId ? k.find((ee) => ee.id === o.trackId) : null;
      if (!q || q.audioDataUrl || !a || l.current === q.id) {
        n((ee) => ({ ...ee, playing: !1, loadingTrackId: null }));
        return;
      }
      l.current = q.id, n((ee) => ({ ...ee, loadingTrackId: q.id, playing: !1 })), a(q, { force: !0 }).then((ee) => {
        if (!ee) throw new Error("No refreshed stream URL");
        return S.src = ee, S.preload = ko(q), S.play();
      }).then(() => n((ee) => ({ ...ee, playing: !0, loadingTrackId: null }))).catch(() => n((ee) => ({ ...ee, playing: !1, loadingTrackId: null })));
    }, de = () => {
      if (o.repeatMode === "one" && o.trackId) {
        const q = k.find((ee) => ee.id === o.trackId);
        if (q) {
          v(q);
          return;
        }
      }
      if (o.shuffle && k.length >= 1)
        if (k.length === 1) {
          if (o.repeatMode === "all") {
            v(k[0]);
            return;
          }
        } else {
          const q = k.filter((It) => It.id !== o.trackId), ee = q[Math.floor(Math.random() * q.length)];
          if (ee) {
            v(ee);
            return;
          }
        }
      if (k.length >= 2) {
        const q = k.findIndex((ee) => ee.id === o.trackId);
        if (q >= 0 && q + 1 < k.length) {
          v(k[q + 1]);
          return;
        }
        if (q >= 0 && o.repeatMode === "all") {
          v(k[0]);
          return;
        }
      }
      n((q) => ({ ...q, playing: !1, positionMs: 0 }));
    };
    return S.addEventListener("timeupdate", L), S.addEventListener("loadedmetadata", R), S.addEventListener("play", B), S.addEventListener("pause", z), S.addEventListener("canplay", he), S.addEventListener("error", O), S.addEventListener("ended", de), () => {
      S.removeEventListener("timeupdate", L), S.removeEventListener("loadedmetadata", R), S.removeEventListener("play", B), S.removeEventListener("pause", z), S.removeEventListener("canplay", he), S.removeEventListener("error", O), S.removeEventListener("ended", de);
    };
  }, [k, o.trackId, o.repeatMode, o.shuffle, v, r, a]), { state: o, queue: e, play: v, pause: _, toggle: C, select: w, seek: N, setVolume: P, setRepeatMode: p, setShuffle: x, setPlaybackRate: m, setSleepTimer: y, next: I, prev: K };
}
function cn({
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
function Sr({
  label: e,
  tooltip: r,
  onClick: a,
  busy: o,
  disabled: n
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      onClick: a,
      disabled: n,
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
        o ? /* @__PURE__ */ t(oe, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(ut, { size: 10 }),
        o ? "…" : e
      ]
    }
  );
}
function pt({
  track: e,
  size: r,
  iconSize: a,
  radius: o
}) {
  const n = Ur(e);
  return n ? /* @__PURE__ */ t(
    "img",
    {
      src: n,
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
function up({ player: e, allTracks: r }) {
  const { state: a, toggle: o, next: n, prev: l, seek: c, setVolume: h, setPlaybackRate: g, setSleepTimer: p, queue: x } = e, m = x.find((N) => N.id === a.trackId) ?? r.find((N) => N.id === a.trackId) ?? null;
  if (!m) return null;
  const y = a.durationMs > 0 ? a.durationMs : m.durationMs, w = Math.min(a.positionMs, y || 0), v = y > 0 ? w / y * 100 : 0, _ = a.loadingTrackId === m.id, C = (N) => {
    if (!y) return;
    const P = N.currentTarget.getBoundingClientRect(), k = (N.clientX - P.left) / P.width;
    c(Math.max(0, Math.min(1, k)) * y);
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
        /* @__PURE__ */ t(pt, { track: m, size: 40, iconSize: 18, radius: 6 }),
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
              children: /* @__PURE__ */ t(Po, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: l,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(Ne, { size: 12, style: { transform: "rotate(180deg)" } })
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
              children: _ ? /* @__PURE__ */ t(oe, { size: 13, className: "animate-spin", style: { color: "white" } }) : a.playing ? /* @__PURE__ */ t(_t, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(Ne, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: n,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(Ne, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                const N = a.repeatMode, P = N === "off" ? "all" : N === "all" ? "one" : "off";
                e.setRepeatMode(P);
              },
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: a.repeatMode === "off" ? "var(--text-secondary)" : "var(--accent-primary)"
              },
              title: a.repeatMode === "off" ? "Repeat off" : a.repeatMode === "all" ? "Repeating queue" : "Repeating this track",
              children: a.repeatMode === "one" ? /* @__PURE__ */ t(_n, { size: 12 }) : /* @__PURE__ */ t(gc, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: We(w)
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            onClick: C,
            className: "flex-1 rounded-full overflow-hidden cursor-pointer",
            style: { height: 4, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${v}%`,
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
            children: We(y)
          }
        ),
        /* @__PURE__ */ t(mp, { rate: a.playbackRate, setRate: g }),
        /* @__PURE__ */ t(pp, { endsAt: a.sleepTimerEndsAt, setSleepTimer: p }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(hp, { volume: a.volume, setVolume: h }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
              value: a.volume,
              onChange: (N) => h(Number(N.target.value)),
              style: { width: "100%", accentColor: "var(--accent-primary)" }
            }
          )
        ] })
      ]
    }
  );
}
const dn = [null, 5, 15, 30, 45, 60];
function pp({
  endsAt: e,
  setSleepTimer: r
}) {
  const [, a] = T(() => Date.now());
  W(() => {
    if (e === null) return;
    const p = window.setInterval(() => a(Date.now()), 1e3);
    return () => window.clearInterval(p);
  }, [e]);
  const o = e !== null, n = o ? Math.max(0, Math.ceil((e - Date.now()) / 6e4)) : 0, l = () => {
    if (!o) {
      r(dn[1]);
      return;
    }
    const p = dn.find(
      (x) => x !== null && x > n
    ) ?? null;
    r(p);
  }, c = (p) => {
    p.preventDefault(), o && r(null);
  }, h = o ? n > 0 ? `${n}m` : "<1m" : "", g = o ? `Sleep timer: pauses in ~${n}m. Click to extend, right-click to cancel.` : "Sleep timer (click to start, off by default)";
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: l,
      onContextMenu: c,
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
        /* @__PURE__ */ t(rc, { size: 11 }),
        h && /* @__PURE__ */ t("span", { children: h })
      ]
    }
  );
}
const So = [1, 1.25, 1.5, 2, 0.5, 0.75];
function mp({
  rate: e,
  setRate: r
}) {
  const a = Math.abs(e - 1) < 1e-3, o = () => {
    const c = So.findIndex((g) => Math.abs(g - e) < 1e-3), h = So[(c + 1) % So.length];
    r(h);
  }, n = (c) => {
    c.preventDefault(), a || r(1);
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
        color: a ? "var(--text-disabled)" : "var(--accent-primary)",
        border: `1px solid ${a ? "var(--border-subtle)" : "var(--accent-primary)"}`,
        background: a ? "transparent" : "var(--bg-hover)"
      },
      title: a ? "Playback speed (click to change)" : `Playback speed ${l} — click to cycle, right-click to reset`,
      children: l
    }
  );
}
function hp({
  volume: e,
  setVolume: r
}) {
  const a = te(e > 0 ? e : 1);
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
      children: o ? /* @__PURE__ */ t(Ac, { size: 12 }) : /* @__PURE__ */ t(Cc, { size: 12 })
    }
  );
}
const un = [
  { scope: "global", combo: "?", action: "Show this help" },
  { scope: "global", combo: "Esc", action: "Close modal / dismiss overlay" },
  { scope: "player", combo: "Space", action: "Play / Pause" },
  { scope: "player", combo: "←", action: "Seek back 5s" },
  { scope: "player", combo: "→", action: "Seek forward 5s" },
  { scope: "player", combo: "↑", action: "Volume up (10%)" },
  { scope: "player", combo: "↓", action: "Volume down (10%)" }
];
function gp({
  open: e,
  onClose: r
}) {
  if (!e) return null;
  const a = [
    { label: "Global", rows: un.filter((o) => o.scope === "global") },
    { label: "Player view", rows: un.filter((o) => o.scope === "player") }
  ];
  return Wa(
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
                      /* @__PURE__ */ t(Do, { name: "juli3ta:mark", size: 18 }),
                      /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: "Keyboard shortcuts" })
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: r,
                        className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                        style: { width: 28, height: 28, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(Se, { size: 14 })
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
function yp({ retrying: e, onRetry: r }) {
  const { t: a } = Vt();
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
            e ? /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(ut, { size: 14 }),
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
function Pa({ label: e, hint: r, counter: a, counterDanger: o, className: n, headerExtra: l, children: c }) {
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
    c,
    r && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 8 }, children: r })
  ] });
}
function fp({ onPick: e, disabled: r }) {
  const [a, o] = T(!1), [n, l] = T(Ht[0].label), [c, h] = T(""), g = c.trim().toLowerCase(), p = g.length > 0, x = be(() => {
    if (!p) return [];
    const m = [];
    for (const y of Ht)
      for (const w of y.chips)
        w.toLowerCase().includes(g) && m.push({ family: y.label, chip: w });
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: p ? `${x.length} match${x.length === 1 ? "" : "es"}` : `${bu.length} chips · click to add` })
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
                  /* @__PURE__ */ t(Tt, { size: 11, style: { color: "var(--text-disabled)" } }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: c,
                      onChange: (m) => h(m.target.value),
                      placeholder: "Search genres…",
                      className: "rounded-input bg-transparent outline-none",
                      style: { fontSize: 11, color: "var(--text-primary)", width: 140 }
                    }
                  ),
                  c && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => h(""),
                      className: "opacity-60 hover:opacity-100",
                      title: "Clear search",
                      children: /* @__PURE__ */ t(Se, { size: 11 })
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
        p ? x.length === 0 ? /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          c,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: x.map(({ family: m, chip: y }) => /* @__PURE__ */ t(
          To,
          {
            chip: y,
            family: m,
            onPick: e,
            disabled: r
          },
          `${m}::${y}`
        )) }) : /* @__PURE__ */ s(fe, { children: [
          !a && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: Ht.map((m) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => l(m.label),
              className: "px-2 rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                height: 24,
                fontSize: 10,
                fontWeight: n === m.label ? 600 : 500,
                color: n === m.label ? "var(--text-primary)" : "var(--text-secondary)",
                background: n === m.label ? "var(--bg-selected)" : "var(--bg-window)",
                border: `1px solid ${n === m.label ? "var(--accent-primary)" : "var(--border-subtle)"}`
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
              children: Ht.map((m) => /* @__PURE__ */ s("div", { children: [
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
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: m.chips.map((y) => /* @__PURE__ */ t(To, { chip: y, onPick: e, disabled: r }, y)) })
              ] }, m.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (Ht.find((m) => m.label === n) ?? Ht[0]).chips.map((m) => /* @__PURE__ */ t(To, { chip: m, onPick: e, disabled: r }, m)) })
        ] })
      ]
    }
  );
}
function To({
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
        /* @__PURE__ */ t(Co, { size: 10 }),
        e,
        r && /* @__PURE__ */ s("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          r
        ] })
      ]
    }
  );
}
function bp({ specs: e, onChange: r, disabled: a, onOptimize: o, optimizing: n }) {
  const [l, c] = T(!1), h = be(() => Ir(e), [e]), g = h.length > 0, p = A(
    (m, y) => {
      const w = { ...e };
      y === null ? delete w[m] : w[m] = y, r(w);
    },
    [e, r]
  ), x = () => r({});
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
              onClick: () => c((m) => !m),
              className: "flex items-center gap-2 flex-1 hover:opacity-90 text-left",
              style: { background: "transparent", border: "none", cursor: "pointer" },
              children: [
                /* @__PURE__ */ t(No, { size: 14, style: { color: "var(--text-secondary)" } }),
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
                  m.stopPropagation(), o(), l || c(!0);
                },
                disabled: a || n,
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
                  n ? /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(ut, { size: 11 }),
                  n ? "Optimizing…" : "AI Optimize"
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
                  ca(e),
                  " set"
                ]
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => c((m) => !m),
                className: "flex items-center justify-center",
                style: { background: "transparent", border: "none", cursor: "pointer", width: 18, height: 18 },
                children: /* @__PURE__ */ t(
                  vn,
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
                /* @__PURE__ */ s(ja, { label: "Structure", children: [
                  /* @__PURE__ */ t(ye, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    pn,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (m) => p("structure", { ...e.structure, tempo_bpm: m }),
                      min: 40,
                      max: 260,
                      placeholder: "120",
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Tempo class", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.tempo_class,
                      options: vu,
                      onChange: (m) => p("structure", { ...e.structure, tempo_class: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Time signature", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.time_signature,
                      options: xu,
                      onChange: (m) => p("structure", { ...e.structure, time_signature: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.rhythm_feel,
                      options: wu,
                      onChange: (m) => p("structure", { ...e.structure, rhythm_feel: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Groove", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.groove_pattern,
                      options: ku,
                      onChange: (m) => p("structure", { ...e.structure, groove_pattern: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Form", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.structure?.song_form,
                      options: Su,
                      onChange: (m) => p("structure", { ...e.structure, song_form: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Length (s)", children: /* @__PURE__ */ t(
                    pn,
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
                /* @__PURE__ */ s(ja, { label: "Key", children: [
                  /* @__PURE__ */ t(ye, { label: "Pitch", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.tonal?.key,
                      options: Tu,
                      onChange: (m) => p("tonal", { ...e.tonal, key: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Mode", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.tonal?.mode,
                      options: _u,
                      onChange: (m) => p("tonal", { ...e.tonal, mode: m }),
                      disabled: a
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(ja, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(ye, { label: "Range", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: Nu,
                      onChange: (m) => p("dynamics", { ...e.dynamics, overall_dynamic_range: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: Cu,
                      onChange: (m) => p("dynamics", { ...e.dynamics, crescendo_shape: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Big drops", children: /* @__PURE__ */ t(
                    mn,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (m) => p("dynamics", { ...e.dynamics, has_big_drops: m }),
                      disabled: a
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(ja, { label: "Context", children: [
                  /* @__PURE__ */ t(ye, { label: "Era", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.context?.era_reference,
                      options: Au,
                      onChange: (m) => p("context", { ...e.context, era_reference: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Region", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.context?.cultural_region,
                      options: Mu,
                      onChange: (m) => p("context", { ...e.context, cultural_region: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Intensity", children: /* @__PURE__ */ t(
                    Be,
                    {
                      value: e.mood?.emotional_intensity,
                      options: Eu,
                      onChange: (m) => p("mood", { ...e.mood, emotional_intensity: m }),
                      disabled: a
                    }
                  ) }),
                  /* @__PURE__ */ t(ye, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    mn,
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
                  sa,
                  {
                    label: "Primary instruments",
                    options: zu,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (m) => p("instrumentation", { ...e.instrumentation, primary_instruments: m.length ? m : void 0 }),
                    disabled: a
                  }
                ),
                /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ s(ja, { label: "Vocals", children: [
                    /* @__PURE__ */ t(ye, { label: "Has vocals", children: /* @__PURE__ */ t(
                      xp,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (m) => p("instrumentation", { ...e.instrumentation, has_vocals: m }),
                        disabled: a
                      }
                    ) }),
                    /* @__PURE__ */ t(ye, { label: "Gender", children: /* @__PURE__ */ t(
                      Be,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: Lu,
                        onChange: (m) => p("instrumentation", { ...e.instrumentation, vocal_gender: m }),
                        disabled: a
                      }
                    ) }),
                    /* @__PURE__ */ t(ye, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      vp,
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
                    sa,
                    {
                      label: "Vocal style",
                      options: Iu,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (m) => p("instrumentation", { ...e.instrumentation, vocal_style: m.length ? m : void 0 }),
                      disabled: a
                    }
                  ),
                  /* @__PURE__ */ t(
                    sa,
                    {
                      label: "Vocal processing",
                      options: Ru,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (m) => p("instrumentation", { ...e.instrumentation, vocal_processing: m.length ? m : void 0 }),
                      disabled: a
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  sa,
                  {
                    label: "Primary moods",
                    options: Pu,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (m) => p("mood", { ...e.mood, primary_moods: m.length ? m : void 0 }),
                    disabled: a
                  }
                ),
                /* @__PURE__ */ t(
                  sa,
                  {
                    label: "Occasion tags",
                    options: ju,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (m) => p("mood", { ...e.mood, occasion_tags: m.length ? m : void 0 }),
                    disabled: a
                  }
                ),
                /* @__PURE__ */ t(
                  sa,
                  {
                    label: "Intended use",
                    options: Du,
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
                  onClick: x,
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
function ja({ label: e, children: r }) {
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
function ye({ label: e, children: r }) {
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
      onChange: (n) => a(n.target.value === "" ? void 0 : n.target.value),
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
        r.map((n) => /* @__PURE__ */ t("option", { value: n, children: re(n) }, n))
      ]
    }
  );
}
function pn({
  value: e,
  onChange: r,
  min: a,
  max: o,
  placeholder: n,
  disabled: l
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "number",
      value: e ?? "",
      min: a,
      max: o,
      placeholder: n,
      className: "w-full px-2 py-1 rounded-md focus:outline-none disabled:opacity-50",
      onChange: (c) => {
        const h = c.target.value;
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
function vp({
  value: e,
  onChange: r,
  placeholder: a,
  maxLength: o,
  disabled: n
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "text",
      value: e,
      placeholder: a,
      maxLength: o,
      onChange: (l) => r(l.target.value),
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
function mn({
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
function xp({
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
function sa({
  label: e,
  options: r,
  selected: a,
  onChange: o,
  disabled: n
}) {
  const l = (c) => {
    a.includes(c) ? o(a.filter((h) => h !== c)) : o([...a, c]);
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
    /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: r.map((c) => {
      const h = a.includes(c);
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => l(c),
          disabled: n,
          className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-90 disabled:opacity-40",
          style: {
            fontSize: 10,
            background: h ? "var(--accent-primary)" : "var(--bg-titlebar)",
            color: h ? "white" : "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            cursor: n ? "not-allowed" : "pointer"
          },
          children: [
            h && /* @__PURE__ */ t(ua, { size: 10 }),
            re(c)
          ]
        },
        c
      );
    }) })
  ] });
}
function ca(e) {
  const { intent: r, ...a } = e;
  let o = 0;
  const n = (l) => {
    if (!(!l || typeof l != "object")) {
      for (const c of Object.values(l))
        if (c != null) {
          if (Array.isArray(c)) {
            c.length && (o += 1);
            continue;
          }
          if (typeof c == "object") {
            n(c);
            continue;
          }
          c === "" || c === !1 || (o += 1);
        }
    }
  };
  return n(a), o;
}
const wp = "#4ade80", kp = "#fbbf24", jr = (e) => e.models.music || e.models.cover ? wp : kp;
function Sp({ endpoint: e, endpoints: r, onSwitch: a }) {
  const [o, n] = T(!1), l = te(null), c = r.length > 1;
  W(() => {
    if (!o) return;
    const g = (p) => {
      l.current && !l.current.contains(p.target) && n(!1);
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
        onClick: () => c && n((g) => !g),
        className: "inline-flex items-center gap-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
        style: {
          height: 32,
          padding: "0 10px",
          background: "var(--bg-window)",
          border: "1px solid var(--border-subtle)",
          cursor: c ? "pointer" : "default"
        },
        title: `${e.url}${e.models.music ? ` · music: ${e.models.music}` : ""}`,
        children: [
          h(jr(e)),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap" }, children: e.label }),
          c && /* @__PURE__ */ t(
            vn,
            {
              size: 12,
              style: { color: "var(--text-secondary)", transform: o ? "rotate(180deg)" : "none", transition: "transform 0.15s" }
            }
          )
        ]
      }
    ),
    c && o && /* @__PURE__ */ t(
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
                a(g.podId), n(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: p ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: h(jr(g)) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: g.label }),
                    p && /* @__PURE__ */ t(ua, { size: 11, style: { color: "var(--accent-primary)" } })
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
const Ie = ({ icon: e, label: r, onClick: a, danger: o }) => /* @__PURE__ */ s(
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
    onMouseEnter: (n) => {
      n.currentTarget.style.background = "var(--bg-hover)";
    },
    onMouseLeave: (n) => {
      n.currentTarget.style.background = "transparent";
    },
    children: [
      /* @__PURE__ */ t("span", { className: "shrink-0 opacity-80", children: e }),
      /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", style: { fontSize: 12 }, children: r })
    ]
  }
);
function Tp({ tracks: e, player: r, onLoad: a, onOpenLyrics: o, onDelete: n, onRename: l }) {
  const { t: c } = Vt();
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
      _p,
      {
        track: h,
        player: r,
        onLoad: a,
        onOpenLyrics: o,
        onDelete: n,
        onRename: l,
        translate: c
      },
      h.id
    ))
  ] });
}
function _p({
  track: e,
  player: r,
  onLoad: a,
  onOpenLyrics: o,
  onDelete: n,
  onRename: l,
  translate: c
}) {
  const [h, g] = T(!1), [p, x] = T(null), m = r.state.trackId === e.id, y = m && r.state.playing, w = () => {
    if (p === null) return;
    const C = p.trim();
    x(null), C && C !== e.title && l(e.id, C);
  }, v = new Date(e.createdAt).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => g(!0),
      onMouseLeave: () => g(!1),
      draggable: !0,
      onDragStart: (C) => {
        const N = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: Ae(e)
        };
        C.dataTransfer.setData(Oa, JSON.stringify(N)), e.lyricsPreview && C.dataTransfer.setData("text/plain", e.lyricsPreview), C.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => Ae(e) ? r.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: m ? "var(--bg-selected)" : h ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: Ae(e) ? y ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: m ? "var(--accent-primary)" : "var(--text-disabled)" }, children: Ae(e) ? y ? /* @__PURE__ */ t(_t, { size: 11 }) : h ? /* @__PURE__ */ t(Ne, { size: 11 }) : /* @__PURE__ */ t(qa, { size: 11 }) : /* @__PURE__ */ t(Mr, { size: 11 }) }),
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
              onChange: (C) => x(C.target.value),
              onClick: (C) => C.stopPropagation(),
              onKeyDown: (C) => {
                C.stopPropagation(), C.key === "Enter" ? w() : C.key === "Escape" && x(null);
              },
              onBlur: w,
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
        ) : /* @__PURE__ */ s(fe, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "truncate",
              style: { fontWeight: m ? 600 : 500 },
              onClick: (C) => C.stopPropagation(),
              onDoubleClick: (C) => {
                C.stopPropagation(), x(e.title);
              },
              title: "Double-click to rename",
              children: e.title || c("musiccreator.track.untitled")
            }
          ),
          e.styleTags && e.styleTags !== "—" && /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 9, color: "var(--text-disabled)" }, children: e.styleTags })
        ] }) }),
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? We(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: v }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (C) => {
              C.stopPropagation(), C.shiftKey ? o(e) : C.altKey ? n(e.id) : a(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(Ro, { size: 11 })
          }
        )
      ]
    }
  );
}
function Np({
  track: e,
  onDelete: r,
  onLoad: a,
  onOpenLyrics: o,
  onSaveSongToDesktop: n,
  onSaveLyricsToDesktop: l,
  onPlayInPlayer: c,
  onRename: h,
  onEditCover: g,
  onSelect: p,
  selected: x,
  player: m
}) {
  const { t: y } = Vt(), w = te(null), [v, _] = T(!1), [C, N] = T(null), [P, k] = T(null), H = () => {
    if (P === null) return;
    const O = P.trim();
    k(null), O && O !== e.title && h(e.id, O);
  }, I = m.state.trackId === e.id, K = I && m.state.playing, S = I && m.state.durationMs > 0 ? m.state.positionMs / m.state.durationMs : 0;
  W(() => {
    if (!C) return;
    const O = (q) => {
      const ee = q.target;
      w.current && ee && w.current.contains(ee) || ee && ee.closest?.("[data-track-menu]") || N(null);
    }, de = () => N(null);
    return setTimeout(() => window.addEventListener("mousedown", O), 0), window.addEventListener("scroll", de, !0), window.addEventListener("resize", de), () => {
      window.removeEventListener("mousedown", O), window.removeEventListener("scroll", de, !0), window.removeEventListener("resize", de);
    };
  }, [C]);
  const L = () => {
    const O = w.current?.getBoundingClientRect();
    if (!O) return;
    const de = 220, q = Math.min(O.right - de, window.innerWidth - de - 8), ee = O.bottom + 4;
    N({ x: Math.max(8, q), y: ee });
  }, R = (O) => () => {
    N(null), O();
  }, B = () => m.toggle(e), z = () => {
    const O = document.createElement("a");
    O.href = e.audioDataUrl, O.download = `${e.title || "track"}.mp3`, O.click();
  };
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => _(!0),
      onMouseLeave: () => _(!1),
      draggable: !0,
      onDragStart: (O) => {
        const de = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: Ae(e)
        };
        O.dataTransfer.setData(Oa, JSON.stringify(de)), e.lyricsPreview && O.dataTransfer.setData("text/plain", e.lyricsPreview), O.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => p?.(e),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: x ? "var(--bg-selected)" : v ? "var(--bg-hover)" : "transparent",
        border: x ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: p ? "pointer" : "grab"
      },
      title: p ? "Click to open in player · drag to other fields" : "Drag to Desktop, Cover field, Text Editor, or any text field",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          Ae(e) ? /* @__PURE__ */ s(
            "button",
            {
              onClick: B,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: K ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(pt, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Ur(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: K ? /* @__PURE__ */ t(_t, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(Ne, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                title: y("musiccreator.track.lyricsOnly"),
                children: /* @__PURE__ */ t(Mr, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
            P !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: P,
                onChange: (O) => k(O.target.value),
                onClick: (O) => O.stopPropagation(),
                onKeyDown: (O) => {
                  O.stopPropagation(), O.key === "Enter" ? H() : O.key === "Escape" && k(null);
                },
                onBlur: H,
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
                onDoubleClick: (O) => {
                  O.stopPropagation(), k(e.title);
                },
                title: "Double-click to rename",
                children: e.title || y("musiccreator.track.untitled")
              }
            ),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.durationMs > 0 ? We(e.durationMs) : y("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: w,
              onClick: (O) => {
                O.stopPropagation(), C ? N(null) : L();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: v || C ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(Ro, { size: 14 })
            }
          )
        ] }),
        C && Wa(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: C.x,
                top: C.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                Ae(e) && /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(Ie, { icon: /* @__PURE__ */ t(qa, { size: 14 }), label: y("musiccreator.track.playInPlayer"), onClick: R(() => c(e)) }),
                  /* @__PURE__ */ t(Ie, { icon: /* @__PURE__ */ t(Di, { size: 14 }), label: y("musiccreator.track.saveSongToDesktop"), onClick: R(() => n(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(Ie, { icon: /* @__PURE__ */ t(wn, { size: 14 }), label: y("musiccreator.track.download"), onClick: R(z) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ s(fe, { children: [
                  Ae(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(Ie, { icon: /* @__PURE__ */ t(Mr, { size: 14 }), label: y("musiccreator.track.openInEditor"), onClick: R(() => o(e)) }),
                  /* @__PURE__ */ t(Ie, { icon: /* @__PURE__ */ t(Di, { size: 14 }), label: y("musiccreator.track.saveLyricsToDesktop"), onClick: R(() => l(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(Ie, { icon: /* @__PURE__ */ t(Sn, { size: 14 }), label: "Rename", onClick: R(() => k(e.title)) }),
                /* @__PURE__ */ t(Ie, { icon: /* @__PURE__ */ t(Ha, { size: 14 }), label: "Edit cover art", onClick: R(() => g(e)) }),
                /* @__PURE__ */ t(Ie, { icon: /* @__PURE__ */ t(Wt, { size: 14 }), label: y("musiccreator.track.loadIntoForm"), onClick: R(() => a(e)) }),
                /* @__PURE__ */ t(Ie, { icon: /* @__PURE__ */ t(qt, { size: 14 }), label: y("musiccreator.track.delete"), onClick: R(() => r(e.id)), danger: !0 })
              ]
            }
          ),
          document.body
        ),
        K && /* @__PURE__ */ t(
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
function Cp({
  trackIds: e,
  allTracks: r,
  player: a,
  onSelect: o
}) {
  const n = e.map((l) => r.find((c) => c.id === l)).filter((l) => !!l).slice(0, 6);
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
      const c = a.state.trackId === l.id;
      return /* @__PURE__ */ s(
        "button",
        {
          onClick: () => o(l),
          className: "flex flex-col items-start flex-shrink-0 rounded-lg p-1.5 transition-all hover:bg-[var(--bg-hover)]",
          style: {
            width: 84,
            background: c ? "var(--bg-selected)" : "var(--bg-titlebar)",
            border: c ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)"
          },
          title: l.title || "Untitled",
          children: [
            /* @__PURE__ */ t(pt, { track: l, size: 68, iconSize: 20, radius: 6 }),
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
function Ep({
  track: e,
  player: r,
  selected: a,
  isFavorite: o,
  onOpenInPlayer: n,
  onRemix: l,
  onToggleFavorite: c,
  onRemove: h,
  selectMode: g = !1,
  checked: p = !1,
  onToggleCheck: x
}) {
  const m = te(null), [y, w] = T(!1), [v, _] = T(null), C = r.state.trackId === e.id, N = C && r.state.loadingTrackId === e.id, P = C && r.state.playing, k = C && r.state.durationMs > 0 ? r.state.positionMs / r.state.durationMs : 0;
  W(() => {
    if (!v) return;
    const L = (B) => {
      const z = B.target;
      m.current && z && m.current.contains(z) || z && z.closest?.("[data-track-menu]") || _(null);
    }, R = () => _(null);
    return setTimeout(() => window.addEventListener("mousedown", L), 0), window.addEventListener("scroll", R, !0), window.addEventListener("resize", R), () => {
      window.removeEventListener("mousedown", L), window.removeEventListener("scroll", R, !0), window.removeEventListener("resize", R);
    };
  }, [v]);
  const H = () => {
    const L = m.current?.getBoundingClientRect();
    if (!L) return;
    const R = 220, B = Math.min(L.right - R, window.innerWidth - R - 8), z = L.bottom + 4;
    _({ x: B, y: z });
  }, I = (L) => () => {
    _(null), L();
  }, K = e.externalUrl;
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => w(!0),
      onMouseLeave: () => w(!1),
      onClick: g ? () => {
        x && x(e);
      } : void 0,
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: g && p || a ? "var(--bg-selected)" : y ? "var(--bg-hover)" : "transparent",
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
              children: p ? /* @__PURE__ */ t(Cn, { size: 20 }) : /* @__PURE__ */ t(En, { size: 20 })
            }
          ) : /* @__PURE__ */ s(
            "button",
            {
              onClick: (L) => {
                L.stopPropagation(), r.toggle(e);
              },
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105",
              style: { width: 36, height: 36 },
              title: P ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(pt, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Ur(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: N ? /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin", style: { color: "white" } }) : P ? /* @__PURE__ */ t(_t, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(Ne, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                  e.durationMs > 0 ? ` · ${We(e.durationMs)}` : ""
                ] })
              ]
            }
          ),
          !g && /* @__PURE__ */ t(
            "button",
            {
              ref: m,
              onClick: (L) => {
                L.stopPropagation(), v ? _(null) : H();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: y || v ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(Ro, { size: 14 })
            }
          )
        ] }),
        v && Wa(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: v.x,
                top: v.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                /* @__PURE__ */ t(
                  Ie,
                  {
                    icon: P ? /* @__PURE__ */ t(_t, { size: 14 }) : /* @__PURE__ */ t(Ne, { size: 14 }),
                    label: P ? "Pause" : "Play",
                    onClick: I(() => r.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Ie,
                  {
                    icon: /* @__PURE__ */ t(qa, { size: 14 }),
                    label: "Open in player",
                    onClick: I(() => n(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Ie,
                  {
                    icon: /* @__PURE__ */ t(Jt, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: I(() => l(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Ie,
                  {
                    icon: /* @__PURE__ */ t(Ar, { size: 14, fill: o ? "currentColor" : "none" }),
                    label: o ? "Remove favorite" : "Add to favorites",
                    onClick: I(() => c(e))
                  }
                ),
                K && /* @__PURE__ */ t(
                  Ie,
                  {
                    icon: /* @__PURE__ */ t(kn, { size: 14 }),
                    label: "Open source",
                    onClick: I(() => window.open(K, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Ie,
                  {
                    icon: /* @__PURE__ */ t(qt, { size: 14 }),
                    label: "Remove from Library",
                    onClick: I(() => h(e)),
                    danger: !0
                  }
                )
              ]
            }
          ),
          document.body
        ),
        P && /* @__PURE__ */ t(
          "div",
          {
            className: "mt-1.5 rounded-full overflow-hidden",
            style: { height: 2, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${k * 100}%`,
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
function Ap({
  track: e,
  endpoint: r,
  onSave: a,
  onClose: o
}) {
  const [n, l] = T(e.coverDataUrl), [c, h] = T(""), [g, p] = T(!1), [x, m] = T(null), y = te(null), w = te(null), v = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), _ = Er(v, "", e.styleTags || "");
  W(() => {
    const P = (k) => {
      k.key === "Escape" && (k.stopPropagation(), o());
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [o]), W(() => () => w.current?.abort(), []);
  const C = async () => {
    if (!r) {
      m("Connect to a pod to generate cover art.");
      return;
    }
    if (!r.models.image) {
      m(`This endpoint (${r.label}) has no image model. Pick one in JULI3TA Settings → Cover art.`);
      return;
    }
    if (g) return;
    w.current?.abort(), w.current = new AbortController();
    const P = w.current.signal;
    p(!0), m(null);
    try {
      const k = (c.trim() || _).slice(0, 1500), H = await Io(r, k, P);
      if (P.aborted) return;
      l(H);
    } catch (k) {
      if (k.name === "AbortError") return;
      m(k.message || "Cover-art generation failed.");
    } finally {
      p(!1);
    }
  }, N = (P) => {
    if (m(null), !P.type.startsWith("image/")) {
      m("That file is not an image.");
      return;
    }
    if (P.size > 4 * 1024 * 1024) {
      m("Image is too big (limit 4 MB).");
      return;
    }
    const k = new FileReader();
    k.onerror = () => m("Could not read that image."), k.onload = () => {
      const H = k.result;
      typeof H == "string" && l(H);
    }, k.readAsDataURL(P);
  };
  return Wa(
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
            onClick: (P) => P.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(Ha, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ s("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: [
                      "Cover Art — ",
                      v || "Untitled"
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: o,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close",
                        children: /* @__PURE__ */ t(Se, { size: 14 })
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
                        !n && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Ha, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
                        g && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(oe, { size: 24, className: "animate-spin", style: { color: "white" } }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col gap-2 min-w-0", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: C,
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
                          g ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Tn, { size: 12 }),
                          n ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => y.current?.click(),
                        disabled: g,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(jo, { size: 12 }),
                          "Upload"
                        ]
                      }
                    ),
                    n && /* @__PURE__ */ s(
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
                          /* @__PURE__ */ t(Se, { size: 12 }),
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
                      value: c,
                      onChange: (P) => h(P.target.value),
                      placeholder: _,
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
                x && /* @__PURE__ */ s(
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
                      /* @__PURE__ */ t($a, { size: 12, style: { flexShrink: 0 } }),
                      x
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
                          a(e.id, n), o();
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
                  ref: y,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (P) => {
                    const k = P.target.files?.[0];
                    k && N(k), P.target.value = "";
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
function Tr({ label: e, children: r }) {
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
function Mp({
  songName: e,
  mode: r,
  theme: a,
  style: o,
  intent: n,
  lyrics: l,
  specs: c,
  coverDataUrl: h,
  endpoint: g,
  busy: p,
  onRegenerate: x,
  onUpload: m,
  onClear: y,
  onClose: w
}) {
  const v = te(null), _ = be(() => Ir(c), [c]), C = be(() => ca(c), [c]);
  W(() => {
    const k = (H) => {
      H.key === "Escape" && (H.stopPropagation(), w());
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [w]);
  const N = r === "restyle" ? "Restyle" : r === "lyricsOnly" ? "Lyrics only" : "Song", P = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Wa(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.6)" },
        onClick: w,
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
            onClick: (k) => k.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3 flex-shrink-0",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(Bt, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                        children: N
                      }
                    ),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: w,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(Se, { size: 14 })
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
                      !h && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Ha, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
                      p && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(oe, { size: 28, className: "animate-spin", style: { color: "white" } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
                  /* @__PURE__ */ s("div", { children: [
                    /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }, children: P }),
                    o.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: o.trim() })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: x,
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
                          p ? /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(ut, { size: 11 }),
                          h ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: () => v.current?.click(),
                        disabled: p,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(jo, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    h && /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: y,
                        disabled: p,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(Se, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  a.trim() && /* @__PURE__ */ t(Tr, { label: "Theme", children: a.trim() }),
                  n.trim() && /* @__PURE__ */ t(Tr, { label: "Lyrics Direction", children: n.trim() }),
                  C > 0 && _ && /* @__PURE__ */ t(Tr, { label: `Track Specs (${C} set)`, children: _ }),
                  l.trim() && /* @__PURE__ */ t(Tr, { label: "Lyrics", children: /* @__PURE__ */ t(
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
                  !a.trim() && !n.trim() && C === 0 && !l.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: v,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (k) => {
                    const H = k.target.files?.[0];
                    H && m(H), k.target.value = "";
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
function Lp(e) {
  if (!e || e <= 0) return "—";
  const r = e / 1024;
  return r < 1024 ? `${r.toFixed(1)} KB` : `${(r / 1024).toFixed(2)} MB`;
}
function zp(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function Ip(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function Rp(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function Pp(e) {
  const r = [], a = [];
  e.structure?.tempo_bpm ? a.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && a.push({ label: "Tempo", value: re(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && a.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && a.push({ label: "Feel", value: re(e.structure.rhythm_feel) }), e.structure?.groove_pattern && a.push({ label: "Groove", value: re(e.structure.groove_pattern) }), e.structure?.song_form && a.push({ label: "Form", value: re(e.structure.song_form) }), e.structure?.length_seconds && a.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), a.length && r.push({ label: "Structure", rows: a });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: re(e.tonal.mode) }), o.length && r.push({ label: "Tonal", rows: o });
  const n = [];
  if (e.instrumentation?.primary_instruments?.length && n.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(re).join(", ") }), e.instrumentation?.has_vocals === !1)
    n.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const g = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && g.push(re(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && g.push(e.instrumentation.vocal_style.map(re).join("/")), n.push({ label: "Vocals", value: g.length ? g.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && n.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(re).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && n.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), n.length && r.push({ label: "Instrumentation", rows: n });
  const l = [];
  e.dynamics?.overall_dynamic_range && l.push({ label: "Range", value: re(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && l.push({ label: "Crescendo", value: re(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && l.push({ label: "Big drops", value: "Yes" }), l.length && r.push({ label: "Dynamics", rows: l });
  const c = [];
  e.mood?.primary_moods?.length && c.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && c.push({ label: "Intensity", value: re(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && c.push({ label: "For", value: e.mood.occasion_tags.map(re).join(", ") }), c.length && r.push({ label: "Mood", rows: c });
  const h = [];
  return e.context?.era_reference && h.push({ label: "Era", value: re(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && h.push({ label: "Region", value: re(e.context.cultural_region) }), e.context?.intended_use?.length && h.push({ label: "Use", value: e.context.intended_use.map(re).join("/") }), e.context?.explicit_lyrics && h.push({ label: "Explicit", value: "Yes" }), h.length && r.push({ label: "Context", rows: h }), r;
}
function ct({ label: e, value: r }) {
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
function Ot({ label: e, children: r }) {
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
function es({
  base64: e,
  src: r,
  onPlay: a,
  title: o = "Preview reference audio",
  height: n = 30,
  style: l
}) {
  const c = be(() => e || qu(r), [e, r]), h = be(
    () => c ? Rr(c) : null,
    [c]
  ), [g, p] = T(null), [x, m] = T(null);
  W(() => {
    if (m(null), !c) {
      p(null);
      return;
    }
    let _ = null;
    try {
      _ = URL.createObjectURL(Ju(c)), p(_);
    } catch {
      p(null);
    }
    return () => {
      _ && URL.revokeObjectURL(_);
    };
  }, [c]);
  const y = (_) => {
    Number.isFinite(_.duration) && _.duration > 0.1 && m(_.duration * 1e3);
  }, w = x ?? h;
  return /* @__PURE__ */ s("div", { style: l, children: [
    /* @__PURE__ */ t(
      "audio",
      {
        controls: !0,
        preload: "metadata",
        src: g || r || void 0,
        onLoadedMetadata: (_) => y(_.currentTarget),
        onDurationChange: (_) => y(_.currentTarget),
        onPlay: a,
        style: { width: "100%", height: n },
        title: o
      }
    ),
    w && w > 0 && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: [
      "Reference preview · ",
      We(w)
    ] })
  ] });
}
function jp({
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
          es,
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
function Dp(e, r, a, o) {
  if (!e || r.length === 0) return null;
  if (o === "one") return { kind: "repeating" };
  const n = r.filter(Ae);
  if (n.length === 0) return null;
  if (a) return { kind: "random" };
  const l = n.findIndex((c) => c.id === e);
  return l < 0 ? null : l + 1 < n.length ? { kind: "track", track: n[l + 1] } : o === "all" ? { kind: "track", track: n[0] } : { kind: "end" };
}
function Up({ text: e }) {
  const [r, a] = T(!1);
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
        r ? /* @__PURE__ */ t(ua, { size: 11 }) : /* @__PURE__ */ t(xn, { size: 11 }),
        r ? "Copied" : "Copy"
      ]
    }
  );
}
const Op = /^\s*\[([^\]]+)\]\s*$/;
function $p({ text: e }) {
  const r = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: r.map((a, o) => {
    const n = a.match(Op);
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
    ) : a.trim() === "" ? /* @__PURE__ */ t("div", { style: { height: 8 } }, o) : /* @__PURE__ */ t("div", { style: { whiteSpace: "pre-wrap" }, children: a }, o);
  }) });
}
function Hp({ track: e, player: r, restyleOriginal: a, onEditInCreator: o, onSwitchToCreator: n, onSearchMusic: l }) {
  const { t: c } = Vt(), h = e?.specsJson ?? "", g = be(() => {
    if (!h) return {};
    try {
      return JSON.parse(h);
    } catch {
      return {};
    }
  }, [h]), p = (g.intent ?? "").trim(), x = be(() => Pp(g), [g]);
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
      /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }, children: c("musiccreator.player.empty.title") }),
      /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", textAlign: "center", maxWidth: 360 }, children: c("musiccreator.player.empty.body") }),
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
            /* @__PURE__ */ t(ut, { size: 13 }),
            c("musiccreator.player.empty.openCreator")
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
            /* @__PURE__ */ t(Tt, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const m = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", y = Ae(e), w = Ur(e), v = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", _ = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", C = r.state.trackId === e.id, N = C && r.state.playing, P = C && r.state.loadingTrackId === e.id, k = e.source === "youtube", H = r.queue.filter((I) => I.id !== e.id && (I.artist || "").trim() && I.artist === e.artist).slice(0, 4);
  return /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden relative", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ s("div", { className: "flex-shrink-0 relative overflow-hidden", children: [
      /* @__PURE__ */ t(
        "div",
        {
          "aria-hidden": !0,
          className: "absolute inset-0",
          style: {
            background: w ? `url(${w}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
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
              y && r.toggle(e);
            },
            disabled: !y,
            className: "rounded-lg overflow-hidden flex-shrink-0 relative group disabled:cursor-not-allowed",
            style: {
              width: 220,
              height: 220,
              background: w ? `url(${w}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              cursor: y ? "pointer" : "default"
            },
            title: y ? C && N ? "Pause" : "Play" : "Lyric sheet — no audio",
            children: [
              !w && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(
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
              y && /* @__PURE__ */ t(
                "div",
                {
                  className: "absolute inset-0 flex items-center justify-center transition-opacity",
                  style: {
                    background: "rgba(0,0,0,0.35)",
                    opacity: C && N ? 0 : 1
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
                      children: C && N ? /* @__PURE__ */ t(_t, { size: 30, style: { color: "white" } }) : P ? /* @__PURE__ */ t(oe, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(Ne, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                y ? /* @__PURE__ */ t(Ne, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(Wt, { size: 10 }),
                k ? "YouTube track" : c(y ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
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
                /* @__PURE__ */ t(Do, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: v }),
                e.source === "youtube" && e.album && e.album !== v && /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                _ && /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: _ })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: We(e.durationMs) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "mt-5 flex items-center gap-3 flex-wrap", children: [
            y && /* @__PURE__ */ t(
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
                title: C && N ? "Pause" : "Play",
                children: P ? /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t(oe, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : C && N ? /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t(_t, { size: 16 }),
                  " ",
                  c("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t(Ne, { size: 16, style: { marginLeft: 2 } }),
                  " ",
                  c("musiccreator.player.play")
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
                title: c("musiccreator.player.remixInRestyle.tip"),
                children: [
                  /* @__PURE__ */ t(Jt, { size: 13 }),
                  c("musiccreator.player.remixInRestyle")
                ]
              }
            ),
            e.audioDataUrl && y && /* @__PURE__ */ s(
              "button",
              {
                onClick: () => {
                  const I = document.createElement("a");
                  I.href = e.audioDataUrl, I.download = `${(e.title || "track").replace(/[\\/:*?"<>|]/g, "_")}.mp3`, document.body.appendChild(I), I.click(), document.body.removeChild(I);
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
                  /* @__PURE__ */ t(wn, { size: 13 }),
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
              /* @__PURE__ */ t("span", { children: c("musiccreator.player.lyrics") }),
              e.lyricsPreview && /* @__PURE__ */ t(Up, { text: e.lyricsPreview })
            ]
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t($p, { text: e.lyricsPreview }) : k ? /* @__PURE__ */ s(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(uc, { size: 18 }) }),
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
                    /* @__PURE__ */ t(kn, { size: 13 }),
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
              /* @__PURE__ */ t(Wt, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: c("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        a && a.trackId === e.id && /* @__PURE__ */ t(
          jp,
          {
            audioSrc: a.audioSrc,
            sourceLabel: a.sourceLabel,
            onUserPlay: () => {
              r.state.playing && r.pause();
            }
          }
        ),
        e.id === r.state.trackId && (() => {
          const I = Dp(
            r.state.trackId,
            r.queue,
            r.state.shuffle,
            r.state.repeatMode
          );
          return I ? /* @__PURE__ */ s(Ot, { label: "Up next", children: [
            I.kind === "track" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ t(pt, { track: I.track, size: 32, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: I.track.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: I.track.artist || (I.track.styleTags && I.track.styleTags !== "—" ? I.track.styleTags : "JULI3TA") })
              ] })
            ] }),
            I.kind === "random" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(Po, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Random next track from your queue." })
            ] }),
            I.kind === "repeating" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(_n, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Repeating this track." })
            ] }),
            I.kind === "end" && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-disabled)" }, children: "End of queue." })
          ] }) : null;
        })(),
        e.theme.trim() && /* @__PURE__ */ t(Ot, { label: c("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        p && /* @__PURE__ */ t(Ot, { label: c("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: p }) }),
        x.map((I) => /* @__PURE__ */ t(Ot, { label: I.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: I.rows.map((K) => /* @__PURE__ */ t(ct, { label: K.label, value: K.value }, `${I.label}-${K.label}`)) }) }, I.label)),
        k && /* @__PURE__ */ t(Ot, { label: "Artist / Source", children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(_c, { size: 20 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        H.length > 0 && /* @__PURE__ */ t(Ot, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: H.map((I) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => r.select(I),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(pt, { track: I, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: I.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: I.durationMs ? We(I.durationMs) : "Streamed" })
              ] })
            ]
          },
          I.id
        )) }) }),
        /* @__PURE__ */ t(Ot, { label: c("musiccreator.player.about"), children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(ct, { label: c("musiccreator.player.about.created"), value: Rp(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(ct, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(ct, { label: "Channel", value: e.album }),
          y && e.durationMs > 0 && /* @__PURE__ */ t(ct, { label: c("musiccreator.player.about.duration"), value: We(e.durationMs) }),
          e.source !== "youtube" && y && e.bitrate > 0 && /* @__PURE__ */ t(ct, { label: c("musiccreator.player.about.bitrate"), value: zp(e.bitrate) }),
          e.source !== "youtube" && y && e.sampleRate > 0 && /* @__PURE__ */ t(ct, { label: c("musiccreator.player.about.sampleRate"), value: Ip(e.sampleRate) }),
          e.source !== "youtube" && y && e.sizeBytes > 0 && /* @__PURE__ */ t(ct, { label: c("musiccreator.player.about.size"), value: Lp(e.sizeBytes) }),
          _ && /* @__PURE__ */ t(ct, { label: c("musiccreator.player.about.style"), value: _ }),
          /* @__PURE__ */ t(ct, { label: c("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : c(y ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Fp({
  tab: e,
  onTabChange: r,
  query: a,
  onQueryChange: o,
  searchHistory: n,
  onClearSearchHistory: l,
  resultType: c,
  onResultTypeChange: h,
  results: g,
  busy: p,
  error: x,
  status: m,
  providers: y,
  connectors: w,
  libraryTracks: v,
  playlists: _,
  playlistNameDraft: C,
  playlistBusy: N,
  favoriteIds: P,
  warmupIds: k,
  addBusyId: H,
  savedYoutubeIds: I,
  player: K,
  onWarmResult: S,
  onPreview: L,
  onAdd: R,
  onOpenTrack: B,
  onToggleFavorite: z,
  onRemoveLibraryTrack: he,
  onPlaylistNameDraftChange: O,
  onCreatePlaylist: de,
  onAddTrackToPlaylist: q,
  onRemoveTrackFromPlaylist: ee,
  onPlayPlaylist: It,
  onDeletePlaylist: $r,
  onConfigureConnector: qe,
  onDisconnectConnector: Yt,
  onClose: Me
}) {
  const [Je, ae] = T(null), [at, Nt] = T({}), [Ct, Re] = T(!1), [Kt, Xe] = T(null), [De, Et] = T(null), [Ce, Ee] = T(null);
  W(() => {
    Et(null), Ee(null);
  }, [e]);
  const Xt = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(v.map((f) => f.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(v.map((f) => f.album || f.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: _.length },
    { id: "sources", label: "Sources", count: y.length || 4 }
  ], ht = (f) => {
    const j = K.state.trackId === f.id, V = j && K.state.loadingTrackId === f.id, le = j && K.state.playing;
    return /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(pt, { track: f, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ s("button", { type: "button", onClick: () => B(f), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: f.title }),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              f.artist || "Unknown",
              f.album ? ` · ${f.album}` : "",
              f.durationMs ? ` · ${We(f.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => z(f),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: P.has(f.id) ? "white" : "var(--text-secondary)",
                background: P.has(f.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: P.has(f.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(Ar, { size: 13, fill: P.has(f.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => K.toggle(f),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                V ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : le ? /* @__PURE__ */ t(_t, { size: 12 }) : /* @__PURE__ */ t(Ne, { size: 12 }),
                V ? "Loading" : le ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => he(f),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t(qt, { size: 13 })
            }
          )
        ]
      },
      f.id
    );
  }, Qe = Array.from(
    v.reduce((f, j) => {
      const V = (j.artist || "Unknown artist").trim();
      return f.set(V, [...f.get(V) ?? [], j]), f;
    }, /* @__PURE__ */ new Map())
  ).sort((f, j) => f[0].localeCompare(j[0])), _e = Array.from(
    v.reduce((f, j) => {
      const V = (j.album || j.artist || "YouTube collection").trim();
      return f.set(V, [...f.get(V) ?? [], j]), f;
    }, /* @__PURE__ */ new Map())
  ).sort((f, j) => f[0].localeCompare(j[0])), Ge = y.length > 0 ? y.map((f) => {
    const j = w.find((Qt) => Qt.provider === f.id), V = j?.connected ?? f.configured, le = j?.oauthRequired ?? f.state === "oauth_required";
    return {
      id: f.id,
      name: f.name,
      state: V ? "Connected" : le ? "OAuth required" : f.state.replace(/_/g, " "),
      body: j?.message ?? f.message,
      action: V ? "Manage" : le ? "Coming soon" : "Configure",
      enabled: V,
      needs: f.needs,
      kind: f.kind,
      connector: j,
      oauthRequired: le,
      configurable: j?.configurable ?? !le
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
      connector: w.find((f) => f.provider === "spotify"),
      oauthRequired: !0,
      configurable: !1
    },
    {
      id: "lastfm",
      name: "Last.fm",
      state: w.find((f) => f.provider === "lastfm")?.connected ? "Connected" : "Metadata connector",
      body: "Artist bios, tags and now-playing style metadata. API key required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["apiKey"],
      kind: "metadata",
      connector: w.find((f) => f.provider === "lastfm"),
      oauthRequired: !1,
      configurable: !0
    },
    {
      id: "discogs",
      name: "Discogs",
      state: w.find((f) => f.provider === "discogs")?.connected ? "Connected" : "Metadata connector",
      body: "Release/catalog metadata and album artwork. Token required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["token"],
      kind: "catalog",
      connector: w.find((f) => f.provider === "discogs"),
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
              onClick: Me,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(Se, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: Xt.map((f) => /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => r(f.id),
          className: "rounded-lg px-3 transition-all",
          style: {
            height: 30,
            fontSize: 12,
            fontWeight: e === f.id ? 800 : 600,
            color: e === f.id ? "white" : "var(--text-secondary)",
            background: e === f.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)"
          },
          children: [
            f.label,
            typeof f.count == "number" ? ` · ${f.count}` : ""
          ]
        },
        f.id
      )) }),
      e === "search" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-xl px-4", style: { height: 44, background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
        /* @__PURE__ */ t(Tt, { size: 16, style: { color: "var(--text-disabled)" } }),
        /* @__PURE__ */ t(
          "input",
          {
            value: a,
            onChange: (f) => o(f.target.value),
            placeholder: "Search music, artists, albums…",
            className: "flex-1 bg-transparent outline-none",
            style: { color: "var(--text-primary)", fontSize: 14, fontWeight: 600 },
            autoFocus: !0
          }
        ),
        p && /* @__PURE__ */ t(oe, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        a && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(Se, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((f) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => h(f),
          className: "rounded-lg px-3 transition-all",
          style: {
            height: 28,
            fontSize: 11,
            fontWeight: c === f ? 900 : 700,
            color: c === f ? "white" : "var(--text-secondary)",
            background: c === f ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)",
            textTransform: "capitalize"
          },
          children: f
        },
        f
      )) }) }),
      e === "search" && a.trim().length < 2 && n.length > 0 && /* @__PURE__ */ s("div", { className: "mt-3 flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.7, fontWeight: 800 }, children: "Recent" }),
        n.map((f) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => o(f),
            className: "rounded-lg px-3 transition-all hover:bg-[var(--bg-hover)]",
            style: {
              height: 26,
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-secondary)",
              background: "var(--bg-titlebar)",
              border: "1px solid var(--border-subtle)"
            },
            title: `Search for "${f}"`,
            children: f
          },
          f
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
            children: /* @__PURE__ */ t(Se, { size: 11 })
          }
        )
      ] }),
      x && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: x })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
        a.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        a.trim().length >= 2 && !p && g.length === 0 && !x && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        p && g.length === 0 && Array.from({ length: 5 }).map((f, j) => /* @__PURE__ */ s(
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
        g.map((f) => {
          const j = Qn(f.title, f.channel), V = I.has(f.id), le = H === f.id, Qt = k.has(f.id), Ue = Ft(f.id), ne = K.state.trackId === Ue, gt = ne && K.state.loadingTrackId === Ue, yt = ne && K.state.playing;
          return /* @__PURE__ */ s(
            "div",
            {
              onMouseEnter: () => S(f),
              onFocus: () => S(f),
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                f.thumbnailUrl || Pr(f.id) ? /* @__PURE__ */ t("img", { src: f.thumbnailUrl || Pr(f.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(qa, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: j.song }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    j.artist || f.channel || "Music",
                    f.durationMs ? ` · ${We(f.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: f.title })
                ] }),
                Qt && !ne && /* @__PURE__ */ s("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(oe, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => ne ? K.toggle() : L(f),
                    disabled: gt,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: {
                      height: 32,
                      fontSize: 11,
                      fontWeight: 700,
                      color: ne ? "white" : "var(--text-secondary)",
                      border: `1px solid ${ne ? "rgba(255,255,255,0.28)" : "var(--border-subtle)"}`,
                      background: ne ? "linear-gradient(135deg, rgba(139,92,246,0.55), rgba(251,146,60,0.55))" : "var(--bg-window)"
                    },
                    children: [
                      gt ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : yt ? /* @__PURE__ */ t(_t, { size: 12 }) : /* @__PURE__ */ t(Ne, { size: 12 }),
                      gt ? "Loading" : yt ? "Pause" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => R(f),
                    disabled: V || le,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: V ? "var(--text-disabled)" : "white", background: V ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      le ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : V ? /* @__PURE__ */ t(ua, { size: 12 }) : /* @__PURE__ */ t(Co, { size: 12 }),
                      le ? "Adding" : V ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            f.id
          );
        })
      ] }),
      e === "artists" && (De !== null ? (() => {
        const f = Qe.find(([j]) => j === De)?.[1] ?? [];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Et(null),
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
                  /* @__PURE__ */ t(Pi, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: De }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                f.length,
                " track",
                f.length === 1 ? "" : "s",
                " in your Library"
              ] })
            ] }),
            f[0] && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => B(f[0]),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(Ne, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: f.map(ht) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Qe.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Qe.map(([f, j]) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => Et(f),
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            title: `Open ${f}`,
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: f }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                j.length,
                " track",
                j.length === 1 ? "" : "s"
              ] })
            ]
          },
          f
        ))
      ] })),
      e === "albums" && (Ce !== null ? (() => {
        const j = _e.find(([le]) => le === Ce)?.[1] ?? [], V = j[0];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Ee(null),
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
                  /* @__PURE__ */ t(Pi, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            V && /* @__PURE__ */ t(pt, { track: V, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Ce }),
              /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                V?.artist || "Mixed artists",
                " · ",
                j.length,
                " track",
                j.length === 1 ? "" : "s"
              ] })
            ] }),
            V && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => B(V),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(Ne, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: j.map(ht) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        _e.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        _e.map(([f, j]) => {
          const V = j[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => Ee(f),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${f}`,
              children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                V && /* @__PURE__ */ t(pt, { track: V, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ s("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: f }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    V?.artist || "Mixed artists",
                    " · ",
                    j.length,
                    " track",
                    j.length === 1 ? "" : "s"
                  ] })
                ] })
              ] })
            },
            f
          );
        })
      ] })),
      e === "playlists" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ t("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Xl, { size: 22 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: C,
              onChange: (f) => O(f.target.value),
              onKeyDown: (f) => {
                f.key === "Enter" && de();
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
              onClick: de,
              disabled: N,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                N ? /* @__PURE__ */ t(oe, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Co, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        _.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : _.map((f) => /* @__PURE__ */ s("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-3 mb-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: f.name }),
              /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 3 }, children: [
                f.items.length,
                " track",
                f.items.length === 1 ? "" : "s"
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => It(f),
                  disabled: f.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(Ne, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => $r(f.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(qt, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: f.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : f.items.map((j) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(pt, { track: j, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ s("button", { type: "button", onClick: () => B(j), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: j.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: j.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => ee(f.id, j.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(Se, { size: 13 })
              }
            )
          ] }, `${f.id}-${j.id}`)) }),
          v.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: v.slice(0, 8).filter((j) => !f.items.some((V) => V.id === j.id)).map((j) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => q(f.id, j),
              className: "rounded-full px-3",
              style: { height: 28, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              children: [
                "+ ",
                j.title.slice(0, 28)
              ]
            },
            `${f.id}-add-${j.id}`
          )) })
        ] }, f.id))
      ] }),
      e === "sources" && /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        Ge.map((f) => /* @__PURE__ */ s(
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
                    style: { width: 46, height: 46, color: "white", background: f.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: f.name === "Spotify" ? "♬" : f.name === "YouTube" ? /* @__PURE__ */ t(Ne, { size: 18 }) : f.kind === "catalog" ? /* @__PURE__ */ t(El, { size: 18 }) : /* @__PURE__ */ t(Bt, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: f.name }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 11, color: f.enabled ? "var(--status-success)" : "var(--text-secondary)", marginTop: 2 }, children: f.state }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.45, marginTop: 10 }, children: f.body })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const j = f.connector?.credentialSpecs ?? f.needs.map((V) => ({ name: V, label: V, secret: !0, required: !0 }));
                      Nt({}), Xe(null), ae({
                        id: f.id,
                        name: f.name,
                        body: f.body,
                        specs: j,
                        oauthRequired: f.oauthRequired,
                        configurable: f.configurable,
                        connected: f.enabled
                      });
                    },
                    className: "rounded-lg px-3 disabled:opacity-50",
                    style: { height: 30, fontSize: 11, fontWeight: 800, color: f.enabled ? "white" : "var(--text-secondary)", background: f.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: f.action
                  }
                ),
                f.connector?.account && /* @__PURE__ */ s("span", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                  "@",
                  f.connector.account
                ] })
              ] })
            ]
          },
          f.name
        )),
        Je && /* @__PURE__ */ s("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                Je.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: Je.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => ae(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(Se, { size: 16 }) })
          ] }),
          Je.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ s(fe, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: Je.specs.map((f) => /* @__PURE__ */ s("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: f.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: f.label || f.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: at[f.name] ?? "",
                  type: f.secret ? "password" : "text",
                  onChange: (j) => Nt((V) => ({ ...V, [f.name]: j.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: f.name
                }
              )
            ] }, f.name)) }),
            Kt && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: Kt }),
            /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  disabled: Ct || !Je.configurable,
                  onClick: () => {
                    Re(!0), Xe(null), qe(Je.id, at).then(() => {
                      Nt({}), ae(null);
                    }).catch((f) => Xe(f.message || "Connector setup failed.")).finally(() => Re(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Ct ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(ua, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              Je.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Ct,
                  onClick: () => {
                    Re(!0), Xe(null), Yt(Je.id).then(() => ae(null)).catch((f) => Xe(f.message || "Disconnect failed.")).finally(() => Re(!1));
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
const Da = {
  theme: !1,
  style: !1,
  lyrics: !1,
  specs: !1,
  cover: !1
}, Bp = {
  theme: null,
  style: null,
  lyrics: null,
  specs: null,
  cover: null
}, la = (e) => e?.name === "AbortError";
function Wp() {
  const { host: e } = Gt(), r = $c(), { t: a } = Vt(), o = Fc(), n = Jc(), { state: l, dispatch: c } = Ln(), { addNotification: h } = Yc(), g = l.theme.mode, [p, x] = T("compose"), [m, y] = T(!1), [w, v] = T("creator"), [_, C] = T(() => {
    try {
      const i = localStorage.getItem("juli3ta:selectedPlayerTrackId");
      return i && i.length > 0 ? i : null;
    } catch {
      return null;
    }
  });
  W(() => {
    try {
      _ ? localStorage.setItem("juli3ta:selectedPlayerTrackId", _) : localStorage.removeItem("juli3ta:selectedPlayerTrackId");
    } catch {
    }
  }, [_]);
  const [N, P] = T(""), [k, H] = T(""), [I, K] = T(null), [S, L] = T(""), [R, B] = T(""), [z, he] = T(!1), [O, de] = T(""), [q, ee] = T(""), [It, $r] = T(!0), [qe, Yt] = T(!1), [Me, Je] = T(null), [ae, at] = T({}), [Nt, Ct] = T(!1), [Re, Kt] = T(() => ({ ...Da })), Xe = te({ ...Da }), De = te({ ...Bp }), Et = A((i, d) => {
    Xe.current = { ...Xe.current, [i]: d }, Kt((u) => u[i] === d ? u : { ...u, [i]: d });
  }, []), Ce = A((i) => {
    if (Xe.current[i]) return null;
    De.current[i]?.abort();
    const d = new AbortController();
    return De.current[i] = d, Et(i, !0), d;
  }, [Et]), Ee = A((i, d) => {
    De.current[i] === d && (De.current[i] = null), Et(i, !1);
  }, [Et]), Xt = A(() => {
    Object.keys(De.current).forEach((i) => {
      De.current[i]?.abort(), De.current[i] = null;
    }), Xe.current = { ...Da }, Kt({ ...Da }), Yt(!1), Ct(!1);
  }, []), [ht, Qe] = T(null), [_e, Ge] = T(null), [f, j] = T(null), [V, le] = T(null), [Qt, Ue] = T(null), [ne, gt] = T(!1), [yt, Ja] = T(null), [ts, ya] = T(!1), [as, Ga] = T(!1), [Hr, Fr] = T([]), Wo = te(null), qo = te(null), [Br, Jo] = T(!1), [rt, Go] = T("best"), [rs, os] = T(null), [is, Va] = T(!1), [ft, Vo] = T("mic"), [ot, Wr] = T(!1), [Yo, Ko] = T(0), [Xo, fa] = T(null), Qo = te(null), Ya = te([]), Zt = te(null), qr = te(0), ba = te(null), [ea, Oe] = T("idle"), [va, J] = T(null), [ns, ta] = T(0), [Zo, ei] = T(0), [Rt, Ve] = T([]), [aa, ce] = T(null), [$e, Ka] = T(""), [xa, ti] = T("cards"), [xe, Xa] = T(() => {
    try {
      return localStorage.getItem("juli3ta:sidebarTab") === "library" ? "library" : "mywork";
    } catch {
      return "mywork";
    }
  }), Jr = te(!1), ss = A((i) => {
    Jr.current = !0, Xa(i);
  }, []), [Ye, ai] = T(() => {
    try {
      const i = localStorage.getItem("juli3ta:myWorkChip");
      if (i === "all" || i === "songs" || i === "restyles" || i === "lyrics") return i;
    } catch {
    }
    return "all";
  }), [bt, Gr] = T(() => {
    try {
      return localStorage.getItem("juli3ta:libraryChip") === "favorites" ? "favorites" : "all";
    } catch {
      return "all";
    }
  });
  W(() => {
    try {
      localStorage.setItem("juli3ta:sidebarTab", xe);
    } catch {
    }
  }, [xe]), W(() => {
    try {
      localStorage.setItem("juli3ta:myWorkChip", Ye);
    } catch {
    }
  }, [Ye]), W(() => {
    try {
      localStorage.setItem("juli3ta:libraryChip", bt);
    } catch {
    }
  }, [bt]);
  const [Qa, ls] = T(() => {
    try {
      const i = localStorage.getItem("juli3ta:recentlyPlayedIds"), d = i ? JSON.parse(i) : null;
      return Array.isArray(d) ? d.filter((u) => typeof u == "string").slice(0, 8) : [];
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
  const [Pt, Vr] = T(!1), [vt, Za] = T(() => /* @__PURE__ */ new Set()), [Yr, Kr] = T(!1), [xt, He] = T(!1), [cs, wa] = T("search"), [Xr, ds] = T(""), [us, ri] = T(() => {
    try {
      const i = localStorage.getItem("juli3ta:searchHistory"), d = i ? JSON.parse(i) : null;
      return Array.isArray(d) ? d.filter((u) => typeof u == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), oi = A((i) => {
    const d = i.trim();
    d.length < 2 || ri((u) => {
      const b = [d, ...u.filter((E) => E.toLowerCase() !== d.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(b));
      } catch {
      }
      return b;
    });
  }, []), [ka, ps] = T("tracks"), [ms, Qr] = T([]), [hs, er] = T(!1), [gs, wt] = T(null), [ys, ii] = T(null), [fs, ni] = T([]), [bs, si] = T([]), [Sa, vs] = T({}), [xs, li] = T(() => /* @__PURE__ */ new Set()), [ws, ci] = T(null), [di, ui] = T([]), [we, Zr] = T([]), [ra, eo] = T(() => /* @__PURE__ */ new Set()), [Ta, oa] = T([]), [pi, ks] = T(!1), [to, mi] = T(""), [Ss, hi] = T(!1), gi = te(/* @__PURE__ */ new Map()), ao = te(/* @__PURE__ */ new Map()), jt = te(Sa), tr = te(/* @__PURE__ */ new Map()), ar = te(0), [rr, _a] = T(null), [or, yi] = T(!1), [Na, fi] = T(Pn), [Ts, ir] = T(!1);
  W(() => {
    jt.current = Sa;
  }, [Sa]), W(() => {
    let i = !1;
    return (async () => {
      try {
        await Promise.all([
          Zu(),
          Pd()
        ]);
      } catch (Y) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", Y);
      }
      await fd().catch((Y) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", Y);
      });
      const [d, u, b, E, M, D, U, ge] = await Promise.allSettled([
        ed(),
        vo(),
        ud(),
        qi(),
        gd(),
        bd("track"),
        Ia(),
        Id()
      ]);
      if (i) return;
      const Pe = d.status === "fulfilled" ? d.value : [], ze = u.status === "fulfilled" ? u.value.tracks.map((Y) => ({ ...Y, source: "juli3ta" })) : [];
      u.status === "fulfilled" && (_a(u.value.rootPath), ce((Y) => Y?.startsWith("Real file library unavailable") ? null : Y)), d.status === "fulfilled" ? Ve(Ra(ze, Pe)) : (console.error("[Juli3ta] listTracks failed:", d.reason), Ve(Ra(ze)), ce("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), u.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", u.reason), ce("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const Ke = new Set(ze.map((Y) => Y.id)), Ze = new Set(Pe.map((Y) => Y.id)), je = Pe.filter((Y) => !Ke.has(Y.id) && fu(Y)), Fe = ze.filter((Y) => !Ze.has(Y.id));
      (je.length > 0 || Fe.length > 0) && (async () => {
        const Y = [];
        for (const me of je)
          try {
            const Dt = await Qi({ ...me, source: "juli3ta" });
            Y.push({ ...me, ...Dt, source: "juli3ta" });
          } catch (Dt) {
            console.warn("[Juli3ta] host file backfill failed:", me.id, Dt);
          }
        for (const me of Fe)
          try {
            await zr({ ...me, source: "juli3ta" });
          } catch (Dt) {
            console.warn("[Juli3ta] standalone cache backfill failed:", me.id, Dt);
          }
        !i && (Y.length > 0 || Fe.length > 0) && (Ve((me) => Ra(Y, Fe, me)), vo().then((me) => _a(me.rootPath)).catch(() => {
        }));
      })(), b.status === "fulfilled" && fi(b.value), E.status === "fulfilled" && Fr(E.value);
      const Z = {
        version: 1,
        updatedAt: Date.now(),
        tracks: M.status === "fulfilled" ? M.value : [],
        favorites: D.status === "fulfilled" ? D.value : [],
        playlists: U.status === "fulfilled" ? U.value : []
      }, se = ge.status === "fulfilled" ? ge.value : null, ke = Ld(), ue = Bi(
        Bi(Z, ke),
        se
      );
      await Td(ue).catch((Y) => {
        console.warn("[Juli3ta] music library durable import failed:", Y);
      }), !i && (Zr(ue.tracks), eo(new Set(ue.favorites.filter((Y) => Y.kind === "track").map((Y) => Y.entityId))), oa(ue.playlists), ks(!0), Wi(ue).catch((Y) => {
        console.warn("[Juli3ta] music library durable save failed:", Y);
      }));
    })(), () => {
      i = !0;
    };
  }, []), W(() => {
    if (!pi) return;
    const i = Md(we, ra, Ta), d = window.setTimeout(() => {
      Wi(i).catch((u) => {
        console.warn("[Juli3ta] music library durable save failed:", u);
      });
    }, 450);
    return () => window.clearTimeout(d);
  }, [pi, we, ra, Ta]), W(() => {
    if (!aa?.startsWith("Real file library unavailable")) return;
    let i = !1;
    const d = async () => {
      try {
        const b = await vo();
        if (i) return;
        _a(b.rootPath), Ve((E) => Ra(b.tracks.map((M) => ({ ...M, source: "juli3ta" })), E)), ce((E) => E?.startsWith("Real file library unavailable") ? null : E);
      } catch {
      }
    }, u = window.setInterval(d, 4e3);
    return d(), () => {
      i = !0, window.clearInterval(u);
    };
  }, [aa]);
  const ro = A(async (i) => {
    try {
      const d = await Qi({ ...i, source: "juli3ta" }), u = { ...i, ...d, source: "juli3ta" };
      return await zr(u), _a(d.folderPath?.split("/").slice(0, -1).join("/") || rr), ce(null), Ve((b) => Ra([u], b)), !0;
    } catch (d) {
      const u = d.message || "Real file save failed";
      return ce(`Couldn't save "${i.title}" as a real file — ${u}.`), !1;
    }
  }, [rr]), _s = A(async (i) => {
    fi(i);
    try {
      await pd(i);
    } catch (d) {
      console.warn("Settings save failed:", d);
    }
  }, []), nr = be(
    () => r.state ? ep(r.state.agents, r.state.included) : [],
    [r.state]
  ), [sr, Ns] = T([]), [Cs, Es] = T(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [As, bi] = T(!0), G = sr.find((i) => i.podId === Cs) ?? sr[0] ?? null, oo = A(async () => {
    bi(!0);
    const i = new AbortController(), d = await op(nr, i.signal);
    Ns(d), bi(!1);
  }, [nr]);
  W(() => {
    nr.length !== 0 && queueMicrotask(() => void oo());
  }, [nr, oo]);
  const Ms = A((i) => {
    Es(i);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", i);
    } catch {
    }
  }, []), Ca = te(null), Ea = te(null), lr = te(!1);
  W(() => () => {
    Ca.current?.abort(), Object.keys(De.current).forEach((i) => {
      De.current[i]?.abort();
    });
  }, []), W(() => {
    if (ea === "idle") {
      queueMicrotask(() => {
        ta(0), ei(0);
      });
      return;
    }
    const i = Date.now(), d = () => {
      const E = (Date.now() - i) / 1e3, M = ea === "lyrics" ? Math.min(0.95, E / 5) : Math.min(0.95, 1 - Math.exp(-E / 35));
      ta(M);
    };
    d();
    const u = setInterval(d, 250), b = setInterval(() => ei((E) => E + 1), 4500);
    return () => {
      clearInterval(u), clearInterval(b);
    };
  }, [ea]);
  const Aa = A((i) => {
    if (!i.lyricsPreview) return null;
    const d = n.ensureUserFolder("Music");
    if (!d) return null;
    const u = `${wr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, b = n.findChildByName(d, u);
    return b ? (n.writeFile(b.id, i.lyricsPreview), b.id) : n.createFile(d, u, i.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [n]), vi = A((i) => {
    if (!i.audioDataUrl) return null;
    const d = n.ensureUserFolder("Music");
    if (!d) return null;
    const u = `${wr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, b = n.findChildByName(d, u);
    return b ? b.id : n.createFile(d, u, "", {
      mimeType: "audio/mpeg",
      refTrackId: i.id
    });
  }, [n]), Ls = A(async () => {
    if (!G) {
      J(a("musiccreator.error.noPod"));
      return;
    }
    if (Object.values(Xe.current).some(Boolean) || qe || Nt) {
      J("Finish the active AI helper before generating.");
      return;
    }
    if (p === "restyle" && !_e) {
      J(ne ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (p === "restyle" && _e) {
      const d = Rr(_e), u = f ?? (d !== null ? d / 1e3 : null), b = V ?? u;
      if (u !== null && u < St) {
        J(`Reference sample is only ${u.toFixed(1)} s. MiniMax Restyle needs at least ${St} s of real source audio; choose a longer song or a full YouTube/library source.`);
        return;
      }
      if (u !== null && b !== null && b > 60 && u < an) {
        J(`Reference sample is only ${u.toFixed(1)} s from a ${Math.round(b)} s source. Clear it and re-pick; Restyle needs a representative ~60 s window to preserve the song.`);
        return;
      }
    }
    if (lr.current) return;
    lr.current = !0, J(null), Xt(), Ca.current?.abort();
    const i = new AbortController();
    Ca.current = i;
    try {
      const d = Na.overridesByEndpoint[G.url] ?? {}, u = {
        ...G,
        models: {
          music: d.music || G.models.music,
          cover: d.cover || G.models.cover,
          lyrics: d.lyrics || G.models.lyrics,
          lyricsBackup: d.lyricsBackup || G.models.lyricsBackup,
          image: d.image || G.models.image,
          allIds: G.models.allIds
        }
      }, b = Ir(ae);
      let E = k.trim(), M = R.trim(), D = S.trim(), U = null;
      if (!E && !z && !(p === "restyle" && !E)) {
        if (!N.trim() && !(ae.intent ?? "").trim()) {
          J(a("musiccreator.error.noInput"));
          return;
        }
        Oe("lyrics");
        const pe = [];
        N.trim() && pe.push(N.trim());
        const et = (ae.intent ?? "").trim();
        et && pe.push(`User intent (must respect): ${et}`), b && pe.push(`Musical context: ${b}`), I && pe.push(`Structure: ${I.prompt}`);
        const za = pe.join(`

`);
        U = await on(u, za, i.signal), E = U.lyrics, M || (M = U.song_title), D || (D = U.style_tags);
      } else !E && z && p !== "restyle" && (E = `[Intro]
[Instrumental]
[Outro]`);
      if (U && (H(U.lyrics), M === "Untitled" && (M = ""), M && !R.trim() && B(M), D && !S.trim() && L(D), U.usedFallback && ce(
        `Primary lyrics model errored — used backup chat model "${u.models.lyricsBackup ?? "unknown"}" instead.`
      )), E.length > zt) {
        J(a("musiccreator.error.lyricsTooLong", { count: E.length, max: zt })), Oe("idle");
        return;
      }
      if (p === "restyle" && E.trim() && E.trim().length > tn) {
        J(`Restyle lyrics must be ${tn} characters or fewer for MiniMax cover mode. Shorten them or clear the Lyrics box to let MiniMax extract the original lyrics from the reference audio.`), Oe("idle");
        return;
      }
      if (!M.trim() && p === "restyle" && (M = Ou(ht), M && !R.trim() && B(M)), M.trim() || (M = Uu(E, N, D || S), M && M !== "Untitled" && !R.trim() && B(M)), p === "lyricsOnly") {
        const pe = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (M || a("musiccreator.track.untitled")) + " (lyrics)",
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
          specsJson: ca(ae) > 0 ? JSON.stringify(ae) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: O,
          theme: N
        };
        await ro(pe) && (Aa(pe), C(pe.id), He(!1), v("player")), Oe("idle"), ta(0);
        return;
      }
      if (p === "restyle" && !_e) {
        J(ne ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), Oe("idle");
        return;
      }
      if (p === "restyle" && _e) {
        const pe = Rr(_e), et = f ?? (pe !== null ? pe / 1e3 : null), za = V ?? et;
        if (et !== null && et < St) {
          J(`Reference sample is only ${et.toFixed(1)} s. MiniMax Restyle needs at least ${St} s of real source audio; choose a longer song or a full YouTube/library source.`), Oe("idle");
          return;
        }
        if (et !== null && za !== null && za > 60 && et < an) {
          J(`Reference sample is only ${et.toFixed(1)} s from a ${Math.round(za)} s source. Clear it and re-pick; Restyle needs a representative ~60 s window to preserve the song.`), Oe("idle");
          return;
        }
      }
      Oe("song");
      const Pe = [
        D,
        b,
        p === "restyle" && z ? "instrumental cover, no lead vocal" : ""
      ].filter((pe) => pe && pe.length > 0).join(". "), ze = p === "restyle" ? $u(Pe) : Pe, Ke = cp(
        u,
        {
          lyrics: E,
          prompt: ze || void 0,
          instrumental: z,
          refAudioBase64: p === "restyle" ? _e ?? void 0 : void 0,
          refAudioDurationSec: p === "restyle" ? f : null
        },
        i.signal
      ), Ze = It && !O && !!u.models.image, je = O, Fe = Ze ? Io(
        u,
        (q.trim() || Er(M, N, D || S)).slice(0, 1500),
        i.signal
      ).catch((pe) => {
        if (pe.name === "AbortError") throw pe;
        return console.warn("[Juli3ta] Cover-art generation failed:", pe), ce(`Cover-art skipped: ${pe.message}`), je;
      }) : Promise.resolve(je), Z = await Promise.allSettled([Ke, Fe]), se = Z[0], ke = Z[1];
      if (se.status === "rejected")
        throw i.abort(), se.reason;
      const ue = se.value, Y = ke.status === "fulfilled" ? ke.value : je;
      if (!ue?.data?.audio || typeof ue.data.audio != "string" || ue.data.audio.length < 100) {
        const pe = ue?.trace_id ? ` (trace ${ue.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${pe}. Try again or pick a different model in Settings.`);
      }
      const me = `data:audio/mpeg;base64,${ue.data.audio}`, Dt = p === "restyle" ? " (restyle)" : "", st = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (M || a("musiccreator.track.untitled")) + Dt,
        styleTags: D || "—",
        lyricsPreview: E,
        // store the full text — used by Load
        durationMs: ue.data.duration_ms ?? 0,
        bitrate: ue.data.bitrate ?? 0,
        sampleRate: ue.data.sample_rate ?? 0,
        sizeBytes: ue.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: me,
        specsJson: ca(ae) > 0 ? JSON.stringify(ae) : "",
        coverDataUrl: Y,
        theme: N
      };
      de(Y), console.info("[Juli3ta] Saving generated song:", { id: st.id, title: st.title, durationMs: st.durationMs, sizeBytes: st.sizeBytes }), await ro(st) && (C(st.id), He(!1), v("player"), vi(st), Aa(st), p === "restyle" && _e && os({
        trackId: st.id,
        audioSrc: `data:audio/wav;base64,${_e}`,
        sourceLabel: ht || "Original"
      }), h({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: st.title }),
        isRead: !1
      })), Oe("idle"), ta(0);
    } catch (d) {
      if (d.name === "AbortError") {
        Oe("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", d), J(d.message || "Generation failed — check the console for details."), Oe("idle"), ta(0);
    } finally {
      lr.current = !1;
    }
  }, [
    G,
    N,
    k,
    R,
    S,
    ae,
    I,
    z,
    p,
    _e,
    ht,
    f,
    V,
    ne,
    a,
    ro,
    Na,
    vi,
    Aa,
    h,
    Xt,
    It,
    O,
    q,
    qe,
    Nt
  ]), zs = () => Wo.current?.click(), cr = te(0), At = A(async (i, d, u = {}) => {
    const b = ++cr.current, E = () => cr.current === b;
    J(null), gt(!0), Ja({
      stage: "loading",
      progress: 0.04,
      message: "Preparing cover reference from the song…"
    }), Ge(null), j(null), le(null), Qe(d), Ue(null);
    const M = typeof i == "string" && /^https?:\/\//i.test(i), D = (U) => {
      E() && Ja(U);
    };
    try {
      if (rt === "mix") {
        const U = await cu(i, { onProgress: D });
        if (!E()) return;
        Ge(U.base64), j(U.durationSec), le(U.sourceDurationSec);
        const ge = U.sourceDurationSec / 60;
        if (U.segments.length > 1) {
          const Pe = U.segments.map((ze) => `${Math.floor(ze.startSec / 60)}:${Math.floor(ze.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          Ue(
            `Mixed ${U.segments.length} iconic moments (${U.durationSec.toFixed(0)} s) from ${ge.toFixed(1)} min — at ${Pe}`
          );
        } else
          Ue(`Using whole clip (${U.durationSec.toFixed(0)} s)`);
      } else {
        if (u.videoId)
          try {
            D({
              stage: "loading",
              progress: 0.12,
              message: "Creating fast server-side reference cut…"
            });
            const Ke = await fetch(
              `/api/music/reference-sample?videoId=${encodeURIComponent(u.videoId)}&durationSec=60`
            );
            if (!Ke.ok) throw new Error(`reference sample HTTP ${Ke.status}`);
            const Ze = await Ke.json();
            if (!Ze.base64) throw new Error("reference sample response missing audio");
            if (!E()) return;
            D({
              stage: "done",
              progress: 1,
              message: "Reference sample ready."
            });
            const je = Ze.durationSec ?? 60, Fe = Ze.sourceDurationSec ?? je;
            Ge(Ze.base64), j(je), le(Fe);
            const Z = Ze.startSec ?? 0, se = Fe / 60, ke = Z / 60, ue = Z < 60 ? `${Z.toFixed(1)} s` : `${Math.floor(ke)}:${Math.floor(Z % 60).toString().padStart(2, "0")}`;
            Ue(
              Fe <= je + 0.5 ? `Using whole clip (${je.toFixed(0)} s)` : `Fast-cut cover reference ${je.toFixed(0)} s starting at ${ue} of ${se.toFixed(1)} min`
            );
            return;
          } catch {
            D({
              stage: "loading",
              progress: 0.08,
              message: "Fast server cut unavailable — using browser fallback…"
            });
          }
        const U = await Yn(i, {
          fastRemote: M,
          onProgress: D
        });
        if (!E()) return;
        Ge(U.base64), j(U.durationSec), le(U.sourceDurationSec);
        const ge = U.sourceDurationSec / 60, Pe = U.startSec / 60, ze = U.startSec < 60 ? `${U.startSec.toFixed(1)} s` : `${Math.floor(Pe)}:${Math.floor(U.startSec % 60).toString().padStart(2, "0")}`;
        Ue(
          U.sourceDurationSec <= U.durationSec + 0.5 ? `Using whole clip (${U.durationSec.toFixed(0)} s)` : `Auto-picked cover reference ${U.durationSec.toFixed(0)} s starting at ${ze} of ${ge.toFixed(1)} min`
        );
      }
    } catch (U) {
      if (!E()) return;
      J(U.message || "Could not analyze that audio."), Ge(null), j(null), le(null), Qe(null);
    } finally {
      E() && (gt(!1), Ja(null));
    }
  }, [rt]), Is = async () => {
    fa(null);
    try {
      let i;
      if (ft === "tab") {
        const E = navigator.mediaDevices;
        if (!E.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        i = await E.getDisplayMedia({ video: !0, audio: !0 });
        for (const M of i.getVideoTracks())
          M.stop(), i.removeTrack(M);
        if (i.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        i = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Zt.current = i;
      const u = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((E) => MediaRecorder.isTypeSupported(E)) || "", b = new MediaRecorder(i, u ? { mimeType: u } : void 0);
      Ya.current = [], b.ondataavailable = (E) => {
        E.data && E.data.size > 0 && Ya.current.push(E.data);
      }, b.onstop = async () => {
        try {
          const E = new Blob(Ya.current, {
            type: Ya.current[0]?.type || u || "audio/webm"
          });
          if (E.size === 0) {
            fa("Recording was empty.");
            return;
          }
          const M = new FileReader();
          M.onerror = () => fa("Could not read the recording."), M.onload = () => {
            const D = typeof M.result == "string" ? M.result : "", U = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${ft === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - qr.current,
              mimeType: E.type || u || "audio/webm",
              audioDataUrl: D,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await Bn(U), Fr((ge) => [U, ...ge]);
              } catch (ge) {
                console.warn("Recording save failed", ge), fa("Could not save the recording. Try again.");
              }
            })(), Va(!1), At(E, U.name);
          }, M.readAsDataURL(E);
        } finally {
          Zt.current?.getTracks().forEach((E) => E.stop()), Zt.current = null;
        }
      }, b.start(250), Qo.current = b, qr.current = Date.now(), Ko(0), Wr(!0), ba.current = setInterval(() => {
        Ko(Date.now() - qr.current);
      }, 100);
    } catch (i) {
      fa(i.message || "Could not start recording."), Zt.current?.getTracks().forEach((d) => d.stop()), Zt.current = null, Wr(!1);
    }
  }, Rs = () => {
    const i = Qo.current;
    i && i.state !== "inactive" && i.stop(), ba.current && clearInterval(ba.current), Wr(!1);
  };
  W(() => () => {
    Zt.current?.getTracks().forEach((i) => i.stop()), ba.current && clearInterval(ba.current);
  }, []);
  const Ps = (i) => {
    const d = i.target.files?.[0];
    if (i.target.value = "", !!d) {
      if (d.size > 50 * 1024 * 1024) {
        J("Reference audio is too big. Max 50 MB.");
        return;
      }
      At(d, d.name);
    }
  }, js = (i) => {
    ya(!1), At(i.audioDataUrl, i.name);
  }, Ds = () => {
    ya(!0), qi().then((i) => Fr(i)).catch(() => {
    });
  }, Us = () => Ga(!0), Os = (i) => {
    if (Ga(!1), !i.audioDataUrl) return;
    const d = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    if (i.durationMs > 0 && i.durationMs / 1e3 < St) {
      J(`"${d}" is only ${(i.durationMs / 1e3).toFixed(1)} s. MiniMax Restyle needs at least ${St} s of real song audio; choose a longer track or a YouTube/library source.`);
      return;
    }
    At(i.audioDataUrl, `${d}.mp3`);
  }, $s = () => {
    cr.current += 1, gt(!1), Ge(null), j(null), le(null), Qe(null), Ue(null), Ja(null);
  }, Hs = () => {
    Ca.current?.abort(), Oe("idle");
  }, Mt = A(async (i, d, u) => {
    if (!G) throw new Error("No endpoint connected");
    const b = (Z) => {
      const se = Z, ke = se.choices?.[0], ue = [
        ke?.message?.content,
        ke?.delta?.content,
        ke?.text,
        se.output_text
      ];
      for (const Y of ue)
        if (typeof Y == "string" && Y.trim().length > 0) return Y.trim();
      return "";
    }, E = (Z) => !/music|cover|tts|speech|audio|stt|transcribe|whisper|embed|image|vision|diffusion|dall-?e|flux|sdxl|rerank/i.test(Z), M = /* @__PURE__ */ new Set(), D = [], U = (Z) => {
      Z && E(Z) && !M.has(Z) && (M.add(Z), D.push(Z));
    };
    if (U(G.models.lyricsBackup), G.models.allIds.filter(E).forEach(U), D.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const ge = typeof d == "string" ? d : JSON.stringify(d), Pe = u?.temperature ?? 0.5, ze = Math.max(u?.maxTokens ?? 800, 400), Ke = (Z) => {
      const se = Z.toLowerCase();
      return /^minimax\/ail-compound-minimax$/.test(se) ? 10 : /^minimax\/ail-balanced$/.test(se) ? 20 : /^minimax\/ail-kimi$/.test(se) ? 30 : /^moonshot\/ail-balanced$/.test(se) ? 60 : /^moonshot\/ail-compound$/.test(se) ? 70 : /^(deepseek\/)?ail-fast$/.test(se) ? 85 : /^(deepseek\/)?ail-balanced$/.test(se) ? 86 : /^(ail-compound|moonshot\/ail-kimi|ail-kimi|ail-kimi-strict|moonshot\/ail-kimi-strict)$/.test(se) ? 90 : /search/.test(se) ? 100 : 80;
    }, Ze = (Z) => /^minimax\/ail-compound$/i.test(Z) || /^ail-compound-minimax$/i.test(Z);
    D.sort((Z, se) => Ke(Z) - Ke(se));
    const je = D.filter((Z) => !Ze(Z)), Fe = 45e3;
    return Or(je, async (Z) => {
      const se = ha(u?.signal, Fe);
      let ke;
      try {
        ke = await ma(G, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: Z,
            messages: [
              { role: "system", content: i },
              { role: "user", content: ge }
            ],
            temperature: Pe,
            max_tokens: ze
          }),
          signal: se.signal
        });
      } catch (me) {
        throw me.name === "TimeoutError" ? new Error(`AI assist timed out after ${Fe / 1e3}s.`) : me;
      } finally {
        se.dispose();
      }
      if (!ke.ok) {
        const me = await ke.text().catch(() => "");
        throw ke.status === 400 && /web_search|not support|unsupported|invalid params/i.test(me) ? new Te(502, me, `AI assist model ${Z} rejected provider params: ${me.slice(0, 200)}`) : new Te(ke.status, me, `AI assist HTTP ${ke.status}: ${me.slice(0, 200)}`);
      }
      const ue = await ke.json(), Y = b(ue);
      if (!Y)
        throw console.warn("[Juli3ta] empty AI assist content from", Z, ue), new Te(502, "", `Model "${Z}" returned empty content`);
      return Y.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [G]), Fs = A(async () => {
    if (!G) return;
    const i = Ce("specs");
    if (i) {
      Ct(!0), J(null);
      try {
        const u = await Mt(`You are a music-production assistant. Given a theme, style, and (optionally) lyrics, return ONE JSON object that fills in optimal Track Specs for the song.

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
          theme: N || null,
          style: S || null,
          lyrics: k ? k.slice(0, 1500) : null,
          existing_specs: ca(ae) > 0 ? ae : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: i.signal
        }), b = Zn(u) ?? u;
        let E;
        try {
          E = JSON.parse(b);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${u.slice(0, 160)}`);
        }
        if (i.signal.aborted) return;
        at((M) => ({ ...E, intent: M.intent }));
      } catch (d) {
        if (la(d)) return;
        J(d.message || "Optimize failed.");
      } finally {
        Ee("specs", i), Ct(!1);
      }
    }
  }, [G, N, S, k, ae, Mt, Ce, Ee]), xi = A(async () => {
    if (!G) return;
    if (!G.models.image) {
      J(`This endpoint (${G.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (qe) return;
    const i = Ce("cover");
    if (!i) return;
    const d = i.signal;
    Yt(!0), J(null);
    try {
      const u = (q.trim() || Er(R, N, S)).slice(0, 1500), b = await Io(G, u, d);
      if (d.aborted) return;
      de(b), Me && Ea.current?.(Me, b);
    } catch (u) {
      if (la(u)) return;
      J(u.message || "Cover-art generation failed.");
    } finally {
      Ee("cover", i), Yt(!1);
    }
  }, [G, q, R, N, S, qe, Me, Ce, Ee]), wi = A((i) => {
    if (!i.type.startsWith("image/")) {
      J("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (i.size > 4 * 1024 * 1024) {
      J("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const d = new FileReader();
    d.onerror = () => J("Could not read that image file."), d.onload = () => {
      const u = d.result;
      typeof u == "string" && u.startsWith("data:image/") && (de(u), Me && Ea.current?.(Me, u));
    }, d.readAsDataURL(i);
  }, [Me]), Bs = A(async () => {
    const i = Ce("theme");
    if (i) {
      J(null);
      try {
        const u = await Mt("You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.", {
          style: S || "pop",
          existing_theme: N || null
        }, { temperature: 0.85, maxTokens: 200, signal: i.signal });
        if (i.signal.aborted) return;
        P(u);
      } catch (d) {
        if (la(d)) return;
        J(d.message || "Theme inspiration failed.");
      } finally {
        Ee("theme", i);
      }
    }
  }, [Ce, Ee, Mt, S, N]), Ws = A(async () => {
    const i = Ce("style");
    if (i) {
      J(null);
      try {
        const u = await Mt('You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".', {
          theme: N || "a quiet evening",
          existing_style: S || null
        }, { temperature: 0.7, maxTokens: 120, signal: i.signal });
        if (i.signal.aborted) return;
        L(u.replace(/^["']|["']$/g, ""));
      } catch (d) {
        if (la(d)) return;
        J(d.message || "Style suggestion failed.");
      } finally {
        Ee("style", i);
      }
    }
  }, [Ce, Ee, Mt, N, S]), qs = A(async () => {
    if (!G || z) return;
    const i = (ae.intent ?? "").trim();
    if (!N.trim() && !i) {
      J(a("musiccreator.error.noInput"));
      return;
    }
    const d = Ce("lyrics");
    if (d) {
      J(null);
      try {
        const u = Na.overridesByEndpoint[G.url] ?? {}, b = {
          ...G,
          models: {
            music: u.music || G.models.music,
            cover: u.cover || G.models.cover,
            lyrics: u.lyrics || G.models.lyrics,
            lyricsBackup: u.lyricsBackup || G.models.lyricsBackup,
            image: u.image || G.models.image,
            allIds: G.models.allIds
          }
        }, E = Ir(ae), M = [];
        N.trim() && M.push(N.trim()), i && M.push(`User intent (must respect): ${i}`), E && M.push(`Musical context: ${E}`), I && M.push(`Structure: ${I.prompt}`);
        const D = await on(b, M.join(`

`), d.signal);
        if (d.signal.aborted) return;
        if (D.lyrics.length > zt) {
          J(a("musiccreator.error.lyricsTooLong", { count: D.lyrics.length, max: zt }));
          return;
        }
        H(D.lyrics);
        const U = D.song_title === "Untitled" ? "" : D.song_title;
        U && !R.trim() && B(U), D.style_tags && !S.trim() && L(D.style_tags), D.usedFallback && ce(
          `Primary lyrics model errored — used backup chat model "${b.models.lyricsBackup ?? "unknown"}" instead.`
        );
      } catch (u) {
        if (la(u)) return;
        J(u.message || "Lyrics generation failed.");
      } finally {
        Ee("lyrics", d);
      }
    }
  }, [G, z, ae, N, I, Na, Ce, Ee, a, R, S]), Js = A(async () => {
    if (!k.trim()) {
      J("Nothing to polish — write some lyrics first.");
      return;
    }
    const i = Ce("lyrics");
    if (i) {
      J(null);
      try {
        const u = await Mt("You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.", {
          style: S || null,
          lyrics: k
        }, { temperature: 0.6, maxTokens: 1200, signal: i.signal });
        if (i.signal.aborted) return;
        if (u.length > zt) {
          J(`Polished lyrics exceeded ${zt} chars (${u.length}). Trimming the original first might help.`);
          return;
        }
        H(u);
      } catch (d) {
        if (la(d)) return;
        J(d.message || "Lyrics polish failed.");
      } finally {
        Ee("lyrics", i);
      }
    }
  }, [Ce, Ee, Mt, S, k]), Gs = (i) => {
    L((d) => d ? `${d}, ${i.toLowerCase()}` : i.toLowerCase());
  }, io = () => {
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
  }, Vs = () => {
    const i = _ ?? $.state.trackId ?? nt[0]?.id ?? we[0]?.id ?? null, d = i ? Le.find((u) => u.id === i) ?? null : null;
    d && ia(d), v("creator"), io();
  }, ki = A((i) => {
    Ve((d) => d.filter((u) => u.id !== i)), ad(i).catch((d) => console.warn("Track cache delete failed:", d)), gu(i).catch((d) => console.warn("Track file delete failed:", d));
  }, []), Ys = A(async () => {
    if (!or) {
      yi(!0);
      try {
        const i = await yu();
        _a(i), h({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: i,
          isRead: !1
        });
      } catch (i) {
        ce(`Could not open JULI3TA folder — ${i.message || i}`);
      } finally {
        yi(!1);
      }
    }
  }, [h, or]), dr = A(async (i, d) => {
    const u = d.trim().slice(0, 200) || "Untitled";
    Ve((b) => b.map((E) => E.id === i ? { ...E, title: u } : E));
    try {
      await rd(i, u), ce(null);
    } catch (b) {
      const E = b.message || "Database write failed";
      ce(`Couldn't rename track — ${E}.`);
    }
  }, []), no = A(async (i, d) => {
    Ve((u) => u.map((b) => b.id === i ? { ...b, coverDataUrl: d } : b));
    try {
      await od(i, d), ce(null);
    } catch (u) {
      const b = u.message || "Database write failed";
      ce(`Couldn't save cover art — ${b}.`);
    }
  }, []);
  W(() => {
    Ea.current = no;
  }, [no]);
  const Si = A(async (i, d) => {
    Ve((u) => u.map((b) => b.id === i ? { ...b, styleTags: d || "—" } : b));
    try {
      await id(i, d), ce(null);
    } catch (u) {
      const b = u.message || "Database write failed";
      ce(`Couldn't save style — ${b}.`);
    }
  }, []), Ti = A(async (i, d) => {
    Ve((u) => u.map((b) => b.id === i ? { ...b, lyricsPreview: d } : b));
    try {
      await nd(i, d), ce(null);
    } catch (u) {
      const b = u.message || "Database write failed";
      ce(`Couldn't save lyrics — ${b}.`);
    }
  }, []), _i = A(async (i, d) => {
    Ve((u) => u.map((b) => b.id === i ? { ...b, specsJson: d } : b));
    try {
      await sd(i, d), ce(null);
    } catch (u) {
      const b = u.message || "Database write failed";
      ce(`Couldn't save specs — ${b}.`);
    }
  }, []), Ni = A(async (i, d) => {
    Ve((u) => u.map((b) => b.id === i ? { ...b, theme: d } : b));
    try {
      await ld(i, d), ce(null);
    } catch (u) {
      const b = u.message || "Database write failed";
      ce(`Couldn't save theme — ${b}.`);
    }
  }, []);
  W(() => {
    if (!Me) return;
    const i = Me, d = setTimeout(() => {
      const u = Rt.find((ge) => ge.id === i);
      if (!u) return;
      const b = R.trim() || u.title, E = S.trim(), M = N, D = ca(ae) > 0 ? JSON.stringify(ae) : "", U = u.styleTags === "—" ? "" : u.styleTags || "";
      u.title !== b && dr(i, b), U !== E && Si(i, E), (u.lyricsPreview || "") !== k && Ti(i, k), (u.specsJson || "") !== D && _i(i, D), (u.theme || "") !== M && Ni(i, M);
    }, 600);
    return () => clearTimeout(d);
  }, [Me, R, S, N, k, ae, Rt, dr, Si, Ti, _i, Ni]);
  const [Ci, Ei] = T(null), [Ks, Ai] = T(!1), ia = A((i) => {
    H(i.lyricsPreview ?? "");
    const d = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), u = Qu(i, d, a);
    if (L(Yu(i) || u?.style || ""), P((i.theme ?? "").trim() || u?.theme || ""), B(d), he(!1), i.specsJson)
      try {
        at(JSON.parse(i.specsJson));
      } catch {
        at({});
      }
    else
      at({});
    de(i.coverDataUrl ?? ""), ee(""), Je(i.id), J(null), K(null), he(!1), Ae(i) ? i.source === "youtube" ? (x("restyle"), Ge(null), j(null), le(null), Qe(`${d}.mp3`), Ue("Resolving streamed audio…"), gt(!0), (async () => {
      try {
        const E = i.externalId || "";
        if (!E) throw new Error("Missing source identifier.");
        const M = Ft(E), D = Sa[M], U = D && Date.now() - D.resolvedAt < 5400 * 1e3 ? D.src : (await Xi(E)).proxyUrl;
        await At(U, `${d}.mp3`, { videoId: E });
      } catch (E) {
        gt(!1), Ge(null), j(null), le(null), Qe(null), Ue(null), J(`Could not load streamed track for restyle: ${E.message || "unknown error"}`);
      }
    })()) : (x("restyle"), At(i.audioDataUrl, `${d}.mp3`)) : (Ge(null), j(null), le(null), Qe(null), Ue(null), x("lyricsOnly"));
  }, [At, Sa, a]), Mi = A((i) => {
    const d = Aa(i);
    if (!d) {
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
    c({
      type: "OPEN_OR_FOCUS_WINDOW",
      appId: "texteditor",
      args: { editor: { nodeId: d } }
    });
  }, [Aa, c, h, a]), ur = A((i, d, u, b) => {
    const E = n.ensureUserFolder("Desktop");
    if (!E) return;
    const M = n.findChildByName(E, i);
    let D;
    if (M)
      u.refTrackId || n.writeFile(M.id, d), D = M.id;
    else {
      D = n.createFile(E, i, d, u);
      const U = Array.from(b).reduce((ze, Ke) => ze + Ke.charCodeAt(0), 0), ge = U % 6 + 1, Pe = Math.floor(U / 6) % 4;
      c({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: i,
          icon: qc(i),
          fileSystemNodeId: D,
          position: { x: 16 + ge * 80, y: 16 + Pe * 90 },
          isSelected: !1
        }
      });
    }
    h({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Sparkles",
      title: a("musiccreator.notify.savedToDesktopTitle"),
      message: a("musiccreator.notify.savedToDesktopBody", { name: i }),
      isRead: !1
    });
  }, [n, c, h, a]), Xs = A((i) => {
    if (!i.audioDataUrl) return;
    const d = wr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    ur(`${d}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: i.id }, i.id);
  }, [ur]), Qs = A((i) => {
    if (!i.lyricsPreview) return;
    const d = wr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    ur(`${d}.lyrics.txt`, i.lyricsPreview, { mimeType: "text/plain" }, `${i.id}-lyrics`);
  }, [ur]), Zs = A((i) => {
    He(!1), v("player"), C(i.id);
  }, []), kt = A((i) => {
    const d = i.dataTransfer.getData(Oa);
    if (!d) return null;
    try {
      return JSON.parse(d);
    } catch {
      return null;
    }
  }, []), el = A((i) => {
    const d = kt(i);
    if (d && d.lyricsPreview) {
      i.preventDefault(), H(d.lyricsPreview);
      const u = d.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), b = Cr(d.styleTags);
      !R.trim() && u && B(u), !S.trim() && b && L(b);
      return;
    }
  }, [kt, R, S]), tl = A((i) => {
    const d = kt(i), u = Cr(d?.styleTags);
    d && u && (i.preventDefault(), L((b) => b ? `${b}, ${u}` : u));
  }, [kt]), al = A((i) => {
    const d = kt(i);
    if (d) {
      i.preventDefault();
      const u = d.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), b = Cr(d.styleTags), E = b ? `Inspired by "${u}" — ${b}` : `Inspired by "${u}"`;
      P(E);
    }
  }, [kt]), rl = A((i) => {
    const d = kt(i);
    d && (i.preventDefault(), B(d.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [kt]), pr = (i) => {
    i.dataTransfer.types.includes(Oa) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
  }, Li = k.length, ol = S.length, Q = ea !== "idle", mr = Object.values(Re).some(Boolean) || qe || Nt, il = be(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            Ca.current?.abort(), Xt(), cr.current += 1, lr.current = !1, x("compose"), P(""), H(""), L(""), B(""), at({}), K(null), he(!1), de(""), ee(""), Jo(!1), Ge(null), j(null), le(null), Qe(null), Ue(null), J(null), ce(null), Oe("idle"), ta(0), Kt({ ...Da }), Yt(!1), Ct(!1), Je(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => io() },
          { id: "mode-restyle", label: "Restyle Mode", onSelect: () => x("restyle") },
          { id: "mode-lyrics", label: "Lyrics Only Mode", onSelect: () => x("lyricsOnly") }
        ]
      },
      {
        id: "view",
        label: "View",
        items: [
          { id: "view-creator", label: "Creator", onSelect: () => v("creator") },
          { id: "view-player", label: "Player", onSelect: () => v("player") },
          { id: "open-help", label: "How it works…", onSelect: () => y(!0) },
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => ir(!0) }
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
          { id: "juli3ta-help", label: "JULI3TA Help…", onSelect: () => y(!0) },
          { id: "tytus-help", label: "Tytus Help", actionId: "open-help" },
          { id: "juli3ta-about", label: `About JULI3TA v${Nr}`, onSelect: () => ir(!0) }
        ]
      }
    ]
  }), [o, Xt]);
  Hc(o?.id ?? null, il);
  const it = be(
    () => Rt.filter(zo),
    [Rt]
  ), nt = be(() => {
    let i = it;
    Ye === "songs" ? i = i.filter((u) => Ae(u) && !/\(restyle\)\s*$/i.test(u.title) && !/\(lyrics\)\s*$/i.test(u.title)) : Ye === "restyles" ? i = i.filter((u) => /\(restyle\)\s*$/i.test(u.title)) : Ye === "lyrics" && (i = i.filter((u) => !Ae(u) || /\(lyrics\)\s*$/i.test(u.title)));
    const d = $e.trim().toLowerCase();
    return d ? i.filter((u) => u.title.toLowerCase().includes(d) || u.styleTags.toLowerCase().includes(d)) : i;
  }, [it, $e, Ye]), Lt = be(() => {
    let i = we;
    bt === "favorites" && (i = i.filter((u) => ra.has(u.id)));
    const d = $e.trim().toLowerCase();
    return d ? i.filter((u) => u.title.toLowerCase().includes(d) || (u.artist || "").toLowerCase().includes(d) || (u.album || "").toLowerCase().includes(d)) : i;
  }, [we, bt, $e, ra]), hr = A((i, d) => {
    const u = Ft(i), b = jt.current[u];
    if (!d?.force && b && Date.now() - b.resolvedAt < 5400 * 1e3)
      return Promise.resolve(b.src);
    const E = tr.current.get(i);
    if (!d?.force && E) return E;
    li((D) => new Set(D).add(i));
    const M = Xi(i).then((D) => {
      const U = { src: D.proxyUrl, resolvedAt: Date.now() };
      return jt.current = { ...jt.current, [u]: U }, vs((ge) => ({ ...ge, [u]: U })), D.proxyUrl;
    }).finally(() => {
      tr.current.delete(i), li((D) => {
        const U = new Set(D);
        return U.delete(i), U;
      });
    });
    return tr.current.set(i, M), M;
  }, []), gr = A((i) => {
    const d = Ft(i), u = jt.current[d];
    u && Date.now() - u.resolvedAt < 5400 * 1e3 || tr.current.has(i) || ar.current >= Wu || (ar.current += 1, hr(i).catch(() => {
    }).finally(() => {
      ar.current = Math.max(0, ar.current - 1);
    }));
  }, [hr]), Ma = A((i) => {
    i.slice(0, Bu).forEach((d) => {
      gr(d.id);
    });
  }, [gr]);
  W(() => {
    if (!xt) return;
    const i = new AbortController();
    return Promise.allSettled([
      du(i.signal),
      Yi(i.signal),
      Ki(i.signal)
    ]).then(([d, u, b]) => {
      d.status === "fulfilled" ? ii(d.value) : ii(null), u.status === "fulfilled" && ni(u.value), b.status === "fulfilled" && si(b.value);
    }), () => i.abort();
  }, [xt]), W(() => {
    if (!xt) return;
    const i = (d) => {
      d.key === "Escape" && He(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [xt]), W(() => {
    if (!xt) return;
    const i = Xr.trim();
    if (i.length < 2) {
      const M = window.setTimeout(() => {
        Qr([]), wt(null), er(!1);
      }, 0);
      return () => window.clearTimeout(M);
    }
    const d = `${ka}:${i.toLowerCase()}`, u = gi.current.get(d);
    if (u) {
      Qr(u), er(!1), wt(null), Ma(u);
      return;
    }
    const b = new AbortController(), E = setTimeout(() => {
      er(!0), wt(null);
      let M = ao.current.get(d);
      M || (M = hu(i, ka, 20, b.signal).then((D) => ka === "playlists" ? D.results.playlists : D.results.tracks).catch(() => mu(i, 20, b.signal)).finally(() => {
        ao.current.delete(d);
      }), ao.current.set(d, M)), M.then((D) => {
        gi.current.set(d, D), Qr(D), Ma(D), D.length > 0 && oi(i);
      }).catch((D) => {
        b.signal.aborted || wt(D.message || "Music search failed.");
      }).finally(() => {
        b.signal.aborted || er(!1);
      });
    }, 120);
    return () => {
      b.abort(), clearTimeout(E);
    };
  }, [Xr, ka, xt, Ma, oi]);
  const yr = A(async () => {
    const [i, d] = await Promise.allSettled([
      Yi(),
      Ki()
    ]);
    i.status === "fulfilled" && ni(i.value), d.status === "fulfilled" && si(d.value);
  }, []), nl = A(async (i, d) => {
    await uu(i, d), await yr(), h({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${i} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [h, yr]), sl = A(async (i) => {
    await pu(i), await yr(), h({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${i} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [h, yr]), ll = be(
    () => new Set(we.filter((i) => i.externalId).map((i) => i.externalId)),
    [we]
  ), fr = A((i, d) => {
    const u = Qn(i.title, i.channel);
    return {
      id: d?.id ?? Ft(i.id),
      title: u.song || i.title || "Untitled",
      styleTags: "",
      lyricsPreview: "",
      durationMs: i.durationMs ?? 0,
      bitrate: 0,
      sampleRate: 0,
      sizeBytes: 0,
      createdAt: Date.now(),
      audioDataUrl: d?.audioDataUrl ?? "",
      specsJson: "",
      coverDataUrl: "",
      theme: "",
      source: "youtube",
      audioKind: "remote_stream",
      externalId: i.id,
      externalUrl: `https://www.youtube.com/watch?v=${i.id}`,
      thumbnailUrl: i.thumbnailUrl || Pr(i.id),
      artist: u.artist || i.channel || "Unknown",
      album: i.channel ?? ""
    };
  }, []), cl = A(async (i, d) => {
    if (i.audioDataUrl && !d?.force) return i.audioDataUrl;
    if (!Bo(i) || !i.externalId) return i.audioDataUrl || null;
    const u = Ft(i.externalId), b = jt.current[u] ?? jt.current[i.id];
    return !d?.force && b && Date.now() - b.resolvedAt < 5400 * 1e3 ? b.src : hr(i.externalId, d);
  }, [hr]), Le = be(
    () => [...di, ...we, ...nt],
    [di, we, nt]
  );
  W(() => {
    if (!_ || Le.length === 0) return;
    Le.some((d) => d.id === _) || C(null);
  }, [_, Le]);
  const zi = te(null), $ = dp(Le, zi, cl);
  W(() => {
    const i = $.state.trackId;
    i && ls((d) => d[0] === i ? d : [i, ...d.filter((b) => b !== i)].slice(0, 8));
  }, [$.state.trackId]);
  const Ii = te(null);
  W(() => {
    const i = $.state.trackId;
    if (!i || w !== "player") return;
    const d = Ii.current !== i;
    if (d && (Ii.current = i, Jr.current = !1), _ !== i && C(i), !d || Jr.current) return;
    const u = Le.find((b) => b.id === i);
    if (u) {
      if (zo(u)) {
        Xa((b) => b === "mywork" ? b : "mywork"), nt.some((b) => b.id === i) || (ai((b) => b === "all" ? b : "all"), Ka((b) => b.trim() ? "" : b));
        return;
      }
      Xa((b) => b === "library" ? b : "library"), Lt.some((b) => b.id === i) || (Gr((b) => b === "all" ? b : "all"), Ka((b) => b.trim() ? "" : b));
    }
  }, [
    $.state.trackId,
    w,
    _,
    Le,
    nt,
    Lt
  ]), W(() => {
    if (typeof navigator > "u" || !("mediaSession" in navigator)) return;
    const i = navigator.mediaSession, d = $.state.trackId, u = d ? Le.find((b) => b.id === d) : null;
    if (!u) {
      i.metadata = null, i.playbackState = "none";
      return;
    }
    return i.metadata = new MediaMetadata({
      title: u.title || "Untitled",
      artist: u.artist || "JULI3TA",
      album: u.album || (u.styleTags && u.styleTags !== "—" ? u.styleTags : ""),
      artwork: u.coverDataUrl ? [{ src: u.coverDataUrl, sizes: "512x512", type: u.coverDataUrl.startsWith("data:image/png") ? "image/png" : "image/jpeg" }] : u.thumbnailUrl ? [{ src: u.thumbnailUrl, sizes: "256x256", type: "image/jpeg" }] : []
    }), i.playbackState = $.state.playing ? "playing" : "paused", i.setActionHandler("play", () => $.toggle(u)), i.setActionHandler("pause", () => $.pause()), i.setActionHandler("previoustrack", () => $.prev()), i.setActionHandler("nexttrack", () => $.next()), i.setActionHandler("seekbackward", (b) => {
      $.seek(Math.max(0, $.state.positionMs - (b.seekOffset ?? 10) * 1e3));
    }), i.setActionHandler("seekforward", (b) => {
      $.seek(Math.min($.state.durationMs || 0, $.state.positionMs + (b.seekOffset ?? 10) * 1e3));
    }), () => {
      i.setActionHandler("play", null), i.setActionHandler("pause", null), i.setActionHandler("previoustrack", null), i.setActionHandler("nexttrack", null), i.setActionHandler("seekbackward", null), i.setActionHandler("seekforward", null);
    };
  }, [$, $.state.trackId, $.state.playing, Le]), W(() => {
    const i = $.state.trackId;
    if (!i) return;
    const d = Le.find((M) => M.id === i);
    if (!d) return;
    const u = $.state.playing ? "▶" : "⏸", b = (d.title || "Untitled").replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), E = document.title;
    return document.title = `${u} ${b} — JULI3TA`, () => {
      document.title = E;
    };
  }, [$.state.trackId, $.state.playing, Le]), W(() => {
    if (w !== "player") return;
    const i = (d) => {
      const u = d.target;
      if (u) {
        const M = u.tagName;
        if (M === "INPUT" || M === "TEXTAREA" || M === "SELECT" || u.isContentEditable) return;
      }
      const b = $.state.trackId;
      if (!b) return;
      const E = Le.find((M) => M.id === b);
      if (E)
        switch (d.key) {
          case " ":
            d.preventDefault(), $.toggle(E);
            break;
          case "ArrowLeft":
            d.preventDefault(), $.seek(Math.max(0, $.state.positionMs - 5e3));
            break;
          case "ArrowRight":
            d.preventDefault(), $.seek(Math.min($.state.durationMs || 0, $.state.positionMs + 5e3));
            break;
          case "ArrowUp":
            d.preventDefault(), $.setVolume(Math.min(1, $.state.volume + 0.1));
            break;
          case "ArrowDown":
            d.preventDefault(), $.setVolume(Math.max(0, $.state.volume - 0.1));
            break;
        }
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [w, $, Le]), W(() => {
    const i = (d) => {
      const u = d.target;
      if (u) {
        const b = u.tagName;
        if (b === "INPUT" || b === "TEXTAREA" || b === "SELECT" || u.isContentEditable) return;
      }
      d.key === "?" || d.key === "/" && d.shiftKey ? (d.preventDefault(), Kr((b) => !b)) : d.key === "Escape" && Yr && Kr(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [Yr]);
  const dl = A((i) => {
    const d = i.items.find(Ae);
    d && (ui((u) => [
      ...i.items.filter((b) => !u.some((E) => E.id === b.id)),
      ...u
    ]), C(d.id), He(!1), v("player"), $.play(d));
  }, [$]), ul = A(async (i) => {
    await wd(i), oa(await Ia());
  }, []), pl = A((i) => {
    wt(null);
    const d = Ft(i.id), u = fr(i, { id: d });
    ui((b) => [u, ...b.filter((E) => E.id !== u.id)]), C(u.id), v("player"), $.play(u);
  }, [$, fr]), ml = A((i) => {
    gr(i.id);
  }, [gr]), hl = A(async (i) => {
    ci(i.id);
    const d = fr(i);
    try {
      await On(d), Zr((u) => [d, ...u.filter((b) => b.id !== d.id)]), C(d.id), Xa("library"), Gr("all"), Ma([i]), Ta.length > 0;
    } catch (u) {
      wt(u.message || "Could not save track.");
    } finally {
      ci(null);
    }
  }, [fr, Ma, Ta.length]), so = A((i) => {
    eo((d) => {
      const u = new Set(d);
      return u.has(i.id) ? u.delete(i.id) : u.add(i.id), u;
    }), vd({
      kind: "track",
      entityId: i.id,
      provider: i.source ?? "youtube",
      title: i.title
    }).catch((d) => console.warn("Favorite toggle failed:", d));
  }, []), gl = A(async () => {
    const i = to.trim() || "New Playlist";
    hi(!0);
    try {
      const d = await xd(i);
      oa((u) => [d, ...u]), mi("");
    } catch (d) {
      wt(d.message || "Could not create playlist.");
    } finally {
      hi(!1);
    }
  }, [to]), yl = A(async (i, d) => {
    try {
      await kd(i, d);
      const u = await Ia();
      oa(u);
    } catch (u) {
      wt(u.message || "Could not add to playlist.");
    }
  }, []), fl = A(async (i, d) => {
    try {
      await Sd(i, d);
      const u = await Ia();
      oa(u);
    } catch (u) {
      wt(u.message || "Could not remove from playlist.");
    }
  }, []), lo = A((i) => {
    Zr((d) => d.filter((u) => u.id !== i.id)), eo((d) => {
      const u = new Set(d);
      return u.delete(i.id), u;
    }), yd(i.id).then(() => Ia().then(oa)).catch((d) => console.warn("Library track delete failed:", d));
  }, []), bl = A((i) => {
    Za((d) => {
      const u = new Set(d);
      return u.has(i.id) ? u.delete(i.id) : u.add(i.id), u;
    });
  }, []), La = A(() => {
    Vr(!1), Za(/* @__PURE__ */ new Set());
  }, []);
  W(() => {
    if (!Pt) return;
    const i = (d) => {
      d.key === "Escape" && La();
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [Pt, La]), W(() => {
    xe !== "library" && (Pt || vt.size > 0) && (Vr(!1), Za(/* @__PURE__ */ new Set()));
  }, [xe, Pt, vt.size]);
  const co = A((i) => {
    C(i.id), He(!1), v("player");
  }, []), vl = A((i) => {
    ia(i), He(!1), v("creator");
  }, [ia]);
  return G ? /* @__PURE__ */ s("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
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
                    children: xe === "mywork" ? "My Work" : "Library"
                  }
                ),
                /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: xe === "mywork" ? $e.trim() || Ye !== "all" ? `${nt.length} / ${it.length}` : a(
                    it.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: it.length }
                  ) : $e.trim() || bt !== "all" ? `${Lt.length} / ${we.length}` : `${we.length} saved` }),
                  xe === "mywork" && /* @__PURE__ */ s(fe, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: Ys,
                        disabled: or,
                        className: "flex items-center justify-center transition-all",
                        style: {
                          width: 22,
                          height: 22,
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-window)",
                          color: "var(--text-secondary)",
                          opacity: or ? 0.5 : 1
                        },
                        title: rr ? `Open real folder: ${rr}` : "Open real JULI3TA folder",
                        children: /* @__PURE__ */ t(Jl, { size: 11 })
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
                              onClick: () => ti("cards"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: xa === "cards" ? "var(--bg-hover)" : "transparent",
                                color: xa === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "Cards",
                              children: /* @__PURE__ */ t(No, { size: 11 })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => ti("list"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: xa === "list" ? "var(--bg-hover)" : "transparent",
                                color: xa === "list" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "List",
                              children: /* @__PURE__ */ t(Wt, { size: 11 })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  xe === "library" && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        He(!0), wa("search");
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
                      children: /* @__PURE__ */ t(Tt, { size: 11 })
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
                { id: "mywork", label: "My Work", count: it.length },
                { id: "library", label: "Library", count: we.length }
              ].map((i) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => ss(i.id),
                  className: "flex-1 rounded-md transition-all",
                  style: {
                    height: 26,
                    fontSize: 11,
                    fontWeight: xe === i.id ? 700 : 600,
                    color: xe === i.id ? "white" : "var(--text-secondary)",
                    background: xe === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
                          opacity: xe === i.id ? 0.85 : 0.55
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
                opacity: xe === "mywork" ? it.length === 0 ? 0.4 : 1 : we.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(Tt, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: $e,
                    onChange: (i) => Ka(i.target.value),
                    placeholder: xe === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: xe === "mywork" ? it.length === 0 : we.length === 0
                  }
                ),
                $e && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Ka(""),
                    className: "opacity-60 hover:opacity-100 px-1",
                    title: "Clear search",
                    children: /* @__PURE__ */ t(Se, { size: 11 })
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
              children: xe === "mywork" ? [
                { id: "all", label: "All" },
                { id: "songs", label: "Songs" },
                { id: "restyles", label: "Restyles" },
                { id: "lyrics", label: "Lyrics" }
              ].map((i) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => ai(i.id),
                  className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                  style: {
                    height: 22,
                    fontSize: 10,
                    fontWeight: Ye === i.id ? 800 : 600,
                    color: Ye === i.id ? "white" : "var(--text-secondary)",
                    background: Ye === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: i.label
                },
                i.id
              )) : Pt ? /* @__PURE__ */ s(fe, { children: [
                /* @__PURE__ */ s("span", { style: { fontSize: 10, fontWeight: 800, color: "var(--text-primary)", flexShrink: 0 }, children: [
                  vt.size,
                  " selected"
                ] }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Za(new Set(Lt.map((i) => i.id))),
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
                    onClick: La,
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
              ] }) : /* @__PURE__ */ s(fe, { children: [
                [
                  { id: "all", label: "All" },
                  { id: "favorites", label: "Favorites" }
                ].map((i) => /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Gr(i.id),
                    className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: bt === i.id ? 800 : 600,
                      color: bt === i.id ? "white" : "var(--text-secondary)",
                      background: bt === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: i.label
                  },
                  i.id
                )),
                we.length > 0 && /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => Vr(!0),
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
                      /* @__PURE__ */ t(Cn, { size: 11 }),
                      " Select"
                    ]
                  }
                )
              ] })
            }
          ),
          xe === "mywork" ? it.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t(Wt, { size: 18, style: { color: "var(--text-disabled)" } })
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
                  /* @__PURE__ */ t(ut, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(dt, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : nt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(Tt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: $e ? a("musiccreator.gallery.searchEmpty", { q: $e }) : `No ${Ye} yet.` })
          ] }) : /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: [
            Qa.length > 0 && Ye === "all" && !$e.trim() && /* @__PURE__ */ t(
              Cp,
              {
                trackIds: Qa,
                allTracks: it,
                player: $,
                onSelect: co
              }
            ),
            xa === "list" ? /* @__PURE__ */ t(
              Tp,
              {
                tracks: nt,
                player: $,
                onLoad: ia,
                onOpenLyrics: Mi,
                onDelete: ki,
                onRename: dr
              }
            ) : nt.map((i) => /* @__PURE__ */ t(
              Np,
              {
                track: i,
                onDelete: ki,
                onLoad: ia,
                onOpenLyrics: Mi,
                onSaveSongToDesktop: Xs,
                onSaveLyricsToDesktop: Qs,
                onPlayInPlayer: Zs,
                onRename: dr,
                onEditCover: Ei,
                onSelect: co,
                selected: w === "player" && _ === i.id,
                player: $
              },
              i.id
            ))
          ] }) : (
            /* Library tab — flat slim list of saved streamed tracks. The
               rich Artists/Albums/Playlists views still live in the main
               Music pane (reachable via the search button in the header
               above) since they need more horizontal room than 260px. */
            we.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(
                "div",
                {
                  className: "flex items-center justify-center rounded-2xl mb-2",
                  style: { width: 44, height: 44, background: "var(--bg-hover)" },
                  children: /* @__PURE__ */ t(Ar, { size: 18, style: { color: "var(--text-disabled)" } })
                }
              ),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: "Your saved music lives here" }),
              /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: "Click the magnifier above to search, then add tracks you want to keep." }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    He(!0), wa("search");
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
                    /* @__PURE__ */ t(Tt, { size: 11 }),
                    " Search music"
                  ]
                }
              )
            ] }) : Lt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(Tt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: $e ? `No matches for "${$e}"` : `No ${bt} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Lt.map((i) => /* @__PURE__ */ t(
              Ep,
              {
                track: i,
                player: $,
                selected: w === "player" && _ === i.id,
                isFavorite: ra.has(i.id),
                onOpenInPlayer: co,
                onRemix: vl,
                onToggleFavorite: so,
                onRemove: lo,
                selectMode: Pt,
                checked: vt.has(i.id),
                onToggleCheck: bl
              },
              i.id
            )) })
          ),
          xe === "library" && Pt && vt.size > 0 && /* @__PURE__ */ s(
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
                      const i = Lt.filter((d) => vt.has(d.id));
                      for (const d of i) so(d);
                      La();
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
                    title: `Toggle favorite on ${vt.size} track(s)`,
                    children: [
                      /* @__PURE__ */ t(Ar, { size: 11 }),
                      " Toggle favorite"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => {
                      const i = Lt.filter((d) => vt.has(d.id));
                      for (const d of i) lo(d);
                      La();
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
                    title: `Remove ${vt.size} track(s) from Library`,
                    children: [
                      /* @__PURE__ */ t(qt, { size: 11 }),
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
              /* @__PURE__ */ t(Do, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
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
                  { id: "creator", icon: /* @__PURE__ */ t(ut, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(Ne, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
                ].map((i) => /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => v(i.id),
                    title: i.tip,
                    className: "flex items-center gap-1.5 px-3 rounded-md transition-all",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: w === i.id ? 600 : 500,
                      color: w === i.id ? "white" : "var(--text-secondary)",
                      background: w === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
              w === "player" && /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    He((i) => !i), wa("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: xt ? "white" : "var(--text-secondary)",
                    background: xt ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(Tt, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(Sp, { endpoint: G, endpoints: sr, onSwitch: Ms }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: w === "player" ? Vs : io,
                  disabled: Q,
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a(w === "player" ? "musiccreator.header.surpriseFromPlayerTitle" : "musiccreator.header.surpriseTitle"),
                  children: [
                    /* @__PURE__ */ t(Po, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => ir(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(Nn, { size: 14 })
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => y(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a("julietaHelp.title"),
                  children: /* @__PURE__ */ t(Ul, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      w === "player" && (xt ? /* @__PURE__ */ t(
        Fp,
        {
          tab: cs,
          onTabChange: wa,
          query: Xr,
          onQueryChange: ds,
          searchHistory: us,
          onClearSearchHistory: () => {
            ri([]);
            try {
              localStorage.removeItem("juli3ta:searchHistory");
            } catch {
            }
          },
          resultType: ka,
          onResultTypeChange: ps,
          results: ms,
          busy: hs,
          error: gs,
          status: ys,
          providers: fs,
          connectors: bs,
          libraryTracks: we,
          playlists: Ta,
          playlistNameDraft: to,
          playlistBusy: Ss,
          favoriteIds: ra,
          warmupIds: xs,
          addBusyId: ws,
          savedYoutubeIds: ll,
          player: $,
          onWarmResult: ml,
          onPreview: pl,
          onAdd: hl,
          onOpenTrack: (i) => {
            C(i.id), He(!1), v("player");
          },
          onToggleFavorite: so,
          onRemoveLibraryTrack: lo,
          onPlaylistNameDraftChange: mi,
          onCreatePlaylist: gl,
          onAddTrackToPlaylist: yl,
          onRemoveTrackFromPlaylist: fl,
          onPlayPlaylist: dl,
          onDeletePlaylist: ul,
          onConfigureConnector: nl,
          onDisconnectConnector: sl,
          onClose: () => He(!1)
        }
      ) : /* @__PURE__ */ t(
        Hp,
        {
          track: (() => {
            const i = _ ?? $.state.trackId ?? nt[0]?.id ?? we[0]?.id ?? null;
            return i ? Le.find((d) => d.id === i) ?? null : null;
          })(),
          player: $,
          restyleOriginal: rs,
          onSwitchToCreator: () => v("creator"),
          onSearchMusic: () => {
            v("player"), He(!0), wa("search");
          },
          onEditInCreator: (i) => {
            ia(i), v("creator");
          }
        }
      )),
      w === "creator" && /* @__PURE__ */ s(fe, { children: [
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
                { id: "compose", icon: /* @__PURE__ */ t(qa, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(Jt, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t(Mr, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((i) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => x(i.id),
                  disabled: Q,
                  title: i.tip,
                  className: "flex items-center gap-1.5 px-4 rounded-lg transition-all disabled:opacity-50",
                  style: {
                    height: 32,
                    fontSize: 12,
                    fontWeight: p === i.id ? 600 : 500,
                    color: p === i.id ? "white" : "var(--text-secondary)",
                    background: p === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                    border: p === i.id ? "1px solid transparent" : "1px solid var(--border-subtle)"
                  },
                  children: [
                    i.icon,
                    i.label
                  ]
                },
                i.id
              )),
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: Q ? /* @__PURE__ */ s(
                "button",
                {
                  onClick: Hs,
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
                const i = p === "restyle" && (ne || !_e);
                return /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: Ls,
                    disabled: i || mr,
                    className: "flex items-center gap-1.5 px-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    style: {
                      height: 32,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "white",
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      boxShadow: "var(--shadow-md)"
                    },
                    title: mr ? "An AI helper is still working — wait for it to finish before generating." : i ? ne ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      i && ne || mr ? /* @__PURE__ */ t(oe, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Jt, { size: 13 }),
                      mr ? "Waiting for AI…" : p === "restyle" ? ne ? "Analyzing audio…" : "Restyle Song" : p === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
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
                  value: R,
                  onChange: (i) => B(i.target.value),
                  onDragOver: pr,
                  onDrop: rl,
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
                      cn,
                      {
                        id: "juli3ta-instrumental",
                        checked: z,
                        onChange: he,
                        disabled: Q
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (Q || ne || va || aa) && /* @__PURE__ */ s(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: va ? "rgba(255, 82, 82, 0.06)" : aa ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              (Q || ne) && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${(Q ? ns : yt?.progress ?? 0.08) * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: va ? /* @__PURE__ */ s(fe, { children: [
                /* @__PURE__ */ t($a, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: va, children: va }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => J(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(Se, { size: 11 })
                  }
                )
              ] }) : Q ? /* @__PURE__ */ s(fe, { children: [
                /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: ea === "lyrics" ? sn[Zo % sn.length] : ln[Zo % ln.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: ea === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : ne ? /* @__PURE__ */ s(fe, { children: [
                /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, title: yt?.message ?? "", children: yt?.message ?? "Preparing reference audio…" }),
                /* @__PURE__ */ s("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: [
                  "Reference · ",
                  Math.round((yt?.progress ?? 0.08) * 100),
                  "%"
                ] })
              ] }) : /* @__PURE__ */ s(fe, { children: [
                /* @__PURE__ */ t($a, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: aa ?? "", children: aa }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => ce(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: "Dismiss",
                    children: /* @__PURE__ */ t(Se, { size: 11 })
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
              onDragOver: (i) => {
                i.dataTransfer.types.includes(Oa) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
              },
              onDrop: (i) => {
                const d = kt(i);
                d && d.hasAudio && (i.preventDefault(), (async () => {
                  const u = await td(d.id);
                  if (!u?.audioDataUrl) {
                    J("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  At(u.audioDataUrl, `${d.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                ht ? /* @__PURE__ */ s(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${ne ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                        ne ? /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(Wt, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: ht }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: $s,
                            disabled: Q || ne,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t(qt, { size: 14 })
                          }
                        )
                      ] }),
                      (ne || Qt) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: ne ? `🔍  ${yt?.message ?? "Preparing cover reference from the song…"}` : `✨  ${Qt}` }),
                      ne && /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-full", style: { height: 3, background: "var(--bg-hover)", marginTop: 7 }, children: /* @__PURE__ */ t(
                        "div",
                        {
                          style: {
                            width: `${(yt?.progress ?? 0.08) * 100}%`,
                            height: "100%",
                            background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                            transition: "width 0.25s ease"
                          }
                        }
                      ) }),
                      _e && !ne && /* @__PURE__ */ t(
                        es,
                        {
                          base64: _e,
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
                        /* @__PURE__ */ t(dt, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: zs,
                      disabled: Q,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t(Wt, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: Us,
                      disabled: Q || Rt.filter((i) => i.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(Bt, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: Rt.filter((i) => i.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: Ds,
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
                        /* @__PURE__ */ t(dt, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: Hr.length }) })
                      ]
                    }
                  )
                ] }),
                !ht && /* @__PURE__ */ s("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Go("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: rt === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${rt === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: rt === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(ut, { size: 13, style: { color: rt === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
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
                        onClick: () => Go("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: rt === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${rt === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: rt === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(No, { size: 13, style: { color: rt === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 compact parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                is && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !ot && Va(!1),
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
                                  onClick: () => !ot && Vo("mic"),
                                  disabled: ot,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: ft === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${ft === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(dt, { size: 14 }),
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
                                  onClick: () => !ot && Vo("tab"),
                                  disabled: ot,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: ft === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${ft === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(ji, { size: 14 }),
                                    /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            ft === "tab" && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
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
                                  Math.floor(Yo / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor(Yo / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            ot ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: Rs,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(En, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: Is,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: ft === "tab" ? /* @__PURE__ */ t(ji, { size: 28 }) : /* @__PURE__ */ t(dt, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: ot ? ft === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            Xo && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: Xo })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s(
                            "div",
                            {
                              className: "px-5 py-3 flex items-center justify-between",
                              style: { borderTop: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)" },
                              children: [
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: ot ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !ot && Va(!1),
                                    disabled: ot,
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
                    ref: Wo,
                    type: "file",
                    accept: "audio/*",
                    onChange: Ps,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick a cover-ready ~60 s sample" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed and downsampled before Restyle so the request stays small."
                ] }),
                ts && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => ya(!1),
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
                                  /* @__PURE__ */ t(dt, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ s(
                                  "button",
                                  {
                                    onClick: () => ya(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    children: [
                                      /* @__PURE__ */ t(qt, { size: 14, style: { visibility: "hidden" } }),
                                      /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600 }, children: "×" })
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: Hr.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(dt, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : Hr.map((i) => {
                            const d = i.durationMs / 1e3, u = d > 0 && d < St;
                            return /* @__PURE__ */ s(
                              "button",
                              {
                                onClick: () => !u && js(i),
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
                                      children: /* @__PURE__ */ t(dt, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: i.name }),
                                    /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(d / 60),
                                      ":",
                                      Math.floor(d % 60).toString().padStart(2, "0"),
                                      u && " · too short for Restyle (need ≥30 s)"
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
                                i.preventDefault(), ya(!1);
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
                as && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => Ga(!1),
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
                                  /* @__PURE__ */ t(Bt, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => Ga(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    title: "Close",
                                    children: /* @__PURE__ */ t(Se, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const i = Rt.filter((d) => d.audioDataUrl);
                            return i.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(Bt, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : i.map((d) => {
                              const u = d.durationMs / 1e3, b = u > 0 && u < St, E = d.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !b && Os(d),
                                  disabled: b,
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
                                          background: d.coverDataUrl ? `url(${d.coverDataUrl}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                                          border: "1px solid var(--border-subtle)"
                                        },
                                        children: !d.coverDataUrl && /* @__PURE__ */ t(Bt, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: E }),
                                      /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        u > 0 ? `${Math.floor(u / 60)}:${Math.floor(u % 60).toString().padStart(2, "0")}` : "—",
                                        d.styleTags && d.styleTags !== "—" && ` · ${d.styleTags}`,
                                        b && " · too short for Restyle (need ≥30 s)"
                                      ] })
                                    ] })
                                  ]
                                },
                                d.id
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
                  Pa,
                  {
                    label: a("musiccreator.theme.label"),
                    hint: a("musiccreator.theme.hint"),
                    headerExtra: /* @__PURE__ */ t(
                      Sr,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: Bs,
                        busy: Re.theme,
                        disabled: Q || Re.theme
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: N,
                        onChange: (i) => P(i.target.value),
                        onDragOver: pr,
                        onDrop: al,
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
                  Pa,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${ol} / ${Fu}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      Sr,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: Ws,
                        busy: Re.style,
                        disabled: Q || Re.style
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: S,
                        onChange: (i) => L(i.target.value),
                        onDragOver: pr,
                        onDrop: tl,
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
            /* @__PURE__ */ t(fp, { onPick: Gs, disabled: Q }),
            /* @__PURE__ */ t(
              bp,
              {
                specs: ae,
                onChange: at,
                disabled: Q,
                onOptimize: Fs,
                optimizing: Nt
              }
            )
          ] }),
          /* @__PURE__ */ s(
            Pa,
            {
              label: "Cover Art",
              hint: G?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ s("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  cn,
                  {
                    checked: It,
                    onChange: $r,
                    disabled: Q || !G?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      onClick: () => Ai(!0),
                      disabled: Q,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: O ? `url(${O}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: Q ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !O && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Ha, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        qe && /* @__PURE__ */ t(
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
                          onClick: xi,
                          disabled: Q || qe || !G?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: Q || qe || !G?.models.image ? "not-allowed" : "pointer"
                          },
                          title: G?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            qe ? /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(ut, { size: 11 }),
                            O ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => qo.current?.click(),
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
                            /* @__PURE__ */ t(jo, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      O && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            de(""), Me && Ea.current?.(Me, "");
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
                            /* @__PURE__ */ t(Se, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => Jo((i) => !i),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            Br ? /* @__PURE__ */ t(Pl, { size: 11 }) : /* @__PURE__ */ t(Sn, { size: 11 }),
                            Br ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    Br && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: q,
                        onChange: (i) => ee(i.target.value),
                        placeholder: Er(R, N, S),
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
                    ref: qo,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (i) => {
                      const d = i.target.files?.[0];
                      d && wi(d), i.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          p !== "restyle" && !z && /* @__PURE__ */ t(
            Pa,
            {
              label: a("musiccreator.lyricsDirection.label"),
              hint: a("musiccreator.lyricsDirection.hint"),
              className: "mb-5",
              counter: (ae.intent ?? "").length > 0 ? `${(ae.intent ?? "").length} chars` : void 0,
              headerExtra: /* @__PURE__ */ t(
                Sr,
                {
                  label: a("musiccreator.lyricsDirection.generate"),
                  tooltip: a("musiccreator.lyricsDirection.generateTooltip"),
                  onClick: qs,
                  busy: Re.lyrics,
                  disabled: Q || Re.lyrics || !N.trim() && !(ae.intent ?? "").trim()
                }
              ),
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: ae.intent ?? "",
                  onChange: (i) => at((d) => ({ ...d, intent: i.target.value })),
                  placeholder: a("musiccreator.lyricsDirection.placeholder"),
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
            Pa,
            {
              label: a("musiccreator.lyrics.label"),
              counter: z ? "instrumental — no vocals" : `${Li} / ${zt}`,
              counterDanger: !z && Li > zt,
              className: "mb-5",
              headerExtra: z ? void 0 : /* @__PURE__ */ t(
                Sr,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: Js,
                  busy: Re.lyrics,
                  disabled: Q || Re.lyrics || !k.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: k,
                    onChange: (i) => H(i.target.value),
                    onDragOver: pr,
                    onDrop: el,
                    placeholder: z ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: Q || z,
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
                  Hu.map((i) => {
                    const d = I?.id === i.id;
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => {
                          d ? K(null) : (K(i), k.trim() || H(i.skeleton));
                        },
                        disabled: Q,
                        className: "px-2 py-0.5 rounded-full transition-all disabled:opacity-40",
                        style: {
                          fontSize: 10,
                          fontWeight: d ? 600 : 500,
                          color: d ? "white" : "var(--text-secondary)",
                          background: d ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        title: i.description + (d ? " · click to clear" : " · click to use this form"),
                        children: [
                          d ? "✓ " : "",
                          i.label
                        ]
                      },
                      i.id
                    );
                  }),
                  I && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(up, { player: $, allTracks: Le }),
      /* @__PURE__ */ t("audio", { ref: zi, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      Uc,
      {
        open: m,
        onClose: () => y(!1),
        onUseRecipe: (i, d) => {
          x("compose"), P(i), L(d);
        }
      }
    ),
    /* @__PURE__ */ t(gp, { open: Yr, onClose: () => Kr(!1) }),
    Ts && /* @__PURE__ */ t(
      Jp,
      {
        host: e,
        settings: Na,
        endpoints: sr,
        onChange: _s,
        onClose: () => ir(!1)
      }
    ),
    Ci && /* @__PURE__ */ t(
      Ap,
      {
        track: Ci,
        endpoint: G,
        onSave: no,
        onClose: () => Ei(null)
      }
    ),
    Ks && /* @__PURE__ */ t(
      Mp,
      {
        songName: R,
        mode: p,
        theme: N,
        style: S,
        intent: ae.intent ?? "",
        lyrics: k,
        specs: ae,
        coverDataUrl: O,
        endpoint: G,
        busy: qe,
        onRegenerate: xi,
        onUpload: wi,
        onClear: () => {
          de(""), Me && Ea.current?.(Me, "");
        },
        onClose: () => Ai(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(yp, { retrying: As, onRetry: oo });
}
function qp({ host: e, appName: r, currentVersion: a }) {
  const o = e.apps, [n, l] = T(null), [c, h] = T(!1), [g, p] = T(null), x = A(async () => {
    if (!o?.checkUpdate) {
      p("Update checks need a newer Tytus OS build.");
      return;
    }
    h(!0), p(null);
    try {
      const v = await o.checkUpdate();
      l(v), v.error && p(v.error);
    } catch (v) {
      p(v instanceof Error ? v.message : String(v));
    } finally {
      h(!1);
    }
  }, [o]);
  W(() => {
    x();
  }, [x]);
  const m = A(async () => {
    if (!o?.updateSelf) {
      p("Update needs a newer Tytus OS build.");
      return;
    }
    h(!0), p(null);
    try {
      const v = await o.updateSelf();
      l(v), p(v.error ?? `${r} updated. Close and reopen the app to load the new bundle.`);
    } catch (v) {
      p(v instanceof Error ? v.message : String(v));
    } finally {
      h(!1);
    }
  }, [o, r]), y = n?.latestVersion ?? a, w = !!n?.updateAvailable;
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
          /* @__PURE__ */ t(Tn, { size: 14, style: { color: "var(--accent-primary)" } }),
          /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }, children: "App version" }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => void x(),
              disabled: c,
              className: "ml-auto rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { fontSize: 10, color: "var(--text-secondary)", padding: "4px 8px", opacity: c ? 0.6 : 1 },
              children: c ? "Checking…" : "Check"
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }, children: [
          /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
            "Installed",
            /* @__PURE__ */ t("br", {}),
            /* @__PURE__ */ s("strong", { style: { color: "var(--text-primary)" }, children: [
              "v",
              n?.currentVersion ?? a
            ] })
          ] }),
          /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
            "Latest",
            /* @__PURE__ */ t("br", {}),
            /* @__PURE__ */ s("strong", { style: { color: w ? "var(--accent-primary)" : "var(--text-primary)" }, children: [
              "v",
              y
            ] })
          ] })
        ] }),
        w ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => void m(),
            disabled: c,
            className: "w-full rounded-md",
            style: { height: 30, background: "var(--accent-primary)", color: "#080808", fontSize: 11, fontWeight: 800, opacity: c ? 0.7 : 1 },
            children: c ? "Updating…" : `Update ${r}`
          }
        ) : /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: n ? "You are running the latest available version." : "Checking latest version…" }),
        g && /* @__PURE__ */ t("div", { style: { marginTop: 8, fontSize: 11, color: w ? "var(--text-secondary)" : "var(--text-tertiary)" }, children: g })
      ]
    }
  );
}
function Jp({ host: e, settings: r, endpoints: a, onChange: o, onClose: n }) {
  const l = (c, h, g) => {
    const p = g.trim(), m = { ...r.overridesByEndpoint[c] ?? {} };
    p ? m[h] = p : delete m[h];
    const y = {
      ...r,
      overridesByEndpoint: {
        ...r.overridesByEndpoint,
        [c]: m
      }
    };
    o(y);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: "absolute inset-0 z-40 flex items-center justify-center",
      style: { background: "rgba(0,0,0,0.55)" },
      onClick: n,
      children: /* @__PURE__ */ s(
        "div",
        {
          onClick: (c) => c.stopPropagation(),
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
                  /* @__PURE__ */ t(Nn, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                      title: `JULI3TA v${Nr}`,
                      children: [
                        "v",
                        Nr
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: n,
                      className: "ml-auto flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                      style: { width: 24, height: 24, color: "var(--text-secondary)" },
                      title: "Close",
                      children: /* @__PURE__ */ t(Se, { size: 14 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: /* @__PURE__ */ s("div", { className: "px-5 py-4", children: [
              /* @__PURE__ */ t(qp, { host: e, appName: "JULI3TA", currentVersion: Nr }),
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
                    /* @__PURE__ */ t($a, { size: 14, style: { color: "#fbbf24" } }),
                    "No reachable endpoints yet — connect a Tytus pod or start local switchAILocal, then come back."
                  ]
                }
              ) : /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", children: a.map((c) => {
                const h = r.overridesByEndpoint[c.url] ?? {}, g = [
                  { key: "music", label: "Music", discovered: c.models.music, kind: "music" },
                  { key: "cover", label: "Restyle", discovered: c.models.cover, kind: "cover" },
                  { key: "lyrics", label: "Lyrics", discovered: c.models.lyrics, kind: "lyrics" },
                  { key: "lyricsBackup", label: "Lyrics fallback", discovered: c.models.lyricsBackup, kind: "chat" },
                  { key: "image", label: "Cover art", discovered: c.models.image, kind: "image" }
                ], p = (y) => /music|cover/i.test(y), x = (y) => /image|diffusion|dall-?e|flux|sdxl/i.test(y), m = (y) => y === "chat" ? c.models.allIds.filter((w) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(w)) : y === "image" ? c.models.allIds.filter(x) : c.models.allIds.filter(p);
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
                              background: jr(c),
                              boxShadow: `0 0 6px ${jr(c)}`
                            }
                          }
                        ),
                        /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: c.label }),
                        /* @__PURE__ */ s("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                          c.url,
                          " · ",
                          c.models.allIds.length,
                          " models"
                        ] })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: g.map((y) => {
                        const w = m(y.kind), v = h[y.key] ?? "";
                        return /* @__PURE__ */ s(xl, { children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "flex items-center",
                              style: { fontSize: 11, color: "var(--text-secondary)" },
                              children: y.label
                            }
                          ),
                          /* @__PURE__ */ s(
                            "select",
                            {
                              value: v,
                              onChange: (_) => l(c.url, y.key, _.target.value),
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
                                /* @__PURE__ */ t("option", { value: "", children: y.discovered ? `Auto · ${y.discovered}` : y.kind === "lyrics" ? "Auto · server-side (no model param)" : w.length === 0 ? "(no models match)" : "Auto · (no preferred match — pick one)" }),
                                w.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: w.map((_) => /* @__PURE__ */ t("option", { value: _, children: _ }, _)) })
                              ]
                            }
                          )
                        ] }, y.key);
                      }) })
                    ]
                  },
                  c.podId
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
                    onClick: n,
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
function Xp(e) {
  const r = e.host.storage.current();
  return Zc(r), r.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(wl, { value: e, children: /* @__PURE__ */ t(Wp, {}) });
  };
}
export {
  Xp as default
};
//# sourceMappingURL=index.js.map
