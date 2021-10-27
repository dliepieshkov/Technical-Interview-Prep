function reverseInParenthesesLastIndex(inputString) {
    const reverse = (str) => {
        str = str.split('')
        var m = Math.floor(str.length/2),s=''
        for(let i=0;i<m;i++){
            s = str[i]
            str[i] = str[str.length-1-i]
            str[str.length-1-i] = s
        }
        return str.join("")
    }
    let l,r
    while ((l = inputString.lastIndexOf('(')) !=-1) {
        r = inputString.indexOf(')', l)
        inputString = inputString.slice(0, l) + reverse(inputString.slice(l + 1, r)) +
            (inputString.length === r + 1? inputString.slice(r, -1) : inputString.slice(r + 1));
    }
    return inputString
}
function reverseInParentheses(inputString) {
    const reverse = (arr) => {
        var m = Math.floor(arr.length/2),s = ''
        for(let i=0;i<m;i++){
            s = arr[i]
            arr[i] = arr[arr.length-1-i]
            arr[arr.length-1-i] = s
        }
        return arr
    }
    let arr = inputString.split('')
    let count = 0
    let parts = []
    inputString = ''
    for(let i = 0; i < arr.length; i++){
        if (arr[i]==='('){
            parts[count++] = []
        }else if (arr[i]===')'){
            if (count===1){ //There are no parentheses inside the parentheses
                inputString += reverse(parts[count-1]).join('') //Reverse and concat with the result string
            }else {
                parts[count - 2].push(...reverse(parts[count-1])) //Concat reversed text with the text inside the parent parentheses
            }
            parts[--count] = false
        }else if (count>0){
            parts[count-1].push(arr[i]) //Text inside the parentheses
        }else{
            inputString += arr[i] //Text outside of the parentheses
        }
    }
    return inputString
}


console.log(reverseInParentheses("(bar(baz))"))