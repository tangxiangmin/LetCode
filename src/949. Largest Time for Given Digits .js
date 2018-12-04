/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {

    let group = []

    let len = A.length
    for (let i = 0; i < len - 1; ++i){
        for(let j = i+1; j < len; ++j){

            group.push(A[i]*10 + A[j])
            group.push(A[i]+A[j]*10)
        }
    }
    let hour = -1,
        minutes = -1

    hourIndex = -1 
    for(let i = 0; i < group.length; ++i){
        let item = group[i]
        if (item < 24 && hour < item){
            hourIndex = i
            hour = item
        }

        if (item < 60 && hourIndex !== i && minutes < item){
            minutes = item;
        }
    }
    if (hour > -1 && minutes > -1){
        return hour.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')
    }else {
        return ""
    }
};

largestTimeFromDigits([1, 2, 3, 4])