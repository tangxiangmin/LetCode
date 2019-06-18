/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var index1 = 0
    var index2 = numbers.length - 1

    while(index1 < index2){
        var n1 = numbers[index1]
        var n2 = numbers[index2]
        if(target > 0 && n2 > target){
            index2--
            continue
        }

        if(n1 + n2 < target){
            index1++
        }else if(n1 + n2 > target){
            index2--
        }else {
            break
        }
    }

    return [index1+1, index2+1]
};

var arr = [-3,3,4,90]
var target = 0

var res = twoSum(arr, target)
console.log(res)
