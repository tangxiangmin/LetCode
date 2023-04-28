/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */

var minNumberOfHours = function (
    initialEnergy,
    initialExperience,
    energy,
    experience
) {
    var n = energy.length;
    var ans = 0;
    for (var i = 0; i < n; ++i) {
        if (initialEnergy <= energy[i]) {
            var diff = energy[i] - initialEnergy + 1;
            ans += diff;
            initialEnergy += diff;
        }
        if (initialExperience <= experience[i]) {
            var diff = experience[i] - initialExperience + 1;
            ans += diff;
            initialExperience += diff;
        }

        initialEnergy -= energy[i];
        initialExperience += experience[i];
    }
    return ans;
};

var initialEnergy = 5,
    initialExperience = 3,
    energy = [1, 4, 3, 2],
    experience = [2, 6, 3, 1];

    initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]
var ans = minNumberOfHours(
    initialEnergy,
    initialExperience,
    energy,
    experience
);
console.log(ans);
