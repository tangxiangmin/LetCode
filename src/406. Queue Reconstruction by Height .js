/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    people.sort(function(a, b){
        return b[0]-a[0] || a[1] - b[1]
    })
    var res = [] 
    for(let i = 0; i < people.length; ++i){
        let [h, k] = people[i];
        let j = 0;

        let count = 0
        for(; j < res.length; ++j){
            let [h0, k0] = res[j];

            if (count === k && h < h0) {
                break
            }else if(h0 >= h){
                count++
            }
        }

        res.splice(j, 0, people[i])
    }
    return res
};

var input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
reconstructQueue(input)
// [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]