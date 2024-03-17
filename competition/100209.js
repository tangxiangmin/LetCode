/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
// BF会超时
var unmarkedSumArray = function (nums, queries) {
    const marked = new Array(nums.length).fill(0)
    const ans = []
    for (const q of queries) {
        const [idx, k] = q
        marked[idx] = 1
        markMin(k)
        ans.push(calcSum())
    }
    return ans
    function calcSum() {
        let sum = 0
        for (let i = 0; i < nums.length; ++i) {
            if (marked[i]) continue
            sum += nums[i]
        }
        return sum
    }
    function markMin(k) {
        let min = -1
        while (k > 0) {
            for (let i = 0; i < nums.length; ++i) {
                if (marked[i]) continue
                if (min === -1 || nums[min] > nums[i]) {
                    min = i
                }
            }
            if (min === -1) break
            marked[min] = 1
            min = -1
            k--
        }

    }
};

// 感觉可以使用索引值排个序
var unmarkedSumArray = function (nums, queries) {
    const n = nums.length
    const marked = new Array(n).fill(0)
    const ans = []

    let lastMinIndex = 0
    const indexs = []
    let totalSum = 0
    for (let i = 0; i < n; ++i) {
        indexs[i] = i
        totalSum += nums[i]
    }
    indexs.sort((a, b) => nums[a] - nums[b])

    for (const q of queries) {
        const [idx, k] = q
        if (marked[idx] == 0) {
            totalSum -= nums[idx]
            marked[idx] = 1
        }

        markMin(k)
        ans.push(totalSum)
    }
    return ans

    function markMin(k) {
        for (; k > 0 && lastMinIndex < n; ++lastMinIndex) {
            const idx = indexs[lastMinIndex]
            if (marked[idx]) continue
            marked[idx] = 1
            totalSum -= nums[idx]
            k--
        }
    }
};
var nums = [1, 2, 2, 1, 2, 3, 1], queries = [[1, 2], [3, 3], [4, 2]]
// nums = [1, 4, 2, 3], queries = [[0, 1]]


var ans = unmarkedSumArray(nums, queries)
console.log(ans)