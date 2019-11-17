!(function(t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.vueInsProgressBar = n())
    : (t.vueInsProgressBar = n());
})(window, function() {
  return (function(t) {
    var n = {};
    function e(i) {
      if (n[i]) return n[i].exports;
      var r = (n[i] = { i: i, l: !1, exports: {} });
      return t[i].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: i });
      }),
      (e.r = function(t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function(t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (e.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            e.d(
              i,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return i;
      }),
      (e.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ""),
      e((e.s = 5))
    );
  })([
    function(t, n, e) {
      "use strict";
      e.r(n);
      var i = e(1),
        r = e.n(i);
      for (var o in i)
        "default" !== o &&
          (function(t) {
            e.d(n, t, function() {
              return i[t];
            });
          })(o);
      n.default = r.a;
    },
    function(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var i = "undefined" != typeof window;
      n.default = {
        name: "VueInsProgressBar",
        computed: {
          style: function() {
            var t = this.progress.options,
              n = {
                opacity: !!t.show ? 1 : 0,
                display: !!t.__isDisplay ? "block" : "none",
                position: t.position,
                height: t.height
              };
            return n;
          },
          progress: function() {
            return i
              ? window.INSPBEventBus.INSPB
              : (console.warn(
                  "The vue-ins-progress-bar can work in browser only!"
                ),
                { options: {} });
          }
        }
      };
    },
    function(t, n, e) {
      var i = e(8);
      "string" == typeof i && (i = [[t.i, i, ""]]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      e(10)(i, r);
      i.locals && (t.exports = i.locals);
    },
    function(t, n, e) {
      "use strict";
      var i = function() {
          var t = this.$createElement;
          return (this._self._c || t)("div", {
            staticClass: "ins-progress",
            style: this.style
          });
        },
        r = [];
      e.d(n, "a", function() {
        return i;
      }),
        e.d(n, "b", function() {
          return r;
        });
    },
    function(t, n, e) {
      "use strict";
      function i(t, n, e, i, r, o, s, a) {
        var f,
          u = "function" == typeof t ? t.options : t;
        if (
          (n && ((u.render = n), (u.staticRenderFns = e), (u._compiled = !0)),
          i && (u.functional = !0),
          o && (u._scopeId = "data-v-" + o),
          s
            ? ((f = function(t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(s);
              }),
              (u._ssrRegister = f))
            : r &&
              (f = a
                ? function() {
                    r.call(this, this.$root.$options.shadowRoot);
                  }
                : r),
          f)
        )
          if (u.functional) {
            u._injectStyles = f;
            var c = u.render;
            u.render = function(t, n) {
              return f.call(n), c(t, n);
            };
          } else {
            var l = u.beforeCreate;
            u.beforeCreate = l ? [].concat(l, f) : [f];
          }
        return { exports: t, options: u };
      }
      e.d(n, "a", function() {
        return i;
      });
    },
    function(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var i,
        r =
          Object.assign ||
          function(t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          },
        o = e(6),
        s = (i = o) && i.__esModule ? i : { default: i };
      n.default = {
        install: function(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            e = "undefined" != typeof window,
            i = {
              $vm: null,
              state: {
                timer: { fadeAway: null, fill: null },
                isFull: !1,
                isWFA: !1
              },
              init: function(t) {
                this.$vm = t;
              },
              __fillBeginning: function() {
                (this.state.isFull = !1),
                  (this.$vm.INSPB.options.show = !0),
                  (this.$vm.INSPB.options.__isDisplay = !0);
              },
              __fillFinally: function() {
                (this.state.isFull = !0), (this.state.timer.fill = null);
              },
              __fadeBeginning: function() {
                (this.state.isWFA = !1), (this.$vm.INSPB.options.show = !1);
              },
              __fadeFinally: function() {
                (this.$vm.INSPB.options.__isDisplay = !1),
                  (this.state.timer.fadeAway = null),
                  (this.state.isFull = null);
              },
              __isFilling: function() {
                return this.state.timer.fill;
              },
              __isFading: function() {
                return this.state.timer.fadeAway;
              },
              __killFading: function() {
                clearTimeout(this.state.timer.fadeAway),
                  (this.state.isWFA = !1),
                  (this.state.timer.fadeAway = null);
              },
              __waiting: function() {
                this.state.isWFA = !0;
              },
              __isWaiting: function() {
                return this.state.isWFA;
              },
              start: function(t) {
                var n = this;
                this.$vm &&
                  (this.__killFading(),
                  this.__isFilling() ||
                    (this.__fillBeginning(),
                    (this.state.timer.fill = setTimeout(function() {
                      n.__fillFinally(), n.__isWaiting() && n.finish();
                    }, 500))));
              },
              height: function(t) {
                this.$vm.INSPB.options.height = t + "px";
              },
              __hide: function() {
                var t = this;
                this.__isFading() ||
                  (this.__isFilling()
                    ? this.__waiting()
                    : (this.__fadeBeginning(),
                      (this.state.timer.fadeAway = setTimeout(function() {
                        t.__fadeFinally();
                      }, 500))));
              },
              finish: function() {
                this.$vm && this.__hide();
              }
            },
            o = new t({
              data: {
                INSPB: {
                  options: r(
                    {
                      show: !1,
                      __isDisplay: !1,
                      position: "fixed",
                      height: "3px"
                    },
                    n
                  )
                }
              }
            });
          e && ((window.INSPBEventBus = o), i.init(o)),
            t.component("vue-ins-progress-bar", s.default),
            (t.prototype.$insProgress = i);
        }
      };
    },
    function(t, n, e) {
      "use strict";
      e.r(n);
      var i = e(3),
        r = e(0);
      for (var o in r)
        "default" !== o &&
          (function(t) {
            e.d(n, t, function() {
              return r[t];
            });
          })(o);
      e(7);
      var s = e(4),
        a = Object(s.a)(r.default, i.a, i.b, !1, null, "631daf08", null);
      n.default = a.exports;
    },
    function(t, n, e) {
      "use strict";
      var i = e(2);
      e.n(i).a;
    },
    function(t, n, e) {
      (t.exports = e(9)(!1)).push([
        t.i,
        "\n.ins-progress[data-v-631daf08] {\n    background: #a307ba;\n    background: #27c4f5 -webkit-gradient(linear,left top,right top,from(#27c4f5),color-stop(#a307ba),color-stop(#fd8d32),color-stop(#70c050),to(#27c4f5));\n    background: #27c4f5 -webkit-linear-gradient(left,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5);\n    background: #27c4f5 linear-gradient(to right,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5);\n\n    -webkit-animation: 2s linear infinite ins-data-v-631daf08,.5s ease-out insEnter-data-v-631daf08;\n    animation: 2s linear infinite ins-data-v-631daf08,.5s ease-out insEnter-data-v-631daf08;\n\n    -webkit-transition: opacity 0.2s ease-in-out;\n    transition: opacity 0.2s ease-in-out;\n\n    -webkit-transform-origin: left;\n    transform-origin: left;\n\n    background-size: 500%;\n\n    z-index: 999999;\n    position: fixed;\n    display: block;\n    width: 100%;\n    opacity: 1;\n    left: 0;\n    top: 0;\n}\n@-webkit-keyframes ins-data-v-631daf08 {\n0% { background-position: 0% 0\n}\nto { background-position: 125% 0\n}\n}\n@keyframes ins-data-v-631daf08 {\n0% { background-position:0% 0\n}\nto { background-position: 125% 0\n}\n}\n@-webkit-keyframes insEnter-data-v-631daf08 {\n0% { -webkit-transform:scaleX(0); transform:scaleX(0)\n}\nto { -webkit-transform: scaleX(1); transform: scaleX(1)\n}\n}\n@keyframes insEnter-data-v-631daf08 {\n0% { -webkit-transform:scaleX(0); transform:scaleX(0)\n}\nto { -webkit-transform:scaleX(1); transform:scaleX(1)\n}\n}\n\n",
        ""
      ]);
    },
    function(t, n) {
      t.exports = function(t) {
        var n = [];
        return (
          (n.toString = function() {
            return this.map(function(n) {
              var e = (function(t, n) {
                var e = t[1] || "",
                  i = t[3];
                if (!i) return e;
                if (n && "function" == typeof btoa) {
                  var r =
                      ((s = i),
                      "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                        btoa(unescape(encodeURIComponent(JSON.stringify(s)))) +
                        " */"),
                    o = i.sources.map(function(t) {
                      return "/*# sourceURL=" + i.sourceRoot + t + " */";
                    });
                  return [e]
                    .concat(o)
                    .concat([r])
                    .join("\n");
                }
                var s;
                return [e].join("\n");
              })(n, t);
              return n[2] ? "@media " + n[2] + "{" + e + "}" : e;
            }).join("");
          }),
          (n.i = function(t, e) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var i = {}, r = 0; r < this.length; r++) {
              var o = this[r][0];
              "number" == typeof o && (i[o] = !0);
            }
            for (r = 0; r < t.length; r++) {
              var s = t[r];
              ("number" == typeof s[0] && i[s[0]]) ||
                (e && !s[2]
                  ? (s[2] = e)
                  : e && (s[2] = "(" + s[2] + ") and (" + e + ")"),
                n.push(s));
            }
          }),
          n
        );
      };
    },
    function(t, n, e) {
      var i,
        r,
        o = {},
        s =
          ((i = function() {
            return window && document && document.all && !window.atob;
          }),
          function() {
            return void 0 === r && (r = i.apply(this, arguments)), r;
          }),
        a = (function(t) {
          var n = {};
          return function(t) {
            if ("function" == typeof t) return t();
            if (void 0 === n[t]) {
              var e = function(t) {
                return document.querySelector(t);
              }.call(this, t);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (t) {
                  e = null;
                }
              n[t] = e;
            }
            return n[t];
          };
        })(),
        f = null,
        u = 0,
        c = [],
        l = e(11);
      function d(t, n) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e],
            r = o[i.id];
          if (r) {
            r.refs++;
            for (var s = 0; s < r.parts.length; s++) r.parts[s](i.parts[s]);
            for (; s < i.parts.length; s++) r.parts.push(y(i.parts[s], n));
          } else {
            var a = [];
            for (s = 0; s < i.parts.length; s++) a.push(y(i.parts[s], n));
            o[i.id] = { id: i.id, refs: 1, parts: a };
          }
        }
      }
      function p(t, n) {
        for (var e = [], i = {}, r = 0; r < t.length; r++) {
          var o = t[r],
            s = n.base ? o[0] + n.base : o[0],
            a = { css: o[1], media: o[2], sourceMap: o[3] };
          i[s] ? i[s].parts.push(a) : e.push((i[s] = { id: s, parts: [a] }));
        }
        return e;
      }
      function h(t, n) {
        var e = a(t.insertInto);
        if (!e)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var i = c[c.length - 1];
        if ("top" === t.insertAt)
          i
            ? i.nextSibling
              ? e.insertBefore(n, i.nextSibling)
              : e.appendChild(n)
            : e.insertBefore(n, e.firstChild),
            c.push(n);
        else if ("bottom" === t.insertAt) e.appendChild(n);
        else {
          if ("object" != typeof t.insertAt || !t.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var r = a(t.insertInto + " " + t.insertAt.before);
          e.insertBefore(n, r);
        }
      }
      function v(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var n = c.indexOf(t);
        n >= 0 && c.splice(n, 1);
      }
      function b(t) {
        var n = document.createElement("style");
        return (
          void 0 === t.attrs.type && (t.attrs.type = "text/css"),
          m(n, t.attrs),
          h(t, n),
          n
        );
      }
      function m(t, n) {
        Object.keys(n).forEach(function(e) {
          t.setAttribute(e, n[e]);
        });
      }
      function y(t, n) {
        var e, i, r, o;
        if (n.transform && t.css) {
          if (!(o = n.transform(t.css))) return function() {};
          t.css = o;
        }
        if (n.singleton) {
          var s = u++;
          (e = f || (f = b(n))),
            (i = w.bind(null, e, s, !1)),
            (r = w.bind(null, e, s, !0));
        } else
          t.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((e = (function(t) {
                var n = document.createElement("link");
                return (
                  void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                  (t.attrs.rel = "stylesheet"),
                  m(n, t.attrs),
                  h(t, n),
                  n
                );
              })(n)),
              (i = function(t, n, e) {
                var i = e.css,
                  r = e.sourceMap,
                  o = void 0 === n.convertToAbsoluteUrls && r;
                (n.convertToAbsoluteUrls || o) && (i = l(i));
                r &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                    " */");
                var s = new Blob([i], { type: "text/css" }),
                  a = t.href;
                (t.href = URL.createObjectURL(s)), a && URL.revokeObjectURL(a);
              }.bind(null, e, n)),
              (r = function() {
                v(e), e.href && URL.revokeObjectURL(e.href);
              }))
            : ((e = b(n)),
              (i = function(t, n) {
                var e = n.css,
                  i = n.media;
                i && t.setAttribute("media", i);
                if (t.styleSheet) t.styleSheet.cssText = e;
                else {
                  for (; t.firstChild; ) t.removeChild(t.firstChild);
                  t.appendChild(document.createTextNode(e));
                }
              }.bind(null, e)),
              (r = function() {
                v(e);
              }));
        return (
          i(t),
          function(n) {
            if (n) {
              if (
                n.css === t.css &&
                n.media === t.media &&
                n.sourceMap === t.sourceMap
              )
                return;
              i((t = n));
            } else r();
          }
        );
      }
      t.exports = function(t, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        ((n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}),
          n.singleton || "boolean" == typeof n.singleton || (n.singleton = s()),
          n.insertInto || (n.insertInto = "head"),
          n.insertAt || (n.insertAt = "bottom");
        var e = p(t, n);
        return (
          d(e, n),
          function(t) {
            for (var i = [], r = 0; r < e.length; r++) {
              var s = e[r];
              (a = o[s.id]).refs--, i.push(a);
            }
            t && d(p(t, n), n);
            for (r = 0; r < i.length; r++) {
              var a;
              if (0 === (a = i[r]).refs) {
                for (var f = 0; f < a.parts.length; f++) a.parts[f]();
                delete o[a.id];
              }
            }
          }
        );
      };
      var g,
        _ =
          ((g = []),
          function(t, n) {
            return (g[t] = n), g.filter(Boolean).join("\n");
          });
      function w(t, n, e, i) {
        var r = e ? "" : i.css;
        if (t.styleSheet) t.styleSheet.cssText = _(n, r);
        else {
          var o = document.createTextNode(r),
            s = t.childNodes;
          s[n] && t.removeChild(s[n]),
            s.length ? t.insertBefore(o, s[n]) : t.appendChild(o);
        }
      }
    },
    function(t, n) {
      t.exports = function(t) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var e = n.protocol + "//" + n.host,
          i = e + n.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function(t, n) {
            var r,
              o = n
                .trim()
                .replace(/^"(.*)"$/, function(t, n) {
                  return n;
                })
                .replace(/^'(.*)'$/, function(t, n) {
                  return n;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
              ? t
              : ((r =
                  0 === o.indexOf("//")
                    ? o
                    : 0 === o.indexOf("/")
                    ? e + o
                    : i + o.replace(/^\.\//, "")),
                "url(" + JSON.stringify(r) + ")");
          }
        );
      };
    }
  ]);
});
