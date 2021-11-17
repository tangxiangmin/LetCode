/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    var ans = 0;
    for (var i = 0; i < boxTypes.length; ++i) {
        var [num, per] = boxTypes[i];

        while (truckSize && num) {
            truckSize--;
            num--;
            ans += per;
        }
        if (!truckSize) break;
    }
    return ans;
};

var boxTypes = [
        [1, 3],
        [2, 2],
        [3, 1],
    ],
    truckSize = 4;
var abs = maximumUnits(boxTypes, truckSize);
console.log(abs);
