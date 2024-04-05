/**
 * @param {number[][]} customers
 * @return {number}
 */
// 模拟
var averageWaitingTime = function (customers) {
    let cur = 1 // 当前时间
    let pendding = 0
    for (const [arrival, time] of customers) {
        cur = Math.max(arrival, cur) // 做完之后没有顾客，则排除等待时间
        const finish = cur + time
        pendding += finish - arrival
        cur = finish
    }
    return pendding / customers.length
};

var customers = [[1, 2], [2, 5], [4, 3]]
// customers = [[5, 2], [5, 4], [10, 3], [20, 1]]
var ans = averageWaitingTime(customers)
console.log(ans)