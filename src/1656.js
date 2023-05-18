
// 这道题出的太难读了

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
    this.list = new Array(n + 1);
    this.ptr = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
    this.list[idKey] = value;
    var ans = [];
    for (var i = this.ptr; i < this.list.length; ++i) {
        if (this.list[i]) {
            ans.push(this.list[i]);
            this.ptr = i + 1;
        } else {
            break;
        }
    }
    return ans;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
var os = new OrderedStream(5);
console.log(os.insert(3, "ccccc")); // 插入 (3, "ccccc")，返回 []
console.log(os.insert(1, "aaaaa")); // 插入 (1, "aaaaa")，返回 ["aaaaa"]
console.log(os.insert(2, "bbbbb")); // 插入 (2, "bbbbb")，返回 ["bbbbb", "ccccc"]
console.log(os.insert(5, "eeeee")); // 插入 (5, "eeeee")，返回 []
console.log(os.insert(4, "ddddd")); // 插入 (4, "ddddd")，返回 ["ddddd", "eeeee"]
