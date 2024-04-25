/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {

    const n = foods.length
    this.foodRate = {}
    this.map = {}
    for (let i = 0; i < n; ++i) {
        const cuisine = cuisines[i]
        const obj = {
            name: foods[i],
            cuisine,
            rate: ratings[i]
        }
        this.foodRate[foods[i]] = obj
        if (!this.map[cuisine]) {
            this.map[cuisine] = []
        }
        this.map[cuisine].push(obj)
    }

};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
    this.foodRate[food].rate = newRating
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
// function compare(a, b) {
//     let i = 0
//     while (i < a.length && i < b.length && a[i] == b[i]) {
//         i++
//     }
//     if (i === a.length) return true
//     if (i === b.length) return false
//     return a[i] > b[i]

// }
FoodRatings.prototype.highestRated = function (cuisine) {
    const list = this.map[cuisine]
    let max = 0
    let target = null
    for (const o of list) {
        if (o.rate > max) {
            max = o.rate
            target = o
        } else if (o.rate === max && target && target.name > o.name) {
            target = o
        }
    }
    return target.name
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */