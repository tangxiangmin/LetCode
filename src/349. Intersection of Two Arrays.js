/**
 * Created by admin on 2017/4/10.
 */
var intersection = function(arr1, arr2) {
    var arr = [];
    for (var i = 0, len = arr1.length; i < len; ++i){
        var val = arr1[i];
        if (arr2.indexOf(val) !== -1 && arr.indexOf(val) === -1){
            arr.push(val);
        }
    }
    return arr;
};

var arr1 = [1, 2, 2, 1],
    arr2 = [2, 2];
console.log(intersection(arr1, arr2));