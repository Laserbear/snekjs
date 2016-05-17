if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function(a) {};

if (((window.location.href + '').toLowerCase()).indexOf('https:') == 0) {
    window.location = 'http:' + window.location.href.substr(6);
}

var country = 'US'; // no!

/*

stop DDOSing me, lol

window.onerror = function(message, url, lineNumber) {
  var ii = document.createElement('img');
  ii.src = 'http://slither.io/error.jpg?m='+encodeURIComponent(message)+'&u='+encodeURIComponent(url)+'&ln='+encodeURIComponent(lineNumber);
  return false;
};
*/

function forceServer(a, b) {
    sos = [];
    forcing = true;
    bso = {};
    bso.ip = a;
    bso.po = b;
    bso.ac = 999;
    sos.push(bso);
}

var rmsos = [];
// rmsos.push( {a:[76,84,79, 445]} );

var wsu = 0;



var xhrqs = [];


function getDataHandler(xmlhttp) {
    var o = null;
    var cur_tm = Date.now();
    for (var i = xhrqs.length - 1; i >= 0; i--) {
        if (xhrqs[i].xmlhttp == xmlhttp) {
            o = xhrqs[i];
        } else if ((cur_tm - xhrqs[i].creation_tm) > 60000) { // clean up failed/hanged requests
            xhrqs.splice(i, 1);
        }
    }
    return o;
}


function removeDataHandler(xmlhttp) {
    var cur_tm = Date.now();
    for (var i = xhrqs.length - 1; i >= 0; i--) {
        if (xhrqs[i].xmlhttp == xmlhttp) {
            xhrqs.splice(i, 1); // remove the target handler
        } else if ((cur_tm - xhrqs[i].creation_tm) > 60000) {
            xhrqs.splice(i, 1); // clean up failed/hanged requests/handlers too, as long as we're here.
        }
    }
}


function getData(u, o) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    };

    o.xmlhttp = xmlhttp;
    o.done = false;
    o.creation_tm = Date.now();
    xhrqs.push(o);

    xmlhttp.onreadystatechange = function() {
        var o = getDataHandler(this);
        if (o != null) {
            if (this.readyState == 4) {
                if (!o.done) {
                    o.done = true;
                    if (this.status == 200) {
                        o.f(this.responseText, 'success', o);
                    } else {
                        o.f('', 'error', o);
                    };
                    removeDataHandler(this);
                };
            };
        };
    };

    xmlhttp.open('GET', u, true);
    xmlhttp.send();
};



var testing = !1;
0 <= window.location.href.indexOf("/testing") && (testing = !0);
var forcing = !1,
    ua = navigator.userAgent.toLowerCase(),
    is_android = 0 <= ua.indexOf("android"),
    is_amazon = 0 <= ua.indexOf("kindle") || 0 <= ua.indexOf("silk/"),
    uua = navigator.userAgent,
    is_ios = 0 <= uua.indexOf("iPad") || 0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod"),
    is_mobile = 0 <= ua.indexOf("mobile"),
    is_firefox = -1 < ua.indexOf("firefox"),
    is_ie8oo = window.attachEvent && !window.addEventListener,
    is_safari = is_firefox = !1;
0 <= ua.indexOf("safari") && -1 == ua.indexOf("chrome") && (is_safari = !0);
var no_raf = !1,
    raf = function(c) {};
window.requestAnimationFrame ? raf = window.requestAnimationFrame : window.mozRequestAnimationFrame ? raf = window.mozRequestAnimationFrame : window.webkitRequestAnimationFrame ? raf = window.webkitRequestAnimationFrame : no_raf = !0;
is_mobile || (no_raf = !0);
var no_raf = !0,
    a, i, j, k, l, m, n, o, r, fj, d, d2, qq, sc, agpu = "translateZ(0)",
    ang, sang, vang;

function trf(c, f) {
    c.style.webkitTransform = c.style.OTransform = c.style.msTransform = c.style.MozTransform = c.style.transform = f
}

function trfo(c, f) {
    c.style.webkitTransformOrigin = c.style.OTransformOrigin = c.style.msTransformOrigin = c.style.MozTransformOrigin = c.style.transformOrigin = f
}
var pi2 = 2 * Math.PI,
    animating = !1,
    startAnimation = function() {
        animating = !0;
        no_raf ? is_mobile ? setInterval("oef()", 33) : is_safari ? setInterval("oef()", 33) : setInterval("oef()", 20) : raf(oef)
    },
    ois = [],
    wic = 0,
    ldi = function(c) {
        wic++;
        var f = {},
            b = document.createElement("img");
        f.ii = b;
        f.sc = 1;
        b.onload = function() {
            for (var c = ois.length - 1; 0 <= c; c--)
                if (ois[c].ii == this) {
                    c = ois[c];
                    c.ww = this.width;
                    c.hh = this.height;
                    c.loaded = !0;
                    if (c.onload) c.onload();
                    break
                }
            wic--;
            0 == wic && startAnimation()
        };
        f.src = c;
        ois.push(f);
        return f
    };

function addCss(c) {
    var f = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(f);
    f.type = "text/css";
    f.styleSheet ? f.styleSheet.cssText = c : f.appendChild(document.createTextNode(c))
}
var nbg = document.getElementById("nbg"),
    nzbg, sadg, sadu, sadd, p, xx, yy, grw, grh, elem, map, imgd, ctx;
elem = document.createElement("canvas");
var rw = 64,
    rh = 64;
elem.width = rw;
elem.height = rh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, rw, rh);
imgd = map.data;
l = imgd.length;
for (p = 0; p < l; p += 4) .5 > Math.random() ? imgd[p] = imgd[p + 1] = imgd[p + 2] = 0 : (imgd[p] = 44, imgd[p + 1] = 56, imgd[p + 2] = 68), imgd[p + 3] = Math.floor(32 * Math.random());
ctx.putImageData(map, 0, 0);
nzbg = elem.toDataURL();
32 < nzbg.length && (nbg.style.backgroundImage = "url(" + nzbg + ")");
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j)), imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j)), imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)), imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j)), imgd[p + 2] = Math.min(255, Math.floor(132 + .95 * 87 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.floor(.1 * 48 + 36 * j), imgd[p + 1] = Math.floor(7 + 52.5 * j), imgd[p + 2] = Math.floor(6.4 + 48 * j), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(.85 * 52 + 26 * j)), imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j)), imgd[p + 2] = Math.min(255, Math.floor(.85 * 144 + 72 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)), imgd[p + 1] = Math.min(255, Math.floor(132 + .95 * 87 * j)), imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.floor(.1 * 48 + 36 * j), imgd[p + 1] = Math.floor(5.4 + 40.5 * j), imgd[p + 2] = Math.floor(7 + 52.5 * j), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
var mos = [],
    m_iv = -1,
    swmup = !1;

function mkBtn(c, f, b, h) {
    var u = document.createElement("div");
    c.tagName || (c = document.getElementById(c), c.style.width = b + "px", c.style.height = h + "px", u.style.width = b + "px", u.style.height = h + "px");
    var q = {
        lic: 0
    };
    q.elem = c;
    q.md = !1;
    q.mo = !1;
    q.mdf = 0;
    q.mof = 0;
    var e = !0;
    c.style && c.style.position && ("absolute" == (c.style.position + "").toLowerCase() && (e = !1), "fixed" == (c.style.position + "").toLowerCase() && (e = !1));
    e && (c.style.position = "relative");
    u.style.position = "absolute";
    u.style.opacity = 0;
    u.style.left = "0px";
    u.style.top = "0px";
    c.appendChild(u);
    q.ho = u;
    q.alic = function() {
        this.lic++;
        if (3 == this.lic && (this.ho.style.opacity = 1, this.onload)) this.onload()
    };
    mos.push(q);
    q.setEnabled = function(c) {
        c ? (this.disabled = !1, this.upi.style.opacity = this.mof, this.downi.style.opacity = this.mdf, this.elem.style.opacity = 1, this.elem.style.cursor = "pointer") : (this.disabled = !0, this.upi.style.opacity = 0, this.downi.style.opacity = 0, this.elem.style.opacity = .38, this.elem.style.cursor = "default")
    };
    if (f)
        for (e = 1; 3 >= e; e++) {
            var w = document.createElement("img");
            w.draggable = !1;
            w.style.position = "absolute";
            w.style.left = "0px";
            w.style.top = "0px";
            w.border = 0;
            w.width = b;
            w.height = h;
            w.className = "nsi";
            u.appendChild(w);
            1 == e ? (q.normi = w, w.onload = function() {
                for (var c = mos.length - 1; 0 <= c; c--) {
                    var b = mos[c];
                    if (b.normi == this) {
                        b.alic();
                        break
                    }
                }
            }, w.src = f + ".png") : 2 == e ? (q.upi = w, w.style.opacity = 0, w.onload = function() {
                for (var c = mos.length - 1; 0 <= c; c--) {
                    var b = mos[c];
                    if (b.upi == this) {
                        b.alic();
                        break
                    }
                }
            }, w.src = f + "up.png") : 3 == e && (q.downi = w, w.style.opacity = 0, w.onload = function() {
                for (var c = mos.length - 1; 0 <= c; c--) {
                    var b =
                        mos[c];
                    if (b.downi == this) {
                        b.alic();
                        break
                    }
                }
            }, w.src = f + "down.png")
        } else u.style.opacity = 1;
    c.onmouseenter = function() {
        for (var c = mos.length - 1; 0 <= c; c--) {
            var b = mos[c];
            if (b.elem == this) {
                if (!b.disabled && !b.mo) {
                    b.mo = !0;
                    if (b.onmouseenter) b.onmouseenter(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
                }
                break
            }
        }
    };
    c.onmouseleave = function() {
        for (var c = mos.length - 1; 0 <= c; c--) {
            var b = mos[c];
            if (b.elem == this) {
                if (b.mo) {
                    b.mo = !1;
                    if (b.onmouseleave) b.onmouseleave(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
                }
                break
            }
        }
    };
    c.onmousedown = function(c) {
        for (var b =
                mos.length - 1; 0 <= b; b--) {
            var e = mos[b];
            if (e.elem == this) {
                if (!e.disabled && !e.md) {
                    e.md = !0;
                    if (e.onmousedown) e.onmousedown(c, e); - 1 == m_iv && (m_iv = setInterval("hmos()", 25));
                    return !1
                }
                break
            }
        }
    };
    c.onmouseup = c.ondragend = function(c) {
        for (var b = mos.length - 1; 0 <= b; b--) {
            var e = mos[b];
            if (e.elem == this) {
                if (e.md) {
                    e.mdf = 1;
                    e.md = !1;
                    if (e.onmouseup && (e.onmouseup(c, e), is_mobile)) e.elem.onmouseleave(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
                }
                break
            }
        }
    };
    swmup || (swmup = !0, window.onmouseup = window.ondragover = window.ondragend = function() {
        for (var c =
                mos.length - 1; 0 <= c; c--) {
            var b = mos[c];
            b.md && (b.md = !1, -1 == m_iv && (m_iv = setInterval("hmos()", 25)))
        }
    });
    return q
}

function hmos() {
    for (var c, f = !1, b = mos.length - 1; 0 <= b; b--) {
        var h = mos[b];
        c = !1;
        h.mo ? 1 != h.mof && (f = !0, h.mof += .33, 1 <= h.mof && (h.mof = 1), c = !0) : 0 != h.mof && (f = !0, h.mof -= .2, 0 >= h.mof && (h.mof = 0), c = !0);
        c && (h.upi.style.opacity = h.disabled ? 0 : h.mof);
        c = !1;
        h.md ? 1 != h.mdf && (f = !0, h.mdf += .33, 1 <= h.mdf && (h.mdf = 1), c = !0) : 0 != h.mdf && (f = !0, h.mdf -= .2, 0 >= h.mdf && (h.mdf = 0), c = !0);
        c && (h.downi.style.opacity = h.disabled ? 0 : h.mdf)
    }
    f || (clearInterval(m_iv), m_iv = -1)
}

function makeTextBtn(c, f, b, h, u) {
    f || (f = 56);
    56 < f && (f = 56);
    b || (b = 15);
    h || (h = 14);
    var q = document.createElement("div");
    q.className = "btnt nsi sadg" + u;
    var e = q.style;
    e.position = "absolute";
    e.width = "auto";
    e.color = "#ffffff";
    e.fontWeight = "bold";
    e.textAlign = "center";
    e.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    e.fontSize = b + "px";
    q.textContent = c;
    e.cursor = "pointer";
    document.body.appendChild(q);
    var w = Math.ceil(35 + q.offsetWidth);
    document.body.removeChild(q);
    q.textContent = "";
    e.width = w + "px";
    e.height = f +
        "px";
    e.lineHeight = f + "px";
    is_mobile || (e.boxShadow = "0px 3px 20px rgba(0,0,0, .75)");
    e.borderRadius = h + "px";
    var D = document.createElement("div"),
        e = D.style;
    e.position = "absolute";
    e.left = e.top = "0px";
    e.width = w + "px";
    e.height = f + "px";
    e.borderRadius = h + 1 + "px";
    e.opacity = 0;
    D.className = "sadu" + u;
    var y = document.createElement("div"),
        e = y.style;
    e.position = "absolute";
    e.left = e.top = "-1px";
    e.width = w + 2 + "px";
    e.height = f + 2 + "px";
    e.borderRadius = h + "px";
    e.opacity = 0;
    y.className = "sadd" + u;
    var B = mkBtn(q);
    B.a = 1;
    B.ho.appendChild(D);
    B.upi =
        D;
    B.ho.appendChild(y);
    B.downi = y;
    B.ts = b;
    B.ww = w;
    B.bgm = u;
    B.setText = function(c) {
        var b = document.createElement("div");
        b.className = "nsi sadg" + this.bgm;
        var e = b.style;
        e.position = "absolute";
        e.width = "auto";
        e.color = "#ffffff";
        e.fontWeight = "bold";
        e.textAlign = "center";
        e.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
        e.fontSize = this.ts + "px";
        b.textContent = c;
        document.body.appendChild(b);
        e = Math.ceil(35 + b.offsetWidth);
        document.body.removeChild(b);
        this.btnf.textContent = c;
        this.ww = e;
        this.elem.style.width = e +
            "px";
        this.upi.style.width = e + "px";
        this.downi.style.width = e + 2 + "px";
        this.btnf.style.width = e + "px"
    };
    b = document.createElement("div");
    q.appendChild(b);
    B.btnf = b;
    e = b.style;
    e.position = "absolute";
    e.left = e.top = "0px";
    e.width = w + "px";
    e.height = f + "px";
    e.borderRadius = h + "px";
    b.textContent = c;
    b.className = "nsi";
    e.color = "#ffffff";
    e.opacity = .9;
    B.ho.appendChild(b);
    return B
}
var sos = [],
    clus = [],
    bso, u_m = [64, 32, 16, 8, 4, 2, 1],
    lgbsc = 1,
    lgcsc = 1,
    lb_fr = 0,
    login_fr = 0,
    llgmtm = Date.now(),
    login_iv = -1;

function loginFade() {
    var c = Date.now(),
        f = (c - llgmtm) / 25;
    llgmtm = c;
    login_fr += .05 * f;
    choosing_skin && (login_fr += .06 * f);
    1 <= login_fr ? (login_fr = 1, login.style.display = "none", cstx.style.display = "none", fbh.style.display = "none", twth.style.display = "none", cskh.style.display = "none", grqh.style.display = "none", plq.style.display = "none", clq.style.display = "none", social.style.display = "none", login.style.opacity = 1, cstx.style.opacity = 1, fbh.style.opacity = 1, twth.style.opacity = 1, cskh.style.opacity = 1, grqh.style.opacity = 1, plq.style.opacity =
        1, clq.style.opacity = 1, social.style.opacity = 1, pskh.style.opacity = 1, nskh.style.opacity = 1, skodiv.style.opacity = 1, tip_fr = -1, tips.style.display = "none", mc.style.opacity = 1, loch.style.opacity = 1, clearInterval(login_iv), login_iv = -1, -1 != showlogo_iv && (ncka = lgss = lga = 1, showLogo(!0), -1 != showlogo_iv && (clearInterval(showlogo_iv), showlogo_iv = -1))) : (lgcsc = 1 + .1 * Math.pow(login_fr, 2), c = Math.round(lgbsc * lgcsc * 1E5) / 1E5, trf(login, "scale(" + c + "," + c + ")"), login.style.opacity = 1 - login_fr, cstx.style.opacity = 1 - login_fr, fbh.style.opacity =
        1 - login_fr, twth.style.opacity = 1 - login_fr, cskh.style.opacity = 1 - login_fr, grqh.style.opacity = 1 - login_fr, plq.style.opacity = 1 - login_fr, clq.style.opacity = 1 - login_fr, social.style.opacity = 1 - login_fr, pskh.style.opacity = login_fr, nskh.style.opacity = login_fr, skodiv.style.opacity = login_fr, mc.style.opacity = login_fr, loch.style.opacity = login_fr)
}
var ss_a = 0,
    ss_sh = 0,
    spinner_shown = !1,
    ldmc = document.createElement("canvas");
ldmc.width = 128;
ldmc.height = 128;
ldmc.style.position = "fixed";
ldmc.style.left = "0px";
ldmc.style.top = "0px";
ldmc.style.zIndex = 8388607;
ldmc.style.display = "none";
document.body.appendChild(ldmc);
var lsfr = 0,
    lcldtm = Date.now(),
    sstr = "Save";
"FR" == country ? sstr = "Bien" : "BR" == country && (sstr = "OK");
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1),
    skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
    if (playing) {
        try {
            localStorage.snakercv = snake.rcv
        } catch (c) {}
        playing = connected = !1;
        dead_mtm = Date.now() - 5E3
    }
};
var nick = document.getElementById("nick"),
    victory = document.getElementById("victory"),
    victory_bg = document.getElementById("victory_bg"),
    logo = document.getElementById("logo"),
    login = document.getElementById("login"),
    lastscore = document.getElementById("lastscore"),
    nick_holder = document.getElementById("nick_holder"),
    victory_holder = document.getElementById("victory_holder"),
    pstr = "Play";
"DE" == country ? pstr = "Spielen" : "FR" == country ? (pstr = "Jouer", nick.placeholder = "Surnom") : "BR" == country && (pstr = "Joga", nick.placeholder = "Apelido");
var play_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1),
    pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";
pbdiv.style.marginBottom = "50px";
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips"),
    tipss = ["Eat to grow longer!", "Don't run into other snakes!", "When longer, hold the mouse for a speed boost!"];
"DE" == country ? tipss = ["Esse um zu wachsen!", "Klicke f\u00fcr mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"] : "FR" == country ? tipss = ["Mangez de cro\u00eetre!", "Cliquez et vous courrez!", "Ne laissez pas votre t\u00eate toucher d'autres serpents!"] : "BR" == country && (tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"]);
var tip_pos = -1,
    tip_fr = 1.9;
o.elem.onclick = function() {
    play_btn.disabled || -1 != dead_mtm || (play_btn_click_mtm = Date.now(), play_btn.setEnabled(!1), spinner_shown = nick.disabled = !0, ldmc.style.display = "inline", connect())
};
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2),
    sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function() {
    if (!save_btn.disabled) {
        var c = asciize(victory.value);
        140 < c.length && (c = c.substr(0, 140));
        if (5 <= protocol_version) {
            var f = new Uint8Array(2 + c.length);
            f[0] = 255;
            f[1] = 118;
            for (var b = 0; b < c.length; b++) f[b + 2] = c.charCodeAt(b)
        } else
            for (f = new Uint8Array(1 + c.length), f[0] = 118, b = 0; b < c.length; b++) f[b + 1] = c.charCodeAt(b);
        ws.send(f);
        save_btn.setEnabled(!1);
        victory.disabled = !0
    }
};
var wide = !1,
    mww = 850,
    mhh = 700,
    mwwp50 = mww + 50,
    mhhp50 = mhh + 50,
    mwwp150 = mww + 150,
    mhhp150 = mhh + 150,
    mww2 = mww / 2,
    mhh2 = mhh / 2,
    mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = "255px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = .5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
