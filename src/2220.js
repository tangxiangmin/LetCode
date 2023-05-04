/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    var differ = start ^ goal;
    var ans = 0;
    while (differ != 0) {
        ans += differ & 1;
        differ >>= 1;
    }
    return ans;
};

var start = 10,
    goal = 7;
var ans = minBitFlips(start, goal);
console.log(ans);
