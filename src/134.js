/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 题目给定的限定条件包括只存在唯一解
// 思路，从索引值为0处开始计算是否可以满足绕行条件，直至找到一个解答为止，时间复杂度O(n^2)
var canCompleteCircuit = function (gas, cost) {
    var len = gas.length
    // 假设我们从i开始，则最后需要保证总剩余油量sum >=0
    for (var i = 0; i < len; ++i) {
        var res = calc(i)
        if (res) {
            return i
        }
    }
    return -1

    // start表示从某一个索引值开始
    function calc(start) {
        var sum = gas[start]
        for (var i = start; i < len; ++i) {
            var next = i === len - 1 ? 0 : i + 1
            if (sum < cost[i]) {
                return false
            }
            sum -= cost[i] // 先消耗
            sum += gas[next] // 再补充
        }

        for (var i = 0; i < start; ++i) {
            var next = i + 1
            if (sum < cost[i]) {
                return false
            }
            sum -= cost[i]
            sum += gas[next]
        }
        return true
    }
};



var gas = [1, 2, 3, 4, 5],
    cost = [3, 4, 5, 1, 2]

var res = canCompleteCircuit(gas, cost)
console.log(res)