/**
 * @param {number} capacity
 */
// 跟146的题一样，完全写对不容易
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