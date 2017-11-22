// 实现一个book方法，判断在指定的区间是否存在交集

var MyCalendarTwo = function () {
    this.data = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
    this.data.push(start)
    this.data.push(end);
    this.data.sort((a,b)=>{a-b});

    if (this.data.indexOf(start) === this.data.indexOf(end) - 1){
        return true
    }
    return false;
};