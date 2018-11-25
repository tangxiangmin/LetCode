// 实现hashMap

/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.keys = []
    this.values = []
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    let index = this.keys.indexOf(key)
    if(index > -1){
        this.values[index] = value
    }else {
        this.keys.push(key)
        this.values[this.keys.length - 1] = value
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    let index = this.keys.indexOf(key)
    if (index > -1) {
        return this.values[index]
    }else {
        return -1
    }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    let index = this.keys.indexOf(key);
    if(index > -1){
        this.keys.splice(index, 1);
        this.values.splice(index, 1);
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */