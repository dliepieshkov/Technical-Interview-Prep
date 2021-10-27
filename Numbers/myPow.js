var myPow = function(x, n) {
    let res = 1, N = n
    if (n===0)return 1
    if (n < 0){
        N = -n
        x = 1 / x
    }
    for(let i = N; i > 0; i = Math.floor(i/2) ){
        if (i % 2===1)res *= x
        x *= x
    }
    return res
};