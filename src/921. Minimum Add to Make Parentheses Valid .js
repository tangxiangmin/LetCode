/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {

    let singleLeft = 0,
        singleRight = 0
    for(let i = 0; i < S.length; ++i){
        let item = S[i]
        if(item ==='('){
            singleLeft++
        }else if(item === ')'){
            if(singleLeft < 1){
                singleRight++
            }else {
                // 互相抵消
                singleLeft--
            }
        }
    }
    return singleRight + singleLeft
};

let res = minAddToMakeValid("()))((");
console.log(res)