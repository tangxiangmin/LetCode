/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var map = new Map();
    for (var i = 0; i < nums1.length; ++i) {
        var num = nums1[i];
        if (!map.has(num)) {
            map.set(num, 0);
        }
        var times = map.get(num);
        map.set(num, times + 1);
    }
    var ans = [];
    for (var i = 0; i < nums2.length; ++i) {
        var num = nums2[i];
        if (map.has(num)) {
            ans.push(num);
            var time = map.get(num);
            if (time - 1 > 0) {
                map.set(num, time - 1);
            } else {
                map.delete(num);
            }
        }
    }
    return ans;
};
var a = [1,2,2,1]
    var b = [2,2]
var res = intersect(a, b)
console.log(res)
