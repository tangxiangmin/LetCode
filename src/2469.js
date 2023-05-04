/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius + 273.15,  celsius * 1.80 + 32.00]
};

var celsius = 36.50
var ans = convertTemperature(celsius)
console.log(ans)