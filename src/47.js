/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    var map = {};
    for (var num of nums) {
        if (!map[num]) map[num] = 0;
        map[num]++;
    }
    var chars = Object.keys(map);
    var list = [];
    dfs([]);

    return list;

    function dfs(prev) {
        if (prev.length === nums.length) {
            list.push(prev)
            return;
        }
        for (var ch of chars) {
            if (map[ch] > 0) {
                map[ch]--;
                dfs([...prev, Number(ch)]);
                map[ch]++;
            }
        }
    }
};

var nums = [1, 1, 2];
nums =[1,1,2]
var ans = permuteUnique(nums);

console.log(ans);
