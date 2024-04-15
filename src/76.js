/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = {}
    for (const ch of t) {
        if (!need[ch]) {
            need[ch] = 0
        }
        need[ch]++
    }

    const map = {}

    let l = 0
    let r = 0 // 范围为[l,r)
    let cnt = 0
    const size = Object.keys(need).length
    let start = 0, len = Infinity
    while (r < s.length) {
        const ch = s[r]
        r++

        if (need[ch]) {
            if (!map[ch]) {
                map[ch] = 0
            }
            map[ch]++
            if (need[ch] === map[ch]) {
                cnt++
            }
        }
        while (cnt === size) {
            if (len > r - l) {
                start = l
                len = r - l
            }
            let d = s[l]
            l++
            if (need[d]) {
                if (need[d] === map[d]) {
                    cnt--
                }
                map[d]--
            }

        }
    }
    return len === Infinity ? '' : s.substring(start, start + len)
};

var s = "ADOBECODEBANC", t = "ABC"
s = "a", t = "a"
s = "a", t = "aa"
var ans = minWindow(s, t)
console.log(ans)