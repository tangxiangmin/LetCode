
var StockSpanner = function() {
    this.data = []
    this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 * 暴力解法：会超时
 */
StockSpanner.prototype.next = function(price) {
    var arr = this.data
    arr.push(price)
    var ans = 0
    for(var i = arr.length - 1; i >=0; --i){
        if(arr[i] > price){
            break
        }
        ans++
    }
    return ans
};

// 使用单调栈
StockSpanner.prototype.next = function(price) {
    var arr = this.data
    var stack = this.stack

    arr.push(price)

    var i = arr.length
    // 保存一个递增栈，当插入新元素时，与栈顶元素做比较并依次弹出，找到第一个大于当前元素的索引值，返回结果
    while(stack.length && arr[stack[stack.length - 1]] <= price){
        stack.pop()
    }
    var ans = i - (stack.length ? stack[stack.length - 1] + 1 : 0)
    stack.push(i-1)
    return ans
};
// 输入 [100, 80, 60, 70, 60, 75, 85]
// 输出 [1, 1, 1, 2, 1, 4, 6]
// [100] [100, 80] [100, 80, 60] [100, 80, 70] [100,80,60] [100,80,75] [100,85]

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */