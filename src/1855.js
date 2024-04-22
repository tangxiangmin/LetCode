/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// BF，会超时
var maxDistance = function (nums1, nums2) {
    const n1 = nums1.length
    const n2 = nums2.length
    let ans = 0
    for (let i = 0; i < n1; ++i) {
        for (let j = i; j < n2; ++j) {
            if (nums2[j] >= nums1[i]) {
                ans = Math.max(ans, j - i)
            }
        }
    }
    return ans
};

// 两个数组都是非递增的，那可以二分
var maxDistance = function (nums1, nums2) {
    const n1 = nums1.length
    const n2 = nums2.length
    let ans = 0
    for (let i = 0; i < n1; ++i) {
        let l = i
        let r = n2 - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (nums2[mid] >= nums1[i]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        ans = Math.max(ans, r - i)
    }
    return ans
}
var nums1 = [55, 30, 5, 4, 2], nums2 = [100, 20, 10, 10, 5]
var ans = maxDistance(nums1, nums2)
console.log(ans)