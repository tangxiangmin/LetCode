/**
 * @param {number[]} stones
 * @return {number}
 */
// 二分枚举
// 这个回溯没有优化，会超时 
var maxJump = function (stones) {
    const n = stones.length
    let l = 0
    let r = stones[n - 1]

    while (l <= r) {
        const mid = (l + r) >> 1
        if (check(mid)) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l

    function jump(i, used, limit) {
        if (i === n - 1) {
            return back(i, used, limit)
        }
        used[i] = 1
        for (let j = i + 1; j < n; ++j) {
            if (stones[j] - stones[i] > limit) break
            if (jump(j, used, limit)) {
                return true
            }
        }
        used[i] = 0

        return false
    }
    function back(i, used, limit) {
        if (i == 0) return true
        for (let j = i - 1; j >= 0; --j) {
            if (stones[i] - stones[j] > limit) break
            if (j === 0) return true
            if (used[j] === 1) continue
            if (back(j, used, limit)) {
                return true
            }
        }
        return false
    }
    function check(limit) {
        const used = new Array(n).fill(0)
        return jump(0, used, limit)
    }

};
// 相当于两只青蛙一起跳，路径没有交集，那么一个跳奇数，一个跳偶数最优
var maxJump = function (stones) {
    let ans = stones[1] - stones[0];
    for (let i = 2; i < stones.length; i++) {
        ans = Math.max(ans, stones[i] - stones[i - 2]);
    }
    return ans;
}
var stones = [0, 2, 5, 6, 7]
var ans = maxJump(stones)
console.log(ans)