/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    const createItem = (max) => {
        return { max, list: [] };
    };
    this.map = {
        1: createItem(big),
        2: createItem(medium),
        3: createItem(small),
    };
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    const { max, list } = this.map[carType];
    if (list.length >= max) {
        return false;
    }
    list.push(true);
    return true;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
