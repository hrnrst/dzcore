(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1344], {
        4464: function(e, t, r) {
            "use strict";
            r.d(t, {
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
            let s = (0, r(5711).Z)("Eye", [
                ["path", {
                    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
                    key: "rwhkz3"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    key: "1v7zrd"
                }]
            ])
        },
        3696: function(e, t, r) {
            "use strict";
            r.d(t, {
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
            let s = (0, r(5711).Z)("Save", [
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
        8912: function(e, t, r) {
            "use strict";
            r.d(t, {
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
            let s = (0, r(5711).Z)("SquareFunction", [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2",
                    key: "1m3agn"
                }],
                ["path", {
                    d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",
                    key: "m1af9g"
                }],
                ["path", {
                    d: "M9 11.2h5.7",
                    key: "3zgcl2"
                }]
            ])
        },
        6164: function(e, t, r) {
            "use strict";
            r.d(t, {
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
            let s = (0, r(5711).Z)("Text", [
                ["path", {
                    d: "M17 6.1H3",
                    key: "wptmhv"
                }],
                ["path", {
                    d: "M21 12.1H3",
                    key: "1j38uz"
                }],
                ["path", {
                    d: "M15.1 18H3",
                    key: "1nb16a"
                }]
            ])
        },
        3721: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/settings/roles/[role_id]/views", function() {
                return r(1412)
            }])
        },
        3559: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return w
                }
            });
            var s = r(5893),
                n = r(9774),
                i = r(3125),
                a = r(443),
                o = r(5854),
                l = r(8912),
                c = r(4464),
                d = r(6164),
                u = r(8814),
                f = r(1163),
                m = r(7294),
                p = r(7421),
                x = r(1664),
                h = r.n(x),
                v = r(7327),
                g = r(9827);

            function b(e) {
                let t = (0, f.useRouter)();
                return (0, s.jsx)(h(), {
                    href: e.href,
                    children: (0, s.jsxs)("div", {
                        className: (0, v.cn)("flex w-full gap-6 border-b p-6", t.asPath.includes(e.href) && "bg-secondary/50 dark:bg-secondary/5"),
                        children: [(0, s.jsx)("div", {
                            className: "icon self-start rounded-md bg-secondary p-3 dark:bg-secondary/10",
                            children: (0, s.jsx)(e.icon, {
                                className: "size-5 text-secondary-foreground/70 dark:text-white/70"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "content w-full",
                            children: [(0, s.jsxs)("div", {
                                className: "mb-1 flex justify-between",
                                children: [(0, s.jsx)("h3", {
                                    className: "font-semibold tracking-tight",
                                    children: e.title
                                }), (0, s.jsx)(g.C, {
                                    variant: "secondary",
                                    children: e.count
                                })]
                            }), (0, s.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: e.description
                            })]
                        })]
                    })
                })
            }
            var y = r(733),
                j = r(8946);

            function w(e) {
                let {
                    children: t
                } = e, r = (0, f.useRouter)(), x = (0, j.q)(), {
                    t: h
                } = (0, p.$G)("settings"), v = [{
                    id: "users",
                    icon: i.Z,
                    title: h("roles.users.title"),
                    description: h("roles.users.description"),
                    href: "/settings/roles/".concat(r.query.role_id, "/users")
                }, {
                    id: "liman",
                    icon: y.P.logo,
                    title: h("roles.liman.title"),
                    description: h("roles.liman.description"),
                    href: "/settings/roles/".concat(r.query.role_id, "/liman")
                }, {
                    id: "servers",
                    icon: a.Z,
                    title: h("roles.servers.title"),
                    description: h("roles.servers.description"),
                    href: "/settings/roles/".concat(r.query.role_id, "/servers")
                }, {
                    id: "extensions",
                    icon: o.Z,
                    title: h("roles.extensions.title"),
                    description: h("roles.extensions.description"),
                    href: "/settings/roles/".concat(r.query.role_id, "/extensions")
                }, {
                    id: "functions",
                    icon: l.Z,
                    title: h("roles.functions.title"),
                    description: h("roles.functions.description"),
                    href: "/settings/roles/".concat(r.query.role_id, "/functions")
                }, {
                    id: "views",
                    icon: c.Z,
                    title: h("roles.views.title"),
                    description: h("roles.views.description"),
                    href: "/settings/roles/".concat(r.query.role_id, "/views")
                }, {
                    id: "variables",
                    icon: d.Z,
                    title: h("roles.variables.title"),
                    description: h("roles.variables.description"),
                    href: "/settings/roles/".concat(r.query.role_id, "/variables")
                }], [g, w] = (0, m.useState)(), N = e => {
                    n.dJ.get("/settings/roles/".concat(e || r.query.role_id)).then(e => {
                        w(e.data)
                    })
                };
                return (0, m.useEffect)(() => {
                    r.query.role_id && N()
                }, [r.query.role_id]), (0, m.useEffect)(() => (x.on("REFETCH_ROLE", e => {
                    N(e)
                }), () => x.off("REFETCH_ROLE")), []), (0, s.jsxs)("div", {
                    className: "grid grid-cols-4",
                    style: {
                        height: "var(--container-height)"
                    },
                    children: [(0, s.jsxs)("div", {
                        className: "col-span-1 border-r",
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center border-b px-8 py-6 pt-7 text-2xl font-bold",
                            children: [(0, s.jsx)(u.Z, {
                                onClick: () => r.push("/settings/roles"),
                                className: "mr-2 size-6 cursor-pointer"
                            }), g && g.name, " ", h("roles.role")]
                        }), v.map(e => (0, s.jsx)(b, {
                            title: e.title,
                            description: e.description,
                            icon: e.icon,
                            href: e.href,
                            count: g ? g.counts[e.id] : 0
                        }, e.id))]
                    }), (0, s.jsx)("div", {
                        className: "col-span-3",
                        children: t
                    })]
                })
            }
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
                    return v
                },
                xJ: function() {
                    return p
                },
                zG: function() {
                    return g
                }
            });
            var s = r(5893),
                n = r(7294),
                i = r(8426),
                a = r(7536),
                o = r(7327),
                l = r(2297);
            let c = a.RV,
                d = n.createContext({}),
                u = e => {
                    let {
                        ...t
                    } = e;
                    return (0, s.jsx)(d.Provider, {
                        value: {
                            name: t.name
                        },
                        children: (0, s.jsx)(a.Qr, {
                            ...t
                        })
                    })
                },
                f = () => {
                    let e = n.useContext(d),
                        t = n.useContext(m),
                        {
                            getFieldState: r,
                            formState: s
                        } = (0, a.Gc)(),
                        i = r(e.name, s);
                    if (!e) throw Error("useFormField should be used within <FormField>");
                    let {
                        id: o
                    } = t;
                    return {
                        id: o,
                        name: e.name,
                        formItemId: "".concat(o, "-form-item"),
                        formDescriptionId: "".concat(o, "-form-item-description"),
                        formMessageId: "".concat(o, "-form-item-message"),
                        ...i
                    }
                },
                m = n.createContext({}),
                p = n.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...i
                    } = e, a = n.useId();
                    return (0, s.jsx)(m.Provider, {
                        value: {
                            id: a
                        },
                        children: (0, s.jsx)("div", {
                            ref: t,
                            className: (0, o.cn)("space-y-2", r),
                            ...i
                        })
                    })
                });
            p.displayName = "FormItem";
            let x = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e, {
                    error: i,
                    formItemId: a
                } = f();
                return (0, s.jsx)(l._, {
                    ref: t,
                    className: (0, o.cn)(i && "text-destructive", r),
                    htmlFor: a,
                    ...n
                })
            });
            x.displayName = "FormLabel";
            let h = n.forwardRef((e, t) => {
                let {
                    ...r
                } = e, {
                    error: n,
                    formItemId: a,
                    formDescriptionId: o,
                    formMessageId: l
                } = f();
                return (0, s.jsx)(i.g7, {
                    ref: t,
                    id: a,
                    "aria-describedby": n ? "".concat(o, " ").concat(l) : "".concat(o),
                    "aria-invalid": !!n,
                    ...r
                })
            });
            h.displayName = "FormControl";
            let v = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e, {
                    formDescriptionId: i
                } = f();
                return (0, s.jsx)("p", {
                    ref: t,
                    id: i,
                    className: (0, o.cn)("text-sm text-muted-foreground", r),
                    ...n
                })
            });
            v.displayName = "FormDescription";
            let g = n.forwardRef((e, t) => {
                let {
                    className: r,
                    children: n,
                    ...i
                } = e, {
                    error: a,
                    formMessageId: l
                } = f(), c = a ? String(null == a ? void 0 : a.message) : n;
                return c ? (0, s.jsx)("p", {
                    ref: t,
                    id: l,
                    className: (0, o.cn)("text-sm font-medium text-destructive", r),
                    ...i,
                    children: c
                }) : null
            });
            g.displayName = "FormMessage"
        },
        9827: function(e, t, r) {
            "use strict";
            r.d(t, {
                C: function() {
                    return o
                }
            });
            var s = r(5893);
            r(7294);
            var n = r(5139),
                i = r(7327);
            let a = (0, n.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                        success: "border-transparent bg-green-500 text-white hover:bg-green-500/80",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function o(e) {
                let {
                    className: t,
                    variant: r,
                    ...n
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, i.cn)(a({
                        variant: r
                    }), t),
                    ...n
                })
            }
        },
        3749: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ol: function() {
                    return o
                },
                Zb: function() {
                    return a
                },
                aY: function() {
                    return c
                },
                ll: function() {
                    return l
                }
            });
            var s = r(5893),
                n = r(7294),
                i = r(7327);
            let a = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", r),
                    ...n
                })
            });
            a.displayName = "Card";
            let o = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("flex flex-col space-y-1.5 p-6", r),
                    ...n
                })
            });
            o.displayName = "CardHeader";
            let l = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)("h3", {
                    ref: t,
                    className: (0, i.cn)("text-lg font-semibold leading-none tracking-tight", r),
                    ...n
                })
            });
            l.displayName = "CardTitle", n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)("p", {
                    ref: t,
                    className: (0, i.cn)("text-sm text-muted-foreground", r),
                    ...n
                })
            }).displayName = "CardDescription";
            let c = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("p-6 pt-0", r),
                    ...n
                })
            });
            c.displayName = "CardContent", n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)(" flex items-center p-6 pt-0", r),
                    ...n
                })
            }).displayName = "CardFooter"
        },
        1648: function(e, t, r) {
            "use strict";
            r.d(t, {
                X: function() {
                    return l
                }
            });
            var s = r(5893),
                n = r(7294),
                i = r(6069),
                a = r(3742),
                o = r(7327);
            let l = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)(i.fC, {
                    ref: t,
                    className: (0, o.cn)("peer size-4 shrink-0 overflow-hidden rounded-full border border-primary ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary/75 data-[state=checked]:text-primary-foreground", r),
                    ...n,
                    children: (0, s.jsx)(i.z$, {
                        className: (0, o.cn)("flex items-center justify-center rounded-full text-current"),
                        children: (0, s.jsx)(a.Z, {
                            className: "size-full"
                        })
                    })
                })
            });
            l.displayName = i.fC.displayName
        },
        2297: function(e, t, r) {
            "use strict";
            r.d(t, {
                _: function() {
                    return c
                }
            });
            var s = r(5893),
                n = r(7294),
                i = r(9102),
                a = r(5139),
                o = r(7327);
            let l = (0, a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                c = n.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...n
                    } = e;
                    return (0, s.jsx)(i.f, {
                        ref: t,
                        className: (0, o.cn)(l(), r),
                        ...n
                    })
                });
            c.displayName = i.f.displayName
        },
        986: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var s = r(5893),
                n = r(9008),
                i = r.n(n);

            function a(e) {
                let {
                    title: t,
                    description: r,
                    rightSide: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: "flex-1 flex-col p-8 md:flex",
                    children: [(0, s.jsx)(i(), {
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
                                children: r
                            })]
                        }), n && (0, s.jsx)("div", {
                            className: "flex items-center",
                            children: n
                        })]
                    })]
                })
            }
        },
        4462: function(e, t, r) {
            "use strict";
            r.d(t, {
                Bw: function() {
                    return m
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
                    return f
                },
                ki: function() {
                    return u
                },
                n5: function() {
                    return p
                }
            });
            var s = r(5893),
                n = r(7294),
                i = r(5059),
                a = r(8971),
                o = r(3742),
                l = r(7327);
            let c = i.fC,
                d = i.ZA,
                u = i.B4,
                f = n.forwardRef((e, t) => {
                    let {
                        className: r,
                        children: n,
                        ...o
                    } = e;
                    return (0, s.jsxs)(i.xz, {
                        ref: t,
                        className: (0, l.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
                        ...o,
                        children: [n, (0, s.jsx)(i.JO, {
                            asChild: !0,
                            children: (0, s.jsx)(a.Z, {
                                className: "size-4 opacity-50"
                            })
                        })]
                    })
                });
            f.displayName = i.xz.displayName;
            let m = n.forwardRef((e, t) => {
                let {
                    className: r,
                    children: n,
                    position: a = "popper",
                    ...o
                } = e;
                return (0, s.jsx)(i.h_, {
                    children: (0, s.jsx)(i.VY, {
                        ref: t,
                        className: (0, l.cn)("relative z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === a && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r),
                        position: a,
                        ...o,
                        children: (0, s.jsx)(i.l_, {
                            className: (0, l.cn)("p-1", "popper" === a && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: n
                        })
                    })
                })
            });
            m.displayName = i.VY.displayName;
            let p = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)(i.__, {
                    ref: t,
                    className: (0, l.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", r),
                    ...n
                })
            });
            p.displayName = i.__.displayName;
            let x = n.forwardRef((e, t) => {
                let {
                    className: r,
                    children: n,
                    ...a
                } = e;
                return (0, s.jsxs)(i.ck, {
                    ref: t,
                    className: (0, l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                    ...a,
                    children: [(0, s.jsx)("span", {
                        className: "absolute left-2 flex size-3.5 items-center justify-center",
                        children: (0, s.jsx)(i.wU, {
                            children: (0, s.jsx)(o.Z, {
                                className: "size-4"
                            })
                        })
                    }), (0, s.jsx)(i.eT, {
                        children: n
                    })]
                })
            });
            x.displayName = i.ck.displayName, n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)(i.Z0, {
                    ref: t,
                    className: (0, l.cn)("-mx-1 my-1 h-px bg-muted", r),
                    ...n
                })
            }).displayName = i.Z0.displayName
        },
        5050: function(e, t, r) {
            "use strict";
            r.d(t, {
                p: function() {
                    return i
                }
            }), r(7294);
            var s = r(7421),
                n = r(4712);

            function i() {
                let {
                    t: e
                } = (0, s.$G)("common");
                return {
                    toast: t => {
                        let {
                            title: r,
                            description: s,
                            variant: i
                        } = t, a = {
                            description: s,
                            duration: 6e3,
                            dismissible: !0
                        }, o = "";
                        switch (r == e("information") ? o = "info" : r == e("success") ? o = "success" : r == e("error") ? o = "error" : r == e("warning") && (o = "warning"), i && (o = i), o) {
                            case "success":
                                return n.A.success(r, a);
                            case "error":
                            case "destructive":
                                return n.A.error(r, a);
                            case "warning":
                                return n.A.warning(r, a);
                            case "info":
                                return n.A.info(r, a);
                            default:
                                return (0, n.A)(r, a)
                        }
                    }
                }
            }
        },
        8946: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return n
                }
            });
            let s = (0, r(9391).Z)(),
                n = () => s
        },
        1412: function(e, t, r) {
            "use strict";
            r.r(t);
            var s = r(5893),
                n = r(9774),
                i = r(6312),
                a = r(3696),
                o = r(1163),
                l = r(7294),
                c = r(7536),
                d = r(7421),
                u = r(1604),
                f = r(3559),
                m = r(2766),
                p = r(7249),
                x = r(3749),
                h = r(1648),
                v = r(2297),
                g = r(986),
                b = r(4462),
                y = r(5050),
                j = r(7327);
            let w = () => {
                let e = (0, o.useRouter)(),
                    {
                        t
                    } = (0, d.$G)("settings"),
                    {
                        toast: r
                    } = (0, y.p)(),
                    [f, w] = (0, l.useState)([]),
                    N = u.Km(["servers", "users", "version", "most_used_extensions", "most_used_servers"]),
                    _ = u.Ry({
                        sidebar: u.Km(["servers", "extensions"]),
                        dashboard: u.IX(N),
                        redirect: u.Z_().optional()
                    }),
                    k = (0, c.cI)({
                        resolver: (0, i.F)(_)
                    }),
                    C = () => {
                        n.dJ.get("/settings/roles/".concat(e.query.role_id, "/extensions")).then(t => {
                            200 === t.status && w(t.data.selected), n.dJ.get("/settings/roles/".concat(e.query.role_id, "/views")).then(e => {
                                k.reset(e.data)
                            })
                        })
                    };
                (0, l.useEffect)(() => {
                    e.query.role_id && C()
                }, [e.query.role_id]);
                let Z = e => {
                    let t = k.getValues("dashboard");
                    t.includes(e) ? k.setValue("dashboard", t.filter(t => t !== e)) : k.setValue("dashboard", [...t, e])
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(g.Z, {
                        title: t("roles.views.title"),
                        description: t("roles.views.description")
                    }), (0, s.jsx)("div", {
                        className: "px-8",
                        children: (0, s.jsx)(m.l0, {
                            ...k,
                            children: (0, s.jsxs)("form", {
                                onSubmit: k.handleSubmit(s => {
                                    n.dJ.post("/settings/roles/".concat(e.query.role_id, "/views"), {
                                        views: s
                                    }).then(() => {
                                        r({
                                            title: t("success"),
                                            description: t("roles.views.success")
                                        })
                                    }).catch(e => {
                                        (0, j.FB)(e, k) || r({
                                            title: t("error"),
                                            description: t("roles.views.error"),
                                            variant: "destructive"
                                        })
                                    })
                                }),
                                className: "space-y-5",
                                children: [(0, s.jsx)(m.Wi, {
                                    control: k.control,
                                    name: "sidebar",
                                    render: e => {
                                        let {
                                            field: r
                                        } = e;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, s.jsx)(v._, {
                                                htmlFor: "sidebar",
                                                children: t("roles.views.sidebar")
                                            }), (0, s.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, s.jsxs)(b.Ph, {
                                                    onValueChange: r.onChange,
                                                    value: r.value,
                                                    children: [(0, s.jsx)(b.i4, {
                                                        children: (0, s.jsx)(b.ki, {
                                                            placeholder: t("roles.views.sidebar_placeholder")
                                                        })
                                                    }), (0, s.jsxs)(b.Bw, {
                                                        children: [(0, s.jsx)(b.Ql, {
                                                            value: "servers",
                                                            children: t("roles.views.sidebar_servers")
                                                        }), (0, s.jsx)(b.Ql, {
                                                            value: "extensions",
                                                            children: t("roles.views.sidebar_extensions")
                                                        })]
                                                    })]
                                                }), (0, s.jsx)("small", {
                                                    className: "italic text-muted-foreground",
                                                    children: t("roles.views.sidebar_description")
                                                })]
                                            }), (0, s.jsx)(m.zG, {})]
                                        })
                                    }
                                }), (0, s.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, s.jsx)(v._, {
                                        children: t("roles.views.dashboard")
                                    }), (0, s.jsx)(x.Zb, {
                                        children: (0, s.jsx)(x.aY, {
                                            className: "flex flex-col gap-3 p-3",
                                            children: N.options.map(e => (0, s.jsxs)("div", {
                                                className: "flex items-center space-x-2",
                                                children: [(0, s.jsx)(h.X, {
                                                    id: e,
                                                    checked: k.watch("dashboard", []).includes(e),
                                                    onCheckedChange: () => Z(e)
                                                }), (0, s.jsx)(v._, {
                                                    htmlFor: e,
                                                    children: t("roles.views.".concat(e))
                                                })]
                                            }, e))
                                        })
                                    }), (0, s.jsx)("small", {
                                        className: "italic text-muted-foreground",
                                        children: t("roles.views.dashboard_description")
                                    })]
                                }), (0, s.jsx)(m.Wi, {
                                    control: k.control,
                                    name: "redirect",
                                    render: e => {
                                        let {
                                            field: r
                                        } = e;
                                        return (0, s.jsxs)("div", {
                                            className: "flex flex-col gap-2",
                                            children: [(0, s.jsx)(v._, {
                                                htmlFor: "redirect",
                                                children: t("roles.views.redirect")
                                            }), (0, s.jsxs)(b.Ph, {
                                                onValueChange: r.onChange,
                                                defaultValue: r.value,
                                                value: r.value,
                                                children: [(0, s.jsx)(b.i4, {
                                                    children: (0, s.jsx)(b.ki, {
                                                        placeholder: t("roles.views.redirect_placeholder")
                                                    })
                                                }), (0, s.jsx)(b.Bw, {
                                                    children: f.map(e => (0, s.jsx)(b.Ql, {
                                                        value: e.id,
                                                        children: e.display_name
                                                    }, e.id))
                                                })]
                                            }), (0, s.jsx)("small", {
                                                className: "italic text-muted-foreground",
                                                children: t("roles.views.redirect_description")
                                            }), (0, s.jsx)(m.zG, {
                                                className: "mt-1"
                                            })]
                                        })
                                    }
                                }), (0, s.jsx)("div", {
                                    className: "flex justify-end",
                                    children: (0, s.jsxs)(p.z, {
                                        type: "submit",
                                        children: [(0, s.jsx)(a.Z, {
                                            className: "mr-2 size-4"
                                        }), t("advanced.logrotation.save")]
                                    })
                                })]
                            })
                        })
                    })]
                })
            };
            w.getLayout = function(e) {
                return (0, s.jsx)(f.Z, {
                    children: e
                })
            }, t.default = w
        },
        6069: function(e, t, r) {
            "use strict";
            r.d(t, {
                fC: function() {
                    return N
                },
                z$: function() {
                    return _
                }
            });
            var s = r(7462),
                n = r(7294),
                i = r(8771),
                a = r(5360),
                o = r(6206),
                l = r(7342),
                c = r(7898),
                d = r(7546),
                u = r(9115),
                f = r(5320);
            let m = "Checkbox",
                [p, x] = (0, a.b)(m),
                [h, v] = p(m),
                g = (0, n.forwardRef)((e, t) => {
                    let {
                        __scopeCheckbox: r,
                        name: a,
                        checked: c,
                        defaultChecked: d,
                        required: u,
                        disabled: m,
                        value: p = "on",
                        onCheckedChange: x,
                        ...v
                    } = e, [g, b] = (0, n.useState)(null), N = (0, i.e)(t, e => b(e)), _ = (0, n.useRef)(!1), k = !g || !!g.closest("form"), [C = !1, Z] = (0, l.T)({
                        prop: c,
                        defaultProp: d,
                        onChange: x
                    }), E = (0, n.useRef)(C);
                    return (0, n.useEffect)(() => {
                        let e = null == g ? void 0 : g.form;
                        if (e) {
                            let t = () => Z(E.current);
                            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
                        }
                    }, [g, Z]), (0, n.createElement)(h, {
                        scope: r,
                        state: C,
                        disabled: m
                    }, (0, n.createElement)(f.WV.button, (0, s.Z)({
                        type: "button",
                        role: "checkbox",
                        "aria-checked": j(C) ? "mixed" : C,
                        "aria-required": u,
                        "data-state": w(C),
                        "data-disabled": m ? "" : void 0,
                        disabled: m,
                        value: p
                    }, v, {
                        ref: N,
                        onKeyDown: (0, o.M)(e.onKeyDown, e => {
                            "Enter" === e.key && e.preventDefault()
                        }),
                        onClick: (0, o.M)(e.onClick, e => {
                            Z(e => !!j(e) || !e), k && (_.current = e.isPropagationStopped(), _.current || e.stopPropagation())
                        })
                    })), k && (0, n.createElement)(y, {
                        control: g,
                        bubbles: !_.current,
                        name: a,
                        value: p,
                        checked: C,
                        required: u,
                        disabled: m,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                }),
                b = (0, n.forwardRef)((e, t) => {
                    let {
                        __scopeCheckbox: r,
                        forceMount: i,
                        ...a
                    } = e, o = v("CheckboxIndicator", r);
                    return (0, n.createElement)(u.z, {
                        present: i || j(o.state) || !0 === o.state
                    }, (0, n.createElement)(f.WV.span, (0, s.Z)({
                        "data-state": w(o.state),
                        "data-disabled": o.disabled ? "" : void 0
                    }, a, {
                        ref: t,
                        style: {
                            pointerEvents: "none",
                            ...e.style
                        }
                    })))
                }),
                y = e => {
                    let {
                        control: t,
                        checked: r,
                        bubbles: i = !0,
                        ...a
                    } = e, o = (0, n.useRef)(null), l = (0, c.D)(r), u = (0, d.t)(t);
                    return (0, n.useEffect)(() => {
                        let e = o.current,
                            t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                        if (l !== r && t) {
                            let s = new Event("click", {
                                bubbles: i
                            });
                            e.indeterminate = j(r), t.call(e, !j(r) && r), e.dispatchEvent(s)
                        }
                    }, [l, r, i]), (0, n.createElement)("input", (0, s.Z)({
                        type: "checkbox",
                        "aria-hidden": !0,
                        defaultChecked: !j(r) && r
                    }, a, {
                        tabIndex: -1,
                        ref: o,
                        style: {
                            ...e.style,
                            ...u,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function j(e) {
                return "indeterminate" === e
            }

            function w(e) {
                return j(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }
            let N = g,
                _ = b
        },
        9391: function(e, t, r) {
            "use strict";

            function s(e) {
                return {
                    all: e = e || new Map,
                    on: function(t, r) {
                        var s = e.get(t);
                        s ? s.push(r) : e.set(t, [r])
                    },
                    off: function(t, r) {
                        var s = e.get(t);
                        s && (r ? s.splice(s.indexOf(r) >>> 0, 1) : e.set(t, []))
                    },
                    emit: function(t, r) {
                        var s = e.get(t);
                        s && s.slice().map(function(e) {
                            e(r)
                        }), (s = e.get("*")) && s.slice().map(function(e) {
                            e(t, r)
                        })
                    }
                }
            }
            r.d(t, {
                Z: function() {
                    return s
                }
            })
        }
    },
    function(e) {
        e.O(0, [5059, 3051, 2888, 9774, 179], function() {
            return e(e.s = 3721)
        }), _N_E = e.O()
    }
]);