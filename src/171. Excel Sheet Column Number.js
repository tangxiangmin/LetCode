
// 给定Excel的列号，返回对应的数字列号（Excel原来是这么标行号的...）
// A -> 1
// B -> 2
// ...
// Z ->  26
// AA -> 27
// AB -> 28
// BA -> 53
// 思路：就是编码为A-Z的26进制转10进制
var titleToNumber = function(s) {
    var len = s.length,
        sum = 0;
    var base = 'A'.charCodeAt(0) - 1;

    for (var i = 0, len = s.length; i < len; ++i){
        var gap = s.charCodeAt(i) - base;
        sum += Math.pow(26, len-1-i)*gap;
    }
    return sum;
};
// var s = 'AA';
var s = "BA";
console.log(titleToNumber(s));