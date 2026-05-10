import { jsx as t, jsxs as s, Fragment as ge } from "react/jsx-runtime";
import { createContext as Fo, useContext as Bo, forwardRef as Wo, createElement as ti, useState as S, useEffect as F, useMemo as be, useRef as ae, useCallback as A, Fragment as Gs } from "react";
import { createPortal as Ia } from "react-dom";
const qo = Fo(null), Vs = qo.Provider;
function ia() {
  const e = Bo(qo);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ys = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, i) => i ? i.toUpperCase() : r.toLowerCase()
), mo = (e) => {
  const a = Ys(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, Jo = (...e) => e.filter((a, r, i) => !!a && a.trim() !== "" && i.indexOf(a) === r).join(" ").trim(), Xs = (e) => {
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
var Qs = {
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
const Zs = Wo(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: i,
    className: n = "",
    children: c,
    iconNode: d,
    ...y
  }, m) => ti(
    "svg",
    {
      ref: m,
      ...Qs,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: i ? Number(r) * 24 / Number(a) : r,
      className: Jo("lucide", n),
      ...!c && !Xs(y) && { "aria-hidden": "true" },
      ...y
    },
    [
      ...d.map(([g, w]) => ti(g, w)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O = (e, a) => {
  const r = Wo(
    ({ className: i, ...n }, c) => ti(Zs, {
      ref: c,
      iconNode: a,
      className: Jo(
        `lucide-${Ks(mo(e))}`,
        `lucide-${e}`,
        i
      ),
      ...n
    })
  );
  return r.displayName = mo(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], tl = O("album", el);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ea = O("check", al);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Go = O("chevron-down", rl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ho = O("chevron-left", il);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], nl = O("chevron-right", ol);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ll = O("chevron-up", sl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], za = O("circle-alert", cl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], ul = O("circle-question-mark", dl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Vo = O("copy", pl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], zt = O("disc-3", ml);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Ko = O("download", hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gl = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], di = O("ellipsis-vertical", gl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], Yo = O("external-link", yl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fl = [
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
], Lt = O("file-music", fl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], vl = O("folder-open", bl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], sr = O("heart", xl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], La = O("image", wl);
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
], ai = O("layers", kl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Tl = O("list-music", Sl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], ne = O("loader-circle", _l);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Ze = O("mic", Nl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], go = O("monitor-speaker", Cl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], yo = O("monitor", Al);
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
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], zl = O("moon", El);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ll = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], Ma = O("music-2", Ll);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], lr = O("notebook-text", Il);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], vt = O("pause", Ml);
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], Xo = O("pencil", Rl);
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
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], ve = O("play", jl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ri = O("plus", Pl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Ul = O("radio", Dl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Hl = O("refresh-cw", Ol);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], Qo = O("repeat-1", $l);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], Bl = O("repeat", Fl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ht = O("search", Wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], Zo = O("settings-2", ql);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], ui = O("shuffle", Jl);
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
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], et = O("sparkles", Gl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], en = O("square-check-big", Vl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], tn = O("square", Kl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], It = O("trash-2", Yl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xl = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], pi = O("upload", Xl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], Zl = O("user-round", Ql);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], tc = O("volume-2", ec);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], rc = O("volume-x", ac);
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
], Mt = O("wand-sparkles", ic);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ye = O("x", oc), nc = {
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
}, sc = {
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
}, fo = { en: nc, es: sc }, Qa = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", lc = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, i) => String(a[i] ?? `{${i}}`)) : e;
function Rt() {
  const { host: e } = ia(), [a, r] = S(() => Qa(e.i18n?.locale));
  F(() => e.i18n?.onLocaleChange?.((n) => r(Qa(n))), [e]);
  const i = be(() => (n, c) => {
    const d = e.i18n?.t?.(n, c);
    if (d && d !== n) return d;
    const y = Qa(a), m = fo[y]?.[n] ?? fo.en[n] ?? n;
    return lc(m, c);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: i,
    setLanguage: (n) => r(Qa(n)),
    installLanguagePack: (n) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (n) => {
    }
  };
}
const cc = [
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
], dc = [
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
function uc({ recipe: e, onUse: a }) {
  const { t: r } = Rt(), [i, n] = S(!1), c = async () => {
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
                /* @__PURE__ */ t(Mt, { size: 12 }),
                r("julietaHelp.recipe.use")
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: c,
              className: "flex items-center justify-center gap-1 px-2 py-1.5 rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                fontSize: 11,
                color: "var(--text-secondary)",
                border: "1px solid var(--border-subtle)"
              },
              title: r("julietaHelp.recipe.copy"),
              children: i ? /* @__PURE__ */ t(ea, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(Vo, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function pc({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: i, language: n } = Rt(), [c, d] = S("start");
  if (!e) return null;
  const y = n === "es" ? dc : cc;
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
                        children: /* @__PURE__ */ t(zt, { size: 18, style: { color: "white" } })
                      }
                    ),
                    /* @__PURE__ */ s("div", { children: [
                      /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }, children: i("julietaHelp.title") }),
                      /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: i("julietaHelp.subtitle") })
                    ] })
                  ] }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: a,
                      className: "p-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                      style: { color: "var(--text-secondary)" },
                      children: /* @__PURE__ */ t(ye, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1 px-5 pt-3 flex-shrink-0", children: ["start", "recipes", "help"].map((m) => {
              const g = c === m;
              return /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => d(m),
                  className: "px-3 py-1.5 rounded-lg transition-all",
                  style: {
                    fontSize: 11,
                    fontWeight: g ? 600 : 500,
                    color: g ? "var(--text-primary)" : "var(--text-secondary)",
                    background: g ? "var(--bg-titlebar)" : "transparent",
                    border: g ? "1px solid var(--border-subtle)" : "1px solid transparent"
                  },
                  children: i(`julietaHelp.tab.${m}`)
                },
                m
              );
            }) }),
            /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", style: { paddingBottom: 96 }, children: [
              c === "start" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(Yt, { icon: /* @__PURE__ */ t(et, { size: 14 }), text: i("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(Za, { n: 1, title: i("julietaHelp.start.s1.title"), body: i("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(Za, { n: 2, title: i("julietaHelp.start.s2.title"), body: i("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(Za, { n: 3, title: i("julietaHelp.start.s3.title"), body: i("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(Za, { n: 4, title: i("julietaHelp.start.s4.title"), body: i("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(Yt, { icon: /* @__PURE__ */ t(Mt, { size: 14 }), text: i("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t($r, { emoji: "🎵", name: i("julietaHelp.start.mode.song.name"), body: i("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t($r, { emoji: "🎨", name: i("julietaHelp.start.mode.cover.name"), body: i("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t($r, { emoji: "✍️", name: i("julietaHelp.start.mode.lyrics.name"), body: i("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(Yt, { icon: /* @__PURE__ */ t(Ze, { size: 14 }), text: i("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(mc, { body: i("julietaHelp.start.recorder.body") }),
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: "p-3 rounded-lg",
                    style: {
                      background: "linear-gradient(135deg, rgba(124,77,255,0.1), rgba(255,152,0,0.1))",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: [
                      /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }, children: i("julietaHelp.start.tip.title") }),
                      /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: i("julietaHelp.start.tip.body") })
                    ]
                  }
                )
              ] }),
              c === "recipes" && /* @__PURE__ */ s("div", { className: "space-y-3", children: [
                /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: i("julietaHelp.recipes.intro") }),
                y.map((m) => /* @__PURE__ */ t(
                  uc,
                  {
                    recipe: m,
                    onUse: (g) => {
                      r(g.theme, g.style), a();
                    }
                  },
                  m.id
                ))
              ] }),
              c === "help" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(Yt, { icon: /* @__PURE__ */ t(za, { size: 14 }), text: i("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.failed.title"), a: i("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.nopod.title"), a: i("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.local.title"), a: i("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t(Yt, { icon: /* @__PURE__ */ t(Mt, { size: 14 }), text: i("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.howlong.title"), a: i("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.quota.title"), a: i("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.length.title"), a: i("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.coverlen.title"), a: i("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t(Yt, { icon: /* @__PURE__ */ t(Ze, { size: 14 }), text: i("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.silentmic.title"), a: i("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.shortrec.title"), a: i("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t(Xe, { q: i("julietaHelp.help.q.privacy.title"), a: i("julietaHelp.help.q.privacy.body") })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function Yt({ icon: e, text: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: a })
  ] });
}
function Za({ n: e, title: a, body: r }) {
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
function $r({ emoji: e, name: a, body: r }) {
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
function mc({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function Xe({ q: e, a }) {
  const [r, i] = S(!1);
  return /* @__PURE__ */ s(
    "div",
    {
      className: "rounded-lg overflow-hidden",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            onClick: () => i((n) => !n),
            className: "w-full flex items-center gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            children: [
              /* @__PURE__ */ t(
                nl,
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
const Fr = (e) => {
  const a = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(a.agents) ? a.agents : [],
    included: Array.isArray(a.included) ? a.included : [],
    tiers: [],
    ...a
  };
}, hc = () => {
  const { host: e } = ia(), [a, r] = S(0), [i, n] = S(() => Fr(e.daemon?.state));
  return F(() => (n(Fr(e.daemon?.state)), e.daemon?.onStateChange?.((c) => n(Fr(c)))), [e, a]), be(() => ({
    state: i,
    error: null,
    status: i ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((c) => c + 1)
  }), [i]);
}, gc = (e, a) => {
  const { host: r } = ia();
  F(() => {
    if (!(!a || !r.shellMenu?.register))
      return r.shellMenu.register({
        appId: r.appId,
        groups: a.groups.map((i) => ({
          label: i.label,
          items: i.items.map((n) => ({
            id: n.id,
            label: n.label,
            disabled: n.disabled,
            onClick: n.onSelect
          }))
        }))
      });
  }, [r, a]);
};
function yc() {
  return ia().host.windows.current;
}
const an = "juli3ta_standalone_vfs_v1", rn = () => Math.random().toString(36).slice(2) + Date.now().toString(36), At = (e, a) => ({
  id: rn(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), fc = () => {
  const e = At("/", null), a = At("home", e.id), r = At("user", a.id), i = At("Desktop", r.id), n = At("Music", r.id), c = At("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, i, n, c].map((d) => [d.id, d])) };
}, er = () => {
  try {
    const a = localStorage.getItem(an);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = fc();
  return ir(e), e;
}, ir = (e) => {
  try {
    localStorage.setItem(an, JSON.stringify(e));
  } catch {
  }
}, bc = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), vc = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function xc() {
  return {
    ensureUserFolder(a) {
      const r = er(), i = bc(a);
      let n = Object.values(r.nodes).find((c) => c.type === "folder" && c.name === i);
      if (!n) {
        const c = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        n = At(i, c?.id ?? null), r.nodes[n.id] = n, ir(r);
      }
      return n.id;
    },
    findChildByName(a, r) {
      const i = er();
      return Object.values(i.nodes).find((n) => n.parentId === a && n.name === r);
    },
    createFile(a, r, i = "", n = {}) {
      const c = er(), d = { id: rn(), name: r, type: "file", parentId: a, content: i, mimeType: n.mimeType, refTrackId: n.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return c.nodes[d.id] = d, ir(c), d.id;
    },
    writeFile(a, r) {
      const i = er();
      i.nodes[a] && (i.nodes[a].content = r, i.nodes[a].modifiedAt = Date.now(), ir(i));
    }
  };
}
const wc = { theme: { mode: "dark" } }, kc = Fo(null);
function on() {
  const e = Bo(kc), { host: a } = ia();
  return be(() => e || {
    state: wc,
    dispatch: (r) => {
      if (r.type === "OPEN_OR_FOCUS_WINDOW" && typeof r.appId == "string" && a.windows.openOrFocus(r.appId, r.args), r.type === "ADD_DESKTOP_ICON") {
        const i = r.icon;
        a.windows.addDesktopIcon?.({
          label: i.name,
          iconUrl: i.icon,
          onClick: () => {
          }
        });
      }
    }
  }, [e, a]);
}
function Sc() {
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
const Tc = {
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
}, _c = {
  juli3ta: Tc
};
function mi({ name: e, size: a = 24, className: r, style: i, alt: n, scale: c }) {
  const [d, y = "mark"] = e.split(":"), m = _c[d], { state: g } = on();
  let w;
  if (y === "mark" ? w = g.theme.mode === "light" ? m?.["mark-ink"] : m?.["mark-white"] : w = m?.[y], !w) return null;
  const p = n ?? d.charAt(0).toUpperCase() + d.slice(1), f = c ?? w.scale ?? 1;
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
        ...f !== 1 ? { transform: `scale(${f})`, transformOrigin: "center" } : null,
        ...w.filter ? { filter: w.filter } : null,
        ...i
      },
      className: r,
      draggable: !1
    }
  );
}
let nn = null, bo = null;
const Br = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), Nc = [
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
function Cc(e) {
  bo = (async () => {
    for (const r of Nc) await e.run(r);
  })();
  const a = async () => bo;
  nn = {
    exec: async (r) => {
      await a();
      for (const i of Br(r).split(";").map((n) => n.trim()).filter(Boolean))
        await e.run(i);
    },
    query: async (r, i = []) => (await a(), e.query(Br(r), i)),
    run: async (r, i = []) => {
      await a(), await e.run(Br(r), i);
    },
    tx: async (r) => (await a(), r())
  };
}
const oe = () => nn, cr = (e) => ({
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
}), G = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), hi = (e) => G(e, "specs_json") || G(e, "cover_data_url") || G(e, "theme") || G(e, "source") || G(e, "audio_kind") || G(e, "external_id") || G(e, "external_url") || G(e, "thumbnail_url") || G(e, "artist") || G(e, "album"), vo = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, xo = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, Wr = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, Nt = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), sn = async (e, a, r, i) => {
  if (G(i, "source") || G(i, "audio_kind") || G(i, "external_id") || G(i, "external_url") || G(i, "thumbnail_url") || G(i, "artist") || G(i, "album"))
    try {
      return (await e.query(
        `SELECT ${vo}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(Nt);
    } catch (n) {
      i = n;
    }
  if (G(i, "theme"))
    try {
      return (await e.query(
        `SELECT ${vo} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => Nt({ ...c, theme: "" }));
    } catch (n) {
      if (!G(n, "cover_data_url")) throw n;
      try {
        return (await e.query(
          `SELECT ${xo} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => Nt({ ...d, cover_data_url: "", theme: "" }));
      } catch (c) {
        if (!G(c, "specs_json")) throw c;
        return (await e.query(
          `SELECT ${Wr} FROM music_creator_tracks ${a}`,
          r
        )).map((y) => Nt({ ...y, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (G(i, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${xo} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => Nt({ ...c, cover_data_url: "", theme: "" }));
    } catch (n) {
      if (!G(n, "specs_json")) throw n;
      return (await e.query(
        `SELECT ${Wr} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => Nt({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (G(i, "specs_json"))
    return (await e.query(
      `SELECT ${Wr} FROM music_creator_tracks ${a}`,
      r
    )).map((c) => Nt({ ...c, specs_json: "", cover_data_url: "", theme: "" }));
  throw i;
}, ln = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, Ac = async () => {
  const e = oe();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${ln} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(cr);
  } catch (a) {
    if (!hi(a)) throw a;
    return (await sn(e, "ORDER BY created_at DESC", [], a)).map(cr);
  }
}, Ec = async (e) => {
  const a = oe();
  if (!a) return null;
  try {
    const r = await a.query(
      `SELECT ${ln} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return r.length === 0 ? null : cr(r[0]);
  } catch (r) {
    if (!hi(r)) throw r;
    const i = await sn(a, "WHERE id = ? LIMIT 1", [e], r);
    return i.length === 0 ? null : cr(i[0]);
  }
}, dr = async (e) => {
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
  } catch (i) {
    if (!hi(i)) throw i;
    if (G(i, "source") || G(i, "audio_kind") || G(i, "external_id") || G(i, "external_url") || G(i, "thumbnail_url") || G(i, "artist") || G(i, "album"))
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
        i = n;
      }
    if (G(i, "theme"))
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
    if (G(i, "cover_data_url"))
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
}, zc = async (e) => {
  const a = oe();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Lc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  const i = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [i, e]), i;
}, Ic = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (i) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(i))) throw i;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, Mc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, Rc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, jc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (i) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(i))) throw i;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, Pc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (i) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(i))) throw i;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, Dc = async (e, a) => {
  const r = oe();
  if (!r) return a;
  const i = await r.query(
    "SELECT value FROM music_creator_settings WHERE key = ? LIMIT 1",
    [e]
  );
  if (i.length === 0) return a;
  try {
    return JSON.parse(i[0].value);
  } catch {
    return a;
  }
}, Uc = async (e, a) => {
  const r = oe();
  r && await r.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(a)]
  );
}, cn = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, dn = "music_creator_settings", Oc = () => Dc(dn, cn), Hc = (e) => Uc(dn, e), at = () => Date.now(), un = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: e.provider === "youtube" ? "YouTube" : e.provider,
  lyricsPreview: "",
  durationMs: e.duration_ms ?? 0,
  bitrate: 0,
  sampleRate: 0,
  sizeBytes: 0,
  createdAt: e.added_at ?? at(),
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
}), ii = (e) => ({
  id: e.id,
  provider: e.source || "youtube",
  external_id: e.externalId || e.id.replace(/^.+?:/, ""),
  title: e.title || "Untitled",
  artist: e.artist || "",
  album: e.album || "",
  duration_ms: e.durationMs || 0,
  thumbnail_url: e.thumbnailUrl || "",
  external_url: e.externalUrl || "",
  added_at: e.createdAt || at(),
  last_played_at: 0
}), pn = [
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
], $c = pn.join(", "), Fc = pn.map((e) => `t.${e}`).join(", "), Bc = async () => {
  const e = oe();
  return e ? (await e.query(
    `SELECT ${$c} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(un) : [];
}, mn = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = ii(e);
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
}, Wc = async (e) => {
  const a = oe();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, qc = async () => {
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
}, Jc = async (e) => {
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
}, Gc = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = await a.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(r[0]?.n ?? 0) > 0 ? (await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await a.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", at()]
  ), !0);
}, wa = async () => {
  const e = oe();
  if (!e) return [];
  const a = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), r = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${Fc}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), i = /* @__PURE__ */ new Map();
  return r.forEach((n) => {
    i.set(n.playlist_id, [...i.get(n.playlist_id) ?? [], un(n)]);
  }), a.map((n) => ({
    id: n.id,
    name: n.name,
    createdAt: n.created_at,
    updatedAt: n.updated_at,
    items: i.get(n.id) ?? []
  }));
}, Vc = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", i = at(), n = { id: `playlist:${i}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: i, updatedAt: i, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [n.id, n.name, n.createdAt, n.updatedAt]
  ), n;
}, Kc = async (e) => {
  const a = oe();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, Yc = async (e, a) => {
  const r = oe();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await mn(a);
    const i = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), n = Number(i[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, n, at()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [at(), e]);
  });
}, Xc = async (e, a) => {
  const r = oe();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [at(), e]));
}, Qc = async (e) => {
  const a = oe();
  a && await a.tx(async () => {
    for (const r of e.tracks) {
      const i = ii(r);
      await a.run(
        `INSERT OR IGNORE INTO music_library_tracks
           (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
        [i.id, i.provider, i.external_id, i.title, i.artist, i.album, i.duration_ms, i.thumbnail_url, i.external_url, i.added_at]
      ), await a.run(
        `UPDATE music_library_tracks
           SET provider = ?, external_id = ?, title = ?, artist = ?, album = ?, duration_ms = ?, thumbnail_url = ?, external_url = ?
         WHERE id = ?`,
        [i.provider, i.external_id, i.title, i.artist, i.album, i.duration_ms, i.thumbnail_url, i.external_url, i.id]
      );
    }
    for (const r of e.favorites)
      await a.run(
        `INSERT OR IGNORE INTO music_favorites (kind, entity_id, provider, title, created_at)
         VALUES (?, ?, ?, ?, ?)`,
        [r.kind, r.entityId, r.provider, r.title ?? "", r.createdAt ?? at()]
      ), await a.run(
        "UPDATE music_favorites SET provider = ?, title = ? WHERE kind = ? AND entity_id = ?",
        [r.provider, r.title ?? "", r.kind, r.entityId]
      );
    for (const r of e.playlists) {
      const i = r.createdAt || at(), n = r.updatedAt || i;
      await a.run(
        "INSERT OR IGNORE INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
        [r.id, r.name || "Playlist", i, n]
      ), await a.run(
        "UPDATE music_playlists SET name = ?, updated_at = ? WHERE id = ?",
        [r.name || "Playlist", n, r.id]
      ), await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [r.id]);
      let c = 0;
      for (const d of r.items) {
        const y = ii(d);
        await a.run(
          `INSERT OR IGNORE INTO music_library_tracks
             (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
          [y.id, y.provider, y.external_id, y.title, y.artist, y.album, y.duration_ms, y.thumbnail_url, y.external_url, y.added_at]
        ), await a.run(
          `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
           VALUES (?, ?, ?, ?)`,
          [r.id, d.id, c++, at()]
        );
      }
    }
  });
}, hn = "/api/juli3ta/music-state", gn = "juli3ta:musicLibrarySnapshot:v1", $e = () => Date.now(), Zc = () => ({
  version: 1,
  updatedAt: 0,
  tracks: [],
  favorites: [],
  playlists: []
}), gi = (e) => !!e && typeof e == "object" && !Array.isArray(e), yi = (e) => {
  if (!gi(e)) return null;
  const a = String(e.id ?? "").trim();
  if (!a) return null;
  const r = e.source === "juli3ta" ? "juli3ta" : "youtube", i = e.audioKind === "data_url" || e.audioKind === "lyrics_only" ? e.audioKind : "remote_stream";
  return {
    id: a,
    title: String(e.title ?? "Untitled"),
    styleTags: String(e.styleTags ?? (r === "youtube" ? "YouTube" : r)),
    lyricsPreview: String(e.lyricsPreview ?? ""),
    durationMs: Number(e.durationMs ?? 0) || 0,
    bitrate: Number(e.bitrate ?? 0) || 0,
    sampleRate: Number(e.sampleRate ?? 0) || 0,
    sizeBytes: Number(e.sizeBytes ?? 0) || 0,
    createdAt: Number(e.createdAt ?? $e()) || $e(),
    audioDataUrl: String(e.audioDataUrl ?? ""),
    specsJson: String(e.specsJson ?? ""),
    coverDataUrl: String(e.coverDataUrl ?? ""),
    theme: String(e.theme ?? ""),
    source: r,
    audioKind: i,
    externalId: String(e.externalId ?? ""),
    externalUrl: String(e.externalUrl ?? ""),
    thumbnailUrl: String(e.thumbnailUrl ?? ""),
    artist: String(e.artist ?? ""),
    album: String(e.album ?? "")
  };
}, ed = (e) => {
  if (!gi(e)) return null;
  const a = e.kind;
  if (a !== "track" && a !== "artist" && a !== "album" && a !== "playlist") return null;
  const r = String(e.entityId ?? "").trim();
  return r ? {
    kind: a,
    entityId: r,
    provider: String(e.provider ?? ""),
    title: String(e.title ?? ""),
    createdAt: Number(e.createdAt ?? $e()) || $e()
  } : null;
}, yn = (e) => {
  if (!gi(e)) return null;
  const a = String(e.id ?? "").trim();
  return a ? {
    id: a,
    name: String(e.name ?? "Playlist"),
    createdAt: Number(e.createdAt ?? $e()) || $e(),
    updatedAt: Number(e.updatedAt ?? e.createdAt ?? $e()) || $e(),
    items: Array.isArray(e.items) ? e.items.map(yi).filter((r) => !!r) : []
  } : null;
}, ta = (e) => e ? {
  version: 1,
  updatedAt: Number(e.updatedAt ?? 0) || 0,
  tracks: Array.isArray(e.tracks) ? e.tracks.map(yi).filter((a) => !!a) : [],
  favorites: Array.isArray(e.favorites) ? e.favorites.map(ed).filter((a) => !!a) : [],
  playlists: Array.isArray(e.playlists) ? e.playlists.map(yn).filter((a) => !!a) : []
} : Zc(), wo = (e, a) => {
  const r = /* @__PURE__ */ new Map();
  for (const i of [...e, ...a]) {
    const n = r.get(i.id);
    if (!n) {
      r.set(i.id, i);
      continue;
    }
    const c = i.updatedAt ?? i.createdAt ?? 0, d = n.updatedAt ?? n.createdAt ?? 0;
    c >= d && r.set(i.id, i);
  }
  return [...r.values()].sort((i, n) => (n.updatedAt ?? n.createdAt ?? 0) - (i.updatedAt ?? i.createdAt ?? 0));
}, td = (e, a) => {
  const r = /* @__PURE__ */ new Map();
  for (const i of [...e, ...a]) {
    const n = `${i.kind}:${i.entityId}`, c = r.get(n);
    (!c || (i.createdAt ?? 0) >= (c.createdAt ?? 0)) && r.set(n, i);
  }
  return [...r.values()].sort((i, n) => (n.createdAt ?? 0) - (i.createdAt ?? 0));
}, ko = (e, a) => {
  const r = ta(e), i = ta(a);
  return {
    version: 1,
    updatedAt: Math.max(r.updatedAt, i.updatedAt, $e()),
    tracks: wo(i.tracks, r.tracks),
    favorites: td(i.favorites, r.favorites),
    playlists: wo(i.playlists, r.playlists)
  };
}, ad = (e, a, r) => {
  const i = new Map(e.map((n) => [n.id, n]));
  return {
    version: 1,
    updatedAt: $e(),
    tracks: e.map((n) => yi(n)).filter((n) => !!n),
    favorites: [...a].map((n) => {
      const c = i.get(n);
      return {
        kind: "track",
        entityId: n,
        provider: c?.source ?? "youtube",
        title: c?.title ?? "",
        createdAt: $e()
      };
    }),
    playlists: r.map((n) => yn(n)).filter((n) => !!n)
  };
}, rd = () => {
  try {
    const e = localStorage.getItem(gn);
    return e ? ta(JSON.parse(e)) : null;
  } catch {
    return null;
  }
}, id = (e) => {
  try {
    localStorage.setItem(gn, JSON.stringify(ta(e)));
  } catch {
  }
}, od = async () => {
  try {
    const e = await fetch(hn, {
      method: "GET",
      headers: { Accept: "application/json" }
    });
    if (!e.ok) return null;
    const a = await e.json();
    return ta(a.state);
  } catch {
    return null;
  }
}, So = async (e) => {
  const a = ta(e);
  id(a);
  try {
    await fetch(hn, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": `juli3ta-music-state-${a.updatedAt}-${a.tracks.length}-${a.favorites.length}`
      },
      body: JSON.stringify({ state: a })
    });
  } catch {
  }
}, nd = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), To = async () => {
  const e = oe();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(nd) : [];
}, fn = async (e) => {
  const a = oe();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, qr = "tytus.voice-recorder.recordings", sd = async () => {
  try {
    const e = localStorage.getItem(qr);
    if (!e) return;
    const a = JSON.parse(e);
    if (!Array.isArray(a)) {
      localStorage.removeItem(qr);
      return;
    }
    for (const r of a)
      if (!(!r?.id || typeof r.audioDataUrl != "string"))
        try {
          await fn({
            id: r.id,
            name: r.name ?? "Untitled recording",
            durationMs: r.durationMs ?? 0,
            createdAt: r.createdAt ?? Date.now(),
            mimeType: r.mimeType ?? "audio/webm",
            audioDataUrl: r.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(qr);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, ld = (e, a) => e._value, cd = "http://localhost:18080/v1", dd = "sk-test-123", ud = (e) => /\/v1\/?$/i.test(e), bn = (e) => typeof e == "object" && e !== null, pd = (e) => typeof e == "string" ? e : bn(e) && typeof e._value == "string" ? ld(e) : "", Jr = (...e) => {
  for (const a of e)
    if (typeof a == "string" && a.trim()) return a;
  return null;
}, _o = (e) => {
  const a = e?.trim();
  if (!a) return null;
  const r = a.replace(/\/+$/, "");
  return ud(r) ? r : `${r}/v1`;
}, Gr = (e, a, r) => {
  a.has(r.url) || (a.add(r.url), e.push(r));
}, md = (e) => {
  const a = [], r = /* @__PURE__ */ new Set();
  for (const i of e) {
    const n = i, c = bn(n.meta) ? n.meta : {}, d = pd(
      n.user_key ?? n.userKey ?? n.api_key ?? n.apiKey ?? c.userKey ?? c.gatewayKey ?? c.apiKey ?? c.api_key
    );
    if (!d) continue;
    const y = Jr(n.pod_id, n.podId, n.id) || "included", m = _o(
      Jr(n.public_url, n.publicUrl, n.gatewayUrl, c.gatewayUrl, c.publicUrl)
    );
    m && Gr(a, r, {
      url: m,
      apiKey: d,
      podId: `${y}:remote`,
      source: "included",
      label: `AIL gateway ${y} (remote)`,
      proxyPodId: y
    });
    const g = _o(
      Jr(n.endpoint, n.private_url, n.privateUrl, c.endpoint, c.privateUrl)
    );
    g && Gr(a, r, {
      url: g,
      apiKey: d,
      podId: `${y}:tunnel`,
      source: "included",
      label: `AIL gateway ${y} (tunnel)`,
      proxyPodId: y
    });
  }
  return Gr(a, r, {
    url: cd,
    apiKey: dd,
    podId: "local",
    source: "local",
    label: "Local AIL"
  }), a;
}, fi = 100, hd = 30, or = 6, gd = 360, No = 12, yd = 3, fd = 0.4, bd = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const i = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((d) => MediaRecorder.isTypeSupported(d));
  if (!i)
    throw new Error("No supported recorder mime type for fallback.");
  const n = URL.createObjectURL(e), c = new Audio();
  c.src = n, c.muted = !0, c.crossOrigin = "anonymous", c.preload = "auto";
  try {
    await new Promise((k, I) => {
      const N = () => k(), j = () => I(new Error("Audio element rejected the source format too — browser cannot play it."));
      c.addEventListener("canplay", N, { once: !0 }), c.addEventListener("error", j, { once: !0 }), c.load();
    });
    const d = a.createMediaElementSource(c), y = a.createMediaStreamDestination();
    d.connect(y);
    const m = new MediaRecorder(y.stream, { mimeType: i }), g = [];
    m.ondataavailable = (k) => {
      k.data.size > 0 && g.push(k.data);
    };
    const w = Math.max(
      6e3,
      Math.min(r, c.duration || r) * 1e3
    ), p = new Promise((k) => {
      m.onstop = () => k();
    });
    m.start(250), c.currentTime = 0, await c.play(), await new Promise((k) => setTimeout(k, w)), m.stop(), c.pause(), await p;
    const f = new Blob(g, { type: i });
    if (f.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const b = await f.arrayBuffer();
    return await a.decodeAudioData(b);
  } finally {
    URL.revokeObjectURL(n);
  }
}, vn = async (e, a = 35) => {
  const r = window.AudioContext || window.webkitAudioContext, i = new r();
  try {
    const n = await e.arrayBuffer();
    try {
      return await i.decodeAudioData(n.slice(0));
    } catch (c) {
      try {
        return await bd(e, i, a);
      } catch (d) {
        const y = c.message || "decodeAudioData failed", m = d.message || "fallback failed";
        throw new Error(
          `Audio format isn't supported by this browser (${y}). Compatibility-mode capture also failed: ${m}`
        );
      }
    }
  } finally {
    i.close().catch(() => {
    });
  }
}, xn = async (e) => (await fetch(e)).blob(), oi = (e) => new Promise((a, r) => {
  const i = new FileReader();
  i.onload = () => {
    const n = typeof i.result == "string" ? i.result : "", c = n.indexOf("base64,");
    a(c >= 0 ? n.slice(c + 7) : "");
  }, i.onerror = () => r(i.error), i.readAsDataURL(e);
}), vd = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * fi / 1e3)), i = Math.floor(e.length / r), n = new Float32Array(i), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < i; d++) {
    const y = d * r;
    let m = 0;
    for (let g = 0; g < r; g++) {
      let w = 0;
      for (let p = 0; p < c.length; p++) w += c[p][y + g];
      w /= c.length, m += w * w;
    }
    n[d] = Math.sqrt(m / r);
  }
  return n;
}, xd = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * fi / 1e3)), i = Math.floor(e.length / r), n = new Float32Array(i), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < i; d++) {
    const y = d * r;
    let m = 0, g = 0;
    for (let w = 0; w < c.length; w++) g += c[w][y];
    g /= c.length;
    for (let w = 1; w < r; w++) {
      let p = 0;
      for (let f = 0; f < c.length; f++) p += c[f][y + w];
      p /= c.length, (g > 1e-3 && p < -1e-3 || g < -1e-3 && p > 1e-3) && m++, g = p;
    }
    n[d] = m / (r / 2);
  }
  return n;
}, wn = (e) => {
  const a = vd(e), r = xd(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / fi };
}, wd = (e, a = 4) => {
  let r = 0;
  for (let m = 0; m < e.length; m++) r += e[m];
  const i = r / e.length;
  let n = 0;
  for (let m = 0; m < e.length; m++) n += (e[m] - i) ** 2;
  const c = Math.sqrt(n / e.length) || 1, d = Math.floor(e.length / a), y = new Float32Array(d);
  for (let m = 0; m < d; m++) {
    let g = 0;
    for (let w = 0; w < a; w++) g += e[m * a + w];
    y[m] = (g / a - i) / c;
  }
  return y;
}, kd = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const i = Math.max(1, Math.floor(r / 4));
  let n = -1 / 0, c = 0;
  for (let m = 0; m + r < e.length; m += i) {
    if (Math.abs(m - a) < r) continue;
    let g = 0;
    for (let w = 0; w < r; w++)
      g += e[a + w] * e[m + w];
    g /= r, g > n && (n = g), g > 0.5 && c++;
  }
  const d = Math.max(0, Math.min(1, (n + 1) / 2)), y = Math.min(1, c / 6);
  return 0.6 * d + 0.4 * y;
}, kn = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const i = wd(e.rms, 4), n = e.rms.length / i.length, c = Math.max(1, Math.floor(r / n));
  let d = 0, y = 0, m = 0;
  for (let f = 0; f < r; f++)
    d += e.rms[f], y += e.rms[f] * e.rms[f], m += e.centroid[f];
  const g = [], w = Math.max(1, Math.floor(e.framesPerSec)), p = (f) => {
    const b = d / r, k = Math.max(0, y / r - b * b), I = Math.sqrt(k), N = m / r, j = Math.floor(f / n), _ = kd(i, j, c), C = 0.45 * Math.min(1, b * 4) + 0.2 * N + 0.25 * _ - 0.1 * Math.min(1, I * 6);
    g.push({
      startFrame: f,
      lenFrames: r,
      score: C,
      meanRms: b,
      stdRms: I,
      meanBright: N,
      selfSim: _
    });
  };
  p(0);
  for (let f = r; f < e.rms.length; f += w) {
    for (let b = 0; b < w && f - w + b < e.rms.length; b++) {
      const k = f - r - w + b + 1, I = f - w + b + 1;
      if (I >= e.rms.length) break;
      k >= 0 && (d -= e.rms[k], y -= e.rms[k] * e.rms[k], m -= e.centroid[k]), d += e.rms[I], y += e.rms[I] * e.rms[I], m += e.centroid[I];
    }
    p(f - r + w);
  }
  return g;
}, ni = (e, a, r) => {
  const i = new Float32Array(r), n = [];
  for (let c = 0; c < e.numberOfChannels; c++) n.push(e.getChannelData(c));
  for (let c = 0; c < r; c++) {
    let d = 0;
    for (let y = 0; y < n.length; y++) d += n[y][a + c] || 0;
    i[c] = d / n.length;
  }
  return i;
}, si = (e, a) => {
  const n = a * 1 * 2, c = 1 * (16 / 8), d = e.length * 2, y = new ArrayBuffer(44 + d), m = new DataView(y);
  let g = 0;
  const w = (b) => {
    for (let k = 0; k < b.length; k++) m.setUint8(g++, b.charCodeAt(k));
  }, p = (b) => {
    m.setUint32(g, b, !0), g += 4;
  }, f = (b) => {
    m.setUint16(g, b, !0), g += 2;
  };
  w("RIFF"), p(36 + d), w("WAVE"), w("fmt "), p(16), f(1), f(1), p(a), p(n), f(c), f(16), w("data"), p(d);
  for (let b = 0; b < e.length; b++) {
    const k = Math.max(-1, Math.min(1, e[b]));
    m.setInt16(g, k < 0 ? k * 32768 : k * 32767, !0), g += 2;
  }
  return new Blob([y], { type: "audio/wav" });
}, Sn = async (e, a = hd) => {
  const r = typeof e == "string" ? await xn(e) : e, i = await vn(r), n = i.length / i.sampleRate;
  if (n < or)
    throw new Error(`Source is too short (${n.toFixed(1)} s). Need at least ${or} s.`);
  const c = Math.min(gd, Math.max(or, a));
  if (n <= c) {
    const k = ni(i, 0, i.length), I = si(k, i.sampleRate);
    return { base64: await oi(I), durationSec: n, startSec: 0, sourceDurationSec: n, score: 1 };
  }
  const d = wn(i), y = kn(d, c);
  if (y.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  y.sort((k, I) => I.score - k.score);
  const m = y[0], g = Math.floor(m.startFrame / d.framesPerSec * i.sampleRate), w = Math.floor(m.lenFrames / d.framesPerSec * i.sampleRate), p = ni(i, g, w), f = si(p, i.sampleRate);
  return {
    base64: await oi(f),
    durationSec: w / i.sampleRate,
    startSec: g / i.sampleRate,
    sourceDurationSec: n,
    score: Math.max(0, Math.min(1, m.score))
  };
}, Sd = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const i = Math.floor(r * a);
  let n = 0;
  for (const y of e) n += y.length;
  n -= i * (e.length - 1);
  const c = new Float32Array(n);
  let d = 0;
  c.set(e[0], 0), d = e[0].length - i;
  for (let y = 1; y < e.length; y++) {
    const m = e[y];
    for (let g = 0; g < i; g++) {
      const w = g / i;
      c[d + g] = c[d + g] * (1 - w) + m[g] * w;
    }
    for (let g = i; g < m.length; g++)
      c[d + g] = m[g];
    d += m.length - i;
  }
  return c;
}, Td = (e, a, r) => {
  const i = [...e].sort((c, d) => d.score - c.score), n = [];
  for (const c of i)
    if (n.some(
      (y) => Math.abs(y.startFrame - c.startFrame) < Math.max(y.lenFrames, c.lenFrames) + r
    ) || n.push(c), n.length >= a) break;
  return n.sort((c, d) => c.startFrame - d.startFrame), n;
}, _d = async (e) => {
  const a = typeof e == "string" ? await xn(e) : e, r = await vn(a), i = r.length / r.sampleRate;
  if (i < or * 2) {
    const b = await Sn(a);
    return {
      base64: b.base64,
      durationSec: b.durationSec,
      segments: [{ startSec: b.startSec, endSec: b.startSec + b.durationSec, score: b.score }],
      sourceDurationSec: i
    };
  }
  const n = wn(r), c = kn(n, No);
  if (c.length === 0)
    throw new Error("Could not analyze the audio.");
  const d = Math.max(
    Math.floor(No * n.framesPerSec * 0.5),
    Math.floor(n.rms.length / 4)
  ), y = Td(c, yd, d), m = y.map((b) => {
    const k = Math.floor(b.startFrame / n.framesPerSec * r.sampleRate), I = Math.floor(b.lenFrames / n.framesPerSec * r.sampleRate);
    return ni(r, k, I);
  }), g = Sd(m, r.sampleRate, fd), w = si(g, r.sampleRate), p = await oi(w), f = y.map((b) => ({
    startSec: b.startFrame / n.framesPerSec,
    endSec: (b.startFrame + b.lenFrames) / n.framesPerSec,
    score: Math.max(0, Math.min(1, b.score))
  }));
  return {
    base64: p,
    durationSec: g.length / r.sampleRate,
    segments: f,
    sourceDurationSec: i
  };
};
class Tn extends Error {
  status;
  code;
  constructor(a, r, i) {
    super(i), this.name = "MusicDaemonError", this.status = a, this.code = r;
  }
}
const oa = async (e, a) => {
  const r = await fetch(e, {
    method: "GET",
    headers: { Accept: "application/json" },
    credentials: "same-origin",
    signal: a
  });
  let i = null;
  try {
    i = await r.json();
  } catch {
    i = null;
  }
  if (!r.ok) {
    const n = i, c = typeof n?.error == "string" ? n.error : `http_${r.status}`;
    throw new Tn(r.status, c, c === "music_unavailable" ? "Music search is still starting up." : c);
  }
  return i;
}, _n = async (e, a, r) => {
  const i = await fetch(e, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json", "Sec-Fetch-Site": "same-origin" },
    credentials: "same-origin",
    body: JSON.stringify(a),
    signal: r
  });
  let n = null;
  try {
    n = await i.json();
  } catch {
    n = null;
  }
  if (!i.ok) {
    const c = n, d = typeof c?.error == "string" ? c.error : `http_${i.status}`;
    throw new Tn(i.status, d, d);
  }
  return n;
}, Nd = (e) => oa("/api/music/status", e), Co = async (e) => (await oa("/api/music/providers", e)).providers ?? [], Ao = async (e) => (await oa("/api/music/connectors", e)).connectors ?? [], Cd = (e, a, r) => _n("/api/music/connectors/configure", { provider: e, credentials: a }, r), Ad = (e, a) => _n("/api/music/connectors/disconnect", { provider: e }, a), Ed = async (e, a = 20, r) => {
  const i = new URLSearchParams({ q: e, limit: String(a) });
  return (await oa(`/api/music/search?${i.toString()}`, r)).results ?? [];
}, zd = (e, a = "tracks,albums,artists,playlists", r = 20, i) => {
  const n = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return oa(`/api/music/search2?${n.toString()}`, i);
}, Eo = (e, a) => {
  const r = new URLSearchParams({ videoId: e });
  return oa(`/api/music/stream?${r.toString()}`, a);
}, mr = async (e, a) => {
  const r = await fetch(e, {
    ...a,
    headers: {
      ...a?.body ? { "Content-Type": "application/json" } : {},
      ...a?.headers ?? {}
    }
  }), i = await r.text();
  let n = null;
  try {
    n = i ? JSON.parse(i) : null;
  } catch {
    n = i;
  }
  if (!r.ok) {
    const c = typeof n == "object" && n && "error" in n ? String(n.error) : i || r.statusText;
    throw new Error(c);
  }
  return n;
}, Vr = async () => mr("/api/juli3ta/library/tracks"), zo = async (e) => (await mr(
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
)).track, Ld = async (e) => {
  await mr("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, Id = async () => (await mr("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, li = "0.3.11", Ea = "application/x-juli3ta-track", tr = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", Nn = (e) => e.source !== "youtube", ka = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const i of r)
      a.has(i.id) || a.set(i.id, i);
  return Array.from(a.values()).sort((r, i) => i.createdAt - r.createdAt);
}, Md = (e) => Nn(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), Et = [
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
], Rd = Et.flatMap((e) => e.chips), jd = ["very_slow", "slow", "medium", "fast", "very_fast"], Pd = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], Dd = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], Ud = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], Od = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], Hd = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], $d = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], Fd = ["narrow", "medium", "wide"], Bd = ["none", "gradual", "sudden"], Wd = ["low", "medium", "high"], qd = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], Jd = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], Gd = ["male", "female", "mixed", "other", "none"], Vd = [
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
], Kd = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], Yd = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], Xd = [
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
], Qd = [
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
], Zd = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], re = (e) => e.replace(/_/g, " "), eu = (e, a, r) => {
  const i = (c) => c.trim().replace(/^[-••\d.)(]+\s*/, "").trim(), n = (c, d) => i(c).split(/\s+/).slice(0, d).join(" ");
  if (e) {
    const c = e.split(`
`).map((d) => d.trim()).find((d) => d && !d.startsWith("[") && !d.startsWith("(") && d.split(/\s+/).length >= 3);
    if (c) {
      const d = n(c, 6).replace(/[,.!?;:—-]+$/, "").trim();
      if (d.length >= 3) return d;
    }
  }
  if (a.trim()) {
    const c = n(a, 6).replace(/[,.!?;:—-]+$/, "").trim();
    if (c.length >= 3) return c;
  }
  if (r.trim()) {
    const c = n(r, 4).replace(/[,.!?;:—-]+$/, "").trim();
    if (c.length >= 3) return c;
  }
  return "Untitled";
}, bi = (e) => {
  const a = [], r = [];
  if (e.structure?.tempo_bpm ? r.push(`${e.structure.tempo_bpm} BPM`) : e.structure?.tempo_class && r.push(`${re(e.structure.tempo_class)} tempo`), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push(`${e.structure.time_signature} time`), e.structure?.rhythm_feel && r.push(`${e.structure.rhythm_feel} feel`), e.structure?.groove_pattern && r.push(`${re(e.structure.groove_pattern)} groove`), e.structure?.song_form && r.push(`${re(e.structure.song_form)} form`), e.structure?.length_seconds && r.push(`~${e.structure.length_seconds}s`), r.length && a.push(r.join(", ")), e.tonal?.key) {
    const c = e.tonal.mode ? `${e.tonal.key} ${e.tonal.mode}` : e.tonal.key;
    a.push(`Key: ${c}`);
  }
  if (e.instrumentation?.primary_instruments?.length && a.push(`Instruments: ${e.instrumentation.primary_instruments.map(re).join(", ")}`), e.instrumentation?.has_vocals === !1)
    a.push("Instrumental, no vocals");
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const c = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && c.push(e.instrumentation.vocal_gender), e.instrumentation.vocal_style?.length ? c.push(e.instrumentation.vocal_style.map(re).join("/")) : c.length === 0 && c.push("vocals");
    let d = c.join(" ");
    e.instrumentation.vocal_processing?.length && (d += ` with ${e.instrumentation.vocal_processing.map(re).join(" + ")}`), a.push(d);
  }
  e.instrumentation?.language_iso639_1 && a.push(`Language: ${e.instrumentation.language_iso639_1}`);
  const i = [];
  e.dynamics?.overall_dynamic_range && i.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && i.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && i.push("big drops"), i.length && a.push(i.join(", ")), e.mood?.primary_moods?.length && a.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && a.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && a.push(`For: ${e.mood.occasion_tags.map(re).join(", ")}`);
  const n = [];
  return e.context?.era_reference && n.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && n.push(`${re(e.context.cultural_region)} scene`), e.context?.intended_use?.length && n.push(`use: ${e.context.intended_use.map(re).join("/")}`), e.context?.explicit_lyrics && n.push("explicit lyrics"), n.length && a.push(n.join(", ")), a.join(". ");
}, tu = [
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
], Lo = "tytus.music-creator.gallery", Io = "tytus.music-creator", Kr = "gallery", Xt = 3500, au = 2e3, De = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), i = a % 60;
  return `${r}:${i.toString().padStart(2, "0")}`;
}, vi = (e) => e.source === "youtube" && !!e.externalId, ke = (e) => !!e.audioDataUrl || vi(e), hr = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? ur(e.externalId) : ""), ur = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", Cn = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), i = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return i ? { artist: i[1].trim(), song: i[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, Sa = (e) => `youtube:${e}`, ru = async () => {
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
    const a = localStorage.getItem(Lo);
    if (a) {
      const r = JSON.parse(a);
      if (Array.isArray(r))
        for (const i of r)
          try {
            await dr(e(i));
          } catch {
          }
      localStorage.removeItem(Lo);
    }
  } catch (a) {
    console.warn("Legacy localStorage gallery migration failed:", a);
  }
  try {
    const a = await new Promise((r) => {
      const i = indexedDB.open(Io);
      i.onsuccess = () => {
        const n = i.result;
        if (!n.objectStoreNames.contains(Kr)) {
          n.close(), r([]);
          return;
        }
        const d = n.transaction(Kr, "readonly").objectStore(Kr).getAll();
        d.onsuccess = () => {
          n.close(), r(d.result ?? []);
        }, d.onerror = () => {
          n.close(), r([]);
        };
      }, i.onerror = () => r([]);
    });
    for (const r of a)
      try {
        await dr(e(r));
      } catch {
      }
    a.length > 0 && indexedDB.deleteDatabase(Io);
  } catch (a) {
    console.warn("Legacy IDB gallery migration failed:", a);
  }
}, Aa = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, iu = (e, a) => md(a).map((r) => ({
  ...r,
  models: Aa
})), ou = (e) => {
  const a = (p, f) => {
    const b = p.map((k) => k.toLowerCase());
    for (const k of f) {
      const I = b.findIndex((N) => k.test(N));
      if (I >= 0) return p[I];
    }
    return null;
  }, r = a(e, [
    /(^|[/:])minimax:music-cover$/,
    /(^|[/:])ail-music-cover$/,
    /music[-_:]cover/,
    /cover.*music/
  ]), i = a(e, [
    /(^|[/:])minimax:music-lyrics$/,
    /(^|[/:])ail-music-lyrics$/,
    /music[-_:]lyrics/,
    /lyrics[-_:]?generat/,
    // minimax lyrics_generation alias if exposed
    /lyrics.*music/,
    /(^|[/:])lyrics$/,
    /lyric/i
    // last-resort: anything containing "lyric"
  ]), n = new Set([r, i].filter((p) => !!p)), c = e.filter((p) => !n.has(p)), d = a(c, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), y = (p) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(p), m = e.filter((p) => !y(p)), g = a(m, [
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
  return { music: d, cover: r, lyrics: i, lyricsBackup: g, image: w, allIds: e };
}, nu = 6e4, Yr = /* @__PURE__ */ new Map(), aa = (e, a, r) => {
  const i = new Headers(r.headers ?? {}), n = a.startsWith("/") ? a : `/${a}`;
  if (e.proxyPodId) {
    i.delete("Authorization");
    const c = `/api/pods/${encodeURIComponent(e.proxyPodId)}/proxy/v1${n}`;
    return fetch(c, { ...r, headers: i });
  }
  return e.apiKey && i.set("Authorization", `Bearer ${e.apiKey}`), fetch(`${e.url}${n}`, { ...r, headers: i });
}, su = async (e, a) => {
  const r = Yr.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: Aa };
    Yr.delete(e.url);
  }
  const i = ra(a, cu);
  try {
    const n = await aa(e, "/models", {
      method: "GET",
      signal: i.signal,
      headers: { Accept: "application/json" }
    });
    if (n.status >= 500) return { ok: !1, models: Aa };
    if (!n.ok) return { ok: !0, models: Aa };
    const d = ((await n.json()).data ?? []).map((y) => y?.id).filter((y) => typeof y == "string" && y.length > 0);
    return { ok: !0, models: ou(d) };
  } catch (n) {
    return (n?.name ?? "") === "TypeError" && Yr.set(e.url, Date.now() + nu), { ok: !1, models: Aa };
  } finally {
    i.dispose();
  }
}, lu = async (e, a) => (await Promise.all(
  e.map(async (i) => {
    if (a.aborted) return null;
    const { ok: n, models: c } = await su(i, a);
    return n ? { ...i, models: c } : null;
  })
)).filter((i) => i !== null), ar = 6e4, Mo = 3e5, cu = 8e3, ra = (e, a) => {
  const r = AbortSignal.any, i = AbortSignal.timeout;
  if (r && i) {
    const d = i(a);
    return { signal: e ? r([e, d]) : d, dispose: () => {
    } };
  }
  const n = new AbortController(), c = setTimeout(() => {
    n.signal.aborted || n.abort(new DOMException("Timeout", "TimeoutError"));
  }, a);
  return e && (e.aborted ? n.abort(e.reason) : e.addEventListener("abort", () => n.abort(e.reason), { once: !0 })), { signal: n.signal, dispose: () => clearTimeout(c) };
}, du = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]);
class _e extends Error {
  status;
  body;
  constructor(a, r, i) {
    super(i ?? `HTTP ${a}: ${r.slice(0, 200)}`), this.name = "GatewayError", this.status = a, this.body = r;
  }
}
function An(e) {
  const a = e.indexOf("{");
  if (a === -1) return null;
  let r = 0, i = !1, n = !1;
  for (let c = a; c < e.length; c++) {
    const d = e[c];
    if (i) {
      if (n) {
        n = !1;
        continue;
      }
      if (d === "\\") {
        n = !0;
        continue;
      }
      d === '"' && (i = !1);
      continue;
    }
    if (d === '"') {
      i = !0;
      continue;
    }
    if (d === "{") r++;
    else if (d === "}" && (r--, r === 0))
      return e.slice(a, c + 1);
  }
  return null;
}
const gr = async (e, a, r) => {
  if (e.length === 0)
    throw new Error(`No ${r}-capable models available on this endpoint.`);
  let i = null;
  for (const c of e)
    try {
      return await a(c);
    } catch (d) {
      if (d.name === "AbortError" || d.name === "TimeoutError")
        throw d;
      if (d instanceof TypeError) {
        i = d;
        continue;
      }
      if (d instanceof _e && du.has(d.status)) {
        i = d;
        continue;
      }
      throw d;
    }
  const n = i?.message ?? "unknown";
  throw new Error(`All ${r} models exhausted. Last error: ${n}. Wait for the rate limit to reset, or pick a different endpoint in Settings.`);
}, uu = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), pu = async (e, a, r) => {
  let i = 0, n = "";
  const c = ra(r, ar);
  try {
    const f = { prompt: a, mode: "write_full_song" };
    e.models.lyrics && (f.model = e.models.lyrics);
    const b = await aa(e, "/music/lyrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(f),
      signal: c.signal
    });
    if (b.ok) {
      const k = await b.json();
      if (!k || typeof k.lyrics != "string" || k.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...k, usedFallback: !1 };
    }
    i = b.status, n = await b.text().catch(() => "");
  } catch (f) {
    const b = f.name;
    if (b === "AbortError" && r?.aborted) throw f;
    if (b === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${ar / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", f);
  } finally {
    c.dispose();
  }
  if (i !== 0 && !uu.has(i)) {
    const f = n.length > 300 ? `${n.slice(0, 300)}…` : n;
    throw new Error(`Lyrics HTTP ${i}: ${f || "no body"}`);
  }
  i !== 0 && console.warn(`Lyrics primary HTTP ${i} (retryable), falling back to chat:`, n);
  const d = (f) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(f), y = /* @__PURE__ */ new Set(), m = [], g = (f) => {
    f && !y.has(f) && (y.add(f), m.push(f));
  };
  if (g(e.models.lyricsBackup), e.models.allIds.filter(d).forEach(g), m.length === 0)
    throw new Error(
      `Lyrics endpoint failed and no chat backup model is available for ${e.label}. Pick one in JULI3TA Settings.`
    );
  const w = `You are a songwriter. Given a theme, write a complete singable song.
Respond with VALID JSON ONLY in exactly this shape, nothing else:
{
  "song_title": "Short catchy title",
  "style_tags": "comma, separated, style, hints",
  "lyrics": "[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Bridge]\\nTwo lines\\n\\n[Outro]\\nTwo lines"
}`, p = await gr(m, async (f) => {
    const b = {
      model: f,
      messages: [
        { role: "system", content: w },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, k = async (I) => {
      const N = ra(r, ar);
      let j;
      try {
        j = await aa(e, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            I ? { ...b, response_format: { type: "json_object" } } : b
          ),
          signal: N.signal
        });
      } catch (E) {
        throw E.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${ar / 1e3}s.`) : E;
      } finally {
        N.dispose();
      }
      if (!j.ok) {
        const E = await j.text().catch(() => "");
        throw new _e(j.status, E, `Lyrics fallback HTTP ${j.status}: ${E.slice(0, 300)}`);
      }
      const C = (await j.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!C)
        throw new _e(502, "", "Lyrics fallback returned empty content");
      const B = C.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), P = An(B) ?? B;
      let x;
      try {
        x = JSON.parse(P);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", C.slice(0, 400)), new _e(502, C.slice(0, 200), `Lyrics fallback returned non-JSON content: ${C.slice(0, 200)}`);
      }
      if (!x.lyrics)
        throw new _e(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return x;
    };
    try {
      return await k(!0);
    } catch (I) {
      if (I instanceof _e && I.status === 400 && /response_format|json_object/i.test(I.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", f), await k(!1);
      throw I;
    }
  }, "chat-lyrics");
  return {
    song_title: p.song_title || "Untitled",
    style_tags: p.style_tags || "",
    lyrics: p.lyrics,
    usedFallback: !0
  };
}, mu = async (e, a, r) => {
  const i = !!a.refAudioBase64, n = (g) => /music/i.test(g) && !/cover/i.test(g), c = (g) => /cover/i.test(g), d = /* @__PURE__ */ new Set(), y = (g, w) => {
    w && !d.has(w) && (d.add(w), g.push(w));
  }, m = [];
  if (i ? (y(m, e.models.cover), e.models.allIds.filter(c).forEach((g) => y(m, g)), y(m, e.models.music)) : (y(m, e.models.music), e.models.allIds.filter(n).forEach((g) => y(m, g))), m.length === 0)
    throw new Error(
      i ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return gr(m, async (g) => {
    const w = {
      model: g,
      lyrics: a.lyrics
    };
    a.prompt && (w.prompt = a.prompt), a.instrumental && (w.instrumental = !0), i && (w.audio_base64 = a.refAudioBase64);
    const p = ra(r, Mo);
    let f;
    try {
      f = await aa(e, "/music/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(w),
        signal: p.signal
      });
    } catch (k) {
      throw k.name === "TimeoutError" ? new Error(`Music generation timed out after ${Mo / 1e3}s. Try a shorter lyric or a different endpoint.`) : k;
    } finally {
      p.dispose();
    }
    if (!f.ok) {
      const k = await f.text().catch(() => "");
      throw new _e(f.status, k, `Music HTTP ${f.status}: ${k.slice(0, 300)}`);
    }
    const b = await f.json();
    if (!b?.data?.audio || typeof b.data.audio != "string" || b.data.audio.length < 100)
      throw new _e(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return b;
  }, i ? "music-cover" : "music");
}, Ro = 6e4, nr = (e, a, r) => {
  const i = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", n = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), c = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${i}".`
  ];
  return n && d.push(`Genre: ${n}.`), c && d.push(`Mood: ${c}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, ci = async (e, a, r) => {
  const i = (y) => /image|diffusion|dall-?e|flux|sdxl/i.test(y), n = /* @__PURE__ */ new Set(), c = [], d = (y) => {
    y && !n.has(y) && (n.add(y), c.push(y));
  };
  if (d(e.models.image), e.models.allIds.filter(i).forEach(d), c.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return gr(c, async (y) => {
    const m = ra(r, Ro), w = /minimax|ail-image|image-01/i.test(y) ? {
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
      p = await aa(e, "/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(w),
        signal: m.signal
      });
    } catch (C) {
      throw C.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${Ro / 1e3}s.`) : C;
    } finally {
      m.dispose();
    }
    if (!p.ok) {
      const C = await p.text().catch(() => "");
      throw new _e(p.status, C, `Cover-art HTTP ${p.status}: ${C.slice(0, 200)}`);
    }
    const f = await p.json(), b = f.base_resp;
    if (b && typeof b.status_code == "number" && b.status_code !== 0)
      throw new _e(502, b.status_msg ?? "", `Cover-art ${y} rejected: ${b.status_msg ?? "status_code=" + b.status_code}`);
    const k = (C) => typeof C != "string" || !C.length ? null : C.startsWith("data:") ? C : `data:image/png;base64,${C}`, I = (C) => typeof C == "string" && /^https?:\/\//i.test(C) ? C : null, N = f.data;
    if (N && typeof N == "object" && !Array.isArray(N)) {
      const C = N, B = C.image_base64;
      if (Array.isArray(B) && B[0]) {
        const E = k(B[0]);
        if (E) return E;
      }
      const P = k(C.image) ?? k(C.b64_json) ?? I(C.url);
      if (P) return P;
      const x = C.image_url ?? C.image_urls;
      if (Array.isArray(x) && x[0]) {
        const E = I(x[0]);
        if (E) return E;
      }
    }
    if (Array.isArray(N) && N[0]) {
      const C = N[0], B = k(C.b64_json) ?? k(C.image_base64) ?? I(C.url);
      if (B) return B;
      throw new _e(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const j = k(f.image) ?? k(f.b64_json);
    if (j) return j;
    const _ = f.images;
    if (Array.isArray(_) && _[0]) {
      const C = _[0], B = k(C.b64_json) ?? k(C.image) ?? I(C.url);
      if (B) return B;
    }
    throw new _e(502, "", `Cover-art response shape not recognised: ${JSON.stringify(f).slice(0, 200)}`);
  }, "image");
}, jo = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], Po = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
], Xr = (e) => vi(e) ? "metadata" : "auto";
function hu(e, a, r) {
  const [i, n] = S(() => {
    let x = "off";
    try {
      const q = localStorage.getItem("juli3ta:repeatMode");
      (q === "off" || q === "all" || q === "one") && (x = q);
    } catch {
    }
    let E = !1;
    try {
      E = localStorage.getItem("juli3ta:shuffle") === "1";
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
    let L = 1;
    try {
      const q = localStorage.getItem("juli3ta:playbackRate");
      if (q !== null) {
        const Q = Number.parseFloat(q);
        Number.isFinite(Q) && (L = Math.max(0.25, Math.min(4, Q)));
      }
    } catch {
    }
    return { trackId: null, playing: !1, loadingTrackId: null, positionMs: 0, durationMs: 0, volume: z, repeatMode: x, shuffle: E, playbackRate: L, sleepTimerEndsAt: null };
  }), c = ae(null), d = ae([]), y = ae(!1), m = A((x) => {
    n((E) => ({ ...E, repeatMode: x }));
    try {
      localStorage.setItem("juli3ta:repeatMode", x);
    } catch {
    }
  }, []), g = A((x) => {
    n((E) => ({ ...E, shuffle: x }));
    try {
      localStorage.setItem("juli3ta:shuffle", x ? "1" : "0");
    } catch {
    }
  }, []), w = A((x) => {
    const E = Math.max(0.25, Math.min(4, x));
    a.current && (a.current.playbackRate = E), n((z) => ({ ...z, playbackRate: E }));
    try {
      localStorage.setItem("juli3ta:playbackRate", String(E));
    } catch {
    }
  }, [a]), p = A((x) => {
    if (x === null || x <= 0) {
      n((L) => ({ ...L, sleepTimerEndsAt: null }));
      return;
    }
    const E = Math.min(x, 1440), z = Date.now() + E * 6e4;
    n((L) => ({ ...L, sleepTimerEndsAt: z }));
  }, []), f = A((x) => {
    (async () => {
      n((L) => ({
        ...L,
        trackId: x.id,
        playing: !1,
        loadingTrackId: ke(x) ? x.id : null,
        positionMs: 0,
        durationMs: x.durationMs || 0
      }));
      const E = x.audioDataUrl || await r?.(x);
      if (!E) {
        n((L) => ({ ...L, loadingTrackId: null }));
        return;
      }
      const z = a.current;
      if (!z) {
        n((L) => ({ ...L, loadingTrackId: null }));
        return;
      }
      i.trackId !== x.id || z.src !== E ? (z.src = E, z.preload = Xr(x), z.load(), z.pause(), n((L) => ({
        ...L,
        trackId: x.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: x.durationMs || 0
      }))) : n((L) => ({ ...L, loadingTrackId: null }));
    })();
  }, [i.trackId, a, r]), b = A((x) => {
    (async () => {
      if (c.current = null, i.trackId && i.trackId !== x.id && !y.current) {
        const L = d.current;
        L[L.length - 1] !== i.trackId && (L.push(i.trackId), L.length > 50 && L.splice(0, L.length - 50));
      }
      y.current = !1, n((L) => ({
        ...L,
        trackId: x.id,
        loadingTrackId: x.id,
        durationMs: x.durationMs || L.durationMs
      }));
      const E = x.audioDataUrl || await r?.(x);
      if (!E) {
        n((L) => ({ ...L, loadingTrackId: null, playing: !1 }));
        return;
      }
      const z = a.current;
      if (!z) {
        n((L) => ({ ...L, loadingTrackId: null, playing: !1 }));
        return;
      }
      (i.trackId !== x.id || z.src !== E) && (z.src = E, z.preload = Xr(x), n((L) => ({ ...L, trackId: x.id, positionMs: 0, durationMs: x.durationMs || 0 }))), z.play().then(() => n((L) => ({ ...L, loadingTrackId: null, playing: !0 }))).catch(() => n((L) => ({ ...L, loadingTrackId: null, playing: !1 })));
    })();
  }, [i.trackId, a, r]), k = A(() => {
    a.current?.pause(), n((x) => ({ ...x, playing: !1, loadingTrackId: null }));
  }, [a]), I = A((x) => {
    if (i.loadingTrackId) return;
    if (x) {
      i.trackId === x.id && i.playing ? k() : b(x);
      return;
    }
    if (i.playing) {
      k();
      return;
    }
    const E = i.trackId ? e.find((z) => z.id === i.trackId) : null;
    E ? b(E) : a.current?.src && a.current.play().catch(() => {
    });
  }, [i.trackId, i.playing, i.loadingTrackId, e, b, k, a]), N = A((x) => {
    const E = a.current;
    E && (E.currentTime = Math.max(0, x / 1e3));
  }, [a]), j = A((x) => {
    const E = Math.max(0, Math.min(1, x));
    a.current && (a.current.volume = E), n((z) => ({ ...z, volume: E }));
    try {
      localStorage.setItem("juli3ta:volume", String(E));
    } catch {
    }
  }, [a]);
  F(() => {
    a.current && (a.current.volume = i.volume);
  }, []), F(() => {
    a.current && (a.current.playbackRate = i.playbackRate);
  }, [i.playbackRate, i.trackId, a]), F(() => {
    if (i.sleepTimerEndsAt === null) return;
    const x = i.sleepTimerEndsAt - Date.now();
    if (x <= 0) {
      a.current?.pause(), n((z) => ({ ...z, sleepTimerEndsAt: null, playing: !1 }));
      return;
    }
    const E = window.setTimeout(() => {
      a.current?.pause(), n((z) => ({ ...z, sleepTimerEndsAt: null, playing: !1 }));
    }, x);
    return () => window.clearTimeout(E);
  }, [i.sleepTimerEndsAt, a]);
  const _ = be(() => e.filter(ke), [e]), C = A(() => {
    if (_.length === 0) return null;
    if (_.length === 1) return _[0];
    const x = _.filter((E) => E.id !== i.trackId);
    return x[Math.floor(Math.random() * x.length)];
  }, [_, i.trackId]), B = A(() => {
    if (!i.trackId || _.length === 0) return;
    if (i.shuffle) {
      const z = C();
      z && b(z);
      return;
    }
    const x = _.findIndex((z) => z.id === i.trackId);
    if (x < 0) return;
    const E = _[(x + 1) % _.length];
    E && b(E);
  }, [i.trackId, i.shuffle, _, b, C]), P = A(() => {
    if (!i.trackId || _.length === 0) return;
    if (i.shuffle) {
      const z = d.current;
      for (; z.length > 0; ) {
        const q = z.pop();
        if (!q || q === i.trackId) continue;
        const Q = _.find((ue) => ue.id === q);
        if (Q) {
          y.current = !0, b(Q);
          return;
        }
      }
      const L = C();
      L && b(L);
      return;
    }
    const x = _.findIndex((z) => z.id === i.trackId);
    if (x < 0) return;
    const E = _[(x - 1 + _.length) % _.length];
    E && b(E);
  }, [i.trackId, i.shuffle, _, b, C]);
  return F(() => {
    const x = a.current;
    if (!x) return;
    const E = () => n((D) => ({ ...D, positionMs: x.currentTime * 1e3 })), z = () => n((D) => ({
      ...D,
      durationMs: Number.isFinite(x.duration) ? x.duration * 1e3 : D.durationMs
    })), L = () => n((D) => ({ ...D, playing: !0, loadingTrackId: null })), q = () => n((D) => ({ ...D, playing: !1, loadingTrackId: null })), Q = () => n((D) => ({ ...D, loadingTrackId: null })), ue = () => {
      const D = i.trackId ? _.find((Z) => Z.id === i.trackId) : null;
      if (!D || D.audioDataUrl || !r || c.current === D.id) {
        n((Z) => ({ ...Z, playing: !1, loadingTrackId: null }));
        return;
      }
      c.current = D.id, n((Z) => ({ ...Z, loadingTrackId: D.id, playing: !1 })), r(D, { force: !0 }).then((Z) => {
        if (!Z) throw new Error("No refreshed stream URL");
        return x.src = Z, x.preload = Xr(D), x.play();
      }).then(() => n((Z) => ({ ...Z, playing: !0, loadingTrackId: null }))).catch(() => n((Z) => ({ ...Z, playing: !1, loadingTrackId: null })));
    }, H = () => {
      if (i.repeatMode === "one" && i.trackId) {
        const D = _.find((Z) => Z.id === i.trackId);
        if (D) {
          b(D);
          return;
        }
      }
      if (i.shuffle && _.length >= 1)
        if (_.length === 1) {
          if (i.repeatMode === "all") {
            b(_[0]);
            return;
          }
        } else {
          const D = _.filter((Ne) => Ne.id !== i.trackId), Z = D[Math.floor(Math.random() * D.length)];
          if (Z) {
            b(Z);
            return;
          }
        }
      if (_.length >= 2) {
        const D = _.findIndex((Z) => Z.id === i.trackId);
        if (D >= 0 && D + 1 < _.length) {
          b(_[D + 1]);
          return;
        }
        if (D >= 0 && i.repeatMode === "all") {
          b(_[0]);
          return;
        }
      }
      n((D) => ({ ...D, playing: !1, positionMs: 0 }));
    };
    return x.addEventListener("timeupdate", E), x.addEventListener("loadedmetadata", z), x.addEventListener("play", L), x.addEventListener("pause", q), x.addEventListener("canplay", Q), x.addEventListener("error", ue), x.addEventListener("ended", H), () => {
      x.removeEventListener("timeupdate", E), x.removeEventListener("loadedmetadata", z), x.removeEventListener("play", L), x.removeEventListener("pause", q), x.removeEventListener("canplay", Q), x.removeEventListener("error", ue), x.removeEventListener("ended", H);
    };
  }, [_, i.trackId, i.repeatMode, i.shuffle, b, a, r]), { state: i, queue: e, play: b, pause: k, toggle: I, select: f, seek: N, setVolume: j, setRepeatMode: m, setShuffle: g, setPlaybackRate: w, setSleepTimer: p, next: B, prev: P };
}
function Do({
  checked: e,
  onChange: a,
  disabled: r,
  id: i
}) {
  return /* @__PURE__ */ t(
    "button",
    {
      id: i,
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
function Qr({
  label: e,
  tooltip: a,
  onClick: r,
  busy: i,
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
        i ? /* @__PURE__ */ t(ne, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(et, { size: 10 }),
        i ? "…" : e
      ]
    }
  );
}
function tt({
  track: e,
  size: a,
  iconSize: r,
  radius: i
}) {
  const n = hr(e);
  return n ? /* @__PURE__ */ t(
    "img",
    {
      src: n,
      alt: "",
      className: "flex-shrink-0",
      style: {
        width: a,
        height: a,
        borderRadius: i <= 6 ? "var(--radius-md)" : "var(--radius-xl)",
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
        borderRadius: i <= 6 ? "var(--radius-md)" : "var(--radius-xl)",
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
function gu({ player: e, allTracks: a }) {
  const { state: r, toggle: i, next: n, prev: c, seek: d, setVolume: y, setPlaybackRate: m, setSleepTimer: g, queue: w } = e, p = w.find((j) => j.id === r.trackId) ?? a.find((j) => j.id === r.trackId) ?? null;
  if (!p) return null;
  const f = r.durationMs > 0 ? r.durationMs : p.durationMs, b = Math.min(r.positionMs, f || 0), k = f > 0 ? b / f * 100 : 0, I = r.loadingTrackId === p.id, N = (j) => {
    if (!f) return;
    const _ = j.currentTarget.getBoundingClientRect(), C = (j.clientX - _.left) / _.width;
    d(Math.max(0, Math.min(1, C)) * f);
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
        /* @__PURE__ */ t(tt, { track: p, size: 40, iconSize: 18, radius: 6 }),
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
              children: /* @__PURE__ */ t(ui, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: c,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(ve, { size: 12, style: { transform: "rotate(180deg)" } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => i(),
              className: "flex items-center justify-center rounded-full transition-transform hover:scale-105",
              style: {
                width: 32,
                height: 32,
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              title: r.playing ? "Pause" : "Play",
              children: I ? /* @__PURE__ */ t(ne, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(vt, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(ve, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: n,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(ve, { size: 12 })
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
              children: r.repeatMode === "one" ? /* @__PURE__ */ t(Qo, { size: 12 }) : /* @__PURE__ */ t(Bl, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: De(b)
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
                  width: `${k}%`,
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
            children: De(f)
          }
        ),
        /* @__PURE__ */ t(fu, { rate: r.playbackRate, setRate: m }),
        /* @__PURE__ */ t(yu, { endsAt: r.sleepTimerEndsAt, setSleepTimer: g }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(bu, { volume: r.volume, setVolume: y }),
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
const Uo = [null, 5, 15, 30, 45, 60];
function yu({
  endsAt: e,
  setSleepTimer: a
}) {
  const [, r] = S(() => Date.now());
  F(() => {
    if (e === null) return;
    const g = window.setInterval(() => r(Date.now()), 1e3);
    return () => window.clearInterval(g);
  }, [e]);
  const i = e !== null, n = i ? Math.max(0, Math.ceil((e - Date.now()) / 6e4)) : 0, c = () => {
    if (!i) {
      a(Uo[1]);
      return;
    }
    const g = Uo.find(
      (w) => w !== null && w > n
    ) ?? null;
    a(g);
  }, d = (g) => {
    g.preventDefault(), i && a(null);
  }, y = i ? n > 0 ? `${n}m` : "<1m" : "", m = i ? `Sleep timer: pauses in ~${n}m. Click to extend, right-click to cancel.` : "Sleep timer (click to start, off by default)";
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: c,
      onContextMenu: d,
      className: "flex items-center justify-center flex-shrink-0 transition-all hover:bg-[var(--bg-hover)] rounded-md tabular-nums",
      style: {
        height: 22,
        minWidth: i ? 48 : 26,
        padding: i ? "0 6px" : "0 4px",
        gap: 4,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 0.3,
        color: i ? "var(--accent-primary)" : "var(--text-disabled)",
        border: `1px solid ${i ? "var(--accent-primary)" : "var(--border-subtle)"}`,
        background: i ? "var(--bg-hover)" : "transparent"
      },
      title: m,
      children: [
        /* @__PURE__ */ t(zl, { size: 11 }),
        y && /* @__PURE__ */ t("span", { children: y })
      ]
    }
  );
}
const Zr = [1, 1.25, 1.5, 2, 0.5, 0.75];
function fu({
  rate: e,
  setRate: a
}) {
  const r = Math.abs(e - 1) < 1e-3, i = () => {
    const d = Zr.findIndex((m) => Math.abs(m - e) < 1e-3), y = Zr[(d + 1) % Zr.length];
    a(y);
  }, n = (d) => {
    d.preventDefault(), r || a(1);
  }, c = `${Number.isInteger(e) ? e.toString() : e.toString().replace(/\.?0+$/, "")}×`;
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: i,
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
      title: r ? "Playback speed (click to change)" : `Playback speed ${c} — click to cycle, right-click to reset`,
      children: c
    }
  );
}
function bu({
  volume: e,
  setVolume: a
}) {
  const r = ae(e > 0 ? e : 1);
  F(() => {
    e > 0 && (r.current = e);
  }, [e]);
  const i = e === 0;
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: () => {
        a(i ? r.current || 1 : 0);
      },
      className: "flex items-center justify-center flex-shrink-0 transition-all hover:bg-[var(--bg-hover)] rounded-md",
      style: {
        width: 18,
        height: 18,
        color: i ? "var(--accent-primary)" : "var(--text-disabled)"
      },
      title: i ? "Unmute" : "Mute",
      children: i ? /* @__PURE__ */ t(rc, { size: 12 }) : /* @__PURE__ */ t(tc, { size: 12 })
    }
  );
}
const Oo = [
  { scope: "global", combo: "?", action: "Show this help" },
  { scope: "global", combo: "Esc", action: "Close modal / dismiss overlay" },
  { scope: "player", combo: "Space", action: "Play / Pause" },
  { scope: "player", combo: "←", action: "Seek back 5s" },
  { scope: "player", combo: "→", action: "Seek forward 5s" },
  { scope: "player", combo: "↑", action: "Volume up (10%)" },
  { scope: "player", combo: "↓", action: "Volume down (10%)" }
];
function vu({
  open: e,
  onClose: a
}) {
  if (!e) return null;
  const r = [
    { label: "Global", rows: Oo.filter((i) => i.scope === "global") },
    { label: "Player view", rows: Oo.filter((i) => i.scope === "player") }
  ];
  return Ia(
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
            onClick: (i) => i.stopPropagation(),
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
                      /* @__PURE__ */ t(mi, { name: "juli3ta:mark", size: 18 }),
                      /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: "Keyboard shortcuts" })
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: a,
                        className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                        style: { width: 28, height: 28, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(ye, { size: 14 })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", children: r.map((i) => /* @__PURE__ */ s("div", { className: "mb-4 last:mb-0", children: [
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
                    children: i.label
                  }
                ),
                /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: i.rows.map((n) => /* @__PURE__ */ s(
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
              ] }, i.label)) }),
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
function xu({ retrying: e, onRetry: a }) {
  const { t: r } = Rt();
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
            e ? /* @__PURE__ */ t(ne, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(et, { size: 14 }),
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
function Ta({ label: e, hint: a, counter: r, counterDanger: i, className: n, headerExtra: c, children: d }) {
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
      (c || r) && /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
        c,
        r && /* @__PURE__ */ t(
          "span",
          {
            style: {
              fontSize: 10,
              color: i ? "#ff5252" : "var(--text-disabled)",
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
function wu({ onPick: e, disabled: a }) {
  const [r, i] = S(!1), [n, c] = S(Et[0].label), [d, y] = S(""), m = d.trim().toLowerCase(), g = m.length > 0, w = be(() => {
    if (!g) return [];
    const p = [];
    for (const f of Et)
      for (const b of f.chips)
        b.toLowerCase().includes(m) && p.push({ family: f.label, chip: b });
    return p;
  }, [g, m]);
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: g ? `${w.length} match${w.length === 1 ? "" : "es"}` : `${Rd.length} chips · click to add` })
          ] }),
          /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ s(
              "div",
              {
                className: "flex items-center gap-1 px-2 rounded-md",
                style: {
                  height: 24,
                  background: "var(--bg-window)",
                  border: `1px solid ${g ? "var(--accent-primary)" : "var(--border-subtle)"}`
                },
                children: [
                  /* @__PURE__ */ t(ht, { size: 11, style: { color: "var(--text-disabled)" } }),
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
                      children: /* @__PURE__ */ t(ye, { size: 11 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: () => i((p) => !p),
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
        g ? w.length === 0 ? /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: w.map(({ family: p, chip: f }) => /* @__PURE__ */ t(
          ei,
          {
            chip: f,
            family: p,
            onPick: e,
            disabled: a
          },
          `${p}::${f}`
        )) }) : /* @__PURE__ */ s(ge, { children: [
          !r && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: Et.map((p) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => c(p.label),
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
              children: Et.map((p) => /* @__PURE__ */ s("div", { children: [
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
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: p.chips.map((f) => /* @__PURE__ */ t(ei, { chip: f, onPick: e, disabled: a }, f)) })
              ] }, p.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (Et.find((p) => p.label === n) ?? Et[0]).chips.map((p) => /* @__PURE__ */ t(ei, { chip: p, onPick: e, disabled: a }, p)) })
        ] })
      ]
    }
  );
}
function ei({
  chip: e,
  family: a,
  onPick: r,
  disabled: i
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: () => r(e),
      disabled: i,
      className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] disabled:opacity-40",
      style: {
        fontSize: 10,
        color: "var(--text-secondary)",
        background: "var(--bg-window)",
        border: "1px solid var(--border-subtle)"
      },
      title: a,
      children: [
        /* @__PURE__ */ t(ri, { size: 10 }),
        e,
        a && /* @__PURE__ */ s("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function ku({ specs: e, onChange: a, disabled: r, onOptimize: i, optimizing: n }) {
  const [c, d] = S(!1), y = be(() => bi(e), [e]), m = y.length > 0, g = A(
    (p, f) => {
      const b = { ...e };
      f === null ? delete b[p] : b[p] = f, a(b);
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
                /* @__PURE__ */ t(ai, { size: 14, style: { color: "var(--text-secondary)" } }),
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
            i && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: (p) => {
                  p.stopPropagation(), i(), c || d(!0);
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
                  n ? /* @__PURE__ */ t(ne, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(et, { size: 11 }),
                  n ? "Optimizing…" : "AI Optimize"
                ]
              }
            ),
            m && !c && /* @__PURE__ */ s(
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
                  Zt(e),
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
                  Go,
                  {
                    size: 14,
                    style: {
                      color: "var(--text-secondary)",
                      transform: c ? "rotate(180deg)" : "none",
                      transition: "transform 0.15s"
                    }
                  }
                )
              }
            )
          ] })
        ] }),
        c && /* @__PURE__ */ s(
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
                /* @__PURE__ */ s(_a, { label: "Structure", children: [
                  /* @__PURE__ */ t(de, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    Ho,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (p) => g("structure", { ...e.structure, tempo_bpm: p }),
                      min: 40,
                      max: 260,
                      placeholder: "120",
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Tempo class", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.structure?.tempo_class,
                      options: jd,
                      onChange: (p) => g("structure", { ...e.structure, tempo_class: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Time signature", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.structure?.time_signature,
                      options: Pd,
                      onChange: (p) => g("structure", { ...e.structure, time_signature: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.structure?.rhythm_feel,
                      options: Dd,
                      onChange: (p) => g("structure", { ...e.structure, rhythm_feel: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Groove", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.structure?.groove_pattern,
                      options: Ud,
                      onChange: (p) => g("structure", { ...e.structure, groove_pattern: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Form", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.structure?.song_form,
                      options: Od,
                      onChange: (p) => g("structure", { ...e.structure, song_form: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Length (s)", children: /* @__PURE__ */ t(
                    Ho,
                    {
                      value: e.structure?.length_seconds,
                      onChange: (p) => g("structure", { ...e.structure, length_seconds: p }),
                      min: 10,
                      max: 600,
                      placeholder: "180",
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(_a, { label: "Key", children: [
                  /* @__PURE__ */ t(de, { label: "Pitch", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.tonal?.key,
                      options: Hd,
                      onChange: (p) => g("tonal", { ...e.tonal, key: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Mode", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.tonal?.mode,
                      options: $d,
                      onChange: (p) => g("tonal", { ...e.tonal, mode: p }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(_a, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(de, { label: "Range", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: Fd,
                      onChange: (p) => g("dynamics", { ...e.dynamics, overall_dynamic_range: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: Bd,
                      onChange: (p) => g("dynamics", { ...e.dynamics, crescendo_shape: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Big drops", children: /* @__PURE__ */ t(
                    $o,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (p) => g("dynamics", { ...e.dynamics, has_big_drops: p }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(_a, { label: "Context", children: [
                  /* @__PURE__ */ t(de, { label: "Era", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.context?.era_reference,
                      options: qd,
                      onChange: (p) => g("context", { ...e.context, era_reference: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Region", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.context?.cultural_region,
                      options: Jd,
                      onChange: (p) => g("context", { ...e.context, cultural_region: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Intensity", children: /* @__PURE__ */ t(
                    Le,
                    {
                      value: e.mood?.emotional_intensity,
                      options: Wd,
                      onChange: (p) => g("mood", { ...e.mood, emotional_intensity: p }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(de, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    $o,
                    {
                      value: e.context?.explicit_lyrics,
                      onChange: (p) => g("context", { ...e.context, explicit_lyrics: p }),
                      disabled: r
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "mt-4 flex flex-col gap-3", children: [
                /* @__PURE__ */ t(
                  Qt,
                  {
                    label: "Primary instruments",
                    options: Vd,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (p) => g("instrumentation", { ...e.instrumentation, primary_instruments: p.length ? p : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ s(_a, { label: "Vocals", children: [
                    /* @__PURE__ */ t(de, { label: "Has vocals", children: /* @__PURE__ */ t(
                      Tu,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (p) => g("instrumentation", { ...e.instrumentation, has_vocals: p }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(de, { label: "Gender", children: /* @__PURE__ */ t(
                      Le,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: Gd,
                        onChange: (p) => g("instrumentation", { ...e.instrumentation, vocal_gender: p }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(de, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      Su,
                      {
                        value: e.instrumentation?.language_iso639_1 ?? "",
                        onChange: (p) => g("instrumentation", { ...e.instrumentation, language_iso639_1: p.trim() || void 0 }),
                        placeholder: "en, es, ja…",
                        maxLength: 5,
                        disabled: r
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ t(
                    Qt,
                    {
                      label: "Vocal style",
                      options: Kd,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (p) => g("instrumentation", { ...e.instrumentation, vocal_style: p.length ? p : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    Qt,
                    {
                      label: "Vocal processing",
                      options: Yd,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (p) => g("instrumentation", { ...e.instrumentation, vocal_processing: p.length ? p : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  Qt,
                  {
                    label: "Primary moods",
                    options: Xd,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (p) => g("mood", { ...e.mood, primary_moods: p.length ? p : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Qt,
                  {
                    label: "Occasion tags",
                    options: Qd,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (p) => g("mood", { ...e.mood, occasion_tags: p.length ? p : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Qt,
                  {
                    label: "Intended use",
                    options: Zd,
                    selected: e.context?.intended_use ?? [],
                    onChange: (p) => g("context", { ...e.context, intended_use: p.length ? p : void 0 }),
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
function _a({ label: e, children: a }) {
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
function de({ label: e, children: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-secondary)", flexShrink: 0, minWidth: 90 }, children: e }),
    /* @__PURE__ */ t("div", { style: { flex: 1, minWidth: 0 }, children: a })
  ] });
}
function Le({
  value: e,
  options: a,
  onChange: r,
  disabled: i
}) {
  return /* @__PURE__ */ s(
    "select",
    {
      value: e ?? "",
      onChange: (n) => r(n.target.value === "" ? void 0 : n.target.value),
      disabled: i,
      className: "w-full px-2 py-1 rounded-md focus:outline-none disabled:opacity-50",
      style: {
        fontSize: 10,
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-primary)"
      },
      children: [
        /* @__PURE__ */ t("option", { value: "", children: "—" }),
        a.map((n) => /* @__PURE__ */ t("option", { value: n, children: re(n) }, n))
      ]
    }
  );
}
function Ho({
  value: e,
  onChange: a,
  min: r,
  max: i,
  placeholder: n,
  disabled: c
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "number",
      value: e ?? "",
      min: r,
      max: i,
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
      disabled: c,
      style: {
        fontSize: 10,
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-primary)"
      }
    }
  );
}
function Su({
  value: e,
  onChange: a,
  placeholder: r,
  maxLength: i,
  disabled: n
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "text",
      value: e,
      placeholder: r,
      maxLength: i,
      onChange: (c) => a(c.target.value),
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
function $o({
  value: e,
  onChange: a,
  disabled: r
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "checkbox",
      checked: !!e,
      onChange: (i) => a(i.target.checked ? !0 : void 0),
      disabled: r,
      style: { cursor: r ? "not-allowed" : "pointer" }
    }
  );
}
function Tu({
  value: e,
  onChange: a,
  disabled: r
}) {
  const i = e === void 0 ? !0 : e === !0 ? !1 : void 0;
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: () => a(i),
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
function Qt({
  label: e,
  options: a,
  selected: r,
  onChange: i,
  disabled: n
}) {
  const c = (d) => {
    r.includes(d) ? i(r.filter((y) => y !== d)) : i([...r, d]);
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
          onClick: () => c(d),
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
            y && /* @__PURE__ */ t(ea, { size: 10 }),
            re(d)
          ]
        },
        d
      );
    }) })
  ] });
}
function Zt(e) {
  const { intent: a, ...r } = e;
  let i = 0;
  const n = (c) => {
    if (!(!c || typeof c != "object")) {
      for (const d of Object.values(c))
        if (d != null) {
          if (Array.isArray(d)) {
            d.length && (i += 1);
            continue;
          }
          if (typeof d == "object") {
            n(d);
            continue;
          }
          d === "" || d === !1 || (i += 1);
        }
    }
  };
  return n(r), i;
}
const _u = "#4ade80", Nu = "#fbbf24", pr = (e) => e.models.music || e.models.cover ? _u : Nu;
function Cu({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [i, n] = S(!1), c = ae(null), d = a.length > 1;
  F(() => {
    if (!i) return;
    const m = (g) => {
      c.current && !c.current.contains(g.target) && n(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [i]);
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
  return /* @__PURE__ */ s("div", { ref: c, className: "relative inline-flex", children: [
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
          y(pr(e)),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap" }, children: e.label }),
          d && /* @__PURE__ */ t(
            Go,
            {
              size: 12,
              style: { color: "var(--text-secondary)", transform: i ? "rotate(180deg)" : "none", transition: "transform 0.15s" }
            }
          )
        ]
      }
    ),
    d && i && /* @__PURE__ */ t(
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
          const g = m.podId === e.podId;
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => {
                r(m.podId), n(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: g ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: y(pr(m)) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: m.label }),
                    g && /* @__PURE__ */ t(ea, { size: 11, style: { color: "var(--accent-primary)" } })
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
const Te = ({ icon: e, label: a, onClick: r, danger: i }) => /* @__PURE__ */ s(
  "button",
  {
    type: "button",
    onClick: r,
    className: "w-full flex items-center gap-2.5 px-3 h-8 text-sm transition-colors",
    style: {
      color: i ? "var(--accent-error, #ff6b6b)" : "var(--text-primary)",
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
function Au({ tracks: e, player: a, onLoad: r, onOpenLyrics: i, onDelete: n, onRename: c }) {
  const { t: d } = Rt();
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
      Eu,
      {
        track: y,
        player: a,
        onLoad: r,
        onOpenLyrics: i,
        onDelete: n,
        onRename: c,
        translate: d
      },
      y.id
    ))
  ] });
}
function Eu({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: i,
  onDelete: n,
  onRename: c,
  translate: d
}) {
  const [y, m] = S(!1), [g, w] = S(null), p = a.state.trackId === e.id, f = p && a.state.playing, b = () => {
    if (g === null) return;
    const N = g.trim();
    w(null), N && N !== e.title && c(e.id, N);
  }, k = new Date(e.createdAt).toLocaleDateString(void 0, {
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
          hasAudio: ke(e)
        };
        N.dataTransfer.setData(Ea, JSON.stringify(j)), e.lyricsPreview && N.dataTransfer.setData("text/plain", e.lyricsPreview), N.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => ke(e) ? a.toggle(e) : i(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: p ? "var(--bg-selected)" : y ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: ke(e) ? f ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: p ? "var(--accent-primary)" : "var(--text-disabled)" }, children: ke(e) ? f ? /* @__PURE__ */ t(vt, { size: 11 }) : y ? /* @__PURE__ */ t(ve, { size: 11 }) : /* @__PURE__ */ t(Ma, { size: 11 }) : /* @__PURE__ */ t(lr, { size: 11 }) }),
        /* @__PURE__ */ t("div", { className: "min-w-0", children: g !== null ? (
          // Inline rename editor — Enter commits, Escape cancels, blur
          // also commits so the user can click anywhere else and not
          // lose the edit. autoFocus + onClick.stopPropagation so the
          // row's own click handler (play/toggle) doesn't fire.
          /* @__PURE__ */ t(
            "input",
            {
              autoFocus: !0,
              value: g,
              onChange: (N) => w(N.target.value),
              onClick: (N) => N.stopPropagation(),
              onKeyDown: (N) => {
                N.stopPropagation(), N.key === "Enter" ? b() : N.key === "Escape" && w(null);
              },
              onBlur: b,
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
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? De(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: k }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (N) => {
              N.stopPropagation(), N.shiftKey ? i(e) : N.altKey ? n(e.id) : r(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(di, { size: 11 })
          }
        )
      ]
    }
  );
}
function zu({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: i,
  onSaveSongToDesktop: n,
  onSaveLyricsToDesktop: c,
  onPlayInPlayer: d,
  onRename: y,
  onEditCover: m,
  onSelect: g,
  selected: w,
  player: p
}) {
  const { t: f } = Rt(), b = ae(null), [k, I] = S(!1), [N, j] = S(null), [_, C] = S(null), B = () => {
    if (_ === null) return;
    const H = _.trim();
    C(null), H && H !== e.title && y(e.id, H);
  }, P = p.state.trackId === e.id, x = P && p.state.playing, E = P && p.state.durationMs > 0 ? p.state.positionMs / p.state.durationMs : 0;
  F(() => {
    if (!N) return;
    const H = (Z) => {
      const Ne = Z.target;
      b.current && Ne && b.current.contains(Ne) || Ne && Ne.closest?.("[data-track-menu]") || j(null);
    }, D = () => j(null);
    return setTimeout(() => window.addEventListener("mousedown", H), 0), window.addEventListener("scroll", D, !0), window.addEventListener("resize", D), () => {
      window.removeEventListener("mousedown", H), window.removeEventListener("scroll", D, !0), window.removeEventListener("resize", D);
    };
  }, [N]);
  const z = () => {
    const H = b.current?.getBoundingClientRect();
    if (!H) return;
    const D = 220, Z = Math.min(H.right - D, window.innerWidth - D - 8), Ne = H.bottom + 4;
    j({ x: Math.max(8, Z), y: Ne });
  }, L = (H) => () => {
    j(null), H();
  }, q = () => p.toggle(e), Q = () => {
    const H = document.createElement("a");
    H.href = e.audioDataUrl, H.download = `${e.title || "track"}.mp3`, H.click();
  };
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => I(!0),
      onMouseLeave: () => I(!1),
      draggable: !0,
      onDragStart: (H) => {
        const D = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: ke(e)
        };
        H.dataTransfer.setData(Ea, JSON.stringify(D)), e.lyricsPreview && H.dataTransfer.setData("text/plain", e.lyricsPreview), H.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => g?.(e),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: w ? "var(--bg-selected)" : k ? "var(--bg-hover)" : "transparent",
        border: w ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: g ? "pointer" : "grab"
      },
      title: g ? "Click to open in player · drag to other fields" : "Drag to Desktop, Cover field, Text Editor, or any text field",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          ke(e) ? /* @__PURE__ */ s(
            "button",
            {
              onClick: q,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: x ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(tt, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: hr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: x ? /* @__PURE__ */ t(vt, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(ve, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                children: /* @__PURE__ */ t(lr, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
            _ !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: _,
                onChange: (H) => C(H.target.value),
                onClick: (H) => H.stopPropagation(),
                onKeyDown: (H) => {
                  H.stopPropagation(), H.key === "Enter" ? B() : H.key === "Escape" && C(null);
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
                onDoubleClick: (H) => {
                  H.stopPropagation(), C(e.title);
                },
                title: "Double-click to rename",
                children: e.title || f("musiccreator.track.untitled")
              }
            ),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.durationMs > 0 ? De(e.durationMs) : f("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: b,
              onClick: (H) => {
                H.stopPropagation(), N ? j(null) : z();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: k || N ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(di, { size: 14 })
            }
          )
        ] }),
        N && Ia(
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
                ke(e) && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: f("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(Te, { icon: /* @__PURE__ */ t(Ma, { size: 14 }), label: f("musiccreator.track.playInPlayer"), onClick: L(() => d(e)) }),
                  /* @__PURE__ */ t(Te, { icon: /* @__PURE__ */ t(yo, { size: 14 }), label: f("musiccreator.track.saveSongToDesktop"), onClick: L(() => n(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(Te, { icon: /* @__PURE__ */ t(Ko, { size: 14 }), label: f("musiccreator.track.download"), onClick: L(Q) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ s(ge, { children: [
                  ke(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: f("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(Te, { icon: /* @__PURE__ */ t(lr, { size: 14 }), label: f("musiccreator.track.openInEditor"), onClick: L(() => i(e)) }),
                  /* @__PURE__ */ t(Te, { icon: /* @__PURE__ */ t(yo, { size: 14 }), label: f("musiccreator.track.saveLyricsToDesktop"), onClick: L(() => c(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(Te, { icon: /* @__PURE__ */ t(Xo, { size: 14 }), label: "Rename", onClick: L(() => C(e.title)) }),
                /* @__PURE__ */ t(Te, { icon: /* @__PURE__ */ t(La, { size: 14 }), label: "Edit cover art", onClick: L(() => m(e)) }),
                /* @__PURE__ */ t(Te, { icon: /* @__PURE__ */ t(Lt, { size: 14 }), label: f("musiccreator.track.loadIntoForm"), onClick: L(() => r(e)) }),
                /* @__PURE__ */ t(Te, { icon: /* @__PURE__ */ t(It, { size: 14 }), label: f("musiccreator.track.delete"), onClick: L(() => a(e.id)), danger: !0 })
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
                  width: `${E * 100}%`,
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
function Lu({
  trackIds: e,
  allTracks: a,
  player: r,
  onSelect: i
}) {
  const n = e.map((c) => a.find((d) => d.id === c)).filter((c) => !!c).slice(0, 6);
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
    /* @__PURE__ */ t("div", { className: "flex gap-1.5 overflow-x-auto invisible-scrollbar pb-1", children: n.map((c) => {
      const d = r.state.trackId === c.id;
      return /* @__PURE__ */ s(
        "button",
        {
          onClick: () => i(c),
          className: "flex flex-col items-start flex-shrink-0 rounded-lg p-1.5 transition-all hover:bg-[var(--bg-hover)]",
          style: {
            width: 84,
            background: d ? "var(--bg-selected)" : "var(--bg-titlebar)",
            border: d ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)"
          },
          title: c.title || "Untitled",
          children: [
            /* @__PURE__ */ t(tt, { track: c, size: 68, iconSize: 20, radius: 6 }),
            /* @__PURE__ */ t(
              "div",
              {
                className: "truncate w-full text-left",
                style: { fontSize: 10, fontWeight: 700, color: "var(--text-primary)", marginTop: 4 },
                children: c.title || "Untitled"
              }
            )
          ]
        },
        c.id
      );
    }) })
  ] });
}
function Iu({
  track: e,
  player: a,
  selected: r,
  isFavorite: i,
  onOpenInPlayer: n,
  onRemix: c,
  onToggleFavorite: d,
  onRemove: y,
  selectMode: m = !1,
  checked: g = !1,
  onToggleCheck: w
}) {
  const p = ae(null), [f, b] = S(!1), [k, I] = S(null), N = a.state.trackId === e.id, j = N && a.state.loadingTrackId === e.id, _ = N && a.state.playing, C = N && a.state.durationMs > 0 ? a.state.positionMs / a.state.durationMs : 0;
  F(() => {
    if (!k) return;
    const z = (q) => {
      const Q = q.target;
      p.current && Q && p.current.contains(Q) || Q && Q.closest?.("[data-track-menu]") || I(null);
    }, L = () => I(null);
    return setTimeout(() => window.addEventListener("mousedown", z), 0), window.addEventListener("scroll", L, !0), window.addEventListener("resize", L), () => {
      window.removeEventListener("mousedown", z), window.removeEventListener("scroll", L, !0), window.removeEventListener("resize", L);
    };
  }, [k]);
  const B = () => {
    const z = p.current?.getBoundingClientRect();
    if (!z) return;
    const L = 220, q = Math.min(z.right - L, window.innerWidth - L - 8), Q = z.bottom + 4;
    I({ x: q, y: Q });
  }, P = (z) => () => {
    I(null), z();
  }, x = e.externalUrl;
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => b(!0),
      onMouseLeave: () => b(!1),
      onClick: m ? () => {
        w && w(e);
      } : void 0,
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: m && g || r ? "var(--bg-selected)" : f ? "var(--bg-hover)" : "transparent",
        border: m && g || r ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: "pointer"
      },
      title: m ? g ? "Deselect" : "Select" : "Click to open in player",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          m ? /* @__PURE__ */ t(
            "span",
            {
              className: "flex items-center justify-center flex-shrink-0",
              style: {
                width: 36,
                height: 36,
                color: g ? "var(--accent-primary)" : "var(--text-disabled)"
              },
              "aria-hidden": !0,
              children: g ? /* @__PURE__ */ t(en, { size: 20 }) : /* @__PURE__ */ t(tn, { size: 20 })
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
                /* @__PURE__ */ t(tt, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: hr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: j ? /* @__PURE__ */ t(ne, { size: 14, className: "animate-spin", style: { color: "white" } }) : _ ? /* @__PURE__ */ t(vt, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(ve, { size: 14, style: { color: "white", marginLeft: 1 } })
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
              e.durationMs > 0 ? ` · ${De(e.durationMs)}` : ""
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
                  e.durationMs > 0 ? ` · ${De(e.durationMs)}` : ""
                ] })
              ]
            }
          ),
          !m && /* @__PURE__ */ t(
            "button",
            {
              ref: p,
              onClick: (z) => {
                z.stopPropagation(), k ? I(null) : B();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: f || k ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(di, { size: 14 })
            }
          )
        ] }),
        k && Ia(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: k.x,
                top: k.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                /* @__PURE__ */ t(
                  Te,
                  {
                    icon: _ ? /* @__PURE__ */ t(vt, { size: 14 }) : /* @__PURE__ */ t(ve, { size: 14 }),
                    label: _ ? "Pause" : "Play",
                    onClick: P(() => a.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Te,
                  {
                    icon: /* @__PURE__ */ t(Ma, { size: 14 }),
                    label: "Open in player",
                    onClick: P(() => n(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Te,
                  {
                    icon: /* @__PURE__ */ t(Mt, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: P(() => c(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Te,
                  {
                    icon: /* @__PURE__ */ t(sr, { size: 14, fill: i ? "currentColor" : "none" }),
                    label: i ? "Remove favorite" : "Add to favorites",
                    onClick: P(() => d(e))
                  }
                ),
                x && /* @__PURE__ */ t(
                  Te,
                  {
                    icon: /* @__PURE__ */ t(Yo, { size: 14 }),
                    label: "Open source",
                    onClick: P(() => window.open(x, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Te,
                  {
                    icon: /* @__PURE__ */ t(It, { size: 14 }),
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
function Mu({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: i
}) {
  const [n, c] = S(e.coverDataUrl), [d, y] = S(""), [m, g] = S(!1), [w, p] = S(null), f = ae(null), b = ae(null), k = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), I = nr(k, "", e.styleTags || "");
  F(() => {
    const _ = (C) => {
      C.key === "Escape" && (C.stopPropagation(), i());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [i]), F(() => () => b.current?.abort(), []);
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
    b.current?.abort(), b.current = new AbortController();
    const _ = b.current.signal;
    g(!0), p(null);
    try {
      const C = (d.trim() || I).slice(0, 1500), B = await ci(a, C, _);
      if (_.aborted) return;
      c(B);
    } catch (C) {
      if (C.name === "AbortError") return;
      p(C.message || "Cover-art generation failed.");
    } finally {
      g(!1);
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
      typeof B == "string" && c(B);
    }, C.readAsDataURL(_);
  };
  return Ia(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.55)" },
        onClick: i,
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
                    /* @__PURE__ */ t(La, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ s("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: [
                      "Cover Art — ",
                      k || "Untitled"
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: i,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close",
                        children: /* @__PURE__ */ t(ye, { size: 14 })
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
                        !n && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(La, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
                        m && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(ne, { size: 24, className: "animate-spin", style: { color: "white" } }) })
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
                          m ? /* @__PURE__ */ t(ne, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Hl, { size: 12 }),
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
                          /* @__PURE__ */ t(pi, { size: 12 }),
                          "Upload"
                        ]
                      }
                    ),
                    n && /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => c(""),
                        disabled: m,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(ye, { size: 12 }),
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
                      placeholder: I,
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
                        onClick: i,
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
                          r(e.id, n), i();
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
function rr({ label: e, children: a }) {
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
function Ru({
  songName: e,
  mode: a,
  theme: r,
  style: i,
  intent: n,
  lyrics: c,
  specs: d,
  coverDataUrl: y,
  endpoint: m,
  busy: g,
  onRegenerate: w,
  onUpload: p,
  onClear: f,
  onClose: b
}) {
  const k = ae(null), I = be(() => bi(d), [d]), N = be(() => Zt(d), [d]);
  F(() => {
    const C = (B) => {
      B.key === "Escape" && (B.stopPropagation(), b());
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [b]);
  const j = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", _ = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Ia(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.6)" },
        onClick: b,
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
                    /* @__PURE__ */ t(zt, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                        onClick: b,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(ye, { size: 14 })
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
                      !y && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(La, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
                      g && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(ne, { size: 28, className: "animate-spin", style: { color: "white" } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
                  /* @__PURE__ */ s("div", { children: [
                    /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }, children: _ }),
                    i.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: i.trim() })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: w,
                        disabled: g || !m?.models.image,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 11,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent",
                          cursor: g || !m?.models.image ? "not-allowed" : "pointer"
                        },
                        title: m?.models.image ? "Generate cover art" : "No image model available",
                        children: [
                          g ? /* @__PURE__ */ t(ne, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(et, { size: 11 }),
                          y ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: () => k.current?.click(),
                        disabled: g,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(pi, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    y && /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: f,
                        disabled: g,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(ye, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  r.trim() && /* @__PURE__ */ t(rr, { label: "Theme", children: r.trim() }),
                  n.trim() && /* @__PURE__ */ t(rr, { label: "Lyrics Direction", children: n.trim() }),
                  N > 0 && I && /* @__PURE__ */ t(rr, { label: `Track Specs (${N} set)`, children: I }),
                  c.trim() && /* @__PURE__ */ t(rr, { label: "Lyrics", children: /* @__PURE__ */ t(
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
                      children: c
                    }
                  ) }),
                  !r.trim() && !n.trim() && N === 0 && !c.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: k,
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
function ju(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function Pu(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function Du(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function Uu(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function Ou(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: re(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: re(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: re(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: re(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const i = [];
  e.tonal?.key && i.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && i.push({ label: "Mode", value: re(e.tonal.mode) }), i.length && a.push({ label: "Tonal", rows: i });
  const n = [];
  if (e.instrumentation?.primary_instruments?.length && n.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(re).join(", ") }), e.instrumentation?.has_vocals === !1)
    n.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const m = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && m.push(re(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && m.push(e.instrumentation.vocal_style.map(re).join("/")), n.push({ label: "Vocals", value: m.length ? m.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && n.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(re).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && n.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), n.length && a.push({ label: "Instrumentation", rows: n });
  const c = [];
  e.dynamics?.overall_dynamic_range && c.push({ label: "Range", value: re(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && c.push({ label: "Crescendo", value: re(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && c.push({ label: "Big drops", value: "Yes" }), c.length && a.push({ label: "Dynamics", rows: c });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: re(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(re).join(", ") }), d.length && a.push({ label: "Mood", rows: d });
  const y = [];
  return e.context?.era_reference && y.push({ label: "Era", value: re(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && y.push({ label: "Region", value: re(e.context.cultural_region) }), e.context?.intended_use?.length && y.push({ label: "Use", value: e.context.intended_use.map(re).join("/") }), e.context?.explicit_lyrics && y.push({ label: "Explicit", value: "Yes" }), y.length && a.push({ label: "Context", rows: y }), a;
}
function Qe({ label: e, value: a }) {
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
function Ct({ label: e, children: a }) {
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
function Hu({
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
          "audio",
          {
            controls: !0,
            src: e,
            onPlay: r,
            style: { width: "100%", height: 32 }
          }
        )
      ]
    }
  );
}
function $u(e, a, r, i) {
  if (!e || a.length === 0) return null;
  if (i === "one") return { kind: "repeating" };
  const n = a.filter(ke);
  if (n.length === 0) return null;
  if (r) return { kind: "random" };
  const c = n.findIndex((d) => d.id === e);
  return c < 0 ? null : c + 1 < n.length ? { kind: "track", track: n[c + 1] } : i === "all" ? { kind: "track", track: n[0] } : { kind: "end" };
}
function Fu({ text: e }) {
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
        a ? /* @__PURE__ */ t(ea, { size: 11 }) : /* @__PURE__ */ t(Vo, { size: 11 }),
        a ? "Copied" : "Copy"
      ]
    }
  );
}
const Bu = /^\s*\[([^\]]+)\]\s*$/;
function Wu({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, i) => {
    const n = r.match(Bu);
    return n ? /* @__PURE__ */ t(
      "div",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          marginTop: i === 0 ? 0 : 18,
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
      i
    ) : r.trim() === "" ? /* @__PURE__ */ t("div", { style: { height: 8 } }, i) : /* @__PURE__ */ t("div", { style: { whiteSpace: "pre-wrap" }, children: r }, i);
  }) });
}
function qu({ track: e, player: a, restyleOriginal: r, onEditInCreator: i, onSwitchToCreator: n, onSearchMusic: c }) {
  const { t: d } = Rt(), y = e?.specsJson ?? "", m = be(() => {
    if (!y) return {};
    try {
      return JSON.parse(y);
    } catch {
      return {};
    }
  }, [y]), g = (m.intent ?? "").trim(), w = be(() => Ou(m), [m]);
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
            /* @__PURE__ */ t(et, { size: 13 }),
            d("musiccreator.player.empty.openCreator")
          ]
        }
      ),
      c && /* @__PURE__ */ s(
        "button",
        {
          onClick: c,
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
            /* @__PURE__ */ t(ht, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const p = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", f = ke(e), b = hr(e), k = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", I = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", N = a.state.trackId === e.id, j = N && a.state.playing, _ = N && a.state.loadingTrackId === e.id, C = e.source === "youtube", B = a.queue.filter((P) => P.id !== e.id && (P.artist || "").trim() && P.artist === e.artist).slice(0, 4);
  return /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden relative", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ s("div", { className: "flex-shrink-0 relative overflow-hidden", children: [
      /* @__PURE__ */ t(
        "div",
        {
          "aria-hidden": !0,
          className: "absolute inset-0",
          style: {
            background: b ? `url(${b}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
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
              background: b ? `url(${b}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              cursor: f ? "pointer" : "default"
            },
            title: f ? N && j ? "Pause" : "Play" : "Lyric sheet — no audio",
            children: [
              !b && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(
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
                      children: N && j ? /* @__PURE__ */ t(vt, { size: 30, style: { color: "white" } }) : _ ? /* @__PURE__ */ t(ne, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(ve, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                f ? /* @__PURE__ */ t(ve, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(Lt, { size: 10 }),
                C ? "YouTube track" : d(f ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
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
                /* @__PURE__ */ t(mi, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: k }),
                e.source === "youtube" && e.album && e.album !== k && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                I && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: I })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: De(e.durationMs) })
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
                title: N && j ? "Pause" : "Play",
                children: _ ? /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t(ne, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : N && j ? /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t(vt, { size: 16 }),
                  " ",
                  d("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ s(ge, { children: [
                  /* @__PURE__ */ t(ve, { size: 16, style: { marginLeft: 2 } }),
                  " ",
                  d("musiccreator.player.play")
                ] })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => i(e),
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
                  /* @__PURE__ */ t(Mt, { size: 13 }),
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
                  /* @__PURE__ */ t(Ko, { size: 13 }),
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
              e.lyricsPreview && /* @__PURE__ */ t(Fu, { text: e.lyricsPreview })
            ]
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(Wu, { text: e.lyricsPreview }) : C ? /* @__PURE__ */ s(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Ul, { size: 18 }) }),
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
                  /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.durationMs ? De(e.durationMs) : "Unknown" })
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
                    /* @__PURE__ */ t(Yo, { size: 13 }),
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
              /* @__PURE__ */ t(Lt, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: d("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        r && r.trackId === e.id && /* @__PURE__ */ t(
          Hu,
          {
            audioSrc: r.audioSrc,
            sourceLabel: r.sourceLabel,
            onUserPlay: () => {
              a.state.playing && a.pause();
            }
          }
        ),
        e.id === a.state.trackId && (() => {
          const P = $u(
            a.state.trackId,
            a.queue,
            a.state.shuffle,
            a.state.repeatMode
          );
          return P ? /* @__PURE__ */ s(Ct, { label: "Up next", children: [
            P.kind === "track" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ t(tt, { track: P.track, size: 32, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: P.track.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: P.track.artist || (P.track.styleTags && P.track.styleTags !== "—" ? P.track.styleTags : "JULI3TA") })
              ] })
            ] }),
            P.kind === "random" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(ui, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Random next track from your queue." })
            ] }),
            P.kind === "repeating" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(Qo, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Repeating this track." })
            ] }),
            P.kind === "end" && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-disabled)" }, children: "End of queue." })
          ] }) : null;
        })(),
        e.theme.trim() && /* @__PURE__ */ t(Ct, { label: d("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        g && /* @__PURE__ */ t(Ct, { label: d("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: g }) }),
        w.map((P) => /* @__PURE__ */ t(Ct, { label: P.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: P.rows.map((x) => /* @__PURE__ */ t(Qe, { label: x.label, value: x.value }, `${P.label}-${x.label}`)) }) }, P.label)),
        C && /* @__PURE__ */ t(Ct, { label: "Artist / Source", children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Zl, { size: 20 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        B.length > 0 && /* @__PURE__ */ t(Ct, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: B.map((P) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => a.select(P),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(tt, { track: P, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: P.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: P.durationMs ? De(P.durationMs) : "Streamed" })
              ] })
            ]
          },
          P.id
        )) }) }),
        /* @__PURE__ */ t(Ct, { label: d("musiccreator.player.about"), children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(Qe, { label: d("musiccreator.player.about.created"), value: Uu(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(Qe, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(Qe, { label: "Channel", value: e.album }),
          f && e.durationMs > 0 && /* @__PURE__ */ t(Qe, { label: d("musiccreator.player.about.duration"), value: De(e.durationMs) }),
          e.source !== "youtube" && f && e.bitrate > 0 && /* @__PURE__ */ t(Qe, { label: d("musiccreator.player.about.bitrate"), value: Pu(e.bitrate) }),
          e.source !== "youtube" && f && e.sampleRate > 0 && /* @__PURE__ */ t(Qe, { label: d("musiccreator.player.about.sampleRate"), value: Du(e.sampleRate) }),
          e.source !== "youtube" && f && e.sizeBytes > 0 && /* @__PURE__ */ t(Qe, { label: d("musiccreator.player.about.size"), value: ju(e.sizeBytes) }),
          I && /* @__PURE__ */ t(Qe, { label: d("musiccreator.player.about.style"), value: I }),
          /* @__PURE__ */ t(Qe, { label: d("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : d(f ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Ju({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: i,
  searchHistory: n,
  onClearSearchHistory: c,
  resultType: d,
  onResultTypeChange: y,
  results: m,
  busy: g,
  error: w,
  status: p,
  providers: f,
  connectors: b,
  libraryTracks: k,
  playlists: I,
  playlistNameDraft: N,
  playlistBusy: j,
  favoriteIds: _,
  warmupIds: C,
  previewBusyId: B,
  addBusyId: P,
  savedYoutubeIds: x,
  player: E,
  onWarmResult: z,
  onPreview: L,
  onAdd: q,
  onOpenTrack: Q,
  onToggleFavorite: ue,
  onRemoveLibraryTrack: H,
  onPlaylistNameDraftChange: D,
  onCreatePlaylist: Z,
  onAddTrackToPlaylist: Ne,
  onRemoveTrackFromPlaylist: yr,
  onPlayPlaylist: rt,
  onDeletePlaylist: jt,
  onConfigureConnector: Se,
  onDisconnectConnector: Ra,
  onClose: le
}) {
  const [fe, Pt] = S(null), [xt, Fe] = S({}), [wt, it] = S(!1), [Ie, Be] = S(null), [Ce, Ae] = S(null), [gt, ot] = S(null);
  F(() => {
    Ae(null), ot(null);
  }, [e]);
  const nt = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(k.map((h) => h.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(k.map((h) => h.album || h.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: I.length },
    { id: "sources", label: "Sources", count: f.length || 4 }
  ], We = (h) => {
    const R = E.state.trackId === h.id, J = R && E.state.loadingTrackId === h.id, ce = R && E.state.playing;
    return /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(tt, { track: h, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ s("button", { type: "button", onClick: () => Q(h), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: h.title }),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              h.artist || "Unknown",
              h.album ? ` · ${h.album}` : "",
              h.durationMs ? ` · ${De(h.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ue(h),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: _.has(h.id) ? "white" : "var(--text-secondary)",
                background: _.has(h.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: _.has(h.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(sr, { size: 13, fill: _.has(h.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => E.toggle(h),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                J ? /* @__PURE__ */ t(ne, { size: 12, className: "animate-spin" }) : ce ? /* @__PURE__ */ t(vt, { size: 12 }) : /* @__PURE__ */ t(ve, { size: 12 }),
                J ? "Loading" : ce ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => H(h),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t(It, { size: 13 })
            }
          )
        ]
      },
      h.id
    );
  }, Me = Array.from(
    k.reduce((h, R) => {
      const J = (R.artist || "Unknown artist").trim();
      return h.set(J, [...h.get(J) ?? [], R]), h;
    }, /* @__PURE__ */ new Map())
  ).sort((h, R) => h[0].localeCompare(R[0])), Dt = Array.from(
    k.reduce((h, R) => {
      const J = (R.album || R.artist || "YouTube collection").trim();
      return h.set(J, [...h.get(J) ?? [], R]), h;
    }, /* @__PURE__ */ new Map())
  ).sort((h, R) => h[0].localeCompare(R[0])), Ue = f.length > 0 ? f.map((h) => {
    const R = b.find((kt) => kt.provider === h.id), J = R?.connected ?? h.configured, ce = R?.oauthRequired ?? h.state === "oauth_required";
    return {
      id: h.id,
      name: h.name,
      state: J ? "Connected" : ce ? "OAuth required" : h.state.replace(/_/g, " "),
      body: R?.message ?? h.message,
      action: J ? "Manage" : ce ? "Coming soon" : "Configure",
      enabled: J,
      needs: h.needs,
      kind: h.kind,
      connector: R,
      oauthRequired: ce,
      configurable: R?.configurable ?? !ce
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
      connector: b.find((h) => h.provider === "spotify"),
      oauthRequired: !0,
      configurable: !1
    },
    {
      id: "lastfm",
      name: "Last.fm",
      state: b.find((h) => h.provider === "lastfm")?.connected ? "Connected" : "Metadata connector",
      body: "Artist bios, tags and now-playing style metadata. API key required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["apiKey"],
      kind: "metadata",
      connector: b.find((h) => h.provider === "lastfm"),
      oauthRequired: !1,
      configurable: !0
    },
    {
      id: "discogs",
      name: "Discogs",
      state: b.find((h) => h.provider === "discogs")?.connected ? "Connected" : "Metadata connector",
      body: "Release/catalog metadata and album artwork. Token required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["token"],
      kind: "catalog",
      connector: b.find((h) => h.provider === "discogs"),
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
              onClick: le,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(ye, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: nt.map((h) => /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => a(h.id),
          className: "rounded-lg px-3 transition-all",
          style: {
            height: 30,
            fontSize: 12,
            fontWeight: e === h.id ? 800 : 600,
            color: e === h.id ? "white" : "var(--text-secondary)",
            background: e === h.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)"
          },
          children: [
            h.label,
            typeof h.count == "number" ? ` · ${h.count}` : ""
          ]
        },
        h.id
      )) }),
      e === "search" && /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-xl px-4", style: { height: 44, background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
        /* @__PURE__ */ t(ht, { size: 16, style: { color: "var(--text-disabled)" } }),
        /* @__PURE__ */ t(
          "input",
          {
            value: r,
            onChange: (h) => i(h.target.value),
            placeholder: "Search music, artists, albums…",
            className: "flex-1 bg-transparent outline-none",
            style: { color: "var(--text-primary)", fontSize: 14, fontWeight: 600 },
            autoFocus: !0
          }
        ),
        g && /* @__PURE__ */ t(ne, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => i(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(ye, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((h) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => y(h),
          className: "rounded-lg px-3 transition-all",
          style: {
            height: 28,
            fontSize: 11,
            fontWeight: d === h ? 900 : 700,
            color: d === h ? "white" : "var(--text-secondary)",
            background: d === h ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)",
            textTransform: "capitalize"
          },
          children: h
        },
        h
      )) }) }),
      e === "search" && r.trim().length < 2 && n.length > 0 && /* @__PURE__ */ s("div", { className: "mt-3 flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.7, fontWeight: 800 }, children: "Recent" }),
        n.map((h) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => i(h),
            className: "rounded-lg px-3 transition-all hover:bg-[var(--bg-hover)]",
            style: {
              height: 26,
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-secondary)",
              background: "var(--bg-titlebar)",
              border: "1px solid var(--border-subtle)"
            },
            title: `Search for "${h}"`,
            children: h
          },
          h
        )),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: c,
            className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
            style: {
              width: 26,
              height: 26,
              color: "var(--text-disabled)",
              background: "var(--bg-titlebar)",
              border: "1px solid var(--border-subtle)"
            },
            title: "Clear recent searches",
            children: /* @__PURE__ */ t(ye, { size: 11 })
          }
        )
      ] }),
      w && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: w })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
        r.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        r.trim().length >= 2 && !g && m.length === 0 && !w && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        g && m.length === 0 && Array.from({ length: 5 }).map((h, R) => /* @__PURE__ */ s(
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
              /* @__PURE__ */ t(ne, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${R}`
        )),
        m.map((h) => {
          const R = Cn(h.title, h.channel), J = x.has(h.id), ce = B === h.id, kt = P === h.id, Ut = C.has(h.id);
          return /* @__PURE__ */ s(
            "div",
            {
              onMouseEnter: () => z(h),
              onFocus: () => z(h),
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                h.thumbnailUrl || ur(h.id) ? /* @__PURE__ */ t("img", { src: h.thumbnailUrl || ur(h.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Ma, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: R.song }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    R.artist || h.channel || "Music",
                    h.durationMs ? ` · ${De(h.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: h.title })
                ] }),
                Ut && !ce && /* @__PURE__ */ s("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(ne, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => L(h),
                    disabled: ce,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      ce ? /* @__PURE__ */ t(ne, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(ve, { size: 12 }),
                      ce ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => q(h),
                    disabled: J || kt,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: J ? "var(--text-disabled)" : "white", background: J ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      kt ? /* @__PURE__ */ t(ne, { size: 12, className: "animate-spin" }) : J ? /* @__PURE__ */ t(ea, { size: 12 }) : /* @__PURE__ */ t(ri, { size: 12 }),
                      kt ? "Adding" : J ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            h.id
          );
        })
      ] }),
      e === "artists" && (Ce !== null ? (() => {
        const h = Me.find(([R]) => R === Ce)?.[1] ?? [];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Ae(null),
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
                  /* @__PURE__ */ t(ho, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Ce }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                h.length,
                " track",
                h.length === 1 ? "" : "s",
                " in your Library"
              ] })
            ] }),
            h[0] && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Q(h[0]),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(ve, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: h.map(We) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Me.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Me.map(([h, R]) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => Ae(h),
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            title: `Open ${h}`,
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: h }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                R.length,
                " track",
                R.length === 1 ? "" : "s"
              ] })
            ]
          },
          h
        ))
      ] })),
      e === "albums" && (gt !== null ? (() => {
        const R = Dt.find(([ce]) => ce === gt)?.[1] ?? [], J = R[0];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => ot(null),
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
                  /* @__PURE__ */ t(ho, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            J && /* @__PURE__ */ t(tt, { track: J, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: gt }),
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
                  /* @__PURE__ */ t(ve, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: R.map(We) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        Dt.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        Dt.map(([h, R]) => {
          const J = R[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ot(h),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${h}`,
              children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                J && /* @__PURE__ */ t(tt, { track: J, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ s("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: h }),
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
            h
          );
        })
      ] })),
      e === "playlists" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ t("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Tl, { size: 22 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: N,
              onChange: (h) => D(h.target.value),
              onKeyDown: (h) => {
                h.key === "Enter" && Z();
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
                j ? /* @__PURE__ */ t(ne, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(ri, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        I.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : I.map((h) => /* @__PURE__ */ s("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-3 mb-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: h.name }),
              /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 3 }, children: [
                h.items.length,
                " track",
                h.items.length === 1 ? "" : "s"
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => rt(h),
                  disabled: h.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(ve, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => jt(h.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(It, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: h.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : h.items.map((R) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(tt, { track: R, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ s("button", { type: "button", onClick: () => Q(R), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: R.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: R.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => yr(h.id, R.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(ye, { size: 13 })
              }
            )
          ] }, `${h.id}-${R.id}`)) }),
          k.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: k.slice(0, 8).filter((R) => !h.items.some((J) => J.id === R.id)).map((R) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => Ne(h.id, R),
              className: "rounded-full px-3",
              style: { height: 28, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              children: [
                "+ ",
                R.title.slice(0, 28)
              ]
            },
            `${h.id}-add-${R.id}`
          )) })
        ] }, h.id))
      ] }),
      e === "sources" && /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        Ue.map((h) => /* @__PURE__ */ s(
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
                    style: { width: 46, height: 46, color: "white", background: h.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: h.name === "Spotify" ? "♬" : h.name === "YouTube" ? /* @__PURE__ */ t(ve, { size: 18 }) : h.kind === "catalog" ? /* @__PURE__ */ t(tl, { size: 18 }) : /* @__PURE__ */ t(zt, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: h.name }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 11, color: h.enabled ? "var(--status-success)" : "var(--text-secondary)", marginTop: 2 }, children: h.state }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.45, marginTop: 10 }, children: h.body })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const R = h.connector?.credentialSpecs ?? h.needs.map((J) => ({ name: J, label: J, secret: !0, required: !0 }));
                      Fe({}), Be(null), Pt({
                        id: h.id,
                        name: h.name,
                        body: h.body,
                        specs: R,
                        oauthRequired: h.oauthRequired,
                        configurable: h.configurable,
                        connected: h.enabled
                      });
                    },
                    className: "rounded-lg px-3 disabled:opacity-50",
                    style: { height: 30, fontSize: 11, fontWeight: 800, color: h.enabled ? "white" : "var(--text-secondary)", background: h.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: h.action
                  }
                ),
                h.connector?.account && /* @__PURE__ */ s("span", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                  "@",
                  h.connector.account
                ] })
              ] })
            ]
          },
          h.name
        )),
        fe && /* @__PURE__ */ s("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                fe.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: fe.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => Pt(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(ye, { size: 16 }) })
          ] }),
          fe.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ s(ge, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: fe.specs.map((h) => /* @__PURE__ */ s("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: h.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: h.label || h.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: xt[h.name] ?? "",
                  type: h.secret ? "password" : "text",
                  onChange: (R) => Fe((J) => ({ ...J, [h.name]: R.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: h.name
                }
              )
            ] }, h.name)) }),
            Ie && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: Ie }),
            /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  disabled: wt || !fe.configurable,
                  onClick: () => {
                    it(!0), Be(null), Se(fe.id, xt).then(() => {
                      Fe({}), Pt(null);
                    }).catch((h) => Be(h.message || "Connector setup failed.")).finally(() => it(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    wt ? /* @__PURE__ */ t(ne, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(ea, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              fe.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: wt,
                  onClick: () => {
                    it(!0), Be(null), Ra(fe.id).then(() => Pt(null)).catch((h) => Be(h.message || "Disconnect failed.")).finally(() => it(!1));
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
const Na = {
  theme: !1,
  style: !1,
  lyrics: !1,
  specs: !1,
  cover: !1
}, Gu = {
  theme: null,
  style: null,
  lyrics: null,
  specs: null,
  cover: null
}, Ca = (e) => e?.name === "AbortError";
function Vu() {
  const e = hc(), { t: a } = Rt(), r = yc(), i = xc(), { state: n, dispatch: c } = on(), { addNotification: d } = Sc(), y = n.theme.mode, [m, g] = S("compose"), [w, p] = S(!1), [f, b] = S("creator"), [k, I] = S(() => {
    try {
      const o = localStorage.getItem("juli3ta:selectedPlayerTrackId");
      return o && o.length > 0 ? o : null;
    } catch {
      return null;
    }
  });
  F(() => {
    try {
      k ? localStorage.setItem("juli3ta:selectedPlayerTrackId", k) : localStorage.removeItem("juli3ta:selectedPlayerTrackId");
    } catch {
    }
  }, [k]);
  const [N, j] = S(""), [_, C] = S(""), [B, P] = S(null), [x, E] = S(""), [z, L] = S(""), [q, Q] = S(!1), [ue, H] = S(""), [D, Z] = S(""), [Ne, yr] = S(!0), [rt, jt] = S(!1), [Se, Ra] = S(null), [le, fe] = S({}), [Pt, xt] = S(!1), [Fe, wt] = S(() => ({ ...Na })), it = ae({ ...Na }), Ie = ae({ ...Gu }), Be = A((o, l) => {
    it.current = { ...it.current, [o]: l }, wt((u) => u[o] === l ? u : { ...u, [o]: l });
  }, []), Ce = A((o) => {
    if (it.current[o]) return null;
    Ie.current[o]?.abort();
    const l = new AbortController();
    return Ie.current[o] = l, Be(o, !0), l;
  }, [Be]), Ae = A((o, l) => {
    Ie.current[o] === l && (Ie.current[o] = null), Be(o, !1);
  }, [Be]), gt = A(() => {
    Object.keys(Ie.current).forEach((o) => {
      Ie.current[o]?.abort(), Ie.current[o] = null;
    }), it.current = { ...Na }, wt({ ...Na }), jt(!1), xt(!1);
  }, []), [ot, nt] = S(null), [We, Me] = S(null), [Dt, Ue] = S(null), [h, R] = S(!1), [J, ce] = S(!1), [kt, Ut] = S(!1), [fr, br] = S([]), xi = ae(null), wi = ae(null), [vr, ki] = S(!1), [qe, Si] = S("best"), [En, zn] = S(null), [Ln, ja] = S(!1), [st, Ti] = S("mic"), [Je, xr] = S(!1), [_i, Ni] = S(0), [Ci, na] = S(null), Ai = ae(null), Pa = ae([]), Ot = ae(null), wr = ae(0), sa = ae(null), [Ht, Ge] = S("idle"), [la, K] = S(null), [In, $t] = S(0), [Ei, zi] = S(0), [St, Re] = S([]), [Ft, se] = S(null), [Ee, Li] = S(""), [ca, Ii] = S("cards"), [pe, Mi] = S(() => {
    try {
      return localStorage.getItem("juli3ta:sidebarTab") === "library" ? "library" : "mywork";
    } catch {
      return "mywork";
    }
  }), [je, Mn] = S(() => {
    try {
      const o = localStorage.getItem("juli3ta:myWorkChip");
      if (o === "all" || o === "songs" || o === "restyles" || o === "lyrics") return o;
    } catch {
    }
    return "all";
  }), [lt, Ri] = S(() => {
    try {
      return localStorage.getItem("juli3ta:libraryChip") === "favorites" ? "favorites" : "all";
    } catch {
      return "all";
    }
  });
  F(() => {
    try {
      localStorage.setItem("juli3ta:sidebarTab", pe);
    } catch {
    }
  }, [pe]), F(() => {
    try {
      localStorage.setItem("juli3ta:myWorkChip", je);
    } catch {
    }
  }, [je]), F(() => {
    try {
      localStorage.setItem("juli3ta:libraryChip", lt);
    } catch {
    }
  }, [lt]);
  const [Da, Rn] = S(() => {
    try {
      const o = localStorage.getItem("juli3ta:recentlyPlayedIds"), l = o ? JSON.parse(o) : null;
      return Array.isArray(l) ? l.filter((u) => typeof u == "string").slice(0, 8) : [];
    } catch {
      return [];
    }
  });
  F(() => {
    try {
      localStorage.setItem("juli3ta:recentlyPlayedIds", JSON.stringify(Da));
    } catch {
    }
  }, [Da]);
  const [Tt, kr] = S(!1), [ct, Ua] = S(() => /* @__PURE__ */ new Set()), [Sr, Tr] = S(!1), [dt, Oe] = S(!1), [jn, da] = S("search"), [_r, Pn] = S(""), [Dn, ji] = S(() => {
    try {
      const o = localStorage.getItem("juli3ta:searchHistory"), l = o ? JSON.parse(o) : null;
      return Array.isArray(l) ? l.filter((u) => typeof u == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), Pi = A((o) => {
    const l = o.trim();
    l.length < 2 || ji((u) => {
      const v = [l, ...u.filter((T) => T.toLowerCase() !== l.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(v));
      } catch {
      }
      return v;
    });
  }, []), [ua, Un] = S("tracks"), [On, Nr] = S([]), [Hn, Oa] = S(!1), [$n, ut] = S(null), [Fn, Di] = S(null), [Bn, Ui] = S([]), [Wn, Oi] = S([]), [pa, qn] = S({}), [Jn, Hi] = S(() => /* @__PURE__ */ new Set()), [Gn, $i] = S(null), [Vn, Fi] = S(null), [Bi, Wi] = S([]), [me, Cr] = S([]), [Bt, Ar] = S(() => /* @__PURE__ */ new Set()), [ma, Wt] = S([]), [qi, Kn] = S(!1), [Er, Ji] = S(""), [Yn, Gi] = S(!1), Vi = ae(/* @__PURE__ */ new Map()), zr = ae(/* @__PURE__ */ new Map()), qt = ae(pa), Lr = ae(/* @__PURE__ */ new Map()), [Ha, ha] = S(null), [$a, Ki] = S(!1), [Ir, Yi] = S(cn), [Xn, Fa] = S(!1);
  F(() => {
    qt.current = pa;
  }, [pa]), F(() => {
    let o = !1;
    return (async () => {
      try {
        await Promise.all([
          ru(),
          sd()
        ]);
      } catch (W) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", W);
      }
      await qc().catch((W) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", W);
      });
      const [l, u, v, T, M, U, V, xe] = await Promise.allSettled([
        Ac(),
        Vr(),
        Oc(),
        To(),
        Bc(),
        Jc("track"),
        wa(),
        od()
      ]);
      if (o) return;
      const mt = l.status === "fulfilled" ? l.value : [], Ke = u.status === "fulfilled" ? u.value.tracks.map((W) => ({ ...W, source: "juli3ta" })) : [];
      u.status === "fulfilled" && (ha(u.value.rootPath), se((W) => W?.startsWith("Real file library unavailable") ? null : W)), l.status === "fulfilled" ? Re(ka(Ke, mt)) : (console.error("[Juli3ta] listTracks failed:", l.reason), Re(ka(Ke)), se("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), u.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", u.reason), se("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const Ye = new Set(Ke.map((W) => W.id)), xa = new Set(mt.map((W) => W.id)), _t = mt.filter((W) => !Ye.has(W.id) && Md(W)), He = Ke.filter((W) => !xa.has(W.id));
      (_t.length > 0 || He.length > 0) && (async () => {
        const W = [];
        for (const te of _t)
          try {
            const Kt = await zo({ ...te, source: "juli3ta" });
            W.push({ ...te, ...Kt, source: "juli3ta" });
          } catch (Kt) {
            console.warn("[Juli3ta] host file backfill failed:", te.id, Kt);
          }
        for (const te of He)
          try {
            await dr({ ...te, source: "juli3ta" });
          } catch (Kt) {
            console.warn("[Juli3ta] standalone cache backfill failed:", te.id, Kt);
          }
        !o && (W.length > 0 || He.length > 0) && (Re((te) => ka(W, He, te)), Vr().then((te) => ha(te.rootPath)).catch(() => {
        }));
      })(), v.status === "fulfilled" && Yi(v.value), T.status === "fulfilled" && br(T.value);
      const ie = {
        version: 1,
        updatedAt: Date.now(),
        tracks: M.status === "fulfilled" ? M.value : [],
        favorites: U.status === "fulfilled" ? U.value : [],
        playlists: V.status === "fulfilled" ? V.value : []
      }, ee = xe.status === "fulfilled" ? xe.value : null, we = rd(), Pe = ko(
        ko(ie, we),
        ee
      );
      await Qc(Pe).catch((W) => {
        console.warn("[Juli3ta] music library durable import failed:", W);
      }), !o && (Cr(Pe.tracks), Ar(new Set(Pe.favorites.filter((W) => W.kind === "track").map((W) => W.entityId))), Wt(Pe.playlists), Kn(!0), So(Pe).catch((W) => {
        console.warn("[Juli3ta] music library durable save failed:", W);
      }));
    })(), () => {
      o = !0;
    };
  }, []), F(() => {
    if (!qi) return;
    const o = ad(me, Bt, ma), l = window.setTimeout(() => {
      So(o).catch((u) => {
        console.warn("[Juli3ta] music library durable save failed:", u);
      });
    }, 450);
    return () => window.clearTimeout(l);
  }, [qi, me, Bt, ma]), F(() => {
    if (!Ft?.startsWith("Real file library unavailable")) return;
    let o = !1;
    const l = async () => {
      try {
        const v = await Vr();
        if (o) return;
        ha(v.rootPath), Re((T) => ka(v.tracks.map((M) => ({ ...M, source: "juli3ta" })), T)), se((T) => T?.startsWith("Real file library unavailable") ? null : T);
      } catch {
      }
    }, u = window.setInterval(l, 4e3);
    return l(), () => {
      o = !0, window.clearInterval(u);
    };
  }, [Ft]);
  const Mr = A(async (o) => {
    try {
      const l = await zo({ ...o, source: "juli3ta" }), u = { ...o, ...l, source: "juli3ta" };
      return await dr(u), ha(l.folderPath?.split("/").slice(0, -1).join("/") || Ha), se(null), Re((v) => ka([u], v)), !0;
    } catch (l) {
      const u = l.message || "Real file save failed";
      return se(`Couldn't save "${o.title}" as a real file — ${u}.`), !1;
    }
  }, [Ha]), Qn = A(async (o) => {
    Yi(o);
    try {
      await Hc(o);
    } catch (l) {
      console.warn("Settings save failed:", l);
    }
  }, []), Ba = be(
    () => e.state ? iu(e.state.agents, e.state.included) : [],
    [e.state]
  ), [Wa, Zn] = S([]), [es, ts] = S(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [as, Xi] = S(!0), Y = Wa.find((o) => o.podId === es) ?? Wa[0] ?? null, Rr = A(async () => {
    Xi(!0);
    const o = new AbortController(), l = await lu(Ba, o.signal);
    Zn(l), Xi(!1);
  }, [Ba]);
  F(() => {
    Ba.length !== 0 && queueMicrotask(() => void Rr());
  }, [Ba, Rr]);
  const rs = A((o) => {
    ts(o);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", o);
    } catch {
    }
  }, []), ga = ae(null), ya = ae(null), qa = ae(!1);
  F(() => () => {
    ga.current?.abort(), Object.keys(Ie.current).forEach((o) => {
      Ie.current[o]?.abort();
    });
  }, []), F(() => {
    if (Ht === "idle") {
      queueMicrotask(() => {
        $t(0), zi(0);
      });
      return;
    }
    const o = Date.now(), l = () => {
      const T = (Date.now() - o) / 1e3, M = Ht === "lyrics" ? Math.min(0.95, T / 5) : Math.min(0.95, 1 - Math.exp(-T / 35));
      $t(M);
    };
    l();
    const u = setInterval(l, 250), v = setInterval(() => zi((T) => T + 1), 4500);
    return () => {
      clearInterval(u), clearInterval(v);
    };
  }, [Ht]);
  const fa = A((o) => {
    if (!o.lyricsPreview) return null;
    const l = i.ensureUserFolder("Music");
    if (!l) return null;
    const u = `${tr(o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, v = i.findChildByName(l, u);
    return v ? (i.writeFile(v.id, o.lyricsPreview), v.id) : i.createFile(l, u, o.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [i]), Qi = A((o) => {
    if (!o.audioDataUrl) return null;
    const l = i.ensureUserFolder("Music");
    if (!l) return null;
    const u = `${tr(o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, v = i.findChildByName(l, u);
    return v ? v.id : i.createFile(l, u, "", {
      mimeType: "audio/mpeg",
      refTrackId: o.id
    });
  }, [i]), is = A(async () => {
    if (!Y) {
      K(a("musiccreator.error.noPod"));
      return;
    }
    if (m === "restyle" && !We) {
      K(h ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (qa.current) return;
    qa.current = !0, K(null), gt(), ga.current?.abort();
    const o = new AbortController();
    ga.current = o;
    try {
      const l = Ir.overridesByEndpoint[Y.url] ?? {}, u = {
        ...Y,
        models: {
          music: l.music || Y.models.music,
          cover: l.cover || Y.models.cover,
          lyrics: l.lyrics || Y.models.lyrics,
          lyricsBackup: l.lyricsBackup || Y.models.lyricsBackup,
          image: l.image || Y.models.image,
          allIds: Y.models.allIds
        }
      }, v = bi(le);
      let T = _.trim(), M = z.trim(), U = x.trim(), V = null;
      if (!T && !q) {
        if (!N.trim() && !(le.intent ?? "").trim()) {
          K(a("musiccreator.error.noInput"));
          return;
        }
        Ge("lyrics");
        const he = [];
        N.trim() && he.push(N.trim());
        const Hr = (le.intent ?? "").trim();
        Hr && he.push(`User intent (must respect): ${Hr}`), v && he.push(`Musical context: ${v}`), B && he.push(`Structure: ${B.prompt}`);
        const Js = he.join(`

`);
        V = await pu(u, Js, o.signal), T = V.lyrics, M || (M = V.song_title), U || (U = V.style_tags);
      } else !T && q && (T = `[Intro]
[Instrumental]
[Outro]`);
      if (V && (C(V.lyrics), M === "Untitled" && (M = ""), M && !z.trim() && L(M), U && !x.trim() && E(U), V.usedFallback && se(
        `Primary lyrics model errored — used backup chat model "${u.models.lyricsBackup ?? "unknown"}" instead.`
      )), T.length > Xt) {
        K(a("musiccreator.error.lyricsTooLong", { count: T.length, max: Xt })), Ge("idle");
        return;
      }
      if (M.trim() || (M = eu(T, N, U || x), M && M !== "Untitled" && !z.trim() && L(M)), m === "lyricsOnly") {
        const he = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (M || a("musiccreator.track.untitled")) + " (lyrics)",
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
          specsJson: Zt(le) > 0 ? JSON.stringify(le) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: ue,
          theme: N
        };
        await Mr(he) && fa(he), Ge("idle"), $t(0);
        return;
      }
      if (m === "restyle" && !We) {
        K(h ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), Ge("idle");
        return;
      }
      Ge("song");
      const xe = [U, v].filter((he) => he && he.length > 0).join(". "), mt = mu(
        u,
        {
          lyrics: T,
          prompt: xe || void 0,
          instrumental: q,
          refAudioBase64: m === "restyle" ? We ?? void 0 : void 0
        },
        o.signal
      ), Ke = Ne && !ue && !!u.models.image, Ye = ue, xa = Ke ? ci(
        u,
        (D.trim() || nr(M, N, U || x)).slice(0, 1500),
        o.signal
      ).catch((he) => {
        if (he.name === "AbortError") throw he;
        return console.warn("[Juli3ta] Cover-art generation failed:", he), se(`Cover-art skipped: ${he.message}`), Ye;
      }) : Promise.resolve(Ye), _t = await Promise.allSettled([mt, xa]), He = _t[0], ie = _t[1];
      if (He.status === "rejected")
        throw o.abort(), He.reason;
      const ee = He.value, we = ie.status === "fulfilled" ? ie.value : Ye;
      if (!ee?.data?.audio || typeof ee.data.audio != "string" || ee.data.audio.length < 100) {
        const he = ee?.trace_id ? ` (trace ${ee.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${he}. Try again or pick a different model in Settings.`);
      }
      const Pe = `data:audio/mpeg;base64,${ee.data.audio}`, W = m === "restyle" ? " (restyle)" : "", te = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (M || a("musiccreator.track.untitled")) + W,
        styleTags: U || "—",
        lyricsPreview: T,
        // store the full text — used by Load
        durationMs: ee.data.duration_ms ?? 0,
        bitrate: ee.data.bitrate ?? 0,
        sampleRate: ee.data.sample_rate ?? 0,
        sizeBytes: ee.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: Pe,
        specsJson: Zt(le) > 0 ? JSON.stringify(le) : "",
        coverDataUrl: we,
        theme: N
      };
      H(we), console.info("[Juli3ta] Saving generated song:", { id: te.id, title: te.title, durationMs: te.durationMs, sizeBytes: te.sizeBytes }), await Mr(te) && (Qi(te), fa(te), m === "restyle" && We && zn({
        trackId: te.id,
        audioSrc: `data:audio/wav;base64,${We}`,
        sourceLabel: ot || "Original"
      }), d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: te.title }),
        isRead: !1
      })), Ge("idle"), $t(0);
    } catch (l) {
      if (l.name === "AbortError") {
        Ge("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", l), K(l.message || "Generation failed — check the console for details."), Ge("idle"), $t(0);
    } finally {
      qa.current = !1;
    }
  }, [
    Y,
    N,
    _,
    z,
    x,
    le,
    B,
    q,
    m,
    We,
    ot,
    a,
    Mr,
    Ir,
    Qi,
    fa,
    d,
    gt,
    Ne,
    ue,
    D
  ]), os = () => xi.current?.click(), Ja = ae(0), yt = A(async (o, l) => {
    const u = ++Ja.current, v = () => Ja.current === u;
    K(null), R(!0), Me(null), nt(l), Ue(null);
    try {
      if (qe === "mix") {
        const T = await _d(o);
        if (!v()) return;
        Me(T.base64);
        const M = T.sourceDurationSec / 60;
        if (T.segments.length > 1) {
          const U = T.segments.map((V) => `${Math.floor(V.startSec / 60)}:${Math.floor(V.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          Ue(
            `Mixed ${T.segments.length} iconic moments (${T.durationSec.toFixed(0)} s) from ${M.toFixed(1)} min — at ${U}`
          );
        } else
          Ue(`Using whole clip (${T.durationSec.toFixed(0)} s)`);
      } else {
        const T = await Sn(o);
        if (!v()) return;
        Me(T.base64);
        const M = T.sourceDurationSec / 60, U = T.startSec / 60, V = T.startSec < 60 ? `${T.startSec.toFixed(1)} s` : `${Math.floor(U)}:${Math.floor(T.startSec % 60).toString().padStart(2, "0")}`;
        Ue(
          T.sourceDurationSec <= T.durationSec + 0.5 ? `Using whole clip (${T.durationSec.toFixed(0)} s)` : `Auto-picked best ${T.durationSec.toFixed(0)} s starting at ${V} of ${M.toFixed(1)} min`
        );
      }
    } catch (T) {
      if (!v()) return;
      K(T.message || "Could not analyze that audio."), nt(null);
    } finally {
      v() && R(!1);
    }
  }, [qe]), ns = async () => {
    na(null);
    try {
      let o;
      if (st === "tab") {
        const T = navigator.mediaDevices;
        if (!T.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        o = await T.getDisplayMedia({ video: !0, audio: !0 });
        for (const M of o.getVideoTracks())
          M.stop(), o.removeTrack(M);
        if (o.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        o = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Ot.current = o;
      const u = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((T) => MediaRecorder.isTypeSupported(T)) || "", v = new MediaRecorder(o, u ? { mimeType: u } : void 0);
      Pa.current = [], v.ondataavailable = (T) => {
        T.data && T.data.size > 0 && Pa.current.push(T.data);
      }, v.onstop = async () => {
        try {
          const T = new Blob(Pa.current, {
            type: Pa.current[0]?.type || u || "audio/webm"
          });
          if (T.size === 0) {
            na("Recording was empty.");
            return;
          }
          const M = new FileReader();
          M.onerror = () => na("Could not read the recording."), M.onload = () => {
            const U = typeof M.result == "string" ? M.result : "", V = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${st === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - wr.current,
              mimeType: T.type || u || "audio/webm",
              audioDataUrl: U,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await fn(V), br((xe) => [V, ...xe]);
              } catch (xe) {
                console.warn("Recording save failed", xe), na("Could not save the recording. Try again.");
              }
            })(), ja(!1), yt(T, V.name);
          }, M.readAsDataURL(T);
        } finally {
          Ot.current?.getTracks().forEach((T) => T.stop()), Ot.current = null;
        }
      }, v.start(250), Ai.current = v, wr.current = Date.now(), Ni(0), xr(!0), sa.current = setInterval(() => {
        Ni(Date.now() - wr.current);
      }, 100);
    } catch (o) {
      na(o.message || "Could not start recording."), Ot.current?.getTracks().forEach((l) => l.stop()), Ot.current = null, xr(!1);
    }
  }, ss = () => {
    const o = Ai.current;
    o && o.state !== "inactive" && o.stop(), sa.current && clearInterval(sa.current), xr(!1);
  };
  F(() => () => {
    Ot.current?.getTracks().forEach((o) => o.stop()), sa.current && clearInterval(sa.current);
  }, []);
  const ls = (o) => {
    const l = o.target.files?.[0];
    if (o.target.value = "", !!l) {
      if (l.size > 50 * 1024 * 1024) {
        K("Reference audio is too big. Max 50 MB.");
        return;
      }
      yt(l, l.name);
    }
  }, cs = (o) => {
    ce(!1), yt(o.audioDataUrl, o.name);
  }, ds = () => {
    ce(!0), To().then((o) => br(o)).catch(() => {
    });
  }, us = () => Ut(!0), ps = (o) => {
    if (Ut(!1), !o.audioDataUrl) return;
    const l = o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    yt(o.audioDataUrl, `${l}.mp3`);
  }, ms = () => {
    Ja.current += 1, R(!1), Me(null), nt(null), Ue(null);
  }, hs = () => {
    ga.current?.abort(), Ge("idle");
  }, ft = A(async (o, l, u) => {
    if (!Y) throw new Error("No endpoint connected");
    const v = (ie) => {
      const ee = ie, we = ee.choices?.[0], Pe = [
        we?.message?.content,
        we?.delta?.content,
        we?.text,
        ee.output_text
      ];
      for (const W of Pe)
        if (typeof W == "string" && W.trim().length > 0) return W.trim();
      return "";
    }, T = (ie) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(ie), M = /* @__PURE__ */ new Set(), U = [], V = (ie) => {
      ie && !M.has(ie) && (M.add(ie), U.push(ie));
    };
    if (V(Y.models.lyricsBackup), Y.models.allIds.filter(T).forEach(V), U.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const xe = typeof l == "string" ? l : JSON.stringify(l), mt = u?.temperature ?? 0.5, Ke = Math.max(u?.maxTokens ?? 800, 400), Ye = (ie) => {
      const ee = ie.toLowerCase();
      return /^(deepseek\/)?ail-fast$/.test(ee) ? 10 : /^(deepseek\/)?ail-balanced$/.test(ee) ? 20 : /^(ail-compound-minimax|minimax\/ail-compound-minimax)$/.test(ee) ? 30 : /^minimax\/ail-balanced$/.test(ee) ? 40 : /^minimax\/ail-kimi$/.test(ee) ? 50 : /^moonshot\/ail-balanced$/.test(ee) ? 60 : /^moonshot\/ail-compound$/.test(ee) ? 70 : /^(ail-compound|moonshot\/ail-kimi|ail-kimi|ail-kimi-strict|moonshot\/ail-kimi-strict)$/.test(ee) ? 90 : /search/.test(ee) ? 100 : 80;
    }, xa = (ie) => /^minimax\/ail-compound$/i.test(ie);
    U.sort((ie, ee) => Ye(ie) - Ye(ee));
    const _t = U.filter((ie) => !xa(ie)), He = 45e3;
    return gr(_t, async (ie) => {
      const ee = ra(u?.signal, He);
      let we;
      try {
        we = await aa(Y, "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: ie,
            messages: [
              { role: "system", content: o },
              { role: "user", content: xe }
            ],
            temperature: mt,
            max_tokens: Ke
          }),
          signal: ee.signal
        });
      } catch (te) {
        throw te.name === "TimeoutError" ? new Error(`AI assist timed out after ${He / 1e3}s.`) : te;
      } finally {
        ee.dispose();
      }
      if (!we.ok) {
        const te = await we.text().catch(() => "");
        throw we.status === 400 && /web_search|not support|unsupported|invalid params/i.test(te) ? new _e(502, te, `AI assist model ${ie} rejected provider params: ${te.slice(0, 200)}`) : new _e(we.status, te, `AI assist HTTP ${we.status}: ${te.slice(0, 200)}`);
      }
      const Pe = await we.json(), W = v(Pe);
      if (!W)
        throw console.warn("[Juli3ta] empty AI assist content from", ie, Pe), new _e(502, "", `Model "${ie}" returned empty content`);
      return W.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [Y]), gs = A(async () => {
    if (!Y) return;
    const o = Ce("specs");
    if (o) {
      xt(!0), K(null);
      try {
        const u = await ft(`You are a music-production assistant. Given a theme, style, and (optionally) lyrics, return ONE JSON object that fills in optimal Track Specs for the song.

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
          existing_specs: Zt(le) > 0 ? le : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: o.signal
        }), v = An(u) ?? u;
        let T;
        try {
          T = JSON.parse(v);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${u.slice(0, 160)}`);
        }
        if (o.signal.aborted) return;
        fe((M) => ({ ...T, intent: M.intent }));
      } catch (l) {
        if (Ca(l)) return;
        K(l.message || "Optimize failed.");
      } finally {
        Ae("specs", o), xt(!1);
      }
    }
  }, [Y, N, x, _, le, ft, Ce, Ae]), Zi = A(async () => {
    if (!Y) return;
    if (!Y.models.image) {
      K(`This endpoint (${Y.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (rt) return;
    const o = Ce("cover");
    if (!o) return;
    const l = o.signal;
    jt(!0), K(null);
    try {
      const u = (D.trim() || nr(z, N, x)).slice(0, 1500), v = await ci(Y, u, l);
      if (l.aborted) return;
      H(v), Se && ya.current?.(Se, v);
    } catch (u) {
      if (Ca(u)) return;
      K(u.message || "Cover-art generation failed.");
    } finally {
      Ae("cover", o), jt(!1);
    }
  }, [Y, D, z, N, x, rt, Se, Ce, Ae]), eo = A((o) => {
    if (!o.type.startsWith("image/")) {
      K("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (o.size > 4 * 1024 * 1024) {
      K("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const l = new FileReader();
    l.onerror = () => K("Could not read that image file."), l.onload = () => {
      const u = l.result;
      typeof u == "string" && u.startsWith("data:image/") && (H(u), Se && ya.current?.(Se, u));
    }, l.readAsDataURL(o);
  }, [Se]), ys = A(async () => {
    const o = Ce("theme");
    if (o) {
      K(null);
      try {
        const u = await ft("You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.", {
          style: x || "pop",
          existing_theme: N || null
        }, { temperature: 0.85, maxTokens: 200, signal: o.signal });
        if (o.signal.aborted) return;
        j(u);
      } catch (l) {
        if (Ca(l)) return;
        K(l.message || "Theme inspiration failed.");
      } finally {
        Ae("theme", o);
      }
    }
  }, [Ce, Ae, ft, x, N]), fs = A(async () => {
    const o = Ce("style");
    if (o) {
      K(null);
      try {
        const u = await ft('You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".', {
          theme: N || "a quiet evening",
          existing_style: x || null
        }, { temperature: 0.7, maxTokens: 120, signal: o.signal });
        if (o.signal.aborted) return;
        E(u.replace(/^["']|["']$/g, ""));
      } catch (l) {
        if (Ca(l)) return;
        K(l.message || "Style suggestion failed.");
      } finally {
        Ae("style", o);
      }
    }
  }, [Ce, Ae, ft, N, x]), bs = A(async () => {
    if (!_.trim()) {
      K("Nothing to polish — write some lyrics first.");
      return;
    }
    const o = Ce("lyrics");
    if (o) {
      K(null);
      try {
        const u = await ft("You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.", {
          style: x || null,
          lyrics: _
        }, { temperature: 0.6, maxTokens: 1200, signal: o.signal });
        if (o.signal.aborted) return;
        if (u.length > Xt) {
          K(`Polished lyrics exceeded ${Xt} chars (${u.length}). Trimming the original first might help.`);
          return;
        }
        C(u);
      } catch (l) {
        if (Ca(l)) return;
        K(l.message || "Lyrics polish failed.");
      } finally {
        Ae("lyrics", o);
      }
    }
  }, [Ce, Ae, ft, x, _]), vs = (o) => {
    E((l) => l ? `${l}, ${o.toLowerCase()}` : o.toLowerCase());
  }, jr = () => {
    const o = [
      "Late-night coding session, neon city skyline, focus and flow.",
      "Sunday-morning coffee, soft rain, lo-fi piano.",
      "Synthwave anthem about shipping on Friday evening.",
      "Jazz ballad about a forgotten train station at 3am.",
      "Acoustic folk song about a long road trip with old friends.",
      "Cinematic orchestral piece for a heroic underdog scene.",
      "Upbeat pop anthem about finishing a hard project."
    ];
    j(o[Math.floor(Math.random() * o.length)]);
  }, xs = () => {
    const o = k ?? $.state.trackId ?? bt[0]?.id ?? me[0]?.id ?? null, l = o ? ze.find((u) => u.id === o) ?? null : null;
    l && Jt(l), b("creator"), jr();
  }, to = A((o) => {
    Re((l) => l.filter((u) => u.id !== o)), zc(o).catch((l) => console.warn("Track cache delete failed:", l)), Ld(o).catch((l) => console.warn("Track file delete failed:", l));
  }, []), ws = A(async () => {
    if (!$a) {
      Ki(!0);
      try {
        const o = await Id();
        ha(o), d({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: o,
          isRead: !1
        });
      } catch (o) {
        se(`Could not open JULI3TA folder — ${o.message || o}`);
      } finally {
        Ki(!1);
      }
    }
  }, [d, $a]), Ga = A(async (o, l) => {
    const u = l.trim().slice(0, 200) || "Untitled";
    Re((v) => v.map((T) => T.id === o ? { ...T, title: u } : T));
    try {
      await Lc(o, u), se(null);
    } catch (v) {
      const T = v.message || "Database write failed";
      se(`Couldn't rename track — ${T}.`);
    }
  }, []), Pr = A(async (o, l) => {
    Re((u) => u.map((v) => v.id === o ? { ...v, coverDataUrl: l } : v));
    try {
      await Ic(o, l), se(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      se(`Couldn't save cover art — ${v}.`);
    }
  }, []);
  F(() => {
    ya.current = Pr;
  }, [Pr]);
  const ao = A(async (o, l) => {
    Re((u) => u.map((v) => v.id === o ? { ...v, styleTags: l || "—" } : v));
    try {
      await Mc(o, l), se(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      se(`Couldn't save style — ${v}.`);
    }
  }, []), ro = A(async (o, l) => {
    Re((u) => u.map((v) => v.id === o ? { ...v, lyricsPreview: l } : v));
    try {
      await Rc(o, l), se(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      se(`Couldn't save lyrics — ${v}.`);
    }
  }, []), io = A(async (o, l) => {
    Re((u) => u.map((v) => v.id === o ? { ...v, specsJson: l } : v));
    try {
      await jc(o, l), se(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      se(`Couldn't save specs — ${v}.`);
    }
  }, []), oo = A(async (o, l) => {
    Re((u) => u.map((v) => v.id === o ? { ...v, theme: l } : v));
    try {
      await Pc(o, l), se(null);
    } catch (u) {
      const v = u.message || "Database write failed";
      se(`Couldn't save theme — ${v}.`);
    }
  }, []);
  F(() => {
    if (!Se) return;
    const o = Se, l = setTimeout(() => {
      const u = St.find((xe) => xe.id === o);
      if (!u) return;
      const v = z.trim() || u.title, T = x.trim(), M = N, U = Zt(le) > 0 ? JSON.stringify(le) : "", V = u.styleTags === "—" ? "" : u.styleTags || "";
      u.title !== v && Ga(o, v), V !== T && ao(o, T), (u.lyricsPreview || "") !== _ && ro(o, _), (u.specsJson || "") !== U && io(o, U), (u.theme || "") !== M && oo(o, M);
    }, 600);
    return () => clearTimeout(l);
  }, [Se, z, x, N, _, le, St, Ga, ao, ro, io, oo]);
  const [no, so] = S(null), [ks, lo] = S(!1), Jt = A((o) => {
    C(o.lyricsPreview ?? ""), E(o.styleTags && o.styleTags !== "—" ? o.styleTags : ""), j(o.theme ?? "");
    const l = o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (L(l), Q(!1), o.specsJson)
      try {
        fe(JSON.parse(o.specsJson));
      } catch {
        fe({});
      }
    else
      fe({});
    H(o.coverDataUrl ?? ""), Z(""), Ra(o.id), K(null), P(null), Q(!1), ke(o) ? o.source === "youtube" ? (g("restyle"), Me(null), nt(`${l}.mp3`), Ue("Resolving streamed audio…"), R(!0), (async () => {
      try {
        const v = o.externalId || "";
        if (!v) throw new Error("Missing source identifier.");
        const T = Sa(v), M = pa[T], U = M && Date.now() - M.resolvedAt < 5400 * 1e3 ? M.src : (await Eo(v)).proxyUrl;
        await yt(U, `${l}.mp3`);
      } catch (v) {
        R(!1), Me(null), nt(null), Ue(null), K(`Could not load streamed track for restyle: ${v.message || "unknown error"}`);
      }
    })()) : (g("restyle"), yt(o.audioDataUrl, `${l}.mp3`)) : (Me(null), nt(null), Ue(null), g("lyricsOnly"));
  }, [yt, pa]), co = A((o) => {
    const l = fa(o);
    if (!l) {
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
    c({
      type: "OPEN_OR_FOCUS_WINDOW",
      appId: "texteditor",
      args: { editor: { nodeId: l } }
    });
  }, [fa, c, d, a]), Va = A((o, l, u, v) => {
    const T = i.ensureUserFolder("Desktop");
    if (!T) return;
    const M = i.findChildByName(T, o);
    let U;
    if (M)
      u.refTrackId || i.writeFile(M.id, l), U = M.id;
    else {
      U = i.createFile(T, o, l, u);
      const V = Array.from(v).reduce((Ke, Ye) => Ke + Ye.charCodeAt(0), 0), xe = V % 6 + 1, mt = Math.floor(V / 6) % 4;
      c({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: o,
          icon: vc(o),
          fileSystemNodeId: U,
          position: { x: 16 + xe * 80, y: 16 + mt * 90 },
          isSelected: !1
        }
      });
    }
    d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Sparkles",
      title: a("musiccreator.notify.savedToDesktopTitle"),
      message: a("musiccreator.notify.savedToDesktopBody", { name: o }),
      isRead: !1
    });
  }, [i, c, d, a]), Ss = A((o) => {
    if (!o.audioDataUrl) return;
    const l = tr(o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Va(`${l}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: o.id }, o.id);
  }, [Va]), Ts = A((o) => {
    if (!o.lyricsPreview) return;
    const l = tr(o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Va(`${l}.lyrics.txt`, o.lyricsPreview, { mimeType: "text/plain" }, `${o.id}-lyrics`);
  }, [Va]), _s = A((o) => {
    Oe(!1), b("player"), I(o.id);
  }, []), pt = A((o) => {
    const l = o.dataTransfer.getData(Ea);
    if (!l) return null;
    try {
      return JSON.parse(l);
    } catch {
      return null;
    }
  }, []), Ns = A((o) => {
    const l = pt(o);
    if (l && l.lyricsPreview) {
      o.preventDefault(), C(l.lyricsPreview);
      const u = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !z.trim() && u && L(u), !x.trim() && l.styleTags && l.styleTags !== "—" && E(l.styleTags);
      return;
    }
  }, [pt, z, x]), Cs = A((o) => {
    const l = pt(o);
    l && l.styleTags && l.styleTags !== "—" && (o.preventDefault(), E((u) => u ? `${u}, ${l.styleTags}` : l.styleTags));
  }, [pt]), As = A((o) => {
    const l = pt(o);
    if (l) {
      o.preventDefault();
      const u = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), v = l.styleTags && l.styleTags !== "—" ? `Inspired by "${u}" — ${l.styleTags}` : `Inspired by "${u}"`;
      j(v);
    }
  }, [pt]), Es = A((o) => {
    const l = pt(o);
    l && (o.preventDefault(), L(l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [pt]), Ka = (o) => {
    o.dataTransfer.types.includes(Ea) && (o.preventDefault(), o.dataTransfer.dropEffect = "copy");
  }, uo = _.length, zs = x.length, X = Ht !== "idle", Ls = be(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            ga.current?.abort(), gt(), Ja.current += 1, qa.current = !1, g("compose"), j(""), C(""), E(""), L(""), fe({}), P(null), Q(!1), H(""), Z(""), ki(!1), Me(null), nt(null), Ue(null), K(null), se(null), Ge("idle"), $t(0), wt({ ...Na }), jt(!1), xt(!1), Ra(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => jr() },
          { id: "mode-restyle", label: "Restyle Mode", onSelect: () => g("restyle") },
          { id: "mode-lyrics", label: "Lyrics Only Mode", onSelect: () => g("lyricsOnly") }
        ]
      },
      {
        id: "view",
        label: "View",
        items: [
          { id: "view-creator", label: "Creator", onSelect: () => b("creator") },
          { id: "view-player", label: "Player", onSelect: () => b("player") },
          { id: "open-help", label: "How it works…", onSelect: () => p(!0) },
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => Fa(!0) }
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
          { id: "juli3ta-about", label: `About JULI3TA v${li}`, onSelect: () => Fa(!0) }
        ]
      }
    ]
  }), [r, gt]);
  gc(r?.id ?? null, Ls);
  const Ve = be(
    () => St.filter(Nn),
    [St]
  ), bt = be(() => {
    let o = Ve;
    je === "songs" ? o = o.filter((u) => ke(u) && !/\(restyle\)\s*$/i.test(u.title) && !/\(lyrics\)\s*$/i.test(u.title)) : je === "restyles" ? o = o.filter((u) => /\(restyle\)\s*$/i.test(u.title)) : je === "lyrics" && (o = o.filter((u) => !ke(u) || /\(lyrics\)\s*$/i.test(u.title)));
    const l = Ee.trim().toLowerCase();
    return l ? o.filter((u) => u.title.toLowerCase().includes(l) || u.styleTags.toLowerCase().includes(l)) : o;
  }, [Ve, Ee, je]), Gt = be(() => {
    let o = me;
    lt === "favorites" && (o = o.filter((u) => Bt.has(u.id)));
    const l = Ee.trim().toLowerCase();
    return l ? o.filter((u) => u.title.toLowerCase().includes(l) || (u.artist || "").toLowerCase().includes(l) || (u.album || "").toLowerCase().includes(l)) : o;
  }, [me, lt, Ee, Bt]), Vt = A((o, l) => {
    const u = Sa(o), v = qt.current[u];
    if (!l?.force && v && Date.now() - v.resolvedAt < 5400 * 1e3)
      return Promise.resolve(v.src);
    const T = Lr.current.get(o);
    if (!l?.force && T) return T;
    Hi((U) => new Set(U).add(o));
    const M = Eo(o).then((U) => {
      const V = { src: U.proxyUrl, resolvedAt: Date.now() };
      return qt.current = { ...qt.current, [u]: V }, qn((xe) => ({ ...xe, [u]: V })), U.proxyUrl;
    }).finally(() => {
      Lr.current.delete(o), Hi((U) => {
        const V = new Set(U);
        return V.delete(o), V;
      });
    });
    return Lr.current.set(o, M), M;
  }, []), ba = A((o) => {
    o.slice(0, 3).forEach((l) => {
      Vt(l.id).catch(() => {
      });
    });
  }, [Vt]);
  F(() => {
    if (!dt) return;
    const o = new AbortController();
    return Promise.allSettled([
      Nd(o.signal),
      Co(o.signal),
      Ao(o.signal)
    ]).then(([l, u, v]) => {
      l.status === "fulfilled" ? Di(l.value) : Di(null), u.status === "fulfilled" && Ui(u.value), v.status === "fulfilled" && Oi(v.value);
    }), () => o.abort();
  }, [dt]), F(() => {
    if (!dt) return;
    const o = (l) => {
      l.key === "Escape" && Oe(!1);
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [dt]), F(() => {
    if (!dt) return;
    const o = _r.trim();
    if (o.length < 2) {
      const M = window.setTimeout(() => {
        Nr([]), ut(null), Oa(!1);
      }, 0);
      return () => window.clearTimeout(M);
    }
    const l = `${ua}:${o.toLowerCase()}`, u = Vi.current.get(l);
    if (u) {
      Nr(u), Oa(!1), ut(null), ba(u);
      return;
    }
    const v = new AbortController(), T = setTimeout(() => {
      Oa(!0), ut(null);
      let M = zr.current.get(l);
      M || (M = zd(o, ua, 20, v.signal).then((U) => ua === "playlists" ? U.results.playlists : U.results.tracks).catch(() => Ed(o, 20, v.signal)).finally(() => {
        zr.current.delete(l);
      }), zr.current.set(l, M)), M.then((U) => {
        Vi.current.set(l, U), Nr(U), ba(U), U.length > 0 && Pi(o);
      }).catch((U) => {
        v.signal.aborted || ut(U.message || "Music search failed.");
      }).finally(() => {
        v.signal.aborted || Oa(!1);
      });
    }, 120);
    return () => {
      v.abort(), clearTimeout(T);
    };
  }, [_r, ua, dt, ba, Pi]);
  const Ya = A(async () => {
    const [o, l] = await Promise.allSettled([
      Co(),
      Ao()
    ]);
    o.status === "fulfilled" && Ui(o.value), l.status === "fulfilled" && Oi(l.value);
  }, []), Is = A(async (o, l) => {
    await Cd(o, l), await Ya(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${o} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, Ya]), Ms = A(async (o) => {
    await Ad(o), await Ya(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${o} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [d, Ya]), Rs = be(
    () => new Set(me.filter((o) => o.externalId).map((o) => o.externalId)),
    [me]
  ), Xa = A((o, l) => {
    const u = Cn(o.title, o.channel);
    return {
      id: l?.id ?? Sa(o.id),
      title: u.song || o.title || "Untitled",
      styleTags: "",
      lyricsPreview: "",
      durationMs: o.durationMs ?? 0,
      bitrate: 0,
      sampleRate: 0,
      sizeBytes: 0,
      createdAt: Date.now(),
      audioDataUrl: l?.audioDataUrl ?? "",
      specsJson: "",
      coverDataUrl: "",
      theme: "",
      source: "youtube",
      audioKind: "remote_stream",
      externalId: o.id,
      externalUrl: `https://www.youtube.com/watch?v=${o.id}`,
      thumbnailUrl: o.thumbnailUrl || ur(o.id),
      artist: u.artist || o.channel || "Unknown",
      album: o.channel ?? ""
    };
  }, []), js = A(async (o, l) => {
    if (o.audioDataUrl && !l?.force) return o.audioDataUrl;
    if (!vi(o) || !o.externalId) return o.audioDataUrl || null;
    const u = Sa(o.externalId), v = qt.current[u] ?? qt.current[o.id];
    return !l?.force && v && Date.now() - v.resolvedAt < 5400 * 1e3 ? v.src : Vt(o.externalId, l);
  }, [Vt]), ze = be(
    () => [...Bi, ...me, ...bt],
    [Bi, me, bt]
  );
  F(() => {
    if (!k || ze.length === 0) return;
    ze.some((l) => l.id === k) || I(null);
  }, [k, ze]);
  const po = ae(null), $ = hu(ze, po, js);
  F(() => {
    const o = $.state.trackId;
    o && Rn((l) => l[0] === o ? l : [o, ...l.filter((v) => v !== o)].slice(0, 8));
  }, [$.state.trackId]), F(() => {
    if (typeof navigator > "u" || !("mediaSession" in navigator)) return;
    const o = navigator.mediaSession, l = $.state.trackId, u = l ? ze.find((v) => v.id === l) : null;
    if (!u) {
      o.metadata = null, o.playbackState = "none";
      return;
    }
    return o.metadata = new MediaMetadata({
      title: u.title || "Untitled",
      artist: u.artist || "JULI3TA",
      album: u.album || (u.styleTags && u.styleTags !== "—" ? u.styleTags : ""),
      artwork: u.coverDataUrl ? [{ src: u.coverDataUrl, sizes: "512x512", type: u.coverDataUrl.startsWith("data:image/png") ? "image/png" : "image/jpeg" }] : u.thumbnailUrl ? [{ src: u.thumbnailUrl, sizes: "256x256", type: "image/jpeg" }] : []
    }), o.playbackState = $.state.playing ? "playing" : "paused", o.setActionHandler("play", () => $.toggle(u)), o.setActionHandler("pause", () => $.pause()), o.setActionHandler("previoustrack", () => $.prev()), o.setActionHandler("nexttrack", () => $.next()), o.setActionHandler("seekbackward", (v) => {
      $.seek(Math.max(0, $.state.positionMs - (v.seekOffset ?? 10) * 1e3));
    }), o.setActionHandler("seekforward", (v) => {
      $.seek(Math.min($.state.durationMs || 0, $.state.positionMs + (v.seekOffset ?? 10) * 1e3));
    }), () => {
      o.setActionHandler("play", null), o.setActionHandler("pause", null), o.setActionHandler("previoustrack", null), o.setActionHandler("nexttrack", null), o.setActionHandler("seekbackward", null), o.setActionHandler("seekforward", null);
    };
  }, [$, $.state.trackId, $.state.playing, ze]), F(() => {
    const o = $.state.trackId;
    if (!o) return;
    const l = ze.find((M) => M.id === o);
    if (!l) return;
    const u = $.state.playing ? "▶" : "⏸", v = (l.title || "Untitled").replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), T = document.title;
    return document.title = `${u} ${v} — JULI3TA`, () => {
      document.title = T;
    };
  }, [$.state.trackId, $.state.playing, ze]), F(() => {
    if (f !== "player") return;
    const o = (l) => {
      const u = l.target;
      if (u) {
        const M = u.tagName;
        if (M === "INPUT" || M === "TEXTAREA" || M === "SELECT" || u.isContentEditable) return;
      }
      const v = $.state.trackId;
      if (!v) return;
      const T = ze.find((M) => M.id === v);
      if (T)
        switch (l.key) {
          case " ":
            l.preventDefault(), $.toggle(T);
            break;
          case "ArrowLeft":
            l.preventDefault(), $.seek(Math.max(0, $.state.positionMs - 5e3));
            break;
          case "ArrowRight":
            l.preventDefault(), $.seek(Math.min($.state.durationMs || 0, $.state.positionMs + 5e3));
            break;
          case "ArrowUp":
            l.preventDefault(), $.setVolume(Math.min(1, $.state.volume + 0.1));
            break;
          case "ArrowDown":
            l.preventDefault(), $.setVolume(Math.max(0, $.state.volume - 0.1));
            break;
        }
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [f, $, ze]), F(() => {
    const o = (l) => {
      const u = l.target;
      if (u) {
        const v = u.tagName;
        if (v === "INPUT" || v === "TEXTAREA" || v === "SELECT" || u.isContentEditable) return;
      }
      l.key === "?" || l.key === "/" && l.shiftKey ? (l.preventDefault(), Tr((v) => !v)) : l.key === "Escape" && Sr && Tr(!1);
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [Sr]);
  const Ps = A((o) => {
    const l = o.items.find(ke);
    l && (Wi((u) => [
      ...o.items.filter((v) => !u.some((T) => T.id === v.id)),
      ...u
    ]), I(l.id), Oe(!1), b("player"), $.play(l));
  }, [$]), Ds = A(async (o) => {
    await Kc(o), Wt(await wa());
  }, []), Us = A((o) => {
    ut(null), $i(o.id);
    const l = Sa(o.id), u = Xa(o, { id: l });
    Wi((v) => [u, ...v.filter((T) => T.id !== u.id)]), I(u.id), b("player"), $.play(u), $i(null);
  }, [$, Xa]), Os = A((o) => {
    Vt(o.id).catch(() => {
    });
  }, [Vt]), Hs = A(async (o) => {
    Fi(o.id);
    const l = Xa(o);
    try {
      await mn(l), Cr((u) => [l, ...u.filter((v) => v.id !== l.id)]), I(l.id), Mi("library"), Ri("all"), ba([o]), ma.length > 0;
    } catch (u) {
      ut(u.message || "Could not save track.");
    } finally {
      Fi(null);
    }
  }, [Xa, ba, ma.length]), Dr = A((o) => {
    Ar((l) => {
      const u = new Set(l);
      return u.has(o.id) ? u.delete(o.id) : u.add(o.id), u;
    }), Gc({
      kind: "track",
      entityId: o.id,
      provider: o.source ?? "youtube",
      title: o.title
    }).catch((l) => console.warn("Favorite toggle failed:", l));
  }, []), $s = A(async () => {
    const o = Er.trim() || "New Playlist";
    Gi(!0);
    try {
      const l = await Vc(o);
      Wt((u) => [l, ...u]), Ji("");
    } catch (l) {
      ut(l.message || "Could not create playlist.");
    } finally {
      Gi(!1);
    }
  }, [Er]), Fs = A(async (o, l) => {
    try {
      await Yc(o, l);
      const u = await wa();
      Wt(u);
    } catch (u) {
      ut(u.message || "Could not add to playlist.");
    }
  }, []), Bs = A(async (o, l) => {
    try {
      await Xc(o, l);
      const u = await wa();
      Wt(u);
    } catch (u) {
      ut(u.message || "Could not remove from playlist.");
    }
  }, []), Ur = A((o) => {
    Cr((l) => l.filter((u) => u.id !== o.id)), Ar((l) => {
      const u = new Set(l);
      return u.delete(o.id), u;
    }), Wc(o.id).then(() => wa().then(Wt)).catch((l) => console.warn("Library track delete failed:", l));
  }, []), Ws = A((o) => {
    Ua((l) => {
      const u = new Set(l);
      return u.has(o.id) ? u.delete(o.id) : u.add(o.id), u;
    });
  }, []), va = A(() => {
    kr(!1), Ua(/* @__PURE__ */ new Set());
  }, []);
  F(() => {
    if (!Tt) return;
    const o = (l) => {
      l.key === "Escape" && va();
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [Tt, va]), F(() => {
    pe !== "library" && (Tt || ct.size > 0) && (kr(!1), Ua(/* @__PURE__ */ new Set()));
  }, [pe, Tt, ct.size]);
  const Or = A((o) => {
    I(o.id), Oe(!1), b("player");
  }, []), qs = A((o) => {
    Jt(o), Oe(!1), b("creator");
  }, [Jt]);
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
                    children: pe === "mywork" ? "My Work" : "Library"
                  }
                ),
                /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: pe === "mywork" ? Ee.trim() || je !== "all" ? `${bt.length} / ${Ve.length}` : a(
                    Ve.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: Ve.length }
                  ) : Ee.trim() || lt !== "all" ? `${Gt.length} / ${me.length}` : `${me.length} saved` }),
                  pe === "mywork" && /* @__PURE__ */ s(ge, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: ws,
                        disabled: $a,
                        className: "flex items-center justify-center transition-all",
                        style: {
                          width: 22,
                          height: 22,
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-window)",
                          color: "var(--text-secondary)",
                          opacity: $a ? 0.5 : 1
                        },
                        title: Ha ? `Open real folder: ${Ha}` : "Open real JULI3TA folder",
                        children: /* @__PURE__ */ t(vl, { size: 11 })
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
                              onClick: () => Ii("cards"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: ca === "cards" ? "var(--bg-hover)" : "transparent",
                                color: ca === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "Cards",
                              children: /* @__PURE__ */ t(ai, { size: 11 })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => Ii("list"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: ca === "list" ? "var(--bg-hover)" : "transparent",
                                color: ca === "list" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "List",
                              children: /* @__PURE__ */ t(Lt, { size: 11 })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  pe === "library" && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        Oe(!0), da("search");
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
                      children: /* @__PURE__ */ t(ht, { size: 11 })
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
                { id: "mywork", label: "My Work", count: Ve.length },
                { id: "library", label: "Library", count: me.length }
              ].map((o) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => Mi(o.id),
                  className: "flex-1 rounded-md transition-all",
                  style: {
                    height: 26,
                    fontSize: 11,
                    fontWeight: pe === o.id ? 700 : 600,
                    color: pe === o.id ? "white" : "var(--text-secondary)",
                    background: pe === o.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
                    border: "none"
                  },
                  children: [
                    o.label,
                    o.count > 0 && /* @__PURE__ */ t(
                      "span",
                      {
                        style: {
                          marginLeft: 6,
                          fontSize: 10,
                          fontWeight: 700,
                          opacity: pe === o.id ? 0.85 : 0.55
                        },
                        children: o.count
                      }
                    )
                  ]
                },
                o.id
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
                opacity: pe === "mywork" ? Ve.length === 0 ? 0.4 : 1 : me.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(ht, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: Ee,
                    onChange: (o) => Li(o.target.value),
                    placeholder: pe === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: pe === "mywork" ? Ve.length === 0 : me.length === 0
                  }
                ),
                Ee && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Li(""),
                    className: "opacity-60 hover:opacity-100 px-1",
                    title: "Clear search",
                    children: /* @__PURE__ */ t(ye, { size: 11 })
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
              children: pe === "mywork" ? [
                { id: "all", label: "All" },
                { id: "songs", label: "Songs" },
                { id: "restyles", label: "Restyles" },
                { id: "lyrics", label: "Lyrics" }
              ].map((o) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Mn(o.id),
                  className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                  style: {
                    height: 22,
                    fontSize: 10,
                    fontWeight: je === o.id ? 800 : 600,
                    color: je === o.id ? "white" : "var(--text-secondary)",
                    background: je === o.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: o.label
                },
                o.id
              )) : Tt ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ s("span", { style: { fontSize: 10, fontWeight: 800, color: "var(--text-primary)", flexShrink: 0 }, children: [
                  ct.size,
                  " selected"
                ] }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Ua(new Set(Gt.map((o) => o.id))),
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
                    onClick: va,
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
                ].map((o) => /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Ri(o.id),
                    className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: lt === o.id ? 800 : 600,
                      color: lt === o.id ? "white" : "var(--text-secondary)",
                      background: lt === o.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: o.label
                  },
                  o.id
                )),
                me.length > 0 && /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => kr(!0),
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
                      /* @__PURE__ */ t(en, { size: 11 }),
                      " Select"
                    ]
                  }
                )
              ] })
            }
          ),
          pe === "mywork" ? Ve.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t(Lt, { size: 18, style: { color: "var(--text-disabled)" } })
              }
            ),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: a("musiccreator.gallery.empty.title") }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: a("musiccreator.gallery.empty.body") }),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => b("creator"),
                className: "mt-3 flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 28,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(et, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(Ze, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : bt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(ht, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ee ? a("musiccreator.gallery.searchEmpty", { q: Ee }) : `No ${je} yet.` })
          ] }) : /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: [
            Da.length > 0 && je === "all" && !Ee.trim() && /* @__PURE__ */ t(
              Lu,
              {
                trackIds: Da,
                allTracks: Ve,
                player: $,
                onSelect: Or
              }
            ),
            ca === "list" ? /* @__PURE__ */ t(
              Au,
              {
                tracks: bt,
                player: $,
                onLoad: Jt,
                onOpenLyrics: co,
                onDelete: to,
                onRename: Ga
              }
            ) : bt.map((o) => /* @__PURE__ */ t(
              zu,
              {
                track: o,
                onDelete: to,
                onLoad: Jt,
                onOpenLyrics: co,
                onSaveSongToDesktop: Ss,
                onSaveLyricsToDesktop: Ts,
                onPlayInPlayer: _s,
                onRename: Ga,
                onEditCover: so,
                onSelect: Or,
                selected: f === "player" && k === o.id,
                player: $
              },
              o.id
            ))
          ] }) : (
            /* Library tab — flat slim list of saved streamed tracks. The
               rich Artists/Albums/Playlists views still live in the main
               Music pane (reachable via the search button in the header
               above) since they need more horizontal room than 260px. */
            me.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(
                "div",
                {
                  className: "flex items-center justify-center rounded-2xl mb-2",
                  style: { width: 44, height: 44, background: "var(--bg-hover)" },
                  children: /* @__PURE__ */ t(sr, { size: 18, style: { color: "var(--text-disabled)" } })
                }
              ),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: "Your saved music lives here" }),
              /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: "Click the magnifier above to search, then add tracks you want to keep." }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Oe(!0), da("search");
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
                    /* @__PURE__ */ t(ht, { size: 11 }),
                    " Search music"
                  ]
                }
              )
            ] }) : Gt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(ht, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ee ? `No matches for "${Ee}"` : `No ${lt} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Gt.map((o) => /* @__PURE__ */ t(
              Iu,
              {
                track: o,
                player: $,
                selected: f === "player" && k === o.id,
                isFavorite: Bt.has(o.id),
                onOpenInPlayer: Or,
                onRemix: qs,
                onToggleFavorite: Dr,
                onRemove: Ur,
                selectMode: Tt,
                checked: ct.has(o.id),
                onToggleCheck: Ws
              },
              o.id
            )) })
          ),
          pe === "library" && Tt && ct.size > 0 && /* @__PURE__ */ s(
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
                      const o = Gt.filter((l) => ct.has(l.id));
                      for (const l of o) Dr(l);
                      va();
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
                    title: `Toggle favorite on ${ct.size} track(s)`,
                    children: [
                      /* @__PURE__ */ t(sr, { size: 11 }),
                      " Toggle favorite"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => {
                      const o = Gt.filter((l) => ct.has(l.id));
                      for (const l of o) Ur(l);
                      va();
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
                    title: `Remove ${ct.size} track(s) from Library`,
                    children: [
                      /* @__PURE__ */ t(It, { size: 11 }),
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
              /* @__PURE__ */ t(mi, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
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
                  { id: "creator", icon: /* @__PURE__ */ t(et, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(ve, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
                ].map((o) => /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => b(o.id),
                    title: o.tip,
                    className: "flex items-center gap-1.5 px-3 rounded-md transition-all",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: f === o.id ? 600 : 500,
                      color: f === o.id ? "white" : "var(--text-secondary)",
                      background: f === o.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
                      border: "none"
                    },
                    children: [
                      o.icon,
                      o.label
                    ]
                  },
                  o.id
                ))
              }
            ),
            /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-1.5 flex-shrink-0", children: [
              f === "player" && /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Oe((o) => !o), da("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: dt ? "white" : "var(--text-secondary)",
                    background: dt ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(ht, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(Cu, { endpoint: Y, endpoints: Wa, onSwitch: rs }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: f === "player" ? xs : jr,
                  disabled: X,
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
                    /* @__PURE__ */ t(ui, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Fa(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(Zo, { size: 14 })
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
                  children: /* @__PURE__ */ t(ul, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      f === "player" && (dt ? /* @__PURE__ */ t(
        Ju,
        {
          tab: jn,
          onTabChange: da,
          query: _r,
          onQueryChange: Pn,
          searchHistory: Dn,
          onClearSearchHistory: () => {
            ji([]);
            try {
              localStorage.removeItem("juli3ta:searchHistory");
            } catch {
            }
          },
          resultType: ua,
          onResultTypeChange: Un,
          results: On,
          busy: Hn,
          error: $n,
          status: Fn,
          providers: Bn,
          connectors: Wn,
          libraryTracks: me,
          playlists: ma,
          playlistNameDraft: Er,
          playlistBusy: Yn,
          favoriteIds: Bt,
          warmupIds: Jn,
          previewBusyId: Gn,
          addBusyId: Vn,
          savedYoutubeIds: Rs,
          player: $,
          onWarmResult: Os,
          onPreview: Us,
          onAdd: Hs,
          onOpenTrack: (o) => {
            I(o.id), Oe(!1), b("player");
          },
          onToggleFavorite: Dr,
          onRemoveLibraryTrack: Ur,
          onPlaylistNameDraftChange: Ji,
          onCreatePlaylist: $s,
          onAddTrackToPlaylist: Fs,
          onRemoveTrackFromPlaylist: Bs,
          onPlayPlaylist: Ps,
          onDeletePlaylist: Ds,
          onConfigureConnector: Is,
          onDisconnectConnector: Ms,
          onClose: () => Oe(!1)
        }
      ) : /* @__PURE__ */ t(
        qu,
        {
          track: (() => {
            const o = k ?? $.state.trackId ?? bt[0]?.id ?? me[0]?.id ?? null;
            return o ? ze.find((l) => l.id === o) ?? null : null;
          })(),
          player: $,
          restyleOriginal: En,
          onSwitchToCreator: () => b("creator"),
          onSearchMusic: () => {
            b("player"), Oe(!0), da("search");
          },
          onEditInCreator: (o) => {
            Jt(o), b("creator");
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
                { id: "compose", icon: /* @__PURE__ */ t(Ma, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(Mt, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t(lr, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((o) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => g(o.id),
                  disabled: X,
                  title: o.tip,
                  className: "flex items-center gap-1.5 px-4 rounded-lg transition-all disabled:opacity-50",
                  style: {
                    height: 32,
                    fontSize: 12,
                    fontWeight: m === o.id ? 600 : 500,
                    color: m === o.id ? "white" : "var(--text-secondary)",
                    background: m === o.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                    border: m === o.id ? "1px solid transparent" : "1px solid var(--border-subtle)"
                  },
                  children: [
                    o.icon,
                    o.label
                  ]
                },
                o.id
              )),
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: X ? /* @__PURE__ */ s(
                "button",
                {
                  onClick: hs,
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
                    /* @__PURE__ */ t(ne, { size: 12, className: "animate-spin" }),
                    a("musiccreator.button.cancel")
                  ]
                }
              ) : (() => {
                const o = m === "restyle" && (h || !We);
                return /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: is,
                    disabled: o,
                    className: "flex items-center gap-1.5 px-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    style: {
                      height: 32,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "white",
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      boxShadow: "var(--shadow-md)"
                    },
                    title: o ? h ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      o && h ? /* @__PURE__ */ t(ne, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Mt, { size: 13 }),
                      m === "restyle" ? h ? "Analyzing audio…" : "Restyle Song" : m === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
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
                  onChange: (o) => L(o.target.value),
                  onDragOver: Ka,
                  onDrop: Es,
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
                      Do,
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
        (X || la || Ft) && /* @__PURE__ */ s(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: la ? "rgba(255, 82, 82, 0.06)" : Ft ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              X && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${In * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: la ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(za, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: la, children: la }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => K(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(ye, { size: 11 })
                  }
                )
              ] }) : X ? /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(ne, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: Ht === "lyrics" ? jo[Ei % jo.length] : Po[Ei % Po.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: Ht === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : /* @__PURE__ */ s(ge, { children: [
                /* @__PURE__ */ t(za, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: Ft ?? "", children: Ft }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => se(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: "Dismiss",
                    children: /* @__PURE__ */ t(ye, { size: 11 })
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
              onDragOver: (o) => {
                o.dataTransfer.types.includes(Ea) && (o.preventDefault(), o.dataTransfer.dropEffect = "copy");
              },
              onDrop: (o) => {
                const l = pt(o);
                l && l.hasAudio && (o.preventDefault(), (async () => {
                  const u = await Ec(l.id);
                  if (!u?.audioDataUrl) {
                    K("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  yt(u.audioDataUrl, `${l.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                ot ? /* @__PURE__ */ s(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${h ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                        h ? /* @__PURE__ */ t(ne, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(Lt, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: ot }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: ms,
                            disabled: X || h,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t(It, { size: 14 })
                          }
                        )
                      ] }),
                      (h || Dt) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: h ? "🔍  Listening for the best part…" : `✨  ${Dt}` })
                    ]
                  }
                ) : /* @__PURE__ */ s("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: () => ja(!0),
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
                        /* @__PURE__ */ t(Ze, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: os,
                      disabled: X,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t(Lt, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: us,
                      disabled: X || St.filter((o) => o.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(zt, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: St.filter((o) => o.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: ds,
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
                        /* @__PURE__ */ t(Ze, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: fr.length }) })
                      ]
                    }
                  )
                ] }),
                !ot && /* @__PURE__ */ s("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Si("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: qe === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${qe === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: qe === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(et, { size: 13, style: { color: qe === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Best 30 s" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "single chorus-like window" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Si("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: qe === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${qe === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: qe === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(ai, { size: 13, style: { color: qe === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 best parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                Ln && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !Je && ja(!1),
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        onClick: (o) => o.stopPropagation(),
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
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.4 }, children: "Capture 1–3 minutes of music for best results. JULI3TA will auto-extract the iconic parts." })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "px-5 pt-3", children: [
                            /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                              /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !Je && Ti("mic"),
                                  disabled: Je,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: st === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${st === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Ze, { size: 14 }),
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
                                  onClick: () => !Je && Ti("tab"),
                                  disabled: Je,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: st === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${st === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(go, { size: 14 }),
                                    /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            st === "tab" && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
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
                                  Math.floor(_i / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor(_i / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            Je ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: ss,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(tn, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: ns,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: st === "tab" ? /* @__PURE__ */ t(go, { size: 28 }) : /* @__PURE__ */ t(Ze, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: Je ? st === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            Ci && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: Ci })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s(
                            "div",
                            {
                              className: "px-5 py-3 flex items-center justify-between",
                              style: { borderTop: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)" },
                              children: [
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: Je ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !Je && ja(!1),
                                    disabled: Je,
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
                    ref: xi,
                    type: "file",
                    accept: "audio/*",
                    onChange: ls,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick the best 30 s" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed to the most musical chunk."
                ] }),
                J && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => ce(!1),
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        onClick: (o) => o.stopPropagation(),
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
                                  /* @__PURE__ */ t(Ze, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ s(
                                  "button",
                                  {
                                    onClick: () => ce(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    children: [
                                      /* @__PURE__ */ t(It, { size: 14, style: { visibility: "hidden" } }),
                                      /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600 }, children: "×" })
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: fr.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(Ze, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : fr.map((o) => {
                            const l = o.durationMs / 1e3, u = l < 6;
                            return /* @__PURE__ */ s(
                              "button",
                              {
                                onClick: () => !u && cs(o),
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
                                      children: /* @__PURE__ */ t(Ze, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: o.name }),
                                    /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(l / 60),
                                      ":",
                                      Math.floor(l % 60).toString().padStart(2, "0"),
                                      u && " · too short for cover (need ≥6 s)"
                                    ] })
                                  ] })
                                ]
                              },
                              o.id
                            );
                          }) }),
                          /* @__PURE__ */ t(
                            "a",
                            {
                              href: "#",
                              onClick: (o) => {
                                o.preventDefault(), ce(!1);
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
                kt && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => Ut(!1),
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        onClick: (o) => o.stopPropagation(),
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
                                  /* @__PURE__ */ t(zt, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => Ut(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    title: "Close",
                                    children: /* @__PURE__ */ t(ye, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const o = St.filter((l) => l.audioDataUrl);
                            return o.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(zt, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : o.map((l) => {
                              const u = l.durationMs / 1e3, v = u > 0 && u < 6, T = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !v && ps(l),
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
                                          background: l.coverDataUrl ? `url(${l.coverDataUrl}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                                          border: "1px solid var(--border-subtle)"
                                        },
                                        children: !l.coverDataUrl && /* @__PURE__ */ t(zt, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: T }),
                                      /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        u > 0 ? `${Math.floor(u / 60)}:${Math.floor(u % 60).toString().padStart(2, "0")}` : "—",
                                        l.styleTags && l.styleTags !== "—" && ` · ${l.styleTags}`,
                                        v && " · too short for cover (need ≥6 s)"
                                      ] })
                                    ] })
                                  ]
                                },
                                l.id
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
                  Ta,
                  {
                    label: a("musiccreator.theme.label"),
                    hint: a("musiccreator.theme.hint"),
                    headerExtra: /* @__PURE__ */ t(
                      Qr,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: ys,
                        busy: Fe.theme,
                        disabled: X || Fe.theme
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: N,
                        onChange: (o) => j(o.target.value),
                        onDragOver: Ka,
                        onDrop: As,
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
                  Ta,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${zs} / ${au}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      Qr,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: fs,
                        busy: Fe.style,
                        disabled: X || Fe.style
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: x,
                        onChange: (o) => E(o.target.value),
                        onDragOver: Ka,
                        onDrop: Cs,
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
            /* @__PURE__ */ t(wu, { onPick: vs, disabled: X }),
            /* @__PURE__ */ t(
              ku,
              {
                specs: le,
                onChange: fe,
                disabled: X,
                onOptimize: gs,
                optimizing: Pt
              }
            )
          ] }),
          /* @__PURE__ */ s(
            Ta,
            {
              label: "Cover Art",
              hint: Y?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ s("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  Do,
                  {
                    checked: Ne,
                    onChange: yr,
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
                      onClick: () => lo(!0),
                      disabled: X,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: ue ? `url(${ue}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: X ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !ue && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(La, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        rt && /* @__PURE__ */ t(
                          "div",
                          {
                            className: "absolute inset-0 flex items-center justify-center",
                            style: { background: "rgba(0,0,0,0.5)" },
                            children: /* @__PURE__ */ t(ne, { size: 20, className: "animate-spin", style: { color: "white" } })
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
                          onClick: Zi,
                          disabled: X || rt || !Y?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: X || rt || !Y?.models.image ? "not-allowed" : "pointer"
                          },
                          title: Y?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            rt ? /* @__PURE__ */ t(ne, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(et, { size: 11 }),
                            ue ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => wi.current?.click(),
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
                            /* @__PURE__ */ t(pi, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      ue && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            H(""), Se && ya.current?.(Se, "");
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
                            /* @__PURE__ */ t(ye, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => ki((o) => !o),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            vr ? /* @__PURE__ */ t(ll, { size: 11 }) : /* @__PURE__ */ t(Xo, { size: 11 }),
                            vr ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    vr && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: D,
                        onChange: (o) => Z(o.target.value),
                        placeholder: nr(z, N, x),
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
                    ref: wi,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (o) => {
                      const l = o.target.files?.[0];
                      l && eo(l), o.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          m !== "restyle" && !q && /* @__PURE__ */ t(
            Ta,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (le.intent ?? "").length > 0 ? `${(le.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: le.intent ?? "",
                  onChange: (o) => fe((l) => ({ ...l, intent: o.target.value })),
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
            Ta,
            {
              label: a("musiccreator.lyrics.label"),
              counter: q ? "instrumental — no vocals" : `${uo} / ${Xt}`,
              counterDanger: !q && uo > Xt,
              className: "mb-5",
              headerExtra: q ? void 0 : /* @__PURE__ */ t(
                Qr,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: bs,
                  busy: Fe.lyrics,
                  disabled: X || Fe.lyrics || !_.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: _,
                    onChange: (o) => C(o.target.value),
                    onDragOver: Ka,
                    onDrop: Ns,
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
                  tu.map((o) => {
                    const l = B?.id === o.id;
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => {
                          l ? P(null) : (P(o), _.trim() || C(o.skeleton));
                        },
                        disabled: X,
                        className: "px-2 py-0.5 rounded-full transition-all disabled:opacity-40",
                        style: {
                          fontSize: 10,
                          fontWeight: l ? 600 : 500,
                          color: l ? "white" : "var(--text-secondary)",
                          background: l ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        title: o.description + (l ? " · click to clear" : " · click to use this form"),
                        children: [
                          l ? "✓ " : "",
                          o.label
                        ]
                      },
                      o.id
                    );
                  }),
                  B && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(gu, { player: $, allTracks: ze }),
      /* @__PURE__ */ t("audio", { ref: po, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      pc,
      {
        open: w,
        onClose: () => p(!1),
        onUseRecipe: (o, l) => {
          g("compose"), j(o), E(l);
        }
      }
    ),
    /* @__PURE__ */ t(vu, { open: Sr, onClose: () => Tr(!1) }),
    Xn && /* @__PURE__ */ t(
      Ku,
      {
        settings: Ir,
        endpoints: Wa,
        onChange: Qn,
        onClose: () => Fa(!1)
      }
    ),
    no && /* @__PURE__ */ t(
      Mu,
      {
        track: no,
        endpoint: Y,
        onSave: Pr,
        onClose: () => so(null)
      }
    ),
    ks && /* @__PURE__ */ t(
      Ru,
      {
        songName: z,
        mode: m,
        theme: N,
        style: x,
        intent: le.intent ?? "",
        lyrics: _,
        specs: le,
        coverDataUrl: ue,
        endpoint: Y,
        busy: rt,
        onRegenerate: Zi,
        onUpload: eo,
        onClear: () => {
          H(""), Se && ya.current?.(Se, "");
        },
        onClose: () => lo(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(xu, { retrying: as, onRetry: Rr });
}
function Ku({ settings: e, endpoints: a, onChange: r, onClose: i }) {
  const n = (c, d, y) => {
    const m = y.trim(), w = { ...e.overridesByEndpoint[c] ?? {} };
    m ? w[d] = m : delete w[d];
    const p = {
      ...e,
      overridesByEndpoint: {
        ...e.overridesByEndpoint,
        [c]: w
      }
    };
    r(p);
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
                  /* @__PURE__ */ t(Zo, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                      title: `JULI3TA v${li}`,
                      children: [
                        "v",
                        li
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
                      children: /* @__PURE__ */ t(ye, { size: 14 })
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
              ) : /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", children: a.map((c) => {
                const d = e.overridesByEndpoint[c.url] ?? {}, y = [
                  { key: "music", label: "Music", discovered: c.models.music, kind: "music" },
                  { key: "cover", label: "Restyle", discovered: c.models.cover, kind: "cover" },
                  { key: "lyrics", label: "Lyrics", discovered: c.models.lyrics, kind: "lyrics" },
                  { key: "lyricsBackup", label: "Lyrics fallback", discovered: c.models.lyricsBackup, kind: "chat" },
                  { key: "image", label: "Cover art", discovered: c.models.image, kind: "image" }
                ], m = (p) => /music|cover/i.test(p), g = (p) => /image|diffusion|dall-?e|flux|sdxl/i.test(p), w = (p) => p === "chat" ? c.models.allIds.filter((f) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(f)) : p === "image" ? c.models.allIds.filter(g) : c.models.allIds.filter(m);
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
                              background: pr(c),
                              boxShadow: `0 0 6px ${pr(c)}`
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
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: y.map((p) => {
                        const f = w(p.kind), b = d[p.key] ?? "";
                        return /* @__PURE__ */ s(Gs, { children: [
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
                              value: b,
                              onChange: (k) => n(c.url, p.key, k.target.value),
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
                                f.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: f.map((k) => /* @__PURE__ */ t("option", { value: k, children: k }, k)) })
                              ]
                            }
                          )
                        ] }, p.key);
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
function Zu(e) {
  const a = e.host.storage.current();
  return Cc(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(Vs, { value: e, children: /* @__PURE__ */ t(Vu, {}) });
  };
}
export {
  Zu as default
};
//# sourceMappingURL=index.js.map
