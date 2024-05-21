/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// 对合法的子数组进行分组预处理，判断每个query是否在同一个范围内
var isArraySpecial = function (nums, queries) {
    let group = []
    let l = 0
    const n = nums.length

    while (l < n) {
        let r = l + 1
        while (r < n && nums[r] % 2 !== nums[r - 1] % 2) {
            r++
        }
        group.push([l, r - 1])
        l = r
    }

    return queries.map((row) => {
        return check(row)
    })

    // group是有序的，可以用二分
    function check(row) {
        const [from, to] = row
        let l = 0
        let r = group.length - 1
        while (l <= r) {
            const mid = l + ((r - l) >> 1)
            const [a, b] = group[mid]
            if (b < from) {
                l = mid + 1
            } else if (to < a) {
                r = mid - 1
            } else {
                return from >= a && to <= b
            }
        }
    }
};
var nums = [3, 4, 1, 2, 6], queries = [[0, 4]]
nums = [4, 3, 1, 6], queries = [[0, 2], [2, 3]]
var ans = isArraySpecial(nums, queries)
console.log(ans)