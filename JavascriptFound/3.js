! function (n, t, r, i, a, o, e, c, u, f, s, l, m, h, v) {
    var p, d = 395,
       g = "isg",
       y = c,
       b = !!y.addEventListener,
       w = u.getElementsByTagName("head")[0],
       _ = f.userAgent;
    ! function (n) {
       function t() {
          return 4294967295 * i.random() >>> 0
       }
 
       function o(n) {
          var t;
          switch (typeof n) {
             case "function":
                t = w.call(n);
                break;
             case "object":
                try {
                   t = n + ""
                } catch (r) {
                   return !1
                }
                break;
             default:
                return !1
          }
          return g.test(t)
       }
 
       function e(n) {
          for (var t = 0, r = 0, i = n.length; r < i; r++) t = (t << 5) - t + n.charCodeAt(r), t >>>= 0;
          return t
       }
 
       function c(n, t) {
          var r = n.indexOf(t);
          return -1 === r ? n : n.substr(0, r)
       }
 
       function f(n, t) {
          var r = n.indexOf(t);
          return -1 === r ? n : n.substr(r + t.length)
       }
 
       function s(n) {
          var t = n.match(_);
          if (!t) return null;
          var r = t[1];
          return k.test(r) && (r = f(r, "@"), r = c(r, ":")), r
       }
 
       function l(n) {
          for (var t = 0, r = n.length - 1; r >= 0; r--) {
             t = t << 1 | (0 | +n[r])
          }
          return t
       }
 
       function m(n, t, r, i) {
          b ? n.addEventListener(t, r, i) : n.attachEvent && n.attachEvent("on" + t, function () {
             r(event)
          })
       }
 
       function h(n) {
          try {
             return localStorage[n + "__"]
          } catch (t) {}
       }
 
       function v(n, t) {
          try {
             localStorage[n + "__"] = t
          } catch (r) {}
       }
 
       function p() {
          var n = y.outerWidth;
          return null == n && (n = u.documentElement.clientWidth || u.body.clientWidth), n
       }
 
       function d() {
          var n = y.outerHeight;
          return null == n && (n = u.documentElement.clientHeight || u.body.clientHeight), n
       }
       n.a = t;
       var g = /native code/,
          w = r.prototype.toString;
       n.b = o, n.c = e, n.d = a.now || function () {
          return +new a
       }, n.e = c, n.f = f;
       var _ = /^(?:https?:)?\/{2,}([^/?#\\]+)/i,
          k = /[@:]/;
       n.g = s, n.h = l, n.i = m, n.j = h, n.k = v, n.l = p, n.m = d
    }(p || (p = {}));
    var k, x = function () {
       function n(n) {
          this.n = new o("(?:^|; )" + n + "=([^;]+)", "g"), this.o = n + "=", this.p = ""
       }
       return n.prototype.q = function () {
          try {
             var n = u.cookie
          } catch (i) {
             return
          }
          for (var t, r = []; t = this.n.exec(n);) r.push(t[1]);
          return r
       }, n.prototype.r = function () {
          return this.q()[0]
       }, n.prototype.s = function (n) {
          if (!this.p) {
             var t = "";
             this.t && (t += "; domain=" + this.t), this.u && (t += "; path=" + this.u), this.v && (t += "; expires=" + this.v), this.p = t
          }
          try {
             u.cookie = this.o + n + this.p
          } catch (r) {}
       }, n.prototype.w = function () {
          var n = this.v;
          this.x("Thu, 01 Jan 1970 00:00:00 GMT"), this.s(""), this.x(n)
       }, n.prototype.y = function (n) {
          this.t = n, this.p = ""
       }, n.prototype.A = function (n) {
          this.u = n, this.p = ""
       }, n.prototype.x = function (n) {
          this.v = n, this.p = ""
       }, n
    }();
    ! function (n) {
       function t(n) {
          var t = n.stack || n.message;
          s(function (n) {
             r(t)
          }, 1)
       }
 
       function r(n) {
          var t = u._sufei_log;
          if (null == t && (t = .001), !(i.random() > t)) {
             c({
                code: 1,
                msg: (n + "").substr(0, 1e3),
                pid: "sufeidata",
                page: l.href.split(/[#?]/)[0],
                query: l.search.substr(1),
                hash: l.hash,
                referrer: u.referrer,
                title: u.title,
                ua: f.userAgent,
                rel: d,
                c1: o()
             }, "//gm.mmstat.com/fsp.1.1?")
          }
       }
 
       function a(n, t, r) {
          if (!(_.indexOf("XueXi") >= 0)) {
             n = (n || "").substr(0, 2e3);
             c({
                url: n,
                token: t,
                cna: o(),
                ext: r
             }, "https://fourier.taobao.com/ts?")
          }
       }
 
       function o() {
          return null == m && (m = new x("cna").r() || ""), m
       }
 
       function c(n, t) {
          var r = [];
          for (var i in n) r.push(i + "=" + e(n[i]));
          (new v).src = t + r.join("&")
       }
       n.B = t, n.C = r, n.D = a;
       var m
    }(k || (k = {}));
    var z;
    ! function (n) {
       function t() {
          if (sn) {
             var n = $ + ":" + ln + ":" + sn.join(",");
             k.D("", n, 4), sn = null
          }
       }
 
       function r(n) {
          K = n.clientX, Z = n.clientY, $++, nn = o(tn, rn)
       }
 
       function a(n) {
          N = n.isTrusted;
          var t = n.touches[0];
          K = t.clientX, Z = t.clientY, $++, nn = o(tn, rn)
       }
 
       function o(n, t) {
          return 0 <= n && n <= p.l() && 0 <= t && t <= p.m()
       }
 
       function e(n) {
          if (D = n.isTrusted, b) {
             var r = n.target,
                a = r.offsetWidth >> 1,
                o = r.offsetHeight >> 1;
             if (!(a < 10 && o < 10)) {
                var e = i.abs(n.offsetX - a),
                   u = i.abs(n.offsetY - o),
                   f = e < 2 && u < 2;
                if (f && ln++, ln >= 3 && (3 === ln && (s(t, 2e4), p.i(c, "unload", t)), sn && sn.length < 20)) {
                   var l = (f ? "" : "!") + r.tagName;
                   sn.push(l)
                }
             }
          }
       }
 
       function m(n) {
          D = n.isTrusted, tn = n.clientX, rn = n.clientY, U++
       }
 
       function v(n) {
          N = n.isTrusted;
          var t = n.touches[0];
          tn = t.clientX, rn = t.clientY, U++
       }
 
       function d(n) {
          J++
       }
 
       function g(n) {
          V++
       }
 
       function w() {
          var n = h.availWidth,
             t = p.l();
          Y = n - t < 20, an = y.innerWidth, on = y.innerHeight
       }
 
       function x(n) {
          G = !0, en = !0
       }
 
       function z(n) {
          en = !1
       }
 
       function j() {
          var n = y.Gyroscope;
          if (n) try {
             var t = new n({
                frequency: 2
             });
             return t.onreading = function () {
                fn = t.z
             }, void t.start()
          } catch (r) {}
          addEventListener("deviceorientation", function (n) {
             fn = n.gamma
          })
       }
 
       function A() {
          if ("ontouchmove" in u && (p.i(u, "touchmove", v, !0), p.i(u, "touchstart", a, !0)), p.i(u, "mousemove", m, !0), p.i(u, "mousedown", r, !0), p.i(u, "click", e, !0), p.i(u, "keydown", g, !0), p.i(c, "scroll", d, !0), p.i(c, "focus", x), p.i(c, "blur", z), p.i(c, "resize", w), w(), f.getBattery) {
             var n = f.getBattery();
             n && (n.then(function (n) {
                Q = n
             })["catch"](function (n) {}), cn = !0)
          }
          un && j()
       }
 
       function E() {
          return U
       }
 
       function F() {
          return J
       }
 
       function T() {
          return $
       }
 
       function M() {
          return V
       }
 
       function B() {
          var n = K,
             t = Z;
          n || t || (n = tn, t = rn);
          var r = D === undefined && N === undefined || !0 === D || !0 === N;
          return D = undefined, N = undefined, {
             K: n,
             L: t,
             M: r
          }
       }
 
       function L() {
          return [an, on]
       }
 
       function W() {
          return nn
       }
 
       function P() {
          var n = u.hidden;
          return null == n && (n = u.mozHidden), !n
       }
 
       function S() {
          return en
       }
 
       function H() {
          return G
       }
 
       function O() {
          return Y
       }
 
       function X() {
          return cn
       }
 
       function C() {
          return !Q || Q.charging
       }
 
       function I() {
          return Q ? 100 * Q.level : 127
       }
 
       function R() {
          return un && null != fn
       }
 
       function q() {
          return un && null != fn ? fn + 90 : 255
       }
       var D, N, Y, G, Q, U = 0,
          $ = 0,
          J = 0,
          V = 0,
          K = 0,
          Z = 0,
          nn = !0,
          tn = 0,
          rn = 0,
          an = 0,
          on = 0,
          en = !0,
          cn = !1,
          un = !!y.DeviceOrientationEvent;
       (/dingtalk|youku|uczzd\.cn|sm\.cn|uc\.cn/.test(l.hostname) || /iPhone|iPad|Qianniu|DingTalk|Youku|SQREADER/.test(_)) && (un = !1);
       var fn = null,
          sn = [],
          ln = 0;
       n.F = A, n.G = E, n.H = F, n.I = T, n.J = M, n.N = B, n.O = L, n.P = W, n.Q = P, n.R = S, n.S = H, n.T = O, n.U = X, n.V = C, n.W = I, n.X = R, n.Y = q
    }(z || (z = {}));
    var j;
    ! function (n) {
       function r() {
          return "$cdc_asdjflasutopfhvcZLmcfl_" in u || f.webdriver
       }
 
       function i() {
          if (o()) return !1;
          try {
             var n = u.createElement("canvas"),
                t = n.getContext("webgl");
             if (t) {
                var r = t.getExtension("WEBGL_lose_context");
                r && r.loseContext()
             }
             return !!t
          } catch (i) {
             return !1
          }
       }
 
       function o() {
          return "ontouchstart" in u
       }
 
       function e() {
          return /zh-cn/i.test(f.language || f.systemLanguage)
       }
 
       function s() {
          return -480 === (new a).getTimezoneOffset()
       }
 
       function l() {
          return z.P()
       }
 
       function m() {
          return z.X()
       }
 
       function h() {
          return z.U()
       }
 
       function v() {
          return z.V()
       }
 
       function d() {
          var n = p.l(),
             t = p.m(),
             r = z.O(),
             i = r[0],
             a = r[1];
          if (null == i || null == a) return !1;
          var o = n - i,
             e = t - a;
          return o > 240 || e > 150
       }
 
       function g() {
          return A && ("complete" !== u.readyState || p.d() - E > 1e4 || z.G() || z.H() || z.I() || z.J()) && (A = !1), A
       }
 
       function k() {
          for (var n = 0; n < M.length; n++) F[T.length + n] = M[n]();
          return p.h(F)
       }
 
       function x() {
          for (var n in H)
             if (H.hasOwnProperty(n)) {
                var t = H[n];
                if (t()) return +n.substr(1)
             } return 0
       }
 
       function j() {
          E = p.d();
          for (var n = 0; n < T.length; n++) F[n] = T[n]()
       }
       var A = !0,
          E = 0,
          F = t(16),
          T = [r, i, o, e, s],
          M = [l, m, h, v, g, d];
       n.Z = g, n.$ = k;
       var B = f.vendor,
          L = w.style,
          W = "chrome" in c,
          P = "ActiveXObject" in c,
          S = p.b(y.WeakMap),
          H = {
             _13: function () {
                return "callPhantom" in y || /PhantomJS/i.test(_)
             },
             _14: function () {
                return /python/i.test(f.appVersion)
             },
             _15: function () {
                return "sgAppName" in f
             },
             _16: function () {
                return /Maxthon/i.test(B)
             },
             _17: function () {
                return "opr" in y
             },
             _18: function () {
                return W && /BIDUBrowser/i.test(_)
             },
             _19: function () {
                return W && /LBBROWSER/i.test(_)
             },
             _20: function () {
                return W && /QQBrowser/.test(_)
             },
             _21: function () {
                return W && /UBrowser/i.test(_)
             },
             _22: function () {
                return W && /2345Explorer/.test(_)
             },
             _23: function () {
                return W && /TheWorld/.test(_)
             },
             _24: function () {
                return W && "MSGesture" in y
             },
             _26: function () {
                return "aef" in y && /WW_IMSDK/.test(_)
             },
             _25: function () {
                return /Qianniu/.test(_)
             },
             _1: function () {
                return W
             },
             _2: function () {
                return "mozRTCIceCandidate" in y || "mozInnerScreenY" in y
             },
             _3: function () {
                return "safari" in y
             },
             _4: function () {
                return P && !("maxHeight" in L)
             },
             _5: function () {
                return P && !p.b(y.postMessage)
             },
             _6: function () {
                return P && !b
             },
             _7: function () {
                return P && !p.b(y.Uint8Array)
             },
             _8: function () {
                return P && !S
             },
             _9: function () {
                return P && S
             },
             _10: function () {
                return "Google Inc." === f.vendor
             },
             _11: function () {
                return "Apple Computer, Inc." === f.vendor
             },
             _12: function () {
                return P
             }
          };
       n._ = x, n.F = j
    }(j || (j = {}));
    var A, E = function () {
       function n() {
          var n = this,
             t = y.WeakMap;
          if (t) this.aa = new t;
          else {
             var r = function () {
                n.ba = [], n.ca = []
             };
             r(), setInterval(r, 1e4)
          }
       }
       return n.prototype.da = function (n, t) {
          var r = this.aa;
          r ? r.set(n, t) : (this.ba.push(n), this.ca.push(t))
       }, n.prototype.ea = function (n) {
          var t = this.aa;
          if (t) return t.get(n);
          var r = this.ba.indexOf(n);
          return r >= 0 ? this.ca[r] : void 0
       }, n
    }();
    ! function (n) {
       function t() {
          n.fa = r("1688.com,95095.com,a-isv.org,aliapp.org,alibaba-inc.com,alibaba.com,alibaba.net,alibabacapital.com,alibabacloud.com,alibabacorp.com,alibabadoctor.com,alibabagroup.com,alicdn.com,alidayu.com,aliexpress.com,alifanyi.com,alihealth.cn,alihealth.com.cn,alihealth.hk,alikmd.com,alimama.com,alimei.com,alios.cn,alipay-corp.com,alipay.com,aliplus.com,alisoft.com,alisports.com,alitianji.com,alitrip.com,alitrip.hk,aliunicorn.com,aliway.com,aliwork.com,alixiaomi.com,aliyun-inc.com,aliyun.com,aliyun.xin,aliyuncs.com,alizhaopin.com,amap.com,antfinancial-corp.com,antsdaq-corp.com,asczwa.com,atatech.org,autonavi.com,b2byao.com,bcvbw.com,cainiao-inc.cn,cainiao-inc.com,cainiao.com,cainiao.com.cn,cainiaoyizhan.com,cheng.xin,cibntv.net,cnzz.com,damai.cn,ddurl.to,dingding.xin,dingtalk.com,dingtalkapps.com,doctoryou.ai,doctoryou.cn,dratio.com,etao.com,feizhu.cn,feizhu.com,fliggy.com,fliggy.hk,freshhema.com,gaode.com,gein.cn,gongyi.xin,guoguo-app.com,hemaos.com,heyi.test,hichina.com,itao.com,jingguan.ai,jiyoujia.com,juhuasuan.com,koubei-corp.com,kumiao.com,laifeng.com,laiwang.com,lazada.co.id,lazada.co.th,lazada.com,lazada.com.my,lazada.com.ph,lazada.sg,lazada.vn,liangxinyao.com,lingshoujia.com,lwurl.to,mashangfangxin.com,mashort.cn,mdeer.com,miaostreet.com,mmstat.com,mshare.cc,mybank-corp.cn,nic.xin,pailitao.com,phpwind.com,phpwind.net,saee.org.cn,shenjing.com,shyhhema.com,sm.cn,soku.com,tanx.com,taobao.com,taobao.org,taopiaopiao.com,tb.cn,tmall.com,tmall.hk,tmall.ru,tmjl.ai,tudou.com,umeng.co,umeng.com,umengcloud.com,umsns.com,umtrack.com,wasu.tv,whalecloud.com,wrating.com,www.net.cn,xiami.com,ykimg.com,youku.com,yowhale.com,yunos-inc.com,yunos.com,yushanfang.com,zmxy-corp.com.cn,zuodao.com"), n.ga = r("127.0.0.1,afptrack.alimama.com,aldcdn.tmall.com,delivery.dayu.com,hzapush.aliexpress.com,local.alipcsec.com,localhost.wwbizsrv.alibaba.com,napi.uc.cn,sec.taobao.com,tce.alicdn.com,un.alibaba-inc.com,utp.ucweb.com,ynuf.aliapp.org"), n.ha = r("akamaized.net,alibaba-inc.com,alicdn.com,aliimg.com,alimama.cn,alimmdn.com,alipay.com,alivecdn.com,aliyun.com,aliyuncs.com,amap.com,autonavi.com,cibntv.net,cnzz.com,criteo.com,doubleclick.net,facebook.com,facebook.net,google-analytics.com,google.com,googleapis.com,greencompute.org,lesiclub.cn,linezing.com,mmcdn.cn,mmstat.com,sm-tc.cn,sm.cn,soku.com,tanx.com,taobaocdn.com,tbcache.com,tbcdn.cn,tudou.com,uczzd.cn,umeng.com,us.ynuf.aliapp.org,wrating.com,xiami.net,xiaoshuo1-sm.com,yandex.ru,ykimg.com,youku.com,zimgs.cn")
       }
 
       function r(n) {
          for (var t = {}, r = n.split(","), i = 0; i < r.length; i++) t[r[i]] = !0;
          return t
       }
       n.F = t
    }(A || (A = {}));
    var F;
    ! function (t) {
       function r(n, t, r) {
          switch (r.length) {
             case 0:
                return t();
             case 1:
                return t(r[0]);
             case 2:
                return t(r[0], r[1]);
             default:
                return t(r[0], r[2], r[3])
          }
       }
 
       function i(n, t) {
          switch (t.length) {
             case 0:
                return new n;
             case 1:
                return new n(t[0]);
             case 2:
                return new n(t[0], t[1]);
             default:
                return new n(t[0], t[2], t[3])
          }
       }
 
       function a(n, a, o) {
          return function () {
             var e, c = arguments;
             try {
                e = a(c, this, n)
             } catch (u) {
                e = c, k.B(u)
             }
             if (e) {
                if (e === t.ia) return;
                c = e
             }
             return o ? i(n, c) : "apply" in n ? n.apply(this, c) : r(this, n, c)
          }
       }
 
       function o(n, t, r) {
          if (!n) return !1;
          var i = n[t];
          return !!i && (n[t] = a(i, r, !1), !0)
       }
 
       function e(n, t, r) {
          if (!n) return !1;
          var i = n[t];
          return !!i && (n[t] = a(i, r, !0), !0)
       }
 
       function c(t, r, i) {
          if (!u) return !1;
          var o = u(t, r);
          return !(!o || !o.set) && (o.set = a(o.set, i, !1), b || (o.get = function (n) {
             return function () {
                return n.call(this)
             }
          }(o.get)), n.defineProperty(t, r, o), !0)
       }
       t.ia = -1;
       var u = n.getOwnPropertyDescriptor;
       t.ja = o, t.ka = e, t.la = c
    }(F || (F = {}));
    var T, M = function () {
       function n(n) {
          this.ma = n;
          for (var t = 0, r = n.length; t < r; t++) this[t] = 0
       }
       return n.prototype.na = function () {
          for (var n = this.ma, t = [], r = -1, i = 0, a = n.length; i < a; i++)
             for (var o = this[i], e = n[i], c = r += e; t[c] = 255 & o, 0 != --e;) --c, o >>= 8;
          return t
       }, n.prototype.oa = function (n) {
          for (var t = this.ma, r = 0, i = 0, a = t.length; i < a; i++) {
             var o = t[i],
                e = 0;
             do {
                e = e << 8 | n[r++]
             } while (--o > 0);
             this[i] = e >>> 0
          }
       }, n
    }();
    ! function (n) {
       function t(n) {
          for (var t = 0, r = 0, i = n.length; r < i; r++) t = (t << 5) - t + n[r];
          return 255 & t
       }
 
       function r(n, t, r, i, a) {
          for (var o = n.length; t < o;) r[i++] = n[t++] ^ 255 & a, a = ~(131 * a)
       }
 
       function i(n) {
          for (var t = [], r = n.length, i = 0; i < r; i += 3) {
             var a = n[i] << 16 | n[i + 1] << 8 | n[i + 2];
             t.push(f.charAt(a >> 18), f.charAt(a >> 12 & 63), f.charAt(a >> 6 & 63), f.charAt(63 & a))
          }
          return t.join("")
       }
 
       function a(n) {
          for (var t = [], r = 0; r < n.length; r += 4) {
             var i = s[n.charAt(r)] << 18 | s[n.charAt(r + 1)] << 12 | s[n.charAt(r + 2)] << 6 | s[n.charAt(r + 3)];
             t.push(i >> 16, i >> 8 & 255, 255 & i)
          }
          return t
       }
 
       function o() {
          for (var n = 0; n < 64; n++) {
             var t = f.charAt(n);
             s[t] = n
          }
       }
 
       function e(n) {
          var a = t(n),
             o = [u, a];
          return r(n, 0, o, 2, a), i(o)
       }
 
       function c(n) {
          var i = a(n),
             o = i[1],
             e = [];
          if (r(i, 2, e, 0, o), t(e) == o) return e
       }
       var u = 4,
          f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          s = {};
       n.F = o, n.pa = e, n.qa = c
    }(T || (T = {}));
    var B;
    ! function (n) {
       function t() {
          for (var n = f.platform, t = 0; t < r.length; t++)
             if (r[t].test(n)) return t + 1;
          return 0
       }
       var r = [/^Win32/, /^Win64/, /^Linux armv|^Linux aarch64/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
       n.ra = t
    }(B || (B = {}));
    var L;
    ! function (n) {
       function t() {
          return p.d() / 1e3 >>> 0
       }
 
       function r(n) {
          if (z.F(), j.F(), n) {
             var t = T.qa(n);
             t && a.oa(t)
          }
          a[1] = p.a(), a[5] = j._(), a[6] = B.ra(), a[8] = p.c(f.userAgent), a[7] = 0
       }
 
       function i(n, r) {
          0 == a[4] && (a[4] = p.a(), a[3] = t()), a[2] = t(), a[16] = j.$();
          var i = !1;
          if (!j.Z()) {
             a[9] = z.G(), a[10] = z.H(), a[11] = z.I(), a[12] = z.J();
             var e = z.N();
             a[13] = e.K, a[14] = e.L, i = e.M
          }
          a[17] = z.Y(), a[18] = z.W();
          var c = z.R(),
             u = z.T(),
             f = z.S(),
             s = [r, z.Q(), n, c, i, !0, f, u];
          n && o++, a[15] = p.h(s), a[0] = o;
          var l = a.na(),
             m = T.pa(l);
          return m
       }
       var a = new M([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1]),
          o = 0;
       n.F = r, n.sa = i
    }(L || (L = {}));
    var W;
    ! function (n) {
       function t(n, t) {
          var r = n.split("."),
             i = r.length - 1,
             a = r[i];
          if (a in t) return !0;
          for (var o = i - 1; o >= 0; o--)
             if ((a = r[o] + "." + a) in t) return !0;
          return !1
       }
 
       function r(n) {
          var t = l.hostname;
          if (E.test(t)) return z.s(n), t;
          var r = t.split("."),
             i = r.length;
          if (1 === i) return z.s(n), t;
          i > 5 && (i = 5), t = r.pop();
          for (var a = 2; a <= i && (t = r.pop() + "." + t, z.y(t), z.s(n), !(t in A.fa || t in A.ga || t in A.ha)) && z.r() !== n; a++);
          return t
       }
 
       function i(n) {
          var t = r(n),
             i = "(^|\\.)" + t.replace(/\./g, "\\.") + "$";
          _ = new o(i, "i")
       }
 
       function e() {
          j = null;
          var n = L.sa(!1, !1);
          z.s(n), p.k(g, n)
       }
 
       function f() {
          var n = L.sa(!0, !1);
          z.s(n), null == j && (j = s(e, 20))
       }
 
       function m(n, t) {
          /^\/\//.test(n) && (n = l.protocol + n);
          var r = L.sa(!0, !1);
          k.D(n, r, t)
       }
 
       function h(n, t) {
          if (t)
             for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if (i.test && i.test(n)) return !0
             }
          return !1
       }
 
       function v(n) {
          var r;
          if (null != n && (n += "", r = p.g(n)), !r) return f(), !0;
          if (_.test(r)) return f(), !0;
          if (E.test(r)) return !1;
          var i = p.e(n, "?");
          return h(i, y.__sufei_point_list) ? (m(n, 0), !1) : !t(r, A.ha) && (!(r in A.ga) && (!/\/gw-open\/|\/gw\/|ascp\.alibaba\.com/.test(i) && (!h(i, y.__sufei_ignore_list) && (m(n, 0), !1))))
       }
 
       function d(n) {
          var r = u.referrer;
          if (r) {
             var i = p.g(r);
             if (i && t(i, A.fa)) return
          }
          m(r, 1)
       }
 
       function b() {
          z.w();
          for (var n = l.hostname.split("."), t = n.pop();;) {
             var r = n.pop();
             if (!r) break;
             t = r + "." + t, z.y(t), z.w()
          }
       }
 
       function w() {
          A.F(), z = new x(g);
          var n = new a(p.d() + 15552e6).toUTCString();
          z.x(n), z.A("/");
          var t = z.q();
          t.length > 1 && (k.C("exist_multi_isg"), b(), z.q().length > 0 && k.C("clear_fail"));
          var r = t[0];
          r || (r = p.j(g)), L.F(r), r = L.sa(!1, !1), i(r), 0 === t.length && d(r), p.i(c, "unload", function (n) {
             var t = L.sa(!1, !0);
             z.s(t), p.k(g, t)
          })
       }
       var _, z, j, E = /^(\d+\.)*\d+$/;
       n.ta = f, n.va = v, n.F = w
    }(W || (W = {}));
    var P;
    ! function (n) {
       function t() {
          r() || (i("insertBefore"), i("appendChild"))
       }
 
       function r() {
          var n = y.HTMLScriptElement;
          if (!n) return !1;
          var t = n.prototype,
             r = /^src$/i;
          return F.ja(t, "setAttribute", function (n) {
             var t = n[0],
                i = n[1];
             r.test(t) && o(i)
          }), F.la(t, "src", function (n) {
             o(n[0])
          })
       }
 
       function i(n) {
          var t = y.Element;
          t ? F.ja(t.prototype, n, a) : (F.ja(w, n, a), F.ja(u.body, n, a))
       }
 
       function a(n) {
          var t = n[0];
          t && "SCRIPT" === t.tagName && o(t.src)
       }
 
       function o(n) {
          n += "", e.test(n) && W.va(n)
       }
       n.F = t;
       var e = /callback=/
    }(P || (P = {}));
    var S;
    ! function (n) {
       function t(n) {
          return p.e(n.href, "#")
       }
 
       function r(n) {
          var t = n.target;
          if (!t) {
             var r = f[0];
             r && (t = r.target)
          }
          return t
       }
 
       function i(n) {
          if (/^https?\:/.test(n.protocol)) {
             var i = r(n);
             if (!i || /^_self$/i.test(i)) {
                if (t(n) === c && n.hash) return
             }
             W.va(n.href)
          }
       }
 
       function a(n) {
          if (!n.defaultPrevented)
             for (var t = n.target || n.srcElement; t;) {
                var r = t.tagName;
                if ("A" === r || "AREA" === r) {
                   i(t);
                   break
                }
                t = t.parentNode
             }
       }
 
       function o(n) {
          var t = n.target || n.srcElement;
          s.ea(t) !== m && W.va(t.getAttribute("action"))
       }
 
       function e() {
          f = u.getElementsByTagName("base"), c = t(l), p.i(u, "click", a), p.i(u, "submit", o);
          var n = y.HTMLFormElement;
          n && F.ja(n.prototype, "submit", function (n, t) {
             var r = t;
             W.va(r.getAttribute("action")), s.da(r, ++m)
          })
       }
       var c, f, s = new E,
          m = 0;
       n.F = e
    }(S || (S = {}));
    var H;
    ! function (n) {
       function t() {
          r(), /Mobile/.test(_) && (i(), a() || p.i(u, "DOMContentLoaded", a))
       }
 
       function r() {
          F.ja(y, "fetch", function (n) {
             var t = n[0],
                r = n[1];
             "string" == typeof t && W.va(t) && (r = r || {}, r.credentials && "omit" !== r.credentials || (r.credentials = "same-origin"), n[1] = r)
          })
       }
 
       function i() {
          var n = y.lib;
          if (n) {
             var t = !/taobao.com$/.test(l.hostname);
             F.ja(n.windvane, "call", function (n) {
                if ("MtopWVPlugin" === n[0] && "send" === n[1]) {
                   var r = n[2];
                   if (t) {
                      (r.ext_headers || {})["X-Sufei-Token"] = L.sa(!0, !1)
                   } else W.ta()
                }
             })
          }
       }
 
       function a() {
          var n = y.jsbridge;
          if (n && (n = n["default"])) return F.ja(n, "pushBack", function (n) {
             "native:" === n[0] && W.ta()
          }), !0
       }
       n.F = t
    }(H || (H = {}));
    var O;
    ! function (n) {
       function t() {
          var n = y.XMLHttpRequest;
          if (n) {
             var t = n.prototype;
             t && r(t) || i()
          }
          a()
       }
 
       function r(n) {
          var t = F.ja(n, "open", function (n, t) {
                var r = n[1];
                o.da(t, r)
             }),
             r = F.ja(n, "send", function (n, t) {
                var r = o.ea(t);
                W.va(r)
             });
          return t && r
       }
 
       function i() {
          F.ka(y, "XMLHttpRequest", function () {
             W.va()
          })
       }
 
       function a() {
          var n = /XMLHTTP/i;
          F.ka(y, "ActiveXObject", function (t) {
             var r = t[0];
             r && n.test(r) && W.va()
          })
       }
       var o = new E;
       n.F = t
    }(O || (O = {}));
    var X;
    ! function (n) {
       function t() {
          T.F(), W.F(), S.F(), O.F(), H.F(), P.F()
       }
       var r = "_sufei_data2";
       ! function () {
          if (!u[r]) {
             u[r] = d;
             try {
                t()
             } catch (n) {
                k.B(n)
             }
          }
       }()
    }(X || (X = {}))
 }(Object, Array, Function, Math, Date, RegExp, encodeURIComponent, window, document, navigator, setTimeout, location, history, screen, Image);