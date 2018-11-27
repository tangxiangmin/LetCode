// 找到距离最近人的最远位置
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let prevIndex = -1
    let maxDistance = 0
    let res 
    let distance, i = 0;
    for(; i < seats.length; ++i){
        let seat = seats[i]
        if(seat === 1){
            if(prevIndex > -1){
                distance = i - prevIndex
                if (maxDistance < distance) {
                    maxDistance = distance
                    res = prevIndex + Math.floor((distance) / 2);
                }
            }
            prevIndex = i
        }
    }

    distance = i - prevIndex;
    if (maxDistance < distance) {
        maxDistance = distance
        res = i -1
    }

    return res
};

console.log(maxDistToClosest([1, 0, 0, 1]))