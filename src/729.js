var MyCalendar = function () {
    this.booked = [];
};

MyCalendar.prototype.book = function (start, end) {
    for (const arr of this.booked) {
        let l = arr[0], r = arr[1];
        if (l < end && start < r) {
            return false;
        }
    }
    this.booked.push([start, end]);
    return true;
};