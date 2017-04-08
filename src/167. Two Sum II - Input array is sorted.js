/**
 * Created by admin on 2017/4/8.
 */
var twoSum = function(arr, target) {
    // for (var i = 0, len = arr.length; i < len - 1; ++i){
    // 	for (var j = i + 1; j < len; ++j){
    // 		if (arr[i] + arr[j] == target){
    // 			return [i + 1, j + 1];
    // 		}
    // 	}
    // }

    var i = 0,
        j = arr.length - 1;
    while (i < j){
        var sum = arr[i] + arr[j];
        if (sum == target){
            return [i+1, j+1];
        }else if (sum < target){
            ++i;
            continue;
        }else {
            --j;
        }
    }

};


var test = [2, 7, 11, 15];
console.log(twoSum(test, 9));