var lstr = "Leaderboard";
"DE" == country ? lstr = "Bestenliste" : "FR" == country ? lstr = "Gagnants" : "BR" == country && (lstr = "L\u00edderes");
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = .7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = "150px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = .7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = "230px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = .7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "4px";
lbf.style.width = "200px";
lbf.style.height = "37px";
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = .5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = .5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "104px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img"),
    lc = document.createElement("canvas");
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
ctx.fillStyle = "#485868";
ctx.shadowBlur = 12;
ctx.shadowOffsetY = 3;
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.strokeStyle = "#202630";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
loc.className = "nsi";
loc.style.position = "absolute";
loc.style.left = "0px";
loc.style.top = "0px";
loc.style.opacity = .45;
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
var asmc = document.createElement("canvas");
asmc.width = 80;
asmc.height = 80;
asmc.className = "nsi";
asmc.style.position = "absolute";
asmc.style.left = asmc.style.top = "12px";
asmc.style.zIndex = 12;
asmc.style.opacity = .25;
loch.appendChild(asmc);
var myloc = document.createElement("img");
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
ctx.fillStyle = "#DDDDDD";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas"),
    bgp2 = null,
    bgw2 = 599,
    bgh2 = 519,
    ii = document.createElement("img");
ii.onload = function() {
    bgi2.width = bgw2;
    bgi2.height = bgh2;
    var c = bgi2.getContext("2d");
    try {
        c.drawImage(this, 0, 0), bgp2 = c.createPattern(bgi2, "repeat")
    } catch (f) {}
};
ii.src = "/s/bg45.jpg";

function rdgbg() {
    if (ggbg) {
        gbgmc || (gbgmc = document.createElement("canvas"));
        gbgmc.width = mww;
        gbgmc.height = mhh;
        var c = gbgmc.getContext("2d");
        try {
            c.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh)
        } catch (f) {}
    }
}
var ggbg = !1,
    gbgmc = null,
    gbgi = document.createElement("img");
gbgi.onload = function() {
    ggbg = !0;
    rdgbg()
};
gbgi.src = "/s/gbg.jpg";

function newDeadpool() {
    return {
        os: [],
        end_pos: 0,
        add: function(c) {
            this.end_pos == this.os.length ? this.os.push(c) : this.os[this.end_pos] = c;
            this.end_pos++
        },
        get: function() {
            if (1 <= this.end_pos) {
                this.end_pos--;
                var c = this.os[this.end_pos];
                this.os[this.end_pos] = null;
                return c
            }
            return null
        }
    }
}
var flt_a = "ler did no;gas the;gas all;gas every;panis;panus;paynis;my ass;cut your;heil hit;flick your;fingerba;arse;naked;menstr;eat my;eat as;lick as;suck as;suck my;fuk;dong;cunn;penil;suck a;foresk;puto;puta;suck;mierd;bit.ly;ween;wein;wien;peen;turd;wank;crap;ur mom;tu madre;chinga;pu$$;phalus;phallus;verga;culo;kurwa;erect;schlong;ureth".split(";"),
    flt_g = "buttlov buttf smegm itherplu eatmy suckm sucka mydik erioorg eri0org erio0rg eri00rg ragapw urdik heriobo mistik ki11all brazz iomods cunt suckdik itherhac slibot sucksdik sukdik deltaloves suksdik hitler assmunch lickmy fuqall fukall".split(" "),
    flt_w = ["ass", "kkk"];

function gdnm(c) {
    var f = "",
        b = "",
        h = "",
        u = 0,
        q = !1,
        e = !1,
        w, D;
    for (w = 0; w < c.length; w++) D = c.charCodeAt(w), 32 == D ? e || (e = !0, f += " ") : (e = !1, f += String.fromCharCode(D));
    e = !1;
    for (w = 0; w < c.length; w++)
        if (D = c.charCodeAt(w), (q = 48 <= D && 57 >= D) || 65 <= D && 90 >= D || 97 <= D && 122 >= D)
            if (b += String.fromCharCode(D), h += String.fromCharCode(D), e = !1, q) {
                if (u++, 7 <= u) return !1
            } else u = 0;
    else e || (e = !0, h += " ");
    c = f.toLowerCase();
    for (w = flt_a.length - 1; 0 <= w; w--)
        if (0 <= c.indexOf(flt_a[w])) return !1;
    b = b.toLowerCase();
    for (w = flt_g.length - 1; 0 <= w; w--)
        if (0 <= b.indexOf(flt_g[w])) return !1;
    h = h.toLowerCase().split(" ");
    for (w = h.length - 1; 0 <= w; w--)
        for (b = flt_w.length - 1; 0 <= b; b--)
            if (h[w] == flt_w[b]) return !1;
    return !0
}
var bpx1, bpy1, bpx2, bpy2, fpx1, fpy1, fpx2, fpy2, apx1, apy1, apx2, apy2, sgsc = .9,
    gsc = sgsc,
    nsep = 4.5,
    tasty = 0,
    shifty = !1,
    rr, gg, bb, render_mode = 2;
is_mobile && (render_mode = 1);
var wumsts = !1,
    rank = 0,
    best_rank = 999999999,
    snake_count = 0,
    biggest_snake_count = 0,
    cm1, snakes = [],
    foods = [],
    foods_c = 0,
    preys = [],
    points_dp = newDeadpool(),
    os = {},
    lsang = 0,
    want_e = !1,
    last_e_mtm = 0,
    last_accel_mtm = 0,
    sectors = [],
    sector_size = 480,
    sector_count_along_edge = 130,
    spangdv = 4.8,
    nsp1 = 4.25,
    nsp2 = .5,
    nsp3 = 12,
    mamu = .033,
    mamu2 = .028,
    cst = .43,
    lfas = [],
    lfc = 128;
for (i = 0; i < lfc; i++) j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1))), lfas.push(j);
var rfas = [],
    rfc = 43;
for (i = 0; i < rfc; i++) j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1))), rfas.push(j);
for (var fao = {}, fc = 3; 100 >= fc; fc++) {
    var fas = [];
    for (i = 0; i < fc; i++) j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1))), fas.push(j);
    fao["a" + fc] = fas
}
var hfc = 92,
    hfas = new Float32Array(hfc);
for (i = 0; i < hfc; i++) j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1))), hfas[i] = j;
var afas = [],
    afc = 26;
for (i = 0; i < afc; i++) j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1))), afas.push(j);
var nlc = 48,
    vfas = [],
    vfc = 62,
    fvpos = 0,
    fvtg = 0,
    ovxx, ovyy, fvxs = [],
    fvys = [];
for (i = 0; i < vfc; i++) j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1))), j += .5 * (.5 * (1 - Math.cos(Math.PI * j)) - j), vfas.push(j), fvxs.push(0), fvys.push(0);

function pwr(c) {
    for (var f = new Float32Array(125), b = 0; 125 > b; b++) f[b] = Math.pow(c, b);
    return f
}

function pca(c) {
    for (var f = new Float32Array(125), b = 0; 125 > b; b++) f[b] = 1 - Math.pow(1 - c, b);
    return f
}
var p1a = pca(.1),
    p35a = pca(.35),
    pwr4 = pwr(.4),
    pwr35 = pwr(.35),
    pwr93 = pwr(.93);

function setMscps(c) {
    if (c != mscps) {
        mscps = c;
        fmlts = [];
        fpsls = [];
        for (c = 0; c <= mscps; c++) c >= mscps ? fmlts.push(fmlts[c - 1]) : fmlts.push(Math.pow(1 - c / mscps, 2.25)), 0 == c ? fpsls.push(0) : fpsls.push(fpsls[c - 1] + 1 / fmlts[c - 1]);
        var f = fmlts[fmlts.length - 1],
            b = fpsls[fpsls.length - 1];
        for (c = 0; 2048 > c; c++) fmlts.push(f), fpsls.push(b)
    }
}

function startShowGame() {
    llgmtm = Date.now();
    login_iv = setInterval("loginFade()", 25);
    mc.style.opacity = 0;
    mc.style.display = "inline";
    lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
    loch.style.opacity = 0;
    lb_fr = -1
}

function setSkin(c, f) {
    c.rcv = f;
    c.er = 6;
    c.pr = 3.5;
    c.pma = 2.3;
    c.ec = "#ffffff";
    c.eca = .75;
    c.ppa = 1;
    c.ppc = "#000000";
    c.antenna = !1;
    c.one_eye = !1;
    c.swell = 0;
    if (24 == f) {
        c.antenna = !0;
        c.atba = 0;
        c.atc1 = "#00688c";
        c.atc2 = "#64c8e7";
        c.atwg = !0;
        c.atia = .35;
        c.abrot = !1;
        var b = 8;
        c.atx = new Float32Array(b);
        c.aty = new Float32Array(b);
        c.atvx = new Float32Array(b);
        c.atvy = new Float32Array(b);
        c.atax = new Float32Array(b);
        c.atay = new Float32Array(b);
        for (--b; 0 <= b; b--) c.atx[b] = c.xx, c.aty[b] = c.yy;
        c.bulb = acbulb;
        c.blbx = -10;
        c.blby = -10;
        c.blbw = 20;
        c.blbh =
            20;
        c.bsc = 1;
        c.blba = .75
    } else if (25 == f) {
        c.ec = "#ff5609";
        c.eca = 1;
        c.antenna = !0;
        c.atba = 0;
        c.atc1 = "#000000";
        c.atc2 = "#5630d7";
        c.atia = 1;
        c.abrot = !0;
        b = 9;
        c.atx = new Float32Array(b);
        c.aty = new Float32Array(b);
        c.atvx = new Float32Array(b);
        c.atvy = new Float32Array(b);
        c.atax = new Float32Array(b);
        c.atay = new Float32Array(b);
        for (--b; 0 <= b; b--) c.atx[b] = c.xx, c.aty[b] = c.yy;
        c.bulb = cdbulb;
        c.blbx = -5;
        c.blby = -10;
        c.blbw = 20;
        c.blbh = 20;
        c.bsc = 1.6;
        c.blba = 1
    } else 27 == f && (c.one_eye = !0, c.ebi = jsebi, c.ebiw = 64, c.ebih = 64, c.ebisz = 29, c.epi = jsepi, c.epiw =
        48, c.epih = 48, c.episz = 14, c.pma = 4, c.swell = .06);
    b = null;
    9 == f ? b = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10] : 10 == f ? b = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7] : 11 == f ? b = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12] : 12 == f ? b = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13] : 13 == f ? b = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7] : 14 == f ? b = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7] : 15 == f ? b = [0, 1, 2, 3, 4, 5, 6, 7, 8] : 16 == f ? b = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4] : 17 == f ? b = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16] : 18 == f ? b = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9] : 19 == f ? b = [9] : 20 == f ?
        b = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] : 21 == f ? b = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18] : 22 == f ? b = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13] : 23 == f ? b = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7] : 24 == f ? b = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18] : 25 == f ? b = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22] : 26 == f ? b = [24] : 27 == f ? b = [25] : 28 == f ? b = [18, 18, 18, 18, 18, 18, 18, 25, 25, 25, 25, 25, 25, 25, 7, 7, 7, 7, 7, 7, 7] : f %= 9;
    b && (f = b[0]);
    c.rbcs = b;
    c.cv = f
}

function newSnake(c, f, b, h, u, q) {
    var e = {};
    e.id = c;
    e.xx = f;
    e.yy = b;
    setSkin(e, h);
    h = e.cv;
    e.fnfr = 0;
    e.na = 1;
    e.chl = 0;
    e.tsp = 0;
    e.sfr = 0;
    e.rr = Math.min(255, rrs[h] + Math.floor(20 * Math.random()));
    e.gg = Math.min(255, ggs[h] + Math.floor(20 * Math.random()));
    e.bb = Math.min(255, bbs[h] + Math.floor(20 * Math.random()));
    c = "00" + Math.min(255, Math.max(0, Math.round(e.rr))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(e.gg))).toString(16);
    b = "00" + Math.min(255, Math.max(0, Math.round(e.bb))).toString(16);
    c = c.substr(c.length - 2);
    f = f.substr(f.length -
        2);
    b = b.substr(b.length - 2);
    e.cs = "#" + c + f + b;
    c = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.rr))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.gg))).toString(16);
    b = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.bb))).toString(16);
    c = c.substr(c.length - 2);
    f = f.substr(f.length - 2);
    b = b.substr(b.length - 2);
    e.cs04 = "#" + c + f + b;
    c = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.rr)))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.gg)))).toString(16);
    b = "00" + Math.min(255, Math.max(0, Math.round(.5 *
        (255 + e.bb)))).toString(16);
    c = c.substr(c.length - 2);
    f = f.substr(f.length - 2);
    b = b.substr(b.length - 2);
    e.csw = "#" + c + f + b;
    e.sc = 1;
    e.ssp = nsp1 + nsp2 * e.sc;
    e.fsp = e.ssp + .1;
    e.msp = nsp3;
    e.fxs = new Float32Array(rfc);
    e.fys = new Float32Array(rfc);
    e.fchls = new Float32Array(rfc);
    e.fpos = 0;
    e.ftg = 0;
    e.fx = 0;
    e.fy = 0;
    e.fchl = 0;
    e.fas = new Float32Array(afc);
    e.fapos = 0;
    e.fatg = 0;
    e.fa = 0;
    e.ehang = u;
    e.wehang = u;
    e.ehl = 1;
    e.msl = 42;
    e.fam = 0;
    e.ang = u;
    e.eang = u;
    e.wang = u;
    e.rex = 0;
    e.rey = 0;
    e.sp = 2;
    q ? (e.lnp = q[q.length - 1], e.pts = q, e.sct = q.length, q[0].dying && e.sct--) :
        (e.pts = [], e.sct = 0);
    e.flpos = 0;
    e.fls = new Float32Array(lfc);
    e.fl = 0;
    e.fltg = 0;
    e.tl = e.sct + e.fam;
    e.cfl = e.tl;
    e.scang = 1;
    e.dead_amt = 0;
    e.alive_amt = 0;
    snakes.splice(0, 0, e);
    return os["s" + e.id] = e
}

function snl(c) {
    var f = c.tl;
    c.tl = c.sct + c.fam;
    for (var f = c.tl - f, b = c.flpos, h = 0; h < lfc; h++) c.fls[b] -= f * lfas[h], b++, b >= lfc && (b = 0);
    c.fl = c.fls[c.flpos];
    c.fltg = lfc;
    c == snake && (wumsts = !0)
}

function newFood(c, f, b, h, u, q) {
    var e = {};
    e.id = c;
    e.xx = f;
    e.yy = b;
    e.rx = f;
    e.ry = b;
    e.rsp = u ? 2 : 1;
    e.cv = q;
    e.rad = 1E-5;
    e.sz = h;
    e.lrrad = e.rad;
    c = per_color_imgs[e.cv];
    e.cv2 = Math.floor(c.ic * gsc * e.sz / 16.5);
    0 > e.cv2 && (e.cv2 = 0);
    e.cv2 >= c.ic && (e.cv2 = c.ic - 1);
    testing && (window.biggestcv2 || (window.biggestcv2 = e.cv2), e.cv2 > window.biggestcv2 && (window.biggestcv2 = e.cv2, console.log("biggest cv2 seen: " + e.cv2 + " out of " + (c.ic - 1) + " (fo.sz = " + e.sz + " which means its server-side rad is " + 5 * e.sz + ")")));
    e.fi = c.imgs[e.cv2];
    e.fw = c.fws[e.cv2];
    e.fh = c.fhs[e.cv2];
    e.fw2 = c.fw2s[e.cv2];
    e.fh2 = c.fh2s[e.cv2];
    e.ofi = c.oimgs[e.cv2];
    e.ofw = c.ofws[e.cv2];
    e.ofh = c.ofhs[e.cv2];
    e.ofw2 = c.ofw2s[e.cv2];
    e.ofh2 = c.ofh2s[e.cv2];
    e.gcv = Math.floor(c.ic * gsc * (.25 + .75 * e.sz / 16.5));
    0 > e.gcv && (e.gcv = 0);
    e.gcv >= c.ic && (e.gcv = c.ic - 1);
    e.gfi = c.gimgs[e.gcv];
    e.gfw = c.gfws[e.gcv];
    e.gfh = c.gfhs[e.gcv];
    e.gfw2 = c.gfw2s[e.gcv];
    e.gfh2 = c.gfh2s[e.gcv];
    e.g2cv = Math.floor(c.ic * gsc * 2 * (.25 + .75 * e.sz / 16.5));
    0 > e.g2cv && (e.g2cv = 0);
    e.g2cv >= c.ic && (e.g2cv = c.ic - 1);
    e.g2fi = c.gimgs[e.g2cv];
    e.g2fw = c.gfws[e.g2cv];
    e.g2fh = c.gfhs[e.g2cv];
    e.g2fw2 = c.gfw2s[e.g2cv];
    e.g2fh2 = c.gfh2s[e.g2cv];
    e.fr = 0;
    e.gfr = 64 * Math.random();
    e.gr = .65 + .1 * e.sz;
    e.wsp = .0225 * (2 * Math.random() - 1);
    e.eaten_fr = 0;
    return foods[foods_c++] = e
}

function newPrey(c, f, b, h, u, q, e, w, D) {
    var y = {};
    y.id = c;
    y.xx = f;
    y.yy = b;
    y.rad = 1E-5;
    y.sz = h;
    y.cv = u;
    y.dir = q;
    y.wang = e;
    y.ang = w;
    y.sp = D;
    y.fr = 0;
    y.gfr = 64 * Math.random();
    y.gr = .5 + .15 * Math.random() + .1 * y.sz;
    y.rr = Math.min(255, rrs[u]);
    y.gg = Math.min(255, ggs[u]);
    y.bb = Math.min(255, bbs[u]);
    c = "00" + Math.min(255, Math.max(0, Math.round(y.rr))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(y.gg))).toString(16);
    b = "00" + Math.min(255, Math.max(0, Math.round(y.bb))).toString(16);
    c = c.substr(c.length - 2);
    f = f.substr(f.length - 2);
    b =
        b.substr(b.length - 2);
    y.cs = "#" + c + f + b;
    y.cv2 = Math.floor(per_color_imgs[y.cv].pr_imgs.length * gsc * y.sz / 9);
    0 > y.cv2 && (y.cv2 = 0);
    y.cv2 >= per_color_imgs[y.cv].pr_imgs.length && (y.cv2 = per_color_imgs[y.cv].pr_imgs.length - 1);
    y.fi = per_color_imgs[y.cv].pr_imgs[y.cv2];
    y.fw = per_color_imgs[y.cv].pr_fws[y.cv2];
    y.fh = per_color_imgs[y.cv].pr_fhs[y.cv2];
    y.fw2 = per_color_imgs[y.cv].pr_fw2s[y.cv2];
    y.fh2 = per_color_imgs[y.cv].pr_fh2s[y.cv2];
    y.gcv = per_color_imgs[y.cv].gimgs.length - 1;
    y.gfi = per_color_imgs[y.cv].gimgs[y.gcv];
    y.gfw =
        per_color_imgs[y.cv].gfws[y.gcv];
    y.gfh = per_color_imgs[y.cv].gfhs[y.gcv];
    y.gfw2 = per_color_imgs[y.cv].gfw2s[y.gcv];
    y.gfh2 = per_color_imgs[y.cv].gfh2s[y.gcv];
    y.fxs = new Float32Array(rfc);
    y.fys = new Float32Array(rfc);
    y.fpos = 0;
    y.ftg = 0;
    y.fx = 0;
    y.fy = 0;
    y.eaten = !1;
    y.eaten_fr = 0;
    preys.push(y);
    return y
}
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52,
    komc = document.createElement("canvas");
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) {
    var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16),
        v = 4 >= v ? 1 - v / 4 : 0,
        v = .8 * v;
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
    imgd[p + 3] = Math.floor(255 * v);
    xx++;
    xx >= sz && (xx = 0, yy++)
}
ctx.putImageData(map, 0, 0);
var sz = 62,
    ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15, v *= .1, 0 > v && (v = -v), 1 < v && (v = 1), v = 1 - v, v *= .25, imgd[p] = imgd[p + 1] = imgd[p + 2] = 0, imgd[p + 3] = Math.floor(255 * v), xx++, xx >= sz && (xx = 0, yy++);
ctx.putImageData(map, 0, 0);
var sz = 64,
    jsebi = document.createElement("canvas");
