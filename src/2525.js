/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */

var categorizeBox = function (length, width, height, mass) {
    var bulky =
        [length, width, height].some((row) => row >= Math.pow(10,4)) ||
        length * width * height >= Math.pow(10, 9);
    var heavy = mass >= 100;

    if (bulky && heavy) {
        return "Both";
    }
    if (!bulky && !heavy) {
        return "Neither";
    }
    if (bulky && !heavy) {
        return "Bulky";
    }
    if (heavy && !bulky) {
        return "Heavy";
    }
};
var length = 1000,
    width = 35,
    height = 700,
    mass = 300;
    length = 200, width = 50, height = 800, mass = 50
var ans = categorizeBox(length, width, height, mass);
console.log(ans)