// 格式化字符串

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let res = [];
    let dash = '-'
    let tmp = ''
    for (let i = S.length - 1; i >= 0; --i) {
        let item = S[i]
        if (item !== dash || i === 0) {
            if(item!== dash){
                tmp = item + tmp;
            }
            if (tmp.length === K || (i === 0 && tmp.length > 0)) {
                res.unshift(tmp.toUpperCase());
                tmp = "";
            }
        }
    }
    return res.join(dash)
};
