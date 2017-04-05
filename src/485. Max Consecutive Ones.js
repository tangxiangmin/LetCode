/**
 * https://leetcode.com/problems/max-consecutive-ones/#/description
 */
var findMaxConsecutiveOnes = function(arr) {
    var len = arr.length;
    if (arr[len - 1] == 1){
        arr[len] = 0;
        len++
    }

    var max = 0,
        count = 0;

    for (var i = 0; i < len; ++i){
        if (arr[i] == 0){
            if (count > max) {
                max = count;
            }
            count = 0;
        }else {
            count++;
        }
    }

    return max;
};