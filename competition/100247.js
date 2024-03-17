/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
// 思路：看起来排个序就可以
var maximumHappinessSum = function (happiness, k) {
    happiness.sort((a, b) => b - a)
    var ans = 0
    for (let i = 0; i < k; ++i) {
        ans += Math.max(0, happiness[i] - i)
    }
    return ans
};
var happiness = [1, 2, 3], k = 2
happiness = [1,1,1,1], k = 2
happiness = [2,3,4,5], k = 1
var ans = maximumHappinessSum(happiness, k)
console.log(ans)