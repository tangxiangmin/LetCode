/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
// bfs
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
    const queue = [id]
    let cnt = 0
    const n = watchedVideos.length
    const used = new Array(n).fill(0)
    used[id] = 1
    while (queue.length) {
        if (cnt === level) {
            break
        }

        const len = queue.length
        for (let i = 0; i < len; ++i) {
            const f = queue.shift()
            for (const next of friends[f]) {
                if (used[next]) continue
                queue.push(next)
                used[next] = 1
            }
        }
        cnt++
    }
    const map = {}
    for (const i of queue) {
        for (const v of watchedVideos[i]) {
            if (!map[v]) map[v] = 0
            map[v]++
        }
    }

    return Object.keys(map).sort((a, b) => {
        if (map[a] === map[b]) {
            return a < b ? -1 : 1
        }
        return map[a] - map[b]
    })
}
var watchedVideos = [["A", "B"], ["C"], ["B", "C"], ["D"]], friends = [[1, 2], [0, 3], [0, 3], [1, 2]], id = 0, level = 1
watchedVideos = [["A", "B"], ["C"], ["B", "C"], ["D"]], friends = [[1, 2], [0, 3], [0, 3], [1, 2]], id = 0, level = 2
var ans = watchedVideosByFriends(watchedVideos, friends, id, level)
console.log(ans)