/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    function calc(numBottles, numExchange, emptyBottle) {
        var bottles = numBottles + emptyBottle;
        if (bottles < numExchange) return numBottles;

        var left = Math.floor(bottles / numExchange);

        return numBottles + calc(left, numExchange, bottles % numExchange);
    }

    return calc(numBottles, numExchange, 0);
};

var numBottles = 9,
    numExchange = 3;
(numBottles = 15), (numExchange = 4);

var ans = numWaterBottles(numBottles, numExchange);
console.log(ans);
