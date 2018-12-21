/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    let res = []
    function dfs(root) {
        let sum = 0;
        if (!root) {
            return sum
        }
        sum += root.val
        sum += dfs(root.left);
        sum += dfs(root.right)

        res.push(sum)
        return sum
    }

    dfs(root)
    let hashMap = {}
    for (let i = 0; i < res.length; ++i) {
        let key = res[i]

        if (!hashMap[key]) {
            hashMap[key] = 0
        }

        hashMap[key]++
    }

    let max = 0;
    let ans = [];
    for (let key in hashMap) {
        let val = hashMap[key]
        if (val === max) {
            ans.push(key)
        } else if (val > max) {
            max = val
            ans = [key]
        }
    }
    return ans
};