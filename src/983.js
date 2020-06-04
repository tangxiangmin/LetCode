/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
// 思路：动态规划
// 对于截止某一天而言，有四种状态
// 之前购票有剩余天数，不花钱；购买costs列表的三种票数，
// 则截止某一天
// dp[i][j]表示第i天买j天票的价格

// 思路：BF枚举所有购票策略
var mincostTickets = function (days, costs) {
    return calc(days, 0);

    // 求days天需要花费的钱
    function calc(days, sum) {
        if (!days || !days.length) return sum;
        var cur = days[0];

        var day1 = days.slice(1);
        var day2;
        var day3;
        for (var i = 1; i < days.length; ++i) {
            var day = days[i];
            if (day - cur >= 7 && !day2) {
                day2 = days.slice(i);
            }
            if (day - cur >= 30) {
                day3 = days.slice(i);
                break;
            }
        }
        var min = Math.min(
            calc(day1, sum + costs[0]),
            calc(day2, sum + costs[1]),
            calc(day3, sum + costs[2])
        );

        return min;
    }
};

// 思路2，通过游标减少数组操作带来的耗时，但是在部分用例下仍旧会超时
var mincostTickets = function (days, costs) {
    var len = days.length;
    return calc(0, 0);

    function calc(start, sum) {
        if (start >= len || start === undefined) return sum;
        var cur = days[start];

        var day1 = start + 1;
        var day2;
        var day3;
        for (var i = start + 1; i < days.length; ++i) {
            var day = days[i];
            if (day - cur >= 7 && !day2) {
                day2 = i;
            }
            if (day - cur >= 30) {
                day3 = i;
                break;
            }
        }
        var min = Math.min(
            calc(day1, sum + costs[0]),
            calc(day2, sum + costs[1]),
            calc(day3, sum + costs[2])
        );

        return min;
    }
};
// 思路3：前面枚举了在每一天购买所有票价时最后花费的总价钱，包含很多重复计算，比如倒数第二天购买costs[0]就包含多种情况
// 因此使用dp[i][j]表示在第i天购买第j种票时后面还需要花费的价格，则最终的答案为min(dp[0][0],dp[0][1],dp[0][2])
// 上面这个式子编码比较麻烦，可以直接使用dp[i]表示从第i天到年末的花费，则dp[i] = min{cost[j] + dp[i+j]} 其中为(1，7， 30)
var mincostTickets = function (days, costs) {
    var dp = new Array(366);
  
    var dayMap = {}
    for(var day of days){
        dayMap[day] = true
    }
    return calc(1);

    function calc(i) {
        if(i > 365) return 0

        if(dp[i]) return dp[i]
        if(dayMap[i]) {
            dp[i] = Math.min(calc(i + 1) + costs[0], calc(i + 7) + costs[1], calc(i + 30) + costs[2]);
        }else {
            dp[i] = calc(i + 1);
        }
        return dp[i]
    }
};
var days = [1, 4, 6, 7, 8, 20],
    costs = [2, 7, 15];
// (days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]), (costs = [2, 7, 15]);
days = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,24,25,27,28,29,30,31,34,37,38,39,41,43,44,45,47,48,49,54,57,60,62,63,66,69,70,72,74,76,78,80,81,82,83,84,85,88,89,91,93,94,97,99]
costs = [9,38,134]
var res = mincostTickets(days, costs);
console.log(res);
