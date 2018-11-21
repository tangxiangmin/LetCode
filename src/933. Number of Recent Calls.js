// 实现一个计时器
var RecentCounter = function () {
    this.record = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    if(t > 0){
        this.record.push(t)
    }
    let count = 0
    for(let i = 0; i < this.record.length; ++i){
        let time = this.record[i]
        if(t - time < 3000){
            count++
        }
    }
    return count > 0 ? count : null;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */