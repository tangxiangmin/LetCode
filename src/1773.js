/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    return items.filter((item) => {
        const [type, color, name] = item;
        return {type, color, name}[ruleKey] === ruleValue;
    }).length;
};
