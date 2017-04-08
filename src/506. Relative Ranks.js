/**
 * Created by admin on 2017/4/8.
 */
var findRelativeRanks = function(arr) {
    var tmp = arr.slice(0);

    arr.sort((a,b)=>{return b-a;});

    function getIndex(val){
        return tmp.indexOf(val);
    }

    tmp[getIndex(arr[0])] = "Gold Medal";
    tmp[getIndex(arr[1])] = "Silver Medal";
    tmp[getIndex(arr[2])] = "Bronze Medal";

    for (var i = 3, len = tmp.length; i < len; ++i){
        tmp[getIndex(arr[i])] = i + 1 + '';

    }

    return tmp;
};


var test = [5, 4, 3, 2, 1];
console.log(findRelativeRanks(test));