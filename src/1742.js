    /**
     * @param {number} lowLimit
     * @param {number} highLimit
     * @return {number}
     */
    var countBalls = function (lowLimit, highLimit) {
        var map = {};
        var maxKey = "";
        for (var i = lowLimit; i <= highLimit; ++i) {
            const key = findKey(i);
            if (!map[key]) {
                map[key] = 0;
            }
            map[key]++;
            if (!maxKey || map[maxKey] < map[key]) {
                maxKey = key;
            }
        }
        return map[maxKey];

        function findKey(i) {
            return i
                .toString()
                .split("")
                .reduce((acc, ch) => {
                    return acc + parseInt(ch);
                }, 0);
        }
    };
var lowLimit = 1,
    highLimit = 10;
var ans = countBalls(lowLimit, highLimit);
console.log(ans);
