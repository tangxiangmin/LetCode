// 给定一个数组和索引值n,求饶n旋转后的数组
// [1,2,3,4,5,6,7], k = 3
// [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        arr[(i + k) % nums.length] = nums[i];
    }
    
    for (var i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }

    // nums = nums.concat(left);
};
// rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([1,2], 2);
