function reverseInt(x){
    let reversed = 0, pop = 0, maxRev = Math.floor(Number.MAX_SAFE_INTEGER/10) , minRev = Math.floor(Number.MIN_SAFE_INTEGER/10)

    while(x!==0){
        pop = x % 10
        x = Math.floor(x / 10)
        if (reversed > maxRev
            || reversed === maxRev && 1 < pop
            || reversed<minRev
            || reversed === minRev && 1 > pop
        ) {
            return 0
        }
        reversed = reversed * 10 + pop
    }
    return reversed
}
(()=>{
    console.log('reverseInt', reverseInt(1990474529917009)===Number.MAX_SAFE_INTEGER)
})();