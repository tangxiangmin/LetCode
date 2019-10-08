/**
 * @param {number[]} seats
 * @return {number}
 */
// 思路，遍历arr，找到可以入座的位置，记录最大值
var maxDistToClosest = function (seats) {
    var max = -Infinity
    for (var i = 0; i < seats.length; ++i) {
        if (seats[i] === 0) {
            var dis = findNearest(i)
            if (dis > max) {
                max = dis
            }
        }
    }
    return max
    function findNearest(index) {
        var prev = index
        var next = index
        while (prev >= 0 && seats[prev] !== 1) {
            prev--
        }
        while (next < seats.length && seats[next] !== 1) {
            next++
        }
        if (prev >= 0 && next < seats.length) {
            return Math.min(index - prev, next - index)
        } else if (prev < 0) {
            return next - index
        } else if (next >= seats.length) {
            return index - prev
        }
    }
};
// 思路2：找到两头及中间连续0的个数，取最值
var maxDistToClosest = function (seats) {
    var c1 = 0, c2 = 0, c3 = 0
    var i = 0
    // 找到开头的0
    while (seats[i] === 0) {
        c1++
        i++
    }
    // 找到末尾的0
    var j = seats.length - 1;
    while (seats[j] === 0) {
        c2++
        j--
    }
    // 找到中间最长的0
    var cur = 0
    for (var k = i; k <= j; ++k) {
        if (seats[k] === 0) {
            cur++
        } else {
            if (c3 < cur) {
                c3 = cur
            }
            cur = 0
        }
    }
    return Math.max(...[c1, c2, Math.floor((c3 + 1) / 2)])
}

var arr = [1, 0, 0, 0, 1, 0, 1]
// arr = [1, 0, 0, 0]
var res = maxDistToClosest(arr)
console.log(res)