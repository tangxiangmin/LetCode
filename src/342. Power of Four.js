/**
 * Created by admin on 2017/6/11.
 */
// 给定一个32位带符号的数，判断是否是4的幂次方
// 进阶：能否不使用循环或递归解决

// 思考：这道题看起来简单却没有任何思路，最后使用BF算法，配合Math.pow果断超时，看大神的思路，我擦，什么鬼啊
var isPowerOfFour = function(num) {
    return num > 0 && (num & (num - 1)) == 0 && (num - 1) % 3 == 0;
};

var test = 16;
console.log(isPowerOfFour(test));