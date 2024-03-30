/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function (array) {
    if (!array.length) return []

    let t = 0
    let b = array.length - 1
    let l = 0
    let r = array[0].length - 1
    let ans = []

    let dir = 0  // dir%4 向右0、向下1、向左2、向上3

    const total = (b + 1) * (r + 1)
    while (ans.length < total) {
        if (dir === 0) {
            for (let i = l; i <= r; ++i) {
                ans.push(array[t][i])
            }
            t++
        } else if (dir === 1) {
            for (let i = t; i <= b; ++i) {
                ans.push(array[i][r])
            }
            r--
        } else if (dir === 2) {
            for (let i = r; i >= l; --i) {
                ans.push(array[b][i])
            }
            b--
        } else if (dir === 3) {
            for (let i = b; i >= t; --i) {
                ans.push(array[i][l])
            }
            l++
        }
        dir = (dir + 1) % 4
    }
    return ans

};

var array = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]
array = []
var ans = spiralArray(array)
console.log(ans)