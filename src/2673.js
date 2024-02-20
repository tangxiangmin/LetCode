/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
// 思路，优先在靠上面的子节点操作，让左右节点的值相等，影响的路径更多，可以得到最少次数的操作，因此使用后序遍历
// 每个节点保存经过根节点到他的路径和

var minIncrements = function (n, cost) {

    var res = 0
    function dfs(x) {
        var L = x * 2;
        var R = x * 2 + 1;
        // 叶子节点
        if (L > n) {
            console.log(x)
            return cost[x - 1]; //设置递归出口
        }
        //表示当x为叶节点时其为根节点的子树的路径为其结点的代价本身
        var a = dfs(L);
        var b = dfs(R); //计算其左右结点到达叶节点的路径值
        res = res + Math.abs(a - b); //表示在a,b不同时需要的操作数
        return Math.max(a, b) + cost[x - 1]; //表示x结点到达根结点的路径值
    }
    dfs(1)
    return res

};
// todo 可以再写个明白一点的写法

var n = 7, cost = [1, 5, 2, 2, 3, 3, 1]
var ans = minIncrements(n, cost)
console.log('===')
console.log(ans)