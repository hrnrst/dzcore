(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6009], {
        2905: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/servers/[server_id]/open_ports", function() {
                return s(652)
            }])
        },
        986: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = s(5893),
                n = s(9008),
                c = s.n(n);

            function o(e) {
                let {
                    title: t,
                    description: s,
                    rightSide: n
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex-1 flex-col p-8 md:flex",
                    children: [(0, r.jsx)(c(), {
                        children: (0, r.jsx)("title", {
                            children: "".concat(t, " | DZ")
                        })
                    }), (0, r.jsxs)("div", {
                        className: "flex items-center justify-between space-y-2",
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)("h2", {
                                className: "text-2xl font-bold tracking-tight",
                                children: t
                            }), (0, r.jsx)("p", {
                                className: "text-muted-foreground",
                                children: s
                            })]
                        }), n && (0, r.jsx)("div", {
                            className: "flex items-center",
                            children: n
                        })]
                    })]
                })
            }
        },
        652: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var r = s(5893),
                n = s(9774),
                c = s(1163),
                o = s(7294),
                i = s(7421),
                l = s(5282),
                a = s(2532),
                p = s(986);

            function _() {
                let e = (0, c.useRouter)(),
                    [t, s] = (0, o.useState)(!0),
                    [_, u] = (0, o.useState)([]),
                    {
                        t: d
                    } = (0, i.$G)("servers"),
                    f = [{
                        accessorKey: "name",
                        header: e => {
                            let {
                                column: t
                            } = e;
                            return (0, r.jsx)(a.p, {
                                column: t,
                                title: d("open_ports.accessor_name_title")
                            })
                        },
                        title: d("open_ports.accessor_name_title")
                    }, {
                        accessorKey: "username",
                        header: e => {
                            let {
                                column: t
                            } = e;
                            return (0, r.jsx)(a.p, {
                                column: t,
                                title: d("open_ports.accessor_username_title")
                            })
                        },
                        title: d("open_ports.accessor_username_title")
                    }, {
                        accessorKey: "ip_type",
                        header: e => {
                            let {
                                column: t
                            } = e;
                            return (0, r.jsx)(a.p, {
                                column: t,
                                title: d("open_ports.accessor_ip_type_title"),
                                showFilterAsSelect: !0,
                                filterPresets: [{
                                    key: "ipv4",
                                    value: "IPv4"
                                }, {
                                    key: "ipv6",
                                    value: "IPv6"
                                }]
                            })
                        },
                        title: d("open_ports.accessor_ip_type_title")
                    }, {
                        accessorKey: "packet_type",
                        header: e => {
                            let {
                                column: t
                            } = e;
                            return (0, r.jsx)(a.p, {
                                column: t,
                                title: d("open_ports.accessor_packet_type_title"),
                                showFilterAsSelect: !0,
                                filterPresets: [{
                                    key: "tcp",
                                    value: "TCP"
                                }, {
                                    key: "udp",
                                    value: "UDP"
                                }]
                            })
                        },
                        title: d("open_ports.accessor_packet_type_title")
                    }, {
                        accessorKey: "port",
                        header: e => {
                            let {
                                column: t
                            } = e;
                            return (0, r.jsx)(a.p, {
                                column: t,
                                title: d("open_ports.accessor_port_title")
                            })
                        },
                        title: d("open_ports.accessor_port_title")
                    }],
                    h = () => {
                        e.query.server_id && n.dJ.get("/servers/".concat(e.query.server_id, "/ports")).then(e => {
                            u(e.data), s(!1)
                        })
                    };
                return (0, o.useEffect)(() => {
                    h()
                }, [e.query.server_id]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.Z, {
                        title: d("open_ports.page_header.title"),
                        description: d("open_ports.page_header.description")
                    }), (0, r.jsx)(l.Z, {
                        columns: f,
                        data: _,
                        loading: t,
                        selectable: !1
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [5059, 3265, 5855, 2888, 9774, 179], function() {
            return e(e.s = 2905)
        }), _N_E = e.O()
    }
]);