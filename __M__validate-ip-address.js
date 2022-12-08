// https://leetcode.com/problems/validate-ip-address/description/

const c = console.log.bind(console);
// let reg = /([a-f]|[0-9]|[A-F])/i;
// c(reg.test("0db8"))


//by me 100ms /81ms
var validIPAddress = function(queryIP) {
    let splitIp = queryIP.split(".");
    // return splitIp
    let SplitIpTwo = queryIP.split(":");

    if (splitIp.length == 4) {
        if (splitIp.length == 4) {
            let reg = /([0-9])/i;
            for (let i = 0; i < 4; i++) {
                // c(reg.test(splitIp[i]))
                if ((splitIp[i].length > 1 && splitIp[i][0] == 0) || (splitIp[i].split('').every(item => reg.test(item))) == false || splitIp[i] > 255 || splitIp[i] == '') {
                    return "Neither";
                }
            }
            return "IPv4";
        }
    } else if (SplitIpTwo.length == 8) {
        let reg = /([a-f]|[0-9]|[A-F])/i;
        for (let i = 0; i < 8; i++) {
            // c((SplitIpTwo[i].split('').every(item => reg.test(item))))
            if (SplitIpTwo[i].length > 4) {
                return "Neither";
            }
            if (SplitIpTwo[i].split('').every(item => reg.test(item)) == true && SplitIpTwo[i] != '') {
                // return "IPv6"
            } else {
                return "Neither";
            }
        }
        return "IPv6"
    }
    return "Neither"
}




//from community 80ms 
// function checkIPv6(address){
//     return /^([A-Fa-f0-9]){1,4}$/.test(address);
// }

// function checkIPv4(address){  
//     return /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))$/.test(address);
// }


// var validIPAddress = function(queryIP) {
//     let query = queryIP.split(/[:.]/);

//         if (query.length === 4){
//             if(query.every(checkIPv4)){
//             return "IPv4"
//             }
//             return "Neither"
//         }

//         else if (query.length === 8){
//             if(query.every(checkIPv6)){
//                 return "IPv6"
//             }
//             return "Neither"
//         }

//     else {
//       return  "Neither";  
//     }
// };

c(validIPAddress("192.168.01.1")) // "Neither"

c(validIPAddress("192.168.1.1@0")) //neigher

c(validIPAddress("192.168.1.5"));
c(validIPAddress("255.255.05.256"))
c(validIPAddress("2001:0db8:85a3:0000:0000:8a2j:0370:7334"));

c(validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334"))
c(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"))
c(validIPAddress("2001:0db8:85a3::8A2E:037j:7334"))
c(validIPAddress("1e1.4.5.6"))
c(validIPAddress("256.256.256.256"))

c(validIPAddress("1.0.1."))

c(validIPAddress("2001:db8:85a3:0::8a2E:0370:7334"))