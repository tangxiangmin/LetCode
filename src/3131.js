/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    return nums2[0] - nums1[0]
};

var addedInteger = function (nums1, nums2) {
    return Math.min(...nums2) - Math.min(...nums1)
};