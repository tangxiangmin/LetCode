/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */

// 参考的别人答案，先全部给第2只，然后让出k个给第一只
var miceAndCheese = function (r1, r2, k) {
    var ans = 0, n = r1.length;
    for (i = 0; i < n; ++i) {
        ans += r2[i]; // 先全部给第二只老鼠
        r1[i] -= r2[i];
    }
    r1.sort((a, b) => a - b)
    for (var i = n - k; i < n; ++i)
        ans += r1[i];
    return ans;

};
var reward1 = [1, 1, 3, 4], reward2 = [4, 4, 1, 1], k = 2 //15
reward1 = [1, 1], reward2 = [1, 1], k = 2 // 2
// reward1 = [3, 3], reward2 = [3, 5], k = 1 //8
// reward1 = [4, 1, 5, 3, 3], reward2 = [3, 4, 4, 5, 2], k = 3 //21
reward1 = [1, 4, 4, 6, 4], reward2 = [6, 5, 3, 6, 1], k = 1 // 24
var ans = miceAndCheese(reward1, reward2, k)
console.log(ans)