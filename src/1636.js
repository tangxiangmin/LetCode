/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    var map = {};
    for (var num of nums) {
        if (!map[num]) map[num] = 0;
        map[num]++;
    }
    nums.sort((a, b) => {
        return map[a] - map[b] || b - a;
    });
    return nums;
};

var nums = [1, 1, 2, 2, 2, 3];
nums = [2, 3, 1, 3, 2];
nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
var ans = frequencySort(nums);
console.log(ans);
