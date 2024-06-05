/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {

    const arr = []

    for (let i = lo; i <= hi; ++i) {
        arr.push({ i, p: calc(i) })
    }

    arr.sort((a, b) => {
        if (a.p === b.p) {
            return a.i - b.i
        }
        return a.p - b.p
    })

    return arr[k - 1].i
    function calc(x) {
        let cnt = 0
        while (x !== 1) {
            if (x % 2 === 0) {
                x /= 2
            } else {
                x = 3 * x + 1
            }
            cnt++
        }
        return cnt

    }
};

var lo = 12, hi = 15, k = 2
var ans = getKth(lo, hi, k)
console.log(ans)