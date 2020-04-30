/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
// 问题可以抽象为：将数组按顺序分成D组，求每组之和最小值
// 看了解析才知道是二分查找，找左边界
var shipWithinDays = function(weights, D) {
    var l = Math.max(...weights)
    var r = weights.reduce((acc, item)=>acc+item, 0)
    while(l < r){
        var m = (l+r) >> 1
        var day = 1
        var count = 0 // 当天拉送的获取
        for(var w of weights){
            if(count + w > m){ 
                count = 0 // 换第二天拉
                day++
            }
            count += w
        }
        if(day > D){
            l = m+1
        }else {
            r = m
        }
    }
    return l
};

var weights = [1,2,3,4,5,6,7,8,9,10], D = 5
// [1,3,6,10,15,21,28,36,45,55]
var res = shipWithinDays(weights, D)
console.log(res)