/**
 * Created by admin on 2017/10/2.
 */
// 求二叉树从底向上、从左到右返回的二维数组
// 思考： 二叉树的广度搜索

var levelOrderBottom = function(root) {
    if (!root){
        return [];
    }
    var res = [];

    function dfs(node, lv) {
        if (node){
            // 遍历新增一层
            if (lv === res.length){
                res.push([]);
            }

            res[lv].push(node.val);
            dfs(node.left, lv+1);
            dfs(node.right, lv+1);
        }


    }

    dfs(root, 0);
    return res.reverse();

};