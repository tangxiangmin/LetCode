/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    var ans = 0;
    for (var row of details) {
        var age= getAge(row) 
        if (age> 60) {
            ans++;
        }
    }
    return ans;

    function getAge(row) {
        return Number(row.substr(11, 2));
    }
};

var details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];
var ans = countSeniors(details);
console.log(ans);
