(()=>{
    //with memo T(n) = #calls * t  <=(2n+1) * O[1] = O(2n+1) = O(n)
    //without memo O(2^n)
    //1,1,2,3,5,8,13,21
    let fib = (n, memo={})=>{
    let result = 1
    if (memo[n]!==undefined)return memo[n]
    if (n===1 || n===2){
        result = 1
    }else{
        result = fib(n-1) + fib(n-2)
    }
    memo[n] = result
    return result
}
console.log(fib(5))
let fibButtomUp = (n)=>{
    let buttom_up = new Array(n+1)
    buttom_up[1] = 1
    buttom_up[2] = 1
    for (let i=3;i<=n;i++){
        buttom_up[i] = buttom_up[i-1] + buttom_up[i-2]
    }
    return buttom_up[n]
}
console.log(fibButtomUp(5))
})();