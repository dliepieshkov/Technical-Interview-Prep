function palindromeRearranging(inputString) {
    let count = 0, map = {}
    if (inputString.length===1)return true
    for(let i=0;i<inputString.length;i++){
        if (!(inputString[i] in map) || map[inputString[i]]===0){
            map[inputString[i]] = 1
            count++
        }else{
            map[inputString[i]] = 0
            count--
        }
    }
    console.log(map,count)
    return count<=1
}
console.log(palindromeRearranging("abbcabb"))