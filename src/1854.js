/**
 * @param {number[][]} logs
 * @return {number}
 */
// 思路，找到一个出生年份较早的年份，这个年份存活的人数最多
var maximumPopulation = function (logs) {
    // 按出生年份排个序
    logs.sort((a, b) => a[0] - b[0]);
    // 统计每个出生年份时 存活的人数

    var len = logs.length;
    var max = -Infinity;
    var ans;
    for (var i = 0; i < len; ++i) {
        var [birth, _] = logs[i];
        var sum = 0;
        for (var j = 0; j < len; ++j) {
            var [b2, d2] = logs[j];
            if (b2 <= birth && d2 > birth) {
                sum++;
            }
        }
        if (max < sum) {
            max = sum;
            ans = birth;
        }
    }
    return ans;
};

// 思路2 差分数组
var maximumPopulation = function (logs) {
    var nums = new Array(150).fill(0);
    var len = logs.length;
    for (var i = 0; i < len; ++i) {
        var log = logs[i];
        //
        nums[log[0] - 1949]++;
        nums[log[1] - 1949]--;
    }
    var max = 0;
    var res;
    for (var i = 1; i < 150; i++) {
        nums[i] += nums[i - 1];
        if (nums[i] > max) {
            max = nums[i];
            res = i + 1949;
        }
    }
    return res;
};

var logs = [
    [1993, 1999],
    [2000, 2010],
];
logs = [
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
];
var ans = maximumPopulation(logs);
console.log(ans);
