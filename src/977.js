/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    var len = A.length
    var left = 0
    var right = len - 1
    var res = []
    while (left <= right){
        var l2 = A[left] * A[left]
        var r2 = A[right] * A[right];
        if (l2 > r2) {
            res[len - 1] = l2
            left++
        }else {
            res[len - 1] = r2
            right--
        }
        len--
    }
    return res
};
var arr = [-1, 2, 2];
var res = sortedSquares(arr)

