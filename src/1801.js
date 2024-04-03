/**
 * @param {number[][]} orders
 * @return {number}
 */

const { MinPriorityQueue, MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// 思路，分别使用两个堆来保存buy和sell的订单列表，这样可以快速找出需要合并的订单
var getNumberOfBacklogOrders = function (orders) {

    const sell = new MinPriorityQueue()
    const buy = new MaxPriorityQueue()

    const sellMap = {}
    const buyMap = {}

    for (const order of orders) {
        const [price, a, type] = order
        let amount = order[1]
        if (type === 0) {
            // buy
            while (!sell.isEmpty()) {
                const { element } = sell.front()
                if (element <= price) {
                    const diff = Math.min(sellMap[element], amount)
                    amount -= diff
                    sellMap[element] -= diff
                    if (sellMap[element] === 0) {
                        sell.dequeue()
                    }
                    if (amount === 0) break
                } else {
                    break
                }
            }
            if (amount > 0) {
                buy.enqueue(price, price)
                if (!buyMap[price]) {
                    buyMap[price] = 0
                }
                buyMap[price] += amount
            }

        } else {
            // sell
            while (!buy.isEmpty()) {
                const { element } = buy.front()
                if (element >= price) {
                    const diff = Math.min(buyMap[element], amount)
                    amount -= diff
                    buyMap[element] -= diff
                    if (buyMap[element] === 0) {
                        buy.dequeue()
                    }
                    if (amount === 0) break
                } else {
                    break
                }
            }
            if (amount > 0) {
                sell.enqueue(price, price)
                if (!sellMap[price]) {
                    sellMap[price] = 0
                }
                sellMap[price] += amount
            }
        }
    }


    let ans = 0
    for (const p of Object.values(sellMap)) {
        if (p > 0) {
            ans += p
        }
    }
    for (const p of Object.values(buyMap)) {
        if (p > 0) {
            ans += p
        }
    }

    return ans % 1000000007

};

var orders = [[10, 5, 0], [15, 2, 1], [25, 1, 1], [30, 4, 0]]
orders = [[7, 1000000000, 1], [15, 3, 0], [5, 999999995, 0], [5, 1, 1]]
orders = [[26, 7, 0], [16, 1, 1], [14, 20, 0], [23, 15, 1], [24, 26, 0], [19, 4, 1], [1, 1, 0]]
var ans = getNumberOfBacklogOrders(orders)
console.log(ans)
