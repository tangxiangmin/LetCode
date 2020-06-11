// 用两个栈实现队列

// 思路：使用stack1和stack2，在入队列的时候，stack1.push(元素)，
// 当出队列时，由于先加入的元素需要先出去，因此可以将stack1的元素依次弹出并push到stack2中
// 此时stack2的栈顶元素就是最先进入队列的元素，直接pop即可
// 至此，就可以完成使用两个栈实现队列的功能
function solution() {
    var stack1 = [];
    var stack2 = [];

    function enqueue(val) {
        stack1.push(val);
    }
    function dequeue() {
        if (!stack2.length) {
            while (stack1.length) {
                stack2.push(stack1.pop());
            }
        }
        return stack2.pop();
    }
    return {
        enqueue,
        dequeue,
    };
}

// 同理，根据这个思路，可以通过两个队列来实现一个栈
function solution(){
    var queue1 = []
    var queue2 = []

    function push(val){
        queue1.push(val)
    }
    function pop(){
        // 轮流使用queue1和queue2
        if(queue1.length) {
            while(queue1.length > 1){
                queue2.push(queue1.shift())
            }
            queue1.shift() // 将 queue1最后的元素删除
        }else if(queue2.length){
            while(queue2.length > 1){
                queue1.push(queue2.shift())
            }
            queue2.shift() // 将 queue2最后的元素删除
        }
    }
     
    return {
        push,
        pop
    }
}
