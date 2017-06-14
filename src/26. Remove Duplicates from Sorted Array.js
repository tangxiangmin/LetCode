/**
 * Created by admin on 2017/6/14.
 */
// 删除已排序数组中的重复数字，返回新的长度
// 要求不使用额外的内存
// 思路：计算有几个重复的数字，然后从原数组长度减去即可(发现检测的时候是需要去重的数组，蛋疼)
var removeDuplicates = function(nums) {
    var count = 0,
        len = nums.length;
    for (var i = 1; i < len; ++i){
        if(nums[i] === nums[i-1]){
            count++;
        }
    }
    return len - count
};

var test = [1,1,2];
console.log(removeDuplicates(test));