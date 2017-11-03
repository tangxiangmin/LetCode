// 给定1.2.3.4...的数字序列，求第n个数字（注意是数字，不是那个位置上的数）
// 思路：用JS字符串就像作弊一样，但是会超时
// 思路2：数字的长度是有规律的，参考了大佬的算法，先计算范围，再计算对应位置上的数字，最后获得对应的字符
/**
 * @param {number} n
 * @return {number}
*/
// var findNthDigit = function (n) {
//     var str = "";
//     for(var i = 1; i <= n; ++i){
//         str += i;
//     }

//     return str[n-1] - 0;
// };

var findNthDigit = function (n) {
    var type = 1;
    var num = 9;

    while (n > num * type) {
        n -= num * type;
        type++;
        num *= 10;
    }
    // 该type位数的第几个值
    var indexSubRange = Math.floor((n-1)/type);
    // 数值
    var indexNum = (n-1)%type;

    // 求出那个值
    var total = Math.floor(Math.pow(10, type - 1) + indexSubRange);
    return total.toString().charAt(indexNum) - 0;
}

console.log(findNthDigit(12))