/**
 * @param {number[]} stock
 * @return {number}
 */
var inventoryManagement = function (stock) {
    const map = {}
    for (const id of stock) {
        if (!map[id]) map[id] = 0
        map[id]++
        if (map[id] > stock.length / 2) {
            return id
        }
    }
};