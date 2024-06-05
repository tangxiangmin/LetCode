/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function (n, discount, products, prices) {
    this.n = n
    this.discount = discount


    const priceMap = new Map()
    const len = products.length
    for (let i = 0; i < len; ++i) {
        priceMap.set(products[i], prices[i])
    }
    this.priceMap = priceMap

    this.cnt = 0
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function (product, amount) {
    let sum = 0
    for (let i = 0; i < product.length; ++i) {
        const price= this.priceMap.get(product[i])
        sum += price * amount[i]
    }
    this.cnt++

    if (this.cnt === this.n) {
        this.cnt = 0
        sum -= (this.discount * sum) / 100
    }

    return sum
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */

const { runClass } = require('../libs/klass')

var actions = ["Cashier", "getBill", "getBill", "getBill", "getBill", "getBill", "getBill", "getBill"], params = [
    [3, 50, [1, 2, 3, 4, 5, 6, 7], [100, 200, 300, 400, 300, 200, 100]],
    [[1, 2], [1, 2]],
    [[3, 7], [10, 10]],
    [[1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 1, 1, 1, 1]],
    [[4], [10]], [[7, 3], [10, 10]],
    [[7, 5, 3, 1, 6, 4, 2], [10, 10, 10, 9, 9, 9, 7]],
    [[2, 3, 5], [5, 3, 2]]]

runClass(Cashier, actions, params)