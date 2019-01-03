/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
    function bfs(){
        if(!root){
            return 0
        }
        let arr = [root]
        let d = 0
        while(arr.length){
            let len = arr.length
            for(let i = 0; i< len; ++i){
                let node = arr.shift()
                if(node.left){
                    arr.push(node.left)
                }
                if(node.right){
                    arr.push(node.right)
                }
            }
            d++;
        }
        return d
    }
    bfs(root)

    // dfs
    function findDepth(root){
        if(!root){
            return 0
        }
        let left = findDepth(root.left)
        let right = findDepth(root.right)
        return left < right ? right + 1 : left +1;
    }

    let depth = findDepth(root)

    let col = Math.pow(2, depth) - 1;
    let res = [];
    for(let i = 0; i < depth; ++i){
        res[i] = []
        for(let j = 0; j < col; ++j){
            res[i].push("")
        }
    }

    function fillMatrix(matrix, root, row, start ,width) {
        if (!root){
            return;
        }

        let mid = Math.floor((start + width) / 2);
        matrix[row][mid] = root.val + ""

        fillMatrix(matrix, root.left, row + 1, start, mid - 1)
        fillMatrix(matrix, root.right, row + 1, mid + 1, width)
    }
    fillMatrix(res, root, 0, 0, col - 1);
    return res
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

//         1
//     2       3
// 4
printTree(root);