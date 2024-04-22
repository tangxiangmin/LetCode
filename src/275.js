/**
 * @param {number[]} citations
 * @return {number}
 */
// 题意有点绕，先来个BF
var hIndex = function (citations) {
    const n = citations.length
    let ans = 0
    for (let i = n - 1; i >= 0; --i) {
        const v = citations[i]
        if (ans + 1 > v) {
            break
        }
        ans++
    }
    return ans
}

// 看起来就是从后向前，尽可能挪动l的位置
var hIndex = function (citations) {
    const n = citations.length
    let l = 0
    let r = n - 1
    while (l <= r) {
        const mid = (l + r) >> 1
        if (citations[mid] >= n - mid) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return n - l
};

var citations = [0, 1, 3, 5, 6]
// citations = [1, 2, 100]
// citations = [0, 1, 1, 2, 3, 4, 7, 8]
var ans = hIndex(citations)
console.log(ans)