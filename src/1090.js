/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
// 注意value相同的label不一定相同
var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
    var len = values.length;
    var valuesWithLabel = values.map((val, i) => {
        return {
            val,
            label: labels[i],
        };
    });

    valuesWithLabel.sort((a, b) => b.val - a.val);

    var ans = 0;
    var labelCount = {};
    for (var i = 0; i < len; ++i) {
        var { val, label } = valuesWithLabel[i];
        if (!labelCount[label]) {
            labelCount[label] = 0;
        }

        if (labelCount[label] < useLimit) {
            labelCount[label]++;
            ans += val;
            numWanted--;
            if (numWanted === 0) {
                return ans;
            }
        }
    }
    return ans;
};

var values = [5, 4, 3, 2, 1],
    labels = [1, 1, 2, 2, 3],
    num_wanted = 3,
    use_limit = 1;

(values = [5, 4, 3, 2, 1]),
    (labels = [1, 3, 3, 3, 2]),
    (num_wanted = 3),
    (use_limit = 2);
(values = [9, 8, 8, 7, 6]),
    (labels = [0, 0, 0, 1, 1]),
    (num_wanted = 3),
    (use_limit = 1);
(values = [9, 8, 8, 7, 6]),
    (labels = [0, 0, 0, 1, 1]),
    (num_wanted = 3),
    (use_limit = 2);

(values = [3, 2, 3, 2, 1]),
    (labels = [1, 0, 2, 2, 1]),
    (num_wanted = 2),
    (use_limit = 1);
var ans = largestValsFromLabels(values, labels, num_wanted, use_limit);
console.log(ans);
