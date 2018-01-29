// 给定一个数组代表房间，另一个数组代表暖气片所处的房间，求暖气片的最小半径使得所有房间供暖
// 思路1：貌似求间距最大的两个暖气的距离，然后考虑边界情况就可以了这种方式有BUG
// 思路2：分别遍历两个数组，然后找到离当前房间最近的暖气片


/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
// var findRadius = function (houses, heaters) {
//     var len1 = houses.length,
//         len2 = houses.length;

    

//     var max = 1;
//     for (var i = 0; i < len2; ++i) { 
//         var diff = heaters[i + 1] - heaters[i]-1
//         if (max < diff){
//             max = diff;
//         }
//     }

//     // 处理边界
//     var l = heaters[0]-1,
//         r = houses[len1 - 1] - heaters[len2-1];

//     return Math.max.apply(null, [max/2, l, r]);
// };

var findRadius = function (houses, heaters) {
        houses.sort((a,b)=>a-b);
        heaters.sort((a, b) => a - b);

        var i = 0, res = 0;
        for ( house of houses) {
            while (i < heaters.length - 1 && heaters[i] + heaters[i + 1] <= house * 2) {
                i++;
            }
            res = Math.max(res, Math.abs(heaters[i] - house));
        }
        return res
}

// var res = findRadius([1,2,3,4], [1,4]);
var res = findRadius([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 9]);

console.log(res);