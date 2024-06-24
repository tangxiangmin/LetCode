/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
// 判断子序列的数量是否等于2^k
var hasAllCodes = function (s, k) {
    let len = s.length;

    let left = 0;
    let right = k;
    let mySet = new Set();

    while (right <= len) {
        mySet.add(s.substring(left, right));
        left++;
        right++;
    }

    return mySet.size == Math.pow(2, k);

};
