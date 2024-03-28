/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums) {
    let k = 0
    const seen = []
    const ans = []
    for (const num of nums) {
        if (num !== -1) {
            seen.unshift(num)
            k = 0
        } else {
            k++
            if (k <= seen.length) {
                ans.push(seen[k - 1])
            } else {
                ans.push(-1)
            }
        }
    }
    return ans
};

var nums = [1, 2, -1, -1, -1]
nums = [1,-1,2,-1,-1]
var ans = lastVisitedIntegers(nums)
console.log(ans)