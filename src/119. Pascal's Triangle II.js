/**
 * Created by admin on 2017/6/14.
 */
// 帕斯卡三角形，给定数字返回对应那行的数据
// [
//     [1],
//     [1,1],
//     [1,2,1],
//     [1,3,3,1],
//     [1,4,6,4,1]
// ]
// 思路：118采用的是循环，这里采用递归嘛
var getRow = function(rowIndex) {
    if(rowIndex === 0){
        return [1];
    }else if (rowIndex === 1){
        return [1,1];
    }

    let res = [1];

    let prev = getRow(rowIndex-1);
    for (var i = 1, len = prev.length; i < len; ++i){
        res.push(prev[i-1] + prev[i]);
    }
    res.push(1);
    return res;
};

var test = 3;
console.log(getRow(test));