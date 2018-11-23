// 给定数字N,返回其二进制表示法中两个1之间的最长距离

/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
    let s = N.toString(2)

    let lastIndex = -1;
    let res = 0

    for(let i = 0; i < s.length; ++i){
        if(s[i] === '1'){
            if (lastIndex !== -1){
                res = Math.max(res, i - lastIndex);
            }
            lastIndex = i;
        }
    }
    return res
};

binaryGap(22)