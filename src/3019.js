/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {

    const n = s.length
    let prev = s[0].toLowerCase()
    let ans = 0

    for (let i = 1; i < n; ++i) {
        const cur = s[i].toLowerCase()
        if (cur !== prev) {
            prev = cur
            ans++
        }
    }
    return ans

};
var s = "aAbBcC"
var ans = countKeyChanges(s)
console.log(ans)