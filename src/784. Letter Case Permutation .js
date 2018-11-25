// 给定一个字符串，我们可以改变某个字符的大小写，从而生成新的字符串，返回可能的组合

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    function transform(ch){
        if (/^[a-zA-Z]$/.test(ch)){
            let lower = ch.toLowerCase();
            return lower === ch ? ch.toUpperCase() : lower;
        }else {
            return false
        }
    }
    function getSub(S, ans, startIndex) {
        if(!S.length){
            return
        }
        
        for (let i = startIndex; i < S.length; ++i) {
            let ch = S[i];
            let res = transform(ch);
            if (res) {
                let clone = S.slice(0);
                clone[i] = res;
                let item = clone.join("");
                ans.push(item);
                getSub(clone, ans, i+1);
            }
        }
    }

    let ans = [S]
    S = S.split('')

    getSub(S, ans, 0)
    return ans
};
letterCasePermutation("mQe");