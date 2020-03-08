/**
 * @param {number} target
 * @return {number[][]}
 */
// 9 =  1 + 8， 2 + 7， 3 + 6， 4 + 5，则只有 4 + 5满足“连续序列”
// 思路：快慢指针
var findContinuousSequence = function(target) {
    if (target <= 2) return [];
    var slow = 1;
    var fast = slow + 1;
    var sum = slow + fast;
    var ans = [];

    while (fast < target) {
        if (sum < target) {
            fast++;
            sum += fast;
        } else if (sum == target) {
            // 收集结果
            var arr = [];
            for (var j = slow; j <= fast; ++j) {
                arr.push(j);
            }
            ans.push(arr);
            fast++;
            sum += fast
        } else {
            sum -= slow;
            slow += 1;
        }
    }
    return ans
};

console.log(findContinuousSequence(15));
