/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function (records) {
    for (var i = 0; i < records.length; ++i) {
        var cur = records[i]
        if (cur !== i + 1) {
            return i + 1
        }
    }
    return records.length + 1
};

var records = [1, 2, 3]
console.log(takeAttendance(records))