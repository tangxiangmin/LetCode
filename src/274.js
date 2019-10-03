/**
 * @param {number[]} citations
 * @return {number}
 * 本题的中文翻译有误，最后采用评论区的某个
 */
var hIndex = function (citations) {
    // 0 1 3 5 6
    citations.sort((a, b) => a - b);

    // 当h=5时，说明第一篇论文的引用次数就应该大于等于5
    // 若不大于5，我们尝试h=4，那就要求第二篇论文引用次数大于等4（这样第2，3，4，5篇论文都大于等于4）
    for (var res = citations.length; res > 0; res--) {
        if (citations[citations.length - res] >= res)
            return res;
    }
    return 0;
};

var citations = [3, 0, 6, 1, 5]
// citations = [1, 1]
var res = hIndex(citations)
console.log(res)