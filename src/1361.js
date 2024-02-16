/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
// 思路 二叉树的入度和出度相等，除了根节点之外，都有一个入度，有0-2个出度
// 第42个测试用例没跑过，发现0不一定是根节点，编号也不一定要用完，有点蛋疼
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    var input = new Array(n).fill(0)
    var output = []
    walk(leftChild)
    walk(rightChild)

    var root = input.findIndex(i => i === 0)
    if (root === -1) return false

    for (var i = 0; i < n; ++i) {
        // 其他节点只有1个入度
        if (i !== root && input[i] !== 1) {
            return false
        }
    }

    for (var i = 0; i < n; ++i) {
        if (output[i] > 2) {
            return false
        }
    }

    var count = 0
    dfs(root)


    return count === n

    function dfs(index) {
        if (index == -1) {
            return;
        }
        count++;
        dfs(leftChild[index]);
        dfs(rightChild[index]);
    }

    function walk(arr) {
        for (var i = 0; i < arr.length; ++i) {
            var label = arr[i]
            if (label === -1) continue
            if (!input[label]) {
                input[label] = 0
            }
            if (!output[i]) {
                output[i] = 0
            }
            input[label]++
            output[i]++
        }
    }
};

var n = 4, leftChild = [1, -1, 3, -1], rightChild = [2, -1, -1, -1]
n = 4, leftChild = [1, -1, 3, -1], rightChild = [2, 3, -1, -1]
n = 4, leftChild = [3, -1, 1, -1], rightChild = [-1, -1, 0, -1]
// n = 2, leftChild = [1, 0], rightChild = [-1, -1]
n = 4, leftChild = [1, 0, 3, -1], rightChild = [-1, -1, -1, -1]
var ans = validateBinaryTreeNodes(n, leftChild, rightChild)
console.log(ans)

// [2]
// [3, -1]
// [-1, -1]
// [0<->1]