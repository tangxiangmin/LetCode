/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 思路1： DFS，没有去重
var findSubsequences = function (nums) {
    var len = nums.length;
    var ans = [];

    for (let i = 1; i < len; ++i) {
        dfs(i, [nums[i - 1]]);
    }
    return ans;

    function dfs(i, path) {
        if (i >= len) return;

        var prev = path[path.length - 1];
        var cur = nums[i];
        if (prev <= cur) {
            path = path.concat(cur);
            ans.push(path);

            dfs(i + 1, path);

            dfs(i + 1, path.slice().splice(1, 1));
        }
    }
};

var findSubsequences = function (nums) {
    var ans = [];
    var list = [];
    var map = {};

    for (var i = 0; i < nums.length - 1; ++i) {
        list = [nums[i]];
        dfs(i + 1);
    }
    return ans;

    function dfs(i) {
        if (i === nums.length) return;
        for (var j = i; j < nums.length; ++j) {
            var prev = list[list.length - 1];
            if (nums[j] >= prev) {
                list.push(nums[j]);
                add(list.slice());
                dfs(j + 1);
                list.pop();
            }
        }
    }

    function add(list) {
        var key = list.join(",");
        if (map[key]) return;
        map[key] = true;
        ans.push(list);
    }
};

var nums = [4, 6, 7, 7];
// nums = [4,4,3,2,1]
var res = findSubsequences(nums);
console.log(res);
