/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    const order = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            order[i][preferences[i][j]] = j;
        }
    }
    console.table(order)
    const match = new Array(n).fill(0);
    for (const pair of pairs) {
        let person0 = pair[0], person1 = pair[1];
        match[person0] = person1;
        match[person1] = person0;
    }
    console.log(match)
    let unhappyCount = 0;
    for (let x = 0; x < n; x++) {
        const y = match[x];
        const index = order[x][y];
        for (let i = 0; i < index; i++) {
            const u = preferences[x][i];
            const v = match[u];
            if (order[u][x] < order[u][v]) {
                unhappyCount++;
                break;
            }
        }
    }
    return unhappyCount;
};


var n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
var ans = unhappyFriends(n, preferences, pairs)
console.log(ans)