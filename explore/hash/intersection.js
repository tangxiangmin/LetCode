/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var hash = new Set();
    for (var val of nums1) {
        hash.add(val);
    }
    var ans = new Set()
    for (var val of nums2) {
        if(hash.has(val)){
            ans.add(val, true)
        }
    }
    return Array.from(ans)
};
