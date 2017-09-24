/**
 * Created by admin on 2017/9/24.
 */
// 计算二叉树每层的平均值
// 广度优先
var averageOfLevels = function(root) {
    if(!root){
        return [];
    }

    var cur = [],
        res = [];
    cur.push(root);
    while (cur.length){
        var n = cur.length; // 这里保证计算完当前层的才会进入下一层
        var sum = 0;
        for (var i = 0; i < n; ++i){
            var node = cur.shift();
            sum += node.val;
            if (node.left){
                cur.push(node.left);
            }
            if (node.right){
                cur.push(node.right);
            }
        }
        res.push(sum/n); // 保存计算结果
    }

    return res;
};