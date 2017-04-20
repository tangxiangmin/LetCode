/**
 * Created by admin on 2017/4/20.
 */
// 判断一个数是不是2的幂
var isPowerOfTwo = function(n) {
    while(n){
        if (n <= 1){
            return n === 1
        }
        n = n/2;
    }
    return false;
};