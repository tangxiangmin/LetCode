/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function (documents) {
    const map = {}
    for (const id of documents) {
        if (map[id]) {
            return id
        }
        map[id] = 1
    }
};