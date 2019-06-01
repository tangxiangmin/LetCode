/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity, 
    imax = 1, imin = 1; // 保存最大和最小值
    for(let i = 0; i < nums.length; ++i){
        // 如果数组的数是负数，那么会导致最大的变最小的，最小的变最大的。
        // 因此交换两个的值
        if(nums[i] < 0){
            let tmp = imax
            imax = imin
            imin = tmp
        }
        imax = Math.max(imax*nums[i], nums[i])
        imin = Math.min(imin*nums[i], nums[i])

        max = Math.max(max, imax)
    }
    return max
};

var res = maxProduct([-2, 0, -1]);
console.log(res)
