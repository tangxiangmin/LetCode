/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    if(!timeSeries.length){
        return 0
    }
    let ans = 0
    for(let i = 1; i < timeSeries.length; ++i) {
        let cur = timeSeries[i]
        let prev = timeSeries[i-1]

        ans += Math.min(cur - prev, duration)
    }
    ans += duration;
    return ans
};