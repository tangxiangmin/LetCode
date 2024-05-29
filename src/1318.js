/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {

    a = a.toString(2)
    b = b.toString(2)
    c = c.toString(2)

    let i = a.length - 1
    let j = b.length - 1
    let k = c.length - 1

    let max = Math.max(i, j, k)

    let cnt = 0
    while (max >= 0) {
        const x = i >= 0 ? a[i] : '0'
        const y = j >= 0 ? b[j] : '0'
        const z = k >= 0 ? c[k] : '0'
        if (z === '0') {
            if (x == '1') {
                cnt++
            }
            if (y === '1') {
                cnt++
            }
        } else {
            if (x == '0' && y == '0') {
                cnt++
            }
        }
        i--
        j--
        k--
        max--
    }

    return cnt
};
var a = 2, b = 6, c = 5
a = 8, b = 3, c = 5
var ans = minFlips(a, b, c)
console.log(ans)