/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    var cur = 1;
    var idx = 0;
    var ans = new Array(num_people).fill(0);
    while (candies > 0) {
        ans[idx] += Math.min(cur, candies);
        candies -= cur;
        cur++;

        idx++;
        if (idx === num_people) {
            idx = 0;
        }
    }

    return ans;
};
console.log(distributeCandies(7, 4))