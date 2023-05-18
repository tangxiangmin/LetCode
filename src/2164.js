/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    var odd = [];
    var even = [];
    for (var i = 0; i < nums.length; ++i) {
        if (i % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    odd.sort((a, b) => b - a);
    even.sort((a, b) => a - b);
    var ans = [];
    for (var i = 0; i < even.length; ++i) {
        ans.push(even[i]);
        if (i < odd.length) {
            ans.push(odd[i]);
        }
    }
    return ans;
};

var nums = [4, 1, 2, 3];
nums = [2,1]
var ans = sortEvenOdd(nums);
console.log(ans);
