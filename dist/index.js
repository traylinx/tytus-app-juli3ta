import { jsx as t, jsxs as s, Fragment as me } from "react/jsx-runtime";
import { createContext as $o, useContext as Fo, forwardRef as Bo, createElement as br, useState as T, useEffect as te, useMemo as ce, useRef as ee, useCallback as L, Fragment as Rn } from "react";
import { createPortal as _r } from "react-dom";
const Wo = $o(null), jn = Wo.Provider;
function jt() {
  const e = Fo(Wo);
  if (!e) throw new Error("JULI3TA HostEnvProvider missing");
  return e;
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Dn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), wo = (e) => {
  const a = Dn(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, qo = (...e) => e.filter((a, r, o) => !!a && a.trim() !== "" && o.indexOf(a) === r).join(" ").trim(), Un = (e) => {
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
var On = {
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
const Hn = Bo(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: n = "",
    children: l,
    iconNode: d,
    ...b
  }, p) => br(
    "svg",
    {
      ref: p,
      ...On,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(a) : r,
      className: qo("lucide", n),
      ...!l && !Un(b) && { "aria-hidden": "true" },
      ...b
    },
    [
      ...d.map(([m, w]) => br(m, w)),
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
const D = (e, a) => {
  const r = Bo(
    ({ className: o, ...n }, l) => br(Hn, {
      ref: l,
      iconNode: a,
      className: qo(
        `lucide-${Pn(wo(e))}`,
        `lucide-${e}`,
        o
      ),
      ...n
    })
  );
  return r.displayName = wo(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], Fn = D("album", $n);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], aa = D("check", Bn);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Jo = D("chevron-down", Wn);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Jn = D("chevron-right", qn);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Vn = D("chevron-up", Gn);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ra = D("circle-alert", Yn);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Xn = D("circle-question-mark", Kn);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Zn = D("copy", Qn);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], ut = D("disc-3", es);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], as = D("download", ts);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], Go = D("ellipsis-vertical", rs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], is = D("external-link", os);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
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
], pt = D("file-music", ns);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], ls = D("folder-open", ss);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], ds = D("heart", cs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], oa = D("image", us);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
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
], fr = D("layers", ps);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], hs = D("list-music", ms);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Z = D("loader-circle", gs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Ue = D("mic", ys);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], vr = D("monitor-speaker", bs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], ko = D("monitor", fs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], ja = D("music-2", vs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], La = D("notebook-text", xs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], zt = D("pause", ws);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], Vo = D("pencil", ks);
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
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], ve = D("play", Ss);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], xr = D("plus", Ts);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Ns = D("radio", _s);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Es = D("refresh-cw", Cs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Lt = D("search", As);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], Yo = D("settings-2", Ls);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], zs = D("shuffle", Is);
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
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], Oe = D("sparkles", Ms);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], js = D("square", Rs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ia = D("trash-2", Ps);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Nr = D("upload", Ds);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], Os = D("user-round", Us);
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
], Mt = D("wand-sparkles", Hs);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], de = D("x", $s), Fs = {
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
}, Bs = {
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
}, So = { en: Fs, es: Bs }, xa = (e) => (e || "en").trim().toLowerCase().replace("_", "-").split("-")[0] || "en", Ws = (e, a) => a ? e.replace(/\{(\w+)\}/g, (r, o) => String(a[o] ?? `{${o}}`)) : e;
function ht() {
  const { host: e } = jt(), [a, r] = T(() => xa(e.i18n?.locale));
  te(() => e.i18n?.onLocaleChange?.((n) => r(xa(n))), [e]);
  const o = ce(() => (n, l) => {
    const d = e.i18n?.t?.(n, l);
    if (d && d !== n) return d;
    const b = xa(a), p = So[b]?.[n] ?? So.en[n] ?? n;
    return Ws(p, l);
  }, [e, a]);
  return {
    language: a,
    availableLanguages: [
      { locale: "en", name: "English", nativeName: "English", bundled: !0 },
      { locale: "es", name: "Spanish", nativeName: "Español", bundled: !0 }
    ],
    t: o,
    setLanguage: (n) => r(xa(n)),
    installLanguagePack: (n) => {
      throw new Error("Language packs are managed by Tytus OS host.");
    },
    removeLanguagePack: (n) => {
    }
  };
}
const qs = [
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
], Js = [
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
function Gs({ recipe: e, onUse: a }) {
  const { t: r } = ht(), [o, n] = T(!1), l = async () => {
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
              onClick: l,
              className: "flex items-center justify-center gap-1 px-2 py-1.5 rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: {
                fontSize: 11,
                color: "var(--text-secondary)",
                border: "1px solid var(--border-subtle)"
              },
              title: r("julietaHelp.recipe.copy"),
              children: o ? /* @__PURE__ */ t(aa, { size: 12, style: { color: "#4ade80" } }) : /* @__PURE__ */ t(Zn, { size: 12 })
            }
          )
        ] })
      ]
    }
  );
}
function Vs({ open: e, onClose: a, onUseRecipe: r }) {
  const { t: o, language: n } = ht(), [l, d] = T("start");
  if (!e) return null;
  const b = n === "es" ? Js : qs;
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
                        children: /* @__PURE__ */ t(ut, { size: 18, style: { color: "white" } })
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
                      children: /* @__PURE__ */ t(de, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1 px-5 pt-3 flex-shrink-0", children: ["start", "recipes", "help"].map((p) => {
              const m = l === p;
              return /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => d(p),
                  className: "px-3 py-1.5 rounded-lg transition-all",
                  style: {
                    fontSize: 11,
                    fontWeight: m ? 600 : 500,
                    color: m ? "var(--text-primary)" : "var(--text-secondary)",
                    background: m ? "var(--bg-titlebar)" : "transparent",
                    border: m ? "1px solid var(--border-subtle)" : "1px solid transparent"
                  },
                  children: o(`julietaHelp.tab.${p}`)
                },
                p
              );
            }) }),
            /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-5 py-4", style: { paddingBottom: 96 }, children: [
              l === "start" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(Tt, { icon: /* @__PURE__ */ t(Oe, { size: 14 }), text: o("julietaHelp.start.workflow.title") }),
                /* @__PURE__ */ t(wa, { n: 1, title: o("julietaHelp.start.s1.title"), body: o("julietaHelp.start.s1.body") }),
                /* @__PURE__ */ t(wa, { n: 2, title: o("julietaHelp.start.s2.title"), body: o("julietaHelp.start.s2.body") }),
                /* @__PURE__ */ t(wa, { n: 3, title: o("julietaHelp.start.s3.title"), body: o("julietaHelp.start.s3.body") }),
                /* @__PURE__ */ t(wa, { n: 4, title: o("julietaHelp.start.s4.title"), body: o("julietaHelp.start.s4.body") }),
                /* @__PURE__ */ t(Tt, { icon: /* @__PURE__ */ t(Mt, { size: 14 }), text: o("julietaHelp.start.modes.title") }),
                /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ t(nr, { emoji: "🎵", name: o("julietaHelp.start.mode.song.name"), body: o("julietaHelp.start.mode.song.body") }),
                  /* @__PURE__ */ t(nr, { emoji: "🎨", name: o("julietaHelp.start.mode.cover.name"), body: o("julietaHelp.start.mode.cover.body") }),
                  /* @__PURE__ */ t(nr, { emoji: "✍️", name: o("julietaHelp.start.mode.lyrics.name"), body: o("julietaHelp.start.mode.lyrics.body") })
                ] }),
                /* @__PURE__ */ t(Tt, { icon: /* @__PURE__ */ t(Ue, { size: 14 }), text: o("julietaHelp.start.recorder.title") }),
                /* @__PURE__ */ t(Ys, { body: o("julietaHelp.start.recorder.body") }),
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
                b.map((p) => /* @__PURE__ */ t(
                  Gs,
                  {
                    recipe: p,
                    onUse: (m) => {
                      r(m.theme, m.style), a();
                    }
                  },
                  p.id
                ))
              ] }),
              l === "help" && /* @__PURE__ */ s("div", { className: "space-y-4", children: [
                /* @__PURE__ */ t(Tt, { icon: /* @__PURE__ */ t(ra, { size: 14 }), text: o("julietaHelp.help.connection.title") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.failed.title"), a: o("julietaHelp.help.q.failed.body") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.nopod.title"), a: o("julietaHelp.help.q.nopod.body") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.local.title"), a: o("julietaHelp.help.q.local.body") }),
                /* @__PURE__ */ t(Tt, { icon: /* @__PURE__ */ t(Mt, { size: 14 }), text: o("julietaHelp.help.usage.title") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.howlong.title"), a: o("julietaHelp.help.q.howlong.body") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.quota.title"), a: o("julietaHelp.help.q.quota.body") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.length.title"), a: o("julietaHelp.help.q.length.body") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.coverlen.title"), a: o("julietaHelp.help.q.coverlen.body") }),
                /* @__PURE__ */ t(Tt, { icon: /* @__PURE__ */ t(Ue, { size: 14 }), text: o("julietaHelp.help.troubleshoot.title") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.silentmic.title"), a: o("julietaHelp.help.q.silentmic.body") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.shortrec.title"), a: o("julietaHelp.help.q.shortrec.body") }),
                /* @__PURE__ */ t(De, { q: o("julietaHelp.help.q.privacy.title"), a: o("julietaHelp.help.q.privacy.body") })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function Tt({ icon: e, text: a }) {
  return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ t("span", { style: { color: "var(--accent-primary)" }, children: e }),
    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: 0.6 }, children: a })
  ] });
}
function wa({ n: e, title: a, body: r }) {
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
function nr({ emoji: e, name: a, body: r }) {
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
function Ys({ body: e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "px-3 py-2 rounded-lg",
      style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
      children: /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }, children: e })
    }
  );
}
function De({ q: e, a }) {
  const [r, o] = T(!1);
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
                Jn,
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
const sr = (e) => {
  const a = e ?? {};
  return {
    logged_in: !0,
    email: null,
    agents: Array.isArray(a.agents) ? a.agents : [],
    included: Array.isArray(a.included) ? a.included : [],
    tiers: [],
    ...a
  };
}, Ks = () => {
  const { host: e } = jt(), [a, r] = T(0), [o, n] = T(() => sr(e.daemon?.state));
  return te(() => (n(sr(e.daemon?.state)), e.daemon?.onStateChange?.((l) => n(sr(l)))), [e, a]), ce(() => ({
    state: o,
    error: null,
    status: o ? "online" : "loading",
    failureCount: 0,
    bannerVisible: !1,
    version: null,
    daemonVersionStatus: "supported",
    refresh: () => r((l) => l + 1)
  }), [o]);
}, Xs = (e, a) => {
  const { host: r } = jt();
  te(() => {
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
function Qs() {
  return jt().host.windows.current;
}
const Ko = "juli3ta_standalone_vfs_v1", Xo = () => Math.random().toString(36).slice(2) + Date.now().toString(36), ct = (e, a) => ({
  id: Xo(),
  name: e,
  type: "folder",
  parentId: a,
  createdAt: Date.now(),
  modifiedAt: Date.now()
}), Zs = () => {
  const e = ct("/", null), a = ct("home", e.id), r = ct("user", a.id), o = ct("Desktop", r.id), n = ct("Music", r.id), l = ct("Documents", r.id);
  return { nodes: Object.fromEntries([e, a, r, o, n, l].map((d) => [d.id, d])) };
}, ka = () => {
  try {
    const a = localStorage.getItem(Ko);
    if (a) return JSON.parse(a);
  } catch {
  }
  const e = Zs();
  return Ca(e), e;
}, Ca = (e) => {
  try {
    localStorage.setItem(Ko, JSON.stringify(e));
  } catch {
  }
}, el = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), tl = (e) => {
  const a = e.toLowerCase();
  return a.endsWith(".lyrics.txt") ? "NotebookText" : a.endsWith(".mp3") || a.endsWith(".wav") || a.endsWith(".m4a") ? "FileAudio" : a.endsWith(".json") ? "FileJson" : a.endsWith(".txt") || a.endsWith(".md") ? "FileText" : "File";
};
function al() {
  return {
    ensureUserFolder(a) {
      const r = ka(), o = el(a);
      let n = Object.values(r.nodes).find((l) => l.type === "folder" && l.name === o);
      if (!n) {
        const l = Object.values(r.nodes).find((d) => d.type === "folder" && d.name === "user");
        n = ct(o, l?.id ?? null), r.nodes[n.id] = n, Ca(r);
      }
      return n.id;
    },
    findChildByName(a, r) {
      const o = ka();
      return Object.values(o.nodes).find((n) => n.parentId === a && n.name === r);
    },
    createFile(a, r, o = "", n = {}) {
      const l = ka(), d = { id: Xo(), name: r, type: "file", parentId: a, content: o, mimeType: n.mimeType, refTrackId: n.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      return l.nodes[d.id] = d, Ca(l), d.id;
    },
    writeFile(a, r) {
      const o = ka();
      o.nodes[a] && (o.nodes[a].content = r, o.nodes[a].modifiedAt = Date.now(), Ca(o));
    }
  };
}
const rl = { theme: { mode: "dark" } }, ol = $o(null);
function Qo() {
  const e = Fo(ol), { host: a } = jt();
  return ce(() => e || {
    state: rl,
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
function il() {
  const { host: e } = jt();
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
const nl = {
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
}, sl = {
  juli3ta: nl
};
function Zo({ name: e, size: a = 24, className: r, style: o, alt: n, scale: l }) {
  const [d, b = "mark"] = e.split(":"), p = sl[d], { state: m } = Qo();
  let w;
  if (b === "mark" ? w = m.theme.mode === "light" ? p?.["mark-ink"] : p?.["mark-white"] : w = p?.[b], !w) return null;
  const u = n ?? d.charAt(0).toUpperCase() + d.slice(1), y = l ?? w.scale ?? 1;
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
let ei = null, To = null;
const lr = (e) => e.replace(/\bmusic_creator_tracks\b/g, "app_juli3ta_music_creator_tracks").replace(/\bmusic_creator_settings\b/g, "app_juli3ta_music_creator_settings").replace(/\bmusic_library_tracks\b/g, "app_juli3ta_music_library_tracks").replace(/\bmusic_library_artists\b/g, "app_juli3ta_music_library_artists").replace(/\bmusic_library_albums\b/g, "app_juli3ta_music_library_albums").replace(/\bmusic_playlists\b/g, "app_juli3ta_music_playlists").replace(/\bmusic_playlist_items\b/g, "app_juli3ta_music_playlist_items").replace(/\bmusic_favorites\b/g, "app_juli3ta_music_favorites").replace(/\bvoice_recordings\b/g, "app_juli3ta_voice_recordings"), ll = [
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
function cl(e) {
  To = (async () => {
    for (const r of ll) await e.run(r);
  })();
  const a = async () => To;
  ei = {
    exec: async (r) => {
      await a();
      for (const o of lr(r).split(";").map((n) => n.trim()).filter(Boolean))
        await e.run(o);
    },
    query: async (r, o = []) => (await a(), e.query(lr(r), o)),
    run: async (r, o = []) => {
      await a(), await e.run(lr(r), o);
    },
    tx: async (r) => (await a(), r())
  };
}
const V = () => ei, Ia = (e) => ({
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
}), F = (e, a) => new RegExp(`no such column:\\s*${a}`, "i").test(String(e)), Cr = (e) => F(e, "specs_json") || F(e, "cover_data_url") || F(e, "theme") || F(e, "source") || F(e, "audio_kind") || F(e, "external_id") || F(e, "external_url") || F(e, "thumbnail_url") || F(e, "artist") || F(e, "album"), _o = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url`, No = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json`, cr = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url`, lt = (e) => ({
  ...e,
  source: "juli3ta",
  audio_kind: e.audio_data_url ? "data_url" : "lyrics_only",
  external_id: "",
  external_url: "",
  thumbnail_url: "",
  artist: "",
  album: ""
}), ti = async (e, a, r, o) => {
  if (F(o, "source") || F(o, "audio_kind") || F(o, "external_id") || F(o, "external_url") || F(o, "thumbnail_url") || F(o, "artist") || F(o, "album"))
    try {
      return (await e.query(
        `SELECT ${_o}, theme FROM music_creator_tracks ${a}`,
        r
      )).map(lt);
    } catch (n) {
      o = n;
    }
  if (F(o, "theme"))
    try {
      return (await e.query(
        `SELECT ${_o} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => lt({ ...l, theme: "" }));
    } catch (n) {
      if (!F(n, "cover_data_url")) throw n;
      try {
        return (await e.query(
          `SELECT ${No} FROM music_creator_tracks ${a}`,
          r
        )).map((d) => lt({ ...d, cover_data_url: "", theme: "" }));
      } catch (l) {
        if (!F(l, "specs_json")) throw l;
        return (await e.query(
          `SELECT ${cr} FROM music_creator_tracks ${a}`,
          r
        )).map((b) => lt({ ...b, specs_json: "", cover_data_url: "", theme: "" }));
      }
    }
  if (F(o, "cover_data_url"))
    try {
      return (await e.query(
        `SELECT ${No} FROM music_creator_tracks ${a}`,
        r
      )).map((l) => lt({ ...l, cover_data_url: "", theme: "" }));
    } catch (n) {
      if (!F(n, "specs_json")) throw n;
      return (await e.query(
        `SELECT ${cr} FROM music_creator_tracks ${a}`,
        r
      )).map((d) => lt({ ...d, specs_json: "", cover_data_url: "", theme: "" }));
    }
  if (F(o, "specs_json"))
    return (await e.query(
      `SELECT ${cr} FROM music_creator_tracks ${a}`,
      r
    )).map((l) => lt({ ...l, specs_json: "", cover_data_url: "", theme: "" }));
  throw o;
}, ai = `id, title, style_tags, lyrics_preview, duration_ms, bitrate,
              sample_rate, size_bytes, created_at, audio_data_url, specs_json, cover_data_url, theme,
              source, audio_kind, external_id, external_url, thumbnail_url, artist, album`, dl = async () => {
  const e = V();
  if (!e) return [];
  try {
    return (await e.query(
      `SELECT ${ai} FROM music_creator_tracks ORDER BY created_at DESC`
    )).map(Ia);
  } catch (a) {
    if (!Cr(a)) throw a;
    return (await ti(e, "ORDER BY created_at DESC", [], a)).map(Ia);
  }
}, ul = async (e) => {
  const a = V();
  if (!a) return null;
  try {
    const r = await a.query(
      `SELECT ${ai} FROM music_creator_tracks WHERE id = ? LIMIT 1`,
      [e]
    );
    return r.length === 0 ? null : Ia(r[0]);
  } catch (r) {
    if (!Cr(r)) throw r;
    const o = await ti(a, "WHERE id = ? LIMIT 1", [e], r);
    return o.length === 0 ? null : Ia(o[0]);
  }
}, za = async (e) => {
  const a = V();
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
    if (!Cr(o)) throw o;
    if (F(o, "source") || F(o, "audio_kind") || F(o, "external_id") || F(o, "external_url") || F(o, "thumbnail_url") || F(o, "artist") || F(o, "album"))
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
    if (F(o, "theme"))
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
        if (!F(n, "cover_data_url")) throw n;
      }
    if (F(o, "cover_data_url"))
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
        if (!F(n, "specs_json")) throw n;
      }
    await a.run(
      `INSERT OR REPLACE INTO music_creator_tracks
         (id, title, style_tags, lyrics_preview, duration_ms, bitrate,
          sample_rate, size_bytes, created_at, audio_data_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      r
    );
  }
}, pl = async (e) => {
  const a = V();
  a && await a.run("DELETE FROM music_creator_tracks WHERE id = ?", [e]);
}, ml = async (e, a) => {
  const r = V();
  if (!r) throw new Error("Database not ready");
  const o = a.trim().slice(0, 200) || "Untitled";
  return await r.run("UPDATE music_creator_tracks SET title = ? WHERE id = ?", [o, e]), o;
}, hl = async (e, a) => {
  const r = V();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET cover_data_url = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*cover_data_url", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackCover skipped — pre-V6 schema");
  }
}, gl = async (e, a) => {
  const r = V();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET style_tags = ? WHERE id = ?", [a, e]);
}, yl = async (e, a) => {
  const r = V();
  if (!r) throw new Error("Database not ready");
  await r.run("UPDATE music_creator_tracks SET lyrics_preview = ? WHERE id = ?", [a, e]);
}, bl = async (e, a) => {
  const r = V();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET specs_json = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*specs_json", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackSpecs skipped — pre-V5 schema");
  }
}, fl = async (e, a) => {
  const r = V();
  if (!r) throw new Error("Database not ready");
  try {
    await r.run("UPDATE music_creator_tracks SET theme = ? WHERE id = ?", [a, e]);
  } catch (o) {
    if (!new RegExp("no such column:\\s*theme", "i").test(String(o))) throw o;
    console.warn("[musicCreator] updateTrackTheme skipped — pre-V7 schema");
  }
}, vl = async (e, a) => {
  const r = V();
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
}, xl = async (e, a) => {
  const r = V();
  r && await r.run(
    `INSERT INTO music_creator_settings (key, value) VALUES (?, ?)
     ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
    [e, JSON.stringify(a)]
  );
}, ri = {
  preferredPodId: null,
  overridesByEndpoint: {}
}, oi = "music_creator_settings", wl = () => vl(oi, ri), kl = (e) => xl(oi, e), mt = () => Date.now(), ii = (e) => ({
  id: e.id,
  title: e.title,
  styleTags: e.provider === "youtube" ? "YouTube" : e.provider,
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
}), Sl = (e) => ({
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
}), ni = [
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
], Tl = ni.join(", "), _l = ni.map((e) => `t.${e}`).join(", "), Nl = async () => {
  const e = V();
  return e ? (await e.query(
    `SELECT ${Tl} FROM music_library_tracks ORDER BY added_at DESC`
  )).map(ii) : [];
}, si = async (e) => {
  const a = V();
  if (!a) throw new Error("Database not ready");
  const r = Sl(e);
  await a.run(
    `INSERT INTO music_library_tracks
       (id, provider, external_id, title, artist, album, duration_ms, thumbnail_url, external_url, added_at, last_played_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET
       title = excluded.title,
       artist = excluded.artist,
       album = excluded.album,
       duration_ms = excluded.duration_ms,
       thumbnail_url = excluded.thumbnail_url,
       external_url = excluded.external_url`,
    [r.id, r.provider, r.external_id, r.title, r.artist, r.album, r.duration_ms, r.thumbnail_url, r.external_url, r.added_at, r.last_played_at]
  );
}, Cl = async (e) => {
  const a = V();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE track_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["track", e]), await a.run("DELETE FROM music_library_tracks WHERE id = ?", [e]);
  });
}, El = async () => {
  const e = V();
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
}, Al = async (e) => {
  const a = V();
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
}, Ll = async (e) => {
  const a = V();
  if (!a) throw new Error("Database not ready");
  const r = await a.query(
    "SELECT COUNT(*) as n FROM music_favorites WHERE kind = ? AND entity_id = ?",
    [e.kind, e.entityId]
  );
  return Number(r[0]?.n ?? 0) > 0 ? (await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", [e.kind, e.entityId]), !1) : (await a.run(
    `INSERT INTO music_favorites (kind, entity_id, provider, title, created_at)
     VALUES (?, ?, ?, ?, ?)`,
    [e.kind, e.entityId, e.provider, e.title ?? "", mt()]
  ), !0);
}, Xt = async () => {
  const e = V();
  if (!e) return [];
  const a = await e.query(
    "SELECT id, name, created_at, updated_at FROM music_playlists ORDER BY updated_at DESC"
  ), r = await e.query(
    `SELECT pi.playlist_id, pi.pos, ${_l}
       FROM music_playlist_items pi
       JOIN music_library_tracks t ON t.id = pi.track_id
      ORDER BY pi.playlist_id, pi.pos ASC`
  ), o = /* @__PURE__ */ new Map();
  return r.forEach((n) => {
    o.set(n.playlist_id, [...o.get(n.playlist_id) ?? [], ii(n)]);
  }), a.map((n) => ({
    id: n.id,
    name: n.name,
    createdAt: n.created_at,
    updatedAt: n.updated_at,
    items: o.get(n.id) ?? []
  }));
}, Il = async (e) => {
  const a = V();
  if (!a) throw new Error("Database not ready");
  const r = e.trim().slice(0, 80) || "New Playlist", o = mt(), n = { id: `playlist:${o}:${Math.random().toString(36).slice(2, 8)}`, name: r, createdAt: o, updatedAt: o, items: [] };
  return await a.run(
    "INSERT INTO music_playlists (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [n.id, n.name, n.createdAt, n.updatedAt]
  ), n;
}, zl = async (e) => {
  const a = V();
  a && await a.tx(async () => {
    await a.run("DELETE FROM music_playlist_items WHERE playlist_id = ?", [e]), await a.run("DELETE FROM music_favorites WHERE kind = ? AND entity_id = ?", ["playlist", e]), await a.run("DELETE FROM music_playlists WHERE id = ?", [e]);
  });
}, Ml = async (e, a) => {
  const r = V();
  if (!r) throw new Error("Database not ready");
  await r.tx(async () => {
    await si(a);
    const o = await r.query(
      "SELECT COALESCE(MAX(pos), -1) + 1 as n FROM music_playlist_items WHERE playlist_id = ?",
      [e]
    ), n = Number(o[0]?.n ?? 0);
    await r.run(
      `INSERT OR IGNORE INTO music_playlist_items (playlist_id, track_id, pos, added_at)
       VALUES (?, ?, ?, ?)`,
      [e, a.id, n, mt()]
    ), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [mt(), e]);
  });
}, Rl = async (e, a) => {
  const r = V();
  r && (await r.run("DELETE FROM music_playlist_items WHERE playlist_id = ? AND track_id = ?", [e, a]), await r.run("UPDATE music_playlists SET updated_at = ? WHERE id = ?", [mt(), e]));
}, jl = (e) => ({
  id: e.id,
  name: e.name,
  durationMs: e.duration_ms,
  createdAt: e.created_at,
  mimeType: e.mime_type,
  audioDataUrl: e.audio_data_url
}), Co = async () => {
  const e = V();
  return e ? (await e.query(
    `SELECT id, name, duration_ms, created_at, mime_type, audio_data_url
       FROM voice_recordings
      ORDER BY created_at DESC`
  )).map(jl) : [];
}, li = async (e) => {
  const a = V();
  if (!a) throw new Error("Database not ready");
  await a.run(
    `INSERT OR REPLACE INTO voice_recordings
       (id, name, duration_ms, created_at, mime_type, audio_data_url)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [e.id, e.name, e.durationMs, e.createdAt, e.mimeType, e.audioDataUrl]
  );
}, dr = "tytus.voice-recorder.recordings", Pl = async () => {
  try {
    const e = localStorage.getItem(dr);
    if (!e) return;
    const a = JSON.parse(e);
    if (!Array.isArray(a)) {
      localStorage.removeItem(dr);
      return;
    }
    for (const r of a)
      if (!(!r?.id || typeof r.audioDataUrl != "string"))
        try {
          await li({
            id: r.id,
            name: r.name ?? "Untitled recording",
            durationMs: r.durationMs ?? 0,
            createdAt: r.createdAt ?? Date.now(),
            mimeType: r.mimeType ?? "audio/webm",
            audioDataUrl: r.audioDataUrl
          });
        } catch {
        }
    localStorage.removeItem(dr);
  } catch (e) {
    console.warn("Voice recordings legacy migration failed:", e);
  }
}, Dl = (e, a) => e._value, Er = 100, Ul = 30, Ea = 6, Ol = 360, Eo = 12, Hl = 3, $l = 0.4, ci = async (e) => {
  const a = window.AudioContext || window.webkitAudioContext, r = new a();
  try {
    const o = await e.arrayBuffer();
    return await r.decodeAudioData(o.slice(0));
  } finally {
    r.close().catch(() => {
    });
  }
}, di = async (e) => (await fetch(e)).blob(), wr = (e) => new Promise((a, r) => {
  const o = new FileReader();
  o.onload = () => {
    const n = typeof o.result == "string" ? o.result : "", l = n.indexOf("base64,");
    a(l >= 0 ? n.slice(l + 7) : "");
  }, o.onerror = () => r(o.error), o.readAsDataURL(e);
}), Fl = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Er / 1e3)), o = Math.floor(e.length / r), n = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const b = d * r;
    let p = 0;
    for (let m = 0; m < r; m++) {
      let w = 0;
      for (let u = 0; u < l.length; u++) w += l[u][b + m];
      w /= l.length, p += w * w;
    }
    n[d] = Math.sqrt(p / r);
  }
  return n;
}, Bl = (e) => {
  const a = e.sampleRate, r = Math.max(1, Math.floor(a * Er / 1e3)), o = Math.floor(e.length / r), n = new Float32Array(o), l = [];
  for (let d = 0; d < e.numberOfChannels; d++) l.push(e.getChannelData(d));
  for (let d = 0; d < o; d++) {
    const b = d * r;
    let p = 0, m = 0;
    for (let w = 0; w < l.length; w++) m += l[w][b];
    m /= l.length;
    for (let w = 1; w < r; w++) {
      let u = 0;
      for (let y = 0; y < l.length; y++) u += l[y][b + w];
      u /= l.length, (m > 1e-3 && u < -1e-3 || m < -1e-3 && u > 1e-3) && p++, m = u;
    }
    n[d] = p / (r / 2);
  }
  return n;
}, ui = (e) => {
  const a = Fl(e), r = Bl(e);
  return { rms: a, centroid: r, framesPerSec: 1e3 / Er };
}, Wl = (e, a = 4) => {
  let r = 0;
  for (let p = 0; p < e.length; p++) r += e[p];
  const o = r / e.length;
  let n = 0;
  for (let p = 0; p < e.length; p++) n += (e[p] - o) ** 2;
  const l = Math.sqrt(n / e.length) || 1, d = Math.floor(e.length / a), b = new Float32Array(d);
  for (let p = 0; p < d; p++) {
    let m = 0;
    for (let w = 0; w < a; w++) m += e[p * a + w];
    b[p] = (m / a - o) / l;
  }
  return b;
}, ql = (e, a, r) => {
  if (a + r >= e.length) return 0;
  const o = Math.max(1, Math.floor(r / 4));
  let n = -1 / 0, l = 0;
  for (let p = 0; p + r < e.length; p += o) {
    if (Math.abs(p - a) < r) continue;
    let m = 0;
    for (let w = 0; w < r; w++)
      m += e[a + w] * e[p + w];
    m /= r, m > n && (n = m), m > 0.5 && l++;
  }
  const d = Math.max(0, Math.min(1, (n + 1) / 2)), b = Math.min(1, l / 6);
  return 0.6 * d + 0.4 * b;
}, pi = (e, a) => {
  const r = Math.max(1, Math.floor(a * e.framesPerSec));
  if (e.rms.length <= r) return [];
  const o = Wl(e.rms, 4), n = e.rms.length / o.length, l = Math.max(1, Math.floor(r / n));
  let d = 0, b = 0, p = 0;
  for (let y = 0; y < r; y++)
    d += e.rms[y], b += e.rms[y] * e.rms[y], p += e.centroid[y];
  const m = [], w = Math.max(1, Math.floor(e.framesPerSec)), u = (y) => {
    const x = d / r, C = Math.max(0, b / r - x * x), f = Math.sqrt(C), v = p / r, E = Math.floor(y / n), N = ql(o, E, l), _ = 0.45 * Math.min(1, x * 4) + 0.2 * v + 0.25 * N - 0.1 * Math.min(1, f * 6);
    m.push({
      startFrame: y,
      lenFrames: r,
      score: _,
      meanRms: x,
      stdRms: f,
      meanBright: v,
      selfSim: N
    });
  };
  u(0);
  for (let y = r; y < e.rms.length; y += w) {
    for (let x = 0; x < w && y - w + x < e.rms.length; x++) {
      const C = y - r - w + x + 1, f = y - w + x + 1;
      if (f >= e.rms.length) break;
      C >= 0 && (d -= e.rms[C], b -= e.rms[C] * e.rms[C], p -= e.centroid[C]), d += e.rms[f], b += e.rms[f] * e.rms[f], p += e.centroid[f];
    }
    u(y - r + w);
  }
  return m;
}, kr = (e, a, r) => {
  const o = new Float32Array(r), n = [];
  for (let l = 0; l < e.numberOfChannels; l++) n.push(e.getChannelData(l));
  for (let l = 0; l < r; l++) {
    let d = 0;
    for (let b = 0; b < n.length; b++) d += n[b][a + l] || 0;
    o[l] = d / n.length;
  }
  return o;
}, Sr = (e, a) => {
  const n = a * 1 * 2, l = 1 * (16 / 8), d = e.length * 2, b = new ArrayBuffer(44 + d), p = new DataView(b);
  let m = 0;
  const w = (x) => {
    for (let C = 0; C < x.length; C++) p.setUint8(m++, x.charCodeAt(C));
  }, u = (x) => {
    p.setUint32(m, x, !0), m += 4;
  }, y = (x) => {
    p.setUint16(m, x, !0), m += 2;
  };
  w("RIFF"), u(36 + d), w("WAVE"), w("fmt "), u(16), y(1), y(1), u(a), u(n), y(l), y(16), w("data"), u(d);
  for (let x = 0; x < e.length; x++) {
    const C = Math.max(-1, Math.min(1, e[x]));
    p.setInt16(m, C < 0 ? C * 32768 : C * 32767, !0), m += 2;
  }
  return new Blob([b], { type: "audio/wav" });
}, mi = async (e, a = Ul) => {
  const r = typeof e == "string" ? await di(e) : e, o = await ci(r), n = o.length / o.sampleRate;
  if (n < Ea)
    throw new Error(`Source is too short (${n.toFixed(1)} s). Need at least ${Ea} s.`);
  const l = Math.min(Ol, Math.max(Ea, a));
  if (n <= l) {
    const C = kr(o, 0, o.length), f = Sr(C, o.sampleRate);
    return { base64: await wr(f), durationSec: n, startSec: 0, sourceDurationSec: n, score: 1 };
  }
  const d = ui(o), b = pi(d, l);
  if (b.length === 0)
    throw new Error("Could not analyze the audio (track too short).");
  b.sort((C, f) => f.score - C.score);
  const p = b[0], m = Math.floor(p.startFrame / d.framesPerSec * o.sampleRate), w = Math.floor(p.lenFrames / d.framesPerSec * o.sampleRate), u = kr(o, m, w), y = Sr(u, o.sampleRate);
  return {
    base64: await wr(y),
    durationSec: w / o.sampleRate,
    startSec: m / o.sampleRate,
    sourceDurationSec: n,
    score: Math.max(0, Math.min(1, p.score))
  };
}, Jl = (e, a, r) => {
  if (e.length === 0) return new Float32Array(0);
  if (e.length === 1) return e[0];
  const o = Math.floor(r * a);
  let n = 0;
  for (const b of e) n += b.length;
  n -= o * (e.length - 1);
  const l = new Float32Array(n);
  let d = 0;
  l.set(e[0], 0), d = e[0].length - o;
  for (let b = 1; b < e.length; b++) {
    const p = e[b];
    for (let m = 0; m < o; m++) {
      const w = m / o;
      l[d + m] = l[d + m] * (1 - w) + p[m] * w;
    }
    for (let m = o; m < p.length; m++)
      l[d + m] = p[m];
    d += p.length - o;
  }
  return l;
}, Gl = (e, a, r) => {
  const o = [...e].sort((l, d) => d.score - l.score), n = [];
  for (const l of o)
    if (n.some(
      (b) => Math.abs(b.startFrame - l.startFrame) < Math.max(b.lenFrames, l.lenFrames) + r
    ) || n.push(l), n.length >= a) break;
  return n.sort((l, d) => l.startFrame - d.startFrame), n;
}, Vl = async (e) => {
  const a = typeof e == "string" ? await di(e) : e, r = await ci(a), o = r.length / r.sampleRate;
  if (o < Ea * 2) {
    const x = await mi(a);
    return {
      base64: x.base64,
      durationSec: x.durationSec,
      segments: [{ startSec: x.startSec, endSec: x.startSec + x.durationSec, score: x.score }],
      sourceDurationSec: o
    };
  }
  const n = ui(r), l = pi(n, Eo);
  if (l.length === 0)
    throw new Error("Could not analyze the audio.");
  const d = Math.max(
    Math.floor(Eo * n.framesPerSec * 0.5),
    Math.floor(n.rms.length / 4)
  ), b = Gl(l, Hl, d), p = b.map((x) => {
    const C = Math.floor(x.startFrame / n.framesPerSec * r.sampleRate), f = Math.floor(x.lenFrames / n.framesPerSec * r.sampleRate);
    return kr(r, C, f);
  }), m = Jl(p, r.sampleRate, $l), w = Sr(m, r.sampleRate), u = await wr(w), y = b.map((x) => ({
    startSec: x.startFrame / n.framesPerSec,
    endSec: (x.startFrame + x.lenFrames) / n.framesPerSec,
    score: Math.max(0, Math.min(1, x.score))
  }));
  return {
    base64: u,
    durationSec: m.length / r.sampleRate,
    segments: y,
    sourceDurationSec: o
  };
};
class hi extends Error {
  status;
  code;
  constructor(a, r, o) {
    super(o), this.name = "MusicDaemonError", this.status = a, this.code = r;
  }
}
const Pt = async (e, a) => {
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
    throw new hi(r.status, l, l === "music_unavailable" ? "Music search is still starting up." : l);
  }
  return o;
}, gi = async (e, a, r) => {
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
    throw new hi(o.status, d, d);
  }
  return n;
}, Yl = (e) => Pt("/api/music/status", e), Ao = async (e) => (await Pt("/api/music/providers", e)).providers ?? [], Lo = async (e) => (await Pt("/api/music/connectors", e)).connectors ?? [], Kl = (e, a, r) => gi("/api/music/connectors/configure", { provider: e, credentials: a }, r), Xl = (e, a) => gi("/api/music/connectors/disconnect", { provider: e }, a), Ql = async (e, a = 20, r) => {
  const o = new URLSearchParams({ q: e, limit: String(a) });
  return (await Pt(`/api/music/search?${o.toString()}`, r)).results ?? [];
}, Zl = (e, a = "tracks,albums,artists,playlists", r = 20, o) => {
  const n = new URLSearchParams({ q: e, types: a, provider: "auto", limit: String(r) });
  return Pt(`/api/music/search2?${n.toString()}`, o);
}, ur = (e, a) => {
  const r = new URLSearchParams({ videoId: e });
  return Pt(`/api/music/stream?${r.toString()}`, a);
}, Pa = async (e, a) => {
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
}, pr = async () => Pa("/api/juli3ta/library/tracks"), Io = async (e) => (await Pa(
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
)).track, ec = async (e) => {
  await Pa("/api/juli3ta/library/delete", {
    method: "POST",
    headers: { "Idempotency-Key": `juli3ta-delete-${e}` },
    body: JSON.stringify({ id: e })
  });
}, tc = async () => (await Pa("/api/juli3ta/library/open-folder", {
  method: "POST",
  headers: { "Idempotency-Key": `juli3ta-open-folder-${Date.now()}` },
  body: "{}"
})).path, ta = "application/x-juli3ta-track", Sa = (e) => (e || "untitled").trim().replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "untitled", yi = (e) => e.source !== "youtube", Qt = (...e) => {
  const a = /* @__PURE__ */ new Map();
  for (const r of e)
    for (const o of r)
      a.has(o.id) || a.set(o.id, o);
  return Array.from(a.values()).sort((r, o) => o.createdAt - r.createdAt);
}, ac = (e) => yi(e) && (e.audioDataUrl.startsWith("data:") || !!e.lyricsPreview.trim() || !!e.coverDataUrl.startsWith("data:")), rc = "http://localhost:18080/v1", oc = "sk-test-123", dt = [
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
], ic = dt.flatMap((e) => e.chips), nc = ["very_slow", "slow", "medium", "fast", "very_fast"], sc = ["3/4", "4/4", "6/8", "7/8", "5/4", "other"], lc = ["straight", "swing", "shuffled", "syncopated", "polyrhythmic", "free"], cc = ["four_on_the_floor", "halftime", "doubletime", "broken_beat", "backbeat", "free"], dc = ["verse_chorus", "aaba", "drop_based", "loop_based", "through_composed", "strophic"], uc = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], pc = ["major", "minor", "dorian", "mixolydian", "phrygian", "lydian", "locrian"], mc = ["narrow", "medium", "wide"], hc = ["none", "gradual", "sudden"], gc = ["low", "medium", "high"], yc = ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "timeless"], bc = ["global", "us_uk", "latin", "afrobeats_scene", "kpop_scene", "jpop_scene", "caribbean", "middle_east", "asia_other", "europe_other"], fc = ["male", "female", "mixed", "other", "none"], vc = [
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
], xc = ["sung", "rap", "spoken_word", "chant", "choir", "vocoder"], wc = [
  "dry",
  "reverb",
  "delay",
  "autotune_light",
  "autotune_heavy",
  "distortion",
  "chorus",
  "double_tracked"
], kc = [
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
], Sc = [
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
], Tc = [
  "background",
  "featured_listen",
  "sync_film",
  "sync_ad",
  "game",
  "live_show_intro"
], G = (e) => e.replace(/_/g, " "), _c = (e, a, r) => {
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
}, Ar = (e) => {
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
  const n = [];
  return e.context?.era_reference && n.push(`${e.context.era_reference} era`), e.context?.cultural_region && e.context.cultural_region !== "global" && n.push(`${G(e.context.cultural_region)} scene`), e.context?.intended_use?.length && n.push(`use: ${e.context.intended_use.map(G).join("/")}`), e.context?.explicit_lyrics && n.push("explicit lyrics"), n.length && a.push(n.join(", ")), a.join(". ");
}, Nc = [
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
], zo = "tytus.music-creator.gallery", Mo = "tytus.music-creator", mr = "gallery", _t = 3500, Cc = 2e3, He = (e) => {
  const a = Math.floor(e / 1e3), r = Math.floor(a / 60), o = a % 60;
  return `${r}:${o.toString().padStart(2, "0")}`;
}, bi = (e) => e.source === "youtube" && !!e.externalId, xe = (e) => !!e.audioDataUrl || bi(e), Lr = (e) => e.coverDataUrl || e.thumbnailUrl || (e.externalId ? Ma(e.externalId) : ""), Ma = (e) => e ? `https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg` : "", fi = (e, a) => {
  const r = (e || "").replace(/\s*\[(official|hd|hq|lyrics?|audio|video|music video)[^\]]*\]\s*/ig, " ").replace(/\s+/g, " ").trim(), o = r.match(/^(.{2,80}?)\s+[-–—]\s+(.{2,160})$/);
  return o ? { artist: o[1].trim(), song: o[2].trim() } : { artist: (a || "").trim(), song: r || "Untitled" };
}, Ta = (e) => `youtube:${e}`, Ec = async () => {
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
    const a = localStorage.getItem(zo);
    if (a) {
      const r = JSON.parse(a);
      if (Array.isArray(r))
        for (const o of r)
          try {
            await za(e(o));
          } catch {
          }
      localStorage.removeItem(zo);
    }
  } catch (a) {
    console.warn("Legacy localStorage gallery migration failed:", a);
  }
  try {
    const a = await new Promise((r) => {
      const o = indexedDB.open(Mo);
      o.onsuccess = () => {
        const n = o.result;
        if (!n.objectStoreNames.contains(mr)) {
          n.close(), r([]);
          return;
        }
        const d = n.transaction(mr, "readonly").objectStore(mr).getAll();
        d.onsuccess = () => {
          n.close(), r(d.result ?? []);
        }, d.onerror = () => {
          n.close(), r([]);
        };
      }, o.onerror = () => r([]);
    });
    for (const r of a)
      try {
        await za(e(r));
      } catch {
      }
    a.length > 0 && indexedDB.deleteDatabase(Mo);
  } catch (a) {
    console.warn("Legacy IDB gallery migration failed:", a);
  }
}, Et = {
  music: null,
  cover: null,
  lyrics: null,
  lyricsBackup: null,
  image: null,
  allIds: []
}, Ac = (e, a) => {
  const r = [];
  for (const o of a)
    o.endpoint && o.user_key && r.push({
      url: `${o.endpoint.replace(/\/$/, "")}/v1`,
      apiKey: Dl(o.user_key),
      podId: o.pod_id,
      source: "included",
      label: `AIL gateway ${o.pod_id}`,
      models: Et
    });
  return r.push({
    url: rc,
    apiKey: oc,
    podId: "local",
    source: "local",
    label: "Local AIL",
    models: Et
  }), r;
}, Lc = (e) => {
  const a = (u, y) => {
    const x = u.map((C) => C.toLowerCase());
    for (const C of y) {
      const f = x.findIndex((v) => C.test(v));
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
  ]), n = new Set([r, o].filter((u) => !!u)), l = e.filter((u) => !n.has(u)), d = a(l, [
    /(^|[/:])minimax:music-2\.6$/,
    /(^|[/:])ail-music$/,
    /(^|[/:])music-2\.6$/,
    /music/
    // last-resort: any remaining music-tagged id
  ]), b = (u) => /music|cover|tts|stt|transcribe|whisper|embed|image/i.test(u), p = e.filter((u) => !b(u)), m = a(p, [
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
  return { music: d, cover: r, lyrics: o, lyricsBackup: m, image: w, allIds: e };
}, Ic = 6e4, hr = /* @__PURE__ */ new Map(), zc = async (e, a) => {
  const r = hr.get(e.url);
  if (r !== void 0) {
    if (Date.now() < r)
      return { ok: !1, models: Et };
    hr.delete(e.url);
  }
  const o = Rt(a, Rc);
  try {
    const n = await fetch(`${e.url}/models`, {
      method: "GET",
      signal: o.signal,
      headers: { Authorization: `Bearer ${e.apiKey}` }
    });
    if (n.status >= 500) return { ok: !1, models: Et };
    if (!n.ok) return { ok: !0, models: Et };
    const d = ((await n.json()).data ?? []).map((b) => b?.id).filter((b) => typeof b == "string" && b.length > 0);
    return { ok: !0, models: Lc(d) };
  } catch (n) {
    return (n?.name ?? "") === "TypeError" && hr.set(e.url, Date.now() + Ic), { ok: !1, models: Et };
  } finally {
    o.dispose();
  }
}, Mc = async (e, a) => (await Promise.all(
  e.map(async (o) => {
    if (a.aborted) return null;
    const { ok: n, models: l } = await zc(o, a);
    return n ? { ...o, models: l } : null;
  })
)).filter((o) => o !== null), _a = 6e4, Ro = 3e5, Rc = 8e3, Rt = (e, a) => {
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
}, jc = /* @__PURE__ */ new Set([402, 408, 425, 429, 500, 502, 503, 504]);
class ye extends Error {
  status;
  body;
  constructor(a, r, o) {
    super(o ?? `HTTP ${a}: ${r.slice(0, 200)}`), this.name = "GatewayError", this.status = a, this.body = r;
  }
}
function vi(e) {
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
const Da = async (e, a, r) => {
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
      if (d instanceof ye && jc.has(d.status)) {
        o = d;
        continue;
      }
      throw d;
    }
  const n = o?.message ?? "unknown";
  throw new Error(`All ${r} models exhausted. Last error: ${n}. Wait for the rate limit to reset, or pick a different endpoint in Settings.`);
}, Pc = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]), Dc = async (e, a, r) => {
  let o = 0, n = "";
  const l = Rt(r, _a);
  try {
    const y = { prompt: a, mode: "write_full_song" };
    e.models.lyrics && (y.model = e.models.lyrics);
    const x = await fetch(`${e.url}/music/lyrics`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${e.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(y),
      signal: l.signal
    });
    if (x.ok) {
      const C = await x.json();
      if (!C || typeof C.lyrics != "string" || C.lyrics.trim().length === 0)
        throw new Error("Lyrics endpoint returned 200 but no lyrics text.");
      return { ...C, usedFallback: !1 };
    }
    o = x.status, n = await x.text().catch(() => "");
  } catch (y) {
    const x = y.name;
    if (x === "AbortError" && r?.aborted) throw y;
    if (x === "TimeoutError")
      throw new Error(`Lyrics request timed out after ${_a / 1e3}s. Check your pod / pick another endpoint in Settings.`);
    console.warn("Lyrics primary threw (network), falling back to chat:", y);
  } finally {
    l.dispose();
  }
  if (o !== 0 && !Pc.has(o)) {
    const y = n.length > 300 ? `${n.slice(0, 300)}…` : n;
    throw new Error(`Lyrics HTTP ${o}: ${y || "no body"}`);
  }
  o !== 0 && console.warn(`Lyrics primary HTTP ${o} (retryable), falling back to chat:`, n);
  const d = (y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(y), b = /* @__PURE__ */ new Set(), p = [], m = (y) => {
    y && !b.has(y) && (b.add(y), p.push(y));
  };
  if (m(e.models.lyricsBackup), e.models.allIds.filter(d).forEach(m), p.length === 0)
    throw new Error(
      `Lyrics endpoint failed and no chat backup model is available for ${e.label}. Pick one in JULI3TA Settings.`
    );
  const w = `You are a songwriter. Given a theme, write a complete singable song.
Respond with VALID JSON ONLY in exactly this shape, nothing else:
{
  "song_title": "Short catchy title",
  "style_tags": "comma, separated, style, hints",
  "lyrics": "[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Verse]\\nFour lines\\n\\n[Chorus]\\nFour lines\\n\\n[Bridge]\\nTwo lines\\n\\n[Outro]\\nTwo lines"
}`, u = await Da(p, async (y) => {
    const x = {
      model: y,
      messages: [
        { role: "system", content: w },
        { role: "user", content: `Theme: ${a}` }
      ],
      temperature: 0.85
    }, C = async (f) => {
      const v = Rt(r, _a);
      let E;
      try {
        E = await fetch(`${e.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${e.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            f ? { ...x, response_format: { type: "json_object" } } : x
          ),
          signal: v.signal
        });
      } catch (z) {
        throw z.name === "TimeoutError" ? new Error(`Lyrics backup model timed out after ${_a / 1e3}s.`) : z;
      } finally {
        v.dispose();
      }
      if (!E.ok) {
        const z = await E.text().catch(() => "");
        throw new ye(E.status, z, `Lyrics fallback HTTP ${E.status}: ${z.slice(0, 300)}`);
      }
      const _ = (await E.json()).choices?.[0]?.message?.content?.trim() ?? "";
      if (!_)
        throw new ye(502, "", "Lyrics fallback returned empty content");
      const j = _.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""), H = vi(j) ?? j;
      let M;
      try {
        M = JSON.parse(H);
      } catch {
        throw console.warn("[callLyrics] non-JSON fallback content:", _.slice(0, 400)), new ye(502, _.slice(0, 200), `Lyrics fallback returned non-JSON content: ${_.slice(0, 200)}`);
      }
      if (!M.lyrics)
        throw new ye(502, "", 'Lyrics fallback JSON missing "lyrics" field');
      return M;
    };
    try {
      return await C(!0);
    } catch (f) {
      if (f instanceof ye && f.status === 400 && /response_format|json_object/i.test(f.body))
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
}, Uc = async (e, a, r) => {
  const o = !!a.refAudioBase64, n = (m) => /music/i.test(m) && !/cover/i.test(m), l = (m) => /cover/i.test(m), d = /* @__PURE__ */ new Set(), b = (m, w) => {
    w && !d.has(w) && (d.add(w), m.push(w));
  }, p = [];
  if (o ? (b(p, e.models.cover), e.models.allIds.filter(l).forEach((m) => b(p, m)), b(p, e.models.music)) : (b(p, e.models.music), e.models.allIds.filter(n).forEach((m) => b(p, m))), p.length === 0)
    throw new Error(
      o ? `This endpoint (${e.label}) doesn't expose a music-cover model. Try a different connection.` : `This endpoint (${e.label}) doesn't expose a music model. Try a different connection.`
    );
  return Da(p, async (m) => {
    const w = {
      model: m,
      lyrics: a.lyrics
    };
    a.prompt && (w.prompt = a.prompt), a.instrumental && (w.instrumental = !0), o && (w.audio_base64 = a.refAudioBase64);
    const u = Rt(r, Ro);
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
      throw C.name === "TimeoutError" ? new Error(`Music generation timed out after ${Ro / 1e3}s. Try a shorter lyric or a different endpoint.`) : C;
    } finally {
      u.dispose();
    }
    if (!y.ok) {
      const C = await y.text().catch(() => "");
      throw new ye(y.status, C, `Music HTTP ${y.status}: ${C.slice(0, 300)}`);
    }
    const x = await y.json();
    if (!x?.data?.audio || typeof x.data.audio != "string" || x.data.audio.length < 100)
      throw new ye(502, "", "Music gen returned no audio data — gateway accepted the call but upstream returned nothing.");
    return x;
  }, o ? "music-cover" : "music");
}, jo = 6e4, Aa = (e, a, r) => {
  const o = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "a song", n = r.trim().split(/[,;\n]/).slice(0, 3).join(", ").trim(), l = a.trim().split(/[.!?\n]/)[0]?.slice(0, 140).trim() ?? "", d = [
    `Square album cover art for a song titled "${o}".`
  ];
  return n && d.push(`Genre: ${n}.`), l && d.push(`Mood: ${l}.`), d.push("Editorial, expressive, vivid colors, no text, no words, no logos, no lyrics overlay."), d.join(" ");
}, Tr = async (e, a, r) => {
  const o = (b) => /image|diffusion|dall-?e|flux|sdxl/i.test(b), n = /* @__PURE__ */ new Set(), l = [], d = (b) => {
    b && !n.has(b) && (n.add(b), l.push(b));
  };
  if (d(e.models.image), e.models.allIds.filter(o).forEach(d), l.length === 0)
    throw new Error(`This endpoint (${e.label}) doesn't expose an image-generation model. Pick one in JULI3TA Settings → Cover art, or upload your own image.`);
  return Da(l, async (b) => {
    const p = Rt(r, jo), w = /minimax|ail-image|image-01/i.test(b) ? {
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
    } catch (_) {
      throw _.name === "TimeoutError" ? new Error(`Cover-art request timed out after ${jo / 1e3}s.`) : _;
    } finally {
      p.dispose();
    }
    if (!u.ok) {
      const _ = await u.text().catch(() => "");
      throw new ye(u.status, _, `Cover-art HTTP ${u.status}: ${_.slice(0, 200)}`);
    }
    const y = await u.json(), x = y.base_resp;
    if (x && typeof x.status_code == "number" && x.status_code !== 0)
      throw new ye(502, x.status_msg ?? "", `Cover-art ${b} rejected: ${x.status_msg ?? "status_code=" + x.status_code}`);
    const C = (_) => typeof _ != "string" || !_.length ? null : _.startsWith("data:") ? _ : `data:image/png;base64,${_}`, f = (_) => typeof _ == "string" && /^https?:\/\//i.test(_) ? _ : null, v = y.data;
    if (v && typeof v == "object" && !Array.isArray(v)) {
      const _ = v, j = _.image_base64;
      if (Array.isArray(j) && j[0]) {
        const z = C(j[0]);
        if (z) return z;
      }
      const H = C(_.image) ?? C(_.b64_json) ?? f(_.url);
      if (H) return H;
      const M = _.image_url ?? _.image_urls;
      if (Array.isArray(M) && M[0]) {
        const z = f(M[0]);
        if (z) return z;
      }
    }
    if (Array.isArray(v) && v[0]) {
      const _ = v[0], j = C(_.b64_json) ?? C(_.image_base64) ?? f(_.url);
      if (j) return j;
      throw new ye(502, "", "Cover-art response missing b64_json/url in data[0]");
    }
    const E = C(y.image) ?? C(y.b64_json);
    if (E) return E;
    const N = y.images;
    if (Array.isArray(N) && N[0]) {
      const _ = N[0], j = C(_.b64_json) ?? C(_.image) ?? f(_.url);
      if (j) return j;
    }
    throw new ye(502, "", `Cover-art response shape not recognised: ${JSON.stringify(y).slice(0, 200)}`);
  }, "image");
}, Po = [
  "✍️  Putting pen to paper…",
  "🎀  Looking for the perfect rhyme…",
  "📝  Stitching the chorus together…",
  "🎤  Polishing the bridge…"
], Do = [
  "🎹  Warming up the keys…",
  "🥁  Calling in the drums…",
  "🎻  Strings rolling in…",
  "🎚️  Mixing the perfect sauce…",
  "✨  Sprinkling some magic…",
  "🎧  Almost there — last touches…"
];
function Oc(e, a, r) {
  const [o, n] = T({
    trackId: null,
    playing: !1,
    loadingTrackId: null,
    positionMs: 0,
    durationMs: 0,
    volume: 1
  }), l = ee(null), d = L((f) => {
    (async () => {
      n((N) => ({
        ...N,
        trackId: f.id,
        playing: !1,
        loadingTrackId: xe(f) ? f.id : null,
        positionMs: 0,
        durationMs: f.durationMs || 0
      }));
      const v = f.audioDataUrl || await r?.(f);
      if (!v) {
        n((N) => ({ ...N, loadingTrackId: null }));
        return;
      }
      const E = a.current;
      if (!E) {
        n((N) => ({ ...N, loadingTrackId: null }));
        return;
      }
      o.trackId !== f.id || E.src !== v ? (E.src = v, E.preload = "auto", E.load(), E.pause(), n((N) => ({
        ...N,
        trackId: f.id,
        playing: !1,
        loadingTrackId: null,
        positionMs: 0,
        durationMs: f.durationMs || 0
      }))) : n((N) => ({ ...N, loadingTrackId: null }));
    })();
  }, [o.trackId, a, r]), b = L((f) => {
    (async () => {
      l.current = null, n((N) => ({
        ...N,
        trackId: f.id,
        loadingTrackId: f.id,
        durationMs: f.durationMs || N.durationMs
      }));
      const v = f.audioDataUrl || await r?.(f);
      if (!v) {
        n((N) => ({ ...N, loadingTrackId: null, playing: !1 }));
        return;
      }
      const E = a.current;
      if (!E) {
        n((N) => ({ ...N, loadingTrackId: null, playing: !1 }));
        return;
      }
      (o.trackId !== f.id || E.src !== v) && (E.src = v, E.preload = "auto", n((N) => ({ ...N, trackId: f.id, positionMs: 0, durationMs: f.durationMs || 0 }))), E.play().then(() => n((N) => ({ ...N, loadingTrackId: null, playing: !0 }))).catch(() => n((N) => ({ ...N, loadingTrackId: null, playing: !1 })));
    })();
  }, [o.trackId, a, r]), p = L(() => {
    a.current?.pause(), n((f) => ({ ...f, playing: !1, loadingTrackId: null }));
  }, [a]), m = L((f) => {
    if (o.loadingTrackId) return;
    if (f) {
      o.trackId === f.id && o.playing ? p() : b(f);
      return;
    }
    if (o.playing) {
      p();
      return;
    }
    const v = o.trackId ? e.find((E) => E.id === o.trackId) : null;
    v ? b(v) : a.current?.src && a.current.play().catch(() => {
    });
  }, [o.trackId, o.playing, o.loadingTrackId, e, b, p, a]), w = L((f) => {
    const v = a.current;
    v && (v.currentTime = Math.max(0, f / 1e3));
  }, [a]), u = L((f) => {
    const v = Math.max(0, Math.min(1, f));
    a.current && (a.current.volume = v), n((E) => ({ ...E, volume: v }));
  }, [a]), y = ce(() => e.filter(xe), [e]), x = L(() => {
    if (!o.trackId || y.length === 0) return;
    const f = y.findIndex((E) => E.id === o.trackId);
    if (f < 0) return;
    const v = y[(f + 1) % y.length];
    v && b(v);
  }, [o.trackId, y, b]), C = L(() => {
    if (!o.trackId || y.length === 0) return;
    const f = y.findIndex((E) => E.id === o.trackId);
    if (f < 0) return;
    const v = y[(f - 1 + y.length) % y.length];
    v && b(v);
  }, [o.trackId, y, b]);
  return te(() => {
    const f = a.current;
    if (!f) return;
    const v = () => n((z) => ({ ...z, positionMs: f.currentTime * 1e3 })), E = () => n((z) => ({
      ...z,
      durationMs: Number.isFinite(f.duration) ? f.duration * 1e3 : z.durationMs
    })), N = () => n((z) => ({ ...z, playing: !0, loadingTrackId: null })), _ = () => n((z) => ({ ...z, playing: !1, loadingTrackId: null })), j = () => n((z) => ({ ...z, loadingTrackId: null })), H = () => {
      const z = o.trackId ? y.find(($) => $.id === o.trackId) : null;
      if (!z || z.audioDataUrl || !r || l.current === z.id) {
        n(($) => ({ ...$, playing: !1, loadingTrackId: null }));
        return;
      }
      l.current = z.id, n(($) => ({ ...$, loadingTrackId: z.id, playing: !1 })), r(z, { force: !0 }).then(($) => {
        if (!$) throw new Error("No refreshed stream URL");
        return f.src = $, f.preload = "auto", f.play();
      }).then(() => n(($) => ({ ...$, playing: !0, loadingTrackId: null }))).catch(() => n(($) => ({ ...$, playing: !1, loadingTrackId: null })));
    }, M = () => {
      if (y.length >= 2) {
        const z = y.findIndex(($) => $.id === o.trackId);
        if (z >= 0 && z + 1 < y.length) {
          b(y[z + 1]);
          return;
        }
      }
      n((z) => ({ ...z, playing: !1, positionMs: 0 }));
    };
    return f.addEventListener("timeupdate", v), f.addEventListener("loadedmetadata", E), f.addEventListener("play", N), f.addEventListener("pause", _), f.addEventListener("canplay", j), f.addEventListener("error", H), f.addEventListener("ended", M), () => {
      f.removeEventListener("timeupdate", v), f.removeEventListener("loadedmetadata", E), f.removeEventListener("play", N), f.removeEventListener("pause", _), f.removeEventListener("canplay", j), f.removeEventListener("error", H), f.removeEventListener("ended", M);
    };
  }, [y, o.trackId, b, a, r]), { state: o, queue: e, play: b, pause: p, toggle: m, select: d, seek: w, setVolume: u, next: x, prev: C };
}
function Uo({
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
function gr({
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
        o ? /* @__PURE__ */ t(Z, { size: 10, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 10 }),
        o ? "…" : e
      ]
    }
  );
}
function It({
  track: e,
  size: a,
  iconSize: r,
  radius: o
}) {
  const n = Lr(e);
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
function Hc({ player: e, allTracks: a }) {
  const { state: r, toggle: o, next: n, prev: l, seek: d, setVolume: b, queue: p } = e, m = p.find((f) => f.id === r.trackId) ?? a.find((f) => f.id === r.trackId) ?? null;
  if (!m) return null;
  const w = r.durationMs > 0 ? r.durationMs : m.durationMs, u = Math.min(r.positionMs, w || 0), y = w > 0 ? u / w * 100 : 0, x = r.loadingTrackId === m.id, C = (f) => {
    if (!w) return;
    const v = f.currentTarget.getBoundingClientRect(), E = (f.clientX - v.left) / v.width;
    d(Math.max(0, Math.min(1, E)) * w);
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
        /* @__PURE__ */ t(It, { track: m, size: 40, iconSize: 18, radius: 6 }),
        /* @__PURE__ */ s("div", { className: "flex flex-col min-w-0", style: { width: 180 }, children: [
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: m.title }),
          /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: m.styleTags && m.styleTags !== "—" ? m.styleTags : "—" })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
          /* @__PURE__ */ t(
            "button",
            {
              onClick: l,
              className: "flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 28, height: 28, color: "var(--text-secondary)" },
              title: "Previous",
              children: /* @__PURE__ */ t(ve, { size: 12, style: { transform: "rotate(180deg)" } })
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
              children: x ? /* @__PURE__ */ t(Z, { size: 13, className: "animate-spin", style: { color: "white" } }) : r.playing ? /* @__PURE__ */ t(zt, { size: 13, style: { color: "white" } }) : /* @__PURE__ */ t(ve, { size: 13, style: { color: "white", marginLeft: 1 } })
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
          )
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            className: "flex-shrink-0 tabular-nums",
            style: { fontSize: 10, color: "var(--text-disabled)", minWidth: 36, textAlign: "right" },
            children: He(u)
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
            children: He(w)
          }
        ),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 flex-shrink-0", style: { width: 100 }, children: [
          /* @__PURE__ */ t(vr, { size: 12, style: { color: "var(--text-disabled)", flexShrink: 0 } }),
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
function $c({ retrying: e, onRetry: a }) {
  const { t: r } = ht();
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
            e ? /* @__PURE__ */ t(Z, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 14 }),
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
function Zt({ label: e, hint: a, counter: r, counterDanger: o, className: n, headerExtra: l, children: d }) {
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
function Fc({ onPick: e, disabled: a }) {
  const [r, o] = T(!1), [n, l] = T(dt[0].label), [d, b] = T(""), p = d.trim().toLowerCase(), m = p.length > 0, w = ce(() => {
    if (!m) return [];
    const u = [];
    for (const y of dt)
      for (const x of y.chips)
        x.toLowerCase().includes(p) && u.push({ family: y.label, chip: x });
    return u;
  }, [m, p]);
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
            /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: m ? `${w.length} match${w.length === 1 ? "" : "es"}` : `${ic.length} chips · click to add` })
          ] }),
          /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ s(
              "div",
              {
                className: "flex items-center gap-1 px-2 rounded-md",
                style: {
                  height: 24,
                  background: "var(--bg-window)",
                  border: `1px solid ${m ? "var(--accent-primary)" : "var(--border-subtle)"}`
                },
                children: [
                  /* @__PURE__ */ t(Lt, { size: 11, style: { color: "var(--text-disabled)" } }),
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
                      children: /* @__PURE__ */ t(de, { size: 11 })
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
        m ? w.length === 0 ? /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", padding: "8px 4px" }, children: [
          "No genres match “",
          d,
          "”. Try a shorter word."
        ] }) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: w.map(({ family: u, chip: y }) => /* @__PURE__ */ t(
          yr,
          {
            chip: y,
            family: u,
            onPick: e,
            disabled: a
          },
          `${u}::${y}`
        )) }) : /* @__PURE__ */ s(me, { children: [
          !r && /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap mb-2", children: dt.map((u) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => l(u.label),
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
              children: dt.map((u) => /* @__PURE__ */ s("div", { children: [
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
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: u.chips.map((y) => /* @__PURE__ */ t(yr, { chip: y, onPick: e, disabled: a }, y)) })
              ] }, u.label))
            }
          ) : /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: (dt.find((u) => u.label === n) ?? dt[0]).chips.map((u) => /* @__PURE__ */ t(yr, { chip: u, onPick: e, disabled: a }, u)) })
        ] })
      ]
    }
  );
}
function yr({
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
        /* @__PURE__ */ t(xr, { size: 10 }),
        e,
        a && /* @__PURE__ */ s("span", { style: { fontSize: 9, color: "var(--text-disabled)", marginLeft: 2 }, children: [
          "· ",
          a
        ] })
      ]
    }
  );
}
function Bc({ specs: e, onChange: a, disabled: r, onOptimize: o, optimizing: n }) {
  const [l, d] = T(!1), b = ce(() => Ar(e), [e]), p = b.length > 0, m = L(
    (u, y) => {
      const x = { ...e };
      y === null ? delete x[u] : x[u] = y, a(x);
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
                /* @__PURE__ */ t(fr, { size: 14, style: { color: "var(--text-secondary)" } }),
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
                  u.stopPropagation(), o(), l || d(!0);
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
                  n ? /* @__PURE__ */ t(Z, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 11 }),
                  n ? "Optimizing…" : "AI Optimize"
                ]
              }
            ),
            p && !l && /* @__PURE__ */ s(
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
                  At(e),
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
                  Jo,
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
                    b
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                /* @__PURE__ */ s(ea, { label: "Structure", children: [
                  /* @__PURE__ */ t(re, { label: "Tempo (BPM)", children: /* @__PURE__ */ t(
                    Oo,
                    {
                      value: e.structure?.tempo_bpm,
                      onChange: (u) => m("structure", { ...e.structure, tempo_bpm: u }),
                      min: 40,
                      max: 260,
                      placeholder: "120",
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Tempo class", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.structure?.tempo_class,
                      options: nc,
                      onChange: (u) => m("structure", { ...e.structure, tempo_class: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Time signature", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.structure?.time_signature,
                      options: sc,
                      onChange: (u) => m("structure", { ...e.structure, time_signature: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Rhythm feel", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.structure?.rhythm_feel,
                      options: lc,
                      onChange: (u) => m("structure", { ...e.structure, rhythm_feel: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Groove", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.structure?.groove_pattern,
                      options: cc,
                      onChange: (u) => m("structure", { ...e.structure, groove_pattern: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Form", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.structure?.song_form,
                      options: dc,
                      onChange: (u) => m("structure", { ...e.structure, song_form: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Length (s)", children: /* @__PURE__ */ t(
                    Oo,
                    {
                      value: e.structure?.length_seconds,
                      onChange: (u) => m("structure", { ...e.structure, length_seconds: u }),
                      min: 10,
                      max: 600,
                      placeholder: "180",
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(ea, { label: "Key", children: [
                  /* @__PURE__ */ t(re, { label: "Pitch", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.tonal?.key,
                      options: uc,
                      onChange: (u) => m("tonal", { ...e.tonal, key: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Mode", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.tonal?.mode,
                      options: pc,
                      onChange: (u) => m("tonal", { ...e.tonal, mode: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(ea, { label: "Dynamics", children: [
                  /* @__PURE__ */ t(re, { label: "Range", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.dynamics?.overall_dynamic_range,
                      options: mc,
                      onChange: (u) => m("dynamics", { ...e.dynamics, overall_dynamic_range: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Crescendo", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.dynamics?.crescendo_shape,
                      options: hc,
                      onChange: (u) => m("dynamics", { ...e.dynamics, crescendo_shape: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Big drops", children: /* @__PURE__ */ t(
                    Ho,
                    {
                      value: e.dynamics?.has_big_drops,
                      onChange: (u) => m("dynamics", { ...e.dynamics, has_big_drops: u }),
                      disabled: r
                    }
                  ) })
                ] }),
                /* @__PURE__ */ s(ea, { label: "Context", children: [
                  /* @__PURE__ */ t(re, { label: "Era", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.context?.era_reference,
                      options: yc,
                      onChange: (u) => m("context", { ...e.context, era_reference: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Region", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.context?.cultural_region,
                      options: bc,
                      onChange: (u) => m("context", { ...e.context, cultural_region: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Intensity", children: /* @__PURE__ */ t(
                    fe,
                    {
                      value: e.mood?.emotional_intensity,
                      options: gc,
                      onChange: (u) => m("mood", { ...e.mood, emotional_intensity: u }),
                      disabled: r
                    }
                  ) }),
                  /* @__PURE__ */ t(re, { label: "Explicit lyrics", children: /* @__PURE__ */ t(
                    Ho,
                    {
                      value: e.context?.explicit_lyrics,
                      onChange: (u) => m("context", { ...e.context, explicit_lyrics: u }),
                      disabled: r
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "mt-4 flex flex-col gap-3", children: [
                /* @__PURE__ */ t(
                  Nt,
                  {
                    label: "Primary instruments",
                    options: vc,
                    selected: e.instrumentation?.primary_instruments ?? [],
                    onChange: (u) => m("instrumentation", { ...e.instrumentation, primary_instruments: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }, children: [
                  /* @__PURE__ */ s(ea, { label: "Vocals", children: [
                    /* @__PURE__ */ t(re, { label: "Has vocals", children: /* @__PURE__ */ t(
                      qc,
                      {
                        value: e.instrumentation?.has_vocals,
                        onChange: (u) => m("instrumentation", { ...e.instrumentation, has_vocals: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(re, { label: "Gender", children: /* @__PURE__ */ t(
                      fe,
                      {
                        value: e.instrumentation?.vocal_gender,
                        options: fc,
                        onChange: (u) => m("instrumentation", { ...e.instrumentation, vocal_gender: u }),
                        disabled: r
                      }
                    ) }),
                    /* @__PURE__ */ t(re, { label: "Language (ISO)", children: /* @__PURE__ */ t(
                      Wc,
                      {
                        value: e.instrumentation?.language_iso639_1 ?? "",
                        onChange: (u) => m("instrumentation", { ...e.instrumentation, language_iso639_1: u.trim() || void 0 }),
                        placeholder: "en, es, ja…",
                        maxLength: 5,
                        disabled: r
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ t(
                    Nt,
                    {
                      label: "Vocal style",
                      options: xc,
                      selected: e.instrumentation?.vocal_style ?? [],
                      onChange: (u) => m("instrumentation", { ...e.instrumentation, vocal_style: u.length ? u : void 0 }),
                      disabled: r
                    }
                  ),
                  /* @__PURE__ */ t(
                    Nt,
                    {
                      label: "Vocal processing",
                      options: wc,
                      selected: e.instrumentation?.vocal_processing ?? [],
                      onChange: (u) => m("instrumentation", { ...e.instrumentation, vocal_processing: u.length ? u : void 0 }),
                      disabled: r
                    }
                  )
                ] }),
                /* @__PURE__ */ t(
                  Nt,
                  {
                    label: "Primary moods",
                    options: kc,
                    selected: e.mood?.primary_moods ?? [],
                    onChange: (u) => m("mood", { ...e.mood, primary_moods: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Nt,
                  {
                    label: "Occasion tags",
                    options: Sc,
                    selected: e.mood?.occasion_tags ?? [],
                    onChange: (u) => m("mood", { ...e.mood, occasion_tags: u.length ? u : void 0 }),
                    disabled: r
                  }
                ),
                /* @__PURE__ */ t(
                  Nt,
                  {
                    label: "Intended use",
                    options: Tc,
                    selected: e.context?.intended_use ?? [],
                    onChange: (u) => m("context", { ...e.context, intended_use: u.length ? u : void 0 }),
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
function ea({ label: e, children: a }) {
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
function fe({
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
        a.map((n) => /* @__PURE__ */ t("option", { value: n, children: G(n) }, n))
      ]
    }
  );
}
function Oo({
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
function Wc({
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
function Ho({
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
function qc({
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
function Nt({
  label: e,
  options: a,
  selected: r,
  onChange: o,
  disabled: n
}) {
  const l = (d) => {
    r.includes(d) ? o(r.filter((b) => b !== d)) : o([...r, d]);
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
      const b = r.includes(d);
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => l(d),
          disabled: n,
          className: "flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-90 disabled:opacity-40",
          style: {
            fontSize: 10,
            background: b ? "var(--accent-primary)" : "var(--bg-titlebar)",
            color: b ? "white" : "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            cursor: n ? "not-allowed" : "pointer"
          },
          children: [
            b && /* @__PURE__ */ t(aa, { size: 10 }),
            G(d)
          ]
        },
        d
      );
    }) })
  ] });
}
function At(e) {
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
const Jc = "#4ade80", Gc = "#fbbf24", Ra = (e) => e.models.music || e.models.cover ? Jc : Gc;
function Vc({ endpoint: e, endpoints: a, onSwitch: r }) {
  const [o, n] = T(!1), l = ee(null), d = a.length > 1;
  te(() => {
    if (!o) return;
    const p = (m) => {
      l.current && !l.current.contains(m.target) && n(!1);
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
  return /* @__PURE__ */ s("div", { ref: l, className: "relative inline-flex", children: [
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
          b(Ra(e)),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap" }, children: e.label }),
          d && /* @__PURE__ */ t(
            Jo,
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
          const m = p.podId === e.podId;
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => {
                r(p.podId), n(!1);
              },
              className: "w-full flex items-start gap-2 px-3 py-2 text-left transition-all hover:bg-[var(--bg-hover)]",
              style: {
                background: m ? "var(--bg-selected)" : "transparent",
                borderBottom: "1px solid var(--border-subtle)"
              },
              children: [
                /* @__PURE__ */ t("div", { className: "mt-1", children: b(Ra(p)) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }, children: p.label }),
                    m && /* @__PURE__ */ t(aa, { size: 11, style: { color: "var(--accent-primary)" } })
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
const Je = ({ icon: e, label: a, onClick: r, danger: o }) => /* @__PURE__ */ s(
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
function Yc({ tracks: e, player: a, onLoad: r, onOpenLyrics: o, onDelete: n, onRename: l }) {
  const { t: d } = ht();
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
    e.map((b) => /* @__PURE__ */ t(
      Kc,
      {
        track: b,
        player: a,
        onLoad: r,
        onOpenLyrics: o,
        onDelete: n,
        onRename: l,
        translate: d
      },
      b.id
    ))
  ] });
}
function Kc({
  track: e,
  player: a,
  onLoad: r,
  onOpenLyrics: o,
  onDelete: n,
  onRename: l,
  translate: d
}) {
  const [b, p] = T(!1), [m, w] = T(null), u = a.state.trackId === e.id, y = u && a.state.playing, x = () => {
    if (m === null) return;
    const v = m.trim();
    w(null), v && v !== e.title && l(e.id, v);
  }, C = new Date(e.createdAt).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      draggable: !0,
      onDragStart: (v) => {
        const E = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: xe(e)
        };
        v.dataTransfer.setData(ta, JSON.stringify(E)), e.lyricsPreview && v.dataTransfer.setData("text/plain", e.lyricsPreview), v.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => xe(e) ? a.toggle(e) : o(e),
      className: "grid items-center gap-2 px-2 cursor-pointer transition-colors",
      style: {
        gridTemplateColumns: "20px 1fr 60px 56px 18px",
        height: 30,
        fontSize: 11,
        background: u ? "var(--bg-selected)" : b ? "var(--bg-hover)" : "transparent",
        color: "var(--text-primary)"
      },
      title: xe(e) ? y ? "Click to pause" : "Click to play" : "Click to open lyrics",
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { color: u ? "var(--accent-primary)" : "var(--text-disabled)" }, children: xe(e) ? y ? /* @__PURE__ */ t(zt, { size: 11 }) : b ? /* @__PURE__ */ t(ve, { size: 11 }) : /* @__PURE__ */ t(ja, { size: 11 }) : /* @__PURE__ */ t(La, { size: 11 }) }),
        /* @__PURE__ */ t("div", { className: "min-w-0", children: m !== null ? (
          // Inline rename editor — Enter commits, Escape cancels, blur
          // also commits so the user can click anywhere else and not
          // lose the edit. autoFocus + onClick.stopPropagation so the
          // row's own click handler (play/toggle) doesn't fire.
          /* @__PURE__ */ t(
            "input",
            {
              autoFocus: !0,
              value: m,
              onChange: (v) => w(v.target.value),
              onClick: (v) => v.stopPropagation(),
              onKeyDown: (v) => {
                v.stopPropagation(), v.key === "Enter" ? x() : v.key === "Escape" && w(null);
              },
              onBlur: x,
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
        ) : /* @__PURE__ */ s(me, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "truncate",
              style: { fontWeight: u ? 600 : 500 },
              onClick: (v) => v.stopPropagation(),
              onDoubleClick: (v) => {
                v.stopPropagation(), w(e.title);
              },
              title: "Double-click to rename",
              children: e.title || d("musiccreator.track.untitled")
            }
          ),
          e.styleTags && e.styleTags !== "—" && /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 9, color: "var(--text-disabled)" }, children: e.styleTags })
        ] }) }),
        /* @__PURE__ */ t("span", { className: "tabular-nums", style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: e.durationMs > 0 ? He(e.durationMs) : "—" }),
        /* @__PURE__ */ t("span", { style: { textAlign: "right", fontSize: 10, color: "var(--text-disabled)" }, children: C }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (v) => {
              v.stopPropagation(), v.shiftKey ? o(e) : v.altKey ? n(e.id) : r(e);
            },
            className: "flex items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-selected)]",
            style: { width: 18, height: 18, color: "var(--text-disabled)" },
            title: "Click: load into form · Shift-click: open lyrics · Alt-click: delete",
            children: /* @__PURE__ */ t(Go, { size: 11 })
          }
        )
      ]
    }
  );
}
function Xc({
  track: e,
  onDelete: a,
  onLoad: r,
  onOpenLyrics: o,
  onSaveSongToDesktop: n,
  onSaveLyricsToDesktop: l,
  onPlayInPlayer: d,
  onRename: b,
  onEditCover: p,
  onSelect: m,
  selected: w,
  player: u
}) {
  const { t: y } = ht(), x = ee(null), [C, f] = T(!1), [v, E] = T(null), [N, _] = T(null), j = () => {
    if (N === null) return;
    const R = N.trim();
    _(null), R && R !== e.title && b(e.id, R);
  }, H = u.state.trackId === e.id, M = H && u.state.playing, z = H && u.state.durationMs > 0 ? u.state.positionMs / u.state.durationMs : 0;
  te(() => {
    if (!v) return;
    const R = ($e) => {
      const we = $e.target;
      x.current && we && x.current.contains(we) || we && we.closest?.("[data-track-menu]") || E(null);
    }, ne = () => E(null);
    return setTimeout(() => window.addEventListener("mousedown", R), 0), window.addEventListener("scroll", ne, !0), window.addEventListener("resize", ne), () => {
      window.removeEventListener("mousedown", R), window.removeEventListener("scroll", ne, !0), window.removeEventListener("resize", ne);
    };
  }, [v]);
  const $ = () => {
    const R = x.current?.getBoundingClientRect();
    if (!R) return;
    const ne = 220, $e = Math.min(R.right - ne, window.innerWidth - ne - 8), we = R.bottom + 4;
    E({ x: Math.max(8, $e), y: we });
  }, ae = (R) => () => {
    E(null), R();
  }, ue = () => u.toggle(e), Ge = () => {
    const R = document.createElement("a");
    R.href = e.audioDataUrl, R.download = `${e.title || "track"}.mp3`, R.click();
  };
  return /* @__PURE__ */ s(
    "div",
    {
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      draggable: !0,
      onDragStart: (R) => {
        const ne = {
          id: e.id,
          title: e.title,
          styleTags: e.styleTags,
          lyricsPreview: e.lyricsPreview,
          durationMs: e.durationMs,
          hasAudio: xe(e)
        };
        R.dataTransfer.setData(ta, JSON.stringify(ne)), e.lyricsPreview && R.dataTransfer.setData("text/plain", e.lyricsPreview), R.dataTransfer.effectAllowed = "copyMove";
      },
      onClick: () => m?.(e),
      className: "rounded-lg px-2 py-2 transition-all",
      style: {
        background: w ? "var(--bg-selected)" : C ? "var(--bg-hover)" : "transparent",
        border: w ? "1px solid var(--accent-primary)" : "1px solid transparent",
        cursor: m ? "pointer" : "grab"
      },
      title: m ? "Click to open in player · drag to other fields" : "Drag to Desktop, Cover field, Text Editor, or any text field",
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          xe(e) ? /* @__PURE__ */ s(
            "button",
            {
              onClick: ue,
              className: "relative flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 group",
              style: { width: 36, height: 36 },
              title: M ? "Pause" : "Play",
              children: [
                /* @__PURE__ */ t(It, { track: e, size: 36, iconSize: 14, radius: 6 }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: "absolute inset-0 flex items-center justify-center rounded-md transition-opacity",
                    style: {
                      background: Lr(e) ? "rgba(0, 0, 0, 0.35)" : "transparent",
                      borderRadius: "var(--radius-md)"
                    },
                    children: M ? /* @__PURE__ */ t(zt, { size: 14, style: { color: "white" } }) : /* @__PURE__ */ t(ve, { size: 14, style: { color: "white", marginLeft: 1 } })
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
                children: /* @__PURE__ */ t(La, { size: 16, style: { color: "var(--text-primary)" } })
              }
            )
          ),
          /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
            N !== null ? /* @__PURE__ */ t(
              "input",
              {
                autoFocus: !0,
                value: N,
                onChange: (R) => _(R.target.value),
                onClick: (R) => R.stopPropagation(),
                onKeyDown: (R) => {
                  R.stopPropagation(), R.key === "Enter" ? j() : R.key === "Escape" && _(null);
                },
                onBlur: j,
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
                  R.stopPropagation(), _(e.title);
                },
                title: "Double-click to rename",
                children: e.title || y("musiccreator.track.untitled")
              }
            ),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
              e.durationMs > 0 ? He(e.durationMs) : y("musiccreator.track.lyricsOnly"),
              e.styleTags && e.styleTags !== "—" && ` · ${e.styleTags}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              ref: x,
              onClick: (R) => {
                R.stopPropagation(), v ? E(null) : $();
              },
              className: "flex items-center justify-center rounded-md flex-shrink-0 transition-all hover:bg-[var(--bg-selected)]",
              style: {
                width: 24,
                height: 24,
                color: C || v ? "var(--text-primary)" : "var(--text-disabled)"
              },
              "aria-label": "Track actions",
              title: "Track actions",
              children: /* @__PURE__ */ t(Go, { size: 14 })
            }
          )
        ] }),
        v && _r(
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
                xe(e) && /* @__PURE__ */ s(me, { children: [
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.song") }),
                  /* @__PURE__ */ t(Je, { icon: /* @__PURE__ */ t(ja, { size: 14 }), label: y("musiccreator.track.playInPlayer"), onClick: ae(() => d(e)) }),
                  /* @__PURE__ */ t(Je, { icon: /* @__PURE__ */ t(ko, { size: 14 }), label: y("musiccreator.track.saveSongToDesktop"), onClick: ae(() => n(e)) }),
                  e.audioDataUrl && /* @__PURE__ */ t(Je, { icon: /* @__PURE__ */ t(as, { size: 14 }), label: y("musiccreator.track.download"), onClick: ae(Ge) })
                ] }),
                e.lyricsPreview && /* @__PURE__ */ s(me, { children: [
                  xe(e) && /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                  /* @__PURE__ */ t("div", { style: { padding: "4px 12px 2px", fontSize: 9, fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: 0.5 }, children: y("musiccreator.track.section.lyrics") }),
                  /* @__PURE__ */ t(Je, { icon: /* @__PURE__ */ t(La, { size: 14 }), label: y("musiccreator.track.openInEditor"), onClick: ae(() => o(e)) }),
                  /* @__PURE__ */ t(Je, { icon: /* @__PURE__ */ t(ko, { size: 14 }), label: y("musiccreator.track.saveLyricsToDesktop"), onClick: ae(() => l(e)) })
                ] }),
                /* @__PURE__ */ t("div", { style: { height: 1, background: "var(--border-subtle)", margin: "4px 6px" } }),
                /* @__PURE__ */ t(Je, { icon: /* @__PURE__ */ t(Vo, { size: 14 }), label: "Rename", onClick: ae(() => _(e.title)) }),
                /* @__PURE__ */ t(Je, { icon: /* @__PURE__ */ t(oa, { size: 14 }), label: "Edit cover art", onClick: ae(() => p(e)) }),
                /* @__PURE__ */ t(Je, { icon: /* @__PURE__ */ t(pt, { size: 14 }), label: y("musiccreator.track.loadIntoForm"), onClick: ae(() => r(e)) }),
                /* @__PURE__ */ t(Je, { icon: /* @__PURE__ */ t(ia, { size: 14 }), label: y("musiccreator.track.delete"), onClick: ae(() => a(e.id)), danger: !0 })
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
                  width: `${z * 100}%`,
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
function Qc({
  track: e,
  endpoint: a,
  onSave: r,
  onClose: o
}) {
  const [n, l] = T(e.coverDataUrl), [d, b] = T(""), [p, m] = T(!1), [w, u] = T(null), y = ee(null), x = ee(null), C = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), f = Aa(C, "", e.styleTags || "");
  te(() => {
    const N = (_) => {
      _.key === "Escape" && (_.stopPropagation(), o());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [o]), te(() => () => x.current?.abort(), []);
  const v = async () => {
    if (!a) {
      u("Connect to a pod to generate cover art.");
      return;
    }
    if (!a.models.image) {
      u(`This endpoint (${a.label}) has no image model. Pick one in JULI3TA Settings → Cover art.`);
      return;
    }
    if (p) return;
    x.current?.abort(), x.current = new AbortController();
    const N = x.current.signal;
    m(!0), u(null);
    try {
      const _ = (d.trim() || f).slice(0, 1500), j = await Tr(a, _, N);
      if (N.aborted) return;
      l(j);
    } catch (_) {
      if (_.name === "AbortError") return;
      u(_.message || "Cover-art generation failed.");
    } finally {
      m(!1);
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
    const _ = new FileReader();
    _.onerror = () => u("Could not read that image."), _.onload = () => {
      const j = _.result;
      typeof j == "string" && l(j);
    }, _.readAsDataURL(N);
  };
  return _r(
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
                    /* @__PURE__ */ t(oa, { size: 14, style: { color: "var(--accent-primary)" } }),
                    /* @__PURE__ */ s("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: [
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
                        children: /* @__PURE__ */ t(de, { size: 14 })
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
                        !n && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(oa, { size: 36, style: { color: "white", opacity: 0.85 } }) }),
                        p && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(Z, { size: 24, className: "animate-spin", style: { color: "white" } }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col gap-2 min-w-0", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: v,
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
                          p ? /* @__PURE__ */ t(Z, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(Es, { size: 12 }),
                          n ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
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
                          /* @__PURE__ */ t(Nr, { size: 12 }),
                          "Upload"
                        ]
                      }
                    ),
                    n && /* @__PURE__ */ s(
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
                          /* @__PURE__ */ t(de, { size: 12 }),
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
                      /* @__PURE__ */ t(ra, { size: 12, style: { flexShrink: 0 } }),
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
                  ref: y,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (N) => {
                    const _ = N.target.files?.[0];
                    _ && E(_), N.target.value = "";
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
function Na({ label: e, children: a }) {
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
function Zc({
  songName: e,
  mode: a,
  theme: r,
  style: o,
  intent: n,
  lyrics: l,
  specs: d,
  coverDataUrl: b,
  endpoint: p,
  busy: m,
  onRegenerate: w,
  onUpload: u,
  onClear: y,
  onClose: x
}) {
  const C = ee(null), f = ce(() => Ar(d), [d]), v = ce(() => At(d), [d]);
  te(() => {
    const _ = (j) => {
      j.key === "Escape" && (j.stopPropagation(), x());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [x]);
  const E = a === "restyle" ? "Restyle" : a === "lyricsOnly" ? "Lyrics only" : "Song", N = e.trim().replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
  return _r(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[4000] flex items-center justify-center",
        style: { background: "rgba(0,0,0,0.6)" },
        onClick: x,
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
            onClick: (_) => _.stopPropagation(),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-3 flex-shrink-0",
                  style: { borderBottom: "1px solid var(--border-subtle)" },
                  children: [
                    /* @__PURE__ */ t(ut, { size: 14, style: { color: "var(--accent-primary)" } }),
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
                        onClick: x,
                        className: "ml-auto rounded-md hover:bg-[var(--bg-hover)] flex items-center justify-center",
                        style: { width: 24, height: 24, color: "var(--text-secondary)" },
                        title: "Close (Esc)",
                        children: /* @__PURE__ */ t(de, { size: 14 })
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
                      background: b ? `url(${b}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "var(--shadow-md)"
                    },
                    children: [
                      !b && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(oa, { size: 64, style: { color: "white", opacity: 0.7 } }) }),
                      m && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ t(Z, { size: 28, className: "animate-spin", style: { color: "white" } }) })
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
                        disabled: m || !p?.models.image,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40",
                        style: {
                          fontSize: 11,
                          fontWeight: 600,
                          color: "white",
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          border: "1px solid transparent",
                          cursor: m || !p?.models.image ? "not-allowed" : "pointer"
                        },
                        title: p?.models.image ? "Generate cover art" : "No image model available",
                        children: [
                          m ? /* @__PURE__ */ t(Z, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 11 }),
                          b ? "Regenerate" : "Generate"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: () => C.current?.click(),
                        disabled: m,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(Nr, { size: 11 }),
                          "Upload"
                        ]
                      }
                    ),
                    b && /* @__PURE__ */ s(
                      "button",
                      {
                        type: "button",
                        onClick: y,
                        disabled: m,
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-[var(--bg-hover)]",
                        style: {
                          fontSize: 11,
                          color: "var(--text-disabled)",
                          background: "var(--bg-titlebar)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ t(de, { size: 11 }),
                          "Clear"
                        ]
                      }
                    )
                  ] }),
                  r.trim() && /* @__PURE__ */ t(Na, { label: "Theme", children: r.trim() }),
                  n.trim() && /* @__PURE__ */ t(Na, { label: "Lyrics Direction", children: n.trim() }),
                  v > 0 && f && /* @__PURE__ */ t(Na, { label: `Track Specs (${v} set)`, children: f }),
                  l.trim() && /* @__PURE__ */ t(Na, { label: "Lyrics", children: /* @__PURE__ */ t(
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
                  !r.trim() && !n.trim() && v === 0 && !l.trim() && /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", fontStyle: "italic" }, children: "No metadata yet — fill in the form behind this card and click Create Song." })
                ] })
              ] }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: C,
                  type: "file",
                  accept: "image/png,image/jpeg,image/webp,image/gif",
                  style: { display: "none" },
                  onChange: (_) => {
                    const j = _.target.files?.[0];
                    j && u(j), _.target.value = "";
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
function ed(e) {
  if (!e || e <= 0) return "—";
  const a = e / 1024;
  return a < 1024 ? `${a.toFixed(1)} KB` : `${(a / 1024).toFixed(2)} MB`;
}
function td(e) {
  return !e || e <= 0 ? "—" : `${Math.round(e / 1e3)} kbps`;
}
function ad(e) {
  return !e || e <= 0 ? "—" : `${(e / 1e3).toFixed(1)} kHz`;
}
function rd(e) {
  if (!e) return "—";
  try {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return "—";
  }
}
function od(e) {
  const a = [], r = [];
  e.structure?.tempo_bpm ? r.push({ label: "Tempo", value: `${e.structure.tempo_bpm} BPM` }) : e.structure?.tempo_class && r.push({ label: "Tempo", value: G(e.structure.tempo_class) }), e.structure?.time_signature && e.structure.time_signature !== "other" && r.push({ label: "Time", value: e.structure.time_signature }), e.structure?.rhythm_feel && r.push({ label: "Feel", value: G(e.structure.rhythm_feel) }), e.structure?.groove_pattern && r.push({ label: "Groove", value: G(e.structure.groove_pattern) }), e.structure?.song_form && r.push({ label: "Form", value: G(e.structure.song_form) }), e.structure?.length_seconds && r.push({ label: "Length", value: `~${e.structure.length_seconds}s` }), r.length && a.push({ label: "Structure", rows: r });
  const o = [];
  e.tonal?.key && o.push({ label: "Key", value: e.tonal.key }), e.tonal?.mode && o.push({ label: "Mode", value: G(e.tonal.mode) }), o.length && a.push({ label: "Tonal", rows: o });
  const n = [];
  if (e.instrumentation?.primary_instruments?.length && n.push({ label: "Instruments", value: e.instrumentation.primary_instruments.map(G).join(", ") }), e.instrumentation?.has_vocals === !1)
    n.push({ label: "Vocals", value: "Instrumental" });
  else if (e.instrumentation?.has_vocals || e.instrumentation?.vocal_style?.length || e.instrumentation?.vocal_gender || e.instrumentation?.vocal_processing?.length) {
    const p = [];
    e.instrumentation.vocal_gender && e.instrumentation.vocal_gender !== "none" && p.push(G(e.instrumentation.vocal_gender)), e.instrumentation.vocal_style?.length && p.push(e.instrumentation.vocal_style.map(G).join("/")), n.push({ label: "Vocals", value: p.length ? p.join(" ") : "With vocals" }), e.instrumentation.vocal_processing?.length && n.push({ label: "Processing", value: e.instrumentation.vocal_processing.map(G).join(" + ") });
  }
  e.instrumentation?.language_iso639_1 && n.push({ label: "Language", value: e.instrumentation.language_iso639_1.toUpperCase() }), n.length && a.push({ label: "Instrumentation", rows: n });
  const l = [];
  e.dynamics?.overall_dynamic_range && l.push({ label: "Range", value: G(e.dynamics.overall_dynamic_range) }), e.dynamics?.crescendo_shape && e.dynamics.crescendo_shape !== "none" && l.push({ label: "Crescendo", value: G(e.dynamics.crescendo_shape) }), e.dynamics?.has_big_drops && l.push({ label: "Big drops", value: "Yes" }), l.length && a.push({ label: "Dynamics", rows: l });
  const d = [];
  e.mood?.primary_moods?.length && d.push({ label: "Moods", value: e.mood.primary_moods.join(", ") }), e.mood?.emotional_intensity && d.push({ label: "Intensity", value: G(e.mood.emotional_intensity) }), e.mood?.occasion_tags?.length && d.push({ label: "For", value: e.mood.occasion_tags.map(G).join(", ") }), d.length && a.push({ label: "Mood", rows: d });
  const b = [];
  return e.context?.era_reference && b.push({ label: "Era", value: G(e.context.era_reference) }), e.context?.cultural_region && e.context.cultural_region !== "global" && b.push({ label: "Region", value: G(e.context.cultural_region) }), e.context?.intended_use?.length && b.push({ label: "Use", value: e.context.intended_use.map(G).join("/") }), e.context?.explicit_lyrics && b.push({ label: "Explicit", value: "Yes" }), b.length && a.push({ label: "Context", rows: b }), a;
}
function _e({ label: e, value: a }) {
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
const id = /^\s*\[([^\]]+)\]\s*$/;
function nd({ text: e }) {
  const a = e.split(`
`);
  return /* @__PURE__ */ t("div", { style: { fontSize: 14, lineHeight: 1.85, color: "var(--text-primary)" }, children: a.map((r, o) => {
    const n = r.match(id);
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
function sd({ track: e, player: a, onEditInCreator: r, onSwitchToCreator: o, onSearchMusic: n }) {
  const { t: l } = ht(), d = e?.specsJson ?? "", b = ce(() => {
    if (!d) return {};
    try {
      return JSON.parse(d);
    } catch {
      return {};
    }
  }, [d]), p = (b.intent ?? "").trim(), m = ce(() => od(b), [b]);
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
      /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }, children: l("musiccreator.player.empty.title") }),
      /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", textAlign: "center", maxWidth: 360 }, children: l("musiccreator.player.empty.body") }),
      /* @__PURE__ */ s(
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
            /* @__PURE__ */ t(Oe, { size: 13 }),
            l("musiccreator.player.empty.openCreator")
          ]
        }
      ),
      n && /* @__PURE__ */ s(
        "button",
        {
          onClick: n,
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
            /* @__PURE__ */ t(Lt, { size: 13 }),
            "Search free music"
          ]
        }
      )
    ] });
  const w = e.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled", u = xe(e), y = Lr(e), x = e.source === "youtube" ? e.artist || "YouTube" : "JULI3TA", C = e.styleTags && e.styleTags !== "—" ? e.styleTags : "", f = a.state.trackId === e.id, v = f && a.state.playing, E = f && a.state.loadingTrackId === e.id, N = e.source === "youtube", _ = N ? "YouTube" : "JULI3TA", j = a.queue.filter((H) => H.id !== e.id && (H.artist || "").trim() && H.artist === e.artist).slice(0, 4);
  return /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden relative", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ s("div", { className: "flex-shrink-0 relative overflow-hidden", children: [
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
      /* @__PURE__ */ s("div", { className: "relative px-7 pt-8 pb-7 flex flex-wrap gap-7 items-end", children: [
        /* @__PURE__ */ s(
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
            title: u ? f && v ? "Pause" : "Play" : "Lyric sheet — no audio",
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
                    opacity: f && v ? 0 : 1
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
                      children: f && v ? /* @__PURE__ */ t(zt, { size: 30, style: { color: "white" } }) : E ? /* @__PURE__ */ t(Z, { size: 30, className: "animate-spin", style: { color: "white" } }) : /* @__PURE__ */ t(ve, { size: 30, style: { color: "white", marginLeft: 3 } })
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
                u ? /* @__PURE__ */ t(ve, { size: 9, style: { marginLeft: -1 } }) : /* @__PURE__ */ t(pt, { size: 10 }),
                N ? "YouTube track" : l(u ? "musiccreator.player.eyebrow.track" : "musiccreator.player.eyebrow.lyricSheet")
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
          /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center flex-wrap",
              style: { fontSize: 13, color: "rgba(255,255,255,0.85)", gap: 8 },
              children: [
                /* @__PURE__ */ t(Zo, { name: "juli3ta:mark", size: 22, scale: 1.2, style: { marginRight: 2 } }),
                /* @__PURE__ */ t("span", { style: { fontWeight: 700, color: "#fff" }, children: x }),
                e.source === "youtube" && e.album && e.album !== x && /* @__PURE__ */ s(me, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: e.album })
                ] }),
                C && /* @__PURE__ */ s(me, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: C })
                ] }),
                e.durationMs > 0 && /* @__PURE__ */ s(me, { children: [
                  /* @__PURE__ */ t("span", { style: { opacity: 0.5 }, children: "·" }),
                  /* @__PURE__ */ t("span", { children: He(e.durationMs) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "mt-5 flex items-center gap-3 flex-wrap", children: [
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
                title: f && v ? "Pause" : "Play",
                children: E ? /* @__PURE__ */ s(me, { children: [
                  /* @__PURE__ */ t(Z, { size: 16, className: "animate-spin" }),
                  " Loading…"
                ] }) : f && v ? /* @__PURE__ */ s(me, { children: [
                  /* @__PURE__ */ t(zt, { size: 16 }),
                  " ",
                  l("musiccreator.player.pause")
                ] }) : /* @__PURE__ */ s(me, { children: [
                  /* @__PURE__ */ t(ve, { size: 16, style: { marginLeft: 2 } }),
                  " ",
                  l("musiccreator.player.play")
                ] })
              }
            ),
            /* @__PURE__ */ s(
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
                  /* @__PURE__ */ t(Mt, { size: 13 }),
                  l("musiccreator.player.remixInRestyle")
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
            children: l("musiccreator.player.lyrics")
          }
        ),
        e.lyricsPreview ? /* @__PURE__ */ t(nd, { text: e.lyricsPreview }) : N ? /* @__PURE__ */ s(
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
                /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 44, height: 44, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Ns, { size: 18 }) }),
                /* @__PURE__ */ s("div", { children: [
                  /* @__PURE__ */ s("div", { style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: [
                    "Streamed from ",
                    _
                  ] }),
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
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.album || "YouTube" })
                ] }),
                /* @__PURE__ */ s("div", { className: "rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, textTransform: "uppercase", letterSpacing: 0.8, color: "var(--text-disabled)", fontWeight: 800 }, children: "Duration" }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 14, fontWeight: 900, color: "var(--text-primary)", marginTop: 6 }, children: e.durationMs ? He(e.durationMs) : "Unknown" })
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
                    /* @__PURE__ */ t(is, { size: 13 }),
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
              /* @__PURE__ */ t(pt, { size: 28, style: { opacity: 0.4, marginBottom: 10 } }),
              /* @__PURE__ */ t("div", { style: { fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }, children: l("musiccreator.player.lyrics.empty") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-4", style: { width: 420, flexShrink: 0 }, children: [
        e.theme.trim() && /* @__PURE__ */ t(Ct, { label: l("musiccreator.player.theme"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: e.theme.trim() }) }),
        p && /* @__PURE__ */ t(Ct, { label: l("musiccreator.player.lyricsDirection"), children: /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-primary)", whiteSpace: "pre-wrap", lineHeight: 1.55 }, children: p }) }),
        m.map((H) => /* @__PURE__ */ t(Ct, { label: H.label, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1.5", children: H.rows.map((M) => /* @__PURE__ */ t(_e, { label: M.label, value: M.value }, `${H.label}-${M.label}`)) }) }, H.label)),
        N && /* @__PURE__ */ t(Ct, { label: "Artist / Source", children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 48, height: 48, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(Os, { size: 20 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 15, fontWeight: 900, color: "var(--text-primary)" }, children: e.artist || "Unknown artist" }),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: [
              e.album || "YouTube",
              " · streamed audio"
            ] }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", lineHeight: 1.45, marginTop: 8 }, children: "Spotify/Last.fm/Discogs connector slots are exposed in Sources; once credentials exist this card can expand with bios, listeners, releases and richer artwork." })
          ] })
        ] }) }),
        j.length > 0 && /* @__PURE__ */ t(Ct, { label: "More from this artist", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: j.map((H) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => a.select(H),
            className: "flex items-center gap-2 rounded-lg p-2 text-left transition-all hover:bg-[var(--bg-hover)]",
            style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t(It, { track: H, size: 34, iconSize: 14, radius: 8 }),
              /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: H.title }),
                /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: H.durationMs ? He(H.durationMs) : _ })
              ] })
            ]
          },
          H.id
        )) }) }),
        /* @__PURE__ */ t(Ct, { label: l("musiccreator.player.about"), children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(_e, { label: l("musiccreator.player.about.created"), value: rd(e.createdAt) }),
          e.source === "youtube" && /* @__PURE__ */ t(_e, { label: "Source", value: "YouTube" }),
          e.source === "youtube" && e.artist && /* @__PURE__ */ t(_e, { label: "Artist", value: e.artist }),
          e.source === "youtube" && e.album && e.album !== e.artist && /* @__PURE__ */ t(_e, { label: "Channel", value: e.album }),
          u && e.durationMs > 0 && /* @__PURE__ */ t(_e, { label: l("musiccreator.player.about.duration"), value: He(e.durationMs) }),
          e.source !== "youtube" && u && e.bitrate > 0 && /* @__PURE__ */ t(_e, { label: l("musiccreator.player.about.bitrate"), value: td(e.bitrate) }),
          e.source !== "youtube" && u && e.sampleRate > 0 && /* @__PURE__ */ t(_e, { label: l("musiccreator.player.about.sampleRate"), value: ad(e.sampleRate) }),
          e.source !== "youtube" && u && e.sizeBytes > 0 && /* @__PURE__ */ t(_e, { label: l("musiccreator.player.about.size"), value: ed(e.sizeBytes) }),
          C && /* @__PURE__ */ t(_e, { label: l("musiccreator.player.about.style"), value: C }),
          e.source === "youtube" && e.externalId && /* @__PURE__ */ t(_e, { label: "Video ID", value: e.externalId }),
          /* @__PURE__ */ t(_e, { label: l("musiccreator.player.about.format"), value: e.source === "youtube" ? "Streamed audio" : l(u ? "musiccreator.player.about.format.mp3" : "musiccreator.player.about.format.lyricSheet") })
        ] }) })
      ] })
    ] }) })
  ] });
}
function ld({
  tab: e,
  onTabChange: a,
  query: r,
  onQueryChange: o,
  resultType: n,
  onResultTypeChange: l,
  results: d,
  busy: b,
  error: p,
  status: m,
  providers: w,
  connectors: u,
  libraryTracks: y,
  playlists: x,
  playlistNameDraft: C,
  playlistBusy: f,
  favoriteIds: v,
  warmupIds: E,
  previewBusyId: N,
  addBusyId: _,
  savedYoutubeIds: j,
  player: H,
  onPreview: M,
  onAdd: z,
  onOpenTrack: $,
  onToggleFavorite: ae,
  onRemoveLibraryTrack: ue,
  onPlaylistNameDraftChange: Ge,
  onCreatePlaylist: he,
  onAddTrackToPlaylist: R,
  onRemoveTrackFromPlaylist: ne,
  onPlayPlaylist: $e,
  onDeletePlaylist: we,
  onConfigureConnector: Ua,
  onDisconnectConnector: Fe,
  onClose: Dt
}) {
  const [Y, Ze] = T(null), [K, Ne] = T({}), [Ut, Ve] = T(!1), [gt, ke] = T(null), yt = [
    { id: "search", label: "Search" },
    { id: "library", label: "Library", count: y.length },
    { id: "artists", label: "Artists", count: new Set(y.map((h) => h.artist || "Unknown")).size },
    { id: "albums", label: "Albums", count: new Set(y.map((h) => h.album || h.artist || "YouTube")).size },
    { id: "playlists", label: "Playlists", count: x.length },
    { id: "favorites", label: "Favorites", count: y.filter((h) => v.has(h.id)).length },
    { id: "sources", label: "Sources", count: w.length || 4 }
  ], Ee = (h) => {
    const I = H.state.trackId === h.id, O = I && H.state.loadingTrackId === h.id, ge = I && H.state.playing;
    return /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
        style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
        children: [
          /* @__PURE__ */ t(It, { track: h, size: 48, iconSize: 20, radius: 10 }),
          /* @__PURE__ */ s("button", { type: "button", onClick: () => $(h), className: "flex-1 min-w-0 text-left", children: [
            /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: h.title }),
            /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
              h.artist || "YouTube",
              h.album ? ` · ${h.album}` : "",
              h.durationMs ? ` · ${He(h.durationMs)}` : ""
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ae(h),
              className: "flex items-center justify-center rounded-lg",
              style: {
                width: 32,
                height: 32,
                color: v.has(h.id) ? "white" : "var(--text-secondary)",
                background: v.has(h.id) ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                border: "1px solid var(--border-subtle)"
              },
              title: v.has(h.id) ? "Remove favorite" : "Favorite",
              children: /* @__PURE__ */ t(ds, { size: 13, fill: v.has(h.id) ? "currentColor" : "none" })
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => H.toggle(h),
              className: "flex items-center gap-1.5 rounded-lg px-3",
              style: {
                height: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
              },
              children: [
                O ? /* @__PURE__ */ t(Z, { size: 12, className: "animate-spin" }) : ge ? /* @__PURE__ */ t(zt, { size: 12 }) : /* @__PURE__ */ t(ve, { size: 12 }),
                O ? "Loading" : ge ? "Pause" : "Play"
              ]
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => ue(h),
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              title: "Remove from music library",
              children: /* @__PURE__ */ t(ia, { size: 13 })
            }
          )
        ]
      },
      h.id
    );
  }, Ot = Array.from(
    y.reduce((h, I) => {
      const O = (I.artist || "Unknown artist").trim();
      return h.set(O, [...h.get(O) ?? [], I]), h;
    }, /* @__PURE__ */ new Map())
  ).sort((h, I) => h[0].localeCompare(I[0])), Ce = Array.from(
    y.reduce((h, I) => {
      const O = (I.album || I.artist || "YouTube collection").trim();
      return h.set(O, [...h.get(O) ?? [], I]), h;
    }, /* @__PURE__ */ new Map())
  ).sort((h, I) => h[0].localeCompare(I[0])), et = w.length > 0 ? w.map((h) => {
    const I = u.find((Ae) => Ae.provider === h.id), O = I?.connected ?? h.configured, ge = I?.oauthRequired ?? h.state === "oauth_required";
    return {
      id: h.id,
      name: h.name,
      state: O ? "Connected" : ge ? "OAuth required" : h.state.replace(/_/g, " "),
      body: I?.message ?? h.message,
      action: O ? "Manage" : ge ? "Coming soon" : "Configure",
      enabled: O,
      needs: h.needs,
      kind: h.kind,
      connector: I,
      oauthRequired: ge,
      configurable: I?.configurable ?? !ge
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
      connector: u.find((h) => h.provider === "spotify"),
      oauthRequired: !0,
      configurable: !1
    },
    {
      id: "lastfm",
      name: "Last.fm",
      state: u.find((h) => h.provider === "lastfm")?.connected ? "Connected" : "Metadata connector",
      body: "Artist bios, tags and now-playing style metadata. API key required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["apiKey"],
      kind: "metadata",
      connector: u.find((h) => h.provider === "lastfm"),
      oauthRequired: !1,
      configurable: !0
    },
    {
      id: "discogs",
      name: "Discogs",
      state: u.find((h) => h.provider === "discogs")?.connected ? "Connected" : "Metadata connector",
      body: "Release/catalog metadata and album artwork. Token required before live use.",
      action: "Configure",
      enabled: !1,
      needs: ["token"],
      kind: "catalog",
      connector: u.find((h) => h.provider === "discogs"),
      oauthRequired: !1,
      configurable: !0
    }
  ];
  return /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ s("div", { className: "flex-shrink-0 px-7 pt-6 pb-4", style: { borderBottom: "1px solid var(--border-subtle)" }, children: [
      /* @__PURE__ */ s("div", { className: "flex items-center justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ t("div", { style: { fontSize: 24, fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.03em" }, children: "Music" }),
          /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Search, artists, favorites and streamed tracks — separate from My Work." })
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
              onClick: Dt,
              className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
              style: { width: 32, height: 32, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              title: "Close music search",
              children: /* @__PURE__ */ t(de, { size: 14 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: yt.map((h) => /* @__PURE__ */ s(
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
        /* @__PURE__ */ t(Lt, { size: 16, style: { color: "var(--text-disabled)" } }),
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
        b && /* @__PURE__ */ t(Z, { size: 16, className: "animate-spin", style: { color: "var(--accent-primary)" } }),
        r && /* @__PURE__ */ t("button", { type: "button", onClick: () => o(""), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(de, { size: 16 }) })
      ] }),
      e === "search" && /* @__PURE__ */ s("div", { className: "mt-3 flex items-center justify-between gap-3 flex-wrap", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: ["tracks", "playlists"].map((h) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => l(h),
            className: "rounded-lg px-3 transition-all",
            style: {
              height: 28,
              fontSize: 11,
              fontWeight: n === h ? 900 : 700,
              color: n === h ? "white" : "var(--text-secondary)",
              background: n === h ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-titlebar)",
              border: "1px solid var(--border-subtle)",
              textTransform: "capitalize"
            },
            children: h
          },
          h
        )) }),
        /* @__PURE__ */ s("div", { className: "rounded-lg px-3 flex items-center gap-2", style: { height: 28, fontSize: 11, color: "var(--text-secondary)", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ t("span", { style: { width: 7, height: 7, borderRadius: "var(--radius-full)", background: "var(--status-success)" } }),
          "Provider: Auto / YouTube"
        ] })
      ] }),
      p && /* @__PURE__ */ t("div", { className: "mt-3", style: { fontSize: 12, color: "var(--status-danger)" }, children: p })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto invisible-scrollbar px-7 py-5", children: [
      e === "search" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
        r.trim().length < 2 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Type two letters. Results appear here, not in a floating overlay." }),
        r.trim().length >= 2 && !b && d.length === 0 && !p && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No results yet." }),
        b && d.length === 0 && Array.from({ length: 5 }).map((h, I) => /* @__PURE__ */ s(
          "div",
          {
            className: "flex items-center gap-3 rounded-xl px-3 py-2",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", opacity: 0.78 },
            children: [
              /* @__PURE__ */ t("div", { className: "animate-pulse", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "var(--bg-hover)" } }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 12, width: `${70 - I * 6}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)" } }),
                /* @__PURE__ */ t("div", { className: "animate-pulse", style: { height: 10, width: `${45 - I * 4}%`, borderRadius: "var(--radius-full)", background: "var(--bg-hover)", marginTop: 8 } })
              ] }),
              /* @__PURE__ */ t(Z, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)" } })
            ]
          },
          `music-search-skeleton-${I}`
        )),
        d.map((h) => {
          const I = fi(h.title, h.channel), O = j.has(h.id), ge = N === h.id, Ae = _ === h.id, Ht = E.has(h.id);
          return /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[var(--bg-hover)]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: [
                h.thumbnailUrl || Ma(h.id) ? /* @__PURE__ */ t("img", { src: h.thumbnailUrl || Ma(h.id), alt: "", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", objectFit: "cover" } }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center", style: { width: 56, height: 56, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(ja, { size: 20, style: { color: "white" } }) }),
                /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, fontWeight: 800, color: "var(--text-primary)" }, children: I.song }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }, children: [
                    I.artist || h.channel || "YouTube",
                    " · YouTube",
                    h.durationMs ? ` · ${He(h.durationMs)}` : ""
                  ] }),
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 2 }, children: h.title })
                ] }),
                Ht && !ge && /* @__PURE__ */ s("div", { className: "hidden md:flex items-center gap-1", style: { fontSize: 10, color: "var(--text-disabled)" }, children: [
                  /* @__PURE__ */ t(Z, { size: 10, className: "animate-spin" }),
                  " preloading"
                ] }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => M(h),
                    disabled: ge,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 700, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", background: "var(--bg-window)" },
                    children: [
                      ge ? /* @__PURE__ */ t(Z, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(ve, { size: 12 }),
                      ge ? "Starting" : "Play"
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => z(h),
                    disabled: O || Ae,
                    className: "flex items-center gap-1 rounded-md px-3 disabled:opacity-60",
                    style: { height: 32, fontSize: 11, fontWeight: 800, color: O ? "var(--text-disabled)" : "white", background: O ? "transparent" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", border: "1px solid var(--border-subtle)" },
                    children: [
                      Ae ? /* @__PURE__ */ t(Z, { size: 12, className: "animate-spin" }) : O ? /* @__PURE__ */ t(aa, { size: 12 }) : /* @__PURE__ */ t(xr, { size: 12 }),
                      Ae ? "Adding" : O ? "Saved" : "Add"
                    ]
                  }
                )
              ]
            },
            h.id
          );
        })
      ] }),
      e === "library" && /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: y.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No streamed tracks saved yet." }) : y.map(Ee) }),
      e === "favorites" && /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: y.filter((h) => v.has(h.id)).length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No favorites yet." }) : y.filter((h) => v.has(h.id)).map(Ee) }),
      e === "artists" && /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }, children: [
        Ot.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No artists yet." }),
        Ot.map(([h, I]) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => {
              I[0] && $(I[0]);
            },
            className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
            style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
            children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: h }),
              /* @__PURE__ */ s("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                I.length,
                " track",
                I.length === 1 ? "" : "s"
              ] })
            ]
          },
          h
        ))
      ] }),
      e === "albums" && /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }, children: [
        Ce.length === 0 && /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "No albums or source collections yet." }),
        Ce.map(([h, I]) => {
          const O = I[0];
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => {
                O && $(O);
              },
              className: "rounded-2xl p-4 text-left transition-all hover:scale-[1.01]",
              style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" },
              children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                O && /* @__PURE__ */ t(It, { track: O, size: 64, iconSize: 24, radius: 14 }),
                /* @__PURE__ */ s("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: h }),
                  /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }, children: [
                    O?.artist || "Mixed artists",
                    " · ",
                    I.length,
                    " track",
                    I.length === 1 ? "" : "s"
                  ] })
                ] })
              ] })
            },
            h
          );
        })
      ] }),
      e === "playlists" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ t("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center rounded-xl", style: { width: 54, height: 54, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }, children: /* @__PURE__ */ t(hs, { size: 22 }) }),
          /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", style: { minWidth: 220 }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 16, fontWeight: 900, color: "var(--text-primary)" }, children: "Playlists" }),
            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }, children: "Real SQLite-backed playlists, separate from My Work." })
          ] }),
          /* @__PURE__ */ t(
            "input",
            {
              value: C,
              onChange: (h) => Ge(h.target.value),
              onKeyDown: (h) => {
                h.key === "Enter" && he();
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
              onClick: he,
              disabled: f,
              className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
              style: { height: 34, fontSize: 12, fontWeight: 800, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
              children: [
                f ? /* @__PURE__ */ t(Z, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ t(xr, { size: 13 }),
                "Create"
              ]
            }
          )
        ] }) }),
        x.length === 0 ? /* @__PURE__ */ t("div", { className: "rounded-2xl p-8 text-center", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }, children: "Create a playlist, then add tracks from Library rows below." }) : x.map((h) => /* @__PURE__ */ s("div", { className: "rounded-2xl p-4", style: { background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
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
                  onClick: () => $e(h),
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
                  onClick: () => we(h.id),
                  className: "flex items-center justify-center rounded-lg",
                  style: { width: 30, height: 30, color: "var(--text-disabled)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
                  title: "Delete playlist",
                  children: /* @__PURE__ */ t(ia, { size: 13 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: h.items.length === 0 ? /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "Empty. Add tracks from Library." }) : h.items.map((I) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2 rounded-lg p-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
            /* @__PURE__ */ t(It, { track: I, size: 34, iconSize: 14, radius: 8 }),
            /* @__PURE__ */ s("button", { type: "button", onClick: () => $(I), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: I.title }),
              /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 10, color: "var(--text-disabled)" }, children: I.artist || "YouTube" })
            ] }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => ne(h.id, I.id),
                className: "flex items-center justify-center rounded-md",
                style: { width: 28, height: 28, color: "var(--text-disabled)" },
                title: "Remove from playlist",
                children: /* @__PURE__ */ t(de, { size: 13 })
              }
            )
          ] }, `${h.id}-${I.id}`)) }),
          y.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 flex flex-wrap gap-2", children: y.slice(0, 8).filter((I) => !h.items.some((O) => O.id === I.id)).map((I) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => R(h.id, I),
              className: "rounded-full px-3",
              style: { height: 28, fontSize: 11, fontWeight: 800, color: "var(--text-secondary)", background: "var(--bg-window)", border: "1px solid var(--border-subtle)" },
              children: [
                "+ ",
                I.title.slice(0, 28)
              ]
            },
            `${h.id}-add-${I.id}`
          )) })
        ] }, h.id))
      ] }),
      e === "sources" && /* @__PURE__ */ s("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }, children: [
        et.map((h) => /* @__PURE__ */ s(
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
                    children: h.name === "Spotify" ? "♬" : h.name === "YouTube" ? /* @__PURE__ */ t(ve, { size: 18 }) : h.kind === "catalog" ? /* @__PURE__ */ t(Fn, { size: 18 }) : /* @__PURE__ */ t(ut, { size: 18 })
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
                      const I = h.connector?.credentialSpecs ?? h.needs.map((O) => ({ name: O, label: O, secret: !0, required: !0 }));
                      Ne({}), ke(null), Ze({
                        id: h.id,
                        name: h.name,
                        body: h.body,
                        specs: I,
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
        Y && /* @__PURE__ */ s("div", { className: "rounded-2xl p-5", style: { gridColumn: "1 / -1", background: "var(--bg-titlebar)", border: "1px solid var(--border-subtle)" }, children: [
          /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { style: { fontSize: 17, fontWeight: 900, color: "var(--text-primary)" }, children: [
                "Configure ",
                Y.name
              ] }),
              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 8 }, children: Y.body })
            ] }),
            /* @__PURE__ */ t("button", { type: "button", onClick: () => Ze(null), style: { color: "var(--text-secondary)" }, children: /* @__PURE__ */ t(de, { size: 16 }) })
          ] }),
          Y.oauthRequired ? /* @__PURE__ */ t("div", { className: "mt-4 rounded-xl p-3", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }, children: "Spotify needs a real OAuth PKCE browser flow. JULI3TA does not fake token-paste connection; this remains visible as a follow-up connector." }) : /* @__PURE__ */ s(me, { children: [
            /* @__PURE__ */ t("div", { className: "mt-4 grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }, children: Y.specs.map((h) => /* @__PURE__ */ s("label", { className: "rounded-xl px-3 py-2", style: { background: "var(--bg-window)", border: "1px solid var(--border-subtle)" }, children: [
              /* @__PURE__ */ t("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-disabled)" }, children: h.required ? "Required" : "Optional" }),
              /* @__PURE__ */ t("div", { style: { marginTop: 4, fontSize: 12, fontWeight: 800, color: "var(--text-primary)" }, children: h.label || h.name }),
              /* @__PURE__ */ t(
                "input",
                {
                  value: K[h.name] ?? "",
                  type: h.secret ? "password" : "text",
                  onChange: (I) => Ne((O) => ({ ...O, [h.name]: I.target.value })),
                  className: "mt-2 w-full rounded-lg bg-transparent outline-none px-3",
                  style: { height: 34, color: "var(--text-primary)", border: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)", fontSize: 12 },
                  placeholder: h.name
                }
              )
            ] }, h.name)) }),
            gt && /* @__PURE__ */ t("div", { className: "mt-3", style: { color: "var(--status-danger)", fontSize: 12 }, children: gt }),
            /* @__PURE__ */ s("div", { className: "mt-4 flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  disabled: Ut || !Y.configurable,
                  onClick: () => {
                    Ve(!0), ke(null), Ua(Y.id, K).then(() => {
                      Ne({}), Ze(null);
                    }).catch((h) => ke(h.message || "Connector setup failed.")).finally(() => Ve(!1));
                  },
                  className: "flex items-center gap-1.5 rounded-lg px-3 disabled:opacity-50",
                  style: { height: 32, fontSize: 11, fontWeight: 900, color: "white", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" },
                  children: [
                    Ut ? /* @__PURE__ */ t(Z, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ t(aa, { size: 12 }),
                    "Verify + Save"
                  ]
                }
              ),
              Y.connected && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  disabled: Ut,
                  onClick: () => {
                    Ve(!0), ke(null), Fe(Y.id).then(() => Ze(null)).catch((h) => ke(h.message || "Disconnect failed.")).finally(() => Ve(!1));
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
function cd() {
  const e = Ks(), { t: a } = ht(), r = Qs(), o = al(), { state: n, dispatch: l } = Qo(), { addNotification: d } = il(), b = n.theme.mode, [p, m] = T("compose"), [w, u] = T(!1), [y, x] = T("creator"), [C, f] = T(null), [v, E] = T(""), [N, _] = T(""), [j, H] = T(null), [M, z] = T(""), [$, ae] = T(""), [ue, Ge] = T(!1), [he, R] = T(""), [ne, $e] = T(""), [we, Ua] = T(!0), [Fe, Dt] = T(!1), [Y, Ze] = T(null), [K, Ne] = T({}), [Ut, Ve] = T(!1), [gt, ke] = T(null), [yt, Ee] = T(null), [Ot, Ce] = T(null), [et, h] = T(!1), [I, O] = T(!1), [ge, Ae] = T(!1), [Ht, Oa] = T([]), Ir = ee(null), zr = ee(null), [Ha, Mr] = T(!1), [Le, Rr] = T("best"), [xi, na] = T(!1), [Be, jr] = T("mic"), [Ie, $a] = T(!1), [Pr, Dr] = T(0), [Ur, $t] = T(null), Or = ee(null), sa = ee([]), bt = ee(null), Fa = ee(0), Ft = ee(null), [ft, ze] = T("idle"), [Bt, W] = T(null), [wi, vt] = T(0), [Hr, $r] = T(0), [tt, Se] = T([]), [xt, X] = T(null), [wt, Fr] = T(""), [Wt, Br] = T("cards"), [We, at] = T(!1), [ki, la] = T("search"), [Ba, Si] = T(""), [qt, Ti] = T("tracks"), [_i, Wa] = T([]), [Ni, ca] = T(!1), [Ci, Me] = T(null), [Ei, Wr] = T(null), [Ai, qr] = T([]), [Li, Jr] = T([]), [rt, qa] = T({}), [Ii, Gr] = T(() => /* @__PURE__ */ new Set()), [zi, Vr] = T(null), [Mi, Yr] = T(null), [Kr, Xr] = T([]), [kt, Ja] = T([]), [Ri, Ga] = T(() => /* @__PURE__ */ new Set()), [Va, St] = T([]), [Ya, Qr] = T(""), [ji, Zr] = T(!1), eo = ee(/* @__PURE__ */ new Map()), Ka = ee(/* @__PURE__ */ new Map()), Xa = ee(/* @__PURE__ */ new Set()), [da, Jt] = T(null), [ua, to] = T(!1), [Qa, ao] = T(ri), [Pi, Za] = T(!1);
  te(() => {
    let i = !1;
    return (async () => {
      try {
        await Promise.all([
          Ec(),
          Pl()
        ]);
      } catch (U) {
        console.warn("[Juli3ta] Legacy migration failed (non-fatal):", U);
      }
      await El().catch((U) => {
        console.warn("[Juli3ta] music library bridge migration failed (non-fatal):", U);
      });
      const [c, g, k, S, A, P, J] = await Promise.allSettled([
        dl(),
        pr(),
        wl(),
        Co(),
        Nl(),
        Al("track"),
        Xt()
      ]);
      if (i) return;
      const pe = c.status === "fulfilled" ? c.value : [], je = g.status === "fulfilled" ? g.value.tracks.map((U) => ({ ...U, source: "juli3ta" })) : [];
      g.status === "fulfilled" && (Jt(g.value.rootPath), X((U) => U?.startsWith("Real file library unavailable") ? null : U)), c.status === "fulfilled" ? Se(Qt(je, pe)) : (console.error("[Juli3ta] listTracks failed:", c.reason), Se(Qt(je)), X("Could not load the browser cache — using the real files from ~/Music/JULI3TA.")), g.status === "rejected" && (console.warn("[Juli3ta] host file library unavailable:", g.reason), X("Real file library unavailable — generated songs will not be shared across browsers until the tray endpoint is back."));
      const st = new Set(je.map((U) => U.id)), Pe = new Set(pe.map((U) => U.id)), le = pe.filter((U) => !st.has(U.id) && ac(U)), be = je.filter((U) => !Pe.has(U.id));
      (le.length > 0 || be.length > 0) && (async () => {
        const U = [];
        for (const oe of le)
          try {
            const Q = await Io({ ...oe, source: "juli3ta" });
            U.push({ ...oe, ...Q, source: "juli3ta" });
          } catch (Q) {
            console.warn("[Juli3ta] host file backfill failed:", oe.id, Q);
          }
        for (const oe of be)
          try {
            await za({ ...oe, source: "juli3ta" });
          } catch (Q) {
            console.warn("[Juli3ta] standalone cache backfill failed:", oe.id, Q);
          }
        !i && (U.length > 0 || be.length > 0) && (Se((oe) => Qt(U, be, oe)), pr().then((oe) => Jt(oe.rootPath)).catch(() => {
        }));
      })(), k.status === "fulfilled" && ao(k.value), S.status === "fulfilled" && Oa(S.value), A.status === "fulfilled" && Ja(A.value), P.status === "fulfilled" && Ga(new Set(P.value.map((U) => U.entityId))), J.status === "fulfilled" && St(J.value);
    })(), () => {
      i = !0;
    };
  }, []), te(() => {
    if (!xt?.startsWith("Real file library unavailable")) return;
    let i = !1;
    const c = async () => {
      try {
        const k = await pr();
        if (i) return;
        Jt(k.rootPath), Se((S) => Qt(k.tracks.map((A) => ({ ...A, source: "juli3ta" })), S)), X((S) => S?.startsWith("Real file library unavailable") ? null : S);
      } catch {
      }
    }, g = window.setInterval(c, 4e3);
    return c(), () => {
      i = !0, window.clearInterval(g);
    };
  }, [xt]);
  const er = L(async (i) => {
    try {
      const c = await Io({ ...i, source: "juli3ta" }), g = { ...i, ...c, source: "juli3ta" };
      return await za(g), Jt(c.folderPath?.split("/").slice(0, -1).join("/") || da), X(null), Se((k) => Qt([g], k)), !0;
    } catch (c) {
      const g = c.message || "Real file save failed";
      return X(`Couldn't save "${i.title}" as a real file — ${g}.`), !1;
    }
  }, [da]), Di = L(async (i) => {
    ao(i);
    try {
      await kl(i);
    } catch (c) {
      console.warn("Settings save failed:", c);
    }
  }, []), pa = ce(
    () => e.state ? Ac(e.state.agents, e.state.included) : [],
    [e.state]
  ), [ma, Ui] = T([]), [Oi, Hi] = T(() => {
    try {
      return localStorage.getItem("tytus.music-creator.preferred-pod");
    } catch {
      return null;
    }
  }), [$i, ro] = T(!0), B = ma.find((i) => i.podId === Oi) ?? ma[0] ?? null, tr = L(async () => {
    ro(!0);
    const i = new AbortController(), c = await Mc(pa, i.signal);
    Ui(c), ro(!1);
  }, [pa]);
  te(() => {
    pa.length !== 0 && queueMicrotask(() => void tr());
  }, [pa, tr]);
  const Fi = L((i) => {
    Hi(i);
    try {
      localStorage.setItem("tytus.music-creator.preferred-pod", i);
    } catch {
    }
  }, []), Gt = ee(null), se = ee(null), Vt = ee(null), ha = ee(!1);
  te(() => () => {
    Gt.current?.abort(), se.current?.abort();
  }, []), te(() => {
    if (ft === "idle") {
      queueMicrotask(() => {
        vt(0), $r(0);
      });
      return;
    }
    const i = Date.now(), c = () => {
      const S = (Date.now() - i) / 1e3, A = ft === "lyrics" ? Math.min(0.95, S / 5) : Math.min(0.95, 1 - Math.exp(-S / 35));
      vt(A);
    };
    c();
    const g = setInterval(c, 250), k = setInterval(() => $r((S) => S + 1), 4500);
    return () => {
      clearInterval(g), clearInterval(k);
    };
  }, [ft]);
  const Yt = L((i) => {
    if (!i.lyricsPreview) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const g = `${Sa(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.lyrics.txt`, k = o.findChildByName(c, g);
    return k ? (o.writeFile(k.id, i.lyricsPreview), k.id) : o.createFile(c, g, i.lyricsPreview, {
      mimeType: "text/plain"
    });
  }, [o]), oo = L((i) => {
    if (!i.audioDataUrl) return null;
    const c = o.ensureUserFolder("Music");
    if (!c) return null;
    const g = `${Sa(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""))}.mp3`, k = o.findChildByName(c, g);
    return k ? k.id : o.createFile(c, g, "", {
      mimeType: "audio/mpeg",
      refTrackId: i.id
    });
  }, [o]), Bi = L(async () => {
    if (!B) {
      W(a("musiccreator.error.noPod"));
      return;
    }
    if (p === "restyle" && !yt) {
      W("Restyle needs a reference audio file. Drop one in below.");
      return;
    }
    if (ha.current) return;
    ha.current = !0, W(null), Gt.current?.abort();
    const i = new AbortController();
    Gt.current = i;
    try {
      const c = Qa.overridesByEndpoint[B.url] ?? {}, g = {
        ...B,
        models: {
          music: c.music || B.models.music,
          cover: c.cover || B.models.cover,
          lyrics: c.lyrics || B.models.lyrics,
          lyricsBackup: c.lyricsBackup || B.models.lyricsBackup,
          image: c.image || B.models.image,
          allIds: B.models.allIds
        }
      }, k = Ar(K);
      let S = N.trim(), A = $.trim(), P = M.trim(), J = null;
      if (!S && !ue) {
        if (!v.trim() && !(K.intent ?? "").trim()) {
          W(a("musiccreator.error.noInput"));
          return;
        }
        ze("lyrics");
        const ie = [];
        v.trim() && ie.push(v.trim());
        const ir = (K.intent ?? "").trim();
        ir && ie.push(`User intent (must respect): ${ir}`), k && ie.push(`Musical context: ${k}`), j && ie.push(`Structure: ${j.prompt}`);
        const Mn = ie.join(`

`);
        J = await Dc(g, Mn, i.signal), S = J.lyrics, A || (A = J.song_title), P || (P = J.style_tags);
      } else !S && ue && (S = `[Intro]
[Instrumental]
[Outro]`);
      if (J && (_(J.lyrics), A === "Untitled" && (A = ""), A && !$.trim() && ae(A), P && !M.trim() && z(P), J.usedFallback && X(
        `Primary lyrics model errored — used backup chat model "${g.models.lyricsBackup ?? "unknown"}" instead.`
      )), S.length > _t) {
        W(a("musiccreator.error.lyricsTooLong", { count: S.length, max: _t })), ze("idle");
        return;
      }
      if (A.trim() || (A = _c(S, v, P || M), A && A !== "Untitled" && !$.trim() && ae(A)), p === "lyricsOnly") {
        const ie = {
          id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          title: (A || a("musiccreator.track.untitled")) + " (lyrics)",
          styleTags: P || "—",
          lyricsPreview: S,
          // store the full text — used by Load
          durationMs: 0,
          bitrate: 0,
          sampleRate: 0,
          sizeBytes: 0,
          createdAt: Date.now(),
          audioDataUrl: "",
          // no audio
          specsJson: At(K) > 0 ? JSON.stringify(K) : "",
          // Lyric sheets keep whatever cover art the user attached in
          // the form (uploaded or pre-generated) — image autogen during
          // Write Lyrics is skipped to keep the call cheap.
          coverDataUrl: he,
          theme: v
        };
        await er(ie) && Yt(ie), ze("idle"), vt(0);
        return;
      }
      if (p === "restyle" && !yt) {
        W("Restyle needs a reference audio file. Drop one in below."), ze("idle");
        return;
      }
      ze("song");
      const pe = [P, k].filter((ie) => ie && ie.length > 0).join(". "), je = Uc(
        g,
        {
          lyrics: S,
          prompt: pe || void 0,
          instrumental: ue,
          refAudioBase64: p === "restyle" ? yt ?? void 0 : void 0
        },
        i.signal
      ), st = we && !he && !!g.models.image, Pe = he, le = st ? Tr(
        g,
        (ne.trim() || Aa(A, v, P || M)).slice(0, 1500),
        i.signal
      ).catch((ie) => {
        if (ie.name === "AbortError") throw ie;
        return console.warn("[Juli3ta] Cover-art generation failed:", ie), X(`Cover-art skipped: ${ie.message}`), Pe;
      }) : Promise.resolve(Pe), be = await Promise.allSettled([je, le]), U = be[0], oe = be[1];
      if (U.status === "rejected")
        throw i.abort(), U.reason;
      const Q = U.value, Xe = oe.status === "fulfilled" ? oe.value : Pe;
      if (!Q?.data?.audio || typeof Q.data.audio != "string" || Q.data.audio.length < 100) {
        const ie = Q?.trace_id ? ` (trace ${Q.trace_id})` : "";
        throw new Error(`Music gen returned no audio data${ie}. Try again or pick a different model in Settings.`);
      }
      const In = `data:audio/mpeg;base64,${Q.data.audio}`, zn = p === "restyle" ? " (restyle)" : "", Qe = {
        id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        title: (A || a("musiccreator.track.untitled")) + zn,
        styleTags: P || "—",
        lyricsPreview: S,
        // store the full text — used by Load
        durationMs: Q.data.duration_ms ?? 0,
        bitrate: Q.data.bitrate ?? 0,
        sampleRate: Q.data.sample_rate ?? 0,
        sizeBytes: Q.data.size_bytes ?? 0,
        createdAt: Date.now(),
        audioDataUrl: In,
        specsJson: At(K) > 0 ? JSON.stringify(K) : "",
        coverDataUrl: Xe,
        theme: v
      };
      R(Xe), console.info("[Juli3ta] Saving generated song:", { id: Qe.id, title: Qe.title, durationMs: Qe.durationMs, sizeBytes: Qe.sizeBytes }), await er(Qe) && (oo(Qe), Yt(Qe), d({
        appId: "musiccreator",
        appName: "JULI3TA",
        appIcon: "Sparkles",
        title: a("musiccreator.notify.songReadyTitle"),
        message: a("musiccreator.notify.songReadyBody", { title: Qe.title }),
        isRead: !1
      })), ze("idle"), vt(0);
    } catch (c) {
      if (c.name === "AbortError") {
        ze("idle");
        return;
      }
      console.error("[Juli3ta] Generate failed:", c), W(c.message || "Generation failed — check the console for details."), ze("idle"), vt(0);
    } finally {
      ha.current = !1;
    }
  }, [
    B,
    v,
    N,
    $,
    M,
    K,
    j,
    ue,
    p,
    yt,
    a,
    er,
    Qa,
    oo,
    Yt,
    d,
    we,
    he,
    ne
  ]), Wi = () => Ir.current?.click(), io = ee(0), ot = L(async (i, c) => {
    const g = ++io.current, k = () => io.current === g;
    W(null), h(!0), Ee(null), ke(c), Ce(null);
    try {
      if (Le === "mix") {
        const S = await Vl(i);
        if (!k()) return;
        Ee(S.base64);
        const A = S.sourceDurationSec / 60;
        if (S.segments.length > 1) {
          const P = S.segments.map((J) => `${Math.floor(J.startSec / 60)}:${Math.floor(J.startSec % 60).toString().padStart(2, "0")}`).join(" + ");
          Ce(
            `Mixed ${S.segments.length} iconic moments (${S.durationSec.toFixed(0)} s) from ${A.toFixed(1)} min — at ${P}`
          );
        } else
          Ce(`Using whole clip (${S.durationSec.toFixed(0)} s)`);
      } else {
        const S = await mi(i);
        if (!k()) return;
        Ee(S.base64);
        const A = S.sourceDurationSec / 60, P = S.startSec / 60, J = S.startSec < 60 ? `${S.startSec.toFixed(1)} s` : `${Math.floor(P)}:${Math.floor(S.startSec % 60).toString().padStart(2, "0")}`;
        Ce(
          S.sourceDurationSec <= S.durationSec + 0.5 ? `Using whole clip (${S.durationSec.toFixed(0)} s)` : `Auto-picked best ${S.durationSec.toFixed(0)} s starting at ${J} of ${A.toFixed(1)} min`
        );
      }
    } catch (S) {
      if (!k()) return;
      W(S.message || "Could not analyze that audio."), ke(null);
    } finally {
      k() && h(!1);
    }
  }, [Le]), qi = async () => {
    $t(null);
    try {
      let i;
      if (Be === "tab") {
        const S = navigator.mediaDevices;
        if (!S.getDisplayMedia)
          throw new Error("Tab audio capture is not supported in this browser. Use mic instead.");
        i = await S.getDisplayMedia({ video: !0, audio: !0 });
        for (const A of i.getVideoTracks())
          A.stop(), i.removeTrack(A);
        if (i.getAudioTracks().length === 0)
          throw new Error('No audio in the selected tab. In the share dialog, tick "Share tab audio".');
      } else
        i = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      bt.current = i;
      const g = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ].find((S) => MediaRecorder.isTypeSupported(S)) || "", k = new MediaRecorder(i, g ? { mimeType: g } : void 0);
      sa.current = [], k.ondataavailable = (S) => {
        S.data && S.data.size > 0 && sa.current.push(S.data);
      }, k.onstop = async () => {
        try {
          const S = new Blob(sa.current, {
            type: sa.current[0]?.type || g || "audio/webm"
          });
          if (S.size === 0) {
            $t("Recording was empty.");
            return;
          }
          const A = new FileReader();
          A.onerror = () => $t("Could not read the recording."), A.onload = () => {
            const P = typeof A.result == "string" ? A.result : "", J = {
              id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
              name: `${Be === "tab" ? "Tab audio" : "Recording"} ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
              durationMs: Date.now() - Fa.current,
              mimeType: S.type || g || "audio/webm",
              audioDataUrl: P,
              createdAt: Date.now()
            };
            (async () => {
              try {
                await li(J), Oa((pe) => [J, ...pe]);
              } catch (pe) {
                console.warn("Recording save failed", pe), $t("Could not save the recording. Try again.");
              }
            })(), na(!1), ot(S, J.name);
          }, A.readAsDataURL(S);
        } finally {
          bt.current?.getTracks().forEach((S) => S.stop()), bt.current = null;
        }
      }, k.start(250), Or.current = k, Fa.current = Date.now(), Dr(0), $a(!0), Ft.current = setInterval(() => {
        Dr(Date.now() - Fa.current);
      }, 100);
    } catch (i) {
      $t(i.message || "Could not start recording."), bt.current?.getTracks().forEach((c) => c.stop()), bt.current = null, $a(!1);
    }
  }, Ji = () => {
    const i = Or.current;
    i && i.state !== "inactive" && i.stop(), Ft.current && clearInterval(Ft.current), $a(!1);
  };
  te(() => () => {
    bt.current?.getTracks().forEach((i) => i.stop()), Ft.current && clearInterval(Ft.current);
  }, []);
  const Gi = (i) => {
    const c = i.target.files?.[0];
    if (i.target.value = "", !!c) {
      if (c.size > 50 * 1024 * 1024) {
        W("Reference audio is too big. Max 50 MB.");
        return;
      }
      ot(c, c.name);
    }
  }, Vi = (i) => {
    O(!1), ot(i.audioDataUrl, i.name);
  }, Yi = () => {
    O(!0), Co().then((i) => Oa(i)).catch(() => {
    });
  }, Ki = () => Ae(!0), Xi = (i) => {
    if (Ae(!1), !i.audioDataUrl) return;
    const c = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
    ot(i.audioDataUrl, `${c}.mp3`);
  }, Qi = () => {
    Ee(null), ke(null), Ce(null);
  }, Zi = () => {
    Gt.current?.abort(), ze("idle");
  }, Ye = L(async (i, c, g) => {
    if (!B) throw new Error("No endpoint connected");
    const k = (le) => {
      const be = le, U = be.choices?.[0], oe = [
        U?.message?.content,
        U?.delta?.content,
        U?.text,
        be.output_text
      ];
      for (const Q of oe)
        if (typeof Q == "string" && Q.trim().length > 0) return Q.trim();
      return "";
    }, S = (le) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl|rerank/i.test(le), A = /* @__PURE__ */ new Set(), P = [], J = (le) => {
      le && !A.has(le) && (A.add(le), P.push(le));
    };
    if (J(B.models.lyricsBackup), B.models.allIds.filter(S).forEach(J), P.length === 0)
      throw new Error("No chat model available on this endpoint. Pick a different connection in Settings.");
    const pe = typeof c == "string" ? c : JSON.stringify(c), je = g?.temperature ?? 0.5, st = Math.max(g?.maxTokens ?? 800, 400), Pe = 45e3;
    return Da(P, async (le) => {
      const be = Rt(g?.signal, Pe);
      let U;
      try {
        U = await fetch(`${B.url}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${B.apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: le,
            messages: [
              { role: "system", content: i },
              { role: "user", content: pe }
            ],
            temperature: je,
            max_tokens: st
          }),
          signal: be.signal
        });
      } catch (Xe) {
        throw Xe.name === "TimeoutError" ? new Error(`AI assist timed out after ${Pe / 1e3}s.`) : Xe;
      } finally {
        be.dispose();
      }
      if (!U.ok) {
        const Xe = await U.text().catch(() => "");
        throw new ye(U.status, Xe, `AI assist HTTP ${U.status}: ${Xe.slice(0, 200)}`);
      }
      const oe = await U.json(), Q = k(oe);
      if (!Q)
        throw console.warn("[Juli3ta] empty AI assist content from", le, oe), new ye(502, "", `Model "${le}" returned empty content`);
      return Q.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
    }, "chat-assist");
  }, [B]), en = L(async () => {
    if (B) {
      Ve(!0), W(null);
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
        se.current?.abort(), se.current = new AbortController();
        const c = await Ye(i, {
          theme: v || null,
          style: M || null,
          lyrics: N ? N.slice(0, 1500) : null,
          existing_specs: At(K) > 0 ? K : null
        }, {
          temperature: 0.4,
          // The full schema is ~6 sections × multiple fields. 800 tokens
          // truncates roughly half the response and leaves the JSON
          // unparseable mid-string. 2000 fits a complete fill comfortably.
          maxTokens: 2e3,
          signal: se.current.signal
        }), g = vi(c) ?? c;
        let k;
        try {
          k = JSON.parse(g);
        } catch {
          throw new Error(`Optimize returned non-JSON: ${c.slice(0, 160)}`);
        }
        Ne((S) => ({ ...k, intent: S.intent }));
      } catch (i) {
        W(i.message || "Optimize failed.");
      } finally {
        Ve(!1);
      }
    }
  }, [B, v, M, N, K, Ye]), [Te, it] = T(null), no = L(async () => {
    if (!B) return;
    if (!B.models.image) {
      W(`This endpoint (${B.label}) doesn't expose an image model. Pick one in Settings → Cover art, or upload your own image.`);
      return;
    }
    if (Fe) return;
    se.current?.abort(), se.current = new AbortController();
    const i = se.current.signal;
    Dt(!0), W(null);
    try {
      const c = (ne.trim() || Aa($, v, M)).slice(0, 1500), g = await Tr(B, c, i);
      if (i.aborted) return;
      R(g), Y && Vt.current?.(Y, g);
    } catch (c) {
      if (c.name === "AbortError") return;
      W(c.message || "Cover-art generation failed.");
    } finally {
      Dt(!1);
    }
  }, [B, ne, $, v, M, Fe, Y]), so = L((i) => {
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
      const g = c.result;
      typeof g == "string" && g.startsWith("data:image/") && (R(g), Y && Vt.current?.(Y, g));
    }, c.readAsDataURL(i);
  }, [Y]), tn = L(async () => {
    if (!Te) {
      it("theme"), W(null);
      try {
        const i = "You are a creative songwriter. Given a Style description (genre, mood, instrumentation hints), write a vivid one-paragraph THEME for the song — a setting, a story arc, an emotional core. Keep it 2-4 sentences, evocative but specific. Plain prose only, no headers, no markdown, no quotes.";
        se.current?.abort(), se.current = new AbortController();
        const c = await Ye(i, {
          style: M || "pop",
          existing_theme: v || null
        }, { temperature: 0.85, maxTokens: 200, signal: se.current.signal });
        E(c);
      } catch (i) {
        W(i.message || "Theme inspiration failed.");
      } finally {
        it(null);
      }
    }
  }, [Te, Ye, M, v]), an = L(async () => {
    if (!Te) {
      it("style"), W(null);
      try {
        const i = 'You are a music-production assistant. Given a song THEME, propose a Style description: a comma-separated list of genre + mood + tempo + instrument cues (8-12 tags). Plain text, lowercase, comma-separated, no headers, no markdown, no surrounding prose. Example: "indie folk, acoustic, melancholic, 80 bpm, fingerpicked guitar, soft female vocals, reverb-heavy".';
        se.current?.abort(), se.current = new AbortController();
        const c = await Ye(i, {
          theme: v || "a quiet evening",
          existing_style: M || null
        }, { temperature: 0.7, maxTokens: 120, signal: se.current.signal });
        z(c.replace(/^["']|["']$/g, ""));
      } catch (i) {
        W(i.message || "Style suggestion failed.");
      } finally {
        it(null);
      }
    }
  }, [Te, Ye, v, M]), rn = L(async () => {
    if (!Te) {
      if (!N.trim()) {
        W("Nothing to polish — write some lyrics first.");
        return;
      }
      it("lyrics"), W(null);
      try {
        const i = "You are a senior songwriter. Polish the user's lyrics for flow, rhyme, imagery, and structural balance. Preserve the user's intent and language. Keep [Verse], [Chorus], [Bridge], [Intro], [Outro], [Inst] section markers if present (or add appropriate ones). Return ONLY the polished lyrics — no commentary, no markdown, no quotes.";
        se.current?.abort(), se.current = new AbortController();
        const c = await Ye(i, {
          style: M || null,
          lyrics: N
        }, { temperature: 0.6, maxTokens: 1200, signal: se.current.signal });
        if (c.length > _t) {
          W(`Polished lyrics exceeded ${_t} chars (${c.length}). Trimming the original first might help.`);
          return;
        }
        _(c);
      } catch (i) {
        W(i.message || "Lyrics polish failed.");
      } finally {
        it(null);
      }
    }
  }, [Te, Ye, M, N]), on = (i) => {
    z((c) => c ? `${c}, ${i.toLowerCase()}` : i.toLowerCase());
  }, lo = () => {
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
  }, co = L((i) => {
    Se((c) => c.filter((g) => g.id !== i)), pl(i).catch((c) => console.warn("Track cache delete failed:", c)), ec(i).catch((c) => console.warn("Track file delete failed:", c));
  }, []), nn = L(async () => {
    if (!ua) {
      to(!0);
      try {
        const i = await tc();
        Jt(i), d({
          appId: "musiccreator",
          appName: "JULI3TA",
          appIcon: "FolderOpen",
          title: "JULI3TA folder opened",
          message: i,
          isRead: !1
        });
      } catch (i) {
        X(`Could not open JULI3TA folder — ${i.message || i}`);
      } finally {
        to(!1);
      }
    }
  }, [d, ua]), ga = L(async (i, c) => {
    const g = c.trim().slice(0, 200) || "Untitled";
    Se((k) => k.map((S) => S.id === i ? { ...S, title: g } : S));
    try {
      await ml(i, g), X(null);
    } catch (k) {
      const S = k.message || "Database write failed";
      X(`Couldn't rename track — ${S}.`);
    }
  }, []), ar = L(async (i, c) => {
    Se((g) => g.map((k) => k.id === i ? { ...k, coverDataUrl: c } : k));
    try {
      await hl(i, c), X(null);
    } catch (g) {
      const k = g.message || "Database write failed";
      X(`Couldn't save cover art — ${k}.`);
    }
  }, []);
  te(() => {
    Vt.current = ar;
  }, [ar]);
  const uo = L(async (i, c) => {
    Se((g) => g.map((k) => k.id === i ? { ...k, styleTags: c || "—" } : k));
    try {
      await gl(i, c), X(null);
    } catch (g) {
      const k = g.message || "Database write failed";
      X(`Couldn't save style — ${k}.`);
    }
  }, []), po = L(async (i, c) => {
    Se((g) => g.map((k) => k.id === i ? { ...k, lyricsPreview: c } : k));
    try {
      await yl(i, c), X(null);
    } catch (g) {
      const k = g.message || "Database write failed";
      X(`Couldn't save lyrics — ${k}.`);
    }
  }, []), mo = L(async (i, c) => {
    Se((g) => g.map((k) => k.id === i ? { ...k, specsJson: c } : k));
    try {
      await bl(i, c), X(null);
    } catch (g) {
      const k = g.message || "Database write failed";
      X(`Couldn't save specs — ${k}.`);
    }
  }, []), ho = L(async (i, c) => {
    Se((g) => g.map((k) => k.id === i ? { ...k, theme: c } : k));
    try {
      await fl(i, c), X(null);
    } catch (g) {
      const k = g.message || "Database write failed";
      X(`Couldn't save theme — ${k}.`);
    }
  }, []);
  te(() => {
    if (!Y) return;
    const i = Y, c = setTimeout(() => {
      const g = tt.find((pe) => pe.id === i);
      if (!g) return;
      const k = $.trim() || g.title, S = M.trim(), A = v, P = At(K) > 0 ? JSON.stringify(K) : "", J = g.styleTags === "—" ? "" : g.styleTags || "";
      g.title !== k && ga(i, k), J !== S && uo(i, S), (g.lyricsPreview || "") !== N && po(i, N), (g.specsJson || "") !== P && mo(i, P), (g.theme || "") !== A && ho(i, A);
    }, 600);
    return () => clearTimeout(c);
  }, [Y, $, M, v, N, K, tt, ga, uo, po, mo, ho]);
  const [go, yo] = T(null), [sn, bo] = T(!1), rr = L((i) => {
    _(i.lyricsPreview ?? ""), z(i.styleTags && i.styleTags !== "—" ? i.styleTags : ""), E(i.theme ?? "");
    const c = i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
    if (ae(c), Ge(!1), i.specsJson)
      try {
        Ne(JSON.parse(i.specsJson));
      } catch {
        Ne({});
      }
    else
      Ne({});
    R(i.coverDataUrl ?? ""), $e(""), Ze(i.id), W(null), H(null), Ge(!1), xe(i) ? i.source === "youtube" ? (m("restyle"), Ee(null), ke(null), Ce(null), W("Remote reference extraction is not installed yet. Play/save works; restyle from online music is next.")) : (m("restyle"), ot(i.audioDataUrl, `${c}.mp3`)) : (Ee(null), ke(null), Ce(null), m("lyricsOnly"));
  }, [ot]), fo = L((i) => {
    const c = Yt(i);
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
  }, [Yt, l, d, a]), ya = L((i, c, g, k) => {
    const S = o.ensureUserFolder("Desktop");
    if (!S) return;
    const A = o.findChildByName(S, i);
    let P;
    if (A)
      g.refTrackId || o.writeFile(A.id, c), P = A.id;
    else {
      P = o.createFile(S, i, c, g);
      const J = Array.from(k).reduce((st, Pe) => st + Pe.charCodeAt(0), 0), pe = J % 6 + 1, je = Math.floor(J / 6) % 4;
      l({
        type: "ADD_DESKTOP_ICON",
        icon: {
          name: i,
          icon: tl(i),
          fileSystemNodeId: P,
          position: { x: 16 + pe * 80, y: 16 + je * 90 },
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
  }, [o, l, d, a]), ln = L((i) => {
    if (!i.audioDataUrl) return;
    const c = Sa(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    ya(`${c}.mp3`, "", { mimeType: "audio/mpeg", refTrackId: i.id }, i.id);
  }, [ya]), cn = L((i) => {
    if (!i.lyricsPreview) return;
    const c = Sa(i.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""));
    ya(`${c}.lyrics.txt`, i.lyricsPreview, { mimeType: "text/plain" }, `${i.id}-lyrics`);
  }, [ya]), dn = L((i) => {
    at(!1), x("player"), f(i.id);
  }, []), qe = L((i) => {
    const c = i.dataTransfer.getData(ta);
    if (!c) return null;
    try {
      return JSON.parse(c);
    } catch {
      return null;
    }
  }, []), un = L((i) => {
    const c = qe(i);
    if (c && c.lyricsPreview) {
      i.preventDefault(), _(c.lyricsPreview);
      const g = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "");
      !$.trim() && g && ae(g), !M.trim() && c.styleTags && c.styleTags !== "—" && z(c.styleTags);
      return;
    }
  }, [qe, $, M]), pn = L((i) => {
    const c = qe(i);
    c && c.styleTags && c.styleTags !== "—" && (i.preventDefault(), z((g) => g ? `${g}, ${c.styleTags}` : c.styleTags));
  }, [qe]), mn = L((i) => {
    const c = qe(i);
    if (c) {
      i.preventDefault();
      const g = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, ""), k = c.styleTags && c.styleTags !== "—" ? `Inspired by "${g}" — ${c.styleTags}` : `Inspired by "${g}"`;
      E(k);
    }
  }, [qe]), hn = L((i) => {
    const c = qe(i);
    c && (i.preventDefault(), ae(c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "")));
  }, [qe]), ba = (i) => {
    i.dataTransfer.types.includes(ta) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
  }, vo = N.length, gn = M.length, q = ft !== "idle", yn = ce(() => ({
    appLabel: "JULI3TA",
    groups: [
      {
        id: "song",
        label: "Song",
        items: [
          { id: "new", label: "New Song", onSelect: () => {
            Gt.current?.abort(), se.current?.abort(), ha.current = !1, m("compose"), E(""), _(""), z(""), ae(""), Ne({}), H(null), Ge(!1), R(""), $e(""), Mr(!1), Ee(null), ke(null), Ce(null), W(null), X(null), ze("idle"), vt(0), it(null), Dt(!1), Ve(!1), Ze(null);
          } },
          { id: "surprise", label: "Surprise me…", onSelect: () => lo() },
          { id: "mode-restyle", label: "Restyle Mode", onSelect: () => m("restyle") },
          { id: "mode-lyrics", label: "Lyrics Only Mode", onSelect: () => m("lyricsOnly") }
        ]
      },
      {
        id: "view",
        label: "View",
        items: [
          { id: "view-creator", label: "Creator", onSelect: () => x("creator") },
          { id: "view-player", label: "Player", onSelect: () => x("player") },
          { id: "open-help", label: "How it works…", onSelect: () => u(!0) },
          { id: "open-settings", label: "JULI3TA Settings…", onSelect: () => Za(!0) }
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
  Xs(r?.id ?? null, yn);
  const Ke = ce(
    () => tt.filter(yi),
    [tt]
  ), nt = ce(() => {
    const i = wt.trim().toLowerCase();
    return i ? Ke.filter((c) => c.title.toLowerCase().includes(i) || c.styleTags.toLowerCase().includes(i)) : Ke;
  }, [Ke, wt]), Kt = L((i) => {
    i.slice(0, 4).forEach((c) => {
      const g = Ta(c.id), k = rt[g];
      k && Date.now() - k.resolvedAt < 5400 * 1e3 || Xa.current.has(c.id) || (Xa.current.add(c.id), Gr((S) => new Set(S).add(c.id)), ur(c.id).then((S) => {
        qa((A) => ({
          ...A,
          [g]: { src: S.proxyUrl, resolvedAt: Date.now() }
        }));
      }).catch(() => {
      }).finally(() => {
        Xa.current.delete(c.id), Gr((S) => {
          const A = new Set(S);
          return A.delete(c.id), A;
        });
      }));
    });
  }, [rt]);
  te(() => {
    if (!We) return;
    const i = new AbortController();
    return Promise.allSettled([
      Yl(i.signal),
      Ao(i.signal),
      Lo(i.signal)
    ]).then(([c, g, k]) => {
      c.status === "fulfilled" ? Wr(c.value) : Wr(null), g.status === "fulfilled" && qr(g.value), k.status === "fulfilled" && Jr(k.value);
    }), () => i.abort();
  }, [We]), te(() => {
    if (!We) return;
    const i = (c) => {
      c.key === "Escape" && at(!1);
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [We]), te(() => {
    if (!We) return;
    const i = Ba.trim();
    if (i.length < 2) {
      const A = window.setTimeout(() => {
        Wa([]), Me(null), ca(!1);
      }, 0);
      return () => window.clearTimeout(A);
    }
    const c = `${qt}:${i.toLowerCase()}`, g = eo.current.get(c);
    if (g) {
      Wa(g), ca(!1), Me(null), Kt(g);
      return;
    }
    const k = new AbortController(), S = setTimeout(() => {
      ca(!0), Me(null);
      let A = Ka.current.get(c);
      A || (A = Zl(i, qt, 20, k.signal).then((P) => qt === "playlists" ? P.results.playlists : P.results.tracks).catch(() => Ql(i, 20, k.signal)).finally(() => {
        Ka.current.delete(c);
      }), Ka.current.set(c, A)), A.then((P) => {
        eo.current.set(c, P), Wa(P), Kt(P);
      }).catch((P) => {
        k.signal.aborted || Me(P.message || "Music search failed.");
      }).finally(() => {
        k.signal.aborted || ca(!1);
      });
    }, 120);
    return () => {
      k.abort(), clearTimeout(S);
    };
  }, [Ba, qt, We, Kt]);
  const fa = L(async () => {
    const [i, c] = await Promise.allSettled([
      Ao(),
      Lo()
    ]);
    i.status === "fulfilled" && qr(i.value), c.status === "fulfilled" && Jr(c.value);
  }, []), bn = L(async (i, c) => {
    await Kl(i, c), await fa(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source connected",
      message: `${i} verified and saved to the OS keychain.`,
      isRead: !1
    });
  }, [d, fa]), fn = L(async (i) => {
    await Xl(i), await fa(), d({
      appId: "musiccreator",
      appName: "JULI3TA",
      appIcon: "Music",
      title: "Music source disconnected",
      message: `${i} credentials removed from the OS keychain.`,
      isRead: !1
    });
  }, [d, fa]), vn = ce(
    () => new Set(kt.filter((i) => i.externalId).map((i) => i.externalId)),
    [kt]
  ), va = L((i, c) => {
    const g = fi(i.title, i.channel);
    return {
      id: c?.id ?? Ta(i.id),
      title: g.song || i.title || "Untitled",
      styleTags: "YouTube",
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
      thumbnailUrl: i.thumbnailUrl || Ma(i.id),
      artist: g.artist || i.channel || "YouTube",
      album: i.channel ?? ""
    };
  }, []), xn = L(async (i, c) => {
    if (i.audioDataUrl && !c?.force) return i.audioDataUrl;
    if (!bi(i) || !i.externalId) return i.audioDataUrl || null;
    const g = Ta(i.externalId), k = rt[g] ?? rt[i.id];
    if (!c?.force && k && Date.now() - k.resolvedAt < 5400 * 1e3) return k.src;
    const S = await ur(i.externalId);
    return qa((A) => ({ ...A, [g]: { src: S.proxyUrl, resolvedAt: Date.now() } })), S.proxyUrl;
  }, [rt]), or = ce(
    () => [...Kr, ...kt, ...nt],
    [Kr, kt, nt]
  ), xo = ee(null), Re = Oc(or, xo, xn), wn = L((i) => {
    const c = i.items.find(xe);
    c && (Xr((g) => [
      ...i.items.filter((k) => !g.some((S) => S.id === k.id)),
      ...g
    ]), f(c.id), at(!1), x("player"), Re.play(c));
  }, [Re]), kn = L(async (i) => {
    await zl(i), St(await Xt());
  }, []), Sn = L(async (i) => {
    Me(null), Vr(i.id);
    try {
      const c = Ta(i.id), g = rt[c], k = g && Date.now() - g.resolvedAt < 5400 * 1e3 ? { videoId: i.id, proxyUrl: g.src, durationMs: i.durationMs } : await ur(i.id), S = va(
        { ...i, durationMs: i.durationMs ?? k.durationMs ?? 0 },
        { id: c, audioDataUrl: k.proxyUrl }
      );
      Xr((A) => [S, ...A.filter((P) => P.id !== S.id)]), qa((A) => ({ ...A, [c]: { src: k.proxyUrl, resolvedAt: Date.now() } })), f(S.id), x("player"), Re.play(S);
    } catch (c) {
      Me(c.message || "Could not start preview.");
    } finally {
      Vr(null);
    }
  }, [Re, va, rt]), Tn = L(async (i) => {
    Yr(i.id);
    const c = va(i);
    try {
      await si(c), Ja((g) => [c, ...g.filter((k) => k.id !== c.id)]), f(c.id), la("library"), x("player"), Kt([i]), Va.length > 0;
    } catch (g) {
      Me(g.message || "Could not save track.");
    } finally {
      Yr(null);
    }
  }, [va, Kt, Va.length]), _n = L((i) => {
    Ga((c) => {
      const g = new Set(c);
      return g.has(i.id) ? g.delete(i.id) : g.add(i.id), g;
    }), Ll({
      kind: "track",
      entityId: i.id,
      provider: i.source ?? "youtube",
      title: i.title
    }).catch((c) => console.warn("Favorite toggle failed:", c));
  }, []), Nn = L(async () => {
    const i = Ya.trim() || "New Playlist";
    Zr(!0);
    try {
      const c = await Il(i);
      St((g) => [c, ...g]), Qr("");
    } catch (c) {
      Me(c.message || "Could not create playlist.");
    } finally {
      Zr(!1);
    }
  }, [Ya]), Cn = L(async (i, c) => {
    try {
      await Ml(i, c);
      const g = await Xt();
      St(g);
    } catch (g) {
      Me(g.message || "Could not add to playlist.");
    }
  }, []), En = L(async (i, c) => {
    try {
      await Rl(i, c);
      const g = await Xt();
      St(g);
    } catch (g) {
      Me(g.message || "Could not remove from playlist.");
    }
  }, []), An = L((i) => {
    Ja((c) => c.filter((g) => g.id !== i.id)), Ga((c) => {
      const g = new Set(c);
      return g.delete(i.id), g;
    }), Cl(i.id).then(() => Xt().then(St)).catch((c) => console.warn("Library track delete failed:", c));
  }, []), Ln = L((i) => {
    f(i.id), x("player");
  }, []);
  return B ? /* @__PURE__ */ s("div", { className: "flex h-full overflow-hidden", style: { background: "var(--bg-window)" }, children: [
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
                /* @__PURE__ */ t(Oe, { size: 13, style: { color: "var(--accent-primary)" } }),
                /* @__PURE__ */ t("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.gallery.title") }),
                /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-2", children: [
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: wt.trim() ? `${nt.length} / ${Ke.length}` : a(
                    Ke.length === 1 ? "musiccreator.gallery.count.one" : "musiccreator.gallery.count.other",
                    { n: Ke.length }
                  ) }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: nn,
                      disabled: ua,
                      className: "flex items-center justify-center transition-all",
                      style: {
                        width: 22,
                        height: 22,
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-window)",
                        color: "var(--text-secondary)",
                        opacity: ua ? 0.5 : 1
                      },
                      title: da ? `Open real folder: ${da}` : "Open real JULI3TA folder",
                      children: /* @__PURE__ */ t(ls, { size: 11 })
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
                            onClick: () => Br("cards"),
                            className: "flex items-center justify-center transition-all",
                            style: {
                              width: 22,
                              height: 22,
                              background: Wt === "cards" ? "var(--bg-hover)" : "transparent",
                              color: Wt === "cards" ? "var(--text-primary)" : "var(--text-disabled)"
                            },
                            title: "Cards",
                            children: /* @__PURE__ */ t(fr, { size: 11 })
                          }
                        ),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: () => Br("list"),
                            className: "flex items-center justify-center transition-all",
                            style: {
                              width: 22,
                              height: 22,
                              background: Wt === "list" ? "var(--bg-hover)" : "transparent",
                              color: Wt === "list" ? "var(--text-primary)" : "var(--text-disabled)"
                            },
                            title: "List",
                            children: /* @__PURE__ */ t(pt, { size: 11 })
                          }
                        )
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          Ke.length > 0 && /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center gap-1 px-2 flex-shrink-0",
              style: {
                height: 32,
                borderBottom: "1px solid var(--border-subtle)",
                background: "var(--bg-window)"
              },
              children: [
                /* @__PURE__ */ t(Lt, { size: 11, style: { color: "var(--text-disabled)", marginLeft: 4 } }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    value: wt,
                    onChange: (i) => Fr(i.target.value),
                    placeholder: a("musiccreator.gallery.searchPlaceholder"),
                    className: "flex-1 rounded-input bg-transparent outline-none px-1",
                    style: { fontSize: 11, color: "var(--text-primary)" }
                  }
                ),
                wt && /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => Fr(""),
                    className: "opacity-60 hover:opacity-100 px-1",
                    title: "Clear search",
                    children: /* @__PURE__ */ t(de, { size: 11 })
                  }
                )
              ]
            }
          ),
          Ke.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center justify-center rounded-2xl mb-2",
                style: {
                  width: 44,
                  height: 44,
                  background: "var(--bg-hover)"
                },
                children: /* @__PURE__ */ t(pt, { size: 18, style: { color: "var(--text-disabled)" } })
              }
            ),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)" }, children: a("musiccreator.gallery.empty.title") }),
            /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4, maxWidth: 220, lineHeight: 1.4 }, children: a("musiccreator.gallery.empty.body") }),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-3", style: { fontSize: 9, color: "var(--text-disabled)" }, children: [
              /* @__PURE__ */ t(Ue, { size: 10 }),
              a("musiccreator.gallery.empty.footer")
            ] })
          ] }) : nt.length === 0 ? /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col items-center justify-center px-4 text-center", children: [
            /* @__PURE__ */ t(Lt, { size: 18, style: { color: "var(--text-disabled)", opacity: 0.5 } }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 8 }, children: a("musiccreator.gallery.searchEmpty", { q: wt }) })
          ] }) : /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar p-1.5 flex flex-col gap-0.5", children: Wt === "list" ? /* @__PURE__ */ t(
            Yc,
            {
              tracks: nt,
              player: Re,
              onLoad: rr,
              onOpenLyrics: fo,
              onDelete: co,
              onRename: ga
            }
          ) : nt.map((i) => /* @__PURE__ */ t(
            Xc,
            {
              track: i,
              onDelete: co,
              onLoad: rr,
              onOpenLyrics: fo,
              onSaveSongToDesktop: ln,
              onSaveLyricsToDesktop: cn,
              onPlayInPlayer: dn,
              onRename: ga,
              onEditCover: yo,
              onSelect: Ln,
              selected: y === "player" && C === i.id,
              player: Re
            },
            i.id
          )) })
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
              /* @__PURE__ */ t(Zo, { name: "juli3ta:mark", size: 60, scale: 1, style: { flexShrink: 0, marginLeft: -8 } }),
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
                  { id: "creator", icon: /* @__PURE__ */ t(Oe, { size: 12 }), label: a("musiccreator.view.creator"), tip: a("musiccreator.view.creator.tip") },
                  { id: "player", icon: /* @__PURE__ */ t(ve, { size: 12 }), label: a("musiccreator.view.player"), tip: a("musiccreator.view.player.tip") }
                ].map((i) => /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => x(i.id),
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
            /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-1.5 flex-shrink-0", children: [
              y === "player" && /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    at((i) => !i), la("search");
                  },
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: We ? "white" : "var(--text-secondary)",
                    background: We ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" : "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "Search free music",
                  children: [
                    /* @__PURE__ */ t(Lt, { size: 12 }),
                    "Search music"
                  ]
                }
              ),
              /* @__PURE__ */ t(Vc, { endpoint: B, endpoints: ma, onSwitch: Fi }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: lo,
                  disabled: q,
                  className: "flex items-center gap-1.5 px-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                  style: {
                    height: 32,
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: a("musiccreator.header.surpriseTitle"),
                  children: [
                    /* @__PURE__ */ t(zs, { size: 12 }),
                    a("musiccreator.header.surprise")
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => Za(!0),
                  className: "flex items-center justify-center rounded-lg transition-all hover:bg-[var(--bg-hover)]",
                  style: {
                    width: 32,
                    height: 32,
                    color: "var(--text-secondary)",
                    background: "var(--bg-window)",
                    border: "1px solid var(--border-subtle)"
                  },
                  title: "JULI3TA Settings",
                  children: /* @__PURE__ */ t(Yo, { size: 14 })
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
                  children: /* @__PURE__ */ t(Xn, { size: 14 })
                }
              )
            ] })
          ]
        }
      ),
      y === "player" && (We ? /* @__PURE__ */ t(
        ld,
        {
          tab: ki,
          onTabChange: la,
          query: Ba,
          onQueryChange: Si,
          resultType: qt,
          onResultTypeChange: Ti,
          results: _i,
          busy: Ni,
          error: Ci,
          status: Ei,
          providers: Ai,
          connectors: Li,
          libraryTracks: kt,
          playlists: Va,
          playlistNameDraft: Ya,
          playlistBusy: ji,
          favoriteIds: Ri,
          warmupIds: Ii,
          previewBusyId: zi,
          addBusyId: Mi,
          savedYoutubeIds: vn,
          player: Re,
          onPreview: Sn,
          onAdd: Tn,
          onOpenTrack: (i) => {
            f(i.id), at(!1), x("player");
          },
          onToggleFavorite: _n,
          onRemoveLibraryTrack: An,
          onPlaylistNameDraftChange: Qr,
          onCreatePlaylist: Nn,
          onAddTrackToPlaylist: Cn,
          onRemoveTrackFromPlaylist: En,
          onPlayPlaylist: wn,
          onDeletePlaylist: kn,
          onConfigureConnector: bn,
          onDisconnectConnector: fn,
          onClose: () => at(!1)
        }
      ) : /* @__PURE__ */ t(
        sd,
        {
          track: (() => {
            const i = C ?? Re.state.trackId ?? nt[0]?.id ?? kt[0]?.id ?? null;
            return i ? or.find((c) => c.id === i) ?? null : null;
          })(),
          player: Re,
          onSwitchToCreator: () => x("creator"),
          onSearchMusic: () => {
            x("player"), at(!0), la("search");
          },
          onEditInCreator: (i) => {
            rr(i), x("creator");
          }
        }
      )),
      y === "creator" && /* @__PURE__ */ s(me, { children: [
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
                { id: "compose", icon: /* @__PURE__ */ t(ja, { size: 13 }), label: "Song", tip: "Theme → lyrics → music" },
                { id: "restyle", icon: /* @__PURE__ */ t(Mt, { size: 13 }), label: "Restyle", tip: "Re-sing your song in the style of a reference track" },
                { id: "lyricsOnly", icon: /* @__PURE__ */ t(La, { size: 13 }), label: "Lyrics", tip: "Words only, no audio" }
              ].map((i) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => m(i.id),
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
              /* @__PURE__ */ t("div", { className: "ml-auto flex items-center gap-2", children: q ? /* @__PURE__ */ s(
                "button",
                {
                  onClick: Zi,
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
                    /* @__PURE__ */ t(Z, { size: 12, className: "animate-spin" }),
                    a("musiccreator.button.cancel")
                  ]
                }
              ) : /* @__PURE__ */ s(
                "button",
                {
                  onClick: Bi,
                  className: "flex items-center gap-1.5 px-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.99]",
                  style: {
                    height: 32,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "white",
                    background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                    boxShadow: "var(--shadow-md)"
                  },
                  children: [
                    /* @__PURE__ */ t(Mt, { size: 13 }),
                    p === "restyle" ? "Restyle Song" : p === "lyricsOnly" ? "Write Lyrics" : a("musiccreator.button.create")
                  ]
                }
              ) })
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
                  value: $,
                  onChange: (i) => ae(i.target.value),
                  onDragOver: ba,
                  onDrop: hn,
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
              p !== "lyricsOnly" && /* @__PURE__ */ s(
                "label",
                {
                  htmlFor: "juli3ta-instrumental",
                  className: "flex items-center gap-2 cursor-pointer select-none flex-shrink-0",
                  style: { fontSize: 11, color: "var(--text-secondary)" },
                  children: [
                    a("musiccreator.lyrics.instrumental"),
                    /* @__PURE__ */ t(
                      Uo,
                      {
                        id: "juli3ta-instrumental",
                        checked: ue,
                        onChange: Ge,
                        disabled: q
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        (q || Bt || xt) && /* @__PURE__ */ s(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              borderBottom: "1px solid var(--border-subtle)",
              background: Bt ? "rgba(255, 82, 82, 0.06)" : xt ? "rgba(251, 191, 36, 0.06)" : "var(--bg-titlebar)"
            },
            children: [
              q && /* @__PURE__ */ t("div", { className: "overflow-hidden", style: { height: 2, background: "var(--bg-hover)" }, children: /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: `${wi * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    transition: "width 0.25s ease"
                  }
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-5", style: { height: 30, fontSize: 11 }, children: Bt ? /* @__PURE__ */ s(me, { children: [
                /* @__PURE__ */ t(ra, { size: 12, style: { color: "#ff5252", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#ff8a80" }, title: Bt, children: Bt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => W(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: a("musiccreator.error.dismiss"),
                    children: /* @__PURE__ */ t(de, { size: 11 })
                  }
                )
              ] }) : q ? /* @__PURE__ */ s(me, { children: [
                /* @__PURE__ */ t(Z, { size: 11, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "var(--text-secondary)" }, children: ft === "lyrics" ? Po[Hr % Po.length] : Do[Hr % Do.length] }),
                /* @__PURE__ */ t("span", { style: { fontSize: 10, color: "var(--text-disabled)", flexShrink: 0 }, children: ft === "lyrics" ? "Step 1 / 2 · Lyrics" : "Step 2 / 2 · Music" })
              ] }) : /* @__PURE__ */ s(me, { children: [
                /* @__PURE__ */ t(ra, { size: 12, style: { color: "#fbbf24", flexShrink: 0 } }),
                /* @__PURE__ */ t("span", { className: "flex-1 truncate", style: { color: "#fde68a" }, title: xt ?? "", children: xt }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => X(null),
                    className: "rounded-md transition-all hover:bg-[var(--bg-hover)] flex-shrink-0 flex items-center justify-center",
                    style: { width: 18, height: 18, color: "var(--text-secondary)" },
                    title: "Dismiss",
                    children: /* @__PURE__ */ t(de, { size: 11 })
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
                i.dataTransfer.types.includes(ta) && (i.preventDefault(), i.dataTransfer.dropEffect = "copy");
              },
              onDrop: (i) => {
                const c = qe(i);
                c && c.hasAudio && (i.preventDefault(), (async () => {
                  const g = await ul(c.id);
                  if (!g?.audioDataUrl) {
                    W("Could not load that track’s audio. Try dragging again.");
                    return;
                  }
                  ot(g.audioDataUrl, `${c.title}.mp3`);
                })());
              },
              children: [
                /* @__PURE__ */ t("label", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5 }, children: "Reference audio" }),
                gt ? /* @__PURE__ */ s(
                  "div",
                  {
                    className: "mt-1 px-3 py-2 rounded-lg",
                    style: {
                      background: "var(--bg-titlebar)",
                      border: `1px solid ${et ? "var(--border-subtle)" : "var(--accent-primary)"}`
                    },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                        et ? /* @__PURE__ */ t(Z, { size: 14, className: "animate-spin", style: { color: "var(--accent-primary)", flexShrink: 0 } }) : /* @__PURE__ */ t(pt, { size: 16, style: { color: "var(--accent-primary)", flexShrink: 0 } }),
                        /* @__PURE__ */ t("div", { className: "flex-1 truncate", style: { fontSize: 12, color: "var(--text-primary)" }, children: gt }),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: Qi,
                            disabled: q || et,
                            className: "p-1 rounded-md transition-all hover:bg-[var(--bg-hover)] disabled:opacity-40",
                            style: { color: "var(--text-secondary)" },
                            title: "Remove reference",
                            children: /* @__PURE__ */ t(ia, { size: 14 })
                          }
                        )
                      ] }),
                      (et || Ot) && /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 4 }, children: et ? "🔍  Listening for the best part…" : `✨  ${Ot}` })
                    ]
                  }
                ) : /* @__PURE__ */ s("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: () => na(!0),
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
                        /* @__PURE__ */ t(Ue, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Record now" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mic or tab audio" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: Wi,
                      disabled: q,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--border-subtle)"
                      },
                      children: [
                        /* @__PURE__ */ t(pt, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: "Pick file" }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "mp3 · wav · flac" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: Ki,
                      disabled: q || tt.filter((i) => i.audioDataUrl).length === 0,
                      className: "flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-all hover:bg-[var(--bg-hover)] disabled:opacity-50",
                      style: {
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        background: "var(--bg-titlebar)",
                        border: "1px dashed var(--accent-primary)"
                      },
                      title: "Use a song from your JULI3TA library as the reference",
                      children: [
                        /* @__PURE__ */ t(ut, { size: 16, style: { color: "var(--accent-primary)" } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.mySongs") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.mySongs.count", { count: tt.filter((i) => i.audioDataUrl).length }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      onClick: Yi,
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
                        /* @__PURE__ */ t(Ue, { size: 16 }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600 }, children: a("musiccreator.restyle.button.voiceClips") }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: a("musiccreator.restyle.button.voiceClips.count", { count: Ht.length }) })
                      ]
                    }
                  )
                ] }),
                !gt && /* @__PURE__ */ s("div", { className: "mt-3", children: [
                  /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, marginBottom: 4 }, children: "Sample strategy" }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Rr("best"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Le === "best" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Le === "best" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Le === "best" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(Oe, { size: 13, style: { color: Le === "best" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
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
                        onClick: () => Rr("mix"),
                        className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                        style: {
                          background: Le === "mix" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                          border: `1px solid ${Le === "mix" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                          color: Le === "mix" ? "var(--text-primary)" : "var(--text-secondary)"
                        },
                        children: [
                          /* @__PURE__ */ t(fr, { size: 13, style: { color: Le === "mix" ? "var(--accent-primary)" : "var(--text-secondary)" } }),
                          /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Iconic mix" }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "3 best parts crossfaded" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                xi && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.6)" },
                    onClick: () => !Ie && na(!1),
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
                                  onClick: () => !Ie && jr("mic"),
                                  disabled: Ie,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: Be === "mic" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${Be === "mic" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(Ue, { size: 14 }),
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
                                  onClick: () => !Ie && jr("tab"),
                                  disabled: Ie,
                                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                                  style: {
                                    background: Be === "tab" ? "var(--bg-selected)" : "var(--bg-titlebar)",
                                    border: `1px solid ${Be === "tab" ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                                    color: "var(--text-primary)"
                                  },
                                  children: [
                                    /* @__PURE__ */ t(vr, { size: 14 }),
                                    /* @__PURE__ */ s("div", { className: "text-left flex-1", children: [
                                      /* @__PURE__ */ t("div", { style: { fontSize: 11, fontWeight: 600 }, children: "Tab audio" }),
                                      /* @__PURE__ */ t("div", { style: { fontSize: 9, color: "var(--text-disabled)" }, children: "YouTube, Spotify Web…" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            Be === "tab" && /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
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
                                  Math.floor(Pr / 6e4).toString().padStart(2, "0"),
                                  ":",
                                  Math.floor(Pr / 1e3 % 60).toString().padStart(2, "0")
                                ]
                              }
                            ),
                            Ie ? /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: Ji,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  animation: "pulse 1s infinite"
                                },
                                title: "Stop & analyze",
                                children: /* @__PURE__ */ t(js, { size: 26 })
                              }
                            ) : /* @__PURE__ */ t(
                              "button",
                              {
                                onClick: qi,
                                className: "flex items-center justify-center rounded-full transition-all hover:scale-105",
                                style: {
                                  width: 64,
                                  height: 64,
                                  background: "#ef4444",
                                  color: "white",
                                  boxShadow: "0 0 24px rgba(239,68,68,0.4)"
                                },
                                title: "Start recording",
                                children: Be === "tab" ? /* @__PURE__ */ t(vr, { size: 28 }) : /* @__PURE__ */ t(Ue, { size: 28 })
                              }
                            ),
                            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-secondary)", marginTop: 12 }, children: Ie ? Be === "tab" ? "🔊 Capturing tab audio…" : "🎙️  Recording…" : "Tap to start" }),
                            Ur && /* @__PURE__ */ t(
                              "div",
                              {
                                className: "mt-3 px-3 py-1.5 rounded-md text-center",
                                style: { background: "rgba(239,68,68,0.12)", maxWidth: 280 },
                                children: /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "#ff8a80" }, children: Ur })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s(
                            "div",
                            {
                              className: "px-5 py-3 flex items-center justify-between",
                              style: { borderTop: "1px solid var(--border-subtle)", background: "var(--bg-titlebar)" },
                              children: [
                                /* @__PURE__ */ t("div", { style: { fontSize: 10, color: "var(--text-disabled)" }, children: Ie ? "Stop to auto-analyze" : "Saves to your library + uses as cover" }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => !Ie && na(!1),
                                    disabled: Ie,
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
                    ref: Ir,
                    type: "file",
                    accept: "audio/*",
                    onChange: Gi,
                    style: { display: "none" }
                  }
                ),
                /* @__PURE__ */ s("div", { style: { fontSize: 10, color: "var(--text-disabled)", marginTop: 6, lineHeight: 1.4 }, children: [
                  "💡 JULI3TA will ",
                  /* @__PURE__ */ t("strong", { children: "auto-pick the best 30 s" }),
                  " of the clip by analyzing energy + steadiness. Long recordings get trimmed to the most musical chunk."
                ] }),
                I && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => O(!1),
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
                                  /* @__PURE__ */ t(Ue, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "Pick a recording" })
                                ] }),
                                /* @__PURE__ */ s(
                                  "button",
                                  {
                                    onClick: () => O(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    children: [
                                      /* @__PURE__ */ t(ia, { size: 14, style: { visibility: "hidden" } }),
                                      /* @__PURE__ */ t("span", { style: { fontSize: 14, fontWeight: 600 }, children: "×" })
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: Ht.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                            /* @__PURE__ */ t(Ue, { size: 28, style: { color: "var(--text-disabled)" } }),
                            /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: "No recordings yet" }),
                            /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 280 }, children: [
                              "Open ",
                              /* @__PURE__ */ t("strong", { children: "Voice Recorder" }),
                              ", capture some audio (a melody, a hum, music playing in the room), then come back here."
                            ] })
                          ] }) : Ht.map((i) => {
                            const c = i.durationMs / 1e3, g = c < 6;
                            return /* @__PURE__ */ s(
                              "button",
                              {
                                onClick: () => !g && Vi(i),
                                disabled: g,
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
                                      children: /* @__PURE__ */ t(Ue, { size: 16, style: { color: "white" } })
                                    }
                                  ),
                                  /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)" }, children: i.name }),
                                    /* @__PURE__ */ s("div", { style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                      Math.floor(c / 60),
                                      ":",
                                      Math.floor(c % 60).toString().padStart(2, "0"),
                                      g && " · too short for cover (need ≥6 s)"
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
                                i.preventDefault(), O(!1);
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
                ge && /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute inset-0 z-30 flex items-center justify-center",
                    style: { background: "rgba(0,0,0,0.5)" },
                    onClick: () => Ae(!1),
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
                                  /* @__PURE__ */ t(ut, { size: 14, style: { color: "var(--accent-primary)" } }),
                                  /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: a("musiccreator.restyle.songsPicker.title") })
                                ] }),
                                /* @__PURE__ */ t(
                                  "button",
                                  {
                                    onClick: () => Ae(!1),
                                    className: "p-1 rounded-md hover:bg-[var(--bg-hover)]",
                                    style: { color: "var(--text-secondary)" },
                                    title: "Close",
                                    children: /* @__PURE__ */ t(de, { size: 14 })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto invisible-scrollbar", children: (() => {
                            const i = tt.filter((c) => c.audioDataUrl);
                            return i.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-2", children: [
                              /* @__PURE__ */ t(ut, { size: 28, style: { color: "var(--text-disabled)" } }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: a("musiccreator.restyle.songsPicker.empty.title") }),
                              /* @__PURE__ */ t("div", { style: { fontSize: 11, color: "var(--text-disabled)", maxWidth: 320 }, children: a("musiccreator.restyle.songsPicker.empty.body") })
                            ] }) : i.map((c) => {
                              const g = c.durationMs / 1e3, k = g > 0 && g < 6, S = c.title.replace(/\s*\((lyrics|cover|restyle)\)\s*$/, "") || "Untitled";
                              return /* @__PURE__ */ s(
                                "button",
                                {
                                  onClick: () => !k && Xi(c),
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
                                        children: !c.coverDataUrl && /* @__PURE__ */ t(ut, { size: 18, style: { color: "white", opacity: 0.85 } })
                                      }
                                    ),
                                    /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                                      /* @__PURE__ */ t("div", { className: "truncate", style: { fontSize: 13, color: "var(--text-primary)", fontWeight: 600 }, children: S }),
                                      /* @__PURE__ */ s("div", { className: "truncate", style: { fontSize: 11, color: "var(--text-disabled)" }, children: [
                                        g > 0 ? `${Math.floor(g / 60)}:${Math.floor(g % 60).toString().padStart(2, "0")}` : "—",
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
          /* @__PURE__ */ s(
            "div",
            {
              className: "grid gap-5 mb-5",
              style: { gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" },
              children: [
                /* @__PURE__ */ t(
                  Zt,
                  {
                    label: a("musiccreator.theme.label"),
                    hint: a("musiccreator.theme.hint"),
                    headerExtra: /* @__PURE__ */ t(
                      gr,
                      {
                        label: "Inspire",
                        tooltip: "Use AI to write a theme based on your Style",
                        onClick: tn,
                        busy: Te === "theme",
                        disabled: q || Te !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: v,
                        onChange: (i) => E(i.target.value),
                        onDragOver: ba,
                        onDrop: mn,
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
                  Zt,
                  {
                    label: a("musiccreator.style.label"),
                    counter: `${gn} / ${Cc}`,
                    hint: "Type freely or pick from the genre palette below.",
                    headerExtra: /* @__PURE__ */ t(
                      gr,
                      {
                        label: "Suggest",
                        tooltip: "Use AI to suggest a Style from your Theme",
                        onClick: an,
                        busy: Te === "style",
                        disabled: q || Te !== null
                      }
                    ),
                    children: /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: M,
                        onChange: (i) => z(i.target.value),
                        onDragOver: ba,
                        onDrop: pn,
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
          p !== "lyricsOnly" && /* @__PURE__ */ s("div", { className: "flex flex-col gap-4 mb-5", children: [
            /* @__PURE__ */ t(Fc, { onPick: on, disabled: q }),
            /* @__PURE__ */ t(
              Bc,
              {
                specs: K,
                onChange: Ne,
                disabled: q,
                onOptimize: en,
                optimizing: Ut
              }
            )
          ] }),
          /* @__PURE__ */ s(
            Zt,
            {
              label: "Cover Art",
              hint: B?.models.image ? "Auto-generated when you create the song. Override the prompt or upload your own image." : "No image model on this endpoint — pick one in Settings → Cover art, or upload your own image below.",
              className: "mb-5",
              headerExtra: /* @__PURE__ */ s("label", { className: "flex items-center gap-2 cursor-pointer select-none", style: { fontSize: 11, color: "var(--text-secondary)" }, children: [
                "Auto-generate",
                /* @__PURE__ */ t(
                  Uo,
                  {
                    checked: we,
                    onChange: Ua,
                    disabled: q || !B?.models.image
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      onClick: () => bo(!0),
                      disabled: q,
                      className: "relative flex-shrink-0 rounded-lg overflow-hidden transition-all hover:opacity-90 disabled:opacity-50",
                      style: {
                        width: 88,
                        height: 88,
                        background: he ? `url(${he}) center/cover no-repeat` : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        border: "1px solid var(--border-subtle)",
                        cursor: q ? "not-allowed" : "pointer"
                      },
                      title: "Open song card — big cover preview + metadata",
                      children: [
                        !he && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t(oa, { size: 28, style: { color: "white", opacity: 0.85 } }) }),
                        Fe && /* @__PURE__ */ t(
                          "div",
                          {
                            className: "absolute inset-0 flex items-center justify-center",
                            style: { background: "rgba(0,0,0,0.5)" },
                            children: /* @__PURE__ */ t(Z, { size: 20, className: "animate-spin", style: { color: "white" } })
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
                          onClick: no,
                          disabled: q || Fe || !B?.models.image,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40",
                          style: {
                            fontSize: 11,
                            fontWeight: 600,
                            color: "white",
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            border: "1px solid transparent",
                            cursor: q || Fe || !B?.models.image ? "not-allowed" : "pointer"
                          },
                          title: B?.models.image ? "Generate cover art from the prompt below" : "No image model available",
                          children: [
                            Fe ? /* @__PURE__ */ t(Z, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ t(Oe, { size: 11 }),
                            he ? "Regenerate" : "Generate"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => zr.current?.click(),
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
                            /* @__PURE__ */ t(Nr, { size: 11 }),
                            "Upload"
                          ]
                        }
                      ),
                      he && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            R(""), Y && Vt.current?.(Y, "");
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
                            /* @__PURE__ */ t(de, { size: 11 }),
                            "Clear"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: () => Mr((i) => !i),
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:bg-[var(--bg-hover)] ml-auto",
                          style: {
                            fontSize: 10,
                            color: "var(--text-disabled)",
                            background: "transparent",
                            border: "1px solid transparent"
                          },
                          title: "Edit the cover-art prompt",
                          children: [
                            Ha ? /* @__PURE__ */ t(Vn, { size: 11 }) : /* @__PURE__ */ t(Vo, { size: 11 }),
                            Ha ? "Hide prompt" : "Edit prompt"
                          ]
                        }
                      )
                    ] }),
                    Ha && /* @__PURE__ */ t(
                      "textarea",
                      {
                        value: ne,
                        onChange: (i) => $e(i.target.value),
                        placeholder: Aa($, v, M),
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
                    ref: zr,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: (i) => {
                      const c = i.target.files?.[0];
                      c && so(c), i.target.value = "";
                    }
                  }
                )
              ]
            }
          ),
          p !== "restyle" && !ue && /* @__PURE__ */ t(
            Zt,
            {
              label: "Lyrics Direction",
              hint: "Free-form direction for the lyrics — perspective, language, taboo lines, references. Sent to the AI alongside Theme and the song form below.",
              className: "mb-5",
              counter: (K.intent ?? "").length > 0 ? `${(K.intent ?? "").length} chars` : void 0,
              children: /* @__PURE__ */ t(
                "textarea",
                {
                  value: K.intent ?? "",
                  onChange: (i) => Ne((c) => ({ ...c, intent: i.target.value })),
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
          /* @__PURE__ */ s(
            Zt,
            {
              label: a("musiccreator.lyrics.label"),
              counter: ue ? "instrumental — no vocals" : `${vo} / ${_t}`,
              counterDanger: !ue && vo > _t,
              className: "mb-5",
              headerExtra: ue ? void 0 : /* @__PURE__ */ t(
                gr,
                {
                  label: "Polish",
                  tooltip: "Use AI to refine flow, rhyme, and structure",
                  onClick: rn,
                  busy: Te === "lyrics",
                  disabled: q || Te !== null || !N.trim()
                }
              ),
              children: [
                /* @__PURE__ */ t(
                  "textarea",
                  {
                    value: N,
                    onChange: (i) => _(i.target.value),
                    onDragOver: ba,
                    onDrop: un,
                    placeholder: ue ? "🎻 Instrumental mode — turn off the toggle above to write lyrics" : a("musiccreator.lyrics.placeholder"),
                    disabled: q || ue,
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
                  Nc.map((i) => {
                    const c = j?.id === i.id;
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => {
                          c ? H(null) : (H(i), N.trim() || _(i.skeleton));
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
                  j && /* @__PURE__ */ t("span", { style: { fontSize: 9, color: "var(--accent-primary)", marginLeft: 4 }, children: "AI will use this structure" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t(Hc, { player: Re, allTracks: or }),
      /* @__PURE__ */ t("audio", { ref: xo, preload: "none", style: { display: "none" } })
    ] }),
    /* @__PURE__ */ t(
      Vs,
      {
        open: w,
        onClose: () => u(!1),
        onUseRecipe: (i, c) => {
          m("compose"), E(i), z(c);
        }
      }
    ),
    Pi && /* @__PURE__ */ t(
      dd,
      {
        settings: Qa,
        endpoints: ma,
        onChange: Di,
        onClose: () => Za(!1)
      }
    ),
    go && /* @__PURE__ */ t(
      Qc,
      {
        track: go,
        endpoint: B,
        onSave: ar,
        onClose: () => yo(null)
      }
    ),
    sn && /* @__PURE__ */ t(
      Zc,
      {
        songName: $,
        mode: p,
        theme: v,
        style: M,
        intent: K.intent ?? "",
        lyrics: N,
        specs: K,
        coverDataUrl: he,
        endpoint: B,
        busy: Fe,
        onRegenerate: no,
        onUpload: so,
        onClear: () => {
          R(""), Y && Vt.current?.(Y, "");
        },
        onClose: () => bo(!1)
      }
    )
  ] }) : /* @__PURE__ */ t($c, { retrying: $i, onRetry: tr });
}
function dd({ settings: e, endpoints: a, onChange: r, onClose: o }) {
  const n = (l, d, b) => {
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
                  /* @__PURE__ */ t(Yo, { size: 14, style: { color: "var(--accent-primary)" } }),
                  /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }, children: "JULI3TA Settings" }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: o,
                      className: "ml-auto flex items-center justify-center rounded-md transition-all hover:bg-[var(--bg-hover)]",
                      style: { width: 24, height: 24, color: "var(--text-secondary)" },
                      title: "Close",
                      children: /* @__PURE__ */ t(de, { size: 14 })
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
                    /* @__PURE__ */ t(ra, { size: 14, style: { color: "#fbbf24" } }),
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
                ], p = (u) => /music|cover/i.test(u), m = (u) => /image|diffusion|dall-?e|flux|sdxl/i.test(u), w = (u) => u === "chat" ? l.models.allIds.filter((y) => !/music|cover|tts|stt|transcribe|whisper|embed|image|diffusion|dall-?e|flux|sdxl/i.test(y)) : u === "image" ? l.models.allIds.filter(m) : l.models.allIds.filter(p);
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
                              background: Ra(l),
                              boxShadow: `0 0 6px ${Ra(l)}`
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
                      /* @__PURE__ */ t("div", { className: "grid gap-2", style: { gridTemplateColumns: "120px 1fr" }, children: b.map((u) => {
                        const y = w(u.kind), x = d[u.key] ?? "";
                        return /* @__PURE__ */ s(Rn, { children: [
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
                              value: x,
                              onChange: (C) => n(l.url, u.key, C.target.value),
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
function gd(e) {
  const a = e.host.storage.current();
  return cl(a), a.migrate?.("migrations/"), function() {
    return /* @__PURE__ */ t(jn, { value: e, children: /* @__PURE__ */ t(cd, {}) });
  };
}
export {
  gd as default
};
//# sourceMappingURL=index.js.map
