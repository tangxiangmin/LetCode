/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
// 答案包括，以target为祖先节点的距离为K的后代节点，以及target父节点的距离为K-1其他子节点
var distanceK = function(root, target, K) {
    if (!root) return [];
    let ans = [];

    // 1.找到以target为祖先节点的元素
    findNode(target, K);

    // 2.向上找到与target有公共父节点的元素

    let child = target
    while (K > 0) {
        K--;
        // todo 这里可以把祖先元素的路径找出来
        let parent = findNodeParent(root, child);
        const {left, right} = parent
        if(K ==0 && parent) {
            ans.push(parent.val)
        }else if(left === child) {
            findNode(right, K-1);
        }else if(right === child){
            findNode(left, K-1);
        }
        child = parent

        if(parent === root) break
    }
    return ans;

    function findNode(node, deep) {
        if (!node) return;
        if (deep === 0) {
            ans.push(node.val);
            return;
        }
        const { left, right } = node;
        findNode(left, deep - 1)
        findNode(right, deep - 1)
    }

    function findNodeParent(node, target) {
        if (!node) {
            return false;
        }
        const { left, right } = node;

        if (left == target || right == target)  return node;
        return findNodeParent(left, target) || findNodeParent(right, target)
    }
};


//         0
//      1      5
//    2   4  8
//  3    6  7

// [3,2,1,0]


// [0,1,null,3,2] 2 1
//   0
//  1 
// 3 2