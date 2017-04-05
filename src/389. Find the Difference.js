/**
 * https://leetcode.com/problems/find-the-difference/#/description
 */
var findTheDifference = function(s, t) {
    var arrS = s.split("").sort();
    var arrT = t.split("").sort();
    for (var i = 0; i < arrS.length; ++i){
        if (arrS[i] != arrT[i]){
            return arrT[i];
        }
    }
    if ( i == arrS.length){
        return arrT[i];
    }
};