import { jsx as t, jsxs as n, Fragment as ue } from "react/jsx-runtime";
import { createContext as ci, useContext as di, forwardRef as ui, createElement as Dr, useState as T, useEffect as q, useMemo as ge, useRef as ee, useCallback as L, Fragment as us } from "react";
import { createPortal as Za } from "react-dom";
const pi = ci(null), ps = pi.Provider;
function Vt() {
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
const ms = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), hs = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), $o = (e) => {
  const a = hs(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, mi = (...e) => e.filter((a, r, o) => !!a && a.trim() !== "" && o.indexOf(a) === r).join(" ").trim(), gs = (e) => {
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
var ys = {
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
const fs = ui(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: c,
    iconNode: d,
    ...f
  }, m) => Dr(
    "svg",
    {
      ref: m,
      ...ys,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(a) : r,
      className: mi("lucide", s),
      ...!c && !gs(f) && { "aria-hidden": "true" },
      ...f
    },
    [
      ...d.map(([h, w]) => Dr(h, w)),
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
const D = (e, a) => {
  const r = ui(
    ({ className: o, ...s }, c) => Dr(fs, {
      ref: c,
      iconNode: a,
      className: mi(
        `lucide-${ms($o(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = $o(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], vs = D("album", bs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Jt = D("check", xs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], hi = D("chevron-down", ws);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Fo = D("chevron-left", ks);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ts = D("chevron-right", Ss);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Ns = D("chevron-up", _s);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], fa = D("circle-alert", Cs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], As = D("circle-question-mark", Es);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], gi = D("copy", zs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], Ct = D("disc-3", Ls);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], yi = D("download", Is);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], Wr = D("ellipsis-vertical", Ms);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], fi = D("external-link", Rs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
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
], Et = D("file-music", js);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], Ds = D("folder-open", Ps);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], Ga = D("heart", Us);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ba = D("image", Os);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
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
], Ur = D("layers", Hs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Fs = D("list-music", $s);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], te = D("loader-circle", Bs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Ve = D("mic", Ws);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], Bo = D("monitor-speaker", qs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], Wo = D("monitor", Js);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], va = D("music-2", Gs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], Va = D("notebook-text", Vs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], ft = D("pause", Ys);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], bi = D("pencil", Ks);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], ye = D("play", Xs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Or = D("plus", Qs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], el = D("radio", Zs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], al = D("refresh-cw", tl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], vi = D("repeat-1", rl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], il = D("repeat", ol);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], lt = D("search", nl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], xi = D("settings-2", sl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], qr = D("shuffle", ll);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = [
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
], Oe = D("sparkles", cl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], wi = D("square-check-big", dl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], ki = D("square", ul);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], At = D("trash-2", pl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Jr = D("upload", ml);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], gl = D("user-round", hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], fl = D("volume-2", yl);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], vl = D("volume-x", bl);
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
], zt = D("wand-sparkles", xl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], fe = D("x", wl), kl = {
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
}, Sl = {
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
}, qo = { en: kl, es: Sl }, Ua = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", Tl = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, o) => String(a[o] ?? `{${o}}`)) : e;
function It() {
  const { host: e } = Vt(), [a, r] = T(() => Ua(e.i18n?.locale));
  q(() => e.i18n?.onLocaleChange?.((s) => r(Ua(s))), [e]);
  const o = ge(() => (s, c) => {
    const d = e.i18n?.t?.(s, c);
    if (d && d !== s) return d;
    const f = Ua(a), m = qo[f]?.[s] ?? qo.en[s] ?? s;
    return Tl(m, c);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (s) => r(Ua(s)),
    installLanguagePack: (s) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (s) => {
    }
  };
}
const _l = [
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
], Nl = [
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
function Cl({ recipe: e, onUse: a }) {
  const { t: r } = It(), [o, s] = T(!1), c = async () => {
    try {
      await navigator.clipboard.writeText(`${e.theme}

Style: ${e.style}`), s(!0), setTimeout(() => s(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: "rounded-lg p-3 transition-all",
      style: {
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)"
      },
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-start gap-2 mb-2", children: [
          /* @__PURE__ */ t("span", { style: { fontSize: 22 }, children: e.emoji }),
          /* @__PURE__ */ n("div", { className: "flex-1", children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: e.title }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.45 }, children: e.theme }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, fontStyle: "italic" }, children: e.style })
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ n(
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
                /* @__PURE__ */ t(zt, { size: 12 }),
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
              children: o ? /* @__PURE__ */ t(Jt, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(gi, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function El({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: o, language: s } = It(), [c, d] = T("start");
  if (!e) return null;
  const f = s === "es" ? Nl : _l;
  return /* @__PURE__ */ t(
    "div",
    {
      className: "absolute inset-0 z-40 flex",
      style: { background: "rgba(0,0,0,0.5)" },
      onClick: a,
      children: /* @__PURE__ */ n(
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
            /* @__PURE__ */ n(
              "div",
              {
                className: "flex items-center justify-between px-5 py-4 flex-shrink-0",
                style: { borderBottom: "1px solid var(--border-subtle)" },
                children: [
                  /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ t(
                      "div",
                      {
                        className: "flex items-center justify-center rounded-lg flex-shrink-0",
                        style: {
                          width: 32,
                          height: 32,
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                        },
                        children: /* @__PURE__ */ t(Ct, { size: 18, style: { color: "white" } })
                      }
                    ),
                    /* @__PURE__ */ n("div", { children: [
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
                      children: /* @__PURE__ */ t(fe, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1 px-5 pt-3 flex-shrink-0", children: ["start", "recipes", "help"].map((m) => {
              const h = c === m;
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
            /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", style: { paddingBottom: 96 }, children: [
              c === "start" && /* @__PURE__ */ n("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(Oe, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(Oa, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(Oa, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(Oa, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(Oa, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(zt, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ n("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(Nr, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(Nr, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(Nr, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(Ve, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(Al, { body: o("julietaHelp.start.recorder.body") }),
                /* @__PURE__ */ n(
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
              c === "recipes" && /* @__PURE__ */ n("div", { className: "space-y-3", children: [
                /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: o("julietaHelp.recipes.intro") }),
                f.map((m) => /* @__PURE__ */ t(
                  Cl,
                  {
                    recipe: m,
                    onUse: (h) => {
                      r(h.theme, h.style), a();
                    }
                  },
                  m.id
                ))
              ] }),
              c === "help" && /* @__PURE__ */ n("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(fa, { size: 14 }), text: o("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.failed.title"), a: o("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.nopod.title"), a: o("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.local.title"), a: o("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(zt, { size: 14 }), text: o("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.howlong.title"), a: o("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.quota.title"), a: o("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.length.title"), a: o("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.coverlen.title"), a: o("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(Ve, { size: 14 }), text: o("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.silentmic.title"), a: o("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.shortrec.title"), a: o("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t(Je, { q: o("julietaHelp.help.q.privacy.title"), a: o("julietaHelp.help.q.privacy.body") })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function $t({ icon: e, text: a }) {
  return /* @__PURE__ */ n("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: a })
  ] });
}
function Oa({ n: e, title: a, body: r }) {
  return /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
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
    /* @__PURE__ */ n("div", { children: [
      /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: a }),
      /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.5 }, children: r })
    ] })
  ] });
}
function Nr({ emoji: e, name: a, body: r }) {
  return /* @__PURE__ */ n(
    "div",
    {
      className: "flex gap-3 p-3 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 22, lineHeight: 1 }, children: e }),
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: a }),
          /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.5 }, children: r })
        ] })
      ]
    }
  );
}
function Al({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function Je({ q: e, a }) {
  const [r, o] = T(!1);
  return /* @__PURE__ */ n(
    "div",
    {
      className: "rounded-lg overflow-hidden",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: [
        /* @__PURE__ */ n(
          "button",
          {
            onClick: () => o((s) => !s),
            className: "w-full flex items-center gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            children: [
              /* @__PURE__ */ t(
                Ts,
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
const Cr = (e) => {
  const a = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(a.agents) ? a.agents : [],
    included: Array.isArray(a.included) ? a.included : [],
    tiers: [],
    ...a
  };
}, zl = () => {
  const { host: e } = Vt(), [a, r] = T(0), [o, s] = T(() => Cr(e.daemon?.state));
  return q(() => (s(Cr(e.daemon?.state)), e.daemon?.onStateChange?.((c) => s(Cr(c)))), [e, a]), ge(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((c) => c + 1)
  }), [o]);
}, Ll = (e, a) => {
  const { host: r } = Vt();
  q(() => {
    if (!(!a || !r.shellMenu?.register))
      return r.shellMenu.register({
        appId: r.appId,
        groups: a.groups.map((o) => ({
          label: o.label,
          items: o.items.map((s) => ({
            id: s.id,
            label: s.label,
            disabled: s.disabled,
            onClick: s.onSelect
          }))
        }))
      });
  }, [r, a]);
};
function Il() {
  return Vt().host.windows.current;
}
const Si = "juli3ta_standalone_vfs_v1", Ti = () => Math.random().toString(36).slice(2) + Date.now().toString(36), _t = (e, a) => ({
  id: Ti(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), Ml = () => {
  const e = _t("/", null), a = _t("home", e.id), r = _t("user", a.id), o = _t("Desktop", r.id), s = _t("Music", r.id), c = _t("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, o, s, c].map((d) => [d.id, d])) };
}, Ha = () => {
  try {
    const a = localStorage.getItem(Si);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = Ml();
  return Wa(e), e;
}, Wa = (e) => {
  try {
    localStorage.setItem(Si, JSON.stringify(e));
  } catch {
  }
}, Rl = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), jl = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function Pl() {
  return {
    ensureUserFolder(a) {
      const r = Ha(), o = Rl(a);
      let s = Object.values(r.nodes).find((c) => c.type === "folder" && c.name === o);
      if (!s) {
        const c = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        s = _t(o, c?.id ?? null), r.nodes[s.id] = s, Wa(r);
      }
      return s.id;
    },
    findChildByName(a, r) {
      const o = Ha();
      return Object.values(o.nodes).find((s) => s.parentId === a && s.name === r);
    },
    createFile(a, r, o = "", s = {}) {
      const c = Ha(), d = { id: Ti(), name: r, type: "file", parentId: a, content: o, mimeType: s.mimeType, refTrackId: s.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return c.nodes[d.id] = d, Wa(c), d.id;
    },
    writeFile(a, r) {
      const o = Ha();
      o.nodes[a] && (o.nodes[a].content = r, o.nodes[a].modifiedAt = Date.now(), Wa(o));
    }
  };
}
const Dl = { theme: { mode: "dark" } }, Ul = ci(null);
function _i() {
  const e = di(Ul), { host: a } = Vt();
  return ge(() => e || {
    state: Dl,
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
function Ol() {
  const { host: e } = Vt();
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
const Hl = {
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
}, $l = {
  juli3ta: Hl
};
function Ni({ name: e, size: a = 24, className: r, style: o, alt: s, scale: c }) {
  const [d, f = "mark"] = e.split(":"), m = $l[d], { state: h } = _i();
  let w;
  if (f === "mark" ? w = h.theme.mode === "light" ? m?.["mark-ink"] : m?.["mark-white"] : w = m?.[f], !w) return null;
  const u = s ?? d.charAt(0).toUpperCase() + d.slice(1), y = c ?? w.scale ?? 1;
  return /* @__PURE__ */ t(
    "img",
    {
      src: w.src,
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
        ...y !== 1 ? { transform: `scale(${y})`, transformOrigin: "center" } : null,
        ...w.filter ? { filter: w.filter } : null,
        ...o
      },
      className: r,
      draggable: !1
    }
  );
}
let Ci = null, Jo = null;
const Er = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), Fl = [
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
function Bl(e) {
  Jo = (async () => {
    for (const r of Fl) await e.run(r);
  })();
  const a = async () => Jo;
  Ci = {
    exec: async (r) => {
      await a();
      for (const o of Er(r).split(";").map((s) => s.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (r, o = []) => (await a(), e.query(Er(r), o)),
    run: async (r, o = []) => {
      await a(), await e.run(Er(r), o);
    },
    tx: async (r) => (await a(), r())
  };
}
const ae = () => Ci, Ya = (e) => ({
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
}), B = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), Gr = (e) => B(e, "specs_json") || B(e, "cover_data_url") || B(e, "theme") || B(e, "source") || B(e, "audio_kind") || B(e, "external_id") || B(e, "external_url") || B(e, "thumbnail_url") || B(e, "artist") || B(e, "album"), Go = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, Vo = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, Ar = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, St = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), Ei = async (e, a, r, o) => {
  if (B(o, "source") || B(o, "audio_kind") || B(o, "external_id") || B(o, "external_url") || B(o, "thumbnail_url") || B(o, "artist") || B(o, "album"))
    try {
      return (await e.query(
        `SELECT ${Go}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(St);
    } catch (s) {
      o = s;
    }
  if (B(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${Go} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => St({ ...c, theme: "" }));
    } catch (s) {
      if (!B(s, "cover_data_url")) throw s;
      try {
        return (await e.query(
          `SELECT ${Vo} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => St({ ...d, cover_data_url: "", theme: "" }));
      } catch (c) {
        if (!B(c, "specs_json")) throw c;
        return (await e.query(
          `SELECT ${Ar} FROM music_creator_tracks ${a}`,
          r
        )).map((f) => St({ ...f, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (B(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${Vo} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => St({ ...c, cover_data_url: "", theme: "" }));
    } catch (s) {
      if (!B(s, "specs_json")) throw s;
      return (await e.query(
        `SELECT ${Ar} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => St({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (B(o, "specs_json"))
    return (await e.query(
      `SELECT ${Ar} FROM music_creator_tracks ${a}`,
      r
    )).map((c) => St({ ...c, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, Ai = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, Wl = async () => {
  const e = ae();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${Ai} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(Ya);
  } catch (a) {
    if (!Gr(a)) throw a;
    return (await Ei(e, "ORDER BY created_at DESC", [], a)).map(Ya);
  }
}, ql = async (e) => {
  const a = ae();
  if (!a) return null;
  try {
    const r = await a.query(
      `SELECT ${Ai} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return r.length === 0 ? null : Ya(r[0]);
  } catch (r) {
    if (!Gr(r)) throw r;
    const o = await Ei(a, "WHERE id = ? LIMIT 1", [e], r);
    return o.length === 0 ? null : Ya(o[0]);
  }
}, Ka = async (e) => {
  const a = ae();
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
    if (!Gr(o)) throw o;
    if (B(o, "source") || B(o, "audio_kind") || B(o, "external_id") || B(o, "external_url") || B(o, "thumbnail_url") || B(o, "artist") || B(o, "album"))
      try {
        await a.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...r, e.specsJson, e.coverDataUrl, e.theme]
        );
        return;
      } catch (s) {
        o = s;
      }
    if (B(o, "theme"))
      try {
        await a.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...r, e.specsJson, e.coverDataUrl]
        );
        return;
      } catch (s) {
        if (!B(s, "cover_data_url")) throw s;
      }
    if (B(o, "cover_data_url"))
      try {
        await a.run(
          `INSERT OR REPLACE INTO music_creator_tracks
             (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [...r, e.specsJson]
        );
        return;
      } catch (s) {
        if (!B(s, "specs_json")) throw s;
      }
    await a.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      r
    );
  }
}, Jl = async (e) => {
  const a = ae();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Gl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  const o = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, Vl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, Yl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, Kl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, Xl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, Ql = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, Zl = async (e, a) => {
  const r = ae();
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
}, ec = async (e, a) => {
  const r = ae();
  r && await r.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(a)]
  );
}, zi = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, Li = "music_creator_settings", tc = () => Zl(Li, zi), ac = (e) => ec(Li, e), Lt = () => Date.now(), Ii = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: e.provider === "youtube" ? "YouTube" : e.provider,
  lyricsPreview: "",
  durationMs: e.duration_ms ?? 0,
  bitrate: 0,
  sampleRate: 0,
  sizeBytes: 0,
  createdAt: e.added_at ?? Lt(),
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
}), rc = (e) => ({
  id: e.id,
  provider: e.source || "youtube",
  external_id: e.externalId || e.id.replace(/^.+?:/, ""),
  title: e.title || "Untitled",
  artist: e.artist || "",
  album: e.album || "",
  duration_ms: e.durationMs || 0,
  thumbnail_url: e.thumbnailUrl || "",
  external_url: e.externalUrl || "",
  added_at: e.createdAt || Lt(),
  last_played_at: 0
}), Mi = [
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
], oc = Mi.join(", "), ic = Mi.map((e) => `t.${e}`).join(", "), nc = async () => {
  const e = ae();
  return e ? (await e.query(
    `SELECT ${oc} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(Ii) : [];
}, Ri = async (e) => {
  const a = ae();
  if (!a) throw new Error("Database not ready");
  const r = rc(e);
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
}, sc = async (e) => {
  const a = ae();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, lc = async () => {
  const e = ae();
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
}, cc = async (e) => {
  const a = ae();
  return a ? (await a.query(
    "SELECT kind, entity_id, provider, title, created_at FROM music_favorites WHERE kind = ? ORDER BY created_at DESC",
    [e]
  )).map((s) => ({
    kind: s.kind,
    entityId: s.entity_id,
    provider: s.provider,
    title: s.title,
    createdAt: s.created_at
  })) : [];
}, dc = async (e) => {
  const a = ae();
  if (!a) throw new Error("Database not ready");
  const r = await a.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(r[0]?.n ?? 0) > 0 ? (await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await a.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", Lt()]
  ), !0);
}, ua = async () => {
  const e = ae();
  if (!e) return [];
  const a = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), r = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${ic}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return r.forEach((s) => {
    o.set(s.playlist_id, [...o.get(s.playlist_id) ?? [], Ii(s)]);
  }), a.map((s) => ({
    id: s.id,
    name: s.name,
    createdAt: s.created_at,
    updatedAt: s.updated_at,
    items: o.get(s.id) ?? []
  }));
}, uc = async (e) => {
  const a = ae();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", o = Lt(), s = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: o, updatedAt: o, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [s.id, s.name, s.createdAt, s.updatedAt]
  ), s;
}, pc = async (e) => {
  const a = ae();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, mc = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await Ri(a);
    const o = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), s = Number(o[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, s, Lt()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [Lt(), e]);
  });
}, hc = async (e, a) => {
  const r = ae();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [Lt(), e]));
}, gc = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), Yo = async () => {
  const e = ae();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(gc) : [];
}, ji = async (e) => {
  const a = ae();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, zr = "tytus.voice-recorder.recordings", yc = async () => {
  try {
    const e = localStorage.getItem(zr);
    if (!e) return;
    const a = JSON.parse(e);
    if (!Array.isArray(a)) {
      localStorage.removeItem(zr);
      return;
    }
    for (const r of a)
      if (!(!r?.id || typeof r.audioDataUrl != "string"))
        try {
          await ji({
            id: r.id,
            name: r.name ?? "Untitled recording",
            durationMs: r.durationMs ?? 0,
            createdAt: r.createdAt ?? Date.now(),
            mimeType: r.mimeType ?? "audio/webm",
            audioDataUrl: r.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(zr);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, fc = (e, a) => e._value, Vr = 100, bc = 30, qa = 6, vc = 360, Ko = 12, xc = 3, wc = 0.4, kc = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((d) => MediaRecorder.isTypeSupported(d));
  if (!o)
    throw new Error("No supported recorder mime type for fallback.");
  const s = URL.createObjectURL(e), c = new Audio();
  c.src = s, c.muted = !0, c.crossOrigin = "anonymous", c.preload = "auto";
  try {
    await new Promise((S, A) => {
      const b = () => S(), P = () => A(new Error("Audio element rejected the source format too — browser cannot play it."));
      c.addEventListener("canplay", b, { once: !0 }), c.addEventListener("error", P, { once: !0 }), c.load();
    });
    const d = a.createMediaElementSource(c), f = a.createMediaStreamDestination();
    d.connect(f);
    const m = new MediaRecorder(f.stream, { mimeType: o }), h = [];
    m.ondataavailable = (S) => {
      S.data.size > 0 && h.push(S.data);
    };
    const w = Math.max(
      6e3,
      Math.min(r, c.duration || r) * 1e3
    ), u = new Promise((S) => {
      m.onstop = () => S();
    });
    m.start(250), c.currentTime = 0, await c.play(), await new Promise((S) => setTimeout(S, w)), m.stop(), c.pause(), await u;
    const y = new Blob(h, { type: o });
    if (y.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const v = await y.arrayBuffer();
    return await a.decodeAudioData(v);
  } finally {
    URL.revokeObjectURL(s);
  }
}, Pi = async (e, a = 35) => {
  const r = window.AudioContext || window.webkitAudioContext, o = new r();
  try {
    const s = await e.arrayBuffer();
    try {
      return await o.decodeAudioData(s.slice(0));
    } catch (c) {
      try {
        return await kc(e, o, a);
      } catch (d) {
        const f = c.message || "decodeAudioData failed", m = d.message || "fallback failed";
        throw new Error(
          `Audio format isn't supported by this browser (${f}). Compatibility-mode capture also failed: ${m}`
        );
      }
    }
  } finally {
    o.close().catch(() => {
    });
  }
}, Di = async (e) => (await fetch(e)).blob(), Hr = (e) => new Promise((a, r) => {
  const o = new FileReader();
  o.onload = () => {
    const s = typeof o.result == "string" ? o.result : "", c = s.indexOf("base64,");
    a(c >= 0 ? s.slice(c + 7) : "");
  }, o.onerror = () => r(o.error), o.readAsDataURL(e);
}), Sc = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Vr / 1e3)), o = Math.floor(e.length / r), s = new Float32Array(o), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const f = d * r;
    let m = 0;
    for (let h = 0; h < r; h++) {
      let w = 0;
      for (let u = 0; u < c.length; u++) w += c[u][f + h];
      w /= c.length, m += w * w;
    }
    s[d] = Math.sqrt(m / r);
  }
  return s;
}, Tc = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Vr / 1e3)), o = Math.floor(e.length / r), s = new Float32Array(o), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const f = d * r;
    let m = 0, h = 0;
    for (let w = 0; w < c.length; w++) h += c[w][f];
    h /= c.length;
    for (let w = 1; w < r; w++) {
      let u = 0;
      for (let y = 0; y < c.length; y++) u += c[y][f + w];
      u /= c.length, (h > 1e-3 && u < -1e-3 || h < -1e-3 && u > 1e-3) && m++, h = u;
    }
    s[d] = m / (r / 2);
  }
  return s;
}, Ui = (e) => {
  const a = Sc(e), r = Tc(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / Vr };
}, _c = (e, a = 4) => {
  let r = 0;
  for (let m = 0; m < e.length; m++) r += e[m];
  const o = r / e.length;
  let s = 0;
  for (let m = 0; m < e.length; m++) s += (e[m] - o) ** 2;
  const c = Math.sqrt(s / e.length) || 1, d = Math.floor(e.length / a), f = new Float32Array(d);
  for (let m = 0; m < d; m++) {
    let h = 0;
    for (let w = 0; w < a; w++) h += e[m * a + w];
    f[m] = (h / a - o) / c;
  }
  return f;
}, Nc = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const o = Math.max(1, Math.floor(r / 4));
  let s = -1 / 0, c = 0;
  for (let m = 0; m + r < e.length; m += o) {
    if (Math.abs(m - a) < r) continue;
    let h = 0;
    for (let w = 0; w < r; w++)
      h += e[a + w] * e[m + w];
    h /= r, h > s && (s = h), h > 0.5 && c++;
  }
  const d = Math.max(0, Math.min(1, (s + 1) / 2)), f = Math.min(1, c / 6);
  return 0.6 * d + 0.4 * f;
}, Oi = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const o = _c(e.rms, 4), s = e.rms.length / o.length, c = Math.max(1, Math.floor(r / s));
  let d = 0, f = 0, m = 0;
  for (let y = 0; y < r; y++)
    d += e.rms[y], f += e.rms[y] * e.rms[y], m += e.centroid[y];
  const h = [], w = Math.max(1, Math.floor(e.framesPerSec)), u = (y) => {
    const v = d / r, S = Math.max(0, f / r - v * v), A = Math.sqrt(S), b = m / r, P = Math.floor(y / s), M = Nc(o, P, c), C = 0.45 * Math.min(1, v * 4) + 0.2 * b + 0.25 * M - 0.1 * Math.min(1, A * 6);
    h.push({
      startFrame: y,
      lenFrames: r,
      score: C,
      meanRms: v,
      stdRms: A,
      meanBright: b,
      selfSim: M
    });
  };
  u(0);
  for (let y = r; y < e.rms.length; y += w) {
    for (let v = 0; v < w && y - w + v < e.rms.length; v++) {
      const S = y - r - w + v + 1, A = y - w + v + 1;
      if (A >= e.rms.length) break;
      S >= 0 && (d -= e.rms[S], f -= e.rms[S] * e.rms[S], m -= e.centroid[S]), d += e.rms[A], f += e.rms[A] * e.rms[A], m += e.centroid[A];
    }
    u(y - r + w);
  }
  return h;
}, $r = (e, a, r) => {
  const o = new Float32Array(r), s = [];
  for (let c = 0; c < e.numberOfChannels; c++) s.push(e.getChannelData(c));
  for (let c = 0; c < r; c++) {
    let d = 0;
    for (let f = 0; f < s.length; f++) d += s[f][a + c] || 0;
    o[c] = d / s.length;
  }
  return o;
}, Fr = (e, a) => {
  const s = a * 1 * 2, c = 1 * (16 / 8), d = e.length * 2, f = new ArrayBuffer(44 + d), m = new DataView(f);
  let h = 0;
  const w = (v) => {
    for (let S = 0; S < v.length; S++) m.setUint8(h++, v.charCodeAt(S));
  }, u = (v) => {
    m.setUint32(h, v, !0), h += 4;
  }, y = (v) => {
    m.setUint16(h, v, !0), h += 2;
  };
  w("RIFF"), u(36 + d), w("WAVE"), w("fmt "), u(16), y(1), y(1), u(a), u(s), y(c), y(16), w("data"), u(d);
  for (let v = 0; v < e.length; v++) {
    const S = Math.max(-1, Math.min(1, e[v]));
    m.setInt16(h, S < 0 ? S * 32768 : S * 32767, !0), h += 2;
  }
  return new Blob([f], { type: "audio/wav" });
}, Hi = async (e, a = bc) => {
  const r = typeof e == "string" ? await Di(e) : e, o = await Pi(r), s = o.length / o.sampleRate;
  if (s < qa)
    throw new Error(`Source is too short (${s.toFixed(1)} s). Need at least ${qa} s.`);
  const c = Math.min(vc, Math.max(qa, a));
  if (s <= c) {
    const S = $r(o, 0, o.length), A = Fr(S, o.sampleRate);
    return { base64: await Hr(A), durationSec: s, startSec: 0, sourceDurationSec: s, score: 1 };
  }
  const d = Ui(o), f = Oi(d, c);
  if (f.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  f.sort((S, A) => A.score - S.score);
  const m = f[0], h = Math.floor(m.startFrame / d.framesPerSec * o.sampleRate), w = Math.floor(m.lenFrames / d.framesPerSec * o.sampleRate), u = $r(o, h, w), y = Fr(u, o.sampleRate);
  return {
    base64: await Hr(y),
    durationSec: w / o.sampleRate,
    startSec: h / o.sampleRate,
    sourceDurationSec: s,
    score: Math.max(0, Math.min(1, m.score))
  };
}, Cc = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(r * a);
  let s = 0;
  for (const f of e) s += f.length;
  s -= o * (e.length - 1);
  const c = new Float32Array(s);
  let d = 0;
  c.set(e[0], 0), d = e[0].length - o;
  for (let f = 1; f < e.length; f++) {
    const m = e[f];
    for (let h = 0; h < o; h++) {
      const w = h / o;
      c[d + h] = c[d + h] * (1 - w) + m[h] * w;
    }
    for (let h = o; h < m.length; h++)
      c[d + h] = m[h];
    d += m.length - o;
  }
  return c;
}, Ec = (e, a, r) => {
  const o = [...e].sort((c, d) => d.score - c.score), s = [];
  for (const c of o)
    if (s.some(
      (f) => Math.abs(f.startFrame - c.startFrame) < Math.max(f.lenFrames, c.lenFrames) + r
    ) || s.push(c), s.length >= a) break;
  return s.sort((c, d) => c.startFrame - d.startFrame), s;
}, Ac = async (e) => {
  const a = typeof e == "string" ? await Di(e) : e, r = await Pi(a), o = r.length / r.sampleRate;
  if (o < qa * 2) {
    const v = await Hi(a);
    return {
      base64: v.base64,
      durationSec: v.durationSec,
      segments: [{ startSec: v.startSec, endSec: v.startSec + v.durationSec, score: v.score }],
      sourceDurationSec: o
    };
  }
  const s = Ui(r), c = Oi(s, Ko);
  if (c.length === 0)
    throw new Error("Could not analyze the audio.");
  const d = Math.max(
    Math.floor(Ko * s.framesPerSec * 0.5),
    Math.floor(s.rms.length / 4)
  ), f = Ec(c, xc, d), m = f.map((v) => {
    const S = Math.floor(v.startFrame / s.framesPerSec * r.sampleRate), A = Math.floor(v.lenFrames / s.framesPerSec * r.sampleRate);
    return $r(r, S, A);
  }), h = Cc(m, r.sampleRate, wc), w = Fr(h, r.sampleRate), u = await Hr(w), y = f.map((v) => ({
    startSec: v.startFrame / s.framesPerSec,
    endSec: (v.startFrame + v.lenFrames) / s.framesPerSec,
    score: Math.max(0, Math.min(1, v.score))
  }));
  return {
    base64: u,
    durationSec: h.length / r.sampleRate,
    segments: y,
    sourceDurationSec: o
  };
};
class $i extends Error {
  status;
  code;
  constructor(a, r, o) {
    super(o), this.name = "MusicDaemonError", this.status = a, this.code = r;
  }
}
const Yt = async (e, a) => {
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
    const s = o, c = typeof s?.error == "string" ? s.error : `http_${r.status}`;
    throw new $i(r.status, c, c === "music_unavailable" ? "Music search is still starting up." : c);
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
  let s = null;
  try {
    s = await o.json();
  } catch {
    s = null;
  }
  if (!o.ok) {
    const c = s, d = typeof c?.error == "string" ? c.error : `http_${o.status}`;
    throw new $i(o.status, d, d);
  }
  return s;
}, zc = (e) => Yt("/api/music/status", e), Xo = async (e) => (await Yt("/api/music/providers", e)).providers ?? [], Qo = async (e) => (await Yt("/api/music/connectors", e)).connectors ?? [], Lc = (e, a, r) => Fi("/api/music/connectors/configure", { provider: e, credentials: a }, r), Ic = (e, a) => Fi("/api/music/connectors/disconnect", { provider: e }, a), Mc = async (e, a = 20, r) => {
  const o = new URLSearchParams({ q: e, limit: String(a) });
  return (await Yt(`/api/music/search?${o.toString()}`, r)).results ?? [];
}, Rc = (e, a = "tracks,albums,artists,playlists", r = 20, o) => {
  const s = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return Yt(`/api/music/search2?${s.toString()}`, o);
}, Lr = (e, a) => {
  const r = new URLSearchParams({ videoId: e });
  return Yt(`/api/music/stream?${r.toString()}`, a);
}, er = async (e, a) => {
  const r = await fetch(e, {
    ...a,
    headers: {
      ...a?.body ? { "Content-Type": "application/json" } : {},
      ...a?.headers ?? {}
    }
  }), o = await r.text();
  let s = null;
  try {
    s = o ? JSON.parse(o) : null;
  } catch {
    s = o;
  }
  if (!r.ok) {
    const c = typeof s == "object" && s && "error" in s ? String(s.error) : o || r.statusText;
    throw new Error(c);
  }
  return s;
}, Ir = async () => er("/api/juli3ta/library/tracks"), Zo = async (e) => (await er(
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
)).track, jc = async (e) => {
  await er("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, Pc = async () => (await er("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, ya = "application/x-juli3ta-track", $a = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", Bi = (e) => e.source !== "youtube", pa = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const o of r)
      a.has(o.id) || a.set(o.id, o);
  return Array.from(a.values()).sort((r, o) => o.createdAt - r.createdAt);
}, Dc = (e) => Bi(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), Uc = "http://localhost:18080/v1", Oc = "sk-test-123", Nt = [
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
], Hc = Nt.flatMap((e) => e.chips), $c = ["very_slow", "slow", "medium", "fast", "very_fast"], Fc = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], Bc = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], Wc = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], qc = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], Jc = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], Gc = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], Vc = ["narrow", "medium", "wide"], Yc = ["none", "gradual", "sudden"], Kc = ["low", "medium", "high"], Xc = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], Qc = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], Zc = ["male", "female", "mixed", "other", "none"], ed = [
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
], td = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], ad = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], rd = [
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
], od = [
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
], id = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], Z = (e) => e.replace(/_/g, " "), nd = (e, a, r) => {
  const o = (c) => c.trim().replace(/^[-••\d.)(]+\s*/, "").trim(), s = (c, d) => o(c).split(/\s+/).slice(0, d).join(" ");
  if (e) {
    const c = e.split(`
`).map((d) => d.trim()).find((d) => d && !d.startsWith("[") && !d.startsWith("(") && d.split(/\s+/).length >= 3);
    if (c) {
      const d = s(c, 6).replace(/[,.!?;:—-]+$/, "").trim();
      if (d.length >= 3) return d;
    }
  }
  if (a.trim()) {
    const c = s(a, 6).replace(/[,.!?;:—-]+$/, "").trim();
    if (c.length >= 3) return c;
  }
  if (r.trim()) {
    const c = s(r, 4).replace(/[,.!?;:—-]+$/, "").trim();
    if (c.length >= 3) return c;
  }
  return "Untitled";
}, Yr = (e) => {
  const a = [], r = [];
  if (e.structure?.tempo_bpm ? r.push(`${e.structure.tempo_bpm} BPM`) : e.structure?.tempo_class && r.push(`${Z(e.structure.tempo_class)} tempo`), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push(`${e.structure.time_signature} time`), e.structure?.rhythm_feel && r.push(`${e.structure.rhythm_feel} feel`), e.structure?.groove_pattern && r.push(`${Z(e.structure.groove_pattern)} groove`), e.structure?.song_form && r.push(`${Z(e.structure.song_form)} form`), e.structure?.length_seconds && r.push(`~${e.structure.length_seconds}s`), r.length && a.push(r.join(", ")), e.tonal?.key) {
    const c = e.tonal.mode ? `${e.tonal.key} ${e.tonal.mode}` : e.tonal.key;
    a.push(`Key: ${c}`);
  }
  if (e.instrumentation?.primary_instruments?.length && a.push(`Instruments: ${e.instrumentation.primary_instruments.map(Z).join(", ")}`), e.instrumentation?.has_vocals === !1)
    a.push("Instrumental, no vocals");
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const c = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && c.push(e.instrumentation.vocal_gender), e.instrumentation.vocal_style?.length ? c.push(e.instrumentation.vocal_style.map(Z).join("/")) : c.length === 0 && c.push("vocals");
    let d = c.join(" ");
    e.instrumentation.vocal_processing?.length && (d += ` with ${e.instrumentation.vocal_processing.map(Z).join(" + ")}`), a.push(d);
  }
  e.instrumentation?.language_iso639_1 && a.push(`Language: ${e.instrumentation.language_iso639_1}`);
  const o = [];
  e.dynamics?.overall_dynamic_range && o.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && o.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && o.push("big drops"), o.length && a.push(o.join(", ")), e.mood?.primary_moods?.length && a.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && a.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && a.push(`For: ${e.mood.occasion_tags.map(Z).join(", ")}`);
  const s = [];
  return e.context?.era_reference && s.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && s.push(`${Z(e.context.cultural_region)} scene`), e.context?.intended_use?.length && s.push(`use: ${e.context.intended_use.map(Z).join("/")}`), e.context?.explicit_lyrics && s.push("explicit lyrics"), s.length && a.push(s.join(", ")), a.join(". ");
}, sd = [
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
], ei = "tytus.music-creator.gallery", ti = "tytus.music-creator", Mr = "gallery", Ft = 3500, ld = 2e3, De = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), o = a % 60;
  return `${r}:${o.toString().padStart(2, "0")}`;
}, Wi = (e) => e.source === "youtube" && !!e.externalId, ve = (e) => !!e.audioDataUrl || Wi(e), tr = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? Xa(e.externalId) : ""), Xa = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", qi = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, ma = (e) => `youtube:${e}`, cd = async () => {
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
    const a = localStorage.getItem(ei);
    if (a) {
      const r = JSON.parse(a);
      if (Array.isArray(r))
        for (const o of r)
          try {
            await Ka(e(o));
          } catch {
          }
      localStorage.removeItem(ei);
    }
  } catch (a) {
    console.warn("Legacy localStorage gallery migration failed:", a);
  }
  try {
    const a = await new Promise((r) => {
      const o = indexedDB.open(ti);
      o.onsuccess = () => {
        const s = o.result;
        if (!s.objectStoreNames.contains(Mr)) {
          s.close(), r([]);
          return;
        }
        const d = s.transaction(Mr, "readonly").objectStore(Mr).getAll();
        d.onsuccess = () => {
          s.close(), r(d.result ?? []);
        }, d.onerror = () => {
          s.close(), r([]);
        };
      }, o.onerror = () => r([]);
    });
    for (const r of a)
      try {
        await Ka(e(r));
      } catch {
      }
    a.length > 0 && indexedDB.deleteDatabase(ti);
  } catch (a) {
    console.warn("Legacy IDB gallery migration failed:", a);
  }
}, Wt = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, dd = (e, a) => {
  const r = [];
  for (const o of a)
    o.endpoint && o.user_key && r.push({
      url: `${o.endpoint.replace(/\/$/, "")}/v1`,
      apiKey: fc(o.user_key),
      podId: o.pod_id,
      source: "included",
      label: `AIL gateway ${o.pod_id}`,
      models: Wt
    });
  return r.push({
    url: Uc,
    apiKey: Oc,
    podId: "local",
    source: "local",
    label: "Local AIL",
    models: Wt
  }), r;
}, ud = (e) => {
  const a = (u, y) => {
    const v = u.map((S) => S.toLowerCase());
    for (const S of y) {
      const A = v.findIndex((b) => S.test(b));
      if (A >= 0) return u[A];
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
  ]), s = new Set([r, o].filter((u) => !!u)), c = e.filter((u) => !s.has(u)), d = a(c, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), f = (u) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(u), m = e.filter((u) => !f(u)), h = a(m, [
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
}, pd = 6e4, Rr = /* @__PURE__ */ new Map(), md = async (e, a) => {
  const r = Rr.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: Wt };
    Rr.delete(e.url);
  }
  const o = Gt(a, gd);
  try {
    const s = await fetch(`${e.url}/models`, {
      method: "GET",
      signal: o.signal,
      headers: { Authorization: `Bearer ${e.apiKey}` }
    });
    if (s.status >= 500) return { ok: !1, models: Wt };
    if (!s.ok) return { ok: !0, models: Wt };
    const d = ((await s.json()).data ?? []).map((f) => f?.id).filter((f) => typeof f == "string" && f.length > 0);
    return { ok: !0, models: ud(d) };
  } catch (s) {
    return (s?.name ?? "") === "TypeError" && Rr.set(e.url, Date.now() + pd), { ok: !1, models: Wt };
  } finally {
    o.dispose();
  }
}, hd = async (e, a) => (await Promise.all(
  e.map(async (o) => {
    if (a.aborted) return null;
    const { ok: s, models: c } = await md(o, a);
    return s ? { ...o, models: c } : null;
  })
)).filter((o) => o !== null), Fa = 6e4, ai = 3e5, gd = 8e3, Gt = (e, a) => {
  const r = AbortSignal.any, o = AbortSignal.timeout;
  if (r && o) {
    const d = o(a);
    return { signal: e ? r([e, d]) : d, dispose: () => {
    } };
  }
  const s = new AbortController(), c = setTimeout(() => {
    s.signal.aborted || s.abort(new DOMException("Timeout", "TimeoutError"));
  }, a);
  return e && (e.aborted ? s.abort(e.reason) : e.addEventListener("abort", () => s.abort(e.reason), { once: !0 })), { signal: s.signal, dispose: () => clearTimeout(c) };
}, yd = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]);
class _e extends Error {
  status;
  body;
  constructor(a, r, o) {
    super(o ?? `HTTP ${a}: ${r.slice(0, 200)}`), this.name = "GatewayError", this.status = a, this.body = r;
  }
}
function Ji(e) {
  const a = e.indexOf("{");
  if (a === -1) return null;
  let r = 0, o = !1, s = !1;
  for (let c = a; c < e.length; c++) {
    const d = e[c];
    if (o) {
      if (s) {
        s = !1;
        continue;
      }
      if (d === "\\") {
        s = !0;
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
      return e.slice(a, c + 1);
  }
  return null;
}
const ar = async (e, a, r) => {
  if (e.length === 0)
    throw new Error(`No ${r}-capable models available on this endpoint.`);
  let o = null;
  for (const c of e)
    try {
      return await a(c);
    } catch (d) {
      if (d.name === "AbortError" || d.name === "TimeoutError")
        throw d;
      if (d instanceof TypeError) {
        o = d;
        continue;
      }
      if (d instanceof _e && yd.has(d.status)) {
        o = d;
        continue;
      }
      throw d;
    }
  const s = o?.message ?? "unknown";
  throw new Error(`All ${r} models exhausted. Last error: ${s}. Wait for the rate limit to reset, or pick a different endpoint in Settings.`);
}, fd = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), bd = async (e, a, r) => {
  let o = 0, s = "";
  const c = Gt(r, Fa);
  try {
    const y = { prompt: a, mode: "write_full_song" };
    e.models.lyrics && (y.model = e.models.lyrics);
    const v = await fetch(`${e.url}/music/lyrics`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${e.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(y),
      signal: c.signal
    });
    if (v.ok) {
      const S = await v.json();
      if (!S || typeof S.lyrics != "string" || S.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...S, usedFallback: !1 };
    }
    o = v.status, s = await v.text().catch(() => "");
  } catch (y) {
    const v = y.name;
    if (v === "AbortError" && r?.aborted) throw y;
    if (v === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${Fa / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", y);
  } finally {
    c.dispose();
  }
  if (o !== 0 && !fd.has(o)) {
    const y = s.length > 300 ? `${s.slice(0, 300)}…` : s;
    throw new Error(`Lyrics HTTP ${o}: ${y || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, s);
  const d = (y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(y), f = /* @__PURE__ */ new Set(), m = [], h = (y) => {
    y && !f.has(y) && (f.add(y), m.push(y));
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
}`, u = await ar(m, async (y) => {
    const v = {
      model: y,
      messages: [
        { role: "system", content: w },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, S = async (A) => {
      const b = Gt(r, Fa);
      let P;
      try {
        P = await fetch(`${e.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${e.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            A ? { ...v, response_format: { type: "json_object" } } : v
          ),
          signal: b.signal
        });
      } catch (I) {
        throw I.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${Fa / 1e3}s.`) : I;
      } finally {
        b.dispose();
      }
      if (!P.ok) {
        const I = await P.text().catch(() => "");
        throw new _e(P.status, I, `Lyrics fallback HTTP ${P.status}: ${I.slice(0, 300)}`);
      }
      const C = (await P.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!C)
        throw new _e(502, "", "Lyrics fallback returned empty content");
      const k = C.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), N = Ji(k) ?? k;
      let E;
      try {
        E = JSON.parse(N);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", C.slice(0, 400)), new _e(502, C.slice(0, 200), `Lyrics fallback returned non-JSON content: ${C.slice(0, 200)}`);
      }
      if (!E.lyrics)
        throw new _e(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return E;
    };
    try {
      return await S(!0);
    } catch (A) {
      if (A instanceof _e && A.status === 400 && /response_format|json_object/i.test(A.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", y), await S(!1);
      throw A;
    }
  }, "chat-lyrics");
  return {
    song_title: u.song_title || "Untitled",
    style_tags: u.style_tags || "",
    lyrics: u.lyrics,
    usedFallback: !0
  };
}, vd = async (e, a, r) => {
  const o = !!a.refAudioBase64, s = (h) => /music/i.test(h) && !/cover/i.test(h), c = (h) => /cover/i.test(h), d = /* @__PURE__ */ new Set(), f = (h, w) => {
    w && !d.has(w) && (d.add(w), h.push(w));
  }, m = [];
  if (o ? (f(m, e.models.cover), e.models.allIds.filter(c).forEach((h) => f(m, h)), f(m, e.models.music)) : (f(m, e.models.music), e.models.allIds.filter(s).forEach((h) => f(m, h))), m.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return ar(m, async (h) => {
    const w = {
      model: h,
      lyrics: a.lyrics
    };
    a.prompt && (w.prompt = a.prompt), a.instrumental && (w.instrumental = !0), o && (w.audio_base64 = a.refAudioBase64);
    const u = Gt(r, ai);
    let y;
    try {
      y = await fetch(`${e.url}/music/generations`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${e.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(w),
        signal: u.signal
      });
    } catch (S) {
      throw S.name === "TimeoutError" ? new Error(`Music generation timed out after ${ai / 1e3}s. Try a shorter lyric or a different endpoint.`) : S;
    } finally {
      u.dispose();
    }
    if (!y.ok) {
      const S = await y.text().catch(() => "");
      throw new _e(y.status, S, `Music HTTP ${y.status}: ${S.slice(0, 300)}`);
    }
    const v = await y.json();
    if (!v?.data?.audio || typeof v.data.audio != "string" || v.data.audio.length < 100)
      throw new _e(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return v;
  }, o ? "music-cover" : "music");
}, ri = 6e4, Ja = (e, a, r) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", s = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), c = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${o}".`
  ];
  return s && d.push(`Genre: ${s}.`), c && d.push(`Mood: ${c}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, Br = async (e, a, r) => {
  const o = (f) => /image|diffusion|dall-?e|flux|sdxl/i.test(f), s = /* @__PURE__ */ new Set(), c = [], d = (f) => {
    f && !s.has(f) && (s.add(f), c.push(f));
  };
  if (d(e.models.image), e.models.allIds.filter(o).forEach(d), c.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return ar(c, async (f) => {
    const m = Gt(r, ri), w = /minimax|ail-image|image-01/i.test(f) ? {
      model: f,
      prompt: a,
      aspect_ratio: "1:1",
      response_format: "base64"
    } : {
      model: f,
      prompt: a,
      size: "1024x1024",
      n: 1,
      response_format: "b64_json"
    };
    let u;
    try {
      u = await fetch(`${e.url}/images/generations`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${e.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(w),
        signal: m.signal
      });
    } catch (C) {
      throw C.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${ri / 1e3}s.`) : C;
    } finally {
      m.dispose();
    }
    if (!u.ok) {
      const C = await u.text().catch(() => "");
      throw new _e(u.status, C, `Cover-art HTTP ${u.status}: ${C.slice(0, 200)}`);
    }
    const y = await u.json(), v = y.base_resp;
    if (v && typeof v.status_code == "number" && v.status_code !== 0)
      throw new _e(502, v.status_msg ?? "", `Cover-art ${f} rejected: ${v.status_msg ?? "status_code=" + v.status_code}`);
    const S = (C) => typeof C != "string" || !C.length ? null : C.startsWith("data:") ? C : `data:image/png;base64,${C}`, A = (C) => typeof C == "string" && /^https?:\/\//i.test(C) ? C : null, b = y.data;
    if (b && typeof b == "object" && !Array.isArray(b)) {
      const C = b, k = C.image_base64;
      if (Array.isArray(k) && k[0]) {
        const I = S(k[0]);
        if (I) return I;
      }
      const N = S(C.image) ?? S(C.b64_json) ?? A(C.url);
      if (N) return N;
      const E = C.image_url ?? C.image_urls;
      if (Array.isArray(E) && E[0]) {
        const I = A(E[0]);
        if (I) return I;
      }
    }
    if (Array.isArray(b) && b[0]) {
      const C = b[0], k = S(C.b64_json) ?? S(C.image_base64) ?? A(C.url);
      if (k) return k;
      throw new _e(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const P = S(y.image) ?? S(y.b64_json);
    if (P) return P;
    const M = y.images;
    if (Array.isArray(M) && M[0]) {
      const C = M[0], k = S(C.b64_json) ?? S(C.image) ?? A(C.url);
      if (k) return k;
    }
    throw new _e(502, "", `Cover-art response shape not recognised: ${JSON.stringify(y).slice(0, 200)}`);
  }, "image");
}, oi = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], ii = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
];
function xd(e, a, r) {
  const [o, s] = T(() => {
    let k = "off";
    try {
      const E = localStorage.getItem("juli3ta:repeatMode");
      (E === "off" || E === "all" || E === "one") && (k = E);
    } catch {
    }
    let N = !1;
    try {
      N = localStorage.getItem("juli3ta:shuffle") === "1";
    } catch {
    }
    return { trackId: null, playing: !1, loadingTrackId: null, positionMs: 0, durationMs: 0, volume: 1, repeatMode: k, shuffle: N };
  }), c = ee(null), d = ee([]), f = ee(!1), m = L((k) => {
    s((N) => ({ ...N, repeatMode: k }));
    try {
      localStorage.setItem("juli3ta:repeatMode", k);
    } catch {
    }
  }, []), h = L((k) => {
    s((N) => ({ ...N, shuffle: k }));
    try {
      localStorage.setItem("juli3ta:shuffle", k ? "1" : "0");
    } catch {
    }
  }, []), w = L((k) => {
    (async () => {
      s((I) => ({
        ...I,
        trackId: k.id,
        playing: !1,
        loadingTrackId: ve(k) ? k.id : null,
        positionMs: 0,
        durationMs: k.durationMs || 0
      }));
      const N = k.audioDataUrl || await r?.(k);
      if (!N) {
        s((I) => ({ ...I, loadingTrackId: null }));
        return;
      }
      const E = a.current;
      if (!E) {
        s((I) => ({ ...I, loadingTrackId: null }));
        return;
      }
      o.trackId !== k.id || E.src !== N ? (E.src = N, E.preload = "auto", E.load(), E.pause(), s((I) => ({
        ...I,
        trackId: k.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: k.durationMs || 0
      }))) : s((I) => ({ ...I, loadingTrackId: null }));
    })();
  }, [o.trackId, a, r]), u = L((k) => {
    (async () => {
      if (c.current = null, o.trackId && o.trackId !== k.id && !f.current) {
        const I = d.current;
        I[I.length - 1] !== o.trackId && (I.push(o.trackId), I.length > 50 && I.splice(0, I.length - 50));
      }
      f.current = !1, s((I) => ({
        ...I,
        trackId: k.id,
        loadingTrackId: k.id,
        durationMs: k.durationMs || I.durationMs
      }));
      const N = k.audioDataUrl || await r?.(k);
      if (!N) {
        s((I) => ({ ...I, loadingTrackId: null, playing: !1 }));
        return;
      }
      const E = a.current;
      if (!E) {
        s((I) => ({ ...I, loadingTrackId: null, playing: !1 }));
        return;
      }
      (o.trackId !== k.id || E.src !== N) && (E.src = N, E.preload = "auto", s((I) => ({ ...I, trackId: k.id, positionMs: 0, durationMs: k.durationMs || 0 }))), E.play().then(() => s((I) => ({ ...I, loadingTrackId: null, playing: !0 }))).catch(() => s((I) => ({ ...I, loadingTrackId: null, playing: !1 })));
    })();
  }, [o.trackId, a, r]), y = L(() => {
    a.current?.pause(), s((k) => ({ ...k, playing: !1, loadingTrackId: null }));
  }, [a]), v = L((k) => {
    if (o.loadingTrackId) return;
    if (k) {
      o.trackId === k.id && o.playing ? y() : u(k);
      return;
    }
    if (o.playing) {
      y();
      return;
    }
    const N = o.trackId ? e.find((E) => E.id === o.trackId) : null;
    N ? u(N) : a.current?.src && a.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, u, y, a]), S = L((k) => {
    const N = a.current;
    N && (N.currentTime = Math.max(0, k / 1e3));
  }, [a]), A = L((k) => {
    const N = Math.max(0, Math.min(1, k));
    a.current && (a.current.volume = N), s((E) => ({ ...E, volume: N }));
  }, [a]), b = ge(() => e.filter(ve), [e]), P = L(() => {
    if (b.length === 0) return null;
    if (b.length === 1) return b[0];
    const k = b.filter((N) => N.id !== o.trackId);
    return k[Math.floor(Math.random() * k.length)];
  }, [b, o.trackId]), M = L(() => {
    if (!o.trackId || b.length === 0) return;
    if (o.shuffle) {
      const E = P();
      E && u(E);
      return;
    }
    const k = b.findIndex((E) => E.id === o.trackId);
    if (k < 0) return;
    const N = b[(k + 1) % b.length];
    N && u(N);
  }, [o.trackId, o.shuffle, b, u, P]), C = L(() => {
    if (!o.trackId || b.length === 0) return;
    if (o.shuffle) {
      const E = d.current;
      for (; E.length > 0; ) {
        const F = E.pop();
        if (!F || F === o.trackId) continue;
        const W = b.find((K) => K.id === F);
        if (W) {
          f.current = !0, u(W);
          return;
        }
      }
      const I = P();
      I && u(I);
      return;
    }
    const k = b.findIndex((E) => E.id === o.trackId);
    if (k < 0) return;
    const N = b[(k - 1 + b.length) % b.length];
    N && u(N);
  }, [o.trackId, o.shuffle, b, u, P]);
  return q(() => {
    const k = a.current;
    if (!k) return;
    const N = () => s((U) => ({ ...U, positionMs: k.currentTime * 1e3 })), E = () => s((U) => ({
      ...U,
      durationMs: Number.isFinite(k.duration) ? k.duration * 1e3 : U.durationMs
    })), I = () => s((U) => ({ ...U, playing: !0, loadingTrackId: null })), F = () => s((U) => ({ ...U, playing: !1, loadingTrackId: null })), W = () => s((U) => ({ ...U, loadingTrackId: null })), K = () => {
      const U = o.trackId ? b.find((R) => R.id === o.trackId) : null;
      if (!U || U.audioDataUrl || !r || c.current === U.id) {
        s((R) => ({ ...R, playing: !1, loadingTrackId: null }));
        return;
      }
      c.current = U.id, s((R) => ({ ...R, loadingTrackId: U.id, playing: !1 })), r(U, { force: !0 }).then((R) => {
        if (!R) throw new Error("No refreshed stream URL");
        return k.src = R, k.preload = "auto", k.play();
      }).then(() => s((R) => ({ ...R, playing: !0, loadingTrackId: null }))).catch(() => s((R) => ({ ...R, playing: !1, loadingTrackId: null })));
    }, se = () => {
      if (o.repeatMode === "one" && o.trackId) {
        const U = b.find((R) => R.id === o.trackId);
        if (U) {
          u(U);
          return;
        }
      }
      if (o.shuffle && b.length >= 1)
        if (b.length === 1) {
          if (o.repeatMode === "all") {
            u(b[0]);
            return;
          }
        } else {
          const U = b.filter((ie) => ie.id !== o.trackId), R = U[Math.floor(Math.random() * U.length)];
          if (R) {
            u(R);
            return;
          }
        }
      if (b.length >= 2) {
        const U = b.findIndex((R) => R.id === o.trackId);
        if (U >= 0 && U + 1 < b.length) {
          u(b[U + 1]);
          return;
        }
        if (U >= 0 && o.repeatMode === "all") {
          u(b[0]);
          return;
        }
      }
      s((U) => ({ ...U, playing: !1, positionMs: 0 }));
    };
    return k.addEventListener("timeupdate", N), k.addEventListener("loadedmetadata", E), k.addEventListener("play", I), k.addEventListener("pause", F), k.addEventListener("canplay", W), k.addEventListener("error", K), k.addEventListener("ended", se), () => {
      k.removeEventListener("timeupdate", N), k.removeEventListener("loadedmetadata", E), k.removeEventListener("play", I), k.removeEventListener("pause", F), k.removeEventListener("canplay", W), k.removeEventListener("error", K), k.removeEventListener("ended", se);
    };
  }, [b, o.trackId, o.repeatMode, o.shuffle, u, a, r]), { state: o, queue: e, play: u, pause: y, toggle: v, select: w, seek: S, setVolume: A, setRepeatMode: m, setShuffle: h, next: M, prev: C };
}
function ni({
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
function jr({
  label: e,
  tooltip: a,
  onClick: r,
  busy: o,
  disabled: s
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      onClick: r,
      disabled: s,
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
        o ? /* @__PURE__ */ t(te, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 10 }),
        o ? "…" : e
      ]
    }
  );
}
function Ye({
  track: e,
  size: a,
  iconSize: r,
  radius: o
}) {
  const s = tr(e);
  return s ? /* @__PURE__ */ t(
    "img",
    {
      src: s,
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
function wd({ player: e, allTracks: a }) {
  const { state: r, toggle: o, next: s, prev: c, seek: d, setVolume: f, queue: m } = e, h = m.find((A) => A.id === r.trackId) ?? a.find((A) => A.id === r.trackId) ?? null;
  if (!h) return null;
  const w = r.durationMs > 0 ? r.durationMs : h.durationMs, u = Math.min(r.positionMs, w || 0), y = w > 0 ? u / w * 100 : 0, v = r.loadingTrackId === h.id, S = (A) => {
    if (!w) return;
    const b = A.currentTarget.getBoundingClientRect(), P = (A.clientX - b.left) / b.width;
    d(Math.max(0, Math.min(1, P)) * w);
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: "flex-shrink-0 flex items-center gap-3 px-4",
      style: {
        height: 64,
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-titlebar)"
      },
      children: [
        /* @__PURE__ */ t(Ye, { track: h, size: 40, iconSize: 18, radius: 6 }),
        /* @__PURE__ */ n("div", { className: "flex flex-col min-w-0", style: { width: 180 }, children: [
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: h.title }),
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: h.styleTags && h.styleTags !== "—" ? h.styleTags : "—" })
        ] }),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
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
              children: /* @__PURE__ */ t(qr, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: c,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(ye, { size: 12, style: { transform: "rotate(180deg)" } })
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
              children: v ? /* @__PURE__ */ t(te, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(ft, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(ye, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: s,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(ye, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                const A = r.repeatMode, b = A === "off" ? "all" : A === "all" ? "one" : "off";
                e.setRepeatMode(b);
              },
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: r.repeatMode === "off" ? "var(--text-secondary)" : "var(--accent-primary)"
              },
              title: r.repeatMode === "off" ? "Repeat off" : r.repeatMode === "all" ? "Repeating queue" : "Repeating this track",
              children: r.repeatMode === "one" ? /* @__PURE__ */ t(vi, { size: 12 }) : /* @__PURE__ */ t(il, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: De(u)
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            onClick: S,
            className: "flex-1 rounded-full overflow-hidden cursor-pointer",
            style: { height: 4, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${y}%`,
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
            children: De(w)
          }
        ),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(kd, { volume: r.volume, setVolume: f }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
              value: r.volume,
              onChange: (A) => f(Number(A.target.value)),
              style: { width: "100%", accentColor: "var(--accent-primary)" }
            }
          )
        ] })
      ]
    }
  );
}
function kd({
  volume: e,
  setVolume: a
}) {
  const r = ee(e > 0 ? e : 1);
  q(() => {
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
      children: o ? /* @__PURE__ */ t(vl, { size: 12 }) : /* @__PURE__ */ t(fl, { size: 12 })
    }
  );
}
function Sd({ retrying: e, onRetry: a }) {
  const { t: r } = It();
  return /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center h-full px-8 text-center", style: { background: "var(--bg-window)" }, children: [
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
    /* @__PURE__ */ n("div", { className: "flex items-center gap-2 mt-6", children: [
      /* @__PURE__ */ n(
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
            e ? /* @__PURE__ */ t(te, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 14 }),
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
    /* @__PURE__ */ n(
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
          /* @__PURE__ */ n("div", { children: [
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
function ha({ label: e, hint: a, counter: r, counterDanger: o, className: s, headerExtra: c, children: d }) {
  return /* @__PURE__ */ n("div", { className: s, children: [
    /* @__PURE__ */ n("div", { className: "flex items-center justify-between mb-2", children: [
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
      (c || r) && /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
        c,
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
function Td({ onPick: e, disabled: a }) {
  const [r, o] = T(!1), [s, c] = T(Nt[0].label), [d, f] = T(""), m = d.trim().toLowerCase(), h = m.length > 0, w = ge(() => {
    if (!h) return [];
    const u = [];
    for (const y of Nt)
      for (const v of y.chips)
        v.toLowerCase().includes(m) && u.push({ family: y.label, chip: v });
    return u;
  }, [h, m]);
  return /* @__PURE__ */ n(
    "div",
    {
      className: "rounded-xl p-3 mb-4",
      style: {
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)"
      },
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-2 mb-3 flex-wrap", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: h ? `${w.length} match${w.length === 1 ? "" : "es"}` : `${Hc.length} chips · click to add` })
          ] }),
          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ n(
              "div",
              {
                className: "flex items-center gap-1 px-2 rounded-md",
                style: {
                  height: 24,
                  background: "var(--bg-window)",
                  border: `1px solid ${h ? "var(--accent-primary)" : "var(--border-subtle)"}`
                },
                children: [
                  /* @__PURE__ */ t(lt, { size: 11, style: { color: "var(--text-disabled)" } }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: d,
                      onChange: (u) => f(u.target.value),
                      placeholder: "Search genres…",
                      className: "rounded-input bg-transparent outline-none",
                      style: { fontSize: 11, color: "var(--text-primary)", width: 140 }
                    }
                  ),
                  d && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => f(""),
                      className: "opacity-60 hover:opacity-100",
                      title: "Clear search",
                      children: /* @__PURE__ */ t(fe, { size: 11 })
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
        h ? w.length === 0 ? /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: w.map(({ family: u, chip: y }) => /* @__PURE__ */ t(
          Pr,
          {
            chip: y,
            family: u,
            onPick: e,
            disabled: a
          },
          `${u}::${y}`
        )) }) : /* @__PURE__ */ n(ue, { children: [
          !r && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: Nt.map((u) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => c(u.label),
              className: "px-2 rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                height: 24,
                fontSize: 10,
                fontWeight: s === u.label ? 600 : 500,
                color: s === u.label ? "var(--text-primary)" : "var(--text-secondary)",
                background: s === u.label ? "var(--bg-selected)" : "var(--bg-window)",
                border: `1px solid ${s === u.label ? "var(--accent-primary)" : "var(--border-subtle)"}`
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
              children: Nt.map((u) => /* @__PURE__ */ n("div", { children: [
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
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: u.chips.map((y) => /* @__PURE__ */ t(Pr, { chip: y, onPick: e, disabled: a }, y)) })
              ] }, u.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (Nt.find((u) => u.label === s) ?? Nt[0]).chips.map((u) => /* @__PURE__ */ t(Pr, { chip: u, onPick: e, disabled: a }, u)) })
        ] })
      ]
    }
  );
}
function Pr({
  chip: e,
  family: a,
  onPick: r,
  disabled: o
}) {
  return /* @__PURE__ */ n(
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
        /* @__PURE__ */ t(Or, { size: 10 }),
        e,
        a && /* @__PURE__ */ n("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function _d({ specs: e, onChange: a, disabled: r, onOptimize: o, optimizing: s }) {
  const [c, d] = T(!1), f = ge(() => Yr(e), [e]), m = f.length > 0, h = L(
    (u, y) => {
      const v = { ...e };
      y === null ? delete v[u] : v[u] = y, a(v);
    },
    [e, a]
  ), w = () => a({});
  return /* @__PURE__ */ n(
    "div",
    {
      className: "rounded-xl",
      style: {
        background: "var(--bg-titlebar)",
        border: "1px solid var(--border-subtle)"
      },
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-center justify-between p-3", children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => d((u) => !u),
              className: "flex items-center gap-2 flex-1 hover:opacity-90 text-left",
              style: { background: "transparent", border: "none", cursor: "pointer" },
              children: [
                /* @__PURE__ */ t(Ur, { size: 14, style: { color: "var(--text-secondary)" } }),
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
          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
            o && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: (u) => {
                  u.stopPropagation(), o(), c || d(!0);
                },
                disabled: r || s,
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
                  s ? /* @__PURE__ */ t(te, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 11 }),
                  s ? "Optimizing…" : "AI Optimize"
                ]
              }
            ),
            m && !c && /* @__PURE__ */ n(
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
                  qt(e),
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
                  hi,
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
        c && /* @__PURE__ */ n(
          "div",
          {
            className: "px-3 pb-3 pt-0",
            style: { borderTop: "1px solid var(--border-subtle)" },
            children: [
              m && /* @__PURE__ */ n(
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
                    f
                  ]
                }
              ),
              /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                /* @__PURE__ */ n(ga, { label: "Structure", children: [
                  /* @__PURE__ */ t(ne, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    si,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (u) => h("structure", { ...e.structure, tempo_bpm: u }),
                      min: 40,
                      max: 260,
                      placeholder: "120",
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Tempo class", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.structure?.tempo_class,
                      options: $c,
                      onChange: (u) => h("structure", { ...e.structure, tempo_class: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Time signature", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.structure?.time_signature,
                      options: Fc,
                      onChange: (u) => h("structure", { ...e.structure, time_signature: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.structure?.rhythm_feel,
                      options: Bc,
                      onChange: (u) => h("structure", { ...e.structure, rhythm_feel: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Groove", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.structure?.groove_pattern,
                      options: Wc,
                      onChange: (u) => h("structure", { ...e.structure, groove_pattern: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Form", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.structure?.song_form,
                      options: qc,
                      onChange: (u) => h("structure", { ...e.structure, song_form: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Length (s)", children: /* @__PURE__ */ t(
                    si,
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
                /* @__PURE__ */ n(ga, { label: "Key", children: [
                  /* @__PURE__ */ t(ne, { label: "Pitch", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.tonal?.key,
                      options: Jc,
                      onChange: (u) => h("tonal", { ...e.tonal, key: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Mode", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.tonal?.mode,
                      options: Gc,
                      onChange: (u) => h("tonal", { ...e.tonal, mode: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ n(ga, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(ne, { label: "Range", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: Vc,
                      onChange: (u) => h("dynamics", { ...e.dynamics, overall_dynamic_range: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: Yc,
                      onChange: (u) => h("dynamics", { ...e.dynamics, crescendo_shape: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Big drops", children: /* @__PURE__ */ t(
                    li,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (u) => h("dynamics", { ...e.dynamics, has_big_drops: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ n(ga, { label: "Context", children: [
                  /* @__PURE__ */ t(ne, { label: "Era", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.context?.era_reference,
                      options: Xc,
                      onChange: (u) => h("context", { ...e.context, era_reference: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Region", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.context?.cultural_region,
                      options: Qc,
                      onChange: (u) => h("context", { ...e.context, cultural_region: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Intensity", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.mood?.emotional_intensity,
                      options: Kc,
                      onChange: (u) => h("mood", { ...e.mood, emotional_intensity: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    li,
                    {
                      value: e.context?.explicit_lyrics,
                      onChange: (u) => h("context", { ...e.context, explicit_lyrics: u }),
                      disabled: r
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "mt-4 flex flex-col gap-3", children: [
                /* @__PURE__ */ t(
                  Bt,
                  {
                    label: "Primary instruments",
                    options: ed,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (u) => h("instrumentation", { ...e.instrumentation, primary_instruments: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ n(ga, { label: "Vocals", children: [
                    /* @__PURE__ */ t(ne, { label: "Has vocals", children: /* @__PURE__ */ t(
                      Cd,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (u) => h("instrumentation", { ...e.instrumentation, has_vocals: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(ne, { label: "Gender", children: /* @__PURE__ */ t(
                      Ae,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: Zc,
                        onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_gender: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(ne, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      Nd,
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
                    Bt,
                    {
                      label: "Vocal style",
                      options: td,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_style: u.length ? u : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    Bt,
                    {
                      label: "Vocal processing",
                      options: ad,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_processing: u.length ? u : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  Bt,
                  {
                    label: "Primary moods",
                    options: rd,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (u) => h("mood", { ...e.mood, primary_moods: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Bt,
                  {
                    label: "Occasion tags",
                    options: od,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (u) => h("mood", { ...e.mood, occasion_tags: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Bt,
                  {
                    label: "Intended use",
                    options: id,
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
function ga({ label: e, children: a }) {
  return /* @__PURE__ */ n("div", { className: "flex flex-col gap-1.5", children: [
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
function ne({ label: e, children: a }) {
  return /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-secondary)", flexShrink: 0, minWidth: 90 }, children: e }),
    /* @__PURE__ */ t("div", { style: { flex: 1, minWidth: 0 }, children: a })
  ] });
}
function Ae({
  value: e,
  options: a,
  onChange: r,
  disabled: o
}) {
  return /* @__PURE__ */ n(
    "select",
    {
      value: e ?? "",
      onChange: (s) => r(s.target.value === "" ? void 0 : s.target.value),
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
        a.map((s) => /* @__PURE__ */ t("option", { value: s, children: Z(s) }, s))
      ]
    }
  );
}
function si({
  value: e,
  onChange: a,
  min: r,
  max: o,
  placeholder: s,
  disabled: c
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "number",
      value: e ?? "",
      min: r,
      max: o,
      placeholder: s,
      className: "w-full px-2 py-1 rounded-md focus:outline-none disabled:opacity-50",
      onChange: (d) => {
        const f = d.target.value;
        if (f === "") {
          a(void 0);
          return;
        }
        const m = Number(f);
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
function Nd({
  value: e,
  onChange: a,
  placeholder: r,
  maxLength: o,
  disabled: s
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "text",
      value: e,
      placeholder: r,
      maxLength: o,
      onChange: (c) => a(c.target.value),
      disabled: s,
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
function Cd({
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
function Bt({
  label: e,
  options: a,
  selected: r,
  onChange: o,
  disabled: s
}) {
  const c = (d) => {
    r.includes(d) ? o(r.filter((f) => f !== d)) : o([...r, d]);
  };
  return /* @__PURE__ */ n("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ n(
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
          r.length > 0 && /* @__PURE__ */ n("span", { style: { marginLeft: 6, color: "var(--accent-primary)" }, children: [
            "· ",
            r.length
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: a.map((d) => {
      const f = r.includes(d);
      return /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          onClick: () => c(d),
          disabled: s,
          className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-90 disabled:opacity-40",
          style: {
            fontSize: 10,
            background: f ? "var(--accent-primary)" : "var(--bg-titlebar)",
            color: f ? "white" : "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            cursor: s ? "not-allowed" : "pointer"
          },
          children: [
            f && /* @__PURE__ */ t(Jt, { size: 10 }),
            Z(d)
          ]
        },
        d
      );
    }) })
  ] });
}
function qt(e) {
  const { intent: a, ...r } = e;
  let o = 0;
  const s = (c) => {
    if (!(!c || typeof c != "object")) {
      for (const d of Object.values(c))
        if (d != null) {
          if (Array.isArray(d)) {
            d.length && (o += 1);
            continue;
          }
          if (typeof d == "object") {
            s(d);
            continue;
          }
          d === "" || d === !1 || (o += 1);
        }
    }
  };
  return s(r), o;
}
const Ed = "#4ade80", Ad = "#fbbf24", Qa = (e) => e.models.music || e.models.cover ? Ed : Ad;
function zd({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [o, s] = T(!1), c = ee(null), d = a.length > 1;
  q(() => {
    if (!o) return;
    const m = (h) => {
      c.current && !c.current.contains(h.target) && s(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [o]);
  const f = (m) => /* @__PURE__ */ t(
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
  return /* @__PURE__ */ n("div", { ref: c, className: "relative inline-flex", children: [
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        onClick: () => d && s((m) => !m),
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
          f(Qa(e)),
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
        children: a.map((m) => {
          const h = m.podId === e.podId;
          return /* @__PURE__ */ n(
            "button",
            {
              onClick: () => {
                r(m.podId), s(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: h ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: f(Qa(m)) }),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ n("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: m.label }),
                    h && /* @__PURE__ */ t(Jt, { size: 11, style: { color: "var(--accent-primary)" } })
                  ] }),
                  /* @__PURE__ */ n("div", { style: { fontSize: 9, color: "var(--text-disabled)", marginTop: 2 }, children: [
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
const Se = ({ icon: e, label: a, onClick: r, danger: o }) => /* @__PURE__ */ n(
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
    onMouseEnter: (s) => {
      s.currentTarget.style.background = "var(--bg-hover)";
    },
    onMouseLeave: (s) => {
      s.currentTarget.style.background = "transparent";
    },
    children: [
      /* @__PURE__ */ t("span", { className: "shrink-0 opacity-80", children: e }),
      /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", style: { fontSize: 12 }, children: a })
    ]
  }
);
function Ld({ tracks: e, player: a, onLoad: r, onOpenLyrics: o, onDelete: s, onRename: c }) {
  const { t: d } = It();
  return /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: [
    /* @__PURE__ */ n(
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
    e.map((f) => /* @__PURE__ */ t(
      Id,
      {
        track: f,
        player: a,
        onLoad: r,
        onOpenLyrics: o,
        onDelete: s,
        onRename: c,
        translate: d
      },
      f.id
    ))
  ] });
}
function Id({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: o,
  onDelete: s,
  onRename: c,
  translate: d
}) {
  const [f, m] = T(!1), [h, w] = T(null), u = a.state.trackId === e.id, y = u && a.state.playing, v = () => {
    if (h === null) return;
    const b = h.trim();
    w(null), b && b !== e.title && c(e.id, b);
  }, S = new Date(e.createdAt).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ n(
    "div",
    {
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      draggable: !0,
      onDragStart: (b) => {
        const P = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: ve(e)
        };
        b.dataTransfer.setData(ya, JSON.stringify(P)), e.lyricsPreview && b.dataTransfer.setData("text/plain", e.lyricsPreview), b.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => ve(e) ? a.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: u ? "var(--bg-selected)" : f ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: ve(e) ? y ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: u ? "var(--accent-primary)" : "var(--text-disabled)" }, children: ve(e) ? y ? /* @__PURE__ */ t(ft, { size: 11 }) : f ? /* @__PURE__ */ t(ye, { size: 11 }) : /* @__PURE__ */ t(va, { size: 11 }) : /* @__PURE__ */ t(Va, { size: 11 }) }),
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
              onChange: (b) => w(b.target.value),
              onClick: (b) => b.stopPropagation(),
              onKeyDown: (b) => {
                b.stopPropagation(), b.key === "Enter" ? v() : b.key === "Escape" && w(null);
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
        ) : /* @__PURE__ */ n(ue, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "truncate",
              style: { fontWeight: u ? 600 : 500 },
              onClick: (b) => b.stopPropagation(),
              onDoubleClick: (b) => {
                b.stopPropagation(), w(e.title);
              },
              title: "Double-click to rename",
              children: e.title || d("musiccreator.track.untitled")
            }
          ),
          e.styleTags && e.styleTags !== "—" && /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 9, color: "var(--text-disabled)" }, children: e.styleTags })
        ] }) }),
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? De(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: S }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (b) => {
              b.stopPropagation(), b.shiftKey ? o(e) : b.altKey ? s(e.id) : r(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(Wr, { size: 11 })
          }
        )
      ]
    }
  );
}
function Md({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: o,
  onSaveSongToDesktop: s,
  onSaveLyricsToDesktop: c,
  onPlayInPlayer: d,
  onRename: f,
  onEditCover: m,
  onSelect: h,
  selected: w,
  player: u
}) {
  const { t: y } = It(), v = ee(null), [S, A] = T(!1), [b, P] = T(null), [M, C] = T(null), k = () => {
    if (M === null) return;
    const R = M.trim();
    C(null), R && R !== e.title && f(e.id, R);
  }, N = u.state.trackId === e.id, E = N && u.state.playing, I = N && u.state.durationMs > 0 ? u.state.positionMs / u.state.durationMs : 0;
  q(() => {
    if (!b) return;
    const R = (Ke) => {
      const ze = Ke.target;
      v.current && ze && v.current.contains(ze) || ze && ze.closest?.("[data-track-menu]") || P(null);
    }, ie = () => P(null);
    return setTimeout(() => window.addEventListener("mousedown", R), 0), window.addEventListener("scroll", ie, !0), window.addEventListener("resize", ie), () => {
      window.removeEventListener("mousedown", R), window.removeEventListener("scroll", ie, !0), window.removeEventListener("resize", ie);
    };
  }, [b]);
  const F = () => {
    const R = v.current?.getBoundingClientRect();
    if (!R) return;
    const ie = 220, Ke = Math.min(R.right - ie, window.innerWidth - ie - 8), ze = R.bottom + 4;
    P({ x: Math.max(8, Ke), y: ze });
  }, W = (R) => () => {
    P(null), R();
  }, K = () => u.toggle(e), se = () => {
    const R = document.createElement("a");
    R.href = e.audioDataUrl, R.download = `${e.title || "track"}.mp3`, R.click();
  };
  return /* @__PURE__ */ n(
    "div",
    {
      onMouseEnter: () => A(!0),
      onMouseLeave: () => A(!1),
      draggable: !0,
      onDragStart: (R) => {
        const ie = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: ve(e)
        };
        R.dataTransfer.setData(ya, JSON.stringify(ie)), e.lyricsPreview && R.dataTransfer.setData("text/plain", e.lyricsPreview), R.dataTransfer.effectAllowed = "copyMove";
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
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
          ve(e) ? /* @__PURE__ */ n(
            "button",
            {
              onClick: K,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: E ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(Ye, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: tr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: E ? /* @__PURE__ */ t(ft, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(ye, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                children: /* @__PURE__ */ t(Va, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
            M !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: M,
                onChange: (R) => C(R.target.value),
                onClick: (R) => R.stopPropagation(),
                onKeyDown: (R) => {
                  R.stopPropagation(), R.key === "Enter" ? k() : R.key === "Escape" && C(null);
                },
                onBlur: k,
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
                onDoubleClick: (R) => {
                  R.stopPropagation(), C(e.title);
                },
                title: "Double-click to rename",
                children: e.title || y("musiccreator.track.untitled")
              }
            ),
            /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.durationMs > 0 ? De(e.durationMs) : y("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: v,
              onClick: (R) => {
                R.stopPropagation(), b ? P(null) : F();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: S || b ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(Wr, { size: 14 })
            }
          )
        ] }),
        b && Za(
          /* @__PURE__ */ n(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: b.x,
                top: b.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                ve(e) && /* @__PURE__ */ n(ue, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(va, { size: 14 }), label: y("musiccreator.track.playInPlayer"), onClick: W(() => d(e)) }),
                  /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(Wo, { size: 14 }), label: y("musiccreator.track.saveSongToDesktop"), onClick: W(() => s(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(yi, { size: 14 }), label: y("musiccreator.track.download"), onClick: W(se) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ n(ue, { children: [
                  ve(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(Va, { size: 14 }), label: y("musiccreator.track.openInEditor"), onClick: W(() => o(e)) }),
                  /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(Wo, { size: 14 }), label: y("musiccreator.track.saveLyricsToDesktop"), onClick: W(() => c(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(bi, { size: 14 }), label: "Rename", onClick: W(() => C(e.title)) }),
                /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(ba, { size: 14 }), label: "Edit cover art", onClick: W(() => m(e)) }),
                /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(Et, { size: 14 }), label: y("musiccreator.track.loadIntoForm"), onClick: W(() => r(e)) }),
                /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(At, { size: 14 }), label: y("musiccreator.track.delete"), onClick: W(() => a(e.id)), danger: !0 })
              ]
            }
          ),
          document.body
        ),
        E && /* @__PURE__ */ t(
          "div",
          {
            className: "mt-1.5 rounded-full overflow-hidden",
            style: { height: 2, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${I * 100}%`,
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
function Rd({
  trackIds: e,
  allTracks: a,
  player: r,
  onSelect: o
}) {
  const s = e.map((c) => a.find((d) => d.id === c)).filter((c) => !!c).slice(0, 6);
  return s.length === 0 ? null : /* @__PURE__ */ n("div", { className: "mb-2", children: [
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
    /* @__PURE__ */ t("div", { className: "flex gap-1.5 overflow-x-auto invisible-scrollbar pb-1", children: s.map((c) => {
      const d = r.state.trackId === c.id;
      return /* @__PURE__ */ n(
        "button",
        {
          onClick: () => o(c),
          className: "flex flex-col items-start flex-shrink-0 rounded-lg p-1.5 transition-all hover:bg-[var(--bg-hover)]",
          style: {
            width: 84,
            background: d ? "var(--bg-selected)" : "var(--bg-titlebar)",
            border: d ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)"
          },
          title: c.title || "Untitled",
          children: [
            /* @__PURE__ */ t(Ye, { track: c, size: 68, iconSize: 20, radius: 6 }),
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
function jd({
  track: e,
  player: a,
  selected: r,
  isFavorite: o,
  onOpenInPlayer: s,
  onRemix: c,
  onToggleFavorite: d,
  onRemove: f,
  selectMode: m = !1,
  checked: h = !1,
  onToggleCheck: w
}) {
  const u = ee(null), [y, v] = T(!1), [S, A] = T(null), b = a.state.trackId === e.id, P = b && a.state.loadingTrackId === e.id, M = b && a.state.playing, C = b && a.state.durationMs > 0 ? a.state.positionMs / a.state.durationMs : 0;
  q(() => {
    if (!S) return;
    const F = (K) => {
      const se = K.target;
      u.current && se && u.current.contains(se) || se && se.closest?.("[data-track-menu]") || A(null);
    }, W = () => A(null);
    return setTimeout(() => window.addEventListener("mousedown", F), 0), window.addEventListener("scroll", W, !0), window.addEventListener("resize", W), () => {
      window.removeEventListener("mousedown", F), window.removeEventListener("scroll", W, !0), window.removeEventListener("resize", W);
    };
  }, [S]);
  const k = () => {
    const F = u.current?.getBoundingClientRect();
    if (!F) return;
    const W = 220, K = Math.min(F.right - W, window.innerWidth - W - 8), se = F.bottom + 4;
    A({ x: K, y: se });
  }, N = (F) => () => {
    A(null), F();
  }, E = e.externalUrl;
  return /* @__PURE__ */ n(
    "div",
    {
      onMouseEnter: () => v(!0),
      onMouseLeave: () => v(!1),
      onClick: m ? () => {
        w && w(e);
      } : void 0,
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: m && h || r ? "var(--bg-selected)" : y ? "var(--bg-hover)" : "transparent",
        border: m && h || r ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: "pointer"
      },
      title: m ? h ? "Deselect" : "Select" : "Click to open in player",
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
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
              children: h ? /* @__PURE__ */ t(wi, { size: 20 }) : /* @__PURE__ */ t(ki, { size: 20 })
            }
          ) : /* @__PURE__ */ n(
            "button",
            {
              onClick: (F) => {
                F.stopPropagation(), a.toggle(e);
              },
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105",
              style: { width: 36, height: 36 },
              title: M ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(Ye, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: tr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: P ? /* @__PURE__ */ t(te, { size: 14, className: "animate-spin", style: { color: "white" } }) : M ? /* @__PURE__ */ t(ft, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(ye, { size: 14, style: { color: "white", marginLeft: 1 } })
                  }
                )
              ]
            }
          ),
          m ? /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "truncate",
                style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" },
                children: e.title || "Untitled"
              }
            ),
            /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.artist || "Unknown",
              e.durationMs > 0 ? ` · ${De(e.durationMs)}` : ""
            ] })
          ] }) : /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => s(e),
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
                /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  e.artist || "Unknown",
                  e.durationMs > 0 ? ` · ${De(e.durationMs)}` : ""
                ] })
              ]
            }
          ),
          !m && /* @__PURE__ */ t(
            "button",
            {
              ref: u,
              onClick: (F) => {
                F.stopPropagation(), S ? A(null) : k();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: y || S ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(Wr, { size: 14 })
            }
          )
        ] }),
        S && Za(
          /* @__PURE__ */ n(
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
                  Se,
                  {
                    icon: M ? /* @__PURE__ */ t(ft, { size: 14 }) : /* @__PURE__ */ t(ye, { size: 14 }),
                    label: M ? "Pause" : "Play",
                    onClick: N(() => a.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(va, { size: 14 }),
                    label: "Open in player",
                    onClick: N(() => s(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(zt, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: N(() => c(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(Ga, { size: 14, fill: o ? "currentColor" : "none" }),
                    label: o ? "Remove favorite" : "Add to favorites",
                    onClick: N(() => d(e))
                  }
                ),
                E && /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(fi, { size: 14 }),
                    label: "Open source",
                    onClick: N(() => window.open(E, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(At, { size: 14 }),
                    label: "Remove from Library",
                    onClick: N(() => f(e)),
                    danger: !0
                  }
                )
              ]
            }
          ),
          document.body
        ),
        M && /* @__PURE__ */ t(
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
function Pd({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: o
}) {
  const [s, c] = T(e.coverDataUrl), [d, f] = T(""), [m, h] = T(!1), [w, u] = T(null), y = ee(null), v = ee(null), S = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), A = Ja(S, "", e.styleTags || "");
  q(() => {
    const M = (C) => {
      C.key === "Escape" && (C.stopPropagation(), o());
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [o]), q(() => () => v.current?.abort(), []);
  const b = async () => {
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
    const M = v.current.signal;
    h(!0), u(null);
    try {
      const C = (d.trim() || A).slice(0, 1500), k = await Br(a, C, M);
      if (M.aborted) return;
      c(k);
    } catch (C) {
      if (C.name === "AbortError") return;
      u(C.message || "Cover-art generation failed.");
    } finally {
      h(!1);
    }
  }, P = (M) => {
    if (u(null), !M.type.startsWith("image/")) {
      u("That file is not an image.");
      return;
    }
    if (M.size > 4 * 1024 * 1024) {
      u("Image is too big (limit 4 MB).");
      return;
    }
    const C = new FileReader();
    C.onerror = () => u("Could not read that image."), C.onload = () => {
      const k = C.result;
      typeof k == "string" && c(k);
    }, C.readAsDataURL(M);
  };
  return Za(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.55)" },
        onClick: o,
        children: /* @__PURE__ */ n(
          "div",
          {
            className: "rounded-xl shadow-2xl",
            style: {
              width: 480,
              maxWidth: "calc(100vw - 48px)",
              background: "var(--bg-window)",
              border: "1px solid var(--border-default)"
            },
            onClick: (M) => M.stopPropagation(),
            children: [
              /* @__PURE__ */ n(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(ba, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ n("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: [
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
                        children: /* @__PURE__ */ t(fe, { size: 14 })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n("div", { className: "p-4 flex flex-col gap-3", children: [
                /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ n(
                    "div",
                    {
                      className: "rounded-lg overflow-hidden flex-shrink-0 relative",
                      style: {
                        width: 140,
                        height: 140,
                        background: s ? `url(${s}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)"
                      },
                      children: [
                        !s && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ba, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
                        m && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(te, { size: 24, className: "animate-spin", style: { color: "white" } }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col gap-2 min-w-0", children: [
                    /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: b,
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
                          m ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(al, { size: 12 }),
                          s ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => y.current?.click(),
                        disabled: m,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(Jr, { size: 12 }),
                          "Upload"
                        ]
                      }
                    ),
                    s && /* @__PURE__ */ n(
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
                          /* @__PURE__ */ t(fe, { size: 12 }),
                          "Clear"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ n("div", { children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }, children: "Prompt" }),
                  /* @__PURE__ */ t(
                    "textarea",
                    {
                      value: d,
                      onChange: (M) => f(M.target.value),
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
                w && /* @__PURE__ */ n(
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
                      /* @__PURE__ */ t(fa, { size: 12, style: { flexShrink: 0 } }),
                      w
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ n(
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
                          r(e.id, s), o();
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
                  ref: y,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (M) => {
                    const C = M.target.files?.[0];
                    C && P(C), M.target.value = "";
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
function Ba({ label: e, children: a }) {
  return /* @__PURE__ */ n("div", { children: [
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
function Dd({
  songName: e,
  mode: a,
  theme: r,
  style: o,
  intent: s,
  lyrics: c,
  specs: d,
  coverDataUrl: f,
  endpoint: m,
  busy: h,
  onRegenerate: w,
  onUpload: u,
  onClear: y,
  onClose: v
}) {
  const S = ee(null), A = ge(() => Yr(d), [d]), b = ge(() => qt(d), [d]);
  q(() => {
    const C = (k) => {
      k.key === "Escape" && (k.stopPropagation(), v());
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [v]);
  const P = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", M = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Za(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.6)" },
        onClick: v,
        children: /* @__PURE__ */ n(
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
              /* @__PURE__ */ n(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3 flex-shrink-0",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(Ct, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                        children: /* @__PURE__ */ t(fe, { size: 14 })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-5 flex gap-5", children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: "rounded-lg overflow-hidden flex-shrink-0 relative",
                    style: {
                      width: 320,
                      height: 320,
                      background: f ? `url(${f}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "var(--shadow-md)"
                    },
                    children: [
                      !f && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ba, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
                      h && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(te, { size: 28, className: "animate-spin", style: { color: "white" } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
                  /* @__PURE__ */ n("div", { children: [
                    /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }, children: M }),
                    o.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: o.trim() })
                  ] }),
                  /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ n(
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
                          h ? /* @__PURE__ */ t(te, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 11 }),
                          f ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ n(
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
                          /* @__PURE__ */ t(Jr, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    f && /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        onClick: y,
                        disabled: h,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(fe, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  r.trim() && /* @__PURE__ */ t(Ba, { label: "Theme", children: r.trim() }),
                  s.trim() && /* @__PURE__ */ t(Ba, { label: "Lyrics Direction", children: s.trim() }),
                  b > 0 && A && /* @__PURE__ */ t(Ba, { label: `Track Specs (${b} set)`, children: A }),
                  c.trim() && /* @__PURE__ */ t(Ba, { label: "Lyrics", children: /* @__PURE__ */ t(
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
                  !r.trim() && !s.trim() && b === 0 && !c.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
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
                    const k = C.target.files?.[0];
                    k && u(k), C.target.value = "";
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
function Ud(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function Od(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function Hd(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function $d(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function Fd(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: Z(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: Z(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: Z(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: Z(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: Z(e.tonal.mode) }), o.length && a.push({ label: "Tonal", rows: o });
  const s = [];
  if (e.instrumentation?.primary_instruments?.length && s.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(Z).join(", ") }), e.instrumentation?.has_vocals === !1)
    s.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const m = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && m.push(Z(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && m.push(e.instrumentation.vocal_style.map(Z).join("/")), s.push({ label: "Vocals", value: m.length ? m.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && s.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(Z).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && s.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), s.length && a.push({ label: "Instrumentation", rows: s });
  const c = [];
  e.dynamics?.overall_dynamic_range && c.push({ label: "Range", value: Z(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && c.push({ label: "Crescendo", value: Z(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && c.push({ label: "Big drops", value: "Yes" }), c.length && a.push({ label: "Dynamics", rows: c });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: Z(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(Z).join(", ") }), d.length && a.push({ label: "Mood", rows: d });
  const f = [];
  return e.context?.era_reference && f.push({ label: "Era", value: Z(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && f.push({ label: "Region", value: Z(e.context.cultural_region) }), e.context?.intended_use?.length && f.push({ label: "Use", value: e.context.intended_use.map(Z).join("/") }), e.context?.explicit_lyrics && f.push({ label: "Explicit", value: "Yes" }), f.length && a.push({ label: "Context", rows: f }), a;
}
function Ge({ label: e, value: a }) {
  return /* @__PURE__ */ n("div", { className: "flex items-baseline", style: { fontSize: 13, gap: 14 }, children: [
    /* @__PURE__ */ t("span", { style: {
      color: "var(--text-disabled)",
      flexShrink: 0,
      minWidth: 84,
      fontSize: 12
    }, children: e }),
    /* @__PURE__ */ t("span", { style: { color: "var(--text-primary)", lineHeight: 1.5 }, children: a })
  ] });
}
function Tt({ label: e, children: a }) {
  return /* @__PURE__ */ n(
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
function Bd({
  audioSrc: e,
  sourceLabel: a,
  onUserPlay: r
}) {
  return /* @__PURE__ */ n(
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
function Wd(e, a, r, o) {
  if (!e || a.length === 0) return null;
  if (o === "one") return { kind: "repeating" };
  const s = a.filter(ve);
  if (s.length === 0) return null;
  if (r) return { kind: "random" };
  const c = s.findIndex((d) => d.id === e);
  return c < 0 ? null : c + 1 < s.length ? { kind: "track", track: s[c + 1] } : o === "all" ? { kind: "track", track: s[0] } : { kind: "end" };
}
function qd({ text: e }) {
  const [a, r] = T(!1);
  return /* @__PURE__ */ n(
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
        a ? /* @__PURE__ */ t(Jt, { size: 11 }) : /* @__PURE__ */ t(gi, { size: 11 }),
        a ? "Copied" : "Copy"
      ]
    }
  );
}
const Jd = /^\s*\[([^\]]+)\]\s*$/;
function Gd({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, o) => {
    const s = r.match(Jd);
    return s ? /* @__PURE__ */ t(
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
        children: s[1].trim()
      },
      o
    ) : r.trim() === "" ? /* @__PURE__ */ t("div", { style: { height: 8 } }, o) : /* @__PURE__ */ t("div", { style: { whiteSpace: "pre-wrap" }, children: r }, o);
  }) });
}
function Vd({ track: e, player: a, restyleOriginal: r, onEditInCreator: o, onSwitchToCreator: s, onSearchMusic: c }) {
  const { t: d } = It(), f = e?.specsJson ?? "", m = ge(() => {
    if (!f) return {};
    try {
      return JSON.parse(f);
    } catch {
      return {};
    }
  }, [f]), h = (m.intent ?? "").trim(), w = ge(() => Fd(m), [m]);
  if (!e)
    return /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-8", style: { background: "var(--bg-window)" }, children: [
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
      /* @__PURE__ */ n(
        "button",
        {
          onClick: s,
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
            /* @__PURE__ */ t(Oe, { size: 13 }),
            d("musiccreator.player.empty.openCreator")
          ]
        }
      ),
      c && /* @__PURE__ */ n(
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
            /* @__PURE__ */ t(lt, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const u = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", y = ve(e), v = tr(e), S = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", A = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", b = a.state.trackId === e.id, P = b && a.state.playing, M = b && a.state.loadingTrackId === e.id, C = e.source === "youtube", k = a.queue.filter((N) => N.id !== e.id && (N.artist || "").trim() && N.artist === e.artist).slice(0, 4);
  return /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden relative", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ n("div", { className: "flex-shrink-0 relative overflow-hidden", children: [
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
      /* @__PURE__ */ n("div", { className: "relative px-7 pt-8 pb-7 flex flex-wrap gap-7 items-end", children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => {
              y && a.toggle(e);
            },
            disabled: !y,
            className: "rounded-lg overflow-hidden flex-shrink-0 relative group disabled:cursor-not-allowed",
            style: {
              width: 220,
              height: 220,
              background: v ? `url(${v}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              cursor: y ? "pointer" : "default"
            },
            title: y ? b && P ? "Pause" : "Play" : "Lyric sheet — no audio",
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
              y && /* @__PURE__ */ t(
                "div",
                {
                  className: "absolute inset-0 flex items-center justify-center transition-opacity",
                  style: {
                    background: "rgba(0,0,0,0.35)",
                    opacity: b && P ? 0 : 1
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
                      children: b && P ? /* @__PURE__ */ t(ft, { size: 30, style: { color: "white" } }) : M ? /* @__PURE__ */ t(te, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(ye, { size: 30, style: { color: "white", marginLeft: 3 } })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 flex flex-col", style: { minWidth: 280 }, children: [
          /* @__PURE__ */ n(
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
                y ? /* @__PURE__ */ t(ye, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(Et, { size: 10 }),
                C ? "YouTube track" : d(y ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
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
          /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center flex-wrap",
              style: { fontSize: 13, color: "rgba(255,255,255,0.85)", gap: 8 },
              children: [
                /* @__PURE__ */ t(Ni, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: S }),
                e.source === "youtube" && e.album && e.album !== S && /* @__PURE__ */ n(ue, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                A && /* @__PURE__ */ n(ue, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: A })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ n(ue, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: De(e.durationMs) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ n("div", { className: "mt-5 flex items-center gap-3 flex-wrap", children: [
            y && /* @__PURE__ */ t(
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
                title: b && P ? "Pause" : "Play",
                children: M ? /* @__PURE__ */ n(ue, { children: [
                  /* @__PURE__ */ t(te, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : b && P ? /* @__PURE__ */ n(ue, { children: [
                  /* @__PURE__ */ t(ft, { size: 16 }),
                  " ",
                  d("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ n(ue, { children: [
                  /* @__PURE__ */ t(ye, { size: 16, style: { marginLeft: 2 } }),
                  " ",
                  d("musiccreator.player.play")
                ] })
              }
            ),
            /* @__PURE__ */ n(
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
                  /* @__PURE__ */ t(zt, { size: 13 }),
                  d("musiccreator.player.remixInRestyle")
                ]
              }
            ),
            e.audioDataUrl && y && /* @__PURE__ */ n(
              "button",
              {
                onClick: () => {
                  const N = document.createElement("a");
                  N.href = e.audioDataUrl, N.download = `${(e.title || "track").replace(/[\\/:*?"<>|]/g, "_")}.mp3`, document.body.appendChild(N), N.click(), document.body.removeChild(N);
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
    /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-7", children: /* @__PURE__ */ n("div", { className: "flex flex-wrap gap-6 items-start", children: [
      /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", style: { minWidth: 320, maxWidth: 720 }, children: [
        /* @__PURE__ */ n(
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
              e.lyricsPreview && /* @__PURE__ */ t(qd, { text: e.lyricsPreview })
            ]
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(Gd, { text: e.lyricsPreview }) : C ? /* @__PURE__ */ n(
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
              /* @__PURE__ */ n("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(el, { size: 18 }) }),
                /* @__PURE__ */ n("div", { children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: "Streamed track" }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: "No lyrics stored. This area is now a live track dashboard instead of an empty lyrics box." })
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }, children: [
                /* @__PURE__ */ n("div", { className: "rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, textTransform: "uppercase", letterSpacing: 0.8, color: "var(--text-disabled)", fontWeight: 800 }, children: "Artist" }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.artist || "Unknown artist" })
                ] }),
                /* @__PURE__ */ n("div", { className: "rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, textTransform: "uppercase", letterSpacing: 0.8, color: "var(--text-disabled)", fontWeight: 800 }, children: "Channel / Album" }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.album || e.artist || "Unknown" })
                ] }),
                /* @__PURE__ */ n("div", { className: "rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, textTransform: "uppercase", letterSpacing: 0.8, color: "var(--text-disabled)", fontWeight: 800 }, children: "Duration" }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.durationMs ? De(e.durationMs) : "Unknown" })
                ] })
              ] }),
              e.externalUrl && /* @__PURE__ */ n(
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
        ) : /* @__PURE__ */ n(
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
              /* @__PURE__ */ t(Et, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: d("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        r && r.trackId === e.id && /* @__PURE__ */ t(
          Bd,
          {
            audioSrc: r.audioSrc,
            sourceLabel: r.sourceLabel,
            onUserPlay: () => {
              a.state.playing && a.pause();
            }
          }
        ),
        e.id === a.state.trackId && (() => {
          const N = Wd(
            a.state.trackId,
            a.queue,
            a.state.shuffle,
            a.state.repeatMode
          );
          return N ? /* @__PURE__ */ n(Tt, { label: "Up next", children: [
            N.kind === "track" && /* @__PURE__ */ n("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ t(Ye, { track: N.track, size: 32, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: N.track.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: N.track.artist || (N.track.styleTags && N.track.styleTags !== "—" ? N.track.styleTags : "JULI3TA") })
              ] })
            ] }),
            N.kind === "random" && /* @__PURE__ */ n("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(qr, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Random next track from your queue." })
            ] }),
            N.kind === "repeating" && /* @__PURE__ */ n("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(vi, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Repeating this track." })
            ] }),
            N.kind === "end" && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-disabled)" }, children: "End of queue." })
          ] }) : null;
        })(),
        e.theme.trim() && /* @__PURE__ */ t(Tt, { label: d("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        h && /* @__PURE__ */ t(Tt, { label: d("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: h }) }),
        w.map((N) => /* @__PURE__ */ t(Tt, { label: N.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: N.rows.map((E) => /* @__PURE__ */ t(Ge, { label: E.label, value: E.value }, `${N.label}-${E.label}`)) }) }, N.label)),
        C && /* @__PURE__ */ t(Tt, { label: "Artist / Source", children: /* @__PURE__ */ n("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(gl, { size: 20 }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        k.length > 0 && /* @__PURE__ */ t(Tt, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: k.map((N) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => a.select(N),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(Ye, { track: N, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: N.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: N.durationMs ? De(N.durationMs) : "Streamed" })
              ] })
            ]
          },
          N.id
        )) }) }),
        /* @__PURE__ */ t(Tt, { label: d("musiccreator.player.about"), children: /* @__PURE__ */ n("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(Ge, { label: d("musiccreator.player.about.created"), value: $d(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(Ge, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(Ge, { label: "Channel", value: e.album }),
          y && e.durationMs > 0 && /* @__PURE__ */ t(Ge, { label: d("musiccreator.player.about.duration"), value: De(e.durationMs) }),
          e.source !== "youtube" && y && e.bitrate > 0 && /* @__PURE__ */ t(Ge, { label: d("musiccreator.player.about.bitrate"), value: Od(e.bitrate) }),
          e.source !== "youtube" && y && e.sampleRate > 0 && /* @__PURE__ */ t(Ge, { label: d("musiccreator.player.about.sampleRate"), value: Hd(e.sampleRate) }),
          e.source !== "youtube" && y && e.sizeBytes > 0 && /* @__PURE__ */ t(Ge, { label: d("musiccreator.player.about.size"), value: Ud(e.sizeBytes) }),
          A && /* @__PURE__ */ t(Ge, { label: d("musiccreator.player.about.style"), value: A }),
          /* @__PURE__ */ t(Ge, { label: d("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : d(y ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Yd({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: o,
  searchHistory: s,
  onClearSearchHistory: c,
  resultType: d,
  onResultTypeChange: f,
  results: m,
  busy: h,
  error: w,
  status: u,
  providers: y,
  connectors: v,
  libraryTracks: S,
  playlists: A,
  playlistNameDraft: b,
  playlistBusy: P,
  favoriteIds: M,
  warmupIds: C,
  previewBusyId: k,
  addBusyId: N,
  savedYoutubeIds: E,
  player: I,
  onPreview: F,
  onAdd: W,
  onOpenTrack: K,
  onToggleFavorite: se,
  onRemoveLibraryTrack: U,
  onPlaylistNameDraftChange: R,
  onCreatePlaylist: ie,
  onAddTrackToPlaylist: Ke,
  onRemoveTrackFromPlaylist: ze,
  onPlayPlaylist: rr,
  onDeletePlaylist: Xe,
  onConfigureConnector: Kt,
  onDisconnectConnector: xe,
  onClose: xa
}) {
  const [Y, Le] = T(null), [wa, bt] = T({}), [Qe, Ie] = T(!1), [He, Te] = T(null), [Mt, Ne] = T(null), [we, ct] = T(null);
  q(() => {
    Ne(null), ct(null);
  }, [e]);
  const or = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(S.map((g) => g.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(S.map((g) => g.album || g.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: A.length },
    { id: "sources", label: "Sources", count: y.length || 4 }
  ], dt = (g) => {
    const j = I.state.trackId === g.id, H = j && I.state.loadingTrackId === g.id, le = j && I.state.playing;
    return /* @__PURE__ */ n(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(Ye, { track: g, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ n("button", { type: "button", onClick: () => K(g), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: g.title }),
            /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              g.artist || "Unknown",
              g.album ? ` · ${g.album}` : "",
              g.durationMs ? ` · ${De(g.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => se(g),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: M.has(g.id) ? "white" : "var(--text-secondary)",
                background: M.has(g.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: M.has(g.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(Ga, { size: 13, fill: M.has(g.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => I.toggle(g),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                H ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : le ? /* @__PURE__ */ t(ft, { size: 12 }) : /* @__PURE__ */ t(ye, { size: 12 }),
                H ? "Loading" : le ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => U(g),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t(At, { size: 13 })
            }
          )
        ]
      },
      g.id
    );
  }, Xt = Array.from(
    S.reduce((g, j) => {
      const H = (j.artist || "Unknown artist").trim();
      return g.set(H, [...g.get(H) ?? [], j]), g;
    }, /* @__PURE__ */ new Map())
  ).sort((g, j) => g[0].localeCompare(j[0])), ut = Array.from(
    S.reduce((g, j) => {
      const H = (j.album || j.artist || "YouTube collection").trim();
      return g.set(H, [...g.get(H) ?? [], j]), g;
    }, /* @__PURE__ */ new Map())
  ).sort((g, j) => g[0].localeCompare(j[0])), Qt = y.length > 0 ? y.map((g) => {
    const j = v.find((pt) => pt.provider === g.id), H = j?.connected ?? g.configured, le = j?.oauthRequired ?? g.state === "oauth_required";
    return {
      id: g.id,
      name: g.name,
      state: H ? "Connected" : le ? "OAuth required" : g.state.replace(/_/g, " "),
      body: j?.message ?? g.message,
      action: H ? "Manage" : le ? "Coming soon" : "Configure",
      enabled: H,
      needs: g.needs,
      kind: g.kind,
      connector: j,
      oauthRequired: le,
      configurable: j?.configurable ?? !le
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
      connector: v.find((g) => g.provider === "spotify"),
      oauthRequired: !0,
      configurable: !1
    },
    {
      id: "lastfm",
      name: "Last.fm",
      state: v.find((g) => g.provider === "lastfm")?.connected ? "Connected" : "Metadata connector",
      body: "Artist bios, tags and now-playing style metadata. API key required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["apiKey"],
      kind: "metadata",
      connector: v.find((g) => g.provider === "lastfm"),
      oauthRequired: !1,
      configurable: !0
    },
    {
      id: "discogs",
      name: "Discogs",
      state: v.find((g) => g.provider === "discogs")?.connected ? "Connected" : "Metadata connector",
      body: "Release/catalog metadata and album artwork. Token required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["token"],
      kind: "catalog",
      connector: v.find((g) => g.provider === "discogs"),
      oauthRequired: !1,
      configurable: !0
    }
  ];
  return /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ n("div", { className: "flex-shrink-0 px-7 pt-6 pb-4", style: { borderBottom: "1px solid var(--border-subtle)" }, children: [
      /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ t("div", { style: { fontSize: 24, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.03em" }, children: "Music" }),
          /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Discover new music, browse by artist or album, manage playlists and sources." })
        ] }),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
          u && /* @__PURE__ */ n(
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
              onClick: xa,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(fe, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: or.map((g) => /* @__PURE__ */ n(
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
      e === "search" && /* @__PURE__ */ n("div", { className: "flex items-center gap-2 rounded-xl px-4", style: { height: 44, background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
        /* @__PURE__ */ t(lt, { size: 16, style: { color: "var(--text-disabled)" } }),
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
        h && /* @__PURE__ */ t(te, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(fe, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((g) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => f(g),
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
      e === "search" && r.trim().length < 2 && s.length > 0 && /* @__PURE__ */ n("div", { className: "mt-3 flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.7, fontWeight: 800 }, children: "Recent" }),
        s.map((g) => /* @__PURE__ */ t(
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
            children: /* @__PURE__ */ t(fe, { size: 11 })
          }
        )
      ] }),
      w && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: w })
    ] }),
    /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-2", children: [
        r.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        r.trim().length >= 2 && !h && m.length === 0 && !w && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        h && m.length === 0 && Array.from({ length: 5 }).map((g, j) => /* @__PURE__ */ n(
          "div",
          {
            className: "flex items-center gap-3 rounded-xl px-3 py-2",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", opacity: 0.78 },
            children: [
              /* @__PURE__ */ t("div", { className: "animate-pulse", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "var(--bg-hover)" } }),
              /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 12, width: `${70 - j * 6}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)" } }),
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 10, width: `${45 - j * 4}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)", marginTop: 8 } })
              ] }),
              /* @__PURE__ */ t(te, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${j}`
        )),
        m.map((g) => {
          const j = qi(g.title, g.channel), H = E.has(g.id), le = k === g.id, pt = N === g.id, Me = C.has(g.id);
          return /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                g.thumbnailUrl || Xa(g.id) ? /* @__PURE__ */ t("img", { src: g.thumbnailUrl || Xa(g.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(va, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: j.song }),
                  /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    j.artist || g.channel || "Music",
                    g.durationMs ? ` · ${De(g.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: g.title })
                ] }),
                Me && !le && /* @__PURE__ */ n("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(te, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => F(g),
                    disabled: le,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      le ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(ye, { size: 12 }),
                      le ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => W(g),
                    disabled: H || pt,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: H ? "var(--text-disabled)" : "white", background: H ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      pt ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : H ? /* @__PURE__ */ t(Jt, { size: 12 }) : /* @__PURE__ */ t(Or, { size: 12 }),
                      pt ? "Adding" : H ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            g.id
          );
        })
      ] }),
      e === "artists" && (Mt !== null ? (() => {
        const g = Xt.find(([j]) => j === Mt)?.[1] ?? [];
        return /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => Ne(null),
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
                  /* @__PURE__ */ t(Fo, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Mt }),
              /* @__PURE__ */ n("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                g.length,
                " track",
                g.length === 1 ? "" : "s",
                " in your Library"
              ] })
            ] }),
            g[0] && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => K(g[0]),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(ye, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: g.map(dt) })
        ] });
      })() : /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Xt.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Xt.map(([g, j]) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => Ne(g),
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            title: `Open ${g}`,
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: g }),
              /* @__PURE__ */ n("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                j.length,
                " track",
                j.length === 1 ? "" : "s"
              ] })
            ]
          },
          g
        ))
      ] })),
      e === "albums" && (we !== null ? (() => {
        const j = ut.find(([le]) => le === we)?.[1] ?? [], H = j[0];
        return /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => ct(null),
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
                  /* @__PURE__ */ t(Fo, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            H && /* @__PURE__ */ t(Ye, { track: H, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: we }),
              /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                H?.artist || "Mixed artists",
                " · ",
                j.length,
                " track",
                j.length === 1 ? "" : "s"
              ] })
            ] }),
            H && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => K(H),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(ye, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: j.map(dt) })
        ] });
      })() : /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        ut.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        ut.map(([g, j]) => {
          const H = j[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ct(g),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${g}`,
              children: /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
                H && /* @__PURE__ */ t(Ye, { track: H, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ n("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: g }),
                  /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    H?.artist || "Mixed artists",
                    " · ",
                    j.length,
                    " track",
                    j.length === 1 ? "" : "s"
                  ] })
                ] })
              ] })
            },
            g
          );
        })
      ] })),
      e === "playlists" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ t("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ n("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Fs, { size: 22 }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: b,
              onChange: (g) => R(g.target.value),
              onKeyDown: (g) => {
                g.key === "Enter" && ie();
              },
              placeholder: "New playlist name…",
              className: "rounded-lg bg-transparent outline-none px-3",
              style: { height: 34, minWidth: 180, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)", fontSize: 12, fontWeight: 700 }
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: ie,
              disabled: P,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                P ? /* @__PURE__ */ t(te, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Or, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        A.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : A.map((g) => /* @__PURE__ */ n("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-3 mb-3", children: [
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: g.name }),
              /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 3 }, children: [
                g.items.length,
                " track",
                g.items.length === 1 ? "" : "s"
              ] })
            ] }),
            /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  onClick: () => rr(g),
                  disabled: g.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(ye, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => Xe(g.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(At, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: g.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : g.items.map((j) => /* @__PURE__ */ n("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(Ye, { track: j, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ n("button", { type: "button", onClick: () => K(j), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: j.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: j.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => ze(g.id, j.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(fe, { size: 13 })
              }
            )
          ] }, `${g.id}-${j.id}`)) }),
          S.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: S.slice(0, 8).filter((j) => !g.items.some((H) => H.id === j.id)).map((j) => /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => Ke(g.id, j),
              className: "rounded-full px-3",
              style: { height: 28, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              children: [
                "+ ",
                j.title.slice(0, 28)
              ]
            },
            `${g.id}-add-${j.id}`
          )) })
        ] }, g.id))
      ] }),
      e === "sources" && /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        Qt.map((g) => /* @__PURE__ */ n(
          "div",
          {
            className: "rounded-2xl p-4",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ n("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ t(
                  "div",
                  {
                    className: "flex items-center justify-center rounded-xl flex-shrink-0",
                    style: { width: 46, height: 46, color: "white", background: g.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: g.name === "Spotify" ? "♬" : g.name === "YouTube" ? /* @__PURE__ */ t(ye, { size: 18 }) : g.kind === "catalog" ? /* @__PURE__ */ t(vs, { size: 18 }) : /* @__PURE__ */ t(Ct, { size: 18 })
                  }
                ),
                /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: g.name }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 11, color: g.enabled ? "var(--status-success)" : "var(--text-secondary)", marginTop: 2 }, children: g.state }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.45, marginTop: 10 }, children: g.body })
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const j = g.connector?.credentialSpecs ?? g.needs.map((H) => ({ name: H, label: H, secret: !0, required: !0 }));
                      bt({}), Te(null), Le({
                        id: g.id,
                        name: g.name,
                        body: g.body,
                        specs: j,
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
                g.connector?.account && /* @__PURE__ */ n("span", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                  "@",
                  g.connector.account
                ] })
              ] })
            ]
          },
          g.name
        )),
        Y && /* @__PURE__ */ n("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ n("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ n("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                Y.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: Y.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => Le(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(fe, { size: 16 }) })
          ] }),
          Y.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ n(ue, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: Y.specs.map((g) => /* @__PURE__ */ n("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: g.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: g.label || g.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: wa[g.name] ?? "",
                  type: g.secret ? "password" : "text",
                  onChange: (j) => bt((H) => ({ ...H, [g.name]: j.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: g.name
                }
              )
            ] }, g.name)) }),
            He && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: He }),
            /* @__PURE__ */ n("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  disabled: Qe || !Y.configurable,
                  onClick: () => {
                    Ie(!0), Te(null), Kt(Y.id, wa).then(() => {
                      bt({}), Le(null);
                    }).catch((g) => Te(g.message || "Connector setup failed.")).finally(() => Ie(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Qe ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Jt, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              Y.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Qe,
                  onClick: () => {
                    Ie(!0), Te(null), xe(Y.id).then(() => Le(null)).catch((g) => Te(g.message || "Disconnect failed.")).finally(() => Ie(!1));
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
function Kd() {
  const e = zl(), { t: a } = It(), r = Il(), o = Pl(), { state: s, dispatch: c } = _i(), { addNotification: d } = Ol(), f = s.theme.mode, [m, h] = T("compose"), [w, u] = T(!1), [y, v] = T("creator"), [S, A] = T(() => {
    try {
      const i = localStorage.getItem("juli3ta:selectedPlayerTrackId");
      return i && i.length > 0 ? i : null;
    } catch {
      return null;
    }
  });
  q(() => {
    try {
      S ? localStorage.setItem("juli3ta:selectedPlayerTrackId", S) : localStorage.removeItem("juli3ta:selectedPlayerTrackId");
    } catch {
    }
  }, [S]);
  const [b, P] = T(""), [M, C] = T(""), [k, N] = T(null), [E, I] = T(""), [F, W] = T(""), [K, se] = T(!1), [U, R] = T(""), [ie, Ke] = T(""), [ze, rr] = T(!0), [Xe, Kt] = T(!1), [xe, xa] = T(null), [Y, Le] = T({}), [wa, bt] = T(!1), [Qe, Ie] = T(null), [He, Te] = T(null), [Mt, Ne] = T(null), [we, ct] = T(!1), [or, dt] = T(!1), [Xt, ut] = T(!1), [Qt, g] = T([]), j = ee(null), H = ee(null), [le, pt] = T(!1), [Me, Kr] = T("best"), [Gi, Vi] = T(null), [Yi, ka] = T(!1), [Ze, Xr] = T("mic"), [$e, ir] = T(!1), [Qr, Zr] = T(0), [eo, Zt] = T(null), to = ee(null), Sa = ee([]), Rt = ee(null), nr = ee(0), ea = ee(null), [jt, Fe] = T("idle"), [ta, G] = T(null), [Ki, Pt] = T(0), [ao, ro] = T(0), [vt, Re] = T([]), [Dt, re] = T(null), [Ce, oo] = T(""), [aa, io] = T("cards"), [pe, no] = T(() => {
    try {
      return localStorage.getItem("juli3ta:sidebarTab") === "library" ? "library" : "mywork";
    } catch {
      return "mywork";
    }
  }), [je, Xi] = T(() => {
    try {
      const i = localStorage.getItem("juli3ta:myWorkChip");
      if (i === "all" || i === "songs" || i === "restyles" || i === "lyrics") return i;
    } catch {
    }
    return "all";
  }), [et, so] = T(() => {
    try {
      return localStorage.getItem("juli3ta:libraryChip") === "favorites" ? "favorites" : "all";
    } catch {
      return "all";
    }
  });
  q(() => {
    try {
      localStorage.setItem("juli3ta:sidebarTab", pe);
    } catch {
    }
  }, [pe]), q(() => {
    try {
      localStorage.setItem("juli3ta:myWorkChip", je);
    } catch {
    }
  }, [je]), q(() => {
    try {
      localStorage.setItem("juli3ta:libraryChip", et);
    } catch {
    }
  }, [et]);
  const [Ta, Qi] = T(() => {
    try {
      const i = localStorage.getItem("juli3ta:recentlyPlayedIds"), l = i ? JSON.parse(i) : null;
      return Array.isArray(l) ? l.filter((p) => typeof p == "string").slice(0, 8) : [];
    } catch {
      return [];
    }
  });
  q(() => {
    try {
      localStorage.setItem("juli3ta:recentlyPlayedIds", JSON.stringify(Ta));
    } catch {
    }
  }, [Ta]);
  const [xt, sr] = T(!1), [tt, _a] = T(() => /* @__PURE__ */ new Set()), [at, Ue] = T(!1), [Zi, ra] = T("search"), [lr, en] = T(""), [tn, lo] = T(() => {
    try {
      const i = localStorage.getItem("juli3ta:searchHistory"), l = i ? JSON.parse(i) : null;
      return Array.isArray(l) ? l.filter((p) => typeof p == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), co = L((i) => {
    const l = i.trim();
    l.length < 2 || lo((p) => {
      const x = [l, ...p.filter((_) => _.toLowerCase() !== l.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(x));
      } catch {
      }
      return x;
    });
  }, []), [oa, an] = T("tracks"), [rn, cr] = T([]), [on, Na] = T(!1), [nn, rt] = T(null), [sn, uo] = T(null), [ln, po] = T([]), [cn, mo] = T([]), [ot, ho] = T({}), [dn, go] = T(() => /* @__PURE__ */ new Set()), [un, yo] = T(null), [pn, fo] = T(null), [bo, vo] = T([]), [be, dr] = T([]), [Ca, ur] = T(() => /* @__PURE__ */ new Set()), [pr, Ut] = T([]), [mr, xo] = T(""), [mn, wo] = T(!1), ko = ee(/* @__PURE__ */ new Map()), hr = ee(/* @__PURE__ */ new Map()), gr = ee(/* @__PURE__ */ new Set()), [Ea, ia] = T(null), [Aa, So] = T(!1), [yr, To] = T(zi), [hn, fr] = T(!1);
  q(() => {
    let i = !1;
    return (async () => {
      try {
        await Promise.all([
          cd(),
          yc()
        ]);
      } catch ($) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", $);
      }
      await lc().catch(($) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", $);
      });
      const [l, p, x, _, z, O, Q] = await Promise.allSettled([
        Wl(),
        Ir(),
        tc(),
        Yo(),
        nc(),
        cc("track"),
        ua()
      ]);
      if (i) return;
      const ke = l.status === "fulfilled" ? l.value : [], We = p.status === "fulfilled" ? p.value.tracks.map(($) => ({ ...$, source: "juli3ta" })) : [];
      p.status === "fulfilled" && (ia(p.value.rootPath), re(($) => $?.startsWith("Real file library unavailable") ? null : $)), l.status === "fulfilled" ? Re(pa(We, ke)) : (console.error("[Juli3ta] listTracks failed:", l.reason), Re(pa(We)), re("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), p.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", p.reason), re("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const kt = new Set(We.map(($) => $.id)), qe = new Set(ke.map(($) => $.id)), he = ke.filter(($) => !kt.has($.id) && Dc($)), Ee = We.filter(($) => !qe.has($.id));
      (he.length > 0 || Ee.length > 0) && (async () => {
        const $ = [];
        for (const ce of he)
          try {
            const oe = await Zo({ ...ce, source: "juli3ta" });
            $.push({ ...ce, ...oe, source: "juli3ta" });
          } catch (oe) {
            console.warn("[Juli3ta] host file backfill failed:", ce.id, oe);
          }
        for (const ce of Ee)
          try {
            await Ka({ ...ce, source: "juli3ta" });
          } catch (oe) {
            console.warn("[Juli3ta] standalone cache backfill failed:", ce.id, oe);
          }
        !i && ($.length > 0 || Ee.length > 0) && (Re((ce) => pa($, Ee, ce)), Ir().then((ce) => ia(ce.rootPath)).catch(() => {
        }));
      })(), x.status === "fulfilled" && To(x.value), _.status === "fulfilled" && g(_.value), z.status === "fulfilled" && dr(z.value), O.status === "fulfilled" && ur(new Set(O.value.map(($) => $.entityId))), Q.status === "fulfilled" && Ut(Q.value);
    })(), () => {
      i = !0;
    };
  }, []), q(() => {
    if (!Dt?.startsWith("Real file library unavailable")) return;
    let i = !1;
    const l = async () => {
      try {
        const x = await Ir();
        if (i) return;
        ia(x.rootPath), Re((_) => pa(x.tracks.map((z) => ({ ...z, source: "juli3ta" })), _)), re((_) => _?.startsWith("Real file library unavailable") ? null : _);
      } catch {
      }
    }, p = window.setInterval(l, 4e3);
    return l(), () => {
      i = !0, window.clearInterval(p);
    };
  }, [Dt]);
  const br = L(async (i) => {
    try {
      const l = await Zo({ ...i, source: "juli3ta" }), p = { ...i, ...l, source: "juli3ta" };
      return await Ka(p), ia(l.folderPath?.split("/").slice(0, -1).join("/") || Ea), re(null), Re((x) => pa([p], x)), !0;
    } catch (l) {
      const p = l.message || "Real file save failed";
      return re(`Couldn't save "${i.title}" as a real file — ${p}.`), !1;
    }
  }, [Ea]), gn = L(async (i) => {
    To(i);
    try {
      await ac(i);
    } catch (l) {
      console.warn("Settings save failed:", l);
    }
  }, []), za = ge(
    () => e.state ? dd(e.state.agents, e.state.included) : [],
    [e.state]
  ), [La, yn] = T([]), [fn, bn] = T(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [vn, _o] = T(!0), J = La.find((i) => i.podId === fn) ?? La[0] ?? null, vr = L(async () => {
    _o(!0);
    const i = new AbortController(), l = await hd(za, i.signal);
    yn(l), _o(!1);
  }, [za]);
  q(() => {
    za.length !== 0 && queueMicrotask(() => void vr());
  }, [za, vr]);
  const xn = L((i) => {
    bn(i);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", i);
    } catch {
    }
  }, []), na = ee(null), me = ee(null), sa = ee(null), Ia = ee(!1);
  q(() => () => {
    na.current?.abort(), me.current?.abort();
  }, []), q(() => {
    if (jt === "idle") {
      queueMicrotask(() => {
        Pt(0), ro(0);
      });
      return;
    }
    const i = Date.now(), l = () => {
      const _ = (Date.now() - i) / 1e3, z = jt === "lyrics" ? Math.min(0.95, _ / 5) : Math.min(0.95, 1 - Math.exp(-_ / 35));
      Pt(z);
    };
    l();
    const p = setInterval(l, 250), x = setInterval(() => ro((_) => _ + 1), 4500);
    return () => {
      clearInterval(p), clearInterval(x);
    };
  }, [jt]);
  const la = L((i) => {
    if (!i.lyricsPreview) return null;
    const l = o.ensureUserFolder("Music");
    if (!l) return null;
    const p = `${$a(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, x = o.findChildByName(l, p);
    return x ? (o.writeFile(x.id, i.lyricsPreview), x.id) : o.createFile(l, p, i.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [o]), No = L((i) => {
    if (!i.audioDataUrl) return null;
    const l = o.ensureUserFolder("Music");
    if (!l) return null;
    const p = `${$a(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, x = o.findChildByName(l, p);
    return x ? x.id : o.createFile(l, p, "", {
      mimeType: "audio/mpeg",
      refTrackId: i.id
    });
  }, [o]), wn = L(async () => {
    if (!J) {
      G(a("musiccreator.error.noPod"));
      return;
    }
    if (m === "restyle" && !He) {
      G(we ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (Ia.current) return;
    Ia.current = !0, G(null), na.current?.abort();
    const i = new AbortController();
    na.current = i;
    try {
      const l = yr.overridesByEndpoint[J.url] ?? {}, p = {
        ...J,
        models: {
          music: l.music || J.models.music,
          cover: l.cover || J.models.cover,
          lyrics: l.lyrics || J.models.lyrics,
          lyricsBackup: l.lyricsBackup || J.models.lyricsBackup,
          image: l.image || J.models.image,
          allIds: J.models.allIds
        }
      }, x = Yr(Y);
      let _ = M.trim(), z = F.trim(), O = E.trim(), Q = null;
      if (!_ && !K) {
        if (!b.trim() && !(Y.intent ?? "").trim()) {
          G(a("musiccreator.error.noInput"));
          return;
        }
        Fe("lyrics");
        const de = [];
        b.trim() && de.push(b.trim());
        const _r = (Y.intent ?? "").trim();
        _r && de.push(`User intent (must respect): ${_r}`), x && de.push(`Musical context: ${x}`), k && de.push(`Structure: ${k.prompt}`);
        const ds = de.join(`

`);
        Q = await bd(p, ds, i.signal), _ = Q.lyrics, z || (z = Q.song_title), O || (O = Q.style_tags);
      } else !_ && K && (_ = `[Intro]
[Instrumental]
[Outro]`);
      if (Q && (C(Q.lyrics), z === "Untitled" && (z = ""), z && !F.trim() && W(z), O && !E.trim() && I(O), Q.usedFallback && re(
        `Primary lyrics model errored — used backup chat model "${p.models.lyricsBackup ?? "unknown"}" instead.`
      )), _.length > Ft) {
        G(a("musiccreator.error.lyricsTooLong", { count: _.length, max: Ft })), Fe("idle");
        return;
      }
      if (z.trim() || (z = nd(_, b, O || E), z && z !== "Untitled" && !F.trim() && W(z)), m === "lyricsOnly") {
        const de = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (z || a("musiccreator.track.untitled")) + " (lyrics)",
          styleTags: O || "—",
          lyricsPreview: _,
          // store the full text — used by Load
          durationMs: 0,
          bitrate: 0,
          sampleRate: 0,
          sizeBytes: 0,
          createdAt: Date.now(),
          audioDataUrl: "",
          // no audio
          specsJson: qt(Y) > 0 ? JSON.stringify(Y) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: U,
          theme: b
        };
        await br(de) && la(de), Fe("idle"), Pt(0);
        return;
      }
      if (m === "restyle" && !He) {
        G(we ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), Fe("idle");
        return;
      }
      Fe("song");
      const ke = [O, x].filter((de) => de && de.length > 0).join(". "), We = vd(
        p,
        {
          lyrics: _,
          prompt: ke || void 0,
          instrumental: K,
          refAudioBase64: m === "restyle" ? He ?? void 0 : void 0
        },
        i.signal
      ), kt = ze && !U && !!p.models.image, qe = U, he = kt ? Br(
        p,
        (ie.trim() || Ja(z, b, O || E)).slice(0, 1500),
        i.signal
      ).catch((de) => {
        if (de.name === "AbortError") throw de;
        return console.warn("[Juli3ta] Cover-art generation failed:", de), re(`Cover-art skipped: ${de.message}`), qe;
      }) : Promise.resolve(qe), Ee = await Promise.allSettled([We, he]), $ = Ee[0], ce = Ee[1];
      if ($.status === "rejected")
        throw i.abort(), $.reason;
      const oe = $.value, yt = ce.status === "fulfilled" ? ce.value : qe;
      if (!oe?.data?.audio || typeof oe.data.audio != "string" || oe.data.audio.length < 100) {
        const de = oe?.trace_id ? ` (trace ${oe.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${de}. Try again or pick a different model in Settings.`);
      }
      const ls = `data:audio/mpeg;base64,${oe.data.audio}`, cs = m === "restyle" ? " (restyle)" : "", st = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (z || a("musiccreator.track.untitled")) + cs,
        styleTags: O || "—",
        lyricsPreview: _,
        // store the full text — used by Load
        durationMs: oe.data.duration_ms ?? 0,
        bitrate: oe.data.bitrate ?? 0,
        sampleRate: oe.data.sample_rate ?? 0,
        sizeBytes: oe.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: ls,
        specsJson: qt(Y) > 0 ? JSON.stringify(Y) : "",
        coverDataUrl: yt,
        theme: b
      };
      R(yt), console.info("[Juli3ta] Saving generated song:", { id: st.id, title: st.title, durationMs: st.durationMs, sizeBytes: st.sizeBytes }), await br(st) && (No(st), la(st), m === "restyle" && He && Vi({
        trackId: st.id,
        audioSrc: `data:audio/wav;base64,${He}`,
        sourceLabel: Qe || "Original"
      }), d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: st.title }),
        isRead: !1
      })), Fe("idle"), Pt(0);
    } catch (l) {
      if (l.name === "AbortError") {
        Fe("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", l), G(l.message || "Generation failed — check the console for details."), Fe("idle"), Pt(0);
    } finally {
      Ia.current = !1;
    }
  }, [
    J,
    b,
    M,
    F,
    E,
    Y,
    k,
    K,
    m,
    He,
    Qe,
    a,
    br,
    yr,
    No,
    la,
    d,
    ze,
    U,
    ie
  ]), kn = () => j.current?.click(), Co = ee(0), mt = L(async (i, l) => {
    const p = ++Co.current, x = () => Co.current === p;
    G(null), ct(!0), Te(null), Ie(l), Ne(null);
    try {
      if (Me === "mix") {
        const _ = await Ac(i);
        if (!x()) return;
        Te(_.base64);
        const z = _.sourceDurationSec / 60;
        if (_.segments.length > 1) {
          const O = _.segments.map((Q) => `${Math.floor(Q.startSec / 60)}:${Math.floor(Q.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          Ne(
            `Mixed ${_.segments.length} iconic moments (${_.durationSec.toFixed(0)} s) from ${z.toFixed(1)} min — at ${O}`
          );
        } else
          Ne(`Using whole clip (${_.durationSec.toFixed(0)} s)`);
      } else {
        const _ = await Hi(i);
        if (!x()) return;
        Te(_.base64);
        const z = _.sourceDurationSec / 60, O = _.startSec / 60, Q = _.startSec < 60 ? `${_.startSec.toFixed(1)} s` : `${Math.floor(O)}:${Math.floor(_.startSec % 60).toString().padStart(2, "0")}`;
        Ne(
          _.sourceDurationSec <= _.durationSec + 0.5 ? `Using whole clip (${_.durationSec.toFixed(0)} s)` : `Auto-picked best ${_.durationSec.toFixed(0)} s starting at ${Q} of ${z.toFixed(1)} min`
        );
      }
    } catch (_) {
      if (!x()) return;
      G(_.message || "Could not analyze that audio."), Ie(null);
    } finally {
      x() && ct(!1);
    }
  }, [Me]), Sn = async () => {
    Zt(null);
    try {
      let i;
      if (Ze === "tab") {
        const _ = navigator.mediaDevices;
        if (!_.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        i = await _.getDisplayMedia({ video: !0, audio: !0 });
        for (const z of i.getVideoTracks())
          z.stop(), i.removeTrack(z);
        if (i.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        i = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Rt.current = i;
      const p = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((_) => MediaRecorder.isTypeSupported(_)) || "", x = new MediaRecorder(i, p ? { mimeType: p } : void 0);
      Sa.current = [], x.ondataavailable = (_) => {
        _.data && _.data.size > 0 && Sa.current.push(_.data);
      }, x.onstop = async () => {
        try {
          const _ = new Blob(Sa.current, {
            type: Sa.current[0]?.type || p || "audio/webm"
          });
          if (_.size === 0) {
            Zt("Recording was empty.");
            return;
          }
          const z = new FileReader();
          z.onerror = () => Zt("Could not read the recording."), z.onload = () => {
            const O = typeof z.result == "string" ? z.result : "", Q = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${Ze === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - nr.current,
              mimeType: _.type || p || "audio/webm",
              audioDataUrl: O,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await ji(Q), g((ke) => [Q, ...ke]);
              } catch (ke) {
                console.warn("Recording save failed", ke), Zt("Could not save the recording. Try again.");
              }
            })(), ka(!1), mt(_, Q.name);
          }, z.readAsDataURL(_);
        } finally {
          Rt.current?.getTracks().forEach((_) => _.stop()), Rt.current = null;
        }
      }, x.start(250), to.current = x, nr.current = Date.now(), Zr(0), ir(!0), ea.current = setInterval(() => {
        Zr(Date.now() - nr.current);
      }, 100);
    } catch (i) {
      Zt(i.message || "Could not start recording."), Rt.current?.getTracks().forEach((l) => l.stop()), Rt.current = null, ir(!1);
    }
  }, Tn = () => {
    const i = to.current;
    i && i.state !== "inactive" && i.stop(), ea.current && clearInterval(ea.current), ir(!1);
  };
  q(() => () => {
    Rt.current?.getTracks().forEach((i) => i.stop()), ea.current && clearInterval(ea.current);
  }, []);
  const _n = (i) => {
    const l = i.target.files?.[0];
    if (i.target.value = "", !!l) {
      if (l.size > 50 * 1024 * 1024) {
        G("Reference audio is too big. Max 50 MB.");
        return;
      }
      mt(l, l.name);
    }
  }, Nn = (i) => {
    dt(!1), mt(i.audioDataUrl, i.name);
  }, Cn = () => {
    dt(!0), Yo().then((i) => g(i)).catch(() => {
    });
  }, En = () => ut(!0), An = (i) => {
    if (ut(!1), !i.audioDataUrl) return;
    const l = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    mt(i.audioDataUrl, `${l}.mp3`);
  }, zn = () => {
    Te(null), Ie(null), Ne(null);
  }, Ln = () => {
    na.current?.abort(), Fe("idle");
  }, ht = L(async (i, l, p) => {
    if (!J) throw new Error("No endpoint connected");
    const x = (he) => {
      const Ee = he, $ = Ee.choices?.[0], ce = [
        $?.message?.content,
        $?.delta?.content,
        $?.text,
        Ee.output_text
      ];
      for (const oe of ce)
        if (typeof oe == "string" && oe.trim().length > 0) return oe.trim();
      return "";
    }, _ = (he) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(he), z = /* @__PURE__ */ new Set(), O = [], Q = (he) => {
      he && !z.has(he) && (z.add(he), O.push(he));
    };
    if (Q(J.models.lyricsBackup), J.models.allIds.filter(_).forEach(Q), O.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const ke = typeof l == "string" ? l : JSON.stringify(l), We = p?.temperature ?? 0.5, kt = Math.max(p?.maxTokens ?? 800, 400), qe = 45e3;
    return ar(O, async (he) => {
      const Ee = Gt(p?.signal, qe);
      let $;
      try {
        $ = await fetch(`${J.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${J.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: he,
            messages: [
              { role: "system", content: i },
              { role: "user", content: ke }
            ],
            temperature: We,
            max_tokens: kt
          }),
          signal: Ee.signal
        });
      } catch (yt) {
        throw yt.name === "TimeoutError" ? new Error(`AI assist timed out after ${qe / 1e3}s.`) : yt;
      } finally {
        Ee.dispose();
      }
      if (!$.ok) {
        const yt = await $.text().catch(() => "");
        throw new _e($.status, yt, `AI assist HTTP ${$.status}: ${yt.slice(0, 200)}`);
      }
      const ce = await $.json(), oe = x(ce);
      if (!oe)
        throw console.warn("[Juli3ta] empty AI assist content from", he, ce), new _e(502, "", `Model "${he}" returned empty content`);
      return oe.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [J]), In = L(async () => {
    if (J) {
      bt(!0), G(null);
      try {
        const i = `You are a music-production assistant. Given a theme, style, and (optionally) lyrics, return ONE JSON object that fills in optimal Track Specs for the song.

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

Return ONLY the JSON. No markdown, no explanation, no code fences.`;
        me.current?.abort(), me.current = new AbortController();
        const l = await ht(i, {
          theme: b || null,
          style: E || null,
          lyrics: M ? M.slice(0, 1500) : null,
          existing_specs: qt(Y) > 0 ? Y : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: me.current.signal
        }), p = Ji(l) ?? l;
        let x;
        try {
          x = JSON.parse(p);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${l.slice(0, 160)}`);
        }
        Le((_) => ({ ...x, intent: _.intent }));
      } catch (i) {
        G(i.message || "Optimize failed.");
      } finally {
        bt(!1);
      }
    }
  }, [J, b, E, M, Y, ht]), [Pe, wt] = T(null), Eo = L(async () => {
    if (!J) return;
    if (!J.models.image) {
      G(`This endpoint (${J.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (Xe) return;
    me.current?.abort(), me.current = new AbortController();
    const i = me.current.signal;
    Kt(!0), G(null);
    try {
      const l = (ie.trim() || Ja(F, b, E)).slice(0, 1500), p = await Br(J, l, i);
      if (i.aborted) return;
      R(p), xe && sa.current?.(xe, p);
    } catch (l) {
      if (l.name === "AbortError") return;
      G(l.message || "Cover-art generation failed.");
    } finally {
      Kt(!1);
    }
  }, [J, ie, F, b, E, Xe, xe]), Ao = L((i) => {
    if (!i.type.startsWith("image/")) {
      G("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (i.size > 4 * 1024 * 1024) {
      G("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const l = new FileReader();
    l.onerror = () => G("Could not read that image file."), l.onload = () => {
      const p = l.result;
      typeof p == "string" && p.startsWith("data:image/") && (R(p), xe && sa.current?.(xe, p));
    }, l.readAsDataURL(i);
  }, [xe]), Mn = L(async () => {
    if (!Pe) {
      wt("theme"), G(null);
      try {
        const i = "You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.";
        me.current?.abort(), me.current = new AbortController();
        const l = await ht(i, {
          style: E || "pop",
          existing_theme: b || null
        }, { temperature: 0.85, maxTokens: 200, signal: me.current.signal });
        P(l);
      } catch (i) {
        G(i.message || "Theme inspiration failed.");
      } finally {
        wt(null);
      }
    }
  }, [Pe, ht, E, b]), Rn = L(async () => {
    if (!Pe) {
      wt("style"), G(null);
      try {
        const i = 'You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".';
        me.current?.abort(), me.current = new AbortController();
        const l = await ht(i, {
          theme: b || "a quiet evening",
          existing_style: E || null
        }, { temperature: 0.7, maxTokens: 120, signal: me.current.signal });
        I(l.replace(/^["']|["']$/g, ""));
      } catch (i) {
        G(i.message || "Style suggestion failed.");
      } finally {
        wt(null);
      }
    }
  }, [Pe, ht, b, E]), jn = L(async () => {
    if (!Pe) {
      if (!M.trim()) {
        G("Nothing to polish — write some lyrics first.");
        return;
      }
      wt("lyrics"), G(null);
      try {
        const i = "You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.";
        me.current?.abort(), me.current = new AbortController();
        const l = await ht(i, {
          style: E || null,
          lyrics: M
        }, { temperature: 0.6, maxTokens: 1200, signal: me.current.signal });
        if (l.length > Ft) {
          G(`Polished lyrics exceeded ${Ft} chars (${l.length}). Trimming the original first might help.`);
          return;
        }
        C(l);
      } catch (i) {
        G(i.message || "Lyrics polish failed.");
      } finally {
        wt(null);
      }
    }
  }, [Pe, ht, E, M]), Pn = (i) => {
    I((l) => l ? `${l}, ${i.toLowerCase()}` : i.toLowerCase());
  }, xr = () => {
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
  }, Dn = () => {
    const i = S ?? X.state.trackId ?? gt[0]?.id ?? be[0]?.id ?? null, l = i ? nt.find((p) => p.id === i) ?? null : null;
    l && Ot(l), v("creator"), xr();
  }, zo = L((i) => {
    Re((l) => l.filter((p) => p.id !== i)), Jl(i).catch((l) => console.warn("Track cache delete failed:", l)), jc(i).catch((l) => console.warn("Track file delete failed:", l));
  }, []), Un = L(async () => {
    if (!Aa) {
      So(!0);
      try {
        const i = await Pc();
        ia(i), d({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: i,
          isRead: !1
        });
      } catch (i) {
        re(`Could not open JULI3TA folder — ${i.message || i}`);
      } finally {
        So(!1);
      }
    }
  }, [d, Aa]), Ma = L(async (i, l) => {
    const p = l.trim().slice(0, 200) || "Untitled";
    Re((x) => x.map((_) => _.id === i ? { ..._, title: p } : _));
    try {
      await Gl(i, p), re(null);
    } catch (x) {
      const _ = x.message || "Database write failed";
      re(`Couldn't rename track — ${_}.`);
    }
  }, []), wr = L(async (i, l) => {
    Re((p) => p.map((x) => x.id === i ? { ...x, coverDataUrl: l } : x));
    try {
      await Vl(i, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save cover art — ${x}.`);
    }
  }, []);
  q(() => {
    sa.current = wr;
  }, [wr]);
  const Lo = L(async (i, l) => {
    Re((p) => p.map((x) => x.id === i ? { ...x, styleTags: l || "—" } : x));
    try {
      await Yl(i, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save style — ${x}.`);
    }
  }, []), Io = L(async (i, l) => {
    Re((p) => p.map((x) => x.id === i ? { ...x, lyricsPreview: l } : x));
    try {
      await Kl(i, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save lyrics — ${x}.`);
    }
  }, []), Mo = L(async (i, l) => {
    Re((p) => p.map((x) => x.id === i ? { ...x, specsJson: l } : x));
    try {
      await Xl(i, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save specs — ${x}.`);
    }
  }, []), Ro = L(async (i, l) => {
    Re((p) => p.map((x) => x.id === i ? { ...x, theme: l } : x));
    try {
      await Ql(i, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save theme — ${x}.`);
    }
  }, []);
  q(() => {
    if (!xe) return;
    const i = xe, l = setTimeout(() => {
      const p = vt.find((ke) => ke.id === i);
      if (!p) return;
      const x = F.trim() || p.title, _ = E.trim(), z = b, O = qt(Y) > 0 ? JSON.stringify(Y) : "", Q = p.styleTags === "—" ? "" : p.styleTags || "";
      p.title !== x && Ma(i, x), Q !== _ && Lo(i, _), (p.lyricsPreview || "") !== M && Io(i, M), (p.specsJson || "") !== O && Mo(i, O), (p.theme || "") !== z && Ro(i, z);
    }, 600);
    return () => clearTimeout(l);
  }, [xe, F, E, b, M, Y, vt, Ma, Lo, Io, Mo, Ro]);
  const [jo, Po] = T(null), [On, Do] = T(!1), Ot = L((i) => {
    C(i.lyricsPreview ?? ""), I(i.styleTags && i.styleTags !== "—" ? i.styleTags : ""), P(i.theme ?? "");
    const l = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (W(l), se(!1), i.specsJson)
      try {
        Le(JSON.parse(i.specsJson));
      } catch {
        Le({});
      }
    else
      Le({});
    R(i.coverDataUrl ?? ""), Ke(""), xa(i.id), G(null), N(null), se(!1), ve(i) ? i.source === "youtube" ? (h("restyle"), Te(null), Ie(`${l}.mp3`), Ne("Resolving streamed audio…"), ct(!0), (async () => {
      try {
        const x = i.externalId || "";
        if (!x) throw new Error("Missing source identifier.");
        const _ = ma(x), z = ot[_], O = z && Date.now() - z.resolvedAt < 5400 * 1e3 ? z.src : (await Lr(x)).proxyUrl;
        await mt(O, `${l}.mp3`);
      } catch (x) {
        ct(!1), Te(null), Ie(null), Ne(null), G(`Could not load streamed track for restyle: ${x.message || "unknown error"}`);
      }
    })()) : (h("restyle"), mt(i.audioDataUrl, `${l}.mp3`)) : (Te(null), Ie(null), Ne(null), h("lyricsOnly"));
  }, [mt, ot]), Uo = L((i) => {
    const l = la(i);
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
  }, [la, c, d, a]), Ra = L((i, l, p, x) => {
    const _ = o.ensureUserFolder("Desktop");
    if (!_) return;
    const z = o.findChildByName(_, i);
    let O;
    if (z)
      p.refTrackId || o.writeFile(z.id, l), O = z.id;
    else {
      O = o.createFile(_, i, l, p);
      const Q = Array.from(x).reduce((kt, qe) => kt + qe.charCodeAt(0), 0), ke = Q % 6 + 1, We = Math.floor(Q / 6) % 4;
      c({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: i,
          icon: jl(i),
          fileSystemNodeId: O,
          position: { x: 16 + ke * 80, y: 16 + We * 90 },
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
  }, [o, c, d, a]), Hn = L((i) => {
    if (!i.audioDataUrl) return;
    const l = $a(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Ra(`${l}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: i.id }, i.id);
  }, [Ra]), $n = L((i) => {
    if (!i.lyricsPreview) return;
    const l = $a(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Ra(`${l}.lyrics.txt`, i.lyricsPreview, { mimeType: "text/plain" }, `${i.id}-lyrics`);
  }, [Ra]), Fn = L((i) => {
    Ue(!1), v("player"), A(i.id);
  }, []), it = L((i) => {
    const l = i.dataTransfer.getData(ya);
    if (!l) return null;
    try {
      return JSON.parse(l);
    } catch {
      return null;
    }
  }, []), Bn = L((i) => {
    const l = it(i);
    if (l && l.lyricsPreview) {
      i.preventDefault(), C(l.lyricsPreview);
      const p = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !F.trim() && p && W(p), !E.trim() && l.styleTags && l.styleTags !== "—" && I(l.styleTags);
      return;
    }
  }, [it, F, E]), Wn = L((i) => {
    const l = it(i);
    l && l.styleTags && l.styleTags !== "—" && (i.preventDefault(), I((p) => p ? `${p}, ${l.styleTags}` : l.styleTags));
  }, [it]), qn = L((i) => {
    const l = it(i);
    if (l) {
      i.preventDefault();
      const p = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), x = l.styleTags && l.styleTags !== "—" ? `Inspired by "${p}" — ${l.styleTags}` : `Inspired by "${p}"`;
      P(x);
    }
  }, [it]), Jn = L((i) => {
    const l = it(i);
    l && (i.preventDefault(), W(l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [it]), ja = (i) => {
    i.dataTransfer.types.includes(ya) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
  }, Oo = M.length, Gn = E.length, V = jt !== "idle", Vn = ge(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            na.current?.abort(), me.current?.abort(), Ia.current = !1, h("compose"), P(""), C(""), I(""), W(""), Le({}), N(null), se(!1), R(""), Ke(""), pt(!1), Te(null), Ie(null), Ne(null), G(null), re(null), Fe("idle"), Pt(0), wt(null), Kt(!1), bt(!1), xa(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => xr() },
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
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => fr(!0) }
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
          { id: "tytus-help", label: "Tytus Help", actionId: "open-help" }
        ]
      }
    ]
  }), [r]);
  Ll(r?.id ?? null, Vn);
  const Be = ge(
    () => vt.filter(Bi),
    [vt]
  ), gt = ge(() => {
    let i = Be;
    je === "songs" ? i = i.filter((p) => ve(p) && !/\(restyle\)\s*$/i.test(p.title) && !/\(lyrics\)\s*$/i.test(p.title)) : je === "restyles" ? i = i.filter((p) => /\(restyle\)\s*$/i.test(p.title)) : je === "lyrics" && (i = i.filter((p) => !ve(p) || /\(lyrics\)\s*$/i.test(p.title)));
    const l = Ce.trim().toLowerCase();
    return l ? i.filter((p) => p.title.toLowerCase().includes(l) || p.styleTags.toLowerCase().includes(l)) : i;
  }, [Be, Ce, je]), Ht = ge(() => {
    let i = be;
    et === "favorites" && (i = i.filter((p) => Ca.has(p.id)));
    const l = Ce.trim().toLowerCase();
    return l ? i.filter((p) => p.title.toLowerCase().includes(l) || (p.artist || "").toLowerCase().includes(l) || (p.album || "").toLowerCase().includes(l)) : i;
  }, [be, et, Ce, Ca]), ca = L((i) => {
    i.slice(0, 4).forEach((l) => {
      const p = ma(l.id), x = ot[p];
      x && Date.now() - x.resolvedAt < 5400 * 1e3 || gr.current.has(l.id) || (gr.current.add(l.id), go((_) => new Set(_).add(l.id)), Lr(l.id).then((_) => {
        ho((z) => ({
          ...z,
          [p]: { src: _.proxyUrl, resolvedAt: Date.now() }
        }));
      }).catch(() => {
      }).finally(() => {
        gr.current.delete(l.id), go((_) => {
          const z = new Set(_);
          return z.delete(l.id), z;
        });
      }));
    });
  }, [ot]);
  q(() => {
    if (!at) return;
    const i = new AbortController();
    return Promise.allSettled([
      zc(i.signal),
      Xo(i.signal),
      Qo(i.signal)
    ]).then(([l, p, x]) => {
      l.status === "fulfilled" ? uo(l.value) : uo(null), p.status === "fulfilled" && po(p.value), x.status === "fulfilled" && mo(x.value);
    }), () => i.abort();
  }, [at]), q(() => {
    if (!at) return;
    const i = (l) => {
      l.key === "Escape" && Ue(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [at]), q(() => {
    if (!at) return;
    const i = lr.trim();
    if (i.length < 2) {
      const z = window.setTimeout(() => {
        cr([]), rt(null), Na(!1);
      }, 0);
      return () => window.clearTimeout(z);
    }
    const l = `${oa}:${i.toLowerCase()}`, p = ko.current.get(l);
    if (p) {
      cr(p), Na(!1), rt(null), ca(p);
      return;
    }
    const x = new AbortController(), _ = setTimeout(() => {
      Na(!0), rt(null);
      let z = hr.current.get(l);
      z || (z = Rc(i, oa, 20, x.signal).then((O) => oa === "playlists" ? O.results.playlists : O.results.tracks).catch(() => Mc(i, 20, x.signal)).finally(() => {
        hr.current.delete(l);
      }), hr.current.set(l, z)), z.then((O) => {
        ko.current.set(l, O), cr(O), ca(O), O.length > 0 && co(i);
      }).catch((O) => {
        x.signal.aborted || rt(O.message || "Music search failed.");
      }).finally(() => {
        x.signal.aborted || Na(!1);
      });
    }, 120);
    return () => {
      x.abort(), clearTimeout(_);
    };
  }, [lr, oa, at, ca, co]);
  const Pa = L(async () => {
    const [i, l] = await Promise.allSettled([
      Xo(),
      Qo()
    ]);
    i.status === "fulfilled" && po(i.value), l.status === "fulfilled" && mo(l.value);
  }, []), Yn = L(async (i, l) => {
    await Lc(i, l), await Pa(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${i} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, Pa]), Kn = L(async (i) => {
    await Ic(i), await Pa(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${i} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [d, Pa]), Xn = ge(
    () => new Set(be.filter((i) => i.externalId).map((i) => i.externalId)),
    [be]
  ), Da = L((i, l) => {
    const p = qi(i.title, i.channel);
    return {
      id: l?.id ?? ma(i.id),
      title: p.song || i.title || "Untitled",
      styleTags: "",
      lyricsPreview: "",
      durationMs: i.durationMs ?? 0,
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
      externalId: i.id,
      externalUrl: `https://www.youtube.com/watch?v=${i.id}`,
      thumbnailUrl: i.thumbnailUrl || Xa(i.id),
      artist: p.artist || i.channel || "Unknown",
      album: i.channel ?? ""
    };
  }, []), Qn = L(async (i, l) => {
    if (i.audioDataUrl && !l?.force) return i.audioDataUrl;
    if (!Wi(i) || !i.externalId) return i.audioDataUrl || null;
    const p = ma(i.externalId), x = ot[p] ?? ot[i.id];
    if (!l?.force && x && Date.now() - x.resolvedAt < 5400 * 1e3) return x.src;
    const _ = await Lr(i.externalId);
    return ho((z) => ({ ...z, [p]: { src: _.proxyUrl, resolvedAt: Date.now() } })), _.proxyUrl;
  }, [ot]), nt = ge(
    () => [...bo, ...be, ...gt],
    [bo, be, gt]
  );
  q(() => {
    if (!S || nt.length === 0) return;
    nt.some((l) => l.id === S) || A(null);
  }, [S, nt]);
  const Ho = ee(null), X = xd(nt, Ho, Qn);
  q(() => {
    const i = X.state.trackId;
    i && Qi((l) => l[0] === i ? l : [i, ...l.filter((x) => x !== i)].slice(0, 8));
  }, [X.state.trackId]), q(() => {
    if (y !== "player") return;
    const i = (l) => {
      const p = l.target;
      if (p) {
        const z = p.tagName;
        if (z === "INPUT" || z === "TEXTAREA" || z === "SELECT" || p.isContentEditable) return;
      }
      const x = X.state.trackId;
      if (!x) return;
      const _ = nt.find((z) => z.id === x);
      if (_)
        switch (l.key) {
          case " ":
            l.preventDefault(), X.toggle(_);
            break;
          case "ArrowLeft":
            l.preventDefault(), X.seek(Math.max(0, X.state.positionMs - 5e3));
            break;
          case "ArrowRight":
            l.preventDefault(), X.seek(Math.min(X.state.durationMs || 0, X.state.positionMs + 5e3));
            break;
          case "ArrowUp":
            l.preventDefault(), X.setVolume(Math.min(1, X.state.volume + 0.1));
            break;
          case "ArrowDown":
            l.preventDefault(), X.setVolume(Math.max(0, X.state.volume - 0.1));
            break;
        }
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [y, X, nt]);
  const Zn = L((i) => {
    const l = i.items.find(ve);
    l && (vo((p) => [
      ...i.items.filter((x) => !p.some((_) => _.id === x.id)),
      ...p
    ]), A(l.id), Ue(!1), v("player"), X.play(l));
  }, [X]), es = L(async (i) => {
    await pc(i), Ut(await ua());
  }, []), ts = L((i) => {
    rt(null), yo(i.id);
    const l = ma(i.id), p = ot[l], x = Da(
      i,
      p ? { id: l, audioDataUrl: p.src } : void 0
    );
    vo((_) => [x, ..._.filter((z) => z.id !== x.id)]), A(x.id), v("player"), X.play(x), yo(null);
  }, [X, Da, ot]), as = L(async (i) => {
    fo(i.id);
    const l = Da(i);
    try {
      await Ri(l), dr((p) => [l, ...p.filter((x) => x.id !== l.id)]), A(l.id), no("library"), so("all"), ca([i]), pr.length > 0;
    } catch (p) {
      rt(p.message || "Could not save track.");
    } finally {
      fo(null);
    }
  }, [Da, ca, pr.length]), kr = L((i) => {
    ur((l) => {
      const p = new Set(l);
      return p.has(i.id) ? p.delete(i.id) : p.add(i.id), p;
    }), dc({
      kind: "track",
      entityId: i.id,
      provider: i.source ?? "youtube",
      title: i.title
    }).catch((l) => console.warn("Favorite toggle failed:", l));
  }, []), rs = L(async () => {
    const i = mr.trim() || "New Playlist";
    wo(!0);
    try {
      const l = await uc(i);
      Ut((p) => [l, ...p]), xo("");
    } catch (l) {
      rt(l.message || "Could not create playlist.");
    } finally {
      wo(!1);
    }
  }, [mr]), os = L(async (i, l) => {
    try {
      await mc(i, l);
      const p = await ua();
      Ut(p);
    } catch (p) {
      rt(p.message || "Could not add to playlist.");
    }
  }, []), is = L(async (i, l) => {
    try {
      await hc(i, l);
      const p = await ua();
      Ut(p);
    } catch (p) {
      rt(p.message || "Could not remove from playlist.");
    }
  }, []), Sr = L((i) => {
    dr((l) => l.filter((p) => p.id !== i.id)), ur((l) => {
      const p = new Set(l);
      return p.delete(i.id), p;
    }), sc(i.id).then(() => ua().then(Ut)).catch((l) => console.warn("Library track delete failed:", l));
  }, []), ns = L((i) => {
    _a((l) => {
      const p = new Set(l);
      return p.has(i.id) ? p.delete(i.id) : p.add(i.id), p;
    });
  }, []), da = L(() => {
    sr(!1), _a(/* @__PURE__ */ new Set());
  }, []);
  q(() => {
    if (!xt) return;
    const i = (l) => {
      l.key === "Escape" && da();
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [xt, da]), q(() => {
    pe !== "library" && (xt || tt.size > 0) && (sr(!1), _a(/* @__PURE__ */ new Set()));
  }, [pe, xt, tt.size]);
  const Tr = L((i) => {
    A(i.id), Ue(!1), v("player");
  }, []), ss = L((i) => {
    Ot(i), Ue(!1), v("creator");
  }, [Ot]);
  return J ? /* @__PURE__ */ n("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ n(
      "aside",
      {
        className: "flex flex-col flex-shrink-0",
        style: {
          width: 260,
          borderRight: "1px solid var(--border-subtle)",
          background: "var(--bg-titlebar)"
        },
        children: [
          /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center gap-2 px-3 flex-shrink-0",
              style: {
                height: 38,
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t(Oe, { size: 13, style: { color: "var(--accent-primary)" } }),
                /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA" }),
                /* @__PURE__ */ n("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: pe === "mywork" ? Ce.trim() || je !== "all" ? `${gt.length} / ${Be.length}` : a(
                    Be.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: Be.length }
                  ) : Ce.trim() || et !== "all" ? `${Ht.length} / ${be.length}` : `${be.length} saved` }),
                  pe === "mywork" && /* @__PURE__ */ n(ue, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: Un,
                        disabled: Aa,
                        className: "flex items-center justify-center transition-all",
                        style: {
                          width: 22,
                          height: 22,
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-window)",
                          color: "var(--text-secondary)",
                          opacity: Aa ? 0.5 : 1
                        },
                        title: Ea ? `Open real folder: ${Ea}` : "Open real JULI3TA folder",
                        children: /* @__PURE__ */ t(Ds, { size: 11 })
                      }
                    ),
                    /* @__PURE__ */ n(
                      "div",
                      {
                        className: "flex rounded-md overflow-hidden flex-shrink-0",
                        style: { border: "1px solid var(--border-subtle)" },
                        children: [
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => io("cards"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: aa === "cards" ? "var(--bg-hover)" : "transparent",
                                color: aa === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "Cards",
                              children: /* @__PURE__ */ t(Ur, { size: 11 })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => io("list"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: aa === "list" ? "var(--bg-hover)" : "transparent",
                                color: aa === "list" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "List",
                              children: /* @__PURE__ */ t(Et, { size: 11 })
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
                        Ue(!0), ra("search");
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
                      children: /* @__PURE__ */ t(lt, { size: 11 })
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
                { id: "mywork", label: "My Work", count: Be.length },
                { id: "library", label: "Library", count: be.length }
              ].map((i) => /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => no(i.id),
                  className: "flex-1 rounded-md transition-all",
                  style: {
                    height: 26,
                    fontSize: 11,
                    fontWeight: pe === i.id ? 700 : 600,
                    color: pe === i.id ? "white" : "var(--text-secondary)",
                    background: pe === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
                          opacity: pe === i.id ? 0.85 : 0.55
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
          /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center gap-1 px-2 flex-shrink-0",
              style: {
                height: 32,
                borderBottom: "1px solid var(--border-subtle)",
                background: "var(--bg-window)",
                opacity: pe === "mywork" ? Be.length === 0 ? 0.4 : 1 : be.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(lt, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: Ce,
                    onChange: (i) => oo(i.target.value),
                    placeholder: pe === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: pe === "mywork" ? Be.length === 0 : be.length === 0
                  }
                ),
                Ce && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => oo(""),
                    className: "opacity-60 hover:opacity-100 px-1",
                    title: "Clear search",
                    children: /* @__PURE__ */ t(fe, { size: 11 })
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
              ].map((i) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Xi(i.id),
                  className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                  style: {
                    height: 22,
                    fontSize: 10,
                    fontWeight: je === i.id ? 800 : 600,
                    color: je === i.id ? "white" : "var(--text-secondary)",
                    background: je === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: i.label
                },
                i.id
              )) : xt ? /* @__PURE__ */ n(ue, { children: [
                /* @__PURE__ */ n("span", { style: { fontSize: 10, fontWeight: 800, color: "var(--text-primary)", flexShrink: 0 }, children: [
                  tt.size,
                  " selected"
                ] }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => _a(new Set(Ht.map((i) => i.id))),
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
                    onClick: da,
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
              ] }) : /* @__PURE__ */ n(ue, { children: [
                [
                  { id: "all", label: "All" },
                  { id: "favorites", label: "Favorites" }
                ].map((i) => /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => so(i.id),
                    className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: et === i.id ? 800 : 600,
                      color: et === i.id ? "white" : "var(--text-secondary)",
                      background: et === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: i.label
                  },
                  i.id
                )),
                be.length > 0 && /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: () => sr(!0),
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
                      /* @__PURE__ */ t(wi, { size: 11 }),
                      " Select"
                    ]
                  }
                )
              ] })
            }
          ),
          pe === "mywork" ? Be.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t(Et, { size: 18, style: { color: "var(--text-disabled)" } })
              }
            ),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: a("musiccreator.gallery.empty.title") }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: a("musiccreator.gallery.empty.body") }),
            /* @__PURE__ */ n(
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
                  /* @__PURE__ */ t(Oe, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ n("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(Ve, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : gt.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(lt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ce ? a("musiccreator.gallery.searchEmpty", { q: Ce }) : `No ${je} yet.` })
          ] }) : /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: [
            Ta.length > 0 && je === "all" && !Ce.trim() && /* @__PURE__ */ t(
              Rd,
              {
                trackIds: Ta,
                allTracks: Be,
                player: X,
                onSelect: Tr
              }
            ),
            aa === "list" ? /* @__PURE__ */ t(
              Ld,
              {
                tracks: gt,
                player: X,
                onLoad: Ot,
                onOpenLyrics: Uo,
                onDelete: zo,
                onRename: Ma
              }
            ) : gt.map((i) => /* @__PURE__ */ t(
              Md,
              {
                track: i,
                onDelete: zo,
                onLoad: Ot,
                onOpenLyrics: Uo,
                onSaveSongToDesktop: Hn,
                onSaveLyricsToDesktop: $n,
                onPlayInPlayer: Fn,
                onRename: Ma,
                onEditCover: Po,
                onSelect: Tr,
                selected: y === "player" && S === i.id,
                player: X
              },
              i.id
            ))
          ] }) : (
            /* Library tab — flat slim list of saved streamed tracks. The
               rich Artists/Albums/Playlists views still live in the main
               Music pane (reachable via the search button in the header
               above) since they need more horizontal room than 260px. */
            be.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(
                "div",
                {
                  className: "flex items-center justify-center rounded-2xl mb-2",
                  style: { width: 44, height: 44, background: "var(--bg-hover)" },
                  children: /* @__PURE__ */ t(Ga, { size: 18, style: { color: "var(--text-disabled)" } })
                }
              ),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: "Your saved music lives here" }),
              /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: "Click the magnifier above to search, then add tracks you want to keep." }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => {
                    Ue(!0), ra("search");
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
                    /* @__PURE__ */ t(lt, { size: 11 }),
                    " Search music"
                  ]
                }
              )
            ] }) : Ht.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(lt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ce ? `No matches for "${Ce}"` : `No ${et} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Ht.map((i) => /* @__PURE__ */ t(
              jd,
              {
                track: i,
                player: X,
                selected: y === "player" && S === i.id,
                isFavorite: Ca.has(i.id),
                onOpenInPlayer: Tr,
                onRemix: ss,
                onToggleFavorite: kr,
                onRemove: Sr,
                selectMode: xt,
                checked: tt.has(i.id),
                onToggleCheck: ns
              },
              i.id
            )) })
          ),
          pe === "library" && xt && tt.size > 0 && /* @__PURE__ */ n(
            "div",
            {
              className: "flex-shrink-0 flex items-center gap-1.5 px-2",
              style: {
                height: 44,
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--bg-titlebar)"
              },
              children: [
                /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: () => {
                      const i = Ht.filter((l) => tt.has(l.id));
                      for (const l of i) kr(l);
                      da();
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
                    title: `Toggle favorite on ${tt.size} track(s)`,
                    children: [
                      /* @__PURE__ */ t(Ga, { size: 11 }),
                      " Toggle favorite"
                    ]
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: () => {
                      const i = Ht.filter((l) => tt.has(l.id));
                      for (const l of i) Sr(l);
                      da();
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
                    title: `Remove ${tt.size} track(s) from Library`,
                    children: [
                      /* @__PURE__ */ t(At, { size: 11 }),
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
    /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col min-w-0 overflow-hidden relative", children: [
      /* @__PURE__ */ n(
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
            /* @__PURE__ */ n("div", { className: "flex items-center", style: { gap: 2, flexShrink: 0 }, children: [
              /* @__PURE__ */ t(Ni, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
              /* @__PURE__ */ t(
                "img",
                {
                  src: f === "light" ? "/brand/juli3ta/wordmark-ink-transparent.png" : "/brand/juli3ta/wordmark-cream-transparent.png",
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
                  { id: "creator", icon: /* @__PURE__ */ t(Oe, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(ye, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
                ].map((i) => /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: () => v(i.id),
                    title: i.tip,
                    className: "flex items-center gap-1.5 px-3 rounded-md transition-all",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: y === i.id ? 600 : 500,
                      color: y === i.id ? "white" : "var(--text-secondary)",
                      background: y === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
            /* @__PURE__ */ n("div", { className: "ml-auto flex items-center gap-1.5 flex-shrink-0", children: [
              y === "player" && /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => {
                    Ue((i) => !i), ra("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: at ? "white" : "var(--text-secondary)",
                    background: at ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(lt, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(zd, { endpoint: J, endpoints: La, onSwitch: xn }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: y === "player" ? Dn : xr,
                  disabled: V,
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a(y === "player" ? "musiccreator.header.surpriseFromPlayerTitle" : "musiccreator.header.surpriseTitle"),
                  children: [
                    /* @__PURE__ */ t(qr, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => fr(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(xi, { size: 14 })
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
                  children: /* @__PURE__ */ t(As, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      y === "player" && (at ? /* @__PURE__ */ t(
        Yd,
        {
          tab: Zi,
          onTabChange: ra,
          query: lr,
          onQueryChange: en,
          searchHistory: tn,
          onClearSearchHistory: () => {
            lo([]);
            try {
              localStorage.removeItem("juli3ta:searchHistory");
            } catch {
            }
          },
          resultType: oa,
          onResultTypeChange: an,
          results: rn,
          busy: on,
          error: nn,
          status: sn,
          providers: ln,
          connectors: cn,
          libraryTracks: be,
          playlists: pr,
          playlistNameDraft: mr,
          playlistBusy: mn,
          favoriteIds: Ca,
          warmupIds: dn,
          previewBusyId: un,
          addBusyId: pn,
          savedYoutubeIds: Xn,
          player: X,
          onPreview: ts,
          onAdd: as,
          onOpenTrack: (i) => {
            A(i.id), Ue(!1), v("player");
          },
          onToggleFavorite: kr,
          onRemoveLibraryTrack: Sr,
          onPlaylistNameDraftChange: xo,
          onCreatePlaylist: rs,
          onAddTrackToPlaylist: os,
          onRemoveTrackFromPlaylist: is,
          onPlayPlaylist: Zn,
          onDeletePlaylist: es,
          onConfigureConnector: Yn,
          onDisconnectConnector: Kn,
          onClose: () => Ue(!1)
        }
      ) : /* @__PURE__ */ t(
        Vd,
        {
          track: (() => {
            const i = S ?? X.state.trackId ?? gt[0]?.id ?? be[0]?.id ?? null;
            return i ? nt.find((l) => l.id === i) ?? null : null;
          })(),
          player: X,
          restyleOriginal: Gi,
          onSwitchToCreator: () => v("creator"),
          onSearchMusic: () => {
            v("player"), Ue(!0), ra("search");
          },
          onEditInCreator: (i) => {
            Ot(i), v("creator");
          }
        }
      )),
      y === "creator" && /* @__PURE__ */ n(ue, { children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: "flex items-center gap-2 px-5 flex-shrink-0",
            style: {
              height: 48,
              borderBottom: "1px solid var(--border-subtle)"
            },
            children: [
              [
                { id: "compose", icon: /* @__PURE__ */ t(va, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(zt, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t(Va, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((i) => /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => h(i.id),
                  disabled: V,
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
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: V ? /* @__PURE__ */ n(
                "button",
                {
                  onClick: Ln,
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
                    /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }),
                    a("musiccreator.button.cancel")
                  ]
                }
              ) : (() => {
                const i = m === "restyle" && (we || !He);
                return /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: wn,
                    disabled: i,
                    className: "flex items-center gap-1.5 px-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    style: {
                      height: 32,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "white",
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      boxShadow: "var(--shadow-md)"
                    },
                    title: i ? we ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      i && we ? /* @__PURE__ */ t(te, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(zt, { size: 13 }),
                      m === "restyle" ? we ? "Analyzing audio…" : "Restyle Song" : m === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
                    ]
                  }
                );
              })() })
            ]
          }
        ),
        /* @__PURE__ */ n(
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
                  value: F,
                  onChange: (i) => W(i.target.value),
                  onDragOver: ja,
                  onDrop: Jn,
                  placeholder: a("musiccreator.songName.placeholder"),
                  disabled: V,
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
              m !== "lyricsOnly" && /* @__PURE__ */ n(
                "label",
                {
                  htmlFor: "juli3ta-instrumental",
                  className: "flex items-center gap-2 cursor-pointer select-none flex-shrink-0",
                  style: { fontSize: 11, color: "var(--text-secondary)" },
                  children: [
                    a("musiccreator.lyrics.instrumental"),
                    /* @__PURE__ */ t(
                      ni,
                      {
                        id: "juli3ta-instrumental",
                        checked: K,
                        onChange: se,
                        disabled: V
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (V || ta || Dt) && /* @__PURE__ */ n(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: ta ? "rgba(255, 82, 82, 0.06)" : Dt ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              V && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${Ki * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: ta ? /* @__PURE__ */ n(ue, { children: [
                /* @__PURE__ */ t(fa, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: ta, children: ta }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => G(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(fe, { size: 11 })
                  }
                )
              ] }) : V ? /* @__PURE__ */ n(ue, { children: [
                /* @__PURE__ */ t(te, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: jt === "lyrics" ? oi[ao % oi.length] : ii[ao % ii.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: jt === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : /* @__PURE__ */ n(ue, { children: [
                /* @__PURE__ */ t(fa, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: Dt ?? "", children: Dt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => re(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: "Dismiss",
                    children: /* @__PURE__ */ t(fe, { size: 11 })
                  }
                )
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: /* @__PURE__ */ n("div", { className: "px-6 py-5", children: [
          m === "restyle" && /* @__PURE__ */ n(
            "div",
            {
              className: "mb-5",
              onDragOver: (i) => {
                i.dataTransfer.types.includes(ya) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
              },
              onDrop: (i) => {
                const l = it(i);
                l && l.hasAudio && (i.preventDefault(), (async () => {
                  const p = await ql(l.id);
                  if (!p?.audioDataUrl) {
                    G("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  mt(p.audioDataUrl, `${l.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                Qe ? /* @__PURE__ */ n(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${we ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                        we ? /* @__PURE__ */ t(te, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(Et, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: Qe }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: zn,
                            disabled: V || we,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t(At, { size: 14 })
                          }
                        )
                      ] }),
                      (we || Mt) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: we ? "🔍  Listening for the best part…" : `✨  ${Mt}` })
                    ]
                  }
                ) : /* @__PURE__ */ n("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1", children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: () => ka(!0),
                      disabled: V,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Record new audio (mic or tab)",
                      children: [
                        /* @__PURE__ */ t(Ve, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: kn,
                      disabled: V,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t(Et, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: En,
                      disabled: V || vt.filter((i) => i.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(Ct, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: vt.filter((i) => i.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: Cn,
                      disabled: V,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50 relative",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      title: "Pick a Voice Recorder clip",
                      children: [
                        /* @__PURE__ */ t(Ve, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: Qt.length }) })
                      ]
                    }
                  )
                ] }),
                !Qe && /* @__PURE__ */ n("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ n("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => Kr("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Me === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Me === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Me === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(Oe, { size: 13, style: { color: Me === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ n("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Best 30 s" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "single chorus-like window" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => Kr("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Me === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Me === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Me === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(Ur, { size: 13, style: { color: Me === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ n("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 best parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                Yi && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !$e && ka(!1),
                    children: /* @__PURE__ */ n(
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
                          /* @__PURE__ */ n("div", { className: "px-5 py-4", style: { borderBottom: "1px solid var(--border-subtle)" }, children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }, children: "Record audio for cover" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.4 }, children: "Capture 1–3 minutes of music for best results. JULI3TA will auto-extract the iconic parts." })
                          ] }),
                          /* @__PURE__ */ n("div", { className: "px-5 pt-3", children: [
                            /* @__PURE__ */ n("div", { className: "grid grid-cols-2 gap-2", children: [
                              /* @__PURE__ */ n(
                                "button",
                                {
                                  onClick: () => !$e && Xr("mic"),
                                  disabled: $e,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: Ze === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${Ze === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Ve, { size: 14 }),
                                    /* @__PURE__ */ n("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Microphone" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "laptop or USB mic" })
                                    ] })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ n(
                                "button",
                                {
                                  onClick: () => !$e && Xr("tab"),
                                  disabled: $e,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: Ze === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${Ze === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Bo, { size: 14 }),
                                    /* @__PURE__ */ n("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            Ze === "tab" && /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                              "💡 In the share dialog, pick a tab playing music and tick ",
                              /* @__PURE__ */ t("strong", { children: '"Share tab audio"' }),
                              "."
                            ] })
                          ] }),
                          /* @__PURE__ */ n("div", { className: "px-5 py-6 flex flex-col items-center", children: [
                            /* @__PURE__ */ n(
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
                                  Math.floor(Qr / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor(Qr / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            $e ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: Tn,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(ki, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: Sn,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: Ze === "tab" ? /* @__PURE__ */ t(Bo, { size: 28 }) : /* @__PURE__ */ t(Ve, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: $e ? Ze === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            eo && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: eo })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ n(
                            "div",
                            {
                              className: "px-5 py-3 flex items-center justify-between",
                              style: { borderTop: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)" },
                              children: [
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: $e ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !$e && ka(!1),
                                    disabled: $e,
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
                    ref: j,
                    type: "file",
                    accept: "audio/*",
                    onChange: _n,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick the best 30 s" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed to the most musical chunk."
                ] }),
                or && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => dt(!1),
                    children: /* @__PURE__ */ n(
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
                          /* @__PURE__ */ n(
                            "div",
                            {
                              className: "px-4 py-3 flex items-center justify-between",
                              style: { borderBottom: "1px solid var(--border-subtle)" },
                              children: [
                                /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ t(Ve, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ n(
                                  "button",
                                  {
                                    onClick: () => dt(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    children: [
                                      /* @__PURE__ */ t(At, { size: 14, style: { visibility: "hidden" } }),
                                      /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600 }, children: "×" })
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: Qt.length === 0 ? /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(Ve, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : Qt.map((i) => {
                            const l = i.durationMs / 1e3, p = l < 6;
                            return /* @__PURE__ */ n(
                              "button",
                              {
                                onClick: () => !p && Nn(i),
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
                                      children: /* @__PURE__ */ t(Ve, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: i.name }),
                                    /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(l / 60),
                                      ":",
                                      Math.floor(l % 60).toString().padStart(2, "0"),
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
                                i.preventDefault(), dt(!1);
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
                Xt && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => ut(!1),
                    children: /* @__PURE__ */ n(
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
                          /* @__PURE__ */ n(
                            "div",
                            {
                              className: "px-4 py-3 flex items-center justify-between",
                              style: { borderBottom: "1px solid var(--border-subtle)" },
                              children: [
                                /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ t(Ct, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => ut(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    title: "Close",
                                    children: /* @__PURE__ */ t(fe, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const i = vt.filter((l) => l.audioDataUrl);
                            return i.length === 0 ? /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(Ct, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : i.map((l) => {
                              const p = l.durationMs / 1e3, x = p > 0 && p < 6, _ = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ n(
                                "button",
                                {
                                  onClick: () => !x && An(l),
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
                                          background: l.coverDataUrl ? `url(${l.coverDataUrl}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                                          border: "1px solid var(--border-subtle)"
                                        },
                                        children: !l.coverDataUrl && /* @__PURE__ */ t(Ct, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: _ }),
                                      /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        p > 0 ? `${Math.floor(p / 60)}:${Math.floor(p % 60).toString().padStart(2, "0")}` : "—",
                                        l.styleTags && l.styleTags !== "—" && ` · ${l.styleTags}`,
                                        x && " · too short for cover (need ≥6 s)"
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
          /* @__PURE__ */ n(
            "div",
            {
              className: "grid gap-5 mb-5",
              style: { gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" },
              children: [
                /* @__PURE__ */ t(
                  ha,
                  {
                    label: a("musiccreator.theme.label"),
                    hint: a("musiccreator.theme.hint"),
                    headerExtra: /* @__PURE__ */ t(
                      jr,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: Mn,
                        busy: Pe === "theme",
                        disabled: V || Pe !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: b,
                        onChange: (i) => P(i.target.value),
                        onDragOver: ja,
                        onDrop: qn,
                        placeholder: a("musiccreator.theme.placeholder"),
                        disabled: V,
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
                  ha,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${Gn} / ${ld}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      jr,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: Rn,
                        busy: Pe === "style",
                        disabled: V || Pe !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: E,
                        onChange: (i) => I(i.target.value),
                        onDragOver: ja,
                        onDrop: Wn,
                        placeholder: a("musiccreator.style.placeholder"),
                        disabled: V,
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
          m !== "lyricsOnly" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-4 mb-5", children: [
            /* @__PURE__ */ t(Td, { onPick: Pn, disabled: V }),
            /* @__PURE__ */ t(
              _d,
              {
                specs: Y,
                onChange: Le,
                disabled: V,
                onOptimize: In,
                optimizing: wa
              }
            )
          ] }),
          /* @__PURE__ */ n(
            ha,
            {
              label: "Cover Art",
              hint: J?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ n("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  ni,
                  {
                    checked: ze,
                    onChange: rr,
                    disabled: V || !J?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      onClick: () => Do(!0),
                      disabled: V,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: U ? `url(${U}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: V ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !U && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ba, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        Xe && /* @__PURE__ */ t(
                          "div",
                          {
                            className: "absolute inset-0 flex items-center justify-center",
                            style: { background: "rgba(0,0,0,0.5)" },
                            children: /* @__PURE__ */ t(te, { size: 20, className: "animate-spin", style: { color: "white" } })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 flex flex-col gap-2", children: [
                    /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
                      /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: Eo,
                          disabled: V || Xe || !J?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: V || Xe || !J?.models.image ? "not-allowed" : "pointer"
                          },
                          title: J?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            Xe ? /* @__PURE__ */ t(te, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 11 }),
                            U ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => H.current?.click(),
                          disabled: V,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-secondary)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Upload your own image (PNG/JPG/WebP, max 4 MB)",
                          children: [
                            /* @__PURE__ */ t(Jr, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      U && /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            R(""), xe && sa.current?.(xe, "");
                          },
                          disabled: V,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-disabled)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Remove the cover and fall back to the gradient placeholder",
                          children: [
                            /* @__PURE__ */ t(fe, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => pt((i) => !i),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            le ? /* @__PURE__ */ t(Ns, { size: 11 }) : /* @__PURE__ */ t(bi, { size: 11 }),
                            le ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    le && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: ie,
                        onChange: (i) => Ke(i.target.value),
                        placeholder: Ja(F, b, E),
                        disabled: V,
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
                    ref: H,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (i) => {
                      const l = i.target.files?.[0];
                      l && Ao(l), i.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          m !== "restyle" && !K && /* @__PURE__ */ t(
            ha,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (Y.intent ?? "").length > 0 ? `${(Y.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: Y.intent ?? "",
                  onChange: (i) => Le((l) => ({ ...l, intent: i.target.value })),
                  placeholder: 'e.g. "first-person, mostly Spanish with one English chorus, mention rain, no clichés"',
                  disabled: V,
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
          /* @__PURE__ */ n(
            ha,
            {
              label: a("musiccreator.lyrics.label"),
              counter: K ? "instrumental — no vocals" : `${Oo} / ${Ft}`,
              counterDanger: !K && Oo > Ft,
              className: "mb-5",
              headerExtra: K ? void 0 : /* @__PURE__ */ t(
                jr,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: jn,
                  busy: Pe === "lyrics",
                  disabled: V || Pe !== null || !M.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: M,
                    onChange: (i) => C(i.target.value),
                    onDragOver: ja,
                    onDrop: Bn,
                    placeholder: K ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: V || K,
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
                /* @__PURE__ */ n("div", { className: "flex items-center gap-1 mt-2 flex-wrap", children: [
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
                  sd.map((i) => {
                    const l = k?.id === i.id;
                    return /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => {
                          l ? N(null) : (N(i), M.trim() || C(i.skeleton));
                        },
                        disabled: V,
                        className: "px-2 py-0.5 rounded-full transition-all disabled:opacity-40",
                        style: {
                          fontSize: 10,
                          fontWeight: l ? 600 : 500,
                          color: l ? "white" : "var(--text-secondary)",
                          background: l ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        title: i.description + (l ? " · click to clear" : " · click to use this form"),
                        children: [
                          l ? "✓ " : "",
                          i.label
                        ]
                      },
                      i.id
                    );
                  }),
                  k && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(wd, { player: X, allTracks: nt }),
      /* @__PURE__ */ t("audio", { ref: Ho, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      El,
      {
        open: w,
        onClose: () => u(!1),
        onUseRecipe: (i, l) => {
          h("compose"), P(i), I(l);
        }
      }
    ),
    hn && /* @__PURE__ */ t(
      Xd,
      {
        settings: yr,
        endpoints: La,
        onChange: gn,
        onClose: () => fr(!1)
      }
    ),
    jo && /* @__PURE__ */ t(
      Pd,
      {
        track: jo,
        endpoint: J,
        onSave: wr,
        onClose: () => Po(null)
      }
    ),
    On && /* @__PURE__ */ t(
      Dd,
      {
        songName: F,
        mode: m,
        theme: b,
        style: E,
        intent: Y.intent ?? "",
        lyrics: M,
        specs: Y,
        coverDataUrl: U,
        endpoint: J,
        busy: Xe,
        onRegenerate: Eo,
        onUpload: Ao,
        onClear: () => {
          R(""), xe && sa.current?.(xe, "");
        },
        onClose: () => Do(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(Sd, { retrying: vn, onRetry: vr });
}
function Xd({ settings: e, endpoints: a, onChange: r, onClose: o }) {
  const s = (c, d, f) => {
    const m = f.trim(), w = { ...e.overridesByEndpoint[c] ?? {} };
    m ? w[d] = m : delete w[d];
    const u = {
      ...e,
      overridesByEndpoint: {
        ...e.overridesByEndpoint,
        [c]: w
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
      children: /* @__PURE__ */ n(
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
            /* @__PURE__ */ n(
              "div",
              {
                className: "flex items-center gap-2 px-5 flex-shrink-0",
                style: {
                  height: 48,
                  borderBottom: "1px solid var(--border-subtle)",
                  background: "var(--bg-titlebar)"
                },
                children: [
                  /* @__PURE__ */ t(xi, { size: 14, style: { color: "var(--accent-primary)" } }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA Settings" }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: o,
                      className: "ml-auto flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                      style: { width: 24, height: 24, color: "var(--text-secondary)" },
                      title: "Close",
                      children: /* @__PURE__ */ t(fe, { size: 14 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: /* @__PURE__ */ n("div", { className: "px-5 py-4", children: [
              /* @__PURE__ */ n("div", { className: "mb-4", children: [
                /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }, children: "Model mapping" }),
                /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: [
                  "Pick a model id per endpoint. Each dropdown lists every id the gateway exposes via ",
                  /* @__PURE__ */ t("code", { style: { margin: "0 4px", color: "var(--accent-primary)" }, children: "/v1/models" }),
                  ", filtered to the right shape for that slot."
                ] }),
                /* @__PURE__ */ n(
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
                      /* @__PURE__ */ n("li", { children: [
                        /* @__PURE__ */ t("strong", { style: { color: "var(--text-secondary)" }, children: "Music / Cover" }),
                        " — sent in the",
                        /* @__PURE__ */ t("code", { style: { margin: "0 4px" }, children: "/music/generations" }),
                        " body."
                      ] }),
                      /* @__PURE__ */ n("li", { children: [
                        /* @__PURE__ */ t("strong", { style: { color: "var(--text-secondary)" }, children: "Lyrics" }),
                        " — usually leave on Auto. The ",
                        /* @__PURE__ */ t("code", { style: { margin: "0 4px" }, children: "/music/lyrics" }),
                        " endpoint runs minimax's internal lyrics generator server-side (no enumerable id). Only override if your gateway exposes a separate ",
                        /* @__PURE__ */ t("code", { children: "lyrics_generation" }),
                        " alias."
                      ] }),
                      /* @__PURE__ */ n("li", { children: [
                        /* @__PURE__ */ t("strong", { style: { color: "var(--text-secondary)" }, children: "Lyrics fallback" }),
                        " — chat model used when ",
                        /* @__PURE__ */ t("code", { style: { margin: "0 4px" }, children: "/music/lyrics" }),
                        " errors (quota, upstream 502)."
                      ] })
                    ]
                  }
                )
              ] }),
              a.length === 0 ? /* @__PURE__ */ n(
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
                    /* @__PURE__ */ t(fa, { size: 14, style: { color: "#fbbf24" } }),
                    "No reachable endpoints yet — connect a Tytus pod or start local switchAILocal, then come back."
                  ]
                }
              ) : /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", children: a.map((c) => {
                const d = e.overridesByEndpoint[c.url] ?? {}, f = [
                  { key: "music", label: "Music", discovered: c.models.music, kind: "music" },
                  { key: "cover", label: "Restyle", discovered: c.models.cover, kind: "cover" },
                  { key: "lyrics", label: "Lyrics", discovered: c.models.lyrics, kind: "lyrics" },
                  { key: "lyricsBackup", label: "Lyrics fallback", discovered: c.models.lyricsBackup, kind: "chat" },
                  { key: "image", label: "Cover art", discovered: c.models.image, kind: "image" }
                ], m = (u) => /music|cover/i.test(u), h = (u) => /image|diffusion|dall-?e|flux|sdxl/i.test(u), w = (u) => u === "chat" ? c.models.allIds.filter((y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(y)) : u === "image" ? c.models.allIds.filter(h) : c.models.allIds.filter(m);
                return /* @__PURE__ */ n(
                  "div",
                  {
                    className: "rounded-lg p-3",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: [
                      /* @__PURE__ */ n("div", { className: "flex items-center gap-2 mb-2", children: [
                        /* @__PURE__ */ t(
                          "span",
                          {
                            className: "rounded-full",
                            style: {
                              width: 6,
                              height: 6,
                              background: Qa(c),
                              boxShadow: `0 0 6px ${Qa(c)}`
                            }
                          }
                        ),
                        /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: c.label }),
                        /* @__PURE__ */ n("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                          c.url,
                          " · ",
                          c.models.allIds.length,
                          " models"
                        ] })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: f.map((u) => {
                        const y = w(u.kind), v = d[u.key] ?? "";
                        return /* @__PURE__ */ n(us, { children: [
                          /* @__PURE__ */ t(
                            "div",
                            {
                              className: "flex items-center",
                              style: { fontSize: 11, color: "var(--text-secondary)" },
                              children: u.label
                            }
                          ),
                          /* @__PURE__ */ n(
                            "select",
                            {
                              value: v,
                              onChange: (S) => s(c.url, u.key, S.target.value),
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
                                /* @__PURE__ */ t("option", { value: "", children: u.discovered ? `Auto · ${u.discovered}` : u.kind === "lyrics" ? "Auto · server-side (no model param)" : y.length === 0 ? "(no models match)" : "Auto · (no preferred match — pick one)" }),
                                y.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: y.map((S) => /* @__PURE__ */ t("option", { value: S, children: S }, S)) })
                              ]
                            }
                          )
                        ] }, u.key);
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
function au(e) {
  const a = e.host.storage.current();
  return Bl(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(ps, { value: e, children: /* @__PURE__ */ t(Kd, {}) });
  };
}
export {
  au as default
};
//# sourceMappingURL=index.js.map
