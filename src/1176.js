/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function (calories, k, lower, upper) {

    var j = 0
    var sum = 0
    for (; j < k; ++j) {
        sum += calories[j]
    }
    var ans = 0
    for (var i = 0; i < calories.length; ++i) {
        if (sum < lower) {
            ans -= 1
        } else if (sum > upper) {
            ans += 1
        }
        if (j >= calories.length) {
            break
        }
        sum += (calories[j] || 0) - calories[i]
        j++
    }
    return ans
};
var calories = [1, 2, 3, 4, 5], k = 1, lower = 3, upper = 3
calories = [3, 2], k = 2, lower = 0, upper = 1
var res = dietPlanPerformance(calories, k, lower, upper)
console.log(res)