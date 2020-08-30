/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {

    var len = startTime.length
    var ans = 0
    for(var i = 0; i < len; ++i){
        if(startTime[i] <= queryTime && endTime[i]>= queryTime){
            ans++
        }
    }
    return ans
};