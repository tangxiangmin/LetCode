/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    var map = {};
    for (var ch of tiles) {
        if (!map[ch]) {
            map[ch] = 0;
        }
        map[ch]++;
    }
    var chars = Object.keys(map);

    return dfs(tiles.length) - 1;

    function dfs(i) {
        if (i === 0) return 1;

        var res = 1;
        for (var t of chars) {
            if (map[t] > 0) {
                map[t]--;
                res += dfs(i - 1);
                map[t]++;
            }
        }
        return res;
    }
};

var tiles = "AAB";
var ans = numTilePossibilities(tiles);
console.log(ans);
