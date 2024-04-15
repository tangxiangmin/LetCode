/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
    let result = -Infinity;
    let arr = (num >>> 0).toString(2).split(0);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let nowLen = arr[i].length;
        let nextLen = arr[i + 1] ? arr[i + 1].length : 0;
        result = Math.max(result, nowLen + nextLen + 1);
    }
    return result > 32 ? 32 : result;
};

var num = 1775
num = 7
num = 2147483647
num = -4
num = 4
// num = 45725232 // 5
var ans = reverseBits(num)
console.log(ans)