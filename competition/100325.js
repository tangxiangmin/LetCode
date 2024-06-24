/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {

    let cur = 0
    let dir = 1
    while (k > 0) {
        cur += dir
        if (cur === n - 1) {
            dir = -1
        } else if (cur === 0) {
            dir = 1
        }
        k--
    }
    return cur
};
var n = 3, k = 5
n = 5, k = 6
var ans = numberOfChild(n, k)
console.log(ans)