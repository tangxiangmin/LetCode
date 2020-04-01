/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var rMax = -Infinity;
    for (var i = arr.length - 1; i >= 0; --i) {
        var tmp = arr[i];
        if (rMax === -Infinity) {
            arr[i] = -1;
        } else {
            arr[i] = rMax;
        }
        rMax = Math.max(tmp, rMax);
    }
    return arr;
};

var arr = [17,18,5,4,6,1]
console.log(replaceElements(arr))