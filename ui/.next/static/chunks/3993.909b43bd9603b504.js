"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3993], {
        3993: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var r = n(5893),
                a = n(9774),
                s = n(4385);
            /**
             * @license lucide-react v0.363.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let o = (0, n(5711).Z)("ArrowLeft", [
                ["path", {
                    d: "m12 19-7-7 7-7",
                    key: "1l729n"
                }],
                ["path", {
                    d: "M19 12H5",
                    key: "x3x0zl"
                }]
            ]);
            var c = n(1571),
                i = n(9008),
                l = n.n(i),
                d = n(1163),
                u = n(7294),
                h = n(7421),
                m = n(7249),
                w = n(733),
                f = n(1782);

            function x() {
                let e = (0, d.useRouter)(),
                    [t, n] = (0, u.useReducer)(e => e + 1, 0),
                    [i, x] = (0, u.useState)(!0),
                    [y, p] = (0, u.useState)(),
                    v = (0, u.useRef)(null),
                    {
                        theme: g
                    } = (0, c.F)(),
                    {
                        i18n: q
                    } = (0, h.$G)(),
                    [E, b] = (0, u.useState)(""),
                    j = e => {
                        e.querySelectorAll("iframe").forEach(e => e.remove())
                    };
                return (0, u.useEffect)(() => {
                    if (v.current && e.query.server_id && e.query.extension_id && ((0, s.ZP)(v.current), x(!0), j(v.current), v.current && 0 === v.current.querySelectorAll("iframe").length)) {
                        let t = "";
                        e.query.slug && (t = Array.isArray(e.query.slug) ? e.query.slug.join("/") : e.query.slug);
                        let r = new URLSearchParams(window.location.search);
                        r.toString() && (t += "?".concat(r.toString())), a.dJ.post("/servers/".concat(e.query.server_id, "/extensions/").concat(e.query.extension_id, "/").concat(t)).then(e => {
                            j(v.current), 201 === e.status && (p(e.data), x(!1));
                            let t = document.createElement("iframe");
                            v.current.appendChild(t), t.style.width = "0px", t.style.height = "0px", t.setAttribute("allowtransparency", "true"), t.setAttribute("allowTransparency", "true"), t.style.backgroundColor = "transparent";
                            let r = t.contentDocument;
                            if (r) {
                                r.open(), r.write(e.data.html), b("".concat(e.data.extension_name, " - ").concat(e.data.server_name, " | DZ")), r.close();
                                let t = document.createElement("meta");
                                t.setAttribute("name", "color-scheme"), t.setAttribute("content", g || "light"), r.head.appendChild(t);
                                let n = document.createElement("meta");
                                n.setAttribute("name", "theme-color"), n.setAttribute("content", g && "dark" === g ? "#030711" : "#ffffff"), r.head.appendChild(n)
                            }
                            t.onload = () => {
                                t.contentWindow && (t.contentWindow.window.location.hash = window.location.hash.split("#/")[1] || "#/", t.style.width = "100%", t.style.height = "var(--container-height)", p(!1), x(!1))
                            }, t.contentWindow && (t.contentWindow.addEventListener("beforeunload", () => {
                                n()
                            }), t.contentWindow.addEventListener("limanHashChange", function(e) {
                                window.location.hash = e.detail
                            }));
                            let a = () => {
                                t && t.contentWindow && (t.contentWindow.window.location.hash = window.location.hash.split("#/")[1] || "#/")
                            };
                            return window.addEventListener("hashchange", a), window.addEventListener("liman:extension-reload", n), () => {
                                window.removeEventListener("hashchange", a), window.removeEventListener("liman:extension-reload", n)
                            }
                        }).catch(t => {
                            if (j(v.current), t.response && 406 === t.response.status) {
                                e.push("/servers/".concat(e.query.server_id, "/settings/").concat(e.query.extension_id));
                                return
                            }
                            p(t.response.data || t.response), x(!1)
                        })
                    }
                }, [e.query.server_id, e.query.extension_id, e.query.slug, v.current, q.language, t]), (0, u.useEffect)(() => {
                    v.current && v.current.querySelectorAll("iframe").forEach(e => {
                        if (e.contentDocument) {
                            var t, n;
                            null === (t = e.contentDocument.querySelector("[name='color-scheme']")) || void 0 === t || t.remove(), null === (n = e.contentDocument.querySelector("[name='theme-color']")) || void 0 === n || n.remove();
                            let r = document.createElement("meta");
                            r.setAttribute("name", "color-scheme"), r.setAttribute("content", g || "light"), e.contentDocument.head.appendChild(r);
                            let a = document.createElement("meta");
                            a.setAttribute("name", "theme-color"), a.setAttribute("content", g && "dark" === g ? "#030711" : "#ffffff"), e.contentDocument.head.appendChild(a)
                        }
                    })
                }, [g]), (0, u.useEffect)(() => (window.addEventListener("message", e => {
                    if (!e.data || !e.data.type || "setSearchParams" !== e.data.type) return;
                    let t = new URLSearchParams(e.data.data),
                        r = "".concat(window.location.pathname, "?").concat(t.toString());
                    window.history.pushState({}, "", r), n()
                }, !1), () => {
                    window.removeEventListener("message", () => {}, !1)
                }), []), (0, r.jsxs)("div", {
                    id: "iframe-container",
                    ref: v,
                    children: [!i && !y && E && (0, r.jsx)(l(), {
                        children: (0, r.jsx)("title", {
                            children: E
                        })
                    }), i && (0, r.jsx)("div", {
                        className: "flex w-full items-center justify-center",
                        style: {
                            height: "var(--container-height)"
                        },
                        children: (0, r.jsx)(f.Z, {})
                    }), y && (0, r.jsx)("div", {
                        children: (0, r.jsx)("div", {
                            className: "container mx-auto flex items-center px-6 py-12",
                            style: {
                                height: "calc(var(--container-height) - 30vh)"
                            },
                            children: (0, r.jsxs)("div", {
                                className: "mx-auto flex max-w-sm flex-col items-center text-center",
                                children: [(0, r.jsx)(w.P.dugumluLogo, {
                                    className: "w-18 mb-10 h-12"
                                }), (0, r.jsx)("h1", {
                                    className: "mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl",
                                    children: "Bir hata oluştu"
                                }), (0, r.jsx)("p", {
                                    className: "mt-4 text-gray-500 dark:text-gray-400",
                                    children: y.message
                                }), (0, r.jsxs)("div", {
                                    className: "mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto",
                                    children: [(0, r.jsxs)(m.z, {
                                        onClick: () => e.back(),
                                        size: "sm",
                                        children: [(0, r.jsx)(o, {
                                            className: "mr-2 size-4"
                                        }), "Geri d\xf6n"]
                                    }), (0, r.jsx)(m.z, {
                                        onClick: () => e.push("/"),
                                        size: "sm",
                                        className: "px-4",
                                        variant: "secondary",
                                        children: "Panoya git"
                                    })]
                                })]
                            })
                        })
                    })]
                }, "".concat(e.query.server_id, " + ").concat(e.query.extension_id, " + ").concat(t))
            }
        }
    }
]);