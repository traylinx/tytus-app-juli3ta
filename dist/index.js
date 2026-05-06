import { jsx as t, jsxs as n, Fragment as he } from "react/jsx-runtime";
import { createContext as ai, useContext as ri, forwardRef as oi, createElement as Cr, useState as S, useEffect as te, useMemo as ue, useRef as ee, useCallback as L, Fragment as Xn } from "react";
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
    className: s = "",
    children: c,
    iconNode: d,
    ...b
  }, p) => Cr(
    "svg",
    {
      ref: p,
      ...as,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(a) : r,
      className: ni("lucide", s),
      ...!c && !ts(b) && { "aria-hidden": "true" },
      ...b
    },
    [
      ...d.map(([g, k]) => Cr(g, k)),
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
const U = (e, a) => {
  const r = oi(
    ({ className: o, ...s }, c) => Cr(rs, {
      ref: c,
      iconNode: a,
      className: ni(
        `lucide-${Zn(jo(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
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
], is = U("album", os);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], pa = U("check", ns);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], si = U("chevron-down", ss);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Po = U("chevron-left", ls);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ds = U("chevron-right", cs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ps = U("chevron-up", us);
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
], ma = U("circle-alert", ms);
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
], gs = U("circle-question-mark", hs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], bs = U("copy", ys);
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
], St = U("disc-3", fs);
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
], xs = U("download", vs);
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
], jr = U("ellipsis-vertical", ws);
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
], li = U("external-link", ks);
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
], Tt = U("file-music", Ss);
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
], _s = U("folder-open", Ts);
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
], Pr = U("heart", Ns);
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
], ha = U("image", Cs);
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
], Er = U("layers", Es);
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
], Ls = U("list-music", As);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Y = U("loader-circle", zs);
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
], qe = U("mic", Is);
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
], Ar = U("monitor-speaker", Ms);
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
], Do = U("monitor", Rs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], ga = U("music-2", js);
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
], $a = U("notebook-text", Ps);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], ht = U("pause", Ds);
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
], ci = U("pencil", Us);
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
], pe = U("play", Os);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Lr = U("plus", Hs);
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
], Fs = U("radio", $s);
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
], Ws = U("refresh-cw", Bs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], at = U("search", qs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], di = U("settings-2", Js);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], Vs = U("shuffle", Gs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
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
], Pe = U("sparkles", Ys);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], Xs = U("square", Ks);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ft = U("trash-2", Qs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Dr = U("upload", Zs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], tl = U("user-round", el);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = [
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
], _t = U("wand-sparkles", al);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], me = U("x", rl), ol = {
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
}, il = {
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
}, Uo = { en: ol, es: il }, Ia = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", nl = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, o) => String(a[o] ?? `{${o}}`)) : e;
function Ct() {
  const { host: e } = Wt(), [a, r] = S(() => Ia(e.i18n?.locale));
  te(() => e.i18n?.onLocaleChange?.((s) => r(Ia(s))), [e]);
  const o = ue(() => (s, c) => {
    const d = e.i18n?.t?.(s, c);
    if (d && d !== s) return d;
    const b = Ia(a), p = Uo[b]?.[s] ?? Uo.en[s] ?? s;
    return nl(p, c);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (s) => r(Ia(s)),
    installLanguagePack: (s) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (s) => {
    }
  };
}
const sl = [
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
], ll = [
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
function cl({ recipe: e, onUse: a }) {
  const { t: r } = Ct(), [o, s] = S(!1), c = async () => {
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
function dl({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: o, language: s } = Ct(), [c, d] = S("start");
  if (!e) return null;
  const b = s === "es" ? ll : sl;
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
          onClick: (p) => p.stopPropagation(),
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
                        children: /* @__PURE__ */ t(St, { size: 18, style: { color: "white" } })
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
                      children: /* @__PURE__ */ t(me, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1 px-5 pt-3 flex-shrink-0", children: ["start", "recipes", "help"].map((p) => {
              const g = c === p;
              return /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => d(p),
                  className: "px-3 py-1.5 rounded-lg transition-all",
                  style: {
                    fontSize: 11,
                    fontWeight: g ? 600 : 500,
                    color: g ? "var(--text-primary)" : "var(--text-secondary)",
                    background: g ? "var(--bg-titlebar)" : "transparent",
                    border: g ? "1px solid var(--border-subtle)" : "1px solid transparent"
                  },
                  children: o(`julietaHelp.tab.${p}`)
                },
                p
              );
            }) }),
            /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", style: { paddingBottom: 96 }, children: [
              c === "start" && /* @__PURE__ */ n("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(Pt, { icon: /* @__PURE__ */ t(Pe, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(Ma, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(Ma, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(Ma, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(Ma, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(Pt, { icon: /* @__PURE__ */ t(_t, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ n("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(yr, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(yr, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(yr, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(Pt, { icon: /* @__PURE__ */ t(qe, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(ul, { body: o("julietaHelp.start.recorder.body") }),
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
                b.map((p) => /* @__PURE__ */ t(
                  cl,
                  {
                    recipe: p,
                    onUse: (g) => {
                      r(g.theme, g.style), a();
                    }
                  },
                  p.id
                ))
              ] }),
              c === "help" && /* @__PURE__ */ n("div", { className: "space-y-4", children: [
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
  return /* @__PURE__ */ n("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: a })
  ] });
}
function Ma({ n: e, title: a, body: r }) {
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
function yr({ emoji: e, name: a, body: r }) {
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
function ul({ body: e }) {
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
}, pl = () => {
  const { host: e } = Wt(), [a, r] = S(0), [o, s] = S(() => br(e.daemon?.state));
  return te(() => (s(br(e.daemon?.state)), e.daemon?.onStateChange?.((c) => s(br(c)))), [e, a]), ue(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((c) => c + 1)
  }), [o]);
}, ml = (e, a) => {
  const { host: r } = Wt();
  te(() => {
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
function hl() {
  return Wt().host.windows.current;
}
const ui = "juli3ta_standalone_vfs_v1", pi = () => Math.random().toString(36).slice(2) + Date.now().toString(36), wt = (e, a) => ({
  id: pi(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), gl = () => {
  const e = wt("/", null), a = wt("home", e.id), r = wt("user", a.id), o = wt("Desktop", r.id), s = wt("Music", r.id), c = wt("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, o, s, c].map((d) => [d.id, d])) };
}, Ra = () => {
  try {
    const a = localStorage.getItem(ui);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = gl();
  return Ua(e), e;
}, Ua = (e) => {
  try {
    localStorage.setItem(ui, JSON.stringify(e));
  } catch {
  }
}, yl = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), bl = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function fl() {
  return {
    ensureUserFolder(a) {
      const r = Ra(), o = yl(a);
      let s = Object.values(r.nodes).find((c) => c.type === "folder" && c.name === o);
      if (!s) {
        const c = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        s = wt(o, c?.id ?? null), r.nodes[s.id] = s, Ua(r);
      }
      return s.id;
    },
    findChildByName(a, r) {
      const o = Ra();
      return Object.values(o.nodes).find((s) => s.parentId === a && s.name === r);
    },
    createFile(a, r, o = "", s = {}) {
      const c = Ra(), d = { id: pi(), name: r, type: "file", parentId: a, content: o, mimeType: s.mimeType, refTrackId: s.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return c.nodes[d.id] = d, Ua(c), d.id;
    },
    writeFile(a, r) {
      const o = Ra();
      o.nodes[a] && (o.nodes[a].content = r, o.nodes[a].modifiedAt = Date.now(), Ua(o));
    }
  };
}
const vl = { theme: { mode: "dark" } }, xl = ai(null);
function mi() {
  const e = ri(xl), { host: a } = Wt();
  return ue(() => e || {
    state: vl,
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
function wl() {
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
const kl = {
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
}, Sl = {
  juli3ta: kl
};
function hi({ name: e, size: a = 24, className: r, style: o, alt: s, scale: c }) {
  const [d, b = "mark"] = e.split(":"), p = Sl[d], { state: g } = mi();
  let k;
  if (b === "mark" ? k = g.theme.mode === "light" ? p?.["mark-ink"] : p?.["mark-white"] : k = p?.[b], !k) return null;
  const u = s ?? d.charAt(0).toUpperCase() + d.slice(1), y = c ?? k.scale ?? 1;
  return /* @__PURE__ */ t(
    "img",
    {
      src: k.src,
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
        ...k.filter ? { filter: k.filter } : null,
        ...o
      },
      className: r,
      draggable: !1
    }
  );
}
let gi = null, Oo = null;
const fr = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), Tl = [
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
function _l(e) {
  Oo = (async () => {
    for (const r of Tl) await e.run(r);
  })();
  const a = async () => Oo;
  gi = {
    exec: async (r) => {
      await a();
      for (const o of fr(r).split(";").map((s) => s.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (r, o = []) => (await a(), e.query(fr(r), o)),
    run: async (r, o = []) => {
      await a(), await e.run(fr(r), o);
    },
    tx: async (r) => (await a(), r())
  };
}
const K = () => gi, Fa = (e) => ({
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
}), $ = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), Ur = (e) => $(e, "specs_json") || $(e, "cover_data_url") || $(e, "theme") || $(e, "source") || $(e, "audio_kind") || $(e, "external_id") || $(e, "external_url") || $(e, "thumbnail_url") || $(e, "artist") || $(e, "album"), Ho = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
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
  if ($(o, "source") || $(o, "audio_kind") || $(o, "external_id") || $(o, "external_url") || $(o, "thumbnail_url") || $(o, "artist") || $(o, "album"))
    try {
      return (await e.query(
        `SELECT ${Ho}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(xt);
    } catch (s) {
      o = s;
    }
  if ($(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${Ho} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => xt({ ...c, theme: "" }));
    } catch (s) {
      if (!$(s, "cover_data_url")) throw s;
      try {
        return (await e.query(
          `SELECT ${$o} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => xt({ ...d, cover_data_url: "", theme: "" }));
      } catch (c) {
        if (!$(c, "specs_json")) throw c;
        return (await e.query(
          `SELECT ${vr} FROM music_creator_tracks ${a}`,
          r
        )).map((b) => xt({ ...b, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if ($(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${$o} FROM music_creator_tracks ${a}`,
        r
      )).map((c) => xt({ ...c, cover_data_url: "", theme: "" }));
    } catch (s) {
      if (!$(s, "specs_json")) throw s;
      return (await e.query(
        `SELECT ${vr} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => xt({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if ($(o, "specs_json"))
    return (await e.query(
      `SELECT ${vr} FROM music_creator_tracks ${a}`,
      r
    )).map((c) => xt({ ...c, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, bi = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, Nl = async () => {
  const e = K();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${bi} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(Fa);
  } catch (a) {
    if (!Ur(a)) throw a;
    return (await yi(e, "ORDER BY created_at DESC", [], a)).map(Fa);
  }
}, Cl = async (e) => {
  const a = K();
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
  const a = K();
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
    if ($(o, "source") || $(o, "audio_kind") || $(o, "external_id") || $(o, "external_url") || $(o, "thumbnail_url") || $(o, "artist") || $(o, "album"))
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
    if ($(o, "theme"))
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
        if (!$(s, "cover_data_url")) throw s;
      }
    if ($(o, "cover_data_url"))
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
        if (!$(s, "specs_json")) throw s;
      }
    await a.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      r
    );
  }
}, El = async (e) => {
  const a = K();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Al = async (e, a) => {
  const r = K();
  if (!r) throw new Error("Database not ready");
  const o = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, Ll = async (e, a) => {
  const r = K();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, zl = async (e, a) => {
  const r = K();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, Il = async (e, a) => {
  const r = K();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, Ml = async (e, a) => {
  const r = K();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, Rl = async (e, a) => {
  const r = K();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, jl = async (e, a) => {
  const r = K();
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
}, Pl = async (e, a) => {
  const r = K();
  r && await r.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(a)]
  );
}, fi = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, vi = "music_creator_settings", Dl = () => jl(vi, fi), Ul = (e) => Pl(vi, e), Nt = () => Date.now(), xi = (e) => ({
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
}), Ol = (e) => ({
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
], Hl = wi.join(", "), $l = wi.map((e) => `t.${e}`).join(", "), Fl = async () => {
  const e = K();
  return e ? (await e.query(
    `SELECT ${Hl} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(xi) : [];
}, ki = async (e) => {
  const a = K();
  if (!a) throw new Error("Database not ready");
  const r = Ol(e);
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
}, Bl = async (e) => {
  const a = K();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, Wl = async () => {
  const e = K();
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
}, ql = async (e) => {
  const a = K();
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
}, Jl = async (e) => {
  const a = K();
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
  const e = K();
  if (!e) return [];
  const a = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), r = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${$l}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return r.forEach((s) => {
    o.set(s.playlist_id, [...o.get(s.playlist_id) ?? [], xi(s)]);
  }), a.map((s) => ({
    id: s.id,
    name: s.name,
    createdAt: s.created_at,
    updatedAt: s.updated_at,
    items: o.get(s.id) ?? []
  }));
}, Gl = async (e) => {
  const a = K();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", o = Nt(), s = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: o, updatedAt: o, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [s.id, s.name, s.createdAt, s.updatedAt]
  ), s;
}, Vl = async (e) => {
  const a = K();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, Yl = async (e, a) => {
  const r = K();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await ki(a);
    const o = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), s = Number(o[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, s, Nt()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [Nt(), e]);
  });
}, Kl = async (e, a) => {
  const r = K();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [Nt(), e]));
}, Xl = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), Fo = async () => {
  const e = K();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(Xl) : [];
}, Si = async (e) => {
  const a = K();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, xr = "tytus.voice-recorder.recordings", Ql = async () => {
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
}, Zl = (e, a) => e._value, Or = 100, ec = 30, Oa = 6, tc = 360, Bo = 12, ac = 3, rc = 0.4, oc = async (e, a, r) => {
  if (typeof MediaRecorder > "u")
    throw new Error("MediaRecorder unavailable in this environment.");
  const o = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((d) => MediaRecorder.isTypeSupported(d));
  if (!o)
    throw new Error("No supported recorder mime type for fallback.");
  const s = URL.createObjectURL(e), c = new Audio();
  c.src = s, c.muted = !0, c.crossOrigin = "anonymous", c.preload = "auto";
  try {
    await new Promise((_, f) => {
      const x = () => _(), E = () => f(new Error("Audio element rejected the source format too — browser cannot play it."));
      c.addEventListener("canplay", x, { once: !0 }), c.addEventListener("error", E, { once: !0 }), c.load();
    });
    const d = a.createMediaElementSource(c), b = a.createMediaStreamDestination();
    d.connect(b);
    const p = new MediaRecorder(b.stream, { mimeType: o }), g = [];
    p.ondataavailable = (_) => {
      _.data.size > 0 && g.push(_.data);
    };
    const k = Math.max(
      6e3,
      Math.min(r, c.duration || r) * 1e3
    ), u = new Promise((_) => {
      p.onstop = () => _();
    });
    p.start(250), c.currentTime = 0, await c.play(), await new Promise((_) => setTimeout(_, k)), p.stop(), c.pause(), await u;
    const y = new Blob(g, { type: o });
    if (y.size === 0)
      throw new Error("Fallback capture produced no audio data.");
    const v = await y.arrayBuffer();
    return await a.decodeAudioData(v);
  } finally {
    URL.revokeObjectURL(s);
  }
}, Ti = async (e, a = 35) => {
  const r = window.AudioContext || window.webkitAudioContext, o = new r();
  try {
    const s = await e.arrayBuffer();
    try {
      return await o.decodeAudioData(s.slice(0));
    } catch (c) {
      try {
        return await oc(e, o, a);
      } catch (d) {
        const b = c.message || "decodeAudioData failed", p = d.message || "fallback failed";
        throw new Error(
          `Audio format isn't supported by this browser (${b}). Compatibility-mode capture also failed: ${p}`
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
    const s = typeof o.result == "string" ? o.result : "", c = s.indexOf("base64,");
    a(c >= 0 ? s.slice(c + 7) : "");
  }, o.onerror = () => r(o.error), o.readAsDataURL(e);
}), ic = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Or / 1e3)), o = Math.floor(e.length / r), s = new Float32Array(o), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const b = d * r;
    let p = 0;
    for (let g = 0; g < r; g++) {
      let k = 0;
      for (let u = 0; u < c.length; u++) k += c[u][b + g];
      k /= c.length, p += k * k;
    }
    s[d] = Math.sqrt(p / r);
  }
  return s;
}, nc = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Or / 1e3)), o = Math.floor(e.length / r), s = new Float32Array(o), c = [];
  for (let d = 0; d < e.numberOfChannels; d++) c.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const b = d * r;
    let p = 0, g = 0;
    for (let k = 0; k < c.length; k++) g += c[k][b];
    g /= c.length;
    for (let k = 1; k < r; k++) {
      let u = 0;
      for (let y = 0; y < c.length; y++) u += c[y][b + k];
      u /= c.length, (g > 1e-3 && u < -1e-3 || g < -1e-3 && u > 1e-3) && p++, g = u;
    }
    s[d] = p / (r / 2);
  }
  return s;
}, Ni = (e) => {
  const a = ic(e), r = nc(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / Or };
}, sc = (e, a = 4) => {
  let r = 0;
  for (let p = 0; p < e.length; p++) r += e[p];
  const o = r / e.length;
  let s = 0;
  for (let p = 0; p < e.length; p++) s += (e[p] - o) ** 2;
  const c = Math.sqrt(s / e.length) || 1, d = Math.floor(e.length / a), b = new Float32Array(d);
  for (let p = 0; p < d; p++) {
    let g = 0;
    for (let k = 0; k < a; k++) g += e[p * a + k];
    b[p] = (g / a - o) / c;
  }
  return b;
}, lc = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const o = Math.max(1, Math.floor(r / 4));
  let s = -1 / 0, c = 0;
  for (let p = 0; p + r < e.length; p += o) {
    if (Math.abs(p - a) < r) continue;
    let g = 0;
    for (let k = 0; k < r; k++)
      g += e[a + k] * e[p + k];
    g /= r, g > s && (s = g), g > 0.5 && c++;
  }
  const d = Math.max(0, Math.min(1, (s + 1) / 2)), b = Math.min(1, c / 6);
  return 0.6 * d + 0.4 * b;
}, Ci = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const o = sc(e.rms, 4), s = e.rms.length / o.length, c = Math.max(1, Math.floor(r / s));
  let d = 0, b = 0, p = 0;
  for (let y = 0; y < r; y++)
    d += e.rms[y], b += e.rms[y] * e.rms[y], p += e.centroid[y];
  const g = [], k = Math.max(1, Math.floor(e.framesPerSec)), u = (y) => {
    const v = d / r, _ = Math.max(0, b / r - v * v), f = Math.sqrt(_), x = p / r, E = Math.floor(y / s), N = lc(o, E, c), C = 0.45 * Math.min(1, v * 4) + 0.2 * x + 0.25 * N - 0.1 * Math.min(1, f * 6);
    g.push({
      startFrame: y,
      lenFrames: r,
      score: C,
      meanRms: v,
      stdRms: f,
      meanBright: x,
      selfSim: N
    });
  };
  u(0);
  for (let y = r; y < e.rms.length; y += k) {
    for (let v = 0; v < k && y - k + v < e.rms.length; v++) {
      const _ = y - r - k + v + 1, f = y - k + v + 1;
      if (f >= e.rms.length) break;
      _ >= 0 && (d -= e.rms[_], b -= e.rms[_] * e.rms[_], p -= e.centroid[_]), d += e.rms[f], b += e.rms[f] * e.rms[f], p += e.centroid[f];
    }
    u(y - r + k);
  }
  return g;
}, Ir = (e, a, r) => {
  const o = new Float32Array(r), s = [];
  for (let c = 0; c < e.numberOfChannels; c++) s.push(e.getChannelData(c));
  for (let c = 0; c < r; c++) {
    let d = 0;
    for (let b = 0; b < s.length; b++) d += s[b][a + c] || 0;
    o[c] = d / s.length;
  }
  return o;
}, Mr = (e, a) => {
  const s = a * 1 * 2, c = 1 * (16 / 8), d = e.length * 2, b = new ArrayBuffer(44 + d), p = new DataView(b);
  let g = 0;
  const k = (v) => {
    for (let _ = 0; _ < v.length; _++) p.setUint8(g++, v.charCodeAt(_));
  }, u = (v) => {
    p.setUint32(g, v, !0), g += 4;
  }, y = (v) => {
    p.setUint16(g, v, !0), g += 2;
  };
  k("RIFF"), u(36 + d), k("WAVE"), k("fmt "), u(16), y(1), y(1), u(a), u(s), y(c), y(16), k("data"), u(d);
  for (let v = 0; v < e.length; v++) {
    const _ = Math.max(-1, Math.min(1, e[v]));
    p.setInt16(g, _ < 0 ? _ * 32768 : _ * 32767, !0), g += 2;
  }
  return new Blob([b], { type: "audio/wav" });
}, Ei = async (e, a = ec) => {
  const r = typeof e == "string" ? await _i(e) : e, o = await Ti(r), s = o.length / o.sampleRate;
  if (s < Oa)
    throw new Error(`Source is too short (${s.toFixed(1)} s). Need at least ${Oa} s.`);
  const c = Math.min(tc, Math.max(Oa, a));
  if (s <= c) {
    const _ = Ir(o, 0, o.length), f = Mr(_, o.sampleRate);
    return { base64: await zr(f), durationSec: s, startSec: 0, sourceDurationSec: s, score: 1 };
  }
  const d = Ni(o), b = Ci(d, c);
  if (b.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  b.sort((_, f) => f.score - _.score);
  const p = b[0], g = Math.floor(p.startFrame / d.framesPerSec * o.sampleRate), k = Math.floor(p.lenFrames / d.framesPerSec * o.sampleRate), u = Ir(o, g, k), y = Mr(u, o.sampleRate);
  return {
    base64: await zr(y),
    durationSec: k / o.sampleRate,
    startSec: g / o.sampleRate,
    sourceDurationSec: s,
    score: Math.max(0, Math.min(1, p.score))
  };
}, cc = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(r * a);
  let s = 0;
  for (const b of e) s += b.length;
  s -= o * (e.length - 1);
  const c = new Float32Array(s);
  let d = 0;
  c.set(e[0], 0), d = e[0].length - o;
  for (let b = 1; b < e.length; b++) {
    const p = e[b];
    for (let g = 0; g < o; g++) {
      const k = g / o;
      c[d + g] = c[d + g] * (1 - k) + p[g] * k;
    }
    for (let g = o; g < p.length; g++)
      c[d + g] = p[g];
    d += p.length - o;
  }
  return c;
}, dc = (e, a, r) => {
  const o = [...e].sort((c, d) => d.score - c.score), s = [];
  for (const c of o)
    if (s.some(
      (b) => Math.abs(b.startFrame - c.startFrame) < Math.max(b.lenFrames, c.lenFrames) + r
    ) || s.push(c), s.length >= a) break;
  return s.sort((c, d) => c.startFrame - d.startFrame), s;
}, uc = async (e) => {
  const a = typeof e == "string" ? await _i(e) : e, r = await Ti(a), o = r.length / r.sampleRate;
  if (o < Oa * 2) {
    const v = await Ei(a);
    return {
      base64: v.base64,
      durationSec: v.durationSec,
      segments: [{ startSec: v.startSec, endSec: v.startSec + v.durationSec, score: v.score }],
      sourceDurationSec: o
    };
  }
  const s = Ni(r), c = Ci(s, Bo);
  if (c.length === 0)
    throw new Error("Could not analyze the audio.");
  const d = Math.max(
    Math.floor(Bo * s.framesPerSec * 0.5),
    Math.floor(s.rms.length / 4)
  ), b = dc(c, ac, d), p = b.map((v) => {
    const _ = Math.floor(v.startFrame / s.framesPerSec * r.sampleRate), f = Math.floor(v.lenFrames / s.framesPerSec * r.sampleRate);
    return Ir(r, _, f);
  }), g = cc(p, r.sampleRate, rc), k = Mr(g, r.sampleRate), u = await zr(k), y = b.map((v) => ({
    startSec: v.startFrame / s.framesPerSec,
    endSec: (v.startFrame + v.lenFrames) / s.framesPerSec,
    score: Math.max(0, Math.min(1, v.score))
  }));
  return {
    base64: u,
    durationSec: g.length / r.sampleRate,
    segments: y,
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
    const s = o, c = typeof s?.error == "string" ? s.error : `http_${r.status}`;
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
  let s = null;
  try {
    s = await o.json();
  } catch {
    s = null;
  }
  if (!o.ok) {
    const c = s, d = typeof c?.error == "string" ? c.error : `http_${o.status}`;
    throw new Ai(o.status, d, d);
  }
  return s;
}, pc = (e) => qt("/api/music/status", e), Wo = async (e) => (await qt("/api/music/providers", e)).providers ?? [], qo = async (e) => (await qt("/api/music/connectors", e)).connectors ?? [], mc = (e, a, r) => Li("/api/music/connectors/configure", { provider: e, credentials: a }, r), hc = (e, a) => Li("/api/music/connectors/disconnect", { provider: e }, a), gc = async (e, a = 20, r) => {
  const o = new URLSearchParams({ q: e, limit: String(a) });
  return (await qt(`/api/music/search?${o.toString()}`, r)).results ?? [];
}, yc = (e, a = "tracks,albums,artists,playlists", r = 20, o) => {
  const s = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return qt(`/api/music/search2?${s.toString()}`, o);
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
)).track, bc = async (e) => {
  await Ga("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, fc = async () => (await Ga("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, ua = "application/x-juli3ta-track", ja = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", zi = (e) => e.source !== "youtube", sa = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const o of r)
      a.has(o.id) || a.set(o.id, o);
  return Array.from(a.values()).sort((r, o) => o.createdAt - r.createdAt);
}, vc = (e) => zi(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), xc = "http://localhost:18080/v1", wc = "sk-test-123", kt = [
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
], kc = kt.flatMap((e) => e.chips), Sc = ["very_slow", "slow", "medium", "fast", "very_fast"], Tc = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], _c = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], Nc = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], Cc = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], Ec = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], Ac = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], Lc = ["narrow", "medium", "wide"], zc = ["none", "gradual", "sudden"], Ic = ["low", "medium", "high"], Mc = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], Rc = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], jc = ["male", "female", "mixed", "other", "none"], Pc = [
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
], Dc = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], Uc = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], Oc = [
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
], Hc = [
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
], $c = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], V = (e) => e.replace(/_/g, " "), Fc = (e, a, r) => {
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
}, Hr = (e) => {
  const a = [], r = [];
  if (e.structure?.tempo_bpm ? r.push(`${e.structure.tempo_bpm} BPM`) : e.structure?.tempo_class && r.push(`${V(e.structure.tempo_class)} tempo`), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push(`${e.structure.time_signature} time`), e.structure?.rhythm_feel && r.push(`${e.structure.rhythm_feel} feel`), e.structure?.groove_pattern && r.push(`${V(e.structure.groove_pattern)} groove`), e.structure?.song_form && r.push(`${V(e.structure.song_form)} form`), e.structure?.length_seconds && r.push(`~${e.structure.length_seconds}s`), r.length && a.push(r.join(", ")), e.tonal?.key) {
    const c = e.tonal.mode ? `${e.tonal.key} ${e.tonal.mode}` : e.tonal.key;
    a.push(`Key: ${c}`);
  }
  if (e.instrumentation?.primary_instruments?.length && a.push(`Instruments: ${e.instrumentation.primary_instruments.map(V).join(", ")}`), e.instrumentation?.has_vocals === !1)
    a.push("Instrumental, no vocals");
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const c = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && c.push(e.instrumentation.vocal_gender), e.instrumentation.vocal_style?.length ? c.push(e.instrumentation.vocal_style.map(V).join("/")) : c.length === 0 && c.push("vocals");
    let d = c.join(" ");
    e.instrumentation.vocal_processing?.length && (d += ` with ${e.instrumentation.vocal_processing.map(V).join(" + ")}`), a.push(d);
  }
  e.instrumentation?.language_iso639_1 && a.push(`Language: ${e.instrumentation.language_iso639_1}`);
  const o = [];
  e.dynamics?.overall_dynamic_range && o.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && o.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && o.push("big drops"), o.length && a.push(o.join(", ")), e.mood?.primary_moods?.length && a.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && a.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && a.push(`For: ${e.mood.occasion_tags.map(V).join(", ")}`);
  const s = [];
  return e.context?.era_reference && s.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && s.push(`${V(e.context.cultural_region)} scene`), e.context?.intended_use?.length && s.push(`use: ${e.context.intended_use.map(V).join("/")}`), e.context?.explicit_lyrics && s.push("explicit lyrics"), s.length && a.push(s.join(", ")), a.join(". ");
}, Bc = [
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
], Go = "tytus.music-creator.gallery", Vo = "tytus.music-creator", Sr = "gallery", Dt = 3500, Wc = 2e3, De = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), o = a % 60;
  return `${r}:${o.toString().padStart(2, "0")}`;
}, Ii = (e) => e.source === "youtube" && !!e.externalId, ve = (e) => !!e.audioDataUrl || Ii(e), Va = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? Wa(e.externalId) : ""), Wa = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", Mi = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, la = (e) => `youtube:${e}`, qc = async () => {
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
        const s = o.result;
        if (!s.objectStoreNames.contains(Sr)) {
          s.close(), r([]);
          return;
        }
        const d = s.transaction(Sr, "readonly").objectStore(Sr).getAll();
        d.onsuccess = () => {
          s.close(), r(d.result ?? []);
        }, d.onerror = () => {
          s.close(), r([]);
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
}, Jc = (e, a) => {
  const r = [];
  for (const o of a)
    o.endpoint && o.user_key && r.push({
      url: `${o.endpoint.replace(/\/$/, "")}/v1`,
      apiKey: Zl(o.user_key),
      podId: o.pod_id,
      source: "included",
      label: `AIL gateway ${o.pod_id}`,
      models: Ht
    });
  return r.push({
    url: xc,
    apiKey: wc,
    podId: "local",
    source: "local",
    label: "Local AIL",
    models: Ht
  }), r;
}, Gc = (e) => {
  const a = (u, y) => {
    const v = u.map((_) => _.toLowerCase());
    for (const _ of y) {
      const f = v.findIndex((x) => _.test(x));
      if (f >= 0) return u[f];
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
  ]), b = (u) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(u), p = e.filter((u) => !b(u)), g = a(p, [
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
  ]), k = a(e, [
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
  return { music: d, cover: r, lyrics: o, lyricsBackup: g, image: k, allIds: e };
}, Vc = 6e4, Tr = /* @__PURE__ */ new Map(), Yc = async (e, a) => {
  const r = Tr.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: Ht };
    Tr.delete(e.url);
  }
  const o = Bt(a, Xc);
  try {
    const s = await fetch(`${e.url}/models`, {
      method: "GET",
      signal: o.signal,
      headers: { Authorization: `Bearer ${e.apiKey}` }
    });
    if (s.status >= 500) return { ok: !1, models: Ht };
    if (!s.ok) return { ok: !0, models: Ht };
    const d = ((await s.json()).data ?? []).map((b) => b?.id).filter((b) => typeof b == "string" && b.length > 0);
    return { ok: !0, models: Gc(d) };
  } catch (s) {
    return (s?.name ?? "") === "TypeError" && Tr.set(e.url, Date.now() + Vc), { ok: !1, models: Ht };
  } finally {
    o.dispose();
  }
}, Kc = async (e, a) => (await Promise.all(
  e.map(async (o) => {
    if (a.aborted) return null;
    const { ok: s, models: c } = await Yc(o, a);
    return s ? { ...o, models: c } : null;
  })
)).filter((o) => o !== null), Pa = 6e4, Yo = 3e5, Xc = 8e3, Bt = (e, a) => {
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
}, Qc = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]);
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
      if (d instanceof ke && Qc.has(d.status)) {
        o = d;
        continue;
      }
      throw d;
    }
  const s = o?.message ?? "unknown";
  throw new Error(`All ${r} models exhausted. Last error: ${s}. Wait for the rate limit to reset, or pick a different endpoint in Settings.`);
}, Zc = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), ed = async (e, a, r) => {
  let o = 0, s = "";
  const c = Bt(r, Pa);
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
      const _ = await v.json();
      if (!_ || typeof _.lyrics != "string" || _.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ..._, usedFallback: !1 };
    }
    o = v.status, s = await v.text().catch(() => "");
  } catch (y) {
    const v = y.name;
    if (v === "AbortError" && r?.aborted) throw y;
    if (v === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${Pa / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", y);
  } finally {
    c.dispose();
  }
  if (o !== 0 && !Zc.has(o)) {
    const y = s.length > 300 ? `${s.slice(0, 300)}…` : s;
    throw new Error(`Lyrics HTTP ${o}: ${y || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, s);
  const d = (y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(y), b = /* @__PURE__ */ new Set(), p = [], g = (y) => {
    y && !b.has(y) && (b.add(y), p.push(y));
  };
  if (g(e.models.lyricsBackup), e.models.allIds.filter(d).forEach(g), p.length === 0)
    throw new Error(
      `Lyrics endpoint failed and no chat backup model is available for ${e.label}. Pick one in JULI3TA Settings.`
    );
  const k = `You are a songwriter. Given a theme, write a complete singable song.
Respond with VALID JSON ONLY in exactly this shape, nothing else:
{
  "song_title": "Short catchy title",
  "style_tags": "comma, separated, style, hints",
  "lyrics": "[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Bridge]\\nTwo lines\\n\\n[Outro]\\nTwo lines"
}`, u = await Ya(p, async (y) => {
    const v = {
      model: y,
      messages: [
        { role: "system", content: k },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, _ = async (f) => {
      const x = Bt(r, Pa);
      let E;
      try {
        E = await fetch(`${e.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${e.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            f ? { ...v, response_format: { type: "json_object" } } : v
          ),
          signal: x.signal
        });
      } catch (I) {
        throw I.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${Pa / 1e3}s.`) : I;
      } finally {
        x.dispose();
      }
      if (!E.ok) {
        const I = await E.text().catch(() => "");
        throw new ke(E.status, I, `Lyrics fallback HTTP ${E.status}: ${I.slice(0, 300)}`);
      }
      const C = (await E.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!C)
        throw new ke(502, "", "Lyrics fallback returned empty content");
      const M = C.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), P = Ri(M) ?? M;
      let R;
      try {
        R = JSON.parse(P);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", C.slice(0, 400)), new ke(502, C.slice(0, 200), `Lyrics fallback returned non-JSON content: ${C.slice(0, 200)}`);
      }
      if (!R.lyrics)
        throw new ke(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return R;
    };
    try {
      return await _(!0);
    } catch (f) {
      if (f instanceof ke && f.status === 400 && /response_format|json_object/i.test(f.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", y), await _(!1);
      throw f;
    }
  }, "chat-lyrics");
  return {
    song_title: u.song_title || "Untitled",
    style_tags: u.style_tags || "",
    lyrics: u.lyrics,
    usedFallback: !0
  };
}, td = async (e, a, r) => {
  const o = !!a.refAudioBase64, s = (g) => /music/i.test(g) && !/cover/i.test(g), c = (g) => /cover/i.test(g), d = /* @__PURE__ */ new Set(), b = (g, k) => {
    k && !d.has(k) && (d.add(k), g.push(k));
  }, p = [];
  if (o ? (b(p, e.models.cover), e.models.allIds.filter(c).forEach((g) => b(p, g)), b(p, e.models.music)) : (b(p, e.models.music), e.models.allIds.filter(s).forEach((g) => b(p, g))), p.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return Ya(p, async (g) => {
    const k = {
      model: g,
      lyrics: a.lyrics
    };
    a.prompt && (k.prompt = a.prompt), a.instrumental && (k.instrumental = !0), o && (k.audio_base64 = a.refAudioBase64);
    const u = Bt(r, Yo);
    let y;
    try {
      y = await fetch(`${e.url}/music/generations`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${e.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(k),
        signal: u.signal
      });
    } catch (_) {
      throw _.name === "TimeoutError" ? new Error(`Music generation timed out after ${Yo / 1e3}s. Try a shorter lyric or a different endpoint.`) : _;
    } finally {
      u.dispose();
    }
    if (!y.ok) {
      const _ = await y.text().catch(() => "");
      throw new ke(y.status, _, `Music HTTP ${y.status}: ${_.slice(0, 300)}`);
    }
    const v = await y.json();
    if (!v?.data?.audio || typeof v.data.audio != "string" || v.data.audio.length < 100)
      throw new ke(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return v;
  }, o ? "music-cover" : "music");
}, Ko = 6e4, Ha = (e, a, r) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", s = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), c = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${o}".`
  ];
  return s && d.push(`Genre: ${s}.`), c && d.push(`Mood: ${c}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, Rr = async (e, a, r) => {
  const o = (b) => /image|diffusion|dall-?e|flux|sdxl/i.test(b), s = /* @__PURE__ */ new Set(), c = [], d = (b) => {
    b && !s.has(b) && (s.add(b), c.push(b));
  };
  if (d(e.models.image), e.models.allIds.filter(o).forEach(d), c.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return Ya(c, async (b) => {
    const p = Bt(r, Ko), k = /minimax|ail-image|image-01/i.test(b) ? {
      model: b,
      prompt: a,
      aspect_ratio: "1:1",
      response_format: "base64"
    } : {
      model: b,
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
        body: JSON.stringify(k),
        signal: p.signal
      });
    } catch (C) {
      throw C.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${Ko / 1e3}s.`) : C;
    } finally {
      p.dispose();
    }
    if (!u.ok) {
      const C = await u.text().catch(() => "");
      throw new ke(u.status, C, `Cover-art HTTP ${u.status}: ${C.slice(0, 200)}`);
    }
    const y = await u.json(), v = y.base_resp;
    if (v && typeof v.status_code == "number" && v.status_code !== 0)
      throw new ke(502, v.status_msg ?? "", `Cover-art ${b} rejected: ${v.status_msg ?? "status_code=" + v.status_code}`);
    const _ = (C) => typeof C != "string" || !C.length ? null : C.startsWith("data:") ? C : `data:image/png;base64,${C}`, f = (C) => typeof C == "string" && /^https?:\/\//i.test(C) ? C : null, x = y.data;
    if (x && typeof x == "object" && !Array.isArray(x)) {
      const C = x, M = C.image_base64;
      if (Array.isArray(M) && M[0]) {
        const I = _(M[0]);
        if (I) return I;
      }
      const P = _(C.image) ?? _(C.b64_json) ?? f(C.url);
      if (P) return P;
      const R = C.image_url ?? C.image_urls;
      if (Array.isArray(R) && R[0]) {
        const I = f(R[0]);
        if (I) return I;
      }
    }
    if (Array.isArray(x) && x[0]) {
      const C = x[0], M = _(C.b64_json) ?? _(C.image_base64) ?? f(C.url);
      if (M) return M;
      throw new ke(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const E = _(y.image) ?? _(y.b64_json);
    if (E) return E;
    const N = y.images;
    if (Array.isArray(N) && N[0]) {
      const C = N[0], M = _(C.b64_json) ?? _(C.image) ?? f(C.url);
      if (M) return M;
    }
    throw new ke(502, "", `Cover-art response shape not recognised: ${JSON.stringify(y).slice(0, 200)}`);
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
function ad(e, a, r) {
  const [o, s] = S({
    trackId: null,
    playing: !1,
    loadingTrackId: null,
    positionMs: 0,
    durationMs: 0,
    volume: 1
  }), c = ee(null), d = L((f) => {
    (async () => {
      s((N) => ({
        ...N,
        trackId: f.id,
        playing: !1,
        loadingTrackId: ve(f) ? f.id : null,
        positionMs: 0,
        durationMs: f.durationMs || 0
      }));
      const x = f.audioDataUrl || await r?.(f);
      if (!x) {
        s((N) => ({ ...N, loadingTrackId: null }));
        return;
      }
      const E = a.current;
      if (!E) {
        s((N) => ({ ...N, loadingTrackId: null }));
        return;
      }
      o.trackId !== f.id || E.src !== x ? (E.src = x, E.preload = "auto", E.load(), E.pause(), s((N) => ({
        ...N,
        trackId: f.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: f.durationMs || 0
      }))) : s((N) => ({ ...N, loadingTrackId: null }));
    })();
  }, [o.trackId, a, r]), b = L((f) => {
    (async () => {
      c.current = null, s((N) => ({
        ...N,
        trackId: f.id,
        loadingTrackId: f.id,
        durationMs: f.durationMs || N.durationMs
      }));
      const x = f.audioDataUrl || await r?.(f);
      if (!x) {
        s((N) => ({ ...N, loadingTrackId: null, playing: !1 }));
        return;
      }
      const E = a.current;
      if (!E) {
        s((N) => ({ ...N, loadingTrackId: null, playing: !1 }));
        return;
      }
      (o.trackId !== f.id || E.src !== x) && (E.src = x, E.preload = "auto", s((N) => ({ ...N, trackId: f.id, positionMs: 0, durationMs: f.durationMs || 0 }))), E.play().then(() => s((N) => ({ ...N, loadingTrackId: null, playing: !0 }))).catch(() => s((N) => ({ ...N, loadingTrackId: null, playing: !1 })));
    })();
  }, [o.trackId, a, r]), p = L(() => {
    a.current?.pause(), s((f) => ({ ...f, playing: !1, loadingTrackId: null }));
  }, [a]), g = L((f) => {
    if (o.loadingTrackId) return;
    if (f) {
      o.trackId === f.id && o.playing ? p() : b(f);
      return;
    }
    if (o.playing) {
      p();
      return;
    }
    const x = o.trackId ? e.find((E) => E.id === o.trackId) : null;
    x ? b(x) : a.current?.src && a.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, b, p, a]), k = L((f) => {
    const x = a.current;
    x && (x.currentTime = Math.max(0, f / 1e3));
  }, [a]), u = L((f) => {
    const x = Math.max(0, Math.min(1, f));
    a.current && (a.current.volume = x), s((E) => ({ ...E, volume: x }));
  }, [a]), y = ue(() => e.filter(ve), [e]), v = L(() => {
    if (!o.trackId || y.length === 0) return;
    const f = y.findIndex((E) => E.id === o.trackId);
    if (f < 0) return;
    const x = y[(f + 1) % y.length];
    x && b(x);
  }, [o.trackId, y, b]), _ = L(() => {
    if (!o.trackId || y.length === 0) return;
    const f = y.findIndex((E) => E.id === o.trackId);
    if (f < 0) return;
    const x = y[(f - 1 + y.length) % y.length];
    x && b(x);
  }, [o.trackId, y, b]);
  return te(() => {
    const f = a.current;
    if (!f) return;
    const x = () => s((I) => ({ ...I, positionMs: f.currentTime * 1e3 })), E = () => s((I) => ({
      ...I,
      durationMs: Number.isFinite(f.duration) ? f.duration * 1e3 : I.durationMs
    })), N = () => s((I) => ({ ...I, playing: !0, loadingTrackId: null })), C = () => s((I) => ({ ...I, playing: !1, loadingTrackId: null })), M = () => s((I) => ({ ...I, loadingTrackId: null })), P = () => {
      const I = o.trackId ? y.find((F) => F.id === o.trackId) : null;
      if (!I || I.audioDataUrl || !r || c.current === I.id) {
        s((F) => ({ ...F, playing: !1, loadingTrackId: null }));
        return;
      }
      c.current = I.id, s((F) => ({ ...F, loadingTrackId: I.id, playing: !1 })), r(I, { force: !0 }).then((F) => {
        if (!F) throw new Error("No refreshed stream URL");
        return f.src = F, f.preload = "auto", f.play();
      }).then(() => s((F) => ({ ...F, playing: !0, loadingTrackId: null }))).catch(() => s((F) => ({ ...F, playing: !1, loadingTrackId: null })));
    }, R = () => {
      if (y.length >= 2) {
        const I = y.findIndex((F) => F.id === o.trackId);
        if (I >= 0 && I + 1 < y.length) {
          b(y[I + 1]);
          return;
        }
      }
      s((I) => ({ ...I, playing: !1, positionMs: 0 }));
    };
    return f.addEventListener("timeupdate", x), f.addEventListener("loadedmetadata", E), f.addEventListener("play", N), f.addEventListener("pause", C), f.addEventListener("canplay", M), f.addEventListener("error", P), f.addEventListener("ended", R), () => {
      f.removeEventListener("timeupdate", x), f.removeEventListener("loadedmetadata", E), f.removeEventListener("play", N), f.removeEventListener("pause", C), f.removeEventListener("canplay", M), f.removeEventListener("error", P), f.removeEventListener("ended", R);
    };
  }, [y, o.trackId, b, a, r]), { state: o, queue: e, play: b, pause: p, toggle: g, select: d, seek: k, setVolume: u, next: v, prev: _ };
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
        o ? /* @__PURE__ */ t(Y, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 10 }),
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
  const s = Va(e);
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
function rd({ player: e, allTracks: a }) {
  const { state: r, toggle: o, next: s, prev: c, seek: d, setVolume: b, queue: p } = e, g = p.find((f) => f.id === r.trackId) ?? a.find((f) => f.id === r.trackId) ?? null;
  if (!g) return null;
  const k = r.durationMs > 0 ? r.durationMs : g.durationMs, u = Math.min(r.positionMs, k || 0), y = k > 0 ? u / k * 100 : 0, v = r.loadingTrackId === g.id, _ = (f) => {
    if (!k) return;
    const x = f.currentTarget.getBoundingClientRect(), E = (f.clientX - x.left) / x.width;
    d(Math.max(0, Math.min(1, E)) * k);
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
        /* @__PURE__ */ t(mt, { track: g, size: 40, iconSize: 18, radius: 6 }),
        /* @__PURE__ */ n("div", { className: "flex flex-col min-w-0", style: { width: 180 }, children: [
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: g.title }),
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: g.styleTags && g.styleTags !== "—" ? g.styleTags : "—" })
        ] }),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
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
              children: v ? /* @__PURE__ */ t(Y, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(ht, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(pe, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: s,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(pe, { size: 12 })
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
            children: De(k)
          }
        ),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(Ar, { size: 12, style: { color: "var(--text-disabled)", flexShrink: 0 } }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
              value: r.volume,
              onChange: (f) => b(Number(f.target.value)),
              style: { width: "100%", accentColor: "var(--accent-primary)" }
            }
          )
        ] })
      ]
    }
  );
}
function od({ retrying: e, onRetry: a }) {
  const { t: r } = Ct();
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
            e ? /* @__PURE__ */ t(Y, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 14 }),
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
function ca({ label: e, hint: a, counter: r, counterDanger: o, className: s, headerExtra: c, children: d }) {
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
function id({ onPick: e, disabled: a }) {
  const [r, o] = S(!1), [s, c] = S(kt[0].label), [d, b] = S(""), p = d.trim().toLowerCase(), g = p.length > 0, k = ue(() => {
    if (!g) return [];
    const u = [];
    for (const y of kt)
      for (const v of y.chips)
        v.toLowerCase().includes(p) && u.push({ family: y.label, chip: v });
    return u;
  }, [g, p]);
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: g ? `${k.length} match${k.length === 1 ? "" : "es"}` : `${kc.length} chips · click to add` })
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
                  /* @__PURE__ */ t(at, { size: 11, style: { color: "var(--text-disabled)" } }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: d,
                      onChange: (u) => b(u.target.value),
                      placeholder: "Search genres…",
                      className: "rounded-input bg-transparent outline-none",
                      style: { fontSize: 11, color: "var(--text-primary)", width: 140 }
                    }
                  ),
                  d && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => b(""),
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
        g ? k.length === 0 ? /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: k.map(({ family: u, chip: y }) => /* @__PURE__ */ t(
          Nr,
          {
            chip: y,
            family: u,
            onPick: e,
            disabled: a
          },
          `${u}::${y}`
        )) }) : /* @__PURE__ */ n(he, { children: [
          !r && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: kt.map((u) => /* @__PURE__ */ t(
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
              children: kt.map((u) => /* @__PURE__ */ n("div", { children: [
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
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: u.chips.map((y) => /* @__PURE__ */ t(Nr, { chip: y, onPick: e, disabled: a }, y)) })
              ] }, u.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (kt.find((u) => u.label === s) ?? kt[0]).chips.map((u) => /* @__PURE__ */ t(Nr, { chip: u, onPick: e, disabled: a }, u)) })
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
        /* @__PURE__ */ t(Lr, { size: 10 }),
        e,
        a && /* @__PURE__ */ n("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function nd({ specs: e, onChange: a, disabled: r, onOptimize: o, optimizing: s }) {
  const [c, d] = S(!1), b = ue(() => Hr(e), [e]), p = b.length > 0, g = L(
    (u, y) => {
      const v = { ...e };
      y === null ? delete v[u] : v[u] = y, a(v);
    },
    [e, a]
  ), k = () => a({});
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
                  s ? /* @__PURE__ */ t(Y, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 11 }),
                  s ? "Optimizing…" : "AI Optimize"
                ]
              }
            ),
            p && !c && /* @__PURE__ */ n(
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
        c && /* @__PURE__ */ n(
          "div",
          {
            className: "px-3 pb-3 pt-0",
            style: { borderTop: "1px solid var(--border-subtle)" },
            children: [
              p && /* @__PURE__ */ n(
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
                    b
                  ]
                }
              ),
              /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                /* @__PURE__ */ n(da, { label: "Structure", children: [
                  /* @__PURE__ */ t(re, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    ei,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (u) => g("structure", { ...e.structure, tempo_bpm: u }),
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
                      options: Sc,
                      onChange: (u) => g("structure", { ...e.structure, tempo_class: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Time signature", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.structure?.time_signature,
                      options: Tc,
                      onChange: (u) => g("structure", { ...e.structure, time_signature: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.structure?.rhythm_feel,
                      options: _c,
                      onChange: (u) => g("structure", { ...e.structure, rhythm_feel: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Groove", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.structure?.groove_pattern,
                      options: Nc,
                      onChange: (u) => g("structure", { ...e.structure, groove_pattern: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Form", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.structure?.song_form,
                      options: Cc,
                      onChange: (u) => g("structure", { ...e.structure, song_form: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Length (s)", children: /* @__PURE__ */ t(
                    ei,
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
                /* @__PURE__ */ n(da, { label: "Key", children: [
                  /* @__PURE__ */ t(re, { label: "Pitch", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.tonal?.key,
                      options: Ec,
                      onChange: (u) => g("tonal", { ...e.tonal, key: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Mode", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.tonal?.mode,
                      options: Ac,
                      onChange: (u) => g("tonal", { ...e.tonal, mode: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ n(da, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(re, { label: "Range", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: Lc,
                      onChange: (u) => g("dynamics", { ...e.dynamics, overall_dynamic_range: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Crescendo", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: zc,
                      onChange: (u) => g("dynamics", { ...e.dynamics, crescendo_shape: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Big drops", children: /* @__PURE__ */ t(
                    ti,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (u) => g("dynamics", { ...e.dynamics, has_big_drops: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ n(da, { label: "Context", children: [
                  /* @__PURE__ */ t(re, { label: "Era", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.context?.era_reference,
                      options: Mc,
                      onChange: (u) => g("context", { ...e.context, era_reference: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Region", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.context?.cultural_region,
                      options: Rc,
                      onChange: (u) => g("context", { ...e.context, cultural_region: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Intensity", children: /* @__PURE__ */ t(
                    Ne,
                    {
                      value: e.mood?.emotional_intensity,
                      options: Ic,
                      onChange: (u) => g("mood", { ...e.mood, emotional_intensity: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    ti,
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
                  Ut,
                  {
                    label: "Primary instruments",
                    options: Pc,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (u) => g("instrumentation", { ...e.instrumentation, primary_instruments: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ n(da, { label: "Vocals", children: [
                    /* @__PURE__ */ t(re, { label: "Has vocals", children: /* @__PURE__ */ t(
                      ld,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (u) => g("instrumentation", { ...e.instrumentation, has_vocals: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(re, { label: "Gender", children: /* @__PURE__ */ t(
                      Ne,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: jc,
                        onChange: (u) => g("instrumentation", { ...e.instrumentation, vocal_gender: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(re, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      sd,
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
                    Ut,
                    {
                      label: "Vocal style",
                      options: Dc,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (u) => g("instrumentation", { ...e.instrumentation, vocal_style: u.length ? u : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    Ut,
                    {
                      label: "Vocal processing",
                      options: Uc,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (u) => g("instrumentation", { ...e.instrumentation, vocal_processing: u.length ? u : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  Ut,
                  {
                    label: "Primary moods",
                    options: Oc,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (u) => g("mood", { ...e.mood, primary_moods: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Ut,
                  {
                    label: "Occasion tags",
                    options: Hc,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (u) => g("mood", { ...e.mood, occasion_tags: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Ut,
                  {
                    label: "Intended use",
                    options: $c,
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
                  onClick: k,
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
function re({ label: e, children: a }) {
  return /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-2", children: [
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
        a.map((s) => /* @__PURE__ */ t("option", { value: s, children: V(s) }, s))
      ]
    }
  );
}
function ei({
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
        const b = d.target.value;
        if (b === "") {
          a(void 0);
          return;
        }
        const p = Number(b);
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
function sd({
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
function ld({
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
  disabled: s
}) {
  const c = (d) => {
    r.includes(d) ? o(r.filter((b) => b !== d)) : o([...r, d]);
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
      const b = r.includes(d);
      return /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          onClick: () => c(d),
          disabled: s,
          className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-90 disabled:opacity-40",
          style: {
            fontSize: 10,
            background: b ? "var(--accent-primary)" : "var(--bg-titlebar)",
            color: b ? "white" : "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            cursor: s ? "not-allowed" : "pointer"
          },
          children: [
            b && /* @__PURE__ */ t(pa, { size: 10 }),
            V(d)
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
const cd = "#4ade80", dd = "#fbbf24", qa = (e) => e.models.music || e.models.cover ? cd : dd;
function ud({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [o, s] = S(!1), c = ee(null), d = a.length > 1;
  te(() => {
    if (!o) return;
    const p = (g) => {
      c.current && !c.current.contains(g.target) && s(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [o]);
  const b = (p) => /* @__PURE__ */ t(
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
  return /* @__PURE__ */ n("div", { ref: c, className: "relative inline-flex", children: [
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        onClick: () => d && s((p) => !p),
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
          b(qa(e)),
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
          const g = p.podId === e.podId;
          return /* @__PURE__ */ n(
            "button",
            {
              onClick: () => {
                r(p.podId), s(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: g ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: b(qa(p)) }),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ n("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: p.label }),
                    g && /* @__PURE__ */ t(pa, { size: 11, style: { color: "var(--accent-primary)" } })
                  ] }),
                  /* @__PURE__ */ n("div", { style: { fontSize: 9, color: "var(--text-disabled)", marginTop: 2 }, children: [
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
const fe = ({ icon: e, label: a, onClick: r, danger: o }) => /* @__PURE__ */ n(
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
function pd({ tracks: e, player: a, onLoad: r, onOpenLyrics: o, onDelete: s, onRename: c }) {
  const { t: d } = Ct();
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
    e.map((b) => /* @__PURE__ */ t(
      md,
      {
        track: b,
        player: a,
        onLoad: r,
        onOpenLyrics: o,
        onDelete: s,
        onRename: c,
        translate: d
      },
      b.id
    ))
  ] });
}
function md({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: o,
  onDelete: s,
  onRename: c,
  translate: d
}) {
  const [b, p] = S(!1), [g, k] = S(null), u = a.state.trackId === e.id, y = u && a.state.playing, v = () => {
    if (g === null) return;
    const x = g.trim();
    k(null), x && x !== e.title && c(e.id, x);
  }, _ = new Date(e.createdAt).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ n(
    "div",
    {
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      draggable: !0,
      onDragStart: (x) => {
        const E = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: ve(e)
        };
        x.dataTransfer.setData(ua, JSON.stringify(E)), e.lyricsPreview && x.dataTransfer.setData("text/plain", e.lyricsPreview), x.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => ve(e) ? a.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: u ? "var(--bg-selected)" : b ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: ve(e) ? y ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: u ? "var(--accent-primary)" : "var(--text-disabled)" }, children: ve(e) ? y ? /* @__PURE__ */ t(ht, { size: 11 }) : b ? /* @__PURE__ */ t(pe, { size: 11 }) : /* @__PURE__ */ t(ga, { size: 11 }) : /* @__PURE__ */ t($a, { size: 11 }) }),
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
              onChange: (x) => k(x.target.value),
              onClick: (x) => x.stopPropagation(),
              onKeyDown: (x) => {
                x.stopPropagation(), x.key === "Enter" ? v() : x.key === "Escape" && k(null);
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
        ) : /* @__PURE__ */ n(he, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "truncate",
              style: { fontWeight: u ? 600 : 500 },
              onClick: (x) => x.stopPropagation(),
              onDoubleClick: (x) => {
                x.stopPropagation(), k(e.title);
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
            onClick: (x) => {
              x.stopPropagation(), x.shiftKey ? o(e) : x.altKey ? s(e.id) : r(e);
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
function hd({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: o,
  onSaveSongToDesktop: s,
  onSaveLyricsToDesktop: c,
  onPlayInPlayer: d,
  onRename: b,
  onEditCover: p,
  onSelect: g,
  selected: k,
  player: u
}) {
  const { t: y } = Ct(), v = ee(null), [_, f] = S(!1), [x, E] = S(null), [N, C] = S(null), M = () => {
    if (N === null) return;
    const j = N.trim();
    C(null), j && j !== e.title && b(e.id, j);
  }, P = u.state.trackId === e.id, R = P && u.state.playing, I = P && u.state.durationMs > 0 ? u.state.positionMs / u.state.durationMs : 0;
  te(() => {
    if (!x) return;
    const j = (Je) => {
      const Ce = Je.target;
      v.current && Ce && v.current.contains(Ce) || Ce && Ce.closest?.("[data-track-menu]") || E(null);
    }, ie = () => E(null);
    return setTimeout(() => window.addEventListener("mousedown", j), 0), window.addEventListener("scroll", ie, !0), window.addEventListener("resize", ie), () => {
      window.removeEventListener("mousedown", j), window.removeEventListener("scroll", ie, !0), window.removeEventListener("resize", ie);
    };
  }, [x]);
  const F = () => {
    const j = v.current?.getBoundingClientRect();
    if (!j) return;
    const ie = 220, Je = Math.min(j.right - ie, window.innerWidth - ie - 8), Ce = j.bottom + 4;
    E({ x: Math.max(8, Je), y: Ce });
  }, ae = (j) => () => {
    E(null), j();
  }, oe = () => u.toggle(e), rt = () => {
    const j = document.createElement("a");
    j.href = e.audioDataUrl, j.download = `${e.title || "track"}.mp3`, j.click();
  };
  return /* @__PURE__ */ n(
    "div",
    {
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      draggable: !0,
      onDragStart: (j) => {
        const ie = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: ve(e)
        };
        j.dataTransfer.setData(ua, JSON.stringify(ie)), e.lyricsPreview && j.dataTransfer.setData("text/plain", e.lyricsPreview), j.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => g?.(e),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: k ? "var(--bg-selected)" : _ ? "var(--bg-hover)" : "transparent",
        border: k ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: g ? "pointer" : "grab"
      },
      title: g ? "Click to open in player · drag to other fields" : "Drag to Desktop, Cover field, Text Editor, or any text field",
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
          ve(e) ? /* @__PURE__ */ n(
            "button",
            {
              onClick: oe,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: R ? "Pause" : "Play",
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
                    children: R ? /* @__PURE__ */ t(ht, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(pe, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                children: /* @__PURE__ */ t($a, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
            N !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: N,
                onChange: (j) => C(j.target.value),
                onClick: (j) => j.stopPropagation(),
                onKeyDown: (j) => {
                  j.stopPropagation(), j.key === "Enter" ? M() : j.key === "Escape" && C(null);
                },
                onBlur: M,
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
                onDoubleClick: (j) => {
                  j.stopPropagation(), C(e.title);
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
              onClick: (j) => {
                j.stopPropagation(), x ? E(null) : F();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: _ || x ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(jr, { size: 14 })
            }
          )
        ] }),
        x && Ja(
          /* @__PURE__ */ n(
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
                ve(e) && /* @__PURE__ */ n(he, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(ga, { size: 14 }), label: y("musiccreator.track.playInPlayer"), onClick: ae(() => d(e)) }),
                  /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(Do, { size: 14 }), label: y("musiccreator.track.saveSongToDesktop"), onClick: ae(() => s(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(xs, { size: 14 }), label: y("musiccreator.track.download"), onClick: ae(rt) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ n(he, { children: [
                  ve(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t($a, { size: 14 }), label: y("musiccreator.track.openInEditor"), onClick: ae(() => o(e)) }),
                  /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(Do, { size: 14 }), label: y("musiccreator.track.saveLyricsToDesktop"), onClick: ae(() => c(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(ci, { size: 14 }), label: "Rename", onClick: ae(() => C(e.title)) }),
                /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(ha, { size: 14 }), label: "Edit cover art", onClick: ae(() => p(e)) }),
                /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(Tt, { size: 14 }), label: y("musiccreator.track.loadIntoForm"), onClick: ae(() => r(e)) }),
                /* @__PURE__ */ t(fe, { icon: /* @__PURE__ */ t(Ft, { size: 14 }), label: y("musiccreator.track.delete"), onClick: ae(() => a(e.id)), danger: !0 })
              ]
            }
          ),
          document.body
        ),
        R && /* @__PURE__ */ t(
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
function gd({
  track: e,
  player: a,
  selected: r,
  isFavorite: o,
  onOpenInPlayer: s,
  onRemix: c,
  onToggleFavorite: d,
  onRemove: b
}) {
  const p = ee(null), [g, k] = S(!1), [u, y] = S(null), v = a.state.trackId === e.id, _ = v && a.state.loadingTrackId === e.id, f = v && a.state.playing, x = v && a.state.durationMs > 0 ? a.state.positionMs / a.state.durationMs : 0;
  te(() => {
    if (!u) return;
    const M = (R) => {
      const I = R.target;
      p.current && I && p.current.contains(I) || I && I.closest?.("[data-track-menu]") || y(null);
    }, P = () => y(null);
    return setTimeout(() => window.addEventListener("mousedown", M), 0), window.addEventListener("scroll", P, !0), window.addEventListener("resize", P), () => {
      window.removeEventListener("mousedown", M), window.removeEventListener("scroll", P, !0), window.removeEventListener("resize", P);
    };
  }, [u]);
  const E = () => {
    const M = p.current?.getBoundingClientRect();
    if (!M) return;
    const P = 220, R = Math.min(M.right - P, window.innerWidth - P - 8), I = M.bottom + 4;
    y({ x: R, y: I });
  }, N = (M) => () => {
    y(null), M();
  }, C = e.externalUrl;
  return /* @__PURE__ */ n(
    "div",
    {
      onMouseEnter: () => k(!0),
      onMouseLeave: () => k(!1),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: r ? "var(--bg-selected)" : g ? "var(--bg-hover)" : "transparent",
        border: r ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: "pointer"
      },
      title: "Click to open in player",
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: (M) => {
                M.stopPropagation(), a.toggle(e);
              },
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105",
              style: { width: 36, height: 36 },
              title: f ? "Pause" : "Play",
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
                    children: _ ? /* @__PURE__ */ t(Y, { size: 14, className: "animate-spin", style: { color: "white" } }) : f ? /* @__PURE__ */ t(ht, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(pe, { size: 14, style: { color: "white", marginLeft: 1 } })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ n(
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
          /* @__PURE__ */ t(
            "button",
            {
              ref: p,
              onClick: (M) => {
                M.stopPropagation(), u ? y(null) : E();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: g || u ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(jr, { size: 14 })
            }
          )
        ] }),
        u && Ja(
          /* @__PURE__ */ n(
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
                    icon: f ? /* @__PURE__ */ t(ht, { size: 14 }) : /* @__PURE__ */ t(pe, { size: 14 }),
                    label: f ? "Pause" : "Play",
                    onClick: N(() => a.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  fe,
                  {
                    icon: /* @__PURE__ */ t(ga, { size: 14 }),
                    label: "Open in player",
                    onClick: N(() => s(e))
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
                C && /* @__PURE__ */ t(
                  fe,
                  {
                    icon: /* @__PURE__ */ t(li, { size: 14 }),
                    label: "Open source",
                    onClick: N(() => window.open(C, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  fe,
                  {
                    icon: /* @__PURE__ */ t(Ft, { size: 14 }),
                    label: "Remove from Library",
                    onClick: N(() => b(e)),
                    danger: !0
                  }
                )
              ]
            }
          ),
          document.body
        ),
        f && /* @__PURE__ */ t(
          "div",
          {
            className: "mt-1.5 rounded-full overflow-hidden",
            style: { height: 2, background: "var(--bg-hover)" },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: `${x * 100}%`,
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
function yd({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: o
}) {
  const [s, c] = S(e.coverDataUrl), [d, b] = S(""), [p, g] = S(!1), [k, u] = S(null), y = ee(null), v = ee(null), _ = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), f = Ha(_, "", e.styleTags || "");
  te(() => {
    const N = (C) => {
      C.key === "Escape" && (C.stopPropagation(), o());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [o]), te(() => () => v.current?.abort(), []);
  const x = async () => {
    if (!a) {
      u("Connect to a pod to generate cover art.");
      return;
    }
    if (!a.models.image) {
      u(`This endpoint (${a.label}) has no image model. Pick one in JULI3TA Settings → Cover art.`);
      return;
    }
    if (p) return;
    v.current?.abort(), v.current = new AbortController();
    const N = v.current.signal;
    g(!0), u(null);
    try {
      const C = (d.trim() || f).slice(0, 1500), M = await Rr(a, C, N);
      if (N.aborted) return;
      c(M);
    } catch (C) {
      if (C.name === "AbortError") return;
      u(C.message || "Cover-art generation failed.");
    } finally {
      g(!1);
    }
  }, E = (N) => {
    if (u(null), !N.type.startsWith("image/")) {
      u("That file is not an image.");
      return;
    }
    if (N.size > 4 * 1024 * 1024) {
      u("Image is too big (limit 4 MB).");
      return;
    }
    const C = new FileReader();
    C.onerror = () => u("Could not read that image."), C.onload = () => {
      const M = C.result;
      typeof M == "string" && c(M);
    }, C.readAsDataURL(N);
  };
  return Ja(
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
            onClick: (N) => N.stopPropagation(),
            children: [
              /* @__PURE__ */ n(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(ha, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ n("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: [
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
                        !s && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ha, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
                        p && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(Y, { size: 24, className: "animate-spin", style: { color: "white" } }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col gap-2 min-w-0", children: [
                    /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: x,
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
                          p ? /* @__PURE__ */ t(Y, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Ws, { size: 12 }),
                          s ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => y.current?.click(),
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
                    s && /* @__PURE__ */ n(
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
                /* @__PURE__ */ n("div", { children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }, children: "Prompt" }),
                  /* @__PURE__ */ t(
                    "textarea",
                    {
                      value: d,
                      onChange: (N) => b(N.target.value),
                      placeholder: f,
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
                k && /* @__PURE__ */ n(
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
                      k
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
                          r(e.id, s), o();
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
                  ref: y,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (N) => {
                    const C = N.target.files?.[0];
                    C && E(C), N.target.value = "";
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
function bd({
  songName: e,
  mode: a,
  theme: r,
  style: o,
  intent: s,
  lyrics: c,
  specs: d,
  coverDataUrl: b,
  endpoint: p,
  busy: g,
  onRegenerate: k,
  onUpload: u,
  onClear: y,
  onClose: v
}) {
  const _ = ee(null), f = ue(() => Hr(d), [d]), x = ue(() => $t(d), [d]);
  te(() => {
    const C = (M) => {
      M.key === "Escape" && (M.stopPropagation(), v());
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [v]);
  const E = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", N = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return Ja(
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
                        children: /* @__PURE__ */ t(me, { size: 14 })
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
                      background: b ? `url(${b}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "var(--shadow-md)"
                    },
                    children: [
                      !b && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ha, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
                      g && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(Y, { size: 28, className: "animate-spin", style: { color: "white" } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
                  /* @__PURE__ */ n("div", { children: [
                    /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }, children: N }),
                    o.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: o.trim() })
                  ] }),
                  /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        onClick: k,
                        disabled: g || !p?.models.image,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 11,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent",
                          cursor: g || !p?.models.image ? "not-allowed" : "pointer"
                        },
                        title: p?.models.image ? "Generate cover art" : "No image model available",
                        children: [
                          g ? /* @__PURE__ */ t(Y, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 11 }),
                          b ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        onClick: () => _.current?.click(),
                        disabled: g,
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
                    b && /* @__PURE__ */ n(
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
                          /* @__PURE__ */ t(me, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  r.trim() && /* @__PURE__ */ t(Da, { label: "Theme", children: r.trim() }),
                  s.trim() && /* @__PURE__ */ t(Da, { label: "Lyrics Direction", children: s.trim() }),
                  x > 0 && f && /* @__PURE__ */ t(Da, { label: `Track Specs (${x} set)`, children: f }),
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
                  !r.trim() && !s.trim() && x === 0 && !c.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: _,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (C) => {
                    const M = C.target.files?.[0];
                    M && u(M), C.target.value = "";
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
function fd(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function vd(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function xd(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function wd(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function kd(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: V(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: V(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: V(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: V(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: V(e.tonal.mode) }), o.length && a.push({ label: "Tonal", rows: o });
  const s = [];
  if (e.instrumentation?.primary_instruments?.length && s.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(V).join(", ") }), e.instrumentation?.has_vocals === !1)
    s.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const p = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && p.push(V(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && p.push(e.instrumentation.vocal_style.map(V).join("/")), s.push({ label: "Vocals", value: p.length ? p.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && s.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(V).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && s.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), s.length && a.push({ label: "Instrumentation", rows: s });
  const c = [];
  e.dynamics?.overall_dynamic_range && c.push({ label: "Range", value: V(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && c.push({ label: "Crescendo", value: V(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && c.push({ label: "Big drops", value: "Yes" }), c.length && a.push({ label: "Dynamics", rows: c });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: V(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(V).join(", ") }), d.length && a.push({ label: "Mood", rows: d });
  const b = [];
  return e.context?.era_reference && b.push({ label: "Era", value: V(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && b.push({ label: "Region", value: V(e.context.cultural_region) }), e.context?.intended_use?.length && b.push({ label: "Use", value: e.context.intended_use.map(V).join("/") }), e.context?.explicit_lyrics && b.push({ label: "Explicit", value: "Yes" }), b.length && a.push({ label: "Context", rows: b }), a;
}
function We({ label: e, value: a }) {
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
function Ot({ label: e, children: a }) {
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
function Sd({
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
const Td = /^\s*\[([^\]]+)\]\s*$/;
function _d({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, o) => {
    const s = r.match(Td);
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
function Nd({ track: e, player: a, restyleOriginal: r, onEditInCreator: o, onSwitchToCreator: s, onSearchMusic: c }) {
  const { t: d } = Ct(), b = e?.specsJson ?? "", p = ue(() => {
    if (!b) return {};
    try {
      return JSON.parse(b);
    } catch {
      return {};
    }
  }, [b]), g = (p.intent ?? "").trim(), k = ue(() => kd(p), [p]);
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
            /* @__PURE__ */ t(Pe, { size: 13 }),
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
            /* @__PURE__ */ t(at, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const u = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", y = ve(e), v = Va(e), _ = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", f = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", x = a.state.trackId === e.id, E = x && a.state.playing, N = x && a.state.loadingTrackId === e.id, C = e.source === "youtube", M = a.queue.filter((P) => P.id !== e.id && (P.artist || "").trim() && P.artist === e.artist).slice(0, 4);
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
            title: y ? x && E ? "Pause" : "Play" : "Lyric sheet — no audio",
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
                    opacity: x && E ? 0 : 1
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
                      children: x && E ? /* @__PURE__ */ t(ht, { size: 30, style: { color: "white" } }) : N ? /* @__PURE__ */ t(Y, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(pe, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                y ? /* @__PURE__ */ t(pe, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(Tt, { size: 10 }),
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
                /* @__PURE__ */ t(hi, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: _ }),
                e.source === "youtube" && e.album && e.album !== _ && /* @__PURE__ */ n(he, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                f && /* @__PURE__ */ n(he, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: f })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ n(he, { children: [
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
                title: x && E ? "Pause" : "Play",
                children: N ? /* @__PURE__ */ n(he, { children: [
                  /* @__PURE__ */ t(Y, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : x && E ? /* @__PURE__ */ n(he, { children: [
                  /* @__PURE__ */ t(ht, { size: 16 }),
                  " ",
                  d("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ n(he, { children: [
                  /* @__PURE__ */ t(pe, { size: 16, style: { marginLeft: 2 } }),
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
                  /* @__PURE__ */ t(_t, { size: 13 }),
                  d("musiccreator.player.remixInRestyle")
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-7", children: /* @__PURE__ */ n("div", { className: "flex flex-wrap gap-6 items-start", children: [
      /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", style: { minWidth: 320, maxWidth: 720 }, children: [
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
        e.lyricsPreview ? /* @__PURE__ */ t(_d, { text: e.lyricsPreview }) : C ? /* @__PURE__ */ n(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Fs, { size: 18 }) }),
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
                    /* @__PURE__ */ t(li, { size: 13 }),
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
              /* @__PURE__ */ t(Tt, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: d("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        r && r.trackId === e.id && /* @__PURE__ */ t(
          Sd,
          {
            audioSrc: r.audioSrc,
            sourceLabel: r.sourceLabel,
            onUserPlay: () => {
              a.state.playing && a.pause();
            }
          }
        ),
        e.theme.trim() && /* @__PURE__ */ t(Ot, { label: d("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        g && /* @__PURE__ */ t(Ot, { label: d("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: g }) }),
        k.map((P) => /* @__PURE__ */ t(Ot, { label: P.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: P.rows.map((R) => /* @__PURE__ */ t(We, { label: R.label, value: R.value }, `${P.label}-${R.label}`)) }) }, P.label)),
        C && /* @__PURE__ */ t(Ot, { label: "Artist / Source", children: /* @__PURE__ */ n("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(tl, { size: 20 }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        M.length > 0 && /* @__PURE__ */ t(Ot, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: M.map((P) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => a.select(P),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(mt, { track: P, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: P.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: P.durationMs ? De(P.durationMs) : "Streamed" })
              ] })
            ]
          },
          P.id
        )) }) }),
        /* @__PURE__ */ t(Ot, { label: d("musiccreator.player.about"), children: /* @__PURE__ */ n("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.created"), value: wd(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(We, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(We, { label: "Channel", value: e.album }),
          y && e.durationMs > 0 && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.duration"), value: De(e.durationMs) }),
          e.source !== "youtube" && y && e.bitrate > 0 && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.bitrate"), value: vd(e.bitrate) }),
          e.source !== "youtube" && y && e.sampleRate > 0 && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.sampleRate"), value: xd(e.sampleRate) }),
          e.source !== "youtube" && y && e.sizeBytes > 0 && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.size"), value: fd(e.sizeBytes) }),
          f && /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.style"), value: f }),
          /* @__PURE__ */ t(We, { label: d("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : d(y ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Cd({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: o,
  searchHistory: s,
  onClearSearchHistory: c,
  resultType: d,
  onResultTypeChange: b,
  results: p,
  busy: g,
  error: k,
  status: u,
  providers: y,
  connectors: v,
  libraryTracks: _,
  playlists: f,
  playlistNameDraft: x,
  playlistBusy: E,
  favoriteIds: N,
  warmupIds: C,
  previewBusyId: M,
  addBusyId: P,
  savedYoutubeIds: R,
  player: I,
  onPreview: F,
  onAdd: ae,
  onOpenTrack: oe,
  onToggleFavorite: rt,
  onRemoveLibraryTrack: Se,
  onPlaylistNameDraftChange: j,
  onCreatePlaylist: ie,
  onAddTrackToPlaylist: Je,
  onRemoveTrackFromPlaylist: Ce,
  onPlayPlaylist: Ka,
  onDeletePlaylist: Ge,
  onConfigureConnector: Jt,
  onDisconnectConnector: ge,
  onClose: ya
}) {
  const [J, Ee] = S(null), [ba, gt] = S({}), [Ve, Ae] = S(!1), [Ue, xe] = S(null), [Et, Te] = S(null), [ye, ot] = S(null);
  te(() => {
    Te(null), ot(null);
  }, [e]);
  const Xa = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(_.map((h) => h.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(_.map((h) => h.album || h.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: f.length },
    { id: "sources", label: "Sources", count: y.length || 4 }
  ], it = (h) => {
    const z = I.state.trackId === h.id, O = z && I.state.loadingTrackId === h.id, ne = z && I.state.playing;
    return /* @__PURE__ */ n(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(mt, { track: h, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ n("button", { type: "button", onClick: () => oe(h), className: "flex-1 min-w-0 text-left", children: [
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
              onClick: () => rt(h),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: N.has(h.id) ? "white" : "var(--text-secondary)",
                background: N.has(h.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: N.has(h.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(Pr, { size: 13, fill: N.has(h.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => I.toggle(h),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                O ? /* @__PURE__ */ t(Y, { size: 12, className: "animate-spin" }) : ne ? /* @__PURE__ */ t(ht, { size: 12 }) : /* @__PURE__ */ t(pe, { size: 12 }),
                O ? "Loading" : ne ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => Se(h),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t(Ft, { size: 13 })
            }
          )
        ]
      },
      h.id
    );
  }, Gt = Array.from(
    _.reduce((h, z) => {
      const O = (z.artist || "Unknown artist").trim();
      return h.set(O, [...h.get(O) ?? [], z]), h;
    }, /* @__PURE__ */ new Map())
  ).sort((h, z) => h[0].localeCompare(z[0])), nt = Array.from(
    _.reduce((h, z) => {
      const O = (z.album || z.artist || "YouTube collection").trim();
      return h.set(O, [...h.get(O) ?? [], z]), h;
    }, /* @__PURE__ */ new Map())
  ).sort((h, z) => h[0].localeCompare(z[0])), Vt = y.length > 0 ? y.map((h) => {
    const z = v.find((st) => st.provider === h.id), O = z?.connected ?? h.configured, ne = z?.oauthRequired ?? h.state === "oauth_required";
    return {
      id: h.id,
      name: h.name,
      state: O ? "Connected" : ne ? "OAuth required" : h.state.replace(/_/g, " "),
      body: z?.message ?? h.message,
      action: O ? "Manage" : ne ? "Coming soon" : "Configure",
      enabled: O,
      needs: h.needs,
      kind: h.kind,
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
      connector: v.find((h) => h.provider === "spotify"),
      oauthRequired: !0,
      configurable: !1
    },
    {
      id: "lastfm",
      name: "Last.fm",
      state: v.find((h) => h.provider === "lastfm")?.connected ? "Connected" : "Metadata connector",
      body: "Artist bios, tags and now-playing style metadata. API key required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["apiKey"],
      kind: "metadata",
      connector: v.find((h) => h.provider === "lastfm"),
      oauthRequired: !1,
      configurable: !0
    },
    {
      id: "discogs",
      name: "Discogs",
      state: v.find((h) => h.provider === "discogs")?.connected ? "Connected" : "Metadata connector",
      body: "Release/catalog metadata and album artwork. Token required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["token"],
      kind: "catalog",
      connector: v.find((h) => h.provider === "discogs"),
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
              onClick: ya,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(me, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: Xa.map((h) => /* @__PURE__ */ n(
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
        /* @__PURE__ */ t(at, { size: 16, style: { color: "var(--text-disabled)" } }),
        /* @__PURE__ */ t(
          "input",
          {
            value: r,
            onChange: (h) => o(h.target.value),
            placeholder: "Search music, artists, albums…",
            className: "flex-1 bg-transparent outline-none",
            style: { color: "var(--text-primary)", fontSize: 14, fontWeight: 600 },
            autoFocus: !0
          }
        ),
        g && /* @__PURE__ */ t(Y, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(me, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((h) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => b(h),
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
            onClick: () => o(h),
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
            children: /* @__PURE__ */ t(me, { size: 11 })
          }
        )
      ] }),
      k && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: k })
    ] }),
    /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-2", children: [
        r.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        r.trim().length >= 2 && !g && p.length === 0 && !k && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        g && p.length === 0 && Array.from({ length: 5 }).map((h, z) => /* @__PURE__ */ n(
          "div",
          {
            className: "flex items-center gap-3 rounded-xl px-3 py-2",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", opacity: 0.78 },
            children: [
              /* @__PURE__ */ t("div", { className: "animate-pulse", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "var(--bg-hover)" } }),
              /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 12, width: `${70 - z * 6}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)" } }),
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 10, width: `${45 - z * 4}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)", marginTop: 8 } })
              ] }),
              /* @__PURE__ */ t(Y, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${z}`
        )),
        p.map((h) => {
          const z = Mi(h.title, h.channel), O = R.has(h.id), ne = M === h.id, st = P === h.id, Le = C.has(h.id);
          return /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                h.thumbnailUrl || Wa(h.id) ? /* @__PURE__ */ t("img", { src: h.thumbnailUrl || Wa(h.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(ga, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: z.song }),
                  /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    z.artist || h.channel || "Music",
                    h.durationMs ? ` · ${De(h.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: h.title })
                ] }),
                Le && !ne && /* @__PURE__ */ n("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(Y, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => F(h),
                    disabled: ne,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      ne ? /* @__PURE__ */ t(Y, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(pe, { size: 12 }),
                      ne ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => ae(h),
                    disabled: O || st,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: O ? "var(--text-disabled)" : "white", background: O ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      st ? /* @__PURE__ */ t(Y, { size: 12, className: "animate-spin" }) : O ? /* @__PURE__ */ t(pa, { size: 12 }) : /* @__PURE__ */ t(Lr, { size: 12 }),
                      st ? "Adding" : O ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            h.id
          );
        })
      ] }),
      e === "artists" && (Et !== null ? (() => {
        const h = Gt.find(([z]) => z === Et)?.[1] ?? [];
        return /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ n(
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
            /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Et }),
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
                onClick: () => oe(h[0]),
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
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: h.map(it) })
        ] });
      })() : /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Gt.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Gt.map(([h, z]) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => Te(h),
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            title: `Open ${h}`,
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: h }),
              /* @__PURE__ */ n("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                z.length,
                " track",
                z.length === 1 ? "" : "s"
              ] })
            ]
          },
          h
        ))
      ] })),
      e === "albums" && (ye !== null ? (() => {
        const z = nt.find(([ne]) => ne === ye)?.[1] ?? [], O = z[0];
        return /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ n(
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
            O && /* @__PURE__ */ t(mt, { track: O, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: ye }),
              /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                O?.artist || "Mixed artists",
                " · ",
                z.length,
                " track",
                z.length === 1 ? "" : "s"
              ] })
            ] }),
            O && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => oe(O),
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
      })() : /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        nt.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        nt.map(([h, z]) => {
          const O = z[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ot(h),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${h}`,
              children: /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
                O && /* @__PURE__ */ t(mt, { track: O, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ n("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: h }),
                  /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    O?.artist || "Mixed artists",
                    " · ",
                    z.length,
                    " track",
                    z.length === 1 ? "" : "s"
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
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Ls, { size: 22 }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: x,
              onChange: (h) => j(h.target.value),
              onKeyDown: (h) => {
                h.key === "Enter" && ie();
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
              disabled: E,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                E ? /* @__PURE__ */ t(Y, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Lr, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        f.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : f.map((h) => /* @__PURE__ */ n("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
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
                  onClick: () => Ka(h),
                  disabled: h.items.length === 0,
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
                  onClick: () => Ge(h.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(Ft, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: h.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : h.items.map((z) => /* @__PURE__ */ n("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(mt, { track: z, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ n("button", { type: "button", onClick: () => oe(z), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: z.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: z.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => Ce(h.id, z.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(me, { size: 13 })
              }
            )
          ] }, `${h.id}-${z.id}`)) }),
          _.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: _.slice(0, 8).filter((z) => !h.items.some((O) => O.id === z.id)).map((z) => /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => Je(h.id, z),
              className: "rounded-full px-3",
              style: { height: 28, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              children: [
                "+ ",
                z.title.slice(0, 28)
              ]
            },
            `${h.id}-add-${z.id}`
          )) })
        ] }, h.id))
      ] }),
      e === "sources" && /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        Vt.map((h) => /* @__PURE__ */ n(
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
                    children: h.name === "Spotify" ? "♬" : h.name === "YouTube" ? /* @__PURE__ */ t(pe, { size: 18 }) : h.kind === "catalog" ? /* @__PURE__ */ t(is, { size: 18 }) : /* @__PURE__ */ t(St, { size: 18 })
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
                      const z = h.connector?.credentialSpecs ?? h.needs.map((O) => ({ name: O, label: O, secret: !0, required: !0 }));
                      gt({}), xe(null), Ee({
                        id: h.id,
                        name: h.name,
                        body: h.body,
                        specs: z,
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
        J && /* @__PURE__ */ n("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ n("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ n("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                J.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: J.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => Ee(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(me, { size: 16 }) })
          ] }),
          J.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ n(he, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: J.specs.map((h) => /* @__PURE__ */ n("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: h.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: h.label || h.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: ba[h.name] ?? "",
                  type: h.secret ? "password" : "text",
                  onChange: (z) => gt((O) => ({ ...O, [h.name]: z.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: h.name
                }
              )
            ] }, h.name)) }),
            Ue && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: Ue }),
            /* @__PURE__ */ n("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  disabled: Ve || !J.configurable,
                  onClick: () => {
                    Ae(!0), xe(null), Jt(J.id, ba).then(() => {
                      gt({}), Ee(null);
                    }).catch((h) => xe(h.message || "Connector setup failed.")).finally(() => Ae(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Ve ? /* @__PURE__ */ t(Y, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(pa, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              J.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Ve,
                  onClick: () => {
                    Ae(!0), xe(null), ge(J.id).then(() => Ee(null)).catch((h) => xe(h.message || "Disconnect failed.")).finally(() => Ae(!1));
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
function Ed() {
  const e = pl(), { t: a } = Ct(), r = hl(), o = fl(), { state: s, dispatch: c } = mi(), { addNotification: d } = wl(), b = s.theme.mode, [p, g] = S("compose"), [k, u] = S(!1), [y, v] = S("creator"), [_, f] = S(null), [x, E] = S(""), [N, C] = S(""), [M, P] = S(null), [R, I] = S(""), [F, ae] = S(""), [oe, rt] = S(!1), [Se, j] = S(""), [ie, Je] = S(""), [Ce, Ka] = S(!0), [Ge, Jt] = S(!1), [ge, ya] = S(null), [J, Ee] = S({}), [ba, gt] = S(!1), [Ve, Ae] = S(null), [Ue, xe] = S(null), [Et, Te] = S(null), [ye, ot] = S(!1), [Xa, it] = S(!1), [Gt, nt] = S(!1), [Vt, h] = S([]), z = ee(null), O = ee(null), [ne, st] = S(!1), [Le, $r] = S("best"), [ji, Pi] = S(null), [Di, fa] = S(!1), [Ye, Fr] = S("mic"), [Oe, Qa] = S(!1), [Br, Wr] = S(0), [qr, Yt] = S(null), Jr = ee(null), va = ee([]), At = ee(null), Za = ee(0), Kt = ee(null), [Lt, He] = S("idle"), [Xt, W] = S(null), [Ui, zt] = S(0), [Gr, Vr] = S(0), [yt, ze] = S([]), [It, Q] = S(null), [Ie, Yr] = S(""), [Qt, Kr] = S("cards"), [Re, Xr] = S("mywork"), [Ke, Oi] = S("all"), [bt, Qr] = S("all"), [Xe, je] = S(!1), [Hi, Zt] = S("search"), [er, $i] = S(""), [Fi, Zr] = S(() => {
    try {
      const i = localStorage.getItem("juli3ta:searchHistory"), l = i ? JSON.parse(i) : null;
      return Array.isArray(l) ? l.filter((m) => typeof m == "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  }), eo = L((i) => {
    const l = i.trim();
    l.length < 2 || Zr((m) => {
      const w = [l, ...m.filter((T) => T.toLowerCase() !== l.toLowerCase())].slice(0, 5);
      try {
        localStorage.setItem("juli3ta:searchHistory", JSON.stringify(w));
      } catch {
      }
      return w;
    });
  }, []), [ea, Bi] = S("tracks"), [Wi, tr] = S([]), [qi, xa] = S(!1), [Ji, Qe] = S(null), [Gi, to] = S(null), [Vi, ao] = S([]), [Yi, ro] = S([]), [Ze, oo] = S({}), [Ki, io] = S(() => /* @__PURE__ */ new Set()), [Xi, no] = S(null), [Qi, so] = S(null), [lo, co] = S([]), [we, ar] = S([]), [wa, rr] = S(() => /* @__PURE__ */ new Set()), [or, Mt] = S([]), [ir, uo] = S(""), [Zi, po] = S(!1), mo = ee(/* @__PURE__ */ new Map()), nr = ee(/* @__PURE__ */ new Map()), sr = ee(/* @__PURE__ */ new Set()), [ka, ta] = S(null), [Sa, ho] = S(!1), [lr, go] = S(fi), [en, cr] = S(!1);
  te(() => {
    let i = !1;
    return (async () => {
      try {
        await Promise.all([
          qc(),
          Ql()
        ]);
      } catch (H) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", H);
      }
      await Wl().catch((H) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", H);
      });
      const [l, m, w, T, A, D, G] = await Promise.allSettled([
        Nl(),
        kr(),
        Dl(),
        Fo(),
        Fl(),
        ql("track"),
        na()
      ]);
      if (i) return;
      const be = l.status === "fulfilled" ? l.value : [], $e = m.status === "fulfilled" ? m.value.tracks.map((H) => ({ ...H, source: "juli3ta" })) : [];
      m.status === "fulfilled" && (ta(m.value.rootPath), Q((H) => H?.startsWith("Real file library unavailable") ? null : H)), l.status === "fulfilled" ? ze(sa($e, be)) : (console.error("[Juli3ta] listTracks failed:", l.reason), ze(sa($e)), Q("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), m.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", m.reason), Q("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const vt = new Set($e.map((H) => H.id)), Fe = new Set(be.map((H) => H.id)), de = be.filter((H) => !vt.has(H.id) && vc(H)), _e = $e.filter((H) => !Fe.has(H.id));
      (de.length > 0 || _e.length > 0) && (async () => {
        const H = [];
        for (const se of de)
          try {
            const Z = await Jo({ ...se, source: "juli3ta" });
            H.push({ ...se, ...Z, source: "juli3ta" });
          } catch (Z) {
            console.warn("[Juli3ta] host file backfill failed:", se.id, Z);
          }
        for (const se of _e)
          try {
            await Ba({ ...se, source: "juli3ta" });
          } catch (Z) {
            console.warn("[Juli3ta] standalone cache backfill failed:", se.id, Z);
          }
        !i && (H.length > 0 || _e.length > 0) && (ze((se) => sa(H, _e, se)), kr().then((se) => ta(se.rootPath)).catch(() => {
        }));
      })(), w.status === "fulfilled" && go(w.value), T.status === "fulfilled" && h(T.value), A.status === "fulfilled" && ar(A.value), D.status === "fulfilled" && rr(new Set(D.value.map((H) => H.entityId))), G.status === "fulfilled" && Mt(G.value);
    })(), () => {
      i = !0;
    };
  }, []), te(() => {
    if (!It?.startsWith("Real file library unavailable")) return;
    let i = !1;
    const l = async () => {
      try {
        const w = await kr();
        if (i) return;
        ta(w.rootPath), ze((T) => sa(w.tracks.map((A) => ({ ...A, source: "juli3ta" })), T)), Q((T) => T?.startsWith("Real file library unavailable") ? null : T);
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
      return await Ba(m), ta(l.folderPath?.split("/").slice(0, -1).join("/") || ka), Q(null), ze((w) => sa([m], w)), !0;
    } catch (l) {
      const m = l.message || "Real file save failed";
      return Q(`Couldn't save "${i.title}" as a real file — ${m}.`), !1;
    }
  }, [ka]), tn = L(async (i) => {
    go(i);
    try {
      await Ul(i);
    } catch (l) {
      console.warn("Settings save failed:", l);
    }
  }, []), Ta = ue(
    () => e.state ? Jc(e.state.agents, e.state.included) : [],
    [e.state]
  ), [_a, an] = S([]), [rn, on] = S(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [nn, yo] = S(!0), B = _a.find((i) => i.podId === rn) ?? _a[0] ?? null, ur = L(async () => {
    yo(!0);
    const i = new AbortController(), l = await Kc(Ta, i.signal);
    an(l), yo(!1);
  }, [Ta]);
  te(() => {
    Ta.length !== 0 && queueMicrotask(() => void ur());
  }, [Ta, ur]);
  const sn = L((i) => {
    on(i);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", i);
    } catch {
    }
  }, []), aa = ee(null), ce = ee(null), ra = ee(null), Na = ee(!1);
  te(() => () => {
    aa.current?.abort(), ce.current?.abort();
  }, []), te(() => {
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
    const m = setInterval(l, 250), w = setInterval(() => Vr((T) => T + 1), 4500);
    return () => {
      clearInterval(m), clearInterval(w);
    };
  }, [Lt]);
  const oa = L((i) => {
    if (!i.lyricsPreview) return null;
    const l = o.ensureUserFolder("Music");
    if (!l) return null;
    const m = `${ja(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, w = o.findChildByName(l, m);
    return w ? (o.writeFile(w.id, i.lyricsPreview), w.id) : o.createFile(l, m, i.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [o]), bo = L((i) => {
    if (!i.audioDataUrl) return null;
    const l = o.ensureUserFolder("Music");
    if (!l) return null;
    const m = `${ja(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, w = o.findChildByName(l, m);
    return w ? w.id : o.createFile(l, m, "", {
      mimeType: "audio/mpeg",
      refTrackId: i.id
    });
  }, [o]), ln = L(async () => {
    if (!B) {
      W(a("musiccreator.error.noPod"));
      return;
    }
    if (p === "restyle" && !Ue) {
      W(ye ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (Na.current) return;
    Na.current = !0, W(null), aa.current?.abort();
    const i = new AbortController();
    aa.current = i;
    try {
      const l = lr.overridesByEndpoint[B.url] ?? {}, m = {
        ...B,
        models: {
          music: l.music || B.models.music,
          cover: l.cover || B.models.cover,
          lyrics: l.lyrics || B.models.lyrics,
          lyricsBackup: l.lyricsBackup || B.models.lyricsBackup,
          image: l.image || B.models.image,
          allIds: B.models.allIds
        }
      }, w = Hr(J);
      let T = N.trim(), A = F.trim(), D = R.trim(), G = null;
      if (!T && !oe) {
        if (!x.trim() && !(J.intent ?? "").trim()) {
          W(a("musiccreator.error.noInput"));
          return;
        }
        He("lyrics");
        const le = [];
        x.trim() && le.push(x.trim());
        const gr = (J.intent ?? "").trim();
        gr && le.push(`User intent (must respect): ${gr}`), w && le.push(`Musical context: ${w}`), M && le.push(`Structure: ${M.prompt}`);
        const Kn = le.join(`

`);
        G = await ed(m, Kn, i.signal), T = G.lyrics, A || (A = G.song_title), D || (D = G.style_tags);
      } else !T && oe && (T = `[Intro]
[Instrumental]
[Outro]`);
      if (G && (C(G.lyrics), A === "Untitled" && (A = ""), A && !F.trim() && ae(A), D && !R.trim() && I(D), G.usedFallback && Q(
        `Primary lyrics model errored — used backup chat model "${m.models.lyricsBackup ?? "unknown"}" instead.`
      )), T.length > Dt) {
        W(a("musiccreator.error.lyricsTooLong", { count: T.length, max: Dt })), He("idle");
        return;
      }
      if (A.trim() || (A = Fc(T, x, D || R), A && A !== "Untitled" && !F.trim() && ae(A)), p === "lyricsOnly") {
        const le = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (A || a("musiccreator.track.untitled")) + " (lyrics)",
          styleTags: D || "—",
          lyricsPreview: T,
          // store the full text — used by Load
          durationMs: 0,
          bitrate: 0,
          sampleRate: 0,
          sizeBytes: 0,
          createdAt: Date.now(),
          audioDataUrl: "",
          // no audio
          specsJson: $t(J) > 0 ? JSON.stringify(J) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: Se,
          theme: x
        };
        await dr(le) && oa(le), He("idle"), zt(0);
        return;
      }
      if (p === "restyle" && !Ue) {
        W(ye ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), He("idle");
        return;
      }
      He("song");
      const be = [D, w].filter((le) => le && le.length > 0).join(". "), $e = td(
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
        (ie.trim() || Ha(A, x, D || R)).slice(0, 1500),
        i.signal
      ).catch((le) => {
        if (le.name === "AbortError") throw le;
        return console.warn("[Juli3ta] Cover-art generation failed:", le), Q(`Cover-art skipped: ${le.message}`), Fe;
      }) : Promise.resolve(Fe), _e = await Promise.allSettled([$e, de]), H = _e[0], se = _e[1];
      if (H.status === "rejected")
        throw i.abort(), H.reason;
      const Z = H.value, pt = se.status === "fulfilled" ? se.value : Fe;
      if (!Z?.data?.audio || typeof Z.data.audio != "string" || Z.data.audio.length < 100) {
        const le = Z?.trace_id ? ` (trace ${Z.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${le}. Try again or pick a different model in Settings.`);
      }
      const Vn = `data:audio/mpeg;base64,${Z.data.audio}`, Yn = p === "restyle" ? " (restyle)" : "", tt = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (A || a("musiccreator.track.untitled")) + Yn,
        styleTags: D || "—",
        lyricsPreview: T,
        // store the full text — used by Load
        durationMs: Z.data.duration_ms ?? 0,
        bitrate: Z.data.bitrate ?? 0,
        sampleRate: Z.data.sample_rate ?? 0,
        sizeBytes: Z.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: Vn,
        specsJson: $t(J) > 0 ? JSON.stringify(J) : "",
        coverDataUrl: pt,
        theme: x
      };
      j(pt), console.info("[Juli3ta] Saving generated song:", { id: tt.id, title: tt.title, durationMs: tt.durationMs, sizeBytes: tt.sizeBytes }), await dr(tt) && (bo(tt), oa(tt), p === "restyle" && Ue && Pi({
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
      console.error("[Juli3ta] Generate failed:", l), W(l.message || "Generation failed — check the console for details."), He("idle"), zt(0);
    } finally {
      Na.current = !1;
    }
  }, [
    B,
    x,
    N,
    F,
    R,
    J,
    M,
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
  ]), cn = () => z.current?.click(), fo = ee(0), lt = L(async (i, l) => {
    const m = ++fo.current, w = () => fo.current === m;
    W(null), ot(!0), xe(null), Ae(l), Te(null);
    try {
      if (Le === "mix") {
        const T = await uc(i);
        if (!w()) return;
        xe(T.base64);
        const A = T.sourceDurationSec / 60;
        if (T.segments.length > 1) {
          const D = T.segments.map((G) => `${Math.floor(G.startSec / 60)}:${Math.floor(G.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          Te(
            `Mixed ${T.segments.length} iconic moments (${T.durationSec.toFixed(0)} s) from ${A.toFixed(1)} min — at ${D}`
          );
        } else
          Te(`Using whole clip (${T.durationSec.toFixed(0)} s)`);
      } else {
        const T = await Ei(i);
        if (!w()) return;
        xe(T.base64);
        const A = T.sourceDurationSec / 60, D = T.startSec / 60, G = T.startSec < 60 ? `${T.startSec.toFixed(1)} s` : `${Math.floor(D)}:${Math.floor(T.startSec % 60).toString().padStart(2, "0")}`;
        Te(
          T.sourceDurationSec <= T.durationSec + 0.5 ? `Using whole clip (${T.durationSec.toFixed(0)} s)` : `Auto-picked best ${T.durationSec.toFixed(0)} s starting at ${G} of ${A.toFixed(1)} min`
        );
      }
    } catch (T) {
      if (!w()) return;
      W(T.message || "Could not analyze that audio."), Ae(null);
    } finally {
      w() && ot(!1);
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
      ].find((T) => MediaRecorder.isTypeSupported(T)) || "", w = new MediaRecorder(i, m ? { mimeType: m } : void 0);
      va.current = [], w.ondataavailable = (T) => {
        T.data && T.data.size > 0 && va.current.push(T.data);
      }, w.onstop = async () => {
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
            const D = typeof A.result == "string" ? A.result : "", G = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${Ye === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - Za.current,
              mimeType: T.type || m || "audio/webm",
              audioDataUrl: D,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await Si(G), h((be) => [G, ...be]);
              } catch (be) {
                console.warn("Recording save failed", be), Yt("Could not save the recording. Try again.");
              }
            })(), fa(!1), lt(T, G.name);
          }, A.readAsDataURL(T);
        } finally {
          At.current?.getTracks().forEach((T) => T.stop()), At.current = null;
        }
      }, w.start(250), Jr.current = w, Za.current = Date.now(), Wr(0), Qa(!0), Kt.current = setInterval(() => {
        Wr(Date.now() - Za.current);
      }, 100);
    } catch (i) {
      Yt(i.message || "Could not start recording."), At.current?.getTracks().forEach((l) => l.stop()), At.current = null, Qa(!1);
    }
  }, un = () => {
    const i = Jr.current;
    i && i.state !== "inactive" && i.stop(), Kt.current && clearInterval(Kt.current), Qa(!1);
  };
  te(() => () => {
    At.current?.getTracks().forEach((i) => i.stop()), Kt.current && clearInterval(Kt.current);
  }, []);
  const pn = (i) => {
    const l = i.target.files?.[0];
    if (i.target.value = "", !!l) {
      if (l.size > 50 * 1024 * 1024) {
        W("Reference audio is too big. Max 50 MB.");
        return;
      }
      lt(l, l.name);
    }
  }, mn = (i) => {
    it(!1), lt(i.audioDataUrl, i.name);
  }, hn = () => {
    it(!0), Fo().then((i) => h(i)).catch(() => {
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
    if (!B) throw new Error("No endpoint connected");
    const w = (de) => {
      const _e = de, H = _e.choices?.[0], se = [
        H?.message?.content,
        H?.delta?.content,
        H?.text,
        _e.output_text
      ];
      for (const Z of se)
        if (typeof Z == "string" && Z.trim().length > 0) return Z.trim();
      return "";
    }, T = (de) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(de), A = /* @__PURE__ */ new Set(), D = [], G = (de) => {
      de && !A.has(de) && (A.add(de), D.push(de));
    };
    if (G(B.models.lyricsBackup), B.models.allIds.filter(T).forEach(G), D.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const be = typeof l == "string" ? l : JSON.stringify(l), $e = m?.temperature ?? 0.5, vt = Math.max(m?.maxTokens ?? 800, 400), Fe = 45e3;
    return Ya(D, async (de) => {
      const _e = Bt(m?.signal, Fe);
      let H;
      try {
        H = await fetch(`${B.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${B.apiKey}`,
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
      if (!H.ok) {
        const pt = await H.text().catch(() => "");
        throw new ke(H.status, pt, `AI assist HTTP ${H.status}: ${pt.slice(0, 200)}`);
      }
      const se = await H.json(), Z = w(se);
      if (!Z)
        throw console.warn("[Juli3ta] empty AI assist content from", de, se), new ke(502, "", `Model "${de}" returned empty content`);
      return Z.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [B]), vn = L(async () => {
    if (B) {
      gt(!0), W(null);
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
          theme: x || null,
          style: R || null,
          lyrics: N ? N.slice(0, 1500) : null,
          existing_specs: $t(J) > 0 ? J : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: ce.current.signal
        }), m = Ri(l) ?? l;
        let w;
        try {
          w = JSON.parse(m);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${l.slice(0, 160)}`);
        }
        Ee((T) => ({ ...w, intent: T.intent }));
      } catch (i) {
        W(i.message || "Optimize failed.");
      } finally {
        gt(!1);
      }
    }
  }, [B, x, R, N, J, ct]), [Me, ft] = S(null), vo = L(async () => {
    if (!B) return;
    if (!B.models.image) {
      W(`This endpoint (${B.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (Ge) return;
    ce.current?.abort(), ce.current = new AbortController();
    const i = ce.current.signal;
    Jt(!0), W(null);
    try {
      const l = (ie.trim() || Ha(F, x, R)).slice(0, 1500), m = await Rr(B, l, i);
      if (i.aborted) return;
      j(m), ge && ra.current?.(ge, m);
    } catch (l) {
      if (l.name === "AbortError") return;
      W(l.message || "Cover-art generation failed.");
    } finally {
      Jt(!1);
    }
  }, [B, ie, F, x, R, Ge, ge]), xo = L((i) => {
    if (!i.type.startsWith("image/")) {
      W("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (i.size > 4 * 1024 * 1024) {
      W("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const l = new FileReader();
    l.onerror = () => W("Could not read that image file."), l.onload = () => {
      const m = l.result;
      typeof m == "string" && m.startsWith("data:image/") && (j(m), ge && ra.current?.(ge, m));
    }, l.readAsDataURL(i);
  }, [ge]), xn = L(async () => {
    if (!Me) {
      ft("theme"), W(null);
      try {
        const i = "You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.";
        ce.current?.abort(), ce.current = new AbortController();
        const l = await ct(i, {
          style: R || "pop",
          existing_theme: x || null
        }, { temperature: 0.85, maxTokens: 200, signal: ce.current.signal });
        E(l);
      } catch (i) {
        W(i.message || "Theme inspiration failed.");
      } finally {
        ft(null);
      }
    }
  }, [Me, ct, R, x]), wn = L(async () => {
    if (!Me) {
      ft("style"), W(null);
      try {
        const i = 'You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".';
        ce.current?.abort(), ce.current = new AbortController();
        const l = await ct(i, {
          theme: x || "a quiet evening",
          existing_style: R || null
        }, { temperature: 0.7, maxTokens: 120, signal: ce.current.signal });
        I(l.replace(/^["']|["']$/g, ""));
      } catch (i) {
        W(i.message || "Style suggestion failed.");
      } finally {
        ft(null);
      }
    }
  }, [Me, ct, x, R]), kn = L(async () => {
    if (!Me) {
      if (!N.trim()) {
        W("Nothing to polish — write some lyrics first.");
        return;
      }
      ft("lyrics"), W(null);
      try {
        const i = "You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.";
        ce.current?.abort(), ce.current = new AbortController();
        const l = await ct(i, {
          style: R || null,
          lyrics: N
        }, { temperature: 0.6, maxTokens: 1200, signal: ce.current.signal });
        if (l.length > Dt) {
          W(`Polished lyrics exceeded ${Dt} chars (${l.length}). Trimming the original first might help.`);
          return;
        }
        C(l);
      } catch (i) {
        W(i.message || "Lyrics polish failed.");
      } finally {
        ft(null);
      }
    }
  }, [Me, ct, R, N]), Sn = (i) => {
    I((l) => l ? `${l}, ${i.toLowerCase()}` : i.toLowerCase());
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
    E(i[Math.floor(Math.random() * i.length)]);
  }, Tn = () => {
    const i = _ ?? X.state.trackId ?? ut[0]?.id ?? we[0]?.id ?? null, l = i ? jt.find((m) => m.id === i) ?? null : null;
    l && Rt(l), v("creator"), pr();
  }, wo = L((i) => {
    ze((l) => l.filter((m) => m.id !== i)), El(i).catch((l) => console.warn("Track cache delete failed:", l)), bc(i).catch((l) => console.warn("Track file delete failed:", l));
  }, []), _n = L(async () => {
    if (!Sa) {
      ho(!0);
      try {
        const i = await fc();
        ta(i), d({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: i,
          isRead: !1
        });
      } catch (i) {
        Q(`Could not open JULI3TA folder — ${i.message || i}`);
      } finally {
        ho(!1);
      }
    }
  }, [d, Sa]), Ca = L(async (i, l) => {
    const m = l.trim().slice(0, 200) || "Untitled";
    ze((w) => w.map((T) => T.id === i ? { ...T, title: m } : T));
    try {
      await Al(i, m), Q(null);
    } catch (w) {
      const T = w.message || "Database write failed";
      Q(`Couldn't rename track — ${T}.`);
    }
  }, []), mr = L(async (i, l) => {
    ze((m) => m.map((w) => w.id === i ? { ...w, coverDataUrl: l } : w));
    try {
      await Ll(i, l), Q(null);
    } catch (m) {
      const w = m.message || "Database write failed";
      Q(`Couldn't save cover art — ${w}.`);
    }
  }, []);
  te(() => {
    ra.current = mr;
  }, [mr]);
  const ko = L(async (i, l) => {
    ze((m) => m.map((w) => w.id === i ? { ...w, styleTags: l || "—" } : w));
    try {
      await zl(i, l), Q(null);
    } catch (m) {
      const w = m.message || "Database write failed";
      Q(`Couldn't save style — ${w}.`);
    }
  }, []), So = L(async (i, l) => {
    ze((m) => m.map((w) => w.id === i ? { ...w, lyricsPreview: l } : w));
    try {
      await Il(i, l), Q(null);
    } catch (m) {
      const w = m.message || "Database write failed";
      Q(`Couldn't save lyrics — ${w}.`);
    }
  }, []), To = L(async (i, l) => {
    ze((m) => m.map((w) => w.id === i ? { ...w, specsJson: l } : w));
    try {
      await Ml(i, l), Q(null);
    } catch (m) {
      const w = m.message || "Database write failed";
      Q(`Couldn't save specs — ${w}.`);
    }
  }, []), _o = L(async (i, l) => {
    ze((m) => m.map((w) => w.id === i ? { ...w, theme: l } : w));
    try {
      await Rl(i, l), Q(null);
    } catch (m) {
      const w = m.message || "Database write failed";
      Q(`Couldn't save theme — ${w}.`);
    }
  }, []);
  te(() => {
    if (!ge) return;
    const i = ge, l = setTimeout(() => {
      const m = yt.find((be) => be.id === i);
      if (!m) return;
      const w = F.trim() || m.title, T = R.trim(), A = x, D = $t(J) > 0 ? JSON.stringify(J) : "", G = m.styleTags === "—" ? "" : m.styleTags || "";
      m.title !== w && Ca(i, w), G !== T && ko(i, T), (m.lyricsPreview || "") !== N && So(i, N), (m.specsJson || "") !== D && To(i, D), (m.theme || "") !== A && _o(i, A);
    }, 600);
    return () => clearTimeout(l);
  }, [ge, F, R, x, N, J, yt, Ca, ko, So, To, _o]);
  const [No, Co] = S(null), [Nn, Eo] = S(!1), Rt = L((i) => {
    C(i.lyricsPreview ?? ""), I(i.styleTags && i.styleTags !== "—" ? i.styleTags : ""), E(i.theme ?? "");
    const l = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (ae(l), rt(!1), i.specsJson)
      try {
        Ee(JSON.parse(i.specsJson));
      } catch {
        Ee({});
      }
    else
      Ee({});
    j(i.coverDataUrl ?? ""), Je(""), ya(i.id), W(null), P(null), rt(!1), ve(i) ? i.source === "youtube" ? (g("restyle"), xe(null), Ae(`${l}.mp3`), Te("Resolving streamed audio…"), ot(!0), (async () => {
      try {
        const w = i.externalId || "";
        if (!w) throw new Error("Missing source identifier.");
        const T = la(w), A = Ze[T], D = A && Date.now() - A.resolvedAt < 5400 * 1e3 ? A.src : (await wr(w)).proxyUrl;
        await lt(D, `${l}.mp3`);
      } catch (w) {
        ot(!1), xe(null), Ae(null), Te(null), W(`Could not load streamed track for restyle: ${w.message || "unknown error"}`);
      }
    })()) : (g("restyle"), lt(i.audioDataUrl, `${l}.mp3`)) : (xe(null), Ae(null), Te(null), g("lyricsOnly"));
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
  }, [oa, c, d, a]), Ea = L((i, l, m, w) => {
    const T = o.ensureUserFolder("Desktop");
    if (!T) return;
    const A = o.findChildByName(T, i);
    let D;
    if (A)
      m.refTrackId || o.writeFile(A.id, l), D = A.id;
    else {
      D = o.createFile(T, i, l, m);
      const G = Array.from(w).reduce((vt, Fe) => vt + Fe.charCodeAt(0), 0), be = G % 6 + 1, $e = Math.floor(G / 6) % 4;
      c({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: i,
          icon: bl(i),
          fileSystemNodeId: D,
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
    je(!1), v("player"), f(i.id);
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
      i.preventDefault(), C(l.lyricsPreview);
      const m = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !F.trim() && m && ae(m), !R.trim() && l.styleTags && l.styleTags !== "—" && I(l.styleTags);
      return;
    }
  }, [et, F, R]), zn = L((i) => {
    const l = et(i);
    l && l.styleTags && l.styleTags !== "—" && (i.preventDefault(), I((m) => m ? `${m}, ${l.styleTags}` : l.styleTags));
  }, [et]), In = L((i) => {
    const l = et(i);
    if (l) {
      i.preventDefault();
      const m = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), w = l.styleTags && l.styleTags !== "—" ? `Inspired by "${m}" — ${l.styleTags}` : `Inspired by "${m}"`;
      E(w);
    }
  }, [et]), Mn = L((i) => {
    const l = et(i);
    l && (i.preventDefault(), ae(l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [et]), Aa = (i) => {
    i.dataTransfer.types.includes(ua) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
  }, Lo = N.length, Rn = R.length, q = Lt !== "idle", jn = ue(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            aa.current?.abort(), ce.current?.abort(), Na.current = !1, g("compose"), E(""), C(""), I(""), ae(""), Ee({}), P(null), rt(!1), j(""), Je(""), st(!1), xe(null), Ae(null), Te(null), W(null), Q(null), He("idle"), zt(0), ft(null), Jt(!1), gt(!1), ya(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => pr() },
          { id: "mode-restyle", label: "Restyle Mode", onSelect: () => g("restyle") },
          { id: "mode-lyrics", label: "Lyrics Only Mode", onSelect: () => g("lyricsOnly") }
        ]
      },
      {
        id: "view",
        label: "View",
        items: [
          { id: "view-creator", label: "Creator", onSelect: () => v("creator") },
          { id: "view-player", label: "Player", onSelect: () => v("player") },
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
  ml(r?.id ?? null, jn);
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
      const m = la(l.id), w = Ze[m];
      w && Date.now() - w.resolvedAt < 5400 * 1e3 || sr.current.has(l.id) || (sr.current.add(l.id), io((T) => new Set(T).add(l.id)), wr(l.id).then((T) => {
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
  te(() => {
    if (!Xe) return;
    const i = new AbortController();
    return Promise.allSettled([
      pc(i.signal),
      Wo(i.signal),
      qo(i.signal)
    ]).then(([l, m, w]) => {
      l.status === "fulfilled" ? to(l.value) : to(null), m.status === "fulfilled" && ao(m.value), w.status === "fulfilled" && ro(w.value);
    }), () => i.abort();
  }, [Xe]), te(() => {
    if (!Xe) return;
    const i = (l) => {
      l.key === "Escape" && je(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [Xe]), te(() => {
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
    const w = new AbortController(), T = setTimeout(() => {
      xa(!0), Qe(null);
      let A = nr.current.get(l);
      A || (A = yc(i, ea, 20, w.signal).then((D) => ea === "playlists" ? D.results.playlists : D.results.tracks).catch(() => gc(i, 20, w.signal)).finally(() => {
        nr.current.delete(l);
      }), nr.current.set(l, A)), A.then((D) => {
        mo.current.set(l, D), tr(D), ia(D), D.length > 0 && eo(i);
      }).catch((D) => {
        w.signal.aborted || Qe(D.message || "Music search failed.");
      }).finally(() => {
        w.signal.aborted || xa(!1);
      });
    }, 120);
    return () => {
      w.abort(), clearTimeout(T);
    };
  }, [er, ea, Xe, ia, eo]);
  const La = L(async () => {
    const [i, l] = await Promise.allSettled([
      Wo(),
      qo()
    ]);
    i.status === "fulfilled" && ao(i.value), l.status === "fulfilled" && ro(l.value);
  }, []), Pn = L(async (i, l) => {
    await mc(i, l), await La(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${i} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, La]), Dn = L(async (i) => {
    await hc(i), await La(), d({
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
    const m = la(i.externalId), w = Ze[m] ?? Ze[i.id];
    if (!l?.force && w && Date.now() - w.resolvedAt < 5400 * 1e3) return w.src;
    const T = await wr(i.externalId);
    return oo((A) => ({ ...A, [m]: { src: T.proxyUrl, resolvedAt: Date.now() } })), T.proxyUrl;
  }, [Ze]), jt = ue(
    () => [...lo, ...we, ...ut],
    [lo, we, ut]
  ), zo = ee(null), X = ad(jt, zo, On);
  te(() => {
    if (y !== "player") return;
    const i = (l) => {
      const m = l.target;
      if (m) {
        const A = m.tagName;
        if (A === "INPUT" || A === "TEXTAREA" || A === "SELECT" || m.isContentEditable) return;
      }
      const w = X.state.trackId;
      if (!w) return;
      const T = jt.find((A) => A.id === w);
      if (T)
        switch (l.key) {
          case " ":
            l.preventDefault(), X.toggle(T);
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
  }, [y, X, jt]);
  const Hn = L((i) => {
    const l = i.items.find(ve);
    l && (co((m) => [
      ...i.items.filter((w) => !m.some((T) => T.id === w.id)),
      ...m
    ]), f(l.id), je(!1), v("player"), X.play(l));
  }, [X]), $n = L(async (i) => {
    await Vl(i), Mt(await na());
  }, []), Fn = L((i) => {
    Qe(null), no(i.id);
    const l = la(i.id), m = Ze[l], w = za(
      i,
      m ? { id: l, audioDataUrl: m.src } : void 0
    );
    co((T) => [w, ...T.filter((A) => A.id !== w.id)]), f(w.id), v("player"), X.play(w), no(null);
  }, [X, za, Ze]), Bn = L(async (i) => {
    so(i.id);
    const l = za(i);
    try {
      await ki(l), ar((m) => [l, ...m.filter((w) => w.id !== l.id)]), f(l.id), Xr("library"), Qr("all"), ia([i]), or.length > 0;
    } catch (m) {
      Qe(m.message || "Could not save track.");
    } finally {
      so(null);
    }
  }, [za, ia, or.length]), Io = L((i) => {
    rr((l) => {
      const m = new Set(l);
      return m.has(i.id) ? m.delete(i.id) : m.add(i.id), m;
    }), Jl({
      kind: "track",
      entityId: i.id,
      provider: i.source ?? "youtube",
      title: i.title
    }).catch((l) => console.warn("Favorite toggle failed:", l));
  }, []), Wn = L(async () => {
    const i = ir.trim() || "New Playlist";
    po(!0);
    try {
      const l = await Gl(i);
      Mt((m) => [l, ...m]), uo("");
    } catch (l) {
      Qe(l.message || "Could not create playlist.");
    } finally {
      po(!1);
    }
  }, [ir]), qn = L(async (i, l) => {
    try {
      await Yl(i, l);
      const m = await na();
      Mt(m);
    } catch (m) {
      Qe(m.message || "Could not add to playlist.");
    }
  }, []), Jn = L(async (i, l) => {
    try {
      await Kl(i, l);
      const m = await na();
      Mt(m);
    } catch (m) {
      Qe(m.message || "Could not remove from playlist.");
    }
  }, []), Mo = L((i) => {
    ar((l) => l.filter((m) => m.id !== i.id)), rr((l) => {
      const m = new Set(l);
      return m.delete(i.id), m;
    }), Bl(i.id).then(() => na().then(Mt)).catch((l) => console.warn("Library track delete failed:", l));
  }, []), Ro = L((i) => {
    f(i.id), je(!1), v("player");
  }, []), Gn = L((i) => {
    Rt(i), je(!1), v("creator");
  }, [Rt]);
  return B ? /* @__PURE__ */ n("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
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
                /* @__PURE__ */ t(Pe, { size: 13, style: { color: "var(--accent-primary)" } }),
                /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA" }),
                /* @__PURE__ */ n("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: Re === "mywork" ? Ie.trim() || Ke !== "all" ? `${ut.length} / ${dt.length}` : a(
                    dt.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: dt.length }
                  ) : Ie.trim() || bt !== "all" ? `${hr.length} / ${we.length}` : `${we.length} saved` }),
                  Re === "mywork" && /* @__PURE__ */ n(he, { children: [
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
                    /* @__PURE__ */ n(
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
          /* @__PURE__ */ n(
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
          Re === "mywork" ? dt.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
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
                  /* @__PURE__ */ t(Pe, { size: 11 }),
                  " Start a song"
                ]
              }
            ),
            /* @__PURE__ */ n("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(qe, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : ut.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(at, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ie ? a("musiccreator.gallery.searchEmpty", { q: Ie }) : `No ${Ke} yet.` })
          ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Qt === "list" ? /* @__PURE__ */ t(
            pd,
            {
              tracks: ut,
              player: X,
              onLoad: Rt,
              onOpenLyrics: Ao,
              onDelete: wo,
              onRename: Ca
            }
          ) : ut.map((i) => /* @__PURE__ */ t(
            hd,
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
              selected: y === "player" && _ === i.id,
              player: X
            },
            i.id
          )) }) : (
            /* Library tab — flat slim list of saved streamed tracks. The
               rich Artists/Albums/Playlists views still live in the main
               Music pane (reachable via the search button in the header
               above) since they need more horizontal room than 260px. */
            we.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
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
              /* @__PURE__ */ n(
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
            ] }) : hr.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(at, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ie ? `No matches for "${Ie}"` : `No ${bt} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: hr.map((i) => /* @__PURE__ */ t(
              gd,
              {
                track: i,
                player: X,
                selected: y === "player" && _ === i.id,
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
              /* @__PURE__ */ t(hi, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
              /* @__PURE__ */ t(
                "img",
                {
                  src: b === "light" ? "/brand/juli3ta/wordmark-ink-transparent.png" : "/brand/juli3ta/wordmark-cream-transparent.png",
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
              /* @__PURE__ */ t(ud, { endpoint: B, endpoints: _a, onSwitch: sn }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: y === "player" ? Tn : pr,
                  disabled: q,
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
                    /* @__PURE__ */ t(Vs, { size: 12 }),
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
      y === "player" && (Xe ? /* @__PURE__ */ t(
        Cd,
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
          player: X,
          onPreview: Fn,
          onAdd: Bn,
          onOpenTrack: (i) => {
            f(i.id), je(!1), v("player");
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
        Nd,
        {
          track: (() => {
            const i = _ ?? X.state.trackId ?? ut[0]?.id ?? we[0]?.id ?? null;
            return i ? jt.find((l) => l.id === i) ?? null : null;
          })(),
          player: X,
          restyleOriginal: ji,
          onSwitchToCreator: () => v("creator"),
          onSearchMusic: () => {
            v("player"), je(!0), Zt("search");
          },
          onEditInCreator: (i) => {
            Rt(i), v("creator");
          }
        }
      )),
      y === "creator" && /* @__PURE__ */ n(he, { children: [
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
                { id: "compose", icon: /* @__PURE__ */ t(ga, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(_t, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t($a, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((i) => /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => g(i.id),
                  disabled: q,
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
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: q ? /* @__PURE__ */ n(
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
                    /* @__PURE__ */ t(Y, { size: 12, className: "animate-spin" }),
                    a("musiccreator.button.cancel")
                  ]
                }
              ) : (() => {
                const i = p === "restyle" && (ye || !Ue);
                return /* @__PURE__ */ n(
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
                      i && ye ? /* @__PURE__ */ t(Y, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(_t, { size: 13 }),
                      p === "restyle" ? ye ? "Analyzing audio…" : "Restyle Song" : p === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
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
                  onChange: (i) => ae(i.target.value),
                  onDragOver: Aa,
                  onDrop: Mn,
                  placeholder: a("musiccreator.songName.placeholder"),
                  disabled: q,
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
              p !== "lyricsOnly" && /* @__PURE__ */ n(
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
                        disabled: q
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (q || Xt || It) && /* @__PURE__ */ n(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: Xt ? "rgba(255, 82, 82, 0.06)" : It ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              q && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
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
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: Xt ? /* @__PURE__ */ n(he, { children: [
                /* @__PURE__ */ t(ma, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: Xt, children: Xt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => W(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(me, { size: 11 })
                  }
                )
              ] }) : q ? /* @__PURE__ */ n(he, { children: [
                /* @__PURE__ */ t(Y, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: Lt === "lyrics" ? Xo[Gr % Xo.length] : Qo[Gr % Qo.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: Lt === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : /* @__PURE__ */ n(he, { children: [
                /* @__PURE__ */ t(ma, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: It ?? "", children: It }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Q(null),
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
        /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: /* @__PURE__ */ n("div", { className: "px-6 py-5", children: [
          p === "restyle" && /* @__PURE__ */ n(
            "div",
            {
              className: "mb-5",
              onDragOver: (i) => {
                i.dataTransfer.types.includes(ua) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
              },
              onDrop: (i) => {
                const l = et(i);
                l && l.hasAudio && (i.preventDefault(), (async () => {
                  const m = await Cl(l.id);
                  if (!m?.audioDataUrl) {
                    W("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  lt(m.audioDataUrl, `${l.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                Ve ? /* @__PURE__ */ n(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${ye ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                        ye ? /* @__PURE__ */ t(Y, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(Tt, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: Ve }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: bn,
                            disabled: q || ye,
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
                ) : /* @__PURE__ */ n("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1", children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: () => fa(!0),
                      disabled: q,
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
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: cn,
                      disabled: q,
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
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: gn,
                      disabled: q || yt.filter((i) => i.audioDataUrl).length === 0,
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
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: hn,
                      disabled: q,
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
                !Ve && /* @__PURE__ */ n("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ n("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ n(
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
                        onClick: () => $r("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Le === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Le === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Le === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(Er, { size: 13, style: { color: Le === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ n("div", { className: "text-left flex-1", children: [
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
                                    /* @__PURE__ */ n("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            Ye === "tab" && /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
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
                                children: /* @__PURE__ */ t(Xs, { size: 26 })
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
                          /* @__PURE__ */ n(
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
                /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
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
                                  /* @__PURE__ */ t(qe, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ n(
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
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: Vt.length === 0 ? /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(qe, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : Vt.map((i) => {
                            const l = i.durationMs / 1e3, m = l < 6;
                            return /* @__PURE__ */ n(
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
                                  /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: i.name }),
                                    /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
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
                            return i.length === 0 ? /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(St, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : i.map((l) => {
                              const m = l.durationMs / 1e3, w = m > 0 && m < 6, T = l.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ n(
                                "button",
                                {
                                  onClick: () => !w && yn(l),
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
                                          background: l.coverDataUrl ? `url(${l.coverDataUrl}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                                          border: "1px solid var(--border-subtle)"
                                        },
                                        children: !l.coverDataUrl && /* @__PURE__ */ t(St, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: T }),
                                      /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        m > 0 ? `${Math.floor(m / 60)}:${Math.floor(m % 60).toString().padStart(2, "0")}` : "—",
                                        l.styleTags && l.styleTags !== "—" && ` · ${l.styleTags}`,
                                        w && " · too short for cover (need ≥6 s)"
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
                        disabled: q || Me !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: x,
                        onChange: (i) => E(i.target.value),
                        onDragOver: Aa,
                        onDrop: In,
                        placeholder: a("musiccreator.theme.placeholder"),
                        disabled: q,
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
                    counter: `${Rn} / ${Wc}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      _r,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: wn,
                        busy: Me === "style",
                        disabled: q || Me !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: R,
                        onChange: (i) => I(i.target.value),
                        onDragOver: Aa,
                        onDrop: zn,
                        placeholder: a("musiccreator.style.placeholder"),
                        disabled: q,
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
          p !== "lyricsOnly" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-4 mb-5", children: [
            /* @__PURE__ */ t(id, { onPick: Sn, disabled: q }),
            /* @__PURE__ */ t(
              nd,
              {
                specs: J,
                onChange: Ee,
                disabled: q,
                onOptimize: vn,
                optimizing: ba
              }
            )
          ] }),
          /* @__PURE__ */ n(
            ca,
            {
              label: "Cover Art",
              hint: B?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ n("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  Zo,
                  {
                    checked: Ce,
                    onChange: Ka,
                    disabled: q || !B?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      onClick: () => Eo(!0),
                      disabled: q,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: Se ? `url(${Se}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: q ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !Se && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ha, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        Ge && /* @__PURE__ */ t(
                          "div",
                          {
                            className: "absolute inset-0 flex items-center justify-center",
                            style: { background: "rgba(0,0,0,0.5)" },
                            children: /* @__PURE__ */ t(Y, { size: 20, className: "animate-spin", style: { color: "white" } })
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
                          onClick: vo,
                          disabled: q || Ge || !B?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: q || Ge || !B?.models.image ? "not-allowed" : "pointer"
                          },
                          title: B?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            Ge ? /* @__PURE__ */ t(Y, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Pe, { size: 11 }),
                            Se ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => O.current?.click(),
                          disabled: q,
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
                      Se && /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            j(""), ge && ra.current?.(ge, "");
                          },
                          disabled: q,
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
                      /* @__PURE__ */ n(
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
                        placeholder: Ha(F, x, R),
                        disabled: q,
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
                    ref: O,
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
              counter: (J.intent ?? "").length > 0 ? `${(J.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: J.intent ?? "",
                  onChange: (i) => Ee((l) => ({ ...l, intent: i.target.value })),
                  placeholder: 'e.g. "first-person, mostly Spanish with one English chorus, mention rain, no clichés"',
                  disabled: q,
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
                  disabled: q || Me !== null || !N.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: N,
                    onChange: (i) => C(i.target.value),
                    onDragOver: Aa,
                    onDrop: Ln,
                    placeholder: oe ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: q || oe,
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
                  Bc.map((i) => {
                    const l = M?.id === i.id;
                    return /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => {
                          l ? P(null) : (P(i), N.trim() || C(i.skeleton));
                        },
                        disabled: q,
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
                  M && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(rd, { player: X, allTracks: jt }),
      /* @__PURE__ */ t("audio", { ref: zo, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      dl,
      {
        open: k,
        onClose: () => u(!1),
        onUseRecipe: (i, l) => {
          g("compose"), E(i), I(l);
        }
      }
    ),
    en && /* @__PURE__ */ t(
      Ad,
      {
        settings: lr,
        endpoints: _a,
        onChange: tn,
        onClose: () => cr(!1)
      }
    ),
    No && /* @__PURE__ */ t(
      yd,
      {
        track: No,
        endpoint: B,
        onSave: mr,
        onClose: () => Co(null)
      }
    ),
    Nn && /* @__PURE__ */ t(
      bd,
      {
        songName: F,
        mode: p,
        theme: x,
        style: R,
        intent: J.intent ?? "",
        lyrics: N,
        specs: J,
        coverDataUrl: Se,
        endpoint: B,
        busy: Ge,
        onRegenerate: vo,
        onUpload: xo,
        onClear: () => {
          j(""), ge && ra.current?.(ge, "");
        },
        onClose: () => Eo(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(od, { retrying: nn, onRetry: ur });
}
function Ad({ settings: e, endpoints: a, onChange: r, onClose: o }) {
  const s = (c, d, b) => {
    const p = b.trim(), k = { ...e.overridesByEndpoint[c] ?? {} };
    p ? k[d] = p : delete k[d];
    const u = {
      ...e,
      overridesByEndpoint: {
        ...e.overridesByEndpoint,
        [c]: k
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
                    /* @__PURE__ */ t(ma, { size: 14, style: { color: "#fbbf24" } }),
                    "No reachable endpoints yet — connect a Tytus pod or start local switchAILocal, then come back."
                  ]
                }
              ) : /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", children: a.map((c) => {
                const d = e.overridesByEndpoint[c.url] ?? {}, b = [
                  { key: "music", label: "Music", discovered: c.models.music, kind: "music" },
                  { key: "cover", label: "Restyle", discovered: c.models.cover, kind: "cover" },
                  { key: "lyrics", label: "Lyrics", discovered: c.models.lyrics, kind: "lyrics" },
                  { key: "lyricsBackup", label: "Lyrics fallback", discovered: c.models.lyricsBackup, kind: "chat" },
                  { key: "image", label: "Cover art", discovered: c.models.image, kind: "image" }
                ], p = (u) => /music|cover/i.test(u), g = (u) => /image|diffusion|dall-?e|flux|sdxl/i.test(u), k = (u) => u === "chat" ? c.models.allIds.filter((y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(y)) : u === "image" ? c.models.allIds.filter(g) : c.models.allIds.filter(p);
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
                              background: qa(c),
                              boxShadow: `0 0 6px ${qa(c)}`
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
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: b.map((u) => {
                        const y = k(u.kind), v = d[u.key] ?? "";
                        return /* @__PURE__ */ n(Xn, { children: [
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
                              onChange: (_) => s(c.url, u.key, _.target.value),
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
                                y.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: y.map((_) => /* @__PURE__ */ t("option", { value: _, children: _ }, _)) })
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
function Rd(e) {
  const a = e.host.storage.current();
  return _l(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(Qn, { value: e, children: /* @__PURE__ */ t(Ed, {}) });
  };
}
export {
  Rd as default
};
//# sourceMappingURL=index.js.map
