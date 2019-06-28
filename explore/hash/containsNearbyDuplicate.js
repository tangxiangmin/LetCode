/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = new Map();
    var flag = false;
    for (var i = 0; i < nums.length; ++i) {
        var num = nums[i];
        if (map.has(num)) {
            var diff = Math.abs(map.get(num) - i);
            if (diff <= k) {
                return true;
            }
        }
        map.set(num, i);

    }
    return flag;
};
var arr = [1, 0, 1, 1];
var k = 1;

var res = containsNearbyDuplicate(arr, k);
console.log(res);
