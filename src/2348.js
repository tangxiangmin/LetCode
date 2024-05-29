/**
 * @param {number[]} nums
 * @return {number}
 */
// 统计连续的0的长度cnt，每个长度cnt可以贡献cnt个子数组
var zeroFilledSubarray = function (nums) {

    let cnt = 0
    let ans = 0
    for (const num of nums) {
        if (num) {
            cnt = 0
        } else {
            cnt++
            ans += cnt
        }
    }
    return ans
};

var nums = [1, 3, 0, 0, 2, 0, 0, 4]
nums = [0, 0, 0, 2, 0, 0]
var ans = zeroFilledSubarray(nums)
console.log(ans)