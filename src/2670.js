/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
    var map = {};
    for (var num of nums) {
        if (!map[num]) {
            map[num] = 0;
        }
        map[num]++;
    }

    var ans = [];
    var record = {};
    for (var i = 0; i < nums.length; ++i) {
        var num = nums[i];
        if (!record[num]) record[num] = 0;
        record[num]++;
        ans[i] = countPrev() - countNext();
    }
    return ans;

    function countPrev() {
        var ans = 0;
        for (var key in record) {
            if (record[key] > 0) ans++;
        }
        return ans;
    }
    function countNext() {
        var ans = 0;
        for (var key in map) {
            if (!record[key] || map[key] - record[key] > 0) ans++;
        }
        return ans;
    }
};

var nums = [1, 2, 3, 4, 5];
nums = [3, 2, 3, 4, 2];
var ans = distinctDifferenceArray(nums);
console.log(ans);
