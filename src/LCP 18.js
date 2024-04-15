/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
// BF
var breakfastNumber = function (staple, drinks, x) {
    staple.sort((a, b) => a - b)
    drinks.sort((a, b) => a - b)

    let ans = 0
    for (const s of staple) {
        for (const d of drinks) {
            if (s + d > x) break
            ans++
        }
    }
    return ans
};

// 找到升序数组中某个元素的右边界
function findR(nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        const mid = l + ((r - l) >> 1)
        if (nums[mid] < target) {
            l = mid + 1
        } else if (nums[mid] > target) {
            r = mid - 1
        } else if (nums[mid] === target) {
            l = mid + 1
        }
    }
    return r
}
// 既然排序了，二分找到drinks的右边界
var breakfastNumber = function (staple, drinks, x) {
    staple.sort((a, b) => a - b)
    drinks.sort((a, b) => a - b)
    let ans = 0
    for (const s of staple) {
        if (x <= s) break
        ans += findR(drinks, x - s) + 1
    }
    return ans
}

console.log(findR([1, 5, 8, 9], 7))

// var staple = [10, 20, 5], drinks = [5, 5, 2], x = 15
// staple = [2, 1, 1], drinks = [8, 9, 5, 1], x = 9
// var ans = breakfastNumber(staple, drinks, x)
// console.log(ans)