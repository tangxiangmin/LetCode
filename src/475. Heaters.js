// 给定一个数组代表房间，另一个数组代表暖气片所处的房间，求暖气片的最小半径使得所有房间供暖
// 思路：貌似求间距最大的两个暖气的距离，然后考虑边界情况就可以了
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {

    var max = 1;
    for (var i = 0; i < heaters.length-1; ++i) { 
        var diff = heaters[i + 1] - heaters[i] 
        if (max < diff){
            max = diff;
        }
    }

    // 处理边界
    var l = heaters[0],
        r = houses.length - heaters[heaters.length-1];
    
    return Math.prototype.Max.apply(null, [max/2, l, r]);
};

