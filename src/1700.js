/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    var count = 0;
    while (students.length) {
        var first = students.shift();
        if (first !== sandwiches[0]) {
            students.push(first);
            count++;
        } else {
            count = 0;
            sandwiches.shift(); // 拿走
        }

        if (count === students.length) {
            return students.length;
        }
    }
    return 0;
};
var students = [1, 1, 0, 0],
    sandwiches = [0, 1, 0, 1];
(students = [1, 1, 1, 0, 0, 1]), (sandwiches = [1, 0, 0, 0, 1, 1]);
(students = [1, 1]), (sandwiches = [0, 1]);

var ans = countStudents(students, sandwiches);
console.log(ans);
