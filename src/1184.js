/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
// 思路：求环形数组上两个方向的距离
var distanceBetweenBusStops = function (distance, start, destination) {
    if(start > destination){
        var tmp = start
        start = destination
        destination = tmp
    }
    var l = 0;
    var r = 0;
    for (let i = 0; i < start; ++i) {
        l += distance[i];
    }
    for (let j = destination; j < distance.length; ++j) {
        l += distance[j];
    }
    for (let k = start; k < destination; ++k) {
        r += distance[k];
    }
    return Math.min(l, r);
};


var distance = [1,2,3,4]
distance = [7,10,1,12,11,14,5,0]
var res = distanceBetweenBusStops(distance, 7, 2)
console.log(res)