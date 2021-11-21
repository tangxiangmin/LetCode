/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canBeIncreasing = function (nums) {
  const stack = []
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] >= nums[i]) {
      stack.pop()
    }
    stack.push(nums[i])
  }

  const stack2 = []
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack2.length && stack2[stack2.length - 1] <= nums[i]) {
      stack2.pop()
    }
    stack2.push(nums[i])
  }

  return nums.length - stack.length <= 1 || nums.length - stack2.length <= 1
}

var nums = [100, 21, 100];
nums = [2, 3, 1, 2];
nums = [1, 2, 10, 5, 7];
nums = [1, 1, 1];
var ans = canBeIncreasing(nums);
console.log(ans);
