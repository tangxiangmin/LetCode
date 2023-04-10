/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */

var mostFrequent = function (nums, key) {
    var map = {};
    for (var i = 0; i < nums.length - 1; ++i) {
        if (nums[i] === key) {
            var next = nums[i + 1];
            if (!map[next]) {
                map[next] = 0;
            }
            map[next]++;
        }
    }
    var max;
    for (var key of Object.keys(map)) {
        if (map[key] >= (map[max] || 0)) {
            max = Number(key);
        }
    }
    return max;
};


var nums = [2, 2, 2, 2, 3],
    key = 2;
(nums = [1, 100, 200, 1, 100]), (key = 1);
var ans = mostFrequent(nums, key);
console.log(ans);
