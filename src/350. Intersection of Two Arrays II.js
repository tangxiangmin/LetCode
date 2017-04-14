/**
 * Created by admin on 2017/4/14.
 */
// 求两个数组的交集

var intersect = function(arr1, arr2) {
    var len1 = arr1.length,
        len2 = arr2.length;
    if (len1 === 0 || len2 === 0){
        return [];
    }

    if (len2 > len1){
        var tmp = arr1;
        arr1 = arr2;
        arr2 = arr1;
    }
    arr1.sort();
    arr2.sort();


    var res = [],
        cursor = 0;
    for (var i = 0, len = arr2.length; i < len; ++i){
        var val = arr2[i],
            idx = arr1.indexOf(val, cursor);
        if (idx !== -1){
            res.push(val);
            cursor = idx + 1;
        }
    }

    return res;
};
var arr1 = [1],
    arr2 = [1,1];
console.log(intersect(arr1, arr2));