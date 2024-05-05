/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
// 这个貌似有点像卡坦岛和围棋
// 要确保胜利，需要找到相连节点大于x那个节点关联的节点数量
var btreeGameWinningMove = function (root, n, x) {

    dfs(root)

    let ans = false
    check(root)
    return ans

    function dfs(node) {
        if (!node) return 0
        node.cnt = dfs(node.left) + dfs(node.right) + 1
        return node.cnt
    }

    function check(node) {
        if (!node) return
        if (node.val === x) {
            ans = n - node.cnt > node.cnt || (node.left && node.left.cnt > n - node.left.cnt) || (node.right && node.right.cnt > n - node.right.cnt)
            return

        }
        check(node.left)
        check(node.right)
    }
};

const { createBinaryTree } = require('../libs/tree')

var root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], n = 11, x = 3
const node = createBinaryTree(root)
var ans = btreeGameWinningMove(node, n, x)
console.log(ans)