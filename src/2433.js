/**
 * @param {number[]} pref
 * @return {number[]}
 */
// 前缀和的差分就是原数组
var findArray = function (pref) {
    const n = pref.length
    const ans = [pref[0]]
    for (let i = 1; i < n; ++i) {
        ans[i] = pref[i] ^ pref[i - 1]
    }
    return ans
};
var pref = [5, 2, 0, 3, 1]
var ans = findArray(pref)
console.log(ans)