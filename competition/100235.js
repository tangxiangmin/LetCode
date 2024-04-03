/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
    let ans = numBottles
    while (numBottles >= numExchange) {
        numBottles -= numExchange
        numExchange += 1
        numBottles++
        ans++
    }
    return ans
};
var numBottles = 13, numExchange = 6
// numBottles = 10, numExchange = 3
var ans = maxBottlesDrunk(numBottles, numExchange)
console.log(ans)