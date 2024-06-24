/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
// BF
var countOfPeaks = function (nums, queries) {
    const ans = []
    for (const [a, b, c] of queries) {
        if (a === 2) {
            nums[b] = c
        } else if (a === 1) {
            ans.push(find(b, c))
        }
    }
    return ans

    function find(l, r) {
        let cnt = 0
        for (let i = l + 1; i < r - 1; ++i) {
            if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
                cnt++
            }
        }
        return cnt
    }
};

var countOfPeaks = function (nums, queries) {
    const prefix = [0]
    const n = nums.length
    let cnt = 0
    for (let i = 1; i < n; ++i) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            cnt++
        }
        prefix[i] = cnt
    }

    const ans = []
    for (const [a, b, c] of queries) {
        if (a === 2) {
            let p1 = isPeak(b - 1)
            let p2 = isPeak(b)
            let p3 = isPeak(b + 1)
            nums[b] = c
            let c1 = isPeak(b - 1)
            let c2 = isPeak(b)
            let c3 = isPeak(b + 1)

            if ((p1 !== c1) || (p2 !== c2) || (p3 !== c3)) {
                let cnt = Math.max(prefix[b - 1] - 1, 0)
                for (let i = b - 1; i < n; ++i) {
                    if (isPeak(i)) {
                        cnt++
                    }
                    prefix[i] = cnt
                }
            }

        } else if (a === 1) {
            ans.push(find(b, c))
        }
    }
    return ans

    function isPeak(i) {
        return i > 0 && i < n - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1]
    }
    function find(l, r) {
        if (l === r) return 0
        if (r < 1) return 0
        if (l === n + 1) return 0
        console.log(l, r, prefix)

        return prefix[r - 1] - prefix[l]
    }
}
var nums = [3, 1, 4, 2, 5], queries = [[2, 3, 4], [1, 0, 4]]
nums = [4, 1, 4, 2, 1, 5], queries = [[2, 2, 4], [1, 0, 2], [1, 0, 4]]
// nums = [3, 6, 9], queries = [[1, 1, 1], [1, 2, 2], [2, 2, 3]]
nums = [3, 1, 4, 2, 5], queries = [[2, 3, 4], [1, 0, 4]]
nums = [7, 10, 7], queries = [[1, 2, 2], [2, 0, 6], [1, 0, 2]]
nums = [8, 5, 9, 3, 5], queries = [[1, 2, 4], [1, 0, 1], [2, 2, 4]]
nums = [8, 10, 10, 9, 10], queries = [[2, 0, 1], [2, 2, 7], [1, 0, 2]]
var ans = countOfPeaks(nums, queries)
console.log(ans)