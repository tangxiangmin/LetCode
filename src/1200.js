/**
 * @param {number[]} arr
 * @return {number[][]}
 */

const { isFunction } = require("util");

// 思路1：BF会超时
var minimumAbsDifference = function (arr) {
    var ans = [];
    var min = Infinity;
    for (var i = 0; i < arr.length - 1; ++i) {
        for (var j = i + 1; j < arr.length; ++j) {
            var diff = Math.abs(arr[i] - arr[j]);
            if (diff < min) {
                min = diff;
                ans = [];
            }
            if (diff <= min) {
                var pair =
                    arr[i] < arr[j] ? [arr[i], arr[j]] : [arr[j], arr[i]];
                ans.push(pair);
            }
        }
    }
    return ans.sort((a, b) => a[0] - b[0]);
};

// 先对数组进行排序，这样就只需要求相邻元素的差值即可
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);

    var map = {}
    var min = Infinity;

    for (var i = 0; i < arr.length - 1; ++i) {
        var diff =Math.abs( arr[i+1] - arr[i])
        if(min > diff){
            min = diff
        }
        if(!map[diff]) map[diff] = []

        map[diff].push([arr[i], arr[i+1]])
    }
    return map[min]
};

var arr = [4, 2, 1, 3];
var res = minimumAbsDifference(arr);
console.log(res);
