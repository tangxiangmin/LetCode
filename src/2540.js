/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    var c1 = 0;
    var c2 = 0;
    while (c1 < nums1.length && c2 < nums2.length) {
        if (nums1[c1] == nums2[c2]) {
            return nums1[c1];
        }
        if (nums1[c1] < nums2[c2]) {
            c1++;
        } else {
            c2++;
        }
    }
    return -1;
};
var nums1 = [1, 2, 3],
    nums2 = [2, 4];
(nums1 = [1, 2, 3, 6]), (nums2 = [2, 3, 4, 5]);
var ans = getCommon(nums1, nums2);
console.log(ans);
