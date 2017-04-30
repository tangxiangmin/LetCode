/**
 * Created by admin on 2017/4/30.
 */
// 爬楼梯，一次1步或2步，给定n阶楼梯要爬多少次

// 思路
// n = 1, ways = 1
// n = 2, ways = 2 (11, 2)
// n = 3, ways = 3 (111,12,21)
// n = 4, ways = 5 (1111,112,121,211,22)
// 可见类似于斐波拉契数列
// 问题：使用递归会超时
var climbStairs = function(n) {
    if (n === 1){
        return 1;
    }
    if (n === 2){
        return 2;
    }

    var resArr = [];
    resArr[0] = 1;
    resArr[1] = 2;
    for (var i = 2; i < n; ++i){
        resArr[i] = resArr[i-1] + resArr[i-2];
    }
    return resArr[n-1];
};