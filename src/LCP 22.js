/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var paintingPlan = function(n, k) {
    function paintingPlan(n, k) {
        // 全画和全不画的方案为1
        if (k === n * n || k === 0) return 1;
        // 一行都画不了则为0
        if (k < n) return 0;
        let count = 0;
        // row表示行数，col表示列数
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                // 当所求的黑格数匹配到
                if (k === row * n + col * (n - row)) {
                    count += c(n, row) * c(n, col);
                }
            }
        }
        return count;
    }
    
    // 阶乘数组
    const muls = [];
    
    // 静态初始化
    muls[0] = 1;
    let mul = 1;
    for (let i = 1; i < 7; i++) {
        mul *= i;
        muls[i] = mul;
    }
    
    // C n m表示从n个数中选择m个数有多少选法
    function c(n, m) {
        return muls[n] / (muls[m] * muls[n - m]);
    }
    
    // 示例用法
    console.log(paintingPlan(2, 2)); // 输出：4
    
};