/**
 * @param {number[]} cost
 * @return {number}
 */
// 思路，从大到小排序，每第三个糖可以免费获得
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a);
    var sum = 0;
    for (var i = 0; i < cost.length; i += 3) {
        sum += cost[i];
        if (i + 1 < cost.length) {
            sum += cost[i + 1];
        }
    }
    return sum;
};

var cost = [1, 2, 3];
cost = [6, 5, 7, 9, 2, 2];
cost = [5];
var ans = minimumCost(cost);
console.log(ans);
