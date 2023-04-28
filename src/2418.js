/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    var list = heights.map((h, i) => {
        return { name: names[i], height: h };
    });
    return list.sort((a, b) => b.height - a.height).map((row) => row.name);
};

var names = ["Mary", "John", "Emma"],
    heights = [180, 165, 170];

    names = ["Mary","John","Emma"]
heights = [180,165,170]
var ans = sortPeople(names, heights);

console.log(ans)