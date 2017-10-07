/**
 * Created by admin on 2017/10/7.
 */
// 找到BST的mode(出现频率最高的元素)
// 思路：遍历树，通过哈希表保存
var findMode = function(root) {

    var map = {};
    function inorder(node) {
        if (node){
            inorder(node.left)

            var val = node.val;
            if (typeof map[val] === 'undefined'){
                map[val] = 0;
            }
            map[val]++;

            inorder(node.right);
        }
    }
    inorder(root);
    var max = 0,
        res = [];
    for (var key in map){
        var val = map[key];
        key -= 0 ;
        if (max < val){
            max = val;
            res = [key]
        }else if(max === val){
            res.push(key);
        }
    }

    return res;
};