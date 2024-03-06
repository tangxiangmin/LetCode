/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    if (!timeSeries.length) {
        return 0
    }
    let ans = 0
    for (let i = 1; i < timeSeries.length; ++i) {
        let cur = timeSeries[i]
        let prev = timeSeries[i - 1]

        ans += Math.min(cur - prev, duration)
    }
    ans += duration;
    return ans
};

var findPoisonedDuration = function (timeSeries, duration) {
    let sum = duration
    for (let i = 1; i < timeSeries.length; ++i) {
        const prev = timeSeries[i - 1]
        const cur = timeSeries[i]
        sum += Math.min(duration, cur - prev)
    }
    return sum
};

var timeSeries = [1, 4], duration = 2
timeSeries = [1, 2], duration = 2
var ans = findPoisonedDuration(timeSeries, duration)
console.log(ans)