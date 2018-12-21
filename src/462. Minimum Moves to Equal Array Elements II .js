/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a,b)=>a-b)
    let midIndex = Math.floor(nums.length /2)
    let mid = nums[midIndex]

    let ans = 0
    for(let i = 0; i < nums.length; ++i){
        ans += Math.abs(nums[i] - mid)
    }
    return ans
};
