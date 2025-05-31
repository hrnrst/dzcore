exports.id = 5143, exports.ids = [5143], exports.modules = {
    4282: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    S: () => n
                }), t(59574);
                var i = t(64329),
                    l = (t(6572), e([i]));
                i = (l.then ? (await l)() : l)[0];
                let n = {
                    supportedLngs: ["tr", "en", "de"],
                    fallbackLng: {
                        dev: ["tr", "en"]
                    },
                    react: {
                        useSuspense: !1
                    },
                    ns: ["common", "zod", "components", "dashboard", "settings"],
                    use: void 0,
                    backend: void 0
                };
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    68101: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => N
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(56660),
                    r = t(47128),
                    o = t(69915),
                    d = t(41664),
                    c = t.n(d),
                    p = t(11163),
                    x = t(30808),
                    u = t.n(x),
                    f = t(57987),
                    m = t(39506),
                    h = t(55369),
                    j = t(917),
                    _ = t(53830),
                    y = t(19681),
                    g = t(2088),
                    v = t(32676),
                    C = t(66924),
                    F = t(7483),
                    b = e([n, r, o, f, m, h, j, _, y, g, v, F]);
                [n, r, o, f, m, h, j, _, y, g, v, F] = b.then ? (await b)() : b;
                let N = ({
                    Component: e,
                    pageProps: s
                }) => {
                    let t = (0, p.useRouter)(),
                        a = (0, n.S)(),
                        {
                            t: d
                        } = (0, f.useTranslation)("common"),
                        [x] = (0, r.useAutoAnimate)({
                            duration: 150,
                            easing: "linear"
                        }),
                        b = (0, l.useRef)(null),
                        {
                            logout: N
                        } = (0, g.a)(),
                        [w, L] = (0, l.useState)(!1),
                        R = (0, y.x)();
                    (0, l.useEffect)(() => {
                        let e = () => u().start(),
                            s = () => {
                                a.setCollapsed(!0), u().done()
                            },
                            t = () => u().done();
                        return p.Router.events.on("routeChangeStart", e), p.Router.events.on("routeChangeComplete", s), p.Router.events.on("routeChangeError", t), () => {
                            p.Router.events.off("routeChangeStart", e), p.Router.events.off("routeChangeComplete", s), p.Router.events.off("routeChangeError", t)
                        }
                    }, [a]), (0, l.useEffect)(() => {
                        let e = setInterval(() => {
                            let e = o.default.get("currentUser");
                            e && (e = JSON.parse(e)).expired_at && e.expired_at < Date.now() && (L(!0), N())
                        }, 3e4);
                        return () => clearInterval(e)
                    }, [N]);
                    let O = (0, l.useCallback)(e.getLayout ?? (e => e), [e]);
                    return R && "" !== R.name ? (0, i.jsxs)(i.Fragment, {
                        children: [i.jsx(h.H, {}), i.jsx("div", {
                            className: "flex-1",
                            children: (0, i.jsxs)(F.pO, {
                                className: "min-h-[var(--container-height)]",
                                direction: "horizontal",
                                autoSaveId: "limanLayout",
                                children: [i.jsx(F.ee, {
                                    defaultSize: 18,
                                    minSize: 15,
                                    collapsible: !0,
                                    className: (0, v.cn)("md:block", a.collapsed && "hidden"),
                                    ref: b,
                                    children: i.jsx(m.Y, {})
                                }), i.jsx(F.Dp, {
                                    withHandle: !0,
                                    onDoubleClick: () => {
                                        b.current?.isCollapsed() ? b.current?.expand() : b.current?.collapse()
                                    }
                                }), i.jsx(F.ee, {
                                    defaultSize: 82,
                                    minSize: 75,
                                    children: i.jsx(_.x, {
                                        className: "relative",
                                        style: {
                                            height: "var(--container-height)"
                                        },
                                        children: (0, i.jsxs)("main", {
                                            children: [i.jsx("div", {
                                                className: "relative z-10",
                                                ref: x,
                                                children: O((0, l.createElement)(e, {
                                                    ...s,
                                                    key: t.route
                                                }))
                                            }), (0, i.jsxs)("div", {
                                                className: "pointer-events-none absolute top-0 z-10 -ml-48 mt-40 flex h-[2px] w-96 rotate-90",
                                                children: [i.jsx("div", {
                                                    className: "gradient w-full flex-none blur-sm"
                                                }), i.jsx("div", {
                                                    className: "gradient ml-[-100%] w-full flex-none blur-[1px]"
                                                }), i.jsx("div", {
                                                    className: "gradient ml-[-100%] w-full flex-none blur-sm"
                                                }), i.jsx("div", {
                                                    className: "gradient ml-[-100%] w-full flex-none blur-[1px]"
                                                })]
                                            }), i.jsx(C.Z, {
                                                className: "-mt-18 pointer-events-none absolute top-0 z-0 h-auto w-full rotate-180 opacity-30 dark:opacity-60"
                                            })]
                                        })
                                    })
                                })]
                            })
                        }), i.jsx(j.aR, {
                            open: w,
                            onOpenChange: L,
                            children: (0, i.jsxs)(j._T, {
                                children: [(0, i.jsxs)(j.fY, {
                                    children: [i.jsx(j.f$, {
                                        children: d("logout_title")
                                    }), i.jsx(j.yT, {
                                        children: d("logout_description")
                                    })]
                                }), i.jsx(j.xo, {
                                    children: i.jsx(c(), {
                                        href: `/auth/login?redirect=${t.asPath}`,
                                        children: i.jsx(j.OL, {
                                            children: d("logout")
                                        })
                                    })
                                })]
                            })
                        })]
                    }) : null
                };
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    66924: (e, s, t) => {
        "use strict";
        t.d(s, {
            Z: () => i
        });
        var a = t(20997);

        function i(e) {
            return (0, a.jsxs)("svg", {
                width: 1920,
                height: 980,
                viewBox: "0 0 1920 980",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [a.jsx("mask", {
                    id: "mask0_503_4542",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: 0,
                    y: 0,
                    width: 1920,
                    height: 980,
                    children: a.jsx("rect", {
                        width: 1920,
                        height: 980,
                        fill: "#F9FAFB"
                    })
                }), (0, a.jsxs)("g", {
                    mask: "url(#mask0_503_4542)",
                    children: [(0, a.jsxs)("g", {
                        opacity: "0.4",
                        children: [a.jsx("g", {
                            filter: "url(#filter0_f_503_4542)",
                            children: a.jsx("circle", {
                                cx: "1127.7",
                                cy: 1218,
                                r: 311,
                                fill: "#FD10BA"
                            })
                        }), a.jsx("g", {
                            filter: "url(#filter1_f_503_4542)",
                            children: a.jsx("circle", {
                                cx: 792,
                                cy: 1218,
                                r: 311,
                                fill: "#1027F7"
                            })
                        })]
                    }), (0, a.jsxs)("g", {
                        opacity: "0.1",
                        children: [a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-534.004 1202L-534.004 442L-532.796 442L-532.796 1202H-534.004Z",
                            fill: "url(#paint0_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-494.135 1202L-494.135 442L-492.927 442L-492.927 1202H-494.135Z",
                            fill: "url(#paint1_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-454.267 1202L-454.266 442L-453.058 442L-453.058 1202H-454.267Z",
                            fill: "url(#paint2_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-414.398 1202L-414.398 442L-413.189 442L-413.189 1202H-414.398Z",
                            fill: "url(#paint3_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-374.529 1202L-374.529 442L-373.32 442L-373.32 1202H-374.529Z",
                            fill: "url(#paint4_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-334.66 1202L-334.66 442L-333.451 442L-333.451 1202H-334.66Z",
                            fill: "url(#paint5_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-294.791 1202L-294.791 442L-293.583 442L-293.583 1202H-294.791Z",
                            fill: "url(#paint6_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-254.922 1202L-254.922 442L-253.714 442L-253.714 1202H-254.922Z",
                            fill: "url(#paint7_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-215.053 1202L-215.053 442L-213.845 442L-213.845 1202H-215.053Z",
                            fill: "url(#paint8_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-175.184 1202L-175.184 442L-173.976 442L-173.976 1202H-175.184Z",
                            fill: "url(#paint9_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-135.315 1202L-135.315 442L-134.107 442L-134.107 1202H-135.315Z",
                            fill: "url(#paint10_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-95.446 1202L-95.4459 442L-94.2377 442L-94.2378 1202H-95.446Z",
                            fill: "url(#paint11_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-55.577 1202L-55.577 442L-54.3688 442L-54.3689 1202H-55.577Z",
                            fill: "url(#paint12_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-15.7081 1202V442L-14.4999 442V1202H-15.7081Z",
                            fill: "url(#paint13_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24.1609 1202V442L25.3691 442L25.369 1202H24.1609Z",
                            fill: "url(#paint14_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M64.0299 1202V442L65.238 442V1202H64.0299Z",
                            fill: "url(#paint15_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M103.899 1202L103.899 442L105.107 442V1202H103.899Z",
                            fill: "url(#paint16_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M143.768 1202L143.768 442L144.976 442L144.976 1202H143.768Z",
                            fill: "url(#paint17_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M183.637 1202L183.637 442L184.845 442L184.845 1202H183.637Z",
                            fill: "url(#paint18_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M223.505 1202L223.506 442L224.714 442L224.714 1202H223.505Z",
                            fill: "url(#paint19_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M263.374 1202L263.374 442L264.583 442L264.583 1202H263.374Z",
                            fill: "url(#paint20_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M303.243 1202L303.243 442L304.452 442L304.451 1202H303.243Z",
                            fill: "url(#paint21_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M343.112 1202L343.112 442L344.32 442L344.32 1202H343.112Z",
                            fill: "url(#paint22_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M382.981 1202V442L384.189 442V1202H382.981Z",
                            fill: "url(#paint23_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M422.85 1202L422.85 442L424.058 442L424.058 1202H422.85Z",
                            fill: "url(#paint24_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M462.719 1202L462.719 442L463.927 442L463.927 1202H462.719Z",
                            fill: "url(#paint25_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M502.588 1202V442L503.796 442L503.796 1202H502.588Z",
                            fill: "url(#paint26_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M542.457 1202V442L543.665 442V1202H542.457Z",
                            fill: "url(#paint27_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M582.326 1202V442L583.534 442V1202H582.326Z",
                            fill: "url(#paint28_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M622.195 1202V442L623.403 442V1202H622.195Z",
                            fill: "url(#paint29_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M662.064 1202V442L663.272 442V1202H662.064Z",
                            fill: "url(#paint30_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M701.932 1202V442L703.141 442V1202H701.932Z",
                            fill: "url(#paint31_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M741.802 1202V442L743.01 442V1202H741.802Z",
                            fill: "url(#paint32_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M781.67 1202V442L782.879 442V1202H781.67Z",
                            fill: "url(#paint33_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M821.539 1202V442L822.747 442V1202H821.539Z",
                            fill: "url(#paint34_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M861.408 1202V442L862.616 442V1202H861.408Z",
                            fill: "url(#paint35_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M901.277 1202V442L902.485 442V1202H901.277Z",
                            fill: "url(#paint36_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M941.146 1202V442L942.354 442V1202H941.146Z",
                            fill: "url(#paint37_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M981.015 1202V442L982.223 442V1202H981.015Z",
                            fill: "url(#paint38_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1020.88 1202V442L1022.09 442V1202H1020.88Z",
                            fill: "url(#paint39_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1060.75 1202V442L1061.96 442V1202H1060.75Z",
                            fill: "url(#paint40_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 1180.29H-563V1179.08H1088.54V1180.29Z",
                            fill: "url(#paint41_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 1140.48H-563V1139.27H1088.54V1140.48Z",
                            fill: "url(#paint42_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 1100.67H-563V1099.46H1088.54V1100.67Z",
                            fill: "url(#paint43_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 1060.86H-563V1059.65H1088.54V1060.86Z",
                            fill: "url(#paint44_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 1021.05H-563V1019.84H1088.54V1021.05Z",
                            fill: "url(#paint45_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 981.239H-563V980.032H1088.54V981.239Z",
                            fill: "url(#paint46_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 941.429H-563V940.223H1088.54V941.429Z",
                            fill: "url(#paint47_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 901.62H-563V900.413H1088.54V901.62Z",
                            fill: "url(#paint48_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 861.81H-563V860.604H1088.54V861.81Z",
                            fill: "url(#paint49_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 822H-563V820.794H1088.54V822Z",
                            fill: "url(#paint50_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 782.19H-563V780.984H1088.54V782.19Z",
                            fill: "url(#paint51_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 742.381H-563V741.175H1088.54V742.381Z",
                            fill: "url(#paint52_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 702.571H-563V701.365H1088.54V702.571Z",
                            fill: "url(#paint53_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 662.762H-563V661.556H1088.54V662.762Z",
                            fill: "url(#paint54_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 622.952H-563V621.746H1088.54V622.952Z",
                            fill: "url(#paint55_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 583.143H-563V581.937H1088.54V583.143Z",
                            fill: "url(#paint56_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 543.333H-563V542.127H1088.54V543.333Z",
                            fill: "url(#paint57_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 503.524H-563V502.317H1088.54V503.524Z",
                            fill: "url(#paint58_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1088.54 463.714H-563V462.507H1088.54V463.714Z",
                            fill: "url(#paint59_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M861.336 1202V442L862.544 442V1202H861.336Z",
                            fill: "url(#paint60_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M901.205 1202L901.205 442L902.413 442L902.413 1202H901.205Z",
                            fill: "url(#paint61_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M941.074 1202V442L942.282 442V1202H941.074Z",
                            fill: "url(#paint62_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M980.943 1202V442L982.151 442V1202H980.943Z",
                            fill: "url(#paint63_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1020.81 1202V442L1022.02 442L1022.02 1202H1020.81Z",
                            fill: "url(#paint64_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1060.68 1202V442L1061.89 442V1202H1060.68Z",
                            fill: "url(#paint65_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1100.55 1202L1100.55 442L1101.76 442L1101.76 1202H1100.55Z",
                            fill: "url(#paint66_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1140.42 1202L1140.42 442L1141.63 442L1141.63 1202H1140.42Z",
                            fill: "url(#paint67_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1180.29 1202V442L1181.5 442V1202H1180.29Z",
                            fill: "url(#paint68_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1220.16 1202V442L1221.36 442V1202H1220.16Z",
                            fill: "url(#paint69_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1260.03 1202L1260.03 442L1261.23 442L1261.23 1202H1260.03Z",
                            fill: "url(#paint70_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1299.89 1202V442L1301.1 442V1202H1299.89Z",
                            fill: "url(#paint71_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1339.76 1202V442L1340.97 442V1202H1339.76Z",
                            fill: "url(#paint72_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1379.63 1202V442L1380.84 442V1202H1379.63Z",
                            fill: "url(#paint73_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1419.5 1202V442L1420.71 442V1202H1419.5Z",
                            fill: "url(#paint74_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1459.37 1202V442L1460.58 442V1202H1459.37Z",
                            fill: "url(#paint75_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1499.24 1202V442L1500.45 442V1202H1499.24Z",
                            fill: "url(#paint76_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1539.11 1202V442L1540.32 442V1202H1539.11Z",
                            fill: "url(#paint77_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1578.98 1202L1578.98 442L1580.19 442V1202H1578.98Z",
                            fill: "url(#paint78_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1618.85 1202L1618.85 442L1620.05 442L1620.05 1202H1618.85Z",
                            fill: "url(#paint79_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1658.71 1202L1658.71 442L1659.92 442L1659.92 1202H1658.71Z",
                            fill: "url(#paint80_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1698.58 1202V442L1699.79 442V1202H1698.58Z",
                            fill: "url(#paint81_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1738.45 1202V442L1739.66 442V1202H1738.45Z",
                            fill: "url(#paint82_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1778.32 1202V442L1779.53 442V1202H1778.32Z",
                            fill: "url(#paint83_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1818.19 1202V442L1819.4 442V1202H1818.19Z",
                            fill: "url(#paint84_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1858.06 1202V442L1859.27 442V1202H1858.06Z",
                            fill: "url(#paint85_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1897.93 1202L1897.93 442L1899.14 442L1899.14 1202H1897.93Z",
                            fill: "url(#paint86_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1937.8 1202L1937.8 442L1939.01 442L1939.01 1202H1937.8Z",
                            fill: "url(#paint87_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1977.67 1202V442L1978.87 442V1202H1977.67Z",
                            fill: "url(#paint88_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2017.54 1202V442L2018.74 442V1202H2017.54Z",
                            fill: "url(#paint89_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2057.4 1202V442L2058.61 442V1202H2057.4Z",
                            fill: "url(#paint90_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2097.27 1202V442L2098.48 442V1202H2097.27Z",
                            fill: "url(#paint91_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2137.14 1202V442L2138.35 442V1202H2137.14Z",
                            fill: "url(#paint92_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2177.01 1202V442L2178.22 442V1202H2177.01Z",
                            fill: "url(#paint93_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2216.88 1202V442L2218.09 442V1202H2216.88Z",
                            fill: "url(#paint94_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2256.75 1202V442L2257.96 442V1202H2256.75Z",
                            fill: "url(#paint95_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2296.62 1202V442L2297.83 442V1202H2296.62Z",
                            fill: "url(#paint96_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2336.49 1202V442L2337.69 442V1202H2336.49Z",
                            fill: "url(#paint97_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2376.36 1202V442L2377.56 442V1202H2376.36Z",
                            fill: "url(#paint98_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2416.22 1202V442L2417.43 442V1202H2416.22Z",
                            fill: "url(#paint99_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2456.09 1202V442L2457.3 442V1202H2456.09Z",
                            fill: "url(#paint100_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 1180.29H832.34V1179.08H2483.88V1180.29Z",
                            fill: "url(#paint101_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 1140.48H832.34V1139.27H2483.88V1140.48Z",
                            fill: "url(#paint102_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 1100.67H832.34V1099.46H2483.88V1100.67Z",
                            fill: "url(#paint103_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 1060.86H832.34V1059.65H2483.88V1060.86Z",
                            fill: "url(#paint104_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 1021.05H832.34V1019.84H2483.88V1021.05Z",
                            fill: "url(#paint105_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 981.239H832.34V980.032H2483.88V981.239Z",
                            fill: "url(#paint106_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 941.429H832.34V940.223H2483.88V941.429Z",
                            fill: "url(#paint107_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 901.62H832.34V900.413H2483.88V901.62Z",
                            fill: "url(#paint108_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 861.81H832.34V860.604H2483.88V861.81Z",
                            fill: "url(#paint109_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 822H832.34V820.794H2483.88V822Z",
                            fill: "url(#paint110_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 782.19H832.34V780.984H2483.88V782.19Z",
                            fill: "url(#paint111_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 742.381H832.34V741.175H2483.88V742.381Z",
                            fill: "url(#paint112_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 702.571H832.34V701.365H2483.88V702.571Z",
                            fill: "url(#paint113_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 662.762H832.34V661.556H2483.88V662.762Z",
                            fill: "url(#paint114_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 622.952H832.34V621.746H2483.88V622.952Z",
                            fill: "url(#paint115_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 583.143H832.34V581.937H2483.88V583.143Z",
                            fill: "url(#paint116_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 543.333H832.34V542.127H2483.88V543.333Z",
                            fill: "url(#paint117_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 503.524H832.34V502.317H2483.88V503.524Z",
                            fill: "url(#paint118_linear_503_4542)"
                        }), a.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2483.88 463.714H832.34V462.507H2483.88V463.714Z",
                            fill: "url(#paint119_linear_503_4542)"
                        })]
                    })]
                }), (0, a.jsxs)("defs", {
                    children: [(0, a.jsxs)("filter", {
                        id: "filter0_f_503_4542",
                        x: "416.704",
                        y: 507,
                        width: 1422,
                        height: 1422,
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [a.jsx("feFlood", {
                            floodOpacity: 0,
                            result: "BackgroundImageFix"
                        }), a.jsx("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }), a.jsx("feGaussianBlur", {
                            stdDeviation: 200,
                            result: "effect1_foregroundBlur_503_4542"
                        })]
                    }), (0, a.jsxs)("filter", {
                        id: "filter1_f_503_4542",
                        x: 81,
                        y: 507,
                        width: 1422,
                        height: 1422,
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [a.jsx("feFlood", {
                            floodOpacity: 0,
                            result: "BackgroundImageFix"
                        }), a.jsx("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }), a.jsx("feGaussianBlur", {
                            stdDeviation: 200,
                            result: "effect1_foregroundBlur_503_4542"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint0_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint1_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint2_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint3_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint4_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint5_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint6_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint7_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint8_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint9_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint10_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint11_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint12_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint13_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint14_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint15_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint16_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint17_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint18_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint19_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint20_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint21_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint22_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint23_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint24_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint25_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint26_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint27_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint28_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint29_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint30_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint31_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint32_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint33_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint34_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint35_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint36_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint37_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint38_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint39_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint40_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint41_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint42_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint43_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint44_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint45_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint46_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint47_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint48_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint49_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint50_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint51_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint52_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint53_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint54_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint55_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint56_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint57_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint58_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint59_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint60_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint61_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint62_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint63_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint64_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint65_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint66_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint67_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint68_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint69_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint70_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint71_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint72_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint73_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint74_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint75_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint76_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint77_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint78_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint79_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint80_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint81_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint82_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint83_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint84_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint85_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint86_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint87_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint88_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint89_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint90_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint91_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint92_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint93_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint94_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint95_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint96_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint97_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint98_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint99_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint100_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint101_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint102_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint103_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint104_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint105_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint106_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint107_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint108_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint109_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint110_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint111_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint112_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint113_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint114_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint115_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint116_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint117_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint118_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    }), (0, a.jsxs)("linearGradient", {
                        id: "paint119_linear_503_4542",
                        x1: "960.44",
                        y1: "402.5",
                        x2: "960.44",
                        y2: 825,
                        gradientUnits: "userSpaceOnUse",
                        children: [a.jsx("stop", {
                            stopColor: "#949494",
                            stopOpacity: 0
                        }), a.jsx("stop", {
                            offset: 1,
                            stopColor: "#8F8F8F"
                        })]
                    })]
                })]
            })
        }
    },
    59331: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => h
                });
                var i = t(20997),
                    l = t(96463),
                    n = t(60907),
                    r = t(87764),
                    o = t(11163),
                    d = t(16689),
                    c = t(57987),
                    p = t(48367),
                    x = t(18532),
                    u = t(35037),
                    f = t(91782),
                    m = e([l, n, c, p, u]);
                [l, n, c, p, u] = m.then ? (await m)() : m;
                let j = (e, s, t) => {
                    t({}), s(!0), l.dJ.post("/search", {
                        query: e
                    }).then(e => {
                        s(!1), t(e.data)
                    })
                };

                function h() {
                    let e = (0, o.useRouter)(),
                        {
                            t: s
                        } = (0, c.useTranslation)("common"),
                        [t, a] = (0, d.useState)(!1),
                        [l, m] = (0, d.useState)(""),
                        [h, _] = (0, d.useState)(!1),
                        [y, g] = (0, d.useState)({});
                    (0, d.useEffect)(() => {
                        j("", _, g);
                        let e = e => {
                            setTimeout(() => {
                                "k" === e.key && e.metaKey && a(e => !e)
                            }, 200)
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }, []);
                    let v = (0, x.N)(e => {
                        j(e, _, g)
                    }, 500);
                    return (0, d.useEffect)(() => {
                        _(!0), g({})
                    }, [l]), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("div", {
                            className: "relative hidden px-2 md:block lg:w-[500px]",
                            onClick: () => a(!0),
                            children: [i.jsx(u.I, {
                                type: "text",
                                placeholder: s("command_menu.search")
                            }), (0, i.jsxs)("kbd", {
                                className: "pointer-events-none absolute right-11 top-[11px] inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
                                children: [i.jsx("span", {
                                    className: "text-xs",
                                    children: "⌘"
                                }), "K"]
                            }), i.jsx(r.Z, {
                                className: "absolute right-5 top-3 size-4"
                            })]
                        }), (0, i.jsxs)(p.m5, {
                            open: t,
                            onOpenChange: a,
                            shouldFilter: !1,
                            children: [i.jsx(p.sZ, {
                                placeholder: s("command_menu.search_placeholder"),
                                value: l,
                                onValueChange: e => {
                                    v(e), m(e)
                                }
                            }), (0, i.jsxs)(p.e8, {
                                children: [h && i.jsx(n.CommandLoading, {
                                    children: i.jsx("div", {
                                        className: "flex h-[200px] w-full items-center justify-center",
                                        children: i.jsx(f.Z, {})
                                    })
                                }), 0 === Object.keys(y).length && !h && i.jsx(p.rb, {
                                    children: s("command_menu.no_results")
                                }), Object.keys(y).map((s, t) => i.jsx(p.fu, {
                                    heading: s,
                                    children: y[s].map(s => i.jsx(p.di, {
                                        value: s.name + t,
                                        onSelect: () => {
                                            e.push(s.url), window.dispatchEvent(new CustomEvent("liman:extension-reload")), m(""), v(""), a(!1)
                                        },
                                        children: s.name
                                    }, s.name))
                                }, s + 1))]
                            })]
                        })]
                    })
                }
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    93036: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => j
                });
                var i = t(20997),
                    l = t(25854),
                    n = t(64998),
                    r = t(41664),
                    o = t.n(r),
                    d = t(11163),
                    c = t(16689),
                    p = t(57987),
                    x = t(87249),
                    u = t(32676),
                    f = t(84737),
                    m = e([p, x, u, f]);

                function h({
                    extension: e,
                    disabled: s,
                    isCollapsed: t,
                    onClick: a
                }) {
                    var r;
                    let o = (r = e.display_name).length > 25 ? r.slice(0, 24) + "..." : r;
                    return i.jsx(x.z, {
                        variant: t ? "ghost" : "secondary",
                        size: "sm",
                        className: (0, u.cn)("relative w-full justify-start", !t && e.menus.length > 0 && "mb-1"),
                        disabled: s,
                        onClick: () => a,
                        asChild: !0,
                        children: (0, i.jsxs)("div", {
                            className: (0, u.cn)(s ? "pointer-events-none cursor-not-allowed opacity-50" : "opacity-100"),
                            children: [(0, i.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [i.jsx("div", {
                                    className: "flex w-[18px] items-center justify-center",
                                    children: e.icon ? i.jsx("i", {
                                        className: `fa-solid fa-${e.icon} fa-fw`
                                    }) : i.jsx(l.Z, {
                                        className: "size-4"
                                    })
                                }), i.jsx("span", {
                                    children: o
                                })]
                            }), e.menus && e.menus.length > 0 && i.jsx(n.Z, {
                                className: (0, u.cn)("absolute right-3 size-4 transition-transform", !t && "rotate-90")
                            })]
                        })
                    })
                }

                function j({
                    extension: e,
                    server_id: s,
                    disabled: t
                }) {
                    let a = (0, d.useRouter)(),
                        [l, n] = (0, c.useState)("");
                    (0, c.useEffect)(() => (window && window.addEventListener("hashchange", () => {
                        n(window.location.hash)
                    }), () => {
                        window && window.removeEventListener("hashchange", () => {
                            n(window.location.hash)
                        })
                    }), []), (0, c.useEffect)(() => {
                        a.asPath.includes(e.id) && n(window.location.hash)
                    }, [e.id, a.asPath]);
                    let r = !a.asPath.includes(e.id) || !a.asPath.includes(s) || a.asPath.includes(`${s}/settings/${e.id}`),
                        p = e => {
                            t ? e.preventDefault() : n("")
                        };
                    return (0, i.jsxs)(f.zF, {
                        open: a.asPath.includes(e.id),
                        children: [i.jsx(f.wy, {
                            className: "w-full",
                            children: i.jsx(o(), {
                                href: `/servers/${s}/extensions/${e.id}${e.menus&&e.menus.length>0?e.menus[0].url:""}`,
                                onClick: p,
                                children: i.jsx(h, {
                                    extension: e,
                                    disabled: t,
                                    isCollapsed: r,
                                    onClick: p
                                })
                            })
                        }), i.jsx(f.Fw, {
                            className: "animated-collapsible",
                            children: a.asPath.includes(e.id) && a.asPath.includes(s) && !a.asPath.includes(`${s}/settings/${e.id}`) && e.menus && e.menus.length > 0 && i.jsx("div", {
                                className: "mb-1 flex flex-col gap-y-[3px] rounded-md border p-1",
                                children: e.menus.map(e => i.jsx(_, {
                                    menu: e,
                                    hash: l
                                }, e.url))
                            })
                        })]
                    })
                } [p, x, u, f] = m.then ? (await m)() : m;
                let _ = ({
                    menu: e,
                    hash: s
                }) => {
                    let {
                        i18n: t
                    } = (0, p.useTranslation)(), [a, l] = (0, c.useState)(!0);
                    return (0, c.useEffect)(() => {
                        l(!s.includes(e.url))
                    }, [s, e.url]), (0, i.jsxs)("div", {
                        children: [!e.children && i.jsx("a", {
                            href: e.url,
                            children: (0, i.jsxs)(x.z, {
                                variant: s.includes(e.url) ? "secondary" : "ghost",
                                size: "sm",
                                className: "relative w-full justify-start",
                                children: [e.icon && i.jsx("div", {
                                    className: "fa-sm mr-1 flex w-[18px] items-center justify-center",
                                    children: i.jsx("i", {
                                        className: `${e.icon} fa-fw`
                                    })
                                }), e.name instanceof String ? e.name : e.name[t.language] || e.name.tr || e.name]
                            })
                        }, e.url), e.children && e.children.length > 0 && (0, i.jsxs)(f.zF, {
                            open: !a,
                            children: [i.jsx(f.wy, {
                                className: "w-full",
                                children: (0, i.jsxs)(x.z, {
                                    variant: a ? "ghost" : "secondary",
                                    size: "sm",
                                    className: "relative flex w-full justify-between",
                                    onClick: () => {
                                        l(!a)
                                    },
                                    children: [(0, i.jsxs)("div", {
                                        className: "flex",
                                        children: [e.icon && i.jsx("div", {
                                            className: "fa-sm mr-1 flex w-[18px] items-center justify-center",
                                            children: i.jsx("i", {
                                                className: `${e.icon} fa-fw`
                                            })
                                        }), e.name instanceof String ? e.name : e.name[t.language] || e.name.tr || e.name]
                                    }), i.jsx(n.Z, {
                                        className: (0, u.cn)("size-4 transition-transform", !a && "rotate-90")
                                    })]
                                })
                            }), i.jsx(f.Fw, {
                                className: "animated-collapsible",
                                children: i.jsx("div", {
                                    className: "my-1 flex flex-col gap-y-[3px] rounded-md border p-1",
                                    children: e.children.map(e => i.jsx(_, {
                                        menu: e,
                                        hash: s
                                    }, e.url))
                                })
                            })]
                        })]
                    })
                };
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    66390: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => c
                });
                var i = t(20997),
                    l = t(62519),
                    n = t(67564),
                    r = t(16689),
                    o = t(87249),
                    d = e([o]);
                o = (d.then ? (await d)() : d)[0];
                let c = () => {
                    let [e, s] = (0, r.useState)(!1);
                    return i.jsx("div", {
                        className: (0, o.d)({
                            size: "sm",
                            variant: "ghost"
                        }),
                        onClick: () => {
                            document.fullscreenElement ? document.exitFullscreen && (document.exitFullscreen(), s(!1)) : (document.documentElement.requestFullscreen(), s(!0))
                        },
                        children: e ? i.jsx(n.Z, {
                            className: "size-5"
                        }) : i.jsx(l.Z, {
                            className: "size-5"
                        })
                    })
                };
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    8240: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => p
                });
                var i = t(20997),
                    l = t(96463),
                    n = t(5209),
                    r = t(57987),
                    o = t(87249),
                    d = t(87776),
                    c = e([l, r, o, d]);
                [l, r, o, d] = c.then ? (await c)() : c;
                let x = (e, s) => {
                        window.localStorage.setItem("LANGUAGE", s), e.changeLanguage(s), l.dJ.post("/locale", {
                            locale: s
                        }).catch(() => {})
                    },
                    u = [{
                        code: "tr",
                        name: "T\xfcrk\xe7e"
                    }, {
                        code: "en",
                        name: "English"
                    }, {
                        code: "de",
                        name: "Deutsch"
                    }];

                function p() {
                    let {
                        t: e,
                        i18n: s
                    } = (0, r.useTranslation)("common");
                    return (0, i.jsxs)(d.h_, {
                        children: [i.jsx(d.$F, {
                            asChild: !0,
                            children: (0, i.jsxs)("div", {
                                className: (0, o.d)({
                                    size: "sm",
                                    variant: "ghost"
                                }),
                                children: [i.jsx(n.Z, {
                                    className: "size-5"
                                }), i.jsx("span", {
                                    className: "sr-only",
                                    children: "Localization"
                                })]
                            })
                        }), (0, i.jsxs)(d.AW, {
                            className: "w-56",
                            children: [i.jsx(d.Ju, {
                                children: e("language_selector.title")
                            }), i.jsx(d.VD, {}), u.map(e => i.jsx(d.bO, {
                                checked: s.language === e.code,
                                onClick: () => x(s, e.code),
                                children: e.name
                            }, e.code))]
                        })]
                    })
                }
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    36022: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => y
                });
                var i = t(20997),
                    l = t(23175),
                    n = t.n(l),
                    r = t(8971),
                    o = t(94933),
                    d = t(78051),
                    c = t(11163),
                    p = t(57987),
                    x = t(87249),
                    u = t(19681),
                    f = t(2088),
                    m = t(32676),
                    h = t(29229),
                    j = t(87776),
                    _ = e([p, x, u, f, m, h, j]);

                function y() {
                    let e = (0, c.useRouter)(),
                        {
                            t: s,
                            i18n: t
                        } = (0, p.useTranslation)("common"),
                        a = (0, u.x)(),
                        {
                            logout: l
                        } = (0, f.a)();
                    return (0, i.jsxs)(j.h_, {
                        children: [i.jsx(j.$F, {
                            asChild: !0,
                            children: (0, i.jsxs)("div", {
                                className: (0, m.cn)((0, x.d)({
                                    size: "sm",
                                    variant: "ghost"
                                }), "flex h-9 items-center gap-2"),
                                children: [(0, i.jsxs)(h.qE, {
                                    className: "size-6",
                                    children: [i.jsx(h.F$, {
                                        src: `https://gravatar.com/avatar/${n()(a.email)}?d=404`,
                                        alt: a.name
                                    }), i.jsx(h.Q5, {
                                        className: "text-xs",
                                        children: Object.keys(a).length > 0 && (a.name ?? "").split(" ").map(e => e[0]).join("")
                                    })]
                                }), a.name || "", i.jsx(r.Z, {
                                    className: "size-3 text-muted-foreground"
                                })]
                            })
                        }), (0, i.jsxs)(j.AW, {
                            className: "mr-5 w-[420px]",
                            children: [Object.keys(a).length > 0 && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)(j.Ju, {
                                    children: [a.name, i.jsx("br", {}), i.jsx("span", {
                                        className: "text-xs text-slate-400",
                                        children: a.email
                                    })]
                                }), i.jsx(j.VD, {}), (0, i.jsxs)("div", {
                                    className: "flex",
                                    children: [i.jsx("div", {
                                        className: "avatar mr-2 p-2",
                                        children: (0, i.jsxs)(h.qE, {
                                            className: "size-12",
                                            children: [i.jsx(h.F$, {
                                                src: `https://gravatar.com/avatar/${n()(a.email)}?d=404`,
                                                alt: a.name
                                            }), i.jsx(h.Q5, {
                                                children: a && a.name[0]
                                            })]
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "my-2 flex flex-col gap-[6px]",
                                        children: [(0, i.jsxs)("div", {
                                            className: "text-sm",
                                            children: [(0, i.jsxs)("span", {
                                                className: "font-semibold",
                                                children: [s("profile_dropdown.last_login_at"), ":", " "]
                                            }), " ", new Date(a.last_login_at).toLocaleDateString(t.language, {
                                                day: "2-digit",
                                                month: "long",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "text-sm",
                                            children: [(0, i.jsxs)("span", {
                                                className: "font-semibold",
                                                children: [s("profile_dropdown.last_login_ip"), ":", " "]
                                            }), " ", a.last_login_ip]
                                        })]
                                    })]
                                })]
                            }), i.jsx(j.VD, {}), (0, i.jsxs)("div", {
                                className: "flex gap-1",
                                children: [(0, i.jsxs)(x.z, {
                                    className: "w-full",
                                    variant: "ghost",
                                    onClick: () => e.push("/settings/profile"),
                                    children: [i.jsx(o.Z, {
                                        className: "mr-2 size-4"
                                    }), " ", s("profile_dropdown.profile")]
                                }), (0, i.jsxs)(x.z, {
                                    className: "w-full",
                                    variant: "secondary",
                                    onClick: () => {
                                        l().then(() => {
                                            e.replace("/auth/login?redirect=" + e.asPath)
                                        })
                                    },
                                    children: [i.jsx(d.Z, {
                                        className: "mr-2 size-4"
                                    }), " ", s("profile_dropdown.logout")]
                                })]
                            })]
                        })]
                    })
                } [p, x, u, f, m, h, j] = _.then ? (await _)() : _, a()
            } catch (e) {
                a(e)
            }
        })
    },
    68150: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => x
                });
                var i = t(20997),
                    l = t(41664),
                    n = t.n(l),
                    r = t(11163);
                t(16689);
                var o = t(32676),
                    d = t(87249),
                    c = t(87776),
                    p = e([o, d, c]);

                function x({
                    link: e,
                    exact: s,
                    children: t,
                    classNames: a,
                    disabled: l
                }) {
                    let c = (0, r.useRouter)();
                    return i.jsx(n(), {
                        href: e,
                        onClick: e => {
                            l && e.preventDefault()
                        },
                        children: i.jsx(d.z, {
                            variant: (s ? c.asPath === e : c.asPath.includes(e)) ? "secondary" : "ghost",
                            size: "sm",
                            className: (0, o.cn)("mb-1 w-full justify-start", a),
                            disabled: l,
                            children: t
                        })
                    })
                } [o, d, c] = p.then ? (await p)() : p, a()
            } catch (e) {
                a(e)
            }
        })
    },
    90709: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => p
                });
                var i = t(20997),
                    l = t(41664),
                    n = t.n(l),
                    r = t(11163),
                    o = t(32676),
                    d = t(87249),
                    c = e([o, d]);

                function p(e) {
                    let s = (0, r.useRouter)();
                    return i.jsx(n(), {
                        href: e.href,
                        children: (0, i.jsxs)(d.z, {
                            variant: (e.exact ? s.asPath === e.href : s.asPath.includes(e.href)) ? "secondary" : "ghost",
                            size: "sm",
                            className: (0, o.cn)("mb-1 w-full justify-start gap-2", e.classNames),
                            children: [i.jsx(e.icon, {
                                className: "size-4"
                            }), e.title]
                        })
                    })
                } [o, d] = c.then ? (await c)() : c, a()
            } catch (e) {
                a(e)
            }
        })
    },
    83275: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => V
                });
                var i = t(20997),
                    l = t(56660),
                    n = t(96463),
                    r = t(99648),
                    o = t(6249),
                    d = t(9560),
                    c = t(19858),
                    p = t(25854),
                    x = t(64998),
                    u = t(1910),
                    f = t(24958),
                    m = t(81427),
                    h = t(49525),
                    j = t(76952),
                    _ = t(78884),
                    y = t(41664),
                    g = t.n(y),
                    v = t(16689),
                    C = t(57987),
                    F = t(19681),
                    b = t(32676),
                    N = t(87249),
                    w = t(84737),
                    L = t(61206),
                    R = t(32561),
                    O = t(26331),
                    U = t(93036),
                    S = t(68150),
                    Z = e([l, n, r, C, F, b, N, w, R, O, U, S]);

                function V() {
                    let {
                        selected: e,
                        selectedData: s,
                        setSelectedData: t,
                        selectedLoading: a,
                        setSelectedLoading: y
                    } = (0, l.S)(), Z = (0, F.x)(), {
                        t: V
                    } = (0, C.useTranslation)("common"), [k, z] = (0, v.useState)(!0), [M, H] = (0, v.useState)(!0), G = (0, v.useRef)(void 0);
                    (0, v.useEffect)(() => (G.current && G.current.cancel(), G.current = r.default.CancelToken.source(), y(!0), n.dJ.get(`/menu/servers/${e}`, {
                        cancelToken: G.current.token
                    }).then(e => {
                        t(e.data), y(!1)
                    }).catch(e => {
                        r.default.isCancel(e) || console.error(e)
                    }), () => {
                        G.current && G.current.cancel()
                    }), [e, t, y]);
                    let T = (0, v.useCallback)(e => {
                            n.dJ.post(`/servers/${e}/favorites`).then(() => {
                                t(e => ({
                                    ...e,
                                    is_favorite: !e.is_favorite
                                }))
                            })
                        }, [t]),
                        A = (0, v.useCallback)(() => !(s.is_online && s.can_run_command), [s]),
                        E = () => {
                            H(!M)
                        };
                    (0, v.useEffect)(() => {
                        z("true" == localStorage.getItem("serverSettingsCollapsed"))
                    }, []);
                    let P = [{
                        link: `/servers/${e}/users/local`,
                        name: V("sidebar.user_management.local_users"),
                        exact: !0
                    }, {
                        link: `/servers/${e}/users/groups`,
                        name: V("sidebar.user_management.local_groups"),
                        exact: !0
                    }, {
                        link: `/servers/${e}/users/sudoers`,
                        name: V("sidebar.user_management.sudoers"),
                        exact: !0,
                        disabled: "windows" === s.os
                    }];
                    return i.jsx(i.Fragment, {
                        children: a ? (0, i.jsxs)("div", {
                            children: [(0, i.jsxs)("div", {
                                className: "relative mb-3 flex px-2",
                                children: [i.jsx(R.O, {
                                    className: "size-8 rounded"
                                }), (0, i.jsxs)("div", {
                                    className: "pl-3",
                                    children: [i.jsx("h2", {
                                        className: "text-lg font-semibold tracking-tight",
                                        children: i.jsx(R.O, {
                                            className: "h-6 w-36 rounded"
                                        })
                                    }), i.jsx("span", {
                                        className: "text-xs text-slate-500",
                                        children: i.jsx(R.O, {
                                            className: "mt-1 h-3 w-24 rounded"
                                        })
                                    })]
                                }), i.jsx(R.O, {
                                    className: "absolute right-0 top-0 size-4 rounded-full"
                                })]
                            }), i.jsx("div", {
                                className: "space-y-1 p-2",
                                children: [...Array(8)].map((e, s) => i.jsx(R.O, {
                                    className: "h-9 w-full rounded-full"
                                }, s))
                            }), i.jsx("h2", {
                                className: "mb-2 mt-5 px-2 text-lg font-semibold tracking-tight",
                                children: V("sidebar.extensions")
                            }), i.jsx("div", {
                                className: "space-y-1 p-2",
                                children: [void 0, void 0, void 0].map((e, s) => i.jsx(R.O, {
                                    className: "h-9 w-full rounded-full"
                                }, s))
                            })]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: "relative mb-3 flex px-2",
                                children: ["linux" === s.os ? i.jsx(L.P.linux, {
                                    className: "size-8"
                                }) : i.jsx(L.P.windows, {
                                    className: "size-8"
                                }), (0, i.jsxs)("div", {
                                    className: "pl-3",
                                    children: [i.jsx("h2", {
                                        className: "-my-1 text-lg font-semibold tracking-tight",
                                        children: s.name
                                    }), i.jsx("span", {
                                        className: "text-xs text-slate-500",
                                        children: s.ip_address
                                    })]
                                }), i.jsx(o.Z, {
                                    className: (0, b.cn)("absolute right-0 top-px size-4", s.is_online ? "text-green-500" : "text-red-500")
                                }), i.jsx(O.pn, {
                                    children: (0, i.jsxs)(O.u, {
                                        delayDuration: 200,
                                        children: [i.jsx(O.aJ, {
                                            asChild: !0,
                                            children: i.jsx(d.Z, {
                                                className: (0, b.cn)("absolute right-0 top-6 size-4", s.is_favorite ? "text-yellow-500" : "text-gray-500"),
                                                onClick: () => T(s.id)
                                            })
                                        }), i.jsx(O._v, {
                                            children: V("sidebar.favorite")
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                children: [Z.permissions.server_details && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsxs)(S.Z, {
                                        link: `/servers/${e}`,
                                        exact: !0,
                                        disabled: A(),
                                        children: [i.jsx(c.Z, {
                                            className: "mr-2 size-4"
                                        }), V("sidebar.system_status")]
                                    }), (0, i.jsxs)(S.Z, {
                                        link: `/servers/${e}/extensions`,
                                        exact: !0,
                                        disabled: !s.is_online,
                                        children: [i.jsx(p.Z, {
                                            className: "mr-2 size-4"
                                        }), V("sidebar.extensions")]
                                    })]
                                }), (Z.permissions.server_services || Z.permissions.server_details || Z.permissions.view_logs) && (0, i.jsxs)(w.zF, {
                                    open: !k,
                                    children: [i.jsx(w.wy, {
                                        className: "mt-3 w-full px-2 text-left",
                                        onClick: () => {
                                            z(!k), localStorage.setItem("serverSettingsCollapsed", (!k).toString())
                                        },
                                        children: (0, i.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [i.jsx("h2", {
                                                className: "text-lg font-semibold tracking-tight",
                                                children: V("sidebar.management")
                                            }), i.jsx(x.Z, {
                                                className: (0, b.cn)("size-4 transition-transform", !k && "rotate-90")
                                            })]
                                        })
                                    }), (0, i.jsxs)(w.Fw, {
                                        className: "animated-collapsible mt-3",
                                        children: [Z.permissions.server_services && (0, i.jsxs)(S.Z, {
                                            link: `/servers/${e}/services`,
                                            disabled: A(),
                                            children: [i.jsx(u.Z, {
                                                className: "mr-2 size-4"
                                            }), V("sidebar.services")]
                                        }), Z.permissions.server_details && (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsxs)(S.Z, {
                                                link: `/servers/${e}/packages`,
                                                disabled: A() || "windows" === s.os,
                                                children: [i.jsx(f.Z, {
                                                    className: "mr-2 size-4"
                                                }), V("sidebar.packages")]
                                            }), (0, i.jsxs)(S.Z, {
                                                link: `/servers/${e}/updates`,
                                                disabled: A() || "windows" === s.os,
                                                children: [i.jsx(m.Z, {
                                                    className: "mr-2 size-4"
                                                }), V("sidebar.updates")]
                                            }), i.jsx("div", {
                                                className: "mb-1",
                                                children: (0, i.jsxs)(w.zF, {
                                                    open: !M,
                                                    onOpenChange: E,
                                                    disabled: A(),
                                                    children: [i.jsx(w.wy, {
                                                        className: "w-full",
                                                        children: (0, i.jsxs)(N.z, {
                                                            variant: M ? "ghost" : "secondary",
                                                            size: "sm",
                                                            className: "relative flex w-full justify-between",
                                                            onClick: E,
                                                            disabled: A(),
                                                            as: A() ? "button" : "div",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "flex items-center",
                                                                children: [i.jsx(h.Z, {
                                                                    className: "mr-2 size-4"
                                                                }), V("sidebar.user_management.title")]
                                                            }), i.jsx(x.Z, {
                                                                className: (0, b.cn)("size-4 transition-transform", !M && "rotate-90")
                                                            })]
                                                        })
                                                    }), i.jsx(w.Fw, {
                                                        className: "animated-collapsible",
                                                        children: i.jsx("div", {
                                                            className: "my-1 flex flex-col gap-y-[3px] rounded-md border p-1",
                                                            children: P.map(e => i.jsx(g(), {
                                                                href: e.link,
                                                                children: i.jsx(N.z, {
                                                                    variant: e.exact ? e.link === window.location.pathname ? "secondary" : "ghost" : window.location.pathname.includes(e.link) ? "secondary" : "ghost",
                                                                    size: "sm",
                                                                    className: "w-full justify-start",
                                                                    disabled: e.disabled,
                                                                    children: e.name
                                                                })
                                                            }, e.link))
                                                        })
                                                    })]
                                                })
                                            }), (0, i.jsxs)(S.Z, {
                                                link: `/servers/${e}/open_ports`,
                                                disabled: A(),
                                                children: [i.jsx(j.Z, {
                                                    className: "mr-2 size-4"
                                                }), V("sidebar.open_ports")]
                                            })]
                                        }), Z.permissions.view_logs && (0, i.jsxs)(S.Z, {
                                            link: `/servers/${e}/access_logs`,
                                            disabled: !s.is_online,
                                            children: [i.jsx(_.Z, {
                                                className: "mr-2 size-4"
                                            }), V("sidebar.access_logs")]
                                        })]
                                    })]
                                })]
                            }), s.extensions && s.extensions.length > 0 && (0, i.jsxs)(i.Fragment, {
                                children: [i.jsx("h2", {
                                    className: "mb-2 mt-5 px-2 text-lg font-semibold tracking-tight",
                                    children: V("sidebar.extensions")
                                }), i.jsx("div", {
                                    className: "space-y-1",
                                    children: s.extensions.map(t => i.jsx(U.Z, {
                                        extension: t,
                                        server_id: e,
                                        disabled: !s.is_online
                                    }, t.id))
                                })]
                            })]
                        })
                    })
                } [l, n, r, C, F, b, N, w, R, O, U, S] = Z.then ? (await Z)() : Z, a()
            } catch (e) {
                a(e)
            }
        })
    },
    42539: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => x
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(47128),
                    r = t(57987),
                    o = t(19681),
                    d = t(73301),
                    c = t(90709),
                    p = e([n, r, o, c]);

                function x() {
                    let e = (0, o.x)(),
                        [s] = (0, n.useAutoAnimate)(),
                        {
                            t
                        } = (0, r.useTranslation)("common");
                    return (0, i.jsxs)(i.Fragment, {
                        children: [i.jsx("h2", {
                            className: "mb-5 px-2 text-lg font-semibold tracking-tight",
                            children: t("sidebar.settings.title")
                        }), i.jsx("h3", {
                            className: "mb-2 px-2 text-base font-semibold tracking-tight",
                            children: t("sidebar.settings.user")
                        }), i.jsx("div", {
                            className: "space-y-1",
                            children: d.Z.user.map(e => (0, l.createElement)(c.Z, {
                                ...e,
                                title: t(`sidebar.settings.${e.id}`),
                                key: e.href
                            }))
                        }), 1 === e.status && (0, i.jsxs)("div", {
                            ref: s,
                            children: [i.jsx("h3", {
                                className: "mb-2 mt-6 px-2 text-base font-semibold tracking-tight",
                                children: t("sidebar.settings.system")
                            }), i.jsx("div", {
                                className: "space-y-1",
                                children: d.Z.system.map(e => (0, l.createElement)(c.Z, {
                                    ...e,
                                    title: t(`sidebar.settings.${e.id}`),
                                    key: e.href
                                }))
                            })]
                        })]
                    })
                } [n, r, o, c] = p.then ? (await p)() : p, a()
            } catch (e) {
                a(e)
            }
        })
    },
    39506: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Y: () => L
                });
                var i = t(20997),
                    l = t(56660),
                    n = t(47128),
                    r = t(40116),
                    o = t(98814),
                    d = t(9560),
                    c = t(64998),
                    p = t(30443),
                    x = t(61749),
                    u = t(41664),
                    f = t.n(u),
                    m = t(16689),
                    h = t(57987),
                    j = t(87249),
                    _ = t(53830),
                    y = t(19681),
                    g = t(32676),
                    v = t(61206),
                    C = t(32561),
                    F = t(93036),
                    b = t(83275),
                    N = t(42539),
                    w = e([l, n, h, j, _, y, g, C, F, b, N]);

                function L({
                    className: e
                }) {
                    let {
                        selected: s,
                        setSelected: t,
                        servers: a,
                        serversLoading: u,
                        collapsed: w,
                        settingsActive: L,
                        refreshServers: R,
                        extensions: O,
                        extensionsLoading: U,
                        refreshExtensions: S
                    } = (0, l.S)(), [Z] = (0, n.useAutoAnimate)(), [V] = (0, n.useAutoAnimate)(), k = (0, y.x)(), {
                        t: z
                    } = (0, h.useTranslation)("common");
                    return ((0, m.useEffect)(() => {
                        "extensions" === k.permissions.view.sidebar ? S() : R()
                    }, [k.permissions.view.sidebar, R, S]), "extensions" === k.permissions.view.sidebar) ? (0, i.jsxs)("div", {
                        className: (0, g.cn)("fixed z-30 w-full shrink-0 overflow-y-auto bg-background md:sticky md:block print:hidden", w && "hidden", !w && "z-40", e),
                        children: [i.jsx(_.x, {
                            style: {
                                height: "calc(var(--container-height) - 65px)"
                            },
                            children: i.jsx("div", {
                                className: "space-y-4 py-4",
                                children: i.jsx("div", {
                                    className: "px-4 py-2",
                                    ref: Z,
                                    children: L ? i.jsx(N.Z, {}) : i.jsx(i.Fragment, {
                                        children: s ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsxs)(j.z, {
                                                variant: "ghost",
                                                size: "sm",
                                                className: "mb-3 w-full justify-start",
                                                onClick: () => t(""),
                                                children: [i.jsx(o.Z, {
                                                    className: "mr-2 size-4"
                                                }), z("sidebar.servers")]
                                            }), i.jsx(b.Z, {})]
                                        }) : (0, i.jsxs)(i.Fragment, {
                                            children: [i.jsx("h2", {
                                                className: "mb-2 px-2 text-lg font-semibold tracking-tight",
                                                children: z("sidebar.extensions")
                                            }), i.jsx("div", {
                                                className: "space-y-1",
                                                ref: V,
                                                children: U ? i.jsx("div", {
                                                    className: "space-y-1 p-2",
                                                    children: [...Array(12)].map((e, s) => i.jsx(C.O, {
                                                        className: "h-9 w-full rounded-full"
                                                    }, s))
                                                }) : (0, i.jsxs)("div", {
                                                    children: [O.map(e => i.jsx(F.Z, {
                                                        extension: e,
                                                        server_id: e.server_id
                                                    }, e.id)), 0 == O.length && (0, i.jsxs)(i.Fragment, {
                                                        children: [i.jsx(r.Z, {
                                                            className: "mx-auto block size-8"
                                                        }), i.jsx("span", {
                                                            className: "block p-2 text-sm font-medium",
                                                            children: z("sidebar.user_message")
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        }), i.jsx("div", {
                            className: "aciklab flex items-center justify-center py-4",
                            children: i.jsx(v.P.aciklab, {
                                className: "h-8 w-48"
                            })
                        })]
                    }) : (0, i.jsxs)("div", {
                        className: (0, g.cn)("fixed z-30 w-full shrink-0 overflow-y-auto bg-background md:sticky md:block print:hidden", w && "hidden", !w && "z-40", e),
                        children: [i.jsx(_.x, {
                            style: {
                                height: "calc(var(--container-height) - 65px)"
                            },
                            children: i.jsx("div", {
                                className: "space-y-4 py-4",
                                children: i.jsx("div", {
                                    className: "px-4 py-2",
                                    ref: Z,
                                    children: L ? i.jsx(N.Z, {}) : i.jsx(i.Fragment, {
                                        children: s ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsxs)(j.z, {
                                                variant: "ghost",
                                                size: "sm",
                                                className: "mb-3 w-full justify-start",
                                                onClick: () => t(""),
                                                children: [i.jsx(o.Z, {
                                                    className: "mr-2 size-4"
                                                }), z("sidebar.servers")]
                                            }), i.jsx(b.Z, {})]
                                        }) : (0, i.jsxs)(i.Fragment, {
                                            children: [i.jsx("h2", {
                                                className: "mb-2 px-2 text-lg font-semibold tracking-tight",
                                                children: z("sidebar.servers")
                                            }), i.jsx("div", {
                                                className: "space-y-1",
                                                ref: V,
                                                children: u ? i.jsx("div", {
                                                    className: "space-y-1 p-2",
                                                    children: [...Array(12)].map((e, s) => i.jsx(C.O, {
                                                        className: "h-9 w-full rounded-full"
                                                    }, s))
                                                }) : (0, i.jsxs)("div", {
                                                    children: [a.map(e => (0, i.jsxs)(j.z, {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        className: "w-full justify-start",
                                                        onClick: () => t(e.id),
                                                        children: ["linux" === e.os ? i.jsx(v.P.linux, {
                                                            className: "mr-2 size-4"
                                                        }) : i.jsx(v.P.windows, {
                                                            className: "mr-2 size-4"
                                                        }), e.name, (0, i.jsxs)("div", {
                                                            className: "ml-auto flex",
                                                            children: [e.is_favorite && i.jsx(d.Z, {
                                                                className: "mr-1 size-4"
                                                            }), i.jsx(c.Z, {
                                                                className: "size-4"
                                                            })]
                                                        })]
                                                    }, e.id)), a.length > 0 ? i.jsx(f(), {
                                                        href: "/servers",
                                                        children: (0, i.jsxs)(j.z, {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            className: "mt-1 w-full justify-start",
                                                            children: [i.jsx(p.Z, {
                                                                className: "mr-2 size-4"
                                                            }), z("sidebar.all_servers")]
                                                        })
                                                    }) : i.jsx(i.Fragment, {
                                                        children: 1 === k.status ? (0, i.jsxs)(i.Fragment, {
                                                            children: [i.jsx(f(), {
                                                                href: "/servers/create",
                                                                children: (0, i.jsxs)(j.z, {
                                                                    variant: "ghost",
                                                                    size: "sm",
                                                                    className: "mb-4 mt-1 w-full justify-start",
                                                                    children: [i.jsx(p.Z, {
                                                                        className: "mr-2 size-4"
                                                                    }), z("sidebar.add_server")]
                                                                })
                                                            }), i.jsx(x.Z, {
                                                                className: "mx-auto block size-8 animate-bounce"
                                                            }), i.jsx("span", {
                                                                className: "block p-3 text-sm font-medium",
                                                                children: z("sidebar.admin_message")
                                                            })]
                                                        }) : (0, i.jsxs)(i.Fragment, {
                                                            children: [i.jsx(r.Z, {
                                                                className: "mx-auto block size-8"
                                                            }), i.jsx("span", {
                                                                className: "block p-2 text-sm font-medium",
                                                                children: z("sidebar.user_message")
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        }), i.jsx("div", {
                            className: "aciklab flex items-center justify-center py-4",
                            children: i.jsx(v.P.aciklab, {
                                className: "h-8 w-48"
                            })
                        })]
                    })
                } [l, n, h, j, _, y, g, C, F, b, N] = w.then ? (await w)() : w, a()
            } catch (e) {
                a(e)
            }
        })
    },
    55369: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    H: () => v
                });
                var i = t(20997),
                    l = t(56660),
                    n = t(77232),
                    r = t(71408),
                    o = t(5152),
                    d = t.n(o),
                    c = t(41664),
                    p = t.n(c),
                    x = t(11163),
                    u = t(76018),
                    f = t(87249),
                    m = t(61206),
                    h = t(59331),
                    j = t(66390),
                    _ = t(8240),
                    y = t(36022),
                    g = e([l, u, f, h, j, _, y]);
                [l, u, f, h, j, _, y] = g.then ? (await g)() : g;
                let C = d()(t.e(8066).then(t.bind(t, 18066)), {
                    loadableGenerated: {
                        modules: ["../components/navigation/site-header.tsx -> ./notifications"]
                    },
                    ssr: !1
                });

                function v() {
                    let e = (0, x.useRouter)(),
                        s = (0, l.S)();
                    return i.jsx("header", {
                        className: "top-0 z-40 w-full border-b bg-background print:hidden",
                        children: (0, i.jsxs)("div", {
                            className: "flex h-16 items-center space-x-4 px-6 sm:justify-between sm:space-x-0 xl:grid xl:grid-cols-3",
                            children: [(0, i.jsxs)("div", {
                                className: "flex",
                                children: [i.jsx("div", {
                                    className: "md:hidden",
                                    children: i.jsx(f.z, {
                                        variant: "ghost",
                                        className: "mr-3 p-0",
                                        onClick: () => s.toggleSidebar(),
                                        children: i.jsx(n.Z, {
                                            className: "size-6"
                                        })
                                    })
                                }), i.jsx(p(), {
                                    href: "/",
                                    className: "flex items-center space-x-2",
                                    onClick: () => s.setSelected(""),
                                    children: i.jsx(m.P.dugumluLogo, {
                                        className: "w-18 h-8 dark:fill-white"
                                    })
                                })]
                            }), i.jsx("div", {
                                className: "flex",
                                children: i.jsx(h.Z, {})
                            }), i.jsx("div", {
                                className: "flex items-center justify-end space-x-4",
                                children: (0, i.jsxs)("nav", {
                                    className: "flex items-center gap-1",
                                    children: [i.jsx(j.Z, {}), i.jsx(u.T, {}), i.jsx(_.Z, {}), i.jsx(C, {}), i.jsx(p(), {
                                        href: "/settings",
                                        children: (0, i.jsxs)("div", {
                                            className: (0, f.d)({
                                                size: "sm",
                                                variant: e.asPath.includes("/settings") ? "secondary" : "ghost"
                                            }),
                                            children: [i.jsx(r.Z, {
                                                className: "size-5"
                                            }), i.jsx("span", {
                                                className: "sr-only",
                                                children: "Settings"
                                            })]
                                        })
                                    }), i.jsx(y.Z, {})]
                                })
                            })]
                        })
                    })
                }
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    76018: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    T: () => d
                });
                var i = t(20997),
                    l = t(51162),
                    n = t(87249),
                    r = t(61206),
                    o = e([n]);

                function d() {
                    let {
                        setTheme: e,
                        theme: s
                    } = (0, l.useTheme)();
                    return (0, i.jsxs)(n.z, {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => e("light" === s ? "dark" : "light"),
                        children: [i.jsx(r.P.sun, {
                            className: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        }), i.jsx(r.P.moon, {
                            className: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        }), i.jsx("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        })]
                    })
                }
                n = (o.then ? (await o)() : o)[0], a()
            } catch (e) {
                a(e)
            }
        })
    },
    917: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    OL: () => y,
                    _T: () => f,
                    aR: () => c,
                    f$: () => j,
                    fY: () => m,
                    le: () => g,
                    vW: () => p,
                    xo: () => h,
                    yT: () => _
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(32131),
                    r = t(32676),
                    o = t(87249),
                    d = e([n, r, o]);
                [n, r, o] = d.then ? (await d)() : d;
                let c = n.Root,
                    p = n.Trigger,
                    x = ({
                        className: e,
                        ...s
                    }) => i.jsx(n.Portal, {
                        className: (0, r.cn)(e),
                        ...s
                    });
                x.displayName = n.Portal.displayName;
                let u = l.forwardRef(({
                    className: e,
                    children: s,
                    ...t
                }, a) => i.jsx(n.Overlay, {
                    className: (0, r.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
                    ...t,
                    ref: a
                }));
                u.displayName = n.Overlay.displayName;
                let f = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => (0, i.jsxs)(x, {
                    children: [i.jsx(u, {}), i.jsx(n.Content, {
                        ref: t,
                        className: (0, r.cn)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", e),
                        style: {
                            wordBreak: "break-word"
                        },
                        ...s
                    })]
                }));
                f.displayName = n.Content.displayName;
                let m = ({
                    className: e,
                    ...s
                }) => i.jsx("div", {
                    className: (0, r.cn)("flex flex-col space-y-2 text-center sm:text-left", e),
                    ...s
                });
                m.displayName = "AlertDialogHeader";
                let h = ({
                    className: e,
                    ...s
                }) => i.jsx("div", {
                    className: (0, r.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
                    ...s
                });
                h.displayName = "AlertDialogFooter";
                let j = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Title, {
                    ref: t,
                    className: (0, r.cn)("text-lg font-semibold", e),
                    ...s
                }));
                j.displayName = n.Title.displayName;
                let _ = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Description, {
                    ref: t,
                    className: (0, r.cn)("text-sm text-muted-foreground", e),
                    ...s
                }));
                _.displayName = n.Description.displayName;
                let y = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Action, {
                    ref: t,
                    className: (0, r.cn)((0, o.d)(), e),
                    ...s
                }));
                y.displayName = n.Action.displayName;
                let g = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Cancel, {
                    ref: t,
                    className: (0, r.cn)((0, o.d)({
                        variant: "outline"
                    }), "mt-2 sm:mt-0", e),
                    ...s
                }));
                g.displayName = n.Cancel.displayName, a()
            } catch (e) {
                a(e)
            }
        })
    },
    29229: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    F$: () => c,
                    Q5: () => p,
                    qE: () => d
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(25458),
                    r = t(32676),
                    o = e([n, r]);
                [n, r] = o.then ? (await o)() : o;
                let d = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Root, {
                    ref: t,
                    className: (0, r.cn)("relative flex size-10 shrink-0 overflow-hidden rounded-full", e),
                    ...s
                }));
                d.displayName = n.Root.displayName;
                let c = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Image, {
                    ref: t,
                    className: (0, r.cn)("aspect-square size-full", e),
                    ...s
                }));
                c.displayName = n.Image.displayName;
                let p = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Fallback, {
                    ref: t,
                    className: (0, r.cn)("flex size-full items-center justify-center rounded-full bg-muted", e),
                    ...s
                }));
                p.displayName = n.Fallback.displayName, a()
            } catch (e) {
                a(e)
            }
        })
    },
    87249: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    d: () => c,
                    z: () => p
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(14338),
                    r = t(16926),
                    o = t(32676),
                    d = e([n, r, o]);
                [n, r, o] = d.then ? (await d)() : d;
                let c = (0, r.cva)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
                        variants: {
                            variant: {
                                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                                ghost: "hover:bg-accent hover:text-accent-foreground",
                                link: "text-primary underline-offset-4 hover:underline"
                            },
                            size: {
                                default: "h-10 px-4 py-2",
                                sm: "h-9 rounded-md px-3",
                                lg: "h-11 rounded-md px-8",
                                icon: "h-10 w-10"
                            }
                        },
                        defaultVariants: {
                            variant: "default",
                            size: "default"
                        }
                    }),
                    p = l.forwardRef(({
                        className: e,
                        variant: s,
                        size: t,
                        asChild: a = !1,
                        as: l,
                        ...r
                    }, d) => {
                        let p = l || (a ? n.Slot : "button");
                        return i.jsx(p, {
                            className: (0, o.cn)(c({
                                variant: s,
                                size: t,
                                className: e
                            })),
                            ref: d,
                            ...r
                        })
                    });
                p.displayName = "Button", a()
            } catch (e) {
                a(e)
            }
        })
    },
    84737: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Fw: () => o,
                    wy: () => r,
                    zF: () => n
                });
                var i = t(74973),
                    l = e([i]);
                let n = (i = (l.then ? (await l)() : l)[0]).Root,
                    r = i.CollapsibleTrigger,
                    o = i.CollapsibleContent;
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    48367: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    di: () => _,
                    e8: () => m,
                    fu: () => j,
                    m5: () => u,
                    mY: () => x,
                    rb: () => h,
                    sZ: () => f
                });
                var i = t(20997),
                    l = t(60907),
                    n = t(87764),
                    r = t(16689),
                    o = t(37622),
                    d = t(32676),
                    c = t(53830),
                    p = e([l, o, d, c]);
                [l, o, d, c] = p.then ? (await p)() : p;
                let x = r.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(l.Command, {
                    ref: t,
                    className: (0, d.cn)("flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
                    ...s
                }));
                x.displayName = l.Command.displayName;
                let u = ({
                        children: e,
                        shouldFilter: s,
                        ...t
                    }) => i.jsx(o.Vq, {
                        ...t,
                        children: i.jsx(o.cZ, {
                            className: "overflow-hidden p-0 shadow-lg",
                            children: i.jsx(x, {
                                shouldFilter: s,
                                className: "rounded-none [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5",
                                children: e
                            })
                        })
                    }),
                    f = r.forwardRef(({
                        className: e,
                        ...s
                    }, t) => (0, i.jsxs)("div", {
                        className: "flex items-center border-b px-3",
                        "cmdk-input-wrapper": "",
                        children: [i.jsx(n.Z, {
                            className: "mr-2 size-4 shrink-0 opacity-50"
                        }), i.jsx(l.Command.Input, {
                            ref: t,
                            className: (0, d.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
                            ...s
                        })]
                    }));
                f.displayName = l.Command.Input.displayName;
                let m = r.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(c.x, {
                    className: "max-h-[300px]",
                    children: i.jsx(l.Command.List, {
                        ref: t,
                        className: (0, d.cn)("overflow-y-auto overflow-x-hidden", e),
                        ...s
                    })
                }));
                m.displayName = l.Command.List.displayName;
                let h = r.forwardRef((e, s) => i.jsx(l.Command.Empty, {
                    ref: s,
                    className: "py-6 text-center text-sm",
                    ...e
                }));
                h.displayName = l.Command.Empty.displayName;
                let j = r.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(l.Command.Group, {
                    ref: t,
                    className: (0, d.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
                    ...s
                }));
                j.displayName = l.Command.Group.displayName, r.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(l.Command.Separator, {
                    ref: t,
                    className: (0, d.cn)("-mx-1 h-px bg-border", e),
                    ...s
                })).displayName = l.Command.Separator.displayName;
                let _ = r.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(l.Command.Item, {
                    ref: t,
                    className: (0, d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled='true']:pointer-events-none data-[disabled='true']:opacity-50", e),
                    ...s
                }));
                _.displayName = l.Command.Item.displayName, a()
            } catch (e) {
                a(e)
            }
        })
    },
    37622: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    $N: () => j,
                    Be: () => _,
                    Vq: () => c,
                    cN: () => h,
                    cZ: () => f,
                    fK: () => m,
                    hg: () => p
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(77715),
                    r = t(41352),
                    o = t(32676),
                    d = e([n, o]);
                [n, o] = d.then ? (await d)() : d;
                let c = n.Root,
                    p = n.Trigger,
                    x = ({
                        className: e,
                        ...s
                    }) => i.jsx(n.Portal, {
                        className: (0, o.cn)(e),
                        ...s
                    });
                x.displayName = n.Portal.displayName;
                let u = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Overlay, {
                    ref: t,
                    className: (0, o.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
                    ...s
                }));
                u.displayName = n.Overlay.displayName;
                let f = l.forwardRef(({
                    className: e,
                    children: s,
                    ...t
                }, a) => (0, i.jsxs)(x, {
                    children: [i.jsx(u, {}), (0, i.jsxs)(n.Content, {
                        ref: a,
                        className: (0, o.cn)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", e),
                        ...t,
                        children: [s, (0, i.jsxs)(n.Close, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [i.jsx(r.Z, {
                                className: "size-4"
                            }), i.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                }));
                f.displayName = n.Content.displayName;
                let m = ({
                    className: e,
                    ...s
                }) => i.jsx("div", {
                    className: (0, o.cn)("flex flex-col space-y-1.5 text-center sm:text-left", e),
                    ...s
                });
                m.displayName = "DialogHeader";
                let h = ({
                    className: e,
                    ...s
                }) => i.jsx("div", {
                    className: (0, o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
                    ...s
                });
                h.displayName = "DialogFooter";
                let j = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Title, {
                    ref: t,
                    className: (0, o.cn)("text-lg font-semibold leading-none tracking-tight", e),
                    ...s
                }));
                j.displayName = n.Title.displayName;
                let _ = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Description, {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", e),
                    ...s
                }));
                _.displayName = n.Description.displayName, a()
            } catch (e) {
                a(e)
            }
        })
    },
    87776: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    $F: () => u,
                    AW: () => f,
                    Ju: () => j,
                    VD: () => _,
                    Xi: () => m,
                    bO: () => h,
                    h_: () => x
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(31481),
                    r = t(64998),
                    o = t(13742),
                    d = t(50316),
                    c = t(32676),
                    p = e([n, c]);
                [n, c] = p.then ? (await p)() : p;
                let x = n.Root,
                    u = n.Trigger;
                n.Group, n.Portal, n.Sub, n.RadioGroup, l.forwardRef(({
                    className: e,
                    inset: s,
                    children: t,
                    ...a
                }, l) => (0, i.jsxs)(n.SubTrigger, {
                    ref: l,
                    className: (0, c.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", s && "pl-8", e),
                    ...a,
                    children: [t, i.jsx(r.Z, {
                        className: "ml-auto size-4"
                    })]
                })).displayName = n.SubTrigger.displayName, l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.SubContent, {
                    ref: t,
                    className: (0, c.cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
                    ...s
                })).displayName = n.SubContent.displayName;
                let f = l.forwardRef(({
                    className: e,
                    sideOffset: s = 4,
                    ...t
                }, a) => i.jsx(n.Portal, {
                    children: i.jsx(n.Content, {
                        ref: a,
                        sideOffset: s,
                        className: (0, c.cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
                        ...t
                    })
                }));
                f.displayName = n.Content.displayName;
                let m = l.forwardRef(({
                    className: e,
                    inset: s,
                    ...t
                }, a) => i.jsx(n.Item, {
                    ref: a,
                    className: (0, c.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s && "pl-8", e),
                    ...t
                }));
                m.displayName = n.Item.displayName;
                let h = l.forwardRef(({
                    className: e,
                    children: s,
                    checked: t,
                    ...a
                }, l) => (0, i.jsxs)(n.CheckboxItem, {
                    ref: l,
                    className: (0, c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
                    checked: t,
                    ...a,
                    children: [i.jsx("span", {
                        className: "absolute left-2 flex size-3.5 items-center justify-center",
                        children: i.jsx(n.ItemIndicator, {
                            children: i.jsx(o.Z, {
                                className: "size-4"
                            })
                        })
                    }), s]
                }));
                h.displayName = n.CheckboxItem.displayName, l.forwardRef(({
                    className: e,
                    children: s,
                    ...t
                }, a) => (0, i.jsxs)(n.RadioItem, {
                    ref: a,
                    className: (0, c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
                    ...t,
                    children: [i.jsx("span", {
                        className: "absolute left-2 flex size-3.5 items-center justify-center",
                        children: i.jsx(n.ItemIndicator, {
                            children: i.jsx(d.Z, {
                                className: "size-2 fill-current"
                            })
                        })
                    }), s]
                })).displayName = n.RadioItem.displayName;
                let j = l.forwardRef(({
                    className: e,
                    inset: s,
                    ...t
                }, a) => i.jsx(n.Label, {
                    ref: a,
                    className: (0, c.cn)("px-2 py-1.5 text-sm font-semibold", s && "pl-8", e),
                    ...t
                }));
                j.displayName = n.Label.displayName;
                let _ = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Separator, {
                    ref: t,
                    className: (0, c.cn)("-mx-1 my-1 h-px bg-muted", e),
                    ...s
                }));
                _.displayName = n.Separator.displayName, a()
            } catch (e) {
                a(e)
            }
        })
    },
    61206: (e, s, t) => {
        "use strict";
        t.d(s, {
            P: () => o
        });
        var a = t(20997),
            i = t(77227),
            l = t(90250),
            n = t(54778),
            r = t(36316);
        let o = {
            sun: i.Z,
            moon: l.Z,
            twitter: n.Z,
            spinner: r.Z,
            logo: e => a.jsx("svg", {
                id: "svg",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                width: 400,
                height: "54.18326693227091",
                viewBox: "0, 0, 400,54.18326693227091",
                ...e,
                children: a.jsx("g", {
                    id: "svgg",
                    children: a.jsx("path", {
                        id: "path0",
                        d: [
                            " M1429.000000,1201.000000   C952.666687,1201.000000 476.833344,1201.000000 1.000000,1201.000000   C1.000000,801.000000 1.000000,401.000000 1.000000,1.000000   C801.000000,1.000000 1601.000000,1.000000 2401.000000,1.000000   C2401.000000,401.000000 2401.000000,801.000000 2401.000000,1201.000000   C2077.166748,1201.000000 1753.333374,1201.000000 1429.000000,1201.000000  M1021.835022,620.624329   C1010.628357,592.876038 1005.883667,563.916260 1006.092957,534.124329   C1006.154419,525.373962 1007.206421,516.619934 1008.021729,507.887848   C1009.569885,491.305481 1013.057495,475.062836 1019.356995,459.688385   C1023.216003,450.270264 1025.450195,441.050507 1025.148071,430.805786   C1024.617920,412.823273 1025.000854,394.813873 1024.999756,376.815735   C1024.999268,370.004425 1024.997314,370.000580 1018.352295,370.000549   C695.385742,369.999939 372.419189,369.999908 49.452656,370.000793   C43.005798,370.000793 43.000938,370.006195 43.000881,376.511353   C42.999886,492.999298 43.000038,609.487244 43.000450,725.975159   C43.000477,732.997314 43.002468,732.999634 49.938988,732.999634   C239.086060,733.000061 428.233124,733.000000 617.380188,733.000000   C751.033020,733.000000 884.685852,733.000183 1018.338684,732.999451   C1024.997192,732.999390 1024.999512,732.995667 1024.999634,726.197815   C1025.000488,695.201050 1025.101562,664.203491 1024.874023,633.208374   C1024.844849,629.243713 1023.100525,625.291687 1021.835022,620.624329  M1764.500000,680.036926   C1776.254517,680.036926 1788.009155,680.036926 1800.240479,680.036926   C1800.240479,644.779236 1800.240479,610.222229 1800.240479,575.370605   C1810.375000,575.370605 1820.026123,575.544800 1829.665039,575.276917   C1833.073364,575.182129 1834.608276,576.430908 1836.024414,579.365906   C1851.560303,611.564270 1867.295898,643.666382 1882.789917,675.884705   C1884.327637,679.082397 1886.028931,680.133850 1889.518677,680.118286   C1920.850464,679.978882 1952.183105,680.036926 1983.515503,680.036926   C1984.904541,680.036926 1986.293701,680.036926 1988.311401,680.036926   C1966.868286,639.657837 1945.842163,600.064148 1924.692993,560.238647   C1925.763550,559.712646 1926.468384,559.314453 1927.211304,559.008911   C1958.196045,546.263062 1976.121582,523.208618 1979.397339,489.967621   C1982.208740,461.439087 1973.979004,436.140747 1952.170166,416.505768   C1932.796753,399.063385 1909.116577,393.325775 1883.789795,393.260895   C1826.958618,393.115326 1770.126709,393.215271 1713.295166,393.215271   C1711.670288,393.215271 1710.045288,393.215271 1708.223389,393.215271   C1708.223389,489.058655 1708.223389,584.420654 1708.223389,680.036926   C1726.874390,680.036926 1745.187256,680.036926 1764.500000,680.036926  M1445.535522,677.984924   C1482.719116,687.301025 1520.113525,687.966370 1557.287476,678.821594   C1605.138672,667.050232 1637.922729,638.328613 1651.558594,590.118774   C1660.222168,559.488098 1660.592285,528.203613 1654.787720,497.058746   C1645.591187,447.715424 1617.533325,413.682098 1569.468262,398.133972   C1526.338257,384.182220 1482.397339,384.252136 1439.123657,397.421570   C1396.026123,410.537354 1367.602173,439.283875 1355.436279,483.042755   C1347.325439,512.216003 1346.928955,541.951477 1351.392334,571.716003   C1354.924316,595.270020 1363.112183,617.083313 1378.296509,635.838928   C1395.695801,657.330139 1418.514893,670.277527 1445.535522,677.984924  M2088.500000,680.037720   C2153.107178,680.037720 2217.714600,680.037720 2282.376465,680.037720   C2282.376465,656.801147 2282.376465,634.098816 2282.376465,610.942993   C2229.395508,610.942993 2176.822510,610.942993 2124.358398,610.942993   C2124.358398,596.262695 2124.358398,582.043457 2124.358398,567.327026   C2168.802490,567.327026 2212.864502,567.327026 2256.905273,567.327026   C2256.905273,545.236572 2256.905273,523.653503 2256.905273,501.600586   C2212.508789,501.600586 2168.429199,501.600586 2124.274414,501.600586   C2124.274414,488.222351 2124.274414,475.319305 2124.274414,461.849792   C2176.275879,461.849792 2227.980469,461.849792 2279.531738,461.849792   C2279.531738,438.706787 2279.531738,416.135193 2279.531738,393.462036   C2196.916016,393.462036 2114.661377,393.462036 2032.224121,393.462036   C2032.224121,489.068817 2032.224121,584.427429 2032.224121,680.037720   C2050.875977,680.037720 2069.187988,680.037720 2088.500000,680.037720  M1300.461182,563.836670   C1275.868408,563.836670 1251.275635,563.836670 1226.441650,563.836670   C1226.328857,565.618469 1226.249023,566.756470 1226.186035,567.895386   C1224.631592,596.022827 1210.535278,612.140991 1182.670288,615.516541   C1152.669678,619.150879 1127.905151,609.846252 1121.086792,571.170410   C1116.966553,547.799805 1117.324951,523.975159 1121.207397,500.534882   C1125.567627,474.210297 1140.526855,460.046906 1166.292603,457.468079   C1193.880005,454.706940 1214.856201,466.347992 1221.588989,494.073700   C1222.909180,499.510071 1223.142456,505.210419 1223.890381,510.891541   C1252.990356,510.891541 1282.047485,510.891541 1311.103149,510.891541   C1311.103149,507.584991 1311.203735,504.606720 1311.088013,501.636810   C1309.089233,450.309814 1281.319458,412.696075 1232.395508,397.058044   C1192.254395,384.227325 1151.548218,384.967102 1111.400024,397.095245   C1070.285400,409.515320 1043.783691,437.357697 1032.287476,478.555695   C1021.696411,516.509583 1021.654480,554.963989 1031.845947,593.056274   C1043.574463,636.893616 1071.887329,665.017761 1115.381470,677.602295   C1142.951294,685.579407 1171.188110,686.604431 1199.568726,683.667480   C1222.143555,681.331177 1243.746704,675.505432 1263.027222,662.994812   C1298.861450,639.742920 1311.125244,604.984131 1311.374390,563.836670   C1307.718262,563.836670 1304.581177,563.836670 1300.461182,563.836670  M1900.334473,687.995850   C1896.353271,687.995850 1892.371948,687.995850 1888.418823,687.995850   C1886.563965,693.822266 1884.801392,699.358643 1882.838013,705.526001   C1880.878174,699.154114 1879.199585,693.696533 1877.516235,688.223755   C1872.304565,688.223755 1867.376465,688.223755 1862.253662,688.223755   C1862.253662,699.507812 1862.253662,710.561462 1862.253662,721.710083   C1865.910400,721.710083 1869.301758,721.710083 1872.945801,721.710083   C1872.945801,717.143250 1872.945801,712.863586 1872.945801,708.583984   C1873.129517,708.554199 1873.313232,708.524414 1873.496948,708.494629   C1874.790649,712.917358 1876.084473,717.340027 1877.449341,722.005554   C1878.492188,722.005554 1879.517456,721.828735 1880.458984,722.034729   C1885.898315,723.224548 1888.179077,720.509338 1889.032104,715.543945   C1889.555176,712.500122 1890.520020,709.532227 1891.286377,706.530212   C1891.575439,706.586121 1891.864502,706.642090 1892.153564,706.697998   C1892.153564,711.648987 1892.153564,716.599976 1892.153564,721.745117   C1896.166504,721.745117 1899.890015,721.745117 1903.163696,721.745117   C1903.163696,710.903748 1903.193481,700.326355 1903.083740,689.750427   C1903.077759,689.163574 1901.915283,688.588684 1900.334473,687.995850  M2175.005127,703.505310   C2174.461914,701.541626 2173.918701,699.577881 2173.465576,697.939514   C2174.944824,695.896423 2176.527344,693.710693 2178.666504,690.756165   C2173.657471,690.483032 2170.077637,689.281982 2167.576660,693.528137   C2166.943848,694.602661 2164.391113,694.617126 2162.690918,694.978577   C2158.684814,695.830200 2154.433105,696.036682 2150.704102,697.548035   C2146.537354,699.236572 2146.061768,702.870605 2148.294922,706.942566   C2148.859619,707.972229 2149.287842,710.023682 2148.746094,710.556763   C2145.633057,713.620972 2145.382568,716.687317 2148.207031,719.982544   C2147.601318,720.719421 2146.956055,721.162109 2146.821533,721.726501   C2146.207520,724.303833 2144.734131,727.292297 2145.525879,729.397217   C2146.179199,731.133484 2149.506592,732.653992 2151.767090,732.840820   C2157.552002,733.318909 2163.405029,733.106567 2169.226318,732.967834   C2174.423340,732.843872 2178.124512,728.566467 2178.005371,723.144775   C2177.888428,717.819641 2174.864014,715.006592 2169.236572,714.995056   C2166.573975,714.989624 2163.904785,715.107849 2161.251953,714.946350   C2159.897461,714.864014 2158.572998,714.287781 2157.235107,713.934753   C2157.301758,713.291626 2157.368408,712.648560 2157.435303,712.005493   C2160.282471,712.005493 2163.132080,712.078125 2165.976807,711.989746   C2171.266113,711.825439 2173.947266,709.507507 2175.005127,703.505310  M2094.623047,722.005737   C2097.052734,721.450439 2101.209961,721.472656 2101.621094,720.242615   C2103.701416,714.020142 2108.416992,717.846558 2111.736572,717.263916   C2112.924072,717.055481 2114.621582,719.750366 2116.880615,721.863098   C2119.491699,721.863098 2123.455322,721.863098 2128.046631,721.863098   C2123.635986,710.441040 2119.315674,699.252625 2114.968750,687.995361   C2111.287598,687.995361 2107.965820,687.865234 2104.664307,688.068604   C2103.565186,688.136292 2101.881104,688.800110 2101.545166,689.629333   C2097.248047,700.231873 2093.147217,710.914001 2088.829590,722.005798   C2091.091553,722.005798 2092.416016,722.005798 2094.623047,722.005737  M1942.017212,699.865295   C1941.344482,702.527649 1940.381958,705.154541 1940.050537,707.858765   C1938.797119,718.088074 1944.670898,724.110779 1954.739380,722.950378   C1956.729858,722.721008 1958.630981,721.325256 1960.588501,721.289124   C1963.584595,721.233765 1966.593994,721.892395 1969.317017,722.214783   C1969.317017,709.754944 1969.317017,698.066650 1969.317017,686.392456   C1965.579590,686.392456 1962.547241,686.392456 1959.186279,686.392456   C1959.186279,690.076843 1959.186279,693.362671 1959.186279,697.145386   C1952.748169,693.528809 1947.300049,694.669983 1942.017212,699.865295  M1911.262207,697.727905   C1909.941528,699.435364 1908.620850,701.142883 1907.300171,702.850403   C1907.726807,703.494995 1908.153442,704.139526 1908.580078,704.784119   C1912.603516,703.889526 1916.595459,702.722046 1920.667969,702.251038   C1922.059570,702.090027 1923.653320,703.676758 1925.906128,704.859375   C1919.947144,706.111816 1915.364990,706.618286 1911.121948,708.097534   C1907.042847,709.519653 1906.171387,713.615723 1907.212158,717.198792   C1907.860229,719.429443 1910.244141,722.140930 1912.370972,722.720398   C1915.375366,723.538940 1918.860352,722.487793 1922.143555,722.422974   C1924.529541,722.375916 1927.051880,722.184570 1929.286743,722.835449   C1936.319458,724.883423 1940.148071,722.780212 1939.803833,716.571899   C1938.545288,716.151489 1937.256714,715.720947 1936.004761,715.302734   C1936.004761,712.445679 1936.004761,709.946899 1936.004761,707.448181   C1936.004761,698.686829 1933.267822,695.380249 1924.489502,695.158630   C1920.316284,695.053284 1916.103271,696.527039 1911.262207,697.727905  M2269.541992,721.113647   C2272.701660,721.744080 2275.851318,722.761902 2279.025146,722.844543   C2280.656250,722.887085 2283.592285,721.396729 2283.703613,720.359436   C2283.892822,718.592590 2282.318848,716.636719 2281.485596,714.760315   C2279.995361,709.957275 2280.879883,704.056641 2278.673828,699.732788   C2276.124756,694.736328 2269.701416,694.811218 2264.271973,695.007202   C2256.881104,695.273987 2252.196045,698.685669 2252.317871,704.798828   C2256.527100,703.886597 2260.528564,702.731201 2264.607666,702.288818   C2266.069824,702.130249 2267.718750,703.692322 2270.048828,704.849609   C2264.023682,706.107544 2259.444580,706.609802 2255.197754,708.075745   C2250.818359,709.587402 2250.425537,713.819031 2251.132080,717.654663   C2251.784668,721.194031 2254.484863,723.205688 2258.209473,722.956909   C2261.779785,722.718506 2265.323975,722.085083 2269.541992,721.113647  M1975.021729,717.143982   C1980.032837,723.048523 1989.318237,725.090637 1997.468628,721.992615   C2001.840454,720.330811 2004.031494,717.151123 2003.928589,711.994202   C2001.735229,711.994202 1999.749268,711.837952 1997.801025,712.042603   C1996.186279,712.212280 1994.545776,712.637207 1993.045044,713.258728   C1991.307251,713.978333 1989.578247,715.926941 1988.086914,715.706665   C1986.482910,715.469727 1985.159058,713.336182 1983.712891,712.030212   C1983.979492,711.629944 1984.246094,711.229614 1984.512573,710.829285   C1990.936035,710.829285 1997.359497,710.829285 2003.679443,710.829285   C2005.471191,702.663452 2000.571289,695.397217 1990.535400,694.955872   C1981.178223,694.544312 1974.902832,698.245544 1973.420532,706.473389   C1972.859619,709.586548 1974.301636,713.060608 1975.021729,717.143982  M2197.112549,695.010437   C2195.449219,695.014771 2193.770996,694.876831 2192.124756,695.047424   C2184.078613,695.881165 2179.478271,700.582031 2178.997070,708.344604   C2178.550781,715.536499 2182.432373,721.299927 2189.502197,722.663696   C2193.338867,723.403931 2197.563965,723.454834 2201.377197,722.668701   C2206.448242,721.623291 2210.331543,718.794434 2209.474854,711.994263   C2207.370605,711.994263 2205.206299,711.820435 2203.087158,712.055786   C2201.690918,712.210876 2200.316162,712.858887 2199.011475,713.459839   C2197.404053,714.200317 2195.699707,716.012573 2194.363770,715.743103   C2192.618164,715.390991 2191.192627,713.453552 2189.629395,712.198181   C2189.861328,711.788147 2190.093262,711.378174 2190.324951,710.968140   C2196.746094,710.968140 2203.167236,710.968140 2209.526855,710.968140   C2210.748779,701.438293 2207.878418,697.620178 2197.112549,695.010437  M2052.744629,704.831604   C2053.802246,703.843140 2054.859863,702.854675 2056.271729,701.535095   C2061.794922,707.830933 2057.235107,715.304626 2059.541260,721.714233   C2062.897461,721.714233 2066.287598,721.714233 2070.005127,721.714233   C2070.005127,716.461426 2069.527588,711.437683 2070.104248,706.537964   C2071.319092,696.216187 2060.693848,692.291199 2054.087646,696.674561   C2053.212891,697.255005 2051.944336,697.786499 2050.995605,697.608337   C2048.167969,697.076965 2045.408691,696.180908 2042.281128,695.334900   C2042.281128,704.887451 2042.281128,713.284485 2042.281128,721.678955   C2045.634521,721.678955 2048.693604,721.678955 2052.159424,721.678955   C2052.159424,716.050598 2052.159424,710.744507 2052.744629,704.831604  M2136.550049,685.989319   C2134.944580,685.989319 2133.339111,685.989319 2131.365234,685.989319   C2131.365234,698.205139 2131.365234,709.884277 2131.365234,721.757080   C2134.842041,721.757080 2138.222412,721.757080 2141.188965,721.757080   C2141.188965,710.471130 2141.269043,699.439392 2141.029053,688.414551   C2141.010986,687.580872 2138.718506,686.796692 2136.550049,685.989319  M2225.061279,706.887695   C2227.501465,705.571594 2229.941895,704.255432 2233.185303,702.506104   C2232.917725,700.719116 2232.515869,698.036499 2232.114258,695.353943   C2229.171143,695.813599 2226.228027,696.273315 2223.411865,696.713135   C2220.513672,696.421570 2217.491943,696.117554 2214.270996,695.793518   C2214.270996,704.879639 2214.270996,713.269470 2214.270996,721.695435   C2217.611572,721.695435 2220.668701,721.695435 2223.495605,721.695435   C2224.017822,716.824341 2224.504395,712.283752 2225.061279,706.887695  M2036.004761,708.530334   C2036.004761,707.367249 2036.004761,706.204224 2036.004761,705.041138   C2036.004517,695.243103 2035.762329,695.030701 2025.895020,696.232422   C2025.763428,696.248474 2025.652832,696.439026 2025.269043,696.786621   C2025.269043,704.913757 2025.269043,713.279236 2025.269043,721.700684   C2028.934692,721.700684 2032.319702,721.700684 2036.004761,721.700684   C2036.004761,717.438232 2036.004761,713.476868 2036.004761,708.530334  M2236.996826,699.773499   C2236.996826,707.029846 2236.996826,714.286194 2236.996826,721.763489   C2240.816650,721.763489 2244.196533,721.763489 2247.984375,721.763489   C2247.984375,714.271423 2248.125244,707.008484 2247.852539,699.761047   C2247.803955,698.474731 2245.804443,696.073303 2245.098633,696.210266   C2242.354492,696.742676 2238.108154,693.381714 2236.996826,699.773499  M2243.319580,685.976685   C2241.413330,685.976685 2239.506836,685.976685 2237.595215,685.976685   C2237.595215,688.671814 2237.595215,690.705872 2237.595215,692.689453   C2240.976562,692.689453 2243.995850,692.689453 2248.482666,692.689453   C2245.675049,690.400330 2250.205322,685.881592 2243.319580,685.976685  M2033.069702,685.980225   C2030.524536,685.980225 2027.979370,685.980225 2025.507080,685.980225   C2025.507080,688.717163 2025.507080,690.631226 2025.507080,692.781677   C2028.802979,692.781677 2031.838623,692.781677 2035.868896,692.781677   C2035.145386,690.249390 2034.539429,688.128845 2033.069702,685.980225  z",
                            " M1021.992920,620.979065   C1023.100525,625.291687 1024.844849,629.243713 1024.874023,633.208374   C1025.101562,664.203491 1025.000488,695.201050 1024.999634,726.197815   C1024.999512,732.995667 1024.997192,732.999390 1018.338684,732.999451   C884.685852,733.000183 751.033020,733.000000 617.380188,733.000000   C428.233124,733.000000 239.086060,733.000061 49.938988,732.999634   C43.002468,732.999634 43.000477,732.997314 43.000450,725.975159   C43.000038,609.487244 42.999886,492.999298 43.000881,376.511353   C43.000938,370.006195 43.005798,370.000793 49.452656,370.000793   C372.419189,369.999908 695.385742,369.999939 1018.352295,370.000549   C1024.997314,370.000580 1024.999268,370.004425 1024.999756,376.815735   C1025.000854,394.813873 1024.617920,412.823273 1025.148071,430.805786   C1025.450195,441.050507 1023.216003,450.270264 1019.356995,459.688385   C1013.057495,475.062836 1009.569885,491.305481 1008.021729,507.887848   C1007.206421,516.619934 1006.154419,525.373962 1006.092957,534.124329   C1005.883667,563.916260 1010.628357,592.876038 1021.992920,620.979065  M786.567749,544.369141   C792.989136,552.520386 799.204224,560.845764 805.894775,568.769653   C811.612122,575.540894 817.994019,581.746277 823.868469,588.390625   C832.394714,598.034180 840.726868,607.849304 849.146179,617.587402   C851.720581,620.565186 854.370544,623.479858 856.878540,626.512268   C861.835999,632.506409 866.577393,638.684998 871.670837,644.559448   C877.063477,650.778992 882.868347,656.640259 888.283203,662.841431   C891.182251,666.161377 893.155029,670.422791 896.413635,673.263977   C900.879089,677.157288 904.732666,681.560730 912.273499,681.306580   C934.737000,680.549561 957.242432,681.035034 979.731445,681.035034   C981.494995,681.035034 983.258545,681.035034 984.934998,681.035034   C984.934998,585.118835 984.934998,489.898834 984.934998,394.563660   C956.770935,394.563660 928.905151,394.563660 900.598572,394.563660   C900.598572,441.227417 900.598572,487.520966 900.213623,533.809814   C900.213623,533.809814 899.934448,534.074890 899.303894,533.831604   C898.847351,533.350220 898.320251,532.917969 897.945557,532.379578   C895.339417,528.634644 893.046692,524.627075 890.100403,521.175842   C887.201294,517.779907 883.421997,515.145386 880.432861,511.814331   C874.564453,505.274689 868.912476,498.536133 863.323303,491.754395   C862.125977,490.301575 861.918518,487.997681 860.658691,486.638824   C857.728088,483.477844 854.265503,480.810669 851.329346,477.654266   C847.535278,473.575500 844.036743,469.221252 840.430908,464.968719   C839.906799,464.350616 839.519104,463.618866 839.024292,462.973450   C836.421936,459.578888 833.950562,456.069275 831.152771,452.843292   C828.355652,449.618011 825.166809,446.735962 822.263916,443.597778   C820.130554,441.291656 818.098511,438.879639 816.170227,436.399017   C813.545349,433.022186 811.243958,429.379456 808.468079,426.138458   C805.622070,422.815735 802.261169,419.939178 799.325317,416.687073   C795.588928,412.548279 792.045959,408.234497 788.438904,403.979767   C787.914551,403.361298 787.394226,402.701385 787.047302,401.976776   C784.718445,397.112488 781.130920,394.184784 775.509460,394.187561   C751.856506,394.199249 728.203613,394.188019 704.550659,394.203522   C703.105286,394.204468 701.660095,394.363495 700.256775,394.446472   C700.256775,490.164429 700.256775,585.495361 700.256775,680.786621   C728.394104,680.786621 756.155518,680.786621 784.388184,680.786621   C784.388184,678.590759 784.388123,676.637634 784.388123,674.684448   C784.388123,632.875366 784.384338,591.066345 784.401062,549.257263   C784.401794,547.437317 784.591858,545.617493 785.346375,543.949036   C785.569275,543.963379 785.792175,543.977783 786.567749,544.369141  M241.918533,393.090118   C239.591782,393.047241 237.176590,393.396423 234.953293,392.894897   C224.240128,390.478302 213.360123,389.334320 202.444931,389.392548   C190.983261,389.453644 179.486801,389.991882 168.078705,391.085022   C157.150467,392.132172 146.051926,392.660370 135.689514,397.097534   C126.842278,400.885925 117.585976,403.837128 109.047844,408.208069   C77.562462,424.326538 65.383980,451.313965 66.541595,485.546844   C67.282501,507.456573 75.000328,525.998169 92.075020,540.322632   C101.747131,548.436829 112.140274,555.494873 124.295555,558.862732   C148.781784,565.647278 173.521988,571.509949 198.064011,578.100769   C207.819077,580.720459 217.525909,583.770813 226.875244,587.561096   C232.997299,590.043091 236.054886,595.544678 235.513702,602.522217   C234.957520,609.692993 231.098526,614.301819 224.315720,616.203125   C205.301636,621.532898 186.226044,621.877258 167.231110,616.106384   C158.375458,613.416016 152.808090,607.382874 150.824936,598.326782   C149.807480,593.680481 149.256454,588.932068 148.496063,584.238647   C119.703835,584.238647 90.974503,584.238647 61.360722,584.238647   C62.276459,592.867432 62.678150,601.179626 64.111732,609.309937   C68.371124,633.466370 79.639206,653.286072 101.995010,664.955994   C112.148163,670.255920 122.904861,674.766235 133.861526,678.057800   C144.936401,681.384827 156.594345,682.776123 168.003174,684.982788   C170.969223,685.556519 173.961746,686.459045 176.937073,686.439575   C190.709030,686.349609 204.479050,685.979858 218.250092,685.727783   C223.751251,685.627136 229.339798,686.148071 234.731476,685.339111   C240.611008,684.456848 246.274612,682.219543 252.093292,680.827759   C260.194336,678.890137 268.344055,677.269836 275.626312,672.830994   C282.147522,668.856018 289.104706,665.564636 295.452545,661.344421   C305.512573,654.656311 313.188019,645.711121 318.937347,635.003601   C325.910583,622.016724 328.509674,607.957153 329.714996,593.547119   C330.818542,580.353516 329.843750,566.871399 324.066071,555.204224   C313.247894,533.358643 294.575714,519.816223 271.491638,512.556580   C259.980133,508.936432 248.270966,505.924652 236.594574,502.853027   C214.564285,497.057617 191.605850,494.924561 170.562119,485.166534   C159.838806,480.194122 157.391159,467.279755 166.619049,459.904510   C172.652878,455.082031 179.828430,453.326721 187.329071,452.995880   C193.497772,452.723724 199.691711,453.084564 205.870316,452.959869   C213.751755,452.800842 220.433548,455.660004 226.227890,460.757202   C232.707825,466.457550 234.381622,474.294250 235.474152,482.483215   C264.203064,482.483215 292.924591,482.483215 322.169800,482.483215   C321.854462,477.223083 321.602234,472.311310 321.252930,467.406403   C320.956024,463.237518 321.206848,458.875793 320.015869,454.964630   C318.622253,450.387939 315.943787,446.199707 313.796906,441.855743   C308.839569,431.825195 302.023743,423.211548 292.898315,416.784424   C284.954315,411.189423 276.762543,405.809967 268.158112,401.340546   C263.091095,398.708588 256.986633,398.103333 251.387802,396.453949   C248.454208,395.589691 245.604889,394.439453 241.918533,393.090118  M478.429047,607.116272   C468.889221,599.292786 465.144775,588.542542 461.610474,577.094849   C457.317261,563.188965 458.403839,549.215393 457.999817,535.199463   C457.851074,530.039062 458.204346,524.860352 457.959747,519.707458   C457.346863,506.795227 461.589630,494.862976 466.411194,483.419983   C471.165924,472.135559 480.259705,464.426239 492.355072,460.932159   C502.885010,457.890167 513.499512,458.701294 524.247192,459.843140   C541.928284,461.721588 559.216553,480.526062 560.370300,495.731079   C560.783264,501.173218 562.046753,506.550842 562.920471,511.948181   C592.052795,511.948181 620.975037,511.948181 650.689758,511.948181   C650.108643,504.885132 649.738831,498.137634 648.968750,491.436096   C646.183105,467.192871 637.563232,445.578766 620.291138,427.800201   C603.802124,410.827789 583.637817,400.567902 560.947449,394.921783   C550.815308,392.400604 540.564087,390.357910 530.365845,388.102936   C530.208313,388.068115 529.964294,388.022705 529.882568,388.104340   C526.276306,391.705566 522.076111,389.265320 518.131836,389.242401   C496.725037,389.118073 475.441498,390.433624 454.782715,396.439056   C440.571625,400.570190 427.267914,406.730225 414.932617,415.195465   C403.482819,423.053040 394.018188,432.905182 386.836792,444.330994   C372.627350,466.938507 365.424103,492.147308 364.400604,518.828918   C363.734009,536.205872 362.117859,553.725159 366.010773,570.957458   C368.793549,583.275635 371.015808,595.876648 375.384552,607.647583   C384.275848,631.603943 399.094696,651.391357 421.376892,664.744446   C428.296326,668.891052 435.536407,672.671204 443.010223,675.670959   C449.032684,678.088135 455.647369,679.006897 461.964081,680.720337   C467.874237,682.323486 473.644897,684.739929 479.649170,685.610229   C485.333130,686.434082 491.243835,685.820374 497.049500,685.653625   C514.864441,685.141846 532.679199,684.602173 550.488403,683.925049   C554.202271,683.783813 558.005188,683.414978 561.566528,682.427734   C567.065857,680.903442 572.392883,678.756714 577.791992,676.871338   C581.258301,675.661011 584.986145,674.910278 588.129639,673.129211   C593.457764,670.110168 598.478699,666.528625 603.517334,663.023315   C612.957947,656.455627 621.715149,649.211670 628.581055,639.762329   C637.431335,627.581848 643.447876,614.187134 646.755676,599.601685   C649.317261,588.307129 650.613892,576.831360 650.181885,565.217773   C621.646912,565.217773 593.606140,565.217773 565.492126,565.217773   C565.037598,569.488708 564.740234,573.401794 564.187134,577.278442   C562.195923,591.233337 555.868347,602.789001 543.322083,609.550903   C536.952759,612.983521 529.530823,615.046204 522.339355,616.204102   C515.304871,617.336731 507.916290,617.038818 500.760284,616.442749   C492.731354,615.773865 485.427734,612.521423 478.429047,607.116272  z",
                            " M1764.000000,680.036926   C1745.187256,680.036926 1726.874390,680.036926 1708.223389,680.036926   C1708.223389,584.420654 1708.223389,489.058655 1708.223389,393.215271   C1710.045288,393.215271 1711.670288,393.215271 1713.295166,393.215271   C1770.126709,393.215271 1826.958618,393.115326 1883.789795,393.260895   C1909.116577,393.325775 1932.796753,399.063385 1952.170166,416.505768   C1973.979004,436.140747 1982.208740,461.439087 1979.397339,489.967621   C1976.121582,523.208618 1958.196045,546.263062 1927.211304,559.008911   C1926.468384,559.314453 1925.763550,559.712646 1924.692993,560.238647   C1945.842163,600.064148 1966.868286,639.657837 1988.311401,680.036926   C1986.293701,680.036926 1984.904541,680.036926 1983.515503,680.036926   C1952.183105,680.036926 1920.850464,679.978882 1889.518677,680.118286   C1886.028931,680.133850 1884.327637,679.082397 1882.789917,675.884705   C1867.295898,643.666382 1851.560303,611.564270 1836.024414,579.365906   C1834.608276,576.430908 1833.073364,575.182129 1829.665039,575.276917   C1820.026123,575.544800 1810.375000,575.370605 1800.240479,575.370605   C1800.240479,610.222229 1800.240479,644.779236 1800.240479,680.036926   C1788.009155,680.036926 1776.254517,680.036926 1764.000000,680.036926  M1877.896118,465.574493   C1872.727295,460.852325 1866.655518,458.792816 1859.648315,458.844574   C1843.152466,458.966492 1826.655151,458.882599 1810.158447,458.881989   C1806.880005,458.881866 1803.601685,458.881927 1800.187866,458.881927   C1800.187866,476.681091 1800.187866,493.934174 1800.187866,511.476776   C1801.848877,511.566345 1803.305908,511.711975 1804.762817,511.713257   C1822.592529,511.728912 1840.422852,511.648010 1858.251953,511.750000   C1870.086792,511.817688 1879.153931,507.036652 1883.796875,496.092194   C1888.401611,485.237610 1886.802490,474.896515 1877.896118,465.574493  z",
                            " M1445.136108,677.904663   C1418.514893,670.277527 1395.695801,657.330139 1378.296509,635.838928   C1363.112183,617.083313 1354.924316,595.270020 1351.392334,571.716003   C1346.928955,541.951477 1347.325439,512.216003 1355.436279,483.042755   C1367.602173,439.283875 1396.026123,410.537354 1439.123657,397.421570   C1482.397339,384.252136 1526.338257,384.182220 1569.468262,398.133972   C1617.533325,413.682098 1645.591187,447.715424 1654.787720,497.058746   C1660.592285,528.203613 1660.222168,559.488098 1651.558594,590.118774   C1637.922729,638.328613 1605.138672,667.050232 1557.287476,678.821594   C1520.113525,687.966370 1482.719116,687.301025 1445.136108,677.904663  M1443.060547,517.681152   C1443.365234,533.319153 1442.866821,549.025757 1444.196533,564.576111   C1445.572266,580.662842 1452.369141,594.729370 1465.460693,604.946411   C1477.822632,614.593933 1492.333618,616.542480 1507.476440,616.085999   C1535.930298,615.228271 1556.612793,598.403748 1561.906372,570.429138   C1565.926147,549.185547 1565.562500,527.528687 1562.522705,506.276642   C1559.405273,484.480164 1548.129517,467.378601 1525.982788,460.639648   C1517.105957,457.938599 1507.282471,457.165039 1497.942871,457.424561   C1480.337646,457.913696 1465.257080,464.530823 1454.832275,479.621552   C1447.109375,490.800812 1444.074829,503.434631 1443.060547,517.681152  z",
                            " M2088.000000,680.037720   C2069.187988,680.037720 2050.875977,680.037720 2032.224121,680.037720   C2032.224121,584.427429 2032.224121,489.068817 2032.224121,393.462036   C2114.661377,393.462036 2196.916016,393.462036 2279.531738,393.462036   C2279.531738,416.135193 2279.531738,438.706787 2279.531738,461.849792   C2227.980469,461.849792 2176.275879,461.849792 2124.274414,461.849792   C2124.274414,475.319305 2124.274414,488.222351 2124.274414,501.600586   C2168.429199,501.600586 2212.508789,501.600586 2256.905273,501.600586   C2256.905273,523.653503 2256.905273,545.236572 2256.905273,567.327026   C2212.864502,567.327026 2168.802490,567.327026 2124.358398,567.327026   C2124.358398,582.043457 2124.358398,596.262695 2124.358398,610.942993   C2176.822510,610.942993 2229.395508,610.942993 2282.376465,610.942993   C2282.376465,634.098816 2282.376465,656.801147 2282.376465,680.037720   C2217.714600,680.037720 2153.107178,680.037720 2088.000000,680.037720  z",
                            " M1300.952637,563.836670   C1304.581177,563.836670 1307.718262,563.836670 1311.374390,563.836670   C1311.125244,604.984131 1298.861450,639.742920 1263.027222,662.994812   C1243.746704,675.505432 1222.143555,681.331177 1199.568726,683.667480   C1171.188110,686.604431 1142.951294,685.579407 1115.381470,677.602295   C1071.887329,665.017761 1043.574463,636.893616 1031.845947,593.056274   C1021.654480,554.963989 1021.696411,516.509583 1032.287476,478.555695   C1043.783691,437.357697 1070.285400,409.515320 1111.400024,397.095245   C1151.548218,384.967102 1192.254395,384.227325 1232.395508,397.058044   C1281.319458,412.696075 1309.089233,450.309814 1311.088013,501.636810   C1311.203735,504.606720 1311.103149,507.584991 1311.103149,510.891541   C1282.047485,510.891541 1252.990356,510.891541 1223.890381,510.891541   C1223.142456,505.210419 1222.909180,499.510071 1221.588989,494.073700   C1214.856201,466.347992 1193.880005,454.706940 1166.292603,457.468079   C1140.526855,460.046906 1125.567627,474.210297 1121.207397,500.534882   C1117.324951,523.975159 1116.966553,547.799805 1121.086792,571.170410   C1127.905151,609.846252 1152.669678,619.150879 1182.670288,615.516541   C1210.535278,612.140991 1224.631592,596.022827 1226.186035,567.895386   C1226.249023,566.756470 1226.328857,565.618469 1226.441650,563.836670   C1251.275635,563.836670 1275.868408,563.836670 1300.952637,563.836670  z",
                            " M1900.812744,688.002075   C1901.915283,688.588684 1903.077759,689.163574 1903.083740,689.750427   C1903.193481,700.326355 1903.163696,710.903748 1903.163696,721.745117   C1899.890015,721.745117 1896.166504,721.745117 1892.153564,721.745117   C1892.153564,716.599976 1892.153564,711.648987 1892.153564,706.697998   C1891.864502,706.642090 1891.575439,706.586121 1891.286377,706.530212   C1890.520020,709.532227 1889.555176,712.500122 1889.032104,715.543945   C1888.179077,720.509338 1885.898315,723.224548 1880.458984,722.034729   C1879.517456,721.828735 1878.492188,722.005554 1877.449341,722.005554   C1876.084473,717.340027 1874.790649,712.917358 1873.496948,708.494629   C1873.313232,708.524414 1873.129517,708.554199 1872.945801,708.583984   C1872.945801,712.863586 1872.945801,717.143250 1872.945801,721.710083   C1869.301758,721.710083 1865.910400,721.710083 1862.253662,721.710083   C1862.253662,710.561462 1862.253662,699.507812 1862.253662,688.223755   C1867.376465,688.223755 1872.304565,688.223755 1877.516235,688.223755   C1879.199585,693.696533 1880.878174,699.154114 1882.838013,705.526001   C1884.801392,699.358643 1886.563965,693.822266 1888.418823,687.995850   C1892.371948,687.995850 1896.353271,687.995850 1900.812744,688.002075  z",
                            " M2175.004883,703.920776   C2173.947266,709.507507 2171.266113,711.825439 2165.976807,711.989746   C2163.132080,712.078125 2160.282471,712.005493 2157.435303,712.005493   C2157.368408,712.648560 2157.301758,713.291626 2157.235107,713.934753   C2158.572998,714.287781 2159.897461,714.864014 2161.251953,714.946350   C2163.904785,715.107849 2166.573975,714.989624 2169.236572,714.995056   C2174.864014,715.006592 2177.888428,717.819641 2178.005371,723.144775   C2178.124512,728.566467 2174.423340,732.843872 2169.226318,732.967834   C2163.405029,733.106567 2157.552002,733.318909 2151.767090,732.840820   C2149.506592,732.653992 2146.179199,731.133484 2145.525879,729.397217   C2144.734131,727.292297 2146.207520,724.303833 2146.821533,721.726501   C2146.956055,721.162109 2147.601318,720.719421 2148.207031,719.982544   C2145.382568,716.687317 2145.633057,713.620972 2148.746094,710.556763   C2149.287842,710.023682 2148.859619,707.972229 2148.294922,706.942566   C2146.061768,702.870605 2146.537354,699.236572 2150.704102,697.548035   C2154.433105,696.036682 2158.684814,695.830200 2162.690918,694.978577   C2164.391113,694.617126 2166.943848,694.602661 2167.576660,693.528137   C2170.077637,689.281982 2173.657471,690.483032 2178.666504,690.756165   C2176.527344,693.710693 2174.944824,695.896423 2173.465576,697.939514   C2173.918701,699.577881 2174.461914,701.541626 2175.004883,703.920776  M2165.775146,722.315857   C2162.992432,722.220032 2160.199707,721.961792 2157.432617,722.127563   C2156.605713,722.177124 2155.380615,723.316711 2155.212891,724.136353   C2155.083252,724.767273 2156.239502,726.256836 2156.969482,726.362854   C2159.683105,726.756836 2162.474854,726.937500 2165.191650,726.691833   C2165.694336,726.646423 2165.985107,724.252686 2165.775146,722.315857  M2160.581543,700.101868   C2159.904053,702.024475 2159.226807,703.947021 2158.549316,705.869629   C2160.179932,705.852844 2162.489014,706.517944 2163.317139,705.694397   C2166.047852,702.977905 2163.808105,701.348206 2160.581543,700.101868  z",
                            " M2094.181641,722.005737   C2092.416016,722.005798 2091.091553,722.005798 2088.829590,722.005798   C2093.147217,710.914001 2097.248047,700.231873 2101.545166,689.629333   C2101.881104,688.800110 2103.565186,688.136292 2104.664307,688.068604   C2107.965820,687.865234 2111.287598,687.995361 2114.968750,687.995361   C2119.315674,699.252625 2123.635986,710.441040 2128.046631,721.863098   C2123.455322,721.863098 2119.491699,721.863098 2116.880615,721.863098   C2114.621582,719.750366 2112.924072,717.055481 2111.736572,717.263916   C2108.416992,717.846558 2103.701416,714.020142 2101.621094,720.242615   C2101.209961,721.472656 2097.052734,721.450439 2094.181641,722.005737  M2108.570312,709.997742   C2109.304199,709.156921 2110.748535,708.210266 2110.641846,707.494690   C2110.287598,705.115234 2109.375977,702.818909 2108.308105,699.256714   C2107.098877,703.531433 2106.225830,706.617981 2105.269531,709.998962   C2106.444580,709.998962 2107.094971,709.998962 2108.570312,709.997742  z",
                            " M1942.188721,699.508301   C1947.300049,694.669983 1952.748169,693.528809 1959.186279,697.145386   C1959.186279,693.362671 1959.186279,690.076843 1959.186279,686.392456   C1962.547241,686.392456 1965.579590,686.392456 1969.317017,686.392456   C1969.317017,698.066650 1969.317017,709.754944 1969.317017,722.214783   C1966.593994,721.892395 1963.584595,721.233765 1960.588501,721.289124   C1958.630981,721.325256 1956.729858,722.721008 1954.739380,722.950378   C1944.670898,724.110779 1938.797119,718.088074 1940.050537,707.858765   C1940.381958,705.154541 1941.344482,702.527649 1942.188721,699.508301  M1956.053345,715.437622   C1959.199951,712.835571 1960.251831,706.454407 1957.838013,703.717224   C1956.012573,701.647461 1953.850952,701.736572 1952.114868,703.804321   C1949.266357,707.197266 1951.190552,714.017883 1956.053345,715.437622  z",
                            " M1911.585205,697.506653   C1916.103271,696.527039 1920.316284,695.053284 1924.489502,695.158630   C1933.267822,695.380249 1936.004761,698.686829 1936.004761,707.448181   C1936.004761,709.946899 1936.004761,712.445679 1936.004761,715.302734   C1937.256714,715.720947 1938.545288,716.151489 1939.803833,716.571899   C1940.148071,722.780212 1936.319458,724.883423 1929.286743,722.835449   C1927.051880,722.184570 1924.529541,722.375916 1922.143555,722.422974   C1918.860352,722.487793 1915.375366,723.538940 1912.370972,722.720398   C1910.244141,722.140930 1907.860229,719.429443 1907.212158,717.198792   C1906.171387,713.615723 1907.042847,709.519653 1911.121948,708.097534   C1915.364990,706.618286 1919.947144,706.111816 1925.906128,704.859375   C1923.653320,703.676758 1922.059570,702.090027 1920.667969,702.251038   C1916.595459,702.722046 1912.603516,703.889526 1908.580078,704.784119   C1908.153442,704.139526 1907.726807,703.494995 1907.300171,702.850403   C1908.620850,701.142883 1909.941528,699.435364 1911.585205,697.506653  M1918.021484,714.475647   C1918.618408,717.115601 1920.263916,717.836670 1922.287109,716.190186   C1923.619507,715.105774 1924.377808,713.315857 1925.393188,711.841919   C1924.883301,711.414734 1924.373413,710.987549 1923.863403,710.560364   C1921.936035,711.603088 1920.008667,712.645813 1918.021484,714.475647  z",
                            " M2269.210938,721.369385   C2265.323975,722.085083 2261.779785,722.718506 2258.209473,722.956909   C2254.484863,723.205688 2251.784668,721.194031 2251.132080,717.654663   C2250.425537,713.819031 2250.818359,709.587402 2255.197754,708.075745   C2259.444580,706.609802 2264.023682,706.107544 2270.048828,704.849609   C2267.718750,703.692322 2266.069824,702.130249 2264.607666,702.288818   C2260.528564,702.731201 2256.527100,703.886597 2252.317871,704.798828   C2252.196045,698.685669 2256.881104,695.273987 2264.271973,695.007202   C2269.701416,694.811218 2276.124756,694.736328 2278.673828,699.732788   C2280.879883,704.056641 2279.995361,709.957275 2281.485596,714.760315   C2282.318848,716.636719 2283.892822,718.592590 2283.703613,720.359436   C2283.592285,721.396729 2280.656250,722.887085 2279.025146,722.844543   C2275.851318,722.761902 2272.701660,721.744080 2269.210938,721.369385  M2268.984619,712.511719   C2267.087158,712.451965 2265.151367,712.163452 2263.316162,712.472534   C2262.768799,712.564697 2261.901123,714.796997 2262.237305,715.231567   C2262.894531,716.081787 2264.643066,717.058472 2265.317139,716.724731   C2266.752441,716.014038 2267.790039,714.499268 2268.984619,712.511719  z",
                            " M1974.926270,716.757080   C1974.301636,713.060608 1972.859619,709.586548 1973.420532,706.473389   C1974.902832,698.245544 1981.178223,694.544312 1990.535400,694.955872   C2000.571289,695.397217 2005.471191,702.663452 2003.679443,710.829285   C1997.359497,710.829285 1990.936035,710.829285 1984.512573,710.829285   C1984.246094,711.229614 1983.979492,711.629944 1983.712891,712.030212   C1985.159058,713.336182 1986.482910,715.469727 1988.086914,715.706665   C1989.578247,715.926941 1991.307251,713.978333 1993.045044,713.258728   C1994.545776,712.637207 1996.186279,712.212280 1997.801025,712.042603   C1999.749268,711.837952 2001.735229,711.994202 2003.928589,711.994202   C2004.031494,717.151123 2001.840454,720.330811 1997.468628,721.992615   C1989.318237,725.090637 1980.032837,723.048523 1974.926270,716.757080  M1988.597534,702.020020   C1987.116089,703.058594 1985.634644,704.097107 1983.565918,705.547302   C1987.380127,705.547302 1990.130615,705.547302 1992.880981,705.547302   C1992.977295,705.231628 1993.073608,704.916016 1993.169800,704.600342   C1991.900757,703.761230 1990.631592,702.922180 1988.597534,702.020020  z",
                            " M2197.538086,695.064758   C2207.878418,697.620178 2210.748779,701.438293 2209.526855,710.968140   C2203.167236,710.968140 2196.746094,710.968140 2190.324951,710.968140   C2190.093262,711.378174 2189.861328,711.788147 2189.629395,712.198181   C2191.192627,713.453552 2192.618164,715.390991 2194.363770,715.743103   C2195.699707,716.012573 2197.404053,714.200317 2199.011475,713.459839   C2200.316162,712.858887 2201.690918,712.210876 2203.087158,712.055786   C2205.206299,711.820435 2207.370605,711.994263 2209.474854,711.994263   C2210.331543,718.794434 2206.448242,721.623291 2201.377197,722.668701   C2197.563965,723.454834 2193.338867,723.403931 2189.502197,722.663696   C2182.432373,721.299927 2178.550781,715.536499 2178.997070,708.344604   C2179.478271,700.582031 2184.078613,695.881165 2192.124756,695.047424   C2193.770996,694.876831 2195.449219,695.014771 2197.538086,695.064758  M2198.631836,704.171204   C2195.161865,700.923889 2192.518799,701.551636 2190.032959,706.571289   C2193.470703,705.935059 2196.185303,705.432678 2198.631836,704.171204  z",
                            " M2052.452148,705.135010   C2052.159424,710.744507 2052.159424,716.050598 2052.159424,721.678955   C2048.693604,721.678955 2045.634521,721.678955 2042.281128,721.678955   C2042.281128,713.284485 2042.281128,704.887451 2042.281128,695.334900   C2045.408691,696.180908 2048.167969,697.076965 2050.995605,697.608337   C2051.944336,697.786499 2053.212891,697.255005 2054.087646,696.674561   C2060.693848,692.291199 2071.319092,696.216187 2070.104248,706.537964   C2069.527588,711.437683 2070.005127,716.461426 2070.005127,721.714233   C2066.287598,721.714233 2062.897461,721.714233 2059.541260,721.714233   C2057.235107,715.304626 2061.794922,707.830933 2056.271729,701.535095   C2054.859863,702.854675 2053.802246,703.843140 2052.452148,705.135010  z",
                            " M2137.016602,685.989380   C2138.718506,686.796692 2141.010986,687.580872 2141.029053,688.414551   C2141.269043,699.439392 2141.188965,710.471130 2141.188965,721.757080   C2138.222412,721.757080 2134.842041,721.757080 2131.365234,721.757080   C2131.365234,709.884277 2131.365234,698.205139 2131.365234,685.989319   C2133.339111,685.989319 2134.944580,685.989319 2137.016602,685.989380  z",
                            " M2225.026367,707.315430   C2224.504395,712.283752 2224.017822,716.824341 2223.495605,721.695435   C2220.668701,721.695435 2217.611572,721.695435 2214.270996,721.695435   C2214.270996,713.269470 2214.270996,704.879639 2214.270996,695.793518   C2217.491943,696.117554 2220.513672,696.421570 2223.411865,696.713135   C2226.228027,696.273315 2229.171143,695.813599 2232.114258,695.353882   C2232.515869,698.036499 2232.917725,700.719116 2233.185303,702.506104   C2229.941895,704.255432 2227.501465,705.571594 2225.026367,707.315430  z",
                            " M2036.004761,709.022949   C2036.004761,713.476868 2036.004761,717.438232 2036.004761,721.700684   C2032.319702,721.700684 2028.934692,721.700684 2025.269043,721.700684   C2025.269043,713.279236 2025.269043,704.913757 2025.269043,696.786621   C2025.652832,696.439026 2025.763428,696.248474 2025.895020,696.232422   C2035.762329,695.030701 2036.004517,695.243103 2036.004761,705.041138   C2036.004761,706.204224 2036.004761,707.367249 2036.004761,709.022949  z",
                            " M2237.007812,699.305054   C2238.108154,693.381714 2242.354492,696.742676 2245.098633,696.210266   C2245.804443,696.073303 2247.803955,698.474731 2247.852539,699.761047   C2248.125244,707.008484 2247.984375,714.271423 2247.984375,721.763489   C2244.196533,721.763489 2240.816650,721.763489 2236.996826,721.763489   C2236.996826,714.286194 2236.996826,707.029846 2237.007812,699.305054  z",
                            " M2243.761230,685.976868   C2250.205322,685.881592 2245.675049,690.400330 2248.482666,692.689453   C2243.995850,692.689453 2240.976562,692.689453 2237.595215,692.689453   C2237.595215,690.705872 2237.595215,688.671814 2237.595215,685.976685   C2239.506836,685.976685 2241.413330,685.976685 2243.761230,685.976868  z",
                            " M2033.501709,685.994263   C2034.539429,688.128845 2035.145386,690.249390 2035.868896,692.781677   C2031.838623,692.781677 2028.802979,692.781677 2025.507080,692.781677   C2025.507080,690.631226 2025.507080,688.717163 2025.507080,685.980225   C2027.979370,685.980225 2030.524536,685.980225 2033.501709,685.994263  z",
                            " M900.598572,533.814514   C900.598572,487.520966 900.598572,441.227417 900.598572,394.563660   C928.905151,394.563660 956.770935,394.563660 984.934998,394.563660   C984.934998,489.898834 984.934998,585.118835 984.934998,681.035034   C983.258545,681.035034 981.494995,681.035034 979.731445,681.035034   C957.242432,681.035034 934.737000,680.549561 912.273499,681.306580   C904.732666,681.560730 900.879089,677.157288 896.413635,673.263977   C893.155029,670.422791 891.182251,666.161377 888.283203,662.841431   C882.868347,656.640259 877.063477,650.778992 871.670837,644.559448   C866.577393,638.684998 861.835999,632.506409 856.878540,626.512268   C854.370544,623.479858 851.720581,620.565186 849.146179,617.587402   C840.726868,607.849304 832.394714,598.034180 823.868469,588.390625   C817.994019,581.746277 811.612122,575.540894 805.894775,568.769653   C799.204224,560.845764 792.989136,552.520386 786.213562,543.913208   C785.470825,543.570679 785.082275,543.684143 784.693726,543.797607   C784.591858,545.617493 784.401794,547.437317 784.401062,549.257263   C784.384338,591.066345 784.388123,632.875366 784.388123,674.684448   C784.388123,676.637634 784.388184,678.590759 784.388184,680.786621   C756.155518,680.786621 728.394104,680.786621 700.256775,680.786621   C700.256775,585.495361 700.256775,490.164429 700.256775,394.446472   C701.660095,394.363495 703.105286,394.204468 704.550659,394.203522   C728.203613,394.188019 751.856506,394.199249 775.509460,394.187561   C781.130920,394.184784 784.718445,397.112488 787.047302,401.976776   C787.394226,402.701385 787.914551,403.361298 788.438904,403.979767   C792.045959,408.234497 795.588928,412.548279 799.325317,416.687073   C802.261169,419.939178 805.622070,422.815735 808.468079,426.138458   C811.243958,429.379456 813.545349,433.022186 816.170227,436.399017   C818.098511,438.879639 820.130554,441.291656 822.263916,443.597778   C825.166809,446.735962 828.355652,449.618011 831.152771,452.843292   C833.950562,456.069275 836.421936,459.578888 839.024292,462.973450   C839.519104,463.618866 839.906799,464.350616 840.430908,464.968719   C844.036743,469.221252 847.535278,473.575500 851.329346,477.654266   C854.265503,480.810669 857.728088,483.477844 860.658691,486.638824   C861.918518,487.997681 862.125977,490.301575 863.323303,491.754395   C868.912476,498.536133 874.564453,505.274689 880.432861,511.814331   C883.421997,515.145386 887.201294,517.779907 890.100403,521.175842   C893.046692,524.627075 895.339417,528.634644 897.945557,532.379578   C898.320251,532.917969 898.847351,533.350220 899.705933,534.174805   C900.271484,534.283447 900.435059,534.049011 900.598572,533.814514  z",
                            " M242.318024,393.254242   C245.604889,394.439453 248.454208,395.589691 251.387802,396.453949   C256.986633,398.103333 263.091095,398.708588 268.158112,401.340546   C276.762543,405.809967 284.954315,411.189423 292.898315,416.784424   C302.023743,423.211548 308.839569,431.825195 313.796906,441.855743   C315.943787,446.199707 318.622253,450.387939 320.015869,454.964630   C321.206848,458.875793 320.956024,463.237518 321.252930,467.406403   C321.602234,472.311310 321.854462,477.223083 322.169800,482.483215   C292.924591,482.483215 264.203064,482.483215 235.474152,482.483215   C234.381622,474.294250 232.707825,466.457550 226.227890,460.757202   C220.433548,455.660004 213.751755,452.800842 205.870316,452.959869   C199.691711,453.084564 193.497772,452.723724 187.329071,452.995880   C179.828430,453.326721 172.652878,455.082031 166.619049,459.904510   C157.391159,467.279755 159.838806,480.194122 170.562119,485.166534   C191.605850,494.924561 214.564285,497.057617 236.594574,502.853027   C248.270966,505.924652 259.980133,508.936432 271.491638,512.556580   C294.575714,519.816223 313.247894,533.358643 324.066071,555.204224   C329.843750,566.871399 330.818542,580.353516 329.714996,593.547119   C328.509674,607.957153 325.910583,622.016724 318.937347,635.003601   C313.188019,645.711121 305.512573,654.656311 295.452545,661.344421   C289.104706,665.564636 282.147522,668.856018 275.626312,672.830994   C268.344055,677.269836 260.194336,678.890137 252.093292,680.827759   C246.274612,682.219543 240.611008,684.456848 234.731476,685.339111   C229.339798,686.148071 223.751251,685.627136 218.250092,685.727783   C204.479050,685.979858 190.709030,686.349609 176.937073,686.439575   C173.961746,686.459045 170.969223,685.556519 168.003174,684.982788   C156.594345,682.776123 144.936401,681.384827 133.861526,678.057800   C122.904861,674.766235 112.148163,670.255920 101.995010,664.955994   C79.639206,653.286072 68.371124,633.466370 64.111732,609.309937   C62.678150,601.179626 62.276459,592.867432 61.360722,584.238647   C90.974503,584.238647 119.703835,584.238647 148.496063,584.238647   C149.256454,588.932068 149.807480,593.680481 150.824936,598.326782   C152.808090,607.382874 158.375458,613.416016 167.231110,616.106384   C186.226044,621.877258 205.301636,621.532898 224.315720,616.203125   C231.098526,614.301819 234.957520,609.692993 235.513702,602.522217   C236.054886,595.544678 232.997299,590.043091 226.875244,587.561096   C217.525909,583.770813 207.819077,580.720459 198.064011,578.100769   C173.521988,571.509949 148.781784,565.647278 124.295555,558.862732   C112.140274,555.494873 101.747131,548.436829 92.075020,540.322632   C75.000328,525.998169 67.282501,507.456573 66.541595,485.546844   C65.383980,451.313965 77.562462,424.326538 109.047844,408.208069   C117.585976,403.837128 126.842278,400.885925 135.689514,397.097534   C146.051926,392.660370 157.150467,392.132172 168.078705,391.085022   C179.486801,389.991882 190.983261,389.453644 202.444931,389.392548   C213.360123,389.334320 224.240128,390.478302 234.953293,392.894897   C237.176590,393.396423 239.591782,393.047241 242.318024,393.254242  z",
                            " M478.701385,607.345581   C485.427734,612.521423 492.731354,615.773865 500.760284,616.442749   C507.916290,617.038818 515.304871,617.336731 522.339355,616.204102   C529.530823,615.046204 536.952759,612.983521 543.322083,609.550903   C555.868347,602.789001 562.195923,591.233337 564.187134,577.278442   C564.740234,573.401794 565.037598,569.488708 565.492126,565.217773   C593.606140,565.217773 621.646912,565.217773 650.181885,565.217773   C650.613892,576.831360 649.317261,588.307129 646.755676,599.601685   C643.447876,614.187134 637.431335,627.581848 628.581055,639.762329   C621.715149,649.211670 612.957947,656.455627 603.517334,663.023315   C598.478699,666.528625 593.457764,670.110168 588.129639,673.129211   C584.986145,674.910278 581.258301,675.661011 577.791992,676.871338   C572.392883,678.756714 567.065857,680.903442 561.566528,682.427734   C558.005188,683.414978 554.202271,683.783813 550.488403,683.925049   C532.679199,684.602173 514.864441,685.141846 497.049500,685.653625   C491.243835,685.820374 485.333130,686.434082 479.649170,685.610229   C473.644897,684.739929 467.874237,682.323486 461.964081,680.720337   C455.647369,679.006897 449.032684,678.088135 443.010223,675.670959   C435.536407,672.671204 428.296326,668.891052 421.376892,664.744446   C399.094696,651.391357 384.275848,631.603943 375.384552,607.647583   C371.015808,595.876648 368.793549,583.275635 366.010773,570.957458   C362.117859,553.725159 363.734009,536.205872 364.400604,518.828918   C365.424103,492.147308 372.627350,466.938507 386.836792,444.330994   C394.018188,432.905182 403.482819,423.053040 414.932617,415.195465   C427.267914,406.730225 440.571625,400.570190 454.782715,396.439056   C475.441498,390.433624 496.725037,389.118073 518.131836,389.242401   C522.076111,389.265320 526.276306,391.705566 529.882568,388.104340   C529.964294,388.022705 530.208313,388.068115 530.365845,388.102936   C540.564087,390.357910 550.815308,392.400604 560.947449,394.921783   C583.637817,400.567902 603.802124,410.827789 620.291138,427.800201   C637.563232,445.578766 646.183105,467.192871 648.968750,491.436096   C649.738831,498.137634 650.108643,504.885132 650.689758,511.948181   C620.975037,511.948181 592.052795,511.948181 562.920471,511.948181   C562.046753,506.550842 560.783264,501.173218 560.370300,495.731079   C559.216553,480.526062 541.928284,461.721588 524.247192,459.843140   C513.499512,458.701294 502.885010,457.890167 492.355072,460.932159   C480.259705,464.426239 471.165924,472.135559 466.411194,483.419983   C461.589630,494.862976 457.346863,506.795227 457.959747,519.707458   C458.204346,524.860352 457.851074,530.039062 457.999817,535.199463   C458.403839,549.215393 457.317261,563.188965 461.610474,577.094849   C465.144775,588.542542 468.889221,599.292786 478.701385,607.345581  z",
                            " M900.406128,533.812134   C900.435059,534.049011 900.271484,534.283447 900.021240,534.296387   C899.934448,534.074890 900.213623,533.809814 900.406128,533.812134  z",
                            " M785.020020,543.873291   C785.082275,543.684143 785.470825,543.570679 785.937195,543.724670   C785.792175,543.977783 785.569275,543.963379 785.020020,543.873291  z",
                            " M1878.160522,465.820435   C1886.802490,474.896515 1888.401611,485.237610 1883.796875,496.092194   C1879.153931,507.036652 1870.086792,511.817688 1858.251953,511.750000   C1840.422852,511.648010 1822.592529,511.728912 1804.762817,511.713257   C1803.305908,511.711975 1801.848877,511.566345 1800.187866,511.476776   C1800.187866,493.934174 1800.187866,476.681091 1800.187866,458.881927   C1803.601685,458.881927 1806.880005,458.881866 1810.158447,458.881989   C1826.655151,458.882599 1843.152466,458.966492 1859.648315,458.844574   C1866.655518,458.792816 1872.727295,460.852325 1878.160522,465.820435  z",
                            " M1443.075195,517.206116   C1444.074829,503.434631 1447.109375,490.800812 1454.832275,479.621552   C1465.257080,464.530823 1480.337646,457.913696 1497.942871,457.424561   C1507.282471,457.165039 1517.105957,457.938599 1525.982788,460.639648   C1548.129517,467.378601 1559.405273,484.480164 1562.522705,506.276642   C1565.562500,527.528687 1565.926147,549.185547 1561.906372,570.429138   C1556.612793,598.403748 1535.930298,615.228271 1507.476440,616.085999   C1492.333618,616.542480 1477.822632,614.593933 1465.460693,604.946411   C1452.369141,594.729370 1445.572266,580.662842 1444.196533,564.576111   C1442.866821,549.025757 1443.365234,533.319153 1443.075195,517.206116  z",
                            " M2166.074219,722.629333   C2165.985107,724.252686 2165.694336,726.646423 2165.191650,726.691833   C2162.474854,726.937500 2159.683105,726.756836 2156.969482,726.362854   C2156.239502,726.256836 2155.083252,724.767273 2155.212891,724.136353   C2155.380615,723.316711 2156.605713,722.177124 2157.432617,722.127563   C2160.199707,721.961792 2162.992432,722.220032 2166.074219,722.629333  z",
                            " M2160.960693,700.093018   C2163.808105,701.348206 2166.047852,702.977905 2163.317139,705.694397   C2162.489014,706.517944 2160.179932,705.852844 2158.549316,705.869629   C2159.226807,703.947021 2159.904053,702.024475 2160.960693,700.093018  z",
                            " M2108.157715,709.998352   C2107.094971,709.998962 2106.444580,709.998962 2105.269531,709.998962   C2106.225830,706.617981 2107.098877,703.531433 2108.308105,699.256714   C2109.375977,702.818909 2110.287598,705.115234 2110.641846,707.494690   C2110.748535,708.210266 2109.304199,709.156921 2108.157715,709.998352  z",
                            " M1955.723389,715.668213   C1951.190552,714.017883 1949.266357,707.197266 1952.114868,703.804321   C1953.850952,701.736572 1956.012573,701.647461 1957.838013,703.717224   C1960.251831,706.454407 1959.199951,712.835571 1955.723389,715.668213  z",
                            " M1918.051392,714.082092   C1920.008667,712.645813 1921.936035,711.603088 1923.863403,710.560364   C1924.373413,710.987549 1924.883301,711.414734 1925.393188,711.841919   C1924.377808,713.315857 1923.619507,715.105774 1922.287109,716.190186   C1920.263916,717.836670 1918.618408,717.115601 1918.051392,714.082092  z",
                            " M2268.987793,712.912842   C2267.790039,714.499268 2266.752441,716.014038 2265.317139,716.724731   C2264.643066,717.058472 2262.894531,716.081787 2262.237305,715.231567   C2261.901123,714.796997 2262.768799,712.564697 2263.316162,712.472534   C2265.151367,712.163452 2267.087158,712.451965 2268.987793,712.912842  z",
                            " M1988.979980,702.051514   C1990.631592,702.922180 1991.900757,703.761230 1993.169800,704.600342   C1993.073608,704.916016 1992.977295,705.231628 1992.880981,705.547302   C1990.130615,705.547302 1987.380127,705.547302 1983.565918,705.547302   C1985.634644,704.097107 1987.116089,703.058594 1988.979980,702.051514  z",
                            " M2198.766113,704.550781   C2196.185303,705.432678 2193.470703,705.935059 2190.032959,706.571289   C2192.518799,701.551636 2195.161865,700.923889 2198.766113,704.550781  z"
                          ],
                          stroke: "none",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    })
                })
            }),
            dugumluLogo: e => a.jsx("svg", {
                id: "svg",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                width: 400,
                height: "54.18326693227091",
                viewBox: "0, 0, 400,54.18326693227091",
                ...e,
                children: a.jsx("g", {
                    id: "svgg",
                    children: a.jsx("path", {
                        id: "path0",
                        d: [
                            " M1429.000000,1201.000000   C952.666687,1201.000000 476.833344,1201.000000 1.000000,1201.000000   C1.000000,801.000000 1.000000,401.000000 1.000000,1.000000   C801.000000,1.000000 1601.000000,1.000000 2401.000000,1.000000   C2401.000000,401.000000 2401.000000,801.000000 2401.000000,1201.000000   C2077.166748,1201.000000 1753.333374,1201.000000 1429.000000,1201.000000  M1021.835022,620.624329   C1010.628357,592.876038 1005.883667,563.916260 1006.092957,534.124329   C1006.154419,525.373962 1007.206421,516.619934 1008.021729,507.887848   C1009.569885,491.305481 1013.057495,475.062836 1019.356995,459.688385   C1023.216003,450.270264 1025.450195,441.050507 1025.148071,430.805786   C1024.617920,412.823273 1025.000854,394.813873 1024.999756,376.815735   C1024.999268,370.004425 1024.997314,370.000580 1018.352295,370.000549   C695.385742,369.999939 372.419189,369.999908 49.452656,370.000793   C43.005798,370.000793 43.000938,370.006195 43.000881,376.511353   C42.999886,492.999298 43.000038,609.487244 43.000450,725.975159   C43.000477,732.997314 43.002468,732.999634 49.938988,732.999634   C239.086060,733.000061 428.233124,733.000000 617.380188,733.000000   C751.033020,733.000000 884.685852,733.000183 1018.338684,732.999451   C1024.997192,732.999390 1024.999512,732.995667 1024.999634,726.197815   C1025.000488,695.201050 1025.101562,664.203491 1024.874023,633.208374   C1024.844849,629.243713 1023.100525,625.291687 1021.835022,620.624329  M1764.500000,680.036926   C1776.254517,680.036926 1788.009155,680.036926 1800.240479,680.036926   C1800.240479,644.779236 1800.240479,610.222229 1800.240479,575.370605   C1810.375000,575.370605 1820.026123,575.544800 1829.665039,575.276917   C1833.073364,575.182129 1834.608276,576.430908 1836.024414,579.365906   C1851.560303,611.564270 1867.295898,643.666382 1882.789917,675.884705   C1884.327637,679.082397 1886.028931,680.133850 1889.518677,680.118286   C1920.850464,679.978882 1952.183105,680.036926 1983.515503,680.036926   C1984.904541,680.036926 1986.293701,680.036926 1988.311401,680.036926   C1966.868286,639.657837 1945.842163,600.064148 1924.692993,560.238647   C1925.763550,559.712646 1926.468384,559.314453 1927.211304,559.008911   C1958.196045,546.263062 1976.121582,523.208618 1979.397339,489.967621   C1982.208740,461.439087 1973.979004,436.140747 1952.170166,416.505768   C1932.796753,399.063385 1909.116577,393.325775 1883.789795,393.260895   C1826.958618,393.115326 1770.126709,393.215271 1713.295166,393.215271   C1711.670288,393.215271 1710.045288,393.215271 1708.223389,393.215271   C1708.223389,489.058655 1708.223389,584.420654 1708.223389,680.036926   C1726.874390,680.036926 1745.187256,680.036926 1764.500000,680.036926  M1445.535522,677.984924   C1482.719116,687.301025 1520.113525,687.966370 1557.287476,678.821594   C1605.138672,667.050232 1637.922729,638.328613 1651.558594,590.118774   C1660.222168,559.488098 1660.592285,528.203613 1654.787720,497.058746   C1645.591187,447.715424 1617.533325,413.682098 1569.468262,398.133972   C1526.338257,384.182220 1482.397339,384.252136 1439.123657,397.421570   C1396.026123,410.537354 1367.602173,439.283875 1355.436279,483.042755   C1347.325439,512.216003 1346.928955,541.951477 1351.392334,571.716003   C1354.924316,595.270020 1363.112183,617.083313 1378.296509,635.838928   C1395.695801,657.330139 1418.514893,670.277527 1445.535522,677.984924  M2088.500000,680.037720   C2153.107178,680.037720 2217.714600,680.037720 2282.376465,680.037720   C2282.376465,656.801147 2282.376465,634.098816 2282.376465,610.942993   C2229.395508,610.942993 2176.822510,610.942993 2124.358398,610.942993   C2124.358398,596.262695 2124.358398,582.043457 2124.358398,567.327026   C2168.802490,567.327026 2212.864502,567.327026 2256.905273,567.327026   C2256.905273,545.236572 2256.905273,523.653503 2256.905273,501.600586   C2212.508789,501.600586 2168.429199,501.600586 2124.274414,501.600586   C2124.274414,488.222351 2124.274414,475.319305 2124.274414,461.849792   C2176.275879,461.849792 2227.980469,461.849792 2279.531738,461.849792   C2279.531738,438.706787 2279.531738,416.135193 2279.531738,393.462036   C2196.916016,393.462036 2114.661377,393.462036 2032.224121,393.462036   C2032.224121,489.068817 2032.224121,584.427429 2032.224121,680.037720   C2050.875977,680.037720 2069.187988,680.037720 2088.500000,680.037720  M1300.461182,563.836670   C1275.868408,563.836670 1251.275635,563.836670 1226.441650,563.836670   C1226.328857,565.618469 1226.249023,566.756470 1226.186035,567.895386   C1224.631592,596.022827 1210.535278,612.140991 1182.670288,615.516541   C1152.669678,619.150879 1127.905151,609.846252 1121.086792,571.170410   C1116.966553,547.799805 1117.324951,523.975159 1121.207397,500.534882   C1125.567627,474.210297 1140.526855,460.046906 1166.292603,457.468079   C1193.880005,454.706940 1214.856201,466.347992 1221.588989,494.073700   C1222.909180,499.510071 1223.142456,505.210419 1223.890381,510.891541   C1252.990356,510.891541 1282.047485,510.891541 1311.103149,510.891541   C1311.103149,507.584991 1311.203735,504.606720 1311.088013,501.636810   C1309.089233,450.309814 1281.319458,412.696075 1232.395508,397.058044   C1192.254395,384.227325 1151.548218,384.967102 1111.400024,397.095245   C1070.285400,409.515320 1043.783691,437.357697 1032.287476,478.555695   C1021.696411,516.509583 1021.654480,554.963989 1031.845947,593.056274   C1043.574463,636.893616 1071.887329,665.017761 1115.381470,677.602295   C1142.951294,685.579407 1171.188110,686.604431 1199.568726,683.667480   C1222.143555,681.331177 1243.746704,675.505432 1263.027222,662.994812   C1298.861450,639.742920 1311.125244,604.984131 1311.374390,563.836670   C1307.718262,563.836670 1304.581177,563.836670 1300.461182,563.836670  M1900.334473,687.995850   C1896.353271,687.995850 1892.371948,687.995850 1888.418823,687.995850   C1886.563965,693.822266 1884.801392,699.358643 1882.838013,705.526001   C1880.878174,699.154114 1879.199585,693.696533 1877.516235,688.223755   C1872.304565,688.223755 1867.376465,688.223755 1862.253662,688.223755   C1862.253662,699.507812 1862.253662,710.561462 1862.253662,721.710083   C1865.910400,721.710083 1869.301758,721.710083 1872.945801,721.710083   C1872.945801,717.143250 1872.945801,712.863586 1872.945801,708.583984   C1873.129517,708.554199 1873.313232,708.524414 1873.496948,708.494629   C1874.790649,712.917358 1876.084473,717.340027 1877.449341,722.005554   C1878.492188,722.005554 1879.517456,721.828735 1880.458984,722.034729   C1885.898315,723.224548 1888.179077,720.509338 1889.032104,715.543945   C1889.555176,712.500122 1890.520020,709.532227 1891.286377,706.530212   C1891.575439,706.586121 1891.864502,706.642090 1892.153564,706.697998   C1892.153564,711.648987 1892.153564,716.599976 1892.153564,721.745117   C1896.166504,721.745117 1899.890015,721.745117 1903.163696,721.745117   C1903.163696,710.903748 1903.193481,700.326355 1903.083740,689.750427   C1903.077759,689.163574 1901.915283,688.588684 1900.334473,687.995850  M2175.005127,703.505310   C2174.461914,701.541626 2173.918701,699.577881 2173.465576,697.939514   C2174.944824,695.896423 2176.527344,693.710693 2178.666504,690.756165   C2173.657471,690.483032 2170.077637,689.281982 2167.576660,693.528137   C2166.943848,694.602661 2164.391113,694.617126 2162.690918,694.978577   C2158.684814,695.830200 2154.433105,696.036682 2150.704102,697.548035   C2146.537354,699.236572 2146.061768,702.870605 2148.294922,706.942566   C2148.859619,707.972229 2149.287842,710.023682 2148.746094,710.556763   C2145.633057,713.620972 2145.382568,716.687317 2148.207031,719.982544   C2147.601318,720.719421 2146.956055,721.162109 2146.821533,721.726501   C2146.207520,724.303833 2144.734131,727.292297 2145.525879,729.397217   C2146.179199,731.133484 2149.506592,732.653992 2151.767090,732.840820   C2157.552002,733.318909 2163.405029,733.106567 2169.226318,732.967834   C2174.423340,732.843872 2178.124512,728.566467 2178.005371,723.144775   C2177.888428,717.819641 2174.864014,715.006592 2169.236572,714.995056   C2166.573975,714.989624 2163.904785,715.107849 2161.251953,714.946350   C2159.897461,714.864014 2158.572998,714.287781 2157.235107,713.934753   C2157.301758,713.291626 2157.368408,712.648560 2157.435303,712.005493   C2160.282471,712.005493 2163.132080,712.078125 2165.976807,711.989746   C2171.266113,711.825439 2173.947266,709.507507 2175.005127,703.505310  M2094.623047,722.005737   C2097.052734,721.450439 2101.209961,721.472656 2101.621094,720.242615   C2103.701416,714.020142 2108.416992,717.846558 2111.736572,717.263916   C2112.924072,717.055481 2114.621582,719.750366 2116.880615,721.863098   C2119.491699,721.863098 2123.455322,721.863098 2128.046631,721.863098   C2123.635986,710.441040 2119.315674,699.252625 2114.968750,687.995361   C2111.287598,687.995361 2107.965820,687.865234 2104.664307,688.068604   C2103.565186,688.136292 2101.881104,688.800110 2101.545166,689.629333   C2097.248047,700.231873 2093.147217,710.914001 2088.829590,722.005798   C2091.091553,722.005798 2092.416016,722.005798 2094.623047,722.005737  M1942.017212,699.865295   C1941.344482,702.527649 1940.381958,705.154541 1940.050537,707.858765   C1938.797119,718.088074 1944.670898,724.110779 1954.739380,722.950378   C1956.729858,722.721008 1958.630981,721.325256 1960.588501,721.289124   C1963.584595,721.233765 1966.593994,721.892395 1969.317017,722.214783   C1969.317017,709.754944 1969.317017,698.066650 1969.317017,686.392456   C1965.579590,686.392456 1962.547241,686.392456 1959.186279,686.392456   C1959.186279,690.076843 1959.186279,693.362671 1959.186279,697.145386   C1952.748169,693.528809 1947.300049,694.669983 1942.017212,699.865295  M1911.262207,697.727905   C1909.941528,699.435364 1908.620850,701.142883 1907.300171,702.850403   C1907.726807,703.494995 1908.153442,704.139526 1908.580078,704.784119   C1912.603516,703.889526 1916.595459,702.722046 1920.667969,702.251038   C1922.059570,702.090027 1923.653320,703.676758 1925.906128,704.859375   C1919.947144,706.111816 1915.364990,706.618286 1911.121948,708.097534   C1907.042847,709.519653 1906.171387,713.615723 1907.212158,717.198792   C1907.860229,719.429443 1910.244141,722.140930 1912.370972,722.720398   C1915.375366,723.538940 1918.860352,722.487793 1922.143555,722.422974   C1924.529541,722.375916 1927.051880,722.184570 1929.286743,722.835449   C1936.319458,724.883423 1940.148071,722.780212 1939.803833,716.571899   C1938.545288,716.151489 1937.256714,715.720947 1936.004761,715.302734   C1936.004761,712.445679 1936.004761,709.946899 1936.004761,707.448181   C1936.004761,698.686829 1933.267822,695.380249 1924.489502,695.158630   C1920.316284,695.053284 1916.103271,696.527039 1911.262207,697.727905  M2269.541992,721.113647   C2272.701660,721.744080 2275.851318,722.761902 2279.025146,722.844543   C2280.656250,722.887085 2283.592285,721.396729 2283.703613,720.359436   C2283.892822,718.592590 2282.318848,716.636719 2281.485596,714.760315   C2279.995361,709.957275 2280.879883,704.056641 2278.673828,699.732788   C2276.124756,694.736328 2269.701416,694.811218 2264.271973,695.007202   C2256.881104,695.273987 2252.196045,698.685669 2252.317871,704.798828   C2256.527100,703.886597 2260.528564,702.731201 2264.607666,702.288818   C2266.069824,702.130249 2267.718750,703.692322 2270.048828,704.849609   C2264.023682,706.107544 2259.444580,706.609802 2255.197754,708.075745   C2250.818359,709.587402 2250.425537,713.819031 2251.132080,717.654663   C2251.784668,721.194031 2254.484863,723.205688 2258.209473,722.956909   C2261.779785,722.718506 2265.323975,722.085083 2269.541992,721.113647  M1975.021729,717.143982   C1980.032837,723.048523 1989.318237,725.090637 1997.468628,721.992615   C2001.840454,720.330811 2004.031494,717.151123 2003.928589,711.994202   C2001.735229,711.994202 1999.749268,711.837952 1997.801025,712.042603   C1996.186279,712.212280 1994.545776,712.637207 1993.045044,713.258728   C1991.307251,713.978333 1989.578247,715.926941 1988.086914,715.706665   C1986.482910,715.469727 1985.159058,713.336182 1983.712891,712.030212   C1983.979492,711.629944 1984.246094,711.229614 1984.512573,710.829285   C1990.936035,710.829285 1997.359497,710.829285 2003.679443,710.829285   C2005.471191,702.663452 2000.571289,695.397217 1990.535400,694.955872   C1981.178223,694.544312 1974.902832,698.245544 1973.420532,706.473389   C1972.859619,709.586548 1974.301636,713.060608 1975.021729,717.143982  M2197.112549,695.010437   C2195.449219,695.014771 2193.770996,694.876831 2192.124756,695.047424   C2184.078613,695.881165 2179.478271,700.582031 2178.997070,708.344604   C2178.550781,715.536499 2182.432373,721.299927 2189.502197,722.663696   C2193.338867,723.403931 2197.563965,723.454834 2201.377197,722.668701   C2206.448242,721.623291 2210.331543,718.794434 2209.474854,711.994263   C2207.370605,711.994263 2205.206299,711.820435 2203.087158,712.055786   C2201.690918,712.210876 2200.316162,712.858887 2199.011475,713.459839   C2197.404053,714.200317 2195.699707,716.012573 2194.363770,715.743103   C2192.618164,715.390991 2191.192627,713.453552 2189.629395,712.198181   C2189.861328,711.788147 2190.093262,711.378174 2190.324951,710.968140   C2196.746094,710.968140 2203.167236,710.968140 2209.526855,710.968140   C2210.748779,701.438293 2207.878418,697.620178 2197.112549,695.010437  M2052.744629,704.831604   C2053.802246,703.843140 2054.859863,702.854675 2056.271729,701.535095   C2061.794922,707.830933 2057.235107,715.304626 2059.541260,721.714233   C2062.897461,721.714233 2066.287598,721.714233 2070.005127,721.714233   C2070.005127,716.461426 2069.527588,711.437683 2070.104248,706.537964   C2071.319092,696.216187 2060.693848,692.291199 2054.087646,696.674561   C2053.212891,697.255005 2051.944336,697.786499 2050.995605,697.608337   C2048.167969,697.076965 2045.408691,696.180908 2042.281128,695.334900   C2042.281128,704.887451 2042.281128,713.284485 2042.281128,721.678955   C2045.634521,721.678955 2048.693604,721.678955 2052.159424,721.678955   C2052.159424,716.050598 2052.159424,710.744507 2052.744629,704.831604  M2136.550049,685.989319   C2134.944580,685.989319 2133.339111,685.989319 2131.365234,685.989319   C2131.365234,698.205139 2131.365234,709.884277 2131.365234,721.757080   C2134.842041,721.757080 2138.222412,721.757080 2141.188965,721.757080   C2141.188965,710.471130 2141.269043,699.439392 2141.029053,688.414551   C2141.010986,687.580872 2138.718506,686.796692 2136.550049,685.989319  M2225.061279,706.887695   C2227.501465,705.571594 2229.941895,704.255432 2233.185303,702.506104   C2232.917725,700.719116 2232.515869,698.036499 2232.114258,695.353943   C2229.171143,695.813599 2226.228027,696.273315 2223.411865,696.713135   C2220.513672,696.421570 2217.491943,696.117554 2214.270996,695.793518   C2214.270996,704.879639 2214.270996,713.269470 2214.270996,721.695435   C2217.611572,721.695435 2220.668701,721.695435 2223.495605,721.695435   C2224.017822,716.824341 2224.504395,712.283752 2225.061279,706.887695  M2036.004761,708.530334   C2036.004761,707.367249 2036.004761,706.204224 2036.004761,705.041138   C2036.004517,695.243103 2035.762329,695.030701 2025.895020,696.232422   C2025.763428,696.248474 2025.652832,696.439026 2025.269043,696.786621   C2025.269043,704.913757 2025.269043,713.279236 2025.269043,721.700684   C2028.934692,721.700684 2032.319702,721.700684 2036.004761,721.700684   C2036.004761,717.438232 2036.004761,713.476868 2036.004761,708.530334  M2236.996826,699.773499   C2236.996826,707.029846 2236.996826,714.286194 2236.996826,721.763489   C2240.816650,721.763489 2244.196533,721.763489 2247.984375,721.763489   C2247.984375,714.271423 2248.125244,707.008484 2247.852539,699.761047   C2247.803955,698.474731 2245.804443,696.073303 2245.098633,696.210266   C2242.354492,696.742676 2238.108154,693.381714 2236.996826,699.773499  M2243.319580,685.976685   C2241.413330,685.976685 2239.506836,685.976685 2237.595215,685.976685   C2237.595215,688.671814 2237.595215,690.705872 2237.595215,692.689453   C2240.976562,692.689453 2243.995850,692.689453 2248.482666,692.689453   C2245.675049,690.400330 2250.205322,685.881592 2243.319580,685.976685  M2033.069702,685.980225   C2030.524536,685.980225 2027.979370,685.980225 2025.507080,685.980225   C2025.507080,688.717163 2025.507080,690.631226 2025.507080,692.781677   C2028.802979,692.781677 2031.838623,692.781677 2035.868896,692.781677   C2035.145386,690.249390 2034.539429,688.128845 2033.069702,685.980225  z",
                            " M1021.992920,620.979065   C1023.100525,625.291687 1024.844849,629.243713 1024.874023,633.208374   C1025.101562,664.203491 1025.000488,695.201050 1024.999634,726.197815   C1024.999512,732.995667 1024.997192,732.999390 1018.338684,732.999451   C884.685852,733.000183 751.033020,733.000000 617.380188,733.000000   C428.233124,733.000000 239.086060,733.000061 49.938988,732.999634   C43.002468,732.999634 43.000477,732.997314 43.000450,725.975159   C43.000038,609.487244 42.999886,492.999298 43.000881,376.511353   C43.000938,370.006195 43.005798,370.000793 49.452656,370.000793   C372.419189,369.999908 695.385742,369.999939 1018.352295,370.000549   C1024.997314,370.000580 1024.999268,370.004425 1024.999756,376.815735   C1025.000854,394.813873 1024.617920,412.823273 1025.148071,430.805786   C1025.450195,441.050507 1023.216003,450.270264 1019.356995,459.688385   C1013.057495,475.062836 1009.569885,491.305481 1008.021729,507.887848   C1007.206421,516.619934 1006.154419,525.373962 1006.092957,534.124329   C1005.883667,563.916260 1010.628357,592.876038 1021.992920,620.979065  M786.567749,544.369141   C792.989136,552.520386 799.204224,560.845764 805.894775,568.769653   C811.612122,575.540894 817.994019,581.746277 823.868469,588.390625   C832.394714,598.034180 840.726868,607.849304 849.146179,617.587402   C851.720581,620.565186 854.370544,623.479858 856.878540,626.512268   C861.835999,632.506409 866.577393,638.684998 871.670837,644.559448   C877.063477,650.778992 882.868347,656.640259 888.283203,662.841431   C891.182251,666.161377 893.155029,670.422791 896.413635,673.263977   C900.879089,677.157288 904.732666,681.560730 912.273499,681.306580   C934.737000,680.549561 957.242432,681.035034 979.731445,681.035034   C981.494995,681.035034 983.258545,681.035034 984.934998,681.035034   C984.934998,585.118835 984.934998,489.898834 984.934998,394.563660   C956.770935,394.563660 928.905151,394.563660 900.598572,394.563660   C900.598572,441.227417 900.598572,487.520966 900.213623,533.809814   C900.213623,533.809814 899.934448,534.074890 899.303894,533.831604   C898.847351,533.350220 898.320251,532.917969 897.945557,532.379578   C895.339417,528.634644 893.046692,524.627075 890.100403,521.175842   C887.201294,517.779907 883.421997,515.145386 880.432861,511.814331   C874.564453,505.274689 868.912476,498.536133 863.323303,491.754395   C862.125977,490.301575 861.918518,487.997681 860.658691,486.638824   C857.728088,483.477844 854.265503,480.810669 851.329346,477.654266   C847.535278,473.575500 844.036743,469.221252 840.430908,464.968719   C839.906799,464.350616 839.519104,463.618866 839.024292,462.973450   C836.421936,459.578888 833.950562,456.069275 831.152771,452.843292   C828.355652,449.618011 825.166809,446.735962 822.263916,443.597778   C820.130554,441.291656 818.098511,438.879639 816.170227,436.399017   C813.545349,433.022186 811.243958,429.379456 808.468079,426.138458   C805.622070,422.815735 802.261169,419.939178 799.325317,416.687073   C795.588928,412.548279 792.045959,408.234497 788.438904,403.979767   C787.914551,403.361298 787.394226,402.701385 787.047302,401.976776   C784.718445,397.112488 781.130920,394.184784 775.509460,394.187561   C751.856506,394.199249 728.203613,394.188019 704.550659,394.203522   C703.105286,394.204468 701.660095,394.363495 700.256775,394.446472   C700.256775,490.164429 700.256775,585.495361 700.256775,680.786621   C728.394104,680.786621 756.155518,680.786621 784.388184,680.786621   C784.388184,678.590759 784.388123,676.637634 784.388123,674.684448   C784.388123,632.875366 784.384338,591.066345 784.401062,549.257263   C784.401794,547.437317 784.591858,545.617493 785.346375,543.949036   C785.569275,543.963379 785.792175,543.977783 786.567749,544.369141  M241.918533,393.090118   C239.591782,393.047241 237.176590,393.396423 234.953293,392.894897   C224.240128,390.478302 213.360123,389.334320 202.444931,389.392548   C190.983261,389.453644 179.486801,389.991882 168.078705,391.085022   C157.150467,392.132172 146.051926,392.660370 135.689514,397.097534   C126.842278,400.885925 117.585976,403.837128 109.047844,408.208069   C77.562462,424.326538 65.383980,451.313965 66.541595,485.546844   C67.282501,507.456573 75.000328,525.998169 92.075020,540.322632   C101.747131,548.436829 112.140274,555.494873 124.295555,558.862732   C148.781784,565.647278 173.521988,571.509949 198.064011,578.100769   C207.819077,580.720459 217.525909,583.770813 226.875244,587.561096   C232.997299,590.043091 236.054886,595.544678 235.513702,602.522217   C234.957520,609.692993 231.098526,614.301819 224.315720,616.203125   C205.301636,621.532898 186.226044,621.877258 167.231110,616.106384   C158.375458,613.416016 152.808090,607.382874 150.824936,598.326782   C149.807480,593.680481 149.256454,588.932068 148.496063,584.238647   C119.703835,584.238647 90.974503,584.238647 61.360722,584.238647   C62.276459,592.867432 62.678150,601.179626 64.111732,609.309937   C68.371124,633.466370 79.639206,653.286072 101.995010,664.955994   C112.148163,670.255920 122.904861,674.766235 133.861526,678.057800   C144.936401,681.384827 156.594345,682.776123 168.003174,684.982788   C170.969223,685.556519 173.961746,686.459045 176.937073,686.439575   C190.709030,686.349609 204.479050,685.979858 218.250092,685.727783   C223.751251,685.627136 229.339798,686.148071 234.731476,685.339111   C240.611008,684.456848 246.274612,682.219543 252.093292,680.827759   C260.194336,678.890137 268.344055,677.269836 275.626312,672.830994   C282.147522,668.856018 289.104706,665.564636 295.452545,661.344421   C305.512573,654.656311 313.188019,645.711121 318.937347,635.003601   C325.910583,622.016724 328.509674,607.957153 329.714996,593.547119   C330.818542,580.353516 329.843750,566.871399 324.066071,555.204224   C313.247894,533.358643 294.575714,519.816223 271.491638,512.556580   C259.980133,508.936432 248.270966,505.924652 236.594574,502.853027   C214.564285,497.057617 191.605850,494.924561 170.562119,485.166534   C159.838806,480.194122 157.391159,467.279755 166.619049,459.904510   C172.652878,455.082031 179.828430,453.326721 187.329071,452.995880   C193.497772,452.723724 199.691711,453.084564 205.870316,452.959869   C213.751755,452.800842 220.433548,455.660004 226.227890,460.757202   C232.707825,466.457550 234.381622,474.294250 235.474152,482.483215   C264.203064,482.483215 292.924591,482.483215 322.169800,482.483215   C321.854462,477.223083 321.602234,472.311310 321.252930,467.406403   C320.956024,463.237518 321.206848,458.875793 320.015869,454.964630   C318.622253,450.387939 315.943787,446.199707 313.796906,441.855743   C308.839569,431.825195 302.023743,423.211548 292.898315,416.784424   C284.954315,411.189423 276.762543,405.809967 268.158112,401.340546   C263.091095,398.708588 256.986633,398.103333 251.387802,396.453949   C248.454208,395.589691 245.604889,394.439453 241.918533,393.090118  M478.429047,607.116272   C468.889221,599.292786 465.144775,588.542542 461.610474,577.094849   C457.317261,563.188965 458.403839,549.215393 457.999817,535.199463   C457.851074,530.039062 458.204346,524.860352 457.959747,519.707458   C457.346863,506.795227 461.589630,494.862976 466.411194,483.419983   C471.165924,472.135559 480.259705,464.426239 492.355072,460.932159   C502.885010,457.890167 513.499512,458.701294 524.247192,459.843140   C541.928284,461.721588 559.216553,480.526062 560.370300,495.731079   C560.783264,501.173218 562.046753,506.550842 562.920471,511.948181   C592.052795,511.948181 620.975037,511.948181 650.689758,511.948181   C650.108643,504.885132 649.738831,498.137634 648.968750,491.436096   C646.183105,467.192871 637.563232,445.578766 620.291138,427.800201   C603.802124,410.827789 583.637817,400.567902 560.947449,394.921783   C550.815308,392.400604 540.564087,390.357910 530.365845,388.102936   C530.208313,388.068115 529.964294,388.022705 529.882568,388.104340   C526.276306,391.705566 522.076111,389.265320 518.131836,389.242401   C496.725037,389.118073 475.441498,390.433624 454.782715,396.439056   C440.571625,400.570190 427.267914,406.730225 414.932617,415.195465   C403.482819,423.053040 394.018188,432.905182 386.836792,444.330994   C372.627350,466.938507 365.424103,492.147308 364.400604,518.828918   C363.734009,536.205872 362.117859,553.725159 366.010773,570.957458   C368.793549,583.275635 371.015808,595.876648 375.384552,607.647583   C384.275848,631.603943 399.094696,651.391357 421.376892,664.744446   C428.296326,668.891052 435.536407,672.671204 443.010223,675.670959   C449.032684,678.088135 455.647369,679.006897 461.964081,680.720337   C467.874237,682.323486 473.644897,684.739929 479.649170,685.610229   C485.333130,686.434082 491.243835,685.820374 497.049500,685.653625   C514.864441,685.141846 532.679199,684.602173 550.488403,683.925049   C554.202271,683.783813 558.005188,683.414978 561.566528,682.427734   C567.065857,680.903442 572.392883,678.756714 577.791992,676.871338   C581.258301,675.661011 584.986145,674.910278 588.129639,673.129211   C593.457764,670.110168 598.478699,666.528625 603.517334,663.023315   C612.957947,656.455627 621.715149,649.211670 628.581055,639.762329   C637.431335,627.581848 643.447876,614.187134 646.755676,599.601685   C649.317261,588.307129 650.613892,576.831360 650.181885,565.217773   C621.646912,565.217773 593.606140,565.217773 565.492126,565.217773   C565.037598,569.488708 564.740234,573.401794 564.187134,577.278442   C562.195923,591.233337 555.868347,602.789001 543.322083,609.550903   C536.952759,612.983521 529.530823,615.046204 522.339355,616.204102   C515.304871,617.336731 507.916290,617.038818 500.760284,616.442749   C492.731354,615.773865 485.427734,612.521423 478.429047,607.116272  z",
                            " M1764.000000,680.036926   C1745.187256,680.036926 1726.874390,680.036926 1708.223389,680.036926   C1708.223389,584.420654 1708.223389,489.058655 1708.223389,393.215271   C1710.045288,393.215271 1711.670288,393.215271 1713.295166,393.215271   C1770.126709,393.215271 1826.958618,393.115326 1883.789795,393.260895   C1909.116577,393.325775 1932.796753,399.063385 1952.170166,416.505768   C1973.979004,436.140747 1982.208740,461.439087 1979.397339,489.967621   C1976.121582,523.208618 1958.196045,546.263062 1927.211304,559.008911   C1926.468384,559.314453 1925.763550,559.712646 1924.692993,560.238647   C1945.842163,600.064148 1966.868286,639.657837 1988.311401,680.036926   C1986.293701,680.036926 1984.904541,680.036926 1983.515503,680.036926   C1952.183105,680.036926 1920.850464,679.978882 1889.518677,680.118286   C1886.028931,680.133850 1884.327637,679.082397 1882.789917,675.884705   C1867.295898,643.666382 1851.560303,611.564270 1836.024414,579.365906   C1834.608276,576.430908 1833.073364,575.182129 1829.665039,575.276917   C1820.026123,575.544800 1810.375000,575.370605 1800.240479,575.370605   C1800.240479,610.222229 1800.240479,644.779236 1800.240479,680.036926   C1788.009155,680.036926 1776.254517,680.036926 1764.000000,680.036926  M1877.896118,465.574493   C1872.727295,460.852325 1866.655518,458.792816 1859.648315,458.844574   C1843.152466,458.966492 1826.655151,458.882599 1810.158447,458.881989   C1806.880005,458.881866 1803.601685,458.881927 1800.187866,458.881927   C1800.187866,476.681091 1800.187866,493.934174 1800.187866,511.476776   C1801.848877,511.566345 1803.305908,511.711975 1804.762817,511.713257   C1822.592529,511.728912 1840.422852,511.648010 1858.251953,511.750000   C1870.086792,511.817688 1879.153931,507.036652 1883.796875,496.092194   C1888.401611,485.237610 1886.802490,474.896515 1877.896118,465.574493  z",
                            " M1445.136108,677.904663   C1418.514893,670.277527 1395.695801,657.330139 1378.296509,635.838928   C1363.112183,617.083313 1354.924316,595.270020 1351.392334,571.716003   C1346.928955,541.951477 1347.325439,512.216003 1355.436279,483.042755   C1367.602173,439.283875 1396.026123,410.537354 1439.123657,397.421570   C1482.397339,384.252136 1526.338257,384.182220 1569.468262,398.133972   C1617.533325,413.682098 1645.591187,447.715424 1654.787720,497.058746   C1660.592285,528.203613 1660.222168,559.488098 1651.558594,590.118774   C1637.922729,638.328613 1605.138672,667.050232 1557.287476,678.821594   C1520.113525,687.966370 1482.719116,687.301025 1445.136108,677.904663  M1443.060547,517.681152   C1443.365234,533.319153 1442.866821,549.025757 1444.196533,564.576111   C1445.572266,580.662842 1452.369141,594.729370 1465.460693,604.946411   C1477.822632,614.593933 1492.333618,616.542480 1507.476440,616.085999   C1535.930298,615.228271 1556.612793,598.403748 1561.906372,570.429138   C1565.926147,549.185547 1565.562500,527.528687 1562.522705,506.276642   C1559.405273,484.480164 1548.129517,467.378601 1525.982788,460.639648   C1517.105957,457.938599 1507.282471,457.165039 1497.942871,457.424561   C1480.337646,457.913696 1465.257080,464.530823 1454.832275,479.621552   C1447.109375,490.800812 1444.074829,503.434631 1443.060547,517.681152  z",
                            " M2088.000000,680.037720   C2069.187988,680.037720 2050.875977,680.037720 2032.224121,680.037720   C2032.224121,584.427429 2032.224121,489.068817 2032.224121,393.462036   C2114.661377,393.462036 2196.916016,393.462036 2279.531738,393.462036   C2279.531738,416.135193 2279.531738,438.706787 2279.531738,461.849792   C2227.980469,461.849792 2176.275879,461.849792 2124.274414,461.849792   C2124.274414,475.319305 2124.274414,488.222351 2124.274414,501.600586   C2168.429199,501.600586 2212.508789,501.600586 2256.905273,501.600586   C2256.905273,523.653503 2256.905273,545.236572 2256.905273,567.327026   C2212.864502,567.327026 2168.802490,567.327026 2124.358398,567.327026   C2124.358398,582.043457 2124.358398,596.262695 2124.358398,610.942993   C2176.822510,610.942993 2229.395508,610.942993 2282.376465,610.942993   C2282.376465,634.098816 2282.376465,656.801147 2282.376465,680.037720   C2217.714600,680.037720 2153.107178,680.037720 2088.000000,680.037720  z",
                            " M1300.952637,563.836670   C1304.581177,563.836670 1307.718262,563.836670 1311.374390,563.836670   C1311.125244,604.984131 1298.861450,639.742920 1263.027222,662.994812   C1243.746704,675.505432 1222.143555,681.331177 1199.568726,683.667480   C1171.188110,686.604431 1142.951294,685.579407 1115.381470,677.602295   C1071.887329,665.017761 1043.574463,636.893616 1031.845947,593.056274   C1021.654480,554.963989 1021.696411,516.509583 1032.287476,478.555695   C1043.783691,437.357697 1070.285400,409.515320 1111.400024,397.095245   C1151.548218,384.967102 1192.254395,384.227325 1232.395508,397.058044   C1281.319458,412.696075 1309.089233,450.309814 1311.088013,501.636810   C1311.203735,504.606720 1311.103149,507.584991 1311.103149,510.891541   C1282.047485,510.891541 1252.990356,510.891541 1223.890381,510.891541   C1223.142456,505.210419 1222.909180,499.510071 1221.588989,494.073700   C1214.856201,466.347992 1193.880005,454.706940 1166.292603,457.468079   C1140.526855,460.046906 1125.567627,474.210297 1121.207397,500.534882   C1117.324951,523.975159 1116.966553,547.799805 1121.086792,571.170410   C1127.905151,609.846252 1152.669678,619.150879 1182.670288,615.516541   C1210.535278,612.140991 1224.631592,596.022827 1226.186035,567.895386   C1226.249023,566.756470 1226.328857,565.618469 1226.441650,563.836670   C1251.275635,563.836670 1275.868408,563.836670 1300.952637,563.836670  z",
                            " M1900.812744,688.002075   C1901.915283,688.588684 1903.077759,689.163574 1903.083740,689.750427   C1903.193481,700.326355 1903.163696,710.903748 1903.163696,721.745117   C1899.890015,721.745117 1896.166504,721.745117 1892.153564,721.745117   C1892.153564,716.599976 1892.153564,711.648987 1892.153564,706.697998   C1891.864502,706.642090 1891.575439,706.586121 1891.286377,706.530212   C1890.520020,709.532227 1889.555176,712.500122 1889.032104,715.543945   C1888.179077,720.509338 1885.898315,723.224548 1880.458984,722.034729   C1879.517456,721.828735 1878.492188,722.005554 1877.449341,722.005554   C1876.084473,717.340027 1874.790649,712.917358 1873.496948,708.494629   C1873.313232,708.524414 1873.129517,708.554199 1872.945801,708.583984   C1872.945801,712.863586 1872.945801,717.143250 1872.945801,721.710083   C1869.301758,721.710083 1865.910400,721.710083 1862.253662,721.710083   C1862.253662,710.561462 1862.253662,699.507812 1862.253662,688.223755   C1867.376465,688.223755 1872.304565,688.223755 1877.516235,688.223755   C1879.199585,693.696533 1880.878174,699.154114 1882.838013,705.526001   C1884.801392,699.358643 1886.563965,693.822266 1888.418823,687.995850   C1892.371948,687.995850 1896.353271,687.995850 1900.812744,688.002075  z",
                            " M2175.004883,703.920776   C2173.947266,709.507507 2171.266113,711.825439 2165.976807,711.989746   C2163.132080,712.078125 2160.282471,712.005493 2157.435303,712.005493   C2157.368408,712.648560 2157.301758,713.291626 2157.235107,713.934753   C2158.572998,714.287781 2159.897461,714.864014 2161.251953,714.946350   C2163.904785,715.107849 2166.573975,714.989624 2169.236572,714.995056   C2174.864014,715.006592 2177.888428,717.819641 2178.005371,723.144775   C2178.124512,728.566467 2174.423340,732.843872 2169.226318,732.967834   C2163.405029,733.106567 2157.552002,733.318909 2151.767090,732.840820   C2149.506592,732.653992 2146.179199,731.133484 2145.525879,729.397217   C2144.734131,727.292297 2146.207520,724.303833 2146.821533,721.726501   C2146.956055,721.162109 2147.601318,720.719421 2148.207031,719.982544   C2145.382568,716.687317 2145.633057,713.620972 2148.746094,710.556763   C2149.287842,710.023682 2148.859619,707.972229 2148.294922,706.942566   C2146.061768,702.870605 2146.537354,699.236572 2150.704102,697.548035   C2154.433105,696.036682 2158.684814,695.830200 2162.690918,694.978577   C2164.391113,694.617126 2166.943848,694.602661 2167.576660,693.528137   C2170.077637,689.281982 2173.657471,690.483032 2178.666504,690.756165   C2176.527344,693.710693 2174.944824,695.896423 2173.465576,697.939514   C2173.918701,699.577881 2174.461914,701.541626 2175.004883,703.920776  M2165.775146,722.315857   C2162.992432,722.220032 2160.199707,721.961792 2157.432617,722.127563   C2156.605713,722.177124 2155.380615,723.316711 2155.212891,724.136353   C2155.083252,724.767273 2156.239502,726.256836 2156.969482,726.362854   C2159.683105,726.756836 2162.474854,726.937500 2165.191650,726.691833   C2165.694336,726.646423 2165.985107,724.252686 2165.775146,722.315857  M2160.581543,700.101868   C2159.904053,702.024475 2159.226807,703.947021 2158.549316,705.869629   C2160.179932,705.852844 2162.489014,706.517944 2163.317139,705.694397   C2166.047852,702.977905 2163.808105,701.348206 2160.581543,700.101868  z",
                            " M2094.181641,722.005737   C2092.416016,722.005798 2091.091553,722.005798 2088.829590,722.005798   C2093.147217,710.914001 2097.248047,700.231873 2101.545166,689.629333   C2101.881104,688.800110 2103.565186,688.136292 2104.664307,688.068604   C2107.965820,687.865234 2111.287598,687.995361 2114.968750,687.995361   C2119.315674,699.252625 2123.635986,710.441040 2128.046631,721.863098   C2123.455322,721.863098 2119.491699,721.863098 2116.880615,721.863098   C2114.621582,719.750366 2112.924072,717.055481 2111.736572,717.263916   C2108.416992,717.846558 2103.701416,714.020142 2101.621094,720.242615   C2101.209961,721.472656 2097.052734,721.450439 2094.181641,722.005737  M2108.570312,709.997742   C2109.304199,709.156921 2110.748535,708.210266 2110.641846,707.494690   C2110.287598,705.115234 2109.375977,702.818909 2108.308105,699.256714   C2107.098877,703.531433 2106.225830,706.617981 2105.269531,709.998962   C2106.444580,709.998962 2107.094971,709.998962 2108.570312,709.997742  z",
                            " M1942.188721,699.508301   C1947.300049,694.669983 1952.748169,693.528809 1959.186279,697.145386   C1959.186279,693.362671 1959.186279,690.076843 1959.186279,686.392456   C1962.547241,686.392456 1965.579590,686.392456 1969.317017,686.392456   C1969.317017,698.066650 1969.317017,709.754944 1969.317017,722.214783   C1966.593994,721.892395 1963.584595,721.233765 1960.588501,721.289124   C1958.630981,721.325256 1956.729858,722.721008 1954.739380,722.950378   C1944.670898,724.110779 1938.797119,718.088074 1940.050537,707.858765   C1940.381958,705.154541 1941.344482,702.527649 1942.188721,699.508301  M1956.053345,715.437622   C1959.199951,712.835571 1960.251831,706.454407 1957.838013,703.717224   C1956.012573,701.647461 1953.850952,701.736572 1952.114868,703.804321   C1949.266357,707.197266 1951.190552,714.017883 1956.053345,715.437622  z",
                            " M1911.585205,697.506653   C1916.103271,696.527039 1920.316284,695.053284 1924.489502,695.158630   C1933.267822,695.380249 1936.004761,698.686829 1936.004761,707.448181   C1936.004761,709.946899 1936.004761,712.445679 1936.004761,715.302734   C1937.256714,715.720947 1938.545288,716.151489 1939.803833,716.571899   C1940.148071,722.780212 1936.319458,724.883423 1929.286743,722.835449   C1927.051880,722.184570 1924.529541,722.375916 1922.143555,722.422974   C1918.860352,722.487793 1915.375366,723.538940 1912.370972,722.720398   C1910.244141,722.140930 1907.860229,719.429443 1907.212158,717.198792   C1906.171387,713.615723 1907.042847,709.519653 1911.121948,708.097534   C1915.364990,706.618286 1919.947144,706.111816 1925.906128,704.859375   C1923.653320,703.676758 1922.059570,702.090027 1920.667969,702.251038   C1916.595459,702.722046 1912.603516,703.889526 1908.580078,704.784119   C1908.153442,704.139526 1907.726807,703.494995 1907.300171,702.850403   C1908.620850,701.142883 1909.941528,699.435364 1911.585205,697.506653  M1918.021484,714.475647   C1918.618408,717.115601 1920.263916,717.836670 1922.287109,716.190186   C1923.619507,715.105774 1924.377808,713.315857 1925.393188,711.841919   C1924.883301,711.414734 1924.373413,710.987549 1923.863403,710.560364   C1921.936035,711.603088 1920.008667,712.645813 1918.021484,714.475647  z",
                            " M2269.210938,721.369385   C2265.323975,722.085083 2261.779785,722.718506 2258.209473,722.956909   C2254.484863,723.205688 2251.784668,721.194031 2251.132080,717.654663   C2250.425537,713.819031 2250.818359,709.587402 2255.197754,708.075745   C2259.444580,706.609802 2264.023682,706.107544 2270.048828,704.849609   C2267.718750,703.692322 2266.069824,702.130249 2264.607666,702.288818   C2260.528564,702.731201 2256.527100,703.886597 2252.317871,704.798828   C2252.196045,698.685669 2256.881104,695.273987 2264.271973,695.007202   C2269.701416,694.811218 2276.124756,694.736328 2278.673828,699.732788   C2280.879883,704.056641 2279.995361,709.957275 2281.485596,714.760315   C2282.318848,716.636719 2283.892822,718.592590 2283.703613,720.359436   C2283.592285,721.396729 2280.656250,722.887085 2279.025146,722.844543   C2275.851318,722.761902 2272.701660,721.744080 2269.210938,721.369385  M2268.984619,712.511719   C2267.087158,712.451965 2265.151367,712.163452 2263.316162,712.472534   C2262.768799,712.564697 2261.901123,714.796997 2262.237305,715.231567   C2262.894531,716.081787 2264.643066,717.058472 2265.317139,716.724731   C2266.752441,716.014038 2267.790039,714.499268 2268.984619,712.511719  z",
                            " M1974.926270,716.757080   C1974.301636,713.060608 1972.859619,709.586548 1973.420532,706.473389   C1974.902832,698.245544 1981.178223,694.544312 1990.535400,694.955872   C2000.571289,695.397217 2005.471191,702.663452 2003.679443,710.829285   C1997.359497,710.829285 1990.936035,710.829285 1984.512573,710.829285   C1984.246094,711.229614 1983.979492,711.629944 1983.712891,712.030212   C1985.159058,713.336182 1986.482910,715.469727 1988.086914,715.706665   C1989.578247,715.926941 1991.307251,713.978333 1993.045044,713.258728   C1994.545776,712.637207 1996.186279,712.212280 1997.801025,712.042603   C1999.749268,711.837952 2001.735229,711.994202 2003.928589,711.994202   C2004.031494,717.151123 2001.840454,720.330811 1997.468628,721.992615   C1989.318237,725.090637 1980.032837,723.048523 1974.926270,716.757080  M1988.597534,702.020020   C1987.116089,703.058594 1985.634644,704.097107 1983.565918,705.547302   C1987.380127,705.547302 1990.130615,705.547302 1992.880981,705.547302   C1992.977295,705.231628 1993.073608,704.916016 1993.169800,704.600342   C1991.900757,703.761230 1990.631592,702.922180 1988.597534,702.020020  z",
                            " M2197.538086,695.064758   C2207.878418,697.620178 2210.748779,701.438293 2209.526855,710.968140   C2203.167236,710.968140 2196.746094,710.968140 2190.324951,710.968140   C2190.093262,711.378174 2189.861328,711.788147 2189.629395,712.198181   C2191.192627,713.453552 2192.618164,715.390991 2194.363770,715.743103   C2195.699707,716.012573 2197.404053,714.200317 2199.011475,713.459839   C2200.316162,712.858887 2201.690918,712.210876 2203.087158,712.055786   C2205.206299,711.820435 2207.370605,711.994263 2209.474854,711.994263   C2210.331543,718.794434 2206.448242,721.623291 2201.377197,722.668701   C2197.563965,723.454834 2193.338867,723.403931 2189.502197,722.663696   C2182.432373,721.299927 2178.550781,715.536499 2178.997070,708.344604   C2179.478271,700.582031 2184.078613,695.881165 2192.124756,695.047424   C2193.770996,694.876831 2195.449219,695.014771 2197.538086,695.064758  M2198.631836,704.171204   C2195.161865,700.923889 2192.518799,701.551636 2190.032959,706.571289   C2193.470703,705.935059 2196.185303,705.432678 2198.631836,704.171204  z",
                            " M2052.452148,705.135010   C2052.159424,710.744507 2052.159424,716.050598 2052.159424,721.678955   C2048.693604,721.678955 2045.634521,721.678955 2042.281128,721.678955   C2042.281128,713.284485 2042.281128,704.887451 2042.281128,695.334900   C2045.408691,696.180908 2048.167969,697.076965 2050.995605,697.608337   C2051.944336,697.786499 2053.212891,697.255005 2054.087646,696.674561   C2060.693848,692.291199 2071.319092,696.216187 2070.104248,706.537964   C2069.527588,711.437683 2070.005127,716.461426 2070.005127,721.714233   C2066.287598,721.714233 2062.897461,721.714233 2059.541260,721.714233   C2057.235107,715.304626 2061.794922,707.830933 2056.271729,701.535095   C2054.859863,702.854675 2053.802246,703.843140 2052.452148,705.135010  z",
                            " M2137.016602,685.989380   C2138.718506,686.796692 2141.010986,687.580872 2141.029053,688.414551   C2141.269043,699.439392 2141.188965,710.471130 2141.188965,721.757080   C2138.222412,721.757080 2134.842041,721.757080 2131.365234,721.757080   C2131.365234,709.884277 2131.365234,698.205139 2131.365234,685.989319   C2133.339111,685.989319 2134.944580,685.989319 2137.016602,685.989380  z",
                            " M2225.026367,707.315430   C2224.504395,712.283752 2224.017822,716.824341 2223.495605,721.695435   C2220.668701,721.695435 2217.611572,721.695435 2214.270996,721.695435   C2214.270996,713.269470 2214.270996,704.879639 2214.270996,695.793518   C2217.491943,696.117554 2220.513672,696.421570 2223.411865,696.713135   C2226.228027,696.273315 2229.171143,695.813599 2232.114258,695.353882   C2232.515869,698.036499 2232.917725,700.719116 2233.185303,702.506104   C2229.941895,704.255432 2227.501465,705.571594 2225.026367,707.315430  z",
                            " M2036.004761,709.022949   C2036.004761,713.476868 2036.004761,717.438232 2036.004761,721.700684   C2032.319702,721.700684 2028.934692,721.700684 2025.269043,721.700684   C2025.269043,713.279236 2025.269043,704.913757 2025.269043,696.786621   C2025.652832,696.439026 2025.763428,696.248474 2025.895020,696.232422   C2035.762329,695.030701 2036.004517,695.243103 2036.004761,705.041138   C2036.004761,706.204224 2036.004761,707.367249 2036.004761,709.022949  z",
                            " M2237.007812,699.305054   C2238.108154,693.381714 2242.354492,696.742676 2245.098633,696.210266   C2245.804443,696.073303 2247.803955,698.474731 2247.852539,699.761047   C2248.125244,707.008484 2247.984375,714.271423 2247.984375,721.763489   C2244.196533,721.763489 2240.816650,721.763489 2236.996826,721.763489   C2236.996826,714.286194 2236.996826,707.029846 2237.007812,699.305054  z",
                            " M2243.761230,685.976868   C2250.205322,685.881592 2245.675049,690.400330 2248.482666,692.689453   C2243.995850,692.689453 2240.976562,692.689453 2237.595215,692.689453   C2237.595215,690.705872 2237.595215,688.671814 2237.595215,685.976685   C2239.506836,685.976685 2241.413330,685.976685 2243.761230,685.976868  z",
                            " M2033.501709,685.994263   C2034.539429,688.128845 2035.145386,690.249390 2035.868896,692.781677   C2031.838623,692.781677 2028.802979,692.781677 2025.507080,692.781677   C2025.507080,690.631226 2025.507080,688.717163 2025.507080,685.980225   C2027.979370,685.980225 2030.524536,685.980225 2033.501709,685.994263  z",
                            " M900.598572,533.814514   C900.598572,487.520966 900.598572,441.227417 900.598572,394.563660   C928.905151,394.563660 956.770935,394.563660 984.934998,394.563660   C984.934998,489.898834 984.934998,585.118835 984.934998,681.035034   C983.258545,681.035034 981.494995,681.035034 979.731445,681.035034   C957.242432,681.035034 934.737000,680.549561 912.273499,681.306580   C904.732666,681.560730 900.879089,677.157288 896.413635,673.263977   C893.155029,670.422791 891.182251,666.161377 888.283203,662.841431   C882.868347,656.640259 877.063477,650.778992 871.670837,644.559448   C866.577393,638.684998 861.835999,632.506409 856.878540,626.512268   C854.370544,623.479858 851.720581,620.565186 849.146179,617.587402   C840.726868,607.849304 832.394714,598.034180 823.868469,588.390625   C817.994019,581.746277 811.612122,575.540894 805.894775,568.769653   C799.204224,560.845764 792.989136,552.520386 786.213562,543.913208   C785.470825,543.570679 785.082275,543.684143 784.693726,543.797607   C784.591858,545.617493 784.401794,547.437317 784.401062,549.257263   C784.384338,591.066345 784.388123,632.875366 784.388123,674.684448   C784.388123,676.637634 784.388184,678.590759 784.388184,680.786621   C756.155518,680.786621 728.394104,680.786621 700.256775,680.786621   C700.256775,585.495361 700.256775,490.164429 700.256775,394.446472   C701.660095,394.363495 703.105286,394.204468 704.550659,394.203522   C728.203613,394.188019 751.856506,394.199249 775.509460,394.187561   C781.130920,394.184784 784.718445,397.112488 787.047302,401.976776   C787.394226,402.701385 787.914551,403.361298 788.438904,403.979767   C792.045959,408.234497 795.588928,412.548279 799.325317,416.687073   C802.261169,419.939178 805.622070,422.815735 808.468079,426.138458   C811.243958,429.379456 813.545349,433.022186 816.170227,436.399017   C818.098511,438.879639 820.130554,441.291656 822.263916,443.597778   C825.166809,446.735962 828.355652,449.618011 831.152771,452.843292   C833.950562,456.069275 836.421936,459.578888 839.024292,462.973450   C839.519104,463.618866 839.906799,464.350616 840.430908,464.968719   C844.036743,469.221252 847.535278,473.575500 851.329346,477.654266   C854.265503,480.810669 857.728088,483.477844 860.658691,486.638824   C861.918518,487.997681 862.125977,490.301575 863.323303,491.754395   C868.912476,498.536133 874.564453,505.274689 880.432861,511.814331   C883.421997,515.145386 887.201294,517.779907 890.100403,521.175842   C893.046692,524.627075 895.339417,528.634644 897.945557,532.379578   C898.320251,532.917969 898.847351,533.350220 899.705933,534.174805   C900.271484,534.283447 900.435059,534.049011 900.598572,533.814514  z",
                            " M242.318024,393.254242   C245.604889,394.439453 248.454208,395.589691 251.387802,396.453949   C256.986633,398.103333 263.091095,398.708588 268.158112,401.340546   C276.762543,405.809967 284.954315,411.189423 292.898315,416.784424   C302.023743,423.211548 308.839569,431.825195 313.796906,441.855743   C315.943787,446.199707 318.622253,450.387939 320.015869,454.964630   C321.206848,458.875793 320.956024,463.237518 321.252930,467.406403   C321.602234,472.311310 321.854462,477.223083 322.169800,482.483215   C292.924591,482.483215 264.203064,482.483215 235.474152,482.483215   C234.381622,474.294250 232.707825,466.457550 226.227890,460.757202   C220.433548,455.660004 213.751755,452.800842 205.870316,452.959869   C199.691711,453.084564 193.497772,452.723724 187.329071,452.995880   C179.828430,453.326721 172.652878,455.082031 166.619049,459.904510   C157.391159,467.279755 159.838806,480.194122 170.562119,485.166534   C191.605850,494.924561 214.564285,497.057617 236.594574,502.853027   C248.270966,505.924652 259.980133,508.936432 271.491638,512.556580   C294.575714,519.816223 313.247894,533.358643 324.066071,555.204224   C329.843750,566.871399 330.818542,580.353516 329.714996,593.547119   C328.509674,607.957153 325.910583,622.016724 318.937347,635.003601   C313.188019,645.711121 305.512573,654.656311 295.452545,661.344421   C289.104706,665.564636 282.147522,668.856018 275.626312,672.830994   C268.344055,677.269836 260.194336,678.890137 252.093292,680.827759   C246.274612,682.219543 240.611008,684.456848 234.731476,685.339111   C229.339798,686.148071 223.751251,685.627136 218.250092,685.727783   C204.479050,685.979858 190.709030,686.349609 176.937073,686.439575   C173.961746,686.459045 170.969223,685.556519 168.003174,684.982788   C156.594345,682.776123 144.936401,681.384827 133.861526,678.057800   C122.904861,674.766235 112.148163,670.255920 101.995010,664.955994   C79.639206,653.286072 68.371124,633.466370 64.111732,609.309937   C62.678150,601.179626 62.276459,592.867432 61.360722,584.238647   C90.974503,584.238647 119.703835,584.238647 148.496063,584.238647   C149.256454,588.932068 149.807480,593.680481 150.824936,598.326782   C152.808090,607.382874 158.375458,613.416016 167.231110,616.106384   C186.226044,621.877258 205.301636,621.532898 224.315720,616.203125   C231.098526,614.301819 234.957520,609.692993 235.513702,602.522217   C236.054886,595.544678 232.997299,590.043091 226.875244,587.561096   C217.525909,583.770813 207.819077,580.720459 198.064011,578.100769   C173.521988,571.509949 148.781784,565.647278 124.295555,558.862732   C112.140274,555.494873 101.747131,548.436829 92.075020,540.322632   C75.000328,525.998169 67.282501,507.456573 66.541595,485.546844   C65.383980,451.313965 77.562462,424.326538 109.047844,408.208069   C117.585976,403.837128 126.842278,400.885925 135.689514,397.097534   C146.051926,392.660370 157.150467,392.132172 168.078705,391.085022   C179.486801,389.991882 190.983261,389.453644 202.444931,389.392548   C213.360123,389.334320 224.240128,390.478302 234.953293,392.894897   C237.176590,393.396423 239.591782,393.047241 242.318024,393.254242  z",
                            " M478.701385,607.345581   C485.427734,612.521423 492.731354,615.773865 500.760284,616.442749   C507.916290,617.038818 515.304871,617.336731 522.339355,616.204102   C529.530823,615.046204 536.952759,612.983521 543.322083,609.550903   C555.868347,602.789001 562.195923,591.233337 564.187134,577.278442   C564.740234,573.401794 565.037598,569.488708 565.492126,565.217773   C593.606140,565.217773 621.646912,565.217773 650.181885,565.217773   C650.613892,576.831360 649.317261,588.307129 646.755676,599.601685   C643.447876,614.187134 637.431335,627.581848 628.581055,639.762329   C621.715149,649.211670 612.957947,656.455627 603.517334,663.023315   C598.478699,666.528625 593.457764,670.110168 588.129639,673.129211   C584.986145,674.910278 581.258301,675.661011 577.791992,676.871338   C572.392883,678.756714 567.065857,680.903442 561.566528,682.427734   C558.005188,683.414978 554.202271,683.783813 550.488403,683.925049   C532.679199,684.602173 514.864441,685.141846 497.049500,685.653625   C491.243835,685.820374 485.333130,686.434082 479.649170,685.610229   C473.644897,684.739929 467.874237,682.323486 461.964081,680.720337   C455.647369,679.006897 449.032684,678.088135 443.010223,675.670959   C435.536407,672.671204 428.296326,668.891052 421.376892,664.744446   C399.094696,651.391357 384.275848,631.603943 375.384552,607.647583   C371.015808,595.876648 368.793549,583.275635 366.010773,570.957458   C362.117859,553.725159 363.734009,536.205872 364.400604,518.828918   C365.424103,492.147308 372.627350,466.938507 386.836792,444.330994   C394.018188,432.905182 403.482819,423.053040 414.932617,415.195465   C427.267914,406.730225 440.571625,400.570190 454.782715,396.439056   C475.441498,390.433624 496.725037,389.118073 518.131836,389.242401   C522.076111,389.265320 526.276306,391.705566 529.882568,388.104340   C529.964294,388.022705 530.208313,388.068115 530.365845,388.102936   C540.564087,390.357910 550.815308,392.400604 560.947449,394.921783   C583.637817,400.567902 603.802124,410.827789 620.291138,427.800201   C637.563232,445.578766 646.183105,467.192871 648.968750,491.436096   C649.738831,498.137634 650.108643,504.885132 650.689758,511.948181   C620.975037,511.948181 592.052795,511.948181 562.920471,511.948181   C562.046753,506.550842 560.783264,501.173218 560.370300,495.731079   C559.216553,480.526062 541.928284,461.721588 524.247192,459.843140   C513.499512,458.701294 502.885010,457.890167 492.355072,460.932159   C480.259705,464.426239 471.165924,472.135559 466.411194,483.419983   C461.589630,494.862976 457.346863,506.795227 457.959747,519.707458   C458.204346,524.860352 457.851074,530.039062 457.999817,535.199463   C458.403839,549.215393 457.317261,563.188965 461.610474,577.094849   C465.144775,588.542542 468.889221,599.292786 478.701385,607.345581  z",
                            " M900.406128,533.812134   C900.435059,534.049011 900.271484,534.283447 900.021240,534.296387   C899.934448,534.074890 900.213623,533.809814 900.406128,533.812134  z",
                            " M785.020020,543.873291   C785.082275,543.684143 785.470825,543.570679 785.937195,543.724670   C785.792175,543.977783 785.569275,543.963379 785.020020,543.873291  z",
                            " M1878.160522,465.820435   C1886.802490,474.896515 1888.401611,485.237610 1883.796875,496.092194   C1879.153931,507.036652 1870.086792,511.817688 1858.251953,511.750000   C1840.422852,511.648010 1822.592529,511.728912 1804.762817,511.713257   C1803.305908,511.711975 1801.848877,511.566345 1800.187866,511.476776   C1800.187866,493.934174 1800.187866,476.681091 1800.187866,458.881927   C1803.601685,458.881927 1806.880005,458.881866 1810.158447,458.881989   C1826.655151,458.882599 1843.152466,458.966492 1859.648315,458.844574   C1866.655518,458.792816 1872.727295,460.852325 1878.160522,465.820435  z",
                            " M1443.075195,517.206116   C1444.074829,503.434631 1447.109375,490.800812 1454.832275,479.621552   C1465.257080,464.530823 1480.337646,457.913696 1497.942871,457.424561   C1507.282471,457.165039 1517.105957,457.938599 1525.982788,460.639648   C1548.129517,467.378601 1559.405273,484.480164 1562.522705,506.276642   C1565.562500,527.528687 1565.926147,549.185547 1561.906372,570.429138   C1556.612793,598.403748 1535.930298,615.228271 1507.476440,616.085999   C1492.333618,616.542480 1477.822632,614.593933 1465.460693,604.946411   C1452.369141,594.729370 1445.572266,580.662842 1444.196533,564.576111   C1442.866821,549.025757 1443.365234,533.319153 1443.075195,517.206116  z",
                            " M2166.074219,722.629333   C2165.985107,724.252686 2165.694336,726.646423 2165.191650,726.691833   C2162.474854,726.937500 2159.683105,726.756836 2156.969482,726.362854   C2156.239502,726.256836 2155.083252,724.767273 2155.212891,724.136353   C2155.380615,723.316711 2156.605713,722.177124 2157.432617,722.127563   C2160.199707,721.961792 2162.992432,722.220032 2166.074219,722.629333  z",
                            " M2160.960693,700.093018   C2163.808105,701.348206 2166.047852,702.977905 2163.317139,705.694397   C2162.489014,706.517944 2160.179932,705.852844 2158.549316,705.869629   C2159.226807,703.947021 2159.904053,702.024475 2160.960693,700.093018  z",
                            " M2108.157715,709.998352   C2107.094971,709.998962 2106.444580,709.998962 2105.269531,709.998962   C2106.225830,706.617981 2107.098877,703.531433 2108.308105,699.256714   C2109.375977,702.818909 2110.287598,705.115234 2110.641846,707.494690   C2110.748535,708.210266 2109.304199,709.156921 2108.157715,709.998352  z",
                            " M1955.723389,715.668213   C1951.190552,714.017883 1949.266357,707.197266 1952.114868,703.804321   C1953.850952,701.736572 1956.012573,701.647461 1957.838013,703.717224   C1960.251831,706.454407 1959.199951,712.835571 1955.723389,715.668213  z",
                            " M1918.051392,714.082092   C1920.008667,712.645813 1921.936035,711.603088 1923.863403,710.560364   C1924.373413,710.987549 1924.883301,711.414734 1925.393188,711.841919   C1924.377808,713.315857 1923.619507,715.105774 1922.287109,716.190186   C1920.263916,717.836670 1918.618408,717.115601 1918.051392,714.082092  z",
                            " M2268.987793,712.912842   C2267.790039,714.499268 2266.752441,716.014038 2265.317139,716.724731   C2264.643066,717.058472 2262.894531,716.081787 2262.237305,715.231567   C2261.901123,714.796997 2262.768799,712.564697 2263.316162,712.472534   C2265.151367,712.163452 2267.087158,712.451965 2268.987793,712.912842  z",
                            " M1988.979980,702.051514   C1990.631592,702.922180 1991.900757,703.761230 1993.169800,704.600342   C1993.073608,704.916016 1992.977295,705.231628 1992.880981,705.547302   C1990.130615,705.547302 1987.380127,705.547302 1983.565918,705.547302   C1985.634644,704.097107 1987.116089,703.058594 1988.979980,702.051514  z",
                            " M2198.766113,704.550781   C2196.185303,705.432678 2193.470703,705.935059 2190.032959,706.571289   C2192.518799,701.551636 2195.161865,700.923889 2198.766113,704.550781  z"
                          ],
                          stroke: "none",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    })
                })
            }),
            gitHub: e => a.jsx("svg", {
                viewBox: "0 0 438.549 438.549",
                ...e,
                children: a.jsx("path", {
                    fill: "currentColor",
                    d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                })
            }),
            windows: e => a.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 448 512",
                ...e,
                children: a.jsx("path", {
                    fill: "currentColor",
                    d: "M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
                })
            }),
            linux: e => a.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 448 512",
                ...e,
                children: a.jsx("path", {
                    fill: "currentColor",
                    d: "M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"
                })
            }),
            dragon: e => a.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 640 512",
                ...e,
                children: a.jsx("path", {
                    fill: "currentColor",
                    d: "M352 124.5l-51.9-13c-6.5-1.6-11.3-7.1-12-13.8s2.8-13.1 8.7-16.1l40.8-20.4L294.4 28.8c-5.5-4.1-7.8-11.3-5.6-17.9S297.1 0 304 0H416h32 16c30.2 0 58.7 14.2 76.8 38.4l57.6 76.8c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48H538.5c-17 0-33.3-6.7-45.3-18.7L480 160H448v21.5c0 24.8 12.8 47.9 33.8 61.1l106.6 66.6c32.1 20.1 51.6 55.2 51.6 93.1C640 462.9 590.9 512 530.2 512H496 432 32.3c-3.3 0-6.6-.4-9.6-1.4C13.5 507.8 6 501 2.4 492.1C1 488.7 .2 485.2 0 481.4c-.2-3.7 .3-7.3 1.3-10.7c2.8-9.2 9.6-16.7 18.6-20.4c3-1.2 6.2-2 9.5-2.2L433.3 412c8.3-.7 14.7-7.7 14.7-16.1c0-4.3-1.7-8.4-4.7-11.4l-44.4-44.4c-30-30-46.9-70.7-46.9-113.1V181.5v-57zM512 72.3c0-.1 0-.2 0-.3s0-.2 0-.3v.6zm-1.3 7.4L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9c0 13.3 10.7 24 24 24c10.6 0 19.5-6.8 22.7-16.3zM130.9 116.5c16.3-14.5 40.4-16.2 58.5-4.1l130.6 87V227c0 32.8 8.4 64.8 24 93H112c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7L171 232.3 18.4 255.8c-7 1.1-13.9-2.6-16.9-9s-1.5-14.1 3.8-18.8L130.9 116.5z"
                })
            }),
            aciklab: e => a.jsx("svg", {
                id: "svg",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                width: 400,
                height: "54.18326693227091",
                viewBox: "0, 0, 400,54.18326693227091",
                ...e,
                children: a.jsx("g", {
                    id: "svgg",
                    children: a.jsx("path", {
                        id: "path0",
                        d: [
                            " M1429.000000,1201.000000   C952.666687,1201.000000 476.833344,1201.000000 1.000000,1201.000000   C1.000000,801.000000 1.000000,401.000000 1.000000,1.000000   C801.000000,1.000000 1601.000000,1.000000 2401.000000,1.000000   C2401.000000,401.000000 2401.000000,801.000000 2401.000000,1201.000000   C2077.166748,1201.000000 1753.333374,1201.000000 1429.000000,1201.000000  M1021.835022,620.624329   C1010.628357,592.876038 1005.883667,563.916260 1006.092957,534.124329   C1006.154419,525.373962 1007.206421,516.619934 1008.021729,507.887848   C1009.569885,491.305481 1013.057495,475.062836 1019.356995,459.688385   C1023.216003,450.270264 1025.450195,441.050507 1025.148071,430.805786   C1024.617920,412.823273 1025.000854,394.813873 1024.999756,376.815735   C1024.999268,370.004425 1024.997314,370.000580 1018.352295,370.000549   C695.385742,369.999939 372.419189,369.999908 49.452656,370.000793   C43.005798,370.000793 43.000938,370.006195 43.000881,376.511353   C42.999886,492.999298 43.000038,609.487244 43.000450,725.975159   C43.000477,732.997314 43.002468,732.999634 49.938988,732.999634   C239.086060,733.000061 428.233124,733.000000 617.380188,733.000000   C751.033020,733.000000 884.685852,733.000183 1018.338684,732.999451   C1024.997192,732.999390 1024.999512,732.995667 1024.999634,726.197815   C1025.000488,695.201050 1025.101562,664.203491 1024.874023,633.208374   C1024.844849,629.243713 1023.100525,625.291687 1021.835022,620.624329  M1764.500000,680.036926   C1776.254517,680.036926 1788.009155,680.036926 1800.240479,680.036926   C1800.240479,644.779236 1800.240479,610.222229 1800.240479,575.370605   C1810.375000,575.370605 1820.026123,575.544800 1829.665039,575.276917   C1833.073364,575.182129 1834.608276,576.430908 1836.024414,579.365906   C1851.560303,611.564270 1867.295898,643.666382 1882.789917,675.884705   C1884.327637,679.082397 1886.028931,680.133850 1889.518677,680.118286   C1920.850464,679.978882 1952.183105,680.036926 1983.515503,680.036926   C1984.904541,680.036926 1986.293701,680.036926 1988.311401,680.036926   C1966.868286,639.657837 1945.842163,600.064148 1924.692993,560.238647   C1925.763550,559.712646 1926.468384,559.314453 1927.211304,559.008911   C1958.196045,546.263062 1976.121582,523.208618 1979.397339,489.967621   C1982.208740,461.439087 1973.979004,436.140747 1952.170166,416.505768   C1932.796753,399.063385 1909.116577,393.325775 1883.789795,393.260895   C1826.958618,393.115326 1770.126709,393.215271 1713.295166,393.215271   C1711.670288,393.215271 1710.045288,393.215271 1708.223389,393.215271   C1708.223389,489.058655 1708.223389,584.420654 1708.223389,680.036926   C1726.874390,680.036926 1745.187256,680.036926 1764.500000,680.036926  M1445.535522,677.984924   C1482.719116,687.301025 1520.113525,687.966370 1557.287476,678.821594   C1605.138672,667.050232 1637.922729,638.328613 1651.558594,590.118774   C1660.222168,559.488098 1660.592285,528.203613 1654.787720,497.058746   C1645.591187,447.715424 1617.533325,413.682098 1569.468262,398.133972   C1526.338257,384.182220 1482.397339,384.252136 1439.123657,397.421570   C1396.026123,410.537354 1367.602173,439.283875 1355.436279,483.042755   C1347.325439,512.216003 1346.928955,541.951477 1351.392334,571.716003   C1354.924316,595.270020 1363.112183,617.083313 1378.296509,635.838928   C1395.695801,657.330139 1418.514893,670.277527 1445.535522,677.984924  M2088.500000,680.037720   C2153.107178,680.037720 2217.714600,680.037720 2282.376465,680.037720   C2282.376465,656.801147 2282.376465,634.098816 2282.376465,610.942993   C2229.395508,610.942993 2176.822510,610.942993 2124.358398,610.942993   C2124.358398,596.262695 2124.358398,582.043457 2124.358398,567.327026   C2168.802490,567.327026 2212.864502,567.327026 2256.905273,567.327026   C2256.905273,545.236572 2256.905273,523.653503 2256.905273,501.600586   C2212.508789,501.600586 2168.429199,501.600586 2124.274414,501.600586   C2124.274414,488.222351 2124.274414,475.319305 2124.274414,461.849792   C2176.275879,461.849792 2227.980469,461.849792 2279.531738,461.849792   C2279.531738,438.706787 2279.531738,416.135193 2279.531738,393.462036   C2196.916016,393.462036 2114.661377,393.462036 2032.224121,393.462036   C2032.224121,489.068817 2032.224121,584.427429 2032.224121,680.037720   C2050.875977,680.037720 2069.187988,680.037720 2088.500000,680.037720  M1300.461182,563.836670   C1275.868408,563.836670 1251.275635,563.836670 1226.441650,563.836670   C1226.328857,565.618469 1226.249023,566.756470 1226.186035,567.895386   C1224.631592,596.022827 1210.535278,612.140991 1182.670288,615.516541   C1152.669678,619.150879 1127.905151,609.846252 1121.086792,571.170410   C1116.966553,547.799805 1117.324951,523.975159 1121.207397,500.534882   C1125.567627,474.210297 1140.526855,460.046906 1166.292603,457.468079   C1193.880005,454.706940 1214.856201,466.347992 1221.588989,494.073700   C1222.909180,499.510071 1223.142456,505.210419 1223.890381,510.891541   C1252.990356,510.891541 1282.047485,510.891541 1311.103149,510.891541   C1311.103149,507.584991 1311.203735,504.606720 1311.088013,501.636810   C1309.089233,450.309814 1281.319458,412.696075 1232.395508,397.058044   C1192.254395,384.227325 1151.548218,384.967102 1111.400024,397.095245   C1070.285400,409.515320 1043.783691,437.357697 1032.287476,478.555695   C1021.696411,516.509583 1021.654480,554.963989 1031.845947,593.056274   C1043.574463,636.893616 1071.887329,665.017761 1115.381470,677.602295   C1142.951294,685.579407 1171.188110,686.604431 1199.568726,683.667480   C1222.143555,681.331177 1243.746704,675.505432 1263.027222,662.994812   C1298.861450,639.742920 1311.125244,604.984131 1311.374390,563.836670   C1307.718262,563.836670 1304.581177,563.836670 1300.461182,563.836670  M1900.334473,687.995850   C1896.353271,687.995850 1892.371948,687.995850 1888.418823,687.995850   C1886.563965,693.822266 1884.801392,699.358643 1882.838013,705.526001   C1880.878174,699.154114 1879.199585,693.696533 1877.516235,688.223755   C1872.304565,688.223755 1867.376465,688.223755 1862.253662,688.223755   C1862.253662,699.507812 1862.253662,710.561462 1862.253662,721.710083   C1865.910400,721.710083 1869.301758,721.710083 1872.945801,721.710083   C1872.945801,717.143250 1872.945801,712.863586 1872.945801,708.583984   C1873.129517,708.554199 1873.313232,708.524414 1873.496948,708.494629   C1874.790649,712.917358 1876.084473,717.340027 1877.449341,722.005554   C1878.492188,722.005554 1879.517456,721.828735 1880.458984,722.034729   C1885.898315,723.224548 1888.179077,720.509338 1889.032104,715.543945   C1889.555176,712.500122 1890.520020,709.532227 1891.286377,706.530212   C1891.575439,706.586121 1891.864502,706.642090 1892.153564,706.697998   C1892.153564,711.648987 1892.153564,716.599976 1892.153564,721.745117   C1896.166504,721.745117 1899.890015,721.745117 1903.163696,721.745117   C1903.163696,710.903748 1903.193481,700.326355 1903.083740,689.750427   C1903.077759,689.163574 1901.915283,688.588684 1900.334473,687.995850  M2175.005127,703.505310   C2174.461914,701.541626 2173.918701,699.577881 2173.465576,697.939514   C2174.944824,695.896423 2176.527344,693.710693 2178.666504,690.756165   C2173.657471,690.483032 2170.077637,689.281982 2167.576660,693.528137   C2166.943848,694.602661 2164.391113,694.617126 2162.690918,694.978577   C2158.684814,695.830200 2154.433105,696.036682 2150.704102,697.548035   C2146.537354,699.236572 2146.061768,702.870605 2148.294922,706.942566   C2148.859619,707.972229 2149.287842,710.023682 2148.746094,710.556763   C2145.633057,713.620972 2145.382568,716.687317 2148.207031,719.982544   C2147.601318,720.719421 2146.956055,721.162109 2146.821533,721.726501   C2146.207520,724.303833 2144.734131,727.292297 2145.525879,729.397217   C2146.179199,731.133484 2149.506592,732.653992 2151.767090,732.840820   C2157.552002,733.318909 2163.405029,733.106567 2169.226318,732.967834   C2174.423340,732.843872 2178.124512,728.566467 2178.005371,723.144775   C2177.888428,717.819641 2174.864014,715.006592 2169.236572,714.995056   C2166.573975,714.989624 2163.904785,715.107849 2161.251953,714.946350   C2159.897461,714.864014 2158.572998,714.287781 2157.235107,713.934753   C2157.301758,713.291626 2157.368408,712.648560 2157.435303,712.005493   C2160.282471,712.005493 2163.132080,712.078125 2165.976807,711.989746   C2171.266113,711.825439 2173.947266,709.507507 2175.005127,703.505310  M2094.623047,722.005737   C2097.052734,721.450439 2101.209961,721.472656 2101.621094,720.242615   C2103.701416,714.020142 2108.416992,717.846558 2111.736572,717.263916   C2112.924072,717.055481 2114.621582,719.750366 2116.880615,721.863098   C2119.491699,721.863098 2123.455322,721.863098 2128.046631,721.863098   C2123.635986,710.441040 2119.315674,699.252625 2114.968750,687.995361   C2111.287598,687.995361 2107.965820,687.865234 2104.664307,688.068604   C2103.565186,688.136292 2101.881104,688.800110 2101.545166,689.629333   C2097.248047,700.231873 2093.147217,710.914001 2088.829590,722.005798   C2091.091553,722.005798 2092.416016,722.005798 2094.623047,722.005737  M1942.017212,699.865295   C1941.344482,702.527649 1940.381958,705.154541 1940.050537,707.858765   C1938.797119,718.088074 1944.670898,724.110779 1954.739380,722.950378   C1956.729858,722.721008 1958.630981,721.325256 1960.588501,721.289124   C1963.584595,721.233765 1966.593994,721.892395 1969.317017,722.214783   C1969.317017,709.754944 1969.317017,698.066650 1969.317017,686.392456   C1965.579590,686.392456 1962.547241,686.392456 1959.186279,686.392456   C1959.186279,690.076843 1959.186279,693.362671 1959.186279,697.145386   C1952.748169,693.528809 1947.300049,694.669983 1942.017212,699.865295  M1911.262207,697.727905   C1909.941528,699.435364 1908.620850,701.142883 1907.300171,702.850403   C1907.726807,703.494995 1908.153442,704.139526 1908.580078,704.784119   C1912.603516,703.889526 1916.595459,702.722046 1920.667969,702.251038   C1922.059570,702.090027 1923.653320,703.676758 1925.906128,704.859375   C1919.947144,706.111816 1915.364990,706.618286 1911.121948,708.097534   C1907.042847,709.519653 1906.171387,713.615723 1907.212158,717.198792   C1907.860229,719.429443 1910.244141,722.140930 1912.370972,722.720398   C1915.375366,723.538940 1918.860352,722.487793 1922.143555,722.422974   C1924.529541,722.375916 1927.051880,722.184570 1929.286743,722.835449   C1936.319458,724.883423 1940.148071,722.780212 1939.803833,716.571899   C1938.545288,716.151489 1937.256714,715.720947 1936.004761,715.302734   C1936.004761,712.445679 1936.004761,709.946899 1936.004761,707.448181   C1936.004761,698.686829 1933.267822,695.380249 1924.489502,695.158630   C1920.316284,695.053284 1916.103271,696.527039 1911.262207,697.727905  M2269.541992,721.113647   C2272.701660,721.744080 2275.851318,722.761902 2279.025146,722.844543   C2280.656250,722.887085 2283.592285,721.396729 2283.703613,720.359436   C2283.892822,718.592590 2282.318848,716.636719 2281.485596,714.760315   C2279.995361,709.957275 2280.879883,704.056641 2278.673828,699.732788   C2276.124756,694.736328 2269.701416,694.811218 2264.271973,695.007202   C2256.881104,695.273987 2252.196045,698.685669 2252.317871,704.798828   C2256.527100,703.886597 2260.528564,702.731201 2264.607666,702.288818   C2266.069824,702.130249 2267.718750,703.692322 2270.048828,704.849609   C2264.023682,706.107544 2259.444580,706.609802 2255.197754,708.075745   C2250.818359,709.587402 2250.425537,713.819031 2251.132080,717.654663   C2251.784668,721.194031 2254.484863,723.205688 2258.209473,722.956909   C2261.779785,722.718506 2265.323975,722.085083 2269.541992,721.113647  M1975.021729,717.143982   C1980.032837,723.048523 1989.318237,725.090637 1997.468628,721.992615   C2001.840454,720.330811 2004.031494,717.151123 2003.928589,711.994202   C2001.735229,711.994202 1999.749268,711.837952 1997.801025,712.042603   C1996.186279,712.212280 1994.545776,712.637207 1993.045044,713.258728   C1991.307251,713.978333 1989.578247,715.926941 1988.086914,715.706665   C1986.482910,715.469727 1985.159058,713.336182 1983.712891,712.030212   C1983.979492,711.629944 1984.246094,711.229614 1984.512573,710.829285   C1990.936035,710.829285 1997.359497,710.829285 2003.679443,710.829285   C2005.471191,702.663452 2000.571289,695.397217 1990.535400,694.955872   C1981.178223,694.544312 1974.902832,698.245544 1973.420532,706.473389   C1972.859619,709.586548 1974.301636,713.060608 1975.021729,717.143982  M2197.112549,695.010437   C2195.449219,695.014771 2193.770996,694.876831 2192.124756,695.047424   C2184.078613,695.881165 2179.478271,700.582031 2178.997070,708.344604   C2178.550781,715.536499 2182.432373,721.299927 2189.502197,722.663696   C2193.338867,723.403931 2197.563965,723.454834 2201.377197,722.668701   C2206.448242,721.623291 2210.331543,718.794434 2209.474854,711.994263   C2207.370605,711.994263 2205.206299,711.820435 2203.087158,712.055786   C2201.690918,712.210876 2200.316162,712.858887 2199.011475,713.459839   C2197.404053,714.200317 2195.699707,716.012573 2194.363770,715.743103   C2192.618164,715.390991 2191.192627,713.453552 2189.629395,712.198181   C2189.861328,711.788147 2190.093262,711.378174 2190.324951,710.968140   C2196.746094,710.968140 2203.167236,710.968140 2209.526855,710.968140   C2210.748779,701.438293 2207.878418,697.620178 2197.112549,695.010437  M2052.744629,704.831604   C2053.802246,703.843140 2054.859863,702.854675 2056.271729,701.535095   C2061.794922,707.830933 2057.235107,715.304626 2059.541260,721.714233   C2062.897461,721.714233 2066.287598,721.714233 2070.005127,721.714233   C2070.005127,716.461426 2069.527588,711.437683 2070.104248,706.537964   C2071.319092,696.216187 2060.693848,692.291199 2054.087646,696.674561   C2053.212891,697.255005 2051.944336,697.786499 2050.995605,697.608337   C2048.167969,697.076965 2045.408691,696.180908 2042.281128,695.334900   C2042.281128,704.887451 2042.281128,713.284485 2042.281128,721.678955   C2045.634521,721.678955 2048.693604,721.678955 2052.159424,721.678955   C2052.159424,716.050598 2052.159424,710.744507 2052.744629,704.831604  M2136.550049,685.989319   C2134.944580,685.989319 2133.339111,685.989319 2131.365234,685.989319   C2131.365234,698.205139 2131.365234,709.884277 2131.365234,721.757080   C2134.842041,721.757080 2138.222412,721.757080 2141.188965,721.757080   C2141.188965,710.471130 2141.269043,699.439392 2141.029053,688.414551   C2141.010986,687.580872 2138.718506,686.796692 2136.550049,685.989319  M2225.061279,706.887695   C2227.501465,705.571594 2229.941895,704.255432 2233.185303,702.506104   C2232.917725,700.719116 2232.515869,698.036499 2232.114258,695.353943   C2229.171143,695.813599 2226.228027,696.273315 2223.411865,696.713135   C2220.513672,696.421570 2217.491943,696.117554 2214.270996,695.793518   C2214.270996,704.879639 2214.270996,713.269470 2214.270996,721.695435   C2217.611572,721.695435 2220.668701,721.695435 2223.495605,721.695435   C2224.017822,716.824341 2224.504395,712.283752 2225.061279,706.887695  M2036.004761,708.530334   C2036.004761,707.367249 2036.004761,706.204224 2036.004761,705.041138   C2036.004517,695.243103 2035.762329,695.030701 2025.895020,696.232422   C2025.763428,696.248474 2025.652832,696.439026 2025.269043,696.786621   C2025.269043,704.913757 2025.269043,713.279236 2025.269043,721.700684   C2028.934692,721.700684 2032.319702,721.700684 2036.004761,721.700684   C2036.004761,717.438232 2036.004761,713.476868 2036.004761,708.530334  M2236.996826,699.773499   C2236.996826,707.029846 2236.996826,714.286194 2236.996826,721.763489   C2240.816650,721.763489 2244.196533,721.763489 2247.984375,721.763489   C2247.984375,714.271423 2248.125244,707.008484 2247.852539,699.761047   C2247.803955,698.474731 2245.804443,696.073303 2245.098633,696.210266   C2242.354492,696.742676 2238.108154,693.381714 2236.996826,699.773499  M2243.319580,685.976685   C2241.413330,685.976685 2239.506836,685.976685 2237.595215,685.976685   C2237.595215,688.671814 2237.595215,690.705872 2237.595215,692.689453   C2240.976562,692.689453 2243.995850,692.689453 2248.482666,692.689453   C2245.675049,690.400330 2250.205322,685.881592 2243.319580,685.976685  M2033.069702,685.980225   C2030.524536,685.980225 2027.979370,685.980225 2025.507080,685.980225   C2025.507080,688.717163 2025.507080,690.631226 2025.507080,692.781677   C2028.802979,692.781677 2031.838623,692.781677 2035.868896,692.781677   C2035.145386,690.249390 2034.539429,688.128845 2033.069702,685.980225  z",
                            " M1021.992920,620.979065   C1023.100525,625.291687 1024.844849,629.243713 1024.874023,633.208374   C1025.101562,664.203491 1025.000488,695.201050 1024.999634,726.197815   C1024.999512,732.995667 1024.997192,732.999390 1018.338684,732.999451   C884.685852,733.000183 751.033020,733.000000 617.380188,733.000000   C428.233124,733.000000 239.086060,733.000061 49.938988,732.999634   C43.002468,732.999634 43.000477,732.997314 43.000450,725.975159   C43.000038,609.487244 42.999886,492.999298 43.000881,376.511353   C43.000938,370.006195 43.005798,370.000793 49.452656,370.000793   C372.419189,369.999908 695.385742,369.999939 1018.352295,370.000549   C1024.997314,370.000580 1024.999268,370.004425 1024.999756,376.815735   C1025.000854,394.813873 1024.617920,412.823273 1025.148071,430.805786   C1025.450195,441.050507 1023.216003,450.270264 1019.356995,459.688385   C1013.057495,475.062836 1009.569885,491.305481 1008.021729,507.887848   C1007.206421,516.619934 1006.154419,525.373962 1006.092957,534.124329   C1005.883667,563.916260 1010.628357,592.876038 1021.992920,620.979065  M786.567749,544.369141   C792.989136,552.520386 799.204224,560.845764 805.894775,568.769653   C811.612122,575.540894 817.994019,581.746277 823.868469,588.390625   C832.394714,598.034180 840.726868,607.849304 849.146179,617.587402   C851.720581,620.565186 854.370544,623.479858 856.878540,626.512268   C861.835999,632.506409 866.577393,638.684998 871.670837,644.559448   C877.063477,650.778992 882.868347,656.640259 888.283203,662.841431   C891.182251,666.161377 893.155029,670.422791 896.413635,673.263977   C900.879089,677.157288 904.732666,681.560730 912.273499,681.306580   C934.737000,680.549561 957.242432,681.035034 979.731445,681.035034   C981.494995,681.035034 983.258545,681.035034 984.934998,681.035034   C984.934998,585.118835 984.934998,489.898834 984.934998,394.563660   C956.770935,394.563660 928.905151,394.563660 900.598572,394.563660   C900.598572,441.227417 900.598572,487.520966 900.213623,533.809814   C900.213623,533.809814 899.934448,534.074890 899.303894,533.831604   C898.847351,533.350220 898.320251,532.917969 897.945557,532.379578   C895.339417,528.634644 893.046692,524.627075 890.100403,521.175842   C887.201294,517.779907 883.421997,515.145386 880.432861,511.814331   C874.564453,505.274689 868.912476,498.536133 863.323303,491.754395   C862.125977,490.301575 861.918518,487.997681 860.658691,486.638824   C857.728088,483.477844 854.265503,480.810669 851.329346,477.654266   C847.535278,473.575500 844.036743,469.221252 840.430908,464.968719   C839.906799,464.350616 839.519104,463.618866 839.024292,462.973450   C836.421936,459.578888 833.950562,456.069275 831.152771,452.843292   C828.355652,449.618011 825.166809,446.735962 822.263916,443.597778   C820.130554,441.291656 818.098511,438.879639 816.170227,436.399017   C813.545349,433.022186 811.243958,429.379456 808.468079,426.138458   C805.622070,422.815735 802.261169,419.939178 799.325317,416.687073   C795.588928,412.548279 792.045959,408.234497 788.438904,403.979767   C787.914551,403.361298 787.394226,402.701385 787.047302,401.976776   C784.718445,397.112488 781.130920,394.184784 775.509460,394.187561   C751.856506,394.199249 728.203613,394.188019 704.550659,394.203522   C703.105286,394.204468 701.660095,394.363495 700.256775,394.446472   C700.256775,490.164429 700.256775,585.495361 700.256775,680.786621   C728.394104,680.786621 756.155518,680.786621 784.388184,680.786621   C784.388184,678.590759 784.388123,676.637634 784.388123,674.684448   C784.388123,632.875366 784.384338,591.066345 784.401062,549.257263   C784.401794,547.437317 784.591858,545.617493 785.346375,543.949036   C785.569275,543.963379 785.792175,543.977783 786.567749,544.369141  M241.918533,393.090118   C239.591782,393.047241 237.176590,393.396423 234.953293,392.894897   C224.240128,390.478302 213.360123,389.334320 202.444931,389.392548   C190.983261,389.453644 179.486801,389.991882 168.078705,391.085022   C157.150467,392.132172 146.051926,392.660370 135.689514,397.097534   C126.842278,400.885925 117.585976,403.837128 109.047844,408.208069   C77.562462,424.326538 65.383980,451.313965 66.541595,485.546844   C67.282501,507.456573 75.000328,525.998169 92.075020,540.322632   C101.747131,548.436829 112.140274,555.494873 124.295555,558.862732   C148.781784,565.647278 173.521988,571.509949 198.064011,578.100769   C207.819077,580.720459 217.525909,583.770813 226.875244,587.561096   C232.997299,590.043091 236.054886,595.544678 235.513702,602.522217   C234.957520,609.692993 231.098526,614.301819 224.315720,616.203125   C205.301636,621.532898 186.226044,621.877258 167.231110,616.106384   C158.375458,613.416016 152.808090,607.382874 150.824936,598.326782   C149.807480,593.680481 149.256454,588.932068 148.496063,584.238647   C119.703835,584.238647 90.974503,584.238647 61.360722,584.238647   C62.276459,592.867432 62.678150,601.179626 64.111732,609.309937   C68.371124,633.466370 79.639206,653.286072 101.995010,664.955994   C112.148163,670.255920 122.904861,674.766235 133.861526,678.057800   C144.936401,681.384827 156.594345,682.776123 168.003174,684.982788   C170.969223,685.556519 173.961746,686.459045 176.937073,686.439575   C190.709030,686.349609 204.479050,685.979858 218.250092,685.727783   C223.751251,685.627136 229.339798,686.148071 234.731476,685.339111   C240.611008,684.456848 246.274612,682.219543 252.093292,680.827759   C260.194336,678.890137 268.344055,677.269836 275.626312,672.830994   C282.147522,668.856018 289.104706,665.564636 295.452545,661.344421   C305.512573,654.656311 313.188019,645.711121 318.937347,635.003601   C325.910583,622.016724 328.509674,607.957153 329.714996,593.547119   C330.818542,580.353516 329.843750,566.871399 324.066071,555.204224   C313.247894,533.358643 294.575714,519.816223 271.491638,512.556580   C259.980133,508.936432 248.270966,505.924652 236.594574,502.853027   C214.564285,497.057617 191.605850,494.924561 170.562119,485.166534   C159.838806,480.194122 157.391159,467.279755 166.619049,459.904510   C172.652878,455.082031 179.828430,453.326721 187.329071,452.995880   C193.497772,452.723724 199.691711,453.084564 205.870316,452.959869   C213.751755,452.800842 220.433548,455.660004 226.227890,460.757202   C232.707825,466.457550 234.381622,474.294250 235.474152,482.483215   C264.203064,482.483215 292.924591,482.483215 322.169800,482.483215   C321.854462,477.223083 321.602234,472.311310 321.252930,467.406403   C320.956024,463.237518 321.206848,458.875793 320.015869,454.964630   C318.622253,450.387939 315.943787,446.199707 313.796906,441.855743   C308.839569,431.825195 302.023743,423.211548 292.898315,416.784424   C284.954315,411.189423 276.762543,405.809967 268.158112,401.340546   C263.091095,398.708588 256.986633,398.103333 251.387802,396.453949   C248.454208,395.589691 245.604889,394.439453 241.918533,393.090118  M478.429047,607.116272   C468.889221,599.292786 465.144775,588.542542 461.610474,577.094849   C457.317261,563.188965 458.403839,549.215393 457.999817,535.199463   C457.851074,530.039062 458.204346,524.860352 457.959747,519.707458   C457.346863,506.795227 461.589630,494.862976 466.411194,483.419983   C471.165924,472.135559 480.259705,464.426239 492.355072,460.932159   C502.885010,457.890167 513.499512,458.701294 524.247192,459.843140   C541.928284,461.721588 559.216553,480.526062 560.370300,495.731079   C560.783264,501.173218 562.046753,506.550842 562.920471,511.948181   C592.052795,511.948181 620.975037,511.948181 650.689758,511.948181   C650.108643,504.885132 649.738831,498.137634 648.968750,491.436096   C646.183105,467.192871 637.563232,445.578766 620.291138,427.800201   C603.802124,410.827789 583.637817,400.567902 560.947449,394.921783   C550.815308,392.400604 540.564087,390.357910 530.365845,388.102936   C530.208313,388.068115 529.964294,388.022705 529.882568,388.104340   C526.276306,391.705566 522.076111,389.265320 518.131836,389.242401   C496.725037,389.118073 475.441498,390.433624 454.782715,396.439056   C440.571625,400.570190 427.267914,406.730225 414.932617,415.195465   C403.482819,423.053040 394.018188,432.905182 386.836792,444.330994   C372.627350,466.938507 365.424103,492.147308 364.400604,518.828918   C363.734009,536.205872 362.117859,553.725159 366.010773,570.957458   C368.793549,583.275635 371.015808,595.876648 375.384552,607.647583   C384.275848,631.603943 399.094696,651.391357 421.376892,664.744446   C428.296326,668.891052 435.536407,672.671204 443.010223,675.670959   C449.032684,678.088135 455.647369,679.006897 461.964081,680.720337   C467.874237,682.323486 473.644897,684.739929 479.649170,685.610229   C485.333130,686.434082 491.243835,685.820374 497.049500,685.653625   C514.864441,685.141846 532.679199,684.602173 550.488403,683.925049   C554.202271,683.783813 558.005188,683.414978 561.566528,682.427734   C567.065857,680.903442 572.392883,678.756714 577.791992,676.871338   C581.258301,675.661011 584.986145,674.910278 588.129639,673.129211   C593.457764,670.110168 598.478699,666.528625 603.517334,663.023315   C612.957947,656.455627 621.715149,649.211670 628.581055,639.762329   C637.431335,627.581848 643.447876,614.187134 646.755676,599.601685   C649.317261,588.307129 650.613892,576.831360 650.181885,565.217773   C621.646912,565.217773 593.606140,565.217773 565.492126,565.217773   C565.037598,569.488708 564.740234,573.401794 564.187134,577.278442   C562.195923,591.233337 555.868347,602.789001 543.322083,609.550903   C536.952759,612.983521 529.530823,615.046204 522.339355,616.204102   C515.304871,617.336731 507.916290,617.038818 500.760284,616.442749   C492.731354,615.773865 485.427734,612.521423 478.429047,607.116272  z",
                            " M1764.000000,680.036926   C1745.187256,680.036926 1726.874390,680.036926 1708.223389,680.036926   C1708.223389,584.420654 1708.223389,489.058655 1708.223389,393.215271   C1710.045288,393.215271 1711.670288,393.215271 1713.295166,393.215271   C1770.126709,393.215271 1826.958618,393.115326 1883.789795,393.260895   C1909.116577,393.325775 1932.796753,399.063385 1952.170166,416.505768   C1973.979004,436.140747 1982.208740,461.439087 1979.397339,489.967621   C1976.121582,523.208618 1958.196045,546.263062 1927.211304,559.008911   C1926.468384,559.314453 1925.763550,559.712646 1924.692993,560.238647   C1945.842163,600.064148 1966.868286,639.657837 1988.311401,680.036926   C1986.293701,680.036926 1984.904541,680.036926 1983.515503,680.036926   C1952.183105,680.036926 1920.850464,679.978882 1889.518677,680.118286   C1886.028931,680.133850 1884.327637,679.082397 1882.789917,675.884705   C1867.295898,643.666382 1851.560303,611.564270 1836.024414,579.365906   C1834.608276,576.430908 1833.073364,575.182129 1829.665039,575.276917   C1820.026123,575.544800 1810.375000,575.370605 1800.240479,575.370605   C1800.240479,610.222229 1800.240479,644.779236 1800.240479,680.036926   C1788.009155,680.036926 1776.254517,680.036926 1764.000000,680.036926  M1877.896118,465.574493   C1872.727295,460.852325 1866.655518,458.792816 1859.648315,458.844574   C1843.152466,458.966492 1826.655151,458.882599 1810.158447,458.881989   C1806.880005,458.881866 1803.601685,458.881927 1800.187866,458.881927   C1800.187866,476.681091 1800.187866,493.934174 1800.187866,511.476776   C1801.848877,511.566345 1803.305908,511.711975 1804.762817,511.713257   C1822.592529,511.728912 1840.422852,511.648010 1858.251953,511.750000   C1870.086792,511.817688 1879.153931,507.036652 1883.796875,496.092194   C1888.401611,485.237610 1886.802490,474.896515 1877.896118,465.574493  z",
                            " M1445.136108,677.904663   C1418.514893,670.277527 1395.695801,657.330139 1378.296509,635.838928   C1363.112183,617.083313 1354.924316,595.270020 1351.392334,571.716003   C1346.928955,541.951477 1347.325439,512.216003 1355.436279,483.042755   C1367.602173,439.283875 1396.026123,410.537354 1439.123657,397.421570   C1482.397339,384.252136 1526.338257,384.182220 1569.468262,398.133972   C1617.533325,413.682098 1645.591187,447.715424 1654.787720,497.058746   C1660.592285,528.203613 1660.222168,559.488098 1651.558594,590.118774   C1637.922729,638.328613 1605.138672,667.050232 1557.287476,678.821594   C1520.113525,687.966370 1482.719116,687.301025 1445.136108,677.904663  M1443.060547,517.681152   C1443.365234,533.319153 1442.866821,549.025757 1444.196533,564.576111   C1445.572266,580.662842 1452.369141,594.729370 1465.460693,604.946411   C1477.822632,614.593933 1492.333618,616.542480 1507.476440,616.085999   C1535.930298,615.228271 1556.612793,598.403748 1561.906372,570.429138   C1565.926147,549.185547 1565.562500,527.528687 1562.522705,506.276642   C1559.405273,484.480164 1548.129517,467.378601 1525.982788,460.639648   C1517.105957,457.938599 1507.282471,457.165039 1497.942871,457.424561   C1480.337646,457.913696 1465.257080,464.530823 1454.832275,479.621552   C1447.109375,490.800812 1444.074829,503.434631 1443.060547,517.681152  z",
                            " M2088.000000,680.037720   C2069.187988,680.037720 2050.875977,680.037720 2032.224121,680.037720   C2032.224121,584.427429 2032.224121,489.068817 2032.224121,393.462036   C2114.661377,393.462036 2196.916016,393.462036 2279.531738,393.462036   C2279.531738,416.135193 2279.531738,438.706787 2279.531738,461.849792   C2227.980469,461.849792 2176.275879,461.849792 2124.274414,461.849792   C2124.274414,475.319305 2124.274414,488.222351 2124.274414,501.600586   C2168.429199,501.600586 2212.508789,501.600586 2256.905273,501.600586   C2256.905273,523.653503 2256.905273,545.236572 2256.905273,567.327026   C2212.864502,567.327026 2168.802490,567.327026 2124.358398,567.327026   C2124.358398,582.043457 2124.358398,596.262695 2124.358398,610.942993   C2176.822510,610.942993 2229.395508,610.942993 2282.376465,610.942993   C2282.376465,634.098816 2282.376465,656.801147 2282.376465,680.037720   C2217.714600,680.037720 2153.107178,680.037720 2088.000000,680.037720  z",
                            " M1300.952637,563.836670   C1304.581177,563.836670 1307.718262,563.836670 1311.374390,563.836670   C1311.125244,604.984131 1298.861450,639.742920 1263.027222,662.994812   C1243.746704,675.505432 1222.143555,681.331177 1199.568726,683.667480   C1171.188110,686.604431 1142.951294,685.579407 1115.381470,677.602295   C1071.887329,665.017761 1043.574463,636.893616 1031.845947,593.056274   C1021.654480,554.963989 1021.696411,516.509583 1032.287476,478.555695   C1043.783691,437.357697 1070.285400,409.515320 1111.400024,397.095245   C1151.548218,384.967102 1192.254395,384.227325 1232.395508,397.058044   C1281.319458,412.696075 1309.089233,450.309814 1311.088013,501.636810   C1311.203735,504.606720 1311.103149,507.584991 1311.103149,510.891541   C1282.047485,510.891541 1252.990356,510.891541 1223.890381,510.891541   C1223.142456,505.210419 1222.909180,499.510071 1221.588989,494.073700   C1214.856201,466.347992 1193.880005,454.706940 1166.292603,457.468079   C1140.526855,460.046906 1125.567627,474.210297 1121.207397,500.534882   C1117.324951,523.975159 1116.966553,547.799805 1121.086792,571.170410   C1127.905151,609.846252 1152.669678,619.150879 1182.670288,615.516541   C1210.535278,612.140991 1224.631592,596.022827 1226.186035,567.895386   C1226.249023,566.756470 1226.328857,565.618469 1226.441650,563.836670   C1251.275635,563.836670 1275.868408,563.836670 1300.952637,563.836670  z",
                            " M1900.812744,688.002075   C1901.915283,688.588684 1903.077759,689.163574 1903.083740,689.750427   C1903.193481,700.326355 1903.163696,710.903748 1903.163696,721.745117   C1899.890015,721.745117 1896.166504,721.745117 1892.153564,721.745117   C1892.153564,716.599976 1892.153564,711.648987 1892.153564,706.697998   C1891.864502,706.642090 1891.575439,706.586121 1891.286377,706.530212   C1890.520020,709.532227 1889.555176,712.500122 1889.032104,715.543945   C1888.179077,720.509338 1885.898315,723.224548 1880.458984,722.034729   C1879.517456,721.828735 1878.492188,722.005554 1877.449341,722.005554   C1876.084473,717.340027 1874.790649,712.917358 1873.496948,708.494629   C1873.313232,708.524414 1873.129517,708.554199 1872.945801,708.583984   C1872.945801,712.863586 1872.945801,717.143250 1872.945801,721.710083   C1869.301758,721.710083 1865.910400,721.710083 1862.253662,721.710083   C1862.253662,710.561462 1862.253662,699.507812 1862.253662,688.223755   C1867.376465,688.223755 1872.304565,688.223755 1877.516235,688.223755   C1879.199585,693.696533 1880.878174,699.154114 1882.838013,705.526001   C1884.801392,699.358643 1886.563965,693.822266 1888.418823,687.995850   C1892.371948,687.995850 1896.353271,687.995850 1900.812744,688.002075  z",
                            " M2175.004883,703.920776   C2173.947266,709.507507 2171.266113,711.825439 2165.976807,711.989746   C2163.132080,712.078125 2160.282471,712.005493 2157.435303,712.005493   C2157.368408,712.648560 2157.301758,713.291626 2157.235107,713.934753   C2158.572998,714.287781 2159.897461,714.864014 2161.251953,714.946350   C2163.904785,715.107849 2166.573975,714.989624 2169.236572,714.995056   C2174.864014,715.006592 2177.888428,717.819641 2178.005371,723.144775   C2178.124512,728.566467 2174.423340,732.843872 2169.226318,732.967834   C2163.405029,733.106567 2157.552002,733.318909 2151.767090,732.840820   C2149.506592,732.653992 2146.179199,731.133484 2145.525879,729.397217   C2144.734131,727.292297 2146.207520,724.303833 2146.821533,721.726501   C2146.956055,721.162109 2147.601318,720.719421 2148.207031,719.982544   C2145.382568,716.687317 2145.633057,713.620972 2148.746094,710.556763   C2149.287842,710.023682 2148.859619,707.972229 2148.294922,706.942566   C2146.061768,702.870605 2146.537354,699.236572 2150.704102,697.548035   C2154.433105,696.036682 2158.684814,695.830200 2162.690918,694.978577   C2164.391113,694.617126 2166.943848,694.602661 2167.576660,693.528137   C2170.077637,689.281982 2173.657471,690.483032 2178.666504,690.756165   C2176.527344,693.710693 2174.944824,695.896423 2173.465576,697.939514   C2173.918701,699.577881 2174.461914,701.541626 2175.004883,703.920776  M2165.775146,722.315857   C2162.992432,722.220032 2160.199707,721.961792 2157.432617,722.127563   C2156.605713,722.177124 2155.380615,723.316711 2155.212891,724.136353   C2155.083252,724.767273 2156.239502,726.256836 2156.969482,726.362854   C2159.683105,726.756836 2162.474854,726.937500 2165.191650,726.691833   C2165.694336,726.646423 2165.985107,724.252686 2165.775146,722.315857  M2160.581543,700.101868   C2159.904053,702.024475 2159.226807,703.947021 2158.549316,705.869629   C2160.179932,705.852844 2162.489014,706.517944 2163.317139,705.694397   C2166.047852,702.977905 2163.808105,701.348206 2160.581543,700.101868  z",
                            " M2094.181641,722.005737   C2092.416016,722.005798 2091.091553,722.005798 2088.829590,722.005798   C2093.147217,710.914001 2097.248047,700.231873 2101.545166,689.629333   C2101.881104,688.800110 2103.565186,688.136292 2104.664307,688.068604   C2107.965820,687.865234 2111.287598,687.995361 2114.968750,687.995361   C2119.315674,699.252625 2123.635986,710.441040 2128.046631,721.863098   C2123.455322,721.863098 2119.491699,721.863098 2116.880615,721.863098   C2114.621582,719.750366 2112.924072,717.055481 2111.736572,717.263916   C2108.416992,717.846558 2103.701416,714.020142 2101.621094,720.242615   C2101.209961,721.472656 2097.052734,721.450439 2094.181641,722.005737  M2108.570312,709.997742   C2109.304199,709.156921 2110.748535,708.210266 2110.641846,707.494690   C2110.287598,705.115234 2109.375977,702.818909 2108.308105,699.256714   C2107.098877,703.531433 2106.225830,706.617981 2105.269531,709.998962   C2106.444580,709.998962 2107.094971,709.998962 2108.570312,709.997742  z",
                            " M1942.188721,699.508301   C1947.300049,694.669983 1952.748169,693.528809 1959.186279,697.145386   C1959.186279,693.362671 1959.186279,690.076843 1959.186279,686.392456   C1962.547241,686.392456 1965.579590,686.392456 1969.317017,686.392456   C1969.317017,698.066650 1969.317017,709.754944 1969.317017,722.214783   C1966.593994,721.892395 1963.584595,721.233765 1960.588501,721.289124   C1958.630981,721.325256 1956.729858,722.721008 1954.739380,722.950378   C1944.670898,724.110779 1938.797119,718.088074 1940.050537,707.858765   C1940.381958,705.154541 1941.344482,702.527649 1942.188721,699.508301  M1956.053345,715.437622   C1959.199951,712.835571 1960.251831,706.454407 1957.838013,703.717224   C1956.012573,701.647461 1953.850952,701.736572 1952.114868,703.804321   C1949.266357,707.197266 1951.190552,714.017883 1956.053345,715.437622  z",
                            " M1911.585205,697.506653   C1916.103271,696.527039 1920.316284,695.053284 1924.489502,695.158630   C1933.267822,695.380249 1936.004761,698.686829 1936.004761,707.448181   C1936.004761,709.946899 1936.004761,712.445679 1936.004761,715.302734   C1937.256714,715.720947 1938.545288,716.151489 1939.803833,716.571899   C1940.148071,722.780212 1936.319458,724.883423 1929.286743,722.835449   C1927.051880,722.184570 1924.529541,722.375916 1922.143555,722.422974   C1918.860352,722.487793 1915.375366,723.538940 1912.370972,722.720398   C1910.244141,722.140930 1907.860229,719.429443 1907.212158,717.198792   C1906.171387,713.615723 1907.042847,709.519653 1911.121948,708.097534   C1915.364990,706.618286 1919.947144,706.111816 1925.906128,704.859375   C1923.653320,703.676758 1922.059570,702.090027 1920.667969,702.251038   C1916.595459,702.722046 1912.603516,703.889526 1908.580078,704.784119   C1908.153442,704.139526 1907.726807,703.494995 1907.300171,702.850403   C1908.620850,701.142883 1909.941528,699.435364 1911.585205,697.506653  M1918.021484,714.475647   C1918.618408,717.115601 1920.263916,717.836670 1922.287109,716.190186   C1923.619507,715.105774 1924.377808,713.315857 1925.393188,711.841919   C1924.883301,711.414734 1924.373413,710.987549 1923.863403,710.560364   C1921.936035,711.603088 1920.008667,712.645813 1918.021484,714.475647  z",
                            " M2269.210938,721.369385   C2265.323975,722.085083 2261.779785,722.718506 2258.209473,722.956909   C2254.484863,723.205688 2251.784668,721.194031 2251.132080,717.654663   C2250.425537,713.819031 2250.818359,709.587402 2255.197754,708.075745   C2259.444580,706.609802 2264.023682,706.107544 2270.048828,704.849609   C2267.718750,703.692322 2266.069824,702.130249 2264.607666,702.288818   C2260.528564,702.731201 2256.527100,703.886597 2252.317871,704.798828   C2252.196045,698.685669 2256.881104,695.273987 2264.271973,695.007202   C2269.701416,694.811218 2276.124756,694.736328 2278.673828,699.732788   C2280.879883,704.056641 2279.995361,709.957275 2281.485596,714.760315   C2282.318848,716.636719 2283.892822,718.592590 2283.703613,720.359436   C2283.592285,721.396729 2280.656250,722.887085 2279.025146,722.844543   C2275.851318,722.761902 2272.701660,721.744080 2269.210938,721.369385  M2268.984619,712.511719   C2267.087158,712.451965 2265.151367,712.163452 2263.316162,712.472534   C2262.768799,712.564697 2261.901123,714.796997 2262.237305,715.231567   C2262.894531,716.081787 2264.643066,717.058472 2265.317139,716.724731   C2266.752441,716.014038 2267.790039,714.499268 2268.984619,712.511719  z",
                            " M1974.926270,716.757080   C1974.301636,713.060608 1972.859619,709.586548 1973.420532,706.473389   C1974.902832,698.245544 1981.178223,694.544312 1990.535400,694.955872   C2000.571289,695.397217 2005.471191,702.663452 2003.679443,710.829285   C1997.359497,710.829285 1990.936035,710.829285 1984.512573,710.829285   C1984.246094,711.229614 1983.979492,711.629944 1983.712891,712.030212   C1985.159058,713.336182 1986.482910,715.469727 1988.086914,715.706665   C1989.578247,715.926941 1991.307251,713.978333 1993.045044,713.258728   C1994.545776,712.637207 1996.186279,712.212280 1997.801025,712.042603   C1999.749268,711.837952 2001.735229,711.994202 2003.928589,711.994202   C2004.031494,717.151123 2001.840454,720.330811 1997.468628,721.992615   C1989.318237,725.090637 1980.032837,723.048523 1974.926270,716.757080  M1988.597534,702.020020   C1987.116089,703.058594 1985.634644,704.097107 1983.565918,705.547302   C1987.380127,705.547302 1990.130615,705.547302 1992.880981,705.547302   C1992.977295,705.231628 1993.073608,704.916016 1993.169800,704.600342   C1991.900757,703.761230 1990.631592,702.922180 1988.597534,702.020020  z",
                            " M2197.538086,695.064758   C2207.878418,697.620178 2210.748779,701.438293 2209.526855,710.968140   C2203.167236,710.968140 2196.746094,710.968140 2190.324951,710.968140   C2190.093262,711.378174 2189.861328,711.788147 2189.629395,712.198181   C2191.192627,713.453552 2192.618164,715.390991 2194.363770,715.743103   C2195.699707,716.012573 2197.404053,714.200317 2199.011475,713.459839   C2200.316162,712.858887 2201.690918,712.210876 2203.087158,712.055786   C2205.206299,711.820435 2207.370605,711.994263 2209.474854,711.994263   C2210.331543,718.794434 2206.448242,721.623291 2201.377197,722.668701   C2197.563965,723.454834 2193.338867,723.403931 2189.502197,722.663696   C2182.432373,721.299927 2178.550781,715.536499 2178.997070,708.344604   C2179.478271,700.582031 2184.078613,695.881165 2192.124756,695.047424   C2193.770996,694.876831 2195.449219,695.014771 2197.538086,695.064758  M2198.631836,704.171204   C2195.161865,700.923889 2192.518799,701.551636 2190.032959,706.571289   C2193.470703,705.935059 2196.185303,705.432678 2198.631836,704.171204  z",
                            " M2052.452148,705.135010   C2052.159424,710.744507 2052.159424,716.050598 2052.159424,721.678955   C2048.693604,721.678955 2045.634521,721.678955 2042.281128,721.678955   C2042.281128,713.284485 2042.281128,704.887451 2042.281128,695.334900   C2045.408691,696.180908 2048.167969,697.076965 2050.995605,697.608337   C2051.944336,697.786499 2053.212891,697.255005 2054.087646,696.674561   C2060.693848,692.291199 2071.319092,696.216187 2070.104248,706.537964   C2069.527588,711.437683 2070.005127,716.461426 2070.005127,721.714233   C2066.287598,721.714233 2062.897461,721.714233 2059.541260,721.714233   C2057.235107,715.304626 2061.794922,707.830933 2056.271729,701.535095   C2054.859863,702.854675 2053.802246,703.843140 2052.452148,705.135010  z",
                            " M2137.016602,685.989380   C2138.718506,686.796692 2141.010986,687.580872 2141.029053,688.414551   C2141.269043,699.439392 2141.188965,710.471130 2141.188965,721.757080   C2138.222412,721.757080 2134.842041,721.757080 2131.365234,721.757080   C2131.365234,709.884277 2131.365234,698.205139 2131.365234,685.989319   C2133.339111,685.989319 2134.944580,685.989319 2137.016602,685.989380  z",
                            " M2225.026367,707.315430   C2224.504395,712.283752 2224.017822,716.824341 2223.495605,721.695435   C2220.668701,721.695435 2217.611572,721.695435 2214.270996,721.695435   C2214.270996,713.269470 2214.270996,704.879639 2214.270996,695.793518   C2217.491943,696.117554 2220.513672,696.421570 2223.411865,696.713135   C2226.228027,696.273315 2229.171143,695.813599 2232.114258,695.353882   C2232.515869,698.036499 2232.917725,700.719116 2233.185303,702.506104   C2229.941895,704.255432 2227.501465,705.571594 2225.026367,707.315430  z",
                            " M2036.004761,709.022949   C2036.004761,713.476868 2036.004761,717.438232 2036.004761,721.700684   C2032.319702,721.700684 2028.934692,721.700684 2025.269043,721.700684   C2025.269043,713.279236 2025.269043,704.913757 2025.269043,696.786621   C2025.652832,696.439026 2025.763428,696.248474 2025.895020,696.232422   C2035.762329,695.030701 2036.004517,695.243103 2036.004761,705.041138   C2036.004761,706.204224 2036.004761,707.367249 2036.004761,709.022949  z",
                            " M2237.007812,699.305054   C2238.108154,693.381714 2242.354492,696.742676 2245.098633,696.210266   C2245.804443,696.073303 2247.803955,698.474731 2247.852539,699.761047   C2248.125244,707.008484 2247.984375,714.271423 2247.984375,721.763489   C2244.196533,721.763489 2240.816650,721.763489 2236.996826,721.763489   C2236.996826,714.286194 2236.996826,707.029846 2237.007812,699.305054  z",
                            " M2243.761230,685.976868   C2250.205322,685.881592 2245.675049,690.400330 2248.482666,692.689453   C2243.995850,692.689453 2240.976562,692.689453 2237.595215,692.689453   C2237.595215,690.705872 2237.595215,688.671814 2237.595215,685.976685   C2239.506836,685.976685 2241.413330,685.976685 2243.761230,685.976868  z",
                            " M2033.501709,685.994263   C2034.539429,688.128845 2035.145386,690.249390 2035.868896,692.781677   C2031.838623,692.781677 2028.802979,692.781677 2025.507080,692.781677   C2025.507080,690.631226 2025.507080,688.717163 2025.507080,685.980225   C2027.979370,685.980225 2030.524536,685.980225 2033.501709,685.994263  z",
                            " M900.598572,533.814514   C900.598572,487.520966 900.598572,441.227417 900.598572,394.563660   C928.905151,394.563660 956.770935,394.563660 984.934998,394.563660   C984.934998,489.898834 984.934998,585.118835 984.934998,681.035034   C983.258545,681.035034 981.494995,681.035034 979.731445,681.035034   C957.242432,681.035034 934.737000,680.549561 912.273499,681.306580   C904.732666,681.560730 900.879089,677.157288 896.413635,673.263977   C893.155029,670.422791 891.182251,666.161377 888.283203,662.841431   C882.868347,656.640259 877.063477,650.778992 871.670837,644.559448   C866.577393,638.684998 861.835999,632.506409 856.878540,626.512268   C854.370544,623.479858 851.720581,620.565186 849.146179,617.587402   C840.726868,607.849304 832.394714,598.034180 823.868469,588.390625   C817.994019,581.746277 811.612122,575.540894 805.894775,568.769653   C799.204224,560.845764 792.989136,552.520386 786.213562,543.913208   C785.470825,543.570679 785.082275,543.684143 784.693726,543.797607   C784.591858,545.617493 784.401794,547.437317 784.401062,549.257263   C784.384338,591.066345 784.388123,632.875366 784.388123,674.684448   C784.388123,676.637634 784.388184,678.590759 784.388184,680.786621   C756.155518,680.786621 728.394104,680.786621 700.256775,680.786621   C700.256775,585.495361 700.256775,490.164429 700.256775,394.446472   C701.660095,394.363495 703.105286,394.204468 704.550659,394.203522   C728.203613,394.188019 751.856506,394.199249 775.509460,394.187561   C781.130920,394.184784 784.718445,397.112488 787.047302,401.976776   C787.394226,402.701385 787.914551,403.361298 788.438904,403.979767   C792.045959,408.234497 795.588928,412.548279 799.325317,416.687073   C802.261169,419.939178 805.622070,422.815735 808.468079,426.138458   C811.243958,429.379456 813.545349,433.022186 816.170227,436.399017   C818.098511,438.879639 820.130554,441.291656 822.263916,443.597778   C825.166809,446.735962 828.355652,449.618011 831.152771,452.843292   C833.950562,456.069275 836.421936,459.578888 839.024292,462.973450   C839.519104,463.618866 839.906799,464.350616 840.430908,464.968719   C844.036743,469.221252 847.535278,473.575500 851.329346,477.654266   C854.265503,480.810669 857.728088,483.477844 860.658691,486.638824   C861.918518,487.997681 862.125977,490.301575 863.323303,491.754395   C868.912476,498.536133 874.564453,505.274689 880.432861,511.814331   C883.421997,515.145386 887.201294,517.779907 890.100403,521.175842   C893.046692,524.627075 895.339417,528.634644 897.945557,532.379578   C898.320251,532.917969 898.847351,533.350220 899.705933,534.174805   C900.271484,534.283447 900.435059,534.049011 900.598572,533.814514  z",
                            " M242.318024,393.254242   C245.604889,394.439453 248.454208,395.589691 251.387802,396.453949   C256.986633,398.103333 263.091095,398.708588 268.158112,401.340546   C276.762543,405.809967 284.954315,411.189423 292.898315,416.784424   C302.023743,423.211548 308.839569,431.825195 313.796906,441.855743   C315.943787,446.199707 318.622253,450.387939 320.015869,454.964630   C321.206848,458.875793 320.956024,463.237518 321.252930,467.406403   C321.602234,472.311310 321.854462,477.223083 322.169800,482.483215   C292.924591,482.483215 264.203064,482.483215 235.474152,482.483215   C234.381622,474.294250 232.707825,466.457550 226.227890,460.757202   C220.433548,455.660004 213.751755,452.800842 205.870316,452.959869   C199.691711,453.084564 193.497772,452.723724 187.329071,452.995880   C179.828430,453.326721 172.652878,455.082031 166.619049,459.904510   C157.391159,467.279755 159.838806,480.194122 170.562119,485.166534   C191.605850,494.924561 214.564285,497.057617 236.594574,502.853027   C248.270966,505.924652 259.980133,508.936432 271.491638,512.556580   C294.575714,519.816223 313.247894,533.358643 324.066071,555.204224   C329.843750,566.871399 330.818542,580.353516 329.714996,593.547119   C328.509674,607.957153 325.910583,622.016724 318.937347,635.003601   C313.188019,645.711121 305.512573,654.656311 295.452545,661.344421   C289.104706,665.564636 282.147522,668.856018 275.626312,672.830994   C268.344055,677.269836 260.194336,678.890137 252.093292,680.827759   C246.274612,682.219543 240.611008,684.456848 234.731476,685.339111   C229.339798,686.148071 223.751251,685.627136 218.250092,685.727783   C204.479050,685.979858 190.709030,686.349609 176.937073,686.439575   C173.961746,686.459045 170.969223,685.556519 168.003174,684.982788   C156.594345,682.776123 144.936401,681.384827 133.861526,678.057800   C122.904861,674.766235 112.148163,670.255920 101.995010,664.955994   C79.639206,653.286072 68.371124,633.466370 64.111732,609.309937   C62.678150,601.179626 62.276459,592.867432 61.360722,584.238647   C90.974503,584.238647 119.703835,584.238647 148.496063,584.238647   C149.256454,588.932068 149.807480,593.680481 150.824936,598.326782   C152.808090,607.382874 158.375458,613.416016 167.231110,616.106384   C186.226044,621.877258 205.301636,621.532898 224.315720,616.203125   C231.098526,614.301819 234.957520,609.692993 235.513702,602.522217   C236.054886,595.544678 232.997299,590.043091 226.875244,587.561096   C217.525909,583.770813 207.819077,580.720459 198.064011,578.100769   C173.521988,571.509949 148.781784,565.647278 124.295555,558.862732   C112.140274,555.494873 101.747131,548.436829 92.075020,540.322632   C75.000328,525.998169 67.282501,507.456573 66.541595,485.546844   C65.383980,451.313965 77.562462,424.326538 109.047844,408.208069   C117.585976,403.837128 126.842278,400.885925 135.689514,397.097534   C146.051926,392.660370 157.150467,392.132172 168.078705,391.085022   C179.486801,389.991882 190.983261,389.453644 202.444931,389.392548   C213.360123,389.334320 224.240128,390.478302 234.953293,392.894897   C237.176590,393.396423 239.591782,393.047241 242.318024,393.254242  z",
                            " M478.701385,607.345581   C485.427734,612.521423 492.731354,615.773865 500.760284,616.442749   C507.916290,617.038818 515.304871,617.336731 522.339355,616.204102   C529.530823,615.046204 536.952759,612.983521 543.322083,609.550903   C555.868347,602.789001 562.195923,591.233337 564.187134,577.278442   C564.740234,573.401794 565.037598,569.488708 565.492126,565.217773   C593.606140,565.217773 621.646912,565.217773 650.181885,565.217773   C650.613892,576.831360 649.317261,588.307129 646.755676,599.601685   C643.447876,614.187134 637.431335,627.581848 628.581055,639.762329   C621.715149,649.211670 612.957947,656.455627 603.517334,663.023315   C598.478699,666.528625 593.457764,670.110168 588.129639,673.129211   C584.986145,674.910278 581.258301,675.661011 577.791992,676.871338   C572.392883,678.756714 567.065857,680.903442 561.566528,682.427734   C558.005188,683.414978 554.202271,683.783813 550.488403,683.925049   C532.679199,684.602173 514.864441,685.141846 497.049500,685.653625   C491.243835,685.820374 485.333130,686.434082 479.649170,685.610229   C473.644897,684.739929 467.874237,682.323486 461.964081,680.720337   C455.647369,679.006897 449.032684,678.088135 443.010223,675.670959   C435.536407,672.671204 428.296326,668.891052 421.376892,664.744446   C399.094696,651.391357 384.275848,631.603943 375.384552,607.647583   C371.015808,595.876648 368.793549,583.275635 366.010773,570.957458   C362.117859,553.725159 363.734009,536.205872 364.400604,518.828918   C365.424103,492.147308 372.627350,466.938507 386.836792,444.330994   C394.018188,432.905182 403.482819,423.053040 414.932617,415.195465   C427.267914,406.730225 440.571625,400.570190 454.782715,396.439056   C475.441498,390.433624 496.725037,389.118073 518.131836,389.242401   C522.076111,389.265320 526.276306,391.705566 529.882568,388.104340   C529.964294,388.022705 530.208313,388.068115 530.365845,388.102936   C540.564087,390.357910 550.815308,392.400604 560.947449,394.921783   C583.637817,400.567902 603.802124,410.827789 620.291138,427.800201   C637.563232,445.578766 646.183105,467.192871 648.968750,491.436096   C649.738831,498.137634 650.108643,504.885132 650.689758,511.948181   C620.975037,511.948181 592.052795,511.948181 562.920471,511.948181   C562.046753,506.550842 560.783264,501.173218 560.370300,495.731079   C559.216553,480.526062 541.928284,461.721588 524.247192,459.843140   C513.499512,458.701294 502.885010,457.890167 492.355072,460.932159   C480.259705,464.426239 471.165924,472.135559 466.411194,483.419983   C461.589630,494.862976 457.346863,506.795227 457.959747,519.707458   C458.204346,524.860352 457.851074,530.039062 457.999817,535.199463   C458.403839,549.215393 457.317261,563.188965 461.610474,577.094849   C465.144775,588.542542 468.889221,599.292786 478.701385,607.345581  z",
                            " M900.406128,533.812134   C900.435059,534.049011 900.271484,534.283447 900.021240,534.296387   C899.934448,534.074890 900.213623,533.809814 900.406128,533.812134  z",
                            " M785.020020,543.873291   C785.082275,543.684143 785.470825,543.570679 785.937195,543.724670   C785.792175,543.977783 785.569275,543.963379 785.020020,543.873291  z",
                            " M1878.160522,465.820435   C1886.802490,474.896515 1888.401611,485.237610 1883.796875,496.092194   C1879.153931,507.036652 1870.086792,511.817688 1858.251953,511.750000   C1840.422852,511.648010 1822.592529,511.728912 1804.762817,511.713257   C1803.305908,511.711975 1801.848877,511.566345 1800.187866,511.476776   C1800.187866,493.934174 1800.187866,476.681091 1800.187866,458.881927   C1803.601685,458.881927 1806.880005,458.881866 1810.158447,458.881989   C1826.655151,458.882599 1843.152466,458.966492 1859.648315,458.844574   C1866.655518,458.792816 1872.727295,460.852325 1878.160522,465.820435  z",
                            " M1443.075195,517.206116   C1444.074829,503.434631 1447.109375,490.800812 1454.832275,479.621552   C1465.257080,464.530823 1480.337646,457.913696 1497.942871,457.424561   C1507.282471,457.165039 1517.105957,457.938599 1525.982788,460.639648   C1548.129517,467.378601 1559.405273,484.480164 1562.522705,506.276642   C1565.562500,527.528687 1565.926147,549.185547 1561.906372,570.429138   C1556.612793,598.403748 1535.930298,615.228271 1507.476440,616.085999   C1492.333618,616.542480 1477.822632,614.593933 1465.460693,604.946411   C1452.369141,594.729370 1445.572266,580.662842 1444.196533,564.576111   C1442.866821,549.025757 1443.365234,533.319153 1443.075195,517.206116  z",
                            " M2166.074219,722.629333   C2165.985107,724.252686 2165.694336,726.646423 2165.191650,726.691833   C2162.474854,726.937500 2159.683105,726.756836 2156.969482,726.362854   C2156.239502,726.256836 2155.083252,724.767273 2155.212891,724.136353   C2155.380615,723.316711 2156.605713,722.177124 2157.432617,722.127563   C2160.199707,721.961792 2162.992432,722.220032 2166.074219,722.629333  z",
                            " M2160.960693,700.093018   C2163.808105,701.348206 2166.047852,702.977905 2163.317139,705.694397   C2162.489014,706.517944 2160.179932,705.852844 2158.549316,705.869629   C2159.226807,703.947021 2159.904053,702.024475 2160.960693,700.093018  z",
                            " M2108.157715,709.998352   C2107.094971,709.998962 2106.444580,709.998962 2105.269531,709.998962   C2106.225830,706.617981 2107.098877,703.531433 2108.308105,699.256714   C2109.375977,702.818909 2110.287598,705.115234 2110.641846,707.494690   C2110.748535,708.210266 2109.304199,709.156921 2108.157715,709.998352  z",
                            " M1955.723389,715.668213   C1951.190552,714.017883 1949.266357,707.197266 1952.114868,703.804321   C1953.850952,701.736572 1956.012573,701.647461 1957.838013,703.717224   C1960.251831,706.454407 1959.199951,712.835571 1955.723389,715.668213  z",
                            " M1918.051392,714.082092   C1920.008667,712.645813 1921.936035,711.603088 1923.863403,710.560364   C1924.373413,710.987549 1924.883301,711.414734 1925.393188,711.841919   C1924.377808,713.315857 1923.619507,715.105774 1922.287109,716.190186   C1920.263916,717.836670 1918.618408,717.115601 1918.051392,714.082092  z",
                            " M2268.987793,712.912842   C2267.790039,714.499268 2266.752441,716.014038 2265.317139,716.724731   C2264.643066,717.058472 2262.894531,716.081787 2262.237305,715.231567   C2261.901123,714.796997 2262.768799,712.564697 2263.316162,712.472534   C2265.151367,712.163452 2267.087158,712.451965 2268.987793,712.912842  z",
                            " M1988.979980,702.051514   C1990.631592,702.922180 1991.900757,703.761230 1993.169800,704.600342   C1993.073608,704.916016 1992.977295,705.231628 1992.880981,705.547302   C1990.130615,705.547302 1987.380127,705.547302 1983.565918,705.547302   C1985.634644,704.097107 1987.116089,703.058594 1988.979980,702.051514  z",
                            " M2198.766113,704.550781   C2196.185303,705.432678 2193.470703,705.935059 2190.032959,706.571289   C2192.518799,701.551636 2195.161865,700.923889 2198.766113,704.550781  z"
                          ],
                          stroke: "none",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    })
                })
            })
        }
    },
    35037: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    I: () => o
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(32676),
                    r = e([n]);
                n = (r.then ? (await r)() : r)[0];
                let o = l.forwardRef(({
                    className: e,
                    type: s,
                    ...t
                }, a) => i.jsx("input", {
                    type: s,
                    className: (0, n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
                    ref: a,
                    ...t
                }));
                o.displayName = "Input", a()
            } catch (e) {
                a(e)
            }
        })
    },
    91782: (e, s, t) => {
        "use strict";
        t.d(s, {
            Z: () => l
        });
        var a = t(20997),
            i = t(61206);

        function l() {
            return a.jsx(i.P.spinner, {
                className: "size-8 animate-spin"
            })
        }
    },
    8314: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Ie: () => f,
                    P_: () => u,
                    z5: () => p
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(61329),
                    r = t(16926),
                    o = t(41352),
                    d = t(32676),
                    c = e([n, r, d]);
                [n, r, d] = c.then ? (await c)() : c, n.Provider;
                let p = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Viewport, {
                    ref: t,
                    className: (0, d.cn)("fixed right-0 top-20 z-[49] mb-4 flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px]", e),
                    ...s
                }));
                p.displayName = n.Viewport.displayName;
                let x = (0, r.cva)("mb-4 group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
                        variants: {
                            variant: {
                                default: "border bg-background",
                                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
                            }
                        },
                        defaultVariants: {
                            variant: "default"
                        }
                    }),
                    u = l.forwardRef(({
                        className: e,
                        variant: s,
                        ...t
                    }, a) => i.jsx(n.Root, {
                        ref: a,
                        className: (0, d.cn)(x({
                            variant: s
                        }), e),
                        ...t
                    }));
                u.displayName = n.Root.displayName, l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Action, {
                    ref: t,
                    className: (0, d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
                    ...s
                })).displayName = n.Action.displayName;
                let f = l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Close, {
                    ref: t,
                    className: (0, d.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
                    "toast-close": "",
                    ...s,
                    children: i.jsx(o.Z, {
                        className: "size-4"
                    })
                }));
                f.displayName = n.Close.displayName, l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Title, {
                    ref: t,
                    className: (0, d.cn)("text-sm font-semibold", e),
                    ...s
                })).displayName = n.Title.displayName, l.forwardRef(({
                    className: e,
                    ...s
                }, t) => i.jsx(n.Description, {
                    ref: t,
                    className: (0, d.cn)("text-sm opacity-90", e),
                    ...s
                })).displayName = n.Description.displayName, a()
            } catch (e) {
                a(e)
            }
        })
    },
    47493: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    B: () => p
                });
                var i = t(20997),
                    l = t(61329),
                    n = t(57987),
                    r = t(8314),
                    o = t(57259),
                    d = t(44309),
                    c = e([l, n, r, o]);

                function p() {
                    let {
                        toasts: e
                    } = (0, d.lm)(), {
                        i18n: s
                    } = (0, n.useTranslation)();
                    return (0, i.jsxs)(l.ToastProvider, {
                        children: [Array.from(new Map(e.map(e => [e.notification_id, e])).values()).map(function(e) {
                            return (0, i.jsxs)(r.P_, {
                                children: [(0, i.jsxs)("div", {
                                    className: "relative flex w-full flex-col gap-1",
                                    children: [i.jsx("h3", {
                                        className: "text-[15px] font-semibold tracking-tight",
                                        children: e.title
                                    }), i.jsx("p", {
                                        className: "text-sm font-medium text-slate-700 dark:text-slate-300",
                                        children: e.content
                                    }), (0, i.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [i.jsx("div", {
                                            className: "text-xs text-slate-700 dark:text-slate-400",
                                            children: new Date(e.send_at).toLocaleDateString(s.language, {
                                                day: "2-digit",
                                                month: "long",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            })
                                        }), (0, i.jsxs)("span", {
                                            className: "text-xs text-slate-500",
                                            children: [i.jsx(o.Z, {
                                                status: e.level
                                            }), " ", e.send_at_humanized]
                                        })]
                                    })]
                                }), i.jsx(r.Ie, {})]
                            }, e.notification_id)
                        }), i.jsx(r.z5, {})]
                    })
                } [l, n, r, o] = c.then ? (await c)() : c, a()
            } catch (e) {
                a(e)
            }
        })
    },
    7483: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Dp: () => p,
                    ee: () => c,
                    pO: () => d
                });
                var i = t(20997),
                    l = t(81466),
                    n = t(54163),
                    r = t(32676),
                    o = e([n, r]);
                [n, r] = o.then ? (await o)() : o;
                let d = ({
                        className: e,
                        ...s
                    }) => i.jsx(n.PanelGroup, {
                        className: (0, r.cn)("flex size-full data-[panel-group-direction=vertical]:flex-col", e),
                        ...s
                    }),
                    c = n.Panel,
                    p = ({
                        withHandle: e,
                        className: s,
                        ...t
                    }) => i.jsx(n.PanelResizeHandle, {
                        className: (0, r.cn)("relative z-30 flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", s),
                        ...t,
                        children: e && i.jsx("div", {
                            className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",
                            children: i.jsx(l.Z, {
                                className: "size-2.5"
                            })
                        })
                    });
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    53830: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    x: () => d
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(60307),
                    r = t(32676),
                    o = e([n, r]);
                [n, r] = o.then ? (await o)() : o;
                let d = l.forwardRef(({
                    className: e,
                    children: s,
                    ...t
                }, a) => (0, i.jsxs)(n.Root, {
                    ref: a,
                    className: (0, r.cn)("relative overflow-hidden", e),
                    ...t,
                    children: [i.jsx(n.Viewport, {
                        className: "size-full rounded-[inherit]",
                        children: s
                    }), i.jsx(c, {}), i.jsx(n.Corner, {})]
                }));
                d.displayName = n.Root.displayName;
                let c = l.forwardRef(({
                    className: e,
                    orientation: s = "vertical",
                    ...t
                }, a) => i.jsx(n.ScrollAreaScrollbar, {
                    ref: a,
                    orientation: s,
                    className: (0, r.cn)("flex touch-none select-none transition-colors", "vertical" === s && "h-full w-2.5 border-l border-l-transparent p-px", "horizontal" === s && "h-2.5 border-t border-t-transparent p-px", e),
                    ...t,
                    children: i.jsx(n.ScrollAreaThumb, {
                        className: "relative flex-1 rounded-full bg-border"
                    })
                }));
                c.displayName = n.ScrollAreaScrollbar.displayName, a()
            } catch (e) {
                a(e)
            }
        })
    },
    32561: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    O: () => r
                });
                var i = t(20997),
                    l = t(32676),
                    n = e([l]);

                function r({
                    className: e,
                    ...s
                }) {
                    return i.jsx("div", {
                        className: (0, l.cn)("animate-pulse rounded-md bg-muted", e),
                        ...s
                    })
                }
                l = (n.then ? (await n)() : n)[0], a()
            } catch (e) {
                a(e)
            }
        })
    },
    50472: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    x: () => o
                });
                var i = t(20997),
                    l = t(51162),
                    n = t(37270),
                    r = e([n]);
                n = (r.then ? (await r)() : r)[0];
                let o = ({
                    ...e
                }) => {
                    let {
                        theme: s = "system"
                    } = (0, l.useTheme)();
                    return i.jsx(n.Toaster, {
                        theme: s,
                        className: "toaster group",
                        richColors: !0,
                        toastOptions: {
                            classNames: {
                                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-md font-inter antialiased group-[.toaster]:px-5 group-[.toaster]:py-4 group-[.toaster]:text-sm group-[.toaster]:items-start",
                                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                                closeButton: "opacity-0 group-hover:opacity-100 transition-opacity"
                            }
                        },
                        closeButton: !0,
                        ...e
                    })
                };
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    57259: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    Z: () => r
                });
                var i = t(20997),
                    l = t(32676),
                    n = e([l]);

                function r({
                    status: e
                }) {
                    return i.jsx("div", {
                        className: (0, l.cn)("mr-1 inline-block size-2 rounded-full", {
                            success: "bg-green-500",
                            error: "bg-red-500",
                            warning: "bg-yellow-500",
                            information: "bg-blue-500"
                        } [e])
                    })
                }
                l = (n.then ? (await n)() : n)[0], a()
            } catch (e) {
                a(e)
            }
        })
    },
    26331: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    _v: () => x,
                    aJ: () => p,
                    pn: () => d,
                    u: () => c
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(66704),
                    r = t(32676),
                    o = e([n, r]);
                [n, r] = o.then ? (await o)() : o;
                let d = n.Provider,
                    c = n.Root,
                    p = n.Trigger,
                    x = l.forwardRef(({
                        className: e,
                        sideOffset: s = 4,
                        ...t
                    }, a) => i.jsx(n.Content, {
                        ref: a,
                        sideOffset: s,
                        className: (0, r.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
                        ...t
                    }));
                x.displayName = n.Content.displayName, a()
            } catch (e) {
                a(e)
            }
        })
    },
    44309: (e, s, t) => {
        "use strict";
        t.d(s, {
            lm: () => x
        });
        var a = t(16689);
        let i = 0,
            l = new Map,
            n = e => {
                if (l.has(e)) return;
                let s = setTimeout(() => {
                    l.delete(e), c({
                        type: "REMOVE_TOAST",
                        toastId: e
                    })
                }, 5e4);
                l.set(e, s)
            },
            r = (e, s) => {
                switch (s.type) {
                    case "ADD_TOAST":
                        return {
                            ...e, toasts: [s.toast, ...e.toasts].slice(0, 3)
                        };
                    case "UPDATE_TOAST":
                        return {
                            ...e, toasts: e.toasts.map(e => e.id === s.toast.id ? {
                                ...e,
                                ...s.toast
                            } : e)
                        };
                    case "DISMISS_TOAST": {
                        let {
                            toastId: t
                        } = s;
                        return t ? n(t) : e.toasts.forEach(e => {
                            n(e.id)
                        }), {
                            ...e,
                            toasts: e.toasts.map(e => e.id === t || void 0 === t ? {
                                ...e,
                                open: !1
                            } : e)
                        }
                    }
                    case "REMOVE_TOAST":
                        if (void 0 === s.toastId) return {
                            ...e,
                            toasts: []
                        };
                        return {
                            ...e, toasts: e.toasts.filter(e => e.id !== s.toastId)
                        }
                }
            },
            o = [],
            d = {
                toasts: []
            };

        function c(e) {
            d = r(d, e), o.forEach(e => {
                e(d)
            })
        }

        function p({
            ...e
        }) {
            let s = (i = (i + 1) % Number.MAX_VALUE).toString(),
                t = () => c({
                    type: "DISMISS_TOAST",
                    toastId: s
                });
            return c({
                type: "ADD_TOAST",
                toast: {
                    ...e,
                    id: s,
                    open: !0,
                    onOpenChange: e => {
                        e || t()
                    }
                }
            }), {
                id: s,
                dismiss: t,
                update: e => c({
                    type: "UPDATE_TOAST",
                    toast: {
                        ...e,
                        id: s
                    }
                })
            }
        }

        function x() {
            let [e, s] = a.useState(d);
            return a.useEffect(() => (o.push(s), () => {
                let e = o.indexOf(s);
                e > -1 && o.splice(e, 1)
            }), [e]), {
                ...e,
                sendNotification: p,
                dismiss: e => c({
                    type: "DISMISS_TOAST",
                    toastId: e
                })
            }
        }
    },
    19681: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    x: () => o
                });
                var i = t(16689),
                    l = t(69915),
                    n = e([l]);
                l = (n.then ? (await n)() : n)[0];
                let d = {
                    name: "",
                    status: 1,
                    permissions: {
                        server_details: !0,
                        server_services: !0,
                        add_server: !0,
                        update_server: !0,
                        view_logs: !0,
                        view: {
                            sidebar: "servers"
                        }
                    }
                };

                function r() {
                    let e = l.default.get("currentUser");
                    return e ? JSON.parse(e || `{ "user": ${JSON.stringify(d)} }`).user : d
                }

                function o() {
                    let [e, s] = (0, i.useState)(() => r());
                    return (0, i.useEffect)(() => {
                        let e = r();
                        s(e)
                    }, []), e
                }
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    2088: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    a: () => n
                });
                var i = t(96463),
                    l = e([i]);
                i = (l.then ? (await l)() : l)[0];
                let n = () => ({
                    logout: () => i.ON.logout()
                });
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    18532: (e, s, t) => {
        "use strict";
        t.d(s, {
            N: () => i
        });
        var a = t(16689);

        function i(e, s = 1e3) {
            let t = (0, a.useRef)();
            return (0, a.useEffect)(() => () => {
                t.current && clearTimeout(t.current)
            }, []), (...a) => {
                let i = setTimeout(() => {
                    e(...a)
                }, s);
                clearTimeout(t.current), t.current = i
            }
        }
    },
    73301: (e, s, t) => {
        "use strict";
        t.d(s, {
            Z: () => m
        });
        var a = t(94933),
            i = t(58597),
            l = t(72063),
            n = t(25854),
            r = t(53125),
            o = t(78699),
            d = t(56953),
            c = t(76789),
            p = t(51267),
            x = t(30128),
            u = t(69062),
            f = t(25358);
        let m = {
            user: [{
                id: "profile",
                title: "Profil",
                description: "Kullanıcı adınızı, e-posta adresinizi ve şifrenizi değiştirebilir ve en son giriş yaptığınız tarih ve IP adresi gibi detayları g\xf6r\xfcnt\xfcleyebilirsiniz.",
                icon: a.Z,
                href: "/settings/profile"
            }, {
                id: "vault",
                title: "Kasa",
                description: "Sunucular \xfczerindeki eklenti ayarlarını, şifrelerinizi ve y\xf6neticiyseniz diğer kullanıcıların girdiği değerleri değiştirebilirsiniz.",
                icon: i.Z,
                href: "/settings/vault"
            }, {
                id: "tokens",
                title: "Kişisel Erişim Anahtarları",
                description: "Kişisel erişim anahtarları oluşturarak DZ MYS'nin sağladığı dış API u\xe7larını kullanabilirsiniz.",
                icon: l.Z,
                href: "/settings/tokens"
            }],
            system: [{
                id: "extensions",
                title: "Eklentiler",
                description: "Bu sayfa aracılığıyla sisteminizdeki eklentileri y\xf6netebilir, s\xfcr\xfcmlerini g\xfcncelleyebilir ve yeni eklentiler y\xfckleyebilirsiniz.",
                icon: n.Z,
                href: "/settings/extensions"
            }, {
                id: "users",
                title: "Kullanıcılar",
                description: "Bu sayfa aracılığıyla kullanıcılara roller ekleyebilir, kullanıcı profillerini d\xfczenleyebilir ve yenilerini ekleyebilirsiniz.",
                icon: r.Z,
                href: "/settings/users"
            }, {
                id: "roles",
                title: "Roller",
                description: "Kullanıcıların erişim yetki seviyelerini detaylı şekilde gruplar ve kişiler bazında d\xfczenleyebilirsiniz.",
                icon: o.Z,
                href: "/settings/roles"
            }, {
                id: "email",
                title: "E-Posta",
                description: "Sistemin e-posta g\xf6nderim ayarlarını bu sayfa \xfczerinden detaylı şekilde ayarlayabilir ve test edebilirsiniz.",
                icon: d.Z,
                href: "/settings/mail"
            }, {
                id: "external_notifications",
                title: "Dış Bildirimler",
                description: "Eklenti sunucularının ve dış uygulamaların Dz'ye bildirim g\xf6ndermesini IP kısıtı koyarak sağlayabilirsiniz.",
                icon: c.Z,
                href: "/settings/external_notifications"
            }, {
                id: "subscriptions",
                title: "Abonelikler",
                description: "Sistem ve eklenti aboneliklerinizi, yenilemelerinizi bu sayfa aracılığıyla g\xf6zlemleyebilirsiniz.",
                icon: p.Z,
                href: "/settings/subscriptions"
            }, {
                id: "access",
                title: "Erişim",
                description: "Giriş yapılabilecek giriş ara\xe7larını ayarlamanızı sağlar. Keycloak ve LDAP girişlerini bu sayfa \xfczerinden ayarlayabilirsiniz.",
                icon: x.Z,
                href: "/settings/access/audit"
            }, {
                id: "health",
                title: "Sağlık Durumu",
                description: "DZ Merkezi Y\xf6netim Sistemi'nin sağlık durumunu g\xf6r\xfcnt\xfcleyebilir, g\xfcvenlik geliştirme \xf6nerilerini kolayca uygulayabilirsiniz.",
                icon: u.Z,
                href: "/settings/health"
            }, {
                id: "advanced",
                title: "Gelişmiş Ayarlar",
                description: "Sistemin DNS ayarlarını, sertifika kurulumları ve log y\xf6nlendirme gibi değişiklikleri bu sayfa \xfczerinden yapabilirsiniz.",
                icon: f.Z,
                href: "/settings/advanced/certificates"
            }]
        }
    },
    32676: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    FB: () => d,
                    aS: () => o,
                    cn: () => r,
                    qF: () => c
                });
                var i = t(16593),
                    l = t(68097),
                    n = e([i, l]);

                function r(...e) {
                    return (0, l.twMerge)((0, i.clsx)(e))
                }

                function o(e, s, t) {
                    let a = Number.parseFloat(e.original[t]),
                        i = Number.parseFloat(s.original[t]);
                    return (Number.isNaN(a) && (a = 0), Number.isNaN(i) && (i = 0), a > i) ? 1 : a < i ? -1 : 0
                }

                function d(e, s) {
                    return !!e.response && 422 === e.response.status && (Object.keys(e.response.data).forEach(t => {
                        s.setError(t, {
                            type: "manual",
                            message: e.response.data[t]
                        })
                    }), !0)
                }

                function c(e, s = "tr") {
                    let t = new Date().getTime(),
                        a = new Date(e).getTime(),
                        i = Math.floor((t - a) / 1e3),
                        l = Math.floor(i / 60),
                        n = Math.floor(l / 60),
                        r = Math.floor(n / 24),
                        o = Math.floor(r / 30),
                        d = new Intl.RelativeTimeFormat(s, {
                            numeric: "auto"
                        });
                    return i < 60 ? d.format(-i, "second") : l < 60 ? d.format(-l, "minute") : n < 24 ? d.format(-n, "hour") : r < 30 ? d.format(-r, "day") : o < 12 ? d.format(-o, "month") : d.format(-Math.floor(r / 365), "year")
                } [i, l] = n.then ? (await n)() : n, a()
            } catch (e) {
                a(e)
            }
        })
    },
    65143: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.r(s), t.d(s, {
                    default: () => F
                });
                var i = t(20997),
                    l = t(16689),
                    n = t(56660),
                    r = t(38929);
                t(74494), t(30108), t(35525), t(233);
                var o = t(40968),
                    d = t.n(o),
                    c = t(11163),
                    p = t(59455),
                    x = t(4282),
                    u = t(57987),
                    f = t(9926),
                    m = t(25040),
                    h = t(47493),
                    j = t(50472),
                    _ = t(19681),
                    y = t(32676),
                    g = t(68101),
                    v = e([n, x, u, f, h, j, _, y, g]);
                [n, x, u, f, h, j, _, y, g] = v.then ? (await v)() : v;
                let C = () => !1,
                    F = (0, p.appWithI18Next)(({
                        Component: e,
                        pageProps: s
                    }) => {
                        let t = (0, c.useRouter)(),
                            a = C() && window.localStorage.getItem("LANGUAGE"),
                            o = (0, _.x)();
                        C() && window.localStorage.setItem("LANGUAGE", a || o.locale || "tr"), (0, p.useSyncLanguage)(a || o.locale || "tr");
                        let {
                            t: x,
                            ready: v
                        } = (0, u.useTranslation)("common"), {
                            t: F
                        } = (0, u.useTranslation)();
                        return f.z.setErrorMap((0, m.makeZodI18nMap)({
                            t: F,
                            ns: "zod"
                        })), (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(d(), {
                                children: [i.jsx("title", {
                                    children: x("page_title", "DZ Merkezi Y\xf6netim Sistemi")
                                }), i.jsx("link", {
                                    rel: "icon",
                                    type: "image/png",
                                    href: "/favicon.png"
                                })]
                            }), (0, i.jsxs)(r.f, {
                                attribute: "class",
                                defaultTheme: "light",
                                enableSystem: !1,
                                children: [i.jsx("div", {
                                    className: (0, y.cn)("font-inter h-screen bg-background antialiased"),
                                    children: t.asPath.includes("/auth") ? (0, l.createElement)(e, {
                                        ...s,
                                        key: t.route
                                    }) : i.jsx(n.H, {
                                        children: v && i.jsx(g.Z, {
                                            Component: e,
                                            pageProps: s
                                        })
                                    })
                                }), i.jsx(h.B, {}), i.jsx(j.x, {})]
                            })]
                        })
                    }, x.S);
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    56660: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    H: () => p,
                    S: () => x
                });
                var i = t(20997),
                    l = t(96463),
                    n = t(11163),
                    r = t(16689),
                    o = t(19681),
                    d = e([l, o]);
                [l, o] = d.then ? (await d)() : d;
                let c = r.createContext(void 0),
                    p = ({
                        children: e
                    }) => {
                        let s = (0, n.useRouter)(),
                            t = (0, o.x)(),
                            [a, d] = r.useState(""),
                            [p, x] = r.useState(!0),
                            [u, f] = r.useState({}),
                            [m, h] = r.useState(!1),
                            [j, _] = r.useState(!0),
                            [y, g] = r.useState([]),
                            [v, C] = r.useState(!0),
                            [F, b] = r.useState([]),
                            [N, w] = r.useState(!0),
                            [L, R] = r.useState(0),
                            [O, U] = r.useState("");
                        r.useEffect(() => {
                            s.asPath.startsWith("/settings") ? (h(!0), d("")) : h(!1)
                        }, [s.asPath]), r.useEffect(() => {
                            if ("extensions" === t.permissions.view.sidebar) {
                                d("");
                                return
                            }
                            s.query.server_id ? d(s.query.server_id) : d("")
                        }, [s.query.server_id, t.permissions.view.sidebar]);
                        let S = r.useCallback(() => {
                                l.dJ.get(`/menu/servers/${a}`).then(e => {
                                    f(e.data)
                                })
                            }, [a]),
                            Z = r.useCallback(() => {
                                l.dJ.get("/menu/servers").then(e => {
                                    g(e.data), _(!1)
                                })
                            }, []),
                            V = r.useCallback(() => {
                                l.dJ.get("/menu/extensions").then(e => {
                                    if (b(e.data), C(!1), O) {
                                        let t = e.data.find(e => e.id === O);
                                        t && s.push(`/servers/${t.server_id}/extensions/${t.id}${t.menus&&t.menus.length>0?t.menus[0].url:""}`)
                                    }
                                })
                            }, [L]),
                            k = r.useCallback(e => {
                                e && U(e), O && R(e => e + 1)
                            }, [O]),
                            z = r.useCallback(() => {
                                w(e => !e)
                            }, []),
                            M = r.useMemo(() => ({
                                selected: a,
                                setSelected: d,
                                selectedData: u,
                                setSelectedData: f,
                                selectedLoading: p,
                                setSelectedLoading: x,
                                refreshSelected: S,
                                settingsActive: m,
                                setSettingsActive: h,
                                serversLoading: j,
                                setServersLoading: _,
                                servers: y,
                                setServers: g,
                                refreshServers: Z,
                                extensionsLoading: v,
                                setExtensionsLoading: C,
                                extensions: F,
                                setExtensions: b,
                                refreshExtensions: V,
                                collapsed: N,
                                setCollapsed: w,
                                toggleSidebar: z,
                                redirectKey: L,
                                setRedirectKey: R,
                                redirectId: O,
                                setRedirectId: U,
                                redirectNow: k
                            }), [a, u, p, m, j, y, N, S, Z, v, F, V, z, k]);
                        return i.jsx(c.Provider, {
                            value: M,
                            children: e
                        })
                    },
                    x = () => {
                        let e = r.useContext(c);
                        if (void 0 === e) throw Error("useSidebarContext must be used within a SidebarProvider");
                        return e
                    };
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    38929: (e, s, t) => {
        "use strict";
        t.d(s, {
            f: () => l
        });
        var a = t(20997),
            i = t(51162);

        function l({
            children: e,
            ...s
        }) {
            return a.jsx(i.ThemeProvider, {
                ...s,
                children: e
            })
        }
    },
    56885: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    s: () => r
                });
                var i = t(99648),
                    l = t(2088),
                    n = e([i, l]);
                [i, l] = n.then ? (await n)() : n;
                class r {
                    constructor(e) {
                        this.getInstance = () => this.instance, this.instance = i.default.create({
                            baseURL: e,
                            timeout: 3e4,
                            timeoutErrorMessage: "Time out!",
                            withCredentials: !0,
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            }
                        }), this.instance.interceptors.request.use(e => (e.headers["x-language"] = localStorage.getItem("LANGUAGE") || "tr", e)), this.instance.interceptors.response.use(e => e, e => {
                            if (e.response && 401 === e.response.status) {
                                if ("/auth/login" == window.location.pathname) return Promise.reject(e);
                                let {
                                    logout: s
                                } = (0, l.a)();
                                s().finally(() => {
                                    window.location.href = "/auth/login?redirect=" + window.location.pathname
                                })
                            }
                            return e.response && 504 === e.response.status && (window.location.href = "/504"), Promise.reject(e)
                        })
                    }
                }
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    46006: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    e: () => n
                });
                var i = t(99648),
                    l = e([i]);
                i = (l.then ? (await l)() : l)[0];
                class n {
                    constructor(e) {
                        this.login = (e, s, t, a, i = "liman") => t ? this.instance.post("/change_password", {
                            email: e,
                            password: s,
                            new_password: t,
                            type: i
                        }) : this.instance.post("/login", {
                            email: e,
                            password: s,
                            token: a,
                            type: i
                        }), this.saveTwoFactorToken = (e, s, t) => this.instance.post("/setup_mfa", {
                            secret: e,
                            email: s,
                            password: t
                        }), this.logout = () => this.instance.post("/logout"), this.instance = i.default.create({
                            baseURL: e,
                            timeout: 3e4,
                            timeoutErrorMessage: "Time out!",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            }
                        })
                    }
                }
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    96463: (e, s, t) => {
        "use strict";
        t.a(e, async (e, a) => {
            try {
                t.d(s, {
                    ON: () => r,
                    dJ: () => o
                });
                var i = t(56885),
                    l = t(46006),
                    n = e([i, l]);
                [i, l] = n.then ? (await n)() : n;
                let r = new l.e("/api/auth"),
                    o = new i.s("/api").getInstance();
                a()
            } catch (e) {
                a(e)
            }
        })
    },
    74494: () => {},
    30108: () => {},
    35525: () => {},
    233: () => {}
};