// 求字符串数组A中的特殊等价字符串组
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    function formatString(S){
        let odd = [], even = []
        for(let i = 0; i < S.length; ++i){
            if(i%2){
                odd.push(S[i])
            }else {
                even.push(S[i])
            }
        }
        return even.sort().concat(odd.sort()).join('');

    }

    let hash = {};
    let res = 0
    for(let i = 0; i < A.length; ++i){
        let target = formatString(A[i])
        if (!hash[target]){
            hash[target] = []
            res++
        }
        hash[target].push(i)
    }
    return res
    
};
numSpecialEquivGroups([])