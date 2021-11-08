/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
// 思路，感觉排个序就可以知道最小的操作步骤了
var minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    var len = seats.length
    var ans = 0
    for(var i = 0; i < len; ++i){
        var diff = Math.abs(seats[i] - students[i])
        ans += diff
    }
    return ans
};

var seats = [3,1,5], students = [2,7,4]
seats = [4,1,5,9], students = [1,3,2,6]
seats = [2,2,6,6], students = [1,3,2,6]
var ans = minMovesToSeat(seats, students)
console.log(ans)
