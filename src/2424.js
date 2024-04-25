/**
 * @param {number} n
 */
var LUPrefix = function (n) {
    this.arr = new Array(n).fill(0)
    this.x = 0
};

/** 
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function (video) {
    this.arr[video - 1] = 1
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function () {
    const n = this.arr.length
    let i = this.x
    for (; i < n; ++i) {
        if (this.arr[i] === 0) {
            break
        }
    }
    this.x = i
    return i

};

/**
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */