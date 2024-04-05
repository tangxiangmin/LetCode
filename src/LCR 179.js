/**
 * @param {number[]} price
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (price, target) {
    const n = price.length
    const map = {}
    for (let i = 0; i < n; ++i) {
        if (map[price[i]]) {
            return [price[i], target - price[i]]
        }
        map[target - price[i]] = true
    }
    return []

};