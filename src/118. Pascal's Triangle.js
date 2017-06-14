/**
 * Created by admin on 2017/6/13.
 */
// 给定行数，生成帕斯卡三角形（杨辉三角）
// 思路：循环或递归
var generate = function(numRows) {

    let res = [];
    
    function create(arr) {
        var len = arr.length;

        if (len === 1){
            return [1, 1];
        }
        // 第一位是1
        var res = [1];
        for (var i = 1; i < len; ++i){
            res.push(arr[i-1] + arr[i]);
        }
        // 最后一位也是1
        res.push(1);
        return res;
    }

    if (numRows > 0){
        res.push([1]);
        for (var i = 1; i < numRows; ++i){

            var arr = create(res[i-1]);
            res.push(arr);
        }
    }

    return res;
};

var test = 5;
console.log(generate(test));