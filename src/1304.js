/**
 * @param {number} n
 * @return {number[]}
 */
// 从0开始左右数相加
var sumZero = function(n) {
    var ans = [];
    if (n % 2) ans.push(0);

    var mid = Math.floor(n / 2);
    for (let i = 1; i <= mid; ++i) {
        ans.push(i);
        ans.push(-i);
    }
    return ans;
};

console.log(sumZero(1));
