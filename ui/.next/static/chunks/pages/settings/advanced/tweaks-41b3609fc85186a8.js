(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [993], {
        3696: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            /**
             * @license lucide-react v0.363.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let s = (0, a(5711).Z)("Save", [
                ["path", {
                    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
                    key: "1owoqh"
                }],
                ["polyline", {
                    points: "17 21 17 13 7 13 7 21",
                    key: "1md35c"
                }],
                ["polyline", {
                    points: "7 3 7 8 15 8",
                    key: "8nz8an"
                }]
            ])
        },
        4632: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            /**
             * @license lucide-react v0.363.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let s = (0, a(5711).Z)("ScrollText", [
                ["path", {
                    d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",
                    key: "13a6an"
                }],
                ["path", {
                    d: "M19 17V5a2 2 0 0 0-2-2H4",
                    key: "zz82l3"
                }],
                ["path", {
                    d: "M15 8h-5",
                    key: "1khuty"
                }],
                ["path", {
                    d: "M15 12h-5",
                    key: "r7krc0"
                }]
            ])
        },
        7954: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/settings/advanced/tweaks", function() {
                return a(1948)
            }])
        },
        3051: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return u
                }
            });
            var s = a(5893),
                r = a(5711);
            /**
             * @license lucide-react v0.363.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let n = (0, r.Z)("Award", [
                    ["circle", {
                        cx: "12",
                        cy: "8",
                        r: "6",
                        key: "1vp47v"
                    }],
                    ["path", {
                        d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
                        key: "em7aur"
                    }]
                ]),
                l = (0, r.Z)("CloudCog", [
                    ["circle", {
                        cx: "12",
                        cy: "17",
                        r: "3",
                        key: "1spfwm"
                    }],
                    ["path", {
                        d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",
                        key: "zaobp"
                    }],
                    ["path", {
                        d: "m15.7 18.4-.9-.3",
                        key: "4qxpbn"
                    }],
                    ["path", {
                        d: "m9.2 15.9-.9-.3",
                        key: "17q7o2"
                    }],
                    ["path", {
                        d: "m10.6 20.7.3-.9",
                        key: "1pf4s2"
                    }],
                    ["path", {
                        d: "m13.1 14.2.3-.9",
                        key: "1mnuqm"
                    }],
                    ["path", {
                        d: "m13.6 20.7-.4-1",
                        key: "1jpd1m"
                    }],
                    ["path", {
                        d: "m10.8 14.3-.4-1",
                        key: "17ugyy"
                    }],
                    ["path", {
                        d: "m8.3 18.6 1-.4",
                        key: "s42vdx"
                    }],
                    ["path", {
                        d: "m14.7 15.8 1-.4",
                        key: "2wizun"
                    }]
                ]);
            var d = a(4632),
                i = a(5358),
                c = a(7421),
                o = a(9999);

            function u(e) {
                let {
                    children: t
                } = e, {
                    t: a
                } = (0, c.$G)("settings"), r = [{
                    id: "certificates",
                    icon: n,
                    title: a("advanced.certificates.title"),
                    description: a("advanced.certificates.description"),
                    href: "/settings/advanced/certificates",
                    enabled: !0
                }, {
                    id: "dns",
                    icon: l,
                    title: a("advanced.dns.title"),
                    description: a("advanced.dns.description"),
                    href: "/settings/advanced/dns",
                    enabled: !0
                }, {
                    id: "log_rotation",
                    icon: d.Z,
                    title: a("advanced.logrotation.title"),
                    description: a("advanced.logrotation.description"),
                    href: "/settings/advanced/log_rotation",
                    enabled: !0
                }, {
                    id: "tweaks",
                    icon: i.Z,
                    title: a("advanced.tweaks.title"),
                    description: a("advanced.tweaks.description"),
                    href: "/settings/advanced/tweaks",
                    enabled: !0
                }];
                return (0, s.jsxs)("div", {
                    className: "grid grid-cols-4",
                    style: {
                        height: "var(--container-height)"
                    },
                    children: [(0, s.jsxs)("div", {
                        className: "col-span-1 border-r",
                        children: [(0, s.jsx)("div", {
                            className: "flex items-center border-b p-8 text-2xl font-bold",
                            children: a("advanced.title")
                        }), r.map(e => (0, s.jsx)(o.Z, {
                            title: e.title,
                            description: e.description,
                            icon: e.icon,
                            href: e.href,
                            enabled: e.enabled
                        }, e.id))]
                    }), (0, s.jsx)("div", {
                        className: "col-span-3",
                        children: t
                    })]
                })
            }
        },
        2766: function(e, t, a) {
            "use strict";
            a.d(t, {
                NI: function() {
                    return p
                },
                Wi: function() {
                    return u
                },
                l0: function() {
                    return c
                },
                lX: function() {
                    return h
                },
                pf: function() {
                    return v
                },
                xJ: function() {
                    return f
                },
                zG: function() {
                    return j
                }
            });
            var s = a(5893),
                r = a(7294),
                n = a(8426),
                l = a(7536),
                d = a(7327),
                i = a(2297);
            let c = l.RV,
                o = r.createContext({}),
                u = e => {
                    let {
                        ...t
                    } = e;
                    return (0, s.jsx)(o.Provider, {
                        value: {
                            name: t.name
                        },
                        children: (0, s.jsx)(l.Qr, {
                            ...t
                        })
                    })
                },
                m = () => {
                    let e = r.useContext(o),
                        t = r.useContext(x),
                        {
                            getFieldState: a,
                            formState: s
                        } = (0, l.Gc)(),
                        n = a(e.name, s);
                    if (!e) throw Error("useFormField should be used within <FormField>");
                    let {
                        id: d
                    } = t;
                    return {
                        id: d,
                        name: e.name,
                        formItemId: "".concat(d, "-form-item"),
                        formDescriptionId: "".concat(d, "-form-item-description"),
                        formMessageId: "".concat(d, "-form-item-message"),
                        ...n
                    }
                },
                x = r.createContext({}),
                f = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...n
                    } = e, l = r.useId();
                    return (0, s.jsx)(x.Provider, {
                        value: {
                            id: l
                        },
                        children: (0, s.jsx)("div", {
                            ref: t,
                            className: (0, d.cn)("space-y-2", a),
                            ...n
                        })
                    })
                });
            f.displayName = "FormItem";
            let h = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e, {
                    error: n,
                    formItemId: l
                } = m();
                return (0, s.jsx)(i._, {
                    ref: t,
                    className: (0, d.cn)(n && "text-destructive", a),
                    htmlFor: l,
                    ...r
                })
            });
            h.displayName = "FormLabel";
            let p = r.forwardRef((e, t) => {
                let {
                    ...a
                } = e, {
                    error: r,
                    formItemId: l,
                    formDescriptionId: d,
                    formMessageId: i
                } = m();
                return (0, s.jsx)(n.g7, {
                    ref: t,
                    id: l,
                    "aria-describedby": r ? "".concat(d, " ").concat(i) : "".concat(d),
                    "aria-invalid": !!r,
                    ...a
                })
            });
            p.displayName = "FormControl";
            let v = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e, {
                    formDescriptionId: n
                } = m();
                return (0, s.jsx)("p", {
                    ref: t,
                    id: n,
                    className: (0, d.cn)("text-sm text-muted-foreground", a),
                    ...r
                })
            });
            v.displayName = "FormDescription";
            let j = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...n
                } = e, {
                    error: l,
                    formMessageId: i
                } = m(), c = l ? String(null == l ? void 0 : l.message) : r;
                return c ? (0, s.jsx)("p", {
                    ref: t,
                    id: i,
                    className: (0, d.cn)("text-sm font-medium text-destructive", a),
                    ...n,
                    children: c
                }) : null
            });
            j.displayName = "FormMessage"
        },
        9999: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var s = a(5893),
                r = a(1664),
                n = a.n(r),
                l = a(1163),
                d = a(7327);

            function i(e) {
                return (0, s.jsxs)(s.Fragment, {
                    children: [e.enabled && (0, s.jsx)(n(), {
                        href: e.href,
                        children: (0, s.jsx)(c, {
                            ...e
                        })
                    }), !e.enabled && (0, s.jsx)(c, {
                        ...e
                    })]
                })
            }

            function c(e) {
                let t = (0, l.useRouter)();
                return (0, s.jsxs)("div", {
                    className: (0, d.cn)("flex w-full gap-6 border-b p-6", t.asPath.includes(e.href) && "bg-secondary/50 dark:bg-secondary/5", !e.enabled && "cursor-not-allowed"),
                    children: [(0, s.jsx)("div", {
                        className: "icon self-start rounded-md bg-secondary p-3 dark:bg-secondary/10",
                        children: (0, s.jsx)(e.icon, {
                            className: "size-5 text-secondary-foreground/70 dark:text-white/70"
                        })
                    }), (0, s.jsxs)("div", {
                        className: (0, d.cn)(!e.enabled && "text-muted-foreground"),
                        children: [(0, s.jsx)("h3", {
                            className: "font-semibold tracking-tight",
                            children: e.title
                        }), (0, s.jsx)("p", {
                            className: "text-sm text-gray-500",
                            children: e.description
                        })]
                    })]
                })
            }
        },
        3749: function(e, t, a) {
            "use strict";
            a.d(t, {
                Ol: function() {
                    return d
                },
                Zb: function() {
                    return l
                },
                aY: function() {
                    return c
                },
                ll: function() {
                    return i
                }
            });
            var s = a(5893),
                r = a(7294),
                n = a(7327);
            let l = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", a),
                    ...r
                })
            });
            l.displayName = "Card";
            let d = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)("flex flex-col space-y-1.5 p-6", a),
                    ...r
                })
            });
            d.displayName = "CardHeader";
            let i = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)("h3", {
                    ref: t,
                    className: (0, n.cn)("text-lg font-semibold leading-none tracking-tight", a),
                    ...r
                })
            });
            i.displayName = "CardTitle", r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)("p", {
                    ref: t,
                    className: (0, n.cn)("text-sm text-muted-foreground", a),
                    ...r
                })
            }).displayName = "CardDescription";
            let c = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)("p-6 pt-0", a),
                    ...r
                })
            });
            c.displayName = "CardContent", r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)(" flex items-center p-6 pt-0", a),
                    ...r
                })
            }).displayName = "CardFooter"
        },
        2297: function(e, t, a) {
            "use strict";
            a.d(t, {
                _: function() {
                    return c
                }
            });
            var s = a(5893),
                r = a(7294),
                n = a(9102),
                l = a(5139),
                d = a(7327);
            let i = (0, l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                c = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...r
                    } = e;
                    return (0, s.jsx)(n.f, {
                        ref: t,
                        className: (0, d.cn)(i(), a),
                        ...r
                    })
                });
            c.displayName = n.f.displayName
        },
        986: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return l
                }
            });
            var s = a(5893),
                r = a(9008),
                n = a.n(r);

            function l(e) {
                let {
                    title: t,
                    description: a,
                    rightSide: r
                } = e;
                return (0, s.jsxs)("div", {
                    className: "flex-1 flex-col p-8 md:flex",
                    children: [(0, s.jsx)(n(), {
                        children: (0, s.jsx)("title", {
                            children: "".concat(t, " | DZ")
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex items-center justify-between space-y-2",
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)("h2", {
                                className: "text-2xl font-bold tracking-tight",
                                children: t
                            }), (0, s.jsx)("p", {
                                className: "text-muted-foreground",
                                children: a
                            })]
                        }), r && (0, s.jsx)("div", {
                            className: "flex items-center",
                            children: r
                        })]
                    })]
                })
            }
        },
        4462: function(e, t, a) {
            "use strict";
            a.d(t, {
                Bw: function() {
                    return x
                },
                DI: function() {
                    return o
                },
                Ph: function() {
                    return c
                },
                Ql: function() {
                    return h
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
            var s = a(5893),
                r = a(7294),
                n = a(5059),
                l = a(8971),
                d = a(3742),
                i = a(7327);
            let c = n.fC,
                o = n.ZA,
                u = n.B4,
                m = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        children: r,
                        ...d
                    } = e;
                    return (0, s.jsxs)(n.xz, {
                        ref: t,
                        className: (0, i.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", a),
                        ...d,
                        children: [r, (0, s.jsx)(n.JO, {
                            asChild: !0,
                            children: (0, s.jsx)(l.Z, {
                                className: "size-4 opacity-50"
                            })
                        })]
                    })
                });
            m.displayName = n.xz.displayName;
            let x = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    position: l = "popper",
                    ...d
                } = e;
                return (0, s.jsx)(n.h_, {
                    children: (0, s.jsx)(n.VY, {
                        ref: t,
                        className: (0, i.cn)("relative z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === l && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", a),
                        position: l,
                        ...d,
                        children: (0, s.jsx)(n.l_, {
                            className: (0, i.cn)("p-1", "popper" === l && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: r
                        })
                    })
                })
            });
            x.displayName = n.VY.displayName;
            let f = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.__, {
                    ref: t,
                    className: (0, i.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
                    ...r
                })
            });
            f.displayName = n.__.displayName;
            let h = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...l
                } = e;
                return (0, s.jsxs)(n.ck, {
                    ref: t,
                    className: (0, i.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    ...l,
                    children: [(0, s.jsx)("span", {
                        className: "absolute left-2 flex size-3.5 items-center justify-center",
                        children: (0, s.jsx)(n.wU, {
                            children: (0, s.jsx)(d.Z, {
                                className: "size-4"
                            })
                        })
                    }), (0, s.jsx)(n.eT, {
                        children: r
                    })]
                })
            });
            h.displayName = n.ck.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.Z0, {
                    ref: t,
                    className: (0, i.cn)("-mx-1 my-1 h-px bg-muted", a),
                    ...r
                })
            }).displayName = n.Z0.displayName
        },
        1250: function(e, t, a) {
            "use strict";
            a.d(t, {
                r: function() {
                    return y
                }
            });
            var s = a(5893),
                r = a(7294),
                n = a(7462),
                l = a(6206),
                d = a(8771),
                i = a(5360),
                c = a(7342),
                o = a(7898),
                u = a(7546),
                m = a(5320);
            let x = "Switch",
                [f, h] = (0, i.b)(x),
                [p, v] = f(x),
                j = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: a,
                        name: s,
                        checked: i,
                        defaultChecked: o,
                        required: u,
                        disabled: x,
                        value: f = "on",
                        onCheckedChange: h,
                        ...v
                    } = e, [j, N] = (0, r.useState)(null), b = (0, d.e)(t, e => N(e)), y = (0, r.useRef)(!1), _ = !j || !!j.closest("form"), [w = !1, E] = (0, c.T)({
                        prop: i,
                        defaultProp: o,
                        onChange: h
                    });
                    return (0, r.createElement)(p, {
                        scope: a,
                        checked: w,
                        disabled: x
                    }, (0, r.createElement)(m.WV.button, (0, n.Z)({
                        type: "button",
                        role: "switch",
                        "aria-checked": w,
                        "aria-required": u,
                        "data-state": k(w),
                        "data-disabled": x ? "" : void 0,
                        disabled: x,
                        value: f
                    }, v, {
                        ref: b,
                        onClick: (0, l.M)(e.onClick, e => {
                            E(e => !e), _ && (y.current = e.isPropagationStopped(), y.current || e.stopPropagation())
                        })
                    })), _ && (0, r.createElement)(g, {
                        control: j,
                        bubbles: !y.current,
                        name: s,
                        value: f,
                        checked: w,
                        required: u,
                        disabled: x,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                }),
                N = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: a,
                        ...s
                    } = e, l = v("SwitchThumb", a);
                    return (0, r.createElement)(m.WV.span, (0, n.Z)({
                        "data-state": k(l.checked),
                        "data-disabled": l.disabled ? "" : void 0
                    }, s, {
                        ref: t
                    }))
                }),
                g = e => {
                    let {
                        control: t,
                        checked: a,
                        bubbles: s = !0,
                        ...l
                    } = e, d = (0, r.useRef)(null), i = (0, o.D)(a), c = (0, u.t)(t);
                    return (0, r.useEffect)(() => {
                        let e = d.current,
                            t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                        if (i !== a && t) {
                            let r = new Event("click", {
                                bubbles: s
                            });
                            t.call(e, a), e.dispatchEvent(r)
                        }
                    }, [i, a, s]), (0, r.createElement)("input", (0, n.Z)({
                        type: "checkbox",
                        "aria-hidden": !0,
                        defaultChecked: a
                    }, l, {
                        tabIndex: -1,
                        ref: d,
                        style: {
                            ...e.style,
                            ...c,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function k(e) {
                return e ? "checked" : "unchecked"
            }
            var b = a(7327);
            let y = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(j, {
                    className: (0, b.cn)("peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", a),
                    ...r,
                    ref: t,
                    children: (0, s.jsx)(N, {
                        className: (0, b.cn)("pointer-events-none block size-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
                    })
                })
            });
            y.displayName = j.displayName
        },
        5050: function(e, t, a) {
            "use strict";
            a.d(t, {
                p: function() {
                    return n
                }
            }), a(7294);
            var s = a(7421),
                r = a(4712);

            function n() {
                let {
                    t: e
                } = (0, s.$G)("common");
                return {
                    toast: t => {
                        let {
                            title: a,
                            description: s,
                            variant: n
                        } = t, l = {
                            description: s,
                            duration: 6e3,
                            dismissible: !0
                        }, d = "";
                        switch (a == e("information") ? d = "info" : a == e("success") ? d = "success" : a == e("error") ? d = "error" : a == e("warning") && (d = "warning"), n && (d = n), d) {
                            case "success":
                                return r.A.success(a, l);
                            case "error":
                            case "destructive":
                                return r.A.error(a, l);
                            case "warning":
                                return r.A.warning(a, l);
                            case "info":
                                return r.A.info(a, l);
                            default:
                                return (0, r.A)(a, l)
                        }
                    }
                }
            }
        },
        1948: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var s = a(5893),
                r = a(7294),
                n = a(9774),
                l = a(6312),
                d = a(5711);
            /**
             * @license lucide-react v0.363.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let i = (0, d.Z)("Bug", [
                    ["path", {
                        d: "m8 2 1.88 1.88",
                        key: "fmnt4t"
                    }],
                    ["path", {
                        d: "M14.12 3.88 16 2",
                        key: "qol33r"
                    }],
                    ["path", {
                        d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",
                        key: "d7y7pr"
                    }],
                    ["path", {
                        d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
                        key: "xs1cw7"
                    }],
                    ["path", {
                        d: "M12 20v-9",
                        key: "1qisl0"
                    }],
                    ["path", {
                        d: "M6.53 9C4.6 8.8 3 7.1 3 5",
                        key: "32zzws"
                    }],
                    ["path", {
                        d: "M6 13H2",
                        key: "82j7cp"
                    }],
                    ["path", {
                        d: "M3 21c0-2.1 1.7-3.9 3.8-4",
                        key: "4p0ekp"
                    }],
                    ["path", {
                        d: "M20.97 5c0 2.1-1.6 3.8-3.5 4",
                        key: "18gb23"
                    }],
                    ["path", {
                        d: "M22 13h-4",
                        key: "1jl80f"
                    }],
                    ["path", {
                        d: "M17.2 17c2.1.1 3.8 1.9 3.8 4",
                        key: "k3fwyw"
                    }]
                ]),
                c = (0, d.Z)("Puzzle", [
                    ["path", {
                        d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
                        key: "i0oyt7"
                    }]
                ]),
                o = (0, d.Z)("FolderArchive", [
                    ["circle", {
                        cx: "15",
                        cy: "19",
                        r: "2",
                        key: "u2pros"
                    }],
                    ["path", {
                        d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
                        key: "1jj40k"
                    }],
                    ["path", {
                        d: "M15 11v-1",
                        key: "cntcp"
                    }],
                    ["path", {
                        d: "M15 17v-2",
                        key: "1279jj"
                    }]
                ]);
            var u = a(3696),
                m = a(7536),
                x = a(7421),
                f = a(1604),
                h = a(7327),
                p = a(7249),
                v = a(3749),
                j = a(733),
                N = a(5037),
                g = a(2297),
                k = a(986),
                b = a(4462),
                y = a(1250),
                _ = a(5050),
                w = a(3051),
                E = a(2766);
            let L = () => {
                let {
                    t: e
                } = (0, x.$G)("settings"), {
                    toast: t
                } = (0, _.p)(), a = f.Ry({
                    APP_LANG: f.Z_(),
                    APP_NOTIFICATION_EMAIL: f.Z_().max(300).email(),
                    APP_URL: f.Z_().max(300).url(),
                    EXTENSION_TIMEOUT: f.Z_().max(3, {
                        message: e("advanced.tweaks.validation")
                    }).refine(e => !Number.isNaN(parseInt(e, 10)), {
                        message: e("advanced.tweaks.validation")
                    }),
                    APP_DEBUG: f.O7(),
                    EXTENSION_DEVELOPER_MODE: f.O7(),
                    NEW_LOG_LEVEL: f.Z_(),
                    LDAP_IGNORE_CERT: f.O7(),
                    LOGIN_IMAGE: f.Z_().optional(),
                    DEFAULT_AUTH_GATE: f.Km(["ldap", "liman", "keycloak"]),
                    JWT_TTL: f.oQ.number().min(15).max(999999)
                }), d = (0, m.cI)({
                    resolver: (0, l.F)(a)
                });
                return (0, r.useEffect)(() => {
                    n.dJ.get("/settings/advanced/tweaks").then(e => {
                        d.reset(e.data)
                    })
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(k.Z, {
                        title: e("advanced.tweaks.title"),
                        description: e("advanced.tweaks.description")
                    }), (0, s.jsx)("div", {
                        className: "px-8",
                        children: (0, s.jsx)(E.l0, {
                            ...d,
                            children: (0, s.jsxs)("form", {
                                onSubmit: d.handleSubmit(a => {
                                    n.dJ.post("/settings/advanced/tweaks", a).then(() => {
                                        t({
                                            title: e("success"),
                                            description: e("advanced.tweaks.success")
                                        })
                                    }).catch(a => {
                                        (0, h.FB)(a, d) || t({
                                            title: e("error"),
                                            description: e("advanced.tweaks.error"),
                                            variant: "destructive"
                                        })
                                    })
                                }),
                                className: "space-y-5",
                                children: [(0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "APP_LANG",
                                    render: t => {
                                        let {
                                            field: a
                                        } = t;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, s.jsx)(g._, {
                                                htmlFor: "APP_LANG",
                                                children: e("advanced.tweaks.APP_LANG.label")
                                            }), (0, s.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, s.jsxs)(b.Ph, {
                                                    onValueChange: a.onChange,
                                                    value: a.value,
                                                    children: [(0, s.jsx)(b.i4, {
                                                        children: (0, s.jsx)(b.ki, {})
                                                    }), (0, s.jsxs)(b.Bw, {
                                                        children: [(0, s.jsx)(b.Ql, {
                                                            value: "tr",
                                                            children: "T\xfcrk\xe7e"
                                                        }), (0, s.jsx)(b.Ql, {
                                                            value: "en",
                                                            children: "English"
                                                        }), (0, s.jsx)(b.Ql, {
                                                            value: "de",
                                                            children: "Deutsch"
                                                        })]
                                                    })]
                                                }), (0, s.jsx)("small", {
                                                    className: "italic text-muted-foreground",
                                                    children: e("advanced.tweaks.APP_LANG.subtext")
                                                })]
                                            }), (0, s.jsx)(E.zG, {})]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "APP_NOTIFICATION_EMAIL",
                                    render: t => {
                                        let {
                                            field: a
                                        } = t;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, s.jsx)(g._, {
                                                htmlFor: "APP_NOTIFICATION_EMAIL",
                                                children: e("advanced.tweaks.APP_NOTIFICATION_EMAIL.label")
                                            }), (0, s.jsx)("div", {
                                                className: "relative",
                                                children: (0, s.jsx)(N.I, {
                                                    id: "APP_NOTIFICATION_EMAIL",
                                                    ...a
                                                })
                                            }), (0, s.jsx)("small", {
                                                className: "-mt-2 italic text-muted-foreground",
                                                children: e("advanced.tweaks.APP_NOTIFICATION_EMAIL.subtext")
                                            }), (0, s.jsx)(E.zG, {})]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "APP_URL",
                                    render: t => {
                                        let {
                                            field: a
                                        } = t;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, s.jsx)(g._, {
                                                htmlFor: "APP_URL",
                                                children: e("advanced.tweaks.APP_URL.label")
                                            }), (0, s.jsx)("div", {
                                                className: "relative",
                                                children: (0, s.jsx)(N.I, {
                                                    id: "APP_URL",
                                                    ...a
                                                })
                                            }), (0, s.jsx)("small", {
                                                className: "-mt-2 italic text-muted-foreground",
                                                children: e("advanced.tweaks.APP_URL.subtext")
                                            }), (0, s.jsx)(E.zG, {})]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "EXTENSION_TIMEOUT",
                                    render: t => {
                                        let {
                                            field: a
                                        } = t;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, s.jsx)(g._, {
                                                htmlFor: "EXTENSION_TIMEOUT",
                                                children: e("advanced.tweaks.EXTENSION_TIMEOUT.label")
                                            }), (0, s.jsx)("div", {
                                                className: "relative",
                                                children: (0, s.jsx)(N.I, {
                                                    id: "EXTENSION_TIMEOUT",
                                                    ...a,
                                                    type: "number"
                                                })
                                            }), (0, s.jsx)("small", {
                                                className: "-mt-2 italic text-muted-foreground",
                                                children: e("advanced.tweaks.EXTENSION_TIMEOUT.subtext")
                                            }), (0, s.jsx)(E.zG, {})]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "JWT_TTL",
                                    render: t => {
                                        let {
                                            field: a
                                        } = t;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, s.jsx)(g._, {
                                                htmlFor: "JWT_TTL",
                                                children: e("advanced.tweaks.JWT_TTL.label")
                                            }), (0, s.jsx)("div", {
                                                className: "relative",
                                                children: (0, s.jsx)(N.I, {
                                                    id: "JWT_TTL",
                                                    ...a,
                                                    type: "number"
                                                })
                                            }), (0, s.jsx)("small", {
                                                className: "-mt-2 italic text-muted-foreground",
                                                children: e("advanced.tweaks.JWT_TTL.subtext")
                                            }), (0, s.jsx)(E.zG, {})]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "APP_DEBUG",
                                    render: t => {
                                        let {
                                            field: a
                                        } = t;
                                        return (0, s.jsxs)(E.xJ, {
                                            className: "flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex space-x-3 space-y-0.5",
                                                children: [(0, s.jsx)(i, {
                                                    className: "size-6 text-muted-foreground"
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col space-y-0.5",
                                                    children: [(0, s.jsx)(E.lX, {
                                                        children: e("advanced.tweaks.APP_DEBUG.label")
                                                    }), (0, s.jsx)(E.pf, {
                                                        children: e("advanced.tweaks.APP_DEBUG.subtext")
                                                    })]
                                                })]
                                            }), (0, s.jsx)(E.NI, {
                                                className: "mt-[0!important]",
                                                children: (0, s.jsx)(y.r, {
                                                    checked: a.value,
                                                    onCheckedChange: a.onChange
                                                })
                                            })]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "EXTENSION_DEVELOPER_MODE",
                                    render: t => {
                                        let {
                                            field: a
                                        } = t;
                                        return (0, s.jsxs)(E.xJ, {
                                            className: "flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex space-x-3 space-y-0.5",
                                                children: [(0, s.jsx)(c, {
                                                    className: "size-6 text-muted-foreground"
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col space-y-0.5",
                                                    children: [(0, s.jsx)(E.lX, {
                                                        children: e("advanced.tweaks.EXTENSION_DEVELOPER_MODE.label")
                                                    }), (0, s.jsx)(E.pf, {
                                                        children: e("advanced.tweaks.EXTENSION_DEVELOPER_MODE.subtext")
                                                    })]
                                                })]
                                            }), (0, s.jsx)(E.NI, {
                                                className: "mt-[0!important]",
                                                children: (0, s.jsx)(y.r, {
                                                    checked: a.value,
                                                    onCheckedChange: a.onChange
                                                })
                                            })]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "NEW_LOG_LEVEL",
                                    render: t => {
                                        let {
                                            field: a
                                        } = t;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, s.jsx)(g._, {
                                                htmlFor: "NEW_LOG_LEVEL",
                                                children: e("advanced.tweaks.NEW_LOG_LEVEL.label")
                                            }), (0, s.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, s.jsxs)(b.Ph, {
                                                    onValueChange: a.onChange,
                                                    value: a.value,
                                                    children: [(0, s.jsx)(b.i4, {
                                                        children: (0, s.jsx)(b.ki, {})
                                                    }), (0, s.jsxs)(b.Bw, {
                                                        children: [(0, s.jsx)(b.Ql, {
                                                            value: "1",
                                                            children: e("advanced.tweaks.NEW_LOG_LEVEL.minimal")
                                                        }), (0, s.jsx)(b.Ql, {
                                                            value: "2",
                                                            children: e("advanced.tweaks.NEW_LOG_LEVEL.ext_log")
                                                        }), (0, s.jsx)(b.Ql, {
                                                            value: "3",
                                                            children: e("advanced.tweaks.NEW_LOG_LEVEL.detailed_ext_log")
                                                        }), (0, s.jsx)(b.Ql, {
                                                            value: "0",
                                                            children: e("advanced.tweaks.NEW_LOG_LEVEL.all")
                                                        })]
                                                    })]
                                                }), (0, s.jsx)("small", {
                                                    className: "italic text-muted-foreground",
                                                    children: e("advanced.tweaks.NEW_LOG_LEVEL.subtext")
                                                })]
                                            }), (0, s.jsx)(E.zG, {})]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "DEFAULT_AUTH_GATE",
                                    render: e => {
                                        let {
                                            field: t
                                        } = e;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, s.jsx)(g._, {
                                                htmlFor: "DEFAULT_AUTH_GATE",
                                                children: "Varsayılan Giriş Kapısı Se\xe7imi"
                                            }), (0, s.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, s.jsxs)(b.Ph, {
                                                    onValueChange: t.onChange,
                                                    value: t.value,
                                                    children: [(0, s.jsx)(b.i4, {
                                                        children: (0, s.jsx)(b.ki, {})
                                                    }), (0, s.jsxs)(b.Bw, {
                                                        children: [(0, s.jsx)(b.Ql, {
                                                            value: "liman",
                                                            children: "DZ"
                                                        }), (0, s.jsx)(b.Ql, {
                                                            value: "ldap",
                                                            children: "LDAP"
                                                        }), (0, s.jsx)(b.Ql, {
                                                            value: "keycloak",
                                                            children: "Keycloak"
                                                        })]
                                                    })]
                                                }), (0, s.jsx)("small", {
                                                    className: "italic text-muted-foreground",
                                                    children: "Burada se\xe7ilen giriş kapısı, kullanıcıların oturum a\xe7ma sayfasında varsayılan olarak işaretli olacaktır."
                                                })]
                                            }), (0, s.jsx)(E.zG, {})]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "LOGIN_IMAGE",
                                    render: e => {
                                        let {
                                            field: t
                                        } = e;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, s.jsx)(g._, {
                                                htmlFor: "LOGIN_IMAGE",
                                                children: "Giriş Ekranı Marka Logosu"
                                            }), (0, s.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, s.jsx)(N.I, {
                                                    id: "LOGIN_IMAGE",
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: e => {
                                                        var t;
                                                        let a = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
                                                        if (a) {
                                                            let e = new FileReader;
                                                            e.onloadend = () => {
                                                                var t;
                                                                let a = (null === (t = e.result) || void 0 === t ? void 0 : t.toString()) || "";
                                                                d.setValue("LOGIN_IMAGE", a)
                                                            }, e.readAsDataURL(a)
                                                        } else d.setValue("LOGIN_IMAGE", "")
                                                    }
                                                }), t.value && (0, s.jsx)(v.Zb, {
                                                    className: "mt-2 border-dashed",
                                                    children: (0, s.jsx)("img", {
                                                        src: t.value,
                                                        className: "max-h-40 w-auto rounded-lg object-cover"
                                                    })
                                                })]
                                            }), (0, s.jsx)("small", {
                                                className: "-mt-2 italic text-muted-foreground",
                                                children: "Giriş ekranında g\xf6sterilecek marka logosu. Maksimum 1MB boyutunda olmalıdır."
                                            }), (0, s.jsx)(E.zG, {})]
                                        })
                                    }
                                }), (0, s.jsx)(E.Wi, {
                                    control: d.control,
                                    name: "LDAP_IGNORE_CERT",
                                    render: t => {
                                        let {
                                            field: a
                                        } = t;
                                        return (0, s.jsxs)(E.xJ, {
                                            className: "flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex space-x-3 space-y-0.5",
                                                children: [(0, s.jsx)(o, {
                                                    className: "size-6 text-muted-foreground"
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col space-y-0.5",
                                                    children: [(0, s.jsx)(E.lX, {
                                                        children: e("advanced.tweaks.LDAP_IGNORE_CERT.label")
                                                    }), (0, s.jsx)(E.pf, {
                                                        children: e("advanced.tweaks.LDAP_IGNORE_CERT.subtext")
                                                    })]
                                                })]
                                            }), (0, s.jsx)(E.NI, {
                                                className: "mt-[0!important]",
                                                children: (0, s.jsx)(y.r, {
                                                    checked: a.value,
                                                    onCheckedChange: a.onChange
                                                })
                                            })]
                                        })
                                    }
                                }), (0, s.jsx)("div", {
                                    className: "flex justify-end pb-10",
                                    children: (0, s.jsxs)(p.z, {
                                        type: "submit",
                                        children: [(0, s.jsx)(u.Z, {
                                            className: "mr-2 size-4"
                                        }), e("advanced.tweaks.save")]
                                    })
                                })]
                            })
                        })
                    })]
                })
            };
            L.getLayout = function(e) {
                return (0, s.jsx)(w.Z, {
                    children: e
                })
            };
            var I = L
        }
    },
    function(e) {
        e.O(0, [5059, 3051, 2888, 9774, 179], function() {
            return e(e.s = 7954)
        }), _N_E = e.O()
    }
]);