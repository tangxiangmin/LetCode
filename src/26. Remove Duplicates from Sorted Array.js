/**
 * Created by admin on 2017/6/14.
 */
// 删除已排序数组中的重复数字，返回新的长度
// 要求不使用额外的内存
// 思路：计算有几个重复的数字，然后从原数组长度减去即可(发现检测的时候是需要去重的数组，蛋疼)
//      突然发现题目中要求新长度之外的数据不用在意，这样直接覆盖原数组内容就可以了。

var removeDuplicates = function(nums) {
    var count = 0,
        len = nums.length;
    for (var i = 1; i < len; ++i){
        if(nums[i] !== nums[i-1]){
            nums[++count] = nums[i];
        }
    }
    return count + 1;
};

var test = [1,1,2];
console.log(removeDuplicates(test));