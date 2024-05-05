/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    const m = maze.length
    const n = maze[0].length

    const queue = [entrance]
    let ans = 0
    while (queue.length) {
        const len = queue.length
        for (let k = 0; k < len; ++k) {
            const [i, j] = queue.shift()
            if (i !== entrance[0] || j !== entrance[1]) {
                if (i === 0 || i === m - 1 || j == 0 || j === n - 1) {
                    return ans
                }
            }

            enqueue(i + 1, j)
            enqueue(i - 1, j)
            enqueue(i, j + 1)
            enqueue(i, j - 1)
        }
        ans++
    }
    return -1

    function enqueue(i, j) {
        if (i < 0 || i == m || j < 0 || j === n) return
        if (maze[i][j] === '+') return
        maze[i][j] = '+'
        queue.push([i, j])

    }
};
var maze = [["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], entrance = [1, 2]
maze = [["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]], entrance = [1, 0]
maze = [
    ["+", ".", "+", "+", "+", "+", "+"],
    ["+", ".", "+", ".", ".", ".", "+"],
    ["+", ".", "+", ".", "+", ".", "+"],
    ["+", ".", ".", ".", ".", ".", "+"],
    ["+", "+", "+", "+", ".", "+", "."]
], entrance = [0, 1]
var ans = nearestExit(maze, entrance)
console.log(ans)