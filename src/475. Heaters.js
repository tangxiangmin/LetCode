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
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);

    var i = 0, res = 0;
    for (house of houses) {
        while (i < heaters.length - 1 && heaters[i] + heaters[i + 1] <= house * 2) {
            i++;
        }
        res = Math.max(res, Math.abs(heaters[i] - house));
    }
    return res
}

// 二分，限定半径范围，但是检测过程复杂度比较高，会超时
var findRadius = function (houses, heaters) {
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    const max = Math.max(Math.abs(heaters[heaters.length - 1] - houses[0]), Math.abs(heaters[0] - houses[houses.length - 1]))
    let l = 0
    let r = max
    while (l <= r) {
        const mid = (l + r) >> 1
        if (check(mid)) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l
    function check(r) {
        for (const house of houses) {
            let flag = false
            for (const heater of heaters) {
                if (Math.abs(heater - house) <= r) {
                    flag = true
                    break
                }
            }
            if (!flag) return false
        }
        return true
    }
};

var findRadius = function (houses, heaters) {
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)

    // 确定目标值的最大值，一个加热器可以覆盖所有的房间
    const max = Math.max(Math.abs(heaters[heaters.length - 1] - houses[0]), Math.abs(heaters[0] - houses[houses.length - 1]))

    let l = 0 // 由于加热器可以与房间重叠，所以最小值是0
    let r = max
    while (l <= r) {
        const mid = (l + r) >> 1
        if (check(mid)) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return l

    function check(radius) {
        for (const house of houses) {
            //对于每个房间，二分找到其最近的那个加热器，看看能否满足条件
            let l = 0
            let r = heaters.length - 1
            let flag = false
            while (l <= r) {
                const mid = (l + r) >> 1
                if (Math.abs(heaters[mid] - house) <= radius) {
                    flag = true
                    break
                } else if (heaters[mid] > house) {
                    r = mid - 1
                } else if (heaters[mid] < house) {
                    l = mid + 1
                }
            }
            if (!flag) return false
        }
        return true
    }

};


var houses = [1, 2, 3], heaters = [2]
houses = [1, 2, 3, 4], heaters = [1, 4]
houses = [1, 5], heaters = [2]
var ans = findRadius(houses, heaters)

console.log(ans);