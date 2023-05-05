/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    var l1 = 0;
    var l2 = 0;
    var ans = [];
    while (l1 < nums1.length && l2 < nums2.length) {
        var [id1, val1] = nums1[l1];
        var [id2, val2] = nums2[l2];
        if (id1 < id2) {
            ans.push(nums1[l1]);
            l1++;
        } else if (id1 === id2) {
            ans.push([id1, val1 + val2]);
            l1++;
            l2++;
        } else {
            ans.push(nums2[l2]);
            l2++;
        }
    }
    while (l1 < nums1.length) {
        ans.push(nums1[l1]);
        l1++;
    }
    while (l2 < nums2.length) {
        ans.push(nums2[l2]);
        l2++;
    }
    return ans;
};
var nums1 = [
        [1, 2],
        [2, 3],
        [4, 5],
    ],
    nums2 = [
        [1, 4],
        [3, 2],
        [4, 1],
    ];
var ans = mergeArrays(nums1, nums2);
console.log(ans);
