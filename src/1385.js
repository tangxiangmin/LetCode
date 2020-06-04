/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    var ans = 0
    for(var v1 of arr1){
        let flag
        for(var v2 of arr2){
            if(Math.abs(v1 - v2) <= d) {
                break
            }
            flag = true
        }
        if(flag) ans++
    }
    return ans
};

var arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

var res = findTheDistanceValue(arr1, arr2, d)
console.log(res)