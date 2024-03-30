/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
    const n = mountain.length
    const ans = []
    for (let i = 1; i < n - 1; ++i) {
        if (mountain[i - 1] < mountain[i] && mountain[i] > mountain[i + 1]) {
            ans.push(i)
        }
    }
    return ans
};