// 给定一个数组和索引值n,求饶n旋转后的数组
// [1,2,3,4,5,6,7], k = 3
// [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length

    if (k >= len){
        nums.reverse()
    }else if(k > 0) {
        var left = nums.splice(0, k+1);
        nums = nums.concat(left)
    }
    console.log(nums);

 
    // nums = nums.concat(left);
};
// rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([1,2], 2);
