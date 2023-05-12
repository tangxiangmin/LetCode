/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
    var max = 0;
    var ans = divisors[0];
    for (var i = 0; i < divisors.length; ++i) {
        var count = 0;
        for (var num of nums) {
            if (num % divisors[i] === 0) {
                count++;
            }
        }
        if (max < count) {
            max = count;
            ans = divisors[i];
        } else if (max === count) {
            ans = Math.min(ans, divisors[i]);
        }
    }
    return ans;
};
var nums = [4, 7, 9, 3, 9],
    divisors = [5, 2, 3];
// (nums = [20, 14, 21, 10]), (divisors = [5, 7, 5]);
var nums = [12],
    divisors = [10, 16];
var ans = maxDivScore(nums, divisors);
console.log(ans);
