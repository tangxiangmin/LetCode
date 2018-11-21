// 给定一个数组A和一个K，对于每个元素，可以选择任意 -K <= x <= K的值，并将x于A[i]相加
// 求改变后的数组的元素最小差

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
    if (A.length === 1) {
        return 0
    }
    let min = A[0],
        max = A[0];

    for(let i = 0; i < A.length; ++i) {
        min = Math.min(A[i], min);
        max = Math.max(A[i], max);
    }

    return Math.max(max - min - 2 * K, 0)
};

let res = smallestRangeI([2,7,2], 1)
console.log(res)