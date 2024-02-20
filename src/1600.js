/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
    this.root = kingName
    this.childrenMap = {}
    this.parentMap = {}
    this.deadMap = {}
    this.curOrder = []
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
    if (!this.childrenMap[parentName]) {
        this.childrenMap[parentName] = []
    }
    this.childrenMap[parentName].push(childName)
    this.parentMap[childName] = parentName
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
    this.deadMap[name] = true
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {
    var curOrder = [this.root]
    var curOrderMap = { [this.root]: true }
    const successor = (x) => {
        var children = this.childrenMap[x]
        if (!Array.isArray(children) || !children.length || children.every((child) => {
            return curOrderMap[child]
        })) {
            if (x === this.root) return null
            return successor(this.parentMap[x])
        }
        return children.find(child => {
            return !curOrderMap[child]
        })
    }
    while (curOrder[curOrder.length - 1]) {
        var next = successor(curOrder[curOrder.length - 1])
        curOrderMap[next] = true
        curOrder.push(next)
    }
    return curOrder.filter(name => {
        return name && !this.deadMap[name]
    })
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */