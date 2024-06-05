/**
 * Created by admin on 2017/5/19.
 */
// 分糖果，要求数量相等，求能够拿到的最多糖果种类
// 思路：先给每个种类分一个，如果超过总数一半，则种类为n/2，如果数量不足一半，则种类数量就为对应值
var distributeCandies = function (candies) {

    var len = candies.length
    var candiesMap = {}
    var count = 0

    for (var i = 0; i < len; ++i) {
        var val = candies[i]
        if (!candiesMap[val]) {
            candiesMap[val] = 1
            count++
        }
    }
    return Math.min(count, len / 2)
};


// var candies = [1,1,2,2,3,3];
var candies = [1, 1, 2, 3];
console.log(distributeCandies(candies));
