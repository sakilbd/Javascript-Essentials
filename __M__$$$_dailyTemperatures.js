// https://leetcode.com/problems/daily-temperatures/


const c = console.log.bind(console);

//time complexity around 3000ms 

var dailyTemperatures = function(temperatures) {
    const tempCopy = [...temperatures];
    return temperatures.map((item, i) => {
        let returnItem = 0
        for (let j = i; j < tempCopy.length; j++) {

            if (tempCopy[j] > item) {

                returnItem = j - i;
                return returnItem;
            }

        }
        if (!returnItem) {
            return 0
        }
        returnItem = undefined;
    });
};

//c++ code hase around 400ms
// class Solution {
//     public:
//         vector<int> dailyTemperatures(vector<int>& T) {
//             int n = T.size();
//             stack<int> s;
//             vector<int> ans (n);

//             for(int i=n-1;i>=0;--i){
//                 while(!s.empty() && T[i] >= T[s.top()]) s.pop();
//                 ans[i] = s.empty() ? 0 : s.top()-i;
//                 s.push(i);
//             }

//             return ans;
//         }
//     };

c(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));