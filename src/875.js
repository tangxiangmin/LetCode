
var minEatingSpeed = function (piles, H) {
    const max = Math.max(...piles)// 用这个速度的话，每小时都可以吃一堆
    let l = 1
    let r = max
    while (l <= r) {
        const mid = (l + r) >> 1
        if (check(mid)) {
            // 求最小速度，所以缩小右边界
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l
    function check(speed) {
        let h = 0
        for (const p of piles) {
            h += Math.ceil(p / speed)
        }
        return h <= H
    }
}
var minEatingSpeed = function (piles, H) {
    const max = Math.max(...piles)
    let l = 1
    let r = max
    while (l <= r) {
        const mid = (l + r) >> 1
        const val = clac(mid)
        if (val > H) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return l

    function clac(k) {
        let ans = 0
        for (const num of piles) {
            ans += Math.ceil(num / k)
        }
        return ans
    }
}
var piles = [3, 6, 7, 11], H = 8
piles = [30, 11, 23, 4, 20], H = 5
var ans = minEatingSpeed(piles, H)
console.log(ans)