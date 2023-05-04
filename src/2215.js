/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    var ans1 = diff(nums1, findMap(nums2))
    var ans2 = diff(nums2, findMap(nums1))
    return [ans1,ans2]

    function findMap(nums){
        var map = {}
        for(var num of nums){
            map[num] = true
        }
        return map
    }

    function diff(nums, map){
        var ans = new Set()
        for(var num of nums){
            if(!map[num]){
                ans.add(num)
            }
        }
        return Array.from(ans)
    }
};

var nums1 = [1,2,3], nums2 = [2,4,6]
nums1 = [1,2,3,3], nums2 = [1,1,2,2]
var ans = findDifference(nums1, nums2)
console.log(ans)