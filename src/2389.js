/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
// 排序
var answerQueries = function (nums, queries) {
    nums.sort((a, b) => a - b);

    return queries.map((k) => {
        return find(k);
    });

    function find(target) {
        var sum = 0;
        var i = 0;
        for (; i < nums.length; ++i) {
            sum += nums[i];
            if (sum > target) return i;
        }
        return i;
    }
};
// 排序 + 前缀和 + 二分
// 把nums从小到大排序后，再从小到大选择尽量多的元素
var answerQueries = function (nums, queries) {
    nums.sort((a, b) => a - b)
    const preSums = [nums[0]]
    const n = nums.length
    for (let i = 1; i < n; ++i) {
        preSums[i] = preSums[i - 1] + nums[i]
    }
    return queries.map(target => {
        const r = find(target)
        return r + 1
    })
    function find(target) {
        let l = 0
        let r = n - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (preSums[mid] === target) {
                return mid
            } else if (preSums[mid] < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return r
    }
}

var nums = [4, 5, 2, 1], queries = [3, 10, 21];
nums = [2,3,4,5], queries = [1]

var ans = answerQueries(nums, queries); // [2,3,4]
console.log(ans)
