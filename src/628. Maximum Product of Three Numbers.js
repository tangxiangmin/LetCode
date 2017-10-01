/**
 * Created by admin on 2017/10/1.
 */
// 给定一个数组，找到三个数乘积最大的值
    // 思路：先排序,注意负数
var maximumProduct = function(nums) {
    var len = nums.length;
    nums.sort((a,b)=>a-b);

    var last = nums[len-1]*nums[len-2]*nums[len-3];

    if (nums[0] < 0){
        if (nums[1] < 0){
            return Math.max(nums[0]*nums[1]*nums[len-1], last);
        }
    }
    return last;

};

var a = [-4,-3,-2,-1,60];
console.log(maximumProduct(a));