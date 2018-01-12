// 给定一组公司的员工数据的数据结构，找到对应员工及其下属的重要值
// input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1 
// output: 11 = 5 + 3 + 3

// PS：这个题的实现没有JS的形式，因此暂时没法AC

var findImportant = function(arr, id){
    function findPerson(id){
        for(var i = 0 ; i < arr.length; ++i){
            var item = arr[i];
            if (item[0] == id) {
                return item
            }
        }
    }
    var head = findPerson(id);
    var res = head[1],
        subs = head[2]

    for (var i = 0; i < subs.length; ++i) {
      var sub = subs[i];
      res += findImportant(arr, sub);
    }
    return res;
}

var res = findImportant([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1);
