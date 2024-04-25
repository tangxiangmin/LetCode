/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (positive_feedback, negative_feedback, report, student_id, k) {
    const words = {};
    for (const word of positive_feedback) {
        words[word] = 3;
    }
    for (const word of negative_feedback) {
        words[word] = -1;
    }
    const A = [];
    for (let i = 0; i < report.length; i++) {
        let score = 0;
        for (const word of report[i].split(" ")) {
            score += words[word] || 0;
        }
        A.push([-score, student_id[i]]);
    }

    A.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    return A.slice(0, k).map(([, i]) => i);
};
var positive_feedback = ["smart", "brilliant", "studious"], negative_feedback = ["not"], report = ["this student is studious", "the student is smart"], student_id = [1, 2], k = 2
positive_feedback = ["smart", "brilliant", "studious"], negative_feedback = ["not"], report = ["this student is not studious", "the student is smart"], student_id = [1, 2], k = 2
positive_feedback = ["fkeofjpc", "qq", "iio"], negative_feedback = ["jdh", "khj", "eget", "rjstbhe", "yzyoatfyx", "wlinrrgcm"], report = ["rjstbhe eget kctxcoub urrmkhlmi yniqafy fkeofjpc iio yzyoatfyx khj iio", "gpnhgabl qq qq fkeofjpc dflidshdb qq iio khj qq yzyoatfyx", "tizpzhlbyb eget z rjstbhe iio jdh jdh iptxh qq rjstbhe", "jtlghe wlinrrgcm jnkdbd k iio et rjstbhe iio qq jdh", "yp fkeofjpc lkhypcebox rjstbhe ewwykishv egzhne jdh y qq qq", "fu ql iio fkeofjpc jdh luspuy yzyoatfyx li qq v", "wlinrrgcm iio qq omnc sgkt tzgev iio iio qq qq", "d vhg qlj khj wlinrrgcm qq f jp zsmhkjokmb rjstbhe"], student_id =
    [96537918, 589204657, 765963609, 613766496, 43871615, 189209587, 239084671, 908938263], k = 3 //[239084671,589204657,43871615]
var ans = topStudents(positive_feedback, negative_feedback, report, student_id, k)

console.log(ans)