/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.capacity = capacity;
    this.data = {};

    this.history = [];
    // this.getIdx = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (this.data[key] == undefined) {
        return -1;
    }

    // this.getIdx++;
    let idx = this.history.indexOf(key);
    if (idx > -1) {
        this.history.splice(idx, 1);
        this.history.push(key);
    }
    return this.data[key];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    let keys = Object.keys(this.data);
    // 超过容量，删除未被使用的键
    if (keys.length == this.capacity) {
        // 最不经常使用的键将会被移除
        let k = this.history.shift();
        delete this.data[k];
        // this.history = this.history.filter((key) => key !== key);
    }

    this.history.push(key);
    this.data[key] = value;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function runTest(method, args) {
    let instance;
    let ans = []

    method.forEach((key, idx) => {
        if (key === "LFUCache") {
            instance = new LFUCache(...args[idx]);
            ans.push(null)
        } else if(key === 'get'){
            ans.push(instance.get(...args[idx]))
        }else {
            instance.put(...args[idx])
            ans.push(null)
        }
    });
    console.log(ans)
}
var a = ["LFUCache","put","put","get","put","get","get","put","get","get","get"]
var b = [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]
// [null,null,null,1,null,-1,3,null,-1,3,4]

a = ["LFUCache","put","put","get","get","get","put","put","get","get","get","get"]
b = [[3],[2,2],[1,1],[2],[1],[2],[3,3],[4,4],[3],[2],[1],[4]]
// [null,null,null,2,1,2,null,null,-1,2,1,4]
runTest(a, b)
