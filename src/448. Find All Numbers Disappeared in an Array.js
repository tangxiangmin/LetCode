/**
 * Created by admin on 2017/9/26.
 */
// 长度为n的数组，其元素值在1-n内，有的出现了2次，有的出现1次，找到剩下没有出现的数字
// 要求不使用额外空间（保存返回值的不算），O(n)
    // 思路:看起来很简单，最后还是使用了大佬的思路，通过元素值与索引的关系对元素使用负数标记，剩下为正数的元素则表示对应的索引位置未出现
var findDisappearedNumbers = function(nums) {

    var len = nums.length;
    for(var i = 0; i < len; ++i){
        var m = Math.abs(nums[i])-1; // 获取索引
        if (nums[m]>0){
            nums[m] = -nums[m];
        }
    }

    var res = [];
    for (var i = 0; i< len; ++i){
        if (nums[i]>0){
            res.push(i+1); // 这里是从1开始的
        }
    }
    return res
};

var test = [4,3,2,7,8,2,3,1];

console.log(findDisappearedNumbers(test));