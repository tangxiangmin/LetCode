/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    nums.sort((a, b) => a - b);

    return queries.map((k) => {
        return find(k);
    });

    function find(target) {
        var sum = 0;
        var i = 0;
        for (; i < nums.length; ++i) {
            sum += nums[i];
            if (sum > target) return i;
        }
        return i;
    }
};

var nums = [4, 5, 2, 1],
    queries = [3, 10, 21];

var ans = answerQueries(nums, queries); // [2,3,4]
console.log(ans)