jsebi.width = jsebi.height = sz;
ctx = jsebi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2), v = 1.06 * v - .06, 0 > v ? v = 0 : (v = Math.pow(v, .35), v *= 1.35), v += .25 * (1 - v), imgd[p] = Math.max(0, Math.min(255, Math.round(72 * v))), imgd[p + 1] = Math.max(0, Math.min(255, Math.round(255 * v))), imgd[p + 2] = Math.max(0, Math.min(255, Math.round(116 * v))), xx++, xx >= sz && (xx = 0, yy++), v = sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)), imgd[p + 3] = 3 >= v ? Math.max(0, Math.min(255, Math.round(v / 3 * 255))) : 255;
ctx.putImageData(map, 0, 0);
var sz = 48,
    jsepi = document.createElement("canvas");
jsepi.width = jsepi.height = sz;
ctx = jsepi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2), v = .5 < v ? 0 : 1 - Math.pow(v / .5, 1), v *= .8, 0 == v ? (imgd[p] = 0, imgd[p + 1] = 0, imgd[p + 2] = 0) : (imgd[p] = Math.max(0, Math.min(255, Math.round(28 + 59 * v))), imgd[p + 1] = Math.max(0, Math.min(255, Math.round(83 + 85 * v))), imgd[p + 2] = Math.max(0, Math.min(255, Math.round(128 + 110 * v)))), xx++, xx >= sz && (xx = 0, yy++);
ctx.putImageData(map, 0, 0);
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 29, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 54, 58, 22);
ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
ctx = acbulb.getContext("2d");
g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(.5, "rgba(222, 3, 3, 1)");
g.addColorStop(.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var colc;
testing && (colc = document.createElement("canvas"), colc.width = 256, colc.height = 66, colc.style.position = "fixed", colc.style.left = "0px", colc.style.top = "200px", colc.style.zIndex = 2147483647, document.body.appendChild(colc));
var pbx = new Float32Array(32767),
    pby = new Float32Array(32767),
    pba = new Float32Array(32767),
    pbu = new Uint8Array(32767),
    per_color_imgs = [],
    rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 78, 255, 101, 128, 60],
    ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 35, 86, 200, 132, 192],
    bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 192, 9, 232, 144, 72],
    max_skin_cv = 28;
for (i = 0; i < rrs.length; i++) {
    o = {
        imgs: [],
        fws: [],
        fhs: [],
        fw2s: [],
        fh2s: [],
        gimgs: [],
        gfws: [],
        gfhs: [],
        gfw2s: [],
        gfh2s: [],
        oimgs: [],
        ofws: [],
        ofhs: [],
        ofw2s: [],
        ofh2s: []
    };
    var rs = "00" + rrs[i].toString(16),
        gs = "00" + ggs[i].toString(16),
        bs = "00" + bbs[i].toString(16),
        rs = rs.substr(rs.length - 2),
        gs = gs.substr(gs.length - 2),
        bs = bs.substr(bs.length - 2);
    o.cs = "#" + rs + gs + bs;
    var sz = 62,
        kfmc = document.createElement("canvas");
    kfmc.width = kfmc.height = sz;
    ctx = kfmc.getContext("2d");
    map = ctx.getImageData(0, 0, sz, sz);
    imgd = map.data;
    l = imgd.length;
    for (p =
        yy = xx = 0; p < l; p += 4) v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16), v = 15 >= v ? 1 - v / 15 : 0, imgd[p] = rrs[i], imgd[p + 1] = ggs[i], imgd[p + 2] = bbs[i], imgd[p + 3] = Math.floor(255 * v), xx++, xx >= sz && (xx = 0, yy++);
    ctx.putImageData(map, 0, 0);
    o.kfmc = kfmc;
    var ksz = 48,
        ksz2 = ksz / 2,
        kmc = document.createElement("canvas");
    kmc.width = kmc.height = ksz;
    ctx = kmc.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
    ctx.fill();
    map = ctx.getImageData(0, 0, ksz, ksz);
    imgd = map.data;
    l = imgd.length;
    yy = xx = 0;
    var kmcs = [];
    for (j =
        0; 7 > j; j++) {
        for (p = xx = yy = 0; p < l; p += 4) {
            var v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35),
                v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34)),
                v = v + .375 * (v2 - v),
                v = v * (1.22 - .44 * j / 6);
            rr = rrs[i];
            gg = ggs[i];
            bb = bbs[i];
            24 == i && (v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2, v2 = Math.pow(1.05 * v2, 4), 1 < v2 && (v2 = 1), rr += (306 - rr) * v2, gg += (192 * 1.2 - gg) * v2, bb += (76.8 - bb) * v2);
            imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
            imgd[p + 1] = Math.max(0, Math.min(255,
                Math.floor(gg * v)));
            imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
            xx++;
            xx >= ksz && (xx = 0, yy++)
        }
        ctx.putImageData(map, 0, 0);
        var kmc2 = document.createElement("canvas");
        kmc2.width = kmc2.height = ksz;
        var ctx2 = kmc2.getContext("2d");
        ctx2.drawImage(kmc, 0, 0);
        if (10 == i)
            for (k = -1; 1 >= k; k++) {
                var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13,
                    ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (m = 0; 5 >= m; m++) xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 24, yy = ty + ksz / 32 * Math.sin(2 * Math.PI *
                    m / 5) * .05 * 24, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 3.1, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 3.1, ctx2.lineTo(xx, yy);
                ctx2.fill()
            } else if (19 == i)
                for (k = -2; 2 >= k; k++) {
                    tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                    ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                    ctx2.save();
                    ctx2.globalAlpha = .7;
                    ctx2.fillStyle = "#FFFFFF";
                    ctx2.beginPath();
                    for (m = 0; 5 >= m; m++) xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 12, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 12, 0 == m ? ctx2.moveTo(xx, yy) :
                        ctx2.lineTo(xx, yy), xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.55, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.55, ctx2.lineTo(xx, yy);
                    ctx2.fill();
                    ctx2.restore()
                } else if (20 == i)
                    for (k = -1.5; 1.5 >= k; k++) {
                        tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                        ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                        ctx2.save();
                        ctx2.globalAlpha = .7;
                        ctx2.fillStyle = "#FFFFFF";
                        ctx2.beginPath();
                        for (m = 0; 5 >= m; m++) xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * .05 * 14, yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * .05 * 14, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx,
                            yy), xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.8, yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.8, ctx2.lineTo(xx, yy);
                        ctx2.fill();
                        ctx2.restore()
                    }
                kmcs.push(kmc2)
    }
    o.kmcs = kmcs;
    per_color_imgs.push(o);
    for (j = 2.8; 18.8 >= j; j += 1) {
        var cc = document.createElement("canvas"),
            sz = Math.ceil(2.5 * j + 28);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        ctx.fillStyle = o.cs;
        ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = "#" + rs + gs + bs;
        ctx.globalAlpha = .8;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fill();
        o.imgs.push(cc);
        o.fws.push(sz);
        o.fhs.push(sz);
        o.fw2s.push(sz / 2);
        o.fh2s.push(sz / 2);
        sz = Math.ceil(8 * j + 6);
        cc = document.createElement("canvas");
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
        g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        o.gimgs.push(cc);
        o.gfws.push(sz);
        o.gfhs.push(sz);
        o.gfw2s.push(sz / 2);
        o.gfh2s.push(sz / 2);
        cc = document.createElement("canvas");
        sz = Math.ceil(1.3 * j + 6);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        var eam = .2,
            g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
        g.addColorStop(.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
        g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth =
            2;
        ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
        ctx.globalAlpha = 1;
        ctx.stroke();
        o.oimgs.push(cc);
        o.ofws.push(sz);
        o.ofhs.push(sz);
        o.ofw2s.push(sz / 2);
        o.ofh2s.push(sz / 2)
    }
    o.ic = o.imgs.length;
    o.pr_imgs = [];
    o.pr_fws = [];
    o.pr_fhs = [];
    o.pr_fw2s = [];
    o.pr_fh2s = [];
    for (j = 3; 24 >= j; j += 1) cc = document.createElement("canvas"), sz = Math.ceil(2 * j + 38), cc.width = cc.height = sz, ctx = cc.getContext("2d"), ctx.fillStyle = o.cs, ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2), ctx.shadowBlur = 22, ctx.shadowOffsetY = 0, ctx.shadowColor = "#" + rs + gs + bs, ctx.fill(), ctx.fill(), o.pr_imgs.push(cc),
        o.pr_fws.push(sz), o.pr_fhs.push(sz), o.pr_fw2s.push(sz / 2), o.pr_fh2s.push(sz / 2)
}
if (testing)
    for (ctx = colc.getContext("2d"), ctx.fillStyle = "#000000", ctx.fillRect(0, 0, colc.width, colc.height), ctx.fillStyle = "#FFFFFF", ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif", ctx.textBaseline = "top", ctx.textAlign = "center", i = yy = xx = 0; i < rrs.length; i++) {
        var pci = per_color_imgs[i],
            kmc = pci.kmcs[0];
        ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
        ntx = o.xx + o.fx;
        nty = o.yy + o.fy;
        ntx = mww2 + (ntx - view_xx) * gsc;
        nty = mhh2 + (nty - view_yy) * gsc;
        ctx.fillText("" + i, xx + 8, yy + 16);
        xx += 16;
        xx > colc.width - 16 && (xx =
            0, yy += 28)
    }
var view_xx = 0,
    view_yy = 0,
    view_ang = 0,
    view_dist = 0,
    fvx = 0,
    fvy = 0,
    xm = 0,
    ym = 0,
    lsxm = 0,
    lsym = 0,
    snake = null,
    my_nick = "",
    dhx, dhy, hsz, fr = 0,
    lfr = 0,
    ltm = Date.now(),
    vfr = 0,
    vfrb = 0,
    avfr = 0,
    fr2 = 0,
    lfr2 = 0,
    vfrb2 = 0,
    cptm = 0,
    lptm = 0,
    lpstm = 0,
    last_ping_mtm = 0,
    lagging = !1,
    lag_mult = 1,
    wfpr = !1,
    high_quality = !0,
    gla = 1,
    wdfg = 0,
    qsm = 1,
    mqsm = 1.7,
    playing = !1,
    connected = !1,
    want_close_socket = !1,
    want_victory_message = !1,
    want_victory_focus = !1,
    want_hide_victory = 0,
    hvfr = 0,
    dead_mtm = -1,
    at2lt = new Float32Array(65536);
for (yy = 0; 256 > yy; yy++)
    for (xx = 0; 256 > xx; xx++) at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
var kd_l_frb = 0,
    kd_r_frb = 0,
    kd_l = !1,
    kd_r = !1,
    kd_u = !1,
    lkstm = 0,
    social = document.createElement("iframe");
