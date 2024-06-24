/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    const map = {}
    const foodMap = {}
    for (const [c, t, f] of orders) {
        if (!map[t]) {
            map[t] = {}
        }
        if (!map[t][f]) map[t][f] = 0
        map[t][f]++
        foodMap[f] = 1
    }

    const foods = Object.keys(foodMap).sort()
    const ans = [['Table', ...foods]]
    for (const t in map) {
        const row = [t]
        for (const f of foods) {
            row.push(`${map[t][f] ?? 0}`)
        }
        ans.push(row)
    }
    return ans
};
var orders = [["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]]
var ans = displayTable(orders)
console.table(ans)