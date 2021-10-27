/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer
 */
var myAtoi = function(s) {
    if(s==='')return 0
    let i = 0, res = 0, negative = 1, max = Math.pow(2,31)
    while(s[i] === ' ')i++
    if(s[i] === '-'){
        negative = -1
        i++
    }else if(s[i] === '+'){
        i++
    }
    while(i < s.length){
        let c = s.charCodeAt(i)
        if (!(c>=48 && c<=57))break
        res = res * 10 + 1 * s[i++]
        if(negative===1 && res >= max-1) return max - 1
        else if(negative===-1 && res >= max) return -1 * max
    }
    return negative * res;
};
