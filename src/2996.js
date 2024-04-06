/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    var sum = nums[0];
    for (var i = 1; i < nums.length && nums[i] == nums[i - 1] + 1; i++) {
        sum += nums[i];
    }

    var set = new Set();
    for (const num of nums) {
        set.add(num);
    }
    while (set.has(sum)) { // 至多循环 n 次，例如 1324567
        sum++;
    }
    return sum;
};

var nums = [1, 2, 3, 2, 5]
nums = [3, 4, 5, 1, 12, 14, 13]
nums = [37, 1, 2, 9, 5, 8, 5, 2, 9, 4]
nums = [14, 9, 6, 9, 7, 9, 10, 4, 9, 9, 4, 4]
var ans = missingInteger(nums)
console.log(ans)