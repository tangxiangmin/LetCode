// 给定一个数，翻转其二进制表示，然后求出新数


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var bin = n.toString(2);
    while(bin.length < 32){
        bin = '0'+bin;
    }

    var res = bin.split("").reverse().join("");
    return parseInt(res, 2);
};

var res = reverseBits(43261596);
console.log(res)