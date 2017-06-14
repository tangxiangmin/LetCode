/**
 * Created by admin on 2017/6/14.
 */
// 求n!末尾有多少个0
// 思路：0是2与5相乘的结果
var trailingZeroes = function(n) {
    var res = 0;
    while(n){
        n = Math.floor(n/5);
        res += n;
    }
    return res;
};

