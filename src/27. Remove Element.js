/**
 * Created by admin on 2017/6/11.
 */
// 给定一个数组和一个值，移除数组中所有值然后返回数组的剩余长度
// 直接在原数组上修改，不能使用新的内存
// 老实说这道题的题意不是很明白，明明要求返回长度但是测试结果返回数组
var removeElement = function(nums, val) {
    var start = 0,
        len = nums.length;

    for (var i = 0; i < len; ++i){
        if (nums[i] !== val){
            nums[start++] = nums[i];
        }
    }

    return start;
};

var test = [3,2,2,3],
    val = 3;

console.log(removeElement(test, 3));