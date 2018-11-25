// 求BST中节点值只差最小值

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {

    function inOrder(node, res){
        if(!node){
            return
        }
        inOrder(node.left, res);
        res.push(node.val)
        inOrder(node.right, res)
    }
    function findArrMin(arr){
        let min = arr[1] - arr[0];
        min = Infinity;
        for (let i = 0; i < arr.length - 1; ++i) {
            for (let j = i+1; j < arr.length; ++j) {
                let diff = Math.abs(arr[i] - arr[j]);
                min = Math.min(diff, min);
            }
        }
        return min
    }

    
    let nodes = []
    inOrder(root, nodes)
    return findArrMin(nodes)
};
minDiffInBST()