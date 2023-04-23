// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/

const c = console.log.bind(console)
    var generateTheString = function(n) {
        if(n==2){
            return 'xy'
        }
        let result = ''
        result = new Array(n);
        if(n%2==0){
            result = result.fill("a",0,n-1)
            result = result.fill("b",n-1)
        }
        else{
            result = result.fill('a')
        }
        return result 
    };

c(generateTheString(6))