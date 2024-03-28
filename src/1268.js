/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// BF
var suggestedProducts = function (products, searchWord) {
    products.sort()
    const ans = new Array(searchWord.length)
    let word = ''
    for (let i = 0; i < searchWord.length; ++i) {
        word += searchWord[i]
        ans[i] = find(word)
    }
    function find(word) {
        let arr = []
        for (const p of products) {
            if (p.indexOf(word) === 0) {
                arr.push(p)
            }
            if (arr.length >= 3) break
        }
        return arr
    }
    return ans
};

// 还可以使用字典树