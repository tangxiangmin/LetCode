/**
 * @param {number[]} nums
 * @return {number}
 */
// 滑动窗口，左端点与窗口内每一个元素按&运算
var longestNiceSubarray = function (nums) {
    let ans = 0;
    let left = 0;
    let or_ = 0;
    for (let right = 0; right < nums.length; right++) {
        const x = nums[right];
        while (or_ & x) {
            or_ ^= nums[left];
            left++;
        }
        or_ |= x;
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};

var nums = [1, 3, 8, 48, 10]
nums = [3, 1, 5, 11, 13]
// nums = [1090, 16384, 33, 217313281] //3
nums = [904163577, 321202512, 470948612, 490925389, 550193477, 87742556, 151890632, 655280661, 4, 263168, 32, 573703555, 886743681, 937599702, 120293650, 725712231, 257119393]
var ans = longestNiceSubarray(nums)
console.log(ans)