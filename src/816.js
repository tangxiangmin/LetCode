/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
    const n = s.length - 2;
    const res = [];
    s = s.slice(1, s.length - 1);
    for (let l = 1; l < n; ++l) {
        const lt = getPos(s.slice(0, l));
        if (lt.length === 0) {
            continue;
        }
        const rt = getPos(s.slice(l));
        if (rt.length === 0) {
            continue;
        }
        for (const i of lt) {
            for (const j of rt) {
                res.push("(" + i + ", " + j + ")");
            }
        }
    }
    return res;
}

const getPos = (s) => {
    const pos = [];
    if (s[0] !== '0' || "0" === s) {
        pos.push(s);
    }
    for (let p = 1; p < s.length; ++p) {
        if ((p !== 1 && s[0] === '0') || s[s.length - 1] === '0') {
            continue;
        }
        pos.push(s.slice(0, p) + "." + s.slice(p));
    }
    return pos;
};

var s = "(123)"
var ans = ambiguousCoordinates(s)
console.log(ans)