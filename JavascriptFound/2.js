var scr, loc, en = function n(t) {
    var r = function n(t) {
          return t.split("").map(function (n) {
             return n.charCodeAt(0)
          })
       },
       $ = function n($) {
          return r(t).reduce(function (n, t) {
             return n ^ t
          }, $)
       },
       i = function n(t) {
          return ("0" + Number(t).toString(16)).substr(-2)
       };
    return function (n) {
       return n.split("").map(r).map($).map(i).join("")
    }
 };
 if (window.screen.width && (scr = window.screen), window.location.pathname && (loc = window.location), !scr || !loc)
    for (var k in Object.getOwnPropertyNames(window)) {
       try {
          !scr && window[k].screen.width && (scr = window[k].screen), !loc && window[k].location.pathname && (loc = window[k].location)
       } catch (n) {}
       if (scr && loc) break
    }
 
 function getResolution() {
    return Math.round(scr.width * window.devicePixelRatio) + "x" + Math.round(scr.height * window.devicePixelRatio)
 }
 
 function WID() {
    var n = [].slice.call(document.getElementsByTagName("script"));
    for (var t in n)
       if (n[t].src.indexOf(".analitik.bik.gov.tr") > 3) return n[t].getAttribute("data-website-id");
    return "function"
 }! function (n) {
    var t = n.screen,
       r = (t.width, t.height, n.navigator.language),
       $ = loc,
       i = (n.localStorage, n.document),
       o = n.history,
       a = $.hostname,
       c = $.pathname,
       u = $.search,
       l = i.currentScript,
       s = function (n, t) {
          return Object.keys(t).forEach(function (r) {
             void 0 !== t[r] && (n[r] = t[r])
          }), n
       },
       d = function (n, t, r) {
          var $ = n[t];
          return function () {
             for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
             return r.apply(null, t), $.apply(n, t)
          }
       },
       f = l && l.getAttribute.bind(l),
       m = l ? f("data-website-id") : WID(),
       v = l ? f("data-host-url") : "https://collector.d.analitik.bik.gov.tr",
       h = (v ? v.replace(/\/$/, "") : l.src.split("/").slice(0, -1).join("/")) + "/api/collect",
       _ = getResolution(),
       p = /^tracker--([a-z]+)--([\w]+[\w-]*)$/,
       b = {},
       y = "" + c + u,
       g = i.referrer,
       L = function () {
          return {
             website: m,
             hostname: a,
             screen: _,
             language: r,
             url: y
          }
       },
       w = function (n, t) {
          var r = new XMLHttpRequest;
          return r.open("POST", h), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send("website=" + t.website + "&hostname=" + t.hostname + "&screen=" + t.screen + "&language=" + t.language + "&url=" + t.url + "&referrer=" + t.referrer + "&fingerprint=" + t.fingerprint + "&auth=" + en("fpr")(t.fingerprint)), "OK"
       },
       V = function () {
          var n, t, r = function () {
             return (r = Object.assign || function (n) {
                for (var t, r = 1, $ = arguments.length; r < $; r++)
                   for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
                return n
             }).apply(this, arguments)
          };
 
          function $(n, t, r, $) {
             return new(r || (r = Promise))(function (i, o) {
                function a(n) {
                   try {
                      u($.next(n))
                   } catch (t) {
                      o(t)
                   }
                }
 
                function c(n) {
                   try {
                      u($.throw(n))
                   } catch (t) {
                      o(t)
                   }
                }
 
                function u(n) {
                   var t;
                   n.done ? i(n.value) : ((t = n.value) instanceof r ? t : new r(function (n) {
                      n(t)
                   })).then(a, c)
                }
                u(($ = $.apply(n, t || [])).next())
             })
          }
 
          function i(n, t) {
             var r, $, i, o, a = {
                label: 0,
                sent: function () {
                   if (1 & i[0]) throw i[1];
                   return i[1]
                },
                trys: [],
                ops: []
             };
             return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
             }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this
             }), o;
 
             function c(c) {
                return function (u) {
                   return function (c) {
                      if (r) throw TypeError("Generator is already executing.");
                      for (; o && (o = 0, c[0] && (a = 0)), a;) try {
                         if (r = 1, $ && (i = 2 & c[0] ? $.return : c[0] ? $.throw || ((i = $.return) && i.call($), 0) : $.next) && !(i = i.call($, c[1])).done) return i;
                         switch ($ = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                            case 0:
                            case 1:
                               i = c;
                               break;
                            case 4:
                               return a.label++, {
                                  value: c[1],
                                  done: !1
                               };
                            case 5:
                               a.label++, $ = c[1], c = [0];
                               continue;
                            case 7:
                               c = a.ops.pop(), a.trys.pop();
                               continue;
                            default:
                               if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                  a = 0;
                                  continue
                               }
                               if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                  a.label = c[1];
                                  break
                               }
                               if (6 === c[0] && a.label < i[1]) {
                                  a.label = i[1], i = c;
                                  break
                               }
                               if (i && a.label < i[2]) {
                                  a.label = i[2], a.ops.push(c);
                                  break
                               }
                               i[2] && a.ops.pop(), a.trys.pop();
                               continue
                         }
                         c = t.call(n, a)
                      } catch (u) {
                         c = [6, u], $ = 0
                      } finally {
                         r = i = 0
                      }
                      if (5 & c[0]) throw c[1];
                      return {
                         value: c[0] ? c[1] : void 0,
                         done: !0
                      }
                   }([c, u])
                }
             }
          }
 
          function o(n, t, r) {
             if (r || 2 === arguments.length)
                for (var $, i = 0, o = t.length; i < o; i++) !$ && i in t || ($ || ($ = Array.prototype.slice.call(t, 0, i)), $[i] = t[i]);
             return n.concat($ || Array.prototype.slice.call(t))
          }
 
          function a(n, t) {
             return new Promise(function (r) {
                return setTimeout(r, n, t)
             })
          }
 
          function c(n) {
             return !!n && "function" == typeof n.then
          }
 
          function u(n, t) {
             try {
                var r = n();
                c(r) ? r.then(function (n) {
                   return t(!0, n)
                }, function (n) {
                   return t(!1, n)
                }) : t(!0, r)
             } catch ($) {
                t(!1, $)
             }
          }
 
          function l(n, t, r) {
             return void 0 === r && (r = 16), $(this, void 0, void 0, function () {
                var $, o, c;
                return i(this, function (i) {
                   switch (i.label) {
                      case 0:
                         $ = Date.now(), o = 0, i.label = 1;
                      case 1:
                         return o < n.length ? (t(n[o], o), (c = Date.now()) >= $ + r ? ($ = c, [4, a(0)]) : [3, 3]) : [3, 4];
                      case 2:
                         i.sent(), i.label = 3;
                      case 3:
                         return ++o, [3, 1];
                      case 4:
                         return [2]
                   }
                })
             })
          }
 
          function s(n) {
             n.then(void 0, function () {})
          }
 
          function d(n, t) {
             n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
             var r = [0, 0, 0, 0];
             return r[3] += n[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += n[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += n[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += n[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
          }
 
          function f(n, t) {
             n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
             var r = [0, 0, 0, 0];
             return r[3] += n[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += n[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += n[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += n[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += n[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += n[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += n[0] * t[3] + n[1] * t[2] + n[2] * t[1] + n[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
          }
 
          function m(n, t) {
             return 32 == (t %= 64) ? [n[1], n[0]] : t < 32 ? [n[0] << t | n[1] >>> 32 - t, n[1] << t | n[0] >>> 32 - t] : (t -= 32, [n[1] << t | n[0] >>> 32 - t, n[0] << t | n[1] >>> 32 - t])
          }
 
          function v(n, t) {
             return 0 == (t %= 64) ? n : t < 32 ? [n[0] << t | n[1] >>> 32 - t, n[1] << t] : [n[1] << t - 32, 0]
          }
 
          function h(n, t) {
             return [n[0] ^ t[0], n[1] ^ t[1]]
          }
 
          function _(n) {
             return n = h(n, [0, n[0] >>> 1]), n = h(n = f(n, [4283543511, 3981806797]), [0, n[0] >>> 1]), n = h(n = f(n, [3301882366, 444984403]), [0, n[0] >>> 1])
          }
 
          function p(n) {
             return parseInt(n)
          }
 
          function b(n) {
             return parseFloat(n)
          }
 
          function y(n, t) {
             return "number" == typeof n && isNaN(n) ? t : n
          }
 
          function g(n) {
             return n.reduce(function (n, t) {
                return n + (t ? 1 : 0)
             }, 0)
          }
 
          function L(n, t) {
             if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(n / t) * t;
             var r = 1 / t;
             return Math.round(n * r) / r
          }
 
          function w(n) {
             return n && "object" == typeof n && "message" in n ? n : {
                message: n
             }
          }
 
          function V(n) {
             return "function" != typeof n
          }
 
          function W(n, t) {
             var r = function (n) {
                return V(n) ? t(n) : function () {
                   var r = n();
                   return c(r) ? r.then(t) : t(r)
                }
             };
             return function (t) {
                var $ = n(t);
                return c($) ? $.then(r) : r($)
             }
          }
 
          function Z() {
             var n = window,
                t = navigator;
             return g(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
          }
 
          function X() {
             var n = window,
                t = navigator;
             return g(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in n, "BatteryManager" in n, "webkitMediaStream" in n, "webkitSpeechGrammar" in n]) >= 5
          }
 
          function S() {
             var n = window,
                t = navigator;
             return g(["ApplePayError" in n, "CSSPrimitiveValue" in n, "Counter" in n, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in n]) >= 4
          }
 
          function Y() {
             var n = window;
             return g(["safari" in n, !("DeviceMotionEvent" in n), !("ongestureend" in n), !("standalone" in navigator)]) >= 3
          }
 
          function x() {
             var n, t, r, $ = X(),
                i = (r = window, g(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (n = document.documentElement) || void 0 === n ? void 0 : n.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in r, "mozInnerScreenX" in r, "CSSMozDocumentRule" in r, "CanvasCaptureMediaStream" in r]) >= 4);
             if (!$ && !i) return !1;
             var o = window;
             return g(["onorientationchange" in o, "orientation" in o, $ && !("SharedWorker" in o), i && /android/i.test(navigator.appVersion)]) >= 2
          }
 
          function F(n) {
             var t = Error(n);
             return t.name = n, t
          }
 
          function R(n, t, r) {
             var o, c, u;
             return void 0 === r && (r = 50), $(this, void 0, void 0, function () {
                var $, l;
                return i(this, function (i) {
                   switch (i.label) {
                      case 0:
                         $ = document, i.label = 1;
                      case 1:
                         return $.body ? [3, 3] : [4, a(r)];
                      case 2:
                         return i.sent(), [3, 1];
                      case 3:
                         l = $.createElement("iframe"), i.label = 4;
                      case 4:
                         return i.trys.push([4, , 10, 11]), [4, new Promise(function (n, r) {
                            var i = !1,
                               o = function () {
                                  i = !0, n()
                               };
                            l.onload = o, l.onerror = function (n) {
                               i = !0, r(n)
                            };
                            var a = l.style;
                            a.setProperty("display", "block", "important"), a.position = "absolute", a.top = "0", a.left = "0", a.visibility = "hidden", t && "srcdoc" in l ? l.srcdoc = t : l.src = "about:blank", $.body.appendChild(l);
                            var c = function () {
                               var n, t;
                               i || ("complete" === (null === (t = null === (n = l.contentWindow) || void 0 === n ? void 0 : n.document) || void 0 === t ? void 0 : t.readyState) ? o() : setTimeout(c, 10))
                            };
                            c()
                         })];
                      case 5:
                         i.sent(), i.label = 6;
                      case 6:
                         return (null === (c = null === (o = l.contentWindow) || void 0 === o ? void 0 : o.document) || void 0 === c ? void 0 : c.body) ? [3, 8] : [4, a(r)];
                      case 7:
                         return i.sent(), [3, 6];
                      case 8:
                         return [4, n(l, l.contentWindow)];
                      case 9:
                         return [2, i.sent()];
                      case 10:
                         return null === (u = l.parentNode) || void 0 === u || u.removeChild(l), [7];
                      case 11:
                         return [2]
                   }
                })
             })
          }
 
          function C(n) {
             for (var t = function (n) {
                   for (var t, r, $ = "Unexpected syntax '".concat(n, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(n), o = i[1] || void 0, a = {}, c = /([.:#][\w-]+|\[.+?\])/gi, u = function (n, t) {
                         a[n] = a[n] || [], a[n].push(t)
                      };;) {
                      var l = c.exec(i[2]);
                      if (!l) break;
                      var s = l[0];
                      switch (s[0]) {
                         case ".":
                            u("class", s.slice(1));
                            break;
                         case "#":
                            u("id", s.slice(1));
                            break;
                         case "[":
                            var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);
                            if (!d) throw Error($);
                            u(d[1], null !== (r = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== r ? r : "");
                            break;
                         default:
                            throw Error($)
                      }
                   }
                   return [o, a]
                }(n), r = t[0], $ = t[1], i = document.createElement(null != r ? r : "div"), o = 0, a = Object.keys($); o < a.length; o++) {
                var c = a[o],
                   u = $[c].join(" ");
                "style" === c ? G(i.style, u) : i.setAttribute(c, u)
             }
             return i
          }
 
          function G(n, t) {
             for (var r = 0, $ = t.split(";"); r < $.length; r++) {
                var i = $[r],
                   o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
                if (o) {
                   var a = o[1],
                      c = o[2],
                      u = o[4];
                   n.setProperty(a, c, u || "")
                }
             }
          }
          var I = ["monospace", "sans-serif", "serif"],
             A = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];
 
          function j(n) {
             return n.toDataURL()
          }
 
          function J() {
             var n = scr;
             return [y(b(n.availTop), null), y(b(n.width) - b(n.availWidth) - y(b(n.availLeft), 0), null), y(b(n.height) - b(n.availHeight) - y(b(n.availTop), 0), null), y(b(n.availLeft), null)]
          }
 
          function M(n) {
             for (var t = 0; t < 4; ++t)
                if (n[t]) return !1;
             return !0
          }
 
          function H(n) {
             n.style.setProperty("display", "block", "important")
          }
 
          function N(n) {
             return matchMedia("(inverted-colors: ".concat(n, ")")).matches
          }
 
          function z(n) {
             return matchMedia("(forced-colors: ".concat(n, ")")).matches
          }
 
          function P(n) {
             return matchMedia("(prefers-contrast: ".concat(n, ")")).matches
          }
 
          function E(n) {
             return matchMedia("(prefers-reduced-motion: ".concat(n, ")")).matches
          }
 
          function B(n) {
             return matchMedia("(dynamic-range: ".concat(n, ")")).matches
          }
          var D = Math,
             T = function () {
                return 0
             },
             O = {
                default: [],
                apple: [{
                   font: "-apple-system-body"
                }],
                serif: [{
                   fontFamily: "serif"
                }],
                sans: [{
                   fontFamily: "sans-serif"
                }],
                mono: [{
                   fontFamily: "monospace"
                }],
                min: [{
                   fontSize: "1px"
                }],
                system: [{
                   fontFamily: "system-ui"
                }]
             },
             Q = {
                fonts: function () {
                   return R(function (n, t) {
                      var r = t.document,
                         $ = r.body;
                      $.style.fontSize = "48px";
                      var i = r.createElement("div"),
                         o = {},
                         a = {},
                         c = function (n) {
                            var t = r.createElement("span"),
                               $ = t.style;
                            return $.position = "absolute", $.top = "0", $.left = "0", $.fontFamily = n, t.textContent = "mmMwWLliI0O&1", i.appendChild(t), t
                         },
                         u = I.map(c),
                         l = function () {
                            for (var n = {}, t = function (t) {
                                  n[t] = I.map(function (n) {
                                     var r, $;
                                     return r = t, $ = n, c("'".concat(r, "',").concat($))
                                  })
                               }, r = 0, $ = A; r < $.length; r++) t($[r]);
                            return n
                         }();
                      $.appendChild(i);
                      for (var s = 0; s < I.length; s++) o[I[s]] = u[s].offsetWidth, a[I[s]] = u[s].offsetHeight;
                      return A.filter(function (n) {
                         var t;
                         return t = l[n], I.some(function (n, r) {
                            return t[r].offsetWidth !== o[n] || t[r].offsetHeight !== a[n]
                         })
                      })
                   })
                },
                domBlockers: function (n) {
                   var t = (void 0 === n ? {} : n).debug;
                   return $(this, void 0, void 0, function () {
                      var n, r, o, c, u;
                      return i(this, function (l) {
                         var s;
                         switch (l.label) {
                            case 0:
                               return S() || x() ? (r = Object.keys(n = {
                                  abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", (s = atob)("YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld"), '[title="ALIENBOLA" i]'],
                                  abpvn: ["#quangcaomb", s("Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ="), ".quangcao", s("W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=="), s("W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=")],
                                  adBlockFinland: [".mainostila", s("LnNwb25zb3JpdA=="), ".ylamainos", s("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                                  adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", s("I2FkMl9pbmxpbmU=")],
                                  adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", s("LmhlYWRlci1ibG9ja2VkLWFk"), s("I2FkX2Jsb2NrZXI=")],
                                  adGuardAnnoyances: ['amp-embed[type="zen"]', ".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil"],
                                  adGuardBase: [".BetterJsPopOverlay", s("I2FkXzMwMFgyNTA="), s("I2Jhbm5lcmZsb2F0MjI="), s("I2FkLWJhbm5lcg=="), s("I2NhbXBhaWduLWJhbm5lcg==")],
                                  adGuardChinese: [s("LlppX2FkX2FfSA=="), s("YVtocmVmKj0iL29kMDA1LmNvbSJd"), s("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), ".qq_nr_lad", "#widget-quan"],
                                  adGuardFrench: [s("I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr"), "#pavePub", s("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv"],
                                  adGuardGerman: [s("LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=="), s("LmJveHN0YXJ0d2VyYnVuZw=="), s("LndlcmJ1bmcz"), s("YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0="), s("YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=")],
                                  adGuardJapanese: ["#kauli_yad_1", s("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), s("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), s("LmFkZ29vZ2xl"), s("LmFkX3JlZ3VsYXIz")],
                                  adGuardMobile: [s("YW1wLWF1dG8tYWRz"), s("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", s("I2FkX2ludmlld19hcmVh")],
                                  adGuardRussian: [s("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), s("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', s("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), s("I2FkX3NxdWFyZQ==")],
                                  adGuardSocial: [s("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), s("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                                  adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", s("W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=")],
                                  adGuardTrackingProtection: ["#qoo-counter", s("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), s("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), s("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                                  adGuardTurkish: ["#backkapat", s("I3Jla2xhbWk="), s("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), s("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), s("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                                  bulgarian: [s("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers", s("I25ld0Fk")],
                                  easyList: [s("I0FEX0NPTlRST0xfMjg="), s("LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy"), ".universalboxADVBOX03", s("LmFkdmVydGlzZW1lbnQtNzI4eDkw"), s("LnNxdWFyZV9hZHM=")],
                                  easyListChina: [s("YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0="), s("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), s("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box"],
                                  easyListCookie: ["#AdaCompliance.app-notice", ".text-center.rgpd", ".panel--cookie", ".js-cookies-andromeda", ".elxtr-consent"],
                                  easyListCzechSlovak: ["#onlajny-stickers", s("I3Jla2xhbW5pLWJveA=="), s("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", s("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                                  easyListDutch: [s("I2FkdmVydGVudGll"), s("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", s("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                                  easyListGermany: [s("I0FkX1dpbjJkYXk="), s("I3dlcmJ1bmdzYm94MzAw"), s("YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd"), s("I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu"), s("YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=")],
                                  easyListItaly: [s("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", s("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                                  easyListLithuania: [s("LnJla2xhbW9zX3RhcnBhcw=="), s("LnJla2xhbW9zX251b3JvZG9z"), s("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), s("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), s("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                                  estonian: [s("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                                  fanboyAnnoyances: ["#feedback-tab", "#taboola-below-article", ".feedburnerFeedBlock", ".widget-feedburner-counter", '[title="Subscribe to our blog"]'],
                                  fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                                  fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                                  fanboySocial: [".td-tags-and-social-wrapper-box", ".twitterContainer", ".youtube-social", 'a[title^="Like us on Facebook"]', 'img[alt^="Share on Digg"]'],
                                  frellwitSwedish: [s("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), s("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", s("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                                  greekAdBlock: [s("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), s("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), s("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                                  hungarian: ["#cemp_doboz", ".optimonk-iframe-container", s("LmFkX19tYWlu"), s("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                                  iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", ".cookie-msg-info-container", "#cookies-policy-sticky"],
                                  icelandicAbp: [s("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                                  latvian: [s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                                  listKr: [s("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), s("I2xpdmVyZUFkV3JhcHBlcg=="), s("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), s("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                                  listeAr: [s("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", s("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), s("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), s("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                                  listeFr: [s("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), s("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), s("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                                  officialPolish: ["#ceneo-placeholder-ceneo-12", s("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), s("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), s("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), s("ZGl2I3NrYXBpZWNfYWQ=")],
                                  ro: [s("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), 'a[href^="/magazin/"]', s("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), s("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd")],
                                  ruAd: [s("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), s("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), s("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                                  thaiAds: ["a[href*=macau-uta-popup]", s("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), s("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                                  webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", s("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                               }), [4, function n(t) {
                                  var r;
                                  return $(this, void 0, void 0, function () {
                                     var n, $, o, c, u, l, s;
                                     return i(this, function (i) {
                                        switch (i.label) {
                                           case 0:
                                              for ($ = (n = document).createElement("div"), o = Array(t.length), c = {}, H($), s = 0; s < t.length; ++s) u = C(t[s]), H(l = n.createElement("div")), l.appendChild(u), $.appendChild(l), o[s] = u;
                                              i.label = 1;
                                           case 1:
                                              return n.body ? [3, 3] : [4, a(50)];
                                           case 2:
                                              return i.sent(), [3, 1];
                                           case 3:
                                              n.body.appendChild($);
                                              try {
                                                 for (s = 0; s < t.length; ++s) o[s].offsetParent || (c[t[s]] = !0)
                                              } finally {
                                                 null === (r = $.parentNode) || void 0 === r || r.removeChild($)
                                              }
                                              return [2, c]
                                        }
                                     })
                                  })
                               }((u = []).concat.apply(u, r.map(function (t) {
                                  return n[t]
                               })))]) : [2, void 0];
                            case 1:
                               return o = l.sent(), t && function (n, t) {
                                  for (var r = "DOM blockers debug:\n", $ = 0, i = Object.keys(n); $ < i.length; $++) {
                                     var o = i[$];
                                     r += "\n".concat(o, ":");
                                     for (var a = 0, c = n[o]; a < c.length; a++) {
                                        var u = c[a];
                                        r += "\n  ".concat(t[u] ? "\uD83D\uDEAB" : "âž¡ï¸", " ").concat(u)
                                     }
                                  }
                               }(n, o), (c = r.filter(function (t) {
                                  var r = n[t];
                                  return g(r.map(function (n) {
                                     return o[n]
                                  })) > .6 * r.length
                               })).sort(), [2, c]
                         }
                      })
                   })
                },
                fontPreferences: function () {
                   var n, t;
                   return n = function (n, t) {
                      for (var r = {}, $ = {}, i = 0, o = Object.keys(O); i < o.length; i++) {
                         var a = o[i],
                            c = O[a],
                            u = c[0],
                            l = void 0 === u ? {} : u,
                            s = c[1],
                            d = void 0 === s ? "mmMwWLliI0fiflO&1" : s,
                            f = n.createElement("span");
                         f.textContent = d, f.style.whiteSpace = "nowrap";
                         for (var m = 0, v = Object.keys(l); m < v.length; m++) {
                            var h = v[m],
                               _ = l[h];
                            void 0 !== _ && (f.style[h] = _)
                         }
                         r[a] = f, t.appendChild(n.createElement("br")), t.appendChild(f)
                      }
                      for (var p = 0, b = Object.keys(O); p < b.length; p++) $[a = b[p]] = r[a].getBoundingClientRect().width;
                      return $
                   }, void 0 === t && (t = 4e3), R(function (r, $) {
                      var i = $.document,
                         a = i.body,
                         c = a.style;
                      c.width = "".concat(t, "px"), c.webkitTextSizeAdjust = c.textSizeAdjust = "none", X() ? a.style.zoom = "".concat(1 / $.devicePixelRatio) : S() && (a.style.zoom = "reset");
                      var u = i.createElement("div");
                      return u.textContent = o([], Array(t / 20 << 0), !0).map(function () {
                         return "word"
                      }).join(" "), a.appendChild(u), n(i, a)
                   }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
                },
                audio: function () {
                   var n = window,
                      t = n.OfflineAudioContext || n.webkitOfflineAudioContext;
                   if (!t) return -2;
                   if (S() && !Y() && (i = window, !(g(["DOMRectList" in i, "RTCPeerConnectionIceEvent" in i, "SVGGeometryElement" in i, "ontransitioncancel" in i]) >= 3))) return -1;
                   var r = new t(1, 5e3, 44100),
                      $ = r.createOscillator();
                   $.type = "triangle", $.frequency.value = 1e4;
                   var i, o, a, c = r.createDynamicsCompressor();
                   c.threshold.value = -50, c.knee.value = 40, c.ratio.value = 12, c.attack.value = 0, c.release.value = .25, $.connect(c), c.connect(r.destination), $.start(0);
                   var u = (o = r, a = function () {}, [new Promise(function (n, t) {
                         var r = !1,
                            $ = 0,
                            i = 0;
                         o.oncomplete = function (t) {
                            return n(t.renderedBuffer)
                         };
                         var c = function () {
                               setTimeout(function () {
                                  return t(F("timeout"))
                               }, Math.min(500, i + 5e3 - Date.now()))
                            },
                            u = function () {
                               try {
                                  switch (o.startRendering(), o.state) {
                                     case "running":
                                        i = Date.now(), r && c();
                                        break;
                                     case "suspended":
                                        document.hidden || $++, r && $ >= 3 ? t(F("suspended")) : setTimeout(u, 500)
                                  }
                               } catch (n) {
                                  t(n)
                               }
                            };
                         u(), a = function () {
                            r || (r = !0, i > 0 && c())
                         }
                      }), a]),
                      l = u[0],
                      d = u[1],
                      f = l.then(function (n) {
                         return function (n) {
                            for (var t = 0, r = 0; r < n.length; ++r) t += Math.abs(n[r]);
                            return t
                         }(n.getChannelData(0).subarray(4500))
                      }, function (n) {
                         if ("timeout" === n.name || "suspended" === n.name) return -3;
                         throw n
                      });
                   return s(f),
                      function () {
                         return d(), f
                      }
                },
                screenFrame: function () {
                   var r = this,
                      a = function r() {
                         var a = this;
                         return function () {
                               if (void 0 === t) {
                                  var r = function () {
                                     var $ = J();
                                     M($) ? t = setTimeout(r, 2500) : (n = $, t = void 0)
                                  };
                                  r()
                               }
                            }(),
                            function () {
                               return $(a, void 0, void 0, function () {
                                  var t;
                                  return i(this, function (r) {
                                     var $, i;
                                     switch (r.label) {
                                        case 0:
                                           return M(t = J()) ? n ? [2, o([], n, !0)] : (i = document).fullscreenElement || i.msFullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement ? [4, (($ = document).exitFullscreen || $.msExitFullscreen || $.mozCancelFullScreen || $.webkitExitFullscreen).call($)] : [3, 2] : [3, 2];
                                        case 1:
                                           r.sent(), t = J(), r.label = 2;
                                        case 2:
                                           return M(t) || (n = t), [2, t]
                                     }
                                  })
                               })
                            }
                      }();
                   return function () {
                      return $(r, void 0, void 0, function () {
                         var n, t;
                         return i(this, function (r) {
                            switch (r.label) {
                               case 0:
                                  return [4, a()];
                               case 1:
                                  return n = r.sent(), [2, [(t = function (n) {
                                     return null === n ? null : L(n, 10)
                                  })(n[0]), t(n[1]), t(n[2]), t(n[3])]]
                            }
                         })
                      })
                   }
                },
                osCpu: function () {
                   return navigator.oscpu
                },
                languages: function () {
                   var n, t = navigator,
                      r = [],
                      $ = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
                   if (void 0 !== $ && r.push([$]), Array.isArray(t.languages)) X() && g([!("MediaSettingsRange" in (n = window)), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3 || r.push(t.languages);
                   else if ("string" == typeof t.languages) {
                      var i = t.languages;
                      i && r.push(i.split(","))
                   }
                   return r
                },
                colorDepth: function () {
                   return scr.colorDepth
                },
                deviceMemory: function () {
                   return y(b(navigator.deviceMemory), void 0)
                },
                screenResolution: function () {
                   var n = scr,
                      t = function (n) {
                         return y(p(n), null)
                      },
                      r = [t(n.width), t(n.height)];
                   return r.sort().reverse(), r
                },
                hardwareConcurrency: function () {
                   return y(p(navigator.hardwareConcurrency), void 0)
                },
                timezone: function () {
                   var n, t = null === (n = window.Intl) || void 0 === n ? void 0 : n.DateTimeFormat;
                   if (t) {
                      var r = (new t).resolvedOptions().timeZone;
                      if (r) return r
                   }
                   var $, i = ($ = (new Date).getFullYear(), -Math.max(b(new Date($, 0, 1).getTimezoneOffset()), b(new Date($, 6, 1).getTimezoneOffset())));
                   return "UTC".concat(i >= 0 ? "+" : "").concat(Math.abs(i))
                },
                sessionStorage: function () {
                   try {
                      return !!window.sessionStorage
                   } catch (n) {
                      return !0
                   }
                },
                indexedDB: function () {
                   var n, t;
                   if (!Z() && (n = window, t = navigator, !(g(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3) || Z())) try {
                      return !!window.indexedDB
                   } catch (r) {
                      return !0
                   }
                },
                openDatabase: function () {
                   return !!window.openDatabase
                },
                cpuClass: function () {
                   return navigator.cpuClass
                },
                platform: function () {
                   var n = navigator.platform;
                   return "MacIntel" === n && S() && !Y() ? ! function () {
                      if ("iPad" === navigator.platform) return !0;
                      var n = scr,
                         t = n.width / n.height;
                      return g(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
                   }() ? "iPhone" : "iPad" : n
                },
                plugins: function () {
                   var n = navigator.plugins;
                   if (n) {
                      for (var t = [], r = 0; r < n.length; ++r) {
                         var $ = n[r];
                         if ($) {
                            for (var i = [], o = 0; o < $.length; ++o) {
                               var a = $[o];
                               i.push({
                                  type: a.type,
                                  suffixes: a.suffixes
                               })
                            }
                            t.push({
                               name: $.name,
                               description: $.description,
                               mimeTypes: i
                            })
                         }
                      }
                      return t
                   }
                },
                touchSupport: function () {
                   var n, t = navigator,
                      r = 0;
                   void 0 !== t.maxTouchPoints ? r = p(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (r = t.msMaxTouchPoints);
                   try {
                      document.createEvent("TouchEvent"), n = !0
                   } catch ($) {
                      n = !1
                   }
                   return {
                      maxTouchPoints: r,
                      touchEvent: n,
                      touchStart: "ontouchstart" in window
                   }
                },
                vendor: function () {
                   return navigator.vendor || ""
                },
                vendorFlavors: function () {
                   for (var n = [], t = 0, r = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < r.length; t++) {
                      var $ = r[t],
                         i = window[$];
                      i && "object" == typeof i && n.push($)
                   }
                   return n.sort()
                },
                cookiesEnabled: function () {
                   var n = document;
                   try {
                      n.cookie = "cookietest=1; SameSite=Strict;";
                      var t = -1 !== n.cookie.indexOf("cookietest=");
                      return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
                   } catch (r) {
                      return !1
                   }
                },
                colorGamut: function () {
                   for (var n = 0, t = ["rec2020", "p3", "srgb"]; n < t.length; n++) {
                      var r = t[n];
                      if (matchMedia("(color-gamut: ".concat(r, ")")).matches) return r
                   }
                },
                invertedColors: function () {
                   return !!N("inverted") || !N("none") && void 0
                },
                forcedColors: function () {
                   return !!z("active") || !z("none") && void 0
                },
                monochrome: function () {
                   if (matchMedia("(min-monochrome: 0)").matches) {
                      for (var n = 0; n <= 100; ++n)
                         if (matchMedia("(max-monochrome: ".concat(n, ")")).matches) return n;
                      throw Error("Too high value")
                   }
                },
                contrast: function () {
                   return P("no-preference") ? 0 : P("high") || P("more") ? 1 : P("low") || P("less") ? -1 : P("forced") ? 10 : void 0
                },
                reducedMotion: function () {
                   return !!E("reduce") || !E("no-preference") && void 0
                },
                math: function () {
                   var n, t = D.acos || T,
                      r = D.acosh || T,
                      $ = D.asin || T,
                      i = D.asinh || T,
                      o = D.atanh || T,
                      a = D.atan || T,
                      c = D.sin || T,
                      u = D.sinh || T,
                      l = D.cos || T,
                      s = D.cosh || T,
                      d = D.tan || T,
                      f = D.tanh || T,
                      m = D.exp || T,
                      v = D.expm1 || T,
                      h = D.log1p || T;
                   return {
                      acos: t(.12312423423423424),
                      acosh: r(1e308),
                      acoshPf: (n = 1e154, D.log(n + D.sqrt(n * n - 1))),
                      asin: $(.12312423423423424),
                      asinh: i(1),
                      asinhPf: D.log(1 + D.sqrt(2)),
                      atanh: o(.5),
                      atanhPf: D.log(3) / 2,
                      atan: a(.5),
                      sin: c(-1e300),
                      sinh: u(1),
                      sinhPf: D.exp(1) - 1 / D.exp(1) / 2,
                      cos: l(10.000000000123),
                      cosh: s(1),
                      coshPf: (D.exp(1) + 1 / D.exp(1)) / 2,
                      tan: d(-1e300),
                      tanh: f(1),
                      tanhPf: (D.exp(2) - 1) / (D.exp(2) + 1),
                      exp: m(1),
                      expm1: v(1),
                      expm1Pf: D.exp(1) - 1,
                      log1p: h(10),
                      log1pPf: D.log(11),
                      powPI: D.pow(D.PI, -100)
                   }
                },
                videoCard: function () {
                   var n, t = document.createElement("videoCard"),
                      r = null !== (n = t.getContext("webgl")) && void 0 !== n ? n : t.getContext("experimental-webgl");
                   if (r && "getExtension" in r) {
                      var $ = r.getExtension("WEBGL_debug_renderer_info");
                      if ($) return {
                         vendor: (r.getParameter($.UNMASKED_VENDOR_WEBGL) || "").toString(),
                         renderer: (r.getParameter($.UNMASKED_RENDERER_WEBGL) || "").toString()
                      }
                   }
                },
                pdfViewerEnabled: function () {
                   return navigator.pdfViewerEnabled
                },
                architecture: function () {
                   var n = new Float32Array(1),
                      t = new Uint8Array(n.buffer);
                   return n[0] = 1 / 0, n[0] = n[0] - n[0], t[3]
                }
             };
 
          function U(n) {
             return JSON.stringify(n, function (n, t) {
                var $, i;
                return t instanceof Error ? r({
                   name: ($ = t).name,
                   message: $.message,
                   stack: null === (i = $.stack) || void 0 === i ? void 0 : i.split("\n")
                }, $) : t
             }, 2)
          }
          return function n(t) {
             var r = void 0 === t ? {} : t,
                o = r.delayFallback,
                c = r.debug;
             return r.monitoring, $(this, void 0, void 0, function () {
                return i(this, function (n) {
                   var t, r, p, b, y, g, W, Z, X, F, R;
                   switch (n.label) {
                      case 0:
                         return [4, (void 0 === (t = o) && (t = 50), r = t, p = 2 * t, (b = window.requestIdleCallback) ? new Promise(function (n) {
                            return b.call(window, function () {
                               return n()
                            }, {
                               timeout: p
                            })
                         }) : a(Math.min(r, p)))];
                      case 1:
                         return n.sent(), [2, (F = (y = Q, g = {
                            debug: c
                         }, W = [], X = Array((Z = Object.keys(y).filter(function (n) {
                            return ! function (n, t) {
                               for (var r = 0, $ = n.length; r < $; ++r)
                                  if (n[r] === t) return !0;
                               return !1
                            }(W, n)
                         })).length), l(Z, function (n, t) {
                            var r, $, i;
                            X[t] = (r = y[n], $ = g, i = new Promise(function (n) {
                               var t = Date.now();
                               u(r.bind(null, $), function () {
                                  for (var r = [], $ = 0; $ < arguments.length; $++) r[$] = arguments[$];
                                  var i = Date.now() - t;
                                  if (!r[0]) return n(function () {
                                     return {
                                        error: w(r[1]),
                                        duration: i
                                     }
                                  });
                                  var o = r[1];
                                  if (V(o)) return n(function () {
                                     return {
                                        value: o,
                                        duration: i
                                     }
                                  });
                                  n(function () {
                                     return new Promise(function (n) {
                                        var t = Date.now();
                                        u(o, function () {
                                           for (var r = [], $ = 0; $ < arguments.length; $++) r[$] = arguments[$];
                                           var o = i + Date.now() - t;
                                           if (!r[0]) return n({
                                              error: w(r[1]),
                                              duration: o
                                           });
                                           n({
                                              value: r[1],
                                              duration: o
                                           })
                                        })
                                     })
                                  })
                               })
                            }), s(i), function () {
                               return i.then(function (n) {
                                  return n()
                               })
                            })
                         }), function () {
                            return $(this, void 0, void 0, function () {
                               var n, t, r, $, o, c;
                               return i(this, function (u) {
                                  switch (u.label) {
                                     case 0:
                                        for (n = {}, t = 0, r = Z; t < r.length; t++) n[$ = r[t]] = void 0;
                                        o = Array(Z.length), c = function () {
                                           var t;
                                           return i(this, function (r) {
                                              switch (r.label) {
                                                 case 0:
                                                    return t = !0, [4, l(Z, function (r, $) {
                                                       if (!o[$]) {
                                                          if (X[$]) {
                                                             var i = X[$]().then(function (t) {
                                                                return n[r] = t
                                                             });
                                                             s(i), o[$] = i
                                                          } else t = !1
                                                       }
                                                    })];
                                                 case 1:
                                                    return r.sent(), t ? [2, "break"] : [4, a(1)];
                                                 case 2:
                                                    return r.sent(), [2]
                                              }
                                           })
                                        }, u.label = 1;
                                     case 1:
                                        return [5, c()];
                                     case 2:
                                        if ("break" === u.sent()) return [3, 4];
                                        u.label = 3;
                                     case 3:
                                        return [3, 1];
                                     case 4:
                                        return [4, Promise.all(o)];
                                     case 5:
                                        return u.sent(), [2, n]
                                  }
                               })
                            })
                         }), R = c, Date.now(), {
                            get: function (n) {
                               return $(this, void 0, void 0, function () {
                                  var t, r, $;
                                  return i(this, function (i) {
                                     switch (i.label) {
                                        case 0:
                                           return t = Date.now(), [4, F()];
                                        case 1:
                                           var o, a, c, u, l, s;
                                           return $ = {
                                              get visitorId() {
                                                 var p;
                                                 return void 0 === a && (a = function n(t, r) {
                                                    r = r || 0;
                                                    var $, i = (t = t || "").length % 16,
                                                       o = t.length - i,
                                                       a = [0, r],
                                                       c = [0, r],
                                                       u = [0, 0],
                                                       l = [0, 0],
                                                       s = [2277735313, 289559509],
                                                       p = [1291169091, 658871167];
                                                    for ($ = 0; $ < o; $ += 16) u = [255 & t.charCodeAt($ + 4) | (255 & t.charCodeAt($ + 5)) << 8 | (255 & t.charCodeAt($ + 6)) << 16 | (255 & t.charCodeAt($ + 7)) << 24, 255 & t.charCodeAt($) | (255 & t.charCodeAt($ + 1)) << 8 | (255 & t.charCodeAt($ + 2)) << 16 | (255 & t.charCodeAt($ + 3)) << 24], l = [255 & t.charCodeAt($ + 12) | (255 & t.charCodeAt($ + 13)) << 8 | (255 & t.charCodeAt($ + 14)) << 16 | (255 & t.charCodeAt($ + 15)) << 24, 255 & t.charCodeAt($ + 8) | (255 & t.charCodeAt($ + 9)) << 8 | (255 & t.charCodeAt($ + 10)) << 16 | (255 & t.charCodeAt($ + 11)) << 24], u = m(u = f(u, s), 31), a = d(a = m(a = h(a, u = f(u, p)), 27), c), a = d(f(a, [0, 5]), [0, 1390208809]), l = m(l = f(l, p), 33), c = d(c = m(c = h(c, l = f(l, s)), 31), a), c = d(f(c, [0, 5]), [0, 944331445]);
                                                    switch (u = [0, 0], l = [0, 0], i) {
                                                       case 15:
                                                          l = h(l, v([0, t.charCodeAt($ + 14)], 48));
                                                       case 14:
                                                          l = h(l, v([0, t.charCodeAt($ + 13)], 40));
                                                       case 13:
                                                          l = h(l, v([0, t.charCodeAt($ + 12)], 32));
                                                       case 12:
                                                          l = h(l, v([0, t.charCodeAt($ + 11)], 24));
                                                       case 11:
                                                          l = h(l, v([0, t.charCodeAt($ + 10)], 16));
                                                       case 10:
                                                          l = h(l, v([0, t.charCodeAt($ + 9)], 8));
                                                       case 9:
                                                          l = f(l = h(l, [0, t.charCodeAt($ + 8)]), p), c = h(c, l = f(l = m(l, 33), s));
                                                       case 8:
                                                          u = h(u, v([0, t.charCodeAt($ + 7)], 56));
                                                       case 7:
                                                          u = h(u, v([0, t.charCodeAt($ + 6)], 48));
                                                       case 6:
                                                          u = h(u, v([0, t.charCodeAt($ + 5)], 40));
                                                       case 5:
                                                          u = h(u, v([0, t.charCodeAt($ + 4)], 32));
                                                       case 4:
                                                          u = h(u, v([0, t.charCodeAt($ + 3)], 24));
                                                       case 3:
                                                          u = h(u, v([0, t.charCodeAt($ + 2)], 16));
                                                       case 2:
                                                          u = h(u, v([0, t.charCodeAt($ + 1)], 8));
                                                       case 1:
                                                          u = f(u = h(u, [0, t.charCodeAt($)]), s), a = h(a, u = f(u = m(u, 31), p))
                                                    }
                                                    return a = d(a = h(a, [0, t.length]), c = h(c, [0, t.length])), c = d(c, a), a = d(a = _(a), c = _(c)), c = d(c, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
                                                 }(function (n) {
                                                    for (var t = "", r = 0, $ = Object.keys(n).sort(); r < $.length; r++) {
                                                       var i = $[r],
                                                          o = n[i],
                                                          a = o.error ? "error" : JSON.stringify(o.value);
                                                       t += "".concat(t ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(a)
                                                    }
                                                    return t
                                                 }(p = this.components))), a
                                              },
                                              set visitorId(e) {
                                                 a = e
                                              },
                                              confidence: (l = function (n) {
                                                 if (x()) return .4;
                                                 if (S()) return Y() ? .5 : .3;
                                                 var t = n.platform.value || "";
                                                 return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
                                              }(c = o = r = i.sent()), s = L(.99 + .01 * (u = l), 1e-4), {
                                                 score: l,
                                                 comment: "$ if ".replace(/\$/g, "".concat(s))
                                              }),
                                              components: o,
                                              version: "3.4.0"
                                           }, R || null == n || n.debug, [2, $]
                                     }
                                  })
                               })
                            }
                         })]
                   }
                })
             })
          }()
       },
       W = function (n, t, r) {
          return V().then(function (n) {
             return n.get()
          }).then(function ($) {
             return void 0 === n && (n = y), void 0 === t && (t = g), void 0 === r && (r = m), w("pageview", s(L(), {
                website: r,
                url: n,
                referrer: t,
                fingerprint: $.visitorId
             }))
          })
       },
       Z = function (n, t, r, $) {
          return void 0 === r && (r = y), void 0 === $ && ($ = m), w("event", s(L(), {
             website: $,
             url: r,
             event_name: n,
             event_data: t
          }))
       },
       X = function (n) {
          var t = n.querySelectorAll("[class*='tracker--']");
          Array.prototype.forEach.call(t, S)
       },
       S = function (n) {
          var t = n.getAttribute.bind(n);
          (t("class") || "").split(" ").forEach(function (r) {
             if (p.test(r)) {
                var i = r.split("--"),
                   o = i[1],
                   a = i[2],
                   c = b[r] ? b[r] : b[r] = function (r) {
                      "click" !== o || "A" !== n.tagName || r.ctrlKey || r.shiftKey || r.metaKey || r.button && 1 === r.button || t("target") ? Z(a) : (r.preventDefault(), Z(a).then(function () {
                         var n = t("href");
                         n && ($.href = n)
                      }))
                   };
                n.addEventListener(o, c, !0)
             }
          })
       },
       Y = function (n, t, r) {
          if (r) {
             g = y;
             var $ = r.toString();
             (y = "http" === $.substring(0, 4) ? "/" + $.split("/").splice(3).join("/") : $) !== g && W()
          }
       };
    if (!n.tracker) {
       var x = function (n) {
          return Z(n)
       };
       x.trackView = W, x.trackEvent = Z, n.tracker = x
    }
    o.pushState = d(o, "pushState", Y), o.replaceState = d(o, "replaceState", Y);
    var F = function () {
       "complete" === i.readyState && (W(), X(i), new MutationObserver(function (n) {
          n.forEach(function (n) {
             var t = n.target;
             S(t), X(t)
          })
       }).observe(i, {
          childList: !0,
          subtree: !0
       }))
    };
    i.addEventListener("readystatechange", F, !0), F()
 }(window);