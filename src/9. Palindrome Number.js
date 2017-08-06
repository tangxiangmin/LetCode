/**
 * Created by admin on 2017/6/15.
 */
// 判断一个整数是否是回文数字
// 要求空间复杂度O(1)
// 思路，将数字反转
var isPalindrome = function(x) {
    var a = 0, b = x;

    while(b > 0){
        a = a*10 + b%10;
        b = Math.floor(b/10);
    }

    return a === x;
};