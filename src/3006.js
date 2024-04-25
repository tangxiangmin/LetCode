/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
function findSubStrIndex(s, sub) {
    const len = sub.length
    const total = s.length
    const arr = []
    for (let i = 0; i <= total - len; ++i) {
        if (s.substring(i, i + len) === sub) {
            arr.push(i)
        }
    }
    return arr
}
// BF
var beautifulIndices = function (s, a, b, k) {

    const a1 = findSubStrIndex(s, a)
    const a2 = findSubStrIndex(s, b)

    const set = new Set()
    for (const i of a1) {
        for (const j of a2) {
            if (Math.abs(i - j) <= k) {
                set.add(i)
            }
        }
    }

    return Array.from(set)
};

// 在a2中找到符合条件的a1，可以用二分
var beautifulIndices = function (s, a, b, k) {
    const a1 = findSubStrIndex(s, a)
    const a2 = findSubStrIndex(s, b)

    const ans = []
    const n = a2.length

    for (const i of a1) {
        // 找到a2中与i最近的数字
        let l = 0
        let r = a2.length - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (a2[mid] <= i) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        // l是第一个比i大的数字，r是第一个比i小的数字
        if ((l < n && a2[l] - i <= k) || (r >= 0 && i - a2[r] <= k)) {
            ans.push(i)
        }
    }
    return ans
};

var s = "isawsquirrelnearmysquirrelhouseohmy", a = "my", b = "squirrel", k = 15
// s = "klxtee", a = "e", b = "klx", k = 2
console.log(beautifulIndices(s, a, b, k))