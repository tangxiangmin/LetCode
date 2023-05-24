/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    var map = {};
    for (var num of nums) {
        if (!map[num]) map[num] = 0;
        map[num]++;
    }

    var ans = [[]];
    var chars = Object.keys(map);
    dfs(0, []);
    return ans;

    function dfs(i, prev) {
        if (prev.length === nums.length) return;

        for (; i < chars.length; ++i) {
            var ch = chars[i];
            if (map[ch] > 0) {
                map[ch]--;
                var list = [...prev, Number(ch)];
                ans.push(list);
                dfs(i, list);
                map[ch]++;
            }
        }
    }
};

var nums = [1, 2, 2];
nums = [0];
var ans = subsetsWithDup(nums);
console.log(ans);
