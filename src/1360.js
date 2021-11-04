/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
// 跟1154看起来比较像
var daysBetweenDates = function (date1, date2) {
    const diff = new Date(date1) - new Date(date2);
    return Math.abs(diff / (24 * 60 * 60 * 1000));
};
