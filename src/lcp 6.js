/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
    var ans = 0;
    for (var coin of coins) {
        ans += calc(coin);
    }
    return ans;

    function calc(coin) {
        var time = Math.floor(coin / 2);
        var left = coin % 2;
        return left ? time + 1 : time;
    }
};

var coins = [4, 2, 1];
var ans = minCount(coins);
console.log(ans);
