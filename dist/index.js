import { jsx as t, jsxs as s, Fragment as fe } from "react/jsx-runtime";
import { createContext as qi, useContext as Ji, forwardRef as Gi, createElement as ro, useState as k, useEffect as F, useMemo as me, useRef as ee, useCallback as E, Fragment as Qs } from "react";
import { createPortal as Ma } from "react-dom";
const Vi = qi(null), Zs = Vi.Provider;
function ia() {
  const e = Ji(Vi);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), tl = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), gi = (e) => {
  const a = tl(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, Ki = (...e) => e.filter((a, r, o) => !!a && a.trim() !== "" && o.indexOf(a) === r).join(" ").trim(), al = (e) => {
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
var rl = {
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
const ol = Gi(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: n = "",
    children: l,
    iconNode: d,
    ...y
  }, m) => ro(
    "svg",
    {
      ref: m,
      ...rl,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(a) : r,
      className: Ki("lucide", n),
      ...!l && !al(y) && { "aria-hidden": "true" },
      ...y
    },
    [
      ...d.map(([h, w]) => ro(h, w)),
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
  const r = Gi(
    ({ className: o, ...n }, l) => ro(ol, {
      ref: l,
      iconNode: a,
      className: Ki(
        `lucide-${el(gi(e))}`,
        `lucide-${e}`,
        o
      ),
      ...n
    })
  );
  return r.displayName = gi(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], nl = H("album", il);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ta = H("check", sl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Yi = H("chevron-down", ll);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], yi = H("chevron-left", cl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ul = H("chevron-right", dl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ml = H("chevron-up", pl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], za = H("circle-alert", hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], yl = H("circle-question-mark", gl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fl = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Xi = H("copy", fl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], Mt = H("disc-3", bl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vl = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Qi = H("download", vl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], mo = H("ellipsis-vertical", xl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], Zi = H("external-link", wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = [
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
], Rt = H("file-music", kl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], Tl = H("folder-open", Sl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], cr = H("heart", _l);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Ia = H("image", Nl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = [
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
], oo = H("layers", Cl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], El = H("list-music", Al);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ll = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], oe = H("loader-circle", Ll);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], at = H("mic", zl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], fi = H("monitor-speaker", Il);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], bi = H("monitor", Ml);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], jl = H("moon", Rl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], Ra = H("music-2", Pl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], dr = H("notebook-text", Dl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], kt = H("pause", Ul);
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], en = H("pencil", Ol);
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
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], xe = H("play", Hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], io = H("plus", $l);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Bl = H("radio", Fl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], ql = H("refresh-cw", Wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], tn = H("repeat-1", Jl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], Vl = H("repeat", Gl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], gt = H("search", Kl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], an = H("settings-2", Yl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xl = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], ho = H("shuffle", Xl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = [
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
], rt = H("sparkles", Ql);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], rn = H("square-check-big", Zl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], on = H("square", ec);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], jt = H("trash-2", tc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], go = H("upload", ac);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], oc = H("user-round", rc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], nc = H("volume-2", ic);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], lc = H("volume-x", sc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = [
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
], Pt = H("wand-sparkles", cc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], be = H("x", dc), uc = {
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
}, pc = {
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
}, vi = { en: uc, es: pc }, er = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", mc = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, o) => String(a[o] ?? `{${o}}`)) : e;
function Dt() {
  const { host: e } = ia(), [a, r] = k(() => er(e.i18n?.locale));
  F(() => e.i18n?.onLocaleChange?.((n) => r(er(n))), [e]);
  const o = me(() => (n, l) => {
    const d = e.i18n?.t?.(n, l);
    if (d && d !== n) return d;
    const y = er(a), m = vi[y]?.[n] ?? vi.en[n] ?? n;
    return mc(m, l);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (n) => r(er(n)),
    installLanguagePack: (n) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (n) => {
    }
  };
}
const hc = [
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
], gc = [
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
function yc({ recipe: e, onUse: a }) {
  const { t: r } = Dt(), [o, n] = k(!1), l = async () => {
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
                /* @__PURE__ */ t(Pt, { size: 12 }),
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
              children: o ? /* @__PURE__ */ t(ta, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(Xi, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function fc({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: o, language: n } = Dt(), [l, d] = k("start");
  if (!e) return null;
  const y = n === "es" ? gc : hc;
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
                        children: /* @__PURE__ */ t(Mt, { size: 18, style: { color: "white" } })
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
                      children: /* @__PURE__ */ t(be, { size: 16 })
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
                /* @__PURE__ */ t(Xt, { icon: /* @__PURE__ */ t(rt, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(tr, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(tr, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(tr, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(tr, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(Xt, { icon: /* @__PURE__ */ t(Pt, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(Br, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(Br, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(Br, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(Xt, { icon: /* @__PURE__ */ t(at, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(bc, { body: o("julietaHelp.start.recorder.body") }),
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
                y.map((m) => /* @__PURE__ */ t(
                  yc,
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
                /* @__PURE__ */ t(Xt, { icon: /* @__PURE__ */ t(za, { size: 14 }), text: o("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.failed.title"), a: o("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.nopod.title"), a: o("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.local.title"), a: o("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t(Xt, { icon: /* @__PURE__ */ t(Pt, { size: 14 }), text: o("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.howlong.title"), a: o("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.quota.title"), a: o("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.length.title"), a: o("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.coverlen.title"), a: o("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t(Xt, { icon: /* @__PURE__ */ t(at, { size: 14 }), text: o("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.silentmic.title"), a: o("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.shortrec.title"), a: o("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t(et, { q: o("julietaHelp.help.q.privacy.title"), a: o("julietaHelp.help.q.privacy.body") })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function Xt({ icon: e, text: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: a })
  ] });
}
function tr({ n: e, title: a, body: r }) {
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
function Br({ emoji: e, name: a, body: r }) {
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
function bc({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function et({ q: e, a }) {
  const [r, o] = k(!1);
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
                ul,
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
const Wr = (e) => {
  const a = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(a.agents) ? a.agents : [],
    included: Array.isArray(a.included) ? a.included : [],
    tiers: [],
    ...a
  };
}, vc = () => {
  const { host: e } = ia(), [a, r] = k(0), [o, n] = k(() => Wr(e.daemon?.state));
  return F(() => (n(Wr(e.daemon?.state)), e.daemon?.onStateChange?.((l) => n(Wr(l)))), [e, a]), me(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((l) => l + 1)
  }), [o]);
}, xc = (e, a) => {
  const { host: r } = ia();
  F(() => {
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
function wc() {
  return ia().host.windows.current;
}
const nn = "juli3ta_standalone_vfs_v1", sn = () => Math.random().toString(36).slice(2) + Date.now().toString(36), zt = (e, a) => ({
  id: sn(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), kc = () => {
  const e = zt("/", null), a = zt("home", e.id), r = zt("user", a.id), o = zt("Desktop", r.id), n = zt("Music", r.id), l = zt("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, o, n, l].map((d) => [d.id, d])) };
}, ar = () => {
  try {
    const a = localStorage.getItem(nn);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = kc();
  return nr(e), e;
}, nr = (e) => {
  try {
    localStorage.setItem(nn, JSON.stringify(e));
  } catch {
  }
}, Sc = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), Tc = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function _c() {
  return {
    ensureUserFolder(a) {
      const r = ar(), o = Sc(a);
      let n = Object.values(r.nodes).find((l) => l.type === "folder" && l.name === o);
      if (!n) {
        const l = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        n = zt(o, l?.id ?? null), r.nodes[n.id] = n, nr(r);
      }
      return n.id;
    },
    findChildByName(a, r) {
      const o = ar();
      return Object.values(o.nodes).find((n) => n.parentId === a && n.name === r);
    },
    createFile(a, r, o = "", n = {}) {
      const l = ar(), d = { id: sn(), name: r, type: "file", parentId: a, content: o, mimeType: n.mimeType, refTrackId: n.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return l.nodes[d.id] = d, nr(l), d.id;
    },
    writeFile(a, r) {
      const o = ar();
      o.nodes[a] && (o.nodes[a].content = r, o.nodes[a].modifiedAt = Date.now(), nr(o));
    }
  };
}
const Nc = { theme: { mode: "dark" } }, Cc = qi(null);
function ln() {
  const e = Ji(Cc), { host: a } = ia();
  return me(() => e || {
    state: Nc,
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
function Ac() {
  const { host: e } = ia();
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
const Ec = {
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
}, Lc = {
  juli3ta: Ec
};
function yo({ name: e, size: a = 24, className: r, style: o, alt: n, scale: l }) {
  const [d, y = "mark"] = e.split(":"), m = Lc[d], { state: h } = ln();
  let w;
  if (y === "mark" ? w = h.theme.mode === "light" ? m?.["mark-ink"] : m?.["mark-white"] : w = m?.[y], !w) return null;
  const p = n ?? d.charAt(0).toUpperCase() + d.slice(1), b = l ?? w.scale ?? 1;
  return /* @__PURE__ */ t(
    "img",
    {
      src: w.src,
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
        ...b !== 1 ? { transform: `scale(${b})`, transformOrigin: "center" } : null,
        ...w.filter ? { filter: w.filter } : null,
        ...o
      },
      className: r,
      draggable: !1
    }
  );
}
let cn = null, xi = null;
const qr = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), zc = [
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
function Ic(e) {
  xi = (async () => {
    for (const r of zc) await e.run(r);
  })();
  const a = async () => xi;
  cn = {
    exec: async (r) => {
      await a();
      for (const o of qr(r).split(";").map((n) => n.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (r, o = []) => (await a(), e.query(qr(r), o)),
    run: async (r, o = []) => {
      await a(), await e.run(qr(r), o);
    },
    tx: async (r) => (await a(), r())
  };
}
const re = () => cn, ur = (e) => ({
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
}), G = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), fo = (e) => G(e, "specs_json") || G(e, "cover_data_url") || G(e, "theme") || G(e, "source") || G(e, "audio_kind") || G(e, "external_id") || G(e, "external_url") || G(e, "thumbnail_url") || G(e, "artist") || G(e, "album"), wi = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, ki = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, Jr = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, Et = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), dn = async (e, a, r, o) => {
  if (G(o, "source") || G(o, "audio_kind") || G(o, "external_id") || G(o, "external_url") || G(o, "thumbnail_url") || G(o, "artist") || G(o, "album"))
    try {
      return (await e.query(
        `SELECT ${wi}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(Et);
    } catch (n) {
      o = n;
    }
  if (G(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${wi} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => Et({ ...l, theme: "" }));
    } catch (n) {
      if (!G(n, "cover_data_url")) throw n;
      try {
        return (await e.query(
          `SELECT ${ki} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => Et({ ...d, cover_data_url: "", theme: "" }));
      } catch (l) {
        if (!G(l, "specs_json")) throw l;
        return (await e.query(
          `SELECT ${Jr} FROM music_creator_tracks ${a}`,
          r
        )).map((y) => Et({ ...y, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (G(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${ki} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => Et({ ...l, cover_data_url: "", theme: "" }));
    } catch (n) {
      if (!G(n, "specs_json")) throw n;
      return (await e.query(
        `SELECT ${Jr} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => Et({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (G(o, "specs_json"))
    return (await e.query(
      `SELECT ${Jr} FROM music_creator_tracks ${a}`,
      r
    )).map((l) => Et({ ...l, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, un = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, Mc = async () => {
  const e = re();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${un} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(ur);
  } catch (a) {
    if (!fo(a)) throw a;
    return (await dn(e, "ORDER BY created_at DESC", [], a)).map(ur);
  }
}, Rc = async (e) => {
  const a = re();
  if (!a) return null;
  try {
    const r = await a.query(
      `SELECT ${un} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return r.length === 0 ? null : ur(r[0]);
  } catch (r) {
    if (!fo(r)) throw r;
    const o = await dn(a, "WHERE id = ? LIMIT 1", [e], r);
    return o.length === 0 ? null : ur(o[0]);
  }
}, pr = async (e) => {
  const a = re();
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
    if (!fo(o)) throw o;
    if (G(o, "source") || G(o, "audio_kind") || G(o, "external_id") || G(o, "external_url") || G(o, "thumbnail_url") || G(o, "artist") || G(o, "album"))
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
    if (G(o, "theme"))
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
        if (!G(n, "cover_data_url")) throw n;
      }
    if (G(o, "cover_data_url"))
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
        if (!G(n, "specs_json")) throw n;
      }
    await a.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      r
    );
  }
}, jc = async (e) => {
  const a = re();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Pc = async (e, a) => {
  const r = re();
  if (!r) throw new Error("Database not ready");
  const o = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, Dc = async (e, a) => {
  const r = re();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, Uc = async (e, a) => {
  const r = re();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, Oc = async (e, a) => {
  const r = re();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, Hc = async (e, a) => {
  const r = re();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, $c = async (e, a) => {
  const r = re();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, Fc = async (e, a) => {
  const r = re();
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
}, Bc = async (e, a) => {
  const r = re();
  r && await r.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(a)]
  );
}, pn = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, mn = "music_creator_settings", Wc = () => Fc(mn, pn), qc = (e) => Bc(mn, e), it = () => Date.now(), hn = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: e.provider === "youtube" ? "YouTube" : e.provider,
  lyricsPreview: "",
  durationMs: e.duration_ms ?? 0,
  bitrate: 0,
  sampleRate: 0,
  sizeBytes: 0,
  createdAt: e.added_at ?? it(),
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
}), no = (e) => ({
  id: e.id,
  provider: e.source || "youtube",
  external_id: e.externalId || e.id.replace(/^.+?:/, ""),
  title: e.title || "Untitled",
  artist: e.artist || "",
  album: e.album || "",
  duration_ms: e.durationMs || 0,
  thumbnail_url: e.thumbnailUrl || "",
  external_url: e.externalUrl || "",
  added_at: e.createdAt || it(),
  last_played_at: 0
}), gn = [
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
], Jc = gn.join(", "), Gc = gn.map((e) => `t.${e}`).join(", "), Vc = async () => {
  const e = re();
  return e ? (await e.query(
    `SELECT ${Jc} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(hn) : [];
}, yn = async (e) => {
  const a = re();
  if (!a) throw new Error("Database not ready");
  const r = no(e);
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
}, Kc = async (e) => {
  const a = re();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, Yc = async () => {
  const e = re();
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
}, Xc = async (e) => {
  const a = re();
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
}, Qc = async (e) => {
  const a = re();
  if (!a) throw new Error("Database not ready");
  const r = await a.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(r[0]?.n ?? 0) > 0 ? (await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await a.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", it()]
  ), !0);
}, ka = async () => {
  const e = re();
  if (!e) return [];
  const a = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), r = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${Gc}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return r.forEach((n) => {
    o.set(n.playlist_id, [...o.get(n.playlist_id) ?? [], hn(n)]);
  }), a.map((n) => ({
    id: n.id,
    name: n.name,
    createdAt: n.created_at,
    updatedAt: n.updated_at,
    items: o.get(n.id) ?? []
  }));
}, Zc = async (e) => {
  const a = re();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", o = it(), n = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: o, updatedAt: o, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [n.id, n.name, n.createdAt, n.updatedAt]
  ), n;
}, ed = async (e) => {
  const a = re();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, td = async (e, a) => {
  const r = re();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await yn(a);
    const o = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), n = Number(o[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, n, it()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [it(), e]);
  });
}, ad = async (e, a) => {
  const r = re();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [it(), e]));
}, rd = async (e) => {
  const a = re();
  a && await a.tx(async () => {
    for (const r of e.tracks) {
      const o = no(r);
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
        [r.kind, r.entityId, r.provider, r.title ?? "", r.createdAt ?? it()]
      ), await a.run(
        "UPDATE music_favorites SET provider = ?, title = ? WHERE kind = ? AND entity_id = ?",
        [r.provider, r.title ?? "", r.kind, r.entityId]
      );
    for (const r of e.playlists) {
      const o = r.createdAt || it(), n = r.updatedAt || o;
      await a.run(
        "INSERT OR IGNORE INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
        [r.id, r.name || "Playlist", o, n]
      ), await a.run(
        "UPDATE music_playlists SET name = ?, updated_at = ? WHERE id = ?",
        [r.name || "Playlist", n, r.id]
      ), await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [r.id]);
      let l = 0;
      for (const d of r.items) {
        const y = no(d);
        await a.run(
          `INSERT OR IGNORE INTO music_library_tracks
             (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
          [y.id, y.provider, y.external_id, y.title, y.artist, y.album, y.duration_ms, y.thumbnail_url, y.external_url, y.added_at]
        ), await a.run(
          `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
           VALUES (?, ?, ?, ?)`,
          [r.id, d.id, l++, it()]
        );
      }
    }
  });
}, fn = "/api/juli3ta/music-state", bn = "juli3ta:musicLibrarySnapshot:v1", We = () => Date.now(), od = () => ({
  version: 1,
  updatedAt: 0,
  tracks: [],
  favorites: [],
  playlists: []
}), bo = (e) => !!e && typeof e == "object" && !Array.isArray(e), vo = (e) => {
  if (!bo(e)) return null;
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
    createdAt: Number(e.createdAt ?? We()) || We(),
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
}, id = (e) => {
  if (!bo(e)) return null;
  const a = e.kind;
  if (a !== "track" && a !== "artist" && a !== "album" && a !== "playlist") return null;
  const r = String(e.entityId ?? "").trim();
  return r ? {
    kind: a,
    entityId: r,
    provider: String(e.provider ?? ""),
    title: String(e.title ?? ""),
    createdAt: Number(e.createdAt ?? We()) || We()
  } : null;
}, vn = (e) => {
  if (!bo(e)) return null;
  const a = String(e.id ?? "").trim();
  return a ? {
    id: a,
    name: String(e.name ?? "Playlist"),
    createdAt: Number(e.createdAt ?? We()) || We(),
    updatedAt: Number(e.updatedAt ?? e.createdAt ?? We()) || We(),
    items: Array.isArray(e.items) ? e.items.map(vo).filter((r) => !!r) : []
  } : null;
}, aa = (e) => e ? {
  version: 1,
  updatedAt: Number(e.updatedAt ?? 0) || 0,
  tracks: Array.isArray(e.tracks) ? e.tracks.map(vo).filter((a) => !!a) : [],
  favorites: Array.isArray(e.favorites) ? e.favorites.map(id).filter((a) => !!a) : [],
  playlists: Array.isArray(e.playlists) ? e.playlists.map(vn).filter((a) => !!a) : []
} : od(), Si = (e, a) => {
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
}, nd = (e, a) => {
  const r = /* @__PURE__ */ new Map();
  for (const o of [...e, ...a]) {
    const n = `${o.kind}:${o.entityId}`, l = r.get(n);
    (!l || (o.createdAt ?? 0) >= (l.createdAt ?? 0)) && r.set(n, o);
  }
  return [...r.values()].sort((o, n) => (n.createdAt ?? 0) - (o.createdAt ?? 0));
}, Ti = (e, a) => {
  const r = aa(e), o = aa(a);
  return {
    version: 1,
    updatedAt: Math.max(r.updatedAt, o.updatedAt, We()),
    tracks: Si(o.tracks, r.tracks),
    favorites: nd(o.favorites, r.favorites),
    playlists: Si(o.playlists, r.playlists)
  };
}, sd = (e, a, r) => {
  const o = new Map(e.map((n) => [n.id, n]));
  return {
    version: 1,
    updatedAt: We(),
    tracks: e.map((n) => vo(n)).filter((n) => !!n),
    favorites: [...a].map((n) => {
      const l = o.get(n);
      return {
        kind: "track",
        entityId: n,
        provider: l?.source ?? "youtube",
        title: l?.title ?? "",
        createdAt: We()
      };
    }),
    playlists: r.map((n) => vn(n)).filter((n) => !!n)
  };
}, ld = () => {
  try {
    const e = localStorage.getItem(bn);
    return e ? aa(JSON.parse(e)) : null;
  } catch {
    return null;
  }
}, cd = (e) => {
  try {
    localStorage.setItem(bn, JSON.stringify(aa(e)));
  } catch {
  }
}, dd = async () => {
  try {
    const e = await fetch(fn, {
      method: "GET",
      headers: { Accept: "application/json" }
    });
    if (!e.ok) return null;
    const a = await e.json();
    return aa(a.state);
  } catch {
    return null;
  }
}, _i = async (e) => {
  const a = aa(e);
  cd(a);
  try {
    await fetch(fn, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": `juli3ta-music-state-${a.updatedAt}-${a.tracks.length}-${a.favorites.length}`
      },
      body: JSON.stringify({ state: a })
    });
  } catch {
  }
}, ud = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), Ni = async () => {
  const e = re();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(ud) : [];
}, xn = async (e) => {
  const a = re();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, Gr = "tytus.voice-recorder.recordings", pd = async () => {
  try {
    const e = localStorage.getItem(Gr);
    if (!e) return;
    const a = JSON.parse(e);
    if (!Array.isArray(a)) {
      localStorage.removeItem(Gr);
      return;
    }
    for (const r of a)
      if (!(!r?.id || typeof r.audioDataUrl != "string"))
        try {
          await xn({
            id: r.id,
            name: r.name ?? "Untitled recording",
            durationMs: r.durationMs ?? 0,
            createdAt: r.createdAt ?? Date.now(),
            mimeType: r.mimeType ?? "audio/webm",
            audioDataUrl: r.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(Gr);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, md = (e, a) => e._value, hd = "http://localhost:18080/v1", gd = "sk-test-123", yd = (e) => /\/v1\/?$/i.test(e), wn = (e) => typeof e == "object" && e !== null, fd = (e) => typeof e == "string" ? e : wn(e) && typeof e._value == "string" ? md(e) : "", Vr = (...e) => {
  for (const a of e)
    if (typeof a == "string" && a.trim()) return a;
  return null;
}, Ci = (e) => {
  const a = e?.trim();
  if (!a) return null;
  const r = a.replace(/\/+$/, "");
  return yd(r) ? r : `${r}/v1`;
}, Kr = (e, a, r) => {
  a.has(r.url) || (a.add(r.url), e.push(r));
}, bd = (e) => {
  const a = [], r = /* @__PURE__ */ new Set();
  for (const o of e) {
    const n = o, l = wn(n.meta) ? n.meta : {}, d = fd(
      n.user_key ?? n.userKey ?? n.api_key ?? n.apiKey ?? l.userKey ?? l.gatewayKey ?? l.apiKey ?? l.api_key
    );
    if (!d) continue;
    const y = Vr(n.pod_id, n.podId, n.id) || "included", m = Ci(
      Vr(n.public_url, n.publicUrl, n.gatewayUrl, l.gatewayUrl, l.publicUrl)
    );
    m && Kr(a, r, {
      url: m,
      apiKey: d,
      podId: `${y}:remote`,
      source: "included",
      label: `AIL gateway ${y} (remote)`,
      proxyPodId: y
    });
    const h = Ci(
      Vr(n.endpoint, n.private_url, n.privateUrl, l.endpoint, l.privateUrl)
    );
    h && Kr(a, r, {
      url: h,
      apiKey: d,
      podId: `${y}:tunnel`,
      source: "included",
      label: `AIL gateway ${y} (tunnel)`,
      proxyPodId: y
    });
  }
  return Kr(a, r, {
    url: hd,
    apiKey: gd,
    podId: "local",
    source: "local",
    label: "Local AIL"
  }), a;
}, xo = 100, kn = 14, sr = 6, vd = kn, xd = 24e3, wd = 0.92, kd = 3, Sd = 0.05, Ai = 5, Td = 3, _d = 0.35, Nd = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((d) => MediaRecorder.isTypeSupported(d));
  if (!o)
    throw new Error("No supported recorder mime type for fallback.");
  const n = URL.createObjectURL(e), l = new Audio();
  l.src = n, l.muted = !0, l.crossOrigin = "anonymous", l.preload = "auto";
  try {
    await new Promise((S, A) => {
      const N = () => S(), j = () => A(new Error("Audio element rejected the source format too — browser cannot play it."));
      l.addEventListener("canplay", N, { once: !0 }), l.addEventListener("error", j, { once: !0 }), l.load();
    });
    const d = a.createMediaElementSource(l), y = a.createMediaStreamDestination();
    d.connect(y);
    const m = new MediaRecorder(y.stream, { mimeType: o }), h = [];
    m.ondataavailable = (S) => {
      S.data.size > 0 && h.push(S.data);
    };
    const w = Math.max(
      6e3,
      Math.min(r, l.duration || r) * 1e3
    ), p = new Promise((S) => {
      m.onstop = () => S();
    });
    m.start(250), l.currentTime = 0, await l.play(), await new Promise((S) => setTimeout(S, w)), m.stop(), l.pause(), await p;
    const b = new Blob(h, { type: o });
    if (b.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const f = await b.arrayBuffer();
    return await a.decodeAudioData(f);
  } finally {
    URL.revokeObjectURL(n);
  }
}, Sn = async (e, a = 35) => {
  const r = window.AudioContext || window.webkitAudioContext, o = new r();
  try {
    const n = await e.arrayBuffer();
    try {
      return await o.decodeAudioData(n.slice(0));
    } catch (l) {
      try {
        return await Nd(e, o, a);
      } catch (d) {
        const y = l.message || "decodeAudioData failed", m = d.message || "fallback failed";
        throw new Error(
          `Audio format isn't supported by this browser (${y}). Compatibility-mode capture also failed: ${m}`
        );
      }
    }
  } finally {
    o.close().catch(() => {
    });
  }
}, Tn = async (e) => (await fetch(e)).blob(), so = (e) => new Promise((a, r) => {
  const o = new FileReader();
  o.onload = () => {
    const n = typeof o.result == "string" ? o.result : "", l = n.indexOf("base64,");
    a(l >= 0 ? n.slice(l + 7) : "");
  }, o.onerror = () => r(o.error), o.readAsDataURL(e);
}), Cd = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * xo / 1e3)), o = Math.floor(e.length / r), n = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const y = d * r;
    let m = 0;
    for (let h = 0; h < r; h++) {
      let w = 0;
      for (let p = 0; p < l.length; p++) w += l[p][y + h];
      w /= l.length, m += w * w;
    }
    n[d] = Math.sqrt(m / r);
  }
  return n;
}, Ad = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * xo / 1e3)), o = Math.floor(e.length / r), n = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const y = d * r;
    let m = 0, h = 0;
    for (let w = 0; w < l.length; w++) h += l[w][y];
    h /= l.length;
    for (let w = 1; w < r; w++) {
      let p = 0;
      for (let b = 0; b < l.length; b++) p += l[b][y + w];
      p /= l.length, (h > 1e-3 && p < -1e-3 || h < -1e-3 && p > 1e-3) && m++, h = p;
    }
    n[d] = m / (r / 2);
  }
  return n;
}, _n = (e) => {
  const a = Cd(e), r = Ad(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / xo };
}, Ed = (e, a = 4) => {
  let r = 0;
  for (let m = 0; m < e.length; m++) r += e[m];
  const o = r / e.length;
  let n = 0;
  for (let m = 0; m < e.length; m++) n += (e[m] - o) ** 2;
  const l = Math.sqrt(n / e.length) || 1, d = Math.floor(e.length / a), y = new Float32Array(d);
  for (let m = 0; m < d; m++) {
    let h = 0;
    for (let w = 0; w < a; w++) h += e[m * a + w];
    y[m] = (h / a - o) / l;
  }
  return y;
}, Ld = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const o = Math.max(1, Math.floor(r / 4));
  let n = -1 / 0, l = 0;
  for (let m = 0; m + r < e.length; m += o) {
    if (Math.abs(m - a) < r) continue;
    let h = 0;
    for (let w = 0; w < r; w++)
      h += e[a + w] * e[m + w];
    h /= r, h > n && (n = h), h > 0.5 && l++;
  }
  const d = Math.max(0, Math.min(1, (n + 1) / 2)), y = Math.min(1, l / 6);
  return 0.6 * d + 0.4 * y;
}, Nn = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const o = Ed(e.rms, 4), n = e.rms.length / o.length, l = Math.max(1, Math.floor(r / n));
  let d = 0, y = 0, m = 0;
  for (let b = 0; b < r; b++)
    d += e.rms[b], y += e.rms[b] * e.rms[b], m += e.centroid[b];
  const h = [], w = Math.max(1, Math.floor(e.framesPerSec)), p = (b) => {
    const f = d / r, S = Math.max(0, y / r - f * f), A = Math.sqrt(S), N = m / r, j = Math.floor(b / n), _ = Ld(o, j, l), C = 0.45 * Math.min(1, f * 4) + 0.2 * N + 0.25 * _ - 0.1 * Math.min(1, A * 6);
    h.push({
      startFrame: b,
      lenFrames: r,
      score: C,
      meanRms: f,
      stdRms: A,
      meanBright: N,
      selfSim: _
    });
  };
  p(0);
  for (let b = r; b < e.rms.length; b += w) {
    for (let f = 0; f < w && b - w + f < e.rms.length; f++) {
      const S = b - r - w + f + 1, A = b - w + f + 1;
      if (A >= e.rms.length) break;
      S >= 0 && (d -= e.rms[S], y -= e.rms[S] * e.rms[S], m -= e.centroid[S]), d += e.rms[A], y += e.rms[A] * e.rms[A], m += e.centroid[A];
    }
    p(b - r + w);
  }
  return h;
}, lo = (e, a, r) => {
  const o = new Float32Array(r), n = [];
  for (let l = 0; l < e.numberOfChannels; l++) n.push(e.getChannelData(l));
  for (let l = 0; l < r; l++) {
    let d = 0;
    for (let y = 0; y < n.length; y++) d += n[y][a + l] || 0;
    o[l] = d / n.length;
  }
  return o;
}, zd = (e, a, r) => {
  if (r >= a) return e;
  const o = a / r, n = Math.max(1, Math.floor(e.length / o)), l = new Float32Array(n);
  for (let d = 0; d < n; d++) {
    const y = d * o, m = Math.floor(y), h = Math.min(e.length - 1, m + 1), w = y - m;
    l[d] = e[m] * (1 - w) + e[h] * w;
  }
  return l;
}, Id = (e, a) => {
  const n = a * 1 * 2, l = 1 * (16 / 8), d = e.length * 2, y = new ArrayBuffer(44 + d), m = new DataView(y);
  let h = 0;
  const w = (f) => {
    for (let S = 0; S < f.length; S++) m.setUint8(h++, f.charCodeAt(S));
  }, p = (f) => {
    m.setUint32(h, f, !0), h += 4;
  }, b = (f) => {
    m.setUint16(h, f, !0), h += 2;
  };
  w("RIFF"), p(36 + d), w("WAVE"), w("fmt "), p(16), b(1), b(1), p(a), p(n), b(l), b(16), w("data"), p(d);
  for (let f = 0; f < e.length; f++) {
    const S = Math.max(-1, Math.min(1, e[f]));
    m.setInt16(h, S < 0 ? S * 32768 : S * 32767, !0), h += 2;
  }
  return new Blob([y], { type: "audio/wav" });
}, Md = (e, a) => {
  const r = new Float32Array(e);
  let o = 0;
  for (let l = 0; l < r.length; l++) o = Math.max(o, Math.abs(r[l]));
  if (o > 1e-4) {
    const l = Math.min(wd / o, kd);
    for (let d = 0; d < r.length; d++) r[d] *= l;
  }
  const n = Math.min(Math.floor(a * Sd), Math.floor(r.length / 2));
  for (let l = 0; l < n; l++) {
    const d = l / Math.max(1, n);
    r[l] *= d, r[r.length - 1 - l] *= d;
  }
  return r;
}, co = (e, a) => {
  const r = Math.min(a, xd), o = Md(e, a), n = zd(o, a, r);
  return Id(n, r);
}, Cn = async (e, a = kn) => {
  const r = typeof e == "string" ? await Tn(e) : e, o = await Sn(r), n = o.length / o.sampleRate;
  if (n < sr)
    throw new Error(`Source is too short (${n.toFixed(1)} s). Need at least ${sr} s.`);
  const l = Math.min(vd, Math.max(sr, a));
  if (n <= l) {
    const S = lo(o, 0, o.length), A = co(S, o.sampleRate);
    return { base64: await so(A), durationSec: n, startSec: 0, sourceDurationSec: n, score: 1 };
  }
  const d = _n(o), y = Nn(d, l);
  if (y.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  y.sort((S, A) => A.score - S.score);
  const m = y[0], h = Math.floor(m.startFrame / d.framesPerSec * o.sampleRate), w = Math.floor(m.lenFrames / d.framesPerSec * o.sampleRate), p = lo(o, h, w), b = co(p, o.sampleRate);
  return {
    base64: await so(b),
    durationSec: w / o.sampleRate,
    startSec: h / o.sampleRate,
    sourceDurationSec: n,
    score: Math.max(0, Math.min(1, m.score))
  };
}, Rd = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(r * a);
  let n = 0;
  for (const y of e) n += y.length;
  n -= o * (e.length - 1);
  const l = new Float32Array(n);
  let d = 0;
  l.set(e[0], 0), d = e[0].length - o;
  for (let y = 1; y < e.length; y++) {
    const m = e[y];
    for (let h = 0; h < o; h++) {
      const w = h / o;
      l[d + h] = l[d + h] * (1 - w) + m[h] * w;
    }
    for (let h = o; h < m.length; h++)
      l[d + h] = m[h];
    d += m.length - o;
  }
  return l;
}, jd = (e, a, r) => {
  const o = [...e].sort((l, d) => d.score - l.score), n = [];
  for (const l of o)
    if (n.some(
      (y) => Math.abs(y.startFrame - l.startFrame) < Math.max(y.lenFrames, l.lenFrames) + r
    ) || n.push(l), n.length >= a) break;
  return n.sort((l, d) => l.startFrame - d.startFrame), n;
}, Pd = async (e) => {
  const a = typeof e == "string" ? await Tn(e) : e, r = await Sn(a), o = r.length / r.sampleRate;
  if (o < sr * 2) {
    const f = await Cn(a);
    return {
      base64: f.base64,
      durationSec: f.durationSec,
      segments: [{ startSec: f.startSec, endSec: f.startSec + f.durationSec, score: f.score }],
      sourceDurationSec: o
    };
  }
  const n = _n(r), l = Nn(n, Ai);
  if (l.length === 0)
    throw new Error("Could not analyze the audio.");
  const d = Math.max(
    Math.floor(Ai * n.framesPerSec * 0.5),
    Math.floor(n.rms.length / 4)
  ), y = jd(l, Td, d), m = y.map((f) => {
    const S = Math.floor(f.startFrame / n.framesPerSec * r.sampleRate), A = Math.floor(f.lenFrames / n.framesPerSec * r.sampleRate);
    return lo(r, S, A);
  }), h = Rd(m, r.sampleRate, _d), w = co(h, r.sampleRate), p = await so(w), b = y.map((f) => ({
    startSec: f.startFrame / n.framesPerSec,
    endSec: (f.startFrame + f.lenFrames) / n.framesPerSec,
    score: Math.max(0, Math.min(1, f.score))
  }));
  return {
    base64: p,
    durationSec: h.length / r.sampleRate,
    segments: b,
    sourceDurationSec: o
  };
};
class An extends Error {
  status;
  code;
  constructor(a, r, o) {
    super(o), this.name = "MusicDaemonError", this.status = a, this.code = r;
  }
}
const na = async (e, a) => {
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
    throw new An(r.status, l, l === "music_unavailable" ? "Music search is still starting up." : l);
  }
  return o;
}, En = async (e, a, r) => {
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
    throw new An(o.status, d, d);
  }
  return n;
}, Dd = (e) => na("/api/music/status", e), Ei = async (e) => (await na("/api/music/providers", e)).providers ?? [], Li = async (e) => (await na("/api/music/connectors", e)).connectors ?? [], Ud = (e, a, r) => En("/api/music/connectors/configure", { provider: e, credentials: a }, r), Od = (e, a) => En("/api/music/connectors/disconnect", { provider: e }, a), Hd = async (e, a = 20, r) => {
  const o = new URLSearchParams({ q: e, limit: String(a) });
  return (await na(`/api/music/search?${o.toString()}`, r)).results ?? [];
}, $d = (e, a = "tracks,albums,artists,playlists", r = 20, o) => {
  const n = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return na(`/api/music/search2?${n.toString()}`, o);
}, zi = (e, a) => {
  const r = new URLSearchParams({ videoId: e });
  return na(`/api/music/stream?${r.toString()}`, a);
}, gr = async (e, a) => {
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
}, Yr = async () => gr("/api/juli3ta/library/tracks"), Ii = async (e) => (await gr(
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
)).track, Fd = async (e) => {
  await gr("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, Bd = async () => (await gr("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, uo = "0.3.15", La = "application/x-juli3ta-track", rr = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", Ln = (e) => e.source !== "youtube", Sa = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const o of r)
      a.has(o.id) || a.set(o.id, o);
  return Array.from(a.values()).sort((r, o) => o.createdAt - r.createdAt);
}, Wd = (e) => Ln(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), It = [
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
], qd = It.flatMap((e) => e.chips), Jd = ["very_slow", "slow", "medium", "fast", "very_fast"], Gd = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], Vd = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], Kd = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], Yd = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], Xd = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], Qd = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], Zd = ["narrow", "medium", "wide"], eu = ["none", "gradual", "sudden"], tu = ["low", "medium", "high"], au = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], ru = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], ou = ["male", "female", "mixed", "other", "none"], iu = [
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
], nu = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], su = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], lu = [
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
], cu = [
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
], du = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], te = (e) => e.replace(/_/g, " "), uu = (e, a, r) => {
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
}, pu = (e) => {
  if (!e) return "";
  const a = e.replace(/\.[a-z0-9]{2,5}$/i, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return a.length >= 3 ? a : "";
}, mu = (e) => {
  let r = e.replace(/\s+/g, " ").trim() || "Polished modern cover, clear vocals, tight rhythm, high-quality mix";
  if (r.length < 10 && (r = `${r}, style cover, polished music production`.replace(/^,\s*/, "")), r.length <= 300) return r;
  const o = r.slice(0, 300).replace(/\s+\S*$/, "").trim();
  return o.length >= 10 ? o : r.slice(0, 300);
}, wo = (e) => {
  const a = [], r = [];
  if (e.structure?.tempo_bpm ? r.push(`${e.structure.tempo_bpm} BPM`) : e.structure?.tempo_class && r.push(`${te(e.structure.tempo_class)} tempo`), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push(`${e.structure.time_signature} time`), e.structure?.rhythm_feel && r.push(`${e.structure.rhythm_feel} feel`), e.structure?.groove_pattern && r.push(`${te(e.structure.groove_pattern)} groove`), e.structure?.song_form && r.push(`${te(e.structure.song_form)} form`), e.structure?.length_seconds && r.push(`~${e.structure.length_seconds}s`), r.length && a.push(r.join(", ")), e.tonal?.key) {
    const l = e.tonal.mode ? `${e.tonal.key} ${e.tonal.mode}` : e.tonal.key;
    a.push(`Key: ${l}`);
  }
  if (e.instrumentation?.primary_instruments?.length && a.push(`Instruments: ${e.instrumentation.primary_instruments.map(te).join(", ")}`), e.instrumentation?.has_vocals === !1)
    a.push("Instrumental, no vocals");
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const l = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && l.push(e.instrumentation.vocal_gender), e.instrumentation.vocal_style?.length ? l.push(e.instrumentation.vocal_style.map(te).join("/")) : l.length === 0 && l.push("vocals");
    let d = l.join(" ");
    e.instrumentation.vocal_processing?.length && (d += ` with ${e.instrumentation.vocal_processing.map(te).join(" + ")}`), a.push(d);
  }
  e.instrumentation?.language_iso639_1 && a.push(`Language: ${e.instrumentation.language_iso639_1}`);
  const o = [];
  e.dynamics?.overall_dynamic_range && o.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && o.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && o.push("big drops"), o.length && a.push(o.join(", ")), e.mood?.primary_moods?.length && a.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && a.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && a.push(`For: ${e.mood.occasion_tags.map(te).join(", ")}`);
  const n = [];
  return e.context?.era_reference && n.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && n.push(`${te(e.context.cultural_region)} scene`), e.context?.intended_use?.length && n.push(`use: ${e.context.intended_use.map(te).join("/")}`), e.context?.explicit_lyrics && n.push("explicit lyrics"), n.length && a.push(n.join(", ")), a.join(". ");
}, hu = [
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
], Mi = "tytus.music-creator.gallery", Ri = "tytus.music-creator", Xr = "gallery", Qt = 3500, ji = 1e3, gu = 2e3, Re = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), o = a % 60;
  return `${r}:${o.toString().padStart(2, "0")}`;
}, yu = (e) => {
  if (!e) return null;
  const a = "base64,", r = e.indexOf(a);
  return r >= 0 ? e.slice(r + a.length) : null;
}, fu = (e, a = "audio/wav") => {
  const r = e.replace(/\s+/g, ""), o = atob(r), n = new Uint8Array(o.length);
  for (let l = 0; l < o.length; l++) n[l] = o.charCodeAt(l);
  return new Blob([n], { type: a });
}, bu = (e) => {
  try {
    const a = e.replace(/\s+/g, ""), r = atob(a.slice(0, Math.min(a.length, 4096)));
    if (r.length < 44 || r.slice(0, 4) !== "RIFF" || r.slice(8, 12) !== "WAVE") return null;
    const o = new Uint8Array(r.length);
    for (let h = 0; h < r.length; h++) o[h] = r.charCodeAt(h);
    const n = new DataView(o.buffer);
    let l = 12, d = 0, y = 0, m = 0;
    for (; l + 8 <= o.length; ) {
      const h = String.fromCharCode(o[l], o[l + 1], o[l + 2], o[l + 3]), w = n.getUint32(l + 4, !0), p = l + 8;
      if (h === "fmt " && p + 16 <= o.length)
        d = n.getUint32(p + 4, !0), y = n.getUint16(p + 12, !0);
      else if (h === "data") {
        m = w;
        break;
      }
      l = p + w + w % 2;
    }
    return !d || !y || !m ? null : m / (d * y) * 1e3;
  } catch {
    return null;
  }
}, ko = (e) => e.source === "youtube" && !!e.externalId, Se = (e) => !!e.audioDataUrl || ko(e), yr = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? mr(e.externalId) : ""), mr = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", zn = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, Ta = (e) => `youtube:${e}`, vu = async () => {
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
    const a = localStorage.getItem(Mi);
    if (a) {
      const r = JSON.parse(a);
      if (Array.isArray(r))
        for (const o of r)
          try {
            await pr(e(o));
          } catch {
          }
      localStorage.removeItem(Mi);
    }
  } catch (a) {
    console.warn("Legacy localStorage gallery migration failed:", a);
  }
  try {
    const a = await new Promise((r) => {
      const o = indexedDB.open(Ri);
      o.onsuccess = () => {
        const n = o.result;
        if (!n.objectStoreNames.contains(Xr)) {
          n.close(), r([]);
          return;
        }
        const d = n.transaction(Xr, "readonly").objectStore(Xr).getAll();
        d.onsuccess = () => {
          n.close(), r(d.result ?? []);
        }, d.onerror = () => {
          n.close(), r([]);
        };
      }, o.onerror = () => r([]);
    });
    for (const r of a)
      try {
        await pr(e(r));
      } catch {
      }
    a.length > 0 && indexedDB.deleteDatabase(Ri);
  } catch (a) {
    console.warn("Legacy IDB gallery migration failed:", a);
  }
}, Ea = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, xu = (e, a) => bd(a).map((r) => ({
  ...r,
  models: Ea
})), wu = (e) => {
  const a = (p, b) => {
    const f = p.map((S) => S.toLowerCase());
    for (const S of b) {
      const A = f.findIndex((N) => S.test(N));
      if (A >= 0) return p[A];
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
  ]), n = new Set([r, o].filter((p) => !!p)), l = e.filter((p) => !n.has(p)), d = a(l, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), y = (p) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(p), m = e.filter((p) => !y(p)), h = a(m, [
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
  ]), w = a(e, [
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
  return { music: d, cover: r, lyrics: o, lyricsBackup: h, image: w, allIds: e };
}, ku = 6e4, Qr = /* @__PURE__ */ new Map(), ra = (e, a, r) => {
  const o = new Headers(r.headers ?? {}), n = a.startsWith("/") ? a : `/${a}`;
  if (e.proxyPodId) {
    o.delete("Authorization");
    const l = `/api/pods/${encodeURIComponent(e.proxyPodId)}/proxy/v1${n}`;
    return fetch(l, { ...r, headers: o });
  }
  return e.apiKey && o.set("Authorization", `Bearer ${e.apiKey}`), fetch(`${e.url}${n}`, { ...r, headers: o });
}, Su = async (e, a) => {
  const r = Qr.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: Ea };
    Qr.delete(e.url);
  }
  const o = oa(a, _u);
  try {
    const n = await ra(e, "/models", {
      method: "GET",
      signal: o.signal,
      headers: { Accept: "application/json" }
    });
    if (n.status >= 500) return { ok: !1, models: Ea };
    if (!n.ok) return { ok: !0, models: Ea };
    const d = ((await n.json()).data ?? []).map((y) => y?.id).filter((y) => typeof y == "string" && y.length > 0);
    return { ok: !0, models: wu(d) };
  } catch (n) {
    return (n?.name ?? "") === "TypeError" && Qr.set(e.url, Date.now() + ku), { ok: !1, models: Ea };
  } finally {
    o.dispose();
  }
}, Tu = async (e, a) => (await Promise.all(
  e.map(async (o) => {
    if (a.aborted) return null;
    const { ok: n, models: l } = await Su(o, a);
    return n ? { ...o, models: l } : null;
  })
)).filter((o) => o !== null), or = 6e4, Pi = 3e5, _u = 8e3, oa = (e, a) => {
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
}, Nu = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]);
class ke extends Error {
  status;
  body;
  constructor(a, r, o) {
    super(o ?? `HTTP ${a}: ${r.slice(0, 200)}`), this.name = "GatewayError", this.status = a, this.body = r;
  }
}
function In(e) {
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
const fr = async (e, a, r) => {
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
      if (d instanceof ke && Nu.has(d.status)) {
        o = d;
        continue;
      }
      throw d;
    }
  const n = o?.message ?? "unknown";
  throw new Error(`All ${r} models exhausted. Last error: ${n}. Wait for the rate limit to reset, or pick a different endpoint in Settings.`);
}, Cu = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), Au = async (e, a, r) => {
  let o = 0, n = "";
  const l = oa(r, or);
  try {
    const b = { prompt: a, mode: "write_full_song" };
    e.models.lyrics && (b.model = e.models.lyrics);
    const f = await ra(e, "/music/lyrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(b),
      signal: l.signal
    });
    if (f.ok) {
      const S = await f.json();
      if (!S || typeof S.lyrics != "string" || S.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...S, usedFallback: !1 };
    }
    o = f.status, n = await f.text().catch(() => "");
  } catch (b) {
    const f = b.name;
    if (f === "AbortError" && r?.aborted) throw b;
    if (f === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${or / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", b);
  } finally {
    l.dispose();
  }
  if (o !== 0 && !Cu.has(o)) {
    const b = n.length > 300 ? `${n.slice(0, 300)}…` : n;
    throw new Error(`Lyrics HTTP ${o}: ${b || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, n);
  const d = (b) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(b), y = /* @__PURE__ */ new Set(), m = [], h = (b) => {
    b && !y.has(b) && (y.add(b), m.push(b));
  };
  if (h(e.models.lyricsBackup), e.models.allIds.filter(d).forEach(h), m.length === 0)
    throw new Error(
      `Lyrics endpoint failed and no chat backup model is available for ${e.label}. Pick one in JULI3TA Settings.`
    );
  const w = `You are a songwriter. Given a theme, write a complete singable song.
Respond with VALID JSON ONLY in exactly this shape, nothing else:
{
  "song_title": "Short catchy title",
  "style_tags": "comma, separated, style, hints",
  "lyrics": "[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Bridge]\\nTwo lines\\n\\n[Outro]\\nTwo lines"
}`, p = await fr(m, async (b) => {
    const f = {
      model: b,
      messages: [
        { role: "system", content: w },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, S = async (A) => {
      const N = oa(r, or);
      let j;
      try {
        j = await ra(e, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            A ? { ...f, response_format: { type: "json_object" } } : f
          ),
          signal: N.signal
        });
      } catch (L) {
        throw L.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${or / 1e3}s.`) : L;
      } finally {
        N.dispose();
      }
      if (!j.ok) {
        const L = await j.text().catch(() => "");
        throw new ke(j.status, L, `Lyrics fallback HTTP ${j.status}: ${L.slice(0, 300)}`);
      }
      const C = (await j.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!C)
        throw new ke(502, "", "Lyrics fallback returned empty content");
      const B = C.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), P = In(B) ?? B;
      let x;
      try {
        x = JSON.parse(P);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", C.slice(0, 400)), new ke(502, C.slice(0, 200), `Lyrics fallback returned non-JSON content: ${C.slice(0, 200)}`);
      }
      if (!x.lyrics)
        throw new ke(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return x;
    };
    try {
      return await S(!0);
    } catch (A) {
      if (A instanceof ke && A.status === 400 && /response_format|json_object/i.test(A.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", b), await S(!1);
      throw A;
    }
  }, "chat-lyrics");
  return {
    song_title: p.song_title || "Untitled",
    style_tags: p.style_tags || "",
    lyrics: p.lyrics,
    usedFallback: !0
  };
}, Eu = async (e, a, r) => {
  const o = !!a.refAudioBase64, n = (h) => /music/i.test(h) && !/cover/i.test(h), l = (h) => /cover/i.test(h), d = /* @__PURE__ */ new Set(), y = (h, w) => {
    w && !d.has(w) && (d.add(w), h.push(w));
  }, m = [];
  if (o ? (y(m, e.models.cover), e.models.allIds.filter(l).forEach((h) => y(m, h)), y(m, e.models.music)) : (y(m, e.models.music), e.models.allIds.filter(n).forEach((h) => y(m, h))), m.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return fr(m, async (h) => {
    const w = {
      model: h
    }, p = a.lyrics?.trim() ?? "";
    (!o || p) && (w.lyrics = p), a.prompt && (w.prompt = a.prompt), a.instrumental && (w.instrumental = !0), o && (w.audio_base64 = a.refAudioBase64);
    const b = oa(r, Pi);
    let f;
    try {
      f = await ra(e, "/music/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(w),
        signal: b.signal
      });
    } catch (A) {
      throw A.name === "TimeoutError" ? new Error(`Music generation timed out after ${Pi / 1e3}s. Try a shorter lyric or a different endpoint.`) : A;
    } finally {
      b.dispose();
    }
    if (!f.ok) {
      const A = await f.text().catch(() => "");
      throw o && f.status === 413 ? new ke(
        f.status,
        A,
        "Reference audio was too large for the gateway. JULI3TA now makes compact gateway-safe reference samples; clear and re-pick the reference audio, then retry Restyle."
      ) : new ke(f.status, A, `Music HTTP ${f.status}: ${A.slice(0, 300)}`);
    }
    const S = await f.json();
    if (!S?.data?.audio || typeof S.data.audio != "string" || S.data.audio.length < 100)
      throw new ke(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return S;
  }, o ? "music-cover" : "music");
}, Di = 6e4, lr = (e, a, r) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", n = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), l = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${o}".`
  ];
  return n && d.push(`Genre: ${n}.`), l && d.push(`Mood: ${l}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, po = async (e, a, r) => {
  const o = (y) => /image|diffusion|dall-?e|flux|sdxl/i.test(y), n = /* @__PURE__ */ new Set(), l = [], d = (y) => {
    y && !n.has(y) && (n.add(y), l.push(y));
  };
  if (d(e.models.image), e.models.allIds.filter(o).forEach(d), l.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return fr(l, async (y) => {
    const m = oa(r, Di), w = /minimax|ail-image|image-01/i.test(y) ? {
      model: y,
      prompt: a,
      aspect_ratio: "1:1",
      response_format: "base64"
    } : {
      model: y,
      prompt: a,
      size: "1024x1024",
      n: 1,
      response_format: "b64_json"
    };
    let p;
    try {
      p = await ra(e, "/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(w),
        signal: m.signal
      });
    } catch (C) {
      throw C.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${Di / 1e3}s.`) : C;
    } finally {
      m.dispose();
    }
    if (!p.ok) {
      const C = await p.text().catch(() => "");
      throw new ke(p.status, C, `Cover-art HTTP ${p.status}: ${C.slice(0, 200)}`);
    }
    const b = await p.json(), f = b.base_resp;
    if (f && typeof f.status_code == "number" && f.status_code !== 0)
      throw new ke(502, f.status_msg ?? "", `Cover-art ${y} rejected: ${f.status_msg ?? "status_code=" + f.status_code}`);
    const S = (C) => typeof C != "string" || !C.length ? null : C.startsWith("data:") ? C : `data:image/png;base64,${C}`, A = (C) => typeof C == "string" && /^https?:\/\//i.test(C) ? C : null, N = b.data;
    if (N && typeof N == "object" && !Array.isArray(N)) {
      const C = N, B = C.image_base64;
      if (Array.isArray(B) && B[0]) {
        const L = S(B[0]);
        if (L) return L;
      }
      const P = S(C.image) ?? S(C.b64_json) ?? A(C.url);
      if (P) return P;
      const x = C.image_url ?? C.image_urls;
      if (Array.isArray(x) && x[0]) {
        const L = A(x[0]);
        if (L) return L;
      }
    }
    if (Array.isArray(N) && N[0]) {
      const C = N[0], B = S(C.b64_json) ?? S(C.image_base64) ?? A(C.url);
      if (B) return B;
      throw new ke(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const j = S(b.image) ?? S(b.b64_json);
    if (j) return j;
    const _ = b.images;
    if (Array.isArray(_) && _[0]) {
      const C = _[0], B = S(C.b64_json) ?? S(C.image) ?? A(C.url);
      if (B) return B;
    }
    throw new ke(502, "", `Cover-art response shape not recognised: ${JSON.stringify(b).slice(0, 200)}`);
  }, "image");
}, Ui = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], Oi = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
], Zr = (e) => ko(e) ? "metadata" : "auto";
function Lu(e, a, r) {
  const [o, n] = k(() => {
    let x = "off";
    try {
      const q = localStorage.getItem("juli3ta:repeatMode");
      (q === "off" || q === "all" || q === "one") && (x = q);
    } catch {
    }
    let L = !1;
    try {
      L = localStorage.getItem("juli3ta:shuffle") === "1";
    } catch {
    }
    let z = 1;
    try {
      const q = localStorage.getItem("juli3ta:volume");
      if (q !== null) {
        const Q = Number.parseFloat(q);
        Number.isFinite(Q) && (z = Math.max(0, Math.min(1, Q)));
      }
    } catch {
    }
    let M = 1;
    try {
      const q = localStorage.getItem("juli3ta:playbackRate");
      if (q !== null) {
        const Q = Number.parseFloat(q);
        Number.isFinite(Q) && (M = Math.max(0.25, Math.min(4, Q)));
      }
    } catch {
    }
    return { trackId: null, playing: !1, loadingTrackId: null, positionMs: 0, durationMs: 0, volume: z, repeatMode: x, shuffle: L, playbackRate: M, sleepTimerEndsAt: null };
  }), l = ee(null), d = ee([]), y = ee(!1), m = E((x) => {
    n((L) => ({ ...L, repeatMode: x }));
    try {
      localStorage.setItem("juli3ta:repeatMode", x);
    } catch {
    }
  }, []), h = E((x) => {
    n((L) => ({ ...L, shuffle: x }));
    try {
      localStorage.setItem("juli3ta:shuffle", x ? "1" : "0");
    } catch {
    }
  }, []), w = E((x) => {
    const L = Math.max(0.25, Math.min(4, x));
    a.current && (a.current.playbackRate = L), n((z) => ({ ...z, playbackRate: L }));
    try {
      localStorage.setItem("juli3ta:playbackRate", String(L));
    } catch {
    }
  }, [a]), p = E((x) => {
    if (x === null || x <= 0) {
      n((M) => ({ ...M, sleepTimerEndsAt: null }));
      return;
    }
    const L = Math.min(x, 1440), z = Date.now() + L * 6e4;
    n((M) => ({ ...M, sleepTimerEndsAt: z }));
  }, []), b = E((x) => {
    (async () => {
      n((M) => ({
        ...M,
        trackId: x.id,
        playing: !1,
        loadingTrackId: Se(x) ? x.id : null,
        positionMs: 0,
        durationMs: x.durationMs || 0
      }));
      const L = x.audioDataUrl || await r?.(x);
      if (!L) {
        n((M) => ({ ...M, loadingTrackId: null }));
        return;
      }
      const z = a.current;
      if (!z) {
        n((M) => ({ ...M, loadingTrackId: null }));
        return;
      }
      o.trackId !== x.id || z.src !== L ? (z.src = L, z.preload = Zr(x), z.load(), z.pause(), n((M) => ({
        ...M,
        trackId: x.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: x.durationMs || 0
      }))) : n((M) => ({ ...M, loadingTrackId: null }));
    })();
  }, [o.trackId, a, r]), f = E((x) => {
    (async () => {
      if (l.current = null, o.trackId && o.trackId !== x.id && !y.current) {
        const M = d.current;
        M[M.length - 1] !== o.trackId && (M.push(o.trackId), M.length > 50 && M.splice(0, M.length - 50));
      }
      y.current = !1, n((M) => ({
        ...M,
        trackId: x.id,
        loadingTrackId: x.id,
        durationMs: x.durationMs || M.durationMs
      }));
      const L = x.audioDataUrl || await r?.(x);
      if (!L) {
        n((M) => ({ ...M, loadingTrackId: null, playing: !1 }));
        return;
      }
      const z = a.current;
      if (!z) {
        n((M) => ({ ...M, loadingTrackId: null, playing: !1 }));
        return;
      }
      (o.trackId !== x.id || z.src !== L) && (z.src = L, z.preload = Zr(x), n((M) => ({ ...M, trackId: x.id, positionMs: 0, durationMs: x.durationMs || 0 }))), z.play().then(() => n((M) => ({ ...M, loadingTrackId: null, playing: !0 }))).catch(() => n((M) => ({ ...M, loadingTrackId: null, playing: !1 })));
    })();
  }, [o.trackId, a, r]), S = E(() => {
    a.current?.pause(), n((x) => ({ ...x, playing: !1, loadingTrackId: null }));
  }, [a]), A = E((x) => {
    if (o.loadingTrackId) return;
    if (x) {
      o.trackId === x.id && o.playing ? S() : f(x);
      return;
    }
    if (o.playing) {
      S();
      return;
    }
    const L = o.trackId ? e.find((z) => z.id === o.trackId) : null;
    L ? f(L) : a.current?.src && a.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, f, S, a]), N = E((x) => {
    const L = a.current;
    L && (L.currentTime = Math.max(0, x / 1e3));
  }, [a]), j = E((x) => {
    const L = Math.max(0, Math.min(1, x));
    a.current && (a.current.volume = L), n((z) => ({ ...z, volume: L }));
    try {
      localStorage.setItem("juli3ta:volume", String(L));
    } catch {
    }
  }, [a]);
  F(() => {
    a.current && (a.current.volume = o.volume);
  }, []), F(() => {
    a.current && (a.current.playbackRate = o.playbackRate);
  }, [o.playbackRate, o.trackId, a]), F(() => {
    if (o.sleepTimerEndsAt === null) return;
    const x = o.sleepTimerEndsAt - Date.now();
    if (x <= 0) {
      a.current?.pause(), n((z) => ({ ...z, sleepTimerEndsAt: null, playing: !1 }));
      return;
    }
    const L = window.setTimeout(() => {
      a.current?.pause(), n((z) => ({ ...z, sleepTimerEndsAt: null, playing: !1 }));
    }, x);
    return () => window.clearTimeout(L);
  }, [o.sleepTimerEndsAt, a]);
  const _ = me(() => e.filter(Se), [e]), C = E(() => {
    if (_.length === 0) return null;
    if (_.length === 1) return _[0];
    const x = _.filter((L) => L.id !== o.trackId);
    return x[Math.floor(Math.random() * x.length)];
  }, [_, o.trackId]), B = E(() => {
    if (!o.trackId || _.length === 0) return;
    if (o.shuffle) {
      const z = C();
      z && f(z);
      return;
    }
    const x = _.findIndex((z) => z.id === o.trackId);
    if (x < 0) return;
    const L = _[(x + 1) % _.length];
    L && f(L);
  }, [o.trackId, o.shuffle, _, f, C]), P = E(() => {
    if (!o.trackId || _.length === 0) return;
    if (o.shuffle) {
      const z = d.current;
      for (; z.length > 0; ) {
        const q = z.pop();
        if (!q || q === o.trackId) continue;
        const Q = _.find((he) => he.id === q);
        if (Q) {
          y.current = !0, f(Q);
          return;
        }
      }
      const M = C();
      M && f(M);
      return;
    }
    const x = _.findIndex((z) => z.id === o.trackId);
    if (x < 0) return;
    const L = _[(x - 1 + _.length) % _.length];
    L && f(L);
  }, [o.trackId, o.shuffle, _, f, C]);
  return F(() => {
    const x = a.current;
    if (!x) return;
    const L = () => n((D) => ({ ...D, positionMs: x.currentTime * 1e3 })), z = () => n((D) => ({
      ...D,
      durationMs: Number.isFinite(x.duration) ? x.duration * 1e3 : D.durationMs
    })), M = () => n((D) => ({ ...D, playing: !0, loadingTrackId: null })), q = () => n((D) => ({ ...D, playing: !1, loadingTrackId: null })), Q = () => n((D) => ({ ...D, loadingTrackId: null })), he = () => {
      const D = o.trackId ? _.find((Z) => Z.id === o.trackId) : null;
      if (!D || D.audioDataUrl || !r || l.current === D.id) {
        n((Z) => ({ ...Z, playing: !1, loadingTrackId: null }));
        return;
      }
      l.current = D.id, n((Z) => ({ ...Z, loadingTrackId: D.id, playing: !1 })), r(D, { force: !0 }).then((Z) => {
        if (!Z) throw new Error("No refreshed stream URL");
        return x.src = Z, x.preload = Zr(D), x.play();
      }).then(() => n((Z) => ({ ...Z, playing: !0, loadingTrackId: null }))).catch(() => n((Z) => ({ ...Z, playing: !1, loadingTrackId: null })));
    }, $ = () => {
      if (o.repeatMode === "one" && o.trackId) {
        const D = _.find((Z) => Z.id === o.trackId);
        if (D) {
          f(D);
          return;
        }
      }
      if (o.shuffle && _.length >= 1)
        if (_.length === 1) {
          if (o.repeatMode === "all") {
            f(_[0]);
            return;
          }
        } else {
          const D = _.filter((Ce) => Ce.id !== o.trackId), Z = D[Math.floor(Math.random() * D.length)];
          if (Z) {
            f(Z);
            return;
          }
        }
      if (_.length >= 2) {
        const D = _.findIndex((Z) => Z.id === o.trackId);
        if (D >= 0 && D + 1 < _.length) {
          f(_[D + 1]);
          return;
        }
        if (D >= 0 && o.repeatMode === "all") {
          f(_[0]);
          return;
        }
      }
      n((D) => ({ ...D, playing: !1, positionMs: 0 }));
    };
    return x.addEventListener("timeupdate", L), x.addEventListener("loadedmetadata", z), x.addEventListener("play", M), x.addEventListener("pause", q), x.addEventListener("canplay", Q), x.addEventListener("error", he), x.addEventListener("ended", $), () => {
      x.removeEventListener("timeupdate", L), x.removeEventListener("loadedmetadata", z), x.removeEventListener("play", M), x.removeEventListener("pause", q), x.removeEventListener("canplay", Q), x.removeEventListener("error", he), x.removeEventListener("ended", $);
    };
  }, [_, o.trackId, o.repeatMode, o.shuffle, f, a, r]), { state: o, queue: e, play: f, pause: S, toggle: A, select: b, seek: N, setVolume: j, setRepeatMode: m, setShuffle: h, setPlaybackRate: w, setSleepTimer: p, next: B, prev: P };
}
function Hi({
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
function eo({
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
        o ? /* @__PURE__ */ t(oe, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(rt, { size: 10 }),
        o ? "…" : e
      ]
    }
  );
}
function ot({
  track: e,
  size: a,
  iconSize: r,
  radius: o
}) {
  const n = yr(e);
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
function zu({ player: e, allTracks: a }) {
  const { state: r, toggle: o, next: n, prev: l, seek: d, setVolume: y, setPlaybackRate: m, setSleepTimer: h, queue: w } = e, p = w.find((j) => j.id === r.trackId) ?? a.find((j) => j.id === r.trackId) ?? null;
  if (!p) return null;
  const b = r.durationMs > 0 ? r.durationMs : p.durationMs, f = Math.min(r.positionMs, b || 0), S = b > 0 ? f / b * 100 : 0, A = r.loadingTrackId === p.id, N = (j) => {
    if (!b) return;
    const _ = j.currentTarget.getBoundingClientRect(), C = (j.clientX - _.left) / _.width;
    d(Math.max(0, Math.min(1, C)) * b);
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
        /* @__PURE__ */ t(ot, { track: p, size: 40, iconSize: 18, radius: 6 }),
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
              children: /* @__PURE__ */ t(ho, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: l,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(xe, { size: 12, style: { transform: "rotate(180deg)" } })
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
              children: A ? /* @__PURE__ */ t(oe, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(kt, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(xe, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: n,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(xe, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                const j = r.repeatMode, _ = j === "off" ? "all" : j === "all" ? "one" : "off";
                e.setRepeatMode(_);
              },
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: r.repeatMode === "off" ? "var(--text-secondary)" : "var(--accent-primary)"
              },
              title: r.repeatMode === "off" ? "Repeat off" : r.repeatMode === "all" ? "Repeating queue" : "Repeating this track",
              children: r.repeatMode === "one" ? /* @__PURE__ */ t(tn, { size: 12 }) : /* @__PURE__ */ t(Vl, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: Re(f)
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            onClick: N,
            className: "flex-1 rounded-full overflow-hidden cursor-pointer",
            style: { height: 4, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${S}%`,
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
            children: Re(b)
          }
        ),
        /* @__PURE__ */ t(Mu, { rate: r.playbackRate, setRate: m }),
        /* @__PURE__ */ t(Iu, { endsAt: r.sleepTimerEndsAt, setSleepTimer: h }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(Ru, { volume: r.volume, setVolume: y }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
              value: r.volume,
              onChange: (j) => y(Number(j.target.value)),
              style: { width: "100%", accentColor: "var(--accent-primary)" }
            }
          )
        ] })
      ]
    }
  );
}
const $i = [null, 5, 15, 30, 45, 60];
function Iu({
  endsAt: e,
  setSleepTimer: a
}) {
  const [, r] = k(() => Date.now());
  F(() => {
    if (e === null) return;
    const h = window.setInterval(() => r(Date.now()), 1e3);
    return () => window.clearInterval(h);
  }, [e]);
  const o = e !== null, n = o ? Math.max(0, Math.ceil((e - Date.now()) / 6e4)) : 0, l = () => {
    if (!o) {
      a($i[1]);
      return;
    }
    const h = $i.find(
      (w) => w !== null && w > n
    ) ?? null;
    a(h);
  }, d = (h) => {
    h.preventDefault(), o && a(null);
  }, y = o ? n > 0 ? `${n}m` : "<1m" : "", m = o ? `Sleep timer: pauses in ~${n}m. Click to extend, right-click to cancel.` : "Sleep timer (click to start, off by default)";
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
        /* @__PURE__ */ t(jl, { size: 11 }),
        y && /* @__PURE__ */ t("span", { children: y })
      ]
    }
  );
}
const to = [1, 1.25, 1.5, 2, 0.5, 0.75];
function Mu({
  rate: e,
  setRate: a
}) {
  const r = Math.abs(e - 1) < 1e-3, o = () => {
    const d = to.findIndex((m) => Math.abs(m - e) < 1e-3), y = to[(d + 1) % to.length];
    a(y);
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
function Ru({
  volume: e,
  setVolume: a
}) {
  const r = ee(e > 0 ? e : 1);
  F(() => {
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
      children: o ? /* @__PURE__ */ t(lc, { size: 12 }) : /* @__PURE__ */ t(nc, { size: 12 })
    }
  );
}
const Fi = [
  { scope: "global", combo: "?", action: "Show this help" },
  { scope: "global", combo: "Esc", action: "Close modal / dismiss overlay" },
  { scope: "player", combo: "Space", action: "Play / Pause" },
  { scope: "player", combo: "←", action: "Seek back 5s" },
  { scope: "player", combo: "→", action: "Seek forward 5s" },
  { scope: "player", combo: "↑", action: "Volume up (10%)" },
  { scope: "player", combo: "↓", action: "Volume down (10%)" }
];
function ju({
  open: e,
  onClose: a
}) {
  if (!e) return null;
  const r = [
    { label: "Global", rows: Fi.filter((o) => o.scope === "global") },
    { label: "Player view", rows: Fi.filter((o) => o.scope === "player") }
  ];
  return Ma(
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
                      /* @__PURE__ */ t(yo, { name: "juli3ta:mark", size: 18 }),
                      /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: "Keyboard shortcuts" })
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: a,
                        className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                        style: { width: 28, height: 28, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(be, { size: 14 })
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
function Pu({ retrying: e, onRetry: a }) {
  const { t: r } = Dt();
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
            e ? /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(rt, { size: 14 }),
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
function _a({ label: e, hint: a, counter: r, counterDanger: o, className: n, headerExtra: l, children: d }) {
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
function Du({ onPick: e, disabled: a }) {
  const [r, o] = k(!1), [n, l] = k(It[0].label), [d, y] = k(""), m = d.trim().toLowerCase(), h = m.length > 0, w = me(() => {
    if (!h) return [];
    const p = [];
    for (const b of It)
      for (const f of b.chips)
        f.toLowerCase().includes(m) && p.push({ family: b.label, chip: f });
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: h ? `${w.length} match${w.length === 1 ? "" : "es"}` : `${qd.length} chips · click to add` })
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
                  /* @__PURE__ */ t(gt, { size: 11, style: { color: "var(--text-disabled)" } }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: d,
                      onChange: (p) => y(p.target.value),
                      placeholder: "Search genres…",
                      className: "rounded-input bg-transparent outline-none",
                      style: { fontSize: 11, color: "var(--text-primary)", width: 140 }
                    }
                  ),
                  d && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => y(""),
                      className: "opacity-60 hover:opacity-100",
                      title: "Clear search",
                      children: /* @__PURE__ */ t(be, { size: 11 })
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
        h ? w.length === 0 ? /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: w.map(({ family: p, chip: b }) => /* @__PURE__ */ t(
          ao,
          {
            chip: b,
            family: p,
            onPick: e,
            disabled: a
          },
          `${p}::${b}`
        )) }) : /* @__PURE__ */ s(fe, { children: [
          !r && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: It.map((p) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => l(p.label),
              className: "px-2 rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                height: 24,
                fontSize: 10,
                fontWeight: n === p.label ? 600 : 500,
                color: n === p.label ? "var(--text-primary)" : "var(--text-secondary)",
                background: n === p.label ? "var(--bg-selected)" : "var(--bg-window)",
                border: `1px solid ${n === p.label ? "var(--accent-primary)" : "var(--border-subtle)"}`
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
              children: It.map((p) => /* @__PURE__ */ s("div", { children: [
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
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: p.chips.map((b) => /* @__PURE__ */ t(ao, { chip: b, onPick: e, disabled: a }, b)) })
              ] }, p.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (It.find((p) => p.label === n) ?? It[0]).chips.map((p) => /* @__PURE__ */ t(ao, { chip: p, onPick: e, disabled: a }, p)) })
        ] })
      ]
    }
  );
}
function ao({
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
        /* @__PURE__ */ t(io, { size: 10 }),
        e,
        a && /* @__PURE__ */ s("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function Uu({ specs: e, onChange: a, disabled: r, onOptimize: o, optimizing: n }) {
  const [l, d] = k(!1), y = me(() => wo(e), [e]), m = y.length > 0, h = E(
    (p, b) => {
      const f = { ...e };
      b === null ? delete f[p] : f[p] = b, a(f);
    },
    [e, a]
  ), w = () => a({});
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
                /* @__PURE__ */ t(oo, { size: 14, style: { color: "var(--text-secondary)" } }),
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
                  n ? /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(rt, { size: 11 }),
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
                  ea(e),
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
                  Yi,
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
                    y
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                /* @__PURE__ */ s(Na, { label: "Structure", children: [
                  /* @__PURE__ */ t(pe, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    Bi,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (p) => h("structure", { ...e.structure, tempo_bpm: p }),
                      min: 40,
                      max: 260,
                      placeholder: "120",
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Tempo class", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.structure?.tempo_class,
                      options: Jd,
                      onChange: (p) => h("structure", { ...e.structure, tempo_class: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Time signature", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.structure?.time_signature,
                      options: Gd,
                      onChange: (p) => h("structure", { ...e.structure, time_signature: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.structure?.rhythm_feel,
                      options: Vd,
                      onChange: (p) => h("structure", { ...e.structure, rhythm_feel: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Groove", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.structure?.groove_pattern,
                      options: Kd,
                      onChange: (p) => h("structure", { ...e.structure, groove_pattern: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Form", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.structure?.song_form,
                      options: Yd,
                      onChange: (p) => h("structure", { ...e.structure, song_form: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Length (s)", children: /* @__PURE__ */ t(
                    Bi,
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
                /* @__PURE__ */ s(Na, { label: "Key", children: [
                  /* @__PURE__ */ t(pe, { label: "Pitch", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.tonal?.key,
                      options: Xd,
                      onChange: (p) => h("tonal", { ...e.tonal, key: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Mode", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.tonal?.mode,
                      options: Qd,
                      onChange: (p) => h("tonal", { ...e.tonal, mode: p }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Na, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(pe, { label: "Range", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: Zd,
                      onChange: (p) => h("dynamics", { ...e.dynamics, overall_dynamic_range: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: eu,
                      onChange: (p) => h("dynamics", { ...e.dynamics, crescendo_shape: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Big drops", children: /* @__PURE__ */ t(
                    Wi,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (p) => h("dynamics", { ...e.dynamics, has_big_drops: p }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(Na, { label: "Context", children: [
                  /* @__PURE__ */ t(pe, { label: "Era", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.context?.era_reference,
                      options: au,
                      onChange: (p) => h("context", { ...e.context, era_reference: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Region", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.context?.cultural_region,
                      options: ru,
                      onChange: (p) => h("context", { ...e.context, cultural_region: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Intensity", children: /* @__PURE__ */ t(
                    Me,
                    {
                      value: e.mood?.emotional_intensity,
                      options: tu,
                      onChange: (p) => h("mood", { ...e.mood, emotional_intensity: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(pe, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    Wi,
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
                  Zt,
                  {
                    label: "Primary instruments",
                    options: iu,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (p) => h("instrumentation", { ...e.instrumentation, primary_instruments: p.length ? p : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ s(Na, { label: "Vocals", children: [
                    /* @__PURE__ */ t(pe, { label: "Has vocals", children: /* @__PURE__ */ t(
                      Hu,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (p) => h("instrumentation", { ...e.instrumentation, has_vocals: p }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(pe, { label: "Gender", children: /* @__PURE__ */ t(
                      Me,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: ou,
                        onChange: (p) => h("instrumentation", { ...e.instrumentation, vocal_gender: p }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(pe, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      Ou,
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
                    Zt,
                    {
                      label: "Vocal style",
                      options: nu,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (p) => h("instrumentation", { ...e.instrumentation, vocal_style: p.length ? p : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    Zt,
                    {
                      label: "Vocal processing",
                      options: su,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (p) => h("instrumentation", { ...e.instrumentation, vocal_processing: p.length ? p : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  Zt,
                  {
                    label: "Primary moods",
                    options: lu,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (p) => h("mood", { ...e.mood, primary_moods: p.length ? p : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Zt,
                  {
                    label: "Occasion tags",
                    options: cu,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (p) => h("mood", { ...e.mood, occasion_tags: p.length ? p : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Zt,
                  {
                    label: "Intended use",
                    options: du,
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
                  onClick: w,
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
function Na({ label: e, children: a }) {
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
function pe({ label: e, children: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-secondary)", flexShrink: 0, minWidth: 90 }, children: e }),
    /* @__PURE__ */ t("div", { style: { flex: 1, minWidth: 0 }, children: a })
  ] });
}
function Me({
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
        a.map((n) => /* @__PURE__ */ t("option", { value: n, children: te(n) }, n))
      ]
    }
  );
}
function Bi({
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
        const y = d.target.value;
        if (y === "") {
          a(void 0);
          return;
        }
        const m = Number(y);
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
function Ou({
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
function Wi({
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
function Hu({
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
function Zt({
  label: e,
  options: a,
  selected: r,
  onChange: o,
  disabled: n
}) {
  const l = (d) => {
    r.includes(d) ? o(r.filter((y) => y !== d)) : o([...r, d]);
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
      const y = r.includes(d);
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => l(d),
          disabled: n,
          className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-90 disabled:opacity-40",
          style: {
            fontSize: 10,
            background: y ? "var(--accent-primary)" : "var(--bg-titlebar)",
            color: y ? "white" : "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            cursor: n ? "not-allowed" : "pointer"
          },
          children: [
            y && /* @__PURE__ */ t(ta, { size: 10 }),
            te(d)
          ]
        },
        d
      );
    }) })
  ] });
}
function ea(e) {
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
const $u = "#4ade80", Fu = "#fbbf24", hr = (e) => e.models.music || e.models.cover ? $u : Fu;
function Bu({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [o, n] = k(!1), l = ee(null), d = a.length > 1;
  F(() => {
    if (!o) return;
    const m = (h) => {
      l.current && !l.current.contains(h.target) && n(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [o]);
  const y = (m) => /* @__PURE__ */ t(
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
          y(hr(e)),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap" }, children: e.label }),
          d && /* @__PURE__ */ t(
            Yi,
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
                /* @__PURE__ */ t("div", { className: "mt-1", children: y(hr(m)) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: m.label }),
                    h && /* @__PURE__ */ t(ta, { size: 11, style: { color: "var(--accent-primary)" } })
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
const Ne = ({ icon: e, label: a, onClick: r, danger: o }) => /* @__PURE__ */ s(
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
function Wu({ tracks: e, player: a, onLoad: r, onOpenLyrics: o, onDelete: n, onRename: l }) {
  const { t: d } = Dt();
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
    e.map((y) => /* @__PURE__ */ t(
      qu,
      {
        track: y,
        player: a,
        onLoad: r,
        onOpenLyrics: o,
        onDelete: n,
        onRename: l,
        translate: d
      },
      y.id
    ))
  ] });
}
function qu({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: o,
  onDelete: n,
  onRename: l,
  translate: d
}) {
  const [y, m] = k(!1), [h, w] = k(null), p = a.state.trackId === e.id, b = p && a.state.playing, f = () => {
    if (h === null) return;
    const N = h.trim();
    w(null), N && N !== e.title && l(e.id, N);
  }, S = new Date(e.createdAt).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      draggable: !0,
      onDragStart: (N) => {
        const j = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: Se(e)
        };
        N.dataTransfer.setData(La, JSON.stringify(j)), e.lyricsPreview && N.dataTransfer.setData("text/plain", e.lyricsPreview), N.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => Se(e) ? a.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: p ? "var(--bg-selected)" : y ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: Se(e) ? b ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: p ? "var(--accent-primary)" : "var(--text-disabled)" }, children: Se(e) ? b ? /* @__PURE__ */ t(kt, { size: 11 }) : y ? /* @__PURE__ */ t(xe, { size: 11 }) : /* @__PURE__ */ t(Ra, { size: 11 }) : /* @__PURE__ */ t(dr, { size: 11 }) }),
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
              onChange: (N) => w(N.target.value),
              onClick: (N) => N.stopPropagation(),
              onKeyDown: (N) => {
                N.stopPropagation(), N.key === "Enter" ? f() : N.key === "Escape" && w(null);
              },
              onBlur: f,
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
        ) : /* @__PURE__ */ s(fe, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "truncate",
              style: { fontWeight: p ? 600 : 500 },
              onClick: (N) => N.stopPropagation(),
              onDoubleClick: (N) => {
                N.stopPropagation(), w(e.title);
              },
              title: "Double-click to rename",
              children: e.title || d("musiccreator.track.untitled")
            }
          ),
          e.styleTags && e.styleTags !== "—" && /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 9, color: "var(--text-disabled)" }, children: e.styleTags })
        ] }) }),
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? Re(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: S }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (N) => {
              N.stopPropagation(), N.shiftKey ? o(e) : N.altKey ? n(e.id) : r(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(mo, { size: 11 })
          }
        )
      ]
    }
  );
}
function Ju({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: o,
  onSaveSongToDesktop: n,
  onSaveLyricsToDesktop: l,
  onPlayInPlayer: d,
  onRename: y,
  onEditCover: m,
  onSelect: h,
  selected: w,
  player: p
}) {
  const { t: b } = Dt(), f = ee(null), [S, A] = k(!1), [N, j] = k(null), [_, C] = k(null), B = () => {
    if (_ === null) return;
    const $ = _.trim();
    C(null), $ && $ !== e.title && y(e.id, $);
  }, P = p.state.trackId === e.id, x = P && p.state.playing, L = P && p.state.durationMs > 0 ? p.state.positionMs / p.state.durationMs : 0;
  F(() => {
    if (!N) return;
    const $ = (Z) => {
      const Ce = Z.target;
      f.current && Ce && f.current.contains(Ce) || Ce && Ce.closest?.("[data-track-menu]") || j(null);
    }, D = () => j(null);
    return setTimeout(() => window.addEventListener("mousedown", $), 0), window.addEventListener("scroll", D, !0), window.addEventListener("resize", D), () => {
      window.removeEventListener("mousedown", $), window.removeEventListener("scroll", D, !0), window.removeEventListener("resize", D);
    };
  }, [N]);
  const z = () => {
    const $ = f.current?.getBoundingClientRect();
    if (!$) return;
    const D = 220, Z = Math.min($.right - D, window.innerWidth - D - 8), Ce = $.bottom + 4;
    j({ x: Math.max(8, Z), y: Ce });
  }, M = ($) => () => {
    j(null), $();
  }, q = () => p.toggle(e), Q = () => {
    const $ = document.createElement("a");
    $.href = e.audioDataUrl, $.download = `${e.title || "track"}.mp3`, $.click();
  };
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => A(!0),
      onMouseLeave: () => A(!1),
      draggable: !0,
      onDragStart: ($) => {
        const D = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: Se(e)
        };
        $.dataTransfer.setData(La, JSON.stringify(D)), e.lyricsPreview && $.dataTransfer.setData("text/plain", e.lyricsPreview), $.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => h?.(e),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: w ? "var(--bg-selected)" : S ? "var(--bg-hover)" : "transparent",
        border: w ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: h ? "pointer" : "grab"
      },
      title: h ? "Click to open in player · drag to other fields" : "Drag to Desktop, Cover field, Text Editor, or any text field",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          Se(e) ? /* @__PURE__ */ s(
            "button",
            {
              onClick: q,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: x ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(ot, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: yr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: x ? /* @__PURE__ */ t(kt, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(xe, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                title: b("musiccreator.track.lyricsOnly"),
                children: /* @__PURE__ */ t(dr, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
            _ !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: _,
                onChange: ($) => C($.target.value),
                onClick: ($) => $.stopPropagation(),
                onKeyDown: ($) => {
                  $.stopPropagation(), $.key === "Enter" ? B() : $.key === "Escape" && C(null);
                },
                onBlur: B,
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
                onDoubleClick: ($) => {
                  $.stopPropagation(), C(e.title);
                },
                title: "Double-click to rename",
                children: e.title || b("musiccreator.track.untitled")
              }
            ),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.durationMs > 0 ? Re(e.durationMs) : b("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: f,
              onClick: ($) => {
                $.stopPropagation(), N ? j(null) : z();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: S || N ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(mo, { size: 14 })
            }
          )
        ] }),
        N && Ma(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: N.x,
                top: N.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                Se(e) && /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: b("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(Ne, { icon: /* @__PURE__ */ t(Ra, { size: 14 }), label: b("musiccreator.track.playInPlayer"), onClick: M(() => d(e)) }),
                  /* @__PURE__ */ t(Ne, { icon: /* @__PURE__ */ t(bi, { size: 14 }), label: b("musiccreator.track.saveSongToDesktop"), onClick: M(() => n(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(Ne, { icon: /* @__PURE__ */ t(Qi, { size: 14 }), label: b("musiccreator.track.download"), onClick: M(Q) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ s(fe, { children: [
                  Se(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: b("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(Ne, { icon: /* @__PURE__ */ t(dr, { size: 14 }), label: b("musiccreator.track.openInEditor"), onClick: M(() => o(e)) }),
                  /* @__PURE__ */ t(Ne, { icon: /* @__PURE__ */ t(bi, { size: 14 }), label: b("musiccreator.track.saveLyricsToDesktop"), onClick: M(() => l(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(Ne, { icon: /* @__PURE__ */ t(en, { size: 14 }), label: "Rename", onClick: M(() => C(e.title)) }),
                /* @__PURE__ */ t(Ne, { icon: /* @__PURE__ */ t(Ia, { size: 14 }), label: "Edit cover art", onClick: M(() => m(e)) }),
                /* @__PURE__ */ t(Ne, { icon: /* @__PURE__ */ t(Rt, { size: 14 }), label: b("musiccreator.track.loadIntoForm"), onClick: M(() => r(e)) }),
                /* @__PURE__ */ t(Ne, { icon: /* @__PURE__ */ t(jt, { size: 14 }), label: b("musiccreator.track.delete"), onClick: M(() => a(e.id)), danger: !0 })
              ]
            }
          ),
          document.body
        ),
        x && /* @__PURE__ */ t(
          "div",
          {
            className: "mt-1.5 rounded-full overflow-hidden",
            style: { height: 2, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${L * 100}%`,
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
function Gu({
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
            /* @__PURE__ */ t(ot, { track: l, size: 68, iconSize: 20, radius: 6 }),
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
function Vu({
  track: e,
  player: a,
  selected: r,
  isFavorite: o,
  onOpenInPlayer: n,
  onRemix: l,
  onToggleFavorite: d,
  onRemove: y,
  selectMode: m = !1,
  checked: h = !1,
  onToggleCheck: w
}) {
  const p = ee(null), [b, f] = k(!1), [S, A] = k(null), N = a.state.trackId === e.id, j = N && a.state.loadingTrackId === e.id, _ = N && a.state.playing, C = N && a.state.durationMs > 0 ? a.state.positionMs / a.state.durationMs : 0;
  F(() => {
    if (!S) return;
    const z = (q) => {
      const Q = q.target;
      p.current && Q && p.current.contains(Q) || Q && Q.closest?.("[data-track-menu]") || A(null);
    }, M = () => A(null);
    return setTimeout(() => window.addEventListener("mousedown", z), 0), window.addEventListener("scroll", M, !0), window.addEventListener("resize", M), () => {
      window.removeEventListener("mousedown", z), window.removeEventListener("scroll", M, !0), window.removeEventListener("resize", M);
    };
  }, [S]);
  const B = () => {
    const z = p.current?.getBoundingClientRect();
    if (!z) return;
    const M = 220, q = Math.min(z.right - M, window.innerWidth - M - 8), Q = z.bottom + 4;
    A({ x: q, y: Q });
  }, P = (z) => () => {
    A(null), z();
  }, x = e.externalUrl;
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      onClick: m ? () => {
        w && w(e);
      } : void 0,
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: m && h || r ? "var(--bg-selected)" : b ? "var(--bg-hover)" : "transparent",
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
              children: h ? /* @__PURE__ */ t(rn, { size: 20 }) : /* @__PURE__ */ t(on, { size: 20 })
            }
          ) : /* @__PURE__ */ s(
            "button",
            {
              onClick: (z) => {
                z.stopPropagation(), a.toggle(e);
              },
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105",
              style: { width: 36, height: 36 },
              title: _ ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(ot, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: yr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: j ? /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin", style: { color: "white" } }) : _ ? /* @__PURE__ */ t(kt, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(xe, { size: 14, style: { color: "white", marginLeft: 1 } })
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
              e.durationMs > 0 ? ` · ${Re(e.durationMs)}` : ""
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
                  e.durationMs > 0 ? ` · ${Re(e.durationMs)}` : ""
                ] })
              ]
            }
          ),
          !m && /* @__PURE__ */ t(
            "button",
            {
              ref: p,
              onClick: (z) => {
                z.stopPropagation(), S ? A(null) : B();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: b || S ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(mo, { size: 14 })
            }
          )
        ] }),
        S && Ma(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: S.x,
                top: S.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                /* @__PURE__ */ t(
                  Ne,
                  {
                    icon: _ ? /* @__PURE__ */ t(kt, { size: 14 }) : /* @__PURE__ */ t(xe, { size: 14 }),
                    label: _ ? "Pause" : "Play",
                    onClick: P(() => a.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Ne,
                  {
                    icon: /* @__PURE__ */ t(Ra, { size: 14 }),
                    label: "Open in player",
                    onClick: P(() => n(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Ne,
                  {
                    icon: /* @__PURE__ */ t(Pt, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: P(() => l(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Ne,
                  {
                    icon: /* @__PURE__ */ t(cr, { size: 14, fill: o ? "currentColor" : "none" }),
                    label: o ? "Remove favorite" : "Add to favorites",
                    onClick: P(() => d(e))
                  }
                ),
                x && /* @__PURE__ */ t(
                  Ne,
                  {
                    icon: /* @__PURE__ */ t(Zi, { size: 14 }),
                    label: "Open source",
                    onClick: P(() => window.open(x, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Ne,
                  {
                    icon: /* @__PURE__ */ t(jt, { size: 14 }),
                    label: "Remove from Library",
                    onClick: P(() => y(e)),
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
                  width: `${C * 100}%`,
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
function Ku({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: o
}) {
  const [n, l] = k(e.coverDataUrl), [d, y] = k(""), [m, h] = k(!1), [w, p] = k(null), b = ee(null), f = ee(null), S = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), A = lr(S, "", e.styleTags || "");
  F(() => {
    const _ = (C) => {
      C.key === "Escape" && (C.stopPropagation(), o());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [o]), F(() => () => f.current?.abort(), []);
  const N = async () => {
    if (!a) {
      p("Connect to a pod to generate cover art.");
      return;
    }
    if (!a.models.image) {
      p(`This endpoint (${a.label}) has no image model. Pick one in JULI3TA Settings → Cover art.`);
      return;
    }
    if (m) return;
    f.current?.abort(), f.current = new AbortController();
    const _ = f.current.signal;
    h(!0), p(null);
    try {
      const C = (d.trim() || A).slice(0, 1500), B = await po(a, C, _);
      if (_.aborted) return;
      l(B);
    } catch (C) {
      if (C.name === "AbortError") return;
      p(C.message || "Cover-art generation failed.");
    } finally {
      h(!1);
    }
  }, j = (_) => {
    if (p(null), !_.type.startsWith("image/")) {
      p("That file is not an image.");
      return;
    }
    if (_.size > 4 * 1024 * 1024) {
      p("Image is too big (limit 4 MB).");
      return;
    }
    const C = new FileReader();
    C.onerror = () => p("Could not read that image."), C.onload = () => {
      const B = C.result;
      typeof B == "string" && l(B);
    }, C.readAsDataURL(_);
  };
  return Ma(
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
                    /* @__PURE__ */ t(Ia, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ s("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: [
                      "Cover Art — ",
                      S || "Untitled"
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: o,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close",
                        children: /* @__PURE__ */ t(be, { size: 14 })
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
                        !n && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Ia, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
                        m && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(oe, { size: 24, className: "animate-spin", style: { color: "white" } }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col gap-2 min-w-0", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: N,
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
                          m ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(ql, { size: 12 }),
                          n ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => b.current?.click(),
                        disabled: m,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(go, { size: 12 }),
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
                          /* @__PURE__ */ t(be, { size: 12 }),
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
                      onChange: (_) => y(_.target.value),
                      placeholder: A,
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
                w && /* @__PURE__ */ s(
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
                      /* @__PURE__ */ t(za, { size: 12, style: { flexShrink: 0 } }),
                      w
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
                  ref: b,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (_) => {
                    const C = _.target.files?.[0];
                    C && j(C), _.target.value = "";
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
function ir({ label: e, children: a }) {
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
function Yu({
  songName: e,
  mode: a,
  theme: r,
  style: o,
  intent: n,
  lyrics: l,
  specs: d,
  coverDataUrl: y,
  endpoint: m,
  busy: h,
  onRegenerate: w,
  onUpload: p,
  onClear: b,
  onClose: f
}) {
  const S = ee(null), A = me(() => wo(d), [d]), N = me(() => ea(d), [d]);
  F(() => {
    const C = (B) => {
      B.key === "Escape" && (B.stopPropagation(), f());
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [f]);
  const j = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", _ = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Ma(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.6)" },
        onClick: f,
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
            onClick: (C) => C.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3 flex-shrink-0",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(Mt, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                        children: j
                      }
                    ),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: f,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(be, { size: 14 })
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
                      background: y ? `url(${y}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "var(--shadow-md)"
                    },
                    children: [
                      !y && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Ia, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
                      h && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(oe, { size: 28, className: "animate-spin", style: { color: "white" } }) })
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
                        onClick: w,
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
                          h ? /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(rt, { size: 11 }),
                          y ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: () => S.current?.click(),
                        disabled: h,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(go, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    y && /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: b,
                        disabled: h,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(be, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  r.trim() && /* @__PURE__ */ t(ir, { label: "Theme", children: r.trim() }),
                  n.trim() && /* @__PURE__ */ t(ir, { label: "Lyrics Direction", children: n.trim() }),
                  N > 0 && A && /* @__PURE__ */ t(ir, { label: `Track Specs (${N} set)`, children: A }),
                  l.trim() && /* @__PURE__ */ t(ir, { label: "Lyrics", children: /* @__PURE__ */ t(
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
                  !r.trim() && !n.trim() && N === 0 && !l.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: S,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (C) => {
                    const B = C.target.files?.[0];
                    B && p(B), C.target.value = "";
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
function Xu(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function Qu(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function Zu(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function ep(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function tp(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: te(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: te(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: te(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: te(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: te(e.tonal.mode) }), o.length && a.push({ label: "Tonal", rows: o });
  const n = [];
  if (e.instrumentation?.primary_instruments?.length && n.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(te).join(", ") }), e.instrumentation?.has_vocals === !1)
    n.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const m = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && m.push(te(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && m.push(e.instrumentation.vocal_style.map(te).join("/")), n.push({ label: "Vocals", value: m.length ? m.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && n.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(te).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && n.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), n.length && a.push({ label: "Instrumentation", rows: n });
  const l = [];
  e.dynamics?.overall_dynamic_range && l.push({ label: "Range", value: te(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && l.push({ label: "Crescendo", value: te(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && l.push({ label: "Big drops", value: "Yes" }), l.length && a.push({ label: "Dynamics", rows: l });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: te(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(te).join(", ") }), d.length && a.push({ label: "Mood", rows: d });
  const y = [];
  return e.context?.era_reference && y.push({ label: "Era", value: te(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && y.push({ label: "Region", value: te(e.context.cultural_region) }), e.context?.intended_use?.length && y.push({ label: "Use", value: e.context.intended_use.map(te).join("/") }), e.context?.explicit_lyrics && y.push({ label: "Explicit", value: "Yes" }), y.length && a.push({ label: "Context", rows: y }), a;
}
function tt({ label: e, value: a }) {
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
function Lt({ label: e, children: a }) {
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
function Mn({
  base64: e,
  src: a,
  onPlay: r,
  title: o = "Preview reference audio",
  height: n = 30,
  style: l
}) {
  const d = me(() => e || yu(a), [e, a]), y = me(
    () => d ? bu(d) : null,
    [d]
  ), [m, h] = k(null), [w, p] = k(null);
  F(() => {
    if (p(null), !d) {
      h(null);
      return;
    }
    let A = null;
    try {
      A = URL.createObjectURL(fu(d)), h(A);
    } catch {
      h(null);
    }
    return () => {
      A && URL.revokeObjectURL(A);
    };
  }, [d]);
  const b = (A) => {
    Number.isFinite(A.duration) && A.duration > 0.1 && p(A.duration * 1e3);
  }, f = w ?? y;
  return /* @__PURE__ */ s("div", { style: l, children: [
    /* @__PURE__ */ t(
      "audio",
      {
        controls: !0,
        preload: "metadata",
        src: m || a || "",
        onLoadedMetadata: (A) => b(A.currentTarget),
        onDurationChange: (A) => b(A.currentTarget),
        onPlay: r,
        style: { width: "100%", height: n },
        title: o
      }
    ),
    f && f > 0 && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: [
      "Reference preview · ",
      Re(f)
    ] })
  ] });
}
function ap({
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
          Mn,
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
function rp(e, a, r, o) {
  if (!e || a.length === 0) return null;
  if (o === "one") return { kind: "repeating" };
  const n = a.filter(Se);
  if (n.length === 0) return null;
  if (r) return { kind: "random" };
  const l = n.findIndex((d) => d.id === e);
  return l < 0 ? null : l + 1 < n.length ? { kind: "track", track: n[l + 1] } : o === "all" ? { kind: "track", track: n[0] } : { kind: "end" };
}
function op({ text: e }) {
  const [a, r] = k(!1);
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
        a ? /* @__PURE__ */ t(ta, { size: 11 }) : /* @__PURE__ */ t(Xi, { size: 11 }),
        a ? "Copied" : "Copy"
      ]
    }
  );
}
const ip = /^\s*\[([^\]]+)\]\s*$/;
function np({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, o) => {
    const n = r.match(ip);
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
function sp({ track: e, player: a, restyleOriginal: r, onEditInCreator: o, onSwitchToCreator: n, onSearchMusic: l }) {
  const { t: d } = Dt(), y = e?.specsJson ?? "", m = me(() => {
    if (!y) return {};
    try {
      return JSON.parse(y);
    } catch {
      return {};
    }
  }, [y]), h = (m.intent ?? "").trim(), w = me(() => tp(m), [m]);
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
            /* @__PURE__ */ t(rt, { size: 13 }),
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
            /* @__PURE__ */ t(gt, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const p = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", b = Se(e), f = yr(e), S = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", A = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", N = a.state.trackId === e.id, j = N && a.state.playing, _ = N && a.state.loadingTrackId === e.id, C = e.source === "youtube", B = a.queue.filter((P) => P.id !== e.id && (P.artist || "").trim() && P.artist === e.artist).slice(0, 4);
  return /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden relative", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ s("div", { className: "flex-shrink-0 relative overflow-hidden", children: [
      /* @__PURE__ */ t(
        "div",
        {
          "aria-hidden": !0,
          className: "absolute inset-0",
          style: {
            background: f ? `url(${f}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
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
              b && a.toggle(e);
            },
            disabled: !b,
            className: "rounded-lg overflow-hidden flex-shrink-0 relative group disabled:cursor-not-allowed",
            style: {
              width: 220,
              height: 220,
              background: f ? `url(${f}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              cursor: b ? "pointer" : "default"
            },
            title: b ? N && j ? "Pause" : "Play" : "Lyric sheet — no audio",
            children: [
              !f && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(
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
              b && /* @__PURE__ */ t(
                "div",
                {
                  className: "absolute inset-0 flex items-center justify-center transition-opacity",
                  style: {
                    background: "rgba(0,0,0,0.35)",
                    opacity: N && j ? 0 : 1
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
                      children: N && j ? /* @__PURE__ */ t(kt, { size: 30, style: { color: "white" } }) : _ ? /* @__PURE__ */ t(oe, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(xe, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                b ? /* @__PURE__ */ t(xe, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(Rt, { size: 10 }),
                C ? "YouTube track" : d(b ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
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
                /* @__PURE__ */ t(yo, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: S }),
                e.source === "youtube" && e.album && e.album !== S && /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                A && /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: A })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: Re(e.durationMs) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "mt-5 flex items-center gap-3 flex-wrap", children: [
            b && /* @__PURE__ */ t(
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
                title: N && j ? "Pause" : "Play",
                children: _ ? /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t(oe, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : N && j ? /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t(kt, { size: 16 }),
                  " ",
                  d("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ s(fe, { children: [
                  /* @__PURE__ */ t(xe, { size: 16, style: { marginLeft: 2 } }),
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
                  /* @__PURE__ */ t(Pt, { size: 13 }),
                  d("musiccreator.player.remixInRestyle")
                ]
              }
            ),
            e.audioDataUrl && b && /* @__PURE__ */ s(
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
                  /* @__PURE__ */ t(Qi, { size: 13 }),
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
              e.lyricsPreview && /* @__PURE__ */ t(op, { text: e.lyricsPreview })
            ]
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(np, { text: e.lyricsPreview }) : C ? /* @__PURE__ */ s(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Bl, { size: 18 }) }),
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
                  /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.durationMs ? Re(e.durationMs) : "Unknown" })
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
                    /* @__PURE__ */ t(Zi, { size: 13 }),
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
              /* @__PURE__ */ t(Rt, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: d("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        r && r.trackId === e.id && /* @__PURE__ */ t(
          ap,
          {
            audioSrc: r.audioSrc,
            sourceLabel: r.sourceLabel,
            onUserPlay: () => {
              a.state.playing && a.pause();
            }
          }
        ),
        e.id === a.state.trackId && (() => {
          const P = rp(
            a.state.trackId,
            a.queue,
            a.state.shuffle,
            a.state.repeatMode
          );
          return P ? /* @__PURE__ */ s(Lt, { label: "Up next", children: [
            P.kind === "track" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ t(ot, { track: P.track, size: 32, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: P.track.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: P.track.artist || (P.track.styleTags && P.track.styleTags !== "—" ? P.track.styleTags : "JULI3TA") })
              ] })
            ] }),
            P.kind === "random" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(ho, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Random next track from your queue." })
            ] }),
            P.kind === "repeating" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(tn, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Repeating this track." })
            ] }),
            P.kind === "end" && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-disabled)" }, children: "End of queue." })
          ] }) : null;
        })(),
        e.theme.trim() && /* @__PURE__ */ t(Lt, { label: d("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        h && /* @__PURE__ */ t(Lt, { label: d("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: h }) }),
        w.map((P) => /* @__PURE__ */ t(Lt, { label: P.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: P.rows.map((x) => /* @__PURE__ */ t(tt, { label: x.label, value: x.value }, `${P.label}-${x.label}`)) }) }, P.label)),
        C && /* @__PURE__ */ t(Lt, { label: "Artist / Source", children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(oc, { size: 20 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        B.length > 0 && /* @__PURE__ */ t(Lt, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: B.map((P) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => a.select(P),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(ot, { track: P, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: P.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: P.durationMs ? Re(P.durationMs) : "Streamed" })
              ] })
            ]
          },
          P.id
        )) }) }),
        /* @__PURE__ */ t(Lt, { label: d("musiccreator.player.about"), children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(tt, { label: d("musiccreator.player.about.created"), value: ep(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(tt, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(tt, { label: "Channel", value: e.album }),
          b && e.durationMs > 0 && /* @__PURE__ */ t(tt, { label: d("musiccreator.player.about.duration"), value: Re(e.durationMs) }),
          e.source !== "youtube" && b && e.bitrate > 0 && /* @__PURE__ */ t(tt, { label: d("musiccreator.player.about.bitrate"), value: Qu(e.bitrate) }),
          e.source !== "youtube" && b && e.sampleRate > 0 && /* @__PURE__ */ t(tt, { label: d("musiccreator.player.about.sampleRate"), value: Zu(e.sampleRate) }),
          e.source !== "youtube" && b && e.sizeBytes > 0 && /* @__PURE__ */ t(tt, { label: d("musiccreator.player.about.size"), value: Xu(e.sizeBytes) }),
          A && /* @__PURE__ */ t(tt, { label: d("musiccreator.player.about.style"), value: A }),
          /* @__PURE__ */ t(tt, { label: d("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : d(b ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function lp({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: o,
  searchHistory: n,
  onClearSearchHistory: l,
  resultType: d,
  onResultTypeChange: y,
  results: m,
  busy: h,
  error: w,
  status: p,
  providers: b,
  connectors: f,
  libraryTracks: S,
  playlists: A,
  playlistNameDraft: N,
  playlistBusy: j,
  favoriteIds: _,
  warmupIds: C,
  previewBusyId: B,
  addBusyId: P,
  savedYoutubeIds: x,
  player: L,
  onWarmResult: z,
  onPreview: M,
  onAdd: q,
  onOpenTrack: Q,
  onToggleFavorite: he,
  onRemoveLibraryTrack: $,
  onPlaylistNameDraftChange: D,
  onCreatePlaylist: Z,
  onAddTrackToPlaylist: Ce,
  onRemoveTrackFromPlaylist: br,
  onPlayPlaylist: je,
  onDeletePlaylist: Ut,
  onConfigureConnector: Te,
  onDisconnectConnector: ja,
  onClose: se
}) {
  const [ve, nt] = k(null), [St, $e] = k({}), [Tt, qe] = k(!1), [Pe, Je] = k(null), [Ae, Ee] = k(null), [yt, Ge] = k(null);
  F(() => {
    Ee(null), Ge(null);
  }, [e]);
  const st = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(S.map((g) => g.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(S.map((g) => g.album || g.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: A.length },
    { id: "sources", label: "Sources", count: b.length || 4 }
  ], De = (g) => {
    const R = L.state.trackId === g.id, J = R && L.state.loadingTrackId === g.id, de = R && L.state.playing;
    return /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(ot, { track: g, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ s("button", { type: "button", onClick: () => Q(g), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: g.title }),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              g.artist || "Unknown",
              g.album ? ` · ${g.album}` : "",
              g.durationMs ? ` · ${Re(g.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => he(g),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: _.has(g.id) ? "white" : "var(--text-secondary)",
                background: _.has(g.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: _.has(g.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(cr, { size: 13, fill: _.has(g.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => L.toggle(g),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                J ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : de ? /* @__PURE__ */ t(kt, { size: 12 }) : /* @__PURE__ */ t(xe, { size: 12 }),
                J ? "Loading" : de ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => $(g),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t(jt, { size: 13 })
            }
          )
        ]
      },
      g.id
    );
  }, Ue = Array.from(
    S.reduce((g, R) => {
      const J = (R.artist || "Unknown artist").trim();
      return g.set(J, [...g.get(J) ?? [], R]), g;
    }, /* @__PURE__ */ new Map())
  ).sort((g, R) => g[0].localeCompare(R[0])), Ot = Array.from(
    S.reduce((g, R) => {
      const J = (R.album || R.artist || "YouTube collection").trim();
      return g.set(J, [...g.get(J) ?? [], R]), g;
    }, /* @__PURE__ */ new Map())
  ).sort((g, R) => g[0].localeCompare(R[0])), Fe = b.length > 0 ? b.map((g) => {
    const R = f.find((_t) => _t.provider === g.id), J = R?.connected ?? g.configured, de = R?.oauthRequired ?? g.state === "oauth_required";
    return {
      id: g.id,
      name: g.name,
      state: J ? "Connected" : de ? "OAuth required" : g.state.replace(/_/g, " "),
      body: R?.message ?? g.message,
      action: J ? "Manage" : de ? "Coming soon" : "Configure",
      enabled: J,
      needs: g.needs,
      kind: g.kind,
      connector: R,
      oauthRequired: de,
      configurable: R?.configurable ?? !de
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
      connector: f.find((g) => g.provider === "spotify"),
      oauthRequired: !0,
      configurable: !1
    },
    {
      id: "lastfm",
      name: "Last.fm",
      state: f.find((g) => g.provider === "lastfm")?.connected ? "Connected" : "Metadata connector",
      body: "Artist bios, tags and now-playing style metadata. API key required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["apiKey"],
      kind: "metadata",
      connector: f.find((g) => g.provider === "lastfm"),
      oauthRequired: !1,
      configurable: !0
    },
    {
      id: "discogs",
      name: "Discogs",
      state: f.find((g) => g.provider === "discogs")?.connected ? "Connected" : "Metadata connector",
      body: "Release/catalog metadata and album artwork. Token required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["token"],
      kind: "catalog",
      connector: f.find((g) => g.provider === "discogs"),
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
              onClick: se,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(be, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: st.map((g) => /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => a(g.id),
          className: "rounded-lg px-3 transition-all",
          style: {
            height: 30,
            fontSize: 12,
            fontWeight: e === g.id ? 800 : 600,
            color: e === g.id ? "white" : "var(--text-secondary)",
            background: e === g.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)"
          },
          children: [
            g.label,
            typeof g.count == "number" ? ` · ${g.count}` : ""
          ]
        },
        g.id
      )) }),
      e === "search" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-xl px-4", style: { height: 44, background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
        /* @__PURE__ */ t(gt, { size: 16, style: { color: "var(--text-disabled)" } }),
        /* @__PURE__ */ t(
          "input",
          {
            value: r,
            onChange: (g) => o(g.target.value),
            placeholder: "Search music, artists, albums…",
            className: "flex-1 bg-transparent outline-none",
            style: { color: "var(--text-primary)", fontSize: 14, fontWeight: 600 },
            autoFocus: !0
          }
        ),
        h && /* @__PURE__ */ t(oe, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(be, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((g) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => y(g),
          className: "rounded-lg px-3 transition-all",
          style: {
            height: 28,
            fontSize: 11,
            fontWeight: d === g ? 900 : 700,
            color: d === g ? "white" : "var(--text-secondary)",
            background: d === g ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)",
            textTransform: "capitalize"
          },
          children: g
        },
        g
      )) }) }),
      e === "search" && r.trim().length < 2 && n.length > 0 && /* @__PURE__ */ s("div", { className: "mt-3 flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.7, fontWeight: 800 }, children: "Recent" }),
        n.map((g) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => o(g),
            className: "rounded-lg px-3 transition-all hover:bg-[var(--bg-hover)]",
            style: {
              height: 26,
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-secondary)",
              background: "var(--bg-titlebar)",
              border: "1px solid var(--border-subtle)"
            },
            title: `Search for "${g}"`,
            children: g
          },
          g
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
            children: /* @__PURE__ */ t(be, { size: 11 })
          }
        )
      ] }),
      w && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: w })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
        r.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        r.trim().length >= 2 && !h && m.length === 0 && !w && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        h && m.length === 0 && Array.from({ length: 5 }).map((g, R) => /* @__PURE__ */ s(
          "div",
          {
            className: "flex items-center gap-3 rounded-xl px-3 py-2",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", opacity: 0.78 },
            children: [
              /* @__PURE__ */ t("div", { className: "animate-pulse", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "var(--bg-hover)" } }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 12, width: `${70 - R * 6}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)" } }),
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 10, width: `${45 - R * 4}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)", marginTop: 8 } })
              ] }),
              /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${R}`
        )),
        m.map((g) => {
          const R = zn(g.title, g.channel), J = x.has(g.id), de = B === g.id, _t = P === g.id, Ht = C.has(g.id);
          return /* @__PURE__ */ s(
            "div",
            {
              onMouseEnter: () => z(g),
              onFocus: () => z(g),
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                g.thumbnailUrl || mr(g.id) ? /* @__PURE__ */ t("img", { src: g.thumbnailUrl || mr(g.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Ra, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: R.song }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    R.artist || g.channel || "Music",
                    g.durationMs ? ` · ${Re(g.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: g.title })
                ] }),
                Ht && !de && /* @__PURE__ */ s("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(oe, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => M(g),
                    disabled: de,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      de ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(xe, { size: 12 }),
                      de ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => q(g),
                    disabled: J || _t,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: J ? "var(--text-disabled)" : "white", background: J ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      _t ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : J ? /* @__PURE__ */ t(ta, { size: 12 }) : /* @__PURE__ */ t(io, { size: 12 }),
                      _t ? "Adding" : J ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            g.id
          );
        })
      ] }),
      e === "artists" && (Ae !== null ? (() => {
        const g = Ue.find(([R]) => R === Ae)?.[1] ?? [];
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
                title: "Back to all artists",
                children: [
                  /* @__PURE__ */ t(yi, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Ae }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                g.length,
                " track",
                g.length === 1 ? "" : "s",
                " in your Library"
              ] })
            ] }),
            g[0] && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Q(g[0]),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(xe, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: g.map(De) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Ue.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Ue.map(([g, R]) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => Ee(g),
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            title: `Open ${g}`,
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: g }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                R.length,
                " track",
                R.length === 1 ? "" : "s"
              ] })
            ]
          },
          g
        ))
      ] })),
      e === "albums" && (yt !== null ? (() => {
        const R = Ot.find(([de]) => de === yt)?.[1] ?? [], J = R[0];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Ge(null),
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
                  /* @__PURE__ */ t(yi, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            J && /* @__PURE__ */ t(ot, { track: J, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: yt }),
              /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                J?.artist || "Mixed artists",
                " · ",
                R.length,
                " track",
                R.length === 1 ? "" : "s"
              ] })
            ] }),
            J && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Q(J),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(xe, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: R.map(De) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        Ot.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        Ot.map(([g, R]) => {
          const J = R[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => Ge(g),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${g}`,
              children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                J && /* @__PURE__ */ t(ot, { track: J, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ s("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: g }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    J?.artist || "Mixed artists",
                    " · ",
                    R.length,
                    " track",
                    R.length === 1 ? "" : "s"
                  ] })
                ] })
              ] })
            },
            g
          );
        })
      ] })),
      e === "playlists" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ t("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(El, { size: 22 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: N,
              onChange: (g) => D(g.target.value),
              onKeyDown: (g) => {
                g.key === "Enter" && Z();
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
              onClick: Z,
              disabled: j,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                j ? /* @__PURE__ */ t(oe, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(io, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        A.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : A.map((g) => /* @__PURE__ */ s("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-3 mb-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: g.name }),
              /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 3 }, children: [
                g.items.length,
                " track",
                g.items.length === 1 ? "" : "s"
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => je(g),
                  disabled: g.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(xe, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => Ut(g.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(jt, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: g.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : g.items.map((R) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(ot, { track: R, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ s("button", { type: "button", onClick: () => Q(R), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: R.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: R.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => br(g.id, R.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(be, { size: 13 })
              }
            )
          ] }, `${g.id}-${R.id}`)) }),
          S.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: S.slice(0, 8).filter((R) => !g.items.some((J) => J.id === R.id)).map((R) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => Ce(g.id, R),
              className: "rounded-full px-3",
              style: { height: 28, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              children: [
                "+ ",
                R.title.slice(0, 28)
              ]
            },
            `${g.id}-add-${R.id}`
          )) })
        ] }, g.id))
      ] }),
      e === "sources" && /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        Fe.map((g) => /* @__PURE__ */ s(
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
                    style: { width: 46, height: 46, color: "white", background: g.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: g.name === "Spotify" ? "♬" : g.name === "YouTube" ? /* @__PURE__ */ t(xe, { size: 18 }) : g.kind === "catalog" ? /* @__PURE__ */ t(nl, { size: 18 }) : /* @__PURE__ */ t(Mt, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: g.name }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 11, color: g.enabled ? "var(--status-success)" : "var(--text-secondary)", marginTop: 2 }, children: g.state }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.45, marginTop: 10 }, children: g.body })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const R = g.connector?.credentialSpecs ?? g.needs.map((J) => ({ name: J, label: J, secret: !0, required: !0 }));
                      $e({}), Je(null), nt({
                        id: g.id,
                        name: g.name,
                        body: g.body,
                        specs: R,
                        oauthRequired: g.oauthRequired,
                        configurable: g.configurable,
                        connected: g.enabled
                      });
                    },
                    className: "rounded-lg px-3 disabled:opacity-50",
                    style: { height: 30, fontSize: 11, fontWeight: 800, color: g.enabled ? "white" : "var(--text-secondary)", background: g.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: g.action
                  }
                ),
                g.connector?.account && /* @__PURE__ */ s("span", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                  "@",
                  g.connector.account
                ] })
              ] })
            ]
          },
          g.name
        )),
        ve && /* @__PURE__ */ s("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                ve.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: ve.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => nt(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(be, { size: 16 }) })
          ] }),
          ve.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ s(fe, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: ve.specs.map((g) => /* @__PURE__ */ s("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: g.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: g.label || g.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: St[g.name] ?? "",
                  type: g.secret ? "password" : "text",
                  onChange: (R) => $e((J) => ({ ...J, [g.name]: R.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: g.name
                }
              )
            ] }, g.name)) }),
            Pe && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: Pe }),
            /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  disabled: Tt || !ve.configurable,
                  onClick: () => {
                    qe(!0), Je(null), Te(ve.id, St).then(() => {
                      $e({}), nt(null);
                    }).catch((g) => Je(g.message || "Connector setup failed.")).finally(() => qe(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Tt ? /* @__PURE__ */ t(oe, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(ta, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              ve.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Tt,
                  onClick: () => {
                    qe(!0), Je(null), ja(ve.id).then(() => nt(null)).catch((g) => Je(g.message || "Disconnect failed.")).finally(() => qe(!1));
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
const Ca = {
  theme: !1,
  style: !1,
  lyrics: !1,
  specs: !1,
  cover: !1
}, cp = {
  theme: null,
  style: null,
  lyrics: null,
  specs: null,
  cover: null
}, Aa = (e) => e?.name === "AbortError";
function dp() {
  const e = vc(), { t: a } = Dt(), r = wc(), o = _c(), { state: n, dispatch: l } = ln(), { addNotification: d } = Ac(), y = n.theme.mode, [m, h] = k("compose"), [w, p] = k(!1), [b, f] = k("creator"), [S, A] = k(() => {
    try {
      const i = localStorage.getItem("juli3ta:selectedPlayerTrackId");
      return i && i.length > 0 ? i : null;
    } catch {
      return null;
    }
  });
  F(() => {
    try {
      S ? localStorage.setItem("juli3ta:selectedPlayerTrackId", S) : localStorage.removeItem("juli3ta:selectedPlayerTrackId");
    } catch {
    }
  }, [S]);
  const [N, j] = k(""), [_, C] = k(""), [B, P] = k(null), [x, L] = k(""), [z, M] = k(""), [q, Q] = k(!1), [he, $] = k(""), [D, Z] = k(""), [Ce, br] = k(!0), [je, Ut] = k(!1), [Te, ja] = k(null), [se, ve] = k({}), [nt, St] = k(!1), [$e, Tt] = k(() => ({ ...Ca })), qe = ee({ ...Ca }), Pe = ee({ ...cp }), Je = E((i, c) => {
    qe.current = { ...qe.current, [i]: c }, Tt((u) => u[i] === c ? u : { ...u, [i]: c });
  }, []), Ae = E((i) => {
    if (qe.current[i]) return null;
    Pe.current[i]?.abort();
    const c = new AbortController();
    return Pe.current[i] = c, Je(i, !0), c;
  }, [Je]), Ee = E((i, c) => {
    Pe.current[i] === c && (Pe.current[i] = null), Je(i, !1);
  }, [Je]), yt = E(() => {
    Object.keys(Pe.current).forEach((i) => {
      Pe.current[i]?.abort(), Pe.current[i] = null;
    }), qe.current = { ...Ca }, Tt({ ...Ca }), Ut(!1), St(!1);
  }, []), [Ge, st] = k(null), [De, Ue] = k(null), [Ot, Fe] = k(null), [g, R] = k(!1), [J, de] = k(!1), [_t, Ht] = k(!1), [vr, xr] = k([]), So = ee(null), To = ee(null), [wr, _o] = k(!1), [Ve, No] = k("best"), [Rn, jn] = k(null), [Pn, Pa] = k(!1), [lt, Co] = k("mic"), [Ke, kr] = k(!1), [Ao, Eo] = k(0), [Lo, sa] = k(null), zo = ee(null), Da = ee([]), $t = ee(null), Sr = ee(0), la = ee(null), [Ft, Be] = k("idle"), [ca, V] = k(null), [Dn, Bt] = k(0), [Io, Mo] = k(0), [Nt, Oe] = k([]), [Wt, ie] = k(null), [Le, Ro] = k(""), [da, jo] = k("cards"), [ge, Po] = k(() => {
    try {
      return localStorage.getItem("juli3ta:sidebarTab") === "library" ? "library" : "mywork";
    } catch {
      return "mywork";
    }
  }), [He, Un] = k(() => {
    try {
      const i = localStorage.getItem("juli3ta:myWorkChip");
      if (i === "all" || i === "songs" || i === "restyles" || i === "lyrics") return i;
    } catch {
    }
    return "all";
  }), [ct, Do] = k(() => {
    try {
      return localStorage.getItem("juli3ta:libraryChip") === "favorites" ? "favorites" : "all";
    } catch {
      return "all";
    }
  });
  F(() => {
    try {
      localStorage.setItem("juli3ta:sidebarTab", ge);
    } catch {
    }
  }, [ge]), F(() => {
    try {
      localStorage.setItem("juli3ta:myWorkChip", He);
    } catch {
    }
  }, [He]), F(() => {
    try {
      localStorage.setItem("juli3ta:libraryChip", ct);
    } catch {
    }
  }, [ct]);
  const [Ua, On] = k(() => {
    try {
      const i = localStorage.getItem("juli3ta:recentlyPlayedIds"), c = i ? JSON.parse(i) : null;
      return Array.isArray(c) ? c.filter((u) => typeof u == "string").slice(0, 8) : [];
    } catch {
      return [];
    }
  });
  F(() => {
    try {
      localStorage.setItem("juli3ta:recentlyPlayedIds", JSON.stringify(Ua));
    } catch {
    }
  }, [Ua]);
  const [Ct, Tr] = k(!1), [dt, Oa] = k(() => /* @__PURE__ */ new Set()), [_r, Nr] = k(!1), [ut, ze] = k(!1), [Hn, ua] = k("search"), [Cr, $n] = k(""), [Fn, Uo] = k(() => {
    try {
      const i = localStorage.getItem("juli3ta:searchHistory"), c = i ? JSON.parse(i) : null;
      return Array.isArray(c) ? c.filter((u) => typeof u == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), Oo = E((i) => {
    const c = i.trim();
    c.length < 2 || Uo((u) => {
      const v = [c, ...u.filter((T) => T.toLowerCase() !== c.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(v));
      } catch {
      }
      return v;
    });
  }, []), [pa, Bn] = k("tracks"), [Wn, Ar] = k([]), [qn, Ha] = k(!1), [Jn, pt] = k(null), [Gn, Ho] = k(null), [Vn, $o] = k([]), [Kn, Fo] = k([]), [ma, Yn] = k({}), [Xn, Bo] = k(() => /* @__PURE__ */ new Set()), [Qn, Wo] = k(null), [Zn, qo] = k(null), [Jo, Go] = k([]), [ye, Er] = k([]), [qt, Lr] = k(() => /* @__PURE__ */ new Set()), [ha, Jt] = k([]), [Vo, es] = k(!1), [zr, Ko] = k(""), [ts, Yo] = k(!1), Xo = ee(/* @__PURE__ */ new Map()), Ir = ee(/* @__PURE__ */ new Map()), Gt = ee(ma), Mr = ee(/* @__PURE__ */ new Map()), [$a, ga] = k(null), [Fa, Qo] = k(!1), [Rr, Zo] = k(pn), [as, Ba] = k(!1);
  F(() => {
    Gt.current = ma;
  }, [ma]), F(() => {
    let i = !1;
    return (async () => {
      try {
        await Promise.all([
          vu(),
          pd()
        ]);
      } catch (W) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", W);
      }
      await Yc().catch((W) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", W);
      });
      const [c, u, v, T, I, U, K, _e] = await Promise.allSettled([
        Mc(),
        Yr(),
        Wc(),
        Ni(),
        Vc(),
        Xc("track"),
        ka(),
        dd()
      ]);
      if (i) return;
      const Xe = c.status === "fulfilled" ? c.value : [], Qe = u.status === "fulfilled" ? u.value.tracks.map((W) => ({ ...W, source: "juli3ta" })) : [];
      u.status === "fulfilled" && (ga(u.value.rootPath), ie((W) => W?.startsWith("Real file library unavailable") ? null : W)), c.status === "fulfilled" ? Oe(Sa(Qe, Xe)) : (console.error("[Juli3ta] listTracks failed:", c.reason), Oe(Sa(Qe)), ie("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), u.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", u.reason), ie("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const xt = new Set(Qe.map((W) => W.id)), wa = new Set(Xe.map((W) => W.id)), wt = Xe.filter((W) => !xt.has(W.id) && Wd(W)), ht = Qe.filter((W) => !wa.has(W.id));
      (wt.length > 0 || ht.length > 0) && (async () => {
        const W = [];
        for (const ce of wt)
          try {
            const At = await Ii({ ...ce, source: "juli3ta" });
            W.push({ ...ce, ...At, source: "juli3ta" });
          } catch (At) {
            console.warn("[Juli3ta] host file backfill failed:", ce.id, At);
          }
        for (const ce of ht)
          try {
            await pr({ ...ce, source: "juli3ta" });
          } catch (At) {
            console.warn("[Juli3ta] standalone cache backfill failed:", ce.id, At);
          }
        !i && (W.length > 0 || ht.length > 0) && (Oe((ce) => Sa(W, ht, ce)), Yr().then((ce) => ga(ce.rootPath)).catch(() => {
        }));
      })(), v.status === "fulfilled" && Zo(v.value), T.status === "fulfilled" && xr(T.value);
      const ae = {
        version: 1,
        updatedAt: Date.now(),
        tracks: I.status === "fulfilled" ? I.value : [],
        favorites: U.status === "fulfilled" ? U.value : [],
        playlists: K.status === "fulfilled" ? K.value : []
      }, ne = _e.status === "fulfilled" ? _e.value : null, we = ld(), le = Ti(
        Ti(ae, we),
        ne
      );
      await rd(le).catch((W) => {
        console.warn("[Juli3ta] music library durable import failed:", W);
      }), !i && (Er(le.tracks), Lr(new Set(le.favorites.filter((W) => W.kind === "track").map((W) => W.entityId))), Jt(le.playlists), es(!0), _i(le).catch((W) => {
        console.warn("[Juli3ta] music library durable save failed:", W);
      }));
    })(), () => {
      i = !0;
    };
  }, []), F(() => {
    if (!Vo) return;
    const i = sd(ye, qt, ha), c = window.setTimeout(() => {
      _i(i).catch((u) => {
        console.warn("[Juli3ta] music library durable save failed:", u);
      });
    }, 450);
    return () => window.clearTimeout(c);
  }, [Vo, ye, qt, ha]), F(() => {
    if (!Wt?.startsWith("Real file library unavailable")) return;
    let i = !1;
    const c = async () => {
      try {
        const v = await Yr();
        if (i) return;
        ga(v.rootPath), Oe((T) => Sa(v.tracks.map((I) => ({ ...I, source: "juli3ta" })), T)), ie((T) => T?.startsWith("Real file library unavailable") ? null : T);
      } catch {
      }
    }, u = window.setInterval(c, 4e3);
    return c(), () => {
      i = !0, window.clearInterval(u);
    };
  }, [Wt]);
  const jr = E(async (i) => {
    try {
      const c = await Ii({ ...i, source: "juli3ta" }), u = { ...i, ...c, source: "juli3ta" };
      return await pr(u), ga(c.folderPath?.split("/").slice(0, -1).join("/") || $a), ie(null), Oe((v) => Sa([u], v)), !0;
    } catch (c) {
      const u = c.message || "Real file save failed";
      return ie(`Couldn't save "${i.title}" as a real file — ${u}.`), !1;
    }
  }, [$a]), rs = E(async (i) => {
    Zo(i);
    try {
      await qc(i);
    } catch (c) {
      console.warn("Settings save failed:", c);
    }
  }, []), Wa = me(
    () => e.state ? xu(e.state.agents, e.state.included) : [],
    [e.state]
  ), [qa, os] = k([]), [is, ns] = k(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [ss, ei] = k(!0), Y = qa.find((i) => i.podId === is) ?? qa[0] ?? null, Pr = E(async () => {
    ei(!0);
    const i = new AbortController(), c = await Tu(Wa, i.signal);
    os(c), ei(!1);
  }, [Wa]);
  F(() => {
    Wa.length !== 0 && queueMicrotask(() => void Pr());
  }, [Wa, Pr]);
  const ls = E((i) => {
    ns(i);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", i);
    } catch {
    }
  }, []), ya = ee(null), fa = ee(null), Ja = ee(!1);
  F(() => () => {
    ya.current?.abort(), Object.keys(Pe.current).forEach((i) => {
      Pe.current[i]?.abort();
    });
  }, []), F(() => {
    if (Ft === "idle") {
      queueMicrotask(() => {
        Bt(0), Mo(0);
      });
      return;
    }
    const i = Date.now(), c = () => {
      const T = (Date.now() - i) / 1e3, I = Ft === "lyrics" ? Math.min(0.95, T / 5) : Math.min(0.95, 1 - Math.exp(-T / 35));
      Bt(I);
    };
    c();
    const u = setInterval(c, 250), v = setInterval(() => Mo((T) => T + 1), 4500);
    return () => {
      clearInterval(u), clearInterval(v);
    };
  }, [Ft]);
  const ba = E((i) => {
    if (!i.lyricsPreview) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const u = `${rr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, v = o.findChildByName(c, u);
    return v ? (o.writeFile(v.id, i.lyricsPreview), v.id) : o.createFile(c, u, i.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [o]), ti = E((i) => {
    if (!i.audioDataUrl) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const u = `${rr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, v = o.findChildByName(c, u);
    return v ? v.id : o.createFile(c, u, "", {
      mimeType: "audio/mpeg",
      refTrackId: i.id
    });
  }, [o]), cs = E(async () => {
    if (!Y) {
      V(a("musiccreator.error.noPod"));
      return;
    }
    if (Object.values(qe.current).some(Boolean) || je || nt) {
      V("Finish the active AI helper before generating.");
      return;
    }
    if (m === "restyle" && !De) {
      V(g ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (Ja.current) return;
    Ja.current = !0, V(null), yt(), ya.current?.abort();
    const i = new AbortController();
    ya.current = i;
    try {
      const c = Rr.overridesByEndpoint[Y.url] ?? {}, u = {
        ...Y,
        models: {
          music: c.music || Y.models.music,
          cover: c.cover || Y.models.cover,
          lyrics: c.lyrics || Y.models.lyrics,
          lyricsBackup: c.lyricsBackup || Y.models.lyricsBackup,
          image: c.image || Y.models.image,
          allIds: Y.models.allIds
        }
      }, v = wo(se);
      let T = _.trim(), I = z.trim(), U = x.trim(), K = null;
      if (!T && !q && !(m === "restyle" && !T)) {
        if (!N.trim() && !(se.intent ?? "").trim()) {
          V(a("musiccreator.error.noInput"));
          return;
        }
        Be("lyrics");
        const ue = [];
        N.trim() && ue.push(N.trim());
        const Fr = (se.intent ?? "").trim();
        Fr && ue.push(`User intent (must respect): ${Fr}`), v && ue.push(`Musical context: ${v}`), B && ue.push(`Structure: ${B.prompt}`);
        const Xs = ue.join(`

`);
        K = await Au(u, Xs, i.signal), T = K.lyrics, I || (I = K.song_title), U || (U = K.style_tags);
      } else !T && q && m !== "restyle" && (T = `[Intro]
[Instrumental]
[Outro]`);
      if (K && (C(K.lyrics), I === "Untitled" && (I = ""), I && !z.trim() && M(I), U && !x.trim() && L(U), K.usedFallback && ie(
        `Primary lyrics model errored — used backup chat model "${u.models.lyricsBackup ?? "unknown"}" instead.`
      )), T.length > Qt) {
        V(a("musiccreator.error.lyricsTooLong", { count: T.length, max: Qt })), Be("idle");
        return;
      }
      if (m === "restyle" && T.trim() && T.trim().length > ji) {
        V(`Restyle lyrics must be ${ji} characters or fewer for MiniMax cover mode. Shorten them or clear the Lyrics box to let MiniMax extract the original lyrics from the reference audio.`), Be("idle");
        return;
      }
      if (!I.trim() && m === "restyle" && (I = pu(Ge), I && !z.trim() && M(I)), I.trim() || (I = uu(T, N, U || x), I && I !== "Untitled" && !z.trim() && M(I)), m === "lyricsOnly") {
        const ue = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (I || a("musiccreator.track.untitled")) + " (lyrics)",
          styleTags: U || "—",
          lyricsPreview: T,
          // store the full text — used by Load
          durationMs: 0,
          bitrate: 0,
          sampleRate: 0,
          sizeBytes: 0,
          createdAt: Date.now(),
          audioDataUrl: "",
          // no audio
          specsJson: ea(se) > 0 ? JSON.stringify(se) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: he,
          theme: N
        };
        await jr(ue) && (ba(ue), A(ue.id), ze(!1), f("player")), Be("idle"), Bt(0);
        return;
      }
      if (m === "restyle" && !De) {
        V(g ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), Be("idle");
        return;
      }
      Be("song");
      const Xe = [
        U,
        v,
        m === "restyle" && q ? "instrumental cover, no lead vocal" : ""
      ].filter((ue) => ue && ue.length > 0).join(". "), Qe = m === "restyle" ? mu(Xe) : Xe, xt = Eu(
        u,
        {
          lyrics: T,
          prompt: Qe || void 0,
          instrumental: q,
          refAudioBase64: m === "restyle" ? De ?? void 0 : void 0
        },
        i.signal
      ), wa = Ce && !he && !!u.models.image, wt = he, ht = wa ? po(
        u,
        (D.trim() || lr(I, N, U || x)).slice(0, 1500),
        i.signal
      ).catch((ue) => {
        if (ue.name === "AbortError") throw ue;
        return console.warn("[Juli3ta] Cover-art generation failed:", ue), ie(`Cover-art skipped: ${ue.message}`), wt;
      }) : Promise.resolve(wt), ae = await Promise.allSettled([xt, ht]), ne = ae[0], we = ae[1];
      if (ne.status === "rejected")
        throw i.abort(), ne.reason;
      const le = ne.value, W = we.status === "fulfilled" ? we.value : wt;
      if (!le?.data?.audio || typeof le.data.audio != "string" || le.data.audio.length < 100) {
        const ue = le?.trace_id ? ` (trace ${le.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${ue}. Try again or pick a different model in Settings.`);
      }
      const ce = `data:audio/mpeg;base64,${le.data.audio}`, At = m === "restyle" ? " (restyle)" : "", Ze = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (I || a("musiccreator.track.untitled")) + At,
        styleTags: U || "—",
        lyricsPreview: T,
        // store the full text — used by Load
        durationMs: le.data.duration_ms ?? 0,
        bitrate: le.data.bitrate ?? 0,
        sampleRate: le.data.sample_rate ?? 0,
        sizeBytes: le.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: ce,
        specsJson: ea(se) > 0 ? JSON.stringify(se) : "",
        coverDataUrl: W,
        theme: N
      };
      $(W), console.info("[Juli3ta] Saving generated song:", { id: Ze.id, title: Ze.title, durationMs: Ze.durationMs, sizeBytes: Ze.sizeBytes }), await jr(Ze) && (A(Ze.id), ze(!1), f("player"), ti(Ze), ba(Ze), m === "restyle" && De && jn({
        trackId: Ze.id,
        audioSrc: `data:audio/wav;base64,${De}`,
        sourceLabel: Ge || "Original"
      }), d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: Ze.title }),
        isRead: !1
      })), Be("idle"), Bt(0);
    } catch (c) {
      if (c.name === "AbortError") {
        Be("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", c), V(c.message || "Generation failed — check the console for details."), Be("idle"), Bt(0);
    } finally {
      Ja.current = !1;
    }
  }, [
    Y,
    N,
    _,
    z,
    x,
    se,
    B,
    q,
    m,
    De,
    Ge,
    g,
    a,
    jr,
    Rr,
    ti,
    ba,
    d,
    yt,
    Ce,
    he,
    D,
    je,
    nt
  ]), ds = () => So.current?.click(), Ga = ee(0), ft = E(async (i, c) => {
    const u = ++Ga.current, v = () => Ga.current === u;
    V(null), R(!0), Ue(null), st(c), Fe(null);
    try {
      if (Ve === "mix") {
        const T = await Pd(i);
        if (!v()) return;
        Ue(T.base64);
        const I = T.sourceDurationSec / 60;
        if (T.segments.length > 1) {
          const U = T.segments.map((K) => `${Math.floor(K.startSec / 60)}:${Math.floor(K.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          Fe(
            `Mixed ${T.segments.length} iconic moments (${T.durationSec.toFixed(0)} s) from ${I.toFixed(1)} min — at ${U}`
          );
        } else
          Fe(`Using whole clip (${T.durationSec.toFixed(0)} s)`);
      } else {
        const T = await Cn(i);
        if (!v()) return;
        Ue(T.base64);
        const I = T.sourceDurationSec / 60, U = T.startSec / 60, K = T.startSec < 60 ? `${T.startSec.toFixed(1)} s` : `${Math.floor(U)}:${Math.floor(T.startSec % 60).toString().padStart(2, "0")}`;
        Fe(
          T.sourceDurationSec <= T.durationSec + 0.5 ? `Using whole clip (${T.durationSec.toFixed(0)} s)` : `Auto-picked compact ${T.durationSec.toFixed(0)} s starting at ${K} of ${I.toFixed(1)} min`
        );
      }
    } catch (T) {
      if (!v()) return;
      V(T.message || "Could not analyze that audio."), st(null);
    } finally {
      v() && R(!1);
    }
  }, [Ve]), us = async () => {
    sa(null);
    try {
      let i;
      if (lt === "tab") {
        const T = navigator.mediaDevices;
        if (!T.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        i = await T.getDisplayMedia({ video: !0, audio: !0 });
        for (const I of i.getVideoTracks())
          I.stop(), i.removeTrack(I);
        if (i.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        i = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      $t.current = i;
      const u = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((T) => MediaRecorder.isTypeSupported(T)) || "", v = new MediaRecorder(i, u ? { mimeType: u } : void 0);
      Da.current = [], v.ondataavailable = (T) => {
        T.data && T.data.size > 0 && Da.current.push(T.data);
      }, v.onstop = async () => {
        try {
          const T = new Blob(Da.current, {
            type: Da.current[0]?.type || u || "audio/webm"
          });
          if (T.size === 0) {
            sa("Recording was empty.");
            return;
          }
          const I = new FileReader();
          I.onerror = () => sa("Could not read the recording."), I.onload = () => {
            const U = typeof I.result == "string" ? I.result : "", K = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${lt === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - Sr.current,
              mimeType: T.type || u || "audio/webm",
              audioDataUrl: U,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await xn(K), xr((_e) => [K, ..._e]);
              } catch (_e) {
                console.warn("Recording save failed", _e), sa("Could not save the recording. Try again.");
              }
            })(), Pa(!1), ft(T, K.name);
          }, I.readAsDataURL(T);
        } finally {
          $t.current?.getTracks().forEach((T) => T.stop()), $t.current = null;
        }
      }, v.start(250), zo.current = v, Sr.current = Date.now(), Eo(0), kr(!0), la.current = setInterval(() => {
        Eo(Date.now() - Sr.current);
      }, 100);
    } catch (i) {
      sa(i.message || "Could not start recording."), $t.current?.getTracks().forEach((c) => c.stop()), $t.current = null, kr(!1);
    }
  }, ps = () => {
    const i = zo.current;
    i && i.state !== "inactive" && i.stop(), la.current && clearInterval(la.current), kr(!1);
  };
  F(() => () => {
    $t.current?.getTracks().forEach((i) => i.stop()), la.current && clearInterval(la.current);
  }, []);
  const ms = (i) => {
    const c = i.target.files?.[0];
    if (i.target.value = "", !!c) {
      if (c.size > 50 * 1024 * 1024) {
        V("Reference audio is too big. Max 50 MB.");
        return;
      }
      ft(c, c.name);
    }
  }, hs = (i) => {
    de(!1), ft(i.audioDataUrl, i.name);
  }, gs = () => {
    de(!0), Ni().then((i) => xr(i)).catch(() => {
    });
  }, ys = () => Ht(!0), fs = (i) => {
    if (Ht(!1), !i.audioDataUrl) return;
    const c = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    ft(i.audioDataUrl, `${c}.mp3`);
  }, bs = () => {
    Ga.current += 1, R(!1), Ue(null), st(null), Fe(null);
  }, vs = () => {
    ya.current?.abort(), Be("idle");
  }, bt = E(async (i, c, u) => {
    if (!Y) throw new Error("No endpoint connected");
    const v = (ae) => {
      const ne = ae, we = ne.choices?.[0], le = [
        we?.message?.content,
        we?.delta?.content,
        we?.text,
        ne.output_text
      ];
      for (const W of le)
        if (typeof W == "string" && W.trim().length > 0) return W.trim();
      return "";
    }, T = (ae) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(ae), I = /* @__PURE__ */ new Set(), U = [], K = (ae) => {
      ae && !I.has(ae) && (I.add(ae), U.push(ae));
    };
    if (K(Y.models.lyricsBackup), Y.models.allIds.filter(T).forEach(K), U.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const _e = typeof c == "string" ? c : JSON.stringify(c), Xe = u?.temperature ?? 0.5, Qe = Math.max(u?.maxTokens ?? 800, 400), xt = (ae) => {
      const ne = ae.toLowerCase();
      return /^(deepseek\/)?ail-fast$/.test(ne) ? 10 : /^(deepseek\/)?ail-balanced$/.test(ne) ? 20 : /^(ail-compound-minimax|minimax\/ail-compound-minimax)$/.test(ne) ? 30 : /^minimax\/ail-balanced$/.test(ne) ? 40 : /^minimax\/ail-kimi$/.test(ne) ? 50 : /^moonshot\/ail-balanced$/.test(ne) ? 60 : /^moonshot\/ail-compound$/.test(ne) ? 70 : /^(ail-compound|moonshot\/ail-kimi|ail-kimi|ail-kimi-strict|moonshot\/ail-kimi-strict)$/.test(ne) ? 90 : /search/.test(ne) ? 100 : 80;
    }, wa = (ae) => /^minimax\/ail-compound$/i.test(ae);
    U.sort((ae, ne) => xt(ae) - xt(ne));
    const wt = U.filter((ae) => !wa(ae)), ht = 45e3;
    return fr(wt, async (ae) => {
      const ne = oa(u?.signal, ht);
      let we;
      try {
        we = await ra(Y, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: ae,
            messages: [
              { role: "system", content: i },
              { role: "user", content: _e }
            ],
            temperature: Xe,
            max_tokens: Qe
          }),
          signal: ne.signal
        });
      } catch (ce) {
        throw ce.name === "TimeoutError" ? new Error(`AI assist timed out after ${ht / 1e3}s.`) : ce;
      } finally {
        ne.dispose();
      }
      if (!we.ok) {
        const ce = await we.text().catch(() => "");
        throw we.status === 400 && /web_search|not support|unsupported|invalid params/i.test(ce) ? new ke(502, ce, `AI assist model ${ae} rejected provider params: ${ce.slice(0, 200)}`) : new ke(we.status, ce, `AI assist HTTP ${we.status}: ${ce.slice(0, 200)}`);
      }
      const le = await we.json(), W = v(le);
      if (!W)
        throw console.warn("[Juli3ta] empty AI assist content from", ae, le), new ke(502, "", `Model "${ae}" returned empty content`);
      return W.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [Y]), xs = E(async () => {
    if (!Y) return;
    const i = Ae("specs");
    if (i) {
      St(!0), V(null);
      try {
        const u = await bt(`You are a music-production assistant. Given a theme, style, and (optionally) lyrics, return ONE JSON object that fills in optimal Track Specs for the song.

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
          style: x || null,
          lyrics: _ ? _.slice(0, 1500) : null,
          existing_specs: ea(se) > 0 ? se : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: i.signal
        }), v = In(u) ?? u;
        let T;
        try {
          T = JSON.parse(v);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${u.slice(0, 160)}`);
        }
        if (i.signal.aborted) return;
        ve((I) => ({ ...T, intent: I.intent }));
      } catch (c) {
        if (Aa(c)) return;
        V(c.message || "Optimize failed.");
      } finally {
        Ee("specs", i), St(!1);
      }
    }
  }, [Y, N, x, _, se, bt, Ae, Ee]), ai = E(async () => {
    if (!Y) return;
    if (!Y.models.image) {
      V(`This endpoint (${Y.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (je) return;
    const i = Ae("cover");
    if (!i) return;
    const c = i.signal;
    Ut(!0), V(null);
    try {
      const u = (D.trim() || lr(z, N, x)).slice(0, 1500), v = await po(Y, u, c);
      if (c.aborted) return;
      $(v), Te && fa.current?.(Te, v);
    } catch (u) {
      if (Aa(u)) return;
      V(u.message || "Cover-art generation failed.");
    } finally {
      Ee("cover", i), Ut(!1);
    }
  }, [Y, D, z, N, x, je, Te, Ae, Ee]), ri = E((i) => {
    if (!i.type.startsWith("image/")) {
      V("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (i.size > 4 * 1024 * 1024) {
      V("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const c = new FileReader();
    c.onerror = () => V("Could not read that image file."), c.onload = () => {
      const u = c.result;
      typeof u == "string" && u.startsWith("data:image/") && ($(u), Te && fa.current?.(Te, u));
    }, c.readAsDataURL(i);
  }, [Te]), ws = E(async () => {
    const i = Ae("theme");
    if (i) {
      V(null);
      try {
        const u = await bt("You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.", {
          style: x || "pop",
          existing_theme: N || null
        }, { temperature: 0.85, maxTokens: 200, signal: i.signal });
        if (i.signal.aborted) return;
        j(u);
      } catch (c) {
        if (Aa(c)) return;
        V(c.message || "Theme inspiration failed.");
      } finally {
        Ee("theme", i);
      }
    }
  }, [Ae, Ee, bt, x, N]), ks = E(async () => {
    const i = Ae("style");
    if (i) {
      V(null);
      try {
        const u = await bt('You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".', {
          theme: N || "a quiet evening",
          existing_style: x || null
        }, { temperature: 0.7, maxTokens: 120, signal: i.signal });
        if (i.signal.aborted) return;
        L(u.replace(/^["']|["']$/g, ""));
      } catch (c) {
        if (Aa(c)) return;
        V(c.message || "Style suggestion failed.");
      } finally {
        Ee("style", i);
      }
    }
  }, [Ae, Ee, bt, N, x]), Ss = E(async () => {
    if (!_.trim()) {
      V("Nothing to polish — write some lyrics first.");
      return;
    }
    const i = Ae("lyrics");
    if (i) {
      V(null);
      try {
        const u = await bt("You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.", {
          style: x || null,
          lyrics: _
        }, { temperature: 0.6, maxTokens: 1200, signal: i.signal });
        if (i.signal.aborted) return;
        if (u.length > Qt) {
          V(`Polished lyrics exceeded ${Qt} chars (${u.length}). Trimming the original first might help.`);
          return;
        }
        C(u);
      } catch (c) {
        if (Aa(c)) return;
        V(c.message || "Lyrics polish failed.");
      } finally {
        Ee("lyrics", i);
      }
    }
  }, [Ae, Ee, bt, x, _]), Ts = (i) => {
    L((c) => c ? `${c}, ${i.toLowerCase()}` : i.toLowerCase());
  }, Dr = () => {
    const i = [
      "Late-night coding session, neon city skyline, focus and flow.",
      "Sunday-morning coffee, soft rain, lo-fi piano.",
      "Synthwave anthem about shipping on Friday evening.",
      "Jazz ballad about a forgotten train station at 3am.",
      "Acoustic folk song about a long road trip with old friends.",
      "Cinematic orchestral piece for a heroic underdog scene.",
      "Upbeat pop anthem about finishing a hard project."
    ];
    j(i[Math.floor(Math.random() * i.length)]);
  }, _s = () => {
    const i = S ?? O.state.trackId ?? vt[0]?.id ?? ye[0]?.id ?? null, c = i ? Ie.find((u) => u.id === i) ?? null : null;
    c && Vt(c), f("creator"), Dr();
  }, oi = E((i) => {
    Oe((c) => c.filter((u) => u.id !== i)), jc(i).catch((c) => console.warn("Track cache delete failed:", c)), Fd(i).catch((c) => console.warn("Track file delete failed:", c));
  }, []), Ns = E(async () => {
    if (!Fa) {
      Qo(!0);
      try {
        const i = await Bd();
        ga(i), d({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: i,
          isRead: !1
        });
      } catch (i) {
        ie(`Could not open JULI3TA folder — ${i.message || i}`);
      } finally {
        Qo(!1);
      }
    }
  }, [d, Fa]), Va = E(async (i, c) => {
    const u = c.trim().slice(0, 200) || "Untitled";
    Oe((v) => v.map((T) => T.id === i ? { ...T, title: u } : T));
    try {
      await Pc(i, u), ie(null);
    } catch (v) {
      const T = v.message || "Database write failed";
      ie(`Couldn't rename track — ${T}.`);
    }
  }, []), Ur = E(async (i, c) => {
    Oe((u) => u.map((v) => v.id === i ? { ...v, coverDataUrl: c } : v));
    try {
      await Dc(i, c), ie(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      ie(`Couldn't save cover art — ${v}.`);
    }
  }, []);
  F(() => {
    fa.current = Ur;
  }, [Ur]);
  const ii = E(async (i, c) => {
    Oe((u) => u.map((v) => v.id === i ? { ...v, styleTags: c || "—" } : v));
    try {
      await Uc(i, c), ie(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      ie(`Couldn't save style — ${v}.`);
    }
  }, []), ni = E(async (i, c) => {
    Oe((u) => u.map((v) => v.id === i ? { ...v, lyricsPreview: c } : v));
    try {
      await Oc(i, c), ie(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      ie(`Couldn't save lyrics — ${v}.`);
    }
  }, []), si = E(async (i, c) => {
    Oe((u) => u.map((v) => v.id === i ? { ...v, specsJson: c } : v));
    try {
      await Hc(i, c), ie(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      ie(`Couldn't save specs — ${v}.`);
    }
  }, []), li = E(async (i, c) => {
    Oe((u) => u.map((v) => v.id === i ? { ...v, theme: c } : v));
    try {
      await $c(i, c), ie(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      ie(`Couldn't save theme — ${v}.`);
    }
  }, []);
  F(() => {
    if (!Te) return;
    const i = Te, c = setTimeout(() => {
      const u = Nt.find((_e) => _e.id === i);
      if (!u) return;
      const v = z.trim() || u.title, T = x.trim(), I = N, U = ea(se) > 0 ? JSON.stringify(se) : "", K = u.styleTags === "—" ? "" : u.styleTags || "";
      u.title !== v && Va(i, v), K !== T && ii(i, T), (u.lyricsPreview || "") !== _ && ni(i, _), (u.specsJson || "") !== U && si(i, U), (u.theme || "") !== I && li(i, I);
    }, 600);
    return () => clearTimeout(c);
  }, [Te, z, x, N, _, se, Nt, Va, ii, ni, si, li]);
  const [ci, di] = k(null), [Cs, ui] = k(!1), Vt = E((i) => {
    C(i.lyricsPreview ?? ""), L(i.styleTags && i.styleTags !== "—" ? i.styleTags : ""), j(i.theme ?? "");
    const c = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (M(c), Q(!1), i.specsJson)
      try {
        ve(JSON.parse(i.specsJson));
      } catch {
        ve({});
      }
    else
      ve({});
    $(i.coverDataUrl ?? ""), Z(""), ja(i.id), V(null), P(null), Q(!1), Se(i) ? i.source === "youtube" ? (h("restyle"), Ue(null), st(`${c}.mp3`), Fe("Resolving streamed audio…"), R(!0), (async () => {
      try {
        const v = i.externalId || "";
        if (!v) throw new Error("Missing source identifier.");
        const T = Ta(v), I = ma[T], U = I && Date.now() - I.resolvedAt < 5400 * 1e3 ? I.src : (await zi(v)).proxyUrl;
        await ft(U, `${c}.mp3`);
      } catch (v) {
        R(!1), Ue(null), st(null), Fe(null), V(`Could not load streamed track for restyle: ${v.message || "unknown error"}`);
      }
    })()) : (h("restyle"), ft(i.audioDataUrl, `${c}.mp3`)) : (Ue(null), st(null), Fe(null), h("lyricsOnly"));
  }, [ft, ma]), pi = E((i) => {
    const c = ba(i);
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
  }, [ba, l, d, a]), Ka = E((i, c, u, v) => {
    const T = o.ensureUserFolder("Desktop");
    if (!T) return;
    const I = o.findChildByName(T, i);
    let U;
    if (I)
      u.refTrackId || o.writeFile(I.id, c), U = I.id;
    else {
      U = o.createFile(T, i, c, u);
      const K = Array.from(v).reduce((Qe, xt) => Qe + xt.charCodeAt(0), 0), _e = K % 6 + 1, Xe = Math.floor(K / 6) % 4;
      l({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: i,
          icon: Tc(i),
          fileSystemNodeId: U,
          position: { x: 16 + _e * 80, y: 16 + Xe * 90 },
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
  }, [o, l, d, a]), As = E((i) => {
    if (!i.audioDataUrl) return;
    const c = rr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Ka(`${c}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: i.id }, i.id);
  }, [Ka]), Es = E((i) => {
    if (!i.lyricsPreview) return;
    const c = rr(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Ka(`${c}.lyrics.txt`, i.lyricsPreview, { mimeType: "text/plain" }, `${i.id}-lyrics`);
  }, [Ka]), Ls = E((i) => {
    ze(!1), f("player"), A(i.id);
  }, []), mt = E((i) => {
    const c = i.dataTransfer.getData(La);
    if (!c) return null;
    try {
      return JSON.parse(c);
    } catch {
      return null;
    }
  }, []), zs = E((i) => {
    const c = mt(i);
    if (c && c.lyricsPreview) {
      i.preventDefault(), C(c.lyricsPreview);
      const u = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !z.trim() && u && M(u), !x.trim() && c.styleTags && c.styleTags !== "—" && L(c.styleTags);
      return;
    }
  }, [mt, z, x]), Is = E((i) => {
    const c = mt(i);
    c && c.styleTags && c.styleTags !== "—" && (i.preventDefault(), L((u) => u ? `${u}, ${c.styleTags}` : c.styleTags));
  }, [mt]), Ms = E((i) => {
    const c = mt(i);
    if (c) {
      i.preventDefault();
      const u = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), v = c.styleTags && c.styleTags !== "—" ? `Inspired by "${u}" — ${c.styleTags}` : `Inspired by "${u}"`;
      j(v);
    }
  }, [mt]), Rs = E((i) => {
    const c = mt(i);
    c && (i.preventDefault(), M(c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [mt]), Ya = (i) => {
    i.dataTransfer.types.includes(La) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
  }, mi = _.length, js = x.length, X = Ft !== "idle", Xa = Object.values($e).some(Boolean) || je || nt, Ps = me(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            ya.current?.abort(), yt(), Ga.current += 1, Ja.current = !1, h("compose"), j(""), C(""), L(""), M(""), ve({}), P(null), Q(!1), $(""), Z(""), _o(!1), Ue(null), st(null), Fe(null), V(null), ie(null), Be("idle"), Bt(0), Tt({ ...Ca }), Ut(!1), St(!1), ja(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => Dr() },
          { id: "mode-restyle", label: "Restyle Mode", onSelect: () => h("restyle") },
          { id: "mode-lyrics", label: "Lyrics Only Mode", onSelect: () => h("lyricsOnly") }
        ]
      },
      {
        id: "view",
        label: "View",
        items: [
          { id: "view-creator", label: "Creator", onSelect: () => f("creator") },
          { id: "view-player", label: "Player", onSelect: () => f("player") },
          { id: "open-help", label: "How it works…", onSelect: () => p(!0) },
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => Ba(!0) }
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
          { id: "juli3ta-about", label: `About JULI3TA v${uo}`, onSelect: () => Ba(!0) }
        ]
      }
    ]
  }), [r, yt]);
  xc(r?.id ?? null, Ps);
  const Ye = me(
    () => Nt.filter(Ln),
    [Nt]
  ), vt = me(() => {
    let i = Ye;
    He === "songs" ? i = i.filter((u) => Se(u) && !/\(restyle\)\s*$/i.test(u.title) && !/\(lyrics\)\s*$/i.test(u.title)) : He === "restyles" ? i = i.filter((u) => /\(restyle\)\s*$/i.test(u.title)) : He === "lyrics" && (i = i.filter((u) => !Se(u) || /\(lyrics\)\s*$/i.test(u.title)));
    const c = Le.trim().toLowerCase();
    return c ? i.filter((u) => u.title.toLowerCase().includes(c) || u.styleTags.toLowerCase().includes(c)) : i;
  }, [Ye, Le, He]), Kt = me(() => {
    let i = ye;
    ct === "favorites" && (i = i.filter((u) => qt.has(u.id)));
    const c = Le.trim().toLowerCase();
    return c ? i.filter((u) => u.title.toLowerCase().includes(c) || (u.artist || "").toLowerCase().includes(c) || (u.album || "").toLowerCase().includes(c)) : i;
  }, [ye, ct, Le, qt]), Yt = E((i, c) => {
    const u = Ta(i), v = Gt.current[u];
    if (!c?.force && v && Date.now() - v.resolvedAt < 5400 * 1e3)
      return Promise.resolve(v.src);
    const T = Mr.current.get(i);
    if (!c?.force && T) return T;
    Bo((U) => new Set(U).add(i));
    const I = zi(i).then((U) => {
      const K = { src: U.proxyUrl, resolvedAt: Date.now() };
      return Gt.current = { ...Gt.current, [u]: K }, Yn((_e) => ({ ..._e, [u]: K })), U.proxyUrl;
    }).finally(() => {
      Mr.current.delete(i), Bo((U) => {
        const K = new Set(U);
        return K.delete(i), K;
      });
    });
    return Mr.current.set(i, I), I;
  }, []), va = E((i) => {
    i.slice(0, 3).forEach((c) => {
      Yt(c.id).catch(() => {
      });
    });
  }, [Yt]);
  F(() => {
    if (!ut) return;
    const i = new AbortController();
    return Promise.allSettled([
      Dd(i.signal),
      Ei(i.signal),
      Li(i.signal)
    ]).then(([c, u, v]) => {
      c.status === "fulfilled" ? Ho(c.value) : Ho(null), u.status === "fulfilled" && $o(u.value), v.status === "fulfilled" && Fo(v.value);
    }), () => i.abort();
  }, [ut]), F(() => {
    if (!ut) return;
    const i = (c) => {
      c.key === "Escape" && ze(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [ut]), F(() => {
    if (!ut) return;
    const i = Cr.trim();
    if (i.length < 2) {
      const I = window.setTimeout(() => {
        Ar([]), pt(null), Ha(!1);
      }, 0);
      return () => window.clearTimeout(I);
    }
    const c = `${pa}:${i.toLowerCase()}`, u = Xo.current.get(c);
    if (u) {
      Ar(u), Ha(!1), pt(null), va(u);
      return;
    }
    const v = new AbortController(), T = setTimeout(() => {
      Ha(!0), pt(null);
      let I = Ir.current.get(c);
      I || (I = $d(i, pa, 20, v.signal).then((U) => pa === "playlists" ? U.results.playlists : U.results.tracks).catch(() => Hd(i, 20, v.signal)).finally(() => {
        Ir.current.delete(c);
      }), Ir.current.set(c, I)), I.then((U) => {
        Xo.current.set(c, U), Ar(U), va(U), U.length > 0 && Oo(i);
      }).catch((U) => {
        v.signal.aborted || pt(U.message || "Music search failed.");
      }).finally(() => {
        v.signal.aborted || Ha(!1);
      });
    }, 120);
    return () => {
      v.abort(), clearTimeout(T);
    };
  }, [Cr, pa, ut, va, Oo]);
  const Qa = E(async () => {
    const [i, c] = await Promise.allSettled([
      Ei(),
      Li()
    ]);
    i.status === "fulfilled" && $o(i.value), c.status === "fulfilled" && Fo(c.value);
  }, []), Ds = E(async (i, c) => {
    await Ud(i, c), await Qa(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${i} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, Qa]), Us = E(async (i) => {
    await Od(i), await Qa(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${i} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [d, Qa]), Os = me(
    () => new Set(ye.filter((i) => i.externalId).map((i) => i.externalId)),
    [ye]
  ), Za = E((i, c) => {
    const u = zn(i.title, i.channel);
    return {
      id: c?.id ?? Ta(i.id),
      title: u.song || i.title || "Untitled",
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
      thumbnailUrl: i.thumbnailUrl || mr(i.id),
      artist: u.artist || i.channel || "Unknown",
      album: i.channel ?? ""
    };
  }, []), Hs = E(async (i, c) => {
    if (i.audioDataUrl && !c?.force) return i.audioDataUrl;
    if (!ko(i) || !i.externalId) return i.audioDataUrl || null;
    const u = Ta(i.externalId), v = Gt.current[u] ?? Gt.current[i.id];
    return !c?.force && v && Date.now() - v.resolvedAt < 5400 * 1e3 ? v.src : Yt(i.externalId, c);
  }, [Yt]), Ie = me(
    () => [...Jo, ...ye, ...vt],
    [Jo, ye, vt]
  );
  F(() => {
    if (!S || Ie.length === 0) return;
    Ie.some((c) => c.id === S) || A(null);
  }, [S, Ie]);
  const hi = ee(null), O = Lu(Ie, hi, Hs);
  F(() => {
    const i = O.state.trackId;
    i && On((c) => c[0] === i ? c : [i, ...c.filter((v) => v !== i)].slice(0, 8));
  }, [O.state.trackId]), F(() => {
    if (typeof navigator > "u" || !("mediaSession" in navigator)) return;
    const i = navigator.mediaSession, c = O.state.trackId, u = c ? Ie.find((v) => v.id === c) : null;
    if (!u) {
      i.metadata = null, i.playbackState = "none";
      return;
    }
    return i.metadata = new MediaMetadata({
      title: u.title || "Untitled",
      artist: u.artist || "JULI3TA",
      album: u.album || (u.styleTags && u.styleTags !== "—" ? u.styleTags : ""),
      artwork: u.coverDataUrl ? [{ src: u.coverDataUrl, sizes: "512x512", type: u.coverDataUrl.startsWith("data:image/png") ? "image/png" : "image/jpeg" }] : u.thumbnailUrl ? [{ src: u.thumbnailUrl, sizes: "256x256", type: "image/jpeg" }] : []
    }), i.playbackState = O.state.playing ? "playing" : "paused", i.setActionHandler("play", () => O.toggle(u)), i.setActionHandler("pause", () => O.pause()), i.setActionHandler("previoustrack", () => O.prev()), i.setActionHandler("nexttrack", () => O.next()), i.setActionHandler("seekbackward", (v) => {
      O.seek(Math.max(0, O.state.positionMs - (v.seekOffset ?? 10) * 1e3));
    }), i.setActionHandler("seekforward", (v) => {
      O.seek(Math.min(O.state.durationMs || 0, O.state.positionMs + (v.seekOffset ?? 10) * 1e3));
    }), () => {
      i.setActionHandler("play", null), i.setActionHandler("pause", null), i.setActionHandler("previoustrack", null), i.setActionHandler("nexttrack", null), i.setActionHandler("seekbackward", null), i.setActionHandler("seekforward", null);
    };
  }, [O, O.state.trackId, O.state.playing, Ie]), F(() => {
    const i = O.state.trackId;
    if (!i) return;
    const c = Ie.find((I) => I.id === i);
    if (!c) return;
    const u = O.state.playing ? "▶" : "⏸", v = (c.title || "Untitled").replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), T = document.title;
    return document.title = `${u} ${v} — JULI3TA`, () => {
      document.title = T;
    };
  }, [O.state.trackId, O.state.playing, Ie]), F(() => {
    if (b !== "player") return;
    const i = (c) => {
      const u = c.target;
      if (u) {
        const I = u.tagName;
        if (I === "INPUT" || I === "TEXTAREA" || I === "SELECT" || u.isContentEditable) return;
      }
      const v = O.state.trackId;
      if (!v) return;
      const T = Ie.find((I) => I.id === v);
      if (T)
        switch (c.key) {
          case " ":
            c.preventDefault(), O.toggle(T);
            break;
          case "ArrowLeft":
            c.preventDefault(), O.seek(Math.max(0, O.state.positionMs - 5e3));
            break;
          case "ArrowRight":
            c.preventDefault(), O.seek(Math.min(O.state.durationMs || 0, O.state.positionMs + 5e3));
            break;
          case "ArrowUp":
            c.preventDefault(), O.setVolume(Math.min(1, O.state.volume + 0.1));
            break;
          case "ArrowDown":
            c.preventDefault(), O.setVolume(Math.max(0, O.state.volume - 0.1));
            break;
        }
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [b, O, Ie]), F(() => {
    const i = (c) => {
      const u = c.target;
      if (u) {
        const v = u.tagName;
        if (v === "INPUT" || v === "TEXTAREA" || v === "SELECT" || u.isContentEditable) return;
      }
      c.key === "?" || c.key === "/" && c.shiftKey ? (c.preventDefault(), Nr((v) => !v)) : c.key === "Escape" && _r && Nr(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [_r]);
  const $s = E((i) => {
    const c = i.items.find(Se);
    c && (Go((u) => [
      ...i.items.filter((v) => !u.some((T) => T.id === v.id)),
      ...u
    ]), A(c.id), ze(!1), f("player"), O.play(c));
  }, [O]), Fs = E(async (i) => {
    await ed(i), Jt(await ka());
  }, []), Bs = E((i) => {
    pt(null), Wo(i.id);
    const c = Ta(i.id), u = Za(i, { id: c });
    Go((v) => [u, ...v.filter((T) => T.id !== u.id)]), A(u.id), f("player"), O.play(u), Wo(null);
  }, [O, Za]), Ws = E((i) => {
    Yt(i.id).catch(() => {
    });
  }, [Yt]), qs = E(async (i) => {
    qo(i.id);
    const c = Za(i);
    try {
      await yn(c), Er((u) => [c, ...u.filter((v) => v.id !== c.id)]), A(c.id), Po("library"), Do("all"), va([i]), ha.length > 0;
    } catch (u) {
      pt(u.message || "Could not save track.");
    } finally {
      qo(null);
    }
  }, [Za, va, ha.length]), Or = E((i) => {
    Lr((c) => {
      const u = new Set(c);
      return u.has(i.id) ? u.delete(i.id) : u.add(i.id), u;
    }), Qc({
      kind: "track",
      entityId: i.id,
      provider: i.source ?? "youtube",
      title: i.title
    }).catch((c) => console.warn("Favorite toggle failed:", c));
  }, []), Js = E(async () => {
    const i = zr.trim() || "New Playlist";
    Yo(!0);
    try {
      const c = await Zc(i);
      Jt((u) => [c, ...u]), Ko("");
    } catch (c) {
      pt(c.message || "Could not create playlist.");
    } finally {
      Yo(!1);
    }
  }, [zr]), Gs = E(async (i, c) => {
    try {
      await td(i, c);
      const u = await ka();
      Jt(u);
    } catch (u) {
      pt(u.message || "Could not add to playlist.");
    }
  }, []), Vs = E(async (i, c) => {
    try {
      await ad(i, c);
      const u = await ka();
      Jt(u);
    } catch (u) {
      pt(u.message || "Could not remove from playlist.");
    }
  }, []), Hr = E((i) => {
    Er((c) => c.filter((u) => u.id !== i.id)), Lr((c) => {
      const u = new Set(c);
      return u.delete(i.id), u;
    }), Kc(i.id).then(() => ka().then(Jt)).catch((c) => console.warn("Library track delete failed:", c));
  }, []), Ks = E((i) => {
    Oa((c) => {
      const u = new Set(c);
      return u.has(i.id) ? u.delete(i.id) : u.add(i.id), u;
    });
  }, []), xa = E(() => {
    Tr(!1), Oa(/* @__PURE__ */ new Set());
  }, []);
  F(() => {
    if (!Ct) return;
    const i = (c) => {
      c.key === "Escape" && xa();
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [Ct, xa]), F(() => {
    ge !== "library" && (Ct || dt.size > 0) && (Tr(!1), Oa(/* @__PURE__ */ new Set()));
  }, [ge, Ct, dt.size]);
  const $r = E((i) => {
    A(i.id), ze(!1), f("player");
  }, []), Ys = E((i) => {
    Vt(i), ze(!1), f("creator");
  }, [Vt]);
  return Y ? /* @__PURE__ */ s("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
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
                    children: ge === "mywork" ? "My Work" : "Library"
                  }
                ),
                /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: ge === "mywork" ? Le.trim() || He !== "all" ? `${vt.length} / ${Ye.length}` : a(
                    Ye.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: Ye.length }
                  ) : Le.trim() || ct !== "all" ? `${Kt.length} / ${ye.length}` : `${ye.length} saved` }),
                  ge === "mywork" && /* @__PURE__ */ s(fe, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: Ns,
                        disabled: Fa,
                        className: "flex items-center justify-center transition-all",
                        style: {
                          width: 22,
                          height: 22,
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-window)",
                          color: "var(--text-secondary)",
                          opacity: Fa ? 0.5 : 1
                        },
                        title: $a ? `Open real folder: ${$a}` : "Open real JULI3TA folder",
                        children: /* @__PURE__ */ t(Tl, { size: 11 })
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
                              onClick: () => jo("cards"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: da === "cards" ? "var(--bg-hover)" : "transparent",
                                color: da === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "Cards",
                              children: /* @__PURE__ */ t(oo, { size: 11 })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => jo("list"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: da === "list" ? "var(--bg-hover)" : "transparent",
                                color: da === "list" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "List",
                              children: /* @__PURE__ */ t(Rt, { size: 11 })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  ge === "library" && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        ze(!0), ua("search");
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
                      children: /* @__PURE__ */ t(gt, { size: 11 })
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
                { id: "mywork", label: "My Work", count: Ye.length },
                { id: "library", label: "Library", count: ye.length }
              ].map((i) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => Po(i.id),
                  className: "flex-1 rounded-md transition-all",
                  style: {
                    height: 26,
                    fontSize: 11,
                    fontWeight: ge === i.id ? 700 : 600,
                    color: ge === i.id ? "white" : "var(--text-secondary)",
                    background: ge === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
                          opacity: ge === i.id ? 0.85 : 0.55
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
                opacity: ge === "mywork" ? Ye.length === 0 ? 0.4 : 1 : ye.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(gt, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: Le,
                    onChange: (i) => Ro(i.target.value),
                    placeholder: ge === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: ge === "mywork" ? Ye.length === 0 : ye.length === 0
                  }
                ),
                Le && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Ro(""),
                    className: "opacity-60 hover:opacity-100 px-1",
                    title: "Clear search",
                    children: /* @__PURE__ */ t(be, { size: 11 })
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
              children: ge === "mywork" ? [
                { id: "all", label: "All" },
                { id: "songs", label: "Songs" },
                { id: "restyles", label: "Restyles" },
                { id: "lyrics", label: "Lyrics" }
              ].map((i) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Un(i.id),
                  className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                  style: {
                    height: 22,
                    fontSize: 10,
                    fontWeight: He === i.id ? 800 : 600,
                    color: He === i.id ? "white" : "var(--text-secondary)",
                    background: He === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: i.label
                },
                i.id
              )) : Ct ? /* @__PURE__ */ s(fe, { children: [
                /* @__PURE__ */ s("span", { style: { fontSize: 10, fontWeight: 800, color: "var(--text-primary)", flexShrink: 0 }, children: [
                  dt.size,
                  " selected"
                ] }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Oa(new Set(Kt.map((i) => i.id))),
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
                    onClick: xa,
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
                    onClick: () => Do(i.id),
                    className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: ct === i.id ? 800 : 600,
                      color: ct === i.id ? "white" : "var(--text-secondary)",
                      background: ct === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: i.label
                  },
                  i.id
                )),
                ye.length > 0 && /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => Tr(!0),
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
                      /* @__PURE__ */ t(rn, { size: 11 }),
                      " Select"
                    ]
                  }
                )
              ] })
            }
          ),
          ge === "mywork" ? Ye.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t(Rt, { size: 18, style: { color: "var(--text-disabled)" } })
              }
            ),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: a("musiccreator.gallery.empty.title") }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: a("musiccreator.gallery.empty.body") }),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => f("creator"),
                className: "mt-3 flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 28,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(rt, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(at, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : vt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(gt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Le ? a("musiccreator.gallery.searchEmpty", { q: Le }) : `No ${He} yet.` })
          ] }) : /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: [
            Ua.length > 0 && He === "all" && !Le.trim() && /* @__PURE__ */ t(
              Gu,
              {
                trackIds: Ua,
                allTracks: Ye,
                player: O,
                onSelect: $r
              }
            ),
            da === "list" ? /* @__PURE__ */ t(
              Wu,
              {
                tracks: vt,
                player: O,
                onLoad: Vt,
                onOpenLyrics: pi,
                onDelete: oi,
                onRename: Va
              }
            ) : vt.map((i) => /* @__PURE__ */ t(
              Ju,
              {
                track: i,
                onDelete: oi,
                onLoad: Vt,
                onOpenLyrics: pi,
                onSaveSongToDesktop: As,
                onSaveLyricsToDesktop: Es,
                onPlayInPlayer: Ls,
                onRename: Va,
                onEditCover: di,
                onSelect: $r,
                selected: b === "player" && S === i.id,
                player: O
              },
              i.id
            ))
          ] }) : (
            /* Library tab — flat slim list of saved streamed tracks. The
               rich Artists/Albums/Playlists views still live in the main
               Music pane (reachable via the search button in the header
               above) since they need more horizontal room than 260px. */
            ye.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(
                "div",
                {
                  className: "flex items-center justify-center rounded-2xl mb-2",
                  style: { width: 44, height: 44, background: "var(--bg-hover)" },
                  children: /* @__PURE__ */ t(cr, { size: 18, style: { color: "var(--text-disabled)" } })
                }
              ),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: "Your saved music lives here" }),
              /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: "Click the magnifier above to search, then add tracks you want to keep." }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    ze(!0), ua("search");
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
                    /* @__PURE__ */ t(gt, { size: 11 }),
                    " Search music"
                  ]
                }
              )
            ] }) : Kt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(gt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Le ? `No matches for "${Le}"` : `No ${ct} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Kt.map((i) => /* @__PURE__ */ t(
              Vu,
              {
                track: i,
                player: O,
                selected: b === "player" && S === i.id,
                isFavorite: qt.has(i.id),
                onOpenInPlayer: $r,
                onRemix: Ys,
                onToggleFavorite: Or,
                onRemove: Hr,
                selectMode: Ct,
                checked: dt.has(i.id),
                onToggleCheck: Ks
              },
              i.id
            )) })
          ),
          ge === "library" && Ct && dt.size > 0 && /* @__PURE__ */ s(
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
                      const i = Kt.filter((c) => dt.has(c.id));
                      for (const c of i) Or(c);
                      xa();
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
                    title: `Toggle favorite on ${dt.size} track(s)`,
                    children: [
                      /* @__PURE__ */ t(cr, { size: 11 }),
                      " Toggle favorite"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => {
                      const i = Kt.filter((c) => dt.has(c.id));
                      for (const c of i) Hr(c);
                      xa();
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
                    title: `Remove ${dt.size} track(s) from Library`,
                    children: [
                      /* @__PURE__ */ t(jt, { size: 11 }),
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
              /* @__PURE__ */ t(yo, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
              /* @__PURE__ */ t(
                "img",
                {
                  src: y === "light" ? "/brand/juli3ta/wordmark-ink-transparent.png" : "/brand/juli3ta/wordmark-cream-transparent.png",
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
                  { id: "creator", icon: /* @__PURE__ */ t(rt, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(xe, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
                ].map((i) => /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => f(i.id),
                    title: i.tip,
                    className: "flex items-center gap-1.5 px-3 rounded-md transition-all",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: b === i.id ? 600 : 500,
                      color: b === i.id ? "white" : "var(--text-secondary)",
                      background: b === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
              b === "player" && /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    ze((i) => !i), ua("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: ut ? "white" : "var(--text-secondary)",
                    background: ut ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(gt, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(Bu, { endpoint: Y, endpoints: qa, onSwitch: ls }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: b === "player" ? _s : Dr,
                  disabled: X,
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a(b === "player" ? "musiccreator.header.surpriseFromPlayerTitle" : "musiccreator.header.surpriseTitle"),
                  children: [
                    /* @__PURE__ */ t(ho, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Ba(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(an, { size: 14 })
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
                  children: /* @__PURE__ */ t(yl, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      b === "player" && (ut ? /* @__PURE__ */ t(
        lp,
        {
          tab: Hn,
          onTabChange: ua,
          query: Cr,
          onQueryChange: $n,
          searchHistory: Fn,
          onClearSearchHistory: () => {
            Uo([]);
            try {
              localStorage.removeItem("juli3ta:searchHistory");
            } catch {
            }
          },
          resultType: pa,
          onResultTypeChange: Bn,
          results: Wn,
          busy: qn,
          error: Jn,
          status: Gn,
          providers: Vn,
          connectors: Kn,
          libraryTracks: ye,
          playlists: ha,
          playlistNameDraft: zr,
          playlistBusy: ts,
          favoriteIds: qt,
          warmupIds: Xn,
          previewBusyId: Qn,
          addBusyId: Zn,
          savedYoutubeIds: Os,
          player: O,
          onWarmResult: Ws,
          onPreview: Bs,
          onAdd: qs,
          onOpenTrack: (i) => {
            A(i.id), ze(!1), f("player");
          },
          onToggleFavorite: Or,
          onRemoveLibraryTrack: Hr,
          onPlaylistNameDraftChange: Ko,
          onCreatePlaylist: Js,
          onAddTrackToPlaylist: Gs,
          onRemoveTrackFromPlaylist: Vs,
          onPlayPlaylist: $s,
          onDeletePlaylist: Fs,
          onConfigureConnector: Ds,
          onDisconnectConnector: Us,
          onClose: () => ze(!1)
        }
      ) : /* @__PURE__ */ t(
        sp,
        {
          track: (() => {
            const i = S ?? O.state.trackId ?? vt[0]?.id ?? ye[0]?.id ?? null;
            return i ? Ie.find((c) => c.id === i) ?? null : null;
          })(),
          player: O,
          restyleOriginal: Rn,
          onSwitchToCreator: () => f("creator"),
          onSearchMusic: () => {
            f("player"), ze(!0), ua("search");
          },
          onEditInCreator: (i) => {
            Vt(i), f("creator");
          }
        }
      )),
      b === "creator" && /* @__PURE__ */ s(fe, { children: [
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
                { id: "compose", icon: /* @__PURE__ */ t(Ra, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(Pt, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t(dr, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((i) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => h(i.id),
                  disabled: X,
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
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: X ? /* @__PURE__ */ s(
                "button",
                {
                  onClick: vs,
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
                const i = m === "restyle" && (g || !De);
                return /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: cs,
                    disabled: i || Xa,
                    className: "flex items-center gap-1.5 px-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    style: {
                      height: 32,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "white",
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      boxShadow: "var(--shadow-md)"
                    },
                    title: Xa ? "An AI helper is still working — wait for it to finish before generating." : i ? g ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      i && g || Xa ? /* @__PURE__ */ t(oe, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Pt, { size: 13 }),
                      Xa ? "Waiting for AI…" : m === "restyle" ? g ? "Analyzing audio…" : "Restyle Song" : m === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
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
                  value: z,
                  onChange: (i) => M(i.target.value),
                  onDragOver: Ya,
                  onDrop: Rs,
                  placeholder: a("musiccreator.songName.placeholder"),
                  disabled: X,
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
                      Hi,
                      {
                        id: "juli3ta-instrumental",
                        checked: q,
                        onChange: Q,
                        disabled: X
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (X || ca || Wt) && /* @__PURE__ */ s(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: ca ? "rgba(255, 82, 82, 0.06)" : Wt ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              X && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${Dn * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: ca ? /* @__PURE__ */ s(fe, { children: [
                /* @__PURE__ */ t(za, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: ca, children: ca }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => V(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(be, { size: 11 })
                  }
                )
              ] }) : X ? /* @__PURE__ */ s(fe, { children: [
                /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: Ft === "lyrics" ? Ui[Io % Ui.length] : Oi[Io % Oi.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: Ft === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : /* @__PURE__ */ s(fe, { children: [
                /* @__PURE__ */ t(za, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: Wt ?? "", children: Wt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => ie(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: "Dismiss",
                    children: /* @__PURE__ */ t(be, { size: 11 })
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
                i.dataTransfer.types.includes(La) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
              },
              onDrop: (i) => {
                const c = mt(i);
                c && c.hasAudio && (i.preventDefault(), (async () => {
                  const u = await Rc(c.id);
                  if (!u?.audioDataUrl) {
                    V("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  ft(u.audioDataUrl, `${c.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                Ge ? /* @__PURE__ */ s(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${g ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                        g ? /* @__PURE__ */ t(oe, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(Rt, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: Ge }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: bs,
                            disabled: X || g,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t(jt, { size: 14 })
                          }
                        )
                      ] }),
                      (g || Ot) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: g ? "🔍  Listening for the best part…" : `✨  ${Ot}` }),
                      De && !g && /* @__PURE__ */ t(
                        Mn,
                        {
                          base64: De,
                          onPlay: () => {
                            O.state.playing && O.pause();
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
                      onClick: () => Pa(!0),
                      disabled: X,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Record new audio (mic or tab)",
                      children: [
                        /* @__PURE__ */ t(at, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: ds,
                      disabled: X,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t(Rt, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: ys,
                      disabled: X || Nt.filter((i) => i.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(Mt, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: Nt.filter((i) => i.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: gs,
                      disabled: X,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50 relative",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      title: "Pick a Voice Recorder clip",
                      children: [
                        /* @__PURE__ */ t(at, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: vr.length }) })
                      ]
                    }
                  )
                ] }),
                !Ge && /* @__PURE__ */ s("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => No("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Ve === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Ve === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Ve === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(rt, { size: 13, style: { color: Ve === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
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
                        onClick: () => No("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Ve === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Ve === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Ve === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(oo, { size: 13, style: { color: Ve === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 compact parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                Pn && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !Ke && Pa(!1),
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
                                  onClick: () => !Ke && Co("mic"),
                                  disabled: Ke,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: lt === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${lt === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(at, { size: 14 }),
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
                                  onClick: () => !Ke && Co("tab"),
                                  disabled: Ke,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: lt === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${lt === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(fi, { size: 14 }),
                                    /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            lt === "tab" && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
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
                                  Math.floor(Ao / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor(Ao / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            Ke ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: ps,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(on, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: us,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: lt === "tab" ? /* @__PURE__ */ t(fi, { size: 28 }) : /* @__PURE__ */ t(at, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: Ke ? lt === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            Lo && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: Lo })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s(
                            "div",
                            {
                              className: "px-5 py-3 flex items-center justify-between",
                              style: { borderTop: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)" },
                              children: [
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: Ke ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !Ke && Pa(!1),
                                    disabled: Ke,
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
                    ref: So,
                    type: "file",
                    accept: "audio/*",
                    onChange: ms,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick a compact gateway-safe sample" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed and downsampled before Restyle so the request stays small."
                ] }),
                J && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => de(!1),
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
                                  /* @__PURE__ */ t(at, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ s(
                                  "button",
                                  {
                                    onClick: () => de(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    children: [
                                      /* @__PURE__ */ t(jt, { size: 14, style: { visibility: "hidden" } }),
                                      /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600 }, children: "×" })
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: vr.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(at, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : vr.map((i) => {
                            const c = i.durationMs / 1e3, u = c < 6;
                            return /* @__PURE__ */ s(
                              "button",
                              {
                                onClick: () => !u && hs(i),
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
                                      children: /* @__PURE__ */ t(at, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: i.name }),
                                    /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(c / 60),
                                      ":",
                                      Math.floor(c % 60).toString().padStart(2, "0"),
                                      u && " · too short for cover (need ≥6 s)"
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
                                i.preventDefault(), de(!1);
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
                _t && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => Ht(!1),
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
                                  /* @__PURE__ */ t(Mt, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => Ht(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    title: "Close",
                                    children: /* @__PURE__ */ t(be, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const i = Nt.filter((c) => c.audioDataUrl);
                            return i.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(Mt, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : i.map((c) => {
                              const u = c.durationMs / 1e3, v = u > 0 && u < 6, T = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !v && fs(c),
                                  disabled: v,
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
                                        children: !c.coverDataUrl && /* @__PURE__ */ t(Mt, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: T }),
                                      /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        u > 0 ? `${Math.floor(u / 60)}:${Math.floor(u % 60).toString().padStart(2, "0")}` : "—",
                                        c.styleTags && c.styleTags !== "—" && ` · ${c.styleTags}`,
                                        v && " · too short for cover (need ≥6 s)"
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
                  _a,
                  {
                    label: a("musiccreator.theme.label"),
                    hint: a("musiccreator.theme.hint"),
                    headerExtra: /* @__PURE__ */ t(
                      eo,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: ws,
                        busy: $e.theme,
                        disabled: X || $e.theme
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: N,
                        onChange: (i) => j(i.target.value),
                        onDragOver: Ya,
                        onDrop: Ms,
                        placeholder: a("musiccreator.theme.placeholder"),
                        disabled: X,
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
                  _a,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${js} / ${gu}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      eo,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: ks,
                        busy: $e.style,
                        disabled: X || $e.style
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: x,
                        onChange: (i) => L(i.target.value),
                        onDragOver: Ya,
                        onDrop: Is,
                        placeholder: a("musiccreator.style.placeholder"),
                        disabled: X,
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
            /* @__PURE__ */ t(Du, { onPick: Ts, disabled: X }),
            /* @__PURE__ */ t(
              Uu,
              {
                specs: se,
                onChange: ve,
                disabled: X,
                onOptimize: xs,
                optimizing: nt
              }
            )
          ] }),
          /* @__PURE__ */ s(
            _a,
            {
              label: "Cover Art",
              hint: Y?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ s("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  Hi,
                  {
                    checked: Ce,
                    onChange: br,
                    disabled: X || !Y?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      onClick: () => ui(!0),
                      disabled: X,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: he ? `url(${he}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: X ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !he && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(Ia, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        je && /* @__PURE__ */ t(
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
                          onClick: ai,
                          disabled: X || je || !Y?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: X || je || !Y?.models.image ? "not-allowed" : "pointer"
                          },
                          title: Y?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            je ? /* @__PURE__ */ t(oe, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(rt, { size: 11 }),
                            he ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => To.current?.click(),
                          disabled: X,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-secondary)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Upload your own image (PNG/JPG/WebP, max 4 MB)",
                          children: [
                            /* @__PURE__ */ t(go, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      he && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            $(""), Te && fa.current?.(Te, "");
                          },
                          disabled: X,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-disabled)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Remove the cover and fall back to the gradient placeholder",
                          children: [
                            /* @__PURE__ */ t(be, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => _o((i) => !i),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            wr ? /* @__PURE__ */ t(ml, { size: 11 }) : /* @__PURE__ */ t(en, { size: 11 }),
                            wr ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    wr && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: D,
                        onChange: (i) => Z(i.target.value),
                        placeholder: lr(z, N, x),
                        disabled: X,
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
                    ref: To,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (i) => {
                      const c = i.target.files?.[0];
                      c && ri(c), i.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          m !== "restyle" && !q && /* @__PURE__ */ t(
            _a,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (se.intent ?? "").length > 0 ? `${(se.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: se.intent ?? "",
                  onChange: (i) => ve((c) => ({ ...c, intent: i.target.value })),
                  placeholder: 'e.g. "first-person, mostly Spanish with one English chorus, mention rain, no clichés"',
                  disabled: X,
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
            _a,
            {
              label: a("musiccreator.lyrics.label"),
              counter: q ? "instrumental — no vocals" : `${mi} / ${Qt}`,
              counterDanger: !q && mi > Qt,
              className: "mb-5",
              headerExtra: q ? void 0 : /* @__PURE__ */ t(
                eo,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: Ss,
                  busy: $e.lyrics,
                  disabled: X || $e.lyrics || !_.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: _,
                    onChange: (i) => C(i.target.value),
                    onDragOver: Ya,
                    onDrop: zs,
                    placeholder: q ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: X || q,
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
                  hu.map((i) => {
                    const c = B?.id === i.id;
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => {
                          c ? P(null) : (P(i), _.trim() || C(i.skeleton));
                        },
                        disabled: X,
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
                  B && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(zu, { player: O, allTracks: Ie }),
      /* @__PURE__ */ t("audio", { ref: hi, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      fc,
      {
        open: w,
        onClose: () => p(!1),
        onUseRecipe: (i, c) => {
          h("compose"), j(i), L(c);
        }
      }
    ),
    /* @__PURE__ */ t(ju, { open: _r, onClose: () => Nr(!1) }),
    as && /* @__PURE__ */ t(
      up,
      {
        settings: Rr,
        endpoints: qa,
        onChange: rs,
        onClose: () => Ba(!1)
      }
    ),
    ci && /* @__PURE__ */ t(
      Ku,
      {
        track: ci,
        endpoint: Y,
        onSave: Ur,
        onClose: () => di(null)
      }
    ),
    Cs && /* @__PURE__ */ t(
      Yu,
      {
        songName: z,
        mode: m,
        theme: N,
        style: x,
        intent: se.intent ?? "",
        lyrics: _,
        specs: se,
        coverDataUrl: he,
        endpoint: Y,
        busy: je,
        onRegenerate: ai,
        onUpload: ri,
        onClear: () => {
          $(""), Te && fa.current?.(Te, "");
        },
        onClose: () => ui(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(Pu, { retrying: ss, onRetry: Pr });
}
function up({ settings: e, endpoints: a, onChange: r, onClose: o }) {
  const n = (l, d, y) => {
    const m = y.trim(), w = { ...e.overridesByEndpoint[l] ?? {} };
    m ? w[d] = m : delete w[d];
    const p = {
      ...e,
      overridesByEndpoint: {
        ...e.overridesByEndpoint,
        [l]: w
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
                  /* @__PURE__ */ t(an, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                      title: `JULI3TA v${uo}`,
                      children: [
                        "v",
                        uo
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
                      children: /* @__PURE__ */ t(be, { size: 14 })
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
                    /* @__PURE__ */ t(za, { size: 14, style: { color: "#fbbf24" } }),
                    "No reachable endpoints yet — connect a Tytus pod or start local switchAILocal, then come back."
                  ]
                }
              ) : /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", children: a.map((l) => {
                const d = e.overridesByEndpoint[l.url] ?? {}, y = [
                  { key: "music", label: "Music", discovered: l.models.music, kind: "music" },
                  { key: "cover", label: "Restyle", discovered: l.models.cover, kind: "cover" },
                  { key: "lyrics", label: "Lyrics", discovered: l.models.lyrics, kind: "lyrics" },
                  { key: "lyricsBackup", label: "Lyrics fallback", discovered: l.models.lyricsBackup, kind: "chat" },
                  { key: "image", label: "Cover art", discovered: l.models.image, kind: "image" }
                ], m = (p) => /music|cover/i.test(p), h = (p) => /image|diffusion|dall-?e|flux|sdxl/i.test(p), w = (p) => p === "chat" ? l.models.allIds.filter((b) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(b)) : p === "image" ? l.models.allIds.filter(h) : l.models.allIds.filter(m);
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
                              background: hr(l),
                              boxShadow: `0 0 6px ${hr(l)}`
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
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: y.map((p) => {
                        const b = w(p.kind), f = d[p.key] ?? "";
                        return /* @__PURE__ */ s(Qs, { children: [
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
                              value: f,
                              onChange: (S) => n(l.url, p.key, S.target.value),
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
                                /* @__PURE__ */ t("option", { value: "", children: p.discovered ? `Auto · ${p.discovered}` : p.kind === "lyrics" ? "Auto · server-side (no model param)" : b.length === 0 ? "(no models match)" : "Auto · (no preferred match — pick one)" }),
                                b.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: b.map((S) => /* @__PURE__ */ t("option", { value: S, children: S }, S)) })
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
function yp(e) {
  const a = e.host.storage.current();
  return Ic(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(Zs, { value: e, children: /* @__PURE__ */ t(dp, {}) });
  };
}
export {
  yp as default
};
//# sourceMappingURL=index.js.map
