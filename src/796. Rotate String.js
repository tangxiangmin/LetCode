// 每次操作把字符串最左边的字符移动到最右边，判断是否经过一定操作后A可以转换成B

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if(A === B){
        return true
    }

    function rotate(S){
        return S.substr(1) + S[0]
    }
    let len = A.length
    for(let i = 0; i < len; ++i){
        A = rotate(A)
        console.log(A);
        if (A === B){
            return true
        }
    }
    return false
};
rotateString("abcde","cdeab")