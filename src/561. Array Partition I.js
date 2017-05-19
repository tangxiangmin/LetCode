/**
 * Created by admin on 2017/5/19.
 */
// 给出2n个整数，两两一组，返回每组中较小值的和sum，使sum尽量大
// PS：这道题的题意真是不容易理解啊
// 思路：先排序然后两两分组，将较小数相加就可以了。
var arrayPairSum = function(nums) {
    var arr = [],
        len = nums.length / 2;
    nums.sort((a, b)=>{return a-b});

    for (var i = 0; i < len; i++){
        arr[i] = [nums.pop(), nums.pop()];
    }

    return arr.reduce((acc, item)=>{
        return acc + item[1];
    }, 0);
};

var test = [1,4,3,2];
console.log(arrayPairSum(test));