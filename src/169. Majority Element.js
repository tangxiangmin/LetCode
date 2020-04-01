/**
 * Created by admin on 2017/4/11.
 */
// 找到数组中最重要的数（出现次数超过数组长度一半）
// 后面的题都没有给测试案例，自己也懒得写了，直接丢上去运行了
// 貌似不能用for of循环

var majorityElement = function(nums) {
    var tmp = {},
        max = 0,
        res = nums[0];
    for (var i = 0, len = nums.length; i < len; ++i){
        var val = nums[i];
        tmp[val]? tmp[val]++:tmp[val]=1;
    }
    for (var key in tmp){
        var val = tmp[key];
        if (max < val){
            max = val;
            res = key;
        }
    }
    return res - 0;
};
var test = [3,3,4];
console.log(majorityElement(test));

