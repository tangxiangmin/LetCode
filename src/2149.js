/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 思路，按正负拆分数组，然后依次合并
var rearrangeArray = function (nums) {
    const a = nums.filter(num => num > 0)
    const b = nums.filter(num => num < 0)
    let n = a.length
    const ans = []
    for (let i = 0; i < n; ++i) {
        ans.push(a[i])
        ans.push(b[i])
    }
    return ans
};
// 为了节省空间复杂度，也可以使用双指针
var rearrangeArray = function (nums) {
    let a = 0
    let b = 0
    let ans = []
    const n = nums.length

    while (ans.length < n) {
        while (a < n && nums[a] < 0) {
            a++
        }
        ans.push(nums[a])
        a++
        while (b < n && nums[b] > 0) {
            b++
        }
        ans.push(nums[b])
        b++
    }
    return ans
}
var nums = [3, 1, -2, -5, 2, -4]
var ans = rearrangeArray(nums)
console.log(ans)