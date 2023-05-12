/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    var x = 0;
    var y = 0;
    var map = { [getKey()]: true };
    for (var dir of path) {
        if (dir === "N") {
            y++;
        } else if (dir === "S") {
            y--;
        } else if (dir === "E") {
            x++;
        } else if (dir === "W") {
            x--;
        }
        var key = getKey();
        if (map[key]) return true;
        map[key] = true;
    }
    return false;
    function getKey() {
        return `x${x}y${y}`;
    }
};

var path = "NES";
path = "NESWW";
var ans = isPathCrossing(path);
console.log(ans);
