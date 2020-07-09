/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
// 预备知识：[汉明距离](https://zh.wikipedia.org/wiki/汉明距离)
// 思路：异或之后1的个数
var convertInteger = function(A, B) {
    var res = A ^ B 
    var count = 0
    while (res !== 0) {
        res &= (res - 1);
        count++;
    }
    return count++
};