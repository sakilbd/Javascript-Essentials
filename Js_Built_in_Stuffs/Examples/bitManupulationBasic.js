// https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/description/

var hasAllCodes = function(s, k) {
    let st = new Set();
    for (let q = 0; q <= s.length - k; q++) {
        st.add(s.substring(q, q + k)) //creats binary substirng of length k

        if (st.size == (1 << k)) return true // means generated substirng covers the binary value of 0 to k 
    }
    return false
};


c(1 << 2) //4    1='01'  // shifts by 2 index  which turns "100" which is 4
c(2 << 2) //8     2='10'  // shifts by 2 index  which turns "1000" which is 8
c(3 << 2) //12     3='11'  // shifts by 2 index which turns '1100' which is 12 
    // let a = "abcd"
    // c(a.indexOf('cd'))

c(hasAllCodes("00110110", 2));

c(hasAllCodes("0110", 2))