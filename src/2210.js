/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
    var ans = 0;
    var prev = -1;
    for (var i = 1; i < nums.length - 1; ++i) {
        var prev = nums[i - 1]
        while(nums[i] == nums[i+1]) {
            i++
        }
        if(i >= nums.length) {
            break
        }
        var cur = nums[i]
        var next = nums[i + 1]
        if(cur > prev && cur > next) {
            ans++
        }else if(cur < prev && cur < next){
            ans++
        }
    }
    return ans
};

var nums = [2, 4, 1, 1, 6, 5];

var nums = [6,6,5,5,4,1]
var ans = countHillValley(nums);

console.log(ans);
