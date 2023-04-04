/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    var map = {};
    for (var list of nums) {
        for (var item of list) {
            if (!map[item]) {
                map[item] = 0;
            }
            map[item]++;
        }
    }
    const ans = [];
    Object.keys(map).forEach((key) => {
        if (map[key] === nums.length) {
            ans.push(Number(key));
        }
    });
    return ans.sort((a, b) => a - b);
};

var nums = [
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
];
var ans = intersection(nums);
console.log(ans);
