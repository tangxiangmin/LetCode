/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    var arr = title.split(" ");
    return arr
        .map((word) => {
            if (word.length <= 2) {
                return word.toLowerCase();
            }
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        })
        .join(" ");
};

var title = "capiTalIze tHe titLe";
var ans = capitalizeTitle(title);
console.log(ans);
