(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        8312: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(3292)
            }])
        },
        3749: function(e, s, t) {
            "use strict";
            t.d(s, {
                Ol: function() {
                    return i
                },
                Zb: function() {
                    return n
                },
                aY: function() {
                    return c
                },
                ll: function() {
                    return d
                }
            });
            var a = t(5893),
                l = t(7294),
                r = t(7327);
            let n = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", t),
                    ...l
                })
            });
            n.displayName = "Card";
            let i = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, r.cn)("flex flex-col space-y-1.5 p-6", t),
                    ...l
                })
            });
            i.displayName = "CardHeader";
            let d = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("h3", {
                    ref: s,
                    className: (0, r.cn)("text-lg font-semibold leading-none tracking-tight", t),
                    ...l
                })
            });
            d.displayName = "CardTitle", l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("p", {
                    ref: s,
                    className: (0, r.cn)("text-sm text-muted-foreground", t),
                    ...l
                })
            }).displayName = "CardDescription";
            let c = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, r.cn)("p-6 pt-0", t),
                    ...l
                })
            });
            c.displayName = "CardContent", l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, r.cn)(" flex items-center p-6 pt-0", t),
                    ...l
                })
            }).displayName = "CardFooter"
        },
        3292: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return G
                }
            });
            var a = t(5893),
                l = t(5152),
                r = t.n(l),
                n = t(7294),
                i = t(7421),
                d = t(9774),
                c = t(443),
                o = t(5711);
            /**
             * @license lucide-react v0.363.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let x = (0, o.Z)("ArrowRight", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }],
                ["path", {
                    d: "m12 5 7 7-7 7",
                    key: "xquz4c"
                }]
            ]);
            var m = t(5854),
                u = t(9525),
                f = t(5358),
                h = t(1664),
                j = t.n(h),
                g = t(3749),
                p = t(9681),
                N = t(7327),
                v = t(2561);

            function _() {
                let [e, s] = (0, n.useState)(!0), [t, l] = (0, n.useState)(), r = (0, p.x)(), {
                    t: o
                } = (0, i.$G)("dashboard"), h = r.permissions.view, _ = ["servers", "extensions", "users", "version"];
                (0, n.useEffect)(() => {
                    d.dJ.get("/dashboard/information").then(e => {
                        l(e.data), s(!1)
                    })
                }, []);
                let b = (0, n.useMemo)(() => h.dashboard.filter(e => _.includes(e)).sort((e, s) => _.indexOf(e) - _.indexOf(s)), [h.dashboard, _]),
                    y = (0, n.useMemo)(() => {
                        let e = b.length;
                        return "md:grid-cols-".concat(e, " lg:grid-cols-").concat(e)
                    }, [b]);
                return 0 === b.length ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: (0, N.cn)("grid divide-x border-y", y),
                        children: b.map((s, l) => (0, a.jsxs)("div", {
                            children: ["servers" === s && (0, a.jsxs)("div", {
                                className: "p-2",
                                children: [(0, a.jsxs)(g.Ol, {
                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                    children: [(0, a.jsx)(g.ll, {
                                        className: "text-sm font-medium opacity-70",
                                        children: o("cards.server_count")
                                    }), (0, a.jsx)(c.Z, {
                                        className: "size-4 text-muted-foreground"
                                    })]
                                }), (0, a.jsxs)(g.aY, {
                                    children: [(0, a.jsx)("div", {
                                        className: "text-2xl font-semibold",
                                        children: e ? (0, a.jsx)(v.O, {
                                            className: "mb-2 h-6 w-16"
                                        }) : null == t ? void 0 : t.server_count
                                    }), (0, a.jsxs)(j(), {
                                        href: "/servers",
                                        className: "flex items-center gap-1 text-xs text-muted-foreground transition-all hover:gap-3",
                                        children: [o("cards.show_all_servers"), " ", (0, a.jsx)(x, {
                                            className: "inline-block size-4"
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "hidden md:grid-cols-4 lg:grid-cols-4"
                                }), (0, a.jsx)("div", {
                                    className: "hidden md:grid-cols-3 lg:grid-cols-3"
                                }), (0, a.jsx)("div", {
                                    className: "hidden md:grid-cols-2 lg:grid-cols-2"
                                }), (0, a.jsx)("div", {
                                    className: "hidden md:grid-cols-1 lg:grid-cols-1"
                                })]
                            }), "extensions" === s && (0, a.jsxs)("div", {
                                className: "p-2",
                                children: [(0, a.jsxs)(g.Ol, {
                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                    children: [(0, a.jsx)(g.ll, {
                                        className: "text-sm font-medium opacity-70",
                                        children: o("cards.extension_count")
                                    }), (0, a.jsx)(m.Z, {
                                        className: "size-4 text-muted-foreground"
                                    })]
                                }), (0, a.jsxs)(g.aY, {
                                    children: [(0, a.jsx)("div", {
                                        className: "text-2xl font-semibold",
                                        children: e ? (0, a.jsx)(v.O, {
                                            className: "mb-2 h-6 w-16"
                                        }) : null == t ? void 0 : t.extension_count
                                    }), (0, a.jsxs)(j(), {
                                        className: "flex items-center gap-1 text-xs text-muted-foreground transition-all hover:gap-3",
                                        href: "/settings/extensions",
                                        children: [o("cards.show_all_extensions"), " ", (0, a.jsx)(x, {
                                            className: "inline-block size-4"
                                        })]
                                    })]
                                })]
                            }), "users" === s && (0, a.jsxs)("div", {
                                className: "p-2",
                                children: [(0, a.jsxs)(g.Ol, {
                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                    children: [(0, a.jsx)(g.ll, {
                                        className: "text-sm font-medium opacity-70",
                                        children: o("cards.user_count")
                                    }), (0, a.jsx)(u.Z, {
                                        className: "size-4 text-muted-foreground"
                                    })]
                                }), (0, a.jsxs)(g.aY, {
                                    children: [(0, a.jsx)("div", {
                                        className: "text-2xl font-semibold",
                                        children: e ? (0, a.jsx)(v.O, {
                                            className: "mb-2 h-6 w-16"
                                        }) : null == t ? void 0 : t.user_count
                                    }), 1 === r.status ? (0, a.jsxs)(j(), {
                                        href: "/settings/users",
                                        className: "flex items-center gap-1 text-xs text-muted-foreground transition-all hover:gap-3",
                                        children: [o("cards.show_all_users"), " ", (0, a.jsx)(x, {
                                            className: "inline-block size-4"
                                        })]
                                    }) : (0, a.jsx)("p", {
                                        className: "flex items-center gap-1 text-xs text-muted-foreground transition-all hover:gap-3",
                                        children: o("cards.total_user_count")
                                    })]
                                })]
                            }), "version" === s && (0, a.jsxs)("div", {
                                className: "p-2",
                                children: [(0, a.jsxs)(g.Ol, {
                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                    children: [(0, a.jsx)(g.ll, {
                                        className: "text-sm font-medium opacity-70",
                                        children: o("cards.version")
                                    }), (0, a.jsx)(f.Z, {
                                        className: "size-4 text-muted-foreground"
                                    })]
                                }), (0, a.jsxs)(g.aY, {
                                    children: [(0, a.jsx)("div", {
                                        className: "text-2xl font-semibold",
                                        children: e ? (0, a.jsx)(v.O, {
                                            className: "mb-2 h-6 w-16"
                                        }) : null == t ? void 0 : t.version
                                    }), (0, a.jsxs)("p", {
                                        className: "flex items-center gap-1 text-xs text-muted-foreground transition-all hover:gap-3",
                                        children: ["Build: ", null == t ? void 0 : t.version_code]
                                    })]
                                })]
                            })]
                        }, "dashboard_cards_".concat(l)))
                    })
                })
            }
            var b = t(6660);
            /**
             * @license lucide-react v0.363.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let y = (0, o.Z)("FolderX", [
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
                    key: "1kt360"
                }],
                ["path", {
                    d: "m9.5 10.5 5 5",
                    key: "ra9qjz"
                }],
                ["path", {
                    d: "m14.5 10.5-5 5",
                    key: "l2rkpq"
                }]
            ]);
            var w = t(6249),
                k = t(733);

            function z(e) {
                let {
                    item: s
                } = e, [t, l] = (0, n.useState)(!0), [r, i] = (0, n.useState)();
                return (0, n.useEffect)(() => {
                    d.dJ.get("/menu/servers/".concat(s.id)).then(e => {
                        i(e.data)
                    }).catch(() => {}).finally(() => {
                        l(!1)
                    })
                }, []), (0, a.jsx)(g.Zb, {
                    className: "relative cursor-pointer duration-100 ease-in hover:scale-[102%] active:scale-100",
                    children: (0, a.jsxs)(g.aY, {
                        className: "mt-6",
                        children: [(0, a.jsx)("div", {
                            className: "flex",
                            children: (0, a.jsx)("div", {
                                className: "icon self-start rounded-md bg-secondary p-3 dark:bg-secondary/10",
                                children: "linux" === s.os ? (0, a.jsx)(k.P.linux, {
                                    className: "size-6 text-secondary-foreground/70 dark:text-white/70"
                                }) : (0, a.jsx)(k.P.windows, {
                                    className: "size-6 text-secondary-foreground/70 dark:text-white/70"
                                })
                            })
                        }), (0, a.jsx)("h5", {
                            className: "mt-4 font-medium",
                            children: s.name
                        }), (0, a.jsx)("span", {
                            className: "text-xs text-muted-foreground",
                            children: s.ip_address
                        }), (0, a.jsxs)("div", {
                            className: "absolute right-6 top-6 ",
                            children: [t && (0, a.jsx)(v.O, {
                                className: "size-4 rounded-full"
                            }), !t && (0, a.jsx)(w.Z, {
                                className: (0, N.cn)("absolute right-0 top-px size-4", (null == r ? void 0 : r.is_online) ? "text-green-500" : "text-red-500")
                            })]
                        })]
                    })
                })
            }

            function O() {
                let {
                    t: e
                } = (0, i.$G)("dashboard"), [s, t] = (0, n.useState)(!0), [l, r] = (0, n.useState)([]), c = (0, b.S)();
                return (0, n.useEffect)(() => {
                    d.dJ.get("/dashboard/favorite_servers").then(e => {
                        r(e.data)
                    }).catch(() => {}).finally(() => {
                        t(!1)
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h3", {
                        className: "p-8 pb-3 text-lg font-semibold",
                        children: e("favorite_servers.title")
                    }), (0, a.jsxs)("div", {
                        className: "grid grid-cols-2 gap-6 p-8 pt-3",
                        children: [!s && l.map(e => (0, a.jsx)("div", {
                            onClick: () => c.setSelected(e.id),
                            children: (0, a.jsx)(z, {
                                item: e
                            })
                        }, e.id)), s && [...Array(6)].map((e, s) => (0, a.jsx)(v.O, {
                            className: "h-[146px] w-full"
                        }, s))]
                    }), !s && 0 === l.length && (0, a.jsxs)("div", {
                        className: "flex h-1/2 w-full flex-col items-center justify-center gap-3",
                        children: [(0, a.jsx)(y, {
                            className: "size-8 text-muted-foreground"
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-1",
                            children: [(0, a.jsx)("h5", {
                                className: "font-semibold text-muted-foreground",
                                children: e("favorite_servers.empty_title")
                            }), (0, a.jsx)("span", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: e("favorite_servers.empty_description")
                            })]
                        })]
                    })]
                })
            }
            var S = t(952),
                E = t(9560),
                Z = t.n(E),
                C = t(9229);

            function F() {
                let {
                    t: e,
                    i18n: s
                } = (0, i.$G)("dashboard"), [t, l] = (0, n.useState)(!0), [r, c] = (0, n.useState)([]);
                return (0, n.useEffect)(() => {
                    d.dJ.get("/dashboard/latest_logged_in_users").then(e => {
                        c(e.data)
                    }).finally(() => {
                        l(!1)
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h3", {
                        className: "p-8 pb-3 text-lg font-semibold",
                        children: e("latest_logged_in_users.title")
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-col divide-y",
                        children: [r.map(t => (0, a.jsx)("div", {
                            children: (0, a.jsxs)("div", {
                                className: "flex px-8 py-4",
                                children: [(0, a.jsx)("div", {
                                    className: "avatar mr-5",
                                    children: (0, a.jsxs)(C.qE, {
                                        className: "size-12",
                                        children: [(0, a.jsx)(S.F$, {
                                            src: "https://gravatar.com/avatar/".concat(Z()(t.email), "?d=404"),
                                            alt: t.name
                                        }), (0, a.jsx)(C.Q5, {
                                            children: t && t.name[0]
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-[6px]",
                                    children: [(0, a.jsxs)("h5", {
                                        className: "font-semibold",
                                        children: [t.name, " ", 1 == t.status && "(Y\xf6netici)"]
                                    }), (0, a.jsxs)("div", {
                                        className: "text-sm",
                                        children: [(0, a.jsxs)("span", {
                                            className: "font-medium text-muted-foreground",
                                            children: [e("latest_logged_in_users.last_login_at"), ":", " "]
                                        }), " ", (0, a.jsx)("span", {
                                            className: "text-muted-foreground/80",
                                            children: new Date(t.last_login_at).toLocaleDateString(s.language, {
                                                day: "2-digit",
                                                month: "long",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "text-sm",
                                        children: [(0, a.jsxs)("span", {
                                            className: "font-medium text-muted-foreground",
                                            children: [e("latest_logged_in_users.last_login_ip"), ":", " "]
                                        }), " ", (0, a.jsx)("span", {
                                            className: "text-muted-foreground/80",
                                            children: t.last_login_ip
                                        })]
                                    })]
                                })]
                            })
                        }, t.id)), t && (0, a.jsx)(a.Fragment, {
                            children: [void 0, void 0, void 0, void 0, void 0].map((s, t) => (0, a.jsxs)("div", {
                                className: "flex px-8 py-4",
                                children: [(0, a.jsx)("div", {
                                    className: "avatar mr-5",
                                    children: (0, a.jsx)(C.qE, {
                                        className: "size-12",
                                        children: (0, a.jsx)(C.Q5, {})
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex w-full flex-col gap-[6px]",
                                    children: [(0, a.jsx)("h5", {
                                        className: "font-semibold",
                                        children: (0, a.jsx)(v.O, {
                                            className: "h-5"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "text-sm",
                                        children: (0, a.jsxs)("span", {
                                            className: "flex items-center gap-[6px] font-medium text-muted-foreground",
                                            children: [e("latest_logged_in_users.last_login_at"), ":", " ", (0, a.jsx)(v.O, {
                                                className: "h-4 w-1/2"
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "text-sm",
                                        children: (0, a.jsxs)("span", {
                                            className: "flex items-center gap-[6px] font-medium text-muted-foreground",
                                            children: [e("latest_logged_in_users.last_login_ip"), ":", " ", (0, a.jsx)(v.O, {
                                                className: "h-4 w-1/2"
                                            })]
                                        })
                                    })]
                                })]
                            }, t))
                        })]
                    }), !t && 0 === r.length && (0, a.jsxs)("div", {
                        className: "mt-10 flex h-1/2 w-full flex-col items-center justify-center gap-3",
                        children: [(0, a.jsx)(y, {
                            className: "size-8 text-muted-foreground"
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-1",
                            children: [(0, a.jsx)("h5", {
                                className: "font-semibold text-muted-foreground",
                                children: e("latest_logged_in_users.empty_title")
                            }), (0, a.jsx)("span", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: e("latest_logged_in_users.empty_description")
                            })]
                        })]
                    })]
                })
            }
            var R = t(1163);

            function Y(e) {
                let {
                    item: s
                } = e;
                return (0, a.jsx)(g.Zb, {
                    className: "relative cursor-pointer duration-100 ease-in hover:scale-[102%] active:scale-100",
                    children: (0, a.jsxs)(g.aY, {
                        className: "mt-6",
                        children: [(0, a.jsx)("div", {
                            className: "flex",
                            children: (0, a.jsx)("div", {
                                className: "icon self-start rounded-md bg-secondary p-3 dark:bg-secondary/10",
                                children: s.extension.icon ? (0, a.jsx)("i", {
                                    className: "fa-solid fa-".concat(s.extension.icon, " fa-fw fa-lg text-secondary-foreground/70 dark:text-white/70")
                                }) : (0, a.jsx)(m.Z, {
                                    className: "size-6 text-secondary-foreground/70 dark:text-white/70"
                                })
                            })
                        }), (0, a.jsx)("h5", {
                            className: "mt-4 font-medium",
                            children: s.extension.display_name
                        }), (0, a.jsxs)("span", {
                            className: "mt-2 flex items-center gap-1 text-xs text-muted-foreground",
                            children: ["linux" === s.server.os ? (0, a.jsx)(k.P.linux, {
                                className: "size-4 text-secondary-foreground/70 dark:text-white/70"
                            }) : (0, a.jsx)(k.P.windows, {
                                className: "size-4 text-secondary-foreground/70 dark:text-white/70"
                            }), " ", s.server.name]
                        })]
                    })
                })
            }

            function M() {
                let e = (0, R.useRouter)(),
                    {
                        t: s
                    } = (0, i.$G)("dashboard"),
                    [t, l] = (0, n.useState)(!0),
                    [r, c] = (0, n.useState)([]);
                return (0, n.useEffect)(() => {
                    d.dJ.get("/dashboard/most_used_extensions").then(e => {
                        c(e.data)
                    }).finally(() => {
                        l(!1)
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h3", {
                        className: "p-8 pb-3 text-lg font-semibold",
                        children: s("most_used_extensions.title")
                    }), (0, a.jsxs)("div", {
                        className: "grid grid-cols-2 gap-6 p-8 pt-3",
                        children: [!t && r.length > 0 && r.map(s => (0, a.jsx)("div", {
                            onClick: () => e.push("/servers/".concat(s.server.id, "/extensions/").concat(s.extension.id)),
                            children: (0, a.jsx)(Y, {
                                item: s
                            })
                        }, s.id)), t && [...Array(6)].map((e, s) => (0, a.jsx)(v.O, {
                            className: "h-[146px] w-full"
                        }, s))]
                    }), !t && 0 === r.length && (0, a.jsxs)("div", {
                        className: "flex h-1/2 w-full flex-col items-center justify-center gap-3",
                        children: [(0, a.jsx)(y, {
                            className: "size-8 text-muted-foreground"
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-1",
                            children: [(0, a.jsx)("h5", {
                                className: "font-semibold text-muted-foreground",
                                children: s("most_used_extensions.empty_title")
                            }), (0, a.jsx)("span", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: s("most_used_extensions.empty_description")
                            })]
                        })]
                    })]
                })
            }
            let P = r()(() => t.e(2071).then(t.bind(t, 2071)), {
                loadableGenerated: {
                    webpack: () => [2071]
                },
                ssr: !1
            });

            function G() {
                let {
                    t: e
                } = (0, i.$G)("dashboard"), s = (0, p.x)(), {
                    redirectNow: t
                } = (0, b.S)(), l = s.permissions.view, r = ["most_used_extensions", "auth_logs", "most_used_servers"];
                (0, n.useEffect)(() => {
                    l.redirect && t(l.redirect)
                }, [l]);
                let d = (0, n.useMemo)(() => l.dashboard.filter(e => r.includes(e)).sort((e, s) => r.indexOf(e) - r.indexOf(s)), [l.dashboard, r]),
                    c = (0, n.useMemo)(() => {
                        let e = d.length;
                        return 1 === e ? "" : "xl:w-1/".concat(e)
                    }, [d]),
                    o = (0, n.useMemo)(() => d.map(e => (0, a.jsxs)("div", {
                        className: (0, N.cn)("w-full", c),
                        children: ["most_used_extensions" === e && (0, a.jsx)(M, {}), "most_used_servers" === e && (0, a.jsx)(O, {}), "auth_logs" === e && (0, a.jsx)(F, {})]
                    }, e)), [d, c]);
                return (0, a.jsxs)("div", {
                    className: "flex flex-col",
                    style: {
                        height: "var(--container-height)"
                    },
                    children: [(0, a.jsxs)("div", {
                        className: "title flex items-center justify-between gap-3 overflow-hidden p-8",
                        children: [(0, a.jsx)("h2", {
                            className: "text-2xl font-semibold",
                            children: e("title", "Pano")
                        }), (0, a.jsx)("span", {
                            className: "font-medium text-muted-foreground",
                            children: (0, a.jsx)(P, {})
                        })]
                    }), (0, a.jsx)(_, {}), (0, a.jsx)("div", {
                        className: "flex w-full flex-[2] flex-col divide-x xl:flex-row",
                        children: o
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [2888, 9774, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);