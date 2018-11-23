// 翻转字符串，非字母的字符保留在原始位置
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    function isLetter(c) {
        return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
    }
    let head = 0,
        tail = S.length - 1;
    S = S.split('')
    while(head < tail){
        while (!isLetter(S[head]) && head < tail) {
            head++
        }
        while (!isLetter(S[tail]) && head < tail) {
            tail--;
        }

        let tmp = S[head]
        S[head] = S[tail]
        S[tail] = tmp;
        head++;
        tail--
    }
    return S.join('')
};

reverseOnlyLetters("7_28]");
