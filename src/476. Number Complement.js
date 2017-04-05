/**
 * https://leetcode.com/problems/number-complement/#/description
 */
var findComplement = function(num) {
    var bin = num.toString(2);
    var map = Array.prototype.map;

    bin = map.call(bin, function(val){

        return val == 0? 1: 0;
    })

    return parseInt(bin.join(""),2);
};