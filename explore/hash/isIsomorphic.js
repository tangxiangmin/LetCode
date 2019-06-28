/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var s2t = new Map();
    var t2s = new Map();
    for (var i = 0; i < s.length; ++i) {
        var c = s[i];
        var c2 = t[i];
        if (!s2t.has(c)) {
            s2t.set(c, c2);
        }
        if (!t2s.has(c2)) {
            t2s.set(c2, c);
        }

        if (s2t.get(c) !== c2 || t2s.get(c2) !== c) {
            return false;
        }
    }
    return true
};

var b = "aa";
var a = "aa";
console.log(isIsomorphic(a, b));