try {
    social.frameBorder = 0
} catch (c) {}
social.style.position = "fixed";
social.style.left = "6px";
social.style.top = "6px";
social.style.border = "0px";
social.style.zIndex = 9999999;
social.style.overflow = "hidden";
social.width = 251;
social.height = 150;
social.src = "/social-box/";
document.body.appendChild(social);
var oef = function() {
        var c = Date.now();
        avfr = vfr = (c - ltm) / 8;
        ltm = c;
        choosing_skin || (lagging || wfpr && 420 < c - last_ping_mtm && (lagging = !0), lagging ? (lag_mult *= .85, .01 > lag_mult && (lag_mult = .01)) : 1 > lag_mult && (lag_mult += .05, 1 <= lag_mult && (lag_mult = 1)));
        120 < vfr && (vfr = 120);
        vfr *= lag_mult;
        etm *= lag_mult;
        lfr = fr;
        fr += vfr;
        vfrb = Math.floor(fr) - Math.floor(lfr);
        lfr2 = fr2;
        fr2 += 2 * vfr;
        vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
        kd_l && (kd_l_frb += vfrb);
        kd_r && (kd_r_frb += vfrb);
        if (spinner_shown) {
            lsfr += avfr;
            var f = ldmc.getContext("2d");
            f.clearRect(0,
                0, 512, 128);
            for (var b, h, u = 1; 2 >= u; u++) {
                f.beginPath();
                1 == u ? (f.fillStyle = "#60FF70", h = 0) : (f.fillStyle = "#9850FF", h = Math.PI);
                for (var q = 0; 256 >= q; q++) b = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * q / 256) + 8 * q / 256, 256 == q && (b += 10), xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * q / 256) * b * 1.25, yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * q / 256) * b, 0 == q ? f.moveTo(xx, yy) : f.lineTo(xx, yy);
                b = 32;
                xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * (q + 47) / 256) * b * 1.25;
                yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * (q + 47) / 256) * b;
                f.lineTo(xx, yy);
                for (q = 256; 0 <= q; q--) b = 32 + 5 * Math.cos(h + lsfr / 6 +
                    8 * q / 256) - 8 * q / 256, 256 == q && (b -= 10), xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * q / 256) * b * 1.25, yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * q / 256) * b, f.lineTo(xx, yy);
                f.fill()
            }
            connecting ? (ss_a += avfr / 86, 1 <= ss_a && (ss_a = 1), ss_sh += avfr / 93, 1 <= ss_sh && (ss_sh = 1)) : (ss_a -= avfr / 86, 0 >= ss_a && (ss_sh = ss_a = 0, ldmc.style.display = "none", trf(ldmc, "")));
            ldmc.style.opacity = ss_a;
            q = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
            trf(ldmc, "scale(" + q + "," + q + ")")
        }
        if (-1 != play_btn_click_mtm && 6666 < c - play_btn_click_mtm) {
            q = document.createElement("img");
            h = [];
            h.push("bso=" + encodeURIComponent(bso));
            if (bso)
                for (var e in bso) h.push(e + "=" + encodeURIComponent(bso[e]));
            h.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
            h.push("soslen=" + sos.length);
            q.src = "http://slither.io/cnc.jpg?" + h.join("&");
            play_btn_click_mtm = -1
        }
        waiting_for_sos && c > sos_ready_after_mtm && (connecting || connected || connect());
        connecting && 3E3 < c - start_connect_mtm && (bso && (bso.tainted = !0), connect());
        if (choosing_skin) {
            for (q = snakes.length - 1; 0 <= q; q--)
                for (e = snakes[q], u = e.pts.length - 1; 0 <= u; u--) e.pts[u].yy =
                    grd / 2 + 15 * Math.cos(u / 4 + fr / 19) * (1 - u / e.pts.length);
            view_xx -= vfr
        }
        playing && (high_quality ? (1 > gla && (gla += .0075 * vfr, 1 < gla && (gla = 1)), 1 < qsm && (qsm -= 4E-5 * vfr, 1 > qsm && (qsm = 1))) : (0 < gla && (gla -= .0075 * vfr, 0 > gla && (gla = 0)), qsm < mqsm && (qsm += 4E-5 * vfr, qsm > mqsm && (qsm = mqsm))));
        0 != want_hide_victory && (1 == want_hide_victory ? (hvfr += .02 * vfr, 1 <= hvfr ? (hvfr = 0, want_hide_victory = 2, victory_holder.style.opacity = 1, saveh.style.opacity = 1, victory_holder.style.display = "none", saveh.style.display = "none", nick_holder.style.opacity = 0, playh.style.opacity =
            0, smh.style.opacity = 0, nick_holder.style.display = "inline-block", playh.style.display = "block", smh.style.display = "block") : (victory_holder.style.opacity = 1 - hvfr, saveh.style.opacity = 1 - hvfr)) : 2 == want_hide_victory && (hvfr += .02 * vfr, 1 <= hvfr && (hvfr = 1, want_hide_victory = 0), nick_holder.style.opacity = hvfr, playh.style.opacity = hvfr, smh.style.opacity = hvfr));
        1 != login_fr && -1 != tip_fr && (tip_fr += .017 * vfr, tip_fr >= pi2 && (tip_fr -= pi2, tip_pos++, tip_pos >= tipss.length && (tip_pos = 0), tips.textContent = tipss[tip_pos]), u = .5 - .5 * Math.cos(tip_fr),
            tips.style.opacity = Math.round(1E5 * Math.pow(u, .5)) / 1E5);
        if (-1 == dead_mtm) - 1 != lb_fr && 1 != lb_fr && (lb_fr += .01 * vfr, 1 <= lb_fr && (lb_fr = 1), lbh.style.opacity = .85 * lb_fr, lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr);
        else if (1600 < c - dead_mtm) {
            if (-1 == login_iv) {
                login_iv = -2;
                login.style.display = "inline";
                try {
                    "1" != localStorage.edttsg ? cstx.style.display = "inline" : cskh.style.display = "inline"
                } catch (w) {}
                fbh.style.display = "inline";
                twth.style.display = "inline";
                plq.style.display =
                    "inline";
                clq.style.display = "inline";
                grqh.style.display = "inline";
                social.style.display = "inline";
                want_victory_focus && (want_victory_focus = !1, victory.focus())
            } - 2 == login_iv && (login_fr -= .004 * vfr, choosing_skin && (login_fr -= .007 * vfr), lb_fr = login_fr, 0 >= login_fr && (login_fr = 0, dead_mtm = -1, nick.disabled = !1, nick.focus(), lb_fr = -1, playing = !1, choosing_skin && (choosing_skin = !1, resetGame(), pskh.style.display = "none", nskh.style.display = "none", skodiv.style.display = "none")), pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 *
                    login_fr)), lgcsc = 1 + .1 * Math.pow(login_fr, 2), q = Math.round(lgbsc * lgcsc * 1E5) / 1E5, 1 == q ? trf(login, "") : trf(login, "scale(" + q + "," + q + ")"), login.style.opacity = 1 - login_fr, cstx.style.opacity = 1 - login_fr, fbh.style.opacity = 1 - login_fr, twth.style.opacity = 1 - login_fr, cskh.style.opacity = 1 - login_fr, grqh.style.opacity = 1 - login_fr, plq.style.opacity = 1 - login_fr, clq.style.opacity = 1 - login_fr, social.style.opacity = 1 - login_fr, pskh.style.opacity = login_fr, nskh.style.opacity = login_fr, skodiv.style.opacity = login_fr, mc.style.opacity =
                login_fr, loch.style.opacity = login_fr, lbh.style.opacity = .85 * lb_fr, lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr)
        }
        want_close_socket && -1 == dead_mtm && (want_close_socket = !1, ws && (ws.close(), ws = null, playing = connected = !1), resetGame());
        want_victory_message && (victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10));
        connected && ((0 < kd_l_frb || 0 < kd_r_frb) && 150 < c - lkstm && (lkstm = c, 0 < kd_r_frb && kd_l_frb > kd_r_frb && (kd_l_frb -= kd_r_frb, kd_r_frb = 0), 0 < kd_l_frb && kd_r_frb > kd_l_frb &&
            (kd_r_frb -= kd_l_frb, kd_l_frb = 0), 0 < kd_l_frb ? (v = kd_l_frb, 127 < v && (v = 127), kd_l_frb -= v, 5 <= protocol_version ? (q = new Uint8Array(2), q[0] = 252) : (q = new Uint8Array(2), q[0] = 108), q[1] = v, ws.send(q), snake.eang -= mamu * v * snake.scang * snake.spang) : 0 < kd_r_frb && (v = kd_r_frb, 127 < v && (v = 127), kd_r_frb -= v, 5 <= protocol_version ? (v += 128, q = new Uint8Array(2), q[0] = 252) : (q = new Uint8Array(2), q[0] = 114), q[1] = v, snake.eang += mamu * v * snake.scang * snake.spang, ws.send(q))), !wfpr && 250 < c - last_ping_mtm && (last_ping_mtm = c, wfpr = !0, q = new Uint8Array(1),
            q[0] = 5 <= protocol_version ? 251 : 112, ws.send(q), lpstm = c));
        null != snake && 2147483647 != grd && 1E3 < c - locu_mtm && (locu_mtm = Date.now(), myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px", myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
        if (1E3 < c - lrd_mtm) {
            if (testing && console && console.log) {
                console.log("FPS: " + fps);
                h = [];
                trdps += rdps;
                playing && tcsecs++;
                h.push("FPS: " + fps);
                h.push("sectors: " + sectors.length);
                h.push("foods: " + foods_c);
                h.push("bytes/sec: " + rdps);
                h.push("bytes/sec avg: " + Math.round(trdps /
                    tcsecs));
                h.push("");
                for (q = e = 0; q < rdpspc.length; q++) 0 <= rdpspc[q] && (e += rdpspc[q]);
                for (q = 0; q < rdpspc.length; q++) 0 <= rdpspc[q] && h.push(String.fromCharCode(q) + ": " + rdpspc[q] + " (" + Math.round(rdpspc[q] / e * 1E3) / 10 + "%)");
                h.push("total: " + e);
                maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
                h.push("");
                for (q = 1; q < pfs.length; q++) 0 != pfs[q] && (h.push(q + ": " + Math.round(1E3 * pfs[q]) / 1E3), pfs[q] = 0);
                pft = 0;
                pfd.innerHTML = h.join("<br>")
            }
            dfx || eval(dfs);
            if (0 < dfa.length) {
                for (q = dfa.length - 1; 0 <= q; q--) try {
                    dfa[q]["ono" + dfq]()
                } catch (w) {}
                dfa = []
            }
            playing && 1 == want_quality && (32 >= fps ? high_quality && (wdfg++, 1 <= wdfg && (high_quality = !1)) : (high_quality || 48 <= fps) && 0 < wdfg && (wdfg--, 0 >= wdfg && (high_quality = !0)));
            wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
            lrd_mtm = Date.now()
        }
        etm *= Math.pow(.993, vfrb);
        if (null != snake) {
            snake.md != snake.wmd && 150 < c - last_accel_mtm && (snake.md = snake.wmd, last_accel_mtm = c, 5 <= protocol_version ? (q = new Uint8Array(1), q[0] = snake.md ? 253 : 254) : (q = new Uint8Array(2), q[0] = 109, q[1] = snake.md ? 1 : 0), ws.send(q));
            if (xm != lsxm || ym != lsym) want_e = !0;
            want_e && 100 < c - last_e_mtm && (want_e = !1, last_e_mtm = c, lsxm = xm, lsym = ym, d2 = xm * xm + ym * ym, 256 < d2 ? (ang = Math.atan2(ym, xm), snake.eang = ang) : ang = snake.wang, ang %= pi2, 0 > ang && (ang += pi2), 5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2), sang != lsang && (lsang = sang, q = new Uint8Array(1), q[0] = sang & 255, lpstm = c, ws.send(q.buffer))) : (sang = Math.floor(16777215 * ang / pi2), sang != lsang && (lsang = sang, q = new Uint8Array(4), q[0] = 101, q[1] = sang >> 16 & 255, q[2] = sang >> 8 & 255, q[3] = sang & 255, lpstm = c, ws.send(q.buffer))))
        }
        if (!choosing_skin)
            for (q = snakes.length -
                1; 0 <= q; q--) {
                e = snakes[q];
                f = mamu * vfr * e.scang * e.spang;
                c = e.sp * vfr / 4;
                c > e.msl && (c = e.msl);
                if (!e.dead) {
                    e.tsp != e.sp && (e.tsp < e.sp ? (e.tsp += .3 * vfr, e.tsp > e.sp && (e.tsp = e.sp)) : (e.tsp -= .3 * vfr, e.tsp < e.sp && (e.tsp = e.sp)));
                    e.tsp > e.fsp && (e.sfr += (e.tsp - e.fsp) * vfr * .021);
                    if (0 < e.fltg)
                        for (h = vfrb, h > e.fltg && (h = e.fltg), e.fltg -= h, qq = 0; qq < h; qq++) e.fl = e.fls[e.flpos], e.fls[e.flpos] = 0, e.flpos++, e.flpos >= lfc && (e.flpos = 0);
                    else 0 == e.fltg && (e.fltg = -1, e.fl = 0);
                    e.cfl = e.tl + e.fl
                }
                if (1 == e.dir) {
                    e.ang -= f;
                    if (0 > e.ang || e.ang >= pi2) e.ang %= pi2;
                    0 > e.ang &&
                        (e.ang += pi2);
                    h = (e.wang - e.ang) % pi2;
                    0 > h && (h += pi2);
                    h > Math.PI && (h -= pi2);
                    0 < h && (e.ang = e.wang, e.dir = 0)
                } else if (2 == e.dir) {
                    e.ang += f;
                    if (0 > e.ang || e.ang >= pi2) e.ang %= pi2;
                    0 > e.ang && (e.ang += pi2);
                    h = (e.wang - e.ang) % pi2;
                    0 > h && (h += pi2);
                    h > Math.PI && (h -= pi2);
                    0 > h && (e.ang = e.wang, e.dir = 0)
                } else e.ang = e.wang;
                1 != e.ehl && (e.ehl += .03 * vfr, 1 <= e.ehl && (e.ehl = 1));
                f = e.pts[e.pts.length - 1];
                e.wehang = Math.atan2(e.yy + e.fy - f.yy - f.fy + f.eby * (1 - e.ehl), e.xx + e.fx - f.xx - f.fx + f.ebx * (1 - e.ehl));
                e.dead || e.ehang == e.wehang || (h = (e.wehang - e.ehang) % pi2, 0 > h &&
                    (h += pi2), h > Math.PI && (h -= pi2), 0 > h ? e.edir = 1 : 0 < h && (e.edir = 2));
                if (1 == e.edir) {
                    e.ehang -= .1 * vfr;
                    if (0 > e.ehang || e.ehang >= pi2) e.ehang %= pi2;
                    0 > e.ehang && (e.ehang += pi2);
                    h = (e.wehang - e.ehang) % pi2;
                    0 > h && (h += pi2);
                    h > Math.PI && (h -= pi2);
                    0 < h && (e.ehang = e.wehang, e.edir = 0)
                } else if (2 == e.edir) {
                    e.ehang += .1 * vfr;
                    if (0 > e.ehang || e.ehang >= pi2) e.ehang %= pi2;
                    0 > e.ehang && (e.ehang += pi2);
                    h = (e.wehang - e.ehang) % pi2;
                    0 > h && (h += pi2);
                    h > Math.PI && (h -= pi2);
                    0 > h && (e.ehang = e.wehang, e.edir = 0)
                }
                e.dead || (e.xx += Math.cos(e.ang) * c, e.yy += Math.sin(e.ang) * c, e.chl +=
                    c / e.msl);
                if (0 < vfrb) {
                    for (u = e.pts.length - 1; 0 <= u; u--) f = e.pts[u], f.dying && (f.da += .0015 * vfrb, 1 < f.da && (e.pts.splice(u, 1), f.dying = !1, points_dp.add(f)));
                    for (u = e.pts.length - 1; 0 <= u; u--)
                        if (f = e.pts[u], 0 < f.eiu) {
                            fy = fx = 0;
                            for (qq = cm1 = f.eiu - 1; 0 <= qq; qq--) f.efs[qq] = 2 == f.ems[qq] ? f.efs[qq] + vfrb2 : f.efs[qq] + vfrb, h = f.efs[qq], h >= hfc ? (qq != cm1 && (f.exs[qq] = f.exs[cm1], f.eys[qq] = f.eys[cm1], f.efs[qq] = f.efs[cm1], f.ems[qq] = f.ems[cm1]), f.eiu--, cm1--) : (fx += f.exs[qq] * hfas[h], fy += f.eys[qq] * hfas[h]);
                            f.fx = fx;
                            f.fy = fy
                        }
                }
                c = Math.cos(e.eang) *
                    e.pma;
                h = Math.sin(e.eang) * e.pma;
                e.rex < c && (e.rex += vfr / 6, e.rex >= c && (e.rex = c));
                e.rey < h && (e.rey += vfr / 6, e.rey >= h && (e.rey = h));
                e.rex > c && (e.rex -= vfr / 6, e.rex <= c && (e.rex = c));
                e.rey > h && (e.rey -= vfr / 6, e.rey <= h && (e.rey = h));
                if (0 < vfrb) {
                    if (0 < e.ftg)
                        for (h = vfrb, h > e.ftg && (h = e.ftg), e.ftg -= h, qq = 0; qq < h; qq++) e.fx = e.fxs[e.fpos], e.fy = e.fys[e.fpos], e.fchl = e.fchls[e.fpos], e.fxs[e.fpos] = 0, e.fys[e.fpos] = 0, e.fchls[e.fpos] = 0, e.fpos++, e.fpos >= rfc && (e.fpos = 0);
                    else 0 == e.ftg && (e.ftg = -1, e.fx = 0, e.fy = 0, e.fchl = 0);
                    if (0 < e.fatg)
                        for (h = vfrb, h >
                            e.fatg && (h = e.fatg), e.fatg -= h, qq = 0; qq < h; qq++) e.fa = e.fas[e.fapos], e.fas[e.fapos] = 0, e.fapos++, e.fapos >= afc && (e.fapos = 0);
                    else 0 == e.fatg && (e.fatg = -1, e.fa = 0)
                }
                e.dead ? (e.dead_amt += .02 * vfr, 1 <= e.dead_amt && snakes.splice(q, 1)) : 1 != e.alive_amt && (e.alive_amt += .015 * vfr, 1 <= e.alive_amt && (e.alive_amt = 1))
            }
        for (q = preys.length - 1; 0 <= q; q--) {
            u = preys[q];
            f = mamu2 * vfr;
            c = u.sp * vfr / 4;
            if (0 < vfrb)
                if (0 < u.ftg)
                    for (h = vfrb, h > u.ftg && (h = u.ftg), u.ftg -= h, qq = 1; qq <= h; qq++) qq == h && (u.fx = u.fxs[u.fpos], u.fy = u.fys[u.fpos]), u.fxs[u.fpos] = 0, u.fys[u.fpos] =
                        0, u.fpos++, u.fpos >= rfc && (u.fpos = 0);
                else 0 == u.ftg && (u.fx = 0, u.fy = 0, u.ftg = -1);
            if (1 == u.dir) {
                u.ang -= f;
                if (0 > u.ang || u.ang >= pi2) u.ang %= pi2;
                0 > u.ang && (u.ang += pi2);
                h = (u.wang - u.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (u.ang = u.wang, u.dir = 0)
            } else if (2 == u.dir) {
                u.ang += f;
                if (0 > u.ang || u.ang >= pi2) u.ang %= pi2;
                0 > u.ang && (u.ang += pi2);
                h = (u.wang - u.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 > h && (u.ang = u.wang, u.dir = 0)
            } else u.ang = u.wang;
            u.xx += Math.cos(u.ang) * c;
            u.yy += Math.sin(u.ang) * c;
            u.gfr += vfr * u.gr;
            u.eaten ? (1.5 != u.fr &&
                (u.fr += vfr / 150, 1.5 <= u.fr && (u.fr = 1.5)), u.eaten_fr += vfr / 47, u.gfr += vfr, e = u.eaten_by, 1 <= u.eaten_fr || !e ? preys.splice(q, 1) : u.rad = 1 - Math.pow(u.eaten_fr, 3)) : 1 != u.fr && (u.fr += vfr / 150, 1 <= u.fr ? (u.fr = 1, u.rad = 1) : (u.rad = .5 * (1 - Math.cos(Math.PI * u.fr)), u.rad += .66 * (.5 * (1 - Math.cos(Math.PI * u.rad)) - u.rad)))
        }
        for (q = cm1 = foods_c - 1; 0 <= q; q--) c = foods[q], c.gfr += vfr * c.gr, c.eaten ? (c.eaten_fr += vfr / 41, e = c.eaten_by, 1 <= c.eaten_fr || !e ? (q == cm1 ? foods[q] = null : (foods[q] = foods[cm1], foods[cm1] = null), foods_c--, cm1--) : (e = c.eaten_by, h = c.eaten_fr *
            c.eaten_fr, c.rad = c.lrrad * (1 - c.eaten_fr * h), c.rx = c.xx + (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * h) * (1 - h) - c.xx) * h, c.ry = c.yy + (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * h) * (1 - h) - c.yy) * h, c.rx += 6 * Math.cos(c.wsp * c.gfr) * (1 - c.eaten_fr), c.ry += 6 * Math.sin(c.wsp * c.gfr) * (1 - c.eaten_fr))) : (1 != c.fr && (c.fr += c.rsp * vfr / 150, 1 <= c.fr ? (c.fr = 1, c.rad = 1) : (c.rad = .5 * (1 - Math.cos(Math.PI * c.fr)), c.rad += .66 * (.5 * (1 - Math.cos(Math.PI * c.rad)) - c.rad)), c.lrrad = c.rad), c.rx = c.xx, c.ry = c.yy, c.rx = c.xx + 6 * Math.cos(c.wsp * c.gfr), c.ry = c.yy + 6 * Math.sin(c.wsp *
            c.gfr));
        vfrb = vfr = 0;
        redraw();
        no_raf || raf(oef)
    },
    bgx = 0,
    bgy = 0,
    bgx2 = 0,
    bgy2 = 0,
    fgfr = 0,
    px, py, lpx, lpy, ax, ay, lax, lay, pax, pay, fx, fy, fs, dfa = [],
    dfq = "pen",
    dfx = !1,
    dfs = [41, 109, 124, 117, 106, 123, 112, 118, 117, 41, 68, 68, 123, 128, 119, 108, 118, 109, 39, 127, 127, 127, 127, 127, 45, 45, 47, 126, 112, 117, 107, 118, 126, 53, 94, 108, 105, 90, 106, 118, 114, 108, 123, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 105, 48, 130, 123, 111, 112, 122, 53, 118, 117, 118, 119, 108, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 123, 111, 112, 122, 53, 122, 108, 117, 107, 68, 109,
        124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 107, 109, 104, 53, 119, 124, 122, 111, 47, 123, 111, 112, 122, 48, 132, 51, 108, 125, 104, 115, 47, 127, 127, 127, 127, 127, 53, 123, 118, 90, 123, 121, 112, 117, 110, 47, 48, 53, 122, 119, 115, 112, 123, 47, 41, 94, 108, 105, 90, 118, 106, 114, 108, 123, 41, 48, 53, 113, 118, 112, 117, 47, 41, 94, 108, 105, 90, 106, 118, 114, 108, 123, 41, 48, 48, 51, 126, 112, 117, 107, 118, 126, 53, 127, 127, 127, 127, 127, 68, 127, 127, 127, 127, 127, 51, 107, 109, 127, 68, 40, 55, 48, 66
    ],
    s = "";
