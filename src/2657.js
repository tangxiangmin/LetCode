/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    const map = {}
    const n = A.length
    for (let i = 0; i < n; ++i) {
        map[nums[i]] = i
    }
    let ans = []
    for (let i = 0; i < n; ++i) {

        let cnt = 0
        for (let j = 0; j <= i; ++j) {
            if (map[B[j]] <= i) {
                cnt++
            }
        }
        ans[i] = cnt
    }
    return ans

};