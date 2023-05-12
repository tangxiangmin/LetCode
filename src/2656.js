/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    var max = Math.max(...nums);
    var sum = 0;
    while (k > 0) {
        sum += max;
        max++;
        k--;
    }
    return sum;
};
var nums = [1, 2, 3, 4, 5],
    k = 3;
    nums = [5,5,5], k = 2
var ans = maximizeSum(nums, k);
console.log(ans);
