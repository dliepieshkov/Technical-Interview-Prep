function allLongestStrings(inputArray) {
    let result = new Array(), maxLength = 0
    for (let i=0; i<inputArray.length; i++){
        if (maxLength<inputArray[i].length){
            maxLength = inputArray[i].length
        }
        if (result[inputArray[i].length]<maxLength){
            continue
        }
        if (!result[inputArray[i].length]){
            result[inputArray[i].length] = []
        }
        result[inputArray[i].length].push(inputArray[i])
    }
    return result[maxLength]
}
console.log(allLongestStrings(["aba",
    "aa",
    "ad",
    "vcd",
    "aba"]))