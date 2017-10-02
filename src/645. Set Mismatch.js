/**
 * Created by admin on 2017/10/2.
 */
// 1到n的集合，找到第一个重复的值，以及缺失的值
var findErrorNums = function(nums) {

    var tmp = [],
        res = []; // res[0] = repetition, res[1] = missing

    for (var i = 0; i < nums.length; ++i){
        var val = nums[i] - 1;
        if (typeof tmp[val] === "undefined"){
            tmp[val] = 0;
        }else {
            res[0] = val+1;
        }
        tmp[val]++;
    }
    for(var i = 0; i < nums.length; ++i){
        if (typeof tmp[i] === "undefined"){
            res[1] = i+1;
        }
    }

    return res;
};

var a = [1,1];

console.log(findErrorNums(a));