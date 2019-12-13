/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {

    if (IP.indexOf('.') > -1 && checkIpv4(IP)) {
        return 'IPv4'
    } else if (IP.indexOf(':') > -1 && checkIpv6(IP)) {
        return 'IPv6'
    }
    return 'Neither'

    function checkIpv4(ip) {
        var arr = ip.split('.')

        return arr.every((item) => {
            if (!item) return false
            if (item.length > 1 && item[0] === '0') {
                return false
            }
            if (!/^\d{1,3}$/.test(item)) {
                return false
            }

            item = parseInt(item)
            if (item > 255 || item < 0) {
                return false
            }

            return true
        })
    }

    function checkIpv6(ip) {
        var arr = ip.split(':')

        return arr.every((item) => {
            if (!item) return false
            if (item.length > 1 && item[0] === '0' && item[1] !== '0') {
                return false
            }
            item = parseInt(item)
            if (item > 65535 || item < 0) {
                return false
            }

            return true
        })
    }
};

var ip = "2001:0db8:85a3:0000:0:8A2E:0370:733a"
// ip = "02001:0db8:85a3:0000:0000:8a2e:0370:7334"
var res = validIPAddress(ip)
console.log(res)