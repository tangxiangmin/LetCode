/**
 * Created by admin on 2017/5/20.
 */
// 计算一个数用二进制表示有多少个1
var hammingWeight = function(n) {
    n = n.toString(2);
    var count = 0;
    for (var i = 0, len = n.length; i < len; ++i){
        if (n[i] == 1){
            count++;
        }
    }
    return count;
};

console.log(hammingWeight(11));