for (i = 0; i < dfs.length; i++) s += String.fromCharCode(dfs[i] - 7);
var dfs = s,
    maxp = 0,
    fps = 0,
    redraw = function() {
        fps++;
        var c = mc.getContext("2d");
        if (animating) {
            if (snake) {
                var f = .5 + .4 / Math.max(1, (snake.sct + 16) / 36);
                gsc != f && (gsc < f ? (gsc += 2E-4, gsc >= f && (gsc = f)) : (gsc -= 2E-4, gsc <= f && (gsc = f)))
            }
            var f = view_xx,
                b = view_yy;
            null != snake && (0 < fvtg && (fvtg--, fvx = fvxs[fvpos], fvy = fvys[fvpos], fvxs[fvpos] = 0, fvys[fvpos] = 0, fvpos++, fvpos >= vfc && (fvpos = 0)), view_xx = snake.xx + snake.fx + fvx, view_yy = snake.yy + snake.fy + fvy, choosing_skin && (view_xx -= 104, gsc = 1), view_ang = Math.atan2(view_yy - grd, view_xx - grd), view_dist =
                Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd)), bpx1 = view_xx - (mww2 / gsc + 84), bpy1 = view_yy - (mhh2 / gsc + 84), bpx2 = view_xx + (mww2 / gsc + 84), bpy2 = view_yy + (mhh2 / gsc + 84), fpx1 = view_xx - (mww2 / gsc + 24), fpy1 = view_yy - (mhh2 / gsc + 24), fpx2 = view_xx + (mww2 / gsc + 24), fpy2 = view_yy + (mhh2 / gsc + 24), apx1 = view_xx - (mww2 / gsc + 210), apy1 = view_yy - (mhh2 / gsc + 210), apx2 = view_xx + (mww2 / gsc + 210), apy2 = view_yy + (mhh2 / gsc + 210));
            bgx2 -= 1 * (view_xx - f) / bgw2;
            bgy2 -= 1 * (view_yy - b) / bgh2;
            bgx2 %= 1;
            0 > bgx2 && (bgx2 += 1);
            bgy2 %= 1;
            0 > bgy2 && (bgy2 += 1);
            ggbg &&
                (high_quality || 0 < gla) ? (c.save(), c.fillStyle = "#000000", c.fillRect(0, 0, mww, mhh), c.globalAlpha = .3 * gla, c.drawImage(gbgmc, 0, 0), c.restore()) : (c.fillStyle = "#000000", c.fillRect(0, 0, mww, mhh));
            if (bgp2) {
                c.save();
                c.fillStyle = bgp2;
                c.translate(mww2, mhh2);
                c.scale(gsc, gsc);
                c.translate(bgx2 * bgw2, bgy2 * bgh2);
                c.globalAlpha = .4 + .6 * (1 - gla);
                c.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
                if (high_quality || 0 < gla) c.globalCompositeOperation = "lighter", c.globalAlpha = .4 * gla, c.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh /
                    gsc);
                c.restore()
            }
            if (testing)
                for (f = sectors.length - 1; 0 <= f; f--) b = sectors[f], c.fillStyle = "rgba(0, 255, 0, .1)", c.fillRect(mww2 + (b.xx * sector_size - view_xx) * gsc, mhh2 + (b.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
            if (high_quality || 0 < gla) {
                var h = 1.75;
                1 != gla && (h = 1.75 * gla);
                c.save();
                for (f = foods_c - 1; 0 <= f; f--) b = foods[f], b.rx >= fpx1 && b.ry >= fpy1 && b.rx <= fpx2 && b.ry <= fpy2 && (1 == b.rad ? (z = mww2 + gsc * (b.rx - view_xx) - b.ofw2, x = mhh2 + gsc * (b.ry - view_yy) - b.ofh2, c.globalAlpha = h * b.fr, c.drawImage(b.ofi, z, x)) : (z =
                    mww2 + gsc * (b.rx - view_xx) - b.ofw2 * b.rad, x = mhh2 + gsc * (b.ry - view_yy) - b.ofh2 * b.rad, c.globalAlpha = h * b.fr, c.drawImage(b.ofi, 0, 0, b.ofw, b.ofh, z, x, b.ofw * b.rad, b.ofh * b.rad)));
                c.restore()
            }
            c.save();
            c.globalCompositeOperation = "lighter";
            if (high_quality || 0 < gla) {
                h = .75;
                1 != gla && (h = .75 * gla);
                var u = .75;
                1 != gla && (u = 1 - .25 * gla);
                for (f = foods_c - 1; 0 <= f; f--) b = foods[f], b.rx >= fpx1 && b.ry >= fpy1 && b.rx <= fpx2 && b.ry <= fpy2 && (1 == b.rad ? (z = mww2 + gsc * (b.rx - view_xx) - b.fw2, x = mhh2 + gsc * (b.ry - view_yy) - b.fh2, c.globalAlpha = u * b.fr, c.drawImage(b.fi, z,
                    x), c.globalAlpha = h * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr, c.drawImage(b.fi, z, x)) : (z = mww2 + gsc * (b.rx - view_xx) - b.fw2 * b.rad, x = mhh2 + gsc * (b.ry - view_yy) - b.fh2 * b.rad, c.globalAlpha = u * b.fr, c.drawImage(b.fi, 0, 0, b.fw, b.fh, z, x, b.fw * b.rad, b.fh * b.rad), c.globalAlpha = h * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr, c.drawImage(b.fi, 0, 0, b.fw, b.fh, z, x, b.fw * b.rad, b.fh * b.rad)))
            } else
                for (f = foods_c - 1; 0 <= f; f--) b = foods[f], b.rx >= fpx1 && b.ry >= fpy1 && b.rx <= fpx2 && b.ry <= fpy2 && (1 == b.rad ? (z = mww2 + gsc * (b.rx - view_xx) - b.fw2, x = mhh2 + gsc * (b.ry - view_yy) - b.fh2,
                    c.globalAlpha = b.fr, c.drawImage(b.fi, z, x)) : (z = mww2 + gsc * (b.rx - view_xx) - b.fw2 * b.rad, x = mhh2 + gsc * (b.ry - view_yy) - b.fh2 * b.rad, c.globalAlpha = b.fr, c.drawImage(b.fi, 0, 0, b.fw, b.fh, z, x, b.fw * b.rad, b.fh * b.rad)));
            c.restore();
            c.save();
            c.globalCompositeOperation = "lighter";
            for (f = preys.length - 1; 0 <= f; f--)
                if (h = preys[f], e = h.xx + h.fx, w = h.yy + h.fy, px = mww2 + gsc * (e - view_xx), py = mhh2 + gsc * (w - view_yy), -50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
                    if (h.eaten) {
                        var b = h.eaten_by,
                            q = Math.pow(h.eaten_fr, 2),
                            e = e + (b.xx + b.fx + Math.cos(b.ang + b.fa) *
                                (43 - 24 * q) * (1 - q) - e) * q,
                            w = w + (b.yy + b.fy + Math.sin(b.ang + b.fa) * (43 - 24 * q) * (1 - q) - w) * q;
                        px = mww2 + gsc * (e - view_xx);
                        py = mhh2 + gsc * (w - view_yy)
                    }
                    1 == h.rad ? (z = px - h.fw2, x = py - h.fh2, c.globalAlpha = .75 * h.fr, c.drawImage(h.fi, z, x), c.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, c.drawImage(h.fi, z, x)) : (z = px - h.fw2 * h.rad, x = py - h.fh2 * h.rad, c.globalAlpha = .75 * h.fr, c.drawImage(h.fi, 0, 0, h.fw, h.fh, z, x, h.fw * h.rad, h.fh * h.rad), c.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, c.drawImage(h.fi, 0, 0, h.fw, h.fh, z, x, h.fw * h.rad, h.fh * h.rad))
                }
            c.restore();
            c.save();
            c.strokeStyle = "#90C098";
            for (var e, w, D, f = snakes.length - 1; 0 <= f; f--) b = snakes[f], e = b.xx + b.fx, w = b.yy + b.fy + 40, 0 < b.na && e >= bpx1 - 100 && w >= bpy1 && e <= bpx2 + 100 && w <= bpy2 && (b == snake && (b.fnfr++, 200 < b.fnfr && (b.na -= .004, 0 > b.na && (b.na = 0))), c.save(), c.globalAlpha = .5 * b.na * b.alive_amt * (1 - b.dead_amt), c.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif", c.fillStyle = b.csw, c.textBaseline = "middle", c.textAlign = "center", h = b.xx + b.fx, u = b.yy + b.fy, h = mww2 + (h - view_xx) * gsc, u = mhh2 + (u - view_yy) * gsc, c.fillText(b.nk, h, u + 32 +
                11 * b.sc * gsc), c.restore());
            for (f = snakes.length - 1; 0 <= f; f--)
                for (b = snakes[f], b.iiv = !1, t = b.pts.length - 1; 0 <= t; t--)
                    if (E = b.pts[t], px = E.xx + E.fx, py = E.yy + E.fy, px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
                        b.iiv = !0;
                        break
                    }
            for (f = snakes.length - 1; 0 <= f; f--)
                if (b = snakes[f], b.iiv) {
                    h = b.xx + b.fx;
                    u = b.yy + b.fy;
                    px = h;
                    py = u;
                    D = b.ehang;
                    var y = b.sc,
                        B = 29 * y,
                        G = b.cfl,
                        E = b.pts[b.pts.length - 1];
                    if (1 == render_mode) {
                        c.save();
                        c.beginPath();
                        c.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
                        e = !1;
                        for (var t = b.pts.length - 1; 0 <= t; t--) {
                            E = b.pts[t];
                            lpx =
                                px;
                            lpy = py;
                            px = E.xx;
                            py = E.yy;
                            var z = E.fx,
                                x = E.fy;
                            0 < G && (px += z, py += x, lax = ax, lay = ay, ax = (px + lpx) / 2, ay = (py + lpy) / 2, e || (lax = ax, lay = ay), 1 > G && (q = 1 - G, lpx += (lax - lpx) * q, lpy += (lay - lpy) * q, ax += (lax - ax) * q, ay += (lay - ay) * q), e ? G-- : G -= b.chl + b.fchl, e ? c.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (c.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc), e = !0))
                        }
                        c.save();
                        c.lineJoin = "round";
                        c.lineCap = "round";
                        is_firefox ? (b.sp > b.fsp && (t = b.alive_amt * (1 - b.dead_amt) * Math.max(0,
                            Math.min(1, (b.sp - b.ssp) / (b.msp - b.ssp))), c.save(), c.strokeStyle = b.cs, c.globalAlpha = .3 * t, c.lineWidth = (B + 6) * gsc, c.stroke(), c.lineWidth = (B + 9) * gsc, c.stroke(), c.lineWidth = (B + 12) * gsc, c.stroke(), c.restore()), c.globalAlpha = 1 * b.alive_amt * (1 - b.dead_amt), c.strokeStyle = "#000000", c.lineWidth = (B + 5) * gsc) : (b.sp > b.fsp && (t = b.alive_amt * (1 - b.dead_amt) * Math.max(0, Math.min(1, (b.sp - b.ssp) / (b.msp - b.ssp))), c.save(), c.lineWidth = (B - 2) * gsc, c.shadowBlur = 30 * gsc, c.shadowColor = "rgba(" + b.rr + "," + b.gg + "," + b.bb + ", " + Math.round(1E4 * t) /
                            1E4 + ")", c.stroke(), c.stroke(), c.restore()), c.globalAlpha = .4 * b.alive_amt * (1 - b.dead_amt), c.strokeStyle = "#000000", c.lineWidth = (B + 5) * gsc, c.stroke(), c.strokeStyle = b.cs, c.lineWidth = B * gsc, c.strokeStyle = "#000000", c.globalAlpha = 1 * b.alive_amt * (1 - b.dead_amt));
                        c.stroke();
                        c.strokeStyle = b.cs;
                        c.globalAlpha = .8 * b.alive_amt * (1 - b.dead_amt);
                        c.lineWidth = B * gsc;
                        c.stroke();
                        c.restore();
                        c.strokeStyle = b.cs;
                        b.dead && (x = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * b.dead_amt))) * Math.sin(Math.PI * b.dead_amt), c.save(), c.lineJoin = "round", c.lineCap =
                            "round", c.globalCompositeOperation = "lighter", c.lineWidth = (B - 3) * gsc, c.globalAlpha = x, c.strokeStyle = "#FFCC99", c.stroke(), c.restore());
                        c.restore()
                    }
                    if (2 == render_mode) {
                        var B = .5 * B,
                            J, M, F, A, I, L, N, C, z = 0;
                        px = h;
                        py = u;
                        I = px;
                        L = py;
                        I >= bpx1 && L >= bpy1 && I <= bpx2 && L <= bpy2 ? (pbx[0] = I, pby[0] = L, pba[0] = Math.atan2(u - (E.yy + E.fy), h - (E.xx + E.fx)) + Math.PI, pbu[0] = 1) : pbu[0] = 0;
                        z = 1;
                        n = (b.chl + b.fchl) % .25;
                        0 > n && (n += .25);
                        n = .25 - n;
                        G += 1 - .25 * Math.ceil((b.chl + b.fchl) / .25);
                        ax = px;
                        ay = py;
                        b.sep != b.wsep && (b.sep < b.wsep ? (b.sep += .01, b.sep >= b.wsep && (b.sep =
                            b.wsep)) : b.sep > b.wsep && (b.sep -= .01, b.sep <= b.wsep && (b.sep = b.wsep)));
                        for (var O = b.sep * qsm, K = 0, x = per_color_imgs[b.cv].kmcs, H, t = b.pts.length - 1; 0 <= t; t--)
                            if (E = b.pts[t], lpx = px, lpy = py, px = E.xx + E.fx, py = E.yy + E.fy, -.25 < G) {
                                F = I;
                                A = L;
                                I = (px + lpx) / 2;
                                L = (py + lpy) / 2;
                                N = lpx;
                                C = lpy;
                                for (q = 0; 1 > q; q += .25) {
                                    E = n + q;
                                    e = F + (N - F) * E;
                                    w = A + (C - A) * E;
                                    J = N + (I - N) * E;
                                    M = C + (L - C) * E;
                                    lax = ax;
                                    lay = ay;
                                    ax = e + (J - e) * E;
                                    ay = w + (M - w) * E;
                                    0 > G && (ax += -(lax - ax) * G / .25, ay += -(lay - ay) * G / .25);
                                    J = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                                    if (K + J < O) K += J;
                                    else {
                                        K = -K;
                                        for (E = (J - K) /
                                            O; 1 <= E; E--) K += O, pax = lax + (ax - lax) * K / J, pay = lay + (ay - lay) * K / J, pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2 ? (pbx[z] = pax, pby[z] = pay, pbu[z] = 1, e = ax - lax, w = ay - lay, pba[z] = -15 <= e && -15 <= w && 15 > e && 15 > w ? at2lt[8 * w + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= w && 127 > e && 127 > w ? at2lt[w + 128 << 8 | e + 128] : Math.atan2(w, e)) : pbu[z] = 0, z++;
                                        K = J - K
                                    }
                                    if (1 > G && (G -= .25, -.25 >= G)) break
                                }
                                1 <= G && G--
                            }
                        ax >= bpx1 && ay >= bpy1 && ax <= bpx2 && ay <= bpy2 ? (pbu[z] = 1, pbx[z] = ax, pby[z] = ay, pba[z] = Math.atan2(ay - lay, ax - lax)) : pbu[z] = 0;
                        z++;
                        c.save();
                        c.translate(mww2, mhh2);
                        q = gsc * B * 52 / 32;
                        I = gsc * B * 62 / 32;
                        G = b.alive_amt * (1 - b.dead_amt);
                        G *= G;
                        E = 1;
                        if (b.tsp > b.fsp) {
                            E = b.alive_amt * (1 - b.dead_amt) * Math.max(0, Math.min(1, (b.tsp - b.ssp) / (b.msp - b.ssp)));
                            H = .37 * E;
                            K = Math.pow(E, .5);
                            F = gsc * B * (1 + .9375 * K);
                            w = per_color_imgs[b.cv].kfmc;
                            c.save();
                            c.globalCompositeOperation = "lighter";
                            if (b.rbcs)
                                for (L = b.rbcs, O = L.length, t = z - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], w = per_color_imgs[L[t % O]], w = w.kfmc, c.save(), c.globalAlpha = G * K * .38 * (.6 + .4 * Math.cos(t / 4 - 1.15 * b.sfr)), c.translate((px - view_xx) * gsc, (py - view_yy) * gsc), 4 > t ? (e =
                                    F * (1 + (4 - t) * b.swell), c.drawImage(w, -e, -e, 2 * e, 2 * e)) : c.drawImage(w, -F, -F, 2 * F, 2 * F), c.restore());
                            else
                                for (t = z - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], c.save(), c.globalAlpha = G * K * .38 * (.6 + .4 * Math.cos(t / 4 - 1.15 * b.sfr)), c.translate((px - view_xx) * gsc, (py - view_yy) * gsc), 4 > t ? (e = F * (1 + (4 - t) * b.swell), c.drawImage(w, -e, -e, 2 * e, 2 * e)) : c.drawImage(w, -F, -F, 2 * F, 2 * F), c.restore());
                            c.restore();
                            E = 1 - E
                        }
                        E *= G;
                        if (high_quality || 0 < gla)
                            for (w = E, 1 != gla && (w = E * gla), c.globalAlpha = w, t = z - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], c.save(),
                                c.translate((px - view_xx) * gsc, (py - view_yy) * gsc), c.drawImage(komc, -q, -q, 2 * q, 2 * q), 9 > t && (c.globalAlpha = w * (1 - t / 9), 4 > t ? (e = I * (1 + (4 - t) * b.swell), c.drawImage(ksmc, -e, -e, 2 * e, 2 * e)) : c.drawImage(ksmc, -I, -I, 2 * I, 2 * I), c.globalAlpha = w), c.restore());
                        c.globalAlpha = E;
                        if (b.rbcs) {
                            L = b.rbcs;
                            O = L.length;
                            for (t = z - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], 2 <= t && (q = t - 2, 1 == pbu[q] && (e = pbx[q], w = pby[q], c.save(), c.translate((e - view_xx) * gsc, (w - view_yy) * gsc), 9 > q ? (c.globalAlpha = q / 9 * E, 4 > q ? (e = I * (1 + (4 - q) * b.swell), c.drawImage(ksmc, -e, -e,
                                2 * e, 2 * e)) : c.drawImage(ksmc, -I, -I, 2 * I, 2 * I)) : (c.globalAlpha = E, c.drawImage(ksmc, -I, -I, 2 * I, 2 * I)), c.restore())), c.save(), c.globalAlpha = G, c.translate((px - view_xx) * gsc, (py - view_yy) * gsc), c.rotate(pba[t]), q = t % (2 * x.length), q >= x.length && (q = 2 * x.length - (q + 1)), w = per_color_imgs[L[t % O]], 4 > t ? (e = B * (1 + (4 - t) * b.swell), c.drawImage(w.kmcs[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : c.drawImage(w.kmcs[q], -gsc * B, -gsc * B, 2 * gsc * B, 2 * gsc * B), c.restore());
                            if (b.tsp > b.fsp && (high_quality || 0 < gla)) {
                                c.save();
                                c.globalCompositeOperation = "lighter";
                                for (t = z - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], c.save(), c.translate((px - view_xx) * gsc, (py - view_yy) * gsc), c.rotate(pba[t]), c.globalAlpha = G * H * gla * (.5 + .5 * Math.cos(t / 4 - b.sfr)), q = t % (2 * x.length), q >= x.length && (q = 2 * x.length - (q + 1)), 4 > t ? (e = B * (1 + (4 - t) * b.swell), c.drawImage(per_color_imgs[L[t % O]].kmcs[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : c.drawImage(per_color_imgs[L[t % O]].kmcs[q], -gsc * B, -gsc * B, 2 * gsc * B, 2 * gsc * B), c.restore());
                                c.restore()
                            }
                        } else {
                            for (t = z - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], 2 <= t && (q = t - 2, 1 == pbu[q] &&
                                (e = pbx[q], w = pby[q], c.save(), c.translate((e - view_xx) * gsc, (w - view_yy) * gsc), 9 > q ? (c.globalAlpha = q / 9 * E, 4 > q ? (e = I * (1 + (4 - q) * b.swell), c.drawImage(ksmc, -e, -e, 2 * e, 2 * e)) : c.drawImage(ksmc, -I, -I, 2 * I, 2 * I)) : (c.globalAlpha = E, c.drawImage(ksmc, -I, -I, 2 * I, 2 * I)), c.restore())), c.save(), c.globalAlpha = G, c.translate((px - view_xx) * gsc, (py - view_yy) * gsc), c.rotate(pba[t]), q = t % (2 * x.length), q >= x.length && (q = 2 * x.length - (q + 1)), 4 > t ? (e = B * (1 + (4 - t) * b.swell), c.drawImage(x[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : c.drawImage(x[q], -gsc * B, -gsc * B,
                                2 * gsc * B, 2 * gsc * B), c.restore());
                            if (b.tsp > b.fsp && (high_quality || 0 < gla)) {
                                c.save();
                                c.globalCompositeOperation = "lighter";
                                for (t = z - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], q = t % (2 * x.length), q >= x.length && (q = 2 * x.length - (q + 1)), c.save(), c.translate((px - view_xx) * gsc, (py - view_yy) * gsc), c.rotate(pba[t]), c.globalAlpha = G * H * gla * (.5 + .5 * Math.cos(t / 4 - b.sfr)), 4 > t ? (e = B * (1 + (4 - t) * b.swell), c.drawImage(x[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : c.drawImage(x[q], -gsc * B, -gsc * B, 2 * gsc * B, 2 * gsc * B), c.restore());
                                c.restore()
                            }
                        }
                        if (b.antenna)
                            if (e =
                                Math.cos(b.ang), w = Math.sin(b.ang), ax = h - 8 * e * b.sc, ay = u - 8 * w * b.sc, 2 <= z && ax >= apx1 && ay >= apy1 && ax <= apx2 && ay <= apy2) {
                                b.atx[0] = ax;
                                b.aty[0] = ay;
                                E = b.sc * gsc;
                                fj = b.atx.length - 1;
                                if (choosing_skin)
                                    for (t = 1; t <= fj; t++) b.atvx[t] -= .3, b.atvy[t] += .14 * Math.cos(fr / 23 - 7 * t / fj);
                                else if (!b.antenna_shown)
                                    for (b.antenna_shown = !0, t = 1; t <= fj; t++) b.atx[t] = ax - e * t * 4 * b.sc, b.aty[t] = ay - w * t * 4 * b.sc;
                                for (t = 1; t <= fj; t++) xx = b.atx[t - 1], yy = b.aty[t - 1], xx += 2 * Math.random() - 1, yy += 2 * Math.random() - 1, e = b.atx[t] - xx, w = b.aty[t] - yy, ang = -4 <= e && -4 <= w && 4 > e && 4 > w ?
                                    at2lt[32 * w + 128 << 8 | 32 * e + 128] : -8 <= e && -8 <= w && 8 > e && 8 > w ? at2lt[16 * w + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= w && 16 > e && 16 > w ? at2lt[8 * w + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= w && 127 > e && 127 > w ? at2lt[w + 128 << 8 | e + 128] : Math.atan2(w, e), xx += 4 * Math.cos(ang) * b.sc, yy += 4 * Math.sin(ang) * b.sc, b.atvx[t] += .1 * (xx - b.atx[t]), b.atvy[t] += .1 * (yy - b.aty[t]), b.atx[t] += b.atvx[t], b.aty[t] += b.atvy[t], b.atvx[t] *= .88, b.atvy[t] *= .88, e = b.atx[t] - b.atx[t - 1], w = b.aty[t] - b.aty[t - 1], J = Math.sqrt(e * e + w * w), J > 4 * b.sc && (ang = -4 <= e && -4 <= w && 4 > e && 4 > w ? at2lt[32 * w + 128 << 8 | 32 *
                                        e + 128] : -8 <= e && -8 <= w && 8 > e && 8 > w ? at2lt[16 * w + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= w && 16 > e && 16 > w ? at2lt[8 * w + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= w && 127 > e && 127 > w ? at2lt[w + 128 << 8 | e + 128] : Math.atan2(w, e), b.atx[t] = b.atx[t - 1] + 4 * Math.cos(ang) * b.sc, b.aty[t] = b.aty[t - 1] + 4 * Math.sin(ang) * b.sc);
                                c.globalAlpha = G;
                                c.strokeStyle = b.atc1;
                                c.lineWidth = 5 * E;
                                c.lineCap = "round";
                                c.lineJoin = "round";
                                c.beginPath();
                                fj = b.atx.length - 1;
                                e = (b.atx[fj] - view_xx) * gsc;
                                w = (b.aty[fj] - view_yy) * gsc;
                                c.moveTo(e, w);
                                for (t = fj - 1; 1 <= t; t--) xx = (b.atx[t] - view_xx) * gsc, yy = (b.aty[t] -
                                    view_yy) * gsc, 1 <= Math.abs(xx - e) + Math.abs(yy - w) && (e = xx, w = yy, c.lineTo(e, w));
                                xx = (.5 * (b.atx[1] + b.atx[0]) - view_xx) * gsc;
                                yy = (.5 * (b.aty[1] + b.aty[0]) - view_yy) * gsc;
                                1 <= Math.abs(xx - e) + Math.abs(yy - w) && (e = xx, w = yy, c.lineTo(e, w));
                                c.stroke();
                                c.globalAlpha = b.atia * G;
                                c.strokeStyle = b.atc2;
                                c.lineWidth = 4 * E;
                                c.beginPath();
                                fj = b.atx.length - 1;
                                e = (b.atx[fj] - view_xx) * gsc;
                                w = (b.aty[fj] - view_yy) * gsc;
                                c.moveTo(e, w);
                                for (t = fj - 1; 0 <= t; t--) xx = (b.atx[t] - view_xx) * gsc, yy = (b.aty[t] - view_yy) * gsc, 1 <= Math.abs(xx - e) + Math.abs(yy - w) && (e = xx, w = yy, c.lineTo(e,
                                    w));
                                c.stroke();
                                b.atwg && (c.lineWidth = 3 * E, c.stroke(), c.lineWidth = 2 * E, c.stroke());
                                c.globalAlpha = G * b.blba;
                                if (b.abrot) {
                                    c.save();
                                    c.translate((b.atx[fj] - view_xx) * gsc, (b.aty[fj] - view_yy) * gsc);
                                    vang = Math.atan2(b.aty[fj] - b.aty[fj - 1], b.atx[fj] - b.atx[fj - 1]) - b.atba;
                                    if (0 > vang || vang >= pi2) vang %= pi2;
                                    vang < -Math.PI ? vang += pi2 : vang > Math.PI && (vang -= pi2);
                                    b.atba = (b.atba + .15 * vang) % pi2;
                                    c.rotate(b.atba);
                                    c.drawImage(b.bulb, b.blbx * b.bsc * E, b.blby * b.bsc * E, b.blbw * b.bsc * E, b.blbh * b.bsc * E);
                                    c.restore()
                                } else c.drawImage(b.bulb, (b.atx[fj] -
                                    view_xx + b.blbx * b.bsc * b.sc) * gsc, (b.aty[fj] - view_yy + b.blby * b.bsc * b.sc) * gsc, b.blbw * b.bsc * E, b.blbh * b.bsc * E);
                                b.apbs && (c.globalAlpha = .5 * G, c.lineWidth = 3 * E, c.stroke(), c.lineWidth = 2 * E, c.stroke())
                            } else b.antenna_shown && (b.antenna_shown = !1);
                        if (b.dead) {
                            c.save();
                            c.globalCompositeOperation = "lighter";
                            x = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * b.dead_amt))) * Math.sin(Math.PI * b.dead_amt);
                            B *= gsc;
                            for (t = z - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], c.save(), c.globalAlpha = x * (.6 + .4 * Math.cos(t / 4 - 15 * b.dead_amt)), c.translate((px -
                                view_xx) * gsc, (py - view_yy) * gsc), 4 > t ? (e = B * (1 + (4 - t) * b.swell), c.drawImage(kdmc, -e, -e, 2 * e, 2 * e)) : c.drawImage(kdmc, -B, -B, 2 * B, 2 * B), c.restore());
                            c.restore()
                        }
                        c.restore()
                    }
                    b.one_eye ? (t = 3 * y, B = Math.cos(D) * t, z = Math.sin(D) * t, x = y * b.ebisz, c.drawImage(b.ebi, 0, 0, b.ebiw, b.ebih, mww2 + (B + h - x / 2 - view_xx) * gsc, mhh2 + (z + u - x / 2 - view_yy) * gsc, x * gsc, x * gsc), B = Math.cos(D) * (t + .15) + b.rex * y, z = Math.sin(D) * (t + .15) + b.rey * y, x = y * b.episz, c.drawImage(b.epi, 0, 0, b.epiw, b.epih, mww2 + (B + h - x / 2 - view_xx) * gsc, mhh2 + (z + u - x / 2 - view_yy) * gsc, x * gsc, x * gsc)) : (t =
                        1 == render_mode ? 4 * y : 6 * y, x = 6 * y, B = Math.cos(D) * t + Math.cos(D - Math.PI / 2) * (x + .5), z = Math.sin(D) * t + Math.sin(D - Math.PI / 2) * (x + .5), c.fillStyle = b.ec, c.globalAlpha = b.eca * b.alive_amt, c.beginPath(), c.arc(mww2 + (B + h - view_xx) * gsc, mhh2 + (z + u - view_yy) * gsc, b.er * y * gsc, 0, pi2), c.closePath(), c.fill(), c.globalAlpha = b.ppa, B = Math.cos(D) * (t + .5) + b.rex * y + Math.cos(D - Math.PI / 2) * x, z = Math.sin(D) * (t + .5) + b.rey * y + Math.sin(D - Math.PI / 2) * x, c.fillStyle = b.ppc, c.beginPath(), c.arc(mww2 + (B + h - view_xx) * gsc, mhh2 + (z + u - view_yy) * gsc, 3.5 * y * gsc, 0, pi2),
                        c.closePath(), c.fill(), B = Math.cos(D) * t + Math.cos(D + Math.PI / 2) * (x + .5), z = Math.sin(D) * t + Math.sin(D + Math.PI / 2) * (x + .5), c.fillStyle = b.ec, c.globalAlpha = b.eca * b.alive_amt, c.beginPath(), c.arc(mww2 + (B + h - view_xx) * gsc, mhh2 + (z + u - view_yy) * gsc, b.er * y * gsc, 0, pi2), c.closePath(), c.fill(), c.globalAlpha = b.ppa, B = Math.cos(D) * (t + .5) + b.rex * y + Math.cos(D + Math.PI / 2) * x, z = Math.sin(D) * (t + .5) + b.rey * y + Math.sin(D + Math.PI / 2) * x, c.fillStyle = b.ppc, c.beginPath(), c.arc(mww2 + (B + h - view_xx) * gsc, mhh2 + (z + u - view_yy) * gsc, 3.5 * y * gsc, 0, pi2), c.closePath(),
                        c.fill());
                    c.globalAlpha = 1
                }
            if (high_quality || 0 < gla) {
                c.save();
                c.globalCompositeOperation = "lighter";
                for (f = foods_c - 1; 0 <= f; f--) b = foods[f], b.rx >= fpx1 && b.ry >= fpy1 && b.rx <= fpx2 && b.ry <= fpy2 && (e = b.rx - view_xx, w = b.ry - view_yy, h = e * e + w * w, fs = 1 + .06 * b.rad, z = e * fs, x = w * fs, H = .005 + .09 * (1 - h / (86E3 + h)), 1 != b.rad && (H *= Math.pow(b.rad, .25)), 1 != gla && (H *= gla), z = z * gsc + mww2, x = x * gsc + mhh2, 1 == b.rad ? (z -= b.gfw2, x -= b.gfh2, c.globalAlpha = H * b.fr, c.drawImage(b.gfi, z, x), c.globalAlpha = H * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr, c.drawImage(b.gfi, z, x)) : (z -=
                    b.gfw2 * b.rad, x -= b.gfh2 * b.rad, c.globalAlpha = H * b.fr, c.drawImage(b.gfi, 0, 0, b.gfw, b.gfh, z, x, b.gfw * b.rad, b.gfh * b.rad), c.globalAlpha = H * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr, c.drawImage(b.gfi, 0, 0, b.gfw, b.gfh, z, x, b.gfw * b.rad, b.gfh * b.rad)), fs = 1 + .32 * b.rad, z = e * fs, x = w * fs, H = .085 * (1 - h / (16500 + h)), 1 != b.rad && (H *= Math.pow(b.rad, .25)), 1 != gla && (H *= gla), z = z * gsc + mww2, x = x * gsc + mhh2, 1 == b.rad ? (z -= b.g2fw2, x -= b.g2fh2, c.globalAlpha = H * b.fr, c.drawImage(b.g2fi, z, x), c.globalAlpha = H * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr, c.drawImage(b.g2fi, z,
                    x)) : (z -= b.g2fw2 * b.rad, x -= b.g2fh2 * b.rad, c.globalAlpha = H * b.fr, c.drawImage(b.g2fi, 0, 0, b.g2fw, b.g2fh, z, x, b.g2fw * b.rad, b.g2fh * b.rad), c.globalAlpha = H * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr, c.drawImage(b.g2fi, 0, 0, b.g2fw, b.g2fh, z, x, b.g2fw * b.rad, b.g2fh * b.rad)));
                c.restore()
            }
            c.save();
            c.globalCompositeOperation = "lighter";
            for (f = preys.length - 1; 0 <= f; f--) h = preys[f], e = h.xx + h.fx, w = h.yy + h.fy, h.eaten && (b = h.eaten_by, q = Math.pow(h.eaten_fr, 2), e += (b.xx + b.fx + Math.cos(b.ang + b.fa) * (43 - 24 * q) * (1 - q) - e) * q, w += (b.yy + b.fy + Math.sin(b.ang +
                b.fa) * (43 - 24 * q) * (1 - q) - w) * q), e -= view_xx, w -= view_yy, b = e * e + w * w, fs = 1 + .08 * h.rad, px = e * fs, py = w * fs, H = .4 * (1 - b / (176E3 + b)), 1 != h.rad && (H *= Math.pow(h.rad, .25)), px = px * gsc + mww2, py = py * gsc + mhh2, 1 == h.rad ? -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2, py -= h.gfh2, c.globalAlpha = H * h.fr, c.drawImage(h.gfi, px, py), c.globalAlpha = H * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, c.drawImage(h.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * h.rad, py -= h.gfh2 * h.rad, c.globalAlpha = H * h.fr, c.drawImage(h.gfi, 0, 0, h.gfw,
                h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad), c.globalAlpha = H * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, c.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad)), fs = 1 + .32 * h.rad, px = e * fs, py = w * fs, H = .35 * (1 - b / (46500 + b)), 1 != h.rad && (H *= Math.pow(h.rad, .25)), b = 2 * h.rad, px = px * gsc + mww2, py = py * gsc + mhh2, -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * b, py -= h.gfh2 * b, c.globalAlpha = H * h.fr, c.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * b, h.gfh * b), c.globalAlpha = H * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, c.drawImage(h.gfi, 0, 0, h.gfw,
                h.gfh, px, py, h.gfw * b, h.gfh * b));
            c.restore();
            if (4E3 > Math.abs(grd - view_dist)) {
                c.save();
                c.lineWidth = 23 * gsc;
                c.strokeStyle = "#800000";
                c.fillStyle = "#300000";
                c.beginPath();
                xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
                yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
                c.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                for (t = -2E3; 2E3 >= t; t += 100) xx = grd + Math.cos(view_ang + t / grd) * grd * .98, yy = grd + Math.sin(view_ang + t / grd) * grd * .98, c.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
                c.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
                c.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                c.closePath();
                c.stroke();
                c.fill();
                c.restore()
            }
            wumsts && 0 < rank && 0 < snake_count && playing && (wumsts = !1, b = "Your length", f = "of", H = "Your rank", "DE" == country ? (b = "Deine L\u00e4nge", f = "von", H = "Dein rang") : "FR" == country ? (b = "Votre longueur", f = "de", H = "Ton rang") : "BR" == country &&
                (b = "Seu comprimento", f = "do", H = "Seu classifica\u00e7\u00e3o"), b = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + b + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1 + "</span></span>"), b += '<BR><span style="opacity: .3;">' + H + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + f + ' </span><span style="opacity: .35;">' + snake_count + "</span>", lbf.innerHTML = b);
            c.restore()
        }
    },
    ww = window.innerWidth,
    hh = window.innerHeight,
    lww = 0,
    lhh = 0,
    csc, grd = 16384;

