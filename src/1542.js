/**
 * @param {string} s
 * @return {number}
 */


// 子字符串：中最多只有一个字符出现了奇数次，其余的所有字符都出现了偶数次

// 参考的题解
var longestAwesome = function(s) {
    const D = 10; // s 中的字符种类数
    const n = s.length;
    const pos = Array(1 << D).fill(n); // n 表示没有找到异或前缀和
    pos[0] = -1; // pre[-1] = 0
    let ans = 0;
    let pre = 0;
    for (let i = 0; i < n; i++) {
        pre ^= 1 << (s.charCodeAt(i) - '0'.charCodeAt(0));
        for (let d = 0; d < D; d++) {
            ans = Math.max(ans, i - pos[pre ^ (1 << d)]); // 奇数
        }
        ans = Math.max(ans, i - pos[pre]); // 偶数
        if (pos[pre] === n) { // 首次遇到值为 pre 的前缀异或和，记录其下标 i
            pos[pre] = i;
        }
    }
    return ans;
};