/**
 * @param {number} capacity
 */
// 这道题要写对确实不容易，通过双链表+哈希表实现，额外添加一个head和tail虚拟节点，避免对节点进行空判断，让代码看起来更简单
var LRUCache = function (capacity) {
    this.capacity = capacity

    this.head = new ListNode(-1)
    this.tail = new ListNode(-1)

    this.head.next = this.tail
    this.tail.prev = this.head

    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) {
        return -1
    }
    const node = this.map.get(key)
    this.moveToHead(node)
    return this.map.get(key).val[1]
};

LRUCache.prototype.moveToHead = function (node) {
    const { prev, next } = node
    prev.next = next
    next.prev = prev

    node.next = this.head.next
    this.head.next.prev = node

    this.head.next = node
    node.prev = this.head
}

LRUCache.prototype.removeOld = function () {
    const last = this.tail.prev
    const { prev, next } = last
    prev.next = next
    next.prev = prev
    const key = last.val[0]
    this.map.delete(key)
}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// 超出容量时，移除的是最久未被使用的key，不是最先插入进来的key
// 由于每次访问key的时候都将节点挪动到了最后面，因此只需要删除最前面的节点即可
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        node.val = [key, value]
        this.moveToHead(node)
    } else {
        const node = new ListNode([key, value])
        this.map.set(key, node)

        node.next = this.head.next
        this.head.next.prev = node

        this.head.next = node
        node.prev = this.head

        // 要判断是否超出容量
        if (this.map.size > this.capacity) {
            this.removeOld()
        }
    }
};

const { ListNode, flattenLinkList } = require('../libs/linkList')
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// 1、2
// 2、1
// 1、3
// 3、4

let ins
function runWithCls(m, params) {
    let res = []
    for (let i = 0; i < m.length; ++i) {
        if (i == 0) {
            ins = new LRUCache(params[i][0])
        } else {
            res.push(ins[m[i]].apply(ins, params[i]))
            console.log(JSON.stringify(flattenLinkList(ins.head)))
        }
    }
    console.log(res)
}

// runWithCls(["LRUCache", "put", "put", "get", "put", "put", "get"], [[2], [2, 1], [2, 2], [2], [1, 1], [4, 1], [2]])
runWithCls(["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"], [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]])


