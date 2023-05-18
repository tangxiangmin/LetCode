/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    var max = Math.max(...nums);
    var min = Math.min(...nums);
    var ans = 0;
    for (var num of nums) {
        if (num !== max && num !== min) {
            ans++;
        }
    }
    return ans;
};

var nums = [11, 7, 2, 15];
var ans = countElements(nums);
console.log(ans);
