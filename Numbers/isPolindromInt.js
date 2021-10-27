function isPolindromInt(x){
    if (x===0)return true
    if (x < 0 || x % 10===0 )return false
    let reversed_int = 0, pop = 0
    while (x > reversed_int){
        pop = x % 10
        x = Math.floor(x / 10)
        reversed_int = (reversed_int * 10) + pop
    }
    return (x===reversed_int || x===Math.floor(reversed_int / 10))
}
(()=>{
    console.log('isPolindromInt', isPolindromInt(1234567007654321))
})();