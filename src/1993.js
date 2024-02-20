/**
 * @param {number[]} parent
 */
var LockingTree = function (parent) {

    this.root = 0
    this.parent = parent
    this.locked = {}

    let childrenMap = {}
    for (var i = 1; i < parent.length; ++i) {
        var p = parent[i]
        if (!Array.isArray(childrenMap[p])) {
            childrenMap[p] = []
        }
        childrenMap[p].push(i)
    }
    this.childrenMap = childrenMap
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function (num, user) {
    var record = this.locked[num]
    if (record) {
        return false
    }
    this.locked[num] = user
    return true
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function (num, user) {
    var record = this.locked[num]
    if (record === user) {
        this.locked[num] = undefined
        return true
    }
    return false
};

LockingTree.prototype.findLockedChild = function (n) {
    var children = this.childrenMap[n]
    if (this.isNodeLocked(n)) {
        return true
    }
    if (Array.isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
            var child = children[i]
            if (this.findLockedChild(child)) {
                return true
            }
        }
    }
    return false
}
LockingTree.prototype.isNodeLocked = function (n) {
    var record = this.locked[n]
    return !!record
}
LockingTree.prototype.findLockedParent = function (n) {
    if (n === -1) return false
    var p = this.parent[n]
    if (this.isNodeLocked(p)) {
        return true
    }
    return this.findLockedParent(p)
}
/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function (num, user) {
    if (this.isNodeLocked(num)) return false  // 节点不能上锁
    if (this.findLockedParent(num)) return false // 父节点不能上锁
    if (!this.findLockedChild(num)) return false // 存在上锁的子节点

    this.lock(num, user)

    const dfs = (n) => {
        var children = this.childrenMap[n]
        if (Array.isArray(children)) {
            for (var i = 0; i < children.length; ++i) {
                var child = children[i]
                this.locked[child] = undefined
                dfs(child)
            }
        }
    }
    dfs(num)
    return true
};

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */