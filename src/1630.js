/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {

    const n = l.length
    const ans = []
    for (let i = 0; i < n; ++i) {
        const arr = nums.slice(l[i], r[i] + 1)
        arr.sort((a, b)=>a-b)
        ans.push(check(arr))
    }
    return ans

    function check(arr) {
        const n = arr.length
        if (n <= 1) return false
        let diff = arr[1] - arr[0]
        for (let i = 0; i < n - 1; ++i) {
            if (arr[i + 1] - arr[i] !== diff) return false
        }
        return true

    }

};

var nums = [4, 6, 5, 9, 3, 7], l = [0, 0, 2], r = [2, 3, 5]
var ans = checkArithmeticSubarrays(nums, l, r)
console.log(ans)