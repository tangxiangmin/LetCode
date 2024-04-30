/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
    const g = {}
    const inDegrees = {}
    const recipeMap = {}
    for (let i = 0; i < ingredients.length; ++i) {
        const recipe = recipes[i]
        recipeMap[recipe] = 1
        inDegrees[recipe] = 0
        for (const item of ingredients[i]) {
            if (!g[item]) g[item] = []
            g[item].push(recipe)
            inDegrees[recipe]++
        }
    }
    const ans = []
    const visited = []
    while (supplies.length) {
        const node = supplies.shift()
        if (visited[node]) continue
        visited[node] = 1
        if (recipeMap[node]) {
            ans.push(node)
        }
        if (!Array.isArray(g[node])) continue

        for (const next of g[node]) {
            if (inDegrees[next]) {
                inDegrees[next]--
            }
            if (inDegrees[next] === 0) {
                supplies.push(next)
            }
        }
    }
    return ans
};
var recipes = ["bread"], ingredients = [["yeast", "flour"]], supplies = ["yeast", "flour", "corn"]
recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast"]
var ans = findAllRecipes(recipes, ingredients, supplies)
console.log(ans)