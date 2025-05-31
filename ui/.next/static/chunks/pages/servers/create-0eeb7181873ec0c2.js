(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5317], {
        1319: function(e, s, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/servers/create", function() {
                return r(4671)
            }])
        },
        2766: function(e, s, r) {
            "use strict";
            r.d(s, {
                NI: function() {
                    return f
                },
                Wi: function() {
                    return o
                },
                l0: function() {
                    return d
                },
                lX: function() {
                    return h
                },
                pf: function() {
                    return j
                },
                xJ: function() {
                    return u
                },
                zG: function() {
                    return v
                }
            });
            var a = r(5893),
                t = r(7294),
                i = r(8426),
                n = r(7536),
                l = r(7327),
                c = r(2297);
            let d = n.RV,
                m = t.createContext({}),
                o = e => {
                    let {
                        ...s
                    } = e;
                    return (0, a.jsx)(m.Provider, {
                        value: {
                            name: s.name
                        },
                        children: (0, a.jsx)(n.Qr, {
                            ...s
                        })
                    })
                },
                x = () => {
                    let e = t.useContext(m),
                        s = t.useContext(p),
                        {
                            getFieldState: r,
                            formState: a
                        } = (0, n.Gc)(),
                        i = r(e.name, a);
                    if (!e) throw Error("useFormField should be used within <FormField>");
                    let {
                        id: l
                    } = s;
                    return {
                        id: l,
                        name: e.name,
                        formItemId: "".concat(l, "-form-item"),
                        formDescriptionId: "".concat(l, "-form-item-description"),
                        formMessageId: "".concat(l, "-form-item-message"),
                        ...i
                    }
                },
                p = t.createContext({}),
                u = t.forwardRef((e, s) => {
                    let {
                        className: r,
                        ...i
                    } = e, n = t.useId();
                    return (0, a.jsx)(p.Provider, {
                        value: {
                            id: n
                        },
                        children: (0, a.jsx)("div", {
                            ref: s,
                            className: (0, l.cn)("space-y-2", r),
                            ...i
                        })
                    })
                });
            u.displayName = "FormItem";
            let h = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e, {
                    error: i,
                    formItemId: n
                } = x();
                return (0, a.jsx)(c._, {
                    ref: s,
                    className: (0, l.cn)(i && "text-destructive", r),
                    htmlFor: n,
                    ...t
                })
            });
            h.displayName = "FormLabel";
            let f = t.forwardRef((e, s) => {
                let {
                    ...r
                } = e, {
                    error: t,
                    formItemId: n,
                    formDescriptionId: l,
                    formMessageId: c
                } = x();
                return (0, a.jsx)(i.g7, {
                    ref: s,
                    id: n,
                    "aria-describedby": t ? "".concat(l, " ").concat(c) : "".concat(l),
                    "aria-invalid": !!t,
                    ...r
                })
            });
            f.displayName = "FormControl";
            let j = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e, {
                    formDescriptionId: i
                } = x();
                return (0, a.jsx)("p", {
                    ref: s,
                    id: i,
                    className: (0, l.cn)("text-sm text-muted-foreground", r),
                    ...t
                })
            });
            j.displayName = "FormDescription";
            let v = t.forwardRef((e, s) => {
                let {
                    className: r,
                    children: t,
                    ...i
                } = e, {
                    error: n,
                    formMessageId: c
                } = x(), d = n ? String(null == n ? void 0 : n.message) : t;
                return d ? (0, a.jsx)("p", {
                    ref: s,
                    id: c,
                    className: (0, l.cn)("text-sm font-medium text-destructive", r),
                    ...i,
                    children: d
                }) : null
            });
            v.displayName = "FormMessage"
        },
        3749: function(e, s, r) {
            "use strict";
            r.d(s, {
                Ol: function() {
                    return l
                },
                Zb: function() {
                    return n
                },
                aY: function() {
                    return d
                },
                ll: function() {
                    return c
                }
            });
            var a = r(5893),
                t = r(7294),
                i = r(7327);
            let n = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", r),
                    ...t
                })
            });
            n.displayName = "Card";
            let l = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, i.cn)("flex flex-col space-y-1.5 p-6", r),
                    ...t
                })
            });
            l.displayName = "CardHeader";
            let c = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, a.jsx)("h3", {
                    ref: s,
                    className: (0, i.cn)("text-lg font-semibold leading-none tracking-tight", r),
                    ...t
                })
            });
            c.displayName = "CardTitle", t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, a.jsx)("p", {
                    ref: s,
                    className: (0, i.cn)("text-sm text-muted-foreground", r),
                    ...t
                })
            }).displayName = "CardDescription";
            let d = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, i.cn)("p-6 pt-0", r),
                    ...t
                })
            });
            d.displayName = "CardContent", t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, i.cn)(" flex items-center p-6 pt-0", r),
                    ...t
                })
            }).displayName = "CardFooter"
        },
        1648: function(e, s, r) {
            "use strict";
            r.d(s, {
                X: function() {
                    return c
                }
            });
            var a = r(5893),
                t = r(7294),
                i = r(6069),
                n = r(3742),
                l = r(7327);
            let c = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, a.jsx)(i.fC, {
                    ref: s,
                    className: (0, l.cn)("peer size-4 shrink-0 overflow-hidden rounded-full border border-primary ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary/75 data-[state=checked]:text-primary-foreground", r),
                    ...t,
                    children: (0, a.jsx)(i.z$, {
                        className: (0, l.cn)("flex items-center justify-center rounded-full text-current"),
                        children: (0, a.jsx)(n.Z, {
                            className: "size-full"
                        })
                    })
                })
            });
            c.displayName = i.fC.displayName
        },
        2297: function(e, s, r) {
            "use strict";
            r.d(s, {
                _: function() {
                    return d
                }
            });
            var a = r(5893),
                t = r(7294),
                i = r(9102),
                n = r(5139),
                l = r(7327);
            let c = (0, n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                d = t.forwardRef((e, s) => {
                    let {
                        className: r,
                        ...t
                    } = e;
                    return (0, a.jsx)(i.f, {
                        ref: s,
                        className: (0, l.cn)(c(), r),
                        ...t
                    })
                });
            d.displayName = i.f.displayName
        },
        986: function(e, s, r) {
            "use strict";
            r.d(s, {
                Z: function() {
                    return n
                }
            });
            var a = r(5893),
                t = r(9008),
                i = r.n(t);

            function n(e) {
                let {
                    title: s,
                    description: r,
                    rightSide: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex-1 flex-col p-8 md:flex",
                    children: [(0, a.jsx)(i(), {
                        children: (0, a.jsx)("title", {
                            children: "".concat(s, " | DZ")
                        })
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center justify-between space-y-2",
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h2", {
                                className: "text-2xl font-bold tracking-tight",
                                children: s
                            }), (0, a.jsx)("p", {
                                className: "text-muted-foreground",
                                children: r
                            })]
                        }), t && (0, a.jsx)("div", {
                            className: "flex items-center",
                            children: t
                        })]
                    })]
                })
            }
        },
        8626: function(e, s, r) {
            "use strict";
            r.d(s, {
                E: function() {
                    return c
                },
                m: function() {
                    return d
                }
            });
            var a = r(5893),
                t = r(7294),
                i = r(150),
                n = r(316),
                l = r(7327);
            let c = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, a.jsx)(i.fC, {
                    className: (0, l.cn)("grid gap-2", r),
                    ...t,
                    ref: s
                })
            });
            c.displayName = i.fC.displayName;
            let d = t.forwardRef((e, s) => {
                let {
                    className: r,
                    children: t,
                    ...c
                } = e;
                return (0, a.jsx)(i.ck, {
                    ref: s,
                    className: (0, l.cn)("aspect-square size-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
                    ...c,
                    children: (0, a.jsx)(i.z$, {
                        className: "flex items-center justify-center",
                        children: (0, a.jsx)(n.Z, {
                            className: "size-2.5 fill-current text-current"
                        })
                    })
                })
            });
            d.displayName = i.ck.displayName
        },
        5765: function(e, s, r) {
            "use strict";
            r.d(s, {
                g: function() {
                    return n
                }
            });
            var a = r(5893),
                t = r(7294),
                i = r(7327);
            let n = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, a.jsx)("textarea", {
                    className: (0, i.cn)("flex max-h-[400px] min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
                    ref: s,
                    ...t
                })
            });
            n.displayName = "Textarea"
        },
        5050: function(e, s, r) {
            "use strict";
            r.d(s, {
                p: function() {
                    return i
                }
            }), r(7294);
            var a = r(7421),
                t = r(4712);

            function i() {
                let {
                    t: e
                } = (0, a.$G)("common");
                return {
                    toast: s => {
                        let {
                            title: r,
                            description: a,
                            variant: i
                        } = s, n = {
                            description: a,
                            duration: 6e3,
                            dismissible: !0
                        }, l = "";
                        switch (r == e("information") ? l = "info" : r == e("success") ? l = "success" : r == e("error") ? l = "error" : r == e("warning") && (l = "warning"), i && (l = i), l) {
                            case "success":
                                return t.A.success(r, n);
                            case "error":
                            case "destructive":
                                return t.A.error(r, n);
                            case "warning":
                                return t.A.warning(r, n);
                            case "info":
                                return t.A.info(r, n);
                            default:
                                return (0, t.A)(r, n)
                        }
                    }
                }
            }
        },
        4671: function(e, s, r) {
            "use strict";
            r.r(s), r.d(s, {
                default: function() {
                    return A
                }
            });
            var a = r(5893),
                t = r(6660),
                i = r(9774),
                n = r(4018),
                l = r(443),
                c = r(8814),
                d = r(4998),
                m = r(1325),
                o = r(1664),
                x = r.n(o),
                p = r(1163),
                u = r(7294),
                h = r(7421),
                f = r(6312),
                j = r(7536),
                v = r(1604),
                g = r(733),
                N = r(5037),
                y = r(2297),
                b = r(8626),
                _ = r(2766);

            function w(e) {
                let {
                    formRef: s,
                    data: r
                } = e, {
                    t
                } = (0, h.$G)("servers"), i = v.z.object({
                    ip_address: v.z.string().min(1, t("create.steps.connection_information.validation.ip_address")),
                    port: v.z.string().max(5, {
                        message: t("create.steps.connection_information.validation.port.max")
                    }).min(1, t("create.steps.connection_information.validation.port.nonempty"))
                }), n = (0, j.cI)({
                    resolver: (0, f.F)(i),
                    defaultValues: {
                        ip_address: "",
                        port: "",
                        ...r
                    },
                    mode: "onChange"
                });
                return s.current = n, (0, a.jsx)("div", {
                    className: "space-y-8 divide-y divide-foreground/10 sm:space-y-5",
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h3", {
                                className: "text-lg font-medium leading-6 text-foreground",
                                children: t("create.steps.connection_information.name")
                            }), (0, a.jsx)("p", {
                                className: "mt-1 max-w-2xl text-sm text-foreground/60",
                                children: t("create.steps.connection_information.description")
                            })]
                        }), (0, a.jsx)(_.l0, {
                            ...n,
                            children: (0, a.jsxs)("form", {
                                children: [(0, a.jsx)(_.Wi, {
                                    control: n.control,
                                    name: "ip_address",
                                    render: e => {
                                        let {
                                            field: s
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: "mt-6 space-y-6 sm:mt-5 sm:space-y-5",
                                            children: (0, a.jsxs)("div", {
                                                className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-foreground/10 sm:pt-5",
                                                children: [(0, a.jsx)(y._, {
                                                    htmlFor: "ip_address",
                                                    className: "sm:mt-px sm:pt-2",
                                                    children: t("create.steps.connection_information.ip_address.label")
                                                }), (0, a.jsxs)("div", {
                                                    className: "mt-1 sm:col-span-2 sm:mt-0",
                                                    children: [(0, a.jsx)(N.I, {
                                                        type: "text",
                                                        id: "ip_address",
                                                        placeholder: "127.0.0.1",
                                                        ...s
                                                    }), (0, a.jsx)("p", {
                                                        className: "mt-2 text-sm text-foreground/60",
                                                        children: t("create.steps.connection_information.ip_address.information")
                                                    }), (0, a.jsx)(_.zG, {})]
                                                })]
                                            })
                                        })
                                    }
                                }), (0, a.jsx)(_.Wi, {
                                    control: n.control,
                                    name: "port",
                                    render: e => {
                                        let {
                                            field: s
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: "mt-6 space-y-6 sm:mt-5 sm:space-y-5",
                                            children: (0, a.jsxs)("div", {
                                                className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-foreground/10 sm:pt-5",
                                                children: [(0, a.jsx)(y._, {
                                                    htmlFor: "port",
                                                    className: "sm:mt-px sm:pt-2",
                                                    children: t("create.steps.connection_information.port.label")
                                                }), (0, a.jsxs)("div", {
                                                    className: "mt-1 space-y-8 sm:col-span-2 sm:mt-0",
                                                    children: [(0, a.jsxs)(b.E, {
                                                        className: "grid grid-cols-3 gap-8 pt-2",
                                                        id: "port",
                                                        value: s.value,
                                                        onValueChange: s.onChange,
                                                        defaultValue: s.value,
                                                        children: [(0, a.jsx)(_.xJ, {
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "22",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: "SSH"
                                                                        }), (0, a.jsxs)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: [(0, a.jsx)("span", {
                                                                                className: "text-foreground/50",
                                                                                children: "22"
                                                                            }), (0, a.jsxs)("div", {
                                                                                className: "icons flex gap-2",
                                                                                children: [(0, a.jsx)(g.P.windows, {
                                                                                    className: "size-4"
                                                                                }), (0, a.jsx)(g.P.linux, {
                                                                                    className: "size-4"
                                                                                })]
                                                                            })]
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, a.jsx)(_.xJ, {
                                                            className: "relative",
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "5986",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: "WinRM"
                                                                        }), (0, a.jsxs)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: [(0, a.jsx)("span", {
                                                                                className: "text-foreground/50",
                                                                                children: "5986"
                                                                            }), (0, a.jsx)("div", {
                                                                                className: "icons flex gap-2",
                                                                                children: (0, a.jsx)(g.P.windows, {
                                                                                    className: "size-4"
                                                                                })
                                                                            })]
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, a.jsx)(_.xJ, {
                                                            className: "relative",
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "636",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: "AD / Samba"
                                                                        }), (0, a.jsxs)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: [(0, a.jsx)("span", {
                                                                                className: "text-foreground/50",
                                                                                children: "636"
                                                                            }), (0, a.jsx)("div", {
                                                                                className: "icons flex gap-2",
                                                                                children: (0, a.jsx)(g.P.windows, {
                                                                                    className: "size-4"
                                                                                })
                                                                            })]
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    }), (0, a.jsxs)("div", {
                                                        children: [(0, a.jsx)(N.I, {
                                                            type: "text",
                                                            id: "port",
                                                            ...s,
                                                            onChange: s.onChange,
                                                            className: "mb-3"
                                                        }), (0, a.jsx)(_.zG, {})]
                                                    })]
                                                })]
                                            })
                                        })
                                    }
                                })]
                            })
                        })]
                    })
                })
            }

            function k(e) {
                let {
                    formRef: s,
                    data: r
                } = e, {
                    t
                } = (0, h.$G)("servers"), i = v.z.object({
                    name: v.z.string().min(1, t("create.steps.general_settings.validation.name")),
                    os_type: v.z.string().min(1, t("create.steps.general_settings.validation.os_type"))
                }), n = (0, j.cI)({
                    resolver: (0, f.F)(i),
                    defaultValues: {
                        name: "",
                        os_type: "",
                        ...r
                    },
                    mode: "onChange"
                });
                return s.current = n, (0, a.jsx)("div", {
                    className: "space-y-8 divide-y divide-foreground/10 sm:space-y-5",
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h3", {
                                className: "text-lg font-medium leading-6 text-foreground",
                                children: t("create.steps.general_settings.name")
                            }), (0, a.jsx)("p", {
                                className: "mt-1 max-w-2xl text-sm text-foreground/60",
                                children: t("create.steps.general_settings.description")
                            })]
                        }), (0, a.jsx)(_.l0, {
                            ...n,
                            children: (0, a.jsxs)("form", {
                                children: [(0, a.jsx)(_.Wi, {
                                    control: n.control,
                                    name: "name",
                                    render: e => {
                                        let {
                                            field: s
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: "mt-6 space-y-6 sm:mt-5 sm:space-y-5",
                                            children: (0, a.jsxs)("div", {
                                                className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-foreground/10 sm:pt-5",
                                                children: [(0, a.jsx)(y._, {
                                                    htmlFor: "name",
                                                    className: "sm:mt-px sm:pt-2",
                                                    children: t("create.steps.general_settings.sname.label")
                                                }), (0, a.jsxs)("div", {
                                                    className: "mt-1 sm:col-span-2 sm:mt-0",
                                                    children: [(0, a.jsx)(N.I, {
                                                        type: "text",
                                                        id: "name",
                                                        placeholder: "Dz Server",
                                                        ...s
                                                    }), (0, a.jsx)("p", {
                                                        className: "mt-2 text-sm text-foreground/60",
                                                        children: t("create.steps.general_settings.sname.information")
                                                    }), (0, a.jsx)(_.zG, {})]
                                                })]
                                            })
                                        })
                                    }
                                }), (0, a.jsx)(_.Wi, {
                                    control: n.control,
                                    name: "os_type",
                                    render: e => {
                                        let {
                                            field: s
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: "mt-6 space-y-6 sm:mt-5 sm:space-y-5",
                                            children: (0, a.jsxs)("div", {
                                                className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-foreground/10 sm:pt-5",
                                                children: [(0, a.jsx)(y._, {
                                                    htmlFor: "os_type",
                                                    className: "sm:mt-px sm:pt-2",
                                                    children: t("create.steps.general_settings.os_type.label")
                                                }), (0, a.jsxs)("div", {
                                                    className: "mt-1 space-y-8 sm:col-span-2 sm:mt-0",
                                                    children: [(0, a.jsxs)(b.E, {
                                                        className: "grid grid-cols-2 gap-8 pt-2",
                                                        id: "os_type",
                                                        value: s.value,
                                                        onValueChange: s.onChange,
                                                        defaultValue: s.value,
                                                        children: [(0, a.jsx)(_.xJ, {
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "windows",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: "Microsoft Windows"
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "icons flex gap-2",
                                                                                children: (0, a.jsx)(g.P.windows, {
                                                                                    className: "size-4"
                                                                                })
                                                                            })
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, a.jsx)(_.xJ, {
                                                            className: "relative",
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "linux",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: "GNU/Linux"
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "icons flex gap-2",
                                                                                children: (0, a.jsx)(g.P.linux, {
                                                                                    className: "size-4"
                                                                                })
                                                                            })
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    }), (0, a.jsx)(_.zG, {})]
                                                })]
                                            })
                                        })
                                    }
                                })]
                            })
                        })]
                    })
                })
            }
            var z = r(1648),
                C = r(5765);

            function F(e) {
                let {
                    formRef: s,
                    data: r
                } = e, {
                    t
                } = (0, h.$G)("servers"), i = v.z.object({
                    username: v.z.string().min(1, t("create.steps.key_inputs.validation.username")),
                    password: v.z.string().min(1, t("create.steps.key_inputs.validation.password")),
                    shared: v.z.string()
                }), n = (0, j.cI)({
                    resolver: (0, f.F)(i),
                    defaultValues: {
                        username: "",
                        password: "",
                        shared: "true",
                        ...r
                    },
                    mode: "onChange"
                });
                return s.current = n, (0, a.jsx)("div", {
                    className: "space-y-8 divide-y divide-foreground/10 sm:space-y-5",
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("h3", {
                                className: "text-lg font-medium leading-6 text-foreground",
                                children: [t("create.steps.key_inputs.name"), " (", t(r.key_type), ")"]
                            }), (0, a.jsx)("p", {
                                className: "mt-1 max-w-2xl text-sm text-foreground/60",
                                children: t("create.steps.key_inputs.description")
                            })]
                        }), (0, a.jsx)(_.l0, {
                            ...n,
                            children: (0, a.jsxs)("form", {
                                children: [(0, a.jsx)(_.Wi, {
                                    control: n.control,
                                    name: "username",
                                    render: e => {
                                        let {
                                            field: s
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: "mt-6 space-y-6 sm:mt-5 sm:space-y-5",
                                            children: (0, a.jsxs)("div", {
                                                className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-foreground/10 sm:pt-5",
                                                children: [(0, a.jsx)(y._, {
                                                    htmlFor: "username",
                                                    className: "sm:mt-px sm:pt-2",
                                                    children: t("create.steps.key_inputs.username.label")
                                                }), (0, a.jsxs)("div", {
                                                    className: "mt-1 sm:col-span-2 sm:mt-0",
                                                    children: [(0, a.jsx)(N.I, {
                                                        type: "text",
                                                        id: "username",
                                                        placeholder: "root",
                                                        ...s
                                                    }), (0, a.jsx)("p", {
                                                        className: "mt-2 text-sm text-foreground/60",
                                                        children: t("create.steps.key_inputs.username.information", {
                                                            key_type: t(r.key_type)
                                                        })
                                                    }), (0, a.jsx)(_.zG, {})]
                                                })]
                                            })
                                        })
                                    }
                                }), (0, a.jsx)(_.Wi, {
                                    control: n.control,
                                    name: "password",
                                    render: e => {
                                        let {
                                            field: s
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: "mt-6 space-y-6 sm:mt-5 sm:space-y-5",
                                            children: (0, a.jsxs)("div", {
                                                className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-foreground/10 sm:pt-5",
                                                children: [(0, a.jsx)(y._, {
                                                    htmlFor: "password",
                                                    className: "sm:mt-px sm:pt-2",
                                                    children: t("create.steps.key_inputs.password.label")
                                                }), (0, a.jsxs)("div", {
                                                    className: "mt-1 sm:col-span-2 sm:mt-0",
                                                    children: ["ssh_certificate" === r.key_type ? (0, a.jsx)(C.g, {
                                                        id: "password",
                                                        ...s
                                                    }) : (0, a.jsx)(N.I, {
                                                        type: "password",
                                                        id: "password",
                                                        ...s
                                                    }), (0, a.jsx)("p", {
                                                        className: "mt-2 text-sm text-foreground/60",
                                                        children: t("create.steps.key_inputs.password.information", {
                                                            key_type: t(r.key_type)
                                                        })
                                                    }), (0, a.jsx)(_.zG, {})]
                                                })]
                                            })
                                        })
                                    }
                                }), (0, a.jsx)(_.Wi, {
                                    control: n.control,
                                    name: "shared",
                                    render: e => {
                                        let {
                                            field: s
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: "mt-6 space-y-6 sm:mt-5 sm:space-y-5",
                                            children: (0, a.jsxs)("div", {
                                                className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-foreground/10 sm:pt-5",
                                                children: [(0, a.jsx)(y._, {
                                                    htmlFor: "shared",
                                                    className: "sm:mt-px sm:pt-2",
                                                    children: t("create.steps.key_inputs.shared.label")
                                                }), (0, a.jsxs)("div", {
                                                    className: "mt-1 sm:col-span-2 sm:mt-0",
                                                    children: [(0, a.jsx)(z.X, {
                                                        id: "shared",
                                                        checked: "true" === s.value,
                                                        onCheckedChange: e => s.onChange(e ? "true" : "false")
                                                    }), (0, a.jsx)("p", {
                                                        className: "mt-2 text-sm text-foreground/60",
                                                        children: t("create.steps.key_inputs.shared.information", {
                                                            key_type: t(r.key_type)
                                                        })
                                                    }), (0, a.jsx)(_.zG, {})]
                                                })]
                                            })
                                        })
                                    }
                                })]
                            })
                        })]
                    })
                })
            }
            var I = r(6609),
                R = r(3848),
                V = r(7921);

            function P(e) {
                let {
                    formRef: s,
                    data: r
                } = e, {
                    t
                } = (0, h.$G)("servers"), i = v.z.object({
                    key_type: v.z.string().min(1, t("create.steps.key_selection.validation.key_type"))
                }), n = (0, j.cI)({
                    resolver: (0, f.F)(i),
                    defaultValues: {
                        key_type: "",
                        ...r
                    },
                    mode: "onChange"
                });
                return s.current = n, (0, a.jsx)("div", {
                    className: "space-y-8 divide-y divide-foreground/10 sm:space-y-5",
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h3", {
                                className: "text-lg font-medium leading-6 text-foreground",
                                children: t("create.steps.key_selection.name")
                            }), (0, a.jsx)("p", {
                                className: "mt-1 max-w-2xl text-sm text-foreground/60",
                                children: t("create.steps.key_selection.description")
                            })]
                        }), (0, a.jsx)(_.l0, {
                            ...n,
                            children: (0, a.jsx)("form", {
                                children: (0, a.jsx)(_.Wi, {
                                    control: n.control,
                                    name: "key_type",
                                    render: e => {
                                        let {
                                            field: s
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: "mt-6 space-y-6 sm:mt-5 sm:space-y-5",
                                            children: (0, a.jsxs)("div", {
                                                className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-foreground/10 sm:pt-5",
                                                children: [(0, a.jsx)(y._, {
                                                    htmlFor: "key_type",
                                                    className: "sm:mt-px sm:pt-2",
                                                    children: t("create.steps.key_selection.key_type.label")
                                                }), (0, a.jsxs)("div", {
                                                    className: "mt-1 space-y-8 sm:col-span-2 sm:mt-0",
                                                    children: [(0, a.jsxs)(b.E, {
                                                        className: "grid grid-cols-3 gap-8 pt-2",
                                                        id: "key_type",
                                                        value: s.value,
                                                        onValueChange: s.onChange,
                                                        defaultValue: s.value,
                                                        children: [(0, a.jsx)(_.xJ, {
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "ssh",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: t("ssh")
                                                                        }), (0, a.jsxs)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: [(0, a.jsx)("div", {
                                                                                className: "icons",
                                                                                children: (0, a.jsx)(I.Z, {
                                                                                    className: "size-4"
                                                                                })
                                                                            }), (0, a.jsxs)("div", {
                                                                                className: "icons flex gap-2",
                                                                                children: [(0, a.jsx)(g.P.windows, {
                                                                                    className: "size-4"
                                                                                }), (0, a.jsx)(g.P.linux, {
                                                                                    className: "size-4"
                                                                                })]
                                                                            })]
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, a.jsx)(_.xJ, {
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "ssh_certificate",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: t("ssh_certificate")
                                                                        }), (0, a.jsxs)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: [(0, a.jsx)("div", {
                                                                                className: "icons",
                                                                                children: (0, a.jsx)(R.Z, {
                                                                                    className: "size-4"
                                                                                })
                                                                            }), (0, a.jsxs)("div", {
                                                                                className: "icons flex gap-2",
                                                                                children: [(0, a.jsx)(g.P.windows, {
                                                                                    className: "size-4"
                                                                                }), (0, a.jsx)(g.P.linux, {
                                                                                    className: "size-4"
                                                                                })]
                                                                            })]
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, a.jsx)(_.xJ, {
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "winrm",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: "WinRM"
                                                                        }), (0, a.jsxs)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: [(0, a.jsx)("div", {
                                                                                className: "icons",
                                                                                children: (0, a.jsx)(I.Z, {
                                                                                    className: "size-4"
                                                                                })
                                                                            }), (0, a.jsx)("div", {
                                                                                className: "icons flex gap-2",
                                                                                children: (0, a.jsx)(g.P.windows, {
                                                                                    className: "size-4"
                                                                                })
                                                                            })]
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, a.jsx)(_.xJ, {
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "winrm_insecure",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: t("winrm_insecure")
                                                                        }), (0, a.jsxs)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: [(0, a.jsx)("div", {
                                                                                className: "icons",
                                                                                children: (0, a.jsx)(I.Z, {
                                                                                    className: "size-4"
                                                                                })
                                                                            }), (0, a.jsx)("div", {
                                                                                className: "icons flex gap-2",
                                                                                children: (0, a.jsx)(g.P.windows, {
                                                                                    className: "size-4"
                                                                                })
                                                                            })]
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, a.jsx)(_.xJ, {
                                                            children: (0, a.jsxs)(_.lX, {
                                                                className: "relative [&:has([data-state=checked])>div]:border-primary",
                                                                children: [(0, a.jsx)(_.NI, {
                                                                    children: (0, a.jsx)(b.m, {
                                                                        value: "no_key",
                                                                        className: "sr-only"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex flex-col gap-8 p-4",
                                                                        children: [(0, a.jsx)("span", {
                                                                            children: t("no_key")
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "details flex justify-between",
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "icons",
                                                                                children: (0, a.jsx)(V.Z, {
                                                                                    className: "size-4"
                                                                                })
                                                                            })
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    }), (0, a.jsx)(_.zG, {})]
                                                })]
                                            })
                                        })
                                    }
                                })
                            })
                        })]
                    })
                })
            }

            function G(e) {
                let {
                    data: s
                } = e, {
                    t: r
                } = (0, h.$G)("servers");
                return (0, a.jsxs)("div", {
                    className: "space-y-8 divide-y divide-foreground/10 sm:space-y-5",
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h3", {
                                className: "text-lg font-medium leading-6 text-foreground",
                                children: r("create.steps.summary.name")
                            }), (0, a.jsx)("p", {
                                className: "mt-1 max-w-2xl text-sm text-foreground/60",
                                children: r("create.steps.summary.description")
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5",
                        children: [(0, a.jsx)(y._, {
                            className: "mt-[5px]",
                            children: r("create.steps.general_settings.sname.label")
                        }), (0, a.jsx)("div", {
                            className: "mt-1 sm:col-span-2 sm:mt-0",
                            children: s.name
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5",
                        children: [(0, a.jsx)(y._, {
                            className: "mt-[5px]",
                            children: r("create.steps.connection_information.ip_address.label")
                        }), (0, a.jsx)("div", {
                            className: "mt-1 sm:col-span-2 sm:mt-0",
                            children: s.ip_address
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5",
                        children: [(0, a.jsx)(y._, {
                            className: "mt-[5px]",
                            children: r("create.steps.general_settings.os_type.label")
                        }), (0, a.jsx)("div", {
                            className: "mt-1 sm:col-span-2 sm:mt-0",
                            children: "linux" === s.os_type ? (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, a.jsx)(g.P.linux, {
                                    className: "size-4"
                                }), "GNU/Linux"]
                            }) : (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, a.jsx)(g.P.windows, {
                                    className: "size-4"
                                }), "Windows"]
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5",
                        children: [(0, a.jsx)(y._, {
                            className: "mt-[5px]",
                            children: r("create.steps.connection_information.port.label")
                        }), (0, a.jsx)("div", {
                            className: "mt-1 sm:col-span-2 sm:mt-0",
                            children: s.port
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5",
                        children: [(0, a.jsx)(y._, {
                            className: "mt-[5px]",
                            children: r("create.steps.key_selection.key_type.label")
                        }), (0, a.jsx)("div", {
                            className: "mt-1 sm:col-span-2 sm:mt-0",
                            children: r(s.key_type)
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5",
                        children: [(0, a.jsx)(y._, {
                            className: "mt-[5px]",
                            children: r("create.steps.summary.shared_key")
                        }), (0, a.jsx)("div", {
                            className: "mt-1 sm:col-span-2 sm:mt-0",
                            children: r("true" === s.shared ? "yes" : "no")
                        })]
                    })]
                })
            }
            var Z = r(7249),
                J = r(3749),
                X = r(986),
                W = r(3742),
                E = r(7327);

            function S(e) {
                let {
                    steps: s,
                    current: r
                } = e;
                return (0, a.jsx)("nav", {
                    "aria-label": "Progress",
                    children: (0, a.jsx)("ol", {
                        role: "list",
                        className: "overflow-hidden",
                        children: s.map((e, t) => (0, a.jsx)("li", {
                            className: (0, E.cn)(t !== s.length - 1 ? "pb-10" : "", "relative"),
                            children: r > t ? (0, a.jsxs)(a.Fragment, {
                                children: [t !== s.length - 1 ? (0, a.jsx)("div", {
                                    className: "absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-foreground",
                                    "aria-hidden": "true"
                                }) : null, (0, a.jsxs)("div", {
                                    className: "group relative flex items-start",
                                    children: [(0, a.jsx)("span", {
                                        className: "flex h-9 items-center",
                                        children: (0, a.jsx)("span", {
                                            className: "relative z-10 flex size-8 items-center justify-center rounded-full bg-foreground group-hover:bg-foreground",
                                            children: (0, a.jsx)(W.Z, {
                                                className: "mt-px size-5 text-background",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    }), (0, a.jsxs)("span", {
                                        className: "ml-4 flex min-w-0 flex-col",
                                        children: [(0, a.jsx)("span", {
                                            className: "text-xs font-semibold uppercase tracking-wide",
                                            children: e.name
                                        }), (0, a.jsx)("span", {
                                            className: "text-sm text-gray-500",
                                            children: e.description
                                        })]
                                    })]
                                })]
                            }) : r === t ? (0, a.jsxs)(a.Fragment, {
                                children: [t !== s.length - 1 ? (0, a.jsx)("div", {
                                    className: "absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300",
                                    "aria-hidden": "true"
                                }) : null, (0, a.jsxs)("div", {
                                    className: "group relative flex items-start",
                                    "aria-current": "step",
                                    children: [(0, a.jsx)("span", {
                                        className: "flex h-9 items-center",
                                        "aria-hidden": "true",
                                        children: (0, a.jsx)("span", {
                                            className: "relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-foreground bg-background",
                                            children: (0, a.jsx)("span", {
                                                className: "size-2.5 rounded-full bg-foreground"
                                            })
                                        })
                                    }), (0, a.jsxs)("span", {
                                        className: "ml-4 flex min-w-0 flex-col",
                                        children: [(0, a.jsx)("span", {
                                            className: "text-xs font-semibold uppercase tracking-wide text-foreground",
                                            children: e.name
                                        }), (0, a.jsx)("span", {
                                            className: "text-sm text-gray-500",
                                            children: e.description
                                        })]
                                    })]
                                })]
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [t !== s.length - 1 ? (0, a.jsx)("div", {
                                    className: "absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300",
                                    "aria-hidden": "true"
                                }) : null, (0, a.jsxs)("div", {
                                    className: "group relative flex items-start",
                                    children: [(0, a.jsx)("span", {
                                        className: "flex h-9 items-center",
                                        "aria-hidden": "true",
                                        children: (0, a.jsx)("span", {
                                            className: "relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-background group-hover:border-gray-400",
                                            children: (0, a.jsx)("span", {
                                                className: "size-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                                            })
                                        })
                                    }), (0, a.jsxs)("span", {
                                        className: "ml-4 flex min-w-0 flex-col",
                                        children: [(0, a.jsx)("span", {
                                            className: "text-xs font-semibold uppercase tracking-wide text-gray-500",
                                            children: e.name
                                        }), (0, a.jsx)("span", {
                                            className: "text-sm text-gray-500",
                                            children: e.description
                                        })]
                                    })]
                                })]
                            })
                        }, e.name))
                    })
                })
            }
            var $ = r(5050);

            function A() {
                let {
                    toast: e
                } = (0, $.p)(), [s] = (0, n.u)(), r = (0, p.useRouter)(), o = (0, t.S)(), {
                    t: f
                } = (0, h.$G)("servers"), [j, v] = (0, u.useState)({}), [N, y] = (0, u.useState)(!1), [b, _] = (0, u.useState)(0), z = [{
                    name: f("create.steps.connection_information.name"),
                    description: f("create.steps.connection_information.description"),
                    ref: (0, u.useRef)(),
                    component: w,
                    validation: async e => {
                        try {
                            let s = await i.dJ.post("/servers/check_access", e);
                            return {
                                isValid: 200 === s.status,
                                message: s.data
                            }
                        } catch (e) {
                            var s, r;
                            return {
                                isValid: (null === (s = e.response) || void 0 === s ? void 0 : s.status) === 200,
                                message: null === (r = e.response) || void 0 === r ? void 0 : r.data
                            }
                        }
                    }
                }, {
                    name: f("create.steps.general_settings.name"),
                    description: f("create.steps.general_settings.description"),
                    ref: (0, u.useRef)(),
                    component: k,
                    validation: async e => {
                        try {
                            let s = await i.dJ.post("/servers/check_name", e);
                            return {
                                isValid: 200 === s.status,
                                message: s.data
                            }
                        } catch (e) {
                            var s, r;
                            return {
                                isValid: (null === (s = e.response) || void 0 === s ? void 0 : s.status) === 200,
                                message: null === (r = e.response) || void 0 === r ? void 0 : r.data
                            }
                        }
                    }
                }, {
                    name: f("create.steps.key_selection.name"),
                    description: f("create.steps.key_selection.description"),
                    ref: (0, u.useRef)(),
                    component: P,
                    validation: async () => ({
                        isValid: !0,
                        message: ""
                    })
                }, {
                    name: f("create.steps.key_inputs.name"),
                    description: f("create.steps.key_inputs.description"),
                    ref: (0, u.useRef)(),
                    component: F,
                    validation: async e => {
                        if ("no_key" == e.key_type) return {
                            isValid: !0,
                            message: ""
                        };
                        try {
                            let s = await i.dJ.post("/servers/check_connection", e);
                            return {
                                isValid: 200 === s.status,
                                message: s.data
                            }
                        } catch (e) {
                            var s, r;
                            return {
                                isValid: (null === (s = e.response) || void 0 === s ? void 0 : s.status) === 200,
                                message: null === (r = e.response) || void 0 === r ? void 0 : r.data
                            }
                        }
                    }
                }, {
                    name: f("create.steps.summary.name"),
                    description: f("create.steps.summary.description"),
                    ref: (0, u.useRef)(),
                    component: G,
                    validation: async () => ({
                        isValid: !0,
                        message: ""
                    })
                }], C = () => {
                    var s;
                    if (y(!0), !(null === (s = z[b].ref) || void 0 === s ? void 0 : s.current)) return;
                    let r = z[b].ref.current;
                    r.trigger(), setTimeout(async () => {
                        if (r.formState.isValid) {
                            v({
                                ...j,
                                ...r.getValues()
                            });
                            let s = await z[b].validation({
                                ...j,
                                ...r.getValues()
                            });
                            if (!s.isValid) {
                                Object.keys(s.message).forEach(e => {
                                    r.setError(e, {
                                        type: "custom",
                                        message: s.message[e]
                                    })
                                }), e({
                                    title: f("error"),
                                    description: f("create.errors.validation"),
                                    variant: "destructive"
                                }), y(!1);
                                return
                            }
                            if (r.getValues().key_type && "no_key" === r.getValues().key_type) {
                                _(b + 2), y(!1);
                                return
                            }
                            _(b + 1)
                        } else e({
                            title: f("error"),
                            description: f("create.errors.validation"),
                            variant: "destructive"
                        });
                        y(!1)
                    }, 250)
                }, I = () => {
                    y(!0), i.dJ.post("/servers", j).then(() => {
                        o.refreshServers(), e({
                            title: f("success"),
                            description: f("create.errors.success")
                        }), r.push("/servers")
                    }).catch(() => {
                        e({
                            title: f("error"),
                            description: f("create.errors.error"),
                            variant: "destructive"
                        })
                    }).finally(() => {
                        y(!1)
                    })
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(X.Z, {
                        title: f("create.title"),
                        description: f("create.description"),
                        rightSide: (0, a.jsx)(x(), {
                            href: "/servers",
                            children: (0, a.jsxs)(Z.z, {
                                className: "rounded-full",
                                children: [(0, a.jsx)(l.Z, {
                                    className: "mr-2 size-4"
                                }), f("create.servers")]
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: "mt-8 grid grid-cols-4 gap-8 px-8",
                        children: [(0, a.jsx)(S, {
                            steps: z,
                            current: b
                        }), (0, a.jsxs)("div", {
                            className: "col-span-3 space-y-8",
                            children: [(0, a.jsx)(J.Zb, {
                                children: (0, a.jsx)(J.aY, {
                                    className: "mt-6",
                                    ref: s,
                                    children: z.map((e, s) => s !== b ? null : (0, a.jsx)(e.component, {
                                        formRef: e.ref,
                                        data: j
                                    }, e.name))
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, a.jsxs)(Z.z, {
                                    variant: "outline",
                                    onClick: () => _(b - 1),
                                    disabled: 0 === b,
                                    children: [(0, a.jsx)(c.Z, {
                                        className: "mr-2 size-4"
                                    }), f("create.back")]
                                }), b !== z.length - 1 ? (0, a.jsxs)(Z.z, {
                                    variant: "outline",
                                    onClick: () => C(),
                                    disabled: b === z.length - 1 || N,
                                    children: [N && (0, a.jsx)(g.P.spinner, {
                                        className: "mr-2 size-4 animate-spin"
                                    }), f("create.next"), (0, a.jsx)(d.Z, {
                                        className: "ml-2 size-4"
                                    })]
                                }) : (0, a.jsxs)(Z.z, {
                                    variant: "default",
                                    onClick: () => I(),
                                    disabled: N,
                                    children: [N && (0, a.jsx)(g.P.spinner, {
                                        className: "mr-2 size-4 animate-spin"
                                    }), !N && (0, a.jsx)(m.Z, {
                                        className: "mr-2 size-4"
                                    }), f("create.create")]
                                })]
                            })]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [3051, 5703, 2888, 9774, 179], function() {
            return e(e.s = 1319)
        }), _N_E = e.O()
    }
]);