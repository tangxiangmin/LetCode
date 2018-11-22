// 给定一个字符串和一个字符，返回字符串中每个元素距离该字符最近的距离

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let res = [];
    let latestIndex = -1;
    for (let i = 0; i < S.length; ++i) {
        if (S[i] === C) {
            res[i] = 0;
            for (let j = i - 1; j > latestIndex; --j) {
                res[j] = res[j] ? Math.min(i - j, res[j]) : i-j;
            }
            for (let j = i + 1; j < S.length; ++j) {
                res[j] = j - i ;
            }

            latestIndex = i;
        }
    }
    return res;
};
