/**
 * @param {number} n
 * @return {number}
 */
// 这道题的意思是按照每一步的变化，perm重新回到初始状态0...n的情况，因此直接BF模拟
var reinitializePermutation = function (n) {
    let perm = []
    for (let i = 0; i < n; ++i) {
        perm[i] = i
    }
    let cnt = 0
    while (true) {
        cnt++
        let arr = []
        for (let i = 0; i < n; ++i) {
            if (i % 2 === 0) {
                arr[i] = perm[i / 2]
            } else {
                arr[i] = perm[n / 2 + (i - 1) / 2]
            }
        }
        let flag = true
        for (let i = 0; i < n; ++i) {
            if (arr[i] !== i) {
                perm = arr
                flag = false
                break
            }
        }
        if (flag) {
            return cnt
        }
    }
}

var n = 2
n = 4
var ans = reinitializePermutation(n)
console.log(ans)