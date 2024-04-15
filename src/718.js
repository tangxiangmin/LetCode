/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 先BF，找到nums2中以nums1[i]开头的最长子数组，会超时
var findLength = function (nums1, nums2) {
    const n1 = nums1.length
    const n2 = nums2.length

    let ans = 0
    for (let i = 0; i < n1; ++i) {
        for (let m = 0; m < n2; ++m) {
            let k = i
            let j = m
            while (nums1[k] !== nums2[j] && j < n2) {
                j++
            }
            while (k < n1 && j < n2 && nums1[k] === nums2[j]) {
                k++
                j++
            }
            ans = Math.max(ans, k - i)
        }
    }
    return ans
};


var nums1 = [1, 2, 3, 2, 1], nums2 = [3, 2, 1, 4, 7]
nums1 = [0, 0, 0, 0, 0], nums2 = [0, 0, 0, 0, 0]
// nums1 = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], nums2 = [1, 0, 0, 0, 0, 0, 0, 1, 0, 0]
nums1 = [1, 0, 1, 0, 0, 0, 0, 0, 1, 1], nums2 = [1, 1, 0, 1, 1, 0, 0, 0, 0, 0]


var ans = findLength(nums1, nums2)
console.log(ans)