function resize() {
    ww = Math.ceil(window.innerWidth);
    hh = Math.ceil(window.innerHeight);
    if (ww != lww || hh != lhh) {
        lww = ww;
        lhh = hh;
        var c = 0;
        if (mbi) {
            var f = ww / 1245;
            mbi.width = 1245 * f;
            c = Math.ceil(260 * f);
            mbi.height = c;
            hh -= c
        }
        ww -= wsu;
        loch.style.bottom = 16 + c + "px";
        lbf.style.bottom = 4 + c + "px";
        lbh.style.right = 4 + wsu + "px";
        lbs.style.right = 4 + wsu + "px";
        lbn.style.right = 64 + wsu + "px";
        lbp.style.right = 230 + wsu + "px";
        loch.style.right = 16 + wsu + "px";
        plq.style.right = 10 + wsu + "px";
        clq.style.left = Math.floor(ww / 2 - 130) + "px";
        login.style.width = ww + "px";
        fbh.style.right =
            30 + wsu + "px";
        twth.style.right = 130 + wsu + "px";
        cstx.style.right = 240 + wsu + "px";
        grqh.style.right = 20 + wsu + "px";
        pskh.style.left = Math.round(.25 * ww - 44) + "px";
        nskh.style.left = Math.round(.75 * ww - 44) + "px";
        skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
        skodiv.style.top = Math.round(hh / 2 + 120) + "px";
        pskh.style.top = Math.round(hh / 2 - 44) + "px";
        nskh.style.top = Math.round(hh / 2 - 44) + "px";
        ldmc.style.left = ww / 2 - 64 + "px";
        ldmc.style.top = hh / 2 - 64 + "px";
        var f = Math.sqrt(ww * ww + hh * hh),
            c = Math.ceil(1400 * ww / f),
            b = Math.ceil(1400 * hh / f);
        1100 < c && (b = Math.ceil(1100 * b / c), c = 1100);
        1100 < b && (c = Math.ceil(1100 * c / b), b = 1100);
        lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
        f = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        1 == f ? (trf(login, ""), login.style.top = "0px") : (login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px", trf(login, "scale(" + f + "," + f + ")"));
        if (mww != c || mhh != b) mww = c, mhh = b, mc.width = mww, mc.height = mhh, mwwp50 = mww + 50, mhhp50 = mhh + 50, mwwp150 = mww + 150, mhhp150 = mhh + 150, mww2 = mww / 2, mhh2 = mhh / 2, rdgbg();
        csc = Math.min(ww / mww, hh / mhh);
        trf(mc, "scale(" + csc + "," + csc + ")");
        mc.style.left =
            Math.floor(ww / 2 - mww / 2) + "px";
        mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
    }
    nbg.style.width = ww + "px";
    nbg.style.height = hh + "px";
    redraw()
}
window.onresize = function() {
    resize()
};
for (i = ois.length - 1; 0 <= i; i--) ois[i].ii.src = ois[i].src;
0 == wic && startAnimation();
window.onmousemove = function(c) {
    (c = c || window.event) && "undefined" != typeof c.clientX && (xm = c.clientX - ww / 2, ym = c.clientY - hh / 2)
};

function setAcceleration(c) {
    null != snake && (snake.wmd = 1 == c)
}
window.oncontextmenu = function(c) {
    c.preventDefault();
    c.stopPropagation();
    return !1
};
window.ontouchmove = function(c) {
    dmutm = Date.now() + 1500;
    null != snake && (c = c || window.event) && (c = c.touches[0], "undefined" != typeof c.clientX ? (xm = c.clientX - ww / 2, ym = c.clientY - hh / 2) : (xm = c.pageX - ww / 2, ym = c.pageY - hh / 2))
};
var dmutm = 0,
    ltchx = -1,
    ltchy = -1,
    ltchmtm = -1;
window.ontouchstart = function(c) {
    dmutm = Date.now() + 1500;
    if (null != snake) {
        if (c = c || window.event) {
            var f, b;
            b = c.touches[0];
            "undefined" != typeof b.clientX ? (f = b.clientX - ww / 2, b = b.clientY - hh / 2) : (f = b.pageX - ww / 2, b = b.pageY - hh / 2);
            var h = Date.now();
            24 > Math.abs(f - ltchx) && 24 > Math.abs(b - ltchy) && 400 > h - ltchmtm && setAcceleration(1);
            ltchx = f;
            ltchy = b;
            ltchmtm = h;
            xm = f;
            ym = b
        }
        c.preventDefault()
    }
};
window.onmousedown = function(c) {
    if (0 == dmutm || Date.now() > dmutm) dmutm = 0, null != snake && (window.onmousemove(c), setAcceleration(1), c.preventDefault())
};
window.ontouchend = function() {
    setAcceleration(0)
};

function omu(c) {
    setAcceleration(0)
}
window.addEventListener("mouseup", omu);
var mscps = 0,
    fmlts = [],
    fpsls = [],
    etm = 0,
    ws = null,
    tcsecs = 0,
    trdps = 0,
    rdps = 0,
    rfps = 0,
    rnps = 0,
    rsps = 0,
    reps = 0,
    rdpspc = [],
    anguc = 0,
    angnuc = 0,
    wangnuc = 0,
    lrd_mtm = Date.now(),
    locu_mtm = 0;
if (testing)
    for (i = 0; 256 > i; i++) rdpspc[i] = -1;
var pfs = [],
    pft = 0,
    pf1 = 0,
    pf2 = 0,
    rpf1, rpf2, pf_nap = 0,
    pf_ep = 0,
    rpft = 0,
    pf;
for (i = 0; 100 > i; i++) pfs.push(0);
var pf_add = 0,
    pf_new_add = 0,
    pf_remove = 0,
    tpfa = new Float32Array(4E4);
for (i = 0; i < tpfa.length; i++) tpfa[i] = 32 * Math.random();
var pfd;
testing && (pfd = document.createElement("div"), pfd.style.position = "fixed", pfd.style.left = "4px", pfd.style.bottom = "69px", pfd.style.width = "170px", pfd.style.height = "364px", pfd.style.background = "rgba(0, 0, 0, .8)", pfd.style.color = "#80FF80", pfd.style.fontFamily = "Verdana", pfd.style.zIndex = 999999, pfd.style.fontSize = "11px", pfd.style.padding = "10px", pfd.style.borderRadius = "30px", pfd.textContent = "ayy lmao", document.body.appendChild(pfd));

function resetGame() {
    ws && (ws.close(), ws = null);
    snake = null;
    want_close_socket = !1;
    snakes = [];
    foods = [];
    foods_c = 0;
    preys = [];
    sectors = [];
    os = {};
    rank = 0;
    best_rank = 999999999;
    biggest_snake_count = snake_count = 0;
    lagging = wfpr = playing = connected = !1;
    for (j = vfc - 1; 0 <= j; j--) fvxs[j] = 0, fvys[j] = 0;
    fvy = fvx = fvtg = 0;
    lag_mult = 1;
    cptm = 0;
    gsc = sgsc
}
var protocol_version = 2,
    connecting = !1,
    start_connect_mtm, play_btn_click_mtm = -1,
    waiting_for_sos = !1,
    sos_ready_after_mtm = -1;


function connect() {
    if (0 == sos.length) waiting_for_sos || (waiting_for_sos = !0, sos_ready_after_mtm = -1);
    else {
        waiting_for_sos = !1;
        sos_ready_after_mtm = -1;
        resetGame();
        connecting = !0;
        start_connect_mtm = Date.now();
        if (!forcing) {
            for (var c = 0; c < sos.length; c++) sos[c].ptm = 9999999;
            for (var f = null, b = 9999999, c = clus.length - 1; 0 <= c; c--) {
                var h = clus[c];
                if (h && 0 < h.ptms.length) {
                    for (var u = 0, q = h.ptms.length - 1; 0 <= q; q--) u += h.ptms[q];
                    u /= h.ptms.length;
                    testing && 0 == q && console.log("cluster " + c + " ping time: " + u);
                    u < b && (b = u, f = h);
                    for (q = sos.length -
                        1; 0 <= q; q--) sos[q].clu == c && (sos[q].ptm = u)
                }
            }
            if ("undefined" != typeof rmsos)
                for (c = 0; c < rmsos.length; c++)
                    for (h = "." + rmsos[c].a[0] + "." + rmsos[c].a[1] + "." + rmsos[c].a[2], b = rmsos[c].a[3], q = sos.length - 1; 0 <= q; q--) 0 <= sos[q].ip.indexOf(h) && sos[q].po == b && sos.splice(q, 1);
            var e, b = null;
            if (h = f)
                for (q = 0; 50 > q && null == b; q++)
                    if (0 < h.sos.length) {
                        for (c = f = 0; c < h.sos.length; c++) e = h.sos[c], f += e.wg / h.swg, e.ptv = f;
                        e.ptv = 1;
                        f = Math.random();
                        b = h.sos[0];
                        for (c = 0; c < h.sos.length; c++) e = h.sos[c], e.tainted || e.ptv < f && (b = e);
                        b.tainted && (b = null)
                    }
            if (null !=
                b) bso = b;
            else
                for (sos.sort(function(c, b) {
                        return parseFloat(c.po) - parseFloat(b.po)
                    }), bso = sos[Math.floor(Math.random() * sos.length)], c = sos.length - 1; 0 <= c; c--) sos[c].tainted || sos[c].ptm <= bso.ptm && 20 < sos[c].ac && (bso = sos[c])
        }
        testing && (q = "", null != b && (q = "(fbso!)"), console.log("connecting to " + bso.ip + ":" + bso.po + "... " + q));
        ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
        ws.binaryType = "arraybuffer";
        window.ws = ws;
        ws.onmessage = function(c) {
            if (ws == this && (c = new Uint8Array(c.data), rdps += c.length, 2 <= c.length)) {
                lptm =
                    cptm;
                cptm = Date.now();
                var b = c[0] << 8 | c[1],
                    e = cptm - lptm;
                0 == lptm && (e = 0);
                etm += e - b;
                testing && (rdpspc[c[2]] += c.length);
                var h = String.fromCharCode(c[2]),
                    b = 3,
                    f = c.length,
                    e = c.length - 2,
                    q = c.length - 3;
                if ("a" == h) connecting = !1, playing = connected = !0, play_btn_click_mtm = -1, grd = c[b] << 16 | c[b + 1] << 8 | c[b + 2], b += 3, e = c[b] << 8 | c[b + 1], b += 2, sector_size = c[b] << 8 | c[b + 1], b += 2, sector_count_along_edge = c[b] << 8 | c[b + 1], b += 2, spangdv = c[b] / 10, b++, nsp1 = (c[b] << 8 | c[b + 1]) / 100, b += 2, nsp2 = (c[b] << 8 | c[b + 1]) / 100, b += 2, nsp3 = (c[b] << 8 | c[b + 1]) / 100, b += 2, mamu =
                    (c[b] << 8 | c[b + 1]) / 1E3, b += 2, mamu2 = (c[b] << 8 | c[b + 1]) / 1E3, b += 2, cst = (c[b] << 8 | c[b + 1]) / 1E3, b += 2, b < f && (protocol_version = c[b]), setMscps(e), lbh.style.display = "inline", lbs.style.display = "inline", lbn.style.display = "inline", lbp.style.display = "inline", lbf.style.display = "inline", vcm.style.display = "inline", loch.style.display = "inline", startShowGame();
                else if ("e" == h || "E" == h || "3" == h || "4" == h || "5" == h) {
                    var t = c[b] << 8 | c[b + 1],
                        b = b + 2,
                        u = -1,
                        x = -1,
                        J = -1,
                        M = -1;
                    if (6 <= protocol_version) 6 == e ? (u = "e" == h ? 1 : 2, x = 2 * c[b] * Math.PI / 256, b++, J = 2 *
                        c[b] * Math.PI / 256, b++, M = c[b] / 18) : 5 == e ? "e" == h ? (x = 2 * c[b] * Math.PI / 256, b++, M = c[b] / 18) : "E" == h ? (u = 1, J = 2 * c[b] * Math.PI / 256, b++, M = c[b] / 18) : "4" == h ? (u = 2, J = 2 * c[b] * Math.PI / 256, b++, M = c[b] / 18) : "3" == h ? (u = 1, x = 2 * c[b] * Math.PI / 256, b++, J = 2 * c[b] * Math.PI / 256) : "5" == h && (u = 2, x = 2 * c[b] * Math.PI / 256, b++, J = 2 * c[b] * Math.PI / 256) : 4 == e && ("e" == h ? x = 2 * c[b] * Math.PI / 256 : "E" == h ? (u = 1, J = 2 * c[b] * Math.PI / 256) : "4" == h ? (u = 2, J = 2 * c[b] * Math.PI / 256) : "3" == h && (M = c[b] / 18));
                    else if (3 <= protocol_version) {
                        "3" != h && (8 == e || 7 == e || 6 == e && "3" != h || 5 == e && "3" != h) && (u =
                            "e" == h ? 1 : 2);
                        if (8 == e || 7 == e || 5 == e && "3" == h || 6 == e && "3" == h) x = 2 * (c[b] << 8 | c[b + 1]) * Math.PI / 65535, b += 2;
                        if (8 == e || 7 == e || 5 == e && "3" != h || 6 == e && "3" != h) J = 2 * (c[b] << 8 | c[b + 1]) * Math.PI / 65535, b += 2;
                        if (8 == e || 6 == e || 4 == e) M = c[b] / 18
                    } else {
                        if (11 == q || 8 == q || 9 == q || 6 == q) u = c[b] - 48, b++;
                        if (11 == q || 7 == q || 9 == q || 5 == q) x = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3;
                        if (11 == q || 8 == q || 9 == q || 6 == q) J = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3;
                        if (11 == q || 7 == q || 8 == q || 4 == q) M = (c[b] << 8 | c[b + 1]) / 1E3
                    }
                    if (f = os["s" + t]) {
                        -1 != u && (f.dir = u);
                        anguc++;
                        if (-1 != x) {
                            f.ang == x && angnuc++;
                            c = (x - f.ang) % pi2;
                            0 > c && (c += pi2);
                            c > Math.PI && (c -= pi2);
                            t = f.fapos;
                            for (q = 0; q < afc; q++) f.fas[t] -= c * afas[q], t++, t >= afc && (t = 0);
                            f.fatg = afc;
                            f.ang = x
                        } - 1 != J && (f.wang == J && wangnuc++, f.wang = J, f != snake && (f.eang = J)); - 1 != M && (f.sp = M, f.spang = f.sp / spangdv, 1 < f.spang && (f.spang = 1))
                    }
                } else if ("h" == h) {
                    var t = c[b] << 8 | c[b + 1],
                        b = b + 2,
                        F = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215;
                    if (f = os["s" + t]) f.fam = F, snl(f)
                } else if ("r" == h) {
                    if (t = c[b] << 8 | c[b + 1], b += 2, f = os["s" + t]) {
                        4 <= q && (f.fam = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215);
                        for (q = 0; q < f.pts.length; q++)
                            if (!f.pts[q].dying) {
                                f.pts[q].dying = !0;
                                f.sct--;
                                f.sc = Math.min(6, 1 + (f.sct - 2) / 106);
                                f.scang = .13 + .87 * Math.pow((7 - f.sc) / 6, 2);
                                f.ssp = nsp1 + nsp2 * f.sc;
                                f.fsp = f.ssp + .1;
                                f.wsep = 6 * f.sc;
                                c = nsep / gsc;
                                f.wsep < c && (f.wsep = c);
                                break
                            }
                        snl(f)
                    }
                } else if ("g" == h || "n" == h || "G" == h || "N" == h) {
                    if (playing && (F = "n" == h || "N" == h, t = c[b] << 8 | c[b + 1], b += 2, f = os["s" + t])) {
                        if (F) f.sct++;
                        else
                            for (q = 0; q < f.pts.length; q++)
                                if (!f.pts[q].dying) {
                                    f.pts[q].dying = !0;
                                    break
                                } var q = u = f.pts[f.pts.length - 1],
                            A = !1;
                        3 <= protocol_version ? "g" == h || "n" ==
                            h ? (e = c[b] << 8 | c[b + 1], b += 2, C = c[b] << 8 | c[b + 1], b += 2) : (e = q.xx + c[b] - 128, b++, C = q.yy + c[b] - 128, b++) : (e = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3, C = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3);
                        F && (f.fam = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215);
                        (u = points_dp.get()) || (u = {
                            exs: [],
                            eys: [],
                            efs: [],
                            ems: []
                        });
                        u.eiu = 0;
                        u.xx = e;
                        u.yy = C;
                        u.fx = 0;
                        u.fy = 0;
                        u.da = 0;
                        u.ebx = u.xx - q.xx;
                        u.eby = u.yy - q.yy;
                        f.pts.push(u);
                        A = !0;
                        f.iiv && (c = f.xx + f.fx - u.xx, b = f.yy + f.fy - u.yy, u.fx += c, u.fy += b, u.exs[u.eiu] = c, u.eys[u.eiu] = b, u.efs[u.eiu] = 0, u.ems[u.eiu] = 1, u.eiu++);
                        t = f.pts.length -
                            3;
                        if (1 <= t)
                            for (x = f.pts[t], h = n = 0, q = t - 1; 0 <= q; q--) t = f.pts[q], n++, c = t.xx, b = t.yy, 4 >= n && (h = cst * n / 4), t.xx += (x.xx - t.xx) * h, t.yy += (x.yy - t.yy) * h, f.iiv && (c -= t.xx, b -= t.yy, t.fx += c, t.fy += b, t.exs[t.eiu] = c, t.eys[t.eiu] = b, t.efs[t.eiu] = 0, t.ems[t.eiu] = 2, t.eiu++), x = t;
                        f.sc = Math.min(6, 1 + (f.sct - 2) / 106);
                        f.scang = .13 + .87 * Math.pow((7 - f.sc) / 6, 2);
                        f.ssp = nsp1 + nsp2 * f.sc;
                        f.fsp = f.ssp + .1;
                        f.wsep = 6 * f.sc;
                        c = nsep / gsc;
                        f.wsep < c && (f.wsep = c);
                        F && snl(f);
                        f.lnp = u;
                        f == snake && (ovxx = snake.xx + snake.fx, ovyy = snake.yy + snake.fy);
                        u = etm / 8 * f.sp / 4;
                        u *= lag_mult;
                        q = f.chl - 1;
                        f.chl = u / f.msl;
                        h = f.xx;
                        t = f.yy;
                        f.xx = e + Math.cos(f.ang) * u;
                        f.yy = C + Math.sin(f.ang) * u;
                        c = f.xx - h;
                        b = f.yy - t;
                        e = f.chl - q;
                        t = f.fpos;
                        for (q = 0; q < rfc; q++) f.fxs[t] -= c * rfas[q], f.fys[t] -= b * rfas[q], f.fchls[t] -= e * rfas[q], t++, t >= rfc && (t = 0);
                        f.fx = f.fxs[f.fpos];
                        f.fy = f.fys[f.fpos];
                        f.fchl = f.fchls[f.fpos];
                        f.ftg = rfc;
                        A && (f.ehl = 0);
                        if (f == snake) {
                            view_xx = snake.xx + snake.fx;
                            view_yy = snake.yy + snake.fy;
                            c = view_xx - ovxx;
                            b = view_yy - ovyy;
                            t = fvpos;
                            for (q = 0; q < vfc; q++) fvxs[t] -= c * vfas[q], fvys[t] -= b * vfas[q], t++, t >= vfc && (t = 0);
                            fvtg = vfc
                        }
                    }
                } else if ("l" ==
                    h) {
                    if (playing) {
                        wumsts = !0;
                        x = u = C = "";
                        M = J = 0; - 1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
                        var I = c[b];
                        b++;
                        rank = c[b] << 8 | c[b + 1];
                        rank < best_rank && (best_rank = rank);
                        b += 2;
                        snake_count = c[b] << 8 | c[b + 1];
                        snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
                        for (b += 2; b < f;) {
                            var L = c[b] << 8 | c[b + 1],
                                b = b + 2,
                                F = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215,
                                b = b + 3,
                                A = c[b] % 9;
                            b++;
                            e = c[b];
                            b++;
                            M++;
                            h = "";
                            for (q = 0; q < e; q++) t = c[b], h += String.fromCharCode(t), b++;
                            M != I && (gdnm(h) || (h = ""));
                            for (var N = "", q = 0; q < e; q++) t = h.charCodeAt(q), N = 38 == t ? N + "&amp;" : 60 ==
                                t ? N + "&lt;" : 62 == t ? N + "&gt;" : 32 == t ? N + "&nbsp;" : N + String.fromCharCode(t);
                            h = N;
                            J++;
                            score = Math.floor(15 * (fpsls[L] + F / fmlts[L] - 1) - 5) / 1;
                            t = M == I ? 1 : .7 * (.3 + .7 * (1 - J / 10));
                            C += '<span style="opacity:' + t + "; color:" + per_color_imgs[A].cs + ';">' + score + "</span><BR>";
                            u += '<span style="opacity:' + t + "; color:" + per_color_imgs[A].cs + ";" + (M == I ? "font-weight:bold;" : "") + '">' + h + "</span><BR>";
                            x += '<span style="opacity:' + t + "; color:" + per_color_imgs[A].cs + ';">#' + J + "</span><BR>"
                        }
                        lbs.innerHTML = C;
                        lbn.innerHTML = u;
                        lbp.innerHTML = x
                    }
                } else if ("v" ==
                    h) 2 == c[b] ? (want_close_socket = !0, want_victory_message = !1, want_hide_victory = 1, hvfr = 0) : (dead_mtm = Date.now(), play_btn.setEnabled(!0), e = Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1, twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + e + " in http://slither.io! Can you beat that? #slitherio"), C = "Your final length was", "DE" == country ? C = "Deine endg\u00fcltige L\u00e4nge war" : "FR" == country ? C = "Votre longueur finale \u00e9tait de" : "BR" == country && (C = "Seu comprimento final foi de"),
                    f = "", 1E3 < e && (f = "!"), lastscore.innerHTML = '<span style="opacity: .45;">' + C + " </span><b>" + e + "</b>" + f, e = "Play Again", "FR" == country ? e = "Jouer" : "BR" == country && (e = "Joga"), play_btn.setText(String.fromCharCode(160) + e + String.fromCharCode(160)), 1 == c[b] ? (nick_holder.style.display = "none", playh.style.display = "none", smh.style.display = "none", victory_holder.style.display = "inline", saveh.style.display = "block", want_victory_focus = want_victory_message = !0, victory.disabled = !1, save_btn.setEnabled(!0)) : want_close_socket = !0);
                else if ("W" == h) e = c[b], b++, C = c[b], f = {}, f.xx = e, f.yy = C, sectors.push(f);
                else if ("w" == h)
                    if (8 <= protocol_version ? (f = 2, e = c[b], b++, C = c[b]) : (f = c[b], b++, e = c[b] << 8 | c[b + 1], b += 2, C = c[b] << 8 | c[b + 1]), 1 == f) f = {}, f.xx = e, f.yy = C, sectors.push(f);
                    else {
                        for (A = cm1 = foods_c - 1; 0 <= A; A--) q = foods[A], q.sx == e && q.sy == C && (A == cm1 ? foods[A] = null : (foods[A] = foods[cm1], foods[cm1] = null), foods_c--, cm1--);
                        for (A = sectors.length - 1; 0 <= A; A--) f = sectors[A], f.xx == e && f.yy == C && sectors.splice(A, 1)
                    }
                else if ("m" == h) {
                    L = c[b] << 16 | c[b + 1] << 8 | c[b + 2];
                    b += 3;
                    F = (c[b] <<
                        16 | c[b + 1] << 8 | c[b + 2]) / 16777215;
                    b += 3;
                    C = Math.floor(15 * (fpsls[L] + F / fmlts[L] - 1) - 5) / 1;
                    e = c[b];
                    b++;
                    q = "";
                    for (A = 0; A < e; A++) q += String.fromCharCode(c[b]), b++;
                    gdnm(q) || (q = "");
                    for (e = ""; b < f;) e += String.fromCharCode(c[b]), b++;
                    gdnm(e) || (e = "");
                    q = q.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    e = e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    0 < C && (c = "", 0 < e.length && (c += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + e + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"),
                        0 < q.length ? (c = 0 < e.length ? c + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + q + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + q + "</b></span></i>", c += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : c = 0 < e.length ? c + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" +
                        ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : c + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>"), vcm.innerHTML = c)
                } else if ("p" == h) wfpr = !1, lagging && (etm *= lag_mult, lagging = !1);
                else if ("u" == h) {
                    q = asmc.getContext("2d");
                    q.clearRect(0, 0, 80, 80);
                    q.fillStyle = "#FFFFFF";
                    for (var C = e = 0; b < f && !(80 <= C);)
                        if (t = c[b++], 128 <= t)
                            for (t -= 128, A = 0; A < t && !(e++, 80 <= e && (e = 0, C++, 80 <= C)); A++);
                        else
                            for (A =
                                0; 7 > A && !(0 < (t & u_m[A]) && q.fillRect(e, C, 1, 1), e++, 80 <= e && (e = 0, C++, 80 <= C)); A++);
                } else if ("s" == h) {
                    if (playing)
                        if (t = c[b] << 8 | c[b + 1], b += 2, 6 < q) {
                            x = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215;
                            b += 3;
                            b++;
                            J = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215;
                            b += 3;
                            M = (c[b] << 8 | c[b + 1]) / 1E3;
                            b += 2;
                            F = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215;
                            b += 3;
                            A = c[b];
                            b++;
                            I = [];
                            L = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5;
                            b += 3;
                            N = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5;
                            b += 3;
                            e = c[b];
                            b++;
                            h = "";
                            for (q = 0; q < e; q++) h += String.fromCharCode(c[b]), b++;
                            for (var O = q = C = e = 0, K = !1; b < f;) q =
                                e, O = C, K ? (e += (c[b] - 127) / 2, b++, C += (c[b] - 127) / 2, b++) : (e = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3, C = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3, q = e, O = C, K = !0), (u = points_dp.get()) || (u = {
                                    exs: [],
                                    eys: [],
                                    efs: [],
                                    ems: []
                                }), u.eiu = 0, u.xx = e, u.yy = C, u.fx = 0, u.fy = 0, u.da = 0, u.ebx = e - q, u.eby = C - O, I.push(u);
                            f = newSnake(t, L, N, A, x, I);
                            null == snake ? (view_xx = e, view_yy = C, snake = f, snake.md = !1, snake.wmd = !1, f.nk = my_nick) : (f.nk = h, gdnm(h) || (f.nk = ""));
                            f.eang = f.wang = J;
                            f.sp = M;
                            f.spang = f.sp / spangdv;
                            1 < f.spang && (f.spang = 1);
                            f.fam = F;
                            f.sc = Math.min(6, 1 + (f.sct - 2) /
                                106);
                            f.scang = .13 + .87 * Math.pow((7 - f.sc) / 6, 2);
                            f.ssp = nsp1 + nsp2 * f.sc;
                            f.fsp = f.ssp + .1;
                            f.wsep = 6 * f.sc;
                            c = nsep / gsc;
                            f.wsep < c && (f.wsep = c);
                            f.sep = f.wsep;
                            snl(f)
                        } else
                            for (c = 1 == c[b], A = snakes.length - 1; 0 <= A; A--)
                                if (snakes[A].id == t) {
                                    snakes[A].id = -1234;
                                    c ? (snakes[A].dead = !0, snakes[A].dead_amt = 0, snakes[A].edir = 0) : snakes.splice(A, 1);
                                    delete os["s" + t];
                                    break
                                }
                } else if ("F" == h)
                    if (4 <= protocol_version)
                        for (h = !1; b < f;) A = c[b], b++, e = c[b] << 8 | c[b + 1], b += 2, C = c[b] << 8 | c[b + 1], b += 2, q = c[b] / 5, b++, t = C * grd * 3 + e, q = newFood(t, e, C, q, !0, A), h || (h = !0, u =
                            Math.floor(e / sector_size), F = Math.floor(C / sector_size)), q.sx = u, q.sy = F;
                    else
                        for (u = c[b] << 8 | c[b + 1], b += 2, F = c[b] << 8 | c[b + 1], b += 2; b < f;) t = c[b] << 16 | c[b + 1] << 8 | c[b + 2], b += 3, A = c[b], b++, e = sector_size * (u + c[b] / 255), b++, C = sector_size * (F + c[b] / 255), b++, q = c[b] / 5, b++, q = newFood(t, e, C, q, !0, A), q.sx = u, q.sy = F;
                else if ("b" == h || "f" == h) 4 <= protocol_version ? (A = c[b], b++, 4 < q && (e = c[b] << 8 | c[b + 1], b += 2, C = c[b] << 8 | c[b + 1], t = C * grd * 3 + e, q = c[b + 2] / 5, q = newFood(t, e, C, q, "b" == h, A), q.sx = Math.floor(e / sector_size), q.sy = Math.floor(C / sector_size))) : (t =
                    c[b] << 16 | c[b + 1] << 8 | c[b + 2], b += 3, 4 < q && (A = c[b], b++, u = c[b] << 8 | c[b + 1], b += 2, F = c[b] << 8 | c[b + 1], b += 2, e = sector_size * (u + c[b] / 255), b++, C = sector_size * (F + c[b] / 255), b++, q = c[b] / 5, q = newFood(t, e, C, q, "b" == h, A), q.sx = u, q.sy = F));
                else if ("c" == h) {
                    4 <= protocol_version ? (e = c[b] << 8 | c[b + 1], b += 2, C = c[b] << 8 | c[b + 1], b += 2, t = C * grd * 3 + e) : (t = c[b] << 16 | c[b + 1] << 8 | c[b + 2], b += 3);
                    for (A = cm1 = foods_c - 1; 0 <= A; A--)
                        if (q = foods[A], q.id == t) {
                            q.eaten = !0;
                            b + 2 <= f ? (c = c[b] << 8 | c[b + 1], q.eaten_by = os["s" + c], q.eaten_fr = 0) : (A == cm1 ? foods[A] = null : (foods[A] = foods[cm1],
                                foods[cm1] = null), foods_c--, cm1--);
                            t = -1;
                            break
                        }
                    testing && -1 != t && console.log("wtf")
                } else if ("j" == h) {
                    t = c[b] << 8 | c[b + 1];
                    b += 2;
                    e = 1 + 3 * (c[b] << 8 | c[b + 1]);
                    b += 2;
                    C = 1 + 3 * (c[b] << 8 | c[b + 1]);
                    b += 2;
                    f = null;
                    for (A = preys.length - 1; 0 <= A; A--)
                        if (preys[A].id == t) {
                            f = preys[A];
                            break
                        }
                    if (f) {
                        u = etm / 8 * f.sp / 4;
                        u *= lag_mult;
                        h = f.xx;
                        t = f.yy;
                        15 == q ? (f.dir = c[b] - 48, b++, f.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, f.wang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, f.sp = (c[b] << 8 | c[b + 1]) / 1E3) : 11 == q ? (f.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b +
                            2]) * Math.PI / 16777215, b += 3, f.sp = (c[b] << 8 | c[b + 1]) / 1E3) : 12 == q ? (f.dir = c[b] - 48, b++, f.wang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, f.sp = (c[b] << 8 | c[b + 1]) / 1E3) : 13 == q ? (f.dir = c[b] - 48, b++, f.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, f.wang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215) : 9 == q ? f.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215 : 10 == q ? (f.dir = c[b] - 48, b++, f.wang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215) : 8 == q && (f.sp = (c[b] << 8 | c[b + 1]) / 1E3);
                        f.xx = e + Math.cos(f.ang) * u;
                        f.yy =
                            C + Math.sin(f.ang) * u;
                        c = f.xx - h;
                        b = f.yy - t;
                        t = f.fpos;
                        for (q = 0; q < rfc; q++) f.fxs[t] -= c * rfas[q], f.fys[t] -= b * rfas[q], t++, t >= rfc && (t = 0);
                        f.fx = f.fxs[f.fpos];
                        f.fy = f.fys[f.fpos];
                        f.ftg = rfc
                    }
                } else if ("y" == h)
                    if (t = c[b] << 8 | c[b + 1], b += 2, 2 == q)
                        for (A = preys.length - 1; 0 <= A; A--) {
                            if (f = preys[A], f.id == t) {
                                preys.splice(A, 1);
                                break
                            }
                        } else if (4 == q)
                            for (c = c[b] << 8 | c[b + 1], A = preys.length - 1; 0 <= A; A--) {
                                if (f = preys[A], f.id == t) {
                                    f.eaten = !0;
                                    f.eaten_by = os["s" + c];
                                    f.eaten_by ? f.eaten_fr = 0 : preys.splice(A, 1);
                                    break
                                }
                            } else A = c[b], b++, e = (c[b] << 16 | c[b + 1] << 8 | c[b +
                                2]) / 5, b += 3, C = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3, q = c[b] / 5, b++, u = c[b] - 48, b++, J = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, x = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, M = (c[b] << 8 | c[b + 1]) / 1E3, newPrey(t, e, C, q, A, u, J, x, M)
                            }
                          DataHandler();
        };
        ws.onerror = function(b) {};
        ws.onclose = function(b) {
            ws == this && (playing = connected = !1)
        };
        ws.onopen = function(b) {
            if (ws == this) {
                b = asciize(nick.value);
                24 < b.length && (b = b.substr(0, 24));
                my_nick = b;
                gdnm(b) || (b = "");
                var c = Math.floor(9 * Math.random());
                try {
                    var e = localStorage.snakercv;
                    e ==
                        "" + Number(e) && (c = Number(e))
                } catch (f) {}
                e = new Uint8Array(3 + b.length);
                e[0] = 115;
                e[1] = 7;
                e[2] = c;
                for (c = 0; c < b.length; c++) e[c + 3] = b.charCodeAt(c);
                ws.send(e);
                high_quality = !0;
                gla = 1;
                wdfg = 0;
                qsm = 1;
                0 == want_quality && (high_quality = !1, gla = 0, qsm = 1.7);
                1 == render_mode && (high_quality = !1, gla = 0);
                lpstm = Date.now()
            }
        }
    }
}

function asciize(c) {
    var f, b, h;
    b = c.length;
    var u = !1;
    for (f = 0; f < b; f++)
        if (h = c.charCodeAt(f), 32 > h || 127 < h) {
            u = !0;
            break
        }
    if (u) {
        u = "";
        for (f = 0; f < b; f++) h = c.charCodeAt(f), u = 32 > h || 127 < h ? u + " " : u + String.fromCharCode(h);
        return u
    }
    return c
}
var smh = document.getElementById("smh"),
    cstx = document.getElementById("cstx");
cstx.src = "FR" == country ? "/s/customskins-fr.png" : "BR" == country ? "/s/customskins-br.png" : "/s/customskins2.png";
try {
    "1" != localStorage.edttsg && (cstx.style.display = "inline")
} catch (c) {}
var fb = document.getElementById("fb");
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
fb.onclick = function() {
    localStorage.edttsg = "1"
};
var fbh = document.getElementById("fbh"),
    twt = document.getElementById("twt");
twt.onclick = function() {
    localStorage.edttsg = "1"
};
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
var twth = document.getElementById("twth"),
    csk = document.getElementById("csk"),
    cskh = document.getElementById("cskh"),
    want_quality = 1,
    grq = document.getElementById("grq"),
    grqh = document.getElementById("grqh"),
    phqi = document.createElement("img"),
    grqi = document.getElementById("grqi");
try {
    "0" == localStorage.qual ? (grqi.src = "/s/lowquality.png", want_quality = 0) : (phqi.src = "/s/lowquality.png", want_quality = 1)
} catch (c) {}
grq.onclick = function() {
    try {
        "0" == localStorage.qual ? (localStorage.qual = "1", grqi.src = "/s/highquality.png", want_quality = 1) : (localStorage.qual = "0", grqi.src = "/s/lowquality.png", want_quality = 0)
    } catch (c) {}
    return !1
};
var plq = document.getElementById("plq"),
    clq = document.getElementById("clq");
try {
    "1" == localStorage.edttsg && (cskh.style.display = "inline")
} catch (c) {}
var psk = document.getElementById("psk"),
    pskh = document.getElementById("pskh"),
    nsk = document.getElementById("nsk"),
    nskh = document.getElementById("nskh"),
    choosing_skin = !1;
psk.onclick = function() {
    if (playing && null != snake) {
        var c = snake.rcv;
        c--;
        0 > c && (c = max_skin_cv);
        setSkin(snake, c)
    }
    return !1
};
nsk.onclick = function() {
    if (playing && null != snake) {
        var c = snake.rcv;
        c++;
        c > max_skin_cv && (c = 0);
        setSkin(snake, c)
    }
    return !1
};
csk.onclick = function() {
    if (!playing && -1 == dead_mtm) {
        resetGame();
        choosing_skin = !0;
        pskh.style.opacity = 0;
        nskh.style.opacity = 0;
        skodiv.style.opacity = 0;
        pskh.style.display = "inline";
        nskh.style.display = "inline";
        skodiv.style.display = "inline";
        skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
        nick.disabled = !0;
        0 == mscps && setMscps(300);
        for (var c = [], f = 22; 1 <= f; f--) c.push({
            xx: grd / 2 - 10 * f,
            yy: grd / 2,
            fx: 0,
            fy: 0,
            exs: [],
            eys: [],
            efs: [],
            ems: [],
            eiu: 0,
            da: 0,
            ebx: 10,
            eby: 0
        });
        f = 0;
        try {
            var b = localStorage.snakercv;
            b == "" + Number(b) &&
                (f = Number(b))
        } catch (h) {}
        c = newSnake(1, grd / 2, grd / 2, f, 0, c);
        view_xx = grd / 2 - 105;
        view_yy = grd / 2;
        snake = c;
        c.nk = "";
        c.eang = c.wang = c.ang;
        c.sp = 4.8;
        c.spang = c.sp / spangdv;
        1 < c.spang && (c.spang = 1);
        c.sc = 1;
        c.scang = 1;
        c.ssp = nsp1 + nsp2 * c.sc;
        c.fsp = c.ssp + .1;
        c.wsep = 6 * c.sc;
        b = nsep / gsc;
        c.wsep < b && (c.wsep = b);
        c.sep = c.wsep;
        snl(c);
        c.alive_amt = 1;
        c.rex = 1.66;
        ws = {
            send: function(b) {},
            close: function() {}
        };
        high_quality = playing = connected = !0;
        gla = 1;
        wdfg = 0;
        qsm = 1;
        startShowGame();
        lbh.style.display = "none";
        lbs.style.display = "none";
        lbn.style.display =
            "none";
        lbp.style.display = "none";
        lbf.style.display = "none";
        vcm.style.display = "none";
        loch.style.display = "none"
    }
    return !1
};
nick.oninput = function() {
    var c = this.value,
        f = asciize(c);
    24 < f.length && (f = f.substr(0, 24));
    c != f && (this.value = f)
};
victory.oninput = function() {
    var c = this.value,
        f = asciize(c);
    140 < f.length && (f = f.substr(0, 140));
    c != f && (this.value = f)
};
nick.focus();
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas"),
    lmc = document.createElement("canvas"),
    lgsc = 1,
    lw = 900,
    lh = 270;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d"),
    lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
    pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
    kc: 22,
    ws: 4,
    wr: .025,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [150, 30, 150, 107, 150, 184],
    kc: 66,
    ws: 4,
    wr: .05,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [207, 96, 207, 140, 207, 184],
    kc: 46,
    ws: 4,
    wr: .03,
    qm: .035,
    sp: .06,
    sz: 11
}, {
    pts: [207, 47, 207, 48.5, 207, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15,
    r: .5
}, {
    pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
    kc: 66,
    ws: 6,
    wr: -.025,
    qm: -.0125,
    sp: .06,
    sz: 11,
    r: 1.5
}, {
    pts: [243, 94, 268, 94, 293, 94],
    kc: 66,
    ws: 4,
    wr: .015,
    qm: .025,
    sp: .06,
    sz: 9,
    r: 1.2
}, {
    pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
    kc: 46,
    ws: 4,
    wr: .005,
    qm: .02,
    sp: .06,
    sz: 11,
    r: 2.1
}, {
    pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
    kc: 35,
    ws: 6,
    wr: -.013,
    qm: -.025,
    sp: .06,
    sz: 11,
    r: 1.3
}, {
    pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
    kc: 38,
    ws: 4,
    wr: .01,
    qm: -.035,
    sp: .06,
    sz: 11
}, {
    pts: [663, 177, 663, 178.5, 663, 180],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [717,
        96, 717, 140, 717, 184
    ],
    kc: 33,
    ws: 4,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 11
}, {
    pts: [717, 47, 717, 48.5, 717, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
    kc: 43,
    ws: 4,
    wr: 0,
    qm: .0274,
    sp: .073,
    sz: 11,
    r: 1.5
});
for (i = 0; i < lts.length; i++) lts[i].mwig = 5;
var lga = 0,
    lgss = 0,
    ncka = 0,
    mwig = 4,
    lgfr = 0,
    lgtm = Date.now();

function showLogo(c) {
    var f = Date.now(),
        b = (f - lgtm) / 25;
    lgtm = f;
    var h, u, q, e, w, D, y, B, G, E, t, z, x, J, M;
    lgfr += b;
    if (0 == lts[lts.length - 1].mwig && 1 == lga && 1 == lgss && 1 == ncka) clearInterval(showlogo_iv), showlogo_iv = -1;
    else {
        if (c || 1 != lga) lga += .05 * b, 1 <= lga && (lga = 1), lmc2.style.opacity = lga;
        1 != lgss && (lgss += .00375 * b, 1 <= lgss && (lgss = 1));
        if (c || 1 != ncka) ncka += .006 * b, 1 <= ncka && (ncka = 1), nick_holder.style.opacity = Math.min(1, 6 * ncka), is_mobile || (smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - .05)))), .01 <= ncka && (playh.style.opacity = Math.min(1,
            5 * (ncka - .01)));
        lctx.clearRect(0, 0, lw, lh);
        for (f = 0; f < lts.length; f++) {
            var F = lts[f],
                A = F.pts,
                I = F.kc,
                L = F.ws,
                N = F.wr,
                C = F.qm;
            h = F.sp;
            var O = F.sz;
            M = F.r;
            var K = F.mwig;
            c && (F.wch = !0, K = 1E-7);
            F.wch && 0 != K && (K *= .982, K -= .001 * b, 1 == render_mode && (K -= .005 * b), 0 >= K && (K = 0), F.mwig = K);
            M || (M = 1);
            lctx.beginPath();
            9 > f ? (q = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc), q.addColorStop(0, "#80FFA0"), q.addColorStop(1, "#008040")) : (q = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc), q.addColorStop(0, "#9850FF"), q.addColorStop(1, "#281060"));
            lctx.fillStyle =
                q;
            x = !1;
            J = 0;
            q = A[0];
            e = A[1];
            G = q;
            E = e;
            var H = lgfr * h;
            for (t = 2; t < A.length; t += 4) {
                h = q;
                u = e;
                cx2 = A[t];
                cy2 = A[t + 1];
                q = A[t + 2];
                e = A[t + 3];
                for (var Q = 1; Q <= I; Q++) {
                    J++;
                    var P = Q / I;
                    w = h + (cx2 - h) * P;
                    D = u + (cy2 - u) * P;
                    y = cx2 + (q - cx2) * P;
                    B = cy2 + (e - cy2) * P;
                    w += (y - w) * P;
                    D += (B - D) * P;
                    G = Math.atan2(D - E, w - G);
                    x ? (G - z > Math.PI ? G -= 2 * Math.PI : G - z < -Math.PI && (G += 2 * Math.PI), z += .05 * (G - z), z %= 2 * Math.PI) : (x = !0, z = G);
                    G = w;
                    E = D;
                    w += Math.cos(Math.PI / 2 + z) * Math.sin(H) * L * K;
                    D += Math.sin(Math.PI / 2 + z) * Math.sin(H) * L * K;
                    H -= .76 * C * L;
                    L += N;
                    lctx.beginPath();
                    B = 1.15 * O * Math.min(1, lgsc * (.2 +
                        .8 * lga) * (30 * lgss * M - J / 20 - f / 2));
                    .5 < B && (lctx.arc(w * lgsc, D * lgsc, B, 0, pi2), F.wch = !0);
                    lctx.fill()
                }
            }
        }
        lctx2.clearRect(0, 0, lw, lh);
        lctx2.shadowColor = "#000000";
        lctx2.shadowBlur = 16;
        lctx2.shadowOffsetY = 7;
        lctx2.drawImage(lmc, 0, 0)
    }
}
var showlogo_iv = -1;
is_safari || is_mobile ? (ncka = lgss = lga = 1, showLogo(!0)) : showlogo_iv = setInterval("showLogo(false)", 25);
document.onkeydown = function(c) {
    c = c || window.event;
    var f = c.keyCode;
    if (37 == f) kd_l = !0;
    else if (39 == f) kd_r = !0;
    else if (38 == f || 32 == f) kd_u = !0, setAcceleration(1);
    else if (13 == f || 10 == f)
        if (want_victory_message) {
            if (0 < victory.value.length) save_btn.elem.onclick()
        } else {
            if (!connecting && !connected) play_btn.elem.onclick()
        }
    else 16 == f && testing && (shifty = !0);
    testing && console.log("keydown: " + c.keyCode)
};
document.onkeyup = function(c) {
    c = c || window.event;
    c = c.keyCode;
    37 == c ? kd_l = !1 : 39 == c ? kd_r = !1 : 38 == c || 32 == c ? (kd_u = !1, setAcceleration(0)) : 16 == c && testing && (shifty = !1)
};

