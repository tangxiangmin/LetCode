/**
 * Created by admin on 2017/4/17.
 */
// 判断一个数是否是3的幂
// 能够不使用循环或递归
var isPowerOfThree = function(n) {
    while(n){
        if (n <= 1){
            return n === 1
        }
        n = n/3;
    }
    return false;
};