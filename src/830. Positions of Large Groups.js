// 求字符串中连续字符长度 >=3 的索引值

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let res = [];

    let cursor = 0, i = 0
    for (; i < S.length; ++i) {
        let cur = S[i]
        if (cur === S[cursor]){
            continue
        }else {
            if (i - cursor >= 3) {
                res.push([cursor, i-1]);
            }
            cursor = i
        }
    }
    if (i - cursor >= 3) {
        res.push([cursor, i - 1]);
    }

    return res;
};

largeGroupPositions("aaa");
