import { jsx as t, jsxs as n, Fragment as de } from "react/jsx-runtime";
import { createContext as di, useContext as ui, forwardRef as pi, createElement as Ur, useState as S, useEffect as q, useMemo as he, useRef as ee, useCallback as R, Fragment as ps } from "react";
import { createPortal as Za } from "react-dom";
const mi = di(null), ms = mi.Provider;
function Vt() {
  const e = ui(mi);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gs = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, i) => i ? i.toUpperCase() : r.toLowerCase()
), Fo = (e) => {
  const a = gs(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, hi = (...e) => e.filter((a, r, i) => !!a && a.trim() !== "" && i.indexOf(a) === r).join(" ").trim(), ys = (e) => {
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
var fs = {
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
const bs = pi(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: i,
    className: s = "",
    children: c,
    iconNode: d,
    ...f
  }, m) => Ur(
    "svg",
    {
      ref: m,
      ...fs,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: i ? Number(r) * 24 / Number(a) : r,
      className: hi("lucide", s),
      ...!c && !ys(f) && { "aria-hidden": "true" },
      ...f
    },
    [
      ...d.map(([g, w]) => Ur(g, w)),
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
  const r = pi(
    ({ className: i, ...s }, c) => Ur(bs, {
      ref: c,
      iconNode: a,
      className: hi(
        `lucide-${hs(Fo(e))}`,
        `lucide-${e}`,
        i
      ),
      ...s
    })
  );
  return r.displayName = Fo(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], xs = D("album", vs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Jt = D("check", ws);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], gi = D("chevron-down", ks);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Bo = D("chevron-left", Ss);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], _s = D("chevron-right", Ts);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Cs = D("chevron-up", Ns);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], fa = D("circle-alert", Es);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], zs = D("circle-question-mark", As);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], yi = D("copy", Ls);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], Ct = D("disc-3", Is);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], fi = D("download", Ms);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], qr = D("ellipsis-vertical", Rs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], bi = D("external-link", js);
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
      d: "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35",
      key: "5ad7z2"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 20v-7l3 1.474", key: "1ggyb9" }],
  ["circle", { cx: "6", cy: "20", r: "2", key: "j7wjp0" }]
], Et = D("file-music", Ps);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], Us = D("folder-open", Ds);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], Ga = D("heart", Os);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ba = D("image", Hs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
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
], Or = D("layers", $s);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Bs = D("list-music", Fs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], te = D("loader-circle", Ws);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Ke = D("mic", qs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], Wo = D("monitor-speaker", Js);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], qo = D("monitor", Gs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], va = D("music-2", Vs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], Va = D("notebook-text", Ys);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], ft = D("pause", Ks);
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], vi = D("pencil", Xs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], ge = D("play", Qs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Hr = D("plus", Zs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], tl = D("radio", el);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], rl = D("refresh-cw", al);
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
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], xi = D("repeat-1", ol);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], nl = D("repeat", il);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], lt = D("search", sl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], wi = D("settings-2", ll);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], Jr = D("shuffle", cl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = [
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
], $e = D("sparkles", dl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ki = D("square-check-big", ul);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], Si = D("square", pl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], At = D("trash-2", ml);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Gr = D("upload", hl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gl = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], yl = D("user-round", gl);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], bl = D("volume-2", fl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vl = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], xl = D("volume-x", vl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = [
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
], zt = D("wand-sparkles", wl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ye = D("x", kl), Sl = {
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
}, Tl = {
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
}, Jo = { en: Sl, es: Tl }, Ua = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", _l = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, i) => String(a[i] ?? `{${i}}`)) : e;
function It() {
  const { host: e } = Vt(), [a, r] = S(() => Ua(e.i18n?.locale));
  q(() => e.i18n?.onLocaleChange?.((s) => r(Ua(s))), [e]);
  const i = he(() => (s, c) => {
    const d = e.i18n?.t?.(s, c);
    if (d && d !== s) return d;
    const f = Ua(a), m = Jo[f]?.[s] ?? Jo.en[s] ?? s;
    return _l(m, c);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: i,
    setLanguage: (s) => r(Ua(s)),
    installLanguagePack: (s) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (s) => {
    }
  };
}
const Nl = [
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
], Cl = [
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
function El({ recipe: e, onUse: a }) {
  const { t: r } = It(), [i, s] = S(!1), c = async () => {
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
              children: i ? /* @__PURE__ */ t(Jt, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(yi, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function Al({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: i, language: s } = It(), [c, d] = S("start");
  if (!e) return null;
  const f = s === "es" ? Cl : Nl;
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
            /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", style: { paddingBottom: 96 }, children: [
              c === "start" && /* @__PURE__ */ n("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t($e, { size: 14 }), text: i("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(Oa, { n: 1, title: i("julietaHelp.start.s1.title"), body: i("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(Oa, { n: 2, title: i("julietaHelp.start.s2.title"), body: i("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(Oa, { n: 3, title: i("julietaHelp.start.s3.title"), body: i("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(Oa, { n: 4, title: i("julietaHelp.start.s4.title"), body: i("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(zt, { size: 14 }), text: i("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ n("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(Nr, { emoji: "🎵", name: i("julietaHelp.start.mode.song.name"), body: i("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(Nr, { emoji: "🎨", name: i("julietaHelp.start.mode.cover.name"), body: i("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(Nr, { emoji: "✍️", name: i("julietaHelp.start.mode.lyrics.name"), body: i("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(Ke, { size: 14 }), text: i("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(zl, { body: i("julietaHelp.start.recorder.body") }),
                /* @__PURE__ */ n(
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
              c === "recipes" && /* @__PURE__ */ n("div", { className: "space-y-3", children: [
                /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: i("julietaHelp.recipes.intro") }),
                f.map((m) => /* @__PURE__ */ t(
                  El,
                  {
                    recipe: m,
                    onUse: (g) => {
                      r(g.theme, g.style), a();
                    }
                  },
                  m.id
                ))
              ] }),
              c === "help" && /* @__PURE__ */ n("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(fa, { size: 14 }), text: i("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.failed.title"), a: i("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.nopod.title"), a: i("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.local.title"), a: i("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(zt, { size: 14 }), text: i("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.howlong.title"), a: i("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.quota.title"), a: i("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.length.title"), a: i("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.coverlen.title"), a: i("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t($t, { icon: /* @__PURE__ */ t(Ke, { size: 14 }), text: i("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.silentmic.title"), a: i("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.shortrec.title"), a: i("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t(Ve, { q: i("julietaHelp.help.q.privacy.title"), a: i("julietaHelp.help.q.privacy.body") })
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
function zl({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function Ve({ q: e, a }) {
  const [r, i] = S(!1);
  return /* @__PURE__ */ n(
    "div",
    {
      className: "rounded-lg overflow-hidden",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: [
        /* @__PURE__ */ n(
          "button",
          {
            onClick: () => i((s) => !s),
            className: "w-full flex items-center gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            children: [
              /* @__PURE__ */ t(
                _s,
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
}, Ll = () => {
  const { host: e } = Vt(), [a, r] = S(0), [i, s] = S(() => Cr(e.daemon?.state));
  return q(() => (s(Cr(e.daemon?.state)), e.daemon?.onStateChange?.((c) => s(Cr(c)))), [e, a]), he(() => ({
    state: i,
    error: null,
    status: i ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((c) => c + 1)
  }), [i]);
}, Il = (e, a) => {
  const { host: r } = Vt();
  q(() => {
    if (!(!a || !r.shellMenu?.register))
      return r.shellMenu.register({
        appId: r.appId,
        groups: a.groups.map((i) => ({
          label: i.label,
          items: i.items.map((s) => ({
            id: s.id,
            label: s.label,
            disabled: s.disabled,
            onClick: s.onSelect
          }))
        }))
      });
  }, [r, a]);
};
function Ml() {
  return Vt().host.windows.current;
}
const Ti = "juli3ta_standalone_vfs_v1", _i = () => Math.random().toString(36).slice(2) + Date.now().toString(36), _t = (e, a) => ({
  id: _i(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), Rl = () => {
  const e = _t("/", null), a = _t("home", e.id), r = _t("user", a.id), i = _t("Desktop", r.id), s = _t("Music", r.id), c = _t("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, i, s, c].map((d) => [d.id, d])) };
}, Ha = () => {
  try {
    const a = localStorage.getItem(Ti);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = Rl();
  return Wa(e), e;
}, Wa = (e) => {
  try {
    localStorage.setItem(Ti, JSON.stringify(e));
  } catch {
  }
}, jl = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), Pl = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function Dl() {
  return {
    ensureUserFolder(a) {
      const r = Ha(), i = jl(a);
      let s = Object.values(r.nodes).find((c) => c.type === "folder" && c.name === i);
      if (!s) {
        const c = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        s = _t(i, c?.id ?? null), r.nodes[s.id] = s, Wa(r);
      }
      return s.id;
    },
    findChildByName(a, r) {
      const i = Ha();
      return Object.values(i.nodes).find((s) => s.parentId === a && s.name === r);
    },
    createFile(a, r, i = "", s = {}) {
      const c = Ha(), d = { id: _i(), name: r, type: "file", parentId: a, content: i, mimeType: s.mimeType, refTrackId: s.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return c.nodes[d.id] = d, Wa(c), d.id;
    },
    writeFile(a, r) {
      const i = Ha();
      i.nodes[a] && (i.nodes[a].content = r, i.nodes[a].modifiedAt = Date.now(), Wa(i));
    }
  };
}
const Ul = { theme: { mode: "dark" } }, Ol = di(null);
function Ni() {
  const e = ui(Ol), { host: a } = Vt();
  return he(() => e || {
    state: Ul,
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
function Hl() {
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
const $l = {
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
}, Fl = {
  juli3ta: $l
};
function Ci({ name: e, size: a = 24, className: r, style: i, alt: s, scale: c }) {
  const [d, f = "mark"] = e.split(":"), m = Fl[d], { state: g } = Ni();
  let w;
  if (f === "mark" ? w = g.theme.mode === "light" ? m?.["mark-ink"] : m?.["mark-white"] : w = m?.[f], !w) return null;
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
        ...i
      },
      className: r,
      draggable: !1
    }
  );
}
let Ei = null, Go = null;
const Er = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), Bl = [
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
function Wl(e) {
  Go = (async () => {
    for (const r of Bl) await e.run(r);
  })();
  const a = async () => Go;
  Ei = {
    exec: async (r) => {
      await a();
      for (const i of Er(r).split(";").map((s) => s.trim()).filter(Boolean))
        await e.run(i);
    },
    query: async (r, i = []) => (await a(), e.query(Er(r), i)),
    run: async (r, i = []) => {
      await a(), await e.run(Er(r), i);
    },
    tx: async (r) => (await a(), r())
  };
}
const ae = () => Ei, Ya = (e) => ({
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
}), G = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), Vr = (e) => G(e, "specs_json") || G(e, "cover_data_url") || G(e, "theme") || G(e, "source") || G(e, "audio_kind") || G(e, "external_id") || G(e, "external_url") || G(e, "thumbnail_url") || G(e, "artist") || G(e, "album"), Vo = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, Yo = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
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
}), Ai = async (e, a, r, i) => {
  if (G(i, "source") || G(i, "audio_kind") || G(i, "external_id") || G(i, "external_url") || G(i, "thumbnail_url") || G(i, "artist") || G(i, "album"))
    try {
      return (await e.query(
        `SELECT ${Vo}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(St);
    } catch (s) {
      i = s;
    }
  if (G(i, "theme"))
    try {
      return (await e.query(
        `SELECT ${Vo} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => St({ ...c, theme: "" }));
    } catch (s) {
      if (!G(s, "cover_data_url")) throw s;
      try {
        return (await e.query(
          `SELECT ${Yo} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => St({ ...d, cover_data_url: "", theme: "" }));
      } catch (c) {
        if (!G(c, "specs_json")) throw c;
        return (await e.query(
          `SELECT ${Ar} FROM music_creator_tracks ${a}`,
          r
        )).map((f) => St({ ...f, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (G(i, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${Yo} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => St({ ...c, cover_data_url: "", theme: "" }));
    } catch (s) {
      if (!G(s, "specs_json")) throw s;
      return (await e.query(
        `SELECT ${Ar} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => St({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (G(i, "specs_json"))
    return (await e.query(
      `SELECT ${Ar} FROM music_creator_tracks ${a}`,
      r
    )).map((c) => St({ ...c, specs_json: "", cover_data_url: "", theme: "" }));
  throw i;
}, zi = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, ql = async () => {
  const e = ae();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${zi} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(Ya);
  } catch (a) {
    if (!Vr(a)) throw a;
    return (await Ai(e, "ORDER BY created_at DESC", [], a)).map(Ya);
  }
}, Jl = async (e) => {
  const a = ae();
  if (!a) return null;
  try {
    const r = await a.query(
      `SELECT ${zi} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return r.length === 0 ? null : Ya(r[0]);
  } catch (r) {
    if (!Vr(r)) throw r;
    const i = await Ai(a, "WHERE id = ? LIMIT 1", [e], r);
    return i.length === 0 ? null : Ya(i[0]);
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
  } catch (i) {
    if (!Vr(i)) throw i;
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
      } catch (s) {
        i = s;
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
      } catch (s) {
        if (!G(s, "cover_data_url")) throw s;
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
      } catch (s) {
        if (!G(s, "specs_json")) throw s;
      }
    await a.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      r
    );
  }
}, Gl = async (e) => {
  const a = ae();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Vl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  const i = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [i, e]), i;
}, Yl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (i) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(i))) throw i;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, Kl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, Xl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, Ql = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (i) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(i))) throw i;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, Zl = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (i) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(i))) throw i;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, ec = async (e, a) => {
  const r = ae();
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
}, tc = async (e, a) => {
  const r = ae();
  r && await r.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(a)]
  );
}, Li = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, Ii = "music_creator_settings", ac = () => ec(Ii, Li), rc = (e) => tc(Ii, e), Lt = () => Date.now(), Mi = (e) => ({
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
}), oc = (e) => ({
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
}), Ri = [
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
], ic = Ri.join(", "), nc = Ri.map((e) => `t.${e}`).join(", "), sc = async () => {
  const e = ae();
  return e ? (await e.query(
    `SELECT ${ic} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(Mi) : [];
}, ji = async (e) => {
  const a = ae();
  if (!a) throw new Error("Database not ready");
  const r = oc(e);
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
}, lc = async (e) => {
  const a = ae();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, cc = async () => {
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
}, dc = async (e) => {
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
}, uc = async (e) => {
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
    `SELECT pi.playlist_id, pi.pos, ${nc}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), i = /* @__PURE__ */ new Map();
  return r.forEach((s) => {
    i.set(s.playlist_id, [...i.get(s.playlist_id) ?? [], Mi(s)]);
  }), a.map((s) => ({
    id: s.id,
    name: s.name,
    createdAt: s.created_at,
    updatedAt: s.updated_at,
    items: i.get(s.id) ?? []
  }));
}, pc = async (e) => {
  const a = ae();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", i = Lt(), s = { id: `playlist:${i}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: i, updatedAt: i, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [s.id, s.name, s.createdAt, s.updatedAt]
  ), s;
}, mc = async (e) => {
  const a = ae();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, hc = async (e, a) => {
  const r = ae();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await ji(a);
    const i = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), s = Number(i[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, s, Lt()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [Lt(), e]);
  });
}, gc = async (e, a) => {
  const r = ae();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [Lt(), e]));
}, yc = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), Ko = async () => {
  const e = ae();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(yc) : [];
}, Pi = async (e) => {
  const a = ae();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, zr = "tytus.voice-recorder.recordings", fc = async () => {
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
          await Pi({
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
}, bc = (e, a) => e._value, Yr = 100, vc = 30, qa = 6, xc = 360, Xo = 12, wc = 3, kc = 0.4, Sc = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const i = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((d) => MediaRecorder.isTypeSupported(d));
  if (!i)
    throw new Error("No supported recorder mime type for fallback.");
  const s = URL.createObjectURL(e), c = new Audio();
  c.src = s, c.muted = !0, c.crossOrigin = "anonymous", c.preload = "auto";
  try {
    await new Promise((k, M) => {
      const T = () => k(), E = () => M(new Error("Audio element rejected the source format too — browser cannot play it."));
      c.addEventListener("canplay", T, { once: !0 }), c.addEventListener("error", E, { once: !0 }), c.load();
    });
    const d = a.createMediaElementSource(c), f = a.createMediaStreamDestination();
    d.connect(f);
    const m = new MediaRecorder(f.stream, { mimeType: i }), g = [];
    m.ondataavailable = (k) => {
      k.data.size > 0 && g.push(k.data);
    };
    const w = Math.max(
      6e3,
      Math.min(r, c.duration || r) * 1e3
    ), u = new Promise((k) => {
      m.onstop = () => k();
    });
    m.start(250), c.currentTime = 0, await c.play(), await new Promise((k) => setTimeout(k, w)), m.stop(), c.pause(), await u;
    const y = new Blob(g, { type: i });
    if (y.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const b = await y.arrayBuffer();
    return await a.decodeAudioData(b);
  } finally {
    URL.revokeObjectURL(s);
  }
}, Di = async (e, a = 35) => {
  const r = window.AudioContext || window.webkitAudioContext, i = new r();
  try {
    const s = await e.arrayBuffer();
    try {
      return await i.decodeAudioData(s.slice(0));
    } catch (c) {
      try {
        return await Sc(e, i, a);
      } catch (d) {
        const f = c.message || "decodeAudioData failed", m = d.message || "fallback failed";
        throw new Error(
          `Audio format isn't supported by this browser (${f}). Compatibility-mode capture also failed: ${m}`
        );
      }
    }
  } finally {
    i.close().catch(() => {
    });
  }
}, Ui = async (e) => (await fetch(e)).blob(), $r = (e) => new Promise((a, r) => {
  const i = new FileReader();
  i.onload = () => {
    const s = typeof i.result == "string" ? i.result : "", c = s.indexOf("base64,");
    a(c >= 0 ? s.slice(c + 7) : "");
  }, i.onerror = () => r(i.error), i.readAsDataURL(e);
}), Tc = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Yr / 1e3)), i = Math.floor(e.length / r), s = new Float32Array(i), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < i; d++) {
    const f = d * r;
    let m = 0;
    for (let g = 0; g < r; g++) {
      let w = 0;
      for (let u = 0; u < c.length; u++) w += c[u][f + g];
      w /= c.length, m += w * w;
    }
    s[d] = Math.sqrt(m / r);
  }
  return s;
}, _c = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Yr / 1e3)), i = Math.floor(e.length / r), s = new Float32Array(i), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < i; d++) {
    const f = d * r;
    let m = 0, g = 0;
    for (let w = 0; w < c.length; w++) g += c[w][f];
    g /= c.length;
    for (let w = 1; w < r; w++) {
      let u = 0;
      for (let y = 0; y < c.length; y++) u += c[y][f + w];
      u /= c.length, (g > 1e-3 && u < -1e-3 || g < -1e-3 && u > 1e-3) && m++, g = u;
    }
    s[d] = m / (r / 2);
  }
  return s;
}, Oi = (e) => {
  const a = Tc(e), r = _c(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / Yr };
}, Nc = (e, a = 4) => {
  let r = 0;
  for (let m = 0; m < e.length; m++) r += e[m];
  const i = r / e.length;
  let s = 0;
  for (let m = 0; m < e.length; m++) s += (e[m] - i) ** 2;
  const c = Math.sqrt(s / e.length) || 1, d = Math.floor(e.length / a), f = new Float32Array(d);
  for (let m = 0; m < d; m++) {
    let g = 0;
    for (let w = 0; w < a; w++) g += e[m * a + w];
    f[m] = (g / a - i) / c;
  }
  return f;
}, Cc = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const i = Math.max(1, Math.floor(r / 4));
  let s = -1 / 0, c = 0;
  for (let m = 0; m + r < e.length; m += i) {
    if (Math.abs(m - a) < r) continue;
    let g = 0;
    for (let w = 0; w < r; w++)
      g += e[a + w] * e[m + w];
    g /= r, g > s && (s = g), g > 0.5 && c++;
  }
  const d = Math.max(0, Math.min(1, (s + 1) / 2)), f = Math.min(1, c / 6);
  return 0.6 * d + 0.4 * f;
}, Hi = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const i = Nc(e.rms, 4), s = e.rms.length / i.length, c = Math.max(1, Math.floor(r / s));
  let d = 0, f = 0, m = 0;
  for (let y = 0; y < r; y++)
    d += e.rms[y], f += e.rms[y] * e.rms[y], m += e.centroid[y];
  const g = [], w = Math.max(1, Math.floor(e.framesPerSec)), u = (y) => {
    const b = d / r, k = Math.max(0, f / r - b * b), M = Math.sqrt(k), T = m / r, E = Math.floor(y / s), L = Cc(i, E, c), N = 0.45 * Math.min(1, b * 4) + 0.2 * T + 0.25 * L - 0.1 * Math.min(1, M * 6);
    g.push({
      startFrame: y,
      lenFrames: r,
      score: N,
      meanRms: b,
      stdRms: M,
      meanBright: T,
      selfSim: L
    });
  };
  u(0);
  for (let y = r; y < e.rms.length; y += w) {
    for (let b = 0; b < w && y - w + b < e.rms.length; b++) {
      const k = y - r - w + b + 1, M = y - w + b + 1;
      if (M >= e.rms.length) break;
      k >= 0 && (d -= e.rms[k], f -= e.rms[k] * e.rms[k], m -= e.centroid[k]), d += e.rms[M], f += e.rms[M] * e.rms[M], m += e.centroid[M];
    }
    u(y - r + w);
  }
  return g;
}, Fr = (e, a, r) => {
  const i = new Float32Array(r), s = [];
  for (let c = 0; c < e.numberOfChannels; c++) s.push(e.getChannelData(c));
  for (let c = 0; c < r; c++) {
    let d = 0;
    for (let f = 0; f < s.length; f++) d += s[f][a + c] || 0;
    i[c] = d / s.length;
  }
  return i;
}, Br = (e, a) => {
  const s = a * 1 * 2, c = 1 * (16 / 8), d = e.length * 2, f = new ArrayBuffer(44 + d), m = new DataView(f);
  let g = 0;
  const w = (b) => {
    for (let k = 0; k < b.length; k++) m.setUint8(g++, b.charCodeAt(k));
  }, u = (b) => {
    m.setUint32(g, b, !0), g += 4;
  }, y = (b) => {
    m.setUint16(g, b, !0), g += 2;
  };
  w("RIFF"), u(36 + d), w("WAVE"), w("fmt "), u(16), y(1), y(1), u(a), u(s), y(c), y(16), w("data"), u(d);
  for (let b = 0; b < e.length; b++) {
    const k = Math.max(-1, Math.min(1, e[b]));
    m.setInt16(g, k < 0 ? k * 32768 : k * 32767, !0), g += 2;
  }
  return new Blob([f], { type: "audio/wav" });
}, $i = async (e, a = vc) => {
  const r = typeof e == "string" ? await Ui(e) : e, i = await Di(r), s = i.length / i.sampleRate;
  if (s < qa)
    throw new Error(`Source is too short (${s.toFixed(1)} s). Need at least ${qa} s.`);
  const c = Math.min(xc, Math.max(qa, a));
  if (s <= c) {
    const k = Fr(i, 0, i.length), M = Br(k, i.sampleRate);
    return { base64: await $r(M), durationSec: s, startSec: 0, sourceDurationSec: s, score: 1 };
  }
  const d = Oi(i), f = Hi(d, c);
  if (f.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  f.sort((k, M) => M.score - k.score);
  const m = f[0], g = Math.floor(m.startFrame / d.framesPerSec * i.sampleRate), w = Math.floor(m.lenFrames / d.framesPerSec * i.sampleRate), u = Fr(i, g, w), y = Br(u, i.sampleRate);
  return {
    base64: await $r(y),
    durationSec: w / i.sampleRate,
    startSec: g / i.sampleRate,
    sourceDurationSec: s,
    score: Math.max(0, Math.min(1, m.score))
  };
}, Ec = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const i = Math.floor(r * a);
  let s = 0;
  for (const f of e) s += f.length;
  s -= i * (e.length - 1);
  const c = new Float32Array(s);
  let d = 0;
  c.set(e[0], 0), d = e[0].length - i;
  for (let f = 1; f < e.length; f++) {
    const m = e[f];
    for (let g = 0; g < i; g++) {
      const w = g / i;
      c[d + g] = c[d + g] * (1 - w) + m[g] * w;
    }
    for (let g = i; g < m.length; g++)
      c[d + g] = m[g];
    d += m.length - i;
  }
  return c;
}, Ac = (e, a, r) => {
  const i = [...e].sort((c, d) => d.score - c.score), s = [];
  for (const c of i)
    if (s.some(
      (f) => Math.abs(f.startFrame - c.startFrame) < Math.max(f.lenFrames, c.lenFrames) + r
    ) || s.push(c), s.length >= a) break;
  return s.sort((c, d) => c.startFrame - d.startFrame), s;
}, zc = async (e) => {
  const a = typeof e == "string" ? await Ui(e) : e, r = await Di(a), i = r.length / r.sampleRate;
  if (i < qa * 2) {
    const b = await $i(a);
    return {
      base64: b.base64,
      durationSec: b.durationSec,
      segments: [{ startSec: b.startSec, endSec: b.startSec + b.durationSec, score: b.score }],
      sourceDurationSec: i
    };
  }
  const s = Oi(r), c = Hi(s, Xo);
  if (c.length === 0)
    throw new Error("Could not analyze the audio.");
  const d = Math.max(
    Math.floor(Xo * s.framesPerSec * 0.5),
    Math.floor(s.rms.length / 4)
  ), f = Ac(c, wc, d), m = f.map((b) => {
    const k = Math.floor(b.startFrame / s.framesPerSec * r.sampleRate), M = Math.floor(b.lenFrames / s.framesPerSec * r.sampleRate);
    return Fr(r, k, M);
  }), g = Ec(m, r.sampleRate, kc), w = Br(g, r.sampleRate), u = await $r(w), y = f.map((b) => ({
    startSec: b.startFrame / s.framesPerSec,
    endSec: (b.startFrame + b.lenFrames) / s.framesPerSec,
    score: Math.max(0, Math.min(1, b.score))
  }));
  return {
    base64: u,
    durationSec: g.length / r.sampleRate,
    segments: y,
    sourceDurationSec: i
  };
};
class Fi extends Error {
  status;
  code;
  constructor(a, r, i) {
    super(i), this.name = "MusicDaemonError", this.status = a, this.code = r;
  }
}
const Yt = async (e, a) => {
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
    const s = i, c = typeof s?.error == "string" ? s.error : `http_${r.status}`;
    throw new Fi(r.status, c, c === "music_unavailable" ? "Music search is still starting up." : c);
  }
  return i;
}, Bi = async (e, a, r) => {
  const i = await fetch(e, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json", "Sec-Fetch-Site": "same-origin" },
    credentials: "same-origin",
    body: JSON.stringify(a),
    signal: r
  });
  let s = null;
  try {
    s = await i.json();
  } catch {
    s = null;
  }
  if (!i.ok) {
    const c = s, d = typeof c?.error == "string" ? c.error : `http_${i.status}`;
    throw new Fi(i.status, d, d);
  }
  return s;
}, Lc = (e) => Yt("/api/music/status", e), Qo = async (e) => (await Yt("/api/music/providers", e)).providers ?? [], Zo = async (e) => (await Yt("/api/music/connectors", e)).connectors ?? [], Ic = (e, a, r) => Bi("/api/music/connectors/configure", { provider: e, credentials: a }, r), Mc = (e, a) => Bi("/api/music/connectors/disconnect", { provider: e }, a), Rc = async (e, a = 20, r) => {
  const i = new URLSearchParams({ q: e, limit: String(a) });
  return (await Yt(`/api/music/search?${i.toString()}`, r)).results ?? [];
}, jc = (e, a = "tracks,albums,artists,playlists", r = 20, i) => {
  const s = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return Yt(`/api/music/search2?${s.toString()}`, i);
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
  }), i = await r.text();
  let s = null;
  try {
    s = i ? JSON.parse(i) : null;
  } catch {
    s = i;
  }
  if (!r.ok) {
    const c = typeof s == "object" && s && "error" in s ? String(s.error) : i || r.statusText;
    throw new Error(c);
  }
  return s;
}, Ir = async () => er("/api/juli3ta/library/tracks"), ei = async (e) => (await er(
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
)).track, Pc = async (e) => {
  await er("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, Dc = async () => (await er("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, ya = "application/x-juli3ta-track", $a = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", Wi = (e) => e.source !== "youtube", pa = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const i of r)
      a.has(i.id) || a.set(i.id, i);
  return Array.from(a.values()).sort((r, i) => i.createdAt - r.createdAt);
}, Uc = (e) => Wi(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), Oc = "http://localhost:18080/v1", Hc = "sk-test-123", Nt = [
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
], $c = Nt.flatMap((e) => e.chips), Fc = ["very_slow", "slow", "medium", "fast", "very_fast"], Bc = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], Wc = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], qc = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], Jc = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], Gc = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], Vc = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], Yc = ["narrow", "medium", "wide"], Kc = ["none", "gradual", "sudden"], Xc = ["low", "medium", "high"], Qc = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], Zc = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], ed = ["male", "female", "mixed", "other", "none"], td = [
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
], ad = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], rd = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], od = [
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
], id = [
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
], nd = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], Z = (e) => e.replace(/_/g, " "), sd = (e, a, r) => {
  const i = (c) => c.trim().replace(/^[-••\d.)(]+\s*/, "").trim(), s = (c, d) => i(c).split(/\s+/).slice(0, d).join(" ");
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
}, Kr = (e) => {
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
  const i = [];
  e.dynamics?.overall_dynamic_range && i.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && i.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && i.push("big drops"), i.length && a.push(i.join(", ")), e.mood?.primary_moods?.length && a.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && a.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && a.push(`For: ${e.mood.occasion_tags.map(Z).join(", ")}`);
  const s = [];
  return e.context?.era_reference && s.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && s.push(`${Z(e.context.cultural_region)} scene`), e.context?.intended_use?.length && s.push(`use: ${e.context.intended_use.map(Z).join("/")}`), e.context?.explicit_lyrics && s.push("explicit lyrics"), s.length && a.push(s.join(", ")), a.join(". ");
}, ld = [
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
], ti = "tytus.music-creator.gallery", ai = "tytus.music-creator", Mr = "gallery", Ft = 3500, cd = 2e3, De = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), i = a % 60;
  return `${r}:${i.toString().padStart(2, "0")}`;
}, qi = (e) => e.source === "youtube" && !!e.externalId, ve = (e) => !!e.audioDataUrl || qi(e), tr = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? Xa(e.externalId) : ""), Xa = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", Ji = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), i = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return i ? { artist: i[1].trim(), song: i[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, ma = (e) => `youtube:${e}`, dd = async () => {
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
    const a = localStorage.getItem(ti);
    if (a) {
      const r = JSON.parse(a);
      if (Array.isArray(r))
        for (const i of r)
          try {
            await Ka(e(i));
          } catch {
          }
      localStorage.removeItem(ti);
    }
  } catch (a) {
    console.warn("Legacy localStorage gallery migration failed:", a);
  }
  try {
    const a = await new Promise((r) => {
      const i = indexedDB.open(ai);
      i.onsuccess = () => {
        const s = i.result;
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
      }, i.onerror = () => r([]);
    });
    for (const r of a)
      try {
        await Ka(e(r));
      } catch {
      }
    a.length > 0 && indexedDB.deleteDatabase(ai);
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
}, ud = (e, a) => {
  const r = [];
  for (const i of a)
    i.endpoint && i.user_key && r.push({
      url: `${i.endpoint.replace(/\/$/, "")}/v1`,
      apiKey: bc(i.user_key),
      podId: i.pod_id,
      source: "included",
      label: `AIL gateway ${i.pod_id}`,
      models: Wt
    });
  return r.push({
    url: Oc,
    apiKey: Hc,
    podId: "local",
    source: "local",
    label: "Local AIL",
    models: Wt
  }), r;
}, pd = (e) => {
  const a = (u, y) => {
    const b = u.map((k) => k.toLowerCase());
    for (const k of y) {
      const M = b.findIndex((T) => k.test(T));
      if (M >= 0) return u[M];
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
  ]), s = new Set([r, i].filter((u) => !!u)), c = e.filter((u) => !s.has(u)), d = a(c, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), f = (u) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(u), m = e.filter((u) => !f(u)), g = a(m, [
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
}, md = 6e4, Rr = /* @__PURE__ */ new Map(), hd = async (e, a) => {
  const r = Rr.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: Wt };
    Rr.delete(e.url);
  }
  const i = Gt(a, yd);
  try {
    const s = await fetch(`${e.url}/models`, {
      method: "GET",
      signal: i.signal,
      headers: { Authorization: `Bearer ${e.apiKey}` }
    });
    if (s.status >= 500) return { ok: !1, models: Wt };
    if (!s.ok) return { ok: !0, models: Wt };
    const d = ((await s.json()).data ?? []).map((f) => f?.id).filter((f) => typeof f == "string" && f.length > 0);
    return { ok: !0, models: pd(d) };
  } catch (s) {
    return (s?.name ?? "") === "TypeError" && Rr.set(e.url, Date.now() + md), { ok: !1, models: Wt };
  } finally {
    i.dispose();
  }
}, gd = async (e, a) => (await Promise.all(
  e.map(async (i) => {
    if (a.aborted) return null;
    const { ok: s, models: c } = await hd(i, a);
    return s ? { ...i, models: c } : null;
  })
)).filter((i) => i !== null), Fa = 6e4, ri = 3e5, yd = 8e3, Gt = (e, a) => {
  const r = AbortSignal.any, i = AbortSignal.timeout;
  if (r && i) {
    const d = i(a);
    return { signal: e ? r([e, d]) : d, dispose: () => {
    } };
  }
  const s = new AbortController(), c = setTimeout(() => {
    s.signal.aborted || s.abort(new DOMException("Timeout", "TimeoutError"));
  }, a);
  return e && (e.aborted ? s.abort(e.reason) : e.addEventListener("abort", () => s.abort(e.reason), { once: !0 })), { signal: s.signal, dispose: () => clearTimeout(c) };
}, fd = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]);
class _e extends Error {
  status;
  body;
  constructor(a, r, i) {
    super(i ?? `HTTP ${a}: ${r.slice(0, 200)}`), this.name = "GatewayError", this.status = a, this.body = r;
  }
}
function Gi(e) {
  const a = e.indexOf("{");
  if (a === -1) return null;
  let r = 0, i = !1, s = !1;
  for (let c = a; c < e.length; c++) {
    const d = e[c];
    if (i) {
      if (s) {
        s = !1;
        continue;
      }
      if (d === "\\") {
        s = !0;
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
const ar = async (e, a, r) => {
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
      if (d instanceof _e && fd.has(d.status)) {
        i = d;
        continue;
      }
      throw d;
    }
  const s = i?.message ?? "unknown";
  throw new Error(`All ${r} models exhausted. Last error: ${s}. Wait for the rate limit to reset, or pick a different endpoint in Settings.`);
}, bd = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), vd = async (e, a, r) => {
  let i = 0, s = "";
  const c = Gt(r, Fa);
  try {
    const y = { prompt: a, mode: "write_full_song" };
    e.models.lyrics && (y.model = e.models.lyrics);
    const b = await fetch(`${e.url}/music/lyrics`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${e.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(y),
      signal: c.signal
    });
    if (b.ok) {
      const k = await b.json();
      if (!k || typeof k.lyrics != "string" || k.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...k, usedFallback: !1 };
    }
    i = b.status, s = await b.text().catch(() => "");
  } catch (y) {
    const b = y.name;
    if (b === "AbortError" && r?.aborted) throw y;
    if (b === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${Fa / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", y);
  } finally {
    c.dispose();
  }
  if (i !== 0 && !bd.has(i)) {
    const y = s.length > 300 ? `${s.slice(0, 300)}…` : s;
    throw new Error(`Lyrics HTTP ${i}: ${y || "no body"}`);
  }
  i !== 0 && console.warn(`Lyrics primary HTTP ${i} (retryable), falling back to chat:`, s);
  const d = (y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(y), f = /* @__PURE__ */ new Set(), m = [], g = (y) => {
    y && !f.has(y) && (f.add(y), m.push(y));
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
}`, u = await ar(m, async (y) => {
    const b = {
      model: y,
      messages: [
        { role: "system", content: w },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, k = async (M) => {
      const T = Gt(r, Fa);
      let E;
      try {
        E = await fetch(`${e.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${e.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            M ? { ...b, response_format: { type: "json_object" } } : b
          ),
          signal: T.signal
        });
      } catch (j) {
        throw j.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${Fa / 1e3}s.`) : j;
      } finally {
        T.dispose();
      }
      if (!E.ok) {
        const j = await E.text().catch(() => "");
        throw new _e(E.status, j, `Lyrics fallback HTTP ${E.status}: ${j.slice(0, 300)}`);
      }
      const N = (await E.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!N)
        throw new _e(502, "", "Lyrics fallback returned empty content");
      const O = N.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), v = Gi(O) ?? O;
      let C;
      try {
        C = JSON.parse(v);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", N.slice(0, 400)), new _e(502, N.slice(0, 200), `Lyrics fallback returned non-JSON content: ${N.slice(0, 200)}`);
      }
      if (!C.lyrics)
        throw new _e(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return C;
    };
    try {
      return await k(!0);
    } catch (M) {
      if (M instanceof _e && M.status === 400 && /response_format|json_object/i.test(M.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", y), await k(!1);
      throw M;
    }
  }, "chat-lyrics");
  return {
    song_title: u.song_title || "Untitled",
    style_tags: u.style_tags || "",
    lyrics: u.lyrics,
    usedFallback: !0
  };
}, xd = async (e, a, r) => {
  const i = !!a.refAudioBase64, s = (g) => /music/i.test(g) && !/cover/i.test(g), c = (g) => /cover/i.test(g), d = /* @__PURE__ */ new Set(), f = (g, w) => {
    w && !d.has(w) && (d.add(w), g.push(w));
  }, m = [];
  if (i ? (f(m, e.models.cover), e.models.allIds.filter(c).forEach((g) => f(m, g)), f(m, e.models.music)) : (f(m, e.models.music), e.models.allIds.filter(s).forEach((g) => f(m, g))), m.length === 0)
    throw new Error(
      i ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return ar(m, async (g) => {
    const w = {
      model: g,
      lyrics: a.lyrics
    };
    a.prompt && (w.prompt = a.prompt), a.instrumental && (w.instrumental = !0), i && (w.audio_base64 = a.refAudioBase64);
    const u = Gt(r, ri);
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
    } catch (k) {
      throw k.name === "TimeoutError" ? new Error(`Music generation timed out after ${ri / 1e3}s. Try a shorter lyric or a different endpoint.`) : k;
    } finally {
      u.dispose();
    }
    if (!y.ok) {
      const k = await y.text().catch(() => "");
      throw new _e(y.status, k, `Music HTTP ${y.status}: ${k.slice(0, 300)}`);
    }
    const b = await y.json();
    if (!b?.data?.audio || typeof b.data.audio != "string" || b.data.audio.length < 100)
      throw new _e(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return b;
  }, i ? "music-cover" : "music");
}, oi = 6e4, Ja = (e, a, r) => {
  const i = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", s = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), c = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${i}".`
  ];
  return s && d.push(`Genre: ${s}.`), c && d.push(`Mood: ${c}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, Wr = async (e, a, r) => {
  const i = (f) => /image|diffusion|dall-?e|flux|sdxl/i.test(f), s = /* @__PURE__ */ new Set(), c = [], d = (f) => {
    f && !s.has(f) && (s.add(f), c.push(f));
  };
  if (d(e.models.image), e.models.allIds.filter(i).forEach(d), c.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return ar(c, async (f) => {
    const m = Gt(r, oi), w = /minimax|ail-image|image-01/i.test(f) ? {
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
    } catch (N) {
      throw N.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${oi / 1e3}s.`) : N;
    } finally {
      m.dispose();
    }
    if (!u.ok) {
      const N = await u.text().catch(() => "");
      throw new _e(u.status, N, `Cover-art HTTP ${u.status}: ${N.slice(0, 200)}`);
    }
    const y = await u.json(), b = y.base_resp;
    if (b && typeof b.status_code == "number" && b.status_code !== 0)
      throw new _e(502, b.status_msg ?? "", `Cover-art ${f} rejected: ${b.status_msg ?? "status_code=" + b.status_code}`);
    const k = (N) => typeof N != "string" || !N.length ? null : N.startsWith("data:") ? N : `data:image/png;base64,${N}`, M = (N) => typeof N == "string" && /^https?:\/\//i.test(N) ? N : null, T = y.data;
    if (T && typeof T == "object" && !Array.isArray(T)) {
      const N = T, O = N.image_base64;
      if (Array.isArray(O) && O[0]) {
        const j = k(O[0]);
        if (j) return j;
      }
      const v = k(N.image) ?? k(N.b64_json) ?? M(N.url);
      if (v) return v;
      const C = N.image_url ?? N.image_urls;
      if (Array.isArray(C) && C[0]) {
        const j = M(C[0]);
        if (j) return j;
      }
    }
    if (Array.isArray(T) && T[0]) {
      const N = T[0], O = k(N.b64_json) ?? k(N.image_base64) ?? M(N.url);
      if (O) return O;
      throw new _e(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const E = k(y.image) ?? k(y.b64_json);
    if (E) return E;
    const L = y.images;
    if (Array.isArray(L) && L[0]) {
      const N = L[0], O = k(N.b64_json) ?? k(N.image) ?? M(N.url);
      if (O) return O;
    }
    throw new _e(502, "", `Cover-art response shape not recognised: ${JSON.stringify(y).slice(0, 200)}`);
  }, "image");
}, ii = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], ni = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
];
function wd(e, a, r) {
  const [i, s] = S(() => {
    let v = "off";
    try {
      const U = localStorage.getItem("juli3ta:repeatMode");
      (U === "off" || U === "all" || U === "one") && (v = U);
    } catch {
    }
    let C = !1;
    try {
      C = localStorage.getItem("juli3ta:shuffle") === "1";
    } catch {
    }
    let j = 1;
    try {
      const U = localStorage.getItem("juli3ta:volume");
      if (U !== null) {
        const J = Number.parseFloat(U);
        Number.isFinite(J) && (j = Math.max(0, Math.min(1, J)));
      }
    } catch {
    }
    let I = 1;
    try {
      const U = localStorage.getItem("juli3ta:playbackRate");
      if (U !== null) {
        const J = Number.parseFloat(U);
        Number.isFinite(J) && (I = Math.max(0.25, Math.min(4, J)));
      }
    } catch {
    }
    return { trackId: null, playing: !1, loadingTrackId: null, positionMs: 0, durationMs: 0, volume: j, repeatMode: v, shuffle: C, playbackRate: I };
  }), c = ee(null), d = ee([]), f = ee(!1), m = R((v) => {
    s((C) => ({ ...C, repeatMode: v }));
    try {
      localStorage.setItem("juli3ta:repeatMode", v);
    } catch {
    }
  }, []), g = R((v) => {
    s((C) => ({ ...C, shuffle: v }));
    try {
      localStorage.setItem("juli3ta:shuffle", v ? "1" : "0");
    } catch {
    }
  }, []), w = R((v) => {
    const C = Math.max(0.25, Math.min(4, v));
    a.current && (a.current.playbackRate = C), s((j) => ({ ...j, playbackRate: C }));
    try {
      localStorage.setItem("juli3ta:playbackRate", String(C));
    } catch {
    }
  }, [a]), u = R((v) => {
    (async () => {
      s((I) => ({
        ...I,
        trackId: v.id,
        playing: !1,
        loadingTrackId: ve(v) ? v.id : null,
        positionMs: 0,
        durationMs: v.durationMs || 0
      }));
      const C = v.audioDataUrl || await r?.(v);
      if (!C) {
        s((I) => ({ ...I, loadingTrackId: null }));
        return;
      }
      const j = a.current;
      if (!j) {
        s((I) => ({ ...I, loadingTrackId: null }));
        return;
      }
      i.trackId !== v.id || j.src !== C ? (j.src = C, j.preload = "auto", j.load(), j.pause(), s((I) => ({
        ...I,
        trackId: v.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: v.durationMs || 0
      }))) : s((I) => ({ ...I, loadingTrackId: null }));
    })();
  }, [i.trackId, a, r]), y = R((v) => {
    (async () => {
      if (c.current = null, i.trackId && i.trackId !== v.id && !f.current) {
        const I = d.current;
        I[I.length - 1] !== i.trackId && (I.push(i.trackId), I.length > 50 && I.splice(0, I.length - 50));
      }
      f.current = !1, s((I) => ({
        ...I,
        trackId: v.id,
        loadingTrackId: v.id,
        durationMs: v.durationMs || I.durationMs
      }));
      const C = v.audioDataUrl || await r?.(v);
      if (!C) {
        s((I) => ({ ...I, loadingTrackId: null, playing: !1 }));
        return;
      }
      const j = a.current;
      if (!j) {
        s((I) => ({ ...I, loadingTrackId: null, playing: !1 }));
        return;
      }
      (i.trackId !== v.id || j.src !== C) && (j.src = C, j.preload = "auto", s((I) => ({ ...I, trackId: v.id, positionMs: 0, durationMs: v.durationMs || 0 }))), j.play().then(() => s((I) => ({ ...I, loadingTrackId: null, playing: !0 }))).catch(() => s((I) => ({ ...I, loadingTrackId: null, playing: !1 })));
    })();
  }, [i.trackId, a, r]), b = R(() => {
    a.current?.pause(), s((v) => ({ ...v, playing: !1, loadingTrackId: null }));
  }, [a]), k = R((v) => {
    if (i.loadingTrackId) return;
    if (v) {
      i.trackId === v.id && i.playing ? b() : y(v);
      return;
    }
    if (i.playing) {
      b();
      return;
    }
    const C = i.trackId ? e.find((j) => j.id === i.trackId) : null;
    C ? y(C) : a.current?.src && a.current.play().catch(() => {
    });
  }, [i.trackId, i.playing, i.loadingTrackId, e, y, b, a]), M = R((v) => {
    const C = a.current;
    C && (C.currentTime = Math.max(0, v / 1e3));
  }, [a]), T = R((v) => {
    const C = Math.max(0, Math.min(1, v));
    a.current && (a.current.volume = C), s((j) => ({ ...j, volume: C }));
    try {
      localStorage.setItem("juli3ta:volume", String(C));
    } catch {
    }
  }, [a]);
  q(() => {
    a.current && (a.current.volume = i.volume);
  }, []), q(() => {
    a.current && (a.current.playbackRate = i.playbackRate);
  }, [i.playbackRate, i.trackId, a]);
  const E = he(() => e.filter(ve), [e]), L = R(() => {
    if (E.length === 0) return null;
    if (E.length === 1) return E[0];
    const v = E.filter((C) => C.id !== i.trackId);
    return v[Math.floor(Math.random() * v.length)];
  }, [E, i.trackId]), N = R(() => {
    if (!i.trackId || E.length === 0) return;
    if (i.shuffle) {
      const j = L();
      j && y(j);
      return;
    }
    const v = E.findIndex((j) => j.id === i.trackId);
    if (v < 0) return;
    const C = E[(v + 1) % E.length];
    C && y(C);
  }, [i.trackId, i.shuffle, E, y, L]), O = R(() => {
    if (!i.trackId || E.length === 0) return;
    if (i.shuffle) {
      const j = d.current;
      for (; j.length > 0; ) {
        const U = j.pop();
        if (!U || U === i.trackId) continue;
        const J = E.find((ie) => ie.id === U);
        if (J) {
          f.current = !0, y(J);
          return;
        }
      }
      const I = L();
      I && y(I);
      return;
    }
    const v = E.findIndex((j) => j.id === i.trackId);
    if (v < 0) return;
    const C = E[(v - 1 + E.length) % E.length];
    C && y(C);
  }, [i.trackId, i.shuffle, E, y, L]);
  return q(() => {
    const v = a.current;
    if (!v) return;
    const C = () => s((A) => ({ ...A, positionMs: v.currentTime * 1e3 })), j = () => s((A) => ({
      ...A,
      durationMs: Number.isFinite(v.duration) ? v.duration * 1e3 : A.durationMs
    })), I = () => s((A) => ({ ...A, playing: !0, loadingTrackId: null })), U = () => s((A) => ({ ...A, playing: !1, loadingTrackId: null })), J = () => s((A) => ({ ...A, loadingTrackId: null })), ie = () => {
      const A = i.trackId ? E.find((F) => F.id === i.trackId) : null;
      if (!A || A.audioDataUrl || !r || c.current === A.id) {
        s((F) => ({ ...F, playing: !1, loadingTrackId: null }));
        return;
      }
      c.current = A.id, s((F) => ({ ...F, loadingTrackId: A.id, playing: !1 })), r(A, { force: !0 }).then((F) => {
        if (!F) throw new Error("No refreshed stream URL");
        return v.src = F, v.preload = "auto", v.play();
      }).then(() => s((F) => ({ ...F, playing: !0, loadingTrackId: null }))).catch(() => s((F) => ({ ...F, playing: !1, loadingTrackId: null })));
    }, fe = () => {
      if (i.repeatMode === "one" && i.trackId) {
        const A = E.find((F) => F.id === i.trackId);
        if (A) {
          y(A);
          return;
        }
      }
      if (i.shuffle && E.length >= 1)
        if (E.length === 1) {
          if (i.repeatMode === "all") {
            y(E[0]);
            return;
          }
        } else {
          const A = E.filter((Ue) => Ue.id !== i.trackId), F = A[Math.floor(Math.random() * A.length)];
          if (F) {
            y(F);
            return;
          }
        }
      if (E.length >= 2) {
        const A = E.findIndex((F) => F.id === i.trackId);
        if (A >= 0 && A + 1 < E.length) {
          y(E[A + 1]);
          return;
        }
        if (A >= 0 && i.repeatMode === "all") {
          y(E[0]);
          return;
        }
      }
      s((A) => ({ ...A, playing: !1, positionMs: 0 }));
    };
    return v.addEventListener("timeupdate", C), v.addEventListener("loadedmetadata", j), v.addEventListener("play", I), v.addEventListener("pause", U), v.addEventListener("canplay", J), v.addEventListener("error", ie), v.addEventListener("ended", fe), () => {
      v.removeEventListener("timeupdate", C), v.removeEventListener("loadedmetadata", j), v.removeEventListener("play", I), v.removeEventListener("pause", U), v.removeEventListener("canplay", J), v.removeEventListener("error", ie), v.removeEventListener("ended", fe);
    };
  }, [E, i.trackId, i.repeatMode, i.shuffle, y, a, r]), { state: i, queue: e, play: y, pause: b, toggle: k, select: u, seek: M, setVolume: T, setRepeatMode: m, setShuffle: g, setPlaybackRate: w, next: N, prev: O };
}
function si({
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
function jr({
  label: e,
  tooltip: a,
  onClick: r,
  busy: i,
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
        i ? /* @__PURE__ */ t(te, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t($e, { size: 10 }),
        i ? "…" : e
      ]
    }
  );
}
function Xe({
  track: e,
  size: a,
  iconSize: r,
  radius: i
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
function kd({ player: e, allTracks: a }) {
  const { state: r, toggle: i, next: s, prev: c, seek: d, setVolume: f, setPlaybackRate: m, queue: g } = e, w = g.find((T) => T.id === r.trackId) ?? a.find((T) => T.id === r.trackId) ?? null;
  if (!w) return null;
  const u = r.durationMs > 0 ? r.durationMs : w.durationMs, y = Math.min(r.positionMs, u || 0), b = u > 0 ? y / u * 100 : 0, k = r.loadingTrackId === w.id, M = (T) => {
    if (!u) return;
    const E = T.currentTarget.getBoundingClientRect(), L = (T.clientX - E.left) / E.width;
    d(Math.max(0, Math.min(1, L)) * u);
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
        /* @__PURE__ */ t(Xe, { track: w, size: 40, iconSize: 18, radius: 6 }),
        /* @__PURE__ */ n("div", { className: "flex flex-col min-w-0", style: { width: 180 }, children: [
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: w.title }),
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: w.styleTags && w.styleTags !== "—" ? w.styleTags : "—" })
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
              children: /* @__PURE__ */ t(Jr, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: c,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(ge, { size: 12, style: { transform: "rotate(180deg)" } })
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
              children: k ? /* @__PURE__ */ t(te, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(ft, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(ge, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: s,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(ge, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                const T = r.repeatMode, E = T === "off" ? "all" : T === "all" ? "one" : "off";
                e.setRepeatMode(E);
              },
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: r.repeatMode === "off" ? "var(--text-secondary)" : "var(--accent-primary)"
              },
              title: r.repeatMode === "off" ? "Repeat off" : r.repeatMode === "all" ? "Repeating queue" : "Repeating this track",
              children: r.repeatMode === "one" ? /* @__PURE__ */ t(xi, { size: 12 }) : /* @__PURE__ */ t(nl, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: De(y)
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            onClick: M,
            className: "flex-1 rounded-full overflow-hidden cursor-pointer",
            style: { height: 4, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${b}%`,
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
            children: De(u)
          }
        ),
        /* @__PURE__ */ t(Sd, { rate: r.playbackRate, setRate: m }),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(Td, { volume: r.volume, setVolume: f }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
              value: r.volume,
              onChange: (T) => f(Number(T.target.value)),
              style: { width: "100%", accentColor: "var(--accent-primary)" }
            }
          )
        ] })
      ]
    }
  );
}
const Pr = [1, 1.25, 1.5, 2, 0.5, 0.75];
function Sd({
  rate: e,
  setRate: a
}) {
  const r = Math.abs(e - 1) < 1e-3, i = () => {
    const d = Pr.findIndex((m) => Math.abs(m - e) < 1e-3), f = Pr[(d + 1) % Pr.length];
    a(f);
  }, s = (d) => {
    d.preventDefault(), r || a(1);
  }, c = `${Number.isInteger(e) ? e.toString() : e.toString().replace(/\.?0+$/, "")}×`;
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: i,
      onContextMenu: s,
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
function Td({
  volume: e,
  setVolume: a
}) {
  const r = ee(e > 0 ? e : 1);
  q(() => {
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
      children: i ? /* @__PURE__ */ t(xl, { size: 12 }) : /* @__PURE__ */ t(bl, { size: 12 })
    }
  );
}
function _d({ retrying: e, onRetry: a }) {
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
            e ? /* @__PURE__ */ t(te, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t($e, { size: 14 }),
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
function ha({ label: e, hint: a, counter: r, counterDanger: i, className: s, headerExtra: c, children: d }) {
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
function Nd({ onPick: e, disabled: a }) {
  const [r, i] = S(!1), [s, c] = S(Nt[0].label), [d, f] = S(""), m = d.trim().toLowerCase(), g = m.length > 0, w = he(() => {
    if (!g) return [];
    const u = [];
    for (const y of Nt)
      for (const b of y.chips)
        b.toLowerCase().includes(m) && u.push({ family: y.label, chip: b });
    return u;
  }, [g, m]);
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: g ? `${w.length} match${w.length === 1 ? "" : "es"}` : `${$c.length} chips · click to add` })
          ] }),
          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ n(
              "div",
              {
                className: "flex items-center gap-1 px-2 rounded-md",
                style: {
                  height: 24,
                  background: "var(--bg-window)",
                  border: `1px solid ${g ? "var(--accent-primary)" : "var(--border-subtle)"}`
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
                      children: /* @__PURE__ */ t(ye, { size: 11 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: () => i((u) => !u),
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
        g ? w.length === 0 ? /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: w.map(({ family: u, chip: y }) => /* @__PURE__ */ t(
          Dr,
          {
            chip: y,
            family: u,
            onPick: e,
            disabled: a
          },
          `${u}::${y}`
        )) }) : /* @__PURE__ */ n(de, { children: [
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
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: u.chips.map((y) => /* @__PURE__ */ t(Dr, { chip: y, onPick: e, disabled: a }, y)) })
              ] }, u.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (Nt.find((u) => u.label === s) ?? Nt[0]).chips.map((u) => /* @__PURE__ */ t(Dr, { chip: u, onPick: e, disabled: a }, u)) })
        ] })
      ]
    }
  );
}
function Dr({
  chip: e,
  family: a,
  onPick: r,
  disabled: i
}) {
  return /* @__PURE__ */ n(
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
        /* @__PURE__ */ t(Hr, { size: 10 }),
        e,
        a && /* @__PURE__ */ n("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function Cd({ specs: e, onChange: a, disabled: r, onOptimize: i, optimizing: s }) {
  const [c, d] = S(!1), f = he(() => Kr(e), [e]), m = f.length > 0, g = R(
    (u, y) => {
      const b = { ...e };
      y === null ? delete b[u] : b[u] = y, a(b);
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
                /* @__PURE__ */ t(Or, { size: 14, style: { color: "var(--text-secondary)" } }),
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
            i && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: (u) => {
                  u.stopPropagation(), i(), c || d(!0);
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
                  s ? /* @__PURE__ */ t(te, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t($e, { size: 11 }),
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
                  gi,
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
                    li,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (u) => g("structure", { ...e.structure, tempo_bpm: u }),
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
                      options: Fc,
                      onChange: (u) => g("structure", { ...e.structure, tempo_class: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Time signature", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.structure?.time_signature,
                      options: Bc,
                      onChange: (u) => g("structure", { ...e.structure, time_signature: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.structure?.rhythm_feel,
                      options: Wc,
                      onChange: (u) => g("structure", { ...e.structure, rhythm_feel: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Groove", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.structure?.groove_pattern,
                      options: qc,
                      onChange: (u) => g("structure", { ...e.structure, groove_pattern: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Form", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.structure?.song_form,
                      options: Jc,
                      onChange: (u) => g("structure", { ...e.structure, song_form: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Length (s)", children: /* @__PURE__ */ t(
                    li,
                    {
                      value: e.structure?.length_seconds,
                      onChange: (u) => g("structure", { ...e.structure, length_seconds: u }),
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
                      options: Gc,
                      onChange: (u) => g("tonal", { ...e.tonal, key: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Mode", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.tonal?.mode,
                      options: Vc,
                      onChange: (u) => g("tonal", { ...e.tonal, mode: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ n(ga, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(ne, { label: "Range", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: Yc,
                      onChange: (u) => g("dynamics", { ...e.dynamics, overall_dynamic_range: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: Kc,
                      onChange: (u) => g("dynamics", { ...e.dynamics, crescendo_shape: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Big drops", children: /* @__PURE__ */ t(
                    ci,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (u) => g("dynamics", { ...e.dynamics, has_big_drops: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ n(ga, { label: "Context", children: [
                  /* @__PURE__ */ t(ne, { label: "Era", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.context?.era_reference,
                      options: Qc,
                      onChange: (u) => g("context", { ...e.context, era_reference: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Region", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.context?.cultural_region,
                      options: Zc,
                      onChange: (u) => g("context", { ...e.context, cultural_region: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Intensity", children: /* @__PURE__ */ t(
                    Ae,
                    {
                      value: e.mood?.emotional_intensity,
                      options: Xc,
                      onChange: (u) => g("mood", { ...e.mood, emotional_intensity: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(ne, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    ci,
                    {
                      value: e.context?.explicit_lyrics,
                      onChange: (u) => g("context", { ...e.context, explicit_lyrics: u }),
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
                    options: td,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (u) => g("instrumentation", { ...e.instrumentation, primary_instruments: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ n(ga, { label: "Vocals", children: [
                    /* @__PURE__ */ t(ne, { label: "Has vocals", children: /* @__PURE__ */ t(
                      Ad,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (u) => g("instrumentation", { ...e.instrumentation, has_vocals: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(ne, { label: "Gender", children: /* @__PURE__ */ t(
                      Ae,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: ed,
                        onChange: (u) => g("instrumentation", { ...e.instrumentation, vocal_gender: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(ne, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      Ed,
                      {
                        value: e.instrumentation?.language_iso639_1 ?? "",
                        onChange: (u) => g("instrumentation", { ...e.instrumentation, language_iso639_1: u.trim() || void 0 }),
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
                      options: ad,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (u) => g("instrumentation", { ...e.instrumentation, vocal_style: u.length ? u : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    Bt,
                    {
                      label: "Vocal processing",
                      options: rd,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (u) => g("instrumentation", { ...e.instrumentation, vocal_processing: u.length ? u : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  Bt,
                  {
                    label: "Primary moods",
                    options: od,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (u) => g("mood", { ...e.mood, primary_moods: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Bt,
                  {
                    label: "Occasion tags",
                    options: id,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (u) => g("mood", { ...e.mood, occasion_tags: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Bt,
                  {
                    label: "Intended use",
                    options: nd,
                    selected: e.context?.intended_use ?? [],
                    onChange: (u) => g("context", { ...e.context, intended_use: u.length ? u : void 0 }),
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
  disabled: i
}) {
  return /* @__PURE__ */ n(
    "select",
    {
      value: e ?? "",
      onChange: (s) => r(s.target.value === "" ? void 0 : s.target.value),
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
        a.map((s) => /* @__PURE__ */ t("option", { value: s, children: Z(s) }, s))
      ]
    }
  );
}
function li({
  value: e,
  onChange: a,
  min: r,
  max: i,
  placeholder: s,
  disabled: c
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "number",
      value: e ?? "",
      min: r,
      max: i,
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
function Ed({
  value: e,
  onChange: a,
  placeholder: r,
  maxLength: i,
  disabled: s
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: "text",
      value: e,
      placeholder: r,
      maxLength: i,
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
function ci({
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
function Ad({
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
function Bt({
  label: e,
  options: a,
  selected: r,
  onChange: i,
  disabled: s
}) {
  const c = (d) => {
    r.includes(d) ? i(r.filter((f) => f !== d)) : i([...r, d]);
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
  let i = 0;
  const s = (c) => {
    if (!(!c || typeof c != "object")) {
      for (const d of Object.values(c))
        if (d != null) {
          if (Array.isArray(d)) {
            d.length && (i += 1);
            continue;
          }
          if (typeof d == "object") {
            s(d);
            continue;
          }
          d === "" || d === !1 || (i += 1);
        }
    }
  };
  return s(r), i;
}
const zd = "#4ade80", Ld = "#fbbf24", Qa = (e) => e.models.music || e.models.cover ? zd : Ld;
function Id({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [i, s] = S(!1), c = ee(null), d = a.length > 1;
  q(() => {
    if (!i) return;
    const m = (g) => {
      c.current && !c.current.contains(g.target) && s(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [i]);
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
            gi,
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
          return /* @__PURE__ */ n(
            "button",
            {
              onClick: () => {
                r(m.podId), s(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: g ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: f(Qa(m)) }),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ n("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: m.label }),
                    g && /* @__PURE__ */ t(Jt, { size: 11, style: { color: "var(--accent-primary)" } })
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
const Se = ({ icon: e, label: a, onClick: r, danger: i }) => /* @__PURE__ */ n(
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
function Md({ tracks: e, player: a, onLoad: r, onOpenLyrics: i, onDelete: s, onRename: c }) {
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
      Rd,
      {
        track: f,
        player: a,
        onLoad: r,
        onOpenLyrics: i,
        onDelete: s,
        onRename: c,
        translate: d
      },
      f.id
    ))
  ] });
}
function Rd({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: i,
  onDelete: s,
  onRename: c,
  translate: d
}) {
  const [f, m] = S(!1), [g, w] = S(null), u = a.state.trackId === e.id, y = u && a.state.playing, b = () => {
    if (g === null) return;
    const T = g.trim();
    w(null), T && T !== e.title && c(e.id, T);
  }, k = new Date(e.createdAt).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ n(
    "div",
    {
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      draggable: !0,
      onDragStart: (T) => {
        const E = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: ve(e)
        };
        T.dataTransfer.setData(ya, JSON.stringify(E)), e.lyricsPreview && T.dataTransfer.setData("text/plain", e.lyricsPreview), T.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => ve(e) ? a.toggle(e) : i(e),
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
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: u ? "var(--accent-primary)" : "var(--text-disabled)" }, children: ve(e) ? y ? /* @__PURE__ */ t(ft, { size: 11 }) : f ? /* @__PURE__ */ t(ge, { size: 11 }) : /* @__PURE__ */ t(va, { size: 11 }) : /* @__PURE__ */ t(Va, { size: 11 }) }),
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
              onChange: (T) => w(T.target.value),
              onClick: (T) => T.stopPropagation(),
              onKeyDown: (T) => {
                T.stopPropagation(), T.key === "Enter" ? b() : T.key === "Escape" && w(null);
              },
              onBlur: b,
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
        ) : /* @__PURE__ */ n(de, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "truncate",
              style: { fontWeight: u ? 600 : 500 },
              onClick: (T) => T.stopPropagation(),
              onDoubleClick: (T) => {
                T.stopPropagation(), w(e.title);
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
            onClick: (T) => {
              T.stopPropagation(), T.shiftKey ? i(e) : T.altKey ? s(e.id) : r(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(qr, { size: 11 })
          }
        )
      ]
    }
  );
}
function jd({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: i,
  onSaveSongToDesktop: s,
  onSaveLyricsToDesktop: c,
  onPlayInPlayer: d,
  onRename: f,
  onEditCover: m,
  onSelect: g,
  selected: w,
  player: u
}) {
  const { t: y } = It(), b = ee(null), [k, M] = S(!1), [T, E] = S(null), [L, N] = S(null), O = () => {
    if (L === null) return;
    const A = L.trim();
    N(null), A && A !== e.title && f(e.id, A);
  }, v = u.state.trackId === e.id, C = v && u.state.playing, j = v && u.state.durationMs > 0 ? u.state.positionMs / u.state.durationMs : 0;
  q(() => {
    if (!T) return;
    const A = (Ue) => {
      const ze = Ue.target;
      b.current && ze && b.current.contains(ze) || ze && ze.closest?.("[data-track-menu]") || E(null);
    }, F = () => E(null);
    return setTimeout(() => window.addEventListener("mousedown", A), 0), window.addEventListener("scroll", F, !0), window.addEventListener("resize", F), () => {
      window.removeEventListener("mousedown", A), window.removeEventListener("scroll", F, !0), window.removeEventListener("resize", F);
    };
  }, [T]);
  const I = () => {
    const A = b.current?.getBoundingClientRect();
    if (!A) return;
    const F = 220, Ue = Math.min(A.right - F, window.innerWidth - F - 8), ze = A.bottom + 4;
    E({ x: Math.max(8, Ue), y: ze });
  }, U = (A) => () => {
    E(null), A();
  }, J = () => u.toggle(e), ie = () => {
    const A = document.createElement("a");
    A.href = e.audioDataUrl, A.download = `${e.title || "track"}.mp3`, A.click();
  };
  return /* @__PURE__ */ n(
    "div",
    {
      onMouseEnter: () => M(!0),
      onMouseLeave: () => M(!1),
      draggable: !0,
      onDragStart: (A) => {
        const F = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: ve(e)
        };
        A.dataTransfer.setData(ya, JSON.stringify(F)), e.lyricsPreview && A.dataTransfer.setData("text/plain", e.lyricsPreview), A.dataTransfer.effectAllowed = "copyMove";
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
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
          ve(e) ? /* @__PURE__ */ n(
            "button",
            {
              onClick: J,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: C ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(Xe, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: tr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: C ? /* @__PURE__ */ t(ft, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(ge, { size: 14, style: { color: "white", marginLeft: 1 } })
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
            L !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: L,
                onChange: (A) => N(A.target.value),
                onClick: (A) => A.stopPropagation(),
                onKeyDown: (A) => {
                  A.stopPropagation(), A.key === "Enter" ? O() : A.key === "Escape" && N(null);
                },
                onBlur: O,
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
                onDoubleClick: (A) => {
                  A.stopPropagation(), N(e.title);
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
              ref: b,
              onClick: (A) => {
                A.stopPropagation(), T ? E(null) : I();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: k || T ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(qr, { size: 14 })
            }
          )
        ] }),
        T && Za(
          /* @__PURE__ */ n(
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
                ve(e) && /* @__PURE__ */ n(de, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(va, { size: 14 }), label: y("musiccreator.track.playInPlayer"), onClick: U(() => d(e)) }),
                  /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(qo, { size: 14 }), label: y("musiccreator.track.saveSongToDesktop"), onClick: U(() => s(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(fi, { size: 14 }), label: y("musiccreator.track.download"), onClick: U(ie) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ n(de, { children: [
                  ve(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(Va, { size: 14 }), label: y("musiccreator.track.openInEditor"), onClick: U(() => i(e)) }),
                  /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(qo, { size: 14 }), label: y("musiccreator.track.saveLyricsToDesktop"), onClick: U(() => c(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(vi, { size: 14 }), label: "Rename", onClick: U(() => N(e.title)) }),
                /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(ba, { size: 14 }), label: "Edit cover art", onClick: U(() => m(e)) }),
                /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(Et, { size: 14 }), label: y("musiccreator.track.loadIntoForm"), onClick: U(() => r(e)) }),
                /* @__PURE__ */ t(Se, { icon: /* @__PURE__ */ t(At, { size: 14 }), label: y("musiccreator.track.delete"), onClick: U(() => a(e.id)), danger: !0 })
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
                  width: `${j * 100}%`,
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
  trackIds: e,
  allTracks: a,
  player: r,
  onSelect: i
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
          onClick: () => i(c),
          className: "flex flex-col items-start flex-shrink-0 rounded-lg p-1.5 transition-all hover:bg-[var(--bg-hover)]",
          style: {
            width: 84,
            background: d ? "var(--bg-selected)" : "var(--bg-titlebar)",
            border: d ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)"
          },
          title: c.title || "Untitled",
          children: [
            /* @__PURE__ */ t(Xe, { track: c, size: 68, iconSize: 20, radius: 6 }),
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
function Dd({
  track: e,
  player: a,
  selected: r,
  isFavorite: i,
  onOpenInPlayer: s,
  onRemix: c,
  onToggleFavorite: d,
  onRemove: f,
  selectMode: m = !1,
  checked: g = !1,
  onToggleCheck: w
}) {
  const u = ee(null), [y, b] = S(!1), [k, M] = S(null), T = a.state.trackId === e.id, E = T && a.state.loadingTrackId === e.id, L = T && a.state.playing, N = T && a.state.durationMs > 0 ? a.state.positionMs / a.state.durationMs : 0;
  q(() => {
    if (!k) return;
    const I = (J) => {
      const ie = J.target;
      u.current && ie && u.current.contains(ie) || ie && ie.closest?.("[data-track-menu]") || M(null);
    }, U = () => M(null);
    return setTimeout(() => window.addEventListener("mousedown", I), 0), window.addEventListener("scroll", U, !0), window.addEventListener("resize", U), () => {
      window.removeEventListener("mousedown", I), window.removeEventListener("scroll", U, !0), window.removeEventListener("resize", U);
    };
  }, [k]);
  const O = () => {
    const I = u.current?.getBoundingClientRect();
    if (!I) return;
    const U = 220, J = Math.min(I.right - U, window.innerWidth - U - 8), ie = I.bottom + 4;
    M({ x: J, y: ie });
  }, v = (I) => () => {
    M(null), I();
  }, C = e.externalUrl;
  return /* @__PURE__ */ n(
    "div",
    {
      onMouseEnter: () => b(!0),
      onMouseLeave: () => b(!1),
      onClick: m ? () => {
        w && w(e);
      } : void 0,
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: m && g || r ? "var(--bg-selected)" : y ? "var(--bg-hover)" : "transparent",
        border: m && g || r ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: "pointer"
      },
      title: m ? g ? "Deselect" : "Select" : "Click to open in player",
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
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
              children: g ? /* @__PURE__ */ t(ki, { size: 20 }) : /* @__PURE__ */ t(Si, { size: 20 })
            }
          ) : /* @__PURE__ */ n(
            "button",
            {
              onClick: (I) => {
                I.stopPropagation(), a.toggle(e);
              },
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105",
              style: { width: 36, height: 36 },
              title: L ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(Xe, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: tr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: E ? /* @__PURE__ */ t(te, { size: 14, className: "animate-spin", style: { color: "white" } }) : L ? /* @__PURE__ */ t(ft, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(ge, { size: 14, style: { color: "white", marginLeft: 1 } })
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
              onClick: (I) => {
                I.stopPropagation(), k ? M(null) : O();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: y || k ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(qr, { size: 14 })
            }
          )
        ] }),
        k && Za(
          /* @__PURE__ */ n(
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
                  Se,
                  {
                    icon: L ? /* @__PURE__ */ t(ft, { size: 14 }) : /* @__PURE__ */ t(ge, { size: 14 }),
                    label: L ? "Pause" : "Play",
                    onClick: v(() => a.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(va, { size: 14 }),
                    label: "Open in player",
                    onClick: v(() => s(e))
                  }
                ),
                /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(zt, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: v(() => c(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(Ga, { size: 14, fill: i ? "currentColor" : "none" }),
                    label: i ? "Remove favorite" : "Add to favorites",
                    onClick: v(() => d(e))
                  }
                ),
                C && /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(bi, { size: 14 }),
                    label: "Open source",
                    onClick: v(() => window.open(C, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  Se,
                  {
                    icon: /* @__PURE__ */ t(At, { size: 14 }),
                    label: "Remove from Library",
                    onClick: v(() => f(e)),
                    danger: !0
                  }
                )
              ]
            }
          ),
          document.body
        ),
        L && /* @__PURE__ */ t(
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
function Ud({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: i
}) {
  const [s, c] = S(e.coverDataUrl), [d, f] = S(""), [m, g] = S(!1), [w, u] = S(null), y = ee(null), b = ee(null), k = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), M = Ja(k, "", e.styleTags || "");
  q(() => {
    const L = (N) => {
      N.key === "Escape" && (N.stopPropagation(), i());
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [i]), q(() => () => b.current?.abort(), []);
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
    b.current?.abort(), b.current = new AbortController();
    const L = b.current.signal;
    g(!0), u(null);
    try {
      const N = (d.trim() || M).slice(0, 1500), O = await Wr(a, N, L);
      if (L.aborted) return;
      c(O);
    } catch (N) {
      if (N.name === "AbortError") return;
      u(N.message || "Cover-art generation failed.");
    } finally {
      g(!1);
    }
  }, E = (L) => {
    if (u(null), !L.type.startsWith("image/")) {
      u("That file is not an image.");
      return;
    }
    if (L.size > 4 * 1024 * 1024) {
      u("Image is too big (limit 4 MB).");
      return;
    }
    const N = new FileReader();
    N.onerror = () => u("Could not read that image."), N.onload = () => {
      const O = N.result;
      typeof O == "string" && c(O);
    }, N.readAsDataURL(L);
  };
  return Za(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.55)" },
        onClick: i,
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
            onClick: (L) => L.stopPropagation(),
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
                          m ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(rl, { size: 12 }),
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
                          /* @__PURE__ */ t(Gr, { size: 12 }),
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
                          /* @__PURE__ */ t(ye, { size: 12 }),
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
                      onChange: (L) => f(L.target.value),
                      placeholder: M,
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
                          r(e.id, s), i();
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
                  onChange: (L) => {
                    const N = L.target.files?.[0];
                    N && E(N), L.target.value = "";
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
function Od({
  songName: e,
  mode: a,
  theme: r,
  style: i,
  intent: s,
  lyrics: c,
  specs: d,
  coverDataUrl: f,
  endpoint: m,
  busy: g,
  onRegenerate: w,
  onUpload: u,
  onClear: y,
  onClose: b
}) {
  const k = ee(null), M = he(() => Kr(d), [d]), T = he(() => qt(d), [d]);
  q(() => {
    const N = (O) => {
      O.key === "Escape" && (O.stopPropagation(), b());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [b]);
  const E = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", L = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Za(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.6)" },
        onClick: b,
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
            onClick: (N) => N.stopPropagation(),
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
                        children: E
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
                      g && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(te, { size: 28, className: "animate-spin", style: { color: "white" } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
                  /* @__PURE__ */ n("div", { children: [
                    /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }, children: L }),
                    i.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: i.trim() })
                  ] }),
                  /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ n(
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
                          g ? /* @__PURE__ */ t(te, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t($e, { size: 11 }),
                          f ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ n(
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
                          /* @__PURE__ */ t(Gr, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    f && /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        onClick: y,
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
                  r.trim() && /* @__PURE__ */ t(Ba, { label: "Theme", children: r.trim() }),
                  s.trim() && /* @__PURE__ */ t(Ba, { label: "Lyrics Direction", children: s.trim() }),
                  T > 0 && M && /* @__PURE__ */ t(Ba, { label: `Track Specs (${T} set)`, children: M }),
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
                  !r.trim() && !s.trim() && T === 0 && !c.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: k,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (N) => {
                    const O = N.target.files?.[0];
                    O && u(O), N.target.value = "";
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
function Hd(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function $d(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function Fd(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function Bd(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function Wd(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: Z(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: Z(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: Z(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: Z(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const i = [];
  e.tonal?.key && i.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && i.push({ label: "Mode", value: Z(e.tonal.mode) }), i.length && a.push({ label: "Tonal", rows: i });
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
function Ye({ label: e, value: a }) {
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
function qd({
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
function Jd(e, a, r, i) {
  if (!e || a.length === 0) return null;
  if (i === "one") return { kind: "repeating" };
  const s = a.filter(ve);
  if (s.length === 0) return null;
  if (r) return { kind: "random" };
  const c = s.findIndex((d) => d.id === e);
  return c < 0 ? null : c + 1 < s.length ? { kind: "track", track: s[c + 1] } : i === "all" ? { kind: "track", track: s[0] } : { kind: "end" };
}
function Gd({ text: e }) {
  const [a, r] = S(!1);
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
        a ? /* @__PURE__ */ t(Jt, { size: 11 }) : /* @__PURE__ */ t(yi, { size: 11 }),
        a ? "Copied" : "Copy"
      ]
    }
  );
}
const Vd = /^\s*\[([^\]]+)\]\s*$/;
function Yd({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, i) => {
    const s = r.match(Vd);
    return s ? /* @__PURE__ */ t(
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
        children: s[1].trim()
      },
      i
    ) : r.trim() === "" ? /* @__PURE__ */ t("div", { style: { height: 8 } }, i) : /* @__PURE__ */ t("div", { style: { whiteSpace: "pre-wrap" }, children: r }, i);
  }) });
}
function Kd({ track: e, player: a, restyleOriginal: r, onEditInCreator: i, onSwitchToCreator: s, onSearchMusic: c }) {
  const { t: d } = It(), f = e?.specsJson ?? "", m = he(() => {
    if (!f) return {};
    try {
      return JSON.parse(f);
    } catch {
      return {};
    }
  }, [f]), g = (m.intent ?? "").trim(), w = he(() => Wd(m), [m]);
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
            /* @__PURE__ */ t($e, { size: 13 }),
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
  const u = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", y = ve(e), b = tr(e), k = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", M = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", T = a.state.trackId === e.id, E = T && a.state.playing, L = T && a.state.loadingTrackId === e.id, N = e.source === "youtube", O = a.queue.filter((v) => v.id !== e.id && (v.artist || "").trim() && v.artist === e.artist).slice(0, 4);
  return /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden relative", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ n("div", { className: "flex-shrink-0 relative overflow-hidden", children: [
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
              background: b ? `url(${b}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              cursor: y ? "pointer" : "default"
            },
            title: y ? T && E ? "Pause" : "Play" : "Lyric sheet — no audio",
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
              y && /* @__PURE__ */ t(
                "div",
                {
                  className: "absolute inset-0 flex items-center justify-center transition-opacity",
                  style: {
                    background: "rgba(0,0,0,0.35)",
                    opacity: T && E ? 0 : 1
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
                      children: T && E ? /* @__PURE__ */ t(ft, { size: 30, style: { color: "white" } }) : L ? /* @__PURE__ */ t(te, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(ge, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                y ? /* @__PURE__ */ t(ge, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(Et, { size: 10 }),
                N ? "YouTube track" : d(y ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
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
                /* @__PURE__ */ t(Ci, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: k }),
                e.source === "youtube" && e.album && e.album !== k && /* @__PURE__ */ n(de, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                M && /* @__PURE__ */ n(de, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: M })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ n(de, { children: [
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
                title: T && E ? "Pause" : "Play",
                children: L ? /* @__PURE__ */ n(de, { children: [
                  /* @__PURE__ */ t(te, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : T && E ? /* @__PURE__ */ n(de, { children: [
                  /* @__PURE__ */ t(ft, { size: 16 }),
                  " ",
                  d("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ n(de, { children: [
                  /* @__PURE__ */ t(ge, { size: 16, style: { marginLeft: 2 } }),
                  " ",
                  d("musiccreator.player.play")
                ] })
              }
            ),
            /* @__PURE__ */ n(
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
                  /* @__PURE__ */ t(zt, { size: 13 }),
                  d("musiccreator.player.remixInRestyle")
                ]
              }
            ),
            e.audioDataUrl && y && /* @__PURE__ */ n(
              "button",
              {
                onClick: () => {
                  const v = document.createElement("a");
                  v.href = e.audioDataUrl, v.download = `${(e.title || "track").replace(/[\\/:*?"<>|]/g, "_")}.mp3`, document.body.appendChild(v), v.click(), document.body.removeChild(v);
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
                  /* @__PURE__ */ t(fi, { size: 13 }),
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
              e.lyricsPreview && /* @__PURE__ */ t(Gd, { text: e.lyricsPreview })
            ]
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(Yd, { text: e.lyricsPreview }) : N ? /* @__PURE__ */ n(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(tl, { size: 18 }) }),
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
                    /* @__PURE__ */ t(bi, { size: 13 }),
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
          qd,
          {
            audioSrc: r.audioSrc,
            sourceLabel: r.sourceLabel,
            onUserPlay: () => {
              a.state.playing && a.pause();
            }
          }
        ),
        e.id === a.state.trackId && (() => {
          const v = Jd(
            a.state.trackId,
            a.queue,
            a.state.shuffle,
            a.state.repeatMode
          );
          return v ? /* @__PURE__ */ n(Tt, { label: "Up next", children: [
            v.kind === "track" && /* @__PURE__ */ n("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ t(Xe, { track: v.track, size: 32, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }, children: v.track.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: v.track.artist || (v.track.styleTags && v.track.styleTags !== "—" ? v.track.styleTags : "JULI3TA") })
              ] })
            ] }),
            v.kind === "random" && /* @__PURE__ */ n("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(Jr, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Random next track from your queue." })
            ] }),
            v.kind === "repeating" && /* @__PURE__ */ n("div", { className: "flex items-center gap-2", style: { fontSize: 12, color: "var(--text-secondary)" }, children: [
              /* @__PURE__ */ t(xi, { size: 13, style: { color: "var(--accent-primary)" } }),
              /* @__PURE__ */ t("span", { children: "Repeating this track." })
            ] }),
            v.kind === "end" && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-disabled)" }, children: "End of queue." })
          ] }) : null;
        })(),
        e.theme.trim() && /* @__PURE__ */ t(Tt, { label: d("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        g && /* @__PURE__ */ t(Tt, { label: d("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: g }) }),
        w.map((v) => /* @__PURE__ */ t(Tt, { label: v.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: v.rows.map((C) => /* @__PURE__ */ t(Ye, { label: C.label, value: C.value }, `${v.label}-${C.label}`)) }) }, v.label)),
        N && /* @__PURE__ */ t(Tt, { label: "Artist / Source", children: /* @__PURE__ */ n("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(yl, { size: 20 }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        O.length > 0 && /* @__PURE__ */ t(Tt, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: O.map((v) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => a.select(v),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(Xe, { track: v, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: v.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: v.durationMs ? De(v.durationMs) : "Streamed" })
              ] })
            ]
          },
          v.id
        )) }) }),
        /* @__PURE__ */ t(Tt, { label: d("musiccreator.player.about"), children: /* @__PURE__ */ n("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(Ye, { label: d("musiccreator.player.about.created"), value: Bd(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(Ye, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(Ye, { label: "Channel", value: e.album }),
          y && e.durationMs > 0 && /* @__PURE__ */ t(Ye, { label: d("musiccreator.player.about.duration"), value: De(e.durationMs) }),
          e.source !== "youtube" && y && e.bitrate > 0 && /* @__PURE__ */ t(Ye, { label: d("musiccreator.player.about.bitrate"), value: $d(e.bitrate) }),
          e.source !== "youtube" && y && e.sampleRate > 0 && /* @__PURE__ */ t(Ye, { label: d("musiccreator.player.about.sampleRate"), value: Fd(e.sampleRate) }),
          e.source !== "youtube" && y && e.sizeBytes > 0 && /* @__PURE__ */ t(Ye, { label: d("musiccreator.player.about.size"), value: Hd(e.sizeBytes) }),
          M && /* @__PURE__ */ t(Ye, { label: d("musiccreator.player.about.style"), value: M }),
          /* @__PURE__ */ t(Ye, { label: d("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : d(y ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Xd({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: i,
  searchHistory: s,
  onClearSearchHistory: c,
  resultType: d,
  onResultTypeChange: f,
  results: m,
  busy: g,
  error: w,
  status: u,
  providers: y,
  connectors: b,
  libraryTracks: k,
  playlists: M,
  playlistNameDraft: T,
  playlistBusy: E,
  favoriteIds: L,
  warmupIds: N,
  previewBusyId: O,
  addBusyId: v,
  savedYoutubeIds: C,
  player: j,
  onPreview: I,
  onAdd: U,
  onOpenTrack: J,
  onToggleFavorite: ie,
  onRemoveLibraryTrack: fe,
  onPlaylistNameDraftChange: A,
  onCreatePlaylist: F,
  onAddTrackToPlaylist: Ue,
  onRemoveTrackFromPlaylist: ze,
  onPlayPlaylist: rr,
  onDeletePlaylist: Qe,
  onConfigureConnector: Kt,
  onDisconnectConnector: xe,
  onClose: xa
}) {
  const [X, Le] = S(null), [wa, bt] = S({}), [Ze, Ie] = S(!1), [Fe, Te] = S(null), [Mt, Ne] = S(null), [we, ct] = S(null);
  q(() => {
    Ne(null), ct(null);
  }, [e]);
  const or = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(k.map((h) => h.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(k.map((h) => h.album || h.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: M.length },
    { id: "sources", label: "Sources", count: y.length || 4 }
  ], dt = (h) => {
    const P = j.state.trackId === h.id, B = P && j.state.loadingTrackId === h.id, se = P && j.state.playing;
    return /* @__PURE__ */ n(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(Xe, { track: h, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ n("button", { type: "button", onClick: () => J(h), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: h.title }),
            /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              h.artist || "Unknown",
              h.album ? ` · ${h.album}` : "",
              h.durationMs ? ` · ${De(h.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ie(h),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: L.has(h.id) ? "white" : "var(--text-secondary)",
                background: L.has(h.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: L.has(h.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(Ga, { size: 13, fill: L.has(h.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => j.toggle(h),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                B ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : se ? /* @__PURE__ */ t(ft, { size: 12 }) : /* @__PURE__ */ t(ge, { size: 12 }),
                B ? "Loading" : se ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => fe(h),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t(At, { size: 13 })
            }
          )
        ]
      },
      h.id
    );
  }, Xt = Array.from(
    k.reduce((h, P) => {
      const B = (P.artist || "Unknown artist").trim();
      return h.set(B, [...h.get(B) ?? [], P]), h;
    }, /* @__PURE__ */ new Map())
  ).sort((h, P) => h[0].localeCompare(P[0])), ut = Array.from(
    k.reduce((h, P) => {
      const B = (P.album || P.artist || "YouTube collection").trim();
      return h.set(B, [...h.get(B) ?? [], P]), h;
    }, /* @__PURE__ */ new Map())
  ).sort((h, P) => h[0].localeCompare(P[0])), Qt = y.length > 0 ? y.map((h) => {
    const P = b.find((pt) => pt.provider === h.id), B = P?.connected ?? h.configured, se = P?.oauthRequired ?? h.state === "oauth_required";
    return {
      id: h.id,
      name: h.name,
      state: B ? "Connected" : se ? "OAuth required" : h.state.replace(/_/g, " "),
      body: P?.message ?? h.message,
      action: B ? "Manage" : se ? "Coming soon" : "Configure",
      enabled: B,
      needs: h.needs,
      kind: h.kind,
      connector: P,
      oauthRequired: se,
      configurable: P?.configurable ?? !se
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
              children: /* @__PURE__ */ t(ye, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: or.map((h) => /* @__PURE__ */ n(
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
      e === "search" && /* @__PURE__ */ n("div", { className: "flex items-center gap-2 rounded-xl px-4", style: { height: 44, background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
        /* @__PURE__ */ t(lt, { size: 16, style: { color: "var(--text-disabled)" } }),
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
        g && /* @__PURE__ */ t(te, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => i(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(ye, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((h) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => f(h),
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
      e === "search" && r.trim().length < 2 && s.length > 0 && /* @__PURE__ */ n("div", { className: "mt-3 flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.7, fontWeight: 800 }, children: "Recent" }),
        s.map((h) => /* @__PURE__ */ t(
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
    /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-2", children: [
        r.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        r.trim().length >= 2 && !g && m.length === 0 && !w && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        g && m.length === 0 && Array.from({ length: 5 }).map((h, P) => /* @__PURE__ */ n(
          "div",
          {
            className: "flex items-center gap-3 rounded-xl px-3 py-2",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", opacity: 0.78 },
            children: [
              /* @__PURE__ */ t("div", { className: "animate-pulse", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "var(--bg-hover)" } }),
              /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 12, width: `${70 - P * 6}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)" } }),
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 10, width: `${45 - P * 4}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)", marginTop: 8 } })
              ] }),
              /* @__PURE__ */ t(te, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${P}`
        )),
        m.map((h) => {
          const P = Ji(h.title, h.channel), B = C.has(h.id), se = O === h.id, pt = v === h.id, Me = N.has(h.id);
          return /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                h.thumbnailUrl || Xa(h.id) ? /* @__PURE__ */ t("img", { src: h.thumbnailUrl || Xa(h.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(va, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: P.song }),
                  /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    P.artist || h.channel || "Music",
                    h.durationMs ? ` · ${De(h.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: h.title })
                ] }),
                Me && !se && /* @__PURE__ */ n("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(te, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => I(h),
                    disabled: se,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      se ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(ge, { size: 12 }),
                      se ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => U(h),
                    disabled: B || pt,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: B ? "var(--text-disabled)" : "white", background: B ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      pt ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : B ? /* @__PURE__ */ t(Jt, { size: 12 }) : /* @__PURE__ */ t(Hr, { size: 12 }),
                      pt ? "Adding" : B ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            h.id
          );
        })
      ] }),
      e === "artists" && (Mt !== null ? (() => {
        const h = Xt.find(([P]) => P === Mt)?.[1] ?? [];
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
                  /* @__PURE__ */ t(Bo, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Mt }),
              /* @__PURE__ */ n("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                h.length,
                " track",
                h.length === 1 ? "" : "s",
                " in your Library"
              ] })
            ] }),
            h[0] && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => J(h[0]),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(ge, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: h.map(dt) })
        ] });
      })() : /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Xt.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Xt.map(([h, P]) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => Ne(h),
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            title: `Open ${h}`,
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: h }),
              /* @__PURE__ */ n("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                P.length,
                " track",
                P.length === 1 ? "" : "s"
              ] })
            ]
          },
          h
        ))
      ] })),
      e === "albums" && (we !== null ? (() => {
        const P = ut.find(([se]) => se === we)?.[1] ?? [], B = P[0];
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
                  /* @__PURE__ */ t(Bo, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            B && /* @__PURE__ */ t(Xe, { track: B, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: we }),
              /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                B?.artist || "Mixed artists",
                " · ",
                P.length,
                " track",
                P.length === 1 ? "" : "s"
              ] })
            ] }),
            B && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => J(B),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(ge, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: P.map(dt) })
        ] });
      })() : /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        ut.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        ut.map(([h, P]) => {
          const B = P[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ct(h),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${h}`,
              children: /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
                B && /* @__PURE__ */ t(Xe, { track: B, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ n("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: h }),
                  /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    B?.artist || "Mixed artists",
                    " · ",
                    P.length,
                    " track",
                    P.length === 1 ? "" : "s"
                  ] })
                ] })
              ] })
            },
            h
          );
        })
      ] })),
      e === "playlists" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ t("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ n("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Bs, { size: 22 }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: T,
              onChange: (h) => A(h.target.value),
              onKeyDown: (h) => {
                h.key === "Enter" && F();
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
              onClick: F,
              disabled: E,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                E ? /* @__PURE__ */ t(te, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Hr, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        M.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : M.map((h) => /* @__PURE__ */ n("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-3 mb-3", children: [
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: h.name }),
              /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 3 }, children: [
                h.items.length,
                " track",
                h.items.length === 1 ? "" : "s"
              ] })
            ] }),
            /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  onClick: () => rr(h),
                  disabled: h.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(ge, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => Qe(h.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(At, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: h.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : h.items.map((P) => /* @__PURE__ */ n("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(Xe, { track: P, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ n("button", { type: "button", onClick: () => J(P), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: P.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: P.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => ze(h.id, P.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(ye, { size: 13 })
              }
            )
          ] }, `${h.id}-${P.id}`)) }),
          k.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: k.slice(0, 8).filter((P) => !h.items.some((B) => B.id === P.id)).map((P) => /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => Ue(h.id, P),
              className: "rounded-full px-3",
              style: { height: 28, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              children: [
                "+ ",
                P.title.slice(0, 28)
              ]
            },
            `${h.id}-add-${P.id}`
          )) })
        ] }, h.id))
      ] }),
      e === "sources" && /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        Qt.map((h) => /* @__PURE__ */ n(
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
                    style: { width: 46, height: 46, color: "white", background: h.enabled ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                    children: h.name === "Spotify" ? "♬" : h.name === "YouTube" ? /* @__PURE__ */ t(ge, { size: 18 }) : h.kind === "catalog" ? /* @__PURE__ */ t(xs, { size: 18 }) : /* @__PURE__ */ t(Ct, { size: 18 })
                  }
                ),
                /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: h.name }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 11, color: h.enabled ? "var(--status-success)" : "var(--text-secondary)", marginTop: 2 }, children: h.state }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.45, marginTop: 10 }, children: h.body })
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const P = h.connector?.credentialSpecs ?? h.needs.map((B) => ({ name: B, label: B, secret: !0, required: !0 }));
                      bt({}), Te(null), Le({
                        id: h.id,
                        name: h.name,
                        body: h.body,
                        specs: P,
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
                h.connector?.account && /* @__PURE__ */ n("span", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                  "@",
                  h.connector.account
                ] })
              ] })
            ]
          },
          h.name
        )),
        X && /* @__PURE__ */ n("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ n("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ n("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                X.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: X.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => Le(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(ye, { size: 16 }) })
          ] }),
          X.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ n(de, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: X.specs.map((h) => /* @__PURE__ */ n("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: h.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: h.label || h.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: wa[h.name] ?? "",
                  type: h.secret ? "password" : "text",
                  onChange: (P) => bt((B) => ({ ...B, [h.name]: P.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: h.name
                }
              )
            ] }, h.name)) }),
            Fe && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: Fe }),
            /* @__PURE__ */ n("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  disabled: Ze || !X.configurable,
                  onClick: () => {
                    Ie(!0), Te(null), Kt(X.id, wa).then(() => {
                      bt({}), Le(null);
                    }).catch((h) => Te(h.message || "Connector setup failed.")).finally(() => Ie(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Ze ? /* @__PURE__ */ t(te, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Jt, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              X.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Ze,
                  onClick: () => {
                    Ie(!0), Te(null), xe(X.id).then(() => Le(null)).catch((h) => Te(h.message || "Disconnect failed.")).finally(() => Ie(!1));
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
function Qd() {
  const e = Ll(), { t: a } = It(), r = Ml(), i = Dl(), { state: s, dispatch: c } = Ni(), { addNotification: d } = Hl(), f = s.theme.mode, [m, g] = S("compose"), [w, u] = S(!1), [y, b] = S("creator"), [k, M] = S(() => {
    try {
      const o = localStorage.getItem("juli3ta:selectedPlayerTrackId");
      return o && o.length > 0 ? o : null;
    } catch {
      return null;
    }
  });
  q(() => {
    try {
      k ? localStorage.setItem("juli3ta:selectedPlayerTrackId", k) : localStorage.removeItem("juli3ta:selectedPlayerTrackId");
    } catch {
    }
  }, [k]);
  const [T, E] = S(""), [L, N] = S(""), [O, v] = S(null), [C, j] = S(""), [I, U] = S(""), [J, ie] = S(!1), [fe, A] = S(""), [F, Ue] = S(""), [ze, rr] = S(!0), [Qe, Kt] = S(!1), [xe, xa] = S(null), [X, Le] = S({}), [wa, bt] = S(!1), [Ze, Ie] = S(null), [Fe, Te] = S(null), [Mt, Ne] = S(null), [we, ct] = S(!1), [or, dt] = S(!1), [Xt, ut] = S(!1), [Qt, h] = S([]), P = ee(null), B = ee(null), [se, pt] = S(!1), [Me, Xr] = S("best"), [Vi, Yi] = S(null), [Ki, ka] = S(!1), [et, Qr] = S("mic"), [Be, ir] = S(!1), [Zr, eo] = S(0), [to, Zt] = S(null), ao = ee(null), Sa = ee([]), Rt = ee(null), nr = ee(0), ea = ee(null), [jt, We] = S("idle"), [ta, Y] = S(null), [Xi, Pt] = S(0), [ro, oo] = S(0), [vt, Re] = S([]), [Dt, re] = S(null), [Ce, io] = S(""), [aa, no] = S("cards"), [ue, so] = S(() => {
    try {
      return localStorage.getItem("juli3ta:sidebarTab") === "library" ? "library" : "mywork";
    } catch {
      return "mywork";
    }
  }), [je, Qi] = S(() => {
    try {
      const o = localStorage.getItem("juli3ta:myWorkChip");
      if (o === "all" || o === "songs" || o === "restyles" || o === "lyrics") return o;
    } catch {
    }
    return "all";
  }), [tt, lo] = S(() => {
    try {
      return localStorage.getItem("juli3ta:libraryChip") === "favorites" ? "favorites" : "all";
    } catch {
      return "all";
    }
  });
  q(() => {
    try {
      localStorage.setItem("juli3ta:sidebarTab", ue);
    } catch {
    }
  }, [ue]), q(() => {
    try {
      localStorage.setItem("juli3ta:myWorkChip", je);
    } catch {
    }
  }, [je]), q(() => {
    try {
      localStorage.setItem("juli3ta:libraryChip", tt);
    } catch {
    }
  }, [tt]);
  const [Ta, Zi] = S(() => {
    try {
      const o = localStorage.getItem("juli3ta:recentlyPlayedIds"), l = o ? JSON.parse(o) : null;
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
  const [xt, sr] = S(!1), [at, _a] = S(() => /* @__PURE__ */ new Set()), [rt, Oe] = S(!1), [en, ra] = S("search"), [lr, tn] = S(""), [an, co] = S(() => {
    try {
      const o = localStorage.getItem("juli3ta:searchHistory"), l = o ? JSON.parse(o) : null;
      return Array.isArray(l) ? l.filter((p) => typeof p == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), uo = R((o) => {
    const l = o.trim();
    l.length < 2 || co((p) => {
      const x = [l, ...p.filter((_) => _.toLowerCase() !== l.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(x));
      } catch {
      }
      return x;
    });
  }, []), [oa, rn] = S("tracks"), [on, cr] = S([]), [nn, Na] = S(!1), [sn, ot] = S(null), [ln, po] = S(null), [cn, mo] = S([]), [dn, ho] = S([]), [it, go] = S({}), [un, yo] = S(() => /* @__PURE__ */ new Set()), [pn, fo] = S(null), [mn, bo] = S(null), [vo, xo] = S([]), [be, dr] = S([]), [Ca, ur] = S(() => /* @__PURE__ */ new Set()), [pr, Ut] = S([]), [mr, wo] = S(""), [hn, ko] = S(!1), So = ee(/* @__PURE__ */ new Map()), hr = ee(/* @__PURE__ */ new Map()), gr = ee(/* @__PURE__ */ new Set()), [Ea, ia] = S(null), [Aa, To] = S(!1), [yr, _o] = S(Li), [gn, fr] = S(!1);
  q(() => {
    let o = !1;
    return (async () => {
      try {
        await Promise.all([
          dd(),
          fc()
        ]);
      } catch (W) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", W);
      }
      await cc().catch((W) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", W);
      });
      const [l, p, x, _, z, $, Q] = await Promise.allSettled([
        ql(),
        Ir(),
        ac(),
        Ko(),
        sc(),
        dc("track"),
        ua()
      ]);
      if (o) return;
      const ke = l.status === "fulfilled" ? l.value : [], Je = p.status === "fulfilled" ? p.value.tracks.map((W) => ({ ...W, source: "juli3ta" })) : [];
      p.status === "fulfilled" && (ia(p.value.rootPath), re((W) => W?.startsWith("Real file library unavailable") ? null : W)), l.status === "fulfilled" ? Re(pa(Je, ke)) : (console.error("[Juli3ta] listTracks failed:", l.reason), Re(pa(Je)), re("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), p.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", p.reason), re("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const kt = new Set(Je.map((W) => W.id)), Ge = new Set(ke.map((W) => W.id)), me = ke.filter((W) => !kt.has(W.id) && Uc(W)), Ee = Je.filter((W) => !Ge.has(W.id));
      (me.length > 0 || Ee.length > 0) && (async () => {
        const W = [];
        for (const le of me)
          try {
            const oe = await ei({ ...le, source: "juli3ta" });
            W.push({ ...le, ...oe, source: "juli3ta" });
          } catch (oe) {
            console.warn("[Juli3ta] host file backfill failed:", le.id, oe);
          }
        for (const le of Ee)
          try {
            await Ka({ ...le, source: "juli3ta" });
          } catch (oe) {
            console.warn("[Juli3ta] standalone cache backfill failed:", le.id, oe);
          }
        !o && (W.length > 0 || Ee.length > 0) && (Re((le) => pa(W, Ee, le)), Ir().then((le) => ia(le.rootPath)).catch(() => {
        }));
      })(), x.status === "fulfilled" && _o(x.value), _.status === "fulfilled" && h(_.value), z.status === "fulfilled" && dr(z.value), $.status === "fulfilled" && ur(new Set($.value.map((W) => W.entityId))), Q.status === "fulfilled" && Ut(Q.value);
    })(), () => {
      o = !0;
    };
  }, []), q(() => {
    if (!Dt?.startsWith("Real file library unavailable")) return;
    let o = !1;
    const l = async () => {
      try {
        const x = await Ir();
        if (o) return;
        ia(x.rootPath), Re((_) => pa(x.tracks.map((z) => ({ ...z, source: "juli3ta" })), _)), re((_) => _?.startsWith("Real file library unavailable") ? null : _);
      } catch {
      }
    }, p = window.setInterval(l, 4e3);
    return l(), () => {
      o = !0, window.clearInterval(p);
    };
  }, [Dt]);
  const br = R(async (o) => {
    try {
      const l = await ei({ ...o, source: "juli3ta" }), p = { ...o, ...l, source: "juli3ta" };
      return await Ka(p), ia(l.folderPath?.split("/").slice(0, -1).join("/") || Ea), re(null), Re((x) => pa([p], x)), !0;
    } catch (l) {
      const p = l.message || "Real file save failed";
      return re(`Couldn't save "${o.title}" as a real file — ${p}.`), !1;
    }
  }, [Ea]), yn = R(async (o) => {
    _o(o);
    try {
      await rc(o);
    } catch (l) {
      console.warn("Settings save failed:", l);
    }
  }, []), za = he(
    () => e.state ? ud(e.state.agents, e.state.included) : [],
    [e.state]
  ), [La, fn] = S([]), [bn, vn] = S(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [xn, No] = S(!0), V = La.find((o) => o.podId === bn) ?? La[0] ?? null, vr = R(async () => {
    No(!0);
    const o = new AbortController(), l = await gd(za, o.signal);
    fn(l), No(!1);
  }, [za]);
  q(() => {
    za.length !== 0 && queueMicrotask(() => void vr());
  }, [za, vr]);
  const wn = R((o) => {
    vn(o);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", o);
    } catch {
    }
  }, []), na = ee(null), pe = ee(null), sa = ee(null), Ia = ee(!1);
  q(() => () => {
    na.current?.abort(), pe.current?.abort();
  }, []), q(() => {
    if (jt === "idle") {
      queueMicrotask(() => {
        Pt(0), oo(0);
      });
      return;
    }
    const o = Date.now(), l = () => {
      const _ = (Date.now() - o) / 1e3, z = jt === "lyrics" ? Math.min(0.95, _ / 5) : Math.min(0.95, 1 - Math.exp(-_ / 35));
      Pt(z);
    };
    l();
    const p = setInterval(l, 250), x = setInterval(() => oo((_) => _ + 1), 4500);
    return () => {
      clearInterval(p), clearInterval(x);
    };
  }, [jt]);
  const la = R((o) => {
    if (!o.lyricsPreview) return null;
    const l = i.ensureUserFolder("Music");
    if (!l) return null;
    const p = `${$a(o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, x = i.findChildByName(l, p);
    return x ? (i.writeFile(x.id, o.lyricsPreview), x.id) : i.createFile(l, p, o.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [i]), Co = R((o) => {
    if (!o.audioDataUrl) return null;
    const l = i.ensureUserFolder("Music");
    if (!l) return null;
    const p = `${$a(o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, x = i.findChildByName(l, p);
    return x ? x.id : i.createFile(l, p, "", {
      mimeType: "audio/mpeg",
      refTrackId: o.id
    });
  }, [i]), kn = R(async () => {
    if (!V) {
      Y(a("musiccreator.error.noPod"));
      return;
    }
    if (m === "restyle" && !Fe) {
      Y(we ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (Ia.current) return;
    Ia.current = !0, Y(null), na.current?.abort();
    const o = new AbortController();
    na.current = o;
    try {
      const l = yr.overridesByEndpoint[V.url] ?? {}, p = {
        ...V,
        models: {
          music: l.music || V.models.music,
          cover: l.cover || V.models.cover,
          lyrics: l.lyrics || V.models.lyrics,
          lyricsBackup: l.lyricsBackup || V.models.lyricsBackup,
          image: l.image || V.models.image,
          allIds: V.models.allIds
        }
      }, x = Kr(X);
      let _ = L.trim(), z = I.trim(), $ = C.trim(), Q = null;
      if (!_ && !J) {
        if (!T.trim() && !(X.intent ?? "").trim()) {
          Y(a("musiccreator.error.noInput"));
          return;
        }
        We("lyrics");
        const ce = [];
        T.trim() && ce.push(T.trim());
        const _r = (X.intent ?? "").trim();
        _r && ce.push(`User intent (must respect): ${_r}`), x && ce.push(`Musical context: ${x}`), O && ce.push(`Structure: ${O.prompt}`);
        const us = ce.join(`

`);
        Q = await vd(p, us, o.signal), _ = Q.lyrics, z || (z = Q.song_title), $ || ($ = Q.style_tags);
      } else !_ && J && (_ = `[Intro]
[Instrumental]
[Outro]`);
      if (Q && (N(Q.lyrics), z === "Untitled" && (z = ""), z && !I.trim() && U(z), $ && !C.trim() && j($), Q.usedFallback && re(
        `Primary lyrics model errored — used backup chat model "${p.models.lyricsBackup ?? "unknown"}" instead.`
      )), _.length > Ft) {
        Y(a("musiccreator.error.lyricsTooLong", { count: _.length, max: Ft })), We("idle");
        return;
      }
      if (z.trim() || (z = sd(_, T, $ || C), z && z !== "Untitled" && !I.trim() && U(z)), m === "lyricsOnly") {
        const ce = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (z || a("musiccreator.track.untitled")) + " (lyrics)",
          styleTags: $ || "—",
          lyricsPreview: _,
          // store the full text — used by Load
          durationMs: 0,
          bitrate: 0,
          sampleRate: 0,
          sizeBytes: 0,
          createdAt: Date.now(),
          audioDataUrl: "",
          // no audio
          specsJson: qt(X) > 0 ? JSON.stringify(X) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: fe,
          theme: T
        };
        await br(ce) && la(ce), We("idle"), Pt(0);
        return;
      }
      if (m === "restyle" && !Fe) {
        Y(we ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), We("idle");
        return;
      }
      We("song");
      const ke = [$, x].filter((ce) => ce && ce.length > 0).join(". "), Je = xd(
        p,
        {
          lyrics: _,
          prompt: ke || void 0,
          instrumental: J,
          refAudioBase64: m === "restyle" ? Fe ?? void 0 : void 0
        },
        o.signal
      ), kt = ze && !fe && !!p.models.image, Ge = fe, me = kt ? Wr(
        p,
        (F.trim() || Ja(z, T, $ || C)).slice(0, 1500),
        o.signal
      ).catch((ce) => {
        if (ce.name === "AbortError") throw ce;
        return console.warn("[Juli3ta] Cover-art generation failed:", ce), re(`Cover-art skipped: ${ce.message}`), Ge;
      }) : Promise.resolve(Ge), Ee = await Promise.allSettled([Je, me]), W = Ee[0], le = Ee[1];
      if (W.status === "rejected")
        throw o.abort(), W.reason;
      const oe = W.value, yt = le.status === "fulfilled" ? le.value : Ge;
      if (!oe?.data?.audio || typeof oe.data.audio != "string" || oe.data.audio.length < 100) {
        const ce = oe?.trace_id ? ` (trace ${oe.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${ce}. Try again or pick a different model in Settings.`);
      }
      const cs = `data:audio/mpeg;base64,${oe.data.audio}`, ds = m === "restyle" ? " (restyle)" : "", st = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (z || a("musiccreator.track.untitled")) + ds,
        styleTags: $ || "—",
        lyricsPreview: _,
        // store the full text — used by Load
        durationMs: oe.data.duration_ms ?? 0,
        bitrate: oe.data.bitrate ?? 0,
        sampleRate: oe.data.sample_rate ?? 0,
        sizeBytes: oe.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: cs,
        specsJson: qt(X) > 0 ? JSON.stringify(X) : "",
        coverDataUrl: yt,
        theme: T
      };
      A(yt), console.info("[Juli3ta] Saving generated song:", { id: st.id, title: st.title, durationMs: st.durationMs, sizeBytes: st.sizeBytes }), await br(st) && (Co(st), la(st), m === "restyle" && Fe && Yi({
        trackId: st.id,
        audioSrc: `data:audio/wav;base64,${Fe}`,
        sourceLabel: Ze || "Original"
      }), d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: st.title }),
        isRead: !1
      })), We("idle"), Pt(0);
    } catch (l) {
      if (l.name === "AbortError") {
        We("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", l), Y(l.message || "Generation failed — check the console for details."), We("idle"), Pt(0);
    } finally {
      Ia.current = !1;
    }
  }, [
    V,
    T,
    L,
    I,
    C,
    X,
    O,
    J,
    m,
    Fe,
    Ze,
    a,
    br,
    yr,
    Co,
    la,
    d,
    ze,
    fe,
    F
  ]), Sn = () => P.current?.click(), Eo = ee(0), mt = R(async (o, l) => {
    const p = ++Eo.current, x = () => Eo.current === p;
    Y(null), ct(!0), Te(null), Ie(l), Ne(null);
    try {
      if (Me === "mix") {
        const _ = await zc(o);
        if (!x()) return;
        Te(_.base64);
        const z = _.sourceDurationSec / 60;
        if (_.segments.length > 1) {
          const $ = _.segments.map((Q) => `${Math.floor(Q.startSec / 60)}:${Math.floor(Q.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          Ne(
            `Mixed ${_.segments.length} iconic moments (${_.durationSec.toFixed(0)} s) from ${z.toFixed(1)} min — at ${$}`
          );
        } else
          Ne(`Using whole clip (${_.durationSec.toFixed(0)} s)`);
      } else {
        const _ = await $i(o);
        if (!x()) return;
        Te(_.base64);
        const z = _.sourceDurationSec / 60, $ = _.startSec / 60, Q = _.startSec < 60 ? `${_.startSec.toFixed(1)} s` : `${Math.floor($)}:${Math.floor(_.startSec % 60).toString().padStart(2, "0")}`;
        Ne(
          _.sourceDurationSec <= _.durationSec + 0.5 ? `Using whole clip (${_.durationSec.toFixed(0)} s)` : `Auto-picked best ${_.durationSec.toFixed(0)} s starting at ${Q} of ${z.toFixed(1)} min`
        );
      }
    } catch (_) {
      if (!x()) return;
      Y(_.message || "Could not analyze that audio."), Ie(null);
    } finally {
      x() && ct(!1);
    }
  }, [Me]), Tn = async () => {
    Zt(null);
    try {
      let o;
      if (et === "tab") {
        const _ = navigator.mediaDevices;
        if (!_.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        o = await _.getDisplayMedia({ video: !0, audio: !0 });
        for (const z of o.getVideoTracks())
          z.stop(), o.removeTrack(z);
        if (o.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        o = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Rt.current = o;
      const p = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((_) => MediaRecorder.isTypeSupported(_)) || "", x = new MediaRecorder(o, p ? { mimeType: p } : void 0);
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
            const $ = typeof z.result == "string" ? z.result : "", Q = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${et === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - nr.current,
              mimeType: _.type || p || "audio/webm",
              audioDataUrl: $,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await Pi(Q), h((ke) => [Q, ...ke]);
              } catch (ke) {
                console.warn("Recording save failed", ke), Zt("Could not save the recording. Try again.");
              }
            })(), ka(!1), mt(_, Q.name);
          }, z.readAsDataURL(_);
        } finally {
          Rt.current?.getTracks().forEach((_) => _.stop()), Rt.current = null;
        }
      }, x.start(250), ao.current = x, nr.current = Date.now(), eo(0), ir(!0), ea.current = setInterval(() => {
        eo(Date.now() - nr.current);
      }, 100);
    } catch (o) {
      Zt(o.message || "Could not start recording."), Rt.current?.getTracks().forEach((l) => l.stop()), Rt.current = null, ir(!1);
    }
  }, _n = () => {
    const o = ao.current;
    o && o.state !== "inactive" && o.stop(), ea.current && clearInterval(ea.current), ir(!1);
  };
  q(() => () => {
    Rt.current?.getTracks().forEach((o) => o.stop()), ea.current && clearInterval(ea.current);
  }, []);
  const Nn = (o) => {
    const l = o.target.files?.[0];
    if (o.target.value = "", !!l) {
      if (l.size > 50 * 1024 * 1024) {
        Y("Reference audio is too big. Max 50 MB.");
        return;
      }
      mt(l, l.name);
    }
  }, Cn = (o) => {
    dt(!1), mt(o.audioDataUrl, o.name);
  }, En = () => {
    dt(!0), Ko().then((o) => h(o)).catch(() => {
    });
  }, An = () => ut(!0), zn = (o) => {
    if (ut(!1), !o.audioDataUrl) return;
    const l = o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    mt(o.audioDataUrl, `${l}.mp3`);
  }, Ln = () => {
    Te(null), Ie(null), Ne(null);
  }, In = () => {
    na.current?.abort(), We("idle");
  }, ht = R(async (o, l, p) => {
    if (!V) throw new Error("No endpoint connected");
    const x = (me) => {
      const Ee = me, W = Ee.choices?.[0], le = [
        W?.message?.content,
        W?.delta?.content,
        W?.text,
        Ee.output_text
      ];
      for (const oe of le)
        if (typeof oe == "string" && oe.trim().length > 0) return oe.trim();
      return "";
    }, _ = (me) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(me), z = /* @__PURE__ */ new Set(), $ = [], Q = (me) => {
      me && !z.has(me) && (z.add(me), $.push(me));
    };
    if (Q(V.models.lyricsBackup), V.models.allIds.filter(_).forEach(Q), $.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const ke = typeof l == "string" ? l : JSON.stringify(l), Je = p?.temperature ?? 0.5, kt = Math.max(p?.maxTokens ?? 800, 400), Ge = 45e3;
    return ar($, async (me) => {
      const Ee = Gt(p?.signal, Ge);
      let W;
      try {
        W = await fetch(`${V.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${V.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: me,
            messages: [
              { role: "system", content: o },
              { role: "user", content: ke }
            ],
            temperature: Je,
            max_tokens: kt
          }),
          signal: Ee.signal
        });
      } catch (yt) {
        throw yt.name === "TimeoutError" ? new Error(`AI assist timed out after ${Ge / 1e3}s.`) : yt;
      } finally {
        Ee.dispose();
      }
      if (!W.ok) {
        const yt = await W.text().catch(() => "");
        throw new _e(W.status, yt, `AI assist HTTP ${W.status}: ${yt.slice(0, 200)}`);
      }
      const le = await W.json(), oe = x(le);
      if (!oe)
        throw console.warn("[Juli3ta] empty AI assist content from", me, le), new _e(502, "", `Model "${me}" returned empty content`);
      return oe.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [V]), Mn = R(async () => {
    if (V) {
      bt(!0), Y(null);
      try {
        const o = `You are a music-production assistant. Given a theme, style, and (optionally) lyrics, return ONE JSON object that fills in optimal Track Specs for the song.

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
        pe.current?.abort(), pe.current = new AbortController();
        const l = await ht(o, {
          theme: T || null,
          style: C || null,
          lyrics: L ? L.slice(0, 1500) : null,
          existing_specs: qt(X) > 0 ? X : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: pe.current.signal
        }), p = Gi(l) ?? l;
        let x;
        try {
          x = JSON.parse(p);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${l.slice(0, 160)}`);
        }
        Le((_) => ({ ...x, intent: _.intent }));
      } catch (o) {
        Y(o.message || "Optimize failed.");
      } finally {
        bt(!1);
      }
    }
  }, [V, T, C, L, X, ht]), [Pe, wt] = S(null), Ao = R(async () => {
    if (!V) return;
    if (!V.models.image) {
      Y(`This endpoint (${V.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (Qe) return;
    pe.current?.abort(), pe.current = new AbortController();
    const o = pe.current.signal;
    Kt(!0), Y(null);
    try {
      const l = (F.trim() || Ja(I, T, C)).slice(0, 1500), p = await Wr(V, l, o);
      if (o.aborted) return;
      A(p), xe && sa.current?.(xe, p);
    } catch (l) {
      if (l.name === "AbortError") return;
      Y(l.message || "Cover-art generation failed.");
    } finally {
      Kt(!1);
    }
  }, [V, F, I, T, C, Qe, xe]), zo = R((o) => {
    if (!o.type.startsWith("image/")) {
      Y("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (o.size > 4 * 1024 * 1024) {
      Y("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const l = new FileReader();
    l.onerror = () => Y("Could not read that image file."), l.onload = () => {
      const p = l.result;
      typeof p == "string" && p.startsWith("data:image/") && (A(p), xe && sa.current?.(xe, p));
    }, l.readAsDataURL(o);
  }, [xe]), Rn = R(async () => {
    if (!Pe) {
      wt("theme"), Y(null);
      try {
        const o = "You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.";
        pe.current?.abort(), pe.current = new AbortController();
        const l = await ht(o, {
          style: C || "pop",
          existing_theme: T || null
        }, { temperature: 0.85, maxTokens: 200, signal: pe.current.signal });
        E(l);
      } catch (o) {
        Y(o.message || "Theme inspiration failed.");
      } finally {
        wt(null);
      }
    }
  }, [Pe, ht, C, T]), jn = R(async () => {
    if (!Pe) {
      wt("style"), Y(null);
      try {
        const o = 'You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".';
        pe.current?.abort(), pe.current = new AbortController();
        const l = await ht(o, {
          theme: T || "a quiet evening",
          existing_style: C || null
        }, { temperature: 0.7, maxTokens: 120, signal: pe.current.signal });
        j(l.replace(/^["']|["']$/g, ""));
      } catch (o) {
        Y(o.message || "Style suggestion failed.");
      } finally {
        wt(null);
      }
    }
  }, [Pe, ht, T, C]), Pn = R(async () => {
    if (!Pe) {
      if (!L.trim()) {
        Y("Nothing to polish — write some lyrics first.");
        return;
      }
      wt("lyrics"), Y(null);
      try {
        const o = "You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.";
        pe.current?.abort(), pe.current = new AbortController();
        const l = await ht(o, {
          style: C || null,
          lyrics: L
        }, { temperature: 0.6, maxTokens: 1200, signal: pe.current.signal });
        if (l.length > Ft) {
          Y(`Polished lyrics exceeded ${Ft} chars (${l.length}). Trimming the original first might help.`);
          return;
        }
        N(l);
      } catch (o) {
        Y(o.message || "Lyrics polish failed.");
      } finally {
        wt(null);
      }
    }
  }, [Pe, ht, C, L]), Dn = (o) => {
    j((l) => l ? `${l}, ${o.toLowerCase()}` : o.toLowerCase());
  }, xr = () => {
    const o = [
      "Late-night coding session, neon city skyline, focus and flow.",
      "Sunday-morning coffee, soft rain, lo-fi piano.",
      "Synthwave anthem about shipping on Friday evening.",
      "Jazz ballad about a forgotten train station at 3am.",
      "Acoustic folk song about a long road trip with old friends.",
      "Cinematic orchestral piece for a heroic underdog scene.",
      "Upbeat pop anthem about finishing a hard project."
    ];
    E(o[Math.floor(Math.random() * o.length)]);
  }, Un = () => {
    const o = k ?? H.state.trackId ?? gt[0]?.id ?? be[0]?.id ?? null, l = o ? He.find((p) => p.id === o) ?? null : null;
    l && Ot(l), b("creator"), xr();
  }, Lo = R((o) => {
    Re((l) => l.filter((p) => p.id !== o)), Gl(o).catch((l) => console.warn("Track cache delete failed:", l)), Pc(o).catch((l) => console.warn("Track file delete failed:", l));
  }, []), On = R(async () => {
    if (!Aa) {
      To(!0);
      try {
        const o = await Dc();
        ia(o), d({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: o,
          isRead: !1
        });
      } catch (o) {
        re(`Could not open JULI3TA folder — ${o.message || o}`);
      } finally {
        To(!1);
      }
    }
  }, [d, Aa]), Ma = R(async (o, l) => {
    const p = l.trim().slice(0, 200) || "Untitled";
    Re((x) => x.map((_) => _.id === o ? { ..._, title: p } : _));
    try {
      await Vl(o, p), re(null);
    } catch (x) {
      const _ = x.message || "Database write failed";
      re(`Couldn't rename track — ${_}.`);
    }
  }, []), wr = R(async (o, l) => {
    Re((p) => p.map((x) => x.id === o ? { ...x, coverDataUrl: l } : x));
    try {
      await Yl(o, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save cover art — ${x}.`);
    }
  }, []);
  q(() => {
    sa.current = wr;
  }, [wr]);
  const Io = R(async (o, l) => {
    Re((p) => p.map((x) => x.id === o ? { ...x, styleTags: l || "—" } : x));
    try {
      await Kl(o, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save style — ${x}.`);
    }
  }, []), Mo = R(async (o, l) => {
    Re((p) => p.map((x) => x.id === o ? { ...x, lyricsPreview: l } : x));
    try {
      await Xl(o, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save lyrics — ${x}.`);
    }
  }, []), Ro = R(async (o, l) => {
    Re((p) => p.map((x) => x.id === o ? { ...x, specsJson: l } : x));
    try {
      await Ql(o, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save specs — ${x}.`);
    }
  }, []), jo = R(async (o, l) => {
    Re((p) => p.map((x) => x.id === o ? { ...x, theme: l } : x));
    try {
      await Zl(o, l), re(null);
    } catch (p) {
      const x = p.message || "Database write failed";
      re(`Couldn't save theme — ${x}.`);
    }
  }, []);
  q(() => {
    if (!xe) return;
    const o = xe, l = setTimeout(() => {
      const p = vt.find((ke) => ke.id === o);
      if (!p) return;
      const x = I.trim() || p.title, _ = C.trim(), z = T, $ = qt(X) > 0 ? JSON.stringify(X) : "", Q = p.styleTags === "—" ? "" : p.styleTags || "";
      p.title !== x && Ma(o, x), Q !== _ && Io(o, _), (p.lyricsPreview || "") !== L && Mo(o, L), (p.specsJson || "") !== $ && Ro(o, $), (p.theme || "") !== z && jo(o, z);
    }, 600);
    return () => clearTimeout(l);
  }, [xe, I, C, T, L, X, vt, Ma, Io, Mo, Ro, jo]);
  const [Po, Do] = S(null), [Hn, Uo] = S(!1), Ot = R((o) => {
    N(o.lyricsPreview ?? ""), j(o.styleTags && o.styleTags !== "—" ? o.styleTags : ""), E(o.theme ?? "");
    const l = o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (U(l), ie(!1), o.specsJson)
      try {
        Le(JSON.parse(o.specsJson));
      } catch {
        Le({});
      }
    else
      Le({});
    A(o.coverDataUrl ?? ""), Ue(""), xa(o.id), Y(null), v(null), ie(!1), ve(o) ? o.source === "youtube" ? (g("restyle"), Te(null), Ie(`${l}.mp3`), Ne("Resolving streamed audio…"), ct(!0), (async () => {
      try {
        const x = o.externalId || "";
        if (!x) throw new Error("Missing source identifier.");
        const _ = ma(x), z = it[_], $ = z && Date.now() - z.resolvedAt < 5400 * 1e3 ? z.src : (await Lr(x)).proxyUrl;
        await mt($, `${l}.mp3`);
      } catch (x) {
        ct(!1), Te(null), Ie(null), Ne(null), Y(`Could not load streamed track for restyle: ${x.message || "unknown error"}`);
      }
    })()) : (g("restyle"), mt(o.audioDataUrl, `${l}.mp3`)) : (Te(null), Ie(null), Ne(null), g("lyricsOnly"));
  }, [mt, it]), Oo = R((o) => {
    const l = la(o);
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
  }, [la, c, d, a]), Ra = R((o, l, p, x) => {
    const _ = i.ensureUserFolder("Desktop");
    if (!_) return;
    const z = i.findChildByName(_, o);
    let $;
    if (z)
      p.refTrackId || i.writeFile(z.id, l), $ = z.id;
    else {
      $ = i.createFile(_, o, l, p);
      const Q = Array.from(x).reduce((kt, Ge) => kt + Ge.charCodeAt(0), 0), ke = Q % 6 + 1, Je = Math.floor(Q / 6) % 4;
      c({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: o,
          icon: Pl(o),
          fileSystemNodeId: $,
          position: { x: 16 + ke * 80, y: 16 + Je * 90 },
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
  }, [i, c, d, a]), $n = R((o) => {
    if (!o.audioDataUrl) return;
    const l = $a(o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Ra(`${l}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: o.id }, o.id);
  }, [Ra]), Fn = R((o) => {
    if (!o.lyricsPreview) return;
    const l = $a(o.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Ra(`${l}.lyrics.txt`, o.lyricsPreview, { mimeType: "text/plain" }, `${o.id}-lyrics`);
  }, [Ra]), Bn = R((o) => {
    Oe(!1), b("player"), M(o.id);
  }, []), nt = R((o) => {
    const l = o.dataTransfer.getData(ya);
    if (!l) return null;
    try {
      return JSON.parse(l);
    } catch {
      return null;
    }
  }, []), Wn = R((o) => {
    const l = nt(o);
    if (l && l.lyricsPreview) {
      o.preventDefault(), N(l.lyricsPreview);
      const p = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !I.trim() && p && U(p), !C.trim() && l.styleTags && l.styleTags !== "—" && j(l.styleTags);
      return;
    }
  }, [nt, I, C]), qn = R((o) => {
    const l = nt(o);
    l && l.styleTags && l.styleTags !== "—" && (o.preventDefault(), j((p) => p ? `${p}, ${l.styleTags}` : l.styleTags));
  }, [nt]), Jn = R((o) => {
    const l = nt(o);
    if (l) {
      o.preventDefault();
      const p = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), x = l.styleTags && l.styleTags !== "—" ? `Inspired by "${p}" — ${l.styleTags}` : `Inspired by "${p}"`;
      E(x);
    }
  }, [nt]), Gn = R((o) => {
    const l = nt(o);
    l && (o.preventDefault(), U(l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [nt]), ja = (o) => {
    o.dataTransfer.types.includes(ya) && (o.preventDefault(), o.dataTransfer.dropEffect = "copy");
  }, Ho = L.length, Vn = C.length, K = jt !== "idle", Yn = he(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            na.current?.abort(), pe.current?.abort(), Ia.current = !1, g("compose"), E(""), N(""), j(""), U(""), Le({}), v(null), ie(!1), A(""), Ue(""), pt(!1), Te(null), Ie(null), Ne(null), Y(null), re(null), We("idle"), Pt(0), wt(null), Kt(!1), bt(!1), xa(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => xr() },
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
  Il(r?.id ?? null, Yn);
  const qe = he(
    () => vt.filter(Wi),
    [vt]
  ), gt = he(() => {
    let o = qe;
    je === "songs" ? o = o.filter((p) => ve(p) && !/\(restyle\)\s*$/i.test(p.title) && !/\(lyrics\)\s*$/i.test(p.title)) : je === "restyles" ? o = o.filter((p) => /\(restyle\)\s*$/i.test(p.title)) : je === "lyrics" && (o = o.filter((p) => !ve(p) || /\(lyrics\)\s*$/i.test(p.title)));
    const l = Ce.trim().toLowerCase();
    return l ? o.filter((p) => p.title.toLowerCase().includes(l) || p.styleTags.toLowerCase().includes(l)) : o;
  }, [qe, Ce, je]), Ht = he(() => {
    let o = be;
    tt === "favorites" && (o = o.filter((p) => Ca.has(p.id)));
    const l = Ce.trim().toLowerCase();
    return l ? o.filter((p) => p.title.toLowerCase().includes(l) || (p.artist || "").toLowerCase().includes(l) || (p.album || "").toLowerCase().includes(l)) : o;
  }, [be, tt, Ce, Ca]), ca = R((o) => {
    o.slice(0, 4).forEach((l) => {
      const p = ma(l.id), x = it[p];
      x && Date.now() - x.resolvedAt < 5400 * 1e3 || gr.current.has(l.id) || (gr.current.add(l.id), yo((_) => new Set(_).add(l.id)), Lr(l.id).then((_) => {
        go((z) => ({
          ...z,
          [p]: { src: _.proxyUrl, resolvedAt: Date.now() }
        }));
      }).catch(() => {
      }).finally(() => {
        gr.current.delete(l.id), yo((_) => {
          const z = new Set(_);
          return z.delete(l.id), z;
        });
      }));
    });
  }, [it]);
  q(() => {
    if (!rt) return;
    const o = new AbortController();
    return Promise.allSettled([
      Lc(o.signal),
      Qo(o.signal),
      Zo(o.signal)
    ]).then(([l, p, x]) => {
      l.status === "fulfilled" ? po(l.value) : po(null), p.status === "fulfilled" && mo(p.value), x.status === "fulfilled" && ho(x.value);
    }), () => o.abort();
  }, [rt]), q(() => {
    if (!rt) return;
    const o = (l) => {
      l.key === "Escape" && Oe(!1);
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [rt]), q(() => {
    if (!rt) return;
    const o = lr.trim();
    if (o.length < 2) {
      const z = window.setTimeout(() => {
        cr([]), ot(null), Na(!1);
      }, 0);
      return () => window.clearTimeout(z);
    }
    const l = `${oa}:${o.toLowerCase()}`, p = So.current.get(l);
    if (p) {
      cr(p), Na(!1), ot(null), ca(p);
      return;
    }
    const x = new AbortController(), _ = setTimeout(() => {
      Na(!0), ot(null);
      let z = hr.current.get(l);
      z || (z = jc(o, oa, 20, x.signal).then(($) => oa === "playlists" ? $.results.playlists : $.results.tracks).catch(() => Rc(o, 20, x.signal)).finally(() => {
        hr.current.delete(l);
      }), hr.current.set(l, z)), z.then(($) => {
        So.current.set(l, $), cr($), ca($), $.length > 0 && uo(o);
      }).catch(($) => {
        x.signal.aborted || ot($.message || "Music search failed.");
      }).finally(() => {
        x.signal.aborted || Na(!1);
      });
    }, 120);
    return () => {
      x.abort(), clearTimeout(_);
    };
  }, [lr, oa, rt, ca, uo]);
  const Pa = R(async () => {
    const [o, l] = await Promise.allSettled([
      Qo(),
      Zo()
    ]);
    o.status === "fulfilled" && mo(o.value), l.status === "fulfilled" && ho(l.value);
  }, []), Kn = R(async (o, l) => {
    await Ic(o, l), await Pa(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${o} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, Pa]), Xn = R(async (o) => {
    await Mc(o), await Pa(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${o} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [d, Pa]), Qn = he(
    () => new Set(be.filter((o) => o.externalId).map((o) => o.externalId)),
    [be]
  ), Da = R((o, l) => {
    const p = Ji(o.title, o.channel);
    return {
      id: l?.id ?? ma(o.id),
      title: p.song || o.title || "Untitled",
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
      thumbnailUrl: o.thumbnailUrl || Xa(o.id),
      artist: p.artist || o.channel || "Unknown",
      album: o.channel ?? ""
    };
  }, []), Zn = R(async (o, l) => {
    if (o.audioDataUrl && !l?.force) return o.audioDataUrl;
    if (!qi(o) || !o.externalId) return o.audioDataUrl || null;
    const p = ma(o.externalId), x = it[p] ?? it[o.id];
    if (!l?.force && x && Date.now() - x.resolvedAt < 5400 * 1e3) return x.src;
    const _ = await Lr(o.externalId);
    return go((z) => ({ ...z, [p]: { src: _.proxyUrl, resolvedAt: Date.now() } })), _.proxyUrl;
  }, [it]), He = he(
    () => [...vo, ...be, ...gt],
    [vo, be, gt]
  );
  q(() => {
    if (!k || He.length === 0) return;
    He.some((l) => l.id === k) || M(null);
  }, [k, He]);
  const $o = ee(null), H = wd(He, $o, Zn);
  q(() => {
    const o = H.state.trackId;
    o && Zi((l) => l[0] === o ? l : [o, ...l.filter((x) => x !== o)].slice(0, 8));
  }, [H.state.trackId]), q(() => {
    if (typeof navigator > "u" || !("mediaSession" in navigator)) return;
    const o = navigator.mediaSession, l = H.state.trackId, p = l ? He.find((x) => x.id === l) : null;
    if (!p) {
      o.metadata = null, o.playbackState = "none";
      return;
    }
    return o.metadata = new MediaMetadata({
      title: p.title || "Untitled",
      artist: p.artist || "JULI3TA",
      album: p.album || (p.styleTags && p.styleTags !== "—" ? p.styleTags : ""),
      artwork: p.coverDataUrl ? [{ src: p.coverDataUrl, sizes: "512x512", type: p.coverDataUrl.startsWith("data:image/png") ? "image/png" : "image/jpeg" }] : p.thumbnailUrl ? [{ src: p.thumbnailUrl, sizes: "256x256", type: "image/jpeg" }] : []
    }), o.playbackState = H.state.playing ? "playing" : "paused", o.setActionHandler("play", () => H.toggle(p)), o.setActionHandler("pause", () => H.pause()), o.setActionHandler("previoustrack", () => H.prev()), o.setActionHandler("nexttrack", () => H.next()), o.setActionHandler("seekbackward", (x) => {
      H.seek(Math.max(0, H.state.positionMs - (x.seekOffset ?? 10) * 1e3));
    }), o.setActionHandler("seekforward", (x) => {
      H.seek(Math.min(H.state.durationMs || 0, H.state.positionMs + (x.seekOffset ?? 10) * 1e3));
    }), () => {
      o.setActionHandler("play", null), o.setActionHandler("pause", null), o.setActionHandler("previoustrack", null), o.setActionHandler("nexttrack", null), o.setActionHandler("seekbackward", null), o.setActionHandler("seekforward", null);
    };
  }, [H, H.state.trackId, H.state.playing, He]), q(() => {
    if (y !== "player") return;
    const o = (l) => {
      const p = l.target;
      if (p) {
        const z = p.tagName;
        if (z === "INPUT" || z === "TEXTAREA" || z === "SELECT" || p.isContentEditable) return;
      }
      const x = H.state.trackId;
      if (!x) return;
      const _ = He.find((z) => z.id === x);
      if (_)
        switch (l.key) {
          case " ":
            l.preventDefault(), H.toggle(_);
            break;
          case "ArrowLeft":
            l.preventDefault(), H.seek(Math.max(0, H.state.positionMs - 5e3));
            break;
          case "ArrowRight":
            l.preventDefault(), H.seek(Math.min(H.state.durationMs || 0, H.state.positionMs + 5e3));
            break;
          case "ArrowUp":
            l.preventDefault(), H.setVolume(Math.min(1, H.state.volume + 0.1));
            break;
          case "ArrowDown":
            l.preventDefault(), H.setVolume(Math.max(0, H.state.volume - 0.1));
            break;
        }
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [y, H, He]);
  const es = R((o) => {
    const l = o.items.find(ve);
    l && (xo((p) => [
      ...o.items.filter((x) => !p.some((_) => _.id === x.id)),
      ...p
    ]), M(l.id), Oe(!1), b("player"), H.play(l));
  }, [H]), ts = R(async (o) => {
    await mc(o), Ut(await ua());
  }, []), as = R((o) => {
    ot(null), fo(o.id);
    const l = ma(o.id), p = it[l], x = Da(
      o,
      p ? { id: l, audioDataUrl: p.src } : void 0
    );
    xo((_) => [x, ..._.filter((z) => z.id !== x.id)]), M(x.id), b("player"), H.play(x), fo(null);
  }, [H, Da, it]), rs = R(async (o) => {
    bo(o.id);
    const l = Da(o);
    try {
      await ji(l), dr((p) => [l, ...p.filter((x) => x.id !== l.id)]), M(l.id), so("library"), lo("all"), ca([o]), pr.length > 0;
    } catch (p) {
      ot(p.message || "Could not save track.");
    } finally {
      bo(null);
    }
  }, [Da, ca, pr.length]), kr = R((o) => {
    ur((l) => {
      const p = new Set(l);
      return p.has(o.id) ? p.delete(o.id) : p.add(o.id), p;
    }), uc({
      kind: "track",
      entityId: o.id,
      provider: o.source ?? "youtube",
      title: o.title
    }).catch((l) => console.warn("Favorite toggle failed:", l));
  }, []), os = R(async () => {
    const o = mr.trim() || "New Playlist";
    ko(!0);
    try {
      const l = await pc(o);
      Ut((p) => [l, ...p]), wo("");
    } catch (l) {
      ot(l.message || "Could not create playlist.");
    } finally {
      ko(!1);
    }
  }, [mr]), is = R(async (o, l) => {
    try {
      await hc(o, l);
      const p = await ua();
      Ut(p);
    } catch (p) {
      ot(p.message || "Could not add to playlist.");
    }
  }, []), ns = R(async (o, l) => {
    try {
      await gc(o, l);
      const p = await ua();
      Ut(p);
    } catch (p) {
      ot(p.message || "Could not remove from playlist.");
    }
  }, []), Sr = R((o) => {
    dr((l) => l.filter((p) => p.id !== o.id)), ur((l) => {
      const p = new Set(l);
      return p.delete(o.id), p;
    }), lc(o.id).then(() => ua().then(Ut)).catch((l) => console.warn("Library track delete failed:", l));
  }, []), ss = R((o) => {
    _a((l) => {
      const p = new Set(l);
      return p.has(o.id) ? p.delete(o.id) : p.add(o.id), p;
    });
  }, []), da = R(() => {
    sr(!1), _a(/* @__PURE__ */ new Set());
  }, []);
  q(() => {
    if (!xt) return;
    const o = (l) => {
      l.key === "Escape" && da();
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [xt, da]), q(() => {
    ue !== "library" && (xt || at.size > 0) && (sr(!1), _a(/* @__PURE__ */ new Set()));
  }, [ue, xt, at.size]);
  const Tr = R((o) => {
    M(o.id), Oe(!1), b("player");
  }, []), ls = R((o) => {
    Ot(o), Oe(!1), b("creator");
  }, [Ot]);
  return V ? /* @__PURE__ */ n("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
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
                /* @__PURE__ */ t($e, { size: 13, style: { color: "var(--accent-primary)" } }),
                /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA" }),
                /* @__PURE__ */ n("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: ue === "mywork" ? Ce.trim() || je !== "all" ? `${gt.length} / ${qe.length}` : a(
                    qe.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: qe.length }
                  ) : Ce.trim() || tt !== "all" ? `${Ht.length} / ${be.length}` : `${be.length} saved` }),
                  ue === "mywork" && /* @__PURE__ */ n(de, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: On,
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
                        children: /* @__PURE__ */ t(Us, { size: 11 })
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
                              onClick: () => no("cards"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: aa === "cards" ? "var(--bg-hover)" : "transparent",
                                color: aa === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "Cards",
                              children: /* @__PURE__ */ t(Or, { size: 11 })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => no("list"),
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
                  ue === "library" && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        Oe(!0), ra("search");
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
                { id: "mywork", label: "My Work", count: qe.length },
                { id: "library", label: "Library", count: be.length }
              ].map((o) => /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => so(o.id),
                  className: "flex-1 rounded-md transition-all",
                  style: {
                    height: 26,
                    fontSize: 11,
                    fontWeight: ue === o.id ? 700 : 600,
                    color: ue === o.id ? "white" : "var(--text-secondary)",
                    background: ue === o.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
                          opacity: ue === o.id ? 0.85 : 0.55
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
          /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center gap-1 px-2 flex-shrink-0",
              style: {
                height: 32,
                borderBottom: "1px solid var(--border-subtle)",
                background: "var(--bg-window)",
                opacity: ue === "mywork" ? qe.length === 0 ? 0.4 : 1 : be.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(lt, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: Ce,
                    onChange: (o) => io(o.target.value),
                    placeholder: ue === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: ue === "mywork" ? qe.length === 0 : be.length === 0
                  }
                ),
                Ce && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => io(""),
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
              children: ue === "mywork" ? [
                { id: "all", label: "All" },
                { id: "songs", label: "Songs" },
                { id: "restyles", label: "Restyles" },
                { id: "lyrics", label: "Lyrics" }
              ].map((o) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Qi(o.id),
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
              )) : xt ? /* @__PURE__ */ n(de, { children: [
                /* @__PURE__ */ n("span", { style: { fontSize: 10, fontWeight: 800, color: "var(--text-primary)", flexShrink: 0 }, children: [
                  at.size,
                  " selected"
                ] }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => _a(new Set(Ht.map((o) => o.id))),
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
              ] }) : /* @__PURE__ */ n(de, { children: [
                [
                  { id: "all", label: "All" },
                  { id: "favorites", label: "Favorites" }
                ].map((o) => /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => lo(o.id),
                    className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                    style: {
                      height: 22,
                      fontSize: 10,
                      fontWeight: tt === o.id ? 800 : 600,
                      color: tt === o.id ? "white" : "var(--text-secondary)",
                      background: tt === o.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                      border: "1px solid var(--border-subtle)"
                    },
                    children: o.label
                  },
                  o.id
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
                      /* @__PURE__ */ t(ki, { size: 11 }),
                      " Select"
                    ]
                  }
                )
              ] })
            }
          ),
          ue === "mywork" ? qe.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
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
                  /* @__PURE__ */ t($e, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ n("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(Ke, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : gt.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(lt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ce ? a("musiccreator.gallery.searchEmpty", { q: Ce }) : `No ${je} yet.` })
          ] }) : /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: [
            Ta.length > 0 && je === "all" && !Ce.trim() && /* @__PURE__ */ t(
              Pd,
              {
                trackIds: Ta,
                allTracks: qe,
                player: H,
                onSelect: Tr
              }
            ),
            aa === "list" ? /* @__PURE__ */ t(
              Md,
              {
                tracks: gt,
                player: H,
                onLoad: Ot,
                onOpenLyrics: Oo,
                onDelete: Lo,
                onRename: Ma
              }
            ) : gt.map((o) => /* @__PURE__ */ t(
              jd,
              {
                track: o,
                onDelete: Lo,
                onLoad: Ot,
                onOpenLyrics: Oo,
                onSaveSongToDesktop: $n,
                onSaveLyricsToDesktop: Fn,
                onPlayInPlayer: Bn,
                onRename: Ma,
                onEditCover: Do,
                onSelect: Tr,
                selected: y === "player" && k === o.id,
                player: H
              },
              o.id
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
                    Oe(!0), ra("search");
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
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ce ? `No matches for "${Ce}"` : `No ${tt} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Ht.map((o) => /* @__PURE__ */ t(
              Dd,
              {
                track: o,
                player: H,
                selected: y === "player" && k === o.id,
                isFavorite: Ca.has(o.id),
                onOpenInPlayer: Tr,
                onRemix: ls,
                onToggleFavorite: kr,
                onRemove: Sr,
                selectMode: xt,
                checked: at.has(o.id),
                onToggleCheck: ss
              },
              o.id
            )) })
          ),
          ue === "library" && xt && at.size > 0 && /* @__PURE__ */ n(
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
                      const o = Ht.filter((l) => at.has(l.id));
                      for (const l of o) kr(l);
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
                    title: `Toggle favorite on ${at.size} track(s)`,
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
                      const o = Ht.filter((l) => at.has(l.id));
                      for (const l of o) Sr(l);
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
                    title: `Remove ${at.size} track(s) from Library`,
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
              /* @__PURE__ */ t(Ci, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
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
                  { id: "creator", icon: /* @__PURE__ */ t($e, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(ge, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
                ].map((o) => /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: () => b(o.id),
                    title: o.tip,
                    className: "flex items-center gap-1.5 px-3 rounded-md transition-all",
                    style: {
                      height: 28,
                      fontSize: 11,
                      fontWeight: y === o.id ? 600 : 500,
                      color: y === o.id ? "white" : "var(--text-secondary)",
                      background: y === o.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
            /* @__PURE__ */ n("div", { className: "ml-auto flex items-center gap-1.5 flex-shrink-0", children: [
              y === "player" && /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => {
                    Oe((o) => !o), ra("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: rt ? "white" : "var(--text-secondary)",
                    background: rt ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(lt, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(Id, { endpoint: V, endpoints: La, onSwitch: wn }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: y === "player" ? Un : xr,
                  disabled: K,
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
                    /* @__PURE__ */ t(Jr, { size: 12 }),
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
                  children: /* @__PURE__ */ t(wi, { size: 14 })
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
                  children: /* @__PURE__ */ t(zs, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      y === "player" && (rt ? /* @__PURE__ */ t(
        Xd,
        {
          tab: en,
          onTabChange: ra,
          query: lr,
          onQueryChange: tn,
          searchHistory: an,
          onClearSearchHistory: () => {
            co([]);
            try {
              localStorage.removeItem("juli3ta:searchHistory");
            } catch {
            }
          },
          resultType: oa,
          onResultTypeChange: rn,
          results: on,
          busy: nn,
          error: sn,
          status: ln,
          providers: cn,
          connectors: dn,
          libraryTracks: be,
          playlists: pr,
          playlistNameDraft: mr,
          playlistBusy: hn,
          favoriteIds: Ca,
          warmupIds: un,
          previewBusyId: pn,
          addBusyId: mn,
          savedYoutubeIds: Qn,
          player: H,
          onPreview: as,
          onAdd: rs,
          onOpenTrack: (o) => {
            M(o.id), Oe(!1), b("player");
          },
          onToggleFavorite: kr,
          onRemoveLibraryTrack: Sr,
          onPlaylistNameDraftChange: wo,
          onCreatePlaylist: os,
          onAddTrackToPlaylist: is,
          onRemoveTrackFromPlaylist: ns,
          onPlayPlaylist: es,
          onDeletePlaylist: ts,
          onConfigureConnector: Kn,
          onDisconnectConnector: Xn,
          onClose: () => Oe(!1)
        }
      ) : /* @__PURE__ */ t(
        Kd,
        {
          track: (() => {
            const o = k ?? H.state.trackId ?? gt[0]?.id ?? be[0]?.id ?? null;
            return o ? He.find((l) => l.id === o) ?? null : null;
          })(),
          player: H,
          restyleOriginal: Vi,
          onSwitchToCreator: () => b("creator"),
          onSearchMusic: () => {
            b("player"), Oe(!0), ra("search");
          },
          onEditInCreator: (o) => {
            Ot(o), b("creator");
          }
        }
      )),
      y === "creator" && /* @__PURE__ */ n(de, { children: [
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
              ].map((o) => /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => g(o.id),
                  disabled: K,
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
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: K ? /* @__PURE__ */ n(
                "button",
                {
                  onClick: In,
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
                const o = m === "restyle" && (we || !Fe);
                return /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: kn,
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
                    title: o ? we ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      o && we ? /* @__PURE__ */ t(te, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(zt, { size: 13 }),
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
                  value: I,
                  onChange: (o) => U(o.target.value),
                  onDragOver: ja,
                  onDrop: Gn,
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
              m !== "lyricsOnly" && /* @__PURE__ */ n(
                "label",
                {
                  htmlFor: "juli3ta-instrumental",
                  className: "flex items-center gap-2 cursor-pointer select-none flex-shrink-0",
                  style: { fontSize: 11, color: "var(--text-secondary)" },
                  children: [
                    a("musiccreator.lyrics.instrumental"),
                    /* @__PURE__ */ t(
                      si,
                      {
                        id: "juli3ta-instrumental",
                        checked: J,
                        onChange: ie,
                        disabled: K
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (K || ta || Dt) && /* @__PURE__ */ n(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: ta ? "rgba(255, 82, 82, 0.06)" : Dt ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              K && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${Xi * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: ta ? /* @__PURE__ */ n(de, { children: [
                /* @__PURE__ */ t(fa, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: ta, children: ta }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Y(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(ye, { size: 11 })
                  }
                )
              ] }) : K ? /* @__PURE__ */ n(de, { children: [
                /* @__PURE__ */ t(te, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: jt === "lyrics" ? ii[ro % ii.length] : ni[ro % ni.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: jt === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : /* @__PURE__ */ n(de, { children: [
                /* @__PURE__ */ t(fa, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: Dt ?? "", children: Dt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => re(null),
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
        /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: /* @__PURE__ */ n("div", { className: "px-6 py-5", children: [
          m === "restyle" && /* @__PURE__ */ n(
            "div",
            {
              className: "mb-5",
              onDragOver: (o) => {
                o.dataTransfer.types.includes(ya) && (o.preventDefault(), o.dataTransfer.dropEffect = "copy");
              },
              onDrop: (o) => {
                const l = nt(o);
                l && l.hasAudio && (o.preventDefault(), (async () => {
                  const p = await Jl(l.id);
                  if (!p?.audioDataUrl) {
                    Y("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  mt(p.audioDataUrl, `${l.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                Ze ? /* @__PURE__ */ n(
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
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: Ze }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: Ln,
                            disabled: K || we,
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
                        /* @__PURE__ */ t(Ke, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: Sn,
                      disabled: K,
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
                      onClick: An,
                      disabled: K || vt.filter((o) => o.audioDataUrl).length === 0,
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
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: vt.filter((o) => o.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: En,
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
                        /* @__PURE__ */ t(Ke, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: Qt.length }) })
                      ]
                    }
                  )
                ] }),
                !Ze && /* @__PURE__ */ n("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ n("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => Xr("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Me === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Me === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Me === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t($e, { size: 13, style: { color: Me === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
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
                        onClick: () => Xr("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Me === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Me === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Me === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(Or, { size: 13, style: { color: Me === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ n("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 best parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                Ki && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !Be && ka(!1),
                    children: /* @__PURE__ */ n(
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
                          /* @__PURE__ */ n("div", { className: "px-5 py-4", style: { borderBottom: "1px solid var(--border-subtle)" }, children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }, children: "Record audio for cover" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.4 }, children: "Capture 1–3 minutes of music for best results. JULI3TA will auto-extract the iconic parts." })
                          ] }),
                          /* @__PURE__ */ n("div", { className: "px-5 pt-3", children: [
                            /* @__PURE__ */ n("div", { className: "grid grid-cols-2 gap-2", children: [
                              /* @__PURE__ */ n(
                                "button",
                                {
                                  onClick: () => !Be && Qr("mic"),
                                  disabled: Be,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: et === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${et === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Ke, { size: 14 }),
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
                                  onClick: () => !Be && Qr("tab"),
                                  disabled: Be,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: et === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${et === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Wo, { size: 14 }),
                                    /* @__PURE__ */ n("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            et === "tab" && /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
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
                                  Math.floor(Zr / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor(Zr / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            Be ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: _n,
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
                                onClick: Tn,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: et === "tab" ? /* @__PURE__ */ t(Wo, { size: 28 }) : /* @__PURE__ */ t(Ke, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: Be ? et === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            to && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: to })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ n(
                            "div",
                            {
                              className: "px-5 py-3 flex items-center justify-between",
                              style: { borderTop: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)" },
                              children: [
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: Be ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !Be && ka(!1),
                                    disabled: Be,
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
                    ref: P,
                    type: "file",
                    accept: "audio/*",
                    onChange: Nn,
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
                          /* @__PURE__ */ n(
                            "div",
                            {
                              className: "px-4 py-3 flex items-center justify-between",
                              style: { borderBottom: "1px solid var(--border-subtle)" },
                              children: [
                                /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ t(Ke, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                            /* @__PURE__ */ t(Ke, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : Qt.map((o) => {
                            const l = o.durationMs / 1e3, p = l < 6;
                            return /* @__PURE__ */ n(
                              "button",
                              {
                                onClick: () => !p && Cn(o),
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
                                      children: /* @__PURE__ */ t(Ke, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: o.name }),
                                    /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(l / 60),
                                      ":",
                                      Math.floor(l % 60).toString().padStart(2, "0"),
                                      p && " · too short for cover (need ≥6 s)"
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
                                o.preventDefault(), dt(!1);
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
                                    children: /* @__PURE__ */ t(ye, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const o = vt.filter((l) => l.audioDataUrl);
                            return o.length === 0 ? /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(Ct, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : o.map((l) => {
                              const p = l.durationMs / 1e3, x = p > 0 && p < 6, _ = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ n(
                                "button",
                                {
                                  onClick: () => !x && zn(l),
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
                        onClick: Rn,
                        busy: Pe === "theme",
                        disabled: K || Pe !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: T,
                        onChange: (o) => E(o.target.value),
                        onDragOver: ja,
                        onDrop: Jn,
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
                  ha,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${Vn} / ${cd}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      jr,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: jn,
                        busy: Pe === "style",
                        disabled: K || Pe !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: C,
                        onChange: (o) => j(o.target.value),
                        onDragOver: ja,
                        onDrop: qn,
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
          m !== "lyricsOnly" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-4 mb-5", children: [
            /* @__PURE__ */ t(Nd, { onPick: Dn, disabled: K }),
            /* @__PURE__ */ t(
              Cd,
              {
                specs: X,
                onChange: Le,
                disabled: K,
                onOptimize: Mn,
                optimizing: wa
              }
            )
          ] }),
          /* @__PURE__ */ n(
            ha,
            {
              label: "Cover Art",
              hint: V?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ n("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  si,
                  {
                    checked: ze,
                    onChange: rr,
                    disabled: K || !V?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      onClick: () => Uo(!0),
                      disabled: K,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: fe ? `url(${fe}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: K ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !fe && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ba, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        Qe && /* @__PURE__ */ t(
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
                          onClick: Ao,
                          disabled: K || Qe || !V?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: K || Qe || !V?.models.image ? "not-allowed" : "pointer"
                          },
                          title: V?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            Qe ? /* @__PURE__ */ t(te, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t($e, { size: 11 }),
                            fe ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => B.current?.click(),
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
                            /* @__PURE__ */ t(Gr, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      fe && /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            A(""), xe && sa.current?.(xe, "");
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
                            /* @__PURE__ */ t(ye, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => pt((o) => !o),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            se ? /* @__PURE__ */ t(Cs, { size: 11 }) : /* @__PURE__ */ t(vi, { size: 11 }),
                            se ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    se && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: F,
                        onChange: (o) => Ue(o.target.value),
                        placeholder: Ja(I, T, C),
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
                    ref: B,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (o) => {
                      const l = o.target.files?.[0];
                      l && zo(l), o.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          m !== "restyle" && !J && /* @__PURE__ */ t(
            ha,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (X.intent ?? "").length > 0 ? `${(X.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: X.intent ?? "",
                  onChange: (o) => Le((l) => ({ ...l, intent: o.target.value })),
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
          /* @__PURE__ */ n(
            ha,
            {
              label: a("musiccreator.lyrics.label"),
              counter: J ? "instrumental — no vocals" : `${Ho} / ${Ft}`,
              counterDanger: !J && Ho > Ft,
              className: "mb-5",
              headerExtra: J ? void 0 : /* @__PURE__ */ t(
                jr,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: Pn,
                  busy: Pe === "lyrics",
                  disabled: K || Pe !== null || !L.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: L,
                    onChange: (o) => N(o.target.value),
                    onDragOver: ja,
                    onDrop: Wn,
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
                  ld.map((o) => {
                    const l = O?.id === o.id;
                    return /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => {
                          l ? v(null) : (v(o), L.trim() || N(o.skeleton));
                        },
                        disabled: K,
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
                  O && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(kd, { player: H, allTracks: He }),
      /* @__PURE__ */ t("audio", { ref: $o, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      Al,
      {
        open: w,
        onClose: () => u(!1),
        onUseRecipe: (o, l) => {
          g("compose"), E(o), j(l);
        }
      }
    ),
    gn && /* @__PURE__ */ t(
      Zd,
      {
        settings: yr,
        endpoints: La,
        onChange: yn,
        onClose: () => fr(!1)
      }
    ),
    Po && /* @__PURE__ */ t(
      Ud,
      {
        track: Po,
        endpoint: V,
        onSave: wr,
        onClose: () => Do(null)
      }
    ),
    Hn && /* @__PURE__ */ t(
      Od,
      {
        songName: I,
        mode: m,
        theme: T,
        style: C,
        intent: X.intent ?? "",
        lyrics: L,
        specs: X,
        coverDataUrl: fe,
        endpoint: V,
        busy: Qe,
        onRegenerate: Ao,
        onUpload: zo,
        onClear: () => {
          A(""), xe && sa.current?.(xe, "");
        },
        onClose: () => Uo(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(_d, { retrying: xn, onRetry: vr });
}
function Zd({ settings: e, endpoints: a, onChange: r, onClose: i }) {
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
      onClick: i,
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
                  /* @__PURE__ */ t(wi, { size: 14, style: { color: "var(--accent-primary)" } }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA Settings" }),
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
                ], m = (u) => /music|cover/i.test(u), g = (u) => /image|diffusion|dall-?e|flux|sdxl/i.test(u), w = (u) => u === "chat" ? c.models.allIds.filter((y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(y)) : u === "image" ? c.models.allIds.filter(g) : c.models.allIds.filter(m);
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
                        const y = w(u.kind), b = d[u.key] ?? "";
                        return /* @__PURE__ */ n(ps, { children: [
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
                              value: b,
                              onChange: (k) => s(c.url, u.key, k.target.value),
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
                                y.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: y.map((k) => /* @__PURE__ */ t("option", { value: k, children: k }, k)) })
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
function ou(e) {
  const a = e.host.storage.current();
  return Wl(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(ms, { value: e, children: /* @__PURE__ */ t(Qd, {}) });
  };
}
export {
  ou as default
};
//# sourceMappingURL=index.js.map
