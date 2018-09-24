!(function(e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "./"),
    n((n.s = 0));
})([
  function(e, t, n) {
    "use strict";
    n.r(t);
    var o = (e, t, n = window.requestAnimationFrame) => {
        let o = !1;
        return (...r) => {
          if (!o)
            return n(() => {
              const n = e(...r);
              t && t(n), (o = !1);
            });
        };
      },
      r = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.maximum,
          r = void 0 === n ? 1280 : n,
          i = t.minimum,
          u = void 0 === i ? 500 : i,
          d = t.maxFont,
          a = void 0 === d ? 40 : d,
          c = t.minFont,
          l = void 0 === c ? 12 : c,
          f = t.fontRatio,
          s = void 0 === f ? 30 : f,
          m = o(function() {
            var t = e.clientWidth,
              n = (t > r ? r : t < u ? u : t) / s,
              o = n > a ? a : n < l ? l : n;
            e.style.fontSize = o + "px";
          });
        return (
          window.addEventListener("resize", m, !1),
          window.addEventListener("orientationchange", m, !1),
          m(),
          {
            update: m,
            destroy: function() {
              window.removeEventListener("resize", m, !1),
                window.removeEventListener("orientationchange", m, !1);
            }
          }
        );
      },
      i = document.getElementById("demo-control"),
      u = document.getElementById("demo-article"),
      d = r(u);
    i.addEventListener("input", function(e) {
      (u.style.width = "".concat(e.target.value, "%")), d.update();
    }),
      (u.style.width = "".concat(i.value, "%")),
      d.update(),
      (document.body.className = "flowtyped");
  }
]);
