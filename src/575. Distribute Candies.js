/**
 * Created by admin on 2017/5/19.
 */
// 分糖果，要求数量相等，求妹妹能够拿到的最多糖果种类
    // 思路：先给妹妹每个种类分一个，如果数量超过总数一半，则种类数量为n/2，如果数量不足一半，则种类数量就为对应值
var distributeCandies = function(candies) {

    var len = candies.length,
        candiesMap = {},
        count = 0;

    for (var i = 0; i < len; ++i) {
        var val = candies[i];
        if (!candiesMap[val]) {
            candiesMap[val] = 1;
            count++;
        }
    }

    return  count < len/2? count : len/2;
};


// var candies = [1,1,2,2,3,3];
var candies = [1,1,2,3];
console.log(distributeCandies(candies));
