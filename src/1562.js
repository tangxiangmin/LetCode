/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
    const n = arr.length
    const s = new Array(n).fill('0')
    for (const v of arr) {
        s[v] = '1'
        let c = 1
        let i = v - 1
        while (i >= 0 && s[i] === '1') {
            i--
            c++
        }
        i = v + 1
        while (i < n && s[i] === '1') {
            i++
            c++
        }
        if (c === m) return v
    }
    return -1
};
var arr = [3, 5, 1, 2, 4], m = 1
var ans = findLatestStep(arr, m)
console.log(ans)