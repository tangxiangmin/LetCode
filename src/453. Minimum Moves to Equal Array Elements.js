/**
 * Created by admin on 2017/4/8.
 */

var minMoves = function (arr) {
    // 每次将 len-1 个元素 +1， 相当于将最大的元素 -1

    // 解法1：超时
    // var len = arr.length;
    // var maxFunction = Math.max,
    //     minFunction = Math.min;
    // var max = maxFunction.apply(null, arr),
    //     min = minFunction.apply(null, arr);
    //
    // var count = 0;
    // while (max !== min){
    //     var index = arr.indexOf(max);
    //     arr[index]--;
    //     max = maxFunction.apply(null, arr);
    //     min = minFunction.apply(null, arr);
    //     count++;
    // }
    // return count;

    // 解法2：发现规律
    var sum = arr.reduce((acc, val) => {
        return acc + val;
    }, 0);
    var min = Math.min.apply(null, arr);

    return sum - min * arr.length;

};

// 反向思考 正着需要操作n-1个加1，反着只需要减一个1
var minMoves = function (arr) {
    const min = Math.min(...arr)
    let ans = 0
    for (const num of arr) {
        ans += num - min
    }
    return ans
}


var test = [1, 2, 3];
// var test = [1,2147483647];
console.log(minMoves(test));