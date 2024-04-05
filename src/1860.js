/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function (memory1, memory2) {
    let i = 1
    while (true) {
        if (memory1 >= memory2) {
            if (memory1 < i) {
                break
            }
            memory1 -= i
        } else {
            if (memory2 < i) {
                break
            }
            memory2 -= i
        }
        i++
    }
    return [i, memory1, memory2]
};