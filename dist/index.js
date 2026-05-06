import { jsx as t, jsxs as s, Fragment as he } from "react/jsx-runtime";
import { createContext as ai, useContext as ri, forwardRef as oi, createElement as Cr, useState as S, useEffect as ae, useMemo as ue, useRef as te, useCallback as L, Fragment as Xn } from "react";
import { createPortal as Ja } from "react-dom";
const ii = ai(null), Qn = ii.Provider;
function Wt() {
  const e = ri(ii);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), es = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), jo = (e) => {
  const a = es(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, ni = (...e) => e.filter((a, r, o) => !!a && a.trim() !== "" && o.indexOf(a) === r).join(" ").trim(), ts = (e) => {
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
var as = {
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
const rs = oi(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: n = "",
    children: c,
    iconNode: d,
    ...v
  }, p) => Cr(
    "svg",
    {
      ref: p,
      ...as,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(a) : r,
      className: ni("lucide", n),
      ...!c && !ts(v) && { "aria-hidden": "true" },
      ...v
    },
    [
      ...d.map(([h, w]) => Cr(h, w)),
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
const j = (e, a) => {
  const r = oi(
    ({ className: o, ...n }, c) => Cr(rs, {
      ref: c,
      iconNode: a,
      className: ni(
        `lucide-${Zn(jo(e))}`,
        `lucide-${e}`,
        o
      ),
      ...n
    })
  );
  return r.displayName = jo(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], is = j("album", os);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], pa = j("check", ns);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], si = j("chevron-down", ss);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Po = j("chevron-left", ls);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ds = j("chevron-right", cs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ps = j("chevron-up", us);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ma = j("circle-alert", ms);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], gs = j("circle-question-mark", hs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], bs = j("copy", ys);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], St = j("disc-3", fs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], xs = j("download", vs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], jr = j("ellipsis-vertical", ws);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], li = j("external-link", ks);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
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
], Tt = j("file-music", Ss);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], _s = j("folder-open", Ts);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], Pr = j("heart", Ns);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ha = j("image", Cs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
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
], Er = j("layers", Es);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Ls = j("list-music", As);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], K = j("loader-circle", zs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], qe = j("mic", Is);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], Ar = j("monitor-speaker", Ms);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], Do = j("monitor", Rs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], ga = j("music-2", js);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], $a = j("notebook-text", Ps);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], ht = j("pause", Ds);
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], ci = j("pencil", Us);
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
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], pe = j("play", Os);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Lr = j("plus", Hs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Fs = j("radio", $s);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Ws = j("refresh-cw", Bs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], Js = j("repeat-1", qs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], Vs = j("repeat", Gs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], at = j("search", Ys);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], di = j("settings-2", Ks);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], Qs = j("shuffle", Xs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
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
], Pe = j("sparkles", Zs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], tl = j("square", el);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ft = j("trash-2", al);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Dr = j("upload", rl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], il = j("user-round", ol);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = [
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
], _t = j("wand-sparkles", nl);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], me = j("x", sl), ll = {
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
}, cl = {
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
}, Uo = { en: ll, es: cl }, Ia = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", dl = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, o) => String(a[o] ?? `{${o}}`)) : e;
function Ct() {
  const { host: e } = Wt(), [a, r] = S(() => Ia(e.i18n?.locale));
  ae(() => e.i18n?.onLocaleChange?.((n) => r(Ia(n))), [e]);
  const o = ue(() => (n, c) => {
    const d = e.i18n?.t?.(n, c);
    if (d && d !== n) return d;
    const v = Ia(a), p = Uo[v]?.[n] ?? Uo.en[n] ?? n;
    return dl(p, c);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (n) => r(Ia(n)),
    installLanguagePack: (n) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (n) => {
    }
  };
}
const ul = [
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
], pl = [
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
function ml({ recipe: e, onUse: a }) {
  const { t: r } = Ct(), [o, n] = S(!1), c = async () => {
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
                /* @__PURE__ */ t(_t, { size: 12 }),
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
              children: o ? /* @__PURE__ */ t(pa, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(bs, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function hl({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: o, language: n } = Ct(), [c, d] = S("start");
  if (!e) return null;
  const v = n === "es" ? pl : ul;
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
          onClick: (p) => p.stopPropagation(),
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
                        children: /* @__PURE__ */ t(St, { size: 18, style: { color: "white" } })
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
                      children: /* @__PURE__ */ t(me, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1 px-5 pt-3 flex-shrink-0", children: ["start", "recipes", "help"].map((p) => {
              const h = c === p;
              return /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => d(p),
                  className: "px-3 py-1.5 rounded-lg transition-all",
                  style: {
                    fontSize: 11,
                    fontWeight: h ? 600 : 500,
                    color: h ? "var(--text-primary)" : "var(--text-secondary)",
                    background: h ? "var(--bg-titlebar)" : "transparent",
                    border: h ? "1px solid var(--border-subtle)" : "1px solid transparent"
                  },
                  children: o(`julietaHelp.tab.${p}`)
                },
                p
              );
            }) }),
            /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", style: { paddingBottom: 96 }, children: [
              c === "start" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(Pt, { icon: /* @__PURE__ */ t(Pe, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(Ma, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(Ma, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(Ma, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(Ma, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(Pt, { icon: /* @__PURE__ */ t(_t, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(yr, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(yr, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(yr, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(Pt, { icon: /* @__PURE__ */ t(qe, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(gl, { body: o("julietaHelp.start.recorder.body") }),
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
              c === "recipes" && /* @__PURE__ */ s("div", { className: "space-y-3", children: [
                /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: o("julietaHelp.recipes.intro") }),
                v.map((p) => /* @__PURE__ */ t(
                  ml,
                  {
                    recipe: p,
                    onUse: (h) => {
                      r(h.theme, h.style), a();
                    }
                  },
                  p.id
                ))
              ] }),
              c === "help" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(Pt, { icon: /* @__PURE__ */ t(ma, { size: 14 }), text: o("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.failed.title"), a: o("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.nopod.title"), a: o("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.local.title"), a: o("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t(Pt, { icon: /* @__PURE__ */ t(_t, { size: 14 }), text: o("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.howlong.title"), a: o("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.quota.title"), a: o("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.length.title"), a: o("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.coverlen.title"), a: o("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t(Pt, { icon: /* @__PURE__ */ t(qe, { size: 14 }), text: o("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.silentmic.title"), a: o("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.shortrec.title"), a: o("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t(Be, { q: o("julietaHelp.help.q.privacy.title"), a: o("julietaHelp.help.q.privacy.body") })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function Pt({ icon: e, text: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: a })
  ] });
}
function Ma({ n: e, title: a, body: r }) {
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
function yr({ emoji: e, name: a, body: r }) {
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
function gl({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function Be({ q: e, a }) {
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
                ds,
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
const br = (e) => {
  const a = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(a.agents) ? a.agents : [],
    included: Array.isArray(a.included) ? a.included : [],
    tiers: [],
    ...a
  };
}, yl = () => {
  const { host: e } = Wt(), [a, r] = S(0), [o, n] = S(() => br(e.daemon?.state));
  return ae(() => (n(br(e.daemon?.state)), e.daemon?.onStateChange?.((c) => n(br(c)))), [e, a]), ue(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((c) => c + 1)
  }), [o]);
}, bl = (e, a) => {
  const { host: r } = Wt();
  ae(() => {
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
function fl() {
  return Wt().host.windows.current;
}
const ui = "juli3ta_standalone_vfs_v1", pi = () => Math.random().toString(36).slice(2) + Date.now().toString(36), wt = (e, a) => ({
  id: pi(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), vl = () => {
  const e = wt("/", null), a = wt("home", e.id), r = wt("user", a.id), o = wt("Desktop", r.id), n = wt("Music", r.id), c = wt("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, o, n, c].map((d) => [d.id, d])) };
}, Ra = () => {
  try {
    const a = localStorage.getItem(ui);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = vl();
  return Ua(e), e;
}, Ua = (e) => {
  try {
    localStorage.setItem(ui, JSON.stringify(e));
  } catch {
  }
}, xl = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), wl = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function kl() {
  return {
    ensureUserFolder(a) {
      const r = Ra(), o = xl(a);
      let n = Object.values(r.nodes).find((c) => c.type === "folder" && c.name === o);
      if (!n) {
        const c = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        n = wt(o, c?.id ?? null), r.nodes[n.id] = n, Ua(r);
      }
      return n.id;
    },
    findChildByName(a, r) {
      const o = Ra();
      return Object.values(o.nodes).find((n) => n.parentId === a && n.name === r);
    },
    createFile(a, r, o = "", n = {}) {
      const c = Ra(), d = { id: pi(), name: r, type: "file", parentId: a, content: o, mimeType: n.mimeType, refTrackId: n.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return c.nodes[d.id] = d, Ua(c), d.id;
    },
    writeFile(a, r) {
      const o = Ra();
      o.nodes[a] && (o.nodes[a].content = r, o.nodes[a].modifiedAt = Date.now(), Ua(o));
    }
  };
}
const Sl = { theme: { mode: "dark" } }, Tl = ai(null);
function mi() {
  const e = ri(Tl), { host: a } = Wt();
  return ue(() => e || {
    state: Sl,
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
function _l() {
  const { host: e } = Wt();
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
const Nl = {
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
}, Cl = {
  juli3ta: Nl
};
function hi({ name: e, size: a = 24, className: r, style: o, alt: n, scale: c }) {
  const [d, v = "mark"] = e.split(":"), p = Cl[d], { state: h } = mi();
  let w;
  if (v === "mark" ? w = h.theme.mode === "light" ? p?.["mark-ink"] : p?.["mark-white"] : w = p?.[v], !w) return null;
  const u = n ?? d.charAt(0).toUpperCase() + d.slice(1), b = c ?? w.scale ?? 1;
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
        ...b !== 1 ? { transform: `scale(${b})`, transformOrigin: "center" } : null,
        ...w.filter ? { filter: w.filter } : null,
        ...o
      },
      className: r,
      draggable: !1
    }
  );
}
let gi = null, Oo = null;
const fr = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), El = [
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
function Al(e) {
  Oo = (async () => {
    for (const r of El) await e.run(r);
  })();
  const a = async () => Oo;
  gi = {
    exec: async (r) => {
      await a();
      for (const o of fr(r).split(";").map((n) => n.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (r, o = []) => (await a(), e.query(fr(r), o)),
    run: async (r, o = []) => {
      await a(), await e.run(fr(r), o);
    },
    tx: async (r) => (await a(), r())
  };
}
const X = () => gi, Fa = (e) => ({
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
}), B = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), Ur = (e) => B(e, "specs_json") || B(e, "cover_data_url") || B(e, "theme") || B(e, "source") || B(e, "audio_kind") || B(e, "external_id") || B(e, "external_url") || B(e, "thumbnail_url") || B(e, "artist") || B(e, "album"), Ho = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, $o = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, vr = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, xt = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), yi = async (e, a, r, o) => {
  if (B(o, "source") || B(o, "audio_kind") || B(o, "external_id") || B(o, "external_url") || B(o, "thumbnail_url") || B(o, "artist") || B(o, "album"))
    try {
      return (await e.query(
        `SELECT ${Ho}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(xt);
    } catch (n) {
      o = n;
    }
  if (B(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${Ho} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => xt({ ...c, theme: "" }));
    } catch (n) {
      if (!B(n, "cover_data_url")) throw n;
      try {
        return (await e.query(
          `SELECT ${$o} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => xt({ ...d, cover_data_url: "", theme: "" }));
      } catch (c) {
        if (!B(c, "specs_json")) throw c;
        return (await e.query(
          `SELECT ${vr} FROM music_creator_tracks ${a}`,
          r
        )).map((v) => xt({ ...v, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (B(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${$o} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => xt({ ...c, cover_data_url: "", theme: "" }));
    } catch (n) {
      if (!B(n, "specs_json")) throw n;
      return (await e.query(
        `SELECT ${vr} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => xt({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (B(o, "specs_json"))
    return (await e.query(
      `SELECT ${vr} FROM music_creator_tracks ${a}`,
      r
    )).map((c) => xt({ ...c, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, bi = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, Ll = async () => {
  const e = X();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${bi} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(Fa);
  } catch (a) {
    if (!Ur(a)) throw a;
    return (await yi(e, "ORDER BY created_at DESC", [], a)).map(Fa);
  }
}, zl = async (e) => {
  const a = X();
  if (!a) return null;
  try {
    const r = await a.query(
      `SELECT ${bi} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return r.length === 0 ? null : Fa(r[0]);
  } catch (r) {
    if (!Ur(r)) throw r;
    const o = await yi(a, "WHERE id = ? LIMIT 1", [e], r);
    return o.length === 0 ? null : Fa(o[0]);
  }
}, Ba = async (e) => {
  const a = X();
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
    if (!Ur(o)) throw o;
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
      } catch (n) {
        o = n;
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
      } catch (n) {
        if (!B(n, "cover_data_url")) throw n;
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
      } catch (n) {
        if (!B(n, "specs_json")) throw n;
      }
    await a.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      r
    );
  }
}, Il = async (e) => {
  const a = X();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Ml = async (e, a) => {
  const r = X();
  if (!r) throw new Error("Database not ready");
  const o = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, Rl = async (e, a) => {
  const r = X();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, jl = async (e, a) => {
  const r = X();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, Pl = async (e, a) => {
  const r = X();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, Dl = async (e, a) => {
  const r = X();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, Ul = async (e, a) => {
  const r = X();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, Ol = async (e, a) => {
  const r = X();
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
}, Hl = async (e, a) => {
  const r = X();
  r && await r.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(a)]
  );
}, fi = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, vi = "music_creator_settings", $l = () => Ol(vi, fi), Fl = (e) => Hl(vi, e), Nt = () => Date.now(), xi = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: e.provider === "youtube" ? "YouTube" : e.provider,
  lyricsPreview: "",
  durationMs: e.duration_ms ?? 0,
  bitrate: 0,
  sampleRate: 0,
  sizeBytes: 0,
  createdAt: e.added_at ?? Nt(),
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
}), Bl = (e) => ({
  id: e.id,
  provider: e.source || "youtube",
  external_id: e.externalId || e.id.replace(/^.+?:/, ""),
  title: e.title || "Untitled",
  artist: e.artist || "",
  album: e.album || "",
  duration_ms: e.durationMs || 0,
  thumbnail_url: e.thumbnailUrl || "",
  external_url: e.externalUrl || "",
  added_at: e.createdAt || Nt(),
  last_played_at: 0
}), wi = [
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
], Wl = wi.join(", "), ql = wi.map((e) => `t.${e}`).join(", "), Jl = async () => {
  const e = X();
  return e ? (await e.query(
    `SELECT ${Wl} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(xi) : [];
}, ki = async (e) => {
  const a = X();
  if (!a) throw new Error("Database not ready");
  const r = Bl(e);
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
}, Gl = async (e) => {
  const a = X();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, Vl = async () => {
  const e = X();
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
}, Yl = async (e) => {
  const a = X();
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
}, Kl = async (e) => {
  const a = X();
  if (!a) throw new Error("Database not ready");
  const r = await a.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(r[0]?.n ?? 0) > 0 ? (await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await a.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", Nt()]
  ), !0);
}, na = async () => {
  const e = X();
  if (!e) return [];
  const a = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), r = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${ql}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return r.forEach((n) => {
    o.set(n.playlist_id, [...o.get(n.playlist_id) ?? [], xi(n)]);
  }), a.map((n) => ({
    id: n.id,
    name: n.name,
    createdAt: n.created_at,
    updatedAt: n.updated_at,
    items: o.get(n.id) ?? []
  }));
}, Xl = async (e) => {
  const a = X();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", o = Nt(), n = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: o, updatedAt: o, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [n.id, n.name, n.createdAt, n.updatedAt]
  ), n;
}, Ql = async (e) => {
  const a = X();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, Zl = async (e, a) => {
  const r = X();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await ki(a);
    const o = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), n = Number(o[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, n, Nt()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [Nt(), e]);
  });
}, ec = async (e, a) => {
  const r = X();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [Nt(), e]));
}, tc = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), Fo = async () => {
  const e = X();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(tc) : [];
}, Si = async (e) => {
  const a = X();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, xr = "tytus.voice-recorder.recordings", ac = async () => {
  try {
    const e = localStorage.getItem(xr);
    if (!e) return;
    const a = JSON.parse(e);
    if (!Array.isArray(a)) {
      localStorage.removeItem(xr);
      return;
    }
    for (const r of a)
      if (!(!r?.id || typeof r.audioDataUrl != "string"))
        try {
          await Si({
            id: r.id,
            name: r.name ?? "Untitled recording",
            durationMs: r.durationMs ?? 0,
            createdAt: r.createdAt ?? Date.now(),
            mimeType: r.mimeType ?? "audio/webm",
            audioDataUrl: r.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(xr);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, rc = (e, a) => e._value, Or = 100, oc = 30, Oa = 6, ic = 360, Bo = 12, nc = 3, sc = 0.4, lc = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((d) => MediaRecorder.isTypeSupported(d));
  if (!o)
    throw new Error("No supported recorder mime type for fallback.");
  const n = URL.createObjectURL(e), c = new Audio();
  c.src = n, c.muted = !0, c.crossOrigin = "anonymous", c.preload = "auto";
  try {
    await new Promise((_, E) => {
      const y = () => _(), C = () => E(new Error("Audio element rejected the source format too — browser cannot play it."));
      c.addEventListener("canplay", y, { once: !0 }), c.addEventListener("error", C, { once: !0 }), c.load();
    });
    const d = a.createMediaElementSource(c), v = a.createMediaStreamDestination();
    d.connect(v);
    const p = new MediaRecorder(v.stream, { mimeType: o }), h = [];
    p.ondataavailable = (_) => {
      _.data.size > 0 && h.push(_.data);
    };
    const w = Math.max(
      6e3,
      Math.min(r, c.duration || r) * 1e3
    ), u = new Promise((_) => {
      p.onstop = () => _();
    });
    p.start(250), c.currentTime = 0, await c.play(), await new Promise((_) => setTimeout(_, w)), p.stop(), c.pause(), await u;
    const b = new Blob(h, { type: o });
    if (b.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const f = await b.arrayBuffer();
    return await a.decodeAudioData(f);
  } finally {
    URL.revokeObjectURL(n);
  }
}, Ti = async (e, a = 35) => {
  const r = window.AudioContext || window.webkitAudioContext, o = new r();
  try {
    const n = await e.arrayBuffer();
    try {
      return await o.decodeAudioData(n.slice(0));
    } catch (c) {
      try {
        return await lc(e, o, a);
      } catch (d) {
        const v = c.message || "decodeAudioData failed", p = d.message || "fallback failed";
        throw new Error(
          `Audio format isn't supported by this browser (${v}). Compatibility-mode capture also failed: ${p}`
        );
      }
    }
  } finally {
    o.close().catch(() => {
    });
  }
}, _i = async (e) => (await fetch(e)).blob(), zr = (e) => new Promise((a, r) => {
  const o = new FileReader();
  o.onload = () => {
    const n = typeof o.result == "string" ? o.result : "", c = n.indexOf("base64,");
    a(c >= 0 ? n.slice(c + 7) : "");
  }, o.onerror = () => r(o.error), o.readAsDataURL(e);
}), cc = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Or / 1e3)), o = Math.floor(e.length / r), n = new Float32Array(o), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const v = d * r;
    let p = 0;
    for (let h = 0; h < r; h++) {
      let w = 0;
      for (let u = 0; u < c.length; u++) w += c[u][v + h];
      w /= c.length, p += w * w;
    }
    n[d] = Math.sqrt(p / r);
  }
  return n;
}, dc = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Or / 1e3)), o = Math.floor(e.length / r), n = new Float32Array(o), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const v = d * r;
    let p = 0, h = 0;
    for (let w = 0; w < c.length; w++) h += c[w][v];
    h /= c.length;
    for (let w = 1; w < r; w++) {
      let u = 0;
      for (let b = 0; b < c.length; b++) u += c[b][v + w];
      u /= c.length, (h > 1e-3 && u < -1e-3 || h < -1e-3 && u > 1e-3) && p++, h = u;
    }
    n[d] = p / (r / 2);
  }
  return n;
}, Ni = (e) => {
  const a = cc(e), r = dc(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / Or };
}, uc = (e, a = 4) => {
  let r = 0;
  for (let p = 0; p < e.length; p++) r += e[p];
  const o = r / e.length;
  let n = 0;
  for (let p = 0; p < e.length; p++) n += (e[p] - o) ** 2;
  const c = Math.sqrt(n / e.length) || 1, d = Math.floor(e.length / a), v = new Float32Array(d);
  for (let p = 0; p < d; p++) {
    let h = 0;
    for (let w = 0; w < a; w++) h += e[p * a + w];
    v[p] = (h / a - o) / c;
  }
  return v;
}, pc = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const o = Math.max(1, Math.floor(r / 4));
  let n = -1 / 0, c = 0;
  for (let p = 0; p + r < e.length; p += o) {
    if (Math.abs(p - a) < r) continue;
    let h = 0;
    for (let w = 0; w < r; w++)
      h += e[a + w] * e[p + w];
    h /= r, h > n && (n = h), h > 0.5 && c++;
  }
  const d = Math.max(0, Math.min(1, (n + 1) / 2)), v = Math.min(1, c / 6);
  return 0.6 * d + 0.4 * v;
}, Ci = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const o = uc(e.rms, 4), n = e.rms.length / o.length, c = Math.max(1, Math.floor(r / n));
  let d = 0, v = 0, p = 0;
  for (let b = 0; b < r; b++)
    d += e.rms[b], v += e.rms[b] * e.rms[b], p += e.centroid[b];
  const h = [], w = Math.max(1, Math.floor(e.framesPerSec)), u = (b) => {
    const f = d / r, _ = Math.max(0, v / r - f * f), E = Math.sqrt(_), y = p / r, C = Math.floor(b / n), N = pc(o, C, c), k = 0.45 * Math.min(1, f * 4) + 0.2 * y + 0.25 * N - 0.1 * Math.min(1, E * 6);
    h.push({
      startFrame: b,
      lenFrames: r,
      score: k,
      meanRms: f,
      stdRms: E,
      meanBright: y,
      selfSim: N
    });
  };
  u(0);
  for (let b = r; b < e.rms.length; b += w) {
    for (let f = 0; f < w && b - w + f < e.rms.length; f++) {
      const _ = b - r - w + f + 1, E = b - w + f + 1;
      if (E >= e.rms.length) break;
      _ >= 0 && (d -= e.rms[_], v -= e.rms[_] * e.rms[_], p -= e.centroid[_]), d += e.rms[E], v += e.rms[E] * e.rms[E], p += e.centroid[E];
    }
    u(b - r + w);
  }
  return h;
}, Ir = (e, a, r) => {
  const o = new Float32Array(r), n = [];
  for (let c = 0; c < e.numberOfChannels; c++) n.push(e.getChannelData(c));
  for (let c = 0; c < r; c++) {
    let d = 0;
    for (let v = 0; v < n.length; v++) d += n[v][a + c] || 0;
    o[c] = d / n.length;
  }
  return o;
}, Mr = (e, a) => {
  const n = a * 1 * 2, c = 1 * (16 / 8), d = e.length * 2, v = new ArrayBuffer(44 + d), p = new DataView(v);
  let h = 0;
  const w = (f) => {
    for (let _ = 0; _ < f.length; _++) p.setUint8(h++, f.charCodeAt(_));
  }, u = (f) => {
    p.setUint32(h, f, !0), h += 4;
  }, b = (f) => {
    p.setUint16(h, f, !0), h += 2;
  };
  w("RIFF"), u(36 + d), w("WAVE"), w("fmt "), u(16), b(1), b(1), u(a), u(n), b(c), b(16), w("data"), u(d);
  for (let f = 0; f < e.length; f++) {
    const _ = Math.max(-1, Math.min(1, e[f]));
    p.setInt16(h, _ < 0 ? _ * 32768 : _ * 32767, !0), h += 2;
  }
  return new Blob([v], { type: "audio/wav" });
}, Ei = async (e, a = oc) => {
  const r = typeof e == "string" ? await _i(e) : e, o = await Ti(r), n = o.length / o.sampleRate;
  if (n < Oa)
    throw new Error(`Source is too short (${n.toFixed(1)} s). Need at least ${Oa} s.`);
  const c = Math.min(ic, Math.max(Oa, a));
  if (n <= c) {
    const _ = Ir(o, 0, o.length), E = Mr(_, o.sampleRate);
    return { base64: await zr(E), durationSec: n, startSec: 0, sourceDurationSec: n, score: 1 };
  }
  const d = Ni(o), v = Ci(d, c);
  if (v.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  v.sort((_, E) => E.score - _.score);
  const p = v[0], h = Math.floor(p.startFrame / d.framesPerSec * o.sampleRate), w = Math.floor(p.lenFrames / d.framesPerSec * o.sampleRate), u = Ir(o, h, w), b = Mr(u, o.sampleRate);
  return {
    base64: await zr(b),
    durationSec: w / o.sampleRate,
    startSec: h / o.sampleRate,
    sourceDurationSec: n,
    score: Math.max(0, Math.min(1, p.score))
  };
}, mc = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(r * a);
  let n = 0;
  for (const v of e) n += v.length;
  n -= o * (e.length - 1);
  const c = new Float32Array(n);
  let d = 0;
  c.set(e[0], 0), d = e[0].length - o;
  for (let v = 1; v < e.length; v++) {
    const p = e[v];
    for (let h = 0; h < o; h++) {
      const w = h / o;
      c[d + h] = c[d + h] * (1 - w) + p[h] * w;
    }
    for (let h = o; h < p.length; h++)
      c[d + h] = p[h];
    d += p.length - o;
  }
  return c;
}, hc = (e, a, r) => {
  const o = [...e].sort((c, d) => d.score - c.score), n = [];
  for (const c of o)
    if (n.some(
      (v) => Math.abs(v.startFrame - c.startFrame) < Math.max(v.lenFrames, c.lenFrames) + r
    ) || n.push(c), n.length >= a) break;
  return n.sort((c, d) => c.startFrame - d.startFrame), n;
}, gc = async (e) => {
  const a = typeof e == "string" ? await _i(e) : e, r = await Ti(a), o = r.length / r.sampleRate;
  if (o < Oa * 2) {
    const f = await Ei(a);
    return {
      base64: f.base64,
      durationSec: f.durationSec,
      segments: [{ startSec: f.startSec, endSec: f.startSec + f.durationSec, score: f.score }],
      sourceDurationSec: o
    };
  }
  const n = Ni(r), c = Ci(n, Bo);
  if (c.length === 0)
    throw new Error("Could not analyze the audio.");
  const d = Math.max(
    Math.floor(Bo * n.framesPerSec * 0.5),
    Math.floor(n.rms.length / 4)
  ), v = hc(c, nc, d), p = v.map((f) => {
    const _ = Math.floor(f.startFrame / n.framesPerSec * r.sampleRate), E = Math.floor(f.lenFrames / n.framesPerSec * r.sampleRate);
    return Ir(r, _, E);
  }), h = mc(p, r.sampleRate, sc), w = Mr(h, r.sampleRate), u = await zr(w), b = v.map((f) => ({
    startSec: f.startFrame / n.framesPerSec,
    endSec: (f.startFrame + f.lenFrames) / n.framesPerSec,
    score: Math.max(0, Math.min(1, f.score))
  }));
  return {
    base64: u,
    durationSec: h.length / r.sampleRate,
    segments: b,
    sourceDurationSec: o
  };
};
class Ai extends Error {
  status;
  code;
  constructor(a, r, o) {
    super(o), this.name = "MusicDaemonError", this.status = a, this.code = r;
  }
}
const qt = async (e, a) => {
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
    const n = o, c = typeof n?.error == "string" ? n.error : `http_${r.status}`;
    throw new Ai(r.status, c, c === "music_unavailable" ? "Music search is still starting up." : c);
  }
  return o;
}, Li = async (e, a, r) => {
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
    const c = n, d = typeof c?.error == "string" ? c.error : `http_${o.status}`;
    throw new Ai(o.status, d, d);
  }
  return n;
}, yc = (e) => qt("/api/music/status", e), Wo = async (e) => (await qt("/api/music/providers", e)).providers ?? [], qo = async (e) => (await qt("/api/music/connectors", e)).connectors ?? [], bc = (e, a, r) => Li("/api/music/connectors/configure", { provider: e, credentials: a }, r), fc = (e, a) => Li("/api/music/connectors/disconnect", { provider: e }, a), vc = async (e, a = 20, r) => {
  const o = new URLSearchParams({ q: e, limit: String(a) });
  return (await qt(`/api/music/search?${o.toString()}`, r)).results ?? [];
}, xc = (e, a = "tracks,albums,artists,playlists", r = 20, o) => {
  const n = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return qt(`/api/music/search2?${n.toString()}`, o);
}, wr = (e, a) => {
  const r = new URLSearchParams({ videoId: e });
  return qt(`/api/music/stream?${r.toString()}`, a);
}, Ga = async (e, a) => {
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
    const c = typeof n == "object" && n && "error" in n ? String(n.error) : o || r.statusText;
    throw new Error(c);
  }
  return n;
}, kr = async () => Ga("/api/juli3ta/library/tracks"), Jo = async (e) => (await Ga(
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
)).track, wc = async (e) => {
  await Ga("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, kc = async () => (await Ga("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, ua = "application/x-juli3ta-track", ja = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", zi = (e) => e.source !== "youtube", sa = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const o of r)
      a.has(o.id) || a.set(o.id, o);
  return Array.from(a.values()).sort((r, o) => o.createdAt - r.createdAt);
}, Sc = (e) => zi(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), Tc = "http://localhost:18080/v1", _c = "sk-test-123", kt = [
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
], Nc = kt.flatMap((e) => e.chips), Cc = ["very_slow", "slow", "medium", "fast", "very_fast"], Ec = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], Ac = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], Lc = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], zc = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], Ic = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], Mc = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], Rc = ["narrow", "medium", "wide"], jc = ["none", "gradual", "sudden"], Pc = ["low", "medium", "high"], Dc = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], Uc = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], Oc = ["male", "female", "mixed", "other", "none"], Hc = [
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
], $c = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], Fc = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], Bc = [
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
], Wc = [
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
], qc = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], Y = (e) => e.replace(/_/g, " "), Jc = (e, a, r) => {
  const o = (c) => c.trim().replace(/^[-••\d.)(]+\s*/, "").trim(), n = (c, d) => o(c).split(/\s+/).slice(0, d).join(" ");
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
}, Hr = (e) => {
  const a = [], r = [];
  if (e.structure?.tempo_bpm ? r.push(`${e.structure.tempo_bpm} BPM`) : e.structure?.tempo_class && r.push(`${Y(e.structure.tempo_class)} tempo`), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push(`${e.structure.time_signature} time`), e.structure?.rhythm_feel && r.push(`${e.structure.rhythm_feel} feel`), e.structure?.groove_pattern && r.push(`${Y(e.structure.groove_pattern)} groove`), e.structure?.song_form && r.push(`${Y(e.structure.song_form)} form`), e.structure?.length_seconds && r.push(`~${e.structure.length_seconds}s`), r.length && a.push(r.join(", ")), e.tonal?.key) {
    const c = e.tonal.mode ? `${e.tonal.key} ${e.tonal.mode}` : e.tonal.key;
    a.push(`Key: ${c}`);
  }
  if (e.instrumentation?.primary_instruments?.length && a.push(`Instruments: ${e.instrumentation.primary_instruments.map(Y).join(", ")}`), e.instrumentation?.has_vocals === !1)
    a.push("Instrumental, no vocals");
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const c = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && c.push(e.instrumentation.vocal_gender), e.instrumentation.vocal_style?.length ? c.push(e.instrumentation.vocal_style.map(Y).join("/")) : c.length === 0 && c.push("vocals");
    let d = c.join(" ");
    e.instrumentation.vocal_processing?.length && (d += ` with ${e.instrumentation.vocal_processing.map(Y).join(" + ")}`), a.push(d);
  }
  e.instrumentation?.language_iso639_1 && a.push(`Language: ${e.instrumentation.language_iso639_1}`);
  const o = [];
  e.dynamics?.overall_dynamic_range && o.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && o.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && o.push("big drops"), o.length && a.push(o.join(", ")), e.mood?.primary_moods?.length && a.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && a.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && a.push(`For: ${e.mood.occasion_tags.map(Y).join(", ")}`);
  const n = [];
  return e.context?.era_reference && n.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && n.push(`${Y(e.context.cultural_region)} scene`), e.context?.intended_use?.length && n.push(`use: ${e.context.intended_use.map(Y).join("/")}`), e.context?.explicit_lyrics && n.push("explicit lyrics"), n.length && a.push(n.join(", ")), a.join(". ");
}, Gc = [
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
], Go = "tytus.music-creator.gallery", Vo = "tytus.music-creator", Sr = "gallery", Dt = 3500, Vc = 2e3, De = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), o = a % 60;
  return `${r}:${o.toString().padStart(2, "0")}`;
}, Ii = (e) => e.source === "youtube" && !!e.externalId, ve = (e) => !!e.audioDataUrl || Ii(e), Va = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? Wa(e.externalId) : ""), Wa = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", Mi = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, la = (e) => `youtube:${e}`, Yc = async () => {
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
    const a = localStorage.getItem(Go);
    if (a) {
      const r = JSON.parse(a);
      if (Array.isArray(r))
        for (const o of r)
          try {
            await Ba(e(o));
          } catch {
          }
      localStorage.removeItem(Go);
    }
  } catch (a) {
    console.warn("Legacy localStorage gallery migration failed:", a);
  }
  try {
    const a = await new Promise((r) => {
      const o = indexedDB.open(Vo);
      o.onsuccess = () => {
        const n = o.result;
        if (!n.objectStoreNames.contains(Sr)) {
          n.close(), r([]);
          return;
        }
        const d = n.transaction(Sr, "readonly").objectStore(Sr).getAll();
        d.onsuccess = () => {
          n.close(), r(d.result ?? []);
        }, d.onerror = () => {
          n.close(), r([]);
        };
      }, o.onerror = () => r([]);
    });
    for (const r of a)
      try {
        await Ba(e(r));
      } catch {
      }
    a.length > 0 && indexedDB.deleteDatabase(Vo);
  } catch (a) {
    console.warn("Legacy IDB gallery migration failed:", a);
  }
}, Ht = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, Kc = (e, a) => {
  const r = [];
  for (const o of a)
    o.endpoint && o.user_key && r.push({
      url: `${o.endpoint.replace(/\/$/, "")}/v1`,
      apiKey: rc(o.user_key),
      podId: o.pod_id,
      source: "included",
      label: `AIL gateway ${o.pod_id}`,
      models: Ht
    });
  return r.push({
    url: Tc,
    apiKey: _c,
    podId: "local",
    source: "local",
    label: "Local AIL",
    models: Ht
  }), r;
}, Xc = (e) => {
  const a = (u, b) => {
    const f = u.map((_) => _.toLowerCase());
    for (const _ of b) {
      const E = f.findIndex((y) => _.test(y));
      if (E >= 0) return u[E];
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
  ]), n = new Set([r, o].filter((u) => !!u)), c = e.filter((u) => !n.has(u)), d = a(c, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), v = (u) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(u), p = e.filter((u) => !v(u)), h = a(p, [
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
}, Qc = 6e4, Tr = /* @__PURE__ */ new Map(), Zc = async (e, a) => {
  const r = Tr.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: Ht };
    Tr.delete(e.url);
  }
  const o = Bt(a, td);
  try {
    const n = await fetch(`${e.url}/models`, {
      method: "GET",
      signal: o.signal,
      headers: { Authorization: `Bearer ${e.apiKey}` }
    });
    if (n.status >= 500) return { ok: !1, models: Ht };
    if (!n.ok) return { ok: !0, models: Ht };
    const d = ((await n.json()).data ?? []).map((v) => v?.id).filter((v) => typeof v == "string" && v.length > 0);
    return { ok: !0, models: Xc(d) };
  } catch (n) {
    return (n?.name ?? "") === "TypeError" && Tr.set(e.url, Date.now() + Qc), { ok: !1, models: Ht };
  } finally {
    o.dispose();
  }
}, ed = async (e, a) => (await Promise.all(
  e.map(async (o) => {
    if (a.aborted) return null;
    const { ok: n, models: c } = await Zc(o, a);
    return n ? { ...o, models: c } : null;
  })
)).filter((o) => o !== null), Pa = 6e4, Yo = 3e5, td = 8e3, Bt = (e, a) => {
  const r = AbortSignal.any, o = AbortSignal.timeout;
  if (r && o) {
    const d = o(a);
    return { signal: e ? r([e, d]) : d, dispose: () => {
    } };
  }
  const n = new AbortController(), c = setTimeout(() => {
    n.signal.aborted || n.abort(new DOMException("Timeout", "TimeoutError"));
  }, a);
  return e && (e.aborted ? n.abort(e.reason) : e.addEventListener("abort", () => n.abort(e.reason), { once: !0 })), { signal: n.signal, dispose: () => clearTimeout(c) };
}, ad = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]);
class ke extends Error {
  status;
  body;
  constructor(a, r, o) {
    super(o ?? `HTTP ${a}: ${r.slice(0, 200)}`), this.name = "GatewayError", this.status = a, this.body = r;
  }
}
function Ri(e) {
  const a = e.indexOf("{");
  if (a === -1) return null;
  let r = 0, o = !1, n = !1;
  for (let c = a; c < e.length; c++) {
    const d = e[c];
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
      return e.slice(a, c + 1);
  }
  return null;
}
const Ya = async (e, a, r) => {
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
      if (d instanceof ke && ad.has(d.status)) {
        o = d;
        continue;
      }
      throw d;
    }
  const n = o?.message ?? "unknown";
  throw new Error(`All ${r} models exhausted. Last error: ${n}. Wait for the rate limit to reset, or pick a different endpoint in Settings.`);
}, rd = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), od = async (e, a, r) => {
  let o = 0, n = "";
  const c = Bt(r, Pa);
  try {
    const b = { prompt: a, mode: "write_full_song" };
    e.models.lyrics && (b.model = e.models.lyrics);
    const f = await fetch(`${e.url}/music/lyrics`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${e.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(b),
      signal: c.signal
    });
    if (f.ok) {
      const _ = await f.json();
      if (!_ || typeof _.lyrics != "string" || _.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ..._, usedFallback: !1 };
    }
    o = f.status, n = await f.text().catch(() => "");
  } catch (b) {
    const f = b.name;
    if (f === "AbortError" && r?.aborted) throw b;
    if (f === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${Pa / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", b);
  } finally {
    c.dispose();
  }
  if (o !== 0 && !rd.has(o)) {
    const b = n.length > 300 ? `${n.slice(0, 300)}…` : n;
    throw new Error(`Lyrics HTTP ${o}: ${b || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, n);
  const d = (b) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(b), v = /* @__PURE__ */ new Set(), p = [], h = (b) => {
    b && !v.has(b) && (v.add(b), p.push(b));
  };
  if (h(e.models.lyricsBackup), e.models.allIds.filter(d).forEach(h), p.length === 0)
    throw new Error(
      `Lyrics endpoint failed and no chat backup model is available for ${e.label}. Pick one in JULI3TA Settings.`
    );
  const w = `You are a songwriter. Given a theme, write a complete singable song.
Respond with VALID JSON ONLY in exactly this shape, nothing else:
{
  "song_title": "Short catchy title",
  "style_tags": "comma, separated, style, hints",
  "lyrics": "[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Bridge]\\nTwo lines\\n\\n[Outro]\\nTwo lines"
}`, u = await Ya(p, async (b) => {
    const f = {
      model: b,
      messages: [
        { role: "system", content: w },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, _ = async (E) => {
      const y = Bt(r, Pa);
      let C;
      try {
        C = await fetch(`${e.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${e.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            E ? { ...f, response_format: { type: "json_object" } } : f
          ),
          signal: y.signal
        });
      } catch (O) {
        throw O.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${Pa / 1e3}s.`) : O;
      } finally {
        y.dispose();
      }
      if (!C.ok) {
        const O = await C.text().catch(() => "");
        throw new ke(C.status, O, `Lyrics fallback HTTP ${C.status}: ${O.slice(0, 300)}`);
      }
      const k = (await C.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!k)
        throw new ke(502, "", "Lyrics fallback returned empty content");
      const I = k.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), D = Ri(I) ?? I;
      let M;
      try {
        M = JSON.parse(D);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", k.slice(0, 400)), new ke(502, k.slice(0, 200), `Lyrics fallback returned non-JSON content: ${k.slice(0, 200)}`);
      }
      if (!M.lyrics)
        throw new ke(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return M;
    };
    try {
      return await _(!0);
    } catch (E) {
      if (E instanceof ke && E.status === 400 && /response_format|json_object/i.test(E.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", b), await _(!1);
      throw E;
    }
  }, "chat-lyrics");
  return {
    song_title: u.song_title || "Untitled",
    style_tags: u.style_tags || "",
    lyrics: u.lyrics,
    usedFallback: !0
  };
}, id = async (e, a, r) => {
  const o = !!a.refAudioBase64, n = (h) => /music/i.test(h) && !/cover/i.test(h), c = (h) => /cover/i.test(h), d = /* @__PURE__ */ new Set(), v = (h, w) => {
    w && !d.has(w) && (d.add(w), h.push(w));
  }, p = [];
  if (o ? (v(p, e.models.cover), e.models.allIds.filter(c).forEach((h) => v(p, h)), v(p, e.models.music)) : (v(p, e.models.music), e.models.allIds.filter(n).forEach((h) => v(p, h))), p.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return Ya(p, async (h) => {
    const w = {
      model: h,
      lyrics: a.lyrics
    };
    a.prompt && (w.prompt = a.prompt), a.instrumental && (w.instrumental = !0), o && (w.audio_base64 = a.refAudioBase64);
    const u = Bt(r, Yo);
    let b;
    try {
      b = await fetch(`${e.url}/music/generations`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${e.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(w),
        signal: u.signal
      });
    } catch (_) {
      throw _.name === "TimeoutError" ? new Error(`Music generation timed out after ${Yo / 1e3}s. Try a shorter lyric or a different endpoint.`) : _;
    } finally {
      u.dispose();
    }
    if (!b.ok) {
      const _ = await b.text().catch(() => "");
      throw new ke(b.status, _, `Music HTTP ${b.status}: ${_.slice(0, 300)}`);
    }
    const f = await b.json();
    if (!f?.data?.audio || typeof f.data.audio != "string" || f.data.audio.length < 100)
      throw new ke(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return f;
  }, o ? "music-cover" : "music");
}, Ko = 6e4, Ha = (e, a, r) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", n = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), c = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${o}".`
  ];
  return n && d.push(`Genre: ${n}.`), c && d.push(`Mood: ${c}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, Rr = async (e, a, r) => {
  const o = (v) => /image|diffusion|dall-?e|flux|sdxl/i.test(v), n = /* @__PURE__ */ new Set(), c = [], d = (v) => {
    v && !n.has(v) && (n.add(v), c.push(v));
  };
  if (d(e.models.image), e.models.allIds.filter(o).forEach(d), c.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return Ya(c, async (v) => {
    const p = Bt(r, Ko), w = /minimax|ail-image|image-01/i.test(v) ? {
      model: v,
      prompt: a,
      aspect_ratio: "1:1",
      response_format: "base64"
    } : {
      model: v,
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
        signal: p.signal
      });
    } catch (k) {
      throw k.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${Ko / 1e3}s.`) : k;
    } finally {
      p.dispose();
    }
    if (!u.ok) {
      const k = await u.text().catch(() => "");
      throw new ke(u.status, k, `Cover-art HTTP ${u.status}: ${k.slice(0, 200)}`);
    }
    const b = await u.json(), f = b.base_resp;
    if (f && typeof f.status_code == "number" && f.status_code !== 0)
      throw new ke(502, f.status_msg ?? "", `Cover-art ${v} rejected: ${f.status_msg ?? "status_code=" + f.status_code}`);
    const _ = (k) => typeof k != "string" || !k.length ? null : k.startsWith("data:") ? k : `data:image/png;base64,${k}`, E = (k) => typeof k == "string" && /^https?:\/\//i.test(k) ? k : null, y = b.data;
    if (y && typeof y == "object" && !Array.isArray(y)) {
      const k = y, I = k.image_base64;
      if (Array.isArray(I) && I[0]) {
        const O = _(I[0]);
        if (O) return O;
      }
      const D = _(k.image) ?? _(k.b64_json) ?? E(k.url);
      if (D) return D;
      const M = k.image_url ?? k.image_urls;
      if (Array.isArray(M) && M[0]) {
        const O = E(M[0]);
        if (O) return O;
      }
    }
    if (Array.isArray(y) && y[0]) {
      const k = y[0], I = _(k.b64_json) ?? _(k.image_base64) ?? E(k.url);
      if (I) return I;
      throw new ke(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const C = _(b.image) ?? _(b.b64_json);
    if (C) return C;
    const N = b.images;
    if (Array.isArray(N) && N[0]) {
      const k = N[0], I = _(k.b64_json) ?? _(k.image) ?? E(k.url);
      if (I) return I;
    }
    throw new ke(502, "", `Cover-art response shape not recognised: ${JSON.stringify(b).slice(0, 200)}`);
  }, "image");
}, Xo = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], Qo = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
];
function nd(e, a, r) {
  const [o, n] = S(() => {
    let y = "off";
    try {
      const C = localStorage.getItem("juli3ta:repeatMode");
      (C === "off" || C === "all" || C === "one") && (y = C);
    } catch {
    }
    return { trackId: null, playing: !1, loadingTrackId: null, positionMs: 0, durationMs: 0, volume: 1, repeatMode: y };
  }), c = te(null), d = L((y) => {
    n((C) => ({ ...C, repeatMode: y }));
    try {
      localStorage.setItem("juli3ta:repeatMode", y);
    } catch {
    }
  }, []), v = L((y) => {
    (async () => {
      n((k) => ({
        ...k,
        trackId: y.id,
        playing: !1,
        loadingTrackId: ve(y) ? y.id : null,
        positionMs: 0,
        durationMs: y.durationMs || 0
      }));
      const C = y.audioDataUrl || await r?.(y);
      if (!C) {
        n((k) => ({ ...k, loadingTrackId: null }));
        return;
      }
      const N = a.current;
      if (!N) {
        n((k) => ({ ...k, loadingTrackId: null }));
        return;
      }
      o.trackId !== y.id || N.src !== C ? (N.src = C, N.preload = "auto", N.load(), N.pause(), n((k) => ({
        ...k,
        trackId: y.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: y.durationMs || 0
      }))) : n((k) => ({ ...k, loadingTrackId: null }));
    })();
  }, [o.trackId, a, r]), p = L((y) => {
    (async () => {
      c.current = null, n((k) => ({
        ...k,
        trackId: y.id,
        loadingTrackId: y.id,
        durationMs: y.durationMs || k.durationMs
      }));
      const C = y.audioDataUrl || await r?.(y);
      if (!C) {
        n((k) => ({ ...k, loadingTrackId: null, playing: !1 }));
        return;
      }
      const N = a.current;
      if (!N) {
        n((k) => ({ ...k, loadingTrackId: null, playing: !1 }));
        return;
      }
      (o.trackId !== y.id || N.src !== C) && (N.src = C, N.preload = "auto", n((k) => ({ ...k, trackId: y.id, positionMs: 0, durationMs: y.durationMs || 0 }))), N.play().then(() => n((k) => ({ ...k, loadingTrackId: null, playing: !0 }))).catch(() => n((k) => ({ ...k, loadingTrackId: null, playing: !1 })));
    })();
  }, [o.trackId, a, r]), h = L(() => {
    a.current?.pause(), n((y) => ({ ...y, playing: !1, loadingTrackId: null }));
  }, [a]), w = L((y) => {
    if (o.loadingTrackId) return;
    if (y) {
      o.trackId === y.id && o.playing ? h() : p(y);
      return;
    }
    if (o.playing) {
      h();
      return;
    }
    const C = o.trackId ? e.find((N) => N.id === o.trackId) : null;
    C ? p(C) : a.current?.src && a.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, p, h, a]), u = L((y) => {
    const C = a.current;
    C && (C.currentTime = Math.max(0, y / 1e3));
  }, [a]), b = L((y) => {
    const C = Math.max(0, Math.min(1, y));
    a.current && (a.current.volume = C), n((N) => ({ ...N, volume: C }));
  }, [a]), f = ue(() => e.filter(ve), [e]), _ = L(() => {
    if (!o.trackId || f.length === 0) return;
    const y = f.findIndex((N) => N.id === o.trackId);
    if (y < 0) return;
    const C = f[(y + 1) % f.length];
    C && p(C);
  }, [o.trackId, f, p]), E = L(() => {
    if (!o.trackId || f.length === 0) return;
    const y = f.findIndex((N) => N.id === o.trackId);
    if (y < 0) return;
    const C = f[(y - 1 + f.length) % f.length];
    C && p(C);
  }, [o.trackId, f, p]);
  return ae(() => {
    const y = a.current;
    if (!y) return;
    const C = () => n((R) => ({ ...R, positionMs: y.currentTime * 1e3 })), N = () => n((R) => ({
      ...R,
      durationMs: Number.isFinite(y.duration) ? y.duration * 1e3 : R.durationMs
    })), k = () => n((R) => ({ ...R, playing: !0, loadingTrackId: null })), I = () => n((R) => ({ ...R, playing: !1, loadingTrackId: null })), D = () => n((R) => ({ ...R, loadingTrackId: null })), M = () => {
      const R = o.trackId ? f.find((F) => F.id === o.trackId) : null;
      if (!R || R.audioDataUrl || !r || c.current === R.id) {
        n((F) => ({ ...F, playing: !1, loadingTrackId: null }));
        return;
      }
      c.current = R.id, n((F) => ({ ...F, loadingTrackId: R.id, playing: !1 })), r(R, { force: !0 }).then((F) => {
        if (!F) throw new Error("No refreshed stream URL");
        return y.src = F, y.preload = "auto", y.play();
      }).then(() => n((F) => ({ ...F, playing: !0, loadingTrackId: null }))).catch(() => n((F) => ({ ...F, playing: !1, loadingTrackId: null })));
    }, O = () => {
      if (o.repeatMode === "one" && o.trackId) {
        const R = f.find((F) => F.id === o.trackId);
        if (R) {
          p(R);
          return;
        }
      }
      if (f.length >= 2) {
        const R = f.findIndex((F) => F.id === o.trackId);
        if (R >= 0 && R + 1 < f.length) {
          p(f[R + 1]);
          return;
        }
        if (R >= 0 && o.repeatMode === "all") {
          p(f[0]);
          return;
        }
      }
      n((R) => ({ ...R, playing: !1, positionMs: 0 }));
    };
    return y.addEventListener("timeupdate", C), y.addEventListener("loadedmetadata", N), y.addEventListener("play", k), y.addEventListener("pause", I), y.addEventListener("canplay", D), y.addEventListener("error", M), y.addEventListener("ended", O), () => {
      y.removeEventListener("timeupdate", C), y.removeEventListener("loadedmetadata", N), y.removeEventListener("play", k), y.removeEventListener("pause", I), y.removeEventListener("canplay", D), y.removeEventListener("error", M), y.removeEventListener("ended", O);
    };
  }, [f, o.trackId, o.repeatMode, p, a, r]), { state: o, queue: e, play: p, pause: h, toggle: w, select: v, seek: u, setVolume: b, setRepeatMode: d, next: _, prev: E };
}
function Zo({
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
function _r({
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
        o ? /* @__PURE__ */ t(K, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 10 }),
        o ? "…" : e
      ]
    }
  );
}
function mt({
  track: e,
  size: a,
  iconSize: r,
  radius: o
}) {
  const n = Va(e);
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
function sd({ player: e, allTracks: a }) {
  const { state: r, toggle: o, next: n, prev: c, seek: d, setVolume: v, queue: p } = e, h = p.find((E) => E.id === r.trackId) ?? a.find((E) => E.id === r.trackId) ?? null;
  if (!h) return null;
  const w = r.durationMs > 0 ? r.durationMs : h.durationMs, u = Math.min(r.positionMs, w || 0), b = w > 0 ? u / w * 100 : 0, f = r.loadingTrackId === h.id, _ = (E) => {
    if (!w) return;
    const y = E.currentTarget.getBoundingClientRect(), C = (E.clientX - y.left) / y.width;
    d(Math.max(0, Math.min(1, C)) * w);
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
        /* @__PURE__ */ t(mt, { track: h, size: 40, iconSize: 18, radius: 6 }),
        /* @__PURE__ */ s("div", { className: "flex flex-col min-w-0", style: { width: 180 }, children: [
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: h.title }),
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: h.styleTags && h.styleTags !== "—" ? h.styleTags : "—" })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              onClick: c,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(pe, { size: 12, style: { transform: "rotate(180deg)" } })
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
              children: f ? /* @__PURE__ */ t(K, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(ht, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(pe, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: n,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(pe, { size: 12 })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                const E = r.repeatMode, y = E === "off" ? "all" : E === "all" ? "one" : "off";
                e.setRepeatMode(y);
              },
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                width: 28,
                height: 28,
                color: r.repeatMode === "off" ? "var(--text-secondary)" : "var(--accent-primary)"
              },
              title: r.repeatMode === "off" ? "Repeat off" : r.repeatMode === "all" ? "Repeating queue" : "Repeating this track",
              children: r.repeatMode === "one" ? /* @__PURE__ */ t(Js, { size: 12 }) : /* @__PURE__ */ t(Vs, { size: 12 })
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
            onClick: _,
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
            children: De(w)
          }
        ),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(Ar, { size: 12, style: { color: "var(--text-disabled)", flexShrink: 0 } }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
              value: r.volume,
              onChange: (E) => v(Number(E.target.value)),
              style: { width: "100%", accentColor: "var(--accent-primary)" }
            }
          )
        ] })
      ]
    }
  );
}
function ld({ retrying: e, onRetry: a }) {
  const { t: r } = Ct();
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
            e ? /* @__PURE__ */ t(K, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 14 }),
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
function ca({ label: e, hint: a, counter: r, counterDanger: o, className: n, headerExtra: c, children: d }) {
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
function cd({ onPick: e, disabled: a }) {
  const [r, o] = S(!1), [n, c] = S(kt[0].label), [d, v] = S(""), p = d.trim().toLowerCase(), h = p.length > 0, w = ue(() => {
    if (!h) return [];
    const u = [];
    for (const b of kt)
      for (const f of b.chips)
        f.toLowerCase().includes(p) && u.push({ family: b.label, chip: f });
    return u;
  }, [h, p]);
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: h ? `${w.length} match${w.length === 1 ? "" : "es"}` : `${Nc.length} chips · click to add` })
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
                  /* @__PURE__ */ t(at, { size: 11, style: { color: "var(--text-disabled)" } }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: d,
                      onChange: (u) => v(u.target.value),
                      placeholder: "Search genres…",
                      className: "rounded-input bg-transparent outline-none",
                      style: { fontSize: 11, color: "var(--text-primary)", width: 140 }
                    }
                  ),
                  d && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => v(""),
                      className: "opacity-60 hover:opacity-100",
                      title: "Clear search",
                      children: /* @__PURE__ */ t(me, { size: 11 })
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
        h ? w.length === 0 ? /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: w.map(({ family: u, chip: b }) => /* @__PURE__ */ t(
          Nr,
          {
            chip: b,
            family: u,
            onPick: e,
            disabled: a
          },
          `${u}::${b}`
        )) }) : /* @__PURE__ */ s(he, { children: [
          !r && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: kt.map((u) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => c(u.label),
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
              children: kt.map((u) => /* @__PURE__ */ s("div", { children: [
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
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: u.chips.map((b) => /* @__PURE__ */ t(Nr, { chip: b, onPick: e, disabled: a }, b)) })
              ] }, u.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (kt.find((u) => u.label === n) ?? kt[0]).chips.map((u) => /* @__PURE__ */ t(Nr, { chip: u, onPick: e, disabled: a }, u)) })
        ] })
      ]
    }
  );
}
function Nr({
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
        /* @__PURE__ */ t(Lr, { size: 10 }),
        e,
        a && /* @__PURE__ */ s("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function dd({ specs: e, onChange: a, disabled: r, onOptimize: o, optimizing: n }) {
  const [c, d] = S(!1), v = ue(() => Hr(e), [e]), p = v.length > 0, h = L(
    (u, b) => {
      const f = { ...e };
      b === null ? delete f[u] : f[u] = b, a(f);
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
              onClick: () => d((u) => !u),
              className: "flex items-center gap-2 flex-1 hover:opacity-90 text-left",
              style: { background: "transparent", border: "none", cursor: "pointer" },
              children: [
                /* @__PURE__ */ t(Er, { size: 14, style: { color: "var(--text-secondary)" } }),
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
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: p ? "compiled into Style on generate" : "optional structured controls" })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
            o && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: (u) => {
                  u.stopPropagation(), o(), c || d(!0);
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
                  n ? /* @__PURE__ */ t(K, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 11 }),
                  n ? "Optimizing…" : "AI Optimize"
                ]
              }
            ),
            p && !c && /* @__PURE__ */ s(
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
                  $t(e),
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
                  si,
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
              p && /* @__PURE__ */ s(
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
                    v
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                /* @__PURE__ */ s(da, { label: "Structure", children: [
                  /* @__PURE__ */ t(re, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    ei,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (u) => h("structure", { ...e.structure, tempo_bpm: u }),
                      min: 40,
                      max: 260,
                      placeholder: "120",
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Tempo class", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.structure?.tempo_class,
                      options: Cc,
                      onChange: (u) => h("structure", { ...e.structure, tempo_class: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Time signature", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.structure?.time_signature,
                      options: Ec,
                      onChange: (u) => h("structure", { ...e.structure, time_signature: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.structure?.rhythm_feel,
                      options: Ac,
                      onChange: (u) => h("structure", { ...e.structure, rhythm_feel: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Groove", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.structure?.groove_pattern,
                      options: Lc,
                      onChange: (u) => h("structure", { ...e.structure, groove_pattern: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Form", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.structure?.song_form,
                      options: zc,
                      onChange: (u) => h("structure", { ...e.structure, song_form: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Length (s)", children: /* @__PURE__ */ t(
                    ei,
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
                /* @__PURE__ */ s(da, { label: "Key", children: [
                  /* @__PURE__ */ t(re, { label: "Pitch", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.tonal?.key,
                      options: Ic,
                      onChange: (u) => h("tonal", { ...e.tonal, key: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Mode", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.tonal?.mode,
                      options: Mc,
                      onChange: (u) => h("tonal", { ...e.tonal, mode: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(da, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(re, { label: "Range", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: Rc,
                      onChange: (u) => h("dynamics", { ...e.dynamics, overall_dynamic_range: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: jc,
                      onChange: (u) => h("dynamics", { ...e.dynamics, crescendo_shape: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Big drops", children: /* @__PURE__ */ t(
                    ti,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (u) => h("dynamics", { ...e.dynamics, has_big_drops: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(da, { label: "Context", children: [
                  /* @__PURE__ */ t(re, { label: "Era", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.context?.era_reference,
                      options: Dc,
                      onChange: (u) => h("context", { ...e.context, era_reference: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Region", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.context?.cultural_region,
                      options: Uc,
                      onChange: (u) => h("context", { ...e.context, cultural_region: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Intensity", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.mood?.emotional_intensity,
                      options: Pc,
                      onChange: (u) => h("mood", { ...e.mood, emotional_intensity: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    ti,
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
                  Ut,
                  {
                    label: "Primary instruments",
                    options: Hc,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (u) => h("instrumentation", { ...e.instrumentation, primary_instruments: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ s(da, { label: "Vocals", children: [
                    /* @__PURE__ */ t(re, { label: "Has vocals", children: /* @__PURE__ */ t(
                      pd,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (u) => h("instrumentation", { ...e.instrumentation, has_vocals: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(re, { label: "Gender", children: /* @__PURE__ */ t(
                      Ne,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: Oc,
                        onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_gender: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(re, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      ud,
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
                    Ut,
                    {
                      label: "Vocal style",
                      options: $c,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_style: u.length ? u : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    Ut,
                    {
                      label: "Vocal processing",
                      options: Fc,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_processing: u.length ? u : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  Ut,
                  {
                    label: "Primary moods",
                    options: Bc,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (u) => h("mood", { ...e.mood, primary_moods: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Ut,
                  {
                    label: "Occasion tags",
                    options: Wc,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (u) => h("mood", { ...e.mood, occasion_tags: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Ut,
                  {
                    label: "Intended use",
                    options: qc,
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
                  disabled: r || !p,
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
function da({ label: e, children: a }) {
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
function re({ label: e, children: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-secondary)", flexShrink: 0, minWidth: 90 }, children: e }),
    /* @__PURE__ */ t("div", { style: { flex: 1, minWidth: 0 }, children: a })
  ] });
}
function Ne({
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
        a.map((n) => /* @__PURE__ */ t("option", { value: n, children: Y(n) }, n))
      ]
    }
  );
}
function ei({
  value: e,
  onChange: a,
  min: r,
  max: o,
  placeholder: n,
  disabled: c
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
        const v = d.target.value;
        if (v === "") {
          a(void 0);
          return;
        }
        const p = Number(v);
        Number.isFinite(p) && a(p);
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
function ud({
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
function ti({
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
function pd({
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
function Ut({
  label: e,
  options: a,
  selected: r,
  onChange: o,
  disabled: n
}) {
  const c = (d) => {
    r.includes(d) ? o(r.filter((v) => v !== d)) : o([...r, d]);
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
      const v = r.includes(d);
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => c(d),
          disabled: n,
          className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-90 disabled:opacity-40",
          style: {
            fontSize: 10,
            background: v ? "var(--accent-primary)" : "var(--bg-titlebar)",
            color: v ? "white" : "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            cursor: n ? "not-allowed" : "pointer"
          },
          children: [
            v && /* @__PURE__ */ t(pa, { size: 10 }),
            Y(d)
          ]
        },
        d
      );
    }) })
  ] });
}
function $t(e) {
  const { intent: a, ...r } = e;
  let o = 0;
  const n = (c) => {
    if (!(!c || typeof c != "object")) {
      for (const d of Object.values(c))
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
const md = "#4ade80", hd = "#fbbf24", qa = (e) => e.models.music || e.models.cover ? md : hd;
function gd({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [o, n] = S(!1), c = te(null), d = a.length > 1;
  ae(() => {
    if (!o) return;
    const p = (h) => {
      c.current && !c.current.contains(h.target) && n(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [o]);
  const v = (p) => /* @__PURE__ */ t(
    "span",
    {
      className: "rounded-full",
      style: {
        width: 6,
        height: 6,
        background: p,
        flexShrink: 0,
        boxShadow: `0 0 6px ${p}`
      }
    }
  );
  return /* @__PURE__ */ s("div", { ref: c, className: "relative inline-flex", children: [
    /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        onClick: () => d && n((p) => !p),
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
          v(qa(e)),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap" }, children: e.label }),
          d && /* @__PURE__ */ t(
            si,
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
        children: a.map((p) => {
          const h = p.podId === e.podId;
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => {
                r(p.podId), n(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: h ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: v(qa(p)) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: p.label }),
                    h && /* @__PURE__ */ t(pa, { size: 11, style: { color: "var(--accent-primary)" } })
                  ] }),
                  /* @__PURE__ */ s("div", { style: { fontSize: 9, color: "var(--text-disabled)", marginTop: 2 }, children: [
                    "music: ",
                    p.models.music ?? "—",
                    " · cover: ",
                    p.models.cover ?? "—"
                  ] })
                ] })
              ]
            },
            p.podId
          );
        })
      }
    )
  ] });
}
const fe = ({ icon: e, label: a, onClick: r, danger: o }) => /* @__PURE__ */ s(
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
function yd({ tracks: e, player: a, onLoad: r, onOpenLyrics: o, onDelete: n, onRename: c }) {
  const { t: d } = Ct();
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
    e.map((v) => /* @__PURE__ */ t(
      bd,
      {
        track: v,
        player: a,
        onLoad: r,
        onOpenLyrics: o,
        onDelete: n,
        onRename: c,
        translate: d
      },
      v.id
    ))
  ] });
}
function bd({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: o,
  onDelete: n,
  onRename: c,
  translate: d
}) {
  const [v, p] = S(!1), [h, w] = S(null), u = a.state.trackId === e.id, b = u && a.state.playing, f = () => {
    if (h === null) return;
    const y = h.trim();
    w(null), y && y !== e.title && c(e.id, y);
  }, _ = new Date(e.createdAt).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      draggable: !0,
      onDragStart: (y) => {
        const C = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: ve(e)
        };
        y.dataTransfer.setData(ua, JSON.stringify(C)), e.lyricsPreview && y.dataTransfer.setData("text/plain", e.lyricsPreview), y.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => ve(e) ? a.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: u ? "var(--bg-selected)" : v ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: ve(e) ? b ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: u ? "var(--accent-primary)" : "var(--text-disabled)" }, children: ve(e) ? b ? /* @__PURE__ */ t(ht, { size: 11 }) : v ? /* @__PURE__ */ t(pe, { size: 11 }) : /* @__PURE__ */ t(ga, { size: 11 }) : /* @__PURE__ */ t($a, { size: 11 }) }),
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
              onChange: (y) => w(y.target.value),
              onClick: (y) => y.stopPropagation(),
              onKeyDown: (y) => {
                y.stopPropagation(), y.key === "Enter" ? f() : y.key === "Escape" && w(null);
              },
              onBlur: f,
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
              onClick: (y) => y.stopPropagation(),
              onDoubleClick: (y) => {
                y.stopPropagation(), w(e.title);
              },
              title: "Double-click to rename",
              children: e.title || d("musiccreator.track.untitled")
            }
          ),
          e.styleTags && e.styleTags !== "—" && /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 9, color: "var(--text-disabled)" }, children: e.styleTags })
        ] }) }),
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? De(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: _ }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (y) => {
              y.stopPropagation(), y.shiftKey ? o(e) : y.altKey ? n(e.id) : r(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(jr, { size: 11 })
          }
        )
      ]
    }
  );
}
function fd({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: o,
  onSaveSongToDesktop: n,
  onSaveLyricsToDesktop: c,
  onPlayInPlayer: d,
  onRename: v,
  onEditCover: p,
  onSelect: h,
  selected: w,
  player: u
}) {
  const { t: b } = Ct(), f = te(null), [_, E] = S(!1), [y, C] = S(null), [N, k] = S(null), I = () => {
    if (N === null) return;
    const P = N.trim();
    k(null), P && P !== e.title && v(e.id, P);
  }, D = u.state.trackId === e.id, M = D && u.state.playing, O = D && u.state.durationMs > 0 ? u.state.positionMs / u.state.durationMs : 0;
  ae(() => {
    if (!y) return;
    const P = (Je) => {
      const Ce = Je.target;
      f.current && Ce && f.current.contains(Ce) || Ce && Ce.closest?.("[data-track-menu]") || C(null);
    }, ie = () => C(null);
    return setTimeout(() => window.addEventListener("mousedown", P), 0), window.addEventListener("scroll", ie, !0), window.addEventListener("resize", ie), () => {
      window.removeEventListener("mousedown", P), window.removeEventListener("scroll", ie, !0), window.removeEventListener("resize", ie);
    };
  }, [y]);
  const R = () => {
    const P = f.current?.getBoundingClientRect();
    if (!P) return;
    const ie = 220, Je = Math.min(P.right - ie, window.innerWidth - ie - 8), Ce = P.bottom + 4;
    C({ x: Math.max(8, Je), y: Ce });
  }, F = (P) => () => {
    C(null), P();
  }, oe = () => u.toggle(e), rt = () => {
    const P = document.createElement("a");
    P.href = e.audioDataUrl, P.download = `${e.title || "track"}.mp3`, P.click();
  };
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => E(!0),
      onMouseLeave: () => E(!1),
      draggable: !0,
      onDragStart: (P) => {
        const ie = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: ve(e)
        };
        P.dataTransfer.setData(ua, JSON.stringify(ie)), e.lyricsPreview && P.dataTransfer.setData("text/plain", e.lyricsPreview), P.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => h?.(e),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: w ? "var(--bg-selected)" : _ ? "var(--bg-hover)" : "transparent",
        border: w ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: h ? "pointer" : "grab"
      },
      title: h ? "Click to open in player · drag to other fields" : "Drag to Desktop, Cover field, Text Editor, or any text field",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          ve(e) ? /* @__PURE__ */ s(
            "button",
            {
              onClick: oe,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: M ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(mt, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Va(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: M ? /* @__PURE__ */ t(ht, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(pe, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                children: /* @__PURE__ */ t($a, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
            N !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: N,
                onChange: (P) => k(P.target.value),
                onClick: (P) => P.stopPropagation(),
                onKeyDown: (P) => {
                  P.stopPropagation(), P.key === "Enter" ? I() : P.key === "Escape" && k(null);
                },
                onBlur: I,
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
                onDoubleClick: (P) => {
                  P.stopPropagation(), k(e.title);
                },
                title: "Double-click to rename",
                children: e.title || b("musiccreator.track.untitled")
              }
            ),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.durationMs > 0 ? De(e.durationMs) : b("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: f,
              onClick: (P) => {
                P.stopPropagation(), y ? C(null) : R();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: _ || y ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(jr, { size: 14 })
            }
          )
        ] }),
        y && Ja(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: y.x,
                top: y.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                ve(e) && /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: b("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(ga, { size: 14 }), label: b("musiccreator.track.playInPlayer"), onClick: F(() => d(e)) }),
                  /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(Do, { size: 14 }), label: b("musiccreator.track.saveSongToDesktop"), onClick: F(() => n(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(xs, { size: 14 }), label: b("musiccreator.track.download"), onClick: F(rt) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ s(he, { children: [
                  ve(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: b("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t($a, { size: 14 }), label: b("musiccreator.track.openInEditor"), onClick: F(() => o(e)) }),
                  /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(Do, { size: 14 }), label: b("musiccreator.track.saveLyricsToDesktop"), onClick: F(() => c(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(ci, { size: 14 }), label: "Rename", onClick: F(() => k(e.title)) }),
                /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(ha, { size: 14 }), label: "Edit cover art", onClick: F(() => p(e)) }),
                /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(Tt, { size: 14 }), label: b("musiccreator.track.loadIntoForm"), onClick: F(() => r(e)) }),
                /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(Ft, { size: 14 }), label: b("musiccreator.track.delete"), onClick: F(() => a(e.id)), danger: !0 })
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
                  width: `${O * 100}%`,
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
function vd({
  track: e,
  player: a,
  selected: r,
  isFavorite: o,
  onOpenInPlayer: n,
  onRemix: c,
  onToggleFavorite: d,
  onRemove: v
}) {
  const p = te(null), [h, w] = S(!1), [u, b] = S(null), f = a.state.trackId === e.id, _ = f && a.state.loadingTrackId === e.id, E = f && a.state.playing, y = f && a.state.durationMs > 0 ? a.state.positionMs / a.state.durationMs : 0;
  ae(() => {
    if (!u) return;
    const I = (M) => {
      const O = M.target;
      p.current && O && p.current.contains(O) || O && O.closest?.("[data-track-menu]") || b(null);
    }, D = () => b(null);
    return setTimeout(() => window.addEventListener("mousedown", I), 0), window.addEventListener("scroll", D, !0), window.addEventListener("resize", D), () => {
      window.removeEventListener("mousedown", I), window.removeEventListener("scroll", D, !0), window.removeEventListener("resize", D);
    };
  }, [u]);
  const C = () => {
    const I = p.current?.getBoundingClientRect();
    if (!I) return;
    const D = 220, M = Math.min(I.right - D, window.innerWidth - D - 8), O = I.bottom + 4;
    b({ x: M, y: O });
  }, N = (I) => () => {
    b(null), I();
  }, k = e.externalUrl;
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => w(!0),
      onMouseLeave: () => w(!1),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: r ? "var(--bg-selected)" : h ? "var(--bg-hover)" : "transparent",
        border: r ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: "pointer"
      },
      title: "Click to open in player",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ s(
            "button",
            {
              onClick: (I) => {
                I.stopPropagation(), a.toggle(e);
              },
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105",
              style: { width: 36, height: 36 },
              title: E ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(mt, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Va(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: _ ? /* @__PURE__ */ t(K, { size: 14, className: "animate-spin", style: { color: "white" } }) : E ? /* @__PURE__ */ t(ht, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(pe, { size: 14, style: { color: "white", marginLeft: 1 } })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ t(
            "button",
            {
              ref: p,
              onClick: (I) => {
                I.stopPropagation(), u ? b(null) : C();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: h || u ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(jr, { size: 14 })
            }
          )
        ] }),
        u && Ja(
          /* @__PURE__ */ s(
            "div",
            {
              "data-track-menu": !0,
              className: "fixed z-[3000] py-1.5 select-none",
              style: {
                left: u.x,
                top: u.y,
                width: 220,
                background: "var(--bg-context-menu)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                boxShadow: "var(--shadow-lg)"
              },
              children: [
                /* @__PURE__ */ t(
                  fe,
                  {
                    icon: E ? /* @__PURE__ */ t(ht, { size: 14 }) : /* @__PURE__ */ t(pe, { size: 14 }),
                    label: E ? "Pause" : "Play",
                    onClick: N(() => a.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  fe,
                  {
                    icon: /* @__PURE__ */ t(ga, { size: 14 }),
                    label: "Open in player",
                    onClick: N(() => n(e))
                  }
                ),
                /* @__PURE__ */ t(
                  fe,
                  {
                    icon: /* @__PURE__ */ t(_t, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: N(() => c(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  fe,
                  {
                    icon: /* @__PURE__ */ t(Pr, { size: 14, fill: o ? "currentColor" : "none" }),
                    label: o ? "Remove favorite" : "Add to favorites",
                    onClick: N(() => d(e))
                  }
                ),
                k && /* @__PURE__ */ t(
                  fe,
                  {
                    icon: /* @__PURE__ */ t(li, { size: 14 }),
                    label: "Open source",
                    onClick: N(() => window.open(k, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  fe,
                  {
                    icon: /* @__PURE__ */ t(Ft, { size: 14 }),
                    label: "Remove from Library",
                    onClick: N(() => v(e)),
                    danger: !0
                  }
                )
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
                  width: `${y * 100}%`,
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
function xd({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: o
}) {
  const [n, c] = S(e.coverDataUrl), [d, v] = S(""), [p, h] = S(!1), [w, u] = S(null), b = te(null), f = te(null), _ = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), E = Ha(_, "", e.styleTags || "");
  ae(() => {
    const N = (k) => {
      k.key === "Escape" && (k.stopPropagation(), o());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [o]), ae(() => () => f.current?.abort(), []);
  const y = async () => {
    if (!a) {
      u("Connect to a pod to generate cover art.");
      return;
    }
    if (!a.models.image) {
      u(`This endpoint (${a.label}) has no image model. Pick one in JULI3TA Settings → Cover art.`);
      return;
    }
    if (p) return;
    f.current?.abort(), f.current = new AbortController();
    const N = f.current.signal;
    h(!0), u(null);
    try {
      const k = (d.trim() || E).slice(0, 1500), I = await Rr(a, k, N);
      if (N.aborted) return;
      c(I);
    } catch (k) {
      if (k.name === "AbortError") return;
      u(k.message || "Cover-art generation failed.");
    } finally {
      h(!1);
    }
  }, C = (N) => {
    if (u(null), !N.type.startsWith("image/")) {
      u("That file is not an image.");
      return;
    }
    if (N.size > 4 * 1024 * 1024) {
      u("Image is too big (limit 4 MB).");
      return;
    }
    const k = new FileReader();
    k.onerror = () => u("Could not read that image."), k.onload = () => {
      const I = k.result;
      typeof I == "string" && c(I);
    }, k.readAsDataURL(N);
  };
  return Ja(
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
            onClick: (N) => N.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(ha, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ s("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: [
                      "Cover Art — ",
                      _ || "Untitled"
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: o,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close",
                        children: /* @__PURE__ */ t(me, { size: 14 })
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
                        !n && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ha, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
                        p && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(K, { size: 24, className: "animate-spin", style: { color: "white" } }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col gap-2 min-w-0", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: y,
                        disabled: p || !a?.models.image,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 12,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent",
                          cursor: p || !a?.models.image ? "not-allowed" : "pointer"
                        },
                        children: [
                          p ? /* @__PURE__ */ t(K, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Ws, { size: 12 }),
                          n ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => b.current?.click(),
                        disabled: p,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(Dr, { size: 12 }),
                          "Upload"
                        ]
                      }
                    ),
                    n && /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => c(""),
                        disabled: p,
                        className: "flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 12,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(me, { size: 12 }),
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
                      onChange: (N) => v(N.target.value),
                      placeholder: E,
                      disabled: p,
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
                      /* @__PURE__ */ t(ma, { size: 12, style: { flexShrink: 0 } }),
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
                        disabled: p,
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
                        disabled: p,
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
                  onChange: (N) => {
                    const k = N.target.files?.[0];
                    k && C(k), N.target.value = "";
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
function Da({ label: e, children: a }) {
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
function wd({
  songName: e,
  mode: a,
  theme: r,
  style: o,
  intent: n,
  lyrics: c,
  specs: d,
  coverDataUrl: v,
  endpoint: p,
  busy: h,
  onRegenerate: w,
  onUpload: u,
  onClear: b,
  onClose: f
}) {
  const _ = te(null), E = ue(() => Hr(d), [d]), y = ue(() => $t(d), [d]);
  ae(() => {
    const k = (I) => {
      I.key === "Escape" && (I.stopPropagation(), f());
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [f]);
  const C = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", N = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Ja(
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
            onClick: (k) => k.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3 flex-shrink-0",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(St, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                        children: C
                      }
                    ),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: f,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(me, { size: 14 })
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
                      background: v ? `url(${v}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "var(--shadow-md)"
                    },
                    children: [
                      !v && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ha, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
                      h && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(K, { size: 28, className: "animate-spin", style: { color: "white" } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
                  /* @__PURE__ */ s("div", { children: [
                    /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }, children: N }),
                    o.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: o.trim() })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: w,
                        disabled: h || !p?.models.image,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 11,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent",
                          cursor: h || !p?.models.image ? "not-allowed" : "pointer"
                        },
                        title: p?.models.image ? "Generate cover art" : "No image model available",
                        children: [
                          h ? /* @__PURE__ */ t(K, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 11 }),
                          v ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: () => _.current?.click(),
                        disabled: h,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(Dr, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    v && /* @__PURE__ */ s(
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
                          /* @__PURE__ */ t(me, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  r.trim() && /* @__PURE__ */ t(Da, { label: "Theme", children: r.trim() }),
                  n.trim() && /* @__PURE__ */ t(Da, { label: "Lyrics Direction", children: n.trim() }),
                  y > 0 && E && /* @__PURE__ */ t(Da, { label: `Track Specs (${y} set)`, children: E }),
                  c.trim() && /* @__PURE__ */ t(Da, { label: "Lyrics", children: /* @__PURE__ */ t(
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
                  !r.trim() && !n.trim() && y === 0 && !c.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: _,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (k) => {
                    const I = k.target.files?.[0];
                    I && u(I), k.target.value = "";
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
function kd(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function Sd(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function Td(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function _d(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function Nd(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: Y(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: Y(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: Y(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: Y(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: Y(e.tonal.mode) }), o.length && a.push({ label: "Tonal", rows: o });
  const n = [];
  if (e.instrumentation?.primary_instruments?.length && n.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(Y).join(", ") }), e.instrumentation?.has_vocals === !1)
    n.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const p = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && p.push(Y(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && p.push(e.instrumentation.vocal_style.map(Y).join("/")), n.push({ label: "Vocals", value: p.length ? p.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && n.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(Y).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && n.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), n.length && a.push({ label: "Instrumentation", rows: n });
  const c = [];
  e.dynamics?.overall_dynamic_range && c.push({ label: "Range", value: Y(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && c.push({ label: "Crescendo", value: Y(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && c.push({ label: "Big drops", value: "Yes" }), c.length && a.push({ label: "Dynamics", rows: c });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: Y(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(Y).join(", ") }), d.length && a.push({ label: "Mood", rows: d });
  const v = [];
  return e.context?.era_reference && v.push({ label: "Era", value: Y(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && v.push({ label: "Region", value: Y(e.context.cultural_region) }), e.context?.intended_use?.length && v.push({ label: "Use", value: e.context.intended_use.map(Y).join("/") }), e.context?.explicit_lyrics && v.push({ label: "Explicit", value: "Yes" }), v.length && a.push({ label: "Context", rows: v }), a;
}
function We({ label: e, value: a }) {
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
function Ot({ label: e, children: a }) {
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
function Cd({
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
const Ed = /^\s*\[([^\]]+)\]\s*$/;
function Ad({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, o) => {
    const n = r.match(Ed);
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
function Ld({ track: e, player: a, restyleOriginal: r, onEditInCreator: o, onSwitchToCreator: n, onSearchMusic: c }) {
  const { t: d } = Ct(), v = e?.specsJson ?? "", p = ue(() => {
    if (!v) return {};
    try {
      return JSON.parse(v);
    } catch {
      return {};
    }
  }, [v]), h = (p.intent ?? "").trim(), w = ue(() => Nd(p), [p]);
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
            /* @__PURE__ */ t(Pe, { size: 13 }),
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
            /* @__PURE__ */ t(at, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const u = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", b = ve(e), f = Va(e), _ = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", E = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", y = a.state.trackId === e.id, C = y && a.state.playing, N = y && a.state.loadingTrackId === e.id, k = e.source === "youtube", I = a.queue.filter((D) => D.id !== e.id && (D.artist || "").trim() && D.artist === e.artist).slice(0, 4);
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
            title: b ? y && C ? "Pause" : "Play" : "Lyric sheet — no audio",
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
                    opacity: y && C ? 0 : 1
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
                      children: y && C ? /* @__PURE__ */ t(ht, { size: 30, style: { color: "white" } }) : N ? /* @__PURE__ */ t(K, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(pe, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                b ? /* @__PURE__ */ t(pe, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(Tt, { size: 10 }),
                k ? "YouTube track" : d(b ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
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
                /* @__PURE__ */ t(hi, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: _ }),
                e.source === "youtube" && e.album && e.album !== _ && /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                E && /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: E })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: De(e.durationMs) })
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
                title: y && C ? "Pause" : "Play",
                children: N ? /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t(K, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : y && C ? /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t(ht, { size: 16 }),
                  " ",
                  d("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ s(he, { children: [
                  /* @__PURE__ */ t(pe, { size: 16, style: { marginLeft: 2 } }),
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
                  /* @__PURE__ */ t(_t, { size: 13 }),
                  d("musiccreator.player.remixInRestyle")
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-7", children: /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-6 items-start", children: [
      /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", style: { minWidth: 320, maxWidth: 720 }, children: [
        /* @__PURE__ */ t(
          "div",
          {
            style: {
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-disabled)",
              textTransform: "uppercase",
              letterSpacing: 0.8,
              marginBottom: 16
            },
            children: d("musiccreator.player.lyrics")
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(Ad, { text: e.lyricsPreview }) : k ? /* @__PURE__ */ s(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Fs, { size: 18 }) }),
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
                    /* @__PURE__ */ t(li, { size: 13 }),
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
              /* @__PURE__ */ t(Tt, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: d("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        r && r.trackId === e.id && /* @__PURE__ */ t(
          Cd,
          {
            audioSrc: r.audioSrc,
            sourceLabel: r.sourceLabel,
            onUserPlay: () => {
              a.state.playing && a.pause();
            }
          }
        ),
        e.theme.trim() && /* @__PURE__ */ t(Ot, { label: d("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        h && /* @__PURE__ */ t(Ot, { label: d("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: h }) }),
        w.map((D) => /* @__PURE__ */ t(Ot, { label: D.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: D.rows.map((M) => /* @__PURE__ */ t(We, { label: M.label, value: M.value }, `${D.label}-${M.label}`)) }) }, D.label)),
        k && /* @__PURE__ */ t(Ot, { label: "Artist / Source", children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(il, { size: 20 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        I.length > 0 && /* @__PURE__ */ t(Ot, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: I.map((D) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => a.select(D),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(mt, { track: D, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: D.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: D.durationMs ? De(D.durationMs) : "Streamed" })
              ] })
            ]
          },
          D.id
        )) }) }),
        /* @__PURE__ */ t(Ot, { label: d("musiccreator.player.about"), children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.created"), value: _d(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(We, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(We, { label: "Channel", value: e.album }),
          b && e.durationMs > 0 && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.duration"), value: De(e.durationMs) }),
          e.source !== "youtube" && b && e.bitrate > 0 && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.bitrate"), value: Sd(e.bitrate) }),
          e.source !== "youtube" && b && e.sampleRate > 0 && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.sampleRate"), value: Td(e.sampleRate) }),
          e.source !== "youtube" && b && e.sizeBytes > 0 && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.size"), value: kd(e.sizeBytes) }),
          E && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.style"), value: E }),
          /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : d(b ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function zd({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: o,
  searchHistory: n,
  onClearSearchHistory: c,
  resultType: d,
  onResultTypeChange: v,
  results: p,
  busy: h,
  error: w,
  status: u,
  providers: b,
  connectors: f,
  libraryTracks: _,
  playlists: E,
  playlistNameDraft: y,
  playlistBusy: C,
  favoriteIds: N,
  warmupIds: k,
  previewBusyId: I,
  addBusyId: D,
  savedYoutubeIds: M,
  player: O,
  onPreview: R,
  onAdd: F,
  onOpenTrack: oe,
  onToggleFavorite: rt,
  onRemoveLibraryTrack: Se,
  onPlaylistNameDraftChange: P,
  onCreatePlaylist: ie,
  onAddTrackToPlaylist: Je,
  onRemoveTrackFromPlaylist: Ce,
  onPlayPlaylist: Ka,
  onDeletePlaylist: Ge,
  onConfigureConnector: Jt,
  onDisconnectConnector: ge,
  onClose: ya
}) {
  const [G, Ee] = S(null), [ba, gt] = S({}), [Ve, Ae] = S(!1), [Ue, xe] = S(null), [Et, Te] = S(null), [ye, ot] = S(null);
  ae(() => {
    Te(null), ot(null);
  }, [e]);
  const Xa = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(_.map((g) => g.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(_.map((g) => g.album || g.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: E.length },
    { id: "sources", label: "Sources", count: b.length || 4 }
  ], it = (g) => {
    const z = O.state.trackId === g.id, H = z && O.state.loadingTrackId === g.id, ne = z && O.state.playing;
    return /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(mt, { track: g, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ s("button", { type: "button", onClick: () => oe(g), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: g.title }),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              g.artist || "Unknown",
              g.album ? ` · ${g.album}` : "",
              g.durationMs ? ` · ${De(g.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => rt(g),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: N.has(g.id) ? "white" : "var(--text-secondary)",
                background: N.has(g.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: N.has(g.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(Pr, { size: 13, fill: N.has(g.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => O.toggle(g),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                H ? /* @__PURE__ */ t(K, { size: 12, className: "animate-spin" }) : ne ? /* @__PURE__ */ t(ht, { size: 12 }) : /* @__PURE__ */ t(pe, { size: 12 }),
                H ? "Loading" : ne ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => Se(g),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t(Ft, { size: 13 })
            }
          )
        ]
      },
      g.id
    );
  }, Gt = Array.from(
    _.reduce((g, z) => {
      const H = (z.artist || "Unknown artist").trim();
      return g.set(H, [...g.get(H) ?? [], z]), g;
    }, /* @__PURE__ */ new Map())
  ).sort((g, z) => g[0].localeCompare(z[0])), nt = Array.from(
    _.reduce((g, z) => {
      const H = (z.album || z.artist || "YouTube collection").trim();
      return g.set(H, [...g.get(H) ?? [], z]), g;
    }, /* @__PURE__ */ new Map())
  ).sort((g, z) => g[0].localeCompare(z[0])), Vt = b.length > 0 ? b.map((g) => {
    const z = f.find((st) => st.provider === g.id), H = z?.connected ?? g.configured, ne = z?.oauthRequired ?? g.state === "oauth_required";
    return {
      id: g.id,
      name: g.name,
      state: H ? "Connected" : ne ? "OAuth required" : g.state.replace(/_/g, " "),
      body: z?.message ?? g.message,
      action: H ? "Manage" : ne ? "Coming soon" : "Configure",
      enabled: H,
      needs: g.needs,
      kind: g.kind,
      connector: z,
      oauthRequired: ne,
      configurable: z?.configurable ?? !ne
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
              onClick: ya,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(me, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: Xa.map((g) => /* @__PURE__ */ s(
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
        /* @__PURE__ */ t(at, { size: 16, style: { color: "var(--text-disabled)" } }),
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
        h && /* @__PURE__ */ t(K, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(me, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((g) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => v(g),
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
            children: /* @__PURE__ */ t(me, { size: 11 })
          }
        )
      ] }),
      w && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: w })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
        r.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        r.trim().length >= 2 && !h && p.length === 0 && !w && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        h && p.length === 0 && Array.from({ length: 5 }).map((g, z) => /* @__PURE__ */ s(
          "div",
          {
            className: "flex items-center gap-3 rounded-xl px-3 py-2",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", opacity: 0.78 },
            children: [
              /* @__PURE__ */ t("div", { className: "animate-pulse", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "var(--bg-hover)" } }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 12, width: `${70 - z * 6}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)" } }),
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 10, width: `${45 - z * 4}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)", marginTop: 8 } })
              ] }),
              /* @__PURE__ */ t(K, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${z}`
        )),
        p.map((g) => {
          const z = Mi(g.title, g.channel), H = M.has(g.id), ne = I === g.id, st = D === g.id, Le = k.has(g.id);
          return /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                g.thumbnailUrl || Wa(g.id) ? /* @__PURE__ */ t("img", { src: g.thumbnailUrl || Wa(g.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(ga, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: z.song }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    z.artist || g.channel || "Music",
                    g.durationMs ? ` · ${De(g.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: g.title })
                ] }),
                Le && !ne && /* @__PURE__ */ s("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(K, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => R(g),
                    disabled: ne,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      ne ? /* @__PURE__ */ t(K, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(pe, { size: 12 }),
                      ne ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => F(g),
                    disabled: H || st,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: H ? "var(--text-disabled)" : "white", background: H ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      st ? /* @__PURE__ */ t(K, { size: 12, className: "animate-spin" }) : H ? /* @__PURE__ */ t(pa, { size: 12 }) : /* @__PURE__ */ t(Lr, { size: 12 }),
                      st ? "Adding" : H ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            g.id
          );
        })
      ] }),
      e === "artists" && (Et !== null ? (() => {
        const g = Gt.find(([z]) => z === Et)?.[1] ?? [];
        return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => Te(null),
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
                  /* @__PURE__ */ t(Po, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Et }),
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
                onClick: () => oe(g[0]),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(pe, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: g.map(it) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Gt.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Gt.map(([g, z]) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => Te(g),
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            title: `Open ${g}`,
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: g }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                z.length,
                " track",
                z.length === 1 ? "" : "s"
              ] })
            ]
          },
          g
        ))
      ] })),
      e === "albums" && (ye !== null ? (() => {
        const z = nt.find(([ne]) => ne === ye)?.[1] ?? [], H = z[0];
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
                  /* @__PURE__ */ t(Po, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            H && /* @__PURE__ */ t(mt, { track: H, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: ye }),
              /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                H?.artist || "Mixed artists",
                " · ",
                z.length,
                " track",
                z.length === 1 ? "" : "s"
              ] })
            ] }),
            H && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => oe(H),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(pe, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: z.map(it) })
        ] });
      })() : /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        nt.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        nt.map(([g, z]) => {
          const H = z[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ot(g),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${g}`,
              children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                H && /* @__PURE__ */ t(mt, { track: H, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ s("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: g }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    H?.artist || "Mixed artists",
                    " · ",
                    z.length,
                    " track",
                    z.length === 1 ? "" : "s"
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
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Ls, { size: 22 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: y,
              onChange: (g) => P(g.target.value),
              onKeyDown: (g) => {
                g.key === "Enter" && ie();
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
              onClick: ie,
              disabled: C,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                C ? /* @__PURE__ */ t(K, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Lr, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        E.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : E.map((g) => /* @__PURE__ */ s("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
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
                  onClick: () => Ka(g),
                  disabled: g.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(pe, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => Ge(g.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(Ft, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: g.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : g.items.map((z) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(mt, { track: z, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ s("button", { type: "button", onClick: () => oe(z), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: z.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: z.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => Ce(g.id, z.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(me, { size: 13 })
              }
            )
          ] }, `${g.id}-${z.id}`)) }),
          _.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: _.slice(0, 8).filter((z) => !g.items.some((H) => H.id === z.id)).map((z) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => Je(g.id, z),
              className: "rounded-full px-3",
              style: { height: 28, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              children: [
                "+ ",
                z.title.slice(0, 28)
              ]
            },
            `${g.id}-add-${z.id}`
          )) })
        ] }, g.id))
      ] }),
      e === "sources" && /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        Vt.map((g) => /* @__PURE__ */ s(
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
                    children: g.name === "Spotify" ? "♬" : g.name === "YouTube" ? /* @__PURE__ */ t(pe, { size: 18 }) : g.kind === "catalog" ? /* @__PURE__ */ t(is, { size: 18 }) : /* @__PURE__ */ t(St, { size: 18 })
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
                      const z = g.connector?.credentialSpecs ?? g.needs.map((H) => ({ name: H, label: H, secret: !0, required: !0 }));
                      gt({}), xe(null), Ee({
                        id: g.id,
                        name: g.name,
                        body: g.body,
                        specs: z,
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
        G && /* @__PURE__ */ s("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                G.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: G.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => Ee(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(me, { size: 16 }) })
          ] }),
          G.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ s(he, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: G.specs.map((g) => /* @__PURE__ */ s("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: g.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: g.label || g.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: ba[g.name] ?? "",
                  type: g.secret ? "password" : "text",
                  onChange: (z) => gt((H) => ({ ...H, [g.name]: z.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: g.name
                }
              )
            ] }, g.name)) }),
            Ue && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: Ue }),
            /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  disabled: Ve || !G.configurable,
                  onClick: () => {
                    Ae(!0), xe(null), Jt(G.id, ba).then(() => {
                      gt({}), Ee(null);
                    }).catch((g) => xe(g.message || "Connector setup failed.")).finally(() => Ae(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Ve ? /* @__PURE__ */ t(K, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(pa, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              G.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Ve,
                  onClick: () => {
                    Ae(!0), xe(null), ge(G.id).then(() => Ee(null)).catch((g) => xe(g.message || "Disconnect failed.")).finally(() => Ae(!1));
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
function Id() {
  const e = yl(), { t: a } = Ct(), r = fl(), o = kl(), { state: n, dispatch: c } = mi(), { addNotification: d } = _l(), v = n.theme.mode, [p, h] = S("compose"), [w, u] = S(!1), [b, f] = S("creator"), [_, E] = S(null), [y, C] = S(""), [N, k] = S(""), [I, D] = S(null), [M, O] = S(""), [R, F] = S(""), [oe, rt] = S(!1), [Se, P] = S(""), [ie, Je] = S(""), [Ce, Ka] = S(!0), [Ge, Jt] = S(!1), [ge, ya] = S(null), [G, Ee] = S({}), [ba, gt] = S(!1), [Ve, Ae] = S(null), [Ue, xe] = S(null), [Et, Te] = S(null), [ye, ot] = S(!1), [Xa, it] = S(!1), [Gt, nt] = S(!1), [Vt, g] = S([]), z = te(null), H = te(null), [ne, st] = S(!1), [Le, $r] = S("best"), [ji, Pi] = S(null), [Di, fa] = S(!1), [Ye, Fr] = S("mic"), [Oe, Qa] = S(!1), [Br, Wr] = S(0), [qr, Yt] = S(null), Jr = te(null), va = te([]), At = te(null), Za = te(0), Kt = te(null), [Lt, He] = S("idle"), [Xt, q] = S(null), [Ui, zt] = S(0), [Gr, Vr] = S(0), [yt, ze] = S([]), [It, Z] = S(null), [Ie, Yr] = S(""), [Qt, Kr] = S("cards"), [Re, Xr] = S("mywork"), [Ke, Oi] = S("all"), [bt, Qr] = S("all"), [Xe, je] = S(!1), [Hi, Zt] = S("search"), [er, $i] = S(""), [Fi, Zr] = S(() => {
    try {
      const i = localStorage.getItem("juli3ta:searchHistory"), l = i ? JSON.parse(i) : null;
      return Array.isArray(l) ? l.filter((m) => typeof m == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), eo = L((i) => {
    const l = i.trim();
    l.length < 2 || Zr((m) => {
      const x = [l, ...m.filter((T) => T.toLowerCase() !== l.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(x));
      } catch {
      }
      return x;
    });
  }, []), [ea, Bi] = S("tracks"), [Wi, tr] = S([]), [qi, xa] = S(!1), [Ji, Qe] = S(null), [Gi, to] = S(null), [Vi, ao] = S([]), [Yi, ro] = S([]), [Ze, oo] = S({}), [Ki, io] = S(() => /* @__PURE__ */ new Set()), [Xi, no] = S(null), [Qi, so] = S(null), [lo, co] = S([]), [we, ar] = S([]), [wa, rr] = S(() => /* @__PURE__ */ new Set()), [or, Mt] = S([]), [ir, uo] = S(""), [Zi, po] = S(!1), mo = te(/* @__PURE__ */ new Map()), nr = te(/* @__PURE__ */ new Map()), sr = te(/* @__PURE__ */ new Set()), [ka, ta] = S(null), [Sa, ho] = S(!1), [lr, go] = S(fi), [en, cr] = S(!1);
  ae(() => {
    let i = !1;
    return (async () => {
      try {
        await Promise.all([
          Yc(),
          ac()
        ]);
      } catch ($) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", $);
      }
      await Vl().catch(($) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", $);
      });
      const [l, m, x, T, A, U, V] = await Promise.allSettled([
        Ll(),
        kr(),
        $l(),
        Fo(),
        Jl(),
        Yl("track"),
        na()
      ]);
      if (i) return;
      const be = l.status === "fulfilled" ? l.value : [], $e = m.status === "fulfilled" ? m.value.tracks.map(($) => ({ ...$, source: "juli3ta" })) : [];
      m.status === "fulfilled" && (ta(m.value.rootPath), Z(($) => $?.startsWith("Real file library unavailable") ? null : $)), l.status === "fulfilled" ? ze(sa($e, be)) : (console.error("[Juli3ta] listTracks failed:", l.reason), ze(sa($e)), Z("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), m.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", m.reason), Z("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const vt = new Set($e.map(($) => $.id)), Fe = new Set(be.map(($) => $.id)), de = be.filter(($) => !vt.has($.id) && Sc($)), _e = $e.filter(($) => !Fe.has($.id));
      (de.length > 0 || _e.length > 0) && (async () => {
        const $ = [];
        for (const se of de)
          try {
            const ee = await Jo({ ...se, source: "juli3ta" });
            $.push({ ...se, ...ee, source: "juli3ta" });
          } catch (ee) {
            console.warn("[Juli3ta] host file backfill failed:", se.id, ee);
          }
        for (const se of _e)
          try {
            await Ba({ ...se, source: "juli3ta" });
          } catch (ee) {
            console.warn("[Juli3ta] standalone cache backfill failed:", se.id, ee);
          }
        !i && ($.length > 0 || _e.length > 0) && (ze((se) => sa($, _e, se)), kr().then((se) => ta(se.rootPath)).catch(() => {
        }));
      })(), x.status === "fulfilled" && go(x.value), T.status === "fulfilled" && g(T.value), A.status === "fulfilled" && ar(A.value), U.status === "fulfilled" && rr(new Set(U.value.map(($) => $.entityId))), V.status === "fulfilled" && Mt(V.value);
    })(), () => {
      i = !0;
    };
  }, []), ae(() => {
    if (!It?.startsWith("Real file library unavailable")) return;
    let i = !1;
    const l = async () => {
      try {
        const x = await kr();
        if (i) return;
        ta(x.rootPath), ze((T) => sa(x.tracks.map((A) => ({ ...A, source: "juli3ta" })), T)), Z((T) => T?.startsWith("Real file library unavailable") ? null : T);
      } catch {
      }
    }, m = window.setInterval(l, 4e3);
    return l(), () => {
      i = !0, window.clearInterval(m);
    };
  }, [It]);
  const dr = L(async (i) => {
    try {
      const l = await Jo({ ...i, source: "juli3ta" }), m = { ...i, ...l, source: "juli3ta" };
      return await Ba(m), ta(l.folderPath?.split("/").slice(0, -1).join("/") || ka), Z(null), ze((x) => sa([m], x)), !0;
    } catch (l) {
      const m = l.message || "Real file save failed";
      return Z(`Couldn't save "${i.title}" as a real file — ${m}.`), !1;
    }
  }, [ka]), tn = L(async (i) => {
    go(i);
    try {
      await Fl(i);
    } catch (l) {
      console.warn("Settings save failed:", l);
    }
  }, []), Ta = ue(
    () => e.state ? Kc(e.state.agents, e.state.included) : [],
    [e.state]
  ), [_a, an] = S([]), [rn, on] = S(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [nn, yo] = S(!0), W = _a.find((i) => i.podId === rn) ?? _a[0] ?? null, ur = L(async () => {
    yo(!0);
    const i = new AbortController(), l = await ed(Ta, i.signal);
    an(l), yo(!1);
  }, [Ta]);
  ae(() => {
    Ta.length !== 0 && queueMicrotask(() => void ur());
  }, [Ta, ur]);
  const sn = L((i) => {
    on(i);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", i);
    } catch {
    }
  }, []), aa = te(null), ce = te(null), ra = te(null), Na = te(!1);
  ae(() => () => {
    aa.current?.abort(), ce.current?.abort();
  }, []), ae(() => {
    if (Lt === "idle") {
      queueMicrotask(() => {
        zt(0), Vr(0);
      });
      return;
    }
    const i = Date.now(), l = () => {
      const T = (Date.now() - i) / 1e3, A = Lt === "lyrics" ? Math.min(0.95, T / 5) : Math.min(0.95, 1 - Math.exp(-T / 35));
      zt(A);
    };
    l();
    const m = setInterval(l, 250), x = setInterval(() => Vr((T) => T + 1), 4500);
    return () => {
      clearInterval(m), clearInterval(x);
    };
  }, [Lt]);
  const oa = L((i) => {
    if (!i.lyricsPreview) return null;
    const l = o.ensureUserFolder("Music");
    if (!l) return null;
    const m = `${ja(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, x = o.findChildByName(l, m);
    return x ? (o.writeFile(x.id, i.lyricsPreview), x.id) : o.createFile(l, m, i.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [o]), bo = L((i) => {
    if (!i.audioDataUrl) return null;
    const l = o.ensureUserFolder("Music");
    if (!l) return null;
    const m = `${ja(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, x = o.findChildByName(l, m);
    return x ? x.id : o.createFile(l, m, "", {
      mimeType: "audio/mpeg",
      refTrackId: i.id
    });
  }, [o]), ln = L(async () => {
    if (!W) {
      q(a("musiccreator.error.noPod"));
      return;
    }
    if (p === "restyle" && !Ue) {
      q(ye ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (Na.current) return;
    Na.current = !0, q(null), aa.current?.abort();
    const i = new AbortController();
    aa.current = i;
    try {
      const l = lr.overridesByEndpoint[W.url] ?? {}, m = {
        ...W,
        models: {
          music: l.music || W.models.music,
          cover: l.cover || W.models.cover,
          lyrics: l.lyrics || W.models.lyrics,
          lyricsBackup: l.lyricsBackup || W.models.lyricsBackup,
          image: l.image || W.models.image,
          allIds: W.models.allIds
        }
      }, x = Hr(G);
      let T = N.trim(), A = R.trim(), U = M.trim(), V = null;
      if (!T && !oe) {
        if (!y.trim() && !(G.intent ?? "").trim()) {
          q(a("musiccreator.error.noInput"));
          return;
        }
        He("lyrics");
        const le = [];
        y.trim() && le.push(y.trim());
        const gr = (G.intent ?? "").trim();
        gr && le.push(`User intent (must respect): ${gr}`), x && le.push(`Musical context: ${x}`), I && le.push(`Structure: ${I.prompt}`);
        const Kn = le.join(`

`);
        V = await od(m, Kn, i.signal), T = V.lyrics, A || (A = V.song_title), U || (U = V.style_tags);
      } else !T && oe && (T = `[Intro]
[Instrumental]
[Outro]`);
      if (V && (k(V.lyrics), A === "Untitled" && (A = ""), A && !R.trim() && F(A), U && !M.trim() && O(U), V.usedFallback && Z(
        `Primary lyrics model errored — used backup chat model "${m.models.lyricsBackup ?? "unknown"}" instead.`
      )), T.length > Dt) {
        q(a("musiccreator.error.lyricsTooLong", { count: T.length, max: Dt })), He("idle");
        return;
      }
      if (A.trim() || (A = Jc(T, y, U || M), A && A !== "Untitled" && !R.trim() && F(A)), p === "lyricsOnly") {
        const le = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (A || a("musiccreator.track.untitled")) + " (lyrics)",
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
          specsJson: $t(G) > 0 ? JSON.stringify(G) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: Se,
          theme: y
        };
        await dr(le) && oa(le), He("idle"), zt(0);
        return;
      }
      if (p === "restyle" && !Ue) {
        q(ye ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), He("idle");
        return;
      }
      He("song");
      const be = [U, x].filter((le) => le && le.length > 0).join(". "), $e = id(
        m,
        {
          lyrics: T,
          prompt: be || void 0,
          instrumental: oe,
          refAudioBase64: p === "restyle" ? Ue ?? void 0 : void 0
        },
        i.signal
      ), vt = Ce && !Se && !!m.models.image, Fe = Se, de = vt ? Rr(
        m,
        (ie.trim() || Ha(A, y, U || M)).slice(0, 1500),
        i.signal
      ).catch((le) => {
        if (le.name === "AbortError") throw le;
        return console.warn("[Juli3ta] Cover-art generation failed:", le), Z(`Cover-art skipped: ${le.message}`), Fe;
      }) : Promise.resolve(Fe), _e = await Promise.allSettled([$e, de]), $ = _e[0], se = _e[1];
      if ($.status === "rejected")
        throw i.abort(), $.reason;
      const ee = $.value, pt = se.status === "fulfilled" ? se.value : Fe;
      if (!ee?.data?.audio || typeof ee.data.audio != "string" || ee.data.audio.length < 100) {
        const le = ee?.trace_id ? ` (trace ${ee.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${le}. Try again or pick a different model in Settings.`);
      }
      const Vn = `data:audio/mpeg;base64,${ee.data.audio}`, Yn = p === "restyle" ? " (restyle)" : "", tt = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (A || a("musiccreator.track.untitled")) + Yn,
        styleTags: U || "—",
        lyricsPreview: T,
        // store the full text — used by Load
        durationMs: ee.data.duration_ms ?? 0,
        bitrate: ee.data.bitrate ?? 0,
        sampleRate: ee.data.sample_rate ?? 0,
        sizeBytes: ee.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: Vn,
        specsJson: $t(G) > 0 ? JSON.stringify(G) : "",
        coverDataUrl: pt,
        theme: y
      };
      P(pt), console.info("[Juli3ta] Saving generated song:", { id: tt.id, title: tt.title, durationMs: tt.durationMs, sizeBytes: tt.sizeBytes }), await dr(tt) && (bo(tt), oa(tt), p === "restyle" && Ue && Pi({
        trackId: tt.id,
        audioSrc: `data:audio/wav;base64,${Ue}`,
        sourceLabel: Ve || "Original"
      }), d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: tt.title }),
        isRead: !1
      })), He("idle"), zt(0);
    } catch (l) {
      if (l.name === "AbortError") {
        He("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", l), q(l.message || "Generation failed — check the console for details."), He("idle"), zt(0);
    } finally {
      Na.current = !1;
    }
  }, [
    W,
    y,
    N,
    R,
    M,
    G,
    I,
    oe,
    p,
    Ue,
    Ve,
    a,
    dr,
    lr,
    bo,
    oa,
    d,
    Ce,
    Se,
    ie
  ]), cn = () => z.current?.click(), fo = te(0), lt = L(async (i, l) => {
    const m = ++fo.current, x = () => fo.current === m;
    q(null), ot(!0), xe(null), Ae(l), Te(null);
    try {
      if (Le === "mix") {
        const T = await gc(i);
        if (!x()) return;
        xe(T.base64);
        const A = T.sourceDurationSec / 60;
        if (T.segments.length > 1) {
          const U = T.segments.map((V) => `${Math.floor(V.startSec / 60)}:${Math.floor(V.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          Te(
            `Mixed ${T.segments.length} iconic moments (${T.durationSec.toFixed(0)} s) from ${A.toFixed(1)} min — at ${U}`
          );
        } else
          Te(`Using whole clip (${T.durationSec.toFixed(0)} s)`);
      } else {
        const T = await Ei(i);
        if (!x()) return;
        xe(T.base64);
        const A = T.sourceDurationSec / 60, U = T.startSec / 60, V = T.startSec < 60 ? `${T.startSec.toFixed(1)} s` : `${Math.floor(U)}:${Math.floor(T.startSec % 60).toString().padStart(2, "0")}`;
        Te(
          T.sourceDurationSec <= T.durationSec + 0.5 ? `Using whole clip (${T.durationSec.toFixed(0)} s)` : `Auto-picked best ${T.durationSec.toFixed(0)} s starting at ${V} of ${A.toFixed(1)} min`
        );
      }
    } catch (T) {
      if (!x()) return;
      q(T.message || "Could not analyze that audio."), Ae(null);
    } finally {
      x() && ot(!1);
    }
  }, [Le]), dn = async () => {
    Yt(null);
    try {
      let i;
      if (Ye === "tab") {
        const T = navigator.mediaDevices;
        if (!T.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        i = await T.getDisplayMedia({ video: !0, audio: !0 });
        for (const A of i.getVideoTracks())
          A.stop(), i.removeTrack(A);
        if (i.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        i = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      At.current = i;
      const m = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((T) => MediaRecorder.isTypeSupported(T)) || "", x = new MediaRecorder(i, m ? { mimeType: m } : void 0);
      va.current = [], x.ondataavailable = (T) => {
        T.data && T.data.size > 0 && va.current.push(T.data);
      }, x.onstop = async () => {
        try {
          const T = new Blob(va.current, {
            type: va.current[0]?.type || m || "audio/webm"
          });
          if (T.size === 0) {
            Yt("Recording was empty.");
            return;
          }
          const A = new FileReader();
          A.onerror = () => Yt("Could not read the recording."), A.onload = () => {
            const U = typeof A.result == "string" ? A.result : "", V = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${Ye === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - Za.current,
              mimeType: T.type || m || "audio/webm",
              audioDataUrl: U,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await Si(V), g((be) => [V, ...be]);
              } catch (be) {
                console.warn("Recording save failed", be), Yt("Could not save the recording. Try again.");
              }
            })(), fa(!1), lt(T, V.name);
          }, A.readAsDataURL(T);
        } finally {
          At.current?.getTracks().forEach((T) => T.stop()), At.current = null;
        }
      }, x.start(250), Jr.current = x, Za.current = Date.now(), Wr(0), Qa(!0), Kt.current = setInterval(() => {
        Wr(Date.now() - Za.current);
      }, 100);
    } catch (i) {
      Yt(i.message || "Could not start recording."), At.current?.getTracks().forEach((l) => l.stop()), At.current = null, Qa(!1);
    }
  }, un = () => {
    const i = Jr.current;
    i && i.state !== "inactive" && i.stop(), Kt.current && clearInterval(Kt.current), Qa(!1);
  };
  ae(() => () => {
    At.current?.getTracks().forEach((i) => i.stop()), Kt.current && clearInterval(Kt.current);
  }, []);
  const pn = (i) => {
    const l = i.target.files?.[0];
    if (i.target.value = "", !!l) {
      if (l.size > 50 * 1024 * 1024) {
        q("Reference audio is too big. Max 50 MB.");
        return;
      }
      lt(l, l.name);
    }
  }, mn = (i) => {
    it(!1), lt(i.audioDataUrl, i.name);
  }, hn = () => {
    it(!0), Fo().then((i) => g(i)).catch(() => {
    });
  }, gn = () => nt(!0), yn = (i) => {
    if (nt(!1), !i.audioDataUrl) return;
    const l = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    lt(i.audioDataUrl, `${l}.mp3`);
  }, bn = () => {
    xe(null), Ae(null), Te(null);
  }, fn = () => {
    aa.current?.abort(), He("idle");
  }, ct = L(async (i, l, m) => {
    if (!W) throw new Error("No endpoint connected");
    const x = (de) => {
      const _e = de, $ = _e.choices?.[0], se = [
        $?.message?.content,
        $?.delta?.content,
        $?.text,
        _e.output_text
      ];
      for (const ee of se)
        if (typeof ee == "string" && ee.trim().length > 0) return ee.trim();
      return "";
    }, T = (de) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(de), A = /* @__PURE__ */ new Set(), U = [], V = (de) => {
      de && !A.has(de) && (A.add(de), U.push(de));
    };
    if (V(W.models.lyricsBackup), W.models.allIds.filter(T).forEach(V), U.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const be = typeof l == "string" ? l : JSON.stringify(l), $e = m?.temperature ?? 0.5, vt = Math.max(m?.maxTokens ?? 800, 400), Fe = 45e3;
    return Ya(U, async (de) => {
      const _e = Bt(m?.signal, Fe);
      let $;
      try {
        $ = await fetch(`${W.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${W.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: de,
            messages: [
              { role: "system", content: i },
              { role: "user", content: be }
            ],
            temperature: $e,
            max_tokens: vt
          }),
          signal: _e.signal
        });
      } catch (pt) {
        throw pt.name === "TimeoutError" ? new Error(`AI assist timed out after ${Fe / 1e3}s.`) : pt;
      } finally {
        _e.dispose();
      }
      if (!$.ok) {
        const pt = await $.text().catch(() => "");
        throw new ke($.status, pt, `AI assist HTTP ${$.status}: ${pt.slice(0, 200)}`);
      }
      const se = await $.json(), ee = x(se);
      if (!ee)
        throw console.warn("[Juli3ta] empty AI assist content from", de, se), new ke(502, "", `Model "${de}" returned empty content`);
      return ee.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [W]), vn = L(async () => {
    if (W) {
      gt(!0), q(null);
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
        ce.current?.abort(), ce.current = new AbortController();
        const l = await ct(i, {
          theme: y || null,
          style: M || null,
          lyrics: N ? N.slice(0, 1500) : null,
          existing_specs: $t(G) > 0 ? G : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: ce.current.signal
        }), m = Ri(l) ?? l;
        let x;
        try {
          x = JSON.parse(m);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${l.slice(0, 160)}`);
        }
        Ee((T) => ({ ...x, intent: T.intent }));
      } catch (i) {
        q(i.message || "Optimize failed.");
      } finally {
        gt(!1);
      }
    }
  }, [W, y, M, N, G, ct]), [Me, ft] = S(null), vo = L(async () => {
    if (!W) return;
    if (!W.models.image) {
      q(`This endpoint (${W.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (Ge) return;
    ce.current?.abort(), ce.current = new AbortController();
    const i = ce.current.signal;
    Jt(!0), q(null);
    try {
      const l = (ie.trim() || Ha(R, y, M)).slice(0, 1500), m = await Rr(W, l, i);
      if (i.aborted) return;
      P(m), ge && ra.current?.(ge, m);
    } catch (l) {
      if (l.name === "AbortError") return;
      q(l.message || "Cover-art generation failed.");
    } finally {
      Jt(!1);
    }
  }, [W, ie, R, y, M, Ge, ge]), xo = L((i) => {
    if (!i.type.startsWith("image/")) {
      q("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (i.size > 4 * 1024 * 1024) {
      q("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const l = new FileReader();
    l.onerror = () => q("Could not read that image file."), l.onload = () => {
      const m = l.result;
      typeof m == "string" && m.startsWith("data:image/") && (P(m), ge && ra.current?.(ge, m));
    }, l.readAsDataURL(i);
  }, [ge]), xn = L(async () => {
    if (!Me) {
      ft("theme"), q(null);
      try {
        const i = "You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.";
        ce.current?.abort(), ce.current = new AbortController();
        const l = await ct(i, {
          style: M || "pop",
          existing_theme: y || null
        }, { temperature: 0.85, maxTokens: 200, signal: ce.current.signal });
        C(l);
      } catch (i) {
        q(i.message || "Theme inspiration failed.");
      } finally {
        ft(null);
      }
    }
  }, [Me, ct, M, y]), wn = L(async () => {
    if (!Me) {
      ft("style"), q(null);
      try {
        const i = 'You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".';
        ce.current?.abort(), ce.current = new AbortController();
        const l = await ct(i, {
          theme: y || "a quiet evening",
          existing_style: M || null
        }, { temperature: 0.7, maxTokens: 120, signal: ce.current.signal });
        O(l.replace(/^["']|["']$/g, ""));
      } catch (i) {
        q(i.message || "Style suggestion failed.");
      } finally {
        ft(null);
      }
    }
  }, [Me, ct, y, M]), kn = L(async () => {
    if (!Me) {
      if (!N.trim()) {
        q("Nothing to polish — write some lyrics first.");
        return;
      }
      ft("lyrics"), q(null);
      try {
        const i = "You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.";
        ce.current?.abort(), ce.current = new AbortController();
        const l = await ct(i, {
          style: M || null,
          lyrics: N
        }, { temperature: 0.6, maxTokens: 1200, signal: ce.current.signal });
        if (l.length > Dt) {
          q(`Polished lyrics exceeded ${Dt} chars (${l.length}). Trimming the original first might help.`);
          return;
        }
        k(l);
      } catch (i) {
        q(i.message || "Lyrics polish failed.");
      } finally {
        ft(null);
      }
    }
  }, [Me, ct, M, N]), Sn = (i) => {
    O((l) => l ? `${l}, ${i.toLowerCase()}` : i.toLowerCase());
  }, pr = () => {
    const i = [
      "Late-night coding session, neon city skyline, focus and flow.",
      "Sunday-morning coffee, soft rain, lo-fi piano.",
      "Synthwave anthem about shipping on Friday evening.",
      "Jazz ballad about a forgotten train station at 3am.",
      "Acoustic folk song about a long road trip with old friends.",
      "Cinematic orchestral piece for a heroic underdog scene.",
      "Upbeat pop anthem about finishing a hard project."
    ];
    C(i[Math.floor(Math.random() * i.length)]);
  }, Tn = () => {
    const i = _ ?? Q.state.trackId ?? ut[0]?.id ?? we[0]?.id ?? null, l = i ? jt.find((m) => m.id === i) ?? null : null;
    l && Rt(l), f("creator"), pr();
  }, wo = L((i) => {
    ze((l) => l.filter((m) => m.id !== i)), Il(i).catch((l) => console.warn("Track cache delete failed:", l)), wc(i).catch((l) => console.warn("Track file delete failed:", l));
  }, []), _n = L(async () => {
    if (!Sa) {
      ho(!0);
      try {
        const i = await kc();
        ta(i), d({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: i,
          isRead: !1
        });
      } catch (i) {
        Z(`Could not open JULI3TA folder — ${i.message || i}`);
      } finally {
        ho(!1);
      }
    }
  }, [d, Sa]), Ca = L(async (i, l) => {
    const m = l.trim().slice(0, 200) || "Untitled";
    ze((x) => x.map((T) => T.id === i ? { ...T, title: m } : T));
    try {
      await Ml(i, m), Z(null);
    } catch (x) {
      const T = x.message || "Database write failed";
      Z(`Couldn't rename track — ${T}.`);
    }
  }, []), mr = L(async (i, l) => {
    ze((m) => m.map((x) => x.id === i ? { ...x, coverDataUrl: l } : x));
    try {
      await Rl(i, l), Z(null);
    } catch (m) {
      const x = m.message || "Database write failed";
      Z(`Couldn't save cover art — ${x}.`);
    }
  }, []);
  ae(() => {
    ra.current = mr;
  }, [mr]);
  const ko = L(async (i, l) => {
    ze((m) => m.map((x) => x.id === i ? { ...x, styleTags: l || "—" } : x));
    try {
      await jl(i, l), Z(null);
    } catch (m) {
      const x = m.message || "Database write failed";
      Z(`Couldn't save style — ${x}.`);
    }
  }, []), So = L(async (i, l) => {
    ze((m) => m.map((x) => x.id === i ? { ...x, lyricsPreview: l } : x));
    try {
      await Pl(i, l), Z(null);
    } catch (m) {
      const x = m.message || "Database write failed";
      Z(`Couldn't save lyrics — ${x}.`);
    }
  }, []), To = L(async (i, l) => {
    ze((m) => m.map((x) => x.id === i ? { ...x, specsJson: l } : x));
    try {
      await Dl(i, l), Z(null);
    } catch (m) {
      const x = m.message || "Database write failed";
      Z(`Couldn't save specs — ${x}.`);
    }
  }, []), _o = L(async (i, l) => {
    ze((m) => m.map((x) => x.id === i ? { ...x, theme: l } : x));
    try {
      await Ul(i, l), Z(null);
    } catch (m) {
      const x = m.message || "Database write failed";
      Z(`Couldn't save theme — ${x}.`);
    }
  }, []);
  ae(() => {
    if (!ge) return;
    const i = ge, l = setTimeout(() => {
      const m = yt.find((be) => be.id === i);
      if (!m) return;
      const x = R.trim() || m.title, T = M.trim(), A = y, U = $t(G) > 0 ? JSON.stringify(G) : "", V = m.styleTags === "—" ? "" : m.styleTags || "";
      m.title !== x && Ca(i, x), V !== T && ko(i, T), (m.lyricsPreview || "") !== N && So(i, N), (m.specsJson || "") !== U && To(i, U), (m.theme || "") !== A && _o(i, A);
    }, 600);
    return () => clearTimeout(l);
  }, [ge, R, M, y, N, G, yt, Ca, ko, So, To, _o]);
  const [No, Co] = S(null), [Nn, Eo] = S(!1), Rt = L((i) => {
    k(i.lyricsPreview ?? ""), O(i.styleTags && i.styleTags !== "—" ? i.styleTags : ""), C(i.theme ?? "");
    const l = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (F(l), rt(!1), i.specsJson)
      try {
        Ee(JSON.parse(i.specsJson));
      } catch {
        Ee({});
      }
    else
      Ee({});
    P(i.coverDataUrl ?? ""), Je(""), ya(i.id), q(null), D(null), rt(!1), ve(i) ? i.source === "youtube" ? (h("restyle"), xe(null), Ae(`${l}.mp3`), Te("Resolving streamed audio…"), ot(!0), (async () => {
      try {
        const x = i.externalId || "";
        if (!x) throw new Error("Missing source identifier.");
        const T = la(x), A = Ze[T], U = A && Date.now() - A.resolvedAt < 5400 * 1e3 ? A.src : (await wr(x)).proxyUrl;
        await lt(U, `${l}.mp3`);
      } catch (x) {
        ot(!1), xe(null), Ae(null), Te(null), q(`Could not load streamed track for restyle: ${x.message || "unknown error"}`);
      }
    })()) : (h("restyle"), lt(i.audioDataUrl, `${l}.mp3`)) : (xe(null), Ae(null), Te(null), h("lyricsOnly"));
  }, [lt, Ze]), Ao = L((i) => {
    const l = oa(i);
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
  }, [oa, c, d, a]), Ea = L((i, l, m, x) => {
    const T = o.ensureUserFolder("Desktop");
    if (!T) return;
    const A = o.findChildByName(T, i);
    let U;
    if (A)
      m.refTrackId || o.writeFile(A.id, l), U = A.id;
    else {
      U = o.createFile(T, i, l, m);
      const V = Array.from(x).reduce((vt, Fe) => vt + Fe.charCodeAt(0), 0), be = V % 6 + 1, $e = Math.floor(V / 6) % 4;
      c({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: i,
          icon: wl(i),
          fileSystemNodeId: U,
          position: { x: 16 + be * 80, y: 16 + $e * 90 },
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
  }, [o, c, d, a]), Cn = L((i) => {
    if (!i.audioDataUrl) return;
    const l = ja(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Ea(`${l}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: i.id }, i.id);
  }, [Ea]), En = L((i) => {
    if (!i.lyricsPreview) return;
    const l = ja(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Ea(`${l}.lyrics.txt`, i.lyricsPreview, { mimeType: "text/plain" }, `${i.id}-lyrics`);
  }, [Ea]), An = L((i) => {
    je(!1), f("player"), E(i.id);
  }, []), et = L((i) => {
    const l = i.dataTransfer.getData(ua);
    if (!l) return null;
    try {
      return JSON.parse(l);
    } catch {
      return null;
    }
  }, []), Ln = L((i) => {
    const l = et(i);
    if (l && l.lyricsPreview) {
      i.preventDefault(), k(l.lyricsPreview);
      const m = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !R.trim() && m && F(m), !M.trim() && l.styleTags && l.styleTags !== "—" && O(l.styleTags);
      return;
    }
  }, [et, R, M]), zn = L((i) => {
    const l = et(i);
    l && l.styleTags && l.styleTags !== "—" && (i.preventDefault(), O((m) => m ? `${m}, ${l.styleTags}` : l.styleTags));
  }, [et]), In = L((i) => {
    const l = et(i);
    if (l) {
      i.preventDefault();
      const m = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), x = l.styleTags && l.styleTags !== "—" ? `Inspired by "${m}" — ${l.styleTags}` : `Inspired by "${m}"`;
      C(x);
    }
  }, [et]), Mn = L((i) => {
    const l = et(i);
    l && (i.preventDefault(), F(l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [et]), Aa = (i) => {
    i.dataTransfer.types.includes(ua) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
  }, Lo = N.length, Rn = M.length, J = Lt !== "idle", jn = ue(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            aa.current?.abort(), ce.current?.abort(), Na.current = !1, h("compose"), C(""), k(""), O(""), F(""), Ee({}), D(null), rt(!1), P(""), Je(""), st(!1), xe(null), Ae(null), Te(null), q(null), Z(null), He("idle"), zt(0), ft(null), Jt(!1), gt(!1), ya(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => pr() },
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
          { id: "open-help", label: "How it works…", onSelect: () => u(!0) },
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => cr(!0) }
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
  bl(r?.id ?? null, jn);
  const dt = ue(
    () => yt.filter(zi),
    [yt]
  ), ut = ue(() => {
    let i = dt;
    Ke === "songs" ? i = i.filter((m) => ve(m) && !/\(restyle\)\s*$/i.test(m.title) && !/\(lyrics\)\s*$/i.test(m.title)) : Ke === "restyles" ? i = i.filter((m) => /\(restyle\)\s*$/i.test(m.title)) : Ke === "lyrics" && (i = i.filter((m) => !ve(m) || /\(lyrics\)\s*$/i.test(m.title)));
    const l = Ie.trim().toLowerCase();
    return l ? i.filter((m) => m.title.toLowerCase().includes(l) || m.styleTags.toLowerCase().includes(l)) : i;
  }, [dt, Ie, Ke]), hr = ue(() => {
    let i = we;
    bt === "favorites" && (i = i.filter((m) => wa.has(m.id)));
    const l = Ie.trim().toLowerCase();
    return l ? i.filter((m) => m.title.toLowerCase().includes(l) || (m.artist || "").toLowerCase().includes(l) || (m.album || "").toLowerCase().includes(l)) : i;
  }, [we, bt, Ie, wa]), ia = L((i) => {
    i.slice(0, 4).forEach((l) => {
      const m = la(l.id), x = Ze[m];
      x && Date.now() - x.resolvedAt < 5400 * 1e3 || sr.current.has(l.id) || (sr.current.add(l.id), io((T) => new Set(T).add(l.id)), wr(l.id).then((T) => {
        oo((A) => ({
          ...A,
          [m]: { src: T.proxyUrl, resolvedAt: Date.now() }
        }));
      }).catch(() => {
      }).finally(() => {
        sr.current.delete(l.id), io((T) => {
          const A = new Set(T);
          return A.delete(l.id), A;
        });
      }));
    });
  }, [Ze]);
  ae(() => {
    if (!Xe) return;
    const i = new AbortController();
    return Promise.allSettled([
      yc(i.signal),
      Wo(i.signal),
      qo(i.signal)
    ]).then(([l, m, x]) => {
      l.status === "fulfilled" ? to(l.value) : to(null), m.status === "fulfilled" && ao(m.value), x.status === "fulfilled" && ro(x.value);
    }), () => i.abort();
  }, [Xe]), ae(() => {
    if (!Xe) return;
    const i = (l) => {
      l.key === "Escape" && je(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [Xe]), ae(() => {
    if (!Xe) return;
    const i = er.trim();
    if (i.length < 2) {
      const A = window.setTimeout(() => {
        tr([]), Qe(null), xa(!1);
      }, 0);
      return () => window.clearTimeout(A);
    }
    const l = `${ea}:${i.toLowerCase()}`, m = mo.current.get(l);
    if (m) {
      tr(m), xa(!1), Qe(null), ia(m);
      return;
    }
    const x = new AbortController(), T = setTimeout(() => {
      xa(!0), Qe(null);
      let A = nr.current.get(l);
      A || (A = xc(i, ea, 20, x.signal).then((U) => ea === "playlists" ? U.results.playlists : U.results.tracks).catch(() => vc(i, 20, x.signal)).finally(() => {
        nr.current.delete(l);
      }), nr.current.set(l, A)), A.then((U) => {
        mo.current.set(l, U), tr(U), ia(U), U.length > 0 && eo(i);
      }).catch((U) => {
        x.signal.aborted || Qe(U.message || "Music search failed.");
      }).finally(() => {
        x.signal.aborted || xa(!1);
      });
    }, 120);
    return () => {
      x.abort(), clearTimeout(T);
    };
  }, [er, ea, Xe, ia, eo]);
  const La = L(async () => {
    const [i, l] = await Promise.allSettled([
      Wo(),
      qo()
    ]);
    i.status === "fulfilled" && ao(i.value), l.status === "fulfilled" && ro(l.value);
  }, []), Pn = L(async (i, l) => {
    await bc(i, l), await La(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${i} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, La]), Dn = L(async (i) => {
    await fc(i), await La(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${i} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [d, La]), Un = ue(
    () => new Set(we.filter((i) => i.externalId).map((i) => i.externalId)),
    [we]
  ), za = L((i, l) => {
    const m = Mi(i.title, i.channel);
    return {
      id: l?.id ?? la(i.id),
      title: m.song || i.title || "Untitled",
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
      thumbnailUrl: i.thumbnailUrl || Wa(i.id),
      artist: m.artist || i.channel || "Unknown",
      album: i.channel ?? ""
    };
  }, []), On = L(async (i, l) => {
    if (i.audioDataUrl && !l?.force) return i.audioDataUrl;
    if (!Ii(i) || !i.externalId) return i.audioDataUrl || null;
    const m = la(i.externalId), x = Ze[m] ?? Ze[i.id];
    if (!l?.force && x && Date.now() - x.resolvedAt < 5400 * 1e3) return x.src;
    const T = await wr(i.externalId);
    return oo((A) => ({ ...A, [m]: { src: T.proxyUrl, resolvedAt: Date.now() } })), T.proxyUrl;
  }, [Ze]), jt = ue(
    () => [...lo, ...we, ...ut],
    [lo, we, ut]
  ), zo = te(null), Q = nd(jt, zo, On);
  ae(() => {
    if (b !== "player") return;
    const i = (l) => {
      const m = l.target;
      if (m) {
        const A = m.tagName;
        if (A === "INPUT" || A === "TEXTAREA" || A === "SELECT" || m.isContentEditable) return;
      }
      const x = Q.state.trackId;
      if (!x) return;
      const T = jt.find((A) => A.id === x);
      if (T)
        switch (l.key) {
          case " ":
            l.preventDefault(), Q.toggle(T);
            break;
          case "ArrowLeft":
            l.preventDefault(), Q.seek(Math.max(0, Q.state.positionMs - 5e3));
            break;
          case "ArrowRight":
            l.preventDefault(), Q.seek(Math.min(Q.state.durationMs || 0, Q.state.positionMs + 5e3));
            break;
          case "ArrowUp":
            l.preventDefault(), Q.setVolume(Math.min(1, Q.state.volume + 0.1));
            break;
          case "ArrowDown":
            l.preventDefault(), Q.setVolume(Math.max(0, Q.state.volume - 0.1));
            break;
        }
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [b, Q, jt]);
  const Hn = L((i) => {
    const l = i.items.find(ve);
    l && (co((m) => [
      ...i.items.filter((x) => !m.some((T) => T.id === x.id)),
      ...m
    ]), E(l.id), je(!1), f("player"), Q.play(l));
  }, [Q]), $n = L(async (i) => {
    await Ql(i), Mt(await na());
  }, []), Fn = L((i) => {
    Qe(null), no(i.id);
    const l = la(i.id), m = Ze[l], x = za(
      i,
      m ? { id: l, audioDataUrl: m.src } : void 0
    );
    co((T) => [x, ...T.filter((A) => A.id !== x.id)]), E(x.id), f("player"), Q.play(x), no(null);
  }, [Q, za, Ze]), Bn = L(async (i) => {
    so(i.id);
    const l = za(i);
    try {
      await ki(l), ar((m) => [l, ...m.filter((x) => x.id !== l.id)]), E(l.id), Xr("library"), Qr("all"), ia([i]), or.length > 0;
    } catch (m) {
      Qe(m.message || "Could not save track.");
    } finally {
      so(null);
    }
  }, [za, ia, or.length]), Io = L((i) => {
    rr((l) => {
      const m = new Set(l);
      return m.has(i.id) ? m.delete(i.id) : m.add(i.id), m;
    }), Kl({
      kind: "track",
      entityId: i.id,
      provider: i.source ?? "youtube",
      title: i.title
    }).catch((l) => console.warn("Favorite toggle failed:", l));
  }, []), Wn = L(async () => {
    const i = ir.trim() || "New Playlist";
    po(!0);
    try {
      const l = await Xl(i);
      Mt((m) => [l, ...m]), uo("");
    } catch (l) {
      Qe(l.message || "Could not create playlist.");
    } finally {
      po(!1);
    }
  }, [ir]), qn = L(async (i, l) => {
    try {
      await Zl(i, l);
      const m = await na();
      Mt(m);
    } catch (m) {
      Qe(m.message || "Could not add to playlist.");
    }
  }, []), Jn = L(async (i, l) => {
    try {
      await ec(i, l);
      const m = await na();
      Mt(m);
    } catch (m) {
      Qe(m.message || "Could not remove from playlist.");
    }
  }, []), Mo = L((i) => {
    ar((l) => l.filter((m) => m.id !== i.id)), rr((l) => {
      const m = new Set(l);
      return m.delete(i.id), m;
    }), Gl(i.id).then(() => na().then(Mt)).catch((l) => console.warn("Library track delete failed:", l));
  }, []), Ro = L((i) => {
    E(i.id), je(!1), f("player");
  }, []), Gn = L((i) => {
    Rt(i), je(!1), f("creator");
  }, [Rt]);
  return W ? /* @__PURE__ */ s("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
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
                /* @__PURE__ */ t(Pe, { size: 13, style: { color: "var(--accent-primary)" } }),
                /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA" }),
                /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: Re === "mywork" ? Ie.trim() || Ke !== "all" ? `${ut.length} / ${dt.length}` : a(
                    dt.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: dt.length }
                  ) : Ie.trim() || bt !== "all" ? `${hr.length} / ${we.length}` : `${we.length} saved` }),
                  Re === "mywork" && /* @__PURE__ */ s(he, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: _n,
                        disabled: Sa,
                        className: "flex items-center justify-center transition-all",
                        style: {
                          width: 22,
                          height: 22,
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-window)",
                          color: "var(--text-secondary)",
                          opacity: Sa ? 0.5 : 1
                        },
                        title: ka ? `Open real folder: ${ka}` : "Open real JULI3TA folder",
                        children: /* @__PURE__ */ t(_s, { size: 11 })
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
                              onClick: () => Kr("cards"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: Qt === "cards" ? "var(--bg-hover)" : "transparent",
                                color: Qt === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "Cards",
                              children: /* @__PURE__ */ t(Er, { size: 11 })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              onClick: () => Kr("list"),
                              className: "flex items-center justify-center transition-all",
                              style: {
                                width: 22,
                                height: 22,
                                background: Qt === "list" ? "var(--bg-hover)" : "transparent",
                                color: Qt === "list" ? "var(--text-primary)" : "var(--text-disabled)"
                              },
                              title: "List",
                              children: /* @__PURE__ */ t(Tt, { size: 11 })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  Re === "library" && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        je(!0), Zt("search");
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
                      children: /* @__PURE__ */ t(at, { size: 11 })
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
                { id: "mywork", label: "My Work" },
                { id: "library", label: "Library" }
              ].map((i) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Xr(i.id),
                  className: "flex-1 rounded-md transition-all",
                  style: {
                    height: 26,
                    fontSize: 11,
                    fontWeight: Re === i.id ? 700 : 600,
                    color: Re === i.id ? "white" : "var(--text-secondary)",
                    background: Re === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
                    border: "none"
                  },
                  children: i.label
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
                opacity: Re === "mywork" ? dt.length === 0 ? 0.4 : 1 : we.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(at, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: Ie,
                    onChange: (i) => Yr(i.target.value),
                    placeholder: Re === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: Re === "mywork" ? dt.length === 0 : we.length === 0
                  }
                ),
                Ie && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Yr(""),
                    className: "opacity-60 hover:opacity-100 px-1",
                    title: "Clear search",
                    children: /* @__PURE__ */ t(me, { size: 11 })
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
              children: Re === "mywork" ? [
                { id: "all", label: "All" },
                { id: "songs", label: "Songs" },
                { id: "restyles", label: "Restyles" },
                { id: "lyrics", label: "Lyrics" }
              ].map((i) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Oi(i.id),
                  className: "rounded-full px-2.5 flex-shrink-0 transition-all",
                  style: {
                    height: 22,
                    fontSize: 10,
                    fontWeight: Ke === i.id ? 800 : 600,
                    color: Ke === i.id ? "white" : "var(--text-secondary)",
                    background: Ke === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: i.label
                },
                i.id
              )) : [
                { id: "all", label: "All" },
                { id: "favorites", label: "Favorites" }
              ].map((i) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Qr(i.id),
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
              ))
            }
          ),
          Re === "mywork" ? dt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t(Tt, { size: 18, style: { color: "var(--text-disabled)" } })
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
                  /* @__PURE__ */ t(Pe, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(qe, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : ut.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(at, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ie ? a("musiccreator.gallery.searchEmpty", { q: Ie }) : `No ${Ke} yet.` })
          ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Qt === "list" ? /* @__PURE__ */ t(
            yd,
            {
              tracks: ut,
              player: Q,
              onLoad: Rt,
              onOpenLyrics: Ao,
              onDelete: wo,
              onRename: Ca
            }
          ) : ut.map((i) => /* @__PURE__ */ t(
            fd,
            {
              track: i,
              onDelete: wo,
              onLoad: Rt,
              onOpenLyrics: Ao,
              onSaveSongToDesktop: Cn,
              onSaveLyricsToDesktop: En,
              onPlayInPlayer: An,
              onRename: Ca,
              onEditCover: Co,
              onSelect: Ro,
              selected: b === "player" && _ === i.id,
              player: Q
            },
            i.id
          )) }) : (
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
                  children: /* @__PURE__ */ t(Pr, { size: 18, style: { color: "var(--text-disabled)" } })
                }
              ),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: "Your saved music lives here" }),
              /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: "Click the magnifier above to search, then add tracks you want to keep." }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    je(!0), Zt("search");
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
                    /* @__PURE__ */ t(at, { size: 11 }),
                    " Search music"
                  ]
                }
              )
            ] }) : hr.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(at, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ie ? `No matches for "${Ie}"` : `No ${bt} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: hr.map((i) => /* @__PURE__ */ t(
              vd,
              {
                track: i,
                player: Q,
                selected: b === "player" && _ === i.id,
                isFavorite: wa.has(i.id),
                onOpenInPlayer: Ro,
                onRemix: Gn,
                onToggleFavorite: Io,
                onRemove: Mo
              },
              i.id
            )) })
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
              /* @__PURE__ */ t(hi, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
              /* @__PURE__ */ t(
                "img",
                {
                  src: v === "light" ? "/brand/juli3ta/wordmark-ink-transparent.png" : "/brand/juli3ta/wordmark-cream-transparent.png",
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
                  { id: "creator", icon: /* @__PURE__ */ t(Pe, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(pe, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
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
                    je((i) => !i), Zt("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: Xe ? "white" : "var(--text-secondary)",
                    background: Xe ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(at, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(gd, { endpoint: W, endpoints: _a, onSwitch: sn }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: b === "player" ? Tn : pr,
                  disabled: J,
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
                    /* @__PURE__ */ t(Qs, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => cr(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(di, { size: 14 })
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
                  children: /* @__PURE__ */ t(gs, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      b === "player" && (Xe ? /* @__PURE__ */ t(
        zd,
        {
          tab: Hi,
          onTabChange: Zt,
          query: er,
          onQueryChange: $i,
          searchHistory: Fi,
          onClearSearchHistory: () => {
            Zr([]);
            try {
              localStorage.removeItem("juli3ta:searchHistory");
            } catch {
            }
          },
          resultType: ea,
          onResultTypeChange: Bi,
          results: Wi,
          busy: qi,
          error: Ji,
          status: Gi,
          providers: Vi,
          connectors: Yi,
          libraryTracks: we,
          playlists: or,
          playlistNameDraft: ir,
          playlistBusy: Zi,
          favoriteIds: wa,
          warmupIds: Ki,
          previewBusyId: Xi,
          addBusyId: Qi,
          savedYoutubeIds: Un,
          player: Q,
          onPreview: Fn,
          onAdd: Bn,
          onOpenTrack: (i) => {
            E(i.id), je(!1), f("player");
          },
          onToggleFavorite: Io,
          onRemoveLibraryTrack: Mo,
          onPlaylistNameDraftChange: uo,
          onCreatePlaylist: Wn,
          onAddTrackToPlaylist: qn,
          onRemoveTrackFromPlaylist: Jn,
          onPlayPlaylist: Hn,
          onDeletePlaylist: $n,
          onConfigureConnector: Pn,
          onDisconnectConnector: Dn,
          onClose: () => je(!1)
        }
      ) : /* @__PURE__ */ t(
        Ld,
        {
          track: (() => {
            const i = _ ?? Q.state.trackId ?? ut[0]?.id ?? we[0]?.id ?? null;
            return i ? jt.find((l) => l.id === i) ?? null : null;
          })(),
          player: Q,
          restyleOriginal: ji,
          onSwitchToCreator: () => f("creator"),
          onSearchMusic: () => {
            f("player"), je(!0), Zt("search");
          },
          onEditInCreator: (i) => {
            Rt(i), f("creator");
          }
        }
      )),
      b === "creator" && /* @__PURE__ */ s(he, { children: [
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
                { id: "compose", icon: /* @__PURE__ */ t(ga, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(_t, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t($a, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((i) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => h(i.id),
                  disabled: J,
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
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: J ? /* @__PURE__ */ s(
                "button",
                {
                  onClick: fn,
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
                    /* @__PURE__ */ t(K, { size: 12, className: "animate-spin" }),
                    a("musiccreator.button.cancel")
                  ]
                }
              ) : (() => {
                const i = p === "restyle" && (ye || !Ue);
                return /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: ln,
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
                    title: i ? ye ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      i && ye ? /* @__PURE__ */ t(K, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(_t, { size: 13 }),
                      p === "restyle" ? ye ? "Analyzing audio…" : "Restyle Song" : p === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
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
                  onChange: (i) => F(i.target.value),
                  onDragOver: Aa,
                  onDrop: Mn,
                  placeholder: a("musiccreator.songName.placeholder"),
                  disabled: J,
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
                      Zo,
                      {
                        id: "juli3ta-instrumental",
                        checked: oe,
                        onChange: rt,
                        disabled: J
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (J || Xt || It) && /* @__PURE__ */ s(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: Xt ? "rgba(255, 82, 82, 0.06)" : It ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              J && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${Ui * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: Xt ? /* @__PURE__ */ s(he, { children: [
                /* @__PURE__ */ t(ma, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: Xt, children: Xt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => q(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(me, { size: 11 })
                  }
                )
              ] }) : J ? /* @__PURE__ */ s(he, { children: [
                /* @__PURE__ */ t(K, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: Lt === "lyrics" ? Xo[Gr % Xo.length] : Qo[Gr % Qo.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: Lt === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : /* @__PURE__ */ s(he, { children: [
                /* @__PURE__ */ t(ma, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: It ?? "", children: It }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Z(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: "Dismiss",
                    children: /* @__PURE__ */ t(me, { size: 11 })
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
                i.dataTransfer.types.includes(ua) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
              },
              onDrop: (i) => {
                const l = et(i);
                l && l.hasAudio && (i.preventDefault(), (async () => {
                  const m = await zl(l.id);
                  if (!m?.audioDataUrl) {
                    q("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  lt(m.audioDataUrl, `${l.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                Ve ? /* @__PURE__ */ s(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${ye ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                        ye ? /* @__PURE__ */ t(K, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(Tt, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: Ve }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: bn,
                            disabled: J || ye,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t(Ft, { size: 14 })
                          }
                        )
                      ] }),
                      (ye || Et) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: ye ? "🔍  Listening for the best part…" : `✨  ${Et}` })
                    ]
                  }
                ) : /* @__PURE__ */ s("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: () => fa(!0),
                      disabled: J,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Record new audio (mic or tab)",
                      children: [
                        /* @__PURE__ */ t(qe, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: cn,
                      disabled: J,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t(Tt, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: gn,
                      disabled: J || yt.filter((i) => i.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(St, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: yt.filter((i) => i.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: hn,
                      disabled: J,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50 relative",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      title: "Pick a Voice Recorder clip",
                      children: [
                        /* @__PURE__ */ t(qe, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: Vt.length }) })
                      ]
                    }
                  )
                ] }),
                !Ve && /* @__PURE__ */ s("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => $r("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Le === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Le === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Le === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(Pe, { size: 13, style: { color: Le === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
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
                        onClick: () => $r("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Le === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Le === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Le === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(Er, { size: 13, style: { color: Le === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 best parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                Di && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !Oe && fa(!1),
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
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.4 }, children: "Capture 1–3 minutes of music for best results. JULI3TA will auto-extract the iconic parts." })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "px-5 pt-3", children: [
                            /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                              /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !Oe && Fr("mic"),
                                  disabled: Oe,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: Ye === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${Ye === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(qe, { size: 14 }),
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
                                  onClick: () => !Oe && Fr("tab"),
                                  disabled: Oe,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: Ye === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${Ye === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Ar, { size: 14 }),
                                    /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            Ye === "tab" && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
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
                                  Math.floor(Br / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor(Br / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            Oe ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: un,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(tl, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: dn,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: Ye === "tab" ? /* @__PURE__ */ t(Ar, { size: 28 }) : /* @__PURE__ */ t(qe, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: Oe ? Ye === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            qr && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: qr })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s(
                            "div",
                            {
                              className: "px-5 py-3 flex items-center justify-between",
                              style: { borderTop: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)" },
                              children: [
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: Oe ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !Oe && fa(!1),
                                    disabled: Oe,
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
                    ref: z,
                    type: "file",
                    accept: "audio/*",
                    onChange: pn,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick the best 30 s" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed to the most musical chunk."
                ] }),
                Xa && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => it(!1),
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
                                  /* @__PURE__ */ t(qe, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ s(
                                  "button",
                                  {
                                    onClick: () => it(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    children: [
                                      /* @__PURE__ */ t(Ft, { size: 14, style: { visibility: "hidden" } }),
                                      /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600 }, children: "×" })
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: Vt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(qe, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : Vt.map((i) => {
                            const l = i.durationMs / 1e3, m = l < 6;
                            return /* @__PURE__ */ s(
                              "button",
                              {
                                onClick: () => !m && mn(i),
                                disabled: m,
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
                                      children: /* @__PURE__ */ t(qe, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: i.name }),
                                    /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(l / 60),
                                      ":",
                                      Math.floor(l % 60).toString().padStart(2, "0"),
                                      m && " · too short for cover (need ≥6 s)"
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
                                i.preventDefault(), it(!1);
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
                Gt && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => nt(!1),
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
                                  /* @__PURE__ */ t(St, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => nt(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    title: "Close",
                                    children: /* @__PURE__ */ t(me, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const i = yt.filter((l) => l.audioDataUrl);
                            return i.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(St, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : i.map((l) => {
                              const m = l.durationMs / 1e3, x = m > 0 && m < 6, T = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !x && yn(l),
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
                                        children: !l.coverDataUrl && /* @__PURE__ */ t(St, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: T }),
                                      /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        m > 0 ? `${Math.floor(m / 60)}:${Math.floor(m % 60).toString().padStart(2, "0")}` : "—",
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
          /* @__PURE__ */ s(
            "div",
            {
              className: "grid gap-5 mb-5",
              style: { gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" },
              children: [
                /* @__PURE__ */ t(
                  ca,
                  {
                    label: a("musiccreator.theme.label"),
                    hint: a("musiccreator.theme.hint"),
                    headerExtra: /* @__PURE__ */ t(
                      _r,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: xn,
                        busy: Me === "theme",
                        disabled: J || Me !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: y,
                        onChange: (i) => C(i.target.value),
                        onDragOver: Aa,
                        onDrop: In,
                        placeholder: a("musiccreator.theme.placeholder"),
                        disabled: J,
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
                  ca,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${Rn} / ${Vc}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      _r,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: wn,
                        busy: Me === "style",
                        disabled: J || Me !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: M,
                        onChange: (i) => O(i.target.value),
                        onDragOver: Aa,
                        onDrop: zn,
                        placeholder: a("musiccreator.style.placeholder"),
                        disabled: J,
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
            /* @__PURE__ */ t(cd, { onPick: Sn, disabled: J }),
            /* @__PURE__ */ t(
              dd,
              {
                specs: G,
                onChange: Ee,
                disabled: J,
                onOptimize: vn,
                optimizing: ba
              }
            )
          ] }),
          /* @__PURE__ */ s(
            ca,
            {
              label: "Cover Art",
              hint: W?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ s("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  Zo,
                  {
                    checked: Ce,
                    onChange: Ka,
                    disabled: J || !W?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      onClick: () => Eo(!0),
                      disabled: J,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: Se ? `url(${Se}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: J ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !Se && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ha, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        Ge && /* @__PURE__ */ t(
                          "div",
                          {
                            className: "absolute inset-0 flex items-center justify-center",
                            style: { background: "rgba(0,0,0,0.5)" },
                            children: /* @__PURE__ */ t(K, { size: 20, className: "animate-spin", style: { color: "white" } })
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
                          onClick: vo,
                          disabled: J || Ge || !W?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: J || Ge || !W?.models.image ? "not-allowed" : "pointer"
                          },
                          title: W?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            Ge ? /* @__PURE__ */ t(K, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 11 }),
                            Se ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => H.current?.click(),
                          disabled: J,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-secondary)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Upload your own image (PNG/JPG/WebP, max 4 MB)",
                          children: [
                            /* @__PURE__ */ t(Dr, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      Se && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            P(""), ge && ra.current?.(ge, "");
                          },
                          disabled: J,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                          style: {
                            fontSize: 11,
                            color: "var(--text-disabled)",
                            background: "var(--bg-titlebar)",
                            border: "1px solid var(--border-subtle)"
                          },
                          title: "Remove the cover and fall back to the gradient placeholder",
                          children: [
                            /* @__PURE__ */ t(me, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => st((i) => !i),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            ne ? /* @__PURE__ */ t(ps, { size: 11 }) : /* @__PURE__ */ t(ci, { size: 11 }),
                            ne ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    ne && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: ie,
                        onChange: (i) => Je(i.target.value),
                        placeholder: Ha(R, y, M),
                        disabled: J,
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
                      l && xo(l), i.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          p !== "restyle" && !oe && /* @__PURE__ */ t(
            ca,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (G.intent ?? "").length > 0 ? `${(G.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: G.intent ?? "",
                  onChange: (i) => Ee((l) => ({ ...l, intent: i.target.value })),
                  placeholder: 'e.g. "first-person, mostly Spanish with one English chorus, mention rain, no clichés"',
                  disabled: J,
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
            ca,
            {
              label: a("musiccreator.lyrics.label"),
              counter: oe ? "instrumental — no vocals" : `${Lo} / ${Dt}`,
              counterDanger: !oe && Lo > Dt,
              className: "mb-5",
              headerExtra: oe ? void 0 : /* @__PURE__ */ t(
                _r,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: kn,
                  busy: Me === "lyrics",
                  disabled: J || Me !== null || !N.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: N,
                    onChange: (i) => k(i.target.value),
                    onDragOver: Aa,
                    onDrop: Ln,
                    placeholder: oe ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: J || oe,
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
                  Gc.map((i) => {
                    const l = I?.id === i.id;
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => {
                          l ? D(null) : (D(i), N.trim() || k(i.skeleton));
                        },
                        disabled: J,
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
                  I && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(sd, { player: Q, allTracks: jt }),
      /* @__PURE__ */ t("audio", { ref: zo, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      hl,
      {
        open: w,
        onClose: () => u(!1),
        onUseRecipe: (i, l) => {
          h("compose"), C(i), O(l);
        }
      }
    ),
    en && /* @__PURE__ */ t(
      Md,
      {
        settings: lr,
        endpoints: _a,
        onChange: tn,
        onClose: () => cr(!1)
      }
    ),
    No && /* @__PURE__ */ t(
      xd,
      {
        track: No,
        endpoint: W,
        onSave: mr,
        onClose: () => Co(null)
      }
    ),
    Nn && /* @__PURE__ */ t(
      wd,
      {
        songName: R,
        mode: p,
        theme: y,
        style: M,
        intent: G.intent ?? "",
        lyrics: N,
        specs: G,
        coverDataUrl: Se,
        endpoint: W,
        busy: Ge,
        onRegenerate: vo,
        onUpload: xo,
        onClear: () => {
          P(""), ge && ra.current?.(ge, "");
        },
        onClose: () => Eo(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(ld, { retrying: nn, onRetry: ur });
}
function Md({ settings: e, endpoints: a, onChange: r, onClose: o }) {
  const n = (c, d, v) => {
    const p = v.trim(), w = { ...e.overridesByEndpoint[c] ?? {} };
    p ? w[d] = p : delete w[d];
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
                  /* @__PURE__ */ t(di, { size: 14, style: { color: "var(--accent-primary)" } }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA Settings" }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: o,
                      className: "ml-auto flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                      style: { width: 24, height: 24, color: "var(--text-secondary)" },
                      title: "Close",
                      children: /* @__PURE__ */ t(me, { size: 14 })
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
                    /* @__PURE__ */ t(ma, { size: 14, style: { color: "#fbbf24" } }),
                    "No reachable endpoints yet — connect a Tytus pod or start local switchAILocal, then come back."
                  ]
                }
              ) : /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", children: a.map((c) => {
                const d = e.overridesByEndpoint[c.url] ?? {}, v = [
                  { key: "music", label: "Music", discovered: c.models.music, kind: "music" },
                  { key: "cover", label: "Restyle", discovered: c.models.cover, kind: "cover" },
                  { key: "lyrics", label: "Lyrics", discovered: c.models.lyrics, kind: "lyrics" },
                  { key: "lyricsBackup", label: "Lyrics fallback", discovered: c.models.lyricsBackup, kind: "chat" },
                  { key: "image", label: "Cover art", discovered: c.models.image, kind: "image" }
                ], p = (u) => /music|cover/i.test(u), h = (u) => /image|diffusion|dall-?e|flux|sdxl/i.test(u), w = (u) => u === "chat" ? c.models.allIds.filter((b) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(b)) : u === "image" ? c.models.allIds.filter(h) : c.models.allIds.filter(p);
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
                              background: qa(c),
                              boxShadow: `0 0 6px ${qa(c)}`
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
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: v.map((u) => {
                        const b = w(u.kind), f = d[u.key] ?? "";
                        return /* @__PURE__ */ s(Xn, { children: [
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
                              value: f,
                              onChange: (_) => n(c.url, u.key, _.target.value),
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
                                /* @__PURE__ */ t("option", { value: "", children: u.discovered ? `Auto · ${u.discovered}` : u.kind === "lyrics" ? "Auto · server-side (no model param)" : b.length === 0 ? "(no models match)" : "Auto · (no preferred match — pick one)" }),
                                b.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: b.map((_) => /* @__PURE__ */ t("option", { value: _, children: _ }, _)) })
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
function Ud(e) {
  const a = e.host.storage.current();
  return Al(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(Qn, { value: e, children: /* @__PURE__ */ t(Id, {}) });
  };
}
export {
  Ud as default
};
//# sourceMappingURL=index.js.map
