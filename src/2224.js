/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    var diff =  calc(correct) -  calc(current)
    var s60 = Math.floor(diff/ 60)
    var s15 = Math.floor(diff % 60 / 15)
    var s5 = Math.floor(diff % 60 % 15 / 5)
    var s1 = diff % 60 % 15 % 5
    return s60 + s15 + s5 + s1

    function calc(time){
        var [h,m] = time.split(':')
        return h * 60 + parseInt(m)
    }
};
var current = "02:30", correct = "04:35"
current = "11:00", correct = "11:01"
var ans = convertTime(current, correct)

console.log(ans)