/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
    const map1 = nums1.reduce((acc, num) => {
        acc[num] = 1
        return acc
    }, {})
    const map2 = nums2.reduce((acc, num) => {
        acc[num] = 1
        return acc
    }, {})
    let a = 0
    let b = 0
    for (const num of nums1) {
        if (map2[num]) {
            a++
        }
    }
    for (const num of nums2) {
        if (map1[num]) {
            b++
        }
    }
    return [a, b]
};