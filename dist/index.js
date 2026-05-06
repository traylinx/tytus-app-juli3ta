import { jsx as t, jsxs as n, Fragment as pe } from "react/jsx-runtime";
import { createContext as ei, useContext as ti, forwardRef as ai, createElement as Nr, useState as S, useEffect as te, useMemo as de, useRef as ee, useCallback as I, Fragment as Jn } from "react";
import { createPortal as qa } from "react-dom";
const ri = ei(null), Gn = ri.Provider;
function Bt() {
  const e = ti(ri);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Mo = (e) => {
  const a = Yn(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, oi = (...e) => e.filter((a, r, o) => !!a && a.trim() !== "" && o.indexOf(a) === r).join(" ").trim(), Kn = (e) => {
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
var Xn = {
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
const Qn = ai(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: l,
    iconNode: d,
    ...b
  }, p) => Nr(
    "svg",
    {
      ref: p,
      ...Xn,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(a) : r,
      className: oi("lucide", s),
      ...!l && !Kn(b) && { "aria-hidden": "true" },
      ...b
    },
    [
      ...d.map(([h, w]) => Nr(h, w)),
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
const P = (e, a) => {
  const r = ai(
    ({ className: o, ...s }, l) => Nr(Qn, {
      ref: l,
      iconNode: a,
      className: oi(
        `lucide-${Vn(Mo(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Mo(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], es = P("album", Zn);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], pa = P("check", ts);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ii = P("chevron-down", as);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ro = P("chevron-left", rs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], is = P("chevron-right", os);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ss = P("chevron-up", ns);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ma = P("circle-alert", ls);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], ds = P("circle-question-mark", cs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], ps = P("copy", us);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], kt = P("disc-3", ms);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], gs = P("download", hs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], Rr = P("ellipsis-vertical", ys);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], ni = P("external-link", bs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
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
], St = P("file-music", fs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], xs = P("folder-open", vs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], jr = P("heart", ws);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ha = P("image", ks);
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
], Cr = P("layers", Ss);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], _s = P("list-music", Ts);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], V = P("loader-circle", Ns);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Be = P("mic", Cs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], Er = P("monitor-speaker", Es);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], jo = P("monitor", As);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], ga = P("music-2", Ls);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], Ha = P("notebook-text", zs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], pt = P("pause", Is);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], si = P("pencil", Ms);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], ue = P("play", Rs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ar = P("plus", js);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Ds = P("radio", Ps);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Os = P("refresh-cw", Us);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], tt = P("search", Hs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], li = P("settings-2", $s);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], Bs = P("shuffle", Fs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
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
], We = P("sparkles", Ws);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], Js = P("square", qs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], $t = P("trash-2", Gs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Pr = P("upload", Vs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], Ks = P("user-round", Ys);
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
], Tt = P("wand-sparkles", Xs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], me = P("x", Qs), Zs = {
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
}, el = {
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
}, Po = { en: Zs, es: el }, za = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", tl = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, o) => String(a[o] ?? `{${o}}`)) : e;
function Nt() {
  const { host: e } = Bt(), [a, r] = S(() => za(e.i18n?.locale));
  te(() => e.i18n?.onLocaleChange?.((s) => r(za(s))), [e]);
  const o = de(() => (s, l) => {
    const d = e.i18n?.t?.(s, l);
    if (d && d !== s) return d;
    const b = za(a), p = Po[b]?.[s] ?? Po.en[s] ?? s;
    return tl(p, l);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (s) => r(za(s)),
    installLanguagePack: (s) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (s) => {
    }
  };
}
const al = [
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
], rl = [
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
function ol({ recipe: e, onUse: a }) {
  const { t: r } = Nt(), [o, s] = S(!1), l = async () => {
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
                /* @__PURE__ */ t(Tt, { size: 12 }),
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
              children: o ? /* @__PURE__ */ t(pa, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(ps, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function il({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: o, language: s } = Nt(), [l, d] = S("start");
  if (!e) return null;
  const b = s === "es" ? rl : al;
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
                        children: /* @__PURE__ */ t(kt, { size: 18, style: { color: "white" } })
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
              const h = l === p;
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
            /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", style: { paddingBottom: 96 }, children: [
              l === "start" && /* @__PURE__ */ n("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(jt, { icon: /* @__PURE__ */ t(We, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(Ia, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(Ia, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(Ia, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(Ia, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(jt, { icon: /* @__PURE__ */ t(Tt, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ n("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(gr, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(gr, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(gr, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(jt, { icon: /* @__PURE__ */ t(Be, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(nl, { body: o("julietaHelp.start.recorder.body") }),
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
              l === "recipes" && /* @__PURE__ */ n("div", { className: "space-y-3", children: [
                /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: o("julietaHelp.recipes.intro") }),
                b.map((p) => /* @__PURE__ */ t(
                  ol,
                  {
                    recipe: p,
                    onUse: (h) => {
                      r(h.theme, h.style), a();
                    }
                  },
                  p.id
                ))
              ] }),
              l === "help" && /* @__PURE__ */ n("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(jt, { icon: /* @__PURE__ */ t(ma, { size: 14 }), text: o("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.failed.title"), a: o("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.nopod.title"), a: o("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.local.title"), a: o("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t(jt, { icon: /* @__PURE__ */ t(Tt, { size: 14 }), text: o("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.howlong.title"), a: o("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.quota.title"), a: o("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.length.title"), a: o("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.coverlen.title"), a: o("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t(jt, { icon: /* @__PURE__ */ t(Be, { size: 14 }), text: o("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.silentmic.title"), a: o("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.shortrec.title"), a: o("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t($e, { q: o("julietaHelp.help.q.privacy.title"), a: o("julietaHelp.help.q.privacy.body") })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function jt({ icon: e, text: a }) {
  return /* @__PURE__ */ n("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: a })
  ] });
}
function Ia({ n: e, title: a, body: r }) {
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
function gr({ emoji: e, name: a, body: r }) {
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
function nl({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function $e({ q: e, a }) {
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
                is,
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
const yr = (e) => {
  const a = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(a.agents) ? a.agents : [],
    included: Array.isArray(a.included) ? a.included : [],
    tiers: [],
    ...a
  };
}, sl = () => {
  const { host: e } = Bt(), [a, r] = S(0), [o, s] = S(() => yr(e.daemon?.state));
  return te(() => (s(yr(e.daemon?.state)), e.daemon?.onStateChange?.((l) => s(yr(l)))), [e, a]), de(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((l) => l + 1)
  }), [o]);
}, ll = (e, a) => {
  const { host: r } = Bt();
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
function cl() {
  return Bt().host.windows.current;
}
const ci = "juli3ta_standalone_vfs_v1", di = () => Math.random().toString(36).slice(2) + Date.now().toString(36), xt = (e, a) => ({
  id: di(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), dl = () => {
  const e = xt("/", null), a = xt("home", e.id), r = xt("user", a.id), o = xt("Desktop", r.id), s = xt("Music", r.id), l = xt("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, o, s, l].map((d) => [d.id, d])) };
}, Ma = () => {
  try {
    const a = localStorage.getItem(ci);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = dl();
  return Da(e), e;
}, Da = (e) => {
  try {
    localStorage.setItem(ci, JSON.stringify(e));
  } catch {
  }
}, ul = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), pl = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function ml() {
  return {
    ensureUserFolder(a) {
      const r = Ma(), o = ul(a);
      let s = Object.values(r.nodes).find((l) => l.type === "folder" && l.name === o);
      if (!s) {
        const l = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        s = xt(o, l?.id ?? null), r.nodes[s.id] = s, Da(r);
      }
      return s.id;
    },
    findChildByName(a, r) {
      const o = Ma();
      return Object.values(o.nodes).find((s) => s.parentId === a && s.name === r);
    },
    createFile(a, r, o = "", s = {}) {
      const l = Ma(), d = { id: di(), name: r, type: "file", parentId: a, content: o, mimeType: s.mimeType, refTrackId: s.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return l.nodes[d.id] = d, Da(l), d.id;
    },
    writeFile(a, r) {
      const o = Ma();
      o.nodes[a] && (o.nodes[a].content = r, o.nodes[a].modifiedAt = Date.now(), Da(o));
    }
  };
}
const hl = { theme: { mode: "dark" } }, gl = ei(null);
function ui() {
  const e = ti(gl), { host: a } = Bt();
  return de(() => e || {
    state: hl,
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
function yl() {
  const { host: e } = Bt();
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
const bl = {
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
}, fl = {
  juli3ta: bl
};
function pi({ name: e, size: a = 24, className: r, style: o, alt: s, scale: l }) {
  const [d, b = "mark"] = e.split(":"), p = fl[d], { state: h } = ui();
  let w;
  if (b === "mark" ? w = h.theme.mode === "light" ? p?.["mark-ink"] : p?.["mark-white"] : w = p?.[b], !w) return null;
  const u = s ?? d.charAt(0).toUpperCase() + d.slice(1), y = l ?? w.scale ?? 1;
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
let mi = null, Do = null;
const br = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), vl = [
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
function xl(e) {
  Do = (async () => {
    for (const r of vl) await e.run(r);
  })();
  const a = async () => Do;
  mi = {
    exec: async (r) => {
      await a();
      for (const o of br(r).split(";").map((s) => s.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (r, o = []) => (await a(), e.query(br(r), o)),
    run: async (r, o = []) => {
      await a(), await e.run(br(r), o);
    },
    tx: async (r) => (await a(), r())
  };
}
const Y = () => mi, $a = (e) => ({
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
}), $ = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), Dr = (e) => $(e, "specs_json") || $(e, "cover_data_url") || $(e, "theme") || $(e, "source") || $(e, "audio_kind") || $(e, "external_id") || $(e, "external_url") || $(e, "thumbnail_url") || $(e, "artist") || $(e, "album"), Uo = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, Oo = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, fr = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, vt = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), hi = async (e, a, r, o) => {
  if ($(o, "source") || $(o, "audio_kind") || $(o, "external_id") || $(o, "external_url") || $(o, "thumbnail_url") || $(o, "artist") || $(o, "album"))
    try {
      return (await e.query(
        `SELECT ${Uo}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(vt);
    } catch (s) {
      o = s;
    }
  if ($(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${Uo} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => vt({ ...l, theme: "" }));
    } catch (s) {
      if (!$(s, "cover_data_url")) throw s;
      try {
        return (await e.query(
          `SELECT ${Oo} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => vt({ ...d, cover_data_url: "", theme: "" }));
      } catch (l) {
        if (!$(l, "specs_json")) throw l;
        return (await e.query(
          `SELECT ${fr} FROM music_creator_tracks ${a}`,
          r
        )).map((b) => vt({ ...b, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if ($(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${Oo} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => vt({ ...l, cover_data_url: "", theme: "" }));
    } catch (s) {
      if (!$(s, "specs_json")) throw s;
      return (await e.query(
        `SELECT ${fr} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => vt({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if ($(o, "specs_json"))
    return (await e.query(
      `SELECT ${fr} FROM music_creator_tracks ${a}`,
      r
    )).map((l) => vt({ ...l, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, gi = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, wl = async () => {
  const e = Y();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${gi} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map($a);
  } catch (a) {
    if (!Dr(a)) throw a;
    return (await hi(e, "ORDER BY created_at DESC", [], a)).map($a);
  }
}, kl = async (e) => {
  const a = Y();
  if (!a) return null;
  try {
    const r = await a.query(
      `SELECT ${gi} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return r.length === 0 ? null : $a(r[0]);
  } catch (r) {
    if (!Dr(r)) throw r;
    const o = await hi(a, "WHERE id = ? LIMIT 1", [e], r);
    return o.length === 0 ? null : $a(o[0]);
  }
}, Fa = async (e) => {
  const a = Y();
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
    if (!Dr(o)) throw o;
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
}, Sl = async (e) => {
  const a = Y();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, Tl = async (e, a) => {
  const r = Y();
  if (!r) throw new Error("Database not ready");
  const o = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, _l = async (e, a) => {
  const r = Y();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, Nl = async (e, a) => {
  const r = Y();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, Cl = async (e, a) => {
  const r = Y();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, El = async (e, a) => {
  const r = Y();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, Al = async (e, a) => {
  const r = Y();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, Ll = async (e, a) => {
  const r = Y();
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
}, zl = async (e, a) => {
  const r = Y();
  r && await r.run(
    "INSERT OR REPLACE INTO music_creator_settings (key, value) VALUES (?, ?)",
    [e, JSON.stringify(a)]
  );
}, yi = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, bi = "music_creator_settings", Il = () => Ll(bi, yi), Ml = (e) => zl(bi, e), _t = () => Date.now(), fi = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: e.provider === "youtube" ? "YouTube" : e.provider,
  lyricsPreview: "",
  durationMs: e.duration_ms ?? 0,
  bitrate: 0,
  sampleRate: 0,
  sizeBytes: 0,
  createdAt: e.added_at ?? _t(),
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
}), Rl = (e) => ({
  id: e.id,
  provider: e.source || "youtube",
  external_id: e.externalId || e.id.replace(/^.+?:/, ""),
  title: e.title || "Untitled",
  artist: e.artist || "",
  album: e.album || "",
  duration_ms: e.durationMs || 0,
  thumbnail_url: e.thumbnailUrl || "",
  external_url: e.externalUrl || "",
  added_at: e.createdAt || _t(),
  last_played_at: 0
}), vi = [
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
], jl = vi.join(", "), Pl = vi.map((e) => `t.${e}`).join(", "), Dl = async () => {
  const e = Y();
  return e ? (await e.query(
    `SELECT ${jl} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(fi) : [];
}, xi = async (e) => {
  const a = Y();
  if (!a) throw new Error("Database not ready");
  const r = Rl(e);
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
}, Ul = async (e) => {
  const a = Y();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, Ol = async () => {
  const e = Y();
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
}, Hl = async (e) => {
  const a = Y();
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
}, $l = async (e) => {
  const a = Y();
  if (!a) throw new Error("Database not ready");
  const r = await a.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(r[0]?.n ?? 0) > 0 ? (await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await a.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", _t()]
  ), !0);
}, na = async () => {
  const e = Y();
  if (!e) return [];
  const a = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), r = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${Pl}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return r.forEach((s) => {
    o.set(s.playlist_id, [...o.get(s.playlist_id) ?? [], fi(s)]);
  }), a.map((s) => ({
    id: s.id,
    name: s.name,
    createdAt: s.created_at,
    updatedAt: s.updated_at,
    items: o.get(s.id) ?? []
  }));
}, Fl = async (e) => {
  const a = Y();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", o = _t(), s = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: o, updatedAt: o, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [s.id, s.name, s.createdAt, s.updatedAt]
  ), s;
}, Bl = async (e) => {
  const a = Y();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, Wl = async (e, a) => {
  const r = Y();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await xi(a);
    const o = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), s = Number(o[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, s, _t()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [_t(), e]);
  });
}, ql = async (e, a) => {
  const r = Y();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [_t(), e]));
}, Jl = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), Ho = async () => {
  const e = Y();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(Jl) : [];
}, wi = async (e) => {
  const a = Y();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, vr = "tytus.voice-recorder.recordings", Gl = async () => {
  try {
    const e = localStorage.getItem(vr);
    if (!e) return;
    const a = JSON.parse(e);
    if (!Array.isArray(a)) {
      localStorage.removeItem(vr);
      return;
    }
    for (const r of a)
      if (!(!r?.id || typeof r.audioDataUrl != "string"))
        try {
          await wi({
            id: r.id,
            name: r.name ?? "Untitled recording",
            durationMs: r.durationMs ?? 0,
            createdAt: r.createdAt ?? Date.now(),
            mimeType: r.mimeType ?? "audio/webm",
            audioDataUrl: r.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(vr);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, Vl = (e, a) => e._value, Ur = 100, Yl = 30, Ua = 6, Kl = 360, $o = 12, Xl = 3, Ql = 0.4, ki = async (e) => {
  const a = window.AudioContext || window.webkitAudioContext, r = new a();
  try {
    const o = await e.arrayBuffer();
    return await r.decodeAudioData(o.slice(0));
  } finally {
    r.close().catch(() => {
    });
  }
}, Si = async (e) => (await fetch(e)).blob(), Lr = (e) => new Promise((a, r) => {
  const o = new FileReader();
  o.onload = () => {
    const s = typeof o.result == "string" ? o.result : "", l = s.indexOf("base64,");
    a(l >= 0 ? s.slice(l + 7) : "");
  }, o.onerror = () => r(o.error), o.readAsDataURL(e);
}), Zl = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Ur / 1e3)), o = Math.floor(e.length / r), s = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const b = d * r;
    let p = 0;
    for (let h = 0; h < r; h++) {
      let w = 0;
      for (let u = 0; u < l.length; u++) w += l[u][b + h];
      w /= l.length, p += w * w;
    }
    s[d] = Math.sqrt(p / r);
  }
  return s;
}, ec = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Ur / 1e3)), o = Math.floor(e.length / r), s = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const b = d * r;
    let p = 0, h = 0;
    for (let w = 0; w < l.length; w++) h += l[w][b];
    h /= l.length;
    for (let w = 1; w < r; w++) {
      let u = 0;
      for (let y = 0; y < l.length; y++) u += l[y][b + w];
      u /= l.length, (h > 1e-3 && u < -1e-3 || h < -1e-3 && u > 1e-3) && p++, h = u;
    }
    s[d] = p / (r / 2);
  }
  return s;
}, Ti = (e) => {
  const a = Zl(e), r = ec(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / Ur };
}, tc = (e, a = 4) => {
  let r = 0;
  for (let p = 0; p < e.length; p++) r += e[p];
  const o = r / e.length;
  let s = 0;
  for (let p = 0; p < e.length; p++) s += (e[p] - o) ** 2;
  const l = Math.sqrt(s / e.length) || 1, d = Math.floor(e.length / a), b = new Float32Array(d);
  for (let p = 0; p < d; p++) {
    let h = 0;
    for (let w = 0; w < a; w++) h += e[p * a + w];
    b[p] = (h / a - o) / l;
  }
  return b;
}, ac = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const o = Math.max(1, Math.floor(r / 4));
  let s = -1 / 0, l = 0;
  for (let p = 0; p + r < e.length; p += o) {
    if (Math.abs(p - a) < r) continue;
    let h = 0;
    for (let w = 0; w < r; w++)
      h += e[a + w] * e[p + w];
    h /= r, h > s && (s = h), h > 0.5 && l++;
  }
  const d = Math.max(0, Math.min(1, (s + 1) / 2)), b = Math.min(1, l / 6);
  return 0.6 * d + 0.4 * b;
}, _i = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const o = tc(e.rms, 4), s = e.rms.length / o.length, l = Math.max(1, Math.floor(r / s));
  let d = 0, b = 0, p = 0;
  for (let y = 0; y < r; y++)
    d += e.rms[y], b += e.rms[y] * e.rms[y], p += e.centroid[y];
  const h = [], w = Math.max(1, Math.floor(e.framesPerSec)), u = (y) => {
    const v = d / r, C = Math.max(0, b / r - v * v), f = Math.sqrt(C), x = p / r, A = Math.floor(y / s), _ = ac(o, A, l), N = 0.45 * Math.min(1, v * 4) + 0.2 * x + 0.25 * _ - 0.1 * Math.min(1, f * 6);
    h.push({
      startFrame: y,
      lenFrames: r,
      score: N,
      meanRms: v,
      stdRms: f,
      meanBright: x,
      selfSim: _
    });
  };
  u(0);
  for (let y = r; y < e.rms.length; y += w) {
    for (let v = 0; v < w && y - w + v < e.rms.length; v++) {
      const C = y - r - w + v + 1, f = y - w + v + 1;
      if (f >= e.rms.length) break;
      C >= 0 && (d -= e.rms[C], b -= e.rms[C] * e.rms[C], p -= e.centroid[C]), d += e.rms[f], b += e.rms[f] * e.rms[f], p += e.centroid[f];
    }
    u(y - r + w);
  }
  return h;
}, zr = (e, a, r) => {
  const o = new Float32Array(r), s = [];
  for (let l = 0; l < e.numberOfChannels; l++) s.push(e.getChannelData(l));
  for (let l = 0; l < r; l++) {
    let d = 0;
    for (let b = 0; b < s.length; b++) d += s[b][a + l] || 0;
    o[l] = d / s.length;
  }
  return o;
}, Ir = (e, a) => {
  const s = a * 1 * 2, l = 1 * (16 / 8), d = e.length * 2, b = new ArrayBuffer(44 + d), p = new DataView(b);
  let h = 0;
  const w = (v) => {
    for (let C = 0; C < v.length; C++) p.setUint8(h++, v.charCodeAt(C));
  }, u = (v) => {
    p.setUint32(h, v, !0), h += 4;
  }, y = (v) => {
    p.setUint16(h, v, !0), h += 2;
  };
  w("RIFF"), u(36 + d), w("WAVE"), w("fmt "), u(16), y(1), y(1), u(a), u(s), y(l), y(16), w("data"), u(d);
  for (let v = 0; v < e.length; v++) {
    const C = Math.max(-1, Math.min(1, e[v]));
    p.setInt16(h, C < 0 ? C * 32768 : C * 32767, !0), h += 2;
  }
  return new Blob([b], { type: "audio/wav" });
}, Ni = async (e, a = Yl) => {
  const r = typeof e == "string" ? await Si(e) : e, o = await ki(r), s = o.length / o.sampleRate;
  if (s < Ua)
    throw new Error(`Source is too short (${s.toFixed(1)} s). Need at least ${Ua} s.`);
  const l = Math.min(Kl, Math.max(Ua, a));
  if (s <= l) {
    const C = zr(o, 0, o.length), f = Ir(C, o.sampleRate);
    return { base64: await Lr(f), durationSec: s, startSec: 0, sourceDurationSec: s, score: 1 };
  }
  const d = Ti(o), b = _i(d, l);
  if (b.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  b.sort((C, f) => f.score - C.score);
  const p = b[0], h = Math.floor(p.startFrame / d.framesPerSec * o.sampleRate), w = Math.floor(p.lenFrames / d.framesPerSec * o.sampleRate), u = zr(o, h, w), y = Ir(u, o.sampleRate);
  return {
    base64: await Lr(y),
    durationSec: w / o.sampleRate,
    startSec: h / o.sampleRate,
    sourceDurationSec: s,
    score: Math.max(0, Math.min(1, p.score))
  };
}, rc = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(r * a);
  let s = 0;
  for (const b of e) s += b.length;
  s -= o * (e.length - 1);
  const l = new Float32Array(s);
  let d = 0;
  l.set(e[0], 0), d = e[0].length - o;
  for (let b = 1; b < e.length; b++) {
    const p = e[b];
    for (let h = 0; h < o; h++) {
      const w = h / o;
      l[d + h] = l[d + h] * (1 - w) + p[h] * w;
    }
    for (let h = o; h < p.length; h++)
      l[d + h] = p[h];
    d += p.length - o;
  }
  return l;
}, oc = (e, a, r) => {
  const o = [...e].sort((l, d) => d.score - l.score), s = [];
  for (const l of o)
    if (s.some(
      (b) => Math.abs(b.startFrame - l.startFrame) < Math.max(b.lenFrames, l.lenFrames) + r
    ) || s.push(l), s.length >= a) break;
  return s.sort((l, d) => l.startFrame - d.startFrame), s;
}, ic = async (e) => {
  const a = typeof e == "string" ? await Si(e) : e, r = await ki(a), o = r.length / r.sampleRate;
  if (o < Ua * 2) {
    const v = await Ni(a);
    return {
      base64: v.base64,
      durationSec: v.durationSec,
      segments: [{ startSec: v.startSec, endSec: v.startSec + v.durationSec, score: v.score }],
      sourceDurationSec: o
    };
  }
  const s = Ti(r), l = _i(s, $o);
  if (l.length === 0)
    throw new Error("Could not analyze the audio.");
  const d = Math.max(
    Math.floor($o * s.framesPerSec * 0.5),
    Math.floor(s.rms.length / 4)
  ), b = oc(l, Xl, d), p = b.map((v) => {
    const C = Math.floor(v.startFrame / s.framesPerSec * r.sampleRate), f = Math.floor(v.lenFrames / s.framesPerSec * r.sampleRate);
    return zr(r, C, f);
  }), h = rc(p, r.sampleRate, Ql), w = Ir(h, r.sampleRate), u = await Lr(w), y = b.map((v) => ({
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
class Ci extends Error {
  status;
  code;
  constructor(a, r, o) {
    super(o), this.name = "MusicDaemonError", this.status = a, this.code = r;
  }
}
const Wt = async (e, a) => {
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
    const s = o, l = typeof s?.error == "string" ? s.error : `http_${r.status}`;
    throw new Ci(r.status, l, l === "music_unavailable" ? "Music search is still starting up." : l);
  }
  return o;
}, Ei = async (e, a, r) => {
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
    const l = s, d = typeof l?.error == "string" ? l.error : `http_${o.status}`;
    throw new Ci(o.status, d, d);
  }
  return s;
}, nc = (e) => Wt("/api/music/status", e), Fo = async (e) => (await Wt("/api/music/providers", e)).providers ?? [], Bo = async (e) => (await Wt("/api/music/connectors", e)).connectors ?? [], sc = (e, a, r) => Ei("/api/music/connectors/configure", { provider: e, credentials: a }, r), lc = (e, a) => Ei("/api/music/connectors/disconnect", { provider: e }, a), cc = async (e, a = 20, r) => {
  const o = new URLSearchParams({ q: e, limit: String(a) });
  return (await Wt(`/api/music/search?${o.toString()}`, r)).results ?? [];
}, dc = (e, a = "tracks,albums,artists,playlists", r = 20, o) => {
  const s = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return Wt(`/api/music/search2?${s.toString()}`, o);
}, xr = (e, a) => {
  const r = new URLSearchParams({ videoId: e });
  return Wt(`/api/music/stream?${r.toString()}`, a);
}, Ja = async (e, a) => {
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
    const l = typeof s == "object" && s && "error" in s ? String(s.error) : o || r.statusText;
    throw new Error(l);
  }
  return s;
}, wr = async () => Ja("/api/juli3ta/library/tracks"), Wo = async (e) => (await Ja(
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
)).track, uc = async (e) => {
  await Ja("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, pc = async () => (await Ja("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, ua = "application/x-juli3ta-track", Ra = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", Ai = (e) => e.source !== "youtube", sa = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const o of r)
      a.has(o.id) || a.set(o.id, o);
  return Array.from(a.values()).sort((r, o) => o.createdAt - r.createdAt);
}, mc = (e) => Ai(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), hc = "http://localhost:18080/v1", gc = "sk-test-123", wt = [
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
], yc = wt.flatMap((e) => e.chips), bc = ["very_slow", "slow", "medium", "fast", "very_fast"], fc = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], vc = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], xc = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], wc = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], kc = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], Sc = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], Tc = ["narrow", "medium", "wide"], _c = ["none", "gradual", "sudden"], Nc = ["low", "medium", "high"], Cc = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], Ec = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], Ac = ["male", "female", "mixed", "other", "none"], Lc = [
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
], zc = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], Ic = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], Mc = [
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
], Rc = [
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
], jc = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], G = (e) => e.replace(/_/g, " "), Pc = (e, a, r) => {
  const o = (l) => l.trim().replace(/^[-••\d.)(]+\s*/, "").trim(), s = (l, d) => o(l).split(/\s+/).slice(0, d).join(" ");
  if (e) {
    const l = e.split(`
`).map((d) => d.trim()).find((d) => d && !d.startsWith("[") && !d.startsWith("(") && d.split(/\s+/).length >= 3);
    if (l) {
      const d = s(l, 6).replace(/[,.!?;:—-]+$/, "").trim();
      if (d.length >= 3) return d;
    }
  }
  if (a.trim()) {
    const l = s(a, 6).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  if (r.trim()) {
    const l = s(r, 4).replace(/[,.!?;:—-]+$/, "").trim();
    if (l.length >= 3) return l;
  }
  return "Untitled";
}, Or = (e) => {
  const a = [], r = [];
  if (e.structure?.tempo_bpm ? r.push(`${e.structure.tempo_bpm} BPM`) : e.structure?.tempo_class && r.push(`${G(e.structure.tempo_class)} tempo`), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push(`${e.structure.time_signature} time`), e.structure?.rhythm_feel && r.push(`${e.structure.rhythm_feel} feel`), e.structure?.groove_pattern && r.push(`${G(e.structure.groove_pattern)} groove`), e.structure?.song_form && r.push(`${G(e.structure.song_form)} form`), e.structure?.length_seconds && r.push(`~${e.structure.length_seconds}s`), r.length && a.push(r.join(", ")), e.tonal?.key) {
    const l = e.tonal.mode ? `${e.tonal.key} ${e.tonal.mode}` : e.tonal.key;
    a.push(`Key: ${l}`);
  }
  if (e.instrumentation?.primary_instruments?.length && a.push(`Instruments: ${e.instrumentation.primary_instruments.map(G).join(", ")}`), e.instrumentation?.has_vocals === !1)
    a.push("Instrumental, no vocals");
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const l = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && l.push(e.instrumentation.vocal_gender), e.instrumentation.vocal_style?.length ? l.push(e.instrumentation.vocal_style.map(G).join("/")) : l.length === 0 && l.push("vocals");
    let d = l.join(" ");
    e.instrumentation.vocal_processing?.length && (d += ` with ${e.instrumentation.vocal_processing.map(G).join(" + ")}`), a.push(d);
  }
  e.instrumentation?.language_iso639_1 && a.push(`Language: ${e.instrumentation.language_iso639_1}`);
  const o = [];
  e.dynamics?.overall_dynamic_range && o.push(`${e.dynamics.overall_dynamic_range} dynamics`), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && o.push(`${e.dynamics.crescendo_shape} crescendo`), e.dynamics?.has_big_drops && o.push("big drops"), o.length && a.push(o.join(", ")), e.mood?.primary_moods?.length && a.push(`Mood: ${e.mood.primary_moods.join(", ")}`), e.mood?.emotional_intensity && a.push(`${e.mood.emotional_intensity} intensity`), e.mood?.occasion_tags?.length && a.push(`For: ${e.mood.occasion_tags.map(G).join(", ")}`);
  const s = [];
  return e.context?.era_reference && s.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && s.push(`${G(e.context.cultural_region)} scene`), e.context?.intended_use?.length && s.push(`use: ${e.context.intended_use.map(G).join("/")}`), e.context?.explicit_lyrics && s.push("explicit lyrics"), s.length && a.push(s.join(", ")), a.join(". ");
}, Dc = [
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
], qo = "tytus.music-creator.gallery", Jo = "tytus.music-creator", kr = "gallery", Pt = 3500, Uc = 2e3, je = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), o = a % 60;
  return `${r}:${o.toString().padStart(2, "0")}`;
}, Li = (e) => e.source === "youtube" && !!e.externalId, be = (e) => !!e.audioDataUrl || Li(e), Ga = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? Ba(e.externalId) : ""), Ba = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", zi = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, la = (e) => `youtube:${e}`, Oc = async () => {
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
    const a = localStorage.getItem(qo);
    if (a) {
      const r = JSON.parse(a);
      if (Array.isArray(r))
        for (const o of r)
          try {
            await Fa(e(o));
          } catch {
          }
      localStorage.removeItem(qo);
    }
  } catch (a) {
    console.warn("Legacy localStorage gallery migration failed:", a);
  }
  try {
    const a = await new Promise((r) => {
      const o = indexedDB.open(Jo);
      o.onsuccess = () => {
        const s = o.result;
        if (!s.objectStoreNames.contains(kr)) {
          s.close(), r([]);
          return;
        }
        const d = s.transaction(kr, "readonly").objectStore(kr).getAll();
        d.onsuccess = () => {
          s.close(), r(d.result ?? []);
        }, d.onerror = () => {
          s.close(), r([]);
        };
      }, o.onerror = () => r([]);
    });
    for (const r of a)
      try {
        await Fa(e(r));
      } catch {
      }
    a.length > 0 && indexedDB.deleteDatabase(Jo);
  } catch (a) {
    console.warn("Legacy IDB gallery migration failed:", a);
  }
}, Ot = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, Hc = (e, a) => {
  const r = [];
  for (const o of a)
    o.endpoint && o.user_key && r.push({
      url: `${o.endpoint.replace(/\/$/, "")}/v1`,
      apiKey: Vl(o.user_key),
      podId: o.pod_id,
      source: "included",
      label: `AIL gateway ${o.pod_id}`,
      models: Ot
    });
  return r.push({
    url: hc,
    apiKey: gc,
    podId: "local",
    source: "local",
    label: "Local AIL",
    models: Ot
  }), r;
}, $c = (e) => {
  const a = (u, y) => {
    const v = u.map((C) => C.toLowerCase());
    for (const C of y) {
      const f = v.findIndex((x) => C.test(x));
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
  ]), s = new Set([r, o].filter((u) => !!u)), l = e.filter((u) => !s.has(u)), d = a(l, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), b = (u) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(u), p = e.filter((u) => !b(u)), h = a(p, [
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
}, Fc = 6e4, Sr = /* @__PURE__ */ new Map(), Bc = async (e, a) => {
  const r = Sr.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: Ot };
    Sr.delete(e.url);
  }
  const o = Ft(a, qc);
  try {
    const s = await fetch(`${e.url}/models`, {
      method: "GET",
      signal: o.signal,
      headers: { Authorization: `Bearer ${e.apiKey}` }
    });
    if (s.status >= 500) return { ok: !1, models: Ot };
    if (!s.ok) return { ok: !0, models: Ot };
    const d = ((await s.json()).data ?? []).map((b) => b?.id).filter((b) => typeof b == "string" && b.length > 0);
    return { ok: !0, models: $c(d) };
  } catch (s) {
    return (s?.name ?? "") === "TypeError" && Sr.set(e.url, Date.now() + Fc), { ok: !1, models: Ot };
  } finally {
    o.dispose();
  }
}, Wc = async (e, a) => (await Promise.all(
  e.map(async (o) => {
    if (a.aborted) return null;
    const { ok: s, models: l } = await Bc(o, a);
    return s ? { ...o, models: l } : null;
  })
)).filter((o) => o !== null), ja = 6e4, Go = 3e5, qc = 8e3, Ft = (e, a) => {
  const r = AbortSignal.any, o = AbortSignal.timeout;
  if (r && o) {
    const d = o(a);
    return { signal: e ? r([e, d]) : d, dispose: () => {
    } };
  }
  const s = new AbortController(), l = setTimeout(() => {
    s.signal.aborted || s.abort(new DOMException("Timeout", "TimeoutError"));
  }, a);
  return e && (e.aborted ? s.abort(e.reason) : e.addEventListener("abort", () => s.abort(e.reason), { once: !0 })), { signal: s.signal, dispose: () => clearTimeout(l) };
}, Jc = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]);
class xe extends Error {
  status;
  body;
  constructor(a, r, o) {
    super(o ?? `HTTP ${a}: ${r.slice(0, 200)}`), this.name = "GatewayError", this.status = a, this.body = r;
  }
}
function Ii(e) {
  const a = e.indexOf("{");
  if (a === -1) return null;
  let r = 0, o = !1, s = !1;
  for (let l = a; l < e.length; l++) {
    const d = e[l];
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
      return e.slice(a, l + 1);
  }
  return null;
}
const Va = async (e, a, r) => {
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
      if (d instanceof xe && Jc.has(d.status)) {
        o = d;
        continue;
      }
      throw d;
    }
  const s = o?.message ?? "unknown";
  throw new Error(`All ${r} models exhausted. Last error: ${s}. Wait for the rate limit to reset, or pick a different endpoint in Settings.`);
}, Gc = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), Vc = async (e, a, r) => {
  let o = 0, s = "";
  const l = Ft(r, ja);
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
      signal: l.signal
    });
    if (v.ok) {
      const C = await v.json();
      if (!C || typeof C.lyrics != "string" || C.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...C, usedFallback: !1 };
    }
    o = v.status, s = await v.text().catch(() => "");
  } catch (y) {
    const v = y.name;
    if (v === "AbortError" && r?.aborted) throw y;
    if (v === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${ja / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", y);
  } finally {
    l.dispose();
  }
  if (o !== 0 && !Gc.has(o)) {
    const y = s.length > 300 ? `${s.slice(0, 300)}…` : s;
    throw new Error(`Lyrics HTTP ${o}: ${y || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, s);
  const d = (y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(y), b = /* @__PURE__ */ new Set(), p = [], h = (y) => {
    y && !b.has(y) && (b.add(y), p.push(y));
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
}`, u = await Va(p, async (y) => {
    const v = {
      model: y,
      messages: [
        { role: "system", content: w },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, C = async (f) => {
      const x = Ft(r, ja);
      let A;
      try {
        A = await fetch(`${e.url}/chat/completions`, {
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
      } catch (M) {
        throw M.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${ja / 1e3}s.`) : M;
      } finally {
        x.dispose();
      }
      if (!A.ok) {
        const M = await A.text().catch(() => "");
        throw new xe(A.status, M, `Lyrics fallback HTTP ${A.status}: ${M.slice(0, 300)}`);
      }
      const N = (await A.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!N)
        throw new xe(502, "", "Lyrics fallback returned empty content");
      const E = N.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), F = Ii(E) ?? E;
      let R;
      try {
        R = JSON.parse(F);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", N.slice(0, 400)), new xe(502, N.slice(0, 200), `Lyrics fallback returned non-JSON content: ${N.slice(0, 200)}`);
      }
      if (!R.lyrics)
        throw new xe(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return R;
    };
    try {
      return await C(!0);
    } catch (f) {
      if (f instanceof xe && f.status === 400 && /response_format|json_object/i.test(f.body))
        return console.warn("[callLyrics] model rejected json_object, retrying without:", y), await C(!1);
      throw f;
    }
  }, "chat-lyrics");
  return {
    song_title: u.song_title || "Untitled",
    style_tags: u.style_tags || "",
    lyrics: u.lyrics,
    usedFallback: !0
  };
}, Yc = async (e, a, r) => {
  const o = !!a.refAudioBase64, s = (h) => /music/i.test(h) && !/cover/i.test(h), l = (h) => /cover/i.test(h), d = /* @__PURE__ */ new Set(), b = (h, w) => {
    w && !d.has(w) && (d.add(w), h.push(w));
  }, p = [];
  if (o ? (b(p, e.models.cover), e.models.allIds.filter(l).forEach((h) => b(p, h)), b(p, e.models.music)) : (b(p, e.models.music), e.models.allIds.filter(s).forEach((h) => b(p, h))), p.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return Va(p, async (h) => {
    const w = {
      model: h,
      lyrics: a.lyrics
    };
    a.prompt && (w.prompt = a.prompt), a.instrumental && (w.instrumental = !0), o && (w.audio_base64 = a.refAudioBase64);
    const u = Ft(r, Go);
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
    } catch (C) {
      throw C.name === "TimeoutError" ? new Error(`Music generation timed out after ${Go / 1e3}s. Try a shorter lyric or a different endpoint.`) : C;
    } finally {
      u.dispose();
    }
    if (!y.ok) {
      const C = await y.text().catch(() => "");
      throw new xe(y.status, C, `Music HTTP ${y.status}: ${C.slice(0, 300)}`);
    }
    const v = await y.json();
    if (!v?.data?.audio || typeof v.data.audio != "string" || v.data.audio.length < 100)
      throw new xe(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return v;
  }, o ? "music-cover" : "music");
}, Vo = 6e4, Oa = (e, a, r) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", s = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), l = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${o}".`
  ];
  return s && d.push(`Genre: ${s}.`), l && d.push(`Mood: ${l}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, Mr = async (e, a, r) => {
  const o = (b) => /image|diffusion|dall-?e|flux|sdxl/i.test(b), s = /* @__PURE__ */ new Set(), l = [], d = (b) => {
    b && !s.has(b) && (s.add(b), l.push(b));
  };
  if (d(e.models.image), e.models.allIds.filter(o).forEach(d), l.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return Va(l, async (b) => {
    const p = Ft(r, Vo), w = /minimax|ail-image|image-01/i.test(b) ? {
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
        body: JSON.stringify(w),
        signal: p.signal
      });
    } catch (N) {
      throw N.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${Vo / 1e3}s.`) : N;
    } finally {
      p.dispose();
    }
    if (!u.ok) {
      const N = await u.text().catch(() => "");
      throw new xe(u.status, N, `Cover-art HTTP ${u.status}: ${N.slice(0, 200)}`);
    }
    const y = await u.json(), v = y.base_resp;
    if (v && typeof v.status_code == "number" && v.status_code !== 0)
      throw new xe(502, v.status_msg ?? "", `Cover-art ${b} rejected: ${v.status_msg ?? "status_code=" + v.status_code}`);
    const C = (N) => typeof N != "string" || !N.length ? null : N.startsWith("data:") ? N : `data:image/png;base64,${N}`, f = (N) => typeof N == "string" && /^https?:\/\//i.test(N) ? N : null, x = y.data;
    if (x && typeof x == "object" && !Array.isArray(x)) {
      const N = x, E = N.image_base64;
      if (Array.isArray(E) && E[0]) {
        const M = C(E[0]);
        if (M) return M;
      }
      const F = C(N.image) ?? C(N.b64_json) ?? f(N.url);
      if (F) return F;
      const R = N.image_url ?? N.image_urls;
      if (Array.isArray(R) && R[0]) {
        const M = f(R[0]);
        if (M) return M;
      }
    }
    if (Array.isArray(x) && x[0]) {
      const N = x[0], E = C(N.b64_json) ?? C(N.image_base64) ?? f(N.url);
      if (E) return E;
      throw new xe(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const A = C(y.image) ?? C(y.b64_json);
    if (A) return A;
    const _ = y.images;
    if (Array.isArray(_) && _[0]) {
      const N = _[0], E = C(N.b64_json) ?? C(N.image) ?? f(N.url);
      if (E) return E;
    }
    throw new xe(502, "", `Cover-art response shape not recognised: ${JSON.stringify(y).slice(0, 200)}`);
  }, "image");
}, Yo = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], Ko = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
];
function Kc(e, a, r) {
  const [o, s] = S({
    trackId: null,
    playing: !1,
    loadingTrackId: null,
    positionMs: 0,
    durationMs: 0,
    volume: 1
  }), l = ee(null), d = I((f) => {
    (async () => {
      s((_) => ({
        ..._,
        trackId: f.id,
        playing: !1,
        loadingTrackId: be(f) ? f.id : null,
        positionMs: 0,
        durationMs: f.durationMs || 0
      }));
      const x = f.audioDataUrl || await r?.(f);
      if (!x) {
        s((_) => ({ ..._, loadingTrackId: null }));
        return;
      }
      const A = a.current;
      if (!A) {
        s((_) => ({ ..._, loadingTrackId: null }));
        return;
      }
      o.trackId !== f.id || A.src !== x ? (A.src = x, A.preload = "auto", A.load(), A.pause(), s((_) => ({
        ..._,
        trackId: f.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: f.durationMs || 0
      }))) : s((_) => ({ ..._, loadingTrackId: null }));
    })();
  }, [o.trackId, a, r]), b = I((f) => {
    (async () => {
      l.current = null, s((_) => ({
        ..._,
        trackId: f.id,
        loadingTrackId: f.id,
        durationMs: f.durationMs || _.durationMs
      }));
      const x = f.audioDataUrl || await r?.(f);
      if (!x) {
        s((_) => ({ ..._, loadingTrackId: null, playing: !1 }));
        return;
      }
      const A = a.current;
      if (!A) {
        s((_) => ({ ..._, loadingTrackId: null, playing: !1 }));
        return;
      }
      (o.trackId !== f.id || A.src !== x) && (A.src = x, A.preload = "auto", s((_) => ({ ..._, trackId: f.id, positionMs: 0, durationMs: f.durationMs || 0 }))), A.play().then(() => s((_) => ({ ..._, loadingTrackId: null, playing: !0 }))).catch(() => s((_) => ({ ..._, loadingTrackId: null, playing: !1 })));
    })();
  }, [o.trackId, a, r]), p = I(() => {
    a.current?.pause(), s((f) => ({ ...f, playing: !1, loadingTrackId: null }));
  }, [a]), h = I((f) => {
    if (o.loadingTrackId) return;
    if (f) {
      o.trackId === f.id && o.playing ? p() : b(f);
      return;
    }
    if (o.playing) {
      p();
      return;
    }
    const x = o.trackId ? e.find((A) => A.id === o.trackId) : null;
    x ? b(x) : a.current?.src && a.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, b, p, a]), w = I((f) => {
    const x = a.current;
    x && (x.currentTime = Math.max(0, f / 1e3));
  }, [a]), u = I((f) => {
    const x = Math.max(0, Math.min(1, f));
    a.current && (a.current.volume = x), s((A) => ({ ...A, volume: x }));
  }, [a]), y = de(() => e.filter(be), [e]), v = I(() => {
    if (!o.trackId || y.length === 0) return;
    const f = y.findIndex((A) => A.id === o.trackId);
    if (f < 0) return;
    const x = y[(f + 1) % y.length];
    x && b(x);
  }, [o.trackId, y, b]), C = I(() => {
    if (!o.trackId || y.length === 0) return;
    const f = y.findIndex((A) => A.id === o.trackId);
    if (f < 0) return;
    const x = y[(f - 1 + y.length) % y.length];
    x && b(x);
  }, [o.trackId, y, b]);
  return te(() => {
    const f = a.current;
    if (!f) return;
    const x = () => s((M) => ({ ...M, positionMs: f.currentTime * 1e3 })), A = () => s((M) => ({
      ...M,
      durationMs: Number.isFinite(f.duration) ? f.duration * 1e3 : M.durationMs
    })), _ = () => s((M) => ({ ...M, playing: !0, loadingTrackId: null })), N = () => s((M) => ({ ...M, playing: !1, loadingTrackId: null })), E = () => s((M) => ({ ...M, loadingTrackId: null })), F = () => {
      const M = o.trackId ? y.find((H) => H.id === o.trackId) : null;
      if (!M || M.audioDataUrl || !r || l.current === M.id) {
        s((H) => ({ ...H, playing: !1, loadingTrackId: null }));
        return;
      }
      l.current = M.id, s((H) => ({ ...H, loadingTrackId: M.id, playing: !1 })), r(M, { force: !0 }).then((H) => {
        if (!H) throw new Error("No refreshed stream URL");
        return f.src = H, f.preload = "auto", f.play();
      }).then(() => s((H) => ({ ...H, playing: !0, loadingTrackId: null }))).catch(() => s((H) => ({ ...H, playing: !1, loadingTrackId: null })));
    }, R = () => {
      if (y.length >= 2) {
        const M = y.findIndex((H) => H.id === o.trackId);
        if (M >= 0 && M + 1 < y.length) {
          b(y[M + 1]);
          return;
        }
      }
      s((M) => ({ ...M, playing: !1, positionMs: 0 }));
    };
    return f.addEventListener("timeupdate", x), f.addEventListener("loadedmetadata", A), f.addEventListener("play", _), f.addEventListener("pause", N), f.addEventListener("canplay", E), f.addEventListener("error", F), f.addEventListener("ended", R), () => {
      f.removeEventListener("timeupdate", x), f.removeEventListener("loadedmetadata", A), f.removeEventListener("play", _), f.removeEventListener("pause", N), f.removeEventListener("canplay", E), f.removeEventListener("error", F), f.removeEventListener("ended", R);
    };
  }, [y, o.trackId, b, a, r]), { state: o, queue: e, play: b, pause: p, toggle: h, select: d, seek: w, setVolume: u, next: v, prev: C };
}
function Xo({
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
function Tr({
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
        o ? /* @__PURE__ */ t(V, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(We, { size: 10 }),
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
  const s = Ga(e);
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
function Xc({ player: e, allTracks: a }) {
  const { state: r, toggle: o, next: s, prev: l, seek: d, setVolume: b, queue: p } = e, h = p.find((f) => f.id === r.trackId) ?? a.find((f) => f.id === r.trackId) ?? null;
  if (!h) return null;
  const w = r.durationMs > 0 ? r.durationMs : h.durationMs, u = Math.min(r.positionMs, w || 0), y = w > 0 ? u / w * 100 : 0, v = r.loadingTrackId === h.id, C = (f) => {
    if (!w) return;
    const x = f.currentTarget.getBoundingClientRect(), A = (f.clientX - x.left) / x.width;
    d(Math.max(0, Math.min(1, A)) * w);
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
        /* @__PURE__ */ t(ut, { track: h, size: 40, iconSize: 18, radius: 6 }),
        /* @__PURE__ */ n("div", { className: "flex flex-col min-w-0", style: { width: 180 }, children: [
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: h.title }),
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: h.styleTags && h.styleTags !== "—" ? h.styleTags : "—" })
        ] }),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              onClick: l,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(ue, { size: 12, style: { transform: "rotate(180deg)" } })
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
              children: v ? /* @__PURE__ */ t(V, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(pt, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(ue, { size: 13, style: { color: "white", marginLeft: 1 } })
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: s,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Next",
              children: /* @__PURE__ */ t(ue, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: je(u)
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
            children: je(w)
          }
        ),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(Er, { size: 12, style: { color: "var(--text-disabled)", flexShrink: 0 } }),
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
function Qc({ retrying: e, onRetry: a }) {
  const { t: r } = Nt();
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
            e ? /* @__PURE__ */ t(V, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(We, { size: 14 }),
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
function ca({ label: e, hint: a, counter: r, counterDanger: o, className: s, headerExtra: l, children: d }) {
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
      (l || r) && /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
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
function Zc({ onPick: e, disabled: a }) {
  const [r, o] = S(!1), [s, l] = S(wt[0].label), [d, b] = S(""), p = d.trim().toLowerCase(), h = p.length > 0, w = de(() => {
    if (!h) return [];
    const u = [];
    for (const y of wt)
      for (const v of y.chips)
        v.toLowerCase().includes(p) && u.push({ family: y.label, chip: v });
    return u;
  }, [h, p]);
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: h ? `${w.length} match${w.length === 1 ? "" : "es"}` : `${yc.length} chips · click to add` })
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
                  /* @__PURE__ */ t(tt, { size: 11, style: { color: "var(--text-disabled)" } }),
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
        h ? w.length === 0 ? /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: w.map(({ family: u, chip: y }) => /* @__PURE__ */ t(
          _r,
          {
            chip: y,
            family: u,
            onPick: e,
            disabled: a
          },
          `${u}::${y}`
        )) }) : /* @__PURE__ */ n(pe, { children: [
          !r && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: wt.map((u) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => l(u.label),
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
              children: wt.map((u) => /* @__PURE__ */ n("div", { children: [
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
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: u.chips.map((y) => /* @__PURE__ */ t(_r, { chip: y, onPick: e, disabled: a }, y)) })
              ] }, u.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (wt.find((u) => u.label === s) ?? wt[0]).chips.map((u) => /* @__PURE__ */ t(_r, { chip: u, onPick: e, disabled: a }, u)) })
        ] })
      ]
    }
  );
}
function _r({
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
        /* @__PURE__ */ t(Ar, { size: 10 }),
        e,
        a && /* @__PURE__ */ n("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function ed({ specs: e, onChange: a, disabled: r, onOptimize: o, optimizing: s }) {
  const [l, d] = S(!1), b = de(() => Or(e), [e]), p = b.length > 0, h = I(
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
                /* @__PURE__ */ t(Cr, { size: 14, style: { color: "var(--text-secondary)" } }),
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
                  u.stopPropagation(), o(), l || d(!0);
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
                  s ? /* @__PURE__ */ t(V, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(We, { size: 11 }),
                  s ? "Optimizing…" : "AI Optimize"
                ]
              }
            ),
            p && !l && /* @__PURE__ */ n(
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
                  Ht(e),
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
                  ii,
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
        l && /* @__PURE__ */ n(
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
                    Qo,
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
                    _e,
                    {
                      value: e.structure?.tempo_class,
                      options: bc,
                      onChange: (u) => h("structure", { ...e.structure, tempo_class: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Time signature", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.structure?.time_signature,
                      options: fc,
                      onChange: (u) => h("structure", { ...e.structure, time_signature: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.structure?.rhythm_feel,
                      options: vc,
                      onChange: (u) => h("structure", { ...e.structure, rhythm_feel: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Groove", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.structure?.groove_pattern,
                      options: xc,
                      onChange: (u) => h("structure", { ...e.structure, groove_pattern: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Form", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.structure?.song_form,
                      options: wc,
                      onChange: (u) => h("structure", { ...e.structure, song_form: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Length (s)", children: /* @__PURE__ */ t(
                    Qo,
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
                /* @__PURE__ */ n(da, { label: "Key", children: [
                  /* @__PURE__ */ t(re, { label: "Pitch", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.tonal?.key,
                      options: kc,
                      onChange: (u) => h("tonal", { ...e.tonal, key: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Mode", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.tonal?.mode,
                      options: Sc,
                      onChange: (u) => h("tonal", { ...e.tonal, mode: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ n(da, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(re, { label: "Range", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: Tc,
                      onChange: (u) => h("dynamics", { ...e.dynamics, overall_dynamic_range: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Crescendo", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: _c,
                      onChange: (u) => h("dynamics", { ...e.dynamics, crescendo_shape: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Big drops", children: /* @__PURE__ */ t(
                    Zo,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (u) => h("dynamics", { ...e.dynamics, has_big_drops: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ n(da, { label: "Context", children: [
                  /* @__PURE__ */ t(re, { label: "Era", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.context?.era_reference,
                      options: Cc,
                      onChange: (u) => h("context", { ...e.context, era_reference: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Region", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.context?.cultural_region,
                      options: Ec,
                      onChange: (u) => h("context", { ...e.context, cultural_region: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Intensity", children: /* @__PURE__ */ t(
                    _e,
                    {
                      value: e.mood?.emotional_intensity,
                      options: Nc,
                      onChange: (u) => h("mood", { ...e.mood, emotional_intensity: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    Zo,
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
                  Dt,
                  {
                    label: "Primary instruments",
                    options: Lc,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (u) => h("instrumentation", { ...e.instrumentation, primary_instruments: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ n(da, { label: "Vocals", children: [
                    /* @__PURE__ */ t(re, { label: "Has vocals", children: /* @__PURE__ */ t(
                      ad,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (u) => h("instrumentation", { ...e.instrumentation, has_vocals: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(re, { label: "Gender", children: /* @__PURE__ */ t(
                      _e,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: Ac,
                        onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_gender: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(re, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      td,
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
                    Dt,
                    {
                      label: "Vocal style",
                      options: zc,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_style: u.length ? u : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    Dt,
                    {
                      label: "Vocal processing",
                      options: Ic,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (u) => h("instrumentation", { ...e.instrumentation, vocal_processing: u.length ? u : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  Dt,
                  {
                    label: "Primary moods",
                    options: Mc,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (u) => h("mood", { ...e.mood, primary_moods: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Dt,
                  {
                    label: "Occasion tags",
                    options: Rc,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (u) => h("mood", { ...e.mood, occasion_tags: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Dt,
                  {
                    label: "Intended use",
                    options: jc,
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
function _e({
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
        a.map((s) => /* @__PURE__ */ t("option", { value: s, children: G(s) }, s))
      ]
    }
  );
}
function Qo({
  value: e,
  onChange: a,
  min: r,
  max: o,
  placeholder: s,
  disabled: l
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
function td({
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
      onChange: (l) => a(l.target.value),
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
function Zo({
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
function ad({
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
function Dt({
  label: e,
  options: a,
  selected: r,
  onChange: o,
  disabled: s
}) {
  const l = (d) => {
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
          onClick: () => l(d),
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
            G(d)
          ]
        },
        d
      );
    }) })
  ] });
}
function Ht(e) {
  const { intent: a, ...r } = e;
  let o = 0;
  const s = (l) => {
    if (!(!l || typeof l != "object")) {
      for (const d of Object.values(l))
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
const rd = "#4ade80", od = "#fbbf24", Wa = (e) => e.models.music || e.models.cover ? rd : od;
function id({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [o, s] = S(!1), l = ee(null), d = a.length > 1;
  te(() => {
    if (!o) return;
    const p = (h) => {
      l.current && !l.current.contains(h.target) && s(!1);
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
  return /* @__PURE__ */ n("div", { ref: l, className: "relative inline-flex", children: [
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
          b(Wa(e)),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap" }, children: e.label }),
          d && /* @__PURE__ */ t(
            ii,
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
          return /* @__PURE__ */ n(
            "button",
            {
              onClick: () => {
                r(p.podId), s(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: h ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: b(Wa(p)) }),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ n("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: p.label }),
                    h && /* @__PURE__ */ t(pa, { size: 11, style: { color: "var(--accent-primary)" } })
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
const ye = ({ icon: e, label: a, onClick: r, danger: o }) => /* @__PURE__ */ n(
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
function nd({ tracks: e, player: a, onLoad: r, onOpenLyrics: o, onDelete: s, onRename: l }) {
  const { t: d } = Nt();
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
      sd,
      {
        track: b,
        player: a,
        onLoad: r,
        onOpenLyrics: o,
        onDelete: s,
        onRename: l,
        translate: d
      },
      b.id
    ))
  ] });
}
function sd({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: o,
  onDelete: s,
  onRename: l,
  translate: d
}) {
  const [b, p] = S(!1), [h, w] = S(null), u = a.state.trackId === e.id, y = u && a.state.playing, v = () => {
    if (h === null) return;
    const x = h.trim();
    w(null), x && x !== e.title && l(e.id, x);
  }, C = new Date(e.createdAt).toLocaleDateString(void 0, {
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
        const A = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: be(e)
        };
        x.dataTransfer.setData(ua, JSON.stringify(A)), e.lyricsPreview && x.dataTransfer.setData("text/plain", e.lyricsPreview), x.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => be(e) ? a.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: u ? "var(--bg-selected)" : b ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: be(e) ? y ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: u ? "var(--accent-primary)" : "var(--text-disabled)" }, children: be(e) ? y ? /* @__PURE__ */ t(pt, { size: 11 }) : b ? /* @__PURE__ */ t(ue, { size: 11 }) : /* @__PURE__ */ t(ga, { size: 11 }) : /* @__PURE__ */ t(Ha, { size: 11 }) }),
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
              onChange: (x) => w(x.target.value),
              onClick: (x) => x.stopPropagation(),
              onKeyDown: (x) => {
                x.stopPropagation(), x.key === "Enter" ? v() : x.key === "Escape" && w(null);
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
        ) : /* @__PURE__ */ n(pe, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "truncate",
              style: { fontWeight: u ? 600 : 500 },
              onClick: (x) => x.stopPropagation(),
              onDoubleClick: (x) => {
                x.stopPropagation(), w(e.title);
              },
              title: "Double-click to rename",
              children: e.title || d("musiccreator.track.untitled")
            }
          ),
          e.styleTags && e.styleTags !== "—" && /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 9, color: "var(--text-disabled)" }, children: e.styleTags })
        ] }) }),
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? je(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: C }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (x) => {
              x.stopPropagation(), x.shiftKey ? o(e) : x.altKey ? s(e.id) : r(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(Rr, { size: 11 })
          }
        )
      ]
    }
  );
}
function ld({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: o,
  onSaveSongToDesktop: s,
  onSaveLyricsToDesktop: l,
  onPlayInPlayer: d,
  onRename: b,
  onEditCover: p,
  onSelect: h,
  selected: w,
  player: u
}) {
  const { t: y } = Nt(), v = ee(null), [C, f] = S(!1), [x, A] = S(null), [_, N] = S(null), E = () => {
    if (_ === null) return;
    const j = _.trim();
    N(null), j && j !== e.title && b(e.id, j);
  }, F = u.state.trackId === e.id, R = F && u.state.playing, M = F && u.state.durationMs > 0 ? u.state.positionMs / u.state.durationMs : 0;
  te(() => {
    if (!x) return;
    const j = (qe) => {
      const Ne = qe.target;
      v.current && Ne && v.current.contains(Ne) || Ne && Ne.closest?.("[data-track-menu]") || A(null);
    }, ne = () => A(null);
    return setTimeout(() => window.addEventListener("mousedown", j), 0), window.addEventListener("scroll", ne, !0), window.addEventListener("resize", ne), () => {
      window.removeEventListener("mousedown", j), window.removeEventListener("scroll", ne, !0), window.removeEventListener("resize", ne);
    };
  }, [x]);
  const H = () => {
    const j = v.current?.getBoundingClientRect();
    if (!j) return;
    const ne = 220, qe = Math.min(j.right - ne, window.innerWidth - ne - 8), Ne = j.bottom + 4;
    A({ x: Math.max(8, qe), y: Ne });
  }, ae = (j) => () => {
    A(null), j();
  }, he = () => u.toggle(e), at = () => {
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
        const ne = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: be(e)
        };
        j.dataTransfer.setData(ua, JSON.stringify(ne)), e.lyricsPreview && j.dataTransfer.setData("text/plain", e.lyricsPreview), j.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => h?.(e),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: w ? "var(--bg-selected)" : C ? "var(--bg-hover)" : "transparent",
        border: w ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: h ? "pointer" : "grab"
      },
      title: h ? "Click to open in player · drag to other fields" : "Drag to Desktop, Cover field, Text Editor, or any text field",
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
          be(e) ? /* @__PURE__ */ n(
            "button",
            {
              onClick: he,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: R ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(ut, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Ga(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: R ? /* @__PURE__ */ t(pt, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(ue, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                children: /* @__PURE__ */ t(Ha, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
            _ !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: _,
                onChange: (j) => N(j.target.value),
                onClick: (j) => j.stopPropagation(),
                onKeyDown: (j) => {
                  j.stopPropagation(), j.key === "Enter" ? E() : j.key === "Escape" && N(null);
                },
                onBlur: E,
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
                  j.stopPropagation(), N(e.title);
                },
                title: "Double-click to rename",
                children: e.title || y("musiccreator.track.untitled")
              }
            ),
            /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.durationMs > 0 ? je(e.durationMs) : y("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: v,
              onClick: (j) => {
                j.stopPropagation(), x ? A(null) : H();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: C || x ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(Rr, { size: 14 })
            }
          )
        ] }),
        x && qa(
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
                be(e) && /* @__PURE__ */ n(pe, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(ye, { icon: /* @__PURE__ */ t(ga, { size: 14 }), label: y("musiccreator.track.playInPlayer"), onClick: ae(() => d(e)) }),
                  /* @__PURE__ */ t(ye, { icon: /* @__PURE__ */ t(jo, { size: 14 }), label: y("musiccreator.track.saveSongToDesktop"), onClick: ae(() => s(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(ye, { icon: /* @__PURE__ */ t(gs, { size: 14 }), label: y("musiccreator.track.download"), onClick: ae(at) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ n(pe, { children: [
                  be(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(ye, { icon: /* @__PURE__ */ t(Ha, { size: 14 }), label: y("musiccreator.track.openInEditor"), onClick: ae(() => o(e)) }),
                  /* @__PURE__ */ t(ye, { icon: /* @__PURE__ */ t(jo, { size: 14 }), label: y("musiccreator.track.saveLyricsToDesktop"), onClick: ae(() => l(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(ye, { icon: /* @__PURE__ */ t(si, { size: 14 }), label: "Rename", onClick: ae(() => N(e.title)) }),
                /* @__PURE__ */ t(ye, { icon: /* @__PURE__ */ t(ha, { size: 14 }), label: "Edit cover art", onClick: ae(() => p(e)) }),
                /* @__PURE__ */ t(ye, { icon: /* @__PURE__ */ t(St, { size: 14 }), label: y("musiccreator.track.loadIntoForm"), onClick: ae(() => r(e)) }),
                /* @__PURE__ */ t(ye, { icon: /* @__PURE__ */ t($t, { size: 14 }), label: y("musiccreator.track.delete"), onClick: ae(() => a(e.id)), danger: !0 })
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
function cd({
  track: e,
  player: a,
  selected: r,
  isFavorite: o,
  onOpenInPlayer: s,
  onRemix: l,
  onToggleFavorite: d,
  onRemove: b
}) {
  const p = ee(null), [h, w] = S(!1), [u, y] = S(null), v = a.state.trackId === e.id, C = v && a.state.loadingTrackId === e.id, f = v && a.state.playing, x = v && a.state.durationMs > 0 ? a.state.positionMs / a.state.durationMs : 0;
  te(() => {
    if (!u) return;
    const E = (R) => {
      const M = R.target;
      p.current && M && p.current.contains(M) || M && M.closest?.("[data-track-menu]") || y(null);
    }, F = () => y(null);
    return setTimeout(() => window.addEventListener("mousedown", E), 0), window.addEventListener("scroll", F, !0), window.addEventListener("resize", F), () => {
      window.removeEventListener("mousedown", E), window.removeEventListener("scroll", F, !0), window.removeEventListener("resize", F);
    };
  }, [u]);
  const A = () => {
    const E = p.current?.getBoundingClientRect();
    if (!E) return;
    const F = 220, R = Math.min(E.right - F, window.innerWidth - F - 8), M = E.bottom + 4;
    y({ x: R, y: M });
  }, _ = (E) => () => {
    y(null), E();
  }, N = e.externalUrl;
  return /* @__PURE__ */ n(
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
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: (E) => {
                E.stopPropagation(), a.toggle(e);
              },
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105",
              style: { width: 36, height: 36 },
              title: f ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(ut, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Ga(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: C ? /* @__PURE__ */ t(V, { size: 14, className: "animate-spin", style: { color: "white" } }) : f ? /* @__PURE__ */ t(pt, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(ue, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                  e.durationMs > 0 ? ` · ${je(e.durationMs)}` : ""
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              ref: p,
              onClick: (E) => {
                E.stopPropagation(), u ? y(null) : A();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: h || u ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(Rr, { size: 14 })
            }
          )
        ] }),
        u && qa(
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
                  ye,
                  {
                    icon: f ? /* @__PURE__ */ t(pt, { size: 14 }) : /* @__PURE__ */ t(ue, { size: 14 }),
                    label: f ? "Pause" : "Play",
                    onClick: _(() => a.toggle(e))
                  }
                ),
                /* @__PURE__ */ t(
                  ye,
                  {
                    icon: /* @__PURE__ */ t(ga, { size: 14 }),
                    label: "Open in player",
                    onClick: _(() => s(e))
                  }
                ),
                /* @__PURE__ */ t(
                  ye,
                  {
                    icon: /* @__PURE__ */ t(Tt, { size: 14 }),
                    label: "Remix in Restyle",
                    onClick: _(() => l(e))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  ye,
                  {
                    icon: /* @__PURE__ */ t(jr, { size: 14, fill: o ? "currentColor" : "none" }),
                    label: o ? "Remove favorite" : "Add to favorites",
                    onClick: _(() => d(e))
                  }
                ),
                N && /* @__PURE__ */ t(
                  ye,
                  {
                    icon: /* @__PURE__ */ t(ni, { size: 14 }),
                    label: "Open source",
                    onClick: _(() => window.open(N, "_blank", "noopener,noreferrer"))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(
                  ye,
                  {
                    icon: /* @__PURE__ */ t($t, { size: 14 }),
                    label: "Remove from Library",
                    onClick: _(() => b(e)),
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
function dd({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: o
}) {
  const [s, l] = S(e.coverDataUrl), [d, b] = S(""), [p, h] = S(!1), [w, u] = S(null), y = ee(null), v = ee(null), C = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), f = Oa(C, "", e.styleTags || "");
  te(() => {
    const _ = (N) => {
      N.key === "Escape" && (N.stopPropagation(), o());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
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
    const _ = v.current.signal;
    h(!0), u(null);
    try {
      const N = (d.trim() || f).slice(0, 1500), E = await Mr(a, N, _);
      if (_.aborted) return;
      l(E);
    } catch (N) {
      if (N.name === "AbortError") return;
      u(N.message || "Cover-art generation failed.");
    } finally {
      h(!1);
    }
  }, A = (_) => {
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
      const E = N.result;
      typeof E == "string" && l(E);
    }, N.readAsDataURL(_);
  };
  return qa(
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
            onClick: (_) => _.stopPropagation(),
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
                      C || "Untitled"
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
                        p && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(V, { size: 24, className: "animate-spin", style: { color: "white" } }) })
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
                          p ? /* @__PURE__ */ t(V, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Os, { size: 12 }),
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
                          /* @__PURE__ */ t(Pr, { size: 12 }),
                          "Upload"
                        ]
                      }
                    ),
                    s && /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => l(""),
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
                      onChange: (_) => b(_.target.value),
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
                      /* @__PURE__ */ t(ma, { size: 12, style: { flexShrink: 0 } }),
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
function Pa({ label: e, children: a }) {
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
function ud({
  songName: e,
  mode: a,
  theme: r,
  style: o,
  intent: s,
  lyrics: l,
  specs: d,
  coverDataUrl: b,
  endpoint: p,
  busy: h,
  onRegenerate: w,
  onUpload: u,
  onClear: y,
  onClose: v
}) {
  const C = ee(null), f = de(() => Or(d), [d]), x = de(() => Ht(d), [d]);
  te(() => {
    const N = (E) => {
      E.key === "Escape" && (E.stopPropagation(), v());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [v]);
  const A = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", _ = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return qa(
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
            onClick: (N) => N.stopPropagation(),
            children: [
              /* @__PURE__ */ n(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3 flex-shrink-0",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(kt, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                      h && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(V, { size: 28, className: "animate-spin", style: { color: "white" } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
                  /* @__PURE__ */ n("div", { children: [
                    /* @__PURE__ */ t("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }, children: _ }),
                    o.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: o.trim() })
                  ] }),
                  /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ n(
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
                          h ? /* @__PURE__ */ t(V, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(We, { size: 11 }),
                          b ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        onClick: () => C.current?.click(),
                        disabled: h,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(Pr, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    b && /* @__PURE__ */ n(
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
                          /* @__PURE__ */ t(me, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  r.trim() && /* @__PURE__ */ t(Pa, { label: "Theme", children: r.trim() }),
                  s.trim() && /* @__PURE__ */ t(Pa, { label: "Lyrics Direction", children: s.trim() }),
                  x > 0 && f && /* @__PURE__ */ t(Pa, { label: `Track Specs (${x} set)`, children: f }),
                  l.trim() && /* @__PURE__ */ t(Pa, { label: "Lyrics", children: /* @__PURE__ */ t(
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
                  !r.trim() && !s.trim() && x === 0 && !l.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: C,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (N) => {
                    const E = N.target.files?.[0];
                    E && u(E), N.target.value = "";
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
function pd(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function md(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function hd(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function gd(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function yd(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: G(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: G(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: G(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: G(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: G(e.tonal.mode) }), o.length && a.push({ label: "Tonal", rows: o });
  const s = [];
  if (e.instrumentation?.primary_instruments?.length && s.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(G).join(", ") }), e.instrumentation?.has_vocals === !1)
    s.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const p = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && p.push(G(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && p.push(e.instrumentation.vocal_style.map(G).join("/")), s.push({ label: "Vocals", value: p.length ? p.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && s.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(G).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && s.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), s.length && a.push({ label: "Instrumentation", rows: s });
  const l = [];
  e.dynamics?.overall_dynamic_range && l.push({ label: "Range", value: G(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && l.push({ label: "Crescendo", value: G(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && l.push({ label: "Big drops", value: "Yes" }), l.length && a.push({ label: "Dynamics", rows: l });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: G(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(G).join(", ") }), d.length && a.push({ label: "Mood", rows: d });
  const b = [];
  return e.context?.era_reference && b.push({ label: "Era", value: G(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && b.push({ label: "Region", value: G(e.context.cultural_region) }), e.context?.intended_use?.length && b.push({ label: "Use", value: e.context.intended_use.map(G).join("/") }), e.context?.explicit_lyrics && b.push({ label: "Explicit", value: "Yes" }), b.length && a.push({ label: "Context", rows: b }), a;
}
function Fe({ label: e, value: a }) {
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
function Ut({ label: e, children: a }) {
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
const bd = /^\s*\[([^\]]+)\]\s*$/;
function fd({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, o) => {
    const s = r.match(bd);
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
function vd({ track: e, player: a, onEditInCreator: r, onSwitchToCreator: o, onSearchMusic: s }) {
  const { t: l } = Nt(), d = e?.specsJson ?? "", b = de(() => {
    if (!d) return {};
    try {
      return JSON.parse(d);
    } catch {
      return {};
    }
  }, [d]), p = (b.intent ?? "").trim(), h = de(() => yd(b), [b]);
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
      /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }, children: l("musiccreator.player.empty.title") }),
      /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", textAlign: "center", maxWidth: 360 }, children: l("musiccreator.player.empty.body") }),
      /* @__PURE__ */ n(
        "button",
        {
          onClick: o,
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
            /* @__PURE__ */ t(We, { size: 13 }),
            l("musiccreator.player.empty.openCreator")
          ]
        }
      ),
      s && /* @__PURE__ */ n(
        "button",
        {
          onClick: s,
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
            /* @__PURE__ */ t(tt, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const w = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", u = be(e), y = Ga(e), v = e.source === "youtube" ? e.artist || "Music" : "JULI3TA", C = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", f = a.state.trackId === e.id, x = f && a.state.playing, A = f && a.state.loadingTrackId === e.id, _ = e.source === "youtube", N = a.queue.filter((E) => E.id !== e.id && (E.artist || "").trim() && E.artist === e.artist).slice(0, 4);
  return /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden relative", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ n("div", { className: "flex-shrink-0 relative overflow-hidden", children: [
      /* @__PURE__ */ t(
        "div",
        {
          "aria-hidden": !0,
          className: "absolute inset-0",
          style: {
            background: y ? `url(${y}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
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
              u && a.toggle(e);
            },
            disabled: !u,
            className: "rounded-lg overflow-hidden flex-shrink-0 relative group disabled:cursor-not-allowed",
            style: {
              width: 220,
              height: 220,
              background: y ? `url(${y}) center/cover no-repeat` : "linear-gradient(135deg, #7B43C9 0%, #C8377E 55%, #F08A4B 100%)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              cursor: u ? "pointer" : "default"
            },
            title: u ? f && x ? "Pause" : "Play" : "Lyric sheet — no audio",
            children: [
              !y && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(
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
              u && /* @__PURE__ */ t(
                "div",
                {
                  className: "absolute inset-0 flex items-center justify-center transition-opacity",
                  style: {
                    background: "rgba(0,0,0,0.35)",
                    opacity: f && x ? 0 : 1
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
                      children: f && x ? /* @__PURE__ */ t(pt, { size: 30, style: { color: "white" } }) : A ? /* @__PURE__ */ t(V, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(ue, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                u ? /* @__PURE__ */ t(ue, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(St, { size: 10 }),
                _ ? "YouTube track" : l(u ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
              ]
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "leading-none",
              style: {
                fontSize: w.length > 24 ? 38 : w.length > 14 ? 52 : 64,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.035em",
                wordBreak: "break-word",
                marginBottom: 16,
                textShadow: "0 2px 16px rgba(0,0,0,0.4)"
              },
              children: w
            }
          ),
          /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center flex-wrap",
              style: { fontSize: 13, color: "rgba(255,255,255,0.85)", gap: 8 },
              children: [
                /* @__PURE__ */ t(pi, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: v }),
                e.source === "youtube" && e.album && e.album !== v && /* @__PURE__ */ n(pe, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                C && /* @__PURE__ */ n(pe, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: C })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ n(pe, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: je(e.durationMs) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ n("div", { className: "mt-5 flex items-center gap-3 flex-wrap", children: [
            u && /* @__PURE__ */ t(
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
                title: f && x ? "Pause" : "Play",
                children: A ? /* @__PURE__ */ n(pe, { children: [
                  /* @__PURE__ */ t(V, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : f && x ? /* @__PURE__ */ n(pe, { children: [
                  /* @__PURE__ */ t(pt, { size: 16 }),
                  " ",
                  l("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ n(pe, { children: [
                  /* @__PURE__ */ t(ue, { size: 16, style: { marginLeft: 2 } }),
                  " ",
                  l("musiccreator.player.play")
                ] })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                onClick: () => r(e),
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
                title: l("musiccreator.player.remixInRestyle.tip"),
                children: [
                  /* @__PURE__ */ t(Tt, { size: 13 }),
                  l("musiccreator.player.remixInRestyle")
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
            children: l("musiccreator.player.lyrics")
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(fd, { text: e.lyricsPreview }) : _ ? /* @__PURE__ */ n(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Ds, { size: 18 }) }),
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
                  /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.durationMs ? je(e.durationMs) : "Unknown" })
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
                    /* @__PURE__ */ t(ni, { size: 13 }),
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
              /* @__PURE__ */ t(St, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: l("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        e.theme.trim() && /* @__PURE__ */ t(Ut, { label: l("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        p && /* @__PURE__ */ t(Ut, { label: l("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: p }) }),
        h.map((E) => /* @__PURE__ */ t(Ut, { label: E.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: E.rows.map((F) => /* @__PURE__ */ t(Fe, { label: F.label, value: F.value }, `${E.label}-${F.label}`)) }) }, E.label)),
        _ && /* @__PURE__ */ t(Ut, { label: "Artist / Source", children: /* @__PURE__ */ n("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Ks, { size: 20 }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: e.album ? `${e.album} · streamed audio` : "Streamed audio" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        N.length > 0 && /* @__PURE__ */ t(Ut, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: N.map((E) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => a.select(E),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(ut, { track: E, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: E.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: E.durationMs ? je(E.durationMs) : "Streamed" })
              ] })
            ]
          },
          E.id
        )) }) }),
        /* @__PURE__ */ t(Ut, { label: l("musiccreator.player.about"), children: /* @__PURE__ */ n("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(Fe, { label: l("musiccreator.player.about.created"), value: gd(e.createdAt) }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(Fe, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(Fe, { label: "Channel", value: e.album }),
          u && e.durationMs > 0 && /* @__PURE__ */ t(Fe, { label: l("musiccreator.player.about.duration"), value: je(e.durationMs) }),
          e.source !== "youtube" && u && e.bitrate > 0 && /* @__PURE__ */ t(Fe, { label: l("musiccreator.player.about.bitrate"), value: md(e.bitrate) }),
          e.source !== "youtube" && u && e.sampleRate > 0 && /* @__PURE__ */ t(Fe, { label: l("musiccreator.player.about.sampleRate"), value: hd(e.sampleRate) }),
          e.source !== "youtube" && u && e.sizeBytes > 0 && /* @__PURE__ */ t(Fe, { label: l("musiccreator.player.about.size"), value: pd(e.sizeBytes) }),
          C && /* @__PURE__ */ t(Fe, { label: l("musiccreator.player.about.style"), value: C }),
          /* @__PURE__ */ t(Fe, { label: l("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : l(u ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function xd({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: o,
  resultType: s,
  onResultTypeChange: l,
  results: d,
  busy: b,
  error: p,
  status: h,
  providers: w,
  connectors: u,
  libraryTracks: y,
  playlists: v,
  playlistNameDraft: C,
  playlistBusy: f,
  favoriteIds: x,
  warmupIds: A,
  previewBusyId: _,
  addBusyId: N,
  savedYoutubeIds: E,
  player: F,
  onPreview: R,
  onAdd: M,
  onOpenTrack: H,
  onToggleFavorite: ae,
  onRemoveLibraryTrack: he,
  onPlaylistNameDraftChange: at,
  onCreatePlaylist: fe,
  onAddTrackToPlaylist: j,
  onRemoveTrackFromPlaylist: ne,
  onPlayPlaylist: qe,
  onDeletePlaylist: Ne,
  onConfigureConnector: Ya,
  onDisconnectConnector: Je,
  onClose: qt
}) {
  const [K, mt] = S(null), [X, Ie] = S({}), [Jt, rt] = S(!1), [Ct, we] = S(null), [Ge, Ce] = S(null), [Et, ke] = S(null);
  te(() => {
    Ce(null), ke(null);
  }, [e]);
  const Se = [
    { id: "search", label: "Search" },
    { id: "artists", label: "Artists", count: new Set(y.map((g) => g.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(y.map((g) => g.album || g.artist || "Unknown")).size },
    { id: "playlists", label: "Playlists", count: v.length },
    { id: "sources", label: "Sources", count: w.length || 4 }
  ], ht = (g) => {
    const z = F.state.trackId === g.id, U = z && F.state.loadingTrackId === g.id, se = z && F.state.playing;
    return /* @__PURE__ */ n(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(ut, { track: g, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ n("button", { type: "button", onClick: () => H(g), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: g.title }),
            /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              g.artist || "Unknown",
              g.album ? ` · ${g.album}` : "",
              g.durationMs ? ` · ${je(g.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ae(g),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: x.has(g.id) ? "white" : "var(--text-secondary)",
                background: x.has(g.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: x.has(g.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(jr, { size: 13, fill: x.has(g.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => F.toggle(g),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                U ? /* @__PURE__ */ t(V, { size: 12, className: "animate-spin" }) : se ? /* @__PURE__ */ t(pt, { size: 12 }) : /* @__PURE__ */ t(ue, { size: 12 }),
                U ? "Loading" : se ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => he(g),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t($t, { size: 13 })
            }
          )
        ]
      },
      g.id
    );
  }, Gt = Array.from(
    y.reduce((g, z) => {
      const U = (z.artist || "Unknown artist").trim();
      return g.set(U, [...g.get(U) ?? [], z]), g;
    }, /* @__PURE__ */ new Map())
  ).sort((g, z) => g[0].localeCompare(z[0])), Ve = Array.from(
    y.reduce((g, z) => {
      const U = (z.album || z.artist || "YouTube collection").trim();
      return g.set(U, [...g.get(U) ?? [], z]), g;
    }, /* @__PURE__ */ new Map())
  ).sort((g, z) => g[0].localeCompare(z[0])), Ka = w.length > 0 ? w.map((g) => {
    const z = u.find((ot) => ot.provider === g.id), U = z?.connected ?? g.configured, se = z?.oauthRequired ?? g.state === "oauth_required";
    return {
      id: g.id,
      name: g.name,
      state: U ? "Connected" : se ? "OAuth required" : g.state.replace(/_/g, " "),
      body: z?.message ?? g.message,
      action: U ? "Manage" : se ? "Coming soon" : "Configure",
      enabled: U,
      needs: g.needs,
      kind: g.kind,
      connector: z,
      oauthRequired: se,
      configurable: z?.configurable ?? !se
    };
  }) : [
    {
      id: "youtube",
      name: "YouTube",
      state: h?.ready ? "Connected" : "Starting",
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
      connector: u.find((g) => g.provider === "spotify"),
      oauthRequired: !0,
      configurable: !1
    },
    {
      id: "lastfm",
      name: "Last.fm",
      state: u.find((g) => g.provider === "lastfm")?.connected ? "Connected" : "Metadata connector",
      body: "Artist bios, tags and now-playing style metadata. API key required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["apiKey"],
      kind: "metadata",
      connector: u.find((g) => g.provider === "lastfm"),
      oauthRequired: !1,
      configurable: !0
    },
    {
      id: "discogs",
      name: "Discogs",
      state: u.find((g) => g.provider === "discogs")?.connected ? "Connected" : "Metadata connector",
      body: "Release/catalog metadata and album artwork. Token required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["token"],
      kind: "catalog",
      connector: u.find((g) => g.provider === "discogs"),
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
          h && /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center gap-2 rounded-full px-3",
              style: {
                height: 30,
                fontSize: 11,
                color: h.ready ? "var(--status-success)" : "var(--text-secondary)",
                background: "var(--bg-titlebar)",
                border: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("span", { style: { width: 7, height: 7, borderRadius: "var(--radius-full)", background: h.ready ? "var(--status-success)" : "var(--accent-secondary)" } }),
                h.ready ? "Music engine ready" : h.installing ? "Installing engine…" : "Music engine offline"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: qt,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(me, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: Se.map((g) => /* @__PURE__ */ n(
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
        /* @__PURE__ */ t(tt, { size: 16, style: { color: "var(--text-disabled)" } }),
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
        b && /* @__PURE__ */ t(V, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(me, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ t("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((g) => /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => l(g),
          className: "rounded-lg px-3 transition-all",
          style: {
            height: 28,
            fontSize: 11,
            fontWeight: s === g ? 900 : 700,
            color: s === g ? "white" : "var(--text-secondary)",
            background: s === g ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
            border: "1px solid var(--border-subtle)",
            textTransform: "capitalize"
          },
          children: g
        },
        g
      )) }) }),
      p && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: p })
    ] }),
    /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-2", children: [
        r.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        r.trim().length >= 2 && !b && d.length === 0 && !p && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        b && d.length === 0 && Array.from({ length: 5 }).map((g, z) => /* @__PURE__ */ n(
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
              /* @__PURE__ */ t(V, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${z}`
        )),
        d.map((g) => {
          const z = zi(g.title, g.channel), U = E.has(g.id), se = _ === g.id, ot = N === g.id, Vt = A.has(g.id);
          return /* @__PURE__ */ n(
            "div",
            {
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                g.thumbnailUrl || Ba(g.id) ? /* @__PURE__ */ t("img", { src: g.thumbnailUrl || Ba(g.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(ga, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: z.song }),
                  /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    z.artist || g.channel || "Music",
                    g.durationMs ? ` · ${je(g.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: g.title })
                ] }),
                Vt && !se && /* @__PURE__ */ n("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(V, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => R(g),
                    disabled: se,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      se ? /* @__PURE__ */ t(V, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(ue, { size: 12 }),
                      se ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => M(g),
                    disabled: U || ot,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: U ? "var(--text-disabled)" : "white", background: U ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      ot ? /* @__PURE__ */ t(V, { size: 12, className: "animate-spin" }) : U ? /* @__PURE__ */ t(pa, { size: 12 }) : /* @__PURE__ */ t(Ar, { size: 12 }),
                      ot ? "Adding" : U ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            g.id
          );
        })
      ] }),
      e === "artists" && (Ge !== null ? (() => {
        const g = Gt.find(([z]) => z === Ge)?.[1] ?? [];
        return /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => Ce(null),
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
                  /* @__PURE__ */ t(Ro, { size: 13 }),
                  " Artists"
                ]
              }
            ),
            /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Ge }),
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
                onClick: () => H(g[0]),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(ue, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: g.map(ht) })
        ] });
      })() : /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Gt.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Gt.map(([g, z]) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => Ce(g),
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            title: `Open ${g}`,
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: g }),
              /* @__PURE__ */ n("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                z.length,
                " track",
                z.length === 1 ? "" : "s"
              ] })
            ]
          },
          g
        ))
      ] })),
      e === "albums" && (Et !== null ? (() => {
        const z = Ve.find(([se]) => se === Et)?.[1] ?? [], U = z[0];
        return /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => ke(null),
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
                  /* @__PURE__ */ t(Ro, { size: 13 }),
                  " Albums"
                ]
              }
            ),
            U && /* @__PURE__ */ t(ut, { track: U, size: 64, iconSize: 24, radius: 14 }),
            /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 22, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }, children: Et }),
              /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }, children: [
                U?.artist || "Mixed artists",
                " · ",
                z.length,
                " track",
                z.length === 1 ? "" : "s"
              ] })
            ] }),
            U && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                onClick: () => H(U),
                className: "flex items-center gap-1.5 rounded-lg px-3",
                style: {
                  height: 32,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "white",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                },
                children: [
                  /* @__PURE__ */ t(ue, { size: 12 }),
                  " Play first"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: z.map(ht) })
        ] });
      })() : /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        Ve.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        Ve.map(([g, z]) => {
          const U = z[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ke(g),
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: `Open ${g}`,
              children: /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
                U && /* @__PURE__ */ t(ut, { track: U, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ n("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: g }),
                  /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    U?.artist || "Mixed artists",
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
      e === "playlists" && /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ t("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ n("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(_s, { size: 22 }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: C,
              onChange: (g) => at(g.target.value),
              onKeyDown: (g) => {
                g.key === "Enter" && fe();
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
              onClick: fe,
              disabled: f,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                f ? /* @__PURE__ */ t(V, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Ar, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        v.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : v.map((g) => /* @__PURE__ */ n("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
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
                  onClick: () => qe(g),
                  disabled: g.items.length === 0,
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-40",
                  style: { height: 30, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    /* @__PURE__ */ t(ue, { size: 12 }),
                    " Play"
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => Ne(g.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t($t, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: g.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : g.items.map((z) => /* @__PURE__ */ n("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(ut, { track: z, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ n("button", { type: "button", onClick: () => H(z), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: z.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: z.artist || "Unknown" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => ne(g.id, z.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(me, { size: 13 })
              }
            )
          ] }, `${g.id}-${z.id}`)) }),
          y.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: y.slice(0, 8).filter((z) => !g.items.some((U) => U.id === z.id)).map((z) => /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => j(g.id, z),
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
      e === "sources" && /* @__PURE__ */ n("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        Ka.map((g) => /* @__PURE__ */ n(
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
                    children: g.name === "Spotify" ? "♬" : g.name === "YouTube" ? /* @__PURE__ */ t(ue, { size: 18 }) : g.kind === "catalog" ? /* @__PURE__ */ t(es, { size: 18 }) : /* @__PURE__ */ t(kt, { size: 18 })
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
                      const z = g.connector?.credentialSpecs ?? g.needs.map((U) => ({ name: U, label: U, secret: !0, required: !0 }));
                      Ie({}), we(null), mt({
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
                g.connector?.account && /* @__PURE__ */ n("span", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                  "@",
                  g.connector.account
                ] })
              ] })
            ]
          },
          g.name
        )),
        K && /* @__PURE__ */ n("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ n("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ n("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                K.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: K.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => mt(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(me, { size: 16 }) })
          ] }),
          K.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ n(pe, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: K.specs.map((g) => /* @__PURE__ */ n("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: g.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: g.label || g.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: X[g.name] ?? "",
                  type: g.secret ? "password" : "text",
                  onChange: (z) => Ie((U) => ({ ...U, [g.name]: z.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: g.name
                }
              )
            ] }, g.name)) }),
            Ct && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: Ct }),
            /* @__PURE__ */ n("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  disabled: Jt || !K.configurable,
                  onClick: () => {
                    rt(!0), we(null), Ya(K.id, X).then(() => {
                      Ie({}), mt(null);
                    }).catch((g) => we(g.message || "Connector setup failed.")).finally(() => rt(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Jt ? /* @__PURE__ */ t(V, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(pa, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              K.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Jt,
                  onClick: () => {
                    rt(!0), we(null), Je(K.id).then(() => mt(null)).catch((g) => we(g.message || "Disconnect failed.")).finally(() => rt(!1));
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
function wd() {
  const e = sl(), { t: a } = Nt(), r = cl(), o = ml(), { state: s, dispatch: l } = ui(), { addNotification: d } = yl(), b = s.theme.mode, [p, h] = S("compose"), [w, u] = S(!1), [y, v] = S("creator"), [C, f] = S(null), [x, A] = S(""), [_, N] = S(""), [E, F] = S(null), [R, M] = S(""), [H, ae] = S(""), [he, at] = S(!1), [fe, j] = S(""), [ne, qe] = S(""), [Ne, Ya] = S(!0), [Je, qt] = S(!1), [K, mt] = S(null), [X, Ie] = S({}), [Jt, rt] = S(!1), [Ct, we] = S(null), [Ge, Ce] = S(null), [Et, ke] = S(null), [Se, ht] = S(!1), [Gt, Ve] = S(!1), [Ka, g] = S(!1), [z, U] = S([]), se = ee(null), ot = ee(null), [Vt, Hr] = S(!1), [Pe, $r] = S("best"), [Mi, ya] = S(!1), [Ye, Fr] = S("mic"), [De, Xa] = S(!1), [Br, Wr] = S(0), [qr, Yt] = S(null), Jr = ee(null), ba = ee([]), At = ee(null), Qa = ee(0), Kt = ee(null), [Lt, Ue] = S("idle"), [Xt, W] = S(null), [Ri, zt] = S(0), [Gr, Vr] = S(0), [gt, Ee] = S([]), [It, Q] = S(null), [Ae, Yr] = S(""), [Qt, Kr] = S("cards"), [Me, Xr] = S("mywork"), [Ke, ji] = S("all"), [yt, Qr] = S("all"), [Xe, Re] = S(!1), [Pi, Zt] = S("search"), [Za, Di] = S(""), [ea, Ui] = S("tracks"), [Oi, er] = S([]), [Hi, fa] = S(!1), [$i, Qe] = S(null), [Fi, Zr] = S(null), [Bi, eo] = S([]), [Wi, to] = S([]), [Ze, ao] = S({}), [qi, ro] = S(() => /* @__PURE__ */ new Set()), [Ji, oo] = S(null), [Gi, io] = S(null), [no, so] = S([]), [ve, tr] = S([]), [va, ar] = S(() => /* @__PURE__ */ new Set()), [rr, Mt] = S([]), [or, lo] = S(""), [Vi, co] = S(!1), uo = ee(/* @__PURE__ */ new Map()), ir = ee(/* @__PURE__ */ new Map()), nr = ee(/* @__PURE__ */ new Set()), [xa, ta] = S(null), [wa, po] = S(!1), [sr, mo] = S(yi), [Yi, lr] = S(!1);
  te(() => {
    let i = !1;
    return (async () => {
      try {
        await Promise.all([
          Oc(),
          Gl()
        ]);
      } catch (O) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", O);
      }
      await Ol().catch((O) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", O);
      });
      const [c, m, k, T, L, D, J] = await Promise.allSettled([
        wl(),
        wr(),
        Il(),
        Ho(),
        Dl(),
        Hl("track"),
        na()
      ]);
      if (i) return;
      const ge = c.status === "fulfilled" ? c.value : [], Oe = m.status === "fulfilled" ? m.value.tracks.map((O) => ({ ...O, source: "juli3ta" })) : [];
      m.status === "fulfilled" && (ta(m.value.rootPath), Q((O) => O?.startsWith("Real file library unavailable") ? null : O)), c.status === "fulfilled" ? Ee(sa(Oe, ge)) : (console.error("[Juli3ta] listTracks failed:", c.reason), Ee(sa(Oe)), Q("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), m.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", m.reason), Q("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const ft = new Set(Oe.map((O) => O.id)), He = new Set(ge.map((O) => O.id)), ce = ge.filter((O) => !ft.has(O.id) && mc(O)), Te = Oe.filter((O) => !He.has(O.id));
      (ce.length > 0 || Te.length > 0) && (async () => {
        const O = [];
        for (const oe of ce)
          try {
            const Z = await Wo({ ...oe, source: "juli3ta" });
            O.push({ ...oe, ...Z, source: "juli3ta" });
          } catch (Z) {
            console.warn("[Juli3ta] host file backfill failed:", oe.id, Z);
          }
        for (const oe of Te)
          try {
            await Fa({ ...oe, source: "juli3ta" });
          } catch (Z) {
            console.warn("[Juli3ta] standalone cache backfill failed:", oe.id, Z);
          }
        !i && (O.length > 0 || Te.length > 0) && (Ee((oe) => sa(O, Te, oe)), wr().then((oe) => ta(oe.rootPath)).catch(() => {
        }));
      })(), k.status === "fulfilled" && mo(k.value), T.status === "fulfilled" && U(T.value), L.status === "fulfilled" && tr(L.value), D.status === "fulfilled" && ar(new Set(D.value.map((O) => O.entityId))), J.status === "fulfilled" && Mt(J.value);
    })(), () => {
      i = !0;
    };
  }, []), te(() => {
    if (!It?.startsWith("Real file library unavailable")) return;
    let i = !1;
    const c = async () => {
      try {
        const k = await wr();
        if (i) return;
        ta(k.rootPath), Ee((T) => sa(k.tracks.map((L) => ({ ...L, source: "juli3ta" })), T)), Q((T) => T?.startsWith("Real file library unavailable") ? null : T);
      } catch {
      }
    }, m = window.setInterval(c, 4e3);
    return c(), () => {
      i = !0, window.clearInterval(m);
    };
  }, [It]);
  const cr = I(async (i) => {
    try {
      const c = await Wo({ ...i, source: "juli3ta" }), m = { ...i, ...c, source: "juli3ta" };
      return await Fa(m), ta(c.folderPath?.split("/").slice(0, -1).join("/") || xa), Q(null), Ee((k) => sa([m], k)), !0;
    } catch (c) {
      const m = c.message || "Real file save failed";
      return Q(`Couldn't save "${i.title}" as a real file — ${m}.`), !1;
    }
  }, [xa]), Ki = I(async (i) => {
    mo(i);
    try {
      await Ml(i);
    } catch (c) {
      console.warn("Settings save failed:", c);
    }
  }, []), ka = de(
    () => e.state ? Hc(e.state.agents, e.state.included) : [],
    [e.state]
  ), [Sa, Xi] = S([]), [Qi, Zi] = S(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [en, ho] = S(!0), B = Sa.find((i) => i.podId === Qi) ?? Sa[0] ?? null, dr = I(async () => {
    ho(!0);
    const i = new AbortController(), c = await Wc(ka, i.signal);
    Xi(c), ho(!1);
  }, [ka]);
  te(() => {
    ka.length !== 0 && queueMicrotask(() => void dr());
  }, [ka, dr]);
  const tn = I((i) => {
    Zi(i);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", i);
    } catch {
    }
  }, []), aa = ee(null), le = ee(null), ra = ee(null), Ta = ee(!1);
  te(() => () => {
    aa.current?.abort(), le.current?.abort();
  }, []), te(() => {
    if (Lt === "idle") {
      queueMicrotask(() => {
        zt(0), Vr(0);
      });
      return;
    }
    const i = Date.now(), c = () => {
      const T = (Date.now() - i) / 1e3, L = Lt === "lyrics" ? Math.min(0.95, T / 5) : Math.min(0.95, 1 - Math.exp(-T / 35));
      zt(L);
    };
    c();
    const m = setInterval(c, 250), k = setInterval(() => Vr((T) => T + 1), 4500);
    return () => {
      clearInterval(m), clearInterval(k);
    };
  }, [Lt]);
  const oa = I((i) => {
    if (!i.lyricsPreview) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const m = `${Ra(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, k = o.findChildByName(c, m);
    return k ? (o.writeFile(k.id, i.lyricsPreview), k.id) : o.createFile(c, m, i.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [o]), go = I((i) => {
    if (!i.audioDataUrl) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const m = `${Ra(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, k = o.findChildByName(c, m);
    return k ? k.id : o.createFile(c, m, "", {
      mimeType: "audio/mpeg",
      refTrackId: i.id
    });
  }, [o]), an = I(async () => {
    if (!B) {
      W(a("musiccreator.error.noPod"));
      return;
    }
    if (p === "restyle" && !Ge) {
      W(Se ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (Ta.current) return;
    Ta.current = !0, W(null), aa.current?.abort();
    const i = new AbortController();
    aa.current = i;
    try {
      const c = sr.overridesByEndpoint[B.url] ?? {}, m = {
        ...B,
        models: {
          music: c.music || B.models.music,
          cover: c.cover || B.models.cover,
          lyrics: c.lyrics || B.models.lyrics,
          lyricsBackup: c.lyricsBackup || B.models.lyricsBackup,
          image: c.image || B.models.image,
          allIds: B.models.allIds
        }
      }, k = Or(X);
      let T = _.trim(), L = H.trim(), D = R.trim(), J = null;
      if (!T && !he) {
        if (!x.trim() && !(X.intent ?? "").trim()) {
          W(a("musiccreator.error.noInput"));
          return;
        }
        Ue("lyrics");
        const ie = [];
        x.trim() && ie.push(x.trim());
        const hr = (X.intent ?? "").trim();
        hr && ie.push(`User intent (must respect): ${hr}`), k && ie.push(`Musical context: ${k}`), E && ie.push(`Structure: ${E.prompt}`);
        const qn = ie.join(`

`);
        J = await Vc(m, qn, i.signal), T = J.lyrics, L || (L = J.song_title), D || (D = J.style_tags);
      } else !T && he && (T = `[Intro]
[Instrumental]
[Outro]`);
      if (J && (N(J.lyrics), L === "Untitled" && (L = ""), L && !H.trim() && ae(L), D && !R.trim() && M(D), J.usedFallback && Q(
        `Primary lyrics model errored — used backup chat model "${m.models.lyricsBackup ?? "unknown"}" instead.`
      )), T.length > Pt) {
        W(a("musiccreator.error.lyricsTooLong", { count: T.length, max: Pt })), Ue("idle");
        return;
      }
      if (L.trim() || (L = Pc(T, x, D || R), L && L !== "Untitled" && !H.trim() && ae(L)), p === "lyricsOnly") {
        const ie = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (L || a("musiccreator.track.untitled")) + " (lyrics)",
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
          specsJson: Ht(X) > 0 ? JSON.stringify(X) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: fe,
          theme: x
        };
        await cr(ie) && oa(ie), Ue("idle"), zt(0);
        return;
      }
      if (p === "restyle" && !Ge) {
        W(Se ? "Still analyzing the reference audio — try again in a moment." : "Restyle needs a reference audio file. Drop one in below."), Ue("idle");
        return;
      }
      Ue("song");
      const ge = [D, k].filter((ie) => ie && ie.length > 0).join(". "), Oe = Yc(
        m,
        {
          lyrics: T,
          prompt: ge || void 0,
          instrumental: he,
          refAudioBase64: p === "restyle" ? Ge ?? void 0 : void 0
        },
        i.signal
      ), ft = Ne && !fe && !!m.models.image, He = fe, ce = ft ? Mr(
        m,
        (ne.trim() || Oa(L, x, D || R)).slice(0, 1500),
        i.signal
      ).catch((ie) => {
        if (ie.name === "AbortError") throw ie;
        return console.warn("[Juli3ta] Cover-art generation failed:", ie), Q(`Cover-art skipped: ${ie.message}`), He;
      }) : Promise.resolve(He), Te = await Promise.allSettled([Oe, ce]), O = Te[0], oe = Te[1];
      if (O.status === "rejected")
        throw i.abort(), O.reason;
      const Z = O.value, ct = oe.status === "fulfilled" ? oe.value : He;
      if (!Z?.data?.audio || typeof Z.data.audio != "string" || Z.data.audio.length < 100) {
        const ie = Z?.trace_id ? ` (trace ${Z.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${ie}. Try again or pick a different model in Settings.`);
      }
      const Bn = `data:audio/mpeg;base64,${Z.data.audio}`, Wn = p === "restyle" ? " (restyle)" : "", dt = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (L || a("musiccreator.track.untitled")) + Wn,
        styleTags: D || "—",
        lyricsPreview: T,
        // store the full text — used by Load
        durationMs: Z.data.duration_ms ?? 0,
        bitrate: Z.data.bitrate ?? 0,
        sampleRate: Z.data.sample_rate ?? 0,
        sizeBytes: Z.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: Bn,
        specsJson: Ht(X) > 0 ? JSON.stringify(X) : "",
        coverDataUrl: ct,
        theme: x
      };
      j(ct), console.info("[Juli3ta] Saving generated song:", { id: dt.id, title: dt.title, durationMs: dt.durationMs, sizeBytes: dt.sizeBytes }), await cr(dt) && (go(dt), oa(dt), d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: dt.title }),
        isRead: !1
      })), Ue("idle"), zt(0);
    } catch (c) {
      if (c.name === "AbortError") {
        Ue("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", c), W(c.message || "Generation failed — check the console for details."), Ue("idle"), zt(0);
    } finally {
      Ta.current = !1;
    }
  }, [
    B,
    x,
    _,
    H,
    R,
    X,
    E,
    he,
    p,
    Ge,
    a,
    cr,
    sr,
    go,
    oa,
    d,
    Ne,
    fe,
    ne
  ]), rn = () => se.current?.click(), yo = ee(0), it = I(async (i, c) => {
    const m = ++yo.current, k = () => yo.current === m;
    W(null), ht(!0), Ce(null), we(c), ke(null);
    try {
      if (Pe === "mix") {
        const T = await ic(i);
        if (!k()) return;
        Ce(T.base64);
        const L = T.sourceDurationSec / 60;
        if (T.segments.length > 1) {
          const D = T.segments.map((J) => `${Math.floor(J.startSec / 60)}:${Math.floor(J.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          ke(
            `Mixed ${T.segments.length} iconic moments (${T.durationSec.toFixed(0)} s) from ${L.toFixed(1)} min — at ${D}`
          );
        } else
          ke(`Using whole clip (${T.durationSec.toFixed(0)} s)`);
      } else {
        const T = await Ni(i);
        if (!k()) return;
        Ce(T.base64);
        const L = T.sourceDurationSec / 60, D = T.startSec / 60, J = T.startSec < 60 ? `${T.startSec.toFixed(1)} s` : `${Math.floor(D)}:${Math.floor(T.startSec % 60).toString().padStart(2, "0")}`;
        ke(
          T.sourceDurationSec <= T.durationSec + 0.5 ? `Using whole clip (${T.durationSec.toFixed(0)} s)` : `Auto-picked best ${T.durationSec.toFixed(0)} s starting at ${J} of ${L.toFixed(1)} min`
        );
      }
    } catch (T) {
      if (!k()) return;
      W(T.message || "Could not analyze that audio."), we(null);
    } finally {
      k() && ht(!1);
    }
  }, [Pe]), on = async () => {
    Yt(null);
    try {
      let i;
      if (Ye === "tab") {
        const T = navigator.mediaDevices;
        if (!T.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        i = await T.getDisplayMedia({ video: !0, audio: !0 });
        for (const L of i.getVideoTracks())
          L.stop(), i.removeTrack(L);
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
      ].find((T) => MediaRecorder.isTypeSupported(T)) || "", k = new MediaRecorder(i, m ? { mimeType: m } : void 0);
      ba.current = [], k.ondataavailable = (T) => {
        T.data && T.data.size > 0 && ba.current.push(T.data);
      }, k.onstop = async () => {
        try {
          const T = new Blob(ba.current, {
            type: ba.current[0]?.type || m || "audio/webm"
          });
          if (T.size === 0) {
            Yt("Recording was empty.");
            return;
          }
          const L = new FileReader();
          L.onerror = () => Yt("Could not read the recording."), L.onload = () => {
            const D = typeof L.result == "string" ? L.result : "", J = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${Ye === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - Qa.current,
              mimeType: T.type || m || "audio/webm",
              audioDataUrl: D,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await wi(J), U((ge) => [J, ...ge]);
              } catch (ge) {
                console.warn("Recording save failed", ge), Yt("Could not save the recording. Try again.");
              }
            })(), ya(!1), it(T, J.name);
          }, L.readAsDataURL(T);
        } finally {
          At.current?.getTracks().forEach((T) => T.stop()), At.current = null;
        }
      }, k.start(250), Jr.current = k, Qa.current = Date.now(), Wr(0), Xa(!0), Kt.current = setInterval(() => {
        Wr(Date.now() - Qa.current);
      }, 100);
    } catch (i) {
      Yt(i.message || "Could not start recording."), At.current?.getTracks().forEach((c) => c.stop()), At.current = null, Xa(!1);
    }
  }, nn = () => {
    const i = Jr.current;
    i && i.state !== "inactive" && i.stop(), Kt.current && clearInterval(Kt.current), Xa(!1);
  };
  te(() => () => {
    At.current?.getTracks().forEach((i) => i.stop()), Kt.current && clearInterval(Kt.current);
  }, []);
  const sn = (i) => {
    const c = i.target.files?.[0];
    if (i.target.value = "", !!c) {
      if (c.size > 50 * 1024 * 1024) {
        W("Reference audio is too big. Max 50 MB.");
        return;
      }
      it(c, c.name);
    }
  }, ln = (i) => {
    Ve(!1), it(i.audioDataUrl, i.name);
  }, cn = () => {
    Ve(!0), Ho().then((i) => U(i)).catch(() => {
    });
  }, dn = () => g(!0), un = (i) => {
    if (g(!1), !i.audioDataUrl) return;
    const c = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    it(i.audioDataUrl, `${c}.mp3`);
  }, pn = () => {
    Ce(null), we(null), ke(null);
  }, mn = () => {
    aa.current?.abort(), Ue("idle");
  }, nt = I(async (i, c, m) => {
    if (!B) throw new Error("No endpoint connected");
    const k = (ce) => {
      const Te = ce, O = Te.choices?.[0], oe = [
        O?.message?.content,
        O?.delta?.content,
        O?.text,
        Te.output_text
      ];
      for (const Z of oe)
        if (typeof Z == "string" && Z.trim().length > 0) return Z.trim();
      return "";
    }, T = (ce) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(ce), L = /* @__PURE__ */ new Set(), D = [], J = (ce) => {
      ce && !L.has(ce) && (L.add(ce), D.push(ce));
    };
    if (J(B.models.lyricsBackup), B.models.allIds.filter(T).forEach(J), D.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const ge = typeof c == "string" ? c : JSON.stringify(c), Oe = m?.temperature ?? 0.5, ft = Math.max(m?.maxTokens ?? 800, 400), He = 45e3;
    return Va(D, async (ce) => {
      const Te = Ft(m?.signal, He);
      let O;
      try {
        O = await fetch(`${B.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${B.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: ce,
            messages: [
              { role: "system", content: i },
              { role: "user", content: ge }
            ],
            temperature: Oe,
            max_tokens: ft
          }),
          signal: Te.signal
        });
      } catch (ct) {
        throw ct.name === "TimeoutError" ? new Error(`AI assist timed out after ${He / 1e3}s.`) : ct;
      } finally {
        Te.dispose();
      }
      if (!O.ok) {
        const ct = await O.text().catch(() => "");
        throw new xe(O.status, ct, `AI assist HTTP ${O.status}: ${ct.slice(0, 200)}`);
      }
      const oe = await O.json(), Z = k(oe);
      if (!Z)
        throw console.warn("[Juli3ta] empty AI assist content from", ce, oe), new xe(502, "", `Model "${ce}" returned empty content`);
      return Z.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [B]), hn = I(async () => {
    if (B) {
      rt(!0), W(null);
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
        le.current?.abort(), le.current = new AbortController();
        const c = await nt(i, {
          theme: x || null,
          style: R || null,
          lyrics: _ ? _.slice(0, 1500) : null,
          existing_specs: Ht(X) > 0 ? X : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: le.current.signal
        }), m = Ii(c) ?? c;
        let k;
        try {
          k = JSON.parse(m);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${c.slice(0, 160)}`);
        }
        Ie((T) => ({ ...k, intent: T.intent }));
      } catch (i) {
        W(i.message || "Optimize failed.");
      } finally {
        rt(!1);
      }
    }
  }, [B, x, R, _, X, nt]), [Le, bt] = S(null), bo = I(async () => {
    if (!B) return;
    if (!B.models.image) {
      W(`This endpoint (${B.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (Je) return;
    le.current?.abort(), le.current = new AbortController();
    const i = le.current.signal;
    qt(!0), W(null);
    try {
      const c = (ne.trim() || Oa(H, x, R)).slice(0, 1500), m = await Mr(B, c, i);
      if (i.aborted) return;
      j(m), K && ra.current?.(K, m);
    } catch (c) {
      if (c.name === "AbortError") return;
      W(c.message || "Cover-art generation failed.");
    } finally {
      qt(!1);
    }
  }, [B, ne, H, x, R, Je, K]), fo = I((i) => {
    if (!i.type.startsWith("image/")) {
      W("That file is not an image. Pick a PNG/JPG/WebP.");
      return;
    }
    if (i.size > 4 * 1024 * 1024) {
      W("Cover image is too big (limit 4 MB). Try a smaller file.");
      return;
    }
    const c = new FileReader();
    c.onerror = () => W("Could not read that image file."), c.onload = () => {
      const m = c.result;
      typeof m == "string" && m.startsWith("data:image/") && (j(m), K && ra.current?.(K, m));
    }, c.readAsDataURL(i);
  }, [K]), gn = I(async () => {
    if (!Le) {
      bt("theme"), W(null);
      try {
        const i = "You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.";
        le.current?.abort(), le.current = new AbortController();
        const c = await nt(i, {
          style: R || "pop",
          existing_theme: x || null
        }, { temperature: 0.85, maxTokens: 200, signal: le.current.signal });
        A(c);
      } catch (i) {
        W(i.message || "Theme inspiration failed.");
      } finally {
        bt(null);
      }
    }
  }, [Le, nt, R, x]), yn = I(async () => {
    if (!Le) {
      bt("style"), W(null);
      try {
        const i = 'You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".';
        le.current?.abort(), le.current = new AbortController();
        const c = await nt(i, {
          theme: x || "a quiet evening",
          existing_style: R || null
        }, { temperature: 0.7, maxTokens: 120, signal: le.current.signal });
        M(c.replace(/^["']|["']$/g, ""));
      } catch (i) {
        W(i.message || "Style suggestion failed.");
      } finally {
        bt(null);
      }
    }
  }, [Le, nt, x, R]), bn = I(async () => {
    if (!Le) {
      if (!_.trim()) {
        W("Nothing to polish — write some lyrics first.");
        return;
      }
      bt("lyrics"), W(null);
      try {
        const i = "You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.";
        le.current?.abort(), le.current = new AbortController();
        const c = await nt(i, {
          style: R || null,
          lyrics: _
        }, { temperature: 0.6, maxTokens: 1200, signal: le.current.signal });
        if (c.length > Pt) {
          W(`Polished lyrics exceeded ${Pt} chars (${c.length}). Trimming the original first might help.`);
          return;
        }
        N(c);
      } catch (i) {
        W(i.message || "Lyrics polish failed.");
      } finally {
        bt(null);
      }
    }
  }, [Le, nt, R, _]), fn = (i) => {
    M((c) => c ? `${c}, ${i.toLowerCase()}` : i.toLowerCase());
  }, ur = () => {
    const i = [
      "Late-night coding session, neon city skyline, focus and flow.",
      "Sunday-morning coffee, soft rain, lo-fi piano.",
      "Synthwave anthem about shipping on Friday evening.",
      "Jazz ballad about a forgotten train station at 3am.",
      "Acoustic folk song about a long road trip with old friends.",
      "Cinematic orchestral piece for a heroic underdog scene.",
      "Upbeat pop anthem about finishing a hard project."
    ];
    A(i[Math.floor(Math.random() * i.length)]);
  }, vn = () => {
    const i = C ?? ze.state.trackId ?? lt[0]?.id ?? ve[0]?.id ?? null, c = i ? La.find((m) => m.id === i) ?? null : null;
    c && Rt(c), v("creator"), ur();
  }, vo = I((i) => {
    Ee((c) => c.filter((m) => m.id !== i)), Sl(i).catch((c) => console.warn("Track cache delete failed:", c)), uc(i).catch((c) => console.warn("Track file delete failed:", c));
  }, []), xn = I(async () => {
    if (!wa) {
      po(!0);
      try {
        const i = await pc();
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
        po(!1);
      }
    }
  }, [d, wa]), _a = I(async (i, c) => {
    const m = c.trim().slice(0, 200) || "Untitled";
    Ee((k) => k.map((T) => T.id === i ? { ...T, title: m } : T));
    try {
      await Tl(i, m), Q(null);
    } catch (k) {
      const T = k.message || "Database write failed";
      Q(`Couldn't rename track — ${T}.`);
    }
  }, []), pr = I(async (i, c) => {
    Ee((m) => m.map((k) => k.id === i ? { ...k, coverDataUrl: c } : k));
    try {
      await _l(i, c), Q(null);
    } catch (m) {
      const k = m.message || "Database write failed";
      Q(`Couldn't save cover art — ${k}.`);
    }
  }, []);
  te(() => {
    ra.current = pr;
  }, [pr]);
  const xo = I(async (i, c) => {
    Ee((m) => m.map((k) => k.id === i ? { ...k, styleTags: c || "—" } : k));
    try {
      await Nl(i, c), Q(null);
    } catch (m) {
      const k = m.message || "Database write failed";
      Q(`Couldn't save style — ${k}.`);
    }
  }, []), wo = I(async (i, c) => {
    Ee((m) => m.map((k) => k.id === i ? { ...k, lyricsPreview: c } : k));
    try {
      await Cl(i, c), Q(null);
    } catch (m) {
      const k = m.message || "Database write failed";
      Q(`Couldn't save lyrics — ${k}.`);
    }
  }, []), ko = I(async (i, c) => {
    Ee((m) => m.map((k) => k.id === i ? { ...k, specsJson: c } : k));
    try {
      await El(i, c), Q(null);
    } catch (m) {
      const k = m.message || "Database write failed";
      Q(`Couldn't save specs — ${k}.`);
    }
  }, []), So = I(async (i, c) => {
    Ee((m) => m.map((k) => k.id === i ? { ...k, theme: c } : k));
    try {
      await Al(i, c), Q(null);
    } catch (m) {
      const k = m.message || "Database write failed";
      Q(`Couldn't save theme — ${k}.`);
    }
  }, []);
  te(() => {
    if (!K) return;
    const i = K, c = setTimeout(() => {
      const m = gt.find((ge) => ge.id === i);
      if (!m) return;
      const k = H.trim() || m.title, T = R.trim(), L = x, D = Ht(X) > 0 ? JSON.stringify(X) : "", J = m.styleTags === "—" ? "" : m.styleTags || "";
      m.title !== k && _a(i, k), J !== T && xo(i, T), (m.lyricsPreview || "") !== _ && wo(i, _), (m.specsJson || "") !== D && ko(i, D), (m.theme || "") !== L && So(i, L);
    }, 600);
    return () => clearTimeout(c);
  }, [K, H, R, x, _, X, gt, _a, xo, wo, ko, So]);
  const [To, _o] = S(null), [wn, No] = S(!1), Rt = I((i) => {
    N(i.lyricsPreview ?? ""), M(i.styleTags && i.styleTags !== "—" ? i.styleTags : ""), A(i.theme ?? "");
    const c = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (ae(c), at(!1), i.specsJson)
      try {
        Ie(JSON.parse(i.specsJson));
      } catch {
        Ie({});
      }
    else
      Ie({});
    j(i.coverDataUrl ?? ""), qe(""), mt(i.id), W(null), F(null), at(!1), be(i) ? i.source === "youtube" ? (h("restyle"), Ce(null), we(`${c}.mp3`), ke("Resolving streamed audio…"), ht(!0), (async () => {
      try {
        const k = i.externalId || "";
        if (!k) throw new Error("Missing source identifier.");
        const T = la(k), L = Ze[T], D = L && Date.now() - L.resolvedAt < 5400 * 1e3 ? L.src : (await xr(k)).proxyUrl;
        await it(D, `${c}.mp3`);
      } catch (k) {
        ht(!1), Ce(null), we(null), ke(null), W(`Could not load streamed track for restyle: ${k.message || "unknown error"}`);
      }
    })()) : (h("restyle"), it(i.audioDataUrl, `${c}.mp3`)) : (Ce(null), we(null), ke(null), h("lyricsOnly"));
  }, [it, Ze]), Co = I((i) => {
    const c = oa(i);
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
  }, [oa, l, d, a]), Na = I((i, c, m, k) => {
    const T = o.ensureUserFolder("Desktop");
    if (!T) return;
    const L = o.findChildByName(T, i);
    let D;
    if (L)
      m.refTrackId || o.writeFile(L.id, c), D = L.id;
    else {
      D = o.createFile(T, i, c, m);
      const J = Array.from(k).reduce((ft, He) => ft + He.charCodeAt(0), 0), ge = J % 6 + 1, Oe = Math.floor(J / 6) % 4;
      l({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: i,
          icon: pl(i),
          fileSystemNodeId: D,
          position: { x: 16 + ge * 80, y: 16 + Oe * 90 },
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
  }, [o, l, d, a]), kn = I((i) => {
    if (!i.audioDataUrl) return;
    const c = Ra(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Na(`${c}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: i.id }, i.id);
  }, [Na]), Sn = I((i) => {
    if (!i.lyricsPreview) return;
    const c = Ra(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    Na(`${c}.lyrics.txt`, i.lyricsPreview, { mimeType: "text/plain" }, `${i.id}-lyrics`);
  }, [Na]), Tn = I((i) => {
    Re(!1), v("player"), f(i.id);
  }, []), et = I((i) => {
    const c = i.dataTransfer.getData(ua);
    if (!c) return null;
    try {
      return JSON.parse(c);
    } catch {
      return null;
    }
  }, []), _n = I((i) => {
    const c = et(i);
    if (c && c.lyricsPreview) {
      i.preventDefault(), N(c.lyricsPreview);
      const m = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !H.trim() && m && ae(m), !R.trim() && c.styleTags && c.styleTags !== "—" && M(c.styleTags);
      return;
    }
  }, [et, H, R]), Nn = I((i) => {
    const c = et(i);
    c && c.styleTags && c.styleTags !== "—" && (i.preventDefault(), M((m) => m ? `${m}, ${c.styleTags}` : c.styleTags));
  }, [et]), Cn = I((i) => {
    const c = et(i);
    if (c) {
      i.preventDefault();
      const m = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), k = c.styleTags && c.styleTags !== "—" ? `Inspired by "${m}" — ${c.styleTags}` : `Inspired by "${m}"`;
      A(k);
    }
  }, [et]), En = I((i) => {
    const c = et(i);
    c && (i.preventDefault(), ae(c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [et]), Ca = (i) => {
    i.dataTransfer.types.includes(ua) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
  }, Eo = _.length, An = R.length, q = Lt !== "idle", Ln = de(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            aa.current?.abort(), le.current?.abort(), Ta.current = !1, h("compose"), A(""), N(""), M(""), ae(""), Ie({}), F(null), at(!1), j(""), qe(""), Hr(!1), Ce(null), we(null), ke(null), W(null), Q(null), Ue("idle"), zt(0), bt(null), qt(!1), rt(!1), mt(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => ur() },
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
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => lr(!0) }
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
  ll(r?.id ?? null, Ln);
  const st = de(
    () => gt.filter(Ai),
    [gt]
  ), lt = de(() => {
    let i = st;
    Ke === "songs" ? i = i.filter((m) => be(m) && !/\(restyle\)\s*$/i.test(m.title) && !/\(lyrics\)\s*$/i.test(m.title)) : Ke === "restyles" ? i = i.filter((m) => /\(restyle\)\s*$/i.test(m.title)) : Ke === "lyrics" && (i = i.filter((m) => !be(m) || /\(lyrics\)\s*$/i.test(m.title)));
    const c = Ae.trim().toLowerCase();
    return c ? i.filter((m) => m.title.toLowerCase().includes(c) || m.styleTags.toLowerCase().includes(c)) : i;
  }, [st, Ae, Ke]), mr = de(() => {
    let i = ve;
    yt === "favorites" && (i = i.filter((m) => va.has(m.id)));
    const c = Ae.trim().toLowerCase();
    return c ? i.filter((m) => m.title.toLowerCase().includes(c) || (m.artist || "").toLowerCase().includes(c) || (m.album || "").toLowerCase().includes(c)) : i;
  }, [ve, yt, Ae, va]), ia = I((i) => {
    i.slice(0, 4).forEach((c) => {
      const m = la(c.id), k = Ze[m];
      k && Date.now() - k.resolvedAt < 5400 * 1e3 || nr.current.has(c.id) || (nr.current.add(c.id), ro((T) => new Set(T).add(c.id)), xr(c.id).then((T) => {
        ao((L) => ({
          ...L,
          [m]: { src: T.proxyUrl, resolvedAt: Date.now() }
        }));
      }).catch(() => {
      }).finally(() => {
        nr.current.delete(c.id), ro((T) => {
          const L = new Set(T);
          return L.delete(c.id), L;
        });
      }));
    });
  }, [Ze]);
  te(() => {
    if (!Xe) return;
    const i = new AbortController();
    return Promise.allSettled([
      nc(i.signal),
      Fo(i.signal),
      Bo(i.signal)
    ]).then(([c, m, k]) => {
      c.status === "fulfilled" ? Zr(c.value) : Zr(null), m.status === "fulfilled" && eo(m.value), k.status === "fulfilled" && to(k.value);
    }), () => i.abort();
  }, [Xe]), te(() => {
    if (!Xe) return;
    const i = (c) => {
      c.key === "Escape" && Re(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [Xe]), te(() => {
    if (!Xe) return;
    const i = Za.trim();
    if (i.length < 2) {
      const L = window.setTimeout(() => {
        er([]), Qe(null), fa(!1);
      }, 0);
      return () => window.clearTimeout(L);
    }
    const c = `${ea}:${i.toLowerCase()}`, m = uo.current.get(c);
    if (m) {
      er(m), fa(!1), Qe(null), ia(m);
      return;
    }
    const k = new AbortController(), T = setTimeout(() => {
      fa(!0), Qe(null);
      let L = ir.current.get(c);
      L || (L = dc(i, ea, 20, k.signal).then((D) => ea === "playlists" ? D.results.playlists : D.results.tracks).catch(() => cc(i, 20, k.signal)).finally(() => {
        ir.current.delete(c);
      }), ir.current.set(c, L)), L.then((D) => {
        uo.current.set(c, D), er(D), ia(D);
      }).catch((D) => {
        k.signal.aborted || Qe(D.message || "Music search failed.");
      }).finally(() => {
        k.signal.aborted || fa(!1);
      });
    }, 120);
    return () => {
      k.abort(), clearTimeout(T);
    };
  }, [Za, ea, Xe, ia]);
  const Ea = I(async () => {
    const [i, c] = await Promise.allSettled([
      Fo(),
      Bo()
    ]);
    i.status === "fulfilled" && eo(i.value), c.status === "fulfilled" && to(c.value);
  }, []), zn = I(async (i, c) => {
    await sc(i, c), await Ea(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${i} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, Ea]), In = I(async (i) => {
    await lc(i), await Ea(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${i} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [d, Ea]), Mn = de(
    () => new Set(ve.filter((i) => i.externalId).map((i) => i.externalId)),
    [ve]
  ), Aa = I((i, c) => {
    const m = zi(i.title, i.channel);
    return {
      id: c?.id ?? la(i.id),
      title: m.song || i.title || "Untitled",
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
      thumbnailUrl: i.thumbnailUrl || Ba(i.id),
      artist: m.artist || i.channel || "Unknown",
      album: i.channel ?? ""
    };
  }, []), Rn = I(async (i, c) => {
    if (i.audioDataUrl && !c?.force) return i.audioDataUrl;
    if (!Li(i) || !i.externalId) return i.audioDataUrl || null;
    const m = la(i.externalId), k = Ze[m] ?? Ze[i.id];
    if (!c?.force && k && Date.now() - k.resolvedAt < 5400 * 1e3) return k.src;
    const T = await xr(i.externalId);
    return ao((L) => ({ ...L, [m]: { src: T.proxyUrl, resolvedAt: Date.now() } })), T.proxyUrl;
  }, [Ze]), La = de(
    () => [...no, ...ve, ...lt],
    [no, ve, lt]
  ), Ao = ee(null), ze = Kc(La, Ao, Rn), jn = I((i) => {
    const c = i.items.find(be);
    c && (so((m) => [
      ...i.items.filter((k) => !m.some((T) => T.id === k.id)),
      ...m
    ]), f(c.id), Re(!1), v("player"), ze.play(c));
  }, [ze]), Pn = I(async (i) => {
    await Bl(i), Mt(await na());
  }, []), Dn = I((i) => {
    Qe(null), oo(i.id);
    const c = la(i.id), m = Ze[c], k = Aa(
      i,
      m ? { id: c, audioDataUrl: m.src } : void 0
    );
    so((T) => [k, ...T.filter((L) => L.id !== k.id)]), f(k.id), v("player"), ze.play(k), oo(null);
  }, [ze, Aa, Ze]), Un = I(async (i) => {
    io(i.id);
    const c = Aa(i);
    try {
      await xi(c), tr((m) => [c, ...m.filter((k) => k.id !== c.id)]), f(c.id), Xr("library"), Qr("all"), ia([i]), rr.length > 0;
    } catch (m) {
      Qe(m.message || "Could not save track.");
    } finally {
      io(null);
    }
  }, [Aa, ia, rr.length]), Lo = I((i) => {
    ar((c) => {
      const m = new Set(c);
      return m.has(i.id) ? m.delete(i.id) : m.add(i.id), m;
    }), $l({
      kind: "track",
      entityId: i.id,
      provider: i.source ?? "youtube",
      title: i.title
    }).catch((c) => console.warn("Favorite toggle failed:", c));
  }, []), On = I(async () => {
    const i = or.trim() || "New Playlist";
    co(!0);
    try {
      const c = await Fl(i);
      Mt((m) => [c, ...m]), lo("");
    } catch (c) {
      Qe(c.message || "Could not create playlist.");
    } finally {
      co(!1);
    }
  }, [or]), Hn = I(async (i, c) => {
    try {
      await Wl(i, c);
      const m = await na();
      Mt(m);
    } catch (m) {
      Qe(m.message || "Could not add to playlist.");
    }
  }, []), $n = I(async (i, c) => {
    try {
      await ql(i, c);
      const m = await na();
      Mt(m);
    } catch (m) {
      Qe(m.message || "Could not remove from playlist.");
    }
  }, []), zo = I((i) => {
    tr((c) => c.filter((m) => m.id !== i.id)), ar((c) => {
      const m = new Set(c);
      return m.delete(i.id), m;
    }), Ul(i.id).then(() => na().then(Mt)).catch((c) => console.warn("Library track delete failed:", c));
  }, []), Io = I((i) => {
    f(i.id), Re(!1), v("player");
  }, []), Fn = I((i) => {
    Rt(i), Re(!1), v("creator");
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
                /* @__PURE__ */ t(We, { size: 13, style: { color: "var(--accent-primary)" } }),
                /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA" }),
                /* @__PURE__ */ n("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: Me === "mywork" ? Ae.trim() || Ke !== "all" ? `${lt.length} / ${st.length}` : a(
                    st.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: st.length }
                  ) : Ae.trim() || yt !== "all" ? `${mr.length} / ${ve.length}` : `${ve.length} saved` }),
                  Me === "mywork" && /* @__PURE__ */ n(pe, { children: [
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: xn,
                        disabled: wa,
                        className: "flex items-center justify-center transition-all",
                        style: {
                          width: 22,
                          height: 22,
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-window)",
                          color: "var(--text-secondary)",
                          opacity: wa ? 0.5 : 1
                        },
                        title: xa ? `Open real folder: ${xa}` : "Open real JULI3TA folder",
                        children: /* @__PURE__ */ t(xs, { size: 11 })
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
                              children: /* @__PURE__ */ t(Cr, { size: 11 })
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
                              children: /* @__PURE__ */ t(St, { size: 11 })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  Me === "library" && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        Re(!0), Zt("search");
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
                      children: /* @__PURE__ */ t(tt, { size: 11 })
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
                    fontWeight: Me === i.id ? 700 : 600,
                    color: Me === i.id ? "white" : "var(--text-secondary)",
                    background: Me === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "transparent",
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
                opacity: Me === "mywork" ? st.length === 0 ? 0.4 : 1 : ve.length === 0 ? 0.4 : 1
              },
              children: [
                /* @__PURE__ */ t(tt, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: Ae,
                    onChange: (i) => Yr(i.target.value),
                    placeholder: Me === "mywork" ? a("musiccreator.gallery.searchPlaceholder") : "Search Library…",
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" },
                    disabled: Me === "mywork" ? st.length === 0 : ve.length === 0
                  }
                ),
                Ae && /* @__PURE__ */ t(
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
              children: Me === "mywork" ? [
                { id: "all", label: "All" },
                { id: "songs", label: "Songs" },
                { id: "restyles", label: "Restyles" },
                { id: "lyrics", label: "Lyrics" }
              ].map((i) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => ji(i.id),
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
                    fontWeight: yt === i.id ? 800 : 600,
                    color: yt === i.id ? "white" : "var(--text-secondary)",
                    background: yt === i.id ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: i.label
                },
                i.id
              ))
            }
          ),
          Me === "mywork" ? st.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t(St, { size: 18, style: { color: "var(--text-disabled)" } })
              }
            ),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: a("musiccreator.gallery.empty.title") }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: a("musiccreator.gallery.empty.body") }),
            /* @__PURE__ */ n("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(Be, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : lt.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(tt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ae ? a("musiccreator.gallery.searchEmpty", { q: Ae }) : `No ${Ke} yet.` })
          ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Qt === "list" ? /* @__PURE__ */ t(
            nd,
            {
              tracks: lt,
              player: ze,
              onLoad: Rt,
              onOpenLyrics: Co,
              onDelete: vo,
              onRename: _a
            }
          ) : lt.map((i) => /* @__PURE__ */ t(
            ld,
            {
              track: i,
              onDelete: vo,
              onLoad: Rt,
              onOpenLyrics: Co,
              onSaveSongToDesktop: kn,
              onSaveLyricsToDesktop: Sn,
              onPlayInPlayer: Tn,
              onRename: _a,
              onEditCover: _o,
              onSelect: Io,
              selected: y === "player" && C === i.id,
              player: ze
            },
            i.id
          )) }) : (
            /* Library tab — flat slim list of saved streamed tracks. The
               rich Artists/Albums/Playlists views still live in the main
               Music pane (reachable via the search button in the header
               above) since they need more horizontal room than 260px. */
            ve.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(
                "div",
                {
                  className: "flex items-center justify-center rounded-2xl mb-2",
                  style: { width: 44, height: 44, background: "var(--bg-hover)" },
                  children: /* @__PURE__ */ t(jr, { size: 18, style: { color: "var(--text-disabled)" } })
                }
              ),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: "Your saved music lives here" }),
              /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: "Click the magnifier above to search, then add tracks you want to keep." }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => {
                    Re(!0), Zt("search");
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
                    /* @__PURE__ */ t(tt, { size: 11 }),
                    " Search music"
                  ]
                }
              )
            ] }) : mr.length === 0 ? /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
              /* @__PURE__ */ t(tt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: Ae ? `No matches for "${Ae}"` : `No ${yt} yet.` })
            ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: mr.map((i) => /* @__PURE__ */ t(
              cd,
              {
                track: i,
                player: ze,
                selected: y === "player" && C === i.id,
                isFavorite: va.has(i.id),
                onOpenInPlayer: Io,
                onRemix: Fn,
                onToggleFavorite: Lo,
                onRemove: zo
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
              /* @__PURE__ */ t(pi, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
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
                  { id: "creator", icon: /* @__PURE__ */ t(We, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(ue, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
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
                    Re((i) => !i), Zt("search");
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
                    /* @__PURE__ */ t(tt, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(id, { endpoint: B, endpoints: Sa, onSwitch: tn }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: y === "player" ? vn : ur,
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
                    /* @__PURE__ */ t(Bs, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => lr(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(li, { size: 14 })
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
                  children: /* @__PURE__ */ t(ds, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      y === "player" && (Xe ? /* @__PURE__ */ t(
        xd,
        {
          tab: Pi,
          onTabChange: Zt,
          query: Za,
          onQueryChange: Di,
          resultType: ea,
          onResultTypeChange: Ui,
          results: Oi,
          busy: Hi,
          error: $i,
          status: Fi,
          providers: Bi,
          connectors: Wi,
          libraryTracks: ve,
          playlists: rr,
          playlistNameDraft: or,
          playlistBusy: Vi,
          favoriteIds: va,
          warmupIds: qi,
          previewBusyId: Ji,
          addBusyId: Gi,
          savedYoutubeIds: Mn,
          player: ze,
          onPreview: Dn,
          onAdd: Un,
          onOpenTrack: (i) => {
            f(i.id), Re(!1), v("player");
          },
          onToggleFavorite: Lo,
          onRemoveLibraryTrack: zo,
          onPlaylistNameDraftChange: lo,
          onCreatePlaylist: On,
          onAddTrackToPlaylist: Hn,
          onRemoveTrackFromPlaylist: $n,
          onPlayPlaylist: jn,
          onDeletePlaylist: Pn,
          onConfigureConnector: zn,
          onDisconnectConnector: In,
          onClose: () => Re(!1)
        }
      ) : /* @__PURE__ */ t(
        vd,
        {
          track: (() => {
            const i = C ?? ze.state.trackId ?? lt[0]?.id ?? ve[0]?.id ?? null;
            return i ? La.find((c) => c.id === i) ?? null : null;
          })(),
          player: ze,
          onSwitchToCreator: () => v("creator"),
          onSearchMusic: () => {
            v("player"), Re(!0), Zt("search");
          },
          onEditInCreator: (i) => {
            Rt(i), v("creator");
          }
        }
      )),
      y === "creator" && /* @__PURE__ */ n(pe, { children: [
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
                { id: "restyle", icon: /* @__PURE__ */ t(Tt, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t(Ha, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((i) => /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => h(i.id),
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
                  onClick: mn,
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
                    /* @__PURE__ */ t(V, { size: 12, className: "animate-spin" }),
                    a("musiccreator.button.cancel")
                  ]
                }
              ) : (() => {
                const i = p === "restyle" && (Se || !Ge);
                return /* @__PURE__ */ n(
                  "button",
                  {
                    onClick: an,
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
                    title: i ? Se ? "Analyzing reference audio — hold on…" : "Drop a reference audio file in the Restyle panel below" : void 0,
                    children: [
                      i && Se ? /* @__PURE__ */ t(V, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(Tt, { size: 13 }),
                      p === "restyle" ? Se ? "Analyzing audio…" : "Restyle Song" : p === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
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
                  value: H,
                  onChange: (i) => ae(i.target.value),
                  onDragOver: Ca,
                  onDrop: En,
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
                      Xo,
                      {
                        id: "juli3ta-instrumental",
                        checked: he,
                        onChange: at,
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
                    width: `${Ri * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: Xt ? /* @__PURE__ */ n(pe, { children: [
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
              ] }) : q ? /* @__PURE__ */ n(pe, { children: [
                /* @__PURE__ */ t(V, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: Lt === "lyrics" ? Yo[Gr % Yo.length] : Ko[Gr % Ko.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: Lt === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : /* @__PURE__ */ n(pe, { children: [
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
                const c = et(i);
                c && c.hasAudio && (i.preventDefault(), (async () => {
                  const m = await kl(c.id);
                  if (!m?.audioDataUrl) {
                    W("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  it(m.audioDataUrl, `${c.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                Ct ? /* @__PURE__ */ n(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${Se ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                        Se ? /* @__PURE__ */ t(V, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(St, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: Ct }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: pn,
                            disabled: q || Se,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t($t, { size: 14 })
                          }
                        )
                      ] }),
                      (Se || Et) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: Se ? "🔍  Listening for the best part…" : `✨  ${Et}` })
                    ]
                  }
                ) : /* @__PURE__ */ n("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1", children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: () => ya(!0),
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
                        /* @__PURE__ */ t(Be, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: rn,
                      disabled: q,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t(St, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: dn,
                      disabled: q || gt.filter((i) => i.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(kt, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: gt.filter((i) => i.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      onClick: cn,
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
                        /* @__PURE__ */ t(Be, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: z.length }) })
                      ]
                    }
                  )
                ] }),
                !Ct && /* @__PURE__ */ n("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ n("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => $r("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Pe === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Pe === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Pe === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(We, { size: 13, style: { color: Pe === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
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
                          background: Pe === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Pe === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Pe === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(Cr, { size: 13, style: { color: Pe === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ n("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 best parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                Mi && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !De && ya(!1),
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
                                  onClick: () => !De && Fr("mic"),
                                  disabled: De,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: Ye === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${Ye === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Be, { size: 14 }),
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
                                  onClick: () => !De && Fr("tab"),
                                  disabled: De,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: Ye === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${Ye === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Er, { size: 14 }),
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
                            De ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: nn,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(Js, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: on,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: Ye === "tab" ? /* @__PURE__ */ t(Er, { size: 28 }) : /* @__PURE__ */ t(Be, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: De ? Ye === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
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
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: De ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !De && ya(!1),
                                    disabled: De,
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
                    ref: se,
                    type: "file",
                    accept: "audio/*",
                    onChange: sn,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ n("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick the best 30 s" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed to the most musical chunk."
                ] }),
                Gt && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => Ve(!1),
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
                                  /* @__PURE__ */ t(Be, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ n(
                                  "button",
                                  {
                                    onClick: () => Ve(!1),
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
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: z.length === 0 ? /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(Be, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : z.map((i) => {
                            const c = i.durationMs / 1e3, m = c < 6;
                            return /* @__PURE__ */ n(
                              "button",
                              {
                                onClick: () => !m && ln(i),
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
                                      children: /* @__PURE__ */ t(Be, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: i.name }),
                                    /* @__PURE__ */ n("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(c / 60),
                                      ":",
                                      Math.floor(c % 60).toString().padStart(2, "0"),
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
                                i.preventDefault(), Ve(!1);
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
                Ka && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => g(!1),
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
                                  /* @__PURE__ */ t(kt, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => g(!1),
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
                            const i = gt.filter((c) => c.audioDataUrl);
                            return i.length === 0 ? /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(kt, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : i.map((c) => {
                              const m = c.durationMs / 1e3, k = m > 0 && m < 6, T = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ n(
                                "button",
                                {
                                  onClick: () => !k && un(c),
                                  disabled: k,
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
                                        children: !c.coverDataUrl && /* @__PURE__ */ t(kt, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: T }),
                                      /* @__PURE__ */ n("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        m > 0 ? `${Math.floor(m / 60)}:${Math.floor(m % 60).toString().padStart(2, "0")}` : "—",
                                        c.styleTags && c.styleTags !== "—" && ` · ${c.styleTags}`,
                                        k && " · too short for cover (need ≥6 s)"
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
                      Tr,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: gn,
                        busy: Le === "theme",
                        disabled: q || Le !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: x,
                        onChange: (i) => A(i.target.value),
                        onDragOver: Ca,
                        onDrop: Cn,
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
                    counter: `${An} / ${Uc}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      Tr,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: yn,
                        busy: Le === "style",
                        disabled: q || Le !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: R,
                        onChange: (i) => M(i.target.value),
                        onDragOver: Ca,
                        onDrop: Nn,
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
            /* @__PURE__ */ t(Zc, { onPick: fn, disabled: q }),
            /* @__PURE__ */ t(
              ed,
              {
                specs: X,
                onChange: Ie,
                disabled: q,
                onOptimize: hn,
                optimizing: Jt
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
                  Xo,
                  {
                    checked: Ne,
                    onChange: Ya,
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
                      onClick: () => No(!0),
                      disabled: q,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: fe ? `url(${fe}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: q ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !fe && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(ha, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        Je && /* @__PURE__ */ t(
                          "div",
                          {
                            className: "absolute inset-0 flex items-center justify-center",
                            style: { background: "rgba(0,0,0,0.5)" },
                            children: /* @__PURE__ */ t(V, { size: 20, className: "animate-spin", style: { color: "white" } })
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
                          onClick: bo,
                          disabled: q || Je || !B?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: q || Je || !B?.models.image ? "not-allowed" : "pointer"
                          },
                          title: B?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            Je ? /* @__PURE__ */ t(V, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(We, { size: 11 }),
                            fe ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => ot.current?.click(),
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
                            /* @__PURE__ */ t(Pr, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      fe && /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            j(""), K && ra.current?.(K, "");
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
                          onClick: () => Hr((i) => !i),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            Vt ? /* @__PURE__ */ t(ss, { size: 11 }) : /* @__PURE__ */ t(si, { size: 11 }),
                            Vt ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    Vt && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: ne,
                        onChange: (i) => qe(i.target.value),
                        placeholder: Oa(H, x, R),
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
                    ref: ot,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (i) => {
                      const c = i.target.files?.[0];
                      c && fo(c), i.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          p !== "restyle" && !he && /* @__PURE__ */ t(
            ca,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (X.intent ?? "").length > 0 ? `${(X.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: X.intent ?? "",
                  onChange: (i) => Ie((c) => ({ ...c, intent: i.target.value })),
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
              counter: he ? "instrumental — no vocals" : `${Eo} / ${Pt}`,
              counterDanger: !he && Eo > Pt,
              className: "mb-5",
              headerExtra: he ? void 0 : /* @__PURE__ */ t(
                Tr,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: bn,
                  busy: Le === "lyrics",
                  disabled: q || Le !== null || !_.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: _,
                    onChange: (i) => N(i.target.value),
                    onDragOver: Ca,
                    onDrop: _n,
                    placeholder: he ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: q || he,
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
                  Dc.map((i) => {
                    const c = E?.id === i.id;
                    return /* @__PURE__ */ n(
                      "button",
                      {
                        onClick: () => {
                          c ? F(null) : (F(i), _.trim() || N(i.skeleton));
                        },
                        disabled: q,
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
                  E && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(Xc, { player: ze, allTracks: La }),
      /* @__PURE__ */ t("audio", { ref: Ao, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      il,
      {
        open: w,
        onClose: () => u(!1),
        onUseRecipe: (i, c) => {
          h("compose"), A(i), M(c);
        }
      }
    ),
    Yi && /* @__PURE__ */ t(
      kd,
      {
        settings: sr,
        endpoints: Sa,
        onChange: Ki,
        onClose: () => lr(!1)
      }
    ),
    To && /* @__PURE__ */ t(
      dd,
      {
        track: To,
        endpoint: B,
        onSave: pr,
        onClose: () => _o(null)
      }
    ),
    wn && /* @__PURE__ */ t(
      ud,
      {
        songName: H,
        mode: p,
        theme: x,
        style: R,
        intent: X.intent ?? "",
        lyrics: _,
        specs: X,
        coverDataUrl: fe,
        endpoint: B,
        busy: Je,
        onRegenerate: bo,
        onUpload: fo,
        onClear: () => {
          j(""), K && ra.current?.(K, "");
        },
        onClose: () => No(!1)
      }
    )
  ] }) : /* @__PURE__ */ t(Qc, { retrying: en, onRetry: dr });
}
function kd({ settings: e, endpoints: a, onChange: r, onClose: o }) {
  const s = (l, d, b) => {
    const p = b.trim(), w = { ...e.overridesByEndpoint[l] ?? {} };
    p ? w[d] = p : delete w[d];
    const u = {
      ...e,
      overridesByEndpoint: {
        ...e.overridesByEndpoint,
        [l]: w
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
                  /* @__PURE__ */ t(li, { size: 14, style: { color: "var(--accent-primary)" } }),
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
              ) : /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", children: a.map((l) => {
                const d = e.overridesByEndpoint[l.url] ?? {}, b = [
                  { key: "music", label: "Music", discovered: l.models.music, kind: "music" },
                  { key: "cover", label: "Restyle", discovered: l.models.cover, kind: "cover" },
                  { key: "lyrics", label: "Lyrics", discovered: l.models.lyrics, kind: "lyrics" },
                  { key: "lyricsBackup", label: "Lyrics fallback", discovered: l.models.lyricsBackup, kind: "chat" },
                  { key: "image", label: "Cover art", discovered: l.models.image, kind: "image" }
                ], p = (u) => /music|cover/i.test(u), h = (u) => /image|diffusion|dall-?e|flux|sdxl/i.test(u), w = (u) => u === "chat" ? l.models.allIds.filter((y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(y)) : u === "image" ? l.models.allIds.filter(h) : l.models.allIds.filter(p);
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
                              background: Wa(l),
                              boxShadow: `0 0 6px ${Wa(l)}`
                            }
                          }
                        ),
                        /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: l.label }),
                        /* @__PURE__ */ n("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                          l.url,
                          " · ",
                          l.models.allIds.length,
                          " models"
                        ] })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: b.map((u) => {
                        const y = w(u.kind), v = d[u.key] ?? "";
                        return /* @__PURE__ */ n(Jn, { children: [
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
                              onChange: (C) => s(l.url, u.key, C.target.value),
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
                                y.length > 0 && /* @__PURE__ */ t("optgroup", { label: "Available models", children: y.map((C) => /* @__PURE__ */ t("option", { value: C, children: C }, C)) })
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
function Cd(e) {
  const a = e.host.storage.current();
  return xl(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(Gn, { value: e, children: /* @__PURE__ */ t(wd, {}) });
  };
}
export {
  Cd as default
};
//# sourceMappingURL=index.js.map
