/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let [x, y] = stones.splice(stones.length - 2, 2);
        if (x !== y) {
            y = y - x;
            stones.push(y);
        }
    }
    return stones.length ? stones[0] : 0;
};


console.log(lastStoneWeight([7, 6, 7, 6, 9]));
