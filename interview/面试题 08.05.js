/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
// 递归思路，A*B等于B个A相加，递归就是 f(A, B) = A + f(A, B-1)，需要额外处理一下B为负数的情况 
var multiply = function (A, B) {
    if (B == 0) {
        return 0;
    }
    if (B > 0) {
        return (A + multiply(A, B - 1));
    }
    return -(A + multiply(A, B + 1));
};