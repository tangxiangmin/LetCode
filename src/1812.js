/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    var col = coordinates[0];
    var row = coordinates[1];
    if (col.charCodeAt(0) % 2) {
        return row % 2 === 0;
    } else {
        return row % 2 === 1;
    }
};

var coordinates = "a1"
var ans = squareIsWhite(coordinates)
console.log(ans)