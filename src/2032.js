/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    var map1 = genMap(nums1);
    var map2 = genMap(nums2);
    var map3 = genMap(nums3);

    var ans = new Set();
    findVal(ans, nums1, map2, map3);
    findVal(ans, nums2, map1, map3);
    findVal(ans, nums3, map1, map2);

    return Array.from(ans);

    function findVal(ans, nums1, map2, map3) {
        for (var n of nums1) {
            if (map2[n] || map3[n]) {
                ans.add(n);
            }
        }
        return ans;
    }

    function genMap(nums) {
        return nums.reduce((acc, i) => {
            acc[i] = true;
            return acc
        }, {});
    }
};

var nums1 = [1, 1, 3, 2],
    nums2 = [2, 3],
    nums3 = [3];
var ans = twoOutOfThree(nums1, nums2, nums3);
console.log(ans);
