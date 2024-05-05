// // 实现一个计时器
// var RecentCounter = function () {
//     this.record = []
// };

// /** 
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function (t) {
//     if(t > 0){
//         this.record.push(t)
//     }
//     let count = 0
//     for(let i = 0; i < this.record.length; ++i){
//         let time = this.record[i]
//         if(t - time < 3000){
//             count++
//         }
//     }
//     return count > 0 ? count : null;
// };


var RecentCounter = function () {
    this.arr = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {

    while (this.arr.length && this.arr[0] < t - 3000) {
        this.arr.shift()
    }

    this.arr.push(t)

    return this.arr.length
};