/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
// 设s[i]可以从t[j]中转换，求最大长度
// 最大长度则每个字符的改动预算尽可能小
// 可以先BF看看
var equalSubstring = function (s, t, maxCost) {

    let ans = 0
    for (let i = 0; i < s.length; ++i) {
        for (let j = 0; j < t.length; ++j) {
            dfs(i, j, maxCost)
        }
    }
    return ans

    function dfs(i, j, k) {
        let n = 0
        while (i < s.length && j < t.length) {
            k -= clac(s[i], t[j])
            if (k < 0) {
                break
            }
            i++
            j++
            n++

            ans = Math.max(ans, n)
        }
    }

    function clac(a, b) {
        return Math.abs(a.charCodeAt(0) - b.charCodeAt(0))
    }
};
// 不好意思，看错题了，s长度等于t，且只能是s[i]到t[i]的转换
var equalSubstring = function (s, t, maxCost) {
    const n = s.length
    const arr = []
    for (let i = 0; i < n; ++i) {
        arr[i] = clac(s[i], t[i])
    }
    // console.log(arr)
    let sum = 0
    let i = 0
    let l = 0
    let ans = 0
    while (i < n) {
        // 先向右伸长，再将左边的缩短
        while (i < n && sum <= maxCost) {
            sum += arr[i]
            if (sum <= maxCost) {
                ans = Math.max(ans, i - l + 1)
            }
            i++
        }

        while (sum > maxCost) {
            sum -= arr[l]
            l++
        }

    }
    return ans

    function clac(a, b) {
        return Math.abs(a.charCodeAt(0) - b.charCodeAt(0))
    }
}
// 另外一种滑动窗口，每轮循环的时候移动左边的，滑动更简单
var equalSubstring = function (s, t, maxCost) {
    const n = s.length
    const arr = []
    for (let i = 0; i < n; ++i) {
        arr[i] = clac(s[i], t[i])
    }
    // console.log(arr)
    let sum = 0
    let i = 0
    let l = 0
    let ans = 0
    while (i < n) {
        sum += arr[i]
        while (sum > maxCost) {
            sum -= arr[l]
            l++
        }
        ans = Math.max(ans, i - l + 1)
        i++
    }
    return ans

    function clac(a, b) {
        return Math.abs(a.charCodeAt(0) - b.charCodeAt(0))
    }
}
var s = "abcd", t = "bcdf", maxCost = 3
// s = "abcd", t = "cdef", maxCost = 3
// s = "abcd", t = "acde", maxCost = 0
// s = "abcd", t = "cdef", maxCost = 1
s = "krpgjbjjznpzdfy", t = "nxargkbydxmsgby", maxCost = 14
var ans = equalSubstring(s, t, maxCost)
console.log(ans)