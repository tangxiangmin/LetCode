// 给日志文件排序

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {

    let letterLogs = [],
        digitLogs = []

    function isLetterLog(log){
        return isNaN(parseInt(log.split(" ")[1]));
    }

    function getLetterLogDetail(log){
        return log.replace(/^\S+\s/, "");
    }

    function insertLetterLog(log){
        let j = 0
        let target = getLetterLogDetail(log)
        for (; j < letterLogs.length; ++j) {
            let item = letterLogs[i]
            let detail = getLetterLogDetail(item)
            if (target < detail ){
                break
            }
        }
        letterLogs.splice(j, 0, log)
    }

    for(let i = 0; i < logs.length; ++i){
        let item = logs[i];
        if (isLetterLog(item)) {
            insertLetterLog(item)
        } else {
            digitLogs.push(item);
        }
    }
    
    return letterLogs.concat(digitLogs)
};