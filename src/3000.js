/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let ans = 0
    let max = 0
    for (const [w, h] of dimensions) {
        const d = w * w + h * h
        if (max < d) {
            max = d
            ans = w * h
        } else if (max === d) {
            ans = Math.max(w * h, ans)
        }
    }
    return ans

};