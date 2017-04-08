/**
 * Created by admin on 2017/4/8.
 */
// 超时
var minMoves = function(arr) {
    // 每次移动 len-1个元素
    var len = arr.length;
    var maxFunction = Math.max,
        minFunction = Math.min;
    var max = maxFunction.apply(null, arr),
        min = minFunction.apply(null, arr);

    var count = 0;
    while (max !== min){
        var index = arr.indexOf(max);
        for (var i = 0; i < len; ++i){
            if (i != index){
                arr[i]++;
            }
        }
        max = maxFunction.apply(null, arr);
        min = minFunction.apply(null, arr);
        count++;
    }

    return count;
};

var test = [1,2,3];
// var test = [1,2147483647];
console.log(minMoves(test));