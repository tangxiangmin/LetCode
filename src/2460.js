/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    var indexs = [];
    for (var i = 0; i < nums.length; ++i) {
        var cur = nums[i];
        if (i < nums.length) {
            var next = nums[i + 1];
            if (cur === next) {
                nums[i] = cur * 2;
                nums[i + 1] = 0;
            }
        }

        if (nums[i] != 0 && indexs.length) {
            var idx = indexs.shift();
            nums[idx] = nums[i];
            nums[i] = 0;
            indexs.push(i);
        } else if (nums[i] === 0) {
            indexs.push(i);
        }
    }
    return nums;
};

var nums = [1, 2, 2, 1, 1, 0];
nums = [0, 1];
var ans = applyOperations(nums);
console.log(ans);
