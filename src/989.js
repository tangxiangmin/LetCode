/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    var len = A.length
    var i = len - 1
    A[i] += K
    while (i >= 0) {
        var cur = A[i]
        if (cur >= 10) {
            A[i] = cur % 10
            var left = (cur - A[i]) / 10
            if (i >= 1) {
                A[i - 1] += left
            } else {
                A.unshift(left)
                i++
            }
        }
        i--
    }

    return A
};
var A = [1, 2, 0, 0], K = 34
// A = [2, 7, 4], K = 181
var res = addToArrayForm(A, K)
console.log(res)