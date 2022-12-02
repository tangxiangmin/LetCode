/**
 * @param {number} num
 * @return {boolean}
 */
// 主要检查末尾是否有0就可以了
var isSameAfterReversals = function (num) {
    if(num === 0) return true
    return num % 10 !== 0;
};

var num = 526;
var ans = isSameAfterReversals(num);
console.log(ans);
