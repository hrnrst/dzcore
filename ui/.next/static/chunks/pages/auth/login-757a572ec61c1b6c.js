(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9344], {
      3510: function(e, t, r) {
          "use strict";
          r.d(t, {
              Z: function() {
                  return n
              }
          });
          /**
           * @license lucide-react v0.363.0 - ISC
           *
           * This source code is licensed under the ISC license.
           * See the LICENSE file in the root directory of this source tree.
           */
          let n = (0, r(5711).Z)("CircleAlert", [
              ["circle", {
                  cx: "12",
                  cy: "12",
                  r: "10",
                  key: "1mglay"
              }],
              ["line", {
                  x1: "12",
                  x2: "12",
                  y1: "8",
                  y2: "12",
                  key: "1pkeuh"
              }],
              ["line", {
                  x1: "12",
                  x2: "12.01",
                  y1: "16",
                  y2: "16",
                  key: "4dfq90"
              }]
          ])
      },
      9283: function(e, t, r) {
          "use strict";
          r.d(t, {
              Z: function() {
                  return n
              }
          });
          /**
           * @license lucide-react v0.363.0 - ISC
           *
           * This source code is licensed under the ISC license.
           * See the LICENSE file in the root directory of this source tree.
           */
          let n = (0, r(5711).Z)("LogIn", [
              ["path", {
                  d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
                  key: "u53s6r"
              }],
              ["polyline", {
                  points: "10 17 15 12 10 7",
                  key: "1ail0h"
              }],
              ["line", {
                  x1: "15",
                  x2: "3",
                  y1: "12",
                  y2: "12",
                  key: "v6grx8"
              }]
          ])
      },
      163: function(e, t, r) {
          (window.__NEXT_P = window.__NEXT_P || []).push(["/auth/login", function() {
              return r(252)
          }])
      },
      2766: function(e, t, r) {
          "use strict";
          r.d(t, {
              NI: function() {
                  return h
              },
              Wi: function() {
                  return u
              },
              l0: function() {
                  return c
              },
              lX: function() {
                  return x
              },
              pf: function() {
                  return g
              },
              xJ: function() {
                  return f
              },
              zG: function() {
                  return v
              }
          });
          var n = r(5893),
              a = r(7294),
              s = r(8426),
              l = r(7536),
              i = r(7327),
              o = r(2297);
          let c = l.RV,
              d = a.createContext({}),
              u = e => {
                  let {
                      ...t
                  } = e;
                  return (0, n.jsx)(d.Provider, {
                      value: {
                          name: t.name
                      },
                      children: (0, n.jsx)(l.Qr, {
                          ...t
                      })
                  })
              },
              m = () => {
                  let e = a.useContext(d),
                      t = a.useContext(p),
                      {
                          getFieldState: r,
                          formState: n
                      } = (0, l.Gc)(),
                      s = r(e.name, n);
                  if (!e) throw Error("useFormField should be used within <FormField>");
                  let {
                      id: i
                  } = t;
                  return {
                      id: i,
                      name: e.name,
                      formItemId: "".concat(i, "-form-item"),
                      formDescriptionId: "".concat(i, "-form-item-description"),
                      formMessageId: "".concat(i, "-form-item-message"),
                      ...s
                  }
              },
              p = a.createContext({}),
              f = a.forwardRef((e, t) => {
                  let {
                      className: r,
                      ...s
                  } = e, l = a.useId();
                  return (0, n.jsx)(p.Provider, {
                      value: {
                          id: l
                      },
                      children: (0, n.jsx)("div", {
                          ref: t,
                          className: (0, i.cn)("space-y-2", r),
                          ...s
                      })
                  })
              });
          f.displayName = "FormItem";
          let x = a.forwardRef((e, t) => {
              let {
                  className: r,
                  ...a
              } = e, {
                  error: s,
                  formItemId: l
              } = m();
              return (0, n.jsx)(o._, {
                  ref: t,
                  className: (0, i.cn)(s && "text-destructive", r),
                  htmlFor: l,
                  ...a
              })
          });
          x.displayName = "FormLabel";
          let h = a.forwardRef((e, t) => {
              let {
                  ...r
              } = e, {
                  error: a,
                  formItemId: l,
                  formDescriptionId: i,
                  formMessageId: o
              } = m();
              return (0, n.jsx)(s.g7, {
                  ref: t,
                  id: l,
                  "aria-describedby": a ? "".concat(i, " ").concat(o) : "".concat(i),
                  "aria-invalid": !!a,
                  ...r
              })
          });
          h.displayName = "FormControl";
          let g = a.forwardRef((e, t) => {
              let {
                  className: r,
                  ...a
              } = e, {
                  formDescriptionId: s
              } = m();
              return (0, n.jsx)("p", {
                  ref: t,
                  id: s,
                  className: (0, i.cn)("text-sm text-muted-foreground", r),
                  ...a
              })
          });
          g.displayName = "FormDescription";
          let v = a.forwardRef((e, t) => {
              let {
                  className: r,
                  children: a,
                  ...s
              } = e, {
                  error: l,
                  formMessageId: o
              } = m(), c = l ? String(null == l ? void 0 : l.message) : a;
              return c ? (0, n.jsx)("p", {
                  ref: t,
                  id: o,
                  className: (0, i.cn)("text-sm font-medium text-destructive", r),
                  ...s,
                  children: c
              }) : null
          });
          v.displayName = "FormMessage"
      },
      1396: function(e, t, r) {
          "use strict";
          r.d(t, {
              Cd: function() {
                  return c
              },
              X: function() {
                  return d
              },
              bZ: function() {
                  return o
              }
          });
          var n = r(5893),
              a = r(7294),
              s = r(5139),
              l = r(7327);
          let i = (0, s.j)("relative w-full rounded-lg border p-4 [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
                  variants: {
                      variant: {
                          default: "bg-background text-foreground",
                          destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
                      }
                  },
                  defaultVariants: {
                      variant: "default"
                  }
              }),
              o = a.forwardRef((e, t) => {
                  let {
                      className: r,
                      variant: a,
                      ...s
                  } = e;
                  return (0, n.jsx)("div", {
                      ref: t,
                      role: "alert",
                      className: (0, l.cn)(i({
                          variant: a
                      }), r),
                      ...s
                  })
              });
          o.displayName = "Alert";
          let c = a.forwardRef((e, t) => {
              let {
                  className: r,
                  ...a
              } = e;
              return (0, n.jsx)("h5", {
                  ref: t,
                  className: (0, l.cn)("mb-1 font-medium leading-none tracking-tight", r),
                  ...a
              })
          });
          c.displayName = "AlertTitle";
          let d = a.forwardRef((e, t) => {
              let {
                  className: r,
                  ...a
              } = e;
              return (0, n.jsx)("div", {
                  ref: t,
                  className: (0, l.cn)("text-sm [&_p]:leading-relaxed", r),
                  ...a
              })
          });
          d.displayName = "AlertDescription"
      },
      2297: function(e, t, r) {
          "use strict";
          r.d(t, {
              _: function() {
                  return c
              }
          });
          var n = r(5893),
              a = r(7294),
              s = r(9102),
              l = r(5139),
              i = r(7327);
          let o = (0, l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
              c = a.forwardRef((e, t) => {
                  let {
                      className: r,
                      ...a
                  } = e;
                  return (0, n.jsx)(s.f, {
                      ref: t,
                      className: (0, i.cn)(o(), r),
                      ...a
                  })
              });
          c.displayName = s.f.displayName
      },
      4462: function(e, t, r) {
          "use strict";
          r.d(t, {
              Bw: function() {
                  return p
              },
              DI: function() {
                  return d
              },
              Ph: function() {
                  return c
              },
              Ql: function() {
                  return x
              },
              i4: function() {
                  return m
              },
              ki: function() {
                  return u
              },
              n5: function() {
                  return f
              }
          });
          var n = r(5893),
              a = r(7294),
              s = r(5059),
              l = r(8971),
              i = r(3742),
              o = r(7327);
          let c = s.fC,
              d = s.ZA,
              u = s.B4,
              m = a.forwardRef((e, t) => {
                  let {
                      className: r,
                      children: a,
                      ...i
                  } = e;
                  return (0, n.jsxs)(s.xz, {
                      ref: t,
                      className: (0, o.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
                      ...i,
                      children: [a, (0, n.jsx)(s.JO, {
                          asChild: !0,
                          children: (0, n.jsx)(l.Z, {
                              className: "size-4 opacity-50"
                          })
                      })]
                  })
              });
          m.displayName = s.xz.displayName;
          let p = a.forwardRef((e, t) => {
              let {
                  className: r,
                  children: a,
                  position: l = "popper",
                  ...i
              } = e;
              return (0, n.jsx)(s.h_, {
                  children: (0, n.jsx)(s.VY, {
                      ref: t,
                      className: (0, o.cn)("relative z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === l && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r),
                      position: l,
                      ...i,
                      children: (0, n.jsx)(s.l_, {
                          className: (0, o.cn)("p-1", "popper" === l && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                          children: a
                      })
                  })
              })
          });
          p.displayName = s.VY.displayName;
          let f = a.forwardRef((e, t) => {
              let {
                  className: r,
                  ...a
              } = e;
              return (0, n.jsx)(s.__, {
                  ref: t,
                  className: (0, o.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", r),
                  ...a
              })
          });
          f.displayName = s.__.displayName;
          let x = a.forwardRef((e, t) => {
              let {
                  className: r,
                  children: a,
                  ...l
              } = e;
              return (0, n.jsxs)(s.ck, {
                  ref: t,
                  className: (0, o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                  ...l,
                  children: [(0, n.jsx)("span", {
                      className: "absolute left-2 flex size-3.5 items-center justify-center",
                      children: (0, n.jsx)(s.wU, {
                          children: (0, n.jsx)(i.Z, {
                              className: "size-4"
                          })
                      })
                  }), (0, n.jsx)(s.eT, {
                      children: a
                  })]
              })
          });
          x.displayName = s.ck.displayName, a.forwardRef((e, t) => {
              let {
                  className: r,
                  ...a
              } = e;
              return (0, n.jsx)(s.Z0, {
                  ref: t,
                  className: (0, o.cn)("-mx-1 my-1 h-px bg-muted", r),
                  ...a
              })
          }).displayName = s.Z0.displayName
      },
      252: function(e, t, r) {
          "use strict";
          r.r(t), r.d(t, {
              default: function() {
                  return V
              }
          });
          var n = r(5893),
              a = r(9774),
              s = r(7294),
              l = r(733),
              i = r(1664),
              o = r.n(i),
              c = r(1163),
              d = r(6312),
              u = r(3510),
              m = r(9283),
              p = r(3742),
              f = r(7536),
              x = r(1604),
              h = r(7327);
          let g = () => ({
              login: async function(e, t, r) {
                  let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "liman";
                  return await a.ON.login(e, t, void 0, r, n)
              }
          });
          var v = r(7249),
              w = r(5037),
              j = r(2297),
              y = r(2766),
              b = r(1396),
              N = Object.defineProperty,
              k = Object.defineProperties,
              P = Object.getOwnPropertyDescriptors,
              S = Object.getOwnPropertySymbols,
              _ = Object.prototype.hasOwnProperty,
              C = Object.prototype.propertyIsEnumerable,
              E = (e, t, r) => t in e ? N(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r
              }) : e[t] = r,
              z = (e, t) => {
                  for (var r in t || (t = {})) _.call(t, r) && E(e, r, t[r]);
                  if (S)
                      for (var r of S(t)) C.call(t, r) && E(e, r, t[r]);
                  return e
              },
              R = (e, t) => k(e, P(t)),
              I = (e, t) => {
                  var r = {};
                  for (var n in e) _.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                  if (null != e && S)
                      for (var n of S(e)) 0 > t.indexOf(n) && C.call(e, n) && (r[n] = e[n]);
                  return r
              },
              M = s.createContext({}),
              T = s.forwardRef((e, t) => {
                  let r;
                  var n, a, l, i, o, {
                          value: c,
                          onChange: d,
                          maxLength: u,
                          textAlign: m = "left",
                          pattern: p = "^\\d+$",
                          inputMode: f = "numeric",
                          onComplete: x,
                          pushPasswordManagerStrategy: h = "increase-width",
                          containerClassName: g,
                          noScriptCSSFallback: v = O,
                          render: w,
                          children: j
                      } = e,
                      y = I(e, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]);
                  let [b, N] = s.useState("string" == typeof y.defaultValue ? y.defaultValue : ""), k = null != c ? c : b, P = (r = s.useRef(), s.useEffect(() => {
                      r.current = k
                  }), r.current), S = s.useCallback(e => {
                      null == d || d(e), N(e)
                  }, [d]), _ = s.useMemo(() => p ? "string" == typeof p ? new RegExp(p) : p : null, [p]), C = s.useRef(null), E = s.useRef(null), T = s.useRef({
                      value: k,
                      onChange: S,
                      isIOS: "undefined" != typeof window && (null == (a = null == (n = null == window ? void 0 : window.CSS) ? void 0 : n.supports) ? void 0 : a.call(n, "-webkit-touch-callout", "none"))
                  }), D = s.useRef({
                      prev: [null == (l = C.current) ? void 0 : l.selectionStart, null == (i = C.current) ? void 0 : i.selectionEnd, null == (o = C.current) ? void 0 : o.selectionDirection]
                  });
                  s.useImperativeHandle(t, () => C.current, []), s.useEffect(() => {
                      let e = C.current,
                          t = E.current;
                      if (!e || !t) return;

                      function r() {
                          if (document.activeElement !== e) {
                              G(null), V(null);
                              return
                          }
                          let t = e.selectionStart,
                              r = e.selectionEnd,
                              n = e.selectionDirection,
                              a = e.maxLength,
                              s = e.value,
                              l = D.current.prev,
                              i = -1,
                              o = -1,
                              c;
                          if (0 !== s.length && null !== t && null !== r) {
                              let e = t === r,
                                  n = t === s.length && s.length < a;
                              if (e && !n) {
                                  if (0 === t) i = 0, o = 1, c = "forward";
                                  else if (t === a) i = t - 1, o = t, c = "backward";
                                  else if (a > 1 && s.length > 1) {
                                      let e = 0;
                                      if (null !== l[0] && null !== l[1]) {
                                          c = t < l[1] ? "backward" : "forward";
                                          let r = l[0] === l[1] && l[0] < a;
                                          "backward" !== c || r || (e = -1)
                                      }
                                      i = e + t, o = e + t + 1
                                  }
                              } - 1 !== i && -1 !== o && i !== o && C.current.setSelectionRange(i, o, c)
                          }
                          let d = -1 !== i ? i : t,
                              u = -1 !== o ? o : r,
                              m = null != c ? c : n;
                          G(d), V(u), D.current.prev = [d, u, m]
                      }
                      if (T.current.value !== e.value && T.current.onChange(e.value), D.current.prev = [e.selectionStart, e.selectionEnd, e.selectionDirection], document.addEventListener("selectionchange", r, {
                              capture: !0
                          }), r(), document.activeElement === e && L(!0), !document.getElementById("input-otp-style")) {
                          let e = document.createElement("style");
                          if (e.id = "input-otp-style", document.head.appendChild(e), e.sheet) {
                              let t = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
                              F(e.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), F(e.sheet, `[data-input-otp]:autofill { ${t} }`), F(e.sheet, `[data-input-otp]:-webkit-autofill { ${t} }`), F(e.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), F(e.sheet, "[data-input-otp] + * { pointer-events: all !important; }")
                          }
                      }
                      let n = () => {
                          t && t.style.setProperty("--root-height", `${e.clientHeight}px`)
                      };
                      n();
                      let a = new ResizeObserver(n);
                      return a.observe(e), () => {
                          document.removeEventListener("selectionchange", r, {
                              capture: !0
                          }), a.disconnect()
                      }
                  }, []);
                  let [W, Z] = s.useState(!1), [A, L] = s.useState(!1), [B, G] = s.useState(null), [H, V] = s.useState(null);
                  s.useEffect(() => {
                      var e;
                      setTimeout(e = () => {
                          var e, t, r, n;
                          null == (e = C.current) || e.dispatchEvent(new Event("input"));
                          let a = null == (t = C.current) ? void 0 : t.selectionStart,
                              s = null == (r = C.current) ? void 0 : r.selectionEnd,
                              l = null == (n = C.current) ? void 0 : n.selectionDirection;
                          null !== a && null !== s && (G(a), V(s), D.current.prev = [a, s, l])
                      }, 0), setTimeout(e, 10), setTimeout(e, 50)
                  }, [k, A]), s.useEffect(() => {
                      void 0 !== P && k !== P && P.length < u && k.length === u && (null == x || x(k))
                  }, [u, x, P, k]);
                  let K = function({
                          containerRef: e,
                          inputRef: t,
                          pushPasswordManagerStrategy: r,
                          isFocused: n
                      }) {
                          let a = s.useRef({
                                  done: !1,
                                  refocused: !1
                              }),
                              [l, i] = s.useState(!1),
                              [o, c] = s.useState(!1),
                              [d, u] = s.useState(!1),
                              m = s.useMemo(() => "none" !== r && ("increase-width" === r || "experimental-no-flickering" === r) && l && o, [l, o, r]),
                              p = s.useCallback(() => {
                                  let n = e.current,
                                      s = t.current;
                                  if (!n || !s || d || "none" === r) return;
                                  let l = n.getBoundingClientRect().left + n.offsetWidth,
                                      o = n.getBoundingClientRect().top + n.offsetHeight / 2;
                                  if (!(0 === document.querySelectorAll('[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]').length && document.elementFromPoint(l - 18, o) === n) && (i(!0), u(!0), !a.current.refocused && document.activeElement === s)) {
                                      let e = [s.selectionStart, s.selectionEnd];
                                      s.blur(), s.focus(), s.setSelectionRange(e[0], e[1]), a.current.refocused = !0
                                  }
                              }, [e, t, d, r]);
                          return s.useEffect(() => {
                              let t = e.current;
                              if (!t || "none" === r) return;

                              function n() {
                                  c(window.innerWidth - t.getBoundingClientRect().right >= 40)
                              }
                              n();
                              let a = setInterval(n, 1e3);
                              return () => {
                                  clearInterval(a)
                              }
                          }, [e, r]), s.useEffect(() => {
                              let e = n || document.activeElement === t.current;
                              if ("none" === r || !e) return;
                              let a = setTimeout(p, 0),
                                  s = setTimeout(p, 2e3),
                                  l = setTimeout(p, 5e3),
                                  i = setTimeout(() => {
                                      u(!0)
                                  }, 6e3);
                              return () => {
                                  clearTimeout(a), clearTimeout(s), clearTimeout(l), clearTimeout(i)
                              }
                          }, [t, n, r, p]), {
                              hasPWMBadge: l,
                              willPushPWMBadge: m,
                              PWM_BADGE_SPACE_WIDTH: "40px"
                          }
                      }({
                          containerRef: E,
                          inputRef: C,
                          pushPasswordManagerStrategy: h,
                          isFocused: A
                      }),
                      Y = s.useCallback(e => {
                          let t = e.currentTarget.value.slice(0, u);
                          if (t.length > 0 && _ && !_.test(t)) {
                              e.preventDefault();
                              return
                          }
                          "string" == typeof P && t.length < P.length && document.dispatchEvent(new Event("selectionchange")), S(t)
                      }, [u, S, P, _]),
                      $ = s.useCallback(() => {
                          var e;
                          if (C.current) {
                              let t = Math.min(C.current.value.length, u - 1),
                                  r = C.current.value.length;
                              null == (e = C.current) || e.setSelectionRange(t, r), G(t), V(r)
                          }
                          L(!0)
                      }, [u]),
                      q = s.useCallback(e => {
                          var t, r;
                          let n = C.current;
                          if (!T.current.isIOS || !e.clipboardData || !n) return;
                          let a = e.clipboardData.getData("text/plain");
                          e.preventDefault();
                          let s = null == (t = C.current) ? void 0 : t.selectionStart,
                              l = null == (r = C.current) ? void 0 : r.selectionEnd,
                              i = (s !== l ? k.slice(0, s) + a + k.slice(l) : k.slice(0, s) + a + k.slice(s)).slice(0, u);
                          if (i.length > 0 && _ && !_.test(i)) return;
                          n.value = i, S(i);
                          let o = Math.min(i.length, u - 1),
                              c = i.length;
                          n.setSelectionRange(o, c), G(o), V(c)
                      }, [u, S, _, k]),
                      J = s.useMemo(() => ({
                          position: "relative",
                          cursor: y.disabled ? "default" : "text",
                          userSelect: "none",
                          WebkitUserSelect: "none",
                          pointerEvents: "none"
                      }), [y.disabled]),
                      Q = s.useMemo(() => ({
                          position: "absolute",
                          inset: 0,
                          width: K.willPushPWMBadge ? `calc(100% + ${K.PWM_BADGE_SPACE_WIDTH})` : "100%",
                          clipPath: K.willPushPWMBadge ? `inset(0 ${K.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
                          height: "100%",
                          display: "flex",
                          textAlign: m,
                          opacity: "1",
                          color: "transparent",
                          pointerEvents: "all",
                          background: "transparent",
                          caretColor: "transparent",
                          border: "0 solid transparent",
                          outline: "0 solid transparent",
                          boxShadow: "none",
                          lineHeight: "1",
                          letterSpacing: "-.5em",
                          fontSize: "var(--root-height)",
                          fontFamily: "monospace",
                          fontVariantNumeric: "tabular-nums"
                      }), [K.PWM_BADGE_SPACE_WIDTH, K.willPushPWMBadge, m]),
                      X = s.useMemo(() => s.createElement("input", R(z({
                          autoComplete: y.autoComplete || "one-time-code"
                      }, y), {
                          "data-input-otp": !0,
                          "data-input-otp-mss": B,
                          "data-input-otp-mse": H,
                          inputMode: f,
                          pattern: null == _ ? void 0 : _.source,
                          style: Q,
                          maxLength: u,
                          value: k,
                          ref: C,
                          onPaste: e => {
                              var t;
                              q(e), null == (t = y.onPaste) || t.call(y, e)
                          },
                          onChange: Y,
                          onMouseOver: e => {
                              var t;
                              Z(!0), null == (t = y.onMouseOver) || t.call(y, e)
                          },
                          onMouseLeave: e => {
                              var t;
                              Z(!1), null == (t = y.onMouseLeave) || t.call(y, e)
                          },
                          onFocus: e => {
                              var t;
                              $(), null == (t = y.onFocus) || t.call(y, e)
                          },
                          onBlur: e => {
                              var t;
                              L(!1), null == (t = y.onBlur) || t.call(y, e)
                          }
                      })), [Y, $, q, f, Q, u, H, B, y, null == _ ? void 0 : _.source, k]),
                      U = s.useMemo(() => ({
                          slots: Array.from({
                              length: u
                          }).map((e, t) => {
                              let r = A && null !== B && null !== H && (B === H && t === B || t >= B && t < H),
                                  n = void 0 !== k[t] ? k[t] : null;
                              return {
                                  char: n,
                                  isActive: r,
                                  hasFakeCaret: r && null === n
                              }
                          }),
                          isFocused: A,
                          isHovering: !y.disabled && W
                      }), [A, W, u, H, B, y.disabled, k]),
                      ee = s.useMemo(() => w ? w(U) : s.createElement(M.Provider, {
                          value: U
                      }, j), [j, U, w]);
                  return s.createElement(s.Fragment, null, null !== v && s.createElement("noscript", null, s.createElement("style", null, v)), s.createElement("div", {
                      ref: E,
                      "data-input-otp-container": !0,
                      style: J,
                      className: g
                  }, ee, s.createElement("div", {
                      style: {
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none"
                      }
                  }, X)))
              });

          function F(e, t) {
              try {
                  e.insertRule(t)
              } catch (e) {
                  console.error("input-otp could not insert CSS rule:", t)
              }
          }
          T.displayName = "Input";
          var O = `
[data-input-otp] {
--nojs-bg: white !important;
--nojs-fg: black !important;

background-color: var(--nojs-bg) !important;
color: var(--nojs-fg) !important;
caret-color: var(--nojs-fg) !important;
letter-spacing: .25em !important;
text-align: center !important;
border: 1px solid var(--nojs-fg) !important;
border-radius: 4px !important;
width: 100% !important;
}
@media (prefers-color-scheme: dark) {
[data-input-otp] {
  --nojs-bg: black !important;
  --nojs-fg: white !important;
}
}`;
          /**
           * @license lucide-react v0.363.0 - ISC
           *
           * This source code is licensed under the ISC license.
           * See the LICENSE file in the root directory of this source tree.
           */
          let D = (0, r(5711).Z)("Dot", [
                  ["circle", {
                      cx: "12.1",
                      cy: "12.1",
                      r: "1",
                      key: "18d7e5"
                  }]
              ]),
              W = s.forwardRef((e, t) => {
                  let {
                      className: r,
                      containerClassName: a,
                      ...s
                  } = e;
                  return (0, n.jsx)(T, {
                      ref: t,
                      containerClassName: (0, h.cn)("flex items-center gap-2 has-[:disabled]:opacity-50", a),
                      className: (0, h.cn)("disabled:cursor-not-allowed", r),
                      ...s
                  })
              });
          W.displayName = "InputOTP";
          let Z = s.forwardRef((e, t) => {
              let {
                  className: r,
                  ...a
              } = e;
              return (0, n.jsx)("div", {
                  ref: t,
                  className: (0, h.cn)("flex items-center", r),
                  ...a
              })
          });
          Z.displayName = "InputOTPGroup";
          let A = s.forwardRef((e, t) => {
              let {
                  index: r,
                  className: a,
                  ...l
              } = e, {
                  char: i,
                  hasFakeCaret: o,
                  isActive: c
              } = s.useContext(M).slots[r];
              return (0, n.jsxs)("div", {
                  ref: t,
                  className: (0, h.cn)("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", c && "z-10 ring-2 ring-ring ring-offset-background", a),
                  ...l,
                  children: [i, o && (0, n.jsx)("div", {
                      className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                      children: (0, n.jsx)("div", {
                          className: "h-4 w-px animate-caret-blink bg-foreground duration-1000"
                      })
                  })]
              })
          });
          A.displayName = "InputOTPSlot";
          let L = s.forwardRef((e, t) => {
              let {
                  ...r
              } = e;
              return (0, n.jsx)("div", {
                  ref: t,
                  role: "separator",
                  ...r,
                  children: (0, n.jsx)(D, {})
              })
          });
          L.displayName = "InputOTPSeparator";
          var B = r(4462);
          let G = ["/auth", "/notifications", "/servers", "/settings"];

          function H(e) {
              let {
                  className: t,
                  ...r
              } = e, i = (0, c.useRouter)(), [N, k] = s.useState(!1), [P, S] = s.useState(["liman"]);
              s.useEffect(() => {
                  (async () => {
                      try {
                          let e = await a.dJ.get("/auth/types");
                          S(e.data);
                          let t = await a.dJ.get("/auth/gate");
                          C.setValue("type", t.data)
                      } catch (e) {
                          console.error("An error occurred while fetching auth data:", e)
                      } finally {
                          k(!1)
                      }
                  })()
              }, []);
              let _ = x.Ry({
                      type: x.Km(["liman", "ldap", "keycloak"]),
                      name: x.Z_({
                          required_error: "Kullanıcı adı alanı boş olamaz."
                      }),
                      password: x.Z_({
                          required_error: "L\xfctfen parolanızı giriniz."
                      })
                  }),
                  C = (0, f.cI)({
                      resolver: (0, d.F)(_),
                      defaultValues: {
                          type: "liman"
                      }
                  }),
                  [E, z] = s.useState(!1),
                  [R, I] = s.useState(),
                  [M, T] = s.useState(),
                  [F, O] = s.useState(!1),
                  D = _.and(x.Ry({
                      otp: x.Z_({
                          required_error: "L\xfctfen doğrulama kodunu giriniz."
                      })
                  })),
                  H = (0, f.cI)({
                      resolver: (0, d.F)(D)
                  }),
                  [V, K] = s.useState(!1),
                  Y = x.Ry({
                      name: x.Z_(),
                      password: x.Z_(),
                      newPassword: x.Z_(),
                      newPasswordConfirm: x.Z_()
                  }).refine(e => e.newPassword === e.newPasswordConfirm, {
                      message: "Şifreler uyuşmuyor.",
                      path: ["newPasswordConfirm"]
                  }),
                  $ = (0, f.cI)({
                      resolver: (0, d.F)(Y)
                  }),
                  [q, J] = s.useState(""),
                  {
                      login: Q
                  } = g(),
                  X = function() {
                      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                          t = i.query.redirect || "/";
                      return (t = t.replace("http://", "").replace("https://", "").replace("www.", ""), e) ? "/" : ((() => {
                          try {
                              let e = new URL(t, location.origin);
                              if (e.origin !== new URL(location.origin).origin) return !1;
                              for (let t of G)
                                  if (e.pathname.startsWith(t)) return !0;
                              return !1
                          } catch (e) {
                              return !1
                          }
                      })() || (t = "/"), t)
                  },
                  U = async e => {
                      k(!0);
                      try {
                          let t;
                          t = e.otp ? await Q(e.name, e.password, e.otp, e.type) : await Q(e.name, e.password, "", e.type), J(""), setTimeout(() => {
                              let e = t.data.user,
                                  r = !!(0 === e.status && e.permissions.view.redirect);
                              i.push(X(r))
                          }, 500)
                      } catch (t) {
                          if (!t.response) {
                              J(t.message);
                              return
                          }
                          t.response.data.message ? J(t.response.data.message) : J(t.message), t.response.data.new_password && J(t.response.data.new_password[1] || t.response.data.new_password[0] || t.response.data.new_password), 405 === t.response.status && ($.reset({
                              name: e.name,
                              password: e.password,
                              newPassword: "",
                              newPasswordConfirm: ""
                          }), K(!0)), 402 === t.response.status && (T({
                              username: e.name,
                              password: e.password
                          }), I(t.response.data), z(!0)), 406 === t.response.status && (H.reset({
                              ...e,
                              otp: ""
                          }), O(!0))
                      } finally {
                          k(!1)
                      }
                  }, ee = async e => {
                      k(!0);
                      let {
                          name: t,
                          password: r,
                          newPassword: n
                      } = e;
                      try {
                          await a.ON.login(t, r, n), await Q(t, n, ""), J(""), setTimeout(() => {
                              i.push(X())
                          }, 500)
                      } catch (e) {
                          if (!e.response) {
                              J(e.message);
                              return
                          }
                          e.response.data.message ? J(e.response.data.message) : J(e.message), e.response.data.new_password && J(e.response.data.new_password[1] || e.response.data.new_password[0] || e.response.data.new_password)
                      } finally {
                          k(!1)
                      }
                  }, et = async (e, t, r) => {
                      if (!e || !t || !r) {
                          J("Kurulum i\xe7in gerekli bilgiler eksik.");
                          return
                      }
                      try {
                          k(!0), a.ON.saveTwoFactorToken(e, t, r).then(() => {
                              J("Kurulum başarılı. Tekrar giriş yapınız.")
                          }).catch(e => {
                              J(e.response.data.message)
                          }).finally(() => {
                              k(!1)
                          }), z(!1)
                      } catch (e) {
                          J(e.message)
                      }
                  };
              return (0, n.jsx)("div", {
                  className: (0, h.cn)("grid gap-6", t),
                  ...r,
                  children: (0, n.jsxs)("div", {
                      className: "grid gap-4",
                      children: [q && (0, n.jsxs)(b.bZ, {
                          children: [(0, n.jsx)(u.Z, {
                              className: "size-4"
                          }), (0, n.jsx)(b.Cd, {
                              children: "Bilgi"
                          }), (0, n.jsx)(b.X, {
                              children: q
                          })]
                      }), !E && !F && !V && (0, n.jsx)(y.l0, {
                          ...C,
                          children: (0, n.jsxs)("form", {
                              onSubmit: C.handleSubmit(U),
                              className: "grid gap-4",
                              children: [(0, n.jsx)(y.Wi, {
                                  control: C.control,
                                  name: "type",
                                  render: e => {
                                      let {
                                          field: t
                                      } = e;
                                      return (0, n.jsxs)("div", {
                                          className: "flex flex-col gap-2",
                                          children: [(0, n.jsx)(j._, {
                                              htmlFor: "type",
                                              children: "Giriş Kapısı Se\xe7imi"
                                          }), (0, n.jsxs)(B.Ph, {
                                              onValueChange: t.onChange,
                                              value: t.value,
                                              children: [(0, n.jsx)(B.i4, {
                                                  children: (0, n.jsx)(B.ki, {})
                                              }), (0, n.jsxs)(B.Bw, {
                                                  children: [(0, n.jsx)(B.Ql, {
                                                      value: "liman",
                                                      children: "DZ"
                                                  }), P.includes("ldap") && (0, n.jsx)(B.Ql, {
                                                      value: "ldap",
                                                      children: "LDAP"
                                                  }), P.includes("keycloak") && (0, n.jsx)(B.Ql, {
                                                      value: "keycloak",
                                                      children: "Keycloak"
                                                  })]
                                              })]
                                          }), (0, n.jsx)(y.zG, {})]
                                      })
                                  }
                              }), (0, n.jsx)(y.Wi, {
                                  control: C.control,
                                  name: "name",
                                  render: e => {
                                      let {
                                          field: t
                                      } = e;
                                      return (0, n.jsxs)("div", {
                                          className: "flex flex-col gap-3",
                                          children: [(0, n.jsx)(j._, {
                                              htmlFor: "name",
                                              children: "Kullanıcı Adı"
                                          }), (0, n.jsx)(w.I, {
                                              id: "name",
                                              placeholder: "example@dz.dev",
                                              autoComplete: "new-password",
                                              ...t
                                          }), (0, n.jsx)(y.zG, {})]
                                      })
                                  }
                              }), (0, n.jsx)(y.Wi, {
                                  control: C.control,
                                  name: "password",
                                  render: e => {
                                      let {
                                          field: t
                                      } = e;
                                      return (0, n.jsxs)("div", {
                                          className: "flex flex-col gap-3",
                                          children: [(0, n.jsxs)("div", {
                                              className: "flex items-center justify-between",
                                              children: [(0, n.jsx)(j._, {
                                                  htmlFor: "password",
                                                  children: "Parola"
                                              }), (0, n.jsx)("small", {
                                                  className: "italic text-muted-foreground",
                                                  children: (0, n.jsx)(o(), {
                                                      href: "/auth/forgot_password",
                                                      tabIndex: -1,
                                                      children: "Şifrenizi mi unuttunuz?"
                                                  })
                                              })]
                                          }), (0, n.jsx)(w.I, {
                                              id: "password",
                                              placeholder: "••••••••••",
                                              type: "password",
                                              autoComplete: "new-password",
                                              ...t
                                          }), (0, n.jsx)(y.zG, {})]
                                      })
                                  }
                              }), (0, n.jsxs)(v.z, {
                                  disabled: N,
                                  className: "mt-4",
                                  type: "submit",
                                  children: [N ? (0, n.jsx)(l.P.spinner, {
                                      className: "mr-2 size-4 animate-spin"
                                  }) : (0, n.jsx)(m.Z, {
                                      className: "mr-2 size-4"
                                  }), "Giriş Yap"]
                              })]
                          })
                      }), V && (0, n.jsx)(y.l0, {
                          ...$,
                          children: (0, n.jsxs)("form", {
                              onSubmit: $.handleSubmit(ee),
                              className: "grid gap-4",
                              children: [(0, n.jsx)(y.Wi, {
                                  control: $.control,
                                  name: "name",
                                  render: e => {
                                      let {
                                          field: t
                                      } = e;
                                      return (0, n.jsxs)("div", {
                                          className: "flex flex-col gap-3",
                                          children: [(0, n.jsx)(j._, {
                                              htmlFor: "name",
                                              children: "Şifresi Değiştirilecek Kullanıcı"
                                          }), (0, n.jsx)(w.I, {
                                              value: t.value,
                                              disabled: !0
                                          })]
                                      })
                                  }
                              }), (0, n.jsx)(y.Wi, {
                                  control: $.control,
                                  name: "newPassword",
                                  render: e => {
                                      let {
                                          field: t
                                      } = e;
                                      return (0, n.jsxs)("div", {
                                          className: "flex flex-col gap-3",
                                          children: [(0, n.jsx)(j._, {
                                              htmlFor: "newPassword",
                                              children: "Yeni Parolanız"
                                          }), (0, n.jsx)(w.I, {
                                              id: "newPassword",
                                              placeholder: "••••••••••",
                                              type: "password",
                                              ...t
                                          }), (0, n.jsx)(y.zG, {})]
                                      })
                                  }
                              }), (0, n.jsx)(y.Wi, {
                                  control: $.control,
                                  name: "newPasswordConfirm",
                                  render: e => {
                                      let {
                                          field: t
                                      } = e;
                                      return (0, n.jsxs)("div", {
                                          className: "flex flex-col gap-3",
                                          children: [(0, n.jsx)(j._, {
                                              htmlFor: "newPasswordConfirm",
                                              children: "Yeni Parolanızı Onaylayın"
                                          }), (0, n.jsx)(w.I, {
                                              id: "newPasswordConfirm",
                                              placeholder: "••••••••••",
                                              type: "password",
                                              ...t
                                          }), (0, n.jsx)(y.zG, {})]
                                      })
                                  }
                              }), (0, n.jsxs)(v.z, {
                                  disabled: N,
                                  className: "mt-4",
                                  type: "submit",
                                  children: [N ? (0, n.jsx)(l.P.spinner, {
                                      className: "mr-2 size-4 animate-spin"
                                  }) : (0, n.jsx)(m.Z, {
                                      className: "mr-2 size-4"
                                  }), "Giriş Yap"]
                              })]
                          })
                      }), E && (0, n.jsxs)("div", {
                          className: "mt-5 flex grow flex-col items-center justify-center",
                          children: [(0, n.jsx)("div", {
                              dangerouslySetInnerHTML: {
                                  __html: (null == R ? void 0 : R.image) || ""
                              },
                              style: {
                                  borderRadius: "24px",
                                  overflow: "hidden"
                              }
                          }), (0, n.jsx)("p", {
                              className: "mt-5 text-center",
                              children: "Google Authenticator uygulamasına QR kodu tarattıktan sonra kaydet d\xfcğmesine basınız."
                          }), (0, n.jsxs)(v.z, {
                              disabled: N,
                              className: "mt-8 w-full",
                              onClick: () => et((null == R ? void 0 : R.secret) || "", null == M ? void 0 : M.username, null == M ? void 0 : M.password),
                              children: [N ? (0, n.jsx)(l.P.spinner, {
                                  className: "mr-2 size-4 animate-spin"
                              }) : (0, n.jsx)(p.Z, {
                                  className: "mr-2 size-4"
                              }), "Kurulumu Tamamla"]
                          })]
                      }), F && (0, n.jsx)(y.l0, {
                          ...H,
                          children: (0, n.jsxs)("form", {
                              onSubmit: H.handleSubmit(U),
                              className: "grid gap-4",
                              children: [(0, n.jsx)(y.Wi, {
                                  control: H.control,
                                  name: "otp",
                                  render: e => {
                                      let {
                                          field: t
                                      } = e;
                                      return (0, n.jsxs)(y.xJ, {
                                          children: [(0, n.jsx)(y.lX, {
                                              children: "OTP Şifresi"
                                          }), (0, n.jsx)(y.NI, {
                                              children: (0, n.jsxs)(W, {
                                                  maxLength: 6,
                                                  ...t,
                                                  children: [(0, n.jsxs)(Z, {
                                                      children: [(0, n.jsx)(A, {
                                                          index: 0
                                                      }), (0, n.jsx)(A, {
                                                          index: 1
                                                      }), (0, n.jsx)(A, {
                                                          index: 2
                                                      })]
                                                  }), (0, n.jsx)(L, {}), (0, n.jsxs)(Z, {
                                                      children: [(0, n.jsx)(A, {
                                                          index: 3
                                                      }), (0, n.jsx)(A, {
                                                          index: 4
                                                      }), (0, n.jsx)(A, {
                                                          index: 5
                                                      })]
                                                  })]
                                              })
                                          }), (0, n.jsx)(y.pf, {
                                              children: "Telefonunuza g\xf6nderilen şifreyi giriniz."
                                          }), (0, n.jsx)(y.zG, {})]
                                      })
                                  }
                              }), (0, n.jsxs)(v.z, {
                                  disabled: N,
                                  className: "mt-4",
                                  type: "submit",
                                  children: [N ? (0, n.jsx)(l.P.spinner, {
                                      className: "mr-2 size-4 animate-spin"
                                  }) : (0, n.jsx)(m.Z, {
                                      className: "mr-2 size-4"
                                  }), "Giriş Yap"]
                              })]
                          })
                      })]
                  })
              })
          }

          function V() {
              let [e, t] = (0, s.useState)("");
              return (0, s.useEffect)(() => {
                  a.dJ.get("/auth/branding").then(e => {
                      t(e.data.image)
                  })
              }, []), (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)("div", {
                      className: "container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0",
                      children: [(0, n.jsxs)("div", {
                          className: "relative h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex",
                          children: [(0, n.jsx)("div", {
                              className: "absolute inset-0 bg-cover",
                              style: {
                                  backgroundImage: "url(/images/auth-bg.jpg)"
                              }
                          }), (0, n.jsx)("div", {
                              className: "relative z-20 flex items-center text-lg font-medium",
                              children: [!e && (0, n.jsx)(l.P.aciklab, {
                                className: "h-10 w-24 fill-white"
                              }), e && (0, n.jsx)("img", {
                                src: e,
                                alt: "Logo",
                                className: "max-h-32 w-auto"
                            })]
                          }), (0, n.jsxs)("div", {
                              className: "relative z-20 mt-auto",
                              children: [!e && (0, n.jsx)(l.P.aciklab, {
                                  className: "h-12 w-64 fill-white"
                              }), e && (0, n.jsx)("img", {
                                  src: "/images/logo.png", // PNG dosyanın yolu
                                  alt: "Logo",
                                  className: "max-h-32 w-auto"
                              })]
                          })]
                      }), (0, n.jsx)("div", {
                          className: "lg:p-8",
                          children: (0, n.jsxs)("div", {
                              className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]",
                              children: [(0, n.jsxs)("div", {
                                  className: "mb-5 flex flex-col space-y-2 text-center",
                                  children: [(0, n.jsx)("h1", {
                                      className: "text-2xl font-semibold tracking-tight",
                                      children: "Hesabınıza giriş yapın"
                                  }), (0, n.jsx)("p", {
                                      className: "text-sm text-muted-foreground",
                                      children: "Giriş yapmak i\xe7in sistem y\xf6neticinizin size sağladığı giriş bilgilerini giriniz."
                                  })]
                              }), (0, n.jsx)(H, {})]
                          })
                      })]
                  })
              })
          }
      }
  },
  function(e) {
      e.O(0, [5059, 3051, 2888, 9774, 179], function() {
          return e(e.s = 163)
      }), _N_E = e.O()
  }
]);