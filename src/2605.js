/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    var ans = findSames(nums1, nums2);
    if (ans.length) {
        return findMin(ans)
    }

    var m1 = findMin(nums1);
    var m2 = findMin(nums2);
    if (m1 === m2) return m1;
    return m1 < m2 ? m1 * 10 + m2 : m2 * 10 + m1;

    function findSames(nums1, nums2) {
        var map = {};
        var ans = []
        for (var num of nums1) {
            map[num] = true;
        }
        for (var num of nums2) {
            if (map[num]) ans.push(num)
        }
        return ans;
    }
    function findMin(nums) {
        var min = Infinity;
        for (var num of nums) {
            if (min > num) min = num;
        }
        return min;
    }
};

var nums1 = [4, 1, 3],
    nums2 = [5, 7];
(nums1 = [3, 5, 2, 6]), (nums2 = [3, 1, 7]);

nums1 = [6,4,3,7,2,1,8,5]
nums2 = [6,8,5,3,1,7,4,2]
var ans = minNumber(nums1, nums2);
console.log(ans);
