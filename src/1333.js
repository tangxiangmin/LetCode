/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (restaurants, veganFriendly, maxPrice, maxDistance) {

    let arr = restaurants
    if (veganFriendly === 1) {
        arr = restaurants.filter(row => row[2] === 1)
    }

    const list = arr.filter(row => {
        const [_1, _2, _3, p, d] = row
        return p <= maxPrice && d <= maxDistance
    })
    list.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0]
        }
        return b[1] - a[1]
    })
    return list.map((row) => row[0])
};