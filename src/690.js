/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    var map = employees.reduce((acc, row) => {
        acc[row.id] = row
        return acc
    }, {})

    var ans = 0
    function calc(id) {
        var target = map[id]
        if (!target) return
        ans += target.importance
        target.subordinates.forEach(sub => {
            calc(sub)
        })
    }
    calc(id)
    return ans
};