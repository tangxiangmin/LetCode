/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
    let contentHash = {}
    function parse(path){
        let len = path.length

        for(let i = 0; i < len; ++i) {
            if(path[i] === ' '){
                dir = path.slice(0, i)
                fileList = path.slice(i+1).trim().split(' ')
                break
            }
        }


        return fileList.map(item=>{
            let len = item.length
            let content = ''
            let fileName = ''
            for(let i = len - 2; i > 0; --i){
                if(item[i] ==='('){
                    fileName = item.slice(0, i)
                    break
                }else {
                    content = item[i] + content
                }
            }
            return {
                fileName: dir + '/' + fileName,
                content
            }
        })
    }

    for(let i = 0; i < paths.length; ++i) {
        let path = paths[i]
        let result = parse(path);
        result.forEach(item=>{
            let { fileName, content} = item
            if (!contentHash[content]) {
                contentHash[content] = [];
            }
            contentHash[content].push(fileName);
        })
       
    }

    return Object.values(contentHash).filter(item=>item.length > 1)
};
let input = [
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)"
];

console.log(findDuplicate(input));