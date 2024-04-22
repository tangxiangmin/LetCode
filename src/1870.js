/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
// hour小数限制的只跟最后一个元素有关，
// 最快的速度是除了最后一站，其余每站都是1个小时，模拟一下
var minSpeedOnTime = function (dist, hour) {
    const n = dist.length
    if (hour <= n - 1) {
        return -1
    }

    // 每站一个小时
    let max = Math.max(...dist)
    let l = 1

    const last = dist[n - 1]

    const lastM = hour - Math.floor(hour)
    if (lastM > 0) {
        max = Math.max(max, Math.floor(last / lastM))
    }

    let r = max
    while (l <= r) {
        const mid = (l + r) >> 1
        const val = calc(mid) + last / mid
        if (val > hour) {
            l = mid + 1
        } else if (val <= hour) {
            r = mid - 1
        }
    }
    return l

    function calc(x) {
        let t = 0
        for (let i = 0; i < n - 1; ++i) {
            t += Math.ceil(dist[i] / x)
        }
        return t
    }
};
var dist = [1, 3, 2], hour = 6
dist = [1, 3, 2], hour = 2.7
dist = [1, 1, 100000], hour = 2.01
dist = [9, 5, 10, 6, 10], hour = 16.75
dist = [1, 1], hour = 1
var ans = minSpeedOnTime(dist, hour)
console.log(ans)