/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    var list = num
        .toString()
        .split("")
        .map((ch) => Number(ch));
    list.sort((a, b) => a - b);
    var [a, b, c, d] = list;
    return a * 10 + d + b * 10 + c;
};

var num = 2932
num = 4009
var ans = minimumSum(num)

console.log(ans)