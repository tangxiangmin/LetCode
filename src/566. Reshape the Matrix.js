/**
 * Created by admin on 2017/5/19.
 */
// 根据给定的row和column重塑矩阵，如果可行返回新的矩阵，如果不可行，返回原矩阵
// 思路：用的是一个二位数组来代替矩阵，因此先根据数量判断是否可行，再做处理
var matrixReshape = function(nums, r, c) {
    var totalLength = 0,
        totalArr = [];
    for(var i = 0, len1 = nums.length; i < len1; i ++){
        totalLength += nums[i].length;
        for (var j = 0, len2 = nums[i].length; j < len2; ++j){
            totalArr.push(nums[i][j])
        }
    }

    if (totalLength !== r*c){
        return nums;
    }

    var res = [];
    for (var i = 0; i < r; ++i){
        var tmp = [];
        for (var j = 0; j < c; ++j){
            tmp.push(totalArr.shift());
        }
        res.push(tmp);
    }
    return res;
};

var test = [[1,2], [3,4]];
console.log(matrixReshape(test, 1, 4));