/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    var sum = apple.reduce((acc, row) => {
        return acc + row
    }, 0)
    capacity.sort((a, b) => b - a)
    let count = 0
    for (const cap of capacity) {
        sum -= cap
        count++
        if (sum <= 0) {
            break
        }
    }
    return count
};

var apple = [1, 3, 2], capacity = [4, 3, 1, 5, 2]
// apple = [5, 5, 5], capacity = [2, 4, 2, 7]
var ans = minimumBoxes(apple, capacity)
console.log(ans)