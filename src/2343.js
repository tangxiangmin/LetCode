/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
    const ans = []
    for (const [k, t] of queries) {
        let i = 0
        const arr = []
        for (const str of nums) {
            const val = str.slice(str.length - t)
            arr.push([val, i])
            i++
        }
        arr.sort((a, b) => {
            if (a[0] == b[0]) {
                return a[1] - b[1]
            }
            return a[0] < b[0] ? -1 : 1
        })
        ans.push(arr[k - 1][1])
    }
    return ans
};

var nums = ["102", "473", "251", "814"], queries = [[1, 1], [2, 3], [4, 2], [1, 2]] // [2,2,1,0]
nums = ["24", "37", "96", "04"], queries = [[2, 1], [2, 2]]
nums =
    ["22222222222222222222222222222222222222222222222225", "22222222222222222222222222222222222222222222222221", "22222222222222222222222222222222222222222222222223", "22222222222222222222222222222222222222222222222228", "22222222222222222222222222222222222222222222222226"], queries = [[1, 40], [3, 40], [2, 40], [5, 40], [4, 40]] // [1,0,2,3,4]

var ans = smallestTrimmedNumbers(nums, queries)
console.log(ans)