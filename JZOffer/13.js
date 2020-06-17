// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。请问该机器人能够达到多少个格子？

// 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。

// 思路，从0,0开始通过回溯统计所有可以到达的地方
function solution(m, n, k) {
    // 记录是否访问到某个坐标
    var visited = new Array(m);
    for (var i = 0; i < m; ++i) {
        visited[i] = new Array(n).fill(false);
    }
    var ans = 0;
    walk(0, 0)
    return ans
    function walk(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) return;
        if(visited[i][j]) return  
        if (!check(i, j)) return;
        visited[i][j] = true
        ans++;
        walk(i + 1, j);
        walk(i - 1, j);
        walk(i, j + 1);
        walk(i, j - 1);
    }

    function check(i, j) {
        let arr = [...i.toString(), ...j.toString()];
        let sum = arr.reduce((acc, item) => {
            return acc + parseInt(item, 10);
        }, 0);
        return sum <= k;
    }
}


// 总结：通常物体或人在二维放个运动这里问题都可以通过回溯法解决