/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    var lines = {};

    for (var i = 0; i < rings.length; i += 2) {
        var color = rings[i];
        var idx = rings[i + 1];
        if (!lines[idx]) {
            lines[idx] = {
                R: 0,
                G: 0,
                B: 0,
            };
        }
        lines[idx][color]++;
    }
    var ans = 0
    Object.values(lines).forEach(line=>{
        if(line.R && line.G && line.B){
            ans++
        }
    })
    return ans
};

var rings = "B0B6G0R6R0R6G9";

var ans = countPoints(rings);

console.log(ans);
