// 找到数组的pivot的索引值，其左边和右边元素之和相等
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((acc, item) => {
        return acc + item;
    }, 0);
    
    for (let i = 0; i < nums.length; ++i) {
        if (leftSum === rightSum - nums[i]) {
            return i;
        } else {
            leftSum += nums[i];
            rightSum -= nums[i];
        }
    }
    return -1;
};
let res = pivotIndex([1, 7, 3, 6, 5, 6]);
console.log(res);
