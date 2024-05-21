/**
 * @param {number} k
 * @return {number}
 */
var waysToReachStair = function (k) {
    // js的运行太慢了
    // 这里用{}
    const cache = new Map()

    return dfs(1, 0, true)

    function dfs(i, jump, flag) {
        const key = `${i},${jump},${flag}`
        if (cache.has(key)) {
            return cache.get(key)
        }

        let cnt = 0

        if (i < 0) return 0
        if (i === k) {
            cnt = 1
        }
        if (i > k + 1) return 0
        if (i === k + 1 && !flag) return 0

        if (i > 0 && flag) {
            cnt += dfs(i - 1, jump, false)
        }
        cnt += dfs(i + (1 << jump), jump + 1, true)
        cache.set(key, cnt)
        return cnt
    }
};
var k = 0
// k = 1
k = 2
k = 524267
k = 524268
var ans = waysToReachStair(k)
console.log(ans)