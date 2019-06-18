/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length;
    if (len === 0) {
        return 0;
    }
    var k = 0;
    var target = undefined;
    for (var i = 0; i < len; ++i) {
        if (nums[i] === target) {
            // i++
        }else {
            target = nums[i];
            nums[k] = target;
            k++;
        }
    }
    return k;
};

var arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// arr = [10,10,20]
arr = [1,2,3]
var res = removeDuplicates(arr);
console.log(res);
