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

    function getPos(s) {
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
}


var ambiguousCoordinates = function (s) {
    s = s.slice(1, s.length - 1);
    const n = s.length
    var ans = []

    for (let i = 1; i < n; ++i) {
        const left = split(s.slice(0, i))
        const right = split(s.slice(i))
        console.log(left, right)
        for (const l of left) {
            for (const r of right) {
                ans.push(`(${l}, ${r})`)
            }
        }
    }
    return ans
    // 每个字符串可能的组合
    function split(s) {
        const n = s.length
        if (n === 1) return [s]
        let ans = []
        if (s[0] !== '0') {
            // 避免出现0x
            ans.push(s)
        }
        for (let i = 1; i < n; ++i) {
            // 避免出现0x.xx
            if (s[0] === '0' && i !== 1) {
                continue
            }
            // 避免出现x.x0
            if (s[n - 1] === '0') {
                continue
            }
            ans.push(s.slice(0, i) + '.' + s.slice(i))
        }
        return ans
    }
}

var s = "(123)"
var ans = ambiguousCoordinates(s)
console.log(ans)