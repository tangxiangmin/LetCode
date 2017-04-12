/**
 * Created by admin on 2017/4/12.
 */
// 找到一个数字数组是否包含相同的元素

var containsDuplicate = function(arr) {
    var tmp = {},
        len = arr.length;
    if (len < 2){
        return false;
    }
    for (var i = 0, len = arr.length; i < len; ++i){
        var val = arr[i];
        if(typeof  tmp[val] === "undefined"){
            tmp[val] = 1;
        }else {
            return true
        }
    }
    return false;
};

var test = [0,4,5,0,3,6];
console.log(containsDuplicate(test));