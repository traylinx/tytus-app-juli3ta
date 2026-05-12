import { jsx as t, jsxs as s, Fragment as ge } from "react/jsx-runtime";
import { createContext as ii, useContext as si, forwardRef as li, createElement as go, useState as S, useEffect as B, useMemo as ye, useRef as te, useCallback as z, Fragment as pl } from "react";
import { createPortal as Fa } from "react-dom";
const ci = ii(null), ml = ci.Provider;
function ua() {
  const e = si(ci);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gl = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), En = (e) => {
  const a = gl(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, di = (...e) => e.filter((a, r, o) => !!a && a.trim() !== "" && o.indexOf(a) === r).join(" ").trim(), yl = (e) => {
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
var fl = {
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
const bl = li(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: i = "",
    children: l,
    iconNode: d,
    ...g
  }, m) => go(
    "svg",
    {
      ref: m,
      ...fl,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(a) : r,
      className: di("lucide", i),
      ...!l && !yl(g) && { "aria-hidden": "true" },
      ...g
    },
    [
      ...d.map(([h, b]) => go(h, b)),
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
const H = (e, a) => {
  const r = li(
    ({ className: o, ...i }, l) => go(bl, {
      ref: l,
      iconNode: a,
      className: di(
        `lucide-${hl(En(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return r.displayName = En(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], xl = H("album", vl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], sa = H("check", wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ui = H("chevron-down", kl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], An = H("chevron-left", Sl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tl = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], _l = H("chevron-right", Tl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Cl = H("chevron-up", Nl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Ua = H("circle-alert", El);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ml = H("circle-question-mark", Al);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ll = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], pi = H("copy", Ll);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], Ot = H("disc-3", zl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], mi = H("download", Il);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], To = H("ellipsis-vertical", Rl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], hi = H("external-link", Pl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = [
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
], $t = H("file-music", jl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], Ul = H("folder-open", Dl);
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
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], vr = H("heart", Ol);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Oa = H("image", $l);
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
], yo = H("layers", Hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Bl = H("list-music", Fl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], re = H("loader-circle", Wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], ct = H("mic", ql);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], Mn = H("monitor-speaker", Jl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], Ln = H("monitor", Gl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], Yl = H("moon", Vl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], Ba = H("music-2", Kl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xl = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], xr = H("notebook-text", Xl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], Et = H("pause", Ql);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], gi = H("pencil", Zl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], _e = H("play", ec);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], fo = H("plus", tc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], rc = H("radio", ac);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], nc = H("refresh-cw", oc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], yi = H("repeat-1", ic);
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
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], lc = H("repeat", sc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], kt = H("search", cc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], fi = H("settings-2", dc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], _o = H("shuffle", uc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = [
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
], dt = H("sparkles", pc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], bi = H("square-check-big", mc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], vi = H("square", hc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ht = H("trash-2", gc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], No = H("upload", yc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], bc = H("user-round", fc);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], xc = H("volume-2", vc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], kc = H("volume-x", wc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = [
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
], Ft = H("wand-sparkles", Sc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ke = H("x", Tc), _c = {
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
}, Nc = {
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
}, zn = { en: _c, es: Nc }, ur = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", Cc = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, o) => String(a[o] ?? `{${o}}`)) : e;
function Bt() {
  const { host: e } = ua(), [a, r] = S(() => ur(e.i18n?.locale));
  B(() => e.i18n?.onLocaleChange?.((i) => r(ur(i))), [e]);
  const o = ye(() => (i, l) => {
    const d = e.i18n?.t?.(i, l);
    if (d && d !== i) return d;
    const g = ur(a), m = zn[g]?.[i] ?? zn.en[i] ?? i;
    return Cc(m, l);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (i) => r(ur(i)),
    installLanguagePack: (i) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (i) => {
    }
  };
}
const Ec = [
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
], Ac = [
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
function Mc({ recipe: e, onUse: a }) {
  const { t: r } = Bt(), [o, i] = S(!1), l = async () => {
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
              onClick: () => a(e),
              className: "flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all hover:scale-[1.02]",
              style: {
                fontSize: 11,
                fontWeight: 600,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                /* @__PURE__ */ t(Ft, { size: 12 }),
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
              children: o ? /* @__PURE__ */ t(sa, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(pi, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function Lc({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: o, language: i } = Bt(), [l, d] = S("start");
  if (!e) return null;
  const g = i === "es" ? Ac : Ec;
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
                        children: /* @__PURE__ */ t(Ot, { size: 18, style: { color: "white" } })
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
                      children: /* @__PURE__ */ t(ke, { size: 16 })
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
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(dt, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(pr, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(pr, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(pr, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(pr, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(Ft, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(Zr, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(Zr, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(Zr, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(ct, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(zc, { body: o("julietaHelp.start.recorder.body") }),
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
                  Mc,
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
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(Ua, { size: 14 }), text: o("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.failed.title"), a: o("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.nopod.title"), a: o("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(st, { q: o("julietaHelp.help.q.local.title"), a: o("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t(aa, { icon: /* @__PURE__ */ t(Ft, { size: 14 }), text: o("julietaHelp.help.usage.title") }),
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
function aa({ icon: e, text: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: a })
  ] });
}
function pr({ n: e, title: a, body: r }) {
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
function Zr({ emoji: e, name: a, body: r }) {
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
function zc({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function st({ q: e, a }) {
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
            onClick: () => o((i) => !i),
            className: "w-full flex items-center gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            children: [
              /* @__PURE__ */ t(
                _l,
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
const eo = (e) => {
  const a = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(a.agents) ? a.agents : [],
    included: Array.isArray(a.included) ? a.included : [],
    tiers: [],
    ...a
  };
}, Ic = () => {
  const { host: e } = ua(), [a, r] = S(0), [o, i] = S(() => eo(e.daemon?.state));
  return B(() => (i(eo(e.daemon?.state)), e.daemon?.onStateChange?.((l) => i(eo(l)))), [e, a]), ye(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((l) => l + 1)
  }), [o]);
}, Rc = (e, a) => {
  const { host: r } = ua();
  B(() => {
    if (!(!a || !r.shellMenu?.register))
      return r.shellMenu.register({
        appId: r.appId,
        groups: a.groups.map((o) => ({
          label: o.label,
          items: o.items.map((i) => ({
            id: i.id,
            label: i.label,
            disabled: i.disabled,
            onClick: i.onSelect
          }))
        }))
      });
  }, [r, a]);
};
function Pc() {
  return ua().host.windows.current;
}
const xi = "juli3ta_standalone_vfs_v1", wi = () => Math.random().toString(36).slice(2) + Date.now().toString(36), Dt = (e, a) => ({
  id: wi(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), jc = () => {
  const e = Dt("/", null), a = Dt("home", e.id), r = Dt("user", a.id), o = Dt("Desktop", r.id), i = Dt("Music", r.id), l = Dt("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, o, i, l].map((d) => [d.id, d])) };
}, mr = () => {
  try {
    const a = localStorage.getItem(xi);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = jc();
  return fr(e), e;
}, fr = (e) => {
  try {
    localStorage.setItem(xi, JSON.stringify(e));
  } catch {
  }
}, Dc = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), Uc = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function Oc() {
  return {
    ensureUserFolder(a) {
      const r = mr(), o = Dc(a);
      let i = Object.values(r.nodes).find((l) => l.type === "folder" && l.name === o);
      if (!i) {
        const l = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        i = Dt(o, l?.id ?? null), r.nodes[i.id] = i, fr(r);
      }
      return i.id;
    },
    findChildByName(a, r) {
      const o = mr();
      return Object.values(o.nodes).find((i) => i.parentId === a && i.name === r);
    },
    createFile(a, r, o = "", i = {}) {
      const l = mr(), d = { id: wi(), name: r, type: "file", parentId: a, content: o, mimeType: i.mimeType, refTrackId: i.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return l.nodes[d.id] = d, fr(l), d.id;
    },
    writeFile(a, r) {
      const o = mr();
      o.nodes[a] && (o.nodes[a].content = r, o.nodes[a].modifiedAt = Date.now(), fr(o));
    }
  };
}
const $c = { theme: { mode: "dark" } }, Hc = ii(null);
function ki() {
  const e = si(Hc), { host: a } = ua();
  return ye(() => e || {
    state: $c,
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
function Fc() {
  const { host: e } = ua();
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
const Bc = {
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
}, Wc = {
  juli3ta: Bc
};
function Co({ name: e, size: a = 24, className: r, style: o, alt: i, scale: l }) {
  const [d, g = "mark"] = e.split(":"), m = Wc[d], { state: h } = ki();
  let b;
  if (g === "mark" ? b = h.theme.mode === "light" ? m?.["mark-ink"] : m?.["mark-white"] : b = m?.[g], !b) return null;
  const p = i ?? d.charAt(0).toUpperCase() + d.slice(1), f = l ?? b.scale ?? 1;
  return /* @__PURE__ */ t(
    "img",
    {
      src: b.src,
      alt: p,
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
let Si = null, In = null;
const to = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), qc = [
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
function Jc(e) {
  In = (async () => {
    for (const r of qc) await e.run(r);
  })();
  const a = async () => In;
  Si = {
    exec: async (r) => {
      await a();
      for (const o of to(r).split(";").map((i) => i.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (r, o = []) => (await a(), e.query(to(r), o)),
    run: async (r, o = []) => {
      await a(), await e.run(to(r), o);
    },
    tx: async (r) => (await a(), r())
  };
}
const oe = () => Si, wr = (e) => ({
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
}), Y = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), Eo = (e) => Y(e, "specs_json") || Y(e, "cover_data_url") || Y(e, "theme") || Y(e, "source") || Y(e, "audio_kind") || Y(e, "external_id") || Y(e, "external_url") || Y(e, "thumbnail_url") || Y(e, "artist") || Y(e, "album"), Rn = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, Pn = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, ao = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, Pt = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), Ti = async (e, a, r, o) => {
  if (Y(o, "source") || Y(o, "audio_kind") || Y(o, "external_id") || Y(o, "external_url") || Y(o, "thumbnail_url") || Y(o, "artist") || Y(o, "album"))
    try {
      return (await e.query(
        `SELECT ${Rn}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(Pt);
    } catch (i) {
      o = i;
    }
  if (Y(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${Rn} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => Pt({ ...l, theme: "" }));
    } catch (i) {
      if (!Y(i, "cover_data_url")) throw i;
      try {
        return (await e.query(
          `SELECT ${Pn} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => Pt({ ...d, cover_data_url: "", theme: "" }));
      } catch (l) {
        if (!Y(l, "specs_json")) throw l;
        return (await e.query(
          `SELECT ${ao} FROM music_creator_tracks ${a}`,
          r
        )).map((g) => Pt({ ...g, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (Y(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${Pn} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => Pt({ ...l, cover_data_url: "", theme: "" }));
    } catch (i) {
      if (!Y(i, "specs_json")) throw i;
      return (await e.query(
        `SELECT ${ao} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => Pt({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (Y(o, "specs_json"))
    return (await e.query(
      `SELECT ${ao} FROM music_creator_tracks ${a}`,
      r
    )).map((l) => Pt({ ...l, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, _i = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, Gc = async () => {
  const e = oe();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${_i} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(wr);
  } catch (a) {
    if (!Eo(a)) throw a;
    return (await Ti(e, "ORDER BY created_at DESC", [], a)).map(wr);
  }
}, Vc = async (e) => {
  const a = oe();
  if (!a) return null;
  try {
    const r = await a.query(
      `SELECT ${_i} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return r.length === 0 ? null : wr(r[0]);
  } catch (r) {
    if (!Eo(r)) throw r;
    const o = await Ti(a, "WHERE id = ? LIMIT 1", [e], r);
    return o.length === 0 ? null : wr(o[0]);
  }
}, kr = async (e) => {
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
    if (!Eo(o)) throw o;
    if (Y(o, "source") || Y(o, "audio_kind") || Y(o, "external_id") || Y(o, "external_url") || Y(o, "thumbnail_url") || Y(o, "artist") || Y(o, "album"))
      try {
        await a.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...r, e.specsJson, e.coverDataUrl, e.theme]
        );
        return;
      } catch (i) {
        o = i;
      }
    if (Y(o, "theme"))
      try {
        await a.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...r, e.specsJson, e.coverDataUrl]
        );
        return;
      } catch (i) {
        if (!Y(i, "cover_data_url")) throw i;
      }
    if (Y(o, "cover_data_url"))
      try {
        await a.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...r, e.specsJson]
        );
        return;
      } catch (i) {
        if (!Y(i, "specs_json")) throw i;
      }
    await a.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      r
    );
  }
}, Yc = async (e) => {
  const a = oe();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Kc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  const o = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, Xc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, Qc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, Zc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, ed = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, td = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, ad = async (e, a) => {
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
}, rd = async (e, a) => {
  const r = oe();
  r && await r.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(a)]
  );
}, Ni = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, Ci = "music_creator_settings", od = () => ad(Ci, Ni), nd = (e) => rd(Ci, e), pt = () => Date.now(), Ei = (e) => ({
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
}), bo = (e) => ({
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
}), Ai = [
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
], id = Ai.join(", "), sd = Ai.map((e) => `t.${e}`).join(", "), ld = async () => {
  const e = oe();
  return e ? (await e.query(
    `SELECT ${id} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(Ei) : [];
}, Mi = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = bo(e);
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
}, cd = async (e) => {
  const a = oe();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, dd = async () => {
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
}, ud = async (e) => {
  const a = oe();
  return a ? (await a.query(
    "SELECT kind, entity_id, provider, title, created_at FROM music_favorites WHERE kind = ? ORDER BY created_at DESC",
    [e]
  )).map((i) => ({
    kind: i.kind,
    entityId: i.entity_id,
    provider: i.provider,
    title: i.title,
    createdAt: i.created_at
  })) : [];
}, pd = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = await a.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(r[0]?.n ?? 0) > 0 ? (await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await a.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", pt()]
  ), !0);
}, Aa = async () => {
  const e = oe();
  if (!e) return [];
  const a = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), r = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${sd}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return r.forEach((i) => {
    o.set(i.playlist_id, [...o.get(i.playlist_id) ?? [], Ei(i)]);
  }), a.map((i) => ({
    id: i.id,
    name: i.name,
    createdAt: i.created_at,
    updatedAt: i.updated_at,
    items: o.get(i.id) ?? []
  }));
}, md = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", o = pt(), i = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: o, updatedAt: o, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [i.id, i.name, i.createdAt, i.updatedAt]
  ), i;
}, hd = async (e) => {
  const a = oe();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, gd = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await Mi(a);
    const o = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), i = Number(o[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, i, pt()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [pt(), e]);
  });
}, yd = async (e, a) => {
  const r = oe();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [pt(), e]));
}, fd = async (e) => {
  const a = oe();
  a && await a.tx(async () => {
    for (const r of e.tracks) {
      const o = bo(r);
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
        [r.kind, r.entityId, r.provider, r.title ?? "", r.createdAt ?? pt()]
      ), await a.run(
        "UPDATE music_favorites SET provider = ?, title = ? WHERE kind = ? AND entity_id = ?",
        [r.provider, r.title ?? "", r.kind, r.entityId]
      );
    for (const r of e.playlists) {
      const o = r.createdAt || pt(), i = r.updatedAt || o;
      await a.run(
        "INSERT OR IGNORE INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
        [r.id, r.name || "Playlist", o, i]
      ), await a.run(
        "UPDATE music_playlists SET name = ?, updated_at = ? WHERE id = ?",
        [r.name || "Playlist", i, r.id]
      ), await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [r.id]);
      let l = 0;
      for (const d of r.items) {
        const g = bo(d);
        await a.run(
          `INSERT OR IGNORE INTO music_library_tracks
             (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
          [g.id, g.provider, g.external_id, g.title, g.artist, g.album, g.duration_ms, g.thumbnail_url, g.external_url, g.added_at]
        ), await a.run(
          `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
           VALUES (?, ?, ?, ?)`,
          [r.id, d.id, l++, pt()]
        );
      }
    }
  });
}, Li = "/api/juli3ta/music-state", zi = "juli3ta:musicLibrarySnapshot:v1", Ze = () => Date.now(), bd = () => ({
  version: 1,
  updatedAt: 0,
  tracks: [],
  favorites: [],
  playlists: []
}), Ao = (e) => !!e && typeof e == "object" && !Array.isArray(e), Mo = (e) => {
  if (!Ao(e)) return null;
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
    createdAt: Number(e.createdAt ?? Ze()) || Ze(),
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
}, vd = (e) => {
  if (!Ao(e)) return null;
  const a = e.kind;
  if (a !== "track" && a !== "artist" && a !== "album" && a !== "playlist") return null;
  const r = String(e.entityId ?? "").trim();
  return r ? {
    kind: a,
    entityId: r,
    provider: String(e.provider ?? ""),
    title: String(e.title ?? ""),
    createdAt: Number(e.createdAt ?? Ze()) || Ze()
  } : null;
}, Ii = (e) => {
  if (!Ao(e)) return null;
  const a = String(e.id ?? "").trim();
  return a ? {
    id: a,
    name: String(e.name ?? "Playlist"),
    createdAt: Number(e.createdAt ?? Ze()) || Ze(),
    updatedAt: Number(e.updatedAt ?? e.createdAt ?? Ze()) || Ze(),
    items: Array.isArray(e.items) ? e.items.map(Mo).filter((r) => !!r) : []
  } : null;
}, la = (e) => e ? {
  version: 1,
  updatedAt: Number(e.updatedAt ?? 0) || 0,
  tracks: Array.isArray(e.tracks) ? e.tracks.map(Mo).filter((a) => !!a) : [],
  favorites: Array.isArray(e.favorites) ? e.favorites.map(vd).filter((a) => !!a) : [],
  playlists: Array.isArray(e.playlists) ? e.playlists.map(Ii).filter((a) => !!a) : []
} : bd(), jn = (e, a) => {
  const r = /* @__PURE__ */ new Map();
  for (const o of [...e, ...a]) {
    const i = r.get(o.id);
    if (!i) {
      r.set(o.id, o);
      continue;
    }
    const l = o.updatedAt ?? o.createdAt ?? 0, d = i.updatedAt ?? i.createdAt ?? 0;
    l >= d && r.set(o.id, o);
  }
  return [...r.values()].sort((o, i) => (i.updatedAt ?? i.createdAt ?? 0) - (o.updatedAt ?? o.createdAt ?? 0));
}, xd = (e, a) => {
  const r = /* @__PURE__ */ new Map();
  for (const o of [...e, ...a]) {
    const i = `${o.kind}:${o.entityId}`, l = r.get(i);
    (!l || (o.createdAt ?? 0) >= (l.createdAt ?? 0)) && r.set(i, o);
  }
  return [...r.values()].sort((o, i) => (i.createdAt ?? 0) - (o.createdAt ?? 0));
}, Dn = (e, a) => {
  const r = la(e), o = la(a);
  return {
    version: 1,
    updatedAt: Math.max(r.updatedAt, o.updatedAt, Ze()),
    tracks: jn(o.tracks, r.tracks),
    favorites: xd(o.favorites, r.favorites),
    playlists: jn(o.playlists, r.playlists)
  };
}, wd = (e, a, r) => {
  const o = new Map(e.map((i) => [i.id, i]));
  return {
    version: 1,
    updatedAt: Ze(),
    tracks: e.map((i) => Mo(i)).filter((i) => !!i),
    favorites: [...a].map((i) => {
      const l = o.get(i);
      return {
        kind: "track",
        entityId: i,
        provider: l?.source ?? "youtube",
        title: l?.title ?? "",
        createdAt: Ze()
      };
    }),
    playlists: r.map((i) => Ii(i)).filter((i) => !!i)
  };
}, kd = () => {
  try {
    const e = localStorage.getItem(zi);
    return e ? la(JSON.parse(e)) : null;
  } catch {
    return null;
  }
}, Sd = (e) => {
  try {
    localStorage.setItem(zi, JSON.stringify(la(e)));
  } catch {
  }
}, Td = async () => {
  try {
    const e = await fetch(Li, {
      method: "GET",
      headers: { Accept: "application/json" }
    });
    if (!e.ok) return null;
    const a = await e.json();
    return la(a.state);
  } catch {
    return null;
  }
}, Un = async (e) => {
  const a = la(e);
  Sd(a);
  try {
    await fetch(Li, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": `juli3ta-music-state-${a.updatedAt}-${a.tracks.length}-${a.favorites.length}`
      },
      body: JSON.stringify({ state: a })
    });
  } catch {
  }
}, _d = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), On = async () => {
  const e = oe();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(_d) : [];
}, Ri = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, ro = "tytus.voice-recorder.recordings", Nd = async () => {
  try {
    const e = localStorage.getItem(ro);
    if (!e) return;
    const a = JSON.parse(e);
    if (!Array.isArray(a)) {
      localStorage.removeItem(ro);
      return;
    }
    for (const r of a)
      if (!(!r?.id || typeof r.audioDataUrl != "string"))
        try {
          await Ri({
            id: r.id,
            name: r.name ?? "Untitled recording",
            durationMs: r.durationMs ?? 0,
            createdAt: r.createdAt ?? Date.now(),
            mimeType: r.mimeType ?? "audio/webm",
            audioDataUrl: r.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(ro);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, Cd = (e, a) => e._value, Ed = "http://localhost:18080/v1", Ad = "sk-test-123", Md = (e) => /\/v1\/?$/i.test(e), Pi = (e) => typeof e == "object" && e !== null, Ld = (e) => typeof e == "string" ? e : Pi(e) && typeof e._value == "string" ? Cd(e) : "", oo = (...e) => {
  for (const a of e)
    if (typeof a == "string" && a.trim()) return a;
  return null;
}, $n = (e) => {
  const a = e?.trim();
  if (!a) return null;
  const r = a.replace(/\/+$/, "");
  return Md(r) ? r : `${r}/v1`;
}, no = (e, a, r) => {
  a.has(r.url) || (a.add(r.url), e.push(r));
}, zd = (e) => {
  const a = [], r = /* @__PURE__ */ new Set();
  for (const o of e) {
    const i = o, l = Pi(i.meta) ? i.meta : {}, d = Ld(
      i.user_key ?? i.userKey ?? i.api_key ?? i.apiKey ?? l.userKey ?? l.gatewayKey ?? l.apiKey ?? l.api_key
    );
    if (!d) continue;
    const g = oo(i.pod_id, i.podId, i.id) || "included", m = $n(
      oo(i.public_url, i.publicUrl, i.gatewayUrl, l.gatewayUrl, l.publicUrl)
    );
    m && no(a, r, {
      url: m,
      apiKey: d,
      podId: `${g}:remote`,
      source: "included",
      label: `AIL gateway ${g} (remote)`,
      proxyPodId: g
    });
    const h = $n(
      oo(i.endpoint, i.private_url, i.privateUrl, l.endpoint, l.privateUrl)
    );
    h && no(a, r, {
      url: h,
      apiKey: d,
      podId: `${g}:tunnel`,
      source: "included",
      label: `AIL gateway ${g} (tunnel)`,
      proxyPodId: g
    });
  }
  return no(a, r, {
    url: Ed,
    apiKey: Ad,
    podId: "local",
    source: "local",
    label: "Local AIL"
  }), a;
}, Lo = 100, zo = 60, ia = 6, $a = 90, Id = 24e3, Rd = 0.92, Pd = 3, jd = 0.05, Hn = 20, Dd = 3, Ud = 0.35, Od = 0.55, $d = (e) => typeof e == "number" ? { targetSec: e, fastRemote: !1 } : {
  targetSec: e?.targetSec ?? zo,
  fastRemote: e?.fastRemote ?? !1,
  signal: e?.signal,
  onProgress: e?.onProgress
}, fe = (e, a, r, o) => {
  e?.onProgress?.({
    stage: a,
    progress: Math.max(0, Math.min(1, r)),
    message: o
  });
}, Hd = (e) => /^https?:\/\//i.test(e), Fd = (e) => {
  const a = [e];
  try {
    const r = e.split("/api/music/proxy/")[1];
    r && a.push(decodeURIComponent(r));
  } catch {
  }
  for (const r of a)
    try {
      const o = new URL(r), i = Number(o.searchParams.get("dur") || o.searchParams.get("duration"));
      if (Number.isFinite(i) && i > 0) return { durationSec: i };
    } catch {
    }
  return {};
}, Bd = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((d) => MediaRecorder.isTypeSupported(d));
  if (!o)
    throw new Error("No supported recorder mime type for fallback.");
  const i = URL.createObjectURL(e), l = new Audio();
  l.src = i, l.muted = !0, l.crossOrigin = "anonymous", l.preload = "auto";
  try {
    await new Promise((w, C) => {
      const T = () => w(), A = () => C(new Error("Audio element rejected the source format too — browser cannot play it."));
      l.addEventListener("canplay", T, { once: !0 }), l.addEventListener("error", A, { once: !0 }), l.load();
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
    ), p = new Promise((w) => {
      m.onstop = () => w();
    });
    m.start(250), l.currentTime = 0, await l.play(), await new Promise((w) => setTimeout(w, b)), m.stop(), l.pause(), await p;
    const f = new Blob(h, { type: o });
    if (f.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const v = await f.arrayBuffer();
    return await a.decodeAudioData(v);
  } finally {
    URL.revokeObjectURL(i);
  }
}, ji = async (e, a = 35, r = !0, o) => {
  const i = window.AudioContext || window.webkitAudioContext, l = new i();
  try {
    const d = await e.arrayBuffer();
    try {
      return await l.decodeAudioData(d.slice(0));
    } catch (g) {
      if (!r) throw g;
      try {
        return fe(o, "capturing", 0.32, "Browser decoder needs compatibility capture…"), await Bd(e, l, a);
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
}, Di = async (e, a) => {
  const r = await fetch(e, { signal: a?.signal });
  if (!r.ok) throw new Error(`Could not load audio (${r.status}).`);
  return r.blob();
}, io = (e, a, r, o = 12e3) => new Promise((i, l) => {
  let d = null;
  const g = () => {
    e.removeEventListener(a, m), e.removeEventListener("error", h), r?.removeEventListener("abort", b), d && clearTimeout(d);
  }, m = () => {
    g(), i();
  }, h = () => {
    g(), l(new Error("Browser media element rejected the streamed audio."));
  }, b = () => {
    g(), l(new DOMException("Reference extraction was cancelled.", "AbortError"));
  };
  e.addEventListener(a, m, { once: !0 }), e.addEventListener("error", h, { once: !0 }), r?.addEventListener("abort", b, { once: !0 }), d = setTimeout(() => {
    g(), l(new Error(`Timed out waiting for audio ${String(a)}.`));
  }, o);
}), Wd = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable for fast streamed reference capture.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((f) => MediaRecorder.isTypeSupported(f));
  if (!o) throw new Error("No supported recorder mime type for fast streamed reference capture.");
  const i = Fd(e), l = Math.max(ia, Math.min($a, a + 2)), d = i.durationSec, g = d ? Math.max(0, Math.min(d - l, d * Od - l / 2)) : 0;
  fe(r, "loading", 0.08, "Opening streamed audio without downloading the full song…");
  const m = window.AudioContext || window.webkitAudioContext, h = new m(), b = new Audio();
  b.crossOrigin = "anonymous", b.preload = "auto", b.src = e;
  let p = null;
  try {
    await io(b, "canplay", r.signal, 15e3), g > 0 && Number.isFinite(b.duration) ? (fe(r, "loading", 0.15, `Seeking to ${Math.floor(g / 60)}:${Math.floor(g % 60).toString().padStart(2, "0")}…`), b.currentTime = g, await io(b, "seeked", r.signal, 12e3)) : g > 0 && (b.currentTime = g, await Promise.race([
      io(b, "seeked", r.signal, 12e3),
      new Promise((P) => setTimeout(P, 1200))
    ]));
    const f = h.createMediaElementSource(b), v = h.createMediaStreamDestination();
    f.connect(v);
    const w = new MediaRecorder(v.stream, { mimeType: o }), C = [];
    w.ondataavailable = (P) => {
      P.data.size > 0 && C.push(P.data);
    };
    const T = new Promise((P) => {
      w.onstop = () => P();
    }), A = performance.now();
    p = setInterval(() => {
      const P = (performance.now() - A) / 1e3;
      fe(
        r,
        "capturing",
        0.18 + 0.52 * Math.min(1, P / l),
        `Capturing ${l.toFixed(0)} s cover reference…`
      );
    }, 250), fe(r, "capturing", 0.18, `Capturing ${l.toFixed(0)} s cover reference…`), w.start(250), await h.resume().catch(() => {
    }), await b.play(), await new Promise((P, k) => {
      const M = setTimeout(P, l * 1e3), L = () => {
        clearTimeout(M), k(new DOMException("Reference extraction was cancelled.", "AbortError"));
      };
      r.signal?.addEventListener("abort", L, { once: !0 });
    }), w.stop(), b.pause(), await T, p && clearInterval(p), p = null;
    const _ = new Blob(C, { type: o });
    if (_.size === 0) throw new Error("Fast streamed capture produced no audio.");
    fe(r, "decoding", 0.75, "Decoding cover reference…");
    const N = await _.arrayBuffer();
    return {
      buffer: await h.decodeAudioData(N),
      sourceOffsetSec: g,
      sourceDurationSec: d || (Number.isFinite(b.duration) ? b.duration : void 0)
    };
  } finally {
    p && clearInterval(p), b.pause(), b.removeAttribute("src"), b.load(), h.close().catch(() => {
    });
  }
}, vo = (e) => new Promise((a, r) => {
  const o = new FileReader();
  o.onload = () => {
    const i = typeof o.result == "string" ? o.result : "", l = i.indexOf("base64,");
    a(l >= 0 ? i.slice(l + 7) : "");
  }, o.onerror = () => r(o.error), o.readAsDataURL(e);
}), qd = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Lo / 1e3)), o = Math.floor(e.length / r), i = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const g = d * r;
    let m = 0;
    for (let h = 0; h < r; h++) {
      let b = 0;
      for (let p = 0; p < l.length; p++) b += l[p][g + h];
      b /= l.length, m += b * b;
    }
    i[d] = Math.sqrt(m / r);
  }
  return i;
}, Jd = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Lo / 1e3)), o = Math.floor(e.length / r), i = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const g = d * r;
    let m = 0, h = 0;
    for (let b = 0; b < l.length; b++) h += l[b][g];
    h /= l.length;
    for (let b = 1; b < r; b++) {
      let p = 0;
      for (let f = 0; f < l.length; f++) p += l[f][g + b];
      p /= l.length, (h > 1e-3 && p < -1e-3 || h < -1e-3 && p > 1e-3) && m++, h = p;
    }
    i[d] = m / (r / 2);
  }
  return i;
}, Ui = (e) => {
  const a = qd(e), r = Jd(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / Lo };
}, Gd = (e, a = 4) => {
  let r = 0;
  for (let m = 0; m < e.length; m++) r += e[m];
  const o = r / e.length;
  let i = 0;
  for (let m = 0; m < e.length; m++) i += (e[m] - o) ** 2;
  const l = Math.sqrt(i / e.length) || 1, d = Math.floor(e.length / a), g = new Float32Array(d);
  for (let m = 0; m < d; m++) {
    let h = 0;
    for (let b = 0; b < a; b++) h += e[m * a + b];
    g[m] = (h / a - o) / l;
  }
  return g;
}, Vd = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const o = Math.max(1, Math.floor(r / 4));
  let i = -1 / 0, l = 0;
  for (let m = 0; m + r < e.length; m += o) {
    if (Math.abs(m - a) < r) continue;
    let h = 0;
    for (let b = 0; b < r; b++)
      h += e[a + b] * e[m + b];
    h /= r, h > i && (i = h), h > 0.5 && l++;
  }
  const d = Math.max(0, Math.min(1, (i + 1) / 2)), g = Math.min(1, l / 6);
  return 0.6 * d + 0.4 * g;
}, Oi = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const o = Gd(e.rms, 4), i = e.rms.length / o.length, l = Math.max(1, Math.floor(r / i));
  let d = 0, g = 0, m = 0;
  for (let f = 0; f < r; f++)
    d += e.rms[f], g += e.rms[f] * e.rms[f], m += e.centroid[f];
  const h = [], b = Math.max(1, Math.floor(e.framesPerSec)), p = (f) => {
    const v = d / r, w = Math.max(0, g / r - v * v), C = Math.sqrt(w), T = m / r, A = Math.floor(f / i), _ = Vd(o, A, l), N = 0.45 * Math.min(1, v * 4) + 0.2 * T + 0.25 * _ - 0.1 * Math.min(1, C * 6);
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
  p(0);
  for (let f = r; f < e.rms.length; f += b) {
    for (let v = 0; v < b && f - b + v < e.rms.length; v++) {
      const w = f - r - b + v + 1, C = f - b + v + 1;
      if (C >= e.rms.length) break;
      w >= 0 && (d -= e.rms[w], g -= e.rms[w] * e.rms[w], m -= e.centroid[w]), d += e.rms[C], g += e.rms[C] * e.rms[C], m += e.centroid[C];
    }
    p(f - r + b);
  }
  return h;
}, xo = (e, a, r) => {
  const o = new Float32Array(r), i = [];
  for (let l = 0; l < e.numberOfChannels; l++) i.push(e.getChannelData(l));
  for (let l = 0; l < r; l++) {
    let d = 0;
    for (let g = 0; g < i.length; g++) d += i[g][a + l] || 0;
    o[l] = d / i.length;
  }
  return o;
}, Yd = (e, a, r) => {
  if (r >= a) return e;
  const o = a / r, i = Math.max(1, Math.floor(e.length / o)), l = new Float32Array(i);
  for (let d = 0; d < i; d++) {
    const g = d * o, m = Math.floor(g), h = Math.min(e.length - 1, m + 1), b = g - m;
    l[d] = e[m] * (1 - b) + e[h] * b;
  }
  return l;
}, Kd = (e, a) => {
  const i = a * 1 * 2, l = 1 * (16 / 8), d = e.length * 2, g = new ArrayBuffer(44 + d), m = new DataView(g);
  let h = 0;
  const b = (v) => {
    for (let w = 0; w < v.length; w++) m.setUint8(h++, v.charCodeAt(w));
  }, p = (v) => {
    m.setUint32(h, v, !0), h += 4;
  }, f = (v) => {
    m.setUint16(h, v, !0), h += 2;
  };
  b("RIFF"), p(36 + d), b("WAVE"), b("fmt "), p(16), f(1), f(1), p(a), p(i), f(l), f(16), b("data"), p(d);
  for (let v = 0; v < e.length; v++) {
    const w = Math.max(-1, Math.min(1, e[v]));
    m.setInt16(h, w < 0 ? w * 32768 : w * 32767, !0), h += 2;
  }
  return new Blob([g], { type: "audio/wav" });
}, Xd = (e, a) => {
  const r = new Float32Array(e);
  let o = 0;
  for (let l = 0; l < r.length; l++) o = Math.max(o, Math.abs(r[l]));
  if (o > 1e-4) {
    const l = Math.min(Rd / o, Pd);
    for (let d = 0; d < r.length; d++) r[d] *= l;
  }
  const i = Math.min(Math.floor(a * jd), Math.floor(r.length / 2));
  for (let l = 0; l < i; l++) {
    const d = l / Math.max(1, i);
    r[l] *= d, r[r.length - 1 - l] *= d;
  }
  return r;
}, wo = (e, a) => {
  const r = Math.min(a, Id), o = Xd(e, a), i = Yd(o, a, r);
  return Kd(i, r);
}, Fn = async (e, a, r, o = 0, i) => {
  const l = e.length / e.sampleRate, d = i ?? l;
  if (l < ia)
    throw new Error(`Source is too short (${l.toFixed(1)} s). Need at least ${ia} s.`);
  const g = Math.min($a, Math.max(ia, a));
  if (l <= g) {
    fe(r, "encoding", 0.88, "Encoding cover-ready reference…");
    const T = xo(e, 0, e.length), A = wo(T, e.sampleRate), _ = await vo(A);
    return fe(r, "done", 1, "Reference sample ready."), { base64: _, durationSec: l, startSec: o, sourceDurationSec: d, score: 1 };
  }
  fe(r, "analyzing", 0.78, "Analyzing loudness and musical shape…");
  const m = Ui(e), h = Oi(m, g);
  if (h.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  h.sort((T, A) => A.score - T.score);
  const b = h[0], p = Math.floor(b.startFrame / m.framesPerSec * e.sampleRate), f = Math.floor(b.lenFrames / m.framesPerSec * e.sampleRate);
  fe(r, "encoding", 0.9, "Encoding cover-ready reference…");
  const v = xo(e, p, f), w = wo(v, e.sampleRate), C = await vo(w);
  return fe(r, "done", 1, "Reference sample ready."), {
    base64: C,
    durationSec: f / e.sampleRate,
    startSec: o + p / e.sampleRate,
    sourceDurationSec: d,
    score: Math.max(0, Math.min(1, b.score))
  };
}, $i = async (e, a = zo) => {
  const r = $d(a), o = Math.min($a, Math.max(ia, r.targetSec));
  if (typeof e == "string" && r.fastRemote && Hd(e))
    try {
      const d = await Wd(e, o, r);
      return await Fn(
        d.buffer,
        o,
        r,
        d.sourceOffsetSec,
        d.sourceDurationSec
      );
    } catch (d) {
      if (d.name === "AbortError") throw d;
      fe(r, "loading", 0.08, "Fast streamed capture failed — falling back to full decode…");
    }
  fe(r, "loading", 0.08, "Loading reference audio…");
  const i = typeof e == "string" ? await Di(e, r) : e;
  fe(r, "decoding", 0.28, "Decoding reference audio…");
  const l = await ji(i, $a + 5, !0, r);
  return await Fn(l, o, r);
}, Qd = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(r * a);
  let i = 0;
  for (const g of e) i += g.length;
  i -= o * (e.length - 1);
  const l = new Float32Array(i);
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
}, Zd = (e, a, r) => {
  const o = [...e].sort((l, d) => d.score - l.score), i = [];
  for (const l of o)
    if (i.some(
      (g) => Math.abs(g.startFrame - l.startFrame) < Math.max(g.lenFrames, l.lenFrames) + r
    ) || i.push(l), i.length >= a) break;
  return i.sort((l, d) => l.startFrame - d.startFrame), i;
}, eu = async (e, a = {}) => {
  fe(a, "loading", 0.08, "Loading reference audio…");
  const r = typeof e == "string" ? await Di(e, a) : e;
  fe(a, "decoding", 0.28, "Decoding reference audio…");
  const o = await ji(r, $a + 5, !0, a), i = o.length / o.sampleRate;
  if (i < ia * 2) {
    const w = await $i(r, { ...a, targetSec: zo });
    return {
      base64: w.base64,
      durationSec: w.durationSec,
      segments: [{ startSec: w.startSec, endSec: w.startSec + w.durationSec, score: w.score }],
      sourceDurationSec: i
    };
  }
  fe(a, "analyzing", 0.68, "Finding iconic moments…");
  const l = Ui(o), d = Oi(l, Hn);
  if (d.length === 0)
    throw new Error("Could not analyze the audio.");
  const g = Math.max(
    Math.floor(Hn * l.framesPerSec * 0.5),
    Math.floor(l.rms.length / 4)
  ), m = Zd(d, Dd, g), h = m.map((w) => {
    const C = Math.floor(w.startFrame / l.framesPerSec * o.sampleRate), T = Math.floor(w.lenFrames / l.framesPerSec * o.sampleRate);
    return xo(o, C, T);
  }), b = Qd(h, o.sampleRate, Ud);
  fe(a, "encoding", 0.9, "Encoding cover-ready reference mix…");
  const p = wo(b, o.sampleRate), f = await vo(p);
  fe(a, "done", 1, "Reference sample ready.");
  const v = m.map((w) => ({
    startSec: w.startFrame / l.framesPerSec,
    endSec: (w.startFrame + w.lenFrames) / l.framesPerSec,
    score: Math.max(0, Math.min(1, w.score))
  }));
  return {
    base64: f,
    durationSec: b.length / o.sampleRate,
    segments: v,
    sourceDurationSec: i
  };
};
class Hi extends Error {
  status;
  code;
  constructor(a, r, o) {
    super(o), this.name = "MusicDaemonError", this.status = a, this.code = r;
  }
}
const pa = async (e, a) => {
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
    const i = o, l = typeof i?.error == "string" ? i.error : `http_${r.status}`;
    throw new Hi(r.status, l, l === "music_unavailable" ? "Music search is still starting up." : l);
  }
  return o;
}, Fi = async (e, a, r) => {
  const o = await fetch(e, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json", "Sec-Fetch-Site": "same-origin" },
    credentials: "same-origin",
    body: JSON.stringify(a),
    signal: r
  });
  let i = null;
  try {
    i = await o.json();
  } catch {
    i = null;
  }
  if (!o.ok) {
    const l = i, d = typeof l?.error == "string" ? l.error : `http_${o.status}`;
    throw new Hi(o.status, d, d);
  }
  return i;
}, tu = (e) => pa("/api/music/status", e), Bn = async (e) => (await pa("/api/music/providers", e)).providers ?? [], Wn = async (e) => (await pa("/api/music/connectors", e)).connectors ?? [], au = (e, a, r) => Fi("/api/music/connectors/configure", { provider: e, credentials: a }, r), ru = (e, a) => Fi("/api/music/connectors/disconnect", { provider: e }, a), ou = async (e, a = 20, r) => {
  const o = new URLSearchParams({ q: e, limit: String(a) });
  return (await pa(`/api/music/search?${o.toString()}`, r)).results ?? [];
}, nu = (e, a = "tracks,albums,artists,playlists", r = 20, o) => {
  const i = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return pa(`/api/music/search2?${i.toString()}`, o);
}, qn = (e, a) => {
  const r = new URLSearchParams({ videoId: e });
  return pa(`/api/music/stream?${r.toString()}`, a);
}, Nr = async (e, a) => {
  const r = await fetch(e, {
    ...a,
    headers: {
      ...a?.body ? { "Content-Type": "application/json" } : {},
      ...a?.headers ?? {}
    }
  }), o = await r.text();
  let i = null;
  try {
    i = o ? JSON.parse(o) : null;
  } catch {
    i = o;
  }
  if (!r.ok) {
    const l = typeof i == "object" && i && "error" in i ? String(i.error) : o || r.statusText;
    throw new Error(l);
  }
  return i;
}, so = async () => Nr("/api/juli3ta/library/tracks"), Jn = async (e) => (await Nr(
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
)).track, iu = async (e) => {
  await Nr("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, su = async () => (await Nr("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, ko = "0.3.19", Da = "application/x-juli3ta-track", hr = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", Bi = (e) => e.source !== "youtube", Ma = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const o of r)
      a.has(o.id) || a.set(o.id, o);
  return Array.from(a.values()).sort((r, o) => o.createdAt - r.createdAt);
}, lu = (e) => Bi(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), Ut = [
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
], cu = Ut.flatMap((e) => e.chips), du = ["very_slow", "slow", "medium", "fast", "very_fast"], uu = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], pu = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], mu = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], hu = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], gu = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], yu = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], fu = ["narrow", "medium", "wide"], bu = ["none", "gradual", "sudden"], vu = ["low", "medium", "high"], xu = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], wu = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], ku = ["male", "female", "mixed", "other", "none"], Su = [
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
], Tu = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], _u = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], Nu = [
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
], Cu = [
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
], Eu = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], ae = (e) => e.replace(/_/g, " "), Au = (e, a, r) => {
  const o = (l) => l.trim().replace(/^[-••\d.)(]+\s*/, "").trim(), i = (l, d) => o(l).split(/\s+/).slice(0, d).join(" ");
  if (e) {
    const l = e.split(`
`).map((d) => d.trim()).find((d) => d && !d.startsWith("[") && !d.startsWith("(") && d.split(/\s+/).length >= 3);
    if (l) {
      const d = i(l, 6).replace(/[,.!?;:—-]+$/, "").trim();
      if (d.length >= 3) return d;
    }
  }
  if (a.trim()) {
    const l = i(a, 6).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  if (r.trim()) {
    const l = i(r, 4).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  return "Untitled";
}, Mu = (e) => {
  if (!e) return "";
  const a = e.replace(/\.[a-z0-9]{2,5}$/i, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return a.length >= 3 ? a : "";
}, Lu = (e) => {
  let r = e.replace(/\s+/g, " ").trim() || "Polished modern cover, clear vocals, tight rhythm, high-quality mix";
  if (r.length < 10 && (r = `${r}, style cover, polished music production`.replace(/^,\s*/, "")), r.length <= 300) return r;
  const o = r.slice(0, 300).replace(/\s+\S*$/, "").trim();
  return o.length >= 10 ? o : r.slice(0, 300);
}, Io = (e) => {
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
  const i = [];
  return e.context?.era_reference && i.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && i.push(`${ae(e.context.cultural_region)} scene`), e.context?.intended_use?.length && i.push(`use: ${e.context.intended_use.map(ae).join("/")}`), e.context?.explicit_lyrics && i.push("explicit lyrics"), i.length && a.push(i.join(", ")), a.join(". ");
}, zu = [
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
], Gn = "tytus.music-creator.gallery", Vn = "tytus.music-creator", lo = "gallery", ra = 3500, Yn = 1e3, Iu = 2e3, wt = 30, Kn = 45, Be = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), o = a % 60;
  return `${r}:${o.toString().padStart(2, "0")}`;
}, Ha = (e) => {
  if (!e) return "";
  const a = "base64,", r = e.indexOf(a);
  return (r >= 0 ? e.slice(r + a.length) : e).replace(/\s+/g, "");
}, Ru = (e) => {
  if (!e) return null;
  const a = "base64,", r = e.indexOf(a);
  if (r >= 0) return Ha(e.slice(r + a.length)) || null;
  const o = Ha(e);
  return /^[A-Za-z0-9+/=]+$/.test(o) ? o : null;
}, Pu = (e, a = "audio/wav") => {
  const r = Ha(e), o = atob(r), i = new Uint8Array(o.length);
  for (let l = 0; l < o.length; l++) i[l] = o.charCodeAt(l);
  return new Blob([i], { type: a });
}, ju = (e) => {
  const a = new Uint8Array(e), r = 32768;
  let o = "";
  for (let i = 0; i < a.length; i += r) {
    const l = a.subarray(i, i + r);
    o += String.fromCharCode(...l);
  }
  return btoa(o);
}, Sr = (e) => {
  try {
    const a = Ha(e), r = a.endsWith("==") ? 2 : a.endsWith("=") ? 1 : 0, o = Math.max(0, Math.floor(a.length * 3 / 4) - r), i = atob(a.slice(0, Math.min(a.length, 4096)));
    if (i.length < 44 || i.slice(0, 4) !== "RIFF" || i.slice(8, 12) !== "WAVE") return null;
    const l = new Uint8Array(i.length);
    for (let p = 0; p < i.length; p++) l[p] = i.charCodeAt(p);
    const d = new DataView(l.buffer);
    let g = 12, m = 0, h = 0, b = 0;
    for (; g + 8 <= l.length; ) {
      const p = String.fromCharCode(l[g], l[g + 1], l[g + 2], l[g + 3]), f = d.getUint32(g + 4, !0), v = g + 8;
      if (p === "fmt " && v + 16 <= l.length)
        m = d.getUint32(v + 4, !0), h = d.getUint16(v + 12, !0);
      else if (p === "data") {
        b = f === 4294967295 || v + f > o ? Math.max(0, o - v) : f;
        break;
      }
      g = v + f + f % 2;
    }
    return !m || !h || !b ? null : b / (m * h) * 1e3;
  } catch {
    return null;
  }
}, Ro = (e) => e.source === "youtube" && !!e.externalId, Ce = (e) => !!e.audioDataUrl || Ro(e), Cr = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? Tr(e.externalId) : ""), Tr = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", Wi = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, La = (e) => `youtube:${e}`, Du = async () => {
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
    const a = localStorage.getItem(Gn);
    if (a) {
      const r = JSON.parse(a);
      if (Array.isArray(r))
        for (const o of r)
          try {
            await kr(e(o));
          } catch {
          }
      localStorage.removeItem(Gn);
    }
  } catch (a) {
    console.warn("Legacy localStorage gallery migration failed:", a);
  }
  try {
    const a = await new Promise((r) => {
      const o = indexedDB.open(Vn);
      o.onsuccess = () => {
        const i = o.result;
        if (!i.objectStoreNames.contains(lo)) {
          i.close(), r([]);
          return;
        }
        const d = i.transaction(lo, "readonly").objectStore(lo).getAll();
        d.onsuccess = () => {
          i.close(), r(d.result ?? []);
        }, d.onerror = () => {
          i.close(), r([]);
        };
      }, o.onerror = () => r([]);
    });
    for (const r of a)
      try {
        await kr(e(r));
      } catch {
      }
    a.length > 0 && indexedDB.deleteDatabase(Vn);
  } catch (a) {
    console.warn("Legacy IDB gallery migration failed:", a);
  }
}, ja = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, Uu = (e, a) => zd(a).map((r) => ({
  ...r,
  models: ja
})), Ou = (e) => {
  const a = (p, f) => {
    const v = p.map((w) => w.toLowerCase());
    for (const w of f) {
      const C = v.findIndex((T) => w.test(T));
      if (C >= 0) return p[C];
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
  ]), i = new Set([r, o].filter((p) => !!p)), l = e.filter((p) => !i.has(p)), d = a(l, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), g = (p) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(p), m = e.filter((p) => !g(p)), h = a(m, [
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
}, $u = 6e4, co = /* @__PURE__ */ new Map(), ca = (e, a, r) => {
  const o = new Headers(r.headers ?? {}), i = a.startsWith("/") ? a : `/${a}`;
  if (e.proxyPodId) {
    o.delete("Authorization");
    const l = `/api/pods/${encodeURIComponent(e.proxyPodId)}/proxy/v1${i}`;
    return fetch(l, { ...r, headers: o });
  }
  return e.apiKey && o.set("Authorization", `Bearer ${e.apiKey}`), fetch(`${e.url}${i}`, { ...r, headers: o });
}, Hu = async (e, a) => {
  const r = co.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: ja };
    co.delete(e.url);
  }
  const o = da(a, Bu);
  try {
    const i = await ca(e, "/models", {
      method: "GET",
      signal: o.signal,
      headers: { Accept: "application/json" }
    });
    if (i.status >= 500) return { ok: !1, models: ja };
    if (!i.ok) return { ok: !0, models: ja };
    const d = ((await i.json()).data ?? []).map((g) => g?.id).filter((g) => typeof g == "string" && g.length > 0);
    return { ok: !0, models: Ou(d) };
  } catch (i) {
    return (i?.name ?? "") === "TypeError" && co.set(e.url, Date.now() + $u), { ok: !1, models: ja };
  } finally {
    o.dispose();
  }
}, Fu = async (e, a) => (await Promise.all(
  e.map(async (o) => {
    if (a.aborted) return null;
    const { ok: i, models: l } = await Hu(o, a);
    return i ? { ...o, models: l } : null;
  })
)).filter((o) => o !== null), gr = 6e4, Xn = 42e4, Bu = 8e3, da = (e, a) => {
  const r = AbortSignal.any, o = AbortSignal.timeout;
  if (r && o) {
    const d = o(a);
    return { signal: e ? r([e, d]) : d, dispose: () => {
    } };
  }
  const i = new AbortController(), l = setTimeout(() => {
    i.signal.aborted || i.abort(new DOMException("Timeout", "TimeoutError"));
  }, a);
  return e && (e.aborted ? i.abort(e.reason) : e.addEventListener("abort", () => i.abort(e.reason), { once: !0 })), { signal: i.signal, dispose: () => clearTimeout(l) };
}, Wu = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]), qu = /* @__PURE__ */ new Set([402, 425, 429]);
class Se extends Error {
  status;
  body;
  constructor(a, r, o) {
    super(o ?? `HTTP ${a}: ${r.slice(0, 200)}`), this.name = "GatewayError", this.status = a, this.body = r;
  }
}
function qi(e) {
  const a = e.indexOf("{");
  if (a === -1) return null;
  let r = 0, o = !1, i = !1;
  for (let l = a; l < e.length; l++) {
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
    if (d === "{") r++;
    else if (d === "}" && (r--, r === 0))
      return e.slice(a, l + 1);
  }
  return null;
}
const Er = async (e, a, r, o = Wu) => {
  if (e.length === 0)
    throw new Error(`No ${r}-capable models available on this endpoint.`);
  let i = null;
  for (const g of e)
    try {
      return await a(g);
    } catch (m) {
      if (m.name === "AbortError" || m.name === "TimeoutError")
        throw m;
      if (m instanceof TypeError) {
        i = m;
        continue;
      }
      if (m instanceof Se && o.has(m.status)) {
        i = m;
        continue;
      }
      throw m;
    }
  const l = i?.message ?? "unknown", d = i instanceof Se ? i.status === 429 ? "Wait for the rate limit to reset, or pick a different endpoint in Settings." : [408, 500, 502, 503, 504].includes(i.status) ? "Remote AIL/provider timed out or returned an empty gateway response. Retry once, then switch endpoint in Settings if it repeats." : i.status === 402 ? "That provider/model is out of credits; pick a different endpoint in Settings." : "Pick a different endpoint in Settings or check the provider configuration." : i instanceof TypeError ? "Network/CORS failed before the gateway answered; check the selected endpoint in Settings." : "Pick a different endpoint in Settings.";
  throw new Error(`All ${r} models exhausted. Last error: ${l}. ${d}`);
}, Ju = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), Gu = async (e, a, r) => {
  let o = 0, i = "";
  const l = da(r, gr);
  try {
    const f = { prompt: a, mode: "write_full_song" };
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
      const w = await v.json();
      if (!w || typeof w.lyrics != "string" || w.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...w, usedFallback: !1 };
    }
    o = v.status, i = await v.text().catch(() => "");
  } catch (f) {
    const v = f.name;
    if (v === "AbortError" && r?.aborted) throw f;
    if (v === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${gr / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", f);
  } finally {
    l.dispose();
  }
  if (o !== 0 && !Ju.has(o)) {
    const f = i.length > 300 ? `${i.slice(0, 300)}…` : i;
    throw new Error(`Lyrics HTTP ${o}: ${f || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, i);
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
}`, p = await Er(m, async (f) => {
    const v = {
      model: f,
      messages: [
        { role: "system", content: b },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, w = async (C) => {
      const T = da(r, gr);
      let A;
      try {
        A = await ca(e, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            C ? { ...v, response_format: { type: "json_object" } } : v
          ),
          signal: T.signal
        });
      } catch (M) {
        throw M.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${gr / 1e3}s.`) : M;
      } finally {
        T.dispose();
      }
      if (!A.ok) {
        const M = await A.text().catch(() => "");
        throw new Se(A.status, M, `Lyrics fallback HTTP ${A.status}: ${M.slice(0, 300)}`);
      }
      const N = (await A.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!N)
        throw new Se(502, "", "Lyrics fallback returned empty content");
      const W = N.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), P = qi(W) ?? W;
      let k;
      try {
        k = JSON.parse(P);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", N.slice(0, 400)), new Se(502, N.slice(0, 200), `Lyrics fallback returned non-JSON content: ${N.slice(0, 200)}`);
      }
      if (!k.lyrics)
        throw new Se(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return k;
    };
    try {
      return await w(!0);
    } catch (C) {
      if (C instanceof Se && C.status === 400 && /response_format|json_object/i.test(C.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", f), await w(!1);
      throw C;
    }
  }, "chat-lyrics");
  return {
    song_title: p.song_title || "Untitled",
    style_tags: p.style_tags || "",
    lyrics: p.lyrics,
    usedFallback: !0
  };
}, Vu = async (e, a, r) => {
  const o = !!a.refAudioBase64, i = (h) => /music/i.test(h) && !/cover|lyric/i.test(h), l = (h) => /cover/i.test(h), d = /* @__PURE__ */ new Set(), g = (h, b) => {
    b && !d.has(b) && (d.add(b), h.push(b));
  }, m = [];
  if (o ? (g(m, e.models.cover), e.models.allIds.filter(l).forEach((h) => g(m, h))) : (g(m, e.models.music), e.models.allIds.filter(i).forEach((h) => g(m, h))), m.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return Er(m, async (h) => {
    const b = {
      model: h
    }, p = a.lyrics?.trim() ?? "";
    (!o || p) && (b.lyrics = p), a.prompt && (b.prompt = a.prompt), a.instrumental && (b.instrumental = !0);
    const f = !o;
    if (f && (b.stream = !0), o) {
      const A = Ha(a.refAudioBase64 ?? "");
      b.audio_base64 = A;
      const _ = Sr(A), N = _ !== null ? _ / 1e3 : a.refAudioDurationSec ?? null;
      if (N !== null && N < wt)
        throw new Error(`Reference sample is only ${N.toFixed(1)} s. MiniMax cover rejects short song references; pick a longer song or re-load a full ~60 s source sample before Restyle.`);
      console.info("[Juli3ta] Sending music-cover reference:", {
        modelId: h,
        refDurationSec: N !== null ? Number(N.toFixed(2)) : null,
        refBytesApprox: Math.max(0, Math.floor(A.length * 3 / 4)),
        prompt: a.prompt ?? "",
        lyricsProvided: !!p
      });
    }
    const v = da(r, Xn);
    let w;
    try {
      w = await ca(e, "/music/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(b),
        signal: v.signal
      });
    } catch (A) {
      throw A.name === "TimeoutError" ? new Error(`Music generation timed out after ${Xn / 1e3}s. Remote music can take several minutes; retry once or switch endpoint in Settings.`) : A;
    } finally {
      v.dispose();
    }
    if (!w.ok) {
      const A = await w.text().catch(() => "");
      throw o && w.status === 413 ? new Se(
        w.status,
        A,
        "Reference audio was too large for the gateway. JULI3TA now makes compact cover-ready reference samples; clear and re-pick the reference audio, then retry Restyle."
      ) : new Se(w.status, A, `Music HTTP ${w.status}: ${A.slice(0, 300)}`);
    }
    const C = w.headers.get("content-type")?.toLowerCase() ?? "";
    if (f && (C.includes("audio/") || C.includes("application/octet-stream"))) {
      const A = await w.arrayBuffer();
      if (A.byteLength < 100)
        throw new Se(502, "", "Music stream returned no audio data — gateway accepted the call but upstream returned nothing.");
      return {
        data: {
          audio: ju(A),
          duration_ms: 0,
          bitrate: 0,
          sample_rate: 0,
          channels: 0,
          format: "mp3",
          size_bytes: A.byteLength
        },
        model: h,
        trace_id: ""
      };
    }
    const T = await w.json();
    if (!T?.data?.audio || typeof T.data.audio != "string" || T.data.audio.length < 100)
      throw new Se(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return T;
  }, o ? "music-cover" : "music", qu);
}, Qn = 6e4, br = (e, a, r) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", i = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), l = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${o}".`
  ];
  return i && d.push(`Genre: ${i}.`), l && d.push(`Mood: ${l}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, So = async (e, a, r) => {
  const o = (g) => /image|diffusion|dall-?e|flux|sdxl/i.test(g), i = /* @__PURE__ */ new Set(), l = [], d = (g) => {
    g && !i.has(g) && (i.add(g), l.push(g));
  };
  if (d(e.models.image), e.models.allIds.filter(o).forEach(d), l.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return Er(l, async (g) => {
    const m = da(r, Qn), b = /minimax|ail-image|image-01/i.test(g) ? {
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
    let p;
    try {
      p = await ca(e, "/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(b),
        signal: m.signal
      });
    } catch (N) {
      throw N.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${Qn / 1e3}s.`) : N;
    } finally {
      m.dispose();
    }
    if (!p.ok) {
      const N = await p.text().catch(() => "");
      throw new Se(p.status, N, `Cover-art HTTP ${p.status}: ${N.slice(0, 200)}`);
    }
    const f = await p.json(), v = f.base_resp;
    if (v && typeof v.status_code == "number" && v.status_code !== 0)
      throw new Se(502, v.status_msg ?? "", `Cover-art ${g} rejected: ${v.status_msg ?? "status_code=" + v.status_code}`);
    const w = (N) => typeof N != "string" || !N.length ? null : N.startsWith("data:") ? N : `data:image/png;base64,${N}`, C = (N) => typeof N == "string" && /^https?:\/\//i.test(N) ? N : null, T = f.data;
    if (T && typeof T == "object" && !Array.isArray(T)) {
      const N = T, W = N.image_base64;
      if (Array.isArray(W) && W[0]) {
        const M = w(W[0]);
        if (M) return M;
      }
      const P = w(N.image) ?? w(N.b64_json) ?? C(N.url);
      if (P) return P;
      const k = N.image_url ?? N.image_urls;
      if (Array.isArray(k) && k[0]) {
        const M = C(k[0]);
        if (M) return M;
      }
    }
    if (Array.isArray(T) && T[0]) {
      const N = T[0], W = w(N.b64_json) ?? w(N.image_base64) ?? C(N.url);
      if (W) return W;
      throw new Se(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const A = w(f.image) ?? w(f.b64_json);
    if (A) return A;
    const _ = f.images;
    if (Array.isArray(_) && _[0]) {
      const N = _[0], W = w(N.b64_json) ?? w(N.image) ?? C(N.url);
      if (W) return W;
    }
    throw new Se(502, "", `Cover-art response shape not recognised: ${JSON.stringify(f).slice(0, 200)}`);
  }, "image");
}, Zn = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], ei = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
], uo = (e) => Ro(e) ? "metadata" : "auto";
function Yu(e, a, r) {
  const [o, i] = S(() => {
    let k = "off";
    try {
      const J = localStorage.getItem("juli3ta:repeatMode");
      (J === "off" || J === "all" || J === "one") && (k = J);
    } catch {
    }
    let M = !1;
    try {
      M = localStorage.getItem("juli3ta:shuffle") === "1";
    } catch {
    }
    let L = 1;
    try {
      const J = localStorage.getItem("juli3ta:volume");
      if (J !== null) {
        const Z = Number.parseFloat(J);
        Number.isFinite(Z) && (L = Math.max(0, Math.min(1, Z)));
      }
    } catch {
    }
    let I = 1;
    try {
      const J = localStorage.getItem("juli3ta:playbackRate");
      if (J !== null) {
        const Z = Number.parseFloat(J);
        Number.isFinite(Z) && (I = Math.max(0.25, Math.min(4, Z)));
      }
    } catch {
    }
    return { trackId: null, playing: !1, loadingTrackId: null, positionMs: 0, durationMs: 0, volume: L, repeatMode: k, shuffle: M, playbackRate: I, sleepTimerEndsAt: null };
  }), l = te(null), d = te([]), g = te(!1), m = z((k) => {
    i((M) => ({ ...M, repeatMode: k }));
    try {
      localStorage.setItem("juli3ta:repeatMode", k);
    } catch {
    }
  }, []), h = z((k) => {
    i((M) => ({ ...M, shuffle: k }));
    try {
      localStorage.setItem("juli3ta:shuffle", k ? "1" : "0");
    } catch {
    }
  }, []), b = z((k) => {
    const M = Math.max(0.25, Math.min(4, k));
    a.current && (a.current.playbackRate = M), i((L) => ({ ...L, playbackRate: M }));
    try {
      localStorage.setItem("juli3ta:playbackRate", String(M));
    } catch {
    }
  }, [a]), p = z((k) => {
    if (k === null || k <= 0) {
      i((I) => ({ ...I, sleepTimerEndsAt: null }));
      return;
    }
    const M = Math.min(k, 1440), L = Date.now() + M * 6e4;
    i((I) => ({ ...I, sleepTimerEndsAt: L }));
  }, []), f = z((k) => {
    (async () => {
      i((I) => ({
        ...I,
        trackId: k.id,
        playing: !1,
        loadingTrackId: Ce(k) ? k.id : null,
        positionMs: 0,
        durationMs: k.durationMs || 0
      }));
      const M = k.audioDataUrl || await r?.(k);
      if (!M) {
        i((I) => ({ ...I, loadingTrackId: null }));
        return;
      }
      const L = a.current;
      if (!L) {
        i((I) => ({ ...I, loadingTrackId: null }));
        return;
      }
      o.trackId !== k.id || L.src !== M ? (L.src = M, L.preload = uo(k), L.load(), L.pause(), i((I) => ({
        ...I,
        trackId: k.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: k.durationMs || 0
      }))) : i((I) => ({ ...I, loadingTrackId: null }));
    })();
  }, [o.trackId, a, r]), v = z((k) => {
    (async () => {
      if (l.current = null, o.trackId && o.trackId !== k.id && !g.current) {
        const I = d.current;
        I[I.length - 1] !== o.trackId && (I.push(o.trackId), I.length > 50 && I.splice(0, I.length - 50));
      }
      g.current = !1, i((I) => ({
        ...I,
        trackId: k.id,
        loadingTrackId: k.id,
        durationMs: k.durationMs || I.durationMs
      }));
      const M = k.audioDataUrl || await r?.(k);
      if (!M) {
        i((I) => ({ ...I, loadingTrackId: null, playing: !1 }));
        return;
      }
      const L = a.current;
      if (!L) {
        i((I) => ({ ...I, loadingTrackId: null, playing: !1 }));
        return;
      }
      (o.trackId !== k.id || L.src !== M) && (L.src = M, L.preload = uo(k), i((I) => ({ ...I, trackId: k.id, positionMs: 0, durationMs: k.durationMs || 0 }))), L.play().then(() => i((I) => ({ ...I, loadingTrackId: null, playing: !0 }))).catch(() => i((I) => ({ ...I, loadingTrackId: null, playing: !1 })));
    })();
  }, [o.trackId, a, r]), w = z(() => {
    a.current?.pause(), i((k) => ({ ...k, playing: !1, loadingTrackId: null }));
  }, [a]), C = z((k) => {
    if (o.loadingTrackId) return;
    if (k) {
      o.trackId === k.id && o.playing ? w() : v(k);
      return;
    }
    if (o.playing) {
      w();
      return;
    }
    const M = o.trackId ? e.find((L) => L.id === o.trackId) : null;
    M ? v(M) : a.current?.src && a.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, v, w, a]), T = z((k) => {
    const M = a.current;
    M && (M.currentTime = Math.max(0, k / 1e3));
  }, [a]), A = z((k) => {
    const M = Math.max(0, Math.min(1, k));
    a.current && (a.current.volume = M), i((L) => ({ ...L, volume: M }));
    try {
      localStorage.setItem("juli3ta:volume", String(M));
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
      a.current?.pause(), i((L) => ({ ...L, sleepTimerEndsAt: null, playing: !1 }));
      return;
    }
    const M = window.setTimeout(() => {
      a.current?.pause(), i((L) => ({ ...L, sleepTimerEndsAt: null, playing: !1 }));
    }, k);
    return () => window.clearTimeout(M);
  }, [o.sleepTimerEndsAt, a]);
  const _ = ye(() => e.filter(Ce), [e]), N = z(() => {
    if (_.length === 0) return null;
    if (_.length === 1) return _[0];
    const k = _.filter((M) => M.id !== o.trackId);
    return k[Math.floor(Math.random() * k.length)];
  }, [_, o.trackId]), W = z(() => {
    if (!o.trackId || _.length === 0) return;
    if (o.shuffle) {
      const L = N();
      L && v(L);
      return;
    }
    const k = _.findIndex((L) => L.id === o.trackId);
    if (k < 0) return;
    const M = _[(k + 1) % _.length];
    M && v(M);
  }, [o.trackId, o.shuffle, _, v, N]), P = z(() => {
    if (!o.trackId || _.length === 0) return;
    if (o.shuffle) {
      const L = d.current;
      for (; L.length > 0; ) {
        const J = L.pop();
        if (!J || J === o.trackId) continue;
        const Z = _.find((be) => be.id === J);
        if (Z) {
          g.current = !0, v(Z);
          return;
        }
      }
      const I = N();
      I && v(I);
      return;
    }
    const k = _.findIndex((L) => L.id === o.trackId);
    if (k < 0) return;
    const M = _[(k - 1 + _.length) % _.length];
    M && v(M);
  }, [o.trackId, o.shuffle, _, v, N]);
  return B(() => {
    const k = a.current;
    if (!k) return;
    const M = () => i((O) => ({ ...O, positionMs: k.currentTime * 1e3 })), L = () => i((O) => ({
      ...O,
      durationMs: Number.isFinite(k.duration) ? k.duration * 1e3 : O.durationMs
    })), I = () => i((O) => ({ ...O, playing: !0, loadingTrackId: null })), J = () => i((O) => ({ ...O, playing: !1, loadingTrackId: null })), Z = () => i((O) => ({ ...O, loadingTrackId: null })), be = () => {
      const O = o.trackId ? _.find((ee) => ee.id === o.trackId) : null;
      if (!O || O.audioDataUrl || !r || l.current === O.id) {
        i((ee) => ({ ...ee, playing: !1, loadingTrackId: null }));
        return;
      }
      l.current = O.id, i((ee) => ({ ...ee, loadingTrackId: O.id, playing: !1 })), r(O, { force: !0 }).then((ee) => {
        if (!ee) throw new Error("No refreshed stream URL");
        return k.src = ee, k.preload = uo(O), k.play();
      }).then(() => i((ee) => ({ ...ee, playing: !0, loadingTrackId: null }))).catch(() => i((ee) => ({ ...ee, playing: !1, loadingTrackId: null })));
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
          const O = _.filter((Le) => Le.id !== o.trackId), ee = O[Math.floor(Math.random() * O.length)];
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
      i((O) => ({ ...O, playing: !1, positionMs: 0 }));
    };
    return k.addEventListener("timeupdate", M), k.addEventListener("loadedmetadata", L), k.addEventListener("play", I), k.addEventListener("pause", J), k.addEventListener("canplay", Z), k.addEventListener("error", be), k.addEventListener("ended", F), () => {
      k.removeEventListener("timeupdate", M), k.removeEventListener("loadedmetadata", L), k.removeEventListener("play", I), k.removeEventListener("pause", J), k.removeEventListener("canplay", Z), k.removeEventListener("error", be), k.removeEventListener("ended", F);
    };
  }, [_, o.trackId, o.repeatMode, o.shuffle, v, a, r]), { state: o, queue: e, play: v, pause: w, toggle: C, select: f, seek: T, setVolume: A, setRepeatMode: m, setShuffle: h, setPlaybackRate: b, setSleepTimer: p, next: W, prev: P };
}
function ti({
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
function po({
  label: e,
  tooltip: a,
  onClick: r,
  busy: o,
  disabled: i
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      onClick: r,
      disabled: i,
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
        o ? /* @__PURE__ */ t(re, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 10 }),
        o ? "…" : e
      ]
    }
  );
}
function ut({
  track: e,
  size: a,
  iconSize: r,
  radius: o
}) {
  const i = Cr(e);
  return i ? /* @__PURE__ */ t(
    "img",
    {
      src: i,
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
function Ku({ player: e, allTracks: a }) {
  const { state: r, toggle: o, next: i, prev: l, seek: d, setVolume: g, setPlaybackRate: m, setSleepTimer: h, queue: b } = e, p = b.find((A) => A.id === r.trackId) ?? a.find((A) => A.id === r.trackId) ?? null;
  if (!p) return null;
  const f = r.durationMs > 0 ? r.durationMs : p.durationMs, v = Math.min(r.positionMs, f || 0), w = f > 0 ? v / f * 100 : 0, C = r.loadingTrackId === p.id, T = (A) => {
    if (!f) return;
    const _ = A.currentTarget.getBoundingClientRect(), N = (A.clientX - _.left) / _.width;
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
        /* @__PURE__ */ t(ut, { track: p, size: 40, iconSize: 18, radius: 6 }),
        /* @__PURE__ */ s("div", { className: "flex flex-col min-w-0", style: { width: 180 }, children: [
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: p.title }),
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: p.styleTags && p.styleTags !== "—" ? p.styleTags : "—" })
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
              children: /* @__PURE__ */ t(_o, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: l,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(_e, { size: 12, style: { transform: "rotate(180deg)" } })
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
              children: C ? /* @__PURE__ */ t(re, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(Et, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(_e, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: i,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(_e, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                const A = r.repeatMode, _ = A === "off" ? "all" : A === "all" ? "one" : "off";
                e.setRepeatMode(_);
              },
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: r.repeatMode === "off" ? "var(--text-secondary)" : "var(--accent-primary)"
              },
              title: r.repeatMode === "off" ? "Repeat off" : r.repeatMode === "all" ? "Repeating queue" : "Repeating this track",
              children: r.repeatMode === "one" ? /* @__PURE__ */ t(yi, { size: 12 }) : /* @__PURE__ */ t(lc, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: Be(v)
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
            children: Be(f)
          }
        ),
        /* @__PURE__ */ t(Qu, { rate: r.playbackRate, setRate: m }),
        /* @__PURE__ */ t(Xu, { endsAt: r.sleepTimerEndsAt, setSleepTimer: h }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(Zu, { volume: r.volume, setVolume: g }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
              value: r.volume,
              onChange: (A) => g(Number(A.target.value)),
              style: { width: "100%", accentColor: "var(--accent-primary)" }
            }
          )
        ] })
      ]
    }
  );
}
const ai = [null, 5, 15, 30, 45, 60];
function Xu({
  endsAt: e,
  setSleepTimer: a
}) {
  const [, r] = S(() => Date.now());
  B(() => {
    if (e === null) return;
    const h = window.setInterval(() => r(Date.now()), 1e3);
    return () => window.clearInterval(h);
  }, [e]);
  const o = e !== null, i = o ? Math.max(0, Math.ceil((e - Date.now()) / 6e4)) : 0, l = () => {
    if (!o) {
      a(ai[1]);
      return;
    }
    const h = ai.find(
      (b) => b !== null && b > i
    ) ?? null;
    a(h);
  }, d = (h) => {
    h.preventDefault(), o && a(null);
  }, g = o ? i > 0 ? `${i}m` : "<1m" : "", m = o ? `Sleep timer: pauses in ~${i}m. Click to extend, right-click to cancel.` : "Sleep timer (click to start, off by default)";
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
        /* @__PURE__ */ t(Yl, { size: 11 }),
        g && /* @__PURE__ */ t("span", { children: g })
      ]
    }
  );
}
const mo = [1, 1.25, 1.5, 2, 0.5, 0.75];
function Qu({
  rate: e,
  setRate: a
}) {
  const r = Math.abs(e - 1) < 1e-3, o = () => {
    const d = mo.findIndex((m) => Math.abs(m - e) < 1e-3), g = mo[(d + 1) % mo.length];
    a(g);
  }, i = (d) => {
    d.preventDefault(), r || a(1);
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
        color: r ? "var(--text-disabled)" : "var(--accent-primary)",
        border: `1px solid ${r ? "var(--border-subtle)" : "var(--accent-primary)"}`,
        background: r ? "transparent" : "var(--bg-hover)"
      },
      title: r ? "Playback speed (click to change)" : `Playback speed ${l} — click to cycle, right-click to reset`,
      children: l
    }
  );
}
function Zu({
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
      children: o ? /* @__PURE__ */ t(kc, { size: 12 }) : /* @__PURE__ */ t(xc, { size: 12 })
    }
  );
}
const ri = [
  { scope: "global", combo: "?", action: "Show this help" },
  { scope: "global", combo: "Esc", action: "Close modal / dismiss overlay" },
  { scope: "player", combo: "Space", action: "Play / Pause" },
  { scope: "player", combo: "←", action: "Seek back 5s" },
  { scope: "player", combo: "→", action: "Seek forward 5s" },
  { scope: "player", combo: "↑", action: "Volume up (10%)" },
  { scope: "player", combo: "↓", action: "Volume down (10%)" }
];
function ep({
  open: e,
  onClose: a
}) {
  if (!e) return null;
  const r = [
    { label: "Global", rows: ri.filter((o) => o.scope === "global") },
    { label: "Player view", rows: ri.filter((o) => o.scope === "player") }
  ];
  return Fa(
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
                      /* @__PURE__ */ t(Co, { name: "juli3ta:mark", size: 18 }),
                      /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: "Keyboard shortcuts" })
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: a,
                        className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                        style: { width: 28, height: 28, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(ke, { size: 14 })
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
function tp({ retrying: e, onRetry: a }) {
  const { t: r } = Bt();
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
            e ? /* @__PURE__ */ t(re, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 14 }),
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
function za({ label: e, hint: a, counter: r, counterDanger: o, className: i, headerExtra: l, children: d }) {
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
function ap({ onPick: e, disabled: a }) {
  const [r, o] = S(!1), [i, l] = S(Ut[0].label), [d, g] = S(""), m = d.trim().toLowerCase(), h = m.length > 0, b = ye(() => {
    if (!h) return [];
    const p = [];
    for (const f of Ut)
      for (const v of f.chips)
        v.toLowerCase().includes(m) && p.push({ family: f.label, chip: v });
    return p;
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: h ? `${b.length} match${b.length === 1 ? "" : "es"}` : `${cu.length} chips · click to add` })
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
                  /* @__PURE__ */ t(kt, { size: 11, style: { color: "var(--text-disabled)" } }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: d,
                      onChange: (p) => g(p.target.value),
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
                      children: /* @__PURE__ */ t(ke, { size: 11 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: () => o((p) => !p),
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
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: b.map(({ family: p, chip: f }) => /* @__PURE__ */ t(
          ho,
          {
            chip: f,
            family: p,
            onPick: e,
            disabled: a
          },
          `${p}::${f}`
        )) }) : /* @__PURE__ */ s(ge, { children: [
          !r && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: Ut.map((p) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => l(p.label),
              className: "px-2 rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                height: 24,
                fontSize: 10,
                fontWeight: i === p.label ? 600 : 500,
                color: i === p.label ? "var(--text-primary)" : "var(--text-secondary)",
                background: i === p.label ? "var(--bg-selected)" : "var(--bg-window)",
                border: `1px solid ${i === p.label ? "var(--accent-primary)" : "var(--border-subtle)"}`
              },
              children: p.label
            },
            p.label
          )) }),
          r ? /* @__PURE__ */ t(
            "div",
            {
              className: "grid gap-3",
              style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" },
              children: Ut.map((p) => /* @__PURE__ */ s("div", { children: [
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
                    children: p.label
                  }
                ),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: p.chips.map((f) => /* @__PURE__ */ t(ho, { chip: f, onPick: e, disabled: a }, f)) })
              ] }, p.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (Ut.find((p) => p.label === i) ?? Ut[0]).chips.map((p) => /* @__PURE__ */ t(ho, { chip: p, onPick: e, disabled: a }, p)) })
        ] })
      ]
    }
  );
}
function ho({
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
        /* @__PURE__ */ t(fo, { size: 10 }),
        e,
        a && /* @__PURE__ */ s("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function rp({ specs: e, onChange: a, disabled: r, onOptimize: o, optimizing: i }) {
  const [l, d] = S(!1), g = ye(() => Io(e), [e]), m = g.length > 0, h = z(
    (p, f) => {
      const v = { ...e };
      f === null ? delete v[p] : v[p] = f, a(v);
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
              onClick: () => d((p) => !p),
              className: "flex items-center gap-2 flex-1 hover:opacity-90 text-left",
              style: { background: "transparent", border: "none", cursor: "pointer" },
              children: [
                /* @__PURE__ */ t(yo, { size: 14, style: { color: "var(--text-secondary)" } }),
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
                onClick: (p) => {
                  p.stopPropagation(), o(), l || d(!0);
                },
                disabled: r || i,
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
                  i ? /* @__PURE__ */ t(re, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 11 }),
                  i ? "Optimizing…" : "AI Optimize"
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
                  na(e),
                  " set"
                ]
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => d((p) => !p),
                className: "flex items-center justify-center",
                style: { background: "transparent", border: "none", cursor: "pointer", width: 18, height: 18 },
                children: /* @__PURE__ */ t(
                  ui,
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
                /* @__PURE__ */ s(Ia, { label: "Structure", children: [
                  /* @__PURE__ */ t(he, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    oi,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (p) => h("structure", { ...e.structure, tempo_bpm: p }),
                      min: 40,
                      max: 260,
                      placeholder: "120",
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Tempo class", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.structure?.tempo_class,
                      options: du,
                      onChange: (p) => h("structure", { ...e.structure, tempo_class: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Time signature", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.structure?.time_signature,
                      options: uu,
                      onChange: (p) => h("structure", { ...e.structure, time_signature: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.structure?.rhythm_feel,
                      options: pu,
                      onChange: (p) => h("structure", { ...e.structure, rhythm_feel: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Groove", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.structure?.groove_pattern,
                      options: mu,
                      onChange: (p) => h("structure", { ...e.structure, groove_pattern: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Form", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.structure?.song_form,
                      options: hu,
                      onChange: (p) => h("structure", { ...e.structure, song_form: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Length (s)", children: /* @__PURE__ */ t(
                    oi,
                    {
                      value: e.structure?.length_seconds,
                      onChange: (p) => h("structure", { ...e.structure, length_seconds: p }),
                      min: 10,
                      max: 600,
                      placeholder: "180",
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Ia, { label: "Key", children: [
                  /* @__PURE__ */ t(he, { label: "Pitch", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.tonal?.key,
                      options: gu,
                      onChange: (p) => h("tonal", { ...e.tonal, key: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Mode", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.tonal?.mode,
                      options: yu,
                      onChange: (p) => h("tonal", { ...e.tonal, mode: p }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Ia, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(he, { label: "Range", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: fu,
                      onChange: (p) => h("dynamics", { ...e.dynamics, overall_dynamic_range: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: bu,
                      onChange: (p) => h("dynamics", { ...e.dynamics, crescendo_shape: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Big drops", children: /* @__PURE__ */ t(
                    ni,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (p) => h("dynamics", { ...e.dynamics, has_big_drops: p }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Ia, { label: "Context", children: [
                  /* @__PURE__ */ t(he, { label: "Era", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.context?.era_reference,
                      options: xu,
                      onChange: (p) => h("context", { ...e.context, era_reference: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Region", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.context?.cultural_region,
                      options: wu,
                      onChange: (p) => h("context", { ...e.context, cultural_region: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Intensity", children: /* @__PURE__ */ t(
                    Fe,
                    {
                      value: e.mood?.emotional_intensity,
                      options: vu,
                      onChange: (p) => h("mood", { ...e.mood, emotional_intensity: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(he, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    ni,
                    {
                      value: e.context?.explicit_lyrics,
                      onChange: (p) => h("context", { ...e.context, explicit_lyrics: p }),
                      disabled: r
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "mt-4 flex flex-col gap-3", children: [
                /* @__PURE__ */ t(
                  oa,
                  {
                    label: "Primary instruments",
                    options: Su,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (p) => h("instrumentation", { ...e.instrumentation, primary_instruments: p.length ? p : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ s(Ia, { label: "Vocals", children: [
                    /* @__PURE__ */ t(he, { label: "Has vocals", children: /* @__PURE__ */ t(
                      np,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (p) => h("instrumentation", { ...e.instrumentation, has_vocals: p }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(he, { label: "Gender", children: /* @__PURE__ */ t(
                      Fe,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: ku,
                        onChange: (p) => h("instrumentation", { ...e.instrumentation, vocal_gender: p }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(he, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      op,
                      {
                        value: e.instrumentation?.language_iso639_1 ?? "",
                        onChange: (p) => h("instrumentation", { ...e.instrumentation, language_iso639_1: p.trim() || void 0 }),
                        placeholder: "en, es, ja…",
                        maxLength: 5,
                        disabled: r
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ t(
                    oa,
                    {
                      label: "Vocal style",
                      options: Tu,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (p) => h("instrumentation", { ...e.instrumentation, vocal_style: p.length ? p : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    oa,
                    {
                      label: "Vocal processing",
                      options: _u,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (p) => h("instrumentation", { ...e.instrumentation, vocal_processing: p.length ? p : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  oa,
                  {
                    label: "Primary moods",
                    options: Nu,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (p) => h("mood", { ...e.mood, primary_moods: p.length ? p : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  oa,
                  {
                    label: "Occasion tags",
                    options: Cu,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (p) => h("mood", { ...e.mood, occasion_tags: p.length ? p : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  oa,
                  {
                    label: "Intended use",
                    options: Eu,
                    selected: e.context?.intended_use ?? [],
                    onChange: (p) => h("context", { ...e.context, intended_use: p.length ? p : void 0 }),
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
function Ia({ label: e, children: a }) {
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
function he({ label: e, children: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-secondary)", flexShrink: 0, minWidth: 90 }, children: e }),
    /* @__PURE__ */ t("div", { style: { flex: 1, minWidth: 0 }, children: a })
  ] });
}
function Fe({
  value: e,
  options: a,
  onChange: r,
  disabled: o
}) {
  return /* @__PURE__ */ s(
    "select",
    {
      value: e ?? "",
      onChange: (i) => r(i.target.value === "" ? void 0 : i.target.value),
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
        a.map((i) => /* @__PURE__ */ t("option", { value: i, children: ae(i) }, i))
      ]
    }
  );
}
function oi({
  value: e,
  onChange: a,
  min: r,
  max: o,
  placeholder: i,
  disabled: l
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "number",
      value: e ?? "",
      min: r,
      max: o,
      placeholder: i,
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
function op({
  value: e,
  onChange: a,
  placeholder: r,
  maxLength: o,
  disabled: i
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "text",
      value: e,
      placeholder: r,
      maxLength: o,
      onChange: (l) => a(l.target.value),
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
function ni({
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
function np({
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
function oa({
  label: e,
  options: a,
  selected: r,
  onChange: o,
  disabled: i
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
          disabled: i,
          className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-90 disabled:opacity-40",
          style: {
            fontSize: 10,
            background: g ? "var(--accent-primary)" : "var(--bg-titlebar)",
            color: g ? "white" : "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            cursor: i ? "not-allowed" : "pointer"
          },
          children: [
            g && /* @__PURE__ */ t(sa, { size: 10 }),
            ae(d)
          ]
        },
        d
      );
    }) })
  ] });
}
function na(e) {
  const { intent: a, ...r } = e;
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
  return i(r), o;
}
const ip = "#4ade80", sp = "#fbbf24", _r = (e) => e.models.music || e.models.cover ? ip : sp;
function lp({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [o, i] = S(!1), l = te(null), d = a.length > 1;
  B(() => {
    if (!o) return;
    const m = (h) => {
      l.current && !l.current.contains(h.target) && i(!1);
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
        onClick: () => d && i((m) => !m),
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
          g(_r(e)),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap" }, children: e.label }),
          d && /* @__PURE__ */ t(
            ui,
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
                r(m.podId), i(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: h ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: g(_r(m)) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: m.label }),
                    h && /* @__PURE__ */ t(sa, { size: 11, style: { color: "var(--accent-primary)" } })
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
const Me = ({ icon: e, label: a, onClick: r, danger: o }) => /* @__PURE__ */ s(
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
    onMouseEnter: (i) => {
      i.currentTarget.style.background = "var(--bg-hover)";
    },
    onMouseLeave: (i) => {
      i.currentTarget.style.background = "transparent";
    },
    children: [
      /* @__PURE__ */ t("span", { className: "shrink-0 opacity-80", children: e }),
      /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", style: { fontSize: 12 }, children: a })
    ]
  }
);
function cp({ tracks: e, player: a, onLoad: r, onOpenLyrics: o, onDelete: i, onRename: l }) {
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
    e.map((g) => /* @__PURE__ */ t(
      dp,
      {
        track: g,
        player: a,
        onLoad: r,
        onOpenLyrics: o,
        onDelete: i,
        onRename: l,
        translate: d
      },
      g.id
    ))
  ] });
}
function dp({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: o,
  onDelete: i,
  onRename: l,
  translate: d
}) {
  const [g, m] = S(!1), [h, b] = S(null), p = a.state.trackId === e.id, f = p && a.state.playing, v = () => {
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
        const A = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: Ce(e)
        };
        T.dataTransfer.setData(Da, JSON.stringify(A)), e.lyricsPreview && T.dataTransfer.setData("text/plain", e.lyricsPreview), T.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => Ce(e) ? a.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: p ? "var(--bg-selected)" : g ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: Ce(e) ? f ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: p ? "var(--accent-primary)" : "var(--text-disabled)" }, children: Ce(e) ? f ? /* @__PURE__ */ t(Et, { size: 11 }) : g ? /* @__PURE__ */ t(_e, { size: 11 }) : /* @__PURE__ */ t(Ba, { size: 11 }) : /* @__PURE__ */ t(xr, { size: 11 }) }),
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
                fontWeight: p ? 600 : 500,
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
              style: { fontWeight: p ? 600 : 500 },
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
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? Be(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: w }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (T) => {
              T.stopPropagation(), T.shiftKey ? o(e) : T.altKey ? i(e.id) : r(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(To, { size: 11 })
          }
        )
      ]
    }
  );
}
function up({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: o,
  onSaveSongToDesktop: i,
  onSaveLyricsToDesktop: l,
  onPlayInPlayer: d,
  onRename: g,
  onEditCover: m,
  onSelect: h,
  selected: b,
  player: p
}) {
  const { t: f } = Bt(), v = te(null), [w, C] = S(!1), [T, A] = S(null), [_, N] = S(null), W = () => {
    if (_ === null) return;
    const F = _.trim();
    N(null), F && F !== e.title && g(e.id, F);
  }, P = p.state.trackId === e.id, k = P && p.state.playing, M = P && p.state.durationMs > 0 ? p.state.positionMs / p.state.durationMs : 0;
  B(() => {
    if (!T) return;
    const F = (ee) => {
      const Le = ee.target;
      v.current && Le && v.current.contains(Le) || Le && Le.closest?.("[data-track-menu]") || A(null);
    }, O = () => A(null);
    return setTimeout(() => window.addEventListener("mousedown", F), 0), window.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      window.removeEventListener("mousedown", F), window.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O);
    };
  }, [T]);
  const L = () => {
    const F = v.current?.getBoundingClientRect();
    if (!F) return;
    const O = 220, ee = Math.min(F.right - O, window.innerWidth - O - 8), Le = F.bottom + 4;
    A({ x: Math.max(8, ee), y: Le });
  }, I = (F) => () => {
    A(null), F();
  }, J = () => p.toggle(e), Z = () => {
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
          hasAudio: Ce(e)
        };
        F.dataTransfer.setData(Da, JSON.stringify(O)), e.lyricsPreview && F.dataTransfer.setData("text/plain", e.lyricsPreview), F.dataTransfer.effectAllowed = "copyMove";
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
          Ce(e) ? /* @__PURE__ */ s(
            "button",
            {
              onClick: J,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: k ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(ut, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Cr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: k ? /* @__PURE__ */ t(Et, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(_e, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                children: /* @__PURE__ */ t(xr, { size: 16, style: { color: "var(--text-primary)" } })
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
              e.durationMs > 0 ? Be(e.durationMs) : f("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: v,
              onClick: (F) => {
                F.stopPropagation(), T ? A(null) : L();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: w || T ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(To, { size: 14 })
            }
          )
        ] }),
        T && Fa(
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
                Ce(e) && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: f("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(Me, { icon: /* @__PURE__ */ t(Ba, { size: 14 }), label: f("musiccreator.track.playInPlayer"), onClick: I(() => d(e)) }),
                  /* @__PURE__ */ t(Me, { icon: /* @__PURE__ */ t(Ln, { size: 14 }), label: f("musiccreator.track.saveSongToDesktop"), onClick: I(() => i(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(Me, { icon: /* @__PURE__ */ t(mi, { size: 14 }), label: f("musiccreator.track.download"), onClick: I(Z) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ s(ge, { children: [
                  Ce(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: f("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(Me, { icon: /* @__PURE__ */ t(xr, { size: 14 }), label: f("musiccreator.track.openInEditor"), onClick: I(() => o(e)) }),
                  /* @__PURE__ */ t(Me, { icon: /* @__PURE__ */ t(Ln, { size: 14 }), label: f("musiccreator.track.saveLyricsToDesktop"), onClick: I(() => l(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(Me, { icon: /* @__PURE__ */ t(gi, { size: 14 }), label: "Rename", onClick: I(() => N(e.title)) }),
                /* @__PURE__ */ t(Me, { icon: /* @__PURE__ */ t(Oa, { size: 14 }), label: "Edit cover art", onClick: I(() => m(e)) }),
                /* @__PURE__ */ t(Me, { icon: /* @__PURE__ */ t($t, { size: 14 }), label: f("musiccreator.track.loadIntoForm"), onClick: I(() => r(e)) }),
                /* @__PURE__ */ t(Me, { icon: /* @__PURE__ */ t(Ht, { size: 14 }), label: f("musiccreator.track.delete"), onClick: I(() => a(e.id)), danger: !0 })
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
                  width: `${M * 100}%`,
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
function pp({
  trackIds: e,
  allTracks: a,
  player: r,
  onSelect: o
}) {
  const i = e.map((l) => a.find((d) => d.id === l)).filter((l) => !!l).slice(0, 6);
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
function mp({
  track: e,
  player: a,
  selected: r,
  isFavorite: o,
  onOpenInPlayer: i,
  onRemix: l,
  onToggleFavorite: d,
  onRemove: g,
  selectMode: m = !1,
  checked: h = !1,
  onToggleCheck: b
}) {
  const p = te(null), [f, v] = S(!1), [w, C] = S(null), T = a.state.trackId === e.id, A = T && a.state.loadingTrackId === e.id, _ = T && a.state.playing, N = T && a.state.durationMs > 0 ? a.state.positionMs / a.state.durationMs : 0;
  B(() => {
    if (!w) return;
    const L = (J) => {
      const Z = J.target;
      p.current && Z && p.current.contains(Z) || Z && Z.closest?.("[data-track-menu]") || C(null);
    }, I = () => C(null);
    return setTimeout(() => window.addEventListener("mousedown", L), 0), window.addEventListener("scroll", I, !0), window.addEventListener("resize", I), () => {
      window.removeEventListener("mousedown", L), window.removeEventListener("scroll", I, !0), window.removeEventListener("resize", I);
    };
  }, [w]);
  const W = () => {
    const L = p.current?.getBoundingClientRect();
    if (!L) return;
    const I = 220, J = Math.min(L.right - I, window.innerWidth - I - 8), Z = L.bottom + 4;
    C({ x: J, y: Z });
  }, P = (L) => () => {
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
              children: h ? /* @__PURE__ */ t(bi, { size: 20 }) : /* @__PURE__ */ t(vi, { size: 20 })
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
                /* @__PURE__ */ t(ut, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Cr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: A ? /* @__PURE__ */ t(re, { size: 14, className: "animate-spin", style: { color: "white" } }) : _ ? /* @__PURE__ */ t(Et, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(_e, { size: 14, style: { color: "white", marginLeft: 1 } })
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
              e.durationMs > 0 ? ` · ${Be(e.durationMs)}` : ""
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
                  e.durationMs > 0 ? ` · ${Be(e.durationMs)}` : ""
                ] })
              ]
            }
          ),
          !m && /* @__PURE__ */ t(
            "button",
            {
              ref: p,
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
              children: /* @__PURE__ */ t(To, { size: 14 })
            }
          )
        ] }),
        w && Fa(
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
                  Me,
                  {
                    icon: _ ? /* @__PURE__ */ t(Et, { size: 14 }) : /* @__PURE__ */ t(_e, { size: 14 }),
                    label: _ ? "Pause" : "Play",
                    onClick: P(() => a.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Me,
                  {
                    icon: /* @__PURE__ */ t(Ba, { size: 14 }),
                    label: "Open in player",
                    onClick: P(() => i(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Me,
                  {
                    icon: /* @__PURE__ */ t(Ft, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: P(() => l(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Me,
                  {
                    icon: /* @__PURE__ */ t(vr, { size: 14, fill: o ? "currentColor" : "none" }),
                    label: o ? "Remove favorite" : "Add to favorites",
                    onClick: P(() => d(e))
                  }
                ),
                k && /* @__PURE__ */ t(
                  Me,
                  {
                    icon: /* @__PURE__ */ t(hi, { size: 14 }),
                    label: "Open source",
                    onClick: P(() => window.open(k, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Me,
                  {
                    icon: /* @__PURE__ */ t(Ht, { size: 14 }),
                    label: "Remove from Library",
                    onClick: P(() => g(e)),
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
function hp({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: o
}) {
  const [i, l] = S(e.coverDataUrl), [d, g] = S(""), [m, h] = S(!1), [b, p] = S(null), f = te(null), v = te(null), w = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), C = br(w, "", e.styleTags || "");
  B(() => {
    const _ = (N) => {
      N.key === "Escape" && (N.stopPropagation(), o());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [o]), B(() => () => v.current?.abort(), []);
  const T = async () => {
    if (!a) {
      p("Connect to a pod to generate cover art.");
      return;
    }
    if (!a.models.image) {
      p(`This endpoint (${a.label}) has no image model. Pick one in JULI3TA Settings → Cover art.`);
      return;
    }
    if (m) return;
    v.current?.abort(), v.current = new AbortController();
    const _ = v.current.signal;
    h(!0), p(null);
    try {
      const N = (d.trim() || C).slice(0, 1500), W = await So(a, N, _);
      if (_.aborted) return;
      l(W);
    } catch (N) {
      if (N.name === "AbortError") return;
      p(N.message || "Cover-art generation failed.");
    } finally {
      h(!1);
    }
  }, A = (_) => {
    if (p(null), !_.type.startsWith("image/")) {
      p("That file is not an image.");
      return;
    }
    if (_.size > 4 * 1024 * 1024) {
      p("Image is too big (limit 4 MB).");
      return;
    }
    const N = new FileReader();
    N.onerror = () => p("Could not read that image."), N.onload = () => {
      const W = N.result;
      typeof W == "string" && l(W);
    }, N.readAsDataURL(_);
  };
  return Fa(
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
                    /* @__PURE__ */ t(Oa, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                        children: /* @__PURE__ */ t(ke, { size: 14 })
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
                        !i && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Oa, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
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
                          m ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(nc, { size: 12 }),
                          i ? "Regenerate" : "Generate"
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
                          /* @__PURE__ */ t(No, { size: 12 }),
                          "Upload"
                        ]
                      }
                    ),
                    i && /* @__PURE__ */ s(
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
                          /* @__PURE__ */ t(ke, { size: 12 }),
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
                      /* @__PURE__ */ t(Ua, { size: 12, style: { flexShrink: 0 } }),
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
                          r(e.id, i), o();
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
                    N && A(N), _.target.value = "";
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
function yr({ label: e, children: a }) {
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
function gp({
  songName: e,
  mode: a,
  theme: r,
  style: o,
  intent: i,
  lyrics: l,
  specs: d,
  coverDataUrl: g,
  endpoint: m,
  busy: h,
  onRegenerate: b,
  onUpload: p,
  onClear: f,
  onClose: v
}) {
  const w = te(null), C = ye(() => Io(d), [d]), T = ye(() => na(d), [d]);
  B(() => {
    const N = (W) => {
      W.key === "Escape" && (W.stopPropagation(), v());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [v]);
  const A = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", _ = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Fa(
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
                    /* @__PURE__ */ t(Ot, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                        children: A
                      }
                    ),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: v,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(ke, { size: 14 })
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
                      !g && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Oa, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
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
                          h ? /* @__PURE__ */ t(re, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 11 }),
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
                          /* @__PURE__ */ t(No, { size: 11 }),
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
                          /* @__PURE__ */ t(ke, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  r.trim() && /* @__PURE__ */ t(yr, { label: "Theme", children: r.trim() }),
                  i.trim() && /* @__PURE__ */ t(yr, { label: "Lyrics Direction", children: i.trim() }),
                  T > 0 && C && /* @__PURE__ */ t(yr, { label: `Track Specs (${T} set)`, children: C }),
                  l.trim() && /* @__PURE__ */ t(yr, { label: "Lyrics", children: /* @__PURE__ */ t(
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
                  !r.trim() && !i.trim() && T === 0 && !l.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
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
                    W && p(W), N.target.value = "";
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
function yp(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function fp(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function bp(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function vp(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function xp(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: ae(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: ae(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: ae(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: ae(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: ae(e.tonal.mode) }), o.length && a.push({ label: "Tonal", rows: o });
  const i = [];
  if (e.instrumentation?.primary_instruments?.length && i.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(ae).join(", ") }), e.instrumentation?.has_vocals === !1)
    i.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const m = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && m.push(ae(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && m.push(e.instrumentation.vocal_style.map(ae).join("/")), i.push({ label: "Vocals", value: m.length ? m.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && i.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(ae).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && i.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), i.length && a.push({ label: "Instrumentation", rows: i });
  const l = [];
  e.dynamics?.overall_dynamic_range && l.push({ label: "Range", value: ae(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && l.push({ label: "Crescendo", value: ae(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && l.push({ label: "Big drops", value: "Yes" }), l.length && a.push({ label: "Dynamics", rows: l });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: ae(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(ae).join(", ") }), d.length && a.push({ label: "Mood", rows: d });
  const g = [];
  return e.context?.era_reference && g.push({ label: "Era", value: ae(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && g.push({ label: "Region", value: ae(e.context.cultural_region) }), e.context?.intended_use?.length && g.push({ label: "Use", value: e.context.intended_use.map(ae).join("/") }), e.context?.explicit_lyrics && g.push({ label: "Explicit", value: "Yes" }), g.length && a.push({ label: "Context", rows: g }), a;
}
function lt({ label: e, value: a }) {
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
function jt({ label: e, children: a }) {
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
function Ji({
  base64: e,
  src: a,
  onPlay: r,
  title: o = "Preview reference audio",
  height: i = 30,
  style: l
}) {
  const d = ye(() => e || Ru(a), [e, a]), g = ye(
    () => d ? Sr(d) : null,
    [d]
  ), [m, h] = S(null), [b, p] = S(null);
  B(() => {
    if (p(null), !d) {
      h(null);
      return;
    }
    let C = null;
    try {
      C = URL.createObjectURL(Pu(d)), h(C);
    } catch {
      h(null);
    }
    return () => {
      C && URL.revokeObjectURL(C);
    };
  }, [d]);
  const f = (C) => {
    Number.isFinite(C.duration) && C.duration > 0.1 && p(C.duration * 1e3);
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
        style: { width: "100%", height: i },
        title: o
      }
    ),
    v && v > 0 && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: [
      "Reference preview · ",
      Be(v)
    ] })
  ] });
}
function wp({
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
          Ji,
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
function kp(e, a, r, o) {
  if (!e || a.length === 0) return null;
  if (o === "one") return { kind: "repeating" };
  const i = a.filter(Ce);
  if (i.length === 0) return null;
  if (r) return { kind: "random" };
  const l = i.findIndex((d) => d.id === e);
  return l < 0 ? null : l + 1 < i.length ? { kind: "track", track: i[l + 1] } : o === "all" ? { kind: "track", track: i[0] } : { kind: "end" };
}
function Sp({ text: e }) {
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
        a ? /* @__PURE__ */ t(sa, { size: 11 }) : /* @__PURE__ */ t(pi, { size: 11 }),
        a ? "Copied" : "Copy"
      ]
    }
  );
}
const Tp = /^\s*\[([^\]]+)\]\s*$/;
function _p({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, o) => {
    const i = r.match(Tp);
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
    ) : r.trim() === "" ? /* @__PURE__ */ t("div", { style: { height: 8 } }, o) : /* @__PURE__ */ t("div", { style: { whiteSpace: "pre-wrap" }, children: r }, o);
  }) });
}
function Np({ track: e, player: a, restyleOriginal: r, onEditInCreator: o, onSwitchToCreator: i, onSearchMusic: l }) {
  const { t: d } = Bt(), g = e?.specsJson ?? "", m = ye(() => {
    if (!g) return {};
    try {
      return JSON.parse(g);
    } catch {
      return {};
    }
  }, [g]), h = (m.intent ?? "").trim(), b = ye(() => xp(m), [m]);
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
            /* @__PURE__ */ t(kt, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const p = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", f = Ce(e), v = Cr(e), w = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", C = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", T = a.state.trackId === e.id, A = T && a.state.playing, _ = T && a.state.loadingTrackId === e.id, N = e.source === "youtube", W = a.queue.filter((P) => P.id !== e.id && (P.artist || "").trim() && P.artist === e.artist).slice(0, 4);
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
            title: f ? T && A ? "Pause" : "Play" : "Lyric sheet — no audio",
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
                    opacity: T && A ? 0 : 1
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
                      children: T && A ? /* @__PURE__ */ t(Et, { size: 30, style: { color: "white" } }) : _ ? /* @__PURE__ */ t(re, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(_e, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                f ? /* @__PURE__ */ t(_e, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t($t, { size: 10 }),
                N ? "YouTube track" : d(f ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
              ]
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "leading-none",
              style: {
                fontSize: p.length > 24 ? 38 : p.length > 14 ? 52 : 64,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.035em",
                wordBreak: "break-word",
                marginBottom: 16,
                textShadow: "0 2px 16px rgba(0,0,0,0.4)"
              },
              children: p
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center flex-wrap",
              style: { fontSize: 13, color: "rgba(255,255,255,0.85)", gap: 8 },
              children: [
                /* @__PURE__ */ t(Co, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: w }),
                e.source === "youtube" && e.album && e.album !== w && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                C && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: C })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: Be(e.durationMs) })
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
                title: T && A ? "Pause" : "Play",
                children: _ ? /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t(re, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : T && A ? /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t(Et, { size: 16 }),
                  " ",
                  d("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t(_e, { size: 16, style: { marginLeft: 2 } }),
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
                  /* @__PURE__ */ t(Ft, { size: 13 }),
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
                  /* @__PURE__ */ t(mi, { size: 13 }),
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
              e.lyricsPreview && /* @__PURE__ */ t(Sp, { text: e.lyricsPreview })
            ]
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(_p, { text: e.lyricsPreview }) : N ? /* @__PURE__ */ s(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(rc, { size: 18 }) }),
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
                  /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.durationMs ? Be(e.durationMs) : "Unknown" })
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
                    /* @__PURE__ */ t(hi, { size: 13 }),
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
              /* @__PURE__ */ t($t, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: d("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        r && r.trackId === e.id && /* @__PURE__ */ t(
          wp,
          {
            audioSrc: r.audioSrc,
            sourceLabel: r.sourceLabel,
            onUserPlay: () => {
              a.state.playing && a.pause();
            }
          }
        ),
        e.id === a.state.trackId && (() => {
          const P = kp(
            a.state.trackId,
            a.queue,
            a.state.shuffle,
            a.state.repeatMode
          );
          return P ? /* @__PURE__ */ s(jt, { label: "Up next", children: [
            P.kind === "track" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ t(ut, { track: P.track, size: 32, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: P.track.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: P.track.artist || (P.track.styleTags && P.track.styleTags !== "—" ? P.track.styleTags : "JULI3TA") })
              ] })
            ] }),
            P.kind === "random" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(_o, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Random next track from your queue." })
            ] }),
            P.kind === "repeating" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(yi, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Repeating this track." })
            ] }),
            P.kind === "end" && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-disabled)" }, children: "End of queue." })
          ] }) : null;
        })(),
        e.theme.trim() && /* @__PURE__ */ t(jt, { label: d("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        h && /* @__PURE__ */ t(jt, { label: d("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: h }) }),
        b.map((P) => /* @__PURE__ */ t(jt, { label: P.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: P.rows.map((k) => /* @__PURE__ */ t(lt, { label: k.label, value: k.value }, `${P.label}-${k.label}`)) }) }, P.label)),
        N && /* @__PURE__ */ t(jt, { label: "Artist / Source", children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(bc, { size: 20 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        W.length > 0 && /* @__PURE__ */ t(jt, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: W.map((P) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => a.select(P),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(ut, { track: P, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: P.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: P.durationMs ? Be(P.durationMs) : "Streamed" })
              ] })
            ]
          },
          P.id
        )) }) }),
        /* @__PURE__ */ t(jt, { label: d("musiccreator.player.about"), children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.created"), value: vp(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(lt, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(lt, { label: "Channel", value: e.album }),
          f && e.durationMs > 0 && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.duration"), value: Be(e.durationMs) }),
          e.source !== "youtube" && f && e.bitrate > 0 && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.bitrate"), value: fp(e.bitrate) }),
          e.source !== "youtube" && f && e.sampleRate > 0 && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.sampleRate"), value: bp(e.sampleRate) }),
          e.source !== "youtube" && f && e.sizeBytes > 0 && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.size"), value: yp(e.sizeBytes) }),
          C && /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.style"), value: C }),
          /* @__PURE__ */ t(lt, { label: d("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : d(f ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Cp({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: o,
  searchHistory: i,
  onClearSearchHistory: l,
  resultType: d,
  onResultTypeChange: g,
  results: m,
  busy: h,
  error: b,
  status: p,
  providers: f,
  connectors: v,
  libraryTracks: w,
  playlists: C,
  playlistNameDraft: T,
  playlistBusy: A,
  favoriteIds: _,
  warmupIds: N,
  previewBusyId: W,
  addBusyId: P,
  savedYoutubeIds: k,
  player: M,
  onWarmResult: L,
  onPreview: I,
  onAdd: J,
  onOpenTrack: Z,
  onToggleFavorite: be,
  onRemoveLibraryTrack: F,
  onPlaylistNameDraftChange: O,
  onCreatePlaylist: ee,
  onAddTrackToPlaylist: Le,
  onRemoveTrackFromPlaylist: Ar,
  onPlayPlaylist: We,
  onDeletePlaylist: Wt,
  onConfigureConnector: Ee,
  onDisconnectConnector: Wa,
  onClose: de
}) {
  const [Te, mt] = S(null), [At, Ke] = S({}), [Mt, et] = S(!1), [qe, tt] = S(null), [ze, Ie] = S(null), [St, at] = S(null);
  B(() => {
    Ie(null), at(null);
  }, [e]);
  const ht = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(w.map((y) => y.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(w.map((y) => y.album || y.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: C.length },
    { id: "sources", label: "Sources", count: f.length || 4 }
  ], Ne = (y) => {
    const j = M.state.trackId === y.id, G = j && M.state.loadingTrackId === y.id, ne = j && M.state.playing;
    return /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(ut, { track: y, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ s("button", { type: "button", onClick: () => Z(y), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: y.title }),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              y.artist || "Unknown",
              y.album ? ` · ${y.album}` : "",
              y.durationMs ? ` · ${Be(y.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => be(y),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: _.has(y.id) ? "white" : "var(--text-secondary)",
                background: _.has(y.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: _.has(y.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(vr, { size: 13, fill: _.has(y.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => M.toggle(y),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                G ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : ne ? /* @__PURE__ */ t(Et, { size: 12 }) : /* @__PURE__ */ t(_e, { size: 12 }),
                G ? "Loading" : ne ? "Pause" : "Play"
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
              children: /* @__PURE__ */ t(Ht, { size: 13 })
            }
          )
        ]
      },
      y.id
    );
  }, Re = Array.from(
    w.reduce((y, j) => {
      const G = (j.artist || "Unknown artist").trim();
      return y.set(G, [...y.get(G) ?? [], j]), y;
    }, /* @__PURE__ */ new Map())
  ).sort((y, j) => y[0].localeCompare(j[0])), Tt = Array.from(
    w.reduce((y, j) => {
      const G = (j.album || j.artist || "YouTube collection").trim();
      return y.set(G, [...y.get(G) ?? [], j]), y;
    }, /* @__PURE__ */ new Map())
  ).sort((y, j) => y[0].localeCompare(j[0])), Je = f.length > 0 ? f.map((y) => {
    const j = v.find((se) => se.provider === y.id), G = j?.connected ?? y.configured, ne = j?.oauthRequired ?? y.state === "oauth_required";
    return {
      id: y.id,
      name: y.name,
      state: G ? "Connected" : ne ? "OAuth required" : y.state.replace(/_/g, " "),
      body: j?.message ?? y.message,
      action: G ? "Manage" : ne ? "Coming soon" : "Configure",
      enabled: G,
      needs: y.needs,
      kind: y.kind,
      connector: j,
      oauthRequired: ne,
      configurable: j?.configurable ?? !ne
    };
  }) : [
    {
      id: "youtube",
      name: "YouTube",
      state: p?.ready ? "Connected" : "Starting",
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
          p && /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center gap-2 rounded-full px-3",
              style: {
                height: 30,
                fontSize: 11,
                color: p.ready ? "var(--status-success)" : "var(--text-secondary)",
                background: "var(--bg-titlebar)",
                border: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("span", { style: { width: 7, height: 7, borderRadius: "var(--radius-full)", background: p.ready ? "var(--status-success)" : "var(--accent-secondary)" } }),
                p.ready ? "Music engine ready" : p.installing ? "Installing engine…" : "Music engine offline"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: de,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(ke, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: ht.map((y) => /* @__PURE__ */ s(
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
        /* @__PURE__ */ t(kt, { size: 16, style: { color: "var(--text-disabled)" } }),
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
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(ke, { size: 16 }) })
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
      e === "search" && r.trim().length < 2 && i.length > 0 && /* @__PURE__ */ s("div", { className: "mt-3 flex items-center gap-2 flex-wrap", children: [
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
            children: /* @__PURE__ */ t(ke, { size: 11 })
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
          const j = Wi(y.title, y.channel), G = k.has(y.id), ne = W === y.id, se = P === y.id, Lt = N.has(y.id);
          return /* @__PURE__ */ s(
            "div",
            {
              onMouseEnter: () => L(y),
              onFocus: () => L(y),
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                y.thumbnailUrl || Tr(y.id) ? /* @__PURE__ */ t("img", { src: y.thumbnailUrl || Tr(y.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Ba, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: j.song }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    j.artist || y.channel || "Music",
                    y.durationMs ? ` · ${Be(y.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: y.title })
                ] }),
                Lt && !ne && /* @__PURE__ */ s("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(re, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => I(y),
                    disabled: ne,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      ne ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(_e, { size: 12 }),
                      ne ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => J(y),
                    disabled: G || se,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: G ? "var(--text-disabled)" : "white", background: G ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      se ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : G ? /* @__PURE__ */ t(sa, { size: 12 }) : /* @__PURE__ */ t(fo, { size: 12 }),
                      se ? "Adding" : G ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            y.id
          );
        })
      ] }),
      e === "artists" && (ze !== null ? (() => {
        const y = Re.find(([j]) => j === ze)?.[1] ?? [];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Ie(null),
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
                  /* @__PURE__ */ t(An, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: ze }),
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
                  /* @__PURE__ */ t(_e, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: y.map(Ne) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Re.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Re.map(([y, j]) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => Ie(y),
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
      e === "albums" && (St !== null ? (() => {
        const j = Tt.find(([ne]) => ne === St)?.[1] ?? [], G = j[0];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => at(null),
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
                  /* @__PURE__ */ t(An, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            G && /* @__PURE__ */ t(ut, { track: G, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: St }),
              /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                G?.artist || "Mixed artists",
                " · ",
                j.length,
                " track",
                j.length === 1 ? "" : "s"
              ] })
            ] }),
            G && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Z(G),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(_e, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: j.map(Ne) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        Tt.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        Tt.map(([y, j]) => {
          const G = j[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => at(y),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${y}`,
              children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                G && /* @__PURE__ */ t(ut, { track: G, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ s("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: y }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    G?.artist || "Mixed artists",
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
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Bl, { size: 22 }) }),
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
              disabled: A,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                A ? /* @__PURE__ */ t(re, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(fo, { size: 13 }),
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
                  onClick: () => We(y),
                  disabled: y.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(_e, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => Wt(y.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(Ht, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: y.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : y.items.map((j) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(ut, { track: j, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ s("button", { type: "button", onClick: () => Z(j), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: j.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: j.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => Ar(y.id, j.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(ke, { size: 13 })
              }
            )
          ] }, `${y.id}-${j.id}`)) }),
          w.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: w.slice(0, 8).filter((j) => !y.items.some((G) => G.id === j.id)).map((j) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => Le(y.id, j),
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
        Je.map((y) => /* @__PURE__ */ s(
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
                    children: y.name === "Spotify" ? "♬" : y.name === "YouTube" ? /* @__PURE__ */ t(_e, { size: 18 }) : y.kind === "catalog" ? /* @__PURE__ */ t(xl, { size: 18 }) : /* @__PURE__ */ t(Ot, { size: 18 })
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
                      const j = y.connector?.credentialSpecs ?? y.needs.map((G) => ({ name: G, label: G, secret: !0, required: !0 }));
                      Ke({}), tt(null), mt({
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
        Te && /* @__PURE__ */ s("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                Te.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: Te.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => mt(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(ke, { size: 16 }) })
          ] }),
          Te.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ s(ge, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: Te.specs.map((y) => /* @__PURE__ */ s("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: y.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: y.label || y.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: At[y.name] ?? "",
                  type: y.secret ? "password" : "text",
                  onChange: (j) => Ke((G) => ({ ...G, [y.name]: j.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: y.name
                }
              )
            ] }, y.name)) }),
            qe && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: qe }),
            /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  disabled: Mt || !Te.configurable,
                  onClick: () => {
                    et(!0), tt(null), Ee(Te.id, At).then(() => {
                      Ke({}), mt(null);
                    }).catch((y) => tt(y.message || "Connector setup failed.")).finally(() => et(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Mt ? /* @__PURE__ */ t(re, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(sa, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              Te.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Mt,
                  onClick: () => {
                    et(!0), tt(null), Wa(Te.id).then(() => mt(null)).catch((y) => tt(y.message || "Disconnect failed.")).finally(() => et(!1));
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
const Ra = {
  theme: !1,
  style: !1,
  lyrics: !1,
  specs: !1,
  cover: !1
}, Ep = {
  theme: null,
  style: null,
  lyrics: null,
  specs: null,
  cover: null
}, Pa = (e) => e?.name === "AbortError";
function Ap() {
  const e = Ic(), { t: a } = Bt(), r = Pc(), o = Oc(), { state: i, dispatch: l } = ki(), { addNotification: d } = Fc(), g = i.theme.mode, [m, h] = S("compose"), [b, p] = S(!1), [f, v] = S("creator"), [w, C] = S(() => {
    try {
      const n = localStorage.getItem("juli3ta:selectedPlayerTrackId");
      return n && n.length > 0 ? n : null;
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
  const [T, A] = S(""), [_, N] = S(""), [W, P] = S(null), [k, M] = S(""), [L, I] = S(""), [J, Z] = S(!1), [be, F] = S(""), [O, ee] = S(""), [Le, Ar] = S(!0), [We, Wt] = S(!1), [Ee, Wa] = S(null), [de, Te] = S({}), [mt, At] = S(!1), [Ke, Mt] = S(() => ({ ...Ra })), et = te({ ...Ra }), qe = te({ ...Ep }), tt = z((n, c) => {
    et.current = { ...et.current, [n]: c }, Mt((u) => u[n] === c ? u : { ...u, [n]: c });
  }, []), ze = z((n) => {
    if (et.current[n]) return null;
    qe.current[n]?.abort();
    const c = new AbortController();
    return qe.current[n] = c, tt(n, !0), c;
  }, [tt]), Ie = z((n, c) => {
    qe.current[n] === c && (qe.current[n] = null), tt(n, !1);
  }, [tt]), St = z(() => {
    Object.keys(qe.current).forEach((n) => {
      qe.current[n]?.abort(), qe.current[n] = null;
    }), et.current = { ...Ra }, Mt({ ...Ra }), Wt(!1), At(!1);
  }, []), [at, ht] = S(null), [Ne, Re] = S(null), [Tt, Je] = S(null), [y, j] = S(null), [G, ne] = S(null), [se, Lt] = S(!1), [qt, qa] = S(null), [Gi, ma] = S(!1), [Vi, Ja] = S(!1), [Mr, Lr] = S([]), Po = te(null), jo = te(null), [zr, Do] = S(!1), [rt, Uo] = S("best"), [Yi, Ki] = S(null), [Xi, Ga] = S(!1), [gt, Oo] = S("mic"), [ot, Ir] = S(!1), [$o, Ho] = S(0), [Fo, ha] = S(null), Bo = te(null), Va = te([]), Jt = te(null), Rr = te(0), ga = te(null), [Gt, De] = S("idle"), [ya, V] = S(null), [Qi, Vt] = S(0), [Wo, qo] = S(0), [zt, Ge] = S([]), [Yt, le] = S(null), [Ue, Jo] = S(""), [fa, Go] = S("cards"), [ve, Vo] = S(() => {
    try {
      return localStorage.getItem("juli3ta:sidebarTab") === "library" ? "library" : "mywork";
    } catch {
      return "mywork";
    }
  }), [Ve, Zi] = S(() => {
    try {
      const n = localStorage.getItem("juli3ta:myWorkChip");
      if (n === "all" || n === "songs" || n === "restyles" || n === "lyrics") return n;
    } catch {
    }
    return "all";
  }), [yt, Yo] = S(() => {
    try {
      return localStorage.getItem("juli3ta:libraryChip") === "favorites" ? "favorites" : "all";
    } catch {
      return "all";
    }
  });
  B(() => {
    try {
      localStorage.setItem("juli3ta:sidebarTab", ve);
    } catch {
    }
  }, [ve]), B(() => {
    try {
      localStorage.setItem("juli3ta:myWorkChip", Ve);
    } catch {
    }
  }, [Ve]), B(() => {
    try {
      localStorage.setItem("juli3ta:libraryChip", yt);
    } catch {
    }
  }, [yt]);
  const [Ya, es] = S(() => {
    try {
      const n = localStorage.getItem("juli3ta:recentlyPlayedIds"), c = n ? JSON.parse(n) : null;
      return Array.isArray(c) ? c.filter((u) => typeof u == "string").slice(0, 8) : [];
    } catch {
      return [];
    }
  });
  B(() => {
    try {
      localStorage.setItem("juli3ta:recentlyPlayedIds", JSON.stringify(Ya));
    } catch {
    }
  }, [Ya]);
  const [It, Pr] = S(!1), [ft, Ka] = S(() => /* @__PURE__ */ new Set()), [jr, Dr] = S(!1), [bt, Oe] = S(!1), [ts, ba] = S("search"), [Ur, as] = S(""), [rs, Ko] = S(() => {
    try {
      const n = localStorage.getItem("juli3ta:searchHistory"), c = n ? JSON.parse(n) : null;
      return Array.isArray(c) ? c.filter((u) => typeof u == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), Xo = z((n) => {
    const c = n.trim();
    c.length < 2 || Ko((u) => {
      const x = [c, ...u.filter((E) => E.toLowerCase() !== c.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(x));
      } catch {
      }
      return x;
    });
  }, []), [va, os] = S("tracks"), [ns, Or] = S([]), [is, Xa] = S(!1), [ss, vt] = S(null), [ls, Qo] = S(null), [cs, Zo] = S([]), [ds, en] = S([]), [xa, us] = S({}), [ps, tn] = S(() => /* @__PURE__ */ new Set()), [ms, an] = S(null), [hs, rn] = S(null), [on, nn] = S([]), [xe, $r] = S([]), [Kt, Hr] = S(() => /* @__PURE__ */ new Set()), [wa, Xt] = S([]), [sn, gs] = S(!1), [Fr, ln] = S(""), [ys, cn] = S(!1), dn = te(/* @__PURE__ */ new Map()), Br = te(/* @__PURE__ */ new Map()), Qt = te(xa), Wr = te(/* @__PURE__ */ new Map()), [Qa, ka] = S(null), [Za, un] = S(!1), [qr, pn] = S(Ni), [fs, er] = S(!1);
  B(() => {
    Qt.current = xa;
  }, [xa]), B(() => {
    let n = !1;
    return (async () => {
      try {
        await Promise.all([
          Du(),
          Nd()
        ]);
      } catch (q) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", q);
      }
      await dd().catch((q) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", q);
      });
      const [c, u, x, E, R, U, D, me] = await Promise.allSettled([
        Gc(),
        so(),
        od(),
        On(),
        ld(),
        ud("track"),
        Aa(),
        Td()
      ]);
      if (n) return;
      const Pe = c.status === "fulfilled" ? c.value : [], Ae = u.status === "fulfilled" ? u.value.tracks.map((q) => ({ ...q, source: "juli3ta" })) : [];
      u.status === "fulfilled" && (ka(u.value.rootPath), le((q) => q?.startsWith("Real file library unavailable") ? null : q)), c.status === "fulfilled" ? Ge(Ma(Ae, Pe)) : (console.error("[Juli3ta] listTracks failed:", c.reason), Ge(Ma(Ae)), le("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), u.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", u.reason), le("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const Ye = new Set(Ae.map((q) => q.id)), Xe = new Set(Pe.map((q) => q.id)), je = Pe.filter((q) => !Ye.has(q.id) && lu(q)), He = Ae.filter((q) => !Xe.has(q.id));
      (je.length > 0 || He.length > 0) && (async () => {
        const q = [];
        for (const pe of je)
          try {
            const Rt = await Jn({ ...pe, source: "juli3ta" });
            q.push({ ...pe, ...Rt, source: "juli3ta" });
          } catch (Rt) {
            console.warn("[Juli3ta] host file backfill failed:", pe.id, Rt);
          }
        for (const pe of He)
          try {
            await kr({ ...pe, source: "juli3ta" });
          } catch (Rt) {
            console.warn("[Juli3ta] standalone cache backfill failed:", pe.id, Rt);
          }
        !n && (q.length > 0 || He.length > 0) && (Ge((pe) => Ma(q, He, pe)), so().then((pe) => ka(pe.rootPath)).catch(() => {
        }));
      })(), x.status === "fulfilled" && pn(x.value), E.status === "fulfilled" && Lr(E.value);
      const X = {
        version: 1,
        updatedAt: Date.now(),
        tracks: R.status === "fulfilled" ? R.value : [],
        favorites: U.status === "fulfilled" ? U.value : [],
        playlists: D.status === "fulfilled" ? D.value : []
      }, ie = me.status === "fulfilled" ? me.value : null, we = kd(), ce = Dn(
        Dn(X, we),
        ie
      );
      await fd(ce).catch((q) => {
        console.warn("[Juli3ta] music library durable import failed:", q);
      }), !n && ($r(ce.tracks), Hr(new Set(ce.favorites.filter((q) => q.kind === "track").map((q) => q.entityId))), Xt(ce.playlists), gs(!0), Un(ce).catch((q) => {
        console.warn("[Juli3ta] music library durable save failed:", q);
      }));
    })(), () => {
      n = !0;
    };
  }, []), B(() => {
    if (!sn) return;
    const n = wd(xe, Kt, wa), c = window.setTimeout(() => {
      Un(n).catch((u) => {
        console.warn("[Juli3ta] music library durable save failed:", u);
      });
    }, 450);
    return () => window.clearTimeout(c);
  }, [sn, xe, Kt, wa]), B(() => {
    if (!Yt?.startsWith("Real file library unavailable")) return;
    let n = !1;
    const c = async () => {
      try {
        const x = await so();
        if (n) return;
        ka(x.rootPath), Ge((E) => Ma(x.tracks.map((R) => ({ ...R, source: "juli3ta" })), E)), le((E) => E?.startsWith("Real file library unavailable") ? null : E);
      } catch {
      }
    }, u = window.setInterval(c, 4e3);
    return c(), () => {
      n = !0, window.clearInterval(u);
    };
  }, [Yt]);
  const Jr = z(async (n) => {
    try {
      const c = await Jn({ ...n, source: "juli3ta" }), u = { ...n, ...c, source: "juli3ta" };
      return await kr(u), ka(c.folderPath?.split("/").slice(0, -1).join("/") || Qa), le(null), Ge((x) => Ma([u], x)), !0;
    } catch (c) {
      const u = c.message || "Real file save failed";
      return le(`Couldn't save "${n.title}" as a real file — ${u}.`), !1;
    }
  }, [Qa]), bs = z(async (n) => {
    pn(n);
    try {
      await nd(n);
    } catch (c) {
      console.warn("Settings save failed:", c);
    }
  }, []), tr = ye(
    () => e.state ? Uu(e.state.agents, e.state.included) : [],
    [e.state]
  ), [ar, vs] = S([]), [xs, ws] = S(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [ks, mn] = S(!0), Q = ar.find((n) => n.podId === xs) ?? ar[0] ?? null, Gr = z(async () => {
    mn(!0);
    const n = new AbortController(), c = await Fu(tr, n.signal);
    vs(c), mn(!1);
  }, [tr]);
  B(() => {
    tr.length !== 0 && queueMicrotask(() => void Gr());
  }, [tr, Gr]);
  const Ss = z((n) => {
    ws(n);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", n);
    } catch {
    }
  }, []), Sa = te(null), Ta = te(null), rr = te(!1);
  B(() => () => {
    Sa.current?.abort(), Object.keys(qe.current).forEach((n) => {
      qe.current[n]?.abort();
    });
  }, []), B(() => {
    if (Gt === "idle") {
      queueMicrotask(() => {
        Vt(0), qo(0);
      });
      return;
    }
    const n = Date.now(), c = () => {
      const E = (Date.now() - n) / 1e3, R = Gt === "lyrics" ? Math.min(0.95, E / 5) : Math.min(0.95, 1 - Math.exp(-E / 35));
      Vt(R);
    };
    c();
    const u = setInterval(c, 250), x = setInterval(() => qo((E) => E + 1), 4500);
    return () => {
      clearInterval(u), clearInterval(x);
    };
  }, [Gt]);
  const _a = z((n) => {
    if (!n.lyricsPreview) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const u = `${hr(n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, x = o.findChildByName(c, u);
    return x ? (o.writeFile(x.id, n.lyricsPreview), x.id) : o.createFile(c, u, n.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [o]), hn = z((n) => {
    if (!n.audioDataUrl) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const u = `${hr(n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, x = o.findChildByName(c, u);
    return x ? x.id : o.createFile(c, u, "", {
      mimeType: "audio/mpeg",
      refTrackId: n.id
    });
  }, [o]), Ts = z(async () => {
    if (!Q) {
      V(a("musiccreator.error.noPod"));
      return;
    }
    if (Object.values(et.current).some(Boolean) || We || mt) {
      V("Finish the active AI helper before generating.");
      return;
    }
    if (m === "restyle" && !Ne) {
      V(se ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (m === "restyle" && Ne) {
      const c = Sr(Ne), u = Tt ?? (c !== null ? c / 1e3 : null), x = y ?? u;
      if (u !== null && u < wt) {
        V(`Reference sample is only ${u.toFixed(1)} s. MiniMax Restyle needs at least ${wt} s of real source audio; choose a longer song or a full YouTube/library source.`);
        return;
      }
      if (u !== null && x !== null && x > 60 && u < Kn) {
        V(`Reference sample is only ${u.toFixed(1)} s from a ${Math.round(x)} s source. Clear it and re-pick; Restyle needs a representative ~60 s window to preserve the song.`);
        return;
      }
    }
    if (rr.current) return;
    rr.current = !0, V(null), St(), Sa.current?.abort();
    const n = new AbortController();
    Sa.current = n;
    try {
      const c = qr.overridesByEndpoint[Q.url] ?? {}, u = {
        ...Q,
        models: {
          music: c.music || Q.models.music,
          cover: c.cover || Q.models.cover,
          lyrics: c.lyrics || Q.models.lyrics,
          lyricsBackup: c.lyricsBackup || Q.models.lyricsBackup,
          image: c.image || Q.models.image,
          allIds: Q.models.allIds
        }
      }, x = Io(de);
      let E = _.trim(), R = L.trim(), U = k.trim(), D = null;
      if (!E && !J && !(m === "restyle" && !E)) {
        if (!T.trim() && !(de.intent ?? "").trim()) {
          V(a("musiccreator.error.noInput"));
          return;
        }
        De("lyrics");
        const ue = [];
        T.trim() && ue.push(T.trim());
        const Qe = (de.intent ?? "").trim();
        Qe && ue.push(`User intent (must respect): ${Qe}`), x && ue.push(`Musical context: ${x}`), W && ue.push(`Structure: ${W.prompt}`);
        const Ea = ue.join(`

`);
        D = await Gu(u, Ea, n.signal), E = D.lyrics, R || (R = D.song_title), U || (U = D.style_tags);
      } else !E && J && m !== "restyle" && (E = `[Intro]
[Instrumental]
[Outro]`);
      if (D && (N(D.lyrics), R === "Untitled" && (R = ""), R && !L.trim() && I(R), U && !k.trim() && M(U), D.usedFallback && le(
        `Primary lyrics model errored — used backup chat model "${u.models.lyricsBackup ?? "unknown"}" instead.`
      )), E.length > ra) {
        V(a("musiccreator.error.lyricsTooLong", { count: E.length, max: ra })), De("idle");
        return;
      }
      if (m === "restyle" && E.trim() && E.trim().length > Yn) {
        V(`Restyle lyrics must be ${Yn} characters or fewer for MiniMax cover mode. Shorten them or clear the Lyrics box to let MiniMax extract the original lyrics from the reference audio.`), De("idle");
        return;
      }
      if (!R.trim() && m === "restyle" && (R = Mu(at), R && !L.trim() && I(R)), R.trim() || (R = Au(E, T, U || k), R && R !== "Untitled" && !L.trim() && I(R)), m === "lyricsOnly") {
        const ue = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (R || a("musiccreator.track.untitled")) + " (lyrics)",
          styleTags: U || "—",
          lyricsPreview: E,
          // store the full text — used by Load
          durationMs: 0,
          bitrate: 0,
          sampleRate: 0,
          sizeBytes: 0,
          createdAt: Date.now(),
          audioDataUrl: "",
          // no audio
          specsJson: na(de) > 0 ? JSON.stringify(de) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: be,
          theme: T
        };
        await Jr(ue) && (_a(ue), C(ue.id), Oe(!1), v("player")), De("idle"), Vt(0);
        return;
      }
      if (m === "restyle" && !Ne) {
        V(se ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), De("idle");
        return;
      }
      if (m === "restyle" && Ne) {
        const ue = Sr(Ne), Qe = Tt ?? (ue !== null ? ue / 1e3 : null), Ea = y ?? Qe;
        if (Qe !== null && Qe < wt) {
          V(`Reference sample is only ${Qe.toFixed(1)} s. MiniMax Restyle needs at least ${wt} s of real source audio; choose a longer song or a full YouTube/library source.`), De("idle");
          return;
        }
        if (Qe !== null && Ea !== null && Ea > 60 && Qe < Kn) {
          V(`Reference sample is only ${Qe.toFixed(1)} s from a ${Math.round(Ea)} s source. Clear it and re-pick; Restyle needs a representative ~60 s window to preserve the song.`), De("idle");
          return;
        }
      }
      De("song");
      const Pe = [
        U,
        x,
        m === "restyle" && J ? "instrumental cover, no lead vocal" : ""
      ].filter((ue) => ue && ue.length > 0).join(". "), Ae = m === "restyle" ? Lu(Pe) : Pe, Ye = Vu(
        u,
        {
          lyrics: E,
          prompt: Ae || void 0,
          instrumental: J,
          refAudioBase64: m === "restyle" ? Ne ?? void 0 : void 0,
          refAudioDurationSec: m === "restyle" ? Tt : null
        },
        n.signal
      ), Xe = Le && !be && !!u.models.image, je = be, He = Xe ? So(
        u,
        (O.trim() || br(R, T, U || k)).slice(0, 1500),
        n.signal
      ).catch((ue) => {
        if (ue.name === "AbortError") throw ue;
        return console.warn("[Juli3ta] Cover-art generation failed:", ue), le(`Cover-art skipped: ${ue.message}`), je;
      }) : Promise.resolve(je), X = await Promise.allSettled([Ye, He]), ie = X[0], we = X[1];
      if (ie.status === "rejected")
        throw n.abort(), ie.reason;
      const ce = ie.value, q = we.status === "fulfilled" ? we.value : je;
      if (!ce?.data?.audio || typeof ce.data.audio != "string" || ce.data.audio.length < 100) {
        const ue = ce?.trace_id ? ` (trace ${ce.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${ue}. Try again or pick a different model in Settings.`);
      }
      const pe = `data:audio/mpeg;base64,${ce.data.audio}`, Rt = m === "restyle" ? " (restyle)" : "", it = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (R || a("musiccreator.track.untitled")) + Rt,
        styleTags: U || "—",
        lyricsPreview: E,
        // store the full text — used by Load
        durationMs: ce.data.duration_ms ?? 0,
        bitrate: ce.data.bitrate ?? 0,
        sampleRate: ce.data.sample_rate ?? 0,
        sizeBytes: ce.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: pe,
        specsJson: na(de) > 0 ? JSON.stringify(de) : "",
        coverDataUrl: q,
        theme: T
      };
      F(q), console.info("[Juli3ta] Saving generated song:", { id: it.id, title: it.title, durationMs: it.durationMs, sizeBytes: it.sizeBytes }), await Jr(it) && (C(it.id), Oe(!1), v("player"), hn(it), _a(it), m === "restyle" && Ne && Ki({
        trackId: it.id,
        audioSrc: `data:audio/wav;base64,${Ne}`,
        sourceLabel: at || "Original"
      }), d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: it.title }),
        isRead: !1
      })), De("idle"), Vt(0);
    } catch (c) {
      if (c.name === "AbortError") {
        De("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", c), V(c.message || "Generation failed — check the console for details."), De("idle"), Vt(0);
    } finally {
      rr.current = !1;
    }
  }, [
    Q,
    T,
    _,
    L,
    k,
    de,
    W,
    J,
    m,
    Ne,
    at,
    Tt,
    y,
    se,
    a,
    Jr,
    qr,
    hn,
    _a,
    d,
    St,
    Le,
    be,
    O,
    We,
    mt
  ]), _s = () => Po.current?.click(), or = te(0), _t = z(async (n, c, u = {}) => {
    const x = ++or.current, E = () => or.current === x;
    V(null), Lt(!0), qa({
      stage: "loading",
      progress: 0.04,
      message: "Preparing cover reference from the song…"
    }), Re(null), Je(null), j(null), ht(c), ne(null);
    const R = typeof n == "string" && /^https?:\/\//i.test(n), U = (D) => {
      E() && qa(D);
    };
    try {
      if (rt === "mix") {
        const D = await eu(n, { onProgress: U });
        if (!E()) return;
        Re(D.base64), Je(D.durationSec), j(D.sourceDurationSec);
        const me = D.sourceDurationSec / 60;
        if (D.segments.length > 1) {
          const Pe = D.segments.map((Ae) => `${Math.floor(Ae.startSec / 60)}:${Math.floor(Ae.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          ne(
            `Mixed ${D.segments.length} iconic moments (${D.durationSec.toFixed(0)} s) from ${me.toFixed(1)} min — at ${Pe}`
          );
        } else
          ne(`Using whole clip (${D.durationSec.toFixed(0)} s)`);
      } else {
        if (u.videoId)
          try {
            U({
              stage: "loading",
              progress: 0.12,
              message: "Creating fast server-side reference cut…"
            });
            const Ye = await fetch(
              `/api/music/reference-sample?videoId=${encodeURIComponent(u.videoId)}&durationSec=60`
            );
            if (!Ye.ok) throw new Error(`reference sample HTTP ${Ye.status}`);
            const Xe = await Ye.json();
            if (!Xe.base64) throw new Error("reference sample response missing audio");
            if (!E()) return;
            U({
              stage: "done",
              progress: 1,
              message: "Reference sample ready."
            });
            const je = Xe.durationSec ?? 60, He = Xe.sourceDurationSec ?? je;
            Re(Xe.base64), Je(je), j(He);
            const X = Xe.startSec ?? 0, ie = He / 60, we = X / 60, ce = X < 60 ? `${X.toFixed(1)} s` : `${Math.floor(we)}:${Math.floor(X % 60).toString().padStart(2, "0")}`;
            ne(
              He <= je + 0.5 ? `Using whole clip (${je.toFixed(0)} s)` : `Fast-cut cover reference ${je.toFixed(0)} s starting at ${ce} of ${ie.toFixed(1)} min`
            );
            return;
          } catch {
            U({
              stage: "loading",
              progress: 0.08,
              message: "Fast server cut unavailable — using browser fallback…"
            });
          }
        const D = await $i(n, {
          fastRemote: R,
          onProgress: U
        });
        if (!E()) return;
        Re(D.base64), Je(D.durationSec), j(D.sourceDurationSec);
        const me = D.sourceDurationSec / 60, Pe = D.startSec / 60, Ae = D.startSec < 60 ? `${D.startSec.toFixed(1)} s` : `${Math.floor(Pe)}:${Math.floor(D.startSec % 60).toString().padStart(2, "0")}`;
        ne(
          D.sourceDurationSec <= D.durationSec + 0.5 ? `Using whole clip (${D.durationSec.toFixed(0)} s)` : `Auto-picked cover reference ${D.durationSec.toFixed(0)} s starting at ${Ae} of ${me.toFixed(1)} min`
        );
      }
    } catch (D) {
      if (!E()) return;
      V(D.message || "Could not analyze that audio."), Re(null), Je(null), j(null), ht(null);
    } finally {
      E() && (Lt(!1), qa(null));
    }
  }, [rt]), Ns = async () => {
    ha(null);
    try {
      let n;
      if (gt === "tab") {
        const E = navigator.mediaDevices;
        if (!E.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        n = await E.getDisplayMedia({ video: !0, audio: !0 });
        for (const R of n.getVideoTracks())
          R.stop(), n.removeTrack(R);
        if (n.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        n = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Jt.current = n;
      const u = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((E) => MediaRecorder.isTypeSupported(E)) || "", x = new MediaRecorder(n, u ? { mimeType: u } : void 0);
      Va.current = [], x.ondataavailable = (E) => {
        E.data && E.data.size > 0 && Va.current.push(E.data);
      }, x.onstop = async () => {
        try {
          const E = new Blob(Va.current, {
            type: Va.current[0]?.type || u || "audio/webm"
          });
          if (E.size === 0) {
            ha("Recording was empty.");
            return;
          }
          const R = new FileReader();
          R.onerror = () => ha("Could not read the recording."), R.onload = () => {
            const U = typeof R.result == "string" ? R.result : "", D = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${gt === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - Rr.current,
              mimeType: E.type || u || "audio/webm",
              audioDataUrl: U,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await Ri(D), Lr((me) => [D, ...me]);
              } catch (me) {
                console.warn("Recording save failed", me), ha("Could not save the recording. Try again.");
              }
            })(), Ga(!1), _t(E, D.name);
          }, R.readAsDataURL(E);
        } finally {
          Jt.current?.getTracks().forEach((E) => E.stop()), Jt.current = null;
        }
      }, x.start(250), Bo.current = x, Rr.current = Date.now(), Ho(0), Ir(!0), ga.current = setInterval(() => {
        Ho(Date.now() - Rr.current);
      }, 100);
    } catch (n) {
      ha(n.message || "Could not start recording."), Jt.current?.getTracks().forEach((c) => c.stop()), Jt.current = null, Ir(!1);
    }
  }, Cs = () => {
    const n = Bo.current;
    n && n.state !== "inactive" && n.stop(), ga.current && clearInterval(ga.current), Ir(!1);
  };
  B(() => () => {
    Jt.current?.getTracks().forEach((n) => n.stop()), ga.current && clearInterval(ga.current);
  }, []);
  const Es = (n) => {
    const c = n.target.files?.[0];
    if (n.target.value = "", !!c) {
      if (c.size > 50 * 1024 * 1024) {
        V("Reference audio is too big. Max 50 MB.");
        return;
      }
      _t(c, c.name);
    }
  }, As = (n) => {
    ma(!1), _t(n.audioDataUrl, n.name);
  }, Ms = () => {
    ma(!0), On().then((n) => Lr(n)).catch(() => {
    });
  }, Ls = () => Ja(!0), zs = (n) => {
    if (Ja(!1), !n.audioDataUrl) return;
    const c = n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    if (n.durationMs > 0 && n.durationMs / 1e3 < wt) {
      V(`"${c}" is only ${(n.durationMs / 1e3).toFixed(1)} s. MiniMax Restyle needs at least ${wt} s of real song audio; choose a longer track or a YouTube/library source.`);
      return;
    }
    _t(n.audioDataUrl, `${c}.mp3`);
  }, Is = () => {
    or.current += 1, Lt(!1), Re(null), Je(null), j(null), ht(null), ne(null), qa(null);
  }, Rs = () => {
    Sa.current?.abort(), De("idle");
  }, Nt = z(async (n, c, u) => {
    if (!Q) throw new Error("No endpoint connected");
    const x = (X) => {
      const ie = X, we = ie.choices?.[0], ce = [
        we?.message?.content,
        we?.delta?.content,
        we?.text,
        ie.output_text
      ];
      for (const q of ce)
        if (typeof q == "string" && q.trim().length > 0) return q.trim();
      return "";
    }, E = (X) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(X), R = /* @__PURE__ */ new Set(), U = [], D = (X) => {
      X && !R.has(X) && (R.add(X), U.push(X));
    };
    if (D(Q.models.lyricsBackup), Q.models.allIds.filter(E).forEach(D), U.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const me = typeof c == "string" ? c : JSON.stringify(c), Pe = u?.temperature ?? 0.5, Ae = Math.max(u?.maxTokens ?? 800, 400), Ye = (X) => {
      const ie = X.toLowerCase();
      return /^minimax\/ail-compound-minimax$/.test(ie) ? 10 : /^minimax\/ail-balanced$/.test(ie) ? 20 : /^minimax\/ail-kimi$/.test(ie) ? 30 : /^moonshot\/ail-balanced$/.test(ie) ? 60 : /^moonshot\/ail-compound$/.test(ie) ? 70 : /^(deepseek\/)?ail-fast$/.test(ie) ? 85 : /^(deepseek\/)?ail-balanced$/.test(ie) ? 86 : /^(ail-compound|moonshot\/ail-kimi|ail-kimi|ail-kimi-strict|moonshot\/ail-kimi-strict)$/.test(ie) ? 90 : /search/.test(ie) ? 100 : 80;
    }, Xe = (X) => /^minimax\/ail-compound$/i.test(X) || /^ail-compound-minimax$/i.test(X);
    U.sort((X, ie) => Ye(X) - Ye(ie));
    const je = U.filter((X) => !Xe(X)), He = 45e3;
    return Er(je, async (X) => {
      const ie = da(u?.signal, He);
      let we;
      try {
        we = await ca(Q, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: X,
            messages: [
              { role: "system", content: n },
              { role: "user", content: me }
            ],
            temperature: Pe,
            max_tokens: Ae
          }),
          signal: ie.signal
        });
      } catch (pe) {
        throw pe.name === "TimeoutError" ? new Error(`AI assist timed out after ${He / 1e3}s.`) : pe;
      } finally {
        ie.dispose();
      }
      if (!we.ok) {
        const pe = await we.text().catch(() => "");
        throw we.status === 400 && /web_search|not support|unsupported|invalid params/i.test(pe) ? new Se(502, pe, `AI assist model ${X} rejected provider params: ${pe.slice(0, 200)}`) : new Se(we.status, pe, `AI assist HTTP ${we.status}: ${pe.slice(0, 200)}`);
      }
      const ce = await we.json(), q = x(ce);
      if (!q)
        throw console.warn("[Juli3ta] empty AI assist content from", X, ce), new Se(502, "", `Model "${X}" returned empty content`);
      return q.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [Q]), Ps = z(async () => {
    if (!Q) return;
    const n = ze("specs");
    if (n) {
      At(!0), V(null);
      try {
        const u = await Nt(`You are a music-production assistant. Given a theme, style, and (optionally) lyrics, return ONE JSON object that fills in optimal Track Specs for the song.

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
          existing_specs: na(de) > 0 ? de : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: n.signal
        }), x = qi(u) ?? u;
        let E;
        try {
          E = JSON.parse(x);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${u.slice(0, 160)}`);
        }
        if (n.signal.aborted) return;
        Te((R) => ({ ...E, intent: R.intent }));
      } catch (c) {
        if (Pa(c)) return;
        V(c.message || "Optimize failed.");
      } finally {
        Ie("specs", n), At(!1);
      }
    }
  }, [Q, T, k, _, de, Nt, ze, Ie]), gn = z(async () => {
    if (!Q) return;
    if (!Q.models.image) {
      V(`This endpoint (${Q.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (We) return;
    const n = ze("cover");
    if (!n) return;
    const c = n.signal;
    Wt(!0), V(null);
    try {
      const u = (O.trim() || br(L, T, k)).slice(0, 1500), x = await So(Q, u, c);
      if (c.aborted) return;
      F(x), Ee && Ta.current?.(Ee, x);
    } catch (u) {
      if (Pa(u)) return;
      V(u.message || "Cover-art generation failed.");
    } finally {
      Ie("cover", n), Wt(!1);
    }
  }, [Q, O, L, T, k, We, Ee, ze, Ie]), yn = z((n) => {
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
      typeof u == "string" && u.startsWith("data:image/") && (F(u), Ee && Ta.current?.(Ee, u));
    }, c.readAsDataURL(n);
  }, [Ee]), js = z(async () => {
    const n = ze("theme");
    if (n) {
      V(null);
      try {
        const u = await Nt("You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.", {
          style: k || "pop",
          existing_theme: T || null
        }, { temperature: 0.85, maxTokens: 200, signal: n.signal });
        if (n.signal.aborted) return;
        A(u);
      } catch (c) {
        if (Pa(c)) return;
        V(c.message || "Theme inspiration failed.");
      } finally {
        Ie("theme", n);
      }
    }
  }, [ze, Ie, Nt, k, T]), Ds = z(async () => {
    const n = ze("style");
    if (n) {
      V(null);
      try {
        const u = await Nt('You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".', {
          theme: T || "a quiet evening",
          existing_style: k || null
        }, { temperature: 0.7, maxTokens: 120, signal: n.signal });
        if (n.signal.aborted) return;
        M(u.replace(/^["']|["']$/g, ""));
      } catch (c) {
        if (Pa(c)) return;
        V(c.message || "Style suggestion failed.");
      } finally {
        Ie("style", n);
      }
    }
  }, [ze, Ie, Nt, T, k]), Us = z(async () => {
    if (!_.trim()) {
      V("Nothing to polish — write some lyrics first.");
      return;
    }
    const n = ze("lyrics");
    if (n) {
      V(null);
      try {
        const u = await Nt("You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.", {
          style: k || null,
          lyrics: _
        }, { temperature: 0.6, maxTokens: 1200, signal: n.signal });
        if (n.signal.aborted) return;
        if (u.length > ra) {
          V(`Polished lyrics exceeded ${ra} chars (${u.length}). Trimming the original first might help.`);
          return;
        }
        N(u);
      } catch (c) {
        if (Pa(c)) return;
        V(c.message || "Lyrics polish failed.");
      } finally {
        Ie("lyrics", n);
      }
    }
  }, [ze, Ie, Nt, k, _]), Os = (n) => {
    M((c) => c ? `${c}, ${n.toLowerCase()}` : n.toLowerCase());
  }, Vr = () => {
    const n = [
      "Late-night coding session, neon city skyline, focus and flow.",
      "Sunday-morning coffee, soft rain, lo-fi piano.",
      "Synthwave anthem about shipping on Friday evening.",
      "Jazz ballad about a forgotten train station at 3am.",
      "Acoustic folk song about a long road trip with old friends.",
      "Cinematic orchestral piece for a heroic underdog scene.",
      "Upbeat pop anthem about finishing a hard project."
    ];
    A(n[Math.floor(Math.random() * n.length)]);
  }, $s = () => {
    const n = w ?? $.state.trackId ?? Ct[0]?.id ?? xe[0]?.id ?? null, c = n ? $e.find((u) => u.id === n) ?? null : null;
    c && Zt(c), v("creator"), Vr();
  }, fn = z((n) => {
    Ge((c) => c.filter((u) => u.id !== n)), Yc(n).catch((c) => console.warn("Track cache delete failed:", c)), iu(n).catch((c) => console.warn("Track file delete failed:", c));
  }, []), Hs = z(async () => {
    if (!Za) {
      un(!0);
      try {
        const n = await su();
        ka(n), d({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: n,
          isRead: !1
        });
      } catch (n) {
        le(`Could not open JULI3TA folder — ${n.message || n}`);
      } finally {
        un(!1);
      }
    }
  }, [d, Za]), nr = z(async (n, c) => {
    const u = c.trim().slice(0, 200) || "Untitled";
    Ge((x) => x.map((E) => E.id === n ? { ...E, title: u } : E));
    try {
      await Kc(n, u), le(null);
    } catch (x) {
      const E = x.message || "Database write failed";
      le(`Couldn't rename track — ${E}.`);
    }
  }, []), Yr = z(async (n, c) => {
    Ge((u) => u.map((x) => x.id === n ? { ...x, coverDataUrl: c } : x));
    try {
      await Xc(n, c), le(null);
    } catch (u) {
      const x = u.message || "Database write failed";
      le(`Couldn't save cover art — ${x}.`);
    }
  }, []);
  B(() => {
    Ta.current = Yr;
  }, [Yr]);
  const bn = z(async (n, c) => {
    Ge((u) => u.map((x) => x.id === n ? { ...x, styleTags: c || "—" } : x));
    try {
      await Qc(n, c), le(null);
    } catch (u) {
      const x = u.message || "Database write failed";
      le(`Couldn't save style — ${x}.`);
    }
  }, []), vn = z(async (n, c) => {
    Ge((u) => u.map((x) => x.id === n ? { ...x, lyricsPreview: c } : x));
    try {
      await Zc(n, c), le(null);
    } catch (u) {
      const x = u.message || "Database write failed";
      le(`Couldn't save lyrics — ${x}.`);
    }
  }, []), xn = z(async (n, c) => {
    Ge((u) => u.map((x) => x.id === n ? { ...x, specsJson: c } : x));
    try {
      await ed(n, c), le(null);
    } catch (u) {
      const x = u.message || "Database write failed";
      le(`Couldn't save specs — ${x}.`);
    }
  }, []), wn = z(async (n, c) => {
    Ge((u) => u.map((x) => x.id === n ? { ...x, theme: c } : x));
    try {
      await td(n, c), le(null);
    } catch (u) {
      const x = u.message || "Database write failed";
      le(`Couldn't save theme — ${x}.`);
    }
  }, []);
  B(() => {
    if (!Ee) return;
    const n = Ee, c = setTimeout(() => {
      const u = zt.find((me) => me.id === n);
      if (!u) return;
      const x = L.trim() || u.title, E = k.trim(), R = T, U = na(de) > 0 ? JSON.stringify(de) : "", D = u.styleTags === "—" ? "" : u.styleTags || "";
      u.title !== x && nr(n, x), D !== E && bn(n, E), (u.lyricsPreview || "") !== _ && vn(n, _), (u.specsJson || "") !== U && xn(n, U), (u.theme || "") !== R && wn(n, R);
    }, 600);
    return () => clearTimeout(c);
  }, [Ee, L, k, T, _, de, zt, nr, bn, vn, xn, wn]);
  const [kn, Sn] = S(null), [Fs, Tn] = S(!1), Zt = z((n) => {
    N(n.lyricsPreview ?? ""), M(n.styleTags && n.styleTags !== "—" ? n.styleTags : ""), A(n.theme ?? "");
    const c = n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (I(c), Z(!1), n.specsJson)
      try {
        Te(JSON.parse(n.specsJson));
      } catch {
        Te({});
      }
    else
      Te({});
    F(n.coverDataUrl ?? ""), ee(""), Wa(n.id), V(null), P(null), Z(!1), Ce(n) ? n.source === "youtube" ? (h("restyle"), Re(null), Je(null), j(null), ht(`${c}.mp3`), ne("Resolving streamed audio…"), Lt(!0), (async () => {
      try {
        const x = n.externalId || "";
        if (!x) throw new Error("Missing source identifier.");
        const E = La(x), R = xa[E], U = R && Date.now() - R.resolvedAt < 5400 * 1e3 ? R.src : (await qn(x)).proxyUrl;
        await _t(U, `${c}.mp3`, { videoId: x });
      } catch (x) {
        Lt(!1), Re(null), Je(null), j(null), ht(null), ne(null), V(`Could not load streamed track for restyle: ${x.message || "unknown error"}`);
      }
    })()) : (h("restyle"), _t(n.audioDataUrl, `${c}.mp3`)) : (Re(null), Je(null), j(null), ht(null), ne(null), h("lyricsOnly"));
  }, [_t, xa]), _n = z((n) => {
    const c = _a(n);
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
  }, [_a, l, d, a]), ir = z((n, c, u, x) => {
    const E = o.ensureUserFolder("Desktop");
    if (!E) return;
    const R = o.findChildByName(E, n);
    let U;
    if (R)
      u.refTrackId || o.writeFile(R.id, c), U = R.id;
    else {
      U = o.createFile(E, n, c, u);
      const D = Array.from(x).reduce((Ae, Ye) => Ae + Ye.charCodeAt(0), 0), me = D % 6 + 1, Pe = Math.floor(D / 6) % 4;
      l({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: n,
          icon: Uc(n),
          fileSystemNodeId: U,
          position: { x: 16 + me * 80, y: 16 + Pe * 90 },
          isSelected: !1
        }
      });
    }
    d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Sparkles",
      title: a("musiccreator.notify.savedToDesktopTitle"),
      message: a("musiccreator.notify.savedToDesktopBody", { name: n }),
      isRead: !1
    });
  }, [o, l, d, a]), Bs = z((n) => {
    if (!n.audioDataUrl) return;
    const c = hr(n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    ir(`${c}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: n.id }, n.id);
  }, [ir]), Ws = z((n) => {
    if (!n.lyricsPreview) return;
    const c = hr(n.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    ir(`${c}.lyrics.txt`, n.lyricsPreview, { mimeType: "text/plain" }, `${n.id}-lyrics`);
  }, [ir]), qs = z((n) => {
    Oe(!1), v("player"), C(n.id);
  }, []), xt = z((n) => {
    const c = n.dataTransfer.getData(Da);
    if (!c) return null;
    try {
      return JSON.parse(c);
    } catch {
      return null;
    }
  }, []), Js = z((n) => {
    const c = xt(n);
    if (c && c.lyricsPreview) {
      n.preventDefault(), N(c.lyricsPreview);
      const u = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !L.trim() && u && I(u), !k.trim() && c.styleTags && c.styleTags !== "—" && M(c.styleTags);
      return;
    }
  }, [xt, L, k]), Gs = z((n) => {
    const c = xt(n);
    c && c.styleTags && c.styleTags !== "—" && (n.preventDefault(), M((u) => u ? `${u}, ${c.styleTags}` : c.styleTags));
  }, [xt]), Vs = z((n) => {
    const c = xt(n);
    if (c) {
      n.preventDefault();
      const u = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), x = c.styleTags && c.styleTags !== "—" ? `Inspired by "${u}" — ${c.styleTags}` : `Inspired by "${u}"`;
      A(x);
    }
  }, [xt]), Ys = z((n) => {
    const c = xt(n);
    c && (n.preventDefault(), I(c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [xt]), sr = (n) => {
    n.dataTransfer.types.includes(Da) && (n.preventDefault(), n.dataTransfer.dropEffect = "copy");
  }, Nn = _.length, Ks = k.length, K = Gt !== "idle", lr = Object.values(Ke).some(Boolean) || We || mt, Xs = ye(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            Sa.current?.abort(), St(), or.current += 1, rr.current = !1, h("compose"), A(""), N(""), M(""), I(""), Te({}), P(null), Z(!1), F(""), ee(""), Do(!1), Re(null), Je(null), j(null), ht(null), ne(null), V(null), le(null), De("idle"), Vt(0), Mt({ ...Ra }), Wt(!1), At(!1), Wa(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => Vr() },
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
          { id: "open-help", label: "How it works…", onSelect: () => p(!0) },
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => er(!0) }
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
          { id: "juli3ta-help", label: "JULI3TA Help…", onSelect: () => p(!0) },
          { id: "tytus-help", label: "Tytus Help", actionId: "open-help" },
          { id: "juli3ta-about", label: `About JULI3TA v${ko}`, onSelect: () => er(!0) }
        ]
      }
    ]
  }), [r, St]);
  Rc(r?.id ?? null, Xs);
  const nt = ye(
    () => zt.filter(Bi),
    [zt]
  ), Ct = ye(() => {
    let n = nt;
    Ve === "songs" ? n = n.filter((u) => Ce(u) && !/\(restyle\)\s*$/i.test(u.title) && !/\(lyrics\)\s*$/i.test(u.title)) : Ve === "restyles" ? n = n.filter((u) => /\(restyle\)\s*$/i.test(u.title)) : Ve === "lyrics" && (n = n.filter((u) => !Ce(u) || /\(lyrics\)\s*$/i.test(u.title)));
    const c = Ue.trim().toLowerCase();
    return c ? n.filter((u) => u.title.toLowerCase().includes(c) || u.styleTags.toLowerCase().includes(c)) : n;
  }, [nt, Ue, Ve]), ea = ye(() => {
    let n = xe;
    yt === "favorites" && (n = n.filter((u) => Kt.has(u.id)));
    const c = Ue.trim().toLowerCase();
    return c ? n.filter((u) => u.title.toLowerCase().includes(c) || (u.artist || "").toLowerCase().includes(c) || (u.album || "").toLowerCase().includes(c)) : n;
  }, [xe, yt, Ue, Kt]), ta = z((n, c) => {
    const u = La(n), x = Qt.current[u];
    if (!c?.force && x && Date.now() - x.resolvedAt < 5400 * 1e3)
      return Promise.resolve(x.src);
    const E = Wr.current.get(n);
    if (!c?.force && E) return E;
    tn((U) => new Set(U).add(n));
    const R = qn(n).then((U) => {
      const D = { src: U.proxyUrl, resolvedAt: Date.now() };
      return Qt.current = { ...Qt.current, [u]: D }, us((me) => ({ ...me, [u]: D })), U.proxyUrl;
    }).finally(() => {
      Wr.current.delete(n), tn((U) => {
        const D = new Set(U);
        return D.delete(n), D;
      });
    });
    return Wr.current.set(n, R), R;
  }, []), Na = z((n) => {
    n.slice(0, 3).forEach((c) => {
      ta(c.id).catch(() => {
      });
    });
  }, [ta]);
  B(() => {
    if (!bt) return;
    const n = new AbortController();
    return Promise.allSettled([
      tu(n.signal),
      Bn(n.signal),
      Wn(n.signal)
    ]).then(([c, u, x]) => {
      c.status === "fulfilled" ? Qo(c.value) : Qo(null), u.status === "fulfilled" && Zo(u.value), x.status === "fulfilled" && en(x.value);
    }), () => n.abort();
  }, [bt]), B(() => {
    if (!bt) return;
    const n = (c) => {
      c.key === "Escape" && Oe(!1);
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [bt]), B(() => {
    if (!bt) return;
    const n = Ur.trim();
    if (n.length < 2) {
      const R = window.setTimeout(() => {
        Or([]), vt(null), Xa(!1);
      }, 0);
      return () => window.clearTimeout(R);
    }
    const c = `${va}:${n.toLowerCase()}`, u = dn.current.get(c);
    if (u) {
      Or(u), Xa(!1), vt(null), Na(u);
      return;
    }
    const x = new AbortController(), E = setTimeout(() => {
      Xa(!0), vt(null);
      let R = Br.current.get(c);
      R || (R = nu(n, va, 20, x.signal).then((U) => va === "playlists" ? U.results.playlists : U.results.tracks).catch(() => ou(n, 20, x.signal)).finally(() => {
        Br.current.delete(c);
      }), Br.current.set(c, R)), R.then((U) => {
        dn.current.set(c, U), Or(U), Na(U), U.length > 0 && Xo(n);
      }).catch((U) => {
        x.signal.aborted || vt(U.message || "Music search failed.");
      }).finally(() => {
        x.signal.aborted || Xa(!1);
      });
    }, 120);
    return () => {
      x.abort(), clearTimeout(E);
    };
  }, [Ur, va, bt, Na, Xo]);
  const cr = z(async () => {
    const [n, c] = await Promise.allSettled([
      Bn(),
      Wn()
    ]);
    n.status === "fulfilled" && Zo(n.value), c.status === "fulfilled" && en(c.value);
  }, []), Qs = z(async (n, c) => {
    await au(n, c), await cr(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${n} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, cr]), Zs = z(async (n) => {
    await ru(n), await cr(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${n} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [d, cr]), el = ye(
    () => new Set(xe.filter((n) => n.externalId).map((n) => n.externalId)),
    [xe]
  ), dr = z((n, c) => {
    const u = Wi(n.title, n.channel);
    return {
      id: c?.id ?? La(n.id),
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
      thumbnailUrl: n.thumbnailUrl || Tr(n.id),
      artist: u.artist || n.channel || "Unknown",
      album: n.channel ?? ""
    };
  }, []), tl = z(async (n, c) => {
    if (n.audioDataUrl && !c?.force) return n.audioDataUrl;
    if (!Ro(n) || !n.externalId) return n.audioDataUrl || null;
    const u = La(n.externalId), x = Qt.current[u] ?? Qt.current[n.id];
    return !c?.force && x && Date.now() - x.resolvedAt < 5400 * 1e3 ? x.src : ta(n.externalId, c);
  }, [ta]), $e = ye(
    () => [...on, ...xe, ...Ct],
    [on, xe, Ct]
  );
  B(() => {
    if (!w || $e.length === 0) return;
    $e.some((c) => c.id === w) || C(null);
  }, [w, $e]);
  const Cn = te(null), $ = Yu($e, Cn, tl);
  B(() => {
    const n = $.state.trackId;
    n && es((c) => c[0] === n ? c : [n, ...c.filter((x) => x !== n)].slice(0, 8));
  }, [$.state.trackId]), B(() => {
    if (typeof navigator > "u" || !("mediaSession" in navigator)) return;
    const n = navigator.mediaSession, c = $.state.trackId, u = c ? $e.find((x) => x.id === c) : null;
    if (!u) {
      n.metadata = null, n.playbackState = "none";
      return;
    }
    return n.metadata = new MediaMetadata({
      title: u.title || "Untitled",
      artist: u.artist || "JULI3TA",
      album: u.album || (u.styleTags && u.styleTags !== "—" ? u.styleTags : ""),
      artwork: u.coverDataUrl ? [{ src: u.coverDataUrl, sizes: "512x512", type: u.coverDataUrl.startsWith("data:image/png") ? "image/png" : "image/jpeg" }] : u.thumbnailUrl ? [{ src: u.thumbnailUrl, sizes: "256x256", type: "image/jpeg" }] : []
    }), n.playbackState = $.state.playing ? "playing" : "paused", n.setActionHandler("play", () => $.toggle(u)), n.setActionHandler("pause", () => $.pause()), n.setActionHandler("previoustrack", () => $.prev()), n.setActionHandler("nexttrack", () => $.next()), n.setActionHandler("seekbackward", (x) => {
      $.seek(Math.max(0, $.state.positionMs - (x.seekOffset ?? 10) * 1e3));
    }), n.setActionHandler("seekforward", (x) => {
      $.seek(Math.min($.state.durationMs || 0, $.state.positionMs + (x.seekOffset ?? 10) * 1e3));
    }), () => {
      n.setActionHandler("play", null), n.setActionHandler("pause", null), n.setActionHandler("previoustrack", null), n.setActionHandler("nexttrack", null), n.setActionHandler("seekbackward", null), n.setActionHandler("seekforward", null);
    };
  }, [$, $.state.trackId, $.state.playing, $e]), B(() => {
    const n = $.state.trackId;
    if (!n) return;
    const c = $e.find((R) => R.id === n);
    if (!c) return;
    const u = $.state.playing ? "▶" : "⏸", x = (c.title || "Untitled").replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), E = document.title;
    return document.title = `${u} ${x} — JULI3TA`, () => {
      document.title = E;
    };
  }, [$.state.trackId, $.state.playing, $e]), B(() => {
    if (f !== "player") return;
    const n = (c) => {
      const u = c.target;
      if (u) {
        const R = u.tagName;
        if (R === "INPUT" || R === "TEXTAREA" || R === "SELECT" || u.isContentEditable) return;
      }
      const x = $.state.trackId;
      if (!x) return;
      const E = $e.find((R) => R.id === x);
      if (E)
        switch (c.key) {
          case " ":
            c.preventDefault(), $.toggle(E);
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
  }, [f, $, $e]), B(() => {
    const n = (c) => {
      const u = c.target;
      if (u) {
        const x = u.tagName;
        if (x === "INPUT" || x === "TEXTAREA" || x === "SELECT" || u.isContentEditable) return;
      }
      c.key === "?" || c.key === "/" && c.shiftKey ? (c.preventDefault(), Dr((x) => !x)) : c.key === "Escape" && jr && Dr(!1);
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [jr]);
  const al = z((n) => {
    const c = n.items.find(Ce);
    c && (nn((u) => [
      ...n.items.filter((x) => !u.some((E) => E.id === x.id)),
      ...u
    ]), C(c.id), Oe(!1), v("player"), $.play(c));
  }, [$]), rl = z(async (n) => {
    await hd(n), Xt(await Aa());
  }, []), ol = z((n) => {
    vt(null), an(n.id);
    const c = La(n.id), u = dr(n, { id: c });
    nn((x) => [u, ...x.filter((E) => E.id !== u.id)]), C(u.id), v("player"), $.play(u), an(null);
  }, [$, dr]), nl = z((n) => {
    ta(n.id).catch(() => {
    });
  }, [ta]), il = z(async (n) => {
    rn(n.id);
    const c = dr(n);
    try {
      await Mi(c), $r((u) => [c, ...u.filter((x) => x.id !== c.id)]), C(c.id), Vo("library"), Yo("all"), Na([n]), wa.length > 0;
    } catch (u) {
      vt(u.message || "Could not save track.");
    } finally {
      rn(null);
    }
  }, [dr, Na, wa.length]), Kr = z((n) => {
    Hr((c) => {
      const u = new Set(c);
      return u.has(n.id) ? u.delete(n.id) : u.add(n.id), u;
    }), pd({
      kind: "track",
      entityId: n.id,
      provider: n.source ?? "youtube",
      title: n.title
    }).catch((c) => console.warn("Favorite toggle failed:", c));
  }, []), sl = z(async () => {
    const n = Fr.trim() || "New Playlist";
    cn(!0);
    try {
      const c = await md(n);
      Xt((u) => [c, ...u]), ln("");
    } catch (c) {
      vt(c.message || "Could not create playlist.");
    } finally {
      cn(!1);
    }
  }, [Fr]), ll = z(async (n, c) => {
    try {
      await gd(n, c);
      const u = await Aa();
      Xt(u);
    } catch (u) {
      vt(u.message || "Could not add to playlist.");
    }
  }, []), cl = z(async (n, c) => {
    try {
      await yd(n, c);
      const u = await Aa();
      Xt(u);
    } catch (u) {
      vt(u.message || "Could not remove from playlist.");
    }
  }, []), Xr = z((n) => {
    $r((c) => c.filter((u) => u.id !== n.id)), Hr((c) => {
      const u = new Set(c);
      return u.delete(n.id), u;
    }), cd(n.id).then(() => Aa().then(Xt)).catch((c) => console.warn("Library track delete failed:", c));
  }, []), dl = z((n) => {
    Ka((c) => {
      const u = new Set(c);
      return u.has(n.id) ? u.delete(n.id) : u.add(n.id), u;
    });
  }, []), Ca = z(() => {
    Pr(!1), Ka(/* @__PURE__ */ new Set());
  }, []);
  B(() => {
    if (!It) return;
    const n = (c) => {
      c.key === "Escape" && Ca();
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [It, Ca]), B(() => {
    ve !== "library" && (It || ft.size > 0) && (Pr(!1), Ka(/* @__PURE__ */ new Set()));
  }, [ve, It, ft.size]);
  const Qr = z((n) => {
    C(n.id), Oe(!1), v("player");
  }, []), ul = z((n) => {
    Zt(n), Oe(!1), v("creator");
  }, [Zt]);
  return Q ? /* @__PURE__ */ s("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
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
                    children: ve === "mywork" ? "My Work" : "Library"
                  }
                ),
                /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: ve === "mywork" ? Ue.trim() || Ve !== "all" ? `${Ct.length} / ${nt.length}` : a(
                    nt.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: nt.length }
                  ) : Ue.trim() || yt !== "all" ? `${ea.length} / ${xe.length}` : `${xe.length} saved` }),
                  ve === "mywork" && /* @__PURE__ */ s(ge, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: Hs,
                        disabled: Za,
                        className: "flex items-center justify-center transition-all",
                        style: {
                          width: 22,
                          height: 22,
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-window)",
                          color: "var(--text-secondary)",
                          opacity: Za ? 0.5 : 1
                        },
                        title: Qa ? `Open real folder: ${Qa}` : "Open real JULI3TA folder",
                        children: /* @__PURE__ */ t(Ul, { size: 11 })
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
                              onClick: () => Go("cards"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: fa === "cards" ? "var(--bg-hover)" : "transparent",
                                color: fa === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "Cards",
                              children: /* @__PURE__ */ t(yo, { size: 11 })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => Go("list"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: fa === "list" ? "var(--bg-hover)" : "transparent",
                                color: fa === "list" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "List",
                              children: /* @__PURE__ */ t($t, { size: 11 })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  ve === "library" && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        Oe(!0), ba("search");
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
                      children: /* @__PURE__ */ t(kt, { size: 11 })
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
                { id: "mywork", label: "My Work", count: nt.length },
                { id: "library", label: "Library", count: xe.length }
              ].map((n) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => Vo(n.id),
                  className: "flex-1 rounded-md transition-all",
                  style: {
                    height: 26,
                    fontSize: 11,
                    fontWeight: ve === n.id ? 700 : 600,
                    color: ve === n.id ? "white" : "var(--text-secondary)",
                    background: ve === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
                          opacity: ve === n.id ? 0.85 : 0.55
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
                opacity: ve === "mywork" ? nt.length === 0 ? 0.4 : 1 : xe.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(kt, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: Ue,
                    onChange: (n) => Jo(n.target.value),
                    placeholder: ve === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: ve === "mywork" ? nt.length === 0 : xe.length === 0
                  }
                ),
                Ue && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Jo(""),
                    className: "opacity-60 hover:opacity-100 px-1",
                    title: "Clear search",
                    children: /* @__PURE__ */ t(ke, { size: 11 })
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
              children: ve === "mywork" ? [
                { id: "all", label: "All" },
                { id: "songs", label: "Songs" },
                { id: "restyles", label: "Restyles" },
                { id: "lyrics", label: "Lyrics" }
              ].map((n) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Zi(n.id),
                  className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                  style: {
                    height: 22,
                    fontSize: 10,
                    fontWeight: Ve === n.id ? 800 : 600,
                    color: Ve === n.id ? "white" : "var(--text-secondary)",
                    background: Ve === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: n.label
                },
                n.id
              )) : It ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ s("span", { style: { fontSize: 10, fontWeight: 800, color: "var(--text-primary)", flexShrink: 0 }, children: [
                  ft.size,
                  " selected"
                ] }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Ka(new Set(ea.map((n) => n.id))),
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
                    onClick: Ca,
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
                    onClick: () => Yo(n.id),
                    className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: yt === n.id ? 800 : 600,
                      color: yt === n.id ? "white" : "var(--text-secondary)",
                      background: yt === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: n.label
                  },
                  n.id
                )),
                xe.length > 0 && /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => Pr(!0),
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
                      /* @__PURE__ */ t(bi, { size: 11 }),
                      " Select"
                    ]
                  }
                )
              ] })
            }
          ),
          ve === "mywork" ? nt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t($t, { size: 18, style: { color: "var(--text-disabled)" } })
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
                  /* @__PURE__ */ t(dt, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(ct, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : Ct.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(kt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ue ? a("musiccreator.gallery.searchEmpty", { q: Ue }) : `No ${Ve} yet.` })
          ] }) : /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: [
            Ya.length > 0 && Ve === "all" && !Ue.trim() && /* @__PURE__ */ t(
              pp,
              {
                trackIds: Ya,
                allTracks: nt,
                player: $,
                onSelect: Qr
              }
            ),
            fa === "list" ? /* @__PURE__ */ t(
              cp,
              {
                tracks: Ct,
                player: $,
                onLoad: Zt,
                onOpenLyrics: _n,
                onDelete: fn,
                onRename: nr
              }
            ) : Ct.map((n) => /* @__PURE__ */ t(
              up,
              {
                track: n,
                onDelete: fn,
                onLoad: Zt,
                onOpenLyrics: _n,
                onSaveSongToDesktop: Bs,
                onSaveLyricsToDesktop: Ws,
                onPlayInPlayer: qs,
                onRename: nr,
                onEditCover: Sn,
                onSelect: Qr,
                selected: f === "player" && w === n.id,
                player: $
              },
              n.id
            ))
          ] }) : (
            /* Library tab — flat slim list of saved streamed tracks. The
               rich Artists/Albums/Playlists views still live in the main
               Music pane (reachable via the search button in the header
               above) since they need more horizontal room than 260px. */
            xe.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(
                "div",
                {
                  className: "flex items-center justify-center rounded-2xl mb-2",
                  style: { width: 44, height: 44, background: "var(--bg-hover)" },
                  children: /* @__PURE__ */ t(vr, { size: 18, style: { color: "var(--text-disabled)" } })
                }
              ),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: "Your saved music lives here" }),
              /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: "Click the magnifier above to search, then add tracks you want to keep." }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Oe(!0), ba("search");
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
                    /* @__PURE__ */ t(kt, { size: 11 }),
                    " Search music"
                  ]
                }
              )
            ] }) : ea.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(kt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ue ? `No matches for "${Ue}"` : `No ${yt} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: ea.map((n) => /* @__PURE__ */ t(
              mp,
              {
                track: n,
                player: $,
                selected: f === "player" && w === n.id,
                isFavorite: Kt.has(n.id),
                onOpenInPlayer: Qr,
                onRemix: ul,
                onToggleFavorite: Kr,
                onRemove: Xr,
                selectMode: It,
                checked: ft.has(n.id),
                onToggleCheck: dl
              },
              n.id
            )) })
          ),
          ve === "library" && It && ft.size > 0 && /* @__PURE__ */ s(
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
                      const n = ea.filter((c) => ft.has(c.id));
                      for (const c of n) Kr(c);
                      Ca();
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
                    title: `Toggle favorite on ${ft.size} track(s)`,
                    children: [
                      /* @__PURE__ */ t(vr, { size: 11 }),
                      " Toggle favorite"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => {
                      const n = ea.filter((c) => ft.has(c.id));
                      for (const c of n) Xr(c);
                      Ca();
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
                    title: `Remove ${ft.size} track(s) from Library`,
                    children: [
                      /* @__PURE__ */ t(Ht, { size: 11 }),
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
              /* @__PURE__ */ t(Co, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
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
                  { id: "player", icon: /* @__PURE__ */ t(_e, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
                ].map((n) => /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => v(n.id),
                    title: n.tip,
                    className: "flex items-center gap-1.5 px-3 rounded-md transition-all",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: f === n.id ? 600 : 500,
                      color: f === n.id ? "white" : "var(--text-secondary)",
                      background: f === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
              f === "player" && /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Oe((n) => !n), ba("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: bt ? "white" : "var(--text-secondary)",
                    background: bt ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(kt, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(lp, { endpoint: Q, endpoints: ar, onSwitch: Ss }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: f === "player" ? $s : Vr,
                  disabled: K,
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
                    /* @__PURE__ */ t(_o, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => er(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(fi, { size: 14 })
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => p(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a("julietaHelp.title"),
                  children: /* @__PURE__ */ t(Ml, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      f === "player" && (bt ? /* @__PURE__ */ t(
        Cp,
        {
          tab: ts,
          onTabChange: ba,
          query: Ur,
          onQueryChange: as,
          searchHistory: rs,
          onClearSearchHistory: () => {
            Ko([]);
            try {
              localStorage.removeItem("juli3ta:searchHistory");
            } catch {
            }
          },
          resultType: va,
          onResultTypeChange: os,
          results: ns,
          busy: is,
          error: ss,
          status: ls,
          providers: cs,
          connectors: ds,
          libraryTracks: xe,
          playlists: wa,
          playlistNameDraft: Fr,
          playlistBusy: ys,
          favoriteIds: Kt,
          warmupIds: ps,
          previewBusyId: ms,
          addBusyId: hs,
          savedYoutubeIds: el,
          player: $,
          onWarmResult: nl,
          onPreview: ol,
          onAdd: il,
          onOpenTrack: (n) => {
            C(n.id), Oe(!1), v("player");
          },
          onToggleFavorite: Kr,
          onRemoveLibraryTrack: Xr,
          onPlaylistNameDraftChange: ln,
          onCreatePlaylist: sl,
          onAddTrackToPlaylist: ll,
          onRemoveTrackFromPlaylist: cl,
          onPlayPlaylist: al,
          onDeletePlaylist: rl,
          onConfigureConnector: Qs,
          onDisconnectConnector: Zs,
          onClose: () => Oe(!1)
        }
      ) : /* @__PURE__ */ t(
        Np,
        {
          track: (() => {
            const n = w ?? $.state.trackId ?? Ct[0]?.id ?? xe[0]?.id ?? null;
            return n ? $e.find((c) => c.id === n) ?? null : null;
          })(),
          player: $,
          restyleOriginal: Yi,
          onSwitchToCreator: () => v("creator"),
          onSearchMusic: () => {
            v("player"), Oe(!0), ba("search");
          },
          onEditInCreator: (n) => {
            Zt(n), v("creator");
          }
        }
      )),
      f === "creator" && /* @__PURE__ */ s(ge, { children: [
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
                { id: "compose", icon: /* @__PURE__ */ t(Ba, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(Ft, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t(xr, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((n) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => h(n.id),
                  disabled: K,
                  title: n.tip,
                  className: "flex items-center gap-1.5 px-4 rounded-lg transition-all disabled:opacity-50",
                  style: {
                    height: 32,
                    fontSize: 12,
                    fontWeight: m === n.id ? 600 : 500,
                    color: m === n.id ? "white" : "var(--text-secondary)",
                    background: m === n.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                    border: m === n.id ? "1px solid transparent" : "1px solid var(--border-subtle)"
                  },
                  children: [
                    n.icon,
                    n.label
                  ]
                },
                n.id
              )),
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: K ? /* @__PURE__ */ s(
                "button",
                {
                  onClick: Rs,
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
                const n = m === "restyle" && (se || !Ne);
                return /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: Ts,
                    disabled: n || lr,
                    className: "flex items-center gap-1.5 px-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    style: {
                      height: 32,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "white",
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      boxShadow: "var(--shadow-md)"
                    },
                    title: lr ? "An AI helper is still working — wait for it to finish before generating." : n ? se ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      n && se || lr ? /* @__PURE__ */ t(re, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Ft, { size: 13 }),
                      lr ? "Waiting for AI…" : m === "restyle" ? se ? "Analyzing audio…" : "Restyle Song" : m === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
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
                  onChange: (n) => I(n.target.value),
                  onDragOver: sr,
                  onDrop: Ys,
                  placeholder: a("musiccreator.songName.placeholder"),
                  disabled: K,
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
                      ti,
                      {
                        id: "juli3ta-instrumental",
                        checked: J,
                        onChange: Z,
                        disabled: K
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (K || se || ya || Yt) && /* @__PURE__ */ s(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: ya ? "rgba(255, 82, 82, 0.06)" : Yt ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              (K || se) && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${(K ? Qi : qt?.progress ?? 0.08) * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: ya ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(Ua, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: ya, children: ya }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => V(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(ke, { size: 11 })
                  }
                )
              ] }) : K ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(re, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: Gt === "lyrics" ? Zn[Wo % Zn.length] : ei[Wo % ei.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: Gt === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : se ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(re, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, title: qt?.message ?? "", children: qt?.message ?? "Preparing reference audio…" }),
                /* @__PURE__ */ s("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: [
                  "Reference · ",
                  Math.round((qt?.progress ?? 0.08) * 100),
                  "%"
                ] })
              ] }) : /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(Ua, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: Yt ?? "", children: Yt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => le(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: "Dismiss",
                    children: /* @__PURE__ */ t(ke, { size: 11 })
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
              onDragOver: (n) => {
                n.dataTransfer.types.includes(Da) && (n.preventDefault(), n.dataTransfer.dropEffect = "copy");
              },
              onDrop: (n) => {
                const c = xt(n);
                c && c.hasAudio && (n.preventDefault(), (async () => {
                  const u = await Vc(c.id);
                  if (!u?.audioDataUrl) {
                    V("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  _t(u.audioDataUrl, `${c.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                at ? /* @__PURE__ */ s(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${se ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                        se ? /* @__PURE__ */ t(re, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t($t, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: at }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: Is,
                            disabled: K || se,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t(Ht, { size: 14 })
                          }
                        )
                      ] }),
                      (se || G) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: se ? `🔍  ${qt?.message ?? "Preparing cover reference from the song…"}` : `✨  ${G}` }),
                      se && /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-full", style: { height: 3, background: "var(--bg-hover)", marginTop: 7 }, children: /* @__PURE__ */ t(
                        "div",
                        {
                          style: {
                            width: `${(qt?.progress ?? 0.08) * 100}%`,
                            height: "100%",
                            background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                            transition: "width 0.25s ease"
                          }
                        }
                      ) }),
                      Ne && !se && /* @__PURE__ */ t(
                        Ji,
                        {
                          base64: Ne,
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
                      onClick: () => Ga(!0),
                      disabled: K,
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
                      onClick: _s,
                      disabled: K,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t($t, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: Ls,
                      disabled: K || zt.filter((n) => n.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(Ot, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: zt.filter((n) => n.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: Ms,
                      disabled: K,
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
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: Mr.length }) })
                      ]
                    }
                  )
                ] }),
                !at && /* @__PURE__ */ s("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Uo("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: rt === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${rt === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: rt === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(dt, { size: 13, style: { color: rt === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
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
                        onClick: () => Uo("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: rt === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${rt === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: rt === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(yo, { size: 13, style: { color: rt === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 compact parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                Xi && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !ot && Ga(!1),
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
                                  onClick: () => !ot && Oo("mic"),
                                  disabled: ot,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: gt === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${gt === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
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
                                  onClick: () => !ot && Oo("tab"),
                                  disabled: ot,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: gt === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${gt === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Mn, { size: 14 }),
                                    /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            gt === "tab" && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
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
                                  Math.floor($o / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor($o / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            ot ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: Cs,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(vi, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: Ns,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: gt === "tab" ? /* @__PURE__ */ t(Mn, { size: 28 }) : /* @__PURE__ */ t(ct, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: ot ? gt === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            Fo && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: Fo })
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
                                    onClick: () => !ot && Ga(!1),
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
                    ref: Po,
                    type: "file",
                    accept: "audio/*",
                    onChange: Es,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick a cover-ready ~60 s sample" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed and downsampled before Restyle so the request stays small."
                ] }),
                Gi && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => ma(!1),
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
                                    onClick: () => ma(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    children: [
                                      /* @__PURE__ */ t(Ht, { size: 14, style: { visibility: "hidden" } }),
                                      /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600 }, children: "×" })
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: Mr.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(ct, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : Mr.map((n) => {
                            const c = n.durationMs / 1e3, u = c > 0 && c < wt;
                            return /* @__PURE__ */ s(
                              "button",
                              {
                                onClick: () => !u && As(n),
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
                                n.preventDefault(), ma(!1);
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
                Vi && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => Ja(!1),
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
                                  /* @__PURE__ */ t(Ot, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => Ja(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    title: "Close",
                                    children: /* @__PURE__ */ t(ke, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const n = zt.filter((c) => c.audioDataUrl);
                            return n.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(Ot, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : n.map((c) => {
                              const u = c.durationMs / 1e3, x = u > 0 && u < wt, E = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !x && zs(c),
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
                                        children: !c.coverDataUrl && /* @__PURE__ */ t(Ot, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: E }),
                                      /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        u > 0 ? `${Math.floor(u / 60)}:${Math.floor(u % 60).toString().padStart(2, "0")}` : "—",
                                        c.styleTags && c.styleTags !== "—" && ` · ${c.styleTags}`,
                                        x && " · too short for Restyle (need ≥30 s)"
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
                  za,
                  {
                    label: a("musiccreator.theme.label"),
                    hint: a("musiccreator.theme.hint"),
                    headerExtra: /* @__PURE__ */ t(
                      po,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: js,
                        busy: Ke.theme,
                        disabled: K || Ke.theme
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: T,
                        onChange: (n) => A(n.target.value),
                        onDragOver: sr,
                        onDrop: Vs,
                        placeholder: a("musiccreator.theme.placeholder"),
                        disabled: K,
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
                  za,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${Ks} / ${Iu}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      po,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: Ds,
                        busy: Ke.style,
                        disabled: K || Ke.style
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: k,
                        onChange: (n) => M(n.target.value),
                        onDragOver: sr,
                        onDrop: Gs,
                        placeholder: a("musiccreator.style.placeholder"),
                        disabled: K,
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
            /* @__PURE__ */ t(ap, { onPick: Os, disabled: K }),
            /* @__PURE__ */ t(
              rp,
              {
                specs: de,
                onChange: Te,
                disabled: K,
                onOptimize: Ps,
                optimizing: mt
              }
            )
          ] }),
          /* @__PURE__ */ s(
            za,
            {
              label: "Cover Art",
              hint: Q?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ s("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  ti,
                  {
                    checked: Le,
                    onChange: Ar,
                    disabled: K || !Q?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      onClick: () => Tn(!0),
                      disabled: K,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: be ? `url(${be}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: K ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !be && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Oa, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        We && /* @__PURE__ */ t(
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
                          onClick: gn,
                          disabled: K || We || !Q?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: K || We || !Q?.models.image ? "not-allowed" : "pointer"
                          },
                          title: Q?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            We ? /* @__PURE__ */ t(re, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(dt, { size: 11 }),
                            be ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => jo.current?.click(),
                          disabled: K,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-secondary)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Upload your own image (PNG/JPG/WebP, max 4 MB)",
                          children: [
                            /* @__PURE__ */ t(No, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      be && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            F(""), Ee && Ta.current?.(Ee, "");
                          },
                          disabled: K,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-disabled)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Remove the cover and fall back to the gradient placeholder",
                          children: [
                            /* @__PURE__ */ t(ke, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => Do((n) => !n),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            zr ? /* @__PURE__ */ t(Cl, { size: 11 }) : /* @__PURE__ */ t(gi, { size: 11 }),
                            zr ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    zr && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: O,
                        onChange: (n) => ee(n.target.value),
                        placeholder: br(L, T, k),
                        disabled: K,
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
                    ref: jo,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (n) => {
                      const c = n.target.files?.[0];
                      c && yn(c), n.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          m !== "restyle" && !J && /* @__PURE__ */ t(
            za,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (de.intent ?? "").length > 0 ? `${(de.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: de.intent ?? "",
                  onChange: (n) => Te((c) => ({ ...c, intent: n.target.value })),
                  placeholder: 'e.g. "first-person, mostly Spanish with one English chorus, mention rain, no clichés"',
                  disabled: K,
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
            za,
            {
              label: a("musiccreator.lyrics.label"),
              counter: J ? "instrumental — no vocals" : `${Nn} / ${ra}`,
              counterDanger: !J && Nn > ra,
              className: "mb-5",
              headerExtra: J ? void 0 : /* @__PURE__ */ t(
                po,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: Us,
                  busy: Ke.lyrics,
                  disabled: K || Ke.lyrics || !_.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: _,
                    onChange: (n) => N(n.target.value),
                    onDragOver: sr,
                    onDrop: Js,
                    placeholder: J ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: K || J,
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
                  zu.map((n) => {
                    const c = W?.id === n.id;
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => {
                          c ? P(null) : (P(n), _.trim() || N(n.skeleton));
                        },
                        disabled: K,
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
                  W && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(Ku, { player: $, allTracks: $e }),
      /* @__PURE__ */ t("audio", { ref: Cn, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      Lc,
      {
        open: b,
        onClose: () => p(!1),
        onUseRecipe: (n, c) => {
          h("compose"), A(n), M(c);
        }
      }
    ),
    /* @__PURE__ */ t(ep, { open: jr, onClose: () => Dr(!1) }),
    fs && /* @__PURE__ */ t(
      Mp,
      {
        settings: qr,
        endpoints: ar,
        onChange: bs,
        onClose: () => er(!1)
      }
    ),
    kn && /* @__PURE__ */ t(
      hp,
      {
        track: kn,
        endpoint: Q,
        onSave: Yr,
        onClose: () => Sn(null)
      }
    ),
    Fs && /* @__PURE__ */ t(
      gp,
      {
        songName: L,
        mode: m,
        theme: T,
        style: k,
        intent: de.intent ?? "",
        lyrics: _,
        specs: de,
        coverDataUrl: be,
        endpoint: Q,
        busy: We,
        onRegenerate: gn,
        onUpload: yn,
        onClear: () => {
          F(""), Ee && Ta.current?.(Ee, "");
        },
        onClose: () => Tn(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(tp, { retrying: ks, onRetry: Gr });
}
function Mp({ settings: e, endpoints: a, onChange: r, onClose: o }) {
  const i = (l, d, g) => {
    const m = g.trim(), b = { ...e.overridesByEndpoint[l] ?? {} };
    m ? b[d] = m : delete b[d];
    const p = {
      ...e,
      overridesByEndpoint: {
        ...e.overridesByEndpoint,
        [l]: b
      }
    };
    r(p);
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
                  /* @__PURE__ */ t(fi, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                      title: `JULI3TA v${ko}`,
                      children: [
                        "v",
                        ko
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
                      children: /* @__PURE__ */ t(ke, { size: 14 })
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
                    /* @__PURE__ */ t(Ua, { size: 14, style: { color: "#fbbf24" } }),
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
                ], m = (p) => /music|cover/i.test(p), h = (p) => /image|diffusion|dall-?e|flux|sdxl/i.test(p), b = (p) => p === "chat" ? l.models.allIds.filter((f) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(f)) : p === "image" ? l.models.allIds.filter(h) : l.models.allIds.filter(m);
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
                              background: _r(l),
                              boxShadow: `0 0 6px ${_r(l)}`
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
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: g.map((p) => {
                        const f = b(p.kind), v = d[p.key] ?? "";
                        return /* @__PURE__ */ s(pl, { children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "flex items-center",
                              style: { fontSize: 11, color: "var(--text-secondary)" },
                              children: p.label
                            }
                          ),
                          /* @__PURE__ */ s(
                            "select",
                            {
                              value: v,
                              onChange: (w) => i(l.url, p.key, w.target.value),
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
                                /* @__PURE__ */ t("option", { value: "", children: p.discovered ? `Auto · ${p.discovered}` : p.kind === "lyrics" ? "Auto · server-side (no model param)" : f.length === 0 ? "(no models match)" : "Auto · (no preferred match — pick one)" }),
                                f.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: f.map((w) => /* @__PURE__ */ t("option", { value: w, children: w }, w)) })
                              ]
                            }
                          )
                        ] }, p.key);
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
function Pp(e) {
  const a = e.host.storage.current();
  return Jc(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(ml, { value: e, children: /* @__PURE__ */ t(Ap, {}) });
  };
}
export {
  Pp as default
};
//# sourceMappingURL=index.js.map
