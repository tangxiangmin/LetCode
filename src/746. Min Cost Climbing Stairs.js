// 爬梯子，每阶梯子都有对应的花费，每次可以1步或者2步，可以从0或1开始，求最小的花费

// 思路：动态规划
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var f1 = 0,
        f2 = 0;
    for (var i = 0; i < cost.length; ++i){
        var f0 = cost[i] + Math.min(f1, f2);
        f2 = f1;
        f1 = f0;
    }
    return Math.min(f1, f2)
};