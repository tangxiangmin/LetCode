/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// 思路，根据先序遍历和每个节点的深度还原二叉树
// 由于先序遍历先访问根节点->左节点->右节点，由于题目限制只有一个节点时必定为左节点
var recoverFromPreorder = function (S) {
    var arr = [];
    var dash = 0;
    var num = "";

    for (var i = 0; i < S.length; ++i) {
        var ch = S[i];
        var next = S[i + 1];
        if (ch !== "-") {
            num += ch;
            if (next === "-" || !next) {
                arr.push({
                    val: parseInt(num, 10),
                    deep: dash,
                });
                num = "";
                dash = 0;
            }
        } else {
            dash++;
        }
    }
    // 先序遍历节点
    return buildTree(arr);

    function buildTree(arr) {
        if (!arr || !arr.length) return null;
        var root = new TreeNode(arr[0].val);
        var next = arr[1];
        if (!next) return root;
        const { deep } = next;
        // 根据层级区分左右子树
        var index = 2;
        var hasRight = false
        for (var i = 2; i < arr.length; ++i) {
            if (arr[i].deep === deep) {
                index = i;
                hasRight = true
                break;
            }
        }
        if(hasRight) {
            var leftArr = arr.slice(1, index);
            var rightArr = arr.slice(index);
    
            root.left = buildTree(leftArr);
            root.right = buildTree(rightArr);
        }else {
            // 只有单节点的话，根据提议为左子树
            var leftArr = arr.slice(1)
            root.left = buildTree(leftArr);
            root.right = null
        }

        return root
    }
};

var S = "1-2--3--4-5--6--7";
S = "1-2--3---4-5--6---7"
var res = recoverFromPreorder(S);
console.log(res);
