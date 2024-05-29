/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// 预先处理正常的范围
var isArraySpecial = function (nums, queries) {

    const group = []
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        let r = i + 1
        while (r < n && nums[r] % 2 !== nums[r - 1] % 2) {
            r++
        }
        group.push([i, r - 1])
        i = r - 1
    }

    let ans = []
    for (const [from, to] of queries) {
        ans.push(check(from, to))
    }
    return ans

    function check(from, to) {
        const n = group.length
        let l = 0
        let r = n - 1
        // 找到from的左边界
        while (l <= r) {
            const mid = (l + r) >> 1
            const [a, b] = group[mid]
            if (a <= from) {
                if (b >= from) {
                    return b >= to
                }
                l = mid + 1
            } else if (a >= from) {
                r = mid - 1
            }
        }
        return false
    }
};

var nums = [3, 4, 1, 2, 6], queries = [[0, 4]]
nums = [1, 8], queries = [[1, 1]]
var ans = isArraySpecial(nums, queries)
console.log(ans)