function loadSos(c) {
    if (!forcing && 0 < c.length) {
        sos = [];
        clus = [];
        c.charAt(0);
        for (var f = 1, b = {}, h = 0, b = h = 0, u, q = 0, e = 0, w = [], D = [], y = [], B = []; f < c.length;)
            if (u = (c.charCodeAt(f++) - 97 - e) % 26, 0 > u && (u += 26), q *= 16, q += u, e += 7, 1 == b) {
                if (0 == h) w.push(q), 4 == w.length && h++;
                else if (1 == h) D.push(q), 3 == D.length && h++;
                else if (2 == h) y.push(q), 3 == y.length && h++;
                else if (3 == h && (B.push(q), 1 == B.length)) {
                    b = {};
                    for (h = u = 0; h < D.length; h++) u *= 256, u += D[h];
                    for (h = D = 0; h < y.length; h++) D *= 256, D += y[h];
                    b.ip = w.join(".");
                    b.po = u;
                    b.ac = D;
                    b.wg = D + 5;
                    b.clu = B[0];
                    clus[b.clu] ?
                        w = clus[b.clu] : (w = {}, clus[b.clu] = w, w.sis = [], w.ptms = [], w.swg = 0, w.tac = 0, w.sos = []);
                    b.cluo = w;
                    w.swg += b.wg;
                    w.sos.push(b);
                    w.tac += D;
                    sos.push(b);
                    w = [];
                    D = [];
                    y = [];
                    B = [];
                    h = 0
                }
                b = q = 0
            } else b++;
        for (f = sos.length - 1; 0 <= f; f--)
            if (b = 1, w = sos[f].cluo) {
                for (h = w.sis.length - 1; 0 <= h; h--)
                    if (w.sis[h].ip == sos[f].ip) {
                        b = 0;
                        break
                    }
                1 == b && w.sis.push({
                    ip: sos[f].ip
                })
            }
        for (f = clus.length - 1; 0 <= f; f--)
            if ((w = clus[f]) && 0 < w.sis.length) {
                h = Math.floor(Math.random() * w.sis.length);
                c = w.sis[h].ip;
                e = null;
                try {
                    e = new WebSocket("ws://" + c + ":80/ptc")
                } catch (G) {
                    e = null
                }
                e &&
                    (e.binaryType = "arraybuffer", e.onerror = function(b) {}, e.onmessage = function(b) {
                        b = new Uint8Array(b.data);
                        if (1 == b.length && 112 == b[0])
                            for (b = clus.length - 1; 0 <= b; b--) {
                                var c = clus[b];
                                if (c && c.ps == this) {
                                    var e = Date.now() - c.stm;
                                    testing && console.log(" ping time for cluster " + b + ": " + e);
                                    c.ptms.push(e);
                                    4 > c.ptms.length ? (c.stm = Date.now(), b = new Uint8Array(1), b[0] = 112, this.send(b)) : (waiting_for_sos && -1 == sos_ready_after_mtm && (sos_ready_after_mtm = Date.now() + 2E3), this.close(), c.ps = null);
                                    break
                                }
                            }
                    }, e.onopen = function(b) {
                        b = !1;
                        for (var c =
                                clus.length - 1; 0 <= c; c--) {
                            var e = clus[c];
                            if (e && e.ps == this) {
                                e.stm = Date.now();
                                b = new Uint8Array(1);
                                b[0] = 112;
                                this.send(b);
                                b = !0;
                                break
                            }
                        }
                        b || this.close()
                    }, w.ps = e)
            }
    }
}
var mba = null,
    mbi = null;
if (is_ios || is_android) mba = document.createElement("a"), mbi = document.createElement("img"), mbi.border = 0, mbi.draggable = "false", mbi.className = "nsi", mbi.width = 1245, mbi.height = 260, mbi.style.position = "fixed", mbi.style.left = "0px", mbi.style.bottom = "0px", mbi.style.zIndex = 70, mbi.src = "/s/n2.jpg", mba.appendChild(mbi), document.body.appendChild(mba), is_ios ? mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8" : is_android && (mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" :
    "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither");
resize();
o = {
    f: function(c, f, b) {
        "success" == f && loadSos(c)
    }
};
getData("/i33628.txt", o);
