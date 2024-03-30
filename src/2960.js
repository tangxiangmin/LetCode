/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
    const n = batteryPercentages.length
    let ans = 0
    let skip = 0
    for (let i = 0; i < n; ++i) {
        const val = batteryPercentages[i] - i + skip

        if (val > 0) {
            ans++
        }else {
            skip++
        }
    }
    return ans
};

var batteryPercentages = [1, 1, 2, 1, 3]
batteryPercentages = [0,1,2]
var ans = countTestedDevices(batteryPercentages)
console.log(ans)