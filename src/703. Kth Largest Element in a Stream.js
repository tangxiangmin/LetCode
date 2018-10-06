// 找到输入中第k大的元素

var KthLargest = function (k, nums) {
    this.data = nums.sort((a,b)=>b-a)
    this.k = k
};

KthLargest.prototype.add = function (val) {
    let data = this.data
    let i
    let k = this.k

    for(i = 0; i < data.length; ++i){
        if(data[i] < val) {
            break
        }
    }
    data.splice(i, 0, val)
    return data[k-1]
};

var arr = [4, 5, 8, 2];
var kthLargest = new KthLargest(3, arr);

let res = kthLargest.add(3);  

console.log(res)

res = kthLargest.add(5);
console.log(res);
