/**
 * @param {character[][]} grid
 * @return {boolean}
 */

function parse(str) {
    let stack = []
    for (const ch of str) {
        if (ch === ')' && stack.length && stack[stack.length - 1] === '(') {
            stack.pop()
        } else {
            stack.push(ch)
        }
    }
    return stack.join('')
}

// 由于prev导致缓存很多都无法命中，部分测试用例会超时
var hasValidPath = function (grid) {
    const m = grid.length
    const n = grid[0].length

    const cache = new Map()

    return dfs(0, 0, '')
    // 返回 (i,j) 时合并之后的字符串
    function dfs(i, j, prev) {
        const key = `${i},${j},${prev}`
        if (cache.has(key)) {
            return cache.get(key)
        }
        let cur = grid[i][j]
        prev = parse(prev + cur)
        if (i === m - 1 && j === n - 1) {
            return prev === ''
        }

        let a = false
        let b = false
        if (i < m - 1) {
            a = dfs(i + 1, j, prev)
        }
        if (j < n - 1) {
            b = dfs(i, j + 1, prev)
        }
        const ans = a || b
        cache.set(key, ans)
        return ans
    }

};

// 另外一种检测括号的方式是：用一个变量 c 表示括号字符串的平衡度：遇到左括号就 +1，遇到右括号就 -1。那么合法字符串等价于任意时刻，c>=0且最后c===0
// 这道题要处理很多剪枝的情况，否则无法通过
var hasValidPath = function (grid) {
    const m = grid.length
    const n = grid[0].length

    const cache = new Map()
    // 处理异常情况
    if ((m + n) % 2 == 0 || grid[0][0] == ')' || grid[m - 1][n - 1] == '(') return false // 剪枝

    return dfs(0, 0, 0)
    // 返回 (i,j) 时合并之后的字符串
    function dfs(i, j, c) {
        const key = `${i},${j},${c}`
        if (c > m - i + n - j - 1) return false; // 剪枝：即使后面都是 ')' 也不能将 c 减为 0

        if (i === m - 1 && j === n - 1) {
            return c === 1
        }

        // 重复访问
        if (cache.has(key)) return false

        c += grid[i][j] === '(' ? 1 : -1
        cache.set(key, 1)
        let a = false
        let b = false
        if (i < m - 1) {
            a = dfs(i + 1, j, c)
        }
        if (j < n - 1) {
            b = dfs(i, j + 1, c)
        }
        if (c < 0) return false
        const ans = a || b

        return ans
    }
};
var grid = [["(", "(", "("], [")", "(", ")"], ["(", "(", ")"], ["(", "(", ")"]]
grid = [[")", ")"], ["(", "("]]
var ans = hasValidPath(grid)
console.log(ans)