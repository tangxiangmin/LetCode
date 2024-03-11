/**
 * @param {string} input
 * @return {number}
 */
// 思路，先将input转成树，再求最长路径
var lengthLongestPath = function (input) {

    const list = input.split('\n').map(row => {
        let deep = 0
        while (row[deep] === '\t') {
            deep++
        }
        return [deep, row.substring(deep)]
    })
    list.unshift([-1, ""])

    let ans = 0
    function dfs(i, path) {
        const [deep, name] = list[i]
        if (isFile(name)) {
            const fullPath = path + (path ? '/' : '') + name
            console.log(fullPath)
            if (ans < fullPath.length) {
                ans = fullPath.length
            }
            return
        }
        const children = findNextChildren(i)
        for (const child of children) {
            dfs(child, path + (path ? '/' : '') + name)
        }
    }
    const entryList = findNextChildren(0)

    for (const entry of entryList) {
        dfs(entry, "")
    }

    return ans

    function isFile(name) {
        return name.includes('.')
    }
    function findNextChildren(index) {
        let [deep] = list[index]
        let i = index + 1
        let ans = []
        for (; i < list.length; ++i) {
            const cur = list[i]
            if (cur[0] === deep + 1) {
                ans.push(i)
            }
            if (cur[0] === deep) {
                break
            }
        }
        return ans
    }
};

var input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
input = "file1.txt\nfile2.txt\nlongfile.txt"
var ans = lengthLongestPath(input)
console.log(ans)