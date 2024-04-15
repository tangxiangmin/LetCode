/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 模拟，取nums[i]===1为子数组结尾的最长
var longestOnes = function (nums, k) {
    const n = nums.length
    let i = 0
    let l = 0
    let blanks = []
    while (i < n && blanks.length < k) {
        if (nums[i] === 0) {
            blanks.push(i)
            nums[i] = 1
            if (blanks.length === k) {
                break
            }
        }
        i++
    }
    if (i === n) {
        return n
    }

    let ans = nums[l] === 1 ? i - l + 1 : 0
    while (i < n) {
        if (nums[i] === 1) {
            ans = Math.max(ans, i - l + 1)
            i++
            continue
        }
        if (blanks.length) {
            l = blanks.shift()
            nums[l] = 0
            l++
            nums[i] = 1
            blanks.push(i)
        } else {
            l = i + 1
        }
        i++
    }


    return ans
};

var nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2
nums = [0, 0, 1, 1, 1, 0, 0], k = 0
nums = [0, 0, 0, 0], k = 0
var ans = longestOnes(nums, k)

console.log(ans) // 6