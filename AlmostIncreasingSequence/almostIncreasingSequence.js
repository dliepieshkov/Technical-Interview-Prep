function almostIncreasingSequence(sequence) {
    let found = false
    for(let i = 1;i < sequence.length;i++){
        if (sequence[i-1] >= sequence[i]){
            if (found) return false
            found = true
            if (i>1 && sequence[i-2]>=sequence[i]) sequence[i] = sequence[i-1]
        }
    }
    return true
}
console.log(almostIncreasingSequence([1, 2, 10, 3, 4, 5])==true)
console.log(almostIncreasingSequence([1,10, 2, 3, 4, 5, 6])==true)
console.log(almostIncreasingSequence([1,1,1,2])==false)
console.log(almostIncreasingSequence([1,1,2])==true)
console.log(almostIncreasingSequence([1,2,1,3])==true)
console.log(almostIncreasingSequence([1,2,1,2])==false)
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6])==false)
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30])==false)
console.log(almostIncreasingSequence([1, 4, 10, 4, 2])==false)