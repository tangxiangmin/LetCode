/**
 * @param {string} s
 * @return {number}
 */
// 将1移动到右边，0移动到左边
// 双指针，交换左右两侧的求，交换次数就等于r-l
var minimumSteps = function (s) {
    const n = s.length
    let l = 0
    let r = n - 1
    let ans = 0
    while (l < r) {
        while (l < n && s[l] === '0') {
            l++
        }
        while (r >= 0 && s[r] === '1') {
            r--
        }
        if (r > l && s[l] === '1' && s[r] === '0') {
            ans += r - l
        }
        l++
        r--
    }
    return ans
};
var minimumSteps = function (s) {
    let ans = 0
    let cnt1 = 0
    for (const ch of s) {
        if (ch === '1') {
            cnt1++
        } else {
            // 当前0要跟左边的cnt1个1交换
            ans += cnt1
        }
    }
    return ans
}
var s = "10101"
s = "101"
// s = "100"
// s = "0111"
var ans = minimumSteps(s)
console.log(ans)