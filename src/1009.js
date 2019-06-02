/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let binary = N.toString(2);
    let res = ''
    for (let i = 0; i < binary.length; ++i) {
        let c = binary[i]
        res += c === '1' ? '0' : '1'
    }
    return parseInt(res, 2);
};

