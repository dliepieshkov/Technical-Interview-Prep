var convertZigZagPattern = function(s, numRows) {
    if (numRows===1)return s
    let ret = [], n = s.length, cycleLen = 2 * numRows - 2
    for (let i=0; i < numRows; i++){
        for (let j=0; j < n - i; j += cycleLen){
            ret.push(s[i + j])
            if (i!==0 && i!=numRows - 1 && j + cycleLen - i < n){
                ret.push(s[j + cycleLen - i])
            }
        }
    }
    return ret.join('')
};