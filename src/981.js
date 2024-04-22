
var TimeMap = function () {

    this.map = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.map[key]) {
        this.map[key] = []
    }
    this.map[key].push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
// 本质上是找到map[key]中时间戳小于等于timestamp的右边界
TimeMap.prototype.get = function (key, timestamp) {
    const arr = this.map[key]
    if (!arr) return ''
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
        const mid = (l + r) >> 1
        const [v, t] = arr[mid]
        if (t > timestamp) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    if (!arr[r]) return ''
    const [v, t] = arr[r]
    if (t > timestamp) {
        return ''
    }
    return v
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

const { runClass } = require('../libs/klass')


var a = ["TimeMap", "set", "set", "get", "get", "get", "get", "get"]
var p = [[], ["love", "high", 10], ["love", "low", 20], ["love", 5], ["love", 10], ["love", 15], ["love", 20], ["love", 25]]
runClass(TimeMap, a, p)