/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = new Map();
    for (var i = 0; i < nums.length; ++i) {
        var num = nums[i];
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    }
    var ans = [];
    map.forEach((val, key) => {
        ans.push({ val, key });
    });

    return ans.sort((a, b) => b.val - a.val).map(item => item.key).slice(0, k);
};
