// 给定一个数字，将其转换成excel的列数
// 1 -> A
// 2 -> B
// 3 -> C
// ...
// 26 -> Z
// 27 -> AA
// 28 -> AB
// 思路： 26进制表示法
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var res = "",
        hash = {};
    for (var i = 65, j = 0; i <= 90; ++i, ++j) {
        hash[j] = String.fromCharCode(i);
    }
 
    while (n) {
        var digit = (n - 1) % 26;
        res = hash[digit] + res;
        n = Math.floor((n - 1) / 26);
    }
    
    return res;
};

var res = convertToTitle(1);
console.log(res);
