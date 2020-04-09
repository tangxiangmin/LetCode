/**
 * @param {number[]} A
 * @return {number}
 */
// 思路：求等差子数组的个数，子数组的最小长度为3
// 当等差数列每增加一个元素时，比之前的的数量多1
var numberOfArithmeticSlices = function (A) {
    if (A.length < 3) return 0;
    var res = 0;
    var add = 0;
    for (var i = 2; i < A.length; i++) {
        if (A[i - 1] - A[i] == A[i - 2] - A[i - 1]) {
            res += ++add;
        } else {
            add = 0;
        }
    }

    return res;
};