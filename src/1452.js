/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
// BF， 会超时
var peopleIndexes = function (favoriteCompanies) {
    const n = favoriteCompanies.length
    // 保存索引值
    const indexs = new Map()
    favoriteCompanies.forEach((arr, index) => {
        arr.sort()
        indexs.set(arr, index)
    })
    favoriteCompanies.sort((a, b) => a.length - b.length)

    let ans = []
    for (let i = 0; i < n; ++i) {
        let flag = true
        const a = favoriteCompanies[i]
        for (let j = i + 1; j < n; ++j) {
            const b = favoriteCompanies[j]
            if (check(a, b)) {
                flag = false
                break
            }
        }
        if (flag) {
            ans.push(indexs.get(a))
        }
    }
    ans.sort((a, b) => a - b)

    return ans

    // 对数组按字符排序后判断是否是子序列
    function check(a, b) {
        if (a.length > b.length) return false

        let i = 0
        while (i < a.length) {
            let j = i
            while (j < b.length && a[i] > b[j]) {
                j++
            }
            if (j === b.length) return false
            if (b[j] > a[i]) return false // j后面的都比a[i]大，找不到与a[i]相同的元素了，直接返回
            i++
        }
        return true
    }
};
var favoriteCompanies = [["leetcode", "google", "facebook"], ["google", "microsoft"], ["google", "facebook"], ["google"], ["amazon"]]
favoriteCompanies =
    [["nxaqhyoprhlhvhyojanr", "ovqdyfqmlpxapbjwtssm", "qmsbphxzmnvflrwyvxlc", "udfuxjdxkxwqnqvgjjsp", "yawoixzhsdkaaauramvg", "zycidpyopumzgdpamnty"], ["nxaqhyoprhlhvhyojanr", "ovqdyfqmlpxapbjwtssm", "udfuxjdxkxwqnqvgjjsp", "yawoixzhsdkaaauramvg", "zycidpyopumzgdpamnty"], ["ovqdyfqmlpxapbjwtssm", "qmsbphxzmnvflrwyvxlc", "udfuxjdxkxwqnqvgjjsp", "yawoixzhsdkaaauramvg", "zycidpyopumzgdpamnty"]]
var ans = peopleIndexes(favoriteCompanies)
console.log(ans)