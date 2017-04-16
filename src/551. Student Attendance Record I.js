/**
 * Created by admin on 2017/4/16.
 */
// 统计学生的出勤
// 不超过一个A或不超过两个连续的L
var checkRecord = function(s) {
    var idxA = s.indexOf("A");
    if (~idxA && idxA !== s.lastIndexOf("A")){
        return false
    }

    if (~s.indexOf("LLL")){
        return false;
    }
    return true;
};