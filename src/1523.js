/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    if (low === 0) {
        return Math.ceil(high / 2);
    }
    var diff = low % 2 ? 1 : 0;
    return countOdds(0, high) - countOdds(0, low) + diff;
};

var low = 3,
    high = 7; // 0,1,2,3,4,5,6,7

    low = 8, high = 10
var ans = countOdds(low, high);
console.log(ans);
