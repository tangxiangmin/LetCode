/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
// BF模拟
var platesBetweenCandles = function (s, queries) {
    let ans = []

    for (const [l, r] of queries) {
        ans.push(find(l, r))
    }
    return ans

    function find(l, r) {
        let ans = 0
        let prev = 0
        let cnt = 0
        while (l <= r) {
            const ch = s[l]
            if (ch === '*') {
                prev++
            } else {
                cnt++
                if (cnt >= 2) {
                    ans += prev

                }
                prev = 0
            }
            l++
        }
        return ans
    }
};
// 思路，找到'||'左右的边界，以及’|‘的个数，就知道了中间有多少个盘子
var platesBetweenCandles = function (s, queries) {

    const pos = []
    const n = s.length
    for (let i = 0; i < n; ++i) {
        if (s[i] === '|') {
            pos.push(i)
        }
    }

    let ans = []

    for (const [l, r] of queries) {
        const left = findL(l)
        const right = findR(r)
        if (right > left) {
            ans.push(pos[right] - pos[left] - (right - left))
        }else {
            ans.push(0)
        }
    }
    return ans

    // 找到pos中第一个>=l的元素
    function findL(target) {
        let l = 0
        let r = pos.length - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (pos[mid] >= target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return l
    }
    function findR(target) {
        let l = 0
        let r = pos.length - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (pos[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return r
    }

}
var s = "***|**|*****|**||**|*", queries = [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]]
s = "**|**|***|", queries = [[2,5],[5,9]]
var ans = platesBetweenCandles(s, queries)
console.log(ans)