/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// 参考 https://blog.csdn.net/qq_17550379/article/details/80540430 使用滑动窗口
// 可以建立两个指针，通过累加两个指针的区间内的值和s比较，就可以在O(n)级别的时间内得到结果

var minSubArrayLen = function(s, nums) {
    var l = 0;
    var r = 0;
    var sum = 0;
    var len = nums.length;
    var min = Infinity;
    while (l < len) {
        if (r < len && sum < s) {
            sum += nums[r];
            r++;
        } else {
            sum -= nums[l];
            l++;
        }
        if(sum >= s){
            min = Math.min(min, r - l)
        }
    }
    return min === Infinity ? 0 : min
};

var s = 4, nums = [1, 4, 4];
var res = minSubArrayLen(s, nums);
console.log(res);

