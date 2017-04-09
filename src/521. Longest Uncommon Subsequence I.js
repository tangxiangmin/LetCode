/**
 * Created by admin on 2017/4/9.
 */
var findLUSlength = function(a, b) {
    if (a === b){
        return -1;
    }

    return Math.max(a.length, b.length);
};
var a = "aba",
    b = "cdc";

console.log(findLUSlength(a, b));